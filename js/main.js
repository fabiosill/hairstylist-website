   // =========================================
    // MENU MOBILE
    // =========================================

    const toggle = document.getElementById('menuToggle');
    const nav = document.getElementById('mainNav');
    const navOverlay = document.getElementById('navOverlay');

    function closeMenu() {

        if (toggle) {
            toggle.classList.remove('active');
            toggle.setAttribute('aria-expanded', 'false');
        }

        if (nav) {
            nav.classList.remove('open');
        }

        if (navOverlay) {
            navOverlay.classList.remove('active');
        }

        document.body.style.overflow = '';
    }

    if (toggle) {

        toggle.addEventListener('click', () => {

            const open = nav.classList.toggle('open');

            toggle.classList.toggle('active');

            if (navOverlay) {
                navOverlay.classList.toggle('active');
            }

            toggle.setAttribute('aria-expanded', open);

            document.body.style.overflow = open ? 'hidden' : '';

        });

    }

    if (navOverlay) {
        navOverlay.addEventListener('click', closeMenu);
    }

    if (nav) {

        nav.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', closeMenu);
        });

    }

    // =========================================
    // SCROLL ANIMATION
    // =========================================

    const fadeElements = document.querySelectorAll('.fade-in');

    const observer = new IntersectionObserver(entries => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }

        });

    }, {
        threshold: 0.12
    });

    fadeElements.forEach(el => observer.observe(el));

    // =========================================
    // MODAL DE SERVIÇOS
    // =========================================

    document.addEventListener('DOMContentLoaded', () => {

const MODAL_DATA = {

    corte: {
        img: 'img/klebercorte3.png',
        title: 'Corte de Cabelo',
        desc: 'Do clássico ao moderno, nossos cortes são realizados com técnicas profissionais para valorizar seu estilo, formato de rosto e personalidade. Trabalhamos com degradê, tesoura, navalha e acabamentos detalhados, proporcionando um visual sofisticado, moderno e alinhado em cada atendimento.',
        tags: [
            'Masculino',
            'Feminino',
            'Degradê',
            'Tesoura',
            'Navalha'
        ]
    },

    barba: {
        img: 'img/kleberbarba.png',
        title: 'Barba',
        desc: 'Modelagem e acabamento profissional para uma barba alinhada, elegante e bem definida. Utilizamos técnicas precisas de contorno, toalha quente, navalha e hidratação para proporcionar uma experiência premium com conforto, estilo e máxima atenção aos detalhes.',
        tags: [
            'Navalha',
            'Contorno',
            'Toalha quente',
            'Hidratação'
        ]
    },

    quimica: {
        img: 'img/kleberquimicas.png',
        title: 'Química Capilar',
        desc: 'Procedimentos químicos realizados com segurança, tecnologia e produtos premium de alta qualidade. Trabalhamos com coloração, mechas, progressiva, tonalização e transformação capilar, sempre preservando a saúde dos fios e garantindo resultados modernos e duradouros.',
        tags: [
            'Coloração',
            'Mechas',
            'Progressiva',
            'Premium'
        ]
    },

    hidratacao: {
        img: 'img/kleberhidratacao.jpg',
        title: 'Hidratação',
        desc: 'Tratamento intensivo desenvolvido para recuperar brilho, maciez e saúde dos fios. Utilizamos produtos profissionais que nutrem profundamente o cabelo, combatem o ressecamento e restauram a vitalidade, deixando os fios mais leves, sedosos e com aparência saudável.',
        tags: [
            'Nutrição',
            'Reconstrução',
            'Brilho',
            'Maciez'
        ]
    },

    sobrancelha: {
        img: 'img/klebersobrancelha.png',
        title: 'Sobrancelha',
        desc: 'Design profissional de sobrancelhas realizado de forma personalizada para harmonizar o rosto e valorizar o olhar. Trabalhamos com técnicas modernas de modelagem e acabamento natural, garantindo definição, equilíbrio e um resultado elegante e sofisticado.',
        tags: [
            'Design',
            'Henna',
            'Natural',
            'Modelagem'
        ]
    },

    vip: {
        img: 'img/kleberpacotevip.png',
        title: 'Pacote VIP',
        desc: 'Uma experiência completa e exclusiva reunindo os principais serviços do estúdio em um único atendimento premium. O pacote combina cuidados capilares, transformação visual, hidratação e finalização profissional para proporcionar um resultado impecável, sofisticado e de alto padrão.',
        tags: [
            'Premium',
            'VIP',
            'Exclusivo',
            'Completo'
        ]
    }

};

        const modalEl = document.getElementById('serviceModal');
        const closeBtn = document.getElementById('modalClose');

        function openModal(key) {

            const data = MODAL_DATA[key];

            if (!data) return;

            const modalImg = document.getElementById('modalImg');
            const modalTitle = document.getElementById('modalTitle');
            const modalDesc = document.getElementById('modalDesc');
            const modalTags = document.getElementById('modalTags');

            if (modalImg) {
                modalImg.src = data.img;
                modalImg.alt = data.title;
            }

            if (modalTitle) {
                modalTitle.textContent = data.title;
            }

            if (modalDesc) {
                modalDesc.textContent = data.desc;
            }

            if (modalTags) {

                modalTags.innerHTML = data.tags.map(tag => `
                    <span class="modal-tag">${tag}</span>
                `).join('');

            }

            if (modalEl) {
                modalEl.style.display = 'flex';
            }

            document.body.style.overflow = 'hidden';
        }

        function closeModal() {

            if (modalEl) {
                modalEl.style.display = 'none';
            }

            document.body.style.overflow = '';
        }

        document.querySelectorAll('.card[data-modal]').forEach(card => {

            card.addEventListener('click', () => {

                openModal(card.dataset.modal);

            });

            card.addEventListener('keydown', event => {

                if (
                    event.key === 'Enter' ||
                    event.key === ' '
                ) {

                    event.preventDefault();

                    openModal(card.dataset.modal);

                }

            });

        });

        if (closeBtn) {

            closeBtn.addEventListener('click', closeModal);

        }

        if (modalEl) {

            modalEl.addEventListener('click', event => {

                if (event.target === modalEl) {

                    closeModal();

                }

            });

        }

        document.addEventListener('keydown', event => {

            if (
                event.key === 'Escape' &&
                modalEl &&
                modalEl.style.display === 'flex'
            ) {

                closeModal();

            }

        });

    });