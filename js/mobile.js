        // Mobile menu
        const toggle = document.getElementById('menuToggle');
        const nav    = document.getElementById('mainNav');
        const overlay= document.getElementById('navOverlay');
        function closeMenu() {
            toggle.classList.remove('active');
            nav.classList.remove('open');
            overlay.classList.remove('active');
            toggle.setAttribute('aria-expanded','false');
            document.body.style.overflow = '';
        }
        toggle.addEventListener('click', () => {
            const open = nav.classList.toggle('open');
            toggle.classList.toggle('active');
            overlay.classList.toggle('active');
            toggle.setAttribute('aria-expanded', open);
            document.body.style.overflow = open ? 'hidden' : '';
        });
        overlay.addEventListener('click', closeMenu);
        nav.querySelectorAll('a').forEach(a => a.addEventListener('click', closeMenu));

        // Scroll reveal
        const els = document.querySelectorAll('.fade-in');
        const obs = new IntersectionObserver(entries => {
            entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); });
        }, { threshold: 0.12 });
        els.forEach(el => obs.observe(el));