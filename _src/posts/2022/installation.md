---
title: Installation
h1Title: Installing EBST, Eleventy, and Other Dependencies
date: 2022-08-03
layout: post.njk
author: Simon Padbury
description: How to install the Eleventy Blog Starter Theme and its dependencies (including
  Eleventy); and how to serve the static website locally on your computer.
tags:
  - Installation
  - Eleventy
showToc: true
inSidebarMenu: true
menuOrder: 3
---

If you want to use the EBST, you need to be able to use Eleventy. And for that you will need to have [Node JS](https://nodejs.org/) insalled on your computer. _Install NodeJS if you haven’t done so already._

Plus, you will need some knowledge of how to use your computer _terminal_.

You can install Eleventy before EBST. But it is simpler to do it the other way round, because Eleventy is a _dependency_ of this starter theme. When you install EBST, its dependencies are installed along with it (see the `package.json` in this repository).

Dependencies required by EBST, that it will automatically co-install:

* Eleventy core and official dependencies:

  ```json
  @11ty/eleventy
  @11ty/eleventy-navigation
  @11ty/eleventy-plugin-rss
  ```

* Plugins:
  
  ```json
  date-fns
  eleventy-plugin-toc
  markdown-it-anchor
  markdown-it-footnote
  ```

## How to install EBST

There are two ways to start with EBST, but they converge later in the installation process.

### Cloning EBST Using Git

If you have [Git](https://git-scm.com/book/en/v2/Getting-Started-Installing-Git) installed on your computer, then you can do this:

1. First, in your terminal, `cd` (change directory) into the folder where you wish to start a project. (For example, you may have a `Sites` folder.)
2. In the new folder, in the ternimal, do:

```js
git clone ........ myNewProject
```

That will clone the GitHub repository of this eleventy starter theme into a newly created folder named `myNewProject` — you can choose a better name than this.

### Downloading EBST Manually

* **Or:** download this stater theme into it (uncompress/unzip it)

1. Rename the uncompressed project with a project name of your choice
2. In your terminal `cd` into that new prodect folder

### Installation of EBST and Its Dependencies

If you have successfully completed either of the above, you are ready for step three:

3. In the terminal, do `npm install`

This will install all the dependencies for this Eleventy Starter Theme project. When it is done, look inside your new project folder and you will see another folder named `node_modules` with all these dependencies in it, in their respective folders.

## Running Eleventy on your computer

Next, you can run the static website generatot, Eleventy, which will start its virtual server. In your ternimal, still in your new project folder, do this:

```js
npm run dev
```

When Eleventy is running, it will run one of _its_ dependencies, _Browsersync_, and it will  will give you a message in the terminal with an URL local to your computer, which you can use to see the locally running website. It will probably look like this:

```js
[11ty] Copied 2 files / Wrote 18 files in 0.25 seconds (13.9ms each, v1.0.2)
[11ty] Watching…
[Browsersync] Access URLs:
 ---------------------------------
    Local: http://localhost:8080
 External: http://xxx.xxx.x.x:8080
 ---------------------------------
[Browsersync] Serving files from: _site
```

That’s the report in your terminal, about what Eleventy is doing. Eleventy is generating webpages, putting them in the `_site` folder, and then Browsersync is serving them from there.

In your browser (_local_ to Browsersync, i.e. on the same computer), you can go to [http://localhost:8080](http://localhost:8080) (or whavever it is in your situation), to view your website. And if you have another computer, phone or tablet on your _local area network (LAN)_/wi-fi (i.e. _external_ to your computer), you can use the external link and then view your website there. (Where I have used `http://xxx.xxx.x.x:8080` those “x”’s will be a set of numbers unique to you.)

Use these two URLs diring website development and testing. When you are done and ready to upload your website to a real web server somewhere, you will need to take the content of your `_site` folder and upload it all.

You can stop Eleventy and Browsersync anytime in the terminal by `^C` — hold down the control (CTRL) key and press the “C” key.
