# 多平台AI调研工具SOP（2026-10-07）

## 调研工具清单

| AI | 正确URL | 登录方式 | 备注 |
|---|---|---|---|
| 豆包 | https://www.doubao.com/chat/ | 已登录 | 直接用 |
| DeepSeek | https://chat.deepseek.com/ | 手机验证码 | 需先登录 |
| 元宝 | https://yuanbao.tencent.com/chat/ | 微信扫码 | 需先登录 |
| ChatGPT | https://chatgpt.com/ | 已登录 | 不是chat.openai.com |
| Claude | https://claude.ai/ | 已登录 | 需VPN |
| Grok | https://grok.com/ | 已登录 | 需VPN |
| Google | 搜索引擎 | 无需 | 搜中文关键词 |

## 踩过的坑

1. **ChatGPT URL错误**：chat.openai.com会跳转，正确是chatgpt.com
2. **海外AI超时**：VPN不稳时Claude/ChatGPT/Grok加载慢，多等一会
3. **输入框找不到**：不同AI用不同输入框——
   - 豆包/元宝/Claude：contenteditable DIV
   - DeepSeek/Grok：textarea
   - ChatGPT：contenteditable DIV（textarea隐藏）
4. **发送后等回答**：至少等15-25秒再读结果
5. **DeepSeek/元宝首次需登录**：提前登录好再问
6. **不要硬编码选择器**：先用`[contenteditable=true]`，找不到再试`textarea`

## Chrome CDP连接方式

```javascript
const { connectDailyChrome, findPage } = require('./connect_browser');
const browser = await connectDailyChrome({ ensureRunning: true });
const page = await findPage(browser, 'chatgpt.com');
```

关键：用`findPage`按URL关键词找标签，不要硬编码标签索引。

## 调研问题模板

```
我是[身份]，有[资源]。
问题：
1. [渠道]要不要做？优先级排第几？
2. 是和其他平台发一样内容还是单独做？
3. 应该发什么内容养号？
```

## 调研流程

1. Google搜中文关键词（9篇起步）
2. 逐个AI问同一个问题
3. 对比结论，一致则采用
4. 不一致的再深挖
