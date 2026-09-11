import { Lesson } from '../types';

export const CURRICULUM_B2_1: Lesson[] = [
  {
    id: 'b2_1_lek1',
    lektionNumber: 1,
    level: 'B2.1',
    title: 'Technologischer Wandel und Arbeitswelt 4.0',
    subTitle: 'Digitalisierung, KI am Arbeitsplatz und das Passiv mit Modalverben (B2 Niveau)',
    topic: 'Automatisierung, Ethik in der Technologie und formelle Fachkorrespondenz',
    fotoHoergeschichte: {
      title: 'Foto-Hörgeschichte: Die Einführung von KI in der Produktionshalle',
      imagePrompt: 'A cutting-edge automated production line in Stuttgart with industrial robotics, where German engineers discuss algorithmic quality control.',
      imageTheme: 'Industrie 4.0 in Baden-Württemberg',
      audioDuration: '03:15',
      transcript: [
        { speaker: 'Dr. Franke (Entwicklungsleiter)', text: 'Meine Damen und Herren, durch die Umstellung auf das neue Automatisierungssystem können Montagefehler künftig um 40 Prozent reduziert werden.' },
        { speaker: 'Frau Dr. Sommer', text: 'Das ist ein beachtlicher Fortschritt. Allerdings müssen sämtliche Mitarbeiter zeitnah im Umgang mit den neuen Softwaretools geschult werden.' },
        { speaker: 'Herr Krause (Betriebsrat)', text: 'Der Betriebsrat unterstützt die Modernisierung, sofern der Datenschutz gewährleistet bleibt und keine Arbeitsplätze abgebaut werden.' },
        { speaker: 'Dr. Franke', text: 'Selbstverständlich. Ein umfangreiches Qualifizierungsprogramm wurde bereits von der Geschäftsführung genehmigt.' }
      ],
      summary: {
        en: 'An industrial manufacturing enterprise in Baden-Württemberg introduces AI-driven quality inspection and plans employee training initiatives.',
        fa: 'یک واحد صنعتی تولیدی در بادن-وورتمبرگ سیستم کنترل کیفیت مبتنی بر هوش مصنوعی را راه‌اندازی نموده و برنامه‌های بازآموزی کارکنان را پیگیری می‌کند.',
        prs: 'یک فابریکه بزرگ صنعتی در بادن-وورتمبرگ سیستم بررسی کیفیت با هوش مصنوعی را فعال ساخته و پلان آموزش مسلکی کارمندان را عملی می‌نماید.',
        tr: 'Baden-Württemberg\'deki bir sanayi kuruluşu yapay zeka destekli kalite kontrol sistemini devreye alır ve çalışan eğitimlerini planlar.',
        ar: 'تعتمد منشأة تصنيع صناعية في بادن-فورتمبيرغ تقنيات الفحص المعتمدة على الذكاء الاصطناعي وتخطط لبرامج تدريب الموظفين.',
        es: 'Una empresa manufacturera en Baden-Wurtemberg implanta el control de calidad con IA y planifica programas de formación para la plantilla.'
      }
    },
    sectionA: {
      title: 'Mussawi A: Sprechen & Dialog',
      focus: 'Sprechen & Hören (Fachdiskussionen & Konferenzen)',
      description: {
        en: 'Lead sophisticated debates, formulate arguments persuasively, and respond to counterarguments.',
        fa: 'هدایت مباحثات تخصصی، بیان قانع‌کننده استدلال‌ها و پاسخ‌گویی به نظرات مخالف.',
        prs: 'پیشبرد مباحثات تخصصی تخنیکی، ارائه دلایل منطقی و پاسخ به نقدهای مسلکی.',
        tr: 'Yetkin tartışmaları yönetme, ikna edici savlar öne sürme ve karşı görüşleri karşılama.',
        ar: 'إدارة المناقشات التخصصية، صياغة الحجج بإقناع والرد على الآراء المعارضة.',
        es: 'Conducción de debates especializados, argumentación persuasiva y réplica a objeciones.'
      },
      content: 'Aus meiner Sicht sollte berücksichtigt werden, dass... / Es lässt sich nicht leugnen, dass...',
      audioText: 'Vor der Inbetriebnahme der Fertigungsstraße müssen alle sicherheitsrelevanten Protokolle penibel überprüft werden.',
      practiceTasks: [
        'Diskutieren Sie die Vor- und Nachteile von Homeoffice und digitaler Zeiterfassung.',
        'Halten Sie einen fünfminütigen Kurzvortrag über KI-Regulierungen.'
      ]
    },
    sectionB: {
      title: 'Mussawi B: Wortschatz & Hören',
      focus: 'Hören & Wortschatz (Fachterminologie Industrie 4.0)',
      description: {
        en: 'Advanced technological and operational vocabulary for engineering and business management.',
        fa: 'واژگان تخصصی فناوری، مهندسی و مدیریت تولید مدرن.',
        prs: 'لغات تخصصی تکنالوژی، انجنیری و مدیریت عصری تولید.',
        tr: 'Mühendislik ve işletme yönetimine yönelik ileri düzey teknolojik ve operasyonel terimler.',
        ar: 'المصطلحات التقنية والتشغيلية المتقدمة للهندسة وإدارة الأعمال الصناعية.',
        es: 'Léxico técnico y operativo avanzado para ingeniería y gestión empresarial.'
      },
      content: 'die Prozessoptimierung, die Datensicherheit, die Wertschöpfung, die Automatisierungsquote.',
      practiceTasks: [
        'Ordnen Sie Fachbegriffe ihren Definitionen zu.',
        'Verfassen Sie ein Protokoll über eine Sicherheitsunterweisung.'
      ]
    },
    sectionC: {
      title: 'Mussawi C: Alltagskommunikation',
      focus: 'Sprechen & Dialoge (Verhandlungen & Betriebsratssitzung)',
      description: {
        en: 'Formal business negotiations, mediating between worker councils and management.',
        fa: 'مذاکرات تجاری و رسمی، میانجی‌گری میان شورای کارگری و هیئت مدیره.',
        prs: 'مذاکرات رسمی تجارتی، هماهنگی میان شورای کارمندان و رهبری فابریکه.',
        tr: 'İşletme müzakereleri ve işçi temsilcileri ile yönetim arasında uzlaşma sağlama.',
        ar: 'المفاوضات الرسمية والوساطة بين مجالس العمال والإدارة العليا.',
        es: 'Negociaciones formales y mediación entre comités de empresa y dirección ejecutiva.'
      },
      content: 'Wir schlagen vor, eine Übergangsfrist von sechs Monaten zu vereinbaren.',
      audioText: 'In der heutigen Betriebsratssitzung muss geklärt werden, wie Weiterbildungen vergütet werden.',
      practiceTasks: [
        'Simulieren Sie eine Gehalts- und Weiterbildungsverhandlung.',
        'Formulieren Sie verbindliche Vereinbarungsentwürfe.'
      ]
    },
    sectionD: {
      title: 'Mussawi D: Leseverstehen & Text',
      focus: 'Lesen & Textanalyse (Wirtschaftsberichte & Fachaufsätze)',
      description: {
        en: 'Read and critically analyze complex articles from VDI Nachrichten and Handelsblatt.',
        fa: 'مطالعه و تحلیل موشکافانه گزارش‌های اقتصادی و مقالات فنی نشریات معتبر آلمان.',
        prs: 'مطالعه و تحلیل دقیق گزارش‌های اقتصادی و مقالات تخنیکی ژورنال‌های علمی.',
        tr: 'Saygın yayınlardan karmaşık teknik makaleleri ve ekonomi raporlarını okuyup tahlil etme.',
        ar: 'قراءة وتحليل المقالات التقنية والتقارير الاقتصادية المعقدة بصورة نقدية.',
        es: 'Lectura y análisis crítico de informes económicos y artículos técnicos especializados.'
      },
      content: 'Auszug aus einem Fachbericht des Bundesministeriums für Wirtschaft.',
      readingText: {
        type: 'Fachzeitschrift für Ingenieurwesen',
        title: 'Die Zukunft der industriellen Fertigung in Mitteleuropa',
        body: 'Mitteleuropäische Industrieunternehmen müssen ihre Effizienz durch smarte Algorithmen steigern. Gleichwohl darf der Faktor Mensch nicht vernachlässigt werden: Nur durch kontinuierliche Weiterbildungsmaßnahmen kann der Fachkräftebedarf gesichert werden.'
      },
      practiceTasks: [
        'Fassen Sie die Kernaussagen des Textes in eigenen Worten zusammen.',
        'Beantworten Sie Verständnisfragen zu globalen Lieferketten.'
      ]
    },
    sectionE: {
      title: 'Mussawi E: Grammatik & Schreiben',
      focus: 'Grammatik & Schreiben (Passiv mit Modalverben & Ersatzformen)',
      description: {
        en: 'Master passive voice combined with modal verbs in all tenses, and passive substitutes.',
        fa: 'تسلط بر گرامر جملات مجهول همراه با افعال مدال در تمام زمان‌ها و ساختارهای جانشین مجهول.',
        prs: 'تسلط بر گرامر جملات مجهول با افعال کمکی مدال در تمام زمان‌ها و بدل‌های مجهول.',
        tr: 'Modal fiillerle kurulan tüm zamanlardaki edilgen çatı ve edilgen çatı alternatifleri.',
        ar: 'إتقان صيغ المبني للمجهول مع الأفعال المساعدة في جميع الأزمنة وبدائل المجهول.',
        es: 'Dominio de la voz pasiva con verbos modales en todos los tiempos y sus sustitutos.'
      },
      content: 'Passiv mit Modalverben: "Die Dokumente müssen geprüft werden" / "Der Fehler konnte behoben werden".',
      grammarRule: {
        id: 'b2_1_passiv_modal',
        level: 'B2.1',
        germanTitle: 'Das Passiv mit Modalverben (Präsens & Präteritum)',
        formula: 'Subjekt + Modalverb (konjugiert) + ... + Partizip II + werden (Infinitiv)',
        explanation: {
          en: 'When forming passive with a modal verb, conjugate the modal verb on Position 2 and put the Partizip II followed by the infinitive "werden" at the very end.',
          fa: 'هنگام ساخت مجهول با فعل مدال، فعل مدال را در جایگاه دوم صرف کرده و صفت مفعولی (Partizip II) را به همراه مصدر "werden" در انتهای جمله قرار دهید.',
          prs: 'در ساختن مجهول با افعال مدال، فعل مدال در جایگاه دوم صرف می‌شود و صفت مفعولی همراه با مصدر werden در اخیر جمله می‌آید.',
          tr: 'Modal fiilli edilgen çatıda: Çekimli modal fiil 2. pozisyonda yer alır, cümlenin sonunda ise Partizip II + "werden" bulunur.',
          ar: 'في صيغة المجهول مع فعل مساعد: يصرف الفعل المساعد في الموقع 2، ويوضع اسم المفعول متبوعاً بالمصدر werden في نهاية الجملة.',
          es: 'En la pasiva con verbos modales: el modal se conjuga en la posición 2 y al final se colocan el participio y "werden" en infinitivo.'
        },
        examples: [
          {
            german: 'Die Sicherheitsrichtlinien müssen unverzüglich eingehalten werden.',
            formulaBreakdown: 'Die Richtlinien (S) + müssen (Modalverb) + unverzüglich + eingehalten (Partizip II) + werden (Infinitiv).',
            literalTranslation: {
              en: 'The safety guidelines must immediately kept be.',
              fa: 'دستورالعمل‌های ایمنی باید بی‌درنگ رعایت شوند.',
              prs: 'رهنمودهای ایمنی باید بدون معطلی مراعات گردند.',
              tr: 'Güvenlik yönergelerine derhal riayet edilmelidir.',
              ar: 'يجب الالتزام بإرشادات السلامة على الفور.',
              es: 'Las directrices de seguridad deben cumplirse de inmediato.'
            },
            fluentTranslation: {
              en: 'The safety regulations must be complied with immediately.',
              fa: 'مقررات ایمنی کارگاه باید بلادرنگ و دقیق رعایت گردند.',
              prs: 'دستورالعمل‌های امنیتی باید بی‌درنگ تطبیق شوند.',
              tr: 'Güvenlik kurallarına gecikmeksizin uyulması zorunludur.',
              ar: 'يتعين الامتثال الفوري للوائح السلامة المهنية.',
              es: 'Es obligatorio acatar de inmediato las normativas de seguridad.'
            }
          }
        ]
      },
      practiceTasks: [
        'Formulieren Sie fünf Regeln für Ihren Arbeitsplatz im Passiv mit "müssen" oder "dürfen".',
        'Verwandeln Sie Aktivsätze in Passivkonstruktionen mit Modalverben im Präteritum.'
      ]
    },
    vocabularies: [
      { id: 'b2_1_v1', word: 'die Prozessoptimierung', article: 'die', plural: 'die Prozessoptimierungen', ipa: '/pʁoˈt͡sɛsʔɔptiˌmiːʁʊŋ/', translation: { en: 'process optimization', fa: 'بهینه‌سازی فرآیند', prs: 'بهبود پروسه کاری', tr: 'süreç optimizasyonu', ar: 'تحسين العمليات', es: 'optimización de procesos' } },
      { id: 'b2_1_v2', word: 'die Wertschöpfungskette', article: 'die', plural: 'die Wertschöpfungsketten', ipa: '/ˈveːɐ̯tˌʃœp͡fʊŋskɛtə/', translation: { en: 'value chain', fa: 'زنجیره ارزش', prs: 'زنجیره تولید ارزش', tr: 'değer zinciri', ar: 'سلسلة القيمة', es: 'cadena de valor' } },
      { id: 'b2_1_v3', word: 'der Fachkräftemangel', article: 'der', plural: 'die Fachkräftemängel', ipa: '/ˈfaxkʁɛftəˌmaŋl̩/', translation: { en: 'shortage of skilled workers', fa: 'کمبود نیروی متخصص', prs: 'کمبود کارمندان مسلکی', tr: 'nitelikli iş gücü açığı', ar: 'نقص الكوادر المتخصصة', es: 'escasez de mano de obra cualificada' } }
    ],
    exercises: [
      {
        id: 'ex_b2_1_1',
        type: 'multiple_choice',
        instruction: {
          en: 'Choose the correct form of the passive sentence with modal verb.',
          fa: 'فرم صحیح جمله مجهول به همراه فعل وجهی را انتخاب کنید.',
          prs: 'شکل درست جمله مجهول را با فعل کمکی انتخاب نمایید.',
          tr: 'Modal fiilli edilgen cümlenin doğru kuruluşunu belirleyin.',
          ar: 'اختر الصيغة الصحيحة للجملة المبنية للمجهول مع الفعل المساعد.',
          es: 'Selecciona la forma correcta de la oración pasiva con verbo modal.'
        },
        prompt: 'Formen Sie den Satz ins Passiv um: "Man muss die Fehlerquelle sofort analysieren."',
        options: [
          'Die Fehlerquelle muss sofort analysiert werden.',
          'Die Fehlerquelle muss werden sofort analysiert.',
          'Die Fehlerquelle wird sofort analysiert gemusst.',
          'Sofort muss analysiert die Fehlerquelle werden.'
        ],
        correctAnswer: 'Die Fehlerquelle muss sofort analysiert werden.',
        explanation: {
          en: 'Correct formula: Subject (Die Fehlerquelle) + modal (muss) + adverbial (sofort) + Partizip II (analysiert) + infinitive (werden).',
          fa: 'فرمول صحیح: فاعل (Die Fehlerquelle) + فعل مدال (muss) + قید (sofort) + اسم مفعول (analysiert) + مصدر (werden).',
          prs: 'فرمول درست: فاعل + فعل مدال + قید + صفت مفعولی + مصدر werden.',
          tr: 'Doğru formül: Özne (Die Fehlerquelle) + modal fiil (muss) + Partizip II (analysiert) + werden.',
          ar: 'المعادلة الصحيحة: نائب الفاعل + الفعل المساعد (muss) + الظرف + اسم المفعول (analysiert) + المصدر (werden).',
          es: 'Fórmula correcta: Sujeto (Die Fehlerquelle) + modal (muss) + adverbio + participio (analysiert) + infinitivo (werden).'
        }
      }
    ]
  },
  {
    id: 'b2_1_lek2',
    lektionNumber: 2,
    level: 'B2.1',
    title: 'Gesundheitswesen, Medizin und Patientenberatung',
    subTitle: 'Krankenhausalltag, Anamnese und der Konjunktiv II für Ratschläge und Hypothesen (B2)',
    topic: 'Ärztliche Konsultation, Symptombeschreibung, Patientenaufklärung und Konjunktiv II',
    fotoHoergeschichte: {
      title: 'Foto-Hörgeschichte: In der Universitätsklinik Heidelberg',
      imagePrompt: 'A modern medical consultation room at Heidelberg University Hospital where a compassionate specialist explains diagnostic test results to a patient.',
      imageTheme: 'Universitätsklinikum Heidelberg',
      audioDuration: '02:50',
      transcript: [
        { speaker: 'Dr. Al-Mansoor', text: 'Guten Tag, Herr Weber. Nehmen Sie bitte Platz. Wie geht es Ihnen heute mit den verschriebenen Medikamenten?' },
        { speaker: 'Herr Weber', text: 'Guten Tag, Herr Doktor. Die Schmerzen im Knie haben nachgelassen, aber ich verspüre gelegentlich Schwindelgefühle.' },
        { speaker: 'Dr. Al-Mansoor', text: 'An Ihrer Stelle würde ich die Dosierung am Morgen um die Hälfte reduzieren und reichlich Wasser trinken.' },
        { speaker: 'Herr Weber', text: 'Wäre eine physiotherapeutische Behandlung zusätzlich ratsam?' },
        { speaker: 'Dr. Al-Mansoor', text: 'Ja, zweifellos. Ich stelle Ihnen umgehend eine Überweisung für zehn Einheiten Krankengymnastik aus.' }
      ],
      summary: {
        en: 'A medical consultation at Heidelberg University Clinic where the doctor adjusts medication and prescribes physiotherapy using Konjunktiv II.',
        fa: 'یک جلسه ویزیت پزشکی در کلینیک دانشگاهی هایدلبرگ که در آن پزشک دوز دارو را تعدیل کرده و فیزیوتراپی تجویز می‌کند.',
        prs: 'یک جلسه معاینه طبی در شفاخانه پوهنتون هایدلبرگ که داکتر مقدار دوا را تنظیم نموده و نسخه فیزیوتراپی صادر می‌کند.',
        tr: 'Heidelberg Üniversite Kliniği\'nde doktorun ilaç dozunu ayarladığı ve fizik tedavi önerdiği muayene.',
        ar: 'استشارة طبية في مستشفى هايدلبرغ الجامعي يقوم فيها الطبيب بتعديل جرعة الدواء وتوجيه المريض للعلاج الطبيعي.',
        es: 'Consulta en el Hospital Universitario de Heidelberg donde el médico ajusta la medicación con Konjunktiv II.'
      }
    },
    sectionA: {
      title: 'Mussawi A: Sprechen & Dialog',
      focus: 'Sprechen & Hören (Das Anamnesegespräch)',
      description: {
        en: 'Describe symptoms accurately, understand medical instructions, and ask clarifying questions.',
        fa: 'توصیف دقیق علائم بیماری، درک دستورات دارویی پزشک و طرح پرسش‌های شفاف‌ساز.',
        prs: 'تشریح دقیق علایم مریضی، فهمیدن دستورالعمل‌های داکتر و پرسان کردن سوالات ضروری.',
        tr: 'Belirtileri açıkça tarif etme, tıbbi talimatları anlama ve netleştirici sorular sorma.',
        ar: 'وصف الأعراض بدقة، فهم التعليمات الطبية وطرح الأسئلة الاستيضاحية.',
        es: 'Descripción de síntomas, comprensión de indicaciones médicas y preguntas de seguimiento.'
      },
      content: 'Ich leide unter anhaltenden Kopfschmerzen. / An Ihrer Stelle würde ich einen Facharzt konsultieren.',
      audioText: 'Bei plötzlichen Beschwerden sollten Sie unverzüglich den ärztlichen Bereitschaftsdienst unter 116117 anrufen.',
      practiceTasks: [
        'Führen Sie ein simuliertes Anamnesegespräch beim Allgemeinarzt durch.',
        'Erklären Sie einem Patienten die Einnahmehinweise für ein Antibiotikum.'
      ]
    },
    sectionB: {
      title: 'Mussawi B: Wortschatz & Hören',
      focus: 'Hören & Wortschatz (Medizinische Fachterminologie & Anatomie)',
      description: {
        en: 'Vocabulary of diagnostics, organs, symptoms, and medical treatment in German clinics.',
        fa: 'واژگان تخصصی تشخیص بیماری، اندام‌ها، علائم و درمان‌های بالینی در بیمارستان‌های آلمان.',
        prs: 'اصطلاحات مسلکی تشخیص، اعضای بدن، علایم امراض و تداوی در کلینیک‌های آلمان.',
        tr: 'Alman kliniklerinde tanı, organlar, belirtiler ve tedaviye dair terminoloji.',
        ar: 'مصطلحات التشخيص، الأعضاء، الأعراض والعلاجات السريرية في المشافي الألمانية.',
        es: 'Vocabulario de diagnóstico, órganos, síntomas y tratamientos médicos.'
      },
      content: 'die Diagnose, die Nebenwirkung, die Überweisung, der Befund, die Anästhesie.',
      practiceTasks: [
        'Ordnen Sie Fachbegriffe den entsprechenden medizinischen Abteilungen zu.',
        'Formulieren Sie Beipackzettel-Warnhinweise verständlich um.'
      ]
    },
    sectionC: {
      title: 'Mussawi C: Alltagskommunikation',
      focus: 'Sprechen & Dialoge (Fachkollegiale Übergabe im Schichtdienst)',
      description: {
        en: 'Handover protocols between healthcare professionals and patient documentation.',
        fa: 'گزارش تحویل شیفت میان کادر درمان و مستندسازی پرونده بیمار.',
        prs: 'تسلیم‌دهی شیفت کاری میان داکتران و نرس‌ها و درج معلومات در دوسیه مریض.',
        tr: 'Sağlık çalışanları arasında vardiya devir teslimi ve hasta dosyası belgeleme.',
        ar: 'تسليم المناوبة بين الكوادر الطبية وتوثيق ملفات المرضى بدقة.',
        es: 'Entrega de guardia hospitalaria y documentación clínica entre profesionales.'
      },
      content: 'Frau Müller auf Station 3 zeigt stabile Vitalwerte; die Medikation wurde angepasst.',
      audioText: 'Der Patient wurde heute Morgen operiert und befindet sich nun im Aufwachraum.',
      practiceTasks: [
        'Simulieren Sie eine Schichtübergabe auf der chirurgischen Station.',
        'Verfassen Sie einen kurzen Pflegebericht über den postoperativen Verlauf.'
      ]
    },
    sectionD: {
      title: 'Mussawi D: Leseverstehen & Text',
      focus: 'Lesen & Textanalyse (Fachartikel & Aufklärungsbögen)',
      description: {
        en: 'Analyze informed consent forms and medical articles from Deutsches Ärzteblatt.',
        fa: 'تحلیل برگه‌های رضایت‌نامه درمانی و مقالات تخصصی نشریات پزشکی آلمان.',
        prs: 'خواندن و درک ورقه‌های رضایت‌نامه عملیات و مقالات ژورنال‌های طبی.',
        tr: 'Aydınlatılmış onam formlarını ve tıp dergisi makalelerini inceleme.',
        ar: 'تحليل استمارات الموافقة الطبية المستنيرة والمقالات من الدوريات الصحية.',
        es: 'Análisis de consentimientos informados y artículos de revistas médicas.'
      },
      content: 'Auszug aus einem Aufklärungsbogen zur Knieendoprothetik.',
      practiceTasks: [
        'Ermitteln Sie die im Text aufgeführten Risikofaktoren.',
        'Formulieren Sie Kontraindikationen für eine Medikamentenverabreichung.'
      ]
    },
    sectionE: {
      title: 'Mussawi E: Grammatik & Schreiben',
      focus: 'Grammatik & Schreiben (Konjunktiv II: Ratschläge & Irreale Konditionalsätze)',
      description: {
        en: 'Form polite advice, diplomatic suggestions, and unreal conditionals with "wäre", "hätte", and "würde + Infinitiv".',
        fa: 'بیان مشاوره‌های محترمانه، پیشنهادهای دیپلماتیک و جملات شرطی غیرواقعی با wäre، hätte و würde + Infinitiv.',
        prs: 'بیان توصیه‌های مودبانه و جملات شرطی فرضی با افعال کمکی Konjunktiv II.',
        tr: 'Konjunktiv II ile kibar tavsiyeler, diplomatik öneriler ve gerçek dışı şart cümleleri.',
        ar: 'تقديم النصائح اللبقة والافتراضات غير الواقعية باستخدام صيغة Konjunktiv II.',
        es: 'Consejos diplomáticos y oraciones condicionales irreales con Konjunktiv II.'
      },
      content: 'Ratschläge: "Sie sollten...", "An Ihrer Stelle würde ich...", "Es wäre ratsam, wenn...".',
      grammarRule: {
        id: 'b2_1_konjunktiv2_rule',
        level: 'B2.1',
        germanTitle: 'Der Konjunktiv II für Empfehlungen und Ratschläge',
        formula: 'Subjekt + sollte / würde + Infinitiv am Satzende',
        explanation: {
          en: 'For polite recommendations and medical advice, German speakers use the modal verb "sollten" or "würde + Infinitiv". For "sein" and "haben", use "wäre" and "hätte".',
          fa: 'برای توصیه‌های محترمانه و پزشکی، از فعل مدال "sollten" یا ترکیب "würde + مصدر" استفاده می‌شود. برای sein و haben مستقیماً از wäre و hätte بهره گرفته می‌شود.',
          prs: 'برای ارائه مشوره مودبانه، از sollten یا ترکیب würde با مصدر در آخر جمله استفاده می‌شود.',
          tr: 'Kibar tavsiyelerde "sollten" veya "würde + mastar", "sein" için "wäre", "haben" için "hätte" kullanılır.',
          ar: 'للإرشاد المهذب والنصائح الطبية يستخدم الفعل sollten أو تركيب würde مع المصدر في النهاية.',
          es: 'Para recomendaciones educadas se emplea "sollten" o "würde + infinitivo", y "wäre/hätte" para ser/tener.'
        },
        examples: [
          {
            german: 'An Ihrer Stelle würde ich vor der Einnahme noch Rücksprache mit der Kardiologin halten.',
            formulaBreakdown: 'An Ihrer Stelle + würde (K II) + ich + vor der Einnahme + Rücksprache halten (Infinitiv).',
            literalTranslation: {
              en: 'In your place would I before taking further consultation with the cardiologist hold.',
              fa: 'اگر جای شما بودم، قبل از مصرف دارو مجدداً با متخصص قلب مشورت می‌کردم.',
              prs: 'اگر من به جای شما می‌بودم، پیش از خوردن دوا با داکتر قلب مشوره می‌کردم.',
              tr: 'Sizin yerinizde olsam ilacı almadan önce kardiyologla tekrar görüşürdüm.',
              ar: 'لو كنت مكانك لاستشرت طبيبة القلب مجدداً قبل تناول الدواء.',
              es: 'En su lugar consultaría de nuevo con la cardióloga antes de la toma.'
            },
            fluentTranslation: {
              en: 'If I were you, I would consult the cardiologist again before taking this medication.',
              fa: 'پیشنهاد می‌کنم پیش از مصرف این دارو، حتماً نظر پزشک متخصص قلب را جویا شوید.',
              prs: 'بهتر است قبل از نوشیدن این دوا، یک بار دیگر با داکتر متخصص قلب صحبت نمایید.',
              tr: 'Yerinizde olsam, ilacı kullanmadan önce kardiyoloji uzmanına danışırdım.',
              ar: 'من الأفضل لو استشرت أخصائية أمراض القلب مرة أخرى قبل الشروع في تناول العلاج.',
              es: 'Le aconsejo que antes de tomar el fármaco consulte nuevamente con su cardióloga.'
            }
          }
        ]
      },
      practiceTasks: [
        'Formulieren Sie fünf medizinische Ratschläge mit "Sie sollten..." oder "Es wäre besser, wenn...".',
        'Schreiben Sie eine ärztliche Empfehlung an einen Patienten mit Bluthochdruck.'
      ]
    },
    vocabularies: [
      { id: 'b2_1_v4', word: 'die Anamnese', article: 'die', plural: 'die Anamnesen', ipa: '/anaˈmneːzə/', translation: { en: 'medical history / anamnesis', fa: 'شرح‌حال پزشکی بیمار', prs: 'تاریخچه صحی مریض', tr: 'hasta öyküsü / anamnez', ar: 'السيرة المرضية / الاستجواب الطبي', es: 'anamnesis / historial médico' } },
      { id: 'b2_1_v5', word: 'die Überweisung', article: 'die', plural: 'die Überweisungen', ipa: '/yːbɐˈvaɪ̯zʊŋ/', translation: { en: 'medical referral', fa: 'برگه ارجاع به پزشک متخصص', prs: 'برگه راجع ساختن به متخصص', tr: 'sevk belgesi', ar: 'إحالة طبية', es: 'volante de derivación médica' } },
      { id: 'b2_1_v6', word: 'die Nebenwirkung', article: 'die', plural: 'die Nebenwirkungen', ipa: '/ˈneːbn̩ˌvɪʁkʊŋ/', translation: { en: 'side effect', fa: 'عوارض جانبی دارو', prs: 'تاثیرات جانبی دوا', tr: 'yan etki', ar: 'الأثر الجانبي', es: 'efecto secundario' } }
    ],
    exercises: [
      {
        id: 'ex_b2_1_2',
        type: 'multiple_choice',
        instruction: {
          en: 'Select the polite recommendation with Konjunktiv II.',
          fa: 'توصیه محترمانه را با استفاده از Konjunktiv II انتخاب کنید.',
          prs: 'توصیه مودبانه را با ساختار Konjunktiv II برگزینید.',
          tr: 'Konjunktiv II ile ifade edilmiş kibar tavsiyeyi seçiniz.',
          ar: 'اختر النصيحة المهذبة المصوغة بأسلوب Konjunktiv II.',
          es: 'Selecciona la recomendación cortés formulada con Konjunktiv II.'
        },
        prompt: 'Welcher Satz drückt einen höflichen ärztlichen Ratschlag aus?',
        options: [
          'Sie sollten sich nach dem Eingriff mindestens drei Tage schonen.',
          'Sie müssen sich nach dem Eingriff schonen.',
          'Sie schonen sich nach dem Eingriff sofort.',
          'Schonen Sie sich gefälligst nach dem Eingriff.'
        ],
        correctAnswer: 'Sie sollten sich nach dem Eingriff mindestens drei Tage schonen.',
        explanation: {
          en: '"Sollten" expresses a considerate, professional medical recommendation without appearing overly blunt.',
          fa: 'کاربرد "sollten" توصیه‌ای مشفقانه و پزشکی را بدون حالت تحکمی و خشن منتقل می‌کند.',
          prs: 'کلمه sollten یک توصیه دلسوزانه مسلکی را به شیوه مودبانه بیان می‌کند.',
          tr: '"Sollten" yapısı emredici olmadan profesyonel bir tıbbi tavsiye sunar.',
          ar: 'يعبر الفعل sollten عن نصيحة طبية حكيمة ومهنية دون صيغة أمر جافة.',
          es: '"Sollten" modula la recomendación de forma profesional y atenta sin sonar imperativa.'
        }
      }
    ]
  },
  {
    id: 'b2_1_lek3',
    lektionNumber: 3,
    level: 'B2.1',
    title: 'Recht, Mietverträge und Verbraucherschutz',
    subTitle: 'Mietrecht, Kündigungsfristen, Nebenkostenabrechnung und Partizipialattribute (B2)',
    topic: 'Wohnungsübergabeprotokoll, Mieterverein, Klauseln in AGB und Partizip I/II',
    fotoHoergeschichte: {
      title: 'Foto-Hörgeschichte: Bei der Wohnungsübergabe in Berlin-Kreuzberg',
      imagePrompt: 'A bright Altbau apartment in Berlin where a tenant and a landlord complete an apartment handover protocol checklist.',
      imageTheme: 'Berlin Wohnungsübergabe',
      audioDuration: '02:45',
      transcript: [
        { speaker: 'Frau Neumann (Vermieterin)', text: 'Guten Tag, Herr Karimi. Hier ist das offizielle Wohnungsübergabeprotokoll. Gehen wir alle Räume gemeinsam durch?' },
        { speaker: 'Herr Karimi (Mieter)', text: 'Sehr gern. Mir ist aufgefallen, dass der im Flur angebrachte Rauchmelder defekt zu sein scheint.' },
        { speaker: 'Frau Neumann', text: 'Gut, dass Sie das ansprechen. Ich notiere das im Protokoll. Die Hausverwaltung wird den Austausch umgehend veranlassen.' },
        { speaker: 'Herr Karimi', text: 'Bis zu welchem Stichtag erhalte ich die jährliche Nebenkostenabrechnung?' },
        { speaker: 'Frau Neumann', text: 'Spätestens zwölf Monate nach Ende des jeweiligen Abrechnungszeitraums.' }
      ],
      summary: {
        en: 'A formal apartment handover in Berlin where the tenant inspects the premises and clarifies utility bill deadlines according to German tenancy law.',
        fa: 'تحویل رسمی آپارتمان در برلین که در آن مستاجر نقایص ملک را در صورت‌جلسه ثبت کرده و مهلت دریافت صورت‌حساب شارژ را جویا می‌شود.',
        prs: 'تسلیم‌گیری رسمی خانه در برلین که کرایه‌نشین موارد را در پروتوکول درج نموده و درباره مصارف بل‌های سالانه معلومات می‌گیرد.',
        tr: 'Berlin\'de kiracının teslim tutanağını doldurduğu ve aidat hesaplama sürelerini sorduğu ev teslimi.',
        ar: 'تسليم شقة رسمي في برلين يقوم فيه المستأجر بتدوين الملاحظات والاستفسار عن حساب التكاليف الإضافية.',
        es: 'Entrega formal de vivienda en Berlín con revisión de protocolo y plazos legales de gastos comunes.'
      }
    },
    sectionA: {
      title: 'Mussawi A: Sprechen & Dialog',
      focus: 'Sprechen & Hören (Wohnungsbesichtigung & Mietberatung)',
      description: {
        en: 'Negotiate tenancy agreements, contest unfair charges, and document apartment handover protocols.',
        fa: 'مذاکره قرارداد اجاره، اعتراض به هزینه‌های غیرمنصفانه و تنظیم صورت‌جلسه تحویل آپارتمان.',
        prs: 'بحث روی قرارداد کرایه خانه، اعتراض به بل‌های نادرست و خانه‌پری صورت‌جلسه تسلیمی.',
        tr: 'Kira sözleşmelerini müzakere etme, haksız giderlere itiraz ve teslim tutanağı tutma.',
        ar: 'التفاوض بشأن عقود الإيجار، الاعتراض على التكاليف غير المبررة وتوثيق محضر التسليم.',
        es: 'Negociación de contratos de arrendamiento, reclamación de gastos y actas de entrega.'
      },
      content: 'Die Kündigungsfrist beträgt drei Monate. / Wir verlangen die Beseitigung der im Protokoll vermerkten Mängel.',
      audioText: 'Laut Gesetz ist der Vermieter verpflichtet, die Kaution getrennt von seinem Privatvermögen anzulegen.',
      practiceTasks: [
        'Formulieren Sie eine schriftliche Mängelanzeige an den Vermieter.',
        'Spielen Sie ein Streitgespräch über die Rückzahlung der Mietkaution.'
      ]
    },
    sectionB: {
      title: 'Mussawi B: Wortschatz & Hören',
      focus: 'Hören & Wortschatz (Mietrecht & Vertragssprache)',
      description: {
        en: 'Legal terminology of leasing, consumer rights, security deposits, and building regulations.',
        fa: 'واژگان حقوقی اجاره، حقوق مصرف‌کننده، ودیعه مسکن و مقررات ساختمانی.',
        prs: 'لغات حقوقی قرارداد کرایه، ضمانت بانکی (Kaution) و قوانین حقوق مستاجر.',
        tr: 'Kira hukuku, tüketici hakları, depozito ve bina yönetmeliği kavramları.',
        ar: 'المصطلحات القانونية للإيجار، حقوق المستهلك، التأمين المالي ولوائح السكن.',
        es: 'Términos jurídicos de arrendamiento, fianza, derechos del inquilino y normativa.'
      },
      content: 'die Mietkaution, die Nebenkostenabrechnung, die Schönheitsreparatur, die Kündigungsfrist, die Abmahnung.',
      practiceTasks: [
        'Prüfen Sie eine Muster-Nebenkostenabrechnung auf unzulässige Posten.',
        'Verfassen Sie einen Widerspruch gegen eine unbegründete Mieterhöhung.'
      ]
    },
    sectionC: {
      title: 'Mussawi C: Alltagskommunikation',
      focus: 'Sprechen & Dialoge (Beratung beim Mieterverein)',
      description: {
        en: 'Legal consultation at a tenants association, analyzing disputed contract clauses.',
        fa: 'مشاوره حقوقی در انجمن حمایت از مستاجران و بررسی بندهای مناقشه‌برانگیز قرارداد.',
        prs: 'مشوره با اتحادیه کرایه‌نشینان (Mieterverein) در مورد فیصله بندهای پیچیده قرارداد.',
        tr: 'Kiracılar derneğinde hukuki danışmanlık alma ve tartışmalı maddeleri analiz etme.',
        ar: 'الاستشارة القانونية لدى جمعية حماية المستأجرين وتحليل بنود العقود الخلافية.',
        es: 'Asesoría en la asociación de inquilinos y análisis de cláusulas contractuales.'
      },
      content: 'Ist diese Klausel über Schönheitsreparaturen rechtlich wirksam?',
      audioText: 'Der Bundesgerichtshof hat starre Renovierungsfristen in Mietverträgen für unwirksam erklärt.',
      practiceTasks: [
        'Simulieren Sie ein Beratungsgespräch beim Mieterverein.',
        'Erläutern Sie die Rechtslage bei einer Kündigung wegen Eigenbedarfs.'
      ]
    },
    sectionD: {
      title: 'Mussawi D: Leseverstehen & Text',
      focus: 'Lesen & Textanalyse (Mietvertrag & Gerichtsurteile)',
      description: {
        en: 'Examine standard rental contracts and court rulings from the Federal Court of Justice (BGH).',
        fa: 'بررسی قراردادهای استاندارد اجاره و آرای دیوان عالی فدرال آلمان.',
        prs: 'خواندن قراردادهای ستندرد و احکام محکمه عالی فدرال آلمان (BGH).',
        tr: 'Standart kira kontratlarını ve Federal Mahkeme içtihatlarını inceleme.',
        ar: 'دراسة عقود الإيجار النموذجية وأحكام محكمة العدل الاتحادية العليا.',
        es: 'Examen de contratos de alquiler tipo y sentencias del Tribunal Supremo Federal.'
      },
      content: 'Auszug aus einem Formularmietvertrag zur Umlagefähigkeit von Betriebskosten.',
      practiceTasks: [
        'Identifizieren Sie unwirksame Formularklauseln im vorliegenden Vertrag.',
        'Ermitteln Sie die Frist zur fristlosen Kündigung bei Zahlungsverzug.'
      ]
    },
    sectionE: {
      title: 'Mussawi E: Grammatik & Schreiben',
      focus: 'Grammatik & Schreiben (Partizip I und II als Adjektive vor dem Nomen)',
      description: {
        en: 'Use Participle I (present/active) and Participle II (past/passive) with appropriate adjective endings before nouns.',
        fa: 'کاربرد صفت‌های برآمده از صفت فاعلی (Partizip I) و صفت مفعولی (Partizip II) همراه با پسوند صرف صفت.',
        prs: 'استفاده از Partizip I و Partizip II به عنوان صفت پیش از اسم با پسوندهای مناسب صرفی.',
        tr: 'Partizip I ve Partizip II yapılarının sıfat çekim ekleriyle isim önünde kullanımı.',
        ar: 'استخدام اسم الفاعل (Partizip I) واسم المفعول (Partizip II) كنعوت تسبق الأسماء مع علامات الإعراب.',
        es: 'Uso del participio I y II como adjetivos atributivos con declinación correspondiente.'
      },
      content: 'Partizip I (aktivisch/andauernd): "der steigende Mietpreis" / Partizip II (passivisch/abgeschlossen): "die bezahlte Kaution".',
      grammarRule: {
        id: 'b2_1_partizip_adjektiv',
        level: 'B2.1',
        germanTitle: 'Partizip I und II als Adjektivattribute',
        formula: 'Partizip I = Verbstamm + d + Adjektivendung | Partizip II = ge-...-t/-en + Adjektivendung',
        explanation: {
          en: 'Participle I (Infinitiv + d) expresses an active, ongoing action ("der bellende Hund"). Participle II expresses a completed or passive state ("die renovierte Wohnung"). Both take standard adjective endings.',
          fa: 'صفت فاعلی (مصدر + d) بیانگر عملی جاری و فاعلی است (مانند der steigende Mietpreis). صفت مفعولی نشان‌دهنده عملی پایان‌یافته یا مجهول است (مانند die renovierte Wohnung). هر دو از قواعد صرف صفت تبعیت می‌کنند.',
          prs: 'صفت Partizip I جریان یک کار فعال را نشان می‌دهد و Partizip II کار تکمیل‌شده یا مجهول را بیان می‌دارد.',
          tr: 'Partizip I (mastar + d) devam eden aktif bir eylemi, Partizip II ise tamamlanmış edilgen bir durumu niteler.',
          ar: 'يعبر اسم الفاعل (المصدر + d) عن حدث مستمر ونشط، بينما يعبر اسم المفعول عن حدث منجز أو مبني للمجهول.',
          es: 'El participio I expresa acción continua y activa; el participio II indica estado concluido o pasivo.'
        },
        examples: [
          {
            german: 'Die im Mietvertrag vereinbarte Kaution muss in drei gleichen Raten gezahlt werden.',
            formulaBreakdown: 'Die (Artikel) + im Mietvertrag vereinbarte (Partizip II mit Endung -e) + Kaution (Nomen).',
            literalTranslation: {
              en: 'The in lease agreed deposit must in three equal installments paid be.',
              fa: 'ودیعه توافق‌شده در قرارداد اجاره باید در سه قسط مساوی پرداخت شود.',
              prs: 'ضمانت پولی توافق‌شده در قرارداد باید در سه قسط مساوی تحویل داده شود.',
              tr: 'Kira sözleşmesinde kararlaştırılan depozito üç eşit taksitte ödenmelidir.',
              ar: 'يجب سداد مبلغ التأمين المتفق عليه في العقد على ثلاث دفعات متساوية.',
              es: 'La fianza pactada en el contrato debe abonarse en tres plazos iguales.'
            },
            fluentTranslation: {
              en: 'The rental security deposit agreed upon in the lease can be paid in three equal monthly installments.',
              fa: 'ودیعه مسکن مندرج در قرارداد اجاره می‌تواند در سه قسط مساوی پرداخت گردد.',
              prs: 'پول ضمانت خانه که در قرارداد آمده است، قابل پرداخت در سه ماه پیاپی می‌باشد.',
              tr: 'Kira kontratında belirtilen depozito tutarı üç eşit taksitte ödenebilir.',
              ar: 'يجوز دفع مبلغ الضمان المالي المحدد في العقد على ثلاثة أقساط شهرية متساوية.',
              es: 'El depósito de fianza estipulado en el contrato de alquiler puede pagarse en tres cuotas iguales.'
            }
          }
        ]
      },
      practiceTasks: [
        'Bilden Sie attributive Partizipien: "die Preise, die steigen" -> "die steigenden Preise".',
        'Verfassen Sie einen formellen Brief an den Vermieter bezüglich einer defekten Heizung.'
      ]
    },
    vocabularies: [
      { id: 'b2_1_v7', word: 'die Mietkaution', article: 'die', plural: 'die Mietkautionen', ipa: '/ˈmiːtkaʊ̯ˌt͡si̯oːn/', translation: { en: 'rental security deposit', fa: 'ودیعه اجاره خانه', prs: 'پول ضمانت کرایه خانه', tr: 'kira depozitosu', ar: 'مبلغ تأمين الإيجار', es: 'fianza de arrendamiento' } },
      { id: 'b2_1_v8', word: 'die Nebenkosten', article: 'die', plural: 'die Nebenkosten', ipa: '/ˈneːbn̩ˌkɔstn̩/', translation: { en: 'additional costs / utilities', fa: 'هزینه‌های جانبی و شارژ ساختمان', prs: 'مصارف جانبی و بل‌های آب و گاز', tr: 'yan giderler / aidat', ar: 'التكاليف الإضافية والخدمات', es: 'gastos de comunidad y suministros' } },
      { id: 'b2_1_v9', word: 'die Kündigungsfrist', article: 'die', plural: 'die Kündigungsfristen', ipa: '/ˈkʏndɪɡʊŋsˌfʁɪst/', translation: { en: 'notice period for termination', fa: 'مهلت اخطار فسخ قرارداد', prs: 'مدت اطلاع قبلی برای فسخ قرارداد', tr: 'ihbar / fesih süresi', ar: 'مهلة الإشعار بإنهاء العقد', es: 'plazo de preaviso de rescisión' } }
    ],
    exercises: [
      {
        id: 'ex_b2_1_3',
        type: 'fill_blank',
        instruction: {
          en: 'Insert the correct Participle I attribute.',
          fa: 'صفت فاعلی (Partizip I) مناسب را وارد کنید.',
          prs: 'صفت فاعلی درست را در جای خالی بنویسید.',
          tr: 'Doğru Partizip I sıfatını yerleştiriniz.',
          ar: 'ضع صيغة اسم الفاعل (Partizip I) الصحيحة في الفراغ.',
          es: 'Inserta el participio I correspondiente como adjetivo.'
        },
        prompt: 'Die ständig _____ (steigen) Mietpreise in Großstädten stellen ein großes soziales Problem dar.',
        options: ['steigenden', 'gestiegenen', 'steigende', 'steigend'],
        correctAnswer: 'steigenden',
        explanation: {
          en: 'Plural Accusative / Nominative with definite article "Die" requires weak adjective ending "-en": "die ständig steigenden Mietpreise".',
          fa: 'برای اسم جمع دارای آرتیکل معین "Die"، پسوند صفت ضعیف "-en" الزامی است: die ständig steigenden Mietpreise.',
          prs: 'برای اسم جمع با آرتیکل معین، پسوند صفت en می‌گیرد: steigenden.',
          tr: 'Belirli artikel "Die" ile çoğul durumda sıfat "-en" ekini alır: "steigenden".',
          ar: 'في صيغة الجمع مع أداة التعريف "Die" تأخذ الصفة اللاحقة "-en": "steigenden".',
          es: 'En plural con artículo determinado "Die", el adjetivo adopta la terminación débil "-en": "steigenden".'
        }
      },
      {
        id: 'ex_b2_1_3_b',
        type: 'sentence_reorder',
        instruction: {
          en: 'Reorder the sentence with Participle II used as an adjective.',
          fa: 'کلمات را مرتب کنید تا جمله‌ای با صفت مفعولی (Partizip II) ساخته شود.',
          prs: 'کلمات را طوری مرتب کنید که جمله با صفت مفعولی ساخته شود.',
          tr: 'Cümleyi sıfat olarak kullanılan Partizip II ile sıralayın.',
          ar: 'رتب الجملة باستخدام اسم المفعول كصفة.',
          es: 'Ordena la frase con el participio II como adjetivo.'
        },
        prompt: 'Arrange the sentence blocks:',
        options: ['Der', 'unterschriebene', 'Mietvertrag', 'muss', 'an den Vermieter', 'zurückgeschickt', 'werden.'],
        correctAnswer: 'Der unterschriebene Mietvertrag muss an den Vermieter zurückgeschickt werden.',
        explanation: {
          en: '"Der unterschriebene Mietvertrag" (Partizip II attribute) + Modalverb "muss" + prepositional phrase + "zurückgeschickt werden" (Passiv Infinitiv).',
          fa: 'صفت مفعولی der unterschriebene همراه با ساختار مجهول فعل کمکی در انتهای جمله.',
          prs: 'صفت مفعولی با مجهول فعل مدال.',
          tr: 'Partizip II sıfatı ve edilgen modal fiil yapısı.',
          ar: 'اسم مفعول كصفة مع صيغة المبني للمجهول للفعل المساعد.',
          es: 'Atributo de participio II con pasiva de verbo modal.'
        }
      },
      {
        id: 'ex_b2_1_3_c',
        type: 'multiple_choice',
        instruction: {
          en: 'Choose the correct legal term for utility costs in German rental law.',
          fa: 'اصطلاح حقوقی صحیح برای هزینه‌های شارژ و جانبی اجاره‌نشینی در آلمان را انتخاب کنید.',
          prs: 'کلمه مسلکی مناسب برای مصارف جانبی کرایه‌نشینی کدام است؟',
          tr: 'Kira hukukunda yan giderler ve aidat için doğru hukuki terimi seçin.',
          ar: 'اختر المصطلح القانوني الصحيح للتكاليف الإضافية في قانون الإيجار الألماني.',
          es: 'Elige el término jurídico correcto para los gastos de comunidad y suministros.'
        },
        prompt: 'Die monatliche Warmmiete setzt sich aus der Kaltmiete und den _____ zusammen.',
        options: ['Nebenkosten', 'Kautionssummen', 'Provisionen', 'Schuldzinsen'],
        correctAnswer: 'Nebenkosten',
        explanation: {
          en: 'Warmmiete = Kaltmiete + Nebenkosten (heating, water, garbage collection, etc.).',
          fa: 'کرایه گرم (Warmmiete) از جمع کرایه پایه (Kaltmiete) و هزینه‌های جانبی (Nebenkosten) تشکیل می‌شود.',
          prs: 'وارم‌میته شامل کالت‌میته و نبن‌کوستن است.',
          tr: 'Warmmiete, Kaltmiete ve Nebenkosten toplamından oluşur.',
          ar: 'تتكون الأجرة الشاملة (Warmmiete) من الأجرة الصافية (Kaltmiete) مضافاً إليها التكاليف الإضافية (Nebenkosten).',
          es: 'El alquiler total (Warmmiete) se compone del alquiler neto más los gastos de comunidad (Nebenkosten).'
        }
      }
    ]
  },

  // ================= LEKTION 4 =================
  {
    id: 'b2_1_lek4',
    lektionNumber: 4,
    level: 'B2.1',
    title: 'Forschung, Wissenschaft und akademischer Diskurs',
    subTitle: 'Wissenschaftliche Methodik und indirekte Rede (Lektion 4)',
    topic: 'Akademische Diskurse, Studienanalyse und Konjunktiv I',
    fotoHoergeschichte: {
      title: 'Foto-Hörgeschichte: Das Forschungskolloquium an der TU München',
      imagePrompt: 'A bright university lecture hall at the Technical University of Munich where PhD researchers and professors debate quantum computing and artificial intelligence research papers.',
      imageTheme: 'Wissenschaft und Universität',
      audioDuration: '03:10',
      transcript: [
        { speaker: 'Prof. Dr. Hartmann', text: 'Meine Damen und Herren, ich eröffne unser heutiges Kolloquium. Frau Dr. Al-Mansoor stellt ihre neuesten Forschungsergebnisse zur KI-basierten Materialsimulation vor.' },
        { speaker: 'Dr. Al-Mansoor', text: 'Vielen Dank, Herr Professor. Unsere empirischen Daten belegen eindeutig, dass neuartige Algorithmen die Entwicklungsdauer von Batteriezellen um bis zu 40 Prozent verkürzen können.' },
        { speaker: 'Dr. Weimann', text: 'Ein bemerkenswertes Ergebnis! Jedoch stellt sich die methodische Frage, ob diese Simulationen auch unter extremen thermischen Belastungen valide bleiben.' },
        { speaker: 'Dr. Al-Mansoor', text: 'Genau das haben wir in einer Kontrollgruppe überprüft: Die statistische Signifikanz lag bei p kleiner als 0,01.' }
      ],
      summary: {
        en: 'At a scientific colloquium at TU Munich, researchers present and critically evaluate AI-driven battery material simulations, discussing empirical validity and methodological precision.',
        fa: 'در یک جلسه علمی دانشگاه فنی مونیخ، پژوهشگران نتایج شبیه‌سازی باتری‌ها با هوش مصنوعی را ارائه داده و دقت متدولوژی را بررسی می‌کنند.',
        prs: 'در یک سمینار علمی پوهنتون مونیخ، محققان تحقیقات خود را پیرامون باتری‌ها با هوش مصنوعی بحث می‌کنند.',
        tr: 'Münih Teknik Üniversitesi\'ndeki araştırma kolokyumunda araştırmacılar yapay zeka tabanlı pil simülasyonlarını metodolojik açıdan tartışmaktadır.',
        ar: 'في ندوة علمية بجامعة ميونيخ التقنية، يستعرض الباحثون نتائج محاكاة مواد البطاريات بالذكاء الاصطناعي ويناقشون الدقة المنهجية.',
        es: 'En un coloquio científico en la Universidad Técnica de Múnich, investigadores exponen y evalúan simulaciones de materiales mediante IA.'
      }
    },
    sectionA: {
      title: 'Mussawi A: Sprechen & Dialog',
      focus: 'Sprechen & Hören (Wissenschaftlicher Vortrag & Fachdiskussion)',
      description: {
        en: 'Deliver academic arguments, cite studies, and defend research methodologies politely and precisely.',
        fa: 'ارائه استدلال‌های دانشگاهی، ارجاع به مقالات معتبر و دفاع مودبانه و دقیق از متدولوژی پژوهش.',
        prs: 'ارائه استدلال‌های علمی و دفاع مسلکی از روش تحقیق.',
        tr: 'Akademik tez savunması, çalışmalara atıfta bulunma ve bilimsel tartışma yürütme.',
        ar: 'تقديم الحجج الأكاديمية والاستشهاد بالدراسات والدفاع الرصين عن منهجية البحث.',
        es: 'Exposición académica, cita de estudios científicos y defensa de hipótesis de investigación.'
      },
      content: 'Wissenschaftliche Redemittel: "Aus der vorliegenden Studie geht hervor, dass...", "Es ist zu konstatieren, dass...", "Dieser Befund deckt sich mit den Ergebnissen von...".',
      audioText: 'Laut dem aktuellen Forschungsbericht sei die Methode reproduzierbar und liefere konsistente Messwerte.',
      practiceTasks: [
        'Formulieren Sie ein Statement zu einer wissenschaftlichen Kontroverse.',
        'Widersprechen Sie einem Kollegen im akademischen Register.'
      ]
    },
    sectionB: {
      title: 'Mussawi B: Wortschatz & Hören',
      focus: 'Hören & Wortschatz (Statistik, Empirie und Methodik)',
      description: {
        en: 'Master technical terminology for data collection, empirical proof, and statistical evaluation.',
        fa: 'تسلط بر واژگان تخصصی جمع‌آوری داده‌ها، آزمون‌های آماری و ارزیابی تجربی.',
        prs: 'لغات تخصصی احصائیه، جمع‌آوری ارقام و روش‌های تجربی.',
        tr: 'İstatistik, veri toplama ve ampirik araştırma yöntemlerine dair ileri terminoloji.',
        ar: 'مصطلحات متقدمة للإحصاء وجمع البيانات والتقييم التجريبي للبحوث.',
        es: 'Terminología técnica de muestreo empírico, inferencia estadística y metodología científica.'
      },
      content: 'die Signifikanz, die Kontrollgruppe, die Kausalität, die Korrelation, der Paradigmenwechsel, die Reproduzierbarkeit.',
      practiceTasks: [
        'Unterscheiden Sie Kausalität und Korrelation anhand konkreter Beispiele.',
        'Fassen Sie einen wissenschaftlichen Hörtext in Stichpunkten zusammen.'
      ]
    },
    sectionC: {
      title: 'Mussawi C: Alltagskommunikation',
      focus: 'Sprechen & Dialoge (Feedback auf Fachkonferenzen geben)',
      description: {
        en: 'Provide constructive criticism, chair panel discussions, and manage Q&A sessions.',
        fa: 'ارائه نقد سازنده علمی، مدیریت پنل‌های گفتگو و پاسخگویی به پرسش‌های حضار در کنفرانس‌ها.',
        prs: 'نقد علمی سازنده و مدیریت جلسات سوال و جواب در کنفرانس‌ها.',
        tr: 'Konferanslarda yapıcı geri bildirim verme ve soru-cevap oturumlarını yönetme.',
        ar: 'تقديم النقد البناء في المؤتمرات وإدارة الجلسات الحوارية وتلقي الأسئلة.',
        es: 'Aportar retroalimentación constructiva y moderar mesas redondas en congresos científicos.'
      },
      content: 'Ich möchte an Ihren Gedanken anknüpfen und folgende Perspektive ergänzen...',
      audioText: 'Vielen Dank für Ihren erhellenden Vortrag. Dürfte ich nachhaken, wie Sie den Selektionsbias in Ihrer Stichprobe kontrolliert haben?',
      practiceTasks: [
        'Simulieren Sie eine Fragerunde nach einem wissenschaftlichen Fachvortrag.',
        'Formulieren Sie eine vorsichtige Skepsis gegenüber einer Verallgemeinerung.'
      ]
    },
    sectionD: {
      title: 'Mussawi D: Leseverstehen & Text',
      focus: 'Lesen & Textanalyse (Abstracts und Peer-Review-Verfahren)',
      description: {
        en: 'Analyze scientific journal abstracts and peer-reviewed articles on emerging technologies.',
        fa: 'تحلیل چکیده مقالات علمی و بررسی فرآیند داوری همتا (Peer Review) در ژورنال‌های تخصصی.',
        prs: 'تحلیل خلاصه‌های مقالات علمی در ژورنال‌های معتبر بین‌المللی.',
        tr: 'Hakemli dergilerdeki akademik özetleri ve değerlendirme süreçlerini inceleme.',
        ar: 'قراءة وفحص ملخصات البحوث المحكمة في المجلات العلمية المرموقة.',
        es: 'Análisis de resúmenes (abstracts) y dictámenes de revisión por pares en revistas científicas.'
      },
      content: 'Abstract aus dem Journal of Applied Physics zur supraleitenden Quantenarchitektur.',
      readingText: {
        type: 'Wissenschaftlicher Fachaufsatz (Abstract)',
        title: 'Skalierbare Quantensysteme bei Raumtemperatur',
        body: 'In dieser Studie präsentieren wir eine neuartige topologische Kristallstruktur, welche Quantenkohärenz bei bis zu 285 Kelvin aufrechterhält. Die experimentellen Befunde weisen darauf hin, dass die Dekohärenzrate gegenüber herkömmlichen Systemen um Größenordnungen reduziert werden kann. Dies eröffnet weitreichende Perspektiven für die praktische Realisierung robuster Quantenprozessoren.'
      },
      practiceTasks: [
        'Ermitteln Sie die Hypothese, Methode und das Hauptergebnis des Abstracts.',
        'Erklären Sie den Unterschied zwischen Dekohärenz und Kohärenz im Textzusammenhang.'
      ]
    },
    sectionE: {
      title: 'Mussawi E: Grammatik & Schreiben',
      focus: 'Grammatik & Schreiben (Konjunktiv I in der indirekten Rede)',
      description: {
        en: 'Report claims, statements, and scientific citations using Konjunktiv I and its substitute forms.',
        fa: 'نقل‌قول‌های غیرمستقیم، ادعاها و استنادات علمی با استفاده از زمان التزامی یک (Konjunktiv I).',
        prs: 'نقل قول غیرمستقیم و استنادات علمی با وجه التزامی اول (Konjunktiv I).',
        tr: 'Dolaylı anlatımda Konjunktiv I kullanımı ve akademik alıntı kuralları.',
        ar: 'نقل الأقوال غير المباشرة والاستشهادات العلمية بصيغة Konjunktiv I وبدائلها.',
        es: 'Discurso indirecto formal y citas científicas mediante el uso del Konjunktiv I.'
      },
      content: 'Konjunktiv I: "Der Forscher erklärt, das Experiment sei erfolgreich gewesen und liefere verlässliche Werte."',
      grammarRule: {
        id: 'b2_1_konjunktiv1',
        level: 'B2.1',
        category: 'subjunctive',
        germanTitle: 'Konjunktiv I zur objektiven Distanzierung in der Berichterstattung',
        formula: 'Präsensstamm + Konjunktiv-Endungen (-e, -est, -e, -en, -et, -en)',
        explanation: {
          en: 'Konjunktiv I is formed from the present verb stem + subjunctive endings (-e, -est, -e, -en, -et, -en). If the form is identical to the indicative (e.g. wir haben), Konjunktiv II (hätten) or "würde + Infinitiv" is used as a replacement.',
          fa: 'کونژونکتیو ۱ از ریشه زمان حال به علاوه پسوندهای التزامی ساخته می‌شود. در صورتی که ساختار با وجه اخباری یکی باشد، از کونژونکتیو ۲ یا würde به عنوان جانشین استفاده می‌گردد.',
          prs: 'وجه التزامی ۱ برای نقل قول بی‌طرفانه در متون علمی و اخبار رسمی به کار می‌رود.',
          tr: 'Konjunktiv I fiil köküne özel ekler getirilerek yapılır; haber ve bilimsel alıntılarda tarafsız mesafe bildirir.',
          ar: 'يُصاغ Konjunktiv I بإضافة لواحق خاصة لجذر المضارع للدلالة على الحياد ونقل الرأي في الأوساط الأكاديمية والإعلامية.',
          es: 'El Konjunktiv I se forma con la raíz de presente y expresa distancia objetiva al citar declaraciones ajenas.'
        },
        examples: [
          {
            german: 'Die Ministerin betonte, die Regierung habe alle notwendigen Maßnahmen ergriffen.',
            formulaBreakdown: 'Die Ministerin (S) + betonte (V_Einleitung) + die Regierung (S_indirekt) + habe ergriffen (Konjunktiv I Perfekt).',
            literalTranslation: {
              en: 'The minister emphasized the government have all necessary measures taken.',
              fa: 'وزیر تاکید کرد که دولت تمامی تدابیر ضروری را اتخاذ نموده باشد.',
              prs: 'وزیر گفت که حکومت همه اقدامات لازم را روی دست گرفته است.',
              tr: 'Bakan, hükümetin gerekli tüm önlemleri almış olduğunu vurguladı.',
              ar: 'أكدت الوزيرة أن الحكومة اتخذت كافة الإجراءات اللازمة.',
              es: 'La ministra recalcó que el gobierno habría tomado todas las medidas necesarias.'
            },
            fluentTranslation: {
              en: 'The minister emphasized that the government had taken all necessary measures.',
              fa: 'وزیر اظهار داشت که دولت تمام اقدامات لازم را به عمل آورده است.',
              prs: 'وزیر تصریح کرد که حکومت تدابیر ضروری را اتخاذ کرده است.',
              tr: 'Bakan, hükümetin gereken adımları attığını ifade etti.',
              ar: 'أفادت الوزيرة بأن الحكومة قد اتخذت جميع التدابير الضرورية.',
              es: 'La ministra subrayó que el gobierno había adoptado todas las medidas oportunas.'
            }
          }
        ]
      },
      practiceTasks: [
        'Verwandeln Sie Zitate eines Interviews in die indirekte Rede im Konjunktiv I.',
        'Verfassen Sie einen Forschungsbericht über eine neue Solartechnologie.'
      ]
    },
    vocabularies: [
      { id: 'b2_1_v10', word: 'die Kausalität', article: 'die', plural: 'die Kausalitäten', ipa: '/kaʊ̯zaliˈtɛːt/', translation: { en: 'causality', fa: 'رابطه علت و معلولی', prs: 'علت و معلول بودن', tr: 'nedensellik', ar: 'السببية', es: 'causalidad' } },
      { id: 'b2_1_v11', word: 'die Signifikanz', article: 'die', plural: 'die Signifikanzen', ipa: '/zɪɡnifiˈkant͡s/', translation: { en: 'statistical significance', fa: 'معناداری آماری', prs: 'اهمیت احصائیوی', tr: 'istatistiksel anlamlılık', ar: 'الدلالة الإحصائية', es: 'significación estadística' } },
      { id: 'b2_1_v12', word: 'der Paradigmenwechsel', article: 'der', plural: 'die Paradigmenwechsel', ipa: '/paʁaˈdɪɡmn̩ˌvɛksl̩/', translation: { en: 'paradigm shift', fa: 'تغییر الگوواره / پارادایم', prs: 'تغییر اساسی در مفکوره علمی', tr: 'paradigma değişimi', ar: 'تحول جذري في النموذج الفكري', es: 'cambio de paradigma' } }
    ],
    exercises: [
      {
        id: 'ex_b2_1_4_a',
        type: 'multiple_choice',
        instruction: {
          en: 'Select the correct Konjunktiv I form of "sein" for the 3rd person singular.',
          fa: 'فرم صحیح Konjunktiv I فعل "sein" را برای سوم شخص مفرد انتخاب کنید.',
          prs: 'فرم درست Konjunktiv I فعل sein برای سوم شخص مفرد کدام است؟',
          tr: '3. tekil şahıs için "sein" fiilinin doğru Konjunktiv I halini seçiniz.',
          ar: 'اختر تصريف Konjunktiv I الصحيح للفعل "sein" مع الغائب المفرد.',
          es: 'Elige la forma correcta de Konjunktiv I del verbo "sein" en 3ª persona del singular.'
        },
        prompt: 'Der Studienleiter erklärte, die Datengrundlage _____ absolut verlässlich.',
        options: ['sei', 'wäre', 'ist', 'gewesen sei'],
        correctAnswer: 'sei',
        explanation: {
          en: 'The 3rd person singular Konjunktiv I of "sein" is "sei": "er/sie/es sei".',
          fa: 'سوم شخص مفرد فعل sein در Konjunktiv I واژه "sei" است.',
          prs: 'شکل Konjunktiv I فعل sein در مفرد غایب sei می‌باشد.',
          tr: '"sein" fiilinin Konjunktiv I 3. tekil çekimi "sei"dir.',
          ar: 'صيغة Konjunktiv I للفعل sein مع المفرد الغائب هي sei.',
          es: 'La 3ª persona singular de Konjunktiv I del verbo sein es "sei".'
        }
      },
      {
        id: 'ex_b2_1_4_b',
        type: 'fill_blank',
        instruction: {
          en: 'Complete the sentence with the correct Konjunktiv I form of "haben" (3rd person singular).',
          fa: 'جمله را با شکل صحیح Konjunktiv I فعل "haben" کامل کنید.',
          prs: 'جمله را با Konjunktiv I فعل haben تکمیل کنید.',
          tr: '"haben" fiilinin doğru Konjunktiv I çekimi ile boşluğu doldurun.',
          ar: 'املأ الفراغ بالصيغة الصحيحة لـ Konjunktiv I للفعل "haben".',
          es: 'Completa con la forma adecuada de Konjunktiv I del verbo "haben".'
        },
        prompt: 'Die Forscherin behauptete, das neue Verfahren _____ große Vorteile für die Umwelt.',
        options: ['habe', 'hätte', 'hat', 'haben'],
        correctAnswer: 'habe',
        explanation: {
          en: '3rd person singular Konjunktiv I of "haben" is "habe" (er/sie/es habe).',
          fa: 'سوم شخص مفرد Konjunktiv I فعل haben برابر با "habe" است.',
          prs: 'شکل سوم شخص Konjunktiv I برای haben کلمه habe است.',
          tr: '"haben" fiilinin 3. tekil Konjunktiv I şekli "habe"dir.',
          ar: 'الصيغة المناسبة هي habe للغائب المفرد في Konjunktiv I.',
          es: 'La 3ª persona singular de Konjunktiv I para haben es "habe".'
        }
      },
      {
        id: 'ex_b2_1_4_c',
        type: 'sentence_reorder',
        instruction: {
          en: 'Reconstruct the indirect speech sentence.',
          fa: 'جمله نقل قول غیرمستقیم را به ترتیب صحیح بازسازی کنید.',
          prs: 'جمله نقل قول غیرمستقیم را به ترتیب درست بچینید.',
          tr: 'Dolaylı anlatım cümlesini doğru sıraya dizin.',
          ar: 'أعد ترتيب جملة الخطاب غير المباشر بشكل صحيح.',
          es: 'Reconstruye la oración en estilo indirecto.'
        },
        prompt: 'Arrange the sentence blocks:',
        options: ['Laut Experten', 'habe', 'die Digitalisierung', 'die Forschung', 'nachhaltig', 'beschleunigt.'],
        correctAnswer: 'Laut Experten habe die Digitalisierung die Forschung nachhaltig beschleunigt.',
        explanation: {
          en: 'Prepositional introductory phrase + verb in Konjunktiv I (habe) + Subject (die Digitalisierung) + Object + Partizip II.',
          fa: 'عبارت معرف با laut + فعل در حالت التزامی ۱ (habe) + فاعل + مفعول + صفت مفعولی.',
          prs: 'ساختار رسمی نقل قول در مقالات علمی.',
          tr: 'Akademik alıntı yapısı: Laut Experten + habe + özne + nesne + fiil.',
          ar: 'بنية الاقتباس الأكاديمي: Laut Experten + habe + الفاعل + المفعول + اسم المفعول.',
          es: 'Estructura de cita indirecta: Laut Experten + habe + sujeto + complementos + participio.'
        }
      }
    ]
  },

  // ================= LEKTION 5 =================
  {
    id: 'b2_1_lek5',
    lektionNumber: 5,
    level: 'B2.1',
    title: 'Gesundheitssystem, Prävention und Patientenrechte',
    subTitle: 'Medizinische Kommunikation und Genitiv-Relativsätze (Lektion 5)',
    topic: 'Klinikalltag, Arzt-Patienten-Gespräch, Patientenverfügung und Genitiv',
    fotoHoergeschichte: {
      title: 'Foto-Hörgeschichte: Interdisziplinäre Visite an der Charité Berlin',
      imagePrompt: 'A modern medical ward at the Charité hospital in Berlin where chief physician Dr. Becker and his team discuss a complex patient case reviewing MRI scans on digital tablets.',
      imageTheme: 'Krankenhaus und Medizin',
      audioDuration: '03:20',
      transcript: [
        { speaker: 'Chefarzt Dr. Becker', text: 'Guten Morgen, Team. Kommen wir zu Patientin Frau Richter, Zimmer 204, deren chronische Entzündungswerte trotz Antibiose besorgniserregend bleiben.' },
        { speaker: 'Assistenzärztin Dr. Yilmaz', text: 'Wir haben heute früh ein MRT des Abdomens durchgeführt. Dessen Befund zeigt eine fokale Raumforderung im linken Unterbauch.' },
        { speaker: 'Chefarzt Dr. Becker', text: 'Gut erkannt. Wir müssen die Patientin unverzüglich über die Notwendigkeit einer laparoskopischen Biopsie aufklären. Liegt eine gültige Patientenverfügung vor?' },
        { speaker: 'Stationspfleger Marco', text: 'Ja, die bevollmächtigte Tochter, deren Kontaktdaten in der Akte hinterlegt sind, wurde bereits telefonisch verständigt.' }
      ],
      summary: {
        en: 'During rounds at Berlin’s Charité hospital, physicians analyze MRI results of a patient with elevated inflammation values and verify patient directives and next-of-kin permissions.',
        fa: 'در ویزیت بالینی بیمارستان شاریته برلین، پزشکان نتایج اسکن ام‌آر‌آی بیمار را بررسی نموده و وصیت‌نامه پزشکی و وکالت قانونی خانواده را کنترل می‌کنند.',
        prs: 'داکتران شفاخانه شاریته برلین نتایج ام‌آر‌آی یک مریض را چک نموده و با وکیل قانونی او تماس می‌گیرند.',
        tr: 'Berlin Charité Hastanesi\'ndeki sabah vizitinde hekimler bir hastanın MR sonuçlarını değerlendirip hasta hakları ve vekaletnameleri inceler.',
        ar: 'خلال الجولة الطبية في مستشفى شاريتيه ببرلين، يحلل الأطباء نتائج التصوير بالرنين المغناطيسي ويتحققون من وصية المريض والتوكيل الطبي.',
        es: 'Durante la ronda médica en el hospital Charité de Berlín, los médicos evalúan resonancias magnéticas y comprueban las voluntades anticipadas.'
      }
    },
    sectionA: {
      title: 'Mussawi A: Sprechen & Dialog',
      focus: 'Sprechen & Hören (Aufklärungsgespräch & Symptombeschreibung)',
      description: {
        en: 'Conduct sensitive and accurate medical conversations explaining risks, benefits, and patient rights.',
        fa: 'انجام گفتگوهای درمانی دقیق و سنجیده درباره عوارض درمان، مزایا و حقوق قانونی بیمار.',
        prs: 'گفتگوی مسلکی صحی بین داکتر و مریض با شرح خطرات و حقوق تداوی.',
        tr: 'Tıbbi riskleri, tedavi alternatiflerini ve hasta haklarını açıklayan hekim-hasta iletişimi.',
        ar: 'إجراء محادثات التوعية الطبية وشرح المخاطر وحقوق المريض بلغة دقيقة ورصينة.',
        es: 'Comunicación médico-paciente detallada sobre diagnósticos, riesgos y consentimiento informado.'
      },
      content: 'Ärztliche Redemittel: "Ich muss Sie darüber in Kenntnis setzen, dass...", "Der Eingriff birgt das minimale Risiko von...", "Welche Vorerkrankungen sind bei Ihnen diagnostiziert worden?".',
      audioText: 'Vor dem chirurgischen Eingriff müssen wir Ihre schriftliche Einwilligung einholen.',
      practiceTasks: [
        'Führen Sie ein Anamnesegespräch mit präzisen Rückfragen durch.',
        'Erklären Sie einem Patienten verständlich ein komplexes medizinisches Dokument.'
      ]
    },
    sectionB: {
      title: 'Mussawi B: Wortschatz & Hören',
      focus: 'Hören & Wortschatz (Medizinische Fachausdrücke & Diagnostik)',
      description: {
        en: 'Learn clinical terms, administrative concepts in healthcare, and pharmaceutical vocabulary.',
        fa: 'آموزش اصطلاحات بالینی، مفاهیم اداری بیمه و واژگان داروشناسی در نظام بهداشت آلمان.',
        prs: 'اصطلاحات مسلکی شفاخانه‌ای، ادویه‌جات و سیستم بیمه صحی در آلمان.',
        tr: 'Alman sağlık sistemine dair klinik terimler, reçete ve tanı söz varlığı.',
        ar: 'المصطلحات السريرية والتشخيصية ونظام التأمين الصحي في ألمانيا.',
        es: 'Léxico clínico, terminología diagnóstica y marco administrativo del sistema sanitario alemán.'
      },
      content: 'die Patientenverfügung, die Zuzahlungsbefreiung, die Vorsorgeuntersuchung, die Nebenwirkung, die Anamnese, die Einverständniserklärung.',
      practiceTasks: [
        'Ordnen Sie Fachtermini ihren patientenfreundlichen Umschreibungen zu.',
        'Notieren Sie Kerninformationen aus einem radiologischen Befundbericht.'
      ]
    },
    sectionC: {
      title: 'Mussawi C: Alltagskommunikation',
      focus: 'Sprechen & Dialoge (Telefonische Terminvereinbarung beim Facharzt)',
      description: {
        en: 'Communicate with specialized medical practices, request referrals, and explain urgency.',
        fa: 'مکالمه تلفنی با مطب پزشکان متخصص، دریافت وقت معاینه و تشریح فوریت بیماری با حفظ خونسردی.',
        prs: 'گرفتن وقت عاجل از داکتر متخصص و توضیح علائم مریضی از طریق تیلفون.',
        tr: 'Uzman doktordan randevu alma, sevk belgesi ve aciliyet durumunu aktarma.',
        ar: 'حجز مواعيد الفحوصات التخصصية عبر الهاتف وشرح الحالات الطارئة بدقة.',
        es: 'Gestión telefónica de citas con especialistas médicos y justificación de urgencias.'
      },
      content: 'Ich rufe an, weil mein Hausarzt mir eine Dringlichkeitsüberweisung mit Vermittlungscode ausgestellt hat.',
      audioText: 'Guten Tag, Praxis Dr. Bergmann. Haben Sie eine Überweisung Ihres Hausarztes zur Hand?',
      practiceTasks: [
        'Bitten Sie höflich aber bestimmt um einen zeitnahen Akuttermin.',
        'Fragen Sie nach Vorbereitungen für eine nüchterne Blutabnahme.'
      ]
    },
    sectionD: {
      title: 'Mussawi D: Leseverstehen & Text',
      focus: 'Lesen & Textanalyse (Gesundheitspolitische Leitartikel)',
      description: {
        en: 'Read analyses on the shortage of general practitioners and electronic patient records (ePA).',
        fa: 'مطالعه و تحلیل مقالات پیرامون کمبود پزشکان عمومی در مناطق روستایی و پرونده الکترونیک سلامت (ePA).',
        prs: 'خواندن مقالات در مورد دوسیه برقی صحی و کمبود داکتر در دهات.',
        tr: 'Kırsal kesimdeki doktor açığı ve elektronik hasta kaydı üzerine sağlık politikası makaleleri.',
        ar: 'تحليل مقالات السياسة الصحية حول نقص الأطباء والسجل الطبي الإلكتروني الموحد.',
        es: 'Lectura de artículos sobre política sanitaria, telemedicina e historial clínico digital.'
      },
      content: 'Aufsatz aus dem Deutschen Ärzteblatt zur flächendeckenden Einführung der elektronischen Patientenakte.',
      readingText: {
        type: 'Gesundheitspolitischer Fachbericht',
        title: 'Die Digitalisierung im Gesundheitswesen: Chancen und Datenschutz',
        body: 'Die Einführung der elektronischen Patientenakte (ePA) soll Doppeluntersuchungen verhindern und Notfallärzten sofortigen Zugriff auf lebenswichtige Medikationspläne ermöglichen. Verbraucherschützer fordern jedoch strengste Sicherheitsstandards zum Schutz hochsensibler Gesundheitsdaten vor unbefugtem Zugriff.'
      },
      practiceTasks: [
        'Arbeiten Sie Vor- und Nachteile der elektronischen Akte aus dem Text heraus.',
        'Nehmen Sie Stellung zur Verpflichtung von Krankenkassen zur Aufklärung.'
      ]
    },
    sectionE: {
      title: 'Mussawi E: Grammatik & Schreiben',
      focus: 'Grammatik & Schreiben (Relativsätze im Genitiv: dessen / deren)',
      description: {
        en: 'Form advanced relative clauses expressing possession or association using "dessen" and "deren".',
        fa: 'ساخت جملات موصولی پیشرفته در حالت ملکی (Genitiv) با استفاده از ضمیرهای "dessen" و "deren".',
        prs: 'جملات فرعی ارتباطی ملکی با ضمایر dessen و deren در حالت Genitiv.',
        tr: 'Aitlik bildiren Genitiv ilgi cümleleri (dessen / deren) ve doğru kullanımı.',
        ar: 'صياغة جمل الصلة المتقدمة في حالة الإضافة (Genitiv) باستخدام dessen و deren.',
        es: 'Oraciones de relativo en caso genitivo para indicar posesión mediante "dessen" y "deren".'
      },
      content: 'Relativpronomen im Genitiv: Maskulin/Neutral: dessen | Feminin/Plural: deren. "Der Patient, dessen Befund unklar war..." / "Die Ärztin, deren Forschung ausgezeichnet wurde...".',
      grammarRule: {
        id: 'b2_1_relativ_genitiv',
        level: 'B2.1',
        category: 'subordinate_clauses',
        germanTitle: 'Relativpronomen dessen / deren zur Verknüpfung komplexer Bezüge',
        formula: 'dessen (masc./neutr.) / deren (fem./pl.) + Nomen + ... + Verb am Ende',
        explanation: {
          en: 'Relative pronouns in the Genitive replace possessive articles. They never take an article before the noun they modify, and their form depends on the gender of the reference word, not the subsequent noun.',
          fa: 'ضمایر موصولی در حالت اضافه (Genitiv) جایگزین صفت‌های ملکی می‌شوند. شکل آن‌ها بر اساس جنسیت مرجع مشخص می‌شود (مذکر و خنثی: dessen، مؤنث و جمع: deren) و اسم پس از آن‌ها آرتیکل نمی‌گیرد.',
          prs: 'ضمایر موصولی در حالت ملکی به اساس کلمه قبلی انتخاب می‌شوند و اسم بعد از آن‌ها آرتیکل نمی‌گیرد.',
          tr: 'Genitiv ilgi zamirleri aitlik belirtir. Eril ve nötr için dessen, dişil ve çoğul için deren kullanılır.',
          ar: 'تستخدم ضمائر الصلة في حالة الإضافة للربط الملكي: dessen للمذكر والمحايد، و deren للمؤنث والجمع، والاسم الذي يليها لا يأخذ أداة تعريف.',
          es: 'Los pronombres relativos de genitivo sustituyen al posesivo: "dessen" (masc./neutro) y "deren" (fem./plural).'
        },
        examples: [
          {
            german: 'Wir behandeln einen Patienten, dessen Genesung große Fortschritte macht.',
            formulaBreakdown: 'einen Patienten (Bezugswort masc. Akk.) -> dessen (Relativpronomen Genitiv) + Genesung (S) + macht (V am Ende).',
            literalTranslation: {
              en: 'We treat a patient whose recovery big progress makes.',
              fa: 'ما بیماری را درمان می‌کنیم که بهبود او پیشرفت بزرگی نشان می‌دهد.',
              prs: 'ما مریضی را تداوی می‌کنیم که صحت‌یابی‌اش پیشرفت خوبی دارد.',
              tr: 'İyileşmesi büyük ilerleme kaydeden bir hastayı tedavi ediyoruz.',
              ar: 'نعالج مريضاً يحرز شفاؤه تقدماً ملحوظاً.',
              es: 'Tratamos a un paciente cuya recuperación muestra grandes progresos.'
            },
            fluentTranslation: {
              en: 'We are treating a patient whose recovery is making great progress.',
              fa: 'ما بیماری را تحت درمان داریم که روند بهبودی‌اش پیشرفت چشمگیری داشته است.',
              prs: 'مریضی تحت تداوی ماست که صحت او رو به بهبودی چشمگیر است.',
              tr: 'İyileşme süreci gayet olumlu ilerleyen bir hastaya bakmaktayız.',
              ar: 'نقوم على علاج مريض يشهد وضعه الصحي تحسناً كبيراً.',
              es: 'Estamos tratando a un paciente cuya mejoría avanza a pasos agigantados.'
            }
          }
        ]
      },
      practiceTasks: [
        'Verbinden Sie Hauptsätze mit Genitiv-Relativsätzen.',
        'Verfassen Sie eine formelle Patientenbeschwerde über mangelnde Aufklärung.'
      ]
    },
    vocabularies: [
      { id: 'b2_1_v13', word: 'die Patientenverfügung', article: 'die', plural: 'die Patientenverfügungen', ipa: '/paˈt͡si̯ɛntn̩fɛɐ̯ˌfyːɡʊŋ/', translation: { en: 'advance healthcare directive', fa: 'وصیت‌نامه پزشکی و درمانی', prs: 'وصیت‌نامه صحی در صورت بیهوشی', tr: 'hasta vasiyeti / vekaleti', ar: 'الوصية الطبية الحياتية المسبقة', es: 'voluntades anticipadas / testamento vital' } },
      { id: 'b2_1_v14', word: 'die Vorsorgeuntersuchung', article: 'die', plural: 'die Vorsorgeuntersuchungen', ipa: '/ˈfoːɐ̯zɔʁɡəʔʊntɐˌzuːxʊŋ/', translation: { en: 'preventive medical checkup', fa: 'معاینه غربالگری و پیشگیرانه', prs: 'چک‌آپ و معاینات وقایوی داکتر', tr: 'önleyici sağlık taraması', ar: 'الفحص الطبي الوقائي الدوري', es: 'chequeo médico preventivo' } },
      { id: 'b2_1_v15', word: 'die Nebenwirkung', article: 'die', plural: 'die Nebenwirkungen', ipa: '/ˈneːbn̩ˌvɪʁkʊŋ/', translation: { en: 'side effect (medication)', fa: 'عوارض جانبی دارو', prs: 'عوارض جانبی دوا', tr: 'yan etki', ar: 'أثر جانبي دوائي', es: 'efecto secundario / adverso' } }
    ],
    exercises: [
      {
        id: 'ex_b2_1_5_a',
        type: 'multiple_choice',
        instruction: {
          en: 'Choose the correct relative pronoun in the Genitive.',
          fa: 'ضمیر موصولی مناسب در حالت Genitiv را انتخاب کنید.',
          prs: 'ضمیر موصولی مناسب در حالت ملکی را برگزینید.',
          tr: 'Genitiv durumundaki doğru ilgi zamirini seçiniz.',
          ar: 'اختر ضمير الصلة المناسب في حالة الإضافة (Genitiv).',
          es: 'Elige el pronombre relativo de genitivo correspondiente.'
        },
        prompt: 'Das ist die Chefärztin, _____ Fachaufsatz international für Aufsehen sorgte.',
        options: ['deren', 'dessen', 'derer', 'welche'],
        correctAnswer: 'deren',
        explanation: {
          en: 'The reference noun "die Chefärztin" is feminine singular; the Genitive relative pronoun is "deren".',
          fa: 'کلمه مرجع "die Chefärztin" مؤنث مفرد است و ضمیر موصولی ملکی آن "deren" می‌شود.',
          prs: 'برای اسم مؤنث در حالت ملکی deren استفاده می‌شود.',
          tr: '"die Chefärztin" dişil olduğundan Genitiv ilgi zamiri "deren"dir.',
          ar: 'الاسم الموصول العائد على مفرد مؤنث (die Chefärztin) في الإضافة هو deren.',
          es: 'El sustantivo antecedente es femenino singular ("die Chefärztin"), por lo que le corresponde "deren".'
        }
      },
      {
        id: 'ex_b2_1_5_b',
        type: 'fill_blank',
        instruction: {
          en: 'Insert "dessen" or "deren" according to the antecedent.',
          fa: 'با توجه به مرجع، واژه "dessen" یا "deren" را در جای خالی قرار دهید.',
          prs: 'dessen یا deren را نظر به اسم قبلی بنویسید.',
          tr: 'Önceki ismin cinsiyetine göre "dessen" veya "deren" yazınız.',
          ar: 'ضع dessen أو deren وفقاً للاسم الموصوف.',
          es: 'Escribe "dessen" o "deren" según corresponda.'
        },
        prompt: 'Wir danken dem Chirurgen, _____ präzise Operation das Leben des Patienten rettete.',
        options: ['dessen', 'deren', 'dem', 'des'],
        correctAnswer: 'dessen',
        explanation: {
          en: '"Der Chirurg" is masculine singular, so the Genitive relative pronoun is "dessen".',
          fa: 'واژه "der Chirurg" مذکر مفرد است و بنابراین ضمیر ملکی موصولی آن "dessen" می‌باشد.',
          prs: 'اسم مذکر است و ضمیر آن dessen می‌شود.',
          tr: '"Der Chirurg" eril tekil olduğu için doğru zamir "dessen"dir.',
          ar: 'بما أن الجراح مذكر مفرد (der Chirurg)، فالضمير الصحيح هو dessen.',
          es: 'El antecedente es masculino ("der Chirurg"), por tanto se utiliza "dessen".'
        }
      },
      {
        id: 'ex_b2_1_5_c',
        type: 'sentence_reorder',
        instruction: {
          en: 'Form a correct complex relative clause in the Genitive.',
          fa: 'جمله موصولی مرکب در حالت Genitiv را به درستی مرتب کنید.',
          prs: 'جمله موصولی ملکی را به ترتیب گرامری درست بچینید.',
          tr: 'Genitiv ilgi yan cümlesini düzgünce sıralayın.',
          ar: 'رتب جملة الصلة المجرورة بشكل سليم نحوياً.',
          es: 'Ordena la oración compleja de relativo en genitivo.'
        },
        prompt: 'Arrange the sentence blocks:',
        options: ['Sie berieten die Familie,', 'deren Haus', 'durch den Brand', 'stark beschädigt', 'worden war.'],
        correctAnswer: 'Sie berieten die Familie, deren Haus durch den Brand stark beschädigt worden war.',
        explanation: {
          en: '"die Familie" (feminine) -> "deren Haus" + prepositional phrase + Partizip II + Passiv Plusquamperfekt ("worden war").',
          fa: 'مرجع مؤنث deren Haus، همراه با مجهول گذشته کامل در انتهای جمله فرعی.',
          prs: 'جمله فرعی ملکی با مجهول گذشته دور.',
          tr: 'Dişil isim için deren haus ve geçmiş zaman edilgen fiil son sırada.',
          ar: 'جملة صلة مضافة للمؤنث مع المبني للمجهول في الماضي التام.',
          es: 'Oración de relativo con "deren Haus" y pasiva de pluscuamperfecto al final.'
        }
      }
    ]
  },

  // ================= LEKTION 6 =================
  {
    id: 'b2_1_lek6',
    lektionNumber: 6,
    level: 'B2.1',
    title: 'Medienlandschaft, Digitalisierung und Meinungsbildung',
    subTitle: 'Medienkritik und zweiteilige Konnektoren (Lektion 6)',
    topic: 'Journalismus, Desinformation, Filterblasen und zweiteilige Konnektoren',
    fotoHoergeschichte: {
      title: 'Foto-Hörgeschichte: Redaktionskonferenz bei der "Süddeutschen Nachrichten"',
      imagePrompt: 'A bustling modern newsroom in Munich where journalists review digital feeds, fact-check social media reports, and debate press ethics around a large wooden table.',
      imageTheme: 'Journalismus und Medien',
      audioDuration: '03:15',
      transcript: [
        { speaker: 'Chefredakteurin Frau Sommer', text: 'Guten Morgen, Kollegium. Auf Social Media kursieren manipulierte Videoaufnahmen zu den gestrigen Demonstrationen. Bevor wir eine Meldung veröffentlichen, muss die Echtheit zweifelsfrei verifiziert werden.' },
        { speaker: 'Faktenchecker Jan', text: 'Wir haben das Material durch unsere forensische Bildanalyse gejagt: Es handelt sich eindeutig um ein KI-generiertes Deepfake-Video.' },
        { speaker: 'Ressortleiter Politik Herr Krause', text: 'Das unterstreicht erneut: Freie Medien müssen sowohl verlässlich informieren als auch Desinformationskampagnen aktiv entlarven.' },
        { speaker: 'Chefredakteurin Frau Sommer', text: 'Exakt. Verfassen Sie einen Leitartikel darüber. Wir dürfen weder voreilige Schlüsse ziehen noch die Sensibilisierung der Leser vernachlässigen.' }
      ],
      summary: {
        en: 'At an editorial conference, journalists detect an AI deepfake video circulating on social media and emphasize the dual role of the press: reporting facts and debunking disinformation.',
        fa: 'در جلسه تحریریه یک روزنامه، خبرنگاران یک ویدئوی دستکاری‌شده با دیپ‌فیک هوش مصنوعی را شناسایی کرده و بر مسئولیت مطبوعات در خنثی‌سازی اخبار جعلی تاکید می‌کنند.',
        prs: 'در جلسه خبرنگاران، یک ویدیوی ساختگی دیپ‌فیک هوش مصنوعی افشا می‌شود و نقش رسانه‌های آزاد بررسی می‌گردد.',
        tr: 'Yazı işleri toplantısında gazeteciler sahte bir yapay zeka videosunu deşifre eder ve bağımsız basının teyit sorumluluğunu vurgular.',
        ar: 'في اجتماع هيئة التحرير، يكشف الصحفيون فيديو زائفاً بالذكاء الاصطناعي (ديب فيك) ويؤكدون دور الإعلام الحر في مكافحة التضليل.',
        es: 'En la redacción de un periódico, los periodistas detectan un vídeo manipulado con IA y reivindican el papel ético del periodismo de verificación.'
      }
    },
    sectionA: {
      title: 'Mussawi A: Sprechen & Dialog',
      focus: 'Sprechen & Hören (Medienkompetenz & Debatte über Meinungsfreiheit)',
      description: {
        en: 'Discuss press freedom, algorithms, echo chambers, and regulation of digital platforms.',
        fa: 'مناظره درباره آزادی مطبوعات، نقش الگوریتم‌ها، اتاق‌های پژواک فکری و قانون‌مند کردن پلتفرم‌های دیجیتال.',
        prs: 'بحث پیرامون آزادی بیان در رسانه‌ها، الگوریتم‌های انترنت و مبارزه با شایعات.',
        tr: 'Basın özgürlüğü, yankı odaları ve dijital platformların denetimi üzerine münazara.',
        ar: 'مناقشة حرية الصحافة وتأثير الخوارزميات وفقاعات التصفية وتنظيم المنصات الرقمية.',
        es: 'Debate formal sobre libertad de prensa, sesgos algorítmicos y gobernanza digital.'
      },
      content: 'Redemittel für Diskussionen: "Einerseits birgt das Internet ungeahnte Partizipationsmöglichkeiten, andererseits fördert es die Polarisierung.", "Man darf nicht außer Acht lassen, dass...".',
      audioText: 'In einer Demokratie ist unabhängiger Journalismus das Fundament einer informierten Zivilgesellschaft.',
      practiceTasks: [
        'Diskutieren Sie Vor- und Nachteile von staatlicher Regulierung sozialer Netzwerke.',
        'Wägen Sie Informationsfreiheit gegen den Schutz vor Hassrede ab.'
      ]
    },
    sectionB: {
      title: 'Mussawi B: Wortschatz & Hören',
      focus: 'Hören & Wortschatz (Medienlandschaft & Kommunikation)',
      description: {
        en: 'Acquire high-level vocabulary related to investigative journalism, press code, and public broadcasting.',
        fa: 'فراگیری واژگان تخصصی روزنامه‌نگاری تحقیقی، منشور اخلاق رسانه‌ای و رسانه‌های خدمات عمومی.',
        prs: 'لغات مسلکی ژورنالیزم تحقیقی، اصول نشرات و مطبوعات آزاد.',
        tr: 'Araştırmacı gazetecilik, basın etiği ve kamu yayıncılığına dair ileri düzey söz dağarcığı.',
        ar: 'المفردات المتقدمة للصحافة الاستقصائية وميثاق الشرف الصحفي والإعلام العمومي.',
        es: 'Vocabulario especializado sobre periodismo de investigación, deontología periodística y radiodifusión pública.'
      },
      content: 'der Rundfunkbeitrag, die Pressemitteilung, die Gegendarstellung, die Zensur, die Medienkompetenz, der Quellenschutz.',
      practiceTasks: [
        'Erklären Sie den rechtlichen Anspruch auf eine Gegendarstellung.',
        'Verfassen Sie ein prägnantes Statement zum Thema Whistleblowing.'
      ]
    },
    sectionC: {
      title: 'Mussawi C: Alltagskommunikation',
      focus: 'Sprechen & Dialoge (Interviews führen & Kernaussagen zusammenfassen)',
      description: {
        en: 'Interview domain experts, ask critical probing questions, and summarize multifaceted viewpoints.',
        fa: 'مصاحبه با کارشناسان، طرح پرسش‌های موشکافانه و بازگویی چکیده نظرات چندوجهی.',
        prs: 'مصاحبه مسلکی با کارشناسان و پرسیدن سوال‌های عمیق تحلیلی.',
        tr: 'Uzmanlarla mülakat yapma, eleştirel sorular sorma ve görüşleri özetleme.',
        ar: 'إجراء المقابلات مع المتخصصين وطرح الأسئلة الاستقصائية وتلخيص وجهات النظر المتعددة.',
        es: 'Técnicas de entrevista en profundidad, repregunta crítica y síntesis de argumentos.'
      },
      content: 'Darf ich Sie darauf festnageln, wie Sie diesen Widerspruch auflösen wollen?',
      audioText: 'Herr Professor, in Ihrer jüngsten Publikation behaupten Sie das Gegenteil. Wie begründen Sie diesen Kurswechsel?',
      practiceTasks: [
        'Führen Sie ein fünfminütiges kritisches Radiointerview durch.',
        'Fassen Sie die Position des Interviewten neutral und objektiv zusammen.'
      ]
    },
    sectionD: {
      title: 'Mussawi D: Leseverstehen & Text',
      focus: 'Lesen & Textanalyse (Feuilleton und Medienkommentare)',
      description: {
        en: 'Analyze stylistically sophisticated essays and opinion pieces from German national newspapers.',
        fa: 'بررسی و تحلیل مقالات تحلیلی، ستون‌های دیدگاه و بخش‌های فرهنگی نشریات مطرح آلمان.',
        prs: 'خواندن و تحلیل سرمقاله‌های تحلیلی روزنامه‌های معتبر آلمان.',
        tr: 'Ulusal gazetelerdeki fıkra, köşe yazısı ve kültür sanat makalelerini edebi açıdan tahlil etme.',
        ar: 'تحليل المقالات الافتتاحية والمقالات النقدية في الصفحات الثقافية لكبرى الصحف الألمانية.',
        es: 'Análisis estilístico y argumentativo de artículos de opinión y suplementos culturales (Feuilleton).'
      },
      content: 'Leitartikel aus der ZEIT zur Krise des Lokaljournalismus und der Rolle von Werbeplattformen.',
      readingText: {
        type: 'Zeitungs-Leitartikel (Feuilleton)',
        title: 'Das Schweigen in der Provinz: Wenn Lokalzeitungen sterben',
        body: 'Wo Lokalzeitungen schließen, sinkt nachweislich die Wahlbeteiligung und die Korruption nimmt zu. Regionale Berichterstattung fungiert als soziales Schmiermittel von Gemeinden. Werden diese Redaktionen weggespart, droht die demokratische Kontrolle vor Ort vollends zu erodieren.'
      },
      practiceTasks: [
        'Bestimmen Sie die stilistischen Mittel (Metaphern, rhetorische Fragen) des Autors.',
        'Diskutieren Sie Modelle zur öffentlichen Förderung des Lokaljournalismus.'
      ]
    },
    sectionE: {
      title: 'Mussawi E: Grammatik & Schreiben',
      focus: 'Grammatik & Schreiben (Zweiteilige Konnektoren: sowohl... als auch / weder... noch)',
      description: {
        en: 'Master multi-part coordinating connectors to craft balanced and articulate B2-level arguments.',
        fa: 'تسلط بر حروف ربط دوتایی برای نگارش استدلال‌های جامع و متوازن در سطح پیشرفته B2.',
        prs: 'تسلط بر حروف ربط دوتایی برای استدلال قوی در نوشتار سطح B2.',
        tr: 'Dengeli ve zengin cümleler kurmak için ikili bağlaçların (hem... hem de, ne... ne de) kusursuz kullanımı.',
        ar: 'إتقان الروابط الثنائية لصياغة حجج رصينة ومتوازنة على مستوى B2 المتقدم.',
        es: 'Dominio de conectores dobles correlativos para argumentar con fluidez y precisión en nivel B2.'
      },
      content: 'Zweiteilige Konnektoren: "sowohl... als auch" (doppelte Aufzählung), "weder... noch" (doppelte Negation), "entweder... oder" (Alternative), "zwar... aber" (Einschränkung), "nicht nur... sondern auch" (Steigerung), "je... desto/umso" (Verhältnis).',
      grammarRule: {
        id: 'b2_1_zweiteilige_konnektoren',
        level: 'B2.1',
        category: 'connectors',
        germanTitle: 'Zweiteilige Konnektoren zur syntaktischen Nuancierung',
        formula: 'sowohl... als auch | weder... noch | je (Komp)... desto (Komp)',
        explanation: {
          en: 'Two-part connectors link clauses, phrases, or words. Note word order: "zwar... aber" often links two main clauses; "je... desto" links a subordinate clause (je + Komparativ ... Verb am Ende) with a main clause (desto + Komparativ + Verb ...).',
          fa: 'حروف ربط دوتایی برای مقایسه، تاکید و برقراری ارتباط متوازن میان جملات به کار می‌روند. دقت در جایگاه فعل مخصوصاً در ترکیب "je... desto" الزامی است: بعد از je فعل به انتهای جمله فرعی می‌رود و بعد از desto بلافاصله صفت تفضیلی و سپس فعل قرار می‌گیرد.',
          prs: 'حروف ربط دوتایی ساختار جملات را شبیه آلمانی اصیل و مسلکی می‌سازند.',
          tr: 'İkili bağlaçlar cümleleri birbirine bağlar. "je... desto" kalıbında fiil dizilimine özel dikkat edilmelidir.',
          ar: 'تربط الأدوات الثنائية بين العناصر اللغوية. تتطلب صيغة je... desto انتباهاً خاصاً لموقع الفعل المصرف.',
          es: 'Los conectores correlativos articulan ideas complejas; la estructura "je... desto" exige verbo final tras "je".'
        },
        examples: [
          {
            german: 'Je intensiver wir Fakten prüfen, desto seltener verbreiten sich Fehlmeldungen.',
            formulaBreakdown: 'Je + intensiver (Komparativ) + wir Fakten prüfen (Nebensatz Verb am Ende), + desto + seltener (Komparativ) + verbreiten sich (Hauptsatz Verb) + Fehlmeldungen (S).',
            literalTranslation: {
              en: 'The more intensive we facts check, the rarer spread themselves false reports.',
              fa: 'هر اندازه دقیق‌تر فکت‌ها را بررسی کنیم، به همان نسبت کمتر اخبار کذب منتشر می‌شوند.',
              prs: 'هر قدر حقایق را دقیق‌تر چک کنیم، شایعات کمتر نشر می‌شود.',
              tr: 'Gerçekleri ne kadar yoğun kontrol edersek, asılsız haberler o kadar az yayılır.',
              ar: 'كلما تحققنا من الحقائق بدقة أكبر، كلما قل انتشار الأخبار المغلوطة.',
              es: 'Cuanto más minuciosamente verifiquemos los hechos, con menor frecuencia se difundirán noticias falsas.'
            },
            fluentTranslation: {
              en: 'The more rigorously we verify facts, the less frequently misinformation spreads.',
              fa: 'هر چه با دقت بیشتری حقایق را اعتبارسنجی کنیم، شایعات و اخبار نادرست با فراوانی کمتری منتشر خواهند شد.',
              prs: 'هر اندازه که درستی معلومات را با جدیت بررسی کنیم، به همان پیمانه جلو نشر شایعات گرفته می‌شود.',
              tr: 'Olguları ne kadar titizlikle teyit edersek, yalan haberlerin yayılma riski de o denli azalır.',
              ar: 'كلما ازدادت صرامة التحقق من الأخبار، تراجعت وتيرة انتشار المعلومات المضللة.',
              es: 'Cuanto más rigurosamente contrastemos los datos, menor será la propagación de desinformación.'
            }
          }
        ]
      },
      practiceTasks: [
        'Formulieren Sie fünf Thesen mit verschiedenen zweiteiligen Konnektoren.',
        'Verfassen Sie einen Leserbrief zu einem medienpolitischen Streitthema.'
      ]
    },
    vocabularies: [
      { id: 'b2_1_v16', word: 'die Medienkompetenz', article: 'die', plural: 'die Medienkompetenzen', ipa: '/ˈmeːdi̯ənkɔmpəˌtɛnt͡s/', translation: { en: 'media literacy', fa: 'سواد رسانه‌ای', prs: 'سواد رسانه‌ای و شناخت معلومات درست', tr: 'medya okuryazarlığı', ar: 'التثقيف والوعي الإعلامي', es: 'alfabetización mediática' } },
      { id: 'b2_1_v17', word: 'die Gegendarstellung', article: 'die', plural: 'die Gegendarstellungen', ipa: '/ˈɡeːɡn̩daːɐ̯ˌʃtɛlʊŋ/', translation: { en: 'counter-statement / reply (press law)', fa: 'تکذیبیه و جوابیه مطبوعاتی', prs: 'ردیه و جوابیه رسمی در رسانه‌ها', tr: 'tekzip / cevap hakkı metni', ar: 'حق الرد أو البيان التكذيبي الصحفي', es: 'derecho de réplica / rectificación' } },
      { id: 'b2_1_v18', word: 'der Quellenschutz', article: 'der', plural: 'die Quellenschutze', ipa: '/ˈkvɛln̩ˌʃʊt͡s/', translation: { en: 'protection of journalistic sources', fa: 'اصل حفظ محرمانگی منابع خبری', prs: 'محرمانه ماندن هویت منبع خبر', tr: 'haber kaynağını koruma ilkesi', ar: 'حماية المصادر الصحفية', es: 'secreto profesional y protección de fuentes' } }
    ],
    exercises: [
      {
        id: 'ex_b2_1_6_a',
        type: 'multiple_choice',
        instruction: {
          en: 'Select the matching pair of connectors for a double addition.',
          fa: 'جفت مناسب حروف ربط دوتایی برای بیان دو مورد مثبت همزمان را انتخاب کنید.',
          prs: 'جفت مناسب حروف ربط دوتایی برای ذکر دو صفت مثبت همزمان را برگزینید.',
          tr: 'İki olumlu unsuru bağlayan doğru ikili bağlaç çiftini seçiniz.',
          ar: 'اختر زوج الروابط المناسب للجمع الإيجابي بين أمرين.',
          es: 'Elige el par de conectores correlativos adecuado para una enumeración copulativa.'
        },
        prompt: 'Guter Journalismus muss _____ sachlich informieren _____ kritisch hinterfragen.',
        options: [
          'sowohl ... als auch',
          'weder ... noch',
          'entweder ... oder',
          'zwar ... trotzdem'
        ],
        correctAnswer: 'sowohl ... als auch',
        explanation: {
          en: '"sowohl ... als auch" conveys that both qualities are present simultaneously.',
          fa: 'ترکیب "sowohl ... als auch" نشان‌دهنده تحقق همزمان هر دو ویژگی است (هم به طور مستند خبر دهد و هم نقادانه واکاوی کند).',
          prs: 'sowohl ... als auch نشان‌دهنده هر دو به شکل همزمان است.',
          tr: '"sowohl ... als auch" (hem ... hem de) iki olumlu vasfı bağlar.',
          ar: 'تفيد صيغة sowohl ... als auch الجمع بين الخصلتين في آن واحد.',
          es: '"sowohl ... als auch" expresa que se cumplen ambos aspectos a la vez.'
        }
      },
      {
        id: 'ex_b2_1_6_b',
        type: 'fill_blank',
        instruction: {
          en: 'Fill in the corresponding counterpart of the comparative connector "je".',
          fa: 'بخش دوم حرف ربط مقایسه‌ای "je" را در جای خالی وارد کنید.',
          prs: 'جزء دوم حرف ربط je را بنویسید.',
          tr: '"je" bağlacının devamı olan doğru kelimeyi yazınız.',
          ar: 'املأ الفراغ بالرابط المقابل لـ "je" في الجملة المقارنة.',
          es: 'Completa con la correlación correspondiente a "je".'
        },
        prompt: 'Je mehr Menschen Medienkompetenz erwerben, _____ widerstandsfähiger wird die Gesellschaft gegen Hetze.',
        options: ['desto', 'weil', 'obwohl', 'während'],
        correctAnswer: 'desto',
        explanation: {
          en: 'The correlative pair is "je + Komparativ ..., desto/umso + Komparativ ...".',
          fa: 'جفت ثابت گرامری "je ..., desto ..." است: هر چه ...، به همان میزان ...',
          prs: 'جفت گرامری je همیشه با desto یا umso می‌آید.',
          tr: '"je" ile başlayan yan cümlenin ardından ana cümlede "desto" veya "umso" kullanılır.',
          ar: 'يقترن الرابط je في الجملة الرئيسية دائماً بـ desto أو umso.',
          es: 'La estructura fija es "je + comparativo ..., desto + comparativo ...".'
        }
      },
      {
        id: 'ex_b2_1_6_c',
        type: 'sentence_reorder',
        instruction: {
          en: 'Arrange the sentence using the double negation connector "weder... noch".',
          fa: 'کلمات را مرتب کنید تا جمله‌ای با حرف ربط نفی مضاعف "weder... noch" ساخته شود.',
          prs: 'جمله را با استفاده از weder... noch به ترتیب درست بچینید.',
          tr: '"weder... noch" ikili olumsuzluk bağlacını kullanarak cümleyi sıralayın.',
          ar: 'رتب الجملة باستخدام أداة النفي المزدوج "weder... noch".',
          es: 'Ordena la oración con la doble negación "weder... noch".'
        },
        prompt: 'Arrange the sentence blocks:',
        options: ['Der Bericht', 'enthielt', 'weder', 'nachprüfbare Quellen', 'noch', 'verlässliche Zahlen.'],
        correctAnswer: 'Der Bericht enthielt weder nachprüfbare Quellen noch verlässliche Zahlen.',
        explanation: {
          en: '"Der Bericht" (Subject) + "enthielt" (Verb) + "weder" + Akkusativ-Objekt 1 + "noch" + Akkusativ-Objekt 2.',
          fa: 'فاعل + فعل + weder + مفعول اول + noch + مفعول دوم: گزارش نه منابع قابل بررسی داشت و نه آمار موثق.',
          prs: 'نه این و نه آن با weder... noch ساخته می‌شود.',
          tr: 'Özne + fiil + weder + nesne 1 + noch + nesne 2.',
          ar: 'الفاعل + الفعل + weder + المفعول الأول + noch + المفعول الثاني.',
          es: 'Sujeto + verbo + "weder" + objeto 1 + "noch" + objeto 2.'
        }
      }
    ]
  },

  // ================= LEKTION 7 =================
  {
    id: 'b2_1_lek7',
    lektionNumber: 7,
    level: 'B2.1',
    title: 'Umweltökonomie, Nachhaltigkeit und Kreislaufwirtschaft',
    subTitle: 'Nomen-Verb-Verbindungen und zirkuläre Wertschöpfung (Lektion 7)',
    topic: 'Klimawandel, Ressourceneffizienz, ESG-Kriterien und feste Nomen-Verb-Verbindungen',
    fotoHoergeschichte: {
      title: 'Foto-Hörgeschichte: Internationaler Wirtschaftsgipfel im Hamburger Hafen',
      imagePrompt: 'A futuristic conference center at the Port of Hamburg with views of wind turbines and container ships, where business leaders and environmental ministers present sustainability roadmaps.',
      imageTheme: 'Nachhaltigkeit und Umwelttechnik',
      audioDuration: '03:25',
      transcript: [
        { speaker: 'Senator Dr. Lindemann', text: 'Herzlich willkommen in Hamburg zum Norddeutschen Klimadialog. Unsere Hansestadt hat den festen Entschluss gefasst, bis 2035 die gesamte Hafenwirtschaft auf grünen Wasserstoff umzustellen.' },
        { speaker: 'Industrievertreterin Frau Dr. Vogt', text: 'Herr Senator, unsere Unternehmen ziehen diese Transformation ernsthaft in Erwägung. Allerdings müssen Politik und Netzbetreiber die nötigen Rahmenbedingungen zur Verfügung stellen.' },
        { speaker: 'Umweltökonom Prof. Dr. Sell', text: 'Die zirkuläre Kreislaufwirtschaft steht nicht länger zur Debatte; sie ist eine ökonomische Notwendigkeit zur Sicherung unserer Rohstoffunabhängigkeit.' },
        { speaker: 'Senator Dr. Lindemann', text: 'Genau deshalb leisten wir als Senat einen substanziellen Beitrag und stellen Fördermittel in Milliardenhöhe bereit.' }
      ],
      summary: {
        en: 'At an economic sustainability summit in Hamburg, ministers and corporate executives debate transitioning port industries to green hydrogen and establishing closed-loop circular economies.',
        fa: 'در اجلاس پایداری زیست‌محیطی در بندر هامبورگ، مسئولان دولتی و مدیران صنایع درباره تبدیل صنایع بندری به هیدروژن سبز و پیاده‌سازی اقتصاد چرخشی گفتگو می‌کنند.',
        prs: 'در کنفرانس محیط زیستی هامبورگ، وزرا و تجار درباره انرژی سبز و اقتصاد چرخشی صحبت می‌کنند.',
        tr: 'Hamburg Limanı\'ndaki sürdürülebilirlik zirvesinde yetkililer ve sanayiciler yeşil hidrojen ve döngüsel ekonomi yol haritalarını müzakere eder.',
        ar: 'في قمة الاستدامة الاقتصادية بميناء هامبورغ، يناقش الوزراء وقادة الصناعة خطط التحول للهيدروجين الأخضر والاقتصاد الدائري المغلق.',
        es: 'En una cumbre de sostenibilidad en el puerto de Hamburgo, políticos y empresarios debaten la transición al hidrógeno verde y la economía circular.'
      }
    },
    sectionA: {
      title: 'Mussawi A: Sprechen & Dialog',
      focus: 'Sprechen & Hören (Präsentation von ESG-Nachhaltigkeitsstrategien)',
      description: {
        en: 'Pitch corporate sustainability roadmaps, justify decarbonization investments, and address stakeholder questions.',
        fa: 'ارائه راهبردهای پایداری زیست‌محیطی و حاکمیتی (ESG)، توجیه اقتصادی کربن‌زدایی و پاسخ به پرسش‌های سهامداران.',
        prs: 'تشریح برنامه‌های پایدار محیط زیستی و توجیه اقتصادی انرژی پاک برای سرمایه‌گذاران.',
        tr: 'Kurumsal sürdürülebilirlik raporu sunumu, yeşil dönüşüm yatırımlarının gerekçelendirilmesi.',
        ar: 'تقديم استراتيجيات الاستدامة المؤسسية (ESG) وتبرير استثمارات خفض الانبعاثات الكربونية.',
        es: 'Presentación de informes de sostenibilidad corporativa (ESG) y defensa de inversiones ecológicas.'
      },
      content: 'Redemittel für Präsentationen: "Wir haben uns zum Ziel gesetzt, die CO2-Emissionen um 60 Prozent zu drosseln.", "Diesbezüglich stehen wir in engem Austausch mit...", "Aus ökologischer Sicht ist hervorzuheben, dass...".',
      audioText: 'Durch die Umstellung auf geschlossene Stoffkreisläufe verringern wir den Primärrohstoffverbrauch drastisch.',
      practiceTasks: [
        'Präsentieren Sie ein dreistufiges Konzept zur Müllvermeidung in Großunternehmen.',
        'Reagieren Sie auf kritische Einwände bezüglich hoher Investitionskosten.'
      ]
    },
    sectionB: {
      title: 'Mussawi B: Wortschatz & Hören',
      focus: 'Hören & Wortschatz (Kreislaufwirtschaft & Umweltökonomie)',
      description: {
        en: 'Acquire precise terminology for life-cycle assessments, circular design, and European emissions trading.',
        fa: 'یادگیری واژگان تخصصی تحلیل چرخه عمر کالا، طراحی بر پایه بازیافت و سامانه تجارت آلاینده‌های اتحادیه اروپا.',
        prs: 'لغات مسلکی اقتصاد چرخشی، بازیافت مواد و تجارت حق آلایندگی در اروپا.',
        tr: 'Döngüsel ekonomi, karbon ayak izi ve emisyon ticareti alanlarında yetkin söz varlığı.',
        ar: 'المصطلحات الاقتصادية والبيئية لدورة حياة المنتجات والتصميم الدائري وتجارة الانبعاثات.',
        es: 'Léxico avanzado sobre ciclo de vida del producto, diseño circular y comercio de emisiones (ETS).'
      },
      content: 'die Kreislaufwirtschaft, die Dekarbonisierung, die Ressourceneffizienz, der Emissionshandel, die Ökobilanz, die Lieferkettenverantwortung.',
      practiceTasks: [
        'Definieren Sie den Unterschied zwischen Upcycling und Downcycling.',
        'Notieren Sie die Kernpunkte eines Fachvortrags über industrielle Symbiose.'
      ]
    },
    sectionC: {
      title: 'Mussawi C: Alltagskommunikation',
      focus: 'Sprechen & Dialoge (Verhandlungen über Lieferketten und Umweltzertifikate)',
      description: {
        en: 'Negotiate environmental compliance standards with suppliers and draft transparent agreements.',
        fa: 'مذاکره با تامین‌کنندگان بر سر رعایت استانداردهای زیست‌محیطی و تنظیم توافق‌نامه‌های شفاف.',
        prs: 'مذاکرات با شرکت‌های تدارکاتی برای رعایت معیارهای محیط زیستی.',
        tr: 'Tedarikçilerle çevre sertifikasyonları ve yeşil tedarik zinciri şartlarını müzakere etme.',
        ar: 'التفاوض مع الموردين حول معايير الامتثال البيئي وصياغة العقود المستدامة.',
        es: 'Negociación de cláusulas ambientales en cadenas de suministro y homologación de proveedores.'
      },
      content: 'Wir bestehen darauf, dass sämtliche Vorprodukte nachweislich nach ISO 14001 zertifiziert sind.',
      audioText: 'Können Sie uns garantieren, dass die Rohstoffe unter Einhaltung des neuen Lieferkettengesetzes gewonnen wurden?',
      practiceTasks: [
        'Verhandeln Sie über Lieferfristen und Umweltauflagen.',
        'Formulieren Sie Kompromissvorschläge bei Zertifizierungskosten.'
      ]
    },
    sectionD: {
      title: 'Mussawi D: Leseverstehen & Text',
      focus: 'Lesen & Textanalyse (Wirtschaftsanalysen zur Energiewende)',
      description: {
        en: 'Analyze comprehensive economic forecasts on hydrogen economies and renewable infrastructure.',
        fa: 'تحلیل گزارش‌های اقتصادی عمیق درباره اقتصاد هیدروژنی، شبکه‌های هوشمند برق و گذار به انرژی‌های پاک.',
        prs: 'تحلیل گزارش‌های اقتصادی پیرامون توسعه انرژی‌های بادی و آفتابی و گاز هایدروجن.',
        tr: 'Enerji dönüşümü ve hidrojen ekonomisine ilişkin kapsamlı sektör analizlerini okuma.',
        ar: 'قراءة وتحليل التقارير الاقتصادية المتخصصة حول اقتصاد الهيدروجين والتحول الطاقي.',
        es: 'Lectura crítica de estudios prospectivos sobre la transición energética e infraestructuras renovables.'
      },
      content: 'Gutachten des Instituts der deutschen Wirtschaft (IW) zu industriellen Strompreisen und Standortfaktoren.',
      readingText: {
        type: 'Wirtschaftspolitisches Gutachten',
        title: 'Standortfaktor Grüne Energie: Herausforderungen für den Mittelstand',
        body: 'Die Transformation hin zu klimaneutralen Produktionsprozessen verlangt mittelständischen Industrieunternehmen enorme Vorleistungen ab. Um eine Deindustrialisierung abzuwenden, fordern Ökonomen verlässliche Brückenstrompreise sowie den beschleunigten Netzausbau für Windenergie aus dem Norden.'
      },
      practiceTasks: [
        'Fassen Sie die zentralen Thesen des Gutachtens in drei Leitgedanken zusammen.',
        'Erörtern Sie den Begriff "Brückenstrompreis" kritisch.'
      ]
    },
    sectionE: {
      title: 'Mussawi E: Grammatik & Schreiben',
      focus: 'Grammatik & Schreiben (Feste Nomen-Verb-Verbindungen im gehobenen Sprachregister)',
      description: {
        en: 'Master sophisticated functional verb categories (Funktionsverbgefüge) essential for formal B2/C1 essays and official reports.',
        fa: 'تسلط بر ترکیبات اسمی-فعلی اداری و فاخر (Nomen-Verb-Verbindungen) برای نگارش مقالات رسمی در سطح B2 و C1.',
        prs: 'تسلط بر اصطلاحات اسمی-فعلی رسمی زبان آلمانی برای مکاتبات عالی اداری.',
        tr: 'Resmi yazışma ve B2/C1 sınavlarında zorunlu olan ileri Nomen-Verb-Verbindung kalıpları.',
        ar: 'إتقان التراكيب الاسمية الفعلية الاصطلاحية (Nomen-Verb-Verbindungen) للكتابة الرسمية المتقدمة.',
        es: 'Dominio de locuciones verbales formales (Funktionsverbgefüge) para la redacción académica y empresarial.'
      },
      content: 'Feste Nomen-Verb-Verbindungen: "zur Verfügung stehen/stellen", "in Erwägung ziehen", "in Betracht kommen", "eine Entscheidung treffen", "unter Beweis stellen", "zur Debatte stehen", "in Kenntnis setzen", "einen Entschluss fassen".',
      grammarRule: {
        id: 'b2_1_nomen_verb_verbindungen',
        level: 'B2.1',
        category: 'verbs',
        germanTitle: 'Nomen-Verb-Verbindungen zur stilistischen Präzisierung im Berufsdeutsch',
        formula: 'Präposition + Nomen + Funktionsverb (z.B. in Erwägung ziehen)',
        explanation: {
          en: 'In higher registers (journalism, administration, science), simple verbs are replaced by noun-verb collocations. The noun carries the semantic core, while the verb (Funktionsverb) takes grammar and tense.',
          fa: 'در سبک رسمی و نوشتار آکادمیک، افعال ساده با ترکیب یک اسم معین و یک فعل کمکی جایگزین می‌شوند (مانند informieren -> in Kenntnis setzen). اسم بار معنایی را به دوش می‌کشد و فعل نقش گرامری زمان و شخص را ایفا می‌کند.',
          prs: 'در آلمانی رسمی، به جای افعال ساده از ترکیبات اسم و فعل فاخر استفاده می‌شود.',
          tr: 'Yüksek dilde basit fiiller yerine Nomen-Verb-Verbindung kullanılır; anlam isme yüklenir.',
          ar: 'في الأسلوب الراقي يُستبدل الفعل البسيط بتركيب اسمي-فعلي اصطلاحي يعطي النص صبغة رسمية متقنة.',
          es: 'En el registro culto, los verbos simples se sustituyen por construcciones fijas sustantivo-verbo.'
        },
        examples: [
          {
            german: 'Die Geschäftsführung zieht eine Ausweitung der Produktion ernsthaft in Erwägung.',
            formulaBreakdown: 'Die Geschäftsführung (S) + zieht (V) + eine Ausweitung (Akk.-Ergänzung) + ernsthaft (Adv.) + in Erwägung (feste Wendung = erwägen).',
            literalTranslation: {
              en: 'The management pulls an expansion of production seriously into consideration.',
              fa: 'هیئت مدیره گسترش تولید را جداً در نظر می‌گیرد / سبک‌سنگین می‌کند.',
              prs: 'مدیریت گسترش تولید را با جدیت مد نظر قرار می‌دهد.',
              tr: 'Yönetim kurulunun üretimi artırmayı ciddi biçimde değerlendirmesi.',
              ar: 'تأخذ إدارة الشركة توسيع الإنتاج بعين الاعتبار والتقدير بجدية.',
              es: 'La dirección toma seriamente en consideración la ampliación de la producción.'
            },
            fluentTranslation: {
              en: 'The management is seriously considering expanding production.',
              fa: 'هیئت مدیره به طور جدی گسترش خط تولید را در دست بررسی و ارزیابی دارد.',
              prs: 'رهبری شرکت افزایش تولیدات را زیر بررسی همه‌جانبه گرفته است.',
              tr: 'Şirket yönetimi üretim hacmini genişletmeyi ciddi olarak düşünmektedir.',
              ar: 'تدرس الإدارة التنفيذية بجدية تامة إمكانية توسعة خطوط الإنتاج.',
              es: 'La dirección general está considerando muy seriamente ampliar la producción.'
            }
          }
        ]
      },
      practiceTasks: [
        'Ersetzen Sie in zehn Sätzen einfache Verben durch gehobene Nomen-Verb-Verbindungen.',
        'Verfassen Sie einen formellen Bericht an die Geschäftsleitung über eine Investitionsentscheidung.'
      ]
    },
    vocabularies: [
      { id: 'b2_1_v19', word: 'die Kreislaufwirtschaft', article: 'die', plural: 'die Kreislaufwirtschaften', ipa: '/ˈkʁaɪ̯slaʊ̯fˌvɪʁtʃaft/', translation: { en: 'circular economy', fa: 'اقتصاد چرخشی / بازیافتی', prs: 'اقتصاد چرخشی و بازیافت دوامدار', tr: 'döngüsel ekonomi', ar: 'الاقتصاد الدائري', es: 'economía circular' } },
      { id: 'b2_1_v20', word: 'die Dekarbonisierung', article: 'die', plural: 'die Dekarbonisierungen', ipa: '/dekaʁboniˈziːʁʊŋ/', translation: { en: 'decarbonization', fa: 'کربن‌زدایی از صنایع', prs: 'کاهش آلودگی کاربن و گازات گلخانه‌ای', tr: 'karbonsuzlaştırma', ar: 'إزالة الكربون وخفض الانبعاثات', es: 'descarbonización' } },
      { id: 'b2_1_v21', word: 'die Ressourceneffizienz', article: 'die', plural: 'die Ressourceneffizienzen', ipa: '/ʁɛˈsuːɐ̯sn̩ʔɛfiˌt͡si̯ɛnt͡s/', translation: { en: 'resource efficiency', fa: 'بهره‌وری بهینه از منابع', prs: 'استفاده موثر و مسلکی از منابع طبیعی', tr: 'kaynak verimliliği', ar: 'كفاءة استغلال الموارد', es: 'eficiencia de recursos' } }
    ],
    exercises: [
      {
        id: 'ex_b2_1_7_a',
        type: 'multiple_choice',
        instruction: {
          en: 'Select the correct functional verb for the noun "in Erwägung".',
          fa: 'فعل مناسب را برای ترکیب اسمی "in Erwägung" انتخاب کنید.',
          prs: 'فعل مناسب برای اصطلاح in Erwägung کدام است؟',
          tr: '"in Erwägung" ifadesini tamamlayan doğru fiili seçiniz.',
          ar: 'اختر الفعل الوظيفي المناسب للتركيب الاسمي "in Erwägung".',
          es: 'Elige el verbo funcional adecuado para la expresión "in Erwägung".'
        },
        prompt: 'Wir müssen alle Optionen gründlich in Erwägung _____.',
        options: ['ziehen', 'stellen', 'bringen', 'treffen'],
        correctAnswer: 'ziehen',
        explanation: {
          en: 'The established collocation is "etwas in Erwägung ziehen" (= to consider something).',
          fa: 'اصطلاح استاندارد "etwas in Erwägung ziehen" به معنای بررسی کردن و در نظر گرفتن است.',
          prs: 'اصطلاح درست in Erwägung ziehen است.',
          tr: 'Doğru kalıp "in Erwägung ziehen" (değerlendirmeye almak) şeklindedir.',
          ar: 'التركيب المعتمد هو etwas in Erwägung ziehen بمعنى أخذ الشيء بعين الاعتبار.',
          es: 'La locución fija es "etwas in Erwägung ziehen" (considerar / sopesar algo).'
        }
      },
      {
        id: 'ex_b2_1_7_b',
        type: 'fill_blank',
        instruction: {
          en: 'Complete the collocation "zur _____ stellen" (= to make available).',
          fa: 'ترکیب اسمی "zur _____ stellen" به معنای در اختیار گذاشتن را با اسم مناسب کامل کنید.',
          prs: 'اصطلاح zur ... stellen به معنای مهیا کردن را تکمیل نمایید.',
          tr: '"Kullanıma sunmak" anlamına gelen kalıbı doğru isimle doldurunuz.',
          ar: 'أكمل التركيب الاصطلاحي "zur _____ stellen" بمعنى وضعه تحت التصرف.',
          es: 'Completa la construcción "zur _____ stellen" con el sustantivo que significa poner a disposición.'
        },
        prompt: 'Die Landesbank wird die erforderlichen Kredite zinsgünstig zur _____ stellen.',
        options: ['Verfügung', 'Erwägung', 'Entscheidung', 'Absicht'],
        correctAnswer: 'Verfügung',
        explanation: {
          en: 'Collocation: "etwas zur Verfügung stellen" (= bereitstellen / to provide).',
          fa: 'ترکیب رسمی: "etwas zur Verfügung stellen" یعنی مهیا کردن و در دسترس قرار دادن.',
          prs: 'zur Verfügung stellen یعنی در دسترس قرار دادن.',
          tr: '"zur Verfügung stellen" hizmete sunmak/tahsis etmek demektir.',
          ar: 'التركيب الرسمي: zur Verfügung stellen أي يضع تحت التصرف أو يوفر.',
          es: 'La expresión fija es "zur Verfügung stellen" (poner a disposición).'
        }
      },
      {
        id: 'ex_b2_1_7_c',
        type: 'sentence_reorder',
        instruction: {
          en: 'Reconstruct the formal business sentence with a functional verb.',
          fa: 'جمله رسمی بازرگانی را با ترکیب اسمی-فعلی مرتب کنید.',
          prs: 'جمله رسمی اداری را با اصطلاحات اسمی-فعلی به ترتیب درست بچینید.',
          tr: 'İleri düzey Nomen-Verb-Verbindung içeren resmi cümleyi doğru sıralayın.',
          ar: 'أعد ترتيب الجملة المهنية الرسمية المتضمنة للمركب الاسمي الفعلي.',
          es: 'Reconstruye la frase formal de negocios con el verbo funcional correspondiente.'
        },
        prompt: 'Arrange the sentence blocks:',
        options: ['Der Senat', 'stellte', 'seine ökologische Vorreiterrolle', 'eindrucksvoll', 'unter Beweis.'],
        correctAnswer: 'Der Senat stellte seine ökologische Vorreiterrolle eindrucksvoll unter Beweis.',
        explanation: {
          en: 'Collocation: "etwas unter Beweis stellen" (= beweisen / to prove). Word order: Subject + Verb + Object + Adverb + fixed prepositional phrase.',
          fa: 'اصطلاح: "etwas unter Beweis stellen" به معنای اثبات کردن و نشان دادن توانمندی است.',
          prs: 'unter Beweis stellen به معنای ثابت ساختن است.',
          tr: '"unter Beweis stellen" kanıtlamak anlamına gelen kalıptır.',
          ar: 'المركب etwas unter Beweis stellen يعني البرهنة على الشيء وإثباته بصورة قاطعة.',
          es: 'Locución: "etwas unter Beweis stellen" (demostrar / poner a prueba).'
        }
      }
    ]
  }
];
