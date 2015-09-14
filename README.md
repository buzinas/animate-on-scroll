# AoS.js - The simplest JS scrolling library to combine with [animate.css](https://github.com/daneden/animate.css)

Reveal CSS animation as you scroll down a page.
Combine it with [animate.css](https://github.com/daneden/animate.css) animations.

Advantages:
- Smallest and simplest library for that purpose
- You can change the settings - [see below](#advanced-usage)

## Version

1.0

### Dependencies
- [animate.css](https://github.com/daneden/animate.css)

### Basic usage

- HTML

```html
  <section class="aos" data-animation="pulse"></section>
  <span class="aos" data-animation="fadeIn"></section>
```

- JavaScript

```javascript
new AoS().init();
```

### Advanced usage

- JavaScript

```javascript
var aos = new AoS({
  useClass:     'aos',      // animated element css class (default is aos)
  offset:       0          // distance to the element when triggering the animation (default is 0)
});
aos.init();
```
