# TODO

## About

- Create a landing page above About Me section
- Add skip to main

## Blog

- Replace author with date posted
- Adjust media queries
- Add a loader
- Add pagination - [toastui](https://ui.toast.com/tui-pagination)

## Projects

- Add modals to cards for project details (or use [dialog](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/dialog)?)

## Nav

- Close mobile nav when clicking outside of it - [csstricks](https://css-tricks.com/click-outside-detector/)

  - Something like this

  ```js
  document.addEventListener(
    'click',
    () => {
      if (navEl.classList.contains('active')) {
        navEl.classList.remove('active')
      }
    },
    true
  )
  ```

- Change color mode icons into a slide toggle - [example 1](https://codepen.io/PaulinaSurazynska/pen/bGVpBOb) / [example 2](https://towardsdev.com/how-to-create-a-dark-light-theme-toggle-67a9316d04d2)
- Replace hamburger menu icons with animated CSS - [example 1](https://codepen.io/designcouch/pen/ExvwPY) / [example 2](https://www.sliderrevolution.com/resources/css-hamburger-menu/)

## Misc

- Create [web components](https://www.section.io/engineering-education/how-to-create-a-web-component-with-vanilla-javascript/) for header/footer/nav etc
- Write tests with [jest](https://jestjs.io/)
- Replace tooltip with a library - [tippy](https://atomiks.github.io/tippyjs/) / [popper](https://popper.js.org/)
