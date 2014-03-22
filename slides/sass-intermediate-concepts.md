---
layout: slides
title: Sass Intermediate Concepts
slug: sass-intermediate-concepts
permalink: /slides/sass-intermediate-concepts/
---


<section>
	<h2>Sass Intermediate Concepts</h2>
	<p>An introduction to placeholders and mixins</p>
</section>

<section>
	<h2>Placeholders</h2>
	<pre>
		<code>
			%center {
				margin-left: auto;
				margin-right: auto;
			}
		</code>
	</pre>
</section>

<section>
	<h2>Mixins</h2>
	<pre>
		<code>
			@mixin font-family($font-family: "Helvetica") {
				font-family: $font-family, arial;
			}
		</code>
	</pre>
</section>
