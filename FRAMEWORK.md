# Framework

## About
I'm in the process of building a CSS framework and I've chosen my portfolio to be the location of the initial implementation of the framework. Eventually, it will be pulled out of this repository and open-sourced in its own repository. The framework will be a CSS architecture and methodology to help build sites rapidly using minimal effort while still maintaining optimal performance and use of native CSS. By using native CSS, there are fewer tools for developers to learn and they can focus on learning true CSS specifications and features.

## Goals / Key Features
1. Clear folder structure
2. Scalable and maintainable stylesheets
3. Easy setup
4. Use of Native CSS Features
5. Simple tools with the addition of PostCSS to process stylesheets
6. Ensure optimal performance

## Why use the Framework
For the past several years, frameworks have adopted dozens of tools that have made them unnecessarily complex. To get started with a new framework, you have to learn something about all those tools being used. The frameworks have adopted the use of preprocessors like Sass, Less, and Stylus which have also added to the complexity. For years, I have been a huge advocate for them and I love what they have allowed us to do. But eventually you realize that developers begin to rely too heavily on the built-in features of the preprocessors and forget to learn about the cool stuff being added to CSS like functions and CSS variables. Let's get back to using structures readily available inside of browsers and build a framework around them.

## File Structure
For now, all CSS files are located in the CSS directory. There should be a single point of entry for importing all files. These files get imported using CSS import plugin. [Where should critical CSS be handled?]

1. main.css
2. root.css (Default variables)
3. Components
4. Specifics
5. Vendor

## Browser Support
Evergreen browsers and IE11+. Browsers should support flexbox and native CSS variables. Graceful degradation instead of progressive enhancement.


# Resources
1. [Ways to Reduce Content Shifting on Page Load](https://www.smashingmagazine.com/2016/08/ways-to-reduce-content-shifting-on-page-load/)
2. [Need for Speed 2](https://jonsuh.com/blog/need-for-speed-2/)
3. [How We Load Web Fonts Progressively](https://jonsuh.com/blog/font-loading-with-font-events/)
4. [Flash of Faux Text -- Still More on Font Loading](https://www.zachleat.com/web/foft/)
