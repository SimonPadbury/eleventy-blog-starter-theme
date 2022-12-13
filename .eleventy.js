const { EleventyRenderPlugin } = require("@11ty/eleventy");
const { format, getYear } = require("date-fns");
const fs = require("fs");
const pluginRss = require("@11ty/eleventy-plugin-rss");
const pluginNavigation = require("@11ty/eleventy-navigation");
const markdownIt = require("markdown-it");
const markdownItAnchor = require("markdown-it-anchor");
const markdownItFootnote = require("markdown-it-footnote");
const pluginTOC = require('eleventy-plugin-toc');

module.exports = function(eleventyConfig) {

  eleventyConfig.addPlugin(EleventyRenderPlugin);
  eleventyConfig.addPlugin(pluginNavigation);
  eleventyConfig.addPlugin(pluginRss);
  eleventyConfig.addPlugin(pluginTOC, {
    tags: ['h2', 'h3'],
    ul: true
  })

  /**
   * Dates
   */

  eleventyConfig.addFilter("date", function (date, dateFormat) {
    return format(date, dateFormat)
  })

  // Year (used in the Archive loop)
  eleventyConfig.addNunjucksFilter("year", function (post) {
    if (post && post.date) {
      return getYear(post.date);
    }
    return "n/a";
  });

  /**
   * Reading Time
   */

  eleventyConfig.addNunjucksFilter("readingTime", (wordcount) => {
    let readingTime = Math.ceil(wordcount / 220);
    if (readingTime === 1) {
      return readingTime + " minute";
    }
    return readingTime + " minutes";
  });

  /**
   * Pass Through Copy
   */

  eleventyConfig.addPassthroughCopy("_src/css");
  eleventyConfig.addPassthroughCopy("_src/js");
  eleventyConfig.addPassthroughCopy("_src/img");
  eleventyConfig.addPassthroughCopy("_src/icons");

  /**
   * Get the first `n` elements of a collection
   * ==========================================
   * Used on Homepage and in Recent Posts
   */

  eleventyConfig.addFilter("head", (array, n) => {
    if( n < 0 ) {
      return array.slice(n);
    }
    return array.slice(0, n);
  });

  /**
   * Tags
   */

  eleventyConfig.addCollection("tagList", function(collection) {
    let tagSet = new Set();
    collection.getAll().forEach(function(item) {
      if( "tags" in item.data ) {
        let tags = item.data.tags;

        tags = tags.filter(function(item) {
          switch(item) {
            // this list should match the `filter` list in tags.njk
            case "all":
            case "nav":
            case "post":
            case "posts":
              return false;
          }
          return true;
        });

        for (const tag of tags) {
          tagSet.add(tag);
        }
      }
    });

    return [...tagSet];
  });

  /**
   * Featured Posts
   * ==============
   * Used on Homepage. Requires a `postWeight` for sorting, else it will
   * list according to date (oldest first)
   */

  eleventyConfig.addCollection("featuredPosts", function(collectionApi) {
    return collectionApi.getAll()
      .filter(function(item) {
        return "featuredPost" in item.data;
      })
      .sort(function(a,b) {
        return a.data.postWeight - b.data.postWeight;
      });
  });

  /**
   * Sidebar Menu
   * ==============
   * Used on blog posts (for documentation menu). Requires a `menuOrder` for sorting, else it will
   * list according to date (oldest first)
   */

     eleventyConfig.addCollection("sidebarMenu", function(collectionApi) {
      return collectionApi.getAll()
        .filter(function(item) {
          return "inSidebarMenu" in item.data;
        })
        .sort(function(a,b) {
          return a.data.menuOrder - b.data.menuOrder;
        });
    });
  

  /**
   * Markdown Overrides
   */

  let markdownLibrary = markdownIt({
    html: true,
    breaks: true,
    linkify: false,
    typographer: true
  }).use(markdownItAnchor).use(markdownItFootnote);

  markdownLibrary.renderer.rules.footnote_caption = (tokens, idx) => {
    let n = Number(tokens[idx].meta.id + 1).toString();
  
    if (tokens[idx].meta.subId > 0) {
      n += ":" + tokens[idx].meta.subId;
    }
  
    return n;
  };
  eleventyConfig.setLibrary("md", markdownLibrary);

  /**
   *  Browsersync Overrides
   */

  eleventyConfig.setBrowserSyncConfig({
    callbacks: {
      ready: function(err, browserSync) {
        const content_404 = fs.readFileSync('_site/404.html');

        browserSync.addMiddleware("*", (req, res) => {
          // Provides the 404 content without redirect.
          res.write(content_404);
          res.end();
        });
      },
    },
    ui: false,
    ghostMode: false
  });

  /**
   * Returns
   */

  return {
    templateFormats: [
      "md",
      "njk",
      "html",
      "liquid"
    ],

    markdownTemplateEngine: "liquid",
    htmlTemplateEngine: "njk",
    dataTemplateEngine: "njk",

    // These are all optional, defaults are shown:
    
    dir: {
      input: "_src",
      includes: "templates",
      data: "data",
      output: "_site"
    }
  };

};