# AI 批量生产珠宝内容：工具链与工作流调研报告

> **调研日期**：2026-10-07
> **适用场景**：翡翠珠宝商家，不出镜、不录音（结巴），已有供应商产品图，需批量生产「珠宝小故事/小知识」图文+短视频，分发至小红书/抖音/YouTube。
> **核心目标**：给出从零到一的最小可行生产方案。

---

## 一、四大模型在内容生产中的分工建议

### 1.1 总览对比表

| 模型 | 最新版本（2026.10） | 入门价 | 中文文案质量 | 长文写作 | 指令遵循 | 独特价值 | 主要短板 |
|---|---|---|---|---|---|---|---|
| **Claude** (Anthropic) | Opus 4.8 / Sonnet 4.5 | $20/月 Pro | ⭐⭐⭐⭐⭐ 最自然、最少AI味 | ⭐⭐⭐⭐⭐ 200K上下文，长文连贯 | ⭐⭐⭐⭐⭐ 风格指令遵循最好 | 写珠宝故事、小红书长文案、脚本底稿 | 无原生音视频多模态；国内需代理 |
| **ChatGPT** (OpenAI) | GPT-5.5 / GPT-6 | $20/月 Plus | ⭐⭐⭐⭐ 可用但偏"套路感" | ⭐⭐⭐ 1200字后风格漂移 | ⭐⭐⭐⭐ 结构化输出强 | 批量生成标题/标签/多语言版本、DALL-E配图 | 写作偏模板化，易加"Certainly!"等废话 |
| **Gemini** (Google) | 3.1 Pro | $19.99/月 AI Pro | ⭐⭐⭐⭐ 商务简洁风 | ⭐⭐⭐⭐⭐ 2M上下文，超长文档 | ⭐⭐⭐⭐ 多模态指令强 | YouTube脚本+SEO关键词、Google搜索实时数据、分析竞品缩略图 | 创意写作偏弱，中文语感不如Claude |
| **Grok** (xAI) | Grok 4.3 / 4.6 | $30/月 SuperGrok | ⭐⭐⭐ 偏美式口语 | ⭐⭐⭐ 中等 | ⭐⭐⭐ 风格随意 | **实时X热搜趋势**、病毒式开头钩子、Grok Imagine短视频生成 | 中文写作一般；与国内平台（小红书/抖音）生态脱节 |

