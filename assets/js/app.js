/**
 * App — main entry point
 */
import { initHeader } from './header.js';
import { initFaq } from './faq.js';
import { initSlider } from './slider.js';
import { initReveal } from './reveal.js';
import { initSmoothScroll } from './smooth-scroll.js';

document.addEventListener('DOMContentLoaded', () => {
  initHeader();
  initFaq();
  initSlider();
  initReveal();
  initSmoothScroll();
});
