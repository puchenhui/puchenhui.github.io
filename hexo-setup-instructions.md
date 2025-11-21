# Hexo博客完整搭建指南

由于当前环境的文件系统限制，无法直接创建完整的Hexo项目，以下是详细的搭建步骤，你可以在本地环境中按照这些步骤操作。

## 1. 环境准备

### 安装Node.js和npm
- 访问 https://nodejs.org 下载并安装Node.js（包含npm）
- 验证安装：`node -v` 和 `npm -v`

### 安装Git
- 下载并安装Git：https://git-scm.com/
- 验证安装：`git --version`

## 2. 安装Hexo

```bash
npm install -g hexo-cli
```

## 3. 创建博客项目

```bash
hexo init my-blog
cd my-blog
npm install
```

## 4. 基本命令

```bash
# 启动本地服务器，默认访问地址 http://localhost:4000
hexo server

# 生成静态文件
hexo generate

# 清除缓存
hexo clean

# 部署到远程服务器
hexo deploy

# 创建新文章
hexo new "文章标题"
```

## 5. 配置博客

编辑 `_config.yml` 文件可以配置博客的基本信息：

```yaml
# 网站信息
title: 我的博客
subtitle: '副标题'
description: '博客描述'
author: 作者名
language: zh-CN
timezone: Asia/Shanghai

# URL设置
url: http://yourdomain.com
root: /
permalink: :year/:month/:day/:title/

# 目录设置
source_dir: source
public_dir: public
tag_dir: tags
archive_dir: archives
category_dir: categories
code_dir: downloads/code
i18n_dir: :lang
skip_render:

# 写作设置
new_post_name: :title.md
default_layout: post
titlecase: false
external_link:
  enable: true
  field: site
  exclude: ''

# 日期格式
date_format: YYYY-MM-DD
time_format: HH:mm:ss

# 分页设置
per_page: 10
pagination_dir: page

# 扩展
theme: landscape  # 主题名称
```

## 6. 主题安装

### 安装landscape主题（默认主题）
```bash
git clone https://github.com/hexojs/hexo-theme-landscape.git themes/landscape
```

### 推荐主题
- **NexT**: https://github.com/theme-next/hexo-theme-next
- **Fluid**: https://github.com/fluid-dev/hexo-theme-fluid
- **Anatole**: https://github.com/Ben02/hexo-theme-Anatole
- **Yilia**: https://github.com/litten/hexo-theme-yilia

## 7. 部署到GitHub Pages

### 安装部署插件
```bash
npm install hexo-deployer-git --save
```

### 配置部署信息
在 `_config.yml` 中添加：
```yaml
deploy:
  type: git
  repo: https://github.com/username/username.github.io.git
  branch: main
```

### 部署
```bash
hexo deploy
```

## 8. 常用插件

```bash
# 自动生成sitemap
npm install hexo-generator-sitemap --save

# RSS订阅
npm install hexo-generator-feed --save

# 代码高亮
npm install hexo-prism-plugin --save

# 图片缩放
npm install hexo-img-lazyload --save
```

## 9. 创建文章

在 `source/_posts` 目录下创建Markdown文件，文件头部包含YAML front-matter：

```yaml
---
title: 文章标题
date: 2025-11-21 10:00:00
tags: [标签1, 标签2]
categories: [分类]
---
```

## 10. 自定义域名

在 `source` 目录下创建 `CNAME` 文件，内容为你的域名：
```
yourdomain.com
```

---

## 当前演示

由于环境限制，当前目录下已创建了一个 `hexo-demo.html` 文件，模拟了Hexo博客的外观。你可以在浏览器中访问 http://localhost:8000/hexo-demo.html 查看效果。

要获得完整的Hexo体验，请在你的本地环境中按照上述步骤进行操作。