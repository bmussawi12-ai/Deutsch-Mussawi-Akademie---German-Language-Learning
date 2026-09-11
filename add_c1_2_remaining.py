# -*- coding: utf-8 -*-

with open('src/data/curriculumC1_2.ts', 'r', encoding='utf-8') as f:
    text = f.read()

new_lessons = """  ,
  {
    id: 'c1_2_lek5',
    lektionNumber: 5,
    level: 'C1.2',
    title: 'Literaturtheorie, Ästhetik und Textkritik',
    subTitle: 'Kritische Theorie, Hermeneutik und literarische Essays (C1.2 Niveau)',
    topic: 'Ästhetische Theorie, Adorno und differenzierte Werkinterpretation',
    fotoHoergeschichte: {
      title: 'Foto-Hörgeschichte: Internationales Literaturforum im Literaturhaus Frankfurt',
      imagePrompt: 'A crowded auditorium at the Literaturhaus Frankfurt where literary theorists and authors debate the legacy of the Frankfurt School.',
      imageTheme: 'Literaturtheorie & Frankfurter Schule',
      audioDuration: '03:45',
      transcript: [
        { speaker: 'Prof. Menke', text: 'Kunstwerke sind nach Adorno nicht bloße Abbilder gesellschaftlicher Realität, sondern deren sedimentierte Kritik in ästhetischer Form.' },
        { speaker: 'Dr. von Trotha', text: 'Darin liegt ihr emanzipatorisches Potenzial: Sie verweigern sich der totalen Verwertbarkeit in der Kulturindustrie.' },
        { speaker: 'Prof. Menke', text: 'Entscheidend ist hierbei die Autonomie des Werkes, die sich jeder vordergründigen Zweckrationalität entzieht.' }
      ],
      summary: {
        en: 'Literary theorists in Frankfurt discuss Adorno\'s aesthetic theory and art\'s emancipatory resistance against cultural commodification.',
        fa: 'نظریه‌پردازان ادبی در فرانکفورت پیرامون نظریه زیبایی‌شناسی آدورنو و مقاومت رهایی‌بخش هنر در برابر صنعت فرهنگ به بحث نشسته‌اند.',
        prs: 'تحلیل مسلکی نظریه زیبایی‌شناسی و نقد ادبی در فرانکفورت.',
        tr: 'Edebiyat kuramcıları Frankfurt\\'ta Adorno\\'nun estetik kuramı ve kültür endüstrisi eleştirisini tartışıyor.',
        ar: 'نقاد ونظريون أدبيون في فرانكفورت يناقشون النظرية الجمالية لأدورنو ومقاومة الفن لصناعة الثقافة.',
        es: 'Teóricos de la literatura debaten en Fráncfort sobre la teoría estética de Adorno y la industria cultural.'
      }
    },
    sectionA: {
      title: 'Mussawi A: Sprechen & Ästhetikdiskurs',
      focus: 'Sprechen & Rezensieren (Literarische Werkinterpretation)',
      description: {
        en: 'Deliver an in-depth literary critique using nuanced stylistic devices, allegorical deconstruction, and socio-critical framing.',
        fa: 'ارائه نقد ادبی موشکافانه با به کارگیری آرایه‌های بیانی، ساختارشکنی تمثیلی و چارچوب‌بندی جامعه‌شناختی.',
        prs: 'نقد و بررسی عمیق آثار ادبی به زبان عالی آلمانی.',
        tr: 'Edebi eleştiri, metafor tahlili ve sosyo-kritik bakış açısıyla derinlikli edebi sunumlar yapın.',
        ar: 'تقديم نقد أدبي معمق باستخدام البلاغة المتقدمة والتفكيك المجازي والتأطير الاجتماعي النقدي.',
        es: 'Realiza análisis literarios profundos empleando recursos estilísticos y enfoque sociocrítico.'
      },
      content: 'Die ästhetische Form des Romans spiegelt die Zerrissenheit der modernen Existenz wider.',
      audioText: 'In der formalen Verweigerung einer geschlossenen Narration manifestiert sich der Protest gegen gesellschaftliche Totalitätsansprüche.',
      practiceTasks: [
        'Interpretieren Sie ein Gedicht der Moderne unter Berücksichtigung von Metrik und Chiffren.',
        'Setzen Sie C1-Redemittel ein: "Dies korrespondiert mit...", "Ein signifikantes Spezifikum besteht in...", "Hierin kristallisiert sich...".'
      ]
    },
    sectionB: {
      title: 'Mussawi B: Fachlexik & Hören',
      focus: 'Hören & Literaturkritik (Radioessay: Walter Benjamin)',
      description: {
        en: 'Deconstruct a broadcast essay on Walter Benjamin\'s concept of "Aura" in the age of technological reproducibility.',
        fa: 'شنیدن مقاله رادیویی ادبی درباره مفهوم «هاله تقدس» (Aura) والتر بنیامین در عصر بازتولیدپذیری تکنیکی اثر هنری.',
        prs: 'شنیدن پادکست عمیق درباره فلسفه هنر والتر بنیامین.',
        tr: 'Walter Benjamin\\'in teknik olarak yeniden üretilebilirlik çağında "Aura" kavramı üzerine radyo denemesini dinleyin.',
        ar: 'تحليل مقال إذاعي حول مفهوم "الهالة" عند فالتر بنيامين في عصر الاستنساخ التقني للفن.',
        es: 'Analiza un ensayo radiofónico sobre el concepto de "aura" de Walter Benjamin en la era de la reproductibilidad técnica.'
      },
      content: 'Auszug aus einem Kulturfeature über Kunst und Reproduzierbarkeit.',
      audioTranscript: 'Was im Zeitalter der technischen Reproduzierbarkeit verkümmert, das ist die Aura des Kunstwerks: Seine einmalige Erscheinung einer Ferne, so nah sie sein mag.',
      practiceTasks: [
        'Erläutern Sie Benjamins Definition der Aura mit eigenen Worten.',
        'Lernen Sie Kernbegriffe wie "Entauratisierung", "Chiffre", "Katharsis" und "Polylog".'
      ]
    },
    sectionC: {
      title: 'Mussawi C: Fachdialoge & Debatte',
      focus: 'Mündliche Interaktion (Das Literarische Quartett)',
      description: {
        en: 'Participate in a spirited literary panel judging recent novel releases based on aesthetic coherence and polyphony.',
        fa: 'مشارکت در میزگرد نقد ادبی و داوری رمان‌های معاصر بر پایه انسجام زیبایی‌شناختی و چندصدایی روایی.',
        prs: 'مناظره ادبی درباره قوت و ضعف یک رمان جدید.',
        tr: 'Çağdaş bir romanın edebi değerini ve anlatı tekniğini eleştirel bir panelle tartışın.',
        ar: 'المشاركة في حلقة نقاش أدبي رفيعة لتقييم الروايات المعاصرة وفق معايير الاتساق الجمالي وتعدد الأصوات.',
        es: 'Participa en una tertulia literaria evaluando la coherencia estética y la polifonía de una novela.'
      },
      content: 'Kontroverse Diskussion über einen postmodernen Generationenroman.',
      audioTranscript: 'A: "Der Text erschöpft sich in postmoderner Ironie, ohne je eine existentielle Tiefe zu erreichen." - B: "Gerade diese scheinbare Oberflächlichkeit demaskiert doch meisterhaft die emotionale Leere unserer spätkapitalistischen Gegenwart."',
      practiceTasks: [
        'Verteidigen Sie ein kontroverses Werk gegen den Vorwurf des Kitsch.',
        'Wenden Sie Redemittel an: "Ich erachte diese Lesart für verkürzt", "Dem Text wohnt eine inhärente Spannung inne".'
      ]
    },
    sectionD: {
      title: 'Mussawi D: Hermeneutik & Essayistik',
      focus: 'Lesen & Textanalyse (Theodor W. Adorno: Minima Moralia)',
      description: {
        en: 'Analyze an aphorism from Adorno\'s "Minima Moralia" examining dialectical thought and stylistic precision.',
        fa: 'تحلیل کلمات قصار از کتاب «اخلاق صغیر» آدورنو با بررسی تفکر دیالکتیکی و دقت مینیاتوری سبک‌شناختی.',
        prs: 'خواندن و تحلیل گزیده‌ای از اثر مشهور تئودور آدورنو درباره زندگی در عصر مدرن.',
        tr: 'Adorno\\'nun "Minima Moralia" eserinden bir aforizmayı diyalektik düşünce ve üslup inceliği açısından inceleyin.',
        ar: 'تحليل مقطوعة تأملية من كتاب "الأخلاق الدنيا" لأدورنو وتفكيك الفكر الجدلي والبراعة الأسلوبية.',
        es: 'Analiza un aforismo de "Minima Moralia" de Adorno examinando el pensamiento dialéctico y la finura estilística.'
      },
      readingText: {
        type: 'Philosophischer Aphorismus (Klassiker der Frankfurter Schule)',
        title: 'Asyl für Obdachlose (Minima Moralia, § 18)',
        body: 'Wie es um die Privatwohnung heute bestellt ist, zeigt sich darin, dass es sie eigentlich gar nicht mehr gibt. Das Wohnen im eigentlichen Sinne wird unmöglich: Die traditionellen Wohnungen, in denen wir aufwuchsen, sind unbewohnbar geworden; jede Spur des Geborgenseins wird mit dem Verrat der Geborgenheit bezahlt. Es gibt kein richtiges Leben im falschen.'
      },
      practiceTasks: [
        'Erläutern Sie den berühmten Satz: "Es gibt kein richtiges Leben im falschen."',
        'Analysieren Sie die dialektische Negation im Denkansatz Adornos.'
      ]
    },
    sectionE: {
      title: 'Mussawi E: Grammatik & Stilistische Raffinesse',
      focus: 'Grammatik (Subjunktivische Konzessivsätze mit "wie ... auch immer" und Konzessivangaben)',
      description: {
        en: 'Master indefinite concessive clauses ("Wie komplex der Text auch immer sein mag...") and stylistic ellipses.',
        fa: 'تسلط بر جملات پیرو تقابلی با ضمیر نامعین (Wie ... auch immer / چقدر هم که ...) و حذف به قرینه در نثر ادبی.',
        prs: 'یادگیری ساختار گرامری wie auch immer برای بیان تضاد در زبان ادبی.',
        tr: '"Wie ... auch immer" yapısındaki belirsiz karşıtlık cümlelerinde ve edebi eksiltili anlatımlarda ustalaşın.',
        ar: 'إتقان الجمل الاستدراكية المقترنة بأدوات التعميم (Wie ... auch immer / مهما يكن من أمر) والإيجاز البلاغي.',
        es: 'Domina las oraciones concesivas con "wie ... auch immer" ("por muy complejo que sea...") y la elipsis estilística.'
      },
      grammarRule: {
        title: 'Verallgemeinernde Konzessivsätze (wie / was / wer ... auch immer)',
        rule: 'Verallgemeinernde Konzessivsätze drücken aus, dass ein Umstand in jeglicher Ausprägung die Hauptsatzhandlung nicht berührt:\\n"Wie umstritten die Thesen auch sein mögen, sie regen zum Nachdenken an."\\n"Was immer die Kritik einwenden mag, das Werk bleibt ein Meilenstein."',
        examples: [
          'Wie hermetisch die Metaphern auch anmuten mögen, sie entfalten eine suggestive Kraft.',
          'Welche formalen Mängel man dem Roman auch attestieren mag, seine zeitdiagnostische Schärfe ist unbestritten.',
          'Wohin die literarische Entwicklung auch führen mag, die menschliche Sehnsucht nach Narration bleibt unvergänglich.'
        ],
        explanation: 'Diese Konstruktion verleiht literaturkritischen und essayistischen Texten auf C1/C2-Niveau souveräne Eleganz.'
      },
      practiceTasks: [
        'Formulieren Sie essayistische Einschätzungen mit "wie ... auch immer + Konjunktiv I".',
        'Vermeiden Sie Redundanzen durch prägnante Ellipsen.'
      ]
    },
    vocabularies: [
      { id: 'c1_2_v4', word: 'die Katharsis', article: 'die', plural: '-', ipa: '/kaˈtaʁzɪs/', translation: { en: 'catharsis', fa: 'کاتارسیس / تزکیه و پالایش روانی', prs: 'پالایش روانی مخاطب از طریق هنر', tr: 'katarsis / arınma', ar: 'التطهير النفسي / الكاثارسيس', es: 'catarsis' } },
      { id: 'c1_2_v5', word: 'die Hermeneutik', article: 'die', plural: '-', ipa: '/hɛʁmeˈnɔɪ̯tɪk/', translation: { en: 'hermeneutics', fa: 'هرمنوتیک / نظریه تأویل و تفسیر متن', prs: 'علم تاویل و فهم متن', tr: 'hermeneutik / yorumbilim', ar: 'الهرمينوطيقا / علم التأويل', es: 'hermenéutica' } },
      { id: 'c1_2_v6', word: 'sedimentieren', article: '', plural: '-', ipa: '/zedimɛnˈtiːʁən/', translation: { en: 'to sediment / deposit historically', fa: 'ته‌نشین شدن و رسوب کردن تاریخی در فرم', prs: 'انباشته شدن در طول زمان', tr: 'tortulaşmak / çökelmek', ar: 'يترسب / يستقر تاريخيًا في البنية', es: 'sedimentar' } }
    ],
    exercises: [
      {
        id: 'ex_c1_2_5_a',
        type: 'multiple_choice',
        instruction: {
          en: 'Identify the correct indefinite concessive construction with "wie ... auch".',
          fa: 'ساختار صحیح پیرو تقابلی با "wie ... auch" را انتخاب کنید.',
          prs: 'ساختار درست ادبی wie ... auch را برگزینید.',
          tr: '"wie ... auch" ile kurulan doğru karşıtlık yapısını seçiniz.',
          ar: 'اختر التركيب الاستدراكي الصحيح باستخدام "wie ... auch".',
          es: 'Identifica la construcción concesiva correcta con "wie ... auch".'
        },
        prompt: 'Welcher Satz drückt eine verallgemeinernde Einschränkung stilistisch makellos aus?',
        options: [
          'Wie provokant die Thesen des Autors auch sein mögen, sie treffen den Nerv der Zeit.',
          'Wie provokant die Thesen des Autors auch sind aber, treffen sie Zeit.',
          'Wie auch die Thesen des Autors provokant, sie mögen treffen Zeit.',
          'Provokant wie immer die Thesen des Autors sind sie treffen.'
        ],
        correctAnswer: 'Wie provokant die Thesen des Autors auch sein mögen, sie treffen den Nerv der Zeit.',
        explanation: {
          en: 'Construction: "Wie" + adjective ("provokant") + subject ("die Thesen...") + "auch" + subjunctive verb ("sein mögen"), followed by V2 in the main clause.',
          fa: 'فرمول: Wie + صفت (provokant) + فاعل + auch + فعل کمکی التزامی (sein mögen)، و سپس فعل در جایگاه دوم در جمله اصلی.',
          prs: 'طرز ساختار: wie همراه با صفت و کلمه auch و فعل موجه در انتهای جمله پیرو.',
          tr: 'Diziliş: "Wie" + sıfat + özne + "auch" + "sein mögen" + ana cümlede fiil 2. sırada.',
          ar: 'الصياغة: "Wie" + الصفة + الفاعل + "auch" + صيغة الاحتمال "sein mögen"، ثم الفعل في الموقع الثاني بالجملة الرئيسية.',
          es: 'Fórmula: "Wie" + adjetivo + sujeto + "auch" + "sein mögen", seguido de verbo en V2 en la oración principal.'
        }
      },
      {
        id: 'ex_c1_2_5_b',
        type: 'fill_blank',
        instruction: {
          en: 'Insert the appropriate literary noun meaning polyphony of voices.',
          fa: 'اسم فاخر نقد ادبی به معنای «چندصدایی روایی در متن» را قرار دهید.',
          prs: 'اصطلاح نقد ادبی چندصدایی را بنویسید.',
          tr: 'Edebi metinde çokseslilik bildiren terimi yerleştirin.',
          ar: 'ضع المصطلح الأدبي الدال على تعدد الأصوات البوليفونية في الرواية.',
          es: 'Inserta el término literario que designa la multiplicidad de voces.'
        },
        prompt: 'Die bemerkenswerte narrative _______ des Romans lässt den Lesenden Raum für disparate Interpretationen.',
        options: [
          'Polyphonie',
          'Monotonie',
          'Stagnation',
          'Trivialität'
        ],
        correctAnswer: 'Polyphonie',
        explanation: {
          en: '"Polyphonie" (polyphony / multiplicity of independent narrative voices, following Mikhail Bakhtin) is a central concept in advanced literary critique.',
          fa: '"Polyphonie" (چندصدایی روایی در نظریه باختین) به معنای همزیستی صداها و دیدگاه‌های مستقل و گوناگون در رمان است.',
          prs: 'واژه Polyphonie به معنای حضور صداهای گوناگون و استقلال شخصیت‌ها در اثر ادبی است.',
          tr: '"Polyphonie", romanda bağımsız seslerin bir arada bulunmasını ifade eden Bakhtin kaynaklı terimdir.',
          ar: 'المصطلح "Polyphonie" (البوليفونية / تعدد الأصوات) يعني استقلال أصوات الشخصيات في الرواية دون وصاية من الراوي.',
          es: '"Polifonía" designa la concurrencia de múltiples voces y perspectivas autónomas en el texto.'
        }
      },
      {
        id: 'ex_c1_2_5_c',
        type: 'sentence_reorder',
        instruction: {
          en: 'Order the literary critical sentence.',
          fa: 'جمله نقد ادبی را به ترتیب درست و سلیس مرتب کنید.',
          prs: 'جمله نقد ادبی را با ساختار درست بنویسید.',
          tr: 'Edebi eleştiri cümlesini kurallı şekilde düzenleyin.',
          ar: 'رتب جملة النقد الأدبي ترتيبًا تركيبيًا محكمًا.',
          es: 'Ordena la oración de crítica literaria.'
        },
        prompt: 'Bringen Sie die Satzglieder in die korrekte Reihenfolge:',
        options: [
          'Große Literatur demaskiert',
          'die scheinbare Selbstverständlichkeit',
          'gesellschaftlicher Missstände',
          'durch ästhetische Verfremdung.'
        ],
        correctAnswer: [
          'Große Literatur demaskiert',
          'die scheinbare Selbstverständlichkeit',
          'gesellschaftlicher Missstände',
          'durch ästhetische Verfremdung.'
        ],
        explanation: {
          en: 'Subject ("Große Literatur"), verb ("demaskiert"), direct object with genitive attribute, and instrumental modal phrase ("durch ästhetische Verfremdung").',
          fa: 'فاعل، فعل متعدی، مفعول به همراه مضاف‌الیه، و متمم ابزاری durch.',
          prs: 'ترتیب درست اجزای جمله نقد ادبی.',
          tr: 'Özne, fiil, nesne tamlaması ve "durch" ile araç bildiren öge.',
          ar: 'الفاعل، الفعل، المفعول به مع المضاف إليه، والوسيلة المسبوقة بـ "durch".',
          es: 'Sujeto, verbo ("demaskiert"), objeto directo con genitivo y complemento instrumental.'
        }
      }
    ]
  }"""

idx = text.rfind('];')
if idx != -1:
    text = text[:idx] + new_lessons + '\n];\n'

with open('src/data/curriculumC1_2.ts', 'w', encoding='utf-8') as f:
    f.write(text)

print("Added Lektion 5 to curriculumC1_2.ts successfully!")
