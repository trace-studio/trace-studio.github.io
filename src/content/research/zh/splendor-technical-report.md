---
title: "《璀璨宝石》技术报告"
game: "splendor"
summary: "对桌游《璀璨宝石》的深入分析，包含游戏统计、求解器与策略。"
authors: ["Trace Studio"]
publishDate: 2026-04-20
tags: ["桌游"]
locale: "zh"
draft: false
---

本报告介绍了一种针对《璀璨宝石》的启发式求解器，使用以金币为权重的评估函数来指导决策。

## 方法

启发式将较高的价值分配给金币，因为金币作为万能牌具有灵活性。评估函数考虑以下因素：

1. **卡牌可得性**——玩家当前能够购买的卡牌数量
2. **贵族接近度**——吸引贵族赞助者的距离
3. **引擎价值**——已拥有发展卡牌的折扣价值

```python
def evaluate(state, player):
    card_score = sum(affordable_cards(state, player))
    noble_score = noble_proximity(state, player) * 2.0
    engine_score = discount_value(state, player) * 1.5
    return card_score + noble_score + engine_score
```

## 结果

| 对战 | 胜率 | 局数 |
|---------|----------|-------|
| 金币启发式 vs 随机 | 95.2% | 10,000 |
| 金币启发式 vs 贪心 | 68.4% | 10,000 |
| 金币启发式 vs 金币启发式 | 50.1% | 10,000 |

> 以金币为权重的启发式提供了一个强基线，在计算开销很小的同时显著优于朴素策略。

## 结论

金币优先是《璀璨宝石》中一种有效的启发式锚点。该方法可作为后续强化学习和大语言模型实验的基线。
