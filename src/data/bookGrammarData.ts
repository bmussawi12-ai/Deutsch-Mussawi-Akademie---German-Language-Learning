import { GrammarRule } from '../types';

export const BOOK_GRAMMAR_RULES: GrammarRule[] = [
  // ================= A1.1 (Lektion 1 - 7) =================
  {
    id: 'a1_1_lek1_verb_pos2',
    level: 'A1.1',
    lektion: 1,
    germanTitle: 'Satzbau: Verb an Position II (Aussagesatz & W-Frage)',
    formula: 'Pos 1 (Subjekt/Angabe) + VERB (konjugiert an Pos 2) + (...) || W-Wort + VERB (Pos 2) + Subjekt',
    explanation: {
      prs: 'در زبان آلمانی در جملات خبری و سوالات با کلمه پرسشی (W-Fragen)، فعل صرف‌شده همیشه در جایگاه دوم قرار می‌گیرد.',
      fa: 'در جمله خبری و پرسشی W-Frage، فعل صرف‌شده همواره در جایگاه دوم (Position II) است.',
      en: 'In German declarative sentences and W-questions, the conjugated verb always stands in position II.',
      ar: 'في الجملة الخبرية وسؤال W-Frage، يقع الفعل المصرف دائماً في المرتبة الثانية.',
      tr: 'Almanca düz cümlelerde ve W-sorularında çekimli fiil daima 2. konumda yer alır.',
      es: 'En oraciones declarativas y preguntas con partícula interrogativa, el verbo conjugado va en posición II.'
    },
    category: 'sentence_structure',
    examples: [
      {
        german: 'Ich heiße Sayed und ich komme aus Kabul.',
        formulaBreakdown: 'Ich (S) + heiße (V an Pos 2) + Sayed || ich (S) + komme (V an Pos 2) + aus Kabul',
        literalTranslation: {
          prs: 'من نامیده می‌شوم سید و من می‌آیم از کابل.',
          fa: 'من نامیده می‌شوم سید و من می‌آیم از کابل.',
          en: 'I am called Sayed and I come from Kabul.',
          ar: 'اسمي سيد وأنا آتي من كابل.',
          tr: 'Benim adım Sayed ve ben Kabil\'den geliyorum.',
          es: 'Me llamo Sayed y vengo de Kabul.'
        },
        fluentTranslation: {
          prs: 'اسم من سید است و اهل کابل هستم.',
          fa: 'من سید نام دارم و اهل کابل هستم.',
          en: 'My name is Sayed and I come from Kabul.',
          ar: 'اسمي سيد وأنا من كابل.',
          tr: 'Adım Sayed ve Kabil\'denim.',
          es: 'Me llamo Sayed y soy de Kabul.'
        }
      }
    ]
  },
  {
    id: 'a1_1_lek2_sein_haben_possessiv',
    level: 'A1.1',
    lektion: 2,
    germanTitle: 'Possessivartikel im Nominativ & Verben sein/haben',
    formula: 'mein/dein (Mask./Neutr.) | meine/deine (Fem./Plur.) || ich bin/habe, du bist/hast',
    explanation: {
      prs: 'برای بیان مالکیت از آرتیکل ملکی استفاده می‌شود: برای مذکر و خنثی بدون پسوند (mein Vater, mein Kind) و برای مؤنث و جمع با پسوند -e (meine Mutter, meine Kinder).',
      fa: 'آرتیکل‌های ملکی برای مذکر/خنثی بدون e و برای مؤنث و جمع دارای پسوند e هستند.',
      en: 'Possessive articles in nominative take -e for feminine and plural, but no ending for masculine and neuter.',
      ar: 'أدوات الملكية في حالة الرفع تأخذ اللاحقة -e مع المؤنث والجمع، وبدون لاحقة مع المذكر والمحايد.',
      tr: 'Yalın halde iyelik zamirleri dişil ve çoğulda -e eki alır, eril ve nötrde ek almaz.',
      es: 'Los artículos posesivos en nominativo llevan -e para femenino y plural, sin terminación para masculino y neutro.'
    },
    category: 'verb_conjugation',
    examples: [
      {
        german: 'Das ist mein Bruder und das ist meine Schwester.',
        formulaBreakdown: 'mein (Maskulin Nominativ) + Bruder | meine (Feminin Nominativ) + Schwester',
        literalTranslation: {
          prs: 'این است برادر من و این است خواهر من.',
          fa: 'این است برادر من و این است خواهر من.',
          en: 'This is my brother and this is my sister.',
          ar: 'هذا أخي وهذه أختي.',
          tr: 'Bu benim erkek kardeşim ve bu benim kız kardeşim.',
          es: 'Este es mi hermano y esta es mi hermana.'
        },
        fluentTranslation: {
          prs: 'این برادرم است و این خواهرم است.',
          fa: 'این برادر من است و این خواهر من است.',
          en: 'This is my brother and this is my sister.',
          ar: 'هذا أخي وهذه أختي.',
          tr: 'Bu benim erkek kardeşim ve bu da kız kardeşim.',
          es: 'Este es mi hermano y esta es mi hermana.'
        }
      }
    ]
  },
  {
    id: 'a1_1_lek3_akkusativ',
    level: 'A1.1',
    lektion: 3,
    germanTitle: 'Der Akkusativ (Direktes Objekt: den / einen / keinen)',
    formula: 'Subjekt + Verb + AKKUSATIV: den/einen/keinen (Mask.) | das/ein (Neutr.) | die/eine (Fem.)',
    explanation: {
      prs: 'در حالت مفعولی مستقیم (Akkusativ) تنها آرتیکل اسم‌های مذکر تغییر می‌کند: der تبدیل به den و ein تبدیل به einen و kein تبدیل به keinen می‌شود.',
      fa: 'در حالت آکوزاتیو فقط اسامی مذکر تغییر می‌کنند (der -> den, ein -> einen). اسامی مؤنث و خنثی تغییر نمی‌کنند.',
      en: 'In the accusative case (direct object), only masculine articles change: der -> den, ein -> einen, kein -> keinen.',
      ar: 'في حالة النصب (Akkusativ)، تتغير فقط أدوات المذكر: der تصبح den، وein تصبح einen.',
      tr: 'İsmin -i halinde (Akkusativ) sadece eril artikeller değişir: der -> den, ein -> einen.',
      es: 'En acusativo solo cambian los artículos masculinos: der pasa a den y ein a einen.'
    },
    category: 'cases',
    examples: [
      {
        german: 'Ich kaufe einen Apfel (m), ein Brot (n) und eine Banane (f).',
        formulaBreakdown: 'kaufe (V) + einen Apfel (Akk Mask) + ein Brot (Akk Neutr) + eine Banane (Akk Fem)',
        literalTranslation: {
          prs: 'من می‌خرم یک سیب، یک نان و یک کیله (موز).',
          fa: 'من می‌خرم یک سیب، یک نان و یک موز.',
          en: 'I buy an apple, a bread, and a banana.',
          ar: 'أنا أشتري تفاحة وخبزاً وموزة.',
          tr: 'Ben bir elma, bir ekmek ve bir muz satın alıyorum.',
          es: 'Compro una manzana, un pan y un plátano.'
        },
        fluentTranslation: {
          prs: 'من یک سیب، یک قرص نان و یک کیله خریدم.',
          fa: 'من یک سیب، یک نان و یک موز می‌خرم.',
          en: 'I am buying an apple, bread, and a banana.',
          ar: 'أشتري تفاحة وخبزاً وموزة.',
          tr: 'Bir elma, bir ekmek ve bir muz alıyorum.',
          es: 'Compro una manzana, pan y un plátano.'
        }
      }
    ]
  },
  {
    id: 'a1_1_lek4_verneinung',
    level: 'A1.1',
    lektion: 4,
    germanTitle: 'Verneinung: kein / keine (Nomen) vs. nicht (Verben & Adjektive)',
    formula: 'kein/keine + Nomen ohne Artikel || Verb / Adjektiv / Satzende + nicht',
    explanation: {
      prs: 'برای منفی کردن اسامی دارای آرتیکل نامعین یا بدون آرتیکل از kein/keine استفاده می‌شود. برای منفی کردن افعال، صفت‌ها یا کل جمله از nicht استفاده می‌کنیم.',
      fa: 'برای نفی اسامی نکره از kein/keine و برای نفی افعال، صفت‌ها و قیود از nicht استفاده می‌شود.',
      en: 'Use kein/keine to negate nouns with indefinite or zero articles. Use nicht to negate verbs, adjectives, and definite nouns.',
      ar: 'تستخدم kein/keine لنفي الأسماء النكرة، بينما تستخدم nicht لنفي الأفعال والصفات.',
      tr: 'Belirsiz isimleri olumsuz yapmak için kein/keine, fiil ve sıfatlar için nicht kullanılır.',
      es: 'Usa kein/keine para negar sustantivos con artículo indefinido y nicht para verbos y adjetivos.'
    },
    category: 'sentence_structure',
    examples: [
      {
        german: 'Ich habe keinen Balkon und die Wohnung ist nicht groß.',
        formulaBreakdown: 'keinen Balkon (Negation Nomen Mask) + ist nicht groß (Negation Adjektiv)',
        literalTranslation: {
          prs: 'من ندارم بالکنی و خانه نیست بزرگ.',
          fa: 'من بالکنی ندارم و آپارتمان بزرگ نیست.',
          en: 'I have no balcony and the apartment is not big.',
          ar: 'ليس لدي شرفة والشقة ليست كبيرة.',
          tr: 'Balkonum yok ve daire büyük değil.',
          es: 'No tengo balcón y el piso no es grande.'
        },
        fluentTranslation: {
          prs: 'من بالکن ندارم و آپارتمان هم بزرگ نیست.',
          fa: 'من بالکن ندارم و آپارتمان هم بزرگ نیست.',
          en: 'I don\'t have a balcony and the apartment is not big.',
          ar: 'لا أملك شرفة والشقة ليست كبيرة.',
          tr: 'Balkonum yok ve ev büyük değil.',
          es: 'No tengo balcón y el piso no es grande.'
        }
      }
    ]
  },
  {
    id: 'a1_1_lek5_trennbare_verben',
    level: 'A1.1',
    lektion: 5,
    germanTitle: 'Trennbare Verben & Temporale Präpositionen (um, am, im)',
    formula: 'S + Stamm-Verb (Pos 2) + (...) + *Präfix (am Satzende)* || um (Uhrzeit) | am (Wochentag) | im (Monat)',
    explanation: {
      prs: 'در افعال پیشوندی جداشدنی (مانند aufstehen, einkaufen)، بخش اصلی فعل در جایگاه دوم صرف می‌شود و پیشوند (Präfix) به آخرین کلمه جمله منتقل می‌شود.',
      fa: 'در افعال جداشدنی، بخش صرف‌شونده در جایگاه ۲ و پیشوند به انتهای جمله می‌رود. حروف اضافه زمانی: um برای ساعت، am برای روز، im برای ماه و فصل.',
      en: 'Separable prefix verbs split in simple tenses: the base verb sits at position 2, and the prefix moves to the very end.',
      ar: 'في الأفعال القابلة للانفصال، يصرف أصل الفعل في المرتبة الثانية وتوضع البادئة في نهاية الجملة تماماً.',
      tr: 'Ayrılabilen fiillerde kök fiil 2. pozisyonda çekimlenir, ön ek ise cümlenin en sonuna gider.',
      es: 'En los verbos separables, la raíz se conjuga en posición 2 y el prefijo se coloca al final de la oración.'
    },
    category: 'verbs',
    examples: [
      {
        german: 'Sayed steht jeden Tag um 7:00 Uhr auf.',
        formulaBreakdown: 'steht (Stammverb an Pos 2) + um 7:00 Uhr (Uhrzeit) + auf (Präfix am Satzende)',
        literalTranslation: {
          prs: 'سید برمی‌خیزد هر روز ساعت ۷:۰۰ بالا.',
          fa: 'سید بلند می‌شود هر روز ساعت ۷:۰۰.',
          en: 'Sayed stands every day at 7:00 o\'clock up.',
          ar: 'يستيقظ سيد كل يوم في الساعة السابعة صباحاً.',
          tr: 'Sayed her gün saat 7:00\'de ayağa kalkar.',
          es: 'Sayed se levanta todos los días a las 7:00.'
        },
        fluentTranslation: {
          prs: 'سید هر روز ساعت ۷ صبح بیدار می‌شود.',
          fa: 'سید هر روز ساعت ۷ صبح بیدار می‌شود.',
          en: 'Sayed wakes up every day at 7:00 AM.',
          ar: 'يستيقظ سيد كل يوم عند السابعة صباحاً.',
          tr: 'Sayed her gün sabah saat 7:00\'de uyanır.',
          es: 'Sayed se despierta todos los días a las 7:00 de la mañana.'
        }
      }
    ]
  },
  {
    id: 'a1_1_lek6_modalverb_koennen',
    level: 'A1.1',
    lektion: 6,
    germanTitle: 'Das Modalverb "können" (Fähigkeit & Satzklammer)',
    formula: 'Subjekt + KÖNNEN (Pos 2) + (...) + *Infinitiv (am Satzende)*',
    explanation: {
      prs: 'فعل کمکی können (توانستن) در جایگاه دوم صرف می‌شود و فعل اصلی جمله به صورت مصدر دست‌نخورده در انتهای جمله قرار می‌گیرد (قانون قلاب فعل / Satzklammer).',
      fa: 'فعل وجهی können در موقعیت دوم صرف شده و فعل اصلی به صورت مصدر به انتهای جمله می‌رود.',
      en: 'The modal verb "können" takes position 2, while the main action verb appears in the infinitive form at the end.',
      ar: 'يصرف الفعل المساعد können في المرتبة الثانية ويذهب الفعل الأصلي في صيغة المصدر إلى نهاية الجملة.',
      tr: '"können" modal fiili 2. konumda çekimlenir, asıl fiil yalın halde cümlenin en sonuna gider.',
      es: 'El verbo modal "können" se conjuga en posición 2 y el verbo principal va en infinitivo al final.'
    },
    category: 'modal_verbs',
    examples: [
      {
        german: 'Sayed kann sehr gut Fußball spielen und schwimmen.',
        formulaBreakdown: 'kann (Modalverb Pos 2) + sehr gut Fußball + spielen und schwimmen (Infinitiv am Ende)',
        literalTranslation: {
          prs: 'سید می‌تواند بسیار خوب فوتبال بازی کند و آب‌بازی کند.',
          fa: 'سید می‌تواند بسیار خوب فوتبال بازی کند و شنا کند.',
          en: 'Sayed can very well soccer play and swim.',
          ar: 'يستطيع سيد لعب كرة القدم والسباحة بشكل جيد جداً.',
          tr: 'Sayed çok iyi futbol oynayabilir ve yüzebilir.',
          es: 'Sayed puede jugar muy bien al fútbol y nadar.'
        },
        fluentTranslation: {
          prs: 'سید می‌تواند خیلی خوب فوتبال بازی کند و شنا نماید.',
          fa: 'سید می‌تواند خیلی خوب فوتبال بازی کند و شنا کند.',
          en: 'Sayed can play soccer and swim very well.',
          ar: 'يجيد سيد لعب كرة القدم والسباحة ببراعة.',
          tr: 'Sayed çok iyi futbol oynayabiliyor ve yüzebiliyor.',
          es: 'Sayed sabe jugar muy bien al fútbol y nadar.'
        }
      }
    ]
  },
  {
    id: 'a1_1_lek7_wollen_muessen',
    level: 'A1.1',
    lektion: 7,
    germanTitle: 'Die Modalverben "wollen" (Wille) und "müssen" (Pflicht)',
    formula: 'Subjekt + wollen/müssen (konjugiert an Pos 2) + (...) + *Infinitiv am Satzende*',
    explanation: {
      prs: 'فعل wollen بیانگر قصد و اراده (خواستن) و müssen بیانگر ضرورت و اجبار قطعی (باید) است. صیغه اول شخص (ich) و سوم شخص (er/sie/es) در افعال وجهی یکسان است و پسوند نمی‌گیرد.',
      fa: 'افعال wollen (خواستن/اراده) و müssen (باید/اجبار) با ساختار قلاب فعل به همراه مصدر در انتهای جمله به کار می‌روند.',
      en: 'The modal verbs "wollen" (intent) and "müssen" (necessity) push the main infinitive to the sentence end.',
      ar: 'يعبر wollen عن الإرادة بينما يعبر müssen عن الإلزام والضرورة، ويأتي الفعل الأساسي مصدراً في النهاية.',
      tr: '"wollen" istek, "müssen" zorunluluk bildirir ve asıl fiili cümlenin sonuna mastar olarak iter.',
      es: '"wollen" expresa voluntad y "müssen" obligación inexcusable, enviando el infinitivo al final de la frase.'
    },
    category: 'modal_verbs',
    examples: [
      {
        german: 'Ich muss heute fleißig lernen, weil ich die Prüfung bestehen will.',
        formulaBreakdown: 'muss (Pos 2) + lernen (Infinitiv Ende) || will (Pos 2 im Nebensatz)',
        literalTranslation: {
          prs: 'من باید امروز با پشتکار بیاموزم، زیرا من می‌خواهم امتحان را سپری کنم.',
          fa: 'من باید امروز با پشتکار درس بخوانم، زیرا می‌خواهم امتحان را قبول شوم.',
          en: 'I must today diligently learn, because I pass the exam want.',
          ar: 'يجب أن أدرس باجتهاد اليوم لأني أريد النجاح في الامتحان.',
          tr: 'Bugün çok çalışmalıyım çünkü sınavı geçmek istiyorum.',
          es: 'Tengo que estudiar mucho hoy porque quiero aprobar el examen.'
        },
        fluentTranslation: {
          prs: 'من امروز باید حسابی درس بخوانم چون می‌خواهم در امتحان موفق شوم.',
          fa: 'من امروز باید با جدیت درس بخوانم چون می‌خواهم در امتحان قبول شوم.',
          en: 'I have to study diligently today because I want to pass the exam.',
          ar: 'عليّ أن أدرس بجد اليوم لأنني أريد اجتياز الامتحان.',
          tr: 'Sınavı geçmek istediğim için bugün gayretle çalışmalıyım.',
          es: 'Tengo que estudiar con esmero hoy porque quiero aprobar el examen.'
        }
      }
    ]
  },

  // ================= A1.2 (Lektion 8 - 14) =================
  {
    id: 'a1_2_lek8_duerfen',
    level: 'A1.2',
    lektion: 8,
    germanTitle: 'Das Modalverb "dürfen" (Erlaubnis und Verbot)',
    formula: 'dürfen (Pos 2) + (...) + Infinitiv || nicht dürfen = Verbot (ممنوعیت قطعی)',
    explanation: {
      prs: 'فعل dürfen اجازه داشتن را نشان می‌دهد. وقتی با nicht یا kein بیاید به معنای ممنوعیت قطعی و قانونی است (man darf hier nicht rauchen = سیگار کشیدن اینجا ممنوع است).',
      fa: 'فعل dürfen برای اجازه داشتن است. حالت منفی آن (nicht dürfen) نشانه ممنوعیت قطعی قانونی است.',
      en: '"dürfen" expresses permission. Negated with "nicht" or "kein", it indicates strict prohibition.',
      ar: 'يعبر dürfen عن الإذن والسماح، وعند نفيه بـ nicht يدل على الحظر والمنع القانوني الصارم.',
      tr: '"dürfen" izin bildirir; olumsuz hali (nicht dürfen) ise kesin yasak ifade eder.',
      es: '"dürfen" indica permiso. En forma negativa expresa prohibición taxativa.'
    },
    category: 'modal_verbs',
    examples: [
      {
        german: 'Hier darf man nicht parken. Das ist verboten.',
        formulaBreakdown: 'darf (dürfen Pos 2) + man + nicht parken (Infinitiv am Satzende)',
        literalTranslation: {
          prs: 'اینجا اجازه ندارد شخص پارک کند. این است ممنوع.',
          fa: 'اینجا کسی اجازه پارک ندارد. این ممنوع است.',
          en: 'Here may one not park. That is forbidden.',
          ar: 'لا يُسمح بالوقوف هنا. هذا ممنوع.',
          tr: 'Buraya park edilemez. Bu yasaktır.',
          es: 'Aquí no se puede aparcar. Está prohibido.'
        },
        fluentTranslation: {
          prs: 'اینجا پارک کردن موتر ممنوع است و اجازه پارک ندارید.',
          fa: 'اینجا پارک کردن ممنوع است و اجازه توقف ندارید.',
          en: 'You are not allowed to park here. It is forbidden.',
          ar: 'ممنوع ركن السيارات هنا. هذا التصرف محظور.',
          tr: 'Buraya park etmek yasaktır.',
          es: 'No está permitido aparcar aquí. Está prohibido.'
        }
      }
    ]
  },
  {
    id: 'a1_2_lek9_dativ_mit',
    level: 'A1.2',
    lektion: 9,
    germanTitle: 'Der Dativ nach der Präposition "mit" (Verkehrsmittel)',
    formula: 'mit + DATIV: mit dem (Mask./Neutr.) | mit der (Fem.) | mit den (+ -n) (Plur.)',
    explanation: {
      prs: 'حرف اضافه mit همیشه و بدون استثنا متمم داتیو می‌گیرد. برای وسایل نقلیه: mit dem Bus (m), mit dem Zug (m), mit dem Fahrrad (n), mit der U-Bahn (f).',
      fa: 'حرف اضافه mit همواره با حالت داتیو می‌آید: dem برای مذکر/خنثی، der برای مؤنث و den (+n) برای جمع.',
      en: 'The preposition "mit" always governs the Dative case: dem (masc/neut), der (fem), den + -n (plural).',
      ar: 'حرف الجر "mit" يجر الاسم دائماً (Dativ): dem للمذكر والمحايد، der للمؤنث، den للجمع مع إضافة n للاسم.',
      tr: '"mit" edatı daima Dativ gerektirir: dem (eril/nötr), der (dişil), den (çoğul).',
      es: 'La preposición "mit" rige siempre dativo: dem para masculino y neutro, der para femenino.'
    },
    category: 'prepositions',
    examples: [
      {
        german: 'Sayed fährt jeden Morgen mit dem Bus und mit der U-Bahn zur Arbeit.',
        formulaBreakdown: 'mit dem Bus (Dativ Maskulin) + mit der U-Bahn (Dativ Feminin)',
        literalTranslation: {
          prs: 'سید می‌رود هر صبح با بس و با قطار شهری به کار.',
          fa: 'سید هر صبح با اتوبوس و مترو به محل کار می‌رود.',
          en: 'Sayed travels every morning with the bus and with the subway to work.',
          ar: 'يسافر سيد كل صباح بالحافلة وبالمترو إلى العمل.',
          tr: 'Sayed her sabah otobüsle ve metroyla işe gidiyor.',
          es: 'Sayed va cada mañana en autobús y en metro al trabajo.'
        },
        fluentTranslation: {
          prs: 'سید هر روز صبح با اتوبوس و مترو به سر کار می‌رود.',
          fa: 'سید هر روز صبح با اتوبوس و مترو به سر کار می‌رود.',
          en: 'Sayed takes the bus and the subway to work every morning.',
          ar: 'يذهب سيد كل صباح بالحافلة والمترو إلى العمل.',
          tr: 'Sayed her sabah işe otobüs ve metro ile gider.',
          es: 'Sayed va al trabajo todas las mañanas en autobús y metro.'
        }
      }
    ]
  },
  {
    id: 'a1_2_lek10_imperativ_sollen',
    level: 'A1.2',
    lektion: 10,
    germanTitle: 'Der Imperativ (Befehlsform) & das Modalverb "sollen"',
    formula: 'du: Trink(e)! | ihr: Trinkt! | Sie: Trinken Sie! || sollen (Pos 2) = Rat eines Dritten',
    explanation: {
      prs: 'در حالت امری مفرد خودمانی، ضمیر du و پسوند -st حذف می‌شود (Komm!). برای توصیه از طرف پزشک یا فرد دیگر از فعل sollen استفاده می‌شود.',
      fa: 'در حالت امری مفرد خودمانی du و st حذف می‌شوند (du trinkst -> Trink!). فعل sollen برای انتقال توصیه دیگران مانند دکتر استفاده می‌شود.',
      en: 'The informal imperative drops "du" and "-st". "sollen" conveys advice or orders originating from an external party.',
      ar: 'في أمر المفرد غير الرسمي يُحذف الضمير du واللاحقة st. ويعبر sollen عن نصيحة صادرة من طرف ثالث كطبيب.',
      tr: 'Samimi tekil emirde "du" zamiri ve "-st" eki atılır: Trink! "sollen" ise başkasının tavsiyesini aktarır.',
      es: 'En el imperativo informal singular se elimina el pronombre du y la terminación -st.'
    },
    category: 'verbs',
    examples: [
      {
        german: 'Trinken Sie viel Tee und bleiben Sie bitte im Bett!',
        formulaBreakdown: 'Trinken Sie (Imperativ höflich) + und + bleiben Sie (Imperativ höflich)',
        literalTranslation: {
          prs: 'بنوشید شما چای زیاد و بمانید شما لطفاً در بستر!',
          fa: 'بنوشید شما چای زیاد و بمانید شما لطفاً در تخت!',
          en: 'Drink you plenty of tea and stay you please in bed!',
          ar: 'اشرب الكثير من الشاي وابقَ في السرير من فضلك!',
          tr: 'Bol çay içiniz ve lütfen yatakta kalınız!',
          es: 'Beba mucho té y quédese por favor en la cama.'
        },
        fluentTranslation: {
          prs: 'لطفاً چای فراوان بنوشید و در رختخواب استراحت کنید.',
          fa: 'لطفاً چای فراوان بنوشید و در رختخواب استراحت کنید.',
          en: 'Please drink plenty of tea and stay in bed.',
          ar: 'يُرجى شرب الكثير من الشاي وملازمة الفراش.',
          tr: 'Lütfen bol bitki çayı için ve yatakta dinlenin.',
          es: 'Por favor, beba mucho té y descanse en cama.'
        }
      }
    ]
  },
  {
    id: 'a1_2_lek11_dativ_praepositionen',
    level: 'A1.2',
    lektion: 11,
    germanTitle: 'Dativ-Präpositionen: mit, nach, zu, bei, von, aus',
    formula: 'aus / bei / mit / nach / seit / von / zu + DATIV [dem (m/n), der (f), den + -n (pl)]',
    explanation: {
      prs: 'این حروف اضافه همیشه حالت داتیو می‌خواهند: aus (از درون)، bei (پیش/نزد)، mit (با)، nach (به سوی شهر/کشور)، von (از طرف)، zu (به سمت شخص/مکان).',
      fa: 'حروف اضافه aus, bei, mit, nach, von, zu همواره حالت داتیو می‌طلبند: dem برای مذکر و خنثی، der برای مؤنث.',
      en: 'The directional prepositions aus, bei, mit, nach, seit, von, zu strictly demand the Dative case.',
      ar: 'حروف الجر (aus, bei, mit, nach, von, zu) تتطلب دائماً حالة المجرور (Dativ).',
      tr: 'aus, bei, mit, nach, von, zu edatları daima Dativ gerektirir.',
      es: 'Las preposiciones aus, bei, mit, nach, von, zu rigen obligatoriamente caso dativo.'
    },
    category: 'prepositions',
    examples: [
      {
        german: 'Ich gehe zu der Ärztin (zur Ärztin) und danach fahre ich nach Hause.',
        formulaBreakdown: 'zu + der Ärztin (Dativ Feminin) + fahre nach Hause (Richtung)',
        literalTranslation: {
          prs: 'من می‌روم به نزد داکتر و سپس می‌روم به سوی خانه.',
          fa: 'من می‌روم پیش پزشک و بعد از آن می‌روم به خانه.',
          en: 'I go to the doctor and afterwards drive I home.',
          ar: 'أنا أذهب إلى الطبيبة وبعد ذلك أعود إلى البيت.',
          tr: 'Doktora gidiyorum ve ardından eve gidiyorum.',
          es: 'Voy a la médica y después me voy a casa.'
        },
        fluentTranslation: {
          prs: 'من پیش خانم داکتر می‌روم و بعد از آن راهی خانه می‌شوم.',
          fa: 'من پیش خانم دکتر می‌روم و سپس به خانه برمی‌گردم.',
          en: 'I am going to the doctor and heading home afterwards.',
          ar: 'أنا ذاهب إلى الطبيبة ثم سأعود إلى المنزل.',
          tr: 'Doktora gidiyorum, ardından da eve geçeceğim.',
          es: 'Voy a la consulta de la médica y después me voy a casa.'
        }
      }
    ]
  },
  {
    id: 'a1_2_lek12_demonstrativ_dativverben',
    level: 'A1.2',
    lektion: 12,
    germanTitle: 'Demonstrativpronomen (dieser/diese/dieses) & Verben mit Dativ',
    formula: 'dieser (m) / dieses (n) / diese (f/pl) || gefallen, passen, stehen + DATIV (mir, dir, ihm)',
    explanation: {
      prs: 'ضمایر اشاره (dieser, diese, dieses) پایانه آرتیکل‌های معین را می‌گیرند. افعال لباس و نظرخواهی (gefallen, passen, stehen) مفعول داتیو می‌گیرند: Das Hemd steht dir gut (این پیراهن به تو می‌آید).',
      fa: 'ضمایر اشاره (dieser/dieses/diese) مانند آرتیکل معین صرف می‌شوند. افعال gefallen (خوش آمدن)، passen (اندازه بودن) و stehen (برازنده بودن) متمم داتیو می‌گیرند.',
      en: 'Demonstrative pronouns take definite article endings. The verbs gefallen, passen, and stehen require dative person objects.',
      ar: 'تأخذ أسماء الإشارة نهايات أدوات التعريف. وتتطلب أفعال الإعجاب والمقاس (gefallen, passen) مفعولاً به في Dativ.',
      tr: 'İşaret zamirleri belirli artikel eklerini alır. gefallen, passen, stehen fiilleri Dativ kişi zamiri alır.',
      es: 'Los demostrativos toman las desinencias del artículo determinado. Los verbos gefallen, passen y stehen rigen dativo.'
    },
    category: 'cases',
    examples: [
      {
        german: 'Dieser Mantel gefällt mir sehr gut und er passt dir perfekt.',
        formulaBreakdown: 'Dieser Mantel (Nom Mask) + gefällt mir (Dativ) + passt dir (Dativ)',
        literalTranslation: {
          prs: 'این بالاپوش خوش می‌آید به من و او اندازه است به تو عالی.',
          fa: 'این پالتو خوش می‌آید به من و او اندازه است برای تو عالی.',
          en: 'This coat pleases me very well and it fits you perfectly.',
          ar: 'هذا المعطف يعجبني جداً وهو يناسب مقاسك تماماً.',
          tr: 'Bu palto çok hoşuma gitti ve sana tam uyuyor.',
          es: 'Este abrigo me gusta mucho y te queda perfecto.'
        },
        fluentTranslation: {
          prs: 'این پالتو خیلی به دلم نشسته و اندازه تو هم کاملاً مناسب است.',
          fa: 'از این پالتو خیلی خوشم می‌آید و کاملاً اندازه تو است.',
          en: 'I really like this coat and it fits you perfectly.',
          ar: 'يعجبني هذا المعطف كثيراً ومقاسه ملائم لك تماماً.',
          tr: 'Bu paltoyu çok beğendim, sana da tam oldu.',
          es: 'Me gusta mucho este abrigo y te queda a la perfección.'
        }
      }
    ]
  },
  {
    id: 'a1_2_lek13_personalpronomen_dativ',
    level: 'A1.2',
    lektion: 13,
    germanTitle: 'Personalpronomen im Dativ (mir, dir, ihm, ihr, uns, euch, ihnen)',
    formula: 'ich -> mir | du -> dir | er/es -> ihm | sie -> ihr | wir -> uns | ihr -> euch | sie/Sie -> ihnen/Ihnen',
    explanation: {
      prs: 'ضمایر شخصی در حالت داتیو: mir (به من)، dir (به تو)، ihm (به او مذکر/خنثی)، ihr (به او مؤنث)، uns (به ما)، euch (به شماها)، ihnen (به آنها) و Ihnen (به جناب‌عالی).',
      fa: 'ضمایر شخصی داتیو: mir (به من)، dir (به تو)، ihm (به او)، ihr (به او زن)، uns (به ما)، euch (به شما)، ihnen/Ihnen.',
      en: 'Personal pronouns in the dative case replace indirect objects: mir, dir, ihm, ihr, uns, euch, ihnen, Ihnen.',
      ar: 'ضمائر Dativ الشخصية: لي (mir)، لك (dir)، له (ihm)، لها (ihr)، لنا (uns)، لكم (euch)، لهم/لحضرتك (ihnen/Ihnen).',
      tr: 'Dativ şahıs zamirleri: mir (bana), dir (sana), ihm (ona), ihr (ona-dişil), uns (bize), euch (size), ihnen (onlara).',
      es: 'Pronombres personales en dativo: mir, dir, ihm, ihr, uns, euch, ihnen, Ihnen.'
    },
    category: 'cases',
    examples: [
      {
        german: 'Wie geht es dir? - Es geht mir gut und ich helfe euch gerne.',
        formulaBreakdown: 'geht es dir (Dativ du) + geht es mir (Dativ ich) + helfe euch (Dativ ihr)',
        literalTranslation: {
          prs: 'چطور می‌گذرد به تو؟ - می‌گذرد به من خوب و من کمک می‌کنم به شما با خوشی.',
          fa: 'چگونه می‌گذرد به تو؟ - خوب می‌گذرد به من و من با کمال میل به شماها کمک می‌کنم.',
          en: 'How goes it to you? - It goes to me well and I help you gladly.',
          ar: 'كيف حالك؟ - أنا بخير وأساعدكم بكل سرور.',
          tr: 'Nasılsın? - İyiyim ve size seve seve yardım ederim.',
          es: '¿Cómo te va? - Me va bien y os ayudo con mucho gusto.'
        },
        fluentTranslation: {
          prs: 'حالت چطور است؟ - حالم خوب است و با کمال میل به شما کمک می‌کنم.',
          fa: 'حالت چطوره؟ - حالم خوبه و با خوشحالی کمکتان می‌کنم.',
          en: 'How are you? - I\'m doing well and happy to help you all.',
          ar: 'كيف حالك؟ - أنا بخير ويسعدني أن أساعدكم.',
          tr: 'Nasılsın? - İyiyim ve size memnuniyetle yardımcı olurum.',
          es: '¿Qué tal estás? - Estoy bien y os ayudo encantado.'
        }
      }
    ]
  },
  {
    id: 'a1_2_lek14_kausalsatz_weil',
    level: 'A1.2',
    lektion: 14,
    germanTitle: 'Kausale Nebensätze mit "weil" & Perfekt-Abschluss',
    formula: 'Hauptsatz + , weil + Subjekt + (...) + *konjugiertes Verb am Ende*',
    explanation: {
      prs: 'حرف ربط weil به معنای «چون/زیرا» یک جمله پیرو (Nebensatz) می‌سازد که در آن فعل صرف‌شده همیشه و اجباراً به آخرین جایگاه جمله فرستاده می‌شود.',
      fa: 'حرف ربط weil به معنای «چون که / زیرا» فعل صرف‌شده را به آخرین جایگاه جمله پرتاب می‌کند.',
      en: 'The causal subordinating conjunction "weil" (because) forces the conjugated verb to the absolute end of the subordinate clause.',
      ar: 'أداة الربط السببية "weil" (لأن) تدفع بالفعل المصرف دائماً إلى نهاية الجملة الفرعية.',
      tr: '"weil" (çünkü) bağlacı çekimli fiili cümlenin en sonuna gönderir.',
      es: 'La conjunción causal subordinante "weil" (porque) traslada el verbo conjugado al final de la oración subordinada.'
    },
    category: 'subordinate_clauses',
    examples: [
      {
        german: 'Sayed lernt fleißig Deutsch, weil er in Deutschland als Ingenieur arbeiten will.',
        formulaBreakdown: 'Hauptsatz + weil (Konnektor) + er (S) + (...) + arbeiten will (Verben am Ende)',
        literalTranslation: {
          prs: 'سید می‌آموزد با پشتکار آلمانی، زیرا او در آلمان به حیث انجینیر کار کردن می‌خواهد.',
          fa: 'سید با جدیت آلمانی می‌خواند، زیرا او می‌خواهد در آلمان به عنوان مهندس کار کند.',
          en: 'Sayed learns diligently German, because he in Germany as engineer work wants.',
          ar: 'يتعلم سيد الألمانية باجتهاد لأنه يريد العمل كمهندس في ألمانيا.',
          tr: 'Sayed gayretle Almanca öğreniyor çünkü Almanya\'da mühendis olarak çalışmak istiyor.',
          es: 'Sayed aprende alemán con esmero porque quiere trabajar como ingeniero en Alemania.'
        },
        fluentTranslation: {
          prs: 'سید با جدیت آلمانی می‌خواند، چون می‌خواهد در آلمان به حیث مهندس مشغول به کار شود.',
          fa: 'سید با پشتکار آلمانی می‌خواند چون می‌خواهد در آلمان به عنوان مهندس کار کند.',
          en: 'Sayed is diligently learning German because he wants to work as an engineer in Germany.',
          ar: 'يتعلم سيد اللغة الألمانية بجدية لأنه يريد العمل كمهندس في ألمانيا.',
          tr: 'Sayed, Almanya\'da mühendis olarak çalışmak istediği için gayretle Almanca öğreniyor.',
          es: 'Sayed estudia alemán con empeño porque quiere trabajar como ingeniero en Alemania.'
        }
      }
    ]
  }
];
