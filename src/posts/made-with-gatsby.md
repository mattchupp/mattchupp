---
path: "/blog/made-with-gatsby"
date: "2020-07-30"
title: "Made With Gatsby"
---

This is how my site works. I bought my domain in 2015 and have had a website running since then. As new tools (& my skills expanded) it has seen a lot of changes. At first it was just hosted on godaddy. It lived on [digital ocean](https://www.digitalocean.com) droplet for a while. I even had it hosted on github pages. Most or all of the code still lives on [github](https://github.com/mattchupp) some where. This iteration is my favorite.

## The Stack

The site is built with [GatsbyJS](http://gatsbyjs.org) and hosted on [Netlify](http://netlify.com). I have tried [Jekyll](https://jekyllrb.com), another SSG (Static Site Generator) before. I’m more familiar with Javascript, so Gatsby made the most sense. It’s also built on React, which is a huge plus! 

I can develop locally and push to
[github](https://github.com/mattchupp/mattchupp). The site automatically builds on [Netlify](http://netlify.com) via commit-hook.

All blog posts are written in markdown. I write the post locally and push to github to update. 

### Plugins

There are a ton of [Gatsby plugins](https://www.gatsbyjs.org/plugins/). Some of the ones I’m using are
- [gatsby-plugin-sass](https://www.gatsbyjs.org/packages/gatsby-plugin-sass/?=sass) – so I can use scss
- [gatsby-plugin-dark-mode](https://www.gatsbyjs.org/packages/gatsby-plugin-dark-mode/?=dark%20mode) – made implementing dark mode super easy
- [gatsby-remark-reading-time](https://www.gatsbyjs.org/packages/gatsby-remark-reading-time-v2/?=gatsby-remark-readi) – adding reading time for each post
