---
layout: slides
title: Sass Intermediate Concepts Part 2
slug: sass-intermediate-concepts-part-2
permalink: /slides/sass-intermediate-concepts-part-2/
---


<section>
	<h2>Sass Intermediate Concepts Part 2</h2>
	<p>An introduction to sass maps, directives and functions</p>
</section>

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
	<h2>Directives</h2>
	<pre>
		<code>
			$theme: (
				background: smoke,
				color: #bada55
			);
			@each $key, $value in $theme {
				$key: $value;
			}
		</code>
	</pre>
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
