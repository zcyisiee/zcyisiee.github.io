# Chirpy Starter

[![Gem Version](https://img.shields.io/gem/v/jekyll-theme-chirpy)][gem]&nbsp;
[![GitHub license](https://img.shields.io/github/license/cotes2020/chirpy-starter.svg?color=blue)][mit]

When installing the [**Chirpy**][chirpy] theme through [RubyGems.org][gem], Jekyll can only read files in the folders
`_data`, `_layouts`, `_includes`, `_sass` and `assets`, as well as a small part of options of the `_config.yml` file
from the theme's gem. If you have ever installed this theme gem, you can use the command
`bundle info --path jekyll-theme-chirpy` to locate these files.

The Jekyll team claims that this is to leave the ball in the user’s court, but this also results in users not being
able to enjoy the out-of-the-box experience when using feature-rich themes.

To fully use all the features of **Chirpy**, you need to copy the other critical files from the theme's gem to your
Jekyll site. The following is a list of targets:

```shell
.
├── _config.yml
├── _plugins
├── _tabs
└── index.html
```

To save you time, and also in case you lose some files while copying, we extract those files/configurations of the
latest version of the **Chirpy** theme and the [CD][CD] workflow to here, so that you can start writing in minutes.

## Usage

Check out the [theme's docs](https://github.com/cotes2020/jekyll-theme-chirpy/wiki).

## Contributing

This repository is automatically updated with new releases from the theme repository. If you encounter any issues or want to contribute to its improvement, please visit the [theme repository][chirpy] to provide feedback.

## License

This work is published under [MIT][mit] License.

## CMS 子文件夹集合配置指南

Sveltia CMS 不支持嵌套集合，所以每个子文件夹都要单独配一个集合。两步搞定。

### 第一步：创建子文件夹

在 `_posts/` 下建好子文件夹，把 `.md` 文章放进去。比如你想加一个 Docker 分类，就创建 `_posts/技术/Docker/`，然后往里面放文章。

### 第二步：添加集合配置

打开 `admin/config.yml`，在 `collections` 列表里加一个新集合块。以 `_posts/技术/Docker` 为例：

```yaml
  - name: "jishu-docker"
    label: "技术/Docker"
    folder: "_posts/技术/Docker"
    create: true
    slug: "{{year}}-{{month}}-{{day}}-{{slug}}"
    extension: "md"
    editor:
      preview: false
    fields:
      - {label: "标题", name: "title", widget: "string"}
      - {label: "发布日期", name: "date", widget: "datetime", format: "YYYY-MM-DD", date_format: "YYYY-MM-DD", time_format: false}
      - {label: "分类", name: "categories", widget: "list", default: ["技术"]}
      - {label: "标签", name: "tags", widget: "list"}
      - {label: "描述", name: "description", widget: "string", required: false}
      - {label: "正文", name: "body", widget: "markdown"}
      - {label: "系列名称", name: "series", widget: "string", required: false}
      - {label: "系列顺序", name: "series_order", widget: "number", required: false, value_type: "int"}
```

### 注意事项

1. `name` 用英文小写，格式为 `父级-子级`（如 `jishu-docker`）
2. `extension: "md"` 必须保留，否则非 `.md` 文件也会出现在 CMS 列表中
3. 新集合应插入到对应父级集合的后面（如 Docker 集合放在 `jishu` 之后），保持列表整洁。当前顺序：suibi, jishu, jishu-chirpy, jishu-gongjushouce, jishu-paibanshuoxie, jishu-laidianzhenede, wuli, wuli-relitongji, wuli-gailv

[gem]: https://rubygems.org/gems/jekyll-theme-chirpy
[chirpy]: https://github.com/cotes2020/jekyll-theme-chirpy/
[CD]: https://en.wikipedia.org/wiki/Continuous_deployment
[mit]: https://github.com/cotes2020/chirpy-starter/blob/master/LICENSE
