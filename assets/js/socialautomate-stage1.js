/* Header/hero navigation only; retain the template's mobile menu handlers. */
document.addEventListener('DOMContentLoaded', function () {
  const menu = document.getElementById('sa-mobile-menu');
  const toggle = document.querySelector('.sa-header .humberger_menu_active');
  const close = menu.querySelector('.close-button');
  const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
  function syncMenu() {
    const open = menu.classList.contains('active');
    toggle.setAttribute('aria-expanded', String(open));
    menu.inert = !open;
  }
  new MutationObserver(syncMenu).observe(menu, { attributes: true, attributeFilter: ['class'] });
  syncMenu();
  toggle.addEventListener('click', function () { requestAnimationFrame(function () { close.focus(); }); });
  close.addEventListener('click', function () { toggle.focus(); });
  document.addEventListener('keydown', function (event) {
    if (!menu.classList.contains('active')) return;
    if (event.key === 'Escape') { menu.classList.remove('active'); toggle.focus(); }
    if (event.key === 'Tab') {
      const items = Array.from(menu.querySelectorAll('a, button')).filter(function (item) { return item.getClientRects().length; });
      const first = items[0], last = items[items.length - 1];
      if (event.shiftKey && document.activeElement === first) { event.preventDefault(); last.focus(); }
      else if (!event.shiftKey && document.activeElement === last) { event.preventDefault(); first.focus(); }
    }
  });
  document.querySelectorAll('.sa-header a[href^="#"], .sa-mobile-menu a[href^="#"], .sa-hero a[href^="#"]').forEach(function (link) {
    link.addEventListener('click', function (event) {
      const target = link.hasAttribute('data-sa-work') ? document.querySelector('.tmp-latest-portfolio') : document.querySelector(link.getAttribute('href'));
      if (!target) return;
      event.preventDefault();
      menu.classList.remove('active');
      if (menu.contains(link)) toggle.focus();
      window.scrollTo({ top: target.getBoundingClientRect().top + window.scrollY - document.querySelector('.sa-header').offsetHeight - 16, behavior: reducedMotion.matches ? 'instant' : 'smooth' });
    });
  });
});
