---
layout: article
title: An Introduction to BEM
published: true
fullview: true
categories: [development]
tags: [CSS, BEM]
description: An Introduction to the BEM methodology.
---

By now you've probably used BEM syntax on one of your projects or at least heard about others using it on theirs. BEM is a syntax for naming components with flexibility and ease of modification in mind. In my experience, (when used correctly) BEM syntax cuts down on the size of CSS files and does a great job in reducing specificity wars within the codebase. When used with other CSS best practices it can make components easier to maintain, to understand, and to develop.

## What is a component?

A component is a reusable piece of code that can be placed anywhere on a site. It should look and act the same no matter where it is placed. It can be composed of one or more blocks but should be kept as simple as possible. The term may be used interchangeably with the term block as defined below but I typically consider a component as `>=` to the size of a block.

## What is BEM?

BEM is an acronym for Block, Element, and Modifier. A **block** is an independent component within a site. An **element** is one of the smaller pieces that compose a block. A **modifier** is used to alter the appearance or behavior of a block or an element.

## BEM Example

Let's look at how I would create a button and a search component using the BEM syntax. I've put together this CodePen to show the results: [BEM Syntax Example](http://codepen.io/njessen/pen/epQXWJ).

### Button block

The first block is the `.btn` class. It allows us to create default styles for buttons. It is a component composed of itself.

The `.btn` block has 2 modifiers. They are `.btn--primary` and `.btn--secondary`. Modifiers are applied to a block when we want a slightly modified appearance...in this case the text and background color of the button. The modifiers should be placed on the element it is modifying and and the class it is modifying should also be present.

**Acceptable**

```html
<button class="btn"></button>
<button class="btn btn--primary"></button>
<button class="btn btn--secondary"></button>
```

**Unacceptable** (but may be valid depending on your own coding practices)

```html
<button class="btn--primary"></button>
<button class="btn--secondary"></button>
```

### Input block

The 2nd block we have is the input block. It is a component that is composed of itself. The block gives us the default styling for input fields and there are no modifier classes available.

```html
<input class="input" type="text">
```

### Search block

We can combine the button and input blocks to create a larger component like the search component. The search block is a component that is composed of several blocks.

The first element inside the search component is the input element. The input element is an input block combined with the contextual styles of a search input element. We give the element the `.input` class for the base styles of an input then apply a `.search__input` element class to apply styles that are specific to inputs within the search component.

The 2nd element inside the search component is the `.search__addon` element. This class is used to append an item to the end of the input. It could be any element but for the search component we've made it a button.

```html
<div class="search">
  <input class="input search__input" type="text">

  <span class="search__addon">
    <button class="btn btn--primary search__btn">Search</button>
  </span>
</div>
```

## Further Reading

Here is a list of resources that go more in-depth to help learn the BEM methodology.

- [BEM Key concepts](https://en.bem.info/methodology/key-concepts/)
- [BEM 101](https://css-tricks.com/bem-101/)
- [getbem.com/introduction](http://getbem.com/introduction/)
- [A New Front-End Methodology: BEM](https://www.smashingmagazine.com/2012/04/a-new-front-end-methodology-bem/)
- [MindBEMding - getting your head ‘round BEM syntax](https://csswizardry.com/2013/01/mindbemding-getting-your-head-round-bem-syntax/)
- [Introduction to BEM Methodology](https://www.toptal.com/css/introduction-to-bem-methodology)
