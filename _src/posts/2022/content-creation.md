---
title: Content Creation
h1Title: Content Creation with Markdown
date: 2022-10-15
layout: post.njk
author: Simon Padbury
description: Markdown is an easy-to-learn web text authoring language, that is converted
  into HTML.
tags:
  - Markdown
  - YAML
showToc: true
postWeight: 1
inSidebarMenu: true
menuOrder: 5
slug: content-creation
---

Both blog posts and non-blog pages are created the same way: as [Markdown](https://daringfireball.net/projects/markdown/) files with [YAML](https://yaml.com) front matter.

## Initiating Content

Pages should be placed in the `_src/pages/` folder, and posts should be placed in a `_src/posts/` folder.

### Page Organizaition (Hierarchy)

Pages in the `pages/` folder will be attached to the rool URL of your site, and the URI will be generated from your Markdown filename. E.g. your `_src/pages/about.md` will become `https://www.your-website.com/about`

If you organize your pages within folders inide `pages/` the path hierarchy will be preserved by Eleventy. E.g. your `_src/pages/stuff/something-001.md` will become `https://www.your-website.com/stuff/something-001`

### Template Selection

Pages use the `page.njk` template and posts use the `post.njk` template. These are both selected in the YAML front matter of posts and pages, and you will find them in the `_src/templates/` folder.

In the YAML front matter of each, pages select the page layout template by `layout: page.njk` and posts select the post template by `layout: post.njk` – more information [here](/posts/2022/yaml-front-matter/#layout-(template-selection)).

You can create custom page layouts and custom post layouts by cloning these templates, renaming the clones and then modifying the design. Then, you can simply select your custom layout in the same way: by `layout: your-custom-design.njk`

### Post organization (years and months)

You may prefer to keep your blog posts orgainised in numbered `{year}/` folders within `posts/`. E.g. the Markdown files for these demo blog posts are in `posts/2022/`

That’s as far as I have gone in this demo, but if you are (going to be) a prolific blogger composing _weekly_ posts, you can also further sub-divide your content into _month_ folders within the _years_. EBST can handle whatever nested folder structure you go with.

When you create a markdown file in either  the `posts/` or `pages/` folder, your `{filename}.md` will be used in generating the URI of the webpage or blog post. For example, `_src/posts/this-is-my-first-post.md` may become your website’s `/posts/2022/this-is-my-first-post` (or whatever year you do yours).

The content of a post or page basically looks like this — with _triple hyphen gated_ `---` YAML front matter:

```yaml
---
title: "Title of This Webpage"
date: 2022-08-05
# And other YAML front matter settings...
---

This is where your main prose content will go, 
composed in Markdown...
```

Unsure of how to capitalize your title? Try [Capitalyze My Title](https://capitalizemytitle.com), the free online capitalization tool.

## About Markdown

Markdown was developed in 2004 by [John Gruber in collaboration with Aaron Swartz](https://en.wikipedia.org/wiki/Markdown#History). From John Gruber’s blog, [Daring Fireball](https://daringfireball.net/projects/markdown/):

> Markdown is a text-to-HTML conversion tool for web writers. Markdown allows you to write using an easy-to-read, easy-to-write plain text format, then convert it to structurally valid XHTML (or HTML).

If you are unfamiliar with Markdown, here’s a taster:

```markdown
Lines of text, if followed by an empty line, are paragraphs.

# Text prefixed with a # is a title, level <h1>
## Text prefixed with two # is a subheading, level <h2>
### Text prefixed with three # is a subheading, level <h3>

* Groups of text lines
* prefixed by asterisks
* are bullet-point lists

Text surrounded by **double asterisks** is bolded.

Text surrounded by _single underscores_ is italicized.
```

There’s more, similarly easy to learn, but the above explains what you will use most of the time.

## Learning Markdown

Here are a couple of resources to help you learn Markdown:

* [The Markdown Guide](https://www.markdownguide.org)
* [**Learn X in Y minutes** / Where X=markdown](https://learnxinyminutes.com/docs/markdown/)
