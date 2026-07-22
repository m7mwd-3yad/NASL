/* ==========================================================================
   NASL BUSINESS COMPANY - INTERACTIVE JAVASCRIPT LOGIC
   ========================================================================== */

// --- 1. Comprehensive Service Modal Data (Extracted directly from NASL PDF) ---
const servicesData = {
    1: {
        titleAr: "أعمال الحفر والترحيل وتوريد المواد",
        titleEn: "Excavation, Soil Transport & Site Preparation",
        descAr: "تتميز شركة نسل بالقدرة العالية على تنفيذ أعمال الحفر وترحيل التربة والمواد الأخرى من المواقع بمختلف أنواعها. نوفر أحدث المعدات وآليات الحفر الثقيلة ومنها أعمال التفجير لتنفيذ البنود، بهدف الوصول إلى أعماق معينة أو تحضير الأرض للبناء والتأسيس. تشمل هذه الأعمال حفر الأساسات، القنوات، الأنفاق، وحفر تمديدات خطوط المياه والكهرباء والصرف الصحي.",
        descEn: "NASL Company is distinguished by its capability to execute excavation and soil transfer using a specialized fleet of heavy machinery and controlled blasting. Services include foundation digging, channel creation, tunneling, and utility trenching for water, electricity, and sewage lines.",
        highlightsAr: [
            "تجهيز وحفر التربة والوصول للأعماق المطلوبة",
            "أعمال التفجير الهندسي وتكسير الصخور الصلبة",
            "حفر خطوط الشبكات والقنوات والأنفاق",
            "ترحيل مخلفات الحفر ونقل المواد خارج الموقع"
        ],
        highlightsEn: [
            "Deep site excavation and soil preparation",
            "Precision blasting and rock breaking",
            "Trenching for utility networks, tunnels & channels",
            "Off-site soil and material haulage"
        ]
    },
    2: {
        titleAr: "أعمال توريد المواد الإنشائية الأساسية",
        titleEn: "Basic Construction Materials Supply",
        descAr: "تتمتع الشركة بإمكانيات ولوجستيات واسعة لتوريد كافة المواد اللازمة لتنفيذ المشاريع الإنشائية والصناعية للمواقع المحددة. يشمل ذلك توفير الرمل بمختلف أنواعه، البحص، تربة التأسيس، الأسفلت، الأسمنت، والحديد وكافة المواد الأساسية للمقاولين والمطورين وفق أعلى المواصفات الفنية والهندسية.",
        descEn: "NASL provides comprehensive raw material supply for mega construction and infrastructure projects across KSA. Materials include sand, aggregates, sub-base gravel, asphalt mixes, cement, and structural rebar.",
        highlightsAr: [
            "توريد الرمل الأبيض والأحمر والمواد الصخرية",
            "توريد البحص وحجر التأسيس (Sub-base / Base-course)",
            "توريد حديد التسليح والأسمنت المعتمد",
            "التزام تام بالمواصفات الهندسية ومواعيد التسليم"
        ],
        highlightsEn: [
            "High-grade sand and rock material supply",
            "Sub-base gravel and aggregate supply",
            "Certified steel rebar and cement supply",
            "On-time logistics adhering to project specs"
        ]
    },
    3: {
        titleAr: "أعمال الأسفلت وتخطيط ودهانات الطرق",
        titleEn: "Asphalt Works, Road Planning & Thermal Marking",
        descAr: "تنفذ شركة نسل أعمال الأسفلت وتجهيز وتركيب الطبقات على الطرق والأرصفة والمواقف لضمان سطح مستوٍ وقوي. تشمل الأعمال رش مواد MC1 و RC2، فرش الأسفلت، دكه وتسويته بالدكاكات الثقيلة لضمان التحمل وحركة المرور. كما تشمل تخطيط ودهانات الطرق بالدهانات الحرارية المعتمدة والعلامات التحذيرية.",
        descEn: "Specialized in road paving, MC1/RC2 prime coating, asphalt spreading and compaction. We execute high-visibility thermal road markings, warning signs, roundabouts, and parking lot lanes engineered for harsh environmental conditions.",
        highlightsAr: [
            "رش طبقات الأسفلت الأساسية (MC1 / RC2)",
            "فرش ودمك وتسطيح طبقـات الأسفلت بدقة",
            "تخطيط الطرق بالدهانات الحرارية المقاومة للطقس",
            "رسم خطوط سير المدارات والمواقف والعلامات"
        ],
        highlightsEn: [
            "MC1 & RC2 prime and tack coat spraying",
            "High-density asphalt laying & roller compaction",
            "Weather-resistant thermal road striping",
            "Traffic lane design, roundabouts & safety markings"
        ]
    },
    4: {
        titleAr: "قسم إنتاج المواد الأولية - كسارة الأحجار",
        titleEn: "Raw Materials Production - Stone Crusher Unit",
        descAr: "تضم شركتنا وحدة متخصصة في تكسير الأحجار وإنتاج المواد الأولية المستخدمة في مشاريع البناء والتشييد مثل البحص، الرمل، والمواد الصخرية بأنواعها. تتميز الكسارة باستخدام أحدث المعدات والتقنيات الحديثة لضمان جودة الإنتاج وفقاً للمواصفات المعمارية والهندسية وبكميات تلبي كبرى المشاريع.",
        descEn: "NASL operates an industrial stone crusher unit producing premium aggregates, crushed stone, and specialized sand grades. Equipped with high-capacity crushing machinery to continuously supply mega infrastructure projects.",
        highlightsAr: [
            "تكسير الأحجار وإنتاج البحص بمختلف مقاساته",
            "إنتاج الرمل والمواد الصخرية المعالجة",
            "معدات حديثة تضمن الطاقة الإنتاجية العالية",
            "مراعاة أعلى معايير السلامة والبيئة"
        ],
        highlightsEn: [
            "Crushing stone into multi-grade aggregates",
            "High-volume sand & processed rock production",
            "Advanced machinery ensuring continuous supply",
            "Strict adherence to environmental safety"
        ]
    },
    5: {
        titleAr: "أعمال البنية التحتية والشبكات",
        titleEn: "Infrastructure, Water & Sewage Networks",
        descAr: "قدرة عالية على تنفيذ مشاريع البنية التحتية الحيوية التي تشمل إنشاء وتطوير شبكات المياه، الصرف الصحي، الكهرباء، والاتصالات. نفذت الشركة مد خطوط الأنابيب بمختلف أنواعها (GRP, HDPE, PVC, DI) بالإضافة إلى أعمال السدود، إصلاح الخطوط، وبناء غرف التفتيش والخزانات لتعزيز النمو العمراني.",
        descEn: "Full-scale utility network installations including GRP, HDPE, PVC, and Ductile Iron (DI) pipelines for water, sewage, electricity, and telecommunications, alongside dam construction, inspection chambers, and underground storage tanks.",
        highlightsAr: [
            "مد خطوط الأنابيب (GRP, HDPE, PVC, DI)",
            "تنفيذ شبكات المياه والصرف الصحي الرئيسية",
            "إنشاء السدود الخرسانية وغرف التفتيش والتوزيع",
            "تمديد شبكات الكهرباء والاتصالات الأرضية"
        ],
        highlightsEn: [
            "Laying GRP, HDPE, PVC & DI main pipelines",
            "Primary water supply and sewage networks",
            "Dam construction, manholes & distribution chambers",
            "Underground power and telecom grid extensions"
        ]
    },
    6: {
        titleAr: "أعمال الهاردسكيب والاندسكيب",
        titleEn: "Hardscape & Landscape Engineering",
        descAr: "تصميم وتنفيذ كافة العناصر غير النباتية والجمالية للمساحات الخارجية مثل الأرصفة، الأسطح، الجدران الاستنادية، والبرك المائية، بالإضافة إلى تنسيق وتخضير الحدائق والساحات العامة لتعزيز الشكل الجمالي والوظيفي للمواقع.",
        descEn: "Comprehensive external site development including retaining walls, pedestrian walkways, decorative paving, water features, and landscape greening for commercial, public, and residential complexes.",
        highlightsAr: [
            "تنفيذ الأرصفة والممرات والمساحات الخارجية",
            "إنشاء الجدران الاستنادية والبرك المائية",
            "تنسيق الحدائق العامة والمنتزهات والساحات",
            "دمج التصاميم الجمالية بالوظائف المعمارية"
        ],
        highlightsEn: [
            "Exterior paving, walkways & plazas",
            "Structural retaining walls & water ponds",
            "Public park landscaping & green spaces",
            "Aesthetic & functional outdoor space design"
        ]
    },
    7: {
        titleAr: "أعمال الخرسانات المسلحة",
        titleEn: "Reinforced Concrete & Structural Works",
        descAr: "تنفيذ أعمال الخرسانات الإنشائية كالأساسات، الجدران، الأسطح، والأعمدة باستخدام عمالة ماهرة في الحدادة والنجارة والصب، وبتطبيق كافة أنواع الشدات الإنشائية الحديثة لضمان المتانة والقوة الإنشائية المطلوبة.",
        descEn: "Structural concrete construction including deep foundations, elevated slabs, retaining columns, and shear walls executed by certified carpenters and steel fixers utilizing modern formwork systems.",
        highlightsAr: [
            "صب القواعد والأساسات الخرسانية المسلحة",
            "إنشاء الأعمدة والجدران والأسطح الإنشائية",
            "أعمال الحدادة المسلحة والنجارة المتقدمة",
            "استخدام أحدث أنظمة الشدات الخرسانية"
        ],
        highlightsEn: [
            "Reinforced concrete foundation casting",
            "Columns, beams, slabs & structural walls",
            "Expert rebar fixing and formwork carpentry",
            "Advanced shuttering & high-strength concrete"
        ]
    },
    8: {
        titleAr: "أعمال الهياكل المعدنية والمستودعات",
        titleEn: "Steel Structures & Industrial Sheds",
        descAr: "تصميم وتصنيع وتنفيذ الهياكل المعدنية والحديدية كالأعمدة، الإطارات، الأسطح، والجسور للمنشآت الصناعية والتجارية، لضمان القوة والمتانة العالية مع مرونة التصميم والوزن الخفيف.",
        descEn: "Designing, fabricating, and erecting pre-engineered and heavy structural steel systems for warehouses, industrial plants, commercial hangars, and shaded structures.",
        highlightsAr: [
            "تصميم وتشييد الهياكل والمستودعات الحديدية",
            "تركيب الجسور والإطارات والمظلات المعدنية",
            "تنفيذ المباني الصناعية والتجارية الخفيفة والثقيلة",
            "ضمان المتانة والدقة الهندسية في التجميع"
        ],
        highlightsEn: [
            "Pre-engineered steel warehouse construction",
            "Fabrication of metal frames, trusses & sheds",
            "Industrial plant and commercial hangar erection",
            "High structural endurance and precise fitting"
        ]
    },
    9: {
        titleAr: "أعمال التشطيبات والديكورات",
        titleEn: "Fit-Out & Interior/Exterior Finishing",
        descAr: "تنفيذ التشطيبات الداخلية والخارجية للمباني السكنية والتجارية والمشاريع العامة. تشمل أعمال الدهانات، الجبس، السيراميك، الواجهات الخارجية، والإضاءات باستخدام أرقى التقنيات والكوادر الفنية الماهرة.",
        descEn: "Turnkey fit-out solutions for residential towers, commercial offices, and public facilities encompassing fine plastering, specialized painting, gypsum ceilings, tile installation, exterior facade cladding, and lighting.",
        highlightsAr: [
            "الدهانات الداخلية والخارجية الديكورية",
            "تركيب الجبس بورد والديكورات السقفية",
            "أعمال السيراميك والرخام والأرضيات",
            "تشطيب الواجهات الخارجية والتركيبات الكهربائية"
        ],
        highlightsEn: [
            "Interior & exterior architectural painting",
            "Gypsum board ceilings and wall accents",
            "Ceramic, marble & epoxy flooring installation",
            "Exterior facade cladding & electrical fit-out"
        ]
    },
    10: {
        titleAr: "أعمال العزل وتقنيات البولي يوريا",
        titleEn: "Waterproofing & Polyurea Technology",
        descAr: "حلول عزل متطورة في مجال العزل المائي والحراري باستخدام أحدث تقنيات البولي يوريا العالمية ذات الفعالية العالية والمقاومة الفائقة للعوامل الجوية. تشمل عزل الأسطح، الخزانات، الأساسات، والأنفاق لضمان الأداء المثالي وطول العمر الافتراضي.",
        descEn: "State-of-the-art waterproofing utilizing advanced polyurea spray coatings. Known for instant curing, extreme weather resistance, and seamless protection for roofs, water tanks, foundations, and underground tunnels.",
        highlightsAr: [
            "رش مادة البولي يوريا المتقدمة عالي السرعة",
            "عزل الأسطح والخزانات والأساسات والأنفاق",
            "مقاومة ممتازة للعوامل الجوية والتآكل الكيميائي",
            "ضمان طول العمر الافتراضي والأداء الهيدروليكي"
        ],
        highlightsEn: [
            "Fast-curing polyurea spray technology",
            "Waterproofing for roofs, reservoirs & tunnels",
            "High resistance to UV, chemicals & weathering",
            "Long-term structural protection guarantee"
        ]
    }
};

