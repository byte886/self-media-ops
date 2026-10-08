# self-media-ops

> 自媒体运营知识库与发布素材库。不限行业，框架可复用。

## 仓库地址

- GitHub: https://github.com/byte886/self-media-ops （公有）

## 目录结构

> 框架/治理留 `docs/`，具体项目落 `projects/`；当前只有珠宝一个项目。2026-10-08 已对齐实际布局（旧顶层 `knowledge-base/`、`project-management/`、`docs/research/` 等均已迁入 `projects/jewelry/` 或 `docs/project-management/`）。

```
self-media-ops/
├── README.md                  # 本文件（项目概览，人读）
├── AGENTS.md                  # AI 操作手册
├── 总纲.md                    # 项目章程（可复用方法论）
├── TASK_STATUS.md             # 活态进度台账（唯一进度真相）
├── ISSUES.md                  # 开放问题 / 待验证清单
├── CHANGELOG.md               # 编年变更日志（倒序）
│
├── docs/                      # 框架与治理（跨项目复用，不随项目变）
│   ├── SYSTEM_STRATEGY.md     # 业务方向（唯一权威）
│   ├── WORKFLOW.md            # 主工作流（选题→复盘 8 步）
│   ├── REQUIREMENTS.md        # 珠宝项目需求与验收标准
│   ├── DOCUMENTATION_MAP.md   # 全仓文档地图
│   ├── sops/                  # 可复用操作指南
│   │   ├── AI味检查SOP.md
│   │   └── 朋友圈写作SOP.md
│   └── project-management/    # 治理档案
│       ├── decisions/         # ADR 决策记录（001~005）
│       ├── memory/            # OKF 跨会话稳定结论（index + repo-map）
│       ├── standards/         # 规范（合规检查清单 / 不AI化 / 踩坑记录）
│       └── templates/         # 模板（每日脚本模板）
│
├── projects/                  # 具体项目（每项目一目录）
│   └── jewelry/               # 琛盛堂翡翠（襄阳）—— 当前主线
│       ├── knowledge-base/    # 运营知识库（合并版 + 泉泉宝典 + 素材）
│       │   ├── 泉泉珠宝资料宝典/   # PDF/表格/OCR md（README 索引）
│       │   └── 产品素材/供应商样品/ # 7 视频 + 1 图
│       ├── research/          # 调研档案（三平台规则 + 案例 + AI 内容调研）
│       │   └── 线上优先/      # 纯线上获客专题
│       ├── platforms/         # 平台执行（脚本/对标/产出）
│       │   ├── D1-D7_珠宝冷启动第一周.md   # ← 当前在执行的第一周包
│       │   ├── 参考对象_第一周对标账号.md
│       │   ├── shipinhao/      # 视频号产出（待填）
│       │   ├── xiaohongshu/    # 小红书产出（待填）
│       │   └── douyin/         # 抖音产出（待填）
│       └── archive/           # 归档（旧版本，不删）
│           ├── 旧版执行计划/  # 24 个历史方案
│           ├── 旧版PDF/
│           └── 旧版Word/
│
└── scripts/                   # 浏览器自动化（小红书养号/浏览，attach 本机 Chrome）
    ├── scan_xhs.js
    └── human_browse_xhs.js
```

## 当前项目：琛盛堂翡翠（襄阳）

- **平台优先级：** 视频号（私域）> 小红书（种草）> 抖音（同城）
- **人设：** 襄阳两家翡翠店老板，接地气说真话，不做仙图
- **不出镜：** 只拍手和产品，语音解说
- **合规：** 已被小红书警告过，严格遵守红线

## 常用操作

```bash
cd ~/Desktop/self-media-ops
git add <具体文件> && git commit -m "说明" && git push
cat TASK_STATUS.md   # 进度台账（根目录）
```
