/**
 * Header — scroll effect + mobile menu
 */
export function initHeader() {
  const header = document.getElementById('header');
  const toggle = document.getElementById('menuToggle');
  const mobileNav = document.getElementById('mobileNav');
  const spans = toggle.querySelectorAll('span');

  // Scroll effect
  const onScroll = () => {
    const scrolled = window.scrollY > 50;
    header.classList.toggle('bg-dark-800/90', scrolled);
    header.classList.toggle('backdrop-blur-xl', scrolled);
    header.classList.toggle('border-b', scrolled);
    header.classList.toggle('border-zinc-800/40', scrolled);
  };

  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  // Mobile menu toggle
  const closeMenu = () => {
    mobileNav.classList.remove('translate-x-0');
    mobileNav.classList.add('translate-x-full');
    document.body.style.overflow = '';
    spans[0].classList.remove('rotate-45', 'translate-y-[7px]');
    spans[1].classList.remove('opacity-0');
    spans[2].classList.remove('-rotate-45', '-translate-y-[7px]');
  };

  const openMenu = () => {
    mobileNav.classList.remove('translate-x-full');
    mobileNav.classList.add('translate-x-0');
    document.body.style.overflow = 'hidden';
    spans[0].classList.add('rotate-45', 'translate-y-[7px]');
    spans[1].classList.add('opacity-0');
    spans[2].classList.add('-rotate-45', '-translate-y-[7px]');
  };

  toggle.addEventListener('click', () => {
    const isHidden = mobileNav.classList.contains('translate-x-full');
    isHidden ? openMenu() : closeMenu();
  });

  // Close on mobile link click
  document.querySelectorAll('.mobile-link').forEach(link => {
    link.addEventListener('click', closeMenu);
  });
}
