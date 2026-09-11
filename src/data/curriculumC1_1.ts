import { Lesson } from '../types';

export const CURRICULUM_C1_1: Lesson[] = [
  {
    id: 'c1_1_lek1',
    lektionNumber: 1,
    level: 'C1.1',
    title: 'Wissenschaftsdiskurs und Gesellschaftswandel',
    subTitle: 'Akademische Texte, FAZ-Feuilleton und erweiterte Partizipialattribute (C1 Niveau)',
    topic: 'Klimaethik, wissenschaftliche Methodik und syntaktische Verdichtung',
    fotoHoergeschichte: {
      title: 'Foto-Hörgeschichte: Symposium an der Humboldt-Universität zu Berlin',
      imagePrompt: 'A historic grand lecture hall at Humboldt University Berlin where scholars from various disciplines attend an interdisciplinary colloquium.',
      imageTheme: 'Wissenschaftskolloquium in Berlin',
      audioDuration: '03:45',
      transcript: [
        { speaker: 'Prof. Dr. von Weizsäcker', text: 'Die von der Forschungsgruppe vorgelegten Befunde belegen unmissverständlich, dass die bisherigen Annahmen über klimatische Kipppunkte revidiert werden müssen.' },
        { speaker: 'Dr. Al-Mansoor', text: 'In Anbetracht der methodischen Validität der herangezogenen empirischen Daten stimme ich dieser Einschätzung vollumfänglich zu.' },
        { speaker: 'Prof. Dr. von Weizsäcker', text: 'Entscheidend ist nun, welche transformativen Maßnahmen von der politischen Administration abgeleitet werden.' }
      ],
      summary: {
        en: 'Scholars at Humboldt University Berlin debate empirical climatological methodologies and systemic transformation strategies.',
        fa: 'اساتید و پژوهشگران دانشگاه هومبولت برلین روش‌شناسی‌های تجربی اقلیم‌شناسی و راهبردهای تحول ساختاری را به بحث گذاشته‌اند.',
        prs: 'پوهان و محققان پوهنتون هومبولت برلین روش‌های علمی اقلیم‌شناسی و تغییرات اساسی جامعه را به تحلیل گرفته‌اند.',
        tr: 'Humboldt Üniversitesi\'ndeki bilim insanları ampirik iklim metodolojilerini ve sistemsel dönüşüm adımlarını tartışıyor.',
        ar: 'يناقش باحثون في جامعة هومبولت في برلين المنهجيات المناخية التجريبية واستراتيجيات التحول المجتمعي.',
        es: 'Científicos en la Universidad Humboldt de Berlín debaten sobre metodologías empíricas y estrategias de transformación sistémica.'
      }
    },
    sectionA: {
      title: 'Mussawi A: Sprechen & Dialog',
      focus: 'Sprechen & Hören (Akademische Vorträge & Disputationen)',
      description: {
        en: 'Articulate complex hypotheses, refute opposing empirical theories, and engage in high-level intellectual debate.',
        fa: 'بیان فرضیه‌های پیچیده علمی، رد نظریه‌های تجربی مخالف و مشارکت در مناظرات فکری سطح بالا.',
        prs: 'فرضیه‌های پیچیده علمی را مطرح کرده و در مباحثات علمی دانشگاهی سهم بگیرید.',
        tr: 'Karmaşık bilimsel hipotezleri savunun, karşıt ampirik tezleri çürütün ve yüksek düzeyli entelektüel münazaralara katılın.',
        ar: 'صياغة الفرضيات العلمية المعقدة، ودحض النظريات التجريبية المضادة، والمشاركة في سجالات فكرية رفيعة المستوى.',
        es: 'Formula hipótesis científicas complejas, rebate teorías empíricas opuestas y participa en debates intelectuales de alto nivel.'
      },
      content: 'Es steht außer Frage, dass die zugrunde gelegten Prämissen einer methodenkritischen Überprüfung bedürfen.',
      audioText: 'In Anbetracht der aktuellen Forschungslage lässt sich die Hypothese nicht länger aufrechterhalten.',
      practiceTasks: [
        'Halten Sie einen fünfminütigen wissenschaftlichen Impulsvortrag zu einem aktuellen Forschungsthema.',
        'Nutzen Sie differenzierte Redemittel wie "Dies lässt den Schluss zu, dass...", "Hieran anknüpfend...".'
      ]
    },
    sectionB: {
      title: 'Mussawi B: Wortschatz & Hören',
      focus: 'Hören & Wortschatz (Wissenschaftliche Interviews & Radiobeiträge)',
      description: {
        en: 'Comprehend nuanced radio interviews on Deutschlandfunk concerning philosophy of science and epistemology.',
        fa: 'درک مصاحبه‌های رادیویی عمیق شبکه دویچلندفونک در باب فلسفه علم و معرفت‌شناسی.',
        prs: 'فهم مصاحبه‌های تخصصی رادیویی علمی در مورد فلسفه علم و شناخت.',
        tr: 'Deutschlandfunk\'taki bilim felsefesi ve epistemoloji üzerine derinlikli radyo mülakatlarını kavrayın.',
        ar: 'فهم المقابلات الإذاعية المتعمقة عبر إذاعة دويتشلاندفونك حول فلسفة العلوم ونظرية المعرفة.',
        es: 'Comprende entrevistas radiofónicas de Deutschlandfunk sobre filosofía de la ciencia y epistemología.'
      },
      content: 'Das Spannungsverhältnis zwischen technologischem Determinismus und anthropologischer Handlungsautonomie.',
      practiceTasks: [
        'Dekodieren Sie implizite Haltungen und ironische Nuancen im Radio-Feature.',
        'Analysieren Sie Nomen-Verb-Verbindungen wie "zur Disposition stellen", "in Betracht ziehen".'
      ]
    },
    sectionC: {
      title: 'Mussawi C: Alltagskommunikation',
      focus: 'Sprechen & Dialoge (Wissenschaftliche Kolloquien & Moderation)',
      description: {
        en: 'Moderate academic panel sessions, synthesize contradictory viewpoints, and formulate overarching conclusions.',
        fa: 'مدیریت نشست‌های هم‌اندیشی دانشگاهی، ترکیب دیدگاه‌های متناقض و استنتاج جمع‌بندی‌های جامع.',
        prs: 'مدیریت سیمینارهای علمی، هماهنگی دیدگاه‌های مختلف و نتیجه‌گیری کلی.',
        tr: 'Akademik oturumları yönetin, çelişkili görüşleri sentezleyin ve kapsamlı sonuçlar çıkarın.',
        ar: 'إدارة الجلسات الحوارية الأكاديمية، والجمع بين وجهات النظر المتناقضة، وصياغة استنتاجات شاملة.',
        es: 'Modera paneles académicos, sintetiza opiniones contrapuestas y formula conclusiones globales.'
      },
      content: 'Darf ich die Diskussion dahingehend zusammenfassen, dass Einigkeit hinsichtlich der Dringlichkeit besteht?',
      audioText: 'Lassen Sie uns nun die methodischen Einwände der Kollegin im Detail erörtern.',
      practiceTasks: [
        'Moderieren Sie eine simulierte Diskussionsrunde über Bioethik und Gentechnik.',
        'Strukturieren Sie Beiträge durch metakommunikative Überleitungen.'
      ]
    },
    sectionD: {
      title: 'Mussawi D: Leseverstehen & Text',
      focus: 'Lesen & Textanalyse (FAZ-Feuilleton & Wissenschaftsessays)',
      description: {
        en: 'Deconstruct a sophisticated essay from the Frankfurter Allgemeine Zeitung (FAZ) regarding public sphere transformation.',
        fa: 'تحلیل موشکافانه مقاله‌ای عمیق از بخش اندیشه روزنامه معتبر فرانکفورتر آلگماینه درباره تحول دیجیتال حوزه عمومی.',
        prs: 'تحلیل مقاله مسلکی روزنامه مشهور FAZ درباره تاثیر انترنت بر جامعه و دموکراسی.',
        tr: 'Frankfurter Allgemeine Zeitung (FAZ) kültür sayfasındaki kamusal alanın dijitalleşmesi makalesini çözümleyin.',
        ar: 'تحليل مقال فكري معمق من صحيفة فرانكفورتر ألغماينه حول التحولات الرقمية للفضاء العام.',
        es: 'Analiza un ensayo de la sección cultural de FAZ sobre la esfera pública digital.'
      },
      content: 'Feuilletonistischer Essay über Habermas und die deliberative Demokratie im Netzzeitalter.',
      readingText: {
        type: 'Feuilleton der Frankfurter Allgemeinen Zeitung (FAZ)',
        title: 'Die Fragmentierung der Öffentlichkeit: Deliberation im Zeitalter der Algorithmen',
        body: 'Die vordem von klassischen Leitmedien strukturierte öffentliche Meinungsbildung weicht zunehmend einer von intransparenten Feedbackschleifen gesteuerten Partikularisierung. Wo einst der zwanglose Zwang des besseren Arguments galt, dominieren heute affektgeladene Aufmerksamkeitsökonomien.'
      },
      practiceTasks: [
        'Erörtern Sie den Begriff "affektgeladene Aufmerksamkeitsökonomien" im Kontext des Textes.',
        'Verfassen Sie einen kritischen Kommentar zur Relevanz der Diskurstheorie für Online-Plattformen.'
      ]
    },
    sectionE: {
      title: 'Mussawi E: Grammatik & Schreiben',
      focus: 'Grammatik & Schreiben (Erweiterte Partizipialattribute)',
      description: {
        en: 'Transform complex relative clauses into dense participial attributes placed between article and noun.',
        fa: 'تبدیل جملات موصولی فرعی به صفات فاعلی و مفعولی گسترش‌یافته واقع در بین آرتیکل و اسم.',
        prs: 'تبدیل جملات نسبتی فرعی به صفات مفعولی و فاعلی پربار مابین آرتیکل و اسم.',
        tr: 'İlgi cümlelerini isim ve artikeli arasına yerleşen zengin ortaç öbeklerine dönüştürün.',
        ar: 'تحويل الجمل الموصولة المعقدة إلى صفات اسمية ممتدة موضوعة بين أداة التعريف والاسم.',
        es: 'Transforma subordinadas de relativo en atributos participiales densos entre artículo y sustantivo.'
      },
      content: 'Partizipialattribut: Artikel + [Erweiterung + Partizip I / II (dekliniert)] + Nomen.',
      grammarRule: {
        id: 'c1_1_partizip_rule',
        level: 'C1.1',
        germanTitle: 'Erweiterte Partizipialattribute (Verdichtung von Relativsätzen)',
        formula: 'Artikel + [Erweiterung / Adverbiale Bestimmung + Partizip I/II (dekliniert)] + Nomen',
        explanation: {
          en: 'Compress relative clauses into attributive participial constructions situated between the definite/indefinite article and the head noun.',
          fa: 'فشرده‌سازی جملات موصولی به ساختارهای وصفی پیوسته که مابین حرف تعریف و اسم اصلی جای می‌گیرند.',
          prs: 'خلاصه کردن جملات توضیحی فرعی به ترکیب‌های صفتی پیش از اسم اصلی.',
          tr: 'İlgi cümlelerini artikel ile isim arasına sıkıştırılan genişletilmiş ortaç yapılarına dönüştürün.',
          ar: 'ضغط الجمل الموصولة إلى تراكيب نعتية اسمية موضوعة بين أداة التعريف والاسم الأساسي.',
          es: 'Condensa oraciones de relativo en estructuras participiales atributivas entre el artículo y el sustantivo.'
        },
        examples: [
          {
            german: 'Die seit mehreren Jahren kontrovers debattierte Reform wurde schließlich verabschiedet.',
            formulaBreakdown: 'Die (Art) + [seit mehreren Jahren kontrovers (Adv) + debattierte (Partizip II)] + Reform (Nomen) + wurde verabschiedet.',
            literalTranslation: {
              en: 'The since several years controversially debated reform was finally adopted.',
              fa: 'اصلاحات از چندین سال به صورت بحث‌برانگیز مورد مناقشه واقع شده سرانجام تصویب شد.',
              prs: 'اصلاحاتی که از سال‌ها پیش مورد اختلاف بود، بالاخره تصویب شد.',
              tr: 'Birkaç yıldır tartışmalı şekilde münazara edilen reform nihayet kabul edildi.',
              ar: 'تمت أخيراً المصادقة على الإصلاح الذي نوقش بشكل مثير للجدل منذ سنوات عدة.',
              es: 'La desde hace varios años controvertidamente debatida reforma fue finalmente aprobada.'
            },
            fluentTranslation: {
              en: 'The reform, which had been the subject of contentious debate for several years, was ultimately passed.',
              fa: 'اصلاحاتی که چندین سال موضوع مباحثات جنجالی بود، سرانجام به تصویب رسید.',
              prs: 'طرح اصلاحی که سال‌ها بحث روی آن جریان داشت، سرانجام منظور گردید.',
              tr: 'Yıllardır hararetli tartışmalara konu olan yasa tasarısı nihayet onaylandı.',
              ar: 'أُقرَّ في نهاية المطاف مشروع الإصلاح الذي كان محل نقاش محتدم على مدار سنوات.',
              es: 'La reforma, ampliamente debatida durante varios años, fue finalmente aprobada.'
            }
          }
        ]
      },
      practiceTasks: [
        'Formen Sie vier Relativsätze in erweiterte Partizipialattribute um.',
        'Verfassen Sie ein akademisches Abstract (150 Wörter) zu einer soziologischen Untersuchung.'
      ]
    },
    vocabularies: [
      { id: 'c1_1_v1', word: 'das Paradigma', article: 'das', plural: 'die Paradigmen', ipa: '/paʁaˈdɪɡma/', translation: { en: 'paradigm', fa: 'پارادایم / الگوی فکری بنیادین', prs: 'چارچوب فکری و نظریه اساسی', tr: 'paradigma', ar: 'النموذج الفكري / النموذج الإرشادي', es: 'paradigma' } },
      { id: 'c1_1_v2', word: 'die Prämisse', article: 'die', plural: 'die Prämissen', ipa: '/pʁɛˈmɪsə/', translation: { en: 'premise', fa: 'پیش‌فرض / مقدمه استدلال', prs: 'پیش‌شرط یا فرض اولیه', tr: 'öncül / varsayım', ar: 'المقدمة المنطقية / الفرضية', es: 'premisa' } },
      { id: 'c1_1_v3', word: 'die Intersubjektivität', article: 'die', plural: '-', ipa: '/ˌɪntɐzʊbjɛktiviˈtɛːt/', translation: { en: 'intersubjectivity', fa: 'بین‌الاذهانی بودن', prs: 'توافق فکری جمعی دانشمندان', tr: 'öznelerarasılık', ar: 'الذاتية المشتركة / التذاوت', es: 'intersubjetividad' } }
    ],
    exercises: [
      {
        id: 'ex_c1_1_1_b',
        type: 'multiple_choice',
        instruction: {
          en: 'Identify the correct extended participial attribute.',
          fa: 'صفت وصفی مفعولی گسترش‌یافته (Partizipialattribut) صحیح را انتخاب کنید.',
          prs: 'صفت فعلی وصفی گسترش‌یافته درست را برگزینید.',
          tr: 'Doğru genişletilmiş sıfat tamlamasını seçin.',
          ar: 'اختر النعت الفعلي الممتد الصحيح.',
          es: 'Selecciona el atributo participial extendido correcto.'
        },
        prompt: 'Welcher Satz enthält ein korrekt gebildetes erweitertes Partizipialattribut?',
        options: [
          'Die von der renommierten Expertenkommission vorgelegten Forschungsergebnisse wurden publiziert.',
          'Die vorgelegten Forschungsergebnisse von der renommierten Expertenkommission wurden publiziert.',
          'Die Expertenkommission von Forschungsergebnissen vorgelegte publizierte Ergebnisse.',
          'Die publizierten Ergebnisse von Expertenkommission vorgelegt wurden.'
        ],
        correctAnswer: 'Die von der renommierten Expertenkommission vorgelegten Forschungsergebnisse wurden publiziert.',
        explanation: {
          en: 'The extended participial attribute encloses its modifiers between the article "Die" and the participle "vorgelegten", qualifying "Forschungsergebnisse".',
          fa: 'در صفت وصفی گسترش‌یافته، تمام توضیحات میان آرتیکل (Die) و صفت فاعلی/مفعولی (vorgelegten) قبل از اسم هسته قرار می‌گیرند.',
          prs: 'اجزای توصیفی در بین آرتیکل و صفت فعلی قرار می‌گیرند.',
          tr: 'Genişletilmiş sıfat tamlamasında belirteçler artikel ile sıfat-fiil arasına sıkıştırılır.',
          ar: 'في النعت الفعلي الممتد، توضع التتمات بين أداة التعريف واسم الفاعل/المفعول قبل الاسم الموصوف.',
          es: 'El atributo participial extendido sitúa todos sus complementos entre el artículo y el participio.'
        }
      },
      {
        id: 'ex_c1_1_1_c',
        type: 'fill_blank',
        instruction: {
          en: 'Fill in the appropriate academic connector.',
          fa: 'حرف ربط گفتمانی علمی مناسب را در جای خالی قرار دهید.',
          prs: 'رابط گفتمانی مناسب را جاگذاری نمایید.',
          tr: 'Boşluğa uygun akademik bağlacı yerleştiriniz.',
          ar: 'املاً الفراغ برابط الجدال الأكاديمي المناسب.',
          es: 'Completa con el conector académico adecuado.'
        },
        prompt: 'Die Simulationen zeigen drastische Erwärmungstrends; _______ muss die Aussagekraft der Klimamodelle empirisch verifiziert werden.',
        options: [
          'gleichwohl',
          'weil',
          'denn',
          'obwohl'
        ],
        correctAnswer: 'gleichwohl',
        explanation: {
          en: '"Gleichwohl" (nevertheless/nonetheless) introduces an adversative concessive assertion in elevated academic register.',
          fa: '"gleichwohl" (با این همه / با وجود این) یک قید ربط تقابلی در سطح عالی آکادمیک است و بعد از سمیکالن در موقعیت پیشافعل می‌نشیند.',
          prs: 'کلمه gleichwohl برای بیان تضاد و تناقض منطقی در متون سطح بالای علمی به کار می‌رود.',
          tr: '"Gleichwohl" üst düzey akademik Almancada "bununla birlikte / yine de" anlamında karşıtlık ifade eder.',
          ar: 'الرابط "gleichwohl" (مع ذلك / بيد أن) يربط جملتين متعارضتين بأسلوب أكاديمي رفيع.',
          es: '"Gleichwohl" (no obstante/a pesar de ello) introduce una concesión adversativa en registro culto.'
        }
      },
      {
        id: 'ex_c1_1_1',
        type: 'multiple_choice',
        instruction: {
          en: 'Select the grammatically accurate extended participial attribute.',
          fa: 'صفت گسترش‌یافته فاعلی یا مفعولی صحیح را انتخاب نمایید.',
          prs: 'ساختار دستوری درست صفت پیش از اسم را تعیین کنید.',
          tr: 'Gramer açısından kusursuz genişletilmiş ortaç yapısını seçiniz.',
          ar: 'حدد النعت الممتد الدقيق لغوياً.',
          es: 'Selecciona el atributo participial extendido gramaticalmente correcto.'
        },
        prompt: 'Which construction correctly translates "the report published yesterday by the institute"?',
        options: [
          'der gestern vom Institut veröffentlichte Bericht',
          'der gestern veröffentlichte vom Institut Bericht',
          'der Bericht gestern vom Institut veröffentlicht',
          'der vom Institut gestern Bericht veröffentlichte'
        ],
        correctAnswer: 'der gestern vom Institut veröffentlichte Bericht',
        explanation: {
          en: 'The entire adverbial specification (gestern vom Institut) and the declined participle (veröffentlichte) must stand strictly between the definite article (der) and the noun (Bericht).',
          fa: 'تمامی متمم‌های قیدی و صفت مفعولی صرف‌شده باید دقیقاً بین آرتیکل و اسم قرار گیرند.',
          prs: 'تمامی کلمات قیدی و صفت مفعولی باید بین آرتیکل و اسم اصلی واقع شوند.',
          tr: 'Tüm belirteçler ve çekimlenmiş Partizip II ("veröffentlichte"), artikel ("der") ile isim ("Bericht") arasına yerleşmelidir.',
          ar: 'يجب أن تقع كافة الظروف وشبه الجمل والاسم المفعول المصرف بين أداة التعريف والاسم الرئيسي حصراً.',
          es: 'Todos los complementos adverbiales y el participio declinado ("veröffentlichte") deben ubicarse estrictamente entre el artículo ("der") y el sustantivo ("Bericht").'
        }
      }
    ]
  },
  {
    id: 'c1_1_lek2',
    lektionNumber: 2,
    level: 'C1.1',
    title: 'Makroökonomie, Geldpolitik und Außenhandel',
    subTitle: 'Zentralbankpolitik, Handelsbilanzen und Nomen-Verb-Verbindungen (C1 Niveau)',
    topic: 'Leitzins, Währungsstabilität, Fiskalpolitik und Funktionsverbgefüge im Wirtschaftsdeutsch',
    fotoHoergeschichte: {
      title: 'Foto-Hörgeschichte: Pressekonferenz der Europäischen Zentralbank in Frankfurt',
      imagePrompt: 'The modern glass auditorium of the European Central Bank in Frankfurt am Main where financial journalists attend an interest rate policy press briefing.',
      imageTheme: 'EZB Frankfurt am Main',
      audioDuration: '03:20',
      transcript: [
        { speaker: 'EZB-Präsidentin', text: 'Der EZB-Rat hat heute beschlossen, die Leitzinsen um 25 Basispunkte anzuheben, um der hartnäckigen Teuerungsrate Einhalt zu gebieten.' },
        { speaker: 'Handelsblatt-Korrespondent', text: 'Frau Präsidentin, ziehen Sie in Erwägung, dass diese geldpolitische Straffung die Investitionstätigkeit des produzierenden Gewerbes empfindlich schwächen könnte?' },
        { speaker: 'EZB-Präsidentin', text: 'Wir behalten sämtliche volkswirtschaftlichen Indikatoren im Blick und bringen vorrangig die Preisstabilität zur Geltung.' }
      ],
      summary: {
        en: 'The ECB press conference in Frankfurt discusses interest rate hikes, inflation targeting, and economic stabilization using fixed noun-verb collocations.',
        fa: 'نشست خبری بانک مرکزی اروپا در فرانکفورت به بحث درباره افزایش نرخ بهره، مهار تورم و ثبات اقتصادی با استفاده از اصطلاحات اسمی-فعلی می‌پردازد.',
        prs: 'کنفرانس مطبوعاتی بانک مرکزی اروپا در فرانکفورت درباره بالا بردن مفاد بانکی و کنترول تورم اقتصادی بحث می‌کند.',
        tr: 'Frankfurt\'taki AMB basın toplantısında faiz artışları, enflasyon hedeflemesi ve ekonomik istikrar ele alınır.',
        ar: 'المؤتمر الصحفي للبنك المركزي الأوروبي في فرانكفورت يناقش رفع أسعار الفائدة واستهداف التضخم والاستقرار الاقتصادي.',
        es: 'Rueda de prensa del BCE en Fráncfort sobre tipos de interés, control inflacionario y estabilidad económica.'
      }
    },
    sectionA: {
      title: 'Mussawi A: Sprechen & Dialog',
      focus: 'Sprechen & Hören (Wirtschaftsanalysen & Debatten)',
      description: {
        en: 'Analyze macroeconomic policies, interest rate mechanisms, and fiscal interventions with executive fluency.',
        fa: 'تحلیل سیاست‌های اقتصاد کلان، سازوکارهای نرخ بهره و مداخلات مالی دولت با فصاحت در سطح مدیران ارشد.',
        prs: 'تحلیل دقیق مسایل اقتصاد کلان و سیاست‌های پولی و مالی در سطح عالی مسلکی.',
        tr: 'Makroekonomik politikaları, faiz mekanizmalarını ve mali müdahaleleri yönetici akıcılığında analiz edin.',
        ar: 'تحليل السياسات الاقتصادية الكلية، وآليات أسعار الفائدة، والتدخلات المالية بفصاحة تنفيذية رفيعة.',
        es: 'Análisis de políticas macroeconómicas, mecanismos de tipos de interés y medidas fiscales.'
      },
      content: 'Die Zinspolitik der Notenbank übt beträchtlichen Einfluss auf die Kreditvergabe aus.',
      audioText: 'Es gilt zu prüfen, inwieweit die fiskalischen Anreize zu einer nachhaltigen Belebung des Binnenmarkts beitragen.',
      practiceTasks: [
        'Diskutieren Sie die Vor- und Nachteile einer expansiven Geldpolitik.',
        'Verwenden Sie Nomen-Verb-Verbindungen wie "zur Sprache bringen", "eine Entscheidung treffen".'
      ]
    },
    sectionB: {
      title: 'Mussawi B: Wortschatz & Hören',
      focus: 'Hören & Wortschatz (Finanzmärkte & Volkswirtschaft)',
      description: {
        en: 'High-level financial vocabulary: fiscal stimulus, stagflation, foreign direct investment, and trade surplus.',
        fa: 'واژگان سطح بالای مالی: بسته‌های محرک مالی، رکود تورمی، سرمایه‌گذاری مستقیم خارجی و مازاد تراز تجاری.',
        prs: 'لغات پیشرفته مالی: سرمایه‌گذاری خارجی، رشد تورم و تراز تجارتی بین‌المللی.',
        tr: 'İleri düzey finansal terimler: mali teşvik, stagflasyon, doğrudan yabancı yatırım ve ticaret fazlası.',
        ar: 'المصطلحات المالية الرفيعة: التحفيز المالي، الركود التضخمي، الاستثمار الأجنبي المباشر، وفائض الميزان التجاري.',
        es: 'Léxico financiero de alto nivel: estímulo fiscal, estanflación, inversión extranjera directa y superávit comercial.'
      },
      content: 'die Stagflation, die Handelsbilanz, der Leitzins, die Bonität, die Konjunkturprognose.',
      practiceTasks: [
        'Erläutern Sie die Kausalität zwischen Zinserhöhungen und Wechselkursbewegungen.',
        'Erstellen Sie eine Synopse zu den aktuellen Konjunkturindikatoren.'
      ]
    },
    sectionC: {
      title: 'Mussawi C: Alltagskommunikation',
      focus: 'Sprechen & Dialoge (Strategiemeetings & Vorstandspräsentationen)',
      description: {
        en: 'Boardroom interactions, articulating financial risk assessments and strategic hedging options.',
        fa: 'تعاملات اتاق جلسات هیئت مدیره، تبیین ارزیابی ریسک‌های مالی و راهکارهای پوشش ریسک ارزی.',
        prs: 'جلسات رهبری شرکت‌ها، توضیح خطرات مالی و پلان‌های احتیاطی اقتصادی.',
        tr: 'Yönetim kurulu toplantılarında finansal risk değerlendirmeleri ve riskten korunma stratejileri sunma.',
        ar: 'تفاعلات مجالس الإدارة، وصياغة تقييمات المخاطر المالية واستراتيجيات التحوط المالي.',
        es: 'Reuniones de consejo directivo, evaluación de riesgos financieros y coberturas estratégicas.'
      },
      content: 'Wir müssen die möglichen Währungsrisiken zwingend in Rechnung stellen.',
      audioText: 'Angesichts der geopolitischen Friktionen sollten wir eine Diversifizierung unserer Beschaffungsmärkte ins Auge fassen.',
      practiceTasks: [
        'Simulieren Sie eine Vorstandssitzung zur Verabschiedung des Investitionsbudgets.',
        'Entkräften Sie skeptische Nachfragen zu Renditeerwartungen.'
      ]
    },
    sectionD: {
      title: 'Mussawi D: Leseverstehen & Text',
      focus: 'Lesen & Textanalyse (Handelsblatt & Bundesbank-Monatsbericht)',
      description: {
        en: 'Analyze comprehensive articles from the Deutsche Bundesbank Monthly Report and Handelsblatt.',
        fa: 'تحلیل مقالات تفصیلی گزارش ماهانه دویچه بوندس‌بانک (بانک مرکزی آلمان) و روزنامه اقتصادی هندلزبلات.',
        prs: 'مطالعه و تحلیل گزارش‌های ماهوار بانک فدرال آلمان و نشریات اقتصادی بین‌المللی.',
        tr: 'Deutsche Bundesbank Aylık Raporu ve Handelsblatt\'tan kapsamlı analizleri irdeleme.',
        ar: 'تحليل المقالات المتعمقة من التقرير الشهري للبنك المركزي الألماني وصحيفة هاندلسبلات.',
        es: 'Análisis de artículos exhaustivos del Informe Mensual del Deutsche Bundesbank y Handelsblatt.'
      },
      content: 'Wirtschaftsanalytischer Text zur Transformation der deutschen Exportwirtschaft.',
      readingText: {
        type: 'Monatsbericht der Deutschen Bundesbank',
        title: 'Strukturwandel im verarbeitenden Gewerbe unter dem Einfluss globaler Zinszyklen',
        body: 'Die deutsche Exportindustrie sieht sich mit mehrfachen Herausforderungen konfrontiert. Neben der verhaltenen Weltkonjunktur belasten höhere Finanzierungskosten die Investitionsbereitschaft mittelständischer Unternehmen. Dennoch erweist sich die technologische Innovationskraft als resilienter Stützpfeiler.'
      },
      practiceTasks: [
        'Destillieren Sie die drei primären Wachstumshemmnisse aus dem Text heraus.',
        'Verfassen Sie ein Executive Summary für die Geschäftsleitung.'
      ]
    },
    sectionE: {
      title: 'Mussawi E: Grammatik & Schreiben',
      focus: 'Grammatik & Schreiben (Nomen-Verb-Verbindungen / Funktionsverbgefüge)',
      description: {
        en: 'Master sophisticated noun-verb collocations (Funktionsverbgefüge) essential for executive German and C1 exams.',
        fa: 'تسلط بر اصطلاحات اسمی-فعلی با افعال خنثی (Funktionsverbgefüge) ضروری برای آلمانی تجاری و آزمون‌های C1.',
        prs: 'تسلط بر افعال ترکیبی اسمی پیشرفته برای محیط‌های کاری رسمی و امتحانات سطح C1.',
        tr: 'Yönetici düzeyinde Almanca ve C1 sınavları için hayati önem taşıyan kalıplaşmış isim-fiil bağdaşımları.',
        ar: 'إتقان التراكيب الاسمية الفعلية الاصطلاحية (Funktionsverbgefüge) اللازمة للألمانية الإدارية وامتحانات C1.',
        es: 'Dominio de combinaciones léxicas nominales con verbos funcionales esenciales en nivel C1.'
      },
      content: 'Nomen-Verb-Verbindungen: in Erwägung ziehen (= erwägen), zur Verfügung stehen (= verfügbar sein), Kritik üben an (= kritisieren).',
      grammarRule: {
        id: 'c1_1_nvv_rule',
        level: 'C1.1',
        germanTitle: 'Nomen-Verb-Verbindungen (Funktionsverbgefüge)',
        formula: 'Präposition + Nomen + Funktionsverb (z. B. "in Anspruch nehmen", "in Zweifel ziehen")',
        explanation: {
          en: 'Noun-verb combinations replace simple verbs in administrative, journalistic, and academic language to express subtle nuances of aspect, inception, or causation.',
          fa: 'ترکیب‌های اسم و فعل، جایگزین افعال ساده در متون اداری، دانشگاهی و ژورنالیستی می‌شوند تا مفاهیم ظریف دستوری، آغازین یا سببی را با دقت بیان کنند.',
          prs: 'این ساختارهای اسمی-فعلی در نوشتار اداری و دانشگاهی جای افعال ساده را می‌گیرند تا متن را شسته‌ورفته و مسلکی بسازند.',
          tr: 'İsim-fiil kalıpları, resmi, akademik ve basın dilinde sade fiillerin yerini alarak anlamı inceltir.',
          ar: 'تحل التراكيب الاسمية الفعلية محل الأفعال البسيطة في اللغة الإدارية والصحفية والأكاديمية لإضفاء دقة أسلوبية رفيعة.',
          es: 'Las colocaciones nominal-verbales sustituyen a los verbos simples en registros administrativos, formales y académicos.'
        },
        examples: [
          {
            german: 'Die Geschäftsführung zog eine Umstrukturierung des Unternehmens ernsthaft in Erwägung.',
            formulaBreakdown: 'Die Geschäftsführung (S) + zog (Funktionsverb) + [eine Umstrukturierung (Akk)] + in Erwägung (Nomen-Verb-Verbindung = erwog).',
            literalTranslation: {
              en: 'The executive management pulled a restructuring of the enterprise seriously into consideration.',
              fa: 'هیئت مدیره تجدید ساختار شرکت را به طور جدی مد نظر قرار داد.',
              prs: 'رهبری شرکت تغییرات در ساختار اداره را به گونه جدی زیر بررسی گرفت.',
              tr: 'Yönetim şirketin yeniden yapılandırılmasını ciddi biçimde değerlendirmeye aldı.',
              ar: 'وضعت الإدارة العليا إعادة هيكلة الشركة في دائرة الاعتبار الجاد.',
              es: 'La dirección tomó seriamente en consideración una reestructuración de la empresa.'
            },
            fluentTranslation: {
              en: 'The executive management gave serious consideration to restructuring the company.',
              fa: 'هیئت مدیره تجدید ساختار شرکت را با دقت تمام مورد بررسی و ارزیابی قرار داد.',
              prs: 'رهبری نهاد ساختار جدید تشکیلات را به دقت ارزیابی نمود.',
              tr: 'Şirket yönetimi kurumsal yeniden yapılanmayı derinlemesine değerlendirdi.',
              ar: 'درست الإدارة التنفيذية خيار إعادة هيكلة المؤسسة دراسة متأنية وشاملة.',
              es: 'La directiva consideró minuciosamente acometer una reestructuración de la compañía.'
            }
          }
        ]
      },
      practiceTasks: [
        'Ersetzen Sie in einem Text 8 einfache Verben durch adäquate Nomen-Verb-Verbindungen.',
        'Schreiben Sie eine Wirtschaftskolumne (250 Wörter) über die Geldpolitik der EZB.'
      ]
    },
    vocabularies: [
      { id: 'c1_1_v4', word: 'der Leitzins', article: 'der', plural: 'die Leitzinsen', ipa: '/ˈlaɪ̯tˌt͡sɪns/', translation: { en: 'key interest rate / benchmark rate', fa: 'نرخ بهره پایه / نرخ بهره مبنا', prs: 'نرخ مفاد اساسی بانک مرکزی', tr: 'politika faizi / gösterge faiz', ar: 'سعر الفائدة الرئيسي', es: 'tipo de interés básico / tipo rector' } },
      { id: 'c1_1_v5', word: 'die Konjunkturbelebung', article: 'die', plural: 'die Konjunkturbelebungen', ipa: '/kɔnjʊŋkˈtuːɐ̯bəˌleːbʊŋ/', translation: { en: 'economic recovery / stimulus', fa: 'رونق و احیای مجدد اقتصادی', prs: 'شکوفایی و بهبود وضعیت اقتصادی', tr: 'ekonomik canlanma', ar: 'الانتعاش الاقتصادي', es: 'reactivación coyuntural' } },
      { id: 'c1_1_v6', word: 'in Erwägung ziehen', article: '', plural: '-', ipa: '/ɪn ɛɐ̯ˈvɛːɡʊŋ ˈt͡siːən/', translation: { en: 'to consider / take into account', fa: 'مد نظر قرار دادن / بررسی کردن', prs: 'در نظر گرفتن / سنجیدن', tr: 'dikkate almak / hesaba katmak', ar: 'يأخذ بعين الاعتبار', es: 'tomar en consideración' } }
    ],
    exercises: [
      {
        id: 'ex_c1_1_2_b',
        type: 'multiple_choice',
        instruction: {
          en: 'Select the appropriate subjunctive indirect speech form (Konjunktiv I).',
          fa: 'شکل نقل قول غیرمستقیم ادبی (التزامی ۱ - Konjunktiv I) را انتخاب کنید.',
          prs: 'فعل نقل قول غیرمستقیم ادبی را برگزینید.',
          tr: 'Doğru dolaylı anlatım (Konjunktiv I) formunu seçin.',
          ar: 'اختر الصيغة الصحيحة لنقل الكلام غير المباشر (Konjunktiv I).',
          es: 'Selecciona la forma correcta de estilo indirecto formal (Konjunktiv I).'
        },
        prompt: 'Der Regierungssprecher erklärte, das Kabinett _______ eine umfassende Reform des Vergaberechts beschlossen.',
        options: [
          'habe',
          'hat',
          'hätte',
          'habend'
        ],
        correctAnswer: 'habe',
        explanation: {
          en: 'In formal reported speech (Konjunktiv I), 3rd person singular takes "habe", maintaining journalistic and judicial neutrality.',
          fa: 'در گزارش بی‌طرفانه و نقل قول رسمی اداری و حقوقی، برای سوم شخص مفرد از فرم Konjunktiv I فعل haben یعنی "habe" استفاده می‌شود.',
          prs: 'در سبک رسمی خبری و حقوقی، برای شخص سوم مفرد فعل habe استفاده می‌گردد.',
          tr: 'Resmi dolaylı aktarımda (Konjunktiv I) 3. tekil şahıs için "habe" kullanılır.',
          ar: 'في نقل الكلام الرسمي في الصحافة والقانون، يُستخدم Konjunktiv I للشخص الثالث المفرد "habe".',
          es: 'En el estilo indirecto formal, se emplea la forma de Konjunktiv I "habe" para tercera persona singular.'
        }
      },
      {
        id: 'ex_c1_1_2_c',
        type: 'fill_blank',
        instruction: {
          en: 'Insert the correct legal preposition requiring the genitive case.',
          fa: 'حرف اضافه حقوقی مناسب که نیاز به حالت ملکی (Genitiv) دارد را جاگذاری کنید.',
          prs: 'حرف اضافه حقوقی با حالت اضافه (Genitiv) را برگزینید.',
          tr: 'Genitiv gerektiren uygun hukuki edatı yerleştirin.',
          ar: 'ضع حرف الجر القانوني المناسب الذي يجر بالـ Genitiv.',
          es: 'Inserta la preposición jurídica que rige genitivo.'
        },
        prompt: '_______ der neuen Sicherheitsrichtlinien traten unverzüglich schärfere Kontrollmechanismen in Kraft.',
        options: [
          'Kraft',
          'Wegen zu',
          'Seitens von',
          'Anhand mit'
        ],
        correctAnswer: 'Kraft',
        explanation: {
          en: '"Kraft" + Genitive is an elevated administrative preposition meaning "by virtue of / in authority of".',
          fa: '"Kraft" همراه با حالت اضافه (Genitiv) یک حرف اضافه رسمی و حقوقی به معنای «به موجب / به استنادِ» است.',
          prs: 'حرف اضافه رسمی Kraft به معنای به موجب و به صلاحیت قانونی می‌باشد.',
          tr: '"Kraft" + Genitiv, hukuki dilde "gücüyle / yetkisine dayanarak" anlamına gelir.',
          ar: 'حرف الجر "Kraft" المتبوع بالـ Genitiv يعني "بموجب / بحكم السلطة القانونية لـ".',
          es: '"Kraft" rige genitivo y significa "en virtud de / por la potestad de".'
        }
      },
      {
        id: 'ex_c1_1_2',
        type: 'multiple_choice',
        instruction: {
          en: 'Select the equivalent Noun-Verb collocation for "kritisieren".',
          fa: 'معادل اسمی-فعلی (Funktionsverbgefüge) برای فعل "kritisieren" را برگزینید.',
          prs: 'معادل اصطلاح اسمی برای فعل انتقاد کردن (kritisieren) را انتخاب کنید.',
          tr: '"kritisieren" fiiline denk gelen doğru isim-fiil bağdaşımını seçiniz.',
          ar: 'اختر التركيب الاسمي الفعلي المرادف للفعل "kritisieren".',
          es: 'Selecciona la colocación verbal equivalente a "kritisieren".'
        },
        prompt: 'Welche Nomen-Verb-Verbindung bedeutet "kritisieren"?',
        options: [
          'Kritik üben an (+ Dativ)',
          'in Kritik stehen für',
          'zur Kritik bringen',
          'auf Kritik beharren'
        ],
        correctAnswer: 'Kritik üben an (+ Dativ)',
        explanation: {
          en: '"Kritik üben an (+ Dativ)" is the standard high-register collocation meaning "jemanden/etwas kritisieren".',
          fa: 'ترکیب "Kritik üben an (+ Dativ)" فرم رسمی و فاخر در سطح C1 برای انتقاد کردن از چیزی یا کسی است.',
          prs: 'اصطلاح "Kritik üben an" دقیق‌ترین ترکیب رسمی به معنای انتقاد نمودن می‌باشد.',
          tr: '"Kritik üben an (+ Dativ)", "birini/bir şeyi eleştirmek" anlamında standart üst düzey ifadedir.',
          ar: 'التركيب "Kritik üben an (+ Dativ)" هو المصطلح الرصين المعتمد في الفصحى بمعنى "ينتقد فلاناً أو أمراً ما".',
          es: '"Kritik üben an (+ Dativo)" es la colocación formal habitual para "criticar a alguien/algo".'
        }
      }
    ]
  },
  {
    id: 'c1_1_lek3',
    lektionNumber: 3,
    level: 'C1.1',
    title: 'Bioethik, Biomedizin und Rechtsethik',
    subTitle: 'Genom-Editierung, Organallokation und Passiversatzformen (C1 Niveau)',
    topic: 'Klonen, CRISPR-Cas, Ethikrat und modale Infinitive (sein/haben + zu + Infinitiv)',
    fotoHoergeschichte: {
      title: 'Foto-Hörgeschichte: Plenarsitzung des Deutschen Ethikrates in Berlin',
      imagePrompt: 'The solemn meeting chamber of the German Ethics Council in Berlin where medical ethicists, legal scholars, and geneticists debate ethical boundaries.',
      imageTheme: 'Deutscher Ethikrat Berlin',
      audioDuration: '03:10',
      transcript: [
        { speaker: 'Vorsitzende des Ethikrates', text: 'Die ethischen Implikationen der Keimbahntherapie sind von herausragender Tragweite für künftige Generationen.' },
        { speaker: 'Prof. Dr. Molekularbiologe', text: 'Diese Methoden sind als potenziell lebensrettende Meilensteine bei monogenetischen Erbkrankheiten einzustufen.' },
        { speaker: 'Frau Dr. Philosophin', text: 'Gleichwohl ist der Vorrang der Menschenwürde strikt zu wahren; instrumentalisierende Eingriffe sind unter allen Umständen zu unterlassen.' }
      ],
      summary: {
        en: 'The German Ethics Council debates germline editing, human dignity, and regulatory safeguards using passive substitute forms.',
        fa: 'شورای اخلاق زیستی آلمان به بحث درباره اصلاح ژنتیکی جنین، کرامت انسانی و مرزهای قانونی با ساختارهای جانشین مجهول می‌پردازد.',
        prs: 'شورای اخلاقی آلمان روی مسایل ژنتیکی و کرامت انسانی با ساختارهای پیشرفته بدل مجهول بحث می‌نماید.',
        tr: 'Alman Etik Kurulu, kök hücre müdahalelerini ve insan onurunu edilgen çatı alternatifleriyle ele alıyor.',
        ar: 'يناقش المجلس الألماني للأخلاقيات التعديل الجيني والكرامة الإنسانية باستخدام صيغ بدائل المجهول.',
        es: 'El Consejo de Ética Alemán debate sobre edición genética y dignidad humana con sustitutos de la pasiva.'
      }
    },
    sectionA: {
      title: 'Mussawi A: Sprechen & Dialog',
      focus: 'Sprechen & Hören (Ethische Dilemmata & Argumentation)',
      description: {
        en: 'Defend moral philosophical arguments in bioethical debates with nuanced ethical vocabulary.',
        fa: 'دفاع از استدلال‌های فلسفه اخلاق در مناظرات اخلاق زیستی با واژگان عمیق فلسفی.',
        prs: 'دفاع از ارزش‌های اخلاقی و حقوق بشری در مباحثات مسلکی با اصطلاحات فلسفی.',
        tr: 'Biyoetik tartışmalarda ahlak felsefesi savlarını incelikli kavramlarla savunma.',
        ar: 'الدفاع عن الحجج الفلسفية الأخلاقية في مناظرات الأخلاقيات الحيوية بمفردات فلسفية راقية.',
        es: 'Defensa de argumentos de filosofía moral en dilemas bioéticos con léxico conceptual.'
      },
      content: 'Aus deontologischer Perspektive verbietet sich eine Güterabwägung gegen die Unantastbarkeit der Menschenwürde.',
      audioText: 'Es ist unabdingbar zu klären, welche Eingriffe gesellschaftlich konsensfähig sind.',
      practiceTasks: [
        'Erläutern Sie den Unterschied zwischen Utilitarismus und Pflichtethik anhand eines Fallbeispiels.',
        'Verfassen Sie eine Stellungnahme zu den Grenzen der Pränataldiagnostik.'
      ]
    },
    sectionB: {
      title: 'Mussawi B: Wortschatz & Hören',
      focus: 'Hören & Wortschatz (Biotechnologie & Bioethik)',
      description: {
        en: 'Terminology of genetics, clinical trials, ethical review boards, and jurisprudence.',
        fa: 'واژگان تخصصی ژنتیک، کارآزمایی‌های بالینی، کمیته‌های اخلاق پزشکی و فلسفه حقوق.',
        prs: 'لغات تخصصی ژنتیک، آزمایش‌های کلینیکی و حقوق انسانی در علم طبابت.',
        tr: 'Genetik, klinik araştırmalar, etik kurullar ve hukuk felsefesi terminolojisi.',
        ar: 'مصطلحات علم الوراثة، التجارب السريرية، لجان الأخلاقيات الطبية وفلسفة القانون.',
        es: 'Léxico especializado en genética, ensayos clínicos, comités de ética y jurisprudencia.'
      },
      content: 'die Keimbahntherapie, die Menschenwürde, die Güterabwägung, das Klonen, der Gesetzesentwurf.',
      practiceTasks: [
        'Unterscheiden Sie deskriptive von normativen Aussagen in einem Fachtext.',
        'Ordnen Sie bioethische Fallstudien den entsprechenden Grundrechten zu.'
      ]
    },
    sectionC: {
      title: 'Mussawi C: Alltagskommunikation',
      focus: 'Sprechen & Dialoge (Parlamentarische Anhörung im Bundestag)',
      description: {
        en: 'Testify as an expert witness in parliamentary hearings regarding bioethics legislation.',
        fa: 'شهادت کارشناسی در جلسات استماع پارلمانی بوندس‌تاگ پیرامون قوانین اخلاق زیستی.',
        prs: 'ارائه نظر تخصصی در جلسات پارلمان درباره قوانین جدید علمی و صحی.',
        tr: 'Biyoetik mevzuatı üzerine meclis komisyonunda bilirkişi olarak ifade verme.',
        ar: 'تقديم شهادة الخبراء في جلسات الاستماع البرلمانية بشأن تشريعات الأخلاقيات الحيوية.',
        es: 'Intervención como perito en audiencias parlamentarias sobre bioética y salud.'
      },
      content: 'Die Risiken sind als unkalkulierbar einzustufen, weshalb ein Moratorium geboten erscheint.',
      audioText: 'Der Gesetzgeber ist aufgerufen, verbindliche ethische Leitplanken zu definieren.',
      practiceTasks: [
        'Simulieren Sie ein Sachverständigengutachten vor dem Bundestagsausschuss.',
        'Entgegnen Sie juristischen Bedenken souverän und präzise.'
      ]
    },
    sectionD: {
      title: 'Mussawi D: Leseverstehen & Text',
      focus: 'Lesen & Textanalyse (Stellungnahme des Ethikrates)',
      description: {
        en: 'Analyze official statements and policy recommendations published by the German Ethics Council.',
        fa: 'تحلیل بیانیه‌های رسمی و توصیه‌های سیاستی منتشرشده توسط شورای اخلاق زیستی آلمان.',
        prs: 'بررسی بیانیه‌های حقوقی و علمی شورای عالی اخلاق آلمان.',
        tr: 'Alman Etik Kurulu\'nun yayımladığı resmi görüşleri ve tavsiye kararlarını inceleme.',
        ar: 'تحليل البيانات الرسمية وتوصيات السياسات الصادرة عن المجلس الألماني للأخلاقيات.',
        es: 'Análisis de dictámenes oficiales y recomendaciones del Consejo de Ética Alemán.'
      },
      content: 'Auszug aus einer Ad-hoc-Empfehlung des Deutschen Ethikrates.',
      readingText: {
        type: 'Empfehlung des Deutschen Ethikrates',
        title: 'Mensch und Maschine: Herausforderungen durch generative KI und autonome Systeme',
        body: 'Die Zuschreibung von Handlungsfähigkeit und moralischer Verantwortung an Algorithmen ist kategorisch zurückzuweisen. Verantwortlich bleibt stets das handelnde menschliche Subjekt. Der Gesetzgeber hat dafür Sorge zu tragen, dass die Kontrollierbarkeit autonomer Systeme zu jedem Zeitpunkt gewährleistet ist.'
      },
      practiceTasks: [
        'Analysieren Sie die Argumentationskette der Stellungnahme.',
        'Schreiben Sie eine kritische Erörterung zum Thema "KI in der klinischen Diagnostik".'
      ]
    },
    sectionE: {
      title: 'Mussawi E: Grammatik & Schreiben',
      focus: 'Grammatik & Schreiben (Passiversatzformen: sein + zu + Infinitiv, -bar, -lich, sich lassen)',
      description: {
        en: 'Master sophisticated alternatives to passive voice: "sein + zu + Infinitiv" (müssen/können), "sich lassen + Infinitiv", and suffixes "-bar" and "-lich".',
        fa: 'تسلط بر ساختارهای جایگزین مجهول: ترکیب "sein + zu + مصدر" (بیانگر ضرورت یا امکان)، "sich lassen + مصدر" و پسوندهای "-bar" و "-lich".',
        prs: 'تسلط بر بدل‌های ساختار مجهول: sein + zu + مصدر و پسوندهای علمی مانند bar و lich.',
        tr: 'Edilgen çatı alternatifleri: "sein + zu + mastar", "sich lassen + mastar" ve "-bar / -lich" yapılarında ustalaşma.',
        ar: 'إتقان بدائل صيغة المبني للمجهول: التركيب "sein + zu + المصدر" وصيغة "sich lassen" واللواحق "-bar" و"-lich".',
        es: 'Dominio de sustitutos de la pasiva: "sein + zu + infinitivo", "sich lassen" y adjetivos en "-bar/-lich".'
      },
      content: 'Passiversatzformen: "Das Problem ist zu lösen" (= muss/kann gelöst werden) / "Die Daten lassen sich verifizieren" (= können verifiziert werden).',
      grammarRule: {
        id: 'c1_1_passiversatz_rule',
        level: 'C1.1',
        germanTitle: 'Die Passiversatzformen (Passivalternativen)',
        formula: 'sein + zu + Infinitiv | sich lassen + Infinitiv | Adjektive auf -bar / -lich',
        explanation: {
          en: '"sein + zu + Infinitiv" expresses necessity (müssen) or possibility (können). "sich lassen + Infinitiv" expresses possibility (können). Adjectives ending in -bar or -lich express capability.',
          fa: 'ترکیب "sein + zu + مصدر" بیانگر الزام (müssen) یا امکان (können) است. ترکیب "sich lassen + مصدر" معادل مجهول با können است. صفات مختوم به -bar و -lich قابلیت انجام کار را نشان می‌دهند.',
          prs: 'ترکیب sein + zu + مصدر الزام یا امکان انجام کار را به شیوه بسیار رسمی نشان می‌دهد.',
          tr: '"sein + zu + mastar" zorunluluk (müssen) veya olasılık (können) bildirir. "sich lassen" ise olasılık ifade eder.',
          ar: 'التركيب "sein + zu + المصدر" يعبر عن الضرورة (müssen) أو الإمكانية (können)، وتركيب "sich lassen" يعبر عن الإمكانية.',
          es: '"sein + zu + infinitivo" expresa obligación o posibilidad; "sich lassen" denota posibilidad pasiva.'
        },
        examples: [
          {
            german: 'Diese ethischen Grundfragen sind im Lichte des Grundgesetzes neu zu bewerten.',
            formulaBreakdown: 'Diese Grundfragen (S) + sind (sein) + im Lichte des Grundgesetzes + neu zu bewerten (zu + Infinitiv = müssen neu bewertet werden).',
            literalTranslation: {
              en: 'These fundamental questions are in the light of the Basic Law newly to evaluate.',
              fa: 'این پرسش‌های بنیادین اخلاقی باید در پرتو قانون اساسی مجدداً ارزیابی شوند.',
              prs: 'این سوالات اساسی باید در روشنایی قانون اساسی از نو ارزیابی گردند.',
              tr: 'Bu temel sorular Anayasa ışığında yeniden değerlendirilmelidir.',
              ar: 'يتعين إعادة تقييم هذه المسائل الأخلاقية الجوهرية في ضوء أحكام القانون الأساسي.',
              es: 'Estas cuestiones éticas fundamentales deben ser evaluadas de nuevo a la luz de la Ley Fundamental.'
            },
            fluentTranslation: {
              en: 'These foundational ethical questions must be re-evaluated in the light of constitutional jurisprudence.',
              fa: 'این پرسش‌های بنیادین اخلاقی باید در پرتو احکام حقوق اساسی مجدداً ارزیابی و بازنگری شوند.',
              prs: 'این پرسش‌های اساسی اخلاق طبابت باید بر اساس اصول قانون اساسی دوباره سنجیده شوند.',
              tr: 'Bu temel ahlaki sorular anayasa ilkeleri çerçevesinde mutlak surette yeniden ele alınmalıdır.',
              ar: 'يجب بالضرورة إعادة تقييم هذه القضايا الأخلاقية الجوهرية على ضوء مبادئ الدستور.',
              es: 'Estas cuestiones morales primordiales han de reevaluarse preceptivamente conforme al marco constitucional.'
            }
          }
        ]
      },
      practiceTasks: [
        'Formulieren Sie vier Passivsätze mit "müssen" in "sein + zu + Infinitiv" um.',
        'Wandeln Sie "kann berechnet werden" in ein Adjektiv auf "-bar" um.'
      ]
    },
    vocabularies: [
      { id: 'c1_1_v7', word: 'die Güterabwägung', article: 'die', plural: 'die Güterabwägungen', ipa: '/ˈɡyːtɐʔapˌvɛːɡʊŋ/', translation: { en: 'balancing of conflicting interests/goods', fa: 'سنجش و موازنه‌سازی منافع متعارض در حقوق', prs: 'سنجش منافع متضاد بر بنیاد اصول قانون', tr: 'menfaatler dengesi / hukuki dengeleme', ar: 'الموازنة بين المصالح القانونية المتعارضة', es: 'ponderación de bienes jurídicos' } },
      { id: 'c1_1_v8', word: 'die Keimbahn', article: 'die', plural: 'die Keimbahnen', ipa: '/ˈkaɪ̯mˌbaːn/', translation: { en: 'germline', fa: 'خط زایای ژنتیکی جنین', prs: 'خط ژنتیکی بنیادی سلول‌های تکثیری', tr: 'eşey hattı', ar: 'الخط الجرثومي الوراثي', es: 'línea germinal' } },
      { id: 'c1_1_v9', word: 'unabdingbar', article: '', plural: '-', ipa: '/ˈʊnʔapˌdɪŋbaːɐ̯/', translation: { en: 'indispensable / imperative', fa: 'اجتناب‌ناپذیر / کاملاً ضروری', prs: 'حتمی و غیرقابل اجتناب', tr: 'vazgeçilmez / zorunlu', ar: 'لا غنى عنه / إلزامي قطعي', es: 'indispensable / imperativo' } }
    ],
    exercises: [
      {
        id: 'ex_c1_1_3_b',
        type: 'multiple_choice',
        instruction: {
          en: 'Identify the correct passive alternative using "sich lassen + Infinitiv".',
          fa: 'جایگزین مجهول صحیح با ساختار "sich lassen + مصدر" را مشخص کنید.',
          prs: 'شکل بدل مجهول با sich lassen را انتخاب کنید.',
          tr: '"sich lassen + mastar" yapısındaki doğru edilgen alternatifi seçin.',
          ar: 'حدد بديل المجهول الصحيح باستخدام "sich lassen + المصدر".',
          es: 'Identifica la alternativa pasiva correcta con "sich lassen + infinitivo".'
        },
        prompt: 'Welcher Satz drückt eine Möglichkeit im Passiversatz aus?',
        options: [
          'Diese Diskrepanz lässt sich durch veränderte Lieferketten erklären.',
          'Diese Diskrepanz lässt veränderte Lieferketten erklären.',
          'Diese Diskrepanz wird sich lassen zu erklären.',
          'Diese Diskrepanz hat sich erklären gelassen werden.'
        ],
        correctAnswer: 'Diese Diskrepanz lässt sich durch veränderte Lieferketten erklären.',
        explanation: {
          en: '"lässt sich erklären" equates to "kann erklärt werden", denoting possibility in sophisticated scientific texts.',
          fa: 'ساختار "lässt sich erklären" دقیقاً معادل "kann erklärt werden" (می‌تواند توضیح داده شود) برای بیان امکان‌پذیری در متون علمی است.',
          prs: 'ساختار sich lassen + مصدر بیانگر توانایی و امکان است در سبک عالی زبان آلمانی.',
          tr: '"lässt sich erklären" yapısı "kann erklärt werden" (açıklanabilir) anlamına gelir.',
          ar: 'التركيب "lässt sich + المصدر" يعادل "kann + المبني للمجهول" للإشارة إلى إمكانية الشيء.',
          es: '"se deja explicar" equivale a "puede ser explicado", expresando posibilidad de modo formal.'
        }
      },
      {
        id: 'ex_c1_1_3_c',
        type: 'fill_blank',
        instruction: {
          en: 'Insert the appropriate business idiom expressing market impact.',
          fa: 'اصطلاح فاخر اقتصادی آلمانی مناسب را جاگذاری کنید.',
          prs: 'اصطلاح رسمی اقتصادی را وارد نمایید.',
          tr: 'Ekonomik etki bildiren uygun deyimi yerleştirin.',
          ar: 'ضع التعبير الاقتصادي الاصطلاحي المناسب.',
          es: 'Inserta la locución económica adecuada.'
        },
        prompt: 'Die geopolitischen Friktionen haben spürbare Auswirkungen auf den Handel und schlagen sich im Kursverlauf _______.',
        options: [
          'nieder',
          'auf',
          'vor',
          'aus'
        ],
        correctAnswer: 'nieder',
        explanation: {
          en: 'The separable verb "sich niederschlagen in + Dativ" means "to be reflected in / to impact visibly".',
          fa: 'فعل جداشدنی "sich niederschlagen in" به معنای «منعکس شدن / بازتاب یافتن در» شاخص‌ها و ارقام است.',
          prs: 'فعل sich niederschlagen یعنی تاثیر گذاشتن و انعکاس یافتن در چیزی.',
          tr: '"sich niederschlagen in", bir durumun göstergelerde "kendini hissettirmesi / yansıması" demektir.',
          ar: 'الفعل "sich niederschlagen in" يعني "ينعكس في / يتجلى أثره في".',
          es: '"sich niederschlagen in" significa "reflejarse o traducirse visiblemente en algo".'
        }
      },
      {
        id: 'ex_c1_1_3',
        type: 'multiple_choice',
        instruction: {
          en: 'Transform the sentence into the passive substitute form "sein + zu + Infinitiv".',
          fa: 'جمله را با ساختار جانشین مجهول "sein + zu + Infinitiv" بازنویسی کنید.',
          prs: 'جمله را به شکل رسمی بدل مجهول تبدیل نمایید.',
          tr: 'Cümleyi "sein + zu + mastar" yapısına dönüştürünüz.',
          ar: 'حول الجملة إلى صيغة بديل المجهول "sein + zu + المصدر".',
          es: 'Transforma la oración empleando la estructura pasiva alternativa "sein + zu + infinitivo".'
        },
        prompt: 'Formen Sie um: "Man muss die Versuchsergebnisse sorgfältig dokumentieren."',
        options: [
          'Die Versuchsergebnisse sind sorgfältig zu dokumentieren.',
          'Die Versuchsergebnisse haben sorgfältig dokumentiert zu werden.',
          'Die Versuchsergebnisse lassen sich sorgfältig dokumentieren.',
          'Die Versuchsergebnisse werden zu dokumentieren sein.'
        ],
        correctAnswer: 'Die Versuchsergebnisse sind sorgfältig zu dokumentieren.',
        explanation: {
          en: '"sein + zu + Infinitiv" expresses necessity/obligation ("müssen dokumentiert werden"), producing high-register scientific German.',
          fa: 'ترکیب "sein + zu + مصدر" بیانگر ضرورت و الزام قانونی ("باید مستندسازی شوند") در زبان رسمی دانشگاهی و علمی است.',
          prs: 'ساختار sein + zu + مصدر به بهترین وجه معنای ضرورت را در سبک رسمی افاده می‌کند.',
          tr: '"sein + zu + mastar", zorunluluk ("müssen") bildirerek üst düzey bilimsel Almancada edilgen çatı yerine geçer.',
          ar: 'التركيب "sein + zu + المصدر" يفيد الوجوب والإلزام كبديل للمجهول في الأسلوب العلمي الرفيع.',
          es: '"sein + zu + infinitivo" expresa obligatoriedad sustituyendo a la pasiva con modal en el registro culto.'
        }
      }
    ]
  }
  ,
  {
    id: 'c1_1_lek4',
    lektionNumber: 4,
    level: 'C1.1',
    title: 'Medientheorie, Digitale Souveränität und Desinformation',
    subTitle: 'Algorithmische Öffentlichkeit, Filterblasen und komplexe Textkohärenz (C1 Niveau)',
    topic: 'Informationsethik, Medienkompetenz und sprachliche Dekonstruktion manipulativer Rhetorik',
    fotoHoergeschichte: {
      title: 'Foto-Hörgeschichte: Podiumsdiskussion im Deutschen Bundestag zur Informationssicherheit',
      imagePrompt: 'A formal parliamentary committee room where digital security experts, journalists, and cognitive scientists testify on artificial intelligence and electoral integrity.',
      imageTheme: 'Digitale Öffentlichkeit & KI',
      audioDuration: '03:40',
      transcript: [
        { speaker: 'Dr. Sarah Lindemann (Medienwissenschaftlerin)', text: 'Die automatisierte Generierung von Desinformationskampagnen mittels generativer Sprachmodelle erfordert eine Neujustierung unserer medienethischen Abwehrmechanismen.' },
        { speaker: 'Prof. Markert (Ausschussvorsitzender)', text: 'Welche regulatorischen Hebel erachten Sie angesichts der globalen Dimension für durchsetzbar?' },
        { speaker: 'Dr. Lindemann', text: 'Zwingend geboten ist eine lückenlose Verifikationspflicht sowie die Herkunftskennzeichnung synthetischer Medien.' }
      ],
      summary: {
        en: 'Experts testify before a parliamentary committee on counteracting AI-driven disinformation through algorithmic transparency and media literacy.',
        fa: 'کارشناسان در کمیته پارلمان درباره مقابله با کمپین‌های ضداطلاعاتی هوش مصنوعی از طریق شفافیت الگوریتمی و سواد رسانه‌ای شهادت می‌دهند.',
        prs: 'تحلیلگران در پارلمان روی راهکارهای مبارزه با اخبار جعلی و حفظ امنیت معلوماتی سخنرانی نمودند.',
        tr: 'Uzmanlar meclis komisyonunda yapay zeka kaynaklı dezenformasyona karşı şeffaflık ve medya okuryazarlığını savundu.',
        ar: 'يدلي الخبراء بشهاداتهم أمام لجنة برلمانية حول سبل التصدي لحملات التضليل المدفوعة بالذكاء الاصطناعي.',
        es: 'Expertos testifican en el parlamento sobre la lucha contra la desinformación algorítmica y la alfabetización mediática.'
      }
    },
    sectionA: {
      title: 'Mussawi A: Sprechen & Dialog',
      focus: 'Sprechen & Argumentieren (Medienkritik & Diskursethik)',
      description: {
        en: 'Formulate nuanced arguments on digital monopolies, platform governance, and journalistic responsibility.',
        fa: 'استدلال‌های ظریف و دانشگاهی درباره انحصارات دیجیتال، نظارت بر پلتفرم‌ها و مسئولیت رسانه‌ای.',
        prs: 'ارائه نظریات سنجیده درباره نقش شبکه‌های اجتماعی و اخلاق رسانه‌ای.',
        tr: 'Dijital tekeller, platform denetimi ve basın etiği üzerine derinlemesine argümanlar geliştirin.',
        ar: 'صياغة حجج رصينة حول الاحتكارات الرقمية، وحوكمة المنصات، والمسؤولية الصحفية.',
        es: 'Formula argumentos matizados sobre monopolios tecnológicos y ética periodística.'
      },
      content: 'Es bedarf einer differenzierten Güterabwägung zwischen Meinungsfreiheit und dem Schutz vor gezielter Manipulation.',
      audioText: 'Ungeachtet der technologischen Dynamik bleibt die journalistische Sorgfaltspflicht der unerschütterliche Eckpfeiler einer wehrhaften Demokratie.',
      practiceTasks: [
        'Diskutieren Sie über das Spannungsverhältnis zwischen Zensurvorwurf und Moderationspflicht.',
        'Verwenden Sie Konzepte wie "epistemische Schieflage", "Echokammern" und "diskursive Fragmentierung".'
      ]
    },
    sectionB: {
      title: 'Mussawi B: Wortschatz & Hören',
      focus: 'Hören & Wortschatz (Fachvortrag: Algorithmische Beeinflussung)',
      description: {
        en: 'Analyze complex spoken academic lectures discussing predictive algorithms and behavioral microtargeting.',
        fa: 'شنیدن و تحلیل سخنرانی تخصصی علمی پیرامون الگوریتم‌های پیش‌بینی و خردبرنامه‌ریزی رفتاری در رسانه‌ها.',
        prs: 'شنیدن و یادگیری اصطلاحات تخنیکی هوش مصنوعی و تاثیرات روانی آن بر افکار عامه.',
        tr: 'Tahmine dayalı algoritmalar ve davranışsal hedefleme üzerine akademik konferansları dinleyip çözümleyin.',
        ar: 'تحليل المحاضرات الأكاديمية المسموعة حول الخوارزميات التنبؤية والتوجيه السلوكي الدقيق.',
        es: 'Analiza conferencias académicas sobre algoritmos predictivos y microsegmentación conductual.'
      },
      content: 'Der Fachbeitrag dekonstruiert die Mechanismen der sogenannten "Aufmerksamkeitsökonomie".',
      audioTranscript: 'Die Monetarisierung digitaler Verweildauer führt unausweichlich dazu, dass polarisierende Affekte algorithmengetrieben verstärkt werden.',
      practiceTasks: [
        'Rekapitulieren Sie die Kernhypothese des Referenten in eigenen Worten.',
        'Extrahieren Sie Fachtermini wie "Affektökonomie", "Neuro-Marketing" und "Bestätigungsfehler".'
      ]
    },
    sectionC: {
      title: 'Mussawi C: Fachdialoge & Verhandlung',
      focus: 'Mündliche Interaktion (Konferenzgespräch über Plattformregulierung)',
      description: {
        en: 'Practice negotiating regulatory frameworks with multiple stakeholders holding conflicting economic and civil interests.',
        fa: 'تمرین مذاکره پیرامون قوانین نظارت بر پلتفرم‌ها میان طرف‌های متضاد تجاری و حقوق شهروندی.',
        prs: 'مذاکره روی چارچوب‌های قانونی برای پلتفرم‌های انترنتی با دیدگاه‌های مختلف.',
        tr: 'Farklı çıkar grupları arasında platform düzenlemelerine dair müzakere simülasyonu.',
        ar: 'ممارسة التفاوض حول الأطر التنظيمية بين أصحاب المصالح الاقتصادية والحقوق المدنية المتعارضة.',
        es: 'Simula la negociación de marcos regulatorios entre actores con intereses contrapuestos.'
      },
      content: 'Dialog zwischen Plattformbetreiber und Datenschutzbeauftragtem über transparente Empfehlungsalgorithmen.',
      audioTranscript: 'A: "Wir müssen die unternehmerische Freiheit zur Fortentwicklung proprietärer Algorithmen wahren." - B: "Gewiss, doch wo algorithmische Entscheidungen gesellschaftsrelevante Relevanzfilter setzen, greift die staatliche Kontrollpflicht."',
      practiceTasks: [
        'Nehmen Sie die Rolle der Regulierungsbehörde ein und entkräften Sie ökonomische Vorbehalte.',
        'Führen Sie Kompromissformeln ein ("unter der Prämisse, dass...", "vorbehaltlich einer unabhängigen Prüfung").'
      ]
    },
    sectionD: {
      title: 'Mussawi D: Textanalyse & Hermeneutik',
      focus: 'Lesen & Wissenschaftliche Dekonstruktion (Fachaufsatz zur digitalen Epistemologie)',
      description: {
        en: 'Deconstruct a high-density academic paper on knowledge production in the age of generative language models.',
        fa: 'تحلیل متن پژوهشی سنگین دانشگاهی پیرامون تولید دانش و اعتبار معرفت در عصر مدل‌های زبانی هوش مصنوعی.',
        prs: 'متن علمی عمیق درباره ارزش علم و تولید حقیقت در رسانه‌های جدید را بخوانید و تحلیل نمایید.',
        tr: 'Üretken dil modelleri çağında bilgi üretimi üzerine yoğun bir felsefi-akademik makaleyi tahlil edin.',
        ar: 'تفكيك مقال أكاديمي عميق حول إنتاج المعرفة ونظرية المعرفة في عصر الذكاء الاصطناعي.',
        es: 'Deconstruye un ensayo académico denso sobre epistemología y producción de conocimiento digital.'
      },
      readingText: {
        type: 'Wissenschaftlicher Fachaufsatz (Auszug)',
        title: 'Die Krise der Referenzialität in synthetischen Öffentlichkeiten',
        body: 'In dem Maße, wie generative KI-Systeme syntaktisch makellose, semantisch jedoch referenzlose Diskurse emittieren, erodiert das gesellschaftliche Fundament geteilter Fakten. Der Rezipient sieht sich einer Flut epistemischer Artefakte gegenüber, deren Validierung traditionelle hermeneutische Kompetenzen überfordert. Die fatale Konsequenz besteht nicht primär in der Täuschung durch Falschinformationen, sondern in einer generalisierten Skepsis, die jede empirische Wahrheit als potenziell fingiert diskreditiert.'
      },
      practiceTasks: [
        'Erläutern Sie den Begriff "Krise der Referenzialität" im Textkontext.',
        'Formulieren Sie Gegenargumente gegen den technologiepessimistischen Ansatz des Verfassers.'
      ]
    },
    sectionE: {
      title: 'Mussawi E: Grammatik & Stilistik',
      focus: 'Grammatik (Das Gerundivum: zu + Partizip I als modales Passivattribut)',
      description: {
        en: 'Master the gerundive structure ("die zu treffenden Maßnahmen") denoting passive necessity or possibility in C1 register.',
        fa: 'تسلط بر ساختار پیشرفته Gerundivum (صفت مفعولی با zu + Partizip I) برای بیان ضرورت یا امکان مجهول در سبک عالی دانشگاهی.',
        prs: 'آموختن ساختار عالی گرامری Gerundivum برای بیان ضرورت‌های اداری و علمی.',
        tr: 'C1 düzeyinde zorunluluk/olanak bildiren Gerundivum yapısında ("die zu treffenden Maßnahmen") ustalaşın.',
        ar: 'إتقان صياغة الـ Gerundivum الأكاديمية (zu + اسم الفاعل كصفة مجهولة دالة على الوجوب أو الإمكان).',
        es: 'Domina el gerundivo atributivo ("las medidas a tomar") que denota necesidad o posibilidad pasiva.'
      },
      grammarRule: {
        id: 'c1_1_gerundivum_rule',
        level: 'C1.1',
        germanTitle: 'Das Gerundivum (zu + Partizip I als attributives Adjektiv)',
        formula: 'Artikel + [zu + Partizip I + Adjektivendung] + Nomen',
        explanation: {
          en: 'The gerundive (zu + Partizip I with adjective ending) functions as an attributive passive construction expressing necessity ("must be done") or possibility ("can be done").',
          fa: 'گروندیووم (zu + صفت فاعلی با پسوند صفت) به عنوان صفت مجهول بیانگر ضرورت یا امکان‌پذیری عمل به کار می‌رود.',
          prs: 'ساختار گروندیووم بیانگر کارهایی است که باید یا می‌توانند به گونه مجهول انجام شوند.',
          tr: 'Gerundivum (zu + Partizip I), edilgen zorunluluk ("yapılması gereken") veya olasılık ("yapılabilen") bildiren bir sıfattır.',
          ar: 'يعمل الجرونديفوم (zu + اسم الفاعل بالنهاية الإعرابية) كصفة مبنية للمجهول تفيد الوجوب أو الإمكانية الأكاديمية.',
          es: 'El gerundivo atributivo con "zu" expresa necesidad o posibilidad en sentido pasivo ("que ha de realizarse").'
        },
        examples: [
          {
            german: 'Die unverzüglich zu ergreifenden Maßnahmen dulden keinen Aufschub.',
            formulaBreakdown: 'Die (Artikel) + zu ergreifenden (zu + Partizip I + -en) + Maßnahmen (Nomen).',
            literalTranslation: {
              en: 'The immediately to-be-taken measures brook no delay.',
              fa: 'تدابیری که بی‌درنگ باید اتخاذ شوند هیچ تعللی را برنمی‌تابند.',
              prs: 'اقداماتی که باید فوراً روی دست گرفته شوند تاخیر را قبول نمی‌کنند.',
              tr: 'Derhal alınması gereken önlemler gecikme kabul etmez.',
              ar: 'إن التدابير الواجب اتخاذها فوراً لا تحتمل أي تأجيل.',
              es: 'Las medidas que han de tomarse de inmediato no admiten dilación.'
            },
            fluentTranslation: {
              en: 'The measures that must be implemented immediately admit of no delay.',
              fa: 'اقداماتی که فوراً باید به مرحله اجرا درآیند مجالی برای تاخیر باقی نمی‌گذارند.',
              prs: 'تدابیر عاجلی که ضرورت اتخاذ دارند هرگز نباید به تاخیر بیفتند.',
              tr: 'Vakit kaybetmeksizin uygulanması gereken tedbirler asla ertelenemez.',
              ar: 'إن الإجراءات المتعين تنفيذها دون إبطاء لا تقبل أي تسويف أو تأخير.',
              es: 'Las medidas que deben adoptarse con urgencia no admiten demora alguna.'
            }
          }
        ]
      },
      practiceTasks: [
        'Formen Sie Relativsätze mit "müssen/können + Passiv" in attributive Gerundiva um.',
        'Achten Sie auf die korrekte Deklination der Adjektivendungen nach bestimmtem/unbestimmtem Artikel.'
      ]
    },
    vocabularies: [
      { id: 'c1_1_v10', word: 'die Echokammer', article: 'die', plural: 'die Echokammern', ipa: '/ˈɛçoˌkamɐ/', translation: { en: 'echo chamber', fa: 'اتاق پژواک (فضای بسته تکرار عقاید)', prs: 'فضای مجازی تکرار افکار همگون', tr: 'yankı odası', ar: 'غرفة الصدى الفكري', es: 'cámara de eco' } },
      { id: 'c1_1_v11', word: 'die Referenzialität', article: 'die', plural: '-', ipa: '/ʁefeʁɛntsi̯aliˈtɛːt/', translation: { en: 'referentiality', fa: 'ارجاع‌پذیری به واقعیت عینی', prs: 'توانایی ارجاع به حقیقت بیرونی', tr: 'göndergesellik', ar: 'الإحالية / الارتباط بمرجع حقيقي', es: 'referencialidad' } },
      { id: 'c1_1_v12', word: 'kontraproduktiv', article: '', plural: '-', ipa: '/ˈkɔntʁapʁodʊkˌtiːf/', translation: { en: 'counterproductive', fa: 'نتیجه معکوس‌دهنده / نامطلوب', prs: 'دارای اثر منفی و برعکس', tr: 'ters etki yaratan', ar: 'ذو أثر عكسي وغير مجدٍ', es: 'contraproducente' } },
      { id: 'c1_1_v13', word: 'die Desinformation', article: 'die', plural: 'die Desinformationen', ipa: '/ˌdɛsʔɪnfɔʁmaˈtsi̯oːn/', translation: { en: 'disinformation', fa: 'اطلاعات گمراه‌کننده هدفمند', prs: 'معلومات نادرست عمدی', tr: 'dezenformasyon', ar: 'التضليل الإعلامي الممنهج', es: 'desinformación' } }
    ],
    exercises: [
      {
        id: 'ex_c1_1_4_a',
        type: 'multiple_choice',
        instruction: {
          en: 'Transform the relative clause with passive modal into an attributive gerundive.',
          fa: 'جمله موصولی مجهول را به ساختار صفت مفعولی با Gerundivum (zu + Partizip I) تبدیل کنید.',
          prs: 'جمله وصلی مجهول را به ساختار مختصر Gerundivum تبدیل نمایید.',
          tr: 'Edilgen modal yapılı ilgi cümlesini Gerundivum tamlamasına dönüştürün.',
          ar: 'حول جملة الصلة المبنية للمجهول الدالة على الوجوب إلى صفة Gerundivum.',
          es: 'Convierte la oración de relativo pasiva en un gerundivo atributivo.'
        },
        prompt: 'Formen Sie um: "Wir analysieren die Thesen, die noch zu belegen sind."',
        options: [
          'Wir analysieren die noch zu belegenden Thesen.',
          'Wir analysieren die noch belegte Thesen.',
          'Wir analysieren die Thesen zu belegen.',
          'Wir analysieren die noch belegbare Thesen.'
        ],
        correctAnswer: 'Wir analysieren die noch zu belegenden Thesen.',
        explanation: {
          en: 'Gerundive construction: "die" (article) + "noch zu belegenden" (zu + stem + end + adj ending -en) + "Thesen" (noun).',
          fa: 'ترکیب Gerundivum: آرتیکل (die) + قید (noch) + zu + ریشه فعل (beleg) + پسوند صفت فاعلی (end) + پسوند ملکی/مفعولی جمع (en) قبل از اسم.',
          prs: 'طرز ساخت: zu همراه با ریشه فعل و پسوند end و تطابق گرامری با اسم جمع.',
          tr: 'Formül: Artikel + "zu" + fiil kökü + "-end" + sıfat çekim eki + isim.',
          ar: 'الصياغة: الأداة + zu + جذر الفعل + end + علامة إعراب الصفة + الاسم الموصوف.',
          es: 'Estructura: artículo + adverbio + "zu" + participio I con desinencia adjetival + sustantivo.'
        }
      },
      {
        id: 'ex_c1_1_4_b',
        type: 'fill_blank',
        instruction: {
          en: 'Insert the appropriate academic modal particle/adverb.',
          fa: 'قید وجهی علمی مناسب را در جای خالی قرار دهید.',
          prs: 'قید مناسب موضع‌گیری علمی را جاگذاری کنید.',
          tr: 'Akademik metne uygun niteleyici zarfı yerleştirin.',
          ar: 'ضع الظرف الدال على الموقف المعرفي المناسب في السياق.',
          es: 'Inserta el adverbio modal académico adecuado.'
        },
        prompt: 'Die vorgebrachten Bedenken sind _______ verständlich, entbehren jedoch einer empirischen Evidenzbasis.',
        options: [
          'zwar',
          'dennoch',
          'folglich',
          'insofern'
        ],
        correctAnswer: 'zwar',
        explanation: {
          en: '"Zwar ... jedoch/aber" is the canonical double connector for granting a point before refuting it.',
          fa: 'ترکیب دوگانه "zwar ... jedoch" (گرچه ... اما با وجود این) ساختار کلاسیک امتیازدهی اولیه و سپس ابطال ادعاست.',
          prs: 'ترکیب zwar ... jedoch برای بیان تایید اولیه و سپس آوردن نقد قوی استفاده می‌شود.',
          tr: '"Zwar ... jedoch" ikili bağlacı, bir iddiayı kısmen kabul edip hemen ardından çürütmek için kullanılır.',
          ar: 'الرابط المزدوج "zwar ... jedoch" (وإن كان كذا ... إلا أن) يُستخدم للتسليم الأولي قبل تقديم الدحض القاطع.',
          es: '"Zwar ... jedoch" estructura la concesión previa a la objeción principal en el debate formal.'
        }
      },
      {
        id: 'ex_c1_1_4_c',
        type: 'multiple_choice',
        instruction: {
          en: 'Identify the meaning of the academic idiom "in Abrede stellen".',
          fa: 'معنی دقیق اصطلاح عالی دانشگاهی "etwas in Abrede stellen" را مشخص کنید.',
          prs: 'مفهوم اصطلاح علمی in Abrede stellen را برگزینید.',
          tr: '"etwas in Abrede stellen" deyiminin anlamını seçin.',
          ar: 'حدد المعنى الدقيق للتعبير الاصطلاحي الأكاديمي "etwas in Abrede stellen".',
          es: 'Identifica el significado de la locución académica "etwas in Abrede stellen".'
        },
        prompt: 'Was bedeutet der Ausdruck: "Niemand stellt die Dringlichkeit der Maßnahme in Abrede"?',
        options: [
          'Niemand leugnet oder bestreitet die Dringlichkeit.',
          'Niemand stimmt der Dringlichkeit zu.',
          'Niemand verhandelt über die Dringlichkeit.',
          'Niemand kann die Dringlichkeit finanzieren.'
        ],
        correctAnswer: 'Niemand leugnet oder bestreitet die Dringlichkeit.',
        explanation: {
          en: '"etwas in Abrede stellen" is a formal C1/C2 Nomen-Verb-Verbindung meaning "etwas leugnen / bestreiten" (to deny / dispute something).',
          fa: 'اصطلاح رسمی "etwas in Abrede stellen" دقیقاً به معنای انکار کردن یا زیر سوال بردن چیزی (etwas bestreiten/leugnen) است.',
          prs: 'این ترکیب رسمی به معنای انکار کردن یک واقعیت یا ضرورت می‌باشد.',
          tr: '"etwas in Abrede stellen", bir şeyi inkar etmek veya tartışmaya açmak anlamına gelen üst düzey bir deyimdir.',
          ar: 'التركيب "etwas in Abrede stellen" يعني إنكار الشيء أو التشكيك في صحته (ينفي / يدحض).',
          es: '"etwas in Abrede stellen" es una construcción nominal que significa negar o poner en duda algo.'
        }
      },
      {
        id: 'ex_c1_1_4_d',
        type: 'sentence_reorder',
        instruction: {
          en: 'Reconstruct the academic sentence with prepositional phrase in Vorfeld.',
          fa: 'جمله علمی را با عبارت حرف اضافه‌ای در جایگاه مقدم مرتب کنید.',
          prs: 'اجزای جمله علمی را به ترتیب ساختار نحوی پیشرفته مرتب نمایید.',
          tr: 'Cümleyi kurallı C1 sözdizimine göre sıralayınız.',
          ar: 'رتب عناصر الجملة الأكاديمية ترتيبًا تركيبيًا سليمًا.',
          es: 'Ordena la oración académica con el sintagma preposicional al inicio.'
        },
        prompt: 'Bringen Sie die Satzglieder in die korrekte C1-Reihenfolge:',
        options: [
          'Ungeachtet aller regulatorischen Bestrebungen',
          'vollzieht sich der Medienwandel',
          'mit beispielloser Geschwindigkeit',
          'auf globaler Ebene.'
        ],
        correctAnswer: [
          'Ungeachtet aller regulatorischen Bestrebungen',
          'vollzieht sich der Medienwandel',
          'mit beispielloser Geschwindigkeit',
          'auf globaler Ebene.'
        ],
        explanation: {
          en: 'Syntactic flow: Fronted genitive prepositional phrase ("Ungeachtet aller..."), reflexive verb in V2 ("vollzieht sich"), subject ("der Medienwandel"), modal adjunct, local adjunct.',
          fa: 'ترتیب ساختاری: عبارت حرف اضافه با حالت ملکی، فعل انعکاسی در جایگاه دوم، فاعل، قید کیفیت، قید مکان.',
          prs: 'ترتیب فکری و نحوی جملات پیشرفته: عبارت اضافه ملکی، فعل، فاعل و قیود.',
          tr: 'C1 sözdizimi: Başta Genitiv edat öbeği, ardından dönüşlü fiil, özne ve belirteçler.',
          ar: 'التراكيب النحوية لـ C1: شبه جملة حرف الجر أولاً، ثم الفعل الانعكاسي، ثم الفاعل، فالمفعولات والظروف.',
          es: 'Sintaxis formal: sintagma preposicional concesivo en posición 1, verbo reflexivo en posición 2, sujeto y complementos.'
        }
      }
    ]
  }
  ,
  {
    id: 'c1_1_lek5',
    lektionNumber: 5,
    level: 'C1.1',
    title: 'Kognitionswissenschaft, Neurobiologie und Lebenslanges Lernen',
    subTitle: 'Synaptische Plastizität, Kognitionsarchitektur und diskursive Konditionalsätze (C1 Niveau)',
    topic: 'Neurodidaktik, Gedächtnisforschung und epistemische Argumentationsmuster',
    fotoHoergeschichte: {
      title: 'Foto-Hörgeschichte: Max-Planck-Institut für Kognitions- und Neurowissenschaften',
      imagePrompt: 'A cutting-edge neuroscience laboratory with neuroimaging displays and researchers discussing brain plasticity and adult learning curves.',
      imageTheme: 'Neurowissenschaftliche Forschung',
      audioDuration: '03:30',
      transcript: [
        { speaker: 'Prof. Dr. Roth', text: 'Die Annahme, dass die adulte neuronale Plastizität ab einem gewissen Alter irreversibel stagniere, gilt in der modernen Neurobiologie als widerlegt.' },
        { speaker: 'Dr. Meisner', text: 'In der Tat: Gezielte kognitive Reize stimulieren die Neurogenese bis ins hohe Senium, vorausgesetzt, die Lernumgebung ist hinreichend stimulativ.' },
        { speaker: 'Prof. Dr. Roth', text: 'Dies erfordert jedoch eine grundlegende Neuausrichtung unserer berufsbiografischen Weiterbildungsmodelle.' }
      ],
      summary: {
        en: 'Neuroscientists at the Max Planck Institute discuss adult neuroplasticity and its transformative implications for lifelong learning paradigms.',
        fa: 'دانشمندان علوم اعصاب در مؤسسه ماکس پلانک انعطاف‌پذیری عصبی بزرگسالان و پیامدهای شگرف آن در یادگیری مادام‌العمر را بررسی می‌کنند.',
        prs: 'محققان علوم مغز و اعصاب اثبات کردند که مغز انسان در هر سن توانایی یادگیری و تشکیل سیناپس‌های جدید را دارد.',
        tr: 'Max Planck Enstitüsü nörologları yetişkin nöroplastisitesi ve yaşam boyu öğrenme modelleri üzerine yeni bulguları tartışıyor.',
        ar: 'يناقش علماء الأعصاب في معهد ماكس بلانك المرونة العصبية لدى البالغين وانعكاساتها على التعلم مدى الحياة.',
        es: 'Neurocientíficos del Instituto Max Planck debaten sobre la plasticidad neuronal adulta y el aprendizaje continuo.'
      }
    },
    sectionA: {
      title: 'Mussawi A: Sprechen & Dialog',
      focus: 'Sprechen & Erörtern (Kognitive Leistungsfähigkeit & Lernpsychologie)',
      description: {
        en: 'Debate memory retention strategies, cognitive load theory, and neurodidactic advancements.',
        fa: 'بحث پیرامون راهبردهای تثبیت حافظه، نظریه بار شناختی و پیشرفت‌های عصب‌آموزش.',
        prs: 'ارائه تحلیل‌های علمی درباره نحوه یادگیری عمیق و تقویت حافظه.',
        tr: 'Bellek tutma stratejileri, bilişsel yük kuramı ve nörodidaktik gelişmeler üzerine münazara.',
        ar: 'مناقشة استراتيجيات تثبيت الذاكرة ونظرية الحمل المعرفي والمستجدات العصبية التعليمية.',
        es: 'Debate sobre retención de memoria, teoría de la carga cognitiva y neurodidáctica.'
      },
      content: 'Aus kognitionspsychologischer Warte lässt sich konstatieren, dass multisensorische Reize die synaptische Verankerung signifikant festigen.',
      audioText: 'Es steht außer Zweifel, dass emotionale Resonanz ein unverzichtbarer Katalysator für tiefenstrukturelles Behalten darstellt.',
      practiceTasks: [
        'Diskutieren Sie über den Nutzen und die Grenzen von Nootropika und kognitiven Trainingsprogrammen.',
        'Verwenden Sie idiomatische C1-Wendungen wie "ins Gewicht fallen", "Aufschluss geben über" und "im Widerspruch stehen zu".'
      ]
    },
    sectionB: {
      title: 'Mussawi B: Wortschatz & Hören',
      focus: 'Hören & Fachterminologie (Interview mit einer Gedächtnisforscherin)',
      description: {
        en: 'Comprehend complex audio interviews detailing neurotransmitters, synaptic pruning, and memory consolidation.',
        fa: 'درک مصاحبه صوتی تخصصی پیرامون انتقال‌دهنده‌های عصبی، هرس سیناپسی و تثبیت حافظه بلندمدت.',
        prs: 'شنیدن پادکست علمی درباره فعالیت‌های مغزی هنگام یادگیری زبان دوم.',
        tr: 'Nörotransmitterler ve bellek konsolidasyonu üzerine uzman mülakatını dinleyin.',
        ar: 'الاستماع لمقابلة متخصصة حول النواقل العصبية وتثبيت الذاكرة وتفكيك مفاهيمها المعقدة.',
        es: 'Comprende entrevistas técnicas sobre neurotransmisores y consolidación de la memoria.'
      },
      content: 'Wissenschaftliches Audiofeature: Wie Schlaf die Konsolidierung deklarativen Wissens steuert.',
      audioTranscript: 'Während der Tiefschlafphasen werden hippocampale Gedächtnisinhalte sukzessive in neokortikale Netzwerke transferiert, wodurch das Gelernte resistent gegen retroaktive Interferenzen wird.',
      practiceTasks: [
        'Fassen Sie den biochemischen Prozess der Wissenskonsolidierung stichpunktartig zusammen.',
        'Erläutern Sie die Begriffe "deklaratives Gedächtnis" und "retroaktive Interferenz".'
      ]
    },
    sectionC: {
      title: 'Mussawi C: Fachdialoge & Wissenschaftsberatung',
      focus: 'Mündliche Interaktion (Konzeption eines universitären Lehrplans)',
      description: {
        en: 'Formulate policy proposals balancing curricular density and self-directed cognitive consolidation periods.',
        fa: 'طراحی برنامه‌های آموزشی دانشگاهی با ایجاد تعادل میان تراکم سرفصل‌ها و دوره‌های تثبیت شناختی دانشجو.',
        prs: 'طراحی مشترک کریکولم درسی پوهنتون با در نظر داشت ظرفیت ذهنی محصلین.',
        tr: 'Müfredat yoğunluğu ve bilişsel pekiştirme süreleri arasında denge kuran politika önerileri geliştirin.',
        ar: 'صياغة مقترحات للمناهج الجامعية توازن بين كثافة المحتوى وفترات الاستيعاب الذاتي.',
        es: 'Diseña propuestas curriculares equilibrando densidad temática y asimilación cognitiva.'
      },
      content: 'Arbeitsgespräch zwischen Studiendekan und Hochschuldidaktiker.',
      audioTranscript: 'A: "Eine Reduktion der Präsenzzeiten ist unumgänglich, um Raum für elaborative Lernprozesse zu schaffen." - B: "Dem stimme ich bei, sofern wir strukturierte Mentoringprogramme flankierend etablieren."',
      practiceTasks: [
        'Unterbreiten Sie eigene Vorschläge zur Reform von Prüfungsformaten.',
        'Wenden Sie verfeinerte Diskurskonnektoren an: "Vor diesem Hintergrund drängt sich die Frage auf...", "Es empfiehlt sich mithin...".'
      ]
    },
    sectionD: {
      title: 'Mussawi D: Textanalyse & Methodenkritik',
      focus: 'Lesen & Wissenschaftliche Dekonstruktion (Meta-Studie zur Lernbiologie)',
      description: {
        en: 'Analyze an academic meta-review critiquing popular myths regarding learning styles and hemispheric dominance.',
        fa: 'تحلیل انتقادی یک فراتحلیل دانشگاهی در ابطال افسانه‌های عامیانه یادگیری (سبک‌های یادگیری شنیداری/دیداری و غلبه نیمکره‌های مغز).',
        prs: 'خواندن مقاله انتقادی علمی درباره رد فرضیه‌های غیرعلمی سبک‌های آموزشی.',
        tr: 'Öğrenme stilleri ve beyin lobları hakkındaki popüler mitleri çürüten akademik meta-analizi inceleyin.',
        ar: 'تحليل دراسة مراجعة منهجية تفكك الأساطير الشائعة حول أنماط التعلم والسيادة الدماغية.',
        es: 'Analiza un meta-análisis académico que refuta los mitos sobre estilos de aprendizaje.'
      },
      readingText: {
        type: 'Meta-Analyse (Fachzeitschrift für Kognitive Didaktik)',
        title: 'Die Persistenz neurodidaktischer Mythen in der pädagogischen Praxis',
        body: 'Trotz wiederholter empirischer Falsifikation erfreut sich die Klassifizierung von Lernenden in distinkte sensorische "Lerntypen" (visuell, auditiv, haptisch) ungebrochener Popularität. Wissenschaftlich fundierte Befunde belegen indessen, dass Lernleistungen primär durch Vorwissensstrukturen, kognitive Strategiekompetenz und themenbezogene Motivation determiniert werden. Die didaktische Fokussierung auf angebliche Hemisphärendominanzen führt mithin nicht zu individueller Förderung, sondern begünstigt eine unproduktive Stereotypisierung kognitiver Potenziale.'
      },
      practiceTasks: [
        'Dekonstruieren Sie die Argumentationskette des Autors gegen die "Lerntypen-Theorie".',
        'Definieren Sie, was laut Text die tatsächlichen Determinanten von Lernleistungen sind.'
      ]
    },
    sectionE: {
      title: 'Mussawi E: Grammatik & Syntaktische Verdichtung',
      focus: 'Grammatik (Konditionale Gefüge ohne "wenn" mit Spitzenstellung des Verbs)',
      description: {
        en: 'Master hypothetical and conditional clauses formed via V1 verb fronting ("Sollte ... eintreten, so...") in high-level written German.',
        fa: 'تسلط بر جملات شرطی فرضی بدون حرف ربط wenn از طریق قرار دادن فعل در ابتدای جمله (Spitzenstellung) در سبک عالی نوشتاری آلمانی.',
        prs: 'یادگیری جملات شرطی رسمی بدون wenn با قرار دادن فعل در موقعیت اول.',
        tr: '"Wenn" olmadan, fiilin en başta yer aldığı (V1) üst düzey şart cümlelerinde ustalaşın ("Sollte ... so...").',
        ar: 'إتقان صياغة الجمل الشرطية الافتراضية بدون "wenn" عبر تصدير الفعل للموقع الأول (V1).',
        es: 'Domina las oraciones condicionales sin "wenn" con verbo en posición inicial (V1).'
      },
      grammarRule: {
        id: 'c1_1_konditional_inversion_rule',
        level: 'C1.1',
        germanTitle: 'Konditionalsätze mit Spitzenstellung des finiten Verbs (uneingeleitet)',
        formula: 'Verb (Pos. 1) + Subjekt + (...), [so / dann] + finites Verb + Subjekt',
        explanation: {
          en: 'In elevated German, conditional clauses can be formed without "wenn" by placing the finite verb in Position 1.',
          fa: 'در زبان فاخر آلمانی، جملات شرطی را می‌توان بدون "wenn" و با انتقال فعل صرف‌شده به جایگاه اول ساخت.',
          prs: 'جملات شرطی بدون wenn با انتقال فعل به ابتدای جمله.',
          tr: 'Yetkin Almancada koşul cümleleri "wenn" olmaksızın çekimli fiilin 1. pozisyona getirilmesiyle kurulur.',
          ar: 'في الأسلوب الراقي تصاغ الجمل الشرطية دون أداة شرط بوضع الفعل المصرف في صدارة الجملة.',
          es: 'En el registro culto las oraciones condicionales prescinden de "wenn" situando el verbo conjugado en posición 1.'
        },
        examples: [
          {
            german: 'Erweist sich die Hypothese als zutreffend, so erfordert dies ein Umdenken der Grundlagenforschung.',
            formulaBreakdown: 'Erweist sich (Verb Pos. 1) + die Hypothese (Subjekt) + , so erfordert (Verb Pos. 2) + dies.',
            literalTranslation: {
              en: 'Proves itself the hypothesis as correct, so requires this a rethinking of basic research.',
              fa: 'اگر فرضیه درست از آب درآید، این امر مستلزم بازنگری در تحقیقات بنیادی است.',
              prs: 'اگر فرضیه درست ثابت شود، نیاز به بازنگری در پژوهش‌های بنیادی است.',
              tr: 'Hipotezin doğru olduğu kanıtlanırsa, bu temel araştırmalarda bir paradigma değişimini gerektirir.',
              ar: 'إن ثبتت صحة الفرضية، فإن ذلك يتطلب إعادة نظر شاملة في الأبحاث الأساسية.',
              es: 'De revelarse certera la hipótesis, ello exigirá un replanteamiento de la investigación básica.'
            },
            fluentTranslation: {
              en: 'Should the hypothesis prove correct, fundamental research will require comprehensive reassessment.',
              fa: 'چنانچه صحت فرضیه به اثبات رسد، پژوهش‌های بنیادین دستخوش بازنگری اساسی خواهند شد.',
              prs: 'در صورت اثبات فرضیه، بازبینی همه‌جانبه در تحقیقات بنیادی الزامی خواهد بود.',
              tr: 'Varsayımın doğrulanması durumunda, temel araştırmaların bütünüyle yeniden değerlendirilmesi zorunlu hale gelecektir.',
              ar: 'إذا ما ثبتت وجاهة الفرضية العلمية، فسيفرض ذلك حتماً مراجعة جذرية لمسلمات الأبحاث التأسيسية.',
              es: 'En el supuesto de confirmarse la hipótesis, la investigación básica habrá de someterse a una reconsideración radical.'
            }
          }
        ]
      },
      practiceTasks: [
        'Formen Sie Standardkonditionalsätze mit "wenn" in formelle Gefüge mit Verbspitzenstellung um.',
        'Konstruieren Sie Sätze mit "Sollte...", "Wäre...", "Hätte..." und "Erwiese sich...".'
      ]
    },
    vocabularies: [
      { id: 'c1_1_v14', word: 'die Neuroplastizität', article: 'die', plural: '-', ipa: '/ˈnɔɪ̯ʁoplastitsiˌtɛːt/', translation: { en: 'neuroplasticity', fa: 'انعطاف‌پذیری سیناپسی مغز', prs: 'پلاستیسیته عصبی و شکل‌پذیری مغز', tr: 'nöroplastisite', ar: 'المرونة العصبية الدماغية', es: 'neuroplasticidad' } },
      { id: 'c1_1_v15', word: 'die Konsolidierung', article: 'die', plural: 'die Konsolidierungen', ipa: '/kɔnzoliˈdiːʁʊŋ/', translation: { en: 'consolidation / stabilization', fa: 'تثبیت و پایدارسازی حافظه یا ساختار', prs: 'تحکیم و پایدارسازی معلومات در ذهن', tr: 'pekiştirme / konsolidasyon', ar: 'التثبيت / الترسخ', es: 'consolidación' } },
      { id: 'c1_1_v16', word: 'die Falsifikation', article: 'die', plural: 'die Falsifikationen', ipa: '/falzifikaˈtsi̯oːn/', translation: { en: 'falsification / disproof', fa: 'ابطال‌پذیری و ابطال تجربی علمی', prs: 'اثبات بطلان فرضیه علمی', tr: 'yanlışlama', ar: 'التكذيب التجريبي / دحض الفرضية', es: 'falsación / refutación empírica' } }
    ],
    exercises: [
      {
        id: 'ex_c1_1_5_a',
        type: 'multiple_choice',
        instruction: {
          en: 'Transform the "wenn"-clause into a formal conditional clause with fronted verb (V1).',
          fa: 'جمله شرطی را با ساختار رسمی دانشگاهی با قرار دادن فعل در موقعیت اول بازنویسی کنید.',
          prs: 'جمله شرطی را بدون wenn و با آوردن فعل در آغاز جمله تبدیل نمایید.',
          tr: '"Wenn" bağlaçlı cümleyi fiili başa alarak üst düzey şart yapısına dönüştürün.',
          ar: 'حول الجملة الشرطية المبدوءة بـ "wenn" إلى صيغة أكاديمية بتصدير الفعل (V1).',
          es: 'Transforma la oración condicional con "wenn" en una estructura formal con verbo inicial.'
        },
        prompt: 'Formen Sie um: "Wenn sich diese Annahme als trügerisch erweist, müssen die Richtlinien revidiert werden."',
        options: [
          'Erweist sich diese Annahme als trügerisch, so müssen die Richtlinien revidiert werden.',
          'Als trügerisch diese Annahme erweist, müssen die Richtlinien revidiert werden.',
          'Erweist diese Annahme sich trügerisch wenn, so müssen die Richtlinien revidiert werden.',
          'Diese Annahme erweist sich als trügerisch, so revidiert werden müssen Richtlinien.'
        ],
        correctAnswer: 'Erweist sich diese Annahme als trügerisch, so müssen die Richtlinien revidiert werden.',
        explanation: {
          en: 'Fronting the conjugated verb "Erweist sich" replaces the conjunction "Wenn". In the main clause, the correlative "so" introduces the result.',
          fa: 'با قرار دادن فعل صرف‌شده "Erweist sich" در ابتدای جمله، حرف ربط "Wenn" حذف شده و در جمله اصلی معمولاً "so" پیش از فعل اصلی می‌آید.',
          prs: 'فعل صرف‌شده در مقام اول قرار گرفته و در جواب شرط کلمه so اضافه می‌شود.',
          tr: 'Çekimli fiil "Erweist sich" başa gelerek "Wenn" bağlacının yerini alır, ana cümleye "so" ile başlanır.',
          ar: 'تصدير الفعل المتصرف "Erweist sich" يغني عن أداة الشرط "Wenn"، وتبدأ جملة جواب الشرط بالرابط "so".',
          es: 'El verbo conjugado en posición inicial reemplaza a "wenn", y la apódosis se introduce elegantemente con "so".'
        }
      },
      {
        id: 'ex_c1_1_5_b',
        type: 'fill_blank',
        instruction: {
          en: 'Insert the appropriate academic verb expressing refutation.',
          fa: 'فعل علمی مناسب به معنای «ابطال کردن / رد ادعا با شواهد عینی» را جاگذاری کنید.',
          prs: 'فعل مناسب برای رد ادعای علمی را برگزینید.',
          tr: 'Bilimsel çürütme bildiren uygun fiili yerleştirin.',
          ar: 'ضع الفعل الأكاديمي الدال على دحض وتكذيب الفرضية علميًا.',
          es: 'Inserta el verbo académico que expresa refutación.'
        },
        prompt: 'Neuere empirische Studien konnten die tradierte Lehrmeinung stichhaltig _______.',
        options: [
          'widerlegen',
          'verharmlosen',
          'nachahmen',
          'beschwichtigen'
        ],
        correctAnswer: 'widerlegen',
        explanation: {
          en: '"etwas widerlegen" means to conclusively refute or disprove a scientific claim through empirical arguments.',
          fa: '"etwas widerlegen" به معنای ابطال و نقض مستدل و قاطع یک فرضیه با استدلال علمی است.',
          prs: 'فعل widerlegen یعنی با شواهد قوی علمی چیزی را باطل ساختن.',
          tr: '"etwas widerlegen", bir iddiayı kanıtlarla çürütmek demektir.',
          ar: 'الفعل "widerlegen" يعني دحض المزاعم وتفنيدها تفنيدًا علميًا قاطعًا.',
          es: '"widerlegen" significa refutar o desmentir sólidamente una tesis con argumentos empíricos.'
        }
      },
      {
        id: 'ex_c1_1_5_c',
        type: 'sentence_reorder',
        instruction: {
          en: 'Reorder the components into an academic sentence emphasizing cognitive load.',
          fa: 'اجزای جمله را با تأکید بر بار شناختی مرتب کنید.',
          prs: 'جمله را بر اساس ساختار علمی استاندارد مرتب سازید.',
          tr: 'Kelimeleri kurallı bir akademik cümleye dönüştürün.',
          ar: 'رتب الكلمات لتكوين جملة أكاديمية ذات ترابط سليم.',
          es: 'Ordena los elementos formando una oración académica coherente.'
        },
        prompt: 'Bringen Sie die Satzglieder in die korrekte Reihenfolge:',
        options: [
          'Eine übermäßige Informationsdichte',
          'überfordert die kognitive Kapazität',
          'des menschlichen Arbeitsgedächtnisses',
          'nachweislich.'
        ],
        correctAnswer: [
          'Eine übermäßige Informationsdichte',
          'überfordert die kognitive Kapazität',
          'des menschlichen Arbeitsgedächtnisses',
          'nachweislich.'
        ],
        explanation: {
          en: 'Subject ("Eine übermäßige Informationsdichte"), transitive verb ("überfordert"), direct object with genitive attribute ("die kognitive Kapazität des menschlichen Arbeitsgedächtnisses"), adverbial adjunct ("nachweislich").',
          fa: 'فاعل، فعل متعدی، مفعول به همراه مضاف‌الیه، و قید کیفیت در پایان.',
          prs: 'ترتیب درست: فاعل، فعل، مفعول با مضاف‌الیه و قید اثبات‌شده.',
          tr: 'Özne, geçişli fiil, Genitiv tamlamalı nesne ve zarf.',
          ar: 'الفاعل، الفعل المتعدي، المفعول به مع المضاف إليه، والظرف الدال على البرهان.',
          es: 'Sujeto, verbo transitivo, objeto directo con genitivo explicativo y adverbio modal final.'
        }
      }
    ]
  },
  {
    id: 'c1_1_lek6',
    lektionNumber: 6,
    level: 'C1.1',
    title: 'Urbane Transformation, Zukunftsarchitektur und Post-Fossile Mobilität',
    subTitle: 'Klimaresiliente Städte, Raumsoziologie und modale Konzessivsätze (C1 Niveau)',
    topic: 'Stadtplanung, Dekarbonisierung und soziologische Raumanalysen',
    fotoHoergeschichte: {
      title: 'Foto-Hörgeschichte: Internationaler Stadtbaukongress im Holz-Hochhaus "Roots" in Hamburg',
      imagePrompt: 'A timber skyscraper in Hamburg HafenCity where urban architects, civil engineers, and environmental sociologists present scale models of sponge cities.',
      imageTheme: 'Nachhaltige Stadtentwicklung',
      audioDuration: '03:40',
      transcript: [
        { speaker: 'Architektin Elena Vance', text: 'Die Transformation unserer Ballungsräume zur "Schwammstadt" ist keine utopische Vision mehr, sondern eine baufachliche Notwendigkeit zur Bewältigung von Starkregenereignissen.' },
        { speaker: 'Prof. Klinkhammer', text: 'Gleichwohl stellt die thermische Sanierung im Bestand historische Baudenkmäler vor erhebliche denkmalpflegerische Friktionen.' },
        { speaker: 'Elena Vance', text: 'Hierfür bedarf es innovativer biomimetischer Dämmstoffe, die ökologische Effizienz mit denkmalgerechter Ästhetik harmonisieren.' }
      ],
      summary: {
        en: 'Urban planners and architects in Hamburg debate resilient "sponge city" infrastructure and biomimetic building materials.',
        fa: 'برنامه‌ریزان شهری و معماران در هامبورگ بر سر زیرساخت‌های شهر اسفنجی و مصالح ساختمانی الهام‌گرفته از طبیعت به بحث پرداخته‌اند.',
        prs: 'بحث معماران برجسته درباره تبدیل شهرهای بزرگ به شهرهای تاب‌آور در برابر تغییرات اقلیمی.',
        tr: 'Şehir plancıları ve mimarlar Hamburg\'da "sünger şehir" konseptini ve biyomimetik yapı malzemelerini tartışıyor.',
        ar: 'يناقش المخططون المعماريون في هامبورغ تحويل المدن إلى مدن إسفنجية قادرة على الصمود في وجه التغير المناخي.',
        es: 'Urbanistas debaten en Hamburgo sobre ciudades esponja e innovaciones biomiméticas.'
      }
    },
    sectionA: {
      title: 'Mussawi A: Sprechen & Fachdiskurs',
      focus: 'Sprechen & Verhandeln (Urbane Resilienz & Verkehrsdemokratie)',
      description: {
        en: 'Deliver analytical presentations on post-car city centres, 15-minute neighbourhoods, and spatial justice.',
        fa: 'ارائه سخنرانی‌های تحلیلی درباره شهرهای بدون اتومبیل، محله‌های ۱۵ دقیقه‌ای و عدالت فضایی.',
        prs: 'صحبت درباره شهرهای مدرن و سیستم‌های ترانسپورت عامه پیشرفته.',
        tr: 'Araba merkezli olmayan şehirler, 15 dakikalık mahalleler ve mekânsal adalet üzerine sunum yapın.',
        ar: 'تقديم عروض تحليلية حول مدن المشاة، وأحياء الـ 15 دقيقة، والعدالة المكانية.',
        es: 'Presenta ponencias sobre centros urbanos peatonales y justicia espacial.'
      },
      content: 'Aus raumsoziologischer Perspektive impliziert die Privilegierung des motorisierten Individualverkehrs eine gravierende Benachteiligung vulnerabler Bevölkerungsgruppen.',
      audioText: 'Es gilt, den öffentlichen Raum als Gemeingut wiederzubeleben, anstatt ihn der Dominanz ruhenden Verkehrs zu opfern.',
      practiceTasks: [
        'Diskutieren Sie über das Für und Wider einer City-Maut nach Londoner Vorbild.',
        'Wenden Sie Redemittel an: "Es sei daran erinnert, dass...", "Dies wirft ein Schlaglicht auf...", "Daraus erhellt, dass...".'
      ]
    },
    sectionB: {
      title: 'Mussawi B: Wortschatz & Fachlexik',
      focus: 'Hören & Wortschatz (Interview zur zirkulären Bauwirtschaft)',
      description: {
        en: 'Understand spoken discussions on cradle-to-cradle architecture, grey energy, and circular economy in construction.',
        fa: 'فهم بحث‌های صوتی تخصصی پیرامون معماری گهواره‌به‌گهواره، انرژی خاکستری و اقتصاد چرخه‌ای در ساختمان.',
        prs: 'شنیدن مصاحبه درباره بازیافت مصالح ساختمانی و کاهش انتشار کاربن.',
        tr: 'Beşikten beşiğe (cradle-to-cradle) mimari, gri enerji ve döngüsel inşaat ekonomisi üzerine mülakatı dinleyin.',
        ar: 'فهم النقاشات المتخصصة حول العمارة الدائرية والطاقة الرمادية والاقتصاد الدائري في قطاع التشييد.',
        es: 'Comprende análisis sobre arquitectura circular, energía embebida y reciclaje de materiales.'
      },
      content: 'Experteninterview: Dekarbonisierung des Bausektors durch rezyklierbare Holz-Hybrid-Konstruktionen.',
      audioTranscript: 'Der Bausektor emittiert global betrachtet nahezu 40 Prozent der CO2-Äquivalente, wobei der Großteil auf die graue Energie zementgebundener Werkstoffe entfällt.',
      practiceTasks: [
        'Definieren Sie den Unterschied zwischen Betriebsenergie und grauer Energie.',
        'Prägen Sie sich Termini wie "Ressourcenkreislauf", "Sortenreinheit" und "Biophilie" ein.'
      ]
    },
    sectionC: {
      title: 'Mussawi C: Fachdialoge & Beteiligungsverfahren',
      focus: 'Mündliche Interaktion (Bürgerforum zur Nachverdichtung)',
      description: {
        en: 'Navigate heated municipal stakeholder conflicts regarding densification, green space preservation, and affordable rents.',
        fa: 'هدایت جلسات بحث شهروندی با منافع متعارض پیرامون تراکم‌سازی شهری، حفظ فضاهای سبز و کرایه‌های عادلانه.',
        prs: 'مذاکره مسلکی میان اهالی منطقه و شاروالی درباره ساخت و سازهای جدید.',
        tr: 'Kentsel yoğunlaşma, yeşil alanların korunması ve konut kiraları üzerine hararetli belediye müzakeresi.',
        ar: 'إدارة نقاش بلدي حاد بين رغبة التكثيف العمراني وحماية المساحات الخضراء والإيجارات الميسرة.',
        es: 'Modera debates ciudadanos sobre densificación urbana y protección de zonas verdes.'
      },
      content: 'Streitgespräch zwischen Stadtplanungsamt und einer Bürgerinitiative.',
      audioTranscript: 'A: "Ohne gezielte Nachverdichtung treiben wir die Zersiedelung im Umland voran und vernichten wertvolle Ackerflächen." - B: "Dem entgegnen wir, dass die geplante Bebauung die verbliebenen Kaltluftschneisen unserer Innenstadt irreparabel zerstört."',
      practiceTasks: [
        'Formulieren Sie vermittelnde Kompromisse ("Eine maßvolle Verdichtung unter der Prämisse...")',
        'Wehren Sie emotionale Angriffe mit sachlicher Argumentation ab.'
      ]
    },
    sectionD: {
      title: 'Mussawi D: Textanalyse & Architekturkritik',
      focus: 'Lesen & Feuilleton (Architekturkritik in der Süddeutschen Zeitung)',
      description: {
        en: 'Analyze an eloquent architectural review discussing the alienation caused by repetitive investor-driven glass facades.',
        fa: 'تحلیل نقد معماری ادبی و فاخر روزنامه زوددویچه درباره بیگانگی هویتی ناشی از نماهای شیشه‌ای یکنواخت انبوه‌سازان.',
        prs: 'خواندن نقد مسلکی در مورد معماری شهری و تاثیرات روانی آن بر شهروندان.',
        tr: 'Yatırımcı odaklı tekdüze cam cephelerin yarattığı yabancılaşmayı eleştiren mimari eleştiri yazısını tahlil edin.',
        ar: 'تحليل نقد معماري رصين يتناول الاغتراب الناتج عن الواجهات الزجاجية المتكررة للمستثمرين.',
        es: 'Analiza una crítica arquitectónica de prensa sobre la alienación urbana provocada por fachadas impersonales.'
      },
      readingText: {
        type: 'Architekturkritik (SZ-Feuilleton)',
        title: 'Die Tyrannei der Beliebigkeit: Wie Renditearchitektur unsere Städte entseelt',
        body: 'Wer durch die neu errichteten Quartiere unserer Metropolen flaniert, sieht sich einer monotonen Rasterästhetik ausgesetzt, die jede lokale Identität im Keim erstickt. Austauschbare Kubaturen mit standardisierten Alukassetten künden nicht von baukultureller Ambition, sondern von der Diktatur der Excel-Tabelle. Anstatt Räume für spontane soziale Begegnung zu generieren, manifestiert diese sterile Architektur eine Privatisierung des Öffentlichen, die Passanten auf bloße Konsumentenströme reduziert.'
      },
      practiceTasks: [
        'Erläutern Sie die Metapher "Diktatur der Excel-Tabelle" im Textzusammenhang.',
        'Arbeiten Sie die stilistischen Mittel (Alliteration, Antithese, Metaphern) heraus.'
      ]
    },
    sectionE: {
      title: 'Mussawi E: Grammatik & Stilistik',
      focus: 'Grammatik (Konzessive Nebensätze mit "ungeachtet dessen, dass", "obgleich" und Präpositionen mit Genitiv)',
      description: {
        en: 'Command sophisticated concessive clauses and prepositional genitive expressions ("ungeachtet", "unbeschadet", "trotz").',
        fa: 'تسلط بر جملات پیرو تقابلی-امتیازی (Konzessivsätze) و حروف اضافه ملکی فاخر مانند ungeachtet, unbeschadet, obzwar در زبان دانشگاهی.',
        prs: 'آموختن کاربرد حروف اضافه تقابلی با Genitiv در سبک رسمی.',
        tr: 'Genitiv edatları ("ungeachtet", "unbeschadet") ve C1 düzeyinde karşıtlık bağlaçlarında ("obgleich", "wenngleich") ustalaşın.',
        ar: 'إتقان صياغة الجمل التنازلية المعقدة (obgleich, wenngleich) وحروف الجر المتبوعة بالـ Genitiv.',
        es: 'Domina las oraciones concesivas complejas y preposiciones de genitivo formal.'
      },
      grammarRule: {
        id: 'c1_1_konzessiv_rule',
        level: 'C1.1',
        germanTitle: 'Erweiterte konzessive Verknüpfungen (Satz- und Wortebene)',
        formula: 'ungeachtet / unbeschadet + Genitiv || wenngleich / wiewohl + Nebensatz || gleichwohl + Inversion',
        explanation: {
          en: 'Sophisticated concessive linkers (ungeachtet, wenngleich, gleichwohl) structure academic dialectics.',
          fa: 'پیونددهنده‌های پیشرفته تضاد و مصالحه (ungeachtet, wenngleich, gleichwohl) دیالکتیک استدلال را ساختار می‌بخشند.',
          prs: 'کلمات ربطی متضاد برای مقایسه دلایل در متن‌های بلند علمی.',
          tr: 'İleri düzeyde zıtlık/ödün bağlaçları (ungeachtet, wenngleich, gleichwohl) akademik diyalektiği yapılandırır.',
          ar: 'تتيح الروابط الاستدراكية المتقدمة مضاهاة الحجج المتعارضة مع الحفاظ على الأطروحة المركزية.',
          es: 'Los conectores concesivos complejos estructuran la dialéctica académica con solvencia.'
        },
        examples: [
          {
            german: 'Ungeachtet massiver Bürgerproteste votierte der Stadtrat für das Bauprojekt.',
            formulaBreakdown: 'Ungeachtet (Präposition + Genitiv) + Bürgerproteste (Genitiv) + votierte (Verb) + der Stadtrat.',
            literalTranslation: {
              en: 'Notwithstanding massive citizen protests voted the city council for the building project.',
              fa: 'صرف‌نظر از اعتراضات گسترده شهروندان، شورای شهر به پروژه ساخت رأی مثبت داد.',
              prs: 'با وجود اعتراضات زیاد مردم، شورای شهر به پروژه رای داد.',
              tr: 'Yoğun vatandaş protestolarına rağmen belediye meclisi inşaat projesi lehinde oy kullandı.',
              ar: 'بصرف النظر عن الاحتجاجات الشعبية العارمة، صوت مجلس المدينة لصالح المشروع العمراني.',
              es: 'A despecho de las masivas protestas ciudadanas, el concejo municipal votó a favor del proyecto.'
            },
            fluentTranslation: {
              en: 'Notwithstanding widespread civic protests, the municipal council voted in favor of the development project.',
              fa: 'علی‌رغم اعتراضات گسترده مردمی، شورای شهر به تصویب پروژه ساخت‌وساز رأی مثبت داد.',
              prs: 'با وجود مخالفت‌های وسیع شهروندان، شورای شهر طرح ساختمانی را تصویب کرد.',
              tr: 'Halkın güçlü itirazlarına meydan okuyan belediye meclisi, kentsel dönüşüm projesine onay verdi.',
              ar: 'على الرغم من الاحتجاجات الجماهيرية الواسعة، أقر المجلس البلدي المضي قدماً في المشروع الإنشائي.',
              es: 'Pese a la vehemente oposición ciudadana, el pleno consistorial respaldó la ejecución del proyecto de obras.'
            }
          }
        ]
      },
      practiceTasks: [
        'Verbinden Sie gegensätzliche Fakten mit "ungeachtet dessen, dass" und "gleichwohl".',
        'Transformieren Sie Konzessivsätze in nominale Fügungen mit "ungeachtet + Genitiv".'
      ]
    },
    vocabularies: [
      { id: 'c1_1_v17', word: 'die Nachverdichtung', article: 'die', plural: 'die Nachverdichtungen', ipa: '/ˈnaːxfɛɐ̯ˌdɪçtʊŋ/', translation: { en: 'urban densification / infill development', fa: 'تراکم‌سازی در بافت موجود شهری', prs: 'استفاده موثر از زمین‌های خالی داخل شهر برای ساخت و ساز', tr: 'kentsel yoğunlaşma', ar: 'التكثيف العمراني في النسيج القائم', es: 'densificación urbana' } },
      { id: 'c1_1_v18', word: 'die graue Energie', article: 'die', plural: '-', ipa: '/ˈɡʁaʊ̯ə enɛʁˈɡiː/', translation: { en: 'embodied energy (grey energy)', fa: 'انرژی خاکستری (انرژی مصرف‌شده در تولید و حمل مصالح)', prs: 'انرژی مصرف شده برای ساخت مواد اولیه', tr: 'gömülü enerji / gri enerji', ar: 'الطاقة الرمادية المتجسدة', es: 'energía embebida / energía gris' } },
      { id: 'c1_1_v19', word: 'biomimetisch', article: '', plural: '-', ipa: '/biomiˈmeːtɪʃ/', translation: { en: 'biomimetic / bio-inspired', fa: 'الهام‌گرفته از ساختارهای طبیعت (زیست‌پالایش)', prs: 'الهام گرفته از طبیعت و بیولوژی', tr: 'biyomimetik', ar: 'محاكي للطبيعة الحيوية', es: 'biomimético' } }
    ],
    exercises: [
      {
        id: 'ex_c1_1_6_a',
        type: 'multiple_choice',
        instruction: {
          en: 'Identify the correct preposition governing the genitive case in an academic context.',
          fa: 'حرف اضافه صحیح که با حالت ملکی (Genitiv) می‌آید را در متن دانشگاهی انتخاب کنید.',
          prs: 'حرف اضافه رسمی با حالت اضافه را برگزینید.',
          tr: 'Genitiv alan doğru edatı seçiniz.',
          ar: 'اختر حرف الجر الأكاديمي الصحيح المتبوع بالـ Genitiv.',
          es: 'Selecciona la preposición correcta que rige genitivo.'
        },
        prompt: '_______ der massiven Einwände seitens der Denkmalbehörde wurde die moderne Glasfassade genehmigt.',
        options: [
          'Ungeachtet',
          'Entlang',
          'Mittels',
          'Zufolge'
        ],
        correctAnswer: 'Ungeachtet',
        explanation: {
          en: '"Ungeachtet" + Genitiv expresses concession ("despite / notwithstanding"), matching the concessive context.',
          fa: '"Ungeachtet" همراه با Genitiv بیانگر تقابل و عدم مانعیت («علی‌رغم / صرف‌نظر از») در متون رسمی است.',
          prs: 'حرف اضافه Ungeachtet به معنای با وجود و علی‌رغم استفاده می‌شود.',
          tr: '"Ungeachtet" + Genitiv, resmi Almancada "...-e rağmen / bakılmaksızın" anlamında kullanılır.',
          ar: 'حرف الجر "Ungeachtet" مع الـ Genitiv يفيد التنازل ("على الرغم من / بصرف النظر عن").',
          es: '"Ungeachtet" rige genitivo y denota concesión formal ("a pesar de / sin perjuicio de").'
        }
      },
      {
        id: 'ex_c1_1_6_b',
        type: 'fill_blank',
        instruction: {
          en: 'Fill in the elevated concessive adverb.',
          fa: 'قید ربط تقابلی عالی را در جای خالی قرار دهید.',
          prs: 'قید ربط مناسب را بنویسید.',
          tr: 'Boşluğa uygun karşıtlık zarfını yerleştirin.',
          ar: 'املاً الفراغ بالظرف الرابط الدال على الاستدراك.',
          es: 'Completa con el adverbio concesivo formal adecuado.'
        },
        prompt: 'Die Holzbauweise ist mit höheren Initialkosten verbunden; _______ favorisieren führende Stadtplaner diesen Baustoff aufgrund seiner CO2-Bilanz.',
        options: [
          'gleichwohl',
          'nämlich',
          'deshalb',
          'folglich'
        ],
        correctAnswer: 'gleichwohl',
        explanation: {
          en: '"gleichwohl" introduces an adversative qualification ("nevertheless"), contrasting initial costs with long-term benefits.',
          fa: '"gleichwohl" بیانگر «با این حال / با وجود این» در برابر هزینه بالاتر است.',
          prs: 'کلمه gleichwohl تضاد منطقی را بیان می‌نماید.',
          tr: '"gleichwohl", maliyete rağmen tercihi açıklayan "yine de / buna karşın" anlamındaki bağlaçtır.',
          ar: 'الرابط "gleichwohl" (مع ذلك / بيد أن) يوضح ترجيح المادة رغم تكلفتها المبدئية.',
          es: '"gleichwohl" expresa "a pesar de ello / no obstante" conectando las dos premisas opuestas.'
        }
      },
      {
        id: 'ex_c1_1_6_c',
        type: 'sentence_reorder',
        instruction: {
          en: 'Form an academic sentence focusing on urban resilience.',
          fa: 'جمله علمی را با تمرکز بر تاب‌آوری شهری مرتب کنید.',
          prs: 'جمله را به ترتیب فکری و گرامری درست تنظیم نمایید.',
          tr: 'Cümleyi kentsel dayanıklılık vurgusuyla sıralayın.',
          ar: 'رتب عناصر الجملة المعبرة عن الصمود الحضري.',
          es: 'Ordena la oración sobre resiliencia urbana.'
        },
        prompt: 'Bringen Sie die Satzteile in die korrekte Reihenfolge:',
        options: [
          'Klimaresiliente Stadtquartiere erfordern',
          'eine interdisziplinäre Symbiose',
          'aus innovativer Architektur',
          'und ökologischer Landschaftsplanung.'
        ],
        correctAnswer: [
          'Klimaresiliente Stadtquartiere erfordern',
          'eine interdisziplinäre Symbiose',
          'aus innovativer Architektur',
          'und ökologischer Landschaftsplanung.'
        ],
        explanation: {
          en: 'Subject, transitive verb ("erfordern"), direct object ("eine interdisziplinäre Symbiose"), followed by the prepositional modifier ("aus... und...").',
          fa: 'فاعل، فعل متعدی، مفعول بی‌واسطه و سپس متمم حرف اضافه‌ای دوتایی.',
          prs: 'ترتیب ساختار: فاعل، فعل، مفعول و متمم‌های توصیفی.',
          tr: 'Özne, fiil, nesne ve iki kısımlı edat tamlaması.',
          ar: 'الفاعل، الفعل، المفعول به، ومتمم شبه الجملة التوضيحي.',
          es: 'Sujeto, verbo transitivo, objeto directo y complemento preposicional coordinado.'
        }
      }
    ]
  },
  {
    id: 'c1_1_lek7',
    lektionNumber: 7,
    level: 'C1.1',
    title: 'Wissenschaftsethik, Bioethik und Posthumanismus',
    subTitle: 'Genom-Editierung, Transhumanismus und deontologische versus utilitaristische Ethik (C1 Niveau)',
    topic: 'Philosophische Ethik, Bio-Recht und epistemologische Verantwortung',
    fotoHoergeschichte: {
      title: 'Foto-Hörgeschichte: Tagung des Deutschen Ethikrats in Berlin',
      imagePrompt: 'A formal plenary hall of the German Ethics Council in Berlin where philosophers, jurists, geneticists, and theologians debate CRISPR gene editing guidelines.',
      imageTheme: 'Bioethik & Wissenschaftsverantwortung',
      audioDuration: '03:45',
      transcript: [
        { speaker: 'Prof. Dr. Alena Buyx', text: 'Der Übergang von therapeutischer Genom-Editierung zu optativen genetischen Enhancements markiert eine anthropologische Grenze, die wir nicht unbedacht überschreiten dürfen.' },
        { speaker: 'Prof. Julian Savulescu', text: 'Aus proaktiver utilitaristischer Warte lässt sich hingegen fragen, ob wir nicht eine moralische Verpflichtung besitzen, kognitive und immunologische Vulnerabilitäten präventiv zu minimieren.' },
        { speaker: 'Prof. Dr. Buyx', text: 'Diese utilitaristische Maximierung verkennt jedoch die unantastbare Würde des Individuums und gefährdet die Gleichheitsprämisse unserer Rechtsordnung.' }
      ],
      summary: {
        en: 'The German Ethics Council debates the moral boundaries between therapeutic genome editing and genetic human enhancement.',
        fa: 'شورای اخلاق زیستی آلمان مرزهای اخلاقی میان ویرایش ژنوم با اهداف درمانی و ارتقای ژنتیکی انسان را به بحث گذاشته است.',
        prs: 'جلسه شورای اخلاق علمی درباره مرزهای دخالت ژنتیکی در بدن انسان و قوانین بین‌المللی.',
        tr: 'Alman Etik Konseyi, terapötik gen düzenleme ile insan genetiğini geliştirme arasındaki ahlaki sınırları tartışıyor.',
        ar: 'يناقش المجلس الألماني للأخلاقيات الحدود المعنوية بين تعديل الجينات للعلاج والتحسين الوراثي للإنسان.',
        es: 'El Consejo de Ética Alemán debate los límites morales entre la edición genómica terapéutica y el perfeccionamiento genético.'
      }
    },
    sectionA: {
      title: 'Mussawi A: Sprechen & Philosophischer Diskurs',
      focus: 'Sprechen & Disputieren (Deontologie vs. Utilitarismus)',
      description: {
        en: 'Conduct rigorous moral debates contrasting Kantian deontology with utilitarian cost-benefit assessments.',
        fa: 'مناظره عمیق فلسفی در تقابل اخلاق وظیفه‌گرایی کانت (Deontologie) با پیامدگرایی سودمندباور (Utilitarismus).',
        prs: 'مباحثه فلسفی پیرامون اخلاق پزشکی و مسئولیت انسان در قبال پیشرفت‌های علمی.',
        tr: 'Kant\'ın ödev ahlakı (deontoloji) ile faydacı ahlakı karşılaştıran derin felsefi tartışmalar yürütün.',
        ar: 'خوض سجالات أخلاقية رصينة تقارن بين الواجبية الكانطية والنفعية القائمة على حساب التكلفة والعائد.',
        es: 'Conduce debates filosóficos contrastando la deontología kantiana con el utilitarismo.'
      },
      content: 'Aus deontologischer Perspektive darf der Mensch niemals bloß als Mittel zu einem Zweck instrumentalisiert werden.',
      audioText: 'Die Instrumentalisierung künftiger Generationen im Namen eines hypothetischen Fortschritts untergräbt das Fundament autonomer Selbstbestimmung.',
      practiceTasks: [
        'Nehmen Sie fundiert Stellung zur Frage prädiktiver genetischer Diagnostik bei Embryonen.',
        'Setzen Sie philosophische Wendungen ein: "Es widerspricht dem kategorischen Imperativ...", "Darin manifestiert sich die Aporie...", "Dies führt ad absurdum...".'
      ]
    },
    sectionB: {
      title: 'Mussawi B: Wortschatz & Textanalyse',
      focus: 'Hören & Wortschatz (Symposium: Transhumanismus und künstliche Intelligenz)',
      description: {
        en: 'Analyze lectures contrasting transhumanist visions of mind uploading with existential phenomenology.',
        fa: 'شنیدن و یادگیری اصطلاحات پیرامون ترابشریت (Transhumanismus)، آپلود آگاهی و پدیدارشناسی اگزیستانسیال.',
        prs: 'شنیدن تحلیل‌های فیلسوفان مدرن درباره آینده بشر و تکنولوژی‌های فوق پیشرفته.',
        tr: 'Transhümanist zihin yükleme vizyonları ile varoluşçu fenomenolojiyi karşılaştıran konferansı dinleyin.',
        ar: 'تحليل محاضرات تقارن بين رؤى ما بعد الإنسانية لتحميل الوعي والظواهرية الوجودية.',
        es: 'Comprende ponencias que contrastan visiones transhumanistas con la fenomenología existencial.'
      },
      content: 'Diskussionsbeitrag über die anthropologischen Konsequenzen posthumaner Schnittstellen.',
      audioTranscript: 'Die Annahme, menschliches Bewusstsein lasse sich verlustfrei auf siliziumbasierte Substrate transferieren, beruht auf einem naiven reduktionistischen Geist-Gehirn-Modell.',
      practiceTasks: [
        'Extrahieren Sie philosophische Fachbegriffe wie "anthropologische Konstante", "Reduktionismus" und "Leiblichkeit".',
        'Fassen Sie die Kritik an der Transhumanismus-These zusammen.'
      ]
    },
    sectionC: {
      title: 'Mussawi C: Fachdialoge & Kommissionsverhandlungen',
      focus: 'Mündliche Interaktion (Entwurf einer bioethischen Charta)',
      description: {
        en: 'Draft recommendations for international conventions on artificial womb technology and synthetic biology.',
        fa: 'تدوین پیش‌نویس توصیه‌نامه‌ها برای کنوانسیون‌های بین‌المللی درباره رحم‌های مصنوعی و زیست‌شناسی مصنوعی.',
        prs: 'تنظیم پیشنهادهای قانونی برای نهادهای بین‌المللی درباره اخلاق علم ژنتیک.',
        tr: 'Sentetik biyoloji ve yapay rahim teknolojilerine dair uluslararası bildirge taslağı hazırlayın.',
        ar: 'صياغة توصيات للاتفاقيات الدولية حول تكنولوجيا الأرحام الاصطناعية والبيولوجيا التخليقية.',
        es: 'Redacta recomendaciones para convenios internacionales sobre biología sintética.'
      },
      content: 'Verhandlung einer bioethischen Deklaration im Europarat.',
      audioTranscript: 'A: "Wir müssen ein globales Moratorium für keimbahnverändernde Eingriffe am menschlichen Embryo völkerrechtlich verankern." - B: "Vollumfänglich d\'accord, allerdings muss das Verbot mit konkreten Sanktionsmechanismen unterlegt werden."',
      practiceTasks: [
        'Formulieren Sie verbindliche Resolutionsklauseln.',
        'Nutzen Sie diplomatisches Vokabular: "mit Nachdruck appellieren", "Konsens erzielen", "unverbrüchlich festhalten an".'
      ]
    },
    sectionD: {
      title: 'Mussawi D: Hermeneutik & Philosophie',
      focus: 'Lesen & Philosophischer Essay (Hans Jonas: Das Prinzip Verantwortung)',
      description: {
        en: 'Examine key passages from Hans Jonas\' ethics of responsibility for the technological civilization.',
        fa: 'بررسی بخش‌های کلیدی اثر کلاسیک هانس یوناس «اصل مسئولیت» پیرامون اخلاق تمدن تکنولوژیک.',
        prs: 'خواندن و تحلیل فلسفی اثر مشهور هانس یوناس درباره مسئولیت انسان در برابر آینده زمین.',
        tr: 'Hans Jonas\'ın teknoloji çağında sorumluluk etiğini inceleyen felsefi metnini tahlil edin.',
        ar: 'دراسة نصوص فلسفية محورية لهانز يوناس حول "مبدأ المسؤولية" للحضارة التكنولوجية.',
        es: 'Examina fragmentos de Hans Jonas sobre el principio de responsabilidad en la civilización tecnológica.'
      },
      readingText: {
        type: 'Philosophischer Fachaufsatz (Klassiker der Bioethik)',
        title: 'Der veränderte Charakter menschlichen Handelns im Zeitalter der Technosphäre',
        body: 'Alle bisherige Ethik bewegte sich im Rahmen der Gleichzeitigkeit und der Nahzone menschlicher Interaktionen. Mit den neuzeitlichen Kräften der Naturbeherrschung – von der nuklearen Spaltung bis zur gezielten Eingriffsfähigkeit in die menschliche Keimbahn – hat das menschliche Handeln jedoch eine irreversible Fernwirkung und Dimension erlangt, die das Fortbestehen künftiger Generationen existenziell bedroht. Hieraus erwächst ein neuer ethischer Imperativ: Handle so, dass die Wirkungen deiner Handlung verträglich sind mit der Permanenz echten menschlichen Lebens auf Erden.'
      },
      practiceTasks: [
        'Formulieren Sie den veränderten ethischen Imperativ nach Hans Jonas in eigenen Worten.',
        'Vergleichen Sie den traditionellen kantischen Imperativ mit Jonas\' zukunftsbezogenem Ansatz.'
      ]
    },
    sectionE: {
      title: 'Mussawi E: Grammatik & Höchste Stilebene',
      focus: 'Grammatik (Substantivierungen, Nominalstil und präpositionale Attribute)',
      description: {
        en: 'Master extreme nominal condensation ("Das Inkaufnehmen von Folgeschäden durch die Unterlassung...") in advanced C1/C2 writing.',
        fa: 'تسلط بر فشرده‌سازی اسم‌گرایانه (Nominalstil) و ترکیبات مضاف و مضاف‌الیهی متوالی در نوشتار عالی دانشگاهی.',
        prs: 'یادگیری سبک رسمی اسم‌گرایانه برای نوشتن مقالات علمی و حقوقی.',
        tr: 'C1/C2 yazımında aşırı isimleştirmeli anlatım (Nominalstil) ve ardışık tamlamalarda ustalaşın.',
        ar: 'إتقان التكثيف الاسمي الأكاديمي الشديد (الأسلوب الاسمي Nominalstil) وتتالي الإضافات في الكتابة الرفيعة.',
        es: 'Domina el estilo nominal extremo y la condensación sintáctica en el registro C1/C2.'
      },
      grammarRule: {
        id: 'c1_1_nominalstil_rule',
        level: 'C1.1',
        germanTitle: 'Der Nominalstil (Nominalisierung zur maximalen Textverdichtung)',
        formula: 'Verb -> Substantiv (-ung, -heit, -keit, -ion) + Genitivattribut / Präpositionalattribut',
        explanation: {
          en: 'Nominal style condenses verbal processes into complex substantive phrases, standard in German scientific prose.',
          fa: 'سبک اسمی فرایندهای فعلی را به عبارات اسمی متراکم با مضاف‌الیه یا متمم‌های حرف اضافه‌ای تبدیل می‌کند.',
          prs: 'سبک اسمی عبارات فعلی را برای اختصار و ایجاز به اسم‌های مضاف تبدیل می‌نماید.',
          tr: 'İsimleştirme üslubu fiil süreçlerini tamlayanlı isim öbeklerine yoğunlaştırarak akademik ifade gücünü artırır.',
          ar: 'يقوم الأسلوب الاسمي بضغط العمليات الفعلية في تراكيب اسمية ومضافات دقيقة في لغة العلوم.',
          es: 'El estilo nominal condensa acciones verbales en sintagmas sustantivos densos propios de la prosa científica.'
        },
        examples: [
          {
            german: 'Das Außerachtlassen bioethischer Standards führt zum Verlust der gesellschaftlichen Akzeptanz.',
            formulaBreakdown: 'Das Außerachtlassen (substantivierter Infinitiv) + bioethischer Standards (Genitiv) + führt zu.',
            literalTranslation: {
              en: 'The disregarding of bioethical standards leads to loss of societal acceptance.',
              fa: 'نادیده گرفتن استانداردهای زیست‌اخلاقی به از دست رفتن پذیرش اجتماعی می‌انجامد.',
              prs: 'بی‌توجهی به معیارهای اخلاقی موجب از دست رفتن اعتماد جامعه می‌شود.',
              tr: 'Biyoetik standartların göz ardı edilmesi toplumsal kabulün yitirilmesine yol açar.',
              ar: 'يؤدي إغفال المعايير الأخلاقية الحيوية إلى فقدان القبول المجتمعي للبحث العلمي.',
              es: 'La inobservancia de las directrices bioéticas conduce a la pérdida del respaldo social.'
            },
            fluentTranslation: {
              en: 'Disregarding bioethical standards inevitably leads to the erosion of public trust and societal acceptance.',
              fa: 'چشم‌پوشی از استانداردهای اخلاق زیستی، لاجرم به سلب مشروعیت و پذیرش عمومی پژوهش منجر خواهد شد.',
              prs: 'غفلت از اصول اخلاقی علم، اعتماد جامعه به دستاوردهای پژوهشی را متزلزل می‌سازد.',
              tr: 'Biyoetik ilkelere riayetsizlik, kaçınılmaz olarak kamuoyu nezdindeki güvenilirliğin aşınmasıyla neticelenir.',
              ar: 'إن التفريط في الالتزام بالمعايير الأخلاقية الحيوية يفضي حتماً إلى تآكل الثقة المجتمعية في المسار العلمي.',
              es: 'El menosprecio de los estándares bioéticos apareja indefectiblemente el quebranto de la legitimidad social.'
            }
          }
        ]
      },
      practiceTasks: [
        'Verwandeln Sie komplexe Kausal- und Konditionalsätze in dichte nominale Gefüge mit "infolge", "zwecks" und "anlässlich".',
        'Vermeiden Sie Bandwurmsätze durch rhythmisch ausgewogene Satzperioden.'
      ]
    },
    vocabularies: [
      { id: 'c1_1_v20', word: 'der kategorische Imperativ', article: 'der', plural: '-', ipa: '/kateˈɡoːʁɪʃɐ ɪmpeʁaˈtiːf/', translation: { en: 'categorical imperative', fa: 'امر مطلق کانت (قانون اخلاقی جهان‌شمول)', prs: 'فرمان مطلق اخلاقی در فلسفه کانت', tr: 'kategorik buyruk / koşulsuz buyruk', ar: 'الأمر الأخلاقي المطلق (عند كانط)', es: 'imperativo categórico' } },
      { id: 'c1_1_v21', word: 'die Aporie', article: 'die', plural: 'die Aporien', ipa: '/apoˈʁiː/', translation: { en: 'aporia / unsolvable logical impasse', fa: 'آپوری / بن‌بست حل‌نشدنی فلسفی و منطقی', prs: 'بن‌بست فکری و منطقی لاینحل', tr: 'çıkmaz / apori', ar: 'المأزق الفكري / الحيرة الفلسفية (الأبوريا)', es: 'aporía / callejón sin salida lógico' } },
      { id: 'c1_1_v22', word: 'die Deontologie', article: 'die', plural: '-', ipa: '/deʔɔntoloˈɡiː/', translation: { en: 'deontology / duty-based ethics', fa: 'وظیفه‌گرایی اخلاقی', prs: 'اخلاق مبتنی بر ادای وظیفه', tr: 'deontoloji / ödev ahlakı', ar: 'الأخلاق الواجبية / علم الواجبات', es: 'deontología / ética del deber' } }
    ],
    exercises: [
      {
        id: 'ex_c1_1_7_a',
        type: 'multiple_choice',
        instruction: {
          en: 'Transform the verbal clause into a nominal construction with prepositional genitive.',
          fa: 'جمله فعلی را به یک ساختار متراکم اسمی (Nominalstil) با حرف اضافه ملکی تبدیل کنید.',
          prs: 'جمله فعلی را به سبک رسمی اسم‌گرایانه تبدیل نمایید.',
          tr: 'Fiil cümlesini Genitiv edatlı isim yapısına (Nominalstil) dönüştürünüz.',
          ar: 'حول الجملة الفعلية إلى تركيب اسمي مكثف بحرف جر متبوع بالـ Genitiv.',
          es: 'Transforma la oración verbal en una construcción nominal con genitivo preposicional.'
        },
        prompt: 'Formen Sie nominal um: "Weil die Kommission bioethische Grundsätze missachtete, scheiterte das Gesetz."',
        options: [
          'Infolge der Missachtung bioethischer Grundsätze durch die Kommission scheiterte das Gesetz.',
          'Wegen die Kommission bioethische Grundsätze missachten scheiterte das Gesetz.',
          'Trotz der Missachtung bioethischer Grundsätze scheiterte das Gesetz.',
          'Zwecks der Missachtung bioethischer Grundsätze wurde das Gesetz gescheitert.'
        ],
        correctAnswer: 'Infolge der Missachtung bioethischer Grundsätze durch die Kommission scheiterte das Gesetz.',
        explanation: {
          en: '"Infolge" + Genitive ("der Missachtung bioethischer Grundsätze") elegantly condenses the causal "Weil"-clause into standard academic nominal style.',
          fa: '"Infolge" همراه با حالت ملکی ("der Missachtung...") ساختار سببی "Weil" را به سبک اسمی رسمی و فاخر آکادمیک تبدیل می‌کند.',
          prs: 'حرف اضافه infolge برای تبدیل ساختار سببی به سبک اسمی عالی استفاده می‌شود.',
          tr: '"Infolge" + Genitiv, neden bildiren "weil" cümlesini üst düzey akademik isimleşmiş yapıya dönüştürür.',
          ar: 'حرف الجر "Infolge" المتبوع بالـ Genitiv يختزل الجملة السببية في أسلوب اسمي أكاديمي رشيق.',
          es: '"Infolge" con genitivo condensa la subordinada causal en un registro nominal académico pulcro.'
        }
      },
      {
        id: 'ex_c1_1_7_b',
        type: 'fill_blank',
        instruction: {
          en: 'Insert the appropriate academic philosophical prepositional idiom.',
          fa: 'عبارت اصطلاحی فاخر فلسفی را در جای خالی قرار دهید.',
          prs: 'عبارت مناسب فلسفی را انتخاب کنید.',
          tr: 'Felsefi metne uygun deyimsel ifadeyi yerleştirin.',
          ar: 'ضع التعبير الفلسفي الأكاديمي الدال على التعارض مع المبدأ.',
          es: 'Inserta la locución filosófica adecuada.'
        },
        prompt: 'Die gezielte genetische Optimierung von Merkmalen steht im unauflösbaren Widerspruch _______ den Maximen der Menschenwürde.',
        options: [
          'zu',
          'mit',
          'an',
          'über'
        ],
        correctAnswer: 'zu',
        explanation: {
          en: 'The fixed C1 collocation is "im Widerspruch stehen zu + Dativ" (to be in contradiction with).',
          fa: 'ترکیب قالبی و رسمی سطح C1: "im Widerspruch stehen zu + Dativ" (در تضاد و تعارض بنیادین بودن با چیزی).',
          prs: 'حرف اضافه معین برای im Widerspruch stehen حرف zu می‌باشد.',
          tr: 'Sabit C1 kalıbı: "im Widerspruch stehen zu + Dativ" (... ile çelişki içinde olmak).',
          ar: 'التركيب الاصطلاحي الثابت في C1 هو: "im Widerspruch stehen zu + Dativ" (يتناقض تناقضًا صريحًا مع).',
          es: 'La colocación formal fija en C1 es "im Widerspruch stehen zu + dativo".'
        }
      },
      {
        id: 'ex_c1_1_7_c',
        type: 'sentence_reorder',
        instruction: {
          en: 'Reconstruct Hans Jonas\' ethical imperativ in proper academic syntax.',
          fa: 'اصل مسئولیت اخلاقی هانس یوناس را با نحو دقیق دانشگاهی مرتب کنید.',
          prs: 'جمله فلسفی هانس یوناس را به ترتیب درست گرامری بچینید.',
          tr: 'Hans Jonas\'ın sorumluluk ilkesini kurallı sözdizimiyle sıralayın.',
          ar: 'رتب المبدأ الأخلاقي لهانز يوناس وفق التراكيب الأكاديمية السليمة.',
          es: 'Ordena el imperativo ético de Hans Jonas con sintaxis formal.'
        },
        prompt: 'Bringen Sie den ethischen Grundsatz in die korrekte Reihenfolge:',
        options: [
          'Wissenschaftlicher Fortschritt erfordert',
          'eine vorausschauende Folgenabschätzung',
          'zum Schutz künftiger Generationen',
          'vor irreversiblen Schäden.'
        ],
        correctAnswer: [
          'Wissenschaftlicher Fortschritt erfordert',
          'eine vorausschauende Folgenabschätzung',
          'zum Schutz künftiger Generationen',
          'vor irreversiblen Schäden.'
        ],
        explanation: {
          en: 'Subject ("Wissenschaftlicher Fortschritt"), verb ("erfordert"), accusative object ("eine vorausschauende Folgenabschätzung"), followed by final and protective prepositional phrases.',
          fa: 'فاعل، فعل، مفعول و دو متمم حرف اضافه‌ای هدف و محافظت.',
          prs: 'ترتیب درست: فاعل، فعل، مفعول، متمم هدفی و متمم محافظتی.',
          tr: 'Özne, fiil, nesne ve ardışık amaç/koruma edat öbekleri.',
          ar: 'الفاعل، الفعل، المفعول به، ومتممات حروف الجر الدالة على الغاية والحماية.',
          es: 'Sujeto, verbo, objeto acusativo y complementos preposicionales finales.'
        }
      }
    ]
  }
];
