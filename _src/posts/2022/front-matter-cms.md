---
title: Using Front Matter CMS
h1Title: Using the Front Matter CMS in Visual Studio Code
date: 2022-12-10
layout: post.njk
author: Simon Padbury
description: With the Front Matter CMS plugin in VS Code, you get a CMS-like experience for content creation. 
tags:
  - Front Matter
  - VSCode
showToc: true
inSidebarMenu: true
menuOrder: 9
slug: front-matter-cms
---

[Visual Studio Code](https://code.visualstudio.com) is one of the best code editors out there, and it is highly recommended. If is free software from _Microsoft_, and there are versions available that can be installed on Windows, macOS, and Linux.

Eleventy, and EBST, can be used with any code editor — you just need NodeJS and NPM installed. Eleventy/EBST can be used simply that way, by coding and Markdown content creation. But Front Matter CMS provides _headless CMS-like features_, inside VS Code.

## Install VS Code, and Get the Front Matter CMS Plugin

Install VS Code, if you haven’t done so already.

Then, in VS code, you can install the free [Front Matter CMS plugin](https://frontmatter.codes). In the left toolbar there’s a “Plugins” icon — if you click that, it opens a sidebar with a list of available plugins. Find **Front Matter CMS** and click the “Install” button.

## Getting Started with Front Matter CMS

Open **your EBST project folder**, then click the Front Matter CMS icon in the left toolbar. At the top of the Front Matter CMS sidebar that opens, you will see the “Initialize project” button (and not much else). Click that button.

You will now see the Front Matter CMS _welcome screen_ (see also [Getting started](https://frontmatter.codes/docs/getting-started) in the Front Matter CMS docs). You need to work though and complete the checklist below the bold instruction, “**Perform the next steps to get you started with the extension**”. Click the circles on the vertical line to turn them into green checks:

* INITIALIZE PROJECT
* FRAMEWORK PRESETS — it should detect and pre-select “11ty”
* REGISTER CONTENT FOLDER(S) — it should detect your folders containing Markdown files, and give you the option to register them, e.g. my EBST folder are:
  * `_src/pages`
  * `_src/posts/2022`
* IMPORT ALL TAGS AND CATEGORIES (OPTIONAL) — it’s up to you, but I always do it.
* SHOW THE DASHBOARD — if you can do this last step, then you have completed the initialization of your project.

## Getting Familiar with Front Matter CMS

If you have used a CMS before, you’ll feel right at home. There is extensive [documentation on Front Matter CMS website](https://frontmatter.codes/docs).
