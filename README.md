# self-media-ops

> 自媒体运营知识库与发布素材库。不限行业，框架可复用。

## 仓库地址

- GitHub: https://github.com/byte886/self-media-ops （公有）

> 本仓是五仓体系的「运营分发」层；跨仓分工与上下游见 [总纲.md](总纲.md)「五仓体系速查」，体系总控与跨仓导航见 `system-architecture`（总控仓，`~/Desktop/system-architecture/`，GitHub: `github.com/byte886/system-architecture`）。

## 目录结构

```
self-media-ops/
├── README.md                    # 本文件
├── AGENTS.md                    # AI操作手册
├── project-management/           # 任务跟踪
│   ├── TASK_STATUS.md          # 进度与待办
│   └── ISSUES.md                # 问题与坑
│
├── docs/                        # 文档区
│   ├── SYSTEM_STRATEGY.md       # 业务方向（唯一权威）
│   ├── D1_三平台发布完整包.md    # ← 当前在执行的D1
│   ├── 第一周执行计划_每天带参考.md  # ← 第一周计划
│   ├── 珠宝自媒体_需求与调研规范.md  # 调研方法论
│   ├── sops/                    # 操作指南（可复用）
│   │   ├── 朋友圈写作SOP.md
│   │   └── AI味检查SOP.md
│   ├── decisions/                # 决策记录（ADR）
│   ├── 执行脚本/                # 每日发布脚本
│   ├── AI内容调研/              # AI生成内容调研
│   ├── research/                # 调研档案
│   │   ├── 线上优先/             # 线上获客调研
│   │   └── ...                  # 其他调研
│   └── archive/                  # 归档（旧版本，不删）
│       ├── 旧版执行计划/         # 24个历史方案
│       ├── 旧版PDF/
│       └── 旧版Word/
│
├── knowledge-base/              # 知识库（跨项目复用）
│   ├── 珠宝小红书运营知识库_合并版.md  # ← 核心运营手册
│   ├── 泉泉珠宝资料宝典/          # 8篇PDF+5个表格模板
│   ├── 超级标020_OCR全文.md      # 亦仁原文
│   ├── 朋友圈系列/              # 朋友圈AI工作台系列
│   ├── 收藏沉淀_小红书.md
│   ├── 收藏沉淀_抖音.md
│   ├── 数字人与AI内容合规_搜索引擎选型.md
│   ├── 配图/                     # 已生成配图
│   └── 产品素材/供应商样品/      # 7个视频+1张图
│
└── scripts/                     # 浏览器自动化脚本
```

## 当前项目：琛盛堂翡翠（襄阳）

- **平台优先级：** 视频号（私域）> 小红书（种草）> 抖音（同城）
- **人设：** 襄阳两家翡翠店老板，接地气说真话，不做仙图
- **不出镜：** 只拍手和产品，语音解说
- **合规：** 已被小红书警告过，严格遵守红线

## 常用操作

```bash
cd ~/Desktop/self-media-ops
git add -A && git commit -m "说明" && git push
cat project-management/TASK_STATUS.md
```
