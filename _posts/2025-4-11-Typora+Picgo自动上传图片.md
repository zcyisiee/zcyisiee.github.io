---
title: Typora自动上传图片
date: 2025-04-11
categories: [技术, Markdown]
tags: [Markdown, Typora]
description: 介绍了通过Typora+Picgo的方式自动将图片上传到GitHub上的方法
---

>Typora可以方便的将图片拖入md文件，并在指定的文件夹中储存图片，这个自动化的过程非常舒适。但是，
>当分享md文件时，必须将图片文件一并打包，这极大地影响了使用体验。为了解决markdown文本与图片分
>离的痛点，我们可以将图片挂到网上，在md文件中通过url访问。本文介绍了一种通过Picgo自动上传图片到GitHub仓库的方法，自动无感的完成图片插入工作流。唯一的缺点可能是，如果对方没有梯子，那他可能看不到我们上传的图片😉
>{: .intro }

## 准备工具

PicGo提供了两种工具，一种是图形化窗口[PicGo](https://github.com/Molunerfinn/PicGo){:target="_blank"}，另一种是命令行窗口[PicGo-Core](https://picgo.github.io/PicGo-Core-Doc/zh/guide/){:target="_blank"}。我推荐Picgo-Core，因为它的上传过程是无感的，贼舒服；图形化窗口Picgo每次上传都要跳转到Picgo的主界面，咋改设置都不行🤷。下图

![image-20250411231645589](https://raw.githubusercontent.com/zcyisiee/blog-images/main/Typora自动上传图片/image-20250411231645589.png){: .w-75}完成配置后的自动上传demo

官网给了相关的教程，此处不多赘述。重要的信息是知道PicGo-Core的配置文件在哪里，后续我们配置Github时要用到。它一般在：
- Mac/Linux: `~/.picgo/config.json`
- Windows: `C:\Users\[用户名]\.picgo\config.json`

我们可以在常用文件夹下

## 获取Github的token

在GitHub中创建好存放图片的仓库后，点击右上角头像中的Settings

![image-20250411230506542](https://raw.githubusercontent.com/zcyisiee/blog-images/main/Typora自动上传图片/image-20250411230506542.png){: .w-75}

进入后找到左侧导航栏最下方的[Developer Settings](https://github.com/settings/tokens)]{:target="_blank"}，为自己的仓库设置classic的token，记得开启repo的权限，这样稍后PicGo-Core才能通过这个token对仓库进行写入。

![image-20250411231614803](https://raw.githubusercontent.com/zcyisiee/blog-images/main/Typora自动上传图片/image-20250411231614803.png){: .w-75}

