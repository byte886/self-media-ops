const puppeteer = require('puppeteer-core');
const fs = require('fs');
const os = require('os');
const path = require('path');

const profileRoot = path.join(os.homedir(), 'Library/Application Support/Google/Chrome');
const [port, wsPath] = fs.readFileSync(path.join(profileRoot, 'DevToolsActivePort'), 'utf8').trim().split('\n');
const browserWSEndpoint = `ws://127.0.0.1:${port}${wsPath}`;

(async () => {
  const browser = await puppeteer.connect({
    browserWSEndpoint,
    defaultViewport: null,
    targetFilter: () => true,
  });

  // Find existing Xiaohongshu tab or create new one
  const pages = await browser.pages();
  let page = pages.find(p => p.url().includes('xiaohongshu.com'));
  
  if (!page) {
    page = await browser.newPage();
  }

  // Navigate to search
  await page.goto('https://www.xiaohongshu.com/search_result?keyword=翡翠手镯实体店&type=51&sort=popularity', {
    waitUntil: 'networkidle2',
    timeout: 30000
  });
  
  await new Promise(r => setTimeout(r, 3000));

  // Extract search results
  const results = await page.evaluate(() => {
    const items = [];
    document.querySelectorAll('section.note-item').forEach((el, i) => {
      if (i >= 15) return;
      const title = el.querySelector('.title')?.textContent?.trim() || '';
      const author = el.querySelector('.author .name')?.textContent?.trim() || '';
      const likes = el.querySelector('.like-wrapper .count')?.textContent?.trim() || '';
      const link = el.querySelector('a')?.getAttribute('href') || '';
      items.push({ title, author, likes, link });
    });
    return items;
  });

  console.log(JSON.stringify(results, null, 2));
  await browser.disconnect();
})();
