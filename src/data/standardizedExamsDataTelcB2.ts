import { StandardizedExam } from '../types';

// =========================================================================
// TELC DEUTSCH B2 (OFFIZIELLER STANDARD)
// Gesamtdauer: ca. 140 Minuten
// Leseverstehen & Sprachbausteine: 90 Min (30 Aufgaben)
// Hörverstehen: ca. 20 Min (20 Aufgaben) | Schreiben: 30 Min | Sprechen: 15 Min
// =========================================================================
export const EXAM_TELC_B2: StandardizedExam = {
  id: 'exam_telc_b2',
  title: 'telc Deutsch B2 (Offizieller Standard)',
  standard: 'telc',
  level: 'B2.1',
  totalDurationMinutes: 140,
  passingScore: '60% (180 / 300 Punkte: Schriftlich min. 135 Pkt, Mündlich min. 45 Pkt)',
  strategy: {
    level: 'B2.1',
    timeManagement: [
      {
        section: 'Leseverstehen & Sprachbausteine (90 Minuten • 30 Aufgaben)',
        allocatedMinutes: 90,
        tip: {
          en: '90 minutes for Leseverstehen Teil 1-3 (20 items, approx. 60 min) and Sprachbausteine Teil 1-2 (10 items, approx. 30 min).',
          fa: '۹۰ دقیقه برای درک مطلب ۱ تا ۳ (۲۰ سوال، ۶۰ دقیقه) و ساختارهای زبانی ۱ و ۲ (۱۰ سوال، ۳۰ دقیقه).',
          prs: '۹۰ دقیقه برای ۳۰ سوال درک مطلب و گرامر.',
          tr: '90 dakikada 30 soru: Okuma (20 soru) ve Dil Yapıları (10 soru).',
          ar: '90 دقيقة لإنجاز 30 سؤالاً في القراءة والمهارات اللغوية والنحوية.',
          es: '90 minutos para 30 tareas de comprensión lectora y estructuras lingüísticas.'
        }
      },
      {
        section: 'Hörverstehen (ca. 20 Minuten • 20 Aufgaben)',
        allocatedMinutes: 20,
        tip: {
          en: '20 listening tasks. Teil 1 (Globalverstehen, 5 tasks), Teil 2 (Detailverstehen, 10 tasks), Teil 3 (Selektiv, 5 tasks).',
          fa: '۲۰ سوال شنیداری در ۲۰ دقیقه. بخش ۱ (۵ سوال)، بخش ۲ (۱۰ سوال)، بخش ۳ (۵ سوال).',
          prs: '۲۰ سوال شنیداری تلک B2 در ۲۰ دقیقه.',
          tr: 'Yaklaşık 20 dakikada 20 dinleme sorusu.',
          ar: '20 سؤال استماع مقسمة على 3 أجزاء في 20 دقيقة تقريباً.',
          es: '20 tareas auditivas en aproximadamente 20 minutos.'
        }
      },
      {
        section: 'Schriftlicher Ausdruck (30 Minuten • 1 formeller Brief)',
        allocatedMinutes: 30,
        tip: {
          en: 'Write a formal letter (Beschwerdebrief or Bitte um Information, approx. 150 words) covering all guiding points.',
          fa: 'نگارش یک نامه رسمی (شکایت یا درخواست اطلاعات) با حدود ۱۵۰ کلمه و پوشش کامل تمام بندها.',
          prs: 'نوشتن یک نامه رسمی حدود ۱۵۰ کلمه در ۳۰ دقیقه.',
          tr: '30 dakikada şikayet veya bilgi edinme konulu yaklaşık 150 kelimelik resmi mektup.',
          ar: 'كتابة رسالة رسمية (شكوى أو طلب معلومات) بحوالي 150 كلمة في 30 دقيقة.',
          es: 'Redacción de una carta formal de reclamación o solicitud de aprox. 150 palabras.'
        }
      }
    ],
    stepByStepStrategies: [
      {
        title: 'Sprachbausteine Teil 1: Komplexe Grammatikstrukturen identifizieren',
        steps: [
          {
            en: '1. Pay close attention to fixed prepositional verbs, passive constructions, and subjunctive II forms. 2. Verify agreement of relative pronouns and adjective declension.',
            fa: '۱. به افعال با حروف اضافه ثابت، ساختارهای مجهول و وجه التزامی (Konjunktiv II) دقت ویژه کنید. ۲. مطابقت ضمایر موصولی و صرف صفت‌ها را تطبیق دهید.',
            prs: 'حروف اضافه افعال و صرف صفت‌ها را دقیق بسنجید.',
            tr: '1. Edatlı fiillere, edilgen yapıya ve Konjunktiv II kalıplarına dikkat edin. 2. İlgi zamirleri ve sıfat çekimlerini teyit edin.',
            ar: '1. ركز على الأفعال المرتبطة بحروف جر ثابتة، وصيغ المبني للمجهول و Konjunktiv II. 2. راجع مطابقة الضمائر الموصولة ونهايات الصفات.',
            es: '1. Presta atención a verbos con preposición, voz pasiva y Konjunktiv II. 2. Verifica pronombres relativos y declinaciones adjetivales.'
          }
        ]
      }
    ],
    commonMistakes: [
      {
        mistake: 'Falsche Rektion bei B2-Verben (z. B. "abhängen von" mit Akkusativ verwechseln)',
        correction: '"abhängen von" verlangt ausnahmslos den Dativ',
        explanation: {
          en: 'Verbs like abhängen von, bestehen aus, beitragen zu always govern Dativ.',
          fa: 'افعالی نظیر abhängen von (وابسته بودن به)، bestehen aus (تشکیل شدن از)، beitragen zu (مشارکت در) همواره نیازمند Dativ هستند.',
          prs: 'فعل‌هایی مانند abhängen von همیشه داتیو می‌گیرند.',
          tr: 'abhängen von gibi kalıp fiiller istisnasız Dativ gerektirir.',
          ar: 'أفعال مثل abhängen von تتطلب حالة Dativ دون استثناء.',
          es: 'Verbos como abhängen von rigen dativo obligatoriamente.'
        }
      }
    ]
  },
  lesen: {
    title: 'Modul Leseverstehen & Sprachbausteine (90 Minuten • 30 Aufgaben)',
    durationMinutes: 90,
    texts: [
      {
        title: 'Teil 1: Globalverstehen (Aufgaben 1 bis 5 • Zuordnung von Meinungen)',
        sourceType: '5 Meinungsbeiträge aus einem Fachforum zum Thema "Künstliche Intelligenz am Arbeitsplatz"',
        body: `Beitrag 1 (Dr. Klaus Mertens, Arbeitsökonom):
"Die Automatisierung durch KI-Modelle wird nicht primär Arbeitsplätze vernichten, sondern Berufsfelder grundlegend transformieren. Routinetätigkeiten im Büro werden obsolet, wodurch Raum für kreative Problemlösung und zwischenmenschliche Verhandlungsführung entsteht. Wer sich kontinuierlich weiterbildet, wird von der Technologie profitieren."

Beitrag 2 (Susanne Lindner, Betriebsratsvorsitzende):
"Wir beobachten mit Sorge, dass Algorithmen zunehmend zur verdeckten Leistungsüberwachung von Mitarbeitern eingesetzt werden. Tastenanschläge und Verweildauern werden gemessen. Hier bedarf es strenger gesetzlicher Leitplanken und eines Mitbestimmungsrechts der Belegschaft, um das Vertrauensverhältnis im Betrieb nicht zu zerstören."

Beitrag 3 (Markus Weber, Start-up-Gründer):
"Für kleinere Unternehmen ist generative KI ein gewaltiger Produktivitätsschub. Was früher ein fünfköpfiges Entwickler- und Marketingteam erforderte, kann heute von zwei Fachkräften mit KI-Unterstützung in kürzerer Zeit realisiert werden. Die Hürden für Innovationen sind so niedrig wie nie zuvor."

Beitrag 4 (Prof. Dr. Helga Brandt, Medienpädagogin):
"Die größte Gefahr sehe ich in einer zunehmenden Entfremdung und einem Verlust fundierter Urteilskompetenz. Wenn junge Berufseinsteiger Texte und Konzepte blind von Sprachmodellen generieren lassen, verlernen sie eigenständiges kritisches Denken und methodische Quellenprüfung."

Beitrag 5 (Thomas Schultze, Jurist für Arbeitsrecht):
"Die haftungsrechtlichen Implikationen von KI-Entscheidungen sind in vielen Bereichen noch völlig ungeklärt. Wenn ein automatisiertes System im Personalwesen diskriminierende Auswahlentscheidungen trifft, haftet das Unternehmen. Es braucht klare Transparenzpflichten über den Einsatz solcher Systeme."`,
        questions: [
          {
            id: 'telc_b2_l_q1',
            question: '1. Wer sieht in KI vor allem eine Chance für höhere Produktivität kleiner Teams?',
            options: ['Markus Weber (Beitrag 3)', 'Dr. Klaus Mertens (Beitrag 1)', 'Susanne Lindner (Beitrag 2)'],
            correctAnswer: 'Markus Weber (Beitrag 3)',
            explanation: {
              en: 'Markus Weber highlights that startups with 2 workers can now do the work of 5 using AI.',
              fa: 'مارکوس وبر تأکید می‌کند که تیم‌های کوچک دو نفره به کمک هوش مصنوعی می‌توانند کار ۵ نفر را با سرعت و بهره‌وری بالاتر انجام دهند.',
              prs: 'مارکوس وبر از تولید و سرعت کار در تیم‌های کوچک سخن می‌گوید.',
              tr: 'Markus Weber, küçük ekiplerin yapay zeka ile 5 kişilik işi yapabildiğini açıklar.',
              ar: 'ماركوس فيبر يبرز دور الذكاء الاصطناعي في تمكين الفرق الصغيرة من تحقيق إنتاجية تعادل فرقاً كبرى.',
              es: 'Markus Weber enfatiza el salto de productividad en equipos pequeños gracias a la IA.'
            }
          },
          {
            id: 'telc_b2_l_q2',
            question: '2. Wer warnt vor Mitarbeiterüberwachung und fordert gesetzliche Regelungen?',
            options: ['Susanne Lindner (Beitrag 2)', 'Prof. Dr. Helga Brandt (Beitrag 4)', 'Thomas Schultze (Beitrag 5)'],
            correctAnswer: 'Susanne Lindner (Beitrag 2)',
            explanation: {
              en: 'Susanne Lindner warns of automated worker monitoring and demands legal guardrails.',
              fa: 'سوزانه لیندنر نسبت به پایش مخفیانه و نظارت عملکرد کارمندان هشدار می‌دهد و خواستار قوانین حمایتی است.',
              prs: 'سوزانه لیندنر نسبت به نظارت بر کارمندان هشدار می‌دهد.',
              tr: 'Susanne Lindner, çalışanların gizli gözetimine karşı yasal sınırlamalar talep eder.',
              ar: 'سوزان ليندنر تحذر من مراقبة أداء الموظفين آلياً وتطالب بضوابط قانونية صارمة.',
              es: 'Susanne Lindner denuncia el control y vigilancia oculta a trabajadores.'
            }
          },
          {
            id: 'telc_b2_l_q3',
            question: '3. Wer befürchtet einen Verlust von Urteilskraft und kritischem Denken bei Berufseinsteigern?',
            options: ['Prof. Dr. Helga Brandt (Beitrag 4)', 'Dr. Klaus Mertens (Beitrag 1)', 'Markus Weber (Beitrag 3)'],
            correctAnswer: 'Prof. Dr. Helga Brandt (Beitrag 4)',
            explanation: {
              en: 'Prof. Brandt warns young professionals may lose critical thinking and source evaluation skills.',
              fa: 'پروفسور برانت هشدار می‌دهد که تکیه نابینایانه به هوش مصنوعی باعث تضعیف تفکر انتقادی و مهارت اعتبارسنجی منابع می‌شود.',
              prs: 'پروفسور برانت از تضعیف فکر انتقادی هشدار می‌دهد.',
              tr: 'Prof. Dr. Helga Brandt, eleştirel düşünme ve kaynak sorgulama becerisinin körelmesinden endişelidir.',
              ar: 'البروفيسورة هيلغا براندت تتخوف من تراجع الحس النقدي والقدرة على تقييم المصادر لدى المبتدئين.',
              es: 'La Prof. Brandt alerta sobre la pérdida del juicio crítico en los jóvenes profesionales.'
            }
          },
          {
            id: 'telc_b2_l_q4',
            question: '4. Wer betont den Wandel von Routinearbeit hin zu kreativen Tätigkeiten?',
            options: ['Dr. Klaus Mertens (Beitrag 1)', 'Thomas Schultze (Beitrag 5)', 'Susanne Lindner (Beitrag 2)'],
            correctAnswer: 'Dr. Klaus Mertens (Beitrag 1)',
            explanation: {
              en: 'Dr. Mertens explains that routine office tasks will be replaced, leaving room for creative problem-solving.',
              fa: 'دکتر مرتنز توضیح می‌دهد که کارهای روتین اداری حذف شده و جای خود را به حل مسئله خلاقانه می‌دهند.',
              prs: 'دکتر مرتنز از خلاقیت به جای کارهای روتین سخن می‌گوید.',
              tr: 'Dr. Klaus Mertens, rutin işlerin yerini yaratıcı problem çözmeye bırakacağını belirtir.',
              ar: 'الدكتور كلاوس ميرتنز يوضح أن الذكاء الاصطناعي يستبدل الروتين بالحلول الإبداعية.',
              es: 'El Dr. Mertens explica la transformación de tareas rutinarias en habilidades creativas.'
            }
          },
          {
            id: 'telc_b2_l_q5',
            question: '5. Wer thematisiert Haftungsfragen und Risiken automatisierter Personalentscheidungen?',
            options: ['Thomas Schultze (Beitrag 5)', 'Markus Weber (Beitrag 3)', 'Prof. Dr. Helga Brandt (Beitrag 4)'],
            correctAnswer: 'Thomas Schultze (Beitrag 5)',
            explanation: {
              en: 'Thomas Schultze focuses on corporate liability and transparency when algorithms make personnel decisions.',
              fa: 'توماس شولتزه به مسئولیت‌های حقوقی شرکت‌ها در صورت تصمیم‌گیری تبعیض‌آمیز سیستم‌های استخدام خودکار می‌پردازد.',
              prs: 'توماس شولتزه روی مسئولیت حقوقی فیصله‌های خودکار تمرکز دارد.',
              tr: 'Thomas Schultze, işe alım algoritmalarının hukuki sorumluluk ve şeffaflık boyutunu ele alır.',
              ar: 'توماس شولتزه يناقش المسائل القانونية والمسؤولية المترتبة على قرارات التوظيف الآلية.',
              es: 'Thomas Schultze aborda las cuestiones de responsabilidad jurídica y transparencia algorítmica.'
            }
          }
        ]
      },
      {
        title: 'Teil 2: Detailverstehen (Aufgaben 6 bis 10 • Analyse eines Fachtextes)',
        sourceType: 'Wissenschaftsbericht: "Die Renaissance der Kernfusion – Realität oder Utopie?"',
        body: `Seit Jahrzehnten gilt die kontrollierte Kernfusion als der heilige Gral der nachhaltigen Energiewirtschaft: nahezu unerschöpfliche Energie aus Wasserstoffisotopen, frei von klimaschädlichen Treibhausgasen und ohne das Risiko langlebigen hochradioaktiven Atommülls. Jüngste Durchbrüche an internationalen Forschungseinrichtungen haben eine Welle privater Investitionen ausgelöst. Erstmals gelang es, in einem Fusionsexperiment kurzzeitig mehr Energie freizusetzen, als durch Laserstrahlen in das Plasma eingespeist wurde – ein physikalischer Meilenstein, bekannt als Nettoenergiegewinn ("Net Energy Gain").
Trotz dieser Euphorie dämpfen erfahrene Ingenieure allzu optimistische Erwartungen. Ein kurzzeitiger Laborerfolg bei extremen physikalischen Spitzenwerten unterscheidet sich fundamental von einem kontinuierlich und wirtschaftlich laufenden Fusionskraftwerk. Um das Plasma bei über 100 Millionen Grad Celsius stabil einzuschließen, bedarf es extrem starker supraleitender Magnetfelder. Zudem müssen neue hitzebeständige Materialien entwickelt werden, die dem intensiven Neutronenbeschuss über Jahrzehnte hinweg standhalten, ohne spröde zu werden.
Experten sind sich einig: Bis zur kommerziellen Einspeisung fusionsgenerierten Stroms in öffentliche Stromnetze werden noch mindestens zwei bis drei Jahrzehnte vergehen. Für die unmittelbaren Herausforderungen der Energiewende und des Klimaschutzes bis 2040 bleibt daher der massive Ausbau von Wind- und Solarenergie in Verbindung mit modernen Großbatteriespeichern die einzig tragfähige und sofort verfügbare Option.`,
        questions: [
          {
            id: 'telc_b2_l_q6',
            question: '6. Warum gilt die Kernfusion als besonders erstrebenswerte Energieform?',
            options: [
              'a) Sie benötigt überhaupt keine technischen Anlagen.',
              'b) Sie erzeugt saubere Energie ohne Treibhausgase und ohne langlebigen hochradioaktiven Müll.',
              'c) Sie ist bereits seit 50 Jahren in allen Haushalten verfügbar.'
            ],
            correctAnswer: 'b) Sie erzeugt saubere Energie ohne Treibhausgase und بدون پسماند رادیواکتیو طولانی‌مدت.',
            explanation: {
              en: 'Paragraph 1: energy from hydrogen isotopes, greenhouse-gas free, no long-lived radioactive waste.',
              fa: 'انرژی پاک و تجدیدپذیر بدون گازهای گلخانه‌ای و بدون پسماندهای رادیواکتیو خطرناک طولانی‌مدت.',
              prs: 'انرژی پاک بدون گازهای مضر و زباله‌های هسته‌ای خطرناک.',
              tr: 'Sera gazı salınımı ve uzun ömürlü yüksek radyoaktif atık üretmemesi.',
              ar: 'توليد طاقة نظيفة خالية من الغازات الدفيئة والنفايات المشعة طويلة الأمد.',
              es: 'Genera energía limpia sin gases de efecto invernadero ni residuos radiactivos de larga vida.'
            }
          },
          {
            id: 'telc_b2_l_q7',
            question: '7. Welcher wissenschaftliche Durchbruch gelang kürzlich im Experiment?',
            options: [
              'a) Man konnte das Plasma mit normalem Wasser kühlen.',
              'b) Erstmals wurde kurzzeitig mehr Energie freigesetzt, als in das Plasma hineingesteckt wurde.',
              'c) Kernfusion wurde billiger als Kohlekraft.'
            ],
            correctAnswer: 'b) Erstmals wurde kurzzeitig mehr Energie freigesetzt, als in das Plasma hineingesteckt wurde.',
            explanation: {
              en: 'Net energy gain milestone: more energy released than laser input into the plasma.',
              fa: 'برای نخستین بار در یک آزمایش موفق، انرژی آزاد شده بیش از انرژی لیزری ورودی اولیه به پلاسما بود.',
              prs: 'تولید انرژی بیشتر نسبت به انرژی تزریق‌شده.',
              tr: 'İlk kez plazmaya verilenden daha fazla enerjinin açığa çıkarılması.',
              ar: 'تحقيق مكسب صافي في الطاقة لأول مرة بإطلاق طاقة تفوق ما تم إدخاله.',
              es: 'Por primera vez se liberó brevemente más energía de la inyectada en el plasma.'
            }
          },
          {
            id: 'telc_b2_l_q8',
            question: '8. Welche technische Hürde nennt der Text für den Dauerbetrieb?',
            options: [
              'a) Es gibt zu wenig Wasserstoff auf der Erde.',
              'b) Materialien müssen über Jahrzehnte extremer Hitze und Neutronenbeschuss standhalten.',
              'c) Niemand versteht die mathematischen Formeln.'
            ],
            correctAnswer: 'b) Materialien müssen über Jahrzehnte extremer Hitze und Neutronenbeschuss standhalten.',
            explanation: {
              en: 'Engineering hurdles: stable magnetic confinement at 100M degrees and materials enduring neutron bombardment.',
              fa: 'نیاز به تولید مواد فوق‌مقاوم در برابر حرارت ۱۰۰ میلیون درجه و بمباران شدید نوترونی در درازمدت.',
              prs: 'مقاومت مواد در برابر حرارت بسیار بالا و تشعشع ذرات.',
              tr: 'Malzemelerin 100 milyon dereceye ve yoğun nötron bombardımanına dayanma zorunluluğu.',
              ar: 'ضرورة تطوير مواد تتحمل درجات حرارة تفوق 100 مليون مئوية والقصف النيوتروني المكثف.',
              es: 'La necesidad de materiales resistentes a temperaturas extremas y bombardeo de neutrones.'
            }
          },
          {
            id: 'telc_b2_l_q9',
            question: '9. Wann rechnen Experten mit der kommerziellen Einspeisung fusionsgenerierten Stroms?',
            options: [
              'a) Bereits im kommenden Jahr.',
              'b) In mindestens zwei bis drei Jahrzehnten.',
              'c) Niemals, das Vorhaben wurde offiziell gestoppt.'
            ],
            correctAnswer: 'b) In mindestens zwei bis drei Jahrzehnten.',
            explanation: {
              en: 'Commercial horizon: at least 20 to 30 years before grid feeding is viable.',
              fa: 'حداقل دو تا سه دهه دیگر تا ورود برق گداخت هسته‌ای به شبکه سراسری زمان لازم است.',
              prs: 'حداقل ۲۰ الی ۳۰ سال دیگر زمان لازم دارد.',
              tr: 'Şebekeye ticari elektrik verilmesi için en az 20-30 yıl daha gerekmektedir.',
              ar: 'يتوقع الخبراء مرور ما بين عقدين إلى ثلاثة عقود قبل تغذية الشبكة التجارية بالطاقة.',
              es: 'Los expertos calculan que harán falta al menos dos o tres décadas.'
            }
          },
          {
            id: 'telc_b2_l_q10',
            question: '10. Was ist laut Text die wichtigste Maßnahme für die Energiewende bis 2040?',
            options: [
              'a) Auf die Fertigstellung der Kernfusionsreaktoren warten.',
              'b) Der massive Ausbau von Wind- und Solarenergie mit Batteriespeichern.',
              'c) Die Wiederinbetriebnahme stillgelegter Kohlekraftwerke.'
            ],
            correctAnswer: 'b) Der massive Ausbau von Wind- und Solarenergie mit Batteriespeichern.',
            explanation: {
              en: 'Short-term solution: massive expansion of wind, solar, and battery storage by 2040.',
              fa: 'توسعه گسترده و فوری نیروگاه‌های بادی و خورشیدی همراه با باتری‌های ذخیره‌ساز بزرگ تا سال ۲۰۴۰.',
              prs: 'توسعه برق بادی و آفتابی با بطری‌های ذخیره.',
              tr: '2040\'a kadar rüzgar ve güneş enerjisi ile batarya depolama sistemlerinin hızla artırılması.',
              ar: 'التوسع الهائل في طاقة الرياح والطاقة الشمسية المدعومة ببطاريات التخزين.',
              es: 'El despliegue masivo de energía eólica y solar junto con almacenamiento en baterías.'
            }
          }
        ]
      },
      {
        title: 'Teil 3: Selektives Verstehen (Aufgaben 11 bis 20 • Zuordnung von Fachstellen)',
        sourceType: '10 Situationsbeschreibungen von Bürgern und Fachstellen',
        body: `Stelle A: Agentur für Arbeit – Berufsberatung für Akademiker und Wiedereinsteiger
Stelle B: Verbraucherzentrale – Rechtsberatung bei Online-Vertragsfallen und Inkassoschreiben
Stelle C: Handwerkskammer – Anerkennung ausländischer Berufsabschlüsse in handwerklichen Berufen
Stelle D: Mieterverein – Überprüfung von Nebenkostenabrechnungen und Mietminderungen
Stelle E: Industrie- und Handelskammer (IHK) – Beratung für Unternehmensgründer und Gewerbeanmeldungen
Stelle F: Zentrum für Auslandsstudien – Stipendienberatung für Masterstudiengänge im Ausland
Stelle G: Schlichtungsstelle für den öffentlichen Personenverkehr (söp) – Entschädigung bei Zug- und Flugverspätungen
Stelle H: Umwelt- und Energieberatungsstelle der Stadt – Zuschüsse für Wärmepumpen und Photovoltaik
Stelle I: Integrationsbeauftragte – Vermittlung von Sprachmittlern bei Behördengängen
Stelle J: Patent- und Markenamt – Schutzrechte für technische Erfindungen und Markennamen`,
        questions: [
          {
            id: 'telc_b2_l_q11',
            question: '11. Herr Al-Mansour hat in Syrien eine Ausbildung zum Elektriker abgeschlossen und möchte seinen Abschluss in Deutschland anerkennen lassen.',
            options: ['Stelle C (Handwerkskammer)', 'Stelle E (IHK)', 'Keine passende Stelle'],
            correctAnswer: 'Stelle C (Handwerkskammer)',
            explanation: {
              en: 'Stelle C handles foreign credential recognition for skilled crafts (Handwerk).',
              fa: 'اتاق اصناف و صنایع دستی (Stelle C) مسئول ارزشیابی و معادل‌سازی مدارک فنی و حرفه‌ای است.',
              prs: 'اتاق اصناف (Handwerkskammer) مدارک فنی و برقی را معادل‌سازی می‌کند.',
              tr: 'El sanatları ve zanaat diplomalarının denkliği için Handwerkskammer (C) yetkilidir.',
              ar: 'غرفة الحرف اليدوية (Stelle C) هي الجهة المسؤولة عن معادلة المؤهلات المهنية والحرفية.',
              es: 'La Cámara de Oficios (Stelle C) gestiona la homologación de títulos profesionales de artesanía.'
            }
          },
          {
            id: 'telc_b2_l_q12',
            question: '12. Familie Weber hat eine astronomisch hohe Heizkostenabrechnung erhalten und vermutet Abrechnungsfehler.',
            options: ['Stelle D (Mieterverein)', 'Stelle H (Energieberatungsstelle)', 'Keine passende Stelle'],
            correctAnswer: 'Stelle D (Mieterverein)',
            explanation: {
              en: 'Stelle D specializes in reviewing tenant utility bills and rent reductions.',
              fa: 'انجمن مستاجران (Stelle D) صورت‌حساب‌های هزینه‌های جانبی و گرمایش را بررسی حقوقی می‌کند.',
              prs: 'انجمن کرایه‌نشینان (Mieterverein) برای چک کردن بل‌های اضافه خانه است.',
              tr: 'Kira ve yan gider hesaplarının hukuki denetimi için Mieterverein (D) uygundur.',
              ar: 'جمعية المستأجرين (Stelle D) تتولى فحص فواتير التدفئة والرسوم الجانبية بدقة.',
              es: 'La asociación de inquilinos (Stelle D) revisa liquidaciones de suministros y alquileres.'
            }
          },
          {
            id: 'telc_b2_l_q13',
            question: '13. David plant nach seinem Bachelor ein Masterstudium in Kanada und sucht nach Finanzierungsmöglichkeiten.',
            options: ['Stelle F (Zentrum für Auslandsstudien)', 'Stelle A (Agentur für Arbeit)', 'Keine passende Stelle'],
            correctAnswer: 'Stelle F (Zentrum für Auslandsstudien)',
            explanation: {
              en: 'Stelle F advises on scholarships and financing for master studies abroad.',
              fa: 'مرکز مطالعات خارج از کشور (Stelle F) به دانشجویان درباره بورسیه و تحصیل در خارج مشاوره می‌دهد.',
              prs: 'مرکز تحصیلات خارجی برای بورسیه ماستری.',
              tr: 'Yurt dışı yüksek lisans bursları için Yurtdışı Eğitim Merkezi (F) doğru adrestir.',
              ar: 'مركز الدراسات الخارجية (Stelle F) يقدم إرشادات حول المنح والتمويل في الخارج.',
              es: 'El centro de estudios internacionales (Stelle F) asesora sobre becas de posgrado en el extranjero.'
            }
          },
          {
            id: 'telc_b2_l_q14',
            question: '14. Frau Schmidt möchte ihr Einfamilienhaus mit einer modernen Wärmepumpe nachrüsten und staatliche Fördergelder beantragen.',
            options: ['Stelle H (Umwelt- und Energieberatungsstelle)', 'Stelle D (Mieterverein)', 'Keine passende Stelle'],
            correctAnswer: 'Stelle H (Umwelt- und Energieberatungsstelle)',
            explanation: {
              en: 'Stelle H provides guidance on municipal and federal subsidies for heat pumps.',
              fa: 'مرکز مشاوره محیط‌زیست و انرژی شهرداری (Stelle H) درباره کمک‌هزینه‌های دولتی برای پمپ حرارتی راهنمایی می‌کند.',
              prs: 'اداره انرژی برای کمک مالی پمپ حرارتی.',
              tr: 'Isı pompası ve güneş enerjisi teşvikleri için Çevre ve Enerji Danışma Merkezi (H) bakar.',
              ar: 'مكتب استشارات البيئة والطاقة بالبلدية (Stelle H) يقدم منحاً وخطط دعم للمضخات الحرارية.',
              es: 'La asesoría medioambiental y energética (Stelle H) tramita subvenciones de calefacción renovable.'
            }
          },
          {
            id: 'telc_b2_l_q15',
            question: '15. Herr Özdemir möchte sich als IT-Berater selbstständig machen und benötigt Hilfe beim Businessplan und der Gewerbeanmeldung.',
            options: ['Stelle E (IHK)', 'Stelle C (Handwerkskammer)', 'Keine passende Stelle'],
            correctAnswer: 'Stelle E (IHK)',
            explanation: {
              en: 'Stelle E (IHK) assists startup entrepreneurs with business plans and business registration.',
              fa: 'اتاق بازرگانی و صنایع (IHK - Stelle E) برای راه‌اندازی کسب‌وکار و ثبت شرکت مشاوره می‌دهد.',
              prs: 'اتاق تجارت IHK برای ثبت کار و بیزنس‌پلان.',
              tr: 'Şirket kuruluşu ve iş planı rehberliği için Sanayi ve Ticaret Odası (IHK - E) hizmet verir.',
              ar: 'غرفة التجارة والصناعة (IHK - Stelle E) تقدم الدعم لرواد الأعمال وتسجيل الأنشطة التجارية.',
              es: 'La Cámara de Comercio e Industria (IHK - Stelle E) asesora a emprendedores en planes de negocio.'
            }
          },
          {
            id: 'telc_b2_l_q16',
            question: '16. Sarahs Flug von Frankfurt nach Madrid hatte fünf Stunden Verspätung, doch die Fluggesellschaft verweigert die gesetzliche Entschädigung.',
            options: ['Stelle G (Schlichtungsstelle söp)', 'Stelle B (Verbraucherzentrale)', 'Keine passende Stelle'],
            correctAnswer: 'Stelle G (Schlichtungsstelle söp)',
            explanation: {
              en: 'Stelle G (söp) handles arbitration and compensation claims for train and flight delays.',
              fa: 'شورای حل اختلاف حمل‌ونقل عمومی (söp - Stelle G) غرامت‌های تاخیر پرواز و قطار را پیگیری می‌کند.',
              prs: 'اداره حل منازعات ترانسپورت söp برای خسارت تاخیر طیاره.',
              tr: 'Uçuş ve tren gecikmelerinde tazminat arabuluculuğu söp (G) tarafından yürütülür.',
              ar: 'هيئة التحكيم للنقل العام (söp - Stelle G) تختص بتعويضات تأخير الرحلات الجوية والقطارات.',
              es: 'La junta arbitral de transportes públicos (söp - Stelle G) tramita indemnizaciones aéreas.'
            }
          },
          {
            id: 'telc_b2_l_q17',
            question: '17. Eine Ingenieurin hat ein innovatives Filtersystem entwickelt und möchte es patentieren lassen.',
            options: ['Stelle J (Patent- und Markenamt)', 'Stelle E (IHK)', 'Keine passende Stelle'],
            correctAnswer: 'Stelle J (Patent- und Markenamt)',
            explanation: {
              en: 'Stelle J protects intellectual property, inventions, and patent rights.',
              fa: 'اداره ثبت اختراعات و نشان‌های تجاری (Stelle J) حقوق مالکیت فکری اختراعات را ثبت می‌کند.',
              prs: 'اداره ثبت اختراعات برای ثبت پتنت.',
              tr: 'Buluşların korunması ve patent tescili için Patent ve Marka Ofisi (J) yetkilidir.',
              ar: 'مكتب براءات الاختراع والعلامات التجارية (Stelle J) هو المعني بتسجيل وحماية الابتكارات.',
              es: 'La Oficina de Patentes y Marcas (Stelle J) protege invenciones y derechos industriales.'
            }
          },
          {
            id: 'telc_b2_l_q18',
            question: '18. Tobias hat im Internet versehentlich ein teures Streaming-Abo abgeschlossen und erhält nun aggressive Briefe von einem Inkassobüro.',
            options: ['Stelle B (Verbraucherzentrale)', 'Stelle D (Mieterverein)', 'Keine passende Stelle'],
            correctAnswer: 'Stelle B (Verbraucherzentrale)',
            explanation: {
              en: 'Stelle B (Verbraucherzentrale) defends consumers against debt-collection scams and subscription traps.',
              fa: 'مرکز حمایت از مصرف‌کننده (Stelle B) در برابر تله‌های اشتراک اینترنتی و شرکت‌های وصول مطالبات دفاع می‌کند.',
              prs: 'مرکز حمایت از مصرف‌کنندگان برای تله‌های انترنتی.',
              tr: 'Abonelik tuzakları ve icra mektuplarına karşı Tüketici Hakları Merkezi (B) hukuki destek sunar.',
              ar: 'حماية المستهلك (Stelle B) تقدم استشارات ضد فخاخ الاشتراكات ورسائل مكاتب التحصيل.',
              es: 'La oficina del consumidor (Stelle B) asesora ante trampas de cobro y reclamaciones abusivas.'
            }
          },
          {
            id: 'telc_b2_l_q19',
            question: '19. Frau Meyer hat Biologie studiert, war zehn Jahre wegen Kindererziehung zu Hause und sucht nun Orientierung für den beruflichen Wiedereinstieg.',
            options: ['Stelle A (Agentur für Arbeit)', 'Stelle E (IHK)', 'Keine passende Stelle'],
            correctAnswer: 'Stelle A (Agentur für Arbeit)',
            explanation: {
              en: 'Stelle A provides specialized career counseling for academics returning to the labor market.',
              fa: 'اداره کار (Stelle A) بخش مشاوره ویژه برای ورود مجدد دانش‌آموختگان به بازار کار دارد.',
              prs: 'اداره کار برای ورود دوباره به وظیفه بعد از چند سال رخصتی.',
              tr: 'Uzun aradan sonra işe dönmek isteyen mezunlara İş Ajansı (A) danışmanlık yapar.',
              ar: 'وكالة العمل (Stelle A) توفر إرشاداً تخصصياً للأكاديميين الراغبين في العودة لسوق العمل.',
              es: 'La Agencia de Empleo (Stelle A) ofrece asesoramiento para reincorporación laboral tras excedencias.'
            }
          },
          {
            id: 'telc_b2_l_q20',
            question: '20. Ein Neuankömmling spricht noch kein Deutsch und benötigt für eine Eheschließung auf dem Standesamt einen vereidigten Dolmetscher.',
            options: ['Stelle I (Integrationsbeauftragte)', 'Stelle C (Handwerkskammer)', 'Keine passende Stelle'],
            correctAnswer: 'Stelle I (Integrationsbeauftragte)',
            explanation: {
              en: 'Stelle I coordinates certified interpreters and language mediators for municipal offices.',
              fa: 'مسئول امور همگرایی (Stelle I) مترجمین رسمی را برای پیگیری امور ثبت احوال و ادارات معرفی می‌نماید.',
              prs: 'اداره ادغام برای هماهنگی ترجمان رسمی در ادارات دولتی.',
              tr: 'Resmi kurumlarda yeminli tercüman ve dil desteği için Entegrasyon Temsilciliği (I) yardımcı olur.',
              ar: 'مكتب شؤون الاندماج (Stelle I) ينسق توفير المترجمين المعتمدين لدى الدوائر الحكومية.',
              es: 'La delegación de integración (Stelle I) coordina mediadores lingüísticos e intérpretes jurados.'
            }
          }
        ]
      },
      {
        title: 'Teil 4: Sprachbausteine (Aufgaben 21 bis 30 • Fortgeschrittene Grammatik & Lexik)',
        sourceType: 'Halbformeller Geschäftsbrief: Stellungnahme zu Lieferverzögerungen von Industriebauteilen',
        body: `Sehr geehrter Herr Professor Lindemann,
mit großem Bedauern müssen wir Ihnen mitteilen, dass sich die Auslieferung der von Ihnen bestellten Präzisionssensoren unvorhergesehen (21) _____ wird.
Wie Ihnen sicherlich (22) _____ den Medien bekannt ist, kam es im Herstellerwerk zu einem schweren Brand in der Halbleiterfertigung. Infolgedessen sind wesentliche Produktionsketten vorübergehend (23) _____ Stillstand geraten.
Wir versichern Ihnen, dass unsere Ingenieure mit Hochdruck daran arbeiten, alternative Bezugsquellen zu (24) _____, um den Lieferengpass so gering wie möglich zu halten. Sollte Ihr Institut (25) _____ der Verzögerung vorübergehende Ersatzgeräte benötigen, stellen wir Ihnen diese selbstverständlich kostenlos zur (26) _____.
Wir bitten Sie für die entstandenen Unannehmlichkeiten in aller Form um (27) _____. Sobald verlässliche Lieferdaten vorliegen, werden wir Sie unverzüglich (28) _____ Kenntnis setzen.
In der Hoffnung auf Ihr weiteres (29) _____ verbleiben wir
mit (30) _____ Grüßen,
Dr. Stefan Brandstetter, Leiter Qualitätsmanagement`,
        questions: [
          {
            id: 'telc_b2_sb_q21',
            question: '21. Lücke (21):',
            options: ['verzögern', 'verzögert', 'verzögernd'],
            correctAnswer: 'verzögern',
            explanation: {
              en: 'Infinitive after modal future: "sich (...) verzögern wird".',
              fa: 'مصدر فعل پس از ساختار آینده با werden: sich verzögern wird (به تعویق خواهد افتاد).',
              prs: 'مصدر فعل با ساختار آینده.',
              tr: '"wird" yardımcı fiili ile gelecek zaman: mastar "verzögern" kullanılır.',
              ar: 'المصدر المجرد بعد فعل المستقبل wird للتعبير عن التأخير: verzögern wird.',
              es: 'Infinitivo requerido tras el auxiliar de futuro wird: verzögern.'
            }
          },
          {
            id: 'telc_b2_sb_q22',
            question: '22. Lücke (22):',
            options: ['aus', 'von', 'durch'],
            correctAnswer: 'aus',
            explanation: {
              en: 'Fixed phrase: "aus den Medien bekannt sein" (to be known from the media).',
              fa: 'اصطلاح ثابت: "aus den Medien bekannt sein" (شناخته شده از رسانه‌ها).',
              prs: 'از طریق رسانه‌ها شناخته بودن.',
              tr: 'Kalıp ifade: "aus den Medien bekannt" (medyadan bilindiği üzere).',
              ar: 'التركيب المعتاد في اللغة الألمانية: aus den Medien bekannt sein.',
              es: 'Locución preposicional fija: aus den Medien bekannt sein.'
            }
          },
          {
            id: 'telc_b2_sb_q23',
            question: '23. Lücke (23):',
            options: ['zum', 'am', 'im'],
            correctAnswer: 'zum',
            explanation: {
              en: 'Nomen-Verb-Verbindung: "zum Stillstand geraten" (to grind to a halt).',
              fa: 'ترکیب اسمی-فعلی پیشرفته (Nomen-Verb-Verbindung): zum Stillstand geraten (متوقف شدن).',
              prs: 'متوقف شدن روند تولید.',
              tr: 'Birleşik isim-fiil yapısı: "zum Stillstand geraten" (durma noktasına gelmek).',
              ar: 'تعبير اسمي-فعلي متقدم: zum Stillstand geraten (توقف تام).',
              es: 'Estructura verbo-nominal fija: zum Stillstand geraten (llegar a un punto muerto).'
            }
          },
          {
            id: 'telc_b2_sb_q24',
            question: '24. Lücke (24):',
            options: ['erschließen', 'erschlossen', 'erschließt'],
            correctAnswer: 'erschließen',
            explanation: {
              en: 'Infinitiv mit "zu": "daran arbeiten (...) alternative Quellen zu erschließen".',
              fa: 'ساختار مصدر با zu: تلاش برای دستیابی و فراهم کردن منابع جایگزین (zu erschließen).',
              prs: 'پیدا کردن منابع جدید.',
              tr: '"zu" ile mastar yapısı: "zu erschließen" (ulaşmak/geliştirmek).',
              ar: 'صيغة المصدر مع zu: zu erschließen (فتح مصادر بديلة).',
              es: 'Infinitivo con zu para indicar objetivo: zu erschließen.'
            }
          },
          {
            id: 'telc_b2_sb_q25',
            question: '25. Lücke (25):',
            options: ['aufgrund', 'trotz', 'während'],
            correctAnswer: 'aufgrund',
            explanation: {
              en: 'Causal preposition with Genitiv: "aufgrund der Verzögerung" (due to the delay).',
              fa: 'حرف اضافه سببی ژنیتیوساز: "aufgrund der Verzögerung" (به علت تاخیر).',
              prs: 'به دلیل تاخیر پیش‌آمده.',
              tr: 'Genitiv alan sebep edatı: "aufgrund der Verzögerung" (gecikme sebebiyle).',
              ar: 'حرف جر سببي يتطلب حالة Genitiv: aufgrund der Verzögerung (بسبب التأخير).',
              es: 'Preposición causal que rige genitivo: aufgrund der Verzögerung.'
            }
          },
          {
            id: 'telc_b2_sb_q26',
            question: '26. Lücke (26):',
            options: ['Verfügung', 'Befriedigung', 'Darstellung'],
            correctAnswer: 'Verfügung',
            explanation: {
              en: 'Nomen-Verb-Verbindung: "zur Verfügung stellen" (to provide / make available).',
              fa: 'ترکیب پرکاربرد: zur Verfügung stellen (در اختیار قرار دادن).',
              prs: 'در خدمت و دسترس قرار دادن.',
              tr: 'Kalıp ifade: "zur Verfügung stellen" (kullanıma sunmak/tahsis etmek).',
              ar: 'تعبير ثابت: zur Verfügung stellen (يضع تحت التصرف).',
              es: 'Locución fija: zur Verfügung stellen (poner a disposición).'
            }
          },
          {
            id: 'telc_b2_sb_q27',
            question: '27. Lücke (27):',
            options: ['Entschuldigung', 'Besserung', 'Anerkennung'],
            correctAnswer: 'Entschuldigung',
            explanation: {
              en: 'Formal apology: "um Entschuldigung bitten" (to formally apologize).',
              fa: 'عذرخواهی رسمی: um Entschuldigung bitten (تقاضای پوزش نمودن).',
              prs: 'عذرخواهی رسمی.',
              tr: 'Resmi özür dileme ifadesi: "um Entschuldigung bitten".',
              ar: 'طلب الاعتذار الرسمي: um Entschuldigung bitten.',
              es: 'Fórmula formal de disculpa: um Entschuldigung bitten.'
            }
          },
          {
            id: 'telc_b2_sb_q28',
            question: '28. Lücke (28):',
            options: ['in', 'zur', 'auf'],
            correctAnswer: 'in',
            explanation: {
              en: 'Fixed phrase: "jemanden in Kenntnis setzen" (to inform someone).',
              fa: 'اصطلاح اداری تثبیت‌شده: jemanden in Kenntnis setzen (کسی را مطلع ساختن).',
              prs: 'کسی را باخبر ساختن.',
              tr: 'Kalıp deyiş: "in Kenntnis setzen" (haberdar etmek/bilgilendirmek).',
              ar: 'تعبير اصطلاحي رسمي: in Kenntnis setzen (يحيط علماً / يبلغ).',
              es: 'Locución verbal formal: in Kenntnis setzen (poner en conocimiento).'
            }
          },
          {
            id: 'telc_b2_sb_q29',
            question: '29. Lücke (29):',
            options: ['Verständnis', 'Verstand', 'Verständigung'],
            correctAnswer: 'Verständnis',
            explanation: {
              en: 'Business closing formula: "auf Ihr Verständnis hoffen" (to count on your understanding).',
              fa: 'فرمول پایانی نامه: امید به درک متقابل شما (auf Ihr Verständnis hoffen).',
              prs: 'امید به درک شما.',
              tr: 'İş mektubu kapanış kalıbı: "Verständnis" (anlayış göstermek).',
              ar: 'صيغة ختامية معتادة: auf Ihr Verständnis hoffen (أملاً في تفهمكم).',
              es: 'Fórmula de despedida empresarial: auf Ihr Verständnis hoffen.'
            }
          },
          {
            id: 'telc_b2_sb_q30',
            question: '30. Lücke (30):',
            options: ['freundlichen', 'freundliche', 'freundlicher'],
            correctAnswer: 'freundlichen',
            explanation: {
              en: 'Dativ plural adjective ending: "mit freundlichen Grüßen".',
              fa: 'پسوند صفت در حالت Dativ جمع: mit freundlichen Grüßen (با احترامات صمیمانه).',
              prs: 'داتیو جمع برای mit: mit freundlichen Grüßen.',
              tr: '"mit" edatından sonra çoğul Dativ sıfat çekimi: "freundlichen".',
              ar: 'نهاية الصفة في حالة Dativ الجمع بعد حرف الجر mit: freundlichen.',
              es: 'Terminación de adjetivo en dativo plural: mit freundlichen Grüßen.'
            }
          }
        ]
      }
    ]
  },
  hoeren: {
    title: 'Modul Hörverstehen (ca. 20 Minuten • 20 Aufgaben)',
    durationMinutes: 20,
    audioItems: [
      {
        id: 'telc_b2_h_item1',
        title: 'Teil 1: Globalverstehen (Aufgaben 1 bis 5 • Einmal hören)',
        situation: 'Radiosendung "Wirtschaft & Verbraucher": 5 Kurzberichte',
        transcript: `Beitrag 1: "Die Europäische Zentralbank hat den Leitzins unverändert belassen. Währungshüter begründen dies mit einer nach wie vor hartnäckigen Kerninflation im Dienstleistungssektor, obgleich die Energiepreise spürbar nachgegeben haben."
Beitrag 2: "Die deutsche Automobilindustrie kündigt eine Großoffensive für erschwingliche Elektro-Kompaktwagen an. Um den asiatischen Mitbewerbern Paroli zu bieten, sollen neue Modelle ab 2026 bereits für unter 25.000 Euro erhältlich sein."
Beitrag 3: "Ein Streik des Sicherheitspersonals an den Flughäfen Frankfurt und München hat zu bundesweit Hunderten Flugausfällen geführt. Verhandlungspartner wollen am Wochenende in eine neue Schlichtungsrunde gehen."
Beitrag 4: "Das Bundesverfassungsgericht stärkt die Rechte von Whistleblowern: Arbeitnehmer, die schwerwiegende Umweltverstöße oder Korruption im eigenen Betrieb aufdecken, dürfen künftig nicht mehr fristlos gekündigt werden."
Beitrag 5: "Der Absatz von Wärmepumpen ist im ersten Quartal um 45 Prozent eingebrochen. Branchenexperten führen dies auf die Verunsicherung der Verbraucher durch langwierige politische Debatten über Förderrichtlinien zurück."`,
        questions: [
          {
            id: 'telc_b2_h_q1',
            question: '1. Warum belässt die EZB den Leitzins vorerst auf dem bisherigen Niveau?',
            options: ['Richtig (Wegen hartnäckiger Kerninflation im Dienstleistungssektor)', 'Falsch (Weil alle Preise weltweit gesunken sind)'],
            correctAnswer: 'Richtig (Wegen hartnäckiger Kerninflation im Dienstleistungssektor)',
            explanation: {
              en: 'Transcript states: "... hartnäckigen Kerninflation im Dienstleistungssektor...".',
              fa: 'به دلیل تورم مداوم و سرسخت در بخش خدمات، بانک مرکزی نرخ بهره را بدون تغییر گذاشت.',
              prs: 'به خاطر تورم در بخش خدمات نرخ سود بانکی تغییر نکرد.',
              tr: 'Hizmet sektöründeki inatçı çekirdek enflasyon sebebiyle faiz sabit tutulmuştur.',
              ar: 'ثبات الفائدة يعود إلى التضخم المستمر في قطاع الخدمات.',
              es: 'El BCE mantiene los tipos por la persistente inflación subyacente en servicios.'
            }
          },
          {
            id: 'telc_b2_h_q2',
            question: '2. Was plant die deutsche Automobilindustrie ab dem Jahr 2026?',
            options: ['Richtig (Elektro-Kompaktwagen für unter 25.000 Euro anzubieten)', 'Falsch (Ausschließlich Luxuslimousinen über 100.000 Euro zu bauen)'],
            correctAnswer: 'Richtig (Elektro-Kompaktwagen für unter 25.000 Euro anzubieten)',
            explanation: {
              en: 'Transcript: "... neue Modelle ab 2026 bereits für unter 25.000 Euro erhältlich sein."',
              fa: 'عرضه خودروهای برقی کوچک و اقتصادی با قیمت کمتر از ۲۵ هزار یورو از سال ۲۰۲۶.',
              prs: 'موترهای برقی ارزان قیمت زیر ۲۵ هزار یورو.',
              tr: '2026\'dan itibaren 25.000 Euro\'nun altında elektrikli kompakt araçlar sunmak.',
              ar: 'طرح سيارات كهربائية مدمجة بأسعار تقل عن 25 ألف يورو ابتداءً من 2026.',
              es: 'Lanzar coches eléctricos compactos por debajo de 25.000 euros a partir de 2026.'
            }
          },
          {
            id: 'telc_b2_h_q3',
            question: '3. Was war die Folge des Streiks an den Flughäfen Frankfurt und München?',
            options: ['Richtig (Hunderte Flüge fielen bundesweit aus)', 'Falsch (Die Flugpreise wurden halbiert)'],
            correctAnswer: 'Richtig (Hunderte Flüge fielen bundesweit aus)',
            explanation: {
              en: 'Consequence: "... bundesweit Hunderten Flugausfällen geführt."',
              fa: 'لغو صدها پرواز در سراسر آلمان ناشی از اعتصاب نیروهای امنیتی.',
              prs: 'لغو شدن صدها پرواز به دلیل اعتصاب.',
              tr: 'Yüzlerce uçuşun iptal edilmesi sonucunu doğurmuştur.',
              ar: 'إلغاء مئات الرحلات الجوية على مستوى ألمانيا جراء إضراب عمال الأمن.',
              es: 'Centenares de vuelos cancelados en toda Alemania.'
            }
          },
          {
            id: 'telc_b2_h_q4',
            question: '4. Welches Urteil fällte das Bundesverfassungsgericht bezüglich Whistleblowern?',
            options: ['Richtig (Sie dürfen bei Aufdeckung von Verstößen nicht fristlos gekündigt werden)', 'Falsch (Sie müssen ins Gefängnis gehen)'],
            correctAnswer: 'Richtig (Sie dürfen bei Aufdeckung von Verstößen nicht fristlos gekündigt werden)',
            explanation: {
              en: 'Court ruling: Whistleblowers exposing illegal acts may not be summarily dismissed.',
              fa: 'دادگاه قانون اساسی رای داد که افشاگران تخلفات زیست‌محیطی و فساد نباید بدون اطلاع قبلی اخراج شوند.',
              prs: 'کارمندانی که فساد را فاش می‌کنند نباید فورا اخراج شوند.',
              tr: 'Yolsuzluk ve ihlalleri ifşa edenlerin derhal tazminatsız kovulamayacağı hükme bağlandı.',
              ar: 'المحكمة الدستورية تمنع الفصل التعسفي الفوري للمبلغين عن المخالفات والفساد.',
              es: 'El tribunal dictamina que los denunciantes de irregularidades no pueden ser despedidos de inmediato.'
            }
          },
          {
            id: 'telc_b2_h_q5',
            question: '5. Worauf führen Experten den Absatzeinbruch bei Wärmepumpen zurück?',
            options: ['Richtig (Auf die Verunsicherung durch langwierige Förderungsdebatten)', 'Falsch (Weil es keinen Strom mehr in Deutschland gibt)'],
            correctAnswer: 'Richtig (Auf die Verunsicherung durch langwierige Förderungsdebatten)',
            explanation: {
              en: 'Explanation: "... Verunsicherung der Verbraucher durch langwierige politische Debatten über Förderrichtlinien...".',
              fa: 'سردرگمی و عدم اطمینان مصرف‌کنندگان ناشی از بحث‌های طولانی سیاسی پیرامون قوانین دریافت یارانه.',
              prs: 'نگرانی و شک مردم به خاطر بحث‌های طولانی بر سر یارانه‌ها.',
              tr: 'Teşvik yönetmelikleri üzerine süren siyasi tartışmaların yarattığı belirsizlik.',
              ar: 'حالة التردد لدى المستهلكين الناجمة عن النقاشات السياسية الطويلة حول لوائح الدعم.',
              es: 'La incertidumbre del consumidor provocada por debates políticos sobre las subvenciones.'
            }
          }
        ]
      },
      {
        id: 'telc_b2_h_item2',
        title: 'Teil 2: Detailverstehen (Aufgaben 6 bis 15 • Gespräch mit einem Arbeitspsychologen • Einmal hören)',
        situation: 'Fachdiskussion: "Resilienz, mentale Gesundheit und New Work"',
        transcript: `Moderator: "Willkommen zu unserer Gesprächsreihe über moderne Arbeitswelten. Unser Gast ist Dr. Christian Ebersbach, Arbeitspsychologe an der Charité. Herr Dr. Ebersbach, der Begriff 'Resilienz' ist in aller Munde. Was bedeutet er konkret im Berufsalltag?"
Dr. Ebersbach: "Resilienz bezeichnet die psychische Widerstandskraft – also die Fähigkeit eines Menschen, Krisen, Rückschläge und anhaltenden Stress nicht nur schadlos zu überstehen, sondern daraus gestärkt hervorzugehen. Sie ist kein angeborenes, unveränderliches Persönlichkeitsmerkmal, sondern eine erlernbare Kompetenz, die trainiert werden kann."
Moderator: "Welche Faktoren schwächen die psychische Gesundheit von Beschäftigten am stärksten?"
Dr. Ebersbach: "Entgegen der landläufigen Meinung ist es selten die reine Arbeitsmenge, die zum Burnout führt. Viel destruktiver wirken das Gefühl von Kontrollverlust, mangelnde Wertschätzung durch Vorgesetzte und die ständige digitale Erreichbarkeit nach Feierabend. Wenn Mitarbeiter das Gefühl haben, ihre Arbeitszeit nicht mehr selbstbestimmt strukturieren zu können, steigt das Risiko für depressive Erschöpfungszustände dramatisch."
Moderator: "Viele Unternehmen bieten heute Achtsamkeits-Workshops und Yoga-Kurse an. Reicht das aus?"
Dr. Ebersbach: "Das ist ein zweischneidiges Schwert. Individuelle Stressbewältigung ist lobenswert, darf aber nicht dazu missbraucht werden, strukturelle Fehlentwicklungen im Betrieb auf das Individuum abzuwälzen. Ein Obstkorb oder ein Meditationsraum kompensieren keine chronische Personalunterbesetzung und keine toxische Führungskultur. Echte Resilienzförderung muss auf Organisationsebene ansetzen: durch realistische Zielvereinbarungen, transparente Kommunikationswege und das Recht auf Nichterreichbarkeit."
Moderator: "Was können Arbeitnehmer selbst tun, um Grenzen zu setzen?"
Dr. Ebersbach: "Ganz entscheidend ist das bewusste Ziehen von Trennlinien: Dienstliche E-Mail-Apps auf privaten Smartphones sollten konsequent deaktiviert werden. Zudem hilft es, am Ende des Arbeitstages ein kurzes mentales Abschlussritual durchzuführen – etwa das Aufschreiben von drei Dingen, die heute gelungen sind, bevor der Laptop zugeklappt wird."`,
        questions: [
          {
            id: 'telc_b2_h_q6',
            question: '6. Resilienz ist laut Dr. Ebersbach eine angeborene Eigenschaft, die man nicht verändern kann.',
            options: ['Richtig', 'Falsch'],
            correctAnswer: 'Falsch',
            explanation: {
              en: 'False: It is learnable and trainable: "... kein angeborenes (...) Merkmal, sondern eine erlernbare Kompetenz...".',
              fa: 'نادرست: تاب‌آوری مهارتی اکتسابی و قابل آموزش است، نه خصلتی ژنتیکی و غیرقابل تغییر.',
              prs: 'نادرست: تاب‌آوری یک مهارت یادگرفتنی است.',
              tr: 'Yanlış: Doğuştan gelen sabit bir özellik değil, öğrenilebilir bir yetkinliktir.',
              ar: 'خطأ: المرونة النفسية ليست صفة وراثية جامدة بل مهارة قابلة للتعلم والتدريب.',
              es: 'Falso: no es un rasgo innato inmutable, sino una competencia que se puede entrenar.'
            }
          },
          {
            id: 'telc_b2_h_q7',
            question: '7. Reine Arbeitsüberlastung ist der einzige und wichtigste Auslöser für Burnout.',
            options: ['Richtig', 'Falsch'],
            correctAnswer: 'Falsch',
            explanation: {
              en: 'False: Control loss, lack of appreciation, and constant connectivity are more destructive.',
              fa: 'نادرست: حجم کار به تنهایی عامل اصلی نیست؛ حس فقدان کنترل، عدم قدردانی مدیران و پاسخگویی مداوم مخرب‌ترند.',
              prs: 'نادرست: حجم کار تنها دلیل نیست.',
              tr: 'Yanlış: Yalnızca iş yoğunluğu değil, kontrol kaybı ve takdirsizlik daha yıkıcıdır.',
              ar: 'خطأ: ليس ضغط العمل وحده مسبب الاحتراق؛ بل انعدام التقدير وفقدان السيطرة أكثر تدميراً.',
              es: 'Falso: rara vez la carga de trabajo pura causa burnout; la falta de control es más lesiva.'
            }
          },
          {
            id: 'telc_b2_h_q8',
            question: '8. Ständige digitale Erreichbarkeit nach Dienstschluss erhöht das Erschöpfungsrisiko deutlich.',
            options: ['Richtig', 'Falsch'],
            correctAnswer: 'Richtig',
            explanation: {
              en: 'True: constant after-hours connectivity drastically increases depression and exhaustion risks.',
              fa: 'درست: در دسترس بودن آنلاین مداوم بعد از ساعات کاری ریسک فرسودگی شغلی را به شدت بالا می‌برد.',
              prs: 'درست: جواب دادن به زنگ‌ها و پیام‌ها بعد از کار بسیار مضر است.',
              tr: 'Doğru: Mesai sonrası dijital ulaşılabilirlik tükenmişlik riskini ciddi biçimde artırır.',
              ar: 'صحيح: البقاء متاحاً للرد على الاتصالات والرسائل بعد الدوام يفاقم الإجهاد النفسي.',
              es: 'Verdadero: la disponibilidad digital permanente eleva drásticamente el riesgo de agotamiento.'
            }
          },
          {
            id: 'telc_b2_h_q9',
            question: '9. Yoga-Kurse und Obstkörbe im Betrieb genügen vollkommen, um chronischen Personalmangel auszugleichen.',
            options: ['Richtig', 'Falsch'],
            correctAnswer: 'Falsch',
            explanation: {
              en: 'False: Dr. Ebersbach explicitly states fruit and yoga cannot compensate structural understaffing.',
              fa: 'نادرست: یوگا و سبد میوه نمی‌توانند کمبود نیروی کار و مدیریت سمی را جبران کنند.',
              prs: 'نادرست: ورزش یوگا کمبود کارمند و فشار اداری را حل نمی‌کند.',
              tr: 'Yanlış: Meyve sepeti ve yoga yetersiz personel ve kötü yönetim kültürünü telafi edemez.',
              ar: 'خطأ: حصص اليوغا وسلال الفواكه لا تعوض النقص المزمن في الكوادر أو الإدارة السامة.',
              es: 'Falso: la fruta o el yoga no compensan la falta crónica de personal.'
            }
          },
          {
            id: 'telc_b2_h_q10',
            question: '10. Echte betriebliche Resilienzförderung erfordert Veränderungen auf organisatorischer Ebene.',
            options: ['Richtig', 'Falsch'],
            correctAnswer: 'Richtig',
            explanation: {
              en: 'True: structural steps like realistic goals and clear communication are needed.',
              fa: 'درست: ارتقای واقعی تاب‌آوری نیازمند اصلاحات در سطح سازمانی و اهداف واقع‌بینانه کاری است.',
              prs: 'درست: باید در کل ساختار اداره اصلاحات بیاید.',
              tr: 'Doğru: Gerçek destek kurumsal düzeyde gerçekçi hedefler ve şeffaflıkla sağlanır.',
              ar: 'صحيح: تعزيز المرونة يتطلب إجراءات تنظيمية هيكلية وتحديد أهداف واقعية.',
              es: 'Verdadero: la promoción de la resiliencia debe implantarse a nivel organizativo.'
            }
          },
          {
            id: 'telc_b2_h_q11',
            question: '11. Ein Mitarbeiter sollte firmenbezogene E-Mail-Programme auf seinem Privathandy dauerhaft geöffnet lassen.',
            options: ['Richtig', 'Falsch'],
            correctAnswer: 'Falsch',
            explanation: {
              en: 'False: He advises strictly deactivating company email apps on private phones.',
              fa: 'نادرست: او توصیه می‌کند اپلیکیشن‌های ایمیل کاری در گوشی شخصی حتماً غیرفعال شوند.',
              prs: 'نادرست: ایمیل کار در موبایل شخصی باید بند شود.',
              tr: 'Yanlış: Şirket e-posta uygulamalarının kişisel telefonda kapatılması önerilir.',
              ar: 'خطأ: ينصح بتعطيل تطبيقات البريد الإلكتروني الخاصة بالعمل على الهواتف الشخصية.',
              es: 'Falso: aconseja desactivar las aplicaciones de correo corporativo en el móvil privado.'
            }
          },
          {
            id: 'telc_b2_h_q12',
            question: '12. Dr. Ebersbach empfiehlt ein abendliches Abschlussritual wie das Notieren gelungener Dinge.',
            options: ['Richtig', 'Falsch'],
            correctAnswer: 'Richtig',
            explanation: {
              en: 'True: Writing down 3 positive accomplishments before shutting down the laptop helps mental disengagement.',
              fa: 'درست: نوشتن ۳ دستاورد مثبت کاری پیش از بستن لپ‌تاپ به آرامش روحی پایان روز کمک می‌کند.',
              prs: 'درست: یادداشت کردن کارهای موفق روزانه برای آرامش ذهن.',
              tr: 'Doğru: Gün sonunda 3 başarılı noktayı not ederek zihinsel kapanış yapmak önerilir.',
              ar: 'صحيح: يوصي بتدوين 3 إنجازات يومية ناجحة كطقس ذهني قبل إغلاق الحاسوب.',
              es: 'Verdadero: recomienda anotar tres logros del día como ritual de cierre mental.'
            }
          },
          {
            id: 'telc_b2_h_q13',
            question: '13. Führungskräfte sollten Mitarbeitern ein uneingeschränktes Recht auf Nichterreichbarkeit zugestehen.',
            options: ['Richtig', 'Falsch'],
            correctAnswer: 'Richtig',
            explanation: {
              en: 'True: "das Recht auf Nichterreichbarkeit" is cited as a vital structural pillar.',
              fa: 'درست: به رسمیت شناختن حق قانونی عدم دسترسی پس از ساعات کاری برای سلامت کارمندان حیاتی است.',
              prs: 'درست: حق عدم دسترسی بعد از وقت کاری.',
              tr: 'Doğru: Ulaşılamama hakkı çalışan sağlığı için hayati bir ilkedir.',
              ar: 'صحيح: الإقرار بحق الموظف في عدم الرد خارج أوقات العمل ركيزة أساسية.',
              es: 'Verdadero: el derecho a la desconexión es un pilar imprescindible.'
            }
          },
          {
            id: 'telc_b2_h_q14',
            question: '14. Das Gefühl, die eigene Arbeitszeit selbstbestimmt einteilen zu können, schützt vor Erschöpfung.',
            options: ['Richtig', 'Falsch'],
            correctAnswer: 'Richtig',
            explanation: {
              en: 'True: Autonomy in time management shields workers from depressive exhaustion.',
              fa: 'درست: توانایی خودمدیریتی در برنامه‌ریزی زمان کار، سدی محافظ در برابر فرسودگی شغلی است.',
              prs: 'درست: داشتن اختیار در تقسیم اوقات کاری از خستگی مفرط جلوگیری می‌کند.',
              tr: 'Doğru: Zamanını kendi yönetebilme hissi tükenmişliğe karşı koruyucu bir kalkandır.',
              ar: 'صحيح: الشعور بالاستقلالية في تنظيم وقت العمل يقي من الانهيار النفسي.',
              es: 'Verdadero: la autonomía en la gestión del tiempo protege contra el agotamiento.'
            }
          },
          {
            id: 'telc_b2_h_q15',
            question: '15. Dr. Ebersbach arbeitet als Arbeitspsychologe an der Charité.',
            options: ['Richtig', 'Falsch'],
            correctAnswer: 'Richtig',
            explanation: {
              en: 'True: The moderator introduces him: "Dr. Christian Ebersbach, Arbeitspsychologe an der Charité."',
              fa: 'درست: او به عنوان روانشناس کار در بیمارستان معروف شاریته فعالیت می‌کند.',
              prs: 'درست: روانشناس در شاریته است.',
              tr: 'Doğru: Charité bünyesinde çalışma psikoloğu olarak görev yapmaktadır.',
              ar: 'صحيح: يعمل أخصائياً في علم النفس المهني بمستشفى الشاريتيه.',
              es: 'Verdadero: ejerce como psicólogo laboral en el hospital Charité.'
            }
          }
        ]
      },
      {
        id: 'telc_b2_h_item3',
        title: 'Teil 3: Selektives Verstehen (Aufgaben 16 bis 20 • 5 Ansagen im Alltag • Einmal hören)',
        situation: '5 Mitteilungen im Berufs- und Alltagsleben',
        transcript: `Mitteilung 1 (Arztpraxis):
"Guten Tag Herr Bauer, hier die kardiologische Praxis Dr. Jansen. Ihre Langzeit-Blutdruckdaten wurden ausgewertet. Die Werte sind stabil, eine Dosisanpassung der Medikamente ist nicht erforderlich. Wir sehen uns wie geplant zum Kontrolltermin im November."

Mitteilung 2 (Automobilclub ADAC):
"Achtung an alle Autofahrer auf der Autobahn A8 München Richtung Salzburg: Zwischen Holzkirchen und Irschenberg befindet sich ein defekter Lkw auf der rechten Fahrspur. Es herrscht bereits 8 Kilometer stockender Verkehr. Wir empfehlen die Umleitung über die Bundesstraße B318."

Mitteilung 3 (Handwerker):
"Hallo Frau Weber, hier Fliesenleger Meister Krause. Die neuen Feinsteinzeugfliesen für Ihr Badezimmer sind heute im Großlager eingetroffen. Wir können planmäßig am kommenden Montag um 08:00 Uhr mit den Verlegearbeiten beginnen."

Mitteilung 4 (Fortbildungsinstitut):
"Sehr geehrte Kursteilnehmer des Seminars 'Agiles Projektmanagement': Das morgige Modul muss aufgrund eines technischen Serverausfalls um einen Tag auf Donnerstag verschoben werden. Die Zugangsdaten für den virtuellen Raum bleiben unverändert gültig."

Mitteilung 5 (Finanzamt):
"Guten Tag, hier Sachbearbeiter Walter vom Finanzamt Mitte für Herrn Yilmaz. In Ihrer Einkommensteuererklärung fehlen noch die Belege für Ihre doppelten Haushaltsführungskosten. Bitte reichen Sie diese innerhalb der nächsten zwei Wochen per ELSTER online nach."`,
        questions: [
          {
            id: 'telc_b2_h_q16',
            question: '16. Was ergab die Auswertung der Blutdruckdaten von Herrn Bauer?',
            options: ['Richtig (Die Werte sind stabil und Medikamente bleiben unverändert)', 'Falsch (Er muss sofort ins Krankenhaus eingeliefert werden)'],
            correctAnswer: 'Richtig (Die Werte sind stabil und Medikamente bleiben unverändert)',
            explanation: {
              en: 'Message 1 states values are stable, no medication adjustment needed.',
              fa: 'داده‌ها نشان داد که فشار خون پایدار است و تغییری در داروها لازم نیست.',
              prs: 'فشار خون نارمل است و دواها تغییر نمی‌کند.',
              tr: 'Değerler stabil çıkmış olup ilaç dozunda değişiklik gerekmemektedir.',
              ar: 'النتائج أظهرت استقرار المؤشرات ولا داعي لتعديل جرعات الدواء.',
              es: 'Los valores están estabilizados y no se requiere modificar la medicación.'
            }
          },
          {
            id: 'telc_b2_h_q17',
            question: '17. Welche Verkehrsstörung wird auf der Autobahn A8 gemeldet?',
            options: ['Richtig (Ein defekter Lkw verursacht 8 km Stau auf der rechten Spur)', 'Falsch (Die Autobahn ist wegen Glatteis komplett gesperrt)'],
            correctAnswer: 'Richtig (Ein defekter Lkw verursacht 8 km Stau auf der rechten Spur)',
            explanation: {
              en: 'Traffic message: A broken-down truck on the right lane causes 8 km tailback.',
              fa: 'یک کامیون خراب در لاین راست موجب ترافیک سنگین ۸ کیلومتری شده است.',
              prs: 'موتر باربری خراب شده و ۸ کیلومتر راهبندان ایجاد کرده است.',
              tr: 'Arızalanan kamyon sağ şeritte 8 kilometrelik yoğun trafiğe yol açmıştır.',
              ar: 'شاحنة معطلة في المسار الأيمن تتسبب في ازدحام مروري بطول 8 كيلومترات.',
              es: 'Un camión averiado en el carril derecho causa 8 km de retenciones.'
            }
          },
          {
            id: 'telc_b2_h_q18',
            question: '18. Wann beginnen die Fliesenlegerarbeiten im Badezimmer von Frau Weber?',
            options: ['Richtig (Am kommenden Montag um 08:00 Uhr)', 'Falsch (Erst in drei Monaten)'],
            correctAnswer: 'Richtig (Am kommenden Montag um 08:00 Uhr)',
            explanation: {
              en: 'Craftsman confirms: "... planmäßig am kommenden Montag um 08:00 Uhr...".',
              fa: 'کاشی‌کاری حمام دوشنبه آینده ساعت ۸:۰۰ صبح طبق برنامه آغاز می‌شود.',
              prs: 'روز دوشنبه ساعت ۸ صبح کار کاشی شروع می‌شود.',
              tr: 'Gelecek Pazartesi saat 08:00\'de fayans döşeme işi başlayacaktır.',
              ar: 'تبدأ أعمال تبليط الحمام يوم الاثنين القادم في تمام الساعة الثامنة صباحاً.',
              es: 'Los trabajos de alicatado darán comienzo el próximo lunes a las 08:00.'
            }
          },
          {
            id: 'telc_b2_h_q19',
            question: '19. Warum wird das Seminar \'Agiles Projektmanagement\' verschoben?',
            options: ['Richtig (Wegen eines technischen Serverausfalls um einen Tag)', 'Falsch (Weil der Dozent keine Lust mehr hat)'],
            correctAnswer: 'Richtig (Wegen eines technischen Serverausfalls um einen Tag)',
            explanation: {
              en: 'Institute note: "... aufgrund eines technischen Serverausfalls um einen Tag...".',
              fa: 'به دلیل قطعی فنی سرور، وبینار یک روز به پنج‌شنبه موکول شد.',
              prs: 'به خاطر مشکل تخنیکی سرور یک روز عقب افتاد.',
              tr: 'Teknik sunucu arızası nedeniyle seminer bir gün ertelenmiştir.',
              ar: 'تم تأجيل الدورة التدريبية ليوم واحد نتيجة عطل فني في خادم الإنترنت.',
              es: 'El seminario se aplaza un día por fallo técnico en los servidores.'
            }
          },
          {
            id: 'telc_b2_h_q20',
            question: '20. Welche Unterlagen muss Herr Yilmaz beim Finanzamt online nachreichen?',
            options: ['Richtig (Belege für seine doppelten Haushaltsführungskosten)', 'Falsch (Seinen Reisepass und Führerschein)'],
            correctAnswer: 'Richtig (Belege für seine doppelten Haushaltsführungskosten)',
            explanation: {
              en: 'Tax office asks for receipts of double household maintenance costs within 2 weeks.',
              fa: 'ارائه مدارک و فاکتورهای مربوط به هزینه‌های نگهداری دو منزل (doppelte Haushaltsführung) ظرف ۲ هفته.',
              prs: 'رسیدها و اسناد مصارف خانه دوم برای محاسبه مالیات.',
              tr: 'Çift ev idaresi masraflarına ait faturaları ELSTER üzerinden ibraz etmesi gerekmektedir.',
              ar: 'تقديم إيصالات وفواتير تكاليف إعالة مسكنين عبر منصة ELSTER الضريبية.',
              es: 'Los justificantes de gastos por doble residencia para la declaración de la renta.'
            }
          }
        ]
      }
    ]
  },
  schreiben: {
    title: 'Modul Schriftlicher Ausdruck (30 Minuten • 1 formeller Brief)',
    durationMinutes: 30,
    taskType: 'Beschwerdebrief oder Bitte um Information (ca. 150 Wörter)',
    situation: 'Sie haben vor zwei Monaten eine Online-Weiterbildung zum Thema "Data Science und KI für Führungskräfte" gebucht. Im Werbeprospekt wurde persönliches Coaching durch Universitätsprofessoren und Zugang zu Hochleistungsrechnern versprochen. Tatsächlich gab es nur veraltete PDF-Folien und der Support antwortete wochenlang nicht.',
    prompt: `Verfassen Sie einen förmlichen Beschwerdebrief an die Institutsleitung:
1. Nennen Sie den Anlass Ihres Schreibens und die Kursdetails.
2. Beschreiben Sie präzise die Diskrepanz zwischen Werbeversprechen und Realität.
3. Schildern Sie die negativen Konsequenzen für Ihre berufliche Fortbildung.
4. Formulieren Sie konkrete Forderungen (z. B. Nachbesserung, Teilrückerstattung der Kursgebühr von 1.800 Euro innerhalb einer Frist).`,
    guidingPoints: [
      '1. Einleitung und Buchungsdaten des Kurses',
      '2. Detaillierte Mängelbeschreibung (Betreuung, Lehrmaterialien)',
      '3. Berufliche Nachteile und verlorene Zeit',
      '4. Klare Fristsetzung zur Rückerstattung oder außerordentliche Kündigung'
    ],
    targetWordCount: 'ca. 150-180 Wörter',
    sampleSolution: `Sehr geehrte Damen und Herren der Institutsleitung,

hiermit rüge ich die mangelhafte Durchführung des Lehrgangs "Data Science und KI für Führungskräfte" (Buchungsnummer: DS-8834), an dem ich seit dem 1. August teilnehme.

Entgegen Ihren ausdrücklichen Werbezusagen, die individuelles Mentoring durch renommierte Fachdozenten und praktischen Zugang zu modernen GPU-Servern versprachen, besteht der Kurs de facto ausschließlich aus statischen, teils veralteten PDF-Dateien. Meine wiederholten fachlichen Anfragen an das Tutorenteam blieben seit über drei Wochen unbeantwortet.

Dieses eklatante Missverhältnis zwischen Vertrag und tatsächlicher Leistung stellt mich vor erhebliche berufliche Schwierigkeiten, da ich die erhofften KI-Kompetenzen für ein anstehendes Unternehmensprojekt dringend benötige.

Aufgrund dieser schweren Leistungsstörung fordere ich Sie auf, mir bis zum 25. Oktober eine Teilrückerstattung in Höhe von 50 Prozent der Kursgebühr (900 Euro) auf mein Konto zu überweisen. Sollte die Frist fruchtlos verstreichen, werde ich von meinem Recht auf außerordentliche fristlose Kündigung Gebrauch machen und rechtliche Schritte einleiten.

Mit freundlichen Grüßen,
Kandidat Muster`,
    scoringCriteria: {
      en: 'Task completion & depth of argumentation (25 pts), register & stylistic variation (25 pts), grammatical accuracy & complex syntax (25 pts), cohesion & paragraphing (25 pts). Max 100 points.',
      fa: 'پوشش عمیق تمام بندها و استدلال‌سازی منطقی (۲۵ نمره)، لحن رسمی و تنوع واژگان سطح B2 (۲۵ نمره)، دقت گرامری و ساختارهای پیچیده (۲۵ نمره)، انسجام و پاراگراف‌بندی (۲۵ نمره). مجموع ۱۰۰ نمره.',
      prs: '۴ معیار ارزیابی شامل گرامر پیشرفته، استدلال، ساختار نامه و واژگان رسمی.',
      tr: 'Görev kapsamı (25 p), biçem ve kelime zenginliği (25 p), dilbilgisi doğruluğu (25 p), metin tutarlılığı (25 p). Toplam 100 puan.',
      ar: 'معالجة النقاط والاستدلال (25 نقطة)، الأسلوب والمفردات الرسمية (25 نقطة)، القواعد النحوية المعقدة (25 نقطة)، الترابط النصي (25 نقطة). المجموع: 100 نقطة.',
      es: 'Cumplimiento de tareas (25 pts), registro y vocabulario B2 (25 pts), precisión sintáctica (25 pts), cohesión (25 pts).'
    }
  },
  sprechen: {
    title: 'Modul Mündliche Prüfung (ca. 15 Minuten • Paarprüfung in 3 Teilen)',
    durationMinutes: 15,
    teil1: {
      name: 'Teil 1: Präsentation (ca. 4-5 Minuten pro Teilnehmer)',
      instruction: {
        en: 'Present a book, a movie, an event, or a personal experience. Structure your talk clearly and answer questions from the examiners and your partner.',
        fa: 'ارائه یک کتاب، فیلم، سفر یا رویداد ماندگار با ساختار استاندارد، تشریح جزئیات و پاسخ به سوالات داوران و پارتنر.',
        prs: 'ارائه شفاهی یک موضوع در حدود ۵ دقیقه همراه با پاسخ به سوالات.',
        tr: 'Bir kitap, film veya önemli olayı sunun; ardından gelen soruları yanıtlayın.',
        ar: 'تقديم عرض شفهي حول كتاب أو فيلم أو حدث معين والإجابة عن الأسئلة المطروحة.',
        es: 'Presentación estructurada de un libro, película o experiencia personal respondiendo preguntas.'
      },
      prompts: [
        'Einleitung & Thema vorstellen',
        'Inhalt und Kernbotschaft schildern',
        'Persönliche Bedeutung / Empfehlung',
        'Fazit und Überleitung zu Fragen'
      ],
      sampleResponse: `Kandidat: "Ich möchte Ihnen heute das Sachbuch 'Factfulness' von Hans Rosling vorstellen. In diesem Werk analysiert der Autor anhand verlässlicher globaler Daten, warum die Menschheit die Weltlage oft viel pessimistischer wahrnimmt, als sie tatsächlich ist. Mich hat besonders fasziniert, wie kognitive Verzerrungen unsere Urteile prägen. Ich empfehle das Buch jedem, der lernen möchte, Daten im Berufsalltag kritischer zu hinterfragen."`
    },
    teil2: {
      name: 'Teil 2: Diskussion (ca. 5 Minuten)',
      instruction: {
        en: 'Lead a controversial discussion on a current societal debate. Argue your position, counter partner arguments, and weigh alternatives.',
        fa: 'بحث و تبادل نظر پیرامون یک موضوع چالش‌برانگیز اجتماعی: بیان دیدگاه، مخالفت مودبانه با استدلال‌های طرف مقابل و ارزیابی راه‌حل‌ها.',
        prs: 'بحث پیرامون یک موضوع جنجالی با دلایل قوی.',
        tr: 'Güncel ve tartışmalı bir konuda karşılıklı argümanlar sunarak fikir alışverişinde bulunun.',
        ar: 'خوض نقاش جدلي حول قضية مجتمعية راهنة وتبادل الحجج ووجهات النظر.',
        es: 'Debate de confrontación sobre un tema controvertido argumentando con solidez.'
      },
      topicCards: [
        'Thema 1: Sollte Homeoffice ein gesetzlich verankerter Rechtsanspruch für alle Büroangestellten werden?',
        'Thema 2: Sind Noten an Schulen noch zeitgemäß oder sollten sie durch individuelle Lernberichte ersetzt werden?',
        'Thema 3: Tempolimit 130 km/h auf deutschen Autobahnen – Klimaschutz oder Freiheitsberaubung?'
      ],
      sampleResponse: `Kandidat A: "Ich plädiere klar für ein gesetzliches Recht auf Homeoffice. Es erspart Millionen Pendlern stundenlange Staus, schont die Umwelt und erleichtert die Vereinbarkeit von Beruf und Familie."
Kandidatin B: "Aus Arbeitnehmersicht kann ich diese Argumente nachvollziehen. Allerdings darf man nicht übersehen, dass die informelle Kommunikation und das Teamgefühl bei dauerhafter Distanz leiden. Viele Innovationen entstehen spontan an der Kaffeemaschine."`
    },
    teil3: {
      name: 'Teil 3: Problemlösung (ca. 5 Minuten)',
      instruction: {
        en: 'Develop a detailed action plan to solve a business or organizational challenge together with your partner.',
        fa: 'حل یک چالش تشکیلاتی یا شغلی همراه با همتای خود: تدوین طرح عملیاتی، توزیع مسئولیت‌ها و توافق بر بودجه و زمان‌بندی.',
        prs: 'حل مشترک یک مشکل یا چالش کاری با تقسیم وظایف.',
        tr: 'Partnerinizle birlikte kurumsal bir problemi çözmek üzere somut bir eylem planı oluşturun.',
        ar: 'وضع خطة عمل مشتركة مع زميلك لحل معضلة تنظيمية وتوزيع الأدوار وتحديد الجدول الزمني.',
        es: 'Desarrollar un plan de acción conjunto para resolver un reto organizativo de trabajo.'
      },
      planningScenario: 'Entwicklung eines Nachhaltigkeitskonzepts für ein mittelständisches Unternehmen mit 120 Mitarbeitern',
      discussionPoints: [
        'Müllvermeidung & papierloses Büro',
        'Mobilität (Jobrad-Leasing, Zuschuss zum Deutschlandticket)',
        'Kantine & Catering (Mehr Bio und regionale Produkte)',
        'Mitarbeitermotivation (Interne Workshops und Incentive-System)'
      ],
      sampleResponse: `Kandidat A: "Lass uns zunächst bei der Mobilität ansetzen. Wenn das Unternehmen das Deutschlandticket bezuschusst und Jobrad-Leasing anbietet, können wir den CO2-Ausstoß des Pendlerverkehrs sofort um mindestens 30 Prozent senken."
Kandidatin B: "Ausgezeichnet! Ergänzend schlage ich vor, die Firmenkantine auf regionale Bio-Zutaten umzustellen und Einwegverpackungen komplett durch ein Pfandsystem zu ersetzen. Ich übernehme das Gespräch mit dem Catering-Dienstleister."`
    }
  }
};
