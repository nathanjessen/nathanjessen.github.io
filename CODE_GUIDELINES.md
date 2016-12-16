# Code Guidelines

Contains my preferences for writing CSS.

## Nesting

Do not nest selectors. Nesting should only be done for pseudo classes and pseudo elements. This improves readability.

## Variables
Use CSS variables for any value that is configurable. Do not use preprocessor variables since they are static. Native CSS variables can change at runtime and provides a better alternative for theming a site. CSS variables also have the ability to be scoped to a subset of the DOM tree and provide better control. Native variables can also be accessed with JavaScript and interacted with.

## Margin-top vs Margin-bottom
Ideally, you should be pushing content in the same direction. The layout is more predictable if you choose to stick to pushing elements down with margin-bottom or margin-top but not both. Choose one and stick to it for separating elements. The preferred method is to use margin-top since this allows for more control and elements can be targeted using the adjacent sibling selector.

## Media
* Set a width and height attribute on images and other media elements if the dimensions are known.
* Use intrinsic ratios to define the sizes of media to prevent content from jumping around as the media is loaded.
* Use progressive JPEGs

## Ads
Third-party content is typically added via JavaScript and causes the page to shift if not handled correctly. Create a placeholder for ads using CSS and replace the content once the ad has been loaded.

## Dynamic content
Set a min-height on widget areas with dynamic content. This will help prevent large page jumps if more space is required. The value of the min-height should be close to the expected content height and this will depend largely on what content is typically in the widget.

## Web Fonts
Use a [Font Face Observer](https://github.com/bramstein/fontfaceobserver) script to detect when the font has loaded and apply to the CSS afterwards.

## Flexbox vs Grid
Use Grid for main page layout. Use flexbox for laying out content.

## Performance
* Use a CDN to serve assets
* Performance testing with [WebPagetest](http://www.webpagetest.org/) or its npm module [webpagetest-mapper](https://www.npmjs.com/package/webpagetest-mapper)
* [Google PageSpeed](https://developers.google.com/speed/pagespeed/insights/)
* [Gulp size](https://github.com/sindresorhus/gulp-size)
* Set a performance budget
* Put "Performance Checkup" on your calendar to remind yourself to check on performance regularly
* Serve root domain through a CDN and make sure CSS is on the same domain
* Critical JS in the head. Enhancements loaded async.
* Pre-fetch assets required for next page in a process flow
* Place scripts at the end and use async (download and execute once downloaded) and defer (download but don't parse until page has rendered. will execute in order).
  1. If script is modular and does not rely on any scripts then use async
  2. If script relies upon or is relied upon by another script then use defer
* CSS is treated as render blocking and browsers will delay rendering until stylesheets are downloaded and processed. External stylesheets require more network trips which increase wait time. To combat this, let's inline critical CSS in the head. Use [loadCSS](https://github.com/filamentgroup/loadCSS) to load additional stylesheets asynchronously.

```
<head>
  <style>
    /* inline critical CSS */
  </style>
  <script>
   // inline the loadCSS script
   function loadCSS( href, before, media, callback ){ ... }
   // then load your stylesheet
   loadCSS("/path/to/stylesheet.css");
  </script>
  <noscript>
    <link href="/path/to/stylesheet.css" rel="stylesheet">
  </noscript>
</head>
```
