# -*- coding: utf-8 -*-

with open('src/data/curriculumC1_2.ts', 'r', encoding='utf-8') as f:
    text = f.read()

new_lessons = """  ,
  {
    id: 'c1_2_lek6',
    lektionNumber: 6,
    level: 'C1.2',
    title: 'Diplomatie, Geopolitik und Multilateralismus',
    subTitle: 'Völkerrechtliche Verträge, Souveränitätsfragen und diplomatischer Code (C1.2 Niveau)',
    topic: 'Internationale Organisationen, Konfliktmediation und Verhandlungssprache',
    fotoHoergeschichte: {
      title: 'Foto-Hörgeschichte: Krisengipfel im Auswärtigen Amt in Berlin',
      imagePrompt: 'Diplomats and international envoys gathered at the Auswärtiges Amt in Berlin for high-stakes multilateral treaty negotiations.',
      imageTheme: 'Diplomatische Verhandlungen',
      audioDuration: '03:40',
      transcript: [
        { speaker: 'Staatssekretär Lindner', text: 'Die Wiederbelebung des multilateralen Regelwerks erfordert schmerzhafte Zugeständnisse aller involvierten Akteure.' },
        { speaker: 'Botschafterin Al-Mansoor', text: 'Einseitige Deklarationen untergraben das völkerrechtliche Gewaltverbot nach Art. 2 Ziff. 4 der UN-Charta.' },
        { speaker: 'Staatssekretär Lindner', text: 'Daher plädieren wir für ein verbindliches Zusatzprotokoll mit verifizierbaren Kontrollmechanismen.' }
      ],
      summary: {
        en: 'Diplomats at the Federal Foreign Office in Berlin negotiate verifiable multilateral treaties and conflict mediation protocols.',
        fa: 'دیپلمات‌ها در وزارت امور خارجه آلمان پیرامون معاهدات بین‌المللی و سازوکارهای راستی‌آزمایی توافق‌نامه‌ها مذاکره می‌کنند.',
        prs: 'مذاکرات عالی دیپلوماتیک در برلین درباره صلح بین‌المللی و حقوق ملل.',
        tr: 'Berlin Dışişleri Bakanlığı\\'nda diplomatlar çok taraflı anlaşmalar ve denetim mekanizmaları üzerinde müzakere yürütüyor.',
        ar: 'دبلوماسيون في وزارة الخارجية ببرلين يتفاوضون حول معاهدات متعددة الأطراف وبروتوكولات وساطة ملزمة.',
        es: 'Diplomáticos en Berlín negocian tratados multilaterales vinculantes y protocolos de mediación.'
      }
    },
    sectionA: {
      title: 'Mussawi A: Sprechen & Diplomatische Verhandlung',
      focus: 'Sprechen & Verhandeln (Klauselverhandlungen & Deklarationen)',
      description: {
        en: 'Formulate highly tactful yet legally rigorous diplomatic interventions, reservations, and consensus statements.',
        fa: 'فرموله‌بندی بیانیه‌های دیپلماتیک دقیق، ابراز ملاحظات مشروط و متن‌بندی توافق‌نامه‌های صلح بین‌المللی.',
        prs: 'صحبت کردن با لحن محترمانه و دقیق دیپلوماتیک.',
        tr: 'Yüksek nezaket ve hukuki hassasiyet gerektiren diplomatik müdahaleler ve uzlaşı metinleri formüle edin.',
        ar: 'صياغة مداخلات دبلوماسية رفيعة تتسم باللباقة والحزم القانوني مع إبداء التحفظات المشروطة.',
        es: 'Formula intervenciones diplomáticas formales y declaraciones de consenso.'
      },
      content: 'Die Unterzeichnerstaaten bekräftigen ihre unverbrüchliche Bindung an die Grundsätze der territorialen Integrität.',
      audioText: 'Es gilt, über strittige Grenzverläufe in einem ergebnisoffenen, jedoch bindenden Schiedsverfahren Einvernehmen zu erzielen.',
      practiceTasks: [
        'Führen Sie ein diplomatisches Schlichtungsgespräch zu einem Ressourcenkonflikt.',
        'Verwenden Sie Formeln wie: "Wir hegen die begründete Erwartung, dass...", "Dies entbehrt jeglicher völkerrechtlichen Grundlage".'
      ]
    },
    sectionB: {
      title: 'Mussawi B: Fachwortschatz & Hören',
      focus: 'Hören & Völkerrecht (Vorlesung: Die Bindungswirkung von UN-Resolutionen)',
      description: {
        en: 'Understand advanced international law lectures distinguishing between non-binding General Assembly resolutions and binding Chapter VII Security Council decisions.',
        fa: 'شنیدن سخنرانی دانشگاهی درباره قدرت الزام‌آور قطعنامه‌های فصل هفتم شورای امنیت در مقایسه با مصوبات مجمع عمومی سازمان ملل.',
        prs: 'شنیدن درس حقوق بین‌الملل درباره صلاحیت‌های شورای امنیت.',
        tr: 'BM Güvenlik Konseyi 7. Bölüm kararları ile Genel Kurul tavsiye kararları arasındaki hukuki farkları dinleyin.',
        ar: 'فهم محاضرات القانون الدولي التي تميز بين قرارات الجمعية العامة التوصية وقرارات مجلس الأمن الملزمة.',
        es: 'Comprende conferencias de derecho internacional sobre la fuerza vinculante de las resoluciones de la ONU.'
      },
      content: 'Wissenschaftlicher Vortrag über Völkergewohnheitsrecht und Ius Cogens.',
      audioTranscript: 'Normen des Ius Cogens genießen absoluten Vorrang vor bilateralen Verträgen und lassen keinerlei völkervertragliche Derogation zu.',
      practiceTasks: [
        'Definieren Sie "Ius Cogens" und "Gewohnheitsrecht".',
        'Prägen Sie sich Termini wie "Sanktionsregime", "Ratifizierung" und "Präambel" ein.'
      ]
    },
    sectionC: {
      title: 'Mussawi C: Fachdialoge & Vermittlung',
      focus: 'Mündliche Interaktion (Bilateraler Botschafteraustausch)',
      description: {
        en: 'Conduct subtle diplomatic exchanges clarifying misinterpretations without escalating geopolitical friction.',
        fa: 'گفت‌وگوی ظریف میان سفرا جهت رفع سوءتفاهم‌های سیاسی بدون دامن زدن به بحران‌های ژئوپلیتیک.',
        prs: 'گفتگوی رسمی میان نمایندگان دو کشور برای حل اختلافات صلح‌آمیز.',
        tr: 'Kriz tırmandırmadan yanlış anlamaları gideren hassas büyükelçilik ikili görüşmesi gerçekleştirin.',
        ar: 'إجراء محادثات ثنائية بين السفراء لتوضيح الالتباسات الدبلوماسية دون تصعيد التوترات.',
        es: 'Conduce diálogos diplomáticos bilaterales clarificando malentendidos sin escalada de tensión.'
      },
      content: 'Konsultationen zwischen Sondergesandten.',
      audioTranscript: 'A: "Unsere Regierung nimmt mit Befremden zur Kenntnis, dass die Vereinbarungen verzögert umgesetzt werden." - B: "Wir versichern Ihnen, dass die Verzögerungen rein verfahrenstechnischer Natur sind und keineswegs den politischen Konsens berühren."',
      practiceTasks: [
        'Äußern Sie formelle Besorgnis ("mit Befremden zur Kenntnis nehmen").',
        'Substantivieren Sie Absichten diplomatisch.'
      ]
    },
    sectionD: {
      title: 'Mussawi D: Textanalyse & Vertragstext',
      focus: 'Lesen & Völkerrechtliche Hermeneutik (Wiener Vertragsrechtskonvention)',
      description: {
        en: 'Analyze articles of the Vienna Convention on the Law of Treaties regarding treaty interpretation and invalidation.',
        fa: 'تحلیل موادی از کنوانسیون وین درباره حقوق معاهدات در خصوص تفسیر حسن نیت و بطلان قراردادها.',
        prs: 'تحلیل متن کنوانسیون وین درباره قوانین بین‌المللی معاهدات.',
        tr: 'Viyana Antlaşmalar Hukuku Sözleşmesi maddelerini yorum ilkeleri açısından inceleyin.',
        ar: 'تحليل مواد اتفاقية فيينا لقانون المعاهدات المتعلقة بقواعد التفسير وبطلان الاتفاقيات.',
        es: 'Analiza artículos de la Convención de Viena sobre el Derecho de los Tratados.'
      },
      readingText: {
        type: 'Völkerrechtlicher Vertrag (Auszug)',
        title: 'Wiener Übereinkommen über das Recht der Verträge (Art. 31)',
        body: 'Ein Vertrag ist nach Treu und Glauben in Übereinstimmung mit der gewöhnlichen, seinen Bestimmungen in ihrem Zusammenhang zukommenden Bedeutung und im Lichte seines Zieles und Zweckes auszulegen. Neben dem Zusammenhang sind in gleicher Weise jede spätere Übereinkunft zwischen den Vertragsparteien über die Auslegung des Vertrages und jede spätere Übung bei der Anwendung des Vertrages zu berücksichtigen.'
      },
      practiceTasks: [
        'Extrahieren Sie die drei Auslegungskriterien nach Art. 31 WÜRV (Wortlaut, Kontext, Telos).',
        'Definieren Sie den Begriff "Treu und Glauben" im Völkerrecht.'
      ]
    },
    sectionE: {
      title: 'Mussawi E: Grammatik & Formale Register',
      focus: 'Grammatik (Konditional- und Finalsätze mit "auf dass", "damit", "sofern")',
      description: {
        en: 'Command archaic and formal final and conditional conjunctions ("auf dass", "sofern", "in der Absicht, zu...") in state treaties.',
        fa: 'تسلط بر حروف ربط هدفی و شرطی عالی (auf dass, sofern, auf dass hin) در متن معاهدات رسمی دولتی.',
        prs: 'آموختن کاربرد حروف ربط بسیار رسمی در اسناد بین‌المللی.',
        tr: 'Resmi antlaşma dilinde amaç ve şart bağlaçlarında ("auf dass", "sofern") ustalaşın.',
        ar: 'إتقان الروابط الغائية والشرطية الكلاسيكية الرفيعة ("auf dass / لكيما"، "sofern / شريطة أن") في المعاهدات الدولية.',
        es: 'Domina las conjunciones finales y condicionales arcaicas y solemnes en textos diplomáticos.'
      },
      grammarRule: {
        title: 'Feierliche und formelle Ziel- und Bedingungsangaben in Staatsverträgen',
        rule: 'In völkerrechtlichen Dokumenten und Präambeln werden spezifische finale und konditionale Wendungen genutzt:\\n1. "auf dass" (+ Nebensatz mit Konjunktiv I): drückt ein hehres Ziel aus ("...auf dass Frieden herrsche").\\n2. "sofern" / "vorbehaltlich dessen, dass": setzt völkerrechtliche Konditionen.\\n3. "Zwecks + Genitiv" / "In der Absicht, ... zu + Infinitiv": nominale und infinitive Alternativen.',
        examples: [
          'Die Völker vereinbaren diesen Pakt, auf dass künftigen Generationen die Geißel des Krieges erspart bleibe.',
          'Der Vertrag tritt in Kraft, sofern sechzig Staaten ihre Ratifikationsurkunden hinterlegt haben.',
          'Zwecks Wahrung der globalen Stabilität verpflichten sich die Parteien zur Kooperation.'
        ],
        explanation: 'Diese Konstruktionen erzeugen die feierliche Verbindlichkeit internationaler Übereinkünfte.'
      },
      practiceTasks: [
        'Formulieren Sie eine Vertragspräambel mit "auf dass".',
        'Verwenden Sie "sofern" zur Formulierung von Ratifikationsbedingungen.'
      ]
    },
    vocabularies: [
      { id: 'c1_2_v7', word: 'das Ius Cogens', article: 'das', plural: '-', ipa: '/juːs ˈkoːɡɛns/', translation: { en: 'peremptory norm of international law', fa: 'قاعده آمره در حقوق بین‌الملل', prs: 'قواعد آمره حقوق بین‌الملل که تخلف از آن ناممکن است', tr: 'emredici hukuk kuralı (jus cogens)', ar: 'القواعد الآمرة في القانون الدولي', es: 'ius cogens / norma imperativa' } },
      { id: 'c1_2_v8', word: 'die Ratifikation', article: 'die', plural: 'die Ratifikationen', ipa: '/ʁatifikaˈtsi̯oːn/', translation: { en: 'ratification', fa: 'تصویب نهایی پارلمانی معاهده', prs: 'تصویب رسمی معاهده در پارلمان', tr: 'onaylama / onay belgesi', ar: 'التصديق البرلماني على المعاهدة', es: 'ratificación' } },
      { id: 'c1_2_v9', word: 'derogieren', article: '', plural: '-', ipa: '/deʁoˈɡiːʁən/', translation: { en: 'to derogate / repeal partially', fa: 'فسخ جزئی یا نقض قاعده حقوقی', prs: 'لغو کردن جزئی ماده قانونی', tr: 'yürürlükten kaldırmak / istisna tutmak', ar: 'يُلغي جزئيًا / يُعطّل حكمًا قانونيًا', es: 'derogar' } }
    ],
    exercises: [
      {
        id: 'ex_c1_2_6_a',
        type: 'multiple_choice',
        instruction: {
          en: 'Identify the solemn final conjunction suitable for an international treaty preamble.',
          fa: 'حرف ربط هدفی فاخر و رسمی مناسب برای مقدمه یک معاهده بین‌المللی را انتخاب کنید.',
          prs: 'حرف ربط مناسب برای اسناد بین‌المللی را برگزینید.',
          tr: 'Uluslararası antlaşma başlangıcına uygun soylu amaç bağlacını seçin.',
          ar: 'اختر الرابط الغائي الكلاسيكي الرفيع الملائم لديباجة المعاهدات الدولية.',
          es: 'Selecciona la conjunción final solemne para el preámbulo de un tratado.'
        },
        prompt: 'Die Hohen Vertragsparteien stiften diese Konvention, _______ Gerechtigkeit und Frieden unter den Völkern dauerhaft gewahrt werden.',
        options: [
          'auf dass',
          'weil',
          'obwohl',
          'insofern'
        ],
        correctAnswer: 'auf dass',
        explanation: {
          en: '"auf dass" (+ subjunctive or present) is the traditional solemn final connector used in treaties and constitutions ("so that / in order that").',
          fa: '"auf dass" از حروف ربط هدفی بسیار رسمی و تاریخی است که در معاهدات و میثاق‌های بین‌المللی برای بیان هدف متعالی («تا اینکه / بدان منظور که») به کار می‌رود.',
          prs: 'کلمه auf dass در متون تاریخی و حقوقی برای بیان آرمان به کار می‌رود.',
          tr: '"auf dass", resmi ve tarihi metinlerde "... olsun diye / amacıyla" anlamında kullanılan amaç bağlacıdır.',
          ar: 'الرابط "auf dass" (لكيما / حتى يسود) هو الصيغة الاحتفالية التقليدية للديباجات الدولية.',
          es: '"auf dass" es la conjunción final solemne propia de tratados constitutivos y declaraciones.'
        }
      },
      {
        id: 'ex_c1_2_6_b',
        type: 'fill_blank',
        instruction: {
          en: 'Insert the appropriate diplomatic diplomatic noun.',
          fa: 'اسم دیپلماتیک دقیق برای بیان «پایبندی خدشه‌ناپذیر به معاهدات» را بنویسید.',
          prs: 'کلمه دیپلوماتیک مناسب را در جای خالی بنویسید.',
          tr: 'Diplomatik metne uygun ismi yerleştiriniz.',
          ar: 'ضع الاسم الدبلوماسي الدال على الالتزام الوثيق والصادق.',
          es: 'Inserta el término diplomático correspondiente a la lealtad jurídica.'
        },
        prompt: 'Verträge sind nach dem fundamentalen völkerrechtlichen Grundsatz von Treu und _______ zu erfüllen.',
        options: [
          'Glauben',
          'Zufall',
          'Gewalt',
          'Macht'
        ],
        correctAnswer: 'Glauben',
        explanation: {
          en: '"Treu und Glauben" (bona fides / good faith) is the foundational principle of treaty interpretation in German jurisprudence.',
          fa: '"Treu und Glauben" (حسن نیت / امانت‌داری) اصل بنیادین تفسیر و اجرای تعهدات در حقوق آلمان و بین‌الملل است.',
          prs: 'اصطلاح Treu und Glauben یعنی اصل حسن نیت در اجرای تعهدات.',
          tr: '"Treu und Glauben", dürüstlük ve iyi niyet kuralını ifade eden temel hukuki ilkedir.',
          ar: 'المبدأ "Treu und Glauben" يعني مبدأ حسن النية والأمانة في الوفاء بالعهود.',
          es: '"Treu und Glauben" es el principio cardinal de buena fe en el derecho germánico.'
        }
      },
      {
        id: 'ex_c1_2_6_c',
        type: 'sentence_reorder',
        instruction: {
          en: 'Reconstruct the diplomatic declaration in proper academic sequence.',
          fa: 'بیانیه دیپلماتیک را بر اساس اصول نحو رسمی زبان آلمانی مرتب کنید.',
          prs: 'جمله دیپلوماتیک را به ترتیب گرامری منظم سازید.',
          tr: 'Diplomatik bildiriyi kurallı sözdizimiyle düzenleyiniz.',
          ar: 'أعد ترتيب البيان الدبلوماسي وفق القواعد النحوية الرصينة.',
          es: 'Ordena la declaración diplomática con sintaxis formal.'
        },
        prompt: 'Bringen Sie die Satzteile in die korrekte Reihenfolge:',
        options: [
          'Die Staatengemeinschaft bekräftigt',
          'ihre uneingeschränkte Entschlossenheit',
          'zur friedlichen Beilegung',
          'aller zwischenstaatlichen Konflikte.'
        ],
        correctAnswer: [
          'Die Staatengemeinschaft bekräftigt',
          'ihre uneingeschränkte Entschlossenheit',
          'zur friedlichen Beilegung',
          'aller zwischenstaatlichen Konflikte.'
        ],
        explanation: {
          en: 'Subject ("Die Staatengemeinschaft"), verb ("bekräftigt"), accusative noun phrase ("ihre uneingeschränkte Entschlossenheit"), and prepositional modifier with genitive attribute ("zur friedlichen Beilegung aller zwischenstaatlichen Konflikte").',
          fa: 'فاعل، فعل متعدی، مفعول اسمی با صفت، و متمم حرف اضافه‌ای با مضاف‌الیه ملکی.',
          prs: 'ترتیب درست ارکان جمله رسمی دیپلوماتیک.',
          tr: 'Özne, fiil, sıfatlı nesne ve tamlamalı edat grubu.',
          ar: 'الفاعل، الفعل، المفعول به الموصوف، والمتمم المجرور المضاف.',
          es: 'Sujeto, verbo, sintagma nominal acusativo y complemento preposicional con genitivo.'
        }
      }
    ]
  },
  {
    id: 'c1_2_lek7',
    lektionNumber: 7,
    level: 'C1.2',
    title: 'Wissenschaftstheorie, Epistemologie und Paradigmenwechsel',
    subTitle: 'Popper, Kuhn, Inkommensurabilität und wissenschaftliche Revolutionen (C1.2 Niveau)',
    topic: 'Erkenntnistheorie, Wissenschaftsphilosophie und Methodenlehre',
    fotoHoergeschichte: {
      title: 'Foto-Hörgeschichte: Internationales Wissenschaftsphilosophie-Kolloquium in Wien',
      imagePrompt: 'The grand ceremonial hall of the University of Vienna where philosophers of science debate Thomas Kuhn\'s concept of paradigm shifts and Karl Popper\'s critical rationalism.',
      imageTheme: 'Wissenschaftstheorie in Wien',
      audioDuration: '03:45',
      transcript: [
        { speaker: 'Prof. Dr. Stegmüller', text: 'Wissenschaftlicher Fortschritt vollzieht sich nach Thomas Kuhn nicht kumulativ-linear, sondern durch diskontinuierliche Paradigmenwechsel.' },
        { speaker: 'Dr. Imre Lakatos', text: 'Dabei darf die Inkommensurabilität rivalisierender Paradigmen nicht in einen irrationalen Relativismus münden.' },
        { speaker: 'Prof. Dr. Stegmüller', text: 'Genau hier greift das Erfordernis methodologischer Forschungsprogramme, die empirischen Gehalt mit theoretischer Konsistenz versöhnen.' }
      ],
      summary: {
        en: 'Philosophers of science in Vienna debate whether scientific progress is cumulative or marked by revolutionary paradigm shifts.',
        fa: 'فیلسوفان علم در وین پیرامون اینکه آیا پیشرفت علمی انباشتی و خطی است یا از طریق تغییر پارادایم‌های انقلابی رخ می‌دهد بحث می‌کنند.',
        prs: 'بحث دانشمندان فلسفه علم درباره تغییر پارادایم‌های علمی.',
        tr: 'Viyana\\'da bilim felsefecileri bilimsel ilerlemenin doğrusal mı yoksa devrimsel paradigma değişimleriyle mi gerçekleştiğini tartışıyor.',
        ar: 'فلاسفة العلم في فيينا يناقشون ما إذا كان التقدم العلمي تراكميًا أم ناتجًا عن تحولات جذرية في النماذج الإدراكية.',
        es: 'Filósofos de la ciencia debaten en Viena si el progreso científico es acumulativo o revolucionario.'
      }
    },
    sectionA: {
      title: 'Mussawi A: Sprechen & Epistemologischer Diskurs',
      focus: 'Sprechen & Disputieren (Kritischer Rationalismus vs. Konstruktivismus)',
      description: {
        en: 'Deliver an epistemological defense of empirical testability against radical constructivist skepticism.',
        fa: 'دفاع معرفت‌شناختی از آزمون‌پذیری تجربی در برابر شکاکیت برساخت‌گرایی رادیکال.',
        prs: 'مباحثه درباره روش‌های کسب علم و راه‌های اثبات فرضیه‌ها.',
        tr: 'Radikal yapılandırmacı şüpheciliğe karşı ampirik test edilebilirliği savunan felsefi konuşmalar yapın.',
        ar: 'تقديم مرافعة معرفية تدافع عن قابلية الاختبار التجريبي في مواجهة الشك البنائي الراديكالي.',
        es: 'Defiende la contrastabilidad empírica frente al escepticismo constructivista.'
      },
      content: 'Eine Theorie ist nur dann als wissenschaftlich zu qualifizieren, wenn sie prinzipiell an der Erfahrung scheitern kann.',
      audioText: 'Der methodische Zweifel Poppers verlangt die permanente Suche nach potentiellen Falsifikatoren anstelle naiver Verifikation.',
      practiceTasks: [
        'Diskutieren Sie das Induktionsproblem nach David Hume.',
        'Verwenden Sie philosophische Fachtermini: "Inkommensurabilität", "Korrespondenztheorie der Wahrheit", "Anomalie".'
      ]
    },
    sectionB: {
      title: 'Mussawi B: Fachwortschatz & Hören',
      focus: 'Hören & Vorlesung (Wissenschaftsgeschichte: Die Kopernikanische Wende)',
      description: {
        en: 'Analyze an academic history-of-science lecture dissecting the Copernican revolution as a prototypical paradigm shift.',
        fa: 'تحلیل سخنرانی تاریخ علم پیرامون انقلاب کوپرنیکی به عنوان نمونه بارز تغییر پارادایم علمی.',
        prs: 'شنیدن درس تاریخ علم درباره تغییر نگاه بشر به جهان هستی.',
        tr: 'Kopernik devrimini arketipik bir paradigma kayması olarak inceleyen bilim tarihi dersini dinleyin.',
        ar: 'تحليل محاضرة في تاريخ العلوم تتناول الثورة الكوبرنيكية كنموذج رائد للتحول المعرفي.',
        es: 'Comprende lecciones magistrales sobre la revolución copernicana como cambio de paradigma.'
      },
      content: 'Vortrag über Thomas S. Kuhn: Die Struktur wissenschaftlicher Revolutionen.',
      audioTranscript: 'Wenn sich in der Phase der Normalwissenschaft Anomalien häufen, die das bestehende Paradigma nicht mehr integrieren kann, gerät das Fach in eine Krise, die letztlich zur wissenschaftlichen Revolution führt.',
      practiceTasks: [
        'Skizzieren Sie den Zyklus: Normalwissenschaft -> Krise -> Revolution -> neues Paradigma.',
        'Klären Sie den Unterschied zwischen Verifikation und Falsifikation.'
      ]
    },
    sectionC: {
      title: 'Mussawi C: Fachdialoge & Wissenschaftsdisputation',
      focus: 'Mündliche Interaktion (Kolloquium zum methodischen Relativismus)',
      description: {
        en: 'Engage in a sharp intellectual dispute on Paul Feyerabend\'s provocative thesis "Against Method" (Anything Goes).',
        fa: 'مناظره انتقادی فکری درباره کتاب مناقشه‌برانگیز پل فایرابند «علیه روش» (هر چیزی ممکن است کارساز باشد).',
        prs: 'مناظره علمی درباره روش‌های تحقیق و مکاتب فلسفه علم.',
        tr: 'Paul Feyerabend\\'in "Yönteme Hayır" tezini eleştirel bir akademik münazarada tartışın.',
        ar: 'خوض سجال فكري محتدم حول أطروحة بول فييرابند الاستفزازية "ضد المنهج".',
        es: 'Participa en una disputa intelectual sobre "Contra el método" de Paul Feyerabend.'
      },
      content: 'Streitgespräch zweier Wissenschaftstheoretiker.',
      audioTranscript: 'A: "Feyerabends erkenntnistheoretischer Anarchismus befreit die Forschung von methodologischer Erstarrung." - B: "Er öffnet jedoch Tür und Tor für Pseudowissenschaften und entwertet die mühsam erkämpften Rationalitätsstandards unserer Aufklärung."',
      practiceTasks: [
        'Formulieren Sie Gegenargumente gegen methodische Beliebigkeit.',
        'Wenden Sie C1/C2-Redemittel an: "Es steht auf einem anderen Blatt, ob...", "Dies verkehrt die Intention ins Gegenteil".'
      ]
    },
    sectionD: {
      title: 'Mussawi D: Textanalyse & Epistemologischer Essay',
      focus: 'Lesen & Hermeneutik (Karl Popper: Logik der Forschung)',
      description: {
        en: 'Deconstruct Karl Popper\'s seminal thesis on the demarcation problem between science and metaphysics.',
        fa: 'تحلیل رساله بنیادین کارل پوپر در منطق پژوهش پیرامون مسئله تحدید حدود میان علم و مابعدالطبیعه.',
        prs: 'خواندن و درک متن مهم کارل پوپر درباره منطق اکتشافات علمی.',
        tr: 'Karl Popper\\'ın bilim ile metafiziği ayıran "sınır koyma problemi" üzerine metnini tahlil edin.',
        ar: 'تفكيك أطروحة كارل بوبر المفصلية في "منطق الكشف العلمي" حول معيار التمييز بين العلم والميتافيزيقا.',
        es: 'Analiza el criterio de demarcación de Karl Popper en "La lógica de la investigación científica".'
      },
      readingText: {
        type: 'Wissenschaftstheoretischer Klassiker (Auszug)',
        title: 'Das Abgrenzungskriterium des Falsifikationismus',
        body: 'Ein empirisch-wissenschaftliches System muss an der Erfahrung scheitern können. Nicht die Verifizierbarkeit, sondern die Falsifizierbarkeit eines Systems ist als Kriterium der Abgrenzung anzusehen. Ein Satz oder ein System von Sätzen ist nur dann empirisch-wissenschaftlich, wenn er die Eigenschaft besitzt, mit möglichen Beobachtungen in Konflikt geraten zu können.'
      },
      practiceTasks: [
        'Fassen Sie Poppers Abgrenzungskriterium prägnant zusammen.',
        'Erläutern Sie, warum Induktion nach Popper logisch unzulässig ist.'
      ]
    },
    sectionE: {
      title: 'Mussawi E: Grammatik & Höchste Abstraktion',
      focus: 'Grammatik (Syntaktische Schachtelung, Relativsätze mit präpositionalem Bezug und "dessen/deren")',
      description: {
        en: 'Master multi-tiered nested clauses with complex relative genitive references ("dessen", "deren", "durch dessen Mithilfe") in theoretical physics and philosophy.',
        fa: 'تسلط بر جملات تو در توی چندلایه با ضمایر موصولی ملکی پیچیده (dessen, deren, zu dessen Gunsten) در فلسفه و علوم نظری.',
        prs: 'یادگیری جملات پیشرفته با ضمایر موصولی در حالت اضافه.',
        tr: 'Felsefi metinlerde çok katmanlı cümle içi bağlaçlar ve Genitiv ilgi zamirlerinde ("dessen", "deren") ustalaşın.',
        ar: 'إتقان التراكيب التضمينية المتعددة الطبقات ذات الضمائر الموصولة المجرورة بالـ Genitiv (dessen, deren).',
        es: 'Domina las oraciones subordinadas complejas anidadas con pronombres relativos de genitivo.'
      },
      grammarRule: {
        title: 'Komplexe Relativsätze mit präpositionalem Genitivbezug (dessen / deren)',
        rule: 'In hochabstrakten wissenschaftlichen Texten stehen Relativsätze häufig mit Präposition + Genitiv-Relativpronomen:\\nMaskulin/Neutrum: "an dessen Stelle", "infolge dessen", "zu dessen Verifizierung"\\nFeminin/Plural: "aufgrund deren", "im Zuge derer"\\nBeispiel: "Ein Paradigma, zu dessen Gunsten die Mehrheit votierte, wurde implementiert."',
        examples: [
          'Eine empirische Hypothese, an deren Falsifizierbarkeit kein vernünftiger Zweifel besteht, gilt als bewährt.',
          'Die Forschergruppe untersuchte Anomalien, im Lichte derer die alte Theorie kollabierte.',
          'Ein epistemologisches Modell, zu dessen Gunsten zahlreiche Befunde sprechen, behauptet sich im wissenschaftlichen Diskurs.'
        ],
        explanation: 'Diese präzisen Bezüge ermöglichen dichte semantische Verknüpfungen ohne umständliche Hauptsatzaneinanderreihungen.'
      },
      practiceTasks: [
        'Bilden Sie Relativsätze mit "im Lichte dessen", "aufgrund deren" und "zwecks deren".',
        'Vermeiden Sie syntaktische Überladung durch klare Thema-Rhema-Führung.'
      ]
    },
    vocabularies: [
      { id: 'c1_2_v10', word: 'die Inkommensurabilität', article: 'die', plural: '-', ipa: '/ˈɪnkɔmɛnzuʁabiliˌtɛːt/', translation: { en: 'incommensurability', fa: 'قیاس‌ناپذیری پارادایم‌های رقیب علمی', prs: 'عدم امکان مقایسه مستقیم دو نظریه با معیارهای مشترک', tr: 'eşölçülemezlik (inkomensurabilite)', ar: 'اللاقِيَاسِيَّة / تعذر القياس المشترك بين النماذج', es: 'inconmensurabilidad' } },
      { id: 'c1_2_v11', word: 'das Abgrenzungskriterium', article: 'das', plural: 'die Abgrenzungskriterien', ipa: '/ˈapɡʁɛntsʊŋskʁiˌteːʁiʊm/', translation: { en: 'demarcation criterion', fa: 'معیار تحدید حدود میان علم و شبه‌علم', prs: 'معیار جداسازی علم واقعی از ادعاهای غیرعلمی', tr: 'sınır koyma ölçütü', ar: 'معيار التمييز والفرز العلمي', es: 'criterio de demarcación' } },
      { id: 'c1_2_v12', word: 'die Anomalie', article: 'die', plural: 'die Anomalien', ipa: '/anomaˈliː/', translation: { en: 'anomaly', fa: 'ناهنجاری تجربی ناسازگار با پارادایم حاکم', prs: 'مشاهده غیرعادی که با فرضیه اصلی همخوانی ندارد', tr: 'anomali / sapma', ar: 'الشذوذ / الظاهرة الشاذة المستعصية على التفسير', es: 'anomalía' } }
    ],
    exercises: [
      {
        id: 'ex_c1_2_7_a',
        type: 'multiple_choice',
        instruction: {
          en: 'Select the correct relative pronoun with preposition in the genitive case.',
          fa: 'ضمیر موصولی صحیح را همراه با حرف اضافه در حالت ملکی انتخاب کنید.',
          prs: 'ضمیر موصولی مناسب را با حرف اضافه برگزینید.',
          tr: 'Genitiv ilgi zamiri ile doğru edat öbeğini seçiniz.',
          ar: 'اختر الضمير الموصول المجرور الصحيح المقترن بحرف الجر.',
          es: 'Selecciona el pronombre relativo adecuado con preposición en genitivo.'
        },
        prompt: 'Das Kolloquium debattierte über ein neues Modell, _______ Gunsten zahlreiche astrophysikalische Beobachtungen sprechen.',
        options: [
          'zu dessen',
          'zu deren',
          'an dessen',
          'in welchem'
        ],
        correctAnswer: 'zu dessen',
        explanation: {
          en: '"das Modell" is neuter singular; the fixed idiom is "zu jemandes Gunsten" (in favor of), hence "zu dessen Gunsten".',
          fa: '"das Modell" خنثی است، و اصطلاح قالبی "zu Gunsten + Genitiv" (به نفع / در تأیید چیزی) است؛ بنابراین "zu dessen Gunsten" صحیح است.',
          prs: 'به دلیل خنثی بودن کلمه مدل، ترکیب zu dessen Gunsten درست می‌باشد.',
          tr: '"das Modell" nötr olduğu için "birinin lehine" anlamına gelen kalıp "zu dessen Gunsten" şeklinde kurulur.',
          ar: 'الاسم "das Modell" محايد، والتركيب الاصطلاحي الثابت هو "zu dessen Gunsten" (لصالحه / مؤيدًا له).',
          es: '"das Modell" es neutro y la locución fija es "zu dessen Gunsten" (a favor del cual).'
        }
      },
      {
        id: 'ex_c1_2_7_b',
        type: 'fill_blank',
        instruction: {
          en: 'Insert the key Popperian epistemological noun.',
          fa: 'اسم کلیدی نظریه معرفت‌شناسی کارل پوپر به معنای «ابطال‌پذیری» را قرار دهید.',
          prs: 'اصطلاح علمی ابطال‌پذیری را بنویسید.',
          tr: 'Popper felsefesinin temel kavramını yerleştirin.',
          ar: 'ضع المفهوم المعرفي الجوهري عند كارل بوبر الدال على قابلية التكذيب.',
          es: 'Inserta el término epistemológico central de Popper.'
        },
        prompt: 'Nach Karl Popper ist nicht die Verifizierbarkeit, sondern die prinzipielle _______ das entscheidende Kriterium für Wissenschaftlichkeit.',
        options: [
          'Falsifizierbarkeit',
          'Gültigkeit',
          'Subjektivität',
          'Populärität'
        ],
        correctAnswer: 'Falsifizierbarkeit',
        explanation: {
          en: '"Falsifizierbarkeit" (falsifiability / refutability) is Popper\'s central demarcation criterion distinguishing empirical science from metaphysics.',
          fa: '"Falsifizierbarkeit" (ابطال‌پذیری) معیار بنیادین پوپر برای تفکیک علوم تجربی از مابعدالطبیعه و شبه‌علم است.',
          prs: 'معیار اصلی پوپر Falsifizierbarkeit یا ابطال‌پذیری فرضیه‌ها است.',
          tr: '"Falsifizierbarkeit" (yanlışlanabilirlik), Popper\\'ın bilim ile metafiziği ayıran temel ölçütüdür.',
          ar: '"Falsifizierbarkeit" (قابلية التكذيب والتفنيد) هي المعيار البوبري الجوهري للتمييز العلمي.',
          es: '"Falsifizierbarkeit" (falsabilidad) es el criterio de demarcación fundamental de Karl Popper.'
        }
      },
      {
        id: 'ex_c1_2_7_c',
        type: 'sentence_reorder',
        instruction: {
          en: 'Reconstruct the sentence describing paradigm shifts according to Thomas Kuhn.',
          fa: 'جمله تبیین‌کننده تغییر پارادایم توماس کوهن را بر اساس نحو آلمانی مرتب کنید.',
          prs: 'جمله نظریه کوهن را به ترتیب گرامری درست تنظیم کنید.',
          tr: 'Thomas Kuhn\\'un paradigma kuramına dair cümleyi sıralayın.',
          ar: 'رتب الجملة الواصفة للتحول البارادايمي وفق نظرية توماس كون.',
          es: 'Ordena la oración sobre el cambio de paradigma según Thomas Kuhn.'
        },
        prompt: 'Bringen Sie die Satzteile in die korrekte Reihenfolge:',
        options: [
          'Wissenschaftliche Revolutionen vollziehen sich',
          'durch den radikalen Bruch',
          'mit etablierten Denkmustern',
          'und methodischen Paradigmen.'
        ],
        correctAnswer: [
          'Wissenschaftliche Revolutionen vollziehen sich',
          'durch den radikalen Bruch',
          'mit etablierten Denkmustern',
          'und methodischen Paradigmen.'
        ],
        explanation: {
          en: 'Subject, reflexive verb ("vollziehen sich"), instrumental prepositional phrase ("durch den radikalen Bruch"), and coordinating prepositional modifier ("mit etablierten Denkmustern und methodischen Paradigmen").',
          fa: 'فاعل، فعل انعکاسی، متمم ابزاری durch و متمم پیوسته با حرف اضافه mit.',
          prs: 'ترتیب نحوی صحیح جمله علمی.',
          tr: 'Özne, dönüşlü fiil, edat öbeği ve bağlaçlı tamlama.',
          ar: 'الفاعل، الفعل الانعكاسي، شبه الجملة السببية، والمتمم المنسوق بحرف الجر.',
          es: 'Sujeto, verbo reflexivo, sintagma preposicional instrumental y complemento coordinado.'
        }
      }
    ]
  }"""

idx = text.rfind('];')
if idx != -1:
    text = text[:idx] + new_lessons + '\n];\n'

with open('src/data/curriculumC1_2.ts', 'w', encoding='utf-8') as f:
    f.write(text)

print("Added Lektion 6 and 7 to curriculumC1_2.ts successfully!")
