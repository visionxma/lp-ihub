/**
 * Header — scroll effect + mobile menu
 */
export function initHeader() {
  const header = document.getElementById('header');
  const toggle = document.getElementById('menuToggle');
  const mobileNav = document.getElementById('mobileNav');
  const spans = toggle.querySelectorAll('span');

  // Scroll effect
  const headerContent = header.querySelector('div');
  const onScroll = () => {
    const scrolled = window.scrollY > 50;
    if (headerContent) {
      headerContent.classList.toggle('shadow-2xl', scrolled);
      headerContent.classList.toggle('border-white/20', scrolled);
      headerContent.style.transform = scrolled ? 'scale(0.98)' : 'scale(1)';
    }
  };

  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  // Mobile menu toggle
  const closeMenu = () => {
    mobileNav.classList.remove('opacity-100', 'translate-y-0', 'pointer-events-auto');
    mobileNav.classList.add('opacity-0', '-translate-y-4', 'pointer-events-none');
    spans[0].classList.remove('rotate-45', 'translate-y-[7px]');
    spans[1].classList.remove('opacity-0');
    spans[2].classList.remove('-rotate-45', '-translate-y-[7px]');
  };

  const openMenu = () => {
    mobileNav.classList.remove('opacity-0', '-translate-y-4', 'pointer-events-none');
    mobileNav.classList.add('opacity-100', 'translate-y-0', 'pointer-events-auto');
    spans[0].classList.add('rotate-45', 'translate-y-[7px]');
    spans[1].classList.add('opacity-0');
    spans[2].classList.add('-rotate-45', '-translate-y-[7px]');
  };

  toggle.addEventListener('click', () => {
    const isHidden = mobileNav.classList.contains('pointer-events-none');
    isHidden ? openMenu() : closeMenu();
  });

  // Close on mobile link click
  document.querySelectorAll('.mobile-link').forEach(link => {
    link.addEventListener('click', closeMenu);
  });
}
