---
title: First Impressions of Jekyll
published: true
fullview: true
categories: [Article]
tags: [Jekyll, CMS, Static Site Generator]
description: Thoughts on Jekyll
---

I spent tonight diving into [Jekyll](https://jekyllrb.com/) and [Liquid](http://shopify.github.io/liquid/) templates and I have to say, how in the heck did I not know about this before tonight??

The whole setup is amazingly simple. I've used a lot of technologies and CMS's to build websites in the past but the learning curve for them is generally steep. It takes a full week to really understand the basics of a CMS like WordPress or Drupal and much longer to do anything custom in the system. Jekyll and Liquid as a template engine has been really easy to understand and setup and part of that may be because Github pages support it by default. Going forward I may write a basic tutorial on how to setup a portfolio and blog using what I learned tonight but here are some basic commands in the meantime.

```bash
gem install jekyll bundler
jekyll new my-jekyll-website
cd my-jekyll-website
bundle exec jekyll serve
```

Running these few simple steps allows you to install the Jekyll executable, create a new Jekyll website, and serve the website to be viewed in a browser. Just navigate to [http://localhost:4000](http://localhost:4000).

Once you get a grasp of the Jekyll website, you can begin creating new layouts, pages, and includes using HTML and the Liquid template code. Liquid code is a combination of objects, tags, and filters. A solid introduction to these concepts can be found on their [Introduction](http://shopify.github.io/liquid/basics/introduction/) page.
