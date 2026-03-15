/**
 * Carousel — Safirion-style 3-card carousel
 * Reusable for multiple carousels on the page
 */

function createCarousel(carouselId, prevId, nextId) {
  const carousel = document.getElementById(carouselId);
  const prev = document.getElementById(prevId);
  const next = document.getElementById(nextId);

  if (!carousel || !prev || !next) return;

  const slides = Array.from(carousel.querySelectorAll('.testimonial-slide'));
  const total = slides.length;
  let current = 1;

  function update() {
    const leftIdx = ((current - 1) % total + total) % total;
    const rightIdx = (current + 1) % total;

    slides.forEach((slide, i) => {
      slide.classList.remove('is-center', 'is-left', 'is-right');

      if (i === current) {
        slide.classList.add('is-center');
      } else if (i === leftIdx) {
        slide.classList.add('is-left');
      } else if (i === rightIdx) {
        slide.classList.add('is-right');
      }
    });
  }

  function goNext() {
    current = (current + 1) % total;
    update();
  }

  function goPrev() {
    current = ((current - 1) % total + total) % total;
    update();
  }

  next.addEventListener('click', goNext);
  prev.addEventListener('click', goPrev);

  let autoplay = setInterval(goNext, 5000);
  [prev, next].forEach(btn => {
    btn.addEventListener('click', () => {
      clearInterval(autoplay);
      autoplay = setInterval(goNext, 5000);
    });
  });

  update();
}

export function initSlider() {
  createCarousel('testimonialCarousel', 'prevSlide', 'nextSlide');
  createCarousel('socialCarousel', 'prevSocial', 'nextSocial');
}
