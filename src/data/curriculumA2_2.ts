import { Lesson } from '../types';

export const CURRICULUM_A2_2: Lesson[] = [
  {
    id: 'a2_2_lek8',
    lektionNumber: 8,
    level: 'A2.2',
    title: 'Auf der Bank und Behördengänge',
    subTitle: 'Kontoeröffnung, Überweisungen und Behördenformulare (Deutsch Mussawi A2.2)',
    topic: 'Bankgeschäfte, Geldanlage, Passiv Präsens und Verben mit Dativ und Akkusativ',
    fotoHoergeschichte: {
      title: 'Foto-Hörgeschichte: Bei der Sparkasse in Dresden',
      imagePrompt: 'A friendly bank consultation desk in Dresden with a young customer opening a checking account with a bank consultant.',
      imageTheme: 'Dresden Sparkasse',
      audioDuration: '02:10',
      transcript: [
        { speaker: 'Bankberater', text: 'Guten Tag! Wie kann ich Ihnen heute behilflich sein?' },
        { speaker: 'Frau Zahra', text: 'Guten Tag! Ich möchte gern ein Girokonto für mein Gehalt eröffnen.' },
        { speaker: 'Bankberater', text: 'Sehr gern. Haben Sie Ihren gültigen Personalausweis und die Meldebescheinigung dabei?' },
        { speaker: 'Frau Zahra', text: 'Ja, hier sind meine Dokumente. Wie lange dauert es, bis die Bankkarte ankommt?' },
        { speaker: 'Bankberater', text: 'Die Girocard wird Ihnen innerhalb von drei Werktagen per Post zugeschickt.' }
      ],
      summary: {
        en: 'Zahra opens a bank account at Sparkasse in Dresden and inquires about debit cards and online banking.',
        fa: 'زهرا در شعبه اشپارکاسه در درسدن یک حساب جاری افتتاح می‌کند و مدارک لازم را تحویل می‌دهد.',
        prs: 'زهرا در یک بانک در شهر درسدن حساب جاری بانکی باز می‌کند و درباره ارسال کارت بانکی معلومات می‌گیرد.',
        tr: 'Zahra Dresden\'deki bankada vadesiz hesap açar ve banka kartı hakkında bilgi alır.',
        ar: 'تفتح زهرة حساباً جارياً في البنك وتستفسر عن بطاقة الصراف الآلي والخدمات الإلكترونية.',
        es: 'Zahra abre una cuenta corriente en Dresde y consulta sobre la tarjeta de débito.'
      }
    },
    sectionA: {
      title: 'Mussawi A: Sprechen & Dialog',
      focus: 'Sprechen & Hören (Am Bankschalter & Online-Banking)',
      description: {
        en: 'Open a bank account, make transfers, and configure online banking securely.',
        fa: 'افتتاح حساب بانکی، انتقال وجه و تنظیمات بانکداری اینترنتی.',
        prs: 'باز کردن حساب در بانک، حواله کردن پول و تنظیمات حسابداری آنلاین.',
        tr: 'Banka hesabı açma, havale yapma ve internet bankacılığı kullanımı.',
        ar: 'فتح حساب مصرفي، إجراء التحويلات المالية وضبط الحساب الإلكتروني.',
        es: 'Apertura de cuenta bancaria, transferencias y banca online.'
      },
      content: 'Ich möchte ein Konto eröffnen. / Wie hoch sind die Kontoführungsgebühren? / Ich möchte Geld überweisen.',
      audioText: 'Für die Überweisung benötige ich die IBAN des Empfängers und den Verwendungszweck.',
      practiceTasks: [
        'Füllen Sie einen standardisierten SEPA-Überweisungsträger aus.',
        'Spielen Sie einen Dialog: Beratung am Bankschalter.'
      ]
    },
    sectionB: {
      title: 'Mussawi B: Wortschatz & Hören',
      focus: 'Hören & Wortschatz (Geld & Finanzen)',
      description: {
        en: 'Essential vocabulary for banking: IBAN, PIN, TAN, statement, and standing orders.',
        fa: 'واژگان ضروری بانکی: شماره شبا، پین‌کد، رمز موقت، صورت‌حساب و دستور پرداخت دائمی.',
        prs: 'لغات ضروری بانک: شماره حساب بین‌المللی (IBAN)، رمز کارت، صورت حساب و حواله خودکار ماهانه.',
        tr: 'Banka terimleri: IBAN, şifre, hesap özeti ve düzenli ödeme talimatı.',
        ar: 'المفردات المصرفية الأساسية: الآيبان، الرقم السري، كشف الحساب والتحويل التلقائي.',
        es: 'Vocabulario bancario: IBAN, clave de seguridad, extracto y orden permanente.'
      },
      content: 'das Girokonto, die Überweisung, der Dauerauftrag, der Kontoauszug, die Geheimzahl (PIN).',
      audioText: 'Sie können monatliche Miete ganz bequem über einen automatischen Dauerauftrag abbuchen lassen.',
      practiceTasks: [
        'Unterscheiden Sie zwischen einmaliger Überweisung und Dauerauftrag.',
        'Erklären Sie die Sicherheitsregeln beim Umgang mit der PIN-Nummer.'
      ]
    },
    sectionC: {
      title: 'Mussawi C: Alltagskommunikation',
      focus: 'Sprechen & Dialoge (Beim Bürgeramt: Wohnsitz anmelden)',
      description: {
        en: 'Register your residential address at the citizens\' registration office (Bürgeramt).',
        fa: 'ثبت نشانی سکونت در اداره ثبت احوال و شهروندی (Bürgeramt).',
        prs: 'ثبت آدرس خانه و ثبت نام رسمی در اداره امور شهروندان (Bürgeramt).',
        tr: 'Vatandaşlık dairesinde (Bürgeramt) ikametgah kaydı yaptırma.',
        ar: 'تسجيل عنوان السكن في دائرة شؤون المواطنين الرسمية.',
        es: 'Empadronamiento y registro de residencia en la oficina de atención ciudadana.'
      },
      content: 'Ich möchte meinen Wohnsitz anmelden. / Hier ist die Wohnungsgeberbestätigung meines Vermieters.',
      audioText: 'Zur Anmeldung des Wohnsitzes müssen Sie innerhalb von zwei Wochen nach Einzug persönlich im Bürgeramt erscheinen.',
      practiceTasks: [
        'Führen Sie das Gespräch mit dem Sachbearbeiter im Bürgeramt.',
        'Füllen Sie ein Meldeformular für einen neuen Wohnsitz aus.'
      ]
    },
    sectionD: {
      title: 'Mussawi D: Leseverstehen & Text',
      focus: 'Lesen & Textanalyse (Behördenbrief & Gebührenbescheid)',
      description: {
        en: 'Read official administrative notifications and fee statements accurately.',
        fa: 'خواندن نامه‌های اداری و فرم‌های ابلاغ عوارض و هزینه‌ها.',
        prs: 'خواندن مکاتیب رسمی ادارات دولتی و قبض‌های محصول خدمات.',
        tr: 'Resmi kurum yazılarını ve harç bildirimlerini okuma.',
        ar: 'قراءة الإخطارات الرسمية الصادرة عن الدوائر الحكومية وإشعارات الرسوم.',
        es: 'Lectura de notificaciones administrativas oficiales y liquidaciones de tasas.'
      },
      content: 'Musterbescheid einer Stadtverwaltung.',
      readingText: {
        type: 'Behördlicher Bescheid',
        title: 'Stadt Leipzig - Amt für Bürgerservice: Meldebestätigung',
        body: 'Frau Zahra Al-Mansur, geboren am 15.04.1996, ist seit dem 01.10.2025 unter der Anschrift Karl-Liebknecht-Straße 42, 04107 Leipzig mit Hauptwohnsitz gemeldet. Diese Bestätigung dient zur Vorlage bei Behörden, Banken und Krankenkassen.'
      },
      practiceTasks: [
        'Welche Anschrift ist als Hauptwohnsitz eingetragen?',
        'Für welche Institutionen gilt diese Bestätigung als Nachweis?'
      ]
    },
    sectionE: {
      title: 'Mussawi E: Grammatik & Schreiben',
      focus: 'Grammatik & Schreiben (Verben mit zwei Objekten: Dativ vor Akkusativ)',
      description: {
        en: 'Master word order when verbs govern both Dative and Accusative objects.',
        fa: 'ترتیب کلمات در افعال با دو مفعول: مفعول داتیو پیش از مفعول آکوزاتیو.',
        prs: 'ترتیب مفعول‌ها در جمله: قرار گرفتن مفعول داتیف پیش از مفعول اکوزاتیف.',
        tr: 'Çift nesneli fiillerde sözcük sırası: Dativ ve Akkusativ dizilimi.',
        ar: 'ترتيب المفاعيل عند تعدي الفعل إلى مفعولين (المجرور ثم المنصوب).',
        es: 'Orden sintáctico con verbos de doble complemento: dativo antes de acusativo.'
      },
      content: 'Regel mit Nomen: Subjekt + Verb + Dativ (Person) + Akkusativ (Sache). Regel mit Pronomen: Pronomen Akkusativ vor Dativ.',
      grammarRule: {
        id: 'a2_2_objekte_rule',
        level: 'A2.2',
        germanTitle: 'Verben mit Dativ- und Akkusativobjekt',
        formula: 'Subjekt + Verb + Dativ (wem?) + Akkusativ (wen/was?)',
        explanation: {
          en: 'When a sentence has both a noun in the Dative and a noun in the Accusative, the Dative (usually a person) comes first. Example: "Der Berater gibt der Kundin (Dat) die Bankkarte (Akk)".',
          fa: 'اگر جمله دو مفعول اسمی داشته باشد، مفعول داتیو (معمولاً شخص) قبل از مفعول آکوزاتیو (معمولاً شیء) می‌آید.',
          prs: 'هرگاه در یک جمله دو اسم مفعول بیایند، مفعول داتیف (شخص) پیش از مفعول اکوزاتیف (چیز) قرار می‌گیرد.',
          tr: 'Cümlede iki isim nesne varsa, önce Dativ (kişi), sonra Akkusativ (nesne) gelir.',
          ar: 'عند وجود مفعولين من الأسماء، يتقدم المفعول في حالة الداتيف (الشخص) على الأكوزاتيف (الشيء).',
          es: 'Cuando hay dos sustantivos complemento, el dativo (persona) precede al acusativo (objeto).'
        },
        examples: [
          {
            german: 'Der Bankberater schickt der Kundin die neue Girocard per Post.',
            formulaBreakdown: 'Der Bankberater (S) + schickt (V) + der Kundin (Dativ) + die Girocard (Akkusativ).',
            literalTranslation: {
              en: 'The bank-advisor sends to-the customer the new card by post.',
              fa: 'مشاور بانک برای مشتری کارت جدید را با پست ارسال می‌کند.',
              prs: 'کارمند بانک کارت جدید را از طریق پُست برای مشتری می‌فرستد.',
              tr: 'Banka danışmanı müşteriye yeni kartı posta ile gönderir.',
              ar: 'يرسل مستشار البنك للعميلة بطاقتها الجديدة بالبريد.',
              es: 'El asesor del banco envía a la clienta la tarjeta nueva por correo.'
            },
            fluentTranslation: {
              en: 'The bank advisor sends the new debit card to the customer by mail.',
              fa: 'کارشناس بانک کارت بانکی جدید را از طریق پست برای مشتری می‌فرستد.',
              prs: 'کارمند بانک کارت جدید بانکی را از طریق پُست به آدرس مشتری ارسال می‌نماید.',
              tr: 'Banka görevlisi yeni banka kartını müşteriye postayla gönderir.',
              ar: 'يقوم موظف البنك بإرسال البطاقة المصرفية الجديدة إلى العميلة عبر البريد.',
              es: 'El gestor bancario envía la nueva tarjeta bancaria a la clienta por correo postal.'
            }
          }
        ]
      },
      practiceTasks: [
        'Stellen Sie den Satz um: "Die Bank schickt dem Kunden einen Brief".',
        'Ersetzen Sie die Nomen durch Pronomen (ihn, ihm, sie).'
      ]
    },
    videoClip: {
      title: 'Beratung am Bankschalter in Leipzig',
      scenario: 'Ein Neukunde bespricht Kontoführungsmodelle und Online-Banking mit dem Bankkaufmann.',
      category: 'workplace',
      duration: '02:40',
      germanTranscript: [
        'Guten Tag! Ich möchte mich über die verschiedenen Girokonten informieren.',
        'Gern! Für Auszubildende und Studenten ist die Kontoführung bei uns komplett kostenfrei.',
        'Das klingt hervorragend! Welche Unterlagen muss ich dafür vorlegen?',
        'Bringen Sie bitte Ihren Personalausweis und die aktuelle Immatrikulationsbescheinigung mit.'
      ],
      translatedTranscript: [
        {
          en: 'Hello! I would like to learn about the different checking account models.',
          fa: 'سلام! می‌خواهم درباره انواع حساب‌های جاری اطلاعات کسب کنم.',
          prs: 'سلام! می‌خواهم در مورد انواع حساب‌های جاری بانکی معلومات بگیرم.',
          tr: 'Merhaba! Farklı vadesiz hesap seçenekleri hakkında bilgi almak istiyorum.',
          ar: 'مرحباً! أود الاستفسار عن الأنواع المختلفة للحسابات الجارية.',
          es: '¡Hola! Quisiera informarme sobre los distintos modelos de cuentas corrientes.'
        },
        {
          en: 'Gladly! For trainees and students, account management with us is completely free of charge.',
          fa: 'با کمال میل! برای کارآموزان و دانشجویان نگهداری حساب نزد ما کاملاً رایگان است.',
          prs: 'با کمال میل! برای محصلین و شاگردان مسلکی، مدیریت حساب کاملاً رایگان می‌باشد.',
          tr: 'Memnuniyetle! Stajyerler ve üniversite öğrencileri için hesap işletim ücreti yoktur.',
          ar: 'بكل سرور! إدارة الحساب مجانية تماماً للطلاب والمتدربين المهنيين لدينا.',
          es: '¡Con gusto! Para aprendices y estudiantes universitarios, la gestión de cuenta es totalmente gratuita.'
        },
        {
          en: 'That sounds excellent! Which documents do I need to present for that?',
          fa: 'بسیار عالی به نظر می‌رسد! چه مدارکی باید برای این کار ارائه دهم؟',
          prs: 'بسیار عالی به نظر می‌رسد! برای این کار کدام اسناد را باید همراه داشته باشم؟',
          tr: 'Kulağa harika geliyor! Bunun için hangi evrakları ibraz etmem gerekiyor?',
          ar: 'هذا ممتاز! ما هي المستندات التي يتوجب علي تقديمها؟',
          es: '¡Suena genial! ¿Qué documentos debo presentar para ello?'
        },
        {
          en: 'Please bring your identity card and your current university enrollment certificate.',
          fa: 'لطفاً کارت شناسایی و گواهی ثبت‌نام دانشگاهی معتبر خود را به همراه بیاورید.',
          prs: 'لطفاً تذکره یا پاسپورت و تصدیق‌نامه ثبت‌نام پوهنتون خود را بیاورید.',
          tr: 'Lütfen kimlik belgenizi ve güncel öğrenci belgenizi yanınızda getiriniz.',
          ar: 'يرجى إحضار بطاقة الهوية وشهادة التسجيل الجامعي الحالية.',
          es: 'Por favor, traiga su documento de identidad y el certificado de matrícula universitaria vigente.'
        }
      ]
    },
    examTip: {
      standard: 'A2 (Goethe-Zertifikat A2 & telc Deutsch A2)',
      module: 'Hören & Schreiben',
      tip: {
        en: 'In A2 listening tasks, numbers, IBAN digits, and phone numbers are read slowly and clearly. Practice noting them down directly on your scratch paper.',
        fa: 'در بخش شنیداری A2، ارقام و شماره حساب‌ها آرام خوانده می‌شوند. حتماً سریع آن‌ها را یادداشت کنید.',
        prs: 'در بخش گوش دادن امتحان A2، اعداد و ارقام حسابات بانکی واضح خوانده می‌شوند. فوراً آن‌ها را روی کاغذ یادداشت نمایید.',
        tr: 'A2 dinleme sınavında sayılar ve IBAN numaraları yavaş okunur; dikkatle not alın.',
        ar: 'في اختبار الاستماع A2 تُقرأ الأرقام بوضوح؛ احرص على تدوينها فوراً.',
        es: 'En la comprensión auditiva de A2, los números se pronuncian con claridad; anótalos de inmediato.'
      }
    },
    exercises: [
      {
        id: 'ex_a2_2_8_1',
        type: 'multiple_choice',
        instruction: {
          en: 'Select the correct order of Dative and Accusative objects.',
          fa: 'ترتیب صحیح مفعول داتیو و آکوزاتیو را انتخاب کنید.',
          prs: 'ترتیب درست مفعول داتیف و اکوزاتیف را در جمله انتخاب نمایید.',
          tr: 'Dativ ve Akkusativ nesnelerinin doğru dizilişini seçin.',
          ar: 'اختر الترتيب الصحيح للمفعولين (المجرور والمنصوب).',
          es: 'Selecciona el orden correcto de los complementos dativo y acusativo.'
        },
        prompt: 'Welcher Satz ist grammatisch korrekt?',
        options: [
          'Der Bankberater erklärt der Kundin das Online-Banking.',
          'Der Bankberater erklärt das Online-Banking der Kundin.',
          'Der Bankberater der Kundin erklärt das Online-Banking.',
          'Der Bankberater erklärt Online-Banking an die Kundin.'
        ],
        correctAnswer: 'Der Bankberater erklärt der Kundin das Online-Banking.',
        explanation: {
          en: 'Rule: Noun Dative (der Kundin = person) stands before noun Accusative (das Online-Banking = thing).',
          fa: 'قاعده: مفعول داتیو اسمی (der Kundin) قبل از مفعول آکوزاتیو اسمی (das Online-Banking) قرار می‌گیرد.',
          prs: 'قاعده: اسم داتیف (شخص) پیش از اسم اکوزاتیف (چیز) می‌آید.',
          tr: 'Kural: İsimlerde Dativ nesnesi (kişi), Akkusativ nesnesinden (şey) önce gelir.',
          ar: 'القاعدة: يتقدم الاسم المجرور بالداتيف (الشخص) على المنصوب بالأكوزاتيف (الشيء).',
          es: 'Regla: En sustantivos, el dativo (persona) se coloca antes que el acusativo (cosa).'
        }
      }
    ]
  },
  {
    id: 'a2_2_lek9',
    lektionNumber: 9,
    level: 'A2.2',
    title: 'Unterwegs und Reisen mit Bahn und Flugzeug',
    subTitle: 'Am Hauptbahnhof, Fahrkartenkauf und Relativsätze im Nominativ und Akkusativ (A2.2)',
    topic: 'Reiseauskunft, Zugausfälle, Umsteigen, Gepäckaufgabe und Relativpronomen',
    fotoHoergeschichte: {
      title: 'Foto-Hörgeschichte: Am Hauptbahnhof in Frankfurt am Main',
      imagePrompt: 'The busy platforms of Frankfurt Central Station with departure boards and travelers rushing to catch their connecting ICE trains.',
      imageTheme: 'Frankfurt Hauptbahnhof',
      audioDuration: '02:25',
      transcript: [
        { speaker: 'Durchsage', text: 'Achtung an Gleis 7: Der ICE 672 nach Hamburg hat heute circa 20 Minuten Verspätung.' },
        { speaker: 'Sami', text: 'Entschuldigung! Mein Zug hat Verspätung. Erreiche ich noch den Anschlusszug in Hannover?' },
        { speaker: 'Zugbegleiterin', text: 'Keine Sorge. Der Zug, der nach Bremen weiterfährt, wartet am Nachbargleis auf Sie.' },
        { speaker: 'Sami', text: 'Muss ich meine Fahrkarte jetzt neu stempeln lassen?' },
        { speaker: 'Zugbegleiterin', text: 'Nein, die Zugbindung ist wegen der Verspätung automatisch aufgehoben.' }
      ],
      summary: {
        en: 'Sami navigates a train delay at Frankfurt Central Station and learns from the conductor that his connecting train will wait.',
        fa: 'سامی با تاخیر قطار در ایستگاه راه‌آهن فرانکفورت روبرو می‌شود و راهنمای قطار به او اطمینان می‌دهد که قطار تعویضی منتظر او خواهد بود.',
        prs: 'سامی در ایستگاه ریل فرانکفورت با تاخیر مواجه می‌شود و کارمند قطار به او معلومات می‌دهد که قطار بعدی منتظر مسافرین است.',
        tr: 'Sami Frankfurt tren garında gecikmeyle karşılaşır ve aktarma treninin bekleyeceğini öğrenir.',
        ar: 'يواجه سامي تأخيراً في محطة قطارات فرانكفورت ويطمئنه موظف القطار بأن قطار المواصلة سينتظره.',
        es: 'Sami se enfrenta a un retraso de tren en Fráncfort y la revisora le asegura que su conexión le esperará.'
      }
    },
    sectionA: {
      title: 'Mussawi A: Sprechen & Dialog',
      focus: 'Sprechen & Hören (Am Schalter der Deutschen Bahn)',
      description: {
        en: 'Buy tickets, ask for connecting trains, seat reservations, and delay confirmations.',
        fa: 'خرید بلیط، پرس‌وجو درباره قطارهای تعویضی، رزرو صندلی و دریافت برگه تاخیر.',
        prs: 'خریدن تکت ریل، پرسان کردن در مورد ریل‌های بعدی، ریزرف چوکی و گواهی تاخیر.',
        tr: 'Bilet alma, aktarma sorma, koltuk rezervasyonu ve gecikme belgesi talep etme.',
        ar: 'شراء التذاكر، الاستفسار عن قطارات المواصلة، حجز المقاعد وطلب إثبات التأخير.',
        es: 'Comprar billetes de tren, consultar transbordos, reservas de asiento y justificantes.'
      },
      content: 'Eine einfache Fahrt oder Hin- und Rückfahrt? / Haben Sie eine BahnCard? / Wann fährt der nächste Zug ab?',
      audioText: 'Der Zug fährt von Gleis 9 ab. Sie müssen in Nürnberg umsteigen.',
      practiceTasks: [
        'Kaufen Sie ein Ticket am DB-Automaten.',
        'Fragen Sie nach einer Zugverbindung mit Sitzplatzreservierung.'
      ]
    },
    sectionB: {
      title: 'Mussawi B: Wortschatz & Hören',
      focus: 'Hören & Wortschatz (Reisen & Verkehr)',
      description: {
        en: 'Vocabulary for public transit: platform, delay, cancellation, and connection.',
        fa: 'واژگان حمل‌ونقل عمومی: سکو، تاخیر، لغو سفر و قطار تعویضی.',
        prs: 'لغات ترانسپورت عامه: خط ریل (Gleis)، تاخیر، لغو شدن سفر و ریل تبدیلی.',
        tr: 'Ulaşım kelimeleri: peron, rötar, iptal ve aktarma.',
        ar: 'مصطلحات السفر: رصيف القطار، التأخير، الإلغاء، وقطار المواصلة.',
        es: 'Vocabulario de transporte: andén, retraso, cancelación y transbordo.'
      },
      content: 'das Gleis, die Verspätung, der Anschlusszug, das Abteil, die Durchsage, das Ticket.',
      audioText: 'Wegen einer Weichenstörung verkehren die S-Bahnen heute mit unregelmäßigen Takten.',
      practiceTasks: [
        'Hören Sie Bahnhofsdurchsagen und notieren Sie Gleis und Uhrzeit.',
        'Erklären Sie den Begriff "Zugbindung".'
      ]
    },
    sectionC: {
      title: 'Mussawi C: Alltagskommunikation',
      focus: 'Sprechen & Dialoge (Am Flughafen: Check-in & Sicherheitskontrolle)',
      description: {
        en: 'Check in baggage, pass through airport security, and locate the boarding gate.',
        fa: 'تحویل بار، عبور از گیت بازرسی فرودگاه و پیدا کردن گیت پرواز.',
        prs: 'تحویل دادن بکس‌ها در میدان هوایی، بازرسی امنیتی و پیدا کردن دروازه پرواز.',
        tr: 'Havalimanında bagaj teslimi, güvenlik kontrolü ve biniş kapısını bulma.',
        ar: 'تسليم الأمتعة في المطار، المرور بنقاط التفتيش، والتوجه لبوابة الصعود.',
        es: 'Facturación de equipaje en el aeropuerto, control de seguridad y puerta de embarque.'
      },
      content: 'Darf ich bitte Ihren Reisepass sehen? / Haben Sie Handgepäck dabei? / Wo ist Flugsteig B14?',
      audioText: 'Bitte legen Sie alle elektronischen Geräte und Flüssigkeiten separat in die Box.',
      practiceTasks: [
        'Simulieren Sie das Gespräch am Check-in Schalter.',
        'Beantworten Sie Fragen der Sicherheitsbeamten.'
      ]
    },
    sectionD: {
      title: 'Mussawi D: Leseverstehen & Text',
      focus: 'Lesen & Textanalyse (Fahrplan & Reiseinformationen)',
      description: {
        en: 'Extract departure times, platforms, and transit duration from train schedules.',
        fa: 'استخراج ساعت حرکت، شماره سکو و مدت زمان سفر از جدول زمان‌بندی قطارها.',
        prs: 'پیدا کردن وقت حرکت، نمره لین ریل و مدت سفر از تقسیم‌اوقات قطارها.',
        tr: 'Tren tarifelerinden kalkış saati, peron ve yolculuk süresini okuma.',
        ar: 'استخراج مواعيد الانطلاق وأرقام الأرصفة ومدة الرحلة من جداول القطارات.',
        es: 'Comprensión de horarios ferroviarios, andenes y duración del trayecto.'
      },
      content: 'DB Reiseplan München - Hamburg.',
      readingText: {
        type: 'Reiseplan der Deutschen Bahn',
        title: 'Verbindung ICE 782 von München Hbf nach Hamburg Altona',
        body: 'Abfahrt München Hbf um 08:15 Uhr von Gleis 18. Ankunft Hannover Hbf um 12:35 Uhr an Gleis 4. Umsteigezeit 12 Minuten. Weiterfahrt mit ICE 576 um 12:47 Uhr von Gleis 7 nach Hamburg. Sitzplatzreservierung Wagen 24, Platz 82 (Fenster).'
      },
      practiceTasks: [
        'Wie viel Zeit bleibt für den Umstieg in Hannover?',
        'Auf welchem Gleis fährt der Anschlusszug weiter?'
      ]
    },
    sectionE: {
      title: 'Mussawi E: Grammatik & Schreiben',
      focus: 'Grammatik & Schreiben (Relativsätze im Nominativ und Akkusativ)',
      description: {
        en: 'Build relative clauses with der/die/das/die in Nominative and Accusative.',
        fa: 'ساخت جملات موصولی با ضمایر der/die/das/die در حالت فاعلی (Nominativ) و مفعولی (Akkusativ).',
        prs: 'ساختن جملات وصلی با ضمایر موصولی در حالت فاعلی و مفعولی مستقیم.',
        tr: 'Nominativ ve Akkusativ hallerinde ilgi cümleleri (Relativsätze) kurma.',
        ar: 'صياغة جمل الصلة الموصولة في حالتي الرفع والنصب (Nominativ & Akkusativ).',
        es: 'Construcción de oraciones de relativo en nominativo y acusativo.'
      },
      content: 'Formel: Hauptsatz, + Relativpronomen + ... + Verb am Ende.',
      grammarRule: {
        id: 'a2_2_relativ_rule',
        level: 'A2.2',
        germanTitle: 'Relativsätze im Nominativ und Akkusativ',
        formula: 'Hauptsatz, Relativpronomen (der/die/das/die | den/die/das/die) + ... + Verb (Endposition).',
        explanation: {
          en: 'Relative pronouns introduce subordinate clauses providing details about a previously mentioned noun. The pronoun matches the gender/number of that noun, and its case depends on its function inside the relative clause.',
          fa: 'ضمایر موصولی جمله پیرو را معرفی می‌کنند و اطلاعات تکمیلی درباره اسم قبلی می‌دهند. جنسیت و تعداد از اسم قبلی می‌آید و حالت (Nom/Akk) از نقش ضمیر در جمله پیرو تعیین می‌شود.',
          prs: 'ضمایر وصلی برای تشریح بیشتر یک اسم به کار می‌روند. جنسیت از اسم اول گرفته شده و حالت گرامری از فعل داخل جمله وصلی تعیین می‌گردد.',
          tr: 'İlgi zamirleri önceki ismi niteler; cinsiyeti ana isimden, hali (Nom/Akk) ise yan cümlenin fiilinden belirlenir.',
          ar: 'توضح جمل الصلة اسماً سابقاً؛ حيث يطابق الضمير الاسم في النوع والعدد، وتتحدد حالته الإعرابية من دوره داخل جملة الصلة.',
          es: 'Los pronombres relativos introducen oraciones subordinadas; concuerdan en género/número con el sustantivo previo y su caso depende de su función en la subordinada.'
        },
        examples: [
          {
            german: 'Der ICE, der am Gleis 7 steht, fährt direkt nach Berlin.',
            formulaBreakdown: 'Der ICE [Maskulin] + , der [Nominativ: das Subjekt im Relativsatz] + steht [Verb am Ende].',
            literalTranslation: {
              en: 'The ICE, which on track 7 stands, drives directly to Berlin.',
              fa: 'قطار آی‌سی‌ای، که در سکوی ۷ ایستاده است، مستقیم به برلین می‌رود.',
              prs: 'قطار تندرو، که روی لین هفتم ایستاده است، مستقیماً به برلین حرکت می‌کند.',
              tr: '7. peronda duran ICE treni doğrudan Berlin\'e gidiyor.',
              ar: 'قطار السريع، الذي يقف على الرصيف 7، يتجه مباشرة إلى برلين.',
              es: 'El tren ICE, que está en el andén 7, va directo a Berlín.'
            },
            fluentTranslation: {
              en: 'The ICE train that is waiting on track 7 goes directly to Berlin.',
              fa: 'قطار تندرویی که روی سکوی شماره ۷ ایستاده، مستقیماً به سمت برلین حرکت می‌کند.',
              prs: 'ریل تندروی که در خط هفت ایستاده مستقیماً به طرف برلین می‌رود.',
              tr: '7 numaralı peronda bekleyen ICE doğrudan Berlin\'e gitmektedir.',
              ar: 'القطار السريع الواقف على الرصيف رقم 7 ينطلق مباشرة إلى برلين.',
              es: 'El tren de alta velocidad que está en la vía 7 se dirige directamente a Berlín.'
            }
          }
        ]
      },
      practiceTasks: [
        'Verbinden Sie die Sätze mit einem Relativpronomen: "Hier ist der Koffer. Ich habe ihn gestern gekauft."',
        'Schreiben Sie eine E-Mail über Ihre letzte Bahnreise.'
      ]
    },
    videoClip: {
      title: 'Fahrkartenkauf und Auskunft am Reisezentrum',
      scenario: 'Ein Reisender kauft am DB-Schalter ein Quer-durchs-Land-Ticket und reserviert Plätze.',
      category: 'transport',
      duration: '02:30',
      germanTranscript: [
        'Guten Tag! Ich möchte am Wochenende von Köln nach Hamburg reisen.',
        'Möchten Sie mit dem schnellen ICE oder mit Nahverkehrszügen reisen?',
        'Mit dem ICE, bitte. Gibt es noch günstige Sparpreis-Tickets?',
        'Ja, wenn Sie früh morgens fahren, kostet das Ticket nur 29,90 Euro inklusive Sitzplatz.'
      ],
      translatedTranscript: [
        {
          en: 'Hello! I want to travel from Cologne to Hamburg this weekend.',
          fa: 'سلام! می‌خواهم آخر هفته از کلن به هامبورگ سفر کنم.',
          prs: 'سلام! می‌خواهم در اخیر هفته از شهر کلن به هامبورگ سفر کنم.',
          tr: 'Merhaba! Bu hafta sonu Köln\'den Hamburg\'a seyahat etmek istiyorum.',
          ar: 'مرحباً! أود السفر في نهاية الأسبوع من كولونيا إلى هامبورغ.',
          es: '¡Hola! Quisiera viajar este fin de semana de Colonia a Hamburgo.'
        },
        {
          en: 'Would you like to travel with the fast ICE or with regional trains?',
          fa: 'مایلید با قطار سریع‌السیر ICE سفر کنید یا با قطارهای محلی؟',
          prs: 'آیا می‌خواهید با قطار سریع‌السیر ICE بروید یا با ریل‌های منطقه‌ای؟',
          tr: 'Hızlı ICE treniyle mi yoksa bölgesel trenlerle mi seyahat etmek istersiniz?',
          ar: 'هل ترغب بالسفر بالقطار السريع أم بالقطارات الإقليمية؟',
          es: '¿Desea viajar en el tren rápido ICE o en trenes regionales?'
        },
        {
          en: 'With the ICE, please. Are there still economical saver-fare tickets available?',
          fa: 'با قطار ICE لطفاً. آیا هنوز بلیط تخفیف‌دار اقتصادی (Sparpreis) موجود است؟',
          prs: 'با ریل ICE لطفاً. آیا هنوز تکت ارزان‌قیمت تخفیفی پیدا می‌شود؟',
          tr: 'ICE ile lütfen. Hala uygun indirimli bilet (Sparpreis) var mı?',
          ar: 'بالقطار السريع من فضلك. هل ما زالت تذاكر التوفير المخفضة متوفرة؟',
          es: 'En el ICE, por favor. ¿Quedan aún billetes con tarifa reducida de ahorro?'
        },
        {
          en: 'Yes, if you travel early in the morning, the ticket costs only 29.90 euros including seat.',
          fa: 'بله، اگر صبح زود حرکت کنید، بلیط فقط ۲۹.۹۰ یورو همراه با رزرو صندلی است.',
          prs: 'بلی، اگر صبح وقت حرکت نمایید، قیمت تکت به شمول ریزرف چوکی ۲۹.۹۰ یورو می‌باشد.',
          tr: 'Evet, sabah erkenden yola çıkarsanız bilet koltuk dahil sadece 29,90 Euro.',
          ar: 'نعم، إذا سافرت في الصباح الباكر فالتذكرة تكلف 29.90 يورو فقط شاملاً حجز المقعد.',
          es: 'Sí, si viaja temprano por la mañana, el billete cuesta solo 29,90 euros con asiento incluido.'
        }
      ]
    },
    examTip: {
      standard: 'A2 (Goethe-Zertifikat A2 & telc Deutsch A2)',
      module: 'Lesen & Hören',
      tip: {
        en: 'At train stations, announcements often specify track changes ("Heute auf Gleis 4"). Listen carefully to track numbers and minutes.',
        fa: 'در ایستگاه‌های راه‌آهن، اعلان‌ها مکرراً تغییر سکو را گزارش می‌کنند. همیشه به شماره سکو و دقایق با دقت گوش دهید.',
        prs: 'در اعلانات استیشن‌های ریل، تغییر خط ریل اعلان می‌شود. به اعداد خط ریل و دقایق دقت نمایید.',
        tr: 'Tren anonslarında peron değişikliklerine dikkat edin; sayılara odaklanın.',
        ar: 'في إعلانات المحطات، انتبه جيداً لأرقام الأرصفة وتغييراتها وللدقائق المعلنة.',
        es: 'En los avisos de estación, presta mucha atención a los cambios de vía y a los minutos de retraso.'
      }
    },
    exercises: [
      {
        id: 'ex_a2_2_9_1',
        type: 'multiple_choice',
        instruction: {
          en: 'Choose the correct relative pronoun.',
          fa: 'ضمیر موصولی صحیح را انتخاب کنید.',
          prs: 'ضمیر وصلی درست را در خانه خالی بگذارید.',
          tr: 'Doğru ilgi zamirini seçin.',
          ar: 'اختر اسم الموصول الصحيح للجملة.',
          es: 'Elige el pronombre relativo adecuado.'
        },
        prompt: 'Das ist der Zugbegleiter, _____ mir die Fahrkarte verkauft hat.',
        options: ['der', 'den', 'dem', 'das'],
        correctAnswer: 'der',
        explanation: {
          en: '"Der Zugbegleiter" is masculine singular and serves as the subject (Nominative) in the relative clause: "der".',
          fa: 'کلمه Zugbegleiter مذکر مفرد است و در جمله موصولی نقش فاعل (Nominativ) دارد، بنابراین "der" صحیح است.',
          prs: 'کلمه مذکر است و در جمله وصلی فاعل می‌باشد: بنابراین ضمیر "der" درست است.',
          tr: '"Zugbegleiter" eril ve yan cümlede öznedir (Nominativ), bu yüzden "der" kullanılır.',
          ar: 'الفاعل مذكر مفرد وهو في جملة الصلة في محل رفع (Nominativ)، لذا نستخدم "der".',
          es: '"Der Zugbegleiter" es masculino singular y actúa como sujeto (nominativo) en la oración de relativo: "der".'
        }
      }
    ]
  },
  {
    id: 'a2_2_lek10',
    lektionNumber: 10,
    level: 'A2.2',
    title: 'Gesundheit, Arztbesuch und Wohlbefinden',
    subTitle: 'Beim Facharzt, Krankmeldung und reflexive Verben (Deutsch Mussawi A2.2 Lektion 10)',
    topic: 'Krankenversicherung, Symptome, Medikamente in der Apotheke und reflexive Verben',
    fotoHoergeschichte: {
      title: 'Foto-Hörgeschichte: In der Gemeinschaftspraxis in Nürnberg',
      imagePrompt: 'A warm and clean German medical consultation room in Nuremberg where a doctor examines a patient with a stethoscope.',
      imageTheme: 'Praxis Nürnberg',
      audioDuration: '02:30',
      transcript: [
        { speaker: 'Arzthelferin', text: 'Guten Tag! Haben Sie Ihre elektronische Gesundheitskarte dabei?' },
        { speaker: 'Herr Becker', text: 'Guten Tag, ja hier ist meine Karte. Ich fühle mich seit zwei Tagen fiebrig und habe Halsschmerzen.' },
        { speaker: 'Frau Dr. Weber', text: 'Nehmen Sie bitte im Behandlungszimmer Platz. Ich untersuche jetzt Ihren Hals und messe Fieber.' },
        { speaker: 'Herr Becker', text: 'Muss ich mich für meinen Arbeitgeber krankschreiben lassen?' },
        { speaker: 'Frau Dr. Weber', text: 'Ja, ich stelle Ihnen eine elektronische Arbeitsunfähigkeitsbescheinigung (eAU) für vier Tage aus.' }
      ],
      summary: {
        en: 'Mr. Becker visits Dr. Weber in Nuremberg with a fever and sore throat and receives an electronic medical certificate for his employer.',
        fa: 'آقای بکر به دلیل تب و گلودرد به مطب دکتر وبر در نورنبرگ مراجعه می‌کند و گواهی مرخصی استعلاجی الکترونیکی دریافت می‌نماید.',
        prs: 'آقای بیکر به خاطر تب و دردی گلو به شفاخانه در نورنبرگ می‌رود و داکتر برایش نسخه و رخصتی مریضی الکترونیکی می‌دهد.',
        tr: 'Bay Becker ateş ve boğaz ağrısıyla doktora gider ve işvereni için rapor (eAU) alır.',
        ar: 'يزور السيد بيكر عيادة الطبيبة في نورنبرغ بسبب الحمى ويحصل على تقرير إجازة مرضية إلكتروني.',
        es: 'El señor Becker acude a la consulta médica en Núremberg con fiebre y recibe la baja médica electrónica.'
      }
    },
    sectionA: {
      title: 'Mussawi A: Sprechen & Dialog',
      focus: 'Sprechen & Hören (Symptome & Schmerzen beschreiben)',
      description: {
        en: 'Explain physical complaints, locate pains, and understand medical advice.',
        fa: 'بیان علائم بیماری، مشخص کردن محل درد و درک توصیه‌های درمانی پزشک.',
        prs: 'توضیح دادن دردها و علایم مریضی به داکتر و فهمیدن توصیه‌های صحی.',
        tr: 'Şikayetleri açıklama, ağrının yerini belirtme ve doktor tavsiyelerini anlama.',
        ar: 'وصف الأعراض ومواضع الألم وفهم النصائح والإرشادات الطبية.',
        es: 'Explicar molestias y síntomas físicos, localizar el dolor y comprender consejos médicos.'
      },
      content: 'Mir tut der Kopf weh. / Ich habe starke Halsschmerzen und Husten. / Seit wann haben Sie Fieber?',
      audioText: 'Atmen Sie bitte tief ein und wieder aus. Ihr Blutdruck ist leicht erhöht.',
      practiceTasks: [
        'Beschreiben Sie Symptome einer Erkältung.',
        'Spielen Sie ein Arzt-Patienten-Gespräch.'
      ]
    },
    sectionB: {
      title: 'Mussawi B: Wortschatz & Hören',
      focus: 'Hören & Wortschatz (Medikamente & Apotheke)',
      description: {
        en: 'Ask for prescription and over-the-counter medicine, dosages, and side effects.',
        fa: 'دریافت داروهای تجویزی و بدون نسخه در داروخانه، نحوه مصرف و عوارض جانبی.',
        prs: 'گرفتن دوا در دواخانه، طریقه استفاده و اوقات مصرف تابلیت‌ها.',
        tr: 'Eczanede reçeteli/reçetesiz ilaç alma, dozaj ve kullanım talimatları.',
        ar: 'طلب الأدوية في الصيدلية، وفهم الجرعات ومواعيد تناول العلاج.',
        es: 'Adquirir medicamentos en la farmacia, posología e instrucciones de uso.'
      },
      content: 'das Rezept, die Tablette, die Salbe, der Hustensaft, die Packungsbeilage, rezeptpflichtig.',
      audioText: 'Nehmen Sie bitte zweimal täglich eine Tablette nach den Mahlzeiten mit viel Wasser ein.',
      practiceTasks: [
        'Lesen Sie einen Beipackzettel und notieren Sie Nebenwirkungen.',
        'Kaufen Sie ein Schmerzmittel in der Apotheke.'
      ]
    },
    sectionC: {
      title: 'Mussawi C: Alltagskommunikation',
      focus: 'Sprechen & Dialoge (Krankmeldung beim Arbeitgeber)',
      description: {
        en: 'Notify your workplace promptly about sick leave in compliance with German labor laws.',
        fa: 'اطلاع‌رسانی فوری غیبت به دلیل بیماری به محل کار مطابق قوانین کار آلمان.',
        prs: 'اطلاع دادن مریضی به دفتر کار و ارسال گواهی داکتر طبق قانون.',
        tr: 'Alman iş kanununa uygun olarak işyerine zamanında hastalık bildirimi yapma.',
        ar: 'إخطار جهة العمل بالمرض في الوقت المحدد وفقاً لقانون العمل الألماني.',
        es: 'Comunicar la baja por enfermedad a la empresa conforme a la legislación laboral alemana.'
      },
      content: 'Ich bin leider krank und kann heute nicht zur Arbeit kommen. / Ich war bereits beim Arzt.',
      audioText: 'Die Arbeitsunfähigkeitsbescheinigung wird direkt elektronisch von der Krankenkasse an die Firma übermittelt.',
      practiceTasks: [
        'Formulieren Sie eine Krankmeldung per E-Mail an Ihren Vorgesetzten.',
        'Führen Sie ein telefonisches Krankmeldungsgespräch.'
      ]
    },
    sectionD: {
      title: 'Mussawi D: Leseverstehen & Text',
      focus: 'Lesen & Textanalyse (Hinweise zur elektronischen Krankschreibung eAU)',
      description: {
        en: 'Understand regulations regarding electronic sick leave notices (eAU) in Germany.',
        fa: 'درک قوانین و مقررات مربوط به برگه مرخصی استعلاجی الکترونیکی (eAU) در آلمان.',
        prs: 'فهمیدن مقررات اداری رخصتی مریضی الکترونیکی در سیستم صحی آلمان.',
        tr: 'Almanya\'daki elektronik hastalık raporu (eAU) mevzuatını anlama.',
        ar: 'فهم الإرشادات واللوائح الخاصة بالإجازات المرضية الإلكترونية (eAU).',
        es: 'Comprensión de la normativa sobre el parte médico de baja electrónico (eAU).'
      },
      content: 'Merkblatt der Krankenkasse zur eAU.',
      readingText: {
        type: 'Informationsbroschüre der Krankenkasse',
        title: 'Die elektronische Arbeitsunfähigkeitsbescheinigung (eAU)',
        body: 'Seit 2023 müssen gesetzlich Versicherte den "Gelben Schein" nicht mehr selbst an den Arbeitgeber schicken. Ihre Arztpraxis übermittelt die Krankschreibung digital an Ihre Krankenkasse. Der Arbeitgeber ruft die Daten anschließend elektronisch ab. Bitte informieren Sie Ihren Betrieb jedoch weiterhin unverzüglich vor Arbeitsbeginn über Ihr Fehlen.'
      },
      practiceTasks: [
        'Muss der Arbeitnehmer den gelben Schein noch per Post schicken?',
        'Wann muss der Betrieb über die Krankheit informiert werden?'
      ]
    },
    sectionE: {
      title: 'Mussawi E: Grammatik & Schreiben',
      focus: 'Grammatik & Schreiben (Reflexive Verben im Akkusativ & Dativ)',
      description: {
        en: 'Master reflexive verbs: sich fühlen, sich freuen, sich ärgern, sich ausruhen.',
        fa: 'تسلط بر افعال انعکاسی: sich fühlen (احساس کردن)، sich freuen (خوشحال شدن)، sich ausruhen (استراحت کردن).',
        prs: 'یادگیری افعال انعکاسی با ضمایر انعکاسی (mich, dich, sich, uns, euch, sich).',
        tr: 'Dönüşlü fiillerin (reflexive Verben) Akkusativ ve Dativ ile kullanımı.',
        ar: 'إتقان الأفعال الانعكاسية مع ضمائر الانعكاس في حالتي النصب والجر.',
        es: 'Dominio de los verbos reflexivos con pronombres en acusativo y dativo.'
      },
      content: 'Formel: Subjekt + Verb + Reflexivpronomen (mich / dich / sich / uns / euch / sich).',
      grammarRule: {
        id: 'a2_2_reflexiv_rule',
        level: 'A2.2',
        germanTitle: 'Reflexive Verben',
        formula: 'Subjekt + Verb (konjugiert) + Reflexivpronomen (Akkusativ / Dativ).',
        explanation: {
          en: 'Reflexive verbs express an action that refers back to the subject. The reflexive pronoun changes according to the person (ich mich, du dich, er/sie/es sich, wir uns, ihr euch, sie/Sie sich).',
          fa: 'افعال انعکاسی نشان‌دهنده عملی هستند که به خود فاعل بازمی‌گردد. ضمیر انعکاسی بر اساس شخص فاعل تغییر می‌کند.',
          prs: 'افعال انعکاسی عملی را نشان می‌دهند که به خود فاعل برمی‌گردد و ضمیر مطابق با فاعل گردان می‌شود.',
          tr: 'Dönüşlü fiillerde eylem özneye döner; dönüşlülük zamiri özneye göre çekimlenir.',
          ar: 'تدل الأفعال الانعكاسية على فعل يعود أثره على الفاعل نفسه ويتصرف الضمير بحسب الفاعل.',
          es: 'Los verbos reflexivos expresan una acción que recae sobre el propio sujeto; el pronombre reflexivo concuerda con la persona.'
        },
        examples: [
          {
            german: 'Ich fühle mich heute viel besser und ruhe mich zu Hause aus.',
            formulaBreakdown: 'Ich (S) + fühle (V) + mich (Reflexivpronomen) + ... + ruhe (V) + mich (Reflexiv) + aus (Präfix).',
            literalTranslation: {
              en: 'I feel myself today much better and rest myself at home.',
              fa: 'من امروز حالم را بسیار بهتر احساس می‌کنم و در خانه استراحت می‌نمایم.',
              prs: 'من امروز خود را بسیار بهتر حس می‌کنم و در خانه استراحت می‌کنم.',
              tr: 'Bugün kendimi çok daha iyi hissediyorum ve evde dinleniyorum.',
              ar: 'أشعر اليوم بتحسن كبير وأستريح في المنزل.',
              es: 'Hoy me siento mucho mejor y me descanso en casa.'
            },
            fluentTranslation: {
              en: 'I feel much better today and am resting at home.',
              fa: 'امروز احساس بهبودی بیشتری دارم و در منزل در حال استراحت هستم.',
              prs: 'امروز حالم خیلی خوب‌تر است و در خانه استراحت می‌نمایم.',
              tr: 'Bugün kendimi çok daha iyi hissediyorum ve evde istirahat ediyorum.',
              ar: 'أشعر بتحسن ملحوظ اليوم وأنا أستريح في منزلي.',
              es: 'Hoy me siento mucho mejor y estoy descansando en casa.'
            }
          }
        ]
      },
      practiceTasks: [
        'Konjugieren Sie "sich erkälten" und "sich beeilen" für alle Personalpronomen.',
        'Verfassen Sie einen kurzen Ratschlag für einen kranken Kollegen.'
      ]
    },
    videoClip: {
      title: 'In der Apotheke am Markt',
      scenario: 'Ein Kunde löst ein Kassenrezept ein und lässt sich zur Einnahme von Antibiotika beraten.',
      category: 'medical',
      duration: '02:45',
      germanTranscript: [
        'Guten Tag! Ich habe hier ein Rezept von meiner Hausärztin.',
        'Guten Tag! Das ist ein Antibiotikum. Nehmen Sie bitte alle 12 Stunden eine Tablette.',
        'Muss ich die Packung ganz zu Ende nehmen, auch wenn die Schmerzen weg sind?',
        'Ja, das ist ganz wichtig, um Rückfälle zu vermeiden. Trinken Sie keinen Alkohol dazu.'
      ],
      translatedTranscript: [
        {
          en: 'Hello! I have a prescription here from my general physician.',
          fa: 'سلام! یک نسخه از پزشک خانواده‌ام همراه دارم.',
          prs: 'سلام! من یک نسخه از داکتر معالج خود به همراه دارم.',
          tr: 'Merhaba! Aile hekimimden aldığım reçetem burada.',
          ar: 'مرحباً! لدي وصفة طبية من طبيب الأسرة هنا.',
          es: '¡Hola! Tengo aquí una receta de mi médica de cabecera.'
        },
        {
          en: 'Hello! This is an antibiotic. Please take one tablet every 12 hours.',
          fa: 'سلام! این یک آنتی‌بیوتیک است. لطفاً هر ۱۲ ساعت یک قرص میل کنید.',
          prs: 'سلام! این دوا انتی‌بیوتیک است. لطفاً هر ۱۲ ساعت یک دانه تابلیت بخورید.',
          tr: 'Merhaba! Bu bir antibiyotik. Lütfen her 12 saatte bir tablet alınız.',
          ar: 'مرحباً! هذا مضاد حيوي. يرجى تناول حبة واحدة كل 12 ساعة.',
          es: '¡Hola! Es un antibiótico. Tome un comprimido cada 12 horas.'
        },
        {
          en: 'Do I have to finish the entire pack even if the pain is gone?',
          fa: 'آیا حتی اگر دردم برطرف شود، باید کل بسته را تا آخر تمام کنم؟',
          prs: 'آیا حتی بعد از ختم درد هم باید تمام بسته دوا را تا آخر بخورم؟',
          tr: 'Ağrılarım geçse bile paketin tamamını bitirmem gerekiyor mu?',
          ar: 'هل يتوجب علي إنهاء العلبة كاملة حتى لو زال الألم؟',
          es: '¿Tengo que terminar toda la caja aunque el dolor haya desaparecido?'
        },
        {
          en: 'Yes, that is very important to prevent relapses. Do not drink alcohol with it.',
          fa: 'بله، این برای جلوگیری از عود بیماری بسیار حیاتی است. در این دوره الکل مصرف نکنید.',
          prs: 'بلی، این نکته برای جلوگیری از عودت مریضی بسیار مهم است. همراه دوا الکول ننوشید.',
          tr: 'Evet, hastalığın tekrarlamaması için bu çok önemlidir. Alkol tüketmeyiniz.',
          ar: 'نعم، هذا في غاية الأهمية لتفادي انتكاس المرض. لا تتناول الكحول مع الدواء.',
          es: 'Sí, es crucial para evitar recaídas. No consuma alcohol durante el tratamiento.'
        }
      ]
    },
    examTip: {
      standard: 'A2 (Goethe-Zertifikat A2 & telc Deutsch A2)',
      module: 'Schreiben',
      tip: {
        en: 'When writing a sick notice to an employer, mention 3 key points: Reason for absence, anticipated duration, and medical certificate status.',
        fa: 'در نامه اعلام بیماری به کارفرما، ۳ نکته را قید کنید: علت غیبت، مدت تخمینی و وضعیت ارائه گواهی پزشک.',
        prs: 'هنگام نوشتن خط مریضی به صاحب کار، ۳ چیز را حتماً بنویسید: علت غیبت، مدت مریضی و ارسال تصدیق داکتر.',
        tr: 'İşyerine hastalık bildirimi yazarken 3 noktaya değinin: sebep, tahmini süre ve rapor durumu.',
        ar: 'عند كتابة إشعار بالمرض لجهة العمل، اذكر 3 نقاط: سبب الغياب، المدة المتوقعة، ووضع التقرير الطبي.',
        es: 'Al redactar la baja médica a la empresa, cubre 3 puntos: motivo de ausencia, duración prevista y entrega del parte.'
      }
    },
    exercises: [
      {
        id: 'ex_a2_2_10_1',
        type: 'multiple_choice',
        instruction: {
          en: 'Choose the correct reflexive pronoun.',
          fa: 'ضمیر انعکاسی صحیح را انتخاب کنید.',
          prs: 'ضمیر انعکاسی مناسب را انتخاب نمایید.',
          tr: 'Doğru dönüşlülük zamirini seçin.',
          ar: 'اختر ضمير الانعكاس المناسب.',
          es: 'Selecciona el pronombre reflexivo correcto.'
        },
        prompt: 'Wie fühlst du _____ heute Morgen nach der Medizin?',
        options: ['dich', 'dir', 'mich', 'sich'],
        correctAnswer: 'dich',
        explanation: {
          en: 'The verb is "sich fühlen" (Akkusativ). For "du", the pronoun is "dich".',
          fa: 'فعل "sich fühlen" با آکوزاتیو می‌آید و برای فاعل "du"، ضمیر انعکاسی "dich" است.',
          prs: 'فعل انعکاسی با اکوزاتیف است و برای "du" ضمیر "dich" استفاده می‌شود.',
          tr: '"Sich fühlen" fiilinde "du" öznesi için "dich" kullanılır.',
          ar: 'الفعل انعكاسي مع الأكوزاتيف، ومع الضمير "du" يكون ضمير الانعكاس "dich".',
          es: 'El verbo es "sich fühlen" (acusativo). Para el pronombre "du", corresponde "dich".'
        }
      }
    ]
  },
  {
    id: 'a2_2_lek11',
    lektionNumber: 11,
    level: 'A2.2',
    title: 'In der Stadt unterwegs: Orientierung und Kultur',
    subTitle: 'Wegbeschreibung, Stadtrundgang und Wechselpräpositionen mit Dativ & Akkusativ',
    topic: 'Sehenswürdigkeiten, Museen, Richtungsangaben und Verben der Lage & Bewegung',
    fotoHoergeschichte: {
      title: 'Foto-Hörgeschichte: Unterwegs in der Altstadt von Köln',
      imagePrompt: 'The historic cathedral square in Cologne with pedestrians asking directions near the Gothic Cologne Cathedral and Roman-Germanic Museum.',
      imageTheme: 'Kölner Domplatz',
      audioDuration: '02:20',
      transcript: [
        { speaker: 'Tourist', text: 'Entschuldigung! Können Sie mir sagen, wie ich zum Museum Ludwig komme?' },
        { speaker: 'Passantin', text: 'Sehr gern! Gehen Sie hier geradeaus am Kölner Dom vorbei und biegen Sie nach der Treppe rechts ab.' },
        { speaker: 'Tourist', text: 'Ist das Museum weit von hier entfernt?' },
        { speaker: 'Passantin', text: 'Nein, es liegt direkt hinter dem Dom, nur etwa drei Gehminuten entfernt.' }
      ],
      summary: {
        en: 'A visitor asks for directions to Museum Ludwig near Cologne Cathedral and receives precise guidance.',
        fa: 'یک گردشگر در میدان کلیسای جامع کلن نشانی موزه لودویگ را جویا می‌شود و راهنمایی دقیقی دریافت می‌کند.',
        prs: 'یک سیاح در شهر کلن آدرس موزیم لودویگ را می‌پرسد و شخص رهگذر او را به صورت دقیق رهنمايی می‌کند.',
        tr: 'Köln Katedrali civarında bir turist Ludwig Müzesi\'nin yolunu sorar ve tarif alır.',
        ar: 'يستفسر أحد السياح في ساحة كاتدرائية كولونيا عن طريق متحف لودفيغ ويتلقى وصفاً دقيقاً.',
        es: 'Un visitante pregunta por la dirección hacia el Museo Ludwig cerca de la Catedral de Colonia y recibe indicaciones precisas.'
      }
    },
    sectionA: {
      title: 'Mussawi A: Sprechen & Dialog',
      focus: 'Sprechen & Hören (Nach dem Weg fragen & den Weg beschreiben)',
      description: {
        en: 'Ask pedestrians politely for directions and describe routes accurately.',
        fa: 'پرسیدن محترمانه نشانی از رهگذران و آدرس دادن دقیق.',
        prs: 'آدرس پرسان کردن با نزاکت از مردم در سرک و آدرس دادن دقیق.',
        tr: 'Kibarca yol sorma ve yön tarif etme.',
        ar: 'السؤال بأدب عن الطريق ووصف الاتجاهات والمسارات بدقة.',
        es: 'Preguntar educadamente por una dirección y describir rutas con precisión.'
      },
      content: 'Biegen Sie an der Kreuzung links ab. / Gehen Sie bis zur Ampel und dann geradeaus.',
      audioText: 'Überqueren Sie die Brücke und folgen Sie der Hauptstraße bis zum Rathaus.',
      practiceTasks: [
        'Beschreiben Sie den Weg vom Bahnhof zum Hotel.',
        'Verwenden Sie Präpositionen: an, über, bis zu, nach.'
      ]
    },
    sectionB: {
      title: 'Mussawi B: Wortschatz & Hören',
      focus: 'Hören & Wortschatz (Stadt, Gebäude & Verkehrswege)',
      description: {
        en: 'Vocabulary for city infrastructure: intersection, traffic light, bridge, pedestrian zone, roundabout.',
        fa: 'واژگان زیرساخت شهری: چهارراه، چراغ راهنما، پل، پیاده‌راه و میدان.',
        prs: 'لغات سرک و شهر: چهارراهی، چراغ ترافیکی، پل، سرک پیاده‌رو و گولایی سرک.',
        tr: 'Şehir terimleri: kavşak, trafik ışığı, köprü, yaya bölgesi ve döner kavşak.',
        ar: 'مفردات البنية التحتية للمدينة: التقاطع، إشارة المرور، الجسر، والميدان.',
        es: 'Vocabulario urbano: cruce, semáforo, puente, zona peatonal y rotonda.'
      },
      content: 'die Kreuzung, die Ampel, die Brücke, die Fußgängerzone, der Kreisverkehr, das Denkmal.',
      audioText: 'In der historischen Altstadt dürfen nur Fußgänger und Fahrräder verkehren.',
      practiceTasks: [
        'Zeichnen Sie einen einfachen Stadtplan und markieren Sie Stationen.',
        'Beschreiben Sie Ihre Lieblingssehenswürdigkeit.'
      ]
    },
    sectionC: {
      title: 'Mussawi C: Alltagskommunikation',
      focus: 'Sprechen & Dialoge (In der Touristen-Information)',
      description: {
        en: 'Inquire about guided tours, opening hours, admission discounts, and city passes.',
        fa: 'کسب اطلاعات درباره تورهای شهری، ساعات کاری، تخفیف ورودی و کارت گردشگری.',
        prs: 'معلومات گرفتن در مورد گردشگری شهری، ساعت‌های کاری، تخفیف تکت موزیم و کارت شهر.',
        tr: 'Turizm ofisinde şehir turları, açılış saatleri ve indirimler hakkında bilgi alma.',
        ar: 'الاستعلام في مركز المعلومات السياحي عن الجولات ومواعيد الزيارة والتخفيضات.',
        es: 'Consultar en la oficina de turismo sobre visitas guiadas, horarios de apertura y pases.'
      },
      content: 'Gibt es Ermäßigungen für Studenten? / Wann beginnt die nächste Stadtrundfahrt?',
      audioText: 'Mit der KölnCard fahren Sie 24 Stunden kostenlos im gesamten Nahverkehr und erhalten 50% Rabatt in Museen.',
      practiceTasks: [
        'Kaufen Sie Tickets für eine Museumsausstellung.',
        'Erkundigen Sie sich nach einer Stadtführung auf Deutsch.'
      ]
    },
    sectionD: {
      title: 'Mussawi D: Leseverstehen & Text',
      focus: 'Lesen & Textanalyse (Flyer & Museumsführer)',
      description: {
        en: 'Read cultural event flyers, exhibition guides, and ticket rules.',
        fa: 'خواندن بروشورهای فرهنگی، راهنمای نمایشگاه‌های هنری و قوانین بازدید.',
        prs: 'خواندن ورقه اعلانات فرهنگی، رهنمای نمایشگاه‌ها و شرایط ورود به موزیم.',
        tr: 'Kültürel etkinlik broşürlerini, sergi rehberlerini ve bilet koşullarını okuma.',
        ar: 'قراءة مطويات الفعاليات الثقافية ودليل المعارض وشروط التذاكر.',
        es: 'Comprensión de folletos culturales, guías de exposiciones y tarifas de entrada.'
      },
      content: 'Museumsführer Museum Ludwig.',
      readingText: {
        type: 'Museumsbroschüre',
        title: 'Museum Ludwig Köln - Moderne Kunst des 20. und 21. Jahrhunderts',
        body: 'Öffnungszeiten: Dienstag bis Sonntag von 10:00 bis 18:00 Uhr. Montags geschlossen. Jeden ersten Donnerstag im Monat bis 22:00 Uhr geöffnet. Eintritt: Regulär 11 Euro, ermäßigt 7,50 Euro für Schüler und Auszubildende. Freier Eintritt für Kinder unter 6 Jahren. Das Fotografieren ohne Blitzlicht ist in den Sammlungsräumen gestattet.'
      },
      practiceTasks: [
        'An welchen Tagen ist das Museum geöffnet?',
        'Darf man in den Ausstellungsräumen mit Blitz fotografieren?'
      ]
    },
    sectionE: {
      title: 'Mussawi E: Grammatik & Schreiben',
      focus: 'Grammatik & Schreiben (Wechselpräpositionen & Verbenpaare)',
      description: {
        en: 'Dative for location (wo? + liegen/stehen/sitzen/hängen) vs. Accusative for direction (wohin? + legen/stellen/setzen/hängen).',
        fa: 'داتیو برای مکان ثابت (wo? به همراه liegen/stehen) و آکوزاتیو برای جهت حرکت (wohin? به همراه legen/stellen).',
        prs: 'داتیف برای موقعیت ثابت و اکوزاتیف برای جهت حرکت با افعال وضعیتی و حرکتی.',
        tr: 'Konum bildiren Dativ (wo?) ve yön bildiren Akkusativ (wohin?) Wechselpräpositionen.',
        ar: 'حروف الجر المزدوجة: حالة الجر للدلالة على المكان وحالة النصب للدلالة على الاتجاه.',
        es: 'Preposiciones variables: dativo para ubicación fija (wo?) y acusativo para movimiento (wohin?).'
      },
      content: 'an, auf, hinter, in, neben, über, unter, vor, zwischen.',
      grammarRule: {
        id: 'a2_2_wechsel_rule',
        level: 'A2.2',
        germanTitle: 'Wechselpräpositionen (Dativ vs. Akkusativ)',
        formula: 'Wo? (Ort/Lage) -> Dativ | Wohin? (Richtung/Bewegung) -> Akkusativ',
        explanation: {
          en: 'Nine prepositions govern Dative when indicating position/location (Wo?), and Accusative when indicating direction or movement towards a destination (Wohin?).',
          fa: 'نه حرف اضافه در صورت پاسخ به پرسش Wo (کجا؟ حالت ثابت) داتیو و در پاسخ به Wohin (به کجا؟ حرکت و انتقال) آکوزاتیو می‌گیرند.',
          prs: 'این ۹ حرف اضافه اگر جواب سوال کجا (موقعیت ثابت) باشد داتیف و اگر جواب به کجا (حرکت) باشد اکوزاتیف می‌سازند.',
          tr: 'Bu 9 edat konum için Dativ (nerede?), yönelme/hareket için Akkusativ (nereye?) alır.',
          ar: 'تأخذ حروف الجر التسعة المزدوجة حالة الجر عند السؤال عن المكان، وحالة النصب عند السؤال عن الاتجاه.',
          es: 'Las nueve preposiciones rigen dativo con Wo? (posición estática) y acusativo con Wohin? (dirección o desplazamiento).'
        },
        examples: [
          {
            german: 'Das Gemälde hängt an der Wand (Dativ). Er hängt das Foto an die Wand (Akkusativ).',
            formulaBreakdown: 'Wo? -> an der Wand (Dativ, feminin). Wohin? -> an die Wand (Akkusativ, feminin).',
            literalTranslation: {
              en: 'The painting hangs on the wall (Dat). He hangs the photo onto the wall (Akk).',
              fa: 'تابلو روی دیوار آویزان است (داتیو). او عکس را به دیوار آویزان می‌کند (آکوزاتیو).',
              prs: 'عکس روی دیوار آویزان است (داتیف). او عکس را به روی دیوار می‌آویزد (اکوزاتیف).',
              tr: 'Tablo duvarda asılı duruyor (Dat). O fotoğrafı duvara asıyor (Akk).',
              ar: 'اللوحة معلقة على الحائط (جر). هو يعلق الصورة على الحائط (نصب).',
              es: 'El cuadro cuelga de la pared (Dat). Él cuelga la foto en la pared (Akk).'
            },
            fluentTranslation: {
              en: 'The painting is hanging on the wall. He is hanging the photo on the wall.',
              fa: 'تابلوی نقاشی روی دیوار نصب است. او عکس را روی دیوار نصب می‌کند.',
              prs: 'نقاشی روی دیوار آویخته است. او عکس را به دیوار می‌آویزد.',
              tr: 'Tablo duvarda asılıdır. Adam fotoğrafı duvara asmaktadır.',
              ar: 'اللوحة معلقة على الجدار. يقوم هو بتعليق الصورة على الجدار.',
              es: 'La pintura está colgada en la pared. Él cuelga la fotografía en la pared.'
            }
          }
        ]
      },
      practiceTasks: [
        'Unterscheiden Sie: "Die Tasse steht auf dem Tisch" vs. "Ich stelle die Tasse auf den Tisch".',
        'Schreiben Sie fünf Sätze über Ihr Zimmer mit Wechselpräpositionen.'
      ]
    },
    videoClip: {
      title: 'Wegbeschreibung zum Kölner Rathaus',
      scenario: 'Ein Stadtführer erklärt Touristen den kürzesten Fußweg durch die historische Altstadt.',
      category: 'travel',
      duration: '02:15',
      germanTranscript: [
        'Vom Domplatz aus gehen Sie am besten durch die kleine Gasse Unter Goldschmied.',
        'Kommen wir dabei am Historischen Archiv vorbei?',
        'Ja, genau. Nach zweihundert Metern sehen Sie bereits den Rathausturm.',
        'Vielen herzlichen Dank für Ihre freundliche Hilfe!'
      ],
      translatedTranscript: [
        {
          en: 'From Cathedral Square, you best walk through the small lane Unter Goldschmied.',
          fa: 'از میدان کلیسای جامع، بهتر است از کوچه باریک Unter Goldschmied عبور کنید.',
          prs: 'از چوک کلیسای کلن، بهتر است از کوچه Unter Goldschmied بروید.',
          tr: 'Katedral meydanından en iyisi küçük Unter Goldschmied sokağından geçiniz.',
          ar: 'من ساحة الكاتدرائية، الأفضل السير عبر الزقاق الصغير.',
          es: 'Desde la plaza de la catedral, lo mejor es tomar el callejón Unter Goldschmied.'
        },
        {
          en: 'Do we pass by the Historical Archive on the way?',
          fa: 'آیا در مسیر از کنار آرشیو تاریخی هم رد می‌شویم؟',
          prs: 'آیا در راه از پهلوی آرشیف تاریخی عبور می‌کنیم؟',
          tr: 'Yolda Tarih Arşivi\'nin önünden geçer miyiz?',
          ar: 'هل سنمر في طريقنا بجوار الأرشيف التاريخي؟',
          es: '¿Pasamos en el camino por delante del Archivo Histórico?'
        },
        {
          en: 'Yes, exactly. After two hundred meters, you will already see the City Hall tower.',
          fa: 'بله دقیقاً. بعد از دویست متر، برج شهرداری را مشاهده خواهید کرد.',
          prs: 'بلی دقیقاً. بعد از دو صد متر، برج شاروالی را خواهید دید.',
          tr: 'Evet, aynen öyle. İki yüz metre sonra belediye kulesini göreceksiniz.',
          ar: 'نعم تماماً. بعد مئتي متر سترون برج البلدية أمامكم.',
          es: 'Sí, exacto. Tras doscientos metros ya verá la torre del ayuntamiento.'
        },
        {
          en: 'Thank you very much indeed for your kind assistance!',
          fa: 'بسیار متشکرم از راهنمایی و کمک دوستانه شما!',
          prs: 'یک جهان تشکر از کمک و رهنمایی صمیمانه تان!',
          tr: 'Nazik yardımınız için çok teşekkür ederim!',
          ar: 'شكراً جزيلاً لك على مساعدتك الكريمة!',
          es: '¡Muchísimas gracias por su amable ayuda!'
        }
      ]
    },
    examTip: {
      standard: 'A2 (Goethe-Zertifikat A2 & telc Deutsch A2)',
      module: 'Sprechen & Hören',
      tip: {
        en: 'In speaking tasks asking directions, remember standard polite formulas: "Entschuldigung, wie komme ich zu..." and "Könnten Sie mir sagen, wo...".',
        fa: 'در بخش شفاهی برای پرسیدن آدرس همیشه از عبارات مودبانه استاندارد استفاده کنید.',
        prs: 'در صحبت کردن، کلمات احترامی آدرس پرسان کردن را به کار ببرید.',
        tr: 'Konuşma sınavında yol sorarken kibar kalıpları mutlaka kullanın.',
        ar: 'في امتحان المحادثة عند السؤال عن الاتجاهات، استخدم العبارات اللبقة دائماً.',
        es: 'En la prueba oral, utiliza fórmulas de cortesía al pedir indicaciones de itinerario.'
      }
    },
    exercises: [
      {
        id: 'ex_a2_2_11_1',
        type: 'multiple_choice',
        instruction: {
          en: 'Choose the correct preposition and article for location (Wo?).',
          fa: 'حرف اضافه و آرتیکل صحیح را برای مکان ثابت (Wo?) انتخاب کنید.',
          prs: 'حرف اضافه و آرتیکل مناسب برای موقعیت ثابت را انتخاب نمایید.',
          tr: 'Konum belirten doğru edat ve artikeli seçin.',
          ar: 'اختر حرف الجر وأداة التعريف المناسبة للدلالة على المكان.',
          es: 'Elige la preposición y artículo correctos para la ubicación (Wo?).'
        },
        prompt: 'Wo liegt das Museum? - Es liegt direkt _____ Kölner Dom (Maskulin).',
        options: ['neben dem', 'neben den', 'neben das', 'neben der'],
        correctAnswer: 'neben dem',
        explanation: {
          en: '"Wo?" requires Dative. "Der Dom" becomes "dem Dom" in Dative masculine.',
          fa: 'پرسش Wo نیازمند حالت داتیو است. آرتیکل der Dom در حالت داتیو به dem Dom تبدیل می‌شود.',
          prs: 'سوال Wo نیاز به داتیف دارد. آرتیکل مذکر در داتیف "dem" می‌شود.',
          tr: '"Wo?" sorusu Dativ gerektirir. "Der Dom" Dativ halinde "dem Dom" olur.',
          ar: 'السؤال بـ "Wo?" يقتضي حالة الداتيف؛ فتتحول أداة المذكر "der Dom" إلى "dem Dom".',
          es: '"Wo?" requiere dativo. "Der Dom" (masculino) cambia a "dem Dom" en dativo.'
        }
      }
    ]
  },
  {
    id: 'a2_2_lek12',
    lektionNumber: 12,
    level: 'A2.2',
    title: 'Arbeit, Bewerbung und Berufsleben',
    subTitle: 'Das Vorstellungsgespräch, Höflichkeit mit Konjunktiv II und Arbeitsverträge',
    topic: 'Bewerbungsschreiben, Lebenslauf, Gehaltsverhandlung und Modalverben im Konjunktiv II',
    fotoHoergeschichte: {
      title: 'Foto-Hörgeschichte: Vorstellungsgespräch in Berlin',
      imagePrompt: 'A professional job interview in a sleek glass meeting room in Berlin with two interviewers smiling at a young applicant.',
      imageTheme: 'Vorstellungsgespräch Berlin',
      audioDuration: '02:35',
      transcript: [
        { speaker: 'Personalchef', text: 'Guten Tag, Frau Demir! Nehmen Sie bitte Platz. Wir haben Ihre Bewerbung mit großem Interesse gelesen.' },
        { speaker: 'Frau Demir', text: 'Guten Tag! Vielen Dank für die Einladung zum Vorstellungsgespräch.' },
        { speaker: 'Personalchef', text: 'Könnten Sie uns kurz schildern, welche Erfahrungen Sie im Projektmanagement mitbringen?' },
        { speaker: 'Frau Demir', text: 'Ich habe drei Jahre lang Softwareprojekte in einem internationalen Team koordiniert.' },
        { speaker: 'Personalchef', text: 'Das passt hervorragend zu unserem Profil. Ab wann könnten Sie bei uns anfangen?' }
      ],
      summary: {
        en: 'Ms. Demir attends a job interview in Berlin, presents her professional qualifications, and discusses starting dates.',
        fa: 'خانم دمیر در مصاحبه شغلی در برلین شرکت می‌کند، تجربیات کاری خود را ارائه می‌دهد و درباره تاریخ شروع به کار گفتگو می‌نماید.',
        prs: 'بانو دمیر در یک مصاحبه کاری در برلین تجربیات مسلکی خود را بیان نموده و روی آغاز کار صحبت می‌کند.',
        tr: 'Bayan Demir Berlin\'de iş mülakatına katılır ve tecrübelerini anlatır.',
        ar: 'تشارك السيدة دمير في مقابلة عمل في برلين وتعرض مؤهلاتها وخبراتها في إدارة المشاريع.',
        es: 'La señora Demir participa en una entrevista de trabajo en Berlín y expone su experiencia laboral.'
      }
    },
    sectionA: {
      title: 'Mussawi A: Sprechen & Dialog',
      focus: 'Sprechen & Hören (Im Vorstellungsgespräch überzeugen)',
      description: {
        en: 'Present your strengths, career trajectory, and professional qualifications persuasively.',
        fa: 'ارائه نقاط قوت، مسیر شغلی و سوابق حرفه‌ای با لحنی متقاعدکننده.',
        prs: 'تشریح نقاط قوت و سوابق تحصیلی و کاری در مصاحبه استخدام.',
        tr: 'İş mülakatında güçlü yönleri ve kariyer geçmişini ikna edici şekilde sunma.',
        ar: 'استعراض نقاط القوة والمسيرة المهنية بثقة أثناء مقابلة العمل.',
        es: 'Exponer puntos fuertes, trayectoria laboral y cualificaciones en entrevistas.'
      },
      content: 'Meine Stärken liegen in der Organisation und Teamarbeit. / Ich habe umfangreiche Kenntnisse im IT-Bereich.',
      audioText: 'Warum interessieren Sie sich gerade für eine Anstellung in unserem Unternehmen?',
      practiceTasks: [
        'Formulieren Sie Antworten auf klassische Bewerbungsfragen.',
        'Begründen Sie Ihre Motivation für einen bestimmten Beruf.'
      ]
    },
    sectionB: {
      title: 'Mussawi B: Wortschatz & Hören',
      focus: 'Hören & Wortschatz (Arbeitsvertrag & Konditionen)',
      description: {
        en: 'Key contractual terms: probation period, vacation days, gross/net salary, and working hours.',
        fa: 'اصطلاحات قرارداد کار: دوره آزمایشی، مرخصی سالانه، حقوق ناخالص و خالص و ساعات کاری.',
        prs: 'اصطلاحات قرارداد کاری: دوره آزمایشی، رخصتی سالانه، معاش ناخالص و خالص و ساعات کار.',
        tr: 'İş sözleşmesi terimleri: deneme süresi, tatil hakkı, brüt/net maaş ve çalışma saatleri.',
        ar: 'مصطلحات عقد العمل: فترة التجربة، الإجازات السنوية، الراتب الإجمالي والصافي.',
        es: 'Términos del contrato de trabajo: periodo de prueba, vacaciones, salario bruto/neto.'
      },
      content: 'die Probezeit, das Bruttogehalt, das Nettogehalt, die Arbeitszeit, der Urlaubsanspruch, die Kündigungsfrist.',
      audioText: 'Die wöchentliche Arbeitszeit beträgt 40 Stunden bei einem Urlaubsanspruch von 30 Arbeitstagen im Jahr.',
      practiceTasks: [
        'Unterscheiden Sie zwischen Brutto- und Nettolohn.',
        'Prüfen Sie die Bedingungen eines Musterarbeitsvertrags.'
      ]
    },
    sectionC: {
      title: 'Mussawi C: Alltagskommunikation',
      focus: 'Sprechen & Dialoge (Höfliche Bitten & Anfragen mit Konjunktiv II)',
      description: {
        en: 'Communicate politely in the workplace using "könnten" and "würden".',
        fa: 'مکالمه مودبانه در محیط کار با افعال وجه التزامی könnten و würden.',
        prs: 'گفتگوی مؤدبانه و رسمی در محیط کار با افعال könnten و würden.',
        tr: 'İş ortamında "könnten" ve "würden" ile nazik ricalarda bulunma.',
        ar: 'التواصل اللبق في بيئة العمل باستخدام صيغة التهذيب (könnten & würden).',
        es: 'Formular peticiones y solicitudes educadas en el entorno laboral con Konjunktiv II.'
      },
      content: 'Könnten Sie mir bitte die Projektunterlagen zusenden? / Würden Sie das Protokoll prüfen?',
      audioText: 'Hätten Sie heute Nachmittag kurz Zeit für eine kurze Abstimmung?',
      practiceTasks: [
        'Wandeln Sie Aufforderungen in höfliche Bitten um.',
        'Bitten Sie einen Kollegen um Unterstützung.'
      ]
    },
    sectionD: {
      title: 'Mussawi D: Leseverstehen & Text',
      focus: 'Lesen & Textanalyse (Stellenanzeige & Anforderungsprofil)',
      description: {
        en: 'Analyze job vacancies, requirements, tasks, and application instructions.',
        fa: 'تحلیل آگهی‌های استخدام، شرح وظایف، نیازمندی‌ها و مدارک درخواستی.',
        prs: 'تحلیل اعلانات استخدام کار، شرایط لازم و نحوه فرستادن اسناد درخواست.',
        tr: 'İş ilanlarını, aranan nitelikleri ve başvuru koşullarını analiz etme.',
        ar: 'تحليل إعلانات الوظائف والمهام المطلوبة ومواصفات المترشح المثالي.',
        es: 'Análisis de ofertas de empleo, perfiles requeridos y requisitos de solicitud.'
      },
      content: 'Stellenanzeige Sachbearbeiter/in.',
      readingText: {
        type: 'Online-Stellenanzeige',
        title: 'Müller Logistics GmbH sucht: Sachbearbeiter/in Kundenservice (m/w/d)',
        body: 'Ihre Aufgaben: Betreuung von Firmenkunden, Bearbeitung von Reklamationen und Auftragsabwicklung in SAP. Ihr Profil: Abgeschlossene kaufmännische Ausbildung, sehr gute Deutschkenntnisse in Wort und Schrift (mindestens B1/B2), sicherer Umgang mit MS Office und Teamgeist. Wir bieten: Einen unbefristeten Arbeitsvertrag, 30 Tage Urlaub, betriebliche Altersvorsorge und flexible Gleitzeit.'
      },
      practiceTasks: [
        'Welche Sprachkenntnisse werden in der Anzeige verlangt?',
        'Welche Zusatzleistungen bietet das Unternehmen?'
      ]
    },
    sectionE: {
      title: 'Mussawi E: Grammatik & Schreiben',
      focus: 'Grammatik & Schreiben (Höfliche Formeln im Konjunktiv II)',
      description: {
        en: 'Master polite requests: könnten Sie..., würden Sie bitte..., hätten Sie...',
        fa: 'تسلط بر عبارات مودبانه درخواست در Konjunktiv II: könnten Sie..., würden Sie bitte...',
        prs: 'یادگیری فرمول‌های خواهش مؤدبانه در زمان التزامی (Konjunktiv II).',
        tr: 'Konjunktiv II ile nazik rica ve dilek cümleleri kurma.',
        ar: 'صياغة الطلبات المهذبة بصيغة Konjunktiv II في الخطابات الرسمية.',
        es: 'Uso de Konjunktiv II para peticiones corteses y sugerencias formales.'
      },
      content: 'Formel: Könnten/Würden + Subjekt + (...) + Infinitiv am Satzende.',
      grammarRule: {
        id: 'a2_2_konjunktiv_rule',
        level: 'A2.2',
        germanTitle: 'Konjunktiv II: Höfliche Bitten (könnten / würden)',
        formula: 'Könnten / Würden + Subjekt + (...) + Infinitiv?',
        explanation: {
          en: 'In German, the imperative sounds harsh in formal or workplace situations. Instead, Konjunktiv II with "könnten" or "würden + Infinitiv" conveys maximum politeness and respect.',
          fa: 'در زبان آلمانی جملات امری در محیط کار ممکن است خشک یا دستوری به نظر برسند. استفاده از Konjunktiv II با könnten یا würden نهایت ادب و احترام را نشان می‌دهد.',
          prs: 'در محیط کار در آلمان به جای جمله امری از könnten یا würden استفاده می‌شود تا کلام مؤدبانه و رسمی باشد.',
          tr: 'Almancada emir kipi kaba duyulabilir; iş hayatında nezaket için Konjunktiv II (könnten / würden) tercih edilir.',
          ar: 'تعد صيغة الأمر جافة في التعاملات المهنية، لذلك يُفضل استخدام Konjunktiv II للتعبير عن غاية التهذيب والاحترام.',
          es: 'En situaciones laborales, el imperativo resulta tajante; por ello se emplea Konjunktiv II (könnten / würden) para maximizar la cortesía.'
        },
        examples: [
          {
            german: 'Könnten Sie mir bitte die Rechnung per E-Mail schicken?',
            formulaBreakdown: 'Könnten (Konjunktiv II) + Sie (S) + mir (Dat) + die Rechnung (Akk) + schicken (Infinitiv)?',
            literalTranslation: {
              en: 'Could you to-me please the invoice by email send?',
              fa: 'می‌توانستید به من لطفاً فاکتور را با ایمیل بفرستید؟',
              prs: 'آیا ممکن است لطف نموده بل حساب را با ایمیل برایم بفرستید؟',
              tr: 'Faturayı bana e-posta ile gönderebilir miydiniz lütfen?',
              ar: 'هل بإمكانك من فضلك إرسال الفاتورة لي عبر البريد الإلكتروني؟',
              es: '¿Podría enviarme la factura por correo electrónico, por favor?'
            },
            fluentTranslation: {
              en: 'Could you please send me the invoice by email?',
              fa: 'ممکن است لطفاً فاکتور را از طریق ایمیل برای من ارسال کنید؟',
              prs: 'آیا لطف نموده می‌توانید صورت‌حساب را با ایمیل برایم ارسال کنید؟',
              tr: 'Faturayı e-postayla gönderebilir misiniz lütfen?',
              ar: 'هل يمكن لحضرتك إرسال الفاتورة لي عبر البريد الإلكتروني لو سمحت؟',
              es: '¿Sería tan amable de enviarme la factura por correo electrónico?'
            }
          }
        ]
      },
      practiceTasks: [
        'Formulieren Sie fünf höfliche Bitten an Ihren Vorgesetzten.',
        'Schreiben Sie eine formelle Bewerbungs-E-Mail.'
      ]
    },
    videoClip: {
      title: 'Vorstellungsgespräch: Nachfragen zum Aufgabengebiet',
      scenario: 'Ein Bewerber stellt eigene fundierte Fragen zur Teamstruktur und Weiterbildungsmöglichkeiten.',
      category: 'workplace',
      duration: '02:40',
      germanTranscript: [
        'Haben Sie noch eigene Fragen an uns, Herr Yilmaz?',
        'Ja, sehr gern. Welche Weiterbildungsmöglichkeiten bietet Ihr Unternehmen an?',
        'Wir unterstützen regelmäßige Zertifizierungen und Sprachkurse vollumfänglich.',
        'Das ist mir sehr wichtig für meine fachliche Entwicklung. Vielen Dank!'
      ],
      translatedTranscript: [
        {
          en: 'Do you have any questions for us, Mr. Yilmaz?',
          fa: 'آیا سوالی از ما دارید، آقای ییلماز؟',
          prs: 'آیا شما هم سوالی از ما دارید، آقای ایلماز؟',
          tr: 'Bize sormak istediğiniz sorularınız var mı, Bay Yılmaz?',
          ar: 'هل لديك أي أسئلة تود طرحها علينا يا سيد يلماز؟',
          es: '¿Tiene alguna pregunta para nosotros, señor Yilmaz?'
        },
        {
          en: 'Yes, gladly. What further training opportunities does your enterprise offer?',
          fa: 'بله، با کمال میل. شرکت شما چه فرصت‌هایی برای آموزش‌های تکمیلی فراهم می‌کند؟',
          prs: 'بلی، شرکت شما چه امکاناتی برای دوره‌های آموزشی مسلکی دارد؟',
          tr: 'Evet, şirketiniz ne tür mesleki gelişim fırsatları sunuyor?',
          ar: 'نعم بكل سرور. ما هي فرص التطوير المهني والتدريب التي تقدمها شركتكم؟',
          es: 'Sí, con gusto. ¿Qué oportunidades de formación continua ofrece su empresa?'
        },
        {
          en: 'We fully support regular certifications and language courses.',
          fa: 'ما از گواهینامه‌های دوره‌ای و دوره‌های زبان به طور کامل حمایت می‌کنیم.',
          prs: 'ما تمام مصارف دوره‌های تخصصی و صنف‌های زبان را تمویل می‌نماییم.',
          tr: 'Düzenli sertifikasyonları ve dil kurslarını tümüyle destekliyoruz.',
          ar: 'نحن ندعم بالكامل الشهادات المهنية الدورية ودورات اللغات.',
          es: 'Financiamos íntegramente certificaciones periódicas y cursos de idiomas.'
        },
        {
          en: 'That is very important to me for my professional development. Thank you!',
          fa: 'این برای پیشرفت شغلی من بسیار بااهمیت است. متشکرم!',
          prs: 'این برای ارتقای مسلکی من بسیار ارزش دارد. تشکر!',
          tr: 'Mesleki gelişimim için bu çok önemli. Teşekkürler!',
          ar: 'هذا أمر بالغ الأهمية لتطوري المهني. شكراً جزيلاً!',
          es: 'Eso es primordial para mi desarrollo profesional. ¡Muchas gracias!'
        }
      ]
    },
    examTip: {
      standard: 'A2 (Goethe-Zertifikat A2 & telc Deutsch A2)',
      module: 'Schreiben & Sprechen',
      tip: {
        en: 'In formal emails, always use polite salutations ("Sehr geehrte Damen und Herren") and conclude with "Mit freundlichen Grüßen".',
        fa: 'در ایمیل‌های رسمی همیشه با احترام آغاز کنید و با Mit freundlichen Grüßen به پایان برسانید.',
        prs: 'در ایمیل‌های رسمی همیشه کلمات آغازین محترمانه و Mit freundlichen Grüßen را در پایان بنویسید.',
        tr: 'Resmi yazışmalarda "Sehr geehrte..." ve "Mit freundlichen Grüßen" kalıplarını unutmayın.',
        ar: 'في الرسائل الرسمية، احرص على البدء بتحية لائقة والختام بعبارة "مع خالص التحيات".',
        es: 'En correos formales, utiliza siempre encabezados protocolarios y despídete con "Mit freundlichen Grüßen".'
      }
    },
    exercises: [
      {
        id: 'ex_a2_2_12_1',
        type: 'multiple_choice',
        instruction: {
          en: 'Transform the command into a polite request with Konjunktiv II.',
          fa: 'جمله امری را به درخواست مودبانه با Konjunktiv II تبدیل کنید.',
          prs: 'جمله امری را به یک خواهش مؤدبانه تبدیل نمایید.',
          tr: 'Emir cümlesini Konjunktiv II ile nazik bir ricaya dönüştürün.',
          ar: 'حول صيغة الأمر إلى طلب مهذب باستخدام Konjunktiv II.',
          es: 'Transforma la orden en una petición cortés con Konjunktiv II.'
        },
        prompt: 'Bringen Sie mir den Bericht! -> _____ Sie mir bitte den Bericht bringen?',
        options: ['Könnten', 'Müssen', 'Können', 'Sollen'],
        correctAnswer: 'Könnten',
        explanation: {
          en: '"Könnten Sie bitte... bringen?" is the standard polite formula in Konjunktiv II.',
          fa: '"Könnten Sie bitte... bringen?" فرمول استاندارد درخواست مودبانه در زبان آلمانی است.',
          prs: 'عبارت "Könnten Sie bitte..." استندرد خواهش مؤدبانه است.',
          tr: '"Könnten Sie bitte... bringen?" Konjunktiv II\'de standart nezaket kalıbıdır.',
          ar: 'تعتبر صيغة "Könnten Sie bitte... bringen?" الأسلوب القياسي للطلب المهذب.',
          es: '"Könnten Sie bitte... bringen?" es la fórmula clásica de cortesía en Konjunktiv II.'
        }
      }
    ]
  },
  {
    id: 'a2_2_lek13',
    lektionNumber: 13,
    level: 'A2.2',
    title: 'Medien, Konsum und Reklamation',
    subTitle: 'Online-Shopping, Beschwerdebrief und indirekte Fragesätze mit "ob" und "W-Wort"',
    topic: 'Warenrücksendung, Garantie, Kundenservice und indirekte Fragesätze',
    fotoHoergeschichte: {
      title: 'Foto-Hörgeschichte: Reklamation im Elektronikfachmarkt in Leipzig',
      imagePrompt: 'A customer service counter in a modern electronics store in Leipzig where a customer shows a malfunctioning tablet to a technician.',
      imageTheme: 'Kundenservice Leipzig',
      audioDuration: '02:20',
      transcript: [
        { speaker: 'Kunde', text: 'Guten Tag! Ich habe vor zwei Wochen dieses Tablet bei Ihnen gekauft, aber das Display flackert.' },
        { speaker: 'Kundenservice', text: 'Guten Tag! Haben Sie den Kassenbon und die Originalverpackung dabei?' },
        { speaker: 'Kunde', text: 'Ja, hier ist der Beleg. Ich möchte wissen, ob das Gerät umgetauscht oder repariert wird.' },
        { speaker: 'Kundenservice', text: 'Da noch Herstellergarantie besteht, können wir Ihnen das Tablet sofort gegen ein Neugerät umtauschen.' }
      ],
      summary: {
        en: 'A customer reports a defective tablet at an electronics store and receives an immediate replacement under warranty.',
        fa: 'مشتری تبلت معیوب را به خدمات پس از فروش فروشگاه لوازم الکترونیکی در لایپزیگ تحویل می‌دهد و تحت گارانتی دستگاه نو دریافت می‌کند.',
        prs: 'یک خریدار تبلت خراب‌شده را به خدمات مشتریان نشان می‌دهد و به اساس گارانتی یک تبلت نو دریافت می‌کند.',
        tr: 'Müşteri arızalı tableti mağazaya götürür ve garanti kapsamında yenisiyle değiştirir.',
        ar: 'يعيد العميل جهازاً لوحياً معيباً لمركز خدمة العملاء ويحصل على جهاز بديل تحت الضمان.',
        es: 'Un cliente reclama una tableta defectuosa en una tienda de electrónica y obtiene un reemplazo bajo garantía.'
      }
    },
    sectionA: {
      title: 'Mussawi A: Sprechen & Dialog',
      focus: 'Sprechen & Hören (Im Kundenservice reklamieren)',
      description: {
        en: 'Express dissatisfaction with a product or service politely yet firmly.',
        fa: 'بیان نارضایتی از کالا یا خدمات به شیوه‌ای مودبانه اما قاطع.',
        prs: 'شکایت کردن مؤدبانه و رسمی در مورد اجناس خراب یا خدمات نامناسب.',
        tr: 'Kusurlu ürün veya hizmet hakkında nazik ve kararlı şekilde şikayette bulunma.',
        ar: 'الاعتراض والشكوى من عيوب المنتجات بأسلوب مهذب وحازم.',
        es: 'Reclamar y expresar insatisfacción sobre un producto defectuoso de forma educada y firme.'
      },
      content: 'Das Gerät funktioniert leider nicht einwandfrei. / Ich möchte vom Kaufvertrag zurücktreten.',
      audioText: 'Können Sie mir sagen, wann die Reparatur voraussichtlich abgeschlossen ist?',
      practiceTasks: [
        'Reklamieren Sie ein fehlerhaft geliefertes Kleidungsstück.',
        'Verlangen Sie eine Rückerstattung des Kaufpreises.'
      ]
    },
    sectionB: {
      title: 'Mussawi B: Wortschatz & Hören',
      focus: 'Hören & Wortschatz (Einkauf, Garantie & Reklamation)',
      description: {
        en: 'Terms: receipt, warranty, exchange, refund, defective, customer hotline.',
        fa: 'واژگان: فاکتور خرید، گارانتی، تعویض، استرداد وجه، معیوب و خط ویژه مشتریان.',
        prs: 'لغات: بل خرید، ضمانت‌نامه (گارانتی)، بدل کردن، پس گرفتن پول و جنس عوارض‌دار.',
        tr: 'Kavramlar: fiş/fatura, garanti, değişim, iade, arızalı ve müşteri hizmetleri.',
        ar: 'مصطلحات: إيصال الشراء، الضمان، الاستبدال، استرجاع المبلغ، وجهاز معيب.',
        es: 'Conceptos: tique de compra, garantía, cambio, reembolso, defectuoso y atención al cliente.'
      },
      content: 'der Kassenbon, die Garantie, der Umtausch, die Rückerstattung, defekt, die Kundennummer.',
      audioText: 'Innerhalb der gesetzlichen Frist von 14 Tagen können Sie online bestellte Waren ohne Angabe von Gründen zurücksenden.',
      practiceTasks: [
        'Hören Sie ein Telefonat mit dem Kundenservice und füllen Sie das Formular aus.',
        'Erklären Sie den Unterschied zwischen Garantie und Gewährleistung.'
      ]
    },
    sectionC: {
      title: 'Mussawi C: Alltagskommunikation',
      focus: 'Sprechen & Dialoge (Indirekte Fragen stellen)',
      description: {
        en: 'Ask polite indirect questions using "ob" and question words (wie, wann, wo).',
        fa: 'طرح پرسش‌های مودبانه غیرمستقیم با ob و کلمات پرسشی (wie, wann, wo).',
        prs: 'پرسیدن سوالات غیرمستقیم و مؤدبانه با ob و کلمات سوالیه.',
        tr: '"ob" ve soru kelimeleri ile dolaylı, nazik soru cümleleri kurma.',
        ar: 'طرح الأسئلة غير المباشرة المهذبة باستخدام "ob" وأدوات الاستفهام.',
        es: 'Formular preguntas indirectas de cortesía con "ob" y partículas interrogativas.'
      },
      content: 'Können Sie mir sagen, wie viel das kostet? / Ich möchte wissen, ob das Geschäft sonntags geöffnet ist.',
      audioText: 'Darf ich fragen, wer für diese Reklamation zuständig ist?',
      practiceTasks: [
        'Wandeln Sie direkte Fragen in indirekte Fragen um.',
        'Erfragen Sie Öffnungszeiten und Liefertermine.'
      ]
    },
    sectionD: {
      title: 'Mussawi D: Leseverstehen & Text',
      focus: 'Lesen & Textanalyse (Widerrufsbelehrung im Online-Shop)',
      description: {
        en: 'Understand consumer cancellation rights and return instructions for online purchases.',
        fa: 'درک حقوق فسخ قرارداد مصرف‌کننده و دستورالعمل‌های مرجوعی کالا در خریدهای اینترنتی.',
        prs: 'فهمیدن شرایط پس دادن جنس و فسخ قرارداد در خرید آنلاین.',
        tr: 'İnternet alışverişlerinde cayma hakkı ve iade koşullarını okuma.',
        ar: 'فهم سياسة الإرجاع وحق المستهلك في فسخ العقد بالمتجر الإلكتروني.',
        es: 'Comprensión del derecho de desistimiento y condiciones de devolución online.'
      },
      content: 'Widerrufsbelehrung eines Online-Händlers.',
      readingText: {
        type: 'Widerrufsbelehrung',
        title: 'Widerrufsrecht für Verbraucher beim Online-Kauf',
        body: 'Sie haben das Recht, binnen vierzehn Tagen ohne Angabe von Gründen diesen Vertrag zu widerrufen. Die Widerrufsfrist beträgt vierzehn Tage ab dem Tag, an dem Sie oder ein von Ihnen benannter Dritter die Waren in Besitz genommen haben. Um Ihr Widerrufsrecht auszuüben, müssen Sie uns mittels einer eindeutigen Erklärung (z.B. per E-Mail) über Ihren Entschluss informieren.'
      },
      practiceTasks: [
        'Wie viele Tage beträgt die gesetzliche Widerrufsfrist?',
        'Muss der Käufer einen Grund für den Widerruf angeben?'
      ]
    },
    sectionE: {
      title: 'Mussawi E: Grammatik & Schreiben',
      focus: 'Grammatik & Schreiben (Indirekte Fragesätze mit "ob" und "W-Wort")',
      description: {
        en: 'Nebensätze: Verb at the end! Ja/Nein-Frage -> "ob...", W-Frage -> "W-Wort...".',
        fa: 'جملات پیرو غیرمستقیم: فعل در انتها! برای سوالات بله/خیر از "ob..." و برای سوالات با واژه پرسشی از خود آن واژه استفاده می‌شود.',
        prs: 'جملات فرعی: فعل در اخیر جمله می‌آید! برای سوال بلی/نخیر از "ob" و برای سوالات دیگر از کلمه سوالیه استفاده می‌شود.',
        tr: 'Dolaylı sorularda fiil sonda yer alır! Evet/Hayır sorularında "ob", diğerlerinde soru kelimesi kullanılır.',
        ar: 'الجمل الثانوية: الفعل في آخر الجملة! للأسئلة بنعم/لا نستخدم "ob"، وللأسئلة الاستفهامية نستخدم أداة الاستفهام.',
        es: 'Oraciones subordinadas interrogativas indirectas: ¡verbo al final! Sí/No -> "ob", con partícula -> se mantiene la partícula.'
      },
      content: 'Formel: Hauptsatz, + ob / W-Wort + Subjekt + ... + Verb am Ende.',
      grammarRule: {
        id: 'a2_2_indirekt_rule',
        level: 'A2.2',
        germanTitle: 'Indirekte Fragesätze (ob / W-Wort)',
        formula: 'Hauptsatz, ob / W-Wort + Subjekt + (...) + Verb (Endposition).',
        explanation: {
          en: 'Indirect questions sound polite and are structured as subordinate clauses. The conjugated verb moves to the very end of the clause.',
          fa: 'پرسش‌های غیرمستقیم لحنی مودبانه دارند و به عنوان جمله پیرو ساخته می‌شوند که در آن‌ها فعل صرف‌شده در آخرین جایگاه قرار می‌گیرد.',
          prs: 'سوالات غیرمستقیم مؤدبانه هستند و فعل صرف‌شده در اخیر جمله می‌آید.',
          tr: 'Dolaylı sorular kibardır ve yan cümle kurallarına uyar; çekimli fiil cümlenin en sonuna gider.',
          ar: 'الأسئلة غير المباشرة تبدو أكثر تهذيباً وتخضع لقواعد الجمل الفرعية حيث يقع الفعل المصرف في آخر الجملة.',
          es: 'Las preguntas indirectas suenan corteses y siguen la sintaxis de subordinada: el verbo conjugado va al final absoluto.'
        },
        examples: [
          {
            german: 'Können Sie mir sagen, wann das Paket ankommt? / Ich weiß nicht, ob das Geschäft noch geöffnet ist.',
            formulaBreakdown: 'Können Sie mir sagen [Hauptsatz], + wann [W-Wort] + das Paket [S] + ankommt [Verb am Ende]?',
            literalTranslation: {
              en: 'Can you to-me say, when the package arrives?',
              fa: 'می‌توانید به من بگویید، چه زمانی بسته می‌رسد؟',
              prs: 'می‌توانید برایم بگویید، بسته چه وقت می‌رسد؟',
              tr: 'Bana paketin ne zaman ulaşacağını söyleyebilir misiniz?',
              ar: 'هل بإمكانك إخباري متى يصل الطرد؟',
              es: '¿Puede decirme cuándo llega el paquete?'
            },
            fluentTranslation: {
              en: 'Could you tell me when the package will arrive?',
              fa: 'ممکن است به من بفرمایید بسته چه زمانی تحویل داده می‌شود؟',
              prs: 'آیا لطف نموده می‌توانید بگویید که پارسل چه وقت می‌رسد؟',
              tr: 'Paketin ne zaman teslim edileceğini söyleyebilir misiniz?',
              ar: 'هل تخبرني لو سمحت متى سيصل الطرد البريدي؟',
              es: '¿Podría decirme cuándo llegará el paquete?'
            }
          }
        ]
      },
      practiceTasks: [
        'Verbinden Sie: "Kommt der Bus pünktlich?" -> "Ich möchte wissen, ob..."',
        'Verfassen Sie eine schriftliche Reklamations-E-Mail an einen Online-Shop.'
      ]
    },
    videoClip: {
      title: 'Telefonische Reklamation beim Versandhandel',
      scenario: 'Ein Kunde klärt telefonisch einen Transportschaden und fordert ein Rücksendeetikett an.',
      category: 'consumer',
      duration: '02:30',
      germanTranscript: [
        'Guten Tag! Ich rufe wegen meiner Bestellung Nummer 4892 an. Die Ware ist leider beschädigt angekommen.',
        'Das tut uns sehr leid! Wurde das Paket äußerlich beschädigt angeliefert?',
        'Ja, der Karton war eingedrückt. Wie läuft die Rücksendung ab?',
        'Ich sende Ihnen sofort ein kostenloses Retourenlabel per E-Mail zu.'
      ],
      translatedTranscript: [
        {
          en: 'Hello! I am calling about my order number 4892. Unfortunately, the goods arrived damaged.',
          fa: 'سلام! در خصوص سفارش شماره ۴۸۹۲ تماس می‌گیرم. متاسفانه کالا آسیب‌دیده تحویل شد.',
          prs: 'سلام! من در مورد فرمایش نمره ۴۸۹۲ زنگ می‌زنم. جنس خراب به دستم رسیده است.',
          tr: 'Merhaba! 4892 numaralı siparişim hakkında arıyorum. Ürün maalesef hasarlı geldi.',
          ar: 'مرحباً! أتصل بخصوص طلبي رقم 4892. للأسف وصلت البضاعة متضررة.',
          es: '¡Hola! Llamo en relación con mi pedido 4892. La mercancía ha llegado dañada.'
        },
        {
          en: 'We are very sorry about that! Was the outer box visibly damaged upon delivery?',
          fa: 'بسیار از این بابت پوزش می‌طلبیم! آیا کارتن بیرونی هنگام تحویل آسیب دیده بود؟',
          prs: 'بسیار معذرت می‌خواهیم! آیا کارتن از بیرون ضربه دیده بود؟',
          tr: 'Çok üzgünüz! Kutu teslim edildiğinde dıştan hasarlı mıydı?',
          ar: 'نعتذر بشدة عن ذلك! هل كان الصندوق الخارجي متضرراً عند الاستلام؟',
          es: '¡Lo sentimos mucho! ¿Estaba la caja visiblemente dañada al momento de la entrega?'
        },
        {
          en: 'Yes, the carton was crushed. How does the return process work?',
          fa: 'بله، جعبه فرورفته بود. فرآیند مرجوعی کالا چگونه انجام می‌شود؟',
          prs: 'بلی، کارتن له شده بود. جنس را چطور دوباره پس بفرستم؟',
          tr: 'Evet, koli ezilmişti. İade süreci nasıl işliyor?',
          ar: 'نعم، كان الطرد مضغوطاً. كيف تتم عملية إعادة المنتج؟',
          es: 'Sí, el embalaje estaba abollado. ¿Cómo funciona el procedimiento de devolución?'
        },
        {
          en: 'I will send you a free return shipping label via email right away.',
          fa: 'من فوراً برچسب بازگشت کالا (رایگان) را برایتان ایمیل می‌کنم.',
          prs: 'من فوراً لیبل بازگشت رایگان را از طریق ایمیل برایتان ارسال می‌کنم.',
          tr: 'Size hemen e-posta ile ücretsiz bir iade kargo etiketi gönderiyorum.',
          ar: 'سأرسل لك ملصق شحن الإرجاع المجاني عبر البريد الإلكتروني على الفور.',
          es: 'Le envío de inmediato una etiqueta de devolución gratuita por correo electrónico.'
        }
      ]
    },
    examTip: {
      standard: 'A2 (Goethe-Zertifikat A2 & telc Deutsch A2)',
      module: 'Schreiben & Hören',
      tip: {
        en: 'In A2 writing, complaint emails should always reference the order number ("Bestellnummer"), item description, and clear solution proposal ("Umtausch oder Erstattung").',
        fa: 'در نامه‌های شکایت حتماً شماره سفارش، نام کالا و خواسته مشخص (تعویض یا بازپرداخت وجه) را ذکر کنید.',
        prs: 'در ایمیل شکایت حتماً نمره فرمایش، نام کالا و خواسته‌تان (بدل کردن یا پس گرفتن پول) را بنویسید.',
        tr: 'Şikayet maillerinde sipariş numarası, ürün adı ve talep (değişim/iade) belirtilmelidir.',
        ar: 'في رسائل الشكاوى احرص على ذكر رقم الطلب ووصف المنتج والمطالبة الصريحة (بالاستبدال أو استرجاع المبلغ).',
        es: 'En los correos de reclamación, indica siempre el número de pedido, el producto y la solución esperada (cambio o reembolso).'
      }
    },
    exercises: [
      {
        id: 'ex_a2_2_13_1',
        type: 'multiple_choice',
        instruction: {
          en: 'Form the correct indirect question with "ob".',
          fa: 'جمله سوالی غیرمستقیم صحیح با "ob" را بسازید.',
          prs: 'جمله سوالیه غیرمستقیم درست با "ob" را انتخاب کنید.',
          tr: '"ob" ile doğru dolaylı soruyu belirleyin.',
          ar: 'اختر الصياغة الصحيحة للسؤال غير المباشر باستخدام "ob".',
          es: 'Forma la pregunta indirecta correcta con "ob".'
        },
        prompt: 'Ist der Kundenservice noch erreichbar? -> Können Sie mir sagen, _____?',
        options: [
          'ob der Kundenservice noch erreichbar ist',
          'ob ist der Kundenservice noch erreichbar',
          'dass der Kundenservice erreichbar ist',
          'wann der Kundenservice ist erreichbar'
        ],
        correctAnswer: 'ob der Kundenservice noch erreichbar ist',
        explanation: {
          en: 'In subordinate clauses with "ob", the verb "ist" must be placed at the very end.',
          fa: 'در جملات پیرو با ob، فعل صرف‌شده (ist) باید در انتهای جمله قرار گیرد.',
          prs: 'در جمله فرعی با ob، فعل "ist" در اخیر جمله قرار می‌گیرد.',
          tr: '"ob" ile başlayan yan cümlelerde çekimli fiil "ist" en sona gider.',
          ar: 'في الجمل الفرعية المصدرة بـ "ob"، يجب أن يأتي الفعل "ist" في نهاية الجملة.',
          es: 'En las subordinadas con "ob", el verbo "ist" debe situarse al final de la oración.'
        }
      }
    ]
  },
  {
    id: 'a2_2_lek14',
    lektionNumber: 14,
    level: 'A2.2',
    title: 'Feste, Bräuche und Lebensstationen',
    subTitle: 'Hochzeiten, Geburtstage, Jubiläen und temporale Nebensätze mit "wenn" und "als"',
    topic: 'Traditionen in DACH-Ländern, Glückwünsche, Gastgeschenke und temporale Konjunktionen',
    fotoHoergeschichte: {
      title: 'Foto-Hörgeschichte: Eine deutsch-afghanische Hochzeitsfeier in Hamburg',
      imagePrompt: 'A joyous multicultural wedding banquet in a festively decorated hall in Hamburg with music, flower arrangements, and smiling guests celebrating.',
      imageTheme: 'Hochzeit in Hamburg',
      audioDuration: '02:40',
      transcript: [
        { speaker: 'Trauzeuge', text: 'Liebe Gäste, wir feiern heute die Hochzeit von Jonas und Maryam! Lasst uns die Gläser erheben!' },
        { speaker: 'Maryam', text: 'Vielen Dank an euch alle, dass ihr diesen wunderschönen Tag mit uns teilt.' },
        { speaker: 'Jonas', text: 'Als ich Maryam vor drei Jahren an der Universität kennenlernte, wusste ich sofort, dass sie mein Lebensmensch ist.' },
        { speaker: 'Gäste', text: 'Herzlichen Glückwunsch dem Brautpaar! Alles Gute für eure gemeinsame Zukunft!' }
      ],
      summary: {
        en: 'Jonas and Maryam celebrate their wedding banquet in Hamburg with family and friends, sharing toasts and memories.',
        fa: 'یوناس و مریم جشن عروسی خود را در هامبورگ با حضور خانواده و دوستان جشن می‌گیرند و خاطرات آشنایی‌شان را به اشتراک می‌گذارند.',
        prs: 'یونس و مریم محفل عروسی پرشکوه خود را در هامبورگ همراه با اقارب و دوستان تجلیل می‌نمایند.',
        tr: 'Jonas ve Maryam Hamburg\'da aile ve dostlarıyla düğünlerini kutlar ve anılarını paylaşırlar.',
        ar: 'يحتفل يوناس ومريم بزفافهما في هامبورغ وسط الأهل والأصدقاء ويتبادلون التهاني والذكريات الجميلة.',
        es: 'Jonas y Maryam celebran su banquete de boda en Hamburgo con familiares y amigos, compartiendo brindis y recuerdos.'
      }
    },
    sectionA: {
      title: 'Mussawi A: Sprechen & Dialog',
      focus: 'Sprechen & Hören (Glückwünsche & Einladungen formulieren)',
      description: {
        en: 'Congratulate warmly on birthdays, weddings, new jobs, and births, and accept or decline invitations.',
        fa: 'تبریک صمیمانه به مناسبت تولد، عروسی، موفقیت شغلی و تولد نوزاد و پذیرش یا رد مودبانه دعوت.',
        prs: 'تبریک گفتن صمیمانه برای محافل خوشی و قبول یا معذرت‌خواهی مودبانه از دعوت‌نامه‌ها.',
        tr: 'Doğum günü, düğün ve başarılarda tebrik etme; davetleri kabul veya mazeretle reddetme.',
        ar: 'تقديم التهاني القلبية في المناسبات والأعراس وقبول الدعوات أو الاعتذار عنها بلباقة.',
        es: 'Felicitar afectuosamente en cumpleaños, bodas y logros, y aceptar o declinar invitaciones formalmente.'
      },
      content: 'Herzlichen Glückwunsch zur Hochzeit! / Ich wünsche euch alles erdenklich Gute für die Zukunft!',
      audioText: 'Vielen Dank für die Einladung! Wir kommen sehr gern zu eurer Feier.',
      practiceTasks: [
        'Schreiben Sie eine Glückwunschkarte zur Hochzeit.',
        'Antworten Sie auf eine Einladung zum 50. Geburtstag.'
      ]
    },
    sectionB: {
      title: 'Mussawi B: Wortschatz & Hören',
      focus: 'Hören & Wortschatz (Feste & Traditionen im Jahreskreis)',
      description: {
        en: 'Traditions in Germany, Austria, and Switzerland: Silvester, Karneval, Ostern, Weihnachten.',
        fa: 'سنت‌ها و جشن‌ها در آلمان، اتریش و سوئیس: سال نو، کارناوال، عید پاک و کریسمس.',
        prs: 'رسم و رواج‌ها و جشن‌های سالانه در کشورهای آلمانی‌زبان: شب سال نو، کارناوال و عید کریسمس.',
        tr: 'Almanya, Avusturya ve İsviçre\'de gelenekler: Yılbaşı, Karnaval, Paskalya ve Noel.',
        ar: 'التقاليد والاحتفالات في ألمانيا والنمسا وسويسرا: رأس السنة، الكرنفال، الفصح وعيد الميلاد.',
        es: 'Tradiciones y festividades en países germanohablantes: Nochevieja, Carnaval, Pascua y Navidad.'
      },
      content: 'die Hochzeit, das Jubiläum, die Taufe, der Brauch, das Feuerwerk, der Trauzeuge, die Braut.',
      audioText: 'Zu Silvester wünschen sich die Menschen in Deutschland einen "guten Rutsch ins neue Jahr".',
      practiceTasks: [
        'Vergleichen Sie ein deutsches Fest mit einer Tradition aus Ihrem Heimatland.',
        'Erklären Sie typische Bräuche zu Ostern.'
      ]
    },
    sectionC: {
      title: 'Mussawi C: Alltagskommunikation',
      focus: 'Sprechen & Dialoge (Gastgeschenke & Höflichkeitsrituale)',
      description: {
        en: 'Select appropriate gifts for hosts (flowers, chocolates) and master dining table etiquette.',
        fa: 'انتخاب هدیه مناسب برای میزبان (گل، شکلات) و آداب معاشرت بر سر میز غذا.',
        prs: 'تحفه بردن به خانه میزبان (گل یا شیرینی) و نزاکت‌های نشستن بر سر سفره غذا.',
        tr: 'Ev sahibine uygun hediye seçme ve yemek masası nezaket kuralları.',
        ar: 'اختيار الهدايا المناسبة للمضيف (زهور أو شوكولاتة) وآداب المائدة في المناسبات.',
        es: 'Elegir detalles para los anfitriones y normas de cortesía en la mesa de celebración.'
      },
      content: 'Vielen Dank für die Blumen, das wäre doch nicht nötig gewesen! / Guten Appetit! / Prost! / Zum Wohl!',
      audioText: 'Beim Anstoßen schaut man sich in Deutschland traditionell direkt in die Augen.',
      practiceTasks: [
        'Spielen Sie eine Szene: Ankunft als Gast bei einer deutschen Familie.',
        'Formulieren Sie einen Trinkspruch.'
      ]
    },
    sectionD: {
      title: 'Mussawi D: Leseverstehen & Text',
      focus: 'Lesen & Textanalyse (Einladungskarte & Lebenslauf-Chronik)',
      description: {
        en: 'Read wedding invitation cards, itineraries, dress codes, and gift registries.',
        fa: 'خواندن کارت‌های دعوت عروسی، برنامه مراسم، کد لباس و فهرست هدایا.',
        prs: 'خواندن کارت دعوت عروسی، تقسیم‌اوقات محفل، لباس مراسم و لست تحفه‌ها.',
        tr: 'Düğün davetiyesi, kutlama programı, kıyafet kodu ve hediye listesini okuma.',
        ar: 'قراءة بطاقات الدعوة للأعراس، وبرنامج الحفل، والزي المناسب للمناسبة.',
        es: 'Lectura de invitaciones de boda, itinerario del evento, código de vestimenta y listas de regalos.'
      },
      content: 'Einladung zur Silberhochzeit.',
      readingText: {
        type: 'Festliche Einladung',
        title: 'Einladung zur Silbernen Hochzeit von Claudia und Thomas',
        body: 'Liebe Familie, liebe Freunde! Vor 25 Jahren haben wir uns das Ja-Wort gegeben. Dieses Jubiläum möchten wir mit euch feiern! Datum: Samstag, 18. Juli, ab 17:00 Uhr. Ort: Gasthof Zum Goldenen Hirsch, Heidelberg. Bitte gebt uns bis zum 15. Juni Bescheid, ob ihr mitfeiern könnt. Kleidung: Festlich elegant. Wer uns beschenken möchte: Wir sammeln für unsere Traumreise nach Neuseeland.'
      },
      practiceTasks: [
        'Bis zu welchem Datum soll die Rückmeldung (RSVP) erfolgen?',
        'Was wünscht sich das Jubelpaar als Geschenk?'
      ]
    },
    sectionE: {
      title: 'Mussawi E: Grammatik & Schreiben',
      focus: 'Grammatik & Schreiben (Temporale Nebensätze: "wenn" vs. "als")',
      description: {
        en: '"als" = single event in the past. "wenn" = repeated events in past OR present/future.',
        fa: '"als" برای یک اتفاق یک‌باره در گذشته. "wenn" برای رویدادهای تکراری در گذشته یا زمان حال و آینده.',
        prs: '"als" برای یک واقعه یک‌باره در گذشته. "wenn" برای کارهای تکراری یا زمان حال و آینده.',
        tr: '"als" geçmişte bir kez gerçekleşen olaylar; "wenn" tekrarlanan geçmiş veya şimdiki/gelecek zaman.',
        ar: '"als" لحدث وقع مرة واحدة في الماضي، و"wenn" للأحداث المتكررة أو الحاضر والمستقبل.',
        es: '"als" para sucesos únicos en el pasado; "wenn" para eventos repetidos o en presente/futuro.'
      },
      content: 'Regel: Als = einmalig in der Vergangenheit. Wenn = jedes Mal / Gegenwart / Zukunft.',
      grammarRule: {
        id: 'a2_2_wenn_als_rule',
        level: 'A2.2',
        germanTitle: 'Temporale Nebensätze mit "wenn" und "als"',
        formula: 'Als / Wenn + Subjekt + (...) + Verb am Ende, Hauptsatz (Verb + Subjekt + ...).',
        explanation: {
          en: 'Use "als" strictly for a single, unique point in time or duration in the past (e.g. "Als ich ein Kind war..."). Use "wenn" for repeated events in the past (immer wenn...) or for present and future conditions.',
          fa: 'کلمه als صرفاً برای واقعه‌ای منحصر به فرد در زمان گذشته به کار می‌رود (مثلاً وقتی بچه بودم...). کلمه wenn برای وقایع تکرارشونده در گذشته (هر بار که...) یا زمان حال و آینده استفاده می‌شود.',
          prs: 'از "als" فقط برای یک وقت معین در گذشته استفاده می‌شود (مثلاً وقتی خردسال بودم). از "wenn" برای کارهای تکراری یا زمان حال و آینده استفاده می‌شود.',
          tr: 'Geçmişte tek bir an için "als", tekrarlanan geçmiş olaylar ve şimdiki/gelecek zaman için "wenn" kullanılır.',
          ar: 'نستخدم "als" حصراً لحدث فريد وقع مرة واحدة في الماضي، بينما نستخدم "wenn" للأحداث المتكررة أو في الحاضر والمستقبل.',
          es: 'Usa "als" exclusivamente para un momento puntual o único en el pasado; usa "wenn" para acciones repetidas (immer wenn) o en presente/futuro.'
        },
        examples: [
          {
            german: 'Als ich 18 Jahre alt wurde, habe ich den Führerschein gemacht. / Immer wenn wir Ferien hatten, fuhren wir ans Meer.',
            formulaBreakdown: 'Als [einmalig Vergangenheit] + ich 18 Jahre alt wurde [Nebensatz], + habe [V] + ich [S] + den Führerschein gemacht [Hauptsatz].',
            literalTranslation: {
              en: 'When I 18 years old became, have I the driver license made.',
              fa: 'وقتی من ۱۸ ساله شدم، گواهینامه رانندگی گرفتم.',
              prs: 'وقتی ۱۸ ساله شدم، لایسنس موتروانی گرفتم.',
              tr: '18 yaşıma bastığımda ehliyetimi aldım.',
              ar: 'عندما بلغت سن الثامنة عشرة، حصلت على رخصة القيادة.',
              es: 'Cuando cumplí 18 años, me saqué el carné de conducir.'
            },
            fluentTranslation: {
              en: 'When I turned 18, I got my driver\'s license.',
              fa: 'وقتی هجده ساله شدم، گواهینامه رانندگی‌ام را گرفتم.',
              prs: 'زمانی که ۱۸ ساله شدم، جواز رانندگی موتر را به دست آوردم.',
              tr: '18 yaşımı doldurduğumda sürücü belgesi aldım.',
              ar: 'حينما أتممت عامي الثامن عشر، نلت رخصة قيادة السيارات.',
              es: 'Cuando cumplí los dieciocho años, obtuve el permiso de conducir.'
            }
          }
        ]
      },
      practiceTasks: [
        'Setzen Sie "wenn" oder "als" ein: "_____ ich gestern nach Hause kam, regnete es."',
        'Schreiben Sie fünf Sätze über wichtige Ereignisse in Ihrem Leben.'
      ]
    },
    videoClip: {
      title: 'Glückwünsche und Tischrede auf der Hochzeitsfeier',
      scenario: 'Der Brautvater hält eine humorvolle und emotionale Tischrede auf das frisch vermählte Paar.',
      category: 'celebration',
      duration: '02:45',
      germanTranscript: [
        'Liebe Maryam, lieber Jonas! Als du, Maryam, uns Jonas zum ersten Mal vorgestellt hast, waren wir begeistert.',
        'Du hast einen Mann gefunden, der dein Lachen teilt und dich stets unterstützt.',
        'Wir wünschen euch für euren gemeinsamen Lebensweg unendlich viel Glück, Geduld und Gesundheit.',
        'Ein Hoch auf das junge Brautpaar! Prost!'
      ],
      translatedTranscript: [
        {
          en: 'Dear Maryam, dear Jonas! When you, Maryam, introduced Jonas to us for the first time, we were thrilled.',
          fa: 'مریم و یوناس عزیز! وقتی تو مریم برای اولین بار یوناس را به ما معرفی کردی، بسیار خوشحال شدیم.',
          prs: 'مریم و یونس عزیز! وقتی مریم برای اولین‌بار یونس را به ما معرفی کرد، بسیار خوشحال شدیم.',
          tr: 'Sevgili Maryam ve Jonas! Maryam, Jonas\'ı bize ilk tanıştırdığında çok heyecanlanmıştık.',
          ar: 'عزيزتي مريم، عزيزي يوناس! عندما قدمتِ لنا يوناس لأول مرة، غمرتنا الفرحة والسرور.',
          es: '¡Querida Maryam, querido Jonas! Cuando tú, Maryam, nos presentaste a Jonas por primera vez, nos alegramos muchísimo.'
        },
        {
          en: 'You found a man who shares your laughter and supports you always.',
          fa: 'تو همسری یافته‌ای که همپای خنده‌های توست و همواره از تو پشتیبانی می‌کند.',
          prs: 'تو همسفری پیدا کرده‌ای که خنده را با تو شریک می‌سازد و همیشه همراهت است.',
          tr: 'Gülüşünü paylaşan ve seni daima destekleyen bir eş buldun.',
          ar: 'لقد وجدتِ رجلاً يشارككِ الضحكة ويساندكِ في كل الأوقات.',
          es: 'Has encontrado a un compañero que comparte tu sonrisa y te apoya incondicionalmente.'
        },
        {
          en: 'We wish you endless happiness, patience, and good health on your shared journey through life.',
          fa: 'ما برای مسیر مشترک زندگی‌تان خوشبختی بی‌پایان، شکیبایی و تندرستی آرزومندیم.',
          prs: 'ما برای زندگی مشترک‌تان خوشبختی همیشگی، صبر و سلامتی کامل آرزو داریم.',
          tr: 'Ortak hayat yolculuğunuzda sonsuz mutluluk, sabır ve sağlık diliyoruz.',
          ar: 'نتمنى لكما في مسيرة حياتكما المشتركة سعادة أبدية، وصبراً، ووافر الصحة والعافية.',
          es: 'Os deseamos infinita felicidad, paciencia y salud en vuestro camino de vida compartido.'
        },
        {
          en: 'A toast to the young married couple! Cheers!',
          fa: 'به سلامتی و خوشبختی عروس و داماد جوان! نوش!',
          prs: 'به سلامتی این زوج جوان و خوشبخت! مبارک باد!',
          tr: 'Genç çiftimizin şerefine! Kutlu olsun!',
          ar: 'نخب العروسين الشابين! في صحتكم!',
          es: '¡Un brindis por los recién casados! ¡Salud!'
        }
      ]
    },
    examTip: {
      standard: 'A2 (Goethe-Zertifikat A2 & telc Deutsch A2)',
      module: 'Grammatik & Schreiben',
      tip: {
        en: 'For exam writing, "als" is one of the highest-rated connectors to prove A2 mastery of past narrative structure. Use it accurately for a single childhood or past event.',
        fa: 'در آزمون کتبی، کاربرد صحیح "als" برای رویدادهای گذشته یکی از شاخص‌های برجسته تسلط بر گرامر سطح A2 است.',
        prs: 'در امتحان، کاربرد دقیق "als" برای قصه‌های گذشته نشان‌دهنده فهم عالی گرامر سطح A2 است.',
        tr: 'Sınavda geçmiş anlatımı için "als" bağlacını tekil olaylarda kullanmak yüksek puan getirir.',
        ar: 'في التعبير الكتابي، يعتبر استخدام "als" بدقة للأحداث الماضية من أبرز مؤشرات إتقان معايير A2.',
        es: 'En la redacción del examen, el uso certero de "als" para sucesos únicos del pasado demuestra gran dominio del nivel A2.'
      }
    },
    exercises: [
      {
        id: 'ex_a2_2_14_1',
        type: 'multiple_choice',
        instruction: {
          en: 'Select the correct temporal conjunction ("wenn" or "als").',
          fa: 'حرف ربط زمانی صحیح ("wenn" یا "als") را انتخاب کنید.',
          prs: 'کلمه ربط زمانی مناسب ("wenn" یا "als") را در جمله بگذارید.',
          tr: 'Doğru zaman bağlacını ("wenn" veya "als") seçin.',
          ar: 'اختر رابط الزمن الصحيح ("wenn" أو "als").',
          es: 'Selecciona la conjunción temporal correcta ("wenn" o "als").'
        },
        prompt: '_____ wir gestern im Restaurant feierten, hielt der Vater eine Rede.',
        options: ['Als', 'Wenn', 'Wann', 'Weil'],
        correctAnswer: 'Als',
        explanation: {
          en: '"Gestern" indicates a single, unique event in the past, which strictly requires "Als".',
          fa: 'کلمه gestern نشان‌دهنده یک رویداد یک‌باره در گذشته است که منحصراً نیازمند حرف ربط "Als" می‌باشد.',
          prs: 'کلمه "دیروز" یک واقعه مشخص در گذشته است و حتماً با "Als" می‌آید.',
          tr: '"Gestern" (dün) geçmişte tek bir anı belirttiğinden mutlaka "Als" kullanılır.',
          ar: 'كلمة "أمس" تشير لحدث فريد وقع في الماضي، مما يقتضي استخدام "Als" حصراً.',
          es: '"Gestern" (ayer) indica un suceso único y puntual en el pasado, lo que exige estrictamente "Als".'
        }
      }
    ]
  }
];
