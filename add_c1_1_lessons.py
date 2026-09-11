# -*- coding: utf-8 -*-

with open('src/data/curriculumC1_1.ts', 'r', encoding='utf-8') as f:
    text = f.read()

new_lessons = """  ,
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
        title: 'Konditionalsätze mit Spitzenstellung des finiten Verbs (uneingeleitete Konditionalsätze)',
        rule: 'In gehobener Schriftsprache und Fachprosa werden Konditionalsätze häufig ohne "wenn" oder "falls" gebildet. Das finite Verb rückt auf Position 1. Im Hauptsatz steht oft korrelatives "so" oder "dann":\\n"Hätte man früher interveniert, (so) wären die Schäden vermeidbar gewesen."\\n"Sollten die Versuchsergebnisse divergieren, (so) ist eine Replikation erforderlich."',
        examples: [
          'Erweist sich die Hypothese als zutreffend, so erfordert dies ein Umdenken der Grundlagenforschung.',
          'Wären die kognitiven Belastungsgrenzen beachtet worden, hätten die Lernenden signifikant höhere Behaltensraten erzielt.',
          'Zeigen sich im Kontrollkollektiv signifikante Abweichungen, so müssen die Störvariablen eliminiert werden.'
        ],
        explanation: 'Diese uneingeleiteten Gefüge verleihen Texten besondere Eleganz und Prägnanz und sind ein zentrales Merkmal wissenschaftlicher C1/C2-Texte.'
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
        title: 'Erweiterte konzessive Verknüpfungen (Satz- und Wortebene)',
        rule: 'Konzessive Gefüge drücken einen Gegengrund aus, der eine Folge nicht verhindert:\\n1. Subjunktionen: obgleich, wenngleich, wiewohl, ungeachtet dessen, dass (+ Nebensatz mit Verb am Ende)\\n2. Präpositionen (+ Genitiv): ungeachtet, unbeschadet, trotzes\\n3. Konjunktionaladverbien: gleichwohl, nichtsdestotrotz, demungeachtet (+ Inversion im Hauptsatz)',
        examples: [
          'Ungeachtet massiver Bürgerproteste votierte der Stadtrat für das Bauprojekt.',
          'Wenngleich die Baukosten exorbitant anstiegen, hielt der Senat an der Fertigstellung fest.',
          'Die Fassadendämmung ist kostenintensiv; gleichwohl amortisiert sie sich binnen einer Dekade.'
        ],
        explanation: 'Im C1-Prüfungsmodul Schreiben demonstriert die variationenreiche Nutzung dieser Konnektoren höchste stilistische Reife.'
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
      audioTranscript: 'A: "Wir müssen ein globales Moratorium für keimbahnverändernde Eingriffe am menschlichen Embryo völkerrechtlich verankern." - B: "Vollumfänglich d'accord, allerdings muss das Verbot mit konkreten Sanktionsmechanismen unterlegt werden."',
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
        title: 'Der Nominalstil (Nominalisierung von Verben und Adjektiven zur maximalen Textverdichtung)',
        rule: 'Der Nominalstil transformiert verbale Prozesse in Substantive (meist auf -ung, -heit, -keit, -ion) mit präpositionalen und Genitivattributen:\\nVerbal: "Weil die Forscher das Genom unvorsichtig editierten, traten unvorhersehbare Mutationen auf."\\nNominal: "Infolge der unvorsichtigen Editierung des Genoms durch die Forscher traten unvorhersehbare Mutationen auf."',
        examples: [
          'Das Außerachtlassen bioethischer Standards führt zum Verlust der gesellschaftlichen Akzeptanz.',
          'Durch die Verharmlosung der Risiken wird einer verantwortungslosen Forschungspraxis Vorschub geleistet.',
          'Zwecks Vermeidung unumkehrbarer Schäden ist die Implementierung eines weltweiten Moratoriums geboten.'
        ],
        explanation: 'Der gezielte Einsatz des Nominalstils erhöht die argumentative Dichte und ist in wissenschaftlichen Gutachten und Essays unverzichtbar.'
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
  }"""

idx = text.rfind('];')
if idx != -1:
    text = text[:idx] + new_lessons + '\n];\n'

with open('src/data/curriculumC1_1.ts', 'w', encoding='utf-8') as f:
    f.write(text)

print("Added Lektionen 5, 6, 7 to curriculumC1_1.ts successfully!")
