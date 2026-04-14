---
title: "璀璨宝石"
status: "released"
summary: "一个宝石交易游戏引擎，配有启发式、强化学习和大语言模型求解器，并提供完整的技术报告。"
repoUrl: "https://github.com/trace-studio/splendor"
cover: "/assets/games/splendor.png"
tags: ["桌游"]
components: ["engine", "heuristic", "rl", "llm", "web-demo", "report"]
locale: "zh"
publishDate: 2025-12-01
order: 1
---

《璀璨宝石》是一款以卡牌为核心的策略游戏，玩家通过收集宝石来购买发展卡牌并吸引贵族赞助者。Trace Studio 的实现包含一个为高速模拟设计的高性能引擎，以及多种 AI 求解器。

## 引擎

引擎支持 2–4 人的完整游戏规则，具有高效的状态表示，便于树搜索。

## 求解器

- **启发式**：贪心宝石收集与卡牌购买策略。
- **强化学习**：经过 1000 万局自我对弈训练的 PPO 智能体。
- **大语言模型**：基于 GPT-4 和 Claude 的智能体，使用结构化提示。

## 结果

强化学习智能体在 2 人对局中对启发式基线的胜率达到 72%。
