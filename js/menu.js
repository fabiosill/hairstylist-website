/* =====================================================
   KLEBER PINTO — menu.js
   Menu mobile + Scroll reveal
   ===================================================== */

(function () {
    // ── Mobile menu ──
    const toggle     = document.getElementById('menuToggle');
    const nav        = document.getElementById('mainNav');
    const navOverlay = document.getElementById('navOverlay');

    function closeMenu() {
        toggle.classList.remove('active');
        nav.classList.remove('open');
        navOverlay.classList.remove('active');
        toggle.setAttribute('aria-expanded', 'false');
        document.body.style.overflow = '';
    }

    toggle.addEventListener('click', () => {
        const open = nav.classList.toggle('open');
        toggle.classList.toggle('active');
        navOverlay.classList.toggle('active');
        toggle.setAttribute('aria-expanded', open);
        document.body.style.overflow = open ? 'hidden' : '';
    });

    navOverlay.addEventListener('click', closeMenu);
    nav.querySelectorAll('a').forEach(a => a.addEventListener('click', closeMenu));

    // ── Scroll reveal ──
    const els = document.querySelectorAll('.fade-in');
    const obs = new IntersectionObserver(entries => {
        entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); });
    }, { threshold: 0.12 });
    els.forEach(el => obs.observe(el));
})();
