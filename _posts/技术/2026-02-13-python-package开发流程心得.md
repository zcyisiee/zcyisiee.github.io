---
title: python package开发流程心得
date: 2026-02-13
categories:
  - 技术
tags:
  - src-layout
description: 主要使用vibe coding，涵盖了很多踩雷的地方
---

## git

### git worktree

git worktree提供了更清晰直观的版本管理。具体操作流程如下：

1. 新建一个工作树：

```bash
# 基本用法：创建新目录并检出已有分支
git worktree add <路径> <分支名>

# 创建新分支并检出到指定目录
git worktree add -b <新分支名> <路径> <基础分支>
```

新的worktree直接对应一个文件夹，也就是<路径>中填写的路径。在这个文件夹下，**.git以文件的形式存在**，指向根.git文件夹。不管有多少个worktree，都只会有一个.git文件夹，该文件夹中保存诸如objects、refs等核心数据；其他worktree的.git文件中只保存该worktree的特性内容，例如：1）指向的根.git文件夹；2）自己这个worktree的HEAD；
