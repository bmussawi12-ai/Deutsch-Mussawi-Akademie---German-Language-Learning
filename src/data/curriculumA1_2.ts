import { Lesson } from '../types';

export const CURRICULUM_A1_2: Lesson[] = [
  {
    id: 'a1_2_lek8',
    lektionNumber: 8,
    level: 'A1.2',
    title: 'Berufe, Arbeitswelt und Tagesaufgaben',
    subTitle: 'Berufsbezeichnungen, Tätigkeiten und Arbeitszeiten (Lektion )',
    topic: 'Berufe im Detail, Arbeitsalltag, Telefonieren am Arbeitsplatz und Modalverben',
    fotoHoergeschichte: {
      title: 'Foto-Hörgeschichte: Der erste Tag beim IT-Praktikum in München',
      imagePrompt: 'A bright modern IT office in Munich with glass partitions where Sayed meets his team leader Herr Wagner and receives his laptop and security badge.',
      imageTheme: 'IT-Firma in München',
      audioDuration: '02:40',
      transcript: [
        { speaker: 'Herr Wagner (Teamleiter)', text: 'Guten Morgen, Herr Bashir! Willkommen in unserem Team bei CloudTech München.' },
        { speaker: 'Sayed Bashir', text: 'Guten Morgen, Herr Wagner! Ich freue mich sehr auf das Praktikum.' },
        { speaker: 'Herr Wagner', text: 'Hier ist Ihr Arbeitsplatz und Ihr neuer Firmenlaptop. Was haben Sie in Afghanistan beruflich gemacht?' },
        { speaker: 'Sayed Bashir', text: 'Ich habe als Netzwerktechniker gearbeitet und Webseiten programmiert.' },
        { speaker: 'Herr Wagner', text: 'Ausgezeichnet! Heute zeigen wir Ihnen unsere aktuellen Kundenprojekte.' }
      ],
      summary: {
        en: 'Sayed begins his IT internship at CloudTech Munich, receives his equipment, and discusses his previous professional experience.',
        fa: 'سید دوره کارآموزی فناوری اطلاعات خود را در شرکت کلودتک مونیخ آغاز کرده، تجهیزاتش را دریافت می‌کند و از تجربیات شغلی گذشته‌اش می‌گوید.',
        tr: 'Sayed Münih\'teki CloudTech şirketinde bilişim stajına başlar, cihazlarını teslim alır ve geçmiş iş tecrübesini anlatır.',
        ar: 'يبدأ سيد تدريبه المهني في تكنولوجيا المعلومات في ميونيخ، ويستلم حاسوبه ويناقش خبراته المهنية السابقة.',
        es: 'Sayed empieza sus prácticas de informática en Múnich, recibe su equipo y habla sobre su experiencia laboral previa.'
      }
    },
    sectionA: {
      title: 'Mussawi A: Sprechen & Dialog',
      focus: 'Sprechen & Hören (Berufe & Berufsbezeichnungen)',
      description: {
        en: 'Masculine and feminine professions: der Ingenieur / die Ingenieurin, der Verkäufer / die Verkäuferin, der Mechatroniker / die Mechatronikerin.',
        fa: 'نام مشاغل در حالت مذکر و مونث با پسوند "-in": مهندس، فروشنده، مکانیک، حسابدار.',
        tr: 'Eril ve dişil meslek adları: mühendis, satıcı, mekatronikçi, muhasebeci.',
        ar: 'أسماء المهن بصيغتي المذكر والمؤنث: مهندس/مهندسة، بائع/بائعة، ميكانيكي/ميكانيكية.',
        es: 'Profesiones en masculino y femenino: ingeniero/a, vendedor/a, técnico/a.'
      },
      content: 'Was machen Sie beruflich? - Ich bin Softwareentwickler von Beruf. Meine Kollegin ist Projektleiterin.',
      audioText: 'Wo arbeiten Sie? - Ich arbeite bei einer Softwarefirma in München. Ich habe flexible Arbeitszeiten.',
      practiceTasks: [
        'Bilden Sie die weibliche Form für 5 Berufe: der Arzt -> die Ärztin, der Koch -> die Köchin.',
        'Stellen Sie Ihren Traumberuf vor: "Ich möchte als... arbeiten."'
      ]
    },
    sectionB: {
      title: 'Mussawi B: Wortschatz & Hören',
      focus: 'Hören & Wortschatz (Tätigkeiten am Arbeitsplatz)',
      description: {
        en: 'Workplace activities: E-Mails beantworten, Kunden anrufen, Berichte schreiben, Meetings organisieren.',
        fa: 'فعالیت‌های محیط کار: پاسخ به ایمیل‌ها، تماس با مشتریان، نوشتن گزارش، برگزاری جلسات.',
        tr: 'İş yeri aktiviteleri: e-postaları yanıtlama, müşterileri arama, rapor yazma, toplantı düzenleme.',
        ar: 'أنشطة مكان العمل: الرد على رسائل البريد الإلكتروني، الاتصال بالعملاء، كتابة التقارير، تنظيم الاجتماعات.',
        es: 'Tareas del puesto de trabajo: responder correos, llamar a clientes, redactar informes, organizar reuniones.'
      },
      content: 'Was sind deine Aufgaben? - Ich installiere Computerprogramme und helfe Kunden bei technischen Problemen.',
      audioText: 'Herr Bashir, können Sie bitte diese Kunden-E-Mail auf Deutsch beantworten? - Ja, sehr gerne!',
      practiceTasks: [
        'Notieren Sie 4 typische Tätigkeiten in Ihrem Arbeitsalltag.',
        'Hören Sie den Telefondialog und notieren Sie den Grund des Anrufs.'
      ]
    },
    sectionC: {
      title: 'Mussawi C: Alltagskommunikation',
      focus: 'Sprechen & Dialoge (Telefonieren im Büro)',
      description: {
        en: 'Office phone etiquette: "Guten Tag, mein Name ist...", "Kann ich bitte Herrn... sprechen?", "Einen Moment, bitte."',
        fa: 'آداب مکالمه تلفنی در محیط کار: «روز بخیر، اسم من... است»، «آیا می‌توانم با آقای... صحبت کنم؟»، «یک لحظه لطفاً».',
        tr: 'Ofis telefon görüşmesi kalıpları: "İyi günler, adım...", "Sayın... ile görüşebilir miyim?", "Bir dakika lütfen."',
        ar: 'آداب الاتصال الهاتفي في المكتب: "طاب يومك، اسمي..."، "هل يمكنني التحدث إلى السيد...؟"، "لحظة من فضلك".',
        es: 'Protocolo telefónico laboral: saludar, identificarse, pedir hablar con alguien y transferir llamadas.'
      },
      content: 'Firma CloudTech, Sayed Bashir, guten Tag! - Guten Tag, hier spricht Meier. Ist Herr Wagner im Haus?',
      audioText: 'Herr Wagner ist gerade in einer Besprechung. Kann er Sie später zurückrufen?',
      practiceTasks: [
        'Spielen Sie ein offizielles Telefongespräch im Rollenspiel.',
        'Hinterlassen Sie eine kurze Rückrufnachricht mit Telefonnummer.'
      ]
    },
    sectionD: {
      title: 'Mussawi D: Leseverstehen & Text',
      focus: 'Lesen & Textanalyse (Stellenanzeigen & Arbeitsverträge)',
      description: {
        en: 'Read authentic German job postings (Stellenanzeigen) and understand job requirements (Voraussetzungen).',
        fa: 'خواندن آگهی‌های واقعی استخدام (Stellenanzeigen) و درک شرایط احراز شغل (Voraussetzungen).',
        tr: 'Almanca iş ilanlarını (Stellenanzeigen) okuma ve aranan nitelikleri (Voraussetzungen) kavrama.',
        ar: 'قراءة إعلانات الوظائف الألمانية وفهم شروط ومتطلبات التقدم للعمل.',
        es: 'Lectura de ofertas de empleo y comprensión de los requisitos solicitados.'
      },
      content: 'Stellenanzeige für Junior IT-Support Mitarbeiter in München.',
      readingText: {
        type: 'Stellenanzeige',
        title: 'Wir suchen: Junior Fachinformatiker / IT-Support (m/w/d)',
        body: 'Ihre Aufgaben: Betreuung von IT-Systemen, technischer Support per Telefon und Ticket-System, Installation von Hard- und Software. Ihr Profil: Abgeschlossene Ausbildung oder Berufserfahrung, gute Deutschkenntnisse (mind. B1), Teamfähigkeit und Zuverlässigkeit. Wir bieten: Flexible Arbeitszeiten, 30 Tage Urlaub, Weiterbildungsmöglichkeiten. Bewerben Sie sich online!'
      },
      practiceTasks: [
        'Welche Deutschkenntnisse werden in der Anzeige gefordert?',
        'Wie viele Urlaubstage pro Jahr bietet das Unternehmen?'
      ]
    },
    sectionE: {
      title: 'Mussawi E: Grammatik & Schreiben',
      focus: 'Grammatik & Schreiben (Modalverben im Berufsalltag: dürfen & müssen)',
      description: {
        en: 'Modal verbs for rules and permissions: "dürfen" (permission) and "nicht dürfen" (prohibition).',
        fa: 'افعال وجهی برای قوانین و مجوزها: "dürfen" (اجازه داشتن) و "nicht dürfen" (ممنوع بودن قطعی).',
        tr: '"dürfen" (izinli olmak) ve "nicht dürfen" (yasak olmak) modal fiillerinin kullanımı.',
        ar: 'استخدام أفعال القواعد والتراخيص: "dürfen" (يُسمح له) و "nicht dürfen" (ممنوع منعاً باتاً).',
        es: 'Verbos modales para normas y permisos: "dürfen" (estar permitido) y "nicht dürfen" (estar prohibido).'
      },
      content: 'Dürfen (Erlaubnis) vs. Nicht dürfen (Verbot). Hier darf man nicht rauchen. Hier darf man parken.',
      grammarSnippet: {
        id: 'a1_lek8_modal_duerfen',
        level: 'A1.2',
        lektion: 8,
        germanTitle: 'Das Modalverb "dürfen" (Erlaubnis und Verbot)',
        formula: 'S + dürfen (konjugiert an Pos 2) + (...) + *Infinitiv (am Satzende)*',
        explanation: {
          en: '"Dürfen" expresses permission ("Man darf hier parken"). Negated ("Man darf hier nicht rauchen"), it expresses a strict prohibition.',
          fa: '"Dürfen" بیانگر اجازه و قانون است. در حالت منفی با nicht ("Man darf nicht...") به معنای ممنوعیت اکید و رسمی است.',
          tr: '"dürfen" izin ifade eder; "nicht dürfen" ise kesin yasak anlamına gelir.',
          ar: 'يعبر "dürfen" عن الإذن والسماح، وعند نفيه مع "nicht" يعبر عن الحظر والمنع الصارم.',
          es: '"Dürfen" expresa permiso ("se puede/está permitido"); con negación expresa prohibición estricta.'
        },
        examples: [
          {
            german: 'Im Büro darf man während der Arbeitszeit privat telefonieren.',
            formulaBreakdown: 'Im Büro (Angabe) + darf (Modal Pos 2) + man (S) + (...) + *telefonieren (Infinitiv)*',
            literalTranslation: {
              en: 'In the office is one allowed during work hours privately to telephone.',
              fa: 'در دفتر کار مجاز است آدم در ساعات کاری خصوصی تلفن بزند.',
              tr: 'Ofiste çalışma saatinde özel telefonla görüşülebilir.',
              ar: 'يُسمح للمرء في المكتب بالاتصال هاتفياً بشكل خاص خلال ساعات العمل.',
              es: 'En la oficina está permitido hablar por teléfono para asuntos privados durante la jornada.'
            },
            fluentTranslation: {
              en: 'In the office, one is allowed to make private phone calls during work hours.',
              fa: 'در اداره افراد اجازه دارند در طول ساعات کاری تماس تلفنی شخصی برقرار کنند.',
              tr: 'Ofiste mesai saatleri içinde özel telefon görüşmesi yapılmasına izin verilir.',
              ar: 'في المكتب يُسمح بإجراء اتصالات هاتفية خاصة أثناء ساعات العمل.',
              es: 'En la oficina está permitido hacer llamadas personales en el horario de trabajo.'
            }
          }
        ],
        category: 'modal_verbs'
      },
      practiceTasks: [
        'Konjugieren Sie "dürfen": ich darf, du darfst, er/sie darf, wir dürfen, ihr dürft, sie/Sie dürfen.',
        'Schreiben Sie 2 Schilderregeln: Was darf man am Arbeitsplatz und was darf man nicht?'
      ]
    },
    videoClip: {
      title: 'Video: Die Kaffeepause mit den Arbeitskollegen',
      scenario: 'Sayed unterhält sich in der Büroküche mit Kollegin Lisa über Arbeitszeiten und Wochenendpläne.',
      category: 'alltag',
      duration: '02:35',
      germanTranscript: [
        'Hallo Sayed! Möchtest du einen Kaffee?',
        'Ja, sehr gerne, danke Lisa! Wie lange arbeitest du schon hier?',
        'Seit drei Jahren. Das Team ist wirklich sehr hilfsbereit.',
        'Hast du heute früher Feierabend?',
        'Ja, am Freitag machen wir alle um sechzehn Uhr Schluss!'
      ],
      translatedTranscript: [
        {
          en: 'Hello Sayed! Would you like a coffee?',
          fa: 'سلام سید! آیا قهوه میل داری؟',
          tr: 'Merhaba Sayed! Kahve ister misin?',
          ar: 'مرحباً سيد! هل ترغب في فنجان قهوة؟',
          es: '¡Hola Sayed! ¿Quieres un café?'
        },
        {
          en: 'Yes, gladly, thank you Lisa! How long have you been working here?',
          fa: 'بله، با کمال میل، ممنون لیزا! چه مدتی است که اینجا کار می‌کنی؟',
          tr: 'Evet, çok sevinirim, teşekkürler Lisa! Ne kadar zamandır burada çalışıyorsun?',
          ar: 'نعم، بكل سرور، شكراً يا ليزا! كم لكِ تعملين هنا؟',
          es: '¡Sí, con mucho gusto, gracias Lisa! ¿Cuánto tiempo llevas trabajando aquí?'
        },
        {
          en: 'For three years. The team is really very helpful.',
          fa: 'سه سال است. همکاران این تیم واقعاً بسیار کمک‌کننده و مهربان هستند.',
          tr: 'Üç yıldır. Ekip gerçekten çok yardımsever.',
          ar: 'منذ ثلاث سنوات. الفريق متعاون جداً حقاً.',
          es: 'Desde hace tres años. El equipo es realmente muy atento.'
        },
        {
          en: 'Do you finish work earlier today?',
          fa: 'آیا امروز زودتر کارت تمام می‌شود؟',
          tr: 'Bugün işten daha erken mi çıkıyorsun?',
          ar: 'هل تنهين العمل مبكراً اليوم؟',
          es: '¿Terminas antes hoy?'
        },
        {
          en: 'Yes, on Friday we all finish at 4 PM!',
          fa: 'بله، روزهای جمعه همگی ساعت ۱۶ کار را تعطیل می‌کنیم!',
          tr: 'Evet, cuma günleri hepimiz saat 16:00\'da paydos ediyoruz!',
          ar: 'نعم، يوم الجمعة ننهي جميعاً العمل في الرابعة عصراً!',
          es: '¡Sí, los viernes terminamos todos a las cuatro de la tarde!'
        }
      ]
    },
    exercises: [
      {
        id: 'ex_a1_8_1',
        type: 'multiple_choice',
        instruction: {
          en: 'Select the correct conjugation of "dürfen" for singular permission.',
          fa: 'صرف صحیح فعل "dürfen" را انتخاب کنید.',
          tr: '"dürfen" fiilinin doğru çekimini seçiniz.',
          ar: 'اختر تصريف الفعل "dürfen" الصحيح.',
          es: 'Elige la forma correcta del verbo "dürfen".'
        },
        prompt: 'Hier _____ man nicht mit dem Auto parken.',
        options: ['darf', 'darfst', 'dürfen', 'darft'],
        correctAnswer: 'darf',
        explanation: {
          en: 'With the impersonal subject "man", the 3rd person singular is used: man darf.',
          fa: 'با فاعل نامعین "man" (انسان/آدم)، فعل به صورت سوم شخص مفرد صرف می‌شود: man darf.',
          tr: '"man" öznesiyle 3. tekil şahıs çekimi kullanılır: man darf.',
          ar: 'مع الفاعل المبهم "man" يُستخدم تصريف الغائب المفرد: man darf.',
          es: 'Con el pronombre impersonal "man" se usa la tercera persona de singular: man darf.'
        }
      },
      {
        id: 'ex_a1_8_2',
        type: 'fill_blank',
        instruction: {
          en: 'Fill in the female suffix for professions.',
          fa: 'پسوند مونث‌ساز مشاغل را در جای خالی بنویسید.',
          tr: 'Meslekler için dişil eki boşluğa yazın.',
          ar: 'اكتب لاحقة التأنيث للمهن في الفراغ.',
          es: 'Escribe el sufijo femenino para las profesiones.'
        },
        prompt: 'Herr Becker ist Lehrer. Frau Weber ist Lehrer_____.',
        options: ['in', 'en', 'er', 'ung'],
        correctAnswer: 'in',
        explanation: {
          en: 'Female professions in German are formed by adding "-in" to the masculine form (Lehrer -> Lehrerin).',
          fa: 'مشاغل مونث در زبان آلمانی با افزودن پسوند "-in" به انتهای کلمه مذکر ساخته می‌شوند (Lehrer -> Lehrerin).',
          tr: 'Almancada dişil meslekler eril isme "-in" eklenerek türetilir: Lehrer -> Lehrerin.',
          ar: 'تُصاغ المهن المؤنثة في الألمانية بإضافة اللاحقة "-in" للمذكر: Lehrer -> Lehrerin.',
          es: 'Las profesiones femeninas se forman añadiendo "-in" a la forma masculina: Lehrer -> Lehrerin.'
        }
      }
    ]
  },
  {
    id: 'a1_2_lek9',
    lektionNumber: 9,
    level: 'A1.2',
    title: 'In der Stadt unterwegs',
    subTitle: 'Verkehrsmittel, Orientierung und der Dativ mit Präpositionen (Lektion )',
    topic: 'Verkehrsmittel (Bus, Bahn, Tram), Fahrkarten kaufen, Wegbeschreibung und Dativ mit "mit", "nach", "zu"',
    fotoHoergeschichte: {
      title: 'Foto-Hörgeschichte: Orientierung am Marienplatz München',
      imagePrompt: 'A bustling Marienplatz in Munich with the historic New Town Hall where Sayed with a city map asks a friendly pedestrian for directions to the museum.',
      imageTheme: 'Marienplatz München',
      audioDuration: '02:45',
      transcript: [
        { speaker: 'Sayed Bashir', text: 'Entschuldigung, können Sie mir bitte helfen? Ich suche das Deutsche Museum.' },
        { speaker: 'Passant (Münchner)', text: 'Grüß Gott! Das ist ganz einfach. Sie können zu Fuß gehen oder mit der S-Bahn fahren.' },
        { speaker: 'Sayed Bashir', text: 'Welche S-Bahn fährt dorthin?' },
        { speaker: 'Passant', text: 'Nehmen Sie jede beliebige S-Bahn Richtung Ostbahnhof und steigen Sie an der Station Isartor aus.' },
        { speaker: 'Sayed Bashir', text: 'Und wie komme ich vom Isartor zum Museum?' },
        { speaker: 'Passant', text: 'Gehen Sie einfach geradeaus über die Ludwigsbrücke. Nach fünf Minuten sind Sie da!' }
      ],
      summary: {
        en: 'Sayed asks a pedestrian at Marienplatz for directions to the Deutsches Museum and receives detailed transit instructions.',
        fa: 'سید در میدان مارین‌پلاتز مونیخ آدرس موزه دویچس را از یک رهگذر می‌پرسد و راهنمایی دقیقی برای مترو و پیاده‌روی دریافت می‌کند.',
        tr: 'Sayed Marienplatz meydanında bir yayaya Deutsches Museum\'a nasıl gideceğini sorar ve yol tarifi alır.',
        ar: 'يسأل سيد أحد المارة في ساحة مارينبلاتز عن طريق المتحف الألماني ويتلقى إرشادات مفصلة.',
        es: 'Sayed pide indicaciones en Marienplatz para llegar al Deutsches Museum y recibe instrucciones detalladas.'
      }
    },
    sectionA: {
      title: 'Mussawi A: Sprechen & Dialog',
      focus: 'Sprechen & Hören (Verkehrsmittel & Mobilität)',
      description: {
        en: 'Public transportation: der Bus, die U-Bahn, die S-Bahn, die Straßenbahn/Tram, das Fahrrad, das Auto, der Zug.',
        fa: 'وسایل حمل و نقل عمومی: اتوبوس، متروی زیرزمینی (U-Bahn)، قطار شهری (S-Bahn)، تراموا، دوچرخه، اتومبیل، قطار بین‌شهری.',
        tr: 'Toplu taşıma araçları: otobüs, metro (U-Bahn), banliyö treni (S-Bahn), tramvay, bisiklet, araba.',
        ar: 'وسائل النقل والمواصلات: الحافلة، المترو، قطار الضواحي، الترام، الدراجة، السيارة، القطار.',
        es: 'Medios de transporte público: autobús, metro, cercanías, tranvía, bicicleta, tren.'
      },
      content: 'Womit fährst du zur Arbeit? - Ich fahre meistens mit dem Fahrrad oder mit der U-Bahn.',
      audioText: 'Fahren Sie oft mit dem Auto? - Nein, in München fahre ich fast immer mit den öffentlichen Verkehrsmitteln.',
      practiceTasks: [
        'Fragen Sie Ihren Lernpartner: "Wie kommst du zum Deutschkurs?"',
        'Ordnen Sie 6 Verkehrsmittel nach Beliebtheit und Schnelligkeit.'
      ]
    },
    sectionB: {
      title: 'Mussawi B: Wortschatz & Hören',
      focus: 'Hören & Wortschatz (Fahrkartenautomat & Tarifzonen)',
      description: {
        en: 'Buying tickets: Einzelfahrkarte, Tageskarte, Monatskarte, Streifenkarte, entwerten/stempeln.',
        fa: 'خرید بلیت از دستگاه: بلیت تک‌سفره، بلیت روزانه، بلیت ماهانه، زون‌های شهری، معتبرسازی و باطل کردن بلیت.',
        tr: 'Bilet otomatı ve tarifeler: tek binişlik bilet, günlük bilet, aylık bilet, bileti onaylatma/damgalama.',
        ar: 'شراء التذاكر من الجهاز الآلي: تذكرة فردية، تذكرة يومية، تذكرة شهرية، ختم وتفعيل التذكرة.',
        es: 'Compra de billetes en máquinas expendedoras: billete sencillo, abono diario, abono mensual, validar billete.'
      },
      content: 'Eine Einzelfahrkarte Zone M, bitte. Vergessen Sie nicht, das Ticket vor der Fahrt zu entwerten!',
      audioText: 'Am Automaten: Wählen Sie Ihr Ziel und bezahlen Sie mit Karte oder Münzen.',
      practiceTasks: [
        'Hören Sie den Dialog am Fahrkartenschalter und notieren Sie den Ticketpreis.',
        'Erklären Sie einem Touristen, wie man ein Ticket am Automaten kauft.'
      ]
    },
    sectionC: {
      title: 'Mussawi C: Alltagskommunikation',
      focus: 'Sprechen & Dialoge (Nach dem Weg fragen & Wegbeschreibung)',
      description: {
        en: 'Giving and asking for directions: geradeaus gehen, nach rechts/links abbiegen, an der Kreuzung, an der Ampel.',
        fa: 'پرسیدن و راهنمایی مسیر: مستقیم رفتن، به راست/چپ پیچیدن، سر چهارراه، پشت چراغ راهنمایی.',
        tr: 'Yol tarifi sorma ve anlatma: düz gitmek, sağa/sola dönmek, kavşakta, trafik ışıklarında.',
        ar: 'سؤال وتوجيه الطريق: السير إلى الأمام مباشرة، الانعطاف يميناً/يساراً، عند التقاطع، عند إشارة المرور.',
        es: 'Pedir y dar indicaciones de dirección: seguir recto, girar a la derecha/izquierda, en el cruce, en el semáforo.'
      },
      content: 'Wie komme ich zum Bahnhof? - Gehen Sie geradeaus bis zur Ampel und biegen Sie dann links ab.',
      audioText: 'Ist das Museum weit von hier? - Nein, nur etwa zehn Gehminuten.',
      practiceTasks: [
        'Zeichnen Sie einen Stadtplan und beschreiben Sie den Weg vom Bahnhof zum Rathaus.',
        'Verwenden Sie: geradeaus, rechts, links, über die Brücke.'
      ]
    },
    sectionD: {
      title: 'Mussawi D: Leseverstehen & Text',
      focus: 'Lesen & Textanalyse (Fahrpläne & Netzpläne lesen)',
      description: {
        en: 'Read public transit timetables, platforms (Gleis), departures (Abfahrt), and arrival times (Ankunft).',
        fa: 'خواندن جدول زمان‌بندی قطارها، سکوهای ایستگاه (Gleis)، ساعات حرکت و رسیدن به مقصد.',
        tr: 'Tren ve otobüs sefer tarifelerini, peron (Gleis) numaralarını ve kalkış saatlerini okuma.',
        ar: 'قراءة جداول مواعيد القطارات وأرقام الأرصفة (Gleis) ومواعيد المغادرة والوصول.',
        es: 'Lectura de horarios de transporte, andenes de salida (Gleis) y transbordos.'
      },
      content: 'Aushangfahrplan der S-Bahn München am Hauptbahnhof.',
      readingText: {
        type: 'Fahrplantabelle',
        title: 'S-Bahn München - Abfahrtstabelle Hauptbahnhof Richtung Ostbahnhof',
        body: 'S1 Richtung Flughafen/Erding: Abfahrt 14:12 Uhr, Gleis 1 | S2 Richtung Erding: Abfahrt 14:16 Uhr, Gleis 1 | S3 Richtung Holzkirchen: Abfahrt 14:22 Uhr, Gleis 2 | S8 Richtung Herrsching: Abfahrt 14:25 Uhr, Gleis 1 | Hinweis: Wegen Bauarbeiten kommt es am Wochenende zu Gleisänderungen.'
      },
      practiceTasks: [
        'Auf welchem Gleis fährt die S1 um 14:12 Uhr ab?',
        'Welche S-Bahn fährt um 14:22 Uhr nach Holzkirchen?'
      ]
    },
    sectionE: {
      title: 'Mussawi E: Grammatik & Schreiben',
      focus: 'Grammatik & Schreiben (Der Dativ mit "mit", "nach", "zu")',
      description: {
        en: 'Master the dative case with prepositions: mit dem Bus (m), mit dem Zug (m), mit der U-Bahn (f), mit dem Fahrrad (n).',
        fa: 'تسلط بر حالت داتیو (Dativ) همراه با حروف اضافه: mit dem Bus (مذکر)، mit der U-Bahn (مونث)، mit dem Fahrrad (خنثی).',
        tr: '"mit", "nach", "zu" edatlarıyla Dativ kullanımı: mit dem Bus, mit der Bahn.',
        ar: 'إتقان حالة الجر (Dativ) مع حروف الجر: mit dem Bus (مذكر)، mit der Bahn (مؤنث).',
        es: 'Domina el dativo con preposiciones fijas: mit dem Bus (m), mit der U-Bahn (f), mit dem Fahrrad (n).'
      },
      content: 'Dativ-Artikel: Maskulin/Neutral = dem | Feminin = der | Plural = den (+n).',
      grammarSnippet: {
        id: 'a1_lek9_dativ_praepositionen',
        level: 'A1.2',
        lektion: 9,
        germanTitle: 'Der Dativ nach der Präposition "mit"',
        formula: 'mit + Dativ: Maskulin: mit *dem* Bus | Neutral: mit *dem* Rad | Feminin: mit *der* Bahn | Plural: mit *den* Bussen',
        explanation: {
          en: 'The preposition "mit" always governs the dative case. Masculine and neuter articles change to "dem", feminine to "der", and plural to "den + n".',
          fa: 'حرف اضافه "mit" همیشه داتیوساز است. آرتیکل‌های مذکر و خنثی به "dem"، آرتیکل مونث به "der" و حالت جمع به "den" تغییر می‌یابند.',
          tr: '"mit" edatı her zaman Dativ ister: der/das -> dem, die -> der, die (çoğul) -> den (+n).',
          ar: 'حرف الجر "mit" يتطلب حالة الجر (Dativ) دائماً: der/das تصبح dem، و die تصبح der.',
          es: 'La preposición "mit" rige siempre dativo: der/das pasa a dem, die a der, y el plural a den.'
        },
        examples: [
          {
            german: 'Sayed fährt jeden Morgen mit dem Bus und mit der U-Bahn zur Sprachschule.',
            formulaBreakdown: 'mit (Präp. + Dat.) + dem Bus (Dat. Maskulin) + mit der U-Bahn (Dat. Feminin)',
            literalTranslation: {
              en: 'Sayed travels every morning with the bus and with the subway to the language school.',
              fa: 'سید می‌رود هر صبح با اتوبوس و با مترو به آموزشگاه زبان.',
              tr: 'Sayed her sabah otobüsle ve metroyla dil okuluna gider.',
              ar: 'يسافر سيد كل صباح بالحافلة وبالمترو إلى مدرسة اللغات.',
              es: 'Sayed va cada mañana en autobús y en metro a la escuela de idiomas.'
            },
            fluentTranslation: {
              en: 'Sayed travels by bus and by underground to the language school every morning.',
              fa: 'سید هر روز صبح با اتوبوس و مترو به مدرسه زبان می‌رود.',
              tr: 'Sayed her sabah dil okuluna otobüs ve metroyla gidiyor.',
              ar: 'يذهب سيد إلى معهد اللغات كل صباح بالحافلة والمترو.',
              es: 'Sayed va a la escuela de idiomas en autobús y en metro todas las mañanas.'
            }
          }
        ],
        category: 'prepositions'
      },
      practiceTasks: [
        'Setzen Sie "dem" oder "der" ein: Ich fahre mit _____ Straßenbahn (f) und mit _____ Zug (m).',
        'Bilden Sie 3 Sätze: Womit fahren Sie gerne und womit nicht?'
      ]
    },
    videoClip: {
      title: 'Video: Mit der Tram durch München',
      scenario: 'Sayed und Maria fahren mit der Straßenbahnlinie 19 durch die Münchner Innenstadt und sehen Sehenswürdigkeiten.',
      category: 'alltag',
      duration: '02:40',
      germanTranscript: [
        'Steigen wir hier in die Tram ein?',
        'Ja, die Linie neunzehn fährt direkt am Nationaltheater vorbei.',
        'Müssen wir die Fahrkarte im Wagen stempeln?',
        'Ja, der Entwerter ist gleich an der Tür.',
        'München ist wirklich eine wunderschöne Stadt!'
      ],
      translatedTranscript: [
        {
          en: 'Are we getting onto the tram here?',
          fa: 'آیا همین‌جا سوار تراموا می‌شویم؟',
          tr: 'Tramvaya buradan mı biniyoruz?',
          ar: 'هل نصعد إلى الترام هنا؟',
          es: '¿Subimos aquí al tranvía?'
        },
        {
          en: 'Yes, line 19 travels directly past the National Theatre.',
          fa: 'بله، خط ۱۹ دقیقاً از کنار تئاتر ملی عبور می‌کند.',
          tr: 'Evet, 19 numaralı hat doğrudan Ulusal Tiyatro\'nun önünden geçiyor.',
          ar: 'نعم، الخط 19 يمر مباشرة بمحاذاة المسرح الوطني.',
          es: 'Sí, la línea 19 pasa justo por delante del Teatro Nacional.'
        },
        {
          en: 'Do we need to stamp the ticket inside the carriage?',
          fa: 'آیا باید بلیت را داخل واگن باطل/مهر کنیم؟',
          tr: 'Bileti vagonun içinde damgalamamız gerekiyor mu?',
          ar: 'هل يجب علينا ختم التذكرة داخل العربة؟',
          es: '¿Tenemos que validar el billete dentro del vagón?'
        },
        {
          en: 'Yes, the ticket validator is right next to the door.',
          fa: 'بله، دستگاه اعتبارسنجی بلیت دقیقاً کنار در قرار دارد.',
          tr: 'Evet, bilet onaylama makinesi hemen kapının yanında.',
          ar: 'نعم، جهاز تفعيل التذاكر بجوار الباب مباشرة.',
          es: 'Sí, la máquina validadora está justo al lado de la puerta.'
        },
        {
          en: 'Munich is truly a wonderful city!',
          fa: 'مونیخ واقعاً یک شهر بی‌نظیر و زیبا است!',
          tr: 'Münih gerçekten muhteşem bir şehir!',
          ar: 'ميونيخ مدينة رائعة وجميلة حقاً!',
          es: '¡Múnich es verdaderamente una ciudad maravillosa!'
        }
      ]
    },
    exercises: [
      {
        id: 'ex_a1_9_1',
        type: 'multiple_choice',
        instruction: {
          en: 'Select the correct dative article after the preposition "mit".',
          fa: 'آرتیکل داتیو صحیح را پس از حرف اضافه "mit" انتخاب کنید.',
          tr: '"mit" edatından sonra gelen doğru Dativ artikelini seçiniz.',
          ar: 'اختر أداة الجر (Dativ) الصحيحة بعد حرف الجر "mit".',
          es: 'Elige el artículo en dativo correcto tras la preposición "mit".'
        },
        prompt: 'Ich fahre jeden Tag mit _____ Fahrrad (das) zur Arbeit.',
        options: ['dem', 'das', 'den', 'der'],
        correctAnswer: 'dem',
        explanation: {
          en: '"Fahrrad" is neuter (das Fahrrad). In the dative case after "mit", "das" becomes "dem".',
          fa: '"Fahrrad" خنثی (das Fahrrad) است. در حالت داتیو پس از "mit"، به "dem" تغییر می‌یابد: mit dem Fahrrad.',
          tr: '"Fahrrad" nötr bir isimdir (das). "mit" edatından sonra Dativ alarak "dem" olur.',
          ar: '"Fahrrad" اسم محايد (das)، وفي حالة الجر بعد "mit" يصبح "dem".',
          es: '"Fahrrad" es neutro (das). En dativo tras "mit" se convierte en "dem".'
        }
      },
      {
        id: 'ex_a1_9_2',
        type: 'sentence_reorder',
        instruction: {
          en: 'Reorder into a polite question asking for directions.',
          fa: 'کلمات را مرتب کنید تا جمله پرسشی مودبانه برای پرسیدن آدرس تشکیل شود.',
          tr: 'Kibarca yol soran bir soru cümlesi oluşturun.',
          ar: 'رتب الكلمات لتكوين سؤال مهذب للاستفسار عن الطريق.',
          es: 'Ordena la frase para pedir indicaciones de forma cortés.'
        },
        prompt: 'Arrange into a polite question:',
        options: ['Entschuldigung,', 'wie', 'komme', 'ich', 'zum', 'Hauptbahnhof?'],
        correctAnswer: 'Entschuldigung, wie komme ich zum Hauptbahnhof?',
        explanation: {
          en: 'Polite interjection + W-word (wie) + verb (komme) + subject (ich) + directional phrase (zum Hauptbahnhof).',
          fa: 'عبارت عذرخواهی مودبانه + کلمه پرسشی (wie) + فعل (komme) + فاعل (ich) + جهت حرکت.',
          tr: 'Nezaket ifadesi + Soru kelimesi (wie) + fiil (komme) + özne (ich) + yönelme tümleci.',
          ar: 'عبارة الاعتذار + أداة الاستفهام (wie) + الفعل (komme) + الفاعل (ich) + شبه الجملة الدالة على الاتجاه.',
          es: 'Fórmula de cortesía + partícula interrogativa + verbo + sujeto + complemento de dirección.'
        }
      }
    ]
  },
  {
    id: 'a1_2_lek10',
    lektionNumber: 10,
    level: 'A1.2',
    title: 'Gesundheit, Körper und beim Arzt',
    subTitle: 'Körperteile, Krankheiten, Arztbesuch und der Imperativ (Lektion )',
    topic: 'Körperteile, Schmerzen beschreiben, Arztpraxis, Ratschläge geben und das Modalverb "sollen"',
    fotoHoergeschichte: {
      title: 'Foto-Hörgeschichte: In der Hausarztpraxis Dr. Bergmann',
      imagePrompt: 'A modern German doctor practice examination room where a doctor listens to Sayed with a stethoscope and explains the prescription for a cold.',
      imageTheme: 'Arztpraxis in München',
      audioDuration: '02:45',
      transcript: [
        { speaker: 'Dr. Bergmann (Arzt)', text: 'Guten Tag, Herr Bashir! Was fehlt Ihnen denn? Wo haben Sie Schmerzen?' },
        { speaker: 'Sayed Bashir', text: 'Guten Tag, Herr Doktor! Mein Hals tut weh und ich habe seit gestern hohes Fieber.' },
        { speaker: 'Dr. Bergmann', text: 'Haben Sie auch Husten und Kopfschmerzen?' },
        { speaker: 'Sayed Bashir', text: 'Ja, mein Kopf tut sehr weh und ich fühle mich sehr schwach.' },
        { speaker: 'Dr. Bergmann', text: 'Ich untersuche Sie jetzt. Bitte machen Sie den Mund auf und atmen Sie tief ein.' },
        { speaker: 'Sayed Bashir', text: 'Ist es eine Grippe?' },
        { speaker: 'Dr. Bergmann', text: 'Sie haben eine starke Erkältung. Sie sollen drei Tage im Bett bleiben und viel Tee trinken.' }
      ],
      summary: {
        en: 'Sayed visits doctor Dr. Bergmann with a sore throat, headache, and fever, receives an examination and medical advice.',
        fa: 'سید به مطب دکتر برگمان مراجعه کرده، علائم سرماخوردگی، گلودرد و تب را توضیح داده و معاینه و توصیه‌های پزشکی دریافت می‌کند.',
        tr: 'Sayed boğaz ağrısı ve ateş şikayetiyle Dr. Bergmann\'a muayene olur ve dinlenme tavsiyesi ile reçete alır.',
        ar: 'يزور سيد عيادة الطبيب الدكتور بيرغمان وهو يعاني من التهاب الحلق والحمى، ويتلقى الفحص والوصفة الطبية.',
        es: 'Sayed acude a la consulta del doctor Bergmann por dolor de garganta y fiebre, y recibe tratamiento y pautas de reposo.'
      }
    },
    sectionA: {
      title: 'Mussawi A: Sprechen & Dialog',
      focus: 'Sprechen & Hören (Körperteile benennen)',
      description: {
        en: 'Parts of the body: der Kopf, das Auge (die Augen), das Ohr (die Ohren), die Nase, der Hals, der Rücken, der Bauch, das Bein, der Fuß.',
        fa: 'اعضای بدن: سر، چشم (چشم‌ها)، گوش (گوش‌ها)، بینی، گلو/گردن، پشت/کمر، شکم، پا، کف پا.',
        tr: 'Vücudun bölümleri: baş, gözler, kulaklar, burun, boğaz, sırt, karın, bacak, ayak.',
        ar: 'أجزاء الجسم: الرأس، العينان، الأذنان، الأنف، الحلق، الظهر، البطن، الساق، القدم.',
        es: 'Partes del cuerpo: cabeza, ojos, orejas, nariz, garganta, espalda, vientre, pierna, pie.'
      },
      content: 'Der Kopf, der Rücken, der Bauch, der Arm, das Bein, das Auge, das Ohr, die Hand, der Fuß.',
      audioText: 'Mein Kopf tut weh und meine Augen brennen. Ich glaube, ich habe Fieber.',
      practiceTasks: [
        'Zeigen Sie auf 5 Körperteile und nennen Sie das deutsche Wort mit bestimmtem Artikel.',
        'Was tut weh? Formulieren Sie: "Mein Rücken tut weh / Meine Beine tun weh."'
      ]
    },
    sectionB: {
      title: 'Mussawi B: Wortschatz & Hören',
      focus: 'Hören & Wortschatz (Krankheitssymptome & Apotheke)',
      description: {
        en: 'Symptoms and medication: die Erkältung, der Husten, der Schnupfen, das Fieber, die Schmerztabletten, der Hustensaft, das Rezept.',
        fa: 'علائم بیماری و داروخانه: سرماخوردگی، سرفه، آبریزش بینی، تب، قرص مسکن، شربت سرفه، نسخه پزشک.',
        tr: 'Hastalık belirtileri ve eczane: soğuk algınlığı, öksürük, burun akıntısı, ateş, ağrı kesici, şurup, reçete.',
        ar: 'أعراض المرض والصيدلية: نزلة البرد، السعال، الزكام، الحمى، حبوب المسكن، شراب السعال، الوصفة الطبية.',
        es: 'Síntomas y farmacia: resfriado, tos, congestión nasal, fiebre, analgésicos, jarabe, receta médica.'
      },
      content: 'In der Apotheke: Ich brauche etwas gegen Halsschmerzen und Husten. Haben Sie ein Rezept?',
      audioText: 'Nehmen Sie diese Tabletten dreimal täglich nach dem Essen mit viel Wasser ein.',
      practiceTasks: [
        'Hören Sie das Kundengespräch in der Apotheke und notieren Sie die Dosierung.',
        'Fragen Sie den Apotheker nach einem rezeptfreien Medikament gegen Schnupfen.'
      ]
    },
    sectionC: {
      title: 'Mussawi C: Alltagskommunikation',
      focus: 'Sprechen & Dialoge (Einen Arzttermin vereinbaren)',
      description: {
        en: 'Calling the doctor practice: "Praxis Dr. Bergmann, guten Tag!", "Ich brauche dringend einen Termin", "Haben Sie Ihre Versichertenkarte dabei?"',
        fa: 'تماس با مطب پزشک برای گرفتن وقت: «مطب دکتر برگمان»، «من فوراً به یک وقت ویزیت نیاز دارم»، «کارت بیمه درمانی همراهتان هست؟».',
        tr: 'Doktordan randevu alma diyalogları: "Acil randevuya ihtiyacım var", "Sağlık sigortası kartınız yanınızda mı?"',
        ar: 'حجز موعد عند الطبيب عبر الهاتف: "أحتاج إلى موعد عاجل"، "هل بطاقة التأمين الصحي معك؟".',
        es: 'Pedir cita médica por teléfono: "Necesito una cita urgente", "¿Tiene su tarjeta sanitaria?"'
      },
      content: 'Können Sie heute um elf Uhr vorbeikommen? - Ja, vielen Dank! Ich bringe meine Versichertenkarte mit.',
      audioText: 'Guten Tag, ich möchte einen Termin für die Vorsorgeuntersuchung vereinbaren.',
      practiceTasks: [
        'Simulieren Sie ein Telefonat zur Terminvereinbarung in der Praxis.',
        'Sagen Sie den Termin höflich ab und bitten Sie um einen neuen Termin.'
      ]
    },
    sectionD: {
      title: 'Mussawi D: Leseverstehen & Text',
      focus: 'Lesen & Textanalyse (Packungsbeilage & Krankmeldung)',
      description: {
        en: 'Read medication leaflets (Packungsbeilage) and understand employer sick leave notifications (Arbeitsunfähigkeitsbescheinigung / AU).',
        fa: 'خواندن برگه راهنمای دارو (Packungsbeilage) و گواهی استعلاجی کارفرما (برگه استعلاجی پزشک AU).',
        tr: 'İlaç prospektüsünü okuma ve iş yeri hastalık raporunu (AU-Bescheinigung) anlama.',
        ar: 'قراءة النشرة الطبية المرفقة بالدواء وشهادة الإجازة المرضية للعمل (AU).',
        es: 'Lectura de prospectos de medicamentos y certificados de baja médica laboral (AU).'
      },
      content: 'Packungsbeilage von Paracetamol 500mg.',
      readingText: {
        type: 'Medikamenten-Beilage',
        title: 'Gebrauchsinformation: Paracetamol 500 mg Filmtabletten',
        body: 'Anwendungsgebiete: Leichte bis mäßig starke Schmerzen, Fieber. Dosierung für Erwachsene: 1 bis 2 Tabletten alle 6 Stunden. Maximale Tagesdosis: 8 Tabletten (4000 mg). Nicht länger als 3 Tage ohne ärztlichen Rat einnehmen. Bei Schwangerschaft vorab den Arzt befragen. Für Kinder unzugänglich aufbewahren.'
      },
      practiceTasks: [
        'Wie viele Tabletten darf ein Erwachsener maximal pro Tag einnehmen?',
        'Wie viele Stunden muss man zwischen zwei Einnahmen mindestens warten?'
      ]
    },
    sectionE: {
      title: 'Mussawi E: Grammatik & Schreiben',
      focus: 'Grammatik & Schreiben (Der Imperativ & Das Modalverb "sollen")',
      description: {
        en: 'Form the imperative for advice and commands (du, ihr, Sie) and express doctors orders with "sollen".',
        fa: 'ساخت فعل امری (Imperativ) برای توصیه‌ها و دستورات (du, ihr, Sie) و بیان دستورات پزشک با فعل وجهی "sollen".',
        tr: 'Emir kipi (Imperativ) formları (du, ihr, Sie) ve doktor tavsiyesi bildiren "sollen" modal fiili.',
        ar: 'صياغة فعل الأمر (Imperativ) للضمائر (du, ihr, Sie) والتعبير عن نصائح الطبيب باستخدام "sollen".',
        es: 'Forma el imperativo para consejos y órdenes (du, ihr, Sie) y utiliza el modal "sollen" para recomendaciones médicas.'
      },
      content: 'Imperativ: Trink viel Tee! (du) / Trinkt viel Tee! (ihr) / Trinken Sie viel Tee! (Sie). Sollen: Der Arzt sagt, ich soll im Bett bleiben.',
      grammarSnippet: {
        id: 'a1_lek10_imperativ_sollen',
        level: 'A1.2',
        lektion: 10,
        germanTitle: 'Der Imperativ (Befehlsform) & das Modalverb "sollen"',
        formula: 'du: Trink(e)! | ihr: Trinkt! | Sie: Trinken Sie! || S + sollen (Pos 2) + (...) + *Infinitiv*',
        explanation: {
          en: 'The informal singular imperative drops the personal pronoun "du" and the verb ending "-st" (du trinkst -> Trink!). "Sollen" conveys advice or instructions given by a third party (like a doctor).',
          fa: 'در حالت امری مفرد خودمانی، ضمیر "du" و پسوند "-st" فعل حذف می‌شوند (du trinkst -> Trink!). فعل "sollen" برای انتقال دستور یا توصیه شخص ثالث (مانند پزشک) به کار می‌رود.',
          tr: 'Samimi tekil emir kipinde "du" zamiri ve "-st" fiil eki atılır: Trink! "sollen" ise başkasının tavsiyesini aktarır.',
          ar: 'في صيغة الأمر للمفرد غير الرسمي، يُحذف الضمير "du" واللاحقة "-st": Trink! ويعبر "sollen" عن نصيحة أو أمر من طرف ثالث كطبيب.',
          es: 'En el imperativo informal singular se suprime el pronombre "du" y la desinencia "-st": Trink! "Sollen" transmite el consejo de un tercero.'
        },
        examples: [
          {
            german: 'Bleiben Sie bitte im Bett und trinken Sie viel warmen Kräutertee!',
            formulaBreakdown: 'Bleiben Sie (Imperativ formell) + im Bett + und + trinken Sie (Imperativ formell) + viel Tee',
            literalTranslation: {
              en: 'Stay you please in bed and drink you much warm herbal tea!',
              fa: 'بمانید شما لطفاً در تخت و بنوشید شما بسیار چای گیاهی گرم!',
              tr: 'Lütfen yatakta kalınız ve bol sıcak bitki çayı içiniz!',
              ar: 'ابقَ في السرير من فضلك واشرب الكثير من شاي الأعشاب الدافئ!',
              es: '¡Quédese por favor en la cama y beba mucho té caliente de hierbas!'
            },
            fluentTranslation: {
              en: 'Please stay in bed and drink plenty of warm herbal tea!',
              fa: 'لطفاً در رختخواب استراحت کنید و چای گیاهی گرم فراوان بنوشید!',
              tr: 'Lütfen yatakta dinlenin ve bolca sıcak bitki çayı için!',
              ar: 'يرجى البقاء في السرير وشرب الكثير من شاي الأعشاب الدافئ!',
              es: '¡Por favor, quédese en la cama y beba mucho té de hierbas caliente!'
            }
          }
        ],
        category: 'verbs'
      },
      practiceTasks: [
        'Bilden Sie den Imperativ für "du" und "Sie": schlafen, anrufen, einnehmen, aufstehen.',
        'Geben Sie einem kranken Freund 3 gute Ratschläge mit "Du sollst...".'
      ]
    },
    videoClip: {
      title: 'Video: Gute Besserung! Krankenbesuch bei Sayed',
      scenario: 'Lukas bringt Sayed eine heiße Hühnersuppe und frische Orangen vorbei.',
      category: 'alltag',
      duration: '02:30',
      germanTranscript: [
        'Hallo Sayed! Wie fühlst du dich heute?',
        'Hallo Lukas, danke für deinen Besuch. Es geht mir schon etwas besser.',
        'Ich habe dir frische Orangen und warme Suppe mitgebracht.',
        'Das ist wirklich sehr aufmerksam von dir! Vielen Dank!',
        'Ruh dich gut aus und schlaf viel. Gute Besserung!'
      ],
      translatedTranscript: [
        {
          en: 'Hello Sayed! How are you feeling today?',
          fa: 'سلام سید! امروز چه احساسی داری؟ حالت چطور است؟',
          tr: 'Merhaba Sayed! Bugün kendini nasıl hissediyorsun?',
          ar: 'مرحباً سيد! كيف تشعر اليوم؟',
          es: '¡Hola Sayed! ¿Cómo te encuentras hoy?'
        },
        {
          en: 'Hello Lukas, thank you for visiting. I feel a bit better already.',
          fa: 'سلام لوکاس، از عیادتت ممنونم. حالم کمی بهتر شده است.',
          tr: 'Merhaba Lukas, ziyaretin için teşekkürler. Şimdiden biraz daha iyiyim.',
          ar: 'أهلاً لوكاس، شكراً لزيارتك. أشعر بتحسن قليل بالفعل.',
          es: 'Hola Lukas, gracias por venir a verme. Ya me encuentro un poco mejor.'
        },
        {
          en: 'I brought you fresh oranges and warm soup.',
          fa: 'برایت پرتقال‌های تازه و سوپ گرم آورده‌ام.',
          tr: 'Sana taze portakallar ve sıcak çorba getirdim.',
          ar: 'لقد أحضرت لك برتقالاً طازجاً وحساءً ساخناً.',
          es: 'Te he traído naranjas frescas y sopa caliente.'
        },
        {
          en: 'That is really very thoughtful of you! Thank you very much!',
          fa: 'این واقعاً لطف و محبت بزرگ تو را نشان می‌دهد! خیلی ممنونم!',
          tr: 'Bu gerçekten çok düşünceli bir davranış! Çok teşekkür ederim!',
          ar: 'هذا لطف واهتمام كبير منك حقاً! شكراً جزيلاً لك!',
          es: '¡Es un detalle muy considerado por tu parte! ¡Muchísimas gracias!'
        },
        {
          en: 'Rest well and sleep a lot. Get well soon!',
          fa: 'خوب استراحت کن و زیاد بخواب. به امید بهبودی سریع!',
          tr: 'İyice dinlen ve bol bol uyu. Geçmiş olsun!',
          ar: 'استرح جيداً ونم كثيراً. أتمنى لك الشفاء العاجل!',
          es: 'Descansa bien y duerme mucho. ¡Que te mejores pronto!'
        }
      ]
    },
    exercises: [
      {
        id: 'ex_a1_10_1',
        type: 'multiple_choice',
        instruction: {
          en: 'Select the correct informal singular imperative (du-form) of "nehmen".',
          fa: 'شکل امری مفرد خودمانی (برای du) فعل "nehmen" (مصرف کردن/برداشتن) را انتخاب نمایید.',
          tr: '"nehmen" fiilinin samimi tekil emir kipi (du) formunu seçiniz.',
          ar: 'اختر صيغة الأمر غير الرسمية للمفرد (du) من الفعل "nehmen".',
          es: 'Elige la forma correcta del imperativo singular informal del verbo "nehmen".'
        },
        prompt: '_____ diese Tablette jeden Morgen vor dem Frühstück!',
        options: ['Nimm', 'Nehme', 'Nimmt', 'Nehmen'],
        correctAnswer: 'Nimm',
        explanation: {
          en: 'Strong verbs with vowel change (e -> i) keep the vowel change in the informal singular imperative: du nimmst -> Nimm!',
          fa: 'افعال قوی که در صرف تغییر مصوت می‌دهند (e تبدیل به i می‌شود)، در حالت امری مفرد خودمانی نیز این تغییر مصوت را حفظ می‌کنند: Nimm!',
          tr: 'Kök ünlü değişimi (e -> i) yaşayan güçlü fiiller emir kipinde de bu değişimi korur: Nimm!',
          ar: 'الأفعال القوية التي يتغير حرف العلة فيها من (e إلى i) تحافظ على هذا التغيير في صيغة الأمر: Nimm!',
          es: 'Los verbos fuertes con cambio vocálico (e -> i) mantienen dicho cambio en el imperativo singular informal: Nimm!'
        }
      },
      {
        id: 'ex_a1_10_2',
        type: 'fill_blank',
        instruction: {
          en: 'Choose the correct plural form of the body part "das Auge".',
          fa: 'شکل جمع عضو بدن "das Auge" (چشم) را انتخاب کنید.',
          tr: '"das Auge" vücut bölümünün doğru çoğul halini seçiniz.',
          ar: 'اختر صيغة الجمع الصحيحة لعضو الجسم "das Auge" (العين).',
          es: 'Elige la forma en plural correcta para "das Auge" (ojo).'
        },
        prompt: 'Meine _____ tun weh (das Auge).',
        options: ['Augen', 'Auger', 'Auges', 'Auge'],
        correctAnswer: 'Augen',
        explanation: {
          en: 'The plural of "das Auge" is "die Augen" with the ending "-n".',
          fa: 'جمع کلمه "das Auge" با گرفتن پسوند "-n" به صورت "die Augen" (چشم‌ها) در می‌آید.',
          tr: '"das Auge" isminin çoğulu "-n" eki alarak "die Augen" olur.',
          ar: 'جمع كلمة "das Auge" هو "die Augen" بإضافة اللاحقة "-n".',
          es: 'El plural de "das Auge" es "die Augen".'
        }
      }
    ]
  },
  {
    id: 'a1_2_lek11',
    lektionNumber: 11,
    level: 'A1.2',
    title: 'In der Stadt unterwegs und Mobilität',
    subTitle: 'Verkehrsmittel, Fahrkarten und Wegbeschreibung (Lektion )',
    topic: 'Fahrpläne, Öffentlicher Nahverkehr (ÖPNV) und Präpositionen mit Dativ (mit, nach, zu, bei)',
    fotoHoergeschichte: {
      title: 'Foto-Hörgeschichte: Am Hauptbahnhof in Nürnberg',
      imagePrompt: 'A bustling train platform at Nuremberg Hauptbahnhof where a traveler asks a DB information officer for directions to the U-Bahn.',
      imageTheme: 'Nürnberg Hauptbahnhof ÖPNV',
      audioDuration: '02:30',
      transcript: [
        { speaker: 'Reisender', text: 'Entschuldigung, wie komme ich am schnellsten zur Messe Nürnberg?' },
        { speaker: 'DB-Mitarbeiter', text: 'Nehmen Sie die U-Bahn-Linie U1 direkt vom Gleis 2 in Richtung Langwasser Süd.' },
        { speaker: 'Reisender', text: 'Brauche ich ein Einzelticket oder ein Tagesticket?' },
        { speaker: 'DB-Mitarbeiter', text: 'Wenn Sie heute noch zurückfahren, lohnt sich das Tagesticket Solo.' },
        { speaker: 'Reisender', text: 'Vielen Dank für Ihre freundliche Auskunft!' }
      ],
      summary: {
        en: 'A passenger at Nuremberg central station asks for train connections and ticket advice to the exhibition center.',
        fa: 'یک مسافر در ایستگاه مرکزی قطار نورنبرگ درباره نحوه رسیدن به نمایشگاه و نوع بلیت مناسب سوال می‌کند.',
        tr: 'Nürnberg merkez tren garındaki bir yolcu fuar merkezine ulaşım ve bilet seçenekleri hakkında bilgi alır.',
        ar: 'يسأل مسافر في محطة قطار نورنبرغ عن كيفية الوصول إلى مركز المعارض وأفضل نوع تذكرة.',
        es: 'Un viajero en la estación central de Núremberg consulta las conexiones de metro y tipos de billete.'
      }
    },
    sectionA: {
      title: 'Mussawi A: Sprechen & Dialog',
      focus: 'Sprechen & Hören (Verkehrsmittel & Dativ-Präposition "mit")',
      description: {
        en: 'Expressing modes of transportation with "mit + Dativ": mit dem Bus, mit der U-Bahn, mit dem Zug, mit dem Fahrrad.',
        fa: 'بیان وسایل نقلیه با حرف اضافه "mit + Dativ": با اتوبوس (dem Bus)، با مترو (der U-Bahn)، با قطار (dem Zug).',
        tr: '"mit + Dativ" yapısıyla ulaşım araçlarını ifade etme: mit dem Bus, mit der Bahn.',
        ar: 'استخدام وسائل النقل مع حرف الجر "mit + Dativ": mit dem Bus, mit dem Zug.',
        es: 'Medios de transporte con "mit + Dativo": en autobús, en tren, en metro.'
      },
      content: 'Wie fahren Sie zur Arbeit? - Ich fahre meistens mit der U-Bahn oder mit dem Fahrrad.',
      practiceTasks: ['Fragen Sie Ihren Partner nach seinem täglichen Arbeitsweg.', 'Üben Sie: mit dem Auto / mit der Straßenbahn.']
    },
    sectionB: {
      title: 'Mussawi B: Wortschatz & Hören',
      focus: 'Wortschatz & Orientierung (Wegbeschreibung)',
      description: {
        en: 'Directions: geradeaus gehen, nach links/rechts abbiegen, bis zur Kreuzung/Ampel.',
        fa: 'آدرس دادن و جهت‌یابی: مستقیم رفتن، به چپ/راست پیچیدن، تا سر چهارراه/چراغ راهنما.',
        tr: 'Yol tarifi: düz gitmek, sola/sağa dönmek, kavşağa kadar gitmek.',
        ar: 'وصف الطريق: الذهاب للأمام، الانعطاف يميناً أو يساراً، حتى الإشارة الضوئية.',
        es: 'Indicaciones de dirección: todo recto, girar a la izquierda/derecha, hasta el cruce.'
      },
      content: 'Gehen Sie zuerst geradeaus, dann an der Ampel nach rechts. Das Museum liegt auf der linken Seite.',
      practiceTasks: ['Erklären Sie den Weg vom Bahnhof zum Hotel.']
    },
    sectionC: {
      title: 'Mussawi C: Alltagskommunikation',
      focus: 'Grammatik (Dativ-Präpositionen: zu, nach, bei, von, aus)',
      description: {
        en: 'Fixed Dative prepositions: zu (direction), nach (cities/countries/directions), bei (at someone\'s place).',
        fa: 'حروف اضافه همواره داتیوساز: zu (به سوی اشخاص/اماکن)، nach (به شهرها/کشورها)، bei (نزدِ/در محلِ).',
        tr: 'Dativ gerektiren edatlar: zu, nach, bei, von, aus.',
        ar: 'حروف الجر الثابتة مع المجرور (Dativ): zu, nach, bei.',
        es: 'Preposiciones que siempre rigen dativo: zu, nach, bei, aus, von.'
      },
      content: 'Ich gehe zum (zu + dem) Arzt. Er wohnt bei seinen Eltern. Wir fliegen nach Berlin.',
      practiceTasks: ['Setzen Sie "zu", "nach" oder "bei" in 5 Beispielsätze ein.']
    },
    sectionD: {
      title: 'Mussawi D: Leseverstehen & Text',
      focus: 'Lesen (Fahrpläne, Ticketautomaten & DB-Apps)',
      description: {
        en: 'Read train timetables, platform signs, and transit schedules accurately.',
        fa: 'خواندن جداول زمان‌بندی قطارها، تابلوهای ایستگاه و سامانه‌های بلیت آنلاین.',
        tr: 'Tren sefer saatlerini ve bilet otomatı ekranlarını anlama.',
        ar: 'قراءة جداول مواعيد القطارات ولوحات المحطات وتطبيقات النقل.',
        es: 'Lectura de horarios de transporte, andenes y billetes de tren.'
      },
      content: 'Abfahrt 08:42 Uhr, Gleis 4, Umstieg in Hannover Hbf auf Gleis 7.',
      practiceTasks: ['Finden Sie im Fahrplan die Umsteigezeit und den Zielbahnhof.']
    },
    sectionE: {
      title: 'Mussawi E: Grammatik & Schreiben',
      focus: 'Schreiben & Sprechen (Reiseplanung & Fahrkartenkauf)',
      description: {
        en: 'Buy tickets at the counter and ask for seat reservations and discounts (BahnCard).',
        fa: 'خرید بلیت در باجه و درخواست رزرو صندلی و تخفیف‌های کارت قطار (بان‌کارت).',
        tr: 'Gişeden bilet alma ve koltuk rezervasyonu yaptırma.',
        ar: 'شراء التذاكر من شباك التذاكر وحجز المقاعد والاستفسار عن الخصومات.',
        es: 'Compra de billetes en ventanilla y reserva de asientos.'
      },
      content: 'Ich möchte eine einfache Fahrt nach Frankfurt, zweite Klasse, bitte.',
      practiceTasks: ['Führen Sie einen Kaufdialog am Fahrkartenschalter.']
    },
    exercises: [
      {
        id: 'ex_a1_11_1',
        type: 'multiple_choice',
        instruction: {
          en: 'Select the correct dative article after the preposition "mit".',
          fa: 'حرف تعریف داتیو مناسب پس از حرف اضافه "mit" را انتخاب نمایید.',
          tr: '"mit" edatından sonraki doğru Dativ artikelini seçiniz.',
          ar: 'اختر أداة التعريف الصحيحة في حالة المجرور (Dativ) بعد حرف الجر "mit".',
          es: 'Elige el artículo en dativo correcto tras la preposición "mit".'
        },
        prompt: 'Frau Müller fährt jeden Tag mit _____ U-Bahn zur Arbeit (die U-Bahn).',
        options: ['der', 'dem', 'die', 'den'],
        correctAnswer: 'der',
        explanation: {
          en: '"mit" always demands the Dative case. Feminine "die" becomes "der" in Dativ: "mit der U-Bahn".',
          fa: 'حرف اضافه "mit" همواره حالت داتیو می‌خواهد. آرتیکل مؤنث "die" در داتیو تبدیل به "der" می‌شود: mit der U-Bahn.',
          tr: '"mit" daima Dativ ister. Dişil "die", Dativ halinde "der" olur: mit der U-Bahn.',
          ar: 'حرف الجر "mit" يتطلب حالة Dativ دائماً. أداة المؤنث "die" تتحول في Dativ إلى "der".',
          es: '"mit" siempre rige dativo. El artículo femenino "die" se transforma en "der".'
        }
      }
    ]
  },
  {
    id: 'a1_2_lek12',
    lektionNumber: 12,
    level: 'A1.2',
    title: 'Kundenservice, Kleidung und Einkaufen',
    subTitle: 'Farben, Größen, Gefallen und Reklamationen (Lektion )',
    topic: 'Kleidung kaufen, Größen anprobieren, Umtausch im Kaufhaus und Demonstrativpronomen',
    fotoHoergeschichte: {
      title: 'Foto-Hörgeschichte: Im Kaufhaus in Leipzig',
      imagePrompt: 'A stylish modern clothing department store in Leipzig where a customer tries on a blue wool sweater with a friendly sales assistant.',
      imageTheme: 'Kaufhaus Leipzig',
      audioDuration: '02:25',
      transcript: [
        { speaker: 'Kunde', text: 'Guten Tag, ich suche einen warmen Pullover für den Winter.' },
        { speaker: 'Verkäuferin', text: 'Sehr gern! Welche Größe und welche Farbe bevorzugen Sie?' },
        { speaker: 'Kunde', text: 'Größe M in Dunkelblau oder Anthrazit, bitte.' },
        { speaker: 'Verkäuferin', text: 'Probieren Sie diesen Pullover hier an. Die Umkleidekabinen sind dort drüben.' },
        { speaker: 'Kunde', text: 'Danke, er passt perfekt und gefällt mir sehr gut!' }
      ],
      summary: {
        en: 'A customer shops for a warm winter sweater in Leipzig, asks for sizes and colors, and receives guidance from a sales assistant.',
        fa: 'مشتری در یک فروشگاه بزرگ در لایپزیگ برای خرید پلیور زمستانی اندازه و رنگ دلخواهش را با کمک فروشنده انتخاب می‌کند.',
        tr: 'Leipzig\'deki bir mağazada kışlık kazak bakan müşteri, beden ve renk konusunda satış danışmanından yardım alır.',
        ar: 'يتسوق زبون في متجر أزياء في لايبزيغ ويبحث عن سترة شتوية دافئة بمقاس ولون محدد.',
        es: 'Un cliente busca un jersey de invierno en unos grandes almacenes en Leipzig y se lo prueba.'
      }
    },
    sectionA: {
      title: 'Mussawi A: Sprechen & Dialog',
      focus: 'Sprechen & Wortschatz (Kleidungsstücke & Farben)',
      description: {
        en: 'Garments and colors: die Hose, das Hemd, der Rock, die Jacke; blau, rot, schwarz, weiß, grau.',
        fa: 'انواع پوشاک و رنگ‌ها: شلوار، پیراهن، دامن، کاپشن، کفش؛ آبی، قرمز، سیاه، سفید، خاکستری.',
        tr: 'Kıyafetler ve renkler: pantolon, gömlek, etek, ceket; mavi, kırmızı, siyah.',
        ar: 'الملابس والألوان: السروال، القميص، التنورة، السترة؛ أزرق، أحمر، أسود، أبيض.',
        es: 'Prendas de vestir y colores: pantalón, camisa, falda, chaqueta; azul, rojo, negro.'
      },
      content: 'Der Pullover ist sehr schön, aber die Jacke gefällt mir besser.',
      practiceTasks: ['Beschreiben Sie Ihre Kleidung: "Heute trage ich..."', 'Nennen Sie 5 Kleidungsstücke mit Artikel.']
    },
    sectionB: {
      title: 'Mussawi B: Wortschatz & Hören',
      focus: 'Grammatik (Demonstrativpronomen: dieser / dieses / diese)',
      description: {
        en: 'Demonstrative pronouns pointing to specific items: dieser Pullover (m), dieses Kleid (n), diese Hose (f), diese Schuhe (pl).',
        fa: 'ضمایر اشاره: این پلیور (dieser)، این لباس زنانه (dieses)، این شلوار (diese)، این کفش‌ها (diese).',
        tr: 'İşaret zamirleri: dieser (eril), dieses (nötr), diese (dişil/çoğul).',
        ar: 'أسماء الإشارة: dieser للمذكر، dieses للمحايد، diese للمؤنث والجمع.',
        es: 'Pronombres demostrativos: dieser, dieses, diese.'
      },
      content: 'Welcher Mantel gefällt Ihnen? - Dieser Mantel hier gefällt mir sehr gut.',
      practiceTasks: ['Üben Sie die Formen: Welcher? - Dieser! / Welches? - Dieses!']
    },
    sectionC: {
      title: 'Mussawi C: Alltagskommunikation',
      focus: 'Hören & Sprechen (Größen, Anprobe & Gefallen)',
      description: {
        en: 'Trying on clothes: Passt die Hose? - Sie ist zu eng / zu weit / zu kurz / genau passend.',
        fa: 'پرو لباس: آیا اندازه است؟ - خیلی تنگ است / خیلی گشاد است / کاملاً اندازه است.',
        tr: 'Kıyafet deneme: dar, bol, kısa veya tam uyumlu ifadeleri.',
        ar: 'قياس الملابس: هل المقاس مناسب؟ - ضيق جداً / واسع جداً / مقاس مثالي.',
        es: 'Probarse ropa: queda estrecho, ancho, corto o perfecto.'
      },
      content: 'Haben Sie diese Schuhe auch in Größe 42? - Ja, einen Moment bitte.',
      practiceTasks: ['Führen Sie einen Dialog in der Umkleidekabine.']
    },
    sectionD: {
      title: 'Mussawi D: Leseverstehen & Text',
      focus: 'Lesen & Schreiben (Kassenbon & Reklamation)',
      description: {
        en: 'Return and exchange policy: Umtausch innerhalb von 14 Tagen mit Kassenbon.',
        fa: 'قوانین تعویض و پس دادن کالا: تعویض ظرف ۱۴ روز با ارائه فاکتور خرید.',
        tr: 'Ürün iadesi ve fişle değişim kuralları.',
        ar: 'سياسة الاسترجاع والاستبدال خلال 14 يوماً مع إبراز فاتورة الشراء.',
        es: 'Devoluciones y cambios con ticket de compra.'
      },
      content: 'Ich möchte dieses Hemd umtauschen. Es hat einen Fehler an der Naht.',
      practiceTasks: ['Verfassen Sie eine kurze Reklamationsnachricht.']
    },
    sectionE: {
      title: 'Mussawi E: Grammatik & Schreiben',
      focus: 'Kommunikation (Verben mit Dativ: gefallen, passen, stehen)',
      description: {
        en: 'Verbs requiring dative objects: Das Hemd gefällt mir / steht dir gut / passt ihm nicht.',
        fa: 'افعال با متمم داتیو: این پیراهن به من می‌آید (steht mir) / اندازه‌ام است (passt mir) / خوشم می‌آید (gefällt mir).',
        tr: 'Dativ alan fiiller: gefallen, passen, stehen.',
        ar: 'الأفعال المتطلبة لحالة Dativ: يعجبني (gefällt mir)، يناسبني (passt mir).',
        es: 'Verbos con dativo: gefallen, passen, stehen.'
      },
      content: 'Die blaue Bluse steht Ihnen ausgezeichnet!',
      practiceTasks: ['Komplimente machen: "Die Farbe steht dir fantastisch!"']
    },
    exercises: [
      {
        id: 'ex_a1_12_1',
        type: 'multiple_choice',
        instruction: {
          en: 'Select the correct demonstrative pronoun for masculine nominative.',
          fa: 'ضمیر اشاره صحیح برای اسم مذکر در حالت فاعلی را انتخاب کنید.',
          tr: 'Eril yalın haldeki doğru işaret zamirini seçiniz.',
          ar: 'اختر اسم الإشارة الصحيح للمذكر في حالة الرفع.',
          es: 'Elige el pronombre demostrativo correcto para masculino nominativo.'
        },
        prompt: '_____ Pullover ist sehr warm und modern (der Pullover).',
        options: ['Dieser', 'Dieses', 'Diese', 'Diesen'],
        correctAnswer: 'Dieser',
        explanation: {
          en: 'For masculine nominative (der Pullover), the demonstrative pronoun is "Dieser".',
          fa: 'برای اسم مذکر در حالت فاعلی (der Pullover)، ضمیر اشاره "Dieser" است.',
          tr: 'Eril isimlerin yalın halinde (der Pullover) "Dieser" zamiri kullanılır.',
          ar: 'مع الاسم المذكر في حالة الرفع (der Pullover) نستخدم اسم الإشارة "Dieser".',
          es: 'Para masculino en nominativo (der Pullover) se utiliza "Dieser".'
        }
      }
    ]
  },
  {
    id: 'a1_2_lek13',
    lektionNumber: 13,
    level: 'A1.2',
    title: 'Feste, Einladungen und Geschenke',
    subTitle: 'Feiertage, Geburtstage und Personalpronomen im Dativ (Lektion )',
    topic: 'Feste feiern, Glückwünsche aussprechen, Geschenke auswählen und Dativpronomen (mir, dir, ihm, ihr, uns)',
    fotoHoergeschichte: {
      title: 'Foto-Hörgeschichte: Die Geburtstagsüberraschung in Köln',
      imagePrompt: 'A lively birthday celebration in a Cologne apartment where friends present a decorated birthday cake and hand over presents with smiles.',
      imageTheme: 'Geburtstagsparty Köln',
      audioDuration: '02:35',
      transcript: [
        { speaker: 'Lukas', text: 'Herzlichen Glückwunsch zum Geburtstag, Sayed!' },
        { speaker: 'Sayed Bashir', text: 'Vielen Dank, Lukas! Schön, dass ihr alle gekommen seid.' },
        { speaker: 'Anna', text: 'Wir haben ein Geschenk für dich mitgebracht. Wir hoffen, es gefällt dir!' },
        { speaker: 'Sayed Bashir', text: 'Das Buch über die deutsche Geschichte? Das schenkt mir eine große Freude!' },
        { speaker: 'Lukas', text: 'Alles Gute für dein neues Lebensjahr!' }
      ],
      summary: {
        en: 'Friends surprise Sayed for his birthday in Cologne, offer gifts, and celebrate together.',
        fa: 'دوستان سید به مناسبت تولدش در کلن جشن غافلگیرکننده‌ای تدارک دیده و به او کادو می‌دهند.',
        tr: 'Arkadaşları Köln\'de Sayed\'e sürpriz doğum günü kutlaması yapar ve hediyeler verir.',
        ar: 'يفاجئ الأصدقاء سيد في عيد ميلاده في كولونيا ويقدمون له الهدايا والتهاني.',
        es: 'Los amigos sorprenden a Sayed por su cumpleaños en Colonia y celebran juntos.'
      }
    },
    sectionA: {
      title: 'Mussawi A: Sprechen & Dialog',
      focus: 'Sprechen & Hören (Feste & Feiertage in der D-A-CH-Region)',
      description: {
        en: 'German holidays: Weihnachten, Silvester, Ostern, Geburtstag, Hochzeit.',
        fa: 'جشن‌ها و مناسبت‌های آلمان: کریسمس، سال نو، عید پاک، تولد، عروسی.',
        tr: 'Almanya\'daki bayramlar: Noel, Yılbaşı, Paskalya, Doğum günü.',
        ar: 'الأعياد والمناسبات: عيد الميلاد، رأس السنة، الفصح، عيد الميلاد، الزفاف.',
        es: 'Fiestas y celebraciones: Navidad, Nochevieja, Pascua, cumpleaños.'
      },
      content: 'Frohe Weihnachten! / Ein gutes neues Jahr! / Herzlichen Glückwunsch zum Geburtstag!',
      practiceTasks: ['Üben Sie die typischen Glückwünsche zu verschiedenen Anlässen.']
    },
    sectionB: {
      title: 'Mussawi B: Wortschatz & Hören',
      focus: 'Grammatik (Personalpronomen im Dativ: mir, dir, ihm, ihr, uns, euch, ihnen)',
      description: {
        en: 'Dative personal pronouns: ich -> mir, du -> dir, er/es -> ihm, sie -> ihr, wir -> uns, ihr -> euch, sie/Sie -> ihnen/Ihnen.',
        fa: 'ضمایر شخصی در حالت داتیو: به من (mir)، به تو (dir)، به او مذکر/خنثی (ihm)، به او مؤنث (ihr)، به ما (uns)، به شماها (euch)، به آنها/جناب‌عالی (ihnen/Ihnen).',
        tr: 'Dativ şahıs zamirleri: mir, dir, ihm, ihr, uns, euch, ihnen.',
        ar: 'ضمائر الملكية والمجرور في حالة Dativ: لي (mir)، لك (dir)، له (ihm)، لها (ihr).',
        es: 'Pronombres personales en dativo: mir, dir, ihm, ihr, uns, euch, ihnen.'
      },
      content: 'Wie geht es dir? - Es geht mir sehr gut, danke! Ich helfe dir gerne beim Umzug.',
      practiceTasks: ['Ersetzen Sie das Substantiv durch das passende Dativpronomen.']
    },
    sectionC: {
      title: 'Mussawi C: Alltagskommunikation',
      focus: 'Wortschatz (Einladungen & Zusagen/Absagen)',
      description: {
        en: 'Writing invitations: Einladung zur Party, danke für die Einladung, ich komme gerne / leider kann ich nicht kommen.',
        fa: 'دعوت‌نامه‌ها: دعوت به مهمانی، تشکر از دعوت، با کمال میل می‌آیم / متاسفانه نمی‌توانم بیایم.',
        tr: 'Davetiyeler, davete icabet etme veya nazikçe reddetme.',
        ar: 'كتابة الدعوات والرد عليها بالقبول أو الاعتذار بلباقة.',
        es: 'Invitaciones, confirmaciones y cancelaciones educadas.'
      },
      content: 'Liebe Freunde, ich lade euch herzlich zu meiner Einweihungsfeier ein!',
      practiceTasks: ['Schreiben Sie eine Zusage zu einer Hochzeitseinladung.']
    },
    sectionD: {
      title: 'Mussawi D: Leseverstehen & Text',
      focus: 'Lesen (Glückwunschkarten & Bräuche)',
      description: {
        en: 'Read greeting cards, wedding invitations, and seasonal wishes.',
        fa: 'خواندن کارت‌های تبریک، دعوت‌نامه‌های عروسی و سنت‌های جشن در آلمان.',
        tr: 'Tebrik kartları ve düğün davetiyelerini okuma.',
        ar: 'قراءة بطاقات التهنئة ودعوات الزفاف والتقاليد الاجتماعية.',
        es: 'Lectura de tarjetas de felicitación y costumbres locales.'
      },
      content: 'Wir wünschen dem Brautpaar von Herzen alles Liebe und Gute für die gemeinsame Zukunft!',
      practiceTasks: ['Gestalten Sie eine persönliche Glückwunschkarte.']
    },
    sectionE: {
      title: 'Mussawi E: Grammatik & Schreiben',
      focus: 'Schreiben & Aussprache (Das Datum mit Ordinalzahlen)',
      description: {
        en: 'Ordinal numbers for dates: am ersten Mai, am fünfzehnten Oktober, am dritten Januar.',
        fa: 'اعداد ترتیبی در تاریخ‌ها: در یکم ماه مه (am ersten Mai)، در پانزدهم اکتبر (am fünfzehnten Oktober).',
        tr: 'Tarihlerde sıra sayıları: am ersten, am zweiten, am dritten.',
        ar: 'الأعداد الترتيبية مع التواريخ: am ersten Mai, am dritten Juni.',
        es: 'Números ordinales en fechas: el primero de mayo, el quince de octubre.'
      },
      content: 'Wann hast du Geburtstag? - Ich habe am zwanzigsten Juli Geburtstag.',
      practiceTasks: ['Nennen Sie das Geburtsdatum Ihrer Familienmitglieder.']
    },
    exercises: [
      {
        id: 'ex_a1_13_1',
        type: 'multiple_choice',
        instruction: {
          en: 'Select the correct dative personal pronoun for "du".',
          fa: 'ضمیر شخصی داتیو مناسب برای ضمیر "du" را انتخاب کنید.',
          tr: '"du" zamirinin doğru Dativ formunu seçiniz.',
          ar: 'اختر ضمير Dativ الصحيح للضمير "du".',
          es: 'Elige el pronombre en dativo correcto para "du".'
        },
        prompt: 'Ich schenke _____ ein schönes Buch zum Geburtstag (du).',
        options: ['dir', 'dich', 'du', 'dein'],
        correctAnswer: 'dir',
        explanation: {
          en: 'The verb "schenken" takes a dative person object (wem schenke ich etwas? -> dir).',
          fa: 'فعل "schenken" (هدیه دادن) متمم داتیو برای شخص می‌گیرد: به چه کسی هدیه می‌دهم؟ -> به تو (dir).',
          tr: '"schenken" fiili Dativ kişi zamiri alır: kime hediye ediyorum? -> sana (dir).',
          ar: 'الفعل "schenken" يأخذ مفعولاً به في حالة Dativ للشخص (dir).',
          es: 'El verbo "schenken" rige dativo para la persona receptora (dir).'
        }
      }
    ]
  },
  {
    id: 'a1_2_lek14',
    lektionNumber: 14,
    level: 'A1.2',
    title: 'Wochenende, Ausflüge und Freizeitgestaltung',
    subTitle: 'Wetter, Freizeit, Konjunktion "weil" und Perfekt-Abschluss (Lektion )',
    topic: 'Wochenendpläne, Wetterbericht, Kausalsätze mit "weil" und Gesamtwiederholung Level A1',
    fotoHoergeschichte: {
      title: 'Foto-Hörgeschichte: Ein Ausflug an den Chiemsee',
      imagePrompt: 'A scenic sunny excursion to Lake Chiemsee in Bavaria where students enjoy a picnic by the lake with Bavarian Alps in the background.',
      imageTheme: 'Chiemsee Ausflug Bayern',
      audioDuration: '02:40',
      transcript: [
        { speaker: 'Frau Weber', text: 'Liebe Kursteilnehmer, heute machen wir unseren Abschlussausflug an den Chiemsee!' },
        { speaker: 'Sayed Bashir', text: 'Das Wetter ist herrlich! Die Sonne scheint und es ist angenehm warm.' },
        { speaker: 'Elena', text: 'Ich habe einen leckeren Apfelkuchen für unser Picknick gebacken.' },
        { speaker: 'Frau Weber', text: 'Herzlichen Glückwunsch an alle! Sie haben die Stufe A1 erfolgreich abgeschlossen.' },
        { speaker: 'Alle', text: 'Vielen Dank, Frau Weber! Auf nach Niveau A2!' }
      ],
      summary: {
        en: 'The language course celebrates completing Level A1 with a scenic day trip to Lake Chiemsee in Bavaria.',
        fa: 'دانشجویان کلاس زبان به مناسبت پایان موفقیت‌آمیز سطح A1 یک اردوی تفریحی در دریاچه کیم‌زه در بایرن برگزار می‌کنند.',
        tr: 'Dil kursu öğrencileri A1 seviyesini başarıyla tamamlamayı Bavyera\'daki Chiemsee gölü gezisiyle kutlar.',
        ar: 'يحتفل طلاب دورة اللغة باجتياز المستوى A1 برحلة ميدانية ترفيهية إلى بحيرة كيمزيه في بافاريا.',
        es: 'Los estudiantes celebran la finalización del nivel A1 con una excursión al lago Chiemsee en Baviera.'
      }
    },
    sectionA: {
      title: 'Mussawi A: Sprechen & Dialog',
      focus: 'Sprechen & Wortschatz (Das Wetter & Jahreszeiten)',
      description: {
        en: 'Weather vocabulary: Die Sonne scheint, es regnet, es schneit, es ist bewölkt, die Temperatur liegt bei 22 Grad.',
        fa: 'اصطلاحات هواشناسی: آفتاب می‌تابد، باران می‌بارد، برف می‌بارد، هوا ابری است، دما ۲۲ درجه است.',
        tr: 'Hava durumu terimleri: güneş açıyor, yağmur yağıyor, bulutlu, sıcaklık.',
        ar: 'مفردات الطقس وفصول السنة: الشمس مشرقة، تمطر، تثلج، غائم، درجة الحرارة.',
        es: 'El tiempo meteorológico: soleado, lluvia, nieve, nublado, temperatura.'
      },
      content: 'Wie ist das Wetter heute? - Es ist sonnig und warm. Wir können draußen sitzen.',
      practiceTasks: ['Beschreiben Sie den Wetterbericht für die kommenden drei Tage.']
    },
    sectionB: {
      title: 'Mussawi B: Wortschatz & Hören',
      focus: 'Grammatik (Kausalsatz mit der Konjunktion "weil")',
      description: {
        en: 'Subordinate causal clauses with "weil" (verb kicks to the end of the clause).',
        fa: 'جملات پیرو علّی با حرف ربط "weil" (چون/زیرا): فعل صرف‌شده به انتهای جمله فرستاده می‌شود.',
        tr: '"weil" bağlacıyla sebep cümleleri (çekimli fiil cümlenin sonuna gider).',
        ar: 'الجملة السببية مع "weil" (الفعل المصرف يذهب إلى نهاية الجملة دائماً).',
        es: 'Oraciones causales con "weil" (el verbo conjugado va al final).'
      },
      content: 'Ich bleibe heute zu Hause, weil ich müde bin. / Er lernt Deutsch, weil er in München studieren will.',
      practiceTasks: ['Verbinden Sie zwei Hauptsätze mit "weil": "Ich esse nichts. Ich habe keinen Hunger."']
    },
    sectionC: {
      title: 'Mussawi C: Alltagskommunikation',
      focus: 'Hören & Sprechen (Wochenendaktivitäten)',
      description: {
        en: 'Leisure and outdoor activities: wandern, grillen, schwimmen, ins Museum gehen, Freunde treffen.',
        fa: 'فعالیت‌های اوقات فراغت: پیاده‌روی در طبیعت، کباب درست کردن، شنا، رفتن به موزه، دیدار دوستان.',
        tr: 'Hafta sonu aktiviteleri: doğa yürüyüşü, piknik, yüzme, müze ziyareti.',
        ar: 'أنشطة عطلة نهاية الأسبوع: المشي في الطبيعة، الشواء، السباحة، زيارة المتاحف.',
        es: 'Actividades de fin de semana: senderismo, barbacoa, natación, museos.'
      },
      content: 'Was hast du am Wochenende gemacht? - Ich habe eine Fahrradtour an den See gemacht.',
      practiceTasks: ['Erzählen Sie von Ihrem schönsten Wochenende im Perfekt.']
    },
    sectionD: {
      title: 'Mussawi D: Leseverstehen & Text',
      focus: 'Lesen (Reiseberichte & Veranstaltungskalender)',
      description: {
        en: 'Read event calendars, weekend itineraries, and city festival brochures.',
        fa: 'خواندن گاه‌شمار رویدادها، برنامه‌های سفرهای آخر هفته و بروشور جشنواره‌های شهری.',
        tr: 'Etkinlik takvimleri ve gezi broşürlerini okuma.',
        ar: 'قراءة جداول الفعاليات، وبرامج الرحلات، ودليل مهرجانات المدينة.',
        es: 'Lectura de agendas culturales y folletos turísticos.'
      },
      content: 'Stadtfest am Marienplatz: Live-Musik, kulinarische Spezialitäten und Kinderprogramm ab 11 Uhr.',
      practiceTasks: ['Wählen Sie zwei Veranstaltungen aus dem Programm aus und begründen Sie Ihre Wahl mit "weil".']
    },
    sectionE: {
      title: 'Mussawi E: Grammatik & Schreiben',
      focus: 'A1-Gesamtabschluss (Prüfungsvorbereitung Goethe Start Deutsch 1)',
      description: {
        en: 'Comprehensive recap of Level A1: personal profile, shopping, directions, past events with Perfekt.',
        fa: 'مرور جامع کل سطح A1: معرفی کامل خود، خرید، آدرس‌یابی، گفتگو درباره گذشته با زمان گذشته پرفکت.',
        tr: 'A1 seviyesinin kapsamlı genel tekrarı ve Start Deutsch 1 sınav hazırlığı.',
        ar: 'المراجعة الشاملة لمستوى A1 واستعدادات امتحان Start Deutsch 1.',
        es: 'Repaso global de nivel A1 y preparación para el examen Start Deutsch 1.'
      },
      content: 'Herzlichen Glückwunsch! Sie beherrschen nun das gesamte Niveau A1 nach dem Gemeinsamen Europäischen Referenzrahmen.',
      practiceTasks: ['Fassen Sie Ihren gesamten Lernfortschritt in 5 deutschen Sätzen zusammen.']
    },
    exercises: [
      {
        id: 'ex_a1_14_1',
        type: 'multiple_choice',
        instruction: {
          en: 'Select the sentence with correct verb placement after the conjunction "weil".',
          fa: 'جمله‌ای را انتخاب کنید که در آن جایگاه فعل پس از حرف ربط "weil" به درستی رعایت شده باشد.',
          tr: '"weil" bağlacından sonra fiil dizilimi doğru olan cümleyi seçiniz.',
          ar: 'اختر الجملة التي وضعت الفعل المصرف في الموضع الصحيح بعد "weil".',
          es: 'Elige la frase con la posición correcta del verbo tras la conjunción "weil".'
        },
        prompt: 'Warum kommst du heute nicht zum Kurs?',
        options: [
          'Weil ich krank bin.',
          'Weil ich bin krank.',
          'Weil bin ich krank.',
          'Weil krank ich bin.'
        ],
        correctAnswer: 'Weil ich krank bin.',
        explanation: {
          en: 'In German subordinate clauses introduced by "weil", the conjugated verb always stands at the very end: "weil ich krank bin".',
          fa: 'در جملات پیرو آلمانی که با "weil" آغاز می‌شوند، فعل صرف‌شده همواره در آخرین جایگاه جمله قرار می‌گیرد: "weil ich krank bin".',
          tr: '"weil" ile başlayan yan cümlelerde çekimli fiil daima cümlenin en sonuna gider: "weil ich krank bin".',
          ar: 'في الجمل الفرعية التي تبدأ بـ "weil"، يوضع الفعل المصرف دائماً في نهاية الجملة: "weil ich krank bin".',
          es: 'En las oraciones subordinadas con "weil", el verbo conjugado se coloca siempre al final.'
        }
      }
    ]
  }
];