// --- 2. Interactive Service Modal Controls ---
function openServiceModal(serviceId) {
    const service = servicesData[serviceId];
    if (!service) return;

    const isEn = document.body.classList.contains('lang-en');
    const modalBody = document.getElementById('modalBody');
    const modal = document.getElementById('serviceModal');

    const title = isEn ? service.titleEn : service.titleAr;
    const desc = isEn ? service.descEn : service.descAr;
    const highlights = isEn ? service.highlightsEn : service.highlightsAr;

    let highlightsHtml = highlights.map(item => `
        <li style="display: flex; align-items: center; gap: 0.6rem; margin-bottom: 0.5rem; font-size: 0.95rem; color: #cbd5e1;">
            <i class="fa-solid fa-check" style="color: var(--accent-gold);"></i> ${item}
        </li>
    `).join('');

    modalBody.innerHTML = `
        <div style="display: inline-block; padding: 0.35rem 1rem; background: rgba(217, 155, 38, 0.15); border: 1px solid var(--border-gold); color: var(--accent-gold); border-radius: 9999px; font-size: 0.8rem; font-weight: 700; margin-bottom: 1rem;">
            ${isEn ? 'NASL Specialized Sector' : 'قطاع متخصص في نسل الأعمال'}
        </div>
        <h2 style="font-size: 1.8rem; font-weight: 800; color: #ffffff; margin-bottom: 1rem; line-height: 1.3;">${title}</h2>
        <p style="font-size: 1rem; color: var(--text-secondary); line-height: 1.8; margin-bottom: 1.5rem;">${desc}</p>
        
        <h4 style="font-size: 1.1rem; font-weight: 800; color: var(--accent-gold); margin-bottom: 0.85rem;">
            ${isEn ? 'Key Capabilities & Technical Highlights:' : 'أبرز المقومات والمهام الفنية:'}
        </h4>
        <ul style="list-style: none; margin-bottom: 2rem;">
            ${highlightsHtml}
        </ul>

        <div style="display: flex; gap: 1rem;">
            <a href="#contact" onclick="closeServiceModal()" class="btn btn-gold btn-block">
                <i class="fa-solid fa-file-signature"></i> <span>${isEn ? 'Request Sector Quotation' : 'طلب تسعير لهذا القطاع'}</span>
            </a>
        </div>
    `;

    modal.classList.add('active');
}