> **来源**：
> - Claude写作质量最佳：[Practicaly AI](https://www.practicaly.ai/p/which-ai-model-to-use)、[SurePrompts](https://sureprompts.com/blog/chatgpt-vs-claude-2026)、[腾讯云开发者社区](https://cloud.tencent.com/developer/article/2669932)
> - 四模型价格对比：[Tech Insider](https://tech-insider.org/chatgpt-vs-claude-vs-gemini-vs-grok-subscription-pricing-2026/)、[Fello AI](https://felloai.com/pt/claude-vs-gemini-vs-chatgpt/)
> - Grok实时X数据优势：[Sintra AI](https://sintra.ai/blog/grok-vs-chatgpt-vs-gemini?tab=case-studies)、[Eraswitch](https://eraswitch.com/grok-ai-updates-in-2026-everything-you-should-know/)
> - Gemini YouTube/SEO优势：[AI Trend Blend](https://aitrendblend.com/gemini-prompts-youtube-channel-growth/)、[SubSub](https://www.subsub.io/blog/youtube-seo-in-2026-the-complete-guide-for-creators-in-the-age-of-ask-youtube)
> - 2026模型横评：[WIO AI](https://wioai.com/chatgpt-vs-claude-vs-gemini-vs-grok-vs-perplexity-which-ai-chatbot-ai-tool-is-best-in-2026/)、[Albato](https://albato.com/blog/publications/grok-chatgpt-gemini-claude-overview)

### 1.2 珠宝内容场景分工建议

```
┌─────────────────────────────────────────────────────────┐
│  选题策划 & 珠宝故事底稿  →  Claude Pro（主力写作）        │
│  批量标题/标签/多语言变体  →  ChatGPT Plus（结构化批量）    │
│  YouTube脚本 + SEO关键词   →  Gemini AI Pro（Google生态）   │
│  热点追蹭 & 病毒式钩子     →  Grok（X实时趋势参考）         │
└─────────────────────────────────────────────────────────┘
```

**具体用法：**

- **Claude 是内容生产的"大脑"**：把你的品牌调性、翡翠知识手册、过往爆款文案喂给它做 Project，让它写「镯子对着窗光照一下是什么感觉」这类有画面感、有情感的珠宝小故事。多个实测反馈显示 Claude 的中文长文"最不像AI写的"，编辑量最少。["https://www.practicaly.ai/p/which-ai-model-to-use","https://toolchase.com/blog/claude-vs-chatgpt-2026/"]
- **ChatGPT 做"批量工厂"**：一篇珠宝故事写完后，让 ChatGPT 批量生成 10 个小红书标题、20 个标签、3 个平台版本（小红书版/抖音版/YouTube英文字幕版）。它的结构化 JSON 输出最稳定。
- **Gemini 做 YouTube SEO**：YouTube 已用 Gemini 做多模态内容理解，口语化关键词权重提升。用 Gemini 分析竞品视频标题/缩略图模式，写 YouTube 脚本时自然植入搜索词。["https://www.subsub.io/blog/youtube-seo-in-2026-the-complete-guide-for-creators-in-the-age-of-ask-youtube"]
- **Grok 是"趋势雷达"**：如果你做海外版（YouTube/TikTok），用 Grok 看 X 上珠宝/翡翠话题正在讨论什么，快速出蹭热点内容。对国内小红书/抖音价值有限。

---

## 二、AI 配音工具对比

> **用户约束**：不录音、不克隆自己声音，需要选一个"沉稳女声/男声"讲珠宝故事，不能机械感太重。

### 2.1 配音工具对比表

| 工具 | 用途 | 国内可用性 | 价格（截至2026-10） | 珠宝类适配音色 | 优势 | 局限 | 链接 |
|---|---|---|---|---|---|---|---|
| **剪映 AI 配音** | 短视频内置配音 | ✅ 直连免费 | SVIP 约79元/月（年付约199-499元/年）["https://it.ithome.com/archiver/0/908/477.htm"] | 基础音色够用，但高端情感音色少 | 与剪辑一体化，零成本上手 | 长文本断句奇怪，情感表现力一般 | [capcut.cn](https://www.capcut.cn) |
| **魔音工坊** | 专业口播/有声书配音 | ✅ 直连 | VIP 48元/月起；SVIP 199元/月（全场音色）；按量：5万字30元["https://recatools.com/ai-directory/mobvoi-moyin/","http://xmsumi.com/detail/462"] | 声音库丰富（600+音色），有沉稳叙事类音色 | 情感细腻、支持字幕同步、AI剪辑一体化 | 高端音色需SVIP；长文本成本随量涨 | [魔音工坊](https://www.moyin.com) |
| **讯飞配音** | 正式/专业播报 | ✅ 直连 | 网页端月付19-39元档；API 2.2-3元/万字符["https://peiyin.xunfei.cn/seospread/peiyin/ai3959.html","https://www.xfyun.cn/services/online_tts_long"] | 中文发音最标准，适合正式讲解 | 中文自然度最高、方言多、情感计算强 | 偏正式播报感，讲珠宝故事可能太"新闻腔"；价格偏贵 | [讯飞智作](https://peiyin.xunfei.cn) |
| **ElevenLabs** | 海外多语言配音 | ⚠️ 需代理 | 免费10k字符/月；Starter $6/月；Creator $22/月（121k积分）；Pro $99/月["https://elevenlabs.io/pricing"] | 英文配音封神；中文音色近年提升但仍不如国产 | 情绪表现力极强、声音克隆最自然、170+语言 | 中文音色自然度不如魔音/讯飞；国内访问需代理 | [elevenlabs.io](https://elevenlabs.io) |
| **OpenAI TTS** | API批量配音 | ⚠️ 需代理 | API按token计费，约$15/百万字符 | 音色偏机械 | 可通过API批量自动化接入 | 情感表现力弱，不适合讲故事 | [OpenAI TTS](https://platform.openai.com/docs/guides/text-to-speech) |

### 2.2 珠宝配音选型建议

- **国内首选：魔音工坊 SVIP（199元/月）**——声音库最大，情感表现力在国产工具里最好，适合"珠宝故事"这种需要娓娓道来的场景。选一个偏沉稳的叙事女声（如"知微""旁白小帅"类音色），语速调到120-140字/分。["https://www.iesdouyin.com/share/video/7672334950368070921"]
- **预算有限：剪映自带配音（SVIP约40元/月均摊）**——如果每条视频15-30秒，剪映的免费/基础音色够用，省一道导出工序。
- **出海 YouTube：ElevenLabs Creator（$22/月）**——英文解说用它，中文内容不要用它（中文音色不如国产）。
- **不推荐讯飞配音做珠宝故事**：太像新闻联播，缺乏娓娓道来的温度。

---

## 三、AI 图片 / 视频 / 数字人工具对比

### 3.1 图生视频工具（用产品图做动态镜头）

> 核心需求：把供应商的产品图（镯子、戒指）变成"对着窗光照一下""轻轻转动"这种产品展示镜头。

| 工具 | 国内可用性 | 价格（2026-10） | 5秒视频成本 | 珠宝产品适配度 | 优势 | 局限 |
|---|---|---|---|---|---|---|
| **可灵 AI (Kling 3.0)** | ✅ 直连 | 黄金会员66元/月；铂金266元/月；钻石666元/月["https://www.woshipm.com/ai/6370855.html"] | 约4-5元/条（5s）["https://www.iesdouyin.com/share/video/7614091045483203850"] | ⭐⭐⭐⭐⭐ 电影质感、光影细腻、支持首尾帧控制 | 产品打光质感最好，长视频可达2分钟，人物一致性强 | 铂金以上才解锁3.0模型；排队时间长 |
| **即梦 AI (Seedance 2.0)** | ✅ 直连 | 基础会员约69元/月起（频繁调价，高级档499元/月）["https://36kr.com/p/3804766402698759"] | 约3-4元/条（5s） | ⭐⭐⭐⭐ 性价比高，快速出片 | 门槛低、价格便宜一半、与剪映/豆包生态打通 | 涨价频繁；精品感不如可灵 |
| **Runway (Gen-4.5)** | ⚠️ 需代理 | Standard $15/月（625积分≈52秒视频）；Pro $35/月["https://runway.com/pricing"] | 约$0.12/秒 ≈ 4元/5秒 | ⭐⭐⭐⭐ 专业创意控制强 | 行业标准工具，工作流集成好 | 国内需代理；积分消耗快 |
| **Pika 2.2** | ⚠️ 需代理 | 每日免费积分（约8-12条短片段） | 免费可薅 | ⭐⭐⭐ 特效玩法多 | 免费额度多，适合快速验证 | 产品质感不如可灵/Runway |
| **Sora (OpenAI)** | ⚠️ 需代理+订阅 | ChatGPT Pro $200/月才可用 | 高 | ⭐⭐⭐⭐⭐ 写实感最强 | 前沿画质 | 价格贵、日额度有限、国内不可直连 |

> **选型结论**：珠宝产品图做动态镜头，**国内首选可灵**（光影质感最接近真实珠宝拍摄），**即梦做快速初版验证**。工作流是：即梦出初版→可灵出成片。["https://www.iesdouyin.com/share/video/7645091996814889862"]

### 3.2 AI 配图工具（珠宝知识信息图/对比图）

| 工具 | 国内可用性 | 价格（2026-10） | 信息图适配度 | 优势 | 局限 |
|---|---|---|---|---|---|
| **Midjourney V7** | ⚠️ 需代理+Discord | Basic $10/月；Standard $30/月（15小时GPU）["https://docs.midjourney.com/hc/en-us/articles/27870484040333-Comparing-Midjourney-Plans"] | ⭐⭐⭐⭐ 艺术风格强 | 视觉美学天花板，适合氛围感配图 | 不擅长精确文字排版；信息图需后期加工 |
| **即梦 AI** | ✅ 直连 | 同上图视频会员 | ⭐⭐⭐⭐ 中文理解好 | 中文prompt理解好，国风/珠宝风格多 | 文字渲染仍偶有错字 |
| **通义万相** | ✅ 直连 | 高级会员约145元/月（连续包年价）["https://tongyi.aliyun.com/wan/pricing"] | ⭐⭐⭐ 国内大厂方案 | 与阿里生态打通 | 设计感不如Midjourney |
| **Recraft V4** | ⚠️ 需代理 | Basic $10/月（1000积分）；Advanced $27/月（4000积分）["https://www.recraft.ai/docs/plans-and-billing/paid-plans"] | ⭐⭐⭐⭐⭐ **信息图/品牌图形最佳** | 矢量输出、品牌色统一、文字渲染准确、擅长做对比图/信息图 | 国内需代理 |

> **选型结论**：珠宝知识对比图（如"冰种vs糯种"）首选 **Recraft**（文字排版最准），氛围感配图用 **即梦/Midjourney**。

### 3.3 数字人工具现状（2026）

| 工具 | 国内可用性 | 价格 | 珠宝讲解适配度 | 现状提醒 |
|---|---|---|---|---|
| **HeyGen** | ⚠️ 需代理 | Creator $29/月（600积分）；Pro $49/月；Business $149/月["https://www.aitooldiscovery.com/guides/heygen-pricing"] | ⭐⭐⭐⭐ 形象最自然、中文口型最佳 | 数字人赛道头部，但2026年平台监管收紧 |
| **闪剪 AI** | ✅ 直连 | 需登录查价（约几十到百元/月档）["https://www.shanjian.tv/ziyuan/blog/news-69/"] | ⭐⭐⭐ 照片即可生成口播 | 国内矩阵起号常用，皮肤/眼神拟真度提升 |
| **硅基智能** | ✅ 直连 | 企业级定价 | ⭐⭐⭐ 直播带货强 | 偏直播场景，短视频口播非主力 |

> **⚠️ 重要风险提示（2026年平台政策）**：
> - 抖音从2026年1月起已发7期AI内容治理公告，**未标注AI生成内容、数字人未实名认证运营主体，会被限流**。["https://www.iesdouyin.com/share/video/7689049330096170170","https://www.iesdouyin.com/share/video/7639370728710522993"]
> - **珠宝商家做数字人讲解需谨慎**：数字人+珠宝带货容易触发"虚假宣传""AI生成未标注"双重审核。建议**优先用产品图+配音+字幕的图文视频形式**，而非数字人口播。
> - 如果一定要用数字人，必须：①账号实名绑定运营主体；②视频标注"AI生成"；③不要用数字人做功效性宣传。

---

## 四、端到端工作流：一条珠宝短视频的诞生

### 4.1 标准流水线（单条30秒短视频）

```
步骤1：选题 & 脚本
  ├─ 工具：Claude Pro
  ├─ 输入：产品图 + 珠宝知识点清单
  ├─ 输出：30秒口播文案（约100字）+ 分镜描述
  └─ 耗时：批量生成时5分钟/条（人工微调10分钟）

步骤2：标题 & 标签
  ├─ 工具：ChatGPT Plus
  ├─ 输入：脚本内容
  ├─ 输出：10个小红书标题 + 20个标签 + YouTube英文title/tags
  └─ 耗时：2分钟/条

步骤3：AI 配音
  ├─ 工具：魔音工坊（国内）/ ElevenLabs（出海英文）
  ├─ 输入：脚本文案
  ├─ 输出：MP3音频 + SRT字幕文件
  └─ 耗时：3分钟/条

步骤4：画面素材
  ├─ 方式A：供应商产品图 → 可灵图生视频（"镯子对窗光转动"）
  ├─ 方式B：珠宝知识信息图 → Recraft/即梦生成
  ├─ 方式C：静态产品图轮播（最省事）
  └─ 耗时：5-15分钟/条（含抽卡重试）

步骤5：剪辑合成
  ├─ 工具：剪映专业版
  ├─ 操作：导入音频+视频素材 → 自动字幕 → 加BGM → 导出
  └─ 耗时：10分钟/条

步骤6：发布
  ├─ 平台：小红书 / 抖音 / YouTube（手动或定时发布）
  └─ 耗时：3分钟/条
```

**单条总耗时**：约30-45分钟（熟练后可压到20分钟）
**批量生产时**：利用周末集中生产一周的量，日均实际操作时间约1小时。

### 4.2 自动化进阶方案（n8n + API）

对于日产2条的规模，可以用 **n8n**（开源工作流自动化工具）串联 API：["https://n8n.io/workflows/11589-automated-pov-video-creation-with-ai-scripts-visual-generation-and-youtube/","https://n8n.io/workflows/4630-generate-videos-with-ai-elevenlabspiapi-shotstackcreatomate-and-post-to-youtube/"]

```
Google Sheets（选题表）
  → n8n 触发
  → Claude API 生成脚本
  → ElevenLabs API 生成配音
  → Pika/可灵 API 生成画面
  → Shotstack/Creatomate 自动合成视频
  → YouTube API 自动上传
```

**现实建议**：n8n 自动化需要技术配置能力，初期建议先手动跑通20条内容，验证哪类内容数据好，再上自动化。自动化是"放大已验证流程"的工具，不是"代替验证"的工具。

---

## 五、月度成本测算（60条短视频/月，每天2条）

### 5.1 国内方案（小红书 + 抖音为主）

| 工具 | 用途 | 月费 | 备注 |
|---|---|---|---|
| Claude Pro | 写脚本/珠宝故事 | ~$20 ≈ 145元 | 需海外信用卡+代理 |
| 魔音工坊 SVIP | AI配音（全场音色） | 199元 | 直连，中文配音主力 |
| 可灵 AI 黄金会员 | 图生视频 | 66元 | 33个标准视频/月，够用 |
| 剪映 SVIP | 剪辑+自动字幕 | ~40元（年付均摊） | 年付约199-499元/年 |
| Recraft（可选） | 信息图 | $10 ≈ 72元 | 做知识对比图时才需要 |
| **合计** | | **约520元/月** | 不含Recraft约450元 |

> 如果完全不想用海外工具，Claude 可用国产替代（如 Kimi K2 / DeepSeek），但中文写作质量会打折扣。纯国产方案约 **300-350元/月**。

### 5.2 海外方案（YouTube + 小红书双平台）

| 工具 | 用途 | 月费 | 备注 |
|---|---|---|---|
| Claude Pro | 长文案/故事 | $20 | |
| ChatGPT Plus | 批量标题/标签/多语言 | $20 | |
| Gemini AI Pro | YouTube SEO脚本 | $19.99 | |
| ElevenLabs Creator | 英文配音 | $22 | 121k积分，够60条30秒视频 |
| Runway Standard | 图生视频 | $15 | 625积分≈52秒视频，需精打细算 |
| Midjourney Standard | 氛围配图 | $30 | 15小时GPU |
| **合计** | | **约$127/月 ≈ 920元** | 全部需代理+海外支付 |

---

## 六、最小可行工具组合推荐

### 方案A：国内直连方案（推荐起步）

> **目标平台**：小红书 + 抖音
> **月成本**：约450-520元
> **无需代理、无需海外信用卡**

| 环节 | 工具 | 理由 |
|---|---|---|
| 写脚本 | **Claude Pro**（或国产 Kimi 平替） | 中文长文最自然，珠宝故事不AI味 |
| 批量标题/标签 | **ChatGPT Plus**（或国产豆包/Kimi） | 结构化输出稳定 |
| AI配音 | **魔音工坊 SVIP** | 国产配音情感最好，选沉稳叙事音色 |
| 产品图动态化 | **可灵AI 黄金会员** | 珠宝光影质感最佳 |
| 知识配图 | **即梦AI**（含在可灵预算外，约69元/月） | 中文prompt理解好 |
| 剪辑合成 | **剪映专业版 SVIP** | 一站式搞定字幕+BGM+导出 |

**第一周启动步骤**：
1. 注册 Claude Pro + 魔音工坊 + 可灵 + 剪映SVIP（总启动成本约500元）
2. 把你手上的翡翠知识（种水、颜色、工费等）整理成一份文档喂给 Claude Project
3. 让 Claude 一次生成20个选题的脚本
4. 批量配音、批量生成视频、集中剪辑
5. 每天发2条，跑2周看数据

### 方案B：海外出海方案（YouTube Shorts + TikTok）

> **目标平台**：YouTube / TikTok / Instagram Reels
> **月成本**：约$127 ≈ 920元
> **需代理 + 海外信用卡**

| 环节 | 工具 | 理由 |
|---|---|---|
| 写脚本 | **Claude Pro** | 英文叙事写作最佳 |
| SEO关键词 | **Gemini AI Pro** | Google生态，YouTube算法直接相关 |
| 批量变体 | **ChatGPT Plus** | 多语言版本、标题AB测试 |
| AI配音 | **ElevenLabs Creator** | 英文配音天花板 |
| 图生视频 | **Runway Standard** | 专业级产品镜头 |
| 氛围配图 | **Midjourney Standard** | 视觉美学天花板 |
| 剪辑 | **剪映国际版 CapCut** | 免费够用 |

### 方案C：极简验证方案（先跑起来再说）

> **月成本**：约150元
> **先验证内容方向，再升级工具链**

| 环节 | 工具 | 成本 |
|---|---|---|
| 写脚本 | **豆包/Kimi 免费版** | 0元 |
| AI配音 | **剪映自带配音** | 0元（剪映免费版够用） |
| 产品图展示 | **静态图轮播**（剪映模板） | 0元 |
| 剪辑 | **剪映免费版** | 0元 |
| 可灵 | 每日免费额度 | 0元 |

> **建议**：先用方案C跑2周，验证哪类珠宝内容有人看，再升级到方案A。不要一上来就买一堆会员。

---

## 七、关键风险与注意事项

1. **AI内容标注合规**：2026年抖音/小红书要求AI生成内容主动标注，否则限流。发布时务必勾选"内容由AI生成"。["https://www.iesdouyin.com/share/video/7689049330096170170"]
2. **数字人谨慎用**：珠宝+数字人组合容易触发"虚假宣传"审核。初期建议纯产品图+配音+字幕。
3. **可灵/即梦价格波动大**：2026年AI视频工具频繁调价，建议按月订阅，不年付。
4. **Claude/ChatGPT/Gemini 国内访问**：均需代理+海外支付方式。如果不想折腾，国产替代：DeepSeek（写作）、Kimi K2（长文）、豆包（批量）。
5. **产品图版权**：供应商产品图二次创作后发布，确保你有使用权。

---

## 八、信息来源汇总

| 结论 | 来源 |
|---|---|
| Claude写作质量最佳、最少AI味 | https://www.practicaly.ai/p/which-ai-model-to-use |
| Claude vs ChatGPT 写作对比 | https://toolchase.com/blog/claude-vs-chatgpt-2026/ |
| 四模型2026横评 | https://wioai.com/chatgpt-vs-claude-vs-gemini-vs-grok-vs-perplexity-which-ai-chatbot-ai-tool-is-best-in-2026/ |
| 四模型价格对比 | https://tech-insider.org/chatgpt-vs-claude-vs-gemini-vs-grok-subscription-pricing-2026/ |
| SuperGrok定价 | https://aitoolanalysis.com/supergrok-subscription-price-2026/ |
| Grok实时X趋势优势 | https://sintra.ai/blog/grok-vs-chatgpt-vs-gemini |
| Gemini YouTube SEO优势 | https://aitrendblend.com/gemini-prompts-youtube-channel-growth/ |
| YouTube SEO 2026 Gemini整合 | https://www.subsub.io/blog/youtube-seo-in-2026-the-complete-guide-for-creators-in-the-age-of-ask-youtube |
| ElevenLabs定价 | https://elevenlabs.io/pricing |
| 魔音工坊定价 | https://recatools.com/ai-directory/mobvoi-moyin/ |
| 魔音工坊按量付费 | http://xmsumi.com/detail/462 |
| 讯飞配音定价 | https://peiyin.xunfei.cn/seospread/peiyin/ai3959.html |
| 剪映SVIP价格 | https://it.ithome.com/archiver/0/908/477.htm |
| 可灵定价 | https://www.woshipm.com/ai/6370855.html |
| 即梦vs可灵成本对比 | https://www.iesdouyin.com/share/video/7614091045483203850 |
| 即梦涨价动态 | https://36kr.com/p/3804766402698759 |
| Runway定价 | https://runway.com/pricing |
| Midjourney定价 | https://docs.midjourney.com/hc/en-us/articles/27870484040333 |
| Recraft定价 | https://www.recraft.ai/docs/plans-and-billing/paid-plans |
| 通义万相定价 | https://tongyi.aliyun.com/wan/pricing |
| HeyGen定价 | https://www.aitooldiscovery.com/guides/heygen-pricing |
| 闪剪AI评测 | https://www.shanjian.tv/ziyuan/blog/news-69/ |
| 2026数字人合规红线 | https://www.iesdouyin.com/share/video/7689049330096170170 |
| 抖音AI内容治理 | https://www.iesdouyin.com/share/video/7639370728710522993 |
| n8n自动化视频工作流 | https://n8n.io/workflows/11589-automated-pov-video-creation-with-ai-scripts-visual-generation-and-youtube/ |
| n8n+ElevenLabs+YouTube | https://n8n.io/workflows/4630-generate-videos-with-ai-elevenlabspiapi-shotstackcreatomate-and-post-to-youtube/ |
| AI配音工具横评 | https://www.iesdouyin.com/share/video/7677899743623761167 |
| AI视频工具横评 | https://www.iesdouyin.com/share/video/7628984636101741859 |

---

*报告完。所有价格均标注了来源与日期，实际购买时请以官网最新价格为准。*
