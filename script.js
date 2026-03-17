 // ── Loading hide ──
        window.addEventListener('load', () => {
            document.getElementById('loading-screen').classList.add('hidden');
        });

        // ── Swiper ──
        new Swiper('.top-swiper', {
            loop: true,
            autoplay: { delay: 4500, disableOnInteraction: false },
            speed: 700,
            navigation: { nextEl: '.swiper-button-next', prevEl: '.swiper-button-prev' },
            pagination: { el: '.swiper-pagination', clickable: true },
        });

        // ── Back to top ──
        const btn = document.getElementById('backToTop');
        window.addEventListener('scroll', () => {
            btn.classList.toggle('visible', window.scrollY > 400);
        });
        btn.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));

        // ── Fade-in on scroll ──
        const observer = new IntersectionObserver(entries => {
            entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); });
        }, { threshold: 0.1 });
        document.querySelectorAll('.fade-in').forEach(el => observer.observe(el));
    
        //     <!-- Language Switcher -->
        const htmlKeys = ['intro_body','intro_links','je_body','be_body','support_txt'];

    const i18nHTML = {
        en: {
            intro_body:   'In Mini World, there are only two material packs available for purchase: the Cartoon Style pack and the Realistic pack, both priced at 1 mini bean. But having only two packs is too boring, so we ve created more material packs to enhance the game graphics.',
            intro_links:  'We can combine additional block models to decorate with graphic packages, creating a world that is either fantastical or modern, in your own unique way.<br><br>Building screenshots → <a href="" target="_blank"><strong>#PackMW</strong></a><br>Development progress → <a href="" target="_blank"><strong>#ModelPack</strong></a>',
            je_body:      'The graphics packs will be updated with more texture packs when the game is updated.<br><br>The model blocks will also be updated if we are diligent enough.',
            be_body:      'We will try to integrate more blocks and possibly add some plugins.<br><br> Thank you for supporting our texture packs!',
            support_txt:  'To help continue and maintain development, we would greatly appreciate your support 🙇‍♀️<span class="dd-memo-sign">Vazkii</span>',
        },
        vi: {
            intro_body:   'Ở trong Mini World chỉ có 2 gói có thể mua, là gói chất liệu Phong cách hoạt hình và Thực tế được bán với giá 1 đậu mini. Nhưng chỉ có 2 gói thì quá chán nên chúng tôi đã tạo thêm nhiều gói chất liệu nữa có thể làm tăng thêm mảng đồ họa của game.',
            intro_links:  'Ta có thể kết hợp thêm các mô hình khối để trang trí với đồ họa gói nên một thế giới có thể là tưởng tượng có thể là hiện đại theo cách riêng của bạn.<br><br>Ảnh xây dựng → <a href=""_blank"><strong>#PackMW</strong></a><br>Tiến độ phát triển → <a href="" target="_blank"><strong>#ModelPack</strong></a>',
            je_body:      'Các gói đồ họa sẽ được cập nhật thêm nhiều gói kết cấu khi game được cập nhật.<br><br>Những khối mô hình cũng sẽ được cập nhật nếu chúng tôi đủ<strong>"siêng năng"',
            be_body:      'Chúng tôi sẽ cố gắng tích hợp thêm nhiều khối nữa có thể sẽ add thêm một số plugin vào.<br><br> Cảm ơn mọi đã ủng hộ các gói kết cấu của chúng tôi!',
            support_txt:  'Để tiếp tục phát triển và duy trì dự án, chúng tôi rất mong nhận được sự ủng hộ của bạn 🙇‍♀️<span class="dd-memo-sign">Vazkii</span>',
        },
        ja: {
            intro_body:   '「ミニワールドでは、購入できる素材パックは「カートゥーンスタイルパック」と「リアルパック」の2種類のみで、どちらもミニビーン1個で購入できます。しかし、2種類だけでは物足りないので、ゲームのグラフィックを向上させるための素材パックをさらに追加しました。」',
            intro_links:  '追加のブロックモデルを組み合わせてグラフィックパッケージで装飾することで、あなた独自の方法で、幻想的な世界や現代的な世界を創造できます。<br><br>建築スクリーンショット → <a href="" target="_blank"><strong>#PackMW</strong></a><br>開発進捗 → <a href="" target="_blank"><strong>#ModelPack</strong></a>',
            je_body:      'ゲームがアップデートされると、グラフィックパックにはより多くのテクスチャパックが追加されます。<br><br>モデルブロックも、私たちが十分に努力すればアップデートされます。',
            be_body:      '今後、より多くのブロックを統合し、場合によってはプラグインも追加していく予定です。<br><br> テクスチャパックをご支援いただきありがとうございます！',
            support_txt:  '開発を継続・維持するため、皆様のご支援をお待ちしております 🙇‍♀️<span class="dd-memo-sign">Vazkii</span>',
        }
    };

    const i18n = {
        en: {
            nav_support: 'Support ♥',
            news_title:  'Download Now',
            news_1:      'Annahstas Beastrinia',
            news_2:      'ConquestReforge',
            news_3:      'Classic MiniWorld 2018',
            see_more:    'See more',
            intro_title: 'Graphics Package',
            play_je:     'How to install a graphics package for your computer',
            je_sub1:     '',
            play_be:     'How to install a graphics package on your phone.',
            be_sub1:     '',
            be_sub2:     '',
            support_h:   'Support the modding project',
            support_card:'Support We',
            foot_home:   'Home',
            foot_terms:  'Terms',
            foot_support:'Support',
            foot_archive:'Archive',
        },
        vi: {
            nav_support: 'Ủng hộ ♥',
            news_title:  'Tải xuống ngay',
            news_1:      'Annahstas Beastrinia',
            news_2:      'ConquestReforge',
            news_3:      'Classic MiniWorld 2018',
            see_more:    'Xem thêm',
            intro_title: 'Túi chất liệu',
            play_je:     'Cách cài gói đồ họa cho máy tính',
            je_sub1:     '',
            play_be:     'Cách cài gói đồ họa trên điện thoại',
            be_sub1:     '',
            be_sub2:     '',
            support_h:   'Ủng hộ dự án làm mod',
            support_card:'Ủng hộ chúng tôi',
            foot_home:   'Trang chủ',
            foot_terms:  'Điều khoản',
            foot_support:'Ủng hộ',
            foot_archive:'Lưu trữ',
        },
        ja: {
            nav_support: 'サポート ♥',
            news_title:  '今すぐダウンロード',
            news_1:      'Annahstas Beastrinia',
            news_2:      'ConquestReforge',
            news_3:      'Classic MiniWorld 2018',
            see_more:    'もっと見る',
            intro_title: 'グラフィックスパッケージ',
            play_je:     'お使いのコンピューターにグラフィックパッケージをインストールする方法',
            je_sub1:     '',
            play_be:     'スマートフォンにグラフィックパッケージをインストールする方法。',
            be_sub1:     '',
            be_sub2:     '',
            support_h:   'モッディングプロジェクトを支援してください。',
            support_card:'私たちをサポートしてください',
            foot_home:   'ホーム',
            foot_terms:  '利用規約',
            foot_support:'サポート',
            foot_archive:'アーカイブ',
        }
    };

    function toggleLangMenu() {
        document.getElementById('lang-menu').classList.toggle('open');
    }

    document.addEventListener('click', function(e) {
        var wrap = document.querySelector('.change-lang');
        if (wrap && !wrap.contains(e.target)) {
            document.getElementById('lang-menu').classList.remove('open');
        }
    });

    function setLang(e, lang, label) {
        document.getElementById('lang-current').textContent = label;
        document.getElementById('lang-menu').classList.remove('open');
        document.documentElement.lang = lang;

        document.querySelectorAll('.lang-option').forEach(function(el) {
            el.classList.remove('active');
        });
        e.currentTarget.classList.add('active');

        var t    = i18n[lang];
        var tHTML = i18nHTML[lang];

        document.querySelectorAll('[data-i18n]').forEach(function(el) {
            var key = el.getAttribute('data-i18n');
            if (!key) return;
            if (htmlKeys.indexOf(key) !== -1 && tHTML[key]) {
                el.innerHTML = tHTML[key];
            } else if (t[key]) {
                el.textContent = t[key];
            }
        });
    }