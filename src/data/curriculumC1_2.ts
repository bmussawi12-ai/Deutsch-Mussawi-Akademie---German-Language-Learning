import { Lesson } from '../types';

export const CURRICULUM_C1_2: Lesson[] = [
  {
    id: 'c1_2_lek8',
    lektionNumber: 8,
    level: 'C1.2',
    title: 'Akademischer Diskurs und Wissenschaftssprache',
    subTitle: 'Wissenschaftliches Schreiben, Forschungsmethoden und erweiterte Partizipialattribute',
    topic: 'Forschungskolloquium, Methodologie, Peer-Review und Partizip I/II mit Attributen',
    fotoHoergeschichte: {
      title: 'Foto-Hörgeschichte: Das interdisziplinäre Forschungskolloquium an der LMU',
      imagePrompt: 'A historic lecture hall at Ludwig Maximilian University in Munich with professors and doctoral candidates reviewing scientific graphs and debating empirical results.',
      imageTheme: 'LMU München Kolloquium',
      audioDuration: '03:10',
      transcript: [
        { speaker: 'Prof. Dr. von Weizsäcker', text: 'Meine Damen und Herren, wir eröffnen die heutige Disputation mit der von Frau Dr. Nematullah eingereichten Monografie.' },
        { speaker: 'Dr. Nematullah', text: 'Herzlichen Dank! Die den empirischen Erhebungen zugrunde liegenden Daten weisen signifikante Korrelationen auf.' },
        { speaker: 'Prof. Lindemann', text: 'Gestatten Sie einen methodischen Einwand bezüglich der von Ihnen angewendeten statistischen Signifikanztests?' },
        { speaker: 'Dr. Nematullah', text: 'Selbstverständlich. Sämtliche in Betracht gezogenen Störvariablen wurden durch multivariate Kontrollgruppenverfahren neutralisiert.' },
        { speaker: 'Prof. Dr. von Weizsäcker', text: 'Diese methodisch lückenlos untermauerte Argumentation überzeugt uns in vollem Umfang.' }
      ],
      summary: {
        en: 'Doctoral candidate Dr. Nematullah defends her scientific dissertation at LMU Munich using sophisticated academic language and expanded participial attributes.',
        fa: 'دکتر نعمت‌الله پایان‌نامه دکترای خود را در دانشگاه لودویگ ماکسیمیلیان مونیخ با زبانی فاخر، دانشگاهی و ساختارهای پیشرفته صفتی دفاع می‌کند.',
        prs: 'دوکتور نعمت‌الله از تیزس علمی دوکتورای خود در پوهنتون مونیخ با استفاده از اصطلاحات بلند رتبه علمی، صفات مفعولی پیوسته و استدلال اکادمیک دفاع می‌نماید.',
        tr: 'Dr. Nematullah, Münih LMU Üniversitesi\'nde doktora tezini yüksek akademik üslup ve genişletilmiş sıfat tamlamalarıyla savunur.',
        ar: 'تدافع الدكتورة نعمت الله عن أطروحتها العلمية في جامعة ميونيخ مستخدمة لغة أكاديمية رصينة.',
        es: 'La Dra. Nematullah defiende su tesis doctoral en la Universidad LMU de Múnich empleando registro académico avanzado.'
      }
    },
    sectionA: {
      title: 'Mussawi A: Sprechen & Dialog',
      focus: 'Sprechen & Hören (Akademische Disputation & Fachdiskussion)',
      description: {
        en: 'Engage in academic disputes, question scientific methodologies diplomatically, and defend empirical findings.',
        fa: 'مشارکت در مناظرات دانشگاهی، نقد دیپلماتیک روش تحقیق و دفاع از یافته‌های تجربی.',
        prs: 'اشتراک در مباحثات علمی پوهنتونی، ارزیابی روش تحقیق و دفاع از نتایج تجربی.',
        tr: 'Akademik tartışmalara katılma, yöntem eleştirisi yapma ve bilimsel bulguları savunma.',
        ar: 'المشاركة في المناظرات الأكاديمية ونقد مناهج البحث بأسلوب علمي رصين.',
        es: 'Participación en debates académicos, crítica metodológica y defensa de tesis.'
      },
      content: 'Die vorgelegten Thesen bedürfen einer kritischen Überprüfung. / Die den Untersuchungen zugrunde liegende Hypothese lässt sich empirisch verifizieren.',
      audioText: 'In Anbetracht der aktuellen Studienlage erscheint die von den Autoren vertretene Schlussfolgerung durchaus plausibel, wenngleich weitere Langzeitbeobachtungen vonnöten sind.',
      practiceTasks: [
        'Formulieren Sie einen begründeten wissenschaftlichen Einwand gegen eine statistische Erhebung.',
        'Präsentieren Sie ein Forschungsvorhaben im akademischen Register.'
      ]
    },
    sectionB: {
      title: 'Mussawi B: Wortschatz & Hören',
      focus: 'Hören & Wortschatz (Wissenschaftliche Terminologie & Epistemologie)',
      description: {
        en: 'Master lexical fields of research design: causality, correlation, validation, peer-review, and falsification.',
        fa: 'تسلط بر حوزه واژگانی روش پژوهش: علیت، همبستگی، اعتبارسنجی، داوری همتا و ابطال‌پذیری.',
        prs: 'تسلط بر لغات تخصصی تحقیق علمی: علیت، ارتباط احصائیوی، ابطال‌پذیری و داوری مقالات.',
        tr: 'Bilimsel metodoloji terimleri: nedensellik, korelasyon, akran denetimi ve yanlışlanabilirlik.',
        ar: 'إتقان المصطلحات العلمية الدقيقة: السببية، الارتباط الإحصائي، التحكيم العلمي.',
        es: 'Términos de diseño de investigación: causalidad, correlación y validación empírica.'
      },
      content: 'die Kausalität, die Korrelation, die Falsifizierbarkeit, das Peer-Review-Verfahren, die Evidenz, die Kohärenz.',
      audioText: 'Das Peer-Review-Verfahren garantiert die wissenschaftliche Güte und Unabhängigkeit der im Fachjournal publizierten Ergebnisse.',
      practiceTasks: [
        'Unterscheiden Sie präzise zwischen Kausalität und bloßer Koinzidenz.',
        'Verfassen Sie ein kurzes Fach-Abstract für einen wissenschaftlichen Zeitschriftenartikel.'
      ]
    },
    sectionC: {
      title: 'Mussawi C: Alltagskommunikation',
      focus: 'Sprechen & Dialoge (Wissenschaftsvermittlung & Moderation)',
      description: {
        en: 'Moderate academic panels, synthesize contradictory theories, and communicate complex phenomena accessibly.',
        fa: 'مدیریت و مدیریت میزگردهای علمی، تلفیق نظریه‌های متناقض و تشریح پدیده‌های پیچیده به شکلی گویا.',
        prs: 'گردانندگی میزگردهای علمی، جمع‌بندی نظریات مختلف پوهنتونی و انتقال مفاهیم دشوار.',
        tr: 'Akademik panelleri yönetme, çelişkili tezleri sentezleme ve bilim iletişimi.',
        ar: 'إدارة الندوات العلمية، التوفيق بين النظريات المتعارضة وتبسيط المعرفة.',
        es: 'Moderación de mesas redondas académicas y divulgación de conceptos complejos.'
      },
      content: 'Zusammenfassend lässt sich konstatieren... / Wir müssen die konträren Positionen dialektisch abwägen.',
      audioText: 'Erlauben Sie mir, die wesentlichen Kontroversen unserer bisherigen Debatte kurz zusammenzuführen: Während die Verfechter des quantitativen Ansatzes...',
      practiceTasks: [
        'Moderieren Sie eine simulierte universitäre Podiumsdiskussion.',
        'Fassen Sie zwei konträre Forschungsergebnisse neutral und syntheseorientiert zusammen.'
      ]
    },
    sectionD: {
      title: 'Mussawi D: Leseverstehen & Text',
      focus: 'Lesen & Textanalyse (Fachaufsatz & Monografie)',
      description: {
        en: 'Analyze high-density academic papers featuring nominal style, footnotes, and advanced syntactic embedding.',
        fa: 'تحلیل مقالات تخصصی علمی با چگالی بالا، ساختارهای اسمی (Nominalstil) و پاورقی‌های پژوهشی.',
        prs: 'تحلیل مقالات علمی تخصصی با ساختار اسمی فشرده، سبک پوهنتونی و ارجاعات تحقیقی.',
        tr: 'Yoğun akademik makaleleri, isimleşmiş yapıları (Nominalstil) ve dipnotları analiz etme.',
        ar: 'تحليل الأبحاث الأكاديمية المحكمة ذات البنية الاسمية المكثفة والتعقيد التركيبي.',
        es: 'Análisis de artículos científicos densos, nominalizaciones y notas al pie.'
      },
      content: 'Auszug aus einer soziologischen Fachpublikation.',
      readingText: {
        type: 'Wissenschaftlicher Fachartikel',
        title: 'Die Transformation gesellschaftlicher Wissensordnungen im Zeitalter digitaler Netzwerke',
        body: 'Die durch die ubiquitäre Verbreitung digitaler Informationsarchitekturen hervorgerufene Rekonfiguration epistemischer Deutungshoheiten stellt tradierte Institutionen vor fundamentale Legitimitätsprobleme. An die Stelle diskursiv vermittelter, institutionell beglaubigter Urteile tritt eine algorithmisch gesteuerte Aggregation individueller Nutzerpräferenzen. Dieses Phänomen bedarf einer eingehenden theoretischen Durchdringung, um den erodierenden Konsens bezüglich wissenschaftlicher Evidenz adäquat zu begreifen.'
      },
      practiceTasks: [
        'Lösen Sie die Nominalstrukturen des Textes in entsprechende Verbalsätze auf.',
        'Erläutern Sie den Kernbegriff "epistemische Deutungshoheit" mit eigenen Worten.'
      ]
    },
    sectionE: {
      title: 'Mussawi E: Grammatik & Schreiben',
      focus: 'Grammatik & Schreiben (Erweiterte Partizipialattribute: Partizip I & II mit Attributketten)',
      description: {
        en: 'Transform relative clauses into high-register expanded participial attributes and vice versa.',
        fa: 'تبدیل جملات موصولی به ساختارهای صفتی گسترش‌یافته با اسم فاعل و مفعول (Partizipialattribute) و بالعکس.',
        prs: 'یادگیری صفات مفعولی و فاعلی گسترش‌یافته (Partizipialattribute) برای متون عالی و نگارش مقالات علمی.',
        tr: 'Genişletilmiş sıfat tamlamaları (Partizip I ve II ile kurulan karmaşık yapılar).',
        ar: 'تحويل الجمل الموصولة إلى تراكيب نعتية مركبة باستخدام اسم الفاعل واسم المفعول الموسع.',
        es: 'Transformación de oraciones de relativo en atributos participiales expandidos.'
      },
      content: 'Relativsatz: "Das Gesetz, das vom Bundestag beschlossen wurde" -> Partizipialattribut: "Das vom Bundestag beschlossene Gesetz".',
      grammarRule: {
        id: 'c1_2_partizipial_rule',
        level: 'C1.2',
        germanTitle: 'Erweiterte Partizipialattribute (Partizip I & II vor dem Nomen)',
        formula: 'Artikel + [Erweiternde Angaben] + Partizip (dekliniert) + Nomen',
        explanation: {
          en: 'In written academic and administrative German (C1/C2), relative clauses are compressed into expanded participial attributes placed directly between the article and the noun. Partizip I indicates ongoing active processes (+ d + adjective ending); Partizip II indicates completed or passive actions.',
          fa: 'در زبان دانشگاهی و اداری پیشرفته (C1/C2)، جملات موصولی طولانی فشرده شده و به عنوان صفت مرکب، مستقیماً میان آرتیکل و اسم قرار می‌گیرند. اسم فاعل (Partizip I) بر عمل در جریان و فعال دلالت دارد، و اسم مفعول (Partizip II) بر عمل پایان‌یافته یا مجهول.',
          prs: 'در سبک رسمی و اکادمیک، به جای جملات پیوندی طولانی، از صفات پیوسته پیش از اسم استفاده می‌شود. Partizip I جریان کار را نشان می‌دهد و Partizip II کار تکمیل‌شده یا مجهول را بیان می‌دارد.',
          tr: 'C1/C2 düzeyindeki akademik Almancada, yan cümleler sıkıştırılarak artikel ile isim arasına genişletilmiş sıfat olarak yerleştirilir.',
          ar: 'في الأسلوب الأكاديمي المتقدم يتم تكثيف الجمل الموصولة ووضعها كنعت مركب بين أداة التعريف والاسم.',
          es: 'En el registro académico culto, las oraciones de relativo se condensan en sintagmas participiales entre el artículo y el sustantivo.'
        },
        examples: [
          {
            german: 'Die den empirischen Untersuchungen zugrunde liegenden Daten wurden sorgfältig verifiziert.',
            formulaBreakdown: 'Die (Artikel) + den empirischen Untersuchungen zugrunde liegenden (erweitertes Partizip I) + Daten (Nomen).',
            literalTranslation: {
              en: 'The to-the empirical investigations at-basis lying data were carefully verified.',
              fa: 'داده‌های مبنا قرار گرفته برای تحقیقات تجربی، با دقت راستی‌آزمایی شدند.',
              prs: 'معلومات و احصائیه اساسی این تحقیق تجربی با دقت تمام ارزیابی و تایید گردید.',
              tr: 'Empirik araştırmaların temelini oluşturan veriler titizlikle doğrulandı.',
              ar: 'تم التحقق بدقة من البيانات التي تستند إليها الأبحاث التجريبية.',
              es: 'Los datos que sirven de base a las investigaciones empíricas fueron cuidadosamente verificados.'
            },
            fluentTranslation: {
              en: 'The data underlying the empirical investigations have been thoroughly verified.',
              fa: 'داده‌هایی که پایه و اساس پژوهش‌های تجربی را تشکیل می‌دهند، با دقت تمام مورد راستی‌آزمایی قرار گرفتند.',
              prs: 'معلومات ارقام و اعدادی که اساس این پژوهش عملی را می‌سازند، با دقت بسیار تصدیق گردیدند.',
              tr: 'Deneysel araştırmaların temelini oluşturan veriler titizlikle teyit edildi.',
              ar: 'جرى التحقق بكل عناية من البيانات التي تشكل الأساس للدراسات التجريبية.',
              es: 'Los datos que sustentan las investigaciones empíricas se verificaron exhaustivamente.'
            }
          },
          {
            german: 'Das von der Forschungsgruppe neu entwickelte Verfahren senkt die Fehlerquote signifikant.',
            formulaBreakdown: 'Das (Artikel) + von der Forschungsgruppe neu entwickelte (erweitertes Partizip II) + Verfahren (Nomen).',
            literalTranslation: {
              en: 'The by the research-group newly developed procedure lowers the error-rate significantly.',
              fa: 'روش به تازگی توسعه یافته توسط گروه پژوهشی، ضریب خطا را به طور معناداری کاهش می‌دهد.',
              prs: 'طریقه نوی که توسط گروه تحقیقاتی ایجاد شده، فیصدی اشتباه را به پیمانه قابل ملاحظه کم می‌سازد.',
              tr: 'Araştırma grubu tarafından yeni geliştirilen yöntem hata oranını belirgin biçimde düşürmektedir.',
              ar: 'يقلل الإجراء المطور حديثاً من قِبل المجموعة البحثية نسبة الخطأ بشكل ملحوظ.',
              es: 'El procedimiento desarrollado recientemente por el grupo de investigación reduce significativamente el margen de error.'
            },
            fluentTranslation: {
              en: 'The new method developed by the research team significantly reduces the error margin.',
              fa: 'روش جدید ابداع‌شده توسط تیم پژوهشی، نرخ خطا را به میزان چشمگیری پایین می‌آورد.',
              prs: 'طریقه کار تازه‌ای که توسط تیم علمی انکشاف یافته است، میزان اشتباهات را به گونه بارزی کاهش می‌دهد.',
              tr: 'Araştırma ekibinin yeni geliştirdiği yöntem hata oranını kayda değer ölçüde azaltmaktadır.',
              ar: 'تؤدي المنهجية الجديدة التي طورها الفريق البحثي إلى خفض نسبة الخطأ بصورة لافتة.',
              es: 'El nuevo método ideado por el equipo investigador reduce sustancialmente el porcentaje de fallos.'
            }
          }
        ]
      },
      practiceTasks: [
        'Lösen Sie folgendes Partizipialattribut in einen Relativsatz auf: "die von den Wissenschaftlern unlängst publizierten Ergebnisse".',
        'Bilden Sie ein erweitertes Partizip I aus: "die Studierenden, die im Hörsaal fleißig mitschreiben".'
      ]
    },
    vocabularies: [
      { id: 'c1_2_v1', word: 'die Monografie', article: 'die', plural: 'die Monografien', ipa: '/monoɡʁaˈfiː/', translation: { en: 'monograph / academic treatise', fa: 'تک‌نگاری / کتاب پژوهشی تخصصی', prs: 'اثر تحقیقی / کتاب رساله علمی', tr: 'monografi', ar: 'دراسة أحادية / أطروحة متخصصة', es: 'monografía' } },
      { id: 'c1_2_v2', word: 'die Kausalität', article: 'die', plural: 'die Kausalitäten', ipa: '/kaʊ̯zaliˈtɛːt/', translation: { en: 'causality', fa: 'رابطه علیتی / اصل علیت', prs: 'رابطه علت و معلول (علیت)', tr: 'nedensellik', ar: 'السببية / العِلّية', es: 'causalidad' } },
      { id: 'c1_2_v3', word: 'die Falsifizierbarkeit', article: 'die', plural: 'die Falsifizierbarkeiten', ipa: '/falzifiˈtsiːɐ̯baːɐ̯kaɪ̯t/', translation: { en: 'falsifiability', fa: 'ابطال‌پذیری علمی', prs: 'قابلیت ابطال علمی', tr: 'yanlışlanabilirlik', ar: 'القابلية للدحض / التفنيد العلمي', es: 'falsabilidad' } },
      { id: 'c1_2_v4', word: 'die Disputation', article: 'die', plural: 'die Disputationen', ipa: '/dɪsputaˈtsi̯oːn/', translation: { en: 'doctoral oral defense', fa: 'جلسه دفاع شفاهی دکترا', prs: 'جلسه دفاع علمی دوکتورا', tr: 'tez savunması', ar: 'مناقشة أطروحة الدكتوراه', es: 'defensa pública de tesis' } },
      { id: 'c1_2_v5', word: 'das Postulat', article: 'das', plural: 'die Postulate', ipa: '/pɔstuˈlaːt/', translation: { en: 'postulate / axiom', fa: 'اصل موضوع / فرض بنیادین', prs: 'اصل اساسی / فرضیه پذیرفته‌شده', tr: 'önerme / postulat', ar: 'مُسلّمة علمية / فرضية بديهية', es: 'postulado' } }
    ],
    videoClip: {
      title: 'Akademische Disputation und Kolloquium',
      scenario: 'Ein Doktorand verteidigt seine Dissertation über KI-Ethik vor der Prüfungskommission an der LMU München.',
      category: 'interview',
      duration: '03:10',
      speakers: ['Prof. Dr. Weber', 'Doktorand'],
      keyPhrases: [
        'Die vorgelegten empirischen Befunde stützen diese These.',
        'Es gilt zu differenzieren zwischen Korrelation und Kausalität.',
        'Unter methodologischen Gesichtspunkten ist dieser Einwand berechtigt.'
      ],
      germanTranscript: [
        'Prof. Dr. Weber: Herr Kandidat, wie begegnen Sie dem Vorwurf, Ihre Methodik basiere auf einer selektiven Stichprobe?',
        'Doktorand: Frau Professorin, die in Kapitel 4 detailliert dargelegten Daten wurden mittels eines doppelblinden Verfahrens erhoben.',
        'Prof. Dr. Weber: Dennoch lässt sich eine gewisse Kausalitätsunsicherheit nicht gänzlich von der Hand weisen.',
        'Doktorand: Dieser Einwand ist methodologisch nachvollziehbar; allerdings bestätigen die Replikationsstudien unsere Grundannahme.',
        'Prof. Dr. Weber: Eine schlüssige Argumentation. Die Kommission wird sich nun zur Beratung zurückziehen.'
      ],
      translatedTranscript: [
        {
          en: 'Prof. Dr. Weber: Candidate, how do you address the criticism that your methodology is based on a selective sample?',
          fa: 'پروفسور وبر: داوطلب گرامی، به این انتقاد که روش پژوهش شما بر نمونه‌گیری گزینشی مبتنی است چه پاسخی می‌دهید؟',
          prs: 'پروفسور داکتر ویبر: داوطلب محترم، در برابر این انتقاد که روش تحقیق شما بر نمونه‌گیری انتخابی استوار است چه استدلالی دارید؟',
          tr: 'Prof. Dr. Weber: Sayın aday, metodolojinizin yanlı bir örnekleme dayandığı eleştirisine nasıl yanıt veriyorsunuz?',
          ar: 'أ.د. فيبر: أيها المرشح، كيف ترد على الانتقاد القائل بأن منهجيتك استندت إلى عينة انتقائية؟',
          es: 'Prof. Dra. Weber: Candidato, ¿cómo responde a la objeción de que su metodología se basa en una muestra sesgada?'
        },
        {
          en: 'Doctoral Candidate: Professor, the data detailed in Chapter 4 were collected using a double-blind procedure.',
          fa: 'کاندیدای دکترا: استاد محترم، داده‌های ارائه‌شده در فصل ۴ از طریق شیوه دوسوکور جمع‌آوری شده‌اند.',
          prs: 'داوطلب دوکتورا: استاد محترمه، ارقام و معلومات تشریح‌شده در فصل چهارم از طریق پروسه دقیق دوطرفه‌کور جمع‌آوری شده‌اند.',
          tr: 'Doktora Adayı: Sayın Profesör, 4. bölümde açıklanan veriler çift körleme yöntemiyle toplanmıştır.',
          ar: 'مرشح الدكتوراه: أستاذتي الفاضلة، إن البيانات المعروضة في الفصل الرابع جُمعت وفق إجراء مزدوج التعمية.',
          es: 'Doctorando: Profesora, los datos expuestos en el capítulo 4 se obtuvieron mediante un procedimiento de doble ciego.'
        },
        {
          en: 'Prof. Dr. Weber: Nevertheless, a certain causal uncertainty cannot be entirely dismissed.',
          fa: 'پروفسور وبر: با این حال، وجود نوعی عدم قطعیت علّی را نمی‌توان کاملاً نادیده گرفت.',
          prs: 'پروفسور داکتر ویبر: با آنهم، یک اندازه عدم اطمینان در رابطه علت و معلول را نمی‌توان کاملاً رد نمود.',
          tr: 'Prof. Dr. Weber: Yine de nedensellik konusundaki belirsizlik bütünüyle göz ardı edilemez.',
          ar: 'أ.د. فيبر: ومع ذلك، لا يمكن استبعاد وجود قدر من عدم اليقين السببي بصورة قاطعة.',
          es: 'Prof. Dra. Weber: No obstante, cierta incertidumbre causal no puede desestimarse por completo.'
        },
        {
          en: 'Doctoral Candidate: This objection is methodologically sound; however, the replication studies corroborate our primary premise.',
          fa: 'کاندیدای دکترا: این اشکال از نظر روش‌شناسی موجه است؛ با این وجود، پژوهش‌های مکرر فرضیه بنیادین ما را تایید می‌کنند.',
          prs: 'داوطلب دوکتورا: این نقد از دید میتودولوژی بجاست؛ اما آزمایش‌ها و تحقیقات مجدد، اصل فرضیه ما را ثابت می‌سازند.',
          tr: 'Doktora Adayı: Bu itiraz metodolojik olarak haklıdır; ancak tekrarlanan çalışmalar temel önermemizi doğrulamaktadır.',
          ar: 'مرشح الدكتوراه: هذا الاعتراض وجيه منهجياً؛ غير أن دراسات إعادة القياس تدعم فرضيتنا الأساسية بقوة.',
          es: 'Doctorando: Dicha objeción es metodológicamente comprensible; no obstante, los estudios de replicación corroboran nuestra premisa.'
        },
        {
          en: 'Prof. Dr. Weber: A coherent argumentation. The committee will now withdraw for deliberation.',
          fa: 'پروفسور وبر: استدلالی منسجم و منطقی بود. اکنون هیئت داوران برای شور و تصمیم‌گیری خارج می‌شوند.',
          prs: 'پروفسور داکتر ویبر: استدلال شما منطقی و قناعت‌بخش بود. اکنون هیئت ژوری برای مشوره و تصمیم‌گیری جلسه را موقتاً ترک می‌کند.',
          tr: 'Prof. Dr. Weber: Tutarlı bir argümantasyon. Komisyon şimdi değerlendirme için çekilecektir.',
          ar: 'أ.د. فيبر: حجة متماسكة ومقنعة. ستنسحب اللجنة الآن للمداولة وإصدار الحكم.',
          es: 'Prof. Dra. Weber: Una argumentación coherente. El tribunal se retirará ahora a deliberar.'
        }
      ]
    },
    examTip: {
      standard: 'C1 (Goethe-Zertifikat C1 & telc C1 Hochschule)',
      module: 'Leseverstehen Teil 1 & Textproduktion',
      tip: {
        en: 'In telc C1 Hochschule reading texts, complex information is almost exclusively compressed using expanded participial attributes. Master identifying the main noun at the end of the chain before parsing the embedded prepositions.',
        fa: 'در آزمون telc C1 Hochschule، اطلاعات پیچیده همواره در قالب صفات گسترش‌یافته پیش از اسم فشرده می‌شوند. ابتدا اسم اصلی در انتهای ترکیب را بیابید و سپس اجزای توصیفی آن را تحلیل کنید.',
        prs: 'در امتحانات C1 برای ورود به پوهنتون‌های آلمان، معلومات علمی با صفات مرکب طولانی پیش از اسم بیان می‌شوند. اول نام اصلی را در اخیر عبارت دریابید و سپس حروف اضافه و تشریحات را معنی کنید.',
        tr: 'telc C1 Hochschule sınavında metinler genişletilmiş sıfat tamlamalarıyla doludur. Önce cümlenin asıl ismini bulun.',
        ar: 'في اختبار telc C1 الجامعي تعتمد النصوص على التراكيب النعتية الموسعة؛ حدد الاسم الرئيسي أولاً لفهم السياق بدقة.',
        es: 'En los textos de nivel C1 académico, identifica primero el sustantivo central al final de la construcción participial.'
      }
    }
  },
  {
    id: 'c1_2_lek9',
    lektionNumber: 9,
    level: 'C1.2',
    title: 'Wirtschaftsethik, Nachhaltigkeit und Funktionsverbgefüge',
    subTitle: 'Corporate Governance, ökologische Transformation und feste Nomen-Verb-Verbindungen',
    topic: 'Nachhaltigkeitsberichte, Lieferkettengesetz, Compliance und Funktionsverbgefüge (in Betracht ziehen / zur Verfügung stehen)',
    fotoHoergeschichte: {
      title: 'Foto-Hörgeschichte: Die außerordentliche Aufsichtsratssitzung in Frankfurt',
      imagePrompt: 'A high-rise boardroom overlooking the Frankfurt banking district skyline where board members examine an ESG corporate compliance report.',
      imageTheme: 'Frankfurt am Main Finanzdistrikt',
      audioDuration: '02:55',
      transcript: [
        { speaker: 'Frau Vorsitzende', text: 'Wir müssen heute die Auswirkungen des neuen Lieferkettengesetzes eingehend in Betracht ziehen.' },
        { speaker: 'Herr Dr. Berger', text: 'Die bisherigen Kontrollmechanismen stellen die Einhaltung ökologischer Standards nicht vollends unter Beweis.' },
        { speaker: 'Frau Vorsitzende', text: 'Deshalb müssen wir den betroffenen Abteilungen substanzielle Ressourcen zur Verfügung stellen.' },
        { speaker: 'Herr Dr. Berger', text: 'Ganz Ihrer Meinung. Andernfalls laufen wir Gefahr, empfindliche Sanktionen seitens der Aufsichtsbehörden auf uns zu ziehen.' },
        { speaker: 'Frau Vorsitzende', text: 'Ich bringe daher den Beschlussantrag zur sofortigen Implementierung eines ESG-Audits zur Abstimmung.' }
      ],
      summary: {
        en: 'The supervisory board of a corporation in Frankfurt deliberates corporate governance and ESG supply chain compliance using business functional verb idioms.',
        fa: 'هیئت نظارت یک شرکت در فرانکفورت، الزامات حاکمیت شرکتی و قانون زنجیره تامین را با ترکیبات اسمی-فعلی پیشرفته بررسی می‌کند.',
        prs: 'جلسه رهبری و نظارت یک شرکت در فرانکفورت، تطبیق قوانین زنجیره تمویل و مسوولیت‌های محیطی را با اصطلاحات عالی تجارتی ارزیابی می‌نماید.',
        tr: 'Frankfurt\'taki bir şirketin denetim kurulu, kurumsal yönetim ve tedarik zinciri uyumluluğunu fonksiyonel fiil kalıplarıyla müzakere eder.',
        ar: 'يناقش مجلس الرقابة في فرانكفورت معايير الحوكمة وسلاسل التوريد باستخدام تراكيب الأفعال الوظيفية.',
        es: 'El consejo de administración debate en Fráncfort sobre gobernanza y sostenibilidad con perífrasis verbales complejas.'
      }
    },
    sectionA: {
      title: 'Mussawi A: Sprechen & Dialog',
      focus: 'Sprechen & Hören (Verhandlungen auf Vorstandsebene)',
      description: {
        en: 'Lead strategic negotiations, present business proposals, and handle corporate compliance discourse.',
        fa: 'هدایت مذاکرات استراتژیک در سطح هیئت مدیره، ارائه طرح‌های تجاری و گفتمان حاکمیت شرکتی.',
        prs: 'پیشبرد مذاکرات مهم اداری و تجارتی در سطح رهبری، و دفاع از پلان‌های اقتصادی.',
        tr: 'Üst düzey yönetim müzakerelerini yürütme, stratejik plan sunma ve kurumsal uyum dili.',
        ar: 'قيادة المفاوضات الاستراتيجية الرفيعة وعرض الخطط والامتثال المؤسسي.',
        es: 'Liderazgo en negociaciones ejecutivas, propuestas de negocio y cumplimiento normativo.'
      },
      content: 'Einen Entschluss fassen / Unter Beweis stellen / Zur Verhandlung stehen / Zum Ausdruck bringen.',
      audioText: 'Wir müssen heute eine wegweisende Weichenstellung vornehmen, um die Marktposition unseres Unternehmens auch künftig abzusichern.',
      practiceTasks: [
        'Formulieren Sie 3 strategische Forderungen unter Verwendung von Funktionsverbgefügen.',
        'Führen Sie ein Streitgespräch über Rentabilität versus ökologische Nachhaltigkeit.'
      ]
    },
    sectionB: {
      title: 'Mussawi B: Wortschatz & Hören',
      focus: 'Hören & Wortschatz (ESG & Lieferkettenverantwortung)',
      description: {
        en: 'Vocabulary for Environmental Social Governance (ESG), audit procedures, circular economy, and labor standards.',
        fa: 'واژگان معیارهای پایداری زیست‌محیطی-اجتماعی (ESG)، حسابرسی سازمانی، اقتصاد چرخشی و استانداردهای کار.',
        prs: 'ذخیره لغات مرتبط به معیارهای محیط‌زیستی، تفتیش مسلکی شرکت‌ها و حقوق کارگران.',
        tr: 'ESG standartları, döngüsel ekonomi, denetim süreçleri ve tedarik zinciri terimleri.',
        ar: 'مفردات الحوكمة البيئية والاجتماعية والاقتصاد الدائري ومعايير العمل الدولية.',
        es: 'Vocabulario de criterios ESG, auditorías, economía circular y derechos laborales.'
      },
      content: 'die Sorgfaltspflicht, das ESG-Rating, die Kreislaufwirtschaft, die Dekarbonisierung, die Transparenzpflicht.',
      audioText: 'Das Lieferkettensorgfaltspflichtengesetz verpflichtet Unternehmen zur lückenlosen Dokumentation menschenrechtlicher Standards bei allen Zulieferern.',
      practiceTasks: [
        'Erklären Sie die 3 Säulen von ESG (Environmental, Social, Governance).',
        'Analysieren Sie einen Nachhaltigkeitsbericht auf Greenwashing-Indikatoren.'
      ]
    },
    sectionC: {
      title: 'Mussawi C: Alltagskommunikation',
      focus: 'Sprechen & Dialoge (Krisenkommunikation & Presseerklärung)',
      description: {
        en: 'Conduct crisis communications, respond to investigative journalism inquiries, and issue formal statements.',
        fa: 'مدیریت ارتباطات در شرایط بحران، پاسخ به سوالات خبرنگاران تحقیقی و صدور بیانیه‌های رسمی مطبوعاتی.',
        prs: 'ارتباطات در وضعیت اضطراری و بحرانی، پاسخ‌گویی به ژورنالیستان و نشر اعلامیه رسمی مطبوعاتی.',
        tr: 'Kriz iletişimi yürütme, araştırmacı gazetecilere yanıt verme ve basın açıklaması yapma.',
        ar: 'إدارة التواصل أثناء الأزمات والرد على الصحافة الاستقصائية وإصدار البيانات الرسمية.',
        es: 'Comunicación de crisis corporativa y redacción de comunicados de prensa institucionales.'
      },
      content: 'Stellung nehmen zu / Vorwürfe von sich weisen / Konsequenzen ziehen aus / Maßnahmen in die Wege leiten.',
      audioText: 'Das Unternehmen nimmt die erhobenen Vorwürfe außerordentlich ernst und hat umgehend eine unabhängige Untersuchungskommission ins Leben gerufen.',
      practiceTasks: [
        'Formulieren Sie eine offizielle Stellungnahme eines Vorstandssprechers.',
        'Reagieren Sie souverän auf kritische Pressefragen bezüglich einer Produktionspanne.'
      ]
    },
    sectionD: {
      title: 'Mussawi D: Leseverstehen & Text',
      focus: 'Lesen & Textanalyse (Wirtschaftsanalysen & Geschäftsberichte)',
      description: {
        en: 'Critique corporate annual reports, financial audits, and regulatory compliance frameworks.',
        fa: 'نقد و بررسی گزارش‌های مالی سالانه شرکت‌ها، ترازنامه‌ها و چارچوب‌های قانون‌گذاری اقتصادی.',
        prs: 'بررسی راپور سالانه مالی شرکت‌ها، حسابرسی اقتصادی و احکام قانونی نظارت بر بازار.',
        tr: 'Şirketlerin yıllık faaliyet raporlarını, bilanço analizlerini ve regülasyon metinlerini okuma.',
        ar: 'تحليل التقارير المالية السنوية للشركات ولوائح الامتثال التنظيمي.',
        es: 'Análisis de balances, informes anuales corporativos y marcos regulatorios.'
      },
      content: 'Auszug aus einem Lagebericht einer DAX-40-Aktiengesellschaft.',
      readingText: {
        type: 'Konzernlagebericht & Risikoberichterstattung',
        title: 'Risikobericht des Vorstands zum Geschäftsjahr 2025/2026',
        body: 'Im abgelaufenen Geschäftsjahr sah sich der Konzern mit einer Verschärfung geopolitischer Verwerfungen konfrontiert. Um den daraus resultierenden Risiken für die Absatzkanäle wirksam zu begegnen, wurden umfassende Restrukturierungsmaßnahmen in Angriff genommen. Durch die Diversifizierung der Beschaffungsmärkte konnte eine substantielle Risikominderung erzielt werden. Gleichwohl bleiben volatile Rohstoffpreise ein nicht zu vernachlässigender Unsicherheitsfaktor.'
      },
      practiceTasks: [
        'Welche konkreten Maßnahmen leitete das Unternehmen zur Abfederung der Risiken ein?',
        'Wie schätzt der Vorstand die künftige Rohstoffpreisentwicklung ein?'
      ]
    },
    sectionE: {
      title: 'Mussawi E: Grammatik & Schreiben',
      focus: 'Grammatik & Schreiben (Funktionsverbgefüge / Nomen-Verb-Verbindungen)',
      description: {
        en: 'Master idiomatic noun-verb combinations that define high-level administrative and business German.',
        fa: 'تسلط بر ترکیبات اسمی-فعلی ثابت (Funktionsverbgefüge) که شاخصه زبان تجاری و اداری سطح بالا هستند.',
        prs: 'یادگیری کامل ترکیبات ثابت اسم و فعل (Funktionsverbgefüge) که در ادارات و تجارت پیشرفته استفاده می‌شوند.',
        tr: 'Yüksek bürokrasi ve iş dünyasında kullanılan fonksiyonel fiil kalıpları (Nomen-Verb-Verbindungen).',
        ar: 'إتقان تراكيب الأفعال الوظيفية التي تميز الأسلوب الرسمي والإداري والاقتصادي المتقدم.',
        es: 'Dominio de perífrasis y combinaciones fijas de sustantivo y verbo del registro profesional culto.'
      },
      content: 'In Betracht ziehen (= berücksichtigen), zur Verfügung stehen (= verfügbar sein), Kritik üben an (= kritisieren).',
      grammarRule: {
        id: 'c1_2_funktionsverb_rule',
        level: 'C1.2',
        germanTitle: 'Funktionsverbgefüge (Nomen-Verb-Verbindungen des gehobenen Stils)',
        formula: 'Präposition + Nomen + Funktionsverb (bringen, ziehen, stehen, stellen, gelangen)',
        explanation: {
          en: 'Functional verb combinations replace simple verbs with a noun + a semantically weakened auxiliary verb. They convey precision, objectivity, and formality essential for C1/C2 communication.',
          fa: 'ترکیبات اسمی-فعلی به جای افعال ساده به کار می‌روند تا لحن متن رسمی‌تر، دقیق‌تر و فاخرتر شود (مثلاً به جای kritisieren از Kritik üben an استفاده می‌شود).',
          prs: 'در این ساختار به جای فعل ساده، یک اسم با فعل خاصی ترکیب می‌گردد تا کلام شکل کاملاً رسمی و باوقار پیدا کند (مانند in Betracht ziehen به جای berücksichtigen).',
          tr: 'Basit fiiller yerine bir isim ve anlamca zayıflamış yardımcı fiil kullanılır. C1/C2 seviyesinde metne nesnellik ve resmiyet katar.',
          ar: 'تراكيب تستبدل الأفعال البسيطة باسم وفعل وظيفي لمنح الكلام طابعاً رسمياً محايداً ومتقناً.',
          es: 'Estructuras que sustituyen verbos simples por una combinación de sustantivo y verbo funcional para dotar al texto de rigor y formalidad.'
        },
        examples: [
          {
            german: 'Wir müssen alle Optionen sorgfältig in Betracht ziehen.',
            formulaBreakdown: 'Wir müssen (Modalverb) + alle Optionen (Objekt) + in Betracht ziehen (FVG = berücksichtigen).',
            literalTranslation: {
              en: 'We must all options carefully into consideration draw.',
              fa: 'ما باید همه گزینه‌ها را با دقت مد نظر قرار دهیم.',
              prs: 'ما باید تمام گزینه‌ها و راه‌ها را با دقت تحت غور و بررسی قرار بدهیم.',
              tr: 'Tüm seçenekleri titizlikle göz önünde bulundurmalıyız.',
              ar: 'علينا أن نأخذ جميع الخيارات بعين الاعتبار والتقدير.',
              es: 'Debemos tomar en consideración minuciosamente todas las opciones.'
            },
            fluentTranslation: {
              en: 'We must take all available options into careful consideration.',
              fa: 'ما موظفیم تمامی راهکارهای پیش‌رو را با دقت تام مورد توجه و بررسی قرار دهیم.',
              prs: 'لازم است که تمام گزینه‌های موجود را با دقت کامل مورد بررسی و ملاحظه قرار دهیم.',
              tr: 'Bütün ihtimalleri özenle değerlendirmek zorundayız.',
              ar: 'يجب أن نضع كافة الاحتمالات المتاحة نصب أعيننا بكل عناية.',
              es: 'Es imperativo sopesar con rigor todas las posibilidades a nuestro alcance.'
            }
          },
          {
            german: 'Die neuen Fördermittel stehen den Universitäten ab sofort zur Verfügung.',
            formulaBreakdown: 'Die neuen Fördermittel (Subjekt) + stehen (FVG) + den Universitäten + zur Verfügung (FVG = verfügbar sein).',
            literalTranslation: {
              en: 'The new funds stand to-the universities from now to disposal.',
              fa: 'بودجه‌های حمایتی جدید از هم‌اکنون در دسترس دانشگاه‌ها قرار دارند.',
              prs: 'بودجه‌های حمایتی نو از همین اکنون در اختیار پوهنتون‌ها گذاشته شده‌اند.',
              tr: 'Yeni teşvik fonları bugünden itibaren üniversitelerin kullanımına sunulmuştur.',
              ar: 'المخصصات المالية الجديدة موضوعة تحت تصرف الجامعات ابتداءً من الآن.',
              es: 'Los nuevos fondos de ayuda quedan a disposición de las universidades de inmediato.'
            },
            fluentTranslation: {
              en: 'The new funding resources are available to universities with immediate effect.',
              fa: 'اعتبارات مالی حمایتی جدید از این لحظه در اختیار و در دسترس دانشگاه‌ها قرار گرفته است.',
              prs: 'بودجه‌های کمکی جدید از هم‌اکنون به صورت کامل در دسترس پوهنتون‌ها قرار دارد.',
              tr: 'Yeni mali destekler üniversitelerin hizmetine derhal sunulmuştur.',
              ar: 'أصبحت الميزانيات الداعمة الجديدة متاحة لاستخدام الجامعات بشكل فوري.',
              es: 'Las nuevas subvenciones se encuentran a disposición de las universidades a partir de este momento.'
            }
          }
        ]
      },
      practiceTasks: [
        'Ersetzen Sie das Verb "beenden" durch das passende Funktionsverbgefüge ("zu einem Ende bringen / führen").',
        'Bilden Sie einen diplomatischen Satz mit "außer Frage stehen".'
      ]
    },
    vocabularies: [
      { id: 'c1_2_v6', word: 'die Sorgfaltspflicht', article: 'die', plural: 'die Sorgfaltspflichten', ipa: '/ˈzɔʁkfalt͡sˌp͡flɪçt/', translation: { en: 'duty of diligence / care', fa: 'تعهد به رعایت دقت و مراقبت قانونی', prs: 'مسوولیت دقت و مراقبت قانونی', tr: 'özen yükümlülüğü', ar: 'واجب العناية الواجبة', es: 'deber de diligencia' } },
      { id: 'c1_2_v7', word: 'die Dekarbonisierung', article: 'die', plural: 'die Dekarbonisierungen', ipa: '/dekaʁboniˈziːʁʊŋ/', translation: { en: 'decarbonization', fa: 'کربن‌زدایی زیست‌محیطی', prs: 'کاهش و حذف گازهای کاربن', tr: 'karbonsuzlaştırma', ar: 'إزالة الكربون والحد من الانبعاثات', es: 'descarbonización' } },
      { id: 'c1_2_v8', word: 'das Gutachten', article: 'das', plural: 'die Gutachten', ipa: '/ˈɡuːtˌʔaxtn̩/', translation: { en: 'expert opinion / legal report', fa: 'نظریه کارشناسی رسمی / ارزیابی حقوقی', prs: 'نظر کارشناس مسلکی / تصدیق حقوقی', tr: 'bilirkişi raporu', ar: 'تقرير الخبرة الفنية / الرأي القانوني', es: 'dictamen pericial' } },
      { id: 'c1_2_v9', word: 'die Restrukturierung', article: 'die', plural: 'die Restrukturierungen', ipa: '/ʁestʁʊktuˈʁiːʁʊŋ/', translation: { en: 'restructuring', fa: 'تغییر ساختار سازمانی / بازسازی', prs: 'تجدید ساختار اداری و اقتصادی', tr: 'yeniden yapılandırma', ar: 'إعادة الهيكلة المؤسسية', es: 'reestructuración' } },
      { id: 'c1_2_v10', word: 'die Transparenz', article: 'die', plural: 'die Transparenzen', ipa: '/tʁanspaˈʁɛnt͡s/', translation: { en: 'transparency', fa: 'شفافیت سازمانی', prs: 'شفافیت در کار و حساب‌دهی', tr: 'şeffaflık', ar: 'الشفافية المؤسسية', es: 'transparencia' } }
    ],
    videoClip: {
      title: 'Aufsichtsratssitzung: Dekarbonisierung und Lieferkettengesetz',
      scenario: 'Vorstandsmitglieder debattieren über die Umsetzung des deutschen Lieferkettensorgfaltspflichtengesetzes in Frankfurt.',
      category: 'beruf',
      duration: '02:50',
      speakers: ['Vorsitzende', 'Compliance-Chef'],
      keyPhrases: [
        'Wir müssen alle Risiken in Betracht ziehen.',
        'Die ESG-Kriterien stehen zur Disposition.',
        'Es bedarf einer grundlegenden Neuausrichtung.'
      ],
      germanTranscript: [
        'Vorsitzende: Meine Damen und Herren, wir müssen heute über die strikte Einhaltung des Lieferkettengesetzes entscheiden.',
        'Compliance-Chef: Frau Vorsitzende, unser aktueller Audit-Bericht zieht alle kritischen Zulieferer in Betracht.',
        'Vorsitzende: Welche Konsequenzen stehen bei Verstößen im Raum?',
        'Compliance-Chef: Es drohen empfindliche Bußgelder sowie der Ausschluss von öffentlichen Vergabeverfahren.',
        'Vorsitzende: Folglich bringen wir den Maßnahmenkatalog zur Dekarbonisierung und Transparenz unverzüglich zur Abstimmung.'
      ],
      translatedTranscript: [
        {
          en: 'Chairwoman: Ladies and gentlemen, we must decide today on strict compliance with the Supply Chain Act.',
          fa: 'رئیس جلسه: خانم‌ها و آقایان، امروز باید درباره پایبندی دقیق به قانون زنجیره تامین تصمیم‌گیری کنیم.',
          prs: 'رییسه جلسه: خانم‌ها و آقایان محترم، امروز باید در مورد تطبیق قانون زنجیره تدارکات تصمیم بگیریم.',
          tr: 'Başkan: Hanımefendiler ve beyefendiler, bugün Tedarik Zinciri Yasasına uyum konusunda karar vermeliyiz.',
          ar: 'رئيسة المجلس: سيداتي وسادتي، يتعين علينا اليوم البت في الامتثال الصارم لقانون سلاسل التوريد.',
          es: 'Presidenta: Señoras y señores, hoy debemos decidir sobre el estricto cumplimiento de la Ley de Cadena de Suministro.'
        },
        {
          en: 'Compliance Head: Madam Chair, our current audit report takes all critical suppliers into consideration.',
          fa: 'مدیر تطبیق مقررات: خانم رئیس، گزارش حسابرسی فعلی ما تمام تامین‌کنندگان پرریسک را مد نظر قرار داده است.',
          prs: 'مسئول تفتیش و انطباق: خانم رییسه، راپور تفتیش فعلی تمام تدارک‌کنندگان عمده را مدنظر گرفته است.',
          tr: 'Uyum Direktörü: Sayın Başkan, mevcut denetim raporumuz tüm kritik tedarikçileri dikkate almaktadır.',
          ar: 'مسؤول الامتثال: سيادة الرئيسة، إن تقرير التدقيق الحالي يأخذ في الاعتبار جميع الموردين الحرجين.',
          es: 'Jefe de Compliance: Sra. Presidenta, nuestro informe de auditoría toma en consideración a todos los proveedores críticos.'
        },
        {
          en: 'Chairwoman: What consequences are looming in case of violations?',
          fa: 'رئیس جلسه: در صورت نقض مقررات، چه پیامدهایی در انتظار ما خواهد بود؟',
          prs: 'رییسه جلسه: در صورت نقض مقررات، کدام عواقب و جریمه‌ها متوجه ما خواهد شد؟',
          tr: 'Başkan: İhlal durumunda ne tür yaptırımlarla karşılaşabiliriz?',
          ar: 'رئيسة المجلس: ما العواقب المترتبة في حال حدوث أي انتهاكات؟',
          es: 'Presidenta: ¿Qué consecuencias se contemplan en caso de infracción?'
        },
        {
          en: 'Compliance Head: Severe fines and exclusion from public procurement procedures are imminent.',
          fa: 'مدیر تطبیق مقررات: جریمه‌های مالی سنگین و همچنین محرومیت از مناقصات عمومی ما را تهدید می‌کند.',
          prs: 'مسئول انطباق: جریمه‌های بسیار گزاف و محرومیت از داوطلبی‌ها و قراردادهای دولتی در پیش خواهد بود.',
          tr: 'Uyum Direktörü: Ağır para cezaları ve kamu ihalelerinden men edilme riski bulunmaktadır.',
          ar: 'مسؤول الامتثال: ثمة تهديد بفرض غرامات مالية باهظة والاستبعاد من المناقصات الحكومية العامة.',
          es: 'Jefe de Compliance: Amenazan severas multas y la exclusión de licitaciones públicas.'
        },
        {
          en: 'Chairwoman: Consequently, we will put the catalog of measures for decarbonization and transparency to a vote immediately.',
          fa: 'رئیس جلسه: در نتیجه، فهرست اقدامات برای کربن‌زدایی و شفافیت را فوراً به رای می‌گذاریم.',
          prs: 'رییسه جلسه: بناءً، لایحه اقدامات برای کاهش گازهای مضره و شفافیت را بلافاصله به رای‌گیری می‌گذاریم.',
          tr: 'Başkan: Dolayısıyla karbonsuzlaştırma ve şeffaflık eylem planını derhal oylamaya sunuyoruz.',
          ar: 'رئيسة المجلس: بناءً عليه، سنطرح حزمة التدابير الخاصة بإزالة الكربون والشفافية للتصويت فوراً.',
          es: 'Presidenta: Por consiguiente, someteremos a votación de inmediato el catálogo de medidas de descarbonización y transparencia.'
        }
      ]
    },
    examTip: {
      standard: 'C1 (Goethe-Zertifikat C1 & telc C1)',
      module: 'Schriftlicher Ausdruck (Stellungnahme)',
      tip: {
        en: 'In C1 essay writing, substituting simple verbs with appropriate functional verb phrases ("in Angriff nehmen", "in Zweifel ziehen", "zur Sprache bringen") will significantly boost your score in vocabulary variety and stylistic range.',
        fa: 'در نگارش مقاله C1، جایگزین کردن افعال ساده با اصطلاحات اسمی-فعلی، نمره دایره لغات و سبک نوشتار شما را بسیار بالا می‌برد.',
        prs: 'در بخش نوشتن مقاله آزمون C1، استفاده از اصطلاحات ترکیبی اسم و فعل (مانند in Betracht ziehen یا zur Verfügung stehen) نشان‌دهنده فصاحت اکادمیک شما بوده و بلندترین نمره را برایتان می‌آورد.',
        tr: 'C1 yazma sınavında basit fiiller yerine Nomen-Verb-Verbindungen kullanmak dil zenginliği puanınızı doğrudan yükseltir.',
        ar: 'في التعبير الكتابي لمستوى C1 استبدال الأفعال البسيطة بالتراكيب الوظيفية يضمن لك أعلى الدرجات في تنوع المفردات والأسلوب.',
        es: 'En la redacción de C1, sustituir verbos cotidianos por perífrasis formales eleva sustancialmente la calificación estilística.'
      }
    }
  },
  {
    id: 'c1_2_lek10',
    lektionNumber: 10,
    level: 'C1.2',
    title: 'Medienkritik, Hermeneutik und Passivalternativen',
    subTitle: 'Medientheorie, Diskursanalyse und Passiversatzformen (sich lassen / sein zu / -bar / -lich)',
    topic: 'Desinformation, Informationsästhetik, Medienethik und Passivalternativen im gehobenen Stil',
    fotoHoergeschichte: {
      title: 'Foto-Hörgeschichte: Das Medienforum in Berlin',
      imagePrompt: 'A sleek television debate studio in Berlin where media theorists and journalists analyze digital disinformation networks on a giant multimedia display.',
      imageTheme: 'Berlin Medienstudio',
      audioDuration: '03:00',
      transcript: [
        { speaker: 'Moderatorin', text: 'Herzlich willkommen zum Berliner Medienforum über die Zersetzung des öffentlichen Raumes durch Desinformation.' },
        { speaker: 'Prof. Dr. Klein', text: 'Die Authentizität digital generierter Bilddokumente lässt sich mit bloßem Auge kaum noch überprüfen.' },
        { speaker: 'Dr. Sarah Amari', text: 'In der Tat. Es sind dringend neue Verifikationsprotokolle zu etablieren, um Täuschungen vorzubeugen.' },
        { speaker: 'Prof. Dr. Klein', text: 'Dieser Verlust an Faktizität ist keineswegs hinnehmbar. Die Integrität des Diskurses steht auf dem Spiel.' },
        { speaker: 'Dr. Sarah Amari', text: 'Dennoch ist festzustellen, dass eine allzu restriktive Regulierung die Meinungsfreiheit ungebührlich einschränken könnte.' }
      ],
      summary: {
        en: 'Media theorists in Berlin debate digital disinformation and information hygiene, utilizing elegant passive alternatives (lässt sich überprüfen, ist festzustellen).',
        fa: 'نظریه‌پردازان رسانه در برلین پیرامون اخبار جعلی و بهداشت اطلاعات با ساختارهای جایگزین مجهول (مانند lässt sich überprüfen) مناظره می‌کنند.',
        prs: 'صاحب‌نظران رسانه در برلین درباره معلومات نادرست و حقیقت‌سنجی دیجیتالی با استفاده از ساختارهای مجهول ادبی مباحثه می‌نمایند.',
        tr: 'Berlin\'deki medya forumunda uzmanlar, edilgen çatı alternatiflerini (Passiversatzformen) kullanarak dezenformasyon konusunu tartışır.',
        ar: 'يناقش خبراء الإعلام في برلين التضليل الرقمي مستخدمين بدائل المبني للمجهول الأدبية الرفيعة.',
        es: 'Expertos en comunicación debaten en Berlín sobre desinformación empleando alternativas estilísticas a la pasiva.'
      }
    },
    sectionA: {
      title: 'Mussawi A: Sprechen & Dialog',
      focus: 'Sprechen & Hören (Medienanalyse & Diskurskritik)',
      description: {
        en: 'Critique journalistic ethics, sensationalism, framing techniques, and the digital transformation of the public sphere.',
        fa: 'نقد اخلاق رسانه‌ای، زردنگاری، جهت‌دهی به افکار عمومی (فرمینگ) و دگرگونی فضای عمومی در عصر دیجیتال.',
        prs: 'نقد مسلکی اصول خبرنگاری، جهت‌دهی به خبرها و تغییرات افکار عامه در رسانه‌های امروزی.',
        tr: 'Medya etiği, sansasyonellik, çerçeveleme teknikleri ve kamuoyu tartışmalarını eleştirme.',
        ar: 'نقد أخلاقيات الصحافة والإثارة الإعلامية وتأطير الأخبار في الفضاء الرقمي.',
        es: 'Crítica de la ética periodística, el sensacionalismo y los marcos discursivos.'
      },
      content: 'Das Framing / Die Aufmerksamkeitsökonomie / Die Echokammer / Faktizität versus Narrativ.',
      audioText: 'In modernen Aufmerksamkeitsökonomien entscheidet nicht mehr die faktische Stichhaltigkeit einer Meldung über ihre Reichweite, sondern ihr affektives Erregungspotenzial.',
      practiceTasks: [
        'Analysieren Sie die Schlagzeilen zweier Zeitungen auf Framing-Effekte.',
        'Erläutern Sie das Phänomen der "Filterblase" im gehobenen Register.'
      ]
    },
    sectionB: {
      title: 'Mussawi B: Wortschatz & Hören',
      focus: 'Hören & Wortschatz (Hermeneutik & Informationsethik)',
      description: {
        en: 'Advanced vocabulary for textual interpretation, bias detection, algorithmic curation, and epistemic bubbles.',
        fa: 'واژگان تفسیر متن و هرمنوتیک، شناسایی پیش‌داوری، گزینش الگوریتمی و حباب‌های اطلاعاتی.',
        prs: 'لغات هرمنوتیک و تفسیر متن، کشف سوگیری‌های رسانه‌ای و گزینش‌های الگوریتمی.',
        tr: 'Metin yorumlama (hermenötik), algoritmik kürasyon ve bilgi etiği terimleri.',
        ar: 'مفردات التأويل والهرمنيوطيقا وكشف الانحياز الإعلامي والتنظيم الخوارزمي للمحتوى.',
        es: 'Vocabulario de hermenéutica, sesgos cognitivos y algoritmos de selección informativa.'
      },
      content: 'die Hermeneutik, das Narrativ, die Zensur, die Verifikation, die Resonanz, die Konnotation.',
      audioText: 'Die hermeneutische Textanalyse erfordert eine sorgfältige Rekonstruktion des historischen und soziopolitischen Kontextes, in dem ein Text entstanden ist.',
      practiceTasks: [
        'Klären Sie den Unterschied zwischen Denotation und Konnotation an Beispielen.',
        'Verfassen Sie einen Kommentar zur Verantwortung von Plattformbetreibern.'
      ]
    },
    sectionC: {
      title: 'Mussawi C: Alltagskommunikation',
      focus: 'Sprechen & Dialoge (Differenzierte Meinungsäußerung & Nuancierung)',
      description: {
        en: 'Express nuanced qualifications, avoid black-and-white dichotomies, and present balanced socio-cultural arguments.',
        fa: 'بیان دیدگاه‌های چندلایه و ظریف، پرهیز از ساده‌انگاری سیاه و سفید و ارائه استدلال‌های متوازن.',
        prs: 'ابراز نظر دقیق و همه‌جانبه، دوری از قضاوت‌های یک‌طرفه و ارائه دلایل منطقی متوازن.',
        tr: 'Siyah-beyaz kutuplaşmasından kaçınarak incelikli ve dengeli fikir beyan etme.',
        ar: 'التعبير عن الآراء الدقيقة متعددة الأبعاد وتجنب الأحكام التبسيطية المطلقة.',
        es: 'Expresión de matices y argumentación equilibrada evitando simplificaciones dicotómicas.'
      },
      content: 'Es steht außer Frage, dass... / Gleichwohl darf nicht verkannt werden, dass... / Man muss differenzieren zwischen...',
      audioText: 'Obgleich die Gefahren von Fehlinformationen unübersehbar sind, darf die Debatte nicht in panische Zensurforderungen abgleiten. Es gilt vielmehr, die Medienkompetenz der Bürger nachhaltig zu stärken.',
      practiceTasks: [
        'Formulieren Sie ein differenziertes Plädoyer für Medienkompetenz im Schulunterricht.',
        'Entkräften Sie ein populistisches Scheinargument mit stichhaltigen Gegenargumenten.'
      ]
    },
    sectionD: {
      title: 'Mussawi D: Leseverstehen & Text',
      focus: 'Lesen & Textanalyse (Kulturkritischer Feuilletonbeitrag)',
      description: {
        en: 'Analyze sophisticated cultural essays from leading newspapers (FAZ, DIE ZEIT) with irony, metaphors, and subtle subtext.',
        fa: 'تحلیل ستون‌های فرهنگی-تحلیلی روزنامه‌های معتبر آلمانی با ایهام، استعاره‌ها و لایه‌های پنهان معنایی.',
        prs: 'خواندن و تحلیل مقالات فرهنگی ادبی روزنامه‌های مهم با استعاره‌ها و کنایه‌های ادبی فاخر.',
        tr: 'Nitelikli gazete makalelerini (Feuilleton), ironi, metafor ve edebi üslubu analiz etme.',
        ar: 'تحليل المقالات الثقافية والفكرية المعمقة بما تتضمنه من استعارات وبلاغة لغوية.',
        es: 'Análisis de artículos de opinión y crítica cultural con lenguaje figurado y matices irónicos.'
      },
      content: 'Feuilletonistischer Essay über das Lesen im Zeitalter digitaler Kurzformate.',
      readingText: {
        type: 'Feuilleton-Essay',
        title: 'Die Kunst des Innehaltens - Lob des langsamen Lesens',
        body: 'Im Takt der Push-Nachrichten und der algorithmisch getakteten Aufmerksamkeitsfetzen droht eine Kulturtechnik zu verkümmern, die einst das Fundament aufgeklärter Subjektivität bildete: das kontemplative, geduldige Lesen. Wer sich heute noch einem mehrbändigen Roman oder einer philosophischen Abhandlung aussetzt, vollzieht fast schon einen Akt des zivilen Ungehorsams gegen die Diktatur der Sekundenschnelligkeit. Es ist höchste Zeit, die Fähigkeit zur vertieften Reflexion neu zu kultivieren.'
      },
      practiceTasks: [
        'Welche Metaphern verwendet der Autor, um die moderne Informationsflut zu charakterisieren?',
        'Wie begründet der Text den Wert des "langsamen Lesens" für das Individuum?'
      ]
    },
    sectionE: {
      title: 'Mussawi E: Grammatik & Schreiben',
      focus: 'Grammatik & Schreiben (Passivalternativen: sich lassen + Inf. / sein + zu + Inf. / Adjektive auf -bar, -lich)',
      description: {
        en: 'Master stylistic alternatives to the passive voice to write varied, academic, and elegant German prose.',
        fa: 'تسلط بر جایگزین‌های شیک و ادبی مجهول برای افزایش غنا و روانی متن در آزمون‌های C1.',
        prs: 'یادگیری بدل‌های زیبای مجهول (Passivalternativen) مانند sich lassen، sein + zu و پسوندهای bar- و lich- برای نگارش عالی.',
        tr: 'Edilgen çatı alternatifleri (sich lassen + mastar, sein + zu + mastar, -bar/-lich ekleri).',
        ar: 'إتقان بدائل صيغة المبني للمجهول في الأسلوب الأدبي والأكاديمي الرفيع.',
        es: 'Dominio de alternativas a la voz pasiva para enriquecer el estilo y evitar la monotonía sintáctica.'
      },
      content: 'Passiv: "Das kann gemacht werden" -> Passivalternativen: "Das lässt sich machen" / "Das ist zu machen" / "Das ist machbar".',
      grammarRule: {
        id: 'c1_2_passivalternativen_rule',
        level: 'C1.2',
        germanTitle: 'Passivalternativen (Passiversatzformen)',
        formula: '1. sich lassen + Infinitiv | 2. sein + zu + Infinitiv | 3. Adjektive auf -bar / -lich / -abel',
        explanation: {
          en: 'Frequent use of the passive voice can make texts repetitive and clumsy. Advanced German uses three primary alternatives: 1. "sich lassen + Infinitiv" (possibility: can be done); 2. "sein + zu + Infinitiv" (obligation or possibility: must/can be done); 3. Adjectives ending in -bar or -lich (feasibility: solvable, understandable).',
          fa: 'تکرار زیاد افعال مجهول متن را سنگین و یکنواخت می‌کند. در آلمانی پیشرفته از ۳ ساختار جایگزین استفاده می‌شود: ۱. sich lassen + مصدر (امکان‌پذیری: می‌توان انجام داد)؛ ۲. sein + zu + مصدر (بایستگی یا امکان: باید/می‌توان انجام داد)؛ ۳. صفت‌های مختوم به -bar و -lich (مانند machbar: قابل انجام، erklärbar: قابل توضیح).',
          prs: 'برای زیبایی کلام و جلوگیری از تکرار مجهول، سه طریقه دیگر به کار می‌رود: ۱. sich lassen + مصدر (قابل اجرا بودن)؛ ۲. sein + zu + مصدر (ضرورت یا امکان انجام کار)؛ ۳. صفت‌های با پسوند -bar و -lich (مانند lösbar یعنی قابل حل).',
          tr: 'Metnin akıcılığını artırmak için edilgen çatı yerine üç yapı tercih edilir: sich lassen + mastar (olabilirlik), sein + zu + mastar (zorunluluk/olabilirlik) ve -bar/-lich son ekli sıfatlar.',
          ar: 'بدائل المبني للمجهول تضفي مرونة وبلاغة على النص: sich lassen (الإمكانية)، sein + zu (الوجوب أو الإمكان)، وصفات -bar و-lich.',
          es: 'Estructuras alternativas para evitar la repetición de la pasiva: sich lassen (posibilidad), sein + zu (obligación/posibilidad) y sufijos -bar / -lich.'
        },
        examples: [
          {
            german: 'Diese komplexe Problematik lässt sich nicht trivialisieren.',
            formulaBreakdown: 'Diese komplexe Problematik (Subjekt) + lässt (V1) + sich (Refl.) + nicht trivialisieren (Inf. = kann nicht trivialisiert werden).',
            literalTranslation: {
              en: 'This complex problem-complex lets itself not trivialize.',
              fa: 'این مسئله پیچیده اجازه ساده‌انگاری به خود نمی‌دهد (نمی‌توان آن را ساده‌انگارانه تقلیل داد).',
              prs: 'این معضل دشوار را نمی‌توان ساده و پیش‌پاافتاده جلوه داد.',
              tr: 'Bu karmaşık sorun hafife alınamaz.',
              ar: 'لا يمكن تبسيط هذه الإشكالية المعقدة بصورة مبتذلة.',
              es: 'Esta compleja problemática no se deja trivializar (no puede simplificarse).'
            },
            fluentTranslation: {
              en: 'This complex issue cannot simply be reduced or trivialized.',
              fa: 'این معضل پیچیده را به هیچ وجه نمی‌توان به شکلی ساده‌انگارانه تقلیل داد.',
              prs: 'این موضوع پیچیده را نمی‌توان به آسانی تقلیل داده و ساده پنداشت.',
              tr: 'Bu çetrefilli mesele kesinlikle basite indirgenemez.',
              ar: 'لا يمكن اختزال هذه القضية المعقدة بأي حال من الأحوال.',
              es: 'No es admisible simplificar una problemática de semejante envergadura.'
            }
          },
          {
            german: 'Die Sicherheitsvorschriften sind von allen Mitarbeitern strikt einzuhalten.',
            formulaBreakdown: 'Die Sicherheitsvorschriften (Subjekt) + sind (sein) + von allen Mitarbeitern + strikt einzuhalten (zu + Infinitiv = müssen eingehalten werden).',
            literalTranslation: {
              en: 'The safety regulations are by all employees strictly to keep.',
              fa: 'مقررات ایمنی توسط همه کارکنان به طور اکید باید رعایت شوند.',
              prs: 'مقررات ایمنی و حفظ‌الصحه باید از سوی تمامی کارمندان به گونه جدی رعایت گردد.',
              tr: 'Güvenlik kurallarına tüm çalışanlar tarafından harfiyen uyulmalıdır.',
              ar: 'يجب الالتزام الصارم بتعليمات السلامة من قِبل كافة العاملين.',
              es: 'Las normas de seguridad deben ser observadas estrictamente por todos los empleados.'
            },
            fluentTranslation: {
              en: 'Safety regulations must be adhered to strictly by all staff members.',
              fa: 'رعایت دقیق مقررات ایمنی از سوی تمامی کارکنان الزامی و اجباری است.',
              prs: 'رعایت مقررات ایمنی کار از طرف همه پرسونل کاملاً حتمی و لازم‌الاجرا می‌باشد.',
              tr: 'Güvenlik talimatlarına bütün çalışanlar tarafından mutlak surette riayet edilmelidir.',
              ar: 'يتعين على جميع الموظفين التقيد التام بقواعد السلامة المهنية.',
              es: 'Todos los colaboradores tienen la obligación ineludible de acatar las directrices de seguridad.'
            }
          }
        ]
      },
      practiceTasks: [
        'Formulieren Sie den Satz "Das Problem kann gelöst werden" auf 3 verschiedene Arten um (mit sich lassen, sein + zu, und -bar).',
        'Verfassen Sie eine formelle Bekanntmachung mit 2 "sein + zu + Infinitiv"-Konstruktionen.'
      ]
    },
    vocabularies: [
      { id: 'c1_2_v11', word: 'das Narrativ', article: 'das', plural: 'die Narrative', ipa: '/naʁaˈtiːf/', translation: { en: 'narrative / framing story', fa: 'روایت کلان / گفتمان مسلط', prs: 'روایت مسلط / دیدگاه شکل‌گرفته', tr: 'anlatı / söylem', ar: 'السردية / الخطاب المهيمن', es: 'narrativa' } },
      { id: 'c1_2_v12', word: 'die Hermeneutik', article: 'die', plural: 'die Hermeneutiken', ipa: '/hɛʁmeˈnɔɪ̯tɪk/', translation: { en: 'hermeneutics / science of interpretation', fa: 'هرمنوتیک / علم تفسیر و تاویل', prs: 'هرمنوتیک / علم تفسیر متن', tr: 'hermenötik / yorumbilim', ar: 'الهرمينيوطيقا / علم التأويل', es: 'hermenéutica' } },
      { id: 'c1_2_v13', word: 'das Feuilleton', article: 'das', plural: 'die Feuilletons', ipa: '/fœjəˈtɔ̃ː/', translation: { en: 'cultural section of a newspaper', fa: 'بخش فرهنگی-ادبی روزنامه', prs: 'بخش فرهنگی و نقد ادبی اخبار', tr: 'kültür-sanat eki', ar: 'الصفحة الثقافية والفكرية في الصحيفة', es: 'sección cultural / folletín' } },
      { id: 'c1_2_v14', word: 'die Authentizität', article: 'die', plural: 'die Authentizitäten', ipa: '/aʊ̯tɛntit͡siˈtɛːt/', translation: { en: 'authenticity', fa: 'اصالت / اعتبار واقعی', prs: 'اصالت و اعتبار حقیقی', tr: 'özgünlük / sahicilik', ar: 'الأصالة والموثوقية', es: 'autenticidad' } },
      { id: 'c1_2_v15', word: 'die Faktenlage', article: 'die', plural: 'die Faktenlagen', ipa: '/ˈfaktn̩ˌlaːɡə/', translation: { en: 'factual situation / state of facts', fa: 'وضعیت حقایق و شواهد موجود', prs: 'حقایق و اسناد موجود', tr: 'olgusal durum', ar: 'الوقائع الثابتة / الأدلة القائمة', es: 'conjunto de hechos comprobados' } }
    ],
    videoClip: {
      title: 'TV-Debatte im Presseclub: Medienästhetik und Desinformation',
      scenario: 'Journalisten diskutieren über generative KI, Deepfakes und Informationsverifikation im öffentlich-rechtlichen Rundfunk.',
      category: 'interview',
      duration: '03:00',
      speakers: ['Moderatorin', 'Chefredakteur'],
      keyPhrases: [
        'Die Authentizität digitaler Quellen lässt sich schwer verifizieren.',
        'Hierbei ist mit größter redaktioneller Sorgfalt vorzugehen.',
        'Gefälschte Narrative sind von fundierten Recherchen kaum zu unterscheiden.'
      ],
      germanTranscript: [
        'Moderatorin: Herzlich willkommen zum Presseclub! Lässt sich im Zeitalter generativer KI die Authentizität von Bildmaterial noch zweifelsfrei nachweisen?',
        'Chefredakteur: Frau Kollegin, dies ist in der Tat die Kardinalfrage. Deepfakes lassen sich heutzutage kaum noch mit bloßem Auge entlarven.',
        'Moderatorin: Welche Prüfmechanismen sind demnach in den Redaktionen zu etablieren?',
        'Chefredakteur: Kryptografische Wasserzeichen und quellengestützte Verifikationsverfahren sind unverzüglich einzuführen.',
        'Moderatorin: Es ist festzuhalten, dass Medienkompetenz damit zu einer unverzichtbaren demokratischen Bürgerpflicht avanciert.'
      ],
      translatedTranscript: [
        {
          en: 'Moderator: Welcome to the Press Club! In the era of generative AI, can the authenticity of visual material still be verified beyond doubt?',
          fa: 'مجری: به کلوب مطبوعات خوش آمدید! در عصر هوش مصنوعی زاینده، آیا اصالت تصاویر و ویدیوها هنوز بدون شک قابل اثبات است؟',
          prs: 'گرداننده: به برنامه نقد مطبوعات خوش آمدید! در عصر هوش مصنوعی تولیدکننده، آیا اصالت ویدیوها هنوز به یقین ثابت شده می‌تواند؟',
          tr: 'Moderatör: Basın Kulübü\'ne hoş geldiniz! Üretken yapay zeka çağında görsel materyallerin doğruluğu kesin olarak kanıtlanabilir mi?',
          ar: 'مقدمة البرنامج: أهلاً بكم في نادي الصحافة! في عصر الذكاء الاصطناعي التوليدي، هل يمكن إثبات صحة الصور دون أدنى شك؟',
          es: 'Moderadora: ¡Bienvenidos al Club de Prensa! En la era de la IA generativa, ¿aún se puede verificar fehacientemente la autenticidad visual?'
        },
        {
          en: 'Editor-in-Chief: Colleague, this is indeed the cardinal question. Deepfakes can hardly be unmasked with the naked eye nowadays.',
          fa: 'سردبیر: همکار گرامی، این حقیقتاً پرسش بنیادین است. امروزه دیپ‌فیک‌ها به‌ندرت با چشم غیرمسلح قابل تشخیص هستند.',
          prs: 'سرمحرر: همکار محترمه، این واقعاً سوال اساسی است. تصاویر جعلی و دیپ‌فیک امروزه به چشم عادی قابل تشخیص نیستند.',
          tr: 'Genel Yayın Yönetmeni: Meslektaşım, bu gerçekten can alıcı soru. Deepfake içerikler çıplak gözle neredeyse ayırt edilemiyor.',
          ar: 'رئيس التحرير: زميلتي، هذا هو السؤال المحوري بالفعل. لم يعد بالإمكان كشف التزييف العميق بالعين المجردة.',
          es: 'Redactor jefe: Estimada colega, esa es la pregunta cardinal. Hoy en día los deepfakes apenas se detectan a simple vista.'
        },
        {
          en: 'Moderator: What verification mechanisms must therefore be established in newsrooms?',
          fa: 'مجری: بنابراین چه سازوکارهای راستی‌آزمایی باید در تحریریه‌ها مستقر شود؟',
          prs: 'گرداننده: بنابرین چه سیستم‌های تثبیت صحت خبر باید در دفاتر مطبوعات فعال گردد؟',
          tr: 'Moderatör: Bu durumda yazı işlerinde hangi denetim mekanizmaları kurulmalıdır?',
          ar: 'مقدمة البرنامج: ما آليات التحقق التي يجب ترسيخها في غرف الأخبار إذن؟',
          es: 'Moderadora: ¿Qué mecanismos de verificación deben establecerse en las redacciones?'
        },
        {
          en: 'Editor-in-Chief: Cryptographic watermarks and source-based verification protocols must be introduced without delay.',
          fa: 'سردبیر: واترمارک‌های رمزنگاری‌شده و پروتکل‌های راستی‌آزمایی مبتنی بر منبع باید بدون اتلاف وقت اجرا شوند.',
          prs: 'سرمحرر: نشانه‌های رمزگذاری‌شده و پروسه‌های تثبیت منبع باید بدون معطلی تطبیق شوند.',
          tr: 'Genel Yayın Yönetmeni: Kriptografik filigranlar ve kaynak doğrulama protokolleri derhal hayata geçirilmelidir.',
          ar: 'رئيس التحرير: يجب تطبيق العلامات المائية المشفرة وبروتوكولات التحقق من المصادر فوراً دون إبطاء.',
          es: 'Redactor jefe: Deben implementarse sin demora marcas de agua criptográficas y protocolos de verificación de fuentes.'
        },
        {
          en: 'Moderator: It is evident that media literacy has thereby advanced to an indispensable democratic civic duty.',
          fa: 'مجری: باید اذعان کرد که سواد رسانه‌ای به یک وظیفه شهروندی دموکراتیک و انکارناپذیر ارتقا یافته است.',
          prs: 'گرداننده: باید تصریح نمود که سواد رسانه‌ای اکنون به یک وجیبه اساسی شهروندی دموکراتیک تبدیل شده است.',
          tr: 'Moderatör: Medya okuryazarlığının vazgeçilmez bir demokratik vatandaşlık görevine dönüştüğü sabittir.',
          ar: 'مقدمة البرنامج: بات من المؤكد أن التربية الإعلامية قد غدت واجباً مدنياً وديمقراطياً لا غنى عنه.',
          es: 'Moderadora: Cabe constatar que la alfabetización mediática se ha convertido en un deber cívico indispensable.'
        }
      ]
    },
    examTip: {
      standard: 'C1 (Goethe-Zertifikat C1 & telc C1 Hochschule)',
      module: 'Mündlicher Ausdruck (Präsentation & Diskussion)',
      tip: {
        en: 'In C1 speaking exams, replace simple "man kann" constructions with "Es lässt sich unschwer feststellen, dass..." or "Hierbei ist zu beachten, dass...". This demonstrates the academic fluency required for highest grades.',
        fa: 'در مصاحبه شفاهی C1، به جای "man kann" از "Es lässt sich feststellen..." یا "Hierbei ist zu beachten..." استفاده کنید تا تسلط شما بر ساختارهای فاخر اثبات شود.',
        prs: 'در بخش صحبت امتحان C1، به جای جملات ساده "man kann"، همیشه از تعبیرات عالی مثل "Es lässt sich feststellen..." یا "Hierbei ist zu berücksichtigen..." استفاده نمایید تا نمره عالی دانشگاهی بگیرید.',
        tr: 'C1 sözlü sınavında "man kann" yerine "Es lässt sich feststellen" gibi akademik kalıplar kullanın.',
        ar: 'في الاختبار الشفوي لـ C1 استبدل العبارات البسيطة ببدائل مثل "Es lässt sich feststellen" لإبراز تمكنك الأكاديمي.',
        es: 'En el examen oral de C1, sustituye "man kann" por construcciones cultas como "Es lässt sich konstatieren".'
      }
    },
    exercises: [
      {
        id: 'ex_c1_2_3_a',
        type: 'multiple_choice',
        instruction: {
          en: 'Identify the sentence containing a passive replacement with "sein + zu + Infinitiv" expressing necessity.',
          fa: 'جمله‌ای که دارای ساختار جانشین مجهول "sein + zu + مصدر" برای بیان الزام است را انتخاب کنید.',
          prs: 'ساختار جانشین مجهول دال بر ضرورت را پیدا کنید.',
          tr: 'Zorunluluk bildiren "sein + zu + mastar" yapısındaki cümleyi bulunuz.',
          ar: 'حدد الجملة المتضمنة بديلاً للمجهول بصيغة "sein + zu + المصدر" المفيدة للوجوب.',
          es: 'Identifica la oración con la alternativa pasiva "sein + zu + infinitivo" que expresa necesidad.'
        },
        prompt: 'Welcher Satz drückt eine unbedingte Notwendigkeit im Passiversatz aus?',
        options: [
          'Die ethischen Richtlinien sind von allen Medienakteuren ausnahmslos einzuhalten.',
          'Die ethischen Richtlinien lassen sich von allen Akteuren einhalten.',
          'Die ethischen Richtlinien sind leicht einzuhalten.',
          'Die ethischen Richtlinien haben sich als einhaltbar erwiesen.'
        ],
        correctAnswer: 'Die ethischen Richtlinien sind von allen Medienakteuren ausnahmslos einzuhalten.',
        explanation: {
          en: '"sein + zu + Infinitiv" without qualifying evaluative adverbs ("leicht/schwer") denotes necessity ("müssen eingehalten werden").',
          fa: '"sein + zu + مصدر" بدون قیدهای سهولت/دشواری (مثل leicht/schwer) بیانگر الزام قطعی ("باید رعایت شوند") است.',
          prs: 'ساختار sein + zu + مصدر بدون قید آسان یا مشکل نشان‌دهنده وجوب و حتمیت است.',
          tr: '"sein + zu + mastar", "leicht/schwer" gibi niteleyiciler olmadan kullanıldığında zorunluluk ("müssen") bildirir.',
          ar: 'التركيب "sein + zu + المصدر" دون اقترانه بظروف التيسير أو التعسير يفيد الوجوب الحتمي ("يجب الالتزام بها").',
          es: '"sein + zu + infinitivo" sin modificadores como "leicht/schwer" expresa obligación estricta ("deben cumplirse").'
        }
      },
      {
        id: 'ex_c1_2_3_b',
        type: 'fill_blank',
        instruction: {
          en: 'Insert the appropriate hermeneutic academic noun.',
          fa: 'اسم تخصصی هرمنوتیک علمی مناسب را در جای خالی قرار دهید.',
          prs: 'اصطلاح مناسب تاویل متن را بنویسید.',
          tr: 'Hermeneutik bağlamına uygun akademik ismi yerleştiriniz.',
          ar: 'ضع الاسم الأكاديمي الدال على التفسير والتأويل النصي العميق.',
          es: 'Inserta el sustantivo académico adecuado en el contexto hermenéutico.'
        },
        prompt: 'Die differenzierte _______ literarischer Texte erfordert ein tiefes historisches und philosophisches Problembewusstsein.',
        options: [
          'Exegese',
          'Ablenkung',
          'Verschleierung',
          'Nachahmung'
        ],
        correctAnswer: 'Exegese',
        explanation: {
          en: '"Exegese" (critical textual analysis / interpretation) is the formal academic term for in-depth hermeneutic textual interrogation.',
          fa: '"Exegese" (تفسیر و تأویل انتقادی و موشکافانه متن) واژه‌ای فاخر و دانشگاهی برای تحلیل عمیق متون است.',
          prs: 'کلمه Exegese به معنای تفسیر عمیق و تخصصی متن می‌باشد.',
          tr: '"Exegese", metinlerin derinlemesine eleştirel yorumlanması ve tefsiri anlamına gelen akademik bir terimdir.',
          ar: 'المصطلح "Exegese" يعني التفسير النقدي والتأويل العميق للنصوص.',
          es: '"Exégesis" es el término erudito para el análisis interpretativo y crítico profundo de textos.'
        }
      },
      {
        id: 'ex_c1_2_3_c',
        type: 'sentence_reorder',
        instruction: {
          en: 'Form an academic sentence on media criticism.',
          fa: 'جمله نقد رسانه را به ترتیب دقیق دانشگاهی مرتب کنید.',
          prs: 'جمله نقد رسانه‌ای را مرتب سازید.',
          tr: 'Medya eleştirisi cümlesini kurallı sözdizimiyle sıralayın.',
          ar: 'رتب جملة النقد الإعلامي وفق النسق الأكاديمي الرفيع.',
          es: 'Ordena la oración de crítica mediática con sintaxis culta.'
        },
        prompt: 'Bringen Sie die Satzteile in die korrekte Reihenfolge:',
        options: [
          'Kritische Medienkompetenz befähigt',
          'Bürgerinnen und Bürger',
          'zur Dekonstruktion subtiler',
          'manipulativer Framing-Strategien.'
        ],
        correctAnswer: [
          'Kritische Medienkompetenz befähigt',
          'Bürgerinnen und Bürger',
          'zur Dekonstruktion subtiler',
          'manipulativer Framing-Strategien.'
        ],
        explanation: {
          en: 'Subject, transitive verb ("befähigt"), accusative personal object ("Bürgerinnen und Bürger"), and prepositional modifier with genitive attribute ("zur Dekonstruktion subtiler manipulativer Framing-Strategien").',
          fa: 'فاعل، فعل متعدی، مفعول انسانی در حالت رایی، و متمم حرف اضافه‌ای zur همراه با صفت‌های ملکی.',
          prs: 'ترتیب درست: فاعل، فعل، مفعول و متمم هدف با صفات توصیفی.',
          tr: 'Özne, fiil, nesne ve "zur" edatlı tamlama.',
          ar: 'الفاعل، الفعل المتعدي، المفعول به، ومتمم الجر الدال على التمكين مع النعوت المضافة.',
          es: 'Sujeto, verbo ("befähigt"), objeto directo y complemento de régimen con genitivo.'
        }
      }
    ],
  }
  ,
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
        id: 'c1_2_adversativ_rule',
        level: 'C1.2',
        germanTitle: 'Adversative Konnektoren in juristischer Argumentation (wohingegen, indessen)',
        formula: 'Hauptsatz 1, wohingegen + Subjekt + (...) + finites Verb || Hauptsatz 1; indessen + finites Verb + Subjekt',
        explanation: {
          en: 'Adversative connectives (wohingegen, während, indessen) contrast distinct legal scenarios with analytical precision.',
          fa: 'حروف ربط تقابلی (wohingegen, indessen) احکام و پرونده‌های حقوقی متمایز را به دقت با یکدیگر مقایسه می‌کنند.',
          prs: 'کلمات ربطی تقابلی برای مقایسه دو حکم حقوقی.',
          tr: 'Karşıtlık bağlaçları farklı hukuki hükümleri ve olayları analitik titizlikle karşılaştırır.',
          ar: 'تتيح الروابط التقابلية المضاهاة الدقيقة بين الأوضاع القانونية والأحكام القضائية المتمايزة.',
          es: 'Los conectores adversativos contraponen supuestos fácticos con exactitud analítica.'
        },
        examples: [
          {
            german: 'Der Bund besitzt die ausschließliche Kompetenz für das Währungsrecht, wohingegen das Schulwesen im Zuständigkeitsbereich der Länder verbleibt.',
            formulaBreakdown: 'Hauptsatz 1 + , wohingegen (Subjunktion) + Subjekt + Verb am Ende.',
            literalTranslation: {
              en: 'The Federation possesses exclusive competence for monetary law, whereas schooling remains in the jurisdiction of the States.',
              fa: 'دولت فدرال صلاحیت انحصاری قانون پولی را دارد، در حالی که آموزش در حیطه صلاحیت ایالت‌ها باقی می‌ماند.',
              prs: 'حکومت فدرال صلاحیت پولی دارد اما آموزش در اختیار ایالات است.',
              tr: 'Para basma yetkisi münhasıran federal devlete aittir, oysa eğitim eyaletlerin yetki alanındadır.',
              ar: 'تختص الدولة الفيدرالية حصرياً بالتشريع النقدي، في حين يظل قطاع التعليم تحت ولاية الولايات.',
              es: 'La Federación ostenta competencia exclusiva en legislación monetaria, al tiempo que la educación permanece bajo jurisdicción de los Länder.'
            },
            fluentTranslation: {
              en: 'The Federal Government exercises exclusive jurisdiction over monetary law, whereas the educational system resides within the constitutional purview of the individual States.',
              fa: 'دولت فدرال از صلاحیت انحصاری در حوزه حقوق پولی برخوردار است، حال آنکه امور آموزشی در قلمرو اختیارات قانون اساسی ایالت‌ها مستقر می‌باشد.',
              prs: 'صلاحیت انحصاری سیاست‌های مالی به دولت مرکزی تعلق دارد، در حالی که نظام معارف جزو اختیارات ایالات به شمار می‌رود.',
              tr: 'Mali mevzuat tümüyle federal devletin inhisarında bulunurken, eğitim işleri eyaletlerin anayasal yetki sahasında bırakılmıştır.',
              ar: 'تنفرد السلطة الاتحادية بالولاية الحصرية على النظام النقدي، بينما تندرج المنظومة التعليمية ضمن الاختصاص الدستوري للولايات.',
              es: 'El Estado federal goza de jurisdicción exclusiva sobre el régimen monetario, mientras que el sistema escolar recae en la esfera de competencias de los Länder.'
            }
          }
        ]
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
  }
  ,
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
        tr: 'Edebiyat kuramcıları Frankfurt\'ta Adorno\'nun estetik kuramı ve kültür endüstrisi eleştirisini tartışıyor.',
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
        tr: 'Walter Benjamin\'in teknik olarak yeniden üretilebilirlik çağında "Aura" kavramı üzerine radyo denemesini dinleyin.',
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
        tr: 'Adorno\'nun "Minima Moralia" eserinden bir aforizmayı diyalektik düşünce ve üslup inceliği açısından inceleyin.',
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
        id: 'c1_2_verallgemeinernd_rule',
        level: 'C1.2',
        germanTitle: 'Verallgemeinernde Konzessivsätze (wie / was / wer ... auch immer)',
        formula: '[W-Wort] + Subjekt + (...) + auch immer + finites Verb, [Hauptsatz]',
        explanation: {
          en: 'Generalizing concessive clauses assert universal validity regardless of how circumstances unfold.',
          fa: 'جملات شرطی تعمیم‌یافته اعتبار جهان‌شمول یک اصل را فارغ از اینکه شرایط چگونه پیش رود بیان می‌کنند.',
          prs: 'جملات بیان‌کننده شمولیت عام فارغ از شرایط خاص.',
          tr: 'Genelleştirici ödün cümleleri, durum ne olursa olsun hükmün evrensel geçerliliğini bildirir.',
          ar: 'تفيد الجمل الاستدراكية شمولية المبدأ بصرف النظر عن تقلبات الأحوال والظروف.',
          es: 'Las oraciones concesivas generalizadoras afirman la validez universal de un principio.'
        },
        examples: [
          {
            german: 'Wie hermetisch die Metaphern auch anmuten mögen, sie entfalten eine suggestive Kraft.',
            formulaBreakdown: 'Wie hermetisch (W-Wort + Adjektiv) + die Metaphern (Subjekt) + auch anmuten mögen (Verb), + Hauptsatz.',
            literalTranslation: {
              en: 'How hermetic the metaphors also seem may, they unfold a suggestive power.',
              fa: 'هرچقدر هم استعاره‌ها نفوذناپذیر به نظر رسند، قدرتی القایی را آشکار می‌سازند.',
              prs: 'هر قدر هم که تشبیهات پیچیده باشند، قدرت بیان بالایی دارند.',
              tr: 'Metaforlar ne kadar kapalı görünürse görünsün, büyüleyici bir güç yayarlar.',
              ar: 'مهما بدت الاستعارات غامضة ومغلقة، فإنها تبث طاقة إيحائية آسرة.',
              es: 'Por herméticas que puedan parecer las metáforas, despliegan una fuerza sugestiva innegable.'
            },
            fluentTranslation: {
              en: 'However hermetic these metaphors may initially appear, they unleash an intensely evocative poetic power.',
              fa: 'هر اندازه که استعاره‌های ادبی در بدایت امر دیریاب و رمزآلود جلوه نمایند، مع‌الوصف نیروی القایی و زیبایی‌شناختی پرطنین خود را متجلی می‌سازند.',
              prs: 'اگرچه استعاره‌های متن در نگاه نخست پیچیده معلوم شوند، اما زیبایی و تاثیر کلامی شگفت‌انگیزی را در ذهن ایجاد می‌کنند.',
              tr: 'Kelimelerdeki sembolik örgüler ilk bakışta ne denli anlaşılmaz görünse de, okuyucuda tarifsiz bir imgesel derinlik uyandırır.',
              ar: 'ومهما بدت الصور البيانية موغلة في الرمزية والإبهام للوهلة الأولى، فإنها تفجر شحنة جمالية بالغة الإيحاء والتأثير.',
              es: 'Por impenetrable que se antoje el entramado metafórico a primera vista, despliega una insospechada fecundidad poética.'
            }
          }
        ]
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
  }
  ,
  {
    id: 'c1_2_lek6',
    lektionNumber: 6,
    level: 'C1.2',
    title: 'Diplomatie, Geopolitik und Multilateralismus',
    subTitle: 'Völkerrechtliche Verträge, Souveränitätsfragen und diplomatischer Code (C1.2 Niveau)',
    topic: 'Internationale Organisationen, Konfliktmediation und Verhandlungssprache',
    fotoHoergeschichte: {
      title: 'Foto-Hörgeschichte: Krisengipfel im Auswärtigen Amt in Berlin',
      imagePrompt: 'Diplomats and international envoys gathered at the Auswärtiges Amt in Berlin for high-stakes multilateral treaty negotiations.',
      imageTheme: 'Diplomatische Verhandlungen',
      audioDuration: '03:40',
      transcript: [
        { speaker: 'Staatssekretär Lindner', text: 'Die Wiederbelebung des multilateralen Regelwerks erfordert schmerzhafte Zugeständnisse aller involvierten Akteure.' },
        { speaker: 'Botschafterin Al-Mansoor', text: 'Einseitige Deklarationen untergraben das völkerrechtliche Gewaltverbot nach Art. 2 Ziff. 4 der UN-Charta.' },
        { speaker: 'Staatssekretär Lindner', text: 'Daher plädieren wir für ein verbindliches Zusatzprotokoll mit verifizierbaren Kontrollmechanismen.' }
      ],
      summary: {
        en: 'Diplomats at the Federal Foreign Office in Berlin negotiate verifiable multilateral treaties and conflict mediation protocols.',
        fa: 'دیپلمات‌ها در وزارت امور خارجه آلمان پیرامون معاهدات بین‌المللی و سازوکارهای راستی‌آزمایی توافق‌نامه‌ها مذاکره می‌کنند.',
        prs: 'مذاکرات عالی دیپلوماتیک در برلین درباره صلح بین‌المللی و حقوق ملل.',
        tr: 'Berlin Dışişleri Bakanlığı\'nda diplomatlar çok taraflı anlaşmalar ve denetim mekanizmaları üzerinde müzakere yürütüyor.',
        ar: 'دبلوماسيون في وزارة الخارجية ببرلين يتفاوضون حول معاهدات متعددة الأطراف وبروتوكولات وساطة ملزمة.',
        es: 'Diplomáticos en Berlín negocian tratados multilaterales vinculantes y protocolos de mediación.'
      }
    },
    sectionA: {
      title: 'Mussawi A: Sprechen & Diplomatische Verhandlung',
      focus: 'Sprechen & Verhandeln (Klauselverhandlungen & Deklarationen)',
      description: {
        en: 'Formulate highly tactful yet legally rigorous diplomatic interventions, reservations, and consensus statements.',
        fa: 'فرموله‌بندی بیانیه‌های دیپلماتیک دقیق، ابراز ملاحظات مشروط و متن‌بندی توافق‌نامه‌های صلح بین‌المللی.',
        prs: 'صحبت کردن با لحن محترمانه و دقیق دیپلوماتیک.',
        tr: 'Yüksek nezaket ve hukuki hassasiyet gerektiren diplomatik müdahaleler ve uzlaşı metinleri formüle edin.',
        ar: 'صياغة مداخلات دبلوماسية رفيعة تتسم باللباقة والحزم القانوني مع إبداء التحفظات المشروطة.',
        es: 'Formula intervenciones diplomáticas formales y declaraciones de consenso.'
      },
      content: 'Die Unterzeichnerstaaten bekräftigen ihre unverbrüchliche Bindung an die Grundsätze der territorialen Integrität.',
      audioText: 'Es gilt, über strittige Grenzverläufe in einem ergebnisoffenen, jedoch bindenden Schiedsverfahren Einvernehmen zu erzielen.',
      practiceTasks: [
        'Führen Sie ein diplomatisches Schlichtungsgespräch zu einem Ressourcenkonflikt.',
        'Verwenden Sie Formeln wie: "Wir hegen die begründete Erwartung, dass...", "Dies entbehrt jeglicher völkerrechtlichen Grundlage".'
      ]
    },
    sectionB: {
      title: 'Mussawi B: Fachwortschatz & Hören',
      focus: 'Hören & Völkerrecht (Vorlesung: Die Bindungswirkung von UN-Resolutionen)',
      description: {
        en: 'Understand advanced international law lectures distinguishing between non-binding General Assembly resolutions and binding Chapter VII Security Council decisions.',
        fa: 'شنیدن سخنرانی دانشگاهی درباره قدرت الزام‌آور قطعنامه‌های فصل هفتم شورای امنیت در مقایسه با مصوبات مجمع عمومی سازمان ملل.',
        prs: 'شنیدن درس حقوق بین‌الملل درباره صلاحیت‌های شورای امنیت.',
        tr: 'BM Güvenlik Konseyi 7. Bölüm kararları ile Genel Kurul tavsiye kararları arasındaki hukuki farkları dinleyin.',
        ar: 'فهم محاضرات القانون الدولي التي تميز بين قرارات الجمعية العامة التوصية وقرارات مجلس الأمن الملزمة.',
        es: 'Comprende conferencias de derecho internacional sobre la fuerza vinculante de las resoluciones de la ONU.'
      },
      content: 'Wissenschaftlicher Vortrag über Völkergewohnheitsrecht und Ius Cogens.',
      audioTranscript: 'Normen des Ius Cogens genießen absoluten Vorrang vor bilateralen Verträgen und lassen keinerlei völkervertragliche Derogation zu.',
      practiceTasks: [
        'Definieren Sie "Ius Cogens" und "Gewohnheitsrecht".',
        'Prägen Sie sich Termini wie "Sanktionsregime", "Ratifizierung" und "Präambel" ein.'
      ]
    },
    sectionC: {
      title: 'Mussawi C: Fachdialoge & Vermittlung',
      focus: 'Mündliche Interaktion (Bilateraler Botschafteraustausch)',
      description: {
        en: 'Conduct subtle diplomatic exchanges clarifying misinterpretations without escalating geopolitical friction.',
        fa: 'گفت‌وگوی ظریف میان سفرا جهت رفع سوءتفاهم‌های سیاسی بدون دامن زدن به بحران‌های ژئوپلیتیک.',
        prs: 'گفتگوی رسمی میان نمایندگان دو کشور برای حل اختلافات صلح‌آمیز.',
        tr: 'Kriz tırmandırmadan yanlış anlamaları gideren hassas büyükelçilik ikili görüşmesi gerçekleştirin.',
        ar: 'إجراء محادثات ثنائية بين السفراء لتوضيح الالتباسات الدبلوماسية دون تصعيد التوترات.',
        es: 'Conduce diálogos diplomáticos bilaterales clarificando malentendidos sin escalada de tensión.'
      },
      content: 'Konsultationen zwischen Sondergesandten.',
      audioTranscript: 'A: "Unsere Regierung nimmt mit Befremden zur Kenntnis, dass die Vereinbarungen verzögert umgesetzt werden." - B: "Wir versichern Ihnen, dass die Verzögerungen rein verfahrenstechnischer Natur sind und keineswegs den politischen Konsens berühren."',
      practiceTasks: [
        'Äußern Sie formelle Besorgnis ("mit Befremden zur Kenntnis nehmen").',
        'Substantivieren Sie Absichten diplomatisch.'
      ]
    },
    sectionD: {
      title: 'Mussawi D: Textanalyse & Vertragstext',
      focus: 'Lesen & Völkerrechtliche Hermeneutik (Wiener Vertragsrechtskonvention)',
      description: {
        en: 'Analyze articles of the Vienna Convention on the Law of Treaties regarding treaty interpretation and invalidation.',
        fa: 'تحلیل موادی از کنوانسیون وین درباره حقوق معاهدات در خصوص تفسیر حسن نیت و بطلان قراردادها.',
        prs: 'تحلیل متن کنوانسیون وین درباره قوانین بین‌المللی معاهدات.',
        tr: 'Viyana Antlaşmalar Hukuku Sözleşmesi maddelerini yorum ilkeleri açısından inceleyin.',
        ar: 'تحليل مواد اتفاقية فيينا لقانون المعاهدات المتعلقة بقواعد التفسير وبطلان الاتفاقيات.',
        es: 'Analiza artículos de la Convención de Viena sobre el Derecho de los Tratados.'
      },
      readingText: {
        type: 'Völkerrechtlicher Vertrag (Auszug)',
        title: 'Wiener Übereinkommen über das Recht der Verträge (Art. 31)',
        body: 'Ein Vertrag ist nach Treu und Glauben in Übereinstimmung mit der gewöhnlichen, seinen Bestimmungen in ihrem Zusammenhang zukommenden Bedeutung und im Lichte seines Zieles und Zweckes auszulegen. Neben dem Zusammenhang sind in gleicher Weise jede spätere Übereinkunft zwischen den Vertragsparteien über die Auslegung des Vertrages und jede spätere Übung bei der Anwendung des Vertrages zu berücksichtigen.'
      },
      practiceTasks: [
        'Extrahieren Sie die drei Auslegungskriterien nach Art. 31 WÜRV (Wortlaut, Kontext, Telos).',
        'Definieren Sie den Begriff "Treu und Glauben" im Völkerrecht.'
      ]
    },
    sectionE: {
      title: 'Mussawi E: Grammatik & Formale Register',
      focus: 'Grammatik (Konditional- und Finalsätze mit "auf dass", "damit", "sofern")',
      description: {
        en: 'Command archaic and formal final and conditional conjunctions ("auf dass", "sofern", "in der Absicht, zu...") in state treaties.',
        fa: 'تسلط بر حروف ربط هدفی و شرطی عالی (auf dass, sofern, auf dass hin) در متن معاهدات رسمی دولتی.',
        prs: 'آموختن کاربرد حروف ربط بسیار رسمی در اسناد بین‌المللی.',
        tr: 'Resmi antlaşma dilinde amaç ve şart bağlaçlarında ("auf dass", "sofern") ustalaşın.',
        ar: 'إتقان الروابط الغائية والشرطية الكلاسيكية الرفيعة ("auf dass / لكيما"، "sofern / شريطة أن") في المعاهدات الدولية.',
        es: 'Domina las conjunciones finales y condicionales arcaicas y solemnes en textos diplomáticos.'
      },
      grammarRule: {
        id: 'c1_2_staatsvertrag_rule',
        level: 'C1.2',
        germanTitle: 'Feierliche formelle Ziel- und Bedingungsangaben in Staatsverträgen',
        formula: 'auf dass + Konjunktiv I || zwecks / zum Zwecke + Genitiv || sofern + Nebensatz',
        explanation: {
          en: 'Solemn diplomatic treaties employ formal final and conditional constructions (auf dass, zwecks) for solemn covenants.',
          fa: 'اسناد و معاهدات دیپلماتیک از ساختارهای هدف‌مند و شرطی فوق‌رسمی (auf dass, zwecks) برای تعهدات بین‌المللی استفاده می‌کنند.',
          prs: 'ساختارهای رسمی برای تدوین معاهدات بین‌المللی و دیپلماتیک.',
          tr: 'Uluslararası antlaşmalar bağlayıcı taahhütleri pekiştirmek için resmi amaç ve koşul yapıları kullanır.',
          ar: 'توظف المعاهدات الدولية تراكيب الغاية والشرط الاحتفالية (auf dass, zwecks) لإسباغ القداسة القانونية على الالتزام الدولي.',
          es: 'Los convenios diplomáticos solemnes emplean formulaciones finales y condicionales formales de máximo rigor.'
        },
        examples: [
          {
            german: 'Die Völker vereinbaren diesen Pakt, auf dass künftigen Generationen die Geißel des Krieges erspart bleibe.',
            formulaBreakdown: 'Die Völker (Subjekt) + vereinbaren (Verb) + , auf dass (Subjunktion) + erspart bleibe (Konjunktiv I Passiv).',
            literalTranslation: {
              en: 'The peoples agree this pact, so that to future generations the scourge of war spared remain.',
              fa: 'ملت‌ها این پیمان را منعقد می‌کنند تا نسل‌های آینده از بلای جنگ در امان مانند.',
              prs: 'ملت‌ها این پیمان را امضا می‌نمایند تا نسل‌های بعدی از عذاب جنگ نجات یابند.',
              tr: 'Halklar, gelecek nesiller savaş felaketinden korunsun diye bu paktı akdederler.',
              ar: 'تتوافق الشعوب على إبرام هذا الميثاق لكي تُجنب الأجيال القادمة ويلات الحرب وشرورها.',
              es: 'Los pueblos conciertan este pacto a fin de que a las generaciones venideras les sea evitado el flagelo de la guerra.'
            },
            fluentTranslation: {
              en: 'The nations conclude this solemn treaty to the end that future generations may be spared the devastating scourge of war.',
              fa: 'ملت‌های جهان پیمان شکوهمند حاضر را بدان غایت منعقد می‌دارند تا نسل‌های آینده از بلای خانمان‌سوز جنگ مصون و محفوظ بمانند.',
              prs: 'کشورها این عهدنامه تاریخی را به مقصد نجات نسل‌های فردا از آتش ویرانگر جنگ به امضا رسانیدند.',
              tr: 'Milletler, yarının nesillerini savaşın yıkıcı felaketlerinden ebediyen korumak gayesiyle işbu tarihi vesikayı imzalamaktadırlar.',
              ar: 'تتعاقد أمم الأرض على هذا الميثاق العتيد غيرةً على مصير الأجيال القادمة وسعياً لتجنيبها ويلات النزاعات المسلحة المدمرة.',
              es: 'Las naciones suscriben este solemne tratado con el propósito indeclinable de preservar a las generaciones venideras de los estragos de la guerra.'
            }
          }
        ]
      },
      practiceTasks: [
        'Formulieren Sie eine Vertragspräambel mit "auf dass".',
        'Verwenden Sie "sofern" zur Formulierung von Ratifikationsbedingungen.'
      ]
    },
    vocabularies: [
      { id: 'c1_2_v7', word: 'das Ius Cogens', article: 'das', plural: '-', ipa: '/juːs ˈkoːɡɛns/', translation: { en: 'peremptory norm of international law', fa: 'قاعده آمره در حقوق بین‌الملل', prs: 'قواعد آمره حقوق بین‌الملل که تخلف از آن ناممکن است', tr: 'emredici hukuk kuralı (jus cogens)', ar: 'القواعد الآمرة في القانون الدولي', es: 'ius cogens / norma imperativa' } },
      { id: 'c1_2_v8', word: 'die Ratifikation', article: 'die', plural: 'die Ratifikationen', ipa: '/ʁatifikaˈtsi̯oːn/', translation: { en: 'ratification', fa: 'تصویب نهایی پارلمانی معاهده', prs: 'تصویب رسمی معاهده در پارلمان', tr: 'onaylama / onay belgesi', ar: 'التصديق البرلماني على المعاهدة', es: 'ratificación' } },
      { id: 'c1_2_v9', word: 'derogieren', article: '', plural: '-', ipa: '/deʁoˈɡiːʁən/', translation: { en: 'to derogate / repeal partially', fa: 'فسخ جزئی یا نقض قاعده حقوقی', prs: 'لغو کردن جزئی ماده قانونی', tr: 'yürürlükten kaldırmak / istisna tutmak', ar: 'يُلغي جزئيًا / يُعطّل حكمًا قانونيًا', es: 'derogar' } }
    ],
    exercises: [
      {
        id: 'ex_c1_2_6_a',
        type: 'multiple_choice',
        instruction: {
          en: 'Identify the solemn final conjunction suitable for an international treaty preamble.',
          fa: 'حرف ربط هدفی فاخر و رسمی مناسب برای مقدمه یک معاهده بین‌المللی را انتخاب کنید.',
          prs: 'حرف ربط مناسب برای اسناد بین‌المللی را برگزینید.',
          tr: 'Uluslararası antlaşma başlangıcına uygun soylu amaç bağlacını seçin.',
          ar: 'اختر الرابط الغائي الكلاسيكي الرفيع الملائم لديباجة المعاهدات الدولية.',
          es: 'Selecciona la conjunción final solemne para el preámbulo de un tratado.'
        },
        prompt: 'Die Hohen Vertragsparteien stiften diese Konvention, _______ Gerechtigkeit und Frieden unter den Völkern dauerhaft gewahrt werden.',
        options: [
          'auf dass',
          'weil',
          'obwohl',
          'insofern'
        ],
        correctAnswer: 'auf dass',
        explanation: {
          en: '"auf dass" (+ subjunctive or present) is the traditional solemn final connector used in treaties and constitutions ("so that / in order that").',
          fa: '"auf dass" از حروف ربط هدفی بسیار رسمی و تاریخی است که در معاهدات و میثاق‌های بین‌المللی برای بیان هدف متعالی («تا اینکه / بدان منظور که») به کار می‌رود.',
          prs: 'کلمه auf dass در متون تاریخی و حقوقی برای بیان آرمان به کار می‌رود.',
          tr: '"auf dass", resmi ve tarihi metinlerde "... olsun diye / amacıyla" anlamında kullanılan amaç bağlacıdır.',
          ar: 'الرابط "auf dass" (لكيما / حتى يسود) هو الصيغة الاحتفالية التقليدية للديباجات الدولية.',
          es: '"auf dass" es la conjunción final solemne propia de tratados constitutivos y declaraciones.'
        }
      },
      {
        id: 'ex_c1_2_6_b',
        type: 'fill_blank',
        instruction: {
          en: 'Insert the appropriate diplomatic diplomatic noun.',
          fa: 'اسم دیپلماتیک دقیق برای بیان «پایبندی خدشه‌ناپذیر به معاهدات» را بنویسید.',
          prs: 'کلمه دیپلوماتیک مناسب را در جای خالی بنویسید.',
          tr: 'Diplomatik metne uygun ismi yerleştiriniz.',
          ar: 'ضع الاسم الدبلوماسي الدال على الالتزام الوثيق والصادق.',
          es: 'Inserta el término diplomático correspondiente a la lealtad jurídica.'
        },
        prompt: 'Verträge sind nach dem fundamentalen völkerrechtlichen Grundsatz von Treu und _______ zu erfüllen.',
        options: [
          'Glauben',
          'Zufall',
          'Gewalt',
          'Macht'
        ],
        correctAnswer: 'Glauben',
        explanation: {
          en: '"Treu und Glauben" (bona fides / good faith) is the foundational principle of treaty interpretation in German jurisprudence.',
          fa: '"Treu und Glauben" (حسن نیت / امانت‌داری) اصل بنیادین تفسیر و اجرای تعهدات در حقوق آلمان و بین‌الملل است.',
          prs: 'اصطلاح Treu und Glauben یعنی اصل حسن نیت در اجرای تعهدات.',
          tr: '"Treu und Glauben", dürüstlük ve iyi niyet kuralını ifade eden temel hukuki ilkedir.',
          ar: 'المبدأ "Treu und Glauben" يعني مبدأ حسن النية والأمانة في الوفاء بالعهود.',
          es: '"Treu und Glauben" es el principio cardinal de buena fe en el derecho germánico.'
        }
      },
      {
        id: 'ex_c1_2_6_c',
        type: 'sentence_reorder',
        instruction: {
          en: 'Reconstruct the diplomatic declaration in proper academic sequence.',
          fa: 'بیانیه دیپلماتیک را بر اساس اصول نحو رسمی زبان آلمانی مرتب کنید.',
          prs: 'جمله دیپلوماتیک را به ترتیب گرامری منظم سازید.',
          tr: 'Diplomatik bildiriyi kurallı sözdizimiyle düzenleyiniz.',
          ar: 'أعد ترتيب البيان الدبلوماسي وفق القواعد النحوية الرصينة.',
          es: 'Ordena la declaración diplomática con sintaxis formal.'
        },
        prompt: 'Bringen Sie die Satzteile in die korrekte Reihenfolge:',
        options: [
          'Die Staatengemeinschaft bekräftigt',
          'ihre uneingeschränkte Entschlossenheit',
          'zur friedlichen Beilegung',
          'aller zwischenstaatlichen Konflikte.'
        ],
        correctAnswer: [
          'Die Staatengemeinschaft bekräftigt',
          'ihre uneingeschränkte Entschlossenheit',
          'zur friedlichen Beilegung',
          'aller zwischenstaatlichen Konflikte.'
        ],
        explanation: {
          en: 'Subject ("Die Staatengemeinschaft"), verb ("bekräftigt"), accusative noun phrase ("ihre uneingeschränkte Entschlossenheit"), and prepositional modifier with genitive attribute ("zur friedlichen Beilegung aller zwischenstaatlichen Konflikte").',
          fa: 'فاعل، فعل متعدی، مفعول اسمی با صفت، و متمم حرف اضافه‌ای با مضاف‌الیه ملکی.',
          prs: 'ترتیب درست ارکان جمله رسمی دیپلوماتیک.',
          tr: 'Özne, fiil, sıfatlı nesne ve tamlamalı edat grubu.',
          ar: 'الفاعل، الفعل، المفعول به الموصوف، والمتمم المجرور المضاف.',
          es: 'Sujeto, verbo, sintagma nominal acusativo y complemento preposicional con genitivo.'
        }
      }
    ]
  },
  {
    id: 'c1_2_lek7',
    lektionNumber: 7,
    level: 'C1.2',
    title: 'Wissenschaftstheorie, Epistemologie und Paradigmenwechsel',
    subTitle: 'Popper, Kuhn, Inkommensurabilität und wissenschaftliche Revolutionen (C1.2 Niveau)',
    topic: 'Erkenntnistheorie, Wissenschaftsphilosophie und Methodenlehre',
    fotoHoergeschichte: {
      title: 'Foto-Hörgeschichte: Internationales Wissenschaftsphilosophie-Kolloquium in Wien',
      imagePrompt: 'The grand ceremonial hall of the University of Vienna where philosophers of science debate Thomas Kuhn\'s concept of paradigm shifts and Karl Popper\'s critical rationalism.',
      imageTheme: 'Wissenschaftstheorie in Wien',
      audioDuration: '03:45',
      transcript: [
        { speaker: 'Prof. Dr. Stegmüller', text: 'Wissenschaftlicher Fortschritt vollzieht sich nach Thomas Kuhn nicht kumulativ-linear, sondern durch diskontinuierliche Paradigmenwechsel.' },
        { speaker: 'Dr. Imre Lakatos', text: 'Dabei darf die Inkommensurabilität rivalisierender Paradigmen nicht in einen irrationalen Relativismus münden.' },
        { speaker: 'Prof. Dr. Stegmüller', text: 'Genau hier greift das Erfordernis methodologischer Forschungsprogramme, die empirischen Gehalt mit theoretischer Konsistenz versöhnen.' }
      ],
      summary: {
        en: 'Philosophers of science in Vienna debate whether scientific progress is cumulative or marked by revolutionary paradigm shifts.',
        fa: 'فیلسوفان علم در وین پیرامون اینکه آیا پیشرفت علمی انباشتی و خطی است یا از طریق تغییر پارادایم‌های انقلابی رخ می‌دهد بحث می‌کنند.',
        prs: 'بحث دانشمندان فلسفه علم درباره تغییر پارادایم‌های علمی.',
        tr: 'Viyana\'da bilim felsefecileri bilimsel ilerlemenin doğrusal mı yoksa devrimsel paradigma değişimleriyle mi gerçekleştiğini tartışıyor.',
        ar: 'فلاسفة العلم في فيينا يناقشون ما إذا كان التقدم العلمي تراكميًا أم ناتجًا عن تحولات جذرية في النماذج الإدراكية.',
        es: 'Filósofos de la ciencia debaten en Viena si el progreso científico es acumulativo o revolucionario.'
      }
    },
    sectionA: {
      title: 'Mussawi A: Sprechen & Epistemologischer Diskurs',
      focus: 'Sprechen & Disputieren (Kritischer Rationalismus vs. Konstruktivismus)',
      description: {
        en: 'Deliver an epistemological defense of empirical testability against radical constructivist skepticism.',
        fa: 'دفاع معرفت‌شناختی از آزمون‌پذیری تجربی در برابر شکاکیت برساخت‌گرایی رادیکال.',
        prs: 'مباحثه درباره روش‌های کسب علم و راه‌های اثبات فرضیه‌ها.',
        tr: 'Radikal yapılandırmacı şüpheciliğe karşı ampirik test edilebilirliği savunan felsefi konuşmalar yapın.',
        ar: 'تقديم مرافعة معرفية تدافع عن قابلية الاختبار التجريبي في مواجهة الشك البنائي الراديكالي.',
        es: 'Defiende la contrastabilidad empírica frente al escepticismo constructivista.'
      },
      content: 'Eine Theorie ist nur dann als wissenschaftlich zu qualifizieren, wenn sie prinzipiell an der Erfahrung scheitern kann.',
      audioText: 'Der methodische Zweifel Poppers verlangt die permanente Suche nach potentiellen Falsifikatoren anstelle naiver Verifikation.',
      practiceTasks: [
        'Diskutieren Sie das Induktionsproblem nach David Hume.',
        'Verwenden Sie philosophische Fachtermini: "Inkommensurabilität", "Korrespondenztheorie der Wahrheit", "Anomalie".'
      ]
    },
    sectionB: {
      title: 'Mussawi B: Fachwortschatz & Hören',
      focus: 'Hören & Vorlesung (Wissenschaftsgeschichte: Die Kopernikanische Wende)',
      description: {
        en: 'Analyze an academic history-of-science lecture dissecting the Copernican revolution as a prototypical paradigm shift.',
        fa: 'تحلیل سخنرانی تاریخ علم پیرامون انقلاب کوپرنیکی به عنوان نمونه بارز تغییر پارادایم علمی.',
        prs: 'شنیدن درس تاریخ علم درباره تغییر نگاه بشر به جهان هستی.',
        tr: 'Kopernik devrimini arketipik bir paradigma kayması olarak inceleyen bilim tarihi dersini dinleyin.',
        ar: 'تحليل محاضرة في تاريخ العلوم تتناول الثورة الكوبرنيكية كنموذج رائد للتحول المعرفي.',
        es: 'Comprende lecciones magistrales sobre la revolución copernicana como cambio de paradigma.'
      },
      content: 'Vortrag über Thomas S. Kuhn: Die Struktur wissenschaftlicher Revolutionen.',
      audioTranscript: 'Wenn sich in der Phase der Normalwissenschaft Anomalien häufen, die das bestehende Paradigma nicht mehr integrieren kann, gerät das Fach in eine Krise, die letztlich zur wissenschaftlichen Revolution führt.',
      practiceTasks: [
        'Skizzieren Sie den Zyklus: Normalwissenschaft -> Krise -> Revolution -> neues Paradigma.',
        'Klären Sie den Unterschied zwischen Verifikation und Falsifikation.'
      ]
    },
    sectionC: {
      title: 'Mussawi C: Fachdialoge & Wissenschaftsdisputation',
      focus: 'Mündliche Interaktion (Kolloquium zum methodischen Relativismus)',
      description: {
        en: 'Engage in a sharp intellectual dispute on Paul Feyerabend\'s provocative thesis "Against Method" (Anything Goes).',
        fa: 'مناظره انتقادی فکری درباره کتاب مناقشه‌برانگیز پل فایرابند «علیه روش» (هر چیزی ممکن است کارساز باشد).',
        prs: 'مناظره علمی درباره روش‌های تحقیق و مکاتب فلسفه علم.',
        tr: 'Paul Feyerabend\'in "Yönteme Hayır" tezini eleştirel bir akademik münazarada tartışın.',
        ar: 'خوض سجال فكري محتدم حول أطروحة بول فييرابند الاستفزازية "ضد المنهج".',
        es: 'Participa en una disputa intelectual sobre "Contra el método" de Paul Feyerabend.'
      },
      content: 'Streitgespräch zweier Wissenschaftstheoretiker.',
      audioTranscript: 'A: "Feyerabends erkenntnistheoretischer Anarchismus befreit die Forschung von methodologischer Erstarrung." - B: "Er öffnet jedoch Tür und Tor für Pseudowissenschaften und entwertet die mühsam erkämpften Rationalitätsstandards unserer Aufklärung."',
      practiceTasks: [
        'Formulieren Sie Gegenargumente gegen methodische Beliebigkeit.',
        'Wenden Sie C1/C2-Redemittel an: "Es steht auf einem anderen Blatt, ob...", "Dies verkehrt die Intention ins Gegenteil".'
      ]
    },
    sectionD: {
      title: 'Mussawi D: Textanalyse & Epistemologischer Essay',
      focus: 'Lesen & Hermeneutik (Karl Popper: Logik der Forschung)',
      description: {
        en: 'Deconstruct Karl Popper\'s seminal thesis on the demarcation problem between science and metaphysics.',
        fa: 'تحلیل رساله بنیادین کارل پوپر در منطق پژوهش پیرامون مسئله تحدید حدود میان علم و مابعدالطبیعه.',
        prs: 'خواندن و درک متن مهم کارل پوپر درباره منطق اکتشافات علمی.',
        tr: 'Karl Popper\'ın bilim ile metafiziği ayıran "sınır koyma problemi" üzerine metnini tahlil edin.',
        ar: 'تفكيك أطروحة كارل بوبر المفصلية في "منطق الكشف العلمي" حول معيار التمييز بين العلم والميتافيزيقا.',
        es: 'Analiza el criterio de demarcación de Karl Popper en "La lógica de la investigación científica".'
      },
      readingText: {
        type: 'Wissenschaftstheoretischer Klassiker (Auszug)',
        title: 'Das Abgrenzungskriterium des Falsifikationismus',
        body: 'Ein empirisch-wissenschaftliches System muss an der Erfahrung scheitern können. Nicht die Verifizierbarkeit, sondern die Falsifizierbarkeit eines Systems ist als Kriterium der Abgrenzung anzusehen. Ein Satz oder ein System von Sätzen ist nur dann empirisch-wissenschaftlich, wenn er die Eigenschaft besitzt, mit möglichen Beobachtungen in Konflikt geraten zu können.'
      },
      practiceTasks: [
        'Fassen Sie Poppers Abgrenzungskriterium prägnant zusammen.',
        'Erläutern Sie, warum Induktion nach Popper logisch unzulässig ist.'
      ]
    },
    sectionE: {
      title: 'Mussawi E: Grammatik & Höchste Abstraktion',
      focus: 'Grammatik (Syntaktische Schachtelung, Relativsätze mit präpositionalem Bezug und "dessen/deren")',
      description: {
        en: 'Master multi-tiered nested clauses with complex relative genitive references ("dessen", "deren", "durch dessen Mithilfe") in theoretical physics and philosophy.',
        fa: 'تسلط بر جملات تو در توی چندلایه با ضمایر موصولی ملکی پیچیده (dessen, deren, zu dessen Gunsten) در فلسفه و علوم نظری.',
        prs: 'یادگیری جملات پیشرفته با ضمایر موصولی در حالت اضافه.',
        tr: 'Felsefi metinlerde çok katmanlı cümle içi bağlaçlar ve Genitiv ilgi zamirlerinde ("dessen", "deren") ustalaşın.',
        ar: 'إتقان التراكيب التضمينية المتعددة الطبقات ذات الضمائر الموصولة المجرورة بالـ Genitiv (dessen, deren).',
        es: 'Domina las oraciones subordinadas complejas anidadas con pronombres relativos de genitivo.'
      },
      grammarRule: {
        id: 'c1_2_genitiv_relativ_rule',
        level: 'C1.2',
        germanTitle: 'Komplexe Relativsätze mit präpositionalem Genitivbezug (dessen / deren)',
        formula: 'Präposition + dessen / deren + Bezugsnomen + (...) + finites Verb',
        explanation: {
          en: 'Relative clauses with prepositional genitive pronouns (an deren Falsifizierbarkeit, im Lichte derer) enable dense semantic integration.',
          fa: 'جملات موصولی مجهز به ضمایر ملکی در حالت اضافی (an dessen, im Lichte derer) ادغام فشرده معنایی را میسر می‌سازند.',
          prs: 'جملات توضیحی با ضمایر ملکی dessen و deren همراه با حروف اضافه در سطح عالی.',
          tr: 'Edatlı ilgi zamirleri (an deren, im Lichte derer), akademik ve hukuki dilde çok katmanlı niteleme sağlar.',
          ar: 'تتيح جمل الصلة المقترنة بضمائر الملكية وحروف الجر ربطاً مفاهيمياً دقيقاً في الأبحاث التجريدية.',
          es: 'Las oraciones de relativo con genitivo preposicional aportan densidad sintáctica y precisión categorial.'
        },
        examples: [
          {
            german: 'Eine empirische Hypothese, an deren Falsifizierbarkeit kein vernünftiger Zweifel besteht, gilt als bewährt.',
            formulaBreakdown: 'Eine Hypothese (Bezugsnomen) + , an deren Falsifizierbarkeit (Präposition + Genitiv-Relativpronomen + Nomen) + besteht (Verb).',
            literalTranslation: {
              en: 'An empirical hypothesis, on whose falsifiability no reasonable doubt exists, counts as proven.',
              fa: 'فرضیه تجربی که در ابطال‌پذیری آن شک معقولی وجود ندارد، آزموده‌شده شمرده می‌شود.',
              prs: 'فرضیه علمی که امکان آزمودن و رد کردن آن معلوم باشد، معتبر دانسته می‌شود.',
              tr: 'Yanlışlanabilirliği konusunda makul hiçbir şüphe bulunmayan ampirik bir hipotez, rüştünü ispatlamış sayılır.',
              ar: 'تعد الفرضية التجريبية التي لا يرقى أي شك معقول إلى قابليتها للدحض نظريةً راسخة ومُثبتة.',
              es: 'Una hipótesis empírica sobre cuya falsabilidad no cabe albergar duda razonable se considera corroborada.'
            },
            fluentTranslation: {
              en: 'An empirical hypothesis, regarding the falsifiability of which no reasonable skepticism remains, is deemed scientifically robust.',
              fa: 'هر فرضیه تجربی که پیرامون آزمون‌پذیری و ابطال‌پذیری منطقی آن هیچ‌گونه تردید معقولی باقی نمانده باشد، در شمار نظریات معتبر و استوار علمی منظور می‌گردد.',
              prs: 'هر فرضیه تحقیقی که قابلیت راستی‌آزمایی آن ثابت شده باشد، به عنوان یک اصل معتبر در علم پذیرفته می‌شود.',
              tr: 'Gözlemsel ve mantıksal açıdan sınanabilirliği hususunda en ufak bir tereddüt bulunmayan bilimsel varsayımlar, yetkinliğini kanıtlamış kabul edilir.',
              ar: 'إن كل فرضية اختبارية لا يتطرق أي ارتياب علمي مشروع إلى إمكانية تفنيدها تجريبياً، تكتسب صفة الحقيقة العلمية المؤكدة.',
              es: 'Toda hipótesis empírica respecto de cuya refutabilidad metódica no quepa objeción fundada alguna goza de plena consideración científica.'
            }
          }
        ]
      },
      practiceTasks: [
        'Bilden Sie Relativsätze mit "im Lichte dessen", "aufgrund deren" und "zwecks deren".',
        'Vermeiden Sie syntaktische Überladung durch klare Thema-Rhema-Führung.'
      ]
    },
    vocabularies: [
      { id: 'c1_2_v10', word: 'die Inkommensurabilität', article: 'die', plural: '-', ipa: '/ˈɪnkɔmɛnzuʁabiliˌtɛːt/', translation: { en: 'incommensurability', fa: 'قیاس‌ناپذیری پارادایم‌های رقیب علمی', prs: 'عدم امکان مقایسه مستقیم دو نظریه با معیارهای مشترک', tr: 'eşölçülemezlik (inkomensurabilite)', ar: 'اللاقِيَاسِيَّة / تعذر القياس المشترك بين النماذج', es: 'inconmensurabilidad' } },
      { id: 'c1_2_v11', word: 'das Abgrenzungskriterium', article: 'das', plural: 'die Abgrenzungskriterien', ipa: '/ˈapɡʁɛntsʊŋskʁiˌteːʁiʊm/', translation: { en: 'demarcation criterion', fa: 'معیار تحدید حدود میان علم و شبه‌علم', prs: 'معیار جداسازی علم واقعی از ادعاهای غیرعلمی', tr: 'sınır koyma ölçütü', ar: 'معيار التمييز والفرز العلمي', es: 'criterio de demarcación' } },
      { id: 'c1_2_v12', word: 'die Anomalie', article: 'die', plural: 'die Anomalien', ipa: '/anomaˈliː/', translation: { en: 'anomaly', fa: 'ناهنجاری تجربی ناسازگار با پارادایم حاکم', prs: 'مشاهده غیرعادی که با فرضیه اصلی همخوانی ندارد', tr: 'anomali / sapma', ar: 'الشذوذ / الظاهرة الشاذة المستعصية على التفسير', es: 'anomalía' } }
    ],
    exercises: [
      {
        id: 'ex_c1_2_7_a',
        type: 'multiple_choice',
        instruction: {
          en: 'Select the correct relative pronoun with preposition in the genitive case.',
          fa: 'ضمیر موصولی صحیح را همراه با حرف اضافه در حالت ملکی انتخاب کنید.',
          prs: 'ضمیر موصولی مناسب را با حرف اضافه برگزینید.',
          tr: 'Genitiv ilgi zamiri ile doğru edat öbeğini seçiniz.',
          ar: 'اختر الضمير الموصول المجرور الصحيح المقترن بحرف الجر.',
          es: 'Selecciona el pronombre relativo adecuado con preposición en genitivo.'
        },
        prompt: 'Das Kolloquium debattierte über ein neues Modell, _______ Gunsten zahlreiche astrophysikalische Beobachtungen sprechen.',
        options: [
          'zu dessen',
          'zu deren',
          'an dessen',
          'in welchem'
        ],
        correctAnswer: 'zu dessen',
        explanation: {
          en: '"das Modell" is neuter singular; the fixed idiom is "zu jemandes Gunsten" (in favor of), hence "zu dessen Gunsten".',
          fa: '"das Modell" خنثی است، و اصطلاح قالبی "zu Gunsten + Genitiv" (به نفع / در تأیید چیزی) است؛ بنابراین "zu dessen Gunsten" صحیح است.',
          prs: 'به دلیل خنثی بودن کلمه مدل، ترکیب zu dessen Gunsten درست می‌باشد.',
          tr: '"das Modell" nötr olduğu için "birinin lehine" anlamına gelen kalıp "zu dessen Gunsten" şeklinde kurulur.',
          ar: 'الاسم "das Modell" محايد، والتركيب الاصطلاحي الثابت هو "zu dessen Gunsten" (لصالحه / مؤيدًا له).',
          es: '"das Modell" es neutro y la locución fija es "zu dessen Gunsten" (a favor del cual).'
        }
      },
      {
        id: 'ex_c1_2_7_b',
        type: 'fill_blank',
        instruction: {
          en: 'Insert the key Popperian epistemological noun.',
          fa: 'اسم کلیدی نظریه معرفت‌شناسی کارل پوپر به معنای «ابطال‌پذیری» را قرار دهید.',
          prs: 'اصطلاح علمی ابطال‌پذیری را بنویسید.',
          tr: 'Popper felsefesinin temel kavramını yerleştirin.',
          ar: 'ضع المفهوم المعرفي الجوهري عند كارل بوبر الدال على قابلية التكذيب.',
          es: 'Inserta el término epistemológico central de Popper.'
        },
        prompt: 'Nach Karl Popper ist nicht die Verifizierbarkeit, sondern die prinzipielle _______ das entscheidende Kriterium für Wissenschaftlichkeit.',
        options: [
          'Falsifizierbarkeit',
          'Gültigkeit',
          'Subjektivität',
          'Populärität'
        ],
        correctAnswer: 'Falsifizierbarkeit',
        explanation: {
          en: '"Falsifizierbarkeit" (falsifiability / refutability) is Popper\'s central demarcation criterion distinguishing empirical science from metaphysics.',
          fa: '"Falsifizierbarkeit" (ابطال‌پذیری) معیار بنیادین پوپر برای تفکیک علوم تجربی از مابعدالطبیعه و شبه‌علم است.',
          prs: 'معیار اصلی پوپر Falsifizierbarkeit یا ابطال‌پذیری فرضیه‌ها است.',
          tr: '"Falsifizierbarkeit" (yanlışlanabilirlik), Popper\'ın bilim ile metafiziği ayıran temel ölçütüdür.',
          ar: '"Falsifizierbarkeit" (قابلية التكذيب والتفنيد) هي المعيار البوبري الجوهري للتمييز العلمي.',
          es: '"Falsifizierbarkeit" (falsabilidad) es el criterio de demarcación fundamental de Karl Popper.'
        }
      },
      {
        id: 'ex_c1_2_7_c',
        type: 'sentence_reorder',
        instruction: {
          en: 'Reconstruct the sentence describing paradigm shifts according to Thomas Kuhn.',
          fa: 'جمله تبیین‌کننده تغییر پارادایم توماس کوهن را بر اساس نحو آلمانی مرتب کنید.',
          prs: 'جمله نظریه کوهن را به ترتیب گرامری درست تنظیم کنید.',
          tr: 'Thomas Kuhn\'un paradigma kuramına dair cümleyi sıralayın.',
          ar: 'رتب الجملة الواصفة للتحول البارادايمي وفق نظرية توماس كون.',
          es: 'Ordena la oración sobre el cambio de paradigma según Thomas Kuhn.'
        },
        prompt: 'Bringen Sie die Satzteile in die korrekte Reihenfolge:',
        options: [
          'Wissenschaftliche Revolutionen vollziehen sich',
          'durch den radikalen Bruch',
          'mit etablierten Denkmustern',
          'und methodischen Paradigmen.'
        ],
        correctAnswer: [
          'Wissenschaftliche Revolutionen vollziehen sich',
          'durch den radikalen Bruch',
          'mit etablierten Denkmustern',
          'und methodischen Paradigmen.'
        ],
        explanation: {
          en: 'Subject, reflexive verb ("vollziehen sich"), instrumental prepositional phrase ("durch den radikalen Bruch"), and coordinating prepositional modifier ("mit etablierten Denkmustern und methodischen Paradigmen").',
          fa: 'فاعل، فعل انعکاسی، متمم ابزاری durch و متمم پیوسته با حرف اضافه mit.',
          prs: 'ترتیب نحوی صحیح جمله علمی.',
          tr: 'Özne, dönüşlü fiil, edat öbeği ve bağlaçlı tamlama.',
          ar: 'الفاعل، الفعل الانعكاسي، شبه الجملة السببية، والمتمم المنسوق بحرف الجر.',
          es: 'Sujeto, verbo reflexivo, sintagma preposicional instrumental y complemento coordinado.'
        }
      }
    ]
  }
];
