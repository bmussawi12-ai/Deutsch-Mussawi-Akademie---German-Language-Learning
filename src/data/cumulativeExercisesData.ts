import { ExerciseChapter } from '../types';

export const COMPREHENSIVE_CUMULATIVE_REVIEWS: ExerciseChapter[] = [
  // ================= A1.1 REVIEWS =================
  {
    id: 'rev_a1_1_cap1',
    title: 'Übungskapitel 1 (Lektion 1–4: Grundlagen & Alltag)',
    lektionRef: 'Lektion 1 bis 4',
    type: 'review',
    level: 'A1.1',
    questions: [
      {
        id: 'rev_a1_1_q1',
        type: 'multiple_choice',
        instruction: {
          en: 'Verb conjugation: Choose the correct form of the verb "kommen".',
          fa: 'صرف فعل: شکل صحیح فعل "kommen" برای ضمیر "du" را انتخاب کنید.',
          prs: 'صرف فعل: شکل درست فعل "kommen" برای ضمیر "du" کدام است؟',
          tr: 'Fiil çekimi: "du" zamiri için "kommen" fiilinin doğru şeklini seçin.',
          ar: 'تصريف الأفعال: اختر الصيغة الصحيحة للفعل "kommen" مع الضمير "du".',
          es: 'Conjugación verbal: Elige la forma correcta del verbo "kommen" con "du".'
        },
        prompt: 'Woher _____ du, Maria?',
        options: ['komme', 'kommst', 'kommt', 'kommen'],
        correctAnswer: 'kommst',
        explanation: {
          en: 'In German present tense, 2nd person singular "du" takes the ending "-st": du kommst.',
          fa: 'در زمان حال ساده آلمانی، برای دوم شخص مفرد (du) پسوند "-st" به ریشه فعل اضافه می‌شود: du kommst.',
          prs: 'برای ضمیر du پسوند "-st" می‌آید: du kommst.',
          tr: 'Almanca şimdiki zamanda 2. tekil şahıs "du" için "-st" eki gelir: du kommst.',
          ar: 'مع الضمير du يأخذ الفعل اللاحقة "-st": du kommst.',
          es: 'En presente, la 2ª persona singular "du" lleva la terminación "-st": du kommst.'
        }
      },
      {
        id: 'rev_a1_1_q2',
        type: 'multiple_choice',
        instruction: {
          en: 'Gender & Articles: Identify the correct definite article for "Wohnung".',
          fa: 'آرتیکل و جنسیت: آرتیکل معین مناسب برای کلمه "Wohnung" را مشخص کنید.',
          prs: 'آرتیکل معین کلمه "Wohnung" کدام است؟',
          tr: 'Artikel: "Wohnung" kelimesi için doğru artikeli seçiniz.',
          ar: 'حدد أداة التعريف الصحيحة لكلمة "Wohnung".',
          es: 'Identifica el artículo determinado correcto para "Wohnung".'
        },
        prompt: '_____ Wohnung ist sehr hell und modern geschnitten.',
        options: ['Der', 'Die', 'Das', 'Den'],
        correctAnswer: 'Die',
        explanation: {
          en: 'All nouns with the German suffix "-ung" are 100% feminine and take "die".',
          fa: 'تمامی اسامی با پسوند "-ung" صددرصد مؤنث هستند و آرتیکل "die" می‌گیرند.',
          prs: 'تمام اسم‌های با پسوند "-ung" مؤنث بوده و آرتیکل die دارند.',
          tr: '"-ung" ekiyle biten tüm isimler %100 dişildir (die).',
          ar: 'جميع الأسماء المنتهية باللاحقة "-ung" تكون مؤنثة دائماً (die).',
          es: 'Todos los sustantivos terminados en "-ung" son femeninos (die).'
        }
      },
      {
        id: 'rev_a1_1_q3',
        type: 'sentence_reorder',
        instruction: {
          en: 'Sentence Syntax: Construct a valid W-Frage (Question with question word).',
          fa: 'نحو جمله: یک جمله پرسشی صحیح با واژه پرسشی (W-Frage) بسازید.',
          prs: 'جمله‌سازی: یک سوال درست با کلمه استفهامی بسازید.',
          tr: 'Cümle dizilimi: Soru kelimeli düzgün bir W-sorusu oluşturun.',
          ar: 'تركيب الجملة: كوّن سؤالاً صحيحاً بأداة استفهام.',
          es: 'Sintaxis: Construye una pregunta válida con partícula interrogativa.'
        },
        prompt: 'Ordnung der Satzglieder (W-Frage):',
        options: ['Wo', 'arbeiten', 'Sie', 'in', 'Berlin?'],
        correctAnswer: 'Wo arbeiten Sie in Berlin?',
        explanation: {
          en: 'W-Question rule: Question word (Pos 1) + conjugated finite verb (Pos 2) + subject (Pos 3) + complements.',
          fa: 'قاعده W-Frage: کلمه پرسشی در جایگاه ۱ + فعل صرف‌شده در جایگاه ۲ + فاعل در جایگاه ۳ + سایر اجزا.',
          prs: 'کلمه پرسشی در اول + فعل در دوم + فاعل در سوم.',
          tr: 'W-sorusunda kural: Soru kelimesi (1.) + çekimli fiil (2.) + özne (3.) + diğer öğeler.',
          ar: 'القاعدة: أداة الاستفهام أولاً + الفعل ثانياً + الفاعل ثالثاً.',
          es: 'Regla: Palabra interrogativa (1) + verbo conjugado (2) + sujeto (3) + complementos.'
        }
      }
    ]
  },
  {
    id: 'rev_a1_1_cap2',
    title: 'Übungskapitel 2 (Lektion 5–7: Tagesablauf, Akkusativ & Freizeit)',
    lektionRef: 'Lektion 5 bis 7',
    type: 'review',
    level: 'A1.1',
    questions: [
      {
        id: 'rev_a1_1_q4',
        type: 'multiple_choice',
        instruction: {
          en: 'Accusative case: Select the correct indefinite article for masculine direct object.',
          fa: 'حالت آکوزاتیو: آرتیکل نامعین مفعول مستقیم مذکر را انتخاب کنید.',
          prs: 'حالت آکوزاتیو: برای مفعول مستقیم مذکر کدام آرتیکل نامعین استفاده می‌شود؟',
          tr: 'Akkusativ hali: Eril doğrudan nesne için doğru belirsiz artikeli seçin.',
          ar: 'حالة النصب: اختر أداة النكرة الصحيحة للمفعول به المذكر.',
          es: 'Caso acusativo: Selecciona el artículo indeterminado masculino.'
        },
        prompt: 'Ich möchte bitte _____ Kaffee ohne Zucker trinken. (der Kaffee)',
        options: ['ein', 'einen', 'einem', 'eines'],
        correctAnswer: 'einen',
        explanation: {
          en: 'In the accusative case, masculine "ein" changes to "einen" (der -> den).',
          fa: 'در حالت مفعولی آکوزاتیو، اسم مذکر "ein" به "einen" تبدیل می‌شود (der -> den).',
          prs: 'در آکوزاتیو، اسم مذکر "einen" می‌گیرد.',
          tr: 'Akkusativ halinde eril "ein", "einen" haline dönüşür.',
          ar: 'في حالة النصب يتحول المذكر "ein" إلى "einen".',
          es: 'En acusativo, el artículo masculino indeterminado cambia a "einen".'
        }
      },
      {
        id: 'rev_a1_1_q5',
        type: 'multiple_choice',
        instruction: {
          en: 'Separable verbs: Find the correct prefix placement for "aufstehen".',
          fa: 'افعال پیشوندی جداشدنی: جایگاه صحیح پیشوند فعل "aufstehen" را مشخص کنید.',
          prs: 'افعال جداشدنی: پیشوند فعل "aufstehen" در کجای جمله قرار می‌گیرد؟',
          tr: 'Ayrılabilen fiiller: "aufstehen" fiili için ön ekin doğru yerini seçin.',
          ar: 'الأفعال المنفصلة: حدد الموقع الصحيح لسابقة الفعل "aufstehen".',
          es: 'Verbos separables: Encuentra la posición correcta del prefijo de "aufstehen".'
        },
        prompt: 'Herr Müller steht jeden Werktag um sechs Uhr morgens _____.',
        options: ['auf', 'an', 'aus', 'ab'],
        correctAnswer: 'auf',
        explanation: {
          en: 'Separable prefix "auf-" moves to the very end of the main clause: "steht ... auf".',
          fa: 'پیشوند جداشدنی "auf-" در انتهای جمله اصلی قرار می‌گیرد: "steht ... auf".',
          prs: 'پیشوند جداشدنی در آخر جمله اصلی می‌رود: steht ... auf.',
          tr: 'Ayrılabilir ön ek olan "auf-", ana cümlenin en sonuna gider: "steht ... auf".',
          ar: 'تنتقل السابقة المنفصلة "auf-" إلى نهاية الجملة الرئيسية: "steht ... auf".',
          es: 'El prefijo separable "auf-" va al final de la oración principal: "steht ... auf".'
        }
      }
    ]
  },

  // ================= A1.2 REVIEWS =================
  {
    id: 'rev_a1_2_cap3',
    title: 'Übungskapitel 3 (Lektion 8–11: Dativ, Modalverben & Imperativ)',
    lektionRef: 'Lektion 8 bis 11',
    type: 'review',
    level: 'A1.2',
    questions: [
      {
        id: 'rev_a1_2_q1',
        type: 'multiple_choice',
        instruction: {
          en: 'Dative prepositions: Choose the correct preposition with dative for means of transport.',
          fa: 'حروف اضافه داتیو: حرف اضافه مناسب برای وسیله نقلیه (همراه با داتیو) را انتخاب کنید.',
          prs: 'حرف اضافه داتیو برای وسیله نقلیه چیست؟',
          tr: 'Dativ edatları: Ulaşım aracı için doğru edatı seçin.',
          ar: 'حروف الجر مع القابل: اختر حرف الجر المناسب لوسيلة النقل.',
          es: 'Preposiciones con dativo: Elige la preposición correcta para medios de transporte.'
        },
        prompt: 'Ich fahre jeden Tag _____ dem Bus zur Arbeit.',
        options: ['mit', 'bei', 'nach', 'zu'],
        correctAnswer: 'mit',
        explanation: {
          en: 'The preposition "mit" always requires the dative case (mit + dem Bus).',
          fa: 'حرف اضافه "mit" همیشه مفعول داتیو می‌گیرد (mit + dem Bus = با اتوبوس).',
          prs: 'حرف اضافه "mit" همیشه داتیوساز است.',
          tr: '"mit" edatı her zaman dativ gerektirir (mit dem Bus).',
          ar: 'حرف الجر "mit" يتطلب دائماً حالة القابل (Dativ).',
          es: 'La preposición "mit" rige siempre dativo (mit dem Bus).'
        }
      },
      {
        id: 'rev_a1_2_q2',
        type: 'multiple_choice',
        instruction: {
          en: 'Modal verb meaning: Select the modal verb expressing necessity / obligation.',
          fa: 'افعال وجهی: فعل کمکی بیانگر الزام و وظیفه (müssen) را انتخاب کنید.',
          prs: 'فعل وجهی بیانگر اجبار کدام است؟',
          tr: 'Modal fiiller: Zorunluluk bildiren modal fiili seçin.',
          ar: 'الأفعال المساعدة: اختر الفعل المعبر عن الإلزام والضرورة.',
          es: 'Verbos modales: Selecciona el verbo modal que expresa obligación.'
        },
        prompt: 'Der Arzt sagt: Du bist krank und _____ heute im Bett bleiben.',
        options: ['musst', 'darfst', 'willst', 'magst'],
        correctAnswer: 'musst',
        explanation: {
          en: '"müssen" expresses necessity and external obligation; for "du" it is "musst".',
          fa: '"müssen" بیانگر الزام و ضرورت است؛ برای ضمیر du به صورت "musst" صرف می‌شود.',
          prs: 'فعل müssen برای اجبار است و با du می‌شود musst.',
          tr: '"müssen" zorunluluk bildirir; "du" için "musst" kullanılır.',
          ar: 'يعبر "müssen" عن الضرورة والإلزام، وصيغته مع du هي musst.',
          es: '"müssen" expresa necesidad u obligación; con "du" es "musst".'
        }
      },
      {
        id: 'rev_a1_2_q3',
        type: 'multiple_choice',
        instruction: {
          en: 'Subordinate clauses with "weil": What happens to the conjugated verb?',
          fa: 'جملات پیرو با "weil": جایگاه فعل صرف‌شده کجاست؟',
          prs: 'در جمله با weil فعل صرف‌شده در کجا می‌آید؟',
          tr: '"weil" ile yan cümle: Çekimli fiil nereye gider?',
          ar: 'الجملة التابعة مع "weil": أين يقع الفعل المصرف؟',
          es: 'Oraciones subordinadas con "weil": ¿Dónde va el verbo conjugado?'
        },
        prompt: 'Ich lerne Deutsch, weil ich in Deutschland studieren _____.',
        options: ['möchte', 'möchten', 'willst', 'möchtet'],
        correctAnswer: 'möchte',
        explanation: {
          en: 'Conjunction "weil" introduces a subordinate clause (Nebensatz) where the conjugated verb moves to the very end: "... studieren möchte".',
          fa: 'حرف ربط "weil" جمله فرعی می‌سازد که در آن فعل صرف‌شده به پایان جمله منتقل می‌شود: "... studieren möchte".',
          prs: 'حرف ربط weil فعل را به آخر جمله می‌برد.',
          tr: '"weil" bağlacı çekimli fiili cümlenin en sonuna atar.',
          ar: 'أداة الربط "weil" تنقل الفعل المصرف إلى نهاية الجملة تماماً.',
          es: 'La conjunción subordinante "weil" envía el verbo conjugado al final de la oración.'
        }
      }
    ]
  },

  // ================= A2.1 REVIEWS =================
  {
    id: 'rev_a2_1_cap5',
    title: 'Übungskapitel 5 (Lektion 1–4: Perfekt & Wechselpräpositionen)',
    lektionRef: 'Lektion 1 bis 4',
    type: 'review',
    level: 'A2.1',
    questions: [
      {
        id: 'rev_a2_1_q1',
        type: 'multiple_choice',
        instruction: {
          en: 'Past tense Perfekt: Select the auxiliary verb for a verb of movement (fahren).',
          fa: 'زمان گذشته پرفکت: فعل کمکی مناسب برای فعل حرکتی "fahren" را انتخاب کنید.',
          prs: 'گذشته کامل: فعل کمکی برای fahren چیست؟',
          tr: 'Perfekt zamanı: Hareket bildiren "fahren" fiili için doğru yardımcı fiili seçin.',
          ar: 'الماضي التام: اختر الفعل المساعد المناسب لفعل الحركة "fahren".',
          es: 'Pasado Perfekt: Selecciona el verbo auxiliar para el verbo de movimiento "fahren".'
        },
        prompt: 'Wir _____ letztes Wochenende nach München gefahren.',
        options: ['haben', 'sind', 'waren', 'hatten'],
        correctAnswer: 'sind',
        explanation: {
          en: 'Verbs of motion involving change of location (fahren, gehen, fliegen) take "sein" as auxiliary in Perfekt.',
          fa: 'افعال حرکتی نشان‌دهنده تغییر مکان (مانند fahren، gehen، fliegen) در زمان گذشته کامل با "sein" ترکیب می‌شوند: wir sind gefahren.',
          prs: 'افعال حرکتی با sein در گذشته کامل صرف می‌شوند: wir sind gefahren.',
          tr: 'Yer değiştiren hareket fiilleri (fahren vb.) Perfektte "sein" yardımcı fiiliyle kurulur.',
          ar: 'أفعال الحركة الدالة على الانتقال تأخذ "sein" كفعل مساعد: wir sind gefahren.',
          es: 'Los verbos de movimiento que implican cambio de lugar se conjugan con "sein" en Perfekt.'
        }
      },
      {
        id: 'rev_a2_1_q2',
        type: 'multiple_choice',
        instruction: {
          en: 'Two-way prepositions (Wechselpräpositionen): Direction (Wohin? -> Akkusativ).',
          fa: 'حروف اضافه متغیر: جهت حرکت (به کجا؟ Wohin? -> آکوزاتیو).',
          prs: 'حروف اضافه متغیر با جهت حرکت (Wohin): آکوزاتیو.',
          tr: 'Yönelme durumu (Wohin? -> Akkusativ): Doğru artikeli seçin.',
          ar: 'حروف الجر الثنائية مع الاتجاه (Wohin -> Akkusativ).',
          es: 'Preposiciones variables con dirección (Wohin? -> Acusativo).'
        },
        prompt: 'Ich lege das Buch auf _____ Tisch. (der Tisch)',
        options: ['dem', 'den', 'der', 'das'],
        correctAnswer: 'den',
        explanation: {
          en: 'Action of placing (legen = Wohin? movement) demands accusative: auf + den Tisch.',
          fa: 'فعل حرکتی قرار دادن (legen = حرکت به سمت هدفی) مستلزم آکوزاتیو است: auf den Tisch.',
          prs: 'چون عمل حرکت است (Wohin)، آکوزاتیو می‌آید: auf den Tisch.',
          tr: '"legen" eylemi hareket/yönelme bildirdiği için Akkusativ alır: auf den Tisch.',
          ar: 'الفعل legen يعبر عن حركة وتوجيه (Wohin) فيأخذ منصباً: auf den Tisch.',
          es: 'El verbo "legen" implica acción y movimiento (Wohin?), por lo que rige acusativo: auf den Tisch.'
        }
      }
    ]
  },

  // ================= A2.2 REVIEWS =================
  {
    id: 'rev_a2_2_cap7',
    title: 'Übungskapitel 7 (Lektion 8–11: Relativsätze & Konjunktiv II)',
    lektionRef: 'Lektion 8 bis 11',
    type: 'review',
    level: 'A2.2',
    questions: [
      {
        id: 'rev_a2_2_q1',
        type: 'multiple_choice',
        instruction: {
          en: 'Relative clauses: Choose the correct masculine nominative relative pronoun.',
          fa: 'جملات موصولی: ضمیر موصولی مذکر در حالت فاعلی را انتخاب کنید.',
          prs: 'جملات موصولی: ضمیر موصولی برای اسم مذکر فاعلی کدام است؟',
          tr: 'İlgi cümleleri: Yalın eril isim için doğru ilgi zamirini seçin.',
          ar: 'جمل الوصل: اختر ضمير الوصل المذكر في حالة الرفع.',
          es: 'Oraciones de relativo: Elige el pronombre relativo masculino nominativo.'
        },
        prompt: 'Das ist der neue Nachbar, _____ seit gestern neben mir wohnt.',
        options: ['der', 'den', 'dem', 'dessen'],
        correctAnswer: 'der',
        explanation: {
          en: 'The antecedent "der Nachbar" is masculine singular, and acts as subject (Nominativ) inside the relative clause: "der".',
          fa: 'مرجع ضمیر "der Nachbar" مذکر است و در داخل جمله موصولی نقش فاعل دارد، بنابراین ضمیر موصولی "der" است.',
          prs: 'چون در جمله موصولی فاعل است و اسم مذکر است، der می‌آید.',
          tr: '"der Nachbar" eril ve yan cümlede özne konumunda olduğu için "der" kullanılır.',
          ar: 'الاسم الموصول مذكر وفي موقع الفاعل في جملة الصلة، لذا نستخدم "der".',
          es: 'El antecedente es masculino y funciona como sujeto en la subordinada: "der".'
        }
      },
      {
        id: 'rev_a2_2_q2',
        type: 'multiple_choice',
        instruction: {
          en: 'Polite Konjunktiv II: Complete the request with "könnten" or "würden".',
          fa: 'کونیونکتیو ۲ مؤدبانه: جمله خواهش محترمانه را تکمیل کنید.',
          prs: 'خواهش مودبانه با Konjunktiv II.',
          tr: 'Kibar istek (Konjunktiv II): Cümleyi tamamlayın.',
          ar: 'صيغة الاحتمال والتأدب: أكمل الرجاء المهذب.',
          es: 'Konjunktiv II de cortesía: Completa la petición formal.'
        },
        prompt: '_____ Sie mir bitte das Salz reichen?',
        options: ['Könnten', 'Können', 'Haben', 'Sein'],
        correctAnswer: 'Könnten',
        explanation: {
          en: 'Polite request in Konjunktiv II uses "Könnten Sie ...?" which is gentler and more courteous than "Können Sie ...?".',
          fa: 'برای بیان خواهش بسیار مؤدبانه از فرمول "Könnten Sie ...?" در وجه Konjunktiv II استفاده می‌شود.',
          prs: 'برای خواهش مودبانه "Könnten Sie ...?" استفاده می‌شود.',
          tr: 'Kibar ricalarda Konjunktiv II formu olan "Könnten Sie ...?" tercih edilir.',
          ar: 'للطلب المهذب نستخدم صيغة Konjunktiv II: "Könnten Sie ...?".',
          es: 'Para peticiones educadas se utiliza la forma de Konjunktiv II: "Könnten Sie ...?".'
        }
      }
    ]
  },

  // ================= B1.1 REVIEWS =================
  {
    id: 'rev_b1_1_cap9',
    title: 'Übungskapitel 9 (Lektion 1–4: Infinitiv mit zu & Konzessivsätze)',
    lektionRef: 'Lektion 1 bis 4',
    type: 'review',
    level: 'B1.1',
    questions: [
      {
        id: 'rev_b1_1_q1',
        type: 'multiple_choice',
        instruction: {
          en: 'Infinitive with "zu": Where is "zu" placed in a separable verb?',
          fa: 'مصدر با zu: در افعال جداشدنی، "zu" دقیقاً در کجا قرار می‌گیرد؟',
          prs: 'در افعال جداشدنی با zu، جایگاه کلمه zu کجاست؟',
          tr: 'zu\'lu mastar: Ayrılabilen fiilde "zu" nereye yerleştirilir?',
          ar: 'صيغة المصدر مع zu: أين توضع zu في الأفعال المنفصلة؟',
          es: 'Infinitivo con zu: ¿Dónde se coloca "zu" en los verbos separables?'
        },
        prompt: 'Ich habe vor, morgen mein Zimmer gründlich _____. (aufräumen)',
        options: ['aufzuräumen', 'zu aufräumen', 'aufgeräumt zu haben', 'aufzuräumen zu'],
        correctAnswer: 'aufzuräumen',
        explanation: {
          en: 'In separable verbs, "zu" is inserted between the prefix and the verbal stem: auf + zu + räumen = aufzuräumen.',
          fa: 'در افعال جداشدنی، حرف "zu" بین پیشوند و ساقه فعل قرار می‌گیرد: auf-zu-räumen.',
          prs: 'کلمه zu بین پیشوند و فعل قرار می‌گیرد: aufzuräumen.',
          tr: 'Ayrılabilir fiillerde "zu", ön ek ile fiil kökünün arasına girer: aufzuräumen.',
          ar: 'في الأفعال المنفصلة توضع "zu" بين السابقة وجذر الفعل: aufzuräumen.',
          es: 'En los verbos separables, "zu" se inserta entre el prefijo y la raíz: aufzuräumen.'
        }
      },
      {
        id: 'rev_b1_1_q2',
        type: 'multiple_choice',
        instruction: {
          en: 'Concessive clauses: Choose the conjunction meaning "although" (obwohl).',
          fa: 'حروف ربط بیانگر تضاد و خلاف انتظار: حرف ربط به معنای "با وجود اینکه" (obwohl) را انتخاب کنید.',
          prs: 'حرف ربط بیانگر تضاد و تناقض.',
          tr: 'Zıtlık bildiren yan cümle bağlacı: "-e rağmen" (obwohl) seçin.',
          ar: 'أداة ربط التناقض: اختر الأداة الدالة على "على الرغم من".',
          es: 'Oraciones concesivas: Elige la conjunción "a pesar de que" (obwohl).'
        },
        prompt: '_____ es stark regnete, machten wir einen langen Spaziergang.',
        options: ['Obwohl', 'Weil', 'Damit', 'Deshalb'],
        correctAnswer: 'Obwohl',
        explanation: {
          en: '"Obwohl" expresses a concession contrary to expectation and introduces a subordinate clause with the verb at the end.',
          fa: '"Obwohl" به معنای «با اینکه / هرچند» است و جمله پیرو با فعل در انتها می‌سازد.',
          prs: 'Obwohl یعنی با وجود اینکه، و فعل را به آخر می‌برد.',
          tr: '"Obwohl" beklenenin aksine durumları (-e rağmen) belirtir ve fiili sona atar.',
          ar: '"Obwohl" تعني "بالرغم من أن" وتأتي مع جملة تابعة ينتهي فيها الفعل.',
          es: '"Obwohl" introduce una subordinada concesiva ("a pesar de que") con verbo al final.'
        }
      }
    ]
  },

  // ================= B1.2 REVIEWS =================
  {
    id: 'rev_b1_2_cap11',
    title: 'Übungskapitel 11 (Lektion 8–11: Passiv & N-Deklination)',
    lektionRef: 'Lektion 8 bis 11',
    type: 'review',
    level: 'B1.2',
    questions: [
      {
        id: 'rev_b1_2_q1',
        type: 'multiple_choice',
        instruction: {
          en: 'Process Passive (Vorgangspassiv): Select the correct passive auxiliary for present tense.',
          fa: 'مجهول فرآیندی: فعل کمکی مجهول‌ساز (werden) برای فاعل جمع را انتخاب کنید.',
          prs: 'مجهول آلمانی در زمان حال ساده.',
          tr: 'Edilgen çatı (Passiv): Şimdiki zamanda çoğul özne için doğru yardımcı fiili seçin.',
          ar: 'المبني للمجهول: اختر صيغة الفعل المساعد للمبني للمجهول في الحاضر.',
          es: 'Voz pasiva de proceso: Selecciona el auxiliar correcto en presente.'
        },
        prompt: 'Die neuen Autos _____ in Deutschland produziert.',
        options: ['werden', 'wurden', 'worden', 'haben'],
        correctAnswer: 'werden',
        explanation: {
          en: 'Present passive formula: finite form of "werden" + Partizip II. Plural "Die Autos" -> "werden produziert".',
          fa: 'فرمول مجهول زمان حال: صرف فعل werden + شکل Partizip II فعل اصلی. برای جمع: werden produziert.',
          prs: 'برای مجهول زمان حال: werden + Partizip II.',
          tr: 'Şimdiki zaman Passiv formülü: "werden" + Partizip II (werden produziert).',
          ar: 'قاعدة المبني للمجهول في الحاضر: تصريف werden + اسم المفعول Partizip II.',
          es: 'Fórmula de pasiva en presente: werden conjugado + Partizip II: "werden produziert".'
        }
      },
      {
        id: 'rev_b1_2_q2',
        type: 'multiple_choice',
        instruction: {
          en: 'N-Declension (Weak masculine nouns): Decline "der Kollege" in the accusative.',
          fa: 'صرف اسامی ضعیف مذکر (N-Deklination): صرف کلمه "der Kollege" در حالت آکوزاتیو.',
          prs: 'صرف مذکر ضعیف در حالت آکوزاتیو.',
          tr: 'N-bükümü (zayıf eril isimler): "der Kollege" kelimesinin Akkusativ hali.',
          ar: 'إعراب الأسماء الضعيفة: تصريف "der Kollege" في حالة النصب.',
          es: 'Declinación débil masculina (N-Deklination): Declina "der Kollege" en acusativo.'
        },
        prompt: 'Ich habe heute meinen neuen _____ kennengelernt. (der Kollege)',
        options: ['Kollegen', 'Kollege', 'Kolleges', 'Kollegem'],
        correctAnswer: 'Kollegen',
        explanation: {
          en: 'Weak masculine nouns (N-Deklination) take the ending "-n" or "-en" in all cases except nominative singular: den Kollegen.',
          fa: 'اسامی ضعیف مذکر در تمام حالت‌ها جز فاعلی مفرد پسوند "-n" یا "-en" می‌گیرند: den Kollegen.',
          prs: 'اسامی N-Deklination در مفعول پسوند "-n" می‌گیرند: den Kollegen.',
          tr: 'Zayıf eril isimler yalın tekil hariç tüm hallerde "-n / -en" eki alır: den Kollegen.',
          ar: 'الأسماء المذكرة الضعيفة تأخذ اللاحقة "-n / -en" في كافة الحالات عدا الرفع المفرد.',
          es: 'Los sustantivos masculinos débiles reciben la terminación "-n" o "-en" en todos los casos salvo nominativo.'
        }
      }
    ]
  }
];