function closeServiceModal() {
    document.getElementById('serviceModal').classList.remove('active');
}

// Close modal when clicking on backdrop
document.getElementById('serviceModal').addEventListener('click', function(e) {
    if (e.target === this) {
        closeServiceModal();
    }
});

// --- 3. Project Filter Logic ---
document.addEventListener('DOMContentLoaded', () => {
    const filterBtns = document.querySelectorAll('.filter-btn');
    const projectCards = document.querySelectorAll('.project-card');

    filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            filterBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');

            const filter = btn.getAttribute('data-filter');

            projectCards.forEach(card => {
                if (filter === 'all' || card.getAttribute('data-category') === filter) {
                    card.style.display = 'flex';
                    card.style.animation = 'fadeIn 0.4s ease forwards';
                } else {
                    card.style.display = 'none';
                }
            });
        });
    });
});

// --- 4. Language Switcher (Arabic / English) ---
const langToggleBtn = document.getElementById('langToggle');
const langText = document.getElementById('langText');

langToggleBtn.addEventListener('click', () => {
    const isEn = document.body.classList.contains('lang-en');
    
    if (isEn) {
        // Switch to Arabic
        document.body.classList.remove('lang-en');
        document.documentElement.setAttribute('lang', 'ar');
        document.documentElement.setAttribute('dir', 'rtl');
        langText.textContent = 'English';
    } else {
        // Switch to English
        document.body.classList.add('lang-en');
        document.documentElement.setAttribute('lang', 'en');
        document.documentElement.setAttribute('dir', 'ltr');
        langText.textContent = 'العربية';
    }

    // Toggle Translatable Text Elements
    const translatable = document.querySelectorAll('[data-ar][data-en]');
    translatable.forEach(el => {
        if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') return;
        el.textContent = !isEn ? el.getAttribute('data-en') : el.getAttribute('data-ar');
    });
});

