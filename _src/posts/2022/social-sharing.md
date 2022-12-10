---
title: "Social Sharing"
h1Title: "Social Sharing in EBST"
date: 2022-12-08
author: Simon Padbury
description: "Simple social sharing tools included in the Eleventy Blog Starter Theme."
tags:
  - "Social media"
showToc: true
inSidebarMenu: true
menuOrder: 8
---

At the bottom of these documentation posts you’ll see three built-in social sharing options: “Share on Facebook”, “Share on Twitter”, and “Share by Email” — with an icon for each.

These are all provided in the partial template `_src/templates/_includes/social-sharing.njk`, and that is included in the `_src/templates/post.njk` template at the end of the post’s main content, and below the tags.

Social sharing is a good idea, to attract visitors to your website. If your readers find your content interesting, then they may use these buttons to share your content with their friends on social media, or directly by email.

This partial template provides the _simplest_ way of social sharing. If you want to use another way of social sharing, such as [Addthis](https://www.addthis.com) or [Sharethis](https://sharethis.com) tools, then there’s no need to include my include too.

I have guessed that you would only want social sharing on your blog posts. But if you add a set of other pages they you would encourage people to share (any kind of online resources pages), then you can include `_src/templates/_includes/social-sharing.njk` on the templates for those pages too.

## Social Sharing Links

In the social sharing partial, the links for sharing to Facebook and Twitter are both prepopulated with the title and URL of the post you wish to share.

You can remove (or nunjucks-comment out) either of both of those, and add your own, using the same technique.

For example, here’s a list of social sharing links on [Chris Fernandi’s GitHub repo](https://github.com/cferdinandi/social-sharing).

These links, in general, look like this:

```html
<a 
  target="_blank"
  href="https://www.facebook.com/sharer/sharer.php?u=YOUR-URL"
>
  Facebook
</a>
```

But you can use Eleventy/EBST to pre-populate the `YOUR-URL` part, and add more. See `_src/templates/_includes/social-sharing.njk` for how I have done this.

**Note:** in the social sharing template your will see that the URL is assembled from the variables for `metadata.url` and `page.url`.

* `metadata.url` obtains the root URL of your website — which you need to put into the `data/metadata.json` file.
* And the `page.url` gets the URI (also known as the “slug”) of your blog post.

## “Share by Email” Link

Also included is a `mailto:` link that should, when clicked, open up your email app and pre-populate as follows:

* **Subject:** “Sharing an article from {name of your website}”
* **Email content:**
  
  `Article title: {title of article}`
  
  _And below that,_
  
  `{the URL of the post that you wish to share}`

That’s all. You will need to add in your own **To:** intended recipients. And you can edit any of the pre-populated stuff and add your own message your email app before you hit **SEND**.

## Social Metas

In the EBST `<head>` tag – coming from a partial template `_src/templates/social-metas.njk` — are the basic OpenGraph (Facebook, Linkedin) and Twitter social metas, following the tutorial at [The Essential Meta Tags for Social Media (CSS Tricks)](https://css-tricks.com/essential-meta-tags-social-media/), but here using Eleventy to populate some of the fields from `_src/data/metadata.json` and from your page’s YAML frontmatter.

Not exemplified in EBST: if you will have featured images for social sharing, then you will need to add a `featuredImage` key in your YAML frontmatter, with the value being the URI of your feaured image.

You will also want to swap out the fallback `_src/img/featured-image.png` for something of your own choosing, relevant to your website/blog.

Read more:

* [Open Graph](https://ogp.me/) – developed originally by Facebook; also used by Linkedin
* [Twitter Card](https://developer.twitter.com/en/docs/twitter-for-websites/cards/overview/markup)

## Social Following Links

If you have your own social media account or a page or group on social media that you wish to invite your website visitors to follow, then you can easily add your own link to wherever that feed/page/group is.

## Built-in RSS and JSON feeds

EBST also contains the [Eleventy RSS plugin](https://www.11ty.dev/docs/plugins/rss/) that outputs an RSS (Atom) and JSON feed to the `_site/feeds` folder, and links to them in the `<head>` of the base template – see `_src/templates/base.njk`.

You can also provide links to these feeds. For example, I have done that below, in the footer.

These feeds draw some of their [metadata](/posts/2022/introduction/#the-metadata) from `_src/data/metadata.json`.
