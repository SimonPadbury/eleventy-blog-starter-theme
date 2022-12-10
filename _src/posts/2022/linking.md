---
title: Linking
h1Title: Links, Navigation, Feeds, and Pagination in Eleventy (and EBST)
date: 2022-12-01
layout: post.njk
author: Simon Padbury
description: How internal links, navigation menus, and automatic pagination works in
  Eleventy and EBST.
tags:
  - Links
  - Markdown
showToc: true
inSidebarMenu: true
menuOrder: 7
---

## Links Between Pages in Your Website

### The Root `index.html` is Your Homepage

The root page is your homepage (the `index.html` that’s generted from `_src/index.njk`), and its relaive location is simply designated as `/` — see the following example:

<a href="/">Home</a>

```html
<a href="/">Home</a>
```

The browser looks for the `index.html` in the root folder of a website (there should only be one `index.html` there), and it serves _that_ page. The `index.html` at `/` is thus considered as your project’s homepage.

While you are working on your website on your computer, using Eleventy’s built-in virtual server (Eleventy uses [Browsersync](https://browsersync.io)), `/` is the `_site/` folder. But when you deploy the website by uploading the contents of `_site/` to a website host server account folder, then that online location is still designated as `/` and your homepage link will still work.

You will (eventually) have a web domain name that points to the the hosted root folder, so that e.g. `https://www.your-website.com/`) will be the location of your homepage. The last `/` in `https://www.your-website.com/` is where your hosted root folder is located at. `https://www.your-website.com/` is mapped on to `/` so that `https://www.your-website.com/` shows your uploaded homepage.

The web browser “knows” that this is where the homepage is. The browser “looks” for the `index.html` in the root folder of a website (there should only be one `index.html` there), and it serves that as the homepage.

_That’s how all (or most) of your webpages work in the static website you generate using Eleventy._ Almost of yuour webpages will be named `index.html` – but they will each be located inside different folders. The `index.html` at your root `/` is your homepage; the `index.html` in your `/about/` folder is your About page, and so on.

### Linking to Pages and Posts “Root-Relative”

When you manually create `<a href="">` links from one page to another in your theme, be sure to start them from the root page’s _relative location_. And in most situaions, you link to the _location_ of the page (i.e. the folder that it is in), not the HTML file itself.

Whatever page or template you are _linking from_, `/` is always the location of the homepage. When you manually create links, you should build out the _paths_ to any page _as relative from the root page_ — not as relative to whichever page you are linking from.

So, in the `_src/templates/_includes/site-header.njk` template (or indeed in any other template, page or post), you can manually create a set of links for your main menu as follows:

```html
<nav>
  <a href="/">Home</a>
  <a href="/about/">About</a>
  <a href="/posts/">Blog</a>
  <a href="/contact/">Contact</a>
</nav>
```

That main menu can be utilized on all the pages, no matter where they are in your website, no matter how deeply they are nested in folders within folders — and the links would all still work because of this linking “root-relative” principle.

## Markdown Links

You can create links in Markdown, in your content pages and posts, very easily, as follows:

```markdown
Some writing about [example link](http://example.com) whatever...
```

Some writing about [example link](http://example.com) whatever...

The linked word(s) go in the \[square brackets] and the link address goes in the curved brackets. Be sure there’s no space between the between the pairs of brackets — it should be `[]()`

So, you could create a link to your homepage like so:

```markdown
[Home](/)
```

This will be transformed into the HTML:

```html
<a href="/">Home</a>
```

[Home](/)

And here’s a link to the first post in these docs (remembering to use the “root-relative” principle):

```markdown
Read the [introduction](/posts/2022/introduction/)
```

Read the [introduction](/posts/2022/introduction/)

## Auto-Generated links

1. There are several kinds of auto-generated navigation menus in EBST.
    * The main menu (in the site header and site footer) uses the [Eleventy navigation plugin](https://www.11ty.dev/docs/plugins/navigation/) to generate a list of links from pages. The pages that get included in the main menu are specified (by me in this demo, or by you) in the YAML front matter. Read more about [how to get pages linked in the main menu](/posts/2022/yaml-front-matter/#eleventynavigation%2C-key%2C-and-order).
    * The blog post sidebar also uses the Eleventy navigation plugin, and posts are also added and ordered in it by data in the front matter. [Read more](/posts/2022/yaml-front-matter/#insidebarmenu-and-menuorder)
    * The featured posts on the homepage are set up in a similar way to the post sidebar docs menu, but more information is displayed for each featured post. [Read more](/posts/2022/yaml-front-matter/#featuredpost-and-postweight)
    * Then there’s the automatic table of contents (TOC) for on-this-page links in the blog/docs. [Read more](/posts/2022/yaml-front-matter/#showtoc)
2. Templates for the homepage and the blog system pages (posts, tags, archive), and the RSS feed and JSON feed templates contain several auto-generated links – to the posts, and to their tag shortlists.
3. Blog posts have auto-generated “previous post” and “next post” links.
4. Blog index pages (for chunks of ten posts) have pagination links  `<< < 1 2 3 4 5 > >>` to next and previous chunks of ten.
