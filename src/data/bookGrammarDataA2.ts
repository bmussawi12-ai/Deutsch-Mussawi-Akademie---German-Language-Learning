import { GrammarRule } from '../types';

export const BOOK_GRAMMAR_RULES_A2: GrammarRule[] = [
  // ================= A2.1 (Lektion 1 - 7) =================
  {
    id: 'a2_1_lek1_perfekt_haben_sein',
    level: 'A2.1',
    lektion: 1,
    germanTitle: 'Das Perfekt mit "haben" und "sein" & Partizip II',
    formula: 'S + haben/sein (konjugiert an Pos 2) + (...) + *Partizip II (ge-...-t / ge-...-en am Satzende)*',
    explanation: {
      prs: 'زمان گذشته پرفکت: افعال حرکتی و جابجایی مکان (fahren, gehen) و تغییر وضعیت (aufwachen) با فعل کمکی sein صرف می‌شوند. بیشتر افعال دیگر با haben صرف می‌شوند.',
      fa: 'زمان گذشته پرفکت: افعال تغییر مکان و وضعیت با sein، و افعال دیگر با haben صرف می‌شوند. اسم مفعول (Partizip II) در آخر جمله قرار می‌گیرد.',
      en: 'Verbs of motion or change of state form Perfekt with "sein". Most other verbs use "haben". Partizip II stands at the sentence end.',
      ar: 'أفعال الحركة وتغير الحالة تصرف مع "sein" في الماضي التام، وبقية الأفعال مع "haben".',
      tr: 'Yer veya durum değişikliği bildiren fiiller "sein" ile, diğer fiiller "haben" ile Perfekt oluşturur.',
      es: 'Los verbos de movimiento o cambio de estado forman el Perfekt con "sein", los demás con "haben".'
    },
    category: 'verbs',
    examples: [
      {
        german: 'Sayed ist nach Hamburg gefahren und hat dort seine neue Stelle angetreten.',
        formulaBreakdown: 'ist (sein) + gefahren (P.II) || hat (haben) + angetreten (P.II)',
        literalTranslation: {
          prs: 'سید است به هامبورگ رفته و دارد آنجا وظیفه جدیدش را آغاز کرده.',
          fa: 'سید است به هامبورگ رفته و دارد آنجا شغل جدیدش را شروع کرده.',
          en: 'Sayed is to Hamburg traveled and has there his new job begun.',
          ar: 'سافر سيد إلى هامبورغ وبدأ هناك وظيفته الجديدة.',
          tr: 'Sayed Hamburg\'a gitti ve orada yeni işine başladı.',
          es: 'Sayed ha viajado a Hamburgo y allí ha asumido su nuevo puesto.'
        },
        fluentTranslation: {
          prs: 'سید به هامبورگ سفر کرد و شغل جدید خود را در آنجا آغاز نمود.',
          fa: 'سید به هامبورگ سفر کرد و کار جدیدش را در آنجا شروع کرد.',
          en: 'Sayed traveled to Hamburg and started his new position there.',
          ar: 'سافر سيد إلى هامبورغ وباشر وظيفته الجديدة هناك.',
          tr: 'Sayed Hamburg\'a gitti ve yeni görevine başladı.',
          es: 'Sayed se trasladó a Hamburgo e inició su nuevo empleo allí.'
        }
      }
    ]
  },
  {
    id: 'a2_1_lek2_wechselpraepositionen',
    level: 'A2.1',
    lektion: 2,
    germanTitle: 'Die Wechselpräpositionen (Wo? + Dativ vs. Wohin? + Akkusativ)',
    formula: 'an, auf, hinter, in, neben, über, unter, vor, zwischen + DATIV (Position: Wo?) / AKKUSATIV (Richtung: Wohin?)',
    explanation: {
      prs: 'حروف اضافه دوگانه: اگر سوال Wo? (مکان ثابت) باشد داتیو می‌آید؛ اگر سوال Wohin? (حرکت به سمت مقصد) باشد آکوزاتیو می‌آید.',
      fa: 'حروف اضافه متغیر: برای پاسخ به کجاست (Wo?) حالت داتیو و برای به کجا می‌رود (Wohin?) حالت آکوزاتیو به کار می‌رود.',
      en: 'Two-way prepositions take Dative for static location (Wo?), and Accusative for movement/direction toward a destination (Wohin?).',
      ar: 'حروف الجر المزدوجة تأخذ Dativ للسكون والموقع (Wo?)، وتأخذ Akkusativ للحركة والاتجاه (Wohin?).',
      tr: 'Çift yönlü edatlar konum için (Wo?) Dativ, yönelme ve hareket için (Wohin?) Akkusativ alır.',
      es: 'Las preposiciones mixtas rigen dativo para ubicación estática (Wo?) y acusativo para dirección (Wohin?).'
    },
    category: 'prepositions',
    examples: [
      {
        german: 'Das Buch liegt auf dem Tisch (Wo? Dat), ich lege es auf den Tisch (Wohin? Akk).',
        formulaBreakdown: 'liegt + auf dem Tisch (Dativ) || lege + auf den Tisch (Akkusativ)',
        literalTranslation: {
          prs: 'کتاب افتاده است روی میز (داتیو)، من می‌گذارم آن را روی میز (آکوزاتیو).',
          fa: 'کتاب روی میز قرار دارد (داتیو)، من آن را روی میز می‌گذارم (آکوزاتیو).',
          en: 'The book lies on the table (Dat), I lay it on the table (Akk).',
          ar: 'الكتاب موضوع على الطاولة (Dat)، وأنا أضعه على الطاولة (Akk).',
          tr: 'Kitap masanın üzerinde duruyor (Dat), onu masanın üzerine koyuyorum (Akk).',
          es: 'El libro está sobre la mesa (Dat), lo pongo sobre la mesa (Akk).'
        },
        fluentTranslation: {
          prs: 'کتاب روی میز قرار دارد، من آن را روی میز می‌گذارم.',
          fa: 'کتاب روی میز قرار دارد؛ من آن را روی میز می‌گذارم.',
          en: 'The book is on the table, and I am putting it onto the table.',
          ar: 'الكتاب مستقر على الطاولة، وأنا أضعه على الطاولة.',
          tr: 'Kitap masada duruyor; ben onu masanın üstüne koyuyorum.',
          es: 'El libro está en la mesa; yo lo coloco sobre la mesa.'
        }
      }
    ]
  },
  {
    id: 'a2_1_lek3_lokale_praepositionen',
    level: 'A2.1',
    lektion: 3,
    germanTitle: 'Lokale Präpositionen (an... vorbei, gegenüber von, bis zu + Dativ)',
    formula: 'an + Dativ + vorbei | gegenüber von + Dativ | bis zu + Dativ (dem/der)',
    explanation: {
      prs: 'برای آدرس‌دهی در شهر: an dem Park vorbei (از کنار پارک رد شوید)، gegenüber von der Bank (روبروی بانک)، bis zur Kreuzung (تا سر چهارراه).',
      fa: 'حروف اضافه جهتی در شهر همگی با داتیو می‌آیند: an... vorbei (از کنارِ)، gegenüber von (روبرویِ)، bis zu (تا بهِ).',
      en: 'Local direction prepositions: "an... vorbei" (past), "gegenüber von" (opposite), and "bis zu" (up to) demand Dative.',
      ar: 'حروف الجر المكانية للتوجيه في المدينة تأخذ حالة Dativ دائماً.',
      tr: 'Şehir içi yön tariflerinde "an... vorbei", "gegenüber von" ve "bis zu" Dativ gerektirir.',
      es: 'Las preposiciones de orientación urbana rigen dativo obligatoriamente.'
    },
    category: 'prepositions',
    examples: [
      {
        german: 'Gehen Sie an dem Rathaus vorbei bis zur Ampel, die Apotheke liegt gegenüber von der Post.',
        formulaBreakdown: 'an dem Rathaus vorbei (Dat) + bis zur Ampel (Dat) + gegenüber von der Post (Dat)',
        literalTranslation: {
          prs: 'بروید شما از کنار شهرداری رد شده تا به چراغ ترافیکی، دواخانه قرار دارد روبروی پوسته.',
          fa: 'بروید از کنار شهرداری تا به چراغ راهنما، داروخانه روبروی اداره پست قرار دارد.',
          en: 'Go you past the town hall up to the traffic light, the pharmacy lies opposite the post office.',
          ar: 'مر بجانب دار البلدية حتى إشارة المرور، تقع الصيدلية مقابل مكتب البريد.',
          tr: 'Belediyenin yanından geçip trafik ışığına kadar gidin, eczane postanenin karşısındadır.',
          es: 'Pase por delante del ayuntamiento hasta el semáforo; la farmacia está frente a correos.'
        },
        fluentTranslation: {
          prs: 'از کنار شهرداری رد شوید و تا سر چراغ بروید، دواخانه درست روبروی اداره پست است.',
          fa: 'از کنار شهرداری رد شوید تا به چراغ راهنما برسید؛ داروخانه روبروی اداره پست است.',
          en: 'Walk past the town hall up to the traffic light; the pharmacy is opposite the post office.',
          ar: 'امشِ بمحاذاة مبنى البلدية حتى إشارة المرور؛ ستجد الصيدلية في مواجهة مكتب البريد.',
          tr: 'Belediye binasını geçip ışıklara kadar yürüyün; eczane postanenin tam karşısındadır.',
          es: 'Camine dejando atrás el ayuntamiento hasta el semáforo; la farmacia se encuentra frente a correos.'
        }
      }
    ]
  },
  {
    id: 'a2_1_lek4_adjektivdeklination',
    level: 'A2.1',
    lektion: 4,
    germanTitle: 'Adjektivdeklination nach unbestimmtem Artikel (ein / eine / ein)',
    formula: 'ein guter (m) | ein leckeres (n) | eine frische (f) || Akkusativ: einen guten (m)',
    explanation: {
      prs: 'وقتی صفت بعد از آرتیکل نامعین (ein) می‌آید، علامت جنسیت اسم را به خود می‌گیرد: ein guter Kaffee (مذکر -er)، ein frisches Brot (خنثی -es)، eine süße Frucht (مؤنث -e).',
      fa: 'صرف صفت بعد از ein نشانگر جنسیت است: مذکر er، خنثی es، مؤنث e. در آکوزاتیو مذکر به en تبدیل می‌شود (einen guten Kaffee).',
      en: 'After indefinite articles, adjectives take signal endings: -er (masc), -es (neut), -e (fem). In accusative masc: -en.',
      ar: 'بعد أداة النكرة تأخذ الصفة نهايات دالة على الجنس: -er للمذكر، -es للمحايد، -e للمؤنث، و-en لمنصوب المذكر.',
      tr: 'Belirsiz artikelden sonra sıfatlar cinsiyet eklerini üstlenir: -er (eril), -es (nötr), -e (dişil).',
      es: 'Tras artículo indefinido el adjetivo adopta la terminación distintiva: -er (masc), -es (neut), -e (fem).'
    },
    category: 'adjectives',
    examples: [
      {
        german: 'Ich trinke jeden Morgen einen heißen Kaffee und esse ein frisches Brot.',
        formulaBreakdown: 'einen heißen Kaffee (Akk Mask -en) + ein frisches Brot (Akk Neutr -es)',
        literalTranslation: {
          prs: 'من می‌نوشم هر صبح یک قهوه گرم و می‌خورم یک نان تازه.',
          fa: 'من می‌نوشم هر صبح یک قهوه داغ و می‌خورم یک نان تازه.',
          en: 'I drink every morning a hot coffee and eat a fresh bread.',
          ar: 'أنا أشرب كل صباح قهوة ساخنة وآكل خبزاً طازجاً.',
          tr: 'Her sabah sıcak bir kahve içerim ve taze bir ekmek yerim.',
          es: 'Bebo cada mañana un café caliente y como un pan fresco.'
        },
        fluentTranslation: {
          prs: 'من هر روز صبح یک قهوه داغ می‌نوشم و نان تازه می‌خورم.',
          fa: 'من هر روز صبح یک فنجان قهوه داغ می‌نوشم و نان تازه می‌خورم.',
          en: 'Every morning I drink hot coffee and eat fresh bread.',
          ar: 'أشرب قهوة ساخنة وآكل خبزاً طازجاً كل صباح.',
          tr: 'Her sabah sıcak kahve içer ve taze ekmek yerim.',
          es: 'Todas las mañanas tomo café caliente y como pan recién hecho.'
        }
      }
    ]
  },
  {
    id: 'a2_1_lek5_praeteritum_modalverben',
    level: 'A2.1',
    lektion: 5,
    germanTitle: 'Die Modalverben im Präteritum (musste, konnte, wollte, durfte, sollte)',
    formula: 'ich/er musste | du musstest | wir/sie mussten || Stamm ohne Umlaut + -te- + Personalendung',
    explanation: {
      prs: 'در زمان گذشته گذشته ساده (Präteritum)، افعال وجهی اوملاوت خود را از دست می‌دهند و پسوند -te- می‌گیرند: müssen -> musste, können -> konnte, dürfen -> durfte, wollen -> wollte.',
      fa: 'در پرتریتوم، افعال کمکی اوملات خود را از دست داده و پسوند te می‌گیرند: musste, konnte, durfte, wollte, sollte.',
      en: 'In past simple (Präteritum), modal verbs drop umlauts and add the marker -te-: musste, konnte, durfte, wollte, sollte.',
      ar: 'في الماضي البسيط تفقد الأفعال المساعدة النقاط (Umlaut) وتضاف اللاحقة -te-: musste, konnte, durfte.',
      tr: 'Modal fiiller Präteritum halinde noktalarını kaybeder ve -te- eki alır: musste, konnte, durfte.',
      es: 'En pretérito simple los modales pierden la diéresis y agregan el infijo -te-: musste, konnte, durfte.'
    },
    category: 'modal_verbs',
    examples: [
      {
        german: 'Gestern konnte Sayed nicht kommen, weil er lange im Büro arbeiten musste.',
        formulaBreakdown: 'konnte (Präteritum können) + arbeiten musste (Präteritum müssen am Ende)',
        literalTranslation: {
          prs: 'دیروز توانست سید نه آمدن، زیرا او باید طولانی در دفتر کار می‌کرد.',
          fa: 'دیروز سید نتوانست بیاید، زیرا او مجبور بود طولانی در دفتر کار کند.',
          en: 'Yesterday could Sayed not come, because he long in office work had to.',
          ar: 'لم يستطع سيد المجيء أمس لأنه كان مضطراً للعمل طويلاً في المكتب.',
          tr: 'Dün Sayed gelemedi çünkü ofiste uzun süre çalışmak zorundaydı.',
          es: 'Ayer Sayed no pudo venir porque tuvo que trabajar hasta tarde en la oficina.'
        },
        fluentTranslation: {
          prs: 'دیروز سید نتوانست بیاید چون مجبور بود تا دیرقت در دفتر کار کند.',
          fa: 'دیروز سید نتوانست بیاید، چون باید تا دیروقت در دفتر کار می‌کرد.',
          en: 'Yesterday Sayed couldn\'t come because he had to work late at the office.',
          ar: 'لم يتمكن سيد من القدوم بالأمس بسبب اضطراره للعمل لساعات إضافية في المكتب.',
          tr: 'Dün Sayed gelemedi çünkü ofiste uzun süre çalışması gerekiyordu.',
          es: 'Ayer Sayed no pudo venir porque tuvo que quedarse trabajando hasta tarde en la oficina.'
        }
      }
    ]
  },
  {
    id: 'a2_1_lek6_reflexive_verben',
    level: 'A2.1',
    lektion: 6,
    germanTitle: 'Reflexive Verben im Akkusativ (sich bewegen, sich fühlen, sich freuen)',
    formula: 'ich freue MICH | du freust DICH | er/sie freut SICH | wir freuen UNS | ihr freut EUCH | sie freuen SICH',
    explanation: {
      prs: 'افعال انعکاسی به همراه ضمیر انعکاسی (Reflexivpronomen) می‌آیند که فاعل به خود اشاره دارد: sich freuen (خوشحال بودن)، sich bewegen (ورزش و تحرک کردن)، sich ausruhen (استراحت کردن).',
      fa: 'افعال بازتابی ضمیر انعکاسی دارند: mich, dich, sich, uns, euch, sich. این ضمیر نشان‌دهنده بازگشت عمل به خود فاعل است.',
      en: 'Reflexive verbs use reflexive pronouns: mich, dich, sich, uns, euch, sich.',
      ar: 'الأفعال المنعكسة تستلزم ضمير انعكاس يعود على الفاعل: mich, dich, sich, uns, euch, sich.',
      tr: 'Dönüşlü fiiller eylemin özneye döndüğünü belirten dönüşlülük zamirleri (mich, dich, sich...) ile kullanılır.',
      es: 'Los verbos reflexivos emplean pronombres reflexivos en acusativo: mich, dich, sich, uns, euch, sich.'
    },
    category: 'verbs',
    examples: [
      {
        german: 'Ich bewege mich regelmäßig und ich fühle mich sehr fit und gesund.',
        formulaBreakdown: 'bewege mich (Reflexiv ich) + fühle mich (Reflexiv ich)',
        literalTranslation: {
          prs: 'من تحرک می‌دهم خود را منظم و من احساس می‌کنم خود را بسیار چابک و سالم.',
          fa: 'من حرکت می‌دهم خودم را به طور منظم و من احساس می‌کنم خودم را کاملاً آماده و سالم.',
          en: 'I move myself regularly and I feel myself very fit and healthy.',
          ar: 'أنا أتحرك بانتظام وأشعر بأنني في كامل لياقتي وصحتي.',
          tr: 'Düzenli olarak hareket ediyorum ve kendimi çok zinde ve sağlıklı hissediyorum.',
          es: 'Hago ejercicio con regularidad y me siento muy en forma y sano.'
        },
        fluentTranslation: {
          prs: 'من به طور مرتب ورزش و تحرک دارم و احساس شادابی و سلامتی می‌کنم.',
          fa: 'من مرتب ورزش می‌کنم و احساس سلامت و تندرستی کامل دارم.',
          en: 'I exercise regularly and feel very fit and healthy.',
          ar: 'أمارس التمارين الرياضية بانتظام وأشعر بنشاط وصحة تامة.',
          tr: 'Düzenli spor yapıyorum ve kendimi oldukça dinç ve sağlıklı hissediyorum.',
          es: 'Hago ejercicio con regularidad y me encuentro muy en forma y saludable.'
        }
      }
    ]
  },
  {
    id: 'a2_1_lek7_neben_dass_weil',
    level: 'A2.1',
    lektion: 7,
    germanTitle: 'Nebensätze mit "dass" (Inhaltssatz) & Verben mit Präpositionen',
    formula: 'Hauptsatz + , dass + Subjekt + (...) + *konjugiertes Verb am Satzende*',
    explanation: {
      prs: 'جملات پیرو با dass به معنای «که»: فعل صرف‌شده را به آخرین جایگاه جمله می‌فرستد (مانند: Ich hoffe, dass du kommst = امیدوارم که بیایی).',
      fa: 'حرف ربط dass (که) جمله پیرو می‌سازد و فعل صرف‌شده را به انتهای جمله می‌فرستد. افعال با حروف اضافه ثابت مانند warten auf (منتظرِ).',
      en: 'The conjunction "dass" (that) introduces object clauses, pushing the conjugated verb to the very end.',
      ar: 'أداة الربط "dass" (أن) تبني جملة فرعية وتضع الفعل المصرف في نهاية الجملة.',
      tr: '"dass" (ki / -dığını) bağlacı çekimli fiili yan cümlenin en sonuna taşır.',
      es: 'La conjunción "dass" (que) introduce oraciones subordinadas sustantivas con el verbo al final.'
    },
    category: 'subordinate_clauses',
    examples: [
      {
        german: 'Ich freue mich sehr, dass wir so freundliche Nachbarn haben.',
        formulaBreakdown: 'Hauptsatz + , dass (Konnektor) + wir (S) + (...) + haben (Verb am Ende)',
        literalTranslation: {
          prs: 'من خوشحالم بسیار، که ما چنان همسایه‌های مهربان داریم.',
          fa: 'من بسیار خوشحالم که ما چنین همسایگان مهربانی داریم.',
          en: 'I rejoice myself very, that we such friendly neighbors have.',
          ar: 'يسعدني كثيراً أن لدينا جيراناً ودودين ولطفاء إلى هذا الحد.',
          tr: 'Bu kadar cana yakın komşularımız olduğu için çok mutluyum.',
          es: 'Me alegro mucho de que tengamos unos vecinos tan amables.'
        },
        fluentTranslation: {
          prs: 'خیلی خوشحالم که همسایه‌های مهربان و باصفایی داریم.',
          fa: 'خیلی خوشحالم که چنین همسایه‌های مهربان و خوبی داریم.',
          en: 'I am very glad that we have such friendly neighbors.',
          ar: 'أنا سعيد للغاية بوجود جيران طيبين ولطفاء معنا.',
          tr: 'Böyle cana yakın komşulara sahip olduğumuz için çok memnunum.',
          es: 'Estoy muy contento de que tengamos unos vecinos tan amables.'
        }
      }
    ]
  },

  // ================= A2.2 (Lektion 8 - 14) =================
  {
    id: 'a2_2_lek8_dativ_akkusativ',
    level: 'A2.2',
    lektion: 8,
    germanTitle: 'Verben mit Dativ- und Akkusativobjekt (Stellungsregeln)',
    formula: 'Nomen: Dat vor Akk (dem Mann den Brief) || Pronomen: Akk vor Dat (ihn ihm / es mir)',
    explanation: {
      prs: 'قانون چیدمان مفعول‌ها: اگر هر دو مفعول اسم باشند، داتیو قبل از آکوزاتیو می‌آید. اگر مفعول‌ها ضمیر باشند، آکوزاتیو قبل از داتیو می‌آید.',
      fa: 'ترتیب مفعول‌ها: با اسامی، داتیو قبل از آکوزاتیو است. اما با ضمایر شخصی، آکوزاتیو مقدم بر داتیو می‌شود (ich gebe es dir).',
      en: 'With nouns: Dative precedes Accusative. With pronouns: Accusative strictly precedes Dative.',
      ar: 'مع الأسماء يسبق Dativ الـ Akkusativ. ومع الضمائر يسبق Akkusativ الـ Dativ دائماً.',
      tr: 'İsimlerde Dativ Akkusativ\'den önce gelir; zamirlerde ise Akkusativ Dativ\'den önce gelir.',
      es: 'Con sustantivos el dativo precede al acusativo; con pronombres el acusativo va antes del dativo.'
    },
    category: 'sentence_structure',
    examples: [
      {
        german: 'Sayed gibt dem Sachbearbeiter das Formular. Er gibt es ihm sofort.',
        formulaBreakdown: 'dem Sachbearbeiter (Dat Nomen) + das Formular (Akk Nomen) || es (Akk Pronomen) + ihm (Dat Pronomen)',
        literalTranslation: {
          prs: 'سید می‌دهد به کارمند فورم را. او می‌دهد آن را به او فوراً.',
          fa: 'سید می‌دهد به کارمند فرم را. او می‌دهد آن را به او فوراً.',
          en: 'Sayed gives the clerk the form. He gives it to him immediately.',
          ar: 'يعطي سيد الموظف الاستمارة، ويسلمه إياها فوراً.',
          tr: 'Sayed memura formu verir. Onu ona hemen verir.',
          es: 'Sayed entrega el formulario al funcionario. Se lo entrega inmediatamente.'
        },
        fluentTranslation: {
          prs: 'سید فرم را به کارمند تحویل می‌دهد. او فوراً آن را به وی می‌دهد.',
          fa: 'سید فرم را به کارمند اداره می‌دهد. او بلافاصله آن را به او تحویل می‌دهد.',
          en: 'Sayed hands the form to the clerk. He gives it to him right away.',
          ar: 'يسلّم سيد الاستمارة للموظف المختص فوراً.',
          tr: 'Sayed formu memura verir ve hemen teslim eder.',
          es: 'Sayed le entrega el impreso al funcionario sin demora.'
        }
      }
    ]
  },
  {
    id: 'a2_2_lek9_relativsaetze_nom_akk',
    level: 'A2.2',
    lektion: 9,
    germanTitle: 'Relativsätze im Nominativ und Akkusativ (der/die/das & den)',
    formula: 'Hauptsatz + , der/die/das (Nom) / den/die/das (Akk) + (...) + *Verb am Ende*',
    explanation: {
      prs: 'جملات موصولی (Relativsätze) برای توصیف بیشتر اسم به کار می‌روند. ضمیر موصولی آرتیکل اسم است و فعل در انتهای جمله قرار می‌گیرد.',
      fa: 'جملات موصولی اسمی را توصیف می‌کنند. در آکوزاتیو مذکر den می‌شود و فعل صرف‌شده در پایان جمله موصولی قرار می‌گیرد.',
      en: 'Relative clauses describe nouns. Relative pronouns match gender/number with the noun and case with clause role.',
      ar: 'الجمل الموصولة توضح الأسماء، ويأتي ضمير الوصل مطابقاً للاسم ويقع الفعل في نهاية الجملة.',
      tr: 'İlgi cümleleri (Relativsatz) isimleri niteler ve çekimli fiili cümlenin sonuna gönderir.',
      es: 'Las oraciones de relativo califican al sustantivo antecedente y sitúan el verbo al final.'
    },
    category: 'subordinate_clauses',
    examples: [
      {
        german: 'Der Zug, der pünktlich ankommt, und der Koffer, den ich gekauft habe.',
        formulaBreakdown: 'der (Relativpronomen Nom Mask) + ankommt || den (Relativpronomen Akk Mask) + gekauft habe',
        literalTranslation: {
          prs: 'قطاری که به موقع می‌رسد، و بیک سفری که من خریده‌ام.',
          fa: 'قطاری که به موقع می‌رسد، و چمدانی که من خریده‌ام.',
          en: 'The train which on time arrives, and the suitcase which I bought have.',
          ar: 'القطار الذي يصل في موعده، والحقيبة التي اشتريتها.',
          tr: 'Vaktinde gelen tren ve satın almış olduğum bavul.',
          es: 'El tren que llega puntual y la maleta que he comprado.'
        },
        fluentTranslation: {
          prs: 'قطاری که سرموعد می‌رسد و چمدانی که خریده‌ام.',
          fa: 'قطاری که به موقع می‌رسد و چمدانی که خریده‌ام.',
          en: 'The train that arrives on time, and the suitcase that I purchased.',
          ar: 'القطار الذي يصل في وقته المحدد، والحقيبة التي اشتريتها.',
          tr: 'Zamanında gelen tren ve satın aldığım valiz.',
          es: 'El tren que llega puntual y la maleta que compré.'
        }
      }
    ]
  },
  {
    id: 'a2_2_lek10_reflexiv_dativ',
    level: 'A2.2',
    lektion: 10,
    germanTitle: 'Reflexive Verben mit Dativ (mir / dir)',
    formula: 'ich wasche MIR die Hände (Akk Objekt vorhanden -> Reflexivpronomen im Dativ: mir/dir)',
    explanation: {
      prs: 'هرگاه فعل انعکاسی مفعول صریح آکوزاتیو داشته باشد (مثل دست‌ها)، ضمیر انعکاسی در صیغه اول و دوم شخص داتیو می‌شود: ich wasche mir die Hände / du putzt dir die Zähne.',
      fa: 'اگر یک مفعول مستقیم آکوزاتیو وجود داشته باشد، ضمیر انعکاسی برای من و تو داتیو می‌شود: mir و dir.',
      en: 'When a direct accusative body part/object is specified, 1st and 2nd person reflexive pronouns take Dative: mir, dir.',
      ar: 'إذا وُجد مفعول صريح في الجملة، يتحول ضمير الانعكاس للمتكلم والمخاطب إلى حالة Dativ: mir, dir.',
      tr: 'Cümlede doğrudan bir nesne varsa 1. ve 2. tekil şahıs dönüşlülük zamiri Dativ olur: mir, dir.',
      es: 'Cuando existe un objeto directo específico, el pronombre reflexivo para 1ª y 2ª persona pasa a dativo: mir, dir.'
    },
    category: 'verbs',
    examples: [
      {
        german: 'Ich putze mir die Zähne und ziehe mir eine warme Jacke an.',
        formulaBreakdown: 'putze mir (Dat) + die Zähne (Akk) || ziehe mir (Dat) + eine Jacke (Akk) an',
        literalTranslation: {
          prs: 'من پاک می‌کنم برای خود دندان‌ها را و می‌پوشم برای خود جاکت گرم را.',
          fa: 'من مسواک می‌زنم برای خود دندان‌ها را و می‌پوشم کاپشن گرم را.',
          en: 'I brush to-me the teeth and put to-me a warm jacket on.',
          ar: 'أنظف أسناني وأرتدي سترة دافئة.',
          tr: 'Dişlerimi fırçalıyorum ve sıcak bir ceket giyiyorum.',
          es: 'Me cepillo los dientes y me pongo una chaqueta abrigada.'
        },
        fluentTranslation: {
          prs: 'دندان‌هایم را مسواک می‌زنم و کاپشن گرم می‌پوشم.',
          fa: 'دندان‌هایم را مسواک می‌زنم و یک کاپشن گرم به تن می‌کنم.',
          en: 'I brush my teeth and put on a warm jacket.',
          ar: 'أغسل أسناني بالفرشاة وأرتدي معطفاً دافئاً.',
          tr: 'Dişlerimi fırçalıyor ve üzerime kalın bir mont giyiyorum.',
          es: 'Me lavo los dientes y me pongo una chaqueta de abrigo.'
        }
      }
    ]
  },
  {
    id: 'a2_2_lek11_wechsel_verben',
    level: 'A2.2',
    lektion: 11,
    germanTitle: 'Positions- und Richtungsverben (stellen/stehen, legen/liegen, hängen)',
    formula: 'stellen/legen/setzen (Wohin? + Akk) || stehen/liegen/sitzen (Wo? + Dat)',
    explanation: {
      prs: 'جفت‌افعال وضعیتی: stellen (گذاشتن ایستاده + Akk) در برابر stehen (ایستاده بودن + Dat)؛ legen (گذاشتن خوابیده + Akk) در برابر liegen (دراز کشیده بودن + Dat).',
      fa: 'افعال باقاعده عمل و تغییر موقعیت (stellen/legen/setzen) مفعول آکوزاتیو می‌خواهند؛ افعال بی‌قاعده حالت ثابت (stehen/liegen/sitzen) متمم داتیو دارند.',
      en: 'Transitive action verbs (stellen, legen, setzen) take Accusative. Intransitive state verbs (stehen, liegen, sitzen) take Dative.',
      ar: 'أفعال الحركة والوضع تأخذ Akkusativ، بينما تأخذ أفعال السكون والاستقرار حالة Dativ.',
      tr: 'Eylem bildiren geçişli fiiller (stellen, legen) Akkusativ; durum bildirenler (stehen, liegen) Dativ alır.',
      es: 'Los verbos de acción y colocación rigen acusativo; los de estado y reposo rigen dativo.'
    },
    category: 'verbs',
    examples: [
      {
        german: 'Sayed stellt die Lampe neben das Sofa (Akk). Jetzt steht sie neben dem Sofa (Dat).',
        formulaBreakdown: 'stellt + neben das Sofa (Wohin? Akk) || steht + neben dem Sofa (Wo? Dat)',
        literalTranslation: {
          prs: 'سید می‌گذارد گروپ را پهلوی کوچ (آکوزاتیو). حال ایستاده است آن پهلوی کوچ (داتیو).',
          fa: 'سید قرار می‌دهد چراغ را کنار مبل. اکنون ایستاده است آن کنار مبل.',
          en: 'Sayed puts the lamp beside the sofa (Akk). Now stands it beside the sofa (Dat).',
          ar: 'يضع سيد المصباح بجانب الأريكة (Akk)، والآن يستقر بجانب الأريكة (Dat).',
          tr: 'Sayed lambayı kanepenin yanına koyuyor (Akk). Şimdi kanepenin yanında duruyor (Dat).',
          es: 'Sayed coloca la lámpara junto al sofá (Akk). Ahora está de pie junto al sofá (Dat).'
        },
        fluentTranslation: {
          prs: 'سید چراغ را کنار کوچ می‌گذارد. اکنون چراغ کنار کوچ قرار دارد.',
          fa: 'سید آباژور را کنار مبل قرار می‌دهد. حالا آباژور کنار کاناپه ایستاده است.',
          en: 'Sayed places the lamp beside the couch. Now it stands beside the couch.',
          ar: 'وضع سيد المصباح بجوار الأريكة، وهو الآن مستقر بجانبها.',
          tr: 'Sayed lambayı koltuğun yanına yerleştiriyor; lamba artık koltuğun yanında duruyor.',
          es: 'Sayed pone la lámpara al lado del sofá; ahora se encuentra situada junto al sofá.'
        }
      }
    ]
  },
  {
    id: 'a2_2_lek12_konjunktiv2_hoeflich',
    level: 'A2.2',
    lektion: 12,
    germanTitle: 'Konjunktiv II: Höfliche Bitten (könnten / würden + Infinitiv)',
    formula: 'Könnten Sie mir bitte helfen? | Würden Sie bitte die Tür schließen?',
    explanation: {
      prs: 'کونیونکتیو ۲ برای درخواست‌های بسیار محترمانه و مودبانه کاری: könnten (می‌توانستید لطفاً...) و würden + Infinitiv (می‌شد لطفاً...).',
      fa: 'ساختار کون‌یونکتیو ۲ برای خواهش‌های مودبانه اداری و اجتماعی: könnten Sie bitte... یا würden Sie bitte... به همراه مصدر در انتهای جمله.',
      en: 'Konjunktiv II forms "könnten" and "würden + infinitive" express maximum politeness in requests.',
      ar: 'تستخدم صيغة Konjunktiv II (könnten / würden) للتعبير عن غاية الأدب واللباقة في الطلب والرجاء.',
      tr: 'Nezaket bildiren ricalarda "könnten" ve "würden + mastar" kalıpları kullanılır.',
      es: 'El Konjunktiv II ("könnten" y "würden + infinitivo") formula peticiones de cortesía refinada.'
    },
    category: 'subjunctive',
    examples: [
      {
        german: 'Könnten Sie mir bitte die Bewerbungsunterlagen per E-Mail zusenden?',
        formulaBreakdown: 'Könnten Sie (Konjunktiv II höflich) + bitte + (...) + zusenden (Infinitiv)',
        literalTranslation: {
          prs: 'می‌توانستید شما برای من لطفاً اسناد درخواستی را با ایمیل ارسال کنید؟',
          fa: 'می‌توانستید شما به من لطفاً مدارک رزومه را با ایمیل بفرستید؟',
          en: 'Could you to-me please the application documents via email send?',
          ar: 'هل يمكن لحضرتك التكرم بإرسال أوراق التقديم عبر البريد الإلكتروني؟',
          tr: 'Başvuru evraklarını bana e-posta ile gönderebilir misiniz lütfen?',
          es: '¿Podría por favor enviarme los documentos de la candidatura por correo electrónico?'
        },
        fluentTranslation: {
          prs: 'ممکن است لطفاً اسناد درخواست کار را از طریق ایمیل برایم ارسال فرمایید؟',
          fa: 'ممکن است لطف بفرمایید و مدارک رزومه را با ایمیل برایم بفرستید؟',
          en: 'Could you please send me the application documents via email?',
          ar: 'هل تتكرم بإرسال مسوغات التعيين عبر البريد الإلكتروني من فضلك؟',
          tr: 'Rica etsem başvuru belgelerini bana e-postayla gönderebilir misiniz?',
          es: '¿Sería tan amable de remitirme la documentación de la solicitud por correo electrónico?'
        }
      }
    ]
  },
  {
    id: 'a2_2_lek13_indirekte_fragen',
    level: 'A2.2',
    lektion: 13,
    germanTitle: 'Indirekte Fragesätze (ob / W-Wort & Verb am Satzende)',
    formula: 'Ich möchte wissen, ob das Geschäft geöffnet ist. | Können Sie mir sagen, wann der Zug abfährt?',
    explanation: {
      prs: 'سوالات غیرمستقیم مودبانه: برای سوالات بله/خیر از ob (آیا) و برای سوالات W-Frage از همان کلمه پرسشی استفاده می‌شود و فعل صرف‌شده در آخر جمله می‌نشیند.',
      fa: 'سوالات غیرمستقیم: با کلمات استفهامی یا حرف ربط ob (آیا) ساخته شده و فعل صرف‌شده به انتهای جمله می‌رود.',
      en: 'Indirect polite questions use "ob" (whether) or interrogative pronouns (wann, wie, wo), pushing the verb to the end.',
      ar: 'الأسئلة غير المباشرة تستخدم "ob" للأسئلة بنعم/لا، أو أدوات الاستفهام، مع نقل الفعل المصرف للنهاية.',
      tr: 'Dolaylı kibar sorularda "ob" (olup olmadığı) veya soru sözcükleri kullanılır; fiil en sona gider.',
      es: 'Las preguntas indirectas de cortesía emplean "ob" (si) o partículas interrogativas con el verbo al final.'
    },
    category: 'subordinate_clauses',
    examples: [
      {
        german: 'Wissen Sie, ob der Bus Verspätung hat und wann er ankommt?',
        formulaBreakdown: 'ob (Konnektor) + hat (Verb Ende) + wann (W-Wort) + ankommt (Verb Ende)',
        literalTranslation: {
          prs: 'می‌دانید شما، آیا بس تاخیر دارد و چه وقت او می‌رسد؟',
          fa: 'می‌دانید شما، آیا اتوبوس تاخیر دارد و چه زمانی می‌رسد؟',
          en: 'Know you, whether the bus delay has and when it arrives?',
          ar: 'هل تعلم إن كانت الحافلة متأخرة ومتى ستصل؟',
          tr: 'Otobüsün gecikmesi olup olmadığını ve ne zaman varacağını biliyor musunuz?',
          es: '¿Sabe si el autobús viene con retraso y cuándo llegará?'
        },
        fluentTranslation: {
          prs: 'آیا می‌دانید که آیا اتوبوس تاخیر دارد و چه زمانی می‌رسد؟',
          fa: 'اطلاع دارید که آیا اتوبوس تاخیر دارد و چه زمانی می‌رسد؟',
          en: 'Do you know if the bus is delayed and when it will arrive?',
          ar: 'هل لديك علم بما إذا كانت الحافلة متأخرة ومتى موعد وصولها؟',
          tr: 'Otobüsün rötar yapıp yapmadığını ve saat kaçta geleceğini biliyor musunuz?',
          es: '¿Sabe si el autobús viene con retraso y a qué hora llega?'
        }
      }
    ]
  },
  {
    id: 'a2_2_lek14_wenn_als',
    level: 'A2.2',
    lektion: 14,
    germanTitle: 'Temporale Nebensätze mit "wenn" (Gegenwart/Wiederholung) und "als" (einmalig Vergangenheit)',
    formula: 'als (einmaliges Ereignis in der Vergangenheit) || wenn (Gegenwart, Zukunft, wiederholt in Vergangenheit)',
    explanation: {
      prs: 'حرف ربط als فقط برای یک رویداد منفرد و یک‌باره در گذشته به کار می‌رود (als ich ein Kind war = زمانی که کودک بودم). برای تکرار یا زمان حال و آینده همیشه wenn می‌آید.',
      fa: 'حرف ربط als مختص یک رخداد یک‌باره در گذشته است. برای کارهای تکراری در گذشته یا رویدادهای حال و آینده از wenn استفاده می‌شود.',
      en: '"als" is used exclusively for single, one-time events in the past. "wenn" is used for repeated past events or any present/future conditions.',
      ar: 'تستخدم "als" لحدث وقع مرة واحدة فقط في الماضي، بينما تستخدم "wenn" للتكرار في الماضي وللحاضر والمستقبل.',
      tr: '"als" geçmişte tek seferlik olaylar için, "wenn" ise geçmişteki tekrarlar ile şimdiki ve gelecek zaman için kullanılır.',
      es: '"als" se reserva para acontecimientos puntuales del pasado; "wenn" para hechos reiterados o presente/futuro.'
    },
    category: 'subordinate_clauses',
    examples: [
      {
        german: 'Als Sayed nach Deutschland kam, sprach er nur wenig Deutsch. Wenn er Zeit hat, lernt er.',
        formulaBreakdown: 'Als Sayed nach Deutschland kam (einmalig) || Wenn er Zeit hat (wiederholt)',
        literalTranslation: {
          prs: 'وقتی که سید به آلمان آمد، سخن می‌گفت او فقط اندک آلمانی. هرگاه او وقت دارد، می‌آموزد او.',
          fa: 'وقتی که سید به آلمان آمد، صحبت می‌کرد او فقط کمی آلمانی. هر وقت او زمان دارد، درس می‌خواند او.',
          en: 'When Sayed to Germany came, spoke he only little German. Whenever he time has, learns he.',
          ar: 'عندما جاء سيد إلى ألمانيا كان يتحدث القليل فقط. وكلما أتيح له وقت يدرس باجتهاد.',
          tr: 'Sayed Almanya\'ya geldiğinde çok az Almanca konuşuyordu. Ne zaman vakti olsa ders çalışır.',
          es: 'Cuando Sayed llegó a Alemania apenas hablaba alemán. Cada vez que tiene tiempo estudia.'
        },
        fluentTranslation: {
          prs: 'زمانی که سید به آلمان آمد، آلمانی کمی بلد بود. حالا هر وقت فرصت داشته باشد، درس می‌خواند.',
          fa: 'زمانی که سید به آلمان آمد، فقط کمی آلمانی صحبت می‌کرد. اکنون هر وقت فرصت دارد درس می‌خواند.',
          en: 'When Sayed came to Germany, he spoke only a little German. Whenever he has time, he studies.',
          ar: 'عندما قدم سيد إلى ألمانيا أول مرة كان يتحدث القليل من الألمانية، والآن كلما وجد وقتاً يدرس بجد.',
          tr: 'Sayed Almanya\'ya ilk geldiğinde az Almanca biliyordu; şimdi ise vakit buldukça çalışıyor.',
          es: 'Cuando Sayed llegó a Alemania apenas sabía hablar alemán; ahora estudia siempre que dispone de tiempo.'
        }
      }
    ]
  }
];
