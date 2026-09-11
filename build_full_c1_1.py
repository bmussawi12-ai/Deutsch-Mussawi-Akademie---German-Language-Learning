# -*- coding: utf-8 -*-
import json

with open('src/data/curriculumC1_1.ts', 'r', encoding='utf-8') as f:
    orig = f.read()

# Let's insert additional exercises into Lektion 1, 2, 3 first:
# Find ex_c1_1_1
ex1_add = """      {
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
      },"""

orig = orig.replace("id: 'ex_c1_1_1',", ex1_add + "\n      {\n        id: 'ex_c1_1_1',")

# More exercises for Lektion 2:
ex2_add = """      {
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
      },"""

orig = orig.replace("id: 'ex_c1_1_2',", ex2_add + "\n      {\n        id: 'ex_c1_1_2',")

# More exercises for Lektion 3:
ex3_add = """      {
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
      },"""

orig = orig.replace("id: 'ex_c1_1_3',", ex3_add + "\n      {\n        id: 'ex_c1_1_3',")

# Now prepare Lektion 4, 5, 6, 7
lessons_4_7 = """  ,
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
        title: 'Das Gerundivum (zu + Partizip I als attributives Adjektiv)',
        rule: 'Das Gerundivum wird gebildet aus "zu" + Partizip I mit regulärer Adjektivendung. Es hat stets passivische Bedeutung und drückt eine Notwendigkeit ("muss") oder Möglichkeit ("kann") aus: "die zu prüfenden Dokumente" = die Dokumente, die geprüft werden müssen / können.',
        examples: [
          'Die unverzüglich zu ergreifenden Maßnahmen dulden keinen Aufschub. (= die ergriffen werden müssen)',
          'Die schwer zu widerlegende These überzeugte das Kollegium. (= die widerlegt werden kann)',
          'Die im Gutachten zu konstatierenden Mängel führten zur Ablehnung des Antrags.'
        ],
        explanation: 'Im wissenschaftlichen C1-Stil ermöglicht das Gerundivum maximale syntaktische Verdichtung und ersetzt umständliche Passiv-Relativsätze.'
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
  }"""

# Insert before final ];
idx = orig.rfind('];')
if idx != -1:
    orig = orig[:idx] + lessons_4_7 + '\n];\n'

with open('src/data/curriculumC1_1.ts', 'w', encoding='utf-8') as f:
    f.write(orig)

print("Expanded curriculumC1_1.ts successfully!")
