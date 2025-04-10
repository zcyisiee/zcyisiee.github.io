---
title: Kramdown格式化速查表
date: 2025-04-10
categories: [编程, 前端]
tags: [前端]
description: Kramdown格式化速查表，适用于Jekyll
---
# Jekyll Chirpy主题 - Kramdown格式化速查表

## 🔗 链接操作

### 在新标签页中打开链接
```markdown
[外部链接](https://example.com){:target="_blank"}
```

### 带有多个属性的链接 
```markdown
[带属性的链接](https://example.com){:target="_blank" rel="nofollow" title="链接描述" class="link-class"}
```

### 添加引用链接
```markdown
这是一个[引用式链接][linkid]指向一个页面。

[linkid]: https://example.com/
```

## 📝 文本格式化

### 为文本添加CSS类
```markdown
**带样式的文本**{:.class-name}

*红色文本*{: style="color: red"}
```

### 创建提示框（Prompts）
```markdown
> 这是一个提示框。
{: .prompt-tip }

> 这是一个信息框。
{: .prompt-info }

> 这是一个警告框。
{: .prompt-warning }

> 这是一个危险警告框。
{: .prompt-danger }
```

## 🖼️ 图片格式化

### 基本的带Alt文本的图片
```markdown
![替代文本](/path/to/image.jpg)
```

### 带尺寸的图片
```markdown
![替代文本](/path/to/image.jpg){: width="700" height="400" }
```

### 带尺寸的图片（简写形式）
```markdown
![替代文本](/path/to/image.jpg){: w="700" h="400" }
```

### 图片对齐
```markdown
![替代文本](/path/to/image.jpg){: .normal }
![替代文本](/path/to/image.jpg){: .left }
![替代文本](/path/to/image.jpg){: .right }
```

### 带阴影效果的图片
```markdown
![替代文本](/path/to/image.jpg){: .shadow }
```

### 自适应明/暗模式的图片
```markdown
![明亮模式图片](/path/to/light.png){: .light }
![暗黑模式图片](/path/to/dark.png){: .dark }
```

## 📊 代码块

### 基本的带语法高亮的代码块
````markdown
```python
def hello_world():
    print("你好，世界！")
```
````

### 不带行号的代码块
````markdown
```python
def hello_world():
    print("你好，世界！")
```
{: .nolineno }
````

### 带文件名的代码块
````markdown
```yaml
title: 我的Jekyll网站
```
{: file="config.yml" }
````

### 文件路径样式
```markdown
这是文件路径 /path/to/file.txt{: .filepath}
```

## 📑 文本对齐

```markdown
这段文本将居中显示。
{: .text-center }

这段文本将右对齐。
{: .text-right }
```

## 📝 脚注

```markdown
这里是一段带有脚注的文本[^1]。

[^1]: 这是脚注的内容。
```

## 📚 表格格式化

```markdown
| 姓名 | 年龄  | 性别 |
| :--- | :---: | ---: |
| 张三 |  24   |   男 |
| 李四 |  23   |   女 |
```

## 🔖 引用块

```markdown
> 这是一个引用块。
> 
> 可以包含多个段落。
```

## 📋 任务列表

```markdown
- [x] 已完成的任务
- [ ] 待办任务
- [ ] 另一个待办任务
```

## 🧮 数学公式

```markdown
$$
\sum_{n=1}^{\infty} \frac{1}{n^2} = \frac{\pi^2}{6}
$$
```

## 📈 Mermaid 图表

````markdown
```mermaid
graph TD;
    A-->B;
    A-->C;
    B-->D;
    C-->D;
```
````

## 🔗 属性定义引用

```markdown
{:refdef: .className #id}
这个段落有自定义属性。
{: refdef}
```

## 🔍 带Markdown处理的HTML

```markdown
<div markdown="1">
这是**粗体**，这是一个列表：
- 项目1
- 项目2
</div>
```

---

*注意：Chirpy主题基于Jekyll构建，使用Kramdown作为Markdown处理器。这些格式化选项是强大的工具，可以增强您的内容展示效果。*
