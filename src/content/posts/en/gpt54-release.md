---
title: "OpenAI's Counterattack: How GPT-5.4 Redefines AI Capability Boundaries with One Model"
description: "On March 5, 2026, OpenAI released GPT-5.4. This is not a regular version iteration, but a 'convergence': packing reasoning, programming, and computer control capabilities into the same model."
category: "model"
tags: ["GPT-5.4", "OpenAI", "AI Agent"]
pubDate: 2026-03-05
author: "BeaversLab"
heroImage: "/posts/gpt54-release/origin_01_gpt54_release.webp"
heroImageAlt: "OpenAI GPT-5.4 Official Release"
locales: en
draft: false
featured: true
---

On March 5, 2026, OpenAI released GPT-5.4.

![Sam Altman tweets: GPT-5.4 is officially released, now available in API and Codex](/posts/gpt54-release/origin_01_gpt54_release.webp)

This is not a regular version iteration. Over the past few months, Gemini 3.1 Pro and Claude Opus 4.6 have taken turns topping various evaluation charts. OpenAI needed a strong response—GPT-5.4 is the answer. It skipped the 5.3 naming directly because the nature of this upgrade is not incremental fine-tuning, but a "convergence": packing reasoning ability, programming ability, and computer control ability into the same model.

One model, everything handled. This is the core positioning of GPT-5.4.

## Operating Computers Like a Human

The most striking new capability of GPT-5.4 is its "native" ability to operate computers.

Previous AI models could either only generate text or required developers to write a large amount of glue code to allow them to interact with software. GPT-5.4 is different—it can both write automation scripts via libraries like Playwright to control computers and directly "see" screenshots to issue mouse click and keyboard input commands. Sending emails, scheduling, filling forms, and switching between different software—these tasks that previously required manual clicks can now be completed autonomously by GPT-5.4.

This is not a concept demo. In the OSWorld-Verified test—which requires AI to complete various operational tasks in a real desktop environment—GPT-5.4 achieved a 75.0% success rate. For reference, the human success rate in the same test is 72.4%, and Claude Opus 4.6, which topped the charts just a month ago, scored 72.7%. In other words, GPT-5.4's ability to operate computers has slightly exceeded the average level of ordinary human testers.

![OSWorld-Verified: GPT-5.4 achieves higher accuracy with fewer tool calls, far exceeding GPT-5.2](/posts/gpt54-release/origin_07_toolathlon.webp)

The same goes for the browser domain: 67.3% on WebArena-Verified and 92.8% on Online-Mind2Web—the latter means its success rate in completing specified tasks on web pages exceeds 90%.

The support behind this is a comprehensive improvement in visual understanding. GPT-5.4 reached 81.2% on MMMU-Pro, and the newly introduced `original` image input level supports full-fidelity perception up to 10.24 million pixels. Seeing more clearly leads to more accurate clicking.

## Knowledge Work Upgrade

If operating computers is the "hard power," then handling knowledge work is the "soft power" of GPT-5.4.

OpenAI designed an evaluation called GDPval, covering 9 industries and 44 professions that contribute the most to US GDP. The test content is not answering multiple-choice questions, but delivering real work output—creating sales PPTs, building accounting spreadsheets, scheduling emergency shifts, and drawing manufacturing flowcharts. GPT-5.4 matched or exceeded the performance of industry professionals in 83.0% of cases, while the previous generation GPT-5.2 only reached 70.9%. A gap of 12 percentage points in just one version.

![GDPval Knowledge Work Evaluation: GPT-5.4 leads GPT-5.2 by a large margin with an 83% win rate](/posts/gpt54-release/origin_03_knowledge_task.webp)

Specific to office scenarios: in a simulated junior investment banking analyst's spreadsheet modeling task, GPT-5.4 averaged 87.3% (GPT-5.2 was 68.4%); in PPT generation comparisons, human reviewers preferred GPT-5.4's work in 68% of cases due to better aesthetics and richer visuals.