// --- 5. Mobile Menu Navigation ---
const mobileToggle = document.getElementById('mobileToggle');
const mainNav = document.getElementById('mainNav');

mobileToggle.addEventListener('click', () => {
    mainNav.classList.toggle('mobile-active');
});

// Close nav when link clicked
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
        mainNav.classList.remove('mobile-active');
    });
});

// --- 6. Sticky Header Scroll Behavior & Active Link Highlight ---
window.addEventListener('scroll', () => {
    const header = document.getElementById('header');
    if (window.scrollY > 50) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }

    // Highlight active section nav link
    const sections = document.querySelectorAll('section[id]');
    const scrollY = window.pageYOffset;

    sections.forEach(current => {
        const sectionHeight = current.offsetHeight;
        const sectionTop = current.offsetTop - 120;
        const sectionId = current.getAttribute('id');
        const navLink = document.querySelector(`.main-nav a[href*=${sectionId}]`);

        if (navLink) {
            if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
                document.querySelectorAll('.nav-link').forEach(l => l.classList.remove('active'));
                navLink.classList.add('active');
            }
        }
    });
});

// --- 7. WhatsApp Form Handler ---
function handleFormSubmit(event) {
    event.preventDefault();

    const name = document.getElementById('clientName').value;
    const phone = document.getElementById('clientPhone').value;
    const service = document.getElementById('serviceType').value;
    const details = document.getElementById('projectDetails').value;

    const message = `مرحباً شركة نسل الأعمال للتجارة والمقاولات 👋🏼
أود تقديم طلب عرض سعر / استشارة هندسية:
• الاسم: ${name}
• الجوال: ${phone}
• الخدمة المطلوبة: ${service}
• تفاصيل المشروع: ${details}`;

    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/966559608789?text=${encodedMessage}`;

    window.open(whatsappUrl, '_blank');
}
