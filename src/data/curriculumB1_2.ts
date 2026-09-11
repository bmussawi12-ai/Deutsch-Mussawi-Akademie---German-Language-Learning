import { Lesson } from '../types';

export const CURRICULUM_B1_2: Lesson[] = [
  {
    id: 'b1_2_lek8',
    lektionNumber: 8,
    level: 'B1.2',
    title: 'Arbeit, Bewerbung und Berufswelt',
    subTitle: 'Bewerbungsprozess, Vorstellungsgespräch und Arbeitsverträge (Deutsch Mussawi B1.2)',
    topic: 'Berufliche Qualifikationen, Anschreiben, Lebenslauf und höfliche Formulierungen im Beruf',
    fotoHoergeschichte: {
      title: 'Foto-Hörgeschichte: Das Vorstellungsgespräch bei Siemens',
      imagePrompt: 'A polished modern conference room in Munich where an applicant is shaking hands with two interviewers beside a digital presentation screen.',
      imageTheme: 'München Bewerbungsgespräch',
      audioDuration: '02:40',
      transcript: [
        { speaker: 'Frau Dr. Weber', text: 'Guten Tag, Herr Karimi! Bitte nehmen Sie doch Platz. Haben Sie gut hergefunden?' },
        { speaker: 'Herr Karimi', text: 'Guten Tag, Frau Dr. Weber! Ja, vielen Dank. Mit der U-Bahn war der Weg ganz unkompliziert.' },
        { speaker: 'Herr Becker', text: 'Sehr schön. Wir haben Ihre Bewerbungsunterlagen aufmerksam geprüft. Ihr Werdegang als Softwareentwickler hat uns sehr beeindruckt.' },
        { speaker: 'Herr Karimi', text: 'Das freut mich sehr zu hören. Ich würde mich freuen, meine Fachkenntnisse in Ihr Team einbringen zu können.' },
        { speaker: 'Frau Dr. Weber', text: 'Könnten Sie uns beschreiben, wie Sie in stressigen Projektsituationen Prioritäten setzen?' },
        { speaker: 'Herr Karimi', text: 'Wenn unerwartete Probleme auftreten, erstelle ich sofort eine Prioritätenliste und spreche mich eng mit den Kollegen ab.' }
      ],
      summary: {
        en: 'Farhad Karimi attends a job interview at a leading tech firm in Munich. He discusses his qualifications politely using Konjunktiv II.',
        fa: 'فرهاد کریمی در یک مصاحبه کاری در مونیخ شرکت می‌کند و تجربیات کاری خود را با استفاده از افعال محترمانه کُنیونکتیو ۲ ارائه می‌دهد.',
        prs: 'فرهاد کریمی در یک مصاحبه کاری رسمی در مونیخ اشتراک نموده و تجارب مسلکی خود را با جملات مودبانه به زبان آلمانی تشریح می‌کند.',
        tr: 'Farhad Karimi, Münih\'teki iş mülakatına katılır ve Konjunktiv II kullanarak kibar ifadelerle niteliklerini anlatır.',
        ar: 'يحضر فرهاد كريمي مقابلة عمل رسمية في ميونيخ ويناقش مؤهلاته بلباقة واحترام.',
        es: 'Farhad Karimi asiste a una entrevista de trabajo en Múnich y presenta sus cualificaciones con cortesía.'
      }
    },
    sectionA: {
      title: 'Mussawi A: Sprechen & Dialog',
      focus: 'Sprechen & Hören (Das Vorstellungsgespräch & Selbstpräsentation)',
      description: {
        en: 'Formulate polite requests and expressions of interest in professional interviews using Konjunktiv II (hätte, wäre, würde gern).',
        fa: 'فرمول‌بندی درخواست‌های محترمانه و ابراز تمایل در مصاحبه شغلی با Konjunktiv II.',
        prs: 'ساختار جملات مودبانه و اظهار علاقمندی در مصاحبه‌های شغلی با استفاده از کُنیونکتیو ۲.',
        tr: 'Konjunktiv II kullanarak mülakatlarda kibar ricalar ve niyet bildirme.',
        ar: 'صياغة الطلبات المهذبة والتعبير عن الرغبة في المقابلات الوظيفية.',
        es: 'Formulación de peticiones formales en entrevistas de trabajo con Konjunktiv II.'
      },
      content: 'Ich würde mich sehr freuen, wenn... / Könnten Sie mir bitte erläutern... / Ich hätte großes Interesse an dieser Position.',
      audioText: 'Könnten Sie mir bitte Näheres zu den Arbeitszeiten und Weiterbildungsmöglichkeiten erläutern? - Sehr gern, wir bieten flexible Gleitzeitmodelle an.',
      practiceTasks: [
        'Formulieren Sie 3 höfliche Fragen an den Arbeitgeber mit "Könnten Sie..." und "Würden Sie...".',
        'Stellen Sie Ihre wichtigsten Stärken im Vorstellungsgespräch vor.'
      ]
    },
    sectionB: {
      title: 'Mussawi B: Wortschatz & Hören',
      focus: 'Hören & Wortschatz (Berufliche Qualifikationen & Arbeitszeugnisse)',
      description: {
        en: 'Vocabulary for certificates, career stages, probation periods, and job contract clauses.',
        fa: 'واژگان قراردادهای کاری، گواهی اشتغال، دوران آزمایشی و مدارک تحصیلی.',
        prs: 'ذخیره لغات مرتبط به قرارداد کار، دوره امتحانی و تصدیق‌نامه‌های مسلکی.',
        tr: 'İş sözleşmesi, deneme süresi ve çalışma belgeleriyle ilgili mesleki sözcükler.',
        ar: 'مفردات عقود العمل وفترة التجربة والشهادات والخبرات المهنية.',
        es: 'Vocabulario de contratos laborales, período de prueba y certificados.'
      },
      content: 'der Arbeitsvertrag, die Probezeit, das Zwischenzeugnis, die Weiterbildung, die Festanstellung, die Sozialleistungen.',
      audioText: 'Vor Unterzeichnung des Arbeitsvertrags sollten Sie die Regelungen zur Probezeit und zur Kündigungsfrist genau prüfen.',
      practiceTasks: [
        'Ordnen Sie die Fachbegriffe den Definitionen zu (Probezeit, Gleitzeit, Überstunden).',
        'Verfassen Sie einen kurzen tabellarischen Lebenslauf.'
      ]
    },
    sectionC: {
      title: 'Mussawi C: Alltagskommunikation',
      focus: 'Sprechen & Dialoge (Kommunikation mit Kollegen & Vorgesetzten)',
      description: {
        en: 'Handle discussions with colleagues, reporting progress, negotiating deadlines, and reporting sick leaves.',
        fa: 'گفتگو با همکاران و سرپرست، گزارش پیشرفت کار، تمدید مهلت و اعلام مرخصی استعلاجی.',
        prs: 'صحبت با همکاران و آمر کار، راپور پیشرفت کار و اطلاع‌دهی در وقت بیماری.',
        tr: 'İş yerinde meslektaşlar ve yöneticilerle iletişim, hastalık izni bildirme.',
        ar: 'التواصل مع الزملاء والرؤساء في العمل والإبلاغ عن الإجازات المرضية.',
        es: 'Comunicación en el entorno laboral y solicitud de días por enfermedad.'
      },
      content: 'Könnten wir den Termin um zwei Tage verschieben? / Ich muss mich leider krankmelden und reiche die Arbeitsunfähigkeitsbescheinigung ein.',
      audioText: 'Guten Morgen, Herr Müller! Ich habe mich erkältet und kann heute leider nicht zur Arbeit kommen. Ich gehe gleich zum Arzt und sende Ihnen die AU-Bescheinigung.',
      practiceTasks: [
        'Führen Sie einen Telefondialog: Krankmeldung beim Arbeitgeber.',
        'Verhandeln Sie über die Verschiebung einer Abgabefrist.'
      ]
    },
    sectionD: {
      title: 'Mussawi D: Leseverstehen & Text',
      focus: 'Lesen & Textanalyse (Stellenausschreibung & Anschreiben)',
      description: {
        en: 'Analyze job advertisements, required profiles, and write a targeted cover letter.',
        fa: 'تحلیل آگهی‌های استخدام، مهارت‌های مورد نیاز و نگارش انگیزه‌نامه رسمی.',
        prs: 'تحلیل اعلان‌های کاریابی، شرایط استخدام و نوشتن عریضه رسمی (انگیزه‌نامه).',
        tr: 'İş ilanlarını ve iş tanımı gereksinimlerini analiz edip niyet mektubu yazma.',
        ar: 'تحليل إعلانات الوظائف والشروط المطلوبة وصياغة خطاب التقديم.',
        es: 'Análisis de ofertas de empleo y redacción de carta de presentación.'
      },
      content: 'Authentische Stellenanzeige eines IT-Unternehmens mit Anforderungsprofil und Firmenleistungen.',
      readingText: {
        type: 'Stellenausschreibung & Anschreiben',
        title: 'Software-Entwickler/in (m/w/d) gesucht',
        body: 'Zur Verstärkung unseres Teams suchen wir zum nächstmöglichen Zeitpunkt eine(n) engagierte(n) Software-Entwickler/in. Ihre Aufgaben: Konzeption und Umsetzung innovativer Webanwendungen, enge Zusammenarbeit mit dem Produktmanagement. Ihr Profil: Abgeschlossenes Studium der Informatik oder vergleichbare Ausbildung, fundierte Kenntnisse in modernen Webtechnologien, Teamgeist und lösungsorientiertes Denken. Wir bieten: Flexible Arbeitszeiten, Homeoffice-Option und leistungsgerechte Vergütung.'
      },
      practiceTasks: [
        'Markieren Sie im Text: Welche formalen Qualifikationen werden vorausgesetzt?',
        'Welche freiwilligen Zusatzleistungen bietet der Arbeitgeber?'
      ]
    },
    sectionE: {
      title: 'Mussawi E: Grammatik & Schreiben',
      focus: 'Grammatik & Schreiben (Konjunktiv II der Gegenwart: würde + Infinitiv / wäre / hätte / könnte)',
      description: {
        en: 'Master the formation of Konjunktiv II for polite requests, hypotheticals, and subjunctive forms.',
        fa: 'تسلط بر ساختار کُنیونکتیو ۲ برای درخواست‌های مودبانه و بیان فرضیات و آرزوها.',
        prs: 'یادگیری کامل حالت التزامی و مودبانه (Konjunktiv II) برای درخواست‌های رسمی و تمایلات.',
        tr: 'Nezaket ve varsayımlar için Konjunktiv II kullanımı ve cümle kurulumu.',
        ar: 'إتقان صيغة Konjunktiv II للتعبير عن الرجاء والأدب والافتراضات.',
        es: 'Dominio de Konjunktiv II para peticiones formales e hipótesis.'
      },
      content: 'Höfliche Bitte: "Könnten Sie mir bitte helfen?" / Wunsch: "Ich würde gern Vollzeit arbeiten."',
      grammarRule: {
        id: 'b1_2_konjunktiv2_rule',
        level: 'B1.2',
        germanTitle: 'Konjunktiv II der Gegenwart (Höflichkeit & irreale Wünsche)',
        formula: 'Subjekt + würde / könnte / hätte / wäre + ... + Infinitiv (Satzende)',
        explanation: {
          en: 'In professional and polite German, use Konjunktiv II. For most verbs: form with "würde" + infinitive. For sein, haben, and modal verbs: use wäre, hätte, könnte, müsste.',
          fa: 'برای ابراز ادب در مکالمات رسمی، از Konjunktiv II استفاده می‌شود: برای بیشتر افعال از würde + مصدر در انتهای جمله، و برای sein/haben/مدال‌ها از اشکال اختصاصی wäre، hätte و könnte استفاده کنید.',
          prs: 'در زبان آلمانی برای احترام در کار و ادارات از Konjunktiv II کار گرفته می‌شود. افعال عادی با würde + مصدر در اخیر جمله، و افعال کمکی به شکل wäre، hätte و könnte تبدیل می‌شوند.',
          tr: 'Almancada kibarlık ve varsayımlar için Konjunktiv II kullanılır. Çoğu fiil "würde + mastar", sein/haben ve modal fiiller ise özel formlarıyla çekilir.',
          ar: 'تستخدم صيغة Konjunktiv II للتأدب في المحادثات الرسمية والمهنية.',
          es: 'Se utiliza Konjunktiv II para expresar cortesía y situaciones hipotéticas.'
        },
        examples: [
          {
            german: 'Könnten Sie mir bitte den Arbeitsvertrag per E-Mail zusenden?',
            formulaBreakdown: 'Könnten (V1) + Sie (S) + mir den Vertrag (...) + zusenden (V2 Inf)?',
            literalTranslation: {
              en: 'Could you please to-me the contract by email send?',
              fa: 'می‌توانستید لطفاً قرارداد کاری را با ایمیل برای من ارسال کنید؟',
              prs: 'آیا می‌توانید لطفاً قرارداد کاری را از طریق ایمیل برایم روان کنید؟',
              tr: 'İş sözleşmesini bana e-posta ile gönderebilir miydiniz?',
              ar: 'هل يمكن لحضرتك إرسال عقد العمل بالبريد الإلكتروني؟',
              es: '¿Podría enviarme el contrato de trabajo por correo electrónico?'
            },
            fluentTranslation: {
              en: 'Could you please send me the employment contract via email?',
              fa: 'ممکن است لطفاً قرارداد کاری را با ایمیل برای من بفرستید؟',
              prs: 'لطفاً ممکن است قرارداد کار را از طریق ایمیل بفرستید؟',
              tr: 'Zahmet olmazsa iş sözleşmesini e-postayla gönderebilir misiniz?',
              ar: 'هل تتفضل بإرسال عقد العمل عبر البريد الإلكتروني؟',
              es: '¿Sería tan amable de enviarme el contrato por correo?'
            }
          },
          {
            german: 'Ich würde mich sehr freuen, wenn wir einen Termin vereinbaren könnten.',
            formulaBreakdown: 'Ich (S) + würde (V1) + mich freuen (...) + wenn ... vereinbaren könnten (Nebensatz).',
            literalTranslation: {
              en: 'I would myself very rejoice, if we an appointment arrange could.',
              fa: 'من بسیار خوشحال می‌شدم اگر ما می‌توانستیم قراری هماهنگ کنیم.',
              prs: 'من بسیار خوشحال خواهم شد اگر ما بتوانیم یک قرار ملاقات تعیین کنیم.',
              tr: 'Bir randevu ayarlayabilirsek çok sevinirdim.',
              ar: 'سأكون مسروراً جداً إذا تمكنا من تحديد موعد.',
              es: 'Me alegraría mucho si pudiéramos concertar una cita.'
            },
            fluentTranslation: {
              en: 'I would be very pleased if we could arrange an appointment.',
              fa: 'باعث افتخار و خوشحالی من خواهد بود اگر بتوانیم قراری تنظیم کنیم.',
              prs: 'خیلی خوشحال می‌شوم اگر بتوانیم وقتی برای ملاقات تنظیم نماییم.',
              tr: 'Bir görüşme tarihi ayarlayabilirsek çok memnun olurum.',
              ar: 'يسعدني جداً تحديد موعد للمقابلة.',
              es: 'Estaría encantado de coordinar una entrevista.'
            }
          }
        ]
      },
      practiceTasks: [
        'Schreiben Sie 3 höfliche E-Mail-Sätze an Ihren Vorgesetzten unter Verwendung von Konjunktiv II.',
        'Formulieren Sie einen Wunsch bezüglich Ihrer beruflichen Zukunft ("Ich würde gern...").'
      ]
    },
    vocabularies: [
      { id: 'b1_2_v1', word: 'der Arbeitsvertrag', article: 'der', plural: 'die Arbeitsverträge', ipa: '/ˈaʁbaɪ̯tsfɛɐ̯ˌtʁaːk/', translation: { en: 'employment contract', fa: 'قرارداد کاری', prs: 'قرارداد کار', tr: 'iş sözleşmesi', ar: 'عقد العمل', es: 'contrato de trabajo' } },
      { id: 'b1_2_v2', word: 'das Anschreiben', article: 'das', plural: 'die Anschreiben', ipa: '/ˈanˌʃʁaɪ̯bn̩/', translation: { en: 'cover letter', fa: 'انگیزه‌نامه / نامه تقاضای کار', prs: 'عریضه درخواستی / خط معرفی', tr: 'başvuru mektubu', ar: 'خطاب التقديم', es: 'carta de presentación' } },
      { id: 'b1_2_v3', word: 'die Probezeit', article: 'die', plural: 'die Probezeiten', ipa: '/ˈpʁoːbəˌtsaɪ̯t/', translation: { en: 'probationary period', fa: 'دوره آزمایشی', prs: 'دوران امتحانی', tr: 'deneme süresi', ar: 'فترة التجربة', es: 'período de prueba' } },
      { id: 'b1_2_v4', word: 'das Vorstellungsgespräch', article: 'das', plural: 'die Vorstellungsgespräche', ipa: '/ˈfoːɐ̯ʃtɛlʊŋsɡəˌʃpʁɛːç/', translation: { en: 'job interview', fa: 'مصاحبه استخدامی', prs: 'مصاحبه کاریابی', tr: 'iş görüşmesi', ar: 'مقابلة التوظيف', es: 'entrevista de trabajo' } },
      { id: 'b1_2_v5', word: 'die Kündigungsfrist', article: 'die', plural: 'die Kündigungsfristen', ipa: '/ˈkʏndɪɡʊŋsˌfʁɪst/', translation: { en: 'notice period', fa: 'مهلت اعلام استعفا یا اخراج', prs: 'مهلت فسخ قرارداد', tr: 'ihbar süresi', ar: 'مهلة الإشعار بإنهاء العقد', es: 'plazo de preaviso' } }
    ],
    videoClip: {
      title: 'Das Vorstellungsgespräch: Stärken und Erfahrungen',
      scenario: 'Ein Bewerber führt in Köln ein Bewerbungsgespräch für eine Stelle im Vertrieb.',
      category: 'beruf',
      duration: '02:30',
      speakers: ['Personalchefin', 'Bewerber'],
      keyPhrases: [
        'Vielen Dank für die Einladung zum Vorstellungsgespräch.',
        'In meiner bisherigen Position konnte ich wertvolle Erfahrungen sammeln.',
        'Welche Weiterbildungsmöglichkeiten bietet Ihr Unternehmen an?'
      ],
      germanTranscript: [
        'Personalchefin: Herzlich willkommen bei uns, Herr Samadi! Bitte nehmen Sie Platz.',
        'Bewerber: Vielen Dank für die Einladung, Frau Meier. Ich freue mich sehr über die Chance.',
        'Personalchefin: Warum haben Sie sich gerade für unser Unternehmen entschieden?',
        'Bewerber: Weil Ihre modernen Projekte im Bereich nachhaltige Energie zukunftsweisend sind und zu meinen Qualifikationen passen.',
        'Personalchefin: Das klingt sehr überzeugend. Wie gehen Sie mit stressigen Deadlines um?'
      ],
      translatedTranscript: [
        {
          en: 'HR Manager: Welcome to our company, Mr. Samadi! Please take a seat.',
          fa: 'مدیر منابع انسانی: به شرکت ما خوش آمدید، آقای صمدی! لطفاً بفرمایید بنشینید.',
          prs: 'رییس منابع بشری: به شرکت ما بسیار خوش آمدید، آقای صمدی صاحب! لطفاً تشریف داشته باشید.',
          tr: 'İK Müdürü: Şirketimize hoş geldiniz Sayın Samadi! Lütfen oturun.',
          ar: 'مديرة الموارد البشرية: أهلاً وسهلاً بكم في شركتنا سيد صمدي! تفضل بالجلوس.',
          es: 'Responsable de RRHH: ¡Bienvenido a nuestra empresa, Sr. Samadi! Por favor, tome asiento.'
        },
        {
          en: 'Applicant: Thank you very much for the invitation, Ms. Meier. I am thrilled about this opportunity.',
          fa: 'متقاضی: خیلی ممنون از دعوتتان، خانم مایر. از این فرصت بسیار خوشحالم.',
          prs: 'متقاضی کار: تشکر فراوان از دعوت تان، محترمه مایر. از این چانس بسیار خرسندم.',
          tr: 'Aday: Davetiniz için çok teşekkürler Bayan Meier. Bu fırsattan çok mutluyum.',
          ar: 'المتقدم: شكراً جزيلاً على الدعوة سيدة ماير. يسعدني جداً الحصول على هذه الفرصة.',
          es: 'Candidato: Muchas gracias por la invitación, Sra. Meier. Me alegra mucho esta oportunidad.'
        },
        {
          en: 'HR Manager: Why did you choose specifically our company?',
          fa: 'مدیر منابع انسانی: چرا مشخصاً شرکت ما را برای کار انتخاب کردید؟',
          prs: 'رییس منابع بشری: چرا مشخصاً شرکت ما را برای همکاری انتخاب نمودید؟',
          tr: 'İK Müdürü: Neden özellikle bizim شرکتimizi tercih ettiniz?',
          ar: 'مديرة الموارد البشرية: لماذا اخترت تحديداً شركتنا؟',
          es: 'Responsable de RRHH: ¿Por qué eligió específicamente nuestra empresa?'
        },
        {
          en: 'Applicant: Because your modern projects in sustainable energy are forward-looking and match my qualifications.',
          fa: 'متقاضی: زیرا پروژه‌های نوین شما در زمینه انرژی‌های پایدار آینده‌نگرانه هستند و با تخصص من همخوانی دارند.',
          prs: 'متقاضی: چون پروژه‌های مدرن شما در بخش انرژی پاک آینده‌دار بوده و با مهارت‌های مسلکی من مطابقت دارد.',
          tr: 'Aday: Çünkü sürdürülebilir enerji alanındaki projeleriniz yenilikçi ve yetkinliklerime tam uyuyor.',
          ar: 'المتقدم: لأن مشاريعكم الحديثة في الطاقة المستدامة واعدة وتتوافق تماماً مع مؤهلاتي.',
          es: 'Candidato: Porque sus proyectos innovadores en energías sostenibles son pioneros y encajan con mi perfil.'
        },
        {
          en: 'HR Manager: That sounds very convincing. How do you handle stressful deadlines?',
          fa: 'مدیر منابع انسانی: این بسیار قانع‌کننده است. با موعدهای کاری فشرده و پرتنش چگونه کنار می‌آیید؟',
          prs: 'رییس منابع بشری: این پاسخ بسیار قناعت‌بخش است. با فشارهای کاری و ضرب‌الاجل‌های نزدیک چطور برخورد می‌کنید؟',
          tr: 'İK Müdürü: Çok ikna edici. Stresli teslim tarihlerini nasıl yönetiyorsunuz?',
          ar: 'مديرة الموارد البشرية: هذا مقنع جداً. كيف تتعامل مع ضغوط العمل والمواعيد النهائية المحددة؟',
          es: 'Responsable de RRHH: Suena muy convincente. ¿Cómo gestiona los plazos de entrega ajustados?'
        }
      ]
    },
    examTip: {
      standard: 'B1 (Goethe & telc Zertifikat B1)',
      module: 'Schreiben & Sprechen',
      tip: {
        en: 'In B1 writing tasks (letters to superiors or authorities), always use Konjunktiv II ("Ich wäre Ihnen dankbar, wenn..." / "Könnten Sie bitte..."). This demonstrates the required B1 stylistic register.',
        fa: 'در آزمون نوشتاری B1 هنگام نامه‌نگاری به کارفرما یا ادارات، حتماً از Konjunktiv II استفاده کنید. این کار نمره سبک نگارش شما را افزایش می‌دهد.',
        prs: 'در بخش نوشتن امتحان B1، وقت نوشتن به ادارات یا آمر کار همیشه از کُنیونکتیو ۲ استفاده کنید تا نمره کامل نگارش رسمی را حاصل نمایید.',
        tr: 'B1 yazma sınavında resmi kurumlara mektup yazarken mutlaka Konjunktiv II kalıplarını kullanın.',
        ar: 'في اختبار الكتابة لمستوى B1 استخدم دائماً صيغ الأدب Konjunktiv II عند مخاطبة الجهات الرسمية.',
        es: 'En el examen de escritura de B1, usa siempre Konjunktiv II para cartas formales.'
      }
    }
  },
  {
    id: 'b1_2_lek9',
    lektionNumber: 9,
    level: 'B1.2',
    title: 'Gesundheit, Prävention und Sozialversicherung',
    subTitle: 'Gesundheitssystem, Arztbesuch und Passivkonstruktionen (Deutsch Mussawi B1.2)',
    topic: 'Krankenkassen, Facharzttermin, Diagnose und Vorgangspassiv (wird gemacht / wurde gemacht)',
    fotoHoergeschichte: {
      title: 'Foto-Hörgeschichte: In der Gemeinschaftspraxis Dr. Lindner',
      imagePrompt: 'A bright doctor surgery waiting room in Hamburg with patients seated and a friendly receptionist handing over an insurance card.',
      imageTheme: 'Hamburg Arztpraxis',
      audioDuration: '02:30',
      transcript: [
        { speaker: 'Arzthelferin', text: 'Guten Tag! Haben Sie Ihre elektronische Gesundheitskarte dabei?' },
        { speaker: 'Herr Yilmaz', text: 'Guten Tag! Ja, hier ist meine Versichertenkarte. Ich habe starke Rückenschmerzen.' },
        { speaker: 'Arzthelferin', text: 'Bitte nehmen Sie kurz im Wartezimmer Platz. Sie werden gleich von Herrn Dr. Lindner aufgerufen.' },
        { speaker: 'Dr. Lindner', text: 'Herr Yilmaz, bitte ins Behandlungszimmer 2. Erzählen Sie, seit wann bestehen die Beschwerden?' },
        { speaker: 'Herr Yilmaz', text: 'Seit drei Tagen. Die Schmerzen strahlen in das rechte Bein aus.' },
        { speaker: 'Dr. Lindner', text: 'Wir werden eine gründliche Untersuchung durchführen. Gegebenenfalls wird auch ein MRT angeordnet.' }
      ],
      summary: {
        en: 'Herr Yilmaz visits a medical practice due to severe back pain. The doctor explains the diagnostic procedures using the passive voice.',
        fa: 'آقای ایلماز به دلیل کمردرد به مطب پزشک مراجعه می‌کند. پزشک مراحل معاینه را با استفاده از افعال مجهول (Passiv) توضیح می‌دهد.',
        prs: 'آقای ایلماز به علت کمردردی شدید به داکتر مراجعه می‌کند. داکتر پروسه تداوی و معاینات را به ساختار مجهول (Passiv) تشریح می‌نماید.',
        tr: 'Bay Yilmaz sırt ağrısı nedeniyle doktora gider. Doktor inceleme süreçlerini edilgen çatı (Passiv) ile açıklar.',
        ar: 'يزور السيد يلماز عيادة الطبيب بسبب آلام في الظهر، ويشرح الطبيب خطوات الفحص بصيغة المبني للمجهول.',
        es: 'El señor Yilmaz visita la consulta médica por dolor de espalda. El médico explica los exámenes con la voz pasiva.'
      }
    },
    sectionA: {
      title: 'Mussawi A: Sprechen & Dialog',
      focus: 'Sprechen & Hören (Beim Arzt: Symptome & Diagnose)',
      description: {
        en: 'Describe symptoms, medication schedules, pain intensity, and medical history accurately.',
        fa: 'توضیح علائم بیماری، شدت درد، مصرف داروها و سوابق پزشکی به آلمانی.',
        prs: 'تشریح علایم مریضی، مقدار درد و طریقه مصرف دوا به زبان آلمانی.',
        tr: 'Belirtileri tarif etme, ağrı şiddeti ve ilaç kullanım talimatları.',
        ar: 'وصف الأعراض وشدة الألم ومواعيد تناول الدواء بدقة.',
        es: 'Descripción de síntomas, intensidad del dolor y tomas de medicamentos.'
      },
      content: 'Wo tut es genau weh? / Das Medikament muss zweimal täglich nach den Mahlzeiten eingenommen werden.',
      audioText: 'Nehmen Sie diese Tabletten bitte morgens und abends mit reichlich Wasser ein. Sollten die Schmerzen anhalten, melden Sie sich bitte wieder.',
      practiceTasks: [
        'Beschreiben Sie Ihrem Lernpartner 3 unterschiedliche Krankheitssymptome.',
        'Formulieren Sie eine Entschuldigung für das Fehlen in der Schule wegen Krankheit.'
      ]
    },
    sectionB: {
      title: 'Mussawi B: Wortschatz & Hören',
      focus: 'Hören & Wortschatz (Das deutsche Gesundheitssystem)',
      description: {
        en: 'Understand terms related to statutory health insurance (GKV), co-payments, referrals, and sick leave.',
        fa: 'درک اصطلاحات بیمه درمانی دولتی، سهم پرداختی بیمار، برگه ارجاع به متخصص و استعلاجی.',
        prs: 'اصطلاحات بیمه صحی، تذکره مریضی، برگه راجع ساختن به متخصص و رخصتی مریضی.',
        tr: 'Sağlık sigortası, sevk belgesi, katkı payı ve rapor alma terimleri.',
        ar: 'مصطلحات التأمين الصحي والإحالة الطبية للعيادات التخصصية.',
        es: 'Términos de seguros de salud, derivaciones médicas y copagos.'
      },
      content: 'die Versichertenkarte, die Zuzahlung, die Überweisung, das Rezept, die Arbeitsunfähigkeit, die Physiotherapie.',
      audioText: 'Mit dieser Überweisung gehen Sie bitte zu einem Facharzt für Orthopädie. Vergessen Sie nicht, vorab telefonisch einen Termin zu vereinbaren.',
      practiceTasks: [
        'Klären Sie den Unterschied zwischen Hausarzt und Facharzt.',
        'Lesen Sie ein Muster-Rezept und entnehmen Sie Dosierung und Wirkstoff.'
      ]
    },
    sectionC: {
      title: 'Mussawi C: Alltagskommunikation',
      focus: 'Sprechen & Dialoge (Terminvereinbarung & Notfall)',
      description: {
        en: 'Schedule appointments by phone, request urgent slots, and know how to reach emergency services (112, 116117).',
        fa: 'نوبت‌گیری تلفنی از مطب، درخواست وقت فوری و تماس با خدمات اورژانس و کشیک پزشکان.',
        prs: 'گرفتن وقت ملاقات از داکتر با تیلیفون، تقاضای وقت عاجل و تماس با شماره‌های اضطراری.',
        tr: 'Telefonda acil randevu alma ve nöbetçi doktor servisleriyle iletişim.',
        ar: 'حجز المواعيد هاتفياً وطلب مواعيد عاجلة والتواصل مع طوارئ الأطباء.',
        es: 'Concertar citas médicas por teléfono y comunicarse con emergencias.'
      },
      content: 'Ich hätte gern den nächstmöglichen Termin. / Es ist dringend, ich habe starke Schmerzen. / Unter 116117 erreichen Sie den ärztlichen Bereitschaftsdienst.',
      audioText: 'Gemeinschaftspraxis Dr. Lindner, guten Tag! - Guten Tag, hier spricht Yilmaz. Ich benötige bitte dringend einen Termin, da ich kaum auftreten kann.',
      practiceTasks: [
        'Üben Sie das Telefonat: Terminverschiebung bei einem Facharzt.',
        'Wann ruft man die 112 und wann die 116117 an? Erläutern Sie den Unterschied.'
      ]
    },
    sectionD: {
      title: 'Mussawi D: Leseverstehen & Text',
      focus: 'Lesen & Textanalyse (Packungsbeilage & Patienteninformation)',
      description: {
        en: 'Analyze patient information leaflets (Packungsbeilage), dosage recommendations, and side effects.',
        fa: 'تحلیل بروشور راهنمای دارو، دستور مصرف، عوارض جانبی و تداخلات دارویی.',
        prs: 'خواندن رهنمود دوا، مقدار مصرف، عوارض جانبی و موارد منع مصرف.',
        tr: 'İlaç prospektüsü, dozaj talimatları ve yan etki uyarılarını okuma.',
        ar: 'تحليل النشرة الدوائية وإرشادات الجرعات والآثار الجانبية.',
        es: 'Lectura de prospectos médicos, dosis y efectos secundarios.'
      },
      content: 'Authentischer Beipackzettel eines Schmerzmittels mit Gegenanzeigen und Dosierungsangaben.',
      readingText: {
        type: 'Medizinische Gebrauchsinformation (Beipackzettel)',
        title: 'Ibuprofen 400 mg Filmtabletten - Wichtige Hinweise',
        body: 'Anwendungsgebiete: Leichte bis mäßig starke Schmerzen wie Kopf-, Zahn- und Regelschmerzen sowie Fieber. Dosierung: Erwachsene nehmen nach Bedarf 1 Filmtablette (400 mg) mit ausreichend Flüssigkeit unzerkaut ein. Die maximale Tagesdosis von 3 Tabletten (1200 mg) darf nicht überschritten werden. Nebenwirkungen: Häufig können Magen-Darm-Beschwerden wie Übelkeit oder Sodbrennen auftreten. Bei anhaltenden Beschwerden nach 4 Tagen ist zwingend ein Arzt zu konsultieren.'
      },
      practiceTasks: [
        'Wie lautet die maximale Tagesdosis für Erwachsene?',
        'Nach wie vielen Tagen ohne Besserung muss ein Arzt aufgesucht werden?'
      ]
    },
    sectionE: {
      title: 'Mussawi E: Grammatik & Schreiben',
      focus: 'Grammatik & Schreiben (Das Vorgangspassiv im Präsens & Präteritum: werden + Partizip II)',
      description: {
        en: 'Understand and construct passive sentences where the action or process is highlighted rather than the actor.',
        fa: 'فهم و ساخت جملات مجهول (Passiv) در زمان حال و گذشته ساده: تاکید بر انجام کار نه فاعل.',
        prs: 'یادگیری و ساخت جملات مجهول در زمان حال و گذشته با فرمول: werden + صفت مفعولی (Partizip II).',
        tr: 'Geniş zaman ve geçmiş zamanda Passiv (edilgen çatı) cümle yapısı.',
        ar: 'بناء وتطبيق صيغة المبني للمجهول في الحاضر والماضي البسيط.',
        es: 'Construcción y uso de la voz pasiva en presente y pretérito.'
      },
      content: 'Präsens: "Der Patient wird untersucht." / Präteritum: "Der Patient wurde operiert."',
      grammarRule: {
        id: 'b1_2_passiv_rule',
        level: 'B1.2',
        germanTitle: 'Das Vorgangspassiv (Präsens & Präteritum)',
        formula: 'Präsens: Subjekt + wird/werden + ... + Partizip II | Präteritum: Subjekt + wurde/wurden + ... + Partizip II',
        explanation: {
          en: 'The passive voice is used when the process or action is in focus, or when the agent is unknown or irrelevant. Formed with conjugated forms of "werden" (wird/wurde) and Partizip II at the end of the clause.',
          fa: 'مجهول فرآیندی زمانی به کار می‌رود که خود عمل یا رویداد مهم است و فاعل ناشناخته یا کم‌اهمیت باشد. با صرف فعل werden در جایگاه دوم و Partizip II در انتهای جمله ساخته می‌شود.',
          prs: 'ساختار مجهول وقتی استفاده می‌شود که خود کار یا نتیجه مهم باشد نه انجام‌دهنده. فعل werden در زمان مربوطه گردان شده و Partizip II در اخیر جمله قرار می‌گیرد.',
          tr: 'Edilgen çatı, eylemin kendisi veya sonucu vurgulanmak istendiğinde kullanılır. "werden" yardımcı fiili ve Partizip II ile kurulur.',
          ar: 'تستخدم صيغة المبني للمجهول عندما يكون الحدث نفسه هو الأهم بصرف النظر عن الفاعل.',
          es: 'La voz pasiva se usa cuando el foco está en el proceso o resultado y no en el agente.'
        },
        examples: [
          {
            german: 'In der Klinik werden täglich viele Patienten erfolgreich behandelt.',
            formulaBreakdown: 'In der Klinik (...) + werden (V1) + täglich viele Patienten (S) + behandelt (V2 P.II).',
            literalTranslation: {
              en: 'In the clinic become daily many patients successfully treated.',
              fa: 'در درمانگاه روزانه بیماران زیادی با موفقیت درمان می‌شوند.',
              prs: 'در کلینیک هر روزه مریضان زیادی با موفقیت تداوی می‌شوند.',
              tr: 'Klinikte her gün birçok hasta başarıyla tedavi edilir.',
              ar: 'في العيادة يُعالج يومياً العديد من المرضى بنجاح.',
              es: 'En la clínica se atiende diariamente a muchos pacientes con éxito.'
            },
            fluentTranslation: {
              en: 'Many patients are successfully treated at the clinic every day.',
              fa: 'در این درمانگاه هر روز بیماران متعددی تحت درمان موفق قرار می‌گیرند.',
              prs: 'در این کلینیک روزانه شمار زیادی از مریضان به گونه موفقانه تداوی می‌گردند.',
              tr: 'Klinikte her gün çok sayıda hasta başarılı bir şekilde tedavi edilmektedir.',
              ar: 'يتم علاج العديد من المرضى بنجاح في العيادة يومياً.',
              es: 'Muchos pacientes son tratados con éxito en la clínica todos los días.'
            }
          },
          {
            german: 'Die Überweisung wurde gestern vom Hausarzt ausgestellt.',
            formulaBreakdown: 'Die Überweisung (S) + wurde (V1 Präteritum) + gestern vom Hausarzt + ausgestellt (V2 P.II).',
            literalTranslation: {
              en: 'The referral became yesterday by-the family-doctor issued.',
              fa: 'برگه ارجاع دیروز توسط پزشک خانواده صادر شد.',
              prs: 'برگه راجع ساختن دیروز از طرف داکتر خانوادگی صادر شد.',
              tr: 'Sevk belgesi dün aile hekimi tarafından düzenlendi.',
              ar: 'تم إصدار الإحالة الطبية أمس من قِبل طبيب الأسرة.',
              es: 'La derivación fue emitida ayer por el médico de cabecera.'
            },
            fluentTranslation: {
              en: 'The referral was issued yesterday by the general practitioner.',
              fa: 'برگه ارجاع به پزشک متخصص، روز گذشته توسط پزشک عمومی صادر شد.',
              prs: 'معرفی‌خط به متخصص، دیروز از سوی داکتر عمومی تحریر و صادر گردید.',
              tr: 'Sevk belgesi dün aile hekimi tarafından verildi.',
              ar: 'أصدر طبيب الأسرة ورقة الإحالة الطبية يوم أمس.',
              es: 'La orden de interconsulta fue emitida ayer por el médico de familia.'
            }
          }
        ]
      },
      practiceTasks: [
        'Verwandeln Sie 3 Aktivsätze in Passivsätze (z.B. "Der Arzt untersucht den Patienten" -> "Der Patient wird untersucht").',
        'Beschreiben Sie einen Krankenhausablauf mit 4 Passivsätzen.'
      ]
    },
    vocabularies: [
      { id: 'b1_2_v6', word: 'die Untersuchung', article: 'die', plural: 'die Untersuchungen', ipa: '/ˈʊntɐˌzuːxʊŋ/', translation: { en: 'examination / check-up', fa: 'معاینه پزشکی', prs: 'معاینه صحی', tr: 'muayene', ar: 'فحص طبي', es: 'reconocimiento médico' } },
      { id: 'b1_2_v7', word: 'die Krankenkasse', article: 'die', plural: 'die Krankenkassen', ipa: '/ˈkʁaŋkn̩ˌkasə/', translation: { en: 'health insurance company', fa: 'صندوق بیمه درمانی', prs: 'بیمه صحی', tr: 'sağlık sigortası kurumu', ar: 'صندوق التأمين الصحي', es: 'compañía de seguro médico' } },
      { id: 'b1_2_v8', word: 'das Rezept', article: 'das', plural: 'die Rezepte', ipa: '/ʁeˈtsɛpt/', translation: { en: 'prescription / recipe', fa: 'نسخه دارویی', prs: 'نسخه داکتر', tr: 'reçete', ar: 'الوصفة الطبية', es: 'receta médica' } },
      { id: 'b1_2_v9', word: 'die Nebenwirkung', article: 'die', plural: 'die Nebenwirkungen', ipa: '/ˈneːbn̩ˌvɪʁkʊŋ/', translation: { en: 'side effect', fa: 'عارضه جانبی دارو', prs: 'عارضه جانبی دوا', tr: 'yan etki', ar: 'أثر جانبي', es: 'efecto secundario' } },
      { id: 'b1_2_v10', word: 'die Überweisung', article: 'die', plural: 'die Überweisungen', ipa: '/yːbɐˈvaɪ̯zʊŋ/', translation: { en: 'medical referral / bank transfer', fa: 'برگه ارجاع پزشکی / انتقال بانکی', prs: 'معرفی‌خط به متخصص / حواله', tr: 'sevk / havale', ar: 'إحالة طبية / تحويل مصرفي', es: 'derivación médica / transferencia' } }
    ],
    videoClip: {
      title: 'In der Arztpraxis: Krankschreibung und Überweisung',
      scenario: 'Eine Patientin lässt sich nach einem Arbeitsunfall in einer Praxis für Allgemeinmedizin untersuchen.',
      category: 'alltag',
      duration: '02:20',
      speakers: ['Ärztin', 'Patientin'],
      keyPhrases: [
        'Wo genau verspüren Sie die Schmerzen?',
        'Ich schreibe Sie für drei Tage arbeitsunfähig krank.',
        'Hier ist Ihre Überweisung zum Facharzt.'
      ],
      germanTranscript: [
        'Ärztin: Guten Tag, Frau Alimi. Was führt Sie heute zu mir?',
        'Patientin: Guten Tag, Frau Doktor. Ich habe seit gestern starke Rückenschmerzen und kann mich kaum bücken.',
        'Ärztin: Seit wann genau bestehen diese Beschwerden und strahlt der Schmerz in die Beine aus?',
        'Patientin: Seit gestern Nachmittag nach dem Heben einer schweren Kiste bei der Arbeit. Es zieht bis in die Hüfte.',
        'Ärztin: Ich untersuche Ihren Rücken sofort. Ich werde Sie bis Freitag krankschreiben und gebe Ihnen eine Überweisung zum Orthopäden.'
      ],
      translatedTranscript: [
        {
          en: 'Doctor: Good day, Ms. Alimi. What brings you to see me today?',
          fa: 'پزشک: روز بخیر، خانم علیمی. امروز چه مشکلی باعث مراجعه شما شد؟',
          prs: 'داکتر: روز بخیر، محترمه علیمی. امروز چه مشکلی شما را به معاینه‌خانه آورد؟',
          tr: 'Doktor: İyi günler Bayan Alimi. Şikayetiniz nedir?',
          ar: 'الطبيبة: مرحباً سيدة عليمي. ما الذي تشكون منه اليوم؟',
          es: 'Médica: Buenos días, Sra. Alimi. ¿Qué la trae hoy a la consulta?'
        },
        {
          en: 'Patient: Good day, Doctor. I have had severe back pain since yesterday and can barely bend down.',
          fa: 'بیمار: روز بخیر خانم دکتر. از دیروز درد شدید کمر دارم و به‌سختی می‌توانم خم شوم.',
          prs: 'مریض: روز بخیر داکتر صاحب. از دیروز کمردردی بسیار شدید دارم و به سختی خم شده می‌توانم.',
          tr: 'Hasta: İyi günler doktor hanım. Dünden beri şiddetli bel ağrım var, eğilemiyorum.',
          ar: 'المريضة: مرحباً دكتورة. أعاني منذ الأمس من ألم شديد في الظهر وبالكاد أستطيع الانحناء.',
          es: 'Paciente: Buenos días, doctora. Desde ayer tengo un dolor de espalda muy fuerte y apenas puedo agacharme.'
        },
        {
          en: 'Doctor: Since when exactly have these symptoms been present, and does the pain radiate into your legs?',
          fa: 'پزشک: این علائم دقیقاً از چه زمانی آغاز شده و آیا درد به پاها تیر می‌کشد؟',
          prs: 'داکتر: این تکلیف دقیقاً از چه وقت شروع شده و آیا درد به پاهای تان نیز سرایت می‌کند؟',
          tr: 'Doktor: Ağrı tam olarak ne zaman başladı ve bacaklarınıza vuruyor mu?',
          ar: 'الطبيبة: منذ متى بالتحديد بدأت هذه الأعراض وهل يمتد الألم إلى ساقيك؟',
          es: 'Médica: ¿Desde cuándo exactamente tiene estas molestias y se irradia el dolor hacia las piernas?'
        },
        {
          en: 'Patient: Since yesterday afternoon after lifting a heavy crate at work. It pulls into the hip.',
          fa: 'بیمار: از دیروز بعدازظهر بعد از بلند کردن یک جعبه سنگین در محل کار. درد تا لگن امتداد پیدا می‌کند.',
          prs: 'مریض: از دیروز بعد از چاشت بعد از برداشتن یک صندوق سنگین در کارم. درد تا قسمت مفصل ران کشانده می‌شود.',
          tr: 'Hasta: Dün öğleden sonra işte ağır bir koli kaldırdıktan sonra. Kalçama kadar çekiyor.',
          ar: 'المريضة: منذ بعد ظهر أمس عقب رفع صندوق ثقيل أثناء العمل. ويمتد الألم إلى الورك.',
          es: 'Paciente: Desde ayer por la tarde tras levantar una caja pesada en el trabajo. Se extiende hasta la cadera.'
        },
        {
          en: 'Doctor: I will examine your back right away. I will sign you off work until Friday and give you a referral to an orthopedist.',
          fa: 'پزشک: فوراً کمر شما را معاینه می‌کنم. تا جمعه برایتان گواهی استعلاجی می‌نویسم و یک برگه ارجاع به ارتوپد می‌دهم.',
          prs: 'داکتر: فوراً کمر شما را معاینه می‌کنم. تا روز جمعه برایتان رخصتی مریضی (Krankschreibung) نوشته می‌کنم و معرفی‌خط پیش داکتر استخوان می‌دهم.',
          tr: 'Doktor: Sırtınızı hemen muayene edeyim. Cuma gününe kadar rapor yazıp sizi ortopediye sevk edeceğim.',
          ar: 'الطبيبة: سأفحص ظهرك فوراً. سأمنحك إجازة مرضية حتى الجمعة وإحالة إلى طبيب العظام.',
          es: 'Médica: Examinaré su espalda enseguida. Le daré la baja médica hasta el viernes y un volante para el traumatólogo.'
        }
      ]
    },
    examTip: {
      standard: 'B1 (Goethe & telc Zertifikat B1)',
      module: 'Lesen & Sprachbausteine',
      tip: {
        en: 'In B1 reading comprehension, instructions and safety regulations are frequently phrased in the passive ("Muss beachtet werden", "Wird empfohlen"). Train yourself to identify the receiver of the action.',
        fa: 'در درک مطلب B1، دستورالعمل‌های دارویی و اداری اغلب مجهول هستند. تمرین کنید که متوجه شوید عمل روی چه کسی یا چه چیزی انجام می‌شود.',
        prs: 'در بخش ریدینگ امتحان B1، احکام و رهنمودهای اداری اکثر اوقات به شکل مجهول نوشته می‌شوند. همیشه دقت کنید که اثر عمل بر کدام کلمه واقع شده است.',
        tr: 'B1 okuma sınavında talimatlar çoğunlukla edilgen (Passiv) yapıda verilir. Eylemin nesnesine dikkat edin.',
        ar: 'في اختبار القراءة بمستوى B1 تصاغ اللوائح والتعليمات بصيغة المبني للمجهول بكثرة.',
        es: 'En la comprensión lectora de B1, las normativas se redactan frecuentemente en voz pasiva.'
      }
    }
  },
  {
    id: 'b1_2_lek10',
    lektionNumber: 10,
    level: 'B1.2',
    title: 'Wohnen, Nachbarschaft und Zusammenleben',
    subTitle: 'Mietvertrag, Hausordnung und zweiteilige Konnektoren (Deutsch Mussawi B1.2)',
    topic: 'Wohnungssuche, Mietkaution, Nebenkostenabrechnung und zweiteilige Konnektoren',
    fotoHoergeschichte: {
      title: 'Foto-Hörgeschichte: Die Wohnungsübergabe in Köln',
      imagePrompt: 'An airy renovated apartment in Cologne where a landlord and a new tenant are checking an inventory list and signing a handover protocol.',
      imageTheme: 'Köln Wohnungsübergabe',
      audioDuration: '02:35',
      transcript: [
        { speaker: 'Herr Schneider (Vermieter)', text: 'Hier ist das Übergabeprotokoll. Wir prüfen gemeinsam sowohl den Zustand der Wände als auch die Zählerstände.' },
        { speaker: 'Frau Al-Mansur (Mieterin)', text: 'Sehr gern. Die Wohnung ist frisch gestrichen, aber im Badezimmer tropft der Wasserhahn ein wenig.' },
        { speaker: 'Herr Schneider', text: 'Das notiere ich sofort. Ich werde dafür sorgen, dass der Mangel nicht nur zeitnah repariert, sondern auch von der Hausverwaltung überprüft wird.' },
        { speaker: 'Frau Al-Mansur', text: 'Vielen Dank! Wie verhält es sich mit der Mülltrennung und den Ruhezeiten im Haus?' },
        { speaker: 'Herr Schneider', text: 'In unserer Hausordnung gilt: Weder laute Musik nach 22 Uhr noch Lärm am Sonntag sind gestattet.' }
      ],
      summary: {
        en: 'A tenant and a landlord complete an apartment handover in Cologne, discussing the inventory protocol and rules using two-part connectors.',
        fa: 'مستاجر و صاحب‌خانه در کلن تحویل آپارتمان را نهایی می‌کنند و با حروف ربط دوتایی، وضعیت خانه و قوانین ساختمان را بررسی می‌نمایند.',
        prs: 'مستاجر و مالک خانه در شهر کلن پروتوکول تسلیمی خانه را امضا نموده و با کلمات ربط دوگانه، مقررات آپارتمان را مرور می‌کنند.',
        tr: 'Kiracı ve ev sahibi Köln\'de daire teslim tutanağını doldurur ve iki parçalı bağlaçlarla kuralları gözden geçirir.',
        ar: 'تستلم المستأجرة الشقة في كولونيا وتراجع محضر التسليم وقواعد السكن باستخدام الروابط المزدوجة.',
        es: 'La inquilina y el arrendador firman el protocolo de entrega en Colonia y repasan las normas con conectores dobles.'
      }
    },
    sectionA: {
      title: 'Mussawi A: Sprechen & Dialog',
      focus: 'Sprechen & Hören (Wohnungsübergabe & Mängelanzeige)',
      description: {
        en: 'Inspect an apartment, describe damages objectively, and request repairs using formal German.',
        fa: 'بررسی آپارتمان، گزارش دقیق خرابی‌ها و درخواست رسمی تعمیرات از صاحب‌خانه.',
        prs: 'معاینه دقیق آپارتمان، راپور دادن خرابی‌ها و تقاضای ترمیم رسمی از مالک.',
        tr: 'Daire tesliminde hasar tespiti yapma ve ev sahibinden onarım talep etme.',
        ar: 'فحص الشقة وتوثيق العيوب وطلب الإصلاحات بأسلوب رسمي سليم.',
        es: 'Inspección de la vivienda y reclamación formal de desperfectos.'
      },
      content: 'Das Übergabeprotokoll, der Mangel, tropfen, die Kaution, der Zählerstand, die Nebenkosten.',
      audioText: 'Bitte vermerken Sie im Übergabeprotokoll, dass die Balkontür nicht richtig schließt und nachjustiert werden muss.',
      practiceTasks: [
        'Erstellen Sie eine Liste von 3 Mängeln in einer Mietwohnung und formulieren Sie eine Mängelanzeige.',
        'Spielen Sie einen Dialog zwischen Mieter und Hausverwaltung.'
      ]
    },
    sectionB: {
      title: 'Mussawi B: Wortschatz & Hören',
      focus: 'Hören & Wortschatz (Mietrecht & Nebenkostenabrechnung)',
      description: {
        en: 'Understand tenancy agreements, utility charges (heating, garbage, water), deposit refunds, and house rules.',
        fa: 'درک بندهای اجاره‌نامه، قبوض شارژ ساختمان (گرمایش، زباله، آب)، بازگشت ودیعه و قوانین مجتمع.',
        prs: 'آشنایی با قرارداد کرایه، مصارف جانبی (گرمی، کثافات، آب)، پس گرفتن پول دیپوزیت و نظم خانه.',
        tr: 'Kira sözleşmesi, yan giderler, depozito iadesi ve apartman kuralları sözcükleri.',
        ar: 'فهم عقود الإيجار وحساب التكاليف الإضافية واسترداد مبلغ التأمين.',
        es: 'Comprensión de contratos de alquiler, gastos de comunidad y fianzas.'
      },
      content: 'die Kaltmiete, die Warmmiete, die Betriebskosten, die Mülltrennung, die Ruhezeit, die Kautionsrückzahlung.',
      audioText: 'Die Warmmiete beträgt 850 Euro und setzt sich aus der Kaltmiete sowie den Vorauszahlungen für Heizung und Betriebskosten zusammen.',
      practiceTasks: [
        'Erklären Sie den Unterschied zwischen Kaltmiete und Warmmiete.',
        'Welche Ruhezeiten gelten üblicherweise in Deutschland?'
      ]
    },
    sectionC: {
      title: 'Mussawi C: Alltagskommunikation',
      focus: 'Sprechen & Dialoge (Konfliktlösung mit Nachbarn)',
      description: {
        en: 'Address neighborhood issues diplomatically: noise complaints, stairwell cleaning, and parking spaces.',
        fa: 'حل مسالمت‌آمیز اختلافات همسایگی: سر و صدا، نظافت راه‌پله و محل پارک خودرو.',
        prs: 'حل دوستانه مشکلات با همسایه‌ها: سر و صدای بی‌وقت، پاک‌کاری زینه و پارکینگ موتر.',
        tr: 'Komşularla diplomatik iletişim, gürültü şikayetleri ve ortak alan düzeni.',
        ar: 'حل الخلافات مع الجيران بلباقة: الشكوى من الضوضاء وتنظيف السلالم.',
        es: 'Resolución diplomática de conflictos vecinales y normas de convivencia.'
      },
      content: 'Entschuldigen Sie die Störung, aber Ihre Musik ist am Abend leider sehr laut. / Könnten wir uns darauf einigen, dass...?',
      audioText: 'Guten Abend, Herr Wagner! Ich möchte Sie freundlich bitten, nach 22 Uhr die Lautstärke der Musik zu reduzieren, da mein Kind schlafen muss.',
      practiceTasks: [
        'Formulieren Sie eine freundliche, aber bestimmte Beschwerde an einen lauten Nachbarn.',
        'Reagieren Sie verständnisvoll auf eine Beschwerde.'
      ]
    },
    sectionD: {
      title: 'Mussawi D: Leseverstehen & Text',
      focus: 'Lesen & Textanalyse (Hausordnung & Mietvertragsklauseln)',
      description: {
        en: 'Analyze legal clauses in house rules regarding quiet hours, ventilation, waste disposal, and pets.',
        fa: 'تحلیل متن حقوقی اساسنامه ساختمان درباره ساعات سکوت، تهویه هوا، تفکیک زباله و نگهداری حیوانات.',
        prs: 'خواندن و درک مقررات حقوقی آپارتمان درباره آرامش شبانه، تهویه هوا و پاکی محیط زیست.',
        tr: 'Apartman yönetmeliğindeki dinlenme saatleri, havalandırma ve evcil hayvan kurallarını okuma.',
        ar: 'تحليل البنود القانونية في لائحة المبنى المتعلقة بساعات الهدوء والتهوية والنفايات.',
        es: 'Análisis de cláusulas de convivencia y reglamentos de la comunidad de vecinos.'
      },
      content: 'Auszug aus einer typischen deutschen Hausordnung.',
      readingText: {
        type: 'Hausordnung & Vorschriften',
        title: 'Hausordnung der Wohnanlage Gartenstraße 14',
        body: '1. Ruhezeiten: Die Nachtruhe beginnt um 22:00 Uhr und endet um 07:00 Uhr. An Sonn- und Feiertagen ist ganztägig auf Zimmerlautstärke zu achten. 2. Lüftung & Heizen: Zur Vermeidung von Schimmelbildung sind alle Wohnräume täglich mehrfach stoßzulüften. Dauerkippen von Fenstern während der Heizperiode ist untersagt. 3. Treppenhaus & Fluchtwege: Das Abstellen von Fahrrädern, Kinderwagen oder Schuhen im Hausflur ist aus Brandschutzgründen untersagt.'
      },
      practiceTasks: [
        'Zu welchen Zeiten gilt laut Hausordnung die Nachtruhe?',
        'Warum dürfen keine Gegenstände im Treppenhaus abgestellt werden?'
      ]
    },
    sectionE: {
      title: 'Mussawi E: Grammatik & Schreiben',
      focus: 'Grammatik & Schreiben (Zweiteilige Konnektoren: sowohl... als auch / nicht nur... sondern auch / weder... noch)',
      description: {
        en: 'Use complex two-part connectors to connect thoughts logically and elevate your B1 language competence.',
        fa: 'استفاده از حروف ربط دوتایی برای پیوند منطقی و سطح بالای جملات در B1.',
        prs: 'به‌کارگیری کلمات ربط دوگانه (نه تنها... بلکه، هم... و هم، نه... و نه) برای فصاحت کلام در سطح B1.',
        tr: 'İki parçalı bağlaçlarla zengin ve akıcı cümleler kurma.',
        ar: 'استخدام الروابط المزدوجة للربط المنطقي بين الأفكار والارتقاء بالمستوى اللغوي.',
        es: 'Uso de conectores dobles para estructurar argumentos con precisión.'
      },
      content: '"sowohl ... als auch" (positiv doppelt), "nicht nur ... sondern auch" (steigernd), "weder ... noch" (negativ doppelt).',
      grammarRule: {
        id: 'b1_2_konnektoren_rule',
        level: 'B1.2',
        germanTitle: 'Zweiteilige Konnektoren (Doppelkonnektoren)',
        formula: 'sowohl [A] als auch [B] | nicht nur [A], sondern auch [B] | weder [A] noch [B] | entweder [A] oder [B]',
        explanation: {
          en: 'Two-part connectors connect two elements of equal grammatical rank. "Sowohl... als auch" emphasizes both elements equally. "Nicht nur... sondern auch" adds an escalating emphasis. "Weder... noch" negates both elements without needing "nicht" or "kein".',
          fa: 'حروف ربط دوتایی برای اتصال دو عنصر هم‌پایه به کار می‌روند: sowohl... als auch یعنی هم این و هم آن؛ nicht nur... sondern auch یعنی نه تنها این بلکه آن هم؛ weder... noch هر دو مورد را همزمان منفی می‌کند و نیازی به کلمه منفی دیگری ندارد.',
          prs: 'کلمات ربط دوگانه برای اتصال دو بخش مساوی در جمله استفاده می‌شوند: sowohl... als auch (هم این و هم آن)، nicht nur... sondern auch (نه تنها این بلکه آن هم)، و weder... noch (نه این و نه آن) که هردو بخش را بدون آوردن کلمه منفی، نفی می‌نماید.',
          tr: 'İki parçalı bağlaçlar iki eşit ögeyi bağlar. Hem... hem de, sadece... değil aynı zamanda, ne... ne de gibi anlamlar katar.',
          ar: 'تربط الروابط المزدوجة بين عنصرين متساويين في الرتبة النحوية (ليس فقط... بل أيضاً، لا... ولا).',
          es: 'Los conectores dobles enlazan elementos equivalentes (tanto... como, no solo... sino también, ni... ni).'
        },
        examples: [
          {
            german: 'Die Wohnung verfügt sowohl über einen Balkon als auch über einen eigenen Kellerraum.',
            formulaBreakdown: 'Die Wohnung verfügt + sowohl über [A] + als auch über [B].',
            literalTranslation: {
              en: 'The apartment disposes as-well over a balcony as also over an own basement-room.',
              fa: 'این آپارتمان هم دارای بالکن است و هم دارای انباری اختصاصی در زیرزمین.',
              prs: 'این آپارتمان هم بالکن دارد و هم یک تهکوی اختصاصی.',
              tr: 'Daire hem bir balkona hem de kendine ait bir kiler odasına sahiptir.',
              ar: 'تتميز الشقة بوجود شرفة وأيضاً قبو خاص بها.',
              es: 'El piso dispone tanto de balcón como de trastero propio.'
            },
            fluentTranslation: {
              en: 'The apartment features both a balcony and its own private storage basement.',
              fa: 'آپارتمان هم از بالکن برخوردار است و هم یک انباری اختصاصی دارد.',
              prs: 'آپارتمان هم بالکن و هم تهکوی مستقل برای ذخیره وسایل دارد.',
              tr: 'Dairede hem balkon hem de özel bir bodrum odası mevcuttur.',
              ar: 'تحتوي الشقة على شرفة وغرفة تخزين خاصة في القبو معاً.',
              es: 'La vivienda cuenta tanto con balcón como con trastero independiente.'
            }
          },
          {
            german: 'In der Mietwohnung sind weder Hunde noch Katzen erlaubt.',
            formulaBreakdown: 'In der Mietwohnung sind + weder [Nomen 1] + noch [Nomen 2] + erlaubt.',
            literalTranslation: {
              en: 'In the rental-flat are neither dogs nor cats permitted.',
              fa: 'در آپارتمان استیجاری نه سگ‌ها و نه گربه‌ها مجاز نیستند.',
              prs: 'در این خانه کرایی نه سگ‌ها و نه پشک‌ها اجازه داده می‌شوند.',
              tr: 'Kiralık dairede ne köpeklere ne de kedilere izin verilmektedir.',
              ar: 'في هذه الشقة المستأجرة لا يُسمح بالكلاب ولا بالقطط.',
              es: 'En el piso de alquiler no se admiten ni perros ni gatos.'
            },
            fluentTranslation: {
              en: 'Neither dogs nor cats are allowed in this rented apartment.',
              fa: 'نگهداری سگ و گربه در این آپارتمان کرایه‌ای مجاز نیست.',
              prs: 'نگهداری هیچ نوع سگ یا پشک در این آپارتمان کرایی مجاز نمی‌باشد.',
              tr: 'Bu kiralık dairede kesinlikle kedi veya köpek beslenemez.',
              ar: 'لا يُسمح باقتناء الكلاب أو القطط في هذه الشقة المؤجرة.',
              es: 'En esta vivienda de alquiler no se permiten ni perros ni gatos.'
            }
          }
        ]
      },
      practiceTasks: [
        'Verbinden Sie zwei Vorteile Ihrer Traumwohnung mit "nicht nur ..., sondern auch".',
        'Formulieren Sie ein Verbot mit "weder ... noch".'
      ]
    },
    vocabularies: [
      { id: 'b1_2_v11', word: 'die Nebenkosten', article: 'die', plural: 'die Nebenkosten (Pl.)', ipa: '/ˈneːbn̩ˌkɔstn̩/', translation: { en: 'utility charges / additional costs', fa: 'هزینه‌های جانبی / شارژ ساختمان', prs: 'مصارف جانبی آپارتمان', tr: 'yan giderler', ar: 'المصاريف الإضافية للشقة', es: 'gastos de comunidad / suministros' } },
      { id: 'b1_2_v12', word: 'die Kaution', article: 'die', plural: 'die Kautionen', ipa: '/kaʊ̯ˈtsi̯oːn/', translation: { en: 'rental deposit', fa: 'پول پیش / ودیعه مسکن', prs: 'پول دیپوزیت / ضمانت خانه', tr: 'kira depozitosu', ar: 'مبلغ التأمين على السكن', es: 'fianza de alquiler' } },
      { id: 'b1_2_v13', word: 'das Übergabeprotokoll', article: 'das', plural: 'die Übergabeprotokolle', ipa: '/ˈyːbɐɡaːbəpʁotoˌkɔl/', translation: { en: 'handover protocol', fa: 'صورت‌جلسه تحویل ملک', prs: 'پروتوکول تسلیمی خانه', tr: 'teslim tutanağı', ar: 'محضر استلام العقار', es: 'acta de entrega de la vivienda' } },
      { id: 'b1_2_v14', word: 'die Hausordnung', article: 'die', plural: 'die Hausordnungen', ipa: '/ˈhaʊ̯sˌʔɔʁdnʊŋ/', translation: { en: 'house rules', fa: 'اساسنامه نظم ساختمان', prs: 'مقررات و نظم خانه', tr: 'apartman yönetmeliği', ar: 'لائحة النظام الداخلي للمبنى', es: 'normas de la comunidad de vecinos' } },
      { id: 'b1_2_v15', word: 'die Kaltmiete', article: 'die', plural: 'die Kaltmieten', ipa: '/ˈkaltˌmiːtə/', translation: { en: 'rent excluding heating & utilities', fa: 'اجاره‌بهای پایه (بدون شارژ و گرمایش)', prs: 'کرایه پایه خانه (بدون مصارف گرمی و خدمات)', tr: 'net kira (yakıtsız)', ar: 'الإيجار الأساسي الصافي', es: 'alquiler neto sin gastos' } }
    ],
    videoClip: {
      title: 'Die Wohnungsbesichtigung in München',
      scenario: 'Ein Interessent besichtigt eine 2-Zimmer-Wohnung und bespricht die Mietkonditionen mit dem Vermieter.',
      category: 'alltag',
      duration: '02:35',
      speakers: ['Vermieter', 'Mietinteressent'],
      keyPhrases: [
        'Wie hoch ist die Warmmiete inklusive Nebenkosten?',
        'Ist eine Kaution von drei Monatskaltmieten fällig?',
        'Hier ist meine vollständige Bewerbermappe mit Schufa-Auskunft.'
      ],
      germanTranscript: [
        'Vermieter: Herzlich willkommen zur Wohnungsbesichtigung! Wie gefällt Ihnen der Schnitt der Räume?',
        'Mietinteressent: Die Wohnung ist wunderbar hell und der Balkon nach Süden ist fantastisch.',
        'Vermieter: In der Kaltmiete von 850 Euro sind die Heizkosten nicht inbegriffen. Die Warmmiete beträgt 1050 Euro.',
        'Mietinteressent: Das passt sehr gut in mein Budget. Wie hoch ist die Mietkaution?',
        'Vermieter: Genau drei Monatskaltmieten, also 2550 Euro, die auf einem Kautionskonto hinterlegt werden.'
      ],
      translatedTranscript: [
        {
          en: 'Landlord: Welcome to the apartment viewing! How do you like the room layout?',
          fa: 'صاحبخانه: به بازدید آپارتمان خوش آمدید! نقشه اتاق‌ها چطور به نظرتان می‌رسد؟',
          prs: 'صاحب‌خانه: به دیدن آپارتمان خوش آمدید! نقشه و تقسیمات اطاق‌ها چطور به نظرتان آمد؟',
          tr: 'Ev sahibi: Daire gezisine hoş geldiniz! Odaların yerleşimini nasıl buldunuz?',
          ar: 'المالك: مرحباً بكم في معاينة الشقة! كيف تجدون تقسيم الغرف؟',
          es: 'Propietario: ¡Bienvenido a la visita de la vivienda! ¿Qué le parece la distribución?'
        },
        {
          en: 'Tenant: The apartment is wonderfully bright and the south-facing balcony is fantastic.',
          fa: 'مستاجر: خانه فوق‌العاده نورگیر است و بالکن رو به جنوب آن بی‌نظیر است.',
          prs: 'کرایه‌نشین: خانه بسیار روشن و آفتاب‌رخ است و بالکن جنوبی آن فوق‌العاده است.',
          tr: 'Kiracı adayı: Daire harika aydınlık ve güneye bakan balkon mükemmel.',
          ar: 'المستأجر: الشقة مشمسة ورائعة وشرفة الواجهة الجنوبية ممتازة.',
          es: 'Interesado: El piso es muy luminoso y el balcón orientado al sur es fantástico.'
        },
        {
          en: 'Landlord: In the cold rent of 850 Euros, heating is not included. Warm rent is 1050 Euros.',
          fa: 'صاحبخانه: در اجاره پایه ۸۵۰ یورویی، هزینه گرمایش شامل نیست. اجاره کل با شارژ ۱۰۵۰ یورو است.',
          prs: 'صاحب‌خانه: در کرایه خالص ۸۵۰ یورو مصارف گرمایش شامل نیست. کرایه مجموعی ۱۰۵۰ یورو می‌شود.',
          tr: 'Ev sahibi: 850 Euroluk net kiraya ısınma dahil değildir. Toplam kira 1050 Eurodur.',
          ar: 'المالك: الإيجار الصافي 850 يورو ولا يشمل التدفئة. الإيجار الإجمالي 1050 يورو.',
          es: 'Propietario: El alquiler base de 850 euros no incluye calefacción. El alquiler total asciende a 1050 euros.'
        },
        {
          en: 'Tenant: That fits my budget very well. How much is the security deposit?',
          fa: 'مستاجر: این مبلغ کاملاً با بودجه من همخوانی دارد. مبلغ ودیعه چقدر است؟',
          prs: 'کرایه‌نشین: این قیمت کاملاً با بودجه‌ام برابر است. پول ضمانت (کاوتیون) چقدر است؟',
          tr: 'Kiracı adayı: Bu bütçeme oldukça uygun. Depozito miktarı ne kadar?',
          ar: 'المستأجر: هذا يناسب ميزانيتي تماماً. كم تبلغ قيمة التأمين؟',
          es: 'Interesado: Se ajusta muy bien a mi presupuesto. ¿A cuánto asciende la fianza?'
        },
        {
          en: 'Landlord: Exactly three months net rent, so 2550 Euros, kept in an escrow deposit account.',
          fa: 'صاحبخانه: دقیقاً سه ماه اجاره خالص، یعنی ۲۵۵۰ یورو که در یک حساب امانی ودیعه نگهداری می‌شود.',
          prs: 'صاحب‌خانه: دقیقاً معادل سه ماهه کرایه پایه یعنی ۲۵۵۰ یورو که در حساب بانکی امانی نگهداری می‌گردد.',
          tr: 'Ev sahibi: Tam üç aylık net kira bedeli, yani bloke hesapta tutulacak 2550 Euro.',
          ar: 'المالك: ثلاثة أشهر من الإيجار الصافي تحديداً، أي 2550 يورو توضع في حساب تأمين مجمد.',
          es: 'Propietario: Exactamente tres meses de alquiler neto, es decir 2550 euros, en cuenta bloqueada.'
        }
      ]
    },
    examTip: {
      standard: 'B1 (Goethe & telc Zertifikat B1)',
      module: 'Sprechen Teil 2 & 3',
      tip: {
        en: 'In the speaking test discussion, use "sowohl... als auch" and "nicht nur... sondern auch" when proposing ideas. Examiners reward candidates who naturally link multiple arguments using two-part connectors.',
        fa: 'در بخش مکالمه آزمون B1، هنگام ارائه نظر از حروف ربط دوتایی مانند "sowohl... als auch" استفاده کنید. ممتحنان به این تسلط زبانی امتیاز بالایی می‌دهند.',
        prs: 'در بخش صحبت دونفره امتحان B1، وقت پیشنهاد دادن پلان‌ها از کلمات ربط دوگانه (نه تنها... بلکه، هم... و هم) استفاده نمایید تا سطح بلند توانایی سخنوری‌تان ثابت گردد.',
        tr: 'B1 konuşma sınavında iki parçalı bağlaçları kullanmak puanınızı belirgin şekilde artırır.',
        ar: 'في الجزء الشفوي من اختبار B1 استخدم الروابط المزدوجة لربط حججك بطلاقة وإقناع.',
        es: 'En el examen oral de B1, el uso de conectores dobles demuestra un dominio superior del idioma.'
      }
    }
  },
  {
    id: 'b1_2_lek11',
    lektionNumber: 11,
    level: 'B1.2',
    title: 'Konsum, Reklamation und Verbraucherschutz',
    subTitle: 'Kaufverträge, Garantie, Umtausch und indirekte Fragesätze (Deutsch Mussawi B1.2 Lektion 11)',
    topic: 'Waren reklamieren, Kassenbon, Gewährleistung und indirekte Fragen mit "ob" / W-Wörtern',
    fotoHoergeschichte: {
      title: 'Foto-Hörgeschichte: Reklamation im Elektronikfachmarkt in Nürnberg',
      imagePrompt: 'A customer service desk in a large German electronics retailer with a customer presenting a defective tablet and purchase receipt.',
      imageTheme: 'Elektronikmarkt Nürnberg',
      audioDuration: '02:50',
      transcript: [
        { speaker: 'Kunde Herr Wagner', text: 'Guten Tag, ich möchte dieses Tablet reklamieren. Das Display flackert seit zwei Tagen.' },
        { speaker: 'Service-Mitarbeiterin', text: 'Guten Tag. Haben Sie den Original-Kaufbeleg dabei?' },
        { speaker: 'Herr Wagner', text: 'Ja, hier ist die Rechnung. Können Sie mir sagen, ob das Gerät sofort umgetauscht werden kann?' },
        { speaker: 'Service-Mitarbeiterin', text: 'Ich prüfe zunächst, ob ein Garantiefall vorliegt. Wenn eine Reparatur nicht möglich ist, erhalten Sie ein Neugerät.' },
        { speaker: 'Herr Wagner', text: 'Wissen Sie zufällig, wie lange die Überprüfung dauern wird?' }
      ],
      summary: {
        en: 'Mr. Wagner files a warranty claim for a malfunctioning tablet at an electronics retailer in Nuremberg.',
        fa: 'آقای واگنر یک تبلت معیوب را به بخش خدمات پس از فروش برده و درباره شرایط گارانتی و تعویض سوال می‌پرسد.',
        prs: 'آقای واگنر تبلت خراب‌شده را به نمایندگی برده و در مورد شرایط گارانتی و تعویض جویا می‌شود.',
        tr: 'Bay Wagner Nuremberg\'deki elektronik mağazasında arızalı tableti için garanti kapsamında değişim talep eder.',
        ar: 'يقدم السيد فاغنر مطالبة بالضمان لجهاز لوحي معطل في متجر إلكترونيات في نورنبرغ.',
        es: 'El señor Wagner reclama la garantía de una tableta defectuosa en una tienda de electrónica en Núremberg.'
      }
    },
    sectionA: {
      title: 'Mussawi A: Sprechen & Dialog',
      focus: 'Hören & Sprechen (Reklamieren & Höfliche Nachfragen)',
      description: {
        en: 'Formulate polite indirect questions ("Können Sie mir sagen, ob... / wann...") and assert consumer rights.',
        fa: 'ساخت سوالات غیرمستقیم مؤدبانه و پیگیری حقوق مصرف‌کننده در هنگام خرید کالا.',
        prs: 'پرسیدن سوالات غیرمستقیم و مودبانه در هنگام تقاضای تبدیل جنس معیوب.',
        tr: 'Kibar dolaylı sorular sorma ve tüketici haklarını savunma.',
        ar: 'صياغة الأسئلة غير المباشرة بلباقة والمطالبة بحقوق المستهلك القانونية.',
        es: 'Formulación de preguntas indirectas de cortesía y defensa de los derechos del consumidor.'
      },
      grammarRule: {
        id: 'b1_2_lek11_ind',
        level: 'B1.2',
        germanTitle: 'Indirekte Fragesätze mit "ob" und W-Wörtern',
        formula: 'Können Sie mir sagen, ob + Subjekt + ... + Verb am Ende? | Wissen Sie, wie viel/wo/wann + Verb am Ende?',
        explanation: {
          en: 'Indirect questions sound significantly more polite than direct questions. The conjugated verb moves to the end of the clause.',
          fa: 'جملات پرسشی غیرمستقیم بسیار مؤدبانه‌تر از سوال مستقیم هستند. فعل صرف‌شده همواره به انتهای جمله می‌رود.',
          prs: 'سوالات غیرمستقیم لحن بسیار باادب ایجاد می‌کنند و فعل در آخر جمله قرار می‌گیرد.',
          tr: 'Dolaylı sorular doğrudan sorulardan çok daha kibardır. Çekimli fiil cümlenin en sonuna gider.',
          ar: 'تعد الأسئلة غير المباشرة أكثر تهذيباً من الأسئلة المباشرة، ويأتي الفعل المصرف في نهاية الجملة دائماً.',
          es: 'Las preguntas indirectas son mucho más corteses y el verbo conjugado se coloca al final.'
        }
      }
    },
    sectionB: {
      title: 'Mussawi B: Wortschatz & Hören',
      focus: 'Lesen (Garantiebestimmungen und AGB)',
      description: {
        en: 'Understand warranty terms, statutory rights, returns deadlines, and refund conditions.',
        fa: 'مطالعه شرایط گارانتی قانونی ۲ ساله آلمان، حق انصراف ۱۴ روزه در خرید آنلاین و نحوه استرداد وجه.',
        prs: 'آگاهی از شرایط بازپس‌گیری جنس تا ۱۴ روز و ضمانت دو ساله در آلمان.',
        tr: 'Yasal garanti süresi, 14 günlük cayma hakkı ve iade şartlarını inceleme.',
        ar: 'فهم شروط الضمان القانوني وحق التراجع خلال 14 يوماً واسترداد المبالغ.',
        es: 'Comprensión de plazos de garantía legal, derecho de desistimiento de 14 días y devoluciones.'
      }
    },
    sectionC: {
      title: 'Mussawi C: Alltagskommunikation',
      focus: 'Schreiben (Eine formelle Reklamations-E-Mail)',
      description: {
        en: 'Draft a written complaint letter demanding repair, replacement, or price reduction.',
        fa: 'نگارش نامه رسمی شکایت به شرکت فروشنده با درخواست تعمیر، تعویض یا کاهش قیمت.',
        prs: 'نوشتن مکتوب رسمی شکایت با درخواست ترمیم یا بازگرداندن پول.',
        tr: 'Tamir, değişim veya ücret iadesi talep eden resmi şikayet mektubu yazma.',
        ar: 'كتابة رسالة شكوى رسمية للمطالبة بالإصلاح أو الاستبدال أو تخفيض السعر.',
        es: 'Redacción de una carta de reclamación formal exigiendo reparación o reembolso.'
      }
    },
    sectionD: {
      title: 'Mussawi D: Leseverstehen & Text',
      focus: 'Aussprache & Redemittel (Satzmelodie bei indirekten Fragen)',
      description: {
        en: 'Intonation curves in indirect questions and business negotiation formulas.',
        fa: 'آهنگ افتان و خیزان در جملات پرسشی غیرمستقیم و اصطلاحات کلیدی مذاکره تجاری.',
        prs: 'لحن صدا در سوالات غیرمستقیم و جملات پرکاربرد خرید و فروش.',
        tr: 'Dolaylı sorularda cümle melodisi ve müzakere kalıpları.',
        ar: 'نبرة الصوت في الأسئلة غير المباشرة وتعبيرات التفاوض التجاري.',
        es: 'Curvas de entonación en preguntas indirectas y fórmulas de negociación comercial.'
      }
    },
    sectionE: {
      title: 'Mussawi E: Grammatik & Schreiben',
      focus: 'Verbraucherschutz & Nachhaltigkeit (Reparieren statt Wegwerfen)',
      description: {
        en: 'Repair cafés, right to repair legislation, and conscious consumer habits in Germany.',
        fa: 'کافه‌های تعمیرات، حق قانونی تعمیر کالا و فرهنگ مصرف پایدار در آلمان.',
        prs: 'فرهنگ ترمیم وسایل به جای دور انداختن و حفاظت از محیط زیست در آلمان.',
        tr: 'Onarım kafeleri, tamir hakkı ve sürdürülebilir tüketim alışkanlıkları.',
        ar: 'مقاهي الإصلاح وحق المستهلك في إصلاح الأجهزة وعادات الاستهلاك المستدام.',
        es: 'Cafés de reparación, derecho a reparar y hábitos de consumo sostenible.'
      }
    },
    vocabularies: [
      { id: 'b1_2_v11_1', word: 'die Reklamation', article: 'die', plural: 'die Reklamationen', ipa: '/ʁeklaˈmaˈtsi̯oːn/', translation: { en: 'complaint / claim', fa: 'شکایت از کالای معیوب / تقاضای خسارت', prs: 'شکایت از جنس معیوب', tr: 'şikayet / itiraz', ar: 'الشكوى / المطالبة بالتعويض', es: 'reclamación de compra' } },
      { id: 'b1_2_v11_2', word: 'der Kassenbon', article: 'der', plural: 'die Kassenbons', ipa: '/ˈkasn̩ˌbɔŋ/', translation: { en: 'receipt / sales slip', fa: 'فاکتور خرید / فیش صندوق', prs: 'بل و رسید پرداخت پول', tr: 'fiş / kasa makbuzu', ar: 'إيصال الدفع / الفاتورة', es: 'tique de compra / recibo' } },
      { id: 'b1_2_v11_3', word: 'die Gewährleistung', article: 'die', plural: 'die Gewährleistungen', ipa: '/ɡəˈveːɐ̯ˌlaɪ̯stʊŋ/', translation: { en: 'statutory warranty', fa: 'ضمانت قانونی ۲ ساله فروشنده', prs: 'ضمانت قانونی فروشگاه', tr: 'yasal garanti', ar: 'الضمان القانوني للبائع', es: 'garantía legal obligatoria' } },
      { id: 'b1_2_v11_4', word: 'der Umtausch', article: 'der', plural: 'die Umtausche', ipa: '/ˈʊmˌtaʊ̯ʃ/', translation: { en: 'exchange of goods', fa: 'تعویض کالا', prs: 'تبدیل جنس با جنس دیگر', tr: 'ürün değişimi', ar: 'استبدال السلعة', es: 'cambio de producto' } },
      { id: 'b1_2_v11_5', word: 'die Rückerstattung', article: 'die', plural: 'die Rückerstattungen', ipa: '/ˈʁʏkʔɛɐ̯ˌʃtatʊŋ/', translation: { en: 'refund / reimbursement', fa: 'بازپرداخت پول به خریدار', prs: 'پس دادن پول مشتری', tr: 'ücret iadesi', ar: 'استرداد المبلغ المالي', es: 'reembolso del importe' } }
    ],
    videoClip: {
      title: 'Der Umtausch im Geschäft: Rechte und Pflichten',
      scenario: 'Ein Beratungsgespräch über Umtauschrechte bei reduzierter Ware.',
      germanTranscript: [
        'Kunde: Gilt das Umtauschrecht auch für reduzierte Artikel aus dem Sale?',
        'Verkäufer: Gesetzlich besteht im Laden kein generelles Rückgaberecht bei Nichtgefallen, aber wir bieten aus Kulanz 14 Tage Gutschein-Umtausch an.',
        'Kunde: Und wenn die Ware fehlerhaft ist?',
        'Verkäufer: Bei Sachmängeln greift immer die gesetzliche Gewährleistung von zwei Jahren!'
      ],
      translatedTranscript: [
        { en: 'Customer: Does the right of exchange also apply to discounted sale items?', fa: 'مشتری: آیا حق تعویض برای اجناس حراجی و تخفیف‌خورده هم معتبر است؟', prs: 'مشتری: آیا جنس‌های حراجی هم تبدیل می‌شوند؟', tr: 'Müşteri: İndirimli ürünler için de değişim hakkı geçerli mi?', ar: 'الزبون: هل يسري حق الاستبدال على البضائع المخفضة أيضاً؟', es: 'Cliente: ¿Se aplica el derecho de cambio también a los artículos rebajados?' }
      ]
    },
    examTip: {
      standard: 'B1 (Goethe / telc)',
      module: 'Sprechen & Schreiben',
      tip: {
        en: 'Polite indirect questions ("Dürfte ich fragen, wie..." / "Könnten Sie mir mitteilen, ob...") are essential for achieving the highest B1 register marks.',
        fa: 'استفاده از سوالات غیرمستقیم مؤدبانه در امتحان شفاهی و کتبی B1، تسلط شما به لحن رسمی را نشان می‌دهد.',
        prs: 'استفاده از جملات مودبانه با ob و سوالات غیرمستقیم نشانه عالی سواد نگارش رسمی است.',
        tr: 'Dolaylı sorular sınavda kibarlık düzeyinizi kanıtlar ve yüksek puan getirir.',
        ar: 'الأسئلة غير المباشرة تثبت تمكنك من السجل اللغوي المهذب في اختباري التحدث والكتابة.',
        es: 'Las preguntas indirectas demuestran elegancia estilística indispensable en el nivel B1.'
      }
    },
    exercises: [
      {
        id: 'ex_b1_2_lek11_1',
        type: 'fill_blank',
        instruction: {
          en: 'Form the indirect question using "ob".',
          fa: 'با استفاده از "ob" جمله پرسشی غیرمستقیم بسازید.',
          prs: 'جمله پرسشی غیرمستقیم را با ob تکمیل کنید.',
          tr: '"ob" bağlacı ile dolaylı soruyu tamamlayınız.',
          ar: 'كوّن السؤال غير المباشر باستخدام "ob".',
          es: 'Forma la pregunta indirecta con "ob".'
        },
        prompt: 'Können Sie mir sagen, _____ die Reparatur kostenlos ist?',
        options: ['ob', 'dass', 'weil', 'wann'],
        correctAnswer: 'ob',
        explanation: {
          en: 'Yes/No questions transform into indirect questions using the conjunction "ob" (whether/if).',
          fa: 'سوالات بلی/خیر در حالت غیرمستقیم با حرف ربط "ob" (آیا اینکه) آغاز می‌شوند.',
          prs: 'سوالاتی که جواب بلی یا نخیر دارند به صورت غیرمستقیم با ob شروع می‌شوند.',
          tr: 'Evet/Hayır soruları dolaylı soruya çevrilirken "ob" bağlacı kullanılır.',
          ar: 'تتحول أسئلة نعم/لا إلى أسئلة غير مباشرة باستخدام رابط الشك والتحقق "ob".',
          es: 'Las preguntas de sí/no se transforman en indirectas mediante la conjunción "ob".'
        }
      }
    ]
  },
  {
    id: 'b1_2_lek12',
    lektionNumber: 12,
    level: 'B1.2',
    title: 'Behörden, Ämter und Rechtspflege',
    subTitle: 'Aufenthaltstitel, Bürgeramt und Finalsätze mit "damit" und "um... zu" (Deutsch Mussawi B1.2 Lektion 12)',
    topic: 'Termin bei der Ausländerbehörde, Einbürgerung, Formulare und Absichten ausdrücken',
    fotoHoergeschichte: {
      title: 'Foto-Hörgeschichte: Bei der Ausländerbehörde in Düsseldorf',
      imagePrompt: 'An official interview office in a German city administration where a case worker reviews passport stamps and documents with a polite applicant.',
      imageTheme: 'Ausländerbehörde Düsseldorf',
      audioDuration: '03:05',
      transcript: [
        { speaker: 'Sachbearbeiter Herr Meyer', text: 'Guten Tag, Frau Rahimi. Sie haben einen Antrag auf Verlängerung Ihrer Aufenthaltserlaubnis gestellt.' },
        { speaker: 'Frau Rahimi', text: 'Guten Tag. Ich bin heute hier, um alle erforderlichen Nachweise vorzulegen.' },
        { speaker: 'Herr Meyer', text: 'Sehr gut. Wir benötigen die Gehaltsabrechnungen der letzten drei Monate, damit wir die Sicherung des Lebensunterhalts prüfen können.' },
        { speaker: 'Frau Rahimi', text: 'Hier sind die Gehaltsabrechnungen und die Bestätigung meiner Krankenversicherung.' },
        { speaker: 'Herr Meyer', text: 'Alles ist vollständig. Sie erhalten Ihren elektronischen Aufenthaltstitel in etwa vier Wochen per Post.' }
      ],
      summary: {
        en: 'Mrs. Rahimi attends an appointment at the immigration office in Düsseldorf to renew her residence permit.',
        fa: 'خانم رحیمی به اداره اتباع خارجی (Ausländerbehörde) در دوسلدورف مراجعه کرده و مدارک تمدید اقامت خود را ارائه می‌دهد.',
        prs: 'خانم رحیمی در شعبه امور اقامت در دوسلدورف اسناد معاش و بیمه را برای تمدید ویزه تحویل می‌دهد.',
        tr: 'Bayan Rahimi Düsseldorf Göçmen Dairesi\'nde oturum iznini uzatmak için belgelerini teslim eder.',
        ar: 'تحضر السيدة رحيمي موعداً في دائرة الهجرة في دوسلدورف لتجديد تصريح الإقامة.',
        es: 'La señora Rahimi acude a la oficina de extranjería en Düsseldorf para renovar su permiso de residencia.'
      }
    },
    sectionA: {
      title: 'Mussawi A: Sprechen & Dialog',
      focus: 'Hören & Sprechen (Behördengänge & Zweckangaben)',
      description: {
        en: 'Express goals and purposes using "damit" (different subjects) and "um... zu + Infinitiv" (identical subjects).',
        fa: 'بیان هدف و مقصود با "damit" (فاعل‌های متفاوت) و "um... zu" (فاعل یکسان).',
        prs: 'بیان مقصود با damit برای دو فاعل جداگانه و با um... zu برای یک فاعل مشترک.',
        tr: 'Amaç bildiren "damit" ve "um... zu" cümlelerini doğru öznelerle kurma.',
        ar: 'التعبير عن الغاية والأهداف باستخدام "damit" عند اختلاف الفاعل و "um... zu" عند اتحاد الفاعل.',
        es: 'Expresión de finalidad con "damit" (sujetos distintos) y "um... zu" (mismo sujeto).'
      },
      grammarRule: {
        id: 'b1_2_lek12_fin',
        level: 'B1.2',
        germanTitle: 'Finalsätze: "damit" vs. "um ... zu"',
        formula: 'Subjekt 1 macht X, damit Subjekt 2 Y tun kann. | Subjekt 1 macht X, um Y zu tun (nur bei identischem Subjekt!).',
        explanation: {
          en: '"um... zu" is used ONLY when the subject of the main and subclause are identical. If the subjects are different, "damit" is strictly mandatory.',
          fa: 'ترکیب "um... zu" فقط زمانی مجاز است که فاعل جمله پایه و پیرو یکی باشد. در صورت تفاوت فاعل‌ها، استفاده از "damit" اجباری است.',
          prs: 'فارمول um... zu تنها زمانی درست است که فاعل هر دو جمله یکی باشد. اگر فاعل‌ها فرق داشتند باید damit بنویسید.',
          tr: '"um... zu" sadece özneler aynı olduğunda kullanılır. Özneler farklıysa "damit" zorunludur.',
          ar: 'تستخدم "um... zu" فقط عندما يكون الفاعل واحداً في الجملتين، أما إذا اختلف الفاعل فيتعين استخدام "damit".',
          es: '"um... zu" solo se usa con el mismo sujeto; si los sujetos difieren, es obligatorio "damit".'
        }
      }
    },
    sectionB: {
      title: 'Mussawi B: Wortschatz & Hören',
      focus: 'Lesen (Behördenbriefe, Bescheide und Rechtsbehelfsbelehrung)',
      description: {
        en: 'Read official administrative decisions, calculate appeal deadlines (Widerspruchsfrist: 1 Monat), and understand legal instructions.',
        fa: 'خواندن ابلاغیه‌ها و نامه‌های رسمی ادارات آلمان، مهلت ۱ ماهه ثبت اعتراض (Widerspruch) و راهنمای حقوقی.',
        prs: 'فهم مکتوب‌های رسمی دولت، مهلت یک‌ماهه اعتراض قانونی و طرز پیشبرد کار.',
        tr: 'Resmi tebligatları, 1 aylık itiraz süresini (Widerspruch) ve yasal yolları anlama.',
        ar: 'قراءة القرارات الإدارية الرسمية وحساب مهلة الاعتراض القانوني البالغة شهراً واحداً.',
        es: 'Lectura de notificaciones administrativas oficiales y plazos de recurso de reposición (1 mes).'
      }
    },
    sectionC: {
      title: 'Mussawi C: Alltagskommunikation',
      focus: 'Schreiben (Einen förmlichen Widerspruch verfassen)',
      description: {
        en: 'Draft a formal letter of objection against an administrative decision with factual justification.',
        fa: 'نگارش نامه رسمی اعتراض (Widerspruchsschreiben) به تصمیم اداری به همراه ذکر دلایل مستند.',
        prs: 'نوشتن عریضه رسمی اعتراض علیه فیصله اداری همراه با اسناد و دلایل.',
        tr: 'Gerekçeleriyle birlikte resmi idari itiraz dilekçesi hazırlama.',
        ar: 'صياغة خطاب اعتراض رسمي ضد قرار إداري مع تقديم المبررات والأدلة الواقعية.',
        es: 'Redacción de un escrito formal de recurso de alzada/oposición con fundamentación.'
      }
    },
    sectionD: {
      title: 'Mussawi D: Leseverstehen & Text',
      focus: 'Aussprache & Wortschatz (Verwaltungsdeutsch und Komposita)',
      description: {
        en: 'Master long compound nouns (Aufenthaltserlaubnis, Meldebestätigung) and clear syllable articulation.',
        fa: 'تسلط بر تلفظ کلمات مرکب و طولانی زبان اداری آلمان (Verwaltungsdeutsch).',
        prs: 'تلفظ روان کلمات طولانی اداری آلمانی با تقسیم اصولی هجاها.',
        tr: 'Uzun resmi idari kelimelerin (Aufenthaltserlaubnis) doğru telaffuzu.',
        ar: 'النطق الدقيق للمصطلحات الإدارية المركبة والطويلة في اللغة الألمانية.',
        es: 'Articulación silábica precisa de sustantivos compuestos del lenguaje burocrático.'
      }
    },
    sectionE: {
      title: 'Mussawi E: Grammatik & Schreiben',
      focus: 'Recht & Gesellschaft (Einbürgerungstest und Grundgesetz)',
      description: {
        en: 'Requirements for naturalization, constitutional values, democratic principles, and civic rights in Germany.',
        fa: 'شرایط اخذ تابعیت آلمان (Einbürgerung)، قانون اساسی (Grundgesetz)، حقوق شهروندی و ارزش‌های دموکراتیک.',
        prs: 'شرایط پاسپورت و شهروندی آلمان، آزمون تابعیت و ارزش‌های قانون اساسی.',
        tr: 'Vatandaşlık şartları, Anayasa (Grundgesetz) ve demokratik temel değerler.',
        ar: 'شروط التجنس، الدستور الألماني (Grundgesetz)، والقيم الديمقراطية والحقوق المدنية.',
        es: 'Requisitos de nacionalización, la Ley Fundamental (Grundgesetz) y valores cívicos.'
      }
    },
    vocabularies: [
      { id: 'b1_2_v12_1', word: 'der Aufenthaltstitel', article: 'der', plural: 'die Aufenthaltstitel', ipa: '/ˈaʊ̯fʔɛnthalt͡sˌtiːtl̩/', translation: { en: 'residence permit', fa: 'مجوز رسمی اقامت در آلمان', prs: 'اجازه‌نامه رسمی اقامت', tr: 'oturum izni', ar: 'تصريح الإقامة الرسمي', es: 'permiso de residencia' } },
      { id: 'b1_2_v12_2', word: 'der Bescheid', article: 'der', plural: 'die Bescheide', ipa: '/bəˈʃaɪ̯t/', translation: { en: 'official notification / decision', fa: 'حکم اداری / برگه تصمیم رسمی اداره', prs: 'فیصله و جواب رسمی مکتوب', tr: 'resmi karar tebligatı', ar: 'الإشعار أو القرار الرسمي', es: 'resolución administrativa' } },
      { id: 'b1_2_v12_3', word: 'der Widerspruch', article: 'der', plural: 'die Widersprüche', ipa: '/ˈviːdɐˌʃpʁʊx/', translation: { en: 'formal objection / appeal', fa: 'اعتراض کتبی رسمی به تصمیم اداره', prs: 'اعتراض رسمی مکتوب علیه فیصله', tr: 'resmi itiraz', ar: 'الاعتراض القانوني / الاستئناف', es: 'recurso de reposición / objeción' } },
      { id: 'b1_2_v12_4', word: 'die Einbürgerung', article: 'die', plural: 'die Einbürgerungen', ipa: '/ˈaɪ̯nˌbʏʁɡəʁʊŋ/', translation: { en: 'naturalization / citizenship', fa: 'دریافت تابعیت و شهروندی آلمان', prs: 'گرفتن تابعیت و پاسپورت آلمان', tr: 'vatandaşlığa geçiş', ar: 'التجنس / اكتساب المواطنة', es: 'nacionalización / naturalización' } },
      { id: 'b1_2_v12_5', word: 'die Frist', article: 'die', plural: 'die Fristen', ipa: '/fʁɪst/', translation: { en: 'deadline / period of time', fa: 'مهلت زمانی تعیین‌شده قانونی', prs: 'میعاد و ضرب‌الاجل قانونی', tr: 'yasal süre / mühlet', ar: 'المهلة الزمنية المحددة', es: 'plazo legal fijado' } }
    ],
    videoClip: {
      title: 'Der Einbürgerungstest: Vorbereitung und Ablauf',
      scenario: 'Ein Prüfer erklärt den Aufbau des bundesweiten Einbürgerungstests.',
      germanTranscript: [
        'Prüfer: Der Einbürgerungstest umfasst 33 Fragen zu Geschichte, Politik und Gesellschaft in Deutschland.',
        'Kandidat: Wie viele Fragen muss man mindestens richtig beantworten?',
        'Prüfer: Sie müssen mindestens 17 von 33 Fragen richtig ankreuzen, um das Zertifikat zu erhalten.',
        'Kandidat: Das motiviert mich, fleißig zu lernen!'
      ],
      translatedTranscript: [
        { en: 'Examiner: The naturalization test includes 33 questions on history, politics, and society in Germany.', fa: 'آزمون‌گیرنده: آزمون تابعیت شامل ۳۳ سوال درباره تاریخ، سیاست و جامعه آلمان است.', prs: 'ممتحن: امتحان تابعیت ۳۳ سوال درباره تاریخ، سیاست و جامعه آلمان دارد.', tr: 'Sınav görevlisi: Vatandaşlık testi Almanya\'nın tarihi, siyaseti ve toplumu hakkında 33 soru içerir.', ar: 'الممتحن: يتضمن اختبار التجنس 33 سؤالاً حول التاريخ والسياسة والمجتمع في ألمانيا.', es: 'Examinador: El test de nacionalización comprende 33 preguntas sobre historia, política y sociedad.' }
      ]
    },
    examTip: {
      standard: 'B1 (Goethe & telc Zertifikat B1)',
      module: 'Grammatik & Schreiben',
      tip: {
        en: 'Careful with subjects: "Ich gehe zum Amt, DAMIT der Beamte meine Akte prüft" (two different subjects: Ich / der Beamte). Never use "um... zu" here!',
        fa: 'اشتباه رایج: وقتی فاعل دو جمله متفاوت است حتماً باید از "damit" استفاده کنید. "um... zu" فقط برای فاعل یکسان کاربرد دارد.',
        prs: 'نکته بسیار مهم: اگر فاعل هر دو جمله فرق داشت فقط damit درست است و کاربرد um... zu غلط است.',
        tr: 'Özneler farklı olduğunda (Ich / der Beamte) ASLA "um... zu" kullanılmaz, sadece "damit" doğrudur.',
        ar: 'انتبه لاتحاد أو اختلاف الفاعل: استخدم "damit" حصراً عند اختلاف فاعلي الجملتين.',
        es: 'Atención a los sujetos: si son diferentes, es obligatorio usar "damit", nunca "um... zu".'
      }
    },
    exercises: [
      {
        id: 'ex_b1_2_lek12_1',
        type: 'fill_blank',
        instruction: {
          en: 'Choose between "damit" and "um".',
          fa: 'بین "damit" و "um" گزینه صحیح را انتخاب کنید.',
          prs: 'بین damit و um گزینه درست را انتخاب کنید.',
          tr: '"damit" veya "um" arasından doğru olanı seçiniz.',
          ar: 'اختر بين "damit" و "um".',
          es: 'Elige entre "damit" y "um".'
        },
        prompt: 'Ich lerne jeden Abend Deutsch, _____ die B1-Prüfung erfolgreich zu bestehen.',
        options: ['um', 'damit', 'weil', 'dass'],
        correctAnswer: 'um',
        explanation: {
          en: 'Both clauses share the identical subject "Ich", and the subclause ends with "zu bestehen", so the correct conjunction is "um" (um ... zu bestehen).',
          fa: 'فاعل هر دو بخش "Ich" (یکسان) است و جمله با "zu bestehen" تمام شده؛ بنابراین تنها "um" صحیح است.',
          prs: 'چون فاعل هر دو جمله من (Ich) است و در آخر جمله zu bestehen آمده، کلمه um درست است.',
          tr: 'Her iki cümlenin öznesi aynı ("Ich") olduğu ve "zu bestehen" ile bittiği için "um" kullanılır.',
          ar: 'الفاعل متطابق في الجملتين والتركيب ينتهي بـ "zu bestehen"، لذا فالصيغة الصحيحة هي "um".',
          es: 'El sujeto es idéntico ("Ich") y rige infinitivo ("zu bestehen"), por lo que se requiere "um".'
        }
      }
    ]
  },
  {
    id: 'b1_2_lek13',
    lektionNumber: 13,
    level: 'B1.2',
    title: 'Medien, Digitalisierung und gesellschaftlicher Dialog',
    subTitle: 'Nachrichten, soziale Netzwerke und der Genitiv (Deutsch Mussawi B1.2 Lektion 13)',
    topic: 'Medienkonsum, Datenschutz, Fake News und Genitivattribute (des/der)',
    fotoHoergeschichte: {
      title: 'Foto-Hörgeschichte: Die Redaktionskonferenz bei einer Kölner Online-Zeitung',
      imagePrompt: 'A lively newsroom editorial meeting in Cologne with journalists discussing digital news verification on large displays.',
      imageTheme: 'Online-Redaktion Köln',
      audioDuration: '02:55',
      transcript: [
        { speaker: 'Chefredakteurin Frau Sommer', text: 'Guten Morgen, Team! Haben wir die Echtheit des Videos über den Streich der Nahverkehrsgewerkschaft geprüft?' },
        { speaker: 'Redakteur Jonas', text: 'Ja, dank der sorgfältigen Recherche unseres Faktencheck-Teams konnten wir die Falschmeldung entlarven.' },
        { speaker: 'Frau Sommer', text: 'Sehr gut. Der Schutz der Glaubwürdigkeit unserer Zeitung steht an erster Stelle.' },
        { speaker: 'Jonas', text: 'Die Reaktionen der Leser in den sozialen Medien zeigen, wie wichtig verlässliche Berichterstattung ist.' }
      ],
      summary: {
        en: 'Journalists in Cologne verify viral social media videos and emphasize the importance of fact-checking.',
        fa: 'روزنامه‌نگاران در کلن اخبار فضای مجازی را راستی‌آزمایی کرده و بر اهمیت صداقت رسانه‌ای تاکید می‌کنند.',
        prs: 'خبرنگاران در کلن صحت و سقم اخبار رسانه‌های اجتماعی را ارزیابی و بررسی می‌نمایند.',
        tr: 'Köln\'deki gazeteciler sosyal medyadaki sahte haberleri teyit eder ve doğru haberciliği savunur.',
        ar: 'يتحقق الصحفيون في كولونيا من مقاطع الفيديو المتداولة ويؤكدون على موثوقية التحقق الإخباري.',
        es: 'Periodistas en Colonia verifican noticias virales en redes sociales y destacan el rigor informativo.'
      }
    },
    sectionA: {
      title: 'Mussawi A: Sprechen & Dialog',
      focus: 'Hören & Sprechen (Mediennutzung & Digitale Trends)',
      description: {
        en: 'Discuss screen time, podcasts, news apps, and data privacy in modern society.',
        fa: 'بحث درباره مدت زمان استفاده از گوشی، پادکست‌ها، حفظ حریم خصوصی و اخبار دیجیتال.',
        prs: 'گفتگو در مورد اپلیکیشن‌های خبری، محرمیت معلومات و رسانه‌های دیجیتال.',
        tr: 'Ekran süresi, podcastler, veri gizliliği ve dijital haber tüketimi üzerine tartışma.',
        ar: 'مناقشة أوقات الشاشات والبودكاست وحماية البيانات الشخصية في الفضاء الرقمي.',
        es: 'Debate sobre tiempo de pantalla, podcasts, privacidad de datos y medios digitales.'
      },
      grammarRule: {
        id: 'b1_2_lek13_gen',
        level: 'B1.2',
        germanTitle: 'Der Genitiv als Attribut und mit Präpositionen',
        formula: 'Maskulin/Neutral: des Mannes / des Kindes (+s/-es) | Feminin/Plural: der Frau / der Kinder | Präpositionen: wegen, trotz, während, anstatt + Genitiv',
        explanation: {
          en: 'The Genitive expresses possession and relationship ("the car of my father" = das Auto meines Vaters). Common prepositions requiring genitive: wegen, trotz, während, statt.',
          fa: 'حالت ملکی اضافه (Genitiv) برای بیان تعلق و مضاف‌الیه به کار می‌رود. حروف اضافه مهم همراه گنیتف: wegen (به دلیل)، trotz (علیرغم)، während (در حین)، statt (به جای).',
          prs: 'حالت گنیتف برای نسبت دادن مالکیت و بعد از حروف اضافه wegen و während به کار می‌رود.',
          tr: 'Genitiv tamlama ve aidiyet bildirir. Önemli edatları: wegen, trotz, während, statt.',
          ar: 'تعبر حالة المجرور بالإضافة (Genitiv) عن الملكية وتستخدم مع حروف الجر: wegen, trotz, während.',
          es: 'El genitivo denota posesión o relación y rige preposiciones como wegen, trotz y während.'
        }
      }
    },
    sectionB: {
      title: 'Mussawi B: Wortschatz & Hören',
      focus: 'Lesen (Kommentar im Feuilleton & Medienskepsis)',
      description: {
        en: 'Read opinion pieces, differentiate facts from commentary, and analyze journalistic style.',
        fa: 'خواندن ستون یادداشت در روزنامه‌ها، تفکیک فکت از نظر و درک لحن مطبوعاتی.',
        prs: 'خواندن سرمقاله روزنامه و تشخیص دادن حقیقت از نظریات شخصی.',
        tr: 'Köşe yazılarını okuma, gerçeklerle yorumları ayırt etme ve basın dilini anlama.',
        ar: 'قراءة المقالات التحليلية والتمييز بين الحقائق والآراء والتعرف على الأسلوب الصحفي.',
        es: 'Lectura de artículos de opinión, distinción entre hechos y valoraciones y análisis crítico.'
      }
    },
    sectionC: {
      title: 'Mussawi C: Alltagskommunikation',
      focus: 'Schreiben (Einen Leserbrief oder Forumsbeitrag formulieren)',
      description: {
        en: 'Write a well-structured letter to the editor with reasoned arguments and counterarguments.',
        fa: 'نگارش نامه به سردبیر یا پست تحلیلی در انجمن‌های گفتگو با استدلال‌های موافق و مخالف.',
        prs: 'نوشتن نامه به مدیر مسوول جریده همراه با دلایل و شواهد منطقی.',
        tr: 'Mantıklı argümanlarla yapılandırılmış okur mektubu veya forum katkısı yazma.',
        ar: 'صياغة رسالة إلى رئيس التحرير أو مشاركة في منتدى مع تقديم الحجج والحجج المضادة.',
        es: 'Redacción de una carta al director o entrada de foro estructurada con argumentos sólidos.'
      }
    },
    sectionD: {
      title: 'Mussawi D: Leseverstehen & Text',
      focus: 'Aussprache (Betonung bei Fremdwörtern im Deutschen)',
      description: {
        en: 'Pronounce modern digital loanwords correctly (Algorithmus, Digitalisierung, Authentifizierung).',
        fa: 'تلفظ روان واژگان بین‌المللی و اصطلاحات دیجیتال در زبان آلمانی.',
        prs: 'تلفظ درست اصطلاحات جدید تکنالوژی و اینترنتی در زبان آلمانی.',
        tr: 'Dijital terimlerin ve yabancı kökenli kelimelerin doğru telaffuzu.',
        ar: 'النطق الصحيح للمصطلحات الرقمية والدولية المعربة في اللغة الألمانية.',
        es: 'Pronunciación correcta de préstamos lingüísticos y terminología tecnológica en alemán.'
      }
    },
    sectionE: {
      title: 'Mussawi E: Grammatik & Schreiben',
      focus: 'Gesellschaft & Medienkompetenz (Datenschutz-Grundverordnung DSGVO)',
      description: {
        en: 'Understand European GDPR data privacy rights, cookies, and digital footprint management.',
        fa: 'آشنایی با قانون حفاظت از داده‌های شخصی اروپا (DSGVO)، کوکی‌ها و ردپای دیجیتال.',
        prs: 'آگاهی از قانون مصونیت معلومات شخصی شهروندان در اروپا.',
        tr: 'Avrupa Genel Veri Koruma Tüzüğü (GDPR / DSGVO) ve dijital ayak izi yönetimi.',
        ar: 'فهم اللائحة العامة لحماية البيانات الأوروبية (GDPR) وإدارة الأثر الرقمي.',
        es: 'Comprensión del Reglamento General de Protección de Datos (RGPD/DSGVO) y privacidad.'
      }
    },
    vocabularies: [
      { id: 'b1_2_v13_1', word: 'die Berichterstattung', article: 'die', plural: 'die Berichterstattungen', ipa: '/bəˈʁɪçtʔɛɐ̯ˌʃtatʊŋ/', translation: { en: 'news coverage / reporting', fa: 'گزارش‌گری رسانه‌ای و پوشش خبری', prs: 'پوشش خبری و نشر گزارشات', tr: 'haber yapma / basın yayını', ar: 'التغطية الإخبارية / إعداد التقارير', es: 'cobertura informativa' } },
      { id: 'b1_2_v13_2', word: 'der Datenschutz', article: 'der', plural: 'die Datenschutze', ipa: '/ˈdaːtn̩ˌʃʊts/', translation: { en: 'data protection / privacy', fa: 'حفاظت از داده‌ها و اطلاعات شخصی', prs: 'حفظ محرمیت معلومات شخصی', tr: 'veri güvenliği ve gizliliği', ar: 'حماية البيانات والخصوصية', es: 'protección de datos personales' } },
      { id: 'b1_2_v13_3', word: 'die Quelle', article: 'die', plural: 'die Quellen', ipa: '/ˈkvɛlə/', translation: { en: 'source', fa: 'منبع موثق خبر', prs: 'سرچشمه و منبع معتبر خبر', tr: 'haber kaynağı', ar: 'مصدر الخبر', es: 'fuente informativa' } },
      { id: 'b1_2_v13_4', word: 'die Glaubwürdigkeit', article: 'die', plural: 'die Glaubwürdigkeiten', ipa: '/ˈɡlaʊ̯bvʏʁdɪçkaɪ̯t/', translation: { en: 'credibility / reliability', fa: 'اعتبار، باورپذیری و صداقت', prs: 'اعتبار و مورد اعتماد بودن', tr: 'güvenilirlik / inandırıcılık', ar: 'المصداقية والموثوقية', es: 'credibilidad / fiabilidad' } },
      { id: 'b1_2_v13_5', word: 'der Faktencheck', article: 'der', plural: 'die Faktenchecks', ipa: '/ˈfaktn̩ˌtʃɛk/', translation: { en: 'fact check', fa: 'راستی‌آزمایی فکت‌ها و اخبار', prs: 'بررسی واقعیت داشتن خبر', tr: 'doğruluk kontrolü', ar: 'التحقق من صحة الوقائع', es: 'verificación de hechos' } }
    ],
    videoClip: {
      title: 'Fakt oder Fake? Medienkompetenz im Netz',
      scenario: 'Ein Medienpädagoge demonstriert Kriterien für vertrauenswürdige Informationsquellen.',
      germanTranscript: [
        'Experte: Prüfen Sie immer das Impressum der Webseite, bevor Sie eine Nachricht teilen.',
        'Teilnehmerin: Woran erkennt man seriöse Quellen noch?',
        'Experte: Seriöse Medien nennen namentlich ihre Autoren und verlinken die Originalquellen der Statistiken.'
      ],
      translatedTranscript: [
        { en: 'Expert: Always check the website\'s legal imprint (Impressum) before sharing news.', fa: 'کارشناس: همیشه قبل از بازنشر اخبار، شناسنامه قانونی سایت (Impressum) را بررسی کنید.', prs: 'کارشناس: همیشه شناسنامه قانونی وبسایت را قبل از شریک ساختن خبر چک کنید.', tr: 'Uzman: Bir haberi paylaşmadan önce sitenin yasal künyesini mutlaka inceleyin.', ar: 'الخبير: تحقق دائماً من بيانات النشر القانونية للموقع قبل مشاركة أي خبر.', es: 'Experto: Compruebe siempre el aviso legal de la web antes de difundir una noticia.' }
      ]
    },
    examTip: {
      standard: 'B1 (Goethe & telc Zertifikat B1)',
      module: 'Schreiben Teil 2 (Diskussionsbeitrag)',
      tip: {
        en: 'Using prepositions with Genitive like "Trotz des schlechten Wetters..." or "Wegen der hohen Kosten..." demonstrates B1+ academic elegance in your written essays.',
        fa: 'کاربرد حروف اضافه با گنیتف مثل "Trotz..." یا "Wegen..." در انشای B1 نمره واژگان و ساختار گرامری شما را ارتقا می‌دهد.',
        prs: 'استفاده از حروف اضافه با گنیتف در مقاله نویسی B1 باعث ارتقای جدی نمره می‌گردد.',
        tr: 'Yazma sınavında "trotz" ve "wegen" edatlarını Genitiv ile kullanmak seviyenizi B1+ olarak kanıtlar.',
        ar: 'يبرز استخدام حروف الجر الملازمة للجر بالإضافة مثل "Trotz" و "Wegen" فصاحة لغوية عالية في مقال B1.',
        es: 'El uso de preposiciones de genitivo como "trotz" o "wegen" aporta elegancia formal a tu redacción.'
      }
    },
    exercises: [
      {
        id: 'ex_b1_2_lek13_1',
        type: 'multiple_choice',
        instruction: {
          en: 'Choose the correct genitive article.',
          fa: 'آرتیکل گنیتف صحیح را انتخاب نمایید.',
          prs: 'آرتیکل درست گنیتف را برگزینید.',
          tr: 'Doğru Genitiv artikelini seçiniz.',
          ar: 'اختر أداة Genitiv الصحيحة.',
          es: 'Elige el artículo de genitivo correcto.'
        },
        prompt: 'Wegen _____ starken Schneefalls (maskulin) wurde der Zugverkehr eingestellt.',
        options: ['des', 'dem', 'den', 'das'],
        correctAnswer: 'des',
        explanation: {
          en: '"wegen" takes the Genitive case. Masculine singular nouns take the article "des" and usually add "-s/-es" (des Schneefalls).',
          fa: 'حرف اضافه "wegen" به حالت ملکی (Genitiv) نیاز دارد؛ اسم مذکر مفرد آرتیکل "des" و پسوند "-s" می‌گیرد.',
          prs: 'حرف اضافه wegen حالت گنیتف می‌خواهد و اسم مذکر des می‌گیرد.',
          tr: '"wegen" edatı Genitiv gerektirir; eril tekil isimler "des" artikeli alır.',
          ar: 'حرف الجر "wegen" يجر الاسم بالإضافة (Genitiv)، وأداة المفرد المذكر هي "des".',
          es: '"wegen" rige caso genitivo; los sustantivos masculinos llevan el artículo "des".'
        }
      }
    ]
  },
  {
    id: 'b1_2_lek14',
    lektionNumber: 14,
    level: 'B1.2',
    title: 'Zukunft, Umwelt und globale Herausforderungen',
    subTitle: 'Klimawandel, Energiewende und das Futur I mit "werden" (Deutsch Mussawi B1.2 Lektion 14)',
    topic: 'Zukunftspläne, Prognosen, erneuerbare Energien und grammatisches Futur I (werden + Infinitiv)',
    fotoHoergeschichte: {
      title: 'Foto-Hörgeschichte: Der Bürgerdialog zur Energiewende in Freiburg',
      imagePrompt: 'A solar-powered green district in Freiburg im Breisgau with residents attending an urban sustainability forum.',
      imageTheme: 'Freiburg Vauban Öko-Viertel',
      audioDuration: '03:10',
      transcript: [
        { speaker: 'Bürgermeisterin', text: 'Liebe Freiburgerinnen und Freiburger, bis zum Jahr 2035 wird unsere Stadt vollständig klimaneutral sein.' },
        { speaker: 'Bürger David', text: 'Das ist ein ambitioniertes Ziel. Wie werden wir die Umstellung auf erneuerbare Wärme finanzieren?' },
        { speaker: 'Bürgermeisterin', text: 'Die Stadt wird großzügige Förderprogramme bereitstellen, damit jedes Gebäude energetisch saniert werden kann.' },
        { speaker: 'Bürger David', text: 'Ich werde auf meinem Dach eine Solaranlage installieren lassen. Das wird sich auf Dauer auszahlen.' }
      ],
      summary: {
        en: 'Residents in Freiburg discuss urban energy transition, solar incentives, and climate neutrality goals.',
        fa: 'شهروندان در فرایبورگ پیرامون گذار به انرژی‌های پاک، نصب پنل‌های خورشیدی و هدف کربن‌خنثی تا سال ۲۰۳۵ گفتگو می‌کنند.',
        prs: 'جلسه شهروندی در فرایبورگ برای بررسی پلان انرژی‌های تجدیدپذیر و حفاظت محیط زیست.',
        tr: 'Freiburg sakinleri 2035 iklim hedeflerini, güneş enerjisi teşviklerini ve yeşil dönüşümü tartışır.',
        ar: 'يناقش سكان فرايبورغ التحول إلى الطاقة المتجددة وحوافز الطاقة الشمسية والحياد المناخي.',
        es: 'Vecinos en Friburgo debaten sobre la transición energética, incentivos solares y neutralidad climática.'
      }
    },
    sectionA: {
      title: 'Mussawi A: Sprechen & Dialog',
      focus: 'Hören & Sprechen (Prognosen & Zukunftsabsichten)',
      description: {
        en: 'Make predictions, express firm intentions, and discuss global challenges using Futur I.',
        fa: 'پیش‌بینی آینده، بیان اهداف قاطعانه و گفتگو پیرامون چالش‌های اقلیمی با زمان آینده ۱ (Futur I).',
        prs: 'پیش‌گویی آینده و بیان اهداف آینده با زمان فیوچر ۱ (werden + مصدر).',
        tr: 'Gelecek tahminleri yapma ve Futur I (werden + mastar) ile niyet bildirme.',
        ar: 'تقديم التنبؤات والتعبير عن النوايا المستقبلية باستخدام زمن المستقبل الأول (Futur I).',
        es: 'Formulación de pronósticos y compromisos de futuro mediante el Futur I (werden + infinitivo).'
      },
      grammarRule: {
        id: 'b1_2_lek14_fut',
        level: 'B1.2',
        germanTitle: 'Das Futur I: Vermutungen und Pläne für die Zukunft',
        formula: 'Subjekt + konjugiertes "werden" (V2) + ... + Infinitiv am Satzende (V_Ende)',
        explanation: {
          en: 'Futur I is formed with the conjugated verb "werden" + main verb in infinitive at the end. It expresses future plans, promises, or probability.',
          fa: 'زمان آینده ساده (Futur I) با صرف فعل "werden" در جایگاه دوم و مصدر فعل اصلی در انتهای جمله ساخته می‌شود و برای برنامه‌های آینده یا حدس و گمان به کار می‌رود.',
          prs: 'زمان آینده با فعل werden و مصدر در آخر جمله ساخته می‌شود و اراده قطعی برای آینده را می‌رساند.',
          tr: 'Futur I: werden + cümlenin sonundaki mastar fiil. Gelecek planları ve tahminler için kullanılır.',
          ar: 'يتكون زمن المستقبل الأول من تصريف الفعل "werden" في الموقع 2 متبوعاً بالمصدر في نهاية الجملة.',
          es: 'El Futur I se forma con el verbo auxiliar "werden" conjugado y el infinitivo al final de la frase.'
        }
      }
    },
    sectionB: {
      title: 'Mussawi B: Wortschatz & Hören',
      focus: 'Lesen (Klimaschutzbericht und Zukunftsszenarien)',
      description: {
        en: 'Analyze graphs, demographic trends, renewable energy statistics, and environmental forecasts.',
        fa: 'تحلیل نمودارها، آمارهای انرژی‌های تجدیدپذیر، روندهای جمعیتی و پیش‌بینی‌های اقلیمی آلمان.',
        prs: 'تحلیل ارقام احصائیوی درباره انرژی پاک و تغییرات اقلیمی.',
        tr: 'Yenilenebilir enerji istatistiklerini, grafiklerini ve gelecek raporlarını anlama.',
        ar: 'تحليل الإحصاءات والرسوم البيانية الخاصة بالطاقة المتجددة والتوقعات المناخية.',
        es: 'Análisis de informes medioambientales, estadísticas energéticas y escenarios futuros.'
      }
    },
    sectionC: {
      title: 'Mussawi C: Alltagskommunikation',
      focus: 'Schreiben (Eine persönliche Stellungnahme zur Nachhaltigkeit)',
      description: {
        en: 'Write a comprehensive essay outlining personal lifestyle changes to reduce carbon footprint.',
        fa: 'نگارش مقاله تشریحی درباره راهکارهای فردی برای کاهش ردپای کربن و زندگی سازگار با محیط زیست.',
        prs: 'نوشتن مقاله دیدگاه شخصی برای حفاظت از محیط زیست و صرفه‌جویی در انرژی.',
        tr: 'Karbon ayak izini azaltmaya yönelik bireysel katkıları anlatan kapsamlı deneme yazma.',
        ar: 'كتابة مقال متكامل يوضح الالتزامات الشخصية لتقليل البصمة الكربونية وحماية البيئة.',
        es: 'Redacción de un ensayo sobre medidas individuales para la sostenibilidad y reducción de emisiones.'
      }
    },
    sectionD: {
      title: 'Mussawi D: Leseverstehen & Text',
      focus: 'Prüfungsvorbereitung (B1 Gesamtübersicht: Alle Deutsch Mussawi Module)',
      description: {
        en: 'Comprehensive synthesis of all 14 units from A1 to B1 for the Goethe/telc Zertifikat B1 examination.',
        fa: 'مرور جامع و جمع‌بندی نهایی تمام ۱۴ درس از A1 تا B1 جهت قبولی در آزمون جامع گوته و تلک B1.',
        prs: 'مرور عمومی و جمع‌بندی ۱۴ فصل برای آمادگی نهایی امتحان بین‌المللی B1.',
        tr: 'A1\'den B1\'e kadar tüm 14 ünitenin telc/Goethe Zertifikat B1 sınavı için genel sentezi.',
        ar: 'مراجعة شاملة وتوليف ختامي لجميع وحدات Deutsch Mussawi الـ 14 لاجتياز اختبار B1 بنجاح.',
        es: 'Síntesis integral de las 14 unidades desde A1 hasta B1 para superar el examen oficial B1.'
      }
    },
    sectionE: {
      title: 'Mussawi E: Grammatik & Schreiben',
      focus: 'Abschluss & Ausblick (Vom B1 zum Beruf B2)',
      description: {
        en: 'Roadmap for progressing from general B1 language competence to professional B2 mastery in Germany.',
        fa: 'نقشه راه ارتقای مهارت زبانی از B1 عمومی به سطح حرفه‌ای B2 کاری در بازار کار آلمان.',
        prs: 'نقشه راه برای ورود به سطح مسلکی و کارآموزی B2 پس از ختم موفقانه B1.',
        tr: 'Genel B1 yeterliliğinden Almanya\'daki mesleki B2 düzeyine geçiş yol haritası.',
        ar: 'خارطة طريق للانتقال من الكفاءة العامة B1 إلى إتقان اللغة المهنية لمستوى B2 في ألمانيا.',
        es: 'Plan de acción para avanzar desde el B1 general hacia la maestría laboral del nivel B2.'
      }
    },
    vocabularies: [
      { id: 'b1_2_v14_1', word: 'die Energiewende', article: 'die', plural: 'die Energiewenden', ipa: '/ʔenɛʁˈɡiːˌvɛndə/', translation: { en: 'energy transition (to renewables)', fa: 'گذار به انرژی‌های تجدیدپذیر و پاک', prs: 'تغییر سیستم انرژی به منابع آفتابی و بادی', tr: 'yenilenebilir enerjiye geçiş', ar: 'التحول الطاقي نحو المصادر المتجددة', es: 'transición energética limpia' } },
      { id: 'b1_2_v14_2', word: 'der Klimawandel', article: 'der', plural: 'die Klimawandel', ipa: '/ˈkliːmaˌvandl̩/', translation: { en: 'climate change', fa: 'تغییرات اقلیمی کره زمین', prs: 'تغییرات ناگوار اقلیم زمین', tr: 'iklim değişikliği', ar: 'التغير المناخي العالمي', es: 'cambio climático' } },
      { id: 'b1_2_v14_3', word: 'die Nachhaltigkeit', article: 'die', plural: 'die Nachhaltigkeiten', ipa: '/ˈnaːxˌhaltɪçkaɪ̯t/', translation: { en: 'sustainability', fa: 'پایداری زیست‌محیطی', prs: 'پایداری و حفظ منابع برای آینده', tr: 'sürdürülebilirlik', ar: 'الاستدامة البيئية', es: 'sostenibilidad ambiental' } },
      { id: 'b1_2_v14_4', word: 'der CO2-Fußabdruck', article: 'der', plural: 'die CO2-Fußabdrücke', ipa: '/tseːoːˈtsvaɪ̯ˌfuːsʔapˌdʁʊk/', translation: { en: 'carbon footprint', fa: 'ردپای کربن حاصل از فعالیت‌های انسانی', prs: 'میزان تولید گازهای مضر', tr: 'karbon ayak izi', ar: 'البصمة الكربونية', es: 'huella de carbono' } },
      { id: 'b1_2_v14_5', word: 'die Prognose', article: 'die', plural: 'die Prognosen', ipa: '/pʁoˈɡnoːzə/', translation: { en: 'forecast / projection', fa: 'پیش‌بینی علمی و برآورد آینده', prs: 'پیش‌بینی علمی آینده', tr: 'tahmin / öngörü', ar: 'التنبؤ / التوقع العلمي', es: 'pronóstico / proyección' } }
    ],
    videoClip: {
      title: 'Die Stadt von morgen: Grüne Architektur',
      scenario: 'Ein Dokumentarfilm über nachhaltige Stadtentwicklung und solare Eigenversorgung.',
      germanTranscript: [
        'Architektin: In Zukunft werden alle Neubauten mehr Energie erzeugen, als sie selbst verbrauchen.',
        'Reporter: Welche Rolle spielen dabei moderne Speichertechnologien?',
        'Architektin: Sie werden es ermöglichen, sauberen Solarstrom auch nachts und im Winter zuverlässig zu nutzen.'
      ],
      translatedTranscript: [
        { en: 'Architect: In the future, all new buildings will generate more energy than they consume.', fa: 'معمار: در آینده همه ساختمان‌های نوساز بیش از مصرف خود انرژی پاک تولید خواهند کرد.', prs: 'انجنیر ساختمانی: در آینده تمام تعمیرات جدید انرژی بیشتر از مصرف خود تولید خواهند کرد.', tr: 'Mimar: Gelecekte tüm yeni binalar tükettiklerinden daha fazla enerji üretecek.', ar: 'المهندسة المعمارية: في المستقبل ستولد جميع المباني الجديدة طاقة تفوق استهلاكها.', es: 'Arquitecta: En el futuro, todos los edificios nuevos generarán más energía de la que consumen.' }
      ]
    },
    examTip: {
      standard: 'B1 (Goethe & telc Zertifikat B1)',
      module: 'Zertifikat B1 Gesamtstrategie',
      tip: {
        en: 'Congratulations on completing the entire Deutsch Mussawi B1 curriculum! In the final exam, time management is key: allocate 20 minutes for Lesen Teil 1-2, keep 15 minutes for checking written letters, and speak with confident intonation.',
        fa: 'تبریک! شما کل دوره Deutsch Mussawi از A1 تا B1 (تمامی ۱۴ درس) را به پایان رساندید. در امتحان نهایی، مدیریت زمان و اعتماد به نفس در مکالمه کلید موفقیت ۱۰۰ درصدی شماست.',
        prs: 'تبریک! شما تمام ۱۴ درس رسمی آلمانی تا درجه B1 را تکمیل نمودید. مدیریت وقت و اعتماد به نفس باعث کسب نمره عالی شما خواهد شد.',
        tr: 'Tebrikler! Deutsch Mussawi A1-B1 müfredatının 14 ünitesini de tamamladınız. Sınavda zaman yönetimi başarının anahtarıdır.',
        ar: 'تهانينا لإتمام منهج Deutsch Mussawi بالكامل (الوحدات الـ 14 من A1 إلى B1)! إدارة الوقت هي مفتاح تفوقك النهائي.',
        es: '¡Enhorabuena por completar todo el currículo Deutsch Mussawi de 14 unidades! La gestión del tiempo es la clave de tu éxito.'
      }
    },
    exercises: [
      {
        id: 'ex_b1_2_lek14_1',
        type: 'fill_blank',
        instruction: {
          en: 'Form the Futur I sentence with the correct form of "werden".',
          fa: 'فرم صحیح فعل "werden" را در زمان آینده ۱ وارد کنید.',
          prs: 'شکل مناسب فعل werden را در زمان آینده انتخاب کنید.',
          tr: 'Futur I için "werden" fiilinin doğru çekimini seçiniz.',
          ar: 'ضع التصريف الصحيح للفعل "werden" في صيغة Futur I.',
          es: 'Inserta la forma correcta de "werden" para el Futur I.'
        },
        prompt: 'Deutschland _____ in den kommenden Jahren mehr erneuerbare Energien nutzen.',
        options: ['wird', 'werdet', 'werden', 'wirst'],
        correctAnswer: 'wird',
        explanation: {
          en: 'Subject "Deutschland" is 3rd person singular (es), so the correct conjugated form is "wird".',
          fa: 'فاعل "Deutschland" سوم شخص مفرد است، بنابراین فرم صرف‌شده صحیح "wird" می‌باشد.',
          prs: 'کشور آلمان سوم شخص مفرد است و فعل werden برای آن wird می‌شود.',
          tr: '"Deutschland" 3. tekil şahıstır; doğru çekim "wird" şeklindedir.',
          ar: 'الفاعل "ألمانيا" مفرد غائب، لذا يكون التصريف الصحيح هو "wird".',
          es: 'El sujeto es 3ª persona del singular, por lo que la forma correcta es "wird".'
        }
      }
    ]
  }
];
