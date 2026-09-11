# -*- coding: utf-8 -*-

with open('src/data/curriculumC1_2.ts', 'r', encoding='utf-8') as f:
    text = f.read()

new_lessons = """  ,
  {
    id: 'c1_2_lek4',
    lektionNumber: 4,
    level: 'C1.2',
    title: 'Staatsrecht, Verfassungsgerichtsbarkeit und Föderalismus',
    subTitle: 'Normenkontrolle, Grundrechte und föderale Kompetenzverteilung (C1.2 Niveau)',
    topic: 'Verfassungsrecht, Gewaltenteilung und verfassungsrechtliche Gutachten',
    fotoHoergeschichte: {
      title: 'Foto-Hörgeschichte: Urteilsverkündung am Bundesverfassungsgericht in Karlsruhe',
      imagePrompt: 'The red-robed judges of the German Federal Constitutional Court in Karlsruhe delivering a landmark ruling on climate protection legislation.',
      imageTheme: 'Bundesverfassungsgericht Karlsruhe',
      audioDuration: '03:40',
      transcript: [
        { speaker: 'Präsident des Senats', text: 'Im Namen des Volkes: Die angegriffenen Bestimmungen des Gesetzes sind mit den Grundrechten der Beschwerdeführenden insoweit unvereinbar, als hinreichende Vorkehrungen zur Wahrung künftiger Freiheitschancen fehlen.' },
        { speaker: 'Berichterstatterin', text: 'Der Gesetzgeber ist verpflichtet, die Reduktionsziele der Treibhausgasemissionen für die Zeiträume nach 2030 verfassungskonform nachzubessern.' },
        { speaker: 'Präsident des Senats', text: 'Damit wird der intertemporale Freiheitsschutz als elementare Dimension des Grundgesetzes richterlich manifestiert.' }
      ],
      summary: {
        en: 'The Federal Constitutional Court in Karlsruhe pronounces an intertemporal freedom judgment binding future legislative parliaments.',
        fa: 'دادگاه قانون اساسی فدرال آلمان در کارلسروهه حکمی تاریخی پیرامون حفاظت میان‌نسلی از آزادی‌ها و لزوم اصلاح قوانین صادر کرد.',
        prs: 'فیصله تاریخی محکمه قانون اساسی فدرال آلمان در مورد حفظ حقوق نسل‌های آینده.',
        tr: 'Karlsruhe\'deki Federal Anayasa Mahkemesi, gelecek nesillerin özgürlüklerini güvence altına alan tarihi bir karar açıkladı.',
        ar: 'المحكمة الدستورية الاتحادية في كارلسروه تصدر حكمًا تاريخيًا يلزم المشرع بحماية حريات الأجيال القادمة.',
        es: 'El Tribunal Constitucional Federal en Karlsruhe dicta una sentencia histórica sobre la protección intertemporal de la libertad.'
      }
    },
    sectionA: {
      title: 'Mussawi A: Sprechen & Verfassungsdiskurs',
      focus: 'Sprechen & Erörtern (Grundrechte & Verhältnismäßigkeit)',
      description: {
        en: 'Deliver an oral constitutional analysis applying the three-tier proportionality test (Geeignetheit, Erforderlichkeit, Angemessenheit).',
        fa: 'تحلیل شفاهی حقوقی با کاربست آزمون سه‌مرحله‌ای تناسب (مناسب بودن، ضرورت و تناسب در معنای مضیق).',
        prs: 'تحلیل مسلکی حقوق اساسی و سنجش قانونی بودن اقدامات دولتی.',
        tr: 'Üç aşamalı orantılılık testini (elverişlilik, gereklilik, ölçülülük) anayasal tartışmalarda uygulayın.',
        ar: 'تقديم تحليل دستوري شفهي يطبق اختبار التناسب الثلاثي (الملاءمة، الضرورة، التناسب بالمعنى الضيق).',
        es: 'Aplica el principio de proporcionalidad en tres etapas en el análisis constitucional.'
      },
      content: 'Ein Eingriff in den Schutzbereich eines Freiheitsgrundrechts ist nur dann verfassungsrechtlich gerechtfertigt, wenn er dem Verhältnismäßigkeitsgrundsatz genügt.',
      audioText: 'Es bedarf einer strikten Abwägung zwischen dem legitimen staatlichen Schutzziel und der Schwere des grundrechtlichen Eingriffs.',
      practiceTasks: [
        'Prüfen Sie eine fiktive staatliche Maßnahme anhand der Prüfungsstufen der Verhältnismäßigkeit.',
        'Verwenden Sie staatsrechtliche Begriffe: "Schutzbereich", "verfassungsunmittelbare Schranke", "Wesensgehaltgarantie".'
      ]
    },
    sectionB: {
      title: 'Mussawi B: Fachwortschatz & Hören',
      focus: 'Hören & Fachterminologie (Juristische Vorlesung: Föderale Ordnung)',
      description: {
        en: 'Analyze academic jurisprudence lectures examining the tension between national uniform living standards and federal state autonomy.',
        fa: 'شنیدن سخنرانی دانشگاهی حقوق عمومی پیرامون تعارض میان وحدت شرایط زندگی در سراسر کشور و استقلال ایالت‌ها در نظام فدرال.',
        prs: 'شنیدن درس حقوق پیرامون صلاحیت‌های دولت مرکزی و ایالت‌های فدرال.',
        tr: 'Federalizm, eyalet özerkliği ve yaşam standartlarının eşitliği üzerine hukuk dersini dinleyin.',
        ar: 'تحليل محاضرات الفقه الدستوري حول العلاقة بين المعايير الموحدة واستقلالية الولايات الفيدرالية.',
        es: 'Comprende lecciones magistrales de derecho sobre federalismo y autonomía regional.'
      },
      content: 'Vorlesungsauszug: Die Gesetzgebungskompetenzen des Bundes und der Länder nach Art. 70 ff. GG.',
      audioTranscript: 'Das Grundgesetz konstituiert eine prinzipielle Regelvermutung zugunsten der Länderkompetenz, es sei denn, das Grundgesetz weist dem Bund ausdrücklich ausschließliche oder konkurrierende Gesetzgebungsbefugnisse zu.',
      practiceTasks: [
        'Skizzieren Sie die Kompetenzverteilung zwischen Bund und Bundesrat.',
        'Lernen Sie Termini wie "ausschließliche Gesetzgebung", "konkurrierende Zuständigkeit" und "Föderalismusreform".'
      ]
    },
    sectionC: {
      title: 'Mussawi C: Fachdialoge & Gutachtenstil',
      focus: 'Mündliche Interaktion (Kolloquium zum Verfassungsrecht)',
      description: {
        en: 'Engage in formal legal argumentation using the German "Gutachtenstil" (Obersatz, Definition, Subsumtion, Ergebnis).',
        fa: 'مباحثه حقوقی رسمی بر اساس اسلوب ساختاریافته تحلیل نظری حقوقی آلمان (Gutachtenstil).',
        prs: 'استدلال به سبک رسمی حقوقی آلمان برای تحلیل دوسیه‌ها.',
        tr: 'Alman hukuk metodolojisi olan "Gutachtenstil" (varsayım, tanım, olayla eşleştirme, sonuç) ile argüman geliştirin.',
        ar: 'المناقشة القانونية الرصينة بأسلوب الفتوى القانونية الألمانية (Gutachtenstil).',
        es: 'Argumenta en estilo pericial jurídico alemán (hipótesis, definición, subsunción y conclusión).'
      },
      content: 'Disputation zwischen wissenschaftlichen Mitarbeitern am Verfassungsgericht.',
      audioTranscript: 'A: "Fraglich ist, ob die Regelung einen unverhältnismäßigen Eingriff in die Berufsfreiheit darstellt." - B: "Als milderes, gleich wirksames Mittel hätte der Gesetzgeber eine bloße Anzeigepflicht statuieren können, weshalb die Maßnahme nicht erforderlich war."',
      practiceTasks: [
        'Formulieren Sie rechtliche Prüfungen im Konjunktiv II ("Fraglich ist, ob...", "Dies wäre der Fall, wenn...").',
        'Ziehen Sie präzise Subsumtionsschlüsse.'
      ]
    },
    sectionD: {
      title: 'Mussawi D: Textanalyse & Verfassungsurteil',
      focus: 'Lesen & Hermeneutik (BVerfG-Beschluss zum Klimaschutz)',
      description: {
        en: 'Deconstruct a dense judicial ruling by the German Constitutional Court analyzing its linguistic register and deductive logic.',
        fa: 'تحلیل رأی دادگاه قانون اساسی با لحن فاخر قضایی و منطق قیاسی استنتاجی در حقوق آلمان.',
        prs: 'خواندن و درک متن حکم رسمی محکمه عالی فدرال آلمان.',
        tr: 'Federal Anayasa Mahkemesi gerekçeli kararının dili ve mantıksal kurgusunu tahlil edin.',
        ar: 'تفكيك حكم قضائي للمحكمة الدستورية الاتحادية وتحليل أسلوبه اللغوي ومنطقه الاستنباطي.',
        es: 'Analiza una sentencia del Tribunal Constitucional alemán examinando su lógica deductiva.'
      },
      readingText: {
        type: 'Gerichtsentscheidung (Auszug)',
        title: 'Leitsatz zum Beschluss des Ersten Senats vom 24. März 2021',
        body: 'Die Grundrechte sind vor dem Hintergrund des Art. 20a GG auch als intertemporale Freiheitssicherung zu verstehen. Der Gesetzgeber darf nicht die eine Generation dazu ermächtigen, unter vergleichsweise milder Reduktionslast große Teile des CO2-Budgets aufzuzehren, wenn damit zugleich den nachfolgenden Generationen eine radikale Reduktionslast überantwortet und deren Leben umfassenden Freiheitseinbußen ausgesetzt würde.'
      },
      practiceTasks: [
        'Analysieren Sie den Aufbau des Leitsatzes.',
        'Erklären Sie die juristische Bedeutung des Terminus "intertemporale Freiheitssicherung".'
      ]
    },
    sectionE: {
      title: 'Mussawi E: Grammatik & Syntaktische Finessen',
      focus: 'Grammatik (Konzessive und adversative Satzgefüge mit "wohingegen", "während", "wiewohl")',
      description: {
        en: 'Master sophisticated contrastive and concessive connectors in high-level legal prose.',
        fa: 'تسلط بر حروف ربط تقابلی و تمایزی فاخر (wohingegen, wiewohl, während) در متون تخصصی حقوقی.',
        prs: 'فراگیری حروف ربط تخصصی برای نشان دادن تفاوت‌های حقوقی در جملات مرکب.',
        tr: 'Hukuki metinlerde karşıtlık ve mukayese bildiren üst düzey bağlaçlarda ("wohingegen", "wiewohl") ustalaşın.',
        ar: 'إتقان الروابط التقابلية والاستدراكية الأكاديمية الرفيعة في النصوص القانونية.',
        es: 'Domina los conectores contrastivos y concesivos de registro formal.'
      },
      grammarRule: {
        title: 'Adversative Konnektoren in juristischer Argumentation (wohingegen, während, indessen)',
        rule: 'Zur präzisen Gegenüberstellung von Rechtsnormen und Rechtsfolgen dienen adversative Subjunktionen:\\n1. "wohingegen" / "während" (+ Nebensatz): drückt einen reinen sachlichen Gegensatz aus.\\n2. "indessen" / "demgegenüber" (+ Inversion): verbindet zwei Hauptsätze stilistisch anspruchsvoll.',
        examples: [
          'Der Bund besitzt die ausschließliche Kompetenz für das Währungsrecht, wohingegen das Schulwesen im Zuständigkeitsbereich der Länder verbleibt.',
          'Der Eingriff ist zwar geeignet, erweist sich indessen als nicht erforderlich.',
          'Wiewohl verfassungsrechtliche Bedenken laut wurden, votierte die Mehrheit für die Vorlage.'
        ],
        explanation: 'Diese Konnektoren verhindern monotone Satzstrukturen und sind unerlässlich für juristische Gutachten auf C1/C2-Niveau.'
      },
      practiceTasks: [
        'Formulieren Sie juristische Vergleiche mit "wohingegen".',
        'Nutzen Sie "indessen" als Satzadverb zur Akzentuierung von Einschränkungen.'
      ]
    },
    vocabularies: [
      { id: 'c1_2_v1', word: 'die Verhältnismäßigkeit', article: 'die', plural: '-', ipa: '/fɛɐ̯ˈhɛltnɪsˌmɛːsɪçkaɪ̯t/', translation: { en: 'proportionality', fa: 'اصل تناسب در حقوق اساسی', prs: 'اصل تناسب قانونی در حقوق', tr: 'orantılılık ilkesi', ar: 'مبدأ التناسب الدستوري', es: 'proporcionalidad' } },
      { id: 'c1_2_v2', word: 'der Wesensgehalt', article: 'der', plural: '-', ipa: '/ˈveːzn̩sɡəˌhalt/', translation: { en: 'essential core / substance of a right', fa: 'ماهیت بنیادین و لایتغیر حق اساسی', prs: 'هسته اصلی و جوهر حقوق شهروندی', tr: 'öz / hakkın özü', ar: 'جوهر الحق الدستوري', es: 'contenido esencial de un derecho' } },
      { id: 'c1_2_v3', word: 'statuieren', article: '', plural: '-', ipa: '/ʃtatuˈiːʁən/', translation: { en: 'to stipulate / establish by law', fa: 'وضع کردن / مقرر داشتن قانونی', prs: 'مقرر داشتن در قانون', tr: 'hükme bağlamak / tesis etmek', ar: 'يقرر / ينص قانونًا', es: 'estatuir / consagrar normativamente' } }
    ],
    exercises: [
      {
        id: 'ex_c1_2_4_a',
        type: 'multiple_choice',
        instruction: {
          en: 'Choose the appropriate connector denoting a stark contrast between two legal spheres.',
          fa: 'حرف ربط تقابلی بیانگر تمایز میان دو حوزه حقوقی را انتخاب کنید.',
          prs: 'حرف ربط تضاد منطقی را برگزینید.',
          tr: 'İki hukuki alan arasındaki tezatlığı bildiren doğru bağlacı seçin.',
          ar: 'اختر الرابط الدال على التباين الموضوعي بين مجالين قانونيين.',
          es: 'Selecciona el conector que expresa contraste neto entre dos ámbitos jurídicos.'
        },
        prompt: 'Das Strafrecht dient dem Rechtsgüterschutz, _______ das Zivilrecht den Ausgleich privater Interessen bezweckt.',
        options: [
          'wohingegen',
          'infolge',
          'mithin',
          'trotzdem'
        ],
        correctAnswer: 'wohingegen',
        explanation: {
          en: '"wohingegen" (whereas / while on the contrary) introduces a subordinating clause contrasting two complementary legal facts.',
          fa: '"wohingegen" (در حالی که برعکس) جمله پیرو تقابلی برای بیان تمایز صریح میان دو حیطه حقوقی است.',
          prs: 'کلمه wohingegen برای مقایسه دو حقیقت متفاوت در قانون به کار می‌رود.',
          tr: '"wohingegen", iki zıt hukuki durumu mukayese etmek için yan cümle başlatan bağlaçtır.',
          ar: 'الرابط "wohingegen" (في حين أن / بينما) يربط بين حقيقتين متعارضتين في جملة فرعية.',
          es: '"wohingegen" (mientras que / por el contrario) introduce una subordinada contrastiva formal.'
        }
      },
      {
        id: 'ex_c1_2_4_b',
        type: 'fill_blank',
        instruction: {
          en: 'Insert the required prepositional case governing verb.',
          fa: 'فعل حقوقی با متمم Dativ به معنای «کفایت کردن / پاسخگو بودن به اصل» را قرار دهید.',
          prs: 'فعل مناسب را در جای خالی بنویسید.',
          tr: 'Uygun hukuki fiili yerleştiriniz.',
          ar: 'ضع الفعل القانوني المناسب المتعدي إلى الـ Dativ.',
          es: 'Inserta el verbo jurídico adecuado que rige dativo.'
        },
        prompt: 'Die strittige behördliche Anordnung genügt in keiner Weise dem Grundsatz der _______ (genügen + Dativ).',
        options: [
          'Verhältnismäßigkeit',
          'Verhältnismäßigkeiten',
          'verhältnismäßig',
          'Verhältnismäßigen'
        ],
        correctAnswer: 'Verhältnismäßigkeit',
        explanation: {
          en: 'The verb "genügen + Dativ" requires "dem Grundsatz der Verhältnismäßigkeit" (feminine singular genitive modifier).',
          fa: 'فعل "genügen + Dativ" نیازمند مفعول داتیو است و ترکیب "der Verhältnismäßigkeit" مضاف‌الیه ملکی زنانه است.',
          prs: 'ترکیب درست: dem Grundsatz der Verhältnismäßigkeit.',
          tr: '"genügen + Dativ" yapısı "dem Grundsatz" ile kullanılır, sonrasındaki isim Genitiv tamlama halindedir.',
          ar: 'الفعل "genügen" يتعدى إلى الـ Dativ: "dem Grundsatz der Verhältnismäßigkeit".',
          es: 'El verbo "genügen" rige dativo y se complementa con el genitivo femenino "der Verhältnismäßigkeit".'
        }
      },
      {
        id: 'ex_c1_2_4_c',
        type: 'sentence_reorder',
        instruction: {
          en: 'Reorder the legal sentence detailing constitutional review.',
          fa: 'جمله حقوقی پیرامون بازرسی قضایی قانون اساسی را مرتب کنید.',
          prs: 'جمله را به شکل درست نحوی ترتیب دهید.',
          tr: 'Anayasal denetime dair cümleyi kurallı sıralayın.',
          ar: 'رتب الجملة القانونية الخاصة بالرقابة الدستورية.',
          es: 'Ordena la oración jurídica sobre el control de constitucionalidad.'
        },
        prompt: 'Bringen Sie die Satzglieder in die korrekte Reihenfolge:',
        options: [
          'Das Bundesverfassungsgericht wacht',
          'über die strikte Einhaltung',
          'der verfassungsmäßigen Ordnung',
          'durch alle Staatsgewalten.'
        ],
        correctAnswer: [
          'Das Bundesverfassungsgericht wacht',
          'über die strikte Einhaltung',
          'der verfassungsmäßigen Ordnung',
          'durch alle Staatsgewalten.'
        ],
        explanation: {
          en: 'Subject ("Das Bundesverfassungsgericht"), verb with fixed preposition ("wacht über + Akk"), genitive attribute, and agent phrase ("durch alle Staatsgewalten").',
          fa: 'فاعل، فعل با حرف اضافه ثابت (wachen über)، مضاف‌الیه ملکی و متمم عامل durch.',
          prs: 'ترتیب دقیق اجزای جمله حقوقی.',
          tr: 'Özne, "wachen über" fiil öbeği, isim tamlaması ve "durch" ile etken öge.',
          ar: 'الفاعل، الفعل المقترن بحرف الجر الثابت (wachen über)، المضاف إليه، ومتمم الفاعل.',
          es: 'Sujeto, verbo con régimen preposicional ("wachen über"), genitivo y complemento agente.'
        }
      }
    ]
  }"""

idx = text.rfind('];')
if idx != -1:
    text = text[:idx] + new_lessons + '\n];\n'

with open('src/data/curriculumC1_2.ts', 'w', encoding='utf-8') as f:
    f.write(text)

print("Added Lektion 4 and exercises to curriculumC1_2.ts!")
