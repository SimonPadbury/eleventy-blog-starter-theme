---
title: YAML Front Matter
h1Title: How EBST Uses YAML Front Matter for Pages and Blog Posts
date: 2022-11-25
layout: post.njk
author: Simon Padbury
description: Using YAML for setting the title, choosing the layout, adding topical tags,
  and controlling “widgets”.
tags:
  - YAML
  - Front Matter
showToc: true
featuredPost: true
postWeight: 1
inSidebarMenu: true
menuOrder: 6
---

From the [YAML](https://yaml.com) website:

> YAML is a human friendly language for the communication of data between people and computers.

In common with all Eleventy themes, and with themes in many other static website generators, EBST uses YAML in the _front matter_ of blog webpages and blog posts. This is where you, the content creator, get to specify the _metadata_ (such as the post author and its publication date), and various _settings_ that you wish to associate with your post or page.

YAML is basically a set of _key: variable_ pairs. The part before the colon `:`, the key, is a placeholder instruction. The _variable_ is your choice of metadata or setting. This front matter is understood and implemented by Eleventy. (Some of the front matter YAML codes are generic to Eleventy and others are specific to EBST.

## YAML keys used in posts and pages

### `title`

\[required]

This is where you provide the (short) title for your page or blog post. Best practice is to surround your title in `"..."` straight double speech marks. The title that you provide is used in the `<title>` of the generated webpage, and it may also be used for the `<h1>` main heading tag — unless you also supply a longer title.

### `h1Title`

\[optional]

If you want an `<h1>` title that’s longer than you would want to fit in the `<title>` tag, use this. `h1Title` is preferrentially used in the `<h1>` (and other places, such as the homepage excerpts, the blog system pages, an the prev/next pagination), but if it is not present, the `title` will be used instead.

### `description`

\[required]

The `description`, a summary of what the post or webpage is about, is used in three places:

* The `<meta description="">`
* The blog feed
* The blog post `<header>`

### `date`

\[required for blog posts]

Eleventy generates _feeds_ of blog posts out of the `posts/` folder Markdown files. See [collections](https://www.11ty.dev/docs/collections/) in the Eleventy documentation for how this works. (There’s a JSON file in the `posts/` folder that assigns all content files in the folder with the `post` tag.)

You need to provide the date in the `YYYY-MM-DD` format (e.g. 2022-05-01 means 1st May 2022). EBST will convert this into a more human-readable format for displaying in the blog post and feed pages.

### `layout` (template selection)

\[required]

Pages by default require `layout: page.njk` and posts by default require `post.njk` — these templates are both provided in the `_src/templates` folder.

You can clone, rename and modify these templates to make custom page layouts and custom post layouts, when you have page or post that deserves such special treatment. And then, in your page/post front matter you can select your custom layout template instead.

### `draft`

\[optional on blog posts]

You won’t want to upload a static website’s draft posts (unfinished of unfinalized), so you may wish to include the YAML `draft: true` in the post’s front matter while a post to be in draft, as a reminder to yourself.

_EBST “draft mode” does not prevent a post from being generated._ But what it does is add an obvious label to posts in draft.

Just remember to review your website before uploading/deployment, checking for drafts so that you can either finalize them or remove them do that they don’t go public. And remember to remove the `draft: true` flags from the front matter!

### `author`

\[optional for blog posts]

If you supply an `author` name in the front matter (blog posts only), then that’s what will be picked up and used in the generated post’s “By ___” line. If not, then this will fall back to be fulfilled by the author name you have supplied in the _site metadata_, found in `_src/data/metadata.json`. (If you don’t change that, you will get the default "Your Name".)

### `tags`

\[optional for blog posts]

Eleventy uses _tags_ for generating shortlists of your blog posts. You can assign one or more tags to a blog post, and use the same tags on multiple blog posts. (Think of the tag names as the main topics covered in your post, or what you would want your post shorlists under.)

The list of all tags you have used can be found at [all tags](/tags/). (Alternatively, you can remove that page, and you can use the feed on that page as a _widget_ in your sidebar or footer.) I can’t provive links to the shortlist pages of the tags that _you_ will choose, because it will be your tag names that will be used for the URIs.

### `bodyClass`

\[optional]

If you put one or more CSS classes in `bodyClass`, then these will be added assigned to the `<body>` tag at page generation. For example, you may use this to add a colored background to a particular post or page. You can look at the `<body>` tag in `_src/templates/base.njk` to see how this is implemented.

Imagine. You could copy and modify this technique for adding CSS classes (or other attributes) in other places on your generated pages.

### `showToc`

\[optional on blog posts]

There is an optional automatic _Table of Contents (TOC)_ generator built into EBST, using the dependencies `eleventy-plugin-toc` and `markdown-it-anchor`.

* `markdown-it-anchor` adds an `id` to each subheading `<h2>` and sub-subheading `<h3>` in all your Markdown-generated posts and pages, basing it on a _kebab case_ modification of your heading.
* `eleventy-plugin-toc` can generate a TOC with links to all the `<h2>` and `<h3>` headings in your post content.

If you want to show an “On this page” TOC in the sidebar on a blog post (it hasn‘t been implemented on ordinary content pages, but you could do that too), simply include the YAML `showToc: true` in the post’s front matter. The sidebar partial template `_src/templates/_includes/post-sidebar.njk` contains a Nunjucks `if` statement that is controlled by `showToc`, that will optionally add the TOC to the blog post sidebar.

### `featuredPost` and `postWeight`

\[optional in posts]

There is a system for featured posts built into EBST (using Eleventy [collections](https://www.11ty.dev/docs/collections/)), and these will appear on the homepage (templated by `_src/templates/index.njk`).

If you want a post to be displayed as a featured post, then include the YAML `featuredPost: true` in the post’s front matter. Featured posts will be displayed in order of _most recent first_, but you will probably want to override that by adding a _weight_ to the featured post.

### `inSidebarMenu` and `menuOrder`

\[optional in posts]

There is an optional menu “widget” on blog posts, necessary only in these docs where I wanted a docs menu in the sidebar. If it’s inappropriate for your blog, you can remove it. If you need somethink like it for controlling your non-blog pages (e.g. you may have a set of online resources, or a catalog), then this menu widget may be useful for you in there.

If you want a post to be displayed in the sidebar menu, then include the YAML `inSidebarMenu: true` in the post’s front matter. Menu items will be displayed in order of _oldest first_, but if you want to override that, you can do so by adding by adding an order. `menuOrder` to set the position of the post in the menu, as `1`, `2`, `3`, etc.

### `eleventyNavigation`, `key`, and `order`

\[optional in pages]

The main navigation (top menubar) is populated by an Eleventy [collection](https://www.11ty.dev/docs/collections/) from pages of your choice. (Alternatively, you can hard-code links manually of course.)

If you want a page to be linked in the menubar in `_src/templates/_includes/site-header.njk`, then include the YAML `eleventyNavigation:` (`true` is presumed) in the page frontmatter. Then immediately under it, assign the `key` (= the link name)and the `order` in which you want the link to appear in the menu.

For example, the homepage is linked first. So, in the front matter of `_src/index.njk` you will see:

```yaml
eleventyNavigation:
  key: Home
  order: 1
```

And in `_src/pages/about.md` you will see:

```yaml
eleventyNavigation:
  key: About
  order: 2
```

### `permalink`

\[optional]

Ordinarily, a page or post’s URI is generated from a its Markdown filename. For example, the post you are currently reading comes from `_src/posts/yaml-front-matter.md` and you will find it at [/posts/2022/yaml-front-matter/](/posts/2022/yaml-front-matter/).

You can set your own choice of URI to a page, overriding this default behavior, by including `permalink: whatever-you-want`.

For more information on permalinks see [permalinks](https://www.11ty.dev/docs/permalinks/) in the Eleventy docs

### `pagination`

\[some blog system pages]

The pagination on the blog index template `_src/posts.njk` and the tags template `_src/tags.njk` have theit pagination controlled by their YAML front matter. This will not be explained here. For information on `pagination` see [pagination](https://www.11ty.dev/docs/pagination/) in the Eleventy documentation.
