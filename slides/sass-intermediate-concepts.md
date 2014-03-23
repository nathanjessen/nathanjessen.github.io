---
layout: slides
title: Sass Intermediate Concepts
slug: sass-intermediate-concepts
permalink: /slides/sass-intermediate-concepts/
---


<section>
	<h2>Sass Intermediate Concepts</h2>
	<p>An introduction to variables, parent selector, placeholders and mixins</p>
</section>

<section>
	<section>
		<h2>Variables</h2>
		<pre>
			<code>
				$green: #063;
				$green-dark: #043;

				$theme-color: $green;
				$link-color: $green;
				$link-hover-color: $green-dark;
			</code>
		</pre>
	</section>
	<section>
		<h2>!default</h2>
		<pre>
			<p>vendor/main.scss</p>
			<code>
				$theme-color: $gray !default;
			</code>
			<p>_vars.scss</p>
			<code>
				$theme-color: $green;
			</code>
			<p>site/app.scss</p>
			<code>
				@import "vars";
				@import "vendor/main";
			</code>
		</pre>
	</section>
	<section>
		<h2>!global (Sass 3.3+)</h2>
		<pre>
			<p>vendor/main.scss</p>
			<code>
				$theme-color: $gray !global;
			</code>
			<p>_vars.scss</p>
			<code>
				$theme-color: $green;
			</code>
			<p>site/app.scss</p>
			<code>
				@import "vars";
				@import "vendor/main";
			</code>
		</pre>
	</section>
</section>

<section>
	<h2>Parent Selector</h2>
	<pre>
		<code>

		</code>
	</pre>
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
