---
title: "Splendor"
status: "released"
summary: "A gem-trading engine with heuristic, RL, and LLM solvers. Full technique report available."
repoUrl: "https://github.com/trace-studio/splendor"
cover: "/assets/games/splendor.png"
tags: ["board-game"]
components: ["engine", "heuristic", "rl", "llm", "web-demo", "report"]
locale: "en"
publishDate: 2025-12-01
order: 1
---

Splendor is a card-based strategy game where players collect gems to purchase development cards and attract noble patrons. The Trace Studio implementation includes a high-performance engine written for fast simulation, along with multiple AI solvers.

## Engine

The engine supports full game rules for 2–4 players, with an optimized state representation for efficient tree search.

## Solvers

- **Heuristic**: Greedy gem-collection and card-purchasing strategy.
- **RL**: Self-play PPO agent trained over 10M episodes.
- **LLM**: GPT-4 and Claude-based agents with structured prompting.

## Results

The RL agent achieves a 72% win rate against the heuristic baseline in 2-player games.