![GPT-5.4 vs GPT-5.2 PPT Generation: GPT-5.4's layout and image-text matching on the left are clearly more professional](/posts/gpt54-release/origin_04_gpt54_ppt.webp)

More importantly, GPT-5.4 has become more reliable. On a prompt set where users reported factual errors, GPT-5.4's probability of error in a single statement was 33% lower than GPT-5.2, and the probability of the full response containing any error was reduced by 18%. OpenAI calls it "the most factually rigorous model to date."

## Reasoning and Programming Unified

In the past, users faced an awkward choice: use GPT-5.2 for strong reasoning, or GPT-5.3-Codex for strong programming. GPT-5.4 ends this split.

It fully inherits the programming genes of GPT-5.3-Codex. On SWE-Bench Pro (an evaluation of real-world software engineering tasks), GPT-5.4's 57.7% accuracy is comparable to or slightly higher than GPT-5.3-Codex's 56.8%. But its advantage goes beyond scores: GPT-5.4 is OpenAI's most token-efficient reasoning model to date—solving the same problem consumes significantly fewer tokens, meaning lower costs and faster speeds. In Codex's /fast mode, token generation speed can increase by up to 1.5 times—same intelligence, 50% faster.

![SWE-Bench Pro: GPT-5.4 achieves higher accuracy with lower latency, significantly better programming efficiency than its predecessor](/posts/gpt54-release/origin_06_swe_bench.webp)

In internal testing, OpenAI also found that GPT-5.4 performs particularly well on complex frontend tasks. They even released an experimental Playwright Interactive skill, allowing the model to debug in the browser while building web apps—with just a segment of prompt, GPT-5.4 generated a complete theme park simulation game, including road network construction, facility building, visitor AI, and economic systems.

## Leap in Tool Ecosystem

For developers, GPT-5.4's evolution in tool usage may have more practical value.

Previously, when providing a model with a large number of tools, all tool definitions had to be packed into the prompt, often reaching tens of thousands of tokens, which was both slow and expensive. GPT-5.4 introduces "Tool Search": the model only receives a lightweight tool directory and searches for and loads the full definition of a specific tool only when needed. It's like giving AI a table of contents for a tool manual, turning to the required page instead of laying the whole book on the table.

The effect was immediate: in Scale's MCP Atlas benchmark (250 tasks with all 36 MCP servers enabled), Tool Search reduced total token usage by 47% while maintaining the same accuracy.

![Tool Search Token Savings: With Tool Search enabled, total token consumption dropped from 123,139 to 65,320, nearly half](/posts/gpt54-release/origin_02_tool_search.webp)

Web search capabilities also saw a significant boost. In BrowseComp tests, GPT-5.4 reached 82.7%, a jump of 17 percentage points from GPT-5.2's 65.8%; the Pro version hit 89.3%, setting a new SOTA. This means GPT-5.4 is better at "needle in a haystack" deep searches—persistently searching, filtering, and synthesizing multiple sources into a clear answer.

Additionally, GPT-5.4 experimentally supports a 1-million-token context window, opening new possibilities for agents that need to process ultra-long documents or long-term tasks.

## Pricing and Availability

![GPT-5.4 API Pricing Overview: Comparison between Standard and Pro versions](/posts/gpt54-release/origin_08_price.webp)

The API pricing for GPT-5.4 is $2.50/M tokens for input and $15/M tokens for output, up from GPT-5.2's $1.75/$14. The Pro version is more expensive, at $30/$180 per million tokens. However, considering the significant increase in token efficiency—requiring fewer tokens to complete the same task—actual usage costs may not necessarily rise and might even decrease. Batch and Flex pricing enjoy half price, while Priority Processing is double.

On the ChatGPT side, GPT-5.4 Thinking is now live for Plus, Team, and Pro users, and Pro users can also use GPT-5.4 Pro. GPT-5.2 will be retained for three months until its retirement on June 5, 2026.

## Final Words

The release of GPT-5.4 marks a new stage in the competition of AI models.

Over the past year, we've grown accustomed to the separation of "reasoning models," "programming models," and "vision models." GPT-5.4 breaks this division—it pulls reasoning, programming, visual understanding, computer control, tool use, web search, and knowledge work all to the top level. It's not a breakthrough in one dimension, but a comprehensive integration of capabilities.

For developers, this means simplified workflows: no longer needing to choose different models for different tasks. For ordinary users, it means the AI assistant is one step closer to "actually helping you get work done."

![GPT-5.4 Comprehensive Evaluation Table: Covering computer control, knowledge work, programming, reasoning, tool use, etc., compared with competitors](/posts/gpt54-release/origin_05_gpt_performance.webp)

From "which model to choose" to "using one model"—the threshold for AI applications is lowering.

---

*Summary: OpenAI releases GPT-5.4, integrating reasoning, programming, and native computer control capabilities for the first time. OSWorld exceeds human performance (75% vs 72.4%), GDPval knowledge work at 83%, hallucination rate reduced by 33%, and Tool Search token consumption reduced by 47%. API pricing at $2.50/$15/M tokens.*
