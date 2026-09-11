import { Lesson } from '../types';

export const CURRICULUM_B1_1: Lesson[] = [
  {
    id: 'b1_1_lek1',
    lektionNumber: 1,
    level: 'B1.1',
    title: 'Wohnen und Leben in Deutschland',
    subTitle: 'Mietrecht, Nachbarschaft und Nebensätze mit "obwohl" & "weil" (Deutsch Mussawi B1.1 Lektion 1)',
    topic: 'Wohnungssuche, Kaution, Hausordnung und komplexe Nebensätze',
    fotoHoergeschichte: {
      title: 'Foto-Hörgeschichte: Der Mietvertrag und die Wohnungsübergabe in Stuttgart',
      imagePrompt: 'A German landlord handing over apartment keys to a young tenant during an official protocol inspection in Stuttgart.',
      imageTheme: 'Wohnungsübergabe in Stuttgart',
      audioDuration: '02:50',
      transcript: [
        { speaker: 'Herr Fischer (Vermieter)', text: 'Guten Tag, Herr Bashir! Bevor wir die Schlüssel übergeben, füllen wir das Übergabeprotokoll aus.' },
        { speaker: 'Sayed Bashir', text: 'Sehr gerne. Ich habe auch die Bestätigung über die überwiesene Kaution mitgebracht.' },
        { speaker: 'Herr Fischer', text: 'Ausgezeichnet. Hier im Flur ist ein kleiner Kratzer im Parkettboden, den halte ich schriftlich fest.' },
        { speaker: 'Sayed Bashir', text: 'Gut, dass Sie so gründlich sind. Wie ist das mit der Mülltrennung hier im Haus geregelt?' },
        { speaker: 'Herr Fischer', text: 'In unserer Hausordnung steht genau beschrieben, wie Bio-, Papier- und Restmüll getrennt werden.' }
      ],
      summary: {
        en: 'Sayed moves into his new apartment in Stuttgart and conducts a thorough handover inspection with the landlord.',
        fa: 'سید به آپارتمان جدید خود در اشتوتگارت نقل مکان می‌کند و پروتکل تحویل کلید را با صاحب‌خانه تنظیم می‌نماید.',
        tr: 'Sayed Stuttgart\'taki yeni dairesine taşınır ve ev sahibiyle birlikte teslim tutanağını doldurur.',
        ar: 'ينتقل سيد إلى شقته الجديدة في شتوتغارت ويجري معاينة تسليم مفصلة مع مالك العقار.',
        es: 'Sayed se traslada a su nuevo apartamento en Stuttgart y realiza el protocolo de entrega con el arrendador.'
      }
    },
    sectionA: {
      title: 'Mussawi A: Sprechen & Dialog',
      focus: 'Sprechen & Hören (Wohnungssuche & Makler)',
      description: {
        en: 'Discuss housing market requirements, cold/warm rent, security deposit, and utilities.',
        fa: 'گفتگو درباره شرایط بازار مسکن در آلمان، اجاره خالص/ناخالص، ودیعه و هزینه‌های آب و برق و گرمایش.',
        tr: 'Almanya konut piyasası koşulları, aidat, depozito ve ısıtma giderleri hakkında konuşma.',
        ar: 'مناقشة متطلبات سوق الإسكان، الإيجار الصافي والإجمالي، ومبلغ التأمين وتكاليف الخدمات.',
        es: 'Debate sobre el mercado del alquiler, fianza, gastos de comunidad y suministros.'
      },
      content: 'Die Warmmiete beträgt 850 Euro inklusive Nebenkosten und Heizung. Strom muss separat angemeldet werden.',
      audioText: 'Herr Bashir, bitte überweisen Sie die Kaution in drei gleichen Monatsraten auf das Kautionskonto.',
      practiceTasks: [
        'Erklären Sie den Unterschied zwischen Kaltmiete und Warmmiete.',
        'Notieren Sie 3 wichtige Punkte beim Übergabeprotokoll.'
      ]
    },
    sectionB: {
      title: 'Mussawi B: Wortschatz & Hören',
      focus: 'Hören & Wortschatz (Hausordnung & Mülltrennung)',
      description: {
        en: 'Rules in German apartment blocks: Ruhezeiten (22:00 - 06:00), Kehrwoche, gelbe Tonne, Papiertonne, Biomüll.',
        fa: 'قوانین آپارتمان‌نشینی در آلمان: ساعات سکوت شبانه، نوبت نظافت راه‌پله (Kehrwoche)، سطل زرد، کارتن و کاغذ، پسماند زیستی.',
        tr: 'Apartman kuralları: gece sessizlik saatleri, merdiven temizlik nöbeti (Kehrwoche), çöp kutusu renkleri.',
        ar: 'قواعد السكن المشترك: ساعات الهدوء الليلي، مناوبة تنظيف الدرج، ألوان حاويات فرز القمامة.',
        es: 'Normas de la comunidad de vecinos: horas de silencio, turno de limpieza (Kehrwoche) y separación de residuos.'
      },
      content: 'In Deutschland wird Müll streng getrennt: Plastik in die gelbe Tonne, Papier in die blaue Tonne und Restmüll in die schwarze Tonne.',
      audioText: 'Bitte beachten Sie die Mittagsruhe und die Nachtruhe ab zweiundzwanzig Uhr im Haus.',
      practiceTasks: [
        'Ordnen Sie 5 Abfallarten den richtigen Tonnenfarben zu.',
        'Welche Ruhezeiten gelten in Ihrem Bundesland?'
      ]
    },
    sectionC: {
      title: 'Mussawi C: Alltagskommunikation',
      focus: 'Sprechen & Dialoge (Konfliktlösung mit Nachbarn)',
      description: {
        en: 'Polite conflict resolution: "Es tut mir leid, wenn es zu laut war", "Könnten Sie bitte die Musik etwas leiser drehen?"',
        fa: 'حل مسالمت‌آمیز سوءتفاهم‌ها با همسایگان: «متاسفم اگر سروصدا زیاد بود»، «ممکن است لطفاً صدای موسیقی را کم کنید؟».',
        tr: 'Komşularla nazik problem çözme: "Müziğin sesini biraz kısabilir misiniz?", "Gürültü için özür dilerim."',
        ar: 'حل النزاعات مع الجيران بأسلوب لبق: "هل يمكنك خفض صوت الموسيقى قليلاً من فضلك؟"، "أعتذر عن الإزعاج".',
        es: 'Resolución asertiva de conflictos vecinales: pedir que bajen el volumen y disculparse amablemente.'
      },
      content: 'Entschuldigen Sie bitte die Störung, aber Ihr Fernseher ist spät am Abend noch sehr laut.',
      audioText: 'Oh, das habe ich gar nicht bemerkt! Ich mache ihn sofort leiser. Entschuldigung!',
      practiceTasks: [
        'Spielen Sie ein diplomatisches Gespräch über Lärmbelästigung.',
        'Schreiben Sie eine Entschuldigungsnotiz an die Nachbarn.'
      ]
    },
    sectionD: {
      title: 'Mussawi D: Leseverstehen & Text',
      focus: 'Lesen & Textanalyse (Behördenpost & Wohnsitzanmeldung)',
      description: {
        en: 'Read official letters from Bürgeramt / Einwohnermeldeamt regarding city registration (Anmeldung).',
        fa: 'خواندن نامه‌های رسمی اداره ثبت احوال و شهروندی (Bürgeramt) درباره ثبت آدرس مسکونی (Anmeldung).',
        tr: 'İkametgah kaydı (Anmeldung) ve Nüfus Müdürlüğü (Bürgeramt) resmi yazılarını okuma.',
        ar: 'قراءة المراسلات الرسمية من مكتب شؤون المواطنين (Bürgeramt) بشأن تسجيل عنوان السكن (Anmeldung).',
        es: 'Lectura de notificaciones oficiales del padrón municipal (Bürgeramt) sobre el empadronamiento (Anmeldung).'
      },
      content: 'Merkblatt zur Anmeldung einer Wohnung beim Bürgeramt.',
      readingText: {
        type: 'Behördeninformation',
        title: 'Bürgeramt Stuttgart - Merkblatt zur Wohnsitzanmeldung (§ 17 BMG)',
        body: 'Wer eine Wohnung bezieht, hat sich innerhalb von zwei Wochen nach dem Einzug bei der Meldebehörde anzumelden. Zur Anmeldung sind folgende Unterlagen mitzubringen: 1. Personalausweis oder Nationalpass, 2. Vom Vermieter ausgefüllte und unterschriebene Wohnungsgeberbestätigung. Eine Anmeldung ohne Wohnungsgeberbestätigung ist gesetzlich nicht zulässig.'
      },
      practiceTasks: [
        'Innerhalb welcher Frist muss die Wohnsitzanmeldung nach dem Einzug erfolgen?',
        'Welches Dokument muss zwingend vom Vermieter unterschrieben vorliegen?'
      ]
    },
    sectionE: {
      title: 'Mussawi E: Grammatik & Schreiben',
      focus: 'Grammatik & Schreiben (Kausale & Konzessive Nebensätze: weil & obwohl)',
      description: {
        en: 'Master subordinate conjunctions "weil" (cause/reason) and "obwohl" (concession) with verb at the end.',
        fa: 'تسلط بر حروف ربط جملات پیرو: "weil" (علت و دلیل) و "obwohl" (با وجود اینکه/اگرچه) همراه با انتقال فعل به انتهای جمله.',
        tr: '"weil" (çünkü) ve "obwohl" (rağmen/-e karşın) yan cümle bağlaçları ve fiilin sonda yer alması kuralı.',
        ar: 'إتقان أدوات ربط الجمل الفرعية: "weil" (لأن) و "obwohl" (على الرغم من أن) مع تمركز الفعل المصرف في النهاية.',
        es: 'Domina las conjunciones subordinadas causales "weil" y concesivas "obwohl" con el verbo al final.'
      },
      content: 'Regel: Hauptsatz + weil / obwohl + Subjekt + (...) + *Verb (konjugiert am Satzende)*.',
      grammarSnippet: {
        id: 'b1_lek1_weil_obwohl',
        level: 'B1.1',
        lektion: 1,
        germanTitle: 'Nebensätze mit "weil" (Grund) und "obwohl" (Gegengrund)',
        formula: 'Hauptsatz, weil / obwohl + Subjekt + Ergänzung + *konjugiertes Verb (am Ende)*',
        explanation: {
          en: '"Weil" answers "Warum?" and states a cause. "Obwohl" introduces an unexpected contrast. In both subordinate clauses, the conjugated verb is pushed to the absolute end.',
          fa: '"Weil" به پرسش "چرا؟" پاسخ می‌دهد و علت را بیان می‌کند. "Obwohl" تضاد غیرمنتظره و امتیاز را می‌آورد. در هر دو حالت، فعل صرف‌شده به انتهای جمله فرستاده می‌شود.',
          tr: '"weil" sebep bildirir; "obwohl" beklenmedik bir zıtlık anlatır. Her ikisinde de çekimli fiil cümlenin en sonuna gider.',
          ar: 'تجيب "weil" عن سؤال "لماذا؟" وتوضح السبب، بينما تقدم "obwohl" تناقضاً غير متوقع. وفي كلتا الحالتين يوضع الفعل المصرف في آخر الجملة.',
          es: '"Weil" expresa la causa ("por qué"); "obwohl" introduce una concesión inesperada ("a pesar de que"). En ambas el verbo conjugado va al final.'
        },
        examples: [
          {
            german: 'Sayed hat die Wohnung gemietet, obwohl die Miete etwas hoch war, weil die Lage perfekt ist.',
            formulaBreakdown: 'gemietet (HS) + obwohl die Miete hoch war (NS Verb am Ende) + weil die Lage perfekt ist (NS Verb am Ende)',
            literalTranslation: {
              en: 'Sayed has the apartment rented, although the rent slightly high was, because the location perfect is.',
              fa: 'سید آپارتمان را اجاره کرده است، با اینکه اجاره کمی بالا بود، چون موقعیت مکانی عالی است.',
              tr: 'Sayed kirası biraz yüksek olmasına rağmen, konumu mükemmel olduğu için daireyi kiraladı.',
              ar: 'استأجر سيد الشقة على الرغم من أن إيجارها كان مرتفعاً قليلاً، لأن موقعها مثالي.',
              es: 'Sayed alquiló el piso a pesar de que el alquiler era algo alto, porque la ubicación es perfecta.'
            },
            fluentTranslation: {
              en: 'Sayed rented the apartment although the rent was somewhat high, because the location is perfect.',
              fa: 'سید آپارتمان را با وجود اینکه اجاره‌اش کمی بالا بود اجاره کرد، زیرا موقعیت مکانی آن بی‌نظیر است.',
              tr: 'Sayed, kirası biraz yüksek olmasına rağmen konumu harika olduğu için evi kiraladı.',
              ar: 'استأجر سيد الشقة على الرغم من ارتفاع إيجارها نوعاً ما، لأن موقعها ممتاز.',
              es: 'Sayed alquiló el apartamento aunque el alquiler era algo elevado, porque la ubicación es perfecta.'
            }
          }
        ],
        category: 'clauses'
      },
      practiceTasks: [
        'Verbinden Sie die Sätze mit "weil": Er lernt Deutsch. Er möchte in Deutschland arbeiten.',
        'Verbinden Sie die Sätze mit "obwohl": Es regnet in Strömen. Wir gehen im Wald spazieren.'
      ]
    },
    videoClip: {
      title: 'Video: Der Nachbarschaftskaffee im Garten',
      scenario: 'Die Nachbarn des Hauses treffen sich im Gemeinschaftsgarten zum Kennenlernen und Kaffee trinken.',
      category: 'alltag',
      duration: '02:50',
      speakers: ['Frau Weber', 'Sayed Bashir'],
      germanTranscript: [
        'Frau Weber: Schön, dass Sie alle gekommen sind!',
        'Frau Weber: Herr Bashir, probieren Sie bitte diesen selbstgebackenen Apfelkuchen.',
        'Sayed Bashir: Sehr gerne, Frau Weber! Der Kuchen schmeckt hervorragend.',
        'Frau Weber: Wenn Sie mal Hilfe mit Werkzeug oder Gartenarbeit brauchen, sagen Sie einfach Bescheid.',
        'Sayed Bashir: Vielen herzlichen Dank! Es ist schön, so nette Nachbarn zu haben.'
      ],
      translatedTranscript: [
        {
          en: 'So nice that you all came!',
          fa: 'بسیار عالی که همه شما تشریف آوردید!',
          tr: 'Hepinizin gelmiş olması ne kadar güzel!',
          ar: 'من الرائع جداً أنكم حضرتم جميعاً!',
          es: '¡Qué bien que hayáis venido todos!'
        },
        {
          en: 'Herr Bashir, please try this homemade apple cake.',
          fa: 'آقای بشیر، لطفاً از این کیک سیب خانگی میل بفرمایید.',
          tr: 'Sayed Bey, lütfen bu ev yapımı elmalı keki deneyiniz.',
          ar: 'سيد بشير، تفضل بتذوق كعكة التفاح المصنوعة منزلياً هذه.',
          es: 'Señor Bashir, por favor pruebe este pastel de manzana casero.'
        },
        {
          en: 'Gladly, Frau Weber! The cake tastes outstanding.',
          fa: 'با کمال میل، خانم وبر! طعم کیک واقعاً بی‌نظیر و عالی است.',
          tr: 'Memnuniyetle, Bayan Weber! Kek gerçekten harika olmuş.',
          ar: 'بكل سرور يا سيدة فيبر! طعم الكعكة ممتاز ولذيذ للغاية.',
          es: '¡Con mucho gusto, señora Weber! El pastel está exquisito.'
        },
        {
          en: 'If you ever need help with tools or gardening, just let us know.',
          fa: 'اگر زمانی به ابزار فنی یا کمک در کارهای باغچه نیاز داشتید، فقط به ما اطلاع دهید.',
          tr: 'Alet edevat ya da bahçe işlerinde yardıma ihtiyacınız olursa bize haber vermeniz yeterli.',
          ar: 'إذا احتجت يوماً إلى أدوات أو مساعدة في الحديقة، فقط أخبرنا.',
          es: 'Si alguna vez necesitas herramientas o ayuda con el jardín, no dudes en avisarnos.'
        },
        {
          en: 'Thank you very much! It is wonderful to have such kind neighbors.',
          fa: 'بسیار متشکرم! داشتن چنین همسایگان مهربانی واقعاً نعمتی بزرگ است.',
          tr: 'Çok teşekkür ederim! Böyle iyi komşulara sahip olmak harika bir duyگو.',
          ar: 'شكراً جزيلاً لك! من الرائع حقاً امتلاك جيران طيبين كهؤلاء.',
          es: '¡Muchísimas gracias! Es una maravilla tener vecinos tan amables.'
        }
      ]
    },
    exercises: [
      {
        id: 'ex_b1_1_1',
        type: 'multiple_choice',
        instruction: {
          en: 'Select the sentence with the correct subordinate clause word order using "weil".',
          fa: 'جمله‌ای را انتخاب کنید که در آن ترتیب کلمات با حرف ربط "weil" به درستی رعایت شده باشد.',
          tr: '"weil" bağlacı ile doğru sözcük dizilimine sahip cümleyi seçiniz.',
          ar: 'اختر الجملة التي تتبع الترتيب الصحيح للكلمات مع أداة الربط "weil".',
          es: 'Selecciona la frase con el orden correcto en la oración subordinada con "weil".'
        },
        prompt: 'Which subordinate sentence is grammatically correct?',
        options: [
          '..., weil er eine neue Arbeit in Hamburg gefunden hat.',
          '..., weil er hat eine neue Arbeit in Hamburg gefunden.',
          '..., weil eine neue Arbeit in Hamburg er gefunden hat.',
          '..., weil er gefunden eine neue Arbeit in Hamburg hat.'
        ],
        correctAnswer: '..., weil er eine neue Arbeit in Hamburg gefunden hat.',
        explanation: {
          en: 'In German subordinate clauses with "weil", the conjugated auxiliary verb ("hat") must be at the very end, directly following the Partizip II ("gefunden").',
          fa: 'در جملات پیرو با "weil"، فعل کمکی صرف‌شده ("hat") باید در انتهای جمله و بلافاصله پس از اسم مفعول ("gefunden") قرار گیرد.',
          tr: '"weil" yan cümlesinde çekimli yardımcı fiil ("hat"), Partizip II\'den ("gefunden") sonra cümlenin tam sonunda yer alır.',
          ar: 'في الجملة الفرعية مع "weil"، يجب أن يقع الفعل المساعد المصرف ("hat") في نهاية الجملة تماماً بعد اسم المفعول ("gefunden").',
          es: 'En las oraciones subordinadas con "weil", el auxiliar conjugado ("hat") debe situarse en la última posición tras el participio ("gefunden").'
        }
      },
      {
        id: 'ex_b1_1_2',
        type: 'fill_blank',
        instruction: {
          en: 'Choose the correct conjunction: "obwohl" (concession) vs "weil" (reason).',
          fa: 'حرف ربط مناسب را انتخاب کنید: "obwohl" (با وجود اینکه) یا "weil" (چون/زیرا).',
          tr: 'Doğru bağlacı seçiniz: "obwohl" (karşın) veya "weil" (çünkü).',
          ar: 'اختر أداة الربط الصحيحة: "obwohl" (على الرغم من) أم "weil" (لأن).',
          es: 'Elige la conjunción correcta: "obwohl" (a pesar de) o "weil" (porque).'
        },
        prompt: 'Er ging zur Arbeit, _____ er sich noch etwas müde fühlte.',
        options: ['obwohl', 'weil', 'denn', 'deshalb'],
        correctAnswer: 'obwohl',
        explanation: {
          en: '"obwohl" expresses a concession (going to work despite feeling tired).',
          fa: '"obwohl" بیانگر تضاد و با وجود مانع بودن است (او به سر کار رفت با وجود اینکه هنوز کمی خسته بود).',
          tr: '"obwohl" bir engele rağmen eylemin gerçekleştiğini bildirir (yorgun hissetmesine rağmen).',
          ar: '"obwohl" تعبر عن التناقض والتقابل (ذهب إلى العمل على الرغم من شعوره ببعض التعب).',
          es: '"obwohl" introduce una concesión (fue a trabajar a pesar de que todavía se sentía algo cansado).'
        }
      }
    ]
  },
  {
    id: 'b1_1_lek2',
    lektionNumber: 2,
    level: 'B1.1',
    title: 'Ausbildung, Weiterbildung und lebenslanges Lernen',
    subTitle: 'Duales System, Weiterbildungskurse und Infinitiv mit "zu" (Deutsch Mussawi B1.1 Lektion 2)',
    topic: 'Berufsausbildung, Zertifikate, IHK-Prüfung und Infinitivkonstruktionen',
    fotoHoergeschichte: {
      title: 'Foto-Hörgeschichte: Das Beratungsgespräch bei der Agentur für Arbeit',
      imagePrompt: 'A counseling session at the German Federal Employment Agency (Agentur für Arbeit) in Frankfurt.',
      imageTheme: 'Berufsberatung in Frankfurt',
      audioDuration: '03:10',
      transcript: [
        { speaker: 'Berufsberaterin Frau Klein', text: 'Guten Tag, Herr Azimi. Sie möchten also eine Umschulung zum Fachinformatiker machen?' },
        { speaker: 'Ahmad Azimi', text: 'Ja, genau. Ich habe vor, meine Vorkenntnisse zu vertiefen und einen anerkannten Berufsabschluss zu erwerben.' },
        { speaker: 'Frau Klein', text: 'Es ist ratsam, vorher einen Eignungstest zu absolvieren und einen Bildungsgutschein zu beantragen.' },
        { speaker: 'Ahmad Azimi', text: 'Muss ich dafür bestimmte Zertifikate einreichen?' },
        { speaker: 'Frau Klein', text: 'Sie brauchen nur Ihren Lebenslauf und Ihre Zeugnisse ins Deutsche übersetzen zu lassen.' }
      ],
      summary: {
        en: 'Ahmad seeks professional advice at the employment agency regarding retraining and educational vouchers.',
        fa: 'احمد در اداره کار آلمان در خصوص دوره بازآموزی و دریافت بن آموزشی (Bildungsgutschein) مشاوره دریافت می‌کند.',
        prs: 'احمد در اداره کار آلمان در مورد بازآموزی مسلکی و اسناد تحصیلی مشورت می‌گیرد.',
        tr: 'Ahmad İş Ajansı\'nda mesleki yeniden eğitim ve eğitim kuponu hakkında danışmanlık alır.',
        ar: 'يحصل أحمد على استشارة مهنية في وكالة العمل بشأن إعادة التأهيل وقسيمة التعليم.',
        es: 'Ahmad recibe asesoramiento en la agencia de empleo sobre reciclaje profesional y bonos formativos.'
      }
    },
    sectionA: {
      title: 'Mussawi A: Sprechen & Dialog',
      focus: 'Hören & Sprechen (Bildungswege & Umschulung)',
      description: {
        en: 'Discuss vocational training, trade certificates, and dual education in Germany.',
        fa: 'گفتگو درباره آموزش دوگانه (Duales System)، مدارک فنی و بازآموزی شغلی در آلمان.',
        prs: 'گفتگو در مورد سیستم دوگانه تحصیل و کار عملی و تصدیق‌نامه‌های مسلکی در آلمان.',
        tr: 'Almanya\'da mesleki eğitim, çıraklık ve sertifikalar hakkında konuşma.',
        ar: 'مناقشة التعليم المهني المزدوج والشهادات المهنية في ألمانيا.',
        es: 'Debate sobre la formación dual y los certificados profesionales en Alemania.'
      },
      grammarRule: {
        id: 'b1_1_lek2_inf',
        level: 'B1.1',
        germanTitle: 'Infinitiv mit "zu" und "brauchen ... nicht zu"',
        formula: 'Es ist wichtig, ... zu + Infinitiv | haben vor / Lust haben, ... zu + Infinitiv | brauchen nicht zu + Infinitiv',
        explanation: {
          en: 'The infinitive with "zu" follows specific verbs (vorhaben, planen, hoffen), adjectives with "es ist" (es ist wichtig, schön), and nouns (Lust/Zeit haben). "brauchen nicht zu" replaces "müssen nicht".',
          fa: 'مصدر با "zu" پس از افعال بیان قصد (vorhaben, planen)، عبارات وصفی (es ist wichtig) و اسامی (Lust haben) می‌آید. "brauchen nicht zu" معادل "مجبور نبودن" است.',
          prs: 'مصدر با "zu" بعد از افعال اراده و امیدواری و اصطلاحات وصفی می‌آید. ترکیب "brauchen nicht zu" به معنی لازم نبودن است.',
          tr: '"zu" ile mastar belirli fiiller, sıfatlar ve isimlerden sonra kullanılır. "brauchen nicht zu", "zorunda olmamak" anlamına gelir.',
          ar: 'تستخدم صيغة المصدر مع "zu" بعد أفعال معينة والصفات والأسماء للتعبير عن النوايا والتطلعات.',
          es: 'El infinitivo con "zu" se utiliza tras verbos de intención, adjetivos impersonales y sustantivos.'
        },
        examples: [
          {
            german: 'Ich habe vor, mich im IT-Bereich weiterzubilden.',
            formulaBreakdown: 'Ich habe vor (V1) + mich im IT-Bereich + weiter-zu-bilden (Infinitiv mit zu).',
            literalTranslation: {
              en: 'I intend to educate myself further in IT.',
              fa: 'من قصد دارم در حوزه فناوری اطلاعات ادامه تحصیل دهم.',
              prs: 'قصد دارم در بخش آی‌تی دانش خود را ارتقا دهم.',
              tr: 'BT alanında kendimi geliştirmeyi planlıyorum.',
              ar: 'أنوي تطوير مهاراتي في مجال تكنولوجيا المعلومات.',
              es: 'Tengo la intención de seguir formándome en el sector informático.'
            },
            fluentTranslation: {
              en: 'I plan to pursue further training in the IT sector.',
              fa: 'قصد دارم در حوزه فناوری اطلاعات دوره تکمیلی بگذرانم.',
              prs: 'پلان دارم در بخش تکنالوژی معلوماتی دوره تخصصی را سپری نمایم.',
              tr: 'Bilişim alanında ileri düzey eğitim almayı amaçlıyorum.',
              ar: 'أخطط لمتابعة تدريب متقدم في قطاع تكنولوجيا المعلومات.',
              es: 'Planeo realizar una formación continua en el área tecnológica.'
            }
          }
        ]
      },
      practiceTasks: [
        'Formulieren Sie 3 Sätze mit "Es ist wichtig, ... zu + Infinitiv".',
        'Bilden Sie 2 Sätze mit "brauchen nicht zu".'
      ]
    },
    sectionB: {
      title: 'Mussawi B: Wortschatz & Hören',
      focus: 'Lesen & Wortschatz (Stellenanzeigen & Weiterbildungskatalog)',
      description: {
        en: 'Analyze job requirements, training prerequisites, and vocational qualifications.',
        fa: 'بررسی آگهی‌های دوره‌های آموزشی، شرایط ورود و گواهی‌نامه‌های تخصصی.',
        prs: 'مطالعه اعلان‌های دوره‌های آموزشی و اسناد لازم برای شمولیت.',
        tr: 'Eğitim ilanlarını ve başvuru koşullarını inceleme.',
        ar: 'تحليل شروط القبول ومتطلبات الدورات التدريبية المتقدمة.',
        es: 'Análisis de ofertas de formación y requisitos de titulación.'
      }
    },
    sectionC: {
      title: 'Mussawi C: Alltagskommunikation',
      focus: 'Schreiben (Die formelle E-Mail an die Weiterbildungsakademie)',
      description: {
        en: 'Draft formal inquiries regarding course schedules, financing, and official certification.',
        fa: 'نگارش ایمیل رسمی برای استعلام ساعت کلاس‌ها، شرایط شهریه و مدرک پایان دوره.',
        prs: 'نوشتن ایمیل رسمی برای آگاهی از فیس و ساعات درسی دوره‌های ارتقای ظرفیت.',
        tr: 'Kurs saatleri ve sertifika hakkında resmi bilgi talep e-postası yazma.',
        ar: 'صياغة بريد إلكتروني رسمي للاستفسار عن مواعيد الدورة والتمويل.',
        es: 'Redacción de un correo formal solicitando información sobre el curso y la financiación.'
      }
    },
    sectionD: {
      title: 'Mussawi D: Leseverstehen & Text',
      focus: 'Aussprache & Intonation (Satzmelodie bei Infinitivsätzen)',
      description: {
        en: 'Practice sentence rhythm and pausing before "zu + Infinitiv" clauses.',
        fa: 'تمرین ریتم و مکث صوتی پیش از عبارات مصدر با zu.',
        prs: 'تمرین لحن و توقف صوتی پیش از جملات مصدری با zu.',
        tr: '"zu + Infinitiv" yapılarında cümle vurgusu ve tonlama çalışmaları.',
        ar: 'التدريب على نبرة الصوت والوقف المناسب في الجمل المصدرية.',
        es: 'Entrenamiento de entonación y pausas en oraciones de infinitivo.'
      }
    },
    sectionE: {
      title: 'Mussawi E: Grammatik & Schreiben',
      focus: 'Erfolgreich im Beruf (Lebenslauf und Weiterbildungsplan)',
      description: {
        en: 'Build a strategic career plan and adapt your CV for the German job market.',
        fa: 'تدوین برنامه پیشرفت شغلی و تنظیم رزومه مطابق با استانداردهای آلمان.',
        prs: 'ترتیب خلص سوانح (سی‌وی) معیاری برای بازار کار آلمان.',
        tr: 'Kariyer planı oluşturma ve Alman standartlarında CV hazırlama.',
        ar: 'وضع خطة مسار وظيفي وتحديث السيرة الذاتية وفق المعايير الألمانية.',
        es: 'Diseño de un plan de carrera y adaptación del currículum al mercado alemán.'
      }
    },
    vocabularies: [
      { id: 'b1_1_v2_1', word: 'die Weiterbildung', article: 'die', plural: 'die Weiterbildungen', ipa: '/ˈvaɪ̯tɐˌbɪldʊŋ/', translation: { en: 'further education / continuous training', fa: 'آموزش تکمیلی / دوره ارتقای مهارت', prs: 'ارتقای ظرفیت مسلکی', tr: 'ileri eğitim', ar: 'التعليم المستمر', es: 'formación continua' } },
      { id: 'b1_1_v2_2', word: 'der Bildungsgutschein', article: 'der', plural: 'die Bildungsgutscheine', ipa: '/ˈbɪldʊŋsˌɡuːtʃaɪ̯n/', translation: { en: 'educational training voucher', fa: 'بن پرداخت هزینه آموزش دولتی', prs: 'کوپون دولتی تمویل کورس', tr: 'eğitim kuponu', ar: 'قسيمة التدريب التعليمي', es: 'bono educativo' } },
      { id: 'b1_1_v2_3', word: 'die Umschulung', article: 'die', plural: 'die Umschulungen', ipa: '/ˈʊmˌʃuːlʊŋ/', translation: { en: 'retraining for a new profession', fa: 'دوره بازآموزی شغلی', prs: 'تغییر و تبدیل رشته مسلکی', tr: 'meslek değiştirme eğitimi', ar: 'إعادة التأهيل المهني', es: 'reciclaje profesional' } },
      { id: 'b1_1_v2_4', word: 'das Zeugnis', article: 'das', plural: 'die Zeugnisse', ipa: '/ˈtsɔɪ̯knɪs/', translation: { en: 'certificate / report card', fa: 'کارنامه / گواهی‌نامه تحصیلی', prs: 'شهادت‌نامه تحصیلی', tr: 'karne / sertifika', ar: 'شهادة دراسية / تقييم', es: 'certificado / boletín' } },
      { id: 'b1_1_v2_5', word: 'die Anerkennung', article: 'die', plural: 'die Anerkennungen', ipa: '/ˈanʔɛɐ̯ˌkɛnʊŋ/', translation: { en: 'official recognition', fa: 'تایید و معادل‌سازی رسمی مدارک', prs: 'رسمی‌سازی و تایید اسناد', tr: 'denklik / tanınma', ar: 'الاعتراف الرسمي بالشهادات', es: 'homologación / reconocimiento' } }
    ],
    videoClip: {
      title: 'Die Berufsberatung: Den richtigen Weg finden',
      scenario: 'Ein Beratungsgespräch bei der IHK über Abschlüsse und Weiterbildungsförderung.',
      germanTranscript: [
        'Berater: Welche beruflichen Erfahrungen bringen Sie bereits mit?',
        'Interessent: Ich habe fünf Jahre als Elektriker gearbeitet und möchte die Meisterprüfung ablegen.',
        'Berater: Ausgezeichnet! Dafür können Sie Aufstiegs-BAföG beantragen.',
        'Interessent: Das erleichtert die Finanzierung enorm. Wann beginnt der nächste Kurs?'
      ],
      translatedTranscript: [
        { en: 'Advisor: What professional experience do you already have?', fa: 'مشاور: چه تجربیات شغلی قبلی دارید؟', prs: 'مشاور: چه تجارب کاری قبلی دارید؟', tr: 'Danışman: Önceden hangi mesleki deneyimlere sahipsiniz?', ar: 'المستشار: ما هي الخبرات المهنية التي تمتلكها بالفعل؟', es: 'Asesor: ¿Qué experiencia profesional previa tiene?' },
        { en: 'Candidate: I worked five years as an electrician and want to take the master craftsman exam.', fa: 'متقاضی: پنج سال به عنوان برقکار کار کرده‌ام و می‌خواهم در آزمون مایستر شرکت کنم.', prs: 'متقاضی: ۵ سال برقی کار کرده‌ام و می‌خواهم امتحان استادی بدهم.', tr: 'Aday: Beş yıl elektrikçi olarak çalıştım ve ustalık sınavına girmek istiyorum.', ar: 'المتقدم: عملت خمس سنوات كهربائياً وأرغب في خوض امتحان الأستاذية.', es: 'Candidato: Trabajé cinco años como electricista y deseo presentarme al examen de maestro.' }
      ]
    },
    examTip: {
      standard: 'B1 (Goethe / telc Zertifikat B1)',
      module: 'Schreiben Teil 1',
      tip: {
        en: 'In B1 writing, using infinitive constructions like "Ich freue mich darauf, Sie bald persönlich kennenzulernen" guarantees top marks for sentence variety.',
        fa: 'در نگارش B1 استفاده از ترکیب‌های مصدری با zu تنوع ساختاری متن شما را بالا برده و نمره نگارش را تضمین می‌کند.',
        prs: 'در بخش نوشتاری B1 از جملات مصدری با zu استفاده کنید تا تنوع گرامری شما نشان داده شود.',
        tr: 'B1 yazma sınavında "zu + Infinitiv" yapıları cümle çeşitliliği için yüksek puan kazandırır.',
        ar: 'في اختبار الكتابة B1 يضمن استخدام التراكيب المصدرية الحصول على درجات عليا في التنوع اللغوي.',
        es: 'En la redacción de B1, el uso de estructuras de infinitivo demuestra dominio de la variedad sintáctica.'
      }
    },
    exercises: [
      {
        id: 'ex_b1_1_lek2_1',
        type: 'fill_blank',
        instruction: {
          en: 'Complete the sentence with "zu" or write "-" if no "zu" is required.',
          fa: 'جمله را با "zu" کامل کنید یا در صورت عدم نیاز علامت "-" بگذارید.',
          prs: 'جمله را با "zu" یا در صورت عدم نیاز با "-" پر کنید.',
          tr: 'Cümleyi "zu" ile tamamlayın veya gerekmiyorsa "-" yazın.',
          ar: 'أكمل الجملة بـ "zu" أو ضع "-" إن لم تكن هناك حاجة.',
          es: 'Completa la oración con "zu" o escribe "-" si no es necesario.'
        },
        prompt: 'Ich habe vor, Deutsch für den Beruf intensiver _____ lernen.',
        options: ['zu', 'um', 'für', '-'],
        correctAnswer: 'zu',
        explanation: {
          en: '"vorhaben" requires the infinitive with "zu" (vorhaben, ... zu lernen).',
          fa: 'فعل "vorhaben" همواره به مصدر همراه با "zu" نیاز دارد.',
          prs: 'فعل vorhaben همیشه با مصدر و zu استفاده می‌شود.',
          tr: '"vorhaben" fiili "zu" ile mastar gerektirir.',
          ar: 'الفعل "vorhaben" يتطلب استخدام المصدر المسبوق بـ "zu".',
          es: 'El verbo "vorhaben" rige infinitivo con "zu".'
        }
      }
    ]
  },
  {
    id: 'b1_1_lek3',
    lektionNumber: 3,
    level: 'B1.1',
    title: 'Arbeitswelt, Büroalltag und Vorstellungsgespräch',
    subTitle: 'Konjunktiv II der Höflichkeit, Ratschläge und Modalverben im Präteritum (Deutsch Mussawi B1.1 Lektion 3)',
    topic: 'Teamkommunikation, Meetings, Gehaltsverhandlung und höfliche Bitten',
    fotoHoergeschichte: {
      title: 'Foto-Hörgeschichte: Die Teambesprechung in der Marketingagentur',
      imagePrompt: 'A lively team meeting in a creative marketing agency in Berlin with project boards and laptops.',
      imageTheme: 'Teambesprechung in Berlin',
      audioDuration: '03:00',
      transcript: [
        { speaker: 'Teamleiterin Sarah', text: 'Könnten wir bitte kurz die Meilensteine für die neue Kampagne besprechen?' },
        { speaker: 'Marc', text: 'Gern. An deiner Stelle würde ich den Starttermin um eine Woche verschieben, damit die Grafiken fertig werden.' },
        { speaker: 'Sarah', text: 'Das wäre vernünftig. Hättest du Zeit, das mit dem Kunden abzustimmen?' },
        { speaker: 'Marc', text: 'Ja, ich würde ihn heute Nachmittag direkt anrufen.' }
      ],
      summary: {
        en: 'A creative team in Berlin coordinates project schedules and shares recommendations using Konjunktiv II.',
        fa: 'یک تیم بازاریابی در برلین زمان‌بندی پروژه را هماهنگ کرده و با Konjunktiv II توصیه‌های مؤدبانه ارائه می‌دهد.',
        prs: 'جلسه کاری یک تیم در برلین برای تقسیم وظایف با جملات مؤدبانه کُنیونکتیو ۲.',
        tr: 'Berlin\'deki pazarlama ekibi Konjunktiv II ile kibar öneriler paylaşır.',
        ar: 'فريق عمل في برلين ينسق جداول المشاريع ويقدم التوصيات باستخدام صيغ اللباقة.',
        es: 'Un equipo en Berlín coordina los plazos del proyecto y comparte recomendaciones formales.'
      }
    },
    sectionA: {
      title: 'Mussawi A: Sprechen & Dialog',
      focus: 'Sprechen (Höfliche Bitten & Ratschläge mit Konjunktiv II)',
      description: {
        en: 'Formulate polite requests (Könnten Sie...), wishes (Ich hätte gern...), and advice (An deiner Stelle würde ich...).',
        fa: 'ساخت درخواست‌های مؤدبانه، بیان تمایلات و ارائه پیشنهاد و نصیحت با Konjunktiv II.',
        prs: 'بیان مشورت و خواسته‌های مودبانه در محیط کار با کُنیونکتیو ۲.',
        tr: 'Konjunktiv II ile kibar ricalar, dilekler ve tavsiyeler oluşturma.',
        ar: 'صياغة الطلبات المهذبة والنصائح والتمنيات بصيغة Konjunktiv II.',
        es: 'Formulación de peticiones de cortesía, deseos y consejos profesionales.'
      }
    },
    sectionB: {
      title: 'Mussawi B: Wortschatz & Hören',
      focus: 'Lesen & Wortschatz (Arbeitsverträge und Arbeitszeitmodelle)',
      description: {
        en: 'Understand work contracts, probationary periods, flexible hours, and overtime compensation.',
        fa: 'درک قراردادهای کاری آلمان، دوره آزمایشی (Probezeit)، اضافه کاری و ساعات کاری منعطف.',
        prs: 'آشنایی با قرارداد کار، دوره آزمایشی و اضافه کاری در آلمان.',
        tr: 'İş sözleşmeleri, deneme süresi ve esnek çalışma saatlerini anlama.',
        ar: 'فهم عقود العمل وفترة التجربة ونماذج الدوام المرن والتعويضات.',
        es: 'Comprensión de contratos laborales, periodo de prueba y horas extra.'
      }
    },
    sectionC: {
      title: 'Mussawi C: Alltagskommunikation',
      focus: 'Grammatik (Modalverben im Präteritum: musste, durfte, konnte, sollte, wollte)',
      description: {
        en: 'Narrate past professional challenges and obligations using simple past modal verbs.',
        fa: 'بیان تجربیات کاری گذشته و مسئولیت‌ها با افعال مدال در زمان گذشته ساده (Präteritum).',
        prs: 'بیان مکلفیت‌های وظیفوی گذشته با زمان گذشته افعال کمکی.',
        tr: 'Geçmişteki iş deneyimlerini ve zorunlulukları Präteritum modal fiillerle anlatma.',
        ar: 'سرد المسؤوليات والمهام الوظيفية السابقة باستخدام صيغة الماضي البسيط للأفعال المساعدة.',
        es: 'Relatar obligaciones y experiencias pasadas con verbos modales en pretérito.'
      }
    },
    sectionD: {
      title: 'Mussawi D: Leseverstehen & Text',
      focus: 'Schreiben (Eine Entschuldigung und Krankmeldung am Arbeitsplatz)',
      description: {
        en: 'Write official notifications of illness and delay to supervisors according to German labor law.',
        fa: 'نگارش نامه اعلام بیماری (Krankmeldung) و تاخیر به مدیر مطابق قانون کار آلمان.',
        prs: 'طریقه اصولی نگارش اطلاعیه مریضی و معذرت‌خواهی به آمر اداره.',
        tr: 'İş yerine usulüne uygun hastalık bildirimi ve mazeret e-postası yazma.',
        ar: 'كتابة إشعار الإجازة المرضية والاعتذار للمدير وفق قانون العمل الألماني.',
        es: 'Redacción de bajas médicas y justificaciones de ausencia formal para la empresa.'
      }
    },
    sectionE: {
      title: 'Mussawi E: Grammatik & Schreiben',
      focus: 'Berufskommunikation (Das Gehaltsgespräch vorbereiten)',
      description: {
        en: 'Negotiate salary, responsibilities, and benefits professionally.',
        fa: 'مذاکره درباره حقوق، پاداش و مزایای شغلی در گفتگوی سالانه کاری.',
        prs: 'مهارت گفتگو در مورد افزایش معاش و امتیازات کاری.',
        tr: 'Yıllık değerlendirme görüşmesinde maaş ve haklar üzerine müzakere.',
        ar: 'التفاوض المهني بشأن الراتب والمزايا في الاجتماعات السنوية.',
        es: 'Negociación formal de salario y responsabilidades en la entrevista anual.'
      }
    },
    vocabularies: [
      { id: 'b1_1_v3_1', word: 'die Probezeit', article: 'die', plural: 'die Probezeiten', ipa: '/ˈpʁoːbəˌtsaɪ̯t/', translation: { en: 'probationary period', fa: 'دوره آزمایشی کار', prs: 'دوره آزمایشی وظیفه', tr: 'deneme süresi', ar: 'فترة التجربة الوظيفية', es: 'periodo de prueba' } },
      { id: 'b1_1_v3_2', word: 'die Überstunde', article: 'die', plural: 'die Überstunden', ipa: '/ˈyːbɐˌʃtʊndə/', translation: { en: 'overtime hour', fa: 'ساعت اضافه‌کاری', prs: 'ساعت اضافه کاری', tr: 'fazla mesai', ar: 'ساعات العمل الإضافية', es: 'hora extraordinaria' } },
      { id: 'b1_1_v3_3', word: 'die Kündigungsfrist', article: 'die', plural: 'die Kündigungsfristen', ipa: '/ˈkʏndɪɡʊŋsˌfʁɪst/', translation: { en: 'notice period for termination', fa: 'مهلت قانونی اعلام استعفا یا اخراج', prs: 'مدت آگاهی قبلی برای فسخ قرارداد', tr: 'ihbar süresi', ar: 'مهلة الإخطار بفسخ العقد', es: 'plazo de preaviso de despido' } },
      { id: 'b1_1_v3_4', word: 'das Gehalt', article: 'das', plural: 'die Gehälter', ipa: '/ɡəˈhalt/', translation: { en: 'salary', fa: 'حقوق ماهانه کارمند', prs: 'معاش ماهوار', tr: 'maaş', ar: 'الراتب الشهري', es: 'salario mensual' } },
      { id: 'b1_1_v3_5', word: 'die Gleitzeit', article: 'die', plural: 'die Gleitzeiten', ipa: '/ˈɡlaɪ̯tˌtsaɪ̯t/', translation: { en: 'flexible working hours / flextime', fa: 'ساعت کاری شناور', prs: 'اوقات کاری اختیاری و شناور', tr: 'esnek çalışma saati', ar: 'نظام ساعات العمل المرنة', es: 'horario flexible de trabajo' } }
    ],
    videoClip: {
      title: 'Im Vorstellungsgespräch: Eigene Stärken präsentieren',
      scenario: 'Ein erfolgreiches Vorstellungsgespräch mit präzisen Antworten auf Fachfragen.',
      germanTranscript: [
        'Interviewer: Warum sind gerade Sie die ideale Besetzung für diese Stelle?',
        'Kandidatin: Ich bringe sowohl fundierte Projektmanagement-Erfahrung als auch hohe Belastbarkeit mit.',
        'Interviewer: Wie reagieren Sie, wenn Kunden kurzfristig Änderungen verlangen?',
        'Kandidatin: Ich würde ruhig bleiben, die Machbarkeit prüfen und transparente Alternativen vorschlagen.'
      ],
      translatedTranscript: [
        { en: 'Interviewer: Why are you the ideal fit for this position?', fa: 'مصاحبه‌کننده: چرا شما بهترین گزینه برای این موقعیت شغلی هستید؟', prs: 'مصاحبه‌کننده: چرا شما مناسب‌ترین فرد برای این بست کاری می‌باشید؟', tr: 'Mülakatçı: Neden bu pozisyon için en uygun aday sizsiniz?', ar: 'المحاور: لماذا تعتبر نفسك المرشح المثالي لهذه الوظيفة؟', es: 'Entrevistador: ¿Por qué es usted la persona idónea para este puesto?' }
      ]
    },
    examTip: {
      standard: 'B1 (Goethe & telc Zertifikat B1)',
      module: 'Sprechen Teil 2',
      tip: {
        en: 'Always use "An Ihrer Stelle würde ich..." or "Es wäre ratsam..." when offering advice in the speaking test.',
        fa: 'در بخش شفاهی هنگام پیشنهاد دادن همیشه از عبارت "به جای شما بودم..." استفاده کنید تا امتیاز بالاتری بگیرید.',
        prs: 'در بخش صحبت امتحان از اصطلاحات کُنیونکتیو ۲ برای پیشنهاد دادن استفاده نمایید.',
        tr: 'Konuşma sınavında tavsiye verirken "An deiner Stelle würde ich..." yapısını kullanmak tam puan kazandırır.',
        ar: 'في الجزء الشفوي استخدم عبارة "لو كنت مكانك لـ..." لإظهار مرونة لغوية عالية.',
        es: 'En el examen oral, utiliza "An deiner Stelle würde ich..." para dar consejos con elegancia.'
      }
    },
    exercises: [
      {
        id: 'ex_b1_1_lek3_1',
        type: 'multiple_choice',
        instruction: {
          en: 'Choose the most polite Konjunktiv II form.',
          fa: 'مؤدبانه‌ترین حالت فعل در Konjunktiv II را انتخاب کنید.',
          prs: 'مودبانه‌ترین ساختار کُنیونکتیو ۲ را برگزینید.',
          tr: 'En kibar Konjunktiv II yapısını seçiniz.',
          ar: 'اختر الصيغة الأكثر أدباً وتأدباً بصيغة Konjunktiv II.',
          es: 'Elige la forma más cortés de Konjunktiv II.'
        },
        prompt: '_____ Sie mir bitte den Bericht bis 14 Uhr zusenden?',
        options: ['Könnten', 'Können', 'Müssen', 'Sollen'],
        correctAnswer: 'Könnten',
        explanation: {
          en: '"Könnten Sie..." is the polite standard request form in German business communication.',
          fa: '"Könnten Sie..." فرمول استاندارد و بسیار محترمانه درخواست اداری در زبان آلمانی است.',
          prs: '"Könnten Sie..." فارمول معیاری و بسیار مودبانه برای تقاضای رسمی در ادارات آلمان است.',
          tr: '"Könnten Sie...", iş hayatında kibar ricaların altın standardıdır.',
          ar: '"Könnten Sie..." هي الصيغة النموذجية للطلب المهذب في بيئة العمل الألمانية.',
          es: '"Könnten Sie..." es la fórmula estándar de máxima cortesía para solicitudes formales.'
        }
      }
    ]
  },
  {
    id: 'b1_1_lek4',
    lektionNumber: 4,
    level: 'B1.1',
    title: 'Gesundheit, Ernährung und Wohlbefinden',
    subTitle: 'Gesundheitssystem, Arztbesuch und Relativsätze im Nominativ und Akkusativ (Deutsch Mussawi B1.1 Lektion 4)',
    topic: 'Krankenversicherung, Facharzttermin, Notdienst und Relativpronomen',
    fotoHoergeschichte: {
      title: 'Foto-Hörgeschichte: Der Facharzttermin in der orthopädischen Klinik',
      imagePrompt: 'A modern orthopedic medical clinic in Munich with an attentive specialist doctor.',
      imageTheme: 'Orthopädische Praxis in München',
      audioDuration: '02:45',
      transcript: [
        { speaker: 'Dr. Bergmann', text: 'Guten Tag, Frau Habibi. Was genau bereitet Ihnen Schmerzen?' },
        { speaker: 'Zahra Habibi', text: 'Ich habe starke Schulterschmerzen, die mir das Arbeiten am Computer unmöglich machen.' },
        { speaker: 'Dr. Bergmann', text: 'Der Kollege, der Sie überwiesen hat, vermutet eine Entzündung.' },
        { speaker: 'Zahra Habibi', text: 'Gibt es Übungen, die ich selbst zu Hause durchführen kann?' },
        { speaker: 'Dr. Bergmann', text: 'Ja, ich verschreibe Ihnen Krankengymnastik und ein wirksames Medikament.' }
      ],
      summary: {
        en: 'Zahra visits a specialist clinic in Munich and discusses diagnosis and physical therapy.',
        fa: 'زهرا به کلینیک تخصصی در مونیخ مراجعه کرده و پیرامون فیزیوتراپی و درمان درد شانه گفتگو می‌کند.',
        prs: 'زهرا به داکتر متخصص در مونیخ مراجعه نموده و نسخه تداوی فیزیکی دریافت می‌دارد.',
        tr: 'Zahra Münih\'teki uzman klinikte omuz ağrısı için fizik tedavi reçetesi alır.',
        ar: 'تزور زهراء عيادة تخصصية في ميونيخ وتناقش التشخيص والعلاج الطبيعي.',
        es: 'Zahra acude a una clínica en Múnich y recibe prescripción de fisioterapia.'
      }
    },
    sectionA: {
      title: 'Mussawi A: Sprechen & Dialog',
      focus: 'Hören & Sprechen (Symptome schildern & Überweisung)',
      description: {
        en: 'Describe medical symptoms accurately and navigate the German health insurance system.',
        fa: 'شرح دقیق علائم بیماری، دریافت برگه ارجاع (Überweisung) و نوبت‌گیری از پزشک متخصص.',
        prs: 'تشریح علایم مریضی و آگاهی از نظام بیمه صحی در آلمان.',
        tr: 'Hastalık belirtilerini ifade etme ve uzman hekime sevk sürecini yürütme.',
        ar: 'وصف الأعراض الطبية بدقة والتعامل مع بطاقة التأمين الصحي والإحالات.',
        es: 'Descripción precisa de síntomas y tramitación de volantes de interconsulta.'
      }
    },
    sectionB: {
      title: 'Mussawi B: Wortschatz & Hören',
      focus: 'Grammatik (Relativsätze im Nominativ und Akkusativ: der/die/das, den/die/das)',
      description: {
        en: 'Connect clauses using relative pronouns to describe persons and objects in detail.',
        fa: 'اتصال جملات با ضمایر موصولی (Relativpronomen) در حالت فاعلی و مفعولی بی‌واسطه.',
        prs: 'جملات موصولی در حالت فاعلی و مفعولی برای توصیف دقیق اشخاص و اشیا.',
        tr: 'İsimleri niteleyen Nominativ ve Akkusativ ilgi cümleleri (Relativsätze) kurma.',
        ar: 'صياغة الجمل الموصولة في حالتي الرفع والنصب لوصف الأشخاص والمواضيع بتفصيل.',
        es: 'Construcción de oraciones de relativo en nominativo y acusativo.'
      }
    },
    sectionC: {
      title: 'Mussawi C: Alltagskommunikation',
      focus: 'Lesen (Packungsbeilage und Medikamenteneinnahme)',
      description: {
        en: 'Understand medical instruction leaflets, dosages, precautions, and side effects.',
        fa: 'خواندن بروشور راهنمای داروها، دوز مصرفی، موارد منع مصرف و عوارض جانبی.',
        prs: 'خواندن رهنمود استفاده از دوا، مقدار مصرف و هشدارهای صحی.',
        tr: 'İlaç prospektüslerini, dozajı ve olası yan etkileri doğru anlama.',
        ar: 'فهم النشرات الداخلية للأدوية ومواعيد الجرعات والآثار الجانبية.',
        es: 'Lectura de prospectos médicos, posología y advertencias de contraindicaciones.'
      }
    },
    sectionD: {
      title: 'Mussawi D: Leseverstehen & Text',
      focus: 'Schreiben (Eine E-Mail zur Terminabsage oder Verschiebung beim Facharzt)',
      description: {
        en: 'Politely cancel or reschedule medical appointments via email or contact forms.',
        fa: 'نگارش ایمیل لغو یا تغییر زمان نوبت پزشک متخصص به شکل مؤدبانه.',
        prs: 'نوشتن ایمیل برای لغو یا تبدیل وقت ملاقات داکتر.',
        tr: 'Doktor randevusunu iptal etme veya erteleme talebi içeren e-posta yazma.',
        ar: 'كتابة بريد إلكتروني لإلغاء أو تأجيل موعد طبي رسمي بأدب.',
        es: 'Redacción de un correo para cancelar o aplazar una cita médica.'
      }
    },
    sectionE: {
      title: 'Mussawi E: Grammatik & Schreiben',
      focus: 'Lebenspraxis (Notfallnummern 112 & 116117 und Rettungsdienst)',
      description: {
        en: 'Distinguish between immediate emergency (112) and on-call medical service (116117).',
        fa: 'تفاوت اورژانس فوری (112) و پزشک کشیک درمانگاه (116117) در آلمان.',
        prs: 'شناخت شماره‌های عاجل امداد و داکتران کشیک در آلمان.',
        tr: 'Acil çağrı (112) ile nöbetçi doktor servisi (116117) arasındaki farkı bilme.',
        ar: 'التمييز العملي بين طوارئ الإسعاف (112) وخدمة الطبيب المناوب (116117).',
        es: 'Uso de números de emergencia 112 y servicio médico de guardia 116117.'
      }
    },
    vocabularies: [
      { id: 'b1_1_v4_1', word: 'die Beschwerde', article: 'die', plural: 'die Beschwerden', ipa: '/bəˈʃveːɐ̯də/', translation: { en: 'complaint / ailment', fa: 'درد و ناراحتی جسمانی / شکایت', prs: 'شکایت صحی / درد جسمانی', tr: 'şikayet / rahatsızlık', ar: 'شكوى صحية / علة', es: 'molestia / dolencia' } },
      { id: 'b1_1_v4_2', word: 'die Überweisung', article: 'die', plural: 'die Überweisungen', ipa: '/yːbɐˈvaɪ̯zʊŋ/', translation: { en: 'medical referral', fa: 'برگه ارجاع پزشک عمومی به متخصص', prs: 'معرفی‌خط داکتر عمومی به متخصص', tr: 'uzman sevk belgesi', ar: 'إحالة طبية تخصصية', es: 'volante de interconsulta' } },
      { id: 'b1_1_v4_3', word: 'die Krankenkasse', article: 'die', plural: 'die Krankenkassen', ipa: '/ˈkʁaŋkŋ̩ˌkasə/', translation: { en: 'statutory health insurance fund', fa: 'صندوق بیمه خدمات درمانی', prs: 'بیمه صحی دولتی', tr: 'sağlık sigortası kurumu', ar: 'صندوق التأمين الصحي', es: 'compañía de seguro médico' } },
      { id: 'b1_1_v4_4', word: 'das Rezept', article: 'das', plural: 'die Rezepte', ipa: '/ʁeˈtsɛpt/', translation: { en: 'prescription', fa: 'نسخه دارویی داروخانه', prs: 'نسخه ادویه داکتر', tr: 'doktor reçetesi', ar: 'الوصفة الطبية', es: 'receta médica' } },
      { id: 'b1_1_v4_5', word: 'die Packungsbeilage', article: 'die', plural: 'die Packungsbeilagen', ipa: '/ˈpakʊŋsˌbaɪ̯laːɡə/', translation: { en: 'patient information leaflet', fa: 'بروشور راهنمای داخل جعبه دارو', prs: 'ورقه رهنمای داخل قوطی دوا', tr: 'prospektüs', ar: 'النشرة الدوائية المرفقة', es: 'prospecto informativo' } }
    ],
    videoClip: {
      title: 'In der Apotheke: Medikamente und Beratung',
      scenario: 'Ein Patient löst ein Kassenrezept ein und wird über die Einnahme informiert.',
      germanTranscript: [
        'Apothekerin: Guten Tag! Haben Sie ein Rezept?',
        'Kunde: Ja, hier ist das rosa Kassenrezept von Dr. Bergmann.',
        'Apothekerin: Dieses Schmerzmittel nehmen Sie bitte einmal täglich vor den Mahlzeiten mit reichlich Wasser ein.',
        'Kunde: Muss ich dafür eine Zuzahlung leisten?',
        'Apothekerin: Nur die gesetzliche Rezeptgebühr von fünf Euro.'
      ],
      translatedTranscript: [
        { en: 'Pharmacist: Good day! Do you have a prescription?', fa: 'داروساز: روز بخیر! آیا نسخه همراه دارید؟', prs: 'فارمسست: وقت بخیر! نسخه داکتر را دارید؟', tr: 'Eczacı: İyi günler! Reçeteniz var mı?', ar: 'الصيدلانية: يوم سعيد! هل لديك وصفة طبية؟', es: 'Farmacéutica: ¡Buenos días! ¿Tiene una receta?' }
      ]
    },
    examTip: {
      standard: 'B1 (Goethe / telc)',
      module: 'Lesen Teil 1',
      tip: {
        en: 'Identify the relative pronoun cases quickly: Nominative is the subject of the subclause; Akkusativ is the direct object.',
        fa: 'در درک مطلب B1 تشخیص سریع نقش ضمیر موصولی (فاعلی یا مفعولی) به درک سریع مفهوم کمک می‌کند.',
        prs: 'تشخیص حالت ضمایر موصولی در ریدینگ باعث دریافت جوابات درست می‌گردد.',
        tr: 'İlgi zamirinin Nominativ mi Akkusativ mi olduğunu belirlemek anlama hızını ikiye katlar.',
        ar: 'حدد حالة ضمير الوصل بدقة لفهم المعنى المقصود في نصوص القراءة بسرعة.',
        es: 'Identifica con rapidez el caso del pronombre relativo para comprender el sentido del texto.'
      }
    },
    exercises: [
      {
        id: 'ex_b1_1_lek4_1',
        type: 'fill_blank',
        instruction: {
          en: 'Insert the correct relative pronoun (den / die / das / der).',
          fa: 'ضمیر موصولی مناسب را وارد کنید.',
          prs: 'ضمیر موصولی مناسب را انتخاب نمایید.',
          tr: 'Doğru ilgi zamirini yerleştiriniz.',
          ar: 'أدخل ضمير الوصل المناسب.',
          es: 'Inserta el pronombre relativo adecuado.'
        },
        prompt: 'Das ist der Arzt, _____ ich gestern im Krankenhaus getroffen habe.',
        options: ['den', 'der', 'dem', 'dessen'],
        correctAnswer: 'den',
        explanation: {
          en: 'The antecedent "der Arzt" is masculine, and in the subclause it functions as direct object (Akkusativ) of "getroffen habe".',
          fa: 'اسم "der Arzt" مذکر است و در جمله پیرو نقش مفعول مستقیم (آکوزاتیو) فعل "getroffen habe" را دارد.',
          prs: 'کلمه der Arzt مذکر بوده و در جمله دوم حیثیت مفعول را دارد بنابرین den می‌شود.',
          tr: '"der Arzt" eril isimdir ve yan cümlede "getroffen habe" fiilinin Akkusativ nesnesidir.',
          ar: 'الاسم مذكر وفي الجملة الموصولة يأتي في موقع المفعول به المباشر (Akkusativ).',
          es: 'El sustantivo es masculino y actúa como complemento directo en acusativo.'
        }
      }
    ]
  },
  {
    id: 'b1_1_lek5',
    lektionNumber: 5,
    level: 'B1.1',
    title: 'Mobilität, Reisen und Umweltschutz',
    subTitle: 'Deutsche Bahn, Carsharing und temporale Nebensätze mit "als", "wenn", "während" & "bevor" (Deutsch Mussawi B1.1 Lektion 5)',
    topic: 'Fahrkarten, Verspätung, Fahrgastrechte und temporale Konnektoren',
    fotoHoergeschichte: {
      title: 'Foto-Hörgeschichte: Am Hauptbahnhof Köln: Zugausfall und Fahrgastrechte',
      imagePrompt: 'A bustling train platform at Cologne Central Station beside the grand cathedral with departures board.',
      imageTheme: 'Köln Hauptbahnhof',
      audioDuration: '03:15',
      transcript: [
        { speaker: 'Lautsprecheransage', text: 'Gleis 6: ICE 518 nach Hamburg fällt heute wegen eines technischen Defekts aus.' },
        { speaker: 'Reisender Lukas', text: 'Entschuldigung, als ich die Fahrkarte kaufte, war von Ausfall keine Rede. Was mache ich jetzt?' },
        { speaker: 'Service-Mitarbeiterin', text: 'Sie können jeden anderen Zug nutzen. Wenn Sie mehr als 60 Minuten Verspätung haben, erhalten Sie eine Entschädigung.' },
        { speaker: 'Lukas', text: 'Muss ich das Fahrgastrechte-Formular ausfüllen, bevor ich abfahre?' },
        { speaker: 'Service-Mitarbeiterin', text: 'Nein, das können Sie bequem online erledigen, während Sie im nächsten Zug sitzen.' }
      ],
      summary: {
        en: 'Lukas experiences a train cancellation at Cologne Central Station and learns about passenger rights and compensation.',
        fa: 'لوکاس در ایستگاه قطار کلن با لغو حرکت قطار روبرو شده و از حقوق مسافران و دریافت خسارت مطلع می‌شود.',
        prs: 'لوکاس در استیشن قطار کلن متوجه حقوق مسافر در وقت تاخیر ریل می‌گردد.',
        tr: 'Lukas Köln Garı\'nda tren iptali yaşar ve yolcu tazminat hakları hakkında bilgi alır.',
        ar: 'يواجه لوكاس إلغاء رحلة القطار في محطة كولونيا ويتعرف على حقوق المسافرين والتعويضات.',
        es: 'Lukas se enfrenta a la cancelación de un tren en Colonia y tramita sus derechos de compensación.'
      }
    },
    sectionA: {
      title: 'Mussawi A: Sprechen & Dialog',
      focus: 'Hören & Sprechen (Bahnreisen & Reklamation am Schalter)',
      description: {
        en: 'Complain about delays, claim compensation, and book seat reservations.',
        fa: 'اعتراض به تاخیر قطار، درخواست جبران خسارت و رزرو صندلی در قطارهای سریع‌السیر آلمان.',
        prs: 'اعتراض به تاخیر ریل، طلب خساره و ریزرف چوکی.',
        tr: 'Gecikmeleri şikayet etme, tazminat talep etme ve koltuk rezervasyonu yapma.',
        ar: 'تقديم شكوى بشأن تأخير القطار والمطالبة بالتعويض وحجز المقاعد.',
        es: 'Reclamación por retrasos ferroviarios, indemnizaciones y reserva de asientos.'
      }
    },
    sectionB: {
      title: 'Mussawi B: Wortschatz & Hören',
      focus: 'Grammatik (Temporale Konjunktionen: "als" vs. "wenn", "während", "bevor")',
      description: {
        en: 'Master "als" (one-time past event) versus "wenn" (repeated or present/future events), plus "während" and "bevor".',
        fa: 'تفاوت "als" (اتفاق یکباره در گذشته) و "wenn" (تکراری یا حال و آینده) به همراه "während" و "bevor".',
        prs: 'کاربرد دقیق als برای حادثه یگانه در گذشته و wenn برای وقایع تکراری یا آینده.',
        tr: 'Geçmişte tek seferlik olaylar için "als", tekrarlanan veya gelecek durumlar için "wenn" bağlacı.',
        ar: 'التمييز بين "als" للحدث الماضي لمرة واحدة و "wenn" للتكرار والزمن الحاضر أو المستقبل.',
        es: 'Diferenciación entre "als" para sucesos únicos del pasado y "wenn" para acciones repetidas.'
      }
    },
    sectionC: {
      title: 'Mussawi C: Alltagskommunikation',
      focus: 'Lesen (Fahrgastrechte und Tarifbestimmungen)',
      description: {
        en: 'Read terms of carriage, cancellation policies, and Deutschlandticket rules.',
        fa: 'مطالعه قوانین بلیت سراسری آلمان (Deutschlandticket)، شرایط استرداد و حقوق مسافران.',
        prs: 'آشنایی با شرایط تکت‌های رفت و آمد و قوانین بلیت آلمان.',
        tr: 'Yolcu hakları bildirisini ve Deutschlandticket kullanım koşullarını anlama.',
        ar: 'قراءة لوائح النقل وسياسات الإلغاء وشروط بطاقة النقل العامة الألمانية.',
        es: 'Lectura de normativas de transporte, reembolsos y condiciones del billete Deutschlandticket.'
      }
    },
    sectionD: {
      title: 'Mussawi D: Leseverstehen & Text',
      focus: 'Schreiben (Eine Reklamation an das Servicecenter Fahrgastrechte)',
      description: {
        en: 'Compose a formal compensation request citing delay duration and ticket numbers.',
        fa: 'نگارش نامه رسمی درخواست بازپرداخت هزینه بلیت به علت تاخیر طولانی.',
        prs: 'نوشتن عریضه رسمی برای جبران خساره تاخیر ریل.',
        tr: 'Bilet numarası ve gecikme süresini belirterek resmi tazminat dilekçesi yazma.',
        ar: 'صياغة طلب تعويض رسمي مع ذكر بيانات التذكرة ومدة التأخير بدقة.',
        es: 'Redacción formal de solicitud de reembolso por demora ante atención al cliente.'
      }
    },
    sectionE: {
      title: 'Mussawi E: Grammatik & Schreiben',
      focus: 'Umwelt & Mobilität (Nachhaltig reisen: Carsharing und Fahrrad)',
      description: {
        en: 'Discuss urban mobility solutions, electric vehicles, and environmental impact.',
        fa: 'گفتگو پیرامون حمل و نقل پاک شهری، اشتراک‌گذاری خودرو (Carsharing) و دوچرخه‌سواری.',
        prs: 'مزایای ترانسپورت محیط زیستی و کارشرینگ در شهرهای بزرگ.',
        tr: 'Çevre dostu kentsel ulaşım ve araç paylaşımı çözümlerini tartışma.',
        ar: 'مناقشة وسائل النقل البيئية المستدامة ومشاركة السيارات في المدن.',
        es: 'Debate sobre movilidad sostenible, coches compartidos y transporte ecológico.'
      }
    },
    vocabularies: [
      { id: 'b1_1_v5_1', word: 'die Verspätung', article: 'die', plural: 'die Verspätungen', ipa: '/fɛɐ̯ˈʃpɛːtʊŋ/', translation: { en: 'delay', fa: 'تاخیر در حرکت', prs: 'تاخیر و ناوقت رسیدن', tr: 'gecikme / rötar', ar: 'التأخير', es: 'retraso / demora' } },
      { id: 'b1_1_v5_2', word: 'der Zugausfall', article: 'der', plural: 'die Zugausfälle', ipa: '/ˈtsuːkˌʔaʊ̯sfal/', translation: { en: 'train cancellation', fa: 'لغو حرکت قطار', prs: 'لغو شدن حرکت ریل', tr: 'tren iptali', ar: 'إلغاء رحلة القطار', es: 'cancelación del tren' } },
      { id: 'b1_1_v5_3', word: 'die Entschädigung', article: 'die', plural: 'die Entschädigungen', ipa: '/ʔɛntˈʃɛːdɪɡʊŋ/', translation: { en: 'compensation / refund', fa: 'خسارت / غرامت بازپرداختی', prs: 'تاوان و غرامت مالی', tr: 'tazminat / bedel iadesi', ar: 'التعويض المالي', es: 'indemnización / compensación' } },
      { id: 'b1_1_v5_4', word: 'der Anschluss', article: 'der', plural: 'die Anschlüsse', ipa: '/ˈanˌʃlʊs/', translation: { en: 'connecting train / bus', fa: 'قطار یا اتوبوس اتصالی بعدی', prs: 'ریل یا ترانسپورت تعویضی بعدی', tr: 'aktarma', ar: 'رحلة الربط / وسيلة المواصلات التالية', es: 'tren de enlace / conexión' } },
      { id: 'b1_1_v5_5', word: 'die Fahrgastrechte', article: 'die', plural: 'die Fahrgastrechte', ipa: '/ˈfaːɐ̯ɡastˌʁɛçtə/', translation: { en: 'passenger rights', fa: 'حقوق قانونی مسافران', prs: 'حقوق مسافرین در قوانین ترانسپورت', tr: 'yolcu hakları', ar: 'حقوق الركاب والمسافرين', es: 'derechos de los pasajeros' } }
    ],
    videoClip: {
      title: 'Am Fahrkartenschalter: Das richtige Ticket finden',
      scenario: 'Ein Reisender lässt sich am Schalter über Sparpreise und Sitzplatzreservierungen beraten.',
      germanTranscript: [
        'Kunde: Guten Tag, ich möchte morgen früh von Köln nach Berlin reisen.',
        'Bahnbeamter: Möchten Sie ein flexibles Ticket oder den günstigeren Sparpreis?',
        'Kunde: Der Sparpreis passt mir gut. Ist eine Sitzplatzreservierung inbegriffen?',
        'Bahnbeamter: Die Reservierung kostet 4,90 Euro extra, lohnt sich aber besonders im Berufsverkehr.'
      ],
      translatedTranscript: [
        { en: 'Customer: Good day, I would like to travel from Cologne to Berlin tomorrow morning.', fa: 'مشتری: روز بخیر، می‌خواهم فردا صبح از کلن به برلین سفر کنم.', prs: 'مشتری: روز بخیر، می‌خواهم فردا صبح از کلن به برلین بروم.', tr: 'Müşteri: İyi günler, yarın sabah Köln\'den Berlin\'e seyahat etmek istiyorum.', ar: 'الزبون: مرحباً، أرغب في السفر صباح الغد من كولونيا إلى برلين.', es: 'Cliente: Buenos días, quisiera viajar mañana por la mañana de Colonia a Berlín.' }
      ]
    },
    examTip: {
      standard: 'B1 (Goethe & telc Zertifikat B1)',
      module: 'Sprachbausteine',
      tip: {
        en: 'Rule of thumb for exams: "als" is used strictly for a unique, single point in the past. If the sentence has "immer", "jedes Mal", or is in the present/future, you MUST choose "wenn".',
        fa: 'نکته کلیدی آزمون B1: "als" فقط برای یک واقعه مشخص و تمام‌شده در گذشته است. اگر واژه "immer" یا تکرار وجود دارد باید "wenn" را برگزینید.',
        prs: 'قاعده طلایی امتحان: als برای یک واقعه یگانه در گذشته است. برای موارد تکراری یا حال فقط wenn درست است.',
        tr: 'Sınav kuralı: Geçmişte bir defa olmuşsa "als", her zaman tekrarlanıyorsa veya şimdiki zamandaysa "wenn".',
        ar: 'قاعدة الاختبار: استخدم "als" للحدث الفريد في الماضي فقط، واستخدم "wenn" مع التكرار أو الأزمنة الأخرى.',
        es: 'Regla clave: "als" para un hecho puntual en el pasado; "wenn" para acciones reiteradas o en presente.'
      }
    },
    exercises: [
      {
        id: 'ex_b1_1_lek5_1',
        type: 'fill_blank',
        instruction: {
          en: 'Choose between "als" and "wenn".',
          fa: 'بین "als" و "wenn" گزینه درست را انتخاب نمایید.',
          prs: 'بین als و wenn کلمه مناسب را برگزینید.',
          tr: '"als" veya "wenn" arasından doğru olanı seçiniz.',
          ar: 'اختر بين "als" و "wenn".',
          es: 'Elige entre "als" y "wenn".'
        },
        prompt: '_____ ich vor zwei Jahren nach Hamburg kam, sprach ich noch kein Wort Deutsch.',
        options: ['Als', 'Wenn', 'Wann', 'Während'],
        correctAnswer: 'Als',
        explanation: {
          en: 'Moving to Hamburg two years ago is a singular, one-time historical event in the past, which requires "Als".',
          fa: 'مهاجرت به هامبورگ در دو سال پیش، یک رویداد منفرد در گذشته است؛ بنابراین فقط "Als" صحیح است.',
          prs: 'آمدن به هامبورگ در ۲ سال قبل یک حادثه یکباره در گذشته است بنابرین Als به کار می‌رود.',
          tr: 'İki yıl önce Hamburg\'a taşınmak geçmişte tek seferlik bir olaydır; bu nedenle "Als" zorunludur.',
          ar: 'الانتقال إلى هامبورغ قبل عامين هو حدث مفرد تم في الماضي، لذا تتطلب الجملة "Als".',
          es: 'Llegar a Hamburgo hace dos años es un hecho único en el pasado, por lo que exige "Als".'
        }
      }
    ]
  },
  {
    id: 'b1_1_lek6',
    lektionNumber: 6,
    level: 'B1.1',
    title: 'Finanzen, Banken und Verbraucherschutz',
    subTitle: 'Girokonto, Dauerauftrag, Online-Banking und Vorgangspassiv Präsens (Deutsch Mussawi B1.1 Lektion 6)',
    topic: 'Bankgeschäfte, Lastschrift, Verträge kündigen und Passivkonstruktionen',
    fotoHoergeschichte: {
      title: 'Foto-Hörgeschichte: In der Bankfiliale: Überweisung und Online-Sicherheit',
      imagePrompt: 'A German bank branch counter where a bank clerk explains digital banking procedures to a customer.',
      imageTheme: 'Bankfiliale in Frankfurt am Main',
      audioDuration: '02:55',
      transcript: [
        { speaker: 'Bankberater Herr Weber', text: 'Guten Tag! Wie kann ich Ihnen heute bei Ihren Finanzen behilflich sein?' },
        { speaker: 'Maryam', text: 'Guten Tag! Ich möchte einen Dauerauftrag für meine monatliche Miete einrichten.' },
        { speaker: 'Herr Weber', text: 'Das wird direkt in unserem Online-Portal erledigt. Der Betrag wird dann immer am Ersten abgebucht.' },
        { speaker: 'Maryam', text: 'Wie wird mein Konto vor Phishing-Angriffen geschützt?' },
        { speaker: 'Herr Weber', text: 'Jede Transaktion wird durch eine moderne Zwei-Faktor-Authentifizierung auf Ihrem Smartphone freigegeben.' }
      ],
      summary: {
        en: 'Maryam visits a bank in Frankfurt to set up a standing order and learns about digital transaction security.',
        fa: 'مریم به شعبه بانکی در فرانکفورت مراجعه کرده و دستور پرداخت خودکار (Dauerauftrag) برای اجاره خانه را فعال می‌کند.',
        prs: 'مریم در بانک شعبه فرانکفورت حواله اتومات برای کرایه خانه را فعال می‌سازد.',
        tr: 'Maryam Frankfurt\'taki bankada kira için otomatik ödeme talimatı açar ve hesap güvenliğini öğrenir.',
        ar: 'تزور مريم فرع البنك في فرانكفورت لإنشاء أمر دفع دوري لإيجارها وتتعرف على أمان المعاملات الرقمية.',
        es: 'Maryam acude a una sucursal bancaria para domiciliar el alquiler y consultar la seguridad online.'
      }
    },
    sectionA: {
      title: 'Mussawi A: Sprechen & Dialog',
      focus: 'Hören & Sprechen (Bankgeschäfte: Überweisung, Dauerauftrag & Lastschrift)',
      description: {
        en: 'Manage bank accounts, debit authorizations, standing orders, and dispute unauthorized charges.',
        fa: 'انجام امور بانکی: واریز، برداشت، پرداخت خودکار و اعتراض به کسر غیرمجاز از حساب.',
        prs: 'معاملات بانکی: فعال‌سازی حواله ماهوار و بررسی حساب.',
        tr: 'Banka işlemleri: Otomatik ödeme talimatı, havale ve hesap ekstresi kontrolü.',
        ar: 'إدارة الحسابات المصرفية وأوامر الدفع الدورية والاعتراض على الخصومات غير المصرح بها.',
        es: 'Gestión bancaria: transferencias, órdenes permanentes de pago y domiciliación de recibos.'
      }
    },
    sectionB: {
      title: 'Mussawi B: Wortschatz & Hören',
      focus: 'Grammatik (Das Vorgangspassiv im Präsens: wird/werden + Partizip II)',
      description: {
        en: 'Form passive sentences to explain procedures and regulations where the action matters more than the actor.',
        fa: 'ساخت جملات مجهول حال (Vorgangspassiv) برای توضیح فرآیندها، بخشنامه‌ها و دستورالعمل‌ها.',
        prs: 'طرز ساخت جمله مجهول در زمان حال با فعل werden و اسم مفعول.',
        tr: 'Süreçleri ve resmi kuralları açıklamak için şimdiki zaman edilgen çatı (Passiv Präsens) kurma.',
        ar: 'بناء الجمل في صيغة المبني للمجهول في الحاضر لشرح الإجراءات والتعليمات الرسمية.',
        es: 'Construcción de la voz pasiva de proceso en presente (wird/werden + Partizip II).'
      }
    },
    sectionC: {
      title: 'Mussawi C: Alltagskommunikation',
      focus: 'Lesen (Verbraucherschutz: Verträge und Kündigungsfristen)',
      description: {
        en: 'Analyze telecommunication and fitness club contracts and calculate notice periods.',
        fa: 'بررسی قراردادهای موبایل و اینترنت، مهلت قانونی لغو قرارداد و قوانین حمایت از مصرف‌کننده.',
        prs: 'آگاهی از شرایط فسخ قراردادهای انترنت و باشگاه ورزشی در آلمان.',
        tr: 'Tüketici koruma hakları, abonelik sözleşmeleri ve fesih sürelerini inceleme.',
        ar: 'فهم عقود الاتصالات والخدمات وحساب المهل القانونية لإلغاء العقود.',
        es: 'Análisis de contratos de servicios, plazos de rescisión y derechos del consumidor.'
      }
    },
    sectionD: {
      title: 'Mussawi D: Leseverstehen & Text',
      focus: 'Schreiben (Eine formelle Vertragskündigung verfassen)',
      description: {
        en: 'Draft an airtight formal contract cancellation letter with request for written confirmation.',
        fa: 'نگارش نامه رسمی لغو قرارداد (Kündigung) با درخواست تاییدیه کتبی.',
        prs: 'نگارش عریضه رسمی برای لغو و فسخ قرارداد با تقاضای مکتوب تاییدیه.',
        tr: 'Yazılı onay talep eden resmi sözleşme fesih dilekçesi (Kündigungsschreiben) hazırlama.',
        ar: 'صياغة خطاب رسمي محكم لفسخ العقد مع المطالبة بتأكيد خطي للاستلام.',
        es: 'Redacción de una carta formal de cancelación de contrato solicitando confirmación por escrito.'
      }
    },
    sectionE: {
      title: 'Mussawi E: Grammatik & Schreiben',
      focus: 'Sicherheit im Alltag (Schutz vor Phishing und Online-Betrug)',
      description: {
        en: 'Recognize fake emails, secure payment methods, and report fraud to the consumer center.',
        fa: 'شناسایی ایمیل‌های جعلی، درگاه‌های پرداخت امن و گزارش کلاهبرداری به مرکز حمایت از مصرف‌کننده.',
        prs: 'راه‌های مقابله با فریبکاری‌های انترنتی و مصونیت حساب بانکی.',
        tr: 'Oltalama (phishing) postalarını tanıma ve güvenli online ödeme yöntemleri.',
        ar: 'التعرف على رسائل الاحتيال الإلكتروني وطرق الدفع الآمنة وحماية المستهلك.',
        es: 'Prevención de fraudes online, detección de phishing y métodos de pago seguros.'
      }
    },
    vocabularies: [
      { id: 'b1_1_v6_1', word: 'das Girokonto', article: 'das', plural: 'die Girokonten', ipa: '/ˈʒiːʁoˌkɔnto/', translation: { en: 'checking account / current account', fa: 'حساب جاری بانکی', prs: 'حساب جاری بانکی', tr: 'vadesiz mevduat hesabı', ar: 'الحساب الجاري المصرفي', es: 'cuenta corriente bancaria' } },
      { id: 'b1_1_v6_2', word: 'der Dauerauftrag', article: 'der', plural: 'die Daueraufträge', ipa: '/ˈdaʊ̯ɐˌʔaʊ̯ftʁaːk/', translation: { en: 'standing order', fa: 'دستور پرداخت خودکار و دائمی', prs: 'حواله خودکار و تکراری ماهوار', tr: 'otomatik ödeme talimatı', ar: 'أمر الدفع الدوري الثابت', es: 'orden de transferencia periódica' } },
      { id: 'b1_1_v6_3', word: 'die Lastschrift', article: 'die', plural: 'die Lastschriften', ipa: '/ˈlastˌʃʁɪft/', translation: { en: 'direct debit', fa: 'برداشت مستقیم بانکی', prs: 'اجازه کسر خودکار پول از حساب', tr: 'otomatik para çekme / tahsilat', ar: 'الخصم المصرفي المباشر', es: 'domiciliación bancaria' } },
      { id: 'b1_1_v6_4', word: 'die Kündigung', article: 'die', plural: 'die Kündigungen', ipa: '/ˈkʏndɪɡʊŋ/', translation: { en: 'cancellation / termination', fa: 'فسخ قرارداد / استعفا یا اخراج', prs: 'فسخ قرارداد یا عریضه کناره‌گیری', tr: 'fesih / iptal bildirimi', ar: 'فسخ العقد / إنهاء الخدمة', es: 'rescisión / cancelación de contrato' } },
      { id: 'b1_1_v6_5', word: 'die Verbraucherzentrale', article: 'die', plural: 'die Verbraucherzentralen', ipa: '/fɛɐ̯ˈbʁaʊ̯xɐtsɛnˌtʁaːlə/', translation: { en: 'consumer advice center', fa: 'مرکز حمایت از حقوق مصرف‌کنندگان', prs: 'اداره دولتی حمایت از مستهلکین', tr: 'tüketici hakları danışma merkezi', ar: 'مركز حماية المستهلك', es: 'asociación de consumidores' } }
    ],
    videoClip: {
      title: 'Die Vertragskündigung: Fristen und Nachweise',
      scenario: 'Ein Verbraucherberater erklärt, worauf man beim Kündigen von Verträgen achten muss.',
      germanTranscript: [
        'Berater: Beachten Sie immer die Kündigungsfrist in den AGB Ihres Anbieters.',
        'Kunde: Reicht eine einfache E-Mail aus?',
        'Berater: Bei wichtigen Verträgen empfiehlt sich ein Einwurf-Einschreiben mit Fristnachweis.',
        'Kunde: Dann bin ich rechtlich auf der sicheren Seite.'
      ],
      translatedTranscript: [
        { en: 'Advisor: Always observe the notice period in your provider\'s terms and conditions.', fa: 'مشاور: همیشه به مهلت فسخ در شرایط عمومی قرارداد ارائه‌دهنده توجه کنید.', prs: 'مشاور: همیشه به مهلت فسخ در شرایط عمومی قرارداد ارائه‌دهنده خدمات توجه کنید.', tr: 'Danışman: Sağlayıcınızın genel işlem koşullarındaki fesih süresine mutlaka dikkat edin.', ar: 'المستشار: انتبه دائماً لمهلة الإلغاء المحددة في الشروط والأحكام العامة.', es: 'Asesor: Preste siempre atención al plazo de preaviso en las condiciones generales.' }
      ]
    },
    examTip: {
      standard: 'B1 (Goethe / telc)',
      module: 'Lesen & Schreiben',
      tip: {
        en: 'Formal notices and contracts in Germany overwhelmingly use the passive voice: "Die Kündigung wird zum Monatsende wirksam". Understanding passives is crucial for reading contracts and formal mail.',
        fa: 'در نامه‌های اداری و قراردادهای آلمانی افعال مجهول کاربرد گسترده دارند. یادگیری مجهول برای درک متون رسمی B1 الزامی است.',
        prs: 'در مکاتبات رسمی آلمان اکثر جملات به صورت مجهول نوشته می‌شوند. یادگیری این ساختار برای کامیابی در ریدینگ ضروری است.',
        tr: 'Almanya\'daki resmi yazışmalarda edilgen çatı çok yaygındır. Sözleşmeleri anlamak için Passiv şarttır.',
        ar: 'تستخدم صياغات المبني للمجهول بكثافة في العقود والمراسلات الرسمية الألمانية.',
        es: 'Las notificaciones oficiales y contratos en Alemania emplean casi siempre la voz pasiva.'
      }
    },
    exercises: [
      {
        id: 'ex_b1_1_lek6_1',
        type: 'multiple_choice',
        instruction: {
          en: 'Transform into passive voice: "Die Bank bucht die Miete ab."',
          fa: 'جمله را به مجهول تبدیل کنید: "Die Bank bucht die Miete ab."',
          prs: 'جمله را به حالت مجهول تبدیل کنید: "Die Bank bucht die Miete ab."',
          tr: 'Cümleyi edilgen yapıya dönüştürünüz.',
          ar: 'حول الجملة إلى صيغة المبني للمجهول.',
          es: 'Transforma a voz pasiva: "Die Bank bucht die Miete ab."'
        },
        prompt: 'Die Miete _____ pünktlich von der Bank abgebucht.',
        options: ['wird', 'ist', 'hat', 'wurde'],
        correctAnswer: 'wird',
        explanation: {
          en: 'Passive Present: "wird" + Partizip II ("abgebucht").',
          fa: 'ساختار مجهول حال: "wird" + صفت مفعولی ("abgebucht").',
          prs: 'فرمول مجهول حال: wird به علاوه شکل Partizip II فعل.',
          tr: 'Şimdiki zaman Passiv kuralı: wird + Partizip II.',
          ar: 'المبني للمجهول في الحاضر يتكون من: wird + Partizip II.',
          es: 'Pasiva de presente: wird + participio (abgebucht).'
        }
      }
    ]
  },
  {
    id: 'b1_1_lek7',
    lektionNumber: 7,
    level: 'B1.1',
    title: 'Kultur, Gesellschaft und Zusammenleben',
    subTitle: 'Vereinsleben, Bürgerengagement und zweiteilige Konnektoren (Deutsch Mussawi B1.1 Lektion 7)',
    topic: 'Vereine in Deutschland, Ehrenamt, Feste und Konnektoren (sowohl... als auch, nicht nur... sondern auch)',
    fotoHoergeschichte: {
      title: 'Foto-Hörgeschichte: Das Sommerfest des Sportvereins in Leipzig',
      imagePrompt: 'A vibrant community sports club summer festival in Leipzig with families, food stands, and volunteers.',
      imageTheme: 'Vereinsleben in Leipzig',
      audioDuration: '03:10',
      transcript: [
        { speaker: 'Vereinsvorsitzender Thomas', text: 'Liebe Vereinsmitglieder, herzlich willkommen zu unserem diesjährigen Sommerfest!' },
        { speaker: 'Samira', text: 'Es ist beeindruckend, wie viele ehrenamtliche Helfer heute mit anpacken.' },
        { speaker: 'Thomas', text: 'Unser Verein bietet sowohl sportliche Aktivitäten als auch einen Ort der Begegnung für Menschen aller Generationen.' },
        { speaker: 'Samira', text: 'Man schließt hier nicht nur neue Freundschaften, sondern lernt auch das Vereinsleben in Deutschland schätzen.' },
        { speaker: 'Thomas', text: 'Genauso ist es! Bürgerschaftliches Engagement ist das Herzstück unserer Gesellschaft.' }
      ],
      summary: {
        en: 'Samira attends a community sports club festival in Leipzig and discovers the importance of volunteering and club life in Germany.',
        fa: 'سمیرا در جشن تابستانی باشگاه ورزشی در لایپزیگ شرکت می‌کند و با اهمیت فعالیت‌های داوطلبانه و انجمن‌ها (Vereine) آشنا می‌شود.',
        prs: 'سمیرا در میله تابستانی یک انجمن ورزشی در لایپزیگ با اهمیت کارهای رضاکارانه آشنا می‌گردد.',
        tr: 'Samira Leipzig\'deki spor kulübü festivalinde Almanya\'daki dernek kültürünü ve gönüllülüğün önemini keşfeder.',
        ar: 'تحضر سميرة مهرجان نادي رياضي مجتمعي في لايبزيغ وتكتشف أهمية العمل التطوعي والحياة الجمعياتية في ألمانيا.',
        es: 'Samira asiste a la fiesta de un club deportivo en Leipzig y descubre el valor del voluntariado y el tejido asociativo alemán.'
      }
    },
    sectionA: {
      title: 'Mussawi A: Sprechen & Dialog',
      focus: 'Hören & Sprechen (Vereinsleben & ehrenamtliches Engagement)',
      description: {
        en: 'Discuss the German club tradition (Vereinskultur), sports, social projects, and community volunteer work.',
        fa: 'گفتگو درباره فرهنگ انجمن‌ها (Verein) در آلمان، ورزش، کارهای داوطلبانه و پیوندهای اجتماعی.',
        prs: 'صحبت در مورد کارهای رضاکارانه و اهمیت عضویت در انجمن‌های اجتماعی در آلمان.',
        tr: 'Almanya\'daki dernek kültürü, gönüllü faaliyetler ve toplumsal katılım üzerine konuşma.',
        ar: 'مناقشة ثقافة الجمعيات في ألمانيا والعمل التطوعي والمشاريع الاجتماعية.',
        es: 'Debate sobre la cultura de asociaciones en Alemania, voluntariado y participación comunitaria.'
      }
    },
    sectionB: {
      title: 'Mussawi B: Wortschatz & Hören',
      focus: 'Grammatik (Zweiteilige Konnektoren: "sowohl... als auch", "nicht nur... sondern auch", "weder... noch")',
      description: {
        en: 'Express complex relationships: positive addition (sowohl... als auch), emphatic addition (nicht nur... sondern auch), and double negation (weder... noch).',
        fa: 'حروف ربط دو بخشی برای پیوند جملات: افزودن مثبت (هم... و هم)، تاکید (نه تنها... بلکه) و نفی دوگانه (نه... و نه).',
        prs: 'کلمات ربط دوگانه برای غنای کلام: نه تنها... بلکه، هم... و هم، نه... و نه.',
        tr: 'İki parçalı bağlaçlar: "sowohl... als auch" (hem... hem de), "nicht nur... sondern auch" (sadece... değil aynı zamanda), "weder... noch" (ne... ne de).',
        ar: 'استخدام الروابط المزدوجة للربط الإيجابي والتأكيد والنفي المزدوج بكفاءة.',
        es: 'Uso de conectores dobles para adición, énfasis y doble negación en oraciones compuestas.'
      }
    },
    sectionC: {
      title: 'Mussawi C: Alltagskommunikation',
      focus: 'Lesen (Vereinssatzung und Mitgliedsantrag)',
      description: {
        en: 'Understand club statutes, membership fees, voting rights, and democratic decision-making in clubs.',
        fa: 'مطالعه اساسنامه انجمن‌ها، حق عضویت سالانه، حق رای در مجمع عمومی و تصمیم‌گیری دموکراتیک.',
        prs: 'فهم اساسنامه انجمن‌ها و شرایط عضویت رسمی.',
        tr: 'Dernek tüzüğünü, üyelik haklarını ve genel kurul kararlarını okuma.',
        ar: 'قراءة اللوائح التأسيسية للجمعيات وشروط العضوية وحقوق التصويت.',
        es: 'Lectura de estatutos asociativos, cuotas de miembros y derechos de voto.'
      }
    },
    sectionD: {
      title: 'Mussawi D: Leseverstehen & Text',
      focus: 'Schreiben (Eine Rede oder Grußwort für ein Jubiläum verfassen)',
      description: {
        en: 'Write congratulatory messages, anniversary greetings, or contributions for club newsletters.',
        fa: 'نگارش پیام تبریک، متن سخنرانی کوتاه یا مطلب برای خبرنامه انجمن.',
        prs: 'نوشتن پیام تبریکی و متن بیانیه برای مجالس اجتماعی.',
        tr: 'Yıldönümü tebrik mesajı veya dernek bülteni için kısa yazı kaleme alma.',
        ar: 'كتابة كلمة تهنئة أو مقال لمجلة الجمعية بمناسبة ذكرى تأسيسية.',
        es: 'Redacción de un discurso o mensaje de felicitación para un aniversario institucional.'
      }
    },
    sectionE: {
      title: 'Mussawi E: Grammatik & Schreiben',
      focus: 'Kultur & Gesellschaft (Traditionen, Nachbarschaftshilfe und Integration)',
      description: {
        en: 'Explore German cultural traditions, festivals, neighborhood initiatives, and social cohesion.',
        fa: 'آشنایی با آداب و رسوم فرهنگی آلمان، جشن‌های محلی، همیاری همسایگان و همگرایی اجتماعی.',
        prs: 'آشنایی با فرهنگ و عنعنات اجتماعی در آلمان و کمک‌های مردمی.',
        tr: 'Alman kültürel gelenekleri, komşuluk dayanışması ve toplumsal uyum.',
        ar: 'استكشاف التقاليد الثقافية الألمانية والمبادرات المجتمعية والتماسك الاجتماعي.',
        es: 'Exploración de tradiciones culturales alemanas, iniciativas vecinales y convivencia.'
      }
    },
    vocabularies: [
      { id: 'b1_1_v7_1', word: 'der Verein', article: 'der', plural: 'die Vereine', ipa: '/fɛɐ̯ˈʔaɪ̯n/', translation: { en: 'registered association / club', fa: 'انجمن رسمی / باشگاه ثبت‌شده', prs: 'انجمن رسمی / کلوب ثبت‌شده', tr: 'dernek / kulüp', ar: 'الجمعية المسجلة / النادي', es: 'asociación registrada / club' } },
      { id: 'b1_1_v7_2', word: 'das Ehrenamt', article: 'das', plural: 'die Ehrenämter', ipa: '/ˈeːʁənˌʔamt/', translation: { en: 'voluntary work / honorary post', fa: 'فعالیت داوطلبانه و بدون چشمداشت مالی', prs: 'کار افتخاری و رضاکارانه', tr: 'gönüllü görev', ar: 'العمل التطوعي الشرفي', es: 'voluntariado / cargo honorífico' } },
      { id: 'b1_1_v7_3', word: 'das Engagement', article: 'das', plural: 'die Engagements', ipa: '/ɑ̃ɡaʒəˈmɑ̃ː/', translation: { en: 'commitment / social engagement', fa: 'مشارکت اجتماعی و تعهد شهروندی', prs: 'سهم‌گیری فعال مدنی و اجتماعی', tr: 'toplumsal katılım / özveri', ar: 'الالتزام والمشاركة المدنية', es: 'compromiso cívico y social' } },
      { id: 'b1_1_v7_4', word: 'die Satzung', article: 'die', plural: 'die Satzungen', ipa: '/ˈzatsʊŋ/', translation: { en: 'statute / bylaws', fa: 'اساسنامه رسمی نهاد یا شرکت', prs: 'اساسنامه و اصول‌نامه رسمی', tr: 'tüzük / ana sözleşme', ar: 'النظام الأساسي / اللائحة التنفيذية', es: 'estatuto / reglamento interno' } },
      { id: 'b1_1_v7_5', word: 'die Mitgliedschaft', article: 'die', plural: 'die Mitgliedschaften', ipa: '/ˈmɪtɡliːtʃaft/', translation: { en: 'membership', fa: 'عضویت رسمی در انجمن یا نهاد', prs: 'حق عضویت رسمی', tr: 'üyelik', ar: 'العضوية الرسمية', es: 'membresía / condición de socio' } }
    ],
    videoClip: {
      title: 'Das Vereinsleben in Deutschland: Gemeinsam aktiv sein',
      scenario: 'Ein Dokumentarbericht über das bürgerschaftliche Engagement in lokalen Vereinen.',
      germanTranscript: [
        'Moderator: Über 600.000 eingetragene Vereine prägen das gesellschaftliche Leben in Deutschland.',
        'Freiwilliger: Im Verein zählt nicht, woher man kommt, sondern dass man gemeinsam an einem Ziel arbeitet.',
        'Moderator: Ob Feuerwehr, Sport oder Kultur – Vereine stärken den Zusammenhalt nachhaltig.'
      ],
      translatedTranscript: [
        { en: 'Host: Over 600,000 registered associations shape social life in Germany.', fa: 'مجری: بیش از ۶۰۰ هزار انجمن ثبت‌شده، حیات اجتماعی در آلمان را شکل می‌دهند.', prs: 'گرداننده: بیشتر از ۶۰۰ هزار انجمن رسمی، زندگی اجتماعی در آلمان را غنامند ساخته‌اند.', tr: 'Sunucu: 600.000\'den fazla kayıtlı dernek Almanya\'daki toplumsal yaşamı şekillendiriyor.', ar: 'المقدم: أكثر من 600 ألف جمعية مسجلة تشكل ملامح الحياة المجتمعية في ألمانيا.', es: 'Presentador: Más de 600.000 asociaciones registradas dan forma a la vida social en Alemania.' }
      ]
    },
    examTip: {
      standard: 'B1 (Goethe & telc Zertifikat B1)',
      module: 'Sprechen Teil 3 & Schreiben',
      tip: {
        en: 'Using two-part connectors like "nicht nur... sondern auch" or "sowohl... als auch" is considered the gold standard for achieving the highest score bracket in B1 writing and oral exams.',
        fa: 'استفاده از حروف ربط دوتایی مثل "nicht nur... sondern auch" کلید طلایی کسب حداکثر نمره در بخش نوشتن و صحبت کردن B1 است.',
        prs: 'استفاده از کلمات ربط دوگانه در امتحان B1 باعث کسب نمره بسیار عالی می‌گردد.',
        tr: 'İki parçalı bağlaçları (nicht nur... sondern auch) kullanmak B1 sınavında en yüksek puan dilimine ulaşmayı sağlar.',
        ar: 'استخدام الروابط المزدوجة هو المعيار الذهبي للحصول على أعلى الدرجات في اختباري التحدث والكتابة لمستوى B1.',
        es: 'El uso de conectores dobles garantiza la puntuación más alta en la expresión escrita y oral de B1.'
      }
    },
    exercises: [
      {
        id: 'ex_b1_1_lek7_1',
        type: 'fill_blank',
        instruction: {
          en: 'Complete the two-part connector pair.',
          fa: 'جفت حرف ربط دو بخشی را کامل کنید.',
          prs: 'جفت کلمه ربط دوگانه را تکمیل نمایید.',
          tr: 'İki parçalı bağlacın eksik kısmını tamamlayınız.',
          ar: 'أكمل الجزء الثاني من الرابط المزدوج.',
          es: 'Completa la pareja de conectores dobles.'
        },
        prompt: 'Unser Verein bietet nicht nur sportliche Aktivitäten, _____ auch kulturelle Veranstaltungen an.',
        options: ['sondern', 'aber', 'oder', 'denn'],
        correctAnswer: 'sondern',
        explanation: {
          en: 'The pair is always: "nicht nur ... sondern auch" (not only ... but also).',
          fa: 'جفت این حرف ربط همواره "nicht nur ... sondern auch" (نه تنها ... بلکه همچنین) است.',
          prs: 'ترکیب درست همیشه: nicht nur ... sondern auch است.',
          tr: 'Doğru bağlaç kalıbı: "nicht nur ... sondern auch".',
          ar: 'التعبير المزدوج الصحيح هو دائماً: "nicht nur ... sondern auch".',
          es: 'La estructura fija es siempre: "nicht nur ... sondern auch".'
        }
      }
    ]
  }
];
