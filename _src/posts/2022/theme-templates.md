---
title: "Theme Templates"
h1Title: "EBST Templates and Partials Walkthrough"
date: 2022-09-21
layout: post.njk
author: Simon Padbury
description: "How this theme uses the Nunjucks templating system."
tags:
  - "Eleventy"
  - "Nunjucks"
showToc: true
featuredPost: true
postWeight: 2
inSidebarMenu: true
menuOrder: 4
---

Templating in Eleventy can be done in any of several [templating languages](https://www.11ty.dev/docs/languages/). If you are familiar with one of these already, you can go with that, or you can learn a new one.

EBST uses the [nunjucks](https://mozilla.github.io/nunjucks/) templating language.

Any HTML file can be converted into a nunkucks file simply by  changing its filename extensing from `.html` to `.njk. From there, if you’ve learned how to use...

* [variable interpolation](https://mozilla.github.io/nunjucks/templating.html#variables),
* [partial template includes](https://mozilla.github.io/nunjucks/templating.html#include),
* [if/else logic](https://mozilla.github.io/nunjucks/templating.html#if), and
* [for loops](https://mozilla.github.io/nunjucks/templating.html#for)

...then you’ve learned most of how EBST works.

## The Templates

All of the static webpages are built starting with `_src/templates/base.njk`. That’s where you will find the HTML `<head>` and `<body>` tags, with everything else being added in.

The base template works as a wrapper template, inwo which any of the four types of page templates below are slotted into the `content` variable during page bulid.

<pre><code>&lt;main&gt;
  &lbrace;&lbrace; content | safe &rbrace;&rbrace;
&lt;/main&gt;</code></pre>

1. The homepage template, `index.njk`
2. The simple page template, `page.njk` (used for the About and Contact page; and used as the basis of any non-blog-post page you may need).
3. Blog _system_ pages also use the `page.njk` template:
    a. `posts.njk` — the blog listing.  This is a repeater template that creates chunks (shorter lists) of ten blog post excerpts per page. At the bottom of `posts.njk` there is an include for `post-paginator.njk` (also handled by a for-loop). If you had a hundred blog posts, `posts.njk` would be used to generate ten index pages for displaying excerpts for the first ten, next ten, and so on – and the paginator would generate links to each index.
    b. `archive.njk` — the “all posts” listing. This has a “loops within a loop” system that will generate lists per-year for all your posts.
    c. `tags.njk` — has a for-loop that filters and lists post excerpts under each tag. It will be used to generate as many tag pages as you have named tags assigned to blog posts.
    d. `tags-list.njk` — for displaying the list of tags.
4. The single blog post template, `post.njk`.

There are two more for-loops, that can be found here:

* The `posts-recent.njk` partial template. This makes a list of your three most recent posts, and it is used on the homepage.
* The _featured posts_ loop on `index.njk` makes a shorlist of your featured posts (you specify which is to be a featured post in the YAML frontmatter of your posts).

There are also nunjuks templates for generating `robots.txt`, `sitemap.xml`, and the RSS and JSON feeds.

## Including Partial Templates

All pages use the site header and site footer partial templates, which are included in `_src/templates/base.njk` above and below the main content slot. Template partials are all found in the `_src/templates/_includes` folder. For example, the following will include the header (that has the site logo and title, and top navigation menu):

<pre><code>&lbrace;% include "_includes/site-header.njk" %&rbrace;</code></pre>

Similarly, in the single blog `post.njk` template, there’s also an include for `post-sidebar.njk`

There are several more partials. Fragmenting parts of templates into partial template files in this way enables the theme to be well organised.

## Favicons

You will want your own favicons, to replace my EBST examples in `_src/icons`.

More information on the what and how of favicons:

* [How to Favicon in 2022: Six files that fit most needs (Evil Martians)](https://evilmartians.com/chronicles/how-to-favicon-in-2021-six-files-that-fit-most-needs)
* [Create all favicon formats in Mac OS with Preview! (Coderwall)](https://coderwall.com/p/89p9kw/create-all-favicon-formats-in-mac-os-with-preview)
* [Real Favicon Generator — online tool](https://realfavicongenerator.net)
