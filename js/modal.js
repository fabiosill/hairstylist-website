/* =====================================================
   KLEBER PINTO — modal.js
   Modal de Serviços — Nossos Serviços
   ===================================================== */

(function () {
    // ── Dados de cada serviço ──
    const MODAL_DATA = {
        corte: {
            img:   '/img/klebercorte3.png',
            icon:  '✂️',
            title: 'Corte de Cabelo',
            desc:  'Do clássico ao contemporâneo, nossos profissionais dominam todas as técnicas para realçar sua personalidade. Seja um degradê preciso, um corte a tesoura sofisticado ou uma navalha artesanal, cada detalhe é trabalhado com atenção total.',
            list: [
                'Corte masculino clássico e moderno',
                'Corte feminino com tesoura e navalha',
                'Degradê (máquina, baixo, médio e alto)',
                'Acabamento com navalha e detalhes',
                'Lavagem, secagem e finalização inclusos',
                'Consulta de estilo personalizada'
            ],
            tags: ['Masculino', 'Feminino', 'Degradê', 'Tesoura', 'Navalha', 'Finalização']
        },
        barba: {
            img:   '/img/kleberbarba.png',
            icon:  '🪒',
            title: 'Barba',
            desc:  'A barba perfeita é um cartão de visitas. Com técnica apurada e produtos premium, esculpimos contornos precisos que combinam com seu rosto e estilo, deixando a pele macia e a barba impecável.',
            list: [
                'Barba desenhada com navalha artesanal',
                'Aparada com máquina e acabamento perfeito',
                'Toalha quente para abertura dos poros',
                'Hidratação pós-barba com produtos premium',
                'Definição de contorno personalizado',
                'Óleo de barba e finalização profissional'
            ],
            tags: ['Navalha', 'Toalha quente', 'Desenho', 'Hidratação', 'Contorno']
        },
        quimica: {
            img:   '/img/kleberquimicas.png',
            icon:  '✨',
            title: 'Química Capilar',
            desc:  'Transforme seu cabelo com segurança e resultados duradouros. Nossa equipe é especializada em procedimentos químicos utilizando produtos de marcas internacionais, preservando a saúde e a beleza dos seus fios.',
            list: [
                'Coloração completa e retoque de raiz',
                'Mechas, luzes e balayage',
                'Alisamento e progressiva com formol zero',
                'Tonalização e gloss de cor',
                'Reconstrução capilar intensiva',
                'Avaliação e diagnóstico capilar gratuitos'
            ],
            tags: ['Coloração', 'Mechas', 'Progressiva', 'Alisamento', 'Tonalização', 'Premium']
        },
        hidratacao: {
            img:   '/img/kleberhidratacao.jpg',
            icon:  '💧',
            title: 'Hidratação',
            desc:  'Devolva vida, brilho e maciez aos seus cabelos com nosso protocolo completo de hidratação. Utilizamos máscaras profissionais de alta performance adaptadas ao seu tipo de fio, com foco em nutrição profunda e selamento das cutículas.',
            list: [
                'Diagnóstico do nível de porosidade capilar',
                'Máscara de hidratação profissional',
                'Nutrição com óleos e manteigas capilares',
                'Reconstrução das pontas danificadas',
                'Selamento de cutículas com calor controlado',
                'Brilho intenso e duradouro garantido'
            ],
            tags: ['Hidratação', 'Nutrição', 'Reconstrução', 'Brilho', 'Maciez', 'Cutícula']
        },
        sobrancelha: {
            img:   '/img/klebersobrancelha.png',
            icon:  '🪷',
            title: 'Sobrancelha',
            desc:  'A sobrancelha certa enquadra o olhar e transforma a expressão do rosto. Com técnica profissional e olho clínico, realizamos o design perfeito para o seu formato de rosto, com resultados naturais e duradouros.',
            list: [
                'Design personalizado por formato de rosto',
                'Henna para preenchimento e definição',
                'Correção de assimetrias e falhas',
                'Acabamento com pinça, linha ou cera',
                'Aplicação de produtos fixadores',
                'Orientação de cuidados em casa'
            ],
            tags: ['Design', 'Henna', 'Modelagem', 'Natural', 'Assimetria', 'Durável']
        },
        vip: {
            img:   '/img/kleberpacotevip.png',
            icon:  '👑',
            title: 'Pacote Vip',
            desc:  'A experiência mais completa do estúdio. O Pacote VIP reúne nossos melhores serviços em uma única sessão, pensada para quem quer sair totalmente renovado com o máximo de cuidado e exclusividade.',
            list: [
                'Retoque de raiz completo',
                'Abertura de mechas ou luzes',
                'Progressiva de alta performance',
                'Tonalização de mechas personalizada',
                'Hidratação intensiva profissional',
                'Corte e escova finalização premium'
            ],
            tags: ['Tudo incluído', 'Exclusivo', 'Premium', 'Transformação', 'Completo', 'VIP']
        }
    };

    // ── Referências ao DOM ──
    const modalEl  = document.getElementById('serviceModal');
    const closeBtn = document.getElementById('modalClose');

    // ── Abrir modal ──
    function openModal(key) {
        const d = MODAL_DATA[key];
        if (!d) return;

        document.getElementById('modalImg').src           = d.img;
        document.getElementById('modalImg').alt           = d.title;
        document.getElementById('modalIcon').textContent  = d.icon;
        document.getElementById('modalTitle').textContent = d.title;
        document.getElementById('modalDesc').textContent  = d.desc;
        document.getElementById('modalList').innerHTML    = d.list.map(i => `<li>${i}</li>`).join('');
        document.getElementById('modalTags').innerHTML    = d.tags.map(t => `<span class="modal-tag">${t}</span>`).join('');

        modalEl.style.display = 'flex';
        modalEl.classList.remove('closing');
        document.body.style.overflow = 'hidden';
        closeBtn.focus();
    }

    // ── Fechar modal com animação ──
    function closeModal() {
        modalEl.classList.add('closing');
        modalEl.addEventListener('animationend', () => {
            modalEl.style.display = 'none';
            modalEl.classList.remove('closing');
            document.body.style.overflow = '';
        }, { once: true });
    }

    // ── Eventos dos cards ──
    document.querySelectorAll('.card[data-modal]').forEach(card => {
        card.addEventListener('click', () => openModal(card.dataset.modal));
        card.addEventListener('keydown', e => {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                openModal(card.dataset.modal);
            }
        });
    });

    // ── Fechar: botão, clique fora, Escape ──
    closeBtn.addEventListener('click', closeModal);
    modalEl.addEventListener('click', e => { if (e.target === modalEl) closeModal(); });
    document.addEventListener('keydown', e => {
        if (e.key === 'Escape' && modalEl.style.display !== 'none') closeModal();
    });
})();
