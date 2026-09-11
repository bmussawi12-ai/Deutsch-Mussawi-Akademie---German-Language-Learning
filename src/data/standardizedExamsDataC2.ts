import { StandardizedExam } from '../types';

// =========================================================================
// GOETHE-ZERTIFIKAT C2: GROSSES DEUTSCHES SPRACHDIPLOM (OFFIZIELL: 210 MINUTEN)
// Lesen: 80 Min (4 Teile) | Hören: 35 Min (3 Teile) | Schreiben: 80 Min | Sprechen: 15 Min
// =========================================================================
export const EXAM_GOETHE_C2: StandardizedExam = {
  id: 'exam_goethe_c2',
  title: 'Goethe-Zertifikat C2: GDS (Offizieller Standard)',
  standard: 'Goethe-Zertifikat',
  level: 'C2.1',
  totalDurationMinutes: 210,
  passingScore: '60% (60 / 100 Punkte)',
  strategy: {
    level: 'C2.1',
    timeManagement: [
      {
        section: 'Lesen (Reading) - 80 Minuten • 4 Teile',
        allocatedMinutes: 80,
        tip: {
          en: '80 minutes for 4 parts: Teil 1 (Cognitive science & epistemology), Teil 2 (Constitutional law & jurisprudence), Teil 3 (Literary feuilleton & aesthetics), Teil 4 (Systems theory & sociological discourse). Allocate approx. 20 min per text.',
          fa: '۸۰ دقیقه برای ۴ بخش: بخش ۱ (علوم شناختی و معرفت‌شناسی)، بخش ۲ (حقوق اساسی و قضاوت)، بخش ۳ (نقد ادبی و زیبایی‌شناسی)، بخش ۴ (نظریه سیستم‌ها و جامعه‌شناسی). حدود ۲۰ دقیقه برای هر بخش اختصاص دهید.',
          prs: '۸۰ دقیقه برای ۴ بخش سنگین و عمیق آکادمیک در سطح عالی C2.',
          tr: '80 dakikada 4 bölüm: Bilişsel bilim, anayasa hukuku, edebi eleştiri ve sistemler teorisi.',
          ar: '80 دقيقة مقسمة على 4 أقسام: العلوم الإدراكية، والقانون الدستوري، والنقد الأدبي، ونظرية النظم الاجتماعية.',
          es: '80 minutos para 4 partes: neurofilosofía, derecho constitucional, crítica literaria y teoría sociológica de sistemas.'
        }
      },
      {
        section: 'Hören (Listening) - 35 Minuten • 3 Teile',
        allocatedMinutes: 35,
        tip: {
          en: '35 minutes for 3 audio sections: Teil 1 (Scientific disputation), Teil 2 (Radio interview on humanities & culture), Teil 3 (Academic colloquium on climate jurisprudence). Notes during listening are vital.',
          fa: '۳۵ دقیقه برای ۳ بخش شنیداری: بخش ۱ (مناظره علمی)، بخش ۲ (مصاحبه رادیویی درباره فرهنگ و علوم انسانی)، بخش ۳ (میزگرد دانشگاهی درباره حقوق اقلیم). یادداشت‌برداری دقیق حین شنیدن حیاتی است.',
          prs: '۳۵ دقیقه برای ۳ بخش گفتگوی علمی و تخصصی با یادداشت‌برداری سریع.',
          tr: '35 dakikada 3 dinleme bölümü: Bilimsel münazara, radyo röportajı ve akademik kolokyum.',
          ar: '35 دقيقة لـ 3 أقسام استماع: مناظرة علمية، ومقابلة إذاعية فكرية، ومحاضرة جامعية في القانون المناخي.',
          es: '35 minutos para 3 secciones: debate interdisciplinar, entrevista radiofónica y coloquio universitario.'
        }
      },
      {
        section: 'Schreiben (Writing) - 80 Minuten • Meisterhafter Diskursessay',
        allocatedMinutes: 80,
        tip: {
          en: '80 minutes to craft a masterly discourse essay (approx. 350-450 words) incorporating high-register hypotaxis, nominal style, and conceptual rigor.',
          fa: '۸۰ دقیقه برای نگارش یک مقاله تحلیلی شاهکار (حدود ۳۵۰ تا ۴۵۰ کلمه) با ساختارهای نحوی تودرتو و سبک اسمی غنی.',
          prs: '۸۰ دقیقه برای نوشتن مقاله فلسفی و تحلیلی با واژگان فاخر.',
          tr: '80 dakikada ana dili yetkinliğinde, sentaktik derinliği yüksek 350-450 kelimelik başyapıt deneme.',
          ar: '80 دقيقة لكتابة مقال تحليلي رفيع المستوى (حوالي 350-450 كلمة) بأسلوب اسمي بليغ وتراكيب نحوية بالغة الدقة.',
          es: '80 minutos para redactar un ensayo discursivo magistral de 350-450 palabras con sintaxis polifónica.'
        }
      },
      {
        section: 'Sprechen (Speaking) - 15 Minuten • Prüfungsvortrag & Disputation',
        allocatedMinutes: 15,
        tip: {
          en: '15 minutes: Teil 1 (Autonomous academic lecture, 5 min) + Teil 2 (Socratic defense against examiner objections, 10 min).',
          fa: '۱۵ دقیقه: بخش ۱ (سخنرانی مستقل دانشگاهی، ۵ دقیقه) + بخش ۲ (دفاع سقراطی در برابر ایرادات داوران، ۱۰ دقیقه).',
          prs: '۱۵ دقیقه سخنرانی آزاد علمی و پاسخ به نقد اساتید.',
          tr: '15 dakikada 5 dakikalık akademik monolog sunum ve 10 dakikalık jüri karşısında diyalektik savunma.',
          ar: '15 دقيقة: 5 دقائق لإلقاء محاضرة أكاديمية مرتجلة و10 دقائق للدفاع الجدلي أمام اعتراضات لجنة الامتحان.',
          es: '15 minutos: ponencia académica de 5 min y defensa dialéctica de 10 min ante el tribunal.'
        }
      }
    ],
    stepByStepStrategies: [
      {
        title: 'C2 Leseverstehen: Dekonstruktion komplexer Hypotaxen & Ambiguitäten',
        steps: [
          {
            en: '1. Identify the overarching thesis and dialectical tensions before reading questions.',
            fa: '۱. پیش از خواندن سوالات، تز اصلی و تقابل‌های دیالکتیکی متن را مشخص کنید.',
            prs: '۱. مفاهیم و اهداف نویسنده را قبل از سوالات مرور کنید.',
            tr: '1. Sorulara geçmeden önce ana tezi ve diyalektik zıtlıkları belirleyin.',
            ar: '1. حدد الأطروحة المركزية والتوترات الجدلية في النص قبل الاطلاع على الأسئلة.',
            es: '1. Identifica la tesis central y las antinomias conceptuales antes de abordar las preguntas.'
          },
          {
            en: '2. Isolate modal particles and subtle subjunctives (Konjunktiv I/II) to distinguish fact from authorial conjecture.',
            fa: '۲. قیود معنادار و وجوه التزامی (Konjunktiv I/II) را برای تمایز فکت از فرضیات نویسنده بررسی نمایید.',
            prs: '۲. به افعال وجهی و التزامی برای تشخیص نظر نویسنده دقت کنید.',
            tr: '2. Yazarın varsayımlarını kesin gerçeklerden ayırmak için bağlaç ve kipleri dikkatle inceleyin.',
            ar: '2. عزل صيغ الالتزام (Konjunktiv) والجزيئات الدلالية للتمييز بين الوقائع المبرهنة وتخمينات الكاتب.',
            es: '2. Desgrana los subjuntivos y partículas modales para separar hechos incontrovertibles de hipótesis autorales.'
          }
        ]
      }
    ],
    commonMistakes: [
      {
        mistake: 'Monotone Parataxen und ungenaue lexikalische Begriffsverwendung',
        correction: 'Nutzen Sie Partizipialkonstruktionen, Gerundiva und semantisch präzise Fachtermini.',
        explanation: {
          en: 'At C2 level, evaluators look for natural syntactical flexibility, sophisticated collocations, and idiomatic ease.',
          fa: 'در سطح C2، ممتحنان به دنبال تنوع نحوی طبیعی، همایندهای واژگانی دقیق و روانی اصطلاحی هستند.',
          prs: 'در سطح C2 تسلط بر ترکیبات واژگانی تخصصی معیار اصلی نمره‌دهی است.',
          tr: 'C2 düzeyinde değerlendiriciler sentaktik esnekliği ve terimsel zenginliği titizlikle ararlar.',
          ar: 'في مستوى C2، يبحث المصححون عن المرونة التعبيرية والتنوع النحوي والمصطلحي عالي التخصص.',
          es: 'En C2 los examinadores evalúan la plasticidad sintáctica, las colocaciones cultas y la soltura idiomática.'
        }
      }
    ]
  },
  lesen: {
    title: 'Modul Lesen: Epistemologie, Verfassungsrecht, Kulturfeuilleton & Systemtheorie (80 Minuten)',
    durationMinutes: 80,
    texts: [
      {
        title: 'Teil 1: Kognitionswissenschaft, Epistemologie und Intentionalität',
        sourceType: 'Zeitschrift für philosophische Forschung, Ausgabe 1/2025',
        body: 'Die Debatte um das Verhältnis von phänomenalem Bewusstsein und neuronaler Konstitution berührt das Fundament unserer Selbstauslegung. Während der eliminative Materialismus die Existenz subjektiver Qualia als neuronale Fiktion abtut, postulieren Vertreter des Panpsychismus eine fundamentale, nicht-reduzierbare Eigenschaft des Kosmos. In jüngster Zeit gewinnt ein integrativer Ansatz an Kontur: Das Konzept der Autopoiesis begreift das kognitive System nicht als passiven Empfänger externer Reize, sondern als operativ geschlossenes Gefüge, das seine eigene Welt immanent erzeugt. Hierbei erweist sich die Intentionalität als emergentes Phänomen, das die kategoriale Kluft zwischen Materie und Geist überbrückt, ohne in dualistische Sackgassen zu geraten. Kritikern gilt dieser Ansatz jedoch als tautologisch, da er die Entstehung des subjektiven Erlebens letztlich nur auf eine andere Organisationsebene verschiebe, ohne das qualitative Rätsel zu lösen.',
        questions: [
          {
            id: 'goethe_c2_l_q1',
            question: 'Welche Grundannahme vertritt der im Text erwähnte eliminative Materialismus?',
            options: [
              'Subjektive Qualia seien bloße Fiktionen ohne reale eigenständige neuronale Existenz.',
              'Das Bewusstsein sei eine fundamentale Eigenschaft aller Materie im Kosmos.',
              'Kognitive Systeme seien passiv auf externe Reize angewiesen.',
              'Geist und Materie bildeten einen unüberwindbaren ontologischen Dualismus.'
            ],
            correctAnswer: 'Subjektive Qualia seien bloße Fiktionen ohne reale eigenständige neuronale Existenz.',
            explanation: {
              en: 'The text states: "Während der eliminative Materialismus die Existenz subjektiver Qualia als neuronale Fiktion abtut".',
              fa: 'متن تصریح می‌کند که ماتریالیسم حذفی کیفیات ذهنی (Qualia) را به عنوان توهم نورونی رد می‌کند.',
              prs: 'ماتریالیسم حذفی حس آگاهی را توهم می‌داند.',
              tr: 'Metin, eliminatif materyalizmin sübjektif nitelikleri (qualia) sinirsel bir kurgu olarak gördüğünü belirtmektedir.',
              ar: 'يصرح النص بأن المادية الإقصائية تعد الكيفيات الذاتية مجرد وهم عصبي لا وجود مستقلاً له.',
              es: 'El texto afirma que el materialismo eliminativo despacha los qualia subjetivos como mera ficción neuronal.'
            }
          },
          {
            id: 'goethe_c2_l_q2',
            question: 'Wie charakterisiert der integrative Ansatz der Autopoiesis das kognitive System?',
            options: [
              'Als operativ geschlossenes Gefüge, das seine Welt immanent erzeugt.',
              'Als rein determinierte Maschine, die passive Reize verarbeitet.',
              'Als metaphysische Entität losgelöst von aller biologischen Bindung.',
              'Als Produkt zufälliger evolutionärer Fehlentwicklungen.'
            ],
            correctAnswer: 'Als operativ geschlossenes Gefüge, das seine Welt immanent erzeugt.',
            explanation: {
              en: 'The text states: "Das Konzept der Autopoiesis begreift das kognitive System (...) als operativ geschlossenes Gefüge, das seine eigene Welt immanent erzeugt".',
              fa: 'متن سیستم را مجموعه‌ای با انسداد عملیاتی می‌داند که جهان خود را به صورت درونی خلق می‌کند.',
              prs: 'سیستم شناختی ساختاری خودبسته است که جهان خود را در درون خود می‌سازد.',
              tr: 'Metne göre otopoiesis sistemi, kendi dünyasını içsel olarak üreten operasyonel kapalı bir yapı olarak kavrar.',
              ar: 'يعرف النص النظام وفق مفهوم التوليد الذاتي ككيان منغلق إجرائياً ينتج عالمه الخاص به بصورة ضمنية.',
              es: 'El texto define el sistema como una estructura operativamente clausurada que genera su mundo de forma inmanente.'
            }
          },
          {
            id: 'goethe_c2_l_q3',
            question: 'Welche Einwendung formulieren Kritiker gegen das Konzept der Autopoiesis?',
            options: [
              'Es verschiebe das Problem des subjektiven Erlebens nur auf eine andere Ebene, ohne es zu erklären.',
              'Es beruhe auf veralteten Vorstellungen aus der klassischen Mechanik.',
              'Es leugne die Existenz biologischer Organismen gänzlich.',
              'Es lasse sich nicht mit computergestützten Simulationen in Einklang bringen.'
            ],
            correctAnswer: 'Es verschiebe das Problem des subjektiven Erlebens nur auf eine andere Ebene, ohne es zu erklären.',
            explanation: {
              en: 'The text concludes: "Kritikern gilt dieser Ansatz jedoch als tautologisch, da er die Entstehung des subjektiven Erlebens letztlich nur auf eine andere Organisationsebene verschiebe...".',
              fa: 'منتقدان معتقدند این رویکرد فقط مشکل ادراک درونی را به سطحی دیگر منتقل می‌کند بدون اینکه آن را حل کند.',
              prs: 'انتقاد اصلی این است که معما حل نشده بلکه صرفاً به سطح دیگری جابجا شده است.',
              tr: 'Eleştirmenler bu yaklaşımın öznel deneyim bilmecesini çözmeyip yalnızca başka bir örgütlenme düzeyine ötelediğini ileri sürerler.',
              ar: 'يرى النقاد أن هذا النموذج مجرد تحصيل حاصل ينقل لغز التجربة الذاتية إلى مستوى تنظيمي آخر دون تفسيره.',
              es: 'Los críticos aducen que el enfoque no resuelve el enigma cualitativo sino que meramente lo desplaza de nivel organizativo.'
            }
          },
          {
            id: 'goethe_c2_l_q4',
            question: 'Welche Funktion erfüllt die Intentionalität im Rahmen des autopoietischen Modells?',
            options: [
              'Sie überbrückt die kategoriale Kluft zwischen Materie und Geist als emergentes Phänomen.',
              'Sie beweist die vollständige Überlegenheit des cartesianischen Substanzdualismus.',
              'Sie fungiert als automatischer Filter gegen unerwünschte Sinneseindrücke.',
              'Sie schließt jede Form von Wechselwirkung mit der physischen Umwelt aus.'
            ],
            correctAnswer: 'Sie überbrückt die kategoriale Kluft zwischen Materie und Geist als emergentes Phänomen.',
            explanation: {
              en: 'Text states: "Hierbei erweist sich die Intentionalität als emergentes Phänomen, das die kategoriale Kluft zwischen Materie und Geist überbrückt...".',
              fa: 'قصدیت به عنوان پدیده‌ای برآمده، شکاف میان ماده و ذهن را پل می‌زند.',
              prs: 'قصدیت پلی میان جهان فیزیکی و ذهن به شمار می‌رود.',
              tr: 'Metne göre niyetlilik (intentionality), madde ve zihin arasındaki kategorik uçurumu kapatan beliren bir olgudur.',
              ar: 'تسد القصدية الفجوة الفئوية بين المادة والعقل كظاهرة منبثقة دون الوقوع في ثنائيات مسدودة.',
              es: 'La intencionalidad actúa como fenómeno emergente que tiende un puente sobre la brecha categorial entre materia y espíritu.'
            }
          },
          {
            id: 'goethe_c2_l_q5',
            question: 'Wie wird der Panpsychismus im Eröffnungssatz des Textes charakterisiert?',
            options: [
              'Er betrachtet Bewusstsein als fundamentale, nicht-reduzierbare Eigenschaft des Kosmos.',
              'Er erklärt alle geistigen Regungen zu chemischen Reaktionen.',
              'Er fordert die Abschaffung jeglicher philosophischer Begrifflichkeit.',
              'Er beschränkt Erkenntnis auf rein mathematische Gleichungen.'
            ],
            correctAnswer: 'Er betrachtet Bewusstsein als fundamentale, nicht-reduzierbare Eigenschaft des Kosmos.',
            explanation: {
              en: 'Text states: "...postulieren Vertreter des Panpsychismus eine fundamentale, nicht-reduzierbare Eigenschaft des Kosmos."',
              fa: 'پان‌روان‌باوری آگاهی را ویژگی بنیادین و کاهش‌ناپذیر کیهان می‌داند.',
              prs: 'باور به وجود شعور در تمام اجزای هستی.',
              tr: 'Panpsişizm, bilinci evrenin indirgenemez ve temel bir niteliği olarak kabul eder.',
              ar: 'يعد مذهب شمولية النفس الوعي خاصية جوهرية وغير قابلة للاختزال في الكون.',
              es: 'El panpsiquismo postula la conciencia como cualidad cósmica primordial e irreductible.'
            }
          }
        ]
      },
      {
        title: 'Teil 2: Verfassungsgerichtsbarkeit und Normenkontrolle im Rechtsstaat',
        sourceType: 'JuristenZeitung (JZ), Grundsatzabhandlung zur Normenkontrolle',
        body: 'Die gerichtliche Kontrolle parlamentarischer Hoheitsakte durch das Bundesverfassungsgericht bewegt sich in einem permanenten Spannungsverhältnis zwischen demokratischer Legitimation und grundrechtlicher Bindung. In seiner jüngsten Rechtsprechung hat der Senat bekräftigt, dass der Gesetzgeber über einen weiten Gestaltungsspielraum verfügt, dieser jedoch an den unantastbaren Wesensgehalt der Menschenwürde (Art. 1 Abs. 1 GG) gebunden bleibt. Verfassungswidrig ist eine Norm mithin dann, wenn sie den Verhältnismäßigkeitsgrundsatz in eklatanter Weise verletzt oder das Übermaßverbot missachtet. Dabei obliegt es dem Gericht, die Abwägung nicht an die Stelle des Gesetzgebers zu setzen, sondern die Einhaltung der verfassungsrechtlichen Leitplanken penibel zu überwachen. Ein juristischer Eingriff in exekutive Kernbereiche setzt stets voraus, dass substantielle Grundrechtseingriffe vorliegen, die einer verfassungsrechtlichen Rechtfertigung entbehren.',
        questions: [
          {
            id: 'goethe_c2_l_q6',
            question: 'Unter welcher Bedingung gilt eine gesetzliche Norm laut Bundesverfassungsgericht als verfassungswidrig?',
            options: [
              'Wenn sie den Verhältnismäßigkeitsgrundsatz eklatant verletzt oder das Übermaßverbot missachtet.',
              'Sobald eine parlamentarische Opposition gegen den Entwurf gestimmt hat.',
              'Wenn sie von den europäischen Vorgaben in unwesentlichen Details abweicht.',
              'Ausschließlich dann, wenn der Bundespräsident seine Unterschrift verweigert.'
            ],
            correctAnswer: 'Wenn sie den Verhältnismäßigkeitsgrundsatz eklatant verletzt oder das Übermaßverbot missachtet.',
            explanation: {
              en: 'The text states: "Verfassungswidrig ist eine Norm mithin dann, wenn sie den Verhältnismäßigkeitsgrundsatz in eklatanter Weise verletzt oder das Übermaßverbot missachtet".',
              fa: 'متن اعلام می‌کند نقض آشکار اصل تناسب یا ممنوعیت افراط موجب مغایرت با قانون اساسی است.',
              prs: 'نقض آشکار اصل تناسب باعث ابطال قانون اساسی می‌شود.',
              tr: 'Metne göre bir norm, ölçülülük ilkesini açıkça çiğnediğinde veya aşırılık yasağını göz ardı ettiğinde anayasaya aykırıdır.',
              ar: 'تعد القاعدة غير دستورية إذا انتهكت مبدأ التناسب انتهاكاً صارخاً أو تجاهلت حظر الإفراط القانوني.',
              es: 'Una norma es inconstitucional si vulnera flagrantemente el principio de proporcionalidad o quebranta la prohibición de exceso.'
            }
          },
          {
            id: 'goethe_c2_l_q7',
            question: 'Welche Grenze darf das Gericht bei der Überprüfung parlamentarischer Akte keinesfalls überschreiten?',
            options: [
              'Es darf die eigene politische Abwägung nicht an die Stelle des gewählten Gesetzgebers setzen.',
              'Es darf niemals Urteile gegen staatliche Behörden erlassen.',
              'Es muss ausnahmslos alle Gesetze ohne Vorbehalt gutheißen.',
              'Es darf sich nicht auf das Grundgesetz berufen.'
            ],
            correctAnswer: 'Es darf die eigene politische Abwägung nicht an die Stelle des gewählten Gesetzgebers setzen.',
            explanation: {
              en: 'Text notes: "Dabei obliegt es dem Gericht, die Abwägung nicht an die Stelle des Gesetzgebers zu setzen...".',
              fa: 'دادگاه نباید صلاحدید و ارزیابی خود را جانشین ارزیابی قانون‌گذار منتخب کند.',
              prs: 'دادگاه حق دخالت در اختیارات سیاسی پارلمان را ندارد.',
              tr: 'Mahkeme kendi siyasi değerlendirmesini yasa koyucunun yerine koymaktan kaçınmalıdır.',
              ar: 'لا يجوز للمحكمة أن تحل تقديراتها التقديرية محل المشرع البرلماني المنتخب.',
              es: 'El tribunal no debe sustituir la ponderación legislativa por sus propias valoraciones políticas.'
            }
          },
          {
            id: 'goethe_c2_l_q8',
            question: 'Worin besteht der unantastbare Maßstab, an den der Gesetzgeber ausnahmslos gebunden ist?',
            options: [
              'Am Wesensgehalt der Menschenwürde nach Artikel 1 Absatz 1 GG.',
              'An den aktuellen fiskalischen Haushaltsüberschüssen.',
              'An den Stimmungsbildern in kurzfristigen Umfragen.',
              'An den Weisungen regionaler Verwaltungsbehörden.'
            ],
            correctAnswer: 'Am Wesensgehalt der Menschenwürde nach Artikel 1 Absatz 1 GG.',
            explanation: {
              en: 'Direct reference to Article 1 Paragraph 1 GG: "...an den unantastbaren Wesensgehalt der Menschenwürde gebunden bleibt."',
              fa: 'بند ۱ اصل ۱ قانون اساسی درباره کرامت خدشه‌ناپذیر انسان.',
              prs: 'احترام به کرامت انسان طبق ماده اول قانون اساسی.',
              tr: 'Anayasa Madde 1 Fıkra 1 uyarınca insan onurunun dokunulmaz özü.',
              ar: 'جوهر كرامة الإنسان المصونة وفق المادة 1 الفقرة 1 من القانون الأساسي.',
              es: 'El contenido esencial e inviolable de la dignidad humana (Art. 1 párr. 1 LF).'
            }
          },
          {
            id: 'goethe_c2_l_q9',
            question: 'Was ist die unabdingbare Voraussetzung für einen gerichtlichen Eingriff in exekutive Kernbereiche?',
            options: [
              'Das Vorliegen substantieller Grundrechtseingriffe ohne verfassungsrechtliche Rechtfertigung.',
              'Ein einstimmiger Beschluss des gesamten Bundeskabinetts.',
              'Die Zustimmung aller sechzehn Bundesländer.',
              'Eine vorherige Genehmigung durch internationale Schiedsgerichte.'
            ],
            correctAnswer: 'Das Vorliegen substantieller Grundrechtseingriffe ohne verfassungsrechtliche Rechtfertigung.',
            explanation: {
              en: 'Text states: "...dass substantielle Grundrechtseingriffe vorliegen, die einer verfassungsrechtlichen Rechtfertigung entbehren."',
              fa: 'وجود نقض اساسی در حقوق بنیادین بدون توجیه معتبر قانون اساسی.',
              prs: 'نقض آشکار حقوق شهروندی بدون دلیل قانونی.',
              tr: 'Anayasal meşruiyetten yoksun esaslı temel hak ihlallerinin mevcut olması.',
              ar: 'وجود مساس جوهري بالحقوق الأساسية يفتقر للتبرير الدستوري المشروع.',
              es: 'La concurrencia de afectaciones sustanciales a derechos fundamentales desprovistas de justificación constitucional.'
            }
          },
          {
            id: 'goethe_c2_l_q10',
            question: 'Wie beschreibt der Text das Verhältnis zwischen demokratischer Legitimation und grundrechtlicher Bindung?',
            options: [
              'Als permanentes Spannungsverhältnis im Rahmen der Rechtsstaatlichkeit.',
              'Als harmonische und völlig konfliktfreie Symbiose.',
              'Als historischen Irrtum des 19. Jahrhunderts.',
              'Als unbedeutende formalistische Randerscheinung.'
            ],
            correctAnswer: 'Als permanentes Spannungsverhältnis im Rahmen der Rechtsstaatlichkeit.',
            explanation: {
              en: 'Opening sentence: "...bewegt sich in einem permanenten Spannungsverhältnis zwischen demokratischer Legitimation und grundrechtlicher Bindung."',
              fa: 'تقابل و تنش دائمی بین مشروعیت دموکراتیک و تعهد به حقوق بنیادین.',
              prs: 'کشمکش همیشگی میان تصمیمات اکثریت و حقوق اساسی افراد.',
              tr: 'Demokratik meşruiyet ile temel hak bağlılığı arasındaki kalıcı gerilim alanı.',
              ar: 'علاقة توتر دائم بين الشرعية الديمقراطية والالتزام بالحقوق الأساسية.',
              es: 'Una dialéctica de tensión permanente entre legitimidad democrática y vinculación a los derechos fundamentales.'
            }
          }
        ]
      },
      {
        title: 'Teil 3: Das Feuilleton: Über das poetische Verweilen im Zeitalter der Eile',
        sourceType: 'Frankfurter Allgemeine Zeitung (FAZ), Feuilleton',
        body: 'Wer heute schreibt, schreibt gegen die Fliehkräfte einer hypermedialen Gegenwart an. Die Tyrannei des Unmittelbaren hat den langen Atem erstickt, der dem klassischen Roman und der philosophischen Kontemplation eigen war. Was nottäte, wäre nicht ein noch schnellerer Umschlag von Worten, sondern das geduldige Verweilen bei der Ambiguität. Ein meisterhafter Stil erschöpft sich nicht in der barschen Übermittlung von Fakten; er ist vielmehr das Schwingen der Obertöne, das Aufleuchten von Bedeutungen im Zwischenraum der Wörter. Erst in dieser ästhetischen Entschleunigung konstituiert sich eine Autonomie, die den Rezipienten vor der totalen Kolonialisierung seiner Aufmerksamkeit durch Aufmerksamkeitsökonomien bewahrt. Wer den Sprachklang verlernt, verliert mit ihm die Fähigkeit zum dialektischen Zweifel.',
        questions: [
          {
            id: 'goethe_c2_l_q11',
            question: 'Worin besteht laut dem Feuilletonist das Wesen eines meisterhaften literarischen Stils?',
            options: [
              'Im Schwingen der Obertöne und dem Aufleuchten von Sinn im Zwischenraum der Wörter.',
              'In der möglichst schnellen und faktenbasierten Datenübermittlung.',
              'Im strikten Verzicht auf jede Form von Metaphorik und Satzverschränkung.',
              'In der Anpassung an die algorithmischen Kürzungszwänge sozialer Medien.'
            ],
            correctAnswer: 'Im Schwingen der Obertöne und dem Aufleuchten von Sinn im Zwischenraum der Wörter.',
            explanation: {
              en: 'The author states: "Ein meisterhafter Stil (...) ist vielmehr das Schwingen der Obertöne, das Aufleuchten von Bedeutungen im Zwischenraum der Wörter".',
              fa: 'نویسنده بیان می‌دارد که سبک متعالی در طنین ظریف معانی و درخشش در فواصل بین واژگان نهفته است.',
              prs: 'سبک عالی ادبی در طنین ظریف کلمات و زیبایی پنهان میان واژه‌ها آشکار می‌شود.',
              tr: 'Yazar, usta üslubun kelimeler arasındaki boşluklarda anlamın parıldaması ve ahenk titreşimleri olduğunu belirtir.',
              ar: 'يرى الكاتب أن الأسلوب الرفيع يكمن في ارتعاش النغمات الإيحائية واشتعال المعنى في فضاء ما بين السطور.',
              es: 'El autor define el estilo magistral como la resonancia de armónicos y el destello de sentido en el intersticio entre vocablos.'
            }
          },
          {
            id: 'goethe_c2_l_q12',
            question: 'Welche Gefahr sieht der Verfasser in der Herrschaft der "Tyrannei des Unmittelbaren"?',
            options: [
              'Sie ersticke die Kontemplation und den langen Atem des vertieften Denkens.',
              'Sie führe zur Verarmung öffentlicher Bibliotheken.',
              'Sie mache das Erlernen von Fremdsprachen überflüssig.',
              'Sie zerstöre die finanzielle Rentabilität von Verlagshäusern.'
            ],
            correctAnswer: 'Sie ersticke die Kontemplation und den langen Atem des vertieften Denkens.',
            explanation: {
              en: 'Text says: "Die Tyrannei des Unmittelbaren hat den langen Atem erstickt, der dem klassischen Roman und der philosophischen Kontemplation eigen war."',
              fa: 'استبداد فوریت، ژرف‌اندیشی و تنفس عمیق تفکر فلسفی را خفه کرده است.',
              prs: 'شتاب‌زدگی عصر حاضر تمرکز عمیق را از بین برده است.',
              tr: 'Anındalık tiranlığı, klasik romanın ve felsefi tefekkürün derin soluğunu boğmuştur.',
              ar: 'طغيان الفورية الرقمية يخنق التأمل الهادئ والجهد الفكري المطول الملازم للروايات والبحث الفلسفي.',
              es: 'La tiranía de la inmediatez asfixia la serenidad reflexiva y la perseverancia propias de la meditación profunda.'
            }
          },
          {
            id: 'goethe_c2_l_q13',
            question: 'Welche emanzipatorische Wirkung misst der Autor der "ästhetischen Entschleunigung" bei?',
            options: [
              'Sie schütze die Aufmerksamkeit des Einzelnen vor algorithmischer Kolonialisierung.',
              'Sie beschleunige die Produktion von literarischen Bestsellern.',
              'Sie garantiere wirtschaftlichen Erfolg auf globalen Kunstmärkten.',
              'Sie ersetze wissenschaftliche Experimente durch intuitive Fantasie.'
            ],
            correctAnswer: 'Sie schütze die Aufmerksamkeit des Einzelnen vor algorithmischer Kolonialisierung.',
            explanation: {
              en: 'Author notes: "...bewahrt den Rezipienten vor der totalen Kolonialisierung seiner Aufmerksamkeit durch Aufmerksamkeitsökonomien."',
              fa: 'آهستگی زیبایی‌شناختی توجه مخاطب را از استعمار الگوریتمی اقتصاد توجه مصون می‌دارد.',
              prs: 'محافظت از ذهن انسان در برابر انحرافات تحمیلی اینترنت.',
              tr: 'Bireyin dikkatini, dikkat ekonomilerinin topyekun sömürgeleştirmesine karşı korur.',
              ar: 'تصون التباطؤات الجمالية وعي المتلقي من استعمار اقتصاديات الانتباه الخوارزمية الجارفة.',
              es: 'Preserva la atención del receptor frente a la colonización total impuesta por la economía de la atención.'
            }
          },
          {
            id: 'goethe_c2_l_q14',
            question: 'Welcher Verlust droht laut Schlusssatz jenem, der den "Sprachklang verlernt"?',
            options: [
              'Der Verlust der geistigen Fähigkeit zum dialektischen Zweifel.',
              'Das Unvermögen, grammatisch fehlerfrei zu buchstabieren.',
              'Die Unfähigkeit, im Geschäftsleben Gehaltsverhandlungen zu führen.',
              'Das Vergessen historischer Jahreszahlen.'
            ],
            correctAnswer: 'Der Verlust der geistigen Fähigkeit zum dialektischen Zweifel.',
            explanation: {
              en: 'Concludes: "Wer den Sprachklang verlernt, verliert mit ihm die Fähigkeit zum dialektischen Zweifel."',
              fa: 'هر کس طنین آهنگین زبان را از دست بدهد، توانایی تردید دیالکتیکی را نیز گم می‌کند.',
              prs: 'کسی که زیبایی زبان را فراموش کند توانایی شک و تفکر نقادانه را از دست می‌دهد.',
              tr: 'Dilin tınısını unutan kişi, diyalektik şüphe yeteneğini de beraberinde kaybeder.',
              ar: 'من ينسى نغم اللغة وإيقاعها يفقد حتماً القدرة على الشك الجدلي النقدي البناء.',
              es: 'Quien olvida la melodía del lenguaje pierde al unísono la aptitud para la duda dialéctica.'
            }
          },
          {
            id: 'goethe_c2_l_q15',
            question: 'Was fordert der Verfasser statt eines rascheren Umschlags von Wörtern?',
            options: [
              'Das geduldige und aufmerksame Verweilen bei der Ambiguität.',
              'Die radikale Tilgung mehrdeutiger Fremdwörter aus Zeitungen.',
              'Die Rückkehr zur ausschließlich mündlichen Erzähltradition.',
              'Ein gesetzliches Verbot moderner Informationsnetzwerke.'
            ],
            correctAnswer: 'Das geduldige und aufmerksame Verweilen bei der Ambiguität.',
            explanation: {
              en: 'Text explicitly states: "Was nottäte, wäre (...) das geduldige Verweilen bei der Ambiguität."',
              fa: 'توقف صبورانه در ابهام و چندمعنایی به جای شتاب کور.',
              prs: 'شکیبایی در برابر کلمات پیچیده و مفاهیم چندبعدی.',
              tr: 'Kelimelerin hızlı tüketimi yerine belirsizlik ve çokanlamlılık üzerinde sabırla durmak.',
              ar: 'المكث الصبور والمتأني عند التباس المعنى وتعدد التأويلات بدلاً من استهلاك الكلمات المتعجل.',
              es: 'La permanencia paciente ante la ambigüedad en lugar de una rotación vertiginosa de palabras.'
            }
          }
        ]
      },
      {
        title: 'Teil 4: Soziologische Systemtheorie: Autopoietische Kommunikation',
        sourceType: 'Kölner Zeitschrift für Soziologie und Sozialpsychologie',
        body: 'Niklas Luhmanns systemtheoretische Grundlegung bricht radikal mit dem anthropozentrischen Dogma der Soziologie: Nicht Menschen handeln, sondern die Kommunikation kommuniziert. Gesellschaftliche Funktionssysteme – Politik, Recht, Wirtschaft, Wissenschaft – operieren autonom entlang binärer Leitcodes wie Macht/Nicht-Macht, Recht/Unrecht oder wahr/unwahr. Diese funktionale Ausdifferenzierung garantiert zwar eine beispiellose Leistungsfähigkeit, erzeugt jedoch eine strukturelle Blindheit: Kein Einzelsystem vermag die Gesellschaft als Ganzes zu repräsentieren oder Umweltprobleme außerhalb seines spezifischen Codes zu thematisieren. Ökologische Katastrophen existieren für das Wirtschaftssystem nur insoweit, als sie monetäre Knappheiten auslösen, und für das Rechtssystem nur, wenn sie justiziable Normverletzungen darstellen.',
        questions: [
          {
            id: 'goethe_c2_l_q16',
            question: 'Worin besteht der radikale Bruch der Luhmannschen Systemtheorie mit der klassischen Soziologie?',
            options: [
              'In der Abkehr vom Anthropozentrismus: Nicht Menschen, sondern Kommunikation konstituiere das Soziale.',
              'In der vollkommenen Gleichsetzung von Biologie und Wirtschaftswissenschaft.',
              'In der Behauptung, dass Sprache gänzlich ohne grammatische Regeln auskomme.',
              'In der Forderung nach der Auflösung aller staatlichen Institutionen.'
            ],
            correctAnswer: 'In der Abkehr vom Anthropozentrismus: Nicht Menschen, sondern Kommunikation konstituiere das Soziale.',
            explanation: {
              en: 'Text explains: "...bricht radikal mit dem anthropozentrischen Dogma (...) Nicht Menschen handeln, sondern die Kommunikation kommuniziert."',
              fa: 'گسست از انسان‌محوری سنتی: کنشگران فردی انسان‌ها نیستند، بلکه ارتباطات خود ارتباط برقرار می‌کند.',
              prs: 'انسان‌ها به تنهایی مرکز جامعه نیستند، بلکه شبکه‌های ارتباطی سیستم را می‌سازند.',
              tr: 'İnsan-merkezcilikten kopuş: Eyleyen insan değil, iletişim bizzat kendisini üretir.',
              ar: 'القطيعة مع النزعة الإنسانية المركزية: فالتواصل ذاته هو من يتواصل وليست الذوات الفردية.',
              es: 'Ruptura con el dogma antropocéntrico: no son los individuos los que actúan, sino la comunicación la que comunica.'
            }
          },
          {
            id: 'goethe_c2_l_q17',
            question: 'Wie verarbeiten Teilsysteme wie Wirtschaft oder Recht laut Text externe Krisen?',
            options: [
              'Ausschließlich über die interne Übersetzung in ihren binären Leitcode (z. B. Geld oder Rechtmäßigkeit).',
              'Durch unmittelbare moralische Empörung und kollektives Einlenken.',
              'Indem sie ihre eigene funktionale Existenz freiwillig beenden.',
              'Durch gemeinsame ökologische Steuerungsräte aller Systeme.'
            ],
            correctAnswer: 'Ausschließlich über die interne Übersetzung in ihren binären Leitcode (z. B. Geld oder Rechtmäßigkeit).',
            explanation: {
              en: 'Text clarifies: "...nur insoweit, als sie monetäre Knappheiten auslösen, und für das Rechtssystem nur, wenn sie justiziable Normverletzungen darstellen."',
              fa: 'خرده‌سیستم‌ها بحران‌ها را فقط از طریق تبدیل به کدهای درونی خود (مانند سود مالی یا نقض قانونی) پردازش می‌کنند.',
              prs: 'هر سیستم مسائل را فقط با معیار اختصاصی خودش می‌سنجد.',
              tr: 'Krizler ancak sistemin kendi ikili koduna (para ya da hukukilik) tercüme edildiğinde yankı bulur.',
              ar: 'تترجم الأنظمة الفرعية الأزمات الخارجية حصراً وفق شفراتها الثنائية الذاتية (كالربح أو القانونية).',
              es: 'Procesan las perturbaciones externas únicamente traduciéndolas a su código binario inmanente.'
            }
          },
          {
            id: 'goethe_c2_l_q18',
            question: 'Welcher gravierende Nachteil entspringt der hochgradigen funktionalen Differenzierung?',
            options: [
              'Eine strukturelle Blindheit: Kein System kann das Ganze steuern oder gesamtgesellschaftlich repräsentieren.',
              'Ein sofortiger Rückfall in feudale Gesellschaftsordnungen.',
              'Die Unmöglichkeit jeder wissenschaftlichen Forschung.',
              'Ein allgemeines Verbot moderner Wirtschaftskreisläufe.'
            ],
            correctAnswer: 'Eine strukturelle Blindheit: Kein System kann das Ganze steuern oder gesamtgesellschaftlich repräsentieren.',
            explanation: {
              en: 'Direct citation: "...erzeugt jedoch eine strukturelle Blindheit: Kein Einzelsystem vermag die Gesellschaft als Ganzes zu repräsentieren...".',
              fa: 'کوری ساختاری: هیچ سیستمی قادر به بازنمایی یا اداره کل جامعه نیست.',
              prs: 'ناتوانی در درک کل جامعه به دلیل تفکیک بیش از حد.',
              tr: 'Yapısal körlük: Hiçbir alt sistem toplumu bir bütün olarak temsil etme kudretine sahip değildir.',
              ar: 'عمى هيكلي: لا يستطيع أي نظام فرعي بمفرده تمثيل المجتمع ككل أو إدارته شمولياً.',
              es: 'Una ceguera estructural: ningún subsistema está capacitado para representar la sociedad en su totalidad.'
            }
          },
          {
            id: 'goethe_c2_l_q19',
            question: 'Welcher Leitcode kennzeichnet laut Text das Wissenschaftssystem?',
            options: [
              'Wahr / Unwahr',
              'Macht / Ohnmacht',
              'Zahlung / Nicht-Zahlung',
              'Schön / Hässlich'
            ],
            correctAnswer: 'Wahr / Unwahr',
            explanation: {
              en: 'Text notes: "...wie Macht/Nicht-Macht, Recht/Unrecht oder wahr/unwahr."',
              fa: 'کد راهنمای سیستم علم: صدق / کذب (صحیح / غلط).',
              prs: 'کد حقیقت در برابر باطل برای سیستم علمی.',
              tr: 'Bilim sisteminin ikili kılavuz kodu: Doğru / Yanlış (Wahr / Unwahr).',
              ar: 'الشفرة الثنائية لنظام العلم: صادق / غير صادق (wahr / unwahr).',
              es: 'El código binario rector del sistema científico: verdadero / falso (wahr / unwahr).'
            }
          },
          {
            id: 'goethe_c2_l_q20',
            question: 'Welche Konsequenz hat Luhmanns Theorie für die politische Steuerbarkeit moderner Gesellschaften?',
            options: [
              'Gesamtgesellschaftliche Spitzensteuerung ist eine herkömmliche Illusion funktional unverbundener Systeme.',
              'Die Politik kann die Wirtschaft per Dekret jederzeit mühelos lenken.',
              'Ökologische Probleme lassen sich innerhalb weniger Tage durch Parlamentsgesetze lösen.',
              'Alle gesellschaftlichen Systeme verschmelzen mittelfristig zu einer einzigen Behörde.'
            ],
            correctAnswer: 'Gesamtgesellschaftliche Spitzensteuerung ist eine herkömmliche Illusion funktional unverbundener Systeme.',
            explanation: {
              en: 'Because each system is operatively closed, hierarchical top-down governance of society is an impossibility.',
              fa: 'فرماندهی مرکزی و راس هرم جامعه توهمی ناممکن در میان سیستم‌های خودبسته است.',
              prs: 'اداره کل سیستم‌های جامعه از یک مرکز غیرممکن است.',
              tr: 'Merkezi hiyerarşik toplum yönetimi, operasyonel kapalı sistemler karşısında imkansız bir yanılsamadır.',
              ar: 'الإدارة المركزية الهرمية للمجتمع مجرد وهم طوباوي أمام الأنظمة المنغلقة إجرائياً.',
              es: 'La gobernanza centralizada y piramidal de la sociedad deviene una ilusión estéril ante la clausura operativa de los sistemas.'
            }
          }
        ]
      }
    ]
  },
  hoeren: {
    title: 'Modul Hören: Wissenschaftliche Debatte, Interview & Universitätskolloquium (35 Minuten)',
    durationMinutes: 35,
    audioItems: [
      {
        id: 'goethe_c2_h_item1',
        title: 'Teil 1: Interdisziplinäres Streitgespräch: KI-Autonomie und Ethik',
        situation: 'Ein Disput zwischen einem Informatik-Ordinarius und einer Verfassungsethikerin über künstliche Intelligenz.',
        transcript: 'Informatiker: Die neuronalen Netze der vierten Generation erreichen eine emergente Komplexität, die deterministische Steuerbarkeit schlichtweg übersteigt. Wir haben Systeme geschaffen, deren interne Repräsentationen sich menschlicher Kausalzuschreibung entziehen. Ethikerin: Gerade weil dies so ist, dürfen wir existenzielle Rechtsentscheidungen über Leben, Freiheit und Schuld niemals an stochastische Algorithmen delegieren! Das Prinzip der menschlichen Letztverantwortung ist verfassungsrechtlich unabdingbar. Wer die Dignität des Individuums ernst nimmt, verbietet es, Menschen zum bloßen Objekt eines maschinellen Kalküls herabzusetzen.',
        questions: [
          {
            id: 'goethe_c2_h_q1',
            question: 'Worauf beharrt die Verfassungsethikerin mit Nachdruck?',
            options: [
              'Auf dem verfassungsrechtlich unabdingbaren Prinzip menschlicher Letztverantwortung.',
              'Auf der sofortigen Abschaltung aller Rechenzentren weltweit.',
              'Auf der vollständigen Übertragung von Gerichtsentscheidungen an KI-Systeme.',
              'Auf der Annahme, dass Algorithmen bereits menschliches Bewusstsein besitzen.'
            ],
            correctAnswer: 'Auf dem verfassungsrechtlich unabdingbaren Prinzip menschlicher Letztverantwortung.',
            explanation: {
              en: 'The ethicist explicitly demands: "Das Prinzip der menschlichen Letztverantwortung ist verfassungsrechtlich unabdingbar".',
              fa: 'اخلاق‌پژوه بر اصل سلب‌ناپذیر مسئولیت نهایی انسان تاکید قاطع می‌کند.',
              prs: 'استاد اخلاق بر مسئولیت نهایی انسان در تصمیمات حقوقی پافشاری می‌نماید.',
              tr: 'Etikçi, anayasal açıdan vazgeçilmez olan insanın nihai sorumluluğu ilkesinde ısrar etmektedir.',
              ar: 'تصر الباحثة الأخلاقية بشكل قاطع على مبدأ المسؤولية الإنسانية النهائية كأصل دستوري لا يقبل المساومة.',
              es: 'La especialista insiste categóricamente en el principio constitucional innegociable de la responsabilidad humana final.'
            }
          },
          {
            id: 'goethe_c2_h_q2',
            question: 'Was konstatiert der Informatik-Ordinarius bezüglich moderner neuronaler Netze?',
            options: [
              'Ihre internen Repräsentationen entziehen sich menschlicher Kausalzuschreibung.',
              'Sie ließen sich durch einfache Flussdiagramme lückenlos kontrollieren.',
              'Sie seien noch meilenweit von praktischen Anwendungen entfernt.',
              'Sie funktionierten identisch wie mechanische Uhrenwerke des 18. Jahrhunderts.'
            ],
            correctAnswer: 'Ihre internen Repräsentationen entziehen sich menschlicher Kausalzuschreibung.',
            explanation: {
              en: 'He states: "...deren interne Repräsentationen sich menschlicher Kausalzuschreibung entziehen."',
              fa: 'او اشاره می‌کند که بازنمایی‌های درونی شبکه‌های عصبی فراتر از تبیین علّی انسان است.',
              prs: 'عملکرد درونی این برنامه‌ها فراتر از محاسبات معمولی انسان شده است.',
              tr: 'İç temsillerinin insan zihninin nedensellik atıflarını aştığını belirtmektedir.',
              ar: 'تمثيلاتها الداخلية تتجاوز قدرة الإسناد السببي البشري نظراً لتعقيدها الطارئ.',
              es: 'Sus representaciones internas escapan a la atribución causal humana debido a su complejidad emergente.'
            }
          },
          {
            id: 'goethe_c2_h_q3',
            question: 'Welche Gefahr sieht die Ethikerin in der Delegation existenzieller Urteile an Algorithmen?',
            options: [
              'Die Herabwürdigung des Menschen zum bloßen Objekt eines mathematischen Kalküls.',
              'Die unvermeidliche Steigerung der Stromkosten für Universitäten.',
              'Den Verlust von Arbeitsplätzen im Programmierersektor.',
              'Eine Überlastung der städtischen Glasfasernetze.'
            ],
            correctAnswer: 'Die Herabwürdigung des Menschen zum bloßen Objekt eines mathematischen Kalküls.',
            explanation: {
              en: 'She warns against degrading humans: "...verbietet es, Menschen zum bloßen Objekt eines maschinellen Kalküls herabzusetzen."',
              fa: 'تنزل شأن و کرامت انسان به یک شیء محاسباتی در الگوریتم‌ها.',
              prs: 'تبدیل شدن انسان به عدد و رقم در محاسبات ماشینی.',
              tr: 'İnsanın makine kalkülüsünün salt bir nesnesine indirgenmesi tehlikesi.',
              ar: 'انحدار كرامة الإنسان إلى مجرد موضوع في حسابات آلية جافة.',
              es: 'La degradación del ser humano a mero objeto subordinado a un cómputo algorítmico.'
            }
          },
          {
            id: 'goethe_c2_h_q4',
            question: 'Auf welches normative Grundprinzip stützt die Ethikerin ihre Argumentation?',
            options: [
              'Auf den Kantischen Würdebegriff und das verfassungsrechtliche Objektformel-Verbot.',
              'Auf den utilitaristischen Grundsatz des maximalen Gesamtnutzens.',
              'Auf ökonomische Marktgesetze von Angebot und Nachfrage.',
              'Auf rein religiöse Glaubensdogmen des Mittelalters.'
            ],
            correctAnswer: 'Auf den Kantischen Würdebegriff und das verfassungsrechtliche Objektformel-Verbot.',
            explanation: {
              en: 'She refers to human dignity: "Wer die Dignität des Individuums ernst nimmt..." (Kants object formula).',
              fa: 'کرامت کانتی و فرمول شیء‌انگاری که تنزل انسان به ابزار را منع می‌کند.',
              prs: 'اصل کرامت انسانی که انسان را ابزار نمی‌داند.',
              tr: 'Kantçı insan onuru ve anayasal nesneleştirme yasağı formülü.',
              ar: 'مفهوم الكرامة الكانطي وحظر تسليع الإنسان وتحويله إلى أداة.',
              es: 'El principio kantiano de la dignidad humana y la prohibición de instrumentalización (Objektformel).'
            }
          }
        ]
      },
      {
        id: 'goethe_c2_h_item2',
        title: 'Teil 2: Rundfunk-Fachinterview: Die Krise der universitären Geisteswissenschaften',
        situation: 'Ein Rundfunkinterview mit dem Präsidenten der Alexander von Humboldt-Stiftung.',
        transcript: 'Journalist: Herr Präsident, die geisteswissenschaftlichen Fakultäten klagen über chronische Marginalisierung im Schatten technischer Disziplinen. Drittmittel fließen fast ausschließlich in angewandte Naturwissenschaften. Präsident: Dieser Befund ist empirisch leider nicht unzutreffend. Doch wer geisteswissenschaftliche Forschung rein nach unmittelbarer ökonomischer Verwertbarkeit taxiert, begeht einen folgenschweren epistemologischen Kategorienfehler! Die Geisteswissenschaften liefern keine patentierbaren Industrieprodukte, sondern etwas unendlich Wertvolleres: Sie sind das hermeneutische Gedächtnis unserer Kultur, sie schärfen die Urteilskraft und befähigen uns zur kritischen Selbstreflexion in einer von Umbrüchen zerrissenen Epoche.',
        questions: [
          {
            id: 'goethe_c2_h_q5',
            question: 'Welche Rolle spricht der Stiftungspräsident den Geisteswissenschaften primär zu?',
            options: [
              'Sie bilden das unersetzliche hermeneutische Gedächtnis unserer Kultur.',
              'Sie müssen sich ausschließlich nach unmittelbarer industrieller Verwertbarkeit richten.',
              'Sie sollten mit den Ingenieurwissenschaften verschmolzen werden.',
              'Sie hätten im modernen Zeitalter ihre geschichtliche Berechtigung eingebüßt.'
            ],
            correctAnswer: 'Sie bilden das unersetzliche hermeneutische Gedächtnis unserer Kultur.',
            explanation: {
              en: 'The president concludes: "Sie sind das hermeneutische Gedächtnis unserer Kultur".',
              fa: 'رئیس بنیاد علوم انسانی را حافظه هرمنوتیک و فرهنگی تمدن می‌نامد.',
              prs: 'علوم انسانی به حیث حافظه معنوی و تفسیری جامعه معرفی می‌شود.',
              tr: 'Vakıf başkanı, beşeri bilimleri kültürümüzün hermeneutik hafızası olarak nitelendirir.',
              ar: 'يصف رئيس المؤسسة العلوم الإنسانية بأنها الذاكرة التأويلية الثقافية للمجتمع.',
              es: 'El presidente describe las humanidades como la memoria hermenéutica indispensable de nuestra civilización.'
            }
          },
          {
            id: 'goethe_c2_h_q6',
            question: 'Was bezeichnet der Präsident als "folgenschweren Kategorienfehler"?',
            options: [
              'Geisteswissenschaften nach unmittelbarer ökonomischer Verwertbarkeit zu beurteilen.',
              'Naturwissenschaftlern höhere Forschungsgelder zuzugestehen.',
              'Studenten historische Texte in Originalsprache lesen zu lassen.',
              'Öffentliche Gelder für universitäre Bibliotheken bereitzustellen.'
            ],
            correctAnswer: 'Geisteswissenschaften nach unmittelbarer ökonomischer Verwertbarkeit zu beurteilen.',
            explanation: {
              en: 'He explicitly states: "...wer geisteswissenschaftliche Forschung rein nach unmittelbarer ökonomischer Verwertbarkeit taxiert, begeht einen folgenschweren (...) Kategorienfehler!"',
              fa: 'ارزیابی علوم انسانی صرفاً بر مبنای سودآوری مستقیم اقتصادی.',
              prs: 'سنجش ارزش علوم انسانی فقط با پول و تجارت.',
              tr: 'Beşeri bilimleri doğrudan ekonomik getiri ve ticari faydayla tartmak.',
              ar: 'قياس جدوى العلوم الإنسانية بمعايير المردود الاقتصادي التجاري المباشر.',
              es: 'Evaluar la investigación humanística con el rasero exclusivo de la rentabilidad crematística inmediata.'
            }
          },
          {
            id: 'goethe_c2_h_q7',
            question: 'Welche empirische Entwicklung beklagt der Journalist im Einleitungsgespräch?',
            options: [
              'Das einseitige Abfließen von Drittmitteln in angewandte technische Disziplinen.',
              'Den drastischen Anstieg von Professorenstellen in der Philosophie.',
              'Die Verpflichtung zu lateinischen Sprachprüfungen an Fachhochschulen.',
              'Die mangelnde Bereitschaft von Verlagen, wissenschaftliche Monographien zu drucken.'
            ],
            correctAnswer: 'Das einseitige Abfließen von Drittmitteln in angewandte technische Disziplinen.',
            explanation: {
              en: 'The journalist points out: "Drittmittel fließen fast ausschließlich in angewandte Naturwissenschaften."',
              fa: 'سرازیر شدن یک‌طرفه بودجه‌های پژوهشی به سمت علوم فنی و کاربردی.',
              prs: 'اختصاص دادن بیشتر بودجه تحقیقاتی به رشته‌های فنی به جای ادبیات و فلسفه.',
              tr: 'Dış fonların neredeyse yalnızca uygulamalı doğa ve mühendislik bilimlerine akması.',
              ar: 'تدفق تمويلات الأبحاث الخارجية بشكل شبه حصري نحو العلوم الطبيعية والتطبيقية.',
              es: 'La canalización unilateral de los fondos de terceros hacia disciplinas tecnológicas y aplicadas.'
            }
          },
          {
            id: 'goethe_c2_h_q8',
            question: 'Wozu befähigen geisteswissenschaftliche Studien den Menschen laut Interviewten?',
            options: [
              'Zur Schärfung der Urteilskraft und kritischen Selbstreflexion in Krisenzeiten.',
              'Zur schnellen Erstellung von marktreifen Patenten.',
              'Zur fehlerfreien Bedienung industrieller Fertigungsroboter.',
              'Zur vollständigen Umgehung staatlicher Steuergesetze.'
            ],
            correctAnswer: 'Zur Schärfung der Urteilskraft und kritischen Selbstreflexion in Krisenzeiten.',
            explanation: {
              en: 'President emphasizes: "...sie schärfen die Urteilskraft und befähigen uns zur kritischen Selbstreflexion in einer von Umbrüchen zerrissenen Epoche."',
              fa: 'تقویت قوه قضاوت و خوداندیشی انتقادی در عصر دگرگونی‌های بزرگ.',
              prs: 'پرورش قوه تفکر و نگاه سنجش‌گرانه به رخدادهای جهان.',
              tr: 'Krizler çağında muhakeme yeteneğini bilemek ve eleştirel öz-düşünümsellik kazanmak.',
              ar: 'صقل ملكة الحكم والتمييز الفكري والتمكين من النقد الذاتي الواعي في عصر التحولات الكبرى.',
              es: 'Agudizar la capacidad de juicio y facultar para una autorreflexión crítica en épocas de convulsión.'
            }
          }
        ]
      },
      {
        id: 'goethe_c2_h_item3',
        title: 'Teil 3: Akademische Ringvorlesung: Klimagerechtigkeit und Völkerrecht im Anthropozän',
        situation: 'Ein Auszug aus einer Vorlesung an der Heidelberger Akademie der Wissenschaften.',
        transcript: 'Dozentin: Das traditionelle Völkerrecht beruhte auf dem Paradigma staatlicher Souveränität und räumlich distinkter Schadenskausalität. Im Anthropozän erweist sich diese westfälische Doktrin als eklatant unzulänglich. Wenn kumulative Treibhausgasemissionen historischer Industrieanrainer das physische Überleben vulnerabler Inselstaaten auslöschen, versagen klassische Deliktstatbestände. Wir erleben gegenwärtig eine dogmatische Zeitenwende: Völkerrechtliche Gerichte wie der IGH beginnen, intertemporale Menschenrechte und extraterritoriale Schutzpflichten anzuerkennen. Die Pflicht zur Schadensvermeidung schützt nicht länger bloß gegenwärtige Nachbarn, sondern zukünftige Generationen über Äonen hinweg.',
        questions: [
          {
            id: 'goethe_c2_h_q9',
            question: 'Warum erweist sich die traditionelle westfälische Doktrin im Anthropozän als unzureichend?',
            options: [
              'Weil kumulative, globale Emissionen die klassische territoriale Schadenskausalität sprengen.',
              'Weil es keine Richter an internationalen Gerichtshöfen mehr gibt.',
              'Weil Inselstaaten auf den Ausbau fossiler Energieträger bestehen.',
              'Weil das Völkerrecht erst im 21. Jahrhundert erfunden wurde.'
            ],
            correctAnswer: 'Weil kumulative, globale Emissionen die klassische territoriale Schadenskausalität sprengen.',
            explanation: {
              en: 'The lecturer notes: "...versagen klassische Deliktstatbestände", because cumulative emissions cross boundaries over time.',
              fa: 'انتشار تجمعی گازهای گلخانه‌ای مفهوم کلاسیک مرزها و سببیت محلی خسارت را درهم شکسته است.',
              prs: 'آلودگی هوا مرز نمی‌شناسد و قوانین قدیمی توانایی حل این بحران را ندارند.',
              tr: 'Kümülatif emisyonların geleneksel mekânsal zarar ve nedensellik illiyet bağını aşması nedeniyle.',
              ar: 'لأن الانبعاثات التراكمية تتجاوز السببية الإقليمية التقليدية وتنسف المفاهيم القديمة للمسؤولية التقصيرية.',
              es: 'Porque las emisiones acumulativas globales desbordan los moldes causales territoriales tradicionales.'
            }
          },
          {
            id: 'goethe_c2_h_q10',
            question: 'Welche völkerrechtliche Entwicklung bezeichnet die Dozentin als "dogmatische Zeitenwende"?',
            options: [
              'Die Anerkennung intertemporaler Menschenrechte und extraterritorialer Schutzpflichten.',
              'Die völlige Abschaffung des Internationalen Gerichtshofs.',
              'Die Beschränkung des Umweltschutzes auf nationale Binnengewässer.',
              'Die Rückkehr zu absolutistischen Herrschaftsverträgen.'
            ],
            correctAnswer: 'Die Anerkennung intertemporaler Menschenrechte und extraterritorialer Schutzpflichten.',
            explanation: {
              en: 'Direct reference: "...IGH beginnen, intertemporale Menschenrechte und extraterritoriale Schutzpflichten anzuerkennen."',
              fa: 'به رسمیت شناختن حقوق بشر بین‌نسلی و تعهدات فرامرزی برای حفاظت از محیط زیست.',
              prs: 'قبول کردن حقوق نسل‌های آینده و مسئولیت کشورها فراتر از مرزهای خود.',
              tr: 'Zamanlararası insan haklarının ve ülke sınırlarını aşan koruma yükümlülüklerinin tanınması.',
              ar: 'الاعتراف القضائي بحقوق الإنسان العابرة للأجيال وواجبات الحماية البيئية العابرة للحدود.',
              es: 'El reconocimiento jurisprudencial de derechos humanos intertemporales y deberes de protección extraterritoriales.'
            }
          },
          {
            id: 'goethe_c2_h_q11',
            question: 'Wen schützt die neu gefasste völkerrechtliche Pflicht zur Schadensvermeidung künftig?',
            options: [
              'Zukünftige Generationen über Epochen hinweg, nicht bloß gegenwärtige territoriale Nachbarn.',
              'Ausschließlich multinationale Bergbaukonzerne.',
              'Nur Bürger jener Staaten, die den höchsten CO2-Ausstoß aufweisen.',
              'Einzig registrierte Schifffahrtsunternehmen auf internationalen Gewässern.'
            ],
            correctAnswer: 'Zukünftige Generationen über Epochen hinweg, nicht bloß gegenwärtige territoriale Nachbarn.',
            explanation: {
              en: 'Concludes: "...schützt nicht länger bloß gegenwärtige Nachbarn, sondern zukünftige Generationen über Äonen hinweg."',
              fa: 'حفاظت از نسل‌های آینده در اعصار بعد، فراتر از همسایگان کنونی مرزها.',
              prs: 'حمایت از نسل‌های آینده در قرن‌های بعدی.',
              tr: 'Yalnızca bugünün komşularını değil, çağlar boyu gelecek nesilleri korumaktadır.',
              ar: 'حماية الأجيال القادمة عبر العصور وليس مجرد دول الجوار الجغرافي المعاصرة.',
              es: 'Ampara no sólo a los vecinos geográficos coetáneos sino a las generaciones venideras a través de los eones.'
            }
          },
          {
            id: 'goethe_c2_h_q12',
            question: 'Welches Institut symbolisiert laut Vorlesung den traditionellen völkerrechtlichen Rahmen?',
            options: [
              'Die Westfälische Doktrin staatlicher Souveränität.',
              'Das Zivilgesetzbuch der Antike.',
              'Der Kodex Hammurapi.',
              'Die Vereinbarung von Schengen.'
            ],
            correctAnswer: 'Die Westfälische Doktrin staatlicher Souveränität.',
            explanation: {
              en: 'Lecturer mentions: "Im Anthropozän erweist sich diese westfälische Doktrin als eklatant unzulänglich."',
              fa: 'دکترین وستفالی حاکمیت ملی که در دوران انسان‌محور (آنتروپوسن) نارسا شده است.',
              prs: 'پیمان صلح وستفالی که بر استقلال کامل مرزها استوار بود.',
              tr: 'Devlet egemenliğini esas alan geleneksel Vestfalya doktrini.',
              ar: 'عقيدة وستفاليا التقليدية القائمة على السيادة المطلقة للحدود القومية.',
              es: 'La doctrina westfaliana basada en la soberanía estatal hermética.'
            }
          }
        ]
      }
    ]
  },
  schreiben: {
    title: 'Modul Schreiben: Diskursethik & Kulturkritik (80 Minuten)',
    durationMinutes: 80,
    taskType: 'Wissenschaftlicher Essay / Kritisches Feuilleton',
    situation: 'Sie verfassen für ein renommiertes Kulturjournal einen fundierten Essay zum Thema "Die Verantwortung des Intellektuellen in Zeiten digitaler Fragmentierung".',
    prompt: 'Verfassen Sie eine tiefgründige Abhandlung, in der Sie die Transformation der Öffentlichkeit untersuchen, die Spannung zwischen Diskursqualität und Meinungsfreiheit reflektieren und zukunftsfähige Orientierungslinien skizzieren.',
    guidingPoints: [
      'Analyse der epistemischen Folgen fragmentierter Informationsräume (Echokammern und Vertrauensverlust)',
      'Diskussion der Rolle des Intellektuellen zwischen akademischer Abstraktion und öffentlicher Verantwortung',
      'Synthese: Kriterien für einen zukunftsorientierten, herrschaftsfreien Diskurs im digitalen Raum'
    ],
    targetWordCount: 'ca. 350 - 450 Wörter',
    sampleSolution: 'In einer Ära rasanter technologischer Disruption erlebt die bürgerliche Öffentlichkeit eine Fragmentierung, die das normative Fundament deliberativer Demokratien herausfordert. Die algorithmisch kuratierte Meinungsbildung droht den intersubjektiven Konsens auf bloße Partikularinteressen zu reduzieren. Vor diesem Hintergrund wächst dem Intellektuellen eine Verantwortung zu, die weit über das akademische Refugium hinausreicht: Es gilt, als Anwalt der Nuance aufzutreten und der grassierenden Polarisierung mit begrifflicher Schärfe und geduldiger Hermeneutik zu begegnen. Nur wenn es gelingt, den öffentlichen Raum als Resonanzboden für genuine Vernunftgründe zurückzugewinnen, wird die demokratische Kultur ihre emanzipatorische Kraft bewahren.',
    scoringCriteria: {
      en: 'Evaluated on conceptual depth, rhetorical sovereignty, syntactical polyphony (hypotaxis, gerundives, nominal style), and native stylistic precision.',
      fa: 'ارزیابی بر مبنای عمق مفهومی، حاکمیت بلاغی، تنوع ساختاری نحوی (جملات مرکب، گروندیووم، سبک اسمی) و دقت سبک‌شناختی هم‌تراز بومی.',
      prs: 'ارزیابی بر اساس عمق ادبی، نحو پیشرفته و فصاحت در حد زبان مادری آلمانی.',
      tr: 'Kavramsal derinlik, retorik hakimiyet, sözdizimsel çokseslilik ve ana dili düzeyinde üslup mükemmelliği.',
      ar: 'يتم التقييم وفق عمق المفاهيم، والبراعة البلاغية، وتنوع الأساليب النحوية، ودقة التعبير المماثلة لأصحاب اللغة.',
      es: 'Evaluado según profundidad analítica, soberanía retórica, polifonía sintáctica y virtuosismo estilístico cuasinativo.'
    }
  },
  sprechen: {
    title: 'Modul Sprechen: Prüfungsvortrag & Akademische Disputation (15 Minuten)',
    durationMinutes: 15,
    teil1: {
      name: 'Teil 1: Akademischer Prüfungsvortrag (ca. 5 Minuten)',
      instruction: {
        en: 'Deliver an articulate, structured monologue on a complex cultural or philosophical topic without reliance on written text.',
        fa: 'ارائه یک سخنرانی یکپارچه و آکادمیک ۵ دقیقه‌ای پیرامون مبحثی پیچیده بدون نگاه کردن به یادداشت‌ها.',
        prs: 'ارائه کنفرانس ۵ دقیقه‌ای فصیح بدون متن از قبل نوشته شده.',
        tr: 'Yazılı metne bağlı kalmaksızın karmaşık bir konuda 5 dakikalık akademik sunum yapınız.',
        ar: 'إلقاء محاضرة أكاديمية مرتجلة ومحكمة لمدة 5 دقائق دون الاستعانة بمسودة ورقية.',
        es: 'Exposición académica estructurada de 5 minutos sobre un tema complejo sin apoyo textual directo.'
      },
      prompts: [
        'Das Verhältnis von Sprache und Welterkenntnis: Determiniert unsere Syntax unser Denken?',
        'Die Ambivalenz des Fortschritts: Zwischen wissenschaftlicher Hybris und moralischer Verantwortung'
      ],
      sampleResponse: 'Sehr geehrte Prüfungskommission, die Frage, inwiefern Sprache unser Denken konstituiert, berührt den Kern der philosophischen Anthropologie. Wie Wilhelm von Humboldt meisterhaft darlegte, ist jede Einzelsprache eine spezifische Weltansicht. Wenn wir grammatische Strukturen modifizieren, wandeln sich nicht bloß Konventionen, sondern die kategorialen Raster unseres Verstehens...'
    },
    teil2: {
      name: 'Teil 2: Die akademische Disputation mit der Prüfungskommission (ca. 10 Minuten)',
      instruction: {
        en: 'Engage in a spontaneous, rigorous academic defense against critical objections raised by the examiners.',
        fa: 'دفاع آکادمیک بداهه در برابر اشکالات و پرسش‌های انتقادی سخت‌گیرانه هیئت داوران.',
        prs: 'پاسخگویی به سوالات و استدلال‌های چالش‌برانگیز هیئت داوران.',
        tr: 'Jürinin yönelttiği çetin eleştirilere karşı irticalen ikna edici argümanlarla akademik savunma yapınız.',
        ar: 'خوض مناظرة أكاديمية ارتجالية قوية للرد على اعتراضات وانتقادات لجنة التحكيم.',
        es: 'Defensa dialéctica espontánea ante las objeciones críticas del tribunal evaluador.'
      },
      topicCards: [
        'Prüfer-Einwand: Ist Humboldts Sprachrelativismus angesichts universaler Chomsky-Grammatiken nicht empirisch widerlegt?',
        'Prüfer-Einwand: Führt die Überbetonung sprachlicher Nuancen nicht zur weltfremden Elfenbeinturmpolitik?'
      ],
      sampleResponse: 'Diesen fundierten Einwand weiß ich sehr wohl zu schätzen. Allerdings zielt Chomskys Universalgrammatik auf die biologische Grundausstattung, während Humboldts Ansatz die hermeneutische Tiefendimension der Sinnstiftung beleuchtet. Es handelt sich folglich nicht um eine empirische Falsifikation, sondern um komplementäre Betrachtungsebenen...'
    },
    teil3: {
      name: 'Synthese & Fachgespräch (ca. 5 Minuten)',
      instruction: {
        en: 'Conclusion and spontaneous debate on cross-disciplinary implications.',
        fa: 'جمع‌بندی و مناظره بداهه پیرامون پیامدهای بین‌رشته‌ای.',
        prs: 'نتیجه‌گیری و مباحثه آزاد با استادان ممتحن.',
        tr: 'Disiplinlerarası çıkarımlar üzerine sentez ve spontane münazara.',
        ar: 'الخلاصة والمناقشة الارتجالية حول الأبعاد المعرفية المتداخلة.',
        es: 'Conclusión y debate espontáneo sobre implicaciones interdisciplinares.'
      },
      planningScenario: 'Die Kommission prüft die spontane Reaktionsfähigkeit, die lexikalische Bandbreite und die souveräne Nuancierung mit Modalpartikeln.',
      discussionPoints: [
        'Ethische Grenzwerte technologischer Innovationen',
        'Die Rolle humanistischer Bildung im Zeitalter digitaler Intelligenz'
      ],
      sampleResponse: 'Zusammenfassend lässt sich konstatieren, dass weder technologischer Determinismus noch naiver Kulturpessimismus der Komplexität gerecht werden. Vielmehr bedarf es einer dialektischen Synthese aus instrumenteller Rationalität und normativer Orientierung, wie sie die europäische Aufklärungstradition vorzeichnet.'
    }
  }
};
