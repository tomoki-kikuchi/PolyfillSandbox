import UAParser from 'ua-parser-js';
import * as Stickyfill from 'stickyfilljs';

const parser = new UAParser();
const isIe = parser.getBrowser().name === 'IE';

document.addEventListener('DOMContentLoaded', () => {
  if (isIe) {
    console.log('IEだよ');
    const stickyTarget = document.querySelector('.menu');
    Stickyfill.add(stickyTarget);
  }
});
