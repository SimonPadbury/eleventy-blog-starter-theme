---
title: Introduction
h1Title: Introduction to the Eleventy Blog Starter Theme (EBST)
date: 2022-08-01
layout: post.njk
author: Simon Padbury
description: This theme is documented in blog posts.
tags:
  - Eleventy
  - Styles and Scripts
  - Metadata
showToc: true
featuredPost: true
postWeight: 3
inSidebarMenu: true
menuOrder: 1
---

Through a series of blog posts, I will introduce several of the salient features of the Eleventy Blog Starter Theme (EBST). Consider these posts as both documentation and an example.

<div class="popout message-info mt2 bt3 r3 bblue b400 p2 flex bggray bg100">
<span class="h1 m0 pr1">&star;</span>
<span>These docs are also available in the EBST <a href="https://github.com/SimonPadbury/eleventy-blog-starter-theme/wiki">Wiki</a> — so you can go ahead and delete the demo posts in your project.</span>
</div>

This project aims to provide a good place to start an Eleventy (often shortened to _11ty_) static website/blog.

Only some basic informaton will be provided in these docs about [Eleventy](https://www.11ty.dev), the [nunjucks](https://mozilla.github.io/nunjucks/) templating system, and [Markdown](https://www.markdownguide.org). If you want more on these, you can click those links.

## The Stylesheet

A stylesheet is included — my own [Baselayer CSS](https://github.com/SimonPadbury/baselayer), but that is [documented elsewhere](https://simonpadbury.github.io/baselayer/).

_Baselayer is not essential to this theme._ Feel free to swap out Baselayer and refactor the HTML classes for another CSS framework, such as Bootstrap, Bulma, Foundation, or Tailwind. Or, create your own styles.

<div class="popout message-info mt2 bt3 r3 bblue b400 p2 flex bggray bg100">
<span class="h1 m0 pr1">&star;</span>
<span>Your design doesn’t need to look like what you see here, whether you build upon Baselayer or not.</span>
</div>

## The Frontend JavaScripts

Baselayer CSS has no accompanying or required JavaScript. So, you can use it with a JS framework of your choice (or create your own). But this Eleventy starter theme has a couple of “vanilla” JS scripts:

1. A nav menu slide-reveal for small viewports (phones)
2. A theme toggler, for dark/light mode
3. A year-getter, for the site footer © Copyright line

## The Metadata

EBST pulls your basic website data from a `_src/data/metadata.json`. This is where you store information about your website title and subtitle, your website’s root URL, your name as owner/author, and so on. This information is inserted (i.e. these variables are interpolated) into various places in the EBST theme, such as in the top bar and in URLs for the social sharing links and the RSS feed.

In the metadata you will see an entry for `"version"` – this is used as a suffix on your stylesheet(s) and JavaScript(s), to ensure that your site visitors obtain the latest version of these files instead of older ones in their browser casche (if they have previously visited your site). You can simply increment a version number, or you can put a version of the date (without spaces) that you last modified these file(s) in the `"version"`, as I have done in my example.

You should begin putting your site information in the metadata file soon after you have installed Eleventy/EBST. Be sure to review your metadata before you deploy your website on a real webserver, and at every deployment thereafter.
