import { StandardizedExam } from '../types';

// =========================================================================
// GOETHE-ZERTIFIKAT B1 (STANDARD: 165 MINUTEN)
// Lesen: 65 Min (30 Aufgaben) | Hören: 40 Min (30 Aufgaben) | Schreiben: 60 Min | Sprechen: 15 Min
// =========================================================================
export const EXAM_GOETHE_B1: StandardizedExam = {
  id: 'exam_goethe_b1',
  title: 'Goethe- / telc Zertifikat B1 (Offizieller Standard)',
  standard: 'Goethe-Zertifikat',
  level: 'B1.1',
  totalDurationMinutes: 165,
  passingScore: '60% in jedem Modul (60 / 100 Punkte)',
  strategy: {
    level: 'B1.1',
    timeManagement: [
      {
        section: 'Lesen (Reading) - 30 Aufgaben',
        allocatedMinutes: 65,
        tip: {
          en: '30 questions across 5 parts in 65 minutes (~13 min per part). Teil 1 (6 tasks): Blog post. Teil 2 (6 tasks): Press reports. Teil 3 (7 tasks): Matching classified ads. Teil 4 (7 tasks): Opinions (Yes/No). Teil 5 (4 tasks): Rules/Regulations.',
          fa: '۳۰ سوال در ۵ بخش طی ۶۵ دقیقه (حدود ۱۳ دقیقه برای هر بخش). بخش ۱ (۶ سوال): وبلاگ. بخش ۲ (۶ سوال): گزارش مطبوعاتی. بخش ۳ (۷ سوال): تطبیق آگهی‌ها. بخش ۴ (۷ سوال): نظرات موافق/مخالف (بله/خیر). بخش ۵ (۴ سوال): قوانین و مقررات.',
          prs: '۳۰ سوال در ۶۵ دقیقه. تقسیم زمان: ۱۳ دقیقه به هر بخش.',
          tr: '65 dakikada 30 soru. 5 bölüm: Blog, basın bülteni, ilanlar, evet/hayır görüşler ve kurallar.',
          ar: '30 سؤالاً في 65 دقيقة مقسمة على 5 أجزاء بمعدل 13 دقيقة لكل جزء.',
          es: '30 preguntas en 65 minutos distribuidas en 5 partes.'
        }
      },
      {
        section: 'Hören (Listening) - 30 Aufgaben',
        allocatedMinutes: 40,
        tip: {
          en: '30 questions across 4 parts in 40 minutes. Teil 1 (10 tasks: 5 True/False + 5 Multiple Choice). Teil 2 (5 tasks: Presentation/Guided tour). Teil 3 (7 tasks: Dialogue). Teil 4 (8 tasks: Radio panel discussion).',
          fa: '۳۰ سوال در ۴ بخش طی ۴۰ دقیقه. بخش ۱ (۱۰ سوال: ۵ درست/نادرست + ۵ چهارگزینه‌ای). بخش ۲ (۵ سوال: تور یا سخنرانی). بخش ۳ (۷ سوال: گفتگوی غیررسمی). بخش ۴ (۸ سوال: میزگرد رادیویی).',
          prs: '۳۰ سوال در ۴۰ دقیقه شنیداری در ۴ بخش.',
          tr: '40 dakikada 30 soru. Duyurular, sunum, ikili konuşma ve radyo paneli.',
          ar: '30 سؤالاً في 40 دقيقة استماع مقسمة على 4 أجزاء.',
          es: '30 preguntas de comprensión auditiva en 40 minutos.'
        }
      },
      {
        section: 'Schreiben (Writing) - 3 Aufgaben',
        allocatedMinutes: 60,
        tip: {
          en: 'Teil 1 (20 min, ~80 words): Personal email. Teil 2 (25 min, ~80 words): Opinion essay on a forum. Teil 3 (15 min, ~40 words): Formal excuse or official letter.',
          fa: 'بخش ۱ (۲۰ دقیقه، حدود ۸۰ کلمه): ایمیل دوستانه. بخش ۲ (۲۵ دقیقه، حدود ۸۰ کلمه): یادداشت ابراز نظر در فروم. بخش ۳ (۱۵ دقیقه، حدود ۴۰ کلمه): نامه اداری یا عذرخواهی رسمی.',
          prs: 'سه وظیفه نوشتاری در ۶۰ دقیقه با رعایت کلمات استاندارد.',
          tr: '60 dakikada 3 görev: Kişisel e-posta, forum görüşü ve resmi mektup.',
          ar: '60 دقيقة لـ 3 مهام كتابية: بريد شخصي، منتدى رأي، ورسالة رسمية.',
          es: '60 minutos para 3 tareas de expresión escrita.'
        }
      }
    ],
    stepByStepStrategies: [
      {
        title: 'B1 Schreiben Teil 2: Strukturierte Meinungsäußerung',
        steps: [
          {
            en: '1. Introduction: State your opinion clearly ("Ich bin der Ansicht, dass..."). 2. Arguments: Name pros & cons with connectors ("Einerseits... andererseits...", "Weil..."). 3. Conclusion with personal experience.',
            fa: '۱. مقدمه: نظر شخصی خود را صریح بیان کنید. ۲. استدلال‌ها: مزایا و معایب را با حروف ربط چون einerseits... andererseits ذکر کنید. ۳. نتیجه‌گیری با ذکر تجربه شخصی.',
            prs: '۱. بیان نظر. ۲. آوردن دلایل مثبت و منفی با حروف ربط. ۳. نتیجه‌گیری با مثال.',
            tr: '1. Giriş ve görüş. 2. Avantaj ve dezavantajlar. 3. Kişisel deneyimle sonuç.',
            ar: '1. إبداء الرأي بوضوح. 2. عرض الحجج الإيجابية والسلبية. 3. الخاتمة مع التجربة الشخصية.',
            es: '1. Introducción y postura. 2. Argumentos a favor y en contra. 3. Conclusión personal.'
          }
        ]
      }
    ],
    commonMistakes: [
      {
        mistake: 'Using only simple coordination (und, aber) without complex subjunctions.',
        correction: 'At B1, use a balanced variety of connectors: obwohl, damit, während, seitdem, um... zu + Infinitiv.',
        explanation: {
          en: 'B1 requires mastery of causal, concessive, final, and temporal subordinate clauses.',
          fa: 'سطح B1 نیازمند تسلط بر جملات پیرو سببی، تقابلی (obwohl)، غایی (damit) و زمانی است.',
          prs: 'در B1 از انواع مختلف جملات فرعی استفاده کنید.',
          tr: 'B1 seviyesinde obwohl, damit, während gibi bağlaçların kullanımı şarttır.',
          ar: 'يتطلب مستوى B1 استخدام أدوات ربط متنوعة للجمل الثانوية.',
          es: 'Se exige el uso de conjunciones subordinantes como obwohl o damit.'
        }
      }
    ]
  },
  lesen: {
    title: 'Modul Lesen (65 Minuten • 30 Aufgaben)',
    durationMinutes: 65,
    texts: [
      {
        title: 'Teil 1: Blogbeitrag "Konsumverzicht und Minimalismus im Alltag" (Aufgaben 1 bis 6)',
        sourceType: 'Lifestyle- und Nachhaltigkeits-Blog',
        body: 'Immer mehr Menschen in Deutschland entscheiden sich bewusst für einen minimalistischen Lebensstil. Unter dem Motto "Weniger Besitz, mehr Lebensqualität" reduzieren sie ihren Hausrat drastisch. Bloggerin Sarah Hoffmann (31) berichtet: "Vor drei Jahren besaß ich über 10.000 Gegenstände in einer vollgestellten Dreizimmerwohnung. Nach einem Umzug mistete ich rigoros aus: Kleidung, alte Bücher, doppelte Küchengeräte – alles wurde gespendet oder verkauft. Heute besitze ich nur noch rund 400 Dinge, und ich habe mich noch nie so frei gefühlt." Kritiker argumentieren zwar, dass Minimalismus ein Luxusphänomen wohlhabender Gesellschaften sei, da sich arme Menschen den freiwilligen Verzicht gar nicht leisten könnten. Doch Sarah widerspricht: Durch den bewussten Kaufstopp spare sie monatlich Hunderte Euro und könne ihre Arbeitszeit reduzieren.',
        questions: [
          {
            id: 'b1_l_q1',
            question: '1. Sarah Hoffmann hat ihren Besitz drastisch reduziert, um ein freieres Leben zu führen.',
            options: ['Richtig', 'Falsch'],
            correctAnswer: 'Richtig',
            explanation: {
              en: 'Text confirms: "... und ich habe mich noch nie so frei gefühlt."',
              fa: 'متن تایید می‌کند: او وسایلش را برای احساس آزادی بیشتر کاهش داد.',
              prs: 'متن تایید می‌کند که او برای آزادی بیشتر وسایل را کم کرد.',
              tr: 'Sarah daha özgür hissetmek için eşyalarını azaltmıştır.',
              ar: 'يؤكد النص أنها تخلصت من أشيائها لتشعر بمزيد من الحرية.',
              es: 'El texto confirma que redujo sus pertenencias para sentirse libre.'
            }
          },
          {
            id: 'b1_l_q2',
            question: '2. Sarah hat alle aussortierten Gegenstände im Müll entsorgt.',
            options: ['Richtig', 'Falsch'],
            correctAnswer: 'Falsch',
            explanation: {
              en: 'She donated or sold them: "... alles wurde gespendet oder verkauft."',
              fa: 'او وسایل را اهدا کرد یا فروخت، دور نینداخت.',
              prs: 'وسایل را بخشید یا فروخت، در کثافات نینداخت.',
              tr: 'Eşyaları çöpe atmamış, bağışlamış ya da satmıştır.',
              ar: 'قامت بالتبرع بالأشياء أو بيعها ولم ترمها في النفايات.',
              es: 'Donó o vendió sus cosas, no las tiró a la basura.'
            }
          },
          {
            id: 'b1_l_q3',
            question: '3. Heute besitzt Sarah Hoffmann nur noch etwa...',
            options: ['a) 10.000 Gegenstände', 'b) 400 Dinge', 'c) 1.500 Dinge'],
            correctAnswer: 'b) 400 Dinge',
            explanation: {
              en: 'Sarah states: "Heute besitze ich nur noch rund 400 Dinge".',
              fa: 'امروزه او تنها حدود ۴۰۰ شیء دارد.',
              prs: 'امروز صرف حدود ۴۰۰ چیز دارد.',
              tr: 'Bugün yalnızca yaklaşık 400 eşyası bulunmaktadır.',
              ar: 'تمتلك اليوم حوالي 400 شيء فقط.',
              es: 'Hoy en día solo posee unas 400 cosas.'
            }
          },
          {
            id: 'b1_l_q4',
            question: '4. Was sagen Kritiker über den Minimalismus?',
            options: ['a) Er sei schlecht für die Umwelt', 'b) Er sei ein Privileg von Wohlhabenden', 'c) Er mache die Menschen unglücklich'],
            correctAnswer: 'b) Er sei ein Privileg von Wohlhabenden',
            explanation: {
              en: 'Critics claim: "... Minimalismus ein Luxusphänomen wohlhabender Gesellschaften sei".',
              fa: 'منتقدان معتقدند مینیمالیسم پدیده‌ای لوکس برای جوامع مرفه است.',
              prs: 'منتقدان می‌گویند مینیمالیزم برای افراد دارا است.',
              tr: 'Eleştirmenler minimalizmin varlıklı kesime özgü olduğunu savunmaktadır.',
              ar: 'يرى النقاد أنه ظاهرة ترفيهية خاصة بالمجتمعات الثرية.',
              es: 'Los críticos sostienen que es un fenómeno de gente adinerada.'
            }
          },
          {
            id: 'b1_l_q5',
            question: '5. Welchen finanziellen Vorteil hat Sarah durch ihren Lebensstil?',
            options: ['a) Sie bekommt staatliche Fördergelder', 'b) Sie spart monatlich Hunderte Euro', 'c) Sie muss keine Miete mehr zahlen'],
            correctAnswer: 'b) Sie spart monatlich Hunderte Euro',
            explanation: {
              en: 'Text clarifies: "Durch den bewussten Kaufstopp spare sie monatlich Hunderte Euro".',
              fa: 'با توقف خریدهای غیرضروری صدها یورو در ماه پس‌انداز می‌کند.',
              prs: 'ماهانه صدها یورو پس‌انداز می‌کند.',
              tr: 'Alışverişi durdurarak ayda yüzlerce Euro tasarruf etmektedir.',
              ar: 'توفر مئات اليوروهات شهرياً من خلال التوقف عن الشراء غير الضروري.',
              es: 'Ahorra cientos de euros al mes al dejar de comprar.'
            }
          },
          {
            id: 'b1_l_q6',
            question: '6. Sarah Hoffmann plant, bald wieder mehr Dinge zu kaufen.',
            options: ['Richtig', 'Falsch'],
            correctAnswer: 'Falsch',
            explanation: {
              en: 'She enjoys working less and living freely; no intent to revert.',
              fa: 'او از این شیوه راضی است و برنامه‌ای برای خرید مجدد ندارد.',
              prs: 'او از زندگی فعلی راضی است.',
              tr: 'Tekrar çok eşya alma niyeti yoktur.',
              ar: 'لا تخطط أبداً للعودة لشراء المزيد من الأغراض.',
              es: 'No tiene intención de volver a comprar más cosas.'
            }
          }
        ]
      },
      {
        title: 'Teil 2: Pressebericht "Die Zukunft des Nahverkehrs: Autonome Busse im Test" (Aufgaben 7 bis 12)',
        sourceType: 'Wirtschafts- und Technikmagazin',
        body: 'In mehreren deutschen Kleinstädten und ländlichen Regionen rollen die ersten autonom fahrenden Kleinbusse über öffentliche Straßen. Ausgestattet mit Kameras, Radarsensoren und GPS finden die elektrisch betriebenen Minibusse ihren Weg völlig ohne Fahrer. Im bayerischen Bad Birnbach verbindet ein solcher Bus den Marktplatz mit den beliebten Thermalbädern. Fahrgäste können kostenfrei einsteigen. Zur Sicherheit fährt stets ein geschulter Sicherheitsbegleiter mit, der im Notfall manuell eingreifen kann. Die Akzeptanz in der Bevölkerung ist erstaunlich hoch: Über 85 Prozent der befragten Passagiere fühlen sich an Bord sicher. Experten sehen im autonomen On-Demand-Verkehr die Rettung für abgelegene Dörfer, in denen reguläre Linienbusse oft nur zweimal täglich verkehren.',
        questions: [
          {
            id: 'b1_l_q7',
            question: '7. Wie orientieren sich die neuen Kleinbusse im Straßenverkehr?',
            options: ['a) Über Magnetschienen im Asphalt', 'b) Mit Kameras, Radarsensoren und GPS', 'c) Durch Funksignale von Verkehrspolizisten'],
            correctAnswer: 'b) Mit Kameras, Radarsensoren und GPS',
            explanation: {
              en: 'Text specifies: "Ausgestattet mit Kameras, Radarsensoren und GPS...".',
              fa: 'مجهز به دوربین‌ها، حسگرهای راداری و مسیریاب ماهواره‌ای GPS.',
              prs: 'با کمره، رادار و سیستم جی‌پی‌اس حرکت می‌کنند.',
              tr: 'Kameralar, radar sensörleri ve GPS donanımıyla yön bulmaktadırlar.',
              ar: 'تعتمد على الكاميرات وأجهزة الرادار ونظام GPS.',
              es: 'Se orientan con cámaras, sensores de radar y GPS.'
            }
          },
          {
            id: 'b1_l_q8',
            question: '8. In Bad Birnbach verbindet der Bus das Zentrum mit den Thermalbädern.',
            options: ['Richtig', 'Falsch'],
            correctAnswer: 'Richtig',
            explanation: {
              en: 'Text states: "... verbindet ein solcher Bus den Marktplatz mit den beliebten Thermalbädern."',
              fa: 'متن تایید می‌کند: این اتوبوس میدان مرکزی را به استخرهای آب گرم متصل می‌کند.',
              prs: 'میدان اصلی را با حوض‌های آب گرم وصل می‌کند.',
              tr: 'Otobüs çarşı meydanı ile kaplıcaları birbirine bağlamaktadır.',
              ar: 'يربط الحافلة بين ساحة السوق والينابيع الحارة.',
              es: 'Conecta la plaza del mercado con los baños termales.'
            }
          },
          {
            id: 'b1_l_q9',
            question: '9. Wie viel kostet eine Fahrt mit dem Testbus in Bad Birnbach?',
            options: ['a) 2,50 Euro', 'b) Den normalen Stadtbustarif', 'c) Gar nichts, sie ist kostenfrei'],
            correctAnswer: 'c) Gar nichts, sie ist kostenfrei',
            explanation: {
              en: 'Article states: "Fahrgäste können kostenfrei einsteigen."',
              fa: 'مسافران می‌توانند کاملاً رایگان سوار شوند.',
              prs: 'سوار شدن رایگان است.',
              tr: 'Yolcular ücretsiz olarak binebilmektedir.',
              ar: 'الركوب مجاني تماماً دون أي تكلفة.',
              es: 'Los pasajeros pueden subir de forma gratuita.'
            }
          },
          {
            id: 'b1_l_q10',
            question: '10. Warum fährt noch ein Mitarbeiter im Bus mit?',
            options: ['a) Um Fahrkarten zu kontrollieren', 'b) Um im Notfall die Steuerung zu übernehmen', 'c) Um Sehenswürdigkeiten zu erklären'],
            correctAnswer: 'b) Um im Notfall die Steuerung zu übernehmen',
            explanation: {
              en: 'Safety chaperone on board: "... der im Notfall manuell eingreifen kann."',
              fa: 'یک همراه ایمنی حضور دارد تا در شرایط اضطراری کنترل را به دست گیرد.',
              prs: 'یک نفر است تا در وقت خطر موتر را کنترول کند.',
              tr: 'Acil durumlarda müdahale etmek üzere güvenlik görevlisi bulunmaktadır.',
              ar: 'يتواجد مرافق أمان للتدخل يدوياً في حالات الطوارئ.',
              es: 'Un acompañante puede intervenir manualmente en caso de emergencia.'
            }
          },
          {
            id: 'b1_l_q11',
            question: '11. Die Mehrheit der Passagiere hat Angst vor der neuen Technologie.',
            options: ['Richtig', 'Falsch'],
            correctAnswer: 'Falsch',
            explanation: {
              en: 'Over 85% feel safe: "Über 85 Prozent der befragten Passagiere fühlen sich an Bord sicher."',
              fa: 'بیش از ۸۵ درصد مسافران احساس امنیت می‌کنند.',
              prs: '۸۵ فیصد احساس امنیت دارند.',
              tr: 'Yolcuların %85\'inden fazlası kendini güvende hissetmektedir.',
              ar: 'أكثر من 85% من الركاب يشعرون بالأمان على متنها.',
              es: 'Más del 85% de los pasajeros se sienten seguros.'
            }
          },
          {
            id: 'b1_l_q12',
            question: '12. Für welche Gebiete ist die Technologie besonders vielversprechend?',
            options: ['a) Nur für Autobahnen', 'b) Für den ländlichen Raum mit wenigen Linienbussen', 'c) Nur für Flughafengelände'],
            correctAnswer: 'b) Für den ländlichen Raum mit wenigen Linienbussen',
            explanation: {
              en: 'Experts see it as a solution for remote villages ("Rettung für abgelegene Dörfer").',
              fa: 'کارشناسان این فناوری را نجات‌بخش روستاهای دورافتاده با اتوبوس‌های اندک می‌دانند.',
              prs: 'برای قریه‌های دورافتاده بسیار مفید است.',
              tr: 'Az otobüs seferi olan kırsal köyler için büyük bir fırsattır.',
              ar: 'تعتبر حلاً واعداً للقرى النائية التي تفتقر لحافلات منتظمة.',
              es: 'Es una solución para zonas rurales con poco transporte.'
            }
          }
        ]
      },
      {
        title: 'Teil 3: Anzeigen zuordnen (Aufgaben 13 bis 19)',
        sourceType: 'Anzeigenmarkt für Freizeit und Weiterbildung',
        body: 'Anzeige A: "Töpferkurs für Einsteiger: Lerne an der Drehscheibe eigene Tassen und Vasen zu gestalten. Samstags 10–14 Uhr, Material inklusive."\nAnzeige B: "Business English Intensivkurs: Für Fach- und Führungskräfte. Verhandlungssicherheit, E-Mails und Präsentationen auf C1-Niveau."\nAnzeige C: "Fotokurs Natur und Landschaft: Professionelle Bildgestaltung mit der Spiegelreflexkamera im Nationalpark. Nur sonntags."\nAnzeige D: "Spanisch für den Urlaub: Kompakter Wochenend-Crashkurs für absolute Anfänger. Keine Vorkenntnisse nötig."\nAnzeige E: "Kochen wie in Bella Italia: Frische Pasta selbst herstellen, mediterrane Saucen und Tiramisu. Jeden Freitagabend im Kochstudio."\nAnzeige F: "Web-Design und Programmierung: HTML, CSS und JavaScript für Anfänger. Erstelle deine erste eigene Website."\nAnzeige G: "Yoga im Park: Sanfte Dehnungen und Entspannungsübungen im Freien. Für jedes Alter geeignet. Bring deine Matte mit."',
        questions: [
          {
            id: 'b1_l_q13',
            question: '13. Maria möchte vor ihrer Reise nach Madrid erste spanische Grundkenntnisse erwerben.',
            options: ['Anzeige A', 'Anzeige B', 'Anzeige C', 'Anzeige D', 'Anzeige E', 'Anzeige F', 'Anzeige G'],
            correctAnswer: 'Anzeige D',
            explanation: {
              en: 'Anzeige D offers compact Spanish for holiday beginners.',
              fa: 'آگهی D دوره فشرده اسپانیایی برای سفر را ارائه می‌دهد.',
              prs: 'اعلان D اسپانیوی برای رخصتی است.',
              tr: 'D ilanı tatil için İspanyolca kursudur.',
              ar: 'الإعلان D يقدم دورة إسبانية مكثفة للسفر والعطلات.',
              es: 'El anuncio D ofrece español para vacaciones.'
            }
          },
          {
            id: 'b1_l_q14',
            question: '14. Lukas hat eine neue Kamera gekauft und möchte lernen, wie man schöne Naturfotos macht.',
            options: ['Anzeige A', 'Anzeige B', 'Anzeige C', 'Anzeige D', 'Anzeige E', 'Anzeige F', 'Anzeige G'],
            correctAnswer: 'Anzeige C',
            explanation: {
              en: 'Anzeige C is a nature and landscape photography workshop.',
              fa: 'آگهی C کارگاه عکاسی از طبیعت و منظره است.',
              prs: 'اعلان C عکاسی طبیعت است.',
              tr: 'C ilanı doğa ve manzara fotoğrafçılığı kursudur.',
              ar: 'الإعلان C مخصص للتصوير الطبيعي والمناظر.',
              es: 'El anuncio C es de fotografía de naturaleza.'
            }
          },
          {
            id: 'b1_l_q15',
            question: '15. Elena möchte lernen, wie man frische Nudeln traditionell selbst zubereitet.',
            options: ['Anzeige A', 'Anzeige B', 'Anzeige C', 'Anzeige D', 'Anzeige E', 'Anzeige F', 'Anzeige G'],
            correctAnswer: 'Anzeige E',
            explanation: {
              en: 'Anzeige E teaches making fresh pasta and Mediterranean cooking.',
              fa: 'آگهی E پخت پاستای تازه ایتالیایی را آموزش می‌دهد.',
              prs: 'اعلان E آموزش پاستای تازه ایتالوی است.',
              tr: 'E ilanı taze makarna yapım kursudur.',
              ar: 'الإعلان E لتعليم طهي المعكرونة الإيطالية الطازجة.',
              es: 'El anuncio E enseña a elaborar pasta fresca.'
            }
          },
          {
            id: 'b1_l_q16',
            question: '16. Ali möchte beruflich englische Verhandlungen leiten und sucht ein anspruchsvolles Training.',
            options: ['Anzeige A', 'Anzeige B', 'Anzeige C', 'Anzeige D', 'Anzeige E', 'Anzeige F', 'Anzeige G'],
            correctAnswer: 'Anzeige B',
            explanation: {
              en: 'Anzeige B offers Business English for managers and negotiations.',
              fa: 'آگهی B انگلیسی تجاری برای مذاکره و سطوح عالی است.',
              prs: 'اعلان B انگلیسی تجارتی است.',
              tr: 'B ilanı iş İngilizcesi ve müzakereler içindir.',
              ar: 'الإعلان B يقدم الإنجليزية للأعمال والمفاوضات.',
              es: 'El anuncio B ofrece inglés de negocios para negociaciones.'
            }
          },
          {
            id: 'b1_l_q17',
            question: '17. Sophie sucht eine künstlerische Handarbeit, um eigene Tassen aus Ton herzustellen.',
            options: ['Anzeige A', 'Anzeige B', 'Anzeige C', 'Anzeige D', 'Anzeige E', 'Anzeige F', 'Anzeige G'],
            correctAnswer: 'Anzeige A',
            explanation: {
              en: 'Anzeige A is a pottery class creating cups on a potter\'s wheel.',
              fa: 'آگهی A کلاس سفالگری با چرخ و ساخت فنجان است.',
              prs: 'اعلان A سفالگری است.',
              tr: 'A ilanı çömlekçilik ve fincan yapımı kursudur.',
              ar: 'الإعلان A لتعليم الخزف وصناعة الأواني الفخارية.',
              es: 'El anuncio A es un curso de alfarería para hacer tazas.'
            }
          },
          {
            id: 'b1_l_q18',
            question: '18. David will programmieren lernen, um eine eigene Homepage zu bauen.',
            options: ['Anzeige A', 'Anzeige B', 'Anzeige C', 'Anzeige D', 'Anzeige E', 'Anzeige F', 'Anzeige G'],
            correctAnswer: 'Anzeige F',
            explanation: {
              en: 'Anzeige F teaches HTML, CSS, JavaScript web design.',
              fa: 'آگهی F آموزش طراحی وب با HTML و جاوا اسکریپت است.',
              prs: 'اعلان F ساخت وبسایت و برنامه‌نویسی است.',
              tr: 'F ilanı web tasarımı ve programlama kursudur.',
              ar: 'الإعلان F لتعليم تصميم المواقع والبرمجة للمبتدئين.',
              es: 'El anuncio F enseña diseño web y programación.'
            }
          },
          {
            id: 'b1_l_q19',
            question: '19. Hanna sucht sanfte Bewegung an der frischen Luft zur Entspannung.',
            options: ['Anzeige A', 'Anzeige B', 'Anzeige C', 'Anzeige D', 'Anzeige E', 'Anzeige F', 'Anzeige G'],
            correctAnswer: 'Anzeige G',
            explanation: {
              en: 'Anzeige G provides yoga outdoors in the park.',
              fa: 'آگهی G یوگا در پارک برای آرامش و کشش بدنی در هوای آزاد است.',
              prs: 'اعلان G ورزش یوگا در پارک است.',
              tr: 'G ilanı parkta açık havada yoga dersidir.',
              ar: 'الإعلان G لتمارين اليوغا والاسترخاء في الحديقة العامة.',
              es: 'El anuncio G ofrece yoga al aire libre en el parque.'
            }
          }
        ]
      },
      {
        title: 'Teil 4: Meinungen zu einem kontroversen Thema: "Sollte das Smartphone an Schulen komplett verboten werden?" (Aufgaben 20 bis 26)',
        sourceType: 'Leserbriefe / Forumsdiskussion',
        body: 'Person 1 (Lehrer Markus, 45): "Smartphones lenken im Unterricht massiv ab. Schüler chatten heimlich oder filmen einander. Ein generelles Handyverbot auf dem Schulgelände ist dringend nötig."\nPerson 2 (Schülerin Lena, 16): "Ein Verbot ist völlig weltfremd. Wir nutzen Handys für digitale Recherche, Hausaufgaben-Apps und den Stundenplan. Man sollte uns den verantwortungsvollen Umgang beibringen, statt alles zu verbieten."\nPerson 3 (Mutter Susanne, 42): "In den Pausen starren die Kinder nur noch stumm auf Bildschirme, statt miteinander Fußball zu spielen. Ich befürworte ein Verbot während der gesamten Schulzeit ausdrücklich."\nPerson 4 (Schulleiter Dr. Weber, 58): "Ein starres Verbot lässt sich technisch kaum kontrollieren. Viel sinnvoller sind Handy-Parkplätze im Klassenzimmer: Während der Stunde bleiben die Geräte im Schrank, in den Pausen dürfen Schüler sie nutzen."\nPerson 5 (Informatiklehrer Jens, 38): "Wir leben im digitalen Zeitalter. Schulen müssen Medienkompetenz vermitteln. Das Smartphone ist ein mächtiges Lernwerkzeug, kein Feind."\nPerson 6 (Vater Thomas, 49): "Wegen ständiger Cybermobbing-Vorfälle auf Schulhöfen halte ich ein striktes Smartphone-Verbot für absolut unverzichtbar."\nPerson 7 (Psychologin Dr. Bauer, 52): "Die ständige Reizüberflutung hemmt die Konzentrationsfähigkeit junger Gehirne enorm. Schulen sollten handyfreie Schutzzonen sein."',
        questions: [
          {
            id: 'b1_l_q20',
            question: '20. Ist Markus (Person 1) für ein Smartphone-Verbot an Schulen?',
            options: ['Ja', 'Nein'],
            correctAnswer: 'Ja',
            explanation: {
              en: 'Markus says: "... Ein generelles Handyverbot auf dem Schulgelände ist dringend nötig."',
              fa: 'مارکوس به صراحت ممنوعیت سراسری تلفن همراه در مدارس را ضروری می‌داند.',
              prs: 'مارکوس خواهان ممنوعیت موبایل در مکاتب است.',
              tr: 'Markus okulda genel telefon yasağını gerekli görmektedir.',
              ar: 'يؤيد ماركوس حظر الهواتف في المدارس بقوة.',
              es: 'Markus apoya la prohibición total en el recinto escolar.'
            }
          },
          {
            id: 'b1_l_q21',
            question: '21. Ist Lena (Person 2) für ein Smartphone-Verbot an Schulen?',
            options: ['Ja', 'Nein'],
            correctAnswer: 'Nein',
            explanation: {
              en: 'Lena opposes bans: "Ein Verbot ist völlig weltfremd... Man sollte uns den Umgang beibringen".',
              fa: 'لنا مخالف ممنوعیت است و معتقد است باید شیوه استفاده مسئولانه آموزش داده شود.',
              prs: 'لینا مخالف ممنوعیت است.',
              tr: 'Lena yasağa karşıdır ve sorumlu kullanımın öğretilmesini savunur.',
              ar: 'لينا تعارض الحظر وتطالب بتعليم الاستخدام المسؤول.',
              es: 'Lena se opone a la prohibición y pide enseñar su uso responsable.'
            }
          },
          {
            id: 'b1_l_q22',
            question: '22. Ist Susanne (Person 3) für ein Smartphone-Verbot an Schulen?',
            options: ['Ja', 'Nein'],
            correctAnswer: 'Ja',
            explanation: {
              en: 'Susanne explicitly supports: "Ich befürworte ein Verbot während der gesamten Schulzeit ausdrücklich."',
              fa: 'سوزانه صریحاً از ممنوعیت تلفن همراه در تمام ساعات مدرسه حمایت می‌کند.',
              prs: 'سوزانه موافق ممنوعیت موبایل در مکتب است.',
              tr: 'Susanne okul süresince yasağı açıkça desteklemektedir.',
              ar: 'تؤيد سوزانه الحظر التام طيلة الدوام المدرسي.',
              es: 'Susanne respalda explícitamente la prohibición durante toda la jornada.'
            }
          },
          {
            id: 'b1_l_q23',
            question: '23. Ist Dr. Weber (Person 4) für ein striktes Gesamtverbot an Schulen?',
            options: ['Ja', 'Nein'],
            correctAnswer: 'Nein',
            explanation: {
              en: 'Dr. Weber considers total bans impractical and proposes storage lockers during lessons instead.',
              fa: 'دکتر وبر با ممنوعیت خشک و کامل مخالف است و صندوق‌های نگهداری در کلاس را پیشنهاد می‌دهد.',
              prs: 'داکتر وبر با ممنوعیت کلی مخالف است.',
              tr: 'Dr. Weber katı bir yasağa karşıdır, sınıf dolaplarını önermektedir.',
              ar: 'يعارض الحظر الصارم ويفضل وضعها في خزائن أثناء الحصص.',
              es: 'Se opone a la prohibición rígida y propone dejarlos en taquillas en clase.'
            }
          },
          {
            id: 'b1_l_q24',
            question: '24. Ist Jens (Person 5) für ein Smartphone-Verbot an Schulen?',
            options: ['Ja', 'Nein'],
            correctAnswer: 'Nein',
            explanation: {
              en: 'Jens considers smartphones a learning tool: "... mächtiges Lernwerkzeug, kein Feind."',
              fa: 'ینس تلفن همراه را ابزار یادگیری می‌داند و با ممنوعیت مخالف است.',
              prs: 'ینس موبایل را وسیله آموزش می‌داند.',
              tr: 'Jens akıllı telefonu bir öğrenme aracı olarak gördüğü için yasağa karşıdır.',
              ar: 'يعارض ينس الحظر لأن الهاتف أداة تعليمية مهمة.',
              es: 'Jens considera el móvil una herramienta de aprendizaje y se opone al veto.'
            }
          },
          {
            id: 'b1_l_q25',
            question: '25. Ist Thomas (Person 6) für ein Smartphone-Verbot an Schulen?',
            options: ['Ja', 'Nein'],
            correctAnswer: 'Ja',
            explanation: {
              en: 'Thomas demands bans due to cyberbullying: "... striktes Smartphone-Verbot für absolut unverzichtbar."',
              fa: 'توماس به خاطر رفتارهای آزار سایبری ممنوعیت سرسختانه را الزامی می‌داند.',
              prs: 'توماس به خاطر مزاحمت‌های انترنتی خواهان ممنوعیت قطعی است.',
              tr: 'Thomas siber zorbalık nedeniyle katı yasağı vazgeçilmez bulmaktadır.',
              ar: 'يطالب توماس بحظر صارم بسبب التنمر الإلكتروني.',
              es: 'Thomas considera imprescindible el veto por el ciberacoso.'
            }
          },
          {
            id: 'b1_l_q26',
            question: '26. Ist Dr. Bauer (Person 7) für handyfreie Zonen an Schulen?',
            options: ['Ja', 'Nein'],
            correctAnswer: 'Ja',
            explanation: {
              en: 'Dr. Bauer argues: "Schulen sollten handyfreie Schutzzonen sein."',
              fa: 'دکتر باوئر تأکید می‌کند که مدارس باید مناطق محافظت‌شده بدون موبایل باشند.',
              prs: 'داکتر باوئر مکتب را باید جای بدون مبایل می‌داند.',
              tr: 'Dr. Bauer okulların telefonsuz koruma alanı olması gerektiğini savunur.',
              ar: 'تؤكد الدكتورة باور على ضرورة أن تكون المدارس خالية من الهواتف.',
              es: 'La psicóloga defiende que las escuelas deben ser zonas libres de móviles.'
            }
          }
        ]
      },
      {
        title: 'Teil 5: Hausordnung & Bibliotheksvorschriften (Aufgaben 27 bis 30)',
        sourceType: 'Offizielle Hausordnung der Universitätsbibliothek',
        body: '1. Zutritt und Bibliotheksausweis: Der Zutritt zu den Lesesälen ist nur mit einem gültigen Bibliotheksausweis gestattet. Ausweise sind personengebunden und dürfen nicht an Dritte übertragen werden.\n2. Garderobe und Taschen: Jacken, Mäntel sowie Rucksäcke und Taschen müssen in den Schließfächern im Foyer eingeschlossen werden. Die Mitnahme von transparenten Tragetaschen ist gestattet.\n3. Speisen und Getränke: Der Verzehr von Lebensmitteln ist in allen Lesesälen untersagt. Erlaubt ist ausschließlich das Mitführen von Wasser in verschließbaren, durchsichtigen Flaschen.\n4. Ruhe und Mobiltelefone: In allen Arbeitsbereichen gilt absolute Ruhe. Mobiltelefone sind vor dem Betreten stummzuschalten; Telefonieren ist nur in den Telefonkabinen im Treppenhaus gestattet.',
        questions: [
          {
            id: 'b1_l_q27',
            question: '27. Man darf seinen Bibliotheksausweis an Studienfreunde verleihen.',
            options: ['Richtig', 'Falsch'],
            correctAnswer: 'Falsch',
            explanation: {
              en: 'Rule 1: "... dürfen nicht an Dritte übertragen werden."',
              fa: 'کارت کتابخانه شخصی است و واگذاری آن به دیگران ممنوع است.',
              prs: 'کارت کتابخانه شخصی است و انتقال آن منع است.',
              tr: 'Kart kişiye özeldir ve başkasına devredilemez.',
              ar: 'بطاقة المكتبة شخصية ولا يجوز إعارتها لأشخاص آخرين.',
              es: 'El carné es personal e intransferible a terceros.'
            }
          },
          {
            id: 'b1_l_q28',
            question: '28. Welche Taschen darf man in den Lesesaal mitnehmen?',
            options: ['a) Alle Rucksäcke', 'b) Nur transparente Tragetaschen', 'c) Gar keine Taschen'],
            correctAnswer: 'b) Nur transparente Tragetaschen',
            explanation: {
              en: 'Rule 2: "Die Mitnahme von transparenten Tragetaschen ist gestattet."',
              fa: 'فقط همراه داشتن کیسه‌ها یا کیف‌های شفاف مجاز است.',
              prs: 'صرف بکس‌های شفاف مجاز است.',
              tr: 'Yalnızca şeffaf taşıma çantalarının getirilmesine izin verilmektedir.',
              ar: 'يُسمح فقط بحمل الحقائب الشفافة.',
              es: 'Solo se permite el acceso con bolsas transparentes.'
            }
          },
          {
            id: 'b1_l_q29',
            question: '29. Welche Getränke dürfen im Lesesaal getrunken werden?',
            options: ['a) Kaffee und Tee in Thermobechern', 'b) Wasser in verschließbaren Flaschen', 'c) Cola und Säfte'],
            correctAnswer: 'b) Wasser in verschließbaren Flaschen',
            explanation: {
              en: 'Rule 3: "... ausschließlich das Mitführen von Wasser in verschließbaren (...) Flaschen."',
              fa: 'فقط آب در بطری‌های شفاف دربسته مجاز است.',
              prs: 'صرف آب در بوتل‌های سرپوش‌دار مجاز است.',
              tr: 'Yalnızca kapaklı şişede su getirilmesine izin vardır.',
              ar: 'الماء فقط في زجاجات محكمة الإغلاق.',
              es: 'Exclusivamente agua en botellas transparentes con cierre.'
            }
          },
          {
            id: 'b1_l_q30',
            question: '30. Wo darf man in der Bibliothek mit dem Handy telefonieren?',
            options: ['a) An den Arbeitsplätzen, wenn man leise spricht', 'b) In den Telefonkabinen im Treppenhaus', 'c) Überhaupt nicht im ganzen Gebäude'],
            correctAnswer: 'b) In den Telefonkabinen im Treppenhaus',
            explanation: {
              en: 'Rule 4: "... Telefonieren ist nur in den Telefonkabinen im Treppenhaus gestattet."',
              fa: 'تماس تلفنی فقط در باجه‌های تلفن واقع در راه‌پله مجاز است.',
              prs: 'تماس تلفنی فقط در غرفه‌های راه‌پله مجاز است.',
              tr: 'Telefon görüşmesi yalnızca merdiven boşluğundaki kabinlerde serbesttir.',
              ar: 'المكالمات الهاتفية مسموحة فقط في كبائن الهاتف عند الدرج.',
              es: 'Solo se permite hablar por teléfono en las cabinas de la escalera.'
            }
          }
        ]
      }
    ]
  },
  hoeren: {
    title: 'Modul Hören (40 Minuten • 30 Aufgaben)',
    durationMinutes: 40,
    audioItems: [
      {
        id: 'b1_h_item1',
        title: 'Teil 1: Fünf kurze Alltagsansagen (Fragen 1 bis 10 • Zweimal hören)',
        situation: 'Durchsagen an Bahnhöfen, Wetterberichte und Verkehrsmeldungen',
        transcript: 'Text 1 (Hauptbahnhof Hannover):\n"Achtung an Gleis 8: ICE 782 nach Hamburg Altona, planmäßige Abfahrt um 10:14 Uhr, fährt heute mit umgekehrter Wagenreihung ein. Die Wagen der ersten Klasse befinden sich im vorderen Zugabschnitt A und B, das Bordbistro in Abschnitt C und die zweite Klasse in den Abschnitten D bis G."\n\nText 2 (Verkehrsredaktion Radio):\n"Achtung Autofahrer auf der A3 Frankfurt Richtung Würzburg: Wegen eines Lkw-Unfalls zwischen Aschaffenburg und Weibersbrunn ist die Autobahn voll gesperrt. Es hat sich bereits ein Stau von 8 Kilometern gebildet. Wir empfehlen eine weiträumige Umfahrung über die Bundesstraße B26."\n\nText 3 (Wetterbericht für Süddeutschland):\n"Das Wetter am morgigen Donnerstag: Vormittags sonnig und warm bei bis zu 26 Grad. Am Nachmittag bilden sich im Alpenvorland schwere Gewitter mit Starkregen und Hagel. Örtlich besteht Unwettergefahr. Autofahrern wird geraten, Fahrzeuge vor Unwetter geschützt abzustellen."\n\nText 4 (Kaufhausdurchsage):\n"Liebe Kundinnen und Kunden, besuchen Sie heute unsere Gourmetabteilung im Untergeschoss. Zur Feier unseres 50-jährigen Jubiläums bieten wir Ihnen kostenlose Weinverkostungen und 20 Prozent Rabatt auf alle Bio-Käsesorten aus der Schweiz."\n\nText 5 (Museumsführung Info):\n"Sehr geehrte Besucher, die Sonderausstellung zu Caspar David Friedrich endet an diesem Sonntag. Wegen des großen Andrangs öffnen wir am Samstag und Sonntag bereits ab 08:30 Uhr morgens. Tickets sind ausschließlich online erhältlich."',
        questions: [
          {
            id: 'b1_h_q1',
            question: '1. Der ICE nach Hamburg fährt heute in der normalen Reihenfolge der Wagen ein.',
            options: ['Richtig', 'Falsch'],
            correctAnswer: 'Falsch',
            explanation: {
              en: 'Announcement states reversed order: "fährt heute mit umgekehrter Wagenreihung ein".',
              fa: 'قطار امروز با ترتیب واگن‌های معکوس وارد سکو می‌شود.',
              prs: 'ترتیب واگن‌های قطار امروز برعکس است.',
              tr: 'Tren bugün ters vagon sıralamasıyla yanaşmaktadır.',
              ar: 'القطار يدخل اليوم بترتيب عربات معكوس.',
              es: 'El tren llega hoy con el orden de vagones invertido.'
            }
          },
          {
            id: 'b1_h_q2',
            question: '2. Wo befindet sich die 1. Klasse des ICEs?',
            options: ['In den Abschnitten D bis G', 'Im Abschnitt C beim Bistro', 'In den Abschnitten A und B'],
            correctAnswer: 'In den Abschnitten A und B',
            explanation: {
              en: 'First class carriages are in sections A and B ("befinden sich im vorderen Zugabschnitt A und B").',
              fa: 'واگن‌های درجه یک در بخش‌های جلو A و B قرار دارند.',
              prs: 'واگن‌های درجه یک در بخش A و B هستند.',
              tr: '1. sınıf vagonlar A ve B bölümlerindedir.',
              ar: 'عربات الدرجة الأولى تقع في القسمين A و B.',
              es: 'Los vagones de primera clase están en las secciones A y B.'
            }
          },
          {
            id: 'b1_h_q3',
            question: '3. Die Autobahn A3 ist wegen Bauarbeiten für zwei Stunden gesperrt.',
            options: ['Richtig', 'Falsch'],
            correctAnswer: 'Falsch',
            explanation: {
              en: 'Closed due to a truck accident ("Wegen eines Lkw-Unfalls"), not construction.',
              fa: 'بزرگراه به خاطر تصادف کامیون مسدود است، نه به خاطر عملیات ساختمانی.',
              prs: 'راه به دلیل تصادف موتر باربری مسدود است.',
              tr: 'Otoyol yol çalışması değil, kamyon kazası nedeniyle kapalıdır.',
              ar: 'الطريق مغلق بسبب حادث شاحنة وليس بسبب أعمال صيانة.',
              es: 'La autopista está cortada por un accidente de camión.'
            }
          },
          {
            id: 'b1_h_q4',
            question: '4. Welche Umleitung wird den Autofahrern empfohlen?',
            options: ['Über die Autobahn A5', 'Über die Bundesstraße B26', 'Durch die Stadt Würzburg'],
            correctAnswer: 'Über die Bundesstraße B26',
            explanation: {
              en: 'Radio recommends detour via B26: "... weiträumige Umfahrung über die Bundesstraße B26."',
              fa: 'تغییر مسیر از طریق جاده B26 به رانندگان پیشنهاد می‌شود.',
              prs: 'تغییر مسیر از جاده B26 پیشنهاد شد.',
              tr: 'Sürücülere B26 karayolundan gitmeleri önerilmektedir.',
              ar: 'يوصى بتجاوز الازدحام عبر الطريق الاتحادي B26.',
              es: 'Se recomienda el desvío por la carretera federal B26.'
            }
          },
          {
            id: 'b1_h_q5',
            question: '5. Am Donnerstagnachmittag besteht im Alpenvorland Gefahr von Unwettern.',
            options: ['Richtig', 'Falsch'],
            correctAnswer: 'Richtig',
            explanation: {
              en: 'Severe thunderstorms forecasted: "Am Nachmittag bilden sich (...) schwere Gewitter (...) Örtlich besteht Unwettergefahr."',
              fa: 'بعدازظهر پنجشنبه در دامنه‌های آلپ خطر رعد و برق شدید و طوفان وجود دارد.',
              prs: 'بعد از ظهر پنجشنبه خطر طوفان شدید پیش‌بینی شده است.',
              tr: 'Perşembe öğleden sonra Alpler civarında fırtına tehlikesi bulunmaktadır.',
              ar: 'توجد تحذيرات من عواصف شديدة في سفوح الألب بعد الظهر.',
              es: 'Existe riesgo de fuertes tormentas y granizo por la tarde.'
            }
          },
          {
            id: 'b1_h_q6',
            question: '6. Welcher Tipp wird Autofahrern gegeben?',
            options: ['Das Auto nicht schneller als 50 km/h zu fahren', 'Fahrzeuge vor dem Unwetter geschützt unterzustellen', 'Nur nachts zu fahren'],
            correctAnswer: 'Fahrzeuge vor dem Unwetter geschützt unterzustellen',
            explanation: {
              en: 'Advised: "... Fahrzeuge vor Unwetter geschützt abzustellen."',
              fa: 'توصیه شده خودروها در مکانی امن و سرپوشیده پارک شوند.',
              prs: 'موترها را در جای سرپوشیده پارک نمایید.',
              tr: 'Araçların fırtınaya karşı korunaklı yerlere park edilmesi istenmiştir.',
              ar: 'ركن السيارات في أماكن محمية من العواصف.',
              es: 'Aparcar los vehículos en lugares protegidos.'
            }
          },
          {
            id: 'b1_h_q7',
            question: '7. Im Kaufhaus gibt es heute 20 Prozent Rabatt auf alle Käsesorten aus Frankreich.',
            options: ['Richtig', 'Falsch'],
            correctAnswer: 'Falsch',
            explanation: {
              en: 'The discount is for organic cheese from Switzerland ("Bio-Käsesorten aus der Schweiz"), not France.',
              fa: 'تخفیف ۲۰ درصدی برای پنیرهای سوئیس است، نه فرانسه.',
              prs: 'تخفیف ۲۰ درصدی برای پنیرهای سویس است.',
              tr: 'İndirim Fransa peynirlerine değil, İsviçre organik peynirlerinedir.',
              ar: 'الخصم على الأجبان العضوية السويسرية وليس الفرنسية.',
              es: 'El descuento es para quesos de Suiza, no de Francia.'
            }
          },
          {
            id: 'b1_h_q8',
            question: '8. Welcher Anlass wird im Kaufhaus gefeiert?',
            options: ['Die Eröffnung einer neuen Filiale', 'Das 50-jährige Firmenjubiläum', 'Der Frühlingsanfang'],
            correctAnswer: 'Das 50-jährige Firmenjubiläum',
            explanation: {
              en: 'Announcement states: "Zur Feier unseres 50-jährigen Jubiläums...".',
              fa: 'جشن ۵۰ سالگی تاسیس فروشگاه برگزار می‌شود.',
              prs: 'جشن ۵۰ سالگی فروشگاه تجلیل می‌شود.',
              tr: 'Mağazanın 50. kuruluş yıl dönümü kutlanmaktadır.',
              ar: 'الاحتفال بمرور 50 عاماً على تأسيس المتجر.',
              es: 'Se celebra el 50 aniversario de la empresa.'
            }
          },
          {
            id: 'b1_h_q9',
            question: '9. Die Ausstellung endet an diesem Sonntag.',
            options: ['Richtig', 'Falsch'],
            correctAnswer: 'Richtig',
            explanation: {
              en: 'Transcript clarifies: "... endet an diesem Sonntag."',
              fa: 'نمایشگاه ویژه روز یکشنبه به پایان می‌رسد.',
              prs: 'نمایشگاه روز یکشنبه ختم می‌شود.',
              tr: 'Özel sergi bu pazar günü sona ermektedir.',
              ar: 'المعرض الخاص ينتهي يوم الأحد القادم.',
              es: 'La exposición finaliza este domingo.'
            }
          },
          {
            id: 'b1_h_q10',
            question: '10. Wie können Besucher an Tickets für das Ausstellungswochenende gelangen?',
            options: ['Ausschließlich im Online-Vorverkauf', 'An der Museumskasse vor Ort', 'Telefonisch bei der Stadtverwaltung'],
            correctAnswer: 'Ausschließlich im Online-Vorverkauf',
            explanation: {
              en: 'Announcement notes: "Tickets sind ausschließlich online erhältlich."',
              fa: 'بلیط‌ها صرفاً و فقط به صورت آنلاین قابل تهیه هستند.',
              prs: 'تکت‌ها فقط به شکل آنلاین فروخته می‌شوند.',
              tr: 'Biletler yalnızca internet üzerinden temin edilebilir.',
              ar: 'التذاكر متاحة حصرياً عبر الإنترنت.',
              es: 'Las entradas se adquieren exclusivamente por internet.'
            }
          }
        ]
      },
      {
        id: 'b1_h_item2',
        title: 'Teil 2: Führung in einem modernen Bio-Betrieb (Fragen 11 bis 15 • Einmal hören!)',
        situation: 'Ein Betriebsleiter führt eine Besuchergruppe über einen ökologischen Bauernhof',
        transcript: 'Betriebsleiter Herr Huber: "Guten Tag und herzlich willkommen auf dem Bio-Gut Sonnenhof! Mein Name ist Thomas Huber. Unser Hof wirtschaftet seit 1995 nach den strengen Richtlinien des Bioland-Verbandes. Wir halten 120 Milchkühe, die von März bis November täglich auf den saftigen Bergweiden grasen. Das Futter für den Winter erzeugen wir zu 100 Prozent selbst auf unseren eigenen Feldern ohne Kunstdünger oder chemische Pflanzenschutzmittel.\nIn unserer Hofkäserei verarbeiten wir täglich rund 2.500 Liter frische Bio-Milch zu traditionellen Bergkäsesorten und Joghurt. Sie dürfen gleich bei der Reifekammer einen Blick durch die Glasscheibe werfen.\nIm Anschluss besuchen wir unseren Hofladen, wo Sie unsere Käseprodukte und frisches Holzofenbrot probieren können. Für unsere kleinen Besucher haben wir hinter dem Stall einen Streichelzoo mit Ziegen und Ponys eingerichtet."',
        questions: [
          {
            id: 'b1_h_q11',
            question: '11. Seit welchem Jahr wirtschaftet der Sonnenhof nach ökologischen Richtlinien?',
            options: ['Seit 1985', 'Seit 1995', 'Seit 2010'],
            correctAnswer: 'Seit 1995',
            explanation: {
              en: 'Huber confirms: "Unser Hof wirtschaftet seit 1995...".',
              fa: 'مزرعه از سال ۱۹۹۵ به صورت بیولوژیک و ارگانیک فعالیت می‌کند.',
              prs: 'مزرعه از سال ۱۹۹۵ فعالیت ارگانیک دارد.',
              tr: 'Çiftlik 1995 yılından beri organik tarım yapmaktadır.',
              ar: 'المزرعة تعمل وفق المعايير العضوية منذ عام 1995.',
              es: 'La granja opera según normas ecológicas desde 1995.'
            }
          },
          {
            id: 'b1_h_q12',
            question: '12. Wie viele Milchkühe werden auf dem Hof gehalten?',
            options: ['60 Kühe', '120 Kühe', '250 Kühe'],
            correctAnswer: '120 Kühe',
            explanation: {
              en: 'Huber states: "Wir halten 120 Milchkühe...".',
              fa: 'در این مزرعه ۱۲۰ رأس گاو شیری نگهداری می‌شود.',
              prs: 'در مزرعه ۱۲۰ گاو شیری نگهداری می‌شود.',
              tr: 'Çiftlikte 120 adet süt ineği bulunmaktadır.',
              ar: 'تحتوي المزرعة على 120 بقرة حلوب.',
              es: 'La granja tiene 120 vacas lecheras.'
            }
          },
          {
            id: 'b1_h_q13',
            question: '13. Woher stammt das Winterfutter für die Kühe?',
            options: ['Es wird aus Südamerika importiert', 'Es wird zu 100% auf den eigenen Feldern erzeugt', 'Es wird vom Supermarkt geliefert'],
            correctAnswer: 'Es wird zu 100% auf den eigenen Feldern erzeugt',
            explanation: {
              en: 'Self-produced feed: "... zu 100 Prozent selbst auf unseren eigenen Feldern".',
              fa: 'خوراک زمستانی ۱۰۰٪ در مزارع اختصاصی خودشان بدون کود شیمیایی کشت می‌شود.',
              prs: 'علوفه زمستانی کاملاً در مزارع خودشان تولید می‌شود.',
              tr: 'Yemlerin %100\'ü kendi tarlalarında üretilmektedir.',
              ar: 'يتم إنتاج الأعلاف بنسبة 100% في حقول المزرعة الخاصة.',
              es: 'Se produce al 100% en sus propios campos.'
            }
          },
          {
            id: 'b1_h_q14',
            question: '14. Wie viel Milch wird täglich in der Hofkäserei verarbeitet?',
            options: ['Rund 500 Liter', 'Rund 2.500 Liter', 'Über 10.000 Liter'],
            correctAnswer: 'Rund 2.500 Liter',
            explanation: {
              en: 'Daily production: "rund 2.500 Liter frische Bio-Milch".',
              fa: 'روزانه حدود ۲۵۰۰ لیتر شیر ارگانیک به پنیر و ماست تبدیل می‌شود.',
              prs: 'روزانه حدود ۲۵۰۰ لیتر شیر پروسس می‌شود.',
              tr: 'Günde yaklaşık 2.500 litre süt işlenmektedir.',
              ar: 'تتم معالجة نحو 2500 لتر من الحليب الطازج يومياً.',
              es: 'Se procesan unos 2.500 litros de leche al día.'
            }
          },
          {
            id: 'b1_h_q15',
            question: '15. Was gibt es hinter dem Stall speziell für Kinder?',
            options: ['Einen modernen Spielplatz mit Karussell', 'Einen Streichelzoo mit Ziegen und Ponys', 'Einen Kinosaal'],
            correctAnswer: 'Einen Streichelzoo mit Ziegen und Ponys',
            explanation: {
              en: 'Attraction for kids: "... einen Streichelzoo mit Ziegen und Ponys eingerichtet."',
              fa: 'یک باغ وحش نوازش با بزها و اسب‌های پونی برای کودکان تدارک دیده شده است.',
              prs: 'یک محوطه حیوانات اهلی مانند بز و اسپ برای اطفال است.',
              tr: 'Çocuklar için keçilerin ve Midillilerin olduğu bir sevgi çiftliği kurulmuştur.',
              ar: 'حديقة حيوانات أليفة للأطفال تضم ماعزاً وخيول بوني.',
              es: 'Un minizoo para acariciar cabras y ponis.'
            }
          }
        ]
      },
      {
        id: 'b1_h_item3',
        title: 'Teil 3: Informelles Alltagsgespräch über Beruf und Weiterbildung (Fragen 16 bis 22 • Zweimal hören)',
        situation: 'Zwei ehemalige Studienfreunde, Florian und Katrin, treffen sich im Café',
        transcript: 'Florian: "Hallo Katrin! Mensch, wir haben uns ja seit zwei Jahren nicht mehr gesehen! Wie geht es dir denn?"\nKatrin: "Hallo Florian! Mir geht es super. Ich habe vor sechs Monaten den Job gewechselt. Ich arbeite jetzt als Projektmanagerin bei einer Agentur für erneuerbare Energien."\nFlorian: "Glückwunsch! War das nicht ein großer Schritt aus dem öffentlichen Dienst in die freie Wirtschaft?"\nKatrin: "Schon, aber ich brauchte dringend eine neue Herausforderung. Das Tolle ist: Wir haben eine Vier-Tage-Woche bei vollem Gehaltsausgleich. Ich arbeite von Montag bis Donnerstag jeweils achteinhalb Stunden, und der Freitag ist komplett frei!"\nFlorian: "Eine Vier-Tage-Woche? Das klingt ja wie ein Traum! Was machst du denn mit dem freien Freitag?"\nKatrin: "Ich mache eine Weiterbildung im Bereich Datenanalyse an der Fachhochschule. Das bezahlt sogar mein Arbeitgeber zur Hälfte. Und wie läuft es bei dir als Lehrer?"\nFlorian: "Die Schule macht Spaß, aber die Korrekturen am Wochenende sind oft anstrengend. Deshalb mache ich im Sommer eine dreimonatige Auszeit für eine Radreise durch Skandinavien."\nKatrin: "Klasse! Lass uns vor deiner Abreise unbedingt noch einmal zusammen wandern gehen."',
        questions: [
          {
            id: 'b1_h_q16',
            question: '16. Florian und Katrin haben sich seit zwei Jahren nicht mehr gesehen.',
            options: ['Richtig', 'Falsch'],
            correctAnswer: 'Richtig',
            explanation: {
              en: 'Florian confirms: "... seit zwei Jahren nicht mehr gesehen!"',
              fa: 'فلوریان تایید می‌کند که ۲ سال است یکدیگر را ندیده‌اند.',
              prs: '۲ سال است همدیگر را ندیده‌اند.',
              tr: 'Florian 2 yıldır görüşmediklerini belirtmektedir.',
              ar: 'لم يلتقيا منذ سنتين كاملتين.',
              es: 'Hacía dos años que no se veían.'
            }
          },
          {
            id: 'b1_h_q17',
            question: '17. Katrin arbeitet seit sechs Monaten bei einer Agentur für erneuerbare Energien.',
            options: ['Richtig', 'Falsch'],
            correctAnswer: 'Richtig',
            explanation: {
              en: 'Katrin states: "... vor sechs Monaten den Job gewechselt (...) bei einer Agentur für erneuerbare Energien."',
              fa: 'کاترین ۶ ماه است در شرکتی در حوزه انرژی‌های تجدیدپذیر کار می‌کند.',
              prs: 'کاترین ۶ ماه است در اداره انرژی‌های قابل تجدید کار می‌کند.',
              tr: 'Katrin 6 aydır yenilenebilir enerji ajansında çalışmaktadır.',
              ar: 'تعمل كاترين منذ 6 أشهر في وكالة للطاقة المتجددة.',
              es: 'Katrin trabaja desde hace 6 meses en energías renovables.'
            }
          },
          {
            id: 'b1_h_q18',
            question: '18. Wie viele Tage arbeitet Katrin pro Woche in ihrem neuen Job?',
            options: ['Drei Tage', 'Vier Tage', 'Fünf Tage'],
            correctAnswer: 'Vier Tage',
            explanation: {
              en: 'She enjoys a 4-day week: "Wir haben eine Vier-Tage-Woche bei vollem Gehaltsausgleich."',
              fa: 'او در طرح هفته کاری ۴ روزه با حقوق کامل کار می‌کند.',
              prs: 'او هفته ۴ روز کار می‌کند.',
              tr: 'Katrin haftada 4 gün çalışmaktadır.',
              ar: 'تعمل كاترين 4 أيام في الأسبوع مع راتب كامل.',
              es: 'Trabaja 4 días a la semana con sueldo completo.'
            }
          },
          {
            id: 'b1_h_q19',
            question: '19. An welchem Tag hat Katrin jede Woche frei?',
            options: ['Am Montag', 'Am Mittwoch', 'Am Freitag'],
            correctAnswer: 'Am Freitag',
            explanation: {
              en: 'She clarifies: "... und der Freitag ist komplett frei!"',
              fa: 'روزهای جمعه او کاملاً تعطیل است.',
              prs: 'روزهای جمعه کاملاً رخصت است.',
              tr: 'Katrin\'in cuma günleri tamamen boştur.',
              ar: 'يوم الجمعة عطلة تامة بالنسبة لها.',
              es: 'Los viernes los tiene completamente libres.'
            }
          },
          {
            id: 'b1_h_q20',
            question: '20. Was macht Katrin an ihrem freien Wochentag?',
            options: ['Sie arbeitet in einem Restaurant', 'Sie macht eine bezuschusste Weiterbildung in Datenanalyse', 'Sie schläft nur aus'],
            correctAnswer: 'Sie macht eine bezuschusste Weiterbildung in Datenanalyse',
            explanation: {
              en: 'Further training: "... Weiterbildung im Bereich Datenanalyse (...) bezahlt mein Arbeitgeber zur Hälfte."',
              fa: 'دوره تکمیلی تحلیل داده را می‌گذراند که نیمی از هزینه را کارفرما می‌پردازد.',
              prs: 'کورس آموزشی تحلیل دیتا را تعقیب می‌کند.',
              tr: 'İşvereninin yarı masrafını karşıladığı veri analizi eğitimine katılmaktadır.',
              ar: 'تتابع دورة تدريبية في تحليل البيانات يمول صاحب العمل نصفها.',
              es: 'Realiza un curso de análisis de datos cofinanciado por su empresa.'
            }
          },
          {
            id: 'b1_h_q21',
            question: '21. Welcher Beruf übt Florian aus?',
            options: ['Er ist Programmierer', 'Er ist Lehrer an einer Schule', 'Er ist Bankkaufmann'],
            correctAnswer: 'Er ist Lehrer an einer Schule',
            explanation: {
              en: 'Katrin asks: "Und wie läuft es bei dir als Lehrer?" - Florian answers about school.',
              fa: 'فلوریان معلم مدرسه است.',
              prs: 'فلوریان معلم مکتب است.',
              tr: 'Florian okulda öğretmendir.',
              ar: 'يعمل فلوريان معلماً في مدرسة.',
              es: 'Florian es profesor de escuela.'
            }
          },
          {
            id: 'b1_h_q22',
            question: '22. Was plant Florian für den kommenden Sommer?',
            options: ['Eine dreimonatige Radreise durch Skandinavien', 'Einen Umzug nach Spanien', 'Ein neues Studium'],
            correctAnswer: 'Eine dreimonatige Radreise durch Skandinavien',
            explanation: {
              en: 'Florian plans: "... dreimonatige Auszeit für eine Radreise durch Skandinavien."',
              fa: 'یک سفر سه ماهه با دوچرخه در سراسر اسکاندیناوی.',
              prs: 'سفر سه ماهه با بایسکل در کشورهای سکاندیناوی.',
              tr: 'İskandinavya\'da 3 aylık bir bisiklet turu planlamaktadır.',
              ar: 'إجازة لثلاثة أشهر للقيام برحلة بالدراجة عبر الدول الإسكندنافية.',
              es: 'Un viaje en bicicleta de 3 meses por Escandinavia.'
            }
          }
        ]
      },
      {
        id: 'b1_h_item4',
        title: 'Teil 4: Radiodiskussion "Brauchen wir noch gedruckte Bücher?" (Fragen 23 bis 30 • Zweimal hören)',
        situation: 'Kultursendung auf WDR 3 mit Moderatorin und zwei Gästen',
        transcript: 'Moderatorin Frau Lindner: "Guten Abend liebe Hörerinnen und Hörer. Heute diskutieren wir über die Zukunft des Lesens: Werden E-Reader und Audiobooks das klassische Buch bald verdrängen? Meine Gäste im Studio sind Verlegerin Karin Voss und IT-Journalist Sven Kramer.\nFrau Voss, der E-Book-Markt wächst, aber das gedruckte Buch bleibt stark. Woran liegt das?"\n\nFrau Voss: "Ein Buch ist ein sinnliches Gesamterlebnis. Der Duft des Papiers, das Geräusch beim Umblättern, die Gestaltung des Covers – das alles kann kein Bildschirm ersetzen. Vor allem bei Romanen und Kinderbüchern greifen Leser überwiegend zum physischen Exemplar. Ein Buch im Regal ist auch ein Teil unserer persönlichen Identität."\n\nHerr Kramer: "Das mag für Liebhaber zutreffen, Frau Voss. Aber rein praktisch betrachtet ist der E-Reader unschlagbar: Ich habe auf einem 200-Gramm-Gerät eine ganze Bibliothek von 3.000 Büchern dabei. Wenn ich im Urlaub im Flugzeug oder am Strand sitze, brauche ich keine schweren Koffer zu schleppen. Außerdem kann ich Schriftgrößen stufenlos anpassen, was besonders für ältere Menschen mit Sehschwäche ein riesiger Vorteil ist."\n\nFrau Voss: "Vergessen Sie aber nicht die Nachhaltigkeit, Herr Kramer. Für die Herstellung von E-Readern werden seltene Erden und viel Energie benötigt. Ein gedrucktes Buch aus Recyclingpapier hingegen hält Jahrzehnte und kann an Freunde weitergegeben werden."\n\nHerr Kramer: "Studien zeigen: Wer mehr als 10 bis 15 Bücher im Jahr digital liest, hat eine bessere Ökobilanz als mit gedruckten Büchern. Dennoch glaube ich nicht, dass das Papierbuch ganz ausstirbt. Beide Medien werden friedlich koexistieren."\n\nModeratorin: "Ein schönes Fazit: Nicht das Medium zählt, sondern die Freude am Lesen."',
        questions: [
          {
            id: 'b1_h_q23',
            question: '23. Welches Thema wird in der Radiosendung diskutiert?',
            options: ['Die Schließung von Stadtbibliotheken', 'Die Zukunft von gedruckten Büchern versus E-Books', 'Neue Rechtschreibregeln für Schulen'],
            correctAnswer: 'Die Zukunft von gedruckten Büchern versus E-Books',
            explanation: {
              en: 'Topic: "Werden E-Reader und Audiobooks das klassische Buch bald verdrängen?"',
              fa: 'آینده کتاب‌های چاپی در برابر کتابخوان‌های الکترونیکی و صوتی.',
              prs: 'آینده کتاب‌های چاپی در برابر کتاب‌های الکترونیکی.',
              tr: 'Basılı kitapların e-kitaplar karşısındaki geleceği tartışılmaktadır.',
              ar: 'مستقبل الكتب الورقية المطبوعة في مواجهة الكتب الإلكترونية.',
              es: 'El futuro de los libros impresos frente a los libros electrónicos.'
            }
          },
          {
            id: 'b1_h_q24',
            question: '24. Warum greifen Leser laut Frau Voss immer noch gerne zum Papierbuch?',
            options: ['Weil E-Books viel teurer als Papierbücher sind', 'Wegen des sinnlichen Erlebnisses wie Papierduft und Covergestaltung', 'Weil es keine E-Reader in Deutschland gibt'],
            correctAnswer: 'Wegen des sinnlichen Erlebnisses wie Papierduft und Covergestaltung',
            explanation: {
              en: 'Frau Voss mentions sensory experience: "Duft des Papiers, das Geräusch beim Umblättern, die Gestaltung...".',
              fa: 'به خاطر حس لمسی، بوی کاغذ، طراحی جلد و صدای ورق زدن صفحات.',
              prs: 'به خاطر بوی کاغذ، لمس و دیزاین جلد.',
              tr: 'Kağıt kokusu, sayfa çevirme sesi ve kapak tasarımı gibi duyusal deneyim için.',
              ar: 'بسبب التجربة الحسية كرائحة الورق وتصميم الغلاف.',
              es: 'Por la experiencia sensorial como el olor del papel y el diseño.'
            }
          },
          {
            id: 'b1_h_q25',
            question: '25. Welchen praktischen Vorteil hebt Herr Kramer beim E-Reader hervor?',
            options: ['Man kann damit im Internet telefonieren', 'Man kann tausende Bücher in einem leichten Gerät mit auf Reisen nehmen', 'Er funktioniert ganz ohne Strom'],
            correctAnswer: 'Man kann tausende Bücher in einem leichten Gerät mit auf Reisen nehmen',
            explanation: {
              en: 'Kramer emphasizes portability: "... auf einem 200-Gramm-Gerät eine ganze Bibliothek von 3.000 Büchern dabei."',
              fa: 'امکان همراه داشتن هزاران کتاب در دستگاهی ۲۰۰ گرمی در سفرها بدون حمل چمدان سنگین.',
              prs: 'بردن هزاران کتاب در یک وسیله سبک در سفر.',
              tr: 'Seyahatte 200 gramlık bir cihazda binlerce kitabı yanında taşıyabilme kolaylığı.',
              ar: 'حمل آلاف الكتب في جهاز وزنه 200 غرام فقط أثناء السفر.',
              es: 'Llevar miles de libros en un dispositivo de 200 gramos.'
            }
          },
          {
            id: 'b1_h_q26',
            question: '26. Für welche Zielgruppe ist die Schriftgrößenanpassung laut Kramer besonders hilfreich?',
            options: ['Für Kleinkinder im Kindergarten', 'Für ältere Menschen mit Sehschwäche', 'Nur für Studenten'],
            correctAnswer: 'Für ältere Menschen mit Sehschwäche',
            explanation: {
              en: 'Beneficial: "... besonders für ältere Menschen mit Sehschwäche ein riesiger Vorteil...".',
              fa: 'تنظیم اندازه فونت مخصوصاً برای افراد مسن با ضعف بینایی مزیت بزرگی است.',
              prs: 'برای موسفیدان با ضعف دید چشم فایده کلان دارد.',
              tr: 'Özellikle görme zorluğu çeken yaşlılar için büyük avantajdır.',
              ar: 'لكبار السن الذين يعانون من ضعف البصر.',
              es: 'Para personas mayores con problemas de visión.'
            }
          },
          {
            id: 'b1_h_q27',
            question: '27. Welches Umweltargument bringt Frau Voss gegen E-Reader ein?',
            options: ['E-Reader verbrauchen zu viel Plastik beim Verpacken', 'Für die Produktion werden seltene Erden und viel Energie benötigt', 'E-Books können Viren übertragen'],
            correctAnswer: 'Für die Produktion werden seltene Erden und viel Energie benötigt',
            explanation: {
              en: 'Raw materials: "... werden seltene Erden und viel Energie benötigt."',
              fa: 'استخراج عناصر خاکی کمیاب و مصرف بالای انرژی در ساخت دستگاه‌های دیجیتال.',
              prs: 'مصرف مواد معدنی کمیاب و انرژی زیاد در تولید.',
              tr: 'Üretiminde nadir elementlerin ve çok enerjinin kullanılması.',
              ar: 'الحاجة لمعادن نادرة وطاقة هائلة لإنتاج القارئات الإلكترونية.',
              es: 'Se requieren tierras raras y mucha energía para su fabricación.'
            }
          },
          {
            id: 'b1_h_q28',
            question: '28. Ab wann lohnt sich ein E-Reader laut Studien ökologisch gegenüber Papierbüchern?',
            options: ['Ab 1 Buch im Jahr', 'Ab mehr als 10 bis 15 Büchern im Jahr', 'Erst nach 20 Jahren Nutzung'],
            correctAnswer: 'Ab mehr als 10 bis 15 Büchern im Jahr',
            explanation: {
              en: 'Eco-balance threshold: "Wer mehr als 10 bis 15 Bücher im Jahr digital liest...".',
              fa: 'بر اساس پژوهش‌ها مطالعه بیش از ۱۰ تا ۱۵ کتاب در سال با کتابخوان تراز محیط زیستی بهتری دارد.',
              prs: 'با خواندن بیشتر از ۱۰ الی ۱۵ کتاب در سال.',
              tr: 'Yılda 10-15 kitaptan fazla okunduğunda çevre dengesi daha olumlu olmaktadır.',
              ar: 'عند قراءة أكثر من 10 إلى 15 كتاباً سنوياً بصيغة رقمية.',
              es: 'A partir de más de 10 a 15 libros leídos al año.'
            }
          },
          {
            id: 'b1_h_q29',
            question: '29. Herr Kramer glaubt, dass das Papierbuch in 5 Jahren komplett verschwunden sein wird.',
            options: ['Richtig', 'Falsch'],
            correctAnswer: 'Falsch',
            explanation: {
              en: 'Kramer expects coexistence: "Dennoch glaube ich nicht, dass das Papierbuch ganz ausstirbt. Beide Medien werden friedlich koexistieren."',
              fa: 'کرامر باور ندارد که کتاب کاغذی منقرض شود، بلکه هر دو در کنار هم همزیستی خواهند داشت.',
              prs: 'کرامر باور دارد هر دو نوع کتاب در کنار هم باقی می‌مانند.',
              tr: 'Kramer basılı kitapların yok olacağına inanmamaktadır, birlikte var olacaklarını düşünür.',
              ar: 'لا يعتقد كرامر باختفاء الكتب الورقية بل يرى أنهما سيتعايشان معاً.',
              es: 'Kramer no cree que el libro en papel desaparezca; ambos coexistirán.'
            }
          },
          {
            id: 'b1_h_q30',
            question: '30. Welches Schlusswort zieht die Moderatorin am Ende?',
            options: ['Papierbücher sind immer besser als Bildschirme', 'Man sollte weniger lesen und mehr fernsehen', 'Nicht das Format zählt, sondern die Freude am Lesen'],
            correctAnswer: 'Nicht das Format zählt, sondern die Freude am Lesen',
            explanation: {
              en: 'Conclusion: "Nicht das Medium zählt, sondern die Freude am Lesen."',
              fa: 'نتیجه‌گیری مجری: وسیله و قالب مهم نیست، بلکه لذت بردن از مطالعه اصل است.',
              prs: 'شکل کتاب مهم نیست، شوق و علاقه مطالعه مهم است.',
              tr: 'Önemli olan biçim değil, okuma keyfidir.',
              ar: 'المهم ليس الوسيلة وإنما متعة القراءة.',
              es: 'No importa el formato, sino el placer de la lectura.'
            }
          }
        ]
      }
    ]
  },
  schreiben: {
    title: 'Modul Schreiben (60 Minuten • 3 Aufgaben)',
    durationMinutes: 60,
    taskType: 'Aufgabe 1: Persönliche E-Mail (20 Min) • Aufgabe 2: Diskussionsbeitrag (25 Min) • Aufgabe 3: Formelle Mitteilung (15 Min)',
    situation: 'Aufgabe 1: Sie berichten einem Freund über Ihren Umzug in eine neue Stadt.\nAufgabe 2: Diskussionsforum zum Thema "Sollten Fitnessstudios für Auszubildende kostenlos sein?".\nAufgabe 3: Sie können wegen eines dringenden Arzttermins nicht an der Besprechung mit Ihrem Vorgesetzten teilnehmen.',
    prompt: 'Aufgabe 2 Schreibaufgabe (Diskussionsforum, ca. 80 Wörter):\nIn einem Online-Magazin lesen Sie einen Artikel über Gesundheit und Sport bei jungen Menschen. Schreiben Sie einen Forumsbeitrag:\n1. Äußern Sie Ihre persönliche Meinung zu kostenlosen Sportangeboten für Auszubildende.\n2. Nennen Sie Vor- und Nachteile solcher Förderungen für Betriebe und Azubis.\n3. Berichten Sie über die Situation von Sport- und Fitnessangeboten in Ihrem Heimatland.',
    guidingPoints: [
      '1. Klare eigene Stellungnahme formulieren',
      '2. Vor- und Nachteile für Jugendliche und Arbeitgeber abwägen',
      '3. Situation im Heimatland beschreiben und vergleichen'
    ],
    targetWordCount: 'ca. 80 Wörter',
    sampleSolution: 'Ich halte kostenlose Fitnessangebote für Auszubildende für eine hervorragende Investition in die Zukunft. Einerseits fördert regelmäßiger Sport die körperliche Gesundheit, verringert stressbedingte Krankheiten und steigert die Leistungsfähigkeit im Betrieb. Andererseits könnte die Finanzierung für kleinere Handwerksbetriebe eine finanzielle Belastung darstellen, weshalb Krankenkassen sich an den Kosten beteiligen sollten. In meinem Heimatland Afghanistan treiben junge Menschen Sport meistens informell auf Fußballplätzen oder in Vereinen, da teure Fitnessstudios für viele unerschwinglich sind. Meiner Ansicht nach sollten Betriebe in Deutschland Sportgutscheine vergeben, da gesunde Mitarbeiter das wertvollste Gut eines Unternehmens sind.',
    scoringCriteria: {
      en: 'Teil 1: 40 points, Teil 2: 40 points, Teil 3: 20 points. Total 100 points scale mapped to 25% overall exam weight.',
      fa: 'وظیفه ۱: ۴۰ نمره، وظیفه ۲: ۴۰ نمره، وظیفه ۳: ۲۰ نمره. رعایت حروف ربط پیشرفته، ساختار مقدمه-بدنه-نتیجه و صحت گرامری.',
      prs: 'وظیفه ۱ و ۲ هر کدام ۴۰ نمره، وظیفه ۳ دارای ۲۰ نمره است.',
      tr: '1. ve 2. görev 40\'ar puan, 3. görev 20 puan. Paragraf yapısı ve bağlaçlar değerlendirilir.',
      ar: 'المهمتان 1 و 2 (40 نقطة لكل منهما)، والمهمة 3 (20 نقطة). تقييم الروابط والسلامة اللغوية.',
      es: 'Tareas 1 y 2: 40 pts c/u; Tarea 3: 20 pts. Cohesión textual y conectores subordinantes.'
    }
  },
  sprechen: {
    title: 'Modul Sprechen (15 Minuten • Paarprüfung in 3 Teilen)',
    durationMinutes: 15,
    teil1: {
      name: 'Teil 1: Gemeinsam etwas planen (3–4 Minuten)',
      instruction: {
        en: 'Plan an event with your partner (e.g., organize a surprise party for a coworker). Propose ideas, coordinate budget, location, and tasks, and reach concrete decisions.',
        fa: 'با همتای خود یک رویداد را هماهنگ کنید (مانند جشن غافلگیری همکار). درباره مکان، زمان، بودجه و وظایف گفتگو کرده و تصمیمات نهایی بگیرید.',
        prs: 'یک برنامه مشترک جشن را پلان نمایید و تقسیم وظایف کنید.',
        tr: 'Partnerinizle birlikte sürpriz bir etkinlik planlayın; bütçe ve görevleri netleştirin.',
        ar: 'خططا معاً لتنظيم حفل مفاجئ لزميل؛ حددا المكان والميزانية وتوزيع المهام.',
        es: 'Planificad juntos un evento sorpresa acordando lugar, fecha y presupuesto.'
      },
      prompts: ['Anlass und Datum festlegen', 'Geeignete Location finden', 'Geschenk & Budget abstimmen', 'Aufgaben verteilen'],
      sampleResponse: 'Kandidat A: "Hallo Sarah! Unser Kollege Herr Berg geht nächsten Monat in den Ruhestand. Lass uns eine Überraschungsfeier organisieren. Wo könnten wir feiern?"\nKandidat B: "Hallo Ali! Das ist ein toller Gedanke. Wir könnten den Konferenzraum im 3. Stock dekorieren oder ein kleines italienisches Restaurant reservieren. Was meinst du?"\nKandidat A: "Ich finde das Restaurant gemütlicher. Ich rufe dort an und frage nach einem Menü für 15 Personen. Kümmerst du dich um ein schönes Abschiedsgeschenk?"\nKandidat B: "Sehr gerne! Ich sammle von jedem Kollegen 10 Euro ein und kaufe einen Reisegutschein. Dann treffen wir uns nächste Woche zur finalen Abstimmung."'
    },
    teil2: {
      name: 'Teil 2: Ein Thema präsentieren (Präsentation • 3–4 Minuten)',
      instruction: {
        en: 'Deliver a structured 3-minute presentation on a chosen topic: 1. Introduce topic & outline structure. 2. Personal experience. 3. Situation in your home country. 4. Pros & cons with examples. 5. Personal opinion & conclusion.',
        fa: 'یک ارائه منسجم ۳ دقیقه‌ای ارائه دهید: ۱. معرفی موضوع و ساختار ۲. تجربه شخصی ۳. وضعیت در کشور مبدا ۴. مزایا و معایب همراه با مثال ۵. نظر نهایی و نتیجه‌گیری.',
        prs: 'یک سخنرانی منسجم ۳ دقیقه‌ای همراه با ذکر مزایا، معایب و نظر شخصی ارائه دهید.',
        tr: '3 dakikalık yapılandırılmış sunum: Konu, deneyim, memleketteki durum, avantaj/dezavantaj ve kişisel görüş.',
        ar: 'تقديم عرض منظم لمدة 3 دقائق يتضمن: المقدمة، التجربة الشخصية، الوضع في بلد المنشأ، الإيجابيات والسلبيات، والرأي الختامي.',
        es: 'Presentación estructurada de 3 minutos con estructura, experiencia personal, pros/contras y conclusión.'
      },
      topicCards: [
        'Thema A: Brauchen Kinder schon in der Grundschule eigene Smartphones?',
        'Thema B: Ist ein Leben ohne Auto in Deutschland machbar und sinnvoll?',
        'Thema C: Vor- und Nachteile von vegetarischer und veganer Ernährung'
      ],
      sampleResponse: 'Kandidat: "Guten Tag verehrte Prüfer und liebe Partnerin! Das Thema meiner Präsentation lautet: \'Ist ein Leben ohne eigenes Auto in Deutschland machbar und sinnvoll?\'\nIch habe meine Präsentation in vier Abschnitte gegliedert: Zunächst schildere ich meine persönlichen Erfahrungen, danach berichte ich über die Situation in meinem Heimatland Afghanistan, anschließend wiege ich die Vor- und Nachteile ab und nenne am Ende mein persönliches Fazit.\n\nIch lebe seit drei Jahren in Frankfurt und besitze kein Auto. Dank des Deutschlandtickets nutze ich täglich die S-Bahn und für Einkäufe das Fahrrad. In meinem Heimatland dagegen ist der öffentliche Nahverkehr kaum ausgebaut; dort ist man auf Sammeltaxis oder eigene Fahrzeuge angewiesen.\nEin großer Vorteil des autofreien Lebens in Deutschland ist die Kostenersparnis: Keine Versicherung, kein Benzin, keine Reparaturen. Zudem tut man etwas Gutes für die Umwelt. Ein Nachteil zeigt sich vor allem auf dem Land, wo Busse oft selten fahren.\nZusammenfassend bin ich überzeugt: In Großstädten ist ein Leben ohne Auto nicht nur möglich, sondern sogar stressfreier. Vielen Dank für Ihre Aufmerksamkeit!"'
    },
    teil3: {
      name: 'Teil 3: Auf Fragen reagieren und Feedback geben (2 Minuten)',
      instruction: {
        en: 'Give appreciative feedback on your partner\'s presentation and pose a relevant follow-up question. Answer questions from examiners and your partner.',
        fa: 'به ارائه همتای خود بازخورد مثبت دهید، یک سوال تکمیلی دقیق بپرسید و به سوالات داوران و همتای خود پاسخ دهید.',
        prs: 'به سخنرانی پارتنر تان بازخورد دهید و سوال منطقی بپرسید.',
        tr: 'Partnerinizin sunumuna geri bildirimde bulunun, bir soru yöneltin ve gelen soruları yanıtlayın.',
        ar: 'قدم تقييماً إيجابياً لعرض زميلك واطرح عليه سؤالاً تفصيلياً ثم أجب عن أسئلة الممتحنين.',
        es: 'Aporta comentarios constructivos sobre la exposición de tu compañero y formula una pregunta pertinente.'
      },
      planningScenario: 'Feedbackrunde und Beantwortung von Vertiefungsfragen',
      discussionPoints: ['Dank und Lob für Vortragsstruktur', 'Präzise Inhaltsfrage stellen', 'Eigene Sicht kurz einbringen'],
      sampleResponse: 'Partner: "Vielen Dank für deinen interessanten Vortrag. Du hast sehr flüssig und klar gesprochen. Ich habe eine Frage: Wie machst du das, wenn du schwere Einkäufe wie Getränkekisten nach Hause transportieren musst?"\nKandidat: "Das ist eine berechtigte Frage! Für schwere Einkäufe nutze ich entweder Carsharing für zwei Stunden oder bestelle schwere Getränkekisten über einen Lieferservice direkt an die Wohnungstür."'
    }
  }
};
