# AGENTS.md — AI操作手册

> 本文档是AI代理的操作手册。执行任何任务前先读对应部分。

## 1. 项目定位

自媒体运营知识库：把珠宝运营方法论、朋友圈/小红书/抖音发布内容、AI工具方法沉淀成可复用资产。

> **鉴藏总域（heritage）**：本仓属"鉴藏"体系（鉴宝+收藏）的**运营分发层**（怎么卖）。总域骨架与跨仓协作见采集底座 `~/Desktop/multiplatform-content-pipeline/domains/heritage/README.md`；上流＝生产执行 `~/Desktop/ai-video-studio`（成片/方案图），下流＝发布效果反馈。

## 2. 执行前必读：冷启动 vs 续接

### 冷启动（首次接触本项目/跨阶段切换）
0. **本仓＝鉴藏体系意图层（策略总控）**：业务方向/选题/优先级以 `docs/SYSTEM_STRATEGY.md` 为唯一权威；系统运行机制/路由在采集底座 `~/Desktop/multiplatform-content-pipeline/docs/SYSTEM_ARCHITECTURE.md`
1. `README.md` — 项目概览
2. `docs/memory/index.md` — 跨会话稳定结论
3. `project-management/TASK_STATUS.md` — 当前进度
4. `project-management/ISSUES.md` — 待解决问题

### 续接（用户说"继续/接着做"）
1. `docs/memory/index.md` — 只扫结论定位
2. `TASK_STATUS.md` + `ISSUES.md` — 到哪了、下一步
3. 对应SOP：`docs/sops/朋友圈写作SOP.md` 或 `docs/sops/AI味检查SOP.md`

## 3. 目录结构

```
self-media-ops/
├── README.md                 # 项目介绍（人读）
├── AGENTS.md                 # 本文件（AI读）
├── knowledge-base/           # 知识库内容
│   ├── 知识库_珠宝AI运营方法.md
│   ├── 收藏沉淀_抖音.md
│   ├── 收藏沉淀_小红书.md
│   ├── 超级标020_行业AI工作台_OCR全文.md
│   ├── 朋友圈_AI工作台系列_发布手册.md
│   └── 配图/
├── docs/
│   ├── sops/                 # 操作指南（How-to）
│   │   ├── 朋友圈写作SOP.md
│   │   └── AI味检查SOP.md
│   ├── decisions/             # ADR决策记录
│   │   ├── ADR-001-人设与定位.md
│   │   └── ADR-002-三平台差异与发布节奏.md
│   └── memory/              # OKF工程记忆
│       └── index.md
├── concepts/                 # 解释性文档（Explanation）
└── project-management/        # 活态台账
    ├── TASK_STATUS.md
    └── ISSUES.md
```

## 4. 核心规则

1. 新内容先写入 `knowledge-base/`，再 commit
2. 每完成一个阶段更新 `TASK_STATUS.md`
3. 发现方法/坑/教训记录到 `ISSUES.md`
4. 不可逆决策（人设、节奏、平台差异）记录为 ADR
5. 跨会话稳定结论更新到 `docs/memory/index.md`
6. 不要把临时文件/日志提交到仓库
7. 每次发布前必须过 `docs/sops/AI味检查SOP.md`

## 5. 常用操作

```bash
cd ~/Desktop/self-media-ops
git add -A && git commit -m "描述" && git push
cat project-management/TASK_STATUS.md
```
