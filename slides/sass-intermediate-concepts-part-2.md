---
layout: slides
title: Sass Intermediate Concepts Part 2
slug: sass-intermediate-concepts-part-2
permalink: /slides/sass-intermediate-concepts-part-2/
---


<section>
	<h2>Sass Intermediate Concepts Part 2</h2>
	<p>An introduction to the sass maps, directives and functions</p>
</section>

<section>
	<section>
		<h2>Sass Maps</h2>
		<pre>
			<code>
				$theme: (
					background: smoke,
					color: #bada55
				);
			</code>
		</pre>
	</section>
	<section>
		<h2>Retrieving Values</h2>
		<pre>
			<code>
				$theme: (
					background: smoke,
					color: #bada55
				);
				.test {
					background: map-get($theme, background);
					color: map-get($theme, color);
				}
			</code>
		</pre>
	</section>
	<section>
		<h2>Adding Values to Map</h2>
		<pre>
			<code>
				$theme: (
					background: smoke,
					color: #bada55
				);
				$theme-font: (
					font-family: Arial;
					font-size: 20px;
				);
				map-merge($theme, $theme-font);
			</code>
		</pre>
	</section>
	<section>
		<h2>Removing Values from Map</h2>
		<pre>
			<code>
				$theme: (
					background: smoke,
					color: #bada55
					font-family: Arial;
					font-size: 20px;
				)
				map-remove($theme, font-size);
			</code>
		</pre>
	</section>
	<section>
		<h2>Looping through a map</h2>
		<pre>
			<code>
				$theme: (
					background: smoke,
					color: #bada55
					font-family: Arial;
					font-size: 20px;
				)
				map-remove($theme, font-size);
			</code>
		</pre>
	</section>
</section>

<section>
	<section>
		<h2>Directives</h2>
	</section>
	<section>
		<h2>@each</h2>
		<pre>
			<code>
				$theme: (
					background: smoke,
					color: #bada55
					font-family: Arial;
					font-size: 20px;
				)
				@each $key, $value in $theme {
					$key: $value;
				}
			</code>
		</pre>
	</section>
</section>

<section>
	<h2>Functions</h2>
	<pre>
		<code>
			@function padding-function($a, $b){
				@return $a + $b;
			}
			.module {
				padding: padding-function(10px, 5px);
			}
		</code>
	</pre>
</section>
