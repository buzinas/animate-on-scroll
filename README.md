# AoS - The simplest animated scrolling library
Reveal CSS animation as you scroll down a page. Combine it with [animate.css](https://github.com/daneden/animate.css) animations.

## Demo
http://buzinas.github.io/animate-on-scroll

## Benefits
- The smallest (0.4 Kb) and simplest (no configuration needed) library for that purpose

## Version
- 2.1.0

## Dependencies
- [animate.css](https://github.com/daneden/animate.css)

## Basic usage
1. Include an `aos` attribute into the tags you want to animate
2. You can set it with any of the [animate.css](http://daneden.github.io/animate.css/) available animations
3. The library will automatically reveal the animations when the element is visible
```html
<section aos="pulse"></section>
<span aos="fadeIn"></section>
```
You can set the `aos` attribute to `random`, and the library will choose a random animation for you.
```html
<div aos="random"></div>
<div aos="random"></div>
```
