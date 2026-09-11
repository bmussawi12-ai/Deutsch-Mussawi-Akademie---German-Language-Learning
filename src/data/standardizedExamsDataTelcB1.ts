import { StandardizedExam } from '../types';

// =========================================================================
// TELC DEUTSCH B1 / ZERTIFIKAT DEUTSCH (OFFIZIELLER STANDARD)
// Gesamtdauer: 150 Minuten (2,5 Stunden)
// Leseverstehen & Sprachbausteine: 90 Min (40 Aufgaben)
// Hörverstehen: 30 Min (20 Aufgaben) | Schreiben: 30 Min | Sprechen: 15 Min
// =========================================================================
export const EXAM_TELC_B1: StandardizedExam = {
  id: 'exam_telc_b1',
  title: 'telc Deutsch B1 / Zertifikat Deutsch (Offizieller Standard)',
  standard: 'telc',
  level: 'B1.1',
  totalDurationMinutes: 150,
  passingScore: '60% (180 / 300 Punkte: Schriftlich min. 135 Pkt, Mündlich min. 45 Pkt)',
  strategy: {
    level: 'B1.1',
    timeManagement: [
      {
        section: 'Leseverstehen & Sprachbausteine (90 Minuten • 40 Aufgaben)',
        allocatedMinutes: 90,
        tip: {
          en: '90 minutes for 5 parts: Leseverstehen Teil 1-3 (20 tasks, 60 min) + Sprachbausteine Teil 1-2 (20 tasks, 30 min).',
          fa: '۹۰ دقیقه برای ۵ بخش: درک مطلب بخش ۱ تا ۳ (۲۰ سوال، ۶۰ دقیقه) + ساختارهای زبانی و گرامر بخش ۱ و ۲ (۲۰ سوال، ۳۰ دقیقه).',
          prs: '۹۰ دقیقه برای ۴۰ سوال درک مطلب و گرامر.',
          tr: '90 dakikada 5 bölüm: Okuma 1-3 (20 soru) ve Dilbilgisi 1-2 (20 soru).',
          ar: '90 دقيقة مقسمة بين القراءة (20 مهمة) والقواعد والمفردات (20 مهمة).',
          es: '90 minutos para 40 tareas: Comprensión lectora (20) y estructuras lingüísticas (20).'
        }
      },
      {
        section: 'Hörverstehen (ca. 30 Minuten • 20 Aufgaben)',
        allocatedMinutes: 30,
        tip: {
          en: '30 minutes with audio playback. Teil 1 (5 tasks, global), Teil 2 (10 tasks, detailed radio/interviews), Teil 3 (5 tasks, short everyday announcements).',
          fa: '۳۰ دقیقه شنیداری: بخش ۱ (۵ سوال پیام‌های رادیویی)، بخش ۲ (۱۰ سوال مصاحبه و جزئیات)، بخش ۳ (۵ سوال مکالمات روزمره).',
          prs: '۳۰ دقیقه شنیداری شامل ۲۰ سوال استاندارد تلک.',
          tr: '30 dakikada 20 dinleme sorusu (doğru/yanlış ve çoktan seçmeli).',
          ar: '30 دقيقة للاستماع مقسمة على 3 أجزاء تحتوي على 20 سؤالاً.',
          es: '30 minutos de audición para 20 tareas divididas en 3 partes.'
        }
      },
      {
        section: 'Schriftlicher Ausdruck (30 Minuten • 1 Brief)',
        allocatedMinutes: 30,
        tip: {
          en: 'Write an informal or semi-formal email/letter (approx. 100 words) addressing all 4 guiding points thoroughly.',
          fa: 'نگارش یک نامه یا ایمیل نیمه‌رسمی/شخصی (حدود ۱۰۰ کلمه) با پوشش کامل تمام ۴ نکته راهنما.',
          prs: 'نوشتن یک خط یا ایمیل با پوشش ۴ نکته مشخص در ۳۰ دقیقه.',
          tr: '30 dakikada 4 yönlendirici maddeyi kapsayan yaklaşık 100 kelimelik mektup/e-posta yazımı.',
          ar: 'كتابة رسالة شخصية أو شبه رسمية (حوالي 100 كلمة) تغطي النقاط الأربع الإرشادية.',
          es: 'Redacción de una carta/correo (aprox. 100 palabras) cubriendo los 4 puntos directrices.'
        }
      }
    ],
    stepByStepStrategies: [
      {
        title: 'Sprachbausteine Teil 1: Lückentext mit Grammatikfokus',
        steps: [
          {
            en: '1. Read the complete text once to understand context. 2. Analyze the grammar around each gap (preposition, case, verb endings, conjunctions). 3. Eliminate impossible options.',
            fa: '۱. ابتدا کل متن را یک‌بار بخوانید تا مفهوم کلی مشخص شود. ۲. ساختار گرامری اطراف جای خالی را بررسی کنید (حروف اضافه، پادمان‌ها، صرف افعال، حروف ربط). ۳. گزینه‌های غیرممکن را حذف کنید.',
            prs: '۱. متن را بخوانید. ۲. گرامر قبل و بعد خالیگاه را چک کنید. ۳. گزینه‌های نادرست را خط بزنید.',
            tr: '1. Önce metnin tamamını okuyun. 2. Boşluğun etrafındaki edat, hal eki ve bağlaçları inceleyin. 3. Uymayan seçenekleri eleyin.',
            ar: '1. اقرأ النص كاملاً لفهم السياق العام. 2. حلل التركيب النحوي حول كل فراغ (حروف الجر، حالات الإعراب، نهايات الأفعال). 3. استبعد الخيارات غير المتوافقة.',
            es: '1. Lee el texto completo primero. 2. Analiza la estructura gramatical contigua al hueco. 3. Descarta opciones incompatibles.'
          }
        ]
      }
    ],
    commonMistakes: [
      {
        mistake: 'Falscher Kasus nach Wechselpräpositionen in Sprachbausteinen',
        correction: 'Akkusativ bei Richtung/Wohin, Dativ bei Lage/Wo genau beachten',
        explanation: {
          en: 'Prepositions like in, an, auf, unter take Dativ for location and Akkusativ for direction.',
          fa: 'حروف اضافه دوگانه (Wechselpräpositionen) برای مکان ثابت Dativ و برای حرکت و جهت Akkusativ می‌گیرند.',
          prs: 'برای جای ثابت داتیو و برای حرکت اکوزاتیف استفاده کنید.',
          tr: 'Yer bildiren durumlarda Dativ, yönelme bildiren durumlarda Akkusativ kullanılır.',
          ar: 'حروف الجر المشتركة تأخذ Dativ للموقع و Akkusativ للحركة والاتجاه.',
          es: 'Las preposiciones mixtas rigen dativo para ubicación y acusativo para movimiento.'
        }
      }
    ]
  },
  lesen: {
    title: 'Modul Leseverstehen & Sprachbausteine (90 Minuten • 40 Aufgaben)',
    durationMinutes: 90,
    texts: [
      {
        title: 'Teil 1: Globalverstehen (Aufgaben 1 bis 5 • Überschriften zuordnen)',
        sourceType: '5 kurze Presse- und Magazinartikel aus dem deutschsprachigen Raum',
        body: `Text 1: Immer mehr junge Erwachsene in Deutschland verzichten auf den Besitz eines eigenen Führerscheins. In Großstädten mit dichtem U-Bahn- und Tramnetz nutzen über 65 Prozent Carsharing und Leihräder, da hohe Versicherungs- und Reparaturkosten als überflüssige Belastung empfunden werden.
Text 2: Regionale Wochenmärkte erleben einen beachtlichen Boom. Verbraucher schätzen den direkten Kontakt zu den Bauern und sind bereit, für frisches Bio-Gemüse und regionale Käsespezialitäten ohne lange Transportwege etwas höhere Preise zu bezahlen.
Text 3: Volkshochschulen (VHS) verzeichnen ein starkes Interesse an handwerklichen Reparaturkursen ("Repair-Cafés"). Unter fachkundiger Anleitung lernen Laien, defekte Kaffeemaschinen, Toaster oder Fahrräder selbst instand zu setzen, statt sie wegzuwerfen.
Text 4: Der Deutsche Mieterbund warnt vor drastischen Nebenkostensteigerungen durch gestiegene Fernwärme- und Gaspreise. Mieter werden aufgefordert, Heizkörper rechtzeitig zu entlüften und digitale Thermostate zur Absenkung der Raumtemperatur in der Nacht zu installieren.
Text 5: Bundesweit erproben über 45 mittelständische Unternehmen das Modell der Vier-Tage-Woche bei vollem Lohnausgleich. Erste Zwischenergebnisse zeigen: Krankheitsbedingte Fehltage sanken um 28 Prozent, während die Mitarbeiterzufriedenheit sprunghaft anstieg.`,
        questions: [
          {
            id: 'telc_b1_l_q1',
            question: '1. Welche Überschrift passt am besten zu Text 1?',
            options: ['a) Steigende Beliebtheit von Oldtimern', 'b) Trend zur Mobilität ohne eigenes Auto', 'c) Teure Bußgelder für Fahranfänger'],
            correctAnswer: 'b) Trend zur Mobilität ohne eigenes Auto',
            explanation: {
              en: 'Text 1 discusses young adults avoiding driving licenses and car ownership in favor of public transit.',
              fa: 'متن ۱ به عدم تمایل جوانان به مالکیت خودروی شخصی و استفاده از وسایل نقلیه عمومی اشاره دارد.',
              prs: 'گرایش به ترانسپورت شهری به جای داشتن موتر شخصی.',
              tr: 'Metin 1, gençlerin kendi araçları yerine toplu taşımayı tercih etmesini anlatır.',
              ar: 'النص 1 يبرز توجه الشباب نحو التنقل التشاركي دون اقتناء سيارة خاصة.',
              es: 'El texto 1 trata sobre la tendencia a prescindir del vehículo propio.'
            }
          },
          {
            id: 'telc_b1_l_q2',
            question: '2. Welche Überschrift passt am besten zu Text 2?',
            options: ['a) Rückkehr zur regionalen und nachhaltigen Ernährung', 'b) Streik der Supermarktkassierer', 'c) Verbot von Plastiktüten in Hofläden'],
            correctAnswer: 'a) Rückkehr zur regionalen und nachhaltigen Ernährung',
            explanation: {
              en: 'Text 2 focuses on farmers markets, local organic produce, and direct consumer support.',
              fa: 'متن ۲ به رونق بازارهای محلی و تمایل مصرف‌کنندگان به خرید مستقیم محصولات ارگانیک محلی اختصاص دارد.',
              prs: 'علاقه به خرید سبزیجات تازه و محصولات زراعتی محلی.',
              tr: 'Metin 2, yerel pazar yerlerinin yükselişini ve organik gıda talebini açıklar.',
              ar: 'النص 2 يتناول الإقبال الكبير على الأسواق المحلية والمنتجات العضوية.',
              es: 'El texto 2 describe el auge de los mercados locales y el consumo de proximidad.'
            }
          },
          {
            id: 'telc_b1_l_q3',
            question: '3. Welche Überschrift passt am besten zu Text 3?',
            options: ['a) Selber reparieren statt neu kaufen', 'b) Neuer Lehrplan an Grundschulen', 'c) Elektronikmüll im Wald verboten'],
            correctAnswer: 'a) Selber reparieren statt neu kaufen',
            explanation: {
              en: 'Text 3 highlights Repair-Cafés where people learn to fix household devices themselves.',
              fa: 'متن ۳ درباره کافه‌های تعمیر (Repair-Cafés) است که افراد یاد می‌گیرند وسایل خراب را خود تعمیر کنند.',
              prs: 'ترمیم وسایل کهنه به جای خریدن وسایل نو.',
              tr: 'Metin 3, aletleri atmak yerine kendin tamir etme atölyelerini vurgular.',
              ar: 'النص 3 يسلط الضوء على ورش ومقاهي إصلاح الأجهزة المنزلية بدلاً من رميها.',
              es: 'El texto 3 se centra en talleres de autoreparación de aparatos.'
            }
          },
          {
            id: 'telc_b1_l_q4',
            question: '4. Welche Überschrift passt am besten zu Text 4?',
            options: ['a) Höhere Betriebskosten und Tipps zum Energiesparen', 'b) Umzugshilfe für Studenten', 'c) Bau neuer Mietwohnungen in Berlin'],
            correctAnswer: 'a) Höhere Betriebskosten und Tipps zum Energiesparen',
            explanation: {
              en: 'Text 4 discusses rising ancillary housing expenses and practical tips like venting radiators.',
              fa: 'متن ۴ به افزایش هزینه‌های جانبی مسکن و راهکارهای صرفه‌جویی در مصرف انرژی می‌پردازد.',
              prs: 'بلند رفتن مصارف خانه و راه‌های صرفه‌جویی در انرژی.',
              tr: 'Metin 4, artan yan giderleri ve enerji tasarrufu tedbirlerini konu edinir.',
              ar: 'النص 4 يحذر من زيادة تكاليف التدفئة ويقدم إرشادات لترشيد الاستهلاك.',
              es: 'El texto 4 informa sobre el incremento de costes de calefacción y ahorro energético.'
            }
          },
          {
            id: 'telc_b1_l_q5',
            question: '5. Welche Überschrift passt am besten zu Text 5?',
            options: ['a) Positive Erfahrungen mit der Vier-Tage-Woche', 'b) Kündigungswelle in Großkonzernen', 'c) Kürzung der Urlaubstage'],
            correctAnswer: 'a) Positive Erfahrungen mit der Vier-Tage-Woche',
            explanation: {
              en: 'Text 5 discusses the four-day work week trial and its positive outcomes on health and satisfaction.',
              fa: 'متن ۵ نتایج مثبت آزمایشی هفته کاری چهار روزه و کاهش ۲۸ درصدی غیبت ناشی از بیماری را بیان می‌کند.',
              prs: 'نتایج خوب از کار ۴ روزه در هفته با معاش مکمل.',
              tr: 'Metin 5, 4 günlük çalışma haftası denemelerinin getirdiği olumlu sonuçları açıklar.',
              ar: 'النص 5 يستعرض النتائج الإيجابية لتجربة أسبوع العمل المكون من 4 أيام.',
              es: 'El texto 5 resume los resultados exitosos del ensayo de la semana laboral de 4 días.'
            }
          }
        ]
      },
      {
        title: 'Teil 2: Detailverstehen (Aufgaben 6 bis 10 • Ausführlicher Zeitungsartikel)',
        sourceType: 'Artikel aus der "Süddeutschen Zeitung": Neue Wege in der Berufsausbildung',
        body: `Immer mehr Abiturienten in Deutschland entscheiden sich gegen ein rein theoretisches Universitätsstudium und wählen stattdessen das sogenannte "Duale Studium". Bei diesem Modell wechseln sich mehrwöchige Theoriephasen an der Hochschule mit Praxisphasen in einem Wirtschaftsunternehmen ab.
Die Vorteile liegen für viele Studierende auf der Hand: Erstens zahlt das kooperierende Partnerunternehmen während der gesamten dreijährigen Studienzeit eine monatliche Vergütung, die zwischen 950 und 1.400 Euro liegt. Dadurch entfällt für die Studierenden der Druck, nebenher zeitraubende Nebenjobs annehmen zu müssen. Zweitens sammeln die dual Studierenden vom ersten Semester an wertvolle Praxiserfahrung in echten Unternehmensabläufen.
Allerdings birgt das Duale Studium auch erhebliche Herausforderungen. Während klassische Universitätsstudenten eine vorlesungsfreie Zeit ("Semesterferien") von rund zweieinhalb Monaten genießen, haben dual Studierende lediglich den gesetzlichen Urlaubsanspruch eines regulären Arbeitnehmers, also etwa 25 bis 30 Tage pro Kalenderjahr. Der Termindruck zwischen Prüfungsphasen und betrieblichen Projekten ist enorm hoch. Dennoch lohnt sich der Einsatz: Über 85 Prozent der Absolventen werden im Anschluss unmittelbar in ein unbefristetes Arbeitsverhältnis übernommen.`,
        questions: [
          {
            id: 'telc_b1_l_q6',
            question: '6. Was ist das Grundprinzip des "Dualen Studiums"?',
            options: [
              'a) Man studiert ausschließlich online von zu Hause aus.',
              'b) Man wechselt zwischen Theorie an der Hochschule und Praxis im Unternehmen ab.',
              'c) Man muss zuerst zehn Jahre Berufserfahrung vorweisen.'
            ],
            correctAnswer: 'b) Man wechselt zwischen Theorie an der Hochschule und Praxis im Unternehmen ab.',
            explanation: {
              en: 'Paragraph 1 specifies: "... wechseln sich mehrwöchige Theoriephasen (...) mit Praxisphasen (...) ab."',
              fa: 'پاراگراف ۱ تصریح می‌کند: دوره‌های تئوری دانشگاهی به صورت متناوب با دوره‌های عملی در شرکت تعویض می‌شوند.',
              prs: 'ترکیب درس‌های پوهنتون و کار عملی در کمپنی.',
              tr: 'Üniversitedeki teorik dersler ile şirketteki pratik çalışma dönüşümlü yürütülür.',
              ar: 'الجمع بالتناوب بين المحاضرات النظرية في الجامعة والتدريب العملي في الشركة.',
              es: 'Alternancia entre fases teóricas universitarias y fases prácticas en la empresa.'
            }
          },
          {
            id: 'telc_b1_l_q7',
            question: '7. Welchen finanziellen Vorteil bietet das Partnerunternehmen?',
            options: [
              'a) Es schenkt den Studierenden am Ende ein Auto.',
              'b) Es zahlt eine monatliche Vergütung zwischen 950 und 1.400 Euro.',
              'c) Es bezahlt kostenlose Urlaubsreisen.'
            ],
            correctAnswer: 'b) Es zahlt eine monatliche Vergütung zwischen 950 und 1.400 Euro.',
            explanation: {
              en: 'Paragraph 2 mentions a monthly stipend: "... monatliche Vergütung, die zwischen 950 und 1.400 Euro liegt."',
              fa: 'پرداخت حقوق ماهیانه بین ۹۵۰ تا ۱۴۰۰ یورو در تمام طول ۳ سال تحصیل.',
              prs: 'پرداخت معاش ماهوار بین ۹۵۰ تا ۱۴۰۰ یورو.',
              tr: 'Öğrencilere aylık 950 ile 1.400 Euro arasında düzenli ödeme yapılır.',
              ar: 'الحصول على مكافأة مالية شهرية تتراوح بين 950 و 1400 يورو.',
              es: 'Una remuneración mensual entre 950 y 1.400 euros durante todo el periodo.'
            }
          },
          {
            id: 'telc_b1_l_q8',
            question: '8. Was ist für dual Studierende ein Nachteil im Vergleich zu normalen Universitätsstudenten?',
            options: [
              'a) Sie dürfen keine Mensa besuchen.',
              'b) Sie haben deutlich weniger freie Tage und keine langen Semesterferien.',
              'c) Sie erhalten keinen Studienabschluss.'
            ],
            correctAnswer: 'b) Sie haben deutlich weniger freie Tage und keine langen Semesterferien.',
            explanation: {
              en: 'Vacation days: Dual students only get normal employee vacation (25-30 days), no semester breaks.',
              fa: 'برخلاف دانشجویان عادی که تعطیلات بین دو ترم طولانی دارند، دانشجویان دوآل تنها ۲۵ تا ۳۰ روز در سال مرخصی دارند.',
              prs: 'نداشتن رخصتی‌های طولانی سمستر و داشتن مرخصی محدود کاری.',
              tr: 'Uzun sömestir tatilleri yerine çalışanlar gibi sınırlı izin günlerine (25-30 gün) sahip olmaları.',
              ar: 'حرمانهم من العطلات الفصلية الطويلة وحصولهم على إجازة عمل عادية (25-30 يوماً).',
              es: 'No disfrutan de largas vacaciones semestrales, solo de 25-30 días anuales de vacaciones laborales.'
            }
          },
          {
            id: 'telc_b1_l_q9',
            question: '9. Wie beschreibt der Text die Arbeitsbelastung während des Studiums?',
            options: [
              'a) Der Termindruck zwischen Prüfungen und Betrieb ist extrem hoch.',
              'b) Es gibt überhaupt keine Prüfungen.',
              'c) Man muss nur zwei Stunden pro Woche arbeiten.'
            ],
            correctAnswer: 'a) Der Termindruck zwischen Prüfungen und Betrieb ist extrem hoch.',
            explanation: {
              en: 'Workload: "Der Termindruck zwischen Prüfungsphasen und betrieblichen Projekten ist enorm hoch."',
              fa: 'فشار زمانی بین امتحانات دانشگاه و پروژه‌های کاری در بالاترین سطح قرار دارد.',
              prs: 'فشار کاری و امتحان همزمان بسیار زیاد است.',
              tr: 'Sınavlar ile şirket projeleri arasındaki zaman baskısı oldukça yüksektir.',
              ar: 'ضغط المواعيد والتوفيق بين الامتحانات والمهام الوظيفية مرتفع للغاية.',
              es: 'La presión temporal entre época de exámenes y proyectos en la empresa es enorme.'
            }
          },
          {
            id: 'telc_b1_l_q10',
            question: '10. Welche Berufsaussichten haben Absolventen eines dualen Studiums?',
            options: [
              'a) Sie müssen meist ins Ausland umziehen.',
              'b) Über 85 Prozent erhalten direkt einen unbefristeten Arbeitsvertrag.',
              'c) Fast alle werden arbeitslos.'
            ],
            correctAnswer: 'b) Über 85 Prozent erhalten direkt einen unbefristeten Arbeitsvertrag.',
            explanation: {
              en: 'Career: "Über 85 Prozent der Absolventen werden im Anschluss unmittelbar in ein unbefristetes Arbeitsverhältnis übernommen."',
              fa: 'بیش از ۸۵ درصد فارغ‌التحصیلان بلافاصله قرارداد کار دائم و بدون مدت دریافت می‌کنند.',
              prs: 'بیشتر از ۸۵ فیصد شان مستقیماً استخدام دائم می‌شوند.',
              tr: 'Mezunların %85\'inden fazlası doğrudan süresiz iş sözleşmesiyle işe alınır.',
              ar: 'أكثر من 85 بالمئة من الخريجين يتم تثبيتهم فوراً بعقود عمل غير محددة المدة.',
              es: 'Más del 85% de los egresados consiguen directamente un contrato indefinido.'
            }
          }
        ]
      },
      {
        title: 'Teil 3: Selektives Verstehen (Aufgaben 11 bis 20 • Kleinanzeigen zuordnen)',
        sourceType: '12 Kleinanzeigen aus Stadtzeitungen & Portalen (Anzeigen A bis L)',
        body: `Anzeige A: "Gebrauchte Kinderfahrräder und Roller in gutem Zustand günstig abzugeben. Tel: 0172-554433."
Anzeige B: "Bio-Catering & vegane Menüs für Firmenfeiern und Jubiläen. Lieferung ab 10 Personen frei Haus. www.green-event.de"
Anzeige C: "Reparaturwerkstatt für Smartphones, Laptops und Tablets. Displaytausch binnen 60 Minuten mit Garantie. Schillerstr. 12."
Anzeige D: "Sprachpartner gesucht! Biete Spanisch, suche Konversation auf Deutsch für Niveau B1/B2. Treffen im Café oder online. E-Mail: carlos@mail.de"
Anzeige E: "Möbelpacker und Transporter für Wochenend-Umzüge gesucht? Wir helfen zuverlässig und preiswert! Hotline: 0800-445566."
Anzeige F: "Wohnungssuchende aufgepasst: Schöne 3-Zimmer-Wohnung mit Balkon in ruhiger Randlage, 75 qm, Kaltmiete 780 Euro. Sofort frei."
Anzeige G: "Klavier- und Gitarrenunterricht für Anfänger und Fortgeschrittene bei erfahrener Musikpädagogin. Kostenlose Probestunde."
Anzeige H: "Hundesitter mit Herz gesucht: Wer kann unseren lebhaften Golden Retriever werktags für 2 Stunden ausführen? Gute Bezahlung."
Anzeige I: "Nähkurse an Wochenenden: Lerne eigene Kleidung zu nähen und alte Textilien upzucyceln. Nähmaschinen vorhanden."
Anzeige J: "Gebrauchtwagenhändler kauft PKW aller Marken gegen Barzahlung, auch mit Mängeln oder ohne TÜV. Tel: 0151-998877."
Anzeige K: "Professionelle Steuerberatung für Freiberufler, Existenzgründer und Angestellte. Schnelle Bearbeitung Ihrer Steuererklärung."
Anzeige L: "Fitness-Studio mit Sauna und Schwimmbad: Jetzt 3 Monate unverbindlich trainieren zum halben Mitgliedsbeitrag!"`,
        questions: [
          {
            id: 'telc_b1_l_q11',
            question: '11. Ali sucht jemanden, der ihm beim Umzug am Samstag mit einem Transporter hilft.',
            options: ['Anzeige E', 'Anzeige J', 'Keine passende Anzeige'],
            correctAnswer: 'Anzeige E',
            explanation: {
              en: 'Anzeige E offers movers and transporters for weekend relocations.',
              fa: 'آگهی E خدمات حمل بار و وانت برای اسباب‌کشی‌های آخر هفته ارائه می‌دهد.',
              prs: 'اعلان E برای موتر باربری و کوچ‌کشی مناسب است.',
              tr: 'İlan E, hafta sonu taşınmaları için nakliye ve eleman desteği sunar.',
              ar: 'الإعلان E يقدم خدمات النقل والشاحنات للانتقال في عطلة نهاية الأسبوع.',
              es: 'El anuncio E ofrece furgoneta y ayuda para mudanzas.'
            }
          },
          {
            id: 'telc_b1_l_q12',
            question: '12. Elena hat ihr Smartphone fallen gelassen und das Display ist gesplittert. Sie braucht eine schnelle Reparatur.',
            options: ['Anzeige C', 'Anzeige I', 'Keine passende Anzeige'],
            correctAnswer: 'Anzeige C',
            explanation: {
              en: 'Anzeige C offers display replacement within 60 minutes.',
              fa: 'آگهی C خدمات تعویض نمایشگر موبایل در کمتر از ۶۰ دقیقه ارائه می‌کند.',
              prs: 'اعلان C ترمیم سریع صفحه موبایل در ۶۰ دقیقه را دارد.',
              tr: 'İlan C, 60 dakika içinde ekran değişimi ve cihaz tamiri sunar.',
              ar: 'الإعلان C يوفر تبديل شاشات الهواتف خلال 60 دقيقة.',
              es: 'El anuncio C ofrece reparación y cambio de pantalla en 60 minutos.'
            }
          },
          {
            id: 'telc_b1_l_q13',
            question: '13. Sofia möchte gerne Spanisch gegen Deutsch sprechen und sucht einen Tandem-Partner.',
            options: ['Anzeige D', 'Anzeige G', 'Keine passende Anzeige'],
            correctAnswer: 'Anzeige D',
            explanation: {
              en: 'Anzeige D is from Carlos offering Spanish in exchange for German conversation.',
              fa: 'آگهی D مربوط به کارلوس است که تبادل زبان اسپانیایی با آلمانی را پیشنهاد داده است.',
              prs: 'اعلان D برای یادگیری اسپانیایی و مکالمه آلمانی است.',
              tr: 'İlan D, İspanyolca-Almanca dil partneri arayan Carlos\'un ilanına uyar.',
              ar: 'الإعلان D يبحث عن شريك لتبادل الحديث باللغتين الإسبانية والألمانية.',
              es: 'El anuncio D busca un compañero de intercambio de conversación español-alemán.'
            }
          },
          {
            id: 'telc_b1_l_q14',
            question: '14. Familie Müller sucht für ihre fünfjährige Tochter ein gebrauchtes, preiswertes Fahrrad.',
            options: ['Anzeige A', 'Anzeige J', 'Keine passende Anzeige'],
            correctAnswer: 'Anzeige A',
            explanation: {
              en: 'Anzeige A sells used children bicycles in good condition.',
              fa: 'آگهی A دوچرخه‌های دست دوم کودک با قیمت مناسب می‌فروشد.',
              prs: 'اعلان A بایسکل‌های دست دوم اطفال را به فروش می‌رساند.',
              tr: 'İlan A, uygun fiyatlı ikinci el çocuk bisikleti satmaktadır.',
              ar: 'الإعلان A يعرض دراجات أطفال مستعملة بحالة جيدة وسعر مناسب.',
              es: 'El anuncio A vende bicicletas infantiles usadas a buen precio.'
            }
          },
          {
            id: 'telc_b1_l_q15',
            question: '15. Herr Demir plant eine Firmenfeier mit 30 Personen und möchte vegetarisches Essen bestellen.',
            options: ['Anzeige B', 'Anzeige F', 'Keine passende Anzeige'],
            correctAnswer: 'Anzeige B',
            explanation: {
              en: 'Anzeige B provides organic catering and vegan menus from 10 people delivered to site.',
              fa: 'آگهی B کترینگ ارگانیک و غذاهای گیاهی را برای مهمانی‌ها ارسال می‌کند.',
              prs: 'اعلان B برای غذای سبزیجات و مهمانی مناسب است.',
              tr: 'İlan B, 10 kişiden itibaren şirket etkinliklerine bio ve vegan menü teslim eder.',
              ar: 'الإعلان B يقدم خدمة توريد وجبات عضوية ونباتية للحفلات والمناسبات.',
              es: 'El anuncio B ofrece catering ecológico y menús veganos para eventos de empresa.'
            }
          },
          {
            id: 'telc_b1_l_q16',
            question: '16. Markus möchte seine Steuererklärung nicht alleine machen und sucht fachkundige Hilfe.',
            options: ['Anzeige K', 'Anzeige E', 'Keine passende Anzeige'],
            correctAnswer: 'Anzeige K',
            explanation: {
              en: 'Anzeige K offers professional tax consultation and tax return filing.',
              fa: 'آگهی K خدمات مشاوره مالیاتی و تنظیم اظهارنامه مالیاتی ارائه می‌دهد.',
              prs: 'اعلان K مشاوره مالیاتی رسمی ارائه می‌نماید.',
              tr: 'İlan K, profesyonel vergi danışmanlığı ve beyanname hazırlama hizmeti verir.',
              ar: 'الإعلان K يوفر استشارات ضريبية احترافية وإعداد الإقرار الضريبي.',
              es: 'El anuncio K ofrece asesoría fiscal y elaboración de declaraciones de la renta.'
            }
          },
          {
            id: 'telc_b1_l_q17',
            question: '17. Eine Familie sucht eine 3-Zimmer-Mietwohnung mit Balkon am Stadtrand.',
            options: ['Anzeige F', 'Anzeige A', 'Keine passende Anzeige'],
            correctAnswer: 'Anzeige F',
            explanation: {
              en: 'Anzeige F offers a 3-room apartment with balcony on the outskirts.',
              fa: 'آگهی F اجاره یک آپارتمان ۳ اتاقه همراه با بالکن در حاشیه آرام شهر را معرفی می‌کند.',
              prs: 'اعلان F یک خانه کرایی ۳ اتاقه با بالکن در اطراف شهر است.',
              tr: 'İlan F, balkonlu 3 odalı kiralık daire sunmaktadır.',
              ar: 'الإعلان F يعرض شقة للإيجار مكونة من 3 غرف وشرفة على أطراف المدينة.',
              es: 'El anuncio F ofrece un piso de 3 habitaciones con balcón en zona periférica.'
            }
          },
          {
            id: 'telc_b1_l_q18',
            question: '18. Laura muss beruflich viel arbeiten und sucht jemanden, der ihren Hund am Nachmittag ausführt.',
            options: ['Anzeige H', 'Anzeige L', 'Keine passende Anzeige'],
            correctAnswer: 'Anzeige H',
            explanation: {
              en: 'Anzeige H is looking for a dog walker for 2 hours on weekdays.',
              fa: 'آگهی H به دنبال فردی مهربان برای گرداندن سگ به مدت ۲ ساعت در روزهای کاری است.',
              prs: 'اعلان H به دنبال شخصی برای بردن سگ به چکر است.',
              tr: 'İlan H, hafta içi köpeği 2 saat gezdirecek bakıcı aramaktadır.',
              ar: 'الإعلان H يبحث عن شخص لرعاية وتمشية الكلب يومياً.',
              es: 'El anuncio H busca paseador de perros 2 horas al día entre semana.'
            }
          },
          {
            id: 'telc_b1_l_q19',
            question: '19. Jonas möchte Sport treiben, aber auch eine Sauna nutzen, um sich nach dem Training zu entspannen.',
            options: ['Anzeige L', 'Anzeige G', 'Keine passende Anzeige'],
            correctAnswer: 'Anzeige L',
            explanation: {
              en: 'Anzeige L is a gym with sauna and swimming pool with a trial discount.',
              fa: 'آگهی L باشگاه ورزشی مجهز به سونا و استخر شنا را با تخفیف عضویت معرفی می‌کند.',
              prs: 'اعلان L برای ورزش، سونا و حوض آب‌بازی است.',
              tr: 'İlan L, saunası ve havuzu bulunan spor salonu üyeliği sunar.',
              ar: 'الإعلان L يوفر اشتراكاً في نادٍ رياضي يحتوي على ساونا ومسبح.',
              es: 'El anuncio L incluye gimnasio con sauna y piscina con descuento promocional.'
            }
          },
          {
            id: 'telc_b1_l_q20',
            question: '20. Sarah möchte lernen, wie man Kleidung repariert und zuschneidet.',
            options: ['Anzeige I', 'Anzeige C', 'Keine passende Anzeige'],
            correctAnswer: 'Anzeige I',
            explanation: {
              en: 'Anzeige I offers weekend sewing classes to create and upcycle clothing.',
              fa: 'آگهی I دوره‌های آخر هفته آموزش خیاطی و دوخت و دوز لباس را ارائه می‌دهد.',
              prs: 'اعلان I برای صنف‌های آموزش خیاطی است.',
              tr: 'İlan I, hafta sonu dikiş ve kıyafet dönüştürme kursları sunar.',
              ar: 'الإعلان I يقدم دورات تدريبية لتعليم الخياطة وتفصيل وتعديل الملابس.',
              es: 'El anuncio I ofrece cursos de costura de fin de semana para confeccionar y reciclar ropa.'
            }
          }
        ]
      },
      {
        title: 'Teil 4: Sprachbausteine Teil 1 (Aufgaben 21 bis 30 • Grammatik im Brief)',
        sourceType: 'Halbformelle E-Mail: Anfrage an die Sprachschule bezüglich B1-Intensivkurs',
        body: `Liebes Team der Sprachakademie,
ich schreibe Ihnen, (21) _____ ich mich für den kommenden B1-Intensivkurs im Oktober interessiere. Vor zwei Monaten bin ich aus beruflichen Gründen nach Hamburg (22) _____. Da ich in meinem Betrieb täglich mit deutschsprachigen Kunden (23) _____ muss, ist es für mich von größter Bedeutung, meine Sprachkenntnisse rasch zu (24) _____.
Könnten Sie mir bitte mitteilen, (25) _____ der Kurs am Vormittag oder am Abend stattfindet? Außerdem würde ich gern wissen, welche Lehrmaterialien wir im Unterricht (26) _____.
Falls vor Beginn des Kurses ein Einstufungstest (27) _____ ist, lassen Sie es mich bitte rechtzeitig wissen. Ich habe bereits an (28) _____ Volkshochschule einen A2-Kurs absolviert und kann Ihnen die Teilnahmebestätigung gern (29) _____ Mail zusenden.
Ich bedanke mich im Voraus herzlich für (30) _____ Mühe und freue mich auf Ihre Rückmeldung.
Mit freundlichen Grüßen,
Farhad Moradi`,
        questions: [
          {
            id: 'telc_b1_sb_q21',
            question: '21. Lücke (21):',
            options: ['weil', 'denn', 'obwohl'],
            correctAnswer: 'weil',
            explanation: {
              en: '"weil" introduces a causal subordinate clause with verb at the end: "... weil ich mich (...) interessiere."',
              fa: '"weil" جمله پیرو سببی می‌سازد که فعل را به انتهای جمله می‌برد: "... weil ich mich (...) interessiere".',
              prs: '"weil" فعل را در آخر جمله می‌برد.',
              tr: '"weil" fiili cümlenin sonuna götüren sebep yan cümlesi bağlacıdır.',
              ar: '"weil" أداة ربط سببية تأتي مع الجملة الفرعية وتضع الفعل في النهاية.',
              es: '"weil" introduce oración subordinada causal con el verbo al final.'
            }
          },
          {
            id: 'telc_b1_sb_q22',
            question: '22. Lücke (22):',
            options: ['gezogen', 'gezogen bin', 'umgezogen'],
            correctAnswer: 'gezogen',
            explanation: {
              en: 'Perfekt with sein: "bin (...) nach Hamburg gezogen". (Or umgezogen nach / gezogen nach).',
              fa: 'ساختار پرفکت با sein: bin (...) gezogen. کشیدن یا نقل مکان کردن به شهری دیگر.',
              prs: 'کوچ کردن به شهر هامبورگ.',
              tr: 'Yönelme ve taşınma Perfekt formu: "bin (...) gezogen".',
              ar: 'صيغة الماضي التام (Perfekt) مع فعل الانتقال: bin nach Hamburg gezogen.',
              es: 'Participio de movimiento con sein: bin nach Hamburg gezogen.'
            }
          },
          {
            id: 'telc_b1_sb_q23',
            question: '23. Lücke (23):',
            options: ['kommunizieren', 'kommuniziert', 'kommuniziere'],
            correctAnswer: 'kommunizieren',
            explanation: {
              en: 'Infinitive after modal verb "muss": "... täglich mit Kunden kommunizieren muss."',
              fa: 'مصدر فعل در ترکیب با فعل کمکی مدال "muss": kommunizieren muss.',
              prs: 'فعل مصدری قبل از فعل مدال muss.',
              tr: '"muss" modal fiilinden ötürü mastar (Infinitive) halde "kommunizieren" kullanılır.',
              ar: 'المصدر المجرد لوجود الفعل المساعد muss في نهاية الجملة.',
              es: 'Infinitivo requerido por el verbo modal muss.'
            }
          },
          {
            id: 'telc_b1_sb_q24',
            question: '24. Lücke (24):',
            options: ['verbessern', 'verbessert', 'verbessernd'],
            correctAnswer: 'verbessern',
            explanation: {
              en: 'Infinitiv mit "zu": "... meine Sprachkenntnisse rasch zu verbessern."',
              fa: 'ساختار مصدر با zu: برای بیان هدف پس از ساختار "von Bedeutung sein... zu verbessern".',
              prs: 'مصدر با zu: به منظور بهبود بخشیدن.',
              tr: '"zu" ile mastar yapısı: "zu verbessern".',
              ar: 'صيغة المصدر مع zu بعد عبارة من الأهمية بمكان: zu verbessern.',
              es: 'Estructura de infinitivo con zu: zu verbessern.'
            }
          },
          {
            id: 'telc_b1_sb_q25',
            question: '25. Lücke (25):',
            options: ['ob', 'dass', 'wann'],
            correctAnswer: 'ob',
            explanation: {
              en: 'Indirect yes/no or alternative question introduced by "ob": "... mitteilen, ob der Kurs...".',
              fa: 'جمله پرسشی غیرمستقیم با "ob" (آیا): "... به من اطلاع دهید که آیا کلاس صبح برگزار می‌شود یا عصر".',
              prs: 'کلمه ربط "ob" برای سوال غیرمستقیم.',
              tr: 'Dolaylı soru bağlacı: "... ob der Kurs am Vormittag oder am Abend stattfindet".',
              ar: 'أداة السؤال غير المباشر الاستفهامي (ob) بمعنى "فيما إذا كان".',
              es: 'Conjunción subordinante interrogativa indirecta "ob" (si).'
            }
          },
          {
            id: 'telc_b1_sb_q26',
            question: '26. Lücke (26):',
            options: ['benutzen', 'benutzt', 'benutzten'],
            correctAnswer: 'benutzen',
            explanation: {
              en: 'Present tense plural for "wir": "wir im Unterricht benutzen".',
              fa: 'صرف فعل زمان حال برای ضمیر فاعلی جمع "wir": benutzen.',
              prs: 'صرف فعل برای wir: ما استفاده می‌کنیم.',
              tr: '"wir" zamirine göre şimdiki zaman çoğul çekimi: "benutzen".',
              ar: 'تصريف الفعل في الحاضر مع الضمير "wir": benutzen.',
              es: 'Presente de indicativo en primera persona del plural (wir): benutzen.'
            }
          },
          {
            id: 'telc_b1_sb_q27',
            question: '27. Lücke (27):',
            options: ['erforderlich', 'erforderliche', 'erforderliches'],
            correctAnswer: 'erforderlich',
            explanation: {
              en: 'Predicative adjective remains uninflected: "ein Einstufungstest erforderlich ist".',
              fa: 'صفت در جایگاه گزاره‌ای (همراه با فعل sein) پسوند صرفی نمی‌گیرد: erforderlich ist.',
              prs: 'صفت به صورت ساده و بدون پسوند.',
              tr: '"sein" fiiliyle yüklem olarak kullanılan sıfatlar ek almaz: "erforderlich ist".',
              ar: 'الصفة الخبرية مع فعل الكينونة sein لا تُعرب بنهايات: erforderlich ist.',
              es: 'El adjetivo en función atributiva/predicativa con sein no recibe desinencia.'
            }
          },
          {
            id: 'telc_b1_sb_q28',
            question: '28. Lücke (28):',
            options: ['einer', 'eine', 'einem'],
            correctAnswer: 'einer',
            explanation: {
              en: 'Dativ feminine after preposition "an": an + einer Volkshochschule (die VHS).',
              fa: 'حرف اضافه "an" برای مکان حالت Dativ می‌خواهد و چون Volkshochschule مونث (die) است، آرتیکل نامعین به "einer" تبدیل می‌شود.',
              prs: 'حالت داتیو مونث برای "an": an einer VHS.',
              tr: '"an" edatı Dativ gerektirir; "die Volkshochschule" için "einer" olur.',
              ar: 'حرف الجر an مع الموقع يتطلب حالة Dativ، وللمؤنث تصبح einer.',
              es: 'La preposición an con ubicación exige dativo; femenino singular: einer.'
            }
          },
          {
            id: 'telc_b1_sb_q29',
            question: '29. Lücke (29):',
            options: ['per', 'mit', 'durch'],
            correctAnswer: 'per',
            explanation: {
              en: 'Fixed prepositional phrase for electronic transmission: "per Mail" or "per E-Mail".',
              fa: 'اصطلاح رایج برای ارسال مدرک از طریق پست الکترونیک: "per Mail" یا "per E-Mail".',
              prs: 'عبارت رایج "per Mail" یعنی از طریق ایمیل.',
              tr: 'E-posta yoluyla gönderimlerde kalıp ifade: "per Mail".',
              ar: 'التركيب المعتاد لإرسال الوثائق إلكترونياً: per Mail.',
              es: 'Locución preposicional fija para envíos telemáticos: per Mail.'
            }
          },
          {
            id: 'telc_b1_sb_q30',
            question: '30. Lücke (30):',
            options: ['Ihre', 'Ihren', 'Ihrem'],
            correctAnswer: 'Ihre',
            explanation: {
              en: 'Akkusativ feminine after preposition "für": für + Ihre Mühe (die Mühe).',
              fa: 'حرف اضافه "für" همواره Akkusativ می‌گیرد و کلمه "die Mühe" مونث است، پس صفت ملکی رسمی "Ihre" است.',
              prs: 'اکوزاتیف مونث برای für: für Ihre Mühe.',
              tr: '"für" edatı Akkusativ alır; "die Mühe" dişil olduğundan "Ihre" uygundur.',
              ar: 'حرف الجر für يتطلب Akkusativ دائماً، ومع كلمة die Mühe المؤنثة نستخدم Ihre.',
              es: 'La preposición für siempre rige acusativo; femenino singular: Ihre.'
            }
          }
        ]
      },
      {
        title: 'Teil 5: Sprachbausteine Teil 2 (Aufgaben 31 bis 40 • Wortschatz & Lexik im Geschäftsbrief)',
        sourceType: 'Offizielles Schreiben: Bestätigung eines Mietvertrages durch die Hausverwaltung',
        body: `Sehr geehrte Frau Schneider,
wir freuen uns, Ihnen (31) _____ zu können, dass Ihre Wohnungsbewerbung erfolgreich war. Der Mietvertrag für die Wohnung im 2. Obergeschoss liegt ab morgen in unserem Büro (32) _____ Unterschrift bereit.
Bitte beachten Sie, dass die Mietkaution in Höhe von drei Monatskaltmieten vor der Schlüsselübergabe auf das angegebene Treuhandkonto (33) _____ werden muss. (34) _____ Sie Fragen zu den Zahlungsmodalitäten haben, steht Ihnen unsere Buchhaltung montags bis donnerstags gerne (35) _____ Verfügung.
Die offizielle Übergabe der Wohnung erfolgt am 1. des kommenden Monats. Ein Mitarbeiter unseres Hauses wird gemeinsam mit Ihnen ein detailliertes (36) _____ über den Zustand aller Räume anfertigen. Sollten Mängel vorliegen, werden diese schriftlich (37) _____ und umgehend von unseren Handwerkern beseitigt.
Wir bitten Sie zudem, den beiliegenden Meldebogen für die Stadtwerke (38) _____ auszufüllen, damit die Stromversorgung lückenlos auf Ihren Namen (39) _____ wird.
Wir heißen Sie in unserer Wohnanlage herzlich willkommen und wünschen Ihnen einen reibungslosen (40) _____.
Mit freundlichen Grüßen,
Hausverwaltung Müller & Partner`,
        questions: [
          {
            id: 'telc_b1_sb_q31',
            question: '31. Lücke (31):',
            options: ['mitteilen', 'erzählen', 'sprechen'],
            correctAnswer: 'mitteilen',
            explanation: {
              en: 'Formal correspondence verb: "Ihnen mitteilen zu können" (to inform/notify you).',
              fa: 'در نامه‌نگاری رسمی اداری از فعل "mitteilen" (به اطلاع رساندن) استفاده می‌شود.',
              prs: 'به اطلاع شما رساندن.',
              tr: 'Resmi yazışmalarda bilgi vermek için "mitteilen" fiili tercih edilir.',
              ar: 'في المراسلات الرسمية نستخدم الفعل mitteilen للإبلاغ أو الإفادة بالخبر.',
              es: 'En correspondencia formal se emplea mitteilen para comunicar o notificar.'
            }
          },
          {
            id: 'telc_b1_sb_q32',
            question: '32. Lücke (32):',
            options: ['zur', 'an', 'bei'],
            correctAnswer: 'zur',
            explanation: {
              en: 'Fixed phrase: "zur Unterschrift bereitliegen" (to be ready for signature).',
              fa: 'اصطلاح تثبیت‌شده اداری: zur Unterschrift bereitliegen (آماده برای امضا بودن).',
              prs: 'آماده برای امضا شدن.',
              tr: 'Kalıp ifade: "zur Unterschrift bereitliegen" (imzalanmaya hazır bulunmak).',
              ar: 'تعبير ثابت: zur Unterschrift bereitliegen (جاهز للتوقيع).',
              es: 'Locución fija: zur Unterschrift bereitliegen (estar listo para la firma).'
            }
          },
          {
            id: 'telc_b1_sb_q33',
            question: '33. Lücke (33):',
            options: ['überwiesen', 'überweisen', 'überweist'],
            correctAnswer: 'überwiesen',
            explanation: {
              en: 'Passiv with modal verb: "überwiesen werden muss" (Partizip II überwiesen).',
              fa: 'مجهول با فعل کمکی: "باید واریز گردد" (Partizip II überwiesen + werden muss).',
              prs: 'باید انتقال داده و حواله شود.',
              tr: 'Modal fiilli edilgen çatı (Passiv): "überwiesen werden muss".',
              ar: 'المبني للمجهول مع الفعل المساعد: اسم المفعول überwiesen مع werden muss.',
              es: 'Pasiva con modal: participio überwiesen seguido de werden muss.'
            }
          },
          {
            id: 'telc_b1_sb_q34',
            question: '34. Lücke (34):',
            options: ['Falls', 'Weil', 'Trotz'],
            correctAnswer: 'Falls',
            explanation: {
              en: 'Conditional conjunction introducing a conditional clause: "Falls Sie Fragen (...) haben...".',
              fa: 'حرف ربط شرطی "Falls" (در صورتی که/چنانچه): "Falls Sie Fragen haben...".',
              prs: 'اگر یا در صورتی که سوال داشته باشید.',
              tr: 'Koşul yan cümlesi başlatan bağlaç: "Falls" (Şayet/Eğer).',
              ar: 'أداة الشرط "Falls" بمعنى "إذا كان لديكم أسئلة".',
              es: 'Conjunción condicional "Falls" (en caso de que / si).'
            }
          },
          {
            id: 'telc_b1_sb_q35',
            question: '35. Lücke (35):',
            options: ['zur', 'in', 'vor'],
            correctAnswer: 'zur',
            explanation: {
              en: 'Idiomatic Nomen-Verb-Verbindung: "zur Verfügung stehen" (to be available).',
              fa: 'ترکیب فعلی ثابت (Nomen-Verb-Verbindung): zur Verfügung stehen (در دسترس بودن).',
              prs: 'در خدمت و در دسترس بودن.',
              tr: 'Kalıp birleşik fiil: "zur Verfügung stehen" (hizmetinde/kullanımında olmak).',
              ar: 'تعبير اصطلاحي اسمي-فعلي: zur Verfügung stehen (يكون رهن الإشارة والخدمة).',
              es: 'Locución verbal fija: zur Verfügung stehen (estar a disposición).'
            }
          },
          {
            id: 'telc_b1_sb_q36',
            question: '36. Lücke (36):',
            options: ['Protokoll', 'Dokument', 'Katalog'],
            correctAnswer: 'Protokoll',
            explanation: {
              en: 'Legal property handover document: "ein Übergabeprotokoll anfertigen" (written inventory).',
              fa: 'صورت‌جلسه رسمی تحویل ملک: Übergabeprotokoll anfertigen.',
              prs: 'صورت‌جلسه رسمی خانه.',
              tr: 'Daire teslimlerinde durum tespit tutanağı hazırlamak: "ein Protokoll anfertigen".',
              ar: 'المحضر الرسمي لمعاينة واستلام الشقة: ein Übergabeprotokoll anfertigen.',
              es: 'Acta formal de entrega de vivienda: ein Protokoll anfertigen.'
            }
          },
          {
            id: 'telc_b1_sb_q37',
            question: '37. Lücke (37):',
            options: ['festgehalten', 'behalten', 'gehalten'],
            correctAnswer: 'festgehalten',
            explanation: {
              en: 'To record in writing: "schriftlich festhalten" -> Partizip II: "festgehalten werden".',
              fa: 'ثبت و درج کردن کتبی: schriftlich festhalten.',
              prs: 'ثبت کردن در کاغذ.',
              tr: 'Yazılı olarak kayda geçirmek: "schriftlich festhalten".',
              ar: 'التوثيق والتدوين خطياً: schriftlich festhalten.',
              es: 'Hacer constar por escrito: schriftlich festhalten.'
            }
          },
          {
            id: 'telc_b1_sb_q38',
            question: '38. Lücke (38):',
            options: ['vollständig', 'voll', 'gefüllt'],
            correctAnswer: 'vollständig',
            explanation: {
              en: 'Adverb: "vollständig ausfüllen" (to fill out completely without leaving gaps).',
              fa: 'قید نحوه: "vollständig ausfüllen" یعنی فرم را به صورت کامل و بدون جا انداختن پر کردن.',
              prs: 'به صورت مکمل خانه‌پری کردن.',
              tr: 'Formu eksiksiz ve tam doldurmak anlamında: "vollständig ausfüllen".',
              ar: 'تعبئة النموذج بالكامل دون نواقص: vollständig ausfüllen.',
              es: 'Rellenar de forma completa e íntegra: vollständig ausfüllen.'
            }
          },
          {
            id: 'telc_b1_sb_q39',
            question: '39. Lücke (39):',
            options: ['umgemeldet', 'angemeldet', 'gemeldet'],
            correctAnswer: 'umgemeldet',
            explanation: {
              en: 'To transfer a utility account to a new name: "auf Ihren Namen umgemeldet wird".',
              fa: 'تغییر نام کنتور یا اشتراک برق به نام شخص جدید: ummelden.',
              prs: 'تبدیل کردن نام حساب برق به نام شما.',
              tr: 'Aboneliği kendi adına devralıp kaydettirmek: "ummelden".',
              ar: 'نقل ملكية اشتراك الكهرباء إلى الاسم الجديد: ummelden.',
              es: 'Cambiar la titularidad del suministro a su nombre: ummelden.'
            }
          },
          {
            id: 'telc_b1_sb_q40',
            question: '40. Lücke (40):',
            options: ['Umzug', 'Ausflug', 'Besuch'],
            correctAnswer: 'Umzug',
            explanation: {
              en: 'Moving into the new flat: "einen reibungslosen Umzug wünschen" (smooth relocation).',
              fa: 'آرزوی اسباب‌کشی و جابجایی آرام و بی‌دردسر: "einen reibungslosen Umzug wünschen".',
              prs: 'یک کوچ‌کشی آسان و راحت.',
              tr: 'Yeni eve taşınma sürecinin sorunsuz geçmesi dileği: "reibungsloser Umzug".',
              ar: 'تمني انتقال وتغيير سكن مريح وسلس: einen reibungslosen Umzug.',
              es: 'Deseos de una mudanza tranquila y sin contratiempos: reibungsloser Umzug.'
            }
          }
        ]
      }
    ]
  },
  hoeren: {
    title: 'Modul Hörverstehen (ca. 30 Minuten • 20 Aufgaben)',
    durationMinutes: 30,
    audioItems: [
      {
        id: 'telc_b1_h_item1',
        title: 'Teil 1: Globalverstehen im Alltag (Aufgaben 1 bis 5 • Einmal hören)',
        situation: '5 Mitteilungen und Ansagen im öffentlichen Rundfunk und Verkehrsmitteln',
        transcript: `Ansage 1 (U-Bahn):
"Sehr geehrte Fahrgäste! Wegen unvorhergesehener Weichenreparaturen zwischen Hauptbahnhof und Messegelände ist der Verkehr der U-Bahn-Linie U2 derzeit unterbrochen. Wir haben für Sie einen Ersatzverkehr mit Großraum-Bussen eingerichtet. Bitte nutzen Sie die Haltestellen vor dem Haupteingang."

Ansage 2 (Wetterbericht):
"Hier ist der Wetterbericht für Süddeutschland: Am Vormittag halten sich dichte Nebelfelder, die sich bis zum Mittag vielerorts auflösen. Ab dem Nachmittag erwarten wir milde Temperaturen bis 18 Grad und anhaltenden Sonnenschein, ideal für Spaziergänge in den Bergen."

Ansage 3 (Kaufhaus):
"Achtung, ein Kundenhinweis für unsere vierte Etage: In der Abteilung für Haushaltswaren erhalten Sie heute beim Kauf eines Kaffevollautomaten ein dreiteiliges Keramik-Tassenset sowie zwei Packungen Espresso-Bohnen gratis dazu. Das Angebot gilt nur, solange der Vorrat reicht."

Ansage 4 (Flugafen):
"Lufthansa-Flug LH 442 nach New York JFK: Die Passagiere werden gebeten, sich unverzüglich zum Flugsteig B 24 zu begeben. Das Einsteigen hat soeben begonnen. Bitte halten Sie Ihren Reisepass und die Bordkarte griffbereit."

Ansage 5 (Bibliothek):
"Liebe Besucherinnen und Besucher! Die Stadtbibliothek schließt heute ausnahmsweise bereits um 16:30 Uhr wegen einer internen Personalversammlung. Bücher und Medien können auch nach Geschäftsschluss über den automatischen Rückgabekasten an der Außenseite abgegeben werden."`,
        questions: [
          {
            id: 'telc_b1_h_q1',
            question: '1. Warum ist der Verkehr auf der U-Bahn-Linie U2 unterbrochen?',
            options: ['Richtig (Wegen Reparaturarbeiten an den Weichen)', 'Falsch (Wegen Streik der Lokführer)'],
            correctAnswer: 'Richtig (Wegen Reparaturarbeiten an den Weichen)',
            explanation: {
              en: 'Transcript states: "... Wegen unvorhergesehener Weichenreparaturen...".',
              fa: 'متن اعلام می‌کند به دلیل تعمیرات غیرمنتظره ریل و سوزن‌بانی حرکت قطار متوقف شده است.',
              prs: 'به خاطر ترمیم ریل‌ها حرکت مترو متوقف است.',
              tr: 'Anons, makas onarım çalışmalarından ötürü seferlerin durduğunu belirtir.',
              ar: 'الإذاعة توضح أن العطل ناتج عن أعمال صيانة وإصلاح التحويلات السككية.',
              es: 'Se debe a trabajos de reparación imprevistos en las vías.'
            }
          },
          {
            id: 'telc_b1_h_q2',
            question: '2. Wie wird das Wetter in Süddeutschland am Nachmittag?',
            options: ['Richtig (Es wird sonnig und mild bis 18 Grad)', 'Falsch (Es gibt starken Schneefall und Sturm)'],
            correctAnswer: 'Richtig (Es wird sonnig und mild bis 18 Grad)',
            explanation: {
              en: 'Forecast: "... Ab dem Nachmittag erwarten wir milde Temperaturen bis 18 Grad und anhaltenden Sonnenschein...".',
              fa: 'هواشناسی اعلام کرد از بعدازظهر آفتاب مداوم و دمای مطبوع تا ۱۸ درجه خواهیم داشت.',
              prs: 'بعد از چاشت هوا آفتابی و معتدل می‌شود.',
              tr: 'Öğleden sonra güneşli ve 18 dereceye varan ılık bir hava bekleniyor.',
              ar: 'حالة الطقس بعد الظهر ستكون مشمسة ومعتدلة تصل درجات الحرارة إلى 18 مئوية.',
              es: 'Por la tarde se prevé tiempo soleado y templado de hasta 18 grados.'
            }
          },
          {
            id: 'telc_b1_h_q3',
            question: '3. Was erhalten Kunden heute in der Haushaltswarenabteilung gratis?',
            options: ['Richtig (Ein Tassenset und Espresso-Bohnen)', 'Falsch (Einen kostenlosen Kühlschrank)'],
            correctAnswer: 'Richtig (Ein Tassenset und Espresso-Bohnen)',
            explanation: {
              en: 'Promotional gift: "... ein dreiteiliges Keramik-Tassenset sowie zwei Packungen Espresso-Bohnen gratis...".',
              fa: 'یک ست فنجان سرامیکی و دو بسته قهوه اسپرسو رایگان به خریداران اهدا می‌شود.',
              prs: 'یک سیت فنجان و دانه قهوه رایگان داده می‌شود.',
              tr: 'Kahve makinesi alana fincan seti ve espresso kahvesi hediye verilmektedir.',
              ar: 'يحصل المشتري على طقم فناجين سيراميك وعبوتين من حبوب الإسبريسو مجاناً.',
              es: 'Obsequian un juego de tazas cerámicas y paquetes de café en grano.'
            }
          },
          {
            id: 'telc_b1_h_q4',
            question: '4. Zu welchem Flugsteig sollen die Passagiere nach New York gehen?',
            options: ['Richtig (Zu Flugsteig B 24)', 'Falsch (Zu Flugsteig C 10)'],
            correctAnswer: 'Richtig (Zu Flugsteig B 24)',
            explanation: {
              en: 'Airport gate: "... unverzüglich zum Flugsteig B 24 zu begeben."',
              fa: 'مسافران پرواز نیویورک باید فوراً به گیت خروجی B 24 مراجعه کنند.',
              prs: 'به گیت خروجی B 24 بروند.',
              tr: 'Yolcuların B 24 kapısına gitmeleri anons edilmektedir.',
              ar: 'يُطلب من ركاب رحلة نيويورك التوجه فوراً إلى البوابة B 24.',
              es: 'Deben dirigirse de inmediato a la puerta de embarque B 24.'
            }
          },
          {
            id: 'telc_b1_h_q5',
            question: '5. Wie kann man heute nach 16:30 Uhr noch Bücher zurückgeben?',
            options: ['Richtig (Über den automatischen Kasten an der Außenseite)', 'Falsch (Gar nicht, man muss bis Montag warten)'],
            correctAnswer: 'Richtig (Über den automatischen Kasten an der Außenseite)',
            explanation: {
              en: 'Return box: "... über den automatischen Rückgabekasten an der Außenseite...".',
              fa: 'کتاب‌ها را می‌توان از طریق باجه بازگرداندن خودکار در قسمت بیرونی کتابخانه تحویل داد.',
              prs: 'از طریق صندوق اتوماتیک در بیرون کتابخانه.',
              tr: 'Dış kısımdaki otomatik iade kutusu kullanılarak kitaplar teslim edilebilir.',
              ar: 'يمكن إرجاع الكتب عبر الصندوق الآلي المخصص والموجود خارج المبنى.',
              es: 'A través del buzón de devolución automática situado en el exterior.'
            }
          }
        ]
      },
      {
        id: 'telc_b1_h_item2',
        title: 'Teil 2: Detailverstehen (Aufgaben 6 bis 15 • Radio-Interview • Einmal hören)',
        situation: 'Radiogespräch im Kultur- und Wissenssender: "Ehrenamt und bürgerschaftliches Engagement"',
        transcript: `Moderator: "Herzlich willkommen zu 'Kultur aktuell'. Bei uns zu Gast ist Frau Sabine Bergmann von der Freiwilligen-Agentur München. Frau Bergmann, wie viele Menschen engagieren sich in Deutschland ehrenamtlich?"
Frau Bergmann: "Guten Tag! Es sind erfreulicherweise fast 29 Millionen Menschen, die sich in ihrer Freizeit unentgeltlich für die Gesellschaft einsetzen. Das entspricht rund 40 Prozent der Bevölkerung ab 14 Jahren. Das Spektrum reicht von Sportvereinen über den Umwelt- und Tierschutz bis hin zur Unterstützung von Senioren und Geflüchteten."
Moderator: "Viele denken bei Ehrenamt zuerst an ältere Menschen im Ruhestand. Stimmt dieses Klischee?"
Frau Bergmann: "Keineswegs! Zwar sind Ruheständler eine enorm wichtige Stütze, aber wir verzeichnen den stärksten Zuwachs bei jungen Menschen zwischen 16 und 25 Jahren. Junge Menschen suchen heute gezielt nach Projekten, bei denen sie konkrete Fertigkeiten erwerben können – etwa in der IT-Nachhilfe, bei der Organisation von Kulturfestivals oder beim Naturschutz."
Moderator: "Welche Motivation treibt die Menschen an, wenn sie kein Geld dafür bekommen?"
Frau Bergmann: "Unsere Befragungen zeigen eindeutig: An erster Stelle steht der Wunsch, mit anderen Menschen in Kontakt zu treten und soziale Kontakte zu knüpfen. Erst an zweiter Stelle folgt das Pflichtgefühl der Gemeinschaft gegenüber. Viele berichten uns auch, dass die Dankbarkeit der Menschen ihnen persönliche Kraft und Sinn im Alltag schenkt."
Moderator: "Wie unterstützt Ihre Agentur Interessierte, die noch nicht wissen, wo sie helfen könnten?"
Frau Bergmann: "Wir bieten kostenlose Beratungsgespräche an. Dabei analysieren wir die Talente und die verfügbare Zeit jedes Einzelnen. Niemand muss 20 Stunden pro Woche investieren – oft reichen schon zwei Stunden alle zwei Wochen, um etwa einer älteren Dame beim Einkauf zu helfen oder Kindern aus Bilderbüchern vorzulesen."`,
        questions: [
          {
            id: 'telc_b1_h_q6',
            question: '6. Rund 40 Prozent der Bevölkerung ab 14 Jahren engagieren sich in Deutschland freiwillig.',
            options: ['Richtig', 'Falsch'],
            correctAnswer: 'Richtig',
            explanation: {
              en: 'Frau Bergmann confirms: "... fast 29 Millionen Menschen (...) rund 40 Prozent der Bevölkerung ab 14 Jahren."',
              fa: 'خانم برگمان تایید می‌کند: حدود ۲۹ میلیون نفر یعنی ۴۰ درصد افراد بالای ۱۴ سال داوطلب هستند.',
              prs: 'حدود ۴۰ فیصد مردم کار رضاکارانه انجام می‌دهند.',
              tr: '14 yaş üzeri nüfusun yaklaşık %40\'ı gönüllü çalışmalarda yer almaktadır.',
              ar: 'حوالي 40 بالمئة من السكان فوق 14 عاماً يمارسون عملاً تطوعياً.',
              es: 'Alrededor del 40% de la población mayor de 14 años colabora en voluntariado.'
            }
          },
          {
            id: 'telc_b1_h_q7',
            question: '7. Im Ehrenamt engagieren sich fast ausschließlich ältere Menschen im Ruhestand.',
            options: ['Richtig', 'Falsch'],
            correctAnswer: 'Falsch',
            explanation: {
              en: 'She rejects this stereotype: "Keineswegs! (...) stärkster Zuwachs bei jungen Menschen zwischen 16 und 25 Jahren."',
              fa: 'نادرست: بیشترین رشد مشارکت مربوط به جوانان ۱۶ تا ۲۵ ساله است.',
              prs: 'نادرست: جوانان نیز حضور پررنگ دارند.',
              tr: 'Yanlış: En büyük artış 16-25 yaş arası gençlerdedir.',
              ar: 'خطأ: أكبر نسبة نمو مسجلة لدى فئة الشباب بين 16 و 25 عاماً.',
              es: 'Falso: el mayor incremento se da entre jóvenes de 16 a 25 años.'
            }
          },
          {
            id: 'telc_b1_h_q8',
            question: '8. Junge Freiwillige möchten oft praktische Fertigkeiten und Erfahrungen für ihre Zukunft sammeln.',
            options: ['Richtig', 'Falsch'],
            correctAnswer: 'Richtig',
            explanation: {
              en: 'She notes youth motivation: "... bei denen sie konkrete Fertigkeiten erwerben können...".',
              fa: 'درست: جوانان به دنبال کسب مهارت‌های عملی مانند کارگاه‌های کامپیوتر یا مدیریت برنامه‌ها هستند.',
              prs: 'درست: جوانان تجربه و مهارت کسب می‌کنند.',
              tr: 'Doğru: Gençler somut beceriler ve tecrübe edinmeyi hedefler.',
              ar: 'صحيح: يسعى الشباب لاكتساب مهارات عملية مفيدة لمستقبلهم.',
              es: 'Verdadero: los jóvenes buscan adquirir habilidades prácticas.'
            }
          },
          {
            id: 'telc_b1_h_q9',
            question: '9. Das wichtigste Motiv für freiwillige Helfer ist, schnell viel Geld zu verdienen.',
            options: ['Richtig', 'Falsch'],
            correctAnswer: 'Falsch',
            explanation: {
              en: 'Volunteering is uncompensated; the main drive is social contact: "... mit anderen Menschen in Kontakt zu treten...".',
              fa: 'نادرست: فعالیت داوطلبانه بدون دستمزد است و انگیزه اصلی برقراری ارتباط انسانی با دیگران است.',
              prs: 'نادرست: این کارها معاش ندارد و هدف کمک و دوستی است.',
              tr: 'Yanlış: Gönüllülük ücretsizdir, temel motivasyon sosyalleşmektir.',
              ar: 'خطأ: العمل التطوعي مجاني والدافع الأساسي هو التواصل وبناء الروابط الاجتماعية.',
              es: 'Falso: el voluntariado es altruista; el principal motivo es el contacto social.'
            }
          },
          {
            id: 'telc_b1_h_q10',
            question: '10. Ein Beratungsgespräch bei der Freiwilligen-Agentur kostet 50 Euro Gebühr.',
            options: ['Richtig', 'Falsch'],
            correctAnswer: 'Falsch',
            explanation: {
              en: 'Consultations are free: "Wir bieten kostenlose Beratungsgespräche an."',
              fa: 'نادرست: مشاوره‌های موسسه کاملاً رایگان (kostenlos) است.',
              prs: 'نادرست: جلسات مشاوره رایگان است.',
              tr: 'Yanlış: Danışmanlık görüşmeleri tamamen ücretsizdir.',
              ar: 'خطأ: جلسات المشورة تقدم بالمجان دون أي رسوم.',
              es: 'Falso: las sesiones de orientación son totalmente gratuitas.'
            }
          },
          {
            id: 'telc_b1_h_q11',
            question: '11. Für ein Ehrenamt muss man zwingend mindestens 20 Stunden pro Woche arbeiten.',
            options: ['Richtig', 'Falsch'],
            correctAnswer: 'Falsch',
            explanation: {
              en: 'Time commitment is flexible: "Niemand muss 20 Stunden (...) investieren – oft reichen schon zwei Stunden alle zwei Wochen."',
              fa: 'نادرست: هیچ اجباری برای ۲۰ ساعت در هفته نیست؛ حتی ۲ ساعت در دو هفته هم کافی است.',
              prs: 'نادرست: وقت کم هم برای کمک قبول می‌شود.',
              tr: 'Yanlış: Haftada 20 saat gerekmez, iki haftada 2 saat bile yeterli olabilir.',
              ar: 'خطأ: لا يُشترط تخصيص 20 ساعة أسبوعياً؛ فبعض المهام تكفيها ساعتان كل أسبوعين.',
              es: 'Falso: no se exigen 20 horas semanales; bastan dos horas cada dos semanas.'
            }
          },
          {
            id: 'telc_b1_h_q12',
            question: '12. Zu den Einsatzbereichen gehören Sport, Tierschutz und die Unterstützung von Geflüchteten.',
            options: ['Richtig', 'Falsch'],
            correctAnswer: 'Richtig',
            explanation: {
              en: 'Areas listed: "Sportvereinen über den Umwelt- und Tierschutz bis hin zur Unterstützung von Senioren und Geflüchteten."',
              fa: 'درست: باشگاه‌های ورزشی، حمایت از حیوانات و محیط‌زیست، و کمک به سالمندان و پناهجویان از حوزه‌های کاری هستند.',
              prs: 'درست: حوزه‌های سپورت، محیط زیست و مهاجرین شامل است.',
              tr: 'Doğru: Spor, çevre koruma, hayvan hakları ve sığınmacılara yardım alanları mevcuttur.',
              ar: 'صحيح: تشمل المجالات الأنشطة الرياضية وحماية الحيوان والبيئة ودعم اللاجئين.',
              es: 'Verdadero: incluye clubes deportivos, protección animal y apoyo a refugiados.'
            }
          },
          {
            id: 'telc_b1_h_q13',
            question: '13. Die Freiwilligen-Agentur analysiert im Gespräch die Talente und Zeitpläne der Bewerber.',
            options: ['Richtig', 'Falsch'],
            correctAnswer: 'Richtig',
            explanation: {
              en: 'Process: "... analysieren wir die Talente und die verfügbare Zeit jedes Einzelnen."',
              fa: 'درست: در جلسه مشاوره، استعدادها و زمان آزاد افراد تحلیل و بررسی می‌شود.',
              prs: 'درست: استعداد و وقت افراد بررسی می‌شود.',
              tr: 'Doğru: Bireylerin yetenekleri ve müsait oldukları zaman dilimi analiz edilir.',
              ar: 'صحيح: تقوم الوكالة بتحليل مهارات المتطوع وأوقات فراغه لتوجيهه للمجال الأنسب.',
              es: 'Verdadero: analizan el talento individual y la disponibilidad horaria.'
            }
          },
          {
            id: 'telc_b1_h_q14',
            question: '14. Eine mögliche Aufgabe für Freiwillige ist das Vorlesen aus Büchern für Kinder.',
            options: ['Richtig', 'Falsch'],
            correctAnswer: 'Richtig',
            explanation: {
              en: 'Example mentioned: "... oder Kindern aus Bilderbüchern vorzulesen."',
              fa: 'درست: روخوانی کتاب داستان برای کودکان از جمله نمونه‌های مطرح‌شده است.',
              prs: 'درست: کتاب خواندن برای کودکان.',
              tr: 'Doğru: Çocuklara resimli kitaplar okumak örnek görevlerden biridir.',
              ar: 'صحيح: قراءة القصص وكتب الصور للأطفال من بين الأمثلة المذكورة.',
              es: 'Verdadero: una de las labores citadas es leer cuentos ilustrados a niños.'
            }
          },
          {
            id: 'telc_b1_h_q15',
            question: '15. Ehrenamtliche Helfer empfinden die Dankbarkeit der Menschen als Bereicherung.',
            options: ['Richtig', 'Falsch'],
            correctAnswer: 'Richtig',
            explanation: {
              en: 'Emotional reward: "... dass die Dankbarkeit der Menschen ihnen persönliche Kraft und Sinn im Alltag schenkt."',
              fa: 'درست: قدردانی و لبخند انسان‌ها به نیروهای داوطلب انگیزه و معنای زندگی می‌بخشد.',
              prs: 'درست: قدردانی مردم به آنان روحیه و احساس خوبی می‌دهد.',
              tr: 'Doğru: İnsanların minnettarlığı gönüllülere güç ve hayat gayesi vermektedir.',
              ar: 'صحيح: امتنان وتقدير الناس يمنح المتطوعين طاقة إيجابية وشعوراً بالمعنى.',
              es: 'Verdadero: el agradecimiento de las personas les aporta satisfacción y sentido.'
            }
          }
        ]
      },
      {
        id: 'telc_b1_h_item3',
        title: 'Teil 3: Selektives Verstehen (Aufgaben 16 bis 20 • Kurze Telefongespräche • Einmal hören)',
        situation: '5 persönliche Telefonnachrichten auf dem Anrufbeantworter',
        transcript: `Nachricht 1 (Autowerkstatt):
"Hallo Herr Becker, hier Meister Klein von der Kfz-Werkstatt. Ihr Wagen ist fertig repariert: Die Bremsen wurden erneuert und die Hauptuntersuchung ist ohne Beanstandung bestanden. Sie können das Fahrzeug heute noch bis 18:30 Uhr abholen. Die Rechnung beträgt 420 Euro."

Nachricht 2 (Zahnarztpraxis):
"Guten Tag Frau Yilmaz, hier spricht die Zahnarztpraxis Dr. Weidner. Wir müssen Ihren morgigen Kontrolltermin um 10 Uhr leider krankheitsbedingt verschieben. Wir könnten Ihnen stattdessen Donnerstag um 15:30 Uhr oder Freitag um 09:00 Uhr anbieten. Rufen Sie uns bitte kurz zurück."

Nachricht 3 (Freund Stefan):
"Servus Farhad, hier ist Stefan! Wegen unserer Wanderung am Sonntag: Es soll ja ziemlich windig werden. Ich schlage vor, dass wir nicht auf den Gipfel steigen, sondern den Rundweg um den Tegernsee nehmen und mittags einkehren. Gib mir bis morgen Bescheid, ob das für dich passt!"

Nachricht 4 (Paketdienst):
"Guten Tag, hier ist der DHL-Zustellservice für Frau Fischer. Leider haben wir Sie vorhin nicht persönlich angetroffen. Ihr Paket wurde bei Ihrem Nachbarn im Erdgeschoss, Herrn Wagner, abgegeben. Sie finden die Benachrichtigungskarte in Ihrem Briefkasten."

Nachricht 5 (Sportverein):
"Hallo liebe Vereinsmitglieder der Volleyball-Gruppe! Die Turnhalle der Gesamtschule wird ab Montag wegen Sanierung des Hallenbodens für drei Wochen gesperrt. Unser Training findet in dieser Zeit mittwochs um 19 Uhr in der Halle der Realschule statt."`,
        questions: [
          {
            id: 'telc_b1_h_q16',
            question: '16. Was wurde am Auto von Herrn Becker in der Werkstatt repariert?',
            options: ['Richtig (Die Bremsen wurden erneuert)', 'Falsch (Der Motor wurde komplett ausgetauscht)'],
            correctAnswer: 'Richtig (Die Bremsen wurden erneuert)',
            explanation: {
              en: 'Message 1 states: "... Die Bremsen wurden erneuert und die Hauptuntersuchung ist (...) bestanden."',
              fa: 'ترمزهای ماشین تعویض شده و معاینه فنی با موفقیت پاس شده است.',
              prs: 'بریک‌های موتر نو شده است.',
              tr: 'Aracın frenleri yenilenmiş ve muayeneden geçmiştir.',
              ar: 'تم تجديد الفرامل واجتياز الفحص الفني الدوري للسيارة.',
              es: 'Se han renovado los frenos y superado la inspección técnica.'
            }
          },
          {
            id: 'telc_b1_h_q17',
            question: '17. Warum muss der Zahnarzttermin von Frau Yilmaz verschoben werden?',
            options: ['Richtig (Wegen Krankheit in der Praxis)', 'Falsch (Weil die Praxis für immer schließt)'],
            correctAnswer: 'Richtig (Wegen Krankheit in der Praxis)',
            explanation: {
              en: 'Message 2 explains: "... leider krankheitsbedingt verschieben."',
              fa: 'به دلیل بیماری پرسنل مطب دندانپزشکی، نوبت فردا باید جابجا شود.',
              prs: 'به خاطر مریضی در کلینیک دندان.',
              tr: 'Klinikteki hastalık sebebiyle randevu ertelenmek zorundadır.',
              ar: 'تم تأجيل الموعد بسبب مرض أصاب الطاقم في العيادة.',
              es: 'La cita dental se aplaza por enfermedad del personal.'
            }
          },
          {
            id: 'telc_b1_h_q18',
            question: '18. Was schlägt Stefan für die Wanderung am Sonntag vor?',
            options: ['Richtig (Einen Rundweg um den See statt des Berggipfels)', 'Falsch (Die Wanderung komplett abzusagen und ins Kino zu gehen)'],
            correctAnswer: 'Richtig (Einen Rundweg um den See statt des Berggipfels)',
            explanation: {
              en: 'Message 3: "... den Rundweg um den Tegernsee nehmen und mittags einkehren."',
              fa: 'استفان به دلیل وزش باد پیشنهاد کرد به جای قله، مسیر پیاده‌روی دور دریاچه تگرن‌زه را بروند.',
              prs: 'چکر در اطراف جهیل به جای بالا رفتن به کوه.',
              tr: 'Rüzgar nedeniyle zirveye çıkmak yerine göl çevresinde yürüyüş önerir.',
              ar: 'اقترح ستيفان المشي في المسار الدائري حول البحيرة بدلاً من صعود قمة الجبل.',
              es: 'Propone rodear el lago Tegernsee en lugar de subir a la cumbre.'
            }
          },
          {
            id: 'telc_b1_h_q19',
            question: '19. Wo befindet sich das Paket von Frau Fischer?',
            options: ['Richtig (Beim Nachbarn im Erdgeschoss, Herrn Wagner)', 'Falsch (Es wurde wieder zur Post zurückgeschickt)'],
            correctAnswer: 'Richtig (Beim Nachbarn im Erdgeschoss, Herrn Wagner)',
            explanation: {
              en: 'Message 4: "... bei Ihrem Nachbarn im Erdgeschoss, Herrn Wagner, abgegeben."',
              fa: 'بسته پستی به همسایه طبقه همکف، آقای واگنر، تحویل داده شده است.',
              prs: 'بسته پستی پیش همسایه طبقه اول، آقای واگنر است.',
              tr: 'Paket zemin kattaki komşu Bay Wagner\'e teslim edilmiştir.',
              ar: 'تم تسليم الطرد البريدي للجار في الطابق الأرضي السيد فاغنر.',
              es: 'El paquete se entregó al vecino del bajo, el señor Wagner.'
            }
          },
          {
            id: 'telc_b1_h_q20',
            question: '20. Wo findet das Volleyball-Training in den nächsten drei Wochen statt?',
            options: ['Richtig (In der Turnhalle der Realschule)', 'Falsch (Draußen im Park auf der Wiese)'],
            correctAnswer: 'Richtig (In der Turnhalle der Realschule)',
            explanation: {
              en: 'Message 5: "... mittwochs um 19 Uhr in der Halle der Realschule statt."',
              fa: 'تمرین والیبال به مدت سه هفته در سالن ورزشی رئال‌شوله (مدرسه دیگر) برگزار می‌شود.',
              prs: 'در سالن ورزشی مکتب رئال‌شوله.',
              tr: 'Voleybol antrenmanları 3 hafta boyunca Realschule spor salonunda yapılacaktır.',
              ar: 'تقام تدريبات كرة الطائرة طوال الأسابيع الثلاثة في صالة مدرسة ريئال شوله.',
              es: 'El entrenamiento de voleibol se traslada al gimnasio de la Realschule.'
            }
          }
        ]
      }
    ]
  },
  schreiben: {
    title: 'Modul Schriftlicher Ausdruck (30 Minuten • Halboffizielle / Persönliche E-Mail)',
    durationMinutes: 30,
    taskType: 'Ein Brief / Eine E-Mail an eine Behörde, einen Vermieter oder einen Arbeitgeber (ca. 100 Wörter)',
    situation: 'Sie haben vor sechs Monaten eine Weiterbildung zum Thema "Projektmanagement und Digitalisierung" begonnen. Die Abschlussprüfung findet in vier Wochen statt. Allerdings haben Sie am Prüfungstag einen wichtigen dienstlichen Auslandstermin.',
    prompt: `Schreiben Sie eine formelle Mitteilung an das Prüfungszentrum der Industrie- und Handelskammer (IHK):
1. Grund für Ihr Schreiben nennen und bisherigen Kursverlauf kurz schildern.
2. Den dienstlichen Verhinderungsgrund präzise erklären (inkl. Nachweis des Arbeitgebers).
3. Um einen alternativen Nachholtermin für die Prüfung bitten.
4. Nach den Modalitäten und eventuellen Fristen für die Umbuchung fragen.`,
    guidingPoints: [
      '1. Einleitung und Situation (Aktueller Kurs und anstehende Prüfung)',
      '2. Begründung des Prüfungsausfalls mit Bestätigung des Arbeitgebers',
      '3. Höfliche Bitte um Nachholprüfung im nächsten Semester',
      '4. Nachfrage zu Fristen, Gebühren und Formularen'
    ],
    targetWordCount: 'ca. 100-120 Wörter',
    sampleSolution: `Sehr geehrte Damen und Herren,

mein Name ist Farhad Moradi und ich nehme derzeit mit großem Erfolg an Ihrem IHK-Zertifikatslehrgang "Projektmanagement und Digitalisierung" teil. Die schriftliche Abschlussprüfung ist für den 24. Oktober angesetzt.

Leider muss ich Ihnen mitteilen, dass ich an diesem Termin aus zwingenden betrieblichen Gründen verhindert bin. Mein Arbeitgeber hat mich kurzfristig für eine viertägige Fachmesse nach Wien entsandt, um unser Unternehmen dort als Projektleiter zu vertreten. Eine entsprechende Bestätigung der Geschäftsleitung habe ich diesem Schreiben beigefügt.

Aus diesem Grund möchte ich mich erkundigen, ob die Möglichkeit besteht, die Prüfung zu einem späteren Nachholtermin – beispielsweise im Rahmen des Frühjahrsdurchgangs – abzulegen. Teilen Sie mir bitte mit, welche Fristen hierbei zu beachten sind und ob für die Umbuchung zusätzliche Gebühren anfallen.

Ich bedanke mich herzlich für Ihr Verständnis und Ihre Unterstützung.

Mit freundlichen Grüßen,
Farhad Moradi`,
    scoringCriteria: {
      en: 'Fulfillment of all 4 guiding points (15 pts), communicative design & register (15 pts), correctness of grammar and vocabulary (15 pts). Max 45 points.',
      fa: 'پوشش هر ۴ نکته راهنما (۱۵ نمره)، رعایت ساختار و لحن رسمی نامه (۱۵ نمره)، صحت گرامر و کاربرد واژگان (۱۵ نمره). مجموع: ۴۵ نمره.',
      prs: '۴ نکته راهنما، ساختار نامه و درستی گرامر سنجیده می‌شود.',
      tr: '4 maddenin eksiksiz işlenmesi (15 p), biçimsel uygunluk (15 p), dilbilgisi ve kelime doğruluğu (15 p). Toplam 45 puan.',
      ar: 'استيفاء النقاط الأربع (15 درجة)، الصياغة والأسلوب الرسمي (15 درجة)، سلامة القواعد والمفردات (15 درجة). المجموع: 45 درجة.',
      es: 'Tratamiento de los 4 puntos (15 pts), adecuación formal (15 pts), corrección gramatical y léxica (15 pts).'
    }
  },
  sprechen: {
    title: 'Modul Mündliche Prüfung (ca. 15 Minuten • Paarprüfung in 3 Teilen)',
    durationMinutes: 15,
    teil1: {
      name: 'Teil 1: Kontaktaufnahme (ca. 3 Minuten)',
      instruction: {
        en: 'Introduce yourself to the examiners and ask your examination partner personal and professional questions based on prompts.',
        fa: 'خود را به داوران معرفی کنید و با پرسیدن سوالات تکمیلی از علایق، شغل و برنامه‌های آینده پارتنر خود جویا شوید.',
        prs: 'معرفی خود و پرسیدن سوال از پارتنر تان.',
        tr: 'Kendinizi tanıtın ve partnerinize mesleği, hobileri ve gelecek planları hakkında sorular yöneltin.',
        ar: 'قدم نفسك للجنة التحكيم وتبادل الأسئلة الشخصية والمهنية مع زميلك في الامتحان.',
        es: 'Preséntate y formula preguntas personales y laborales a tu compañero.'
      },
      prompts: ['Name & Herkunft', 'Wohnort & Familie', 'Beruf & Sprachen', 'Hobbys & Freizeitgestaltung'],
      sampleResponse: `Kandidat A: "Guten Tag! Mein Name ist Farhad Moradi. Ich komme aus Afghanistan, lebe seit vier Jahren in Frankfurt und arbeite als Fachinformatiker für Systemintegration. In meiner Freizeit spiele ich gerne Volleyball und lerne fleißig Deutsch. Und woher kommst du, Maria?"
Kandidatin B: "Hallo Farhad! Ich komme aus Valencia in Spanien. Ich habe vor einem Jahr mein Pharmaziestudium beendet und mache nun ein Praktikum in einer Apotheke."`
    },
    teil2: {
      name: 'Teil 2: Gespräch über ein Thema (ca. 6 Minuten)',
      instruction: {
        en: 'Speak about a topic from personal experience, state your opinion, explain the situation in your homeland, and discuss pros and cons with your partner.',
        fa: 'درباره یک موضوع اجتماعی صحبت کنید: تجربیات شخصی، وضعیت در کشور زادگاه، مزایا و معایب را مقایسه کرده و با همتای خود بحث کنید.',
        prs: 'بحث درباره یک موضوع و مقایسه تجربیات با کشور مادری.',
        tr: 'Belirlenen konu üzerine kişisel deneyimlerinizi aktarın, memleketinizdeki durumu anlatın ve artı-eksileri tartışın.',
        ar: 'تحدث حول موضوع مجتمعي محدد، واعرض تجربتك الشخصية والوضع في بلدك الأم وناقش الإيجابيات والسلبيات مع زميلك.',
        es: 'Expón sobre un tema compartiendo vivencias personales, la situación en tu país y debatiendo ventajas e inconvenientes.'
      },
      topicCards: [
        'Thema 1: Brauchen Kinder schon in der Grundschule Smartphones?',
        'Thema 2: Leben in der Großstadt oder auf dem Land?',
        'Thema 3: Gesunde Ernährung im hektischen Berufsalltag'
      ],
      sampleResponse: `Kandidat A: "Ich halte Smartphones in der Grundschule für problematisch. Kinder sollten sich in den Pausen bewegen und miteinander spielen, statt stundenlang auf Bildschirme zu starren. In meinem Heimatland besitzen Kinder erst ab 14 Jahren ein Handy. Wie siehst du das, Maria?"
Kandidatin B: "Ich verstehe deine Sorge, Farhad. Allerdings nutzen viele Eltern das Handy zur Sicherheit, um zu wissen, ob ihr Kind sicher an der Schule angekommen ist. Meiner Meinung nach kommt es auf feste Regeln und zeitliche Begrenzungen an."`
    },
    teil3: {
      name: 'Teil 3: Gemeinsam eine Aufgabe lösen (ca. 6 Minuten)',
      instruction: {
        en: 'Plan an event or solve a concrete problem together with your partner. Exchange suggestions, respond to objections, and agree on a concrete schedule.',
        fa: 'با همتای خود برنامه‌ریزی یک رویداد واقعی را انجام دهید: پیشنهاد دهید، با مخالفت‌ها تعامل کنید و به یک تصمیم و زمان‌بندی مشترک برسید.',
        prs: 'یک پلان مشترک برای یک برنامه یا مهمانی بسازید و با هم توافق کنید.',
        tr: 'Partnerinizle birlikte bir organizasyon planlayın, önerilerde bulunun, itirazları uzlaştırın ve ortak bir karar verin.',
        ar: 'خطط لمناسبة أو فعالية مع زميلك، وقدم مقترحات ورد على الاعتراضات وتوصل إلى اتفاق مشترك.',
        es: 'Planifica una actividad conjunta con tu compañero rebatiendo propuestas hasta alcanzar un acuerdo.'
      },
      planningScenario: 'Organisation einer Abschiedsfeier für eine beliebte Kollegin, die in den Ruhestand geht',
      discussionPoints: [
        'Wann und wo soll die Feier stattfinden?',
        'Was für ein persönliches Abschiedsgeschenk besorgen wir?',
        'Wer kümmert sich um Essen und Getränke (Buffet)?',
        'Wie überraschen wir die Kollegin (Rede, Fotobuch)?'
      ],
      sampleResponse: `Kandidat A: "Da Frau Weber nach 25 Jahren in den Ruhestand geht, sollten wir ihr einen unvergesslichen Abschied bereiten. Ich schlage vor, dass wir nächsten Freitag ab 16 Uhr im Konferenzraum feiern. Was hältst du davon?"
Kandidatin B: "Das ist ein hervorragender Vorschlag! Ich könnte ein Buffet mit Fingerfood und Säften organisieren. Was schenken wir ihr?"
Kandidat A: "Wir wissen alle, dass sie gerne gärtnert. Wie wäre es mit einem Gutschein für eine große Baumschule und einem Fotobuch mit persönlichen Grüßen aller Kollegen?"
Kandidatin B: "Perfekt! Ich übernehme das Fotobuch und du besorgst den Gutschein."`
    }
  }
};
