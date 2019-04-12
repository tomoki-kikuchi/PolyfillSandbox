import * as Stickyfill from 'stickyfilljs';

document.addEventListener('DOMContentLoaded', () => {
  const stickyTarget = document.querySelector('.menu');
  Stickyfill.add(stickyTarget);
});
