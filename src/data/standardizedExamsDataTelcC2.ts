import { StandardizedExam } from '../types';

// =========================================================================
// TELC DEUTSCH C2 (OFFIZIELLER STANDARD: 250 MINUTEN)
// Lesen & Sprachbausteine: 90 Min (4 Teile) | Hören: 40 Min (3 Teile) | Schreiben: 80 Min | Sprechen: 20 Min
// =========================================================================
export const EXAM_TELC_C2: StandardizedExam = {
  id: 'exam_telc_c2',
  title: 'telc Deutsch C2 (Offizieller Standard)',
  standard: 'telc',
  level: 'C2.2',
  totalDurationMinutes: 250,
  passingScore: '60% (150 / 250 Punkte)',
  strategy: {
    level: 'C2.2',
    timeManagement: [
      {
        section: 'Leseverstehen & Sprachbausteine - 90 Minuten • 4 Teile',
        allocatedMinutes: 90,
        tip: {
          en: '90 minutes for 4 parts: Teil 1 (Science/epistemology), Teil 2 (Feuilleton/cultural critique), Teil 3 (Textual reconstruction), Teil 4 (High-register idioms & nominal collocations). Keep 25 min for Sprachbausteine.',
          fa: '۹۰ دقیقه برای ۴ بخش: بخش ۱ (علم و معرفت‌شناسی)، بخش ۲ (نقد فرهنگی و مقاله ادبی)، بخش ۳ (بازسازی پیوستگی متن)، بخش ۴ (اصطلاحات عالی و ترکیبات اسمی-فعلی). ۲۵ دقیقه برای اجزای زبان نگه دارید.',
          prs: '۹۰ دقیقه برای ۴ بخش خواندن و دستور زبان عالی سطح C2.',
          tr: '90 dakikada 4 bölüm: 65 dakika okuma ve metin tamamlama, 25 dakika ileri düzey dil ve bağlam unsurları.',
          ar: '90 دقيقة لـ 4 أقسام: 65 دقيقة للقراءة وإعادة بناء النصوص، و25 دقيقة للتراكيب اللغوية المتقدمة وحروف الجر المصاحبة.',
          es: '90 minutos para 4 partes: 65 min para lectura reconstructiva y 25 min para fraseología culta y régimen verbal.'
        }
      },
      {
        section: 'Hörverstehen - 40 Minuten • 3 Teile',
        allocatedMinutes: 40,
        tip: {
          en: '40 minutes: Teil 1 (Scientific lecture on quantum physics), Teil 2 (Intergenerational radio debate), Teil 3 (Ecology vs. economy disputation). Grasp fine rhetorical nuances.',
          fa: '۴۰ دقیقه: بخش ۱ (سخنرانی علمی درباره فیزیک کوانتوم)، بخش ۲ (مناظره رادیویی بین‌نسلی)، بخش ۳ (مناظره اقتصاد در برابر زیست‌بوم). دریافت ظرایف بلاغی اهمیت بنیادین دارد.',
          prs: '۴۰ دقیقه برای شنیدن فایل‌های تخصصی رادیویی و علمی.',
          tr: '40 dakikada 3 bölüm: Kuantum fiziği dersi, nesiller arası radyo tartışması ve ekoloji-ekonomi paneli.',
          ar: '40 دقيقة للاستماع الأكاديمي لـ 3 أقسام: محاضرة فيزياء، وحوار أجيال إذاعي، ومناظرة بيئية واقتصادية.',
          es: '40 minutos para 3 audiciones: conferencia de física cuántica, debate intergeneracional y panel ecología vs. economía.'
        }
      },
      {
        section: 'Schriftlicher Ausdruck - 80 Minuten • Wissenschaftliche Abhandlung',
        allocatedMinutes: 80,
        tip: {
          en: '80 minutes to write a demanding scientific treatise or policy critique (approx. 400-500 words) using academic nominal style and polymorphic hypotaxis.',
          fa: '۸۰ دقیقه برای نگارش یک رساله علمی یا نقد سیاست‌گذاری (حدود ۴۰۰ تا ۵۰۰ کلمه) با سبک اسمی دانشگاهی و جملات مرکب غنی.',
          prs: '۸۰ دقیقه برای نگارش متن پژوهشی پیشرفته با استدلال قوی.',
          tr: '80 dakikada yaklaşık 400-500 kelimelik akademik tez veya kurumsal politika eleştirisi.',
          ar: '80 دقيقة لكتابة دراسة بحثية نقدية متكاملة (حوالي 400-500 كلمة) بأسلوب أكاديمي ألماني رصين.',
          es: '80 minutos para redactar un dictamen científico o crítica de políticas públicas de unas 400-500 palabras.'
        }
      },
      {
        section: 'Mündliche Prüfung - 20 Minuten • Paarprüfung mit 20 Min Vorbereitung',
        allocatedMinutes: 20,
        tip: {
          en: '20 minutes (paired): Teil 1 (Monologue lecture, 5 min each), Teil 2 (Dialectical rebuttal, 5 min), Teil 3 (Negotiating an expert policy consensus, 10 min).',
          fa: '۲۰ دقیقه آزمون حضوری دونفره: بخش ۱ (ارائه سخنرانی تخصصی، هر نفر ۵ دقیقه)، بخش ۲ (پاسخ انتقادی متقابل)، بخش ۳ (مذاکره کارشناسی برای دستیابی به اجماع نهایی).',
          prs: '۲۰ دقیقه آزمون شفاهی دونفره با دفاع از موضع علمی.',
          tr: '20 dakikalık eşli sınav: Bireysel sunum, diyalektik karşı çıkış ve ortak uzman konsensüsü oluşturma.',
          ar: '20 دقيقة للامتحان الشفوي الثنائي: محاضرة فردية، ورد نقدي متبادل، ومفاوضات للوصول إلى إجماع خبراء.',
          es: '20 minutos en pareja: ponencia individual, réplica dialéctica y consenso estratégico entre expertos.'
        }
      }
    ],
    stepByStepStrategies: [
      {
        title: 'telc C2 Sprachbausteine & Syntax: Beherrschung des Nominalstils',
        steps: [
          {
            en: '1. In Sprachbausteine, examine the precise prepositional government (Präpositionalergänzungen) of abstract nouns and verbs.',
            fa: '۱. در بخش اجزای زبان، متمم‌های حرف اضافه‌ای افعال و اسم‌های تجریدی را با دقت موشکافی کنید.',
            prs: '۱. به حروف اضافه و اعراب کلمات دقیق نگاه کنید.',
            tr: '1. Soyut isim ve fiillerin edat ve tamlama yönetimlerini (Präpositionalergänzungen) dikkatle analiz edin.',
            ar: '1. دقق في حروف الجر المرتبطة بالأسماء المجردة والأفعال الاصطلاحية في سياقات C2.',
            es: '1. Analiza con lupa el régimen preposicional de los sustantivos abstractos y verbos de apoyo.'
          },
          {
            en: '2. In reading reconstruction, track cohesive ties: anaphoric pronouns (dieser, jener), temporal connectors, and causal adverbs.',
            fa: '۲. در بخش بازسازی متن، رد نشانه‌های انسجام متنی مانند ضمایر ارجاعی، ادات ربط زمانی و قیود علّی را دنبال نمایید.',
            prs: '۲. کلمات پیوند دهنده و ضمایر اشاره را برای ترتیب درست جملات بررسی کنید.',
            tr: '2. Metin tamamlama bölümünde anaphorik zamirleri ve nedensellik belirteçlerini iz sürerek birleştirin.',
            ar: '2. تتبع أدوات الربط والضمائر الإحالية والعوامل السببية لتحديد تسلسل النص الدقيق.',
            es: '2. Rastrea los deícticos anafóricos y conectores causales para reconstruir la coherencia textual.'
          }
        ]
      }
    ],
    commonMistakes: [
      {
        mistake: 'Falsche Präpositionalanschlüsse bei Funktionsverbgefügen',
        correction: 'Lernen Sie Wendungen als feste lexikalische Einheiten (z. B. "in Abrede stellen", "unter Beweis stellen").',
        explanation: {
          en: 'In telc C2, errors in functional verb collocations immediately lower language element marks.',
          fa: 'در آزمون telc C2، اشتباه در حروف اضافه همایندهای فعلی موجب کسر نمره شدید در بخش اجزای زبان می‌شود.',
          prs: 'استفاده از حرف اضافه نادرست در اصطلاحات رسمی نمره را کم می‌کند.',
          tr: 'telc C2 sınavında fonksiyonel fiil kalıplarındaki edat hataları doğrudan puan kaybına yol açar.',
          ar: 'في امتحان telc C2 تؤدي الأخطاء في حروف الجر المصاحبة للمركبات الفعلية الوظيفية إلى خفض الدرجة مباشرة.',
          es: 'En telc C2 los desajustes preposicionales en locuciones verbales penalizan severamente el módulo lingüístico.'
        }
      }
    ]
  },
  lesen: {
    title: 'Modul Lesen & Sprachbausteine: Wissenschaft, Diskurstheorie & Idiomatik (90 Minuten)',
    durationMinutes: 90,
    texts: [
      {
        title: 'Teil 1: Wissenschaftstheorie: Falsifikationismus und Paradigmenwechsel',
        sourceType: 'Wissenschaftsrat Deutschland, Denkschrift zur Erkenntnistheorie',
        body: 'Die klassische Vorstellung einer linearen Akkumulation wissenschaftlicher Erkenntnisse ist spätestens seit Thomas Kuhns historischer Intervention obsolet. Forschung verharrt über weite Strecken in den Bahnen der "Normalwissenschaft", in welcher etablierte Grundannahmen immunisiert und Abweichungen als apparative Artefakte marginalisiert werden. Erst wenn die Dichte der Anomalien eine kritische Schwelle überschreitet, setzt jene krisenhafte Phase ein, die in einer wissenschaftlichen Revolution mündet. Karl Poppers rigoroses Diktum, Theorien müssten sich an ständiger Falsifikation bewähren, beschreibt mithin ein heroisches Methodenideal, das an der soziologischen Trägheit wissenschaftlicher Gemeinschaften oftmals zerschellt. Die Durchsetzung eines neuen Paradigmas gleicht vielmehr einer ontologischen Konversion als einem rein logischen Kalkül.',
        questions: [
          {
            id: 'telc_c2_l_q1',
            question: 'Wie verhält sich die sogenannte "Normalwissenschaft" laut Text gegenüber theoretischen Abweichungen?',
            options: [
              'Sie marginalisiert Abweichungen als methodische oder apparative Artefakte.',
              'Sie verwirft sofort das gesamte bisherige Theoriegebäude.',
              'Sie veranstaltet umgehend weltweite Falsifikationsexperimente.',
              'Sie beendet die Forschungsfinanzierung aller Beteiligten.'
            ],
            correctAnswer: 'Sie marginalisiert Abweichungen als methodische oder apparative Artefakte.',
            explanation: {
              en: 'The text notes: "...in welcher etablierte Grundannahmen immunisiert und Abweichungen als apparative Artefakte marginalisiert werden".',
              fa: 'علم عادی انحرافات را به عنوان خطاهای دستگاهی یا روش‌شناختی بی‌اهمیت جلوه می‌دهد.',
              prs: 'ناهماهنگی‌ها را ناشی از خرابی دستگاه‌ها دانسته و نادیده می‌گیرند.',
              tr: 'Normal bilim, sapmaları cihaz ya da yöntem kusuru sayarak marjinalleştirir.',
              ar: 'يصنف العلم الاعتيادي الانحرافات والنتائج الشاذة كأخطاء في الأجهزة المخبرية ويهمشها.',
              es: 'La ciencia normal inmuniza sus supuestos y despacha las anomalías como meros artefactos instrumentales.'
            }
          },
          {
            id: 'telc_c2_l_q2',
            question: 'Was bewirkt laut Thomas Kuhn letztlich den Übergang zu einer wissenschaftlichen Revolution?',
            options: [
              'Das Überschreiten einer kritischen Schwelle bei der Dichte von ungelösten Anomalien.',
              'Der Beschluss eines internationalen Ministerrats.',
              'Die rein ökonomische Rentabilität privater Forschungsunternehmen.',
              'Der plötzliche Wegfall aller mathematischen Berechnungsgrundlagen.'
            ],
            correctAnswer: 'Das Überschreiten einer kritischen Schwelle bei der Dichte von ungelösten Anomalien.',
            explanation: {
              en: 'Text clarifies: "Erst wenn die Dichte der Anomalien eine kritische Schwelle überschreitet, setzt jene krisenhafte Phase ein...".',
              fa: 'تنها زمانی که تراکم ناهنجاری‌ها از آستانه‌ای بحرانی فراتر رود، انقلاب علمی آغاز می‌شود.',
              prs: 'انباشته شدن خطاهای حل‌نشده در یک زمینه علمی.',
              tr: 'Anomalilerin yoğunluğunun kritik bir eşiği aşması sonucunda kriz ve ardından devrim başlar.',
              ar: 'تراكم الشذوذات والظواهر غير المفسرة وتجاوزها عتبة حرجة يستدعي أزمة تؤدي لثورة معرفية.',
              es: 'La superación de un umbral crítico en la densidad de anomalías desencadena la fase revolucionaria.'
            }
          },
          {
            id: 'telc_c2_l_q3',
            question: 'Wie beurteilt der Text das Poppersche Falsifikationsprinzip in der empirischen Praxis?',
            options: [
              'Als heroisches Methodenideal, das an der soziologischen Trägheit von Institutionen scheitert.',
              'Als vollkommen unfehlbares und ausnahmslos praktiziertes Naturgesetz.',
              'Als überholte Erfindung ohne jeden erkenntnistheoretischen Wert.',
              'Als einzige Ursache für wirtschaftlichen Stillstand.'
            ],
            correctAnswer: 'Als heroisches Methodenideal, das an der soziologischen Trägheit von Institutionen scheitert.',
            explanation: {
              en: 'Described as: "...ein heroisches Methodenideal, das an der soziologischen Trägheit wissenschaftlicher Gemeinschaften oftmals zerschellt."',
              fa: 'آرمانی قهرمانانه در روش‌شناسی که با اینرسی جامعه‌شناختی نهادهای علمی در عمل ناکام می‌ماند.',
              prs: 'یک ایده آل‌گرایانه که در عمل به دلیل مقاومت دانشمندان پیاده نمی‌شود.',
              tr: 'Bilimsel camianın sosyolojik ataleti karşısında kırılan kahramanca bir metodoloji ideali.',
              ar: 'مثال منهجي بطولي يصطدم بالقصور الذاتي والمقاومة المؤسسية للمجتمعات العلمية.',
              es: 'Un ideal metodológico heroico que se estrella a menudo contra la inercia sociológica de la comunidad científica.'
            }
          },
          {
            id: 'telc_c2_l_q4',
            question: 'Womit vergleicht der Schlusssatz die Durchsetzung eines neuen Paradigmas?',
            options: [
              'Mit einer ontologischen Konversion statt eines rein logischen Kalküls.',
              'Mit einer simplen Rechenoperation am Taschenrechner.',
              'Mit einer bürokratischen Verlängerung von Dienstverträgen.',
              'Mit einem zufälligen Lottogewinn im Hochschulbereich.'
            ],
            correctAnswer: 'Mit einer ontologischen Konversion statt eines rein logischen Kalküls.',
            explanation: {
              en: 'Concludes: "Die Durchsetzung eines neuen Paradigmas gleicht vielmehr einer ontologischen Konversion als einem rein logischen Kalkül."',
              fa: 'بیشتر شبیه به دگرگونی بنیادین هستی‌شناختی است تا یک محاسبه منطقی محض.',
              prs: 'تغییر نگرش کلی به جهان به جای محاسبات ریاضی خشک.',
              tr: 'Saf mantıksal bir hesaptan ziyade ontolojik bir inanç ve paradigma dönüşümüne benzer.',
              ar: 'تشبه تحولاً وجودياً شاملاً في رؤية العالم أكثر من كونها مجرد حساب منطقي صوري.',
              es: 'Se asemeja más a una conversión ontológica profunda que a un mero cálculo lógico.'
            }
          },
          {
            id: 'telc_c2_l_q5',
            question: 'Welche Vorstellung von Erkenntnisgewinn erklärt der Text für obsolet?',
            options: [
              'Die Annahme einer kontinuierlich linearen Akkumulation von Wissen.',
              'Die Anwendung experimenteller Kontrollgruppen in Laboren.',
              'Die Veröffentlichung von peer-reviewten Fachartikeln.',
              'Die Ausbildung von Nachwuchsforschern an Universitäten.'
            ],
            correctAnswer: 'Die Annahme einer kontinuierlich linearen Akkumulation von Wissen.',
            explanation: {
              en: 'Opening declares obsolete: "Die klassische Vorstellung einer linearen Akkumulation wissenschaftlicher Erkenntnisse...".',
              fa: 'انگاره سنتی انباشت خطی و پیوسته دانش تجربی منسوخ اعلام می‌شود.',
              prs: 'باور قدیمی که فکر می‌کرد علم همواره در یک خط مستقیم پیشرفت می‌کند.',
              tr: 'Bilimsel bilginin doğrusal ve kesintisiz birikimle ilerlediği yönündeki klasik anlayış.',
              ar: 'التصور الكلاسيكي القائل بالتراكم الخطي المستمر والتصاعدي للمعرفة العلمية.',
              es: 'La concepción clásica de una acumulación lineal y acumulativa del saber empírico.'
            }
          }
        ]
      },
      {
        title: 'Teil 2: Feuilleton & Essayistik: Transhumanismus und die Frage nach dem Maße',
        sourceType: 'Merkur – Deutsche Zeitschrift für europäisches Denken',
        body: 'Das Versprechen des Transhumanismus, die biologischen Schranken der conditio humana mittels Genom-Editing und kybernetischer Prothetik zu überwinden, changiert zwischen prometheischem Titanentum und metaphysischer Hybris. Was als therapeutische Beseitigung pathologischer Defizite begann, mutiert zusehends zur normativen Pflicht zur Selbstoptimierung. In einer Kultur, die Vulnerabilität und Endlichkeit nicht mehr als existenzielle Konstituenten des Menschseins begreift, sondern als technisch tilgbare Ineffizienz, droht das Fundament solidarischer Verbundenheit zu erodieren. Wenn das Gelingen des Lebens zur Funktion biophysikalischer Aufrüstung wird, verliert der Begriff der Gerechtigkeit seine egalitäre Verankerung; es droht eine genetisch sanktionierte Klassengesellschaft, gegen die historische Feudalsysteme harmlos anmuten.',
        questions: [
          {
            id: 'telc_c2_l_q6',
            question: 'Inwiefern wandelt sich laut Text der ursprüngliche Impuls transhumanistischer Technologien?',
            options: [
              'Von einer therapeutischen Defizitbeseitigung zu einer normativen Selbstoptimierungspflicht.',
              'Von militärischer Anwendung zu rein friedlicher Agrarforschung.',
              'Von staatlichen Programmen zu rein ehrenamtlicher Bürgerbeteiligung.',
              'Von teuren Spezialprozeduren zu völlig kostenlosen Allgemeingütern.'
            ],
            correctAnswer: 'Von einer therapeutischen Defizitbeseitigung zu einer normativen Selbstoptimierungspflicht.',
            explanation: {
              en: 'Text notes: "Was als therapeutische Beseitigung (...) begann, mutiert zusehends zur normativen Pflicht zur Selbstoptimierung."',
              fa: 'از درمان بیماری‌ها به وظیفه‌ای اجباری و هنجاری برای خودبهینه‌سازی تغییر یافته است.',
              prs: 'تبدیل شدن درمان پزشکی به اجباری برای بهتر ساختن دائمی جسم و ذهن.',
              tr: 'Hastalıkların tedavisinden normatif bir kendini optimize etme zorunluluğuna evrilmektedir.',
              ar: 'التحول من إزالة العيوب المرضية علاجياً إلى واجب معياري قسري للتحسين الذاتي المستمر.',
              es: 'De la subsanación terapéutica de déficits a una exigencia normativa de autooptimización forzosa.'
            }
          },
          {
            id: 'telc_c2_l_q7',
            question: 'Welche existentielle Konsequenz hat die Verdrängung menschlicher Vulnerabilität und Endlichkeit?',
            options: [
              'Das Fundament solidarischer Verbundenheit droht vollständig zu erodieren.',
              'Krankenhäuser werden innerhalb eines Jahres überflüssig.',
              'Die Geburtenrate in Industrieländern verdoppelt sich schlagartig.',
              'Alle philosophischen Fakultäten werden geschlossen.'
            ],
            correctAnswer: 'Das Fundament solidarischer Verbundenheit droht vollständig zu erodieren.',
            explanation: {
              en: 'Text states: "...droht das Fundament solidarischer Verbundenheit zu erodieren."',
              fa: 'بنیان پیوندهای همبستگی و همدلی اجتماعی فرو می‌ریزد.',
              prs: 'از بین رفتن حس همدردی و کمک به دیگران در جامعه.',
              tr: 'Dayanışmacı birlikteliğin ahlaki temeli aşınma tehlikesiyle karşı karşıya kalır.',
              ar: 'تآكل أسس التضامن الإنساني والترابط الاجتماعي المشترك في مواجهة الهشاشة.',
              es: 'Amenaza con erosionar los cimientos de la solidaridad comunitaria fundamentada en la fragilidad compartida.'
            }
          },
          {
            id: 'telc_c2_l_q8',
            question: 'Welche düstere gesellschaftliche Perspektive entwirft der Verfasser am Textende?',
            options: [
              'Eine genetisch sanktionierte Klassengesellschaft jenseits historischer Ungleichheiten.',
              'Die Rückkehr zur Steinzeitwirtschaft ohne elektrische Energie.',
              'Ein weltweites Verbot aller medizinischen Behandlungen.',
              'Die friedliche Gleichstellung aller Erdbevölkerungen.'
            ],
            correctAnswer: 'Eine genetisch sanktionierte Klassengesellschaft jenseits historischer Ungleichheiten.',
            explanation: {
              en: 'Warning: "...droht eine genetisch sanktionierte Klassengesellschaft, gegen die historische Feudalsysteme harmlos anmuten."',
              fa: 'خطر پیدایش یک جامعه طبقاتی بر مبنای ژنتیک که نظام‌های فئودالی در برابر آن ملایم به نظر می‌رسند.',
              prs: 'ایجاد اختلاف طبقاتی هولناک بر اساس دستکاری‌های ژنتیکی.',
              tr: 'Tarihteki feodal düzenlerin bile hafif kalacağı genetik temelli kast toplumu tehlikesi.',
              ar: 'نشوء مجتمع طبقي مبرر جينياً تفوق قسوته وتمايزاته كل الأنظمة الإقطاعية التاريخية.',
              es: 'Una sociedad de clases sancionada genéticamente frente a la cual el feudalismo parecería inocuo.'
            }
          },
          {
            id: 'telc_c2_l_q9',
            question: 'Wie begreift die kritisierte Kultur Vulnerabilität und Sterblichkeit?',
            options: [
              'Als technisch tilgbare Ineffizienz statt existenzieller Lebensbedingung.',
              'Als heilige Pflichten des philosophischen Denkens.',
              'Als wirtschaftlich lukrative Investitionsgüter.',
              'Als exklusive Privilegien der herrschenden Oberschicht.'
            ],
            correctAnswer: 'Als technisch tilgbare Ineffizienz statt existenzieller Lebensbedingung.',
            explanation: {
              en: 'Text notes: "...als technisch tilgbare Ineffizienz...".',
              fa: 'به عنوان ناکارآمدی قابل پاک شدن با تکنولوژی نه شرط اگزیستانسیال انسان بودن.',
              prs: 'دیدن ضعف انسان به عنوان نقص فنی که باید پاک شود.',
              tr: 'Varoluşsal bir insanlık koşulu yerine teknik olarak yok edilebilir bir verimsizlik olarak görmesi.',
              ar: 'كنوع من عدم الكفاءة التقنية القابلة للمحو بدلاً من كونها مكوناً وجودياً ملازماً للإنسانية.',
              es: 'Como una ineficiencia técnicamente erradicable en vez de una dimensión constitutiva de la existencia.'
            }
          },
          {
            id: 'telc_c2_l_q10',
            question: 'Zwischen welchen beiden Polen changiert das transhumanistische Versprechen laut Einleitungssatz?',
            options: [
              'Zwischen prometheischem Titanentum und metaphysischer Hybris.',
              'Zwischen kindlicher Naivität und politischem Terror.',
              'Zwischen wirtschaftlicher Not und überschüssigem Reichtum.',
              'Zwischen handwerklichem Geschick und bürokratischer Lethargie.'
            ],
            correctAnswer: 'Zwischen prometheischem Titanentum und metaphysischer Hybris.',
            explanation: {
              en: 'Opening words: "...changiert zwischen prometheischem Titanentum und metaphysischer Hybris."',
              fa: 'در نوسان میان دلیری پرومته‌ای و تکبر مابعدالطبیعی.',
              prs: 'میان غرور بی‌پایان علمی و دست‌درازی به اسرار خلقت.',
              tr: 'Prometheusvari devleşme ile metafiziksel kibir ve haddini aşma arasında gidip gelir.',
              ar: 'يتأرجح بين الجسارة البروميثية الجبارة والغرور الميتافيزيقي المتجاوز للحدود.',
              es: 'Oscila entre el titanismo prometeico y una soberbia metafísica desmedida.'
            }
          }
        ]
      },
      {
        title: 'Teil 3: Textrekonstruktion & Kohärenz: Juristische Hermeneutik und Rechtssicherheit',
        sourceType: 'Zeitschrift für Rechtstheorie und Verfassungsdogmatik',
        body: 'Die Auslegung unbestimmter Rechtsbegriffe durch die Fachgerichtsbarkeit beruht auf einem vierfachen Kanon: der grammatikalischen, historischen, systematischen und teleologischen Methode. [A] Erweist sich der Wortlaut als semantisch vieldeutig, gewinnt die Entstehungsgeschichte des Gesetzes an heuristischem Gewicht. [B] Gleichwohl darf der historische Gesetzgeberwille den gegenwärtigen Normzweck nicht ungebührlich versteinern. [C] Erst die Einbettung der Einzelnorm in das Gesamtgefüge der Verfassungsordnung gewährleistet, dass richterliche Rechtsfortbildung nicht in Willkür umschlägt. [D] Das Postulat der Rechtssicherheit verlangt von den obersten Bundesgerichten mithin eine stetige und vorhersehbare Rechtsprechung, die dem Bürger ein verlässliches Vertrauen in die Rechtsordnung garantiert.',
        questions: [
          {
            id: 'telc_c2_l_q11',
            question: 'Welcher hermeneutische Satz passt logisch und kohärent an Stelle [A]?',
            options: [
              'Ausgangspunkt jeder richterlichen Subsumtion bleibt stets der objektive Wortsinn der gesetzlichen Bestimmung.',
              'Rechtsanwälte fordern deshalb die Abschaffung aller Gesetzbücher.',
              'Gerichtsverfahren müssen grundsätzlich ohne Schriftsätze verhandelt werden.',
              'Das Parlament tagt zu diesem Zwecke hinter verschlossenen Türen.'
            ],
            correctAnswer: 'Ausgangspunkt jeder richterlichen Subsumtion bleibt stets der objektive Wortsinn der gesetzlichen Bestimmung.',
            explanation: {
              en: 'Position [A] connects the canon methods to the subsequent sentence about literal ambiguity: "Ausgangspunkt (...) bleibt der objektive Wortsinn".',
              fa: 'نقطه آغاز هر تفسیر قضایی همواره معنای تحت‌اللفظی و عینی مقرره قانونی است.',
              prs: 'شروع قضاوت همیشه با متن صریح قانون است.',
              tr: 'Her yargısal yorumun başlangıç noktası daima yasa maddesinin nesnel lafzi anlamıdır.',
              ar: 'تعد نقطة الانطلاق في كل تأصيل قضائي هي المعنى الحرفي الموضوعي للنص التشريعي.',
              es: 'El punto de partida de toda subsunción judicial es siempre el sentido literal objetivo del precepto.'
            }
          },
          {
            id: 'telc_c2_l_q12',
            question: 'Welche funktionale Einschränkung formuliert Satz [B] für den historischen Willen des Gesetzgebers?',
            options: [
              'Er darf den gegenwärtigen objektiven Normzweck nicht ungebührlich versteinern.',
              'Er muss stets wörtlich den Beschlüssen aus dem Mittelalter entsprechen.',
              'Er ist für moderne Richter vollkommen irrelevant und unbeachtlich.',
              'Er darf nur von Historikern zitiert werden.'
            ],
            correctAnswer: 'Er darf den gegenwärtigen objektiven Normzweck nicht ungebührlich versteinern.',
            explanation: {
              en: 'Sentence [B] states: "Gleichwohl darf der historische Gesetzgeberwille den gegenwärtigen Normzweck nicht ungebührlich versteinern."',
              fa: 'خواست تاریخی قانون‌گذار نباید هدف عینی کنونی قانون را دچار جمود و تحجر کند.',
              prs: 'قوانین قدیمی نباید مانع پیشرفت و رفع نیازهای جامعه امروز شوند.',
              tr: 'Yasa koyucunun tarihsel iradesi güncel norm amacını katılaştırıp dondurmamalıdır.',
              ar: 'لا يجوز لإرادة المشرع التاريخية أن تحجر أو تجمد الغاية الموضوعية الحالية للنص القانوني.',
              es: 'La voluntad histórica del legislador no debe anquilosar desproporcionadamente la finalidad actual de la norma.'
            }
          },
          {
            id: 'telc_c2_l_q13',
            question: 'Was bewahrt die richterliche Rechtsfortbildung laut Satz [C] vor Willkür?',
            options: [
              'Die Einbettung der Einzelnorm in das Gesamtgefüge der Verfassungsordnung.',
              'Die persönliche Beliebtheit des vorsitzenden Richters in den Medien.',
              'Das Würfeln um das Urteil bei unklaren Tatbeständen.',
              'Die Weisung durch Ministerien der Exekutive.'
            ],
            correctAnswer: 'Die Einbettung der Einzelnorm in das Gesamtgefüge der Verfassungsordnung.',
            explanation: {
              en: 'Text clarifies: "...die Einbettung der Einzelnorm in das Gesamtgefüge der Verfassungsordnung gewährleistet, dass richterliche Rechtsfortbildung nicht in Willkür umschlägt."',
              fa: 'قرار گرفتن هنجار انفرادی در ساختار کلی نظام قانون اساسی.',
              prs: 'هماهنگ بودن حکم با کل اصول قانون اساسی کشور.',
              tr: 'Tekil normun anayasal düzenin bütüncül yapısına yerleştirilmesi.',
              ar: 'دمج القاعدة الفردية ضمن البنية الكلية الشاملة للنظام الدستوري.',
              es: 'La inserción de la norma singular en el entramado global del ordenamiento constitucional.'
            }
          },
          {
            id: 'telc_c2_l_q14',
            question: 'Was fordert das Postulat der Rechtssicherheit laut Schlusssatz von obersten Bundesgerichten?',
            options: [
              'Eine stetige und vorhersehbare Rechtsprechung zur Wahrung berechtigten Vertrauens.',
              'Monatliche Änderungen grundlegender Leitsätze.',
              'Den Ausschluss der Öffentlichkeit von allen Prozessen.',
              'Die Unterwerfung unter ausländische Militärtribunale.'
            ],
            correctAnswer: 'Eine stetige und vorhersehbare Rechtsprechung zur Wahrung berechtigten Vertrauens.',
            explanation: {
              en: 'States: "...eine stetige und vorhersehbare Rechtsprechung, die dem Bürger ein verlässliches Vertrauen (...) garantiert."',
              fa: 'رویه قضایی منسجم و قابل پیش‌بینی برای تضمین اعتماد شهروندان به قانون.',
              prs: 'آرای قضایی ثابت و قابل اطمینان برای مردم.',
              tr: 'Vatandaşın hukuki güvenliğini korumak için tutarlı ve öngörülebilir içtihat.',
              ar: 'اجتهاد قضائي مستقر وقابل للتوقع يكفل حماية الثقة المشروعة للمواطنين في القانون.',
              es: 'Una jurisprudencia constante y previsible que salvaguarde la confianza legítima de los ciudadanos.'
            }
          },
          {
            id: 'telc_c2_l_q15',
            question: 'Aus wie vielen Säulen besteht der klassische juristische Auslegungskanon?',
            options: [
              'Aus vier Methoden: grammatikalisch, historisch, systematisch und teleologisch.',
              'Aus zwei Methoden: wirtschaftlich und politisch.',
              'Aus zehn verschiedenen philosophischen Strömungen.',
              'Aus einer einzigen unfehlbaren Methode.'
            ],
            correctAnswer: 'Aus vier Methoden: grammatikalisch, historisch, systematisch und teleologisch.',
            explanation: {
              en: 'Opening mentions the fourfold canon: "der grammatikalischen, historischen, systematischen und teleologischen Methode".',
              fa: 'چهار روش: تحت‌اللفظی، تاریخی، سیستماتیک و غایت‌شناسانه.',
              prs: 'چهار شیوه تفسیر: ادبی، تاریخی، ساختاری و غایت‌گرایانه.',
              tr: 'Dört klasik yöntem: Lafzi, tarihsel, sistematik ve amaçsal (teleolojik).',
              ar: 'أربعة مناهج كلاسيكية: اللغوي، والتاريخي، والنظامي، والغائي (التليولوجي).',
              es: 'Cuatro métodos hermenéuticos: gramatical, histórico, sistemático y teleológico.'
            }
          }
        ]
      },
      {
        title: 'Teil 4: Sprachbausteine C2: Feste Fügungen, Nominalstil und Präpositionalgefüge',
        sourceType: 'Sprachpraxis & Stilistik im gehobenen Amts- und Wissenschaftsdeutsch',
        body: 'In anspruchsvollen Texten entscheiden oft feine syntaktische Nuancen über stilistische Präzision. Bei folgenden fünf Sätzen ist das treffende Lexem bzw. der korrekte Präpositionalanschluss im gehobenen Register zu wählen.',
        questions: [
          {
            id: 'telc_c2_l_q16',
            question: 'Der Sprecher stellte die wissenschaftliche Redlichkeit der gegnerischen Studie entschieden _____ Abrede.',
            options: ['in', 'außer', 'unter', 'auf'],
            correctAnswer: 'in',
            explanation: {
              en: 'Collocation: "etwas in Abrede stellen" (to deny / dispute something).',
              fa: 'اصطلاح رسمی: in Abrede stellen به معنی تکذیب کردن و انکار نمودن چیزی.',
              prs: 'اصطلاح ثابت in Abrede stellen به معنای انکار کردن.',
              tr: '"etwas in Abrede stellen" kalıbı bir şeyi kesin bir dille inkar etmek anlamına gelir.',
              ar: 'التعبير الوظيفي الثابت هو (etwas in Abrede stellen) أي أنكره ورفض صحته.',
              es: 'Locución verbal culta: "etwas in Abrede stellen" (negar o poner en duda tajantemente).'
            }
          },
          {
            id: 'telc_c2_l_q17',
            question: 'Die neue Gesetzesinitiative zielt darauf ab, die Rechte vulnerabler Gruppen umfassend zur Geltung _____ bringen.',
            options: ['zu', 'nach', 'bei', 'vor'],
            correctAnswer: 'zu',
            explanation: {
              en: 'Fixed functional verb structure: "etwas zur Geltung bringen" (to assert / bring to bear).',
              fa: 'ترکیب اسمی-فعلی: etwas zur Geltung bringen به معنی به منصه ظهور رساندن و احقاق حق.',
              prs: 'اصطلاح zur Geltung bringen یعنی چیزی را ارزشمند و اثرگذار ساختن.',
              tr: '"etwas zur Geltung bringen" (bir şeyi geçerli kılmak, etkisini hissettirmek).',
              ar: 'المركب الفعلي (etwas zur Geltung bringen) يعني إبرازه وإعمال أثره بقوة.',
              es: 'Locución: "etwas zur Geltung bringen" (hacer valer o destacar plenamente).'
            }
          },
          {
            id: 'telc_c2_l_q18',
            question: 'Angesichts der Faktenlage fiel der Beschluss _____ Einstimmigkeit.',
            options: ['in voller', 'mit vollster', 'unter aller', 'bei ganzer'],
            correctAnswer: 'in voller',
            explanation: {
              en: 'Idiomatic high register: "in voller Einstimmigkeit" (in full unanimity).',
              fa: 'کاربرد اصطلاحی فاخر: in voller Einstimmigkeit به معنی با اتفاق آرای کامل.',
              prs: 'با هماهنگی و رضایت کامل همه اعضا.',
              tr: 'Resmi dilde "in voller Einstimmigkeit" (tam bir oybirliğiyle) kullanılır.',
              ar: 'الصيغة الأسلوبية الرفيعة هي (in voller Einstimmigkeit) أي بالإجماع التام المطلق.',
              es: 'Fórmula estilística formal: "in voller Einstimmigkeit" (por unanimidad total).'
            }
          },
          {
            id: 'telc_c2_l_q19',
            question: 'Das Forschungsteam zog die bisherigen Messergebnisse grundlegend _____ Zweifel.',
            options: ['in', 'an', 'zu', 'unter'],
            correctAnswer: 'in',
            explanation: {
              en: 'Functional verb phrase: "etwas in Zweifel ziehen" (to cast doubt on something).',
              fa: 'همایند فعلی: etwas in Zweifel ziehen به معنی مورد شک و تردید قرار دادن.',
              prs: 'شک کردن در یافته‌های قبلی.',
              tr: '"etwas in Zweifel ziehen" (bir şeyi şüpheyle karşılamak, kuşkulanmak).',
              ar: 'التعبير القياسي الأكاديمي هو (etwas in Zweifel ziehen) أي شكك في أمره.',
              es: 'Locución funcional: "etwas in Zweifel ziehen" (poner algo en tela de juicio).'
            }
          },
          {
            id: 'telc_c2_l_q20',
            question: 'Der Wissenschaftler wusste seine Thesen durch umfangreiches Quellenmaterial unter Beweis _____ stellen.',
            options: ['zu', 'um', 'an', 'bei'],
            correctAnswer: 'zu',
            explanation: {
              en: 'Functional verb: "etwas unter Beweis stellen" (to prove / demonstrate convincingly).',
              fa: 'ترکیب فعلی: etwas unter Beweis stellen به معنی به اثبات رساندن.',
              prs: 'چیزی را ثابت کردن و نشان دادن صحت آن.',
              tr: '"etwas unter Beweis stellen" (bir şeyi ispatlamak, kanıtlamak).',
              ar: 'التعبير الوظيفي (etwas unter Beweis stellen) يعني أثبت وبرهن بشكل قاطع.',
              es: 'Locución culta: "etwas unter Beweis stellen" (demostrar fehacientemente).'
            }
          }
        ]
      }
    ]
  },
  hoeren: {
    title: 'Modul Hören: Fachkolloquium, Rundfunkdebatte & Ringvorlesung (40 Minuten)',
    durationMinutes: 40,
    audioItems: [
      {
        id: 'telc_c2_h_item1',
        title: 'Teil 1: Fachkolloquium: Quanteninformationstheorie und Verschränkung',
        situation: 'Ein Vortrag am Max-Planck-Institut für Quantenoptik über die Nichtlokalität der Quantenmechanik.',
        transcript: 'Referent: Meine Damen und Herren, Einsteins berühmtes Verdikt über die "spukhafte Fernwirkung" markierte den vehementesten Einspruch gegen das quantenmechanische Standardmodell. Heute wissen wir dank der Verletzung der Bellschen Ungleichungen mit empirischer Gewissheit: Die Natur ist auf fundamentaler Ebene nicht-lokal. Wenn zwei Teilchen verschränkt sind, lässt sich der Zustand des Gesamtsystems nicht auf die Summe der Zustände seiner isolierten Subsysteme reduzieren. Jede Messung an einem Partikel determiniert instantan den Zustand des Korrelats – unabhängig von räumlicher Distanz und ohne Übertragung klassischer Signale.',
        questions: [
          {
            id: 'telc_c2_h_q1',
            question: 'Was bezeichnete Albert Einstein einst als "spukhafte Fernwirkung"?',
            options: [
              'Die quantenmechanische Verschränkung und Nichtlokalität über Raumdistanzen hinweg.',
              'Die Anziehungskraft zwischen Himmelskörpern im Vakuum.',
              'Die Übertragung von Radiowellen durch elektromagnetische Felder.',
              'Die optische Verzerrung von Licht im Gravitationsfeld schwarzer Löcher.'
            ],
            correctAnswer: 'Die quantenmechanische Verschränkung und Nichtlokalität über Raumdistanzen hinweg.',
            explanation: {
              en: 'Transcript explains: "Einsteins berühmtes Verdikt über die spukhafte Fernwirkung markierte den (...) Einspruch gegen die Quantenmechanik."',
              fa: 'درهم‌تنیدگی کوانتومی و اثرگذاری ناآنی غیرمحلی که انیشتین آن را اثر شبح‌وار نامید.',
              prs: 'درهم‌تنیدگی ذرات در فیزیک کوانتوم.',
              tr: 'Kuantum dolanıklığı ve uzamsal mesafeleri aşan yerel-olmayan anlık etkileşim.',
              ar: 'التشابك الكمي واللاتموضع الآني الذي وصفه آينشتاين بالتأثير الشبحي عن بعد.',
              es: 'El entrelazamiento cuántico y la no-localidad que operan a través del espacio.'
            }
          },
          {
            id: 'telc_c2_h_q2',
            question: 'Wodurch wurde die Nichtlokalität der Natur empirisch endgültig bewiesen?',
            options: [
              'Durch die experimentell nachgewiesene Verletzung der Bellschen Ungleichungen.',
              'Durch die Berechnung der Sonnenfinsternis von 1919.',
              'Durch die Erfindung des ersten Transistorradios.',
              'Durch computergestützte Wettervorhersagen.'
            ],
            correctAnswer: 'Durch die experimentell nachgewiesene Verletzung der Bellschen Ungleichungen.',
            explanation: {
              en: 'Speaker states: "...dank der Verletzung der Bellschen Ungleichungen mit empirischer Gewissheit".',
              fa: 'از طریق نقض تجربی نامساوی‌های بل اثبات شد.',
              prs: 'آزمایش‌های نامساوی بل این پدیده را ثابت کردند.',
              tr: 'Bell eşitsizliklerinin deneysel olarak ihlal edilmesi sayesinde.',
              ar: 'من خلال الإثبات التجريبي لانتهاك متباينات بيل الفيزيائية الشهيرة.',
              es: 'Mediante la transgresión empíricamente probada de las desigualdades de Bell.'
            }
          },
          {
            id: 'telc_c2_h_q3',
            question: 'Was geschieht bei einer quantenmechanischen Messung an einem verschränkten Partikel?',
            options: [
              'Sie determiniert instantan den Zustand des Partnerteilchens ohne klassische Signalübertragung.',
              'Sie zerstört augenblicklich das gesamte umgebende Universum.',
              'Sie erfordert eine Lichtlaufzeit von mehreren Lichtjahren.',
              'Sie wandelt das Teilchen in reine elektromagnetische Strahlung um.'
            ],
            correctAnswer: 'Sie determiniert instantan den Zustand des Partnerteilchens ohne klassische Signalübertragung.',
            explanation: {
              en: 'Explicit: "Jede Messung an einem Partikel determiniert instantan den Zustand des Korrelats – (...) ohne Übertragung klassischer Signale."',
              fa: 'اندازه‌گیری روی یک ذره بلافاصله حالت ذره جفت را بدون ارسال سیگنال کلاسیک تعیین می‌کند.',
              prs: 'اندازه‌گیری یک ذره بدون اتلاف وقت وضعیت ذره دیگر را مشخص می‌کند.',
              tr: 'Bir parçacıktaki ölçüm, klasik sinyal iletimi olmaksızın eşlenik parçacığın durumunu anında belirler.',
              ar: 'يحدد القياس على أحد الجسيمات حالة الجسيم المقترن به فورياً دون نقل إشارات تقليدية.',
              es: 'Determina instantáneamente el estado del correlato sin mediación de señales físicas clásicas.'
            }
          },
          {
            id: 'telc_c2_h_q4',
            question: 'Wie verhält sich das Gesamtsystem verschränkter Teilchen zu seinen Teilsystemen?',
            options: [
              'Es lässt sich nicht auf die bloße Summe der isolierten Subsystemzustände reduzieren.',
              'Es ist stets exakt identisch mit der arithmetischen Addition beider Massen.',
              'Es verhält sich nach den Gesetzen der newtonschen Mechanik.',
              'Es verliert alle quantenmechanischen Eigenschaften.'
            ],
            correctAnswer: 'Es lässt sich nicht auf die bloße Summe der isolierten Subsystemzustände reduzieren.',
            explanation: {
              en: 'Transcript states: "...lässt sich der Zustand des Gesamtsystems nicht auf die Summe der Zustände seiner isolierten Subsysteme reduzieren."',
              fa: 'وضعیت کل سیستم را نمی‌توان به مجموع وضعیت‌های اجزای مجزا فروکاست.',
              prs: 'کل سیستم چیزی فراتر از مجموع تک‌تک اجزای آن است.',
              tr: 'Bütünün durumu, yalıtılmış alt sistemlerin durumlarının basit bir toplamına indirgenemez.',
              ar: 'لا يمكن اختزال حالة النظام الكلي إلى مجرد مجموع حالات الأنظمة الفرعية المعزولة.',
              es: 'No puede reducirse a la simple suma de los estados de sus subsistemas aislados.'
            }
          }
        ]
      },
      {
        id: 'telc_c2_h_item2',
        title: 'Teil 2: Rundfunkdebatte: Demographischer Wandel und Generationengerechtigkeit',
        situation: 'Eine Kontroverse im Deutschlandfunk zwischen einem Soziologen und einer Rentenökonomin.',
        transcript: 'Ökonomin: Wenn der Altenquotient in den kommenden zwei Dekaden auf historische Höchststände klettert, gerät das umlagefinanzierte Generationenmodell an seine mathematischen Belastungsgrenzen. Wir können den erwerbstätigen Kohorten keine Abgabenlast von über sechzig Prozent aufbürden, ohne Innovationskraft und Leistungsanreize abzuwürgen. Soziologe: Dieser fiskalische Alarmismus verengt die Debatte fahrlässig! Generationengerechtigkeit erschöpft sich nicht in versicherungsmathematischen Bilanzen. Die ältere Generation hat das volkswirtschaftliche Realkapital und die demokratischen Institutionen aufgebaut, von deren Stabilität die Jüngeren heute profitieren. Wer die Generationen gegeneinander ausspielt, untergräbt das gesellschaftliche Grundvertrauen.',
        questions: [
          {
            id: 'telc_c2_h_q5',
            question: 'Welche Kernbefürchtung äußert die Rentenökonomin hinsichtlich des Generationenmodells?',
            options: [
              'Das Umlagesystem gerate durch den steigenden Altenquotienten an mathematische Grenzen.',
              'Die ältere Generation verweigere die Übergabe von Führungspositionen.',
              'Alle Universitäten müssten wegen Geldmangels geschlossen werden.',
              'Es gebe keine Banken mehr für Rentenzahlungen.'
            ],
            correctAnswer: 'Das Umlagesystem gerate durch den steigenden Altenquotienten an mathematische Grenzen.',
            explanation: {
              en: 'The economist states: "...gerät das umlagefinanzierte Generationenmodell an seine mathematischen Belastungsgrenzen."',
              fa: 'نظام بازنشستگی جاری بر اثر افزایش نسبت سالمندان به مرزهای ریاضی تاب‌آوری خود می‌رسد.',
              prs: 'افزایش جمعیت سالمندان بار مالی زیادی روی دوش شاغلان جوان می‌گذارد.',
              tr: 'Yaşlı bağımlılık oranının artmasıyla dağıtım esaslı emeklilik modeli matematiksel sınırlarına dayanmaktadır.',
              ar: 'وصول نظام التقاعد التكافلي إلى حدوده الحسابية القصوى بفعل الارتفاع القياسي لنسبة الإعالة.',
              es: 'El sistema de reparto intergeneracional alcanza sus límites matemáticos de sostenibilidad por la tasa de dependencia.'
            }
          },
          {
            id: 'telc_c2_h_q6',
            question: 'Was hält der Soziologe der ökonomischen Sichtweise entgegen?',
            options: [
              'Die ältere Generation habe das Realkapital und die Institutionen aufgebaut, von denen Jüngere profitieren.',
              'Man solle das Renteneintrittsalter sofort auf 85 Jahre anheben.',
              'Ökonomische Bilanzen seien die einzig maßgebliche moralische Richtschnur.',
              'Die Jugend trage die alleinige Schuld an den demographischen Verschiebungen.'
            ],
            correctAnswer: 'Die ältere Generation habe das Realkapital und die Institutionen aufgebaut, von denen Jüngere profitieren.',
            explanation: {
              en: 'Soziologe replies: "Die ältere Generation hat das volkswirtschaftliche Realkapital und die demokratischen Institutionen aufgebaut...".',
              fa: 'نسل گذشته سرمایه‌های عینی اقتصاد و نهادهای دموکراتیک را ساخته‌اند که جوانان از آن بهره‌مندند.',
              prs: 'نسل قدیم پایه‌های پیشرفت و امکانات امروزی را بنا کرده است.',
              tr: 'Yaşlı kuşağın, gençlerin bugün yararlandığı reel sermaye ve demokratik kurumları inşa ettiği gerçeği.',
              ar: 'بناء الجيل السابق لرأس المال الإنتاجي والمؤسسات الديمقراطية الراسخة التي ينعم بها الشباب اليوم.',
              es: 'Que las generaciones precedentes construyeron el capital real y las instituciones democráticas que sustentan el presente.'
            }
          },
          {
            id: 'telc_c2_h_q7',
            question: 'Vor welcher Gefahr warnt der Soziologe abschließend mit Nachdruck?',
            options: [
              'Vor der Untergrabung des gesellschaftlichen Grundvertrauens durch das Ausspielen der Generationen.',
              'Vor einem plötzlichen Anstieg der Zinsen auf Staatsanleihen.',
              'Vor der Abwanderung ausländischer Fachkräfte.',
              'Vor der Überalterung des Handwerkersektors.'
            ],
            correctAnswer: 'Vor der Untergrabung des gesellschaftlichen Grundvertrauens durch das Ausspielen der Generationen.',
            explanation: {
              en: 'He warns: "Wer die Generationen gegeneinander ausspielt, untergräbt das gesellschaftliche Grundvertrauen."',
              fa: 'تقابل ساختگی میان نسل‌ها اعتماد بنیادین جامعه را از میان می‌برد.',
              prs: 'اختلاف انداختن میان پیر و جوان باعث تضعیف جامعه می‌شود.',
              tr: 'Kuşakları birbirine karşı kışkırtmanın toplumsal temel güveni dinamitlemesi tehlikesi.',
              ar: 'تقويض الثقة المجتمعية الجوهرية نتيجة تأليب الأجيال والتحريض المتبادل بينها.',
              es: 'La fractura de la confianza social básica que deviene al contraponer demagógicamente a las generaciones.'
            }
          },
          {
            id: 'telc_c2_h_q8',
            question: 'Welche Abgabenquote bezeichnet die Ökonomin als Gefährdung für Innovationen?',
            options: [
              'Eine Abgabenlast von über sechzig Prozent.',
              'Eine Mehrwertsteuer von zehn Prozent.',
              'Einen Rundfunkbeitrag von zwanzig Euro.',
              'Eine Körperschaftssteuer von fünfzehn Prozent.'
            ],
            correctAnswer: 'Eine Abgabenlast von über sechzig Prozent.',
            explanation: {
              en: 'Explicit in text: "...keine Abgabenlast von über sechzig Prozent aufbürden, ohne Innovationskraft (...) abzuwürgen."',
              fa: 'بار مالیاتی و کسورات بیش از ۶۰ درصد.',
              prs: 'مالیات بالای ۶۰ درصد که مانع نوآوری می‌شود.',
              tr: 'Yüzde altmışın üzerindeki prim ve vergi yükü.',
              ar: 'عبء اقتطاعات وضرائب يتجاوز نسبة الستين بالمئة.',
              es: 'Una carga fiscal y contributiva superior al sesenta por ciento.'
            }
          }
        ]
      },
      {
        id: 'telc_c2_h_item3',
        title: 'Teil 3: Ringvorlesung: Ökonomische Bewertungsverfahren im Biosphärenschutz',
        situation: 'Eine Vorlesung an der Universität Freiburg zur Umweltökonomik und Naturkapitalrechnung.',
        transcript: 'Professorin: Die Monetarisierung von Ökosystemdienstleistungen – etwa die Berechnung des wirtschaftlichen Werts der Insektenbestäubung oder der CO2-Sequestrierung von Mooren – gilt Befürwortern als pragmatischer Hebel, um Naturgüter in marktwirtschaftliche Entscheidungen einzuspeisen. Kritiker monieren jedoch eine fundamentale Kommodifizierung der Lebenswelt: Wenn Natur nur insoweit Schutz verdient, wie sie dem Kapitalertrag dient, wird ihr inhärenter Eigenwert liquidiert. Sobald eine synthetische Technologie eine Ökosystemleistung billiger imitiert, verlöre der Primärwald nach dieser utilitaristischen Logik jede Daseinsberechtigung. Das ökologische Überleben der Biosphäre erfordert deontologische Grenzziehungen statt rein ökonomischer Opportunitätskalküle.',
        questions: [
          {
            id: 'telc_c2_h_q9',
            question: 'Welches Argument führen Befürworter für die Monetarisierung von Ökosystemdienstleistungen ins Feld?',
            options: [
              'Naturgüter ließen sich so als quantifizierbare Größen in marktwirtschaftliche Entscheidungen einspeisen.',
              'Dadurch könne man sämtliche Naturschutzgebiete auflösen.',
              'Landwirte müssten keine Insekten mehr auf ihren Feldern dulden.',
              'Es spare den Behörden die Erstellung wissenschaftlicher Gutachten.'
            ],
            correctAnswer: 'Naturgüter ließen sich so als quantifizierbare Größen in marktwirtschaftliche Entscheidungen einspeisen.',
            explanation: {
              en: 'Advocates say: "...pragmatischer Hebel, um Naturgüter in marktwirtschaftliche Entscheidungen einzuspeisen."',
              fa: 'ارزش‌گذاری پولی محیط‌زیست ابزاری است تا مواهب طبیعی در تصمیم‌گیری‌های بازار لحاظ شوند.',
              prs: 'محاسبه ارزش مالی طبیعت برای مجبور ساختن شرکت‌ها به حفظ آن.',
              tr: 'Doğal varlıkların piyasa kararlarına hesaba katılabilir değişkenler olarak dahil edilmesi.',
              ar: 'إدماج الموارد الطبيعية كقيم نقدية ملموسة ضمن معادلات اتخاذ القرارات في اقتصاد السوق.',
              es: 'Un mecanismo pragmático para incorporar los bienes naturales en las decisiones del mercado.'
            }
          },
          {
            id: 'telc_c2_h_q10',
            question: 'Welche prinzipielle Gefahr sehen Kritiker in der Kommodifizierung der Natur?',
            options: [
              'Die Liquidierung des inhärenten Eigenwerts der Natur jenseits von Kapitalerträgen.',
              'Den sofortigen Konkurs aller agrarischen Genossenschaften.',
              'Die vollständige Verstaatlichung internationaler Forstbetriebe.',
              'Die Verteuerung von synthetischen Düngemitteln.'
            ],
            correctAnswer: 'Die Liquidierung des inhärenten Eigenwerts der Natur jenseits von Kapitalerträgen.',
            explanation: {
              en: 'Text notes: "...wird ihr inhärenter Eigenwert liquidiert."',
              fa: 'نابود شدن ارزش ذاتی و بنیادین طبیعت فراتر از بازدهی مالی و سودآوری سرمایه‌گذاری.',
              prs: 'از بین رفتن احترام به طبیعت وقتی که فقط سود مادی ملاک باشد.',
              tr: 'Doğanın sermaye getirisi ötesindeki içkin öz-değerinin tamamen tasfiye edilmesi.',
              ar: 'تصفية وإلغاء القيمة الذاتية الجوهرية للطبيعة وتحويلها لسلعة تابعة للعائد الرأسمالي.',
              es: 'La liquidación del valor intrínseco de la naturaleza al supeditarla exclusivamente a la rentabilidad del capital.'
            }
          },
          {
            id: 'telc_c2_h_q11',
            question: 'Was würde laut Schlusssatz passieren, wenn eine synthetische Technologie eine Naturleistung billiger imitiert?',
            options: [
              'Der Naturraum verlöre nach rein utilitaristischer Logik jede Daseinsberechtigung.',
              'Die Biodiversität im Regenwald würde sich verdoppeln.',
              'Forscher würden die synthetische Technologie sofort verbieten.',
              'Die Weltbevölkerung würde freiwillig auf Industrieprodukte verzichten.'
            ],
            correctAnswer: 'Der Naturraum verlöre nach rein utilitaristischer Logik jede Daseinsberechtigung.',
            explanation: {
              en: 'Warns: "Sobald eine synthetische Technologie eine Ökosystemleistung billiger imitiert, verlöre der Primärwald (...) jede Daseinsberechtigung."',
              fa: 'اگر فناوری مصنوعی همان خدمت طبیعی را ارزان‌تر انجام دهد، جنگل طبق منطق منفعت‌طلبانه دلیل وجودی خود را از دست می‌دهد.',
              prs: 'اگر دستگاهی ارزان‌تر کار طبیعت را بکند، طبق این دیدگاه غلط دیگر نیازی به حفظ جنگل‌ها نیست.',
              tr: 'Yapay bir teknoloji aynı hizmeti daha ucuza sağlarsa, orman faydacı mantık gereği var olma hakkını kaybeder.',
              ar: 'فقدان الغابة الطبيعية لمبرر وجودها وفق المنطق النفعي الصرف بمجرد توفر بديل تكنولوجي أرخص.',
              es: 'El bosque primario perdería toda justificación de existencia según la lógica utilitarista si una tecnología resultase más barata.'
            }
          },
          {
            id: 'telc_c2_h_q12',
            question: 'Was fordert die Dozentin für das langfristige Überleben der Biosphäre?',
            options: [
              'Deontologische Grenzziehungen statt rein ökonomischer Opportunitätskalküle.',
              'Die bedingungslose Ausbeutung aller Tiefseeböden.',
              'Die Umwandlung von Naturschutzgebieten in Vergnügungsparks.',
              'Die Streichung aller umweltrechtlichen Richtlinien.'
            ],
            correctAnswer: 'Deontologische Grenzziehungen statt rein ökonomischer Opportunitätskalküle.',
            explanation: {
              en: 'Concludes: "Das ökologische Überleben (...) erfordert deontologische Grenzziehungen statt rein ökonomischer Opportunitätskalküle."',
              fa: 'تعیین مرزهای اخلاقی وظیفه‌گرایانه (دئونتولوژیک) به جای محاسبات اقتصادی سود و فرصت.',
              prs: 'خط قرمزهای اخلاقی و الزامی برای حفاظت از محیط زیست.',
              tr: 'Fırsatçı ekonomik hesaplar yerine ahlaki-deontolojik kesin kırmızı çizgiler çekilmesi.',
              ar: 'وضع خطوط حمائية واجبة أخلاقياً (ديونتولوجية) بدلاً من حسابات النفعية والفرص البديلة.',
              es: 'Límites deontológicos categóricos en lugar de cálculos oportunistas de costes y beneficios.'
            }
          }
        ]
      }
    ]
  },
  schreiben: {
    title: 'Modul Schriftlicher Ausdruck: Wissenschaftliche Abhandlung & Politikberatung (80 Minuten)',
    durationMinutes: 80,
    taskType: 'Akademische Stellungnahme / Forschungsantrag-Gutachten',
    situation: 'Sie verfassen als leitendes Mitglied einer interdisziplinären Expertenkommission ein Gutachten für den Wissenschaftsrat zum Thema: "Technologische Souveränität Europas im Spannungsfeld von industrieller Autarkie und globaler Wissenskooperation".',
    prompt: 'Analysieren Sie die dialektischen Herausforderungen europäischer Wissenschafts- und Industriepolitik. Wägen Sie die Risiken geopolitischer Protektionismen gegen die Gefahren technologischer Abhängigkeiten ab und formulieren Sie zukunftsträchtige Handlungsempfehlungen für supranationale Institutionen.',
    guidingPoints: [
      'Begriffsbestimmung und epistemische Dimension "technologischer Souveränität"',
      'Kritische Würdigung der Dichotomie zwischen protektionistischer Abschottung und multilateralem Austausch',
      'Synthese: Handlungsempfehlungen zur Stärkung europäischer Grundlagenforschung und normativer Technologieführerschaft'
    ],
    targetWordCount: 'ca. 400 - 500 Wörter',
    sampleSolution: 'Die Debatte um technologische Souveränität berührt im Kern das Verhältnis von politischer Handlungsfähigkeit und epistemischer Offenheit. In einer multipolaren Weltordnung, in der technologische Wertschöpfungsketten zusehends als geopolitische Hebel instrumentalisiert werden, erweist sich die bloße Beschwörung des Freihandels als naiv. Gleichwohl birgt der Rückzug in protektionistische Autarkiefantasien die fundamentale Gefahr wissenschaftlicher Inzucht und ökonomischer Ineffizienz. Eine zukunftsfähige europäische Strategie darf daher nicht auf hermetische Abschottung zielen, sondern muss vielmehr eine asymmetrische Resilienz anstreben: In strategischen Schlüsseltechnologien – wie der Halbleiterfertigung und Quantenrechenarchitektur – bedarf es eigener industrieller Kompetenzen, während die Grundlagenforschung kompromisslos transnational verankert bleiben muss. Nur wer imstande ist, offene Wissensnetzwerke mit robuster technologischer Selbstbehauptung zu verbinden, wird im 21. Jahrhundert normative Maßstäbe für eine menschenzentrierte Digitalisierung setzen können.',
    scoringCriteria: {
      en: 'Evaluated on academic rigor, dialectical depth, sophisticated syntactic structures (hypotaxis, gerundives, modal constructions), and idiomatic German at near-native level.',
      fa: 'ارزیابی بر مبنای دقت آکادمیک، عمق دیالکتیکی، ساختارهای نحوی پیچیده و تسلط اصطلاحی در حد زبان مادری.',
      prs: 'ارزیابی بر اساس نگارش علمی فاخر، عمق تحلیل و فصاحت بیان در سطح پیشرفته C2.',
      tr: 'Akademik tutarlılık, diyalektik derinlik, ileri düzey sentaktik yapılar ve ana dili seviyesinde Almanca kullanımı.',
      ar: 'يتم التقييم وفق الصرامة الأكاديمية، والعمق الجدلي، والتراكيب النحوية المتقدمة، وبلاغة الصياغة المقاربة لأصحاب اللغة.',
      es: 'Evaluado conforme al rigor metodológico, profundidad dialéctica, complejidad sintáctica y precisión fraseológica nativa.'
    }
  },
  sprechen: {
    title: 'Modul Sprechen: Fachvortrag, Replik & Konsensfindung (20 Minuten)',
    durationMinutes: 20,
    teil1: {
      name: 'Teil 1: Akademischer Monologvortrag (ca. 5 Minuten)',
      instruction: {
        en: 'Deliver an authoritative, deeply structured presentation on an interdisciplinary scientific question without notes.',
        fa: 'ارائه سخنرانی مقتدرانه و ساختاریافته پیرامون مبحثی بین‌رشته‌ای بدون نگاه به یادداشت‌ها.',
        prs: 'ارائه کنفرانس ۵ دقیقه‌ای تخصصی و دانشگاهی.',
        tr: 'Yazılı nota bakmaksızın disiplinlerarası bilimsel bir mesele hakkında 5 dakikalık yetkin bir sunum yapınız.',
        ar: 'إلقاء محاضرة أكاديمية رصينة ومحكمة لمدة 5 دقائق حول إشكالية علمية متداخلة التخصصات دون مسودة.',
        es: 'Exposición magistral y articulada de 5 minutos sobre una problemática científica interdisciplinar.'
      },
      prompts: [
        'Ethik der Genom-Modifikation: Wo verläuft die Demarkationslinie zwischen kurativer Therapie und eugenischer Optimierung?',
        'Klimamigration als völkerrechtliches Desiderat: Wie schützt man Staatenlose ohne Territorium?'
      ],
      sampleResponse: 'Sehr geehrte Kolleginnen und Kollegen, die ethische Beurteilung des Genome-Editings zwingt uns zur Revision klassischer deontologischer Grenzziehungen. Während somatische Gentherapien unstrittig dem ärztlichen Heilauftrag entsprechen, tangieren Keimbahneingriffe das genetische Erbe kommender Generationen, die einer solchen Intervention niemals zustimmen konnten...'
    },
    teil2: {
      name: 'Teil 2: Dialektische Replik und Einwandbehandlung (ca. 5 Minuten)',
      instruction: {
        en: 'Critique the partner lecture analytically, formulate challenging counter-hypotheses, and respond to their objections.',
        fa: 'نقد تحلیلی ارائه طرف مقابل، ارائه فرضیه‌های نقض چالش‌برانگیز و پاسخ به اشکالات او.',
        prs: 'نقد علمی سخنان طرف مقابل و پاسخ متقابل به نقدهای او.',
        tr: 'Partnerinizin tezlerini analitik olarak eleştirin, çürütücü argümanlar geliştirin ve onun itirazlarına yanıt verin.',
        ar: 'نقد أطروحات الزميل تحليلياً وصياغة فرضيات مضادة ومواجهة اعتراضاته بحجج دقيقة.',
        es: 'Criticar analíticamente la ponencia del compañero, contraponer hipótesis de refutación y rebatir sus objeciones.'
      },
      topicCards: [
        'Einwand: Bedeutet das strikte Verbot von Keimbahneingriffen nicht die unterlassene Hilfeleistung gegenüber vermeidbaren Erbkrankheiten?',
        'Replik: Wie soll eine internationale Ächtung funktionieren, wenn autoritäre Regime regulatorische Schlupflöcher ausnutzen?'
      ],
      sampleResponse: 'Ihre Argumentation stützt sich primär auf ein utilitaristisches Leidminderungspostulat. Doch dieser Ansatz verkennt, dass die Unterscheidung zwischen pathologischer Anomalie und bloßer Varianz unausweichlich gesellschaftlichen Normierungszwängen unterliegt. Wenn wir die Büchse der Pandora einmal öffnen, erodiert der Begriff des Unverfügbaren...'
    },
    teil3: {
      name: 'Teil 3: Verhandlung eines Expertenkonsenses (ca. 10 Minuten)',
      instruction: {
        en: 'Collaboratively negotiate a concrete institutional resolution or guideline draft under conflicting stakeholder priorities.',
        fa: 'مذاکره مشارکتی جهت تدوین پیش‌نویس راهکار نهادی با وجود اولویت‌های متضاد ذینفعان.',
        prs: 'رسیدن به توافق مشترک کارشناسی در مورد یک راهکار عملی.',
        tr: 'Çelişen önceliklere rağmen somut bir kurumsal tavsiye metni üzerinde müzakere ederek uzlaşma sağlayınız.',
        ar: 'التفاوض المشترك لصياغة توصية مؤسسية ملموسة والتوفيق بين المصالح المتباينة.',
        es: 'Negociar colegiadamente un dictamen institucional de consenso frente a intereses contrapuestos.'
      },
      planningScenario: 'Die Kommission soll verbindliche Regulierungsstandards für generative KI-Modelle im universitären Prüfungs- und Forschungswesen verabschieden.',
      discussionPoints: [
        'Transparenz- und Offenlegungspflichten bei Dissertationen und Habilitationen',
        'Sanktionsmechanismen bei verdeckter Verwendung synthetischer Texte',
        'Förderung von Open-Source-Modellen im europäischen Wissenschaftsraum'
      ],
      sampleResponse: 'Lassen Sie uns versuchen, die Positionen zusammenzuführen. Wir könnten einen gestuften Regulierungsansatz wählen: Volle Offenlegungspflicht bei wissenschaftlichen Qualifikationsarbeiten bei gleichzeitigem Verzicht auf pauschale Verbote. Stattdessen etablieren wir hochschulübergreifende Validierungsprüfungen, die den Fokus auf mündliche Disputationen und empirische Reproduzierbarkeit verlagern.'
    }
  }
};
