import { StandardizedExam } from '../types';

// =========================================================================
// GOETHE-ZERTIFIKAT C1 (OFFIZIELLER STANDARD: 205 MINUTEN)
// Lesen: 70 Min (30 Aufgaben) | Hören: 40 Min (30 Aufgaben) | Schreiben: 80 Min | Sprechen: 15 Min
// =========================================================================
export const EXAM_GOETHE_C1: StandardizedExam = {
  id: 'exam_goethe_c1',
  title: 'Goethe-Zertifikat C1 (Offizieller Standard)',
  standard: 'Goethe-Zertifikat',
  level: 'C1.1',
  totalDurationMinutes: 205,
  passingScore: '60% (60 / 100 Punkte)',
  strategy: {
    level: 'C1.1',
    timeManagement: [
      {
        section: 'Lesen (Reading) - 70 Minuten • 30 Aufgaben',
        allocatedMinutes: 70,
        tip: {
          en: '70 minutes for 30 tasks: Teil 1 (10 tasks, academic commentary), Teil 2 (10 tasks, text reconstruction & cohesion), Teil 3 (10 tasks, complex essay analysis).',
          fa: '۷۰ دقیقه برای ۳۰ سوال: بخش ۱ (۱۰ سوال، یادداشت دانشگاهی)، بخش ۲ (۱۰ سوال، بازسازی ساختار متن و انسجام)، بخش ۳ (۱۰ سوال، مقاله پژوهشی عمیق).',
          prs: '۷۰ دقیقه برای ۳۰ سوال سطح عالی C1.',
          tr: '70 dakikada 30 akademik ve edebi metin analizi sorusu.',
          ar: '70 دقيقة للإجابة عن 30 سؤالاً في النصوص الأكاديمية والتحليلية المعقدة.',
          es: '70 minutos para 30 tareas de análisis de textos académicos y periodísticos.'
        }
      },
      {
        section: 'Hören (Listening) - 40 Minuten • 30 Aufgaben',
        allocatedMinutes: 40,
        tip: {
          en: '40 minutes for 30 tasks: Teil 1 (10 tasks, in-depth professional dialogue), Teil 2 (10 tasks, scientific interview), Teil 3 (10 tasks, university lecture).',
          fa: '۴۰ دقیقه برای ۳۰ سوال: بخش ۱ (۱۰ سوال، گفتگوی تخصصی)، بخش ۲ (۱۰ سوال، مصاحبه علمی)، بخش ۳ (۱۰ سوال، سخنرانی دانشگاهی).',
          prs: '۴۰ دقیقه برای ۳۰ سوال شنیداری علمی.',
          tr: '40 dakikada 30 dinleme sorusu: Diyalog, bilimsel röportaj ve üniversite dersi.',
          ar: '40 دقيقة للاستماع لـ 30 سؤالاً مقسمة على 3 أجزاء علمية وتخصصية.',
          es: '40 minutos para 30 tareas de audición: debate profesional, entrevista y conferencia.'
        }
      },
      {
        section: 'Schreiben (Writing) - 80 Minuten • 1 wissenschaftlicher Text',
        allocatedMinutes: 80,
        tip: {
          en: '80 minutes for a structured essay (approx. 250 words) analyzing complex graphs, arguing multiple stances, and deriving forward-looking conclusions.',
          fa: '۸۰ دقیقه برای نگارش یک مقاله تحلیلی مستدل (حدود ۲۵۰ کلمه) همراه با تفسیر نمودار و پیش‌بینی روندهای آینده.',
          prs: '۸۰ دقیقه برای نوشتن متن علمی ۲۵۰ کلمه‌ای.',
          tr: '80 dakikada grafik yorumlama ve argümantasyon içeren yaklaşık 250 kelimelik akademik kompozisyon.',
          ar: '80 دقيقة لكتابة مقال تحليلي أكاديمي (حوالي 250 كلمة) يجمع بين وصف الرسوم البيانية والحجج العميقة.',
          es: '80 minutos para redactar un ensayo académico argumentativo de aprox. 250 palabras.'
        }
      },
      {
        section: 'Sprechen (Speaking) - 15 Minuten • Paar- oder Einzelprüfung',
        allocatedMinutes: 15,
        tip: {
          en: '15 minutes: Teil 1 (Monologue presentation on a demanding topic, 3-4 min) + Teil 2 (Interactive controversial discussion, 5-6 min).',
          fa: '۱۵ دقیقه: بخش ۱ (سخنرانی تک‌نفره پیرامون موضوعی پیچیده، ۳-۴ دقیقه) + بخش ۲ (مناظره دوسویه و تحلیل انتقادی، ۵-۶ دقیقه).',
          prs: '۱۵ دقیقه سخنرانی و مناظره پیشرفته.',
          tr: '15 dakikada monolog sunum ve interaktif tartışma.',
          ar: '15 دقيقة: عرض فردي متعمق ونقاش جدلي تفاعلي مع الشريك ولجنة التحكيم.',
          es: '15 minutos divididos en presentación monologada y debate interactivo.'
        }
      }
    ],
    stepByStepStrategies: [
      {
        title: 'Lesen Teil 2: Textrekonstruktion durch Satzverknüpfung',
        steps: [
          {
            en: '1. Scan the text for cohesive devices (anaphoric pronouns, lexical chains, temporal connectors). 2. Test candidate sentences for logical transitions. 3. Check grammatical congruence.',
            fa: '۱. نشانه‌های انسجام متن (ضمایر اشاره، پیوندهای زمانی، زنجیره‌های واژگانی) را بیابید. ۲. جملات جایگزین را برای انتقال منطقی بیازمایید. ۳. تطابق دستوری را کنترل کنید.',
            prs: 'نشانه‌های پیوستگی متن و ارتباط منطقی جملات را پیدا کنید.',
            tr: '1. Metindeki bağlaç ve gönderim zamirlerini bulun. 2. Mantıksal akışı ve dilbilgisel uyumu test edin.',
            ar: '1. حدد أدوات الربط والإحالات الضميرية. 2. اختبر التسلسل المنطقي للجمل المقترحة. 3. تأكد من الانسجام النحوي.',
            es: '1. Rastrea elementos de cohesión y anáforas. 2. Comprueba la transición lógica y congruencia sintáctica.'
          }
        ]
      }
    ],
    commonMistakes: [
      {
        mistake: 'Verwechslung von Funktionsverbgefügen und Passiversatzformen',
        correction: 'Präzise Differenzierung zwischen "zur Debatte stehen" (aktivisch/diskutiert werden) und "zur Debatte stellen" (einbringen)',
        explanation: {
          en: 'Noun-verb combinations change meaning based on verb: stehen (passive/state), stellen (active/causative).',
          fa: 'در ترکیبات اسمی-فعلی: "zur Debatte stehen" حالت مجهولی دارد (مورد بحث بودن)، در حالی که "zur Debatte stellen" حالت معلوم دارد (به بحث گذاشتن).',
          prs: 'فرق بین حالت معلوم و مجهول در ترکیب‌های اسمی و فعلی.',
          tr: '"zur Debatte stehen" tartışılmakta olmak (pasif), "stellen" ise tartışmaya açmak (aktif) demektir.',
          ar: 'التمييز الدقيق بين الصيغ الدالة على الحالة/المجهول (stehen) والصيغ السببية/المعلوم (stellen).',
          es: 'Diferenciación exacta entre construcciones con valor pasivo (stehen) y activo (stellen).'
        }
      }
    ]
  },
  lesen: {
    title: 'Modul Leseverstehen (70 Minuten • 30 Aufgaben)',
    durationMinutes: 70,
    texts: [
      {
        title: 'Teil 1: Wissenschaftsessay (Aufgaben 1 bis 10 • Detail- und Globalverstehen)',
        sourceType: 'Aus der Fachzeitschrift "Forschung & Lehre": Epigenetik und transgenerationale Vererbung',
        body: `Jahrzehntelang bildete das sogenannte Zentraldogma der Molekularbiologie das unerschütterliche Fundament der Vererbungswissenschaften: Der genetische Code, festgeschrieben in der doppelsträngigen Desoxyribonukleinsäure (DNA), galt als statische Blaupause, die deterministisch von Generation zu Generation weitergereicht wird und Umweltfaktoren gegenüber vollkommen immun ist. Erst punktuelle, zufällige Mutationen im Erbgut wurden als Triebfeder evolutionärer Selektion anerkannt. Dieses mechanistische Paradigma geriet jedoch mit dem Aufkommen der modernen Epigenetik grundlegend ins Wanken.
Die Epigenetik erforscht molekulare Modifikationen an der DNA und an den Histon-Proteinen, um die der DNA-Faden gewickelt ist. Zu diesen Mechanismen zählen insbesondere die Methylierung von Cytosin-Basen und die Acetylierung von Histonen. Der entscheidende Punkt hierbei: Die primäre Nukleotidsequenz – der Buchstabencode der Gene – bleibt absolut unangetastet. Gleichwohl fungieren diese chemischen Anhängsel wie biochemische Lichtschalter, die darüber bestimmen, ob ein Genabschnitt für die Transkription in Boten-RNA (mRNA) zugänglich ist oder dauerhaft stummgeschaltet ("silenced") wird.
Dramatische Evidenz für die phänotypische Relevanz epigenetischer Plastizität lieferte die historische Untersuchung des niederländischen "Hungerwinters" von 1944/45. Kinder von Müttern, die während der ersten Schwangerschaftsmonate einer extremen Kalorienrestriktion von unter 800 Kilokalorien täglich ausgesetzt waren, wiesen noch Jahrzehnte später eine signifikant reduzierte Methylierung des IGF2-Gens (Insulin-like Growth Factor 2) auf. Im Erwachsenenalter litten diese Personen unter überdurchschnittlich hohen Raten an Adipositas, kardiovaskulären Erkrankungen und Glukose-Intoleranz. Der Fötus hatte seinen Stoffwechsel epigenetisch auf eine chronische Mangelumwelt kalibriert – ein Schutzmechanismus, der sich im späteren Nahrungsüberfluss als fatale Falle entpuppte.
Noch kontroverser wird die transgenerationale Weitergabe epigenetischer Signaturen über die Keimbahn diskutiert. Während man lange annahm, dass bei der Gametenbildung und unmittelbar nach der Befruchtung eine vollständige epigenetische Reinitialisierung (Reprogrammierung) stattfindet, deuten neuere Tierstudien darauf hin, dass bestimmte Markierungen dieser Löschung entgehen und über mehrere Generationen hinweg phänotypische Spuren von Stresstraumata hinterlassen können.`,
        questions: [
          {
            id: 'gc1_l_q1',
            question: '1. Was postulierte das klassische Zentraldogma der Molekularbiologie bezüglich der Vererbung?',
            options: [
              'a) Der genetische Code verändert sich kontinuierlich durch das Tageswetter.',
              'b) Die DNA ist eine statische Blaupause, die von Umweltfaktoren vollkommen unbeeinflusst bleibt.',
              'c) Der Mensch kann seine Gene durch Willenskraft bewusst modifizieren.'
            ],
            correctAnswer: 'b) Die DNA ist eine statische Blaupause, die von Umweltfaktoren vollkommen unbeeinflusst bleibt.',
            explanation: {
              en: 'Paragraph 1 notes DNA was viewed as a static blueprint immune to environmental factors.',
              fa: 'پاراگراف ۱ تصریح می‌کند که DNA به عنوان نقشه‌ای ایستا و کاملاً مصون از عوامل محیطی پنداشته می‌شد.',
              prs: 'کود ژنتیکی به حیث نقشه ثابت و غیرقابل تغییر از محیط دانسته می‌شد.',
              tr: '1. paragrafta DNA\'nın çevresel faktörlerden etkilenmeyen statik bir plan olduğu belirtilir.',
              ar: 'الفقرة 1 تبين أن الشفرة الجينية كانت تُعتبر قالباً ثابتاً محصناً ضد التأثيرات البيئية.',
              es: 'El párrafo 1 señala que el ADN se concebía como una pauta estática inmune al entorno.'
            }
          },
          {
            id: 'gc1_l_q2',
            question: '2. Was unterscheidet epigenetische Modifikationen fundamental von klassischen Mutationen?',
            options: [
              'a) Bei der Epigenetik ändert sich die Nukleotidsequenz der Gene überhaupt nicht.',
              'b) Epigenetik betrifft nur Pflanzen, keine Säugetiere.',
              'c) Epigenetische Veränderungen dauern immer genau 24 Stunden.'
            ],
            correctAnswer: 'a) Bei der Epigenetik ändert sich die Nukleotidsequenz der Gene überhaupt nicht.',
            explanation: {
              en: 'Epigenetics leaves the primary nucleotide sequence unaltered: "Die primäre Nukleotidsequenz (...) bleibt absolut unangetastet."',
              fa: 'در اپی‌ژنتیک توالی پایه‌ای نوکلئوتیدها (حروف ژنوم) بدون تغییر باقی می‌ماند و فقط خوانش آنها فعال یا خاموش می‌شود.',
              prs: 'توالی ژن‌ها تغییر نمی‌کند، بلکه فعال یا غیرفعال شدن شان تنظیم می‌شود.',
              tr: 'Epigenetikte nükleotit dizilimi hiçbir değişikliğe uğramaz.',
              ar: 'في التعديلات فوق الجينية (Epigenetik) تظل المتوالية النيوكليوتيدية الأساسية سليمة تماماً دون تحوير.',
              es: 'En la epigenética la secuencia primaria de nucleótidos permanece inalterada.'
            }
          },
          {
            id: 'gc1_l_q3',
            question: '3. Wie wirken DNA-Methylierung und Histon-Acetylierung auf die Genexpression?',
            options: [
              'a) Sie zerstören den Zellkern vollständig.',
              'b) Sie fungieren wie Schalter, die Gene für die Transkription freigeben oder stummschalten.',
              'c) Sie verdoppeln die Anzahl der Chromosomen.'
            ],
            correctAnswer: 'b) Sie fungieren wie Schalter, die Gene für die Transkription freigeben oder stummschalten.',
            explanation: {
              en: 'Metaphor in text: "... fungieren (...) wie biochemische Lichtschalter, die darüber bestimmen, ob ein Genabschnitt (...) zugänglich ist oder dauerhaft stummgeschaltet (...) wird."',
              fa: 'این تغییرات شیمیایی مانند کلید عمل کرده و دسترسی به بخش‌های ژن را برای رونویسی باز یا برای همیشه خاموش می‌کنند.',
              prs: 'مانند کلید برق، ژن‌ها را فعال یا خاموش می‌سازند.',
              tr: 'Genlerin okunup okunmayacağını belirleyen biyokimyasal anahtarlar gibi işlev görürler.',
              ar: 'تعمل كمفاتيح كيميائية حيوية تحدد إتاحة مقاطع الجينات للنسخ أو كتمها وتثبيطها نهائياً.',
              es: 'Actúan como interruptores bioquímicos que activan o silencian la transcripción génica.'
            }
          },
          {
            id: 'gc1_l_q4',
            question: '4. Welcher historische Kontext diente als beispielhafter Beweis für epigenetische Plastizität beim Menschen?',
            options: [
              'a) Die Pest im europäischen Mittelalter.',
              'b) Der niederländische Hungerwinter von 1944/45.',
              'c) Die Errichtung der Berliner Mauer 1961.'
            ],
            correctAnswer: 'b) Der niederländische Hungerwinter von 1944/45.',
            explanation: {
              en: 'Paragraph 3 analyzes the Dutch famine ("Hungerwinter") of 1944/45.',
              fa: 'پاراگراف ۳ زمستان قحطی هلند در سال‌های ۱۹۴۴/۱۹۴۵ را به عنوان نمونه‌ای بارز بررسی می‌کند.',
              prs: 'زمستان قحطی هلند در سال‌های ۱۹۴۴-۱۹۴۵.',
              tr: '1944/45 Hollanda açlık kışı insanlardaki epigenetik plastisiteye somut kanıt oluşturmuştur.',
              ar: 'شتاء المجاعة في هولندا عام 1944/1945 شكل دليلاً تاريخياً ساطعاً على المرونة فوق الجينية.',
              es: 'El invierno del hambre holandés de 1944/45 sirvió de evidencia histórica fehaciente.'
            }
          },
          {
            id: 'gc1_l_q5',
            question: '5. Welche molekulare Auffälligkeit zeigte sich bei den betroffenen Nachkommen des Hungerwinters?',
            options: [
              'a) Eine signifikant reduzierte Methylierung des IGF2-Gens.',
              'b) Das vollständige Fehlen weißer Blutkörperchen.',
              'c) Eine Verdreifachung des Sehvermögens.'
            ],
            correctAnswer: 'a) Eine signifikant reduzierte Methylierung des IGF2-Gens.',
            explanation: {
              en: 'Text specifies: "... signifikant reduzierte Methylierung des IGF2-Gens (Insulin-like Growth Factor 2)...".',
              fa: 'کاهش معنادار در متیلاسیون ژن IGF2 در بازماندگان ثبت گردید.',
              prs: 'کاهش چشمگیر در متیلاسیون ژن IGF2.',
              tr: 'IGF2 geninin metilasyonunda belirgin bir azalma tespit edilmiştir.',
              ar: 'تراجع ملموس في نسبة مَثْيَلَة جين عامل النمو الشبيه بالإنسولين (IGF2).',
              es: 'Una reducción significativa de la metilación del gen IGF2.'
            }
          },
          {
            id: 'gc1_l_q6',
            question: '6. Warum führten die epigenetischen Anpassungen der Föten im späteren Leben zu Erkrankungen?',
            options: [
              'a) Weil der Körper auf Mangel programmiert war, aber in eine Umwelt mit Nahrungsüberfluss geriet.',
              'b) Weil die Personen aufgehört hatten, Wasser zu trinken.',
              'c) Weil die Medizin damals noch keine Antibiotika kannte.'
            ],
            correctAnswer: 'a) Weil der Körper auf Mangel programmiert war, aber in eine Umwelt mit Nahrungsüberfluss geriet.',
            explanation: {
              en: 'Metabolic mismatch: calibrated for scarcity, the body could not handle nutritional surplus.',
              fa: 'سوخت‌وساز بدن برای محیط فقیر و کم‌کالری تنظیم شده بود، لذا در دوران رفاه و فراوانی غذا دچار چاقی و دیابت شد.',
              prs: 'بدن برای فقر غذایی تنظیم شده بود اما بعداً غذای زیاد دریافت کرد.',
              tr: 'Kıtlığa göre programlanan metabolizma, bolluk ortamında obezite ve hastalıklara yol açtı.',
              ar: 'لأن الأيض تمت معايرته لمواجهة ندرة الغذاء، فتحول لانتكاسة مرضية في بيئة الوفرة اللاحقة.',
              es: 'El metabolismo se programó para la escasez y colapsó ante la abundancia alimentaria posterior.'
            }
          },
          {
            id: 'gc1_l_q7',
            question: '7. Welche Lehrmeinung herrschte lange Zeit über die Epigenetik bei der Befruchtung?',
            options: [
              'a) Alle Markierungen bleiben für 500 Generationen exakt erhalten.',
              'b) Es findet eine vollständige Löschung (Reprogrammierung) aller epigenetischen Markierungen statt.',
              'c) Spermien und Eizellen besitzen überhaupt keine Histone.'
            ],
            correctAnswer: 'b) Es findet eine vollständige Löschung (Reprogrammierung) aller epigenetischen Markierungen statt.',
            explanation: {
              en: 'Paragraph 4: previously assumed that complete erasure/reprogramming occurs during gametogenesis.',
              fa: 'تصور حاکم این بود که در زمان لقاح تمامی نشانه‌های اپی‌ژنتیک پاکسازی (Reprogramming) کامل می‌شوند.',
              prs: 'فکر می‌شد که نشانه‌های اپی‌ژنتیک کاملاً پاک و صفر می‌شوند.',
              tr: 'Döllenme sırasında tüm epigenetik işaretlerin tamamen silindiği varsayılıyordu.',
              ar: 'كان الاعتقاد السائد يفترض محواً وإعادة برمجة كاملة لكافة العلامات فوق الجينية عند الإخصاب.',
              es: 'Se asumía que se producía un borrado total (reprogramación) en la fertilización.'
            }
          },
          {
            id: 'gc1_l_q8',
            question: '8. Was legen neuere Tierstudien zur transgenerationalen Vererbung nahe?',
            options: [
              'a) Dass Tiere niemals unter Stress leiden können.',
              'b) Dass einige epigenetische Markierungen der Löschung entgehen und Traumaspuren weitergeben.',
              'c) Dass DNA durch Ultraschall zerstört wird.'
            ],
            correctAnswer: 'b) Dass einige epigenetische Markierungen der Löschung entgehen und Traumaspuren weitergeben.',
            explanation: {
              en: 'Animal studies suggest certain markers escape erasure and transmit trauma signatures across generations.',
              fa: 'آزمایش‌های حیوانی نشان دادند برخی نشانه‌های اپی‌ژنتیک از پاکسازی مصون مانده و آثار تروما را به نسل‌های بعد منتقل می‌کنند.',
              prs: 'برخی نشانه‌های استرس و تروما به نسل‌های بعدی انتقال می‌یابد.',
              tr: 'Bazı işaretlerin silinmekten kurtularak travma izlerini sonraki nesillere aktarabildiği görüldü.',
              ar: 'الدراسات الحيوانية تفيد بأن بعض العلامات تفلت من المحو وتورث آثار الصدمات عبر الأجيال.',
              es: 'Estudios en animales sugieren que ciertas marcas escapan al borrado y transmiten huellas de trauma.'
            }
          },
          {
            id: 'gc1_l_q9',
            question: '9. Welches Adjektiv beschreibt laut Text die Flexibilität epigenetischer Regulationssysteme?',
            options: ['Plastizität', 'Immunität', 'Starrheit'],
            correctAnswer: 'Plastizität',
            explanation: {
              en: 'Text refers repeatedly to "epigenetischer Plastizität" (malleability/adaptability).',
              fa: 'متن بارها از واژه «پلاستیزیته اپی‌ژنتیک» (Plastizität) برای توصیف انعطاف‌پذیری استفاده می‌کند.',
              prs: 'پلاستیزیته (Plastizität) یا انعطاف‌پذیری.',
              tr: 'Metinde düzenleyici esneklik "Plastizität" (esneklik/plastisite) terimiyle ifade edilir.',
              ar: 'يستخدم النص مصطلح "المرونة" (Plastizität) للدلالة على قابلية التكيف والتأثر.',
              es: 'El texto emplea el término "plasticidad" para describir la adaptabilidad del sistema.'
            }
          },
          {
            id: 'gc1_l_q10',
            question: '10. Was ist das Gesamtfazit des Autors über die Tragweite der Epigenetik?',
            options: [
              'a) Sie widerlegt die Evolutionstheorie von Darwin vollständig.',
              'b) Sie erweitert das mechanistische Gen-Verständnis um eine hochdynamische Umwelt-Schnittstelle.',
              'c) Sie ist für die moderne Medizin völlig bedeutungslos.'
            ],
            correctAnswer: 'b) Sie erweitert das mechanistische Gen-Verständnis um eine hochdynamische Umwelt-Schnittstelle.',
            explanation: {
              en: 'Epigenetics revolutionizes biology by showing genes actively interact with environment and lifestyle.',
              fa: 'اپی‌ژنتیک با افزودن پیوند پویا میان محیط و ژنوم، فهم مکانیکی صرف از ژنتیک را متحول ساخت.',
              prs: 'دیدگاه ژنتیک را با اضافه کردن ارتباط محیط و بدن تکامل بخشید.',
              tr: 'Statik gen anlayışını çevreyle sürekli etkileşim halinde olan dinamik bir boyuta taşımıştır.',
              ar: 'توسيع المفهوم الآلي للجينات ليرتبط بواجهة حيوية بالغة الديناميكية مع البيئة ونمط الحياة.',
              es: 'Amplía la comprensión mecanicista del gen dotándola de una interfaz dinámica con el entorno.'
            }
          }
        ]
      },
      {
        title: 'Teil 2: Textrekonstruktion & Kohärenz (Aufgaben 11 bis 20 • Satzlücken füllen)',
        sourceType: 'Wissenschaftsjournalistische Abhandlung über Stadtökologie und Schwammstädte',
        body: `Die anhaltende Erderwärmung konfrontiert europäische Metropolen mit extremen hydrologischen Paradoxien. Einerseits führen wochenlange Hitzewellen und Dürreperioden zu dramatischer Überhitzung urbaner Hitzeinseln. (11) _____ Um diesen existenziellen Bedrohungen wirksam zu begegnen, bricht die moderne Stadtplanung radikal mit dem überholten Paradigma der schnellen Kanalisationsentwässerung. (12) _____
Dieses zukunftsweisende städtebauliche Leitbild firmiert unter dem Begriff "Schwammstadt" (Sponge City). Ziel ist es, Niederschlagswasser nicht länger unterirdisch über teure Betonrohre in Flüsse abzuleiten, sondern es dort zurückzuhalten und zu infiltrieren, wo es anfällt. (13) _____ Zu den zentralen architektonischen Instrumenten gehören extensive und intensive Dachbegrünungen, versickerungsfähige Pflasterbeläge sowie urbane Feuchtgebiete und Retentionsbecken. (14) _____
Gleichzeitig entfaltet das verdunstende Wasser an heißen Sommertagen einen spürbaren mikroklimatischen Kühleffekt. (15) _____ Messungen in Vorzeigestädten wie Kopenhagen oder Wien belegen, dass die gefühlte Umgebungstemperatur in begrünten Straßenzügen um bis zu 4 Grad Celsius unter jener von rein asphaltierten Verkehrsachsen liegt. (16) _____
Allerdings erfordert die praktische Umsetzung ein profundes Umdenken in Verwaltung und Bauwirtschaft. (17) _____ Traditionelle Bebauungspläne priorisieren noch immer Tiefgaragen und maximale Grundstücksausnutzung zulasten unversiegelter Vegetationsflächen. (18) _____
Hinzu kommt die Notwendigkeit robuster rechtlicher Vorgaben, die private Bauträger zur Einbindung von Rückhaltevolumina verpflichten. (19) _____
Wer heute versäumt, die Schwammstadt-Infrastruktur im Bestand und Neubau zu verankern, wird in den kommenden Dekaden unbezahlbare Schadenssummen durch vollgelaufene Keller und kollabierte Verkehrsnetze tragen müssen. (20) _____`,
        questions: [
          {
            id: 'gc1_l_q11',
            question: '11. Welcher Satz schließt die Lücke (11) logisch an die urbane Problematik an?',
            options: [
              'a) Andererseits entladen sich sommerliche Starkregenereignisse in sturzflutartigen Überschwemmungen versiegelter Straßen.',
              'b) Deswegen kaufen viele Einwohner gerne neue Sonnenbrillen.',
              'c) Daher schlafen viele Stadtbewohner im Winter besonders lange.'
            ],
            correctAnswer: 'a) Andererseits entladen sich sommerliche Starkregenereignisse in sturzflutartigen Überschwemmungen versiegelter Straßen.',
            explanation: {
              en: 'Matches the contrast "Einerseits... Andererseits" (heat waves vs. flash floods).',
              fa: 'تضاد میان "Einerseits" (از یک سو امواج گرما) با "Andererseits" (از سوی دیگر رگبارهای سیل‌آسا در خیابان‌های سنگ‌فرش).',
              prs: 'تضاد منطقی بین گرمای شدید و باران‌های سیل‌آسا.',
              tr: '"Einerseits... Andererseits" karşıtlığı: Sıcak hava dalgalarına karşı ani sel baskınları.',
              ar: 'المقابلة المنطقية بين "من جهة" موجات الحر و"من جهة أخرى" السيول الجارفة للأمطار الغزيرة.',
              es: 'Estructura antitética "Einerseits... Andererseits" entre sequía e inundaciones relámpago.'
            }
          },
          {
            id: 'gc1_l_q12',
            question: '12. Welcher Satz passt in Lücke (12) zum Bruch mit alten Paradigmen?',
            options: [
              'a) Stattdessen setzt man vermehrt auf dezentrale Speicherung und naturnahe Versickerung.',
              'b) Deswegen wird das Abwasser in Plastikflaschen gesammelt.',
              'c) Niemand interessiert sich mehr für Straßenbau.'
            ],
            correctAnswer: 'a) Stattdessen setzt man vermehrt auf dezentrale Speicherung und naturnahe Versickerung.',
            explanation: {
              en: '"Stattdessen" introduces the modern alternative: decentralized storage and natural infiltration.',
              fa: '"Stattdessen" جایگزین رویکرد سنتی را مطرح می‌سازد: ذخیره‌سازی نامتمرکز و نفوذ طبیعی آب باران به خاک.',
              prs: 'به جای آن، ذخیره محلی و نفوذ آب در زمین اعمال می‌شود.',
              tr: 'Eski yöntemin yerine: Merkezi olmayan depolama ve doğal sızdırma.',
              ar: 'توضيح البديل الحديث بكلمة "Stattdessen": التخزين اللامركزي والترشيح الطبيعي.',
              es: '"Stattdessen" presenta la alternativa: retención descentralizada e infiltración natural.'
            }
          },
          {
            id: 'gc1_l_q13',
            question: '13. Welcher Satz ergänzt die Funktionsweise der "Schwammstadt" in Lücke (13)?',
            options: [
              'a) Die Stadt soll Regenwasser wie ein natürlicher Schwamm aufsaugen und kontrolliert wieder abgeben.',
              'b) Schwämme müssen jeden Morgen mit Seife gereinigt werden.',
              'c) Betonrohre sind die billigste Erfindung des 21. Jahrhunderts.'
            ],
            correctAnswer: 'a) Die Stadt soll Regenwasser wie ein natürlicher Schwamm aufsaugen und kontrolliert wieder abgeben.',
            explanation: {
              en: 'Explains the sponge metaphor: absorbing rain like a sponge and releasing it in a controlled manner.',
              fa: 'توضیح استعاره شهر اسفنجی: جذب آب باران مانند اسفنج طبیعی و آزادسازی تدریجی آن.',
              prs: 'شهر مانند اسفنج آب را جذب کرده و به نوبت رها می‌سازد.',
              tr: 'Sünger metaforunu açıklar: Yağmur suyunu emip kontrollü şekilde geri vermek.',
              ar: 'شرح استعارة المدينة الإسفنجية بامتصاص مياه الأمطار وإطلاقها بانتظام.',
              es: 'Desarrolla la metáfora de la ciudad esponja absorbiendo y liberando agua gradualmente.'
            }
          },
          {
            id: 'gc1_l_q14',
            question: '14. Welcher Satz komplettiert die Aufzählung architektonischer Instrumente in Lücke (14)?',
            options: [
              'a) Diese Elemente entlasten die Abwasserrohre bei Spitzenbelastungen und füllen das Grundwasser auf.',
              'b) Alle Autos müssen grün lackiert werden.',
              'c) Dachziegel dürfen nur noch aus Glas bestehen.'
            ],
            correctAnswer: 'a) Diese Elemente entlasten die Abwasserrohre bei Spitzenbelastungen und füllen das Grundwasser auf.',
            explanation: {
              en: 'Connects the architectural elements (green roofs, basins) to sewage relief and aquifer recharge.',
              fa: 'کاهش فشار روی لوله‌های فاضلاب در زمان اوج بارش و تقویت سفره‌های آب زیرزمینی.',
              prs: 'کم شدن فشار بر کانال‌های فاضلاب و پر شدن آب‌های زیرزمینی.',
              tr: 'Bu unsurlar pik yüklerde kanalizasyonu rahatlatır ve yeraltı suyunu besler.',
              ar: 'تخفيف الحمل عن شبكات الصرف الصحي وتغذية المياه الجوفية.',
              es: 'Alivia la red de saneamiento en momentos pico y recarga los acuíferos subterráneos.'
            }
          },
          {
            id: 'gc1_l_q15',
            question: '15. Welcher Satz beschreibt den thermodynamischen Kühleffekt in Lücke (15)?',
            options: [
              'a) Durch den Phasenübergang von flüssig zu gasförmig wird der Umgebungsluft sensible Wärme entzogen.',
              'b) Kühlschränke werden auf allen Straßen aufgestellt.',
              'c) Schnee fällt mitten im Monat Juli.'
            ],
            correctAnswer: 'a) Durch den Phasenübergang von flüssig zu gasförmig wird der Umgebungsluft sensible Wärme entzogen.',
            explanation: {
              en: 'Thermodynamic explanation of evaporative cooling (latent heat of vaporization).',
              fa: 'تبخیر آب و تغییر فاز مایع به گاز گرما را از هوای مجاور جذب کرده و فضا را خنک می‌کند.',
              prs: 'تبخیر آب باعث خنک شدن هوای محیط می‌شود.',
              tr: 'Buharlaşma ile ortam havasından ısı çekilerek doğal serinlik sağlanır.',
              ar: 'التبخر يمتص الحرارة المحسوسة من الهواء المحيط عبر التحول الفيزيائي للماء.',
              es: 'La evaporación absorbe calor sensible del aire ambiental produciendo refrigeración natural.'
            }
          },
          {
            id: 'gc1_l_q16',
            question: '16. Welcher Satz verbindet die Temperaturdaten mit der Lebensqualität in Lücke (16)?',
            options: [
              'a) Dies mindert nicht nur gesundheitliche Risiken für vulnerable Gruppen, sondern steigert die Aufenthaltsqualität im öffentlichen Raum.',
              'b) Dadurch können alle Bürger auf Kleidung verzichten.',
              'c) Stadtbäume wachsen dadurch doppelt so schnell wie im Wald.'
            ],
            correctAnswer: 'a) Dies mindert nicht nur gesundheitliche Risiken für vulnerable Gruppen, sondern steigert die Aufenthaltsqualität im öffentlichen Raum.',
            explanation: {
              en: 'Concludes that temperature reduction protects vulnerable groups and enhances urban living quality.',
              fa: 'کاهش دما جان گروه‌های آسیب‌پذیر (سالمندان و بیماران) را حفظ کرده و کیفیت زیست شهری را ارتقا می‌دهد.',
              prs: 'حفظ سلامت افراد آسیب‌پذیر و افزایش کیفیت زندگی.',
              tr: 'Hassas grupların sağlık risklerini azaltır ve kamusal alanın yaşam kalitesini artırır.',
              ar: 'يحد من المخاطر الصحية على الفئات الضعيفة ويرفع من جودة الحياة في الفضاءات العامة.',
              es: 'Protege a colectivos vulnerables y enriquece la habitabilidad del espacio público.'
            }
          },
          {
            id: 'gc1_l_q17',
            question: '17. Welcher Satz leitet die Herausforderungen in Lücke (17) ein?',
            options: [
              'a) Denn jahrzehntelang galt die lückenlose Versiegelung von Bauland als Inbegriff von Sauberkeit und Ordnung.',
              'b) Weil alle Maurer ihre Werkzeuge verloren haben.',
              'c) Da Beton erst seit fünf Jahren erfunden ist.'
            ],
            correctAnswer: 'a) Denn jahrzehntelang galt die lückenlose Versiegelung von Bauland als Inbegriff von Sauberkeit und Ordnung.',
            explanation: {
              en: 'Explains historical resistance: for decades, complete pavement sealing was considered the ideal of order.',
              fa: 'برای دهه‌ها، پوشاندن کامل خاک با بتن و آسفالت نشانه پاکیزگی و توسعه‌یافتگی تلقی می‌شد.',
              prs: 'برای دهه‌ها سنگفرش و قیرریزی کامل نشانه پاکی دانسته می‌شد.',
              tr: 'On yıllar boyunca arazinin tamamen betonlanması düzenin simgesi olarak görüldü.',
              ar: 'لعقود خلت اعتُبر العزل التام للتربة بالخرسانة قمة النظام والنظافة الحضرية.',
              es: 'Durante décadas el sellado integral del suelo se consideró el ideal de orden.'
            }
          },
          {
            id: 'gc1_l_q18',
            question: '18. Welcher Satz führt den Konflikt mit Tiefgaragen in Lücke (18) fort?',
            options: [
              'a) Wo unterirdischer Parkraum dominiert, fehlt der Wurzelraum für tiefwurzelnde, schattenspendende Großbäume.',
              'b) Autos müssen deshalb unter Wasser geparkt werden.',
              'c) Parkhäuser sind in Kopenhagen gesetzlich verboten.'
            ],
            correctAnswer: 'a) Wo unterirdischer Parkraum dominiert, fehlt der Wurzelraum für tiefwurzelnde, schattenspendende Großbäume.',
            explanation: {
              en: 'Direct conflict between underground parking garages and soil depth needed for deep-rooting trees.',
              fa: 'توسعه پارکینگ‌های طبقاتی زیرزمینی عمق خاک و فضای رشد ریشه درختان تنومند سایه‌دار را از بین می‌برد.',
              prs: 'پارکنیگ‌های زیرزمینی مانع ریشه دواندن درختان بزرگ می‌شود.',
              tr: 'Yeraltı otoparklarının olduğu yerlerde büyük ağaçların kök salacak toprağı kalmaz.',
              ar: 'طغيان مواقف السيارات تحت الأرض يحرم الأشجار الكبيرة من عمق التربة الكافي للتجذر.',
              es: 'Los aparcamientos subterráneos impiden el enraizamiento de árboles de gran porte.'
            }
          },
          {
            id: 'gc1_l_q19',
            question: '19. Welcher Satz konkretisiert die rechtlichen Vorgaben in Lücke (19)?',
            options: [
              'a) Ohne verbindliche Quoten für Zisternen und Gründächer bleiben viele Initiativen bloße Symbolpolitik.',
              'b) Man sollte alle Neubauten sofort wieder abreißen.',
              'c) Architekten dürfen keine Computerprogramme mehr nutzen.'
            ],
            correctAnswer: 'a) Ohne verbindliche Quoten für Zisternen und Gründächer bleiben viele Initiativen bloße Symbolpolitik.',
            explanation: {
              en: 'Emphasizes that without binding legal quotas for cisterns and green roofs, policies remain symbolic.',
              fa: 'بدون تعیین سهمیه‌های الزامی برای مخازن ذخیره آب و بام‌های سبز، این طرح‌ها در حد شعار باقی می‌مانند.',
              prs: 'بدون قوانین الزامی برای ذخیره‌گاه‌های آب، این کارها فقط شعار می‌ماند.',
              tr: 'Sarnıç ve yeşil çatı zorunluluğu getirilmezse girişimler sembolik kalacaktır.',
              ar: 'دون نسب إلزامية لخزانات الحصاد المائي والأسطح الخضراء تبقى السياسات مجرد حبر على ورق.',
              es: 'Sin cuotas vinculantes para aljibes y cubiertas vegetales, las medidas se quedan en mero simbolismo.'
            }
          },
          {
            id: 'gc1_l_q20',
            question: '20. Welcher Schlusssatz rundet den Appell in Lücke (20) kraftvoll ab?',
            options: [
              'a) Die klimaresiliente Transformation unserer Lebensräume ist somit keine ästhetische Option, sondern eine zwingende Überlebensfrage.',
              'b) Schirme werden bald das einzige Produkt auf dem Markt sein.',
              'c) Städte sollten komplett aufgegeben und in den Wald verlegt werden.'
            ],
            correctAnswer: 'a) Die klimaresiliente Transformation unserer Lebensräume ist somit keine ästhetische Option, sondern eine zwingende Überlebensfrage.',
            explanation: {
              en: 'Concludes that climate-resilient transformation is an existential necessity, not merely an aesthetic preference.',
              fa: 'مقاوم‌سازی اقلیمی شهرهای ما یک گزینه تزئینی نیست، بلکه شرط بقای زیست شهری در دهه‌های آینده است.',
              prs: 'سازگار ساختن شهر با اقلیم مسئله مرگ و زندگی است، نه زیبایی ظاهری.',
              tr: 'İklime dayanıklı dönüşüm estetik bir tercih değil, yaşamsal bir zorunluluktur.',
              ar: 'التحول الحضري المقاوم للتغير المناخي ليس ترفاً جمالياً بل قضية بقاء لا تحتمل التأجيل.',
              es: 'La transformación climática de nuestras ciudades no es una opción estética, sino un imperativo de supervivencia.'
            }
          }
        ]
      },
      {
        title: 'Teil 3: Sprachliche Textanalyse (Aufgaben 21 bis 30 • Stilistik, Konnektoren & Nomen-Verb-Gefüge)',
        sourceType: 'Juristisches und wirtschaftspolitisches Gutachten zur EU-Lieferkettenrichtlinie',
        body: `Die Verabschiedung der europäischen Corporate Sustainability Due Diligence Directive (CSDDD) markiert eine zivilisatorische Zäsur im internationalen Wirtschaftsrecht. Erstmals werden global agierende Konzerne mit mehr als 1.000 Mitarbeitern und einem Jahresumsatz von über 450 Millionen Euro gesetzlich verpflichtet, menschenrechtliche und umweltbezogene Sorgfaltspflichten entlang ihrer gesamten vor- und nachgelagerten Wertschöpfungskette verbindlich (21) _____.
Hierunter fällt nicht allein das Verbot von Zwangs- und Kinderarbeit bei unmittelbaren Zulieferern, sondern ebenso die Einhaltung internationaler Umweltabkommen zum Schutz von Gewässern und Biodiversität. Kritiker aus Wirtschaftskreisen monieren indessen, dass die Richtlinie zu einem bürokratischen Monstrum ausufere und europäische Firmen im globalen Wettbewerb einseitig (22) _____. Befürworter halten dem entgegen, dass freiwillige Selbstverpflichtungen der Industrie in den vergangenen Jahrzehnten eklatant versagt haben und ein echter Schutz von Arbeiterinnen im globalen Süden nur über sanktionsbewehrte Haftungsregeln (23) _____ werden kann.
Unternehmen müssen künftig Risikoanalysen durchführen, Präventionsmaßnahmen etablieren und einen jährlichen Transparenzbericht (24) _____. Bei schuldhaften Verstößen drohen nicht nur empfindliche Bußgelder von bis zu 5 Prozent des weltweiten Netto-Umsatzes, sondern auch zivilrechtliche Klagen vor europäischen Gerichten, die von Betroffenen oder Nichtregierungsorganisationen (25) _____ werden können.
Es steht mithin außer Frage, dass das Gesetz die Geschäftsmodelle multinationaler Konzerne grundlegend (26) _____ wird. Vorbei sind die Zeiten, in denen Umweltzerstörung und Ausbeutung als externe Kosten auf Dritte (27) _____ werden konnten. Wer auf dem europäischen Binnenmarkt weiterhin operieren will, muss den Nachweis erbringen, dass seine Profitabilität nicht auf systematischer Rechtsverletzung (28) _____.
Für den Mittelstand bedeutet dies freilich eine gewaltige Herausforderung, da Großkonzerne die Dokumentationslasten vertraglich an ihre kleineren Zulieferer (29) _____. Es bedarf daher pragmatischer digitaler Erfassungstools, um den bürokratischen Mehraufwand in (30) _____ Grenzen zu halten.`,
        questions: [
          {
            id: 'gc1_l_q21',
            question: '21. Lücke (21): Nomen-Verb-Verbindung mit "Sorgfaltspflichten":',
            options: ['wahrzunehmen', 'aufzunehmen', 'anzunehmen'],
            correctAnswer: 'wahrzunehmen',
            explanation: {
              en: 'Legal collocation: "Sorgfaltspflichten wahrnehmen" (to exercise/fulfill due diligence obligations).',
              fa: 'ترکیب حقوقی رسمی: "Sorgfaltspflichten wahrnehmen" (رعایت و به جا آوردن وظایف مراقبتی و نظارتی).',
              prs: 'انجام دادن و رعایت کردن مسئولیت‌های حقوقی.',
              tr: 'Hukuki kalıp: "Sorgfaltspflichten wahrnehmen" (özen yükümlülüklerini yerine getirmek).',
              ar: 'تعبير قانوني رسمي: Sorgfaltspflichten wahrnehmen (أداء واجبات الحيطة واليقظة المؤسسية).',
              es: 'Colocación jurídica: Sorgfaltspflichten wahrnehmen (ejercer el deber de diligencia).'
            }
          },
          {
            id: 'gc1_l_q22',
            question: '22. Lücke (22): Feste Wendung "jemanden benachteiligen":',
            options: ['benachteilige', 'benachteiligt', 'benachteiligen'],
            correctAnswer: 'benachteilige',
            explanation: {
              en: 'Konjunktiv I in indirect speech: "... die Richtlinie (...) europäische Firmen (...) einseitig benachteilige."',
              fa: 'وجه التزامی نوع اول (Konjunktiv I) در نقل قول غیرمستقیم: benachteilige.',
              prs: 'صرف کنژونکتیو نوع ۱ برای نقل قول غیرمستقیم.',
              tr: 'Dolaylı aktarımda Konjunktiv I kullanımı: "benachteilige".',
              ar: 'استخدام Konjunktiv I لنقل الكلام غير المباشر بأسلوب محايد: benachteilige.',
              es: 'Uso de Konjunktiv I de estilo indirecto: benachteilige.'
            }
          },
          {
            id: 'gc1_l_q23',
            question: '23. Lücke (23): Passivform für Rechtsdurchsetzung:',
            options: ['durchgesetzt', 'angesetzt', 'aufgesetzt'],
            correctAnswer: 'durchgesetzt',
            explanation: {
              en: 'Enforcement of legal rules: "Rechte / Haftungsregeln durchsetzen" -> Partizip II: "durchgesetzt werden kann".',
              fa: 'به اجرا درآوردن و اعمال قوانین: durchsetzen -> durchgesetzt werden kann.',
              prs: 'تطبیق و عملی ساختن قانون.',
              tr: 'Yaptırımların uygulanması: "durchgesetzt werden kann".',
              ar: 'إنفاذ القواعد القانونية بالقوة الملزمة: durchgesetzt werden kann.',
              es: 'Hacer cumplir y aplicar la norma jurídica: durchgesetzt werden kann.'
            }
          },
          {
            id: 'gc1_l_q24',
            question: '24. Lücke (24): Verb mit "Transparenzbericht":',
            options: ['vorzulegen', 'abzulegen', 'unterzulegen'],
            correctAnswer: 'vorzulegen',
            explanation: {
              en: 'To submit/publish an official report: "einen Bericht vorlegen".',
              fa: 'ارائه دادن گزارش رسمی به مراجع ذی‌صلاح: einen Bericht vorlegen.',
              prs: 'تسلیم و ارائه کردن راپور رسمی.',
              tr: 'Resmi rapor sunmak/ibraz etmek anlamında: "vorlegen".',
              ar: 'تقديم ونشر التقرير الرسمي أمام الجهات الرقابية: vorlegen.',
              es: 'Presentar formalmente un informe ante la autoridad: vorlegen.'
            }
          },
          {
            id: 'gc1_l_q25',
            question: '25. Lücke (25): Juristischer Ausdruck "Klage einreichen / erheben":',
            options: ['eingereicht', 'ausgereicht', 'zugereicht'],
            correctAnswer: 'eingereicht',
            explanation: {
              en: 'Filing a lawsuit: "eine Klage einreichen" -> Partizip II: "eingereicht werden können".',
              fa: 'اقامه دعوی یا ثبت شکایت قضایی: eine Klage einreichen.',
              prs: 'ثبت دعوی در محکمه.',
              tr: 'Mahkemeye dava dilekçesi sunmak: "Klage einreichen".',
              ar: 'رفع الدعاوى القضائية أمام المحاكم: eine Klage einreichen.',
              es: 'Interponer o presentar una demanda judicial: eine Klage einreichen.'
            }
          },
          {
            id: 'gc1_l_q26',
            question: '26. Lücke (26): Verb für tiefgreifende Veränderung:',
            options: ['umwälzen', 'wälzen', 'abwälzen'],
            correctAnswer: 'umwälzen',
            explanation: {
              en: 'To fundamentally transform/revolutionize: "grundlegend umwälzen wird".',
              fa: 'دگرگون ساختن بنیادین: umwälzen.',
              prs: 'متحول و دگرگون ساختن اساسی.',
              tr: 'Kökten dönüştürmek, altüst etmek anlamında: "umwälzen".',
              ar: 'إحداث تغيير جذري وثورة هيكلية في نماذج الأعمال: umwälzen.',
              es: 'Transformar radicalmente las estructuras empresariales: umwälzen.'
            }
          },
          {
            id: 'gc1_l_q27',
            question: '27. Lücke (27): Idiom "Kosten auf Dritte übertragen":',
            options: ['abgewälzt', 'umgewälzt', 'gewälzt'],
            correctAnswer: 'abgewälzt',
            explanation: {
              en: 'To shift costs/burdens onto third parties: "Kosten auf Dritte abwälzen".',
              fa: 'تحمیل کردن هزینه‌ها و بار مسئولیت بر دوش دیگران: Kosten abwälzen.',
              prs: 'بار مصارف را بر دوش دیگران انداختن.',
              tr: 'Maliyetleri başkalarının sırtına yüklemek: "Kosten abwälzen".',
              ar: 'إلقاء الأعباء والتكاليف على كاهل أطراف ثالثة: Kosten abwälzen.',
              es: 'Descargar o repercutir costes sobre terceros: Kosten abwälzen.'
            }
          },
          {
            id: 'gc1_l_q28',
            question: '28. Lücke (28): Verb mit Präposition "auf" + Dativ:',
            options: ['beruht', 'besteht', 'verharrt'],
            correctAnswer: 'beruht',
            explanation: {
              en: 'Collocation with "auf": "auf einer Rechtsverletzung beruhen" (to be based on).',
              fa: 'فعل متعدی با حرف اضافه auf: beruhen auf + Dativ (مبتنی بودن بر).',
              prs: 'استوار بودن بر تخلف قانونی.',
              tr: '"auf" edatı ile Dativ: "auf etwas beruhen" (bir şeye dayanmak/kaynaklanmak).',
              ar: 'الفعل المتعدي مع حرف الجر auf: beruhen auf (يستند أو يرتكز على).',
              es: 'Régimen preposicional: beruhen auf + dativo (fundamentarse en).'
            }
          },
          {
            id: 'gc1_l_q29',
            question: '29. Lücke (29): Weitergabe von Verpflichtungen:',
            options: ['weitergeben', 'aufgeben', 'hergeben'],
            correctAnswer: 'weitergeben',
            explanation: {
              en: 'Passing along obligations down the supply chain: "Dokumentationslasten weitergeben".',
              fa: 'منتقل کردن بار مستندسازی به تامین‌کنندگان کوچک: weitergeben.',
              prs: 'انتقال دادن بار مسئولیت به شرکت‌های کوچک‌تر.',
              tr: 'Yükümlülükleri zincirdeki alt firmalara devretmek/aktarmak: "weitergeben".',
              ar: 'تمرير أعباء التوثيق وتمريرها للموردين الأصغر حجماً: weitergeben.',
              es: 'Trasladar obligaciones documentales a los proveedores menores: weitergeben.'
            }
          },
          {
            id: 'gc1_l_q30',
            question: '30. Lücke (30): Idiom "in erträglichen Grenzen halten":',
            options: ['erträglichen', 'tragenden', 'ertragenen'],
            correctAnswer: 'erträglichen',
            explanation: {
              en: 'Fixed phrase: "in erträglichen Grenzen halten" (to keep within tolerable limits).',
              fa: 'اصطلاح ثابت آلمانی: "in erträglichen Grenzen halten" (در مرزهای معقول و قابل تحمل نگه داشتن).',
              prs: 'در حد قابل قبول و معقول نگهداشتن.',
              tr: 'Kalıp deyiş: "in erträglichen Grenzen halten" (katlanılabilir sınırlarda tutmak).',
              ar: 'تعبير اصطلاحي بليغ: in erträglichen Grenzen halten (الإبقاء ضمن حدود معقولة ومحتملة).',
              es: 'Locución idiomática: in erträglichen Grenzen halten (mantener dentro de límites tolerables).'
            }
          }
        ]
      }
    ]
  },
  hoeren: {
    title: 'Modul Hörverstehen (40 Minuten • 30 Aufgaben)',
    durationMinutes: 40,
    audioItems: [
      {
        id: 'gc1_h_item1',
        title: 'Teil 1: Fachgespräch im Beruf (Aufgaben 1 bis 10 • Zweimal hören)',
        situation: 'Strategiedialog zwischen Chefjustiziar Dr. Rüdiger und Vorstandsmitglied Frau Dr. Sommer über KI-Governance',
        transcript: `Frau Dr. Sommer: "Herr Dr. Rüdiger, vielen Dank für das kurzfristige Treffen. Unser Technologievorstand drängt darauf, in sämtlichen europäischen Tochtergesellschaften ein generatives KI-Assistenzsystem zur Auswertung von Kundendaten zu implementieren. Aus wirtschaftlicher Sicht sprechen alle Kennzahlen dafür. Wie bewerten Sie die Rechtslage im Lichte des neuen europäischen AI Acts?"
Dr. Rüdiger: "Ich teile die Begeisterung über die Effizienzpotenziale, muss jedoch dringend vor einem übereilten Roll-out warnen. Das geplante System fällt nach unserer vorläufigen juristischen Risikoklassifizierung unter Artikel 6 des AI Acts als 'Hochrisiko-KI-System', da es sensible finanzielle und persönliche Verhaltensmuster unserer Klienten profiliert."
Frau Dr. Sommer: "Welche konkreten Auflagen müssen wir vor dem Go-Live zwingend erfüllen, um Bußgelder zu vermeiden?"
Dr. Rüdiger: "Erstens ist ein lückenloses Risikomanagementsystem vorgeschrieben, das über den gesamten Lebenszyklus kontinuierlich fortgeschrieben werden muss. Zweitens dürfen die Trainingsdaten keine systematischen Diskriminierungsverzerrungen aufweisen – wir müssen die Datenherkunft forensisch belegen können. Und drittens verlangt das Gesetz eine wirksame menschliche Aufsicht ('Human Oversight'). Kein Kredit- oder Vertragsentscheid darf rein autonom gefällt werden; ein qualifizierter Mitarbeiter muss stets die Möglichkeit haben, die KI-Empfehlung zu überstimmen."
Frau Dr. Sommer: "Wie sieht es mit den Haftungsrisiken für den Vorstand persönlich aus?"
Dr. Rüdiger: "Die Bußgeldandrohungen sind drakonisch: Bis zu 35 Millionen Euro oder 7 Prozent des weltweiten Jahresumsatzes. Zudem verankert die EU verschuldensunabhängige Produkthaftungsansprüche für geschädigte Verbraucher. Wenn wir hier nachlässig handeln, drohen uns neben existenzgefährdenden Finanzstrafen auch gravierende Reputationsschäden."
Frau Dr. Sommer: "Gut. Dann stoppen wir die sofortige Freigabe. Ich beauftrage Ihre Rechtsabteilung mit der Ausarbeitung eines verbindlichen KI-Governance-Kodex und der Einleitung eines externen Konformitätsaudits bis zum dritten Quartal."`,
        questions: [
          {
            id: 'gc1_h_q1',
            question: '1. Welches System soll laut Frau Dr. Sommer in den europäischen Tochtergesellschaften eingeführt werden?',
            options: ['Ein generatives KI-Assistenzsystem zur Auswertung von Kundendaten', 'Eine neue Kaffeemaschine für den Pausenraum', 'Ein handgeschriebenes Aktenarchiv'],
            correctAnswer: 'Ein generatives KI-Assistenzsystem zur Auswertung von Kundendaten',
            explanation: {
              en: 'Transcript states: "... generatives KI-Assistenzsystem zur Auswertung von Kundendaten zu implementieren."',
              fa: 'یک سیستم دستیار هوش مصنوعی مولد برای تحلیل داده‌های مشتریان در کلیه شعب اروپایی.',
              prs: 'سیستم هوش مصنوعی برای ارزیابی دیتای مشتریان.',
              tr: 'Müşteri verilerini analiz eden üretken bir yapay zeka asistan sistemi.',
              ar: 'نظام مساعد بالذكاء الاصطناعي التوليدي لتحليل بيانات العملاء وسلوكياتهم.',
              es: 'Un sistema de asistencia de IA generativa para análisis de datos de clientes.'
            }
          },
          {
            id: 'gc1_h_q2',
            question: '2. Wie stuft Dr. Rüdiger das System gemäß dem europäischen AI Act ein?',
            options: ['Als Hochrisiko-KI-System (Artikel 6)', 'Als völlig unbedenkliche Spielerei', 'Als verbotenes Waffensystem'],
            correctAnswer: 'Als Hochrisiko-KI-System (Artikel 6)',
            explanation: {
              en: 'Classification: "... fällt (...) unter Artikel 6 des AI Acts als \'Hochrisiko-KI-System\'...".',
              fa: 'سیستم پرخطر (Hochrisiko-KI-System) تحت ماده ۶ قانون هوش مصنوعی اتحادیه اروپا.',
              prs: 'سیستم پرخطر هوش مصنوعی تحت قانون اروپا.',
              tr: 'Avrupa Yapay Zeka Yasası Madde 6 kapsamında "Yüksek Riskli Yapay Zeka Sistemi".',
              ar: 'يصنفه كنظام ذكاء اصطناعي عالي المخاطر وفق المادة 6 من قانون الذكاء الاصطناعي الأوروبي.',
              es: 'Como sistema de IA de alto riesgo en virtud del artículo 6 de la ley europea.'
            }
          },
          {
            id: 'gc1_h_q3',
            question: '3. Warum fällt das System in diese Risikokategorie?',
            options: ['Weil es sensible finanzielle und persönliche Verhaltensmuster profiliert', 'Weil die Computer zu viel Strom verbrauchen', 'Weil die Software in Englisch programmiert ist'],
            correctAnswer: 'Weil es sensible finanzielle und persönliche Verhaltensmuster profiliert',
            explanation: {
              en: 'Reason: "... da es sensible finanzielle und persönliche Verhaltensmuster unserer Klienten profiliert."',
              fa: 'زیرا الگوهای رفتاری حساس مالی و شخصی مشتریان را تحلیل و پروفایل‌سازی می‌کند.',
              prs: 'به خاطر پروفایل‌سازی عادات پولی و شخصی مشتریان.',
              tr: 'Müşterilerin hassas finansal ve kişisel davranış kalıplarını profillemesi sebebiyle.',
              ar: 'لأنه يقوم بتحليل الأنماط السلوكية والمالية الحساسة لعملاء الشركة.',
              es: 'Porque elabora perfiles sobre patrones conductuales y financieros sensibles.'
            }
          },
          {
            id: 'gc1_h_q4',
            question: '4. Was verlangt das Gesetz bezüglich des Risikomanagementsystems?',
            options: ['Es muss über den gesamten Lebenszyklus kontinuierlich fortgeschrieben werden', 'Es reicht, wenn man ein PDF ausdruckt', 'Es muss nach drei Tagen gelöscht werden'],
            correctAnswer: 'Es muss über den gesamten Lebenszyklus kontinuierlich fortgeschrieben werden',
            explanation: {
              en: 'Requirement: "... lückenloses Risikomanagementsystem (...) über den gesamten Lebenszyklus kontinuierlich fortgeschrieben...".',
              fa: 'سیستم مدیریت ریسک بدون وقفه در سرتاسر چرخه حیات نرم‌افزار باید به‌روزرسانی شود.',
              prs: 'مدیریت خطرات باید در طول تمام عمر سیستم ادامه داشته باشد.',
              tr: 'Sistemin tüm yaşam döngüsü boyunca kesintisiz güncellenen risk yönetimi zorunludur.',
              ar: 'نظام متكامل لإدارة المخاطر يتم تحديثه وتطويره باستمرار طوال دورة حياة النظام.',
              es: 'Un sistema de gestión de riesgos actualizado de forma continua a lo largo de su ciclo de vida.'
            }
          },
          {
            id: 'gc1_h_q5',
            question: '5. Welche Anforderung stellt das Gesetz an die Trainingsdaten?',
            options: ['Sie dürfen keine Diskriminierungsverzerrungen aufweisen und Herkunft muss forensisch belegt sein', 'Sie müssen komplett aus Social-Media-Posts bestehen', 'Sie müssen mindestens 100 Jahre alt sein'],
            correctAnswer: 'Sie dürfen keine Diskriminierungsverzerrungen aufweisen und Herkunft muss forensisch belegt sein',
            explanation: {
              en: 'Data quality: No discriminatory bias and provenance must be proven forensically.',
              fa: 'داده‌های آموزشی نباید دچار سوگیری‌های تبعیض‌آمیز باشند و مبدأ آن‌ها باید اثبات‌پذیر باشد.',
              prs: 'دیتای اولیه نباید تبعیض‌آمیز باشد و منبع آن معلوم باشد.',
              tr: 'Eğitim verileri ayrımcılık önyargısı barındırmamalı ve kaynağı adli olarak kanıtlanabilmelidir.',
              ar: 'خلو بيانات التدريب من الانحيازات التمييزية والقدرة على إثبات مصدرها جنائياً.',
              es: 'Los datos no deben contener sesgos discriminatorios y su origen debe ser comprobable.'
            }
          },
          {
            id: 'gc1_h_q6',
            question: '6. Was bedeutet der Grundsatz der "menschlichen Aufsicht" (Human Oversight)?',
            options: ['Ein Mitarbeiter muss jederzeit in der Lage sein, die KI-Entscheidung zu überstimmen', 'Der Computer muss jeden Morgen von einem Menschen gereinigt werden', 'Ein Mensch muss alle Zahlen von Hand nachrechnen'],
            correctAnswer: 'Ein Mitarbeiter muss jederzeit in der Lage sein, die KI-Entscheidung zu überstimmen',
            explanation: {
              en: 'Human oversight means a qualified person can always override automated recommendations.',
              fa: 'نظارت انسانی یعنی کارمند واجد شرایط بتواند هر زمان پیشنهاد هوش مصنوعی را باطل یا اصلاح کند.',
              prs: 'انسان صلاحیت داشته باشد که فیصله هوش مصنوعی را رد کند.',
              tr: 'Yetkili bir çalışanın yapay zeka tavsiyesini her an geçersiz kılabilmesi gerekir.',
              ar: 'تمكين موظف مؤهل من نقض قرار الذكاء الاصطناعي وتجاوزه في أي وقت.',
              es: 'Un profesional cualificado debe conservar la potestad de anular la recomendación de la IA.'
            }
          },
          {
            id: 'gc1_h_q7',
            question: '7. Welche maximale Bußgeldhöhe droht Unternehmen bei schweren Verstößen gegen den AI Act?',
            options: ['Bis zu 35 Millionen Euro oder 7 Prozent des weltweiten Jahresumsatzes', 'Maximal 1.000 Euro', 'Genau 100.000 Dollar'],
            correctAnswer: 'Bis zu 35 Millionen Euro oder 7 Prozent des weltweiten Jahresumsatzes',
            explanation: {
              en: 'Fines: Up to 35 million EUR or 7% of global annual turnover.',
              fa: 'جریمه تا سقف ۳۵ میلیون یورو یا ۷ درصد کل گردش مالی سالانه جهانی.',
              prs: 'جریمه تا ۳۵ میلیون یورو یا ۷ فیصد عاید سالانه.',
              tr: '35 milyon Euro\'ya kadar veya küresel yıllık cironun %7\'si oranında ceza.',
              ar: 'غرامات مالية تصل إلى 35 مليون يورو أو 7% من إجمالي الإيرادات السنوية العالمية.',
              es: 'Hasta 35 millones de euros o el 7% de la facturación global anual.'
            }
          },
          {
            id: 'gc1_h_q8',
            question: '8. Welches zusätzliche Rechtsrisiko verankert die Europäische Union für geschädigte Verbraucher?',
            options: ['Verschuldensunabhängige Produkthaftungsansprüche', 'Ein lebenslanges Recht auf kostenlose Aktien', 'Ein Verbot von Smartphones'],
            correctAnswer: 'Verschuldensunabhängige Produkthaftungsansprüche',
            explanation: {
              en: 'Liability: Strict product liability claims for affected consumers.',
              fa: 'حقوق مسئولیت مدنی مبتنی بر کالا بدون نیاز به اثبات تقصیر (verschuldensunabhängige Haftung).',
              prs: 'حق ادعای خسارت توسط مشتریان بدون اثبات تقصیر.',
              tr: 'Kusursuz ürün sorumluluğu tazminat hakları.',
              ar: 'دعاوى المسؤولية المدنية الموضوعية عن عيوب المنتجات للمستهلكين المتضررين.',
              es: 'Responsabilidad civil objetiva por productos defectuosos para los consumidores.'
            }
          },
          {
            id: 'gc1_h_q9',
            question: '9. Wie reagiert Frau Dr. Sommer auf die juristischen Ausführungen?',
            options: ['Sie stoppt die sofortige Freigabe und fordert einen Governance-Kodex mit Audit', 'Sie ignoriert die Bedenken und schaltet das System sofort frei', 'Sie kündigt Herrn Dr. Rüdiger fristlos'],
            correctAnswer: 'Sie stoppt die sofortige Freigabe und fordert einen Governance-Kodex mit Audit',
            explanation: {
              en: 'Decision: "... stoppen wir die sofortige Freigabe. Ich beauftrage (...) KI-Governance-Kodex und (...) Konformitätsaudit...".',
              fa: 'او عرضه فوری را متوقف کرده و دستور تدوین آیین‌نامه نظارت بر هوش مصنوعی و حسابرسی قانونی را صادر می‌کند.',
              prs: 'پروژه را موقتا متوقف کرد تا استانداردهای قانونی تهیه شود.',
              tr: 'Sistemin açılışını durdurur ve uyum denetimi ile yönetim yönergesi hazırlanmasını emreder.',
              ar: 'توقف الإطلاق الفوري وتكلف الإدارة القانونية بإعداد ميثاق حوكمة وتدقيق امتثال.',
              es: 'Frena el despliegue inmediato y encarga un código de gobernanza y una auditoría.'
            }
          },
          {
            id: 'gc1_h_q10',
            question: '10. Bis wann soll das externe Konformitätsaudit eingeleitet werden?',
            options: ['Bis zum dritten Quartal', 'In zehn Jahren', 'Bereits gestern'],
            correctAnswer: 'Bis zum dritten Quartal',
            explanation: {
              en: 'Timeline: "... bis zum dritten Quartal."',
              fa: 'تا سه‌ماهه سوم سال جاری میلادی (Q3).',
              prs: 'تا کوارتر سوم سال جاری.',
              tr: 'Üçüncü çeyreğe kadar.',
              ar: 'بحلول الربع الثالث من العام الحالي.',
              es: 'Hasta el tercer trimestre.'
            }
          }
        ]
      },
      {
        id: 'gc1_h_item2',
        title: 'Teil 2: Wissenschaftsinterview (Aufgaben 11 bis 20 • Zweimal hören)',
        situation: 'Wissenschaftssendung: Neuroplastizität und Gehirn-Computer-Schnittstellen (BCI)',
        transcript: `Moderator: "Herzlich willkommen zu 'Wissenschaft im Brennpunkt'. Unser Gast ist Prof. Dr. Elena Vosshage vom Max-Planck-Institut für Kognitions- und Neurowissenschaften in Leipzig. Frau Professorin Vosshage, die Entwicklung invasiver und nicht-invasiver Gehirn-Computer-Schnittstellen hat in den letzten Jahren atemberaubende Fortschritte gemacht. Welche therapeutischen Meilensteine wurden bereits erreicht?"
Prof. Dr. Vosshage: "Wir erleben gegenwärtig eine wahrhafte Revolution in der Neurorehabilitation. Für Patienten mit schweren Lähmungen – etwa infolge von Querschnittssyndromen oder amyotropher Lateralsklerose (ALS) – ermöglichen implantierte Elektrodenarrays heute die direkte Dekodierung motorischer kortikaler Signale. Diese Patienten können durch reine Vorstellungskraft Textnachrichten verfassen, Roboter-Prothesen steuern oder sogar computergenerierte Sprachausgaben ansteuern, die ihrer natürlichen Stimme vor der Erkrankung verblüffend ähneln."
Moderator: "Wie funktioniert die Übersetzung der neuronalen Entladungen in digitale Befehle auf algorithmischer Ebene?"
Prof. Dr. Vosshage: "Das ist ein hochkomplexes Zusammenspiel von Neurophysiologie und maschinellem Lernen. Die Mikroelektroden registrieren Aktionspotenziale Tausender benachbarter Neuronenverbände im primären motorischen Kortex. Tiefe neuronale Netze filtern das physiologische Hintergrundrauschen heraus und lernen, subtile Aktivierungsmuster bestimmten intendierten Bewegungsabsichten zuzuordnen. Die enorme Plastizität des menschlichen Gehirns führt dazu, dass sich das biologische neuronale Netzwerk im Zuge des täglichen Feedbacks an das maschinelle Modell anpasst – Gehirn und Algorithmus lernen gewissermaßen im Tandem."
Moderator: "Neben den unbestrittenen Heilsversprechen mehren sich ethische Bedenken hinsichtlich mentaler Privatheit und 'Neuro-Rechten'. Wo liegen hier die Gefahren?"
Prof. Dr. Vosshage: "Die größte ethische Bruchlinie betrifft die Unantastbarkeit des inneren Gedankenraums. Wenn Algorithmen künftig nicht nur motorische Intentionen, sondern semantische Konzepte, emotionale Zustände oder gar unbewusste Präferenzen präzise aus Hirnströmen rekonstruieren können, droht die totale Entblößung des menschlichen Bewusstseins. Es ist daher zwingend geboten, sogenannte 'Neuro-Rechte' als völkerrechtlich bindende Menschenrechte zu kodifizieren: das unveräußerliche Recht auf kognitive Selbstbestimmung, mentale Integrität und das Verbot des unbefugten Auslesens neuronaler Daten."`,
        questions: [
          {
            id: 'gc1_h_q11',
            question: '11. An welchem Institut forscht Prof. Dr. Elena Vosshage?',
            options: ['Max-Planck-Institut für Kognitions- und Neurowissenschaften in Leipzig', 'Bayerisches Landesamt für Statistik', 'Institut für Meeresbiologie in Kiel'],
            correctAnswer: 'Max-Planck-Institut für Kognitions- und Neurowissenschaften in Leipzig',
            explanation: {
              en: 'Introduction confirms: Max-Planck-Institut für Kognitions- und Neurowissenschaften in Leipzig.',
              fa: 'پروفسور فوس‌هاگه در موسسه معتبر ماکس پلانک برای علوم شناختی و اعصاب در لایپزیگ تحقیق می‌کند.',
              prs: 'انستیتوت ماکس پلانک در لایپزیگ.',
              tr: 'Leipzig\'deki Max Planck Bilişsel ve Nörolojik Bilimler Enstitüsü.',
              ar: 'معهد ماكس بلانك للعلوم الإدراكية والعصبية بمدينة لايبزيغ.',
              es: 'Instituto Max Planck de Ciencias Cognitivas y Neurociencias en Leipzig.'
            }
          },
          {
            id: 'gc1_h_q12',
            question: '12. Welche Patientengruppe profitiert laut Prof. Vosshage gegenwärtig am meisten von Gehirn-Computer-Schnittstellen?',
            options: ['Patienten mit schweren Lähmungen durch Querschnitt oder ALS', 'Menschen mit leichtem Schnupfen', 'Personen mit Schlafstörungen'],
            correctAnswer: 'Patienten mit schweren Lähmungen durch Querschnitt oder ALS',
            explanation: {
              en: 'Target group: Paralyzed patients suffering from spinal cord injuries or ALS.',
              fa: 'بیماران مبتلا به فلج شدید ناشی از قطع نخاع یا بیماری ALS بیشترین بهره را می‌برند.',
              prs: 'مریضان فلج ناشی از نخاع شوکی یا بیماری ALS.',
              tr: 'Omurilik felci ve ALS kaynaklı ağır felçli hastalar.',
              ar: 'مرضى الشلل الرباعي وإصابات الحبل الشوكي ومرض التصلب الجانبي الضموري (ALS).',
              es: 'Pacientes con parálisis severas por lesión medular o esclerosis lateral amiotrófica (ELA).'
            }
          },
          {
            id: 'gc1_h_q13',
            question: '13. Was können gelähmte Patienten durch implantierte Elektroden steuern?',
            options: ['Textnachrichten, Roboter-Prothesen und computergenerierte Sprache', 'Ganze Flugzeuge im Weltall', 'Die Börsenkurse an der Wall Street'],
            correctAnswer: 'Textnachrichten, Roboter-Prothesen und computergenerierte Sprache',
            explanation: {
              en: 'Capabilities: Write text, control robotic prosthetics, and trigger synthesized speech.',
              fa: 'نگارش پیام‌های متنی، هدایت پروتزهای رباتیک و تولید صدای شبیه‌سازی‌شده طبیعی.',
              prs: 'نوشتن پیام متنی، حرکت دادن اعضای مصنوعی و صحبت کردن.',
              tr: 'Metin mesajı yazma, robot protezleri yönetme ve bilgisayar sesiyle konuşma.',
              ar: 'كتابة الرسائل النصية، التحكم بالأطراف الاصطناعية الروبوتية، وتوليد الصوت الاصطناعي.',
              es: 'Redacción de textos, manejo de prótesis robóticas y emisión de voz sintética.'
            }
          },
          {
            id: 'gc1_h_q14',
            question: '14. In welchem Gehirnareal registrieren die Mikroelektroden die Aktionspotenziale?',
            options: ['Im primären motorischen Kortex', 'Im Riechzentrum der Nase', 'Im Innenohr'],
            correctAnswer: 'Im primären motorischen Kortex',
            explanation: {
              en: 'Brain region: "... im primären motorischen Kortex."',
              fa: 'در قشر حرکتی اولیه مغز (primärer motorischer Kortex).',
              prs: 'در بخش حرکتی کورتکس مغز.',
              tr: 'Primer motor kortekste.',
              ar: 'في القشرة الحركية الأولية للدماغ.',
              es: 'En la corteza motora primaria.'
            }
          },
          {
            id: 'gc1_h_q15',
            question: '15. Welche Rolle spielen tiefe neuronale Netze bei der Signalverarbeitung?',
            options: ['Sie filtern Hintergrundrauschen und ordnen Aktivierungsmuster Bewegungsabsichten zu', 'Sie löschen alle Erinnerungen des Patienten', 'Sie erhitzen das Gehirn auf 40 Grad'],
            correctAnswer: 'Sie filtern Hintergrundrauschen und ordnen Aktivierungsmuster Bewegungsabsichten zu',
            explanation: {
              en: 'Algorithm role: Deep neural networks filter noise and map neural patterns to intended movements.',
              fa: 'شبکه‌های عصبی عمیق نویزهای پس‌زمینه را فیلتر کرده و الگوها را به نیت‌های حرکتی متصل می‌کنند.',
              prs: 'فیلتر کردن امواج اضافی و وصل کردن سیگنال به حرکت عضو.',
              tr: 'Gürültüyü filtreleyerek aktivasyon desenlerini hareket niyetleriyle eşleştirirler.',
              ar: 'تصفية التشويش والضوضاء الفسيولوجية ومطابقة الأنماط مع نية الحركة المستهدفة.',
              es: 'Filtran el ruido biológico y asignan patrones de activación a intenciones motrices.'
            }
          },
          {
            id: 'gc1_h_q16',
            question: '16. Was versteht Prof. Vosshage unter dem gemeinsamen Lernen von Gehirn und Algorithmus ("im Tandem")?',
            options: ['Das biologische Netzwerk passt sich durch Neuroplastizität an das Modell an, während das Modell lernt', 'Beide fahren gemeinsam auf einem Fahrrad', 'Der Computer liest Lehrbücher vor'],
            correctAnswer: 'Das biologische Netzwerk passt sich durch Neuroplastizität an das Modell an, während das Modell lernt',
            explanation: {
              en: 'Co-adaptation: Biological brain adjusts via plasticity while deep learning model tunes itself.',
              fa: 'انعطاف‌پذیری عصبی مغز باعث می‌شود بافت بیولوژیک همگام با الگوریتم ماشین در روندی دوسویه یاد بگیرد.',
              prs: 'مغز انسان و الگوریتم هوش مصنوعی همزمان با هم یاد می‌گیرند.',
              tr: 'Biyolojik sinir ağı nöroplastisite ile modele uyum sağlarken algoritma da kendini geliştirir.',
              ar: 'تكيف الشبكة العصبية البيولوجية مع النموذج الحسابي عبر المرونة العصبية في مسار تعلم مشترك.',
              es: 'La red neuronal biológica se adapta al modelo artificial mediante neuroplasticidad y viceversa.'
            }
          },
          {
            id: 'gc1_h_q17',
            question: '17. Welche fundamentale ethische Gefahr sieht Prof. Vosshage für die Zukunft?',
            options: ['Die Rekonstruktion emotionaler Zustände und den Verlust der mentalen Privatheit', 'Dass Roboter teurer werden als Autos', 'Dass Patienten zu viel schlafen'],
            correctAnswer: 'Die Rekonstruktion emotionaler Zustände und den Verlust der mentalen Privatheit',
            explanation: {
              en: 'Ethical risk: Algorithms reconstructing semantic concepts and emotions, obliterating mental privacy.',
              fa: 'بازسازی حالات عاطفی و ذهنی و از بین رفتن کامل حریم خصوصی افکار انسان.',
              prs: 'افشا شدن کامل افکار، رازها و احساسات درونی انسان.',
              tr: 'Duygusal durumların çözümlenmesi ve zihinsel mahremiyetin tamamen yok olması.',
              ar: 'إمكانية قراءة المفاهيم الدلالية والمشاعر وانتهاك الخصوصية الذهنية الداخلية للإنسان.',
              es: 'La reconstrucción de estados emocionales y la pérdida de la privacidad mental.'
            }
          },
          {
            id: 'gc1_h_q18',
            question: '18. Welche Forderung leitet die Wissenschaftlerin aus diesen Risiken ab?',
            options: ['Die Kodifizierung völkerrechtlich bindender "Neuro-Rechte"', 'Den weltweiten Stopp aller Computerforschungen', 'Die Vernichtung aller Krankenhäuser'],
            correctAnswer: 'Die Kodifizierung völkerrechtlich bindender "Neuro-Rechte"',
            explanation: {
              en: 'Call to action: Codification of legally binding "Neuro-Rights" under international human rights law.',
              fa: 'تصویب و ثبت «حقوق عصبی» (Neuro-Rechte) به عنوان حقوق بنیادین الزام‌آور در حقوق بین‌الملل بشر.',
              prs: 'تصویب حقوق بین‌المللی برای حفاظت از اطلاعات عصبی مغز انسان.',
              tr: 'Uluslararası bağlayıcılığı olan "Nöro-Haklar"ın insan hakkı olarak yasalaşması.',
              ar: 'تقنين "الحقوق العصبية" وتدوينها كحقوق إنسان ملزمة بموجب القانون الدولي.',
              es: 'La tipificación de "Neuroderechos" vinculantes en el marco del derecho internacional humanitario.'
            }
          },
          {
            id: 'gc1_h_q19',
            question: '19. Was umfasst das Recht auf kognitive Selbstbestimmung konkret?',
            options: ['Das Verbot des unbefugten Auslesens und Manipulierens neuronaler Daten', 'Dass man keine Mathematik mehr in der Schule lernen muss', 'Kostenlose Kinokarten für jedermann'],
            correctAnswer: 'Das Verbot des unbefugten Auslesens und Manipulierens neuronaler Daten',
            explanation: {
              en: 'Cognitive liberty prohibits unauthorized reading and manipulation of brain data.',
              fa: 'ممنوعیت مطلق هرگونه بازخوانی یا دستکاری غیرمجاز داده‌های عصبی و ذهنی فرد.',
              prs: 'منع خواندن یا دستکاری دیتای مغز بدون اجازه انسان.',
              tr: 'Nöronal verilerin izinsiz okunmasının ve manipüle edilmesinin kesinlikle yasaklanması.',
              ar: 'حظر القراءة غير المصرح بها للبيانات العصبية أو التلاعب بالعمليات المعرفية.',
              es: 'La prohibición de la lectura y manipulación no autorizada de los datos neuronales.'
            }
          },
          {
            id: 'gc1_h_q20',
            question: '20. Welcher Begriff beschreibt die Fähigkeit des Gehirns, sich funktionell umzubauen?',
            options: ['Neuroplastizität', 'Fotosynthese', 'Gravitation'],
            correctAnswer: 'Neuroplastizität',
            explanation: {
              en: 'Neuroplasticity is the brain\'s capacity to reorganize neural pathways functionally.',
              fa: 'انعطاف‌پذیری و بازآرایی عصبی (Neuroplastizität).',
              prs: 'نوروپلاستیزیتی یا بازسازی ساختار عصبی.',
              tr: 'Beynin fonksiyonel olarak yeniden yapılanma yeteneği: Nöroplastisite.',
              ar: 'القدرة على إعادة التشكيل الوظيفي للدماغ: المرونة العصبية (Neuroplastizität).',
              es: 'La capacidad del cerebro de reorganizarse funcionalmente: Neuroplasticidad.'
            }
          }
        ]
      },
      {
        id: 'gc1_h_item3',
        title: 'Teil 3: Akademische Vorlesung (Aufgaben 21 bis 30 • Einmal hören)',
        situation: 'Universitätsvorlesung an der LMU München: "Makroökonomie des demografischen Wandels und Rentenfinanzierung"',
        transcript: `Prof. Dr. Wallner: "Meine Damen und Herren, in der heutigen Vorlesung wenden wir uns der langfristigen Tragfähigkeit umlagefinanzierter Sozialversicherungssysteme zu. Das deutsche Rentensystem basiert seit der wegweisenden Adenauerschen Reform von 1957 auf dem sogenannten Umlageverfahren ('Generationenvertrag'). Das Prinzip ist bestechend simpel: Die Erwerbstätigen von heute finanzieren über ihre monatlichen Beiträge die Renten der aktuellen Ruheständler – es werden keinerlei Kapitalstöcke aufgebaut.
Dieses Modell funktionierte über ein halbes Jahrhundert reibungslos, solange die sogenannte Demografie-Pyramide eine breite Basis aufwies. Im Jahr 1962 kamen auf einen Ruheständler noch sechs aktive Beitragszahler. Heute hat sich diese Relation drastisch verschoben: Wir steuern auf ein Verhältnis von 1,5 zu 1 zu. Das Eintreten der geburtenstarken Jahrgänge – der sogenannten Babyboomer – in den Ruhestand zwischen 2025 und 2035 bringt das System in eine fundamentale mathematische Schieflage.
Welche makroökonomischen Stellschrauben stehen der Wirtschaftspolitik zur Verfügung? Es sind exakt vier:
Erstens: Die Anhebung des Beitragssatzes. Dies würde jedoch die Lohnnebenkosten in die Höhe treiben, den Faktor Arbeit verteuern und die Wettbewerbsfähigkeit der deutschen Industrie schwer beschädigen.
Zweitens: Die Absenkung des Rentenniveaus. Dies birgt das erhebliche Risiko einer sprunghaft ansteigenden Altersarmut und untergräbt das Vertrauen jüngerer Generationen in den Sozialstaat.
Drittens: Der massive Einsatz von Steuermitteln. Bereits heute fließen über 110 Milliarden Euro jährlich aus dem Bundeshaushalt als Zuschuss in die Rentenkasse – das ist fast ein Viertel des gesamten Bundesetats. Eine Ausweitung engt den finanziellen Spielraum für Zukunftsinvestitionen in Bildung und Infrastruktur gefährlich ein.
Und viertens: Die Anhebung des Renteneintrittsalters. Ökonomen fordern vermehrt eine Koppelung des Renteneintritts an die fernere Lebenserwartung, was de facto auf ein Renteneintrittsalter von 68 oder 69 Jahren hinausliefe.
Um die Einseitigkeit des Umlageverfahrens aufzubrechen, diskutiert die Bundesregierung die Einführung einer teilweisen kapitalgedeckten Säule – das sogenannte 'Generationenkapital'. Hierbei nimmt der Bund Kredite auf, um globale Aktienfonds aufzubauen, deren Erträge ab Mitte der 2030er Jahre die Rentenbeiträge dämpfen sollen. Ob diese Renditen jedoch ausreichen, um die demografische Lücke zu schließen, bleibt unter Wirtschaftswissenschaftlern heftig umstritten."`,
        questions: [
          {
            id: 'gc1_h_q21',
            question: '21. Auf welchem Grundprinzip basiert das deutsche Rentensystem seit 1957?',
            options: ['Auf dem Umlageverfahren ("Generationenvertrag")', 'Auf einer reinen Goldreserve im Tresor', 'Auf freiwilligen Spenden'],
            correctAnswer: 'Auf dem Umlageverfahren ("Generationenvertrag")',
            explanation: {
              en: 'Lecture clarifies: Based on the pay-as-you-go system ("Umlageverfahren / Generationenvertrag").',
              fa: 'نظام بازنشستگی آلمان بر مبنای سیستم تسهیم پرداختی یا قرارداد نسل‌ها (Umlageverfahren) کار می‌کند.',
              prs: 'قرارداد بین نسل‌ها: شاغلین امروز مصارف متقاعدین امروز را می‌دهند.',
              tr: '1957\'den bu yana uygulanan nesiller arası dayanışmaya dayalı dağıtım sistemi (Umlageverfahren).',
              ar: 'نظام التوزيع التكافلي بين الأجيال (Umlageverfahren / Generationenvertrag) القائم منذ 1957.',
              es: 'El sistema de reparto ("pacto intergeneracional") sin acumulación de capitales.'
            }
          },
          {
            id: 'gc1_h_q22',
            question: '22. Wie funktionierte die Relation von Beitragszahlern zu Rentnern im Jahr 1962 im Vergleich zu heute?',
            options: ['1962 kamen sechs Zahler auf einen Rentner; heute steuern wir auf 1,5 zu 1 zu', 'Es gab 1962 überhaupt keine Rentner', 'Das Verhältnis war damals schlechter als heute'],
            correctAnswer: '1962 kamen sechs Zahler auf einen Rentner; heute steuern wir auf 1,5 zu 1 zu',
            explanation: {
              en: 'Ratio shifted from 6 contributors per retiree in 1962 towards 1.5 to 1 today.',
              fa: 'در سال ۱۹۶۲ به ازای هر بازنشسته ۶ شاغل حق بیمه می‌دادند، اما امروز این نسبت به ۱.۵ شاغل در برابر یک بازنشسته سقوط کرده است.',
              prs: 'از ۶ شاغل برای ۱ متقاعد به ۱.۵ شاغل برای ۱ متقاعد رسیده است.',
              tr: '1962\'de 1 emekliye 6 çalışan düşerken, günümüzde bu oran 1,5\'e 1 düzeyine gerilemektedir.',
              ar: 'تراجع النسبة من 6 مساهمين لكل متقاعد عام 1962 إلى نحو 1.5 مساهم لكل متقاعد حالياً.',
              es: 'De 6 cotizantes por pensionista en 1962 a una proporción de 1,5 a 1 hoy en día.'
            }
          },
          {
            id: 'gc1_h_q23',
            question: '23. Welche Generation geht zwischen 2025 und 2035 massenhaft in den Ruhestand?',
            options: ['Die Generation der Babyboomer', 'Die Generation Z', 'Die Generation Alpha'],
            correctAnswer: 'Die Generation der Babyboomer',
            explanation: {
              en: 'The demographic wave of "Babyboomers" born during high fertility years reaches pension age.',
              fa: 'نسل متولدین سال‌های پرجمعیت موسوم به بی‌بی‌بومرها (Babyboomer).',
              prs: 'نسل بی‌بی‌بومرها (Babyboomers).',
              tr: 'Doğum patlaması kuşağı (Babyboomers).',
              ar: 'جيل طفرة المواليد الكبرى (Babyboomer) يدخل مرحلة التقاعد بين 2025 و 2035.',
              es: 'La generación del baby boom nacida en los años de alta natalidad.'
            }
          },
          {
            id: 'gc1_h_q24',
            question: '24. Was wäre die negative makroökonomische Konsequenz einer reinen Erhöhung der Beitragssätze?',
            options: ['Steigende Lohnnebenkosten verteuern Arbeit und schaden der Wettbewerbsfähigkeit', 'Die Supermärkte müssten schließen', 'Arbeitnehmer würden kein Geld mehr sparen'],
            correctAnswer: 'Steigende Lohnnebenkosten verteuern Arbeit und schaden der Wettbewerbsfähigkeit',
            explanation: {
              en: 'Consequence: Rising ancillary wage costs make labor expensive, hurting international competitiveness.',
              fa: 'افزایش هزینه‌های جانبی دستمزدها باعث گران شدن هزینه تولید و تضعیف قدرت رقابت صنایع آلمان می‌شود.',
              prs: 'بلند رفتن مصارف کارمندان و صدمه دیدن رقابت کمپنی‌ها.',
              tr: 'İşgücü maliyetlerini artırarak sanayinin küresel rekabet gücünü zayıflatır.',
              ar: 'ارتفاع تكاليف العمل الإضافية وإضعاف القدرة التنافسية للصناعة الألمانية.',
              es: 'El encarecimiento de los costes salariales extras debilita la competitividad de la industria.'
            }
          },
          {
            id: 'gc1_h_q25',
            question: '25. Welches soziale Risiko birgt ein einseitiges Absenken des Rentenniveaus?',
            options: ['Ein sprunghafter Anstieg der Altersarmut und Vertrauensverlust', 'Dass Rentner zu reich werden', 'Dass niemand mehr studieren möchte'],
            correctAnswer: 'Ein sprunghafter Anstieg der Altersarmut und Vertrauensverlust',
            explanation: {
              en: 'Risk: Drastic increase in poverty among elderly people and erosion of trust in the welfare state.',
              fa: 'افزایش شدید فقر دوران پیری (Altersarmut) و سلب اعتماد جوانان از دولت رفاه.',
              prs: 'زیاد شدن فقر در دوران پیری و بی‌اعتمادی نسل جوان.',
              tr: 'Yaşlılık yoksulluğunda ani artış ve sosyal devlete olan güvenin sarsılması.',
              ar: 'تفاقم رقعة الفقر بين كبار السن وفقدان الثقة في منظومة دولة الرفاه.',
              es: 'Aumento abrupto de la pobreza en la vejez y pérdida de confianza en el estado social.'
            }
          },
          {
            id: 'gc1_h_q26',
            question: '26. Wie hoch ist der aktuelle jährliche Bundeszuschuss aus Steuermitteln in die Rentenkasse?',
            options: ['Über 110 Milliarden Euro (fast ein Viertel des Bundeshaushalts)', 'Genau 5 Millionen Euro', 'Null Euro, das System trägt sich selbst'],
            correctAnswer: 'Über 110 Milliarden Euro (fast ein Viertel des Bundeshaushalts)',
            explanation: {
              en: 'Federal subsidy: Over 110 billion EUR annually, representing almost 25% of the federal budget.',
              fa: 'بیش از ۱۱۰ میلیارد یورو در سال از محل مالیات‌ها که معادل تقریباً یک‌چهارم کل بودجه کشور است.',
              prs: 'بیش از ۱۱۰ میلیارد یورو در سال که نزدیک به یک چهارم بودجه ملی است.',
              tr: 'Federal bütçenin neredeyse dörtte biri: Yıllık 110 milyar Euro\'nun üzerinde.',
              ar: 'أكثر من 110 مليارات يورو سنوياً من الضرائب تمثل قرابة ربع الموازنة الاتحادية برمتها.',
              es: 'Más de 110.000 millones de euros al año, cerca de una cuarta parte del presupuesto federal.'
            }
          },
          {
            id: 'gc1_h_q27',
            question: '27. Welche Folge hat der massive Bundeszuschuss für andere Politikbereiche?',
            options: ['Er engt den finanziellen Spielraum für Investitionen in Bildung und Infrastruktur ein', 'Er führt dazu, dass Straßen vergoldet werden', 'Es gibt keine Konsequenzen'],
            correctAnswer: 'Er engt den finanziellen Spielraum für Investitionen in Bildung und Infrastruktur ein',
            explanation: {
              en: 'Crowding out: Subsidy constrains funds needed for educational and infrastructural investments.',
              fa: 'بودجه‌های حیاتی سرمایه‌گذاری برای آموزش و پرورش و زیرساخت‌های حمل‌ونقل محدود می‌گردد.',
              prs: 'بودجه پروژه‌های معارف و سرک‌سازی کاهش پیدا می‌کند.',
              tr: 'Eğitim ve altyapı yatırımlarına ayrılacak bütçe payını daraltmaktadır.',
              ar: 'تقليص الهامش المالي المتاح للاستثمار في التعليم والبنية التحتية للمستقبل.',
              es: 'Reduce el margen presupuestario para inversiones en educación e infraestructuras.'
            }
          },
          {
            id: 'gc1_h_q28',
            question: '28. Was schlagen Ökonomen bezüglich des Renteneintrittsalters vor?',
            options: ['Eine Koppelung an die fernere Lebenserwartung (z. B. Rente mit 68 oder 69)', 'Die Rente bereits mit 50 Jahren einzuführen', 'Niemals in Rente zu gehen'],
            correctAnswer: 'Eine Koppelung an die fernere Lebenserwartung (z. B. Rente mit 68 oder 69)',
            explanation: {
              en: 'Economists propose linking retirement age dynamically to longevity (retirement at 68 or 69).',
              fa: 'پیوند زدن سن بازنشستگی با امید به زندگی در سنین پیری (مانند بازنشستگی در سن ۶۸ یا ۶۹ سالگی).',
              prs: 'وصل ساختن سن تقاعد با طول عمر (تقاعد در سن ۶۸ یا ۶۹ سالگی).',
              tr: 'Emeklilik yaşının ortalama yaşam süresine endekslenmesi (68 veya 69 yaş).',
              ar: 'ربط سن التقاعد بمتوسط العمر المتوقع ديناميكياً (التقاعد عند 68 أو 69 عاماً).',
              es: 'Vincular la edad de jubilación a la esperanza de vida restante (jubilación a los 68 o 69 años).'
            }
          },
          {
            id: 'gc1_h_q29',
            question: '29. Was verbirgt sich hinter dem Reformkonzept des "Generationenkapitals"?',
            options: ['Eine teilweise kapitalgedeckte Säule über kreditfinanzierte globale Aktienfonds', 'Die Abschaffung von Geld und Rückkehr zum Tauschhandel', 'Eine Lotterie für alle Bürger'],
            correctAnswer: 'Eine teilweise kapitalgedeckte Säule über kreditfinanzierte globale Aktienfonds',
            explanation: {
              en: 'Generationenkapital: A funded pillar based on sovereign borrowing invested in global equities.',
              fa: 'سرمایه‌گذاری در صندوق‌های جهانی سهام به پشتوانه وام دولتی برای جبران کسری‌ها (Generationenkapital).',
              prs: 'سرمایه‌گذاری پول در بازارهای سهام جهانی برای پوشش مصارف تقاعد.',
              tr: 'Krediye dayalı küresel hisse senedi fonlarıyla oluşturulan sermaye birikimi ayağı.',
              ar: 'رأسمال الأجيال: ركيزة تراكمية تستثمر قروضاً سيادية في أسواق الأسهم العالمية.',
              es: 'Un pilar de capitalización invertido en fondos bursátiles globales para aliviar las cotizaciones.'
            }
          },
          {
            id: 'gc1_h_q30',
            question: '30. Wie bewertet die Wissenschaftsgemeinde die Erfolgschancen des Generationenkapitals?',
            options: ['Ob die Renditen ausreichen, ist unter Ökonomen heftig umstritten', 'Alle sind sich zu 100 Prozent sicher, dass es funktioniert', 'Es wurde bereits als illegal verboten'],
            correctAnswer: 'Ob die Renditen ausreichen, ist unter Ökonomen heftig umstritten',
            explanation: {
              en: 'Conclusion: Economists vigorously dispute whether returns will suffice to close the demographic shortfall.',
              fa: 'کفایت بازدهی این صندوق‌ها در برابر موج پیری جمعیت میان اقتصاددانان به شدت مورد مناقشه است.',
              prs: 'میان کارشناسان اقتصادی درباره موثر بودن آن اختلاف نظر جدی وجود دارد.',
              tr: 'Getirilerin demografik açığı kapatmaya yetip yetmeyeceği iktisatçılar arasında tartışmalıdır.',
              ar: 'جدل محتدم بين علماء الاقتصاد حول ما إذا كانت عوائد الصندوق كافية لسد الفجوة الديموغرافية.',
              es: 'Existe una profunda controversia entre economistas sobre si los rendimientos bastarán.'
            }
          }
        ]
      }
    ]
  },
  schreiben: {
    title: 'Modul Schriftlicher Ausdruck (80 Minuten • Wissenschaftlicher Aufsatz)',
    durationMinutes: 80,
    taskType: 'Textproduktion mit Auswertung von Schaubildern und dialektischer Erörterung (ca. 250 Wörter)',
    situation: 'Im Rahmen eines interdisziplinären Hochschulseminars zum Thema "Globalisierung und Arbeitsmarkt" verfassen Sie eine wissenschaftliche Ausarbeitung zur zunehmenden Deindustrialisierung und Fachkräftemigration in Industrieländern.',
    prompt: `Verfassen Sie einen kohärenten wissenschaftlichen Aufsatz:
1. Einleitung: Relevanz des Themas im Lichte der globalen Transformation.
2. Grafikbeschreibung: Beschreiben Sie die Entwicklung der Fachkräfteabwanderung qualifizierter MINT-Absolventen ins Ausland in den letzten 10 Jahren.
3. Dialektische Erörterung: Wägen Sie die Argumente für und gegen staatliche Bleibeprämien und steuerliche Vergünstigungen für junge Wissenschaftler ab.
4. Fazit & Ausblick: Formulieren Sie eine zukunftsgerichtete Synthese und leiten Sie handlungsleitende Empfehlungen für Politik und Hochschulen ab.`,
    guidingPoints: [
      '1. Problemaufriss und theoriegeleitete Einbettung',
      '2. Präzise Auswertung quantitativer Daten & Trends',
      '3. Tiefgründige Gegenüberstellung von Pro- und Kontra-Argumenten',
      '4. Fundierte eigene Urteilsbildung und zukunftsweisende Synthese'
    ],
    targetWordCount: 'ca. 250-300 Wörter',
    sampleSolution: `Die globale Wettbewerbsfähigkeit hochtechnologisierter Volkswirtschaften korreliert im 21. Jahrhundert untrennbar mit ihrer Fähigkeit, exzellent ausgebildete Spitzenkräfte im Land zu halten und ein innovationsförderndes Ökosystem zu kultivieren. Angesichts stagnierender Produktivitätszuwächse und des demografischen Wandels gewinnt die Debatte um den sogenannten "Braindrain" – die Abwanderung hochqualifizierter MINT-Absolventen in außereuropäische Zentren – eine fundamentale makroökonomische Brisanz.

Die vorliegenden statistischen Daten verdeutlichen einen alarmierenden Trend: Während vor einer Dekade lediglich acht Prozent der Promovierenden in Ingenieur- und Naturwissenschaften eine dauerhafte Emigration anstrebten, hat sich dieser Anteil bis zum Jahr 2024 auf über zwanzig Prozent mehr als verdoppelt. Als primäre Zielregionen kristallisieren sich dabei Nordamerika und Ostasien heraus.

In der wirtschaftspolitischen Diskussion stehen steuerliche Entlastungen und staatliche Bleibeprämien im Fokus. Befürworter argumentieren zu Recht, dass die exorbitant hohen Ausbildungskosten, die der Steuerzahler finanziert, durch die Abwanderung zu einem massiven Wohlstandsverlust führen. Monetäre Anreize könnten mithin die Attraktivität heimischer Forschungszentren im internationalen Gehaltsgefüge spürbar steigern. Demgegenüber mahnen Kritiker an, dass selektive Steuervorteile das Gerechtigkeitsempfinden der Gesamtgesellschaft verletzen und bestehende strukturelle Defizite – wie bürokratische Trägheit an Universitäten und unzureichende Laborausstattungen – keineswegs kompensieren.

Zusammenfassend lässt sich konstatieren, dass rein monetäre Subventionen zu kurz greifen. Eine zukunftsfähige Strategie erfordert vielmehr eine umfassende Modernisierung der universitären Förderlandschaft: Verlässliche Karrierepfade jenseits prekärer Kettenbefristungen, massive Investitionen in zukunftsweisende Forschungsinfrastrukturen sowie der konsequente Abbau administrativer Hemmnisse sind das wirksamste Fundament, um zukunftsprägendes Innovationspotenzial dauerhaft an den Standort zu binden.`,
    scoringCriteria: {
      en: 'In-depth conceptual elaboration (25 pts), sophisticated register & complex syntactic architecture (25 pts), precision of grammatical & orthographic execution (25 pts), seamless argumentative cohesion (25 pts). Max 100 points.',
      fa: 'عمق پرداخت مفهومی و استدلال دانشگاهی (۲۵ نمره)، لحن علمی فاخر و ساختار نحوی پیچیده C1 (۲۵ نمره)، صحت بی‌نقص گرامر و کاربرد واژگان تخصصی (۲۵ نمره)، پیوستگی و انسجام منطقی متن (۲۵ نمره). مجموع ۱۰۰ نمره.',
      prs: '۴ معیار پیشرفته سطح C1 شامل انسجام، استدلال علمی، واژگان تخصصی و گرامر عالی.',
      tr: 'Akademik kavramsallaştırma (25 p), ileri düzey biçem ve karmaşık sözdizimi (25 p), dilbilgisel kusursuzluk (25 p), mantıksal metin tutarlılığı (25 p). Toplam 100 puan.',
      ar: 'عمق المعالجة المفاهيمية (25 نقطة)، المستوى الأسلوبي الأكاديمي والتركيب النحوي المعقد (25 نقطة)، الدقة اللغوية الخالية من الأخطاء (25 نقطة)، التماسك الاستدلالي (25 نقطة). المجموع: 100 نقطة.',
      es: 'Rigor conceptual (25 pts), registro académico y sintaxis compleja (25 pts), corrección gramatical y léxica precisa (25 pts), cohesión argumentativa (25 pts).'
    }
  },
  sprechen: {
    title: 'Modul Mündliche Prüfung (15 Minuten • Paar- oder Einzelprüfung in 2 Teilen)',
    durationMinutes: 15,
    teil1: {
      name: 'Teil 1: Freier Vortrag zu einem anspruchsvollen Thema (ca. 3-4 Minuten pro Person)',
      instruction: {
        en: 'Deliver an articulate, structured academic monologue comparing multiple theses, illuminating historical contexts, and drawing a nuanced personal conclusion. Answer follow-up questions from the examiner.',
        fa: 'ارائه یک سخنرانی دانشگاهی مسلط، بدون متن و ساختاریافته پیرامون موضوعی پیچیده: مقایسه فرضیه‌ها، تبیین پیشینه‌ها و نتیجه‌گیری چندوجهی. پاسخ به سوالات داور.',
        prs: 'سخنرانی علمی و تخصصی در ۳ الی ۴ دقیقه و پاسخ به سوالات.',
        tr: 'Karmaşık bir konuda yapılandırılmış akademik bir monolog sunun ve soruları yanıtlayın.',
        ar: 'إلقاء عرض شفهي أكاديمي متماسك ومحكم البناء حول قضية فكرية معقدة والرد على أسئلة اللجنة.',
        es: 'Monólogo académico estructurado sobre un tema de calado exponiendo tesis y respondiendo cuestiones.'
      },
      prompts: [
        'Thesenbasierte Einleitung und Relevanzbegründung',
        'Gegenüberstellung divergierender wissenschaftlicher Positionen',
        'Konkrete Fallbeispiele oder empirische Befunde',
        'Differenziertes Fazit mit gesellschaftlichem Weitblick'
      ],
      sampleResponse: `Kandidat: "Sehr geehrte Prüfende! In meinem heutigen Vortrag widme ich mich der Frage, inwiefern die zunehmende Privatisierung öffentlicher Daseinsvorsorge – namentlich im Gesundheitswesen und im schienengebundenen Nahverkehr – mit dem sozialstaatlichen Verfassungsauftrag vereinbar ist.
Auf der einen Seite verweisen ökonomische Liberalisierungstheorien darauf, dass privates Kapital und Marktwettbewerb zu gesteigerter Effizienz, technologischer Erneuerung und strafferer Kostenkontrolle führen. Auf der anderen Seite offenbaren empirische Fallstudien der vergangenen zwei Dekaden jedoch gravierende Friktionen: Wo Gewinnerzielungsabsichten das Primat über das Gemeinwohl erlangen, droht die Schließung defizitärer Landkliniken und die Vernachlässigung unrentabler Bahnstrecken.
Mein persönliches Fazit lautet daher: Reine Marktmechanismen versagen bei Kerninfrastrukturen existenzieller Grundbedürfnisse. Der Staat darf sich nicht seiner Gewährleistungsverantwortung entledigen, sondern muss durch strikte regulatorische Mindeststandards dafür Sorge tragen, dass gleichwertige Lebensverhältnisse in allen Landesteilen garantiert bleiben. Ich danke Ihnen für Ihre Aufmerksamkeit und sehe Ihren Fragen mit Interesse entgegen."`
    },
    teil2: {
      name: 'Teil 2: Kontroverse Diskussion mit dem Partner (ca. 5-6 Minuten)',
      instruction: {
        en: 'Engage in an intellectual debate on a socio-political controversy. Challenge premise assumptions, negotiate trade-offs, and attempt to formulate a viable consensus.',
        fa: 'مناظره عمیق و چالش‌برانگیز پیرامون یک موضوع بحث‌برانگیز اجتماعی-سیاسی: به چالش کشیدن پیش‌فرض‌ها، سبک و سنگین کردن گزینه‌ها و تدوین توافقی پایدار.',
        prs: 'مناظره و مباحثه عالی درباره موضوعات بحث‌برانگیز روز.',
        tr: 'Sosyo-politik bir tartışmada karşıt tezleri çürütmeye çalışarak ortak bir uzlaşı arayışına girin.',
        ar: 'خوض مناظرة فكرية حول معضلة مجتمعية أو سياسية مع تفكيك افتراضات الشريك ومحاولة بناء توافق عملي.',
        es: 'Debate intelectual de confrontación sopesando alternativas hasta formular un consenso viable.'
      },
      topicCards: [
        'Thema A: Sollte die Kernenergie als klimaneutrale Brückentechnologie in Europa wiederbelebt werden?',
        'Thema B: Bedingungsloses Grundeinkommen: Utopie sozialer Emanzipation oder Sprengsatz für Leistungsbereitschaft?',
        'Thema C: Grenzen der Meinungsfreiheit im digitalen Raum: Mehr staatliche Zensur oder uneingeschränkte Diskursanarchie?'
      ],
      sampleResponse: `Kandidat A: "Ich vertrete die feste Überzeugung, dass ein bedingungsloses Grundeinkommen den Bürgern die existenzielle Angst vor sozialem Abstieg nimmt und dadurch wahre unternehmerische und künstlerische Innovation freisetzt."
Kandidat B: "Dieser idealistischen Vision muss ich vehement widersprechen. Die makroökonomische Gegenfinanzierung würde gigantische Steuererhöhungen erfordern, die die Leistungsträger über Gebühr belasten. Überdies besteht die nicht von der Hand zu weisende Gefahr, dass ungeliebte, aber für das Gemeinwesen unverzichtbare Tätigkeiten – wie Pflege oder Müllabfuhr – schlichtweg verwaisen würden."
Kandidat A: "Gerade dieser Punkt belegt doch die Stärke des Modells: Wenn solche Berufe bislang unterbezahlt sind, müssten Arbeitgeber endlich angemessene Löhne und bessere Arbeitsbedingungen bieten, um Bewerber zu gewinnen."`
    },
    teil3: {
      name: 'Teil 3: Disputative Rückfragen der Prüfungskommission (ca. 3 Minuten)',
      instruction: {
        en: 'Defend your theses against challenging analytical counter-questions posed by the examination board.',
        fa: 'پاسخ به سوالات چالش‌برانگیز داوران و دفاع مستدل از نظریه خود در برابر نقدهای تحلیلی.',
        prs: 'پاسخ به سوالات داوران و دفاع از نظریه خود.',
        tr: 'Sınav komisyonunun eleştirel sorularına karşı tezinizi savunun.',
        ar: 'الدفاع عن الأطروحة أمام الأسئلة النقدية المعمقة للجنة التحكيم.',
        es: 'Defensa de las tesis expuestas ante las preguntas críticas del tribunal.'
      },
      planningScenario: 'Regulierung vs. Marktfreiheit im Bereich öffentlicher Infrastrukturen',
      discussionPoints: [
        'Finanzielle Tragfähigkeit staatlicher Eingriffe',
        'Gewährleistung von Chancengleichheit in ländlichen Regionen',
        'Innovationsdruck durch privatwirtschaftliche Konkurrenz'
      ],
      sampleResponse: `Prüfer: "Herr Kandidat, Sie fordern staatliche Mindeststandards. Führt das nicht unweigerlich zu bürokratischer Lähmung?"
Kandidat: "Ein berechtigter Einwand, den man keineswegs leichtfertig abtun darf. Allerdings belegen internationale Vergleiche – etwa in Skandinavien –, dass schlanke, digitalisierte Regulierungsbehörden hohe Versorgungsqualität sichern können, ohne unternehmerische Dynamik abzuwürgen."`
    }
  }
};