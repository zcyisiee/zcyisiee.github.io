---
title: Typst-Touying学习笔记 1. Quick Start
date: 2025-05-26
categories: [技术, Typst]
tags: [Typst]
description: 在先后使用Touying完成系统科学大会、南京大学组会汇报后，我发现Touying真是一个好东西，Typst真是一个好东西。于是需要认真学习一下！
series: "我的Touying系列学习笔记"
series_order: 1
---

## 一些学习链接：
1. [Touying官方教程](https://touying-typ.github.io/zh/docs/intro)
2. [Touying官方主题](https://touying-typ.github.io/zh/docs/category/themes)，其中的University主题比较得我心意。
3. [Pinit包](https://typst.app/universe/package/pinit/)是一个重要组成部分，可以实现非常简洁清晰的说明工作。

## Cheatsheet

符号说明：R：必填 O：可选 S：可 set

| 目标函数                    | 常见参数 (R/O/S)                                                         | set 示例                                     | 同效 show-set 示例                                        |
| --------------------------- | ------------------------------------------------------------------------ | -------------------------------------------- | --------------------------------------------------------- |
| **text**                    | font S, size S, fill S, weight S, tracking S, spacing S, lang S          | `#set text(font: "LXGW WenKai", size: 18pt)` | `#show text: set text(font: "LXGW WenKai", size: 18pt)`   |
| **heading**                 | level R, numbering S, fill S, align S, block(above/below) S              | `#set heading(numbering: "1.")`              | `#show heading: set text(fill: navy)`                     |
| **par**                     | justify S, leading S, first-line-indent S, spacing S                     | `#set par(justify: true, leading: 1.4em)`    | `#show par: set par(justify: true, leading: 1.4em)`       |
| **list / enum**             | marker S, indent S, body-indent S, spacing S, numbering S (enum)         | `#set list(marker: "—")`                     | `#show list: set list(marker: "—")`                       |
| **page**                    | paper S, margin S, columns S, header S, footer S, numbering S, binding S | `#set page(paper: "a4", margin: 25mm)`       | `#show page: set page(columns: 2)`                        |
| **table**                   | columns(width/align) R, stroke S, fill S, row-gap S                      | `#set table(stroke: none)`                   | `#show table: set table(fill: luma(95%))`                 |
| **math.equation**           | numbering S, align S, block(above/below) S                               | `#set math.equation(numbering: none)`        | `#show math.equation: set math.equation(numbering: none)` |
| **image**                   | width O, height O, fit S, filter S                                       | `#set image(filter: contrast(120%))`         | `#show image: set image(width: 6cm)`                      |
| **block / box / grid**      | padding S, inset S, fill S, stroke S, columns S (grid)                   | `#set box(fill: #f5f5f5)`                    | `#show box: set box(padding: 6pt)`                        |
| **quote**                   | delimiter S, fill S, block S                                             | `#set quote(fill: gray)`                     | `#show quote: set quote(delimiter: none)`                 |
| **code / raw text**         | lang R, fill S, bg S, font S                                             | `#set raw(lang: "rust", bg: luma(96%))`      | `#show raw: set text(font: "JetBrains Mono")`             |
| **ref / link**              | form S (ref), target R (link), fill S                                    | `#set ref(form: "page")`                     | `#show link: set text(fill: blue)`                        |
| **pagebreak / columnbreak** | weak S, to O                                                             | `#set pagebreak(weak: true)`                 | `#show pagebreak: set pagebreak(weak: true)`              |


