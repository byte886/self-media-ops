# 跨仓库协作地图

> self-media-ops 不是孤岛。桌面有 5 个仓库分工协作，本文件记录它们的关系。

## 5 个仓库

| 仓库 | 位置 | 职责 | GitHub |
|------|------|------|--------|
| **self-media-ops** | `~/Desktop/self-media-ops/` | **内容发布层**：朋友圈/小红书/抖音的文案策略、写作SOP、AI味质检、运营知识库 | byte886/self-media-ops |
| **heritage-ai-video-sop** | `~/Desktop/heritage-ai-video-sop/` | **生产执行层**：珠宝AI出图/出视频SOP、导演思维、音频、五门禁质检 | byte886/heritage-ai-video-sop |
| **multiplatform-content-pipeline** | `~/Desktop/multiplatform-content-pipeline/` | **技能管道层**：多平台视频下载/转写/效果分析的通用技能 | byte886/multiplatform-content-pipeline |
| **ai-intel-monitor** | `~/Desktop/ai-intel-monitor/` | **情报监控层**：AI工具/珠宝营销渠道监控、定时更新 | byte886/ai-intel-monitor |
| **accounting-kb** | `~/Desktop/accounting-kb/` | **治理方法论参考**：README/AGENTS/docs/project-management 分层、Diátaxis文档分类、质量保证清单 | byte886/accounting-kb |

## 分工关系

```
ai-intel-monitor（情报：看什么/去哪看）
        ↓ 发现新工具/新方法
multiplatform-content-pipeline（管道：下载/转写/分析）
        ↓ 提取出SOP
heritage-ai-video-sop（生产：出图/出视频/质检）
        ↓ 产出素材
self-media-ops（发布：文案策略/AI味质检/运营知识）
        ↑ 治理规范参考
accounting-kb（怎么治理/怎么写文档）
```

## 从 heritage-ai-video-sop 继承的关键方法论

这些已经在生产仓验证过，self-media-ops 直接引用，不重复造：

### 三档视频流水线（成本分层）
1. **2.0 Fast 试分镜**：淘汰废方案，成本最低
2. **480P生成+AI超分**（≈0.2元/秒）：门店屏/抖音信息流种草片
3. **2.5 原生1080P**：客户交付级/蓝宝石微距，保质量

### 人体4项自检（视频出片后必查）
- 链条无变形
- 五官自然
- 手部自然
- 吊坠居中不漂移

### 导演思维先问（效果分析前置步骤）
拆解任何视频前先问：导演动机是什么？答不出动机=拆解未完成。

### 珠宝旁白路线
诗性路线，低声线，2句主体+1句slogan，低频弦乐75-90BPM，无字幕无水印。

### 本地vs云端结论
现阶段珠宝商走云端（豆包Seedance）：手机端操作、真人模特感、音画同步三项全是云端优势。本地自建需月产上百条+保密需求才划算。
