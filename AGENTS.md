# AGENTS.md — AI操作手册

> 本文档是AI代理的操作手册。执行任何任务前先读对应部分。

## 1. 项目定位

自媒体运营知识库：把珠宝运营方法论、朋友圈/小红书/抖音发布内容、AI工具方法沉淀成可复用资产。

## 2. 目录结构

```
self-media-ops/
├── README.md                 # 项目介绍（人读）
├── AGENTS.md                 # 本文件（AI读）
├── knowledge-base/          # 知识库内容
│   ├── 知识库_珠宝AI运营方法.md   # 核心运营方法论
│   ├── 收藏沉淀_抖音.md           # 抖音收藏整理
│   ├── 收藏沉淀_小红书.md         # 小红书收藏整理
│   ├── 超级标020_行业AI工作台_OCR全文.md  # 亦仁原文
│   ├── 朋友圈_AI工作台系列_发布手册.md      # 三平台发布SOP
│   └── 配图/                     # 已生成配图
├── project-management/        # 活态台账
│   ├── TASK_STATUS.md        # 进度
│   └── ISSUES.md              # 问题
└── docs/                     # 方法论/规范
```

## 3. 核心规则

1. 新内容先写入 knowledge-base/，再 commit
2. 每完成一个阶段更新 TASK_STATUS.md
3. 发现方法/坑/教训记录到 ISSUES.md
4. 不要把临时文件/日志提交到仓库
5. 配图文件较大时考虑压缩，但当前量级可直接提交

## 4. 常用操作

```bash
# 提交变更
cd ~/Desktop/self-media-ops
git add -A
git commit -m "描述"
git push

# 查看状态
cat project-management/TASK_STATUS.md
```
