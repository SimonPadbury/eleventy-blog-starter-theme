---
title: About Eleventy
h1Title: About Eleventy, and Static Site Generators
date: 2022-08-12
layout: post.njk
author: Simon Padbury
description: How Eleventy fits into the grand scheme of web things.
tags:
  - Eleventy
showToc: true
inSidebarMenu: true
menuOrder: 2
slug: eleventy
---

There are basically four ways you can construct a website. Here’s a brief explanation:

## Early Static Websites

The first would be to directly code the webpage(s) in HTML, and add some styles via CSS and maybe some interactivity via JavaScript. If you have only a small number of pages in your website and some knowledge of these languages, then this may be all you need to do.

Years ago web authoring software was available, such as Microsoft Frontpage, Adobe Dreamweaver, and Netscape Composer, to help with this process (less or no coding required). These have been largely superceded by online web authoring content management systems such as Wix and Webflow.

## Content Management Systems

Many website hosts can have software uploaded and installed upon them, such as web content management systems (_CMSs_), and ecommerce CMS for online shopping. A few of the most famous ones are WordPress, HubSpot, Drupal, Joomla, WooCommerce (a WordPress ecommerce plugin), Magento, and Shopify.

The CMS handles the _backend_ duties (such as content management, providing a content editing environment, onboard theme hosting, data security, updates, backups, feedback comments, onboard searches, etc.) and the _frontend_, that the public sees, is constructed from a set of templates (usually known as a _theme_) into which the content is inserted.

Besides self-hosting a CMS-powered website, a number of companies that provide website _Software as a Service_ (SaaS), hosting the CMS themselves, and you can pay a monthly or yearly fee for a login account. You also get technical support, backups, and secrity updates all taken care of.

Many CMSs assemble the website pages on-the-fly when a visitor clicks on a link, pulling content from a database and inserting it into templates, but some can be configured to pre-build pages and store them in a _server cache_.

## Static Site Generators

In recent years, websites as powerful as CMS-powered websites have been produced by web developers using static site generators (_SSGs_; also called static website generators (SWGs) but those initials are harder to say). Examples are Eleventy, Jekyll, Astro, Hugo, Gatsby, NextJS, Nuxt, Gridsome, and SvelteKit.

The basic usage of SSGs is to design and code the website frontend (whether a multi-page site or a single-page webapp) using a component and/or templating system, and then to compose the textual content separately. The SSG builds the website or webapp by connecting the template(s) and content together to form the static site, which is then deployed to a web server.

## JAMstacks and Headless CMSs

Then there’s the “best of both worlds” approach, combining (2.) and (3.) above, where a SSG receives content via an API (application programming interface) from a headless CMS. A headless CMS is one that doesn’t handle its own frontend templating and page building. (Some older CMSs now also have a “headless mode”.)

With this setup, known as a JAMstack, web developers can handle the coding while content creation can be handled by non-coders. The _JAM_ in the JAMstack stands for JavaScript (SSG), API, and Markup.

1. The SSG is (usually) composed in JavaScript, and installed on a web server.
2. The SSG pulls content from a headless CMS (or something else) via its API, and
3. The SSG brings the content and templates together to build the Markup, i.e. the website or webapp (in HTML, with styles, images and other media, and interacive JavaScript.

[Eleventy](https://www.11ty.dev) is a SSG that is built using Node JavaScript. Eleventy is often used to build static sites from templates (of any of several templating languages) and textual content, often written in Markdown. It can also be used for server-side rendering as part of a JAMstack.

Learn more about Eleventy from the [Eleventy documentation](https://www.11ty.dev/docs/).
