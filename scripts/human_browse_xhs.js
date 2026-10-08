/**
 * 人味浏览脚本：模拟真人节奏刷小红书
 * 核心原则：
 * 1. 随机延迟 3-10 秒，不连续快速操作
 * 2. 自然滚动，每次滚动后停顿像在读内容
 * 3. 鼠标随机移动
 * 4. 一个 session 只刷 3-5 页，不要批量
 * 5. 先刷推荐页"养号"，再搜索
 */
const puppeteer = require('puppeteer-core');
const fs = require('fs');
const os = require('os');
const path = require('path');

const profileRoot = path.join(os.homedir(), 'Library/Application Support/Google/Chrome');
const [port, wsPath] = fs.readFileSync(path.join(profileRoot, 'DevToolsActivePort'), 'utf8').trim().split('\n');
const browserWSEndpoint = 'ws://127.0.0.1:' + port + wsPath;

// 随机延迟
const sleep = (min, max) => new Promise(r => setTimeout(r, Math.floor(Math.random() * (max - min) + min)));

// 模拟真人滚动
async function humanScroll(page, times = 3) {
  for (let i = 0; i < times; i++) {
    const scrollAmount = Math.floor(Math.random() * 300) + 200;
    await page.mouse.wheel({ deltaY: scrollAmount });
    await sleep(2000, 5000); // 每页停2-5秒，像在看内容
  }
}

// 鼠标随机移动
async function humanMouseMove(page) {
  const x = Math.floor(Math.random() * 800) + 100;
  const y = Math.floor(Math.random() * 600) + 100;
  await page.mouse.move(x, y, { steps: 10 });
}

(async () => {
  const browser = await puppeteer.connect({
    browserWSEndpoint,
    defaultViewport: null,
    targetFilter: () => true,
  });

  const pages = await browser.pages();
  let page = pages.find(p => p.url().includes('xiaohongshu.com'));
  if (!page) page = await browser.newPage();

  console.log('=== 开始人味浏览 ===');
  console.log('当前URL:', page.url());

  // 第一步：先停在首页，像真人一样刷推荐
  console.log('1. 浏览首页推荐...');
  await page.goto('https://www.xiaohongshu.com/explore', { waitUntil: 'domcontentloaded' });
  await sleep(5000, 8000); // 刚打开停5-8秒
  await humanScroll(page, 2);
  await humanMouseMove(page);
  await sleep(3000, 6000);

  // 第二步：搜索
  console.log('2. 搜索翡翠手镯...');
  await page.goto('https://www.xiaohongshu.com/search_result?keyword=翡翠手镯实体店&type=51', { waitUntil: 'domcontentloaded' });
  await sleep(4000, 7000);
  await humanScroll(page, 3);
  await humanMouseMove(page);
  await sleep(3000, 5000);

  // 第三步：提取结果
  console.log('3. 提取内容...');
  const results = await page.evaluate(() => {
    const items = [];
    document.querySelectorAll('section.note-item').forEach((el, i) => {
      if (i >= 10) return;
      items.push({
        title: el.querySelector('.title')?.textContent?.trim() || '',
        author: el.querySelector('.author .name')?.textContent?.trim() || '',
        likes: el.querySelector('.like-wrapper .count')?.textContent?.trim() || '',
        link: el.querySelector('a.cover')?.getAttribute('href') || ''
      });
    });
    return items;
  });

  console.log(JSON.stringify(results, null, 2));
  console.log('=== 浏览结束 ===');
  await browser.disconnect();
})();
