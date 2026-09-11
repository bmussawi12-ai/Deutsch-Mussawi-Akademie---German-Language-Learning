import { StandardizedExam } from '../types';

// =========================================================================
// GOETHE- / TELC ZERTIFIKAT B2 (STANDARD: 195 MINUTEN)
// Lesen: 65 Min (30 Aufgaben) | Hören: 40 Min (30 Aufgaben) | Schreiben: 75 Min | Sprechen: 15 Min
// =========================================================================
export const EXAM_GOETHE_B2: StandardizedExam = {
  id: 'exam_goethe_b2',
  title: 'Goethe- / telc Zertifikat B2 (Offizieller Standard)',
  standard: 'Goethe-Zertifikat',
  level: 'B2.1',
  totalDurationMinutes: 195,
  passingScore: '60% (60 / 100 Punkte)',
  strategy: {
    level: 'B2.1',
    timeManagement: [
      {
        section: 'Lesen (Reading) - 30 Aufgaben',
        allocatedMinutes: 65,
        tip: {
          en: '30 tasks in 65 minutes. Teil 1 (5): Global comprehension of articles. Teil 2 (5): Structural reconstruction. Teil 3 (6): Author stances. Teil 4 (6): Factual texts. Teil 5 (8): Grammar and vocabulary in context (Sprachbausteine).',
          fa: '۳۰ سوال در ۶۵ دقیقه. بخش ۱ (۵ سوال): درک کلی مقالات تخصصی. بخش ۲ (۵ سوال): ساختار متن. بخش ۳ (۶ سوال): دیدگاه‌های نویسندگان. بخش ۴ (۶ سوال): متون تشریحی. بخش ۵ (۸ سوال): اجزای زبانی و گرامر در متن (Sprachbausteine).',
          prs: '۳۰ سوال در ۶۵ دقیقه شامل ۵ بخش لغت و گرامر پیشرفته.',
          tr: '65 dakikada 30 soru. Makale anlama, metin kurgusu, yazar tutumu ve Sprachbausteine gramer testi.',
          ar: '30 سؤالاً في 65 دقيقة للقراءة وقواعد اللغة في السياق.',
          es: '30 preguntas en 65 minutos incluyendo Sprachbausteine.'
        }
      },
      {
        section: 'Hören (Listening) - 30 Aufgaben',
        allocatedMinutes: 40,
        tip: {
          en: '30 tasks in 40 minutes. Teil 1 (5): News and commentary. Teil 2 (10): In-depth expert interview. Teil 3 (6): Discussion with multiple speakers. Teil 4 (9): Academic lecture presentation.',
          fa: '۳۰ سوال در ۴۰ دقیقه. بخش ۱ (۵ سوال): اخبار و گزارش. بخش ۲ (۱۰ سوال): مصاحبه تخصصی با کارشناس. بخش ۳ (۶ سوال): گفتگوی چندجانبه. بخش ۴ (۹ سوال): سخنرانی علمی.',
          prs: '۳۰ سوال شنیداری در ۴۰ دقیقه شامل مصاحبه عمیق و سخنرانی تخصصی.',
          tr: '40 dakikada 30 soru. Haberler, derinlemesine uzman mülakatı, tartışma ve sunum.',
          ar: '30 سؤالاً في 40 دقيقة استماع تشمل مقابلة مع خبير ومحاضرة علمية.',
          es: '30 preguntas de comprensión auditiva en 40 minutos.'
        }
      },
      {
        section: 'Schreiben (Writing) - 2 Aufgaben',
        allocatedMinutes: 75,
        tip: {
          en: 'Aufgabe 1 (45 min, ~150 words): Formal opinion/essay on a social controversy. Aufgabe 2 (30 min, ~100 words): Official formal complaint or inquiry letter to a business/authority.',
          fa: 'بخش ۱ (۴۵ دقیقه، حدود ۱۵۰ کلمه): مقاله تحلیلی پیرامون یک موضوع چالش‌برانگیز اجتماعی. بخش ۲ (۳۰ دقیقه، حدود ۱۰۰ کلمه): نامه اداری رسمی یا اعتراض‌نامه به یک شرکت/نهاد.',
          prs: 'دو بخش نگارش رسمی در ۷۵ دقیقه با کلمات مناسب سطح B2.',
          tr: '75 dakikada 2 görev: Toplumsal konuda görüş yazısı ve resmi şikayet mektubu.',
          ar: '75 دقيقة لمهمتين: مقال رأي حول قضية اجتماعية، ورسالة شكوى رسمية.',
          es: '75 minutos para 2 tareas formales: ensayo y carta de reclamación.'
        }
      }
    ],
    stepByStepStrategies: [
      {
        title: 'B2 Sprachbausteine & Textrekonstruktion',
        steps: [
          {
            en: '1. Scan headings and topic sentences. 2. Look for connective links (zwar... aber, nicht nur... sondern auch, in Anbetracht). 3. Check prepositions with Genitive and Dative.',
            fa: '۱. تیترها و جملات آغازین را مرور کنید. ۲. حروف ربط دوتایی و پیونددهنده را بیابید. ۳. حروف اضافه با حالت ملکی (Genitiv) و مفعولی غیرمستقیم (Dativ) را چک کنید.',
            prs: '۱. جملات آغازین را مرور کنید. ۲. روابط گرامری را بررسی کنید.',
            tr: '1. Başlıkları tarayın. 2. İkili bağlaçları arayın. 3. Genitiv ve Dativ edatlarını denetleyin.',
            ar: '1. اقرأ الجمل المفتاحية. 2. انتبه للروابط الثنائية. 3. راجع حروف الجر مع المجرور والإضافة.',
            es: '1. Revisa oraciones temáticas. 2. Conectores correlativos. 3. Preposiciones de genitivo y dativo.'
          }
        ]
      }
    ],
    commonMistakes: [
      {
        mistake: 'Using colloquial expressions in official writing tasks.',
        correction: 'In B2 writing, employ formal nominal style and noun-verb collocations (z. B. "zur Verfügung stehen", "in Betracht ziehen", "Stellung nehmen").',
        explanation: {
          en: 'Colloquial words fail the register requirements of B2. Formal functional verbs are mandatory.',
          fa: 'واژگان عامیانه با معیارهای B2 همخوانی ندارند. استفاده از ترکیبات اسمی-فعلی اداری (Nomen-Verb-Verbindungen) الزامی است.',
          prs: 'در B2 از اصطلاحات رسمی اداری و اسمی استفاده کنید.',
          tr: 'B2 düzeyinde resmi Nomen-Verb-Verbindung kalıpları zorunludur.',
          ar: 'في مستوى B2 يُشترط استخدام الأسلوب الاسمي والتعابير الاصطلاحية الرسمية.',
          es: 'En el nivel B2 es imperativo el uso de construcciones nominales formales.'
        }
      }
    ]
  },
  lesen: {
    title: 'Modul Lesen (65 Minuten • 30 Aufgaben)',
    durationMinutes: 65,
    texts: [
      {
        title: 'Teil 1: Fachartikel über Künstliche Intelligenz in der Medizin (Aufgaben 1 bis 5)',
        sourceType: 'Wissenschaftsjournal "Forschung & Gesundheit"',
        body: 'Künstliche Intelligenz (KI) revolutioniert zunehmend den klinischen Alltag in deutschen Krankenhäusern. Insbesondere in der Radiologie und Dermatologie übertreffen hochspezialisierte Algorithmen bei der Erkennung von bösartigen Tumoren mitunter die Trefferquote erfahrener Fachärzte. Ein System der Universitätsklinik Heidelberg analysierte über 100.000 Hautveränderungen und diagnostizierte Melanome mit einer Genauigkeit von 95 Prozent. Dennoch betonen Medizinerverbände und Ethikräte unisono, dass die KI den Menschen keineswegs ersetzen könne oder dürfe. Vielmehr diene die Software als diagnostisches Assistenzsystem. Die endgültige therapeutische Entscheidung, das empathische Patientengespräch sowie die rechtliche Haftung verbleiben ausnahmslos in den Händen des behandelnden Arztes.',
        questions: [
          {
            id: 'b2_l_q1',
            question: '1. In welchen Fachbereichen erzielen KI-Algorithmen bereits besonders hohe Trefferquoten?',
            options: ['a) In der Radiologie und Dermatologie', 'b) In der Kinder- und Jugendpsychiatrie', 'c) In der Notfallchirurgie auf Unfallstationen'],
            correctAnswer: 'a) In der Radiologie und Dermatologie',
            explanation: {
              en: 'Text explicitly highlights radiology and dermatology ("Insbesondere in der Radiologie und Dermatologie...").',
              fa: 'متن به طور ویژه رادیولوژی و پوست‌شناسی (درماتولوژی) را ذکر می‌کند.',
              prs: 'رادیولوژی و جلدی بخش‌های اصلی هستند.',
              tr: 'Metinde özellikle radyoloji ve dermatoloji belirtilmektedir.',
              ar: 'يحدد النص مجالي الأشعة والأمراض الجلدية تحديداً.',
              es: 'El texto señala la radiología y la dermatología.'
            }
          },
          {
            id: 'b2_l_q2',
            question: '2. Wie hoch war die Diagnosegenauigkeit des Heidelberger Systems bei Hautmelanomen?',
            options: ['a) Rund 75 Prozent', 'b) Genau 85 Prozent', 'c) Bei beachtlichen 95 Prozent'],
            correctAnswer: 'c) Bei beachtlichen 95 Prozent',
            explanation: {
              en: 'Report confirms: "... diagnostizierte Melanome mit einer Genauigkeit von 95 Prozent."',
              fa: 'سیستم هوش مصنوعی دانشگاه هایدلبرگ دقت ۹۵ درصدی داشت.',
              prs: 'دقت سیستم ۹۵ فیصد بوده است.',
              tr: 'Sistem melanomları %95 doğrulukla teşhis etmiştir.',
              ar: 'شخصت المنظومة الأورام بدقة بلغت 95 بالمئة.',
              es: 'Diagnosticó melanomas con una precisión del 95 por ciento.'
            }
          },
          {
            id: 'b2_l_q3',
            question: '3. Mediziner und Ethiker fordern, dass Ärzte vollständig durch Software ersetzt werden.',
            options: ['Richtig', 'Falsch'],
            correctAnswer: 'Falsch',
            explanation: {
              en: 'Ethics councils emphasize AI cannot and must not replace human doctors ("keineswegs ersetzen könne oder dürfe").',
              fa: 'جامعه پزشکی و اخلاق تاکید دارند هوش مصنوعی هرگز نباید جایگزین پزشک شود.',
              prs: 'هوش مصنوعی نباید جای داکتر را بگیرد.',
              tr: 'Yapay zekanın asla hekimlerin yerini alamayacağı vurgulanmaktadır.',
              ar: 'المجالس الطبية والأخلاقية ترفض تماماً استبدال الطبيب بالبرمجيات.',
              es: 'Se subraya que la IA de ningún modo debe sustituir al médico.'
            }
          },
          {
            id: 'b2_l_q4',
            question: '4. Welche Rolle soll KI-Software nach Ansicht der Fachverbände einnehmen?',
            options: ['a) Die vollständige Leitung von Universitätskliniken', 'b) Die Funktion eines unterstützenden diagnostischen Assistenzsystems', 'c) Die Festlegung von Medikamentenpreisen'],
            correctAnswer: 'b) Die Funktion eines unterstützenden diagnostischen Assistenzsystems',
            explanation: {
              en: 'Role defined: "Vielmehr diene die Software als diagnostisches Assistenzsystem."',
              fa: 'نرم‌افزار صرفاً به عنوان یک سیستم کمکی و دستیار تشخیصی عمل می‌کند.',
              prs: 'نرم‌افزار به عنوان معاون تشخیص استفاده می‌شود.',
              tr: 'Yazılım teşhis koymada yardımcı bir destek sistemi olarak görev yapmalıdır.',
              ar: 'تعمل البرمجية كنظام مساعد تشخيصي داعم.',
              es: 'Actúa como un sistema de asistencia diagnóstica complementario.'
            }
          },
          {
            id: 'b2_l_q5',
            question: '5. Wer trägt laut Text die rechtliche Haftung für die Behandlungsentscheidung?',
            options: ['a) Die Entwickler der Software', 'b) Die Krankenkasse des Patienten', 'c) Ausnahmslos der behandelnde Arzt'],
            correctAnswer: 'c) Ausnahmslos der behandelnde Arzt',
            explanation: {
              en: 'Legal liability: "... verbleiben ausnahmslos in den Händen des behandelnden Arztes."',
              fa: 'مسئولیت و پاسخگویی حقوقی بدون استثناء بر عهده پزشک معالج است.',
              prs: 'مسئولیت قانونی کاملاً به دوش داکتر معالج است.',
              tr: 'Yasal sorumluluk istisnasız tedavi eden hekime aittir.',
              ar: 'المسؤولية القانونية تقع حصراً واستثناءً على عاتق الطبيب المعالج.',
              es: 'La responsabilidad legal recae sin excepción en el médico.'
            }
          }
        ]
      },
      {
        title: 'Teil 2: Fachtext "Die Transformation der Energiewirtschaft" (Aufgaben 6 bis 10)',
        sourceType: 'Wirtschaftspolitischer Fachaufsatz',
        body: 'Die Dekarbonisierung der deutschen Industrie stellt die größte infrastrukturelle Herausforderung seit der industriellen Revolution dar. Bis zum Jahr 2045 soll die Bundesrepublik vollständige Klimaneutralität erreichen. Der Schlüssel hierzu liegt in der massiven Skalierung von grünem Wasserstoff, der mithilfe erneuerbarer Energien aus Wasser gewonnen wird. Stahl- und Chemiekonzerne investieren Milliardenbeträge in Elektrolyseure, um fossile Brennstoffe wie Kohle und Erdgas abzulösen. Allerdings warnt der Bundesverband der Energie- und Wasserwirtschaft (BDEW) vor gravierenden Engpässen bei den Transportnetzen. Ohne ein flächendeckendes Pipelinenetz und leistungsfähige Stromtrassen von Nord- nach Süddeutschland drohe der ökonomische Umbau ins Stocken zu geraten.',
        questions: [
          {
            id: 'b2_l_q6',
            question: '6. Bis zu welchem Zieljahr soll Deutschland klimaneutral sein?',
            options: ['Bis 2030', 'Bis 2045', 'Bis 2060'],
            correctAnswer: 'Bis 2045',
            explanation: {
              en: 'Target year: "Bis zum Jahr 2045 soll die Bundesrepublik vollständige Klimaneutralität erreichen."',
              fa: 'هدف تعیین‌شده سال ۲۰۴۵ برای دستیابی به بی‌طرفی اقلیمی کامل است.',
              prs: 'تا سال ۲۰۴۵ آلمان باید به صفر اقلیمی برسد.',
              tr: 'Hedeflenen yıl 2045\'tir.',
              ar: 'الهدف المحدد للوصول إلى الحياد المناخي هو عام 2045.',
              es: 'El objetivo fijado es el año 2045.'
            }
          },
          {
            id: 'b2_l_q7',
            question: '7. Welche Technologie gilt laut Text als der zentrale Schlüssel für die Dekarbonisierung?',
            options: ['a) Der Ausbau von Atomkraftwerken', 'b) Die Skalierung von grünem Wasserstoff', 'c) Der Import von Schiefergas'],
            correctAnswer: 'b) Die Skalierung von grünem Wasserstoff',
            explanation: {
              en: 'Key technology: "Der Schlüssel hierzu liegt in der massiven Skalierung von grünem Wasserstoff...".',
              fa: 'هیدروژن سبز کلید اصلی جایگزینی سوخت‌های فسیلی است.',
              prs: 'هایدروجن سبز کلید اصلی است.',
              tr: 'Yeşil hidrojenin yaygınlaştırılması temel anahtar olarak görülmektedir.',
              ar: 'التوسع الهائل في إنتاج الهيدروجين الأخضر هو المفتاح الرئيسي.',
              es: 'La expansión masiva del hidrógeno verde es la clave.'
            }
          },
          {
            id: 'b2_l_q8',
            question: '8. In welche Anlagen investieren Stahl- und Chemiekonzerne Milliardenbeträge?',
            options: ['a) In Elektrolyseure zur Wasserstoffproduktion', 'b) In neue Kohlebergwerke', 'c) In Dieselgeneratoren'],
            correctAnswer: 'a) In Elektrolyseure zur Wasserstoffproduktion',
            explanation: {
              en: 'Investment focus: "... investieren Milliardenbeträge in Elektrolyseure".',
              fa: 'صنایع فولاد و شیمی مبالغ میلیاردی در دستگاه‌های الکترولیز سرمایه‌گذاری می‌کنند.',
              prs: 'در دستگاه‌های الکترولیز سرمایه‌گذاری می‌کنند.',
              tr: 'Milyarlarca Euro elektroliz tesislerine yatırılmaktadır.',
              ar: 'استثمارات بمليارات اليوروهات في أجهزة التحليل الكهربائي.',
              es: 'Invierten miles de millones en electrolizadores.'
            }
          },
          {
            id: 'b2_l_q9',
            question: '9. Wovor warnt der Branchenverband BDEW ausdrücklich?',
            options: ['a) Vor sinkenden Strompreisen', 'b) Vor gravierenden Engpässen bei den Transport- und Pipelinenetzen', 'c) Vor einem Überangebot an Fachkräften'],
            correctAnswer: 'b) Vor gravierenden Engpässen bei den Transport- und Pipelinenetzen',
            explanation: {
              en: 'Warning: "... warnt der Bundesverband (...) vor gravierenden Engpässen bei den Transportnetzen."',
              fa: 'هشدار درباره کمبودها و تنگناهای شدید در شبکه انتقال و لوله‌کشی گاز.',
              prs: 'هشدار درباره کمبود پایپ‌لاین‌ها و شبکه‌های انتقال.',
              tr: 'BDEW iletim ve boru hatlarındaki ciddi darboğazlar konusunda uyarmaktadır.',
              ar: 'التحذير من اختناقات حادة في شبكات النقل وخطوط الأنابيب.',
              es: 'Alerta de graves cuellos de botella en las redes de transporte.'
            }
          },
          {
            id: 'b2_l_q10',
            question: '10. Was droht, falls Stromtrassen und Pipelinenetze nicht zügig ausgebaut werden?',
            options: ['a) Ein Scheitern des ökonomischen Umbaus', 'b) Eine Senkung der Mehrwertsteuer', 'c) Das Ende des Online-Handels'],
            correctAnswer: 'a) Ein Scheitern des ökonomischen Umbaus',
            explanation: {
              en: 'Consequence: "... drohe der ökonomische Umbau ins Stocken zu geraten."',
              fa: 'خطر متوقف شدن تحول و بازسازی ساختاری اقتصاد وجود دارد.',
              prs: 'خطر کند شدن تحول اقتصادی وجود دارد.',
              tr: 'Ekonomik dönüşümün durma noktasına gelme tehlikesi bulunmaktadır.',
              ar: 'تعثر وخطر توقف مسار التحول الاقتصادي.',
              es: 'Peligro de que la transformación económica quede estancada.'
            }
          }
        ]
      },
      {
        title: 'Teil 3: Sprachbausteine: Grammatik und Lexik im Kontext (Aufgaben 11 bis 18)',
        sourceType: 'Lückentext aus einer juristischen Stellungnahme',
        body: 'Sehr geehrte Damen und Herren,\n\nin Anbetracht der aktuellen Gesetzeslage möchten wir Sie (11)____ hinweisen, dass der vorliegende Vertrag fristgerecht gekündigt werden kann, (12)____ bestimmte Bedingungen erfüllt sind. Entgegen den Behauptungen der Gegenseite (13)____ die vertraglichen Pflichten bisher lückenlos eingehalten. Wir bitten Sie daher höflich, von weiteren rechtlichen Schritten (14)____ . Es (15)____ sich bei dem Vorfall um ein bedauerliches Missverständnis, das im persönlichen Gespräch (16)____ werden sollte. Sollten Sie an einer außergerichtlichen Einigung interessiert sein, stehen wir Ihnen jederzeit gerne zur (17)____ . Wir sehen Ihrer geschätzten Rückmeldung mit großem Interesse (18)____ .',
        questions: [
          {
            id: 'b2_l_q11',
            question: '11. Welche Präpositionalergänzung passt in Lücke 11 ("hinweisen")?',
            options: ['darauf', 'davon', 'worüber'],
            correctAnswer: 'darauf',
            explanation: {
              en: 'Collocation is "hinweisen auf + Akk" -> "darauf hinweisen".',
              fa: 'حرف اضافه فعل hinweisen auf است و ضمیر قیدی آن darauf می‌شود.',
              prs: 'ترکیب درست darauf hinweisen است.',
              tr: 'Doğru kullanım "darauf hinweisen" kalıbıdır.',
              ar: 'الفعل hinweisen يتعدى بحرف الجر auf وبالتالي فالصيغة هي darauf.',
              es: 'La preposición que rige hinweisen es auf, por tanto "darauf hinweisen".'
            }
          },
          {
            id: 'b2_l_q12',
            question: '12. Welche Konjunktion passt in Lücke 12?',
            options: ['obwohl', 'sofern', 'während'],
            correctAnswer: 'sofern',
            explanation: {
              en: 'Conditional connector: "sofern" (= falls / unter der Bedingung, dass).',
              fa: 'حرف ربط شرطی: sofern به معنای در صورتی که / به شرطی که.',
              prs: 'sofern به معنای به شرطی که است.',
              tr: 'Koşul bağlacı olarak "sofern" (şayet/eğer) uygundur.',
              ar: 'أداة الربط الشرطية sofern بمعنى بشرط أن أو إذا ما.',
              es: 'Conjunción condicional: "sofern" (en caso de que / siempre que).'
            }
          },
          {
            id: 'b2_l_q13',
            question: '13. Welche Passivform passt in Lücke 13 ("die vertraglichen Pflichten bisher eingehalten")?',
            options: ['wurden', 'worden sind', 'werden'],
            correctAnswer: 'wurden',
            explanation: {
              en: 'Past passive: "... wurden die vertraglichen Pflichten bisher lückenlos eingehalten."',
              fa: 'مجهول گذشته: wurden eingehalten.',
              prs: 'شکل مجهول گذشته wurden است.',
              tr: 'Geçmiş zaman edilgen yapısı olarak "wurden" doğrudur.',
              ar: 'صيغة المبني للمجهول في الماضي البسيط: wurden eingehalten.',
              es: 'Pasiva de pretérito imperfecto: "wurden eingehalten".'
            }
          },
          {
            id: 'b2_l_q14',
            question: '14. Welches Verb passt zum Infinitiv mit zu ("von Schritten...")?',
            options: ['abzusehen', 'aufzuhören', 'auszugehen'],
            correctAnswer: 'abzusehen',
            explanation: {
              en: 'Idiom: "von rechtlichen Schritten absehen" (to refrain from legal action).',
              fa: 'ترکیب حقوقی: von Schritten absehen یعنی صرف‌نظر کردن از اقدامات قانونی.',
              prs: 'absehen یعنی صرف نظر کردن.',
              tr: 'Hukuki kalıp: "von rechtlichen Schritten absehen" (yasal adımdan vazgeçmek).',
              ar: 'التعبير الاصطلاحي القانوني: von Schritten absehen أي العدول عن الإجراءات.',
              es: 'Modismo formal: "von Schritten absehen" (abstenerse de acciones).'
            }
          },
          {
            id: 'b2_l_q15',
            question: '15. Welches reflexive Verb passt in Lücke 15 ("Es ____ sich um...")?',
            options: ['handelt', 'geht', 'bezieht'],
            correctAnswer: 'handelt',
            explanation: {
              en: 'Idiom: "Es handelt sich um + Akk" (it is a matter of / it concerns).',
              fa: 'ترکیب: Es handelt sich um (موضوع عبارت است از...).',
              prs: 'Es handelt sich um ساختار درست است.',
              tr: '"Es handelt sich um" kalıbı uygundur.',
              ar: 'التركيب المألوف: Es handelt sich um (الأمر يتعلق بـ).',
              es: 'Construcción fija: "Es handelt sich um".'
            }
          },
          {
            id: 'b2_l_q16',
            question: '16. Welches Partizip II passt in Lücke 16 ("im Gespräch ____ werden")?',
            options: ['aufgeklärt', 'verpasst', 'zerstört'],
            correctAnswer: 'aufgeklärt',
            explanation: {
              en: '"Ein Missverständnis aufklären" (to clear up a misunderstanding).',
              fa: 'ترکیب زبانی: Aufklärung eines Missverständnisses (رفع و روشن کردن سوءتفاهم).',
              prs: 'aufgeklärt یعنی برطرف ساخته شده.',
              tr: 'Yanlış anlamayı gidermek için "aufklären" fiili kullanılır.',
              ar: 'توضيح سوء الفهم: ein Missverständnis aufklären.',
              es: 'Aclarar un malentendido: "aufklären".'
            }
          },
          {
            id: 'b2_l_q17',
            question: '17. Welches Nomen vervollständigt die feste Verbindung "zur ____ stehen"?',
            options: ['Verfügung', 'Bewerbung', 'Berechnung'],
            correctAnswer: 'Verfügung',
            explanation: {
              en: 'Noun-verb collocation: "zur Verfügung stehen" (to be available / at disposal).',
              fa: 'اصطلاح رسمی: zur Verfügung stehen (در دسترس و در خدمت بودن).',
              prs: 'zur Verfügung stehen در خدمت بودن است.',
              tr: 'Nomen-Verb-Verbindung: "zur Verfügung stehen".',
              ar: 'المركب الفعلي الاسمي: zur Verfügung stehen أي البقاء تحت التصرف.',
              es: 'Locución verbal fija: "zur Verfügung stehen".'
            }
          },
          {
            id: 'b2_l_q18',
            question: '18. Welches Verb passt zu "mit großem Interesse ____"?',
            options: ['entgegen', 'hinauf', 'vorbei'],
            correctAnswer: 'entgegen',
            explanation: {
              en: 'Formal business closing: "einer Rückmeldung entgegensehen" (to look forward to a reply).',
              fa: 'عبارت رسمی پایانی: einer Sache entgegensehen (با اشتیاق منتظر پاسخ بودن).',
              prs: 'entgegensehen اصطلاح مکاتبه رسمی است.',
              tr: 'Resmi mektup kapanış kalıbı: "einer Rückmeldung entgegensehen".',
              ar: 'عبارة الختام الرسمية في المراسلات: einer Rückmeldung entgegensehen.',
              es: 'Fórmula epistolar formal: "einer Rückmeldung entgegensehen".'
            }
          }
        ]
      },
      {
        title: 'Teil 4 & 5: Ausführliche Thesen und Kontroversen (Aufgaben 19 bis 30)',
        sourceType: 'Wissenschaftlicher Sammelband',
        body: 'Textauszug zur Debatte über Bedingungsloses Grundeinkommen (BGE):\nBefürworter argumentieren, das BGE beseitige existenzielle Ängste, stärke die Verhandlungsmacht von Arbeitnehmern und fördere ehrenamtliches Engagement sowie kreative Gründungen. Kritiker hingegen verweisen auf drohende volkswirtschaftliche Fehlallokationen: Ein monatlicher Betrag von 1.200 Euro für jeden Erwachsenen würde jährliche Staatsausgaben von rund 800 Milliarden Euro erfordern, was zwangsläufig drastische Steuererhöhungen oder den Rückbau bewährter Sozialsysteme nach sich zöge. Zudem bestehe das Risiko, dass Geringqualifizierte dem Arbeitsmarkt dauerhaft fernbleiben.',
        questions: [
          {
            id: 'b2_l_q19',
            question: '19. Welcher Vorteil des BGE wird im Text genannt?',
            options: ['a) Vollständige Abschaffung des Geldes', 'b) Beseitigung existenzieller Ängste und Stärkung von Verhandlungsmacht', 'c) Verbot von Überstunden'],
            correctAnswer: 'b) Beseitigung existenzieller Ängste und Stärkung von Verhandlungsmacht',
            explanation: {
              en: 'Text clarifies: "... beseitige existenzielle Ängste, stärke die Verhandlungsmacht von Arbeitnehmern".',
              fa: 'از بین رفتن ترس‌های وجودی و تقویت قدرت چانه‌زنی کارگران.',
              prs: 'از بین رفتن ترس‌های معیشتی و بالا رفتن قدرت کارگران.',
              tr: 'Varoluşsal korkuların giderilmesi ve çalışanların pazarlık gücünün artması.',
              ar: 'إزالة المخاوف المعيشية وتعزيز القوة التفاوضية للموظفين.',
              es: 'Eliminación del miedo existencial y fortalecimiento del poder de negociación.'
            }
          },
          {
            id: 'b2_l_q20',
            question: '20. Welche finanzielle Belastung befürchten Ökonomen bei einem Grundeinkommen von 1.200 Euro?',
            options: ['a) Rund 80 Milliarden Euro', 'b) Jährliche Staatsausgaben von rund 800 Milliarden Euro', 'c) Keine zusätzlichen Ausgaben'],
            correctAnswer: 'b) Jährliche Staatsausgaben von rund 800 Milliarden Euro',
            explanation: {
              en: 'Estimated cost: "... jährliche Staatsausgaben von rund 800 Milliarden Euro".',
              fa: 'هزینه سرسام‌آور سالانه حدود ۸۰۰ میلیارد یورو برای دولت.',
              prs: 'حدود ۸۰۰ میلیارد یورو در سال.',
              tr: 'Yıllık yaklaşık 800 milyar Euro devlet harcaması öngörülmektedir.',
              ar: 'نفقات حكومية سنوية تقدر بنحو 800 مليار يورو.',
              es: 'Gastos públicos anuales de unos 800.000 millones de euros.'
            }
          }
,
          {
            id: 'b2_l_q21',
            question: '21. Welches finanzielle Gesamtvolumen würde das bedingungslose Grundeinkommen laut Kritikern jährlich erfordern?',
            options: ['a) Rund 80 Milliarden Euro', 'b) Rund 800 Milliarden Euro', 'c) Circa 120 Milliarden Euro'],
            correctAnswer: 'b) Rund 800 Milliarden Euro',
            explanation: {
              en: 'Estimated budget: "... jährliche Staatsausgaben von rund 800 Milliarden Euro...".',
              fa: 'بودجه سالانه مورد نیاز بر اساس برآورد منتقدان حدود ۸۰۰ میلیارد یورو خواهد بود.',
              prs: 'حدود ۸۰۰ میلیارد یورو در سال مصرف خواهد داشت.',
              tr: 'Eleştirmenlere göre yıllık yaklaşık 800 milyar Euro bütçe gerekmektedir.',
              ar: 'الميزانية التقديرية السنوية تبلغ حوالي 800 مليار يورو وفقاً للمنتقدين.',
              es: 'Un volumen presupuestario anual de unos 800.000 millones de euros.'
            }
          },
          {
            id: 'b2_l_q22',
            question: '22. Welche Befürchtung bezüglich Geringqualifizierter formulieren Arbeitsmarktökonomen?',
            options: ['a) Sie fordern überhöhte Gehälter', 'b) Sie könnten dem Arbeitsmarkt dauerhaft fernbleiben', 'c) Sie wandern massenhaft ins Ausland ab'],
            correctAnswer: 'b) Sie könnten dem Arbeitsmarkt dauerhaft fernbleiben',
            explanation: {
              en: 'Risk identified: "... Risiko, dass Geringqualifizierte dem Arbeitsmarkt dauerhaft fernbleiben."',
              fa: 'خطر اینکه افراد کم‌مهارت برای همیشه از بازار کار دور بمانند.',
              prs: 'خطر دور ماندن دائمی کارگران کم‌مهارت از بازار کار.',
              tr: 'Düşük vasıflı çalışanların iş gücü piyasasından kalıcı olarak kopma riski.',
              ar: 'مخاطر بقاء العمالة ذات المهارات المحدودة خارج سوق العمل بشكل دائم.',
              es: 'Peligro de que los trabajadores con baja cualificación se aparten permanentemente del mercado laboral.'
            }
          },
          {
            id: 'b2_l_q23',
            question: '23. Welches bürgerschaftliche Engagement könnte nach Ansicht der Befürworter stimuliert werden?',
            options: ['a) Ehrenamtliches Engagement und gemeinnützige Gründungen', 'b) Spekulation an internationalen Finanzmärkten', 'c) Frühzeitiger Ruhestand aller Erwerbstätigen'],
            correctAnswer: 'a) Ehrenamtliches Engagement und gemeinnützige Gründungen',
            explanation: {
              en: 'Benefits highlighted: "... fördere ehrenamtliches Engagement sowie kreative Gründungen."',
              fa: 'تقویت فعالیت‌های داوطلبانه، مدنی و کارآفرینی‌های خلاقانه و عام‌المنفعه.',
              prs: 'تقویت کارهای رضاکارانه و تشبثات مفید اجتماعی.',
              tr: 'Gönüllülük faaliyetleri ve yaratıcı girişimlerin teşvik edilmesi.',
              ar: 'تشجيع العمل التطوعي وتأسيس المبادرات والشركات الإبداعية غير الربحية.',
              es: 'Estímulo al voluntariado y a la fundación de iniciativas creativas.'
            }
          },
          {
            id: 'b2_l_q24',
            question: '24. Welche unmittelbaren finanzpolitischen Konsequenzen drohen laut Kritikern des Modells?',
            options: ['a) Senkung der Unternehmenssteuern', 'b) Drastische Steuererhöhungen oder Abbau bestehender Sozialsysteme', 'c) Vollständige Abschaffung des Rentensystems'],
            correctAnswer: 'b) Drastische Steuererhöhungen oder Abbau bestehender Sozialsysteme',
            explanation: {
              en: 'Fiscal fallout: "... zwangsläufig drastische Steuererhöhungen oder den Rückbau bewährter Sozialsysteme nach sich zöge."',
              fa: 'افزایش شدید مالیات‌ها یا تضعیف و کاهش چتر حمایت‌های اجتماعی فعلی.',
              prs: 'بلند رفتن شدید مالیات یا کاهش خدمات فعلی سوسیال.',
              tr: 'Kaçınılmaz vergi artışları veya yerleşik sosyal sistemlerin daraltılması.',
              ar: 'زيادات ضريبية حادة أو تقليص مظلة الحماية الاجتماعية القائمة.',
              es: 'Drásticas subidas fiscales o desmantelamiento de los sistemas sociales establecidos.'
            }
          }
        ]
      },
      {
        title: 'Teil 5: Unternehmensrichtlinie zur IT-Sicherheit und mobiler Telearbeit (Aufgaben 25 bis 30)',
        sourceType: 'Betriebsvereinbarung Nr. 4/2024 einer deutschen Aktiengesellschaft',
        body: `Präambel und Bestimmungen zur mobilen Arbeit:\n1. Berechtigung: Mobile Telearbeit darf nur nach schriftlicher Abstimmung mit dem jeweiligen Teamleiter im Umfang von maximal 40 Prozent der wöchentlichen Arbeitszeit ausgeübt werden.\n2. Datensicherheit: Sämtliche dienstlichen Kommunikationsprozesse und Datenverarbeitungen dürfen ausnahmslos nur über das betriebseigene Virtual Private Network (VPN) sowie auf den vom Arbeitgeber bereitgestellten und zertifizierten Hardware-Endgeräten erfolgen. Die Speicherung sensibler Kundendaten auf privaten Speichermedien oder USB-Sticks ist unter Androhung arbeitsrechtlicher Konsequenzen strikt untersagt.\n3. Erreichbarkeit: Beschäftigte im Homeoffice haben während der festgelegten Kernarbeitszeiten (werktags zwischen 09:00 und 15:00 Uhr) über die internen Kollaborationstools (Chat, Telefonie) uneingeschränkt ansprechbar zu sein. Außerhalb dieser Kernzeit sowie an Sonn- und Feiertagen gilt das Recht auf Nichterreichbarkeit (Digital Detox), um die Erholungszeiten zu gewährleisten.\n4. Ergonomie und Unfallschutz: Der mobile Arbeitsplatz muss den geltenden ergonomischen Mindeststandards genügen. Unfälle im häuslichen Umfeld während der vereinbarten Arbeitszeit fallen unter den gesetzlichen Unfallversicherungsschutz, sofern sie im unmittelbaren sachlichen Zusammenhang mit der beruflichen Tätigkeit stehen.`,
        questions: [
          {
            id: 'b2_l_q25',
            question: '25. Wie viel Prozent der wöchentlichen Arbeitszeit darf maximal als mobile Telearbeit geleistet werden?',
            options: ['a) Maximal 20 Prozent', 'b) Maximal 40 Prozent', 'c) Bis zu 80 Prozent'],
            correctAnswer: 'b) Maximal 40 Prozent',
            explanation: {
              en: 'Clause 1: "... im Umfang von maximal 40 Prozent der wöchentlichen Arbeitszeit".',
              fa: 'بند ۱: حداکثر تا ۴۰ درصد ساعت کاری هفتگی مجاز به انجام کار از راه دور هستند.',
              prs: 'حداکثر تا ۴۰ فیصد کار هفتگی در خانه مجاز است.',
              tr: "Haftalık çalışma süresinin en fazla %40'ı oranında uzaktan çalışılabilir.",
              ar: 'الحد الأقصى للعمل عن بُعد هو 40 بالمئة من ساعات العمل الأسبوعية.',
              es: 'Como máximo un 40 por ciento de la jornada laboral semanal.'
            }
          },
          {
            id: 'b2_l_q26',
            question: '26. Welche technische Voraussetzung ist für die Datenverarbeitung im Homeoffice zwingend vorgeschrieben?',
            options: ['a) Die ausschließliche Nutzung des betriebseigenen VPN auf zertifizierten Firmengeräten', 'b) Die Verwendung privater USB-Sticks', 'c) Eine unverschlüsselte WLAN-Verbindung'],
            correctAnswer: 'a) Die ausschließliche Nutzung des betriebseigenen VPN auf zertifizierten Firmengeräten',
            explanation: {
              en: 'Clause 2: "... nur über das betriebseigene Virtual Private Network (VPN) sowie auf den vom Arbeitgeber bereitgestellten Geräten".',
              fa: 'الزام به اتصال انحصاری از طریق VPN سازمانی روی لپ‌تاپ‌های رسمی شرکت.',
              prs: 'تنها استفاده از VPN شرکت در وسایل رسمی کمپانی.',
              tr: 'Yalnızca şirkete ait VPN ve sertifikalı şirket cihazları kullanılmalıdır.',
              ar: 'استخدام شبكة VPN الخاصة بالشركة حصراً وعلى الأجهزة المعتمدة منها.',
              es: 'Uso preceptivo de la VPN corporativa en dispositivos certificados por la empresa.'
            }
          },
          {
            id: 'b2_l_q27',
            question: '27. Was geschieht, wenn Mitarbeiter sensible Firmendaten auf privaten Datenträgern abspeichern?',
            options: ['a) Sie erhalten eine Bonuszahlung', 'b) Es drohen arbeitsrechtliche Konsequenzen', 'c) Es ist nach Absprache gestattet'],
            correctAnswer: 'b) Es drohen arbeitsrechtliche Konsequenzen',
            explanation: {
              en: 'Clause 2: "... unter Androhung arbeitsrechtlicher Konsequenzen strikt untersagt."',
              fa: 'ذخیره روی حافظه‌های شخصی اکیداً ممنوع بوده و مشمول پیگرد و اخطار قانون کار است.',
              prs: 'عواقب قانونی کارمندی را در پی دارد.',
              tr: 'İş hukuku kapsamında disiplin ve yaptırım sonuçları doğurur.',
              ar: 'يعرض الموظف للمساءلة وعواقب قانون العمل الصارمة.',
              es: 'Conlleva consecuencias y sanciones disciplinarias laborales.'
            }
          },
          {
            id: 'b2_l_q28',
            question: '28. Zu welchen Uhrzeiten gilt die verbindliche Kernarbeitszeit mit garantierter Ansprechbarkeit?',
            options: ['a) Rund um die Uhr', 'b) Werktags zwischen 09:00 und 15:00 Uhr', 'c) Nur am Wochenende'],
            correctAnswer: 'b) Werktags zwischen 09:00 und 15:00 Uhr',
            explanation: {
              en: 'Clause 3: "... während der festgelegten Kernarbeitszeiten (werktags zwischen 09:00 und 15:00 Uhr)".',
              fa: 'ساعات کاری الزامی هسته: روزهای کاری اداری بین ساعت ۹:۰۰ الی ۱۵:۰۰.',
              prs: 'ساعت ۹ تا ۳ بعد از ظهر در روزهای اداری.',
              tr: 'İş günlerinde saat 09:00 ile 15:00 arasındaki çekirdek çalışma süresi.',
              ar: 'أيام العمل الرسمية بين الساعة التاسعة صباحاً والثالثة عصراً.',
              es: 'Días laborables entre las 09:00 y las 15:00 horas.'
            }
          },
          {
            id: 'b2_l_q29',
            question: '29. Was regelt die Richtlinie bezüglich des Kontakts außerhalb der Kernarbeitszeiten?',
            options: ['a) Ein Recht auf Nichterreichbarkeit (Digital Detox)', 'b) Pflicht zur ständigen Rufbereitschaft bis 22 Uhr', 'c) Verbot jeglicher Freizeitgestaltung'],
            correctAnswer: 'a) Ein Recht auf Nichterreichbarkeit (Digital Detox)',
            explanation: {
              en: 'Clause 3: "... gilt das Recht auf Nichterreichbarkeit (Digital Detox), um die Erholungszeiten zu gewährleisten."',
              fa: 'حق قطع ارتباط دیجیتال و عدم پاسخگویی (Digital Detox) برای تضمین استراحت.',
              prs: 'حق در دسترس نبودن بعد از وقت رسمی کار.',
              tr: 'Dinlenme süresini güvence altına alan ulaşılmama hakkı (Digital Detox).',
              ar: 'الحق في عدم التواصل الرقمي (Digital Detox) لضمان فترات الراحة والاستجمام.',
              es: 'Derecho a la desconexión digital para garantizar los tiempos de descanso.'
            }
          },
          {
            id: 'b2_l_q30',
            question: '30. Unter welchen Bedingungen greift der gesetzliche Unfallversicherungsschutz im Homeoffice?',
            options: ['a) Bei allen privaten Haushaltsunfällen', 'b) Wenn der Unfall in unmittelbarem sachlichem Zusammenhang mit der beruflichen Tätigkeit steht', 'c) Ausschließlich im Firmengebäude'],
            correctAnswer: 'b) Wenn der Unfall in unmittelbarem sachlichem Zusammenhang mit der beruflichen Tätigkeit steht',
            explanation: {
              en: 'Clause 4: "... sofern sie im unmittelbaren sachlichen Zusammenhang mit der beruflichen Tätigkeit stehen."',
              fa: 'بیمه حوادث کار تنها در صورتی حادثه منزل را پوشش می‌دهد که ارتباط موضوعی مستقیم با کار داشته باشد.',
              prs: 'در صورتی که ارتباط مستقیم به کار و وظیفه داشته باشد.',
              tr: 'Yalnızca mesleki faaliyetle doğrudan ve nesnel bir bağlantı varsa geçerlidir.',
              ar: 'شريطة أن يكون الحادث مرتبطاً سببياً ومباشراً بالنشاط المهني.',
              es: 'Siempre que el percance guarde relación causal directa con la actividad profesional.'
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
        id: 'b2_h_item1',
        title: 'Teil 1: Nachrichten und Fachberichte (Fragen 1 bis 5 • Einmal hören)',
        situation: 'Wirtschafts- und Wissenschaftsmagazin im Deutschlandfunk',
        transcript: 'Nachricht 1 (Automobilindustrie):\n"Der Verband der Automobilindustrie hat neue Zahlen zur Elektromobilität vorgelegt. Im vergangenen Quartal machten rein batteriebetriebene Fahrzeuge erstmals über 22 Prozent aller Neuzulassungen in Deutschland aus. Haupttreiber waren verbesserte Reichweiten von über 500 Kilometern und der Ausbau von Schnellladepunkten entlang der Autobahnen."\n\nNachricht 2 (Arbeitsmarkt):\n"Das Institut für Arbeitsmarkt- und Berufsforschung (IAB) meldet einen Rekord an offenen Stellen im Pflege- und Handwerksbereich. Trotz gestiegener Löhne fehlen bundesweit mehr als 180.000 Fachkräfte. Experten fordern beschleunigte Anerkennungsverfahren für ausländische Berufsabschlüsse."',
        questions: [
          {
            id: 'b2_h_q1',
            question: '1. Welchen Anteil an den Neuzulassungen erreichten Elektroautos im vergangenen Quartal?',
            options: ['12 Prozent', 'Über 22 Prozent', 'Genau 50 Prozent'],
            correctAnswer: 'Über 22 Prozent',
            explanation: {
              en: 'Figures confirmed: "... erstmals über 22 Prozent aller Neuzulassungen".',
              fa: 'سهم خودروهای برقی برای اولین بار از ۲۲ درصد کل پلاک‌های جدید فراتر رفت.',
              prs: 'بیشتر از ۲۲ فیصد موترهای جدید برقی بوده‌اند.',
              tr: 'Yeni tescillerin %22\'sinden fazlasını oluşturmuştur.',
              ar: 'شكلت السيارات الكهربائية أكثر من 22 بالمئة من التسجيلات الجديدة.',
              es: 'Alcanzaron más del 22 por ciento de las nuevas matriculaciones.'
            }
          },
          {
            id: 'b2_h_q2',
            question: '2. Welche zwei Faktoren waren Haupttreiber für das Wachstum der E-Mobilität?',
            options: ['Reichweiten über 500 km und Ausbau von Schnellladern', 'Steuersenkungen auf Benzin', 'Kostenlose Parkplätze in allen Städten'],
            correctAnswer: 'Reichweiten über 500 km und Ausbau von Schnellladern',
            explanation: {
              en: 'Drivers: "verbesserte Reichweiten von über 500 Kilometern und der Ausbau von Schnellladepunkten".',
              fa: 'پیمایش بالای ۵۰۰ کیلومتر و توسعه جایگاه‌های شارژ سریع در بزرگراه‌ها.',
              prs: 'طی کردن مسافت بیشتر از ۵۰۰ کیلومتر و استیشن‌های چارج سریع.',
              tr: '500 km üzeri menzil ve otoyollardaki hızlı şarj istasyonlarının artması.',
              ar: 'زيادة المدى لأكثر من 500 كم وتوسع نقاط الشحن السريع.',
              es: 'Autonomías de más de 500 km y red de puntos de carga rápida.'
            }
          },
          {
            id: 'b2_h_q3',
            question: '3. In welchen Branchen fehlen laut IAB mehr als 180.000 Fachkräfte?',
            options: ['In der Luftfahrt und Gastronomie', 'Im Pflege- und Handwerksbereich', 'Im Bankensektor'],
            correctAnswer: 'Im Pflege- und Handwerksbereich',
            explanation: {
              en: 'Shortage sectors: "... im Pflege- und Handwerksbereich (...) mehr als 180.000 Fachkräfte."',
              fa: 'کمبود بیش از ۱۸۰ هزار نیروی متخصص در بخش پرستاری/مراقبت و مشاغل فنی-اصناف.',
              prs: 'در بخش مراقبت صحی و صنایع دستی و تخنیکی.',
              tr: 'Hasta bakımı ve zanaat/teknik sektöründe.',
              ar: 'في مجالي التمريض والرعاية الصحية والحرف اليدوية.',
              es: 'En el sector de enfermería/cuidados y en los oficios manuales.'
            }
          },
          {
            id: 'b2_h_q4',
            question: '4. Was fordern Experten zur Linderung des Fachkräftemangels?',
            options: ['Die Herabsetzung des Renteneintrittsalters', 'Beschleunigte Anerkennungsverfahren für ausländische Berufsabschlüsse', 'Erhöhung der wöchentlichen Arbeitszeit auf 50 Stunden'],
            correctAnswer: 'Beschleunigte Anerkennungsverfahren für ausländische Berufsabschlüsse',
            explanation: {
              en: 'Proposed measure: "... beschleunigte Anerkennungsverfahren für ausländische Berufsabschlüsse."',
              fa: 'تسریع فرایند معادل‌سازی مدارک تحصیلی و شغلی متقاضیان خارجی.',
              prs: 'سرعت بخشیدن به تصدیق اسناد خارجی مسلکی.',
              tr: 'Yabancı mesleki denklik süreçlerinin hızlandırılması istenmektedir.',
              ar: 'تسريع وتيرة إجراءات الاعتراف بالمؤهلات والشهادات المهنية الأجنبية.',
              es: 'Acelerar los procesos de homologación de títulos profesionales extranjeros.'
            }
          },
          {
            id: 'b2_h_q5',
            question: '5. Die Gehälter im Handwerk und in der Pflege sind in den letzten Jahren gesunken.',
            options: ['Richtig', 'Falsch'],
            correctAnswer: 'Falsch',
            explanation: {
              en: 'Text explicitly notes higher wages: "Trotz gestiegener Löhne...", meaning salaries actually rose.',
              fa: 'متن تصریح می‌کند: "با وجود افزایش دستمزدها"، پس حقوق‌ها کاهش نیافته بلکه افزایش داشته است.',
              prs: 'معاشات بالا رفته است نه پایین.',
              tr: 'Maaşlar düşmemiş, aksine artmıştır ("Trotz gestiegener Löhne").',
              ar: 'النص يوضح: "على الرغم من ارتفاع الأجور"، وبالتالي فالرواتب زادت ولم تنخفض.',
              es: 'Los salarios aumentaron, no disminuyeron.'
            }
          }
        ]
      },
      {
        id: 'b2_h_item2',
        title: 'Teil 2: Ausführliches Fachinterview über Arbeitspsychologie und Resilienz (Fragen 6 bis 15 • Zweimal hören)',
        situation: 'Wissenschaftsinterview mit Prof. Dr. Laura Winter im Hochschulradio',
        transcript: 'Interviewer: "Herzlich willkommen zu \'Wissenschaft aktuell\'. Heute sprechen wir mit Arbeitspsychologin Prof. Dr. Laura Winter über Resilienz und psychische Gesundheit am modernen Arbeitsplatz. Frau Professor Winter, was verstehen Sie fachlich unter Resilienz?"\n\nProf. Winter: "Resilienz bezeichnet die psychische Widerstandskraft eines Menschen – also die Fähigkeit, Krisen, Rückschläge und anhaltenden Stress nicht nur schadlos zu überstehen, sondern sogar gestärkt daraus hervorzugehen. Es ist kein angeborenes, unveränderliches Merkmal, sondern ein dynamischer Lernprozess, den man trainieren kann."\n\nInterviewer: "Welche Faktoren im modernen Berufsleben belasten Arbeitnehmer heute am meisten?"\n\nProf. Winter: "Vor allem die ständige digitale Erreichbarkeit und die Entgrenzung von Arbeit und Freizeit. Wenn Beschäftigte am späten Abend noch dienstliche Mails auf dem Smartphone beantworten, findet das vegetative Nervensystem keine Phase der echten Erholung. Chronische Schlafstörungen und letztlich das Burnout-Syndrom sind die häufigen Folgen. Unternehmen tun gut daran, klare Regeln wie ein nächtliches E-Mail-Stopp-Protokoll zu etablieren."\n\nInterviewer: "Was kann der Einzelne tun, um seine persönliche Resilienz im Alltag zu stärken?"\n\nProf. Winter: "Wissenschaftlich belegt sind drei Pfeiler: Erstens Selbstwirksamkeit – also das Vertrauen in die eigenen Kompetenzen zur Problemlösung. Zweitens soziale Netzwerke – wer sich in vertrauensvollen Beziehungen austauschen kann, verarbeitet Stress deutlich schneller. Und drittens kognitive Neubewertung: Krisen nicht als unüberwindbare Katastrophe zu betrachten, sondern als bewältigbare Herausforderung."',
        questions: [
          {
            id: 'b2_h_q6',
            question: '6. Wie definiert Prof. Winter den Begriff Resilienz?',
            options: ['Als völlige Abwesenheit von Stress', 'Als trainierbare psychische Widerstandskraft zur Bewältigung von Krisen', 'Als angeborene Unempfindlichkeit gegen Krankheiten'],
            correctAnswer: 'Als trainierbare psychische Widerstandskraft zur Bewältigung von Krisen',
            explanation: {
              en: 'Definition: "... psychische Widerstandskraft (...) ein dynamischer Lernprozess, den man trainieren kann."',
              fa: 'تاب‌آوری به عنوان توانایی روانی قابل آموزش برای مدیریت و عبور از بحران‌ها تعریف می‌شود.',
              prs: 'مقاومت روانی در برابر بحران‌ها که قابل تمرین است.',
              tr: 'Krizlerle başa çıkmada eğitilebilir psikolojik direnç kapasitesi.',
              ar: 'المرونة النفسية كقدرة قابلة للتدريب والتطوير لتجاوز الأزمات والضغوط.',
              es: 'Capacidad de resistencia psicológica entrenable para superar crisis.'
            }
          },
          {
            id: 'b2_h_q7',
            question: '7. Laut Prof. Winter ist Resilienz eine genetische Eigenschaft, die man nicht verändern kann.',
            options: ['Richtig', 'Falsch'],
            correctAnswer: 'Falsch',
            explanation: {
              en: 'She explicitly rejects this: "Es ist kein angeborenes, unveränderliches Merkmal...".',
              fa: 'پروفسور وینتر صریحاً رد می‌کند و می‌گوید این یک ویژگی مادرزادی تغییرناپذیر نیست.',
              prs: 'این صفت ژنتیکی و غیرقابل تغییر نیست، بلکه آموختنی است.',
              tr: 'Doğuştan gelen değişmez bir özellik olmadığını açıkça belirtmiştir.',
              ar: 'تؤكد أنها ليست سمة فطرية وراثية غير قابلة للتغيير، بل مهارة تكتسب.',
              es: 'Niega que sea un rasgo innato e inmutable; es un proceso de aprendizaje.'
            }
          },
          {
            id: 'b2_h_q8',
            question: '8. Was belastet Arbeitnehmer im modernen Berufsleben laut Prof. Winter am meisten?',
            options: ['Zu geringer Lohn', 'Die ständige digitale Erreichbarkeit und Auflösung von Grenzen zwischen Arbeit und Freizeit', 'Körperlich schwere Arbeit'],
            correctAnswer: 'Die ständige digitale Erreichbarkeit und Auflösung von Grenzen zwischen Arbeit und Freizeit',
            explanation: {
              en: 'Primary burden: "ständige digitale Erreichbarkeit und die Entgrenzung von Arbeit und Freizeit".',
              fa: 'در دسترس بودن مداوم دیجیتالی و از بین رفتن مرز میان کار و زندگی شخصی.',
              prs: 'پاسخ دادن به مبایل و ایمیل در وقت رخصتی و از بین رفتن مرز کار و استراحت.',
              tr: 'Sürekli dijital ulaşılabilirlik ve iş-özel hayat sınırlarının silinmesi.',
              ar: 'التوفر الرقمي الدائم وتلاشي الحدود الفاصلة بين العمل ووقت الفراغ.',
              es: 'La continua disponibilidad digital y la difuminación de límites laborales.'
            }
          },
          {
            id: 'b2_h_q9',
            question: '9. Welche Maßnahme empfiehlt die Expertin Unternehmen zur Entlastung der Mitarbeiter?',
            options: ['Verbot von Urlaub im Sommer', 'Ein nächtliches E-Mail-Stopp-Protokoll', 'Verpflichtende Überstunden'],
            correctAnswer: 'Ein nächtliches E-Mail-Stopp-Protokoll',
            explanation: {
              en: 'Recommended company protocol: "... wie ein nächtliches E-Mail-Stopp-Protokoll zu etablieren."',
              fa: 'توصیه به تدوین پروتکل توقف ارسال ایمیل کاری در ساعات شب.',
              prs: 'توقف دادن ارسال ایمیل‌های کاری در وقت شب.',
              tr: 'Geceleri iş e-postalarının durdurulması protokolünün uygulanması.',
              ar: 'تطبيق بروتوكول لحظر إرسال الرسائل الإلكترونية المهنية ليلاً.',
              es: 'Establecer un protocolo de suspensión nocturna de correos de trabajo.'
            }
          },
          {
            id: 'b2_h_q10',
            question: '10. Welcher der folgenden Punkte gehört zu den drei wissenschaftlichen Pfeilern der Resilienz?',
            options: ['Selbstwirksamkeit und Vertrauen in eigene Problemlösungskompetenz', 'Möglichst wenig mit anderen Menschen reden', 'Jede Veränderung im Beruf meiden'],
            correctAnswer: 'Selbstwirksamkeit und Vertrauen in eigene Problemlösungskompetenz',
            explanation: {
              en: 'Pillars include self-efficacy: "Erstens Selbstwirksamkeit – also das Vertrauen in die eigenen Kompetenzen...".',
              fa: 'ستون اول: خودکارآمدی و باور به توانمندی‌های شخصی در حل تعارضات و مسائل.',
              prs: 'باور داشتن به توانایی خود در حل مشکلات.',
              tr: 'Öz-yeterlilik ve kendi sorun çözme becerilerine güven.',
              ar: 'الكفاءة الذاتية والثقة بالقدرات الشخصية في حل المشكلات.',
              es: 'Autoeficacia y confianza en las competencias propias para resolver problemas.'
            }
          },
          {
            id: 'b2_h_q11',
            question: '11. Was versteht Prof. Winter unter dem zweiten Pfeiler, den "sozialen Netzwerken"?',
            options: ['Den täglichen Konsum von sozialen Medien', 'Den vertrauensvollen Austausch in tragfähigen persönlichen Beziehungen', 'Das Sammeln vieler Follower'],
            correctAnswer: 'Den vertrauensvollen Austausch in tragfähigen persönlichen Beziehungen',
            explanation: {
              en: 'Social pillar: "... wer sich in vertrauensvollen Beziehungen austauschen kann, verarbeitet Stress deutlich schneller."',
              fa: 'تبادل نظر و احساس اطمینان در روابط اصیل و معتمد بین‌فردی.',
              prs: 'داشتن ارتباطات دوستانه و مطمئن برای کاهش فشار روحی.',
              tr: 'Güvene dayalı samimi ilişkilerde dertleşme ve destek görme.',
              ar: 'التواصل الموثوق والمتبادل في إطار علاقات شخصية داعمة.',
              es: 'El intercambio de confianza en relaciones personales sólidas.'
            }
          },
          {
            id: 'b2_h_q12',
            question: '12. Wie beschreibt die Expertin den Begriff "kognitive Neubewertung"?',
            options: ['Krisen als bewältigbare Herausforderungen statt als unüberwindbare Katastrophen begreifen', 'Probleme völlig ignorieren', 'Schuld immer bei anderen suchen'],
            correctAnswer: 'Krisen als bewältigbare Herausforderungen statt als unüberwindbare Katastrophen begreifen',
            explanation: {
              en: 'Cognitive reframing: "... Krisen nicht als unüberwindbare Katastrophe zu betrachten, sondern als bewältigbare Herausforderung."',
              fa: 'بازارزیابی شناختی: نگریستن به بحران به عنوان چالشی قابل حل به جای فاجعه‌ای غیرقابل عبور.',
              prs: 'دیدن مشکلات به عنوان چالش قابل حل.',
              tr: 'Krizleri felaket yerine aşılabilir bir meydan okuma olarak görmek.',
              ar: 'إعادة التقييم المعرفي: اعتبار الأزمات تحديات يمكن التغلب عليها وليست كوارث مطلقة.',
              es: 'Interpretar las crisis como retos superables y no como catástrofes irremediables.'
            }
          },
          {
            id: 'b2_h_q13',
            question: '13. Welches biologische System wird gestört, wenn man spät abends noch Dienst-Mails liest?',
            options: ['Das vegetative Nervensystem', 'Das Skelettsystem', 'Das Hörvermögen'],
            correctAnswer: 'Das vegetative Nervensystem',
            explanation: {
              en: 'Biological impact: "... findet das vegetative Nervensystem keine Phase der echten Erholung."',
              fa: 'سیستم عصبی خودمختار (وژتاتیو) فرصت بازسازی و استراحت واقعی پیدا نمی‌کند.',
              prs: 'سیستم عصبی خودکار انسان فرصت استراحت پیدا نمی‌کند.',
              tr: 'Otonom (vejetatif) sinir sisteminin gerçek bir dinlenme evresi bulamaması.',
              ar: 'الجهاز العصبي المستقل (اللاإرادي) يُحرم من فترات الاسترخاء والتعافي.',
              es: 'El sistema nervioso autónomo o vegetativo queda privado de descanso regenerador.'
            }
          },
          {
            id: 'b2_h_q14',
            question: '14. Zu welchen schwerwiegenden Spätfolgen führt chronischer Dauerstress laut Prof. Winter?',
            options: ['Zu Schlafstörungen und letztlich zum Burnout-Syndrom', 'Zu verbesserter Ausdauer', 'Zu spontanem Muskelwachstum'],
            correctAnswer: 'Zu Schlafstörungen und letztlich zum Burnout-Syndrom',
            explanation: {
              en: 'Consequences: "Chronische Schlafstörungen und letztlich das Burnout-Syndrom sind die häufigen Folgen."',
              fa: 'اختلالات مزمن خواب و در نهایت بروز سندروم فرسودگی شغلی (Burnout).',
              prs: 'بی‌خوابی و سندروم سوختگی شغلی.',
              tr: 'Kronik uyku bozuklukları ve nihayetinde tükenmişlik (burnout) sendromu.',
              ar: 'اضطرابات النوم المزمنة ومتلازمة الإرهاق والاحتراق المهني (Burnout).',
              es: 'Trastornos crónicos del sueño y, en última instancia, síndrome de burnout.'
            }
          },
          {
            id: 'b2_h_q15',
            question: '15. Welche zentrale Schlussfolgerung zieht die Forscherin am Ende des Gesprächs?',
            options: ['Dass Resilienz eine Fähigkeit ist, die jeder Mensch im Laufe des Lebens trainieren kann', 'Dass man bei Problemen sofort kündigen sollte', 'Dass Arbeit im Büro immer ungesund ist'],
            correctAnswer: 'Dass Resilienz eine Fähigkeit ist, die jeder Mensch im Laufe des Lebens trainieren kann',
            explanation: {
              en: 'Conclusion: "... ein dynamischer Lernprozess, den man trainieren kann."',
              fa: 'تاب‌آوری مهارتی پویا و یادگرفتنی است که هر فردی در هر سنی قادر به تقویت آن است.',
              prs: 'تاب‌آوری یک مهارت قابل تمرین است.',
              tr: 'Psikolojik dayanıklılığın eğitilerek geliştirilebilecek dinamik bir süreç olduğu.',
              ar: 'أن المرونة النفسية مهارة ديناميكية مكتسبة يمكن لأي شخص صقلها وتطويرها.',
              es: 'Que la resiliencia es una capacidad dinámica y susceptible de ser entrenada.'
            }
          }
        ]
      },
      {
        id: 'b2_h_item3',
        title: 'Teil 3: Kontroverse Podiumsdiskussion im Rundfunk (Fragen 16 bis 21 • Einmal hören)',
        situation: 'Radiodebatte "Forum Wirtschaft": Autofreie Innenstädte und die Zukunft des Einzelhandels',
        transcript: `Moderatorin: "Guten Abend zu 'Forum Wirtschaft'. Immer mehr europäische Metropolen verbannen private Kraftfahrzeuge aus den Altstädten. Bei uns im Studio: Stadtplaner Dr. Robert Weber und die Sprecherin des Einzelhandelsverbandes, Frau Marion Krüger. Herr Dr. Weber, wieso ist der autofreie Raum ein Gewinn?"\n\nDr. Weber: "Die Zahlen aus Städten wie Pontevedra, Gent oder Ljubljana sprechen eine unmissverständliche Sprache: Die Aufenthaltsqualität steigt enorm, die Lärm- und Feinstaubbelastung sinkt um bis zu 60 Prozent. Menschen flanieren entspannter, wenn sie nicht vor abbiegenden SUVs flüchten müssen. Ein lebendiger Stadtraum braucht Fußgänger und Außengastronomie, keine Blechkolonnen."\n\nFrau Krüger: "Das klingt in der Theorie romantisch, Herr Weber. Aber der stationäre Einzelhandel kämpft ohnehin gegen den übermächtigen Online-Handel. Wer teure Boutiquen oder Fachgeschäfte besucht, transportiert größere Einkäufe ungern mit der Straßenbahn. Schließt man Parkhäuser, verlagert sich die Kaufkraft umgehend auf Einkaufszentren an der Peripherie mit 3.000 Gratis-Parkplätzen."\n\nDr. Weber: "Diese Furcht wird seit dreißig Jahren geäußert und ist empirisch widerlegt! Umfragen in Fußgängerzonen belegen: Fußgänger und Radfahrer kommen zwar seltener mit vollen Kofferräumen, dafür aber dreimal so häufig pro Woche. Ihr kumulierter Monatsumsatz übersteigt den der Pkw-Kunden deutlich."\n\nFrau Krüger: "Dennoch brauchen wir funktionierende Logistikfenster für Lieferanten und barrierefreie Elektromobilität für Senioren und Gehbehinderte. Ein pauschales Verbot ohne Übergangsfristen ruiniert den Mittelstand!"`,
        questions: [
          {
            id: 'b2_h_q16',
            question: '16. Welchen ökologischen Effekt autofreier Innenstädte nennt Dr. Weber?',
            options: ['Rückgang der Lärm- und Feinstaubbelastung um bis zu 60 Prozent', 'Verdopplung der CO2-Werte', 'Völliger Wegfall des Regens'],
            correctAnswer: 'Rückgang der Lärm- und Feinstaubbelastung um bis zu 60 Prozent',
            explanation: {
              en: 'Dr. Weber points to data: "... Lärm- und Feinstaubbelastung sinkt um bis zu 60 Prozent."',
              fa: 'کاهش آلودگی صوتی و ذرات گرد و غبار هوا تا میزان ۶۰ درصد.',
              prs: 'کاهش آلودگی صوتی و هوای غبارآلود تا ۶۰ فیصد.',
              tr: "Gürültü ve ince toz kirliliğinin %60'a varan oranda azalması.",
              ar: 'انخفاض التلوث السمعي والغبار الناعم بنسبة تصل إلى 60 بالمئة.',
              es: 'Reducción de la contaminación acústica y por partículas en hasta un 60 por ciento.'
            }
          },
          {
            id: 'b2_h_q17',
            question: '17. Welche Hauptsorge äußert Frau Krüger für die Fachgeschäfte in der Altstadt?',
            options: ['Dass Kunden zum Einkaufen in die Zentren an der Peripherie abwandern', 'Dass die Steuern halbiert werden', 'Dass es zu viele Touristen gibt'],
            correctAnswer: 'Dass Kunden zum Einkaufen in die Zentren an der Peripherie abwandern',
            explanation: {
              en: 'Frau Krüger warns: "... verlagert sich die Kaufkraft umgehend auf Einkaufszentren an der Peripherie...".',
              fa: 'انتقال قدرت خرید مردم به مجتمع‌های تجاری بزرگ حومه شهر که پارکینگ رایگان دارند.',
              prs: 'رفتن مشتریان به مراکز تجارتی کلان در حاشیه شهر.',
              tr: 'Müşteri alım gücünün ücretsiz otoparklı çevre alışveriş merkezlerine kayması.',
              ar: 'نزوح القوة الشرائية نحو مراكز التسوق الكبرى على أطراف المدينة.',
              es: 'Desplazamiento del poder adquisitivo a los centros comerciales periféricos.'
            }
          },
          {
            id: 'b2_h_q18',
            question: '18. Welches Argument von Dr. Weber widerspricht der Befürchtung des Einzelhandels?',
            options: ['Dass Fußgänger und Radfahrer häufiger kommen und im Monat mehr Geld ausgeben', 'Dass Geschäfte gar keinen Umsatz mehr brauchen', 'Dass alle Waren per Drohne geliefert werden'],
            correctAnswer: 'Dass Fußgänger und Radfahrer häufiger kommen und im Monat mehr Geld ausgeben',
            explanation: {
              en: 'Counter-evidence: "... kommen dreimal so häufig (...) Ihr kumulierter Monatsumsatz übersteigt den der Pkw-Kunden deutlich."',
              fa: 'پیاده‌ها و دوچرخه‌سواران ۳ برابر بیشتر تردد داشته و مجموع خرید ماهانه بالاتری رقم می‌زنند.',
              prs: 'عابران پیاده و بایسکل‌سواران بیشتر مراجعه نموده و خرید بیشتر انجام می‌دهند.',
              tr: 'Yaya ve bisikletlilerin daha sık gelerek aylık toplamda daha fazla harcama yapması.',
              ar: 'المشاة وراكبو الدراجات يترددون بمعدل أعلى ويحققون عوائد تراكمية أكبر شهرياً.',
              es: 'Peatones y ciclistas acuden con mayor asiduidad generando un gasto acumulado superior.'
            }
          },
          {
            id: 'b2_h_q19',
            question: '19. Welche Ausnahme verlangt Frau Krüger für eine faire Lösung ausdrücklich?',
            options: ['Logistikfenster für Lieferungen und Mobilität für Senioren und Gehbehinderte', 'Freie Fahrt für Sportwagen', 'Vollständige Schließung aller Fußgängerzonen'],
            correctAnswer: 'Logistikfenster für Lieferungen und Mobilität für Senioren und Gehbehinderte',
            explanation: {
              en: 'Requirements: "Logistikfenster für Lieferanten und barrierefreie Elektromobilität für Senioren..."',
              fa: 'ساعات مشخص برای تخلیه بار تامین‌کنندگان و امکان تردد خودروهای برقی کوچک برای سالمندان و معلولان.',
              prs: 'وقت مشخص برای موترهای باربری و سهولت برای افراد مسن و دارای معلولیت.',
              tr: 'Tedarikçiler için lojistik pencereleri ve yaşlı/engelliler için engelsiz elektrikli ulaşım.',
              ar: 'نوافذ زمنية لشاحنات التوريد ووسائل نقل كهربائية ملائمة للمسنين وذوي الإعاقة.',
              es: 'Franjas de carga/descarga y electromovilidad adaptada para personas mayores o con discapacidad.'
            }
          },
          {
            id: 'b2_h_q20',
            question: '20. Wer äußert die Ansicht, dass die Befürchtungen des Einzelhandels seit dreißig Jahren unbegründet sind?',
            options: ['Frau Krüger', 'Dr. Weber', 'Die Moderatorin'],
            correctAnswer: 'Dr. Weber',
            explanation: {
              en: `Speaker: "Dr. Weber: 'Diese Furcht wird seit dreißig Jahren geäußert und ist empirisch widerlegt!'"`,
              fa: 'دکتر وبر تصریح می‌کند این ادعاها سی سال است مطرح شده و با آمارها نقض شده است.',
              prs: 'داکتر وبر این نظر را ابراز می‌کند.',
              tr: 'Bu görüş Dr. Weber tarafından dile getirilmektedir.',
              ar: 'الدكتور فيبر هو من يرى أن تلك المخاوف دحضتها البيانات على مدى ثلاثين عاماً.',
              es: 'El Dr. Weber sostiene que los temores han quedado refutados empíricamente.'
            }
          },
          {
            id: 'b2_h_q21',
            question: '21. Worauf verständigen sich die Diskutanten bezüglich eines pauschalen Verbots?',
            options: ['Dass ein abruptes Verbot ohne Übergangsfristen und Kompensationskonzepte unklug ist', 'Dass Autos sofort beschlagnahmt werden sollten', 'Dass Straßen überhaupt nicht mehr saniert werden'],
            correctAnswer: 'Dass ein abruptes Verbot ohne Übergangsfristen und Kompensationskonzepte unklug ist',
            explanation: {
              en: 'Consensus tone: A blunt blanket ban without pragmatism harms businesses and accessibility.',
              fa: 'ممنوعیت یک‌شبه و کلی بدون در نظر گرفتن دوره‌های گذار و راهکارهای جبرانی به زیان کسب‌وکارهاست.',
              prs: 'ممنوعیت ناگهانی و بدون مهلت به اقتصاد آسیب می‌زند.',
              tr: 'Geçiş süreci ve telafi mekanizmaları olmaksızın toptan yasaklamanın riskli olduğu.',
              ar: 'أن الحظر الشامل المفاجئ دون فترات انتقالية وحلول بديلة يضر بالاقتصاد المحلي.',
              es: 'Que una prohibición tajante sin plazos de transición ni medidas compensatorias resulta perjudicial.'
            }
          }
        ]
      },
      {
        id: 'b2_h_item4',
        title: 'Teil 4: Wissenschaftlicher Fachvortrag an der Universität (Fragen 22 bis 30 • Zweimal hören)',
        situation: 'Gastvorlesung von Prof. Dr. Harald Reinhard am Institut für Quanteninformatik',
        transcript: `Prof. Reinhard: "Guten Tag, meine Damen und Herren! In der heutigen Vorlesung widmen wir uns den Implikationen des Quantencomputings für die digitale Informationssicherheit.\nKlassische Rechner basieren auf binären Bits, die entweder den Zustand 0 oder 1 einnehmen. Ein Quantenprozessor hingegen nutzt die Prinzipien der Quantenmechanik – namentlich die Superposition und die Verschränkung von Qubits. Dadurch kann ein Quantencomputer eine gigantische Anzahl mathematischer Permutationen simultan berechnen.\nWas bedeutet das konkret für unsere gegenwärtige IT-Infrastruktur?\nNahezu alle modernen Verschlüsselungsverfahren – vom Online-Banking über verschlüsselte E-Mails bis hin zu staatlichen Geheimhaltungsstufen – vertrauen auf asymmetrische Kryptosysteme wie RSA oder elliptische Kurven. Deren Sicherheit beruht auf der extremen mathematischen Hürde, riesige Primzahlen zu faktorisieren. Ein klassischer Supercomputer bräuchte dafür Tausende von Jahren.\nMit dem sogenannten Shor-Algorithmus kann ein ausreichend leistungsfähiger Quantenrechner diese Primfaktorzerlegung jedoch in wenigen Minuten oder Stunden bewältigen! Das bedeutet: An dem Tag, an dem ein fehlertoleranter Quantencomputer mit mehreren tausend logischen Qubits operiert, bricht die gesamte bisherige asymmetrische Verschlüsselung der Welt zusammen.\nDie Fachwelt spricht hierbei vom 'Q-Day'. Obwohl Experten schätzen, dass ein solcher universeller Quantenrechner erst in 10 bis 15 Jahren einsatzbereit sein wird, müssen wir bereits heute handeln. Warum? Wegen der Gefahr von 'Harvest now, decrypt later'. Nachrichtendienste und kriminelle Kartelle schneiden bereits heute massenhaft verschlüsselten Datenverkehr mit und speichern Terabytes an Daten. Sobald die Hardware bereitsteht, können sie rückwirkend dechiffriert werden.\nDie Antwort der Wissenschaft lautet: Post-Quanten-Kryptographie (PQC). Hierbei handelt es sich um neue mathematische Algorithmen auf Basis gitterbasierter Kryptographie, die selbst von Quantencomputern nicht in praxisrelevanter Zeit geknackt werden können. Das Bundesamt für Sicherheit in der Informationstechnik (BSI) empfiehlt allen Behörden und Konzernen die zügige Migration auf PQC-Standards.`,
        questions: [
          {
            id: 'b2_h_q22',
            question: '22. Auf welchen quantenmechanischen Phänomenen beruht die Rechenleistung von Qubits?',
            options: ['Auf Superposition und Verschränkung', 'Auf einfacher thermischer Ausdehnung', 'Auf magnetischer Reibung'],
            correctAnswer: 'Auf Superposition und Verschränkung',
            explanation: {
              en: 'Lecture clarifies: "... Prinzipien der Quantenmechanik – namentlich die Superposition und die Verschränkung von Qubits."',
              fa: 'بر اساس اصول مکانیک کوانتومی یعنی برهم‌نهی (Superposition) و درهم‌تنیدگی (Entanglement).',
              prs: 'بر اصول برهم‌نهی و درهم‌تنیدگی کیوبیت‌ها استوار است.',
              tr: 'Kuantum mekaniğinin süperpozisyon ve dolanıklık ilkelerine dayanır.',
              ar: 'تعتمد على مبادئ ميكانيكا الكم وتحديداً التراكب والتشابك الكمي للكيوبتات.',
              es: 'Se sustenta en los principios de superposición y entrelazamiento cuántico de los cúbits.'
            }
          },
          {
            id: 'b2_h_q23',
            question: '23. Worauf beruht die Sicherheit traditioneller asymmetrischer Kryptoverfahren wie RSA?',
            options: ['Auf der Komplexität der Primfaktorzerlegung sehr großer Zahlen', 'Auf einfachen Passwörtern mit vier Ziffern', 'Auf der Dicke von Glasfaserkabeln'],
            correctAnswer: 'Auf der Komplexität der Primfaktorzerlegung sehr großer Zahlen',
            explanation: {
              en: 'Security principle: "... extreme mathematische Hürde, riesige Primzahlen zu faktorisieren."',
              fa: 'دشواری ریاضیاتی فوق‌العاده در تجزیه اعداد بسیار بزرگ به عوامل اول.',
              prs: 'دشواری تفکیک اعداد بسیار بزرگ به اعداد اول.',
              tr: 'Devasa asal sayıların çarpanlarına ayrılmasının aşırı matematiksel zorluğuna.',
              ar: 'الصعوبة الرياضية الشديدة لتحليل الأعداد الضخمة إلى عواملها الأولية.',
              es: 'En la extrema dificultad matemática para factorizar números primos gigantescos.'
            }
          },
          {
            id: 'b2_h_q24',
            question: '24. Welcher Algorithmus erlaubt Quantencomputern das schnelle Knacken von RSA?',
            options: ['Der Shor-Algorithmus', 'Der Dijkstra-Algorithmus', 'Der Taylor-Algorithmus'],
            correctAnswer: 'Der Shor-Algorithmus',
            explanation: {
              en: 'Name of algorithm: "Mit dem sogenannten Shor-Algorithmus kann ein (...) Quantenrechner diese Primfaktorzerlegung (...) bewältigen!"',
              fa: 'الگوریتم شور (Shor-Algorithmus) توان تجزیه فاکتورهای اول در کسری از زمان را داراست.',
              prs: 'الگوریتم شور.',
              tr: 'Shor Algoritması.',
              ar: "خوارزمية شور (Shor's algorithm).",
              es: 'El algoritmo de Shor.'
            }
          },
          {
            id: 'b2_h_q25',
            question: '25. Was bezeichnet der Begriff "Q-Day" in der Fachwelt?',
            options: ['Den Tag, an dem Quantencomputer die heutige Verschlüsselung brechen können', 'Den Feiertag der Informatiker', 'Die Gründung der ersten Universität'],
            correctAnswer: 'Den Tag, an dem Quantencomputer die heutige Verschlüsselung brechen können',
            explanation: {
              en: 'Q-Day definition: The point when a quantum computer can break existing asymmetric crypto.',
              fa: 'اصطلاح روز کیو (Q-Day): روزی که ابررایانه‌های کوانتومی رمزنگاری نامتقارن فعلی جهان را بشکنند.',
              prs: 'روزی که کامپیوتر کوانتومی رمزهای فعلی را بشکند.',
              tr: 'Kuantum bilgisayarlarının mevcut kriptografik şifreleri kırabildiği gün.',
              ar: 'يوم Q-Day هو اليوم الذي ينجح فيه حاسوب كمي في كسر التشفير العالمي القائم.',
              es: 'El momento en que los ordenadores cuánticos puedan vulnerar la criptografía actual.'
            }
          },
          {
            id: 'b2_h_q26',
            question: '26. Wann rechnen Experten mit dem Bau eines solchen universellen Quantenrechners?',
            options: ['In etwa 10 bis 15 Jahren', 'Bereits nächste Woche', 'Erst im Jahr 2200'],
            correctAnswer: 'In etwa 10 bis 15 Jahren',
            explanation: {
              en: 'Estimated timeframe: "... erst in 10 bis 15 Jahren einsatzbereit sein wird...".',
              fa: 'پیش‌بینی کارشناسان: آمادگی عملیاتی در بازه ۱۰ تا ۱۵ سال آینده.',
              prs: 'در حدود ۱۰ تا ۱۵ سال آینده.',
              tr: 'Yaklaşık 10 ila 15 yıl içinde.',
              ar: 'في غضون 10 إلى 15 عاماً تقريباً وفق تقديرات الخبراء.',
              es: 'Se estima que estará operativo en un horizonte de 10 a 15 años.'
            }
          },
          {
            id: 'b2_h_q27',
            question: '27. Warum muss laut Prof. Reinhard bereits heute gegen diese Bedrohung gehandelt werden?',
            options: ['Wegen der Praxis "Harvest now, decrypt later"', 'Weil klassische Computer verboten werden', 'Weil das Internet abgeschaltet wird'],
            correctAnswer: 'Wegen der Praxis "Harvest now, decrypt later"',
            explanation: {
              en: 'Urgency rationale: "... Gefahr von \\"Harvest now, decrypt later\\". (...) Daten heute mitschneiden und später dechiffrieren."',
              fa: 'به دلیل استراتژی "اکنون ذخیره کن، بعداً رمزگشایی کن" توسط سازمان‌های اطلاعاتی.',
              prs: 'به خاطر اینکه اطلاعات ذخیره می‌شود تا در آینده رمزگشایی گردد.',
              tr: '"Şimdi topla, sonra çöz" (Harvest now, decrypt later) tehlikesinden ötürü.',
              ar: 'بسبب استراتيجية "الجمع والتخزين الآن وفك التشفير لاحقاً" المتبعة تجسسياً.',
              es: 'Debido a la estrategia hostil de "recopilar ahora y descifrar en el futuro".'
            }
          },
          {
            id: 'b2_h_q28',
            question: '28. Welcher mathematische Ansatz bildet das Fundament der Post-Quanten-Kryptographie?',
            options: ['Gitterbasierte Kryptographie', 'Einfache Bruchrechnung', 'Geometrische Kreisberechnung'],
            correctAnswer: 'Gitterbasierte Kryptographie',
            explanation: {
              en: 'Mathematical foundation: "... neue mathematische Algorithmen auf Basis gitterbasierter Kryptographie...".',
              fa: 'رمزنگاری مبتنی بر شبکه یا ساختارهای مشبک (Lattice-based cryptography).',
              prs: 'رمزنگاری بر مبنای ساختارهای مشبک.',
              tr: 'Kafes tabanlı (gitterbasiert) kriptografik matematik modelleri.',
              ar: 'التشفير المعتمد على الشبكات الفراغية (Lattice-based cryptography).',
              es: 'Algoritmos sustentados en la criptografía basada en retículos.'
            }
          },
          {
            id: 'b2_h_q29',
            question: '29. Welche deutsche Behörde empfiehlt die rasche Umstellung auf Post-Quanten-Standards?',
            options: ['Das Bundesamt für Sicherheit in der Informationstechnik (BSI)', 'Das Statistische Bundesamt', 'Das Umweltbundesamt'],
            correctAnswer: 'Das Bundesamt für Sicherheit in der Informationstechnik (BSI)',
            explanation: {
              en: 'Authority: "Das Bundesamt für Sicherheit in der Informationstechnik (BSI) empfiehlt..."',
              fa: 'اداره فدرال امنیت اطلاعات آلمان (BSI).',
              prs: 'اداره امنیت فناوری اطلاعات آلمان (BSI).',
              tr: 'Almanya Federal Bilgi Güvenliği Ofisi (BSI).',
              ar: 'المكتب الاتحادي لأمن تكنولوجيا المعلومات في ألمانيا (BSI).',
              es: 'La Oficina Federal de Seguridad de la Información de Alemania (BSI).'
            }
          },
          {
            id: 'b2_h_q30',
            question: '30. Was ist das wichtigste Merkmal von Post-Quanten-Kryptographie-Algorithmen (PQC)?',
            options: ['Sie sind selbst von Quantencomputern nicht in praxisrelevanter Zeit knackbar', 'Sie funktionieren ohne Strom', 'Sie löschen alle alten Passwörter'],
            correctAnswer: 'Sie sind selbst von Quantencomputern nicht in praxisrelevanter Zeit knackbar',
            explanation: {
              en: 'Key feature: "... selbst von Quantencomputern nicht in praxisrelevanter Zeit geknackt werden können."',
              fa: 'حتی ابررایانه‌های کوانتومی نیز نمی‌توانند در زمان عملی و واقعی این الگوریتم‌ها را بشکنند.',
              prs: 'حتی کامپیوترهای کوانتومی نمی‌توانند در وقت معقول این رمزها را بشکنند.',
              tr: 'Kuantum bilgisayarları tarafından dahi pratik bir zaman diliminde kırılamamaları.',
              ar: 'استعصاؤها على الاختراق حتى بواسطة الحواسيب الكمية في إطار زمني واقعي.',
              es: 'Que resultan invulnerables ante los ordenadores cuánticos en tiempos prácticos de computación.'
            }
          }
        ]
      }
    ]
  },
  schreiben: {
    title: 'Modul Schreiben (75 Minuten • 2 Aufgaben)',
    durationMinutes: 75,
    taskType: 'Teil 1: Ausführliche Stellungnahme (45 Min) & Teil 2: Formeller Beschwerdebrief (30 Min)',
    situation: 'Teil 1: Sie schreiben einen fundierten Diskussionsbeitrag zum Thema "Homeoffice-Pflicht oder Präsenzkultur?".\nTeil 2: Sie haben bei einem Versandhändler ein teures elektronisches Arbeitsgerät bestellt, das beschädigt ankam und dessen Kundenservice nicht reagiert.',
    prompt: 'Teil 1 Schreibaufgabe (ca. 150 Wörter):\nIn einer Fachzeitschrift lesen Sie einen kontroversen Aufsatz über die Vor- und Nachteile von vollständiger Telearbeit (Homeoffice) für Angestellte und Unternehmen. Verfassen Sie eine strukturierte Stellungnahme:\n1. Beziehen Sie begründet Position zu hybridem Arbeiten vs. reiner Präsenzpflicht.\n2. Diskutieren Sie Vor- und Nachteile hinsichtlich Produktivität, Teamdynamik und psychischer Gesundheit.\n3. Formulieren Sie konkrete Handlungsempfehlungen für moderne Führungskräfte.',
    guidingPoints: [
      '1. Begründete Positionierung mit einleitender These',
      '2. Differenzierte Argumentation (Produktivität vs. soziale Isolation)',
      '3. Formulierung konstruktiver Leitlinien für Arbeitgeber'
    ],
    targetWordCount: 'ca. 150 Wörter',
    sampleSolution: 'Die Debatte über die Ausgestaltung moderner Arbeitsmodelle hat durch die fortschreitende Digitalisierung eine beispiellose Dynamik erfahren. Aus meiner Sicht ist weder ein dogmatischer Zwang zur ausschließlichen Büropräsenz noch eine vollständige Verlagerung ins Homeoffice zukunftsfähig; vielmehr bietet ein ausgewogenes hybrides Modell die optimalen Synergieeffekte.\n\nEinerseits belegen empirische Studien, dass konzentriertes Arbeiten in den eigenen vier Wänden die Produktivität bei komplexen analytischen Aufgaben signifikant steigert, da störende Unterbrechungen im Großraumbüro entfallen. Zudem entlastet der Wegfall zeitraubender Arbeitswege die Beschäftigten nachhaltig. Andererseits darf die Gefahr sozialer Isolation und des schleichenden Verlusts der Unternehmenskultur keineswegs unterschätzt werden. Spontane Innovationen entstehen häufig in informellen Kaffeepausen oder im direkten persönlichen Diskurs.\n\nDaher empfehle ich Führungskräften, verbindliche Leitlinien zu etablieren: Feste Team-Präsenztage für kreative Workshops, kombiniert mit zeitlicher Autonomie für fokussiertes Arbeiten von zu Hause aus.',
    scoringCriteria: {
      en: 'Teil 1: 60 points, Teil 2: 40 points. Scale evaluated on task fulfillment, cohesion, coherence, grammatical range and accuracy.',
      fa: 'بخش ۱: ۶۰ نمره، بخش ۲: ۴۰ نمره. ساختار منطقی، واژگان تخصصی C1/B2، جملات پیوندی و سبک نگارش رسمی.',
      prs: 'بخش ۱ دارای ۶۰ نمره و بخش ۲ دارای ۴۰ نمره است.',
      tr: '1. Görev 60, 2. Görev 40 puan. Bağlaçlar, terminoloji ve dilbilgisi zenginliği değerlendirilir.',
      ar: 'المهمة 1 (60 نقطة)، والمهمة 2 (40 نقطة). استيفاء المعايير والأصالة اللغوية والتراكيب المتقدمة.',
      es: 'Tarea 1: 60 pts; Tarea 2: 40 pts. Se evalúa coherencia, registro y riqueza sintáctica.'
    }
  },
  sprechen: {
    title: 'Modul Sprechen (15 Minuten • Paarprüfung in 2 Teilen)',
    durationMinutes: 15,
    teil1: {
      name: 'Teil 1: Einen Kurzvortrag halten (ca. 4 Minuten pro Teilnehmer)',
      instruction: {
        en: 'Give a structured 4-minute academic presentation on a complex topic. Structure: Contextual introduction, evaluation of multiple perspectives, real-world examples, and personal synthesis.',
        fa: 'یک سخنرانی علمی و دانشگاهی ۴ دقیقه‌ای ارائه دهید: مقدمه‌چینی، بررسی چند دیدگاه مختلف با ادله منطقی، مثال‌های کاربردی و نتیجه‌گیری ترکیبی.',
        prs: 'یک سخنرانی علمی ۴ دقیقه‌ای با تحلیل چند دیدگاه و استدلال عمیق ارائه نمایید.',
        tr: '4 dakikalık akademik sunum: Giriş, çoklu bakış açısı, örnekler ve sentez.',
        ar: 'عرض أكاديمي منظم لمدة 4 دقائق: مقدمة، استعراض وجهات نظر متعددة، أمثلة واستنتاج.',
        es: 'Exposición de 4 minutos con estructura académica, contraste de puntos de vista y síntesis.'
      },
      prompts: ['Thema: Fachkräftemangel und Zuwanderung', 'Thema: Regulierung von Künstlicher Intelligenz', 'Thema: Stadtentwicklung und bezahlbarer Wohnraum'],
      sampleResponse: 'Kandidat: "Sehr geehrte Prüfungskommission, liebe Kollegin! Ich habe mich für das Thema \'Künstliche Intelligenz: Chance für Innovation oder Risiko für den Arbeitsmarkt?\' entschieden. In meiner Ausführung möchte ich drei Dimensionen beleuchten: Zunächst die wirtschaftlichen Produktivitätsgewinne, anschließend die ethischen und arbeitsrechtlichen Herausforderungen und abschließend regulatorische Lösungsansätze..."'
    },
    teil2: {
      name: 'Teil 2: Diskussion und Problemlösung mit dem Partner (ca. 5 Minuten)',
      instruction: {
        en: 'Debate a complex societal topic with your partner. Respond to objections, use sophisticated argumentative connectors ("Demgegenüber ist einzuwenden...", "Man darf keineswegs verkennen..."), and negotiate a shared recommendation.',
        fa: 'با همتای خود درباره یک چالش اجتماعی بحث و تبادل نظر تخصصی کنید، به ایرادات پاسخ دهید و از عبارات پیشرفته استدلالی استفاده کنید تا به پیشنهاد مشترک برسید.',
        prs: 'با پارتنر خود مباحثه منطقی و مسلکی کرده و به یک راه حل مشترک برسید.',
        tr: 'Partnerinizle karmaşık bir konuyu tartışın, itirazları karşılayın ve ortak bir öneride uzlaşın.',
        ar: 'ناقش قضية مجتمعية مع زميلك، واستخدم روابط الجدال المتقدمة للوصول إلى توصية مشتركة.',
        es: 'Debate con tu compañero rebatiendo argumentos con conectores formales hasta llegar a un consenso.'
      },
      topicCards: [
        'Thema A: Einführung einer verpflichtenden Weiterbildungsquote für Industrieunternehmen',
        'Thema B: Homeoffice-Anspruch gesetzlich verankern oder flexibel vereinbaren?',
        'Thema C: Nachhaltigkeit im Fuhrpark: Umstellung auf E-Mobilität bis 2028'
      ],
      sampleResponse: 'Kandidat A: "Ich plädiere nachdrücklich dafür, dass das Unternehmen vorrangig in Photovoltaikanlagen investiert, da sich diese Amortisation binnen fünf Jahren einstellt."\nKandidat B: "Dieser Argumentation kann ich mich nur bedingt anschließen. In Anbetracht der aktuellen Energiekrise erachte ich die Umstellung der Heizanlagen auf industrielle Großwärmepumpen für dringlicher, um von fossilem Gas unabhängig zu werden."\nKandidat A: "Das ist gewiss ein valider Einwand. Allerdings ließe sich beides kombinieren, indem der Solarstrom direkt die Wärmepumpen speist."'
    },
    teil3: {
      name: 'Teil 3: Auf Einwände und Prüferfragen reagieren (ca. 3 Minuten)',
      instruction: {
        en: 'Answer challenging follow-up questions from the examiners defending your thesis with nuanced argumentation.',
        fa: 'به پرسش‌های تکمیلی و چالش‌برانگیز داوران پاسخ داده و از دیدگاه خود با استدلال‌های سنجیده دفاع کنید.',
        prs: 'به سوالات چالش‌برانگیز داوران پاسخ دهید و با استدلال قوی موضع خود را حفظ نمایید.',
        tr: 'Sınav komisyonunun zorlayıcı derinleştirme sorularını mantıklı argümanlarla yanıtlayın.',
        ar: 'أجب عن أسئلة لجنة التحكيم المعمقة ودافع عن وجهة نظرك بحجج متزنة ورصينة.',
        es: 'Responde a las preguntas de profundización del tribunal defendiendo tu tesis con solvencia argumentativa.'
      },
      planningScenario: 'Entwicklung einer Nachhaltigkeitsstrategie für ein mittelständisches Industrieunternehmen',
      discussionPoints: [
        'Investition in Photovoltaik auf den Fabrikdächern vs. Wärmepumpen',
        'Finanzielle Anreize für Mitarbeiter zur Nutzung des ÖPNV',
        'Zertifizierung nach internationalen Umweltstandards (ISO 14001)'
      ],
      sampleResponse: 'Prüfer: "Herr Kandidat, wie wollen Sie die Belegschaft von diesen drastischen Einsparungen überzeugen?"\nKandidat: "Ein berechtigter Punkt! Entscheidend ist eine transparente Kommunikationspolitik: Wenn die Mitarbeiter den wirtschaftlichen und ökologischen Mehrwert nachvollziehen können, steigt die Akzeptanz nachweislich."'
    }
  }
};
