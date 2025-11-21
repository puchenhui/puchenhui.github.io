# Hexo博客设置说明

由于文件系统限制，无法直接创建完整的Hexo博客项目，以下是设置Hexo博客的步骤：

## 安装Hexo CLI
```bash
npm install -g hexo-cli
```

## 创建新博客
```bash
hexo init <folder-name>
cd <folder-name>
npm install
```

## 启动服务器
```bash
hexo server
```

## 基本命令
- `hexo new "文章标题"` - 创建新文章
- `hexo generate` - 生成静态文件
- `hexo deploy` - 部署到远程服务器
- `hexo clean` - 清除缓存文件

## 配置文件
_config.yml 是主要的配置文件，可以配置站点标题、描述、作者等信息。

## 主题
可以安装不同的主题来改变博客外观，例如：
- hexo-theme-landscape（默认主题）
- hexo-theme-next
- hexo-theme-fluid