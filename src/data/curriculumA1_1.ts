import { Lesson } from '../types';

export const CURRICULUM_A1_1: Lesson[] = [
  {
    id: 'a1_1_lek1',
    lektionNumber: 1,
    level: 'A1.1',
    title: 'Guten Tag! Ich heiße Sayed Bashir.',
    subTitle: 'Erste Begegnungen und Vorstellen (Lektion )',
    topic: 'Begrüßung, Herkunft, Buchstabieren und Kontaktdaten',
    fotoHoergeschichte: {
      title: 'Foto-Hörgeschichte: Erste Erlebnisse in der Sprachschule in München',
      imagePrompt: 'A friendly international language school reception in Munich where a smiling Afghan student Sayed Bashir meets his German teacher Frau Weber and fills in a registration form.',
      imageTheme: 'Sprachschule München',
      audioDuration: '02:15',
      transcript: [
        { speaker: 'Frau Weber (Lehrerin)', text: 'Guten Tag! Herzlich willkommen in München. Wie heißen Sie?' },
        { speaker: 'Sayed Bashir', text: 'Guten Tag! Ich heiße Sayed Bashir. Mein Vorname ist Sayed und mein Familienname ist Bashir.' },
        { speaker: 'Frau Weber', text: 'Freut mich, Herr Bashir! Woher kommen Sie?' },
        { speaker: 'Sayed Bashir', text: 'Ich komme aus Afghanistan, aus Kabul. Aber jetzt wohne ich in München.' },
        { speaker: 'Frau Weber', text: 'Sehr schön! Wie buchstabiert man Ihren Nachnamen?' },
        { speaker: 'Sayed Bashir', text: 'B - A - S - H - I - R.' },
        { speaker: 'Frau Weber', text: 'Vielen Dank! Hier ist Ihr Sprachkurs-Ausweis für das Niveau A1.' }
      ],
      summary: {
        en: 'Sayed Bashir arrives at the language school in Munich, introduces himself to teacher Frau Weber, spells his surname, and receives his course pass.',
        fa: 'سید بشیر به آموزشگاه زبان در مونیخ می‌آید، خود را به خانم وبر معرفی کرده، نام خانوادگی‌اش را هجی می‌کند و کارت دوره زبان سطح A1 را دریافت می‌نماید.',
        tr: 'Sayed Bashir Münih\'teki dil okuluna gelir, kendisini öğretmen Bayan Weber\'e tanıtır, soyadını heceler ve kurs kartını teslim alır.',
        ar: 'يصل سيد بشير إلى مدرسة اللغات في ميونيخ، ويعرّف بنفسه للأستاذة فيبر، ويتهجى لقبه، ويستلم بطاقة دورته في المستوى A1.',
        es: 'Sayed Bashir llega a la escuela de idiomas en Múnich, se presenta ante la profesora Frau Weber, deletrea su apellido y recibe su carné de curso.'
      }
    },
    sectionA: {
      title: 'Mussawi A: Sprechen & Dialog',
      focus: 'Sprechen & Hören (Begrüßung & Verabschiedung)',
      description: {
        en: 'Learn formal and informal greetings and farewells in everyday German communication.',
        fa: 'آموزش احوال‌پرسی‌ها و خداحافظی‌های رسمی و دوستانه در ارتباطات روزمره زبان آلمانی.',
        tr: 'Günlük Almanca iletişimde resmi ve samimi selamlama ile vedalaşma ifadelerini öğrenin.',
        ar: 'تعلم التحيات والوداع الرسمي وغير الرسمي في التواصل اليومي بالألمانية.',
        es: 'Aprende saludos y despedidas formales e informales en el día a día.'
      },
      content: 'Formell: "Guten Tag / Guten Morgen / Auf Wiedersehen" (mit Sie). Informell: "Hallo / Tschüss / Bis bald" (mit du).',
      audioText: 'Guten Tag! Wie geht es Ihnen? - Danke, sehr gut. Und Ihnen? - Auch gut, danke!',
      practiceTasks: [
        'Hören Sie den Dialog und sprechen Sie die Begrüßungen nach.',
        'Stellen Sie sich Ihrem Lernpartner formell mit "Guten Tag, ich heiße..." vor.',
        'Unterscheiden Sie: Wann benutzt man "Auf Wiedersehen" und wann "Tschüss"?'
      ]
    },
    sectionB: {
      title: 'Mussawi B: Wortschatz & Hören',
      focus: 'Hören & Wortschatz (Das Alphabet & Buchstabieren)',
      description: {
        en: 'Master the German alphabet, vowels, umlauts (Ä, Ö, Ü), and Eszett (ß).',
        fa: 'تسلط بر الفبای آلمانی، حروف صدادار، اوملاوت‌ها (Ä, Ö, Ü) و حرف استست (ß).',
        tr: 'Alman alfabesi, sesli harfler, umlautlar (Ä, Ö, Ü) ve "ß" harfini kusursuzca öğrenin.',
        ar: 'إتقان الأبجدية الألمانية، والحروف الصوتية، وحروف الإمالة (Ä, Ö, Ü) وحرف (ß).',
        es: 'Domina el alfabeto alemán, las vocales con diéresis y la grafía ß.'
      },
      content: 'A wie Anton, B wie Berta, C wie Cäsar ... Ä, Ö, Ü und ß.',
      audioText: 'A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, R, S, T, U, V, W, X, Y, Z. Ä, Ö, Ü, ß.',
      practiceTasks: [
        'Buchstabieren Sie Ihren eigenen Vornamen und Familiennamen auf Deutsch.',
        'Hören Sie die Telefonnummern und Notieren Sie die Ziffern 0 bis 9.',
        'Notieren Sie 5 deutsche Städtenamen nach Gehör.'
      ]
    },
    sectionC: {
      title: 'Mussawi C: Alltagskommunikation',
      focus: 'Sprechen & Dialoge (Herkunft & Sprachen)',
      description: {
        en: 'Ask and state where people come from and what languages they speak.',
        fa: 'پرسش و پاسخ درباره خاستگاه، کشور مبدا و زبان‌هایی که افراد صحبت می‌کنند.',
        tr: 'İnsanların memleketini ve konuştukları dilleri sorma ve söyleme diyalogları.',
        ar: 'السؤال والإخبار عن الموطن والبلد الأصلي واللغات التي يتحدث بها الأشخاص.',
        es: 'Pregunta y expresa procedencia geográfica y lenguas maternas.'
      },
      content: 'Woher kommen Sie? - Ich komme aus... / Welche Sprachen sprechen Sie? - Ich spreche Deutsch, Dari und Pashto.',
      audioText: 'Woher kommen Sie, Herr Bashir? - Ich komme aus Afghanistan. Ich spreche Dari, Pashto und ein bisschen Deutsch.',
      practiceTasks: [
        'Fragen Sie 3 Personen nach Herkunft und Muttersprache.',
        'Konjugieren Sie das unregelmäßige Verb "sprechen": ich spreche, du sprichst, er/sie spricht.'
      ]
    },
    sectionD: {
      title: 'Mussawi D: Leseverstehen & Text',
      focus: 'Lesen & Textanalyse (Visitenkarten & Formulare)',
      description: {
        en: 'Read business cards, name badges, and complete an official course registration form.',
        fa: 'خواندن کارت ویزیت، کارت‌های مشخصات و تکمیل فرم رسمی ثبت‌نام دوره آموزشی.',
        tr: 'Kartvizitleri ve yaka kartlarını okuma, resmi kurs kayıt formunu doldurma.',
        ar: 'قراءة بطاقات العمل وبطاقات التعريف وملء استمارة تسجيل رسمية لدورة لغات.',
        es: 'Lectura de tarjetas de visita y cumplimentación de formularios de matrícula.'
      },
      content: 'Authentisches Anmeldeformular der Münchner Volkshochschule (MVHS).',
      readingText: {
        type: 'Anmeldeformular Sprachkurs',
        title: 'Münchner Volkshochschule - Kursanmeldung Deutsch A1.1',
        body: 'Familienname: Bashir | Vorname: Sayed | Geburtsdatum: 14.05.1996 | Geburtsort: Kabul | Heimatland: Afghanistan | Wohnort: 80331 München, Schillerstraße 12 | Telefon: 089 5543210 | E-Mail: sayed.bashir@beispiel.de'
      },
      practiceTasks: [
        'Welche Angaben stehen auf dem Formular? Finden Sie Vorname, Nachname und Wohnort.',
        'Füllen Sie das Formular mit Ihren eigenen persönlichen Daten aus.'
      ]
    },
    sectionE: {
      title: 'Mussawi E: Grammatik & Schreiben',
      focus: 'Grammatik & Schreiben (Aussagesatz & W-Frage)',
      description: {
        en: 'Sentence structure in German: Verb always in Position 2 in statements and W-questions.',
        fa: 'ساختار جمله در زبان آلمانی: فعل همواره در جایگاه ۲ در جملات اخباری و پرسشی کلمه‌ای قرار دارد.',
        tr: 'Almanca cümle dizilimi: Çekimli fiil düz cümlelerde ve W-sorularında daima 2. sıradadır.',
        ar: 'بناء الجملة في الألمانية: الفعل المصرف يقع دائماً في الموقع الثاني في الجمل الخبرية وأسئلة الاستفهام.',
        es: 'Estructura de la oración alemana: El verbo conjugado siempre ocupa la posición 2.'
      },
      content: 'Satzstruktur: Im Aussagesatz steht das konjugierte Verb immer an Position 2.',
      grammarSnippet: {
        id: 'a1_lek1_syntax',
        level: 'A1.1',
        lektion: 1,
        germanTitle: 'Satzbau: Verb an Position II',
        formula: 'Position 1 (Subjekt/W-Wort) + Position 2 (Verb konjugiert) + Position 3 (...)',
        explanation: {
          en: 'In German declarative sentences and W-questions, the conjugated verb strictly occupies the second syntactic position.',
          fa: 'در جملات اخباری و جملات پرسشی با کلمه پرسشی (W-Frage)، فعل صرف‌شده بدون استثنا در جایگاه دوم قرار می‌گیرد.',
          tr: 'Düz cümlelerde ve W-sorularında çekimli fiil kesinlikle ikinci pozisyondadır.',
          ar: 'في الجمل الخبرية وأسئلة W-Frage، يأتي الفعل المصرف حتماً في الموقع الإعرابي الثاني.',
          es: 'En las oraciones enunciativas e interrogativas con pronombre, el verbo ocupa estrictamente la segunda posición.'
        },
        examples: [
          {
            german: 'Ich heiße Sayed Bashir.',
            formulaBreakdown: 'Ich (Pos 1: Subjekt) + heiße (Pos 2: Verb) + Sayed Bashir (Pos 3: Name)',
            literalTranslation: {
              en: 'I am called Sayed Bashir.',
              fa: 'من نامیده می‌شوم سید بشیر.',
              tr: 'Ben adlandırılırım Sayed Bashir.',
              ar: 'أنا أُدعى سيد بشير.',
              es: 'Yo me llamo Sayed Bashir.'
            },
            fluentTranslation: {
              en: 'My name is Sayed Bashir.',
              fa: 'اسم من سید بشیر است.',
              tr: 'Benim adım Sayed Bashir.',
              ar: 'اسمي سيد بشير.',
              es: 'Me llamo Sayed Bashir.'
            }
          }
        ],
        category: 'sentence_structure'
      },
      practiceTasks: [
        'Bauen Sie 5 korrekte Aussagesätze mit dem Verb an Position 2.',
        'Formulieren Sie 3 W-Fragen mit "Wie", "Woher" und "Wo".'
      ]
    },
    videoClip: {
      title: 'Video: Erste Begegnung im Deutschkurs',
      scenario: 'Sayed lernt seine Mitschüler aus Spanien, der Türkei und Syrien kennen.',
      category: 'alltag',
      duration: '02:40',
      speakers: ['Sayed Bashir', 'Maria'],
      germanTranscript: [
        'Sayed Bashir: Hallo! Ist hier noch frei?',
        'Maria: Ja, bitte nimm Platz! Ich bin Maria aus Madrid.',
        'Sayed Bashir: Hallo Maria, ich heiße Sayed. Schön dich kennenzulernen.',
        'Maria: Sprichst du schon gut Deutsch?',
        'Sayed Bashir: Ein bisschen. Ich lerne jeden Tag neue Wörter mit Deutsch Mussawi.'
      ],
      translatedTranscript: [
        {
          en: 'Hello! Is this seat still free?',
          fa: 'سلام! آیا این صندلی هنوز خالی است؟',
          tr: 'Merhaba! Burası boş mu?',
          ar: 'مرحباً! هل هذا المقعد شاغر؟',
          es: '¡Hola! ¿Está libre este asiento?'
        },
        {
          en: 'Yes, please take a seat! I am Maria from Madrid.',
          fa: 'بله، بفرمایید بنشینید! من ماریا از مادرید هستم.',
          tr: 'Evet, lütfen otur! Ben Madrid\'den Maria.',
          ar: 'نعم، تفضل بالجلوس! أنا ماريا من مدريد.',
          es: '¡Sí, siéntate por favor! Soy María de Madrid.'
        },
        {
          en: 'Hello Maria, my name is Sayed. Nice to meet you.',
          fa: 'سلام ماریا، اسم من سید است. از آشنایی با شما خوشوقتم.',
          tr: 'Merhaba Maria, benim adım Sayed. Tanıştığımıza memnun oldum.',
          ar: 'أهلاً ماريا، اسمي سيد. سررت بلقائك.',
          es: 'Hola María, me llamo Sayed. Encantado de conocerte.'
        },
        {
          en: 'Do you speak German well already?',
          fa: 'آیا از الان خوب آلمانی صحبت می‌کنی؟',
          tr: 'Şimdiden iyi Almanca konuşabiliyor musun?',
          ar: 'هل تتحدث الألمانية جيداً بالفعل؟',
          es: '¿Hablas ya bien alemán?'
        },
        {
          en: 'A little bit. I learn new words every day with Deutsch Mussawi.',
          fa: 'کمی. من هر روز واژگان جدیدی را با شریته پلاس یاد می‌گیرم.',
          tr: 'Birazcık. Deutsch Mussawi ile her gün yeni kelimeler öğreniyorum.',
          ar: 'قليلاً. أتعلم كلمات جديدة كل يوم مع شريته بلس.',
          es: 'Un poco. Aprendo palabras nuevas cada día con Deutsch Mussawi.'
        }
      ]
    },
    exercises: [
      {
        id: 'ex_a1_1_1',
        type: 'multiple_choice',
        instruction: {
          en: 'Choose the grammatically correct verb form for the pronoun "ich".',
          fa: 'شکل صرف‌شده صحیح فعل را برای ضمیر فاعلی "ich" (من) انتخاب کنید.',
          tr: '"ich" zamiri için doğru çekimlenmiş fiili seçiniz.',
          ar: 'اختر تصريف الفعل الصحيح للضمير "ich" (أنا).',
          es: 'Elige la forma verbal correcta para el pronombre "ich".'
        },
        prompt: 'Ich _____ Sayed Bashir und komme aus Afghanistan.',
        options: ['heiße', 'heißt', 'heißen', 'heißest'],
        correctAnswer: 'heiße',
        explanation: {
          en: 'The regular verb ending for first person singular (ich) in German is "-e". Thus: ich heiße.',
          fa: 'پسوند صرفی استاندارد برای اول شخص مفرد (ich) در زبان آلمانی "-e" است. بنابراین: ich heiße.',
          tr: 'Almancada 1. tekil şahıs (ich) eki "-e"dir: ich heiße.',
          ar: 'نهاية تصريف الفعل للمتكلم المفرد (ich) في الألمانية هي "-e"، لذا نقول: ich heiße.',
          es: 'La terminación regular para la primera persona de singular (ich) es "-e": ich heiße.'
        }
      },
      {
        id: 'ex_a1_1_2',
        type: 'sentence_reorder',
        instruction: {
          en: 'Reorder the words to form a correct declarative sentence (Verb at Position 2).',
          fa: 'کلمات را مرتب کنید تا یک جمله اخباری صحیح با فعل در جایگاه ۲ ساخته شود.',
          tr: 'Kelimeleri fiilin 2. sırada olduğu düzgün bir cümle haline getirin.',
          ar: 'رتب الكلمات لتكوين جملة خبرية صحيحة مع الفعل في الموقع الثاني.',
          es: 'Ordena las palabras para formar una frase afirmativa con el verbo en Posición 2.'
        },
        prompt: 'Arrange the sentence blocks:',
        options: ['Sayed', 'in', 'München', 'wohnt', 'jetzt.'],
        correctAnswer: 'Sayed wohnt jetzt in München.',
        explanation: {
          en: 'Subject (Sayed) in Position 1, conjugated verb (wohnt) in Position 2, followed by temporal and local adverbs.',
          fa: 'فاعل (Sayed) در جایگاه اول، فعل صرف‌شده (wohnt) در جایگاه دوم، و سپس قید زمان و مکان قرار می‌گیرند.',
          tr: 'Özne (Sayed) 1. sırada, çekimli fiil (wohnt) 2. sırada, ardından yer/zaman zarfları.',
          ar: 'الفاعل (Sayed) في الموقع الأول، الفعل المصرف (wohnt) في الموقع الثاني، متبوعاً بظرف الزمان والمكان.',
          es: 'Sujeto en Posición 1, verbo en Posición 2, seguido de los complementos.'
        }
      },
      {
        id: 'ex_a1_1_3',
        type: 'fill_blank',
        instruction: {
          en: 'Fill in the correct question word (Woher, Wie, Wo).',
          fa: 'کلمه پرسشی مناسب (Woher, Wie, Wo) را در جای خالی بنویسید.',
          tr: 'Doğru soru kelimesini boşluğa yerleştirin (Woher, Wie, Wo).',
          ar: 'املأ الفراغ بأداة الاستفهام الصحيحة (Woher, Wie, Wo).',
          es: 'Completa con la partícula interrogativa correcta (Woher, Wie, Wo).'
        },
        prompt: '_____ kommen Sie? - Ich komme aus Kabul.',
        options: ['Woher', 'Wo', 'Wie', 'Wer'],
        correctAnswer: 'Woher',
        explanation: {
          en: '"Woher" asks for origin or starting point (Where from), combined with the preposition "aus".',
          fa: '"Woher" برای پرسش از مبدا و خاستگاه (از کجا) به همراه حرف اضافه "aus" به کار می‌رود.',
          tr: '"Woher" soru kelimesi "aus" edatıyla birlikte nereden gelindiğini sorar.',
          ar: 'تسأل "Woher" عن الموطن والمنشأ (من أين) وتترافق مع حرف الجر "aus".',
          es: '"Woher" pregunta por el origen (de dónde) y rige la preposición "aus".'
        }
      }
    ]
  },
  {
    id: 'a1_1_lek2',
    lektionNumber: 2,
    level: 'A1.1',
    title: 'Meine Familie und meine Freunde',
    subTitle: 'Familienmitglieder, Berufe und Sprachen (Lektion )',
    topic: 'Familienstammbaum, Verwandtschaft, Possessivartikel mein/dein, Verben haben und sein',
    fotoHoergeschichte: {
      title: 'Foto-Hörgeschichte: Familienfotos bei Familie Müller',
      imagePrompt: 'A warm living room where Sayed shows a digital photo album of his family to his German host family, explaining his brothers, sisters, and parents.',
      imageTheme: 'Familienabend in Deutschland',
      audioDuration: '02:30',
      transcript: [
        { speaker: 'Lukas Müller', text: 'Sayed, wer ist das auf dem Foto? Ist das deine Schwester?' },
        { speaker: 'Sayed Bashir', text: 'Nein, das ist meine Cousine Fatima. Sie studiert Medizin in Herat.' },
        { speaker: 'Lukas Müller', text: 'Und wie viele Geschwister hast du?' },
        { speaker: 'Sayed Bashir', text: 'Ich habe zwei Brüder und eine Schwester. Mein Bruder Ahmad ist Ingenieur.' },
        { speaker: 'Lukas Müller', text: 'Das ist eine große Familie! Leben deine Eltern auch in Afghanistan?' },
        { speaker: 'Sayed Bashir', text: 'Ja, meine Eltern leben in Kabul. Mein Vater ist Lehrer und meine Mutter ist Schneiderin.' }
      ],
      summary: {
        en: 'Sayed presents his family members, their professions, and relationships to his host friend Lukas.',
        fa: 'سید اعضای خانواده، شغل‌ها و نسبت‌های فامیلی خود را به دوستش لوکاس معرفی می‌کند.',
        tr: 'Sayed ev arkadaşı Lukas\'a aile fertlerini, mesleklerini ve akrabalık ilişkilerini fotoğraflarla anlatır.',
        ar: 'يعرّف سيد صديقه لوكاس على أفراد عائلته ومهنهم وصلات القرابة من خلال صور الألبوم.',
        es: 'Sayed enseña a su amigo Lukas las fotos de su familia, sus profesiones y parentescos.'
      }
    },
    sectionA: {
      title: 'Mussawi A: Sprechen & Dialog',
      focus: 'Sprechen & Hören (Familienmitglieder benennen)',
      description: {
        en: 'Learn family vocabulary: der Vater, die Mutter, die Eltern, der Bruder, die Schwester, die Kinder.',
        fa: 'واژگان اعضای خانواده: پدر، مادر، والدین، برادر، خواهر، فرزندان.',
        tr: 'Aile fertleri kelimelerini öğrenin: baba, anne, ebeveynler, kardeşler, çocuklar.',
        ar: 'تعلم مفردات العائلة: الأب، الأم، الوالدان، الأخ، الأخت، الأبناء.',
        es: 'Aprende el vocabulario familiar: padre, madre, hermanos, hijos.'
      },
      content: 'Der Vater, die Mutter -> die Eltern. Der Sohn, die Tochter -> die Kinder. Der Bruder, die Schwester -> die Geschwister.',
      audioText: 'Das ist mein Vater. Das ist meine Mutter. Und das sind meine Geschwister.',
      practiceTasks: [
        'Zeichnen Sie einen kleinen Familienstammbaum und beschriften Sie die Personen.',
        'Stellen Sie 3 Familienmitglieder mit "Das ist mein/meine..." vor.'
      ]
    },
    sectionB: {
      title: 'Mussawi B: Wortschatz & Hören',
      focus: 'Hören & Wortschatz (Berufe & Tätigkeiten)',
      description: {
        en: 'Learn professions in masculine and feminine forms: der Arzt / die Ärztin, der Lehrer / die Lehrerin.',
        fa: 'آموزش مشاغل در حالت مذکر و مونث با پسوند "-in": پزشک، معلم، مهندس، راننده.',
        tr: 'Mesleklerin eril ve dişil halleri: der Arzt / die Ärztin, der Lehrer / die Lehrerin.',
        ar: 'المهن بصيغتي المذكر والمؤنث: der Arzt / die Ärztin، der Lehrer / die Lehrerin.',
        es: 'Aprende las profesiones en masculino y femenino con la terminación "-in".'
      },
      content: 'Was sind Sie von Beruf? - Ich bin Informatiker / Ich arbeite als Lehrerin bei einer Sprachschule.',
      audioText: 'Was bist du von Beruf? - Ich bin Mechatroniker. Und meine Schwester ist Krankenschwester.',
      practiceTasks: [
        'Bilden Sie die weibliche Form: der Verkäufer -> die Verkäuferin, der Student -> die Studentin.',
        'Sagen Sie, was Sie beruflich machen mit "Ich arbeite als...".'
      ]
    },
    sectionC: {
      title: 'Mussawi C: Alltagskommunikation',
      focus: 'Sprechen & Dialoge (Familienstand & Alter)',
      description: {
        en: 'Talk about marital status (ledig, verheiratet, geschieden) and age.',
        fa: 'گفتگو درباره وضعیت تاهل (مجرد، متاهل، مطلقه) و سن و سال افراد.',
        tr: 'Medeni durum (bekar, evli, boşanmış) ve yaş hakkında konuşma diyalogları.',
        ar: 'التحدث عن الحالة الاجتماعية (أعزب، متزوج، مطلق) والسن.',
        es: 'Habla sobre el estado civil (soltero, casado, divorciado) y la edad.'
      },
      content: 'Sind Sie verheiratet? - Ja, ich bin verheiratet und habe zwei Kinder. / Nein, ich bin ledig.',
      audioText: 'Wie alt ist dein Sohn? - Er ist vier Jahre alt.',
      practiceTasks: [
        'Fragen Sie Ihren Partner: "Bist du verheiratet? Hast du Kinder?"',
        'Zählen Sie von 10 bis 100 auf Deutsch.'
      ]
    },
    sectionD: {
      title: 'Mussawi D: Leseverstehen & Text',
      focus: 'Lesen & Textanalyse (Persönliche E-Mail über die Familie)',
      description: {
        en: 'Read a personal email about family news and understand the main information.',
        fa: 'خواندن یک ایمیل شخصی درباره احوالپرسی خانوادگی و درک نکات اصلی متن.',
        tr: 'Aile haberleri içeren kişisel bir e-postayı okuma ve ana bilgileri anlama.',
        ar: 'قراءة بريد إلكتروني شخصي حول أخبار العائلة واستخراج المعلومات الأساسية.',
        es: 'Lectura de un correo electrónico personal sobre noticias familiares.'
      },
      content: 'E-Mail von Sayed an seinen Freund Ahmad in Berlin.',
      readingText: {
        type: 'Persönliche E-Mail',
        title: 'Lieber Ahmad, Grüße aus München!',
        body: 'Lieber Ahmad, wie geht es dir und deiner Familie? Mir geht es hier in München sehr gut. Mein Deutschkurs macht großen Spaß. Meine Lehrerin heißt Frau Weber und ist sehr nett. Mein Mitbewohner Lukas zeigt mir am Wochenende die Stadt. Schreib mir bald! Viele Grüße, Sayed'
      },
      practiceTasks: [
        'Wer schreibt die E-Mail an wen?',
        'Wie findet Sayed seinen Deutschkurs in München?'
      ]
    },
    sectionE: {
      title: 'Mussawi E: Grammatik & Schreiben',
      focus: 'Grammatik & Schreiben (Possessivartikel: mein / dein & Verben haben/sein)',
      description: {
        en: 'Master possessive determiners "mein/meine" and "dein/deine" plus irregular verbs "sein" and "haben".',
        fa: 'تسلط بر صفت‌های ملکی "mein/meine" (مال من) و "dein/deine" (مال تو) به همراه صرف افعال "sein" و "haben".',
        tr: '"mein/meine" ve "dein/deine" iyelik artikelleri ile "haben" ve "sein" fiil çekimleri.',
        ar: 'إتقان ضمائر الملكية "mein/meine" و "dein/deine" وتصريف فعلي "haben" و "sein".',
        es: 'Domina los posesivos "mein/meine" y "dein/deine" y los verbos irregulares "haben" y "sein".'
      },
      content: 'Maskulin/Neutral: mein Bruder / mein Kind. Feminin/Plural: meine Schwester / meine Eltern.',
      grammarSnippet: {
        id: 'a1_lek2_possessiv',
        level: 'A1.1',
        lektion: 2,
        germanTitle: 'Possessivartikel im Nominativ & Verben sein/haben',
        formula: 'Maskulin: mein/dein | Neutral: mein/dein | Feminin: meine/deine | Plural: meine/deine',
        explanation: {
          en: 'Feminine nouns and plural nouns take an "-e" at the end of the possessive article (meine Mutter, meine Kinder). Masculine and neuter do not (mein Vater, mein Kind).',
          fa: 'اسامی مونث و اسامی جمع در پایان آرتیکل ملکی پسوند "-e" می‌گیرند (meine Mutter, meine Kinder). اسامی مذکر و خنثی پسوند نمی‌گیرند (mein Vater, mein Kind).',
          tr: 'Dişil ve çoğul isimlerde iyelik artikeline "-e" eklenir: meine Mutter, meine Geschwister.',
          ar: 'تأخذ الأسماء المؤنثة والجمع اللاحقة "-e" في نهاية أداة الملكية: meine Mutter, meine Kinder.',
          es: 'Los sustantivos femeninos y en plural añaden "-e" al posesivo: meine Mutter, meine Kinder.'
        },
        examples: [
          {
            german: 'Das ist mein Bruder und das ist meine Schwester.',
            formulaBreakdown: 'mein (maskulin) + Bruder | meine (feminin) + Schwester',
            literalTranslation: {
              en: 'This is my brother and this is my sister.',
              fa: 'این است برادر من و این است خواهر من.',
              tr: 'Bu benim erkek kardeşim ve bu benim kız kardeşim.',
              ar: 'هذا أخي وهذه أختي.',
              es: 'Este es mi hermano y esta es mi hermana.'
            },
            fluentTranslation: {
              en: 'This is my brother and this is my sister.',
              fa: 'این برادرم و این خواهرم است.',
              tr: 'Bu erkek kardeşim, bu da kız kardeşim.',
              ar: 'هذا أخي وهذه أختي.',
              es: 'Este es mi hermano y esta es mi hermana.'
            }
          }
        ],
        category: 'sentence_structure'
      },
      practiceTasks: [
        'Setzen Sie "mein" oder "meine" ein: _____ Vater, _____ Mutter, _____ Kind, _____ Eltern.',
        'Konjugieren Sie "haben" und "sein" für alle Personen.'
      ]
    },
    videoClip: {
      title: 'Video: Einladung zum Tee und Familiengespräch',
      scenario: 'Sayed kocht afghanischen Safran-Tee und spricht mit seinen Nachbarn über Familie.',
      category: 'alltag',
      duration: '02:50',
      speakers: ['Sayed Bashir', 'Lukas'],
      germanTranscript: [
        'Sayed Bashir: Möchtest du Tee trinken, Lukas?',
        'Lukas: Sehr gerne, Sayed! Der Tee riecht fantastisch nach Kardamom.',
        'Sayed Bashir: In Afghanistan trinken wir Tee immer mit der ganzen Familie.',
        'Lukas: Hast du deine Familie heute schon angerufen?',
        'Sayed Bashir: Ja, jeden Sonntag telefonieren wir per Videoanruf.'
      ],
      translatedTranscript: [
        {
          en: 'Would you like some tea, Lukas?',
          fa: 'لوکاس، آیا چای میل داری؟',
          tr: 'Çay içer misin, Lukas?',
          ar: 'هل تود شرب الشاي يا لوكاس؟',
          es: '¿Te apetece un té, Lukas?'
        },
        {
          en: 'Gladly, Sayed! The tea smells fantastic with cardamom.',
          fa: 'با کمال میل، سید! این چای بوی فوق‌العاده هل می‌دهد.',
          tr: 'Çok sevinirim Sayed! Çay harika kakule kokuyor.',
          ar: 'بكل سرور يا سيد! رائحة الشاي بالهيل رائعة حقاً.',
          es: '¡Con mucho gusto, Sayed! El té huele genial a cardamomo.'
        },
        {
          en: 'In Afghanistan we always drink tea with the whole family.',
          fa: 'در افغانستان ما همیشه چای را در کنار تمام اعضای خانواده می‌نوشیم.',
          tr: 'Afganistan\'da çayı daima tüm aileyle birlikte içeriz.',
          ar: 'في أفغانستان، نشرب الشاي دائماً مع العائلة بأكملها.',
          es: 'En Afganistán siempre tomamos el té con toda la familia.'
        },
        {
          en: 'Did you call your family today already?',
          fa: 'آیا امروز با خانواده‌ات تماس گرفتی؟',
          tr: 'Bugün aileni aradın mı?',
          ar: 'هل اتصلت بعائلتك اليوم؟',
          es: '¿Hablaste ya hoy con tu familia?'
        },
        {
          en: 'Yes, every Sunday we have a video call.',
          fa: 'بله، ما هر یکشنبه تماس ویدیویی برقرار می‌کنیم.',
          tr: 'Evet, her pazar görüntülü aramayla konuşuyoruz.',
          ar: 'نعم، نتحدث كل يوم أحد عبر مكالمة فيديو.',
          es: 'Sí, todos los domingos hacemos una videollamada.'
        }
      ]
    },
    exercises: [
      {
        id: 'ex_a1_2_1',
        type: 'multiple_choice',
        instruction: {
          en: 'Choose the correct possessive pronoun (mein vs. meine).',
          fa: 'صفت ملکی صحیح (mein یا meine) را انتخاب کنید.',
          tr: 'Doğru iyelik zamirini seçiniz (mein / meine).',
          ar: 'اختر ضمير الملكية الصحيح (mein أم meine).',
          es: 'Elige el posesivo correcto (mein o meine).'
        },
        prompt: 'Das ist _____ Mutter und das ist _____ Bruder.',
        options: ['meine / mein', 'mein / meine', 'meine / meine', 'mein / mein'],
        correctAnswer: 'meine / mein',
        explanation: {
          en: '"Mutter" is feminine (die), so it requires "meine". "Bruder" is masculine (der), requiring "mein".',
          fa: '"Mutter" مؤنث (die) است و نیازمند "meine" می‌باشد. "Bruder" مذکر (der) است و "mein" می‌گیرد.',
          tr: '"Mutter" dişil olduğu için "meine", "Bruder" eril olduğu için "mein" alır.',
          ar: '"Mutter" مؤنثة فتأخذ "meine"، بينما "Bruder" مذكر فيأخذ "mein".',
          es: '"Mutter" es femenino (meine) y "Bruder" es masculino (mein).'
        }
      },
      {
        id: 'ex_a1_2_2',
        type: 'multiple_choice',
        instruction: {
          en: 'Select the correct form of the auxiliary verb "haben".',
          fa: 'شکل صحیح فعل کمکی "haben" (داشتن) را انتخاب کنید.',
          tr: '"haben" yardımcı fiilinin doğru çekimini seçiniz.',
          ar: 'اختر التصريف الصحيح لفعل الملكية "haben".',
          es: 'Selecciona la forma correcta del verbo "haben".'
        },
        prompt: 'Wie viele Geschwister _____ du?',
        options: ['hast', 'habt', 'haben', 'hat'],
        correctAnswer: 'hast',
        explanation: {
          en: 'The second person singular pronoun "du" takes the verb form "hast": du hast.',
          fa: 'برای ضمیر دوم شخص مفرد "du"، فعل به شکل "hast" صرف می‌شود: du hast.',
          tr: '"du" zamiri için "haben" fiili "hast" olarak çekimlenir.',
          ar: 'مع الضمير "du" يُصرف الفعل إلى "hast": du hast.',
          es: 'Para el pronombre "du", la forma correcta es "hast": du hast.'
        }
      }
    ]
  },
  {
    id: 'a1_1_lek3',
    lektionNumber: 3,
    level: 'A1.1',
    title: 'Essen und Trinken im Alltag',
    subTitle: 'Lebensmittel, Einkaufen und Akkusativ (Lektion )',
    topic: 'Supermarkt, Wochenmarkt, Preise, Mengenangaben und unbestimmter Artikel im Akkusativ',
    fotoHoergeschichte: {
      title: 'Foto-Hörgeschichte: Einkauf auf dem Münchner Viktualienmarkt',
      imagePrompt: 'A vibrant open-air market stall in Munich loaded with fresh fruits, cheese, and bread where Sayed buys apples, potatoes, and bread from a friendly market seller.',
      imageTheme: 'Viktualienmarkt München',
      audioDuration: '02:45',
      transcript: [
        { speaker: 'Verkäuferin', text: 'Grüß Gott! Was darf es denn sein?' },
        { speaker: 'Sayed Bashir', text: 'Guten Tag! Ich brauche ein Kilo Äpfel und zwei Kilo Kartoffeln, bitte.' },
        { speaker: 'Verkäuferin', text: 'Gerne! Möchten Sie auch frische Tomaten? Sie sind heute im Angebot.' },
        { speaker: 'Sayed Bashir', text: 'Ja, ich nehme ein halbes Kilo Tomaten. Haben Sie auch frisches Fladenbrot?' },
        { speaker: 'Verkäuferin', text: 'Nein, Fladenbrot haben wir leider nicht. Aber das Vollkornbrot ist ganz frisch.' },
        { speaker: 'Sayed Bashir', text: 'Gut, dann nehme ich einen Laib Vollkornbrot. Was kostet das zusammen?' },
        { speaker: 'Verkäuferin', text: 'Das macht zusammen 8 Euro und 40 Cent, bitte.' }
      ],
      summary: {
        en: 'Sayed visits the Viktualienmarkt in Munich, orders fresh produce using quantities, and pays at the counter.',
        fa: 'سید به بازار ویکتوئالین‌مارکت در مونیخ رفته، میوه و تره‌بار را با واحدهای اندازه‌گیری سفارش می‌دهد و حساب می‌کند.',
        tr: 'Sayed Münih Viktualienmarkt pazarında taze sebze ve meyve alışverişi yapar, fiyat sorar ve ödeme yapar.',
        ar: 'يزور سيد سوق فيكتوالينماركت في ميونيخ ويشتري منتجات طازجة مستخدماً أوزان المقادير ويدفع الحساب.',
        es: 'Sayed compra fruta y verdura en el mercado tradicional Viktualienmarkt de Múnich.'
      }
    },
    sectionA: {
      title: 'Mussawi A: Sprechen & Dialog',
      focus: 'Sprechen & Hören (Lebensmittel benennen & Artikel lernen)',
      description: {
        en: 'Learn basic food items with definite articles: der Apfel, die Banane, das Brot, die Milch, der Käse.',
        fa: 'واژگان مواد غذایی اصلی به همراه حروف تعریف مشخص: سیب، موز، نان، شیر، پنیر.',
        tr: 'Temel gıda maddelerini artikelleriyle öğrenin: der Apfel, die Banane, das Brot.',
        ar: 'تعلم مفردات الأطعمة الأساسية مع أدوات التعريف: التفاح، الموز، الخبز، الحليب، الجبن.',
        es: 'Aprende los alimentos básicos con sus artículos determinados: der Apfel, die Milch, das Brot.'
      },
      content: 'Der Apfel, die Banane, die Kartoffel, das Ei (Plural: die Eier), das Fleisch, der Fisch, der Reis.',
      audioText: 'Was ist dein Lieblingsessen? - Ich esse sehr gerne Reis mit Gemüse und Fleisch.',
      practiceTasks: [
        'Ordnen Sie 10 Lebensmittel nach ihren Artikeln: der / die / das.',
        'Nennen Sie 3 Dinge, die Sie gerne frühstücken.'
      ]
    },
    sectionB: {
      title: 'Mussawi B: Wortschatz & Hören',
      focus: 'Hören & Wortschatz (Mengenangaben & Gewichte)',
      description: {
        en: 'Learn units of measurement: ein Kilo, ein Pfund, eine Packung, eine Flasche, ein Becher, eine Dose.',
        fa: 'واحدهای سنجش و اندازه‌گیری: یک کیلو، یک پوند (نیم کیلو)، یک بسته، یک بطری، یک لیوان/کاسه، یک قوطی.',
        tr: 'Ölçü ve miktar birimlerini öğrenin: bir kilo, bir paket, bir şişe, bir kutu.',
        ar: 'وحدات القياس والمقادير: كيلو، باوند (نصف كيلو)، علبة، زجاجة، كوب.',
        es: 'Aprende las unidades de medida: un kilo, un paquete, una botella, una lata.'
      },
      content: 'Ein Kilo Äpfel, eine Flasche Wasser, ein Liter Milch, 200 Gramm Käse, eine Packung Nudeln.',
      audioText: 'Ich hätte gerne 200 Gramm Gouda-Käse und eine Flasche Mineralwasser.',
      practiceTasks: [
        'Schreiben Sie eine authentische Einkaufsliste für das Wochenende.',
        'Hören Sie den Dialog an der Käsetheke und notieren Sie die Grammzahl.'
      ]
    },
    sectionC: {
      title: 'Mussawi C: Alltagskommunikation',
      focus: 'Sprechen & Dialoge (Im Supermarkt & auf dem Markt)',
      description: {
        en: 'Polite shopping requests: "Ich brauche...", "Ich möchte...", "Was kostet...?", "Haben Sie...?"',
        fa: 'مکالمات محترمانه خرید: «من نیاز دارم به...»، «من میل دارم به...»، «قیمت این چقدر است؟»، «آیا دارید...؟».',
        tr: 'Markette ve pazarda kibar alışveriş diyalogları: "Ich möchte...", "Was kostet...?"',
        ar: 'حوارات التسوق المهذبة: "أحتاج إلى..."، "أود شراء..."، "كم سعر هذا؟".',
        es: 'Diálogos de compra: "Ich möchte...", "¿Cuánto cuesta...?", "¿Tienen...?"'
      },
      content: 'Was kostet das? - Ein Kilo Tomaten kostet 2 Euro 50. / Brauchen Sie noch etwas?',
      audioText: 'Guten Tag! Haben Sie noch frische Eier? - Ja, hier bitte, zehn Bio-Eier.',
      practiceTasks: [
        'Simulieren Sie ein Verkaufsgespräch zu zweit.',
        'Fragen Sie nach dem Preis von 3 verschiedenen Lebensmitteln.'
      ]
    },
    sectionD: {
      title: 'Mussawi D: Leseverstehen & Text',
      focus: 'Lesen & Textanalyse (Supermarkt-Prospekte & Rabatte)',
      description: {
        en: 'Read weekly promotional supermarket flyers (Sonderangebote) and compare prices.',
        fa: 'خواندن بروشور هفتگی تخفیف‌های سوپرمارکت (Sonderangebote) و مقایسه قیمت‌ها.',
        tr: 'Haftalık süpermarket indirim broşürlerini okuma ve fiyat kıyaslama.',
        ar: 'قراءة منشورات عروض السوبرماركت الأسبوعية ومقارنة الأسعار والتخفيضات.',
        es: 'Lectura de folletos semanales de ofertas y comparación de precios.'
      },
      content: 'Wochenprospekt: Sonderangebote bei ALDI / LIDL München.',
      readingText: {
        type: 'Supermarkt-Prospekt',
        title: 'Angebote der Woche - Frischemarkt München',
        body: 'Bio-Bananen: nur 1,49 € pro kg | Deutscher Gouda (jung): 200g für 1,89 € | Vollkornbrot: 500g für 2,10 € | Mineralwasser (Medium): Kiste mit 12 Flaschen nur 4,99 € | Solange der Vorrat reicht!'
      },
      practiceTasks: [
        'Wie viel kosten 2 Kilo Bananen laut Prospekt?',
        'Ist der Gouda-Käse im Angebot? Wie viel Gramm bekommt man?'
      ]
    },
    sectionE: {
      title: 'Mussawi E: Grammatik & Schreiben',
      focus: 'Grammatik & Schreiben (Der Akkusativ: den / einen / keinen)',
      description: {
        en: 'Master the accusative case for masculine nouns: der -> den, ein -> einen, kein -> keinen.',
        fa: 'تسلط بر حالت مفعولی مستقیم (Akkusativ) برای اسامی مذکر: der تبدیل می‌شود به den، ein به einen و kein به keinen.',
        tr: 'İsmin -i hali (Akkusativ): Eril isimlerde der -> den, ein -> einen, kein -> keinen olur.',
        ar: 'إتقان حالة النصب (Akkusativ) للأسماء المذكرة: der تصبح den، و ein تصبح einen.',
        es: 'Domina el caso acusativo: el masculino cambia de der a den, de ein a einen y de kein a keinen.'
      },
      content: 'Akkusativ-Regel: Nur Maskulin verändert sich (der -> den / einen / keinen). Das und Die bleiben gleich.',
      grammarSnippet: {
        id: 'a1_lek3_akkusativ',
        level: 'A1.1',
        lektion: 3,
        germanTitle: 'Der Akkusativ (Direktes Objekt)',
        formula: 'Maskulin: Ich brauche *einen* Apfel (den) | Neutral: ein Brot (das) | Feminin: eine Banane (die)',
        explanation: {
          en: 'In the accusative case (direct object), only masculine forms change by taking the ending "-en" (den / einen / keinen). Neuter and feminine forms remain identical to nominative.',
          fa: 'در حالت آکوزاتیو (مفعول بی‌واسطه)، تنها اسامی مذکر تغییر می‌کنند و پسوند "-en" می‌گیرند (den / einen / keinen). اسامی خنثی و مؤنث بدون تغییر می‌مانند.',
          tr: 'Akkusativ halinde yalnızca eril isimler değişir ve "-en" eki alır (einen Apfel). Nötr ve dişil isimler değişmez.',
          ar: 'في حالة النصب (Akkusativ)، تتغير أدوات المذكر فقط بإضافة اللاحقة "-en" (den / einen / keinen)، بينما يبقى المحايد والمؤنث كما هما.',
          es: 'En acusativo, solo cambia el género masculino adoptando la terminación "-en" (einen / den). El neutro y el femenino no varían.'
        },
        examples: [
          {
            german: 'Ich kaufe einen Apfel, ein Brot und eine Flasche Milch.',
            formulaBreakdown: 'Ich (S) + kaufe (V) + einen Apfel (Akk. Maskulin) + ein Brot (Akk. Neutral) + eine Flasche (Akk. Feminin)',
            literalTranslation: {
              en: 'I buy an apple, a bread and a bottle of milk.',
              fa: 'من می‌خرم یک سیب، یک نان و یک بطری شیر.',
              tr: 'Ben bir elma, bir ekmek ve bir şişe süt satın alırım.',
              ar: 'أنا أشتري تفاحةً، وخبزاً، وزجاجة حليب.',
              es: 'Compro una manzana, un pan y una botella de leche.'
            },
            fluentTranslation: {
              en: 'I am buying an apple, bread, and a bottle of milk.',
              fa: 'من یک عدد سیب، یک نان و یک شیشه شیر می‌خرم.',
              tr: 'Bir elma, bir ekmek ve bir şişe süt alıyorum.',
              ar: 'أنا أشتري تفاحة وخبزاً وزجاجة حليب.',
              es: 'Compro una manzana, pan y una botella de leche.'
            }
          }
        ],
        category: 'cases'
      },
      practiceTasks: [
        'Setzen Sie "einen", "ein" oder "eine" ein: Ich habe _____ Salat (m), _____ Ei (n), _____ Pizza (f).',
        'Bilden Sie die Verneinung mit "keinen", "kein" oder "keine".'
      ]
    },
    videoClip: {
      title: 'Video: Ein traditionelles afghanisches Abendessen',
      scenario: 'Sayed kocht Qabili Palau für Lukas und erklärt die Zutaten auf Deutsch.',
      category: 'alltag',
      duration: '03:00',
      speakers: ['Sayed Bashir', 'Lukas'],
      germanTranscript: [
        'Sayed Bashir: Lukas, heute koche ich Qabili Palau für uns!',
        'Lukas: Das klingt lecker! Was brauchst du dafür?',
        'Sayed Bashir: Ich brauche Basmati-Reis, Karotten, Rosinen und Gewürze.',
        'Lukas: Muss ich noch etwas im Supermarkt besorgen?',
        'Sayed Bashir: Ja, bitte bring noch einen Becher Joghurt mit!'
      ],
      translatedTranscript: [
        {
          en: 'Lukas, today I am cooking Qabili Palau for us!',
          fa: 'لوکاس، امروز من قابلی پلو برای خودمان درست می‌کنم!',
          tr: 'Lukas, bugün bizim için Kabuli Pilavı pişiriyorum!',
          ar: 'لوكاس، سأطهو لنا اليوم طبق قابلي بالاو!',
          es: '¡Lukas, hoy cocino Qabili Palau para nosotros!'
        },
        {
          en: 'That sounds delicious! What do you need for it?',
          fa: 'بسیار خوشمزه به نظر می‌رسد! برای آن چه موادی لازم داری؟',
          tr: 'Kulağa çok lezzetli geliyor! Bunun için neye ihtiyacın var?',
          ar: 'يبدو شهياً جداً! ماذا تحتاج لتحضيره؟',
          es: '¡Suena delicioso! ¿Qué necesitas para prepararlo?'
        },
        {
          en: 'I need basmati rice, carrots, raisins, and spices.',
          fa: 'من به برنج باسماتی، هویج، کشمش و ادویه‌جات نیاز دارم.',
          tr: 'Basmati pirinci, havuç, kuru üzüm ve baharatlara ihtiyacım var.',
          ar: 'أحتاج إلى أرز بسمتي، وجزر، وزبيب، وتوابل.',
          es: 'Necesito arroz basmati, zanahorias, pasas y especias.'
        },
        {
          en: 'Do I need to get anything else from the supermarket?',
          fa: 'آیا لازم است چیز دیگری از سوپرمارکت تهیه کنم؟',
          tr: 'Süpermarketten başka bir şey almam gerekiyor mu?',
          ar: 'هل يجب أن أحضر شيئاً آخر من السوبرماركت؟',
          es: '¿Debo comprar algo más en el supermercado?'
        },
        {
          en: 'Yes, please bring a tub of yoghurt as well!',
          fa: 'بله، لطفاً یک کاسه ماست هم بخر و بیاور!',
          tr: 'Evet, lütfen bir kap yoğurt da getir!',
          ar: 'نعم، يرجى إحضار علبة زبادي أيضاً!',
          es: '¡Sí, por favor trae también un vaso de yogur!'
        }
      ]
    },
    exercises: [
      {
        id: 'ex_a1_3_1',
        type: 'multiple_choice',
        instruction: {
          en: 'Choose the correct accusative article for the masculine noun "Kuchen" (der).',
          fa: 'آرتیکل آکوزاتیو صحیح را برای اسم مذکر "Kuchen" (کیک) انتخاب نمایید.',
          tr: 'Eril isim "Kuchen" (der) için doğru Akkusativ artikelini seçiniz.',
          ar: 'اختر أداة النصب الصحيحة للاسم المذكر "Kuchen" (der).',
          es: 'Elige el artículo de acusativo correcto para el sustantivo masculino "Kuchen".'
        },
        prompt: 'Möchtest du _____ Kuchen essen?',
        options: ['einen', 'ein', 'eine', 'einem'],
        correctAnswer: 'einen',
        explanation: {
          en: '"Kuchen" is masculine (der Kuchen). In the accusative case as direct object of "essen", "ein" becomes "einen".',
          fa: '"Kuchen" مذکر (der Kuchen) است. در حالت مفعولی آکوزاتیو به عنوان مفعول فعل "essen"، حرف تعریف نامعین به "einen" تبدیل می‌شود.',
          tr: '"Kuchen" eril bir isimdir. Akkusativ nesne konumunda "ein" artikeli "einen" olur.',
          ar: '"Kuchen" اسم مذكر (der). في حالة النصب كمفعول به للفعل "essen"، تصبح أداة التنكير "einen".',
          es: '"Kuchen" es masculino. En función de objeto directo del verbo "essen", "ein" se convierte en "einen".'
        }
      },
      {
        id: 'ex_a1_3_2',
        type: 'sentence_reorder',
        instruction: {
          en: 'Form a correct question with question word and accusative object.',
          fa: 'یک جمله پرسشی صحیح با واژه پرسشی و مفعول آکوزاتیو بسازید.',
          tr: 'Soru kelimeli ve Akkusativ nesneli düzgün bir soru cümlesi oluşturun.',
          ar: 'كوّن سؤالاً صحيحاً بأداة استفهام ومفعول به منصوب.',
          es: 'Ordena los bloques para formar una pregunta con acusativo.'
        },
        prompt: 'Arrange the question:',
        options: ['Was', 'du', 'heute', 'kaufst', 'im Supermarkt?'],
        correctAnswer: 'Was kaufst du heute im Supermarkt?',
        explanation: {
          en: 'Question word (Was) + conjugated verb (kaufst) + subject (du) + temporal and local adverbials.',
          fa: 'کلمه پرسشی (Was) + فعل صرف‌شده (kaufst) + فاعل (du) + قید زمان و مکان.',
          tr: 'Soru kelimesi (Was) + çekimli fiil (kaufst) + özne (du) + zaman ve yer tümleci.',
          ar: 'أداة الاستفهام (Was) + الفعل المصرف (kaufst) + الفاعل (du) + باقي الجملة.',
          es: 'Partícula interrogativa + verbo en Posición 2 + sujeto + complementos.'
        }
      }
    ]
  },
  {
    id: 'a1_1_lek4',
    lektionNumber: 4,
    level: 'A1.1',
    title: 'Meine Wohnung und die Möbel',
    subTitle: 'Wohnräume, Einrichten und Verneinung nicht/kein (Lektion )',
    topic: 'Zimmer der Wohnung, Möbelstücke, Wohnungsanzeigen, Adjektive und Verneinung',
    fotoHoergeschichte: {
      title: 'Foto-Hörgeschichte: Neue Möbel für das Zimmer',
      imagePrompt: 'A bright German apartment with a wooden floor where Sayed and his friend assemble a desk and a bookshelf, measuring the room with a tape measure.',
      imageTheme: 'Einrichten in München',
      audioDuration: '02:35',
      transcript: [
        { speaker: 'Sayed Bashir', text: 'Schau mal, Lukas! Das Zimmer ist wirklich sehr hell und gemütlich.' },
        { speaker: 'Lukas Müller', text: 'Ja, die großen Fenster sind super. Aber du brauchst noch ein paar Möbel.' },
        { speaker: 'Sayed Bashir', text: 'Genau. Ich brauche einen Schreibtisch, einen bequemen Stuhl und ein Regal.' },
        { speaker: 'Lukas Müller', text: 'Hast du schon ein Bett und einen Schrank?' },
        { speaker: 'Sayed Bashir', text: 'Ein Bett habe ich schon, aber ich habe noch keinen Schrank.' },
        { speaker: 'Lukas Müller', text: 'Wir können am Samstag zusammen zu IKEA oder auf den Flohmarkt fahren.' }
      ],
      summary: {
        en: 'Sayed inspects his bright new room and discusses needed furniture with Lukas, planning a furniture trip.',
        fa: 'سید اتاق پرنور جدیدش را بررسی کرده و همراه با لوکاس فهرستی از مبلمان مورد نیاز را آماده می‌کند.',
        tr: 'Sayed aydınlık yeni odasını inceler ve Lukas ile birlikte eksik mobilyaları tamamlamak için plan yapar.',
        ar: 'يعاين سيد غرفته الجديدة المضيئة ويناقش مع لوكاس قطع الأثاث التي تنقصه للتسوق يوم السبت.',
        es: 'Sayed examina su nueva habitación y hace planes con Lukas para comprar los muebles necesarios.'
      }
    },
    sectionA: {
      title: 'Mussawi A: Sprechen & Dialog',
      focus: 'Sprechen & Hören (Räume der Wohnung benennen)',
      description: {
        en: 'Learn the rooms of an apartment: das Wohnzimmer, das Schlafzimmer, die Küche, das Bad, der Flur, der Balkon.',
        fa: 'نام بخش‌های مختلف خانه: اتاق پذیرایی، اتاق خواب، آشپزخانه، حمام، راهرو، بالکن.',
        tr: 'Ev bölümlerini öğrenin: oturma odası, yatak odası, mutfak, banyo, koridor, balkon.',
        ar: 'تعلم أقسام المنزل: غرفة المعيشة، غرفة النوم، المطبخ، الحمام، الممر، الشرفة.',
        es: 'Aprende las habitaciones de una vivienda: salón, dormitorio, cocina, baño, pasillo.'
      },
      content: 'Das Wohnzimmer, das Schlafzimmer, die Küche, das Badezimmer, der Flur, der Balkon, der Keller.',
      audioText: 'Meine Wohnung hat drei Zimmer, eine Küche, ein Bad und einen großen Südbalkon.',
      practiceTasks: [
        'Beschreiben Sie Ihre aktuelle Wohnung: Wie viele Zimmer hat sie?',
        'Welches Zimmer ist Ihr Lieblingsraum und warum?'
      ]
    },
    sectionB: {
      title: 'Mussawi B: Wortschatz & Hören',
      focus: 'Hören & Wortschatz (Möbelstücke & Elektrogeräte)',
      description: {
        en: 'Furniture and appliances: der Tisch, der Stuhl, das Bett, das Sofa, der Schrank, der Kühlschrank, die Waschmaschine.',
        fa: 'اسباب و اثاثیه و وسایل برقی: میز، صندلی، تخت، کاناپه، کمد، یخچال، ماشین لباسشویی.',
        tr: 'Mobilyalar ve beyaz eşyalar: masa, sandalye, yatak, kanepe, dolap, buzdolabı, çamaşır makinesi.',
        ar: 'الأثاث والأجهزة الكهربائية: الطاولة، الكرسي، السرير، الأريكة، الخزانة، الثلاجة، الغسالة.',
        es: 'Muebles y electrodomésticos: mesa, silla, cama, sofá, armario, frigorífico, lavadora.'
      },
      content: 'Der Schrank, der Tisch, der Stuhl, das Bett, das Regal, das Sofa/die Couch, der Fernseher, die Lampe.',
      audioText: 'In meinem Schlafzimmer steht ein großes Bett und neben dem Bett steht eine Stehlampe.',
      practiceTasks: [
        'Ordnen Sie Möbel den entsprechenden Zimmern zu (Küche, Schlafzimmer, Bad).',
        'Notieren Sie 5 Elektrogeräte mit Artikel.'
      ]
    },
    sectionC: {
      title: 'Mussawi C: Alltagskommunikation',
      focus: 'Sprechen & Dialoge (Wohnungen & Möbel bewerten mit Adjektiven)',
      description: {
        en: 'Adjectives for describing living spaces: groß/klein, hell/dunkel, teuer/billig, modern/alt, ruhig/laut.',
        fa: 'صفات توصیف محل سکونت: بزرگ/کوچک، پرنور/تاریک، گران/ارزان، مدرن/قدیمی، آرام/پرسروصدا.',
        tr: 'Yaşam alanlarını niteleyen sıfatlar: büyük/küçük, aydınlık/karanlık, pahalı/ucuz, sakin/gürültülü.',
        ar: 'صفات وصف المساكن: كبير/صغير، مشرق/مظلم، غالٍ/رخيص، حديث/قديم، هادئ/صاخب.',
        es: 'Adjetivos para describir viviendas: amplio/pequeño, luminoso/oscuro, caro/barato, tranquilo/ruidoso.'
      },
      content: 'Wie ist die Wohnung? - Sie ist sehr groß und hell, aber leider auch ziemlich teuer.',
      audioText: 'Gefällt dir das Sofa? - Nein, ich finde es zu dunkel und unbequem.',
      practiceTasks: [
        'Bewerten Sie 3 Möbelstücke mit Adjektiven: "Ich finde den Tisch schön/praktisch/teuer."',
        'Bilden Sie Gegenteilpaare: hell <-> dunkel, groß <-> klein.'
      ]
    },
    sectionD: {
      title: 'Mussawi D: Leseverstehen & Text',
      focus: 'Lesen & Textanalyse (Wohnungsanzeigen verstehen)',
      description: {
        en: 'Read authentic German real estate classified ads and understand abbreviations (2-Zi.-Whg., KM, WM, NK, EG).',
        fa: 'خواندن آگهی‌های واقعی مسکن در آلمان و رمزگشایی اختصارات رایج (مانند 2-Zi.-Whg., KM, WM, NK).',
        tr: 'Almanca emlak ilanlarını okuma ve yaygın kısaltmaları (KM, WM, NK, Zi.) çözme.',
        ar: 'قراءة إعلانات العقارات الألمانية وفهم الاختصارات الشائعة (KM إيجار صافٍ، WM إيجار شامل، Zi غرفة).',
        es: 'Lectura de anuncios inmobiliarios y descifrado de abreviaturas típicas alemanas.'
      },
      content: 'Authentische Wohnungsanzeige aus der Süddeutschen Zeitung.',
      readingText: {
        type: 'Wohnungsanzeige',
        title: 'München-Sendling: Schöne 2-Zimmer-Wohnung mit Balkon',
        body: 'Helle 2-Zi.-Whg., 58 m², 2. OG mit Aufzug. Einbauküche (EBK) vorhanden, modernes Duschbad, Balkon nach Süden. Kaltmiete (KM): 850 € zzgl. Nebenkosten (NK): 180 €. Kaution: 3 KM. Frei ab 01. nächsten Monats. Keine Haustiere.'
      },
      practiceTasks: [
        'Wie hoch ist die Warmmiete (Kaltmiete + Nebenkosten)?',
        'In welchem Stockwerk liegt die Wohnung?'
      ]
    },
    sectionE: {
      title: 'Mussawi E: Grammatik & Schreiben',
      focus: 'Grammatik & Schreiben (Verneinung: kein vs. nicht)',
      description: {
        en: 'Learn the fundamental difference between "kein" (negating nouns with indefinite/zero article) and "nicht" (negating verbs, adjectives, specific nouns).',
        fa: 'آموزش تفاوت بنیادین بین "kein" (منفی کردن اسامی با آرتیکل نامعین یا بدون آرتیکل) و "nicht" (منفی کردن افعال، صفات، قیدها و اسامی مشخص).',
        tr: '"kein" (belirsiz isimleri olumsuzlama) ile "nicht" (fiil, sıfat ve belirli yapıları olumsuzlama) ayrımını kavrayın.',
        ar: 'التمييز بين "kein" (لنفي الأسماء النكرة وبدون أداة) و "nicht" (لنفي الأفعال والصفات والأسماء المعرفة).',
        es: 'Aprende la distinción entre "kein" (niega sustantivos indeterminados) y "nicht" (niega verbos, adjetivos y elementos determinados).'
      },
      content: 'Regel: Nomen mit ein/kein Artikel -> kein/keine. Verben, Adjektive, Pronomen, Nomen mit der/die/das -> nicht.',
      grammarSnippet: {
        id: 'a1_lek4_verneinung',
        level: 'A1.1',
        lektion: 4,
        germanTitle: 'Verneinung mit "nicht" und "kein"',
        formula: 'Nomen (unbestimmt/ohne Artikel): kein / keine / keinen | Verben/Adjektive/Bestimmt: nicht',
        explanation: {
          en: 'Use "kein" to negate nouns preceded by an indefinite article (ein/eine) or nouns without an article. Use "nicht" to negate verbs, adjectives, adverbs, or nouns with definite articles.',
          fa: 'برای منفی کردن اسامی دارای آرتیکل نامعین یا بدون آرتیکل از "kein" استفاده کنید. برای منفی کردن افعال، صفت‌ها، قیدها و اسامی دارای آرتیکل معین از "nicht" بهره بگیرید.',
          tr: 'Belirsiz veya artikelsiz isimlerde "kein" kullanılır. Fiil, sıfat, zarf ve belirli artikelli isimlerde ise "nicht" kullanılır.',
          ar: 'تُستخدم "kein" لنفي الأسماء المنكرة أو المجردة من الأداة، بينما تُستخدم "nicht" لنفي الأفعال والصفات والظروف والأسماء المعرفة.',
          es: 'Se utiliza "kein" para negar sustantivos con artículo indefinido o sin artículo. Para negar verbos, adjetivos o elementos determinados se emplea "nicht".'
        },
        examples: [
          {
            german: 'Das ist kein Schrank, das ist ein Regal. Die Wohnung ist nicht teuer.',
            formulaBreakdown: 'kein Schrank (Nomen maskulin) | nicht teuer (Adjektiv)',
            literalTranslation: {
              en: 'That is no cupboard, that is a shelf. The apartment is not expensive.',
              fa: 'آن هیچ کمدی نیست، آن یک قفسه است. آپارتمان گران نیست.',
              tr: 'O bir dolap değil, bir raftır. Daire pahalı değildir.',
              ar: 'هذه ليست خزانة، هذا رف. الشقة ليست غالية.',
              es: 'Eso no es un armario, es una estantería. El piso no es caro.'
            },
            fluentTranslation: {
              en: 'That is not a closet, that is a bookshelf. The apartment is not expensive.',
              fa: 'آن کمد نیست، یک قفسه است. آپارتمان گران‌قیمت نیست.',
              tr: 'O bir dolap değil, bir kitaplık. Daire pahalı değil.',
              ar: 'تلك ليست خزانة بل رف كتب. الشقة غير باهظة الثمن.',
              es: 'Eso no es un armario, es una estantería. El piso no es caro.'
            }
          }
        ],
        category: 'sentence_structure'
      },
      practiceTasks: [
        'Setzen Sie "nicht" oder "kein/keine/keinen" ein: Ich habe _____ Balkon. Das Zimmer ist _____ groß.',
        'Antworten Sie mit Nein: "Hast du einen Fernseher?" - "Nein, ich habe _____."'
      ]
    },
    videoClip: {
      title: 'Video: Wohnungsübergabe und Hausordnung',
      scenario: 'Sayed besichtigt die Wohnung mit dem Hausmeister und spricht über Ruhezeiten.',
      category: 'alltag',
      duration: '02:45',
      speakers: ['Herr Schuster', 'Sayed Bashir'],
      germanTranscript: [
        'Herr Schuster: Guten Tag, Herr Bashir! Hier sind die Schlüssel für Ihre Wohnung.',
        'Sayed Bashir: Vielen Dank, Herr Schuster! Wo stehen die Mülltonnen?',
        'Herr Schuster: Die Mülltonnen stehen im Hof hinter dem Fahrradkeller.',
        'Sayed Bashir: Gibt es im Haus feste Ruhezeiten?',
        'Herr Schuster: Ja, bitte beachten Sie die Nachtruhe ab 22 Uhr.'
      ],
      translatedTranscript: [
        {
          en: 'Good day, Mr. Bashir! Here are the keys to your apartment.',
          fa: 'روز بخیر آقای بشیر! بفرمایید، این کلیدهای آپارتمان شما است.',
          tr: 'İyi günler Sayın Bashir! İşte dairenizin anahtarları.',
          ar: 'طاب يومك يا سيد بشير! تفضل بمفاتيح شقتك.',
          es: '¡Buenos días, señor Bashir! Aquí tiene las llaves de su piso.'
        },
        {
          en: 'Thank you very much, Mr. Schuster! Where are the garbage bins located?',
          fa: 'بسیار متشکرم آقای شوستر! سطل‌های زباله کجا قرار دارند؟',
          tr: 'Çok teşekkürler Bay Schuster! Çöp konteynerleri nerede duruyor?',
          ar: 'شكراً جزيلاً يا سيد شوستر! أين توجد حاويات القمامة؟',
          es: '¡Muchas gracias, señor Schuster! ¿Dónde están los cubos de basura?'
        },
        {
          en: 'The garbage bins are in the courtyard behind the bicycle cellar.',
          fa: 'سطل‌های تفکیک زباله در حیاط پشت انبار دوچرخه‌ها قرار دارند.',
          tr: 'Çöp konteynerleri avluda, bisiklet bodrumunun arkasında.',
          ar: 'توجد الحاويات في الفناء الداخلي خلف قبو الدراجات.',
          es: 'Los cubos de basura están en el patio, detrás del cuarto de bicicletas.'
        },
        {
          en: 'Are there set quiet hours in the building?',
          fa: 'آیا در این ساختمان ساعات مشخصی برای رعایت سکوت و آرامش وجود دارد؟',
          tr: 'Binada belirlenmiş dinlenme/sessizlik saatleri var mı?',
          ar: 'هل هناك أوقات محددة للهدوء في المبنى؟',
          es: '¿Hay horarios establecidos de silencio en el edificio?'
        },
        {
          en: 'Yes, please observe quiet hours starting from 10 PM.',
          fa: 'بله، لطفاً از ساعت ۲۲ (۱۰ شب) به بعد سکوت شبانه را رعایت فرمایید.',
          tr: 'Evet, lütfen saat 22:00\'den itibaren gece sessizliğine uyunuz.',
          ar: 'نعم، يرجى الالتزام بساعات الهدوء الليلي بدءاً من الساعة العاشرة مساءً.',
          es: 'Sí, por favor respete el silencio nocturno a partir de las 22 horas.'
        }
      ]
    },
    exercises: [
      {
        id: 'ex_a1_4_1',
        type: 'multiple_choice',
        instruction: {
          en: 'Decide whether "nicht" or "kein/keine" is required.',
          fa: 'تصمیم بگیرید که برای منفی‌سازی جمله نیاز به "nicht" است یا "kein/keine".',
          tr: 'Cümleyi olumsuzlamak için "nicht" mı yoksa "kein/keine" mi gerektiğini belirleyin.',
          ar: 'حدد ما إذا كانت الجملة تتطلب أداة النفي "nicht" أم "kein/keine".',
          es: 'Decide si la frase requiere la negación con "nicht" o con "kein/keine".'
        },
        prompt: 'Die Küche ist _____ modern, aber sie hat einen neuen Herd.',
        options: ['nicht', 'kein', 'keine', 'keinen'],
        correctAnswer: 'nicht',
        explanation: {
          en: '"modern" is an adjective. Adjectives in predicative position are negated using "nicht".',
          fa: '"modern" یک صفت است. صفت‌ها در زبان آلمانی با "nicht" منفی می‌شوند نه با kein.',
          tr: '"modern" bir sıfattır ve sıfatlar Almancada "nicht" ile olumsuz yapılır.',
          ar: '"modern" صفة، والصفات تُنفى في الألمانية باستخدام "nicht".',
          es: '"modern" es un adjetivo. Los adjetivos se niegan con "nicht".'
        }
      },
      {
        id: 'ex_a1_4_2',
        type: 'fill_blank',
        instruction: {
          en: 'Fill in the correct negated accusative article (keinen / kein / keine).',
          fa: 'آرتیکل منفی آکوزاتیو مناسب (keinen / kein / keine) را در جای خالی بنویسید.',
          tr: 'Doğru olumsuz Akkusativ artikelini boşluğa yazın (keinen / kein / keine).',
          ar: 'املأ الفراغ بأداة النفي المناسبة في حالة النصب (keinen / kein / keine).',
          es: 'Completa con la forma negativa correcta en acusativo (keinen / kein / keine).'
        },
        prompt: 'Mein Zimmer hat leider _____ Balkon (der Balkon).',
        options: ['keinen', 'kein', 'keine', 'nicht'],
        correctAnswer: 'keinen',
        explanation: {
          en: '"Balkon" is masculine (der Balkon). In the accusative case, the negative article is "keinen".',
          fa: '"Balkon" اسمی مذکر (der Balkon) است. در حالت مفعولی آکوزاتیو، شکل منفی آن "keinen" می‌شود.',
          tr: '"Balkon" eril bir isimdir ve Akkusativ halinde "keinen" şeklini alır.',
          ar: '"Balkon" اسم مذكر (der). في حالة النصب يأخذ أداة النفي "keinen".',
          es: '"Balkon" es masculino. En acusativo adopta la forma negativa "keinen".'
        }
      }
    ]
  },
  {
    id: 'a1_1_lek5',
    lektionNumber: 5,
    level: 'A1.1',
    title: 'Mein Tag und mein Tagesablauf',
    subTitle: 'Uhrzeiten, Alltagsaktivitäten und trennbare Verben (Lektion )',
    topic: 'Offizielle und inoffizielle Uhrzeit, Tagesablauf, Wochentage, trennbare Verben und Präpositionen',
    fotoHoergeschichte: {
      title: 'Foto-Hörgeschichte: Ein typischer Montag in München',
      imagePrompt: 'A split image showing Sayed waking up with an alarm clock at 7 AM, riding an S-Bahn train with his backpack, and attending class at the Goethe-Institut.',
      imageTheme: 'Alltag in München',
      audioDuration: '02:40',
      transcript: [
        { speaker: 'Sayed Bashir', text: 'Mein Wecker klingelt jeden Morgen um halb sieben. Ich stehe um Viertel vor sieben auf.' },
        { speaker: 'Lukas Müller', text: 'Um wie viel Uhr beginnt dein Deutschkurs?' },
        { speaker: 'Sayed Bashir', text: 'Der Kurs fängt pünktlich um neun Uhr an und dauert bis halb eins.' },
        { speaker: 'Lukas Müller', text: 'Und was machst du am Nachmittag?' },
        { speaker: 'Sayed Bashir', text: 'Nachmittags kaufe ich im Supermarkt ein oder lerne in der Bibliothek. Um achtzehn Uhr koche ich Abendessen.' },
        { speaker: 'Lukas Müller', text: 'Klingt nach einem gut organisierten Tagesablauf!' }
      ],
      summary: {
        en: 'Sayed explains his daily schedule, waking up at 6:45, taking morning classes, studying in the afternoon, and cooking dinner.',
        fa: 'سید برنامه روزانه خود را توضیح می‌دهد: بیدار شدن در ساعت ۶:۴۵، کلاس زبان صبحگاهی، درس خواندن عصرانه و پختن شام.',
        tr: 'Sayed günlük programını anlatır: 06:45\'te kalkış, sabah dil kursu, öğleden sonra kütüphanede çalışma ve akşam yemeği.',
        ar: 'يشرح سيد روتينه اليومي: الاستيقاظ في السابعة إلا ربعاً، وحضور دورة الألمانية، والدراسة بعد الظهر وطهي العشاء.',
        es: 'Sayed describe su rutina diaria: levantarse temprano, ir a clase de alemán, estudiar y preparar la cena.'
      }
    },
    sectionA: {
      title: 'Mussawi A: Sprechen & Dialog',
      focus: 'Sprechen & Hören (Uhrzeiten: offiziell & inoffiziell)',
      description: {
        en: 'Tell the time in German: official 24-hour style (08:30 = acht Uhr dreißig) and everyday conversational style (halb neun).',
        fa: 'بیان ساعت به دو شیوه: رسمی ۲۴ ساعته (۸:۳۰ = acht Uhr dreißig) و محاوره‌ای روزمره (halb neun, Viertel nach, Viertel vor).',
        tr: 'Saatleri söyleme: 24 saatlik resmi format (08:30 = acht Uhr dreißig) ve günlük konuşma formatı (halb neun).',
        ar: 'قراءة الوقت بالطريقتين: الرسمية على مدار 24 ساعة، والعامية الدارجة (نصف، ربع بعد، ربع قبل).',
        es: 'Aprende a decir la hora: formato oficial de 24 horas y estilo conversacional coloquial.'
      },
      content: 'Inoffiziell: Viertel nach acht (08:15), halb neun (08:30), Viertel vor neun (08:45). Offiziell: acht Uhr fünfzehn.',
      audioText: 'Wie spät ist es? / Wie viel Uhr ist es? - Es ist genau Viertel nach drei.',
      practiceTasks: [
        'Sagen Sie die Uhrzeiten auf zwei Arten: 07:15, 12:30, 19:45, 21:00.',
        'Fragen Sie Ihren Lernpartner nach der Uhrzeit.'
      ]
    },
    sectionB: {
      title: 'Mussawi B: Wortschatz & Hören',
      focus: 'Hören & Wortschatz (Tageszeiten & Wochentage)',
      description: {
        en: 'Days of the week and parts of the day: Montag bis Sonntag, der Morgen, der Vormittag, der Mittag, der Nachmittag, der Abend, die Nacht.',
        fa: 'روزهای هفته و اوقات شبانه‌روز: دوشنبه تا یکشنبه، صبح، قبل از ظهر، ظهر، بعد از ظهر، عصر، شب.',
        tr: 'Haftanın günleri ve günün vakitleri: Pazartesiden pazara, sabah, öğle, akşam, gece.',
        ar: 'أيام الأسبوع وأوقات اليوم: من الاثنين إلى الأحد، الصباح، الظهيرة، المساء، الليل.',
        es: 'Los días de la semana y momentos del día: de lunes a domingo, mañana, tarde, noche.'
      },
      content: 'Montag, Dienstag, Mittwoch, Donnerstag, Freitag, Samstag, Sonntag. Am Morgen, am Nachmittag, am Abend, in der Nacht.',
      audioText: 'Am Samstag schlafe ich gerne lange aus und am Sonntag treffe ich Freunde.',
      practiceTasks: [
        'Sagen Sie alle 7 Wochentage fehlerfrei auf.',
        'Wann haben Sie frei? Formulieren Sie 2 Sätze mit "am Wochenende".'
      ]
    },
    sectionC: {
      title: 'Mussawi C: Alltagskommunikation',
      focus: 'Sprechen & Dialoge (Verabredungen treffen)',
      description: {
        en: 'Arrange appointments: "Hast du am Freitag Zeit?", "Wann treffen wir uns?", "Um wie viel Uhr passt es dir?"',
        fa: 'تنظیم قرارهای ملاقات: «آیا جمعه وقت داری؟»، «کی همدیگر را ببینیم؟»، «چه ساعتی برایت مناسب است؟».',
        tr: 'Randevulaşma ve buluşma planlama diyalogları: "Wann treffen wir uns?", "Hast du Zeit?"',
        ar: 'الاتفاق على المواعيد: "هل لديك وقت يوم الجمعة؟"، "متى نلتقي؟"، "في أي ساعة يناسبك؟".',
        es: 'Concierta citas: "¿Tienes tiempo el viernes?", "¿A qué hora quedamos?", "¿Te viene bien?"'
      },
      content: 'Wann hast du Zeit? - Am Mittwoch um 15 Uhr. - Tut mir leid, da kann ich nicht. Geht es auch um 17 Uhr?',
      audioText: 'Wollen wir am Samstag ins Kino gehen? - Ja, gerne! Wann fängt der Film an? - Um zwanzig Uhr.',
      practiceTasks: [
        'Vereinbaren Sie einen Termin zum gemeinsamen Deutschlernen.',
        'Reagieren Sie höflich auf eine Absage und schlagen Sie einen Ausweichtermin vor.'
      ]
    },
    sectionD: {
      title: 'Mussawi D: Leseverstehen & Text',
      focus: 'Lesen & Textanalyse (Terminkalender & Tagesplan)',
      description: {
        en: 'Read a calendar schedule and understand daily commitments and course appointments.',
        fa: 'خواندن تقویم کاری و برنامه‌ریز روزانه و درک قرارها و تعهدات زمان‌بندی‌شده.',
        tr: 'Haftalık ajandayı okuma ve randevu/kurs saatlerini anlama.',
        ar: 'قراءة جدول المواعيد والتقويم وفهم الالتزامات اليومية وأوقات الحصص.',
        es: 'Lectura de una agenda semanal y comprensión de citas y horarios.'
      },
      content: 'Terminkalender von Sayed für die laufende Woche.',
      readingText: {
        type: 'Terminkalender',
        title: 'Sayeds Wochenplan - Kalenderwoche 42',
        body: 'Mo-Fr: 09:00 - 12:30 Uhr: Deutschkurs A1.1 (Goethe-Institut) | Di 14:30 Uhr: Termin beim Bürgerbüro (Anmeldung) | Do 16:00 Uhr: Sprechstunde bei Frau Weber | Sa 11:00 Uhr: Fußball spielen im Englischen Garten | So: Ruhetag und Telefonat mit der Familie in Kabul.'
      },
      practiceTasks: [
        'Wann hat Sayed den Behördentermin im Bürgerbüro?',
        'Was macht Sayed am Samstagvormittag?'
      ]
    },
    sectionE: {
      title: 'Mussawi E: Grammatik & Schreiben',
      focus: 'Grammatik & Schreiben (Trennbare Verben & Temporale Präpositionen: um, am, von...bis)',
      description: {
        en: 'Master separable verbs (aufstehen, einkaufen, anfangen) and temporal prepositions (um + Zeit, am + Tag, von...bis).',
        fa: 'تسلط بر افعال جداشدنی (aufstehen, einkaufen, anfangen) و حروف اضافه زمان (um برای ساعت، am برای روزها، von...bis از...تا).',
        tr: 'Ayrılabilen fiiller (aufstehen, einkaufen) ve zaman edatları (um, am, von...bis).',
        ar: 'إتقان الأفعال المنفصلة (aufstehen, einkaufen) وحروف جر الزمان (um للوقت، am للأيام، von...bis من...إلى).',
        es: 'Domina los verbos separables (aufstehen, anrufen) y las preposiciones temporales (um, am, von...bis).'
      },
      content: 'Trennbare Verben: Das Präfix wandert im Präsens ganz ans Satzende. Ich stehe um 7 Uhr auf.',
      grammarSnippet: {
        id: 'a1_lek5_trennbare_verben',
        level: 'A1.1',
        lektion: 5,
        germanTitle: 'Trennbare Verben & Temporale Präpositionen',
        formula: 'S + V-Stamm (konjugiert an Pos 2) + (...) + *Präfix (am Satzende)*',
        explanation: {
          en: 'Separable verb prefixes (auf-, ein-, an-, mit-, aus-) detach in simple present tense and strictly move to the very end of the sentence.',
          fa: 'پیشوندهای افعال جداشدنی (مانند auf-, ein-, an-) در زمان حال ساده جدا شده و دقیقاً در آخرین جایگاه جمله قرار می‌گیرند.',
          tr: 'Ayrılabilen fiillerde ön ek (auf-, ein-, an-) cümlenin tam sonuna gider: Ich stehe früh auf.',
          ar: 'تنفصل البادئة في الأفعال المنفصلة (auf-, ein-, an-) في زمن المضارع وتنتقل إلى نهاية الجملة تماماً.',
          es: 'El prefijo de los verbos separables se coloca obligatoriamente al final de la oración en presente.'
        },
        examples: [
          {
            german: 'Sayed kauft am Nachmittag im Supermarkt ein.',
            formulaBreakdown: 'Sayed (S) + kauft (V-Stamm) + am Nachmittag (...) + *ein (Präfix am Satzende)*',
            literalTranslation: {
              en: 'Sayed buys in the afternoon in the supermarket in.',
              fa: 'سید می‌خرد بعدازظهر در سوپرمارکت خرید.',
              tr: 'Sayed öğleden sonra süpermarkette alışveriş yapar.',
              ar: 'يتسوق سيد بعد الظهر في السوبرماركت.',
              es: 'Sayed hace la compra por la tarde en el supermercado.'
            },
            fluentTranslation: {
              en: 'Sayed does the shopping in the supermarket in the afternoon.',
              fa: 'سید بعدازظهر در سوپرمارکت خرید می‌کند.',
              tr: 'Sayed öğleden sonra süpermarkette alışveriş yapıyor.',
              ar: 'يتسوق سيد في السوبرماركت بعد الظهر.',
              es: 'Sayed hace las compras en el supermercado por la tarde.'
            }
          }
        ],
        category: 'verbs'
      },
      practiceTasks: [
        'Bilden Sie Sätze mit trennbaren Verben: aufstehen, fernsehen, anrufen, mitbringen.',
        'Wählen Sie die richtige Präposition: _____ 8 Uhr, _____ Montag, _____ 14 bis 16 Uhr.'
      ]
    },
    videoClip: {
      title: 'Video: Ein Ausflug in den Englischen Garten',
      scenario: 'Sayed und Lukas treffen sich am Sonntagnachmittag im Englischen Garten zum Spazierengehen.',
      category: 'alltag',
      duration: '02:55',
      speakers: ['Sayed Bashir', 'Lukas'],
      germanTranscript: [
        'Sayed Bashir: Wann fängt unser Spaziergang an?',
        'Lukas: Wir treffen uns um fünfzehn Uhr am Chinesischen Turm.',
        'Sayed Bashir: Prima, ich bringe etwas Tee und Decken mit.',
        'Lukas: Sehr gut! Danach können wir noch ein Eis essen.',
        'Sayed Bashir: Einverstanden, bis später!'
      ],
      translatedTranscript: [
        {
          en: 'When does our walk start?',
          fa: 'پیاده‌روی ما چه ساعتی شروع می‌شود؟',
          tr: 'Yürüyüşümüz ne zaman başlıyor?',
          ar: 'متى تبدأ نزهتنا؟',
          es: '¿A qué hora empieza nuestro paseo?'
        },
        {
          en: 'We will meet at 3 PM at the Chinese Tower.',
          fa: 'ما ساعت ۱۵ (۳ بعدازظهر) در برج چینی همدیگر را می‌بینیم.',
          tr: 'Saat 15:00\'te Çin Kulesi\'nde buluşuyoruz.',
          ar: 'سنلتقي في الساعة الثالثة عصراً عند البرج الصيني.',
          es: 'Quedamos a las tres de la tarde en la Torre China.'
        },
        {
          en: 'Great, I will bring some tea and blankets.',
          fa: 'عالی است، من کمی چای و زیرانداز می‌آورم.',
          tr: 'Harika, ben biraz çay ve örtü getiririm.',
          ar: 'رائع، سأحضر معي بعض الشاي وأغطية.',
          es: 'Genial, llevaré algo de té y unas mantas.'
        },
        {
          en: 'Very good! Afterwards we can eat some ice cream.',
          fa: 'بسیار عالی! بعد از آن می‌توانیم بستنی هم بخوریم.',
          tr: 'Çok iyi! Sonrasında dondurma da yiyebiliriz.',
          ar: 'ممتاز جداً! يمكننا بعد ذلك تناول المثلجات.',
          es: '¡Muy bien! Después podemos tomar un helado.'
        },
        {
          en: 'Agreed, see you later!',
          fa: 'موافقم، تا بعد!',
          tr: 'Anlaştık, sonra görüşürüz!',
          ar: 'اتفقنا، إلى اللقاء لاحقاً!',
          es: '¡De acuerdo, hasta luego!'
        }
      ]
    },
    exercises: [
      {
        id: 'ex_a1_5_1',
        type: 'sentence_reorder',
        instruction: {
          en: 'Reorder the blocks containing the separable verb "aufstehen".',
          fa: 'بلوک‌های حاوی فعل جداشدنی "aufstehen" (بیدار شدن/بلند شدن) را مرتب کنید.',
          tr: 'Ayrılabilen "aufstehen" fiilini içeren blokları doğru dizin.',
          ar: 'رتب الكلمات التي تحتوي على الفعل المنفصل "aufstehen" (يستيقظ).',
          es: 'Ordena la frase con el verbo separable "aufstehen".'
        },
        prompt: 'Arrange into a correct sentence:',
        options: ['Sayed', 'steht', 'morgens', 'um', 'sieben', 'Uhr', 'auf.'],
        correctAnswer: 'Sayed steht morgens um sieben Uhr auf.',
        explanation: {
          en: 'In German separable verbs, the conjugated stem (steht) is in Position 2 and the prefix (auf) is positioned at the very end.',
          fa: 'در افعال جداشدنی آلمانی، ریشه صرف‌شده (steht) در جایگاه ۲ و پیشوند جداشدنی (auf) در انتهای جمله قرار می‌گیرد.',
          tr: 'Ayrılabilen fiillerde çekimli gövde (steht) 2. sırada, ön ek (auf) ise en sondadır.',
          ar: 'في الأفعال المنفصلة، يقع أصل الفعل المصرف (steht) ثانياً وتذهب البادئة (auf) إلى نهاية الجملة.',
          es: 'En los verbos separables, la raíz conjugada va en Posición 2 y el prefijo al final de la frase.'
        }
      },
      {
        id: 'ex_a1_5_2',
        type: 'multiple_choice',
        instruction: {
          en: 'Select the correct temporal preposition for clock times and days.',
          fa: 'حرف اضافه زمان مناسب برای ساعت و روزهای هفته را انتخاب کنید.',
          tr: 'Saatler ve günler için doğru zaman edatını seçiniz.',
          ar: 'اختر حرف الجر الزمني الصحيح للساعات والأيام.',
          es: 'Selecciona la preposición temporal adecuada para horas y días.'
        },
        prompt: 'Der Deutschkurs beginnt _____ 9:00 Uhr und findet _____ Montag statt.',
        options: ['um / am', 'am / um', 'im / an', 'von / zu'],
        correctAnswer: 'um / am',
        explanation: {
          en: 'We use "um" for clock times (um 9:00 Uhr) and "am" for days of the week (am Montag).',
          fa: 'برای زمان ساعت از "um" (ساعت ۹:۰۰) و برای روزهای هفته از "am" (روز دوشنبه) استفاده می‌شود.',
          tr: 'Saatlerde "um", günlerde ise "am" edatı kullanılır: um 9:00 Uhr, am Montag.',
          ar: 'نستخدم "um" للساعات المحددة، و "am" لأيام الأسبوع: um 9:00 Uhr / am Montag.',
          es: 'Se utiliza "um" para las horas del reloj y "am" para los días de la semana.'
        }
      }
    ]
  },
  {
    id: 'a1_1_lek6',
    lektionNumber: 6,
    level: 'A1.1',
    title: 'Freizeit, Hobbys und Sport',
    subTitle: 'Freizeitaktivitäten und das Modalverb "können" (Lektion )',
    topic: 'Hobbys, Sportarten, Musikinstrumente, Verabredungen und Fähigkeiten ausdrücken mit "können"',
    fotoHoergeschichte: {
      title: 'Foto-Hörgeschichte: Am Sportplatz an der Isar',
      imagePrompt: 'A lively sports ground near the river Isar in Munich where international youths play football and Sayed scores a goal, cheering with teammates.',
      imageTheme: 'Sport und Freizeit an der Isar',
      audioDuration: '02:30',
      transcript: [
        { speaker: 'Lukas Müller', text: 'Sayed, spielst du gerne Fußball?' },
        { speaker: 'Sayed Bashir', text: 'Ja, sehr gerne! In Kabul habe ich fast jeden Tag mit meinen Freunden gekickt.' },
        { speaker: 'Lukas Müller', text: 'Komm mit! Unser Team braucht heute noch einen guten Stürmer.' },
        { speaker: 'Sayed Bashir', text: 'Toll, ich kann schnell rennen und gut schießen!' },
        { speaker: 'Lukas Müller', text: 'Perfekt, nach dem Spiel grillen wir alle zusammen an der Isar.' }
      ],
      summary: {
        en: 'Sayed joins a local football match at the Isar river in Munich and talks about his sporting abilities.',
        fa: 'سید به جمع بازیکنان فوتبال در کنار رود ایزار مونیخ می‌پیوندد و درباره مهارت‌های ورزشی خود صحبت می‌کند.',
        tr: 'Sayed Münih Isar nehri kıyısındaki futbol maçına katılır ve spor yeteneklerinden bahseder.',
        ar: 'ينضم سيد لمباراة كرة قدم عند نهر إيزار في ميونيخ ويتحدث عن مهاراته الرياضية.',
        es: 'Sayed participa en un partido de fútbol junto al río Isar y habla de sus habilidades deportivas.'
      }
    },
    sectionA: {
      title: 'Mussawi A: Sprechen & Dialog',
      focus: 'Sprechen & Hören (Freizeitaktivitäten & Hobbys)',
      description: {
        en: 'Express hobbies: Fußball spielen, schwimmen, kochen, Musik hören, lesen, Fahrrad fahren, wandern.',
        fa: 'بیان سرگرمی‌ها: فوتبال بازی کردن، شنا، آشپزی، موسیقی، مطالعه، دوچرخه‌سواری، کوهنوردی.',
        tr: 'Hobileri ifade etme: futbol oynamak, yüzmek, yemek pişirmek, kitap okumak, bisiklete binmek.',
        ar: 'التعبير عن الهوايات: لعب كرة القدم، السباحة، الطهي، سماع الموسيقى، القراءة، ركوب الدراجة.',
        es: 'Expresa aficiones: jugar al fútbol, nadar, cocinar, leer, montar en bicicleta.'
      },
      content: 'Was machst du in deiner Freizeit? - In meiner Freizeit spiele ich gerne Gitarre und gehe schwimmen.',
      audioText: 'Mein Hobby ist Kochen. Ich koche sehr gerne traditionelle Gerichte für meine Freunde.',
      practiceTasks: [
        'Fragen Sie 3 Personen nach ihren liebsten Hobbys.',
        'Verwenden Sie die Partikel "gerne" / "nicht gerne": "Ich fahre gerne Fahrrad."'
      ]
    },
    sectionB: {
      title: 'Mussawi B: Wortschatz & Hören',
      focus: 'Hören & Wortschatz (Fähigkeiten & Sport)',
      description: {
        en: 'Express abilities and talents: "Ich kann sehr gut schwimmen", "Ich kann ein bisschen Gitarre spielen".',
        fa: 'بیان توانمندی‌ها و استعدادها: «من خیلی خوب شنا می‌کنم»، «من کمی گیتار می‌نوازم».',
        tr: 'Yetenek ve becerileri ifade etme: "Çok iyi yüzebilirim", "Biraz gitar çalabilirim".',
        ar: 'التعبير عن المهارات والقدرات: "أستطيع السباحة جيداً"، "أستطيع العزف قليلاً".',
        es: 'Expresa habilidades y destrezas con grados de intensidad (sehr gut, gut, ein bisschen).'
      },
      content: 'Sehr gut, gut, ein bisschen, gar nicht. Kannst du Ski fahren? - Nein, ich kann gar nicht Ski fahren.',
      audioText: 'Kannst du Schach spielen? - Ja, ich spiele schon seit meiner Kindheit Schach.',
      practiceTasks: [
        'Bewerten Sie Ihre eigenen Fähigkeiten in 4 verschiedenen Sportarten oder Tätigkeiten.',
        'Notieren Sie Fragen mit "Kannst du...?"'
      ]
    },
    sectionC: {
      title: 'Mussawi C: Alltagskommunikation',
      focus: 'Sprechen & Dialoge (Vorschläge machen & ablehnen)',
      description: {
        en: 'Propose leisure activities: "Wollen wir...", "Hast du Lust auf...", "Gute Idee!", "Ich habe keine Lust".',
        fa: 'پیشنهاد فعالیت‌های اوقات فراغت: «می‌خواهی...»، «آیا حوصله داری...»، «ایده عالیست!»، «حوصله‌اش را ندارم».',
        tr: 'Boş zaman etkinlikleri önerme ve yanıtlama: "Wollen wir...", "Hast du Lust?", "Gute Idee!"',
        ar: 'اقتراح الأنشطة الترفيهية وقبولها أو رفضها: "هل ترغب في..."، "فكرة رائعة!".',
        es: 'Propón planes de ocio: "¿Quieres que...?", "¿Te apetece...?", "¡Buena idea!"'
      },
      content: 'Hast du Lust auf ein Picknick? - Ja, super Idee! / Tut mir leid, ich habe heute keine Zeit.',
      audioText: 'Wollen wir am Sonntag ins Schwimmbad gehen? - Das geht leider nicht, ich muss lernen.',
      practiceTasks: [
        'Schlagen Sie Ihrem Lernpartner 2 Aktivitäten vor und reagieren Sie auf seine Antwort.',
        'Formulieren Sie eine höfliche Absage mit Begründung.'
      ]
    },
    sectionD: {
      title: 'Mussawi D: Leseverstehen & Text',
      focus: 'Lesen & Textanalyse (Vereinsangebote & Kurspläne)',
      description: {
        en: 'Read club offers and sports center brochures (Sportverein TSV München).',
        fa: 'خواندن آگهی‌های باشگاه‌های ورزشی و بروشورهای تفریحی و ورزشی در آلمان.',
        tr: 'Spor kulübü (Sportverein) ve fitness merkezi ilanlarını inceleme.',
        ar: 'قراءة عروض الأندية الرياضية ومراكز اللياقة البدنية في ألمانيا.',
        es: 'Lectura de folletos de clubes deportivos y programas de actividades.'
      },
      content: 'Flyer vom Sportverein TSV 1860 München e.V.',
      readingText: {
        type: 'Vereinsflyer',
        title: 'Sportverein TSV München - Kursprogramm für alle!',
        body: 'Fußball für Erwachsene: Di & Do 18:30 - 20:00 Uhr | Schwimmkurs für Einsteiger: Sa 10:00 Uhr | Yoga und Fitness: Mo & Mi 19:00 Uhr | Mitgliedsbeitrag: nur 15 € im Monat für Studierende und Sprachkursteilnehmer. Jetzt kostenloses Probetraining vereinbaren!'
      },
      practiceTasks: [
        'An welchen Wochentagen findet das Fußballtraining statt?',
        'Wie viel kostet die Monatsmitgliedschaft für Sprachkursteilnehmer?'
      ]
    },
    sectionE: {
      title: 'Mussawi E: Grammatik & Schreiben',
      focus: 'Grammatik & Schreiben (Das Modalverb "können" & Satzklammer)',
      description: {
        en: 'Master modal verb "können" (ich kann, du kannst, er/sie kann, wir können) and the sentence bracket (Satzklammer).',
        fa: 'تسلط بر فعل کمکی وجهی "können" (توانستن) و قاعده قاب جمله (Satzklammer) با مصدر در انتهای جمله.',
        tr: '"können" modal fiili çekimi ve Satzklammer kuralı (Mastar fiil en sonda).',
        ar: 'إتقان الفعل المساعد "können" (يستطيع) وقاعدة قوس الجملة (Satzklammer) بوضع المصدر في النهاية.',
        es: 'Domina el verbo modal "können" y la estructura de doble verbo con el infinitivo al final.'
      },
      content: 'Modalverbregel: Subjekt + Modalverb (konjugiert an Pos 2) + (...) + Vollverb (Infinitiv am Satzende).',
      grammarSnippet: {
        id: 'a1_lek6_modalverb_koennen',
        level: 'A1.1',
        lektion: 6,
        germanTitle: 'Das Modalverb "können" (Fähigkeit & Möglichkeit)',
        formula: 'S + können (konjugiert an Pos 2) + (...) + *Infinitiv (am Satzende)*',
        explanation: {
          en: 'Modal verbs like "können" occupy the second position and are conjugated. The main verb stays in its infinitive form at the very end of the clause.',
          fa: 'افعال وجهی مانند "können" در جایگاه دوم قرار گرفته و صرف می‌شوند، در حالی که فعل اصلی به صورت مصدر در انتهای جمله قرار می‌گیرد.',
          tr: 'Modal fiil 2. sırada çekimlenir, asıl fiil ise cümlenin tam sonunda mastar halinde durur.',
          ar: 'يُصرف الفعل المساعد في الموقع الثاني، بينما يذهب الفعل الأصلي بصيغة المصدر إلى نهاية الجملة تماماً.',
          es: 'El verbo modal se conjuga en Posición 2 y el verbo principal se desplaza al final en infinitivo.'
        },
        examples: [
          {
            german: 'Sayed kann sehr gut Fußball spielen.',
            formulaBreakdown: 'Sayed (S) + kann (Modalverb Pos 2) + sehr gut Fußball (...) + *spielen (Infinitiv am Satzende)*',
            literalTranslation: {
              en: 'Sayed can very well football play.',
              fa: 'سید می‌تواند بسیار خوب فوتبال بازی کند.',
              tr: 'Sayed çok iyi futbol oynayabilir.',
              ar: 'سيد يستطيع لعب كرة القدم بشكل جيد جداً.',
              es: 'Sayed puede jugar muy bien al fútbol.'
            },
            fluentTranslation: {
              en: 'Sayed can play football very well.',
              fa: 'سید خیلی خوب می‌تواند فوتبال بازی کند.',
              tr: 'Sayed çok iyi futbol oynayabiliyor.',
              ar: 'يستطيع سيد لعب كرة القدم ببراعة.',
              es: 'Sayed sabe jugar muy bien al fútbol.'
            }
          }
        ],
        category: 'modal_verbs'
      },
      practiceTasks: [
        'Konjugieren Sie "können": ich kann, du kannst, er/sie kann, wir können, ihr könnt, sie/Sie können.',
        'Schreiben Sie 3 Sätze über Ihre Fähigkeiten mit dem Modalverb "können".'
      ]
    },
    videoClip: {
      title: 'Video: Picknick und Musik am Isarufer',
      scenario: 'Die Deutschkurs-Gruppe macht Musik und singt ein deutsches Lied zusammen.',
      category: 'alltag',
      duration: '02:40',
      speakers: ['Sayed Bashir', 'Maria'],
      germanTranscript: [
        'Sayed Bashir: Kannst du auch ein Musikinstrument spielen, Maria?',
        'Maria: Ja, ich kann ein bisschen Gitarre spielen. Und du?',
        'Sayed Bashir: Ich kann die afghanische Dambura spielen.',
        'Maria: Wunderbar! Wollen wir zusammen ein Lied spielen?',
        'Sayed Bashir: Sehr gerne, Musik verbindet alle Menschen!'
      ],
      translatedTranscript: [
        {
          en: 'Can you also play a musical instrument, Maria?',
          fa: 'ماریا، آیا تو هم ساز می‌نوازی؟',
          tr: 'Sen de bir müzik aleti çalabiliyor musun, Maria?',
          ar: 'هل تجيدين العزف على آلة موسيقية يا ماريا؟',
          es: '¿Tocas también algún instrumento, María?'
        },
        {
          en: 'Yes, I can play guitar a little bit. And you?',
          fa: 'بله، من کمی گیتار می‌نوازم. تو چطور؟',
          tr: 'Evet, biraz gitar çalabiliyorum. Ya sen?',
          ar: 'نعم، أستطيع العزف على الغيتار قليلاً. وأنت؟',
          es: 'Sí, sé tocar un poco la guitarra. ¿Y tú?'
        },
        {
          en: 'I can play the Afghan Dambura.',
          fa: 'من دمبوره افغانی می‌نوازم.',
          tr: 'Ben Afgan Damburası çalabiliyorum.',
          ar: 'أنا أعزف على آلة الدامبورة الأفغانية.',
          es: 'Yo toco la dambura tradicional afgana.'
        },
        {
          en: 'Wonderful! Shall we play a song together?',
          fa: 'شگفت‌انگیز است! می‌خواهی با هم یک آهنگ بنوازیم؟',
          tr: 'Harika! Birlikte bir şarkı çalalım mı?',
          ar: 'رائع جداً! هل نعزف أغنية معاً؟',
          es: '¡Maravilloso! ¿Tocamos una canción juntos?'
        },
        {
          en: 'With pleasure, music connects all people!',
          fa: 'با کمال میل، موسیقی همه انسان‌ها را به هم پیوند می‌دهد!',
          tr: 'Memnuniyetle, müzik tüm insanları birbirine bağlar!',
          ar: 'بكل سرور، الموسيقى تجمع بين كل الشعوب!',
          es: '¡Con mucho gusto, la música une a todas las personas!'
        }
      ]
    },
    exercises: [
      {
        id: 'ex_a1_6_1',
        type: 'multiple_choice',
        instruction: {
          en: 'Select the correct conjugation of the modal verb "können".',
          fa: 'صرف صحیح فعل کمکی "können" را برای ضمیر "du" انتخاب نمایید.',
          tr: '"du" zamiri için "können" modal fiilinin doğru çekimini seçiniz.',
          ar: 'اختر تصريف الفعل المساعد "können" المناسب للضمير "du".',
          es: 'Elige la forma correcta del verbo modal "können" para "du".'
        },
        prompt: '_____ du am Samstag mit zum Fußball kommen?',
        options: ['Kannst', 'Können', 'Kann', 'Könnt'],
        correctAnswer: 'Kannst',
        explanation: {
          en: 'The modal verb "können" conjugates irregularly in singular: ich kann, du kannst, er/sie kann.',
          fa: 'فعل کمکی "können" در حالت مفرد بی‌قاعده صرف می‌شود: ich kann, du kannst, er/sie kann.',
          tr: '"können" modal fiili 2. tekil şahısta "kannst" olur: du kannst.',
          ar: 'يُصرف الفعل المساعد "können" مع الضمير "du" إلى "kannst".',
          es: 'Para el pronombre "du", la conjugación del modal "können" es "kannst".'
        }
      },
      {
        id: 'ex_a1_6_2',
        type: 'sentence_reorder',
        instruction: {
          en: 'Reorder into a correct modal verb sentence (Infinitive at the end).',
          fa: 'کلمات را مرتب کنید تا جمله صحیح با فعل کمکی ساخته شود (مصدر در انتها).',
          tr: 'Modal fiilli ve mastarın en sonda olduğu cümleyi oluşturun.',
          ar: 'رتب الكلمات لتكوين جملة بفعل مساعد مع المصدر في نهاية الجملة.',
          es: 'Ordena la frase colocando el infinitivo en la última posición.'
        },
        prompt: 'Reorder the blocks:',
        options: ['Wir', 'im', 'Englischen', 'Garten', 'können', 'spazieren', 'gehen.'],
        correctAnswer: 'Wir können im Englischen Garten spazieren gehen.',
        explanation: {
          en: 'Subject (Wir) + conjugated modal (können) in Position 2 + local phrase + double infinitive at sentence end.',
          fa: 'فاعل (Wir) + فعل وجهی صرف‌شده (können) در جایگاه ۲ + متمم مکان + مصدر در انتهای جمله.',
          tr: 'Özne (Wir) + modal fiil (können) 2. sırada + yer tümleci + mastar fiil tam sonda.',
          ar: 'الفاعل (Wir) + الفعل المساعد (können) في الموقع 2 + شبه الجملة + المصدر في النهاية.',
          es: 'Sujeto + modal conjugado en Posición 2 + complemento + infinitivo al final.'
        }
      }
    ]
  },
  {
    id: 'a1_1_lek7',
    lektionNumber: 7,
    level: 'A1.1',
    title: 'Lernen, Ausbildung und Berufswelt',
    subTitle: 'Sprachen lernen, Schule und die Modalverben "wollen" & "müssen" (Lektion )',
    topic: 'Schule, Ausbildungsberufe, Lernstrategien und Notwendigkeiten/Wünsche mit "müssen" und "wollen"',
    fotoHoergeschichte: {
      title: 'Foto-Hörgeschichte: Die Bildungsberatung bei der Agentur für Arbeit',
      imagePrompt: 'An official consultation office at the German employment agency where Sayed meets with a career advisor Herr Becker discussing apprenticeships and certificate recognitions.',
      imageTheme: 'Berufsberatung in Deutschland',
      audioDuration: '02:50',
      transcript: [
        { speaker: 'Herr Becker (Berater)', text: 'Guten Tag, Herr Bashir! Wie kann ich Ihnen bei Ihrer beruflichen Planung helfen?' },
        { speaker: 'Sayed Bashir', text: 'Guten Tag! Ich möchte in Deutschland eine Ausbildung als Fachinformatiker machen.' },
        { speaker: 'Herr Becker', text: 'Das ist ein zukunftssicherer Beruf. Dafür müssen Sie zuerst das Sprachzertifikat B2 erreichen.' },
        { speaker: 'Sayed Bashir', text: 'Ich lerne jeden Tag sehr fleißig Deutsch und will im Sommer die Prüfung ablegen.' },
        { speaker: 'Herr Becker', text: 'Sehr vorbildlich! Wir können auch Ihre Zeugnisse aus Afghanistan offiziell anerkennen lassen.' }
      ],
      summary: {
        en: 'Sayed attends a vocational counseling session at the Employment Agency to plan his IT apprenticeship and diploma recognition.',
        fa: 'سید در جلسه مشاوره شغلی اداره کار شرکت می‌کند تا برای دوره کارآموزی تخصصی فناوری اطلاعات و معادل‌سازی مدارک خود برنامه‌ریزی کند.',
        tr: 'Sayed İş Ajansı\'nda (Agentur für Arbeit) mesleki danışmanlık alır ve bilişim uzmanlığı meslek eğitimi (Ausbildung) için yol haritası çizer.',
        ar: 'يحضر سيد جلسة استشارة مهنية في وكالة العمل للتخطيط لتدريبه المهني في تكنولوجيا المعلومات ومعادلة شهاداته.',
        es: 'Sayed asiste a una sesión de asesoramiento laboral en la Agencia de Empleo para planificar su formación profesional en informática.'
      }
    },
    sectionA: {
      title: 'Mussawi A: Sprechen & Dialog',
      focus: 'Sprechen & Hören (Das Bildungssystem & Ausbildungsberufe)',
      description: {
        en: 'Learn about the German dual education system: die Ausbildung, die Berufsschule, die Universität, das Praktikum.',
        fa: 'آشنایی با نظام آموزش فنی و حرفه‌ای آلمان (دوال): کارآموزی، مدرسه فنی، دانشگاه و دوره‌های کارورزی.',
        tr: 'Alman ikili meslek eğitimi sistemini (duales System), meslek okullarını ve staj imkanlarını tanıyın.',
        ar: 'التعرف على نظام التعليم والتدريب المهني المزدوج في ألمانيا (Ausbildung) والجامعات والتدريب العملي.',
        es: 'Conoce el sistema educativo y de formación profesional dual alemán: Ausbildung, Berufsschule, Praktikum.'
      },
      content: 'Die Ausbildung machen, an der Universität studieren, ein Praktikum absolvieren, Prüfungen bestehen.',
      audioText: 'In Deutschland dauert eine duale Ausbildung meistens drei Jahre. Man lernt im Betrieb und in der Berufsschule.',
      practiceTasks: [
        'Erläutern Sie den Unterschied zwischen Studium und Ausbildung.',
        'Welchen Beruf möchten Sie in Deutschland ausüben?'
      ]
    },
    sectionB: {
      title: 'Mussawi B: Wortschatz & Hören',
      focus: 'Hören & Wortschatz (Lernstrategien & Sprachenlernen)',
      description: {
        en: 'Effective learning methods: Vokabeln wiederholen, Podcasts hören, Texte laut vorlesen, Grammatikregeln üben.',
        fa: 'راهکارهای موثر یادگیری زبان: تکرار واژگان، گوش دادن به پادکست‌ها، خواندن متون با صدای بلند، تمرین قواعد دستوری.',
        tr: 'Etkili dil öğrenme teknikleri: kelime tekrarı, podcast dinleme, sesli okuma, gramer alıştırmaları.',
        ar: 'استراتيجيات التعلم الفعالة: تكرار المفردات، الاستماع للبودكاست، القراءة بصوت عالٍ، ممارسة القواعد.',
        es: 'Estrategias de aprendizaje: repetición de vocabulario, podcasts, lectura en voz alta y práctica gramatical.'
      },
      content: 'Wie lernst du am besten? - Ich lerne am besten, wenn ich deutsche Lieder höre und Karteikarten benutze.',
      audioText: 'Tipp von Frau Weber: Schreiben Sie neue Wörter immer zusammen mit dem Artikel und dem Beispielsatz auf!',
      practiceTasks: [
        'Erstellen Sie 5 digitale Lernkarten für schwierige Wörter.',
        'Berichten Sie Ihrem Partner: "Ich lerne Deutsch, weil ich..."'
      ]
    },
    sectionC: {
      title: 'Mussawi C: Alltagskommunikation',
      focus: 'Sprechen & Dialoge (Wünsche & Pflichten äußern)',
      description: {
        en: 'Express intentions and obligations: "Ich will...", "Ich muss heute noch...", "Musst du am Wochenende arbeiten?"',
        fa: 'بیان خواسته‌ها و الزام‌ها: «من می‌خواهم...»، «من باید امروز هنوز...»، «آیا باید آخر هفته کار کنی؟».',
        tr: 'İstek ve zorunlulukları ifade etme: "Ich will...", "Ich muss...", "Musst du arbeiten?"',
        ar: 'التعبير عن الرغبات والالتزامات: "أريد أن..."، "يجب علي اليوم أن...".',
        es: 'Expresa deseos y obligaciones: "Ich will...", "Ich muss...", "¿Tienes que trabajar el fin de semana?"'
      },
      content: 'Ich will die Prüfung bestehen. Deshalb muss ich jeden Abend zwei Stunden Grammatik üben.',
      audioText: 'Musst du morgen früh aufstehen? - Ja, leider. Ich muss um sieben Uhr bei der Arbeit sein.',
      practiceTasks: [
        'Nennen Sie 3 Dinge, die Sie heute noch tun müssen.',
        'Nennen Sie 2 Ziele, die Sie in diesem Jahr erreichen wollen.'
      ]
    },
    sectionD: {
      title: 'Mussawi D: Leseverstehen & Text',
      focus: 'Lesen & Textanalyse (Prüfungsordnung & Zeugnisse)',
      description: {
        en: 'Read official course requirements and exam descriptions for the Goethe-Zertifikat A1.',
        fa: 'خواندن دستورالعمل رسمی آزمون و شرایط قبولی در آزمون گوته و تلک سطح A1.',
        tr: 'A1 dil sınavı yönergelerini ve resmi sınav bölümlerini (Hören, Lesen, Schreiben, Sprechen) anlama.',
        ar: 'قراءة إرشادات وتعليمات امتحان شهادة معهد غوته للمستوى A1.',
        es: 'Lectura de las directrices y estructura del examen oficial Goethe-Zertifikat A1.'
      },
      content: 'Offizielle Prüfungsbeschreibung: Goethe-Zertifikat A1 / Start Deutsch 1.',
      readingText: {
        type: 'Prüfungsordnung',
        title: 'Goethe-Institut München - Prüfungsinformationen Start Deutsch 1',
        body: 'Die Prüfung A1 besteht aus vier Teilen: 1. Hören (ca. 20 Min., 15 Punkte) | 2. Lesen (ca. 25 Min., 15 Punkte) | 3. Schreiben (ca. 20 Min., 15 Punkte - Formular ausfüllen und kurze E-Mail) | 4. Sprechen (ca. 15 Min., 15 Punkte - Vorstellen und Bitten formulieren). Die Prüfung ist bestanden, wenn mindestens 60 von 100 Punkten erreicht werden.'
      },
      practiceTasks: [
        'Wie viele Prüfungsteile gibt es bei der A1-Prüfung?',
        'Wie viele Punkte benötigt man mindestens zum Bestehen der Prüfung?'
      ]
    },
    sectionE: {
      title: 'Mussawi E: Grammatik & Schreiben',
      focus: 'Grammatik & Schreiben (Die Modalverben "wollen" & "müssen")',
      description: {
        en: 'Conjugate and deploy modal verbs "wollen" (intention/will) and "müssen" (necessity/obligation).',
        fa: 'صرف و کاربرد افعال کمکی وجهی "wollen" (اراده و تمایل) و "müssen" (اجبار و ضرورت قانونی یا شخصی).',
        tr: '"wollen" (istemek) ve "müssen" (zorunda olmak) modal fiillerinin çekimleri ve kullanımı.',
        ar: 'تصريف واستخدام الفعلين المساعدين "wollen" (يريد) و "müssen" (يجب/يلزم).',
        es: 'Conjuga y utiliza los verbos modales "wollen" (querer) y "müssen" (tener que/deber).'
      },
      content: 'Modalverben im Präsens: Vokalwechsel bei müssen (ich muss, du musst, er muss). wollen (ich will, du willst, er will).',
      grammarSnippet: {
        id: 'a1_lek7_modalverben',
        level: 'A1.1',
        lektion: 7,
        germanTitle: 'Die Modalverben "wollen" und "müssen"',
        formula: 'S + wollen/müssen (konjugiert an Pos 2) + (...) + *Infinitiv (am Satzende)*',
        explanation: {
          en: 'Note that the 1st and 3rd person singular forms of modal verbs have identical forms without "-t" ending: ich muss / er muss; ich will / er will.',
          fa: 'توجه داشته باشید که اول شخص و سوم شخص مفرد افعال وجهی دقیقاً یکسان هستند و پسوند "-t" سوم شخص را دریافت نمی‌کنند: ich muss / er muss؛ ich will / er will.',
          tr: 'Modal fiillerde 1. ve 3. tekil şahıslar daima aynıdır: ich muss / er muss; ich will / er will.',
          ar: 'تتطابق صيغة المتكلم المفرد مع صيغة الغائب المفرد في الأفعال المساعدة: ich muss / er muss و ich will / er will.',
          es: 'En los verbos modales, la primera y la tercera persona del singular son idénticas y no llevan la terminación "-t": ich muss / er muss.'
        },
        examples: [
          {
            german: 'Sayed will in München eine Ausbildung machen und muss fleißig Deutsch lernen.',
            formulaBreakdown: 'Sayed (S) + will (Modal Pos 2) + (...) + machen (Infinitiv) | muss (Modal Pos 2) + (...) + lernen (Infinitiv)',
            literalTranslation: {
              en: 'Sayed wants in Munich an apprenticeship to make and must diligently German learn.',
              fa: 'سید می‌خواهد در مونیخ کارآموزی انجام دهد و باید با پشتکار آلمانی یاد بگیرد.',
              tr: 'Sayed Münih\'te meslek eğitimi yapmak istiyor ve gayretle Almanca öğrenmek zorunda.',
              ar: 'يريد سيد القيام بتدريب مهني في ميونيخ ويجب عليه تعلم الألمانية بجد.',
              es: 'Sayed quiere hacer una formación profesional en Múnich y tiene que aprender alemán con constancia.'
            },
            fluentTranslation: {
              en: 'Sayed wants to do an apprenticeship in Munich and has to study German diligently.',
              fa: 'سید می‌خواهد در مونیخ دوره کارآموزی بگذراند و باید با تلاش فراوان آلمانی یاد بگیرد.',
              tr: 'Sayed Münih\'te bir meslek eğitimi yapmak istiyor ve çok çalışarak Almanca öğrenmek zorunda.',
              ar: 'يريد سيد خوض تدريب مهني في ميونيخ وعليه دراسة الألمانية باجتهاد.',
              es: 'Sayed quiere hacer una formación profesional en Múnich y tiene que estudiar alemán con dedicación.'
            }
          }
        ],
        category: 'modal_verbs'
      },
      practiceTasks: [
        'Konjugieren Sie "wollen" und "müssen" für alle Personalpronomen.',
        'Schreiben Sie 3 Sätze: Was wollen Sie lernen und was müssen Sie heute noch erledigen?'
      ]
    },
    videoClip: {
      title: 'Video: Vorbereitung auf die A1-Prüfung',
      scenario: 'Frau Weber gibt der Lerngruppe letzte Tipps für die mündliche Prüfung und alle feiern den Kursabschluss.',
      category: 'alltag',
      duration: '03:10',
      speakers: ['Frau Weber', 'Sayed Bashir'],
      germanTranscript: [
        'Frau Weber: Liebe Teilnehmer, Sie haben das Niveau A1.1 erfolgreich abgeschlossen!',
        'Sayed Bashir: Frau Weber, haben Sie noch einen Tipp für die mündliche Prüfung?',
        'Frau Weber: Bleiben Sie ganz ruhig! Sprechen Sie laut, klar und bitten Sie bei Unklarheiten um Wiederholung.',
        'Sayed Bashir: Vielen Dank für Ihre tolle Unterstützung!',
        'Frau Weber: Herzlichen Glückwunsch an alle und weiterhin viel Erfolg auf Niveau A1.2!'
      ],
      translatedTranscript: [
        {
          en: 'Dear participants, you have successfully completed level A1.1!',
          fa: 'دانشجویان گرامی، شما با موفقیت سطح A1.1 را به پایان رساندید!',
          tr: 'Değerli katılımcılar, A1.1 seviyesini başarıyla tamamladınız!',
          ar: 'أعزائي المشاركين، لقد أتممتم بنجاح المستوى A1.1!',
          es: '¡Estimados participantes, han completado con éxito el nivel A1.1!'
        },
        {
          en: 'Frau Weber, do you have one last tip for the oral examination?',
          fa: 'خانم وبر، آیا نکته پایانی برای بخش آزمون شفاهی دارید؟',
          tr: 'Bayan Weber, sözlü sınav için son bir tavsiyeniz var mı?',
          ar: 'أستاذة فيبر، هل لديك نصيحة أخيرة للاختبار الشفوي؟',
          es: 'Frau Weber, ¿tiene algún último consejo para el examen oral?'
        },
        {
          en: 'Stay calm! Speak loudly, clearly, and ask for repetition if anything is unclear.',
          fa: 'کاملاً خونسرد باشید! بلند و واضح صحبت کنید و در صورت ابهام بخواهید تکرار کنند.',
          tr: 'Sakin kalın! Yüksek sesle, net konuşun ve anlamadığınızda tekrarını rica edin.',
          ar: 'حافظوا على هدوئكم! تحدثوا بوضوح واطلبوا الإعادة عند عدم الفهم.',
          es: '¡Mantengan la calma! Hablen alto, claro y pidan que les repitan si no entienden algo.'
        },
        {
          en: 'Thank you very much for your great support!',
          fa: 'از حمایت‌ها و تدریس فوق‌العاده شما بی‌نهایت سپاسگزاریم!',
          tr: 'Harika desteğiniz için çok teşekkür ederiz!',
          ar: 'شكراً جزيلاً لك على دعمك الرائع!',
          es: '¡Muchísimas gracias por su gran apoyo y dedicación!'
        },
        {
          en: 'Congratulations to everyone, and continued success in level A1.2!',
          fa: 'به همگی تبریک می‌گویم و برایتان در سطح A1.2 آرزوی موفقیت روزافزون دارم!',
          tr: 'Hepinize tebrikler ve A1.2 seviyesinde başarılar dilerim!',
          ar: 'تهانينا للجميع ومزيداً من التوفيق والنجاح في المستوى A1.2!',
          es: '¡Enhorabuena a todos y mucho éxito en el nivel A1.2!'
        }
      ]
    },
    exercises: [
      {
        id: 'ex_a1_7_1',
        type: 'multiple_choice',
        instruction: {
          en: 'Select the correct conjugation of "müssen" for third person singular (er/sie).',
          fa: 'صرف صحیح فعل "müssen" را برای سوم شخص مفرد (او) انتخاب کنید.',
          tr: '"er/sie" zamiri için "müssen" modal fiilinin doğru çekimini seçiniz.',
          ar: 'اختر تصريف الفعل "müssen" المناسب للغائب المفرد (er/sie).',
          es: 'Selecciona la forma correcta de "müssen" para la tercera persona del singular.'
        },
        prompt: 'Sayed _____ heute für die Sprachprüfung lernen.',
        options: ['muss', 'müsst', 'müssen', 'musst'],
        correctAnswer: 'muss',
        explanation: {
          en: 'In German, the third person singular form of modal verbs lacks the "-t" ending and drops the umlaut: er muss.',
          fa: 'در زبان آلمانی، سوم شخص مفرد افعال وجهی پسوند "-t" نگرفته و اوملاوت را از دست می‌دهد: er muss.',
          tr: 'Modal fiillerde 3. tekil şahısta umlaut kalkar ve "-t" eki gelmez: er muss.',
          ar: 'في الأفعال المساعدة مع الغائب المفرد، تسقط نقطتا الإمالة ولا تضاف اللاحقة "-t": er muss.',
          es: 'En los verbos modales, la tercera persona del singular pierde la diéresis y no añade "-t": er muss.'
        }
      },
      {
        id: 'ex_a1_7_2',
        type: 'sentence_reorder',
        instruction: {
          en: 'Reorder the sentence with modal verb "wollen".',
          fa: 'جمله را با فعل کمکی "wollen" مرتب نمایید.',
          tr: '"wollen" modal fiili ile düzgün bir cümle oluşturun.',
          ar: 'رتب الجملة باستخدام الفعل المساعد "wollen".',
          es: 'Ordena la oración con el verbo modal "wollen".'
        },
        prompt: 'Arrange into a correct sentence:',
        options: ['Ich', 'will', 'in', 'Deutschland', 'Informatik', 'studieren.'],
        correctAnswer: 'Ich will in Deutschland Informatik studieren.',
        explanation: {
          en: 'Subject (Ich) + conjugated modal (will) in Position 2 + complements + main verb infinitive (studieren) at sentence end.',
          fa: 'فاعل (Ich) + فعل وجهی صرف‌شده (will) در جایگاه ۲ + متمم‌ها + مصدر فعل اصلی (studieren) در انتهای جمله.',
          tr: 'Özne (Ich) + modal fiil (will) 2. sırada + tümleçler + mastar fiil (studieren) tam sonda.',
          ar: 'الفاعل (Ich) + الفعل المساعد المصرف (will) في الموقع 2 + المصدر (studieren) في نهاية الجملة.',
          es: 'Sujeto + modal conjugado en Posición 2 + complementos + infinitivo al final de la frase.'
        }
      }
    ]
  }
];
