---
title: Typora自动上传图片
date: 2025-04-11
categories: [技术, Markdown]
tags: [Markdown, Typora]
description: 介绍了通过Typora+Picgo的方式自动将图片上传到GitHub上的方法
pin: true
---

>Typora可以方便的将图片拖入md文件，并在指定的文件夹中储存图片，这个自动化的过程非常舒适。但是，
>当分享md文件时，必须将图片文件一并打包，这极大地影响了使用体验。为了解决markdown文本与图片分
>离的痛点，我们可以将图片挂到网上，在md文件中通过url访问。本文介绍了一种通过Picgo自动上传图片到GitHub仓库的方法，自动无感的完成图片插入工作流。唯一的缺点可能是，如果对方没有梯子，那他可能看不到我们上传的图片😉
{: .intro }

## 准备工具

PicGo提供了两种工具，一种是图形化窗口[PicGo](https://github.com/Molunerfinn/PicGo){:target="_blank"}，另一种是命令行窗口[PicGo-Core](https://picgo.github.io/PicGo-Core-Doc/zh/guide/){:target="_blank"}。我推荐Picgo-Core，因为它的上传过程是无感的，贼舒服；图形化窗口Picgo每次上传都要跳转到Picgo的主界面，咋改设置都不行🤷。下图

![image-20250411231645589](https://raw.githubusercontent.com/zcyisiee/blog-images/main/Typora自动上传图片/image-20250411231645589.png){: .w-75}
_完成配置后的自动上传demo_

官网给了相关的教程，此处不多赘述。重要的信息是知道PicGo-Core的配置文件在哪里，后续我们配置Github时要用到。它一般在：
- Mac/Linux: `~/.picgo/config.json`
- Windows: `C:\Users\[用户名]\.picgo\config.json`

我们可以在常用文件夹下

## 获取Github的token

在GitHub中创建好存放图片的仓库后，点击右上角头像中的Settings

![image-20250411230506542](https://raw.githubusercontent.com/zcyisiee/blog-images/main/Typora自动上传图片/image-20250411230506542.png){: .w-75}

进入后找到左侧导航栏最下方的[Developer Settings](https://github.com/settings/tokens)]{:target="_blank"}，为自己的仓库设置classic的token，记得开启repo的权限，这样稍后PicGo-Core才能通过这个token对仓库进行写入。

![image-20250411231614803](https://raw.githubusercontent.com/zcyisiee/blog-images/main/Typora自动上传图片/image-20250411231614803.png){: .w-75}

注意，生成好的token只会展示一次，请及时保存。

## 配置PicGo

### PicGo

PicGo的配置很简单，在图形化界面中完成配置即可。

![image-20250411233127174](https://raw.githubusercontent.com/zcyisiee/blog-images/main/Typora自动上传图片/image-20250411233127174.png){: .w-75}

### PicGo-Core

PicGo-Core的配置稍微难一点，需要找到对应的config.json文件夹。打开后完成编辑就好啦！

![image-20250411233254703](https://raw.githubusercontent.com/zcyisiee/blog-images/main/Typora自动上传图片/image-20250411233254703.png){: .w-75}

特别建议：如果没有洁癖，其实不用设置"path"，这样所有图片都丢在仓库中，好处是不用重复设置。但是为了方便管理，我还是按照不同的文件建立了不同的文件夹，这导致每次编写博客都需要改变"path"。为了不每次都找config文件，我使用硬链接的方法在博客文件夹下关联了原始的PicGo-Core config文件。

```zsh
ln <原始文件路径> <关联的新文件路径（不需要新建文件，会自动在对应路径建立文件）>
```

## 配置Typora

在Typora中的配置就很简单了。

![{image-20250411233807802}](https://raw.githubusercontent.com/zcyisiee/blog-images/main/Typora自动上传图片/image-20250411233807802.png){: .w-75}

如果是PicGo，则选择PicGo然后验证即可；如果是PicGo-Core，则需要选择自定义命令，然后使用picgo upload（我设置了全局命令，因此我的终端能直接找到picgo）。命令行相关的具体配置见教程[PicGo-Core](https://picgo.github.io/PicGo-Core-Doc/zh/guide/){:target="_blank"}
