---
title: 'How to Target Specific Browsers With CSS'
date: '2021-02-18'
---

# How to target specific browsers with CSS

Web browsers are built with different rendering engines, and this causes small differences in the way your website appears between browsers. The sizing may be a little different, the colors aren't consistent, and many more things of that nature.

To counter this, we can use the following CSS to target and style specific browsers.

## Chrome & Safari (Webkit)

```css
@media screen and (-webkit-min-device-pixel-ratio: 0) {
  property: value;
}
```

## Firefox

```css
@-moz-document url-prefix() {
  .class {
    property: value;
  }
}
```

## Microsoft Edge

```css
@supports (-ms-ime-align: auto) {
  .selector {
    property: value;
  }
}
```

## IE11 and up

```css
_:-ms-fullscreen,
:root .ie11up {
  property: value;
}
```
