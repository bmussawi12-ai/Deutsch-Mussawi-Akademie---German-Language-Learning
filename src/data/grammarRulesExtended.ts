import { GrammarRule } from '../types';

export const EXTENDED_GRAMMAR_RULES: GrammarRule[] = [
  // ==========================================
  // A2.2 RULES
  // ==========================================
  {
    id: 'a2_2_dativ_akkusativ',
    level: 'A2.2',
    lektion: 8,
    germanTitle: 'Verben mit Dativ- und Akkusativobjekt (Stellungsregeln)',
    formula: 'Subjekt + Verb + Dativ (wem?) + Akkusativ (wen/was?)',
    explanation: {
      en: 'When a verb takes both a Dative and an Accusative object: if both are nouns, the Dative object (usually a person) precedes the Accusative object (thing). If pronouns are used, the Accusative pronoun precedes the Dative pronoun.',
      fa: 'اگر جمله دو مفعول اسمی داشته باشد، مفعول داتیو (شخص) جلوتر از مفعول آکوزاتیو (شیء) قرار می‌گیرد: S + V + Dativ + Akkusativ. اما اگر هر دو ضمیر باشند، ضمیر آکوزاتیو جلوتر می‌آید.',
      prs: 'هرگاه یک فعل دو مفعول اسمی بگیرد، مفعول داتیف (شخص) پیش از مفعول اکوزاتیف (شیء) می‌آید. اما اگر از ضمایر کار گرفته شود، ضمیر اکوزاتیف قبل از ضمیر داتیف قرار می‌گیرد.',
      tr: 'İki isim nesnesi varsa: Dativ (şahıs) Akkusativ\'den (nesne) önce gelir. Zamir kullanıldığında ise Akkusativ zamiri Dativ\'den önce gelir.',
      ar: 'عند وجود مفعولين من الأسماء، يتقدم مفعول الداتيف (الشخص) على الأكوزاتيف (الشيء). أما مع الضمائر فيتقدم ضمير الأكوزاتيف.',
      es: 'Con dos sustantivos objeto, el dativo (persona) precede al acusativo (cosa). Con pronombres, el acusativo precede al dativo.'
    },
    category: 'verbs',
    examples: [
      {
        german: 'Der Chef gibt der neuen Mitarbeiterin den Büroschlüssel.',
        formulaBreakdown: 'Der Chef (S) + gibt (V) + der neuen Mitarbeiterin (Dativ) + den Büroschlüssel (Akkusativ).',
        literalTranslation: {
          en: 'The boss gives to-the new employee the office-key.',
          fa: 'رئیس به کارمند جدید کلید دفتر را می‌دهد.',
          prs: 'رئیس به کارمند جدید کلید دفتر کار را می‌دهد.',
          tr: 'Patron yeni çalışana ofis anahtarını verir.',
          ar: 'يعطي المدير الموظفة الجديدة مفتاح المكتب.',
          es: 'El jefe le da a la nueva empleada la llave de la oficina.'
        },
        fluentTranslation: {
          en: 'The manager hands the office key to the new employee.',
          fa: 'مدیر کلید دفتر را به همکار جدید تحویل می‌دهد.',
          prs: 'مدیر کلید دفتر را به کارمند نو تسلیم می‌نماید.',
          tr: 'Müdür yeni çalışana ofisin anahtarını teslim eder.',
          ar: 'يسلّم المدير مفتاح المكتب للموظفة الجديدة.',
          es: 'El jefe entrega la llave del despacho a la nueva empleada.'
        },
        isAdvanced: false
      },
      {
        german: 'Er erklärt es ihr ausführlich.',
        formulaBreakdown: 'Er (S) + erklärt (V) + es (Pron. Akk) + ihr (Pron. Dat) + ausführlich.',
        literalTranslation: {
          en: 'He explains it to-her in-detail.',
          fa: 'او آن را به او به طور مفصل توضیح می‌دهد.',
          prs: 'او آن موضوع را برای او با تفصیل بیان می‌کند.',
          tr: 'O bunu ona ayrıntılı olarak açıklar.',
          ar: 'يشرحه لها بالتفصيل.',
          es: 'Él se lo explica a ella detalladamente.'
        },
        fluentTranslation: {
          en: 'He explains it to her thoroughly.',
          fa: 'او آن مسئله را به صورت مشروح برای وی توضیح می‌دهد.',
          prs: 'او موضوع را با جزئیات کامل به او تشریح می‌نماید.',
          tr: 'Bunu ona etraflıca izah eder.',
          ar: 'يشرح لها الأمر بكل تفصيل.',
          es: 'Él se lo explica a ella con todo detalle.'
        },
        isAdvanced: true
      }
    ]
  },

  // ==========================================
  // B1.2 RULES
  // ==========================================
  {
    id: 'b1_2_konjunktiv2',
    level: 'B1.2',
    lektion: 8,
    germanTitle: 'Konjunktiv II der Gegenwart (Höflichkeit, Wünsche & Ratschläge)',
    formula: 'Subjekt + würde / könnte / hätte / wäre + ... + Infinitiv (Satzende)',
    explanation: {
      en: 'Konjunktiv II expresses polite requests, hypotheticals, wishes, and advice. Most verbs form it with "würde" + infinitive at sentence end. The auxiliary verbs haben and sein, as well as modal verbs, use their own forms: hätte, wäre, könnte, müsste, sollte.',
      fa: 'کُنیونکتیو ۲ برای بیان درخواست‌های بسیار محترمانه در محیط کار و ادارات، آرزوها، شرایط غیرواقعی و توصیه‌ها به کار می‌رود: فعل‌های معمولی با würde + مصدر در انتهای جمله، و haben/sein/افعال مدال با اشکال اختصاصی خود (hätte, wäre, könnte, sollte) ساخته می‌شوند.',
      prs: 'کُنیونکتیو ۲ (Konjunktiv II) برای بیان ادب و احترام رسمی در مکالمات اداری، آرزوها و مشوره‌ها استفاده می‌شود. افعال عادی با würde و مصدر در اخیر جمله، و افعال کمکی و مدال با اشکال ویژه خود (hätte، wäre، könnte، sollte) می‌آیند.',
      tr: 'Konjunktiv II nezaket bildiren ricalar, dilekler ve tavsiyeler için kullanılır. Çoğu fiil "würde + mastar", sein/haben ve modal fiiller ise özel formlarıyla (wäre, hätte, könnte) çekilir.',
      ar: 'تستخدم صيغة Konjunktiv II للطلبات المهذبة جداً في الدوائر الرسمية والتعبير عن الأماني وتقديم النصائح (würde + المصدر، أو hätte/wäre/könnte).',
      es: 'El Konjunktiv II expresa cortesía, deseos, situaciones irreales y consejos. Se forma con "würde + infinitivo", o con formas propias para sein, haben y modales (wäre, hätte, könnte).'
    },
    category: 'verbs',
    examples: [
      {
        german: 'Könnten Sie mir bitte die Bewerbungsunterlagen per E-Mail zusenden?',
        formulaBreakdown: 'Könnten (V1 Konj. II) + Sie (S) + mir die Unterlagen (...) + zusenden (V2 Infinitiv)?',
        literalTranslation: {
          en: 'Could you please to-me the application-documents by email send?',
          fa: 'می‌توانستید لطفاً مدارک درخواست کار را با ایمیل برای من ارسال کنید؟',
          prs: 'آیا می‌توانید مهربانی نموده اسناد درخواستی کار را با ایمیل برایم ارسال فرمایید؟',
          tr: 'Başvuru belgelerini bana e-postayla gönderebilir miydiniz?',
          ar: 'هل يمكن لحضرتك إرسال وثائق التقديم بالبريد الإلكتروني من فضلك؟',
          es: '¿Podría enviarme los documentos de solicitud por correo electrónico?'
        },
        fluentTranslation: {
          en: 'Could you please email me the application documents?',
          fa: 'ممکن است لطفاً مدارک استخدام را با ایمیل برای من ارسال نمایید؟',
          prs: 'لطفاً ممکن است اسناد کاریابی را از طریق ایمیل برایم بفرستید؟',
          tr: 'Zahmet olmazsa başvuru evraklarını e-posta ile gönderebilir misiniz?',
          ar: 'هل تتفضل بإرسال ملف التقديم عبر البريد الإلكتروني؟',
          es: '¿Sería tan amable de enviarme los documentos de la candidatura por correo?'
        },
        isAdvanced: false
      },
      {
        german: 'Wenn ich mehr Zeit hätte, würde ich mich intensiver auf die B1-Prüfung vorbereiten.',
        formulaBreakdown: 'Wenn ich (S) + mehr Zeit + hätte (V am Ende), würde (V1) + ich (S) + mich vorbereiten (V2 Inf).',
        literalTranslation: {
          en: 'If I more time had, would I myself more-intensively on the B1-exam prepare.',
          fa: 'اگر من زمان بیشتری می‌داشتم، با تمرکز بیشتری برای آزمون B1 آماده می‌شدم.',
          prs: 'اگر وقت بیشتری می‌داشتم، با جدیت بیشتر برای امتحان B1 آمادگی می‌گرفتم.',
          tr: 'Daha çok vaktim olsaydı, B1 sınavına daha yoğun şekilde hazırlanırdım.',
          ar: 'لو كان لدي مزيد من الوقت، لاستعددت لاختبار B1 بشكل أكثر كثافة.',
          es: 'Si tuviera más tiempo, me prepararía más intensamente para el examen B1.'
        },
        fluentTranslation: {
          en: 'If I had more time, I would prepare more thoroughly for the B1 exam.',
          fa: 'اگر وقت بیشتری داشتم، برای آزمون B1 با جدیت بیشتری آماده می‌شدم.',
          prs: 'اگر فرصت بیشتری می‌داشتم، با تمرکز و تلاش بیشتر خود را برای امتحان B1 آماده می‌کردم.',
          tr: 'Daha fazla zamanım olsa B1 sınavına çok daha sıkı çalışırdım.',
          ar: 'لو أتيح لي متسع من الوقت لركزت دراستي لاجتياز اختبار B1.',
          es: 'De disponer de más tiempo, me prepararía con mayor dedicación para el examen B1.'
        },
        isAdvanced: true
      }
    ]
  },
  {
    id: 'b1_2_passiv_praesens',
    level: 'B1.2',
    lektion: 9,
    germanTitle: 'Das Vorgangspassiv im Präsens und Präteritum',
    formula: 'Präsens: Subjekt + wird/werden + ... + Partizip II | Präteritum: Subjekt + wurde/wurden + ... + Partizip II',
    explanation: {
      en: 'The passive voice shifts focus onto the process or action, while the agent (actor) is omitted or introduced with "von" + Dative (persons/institutions) or "durch" + Accusative (means/causes).',
      fa: 'حالت مجهول (Passiv) زمانی به کار می‌رود که عمل انجام‌شده یا رویداد اهمیت دارد، نه شخص انجام‌دهنده. فاعل جمله معلوم حذف شده یا با حرف اضافه von (+ داتیو برای اشخاص) یا durch (+ آکوزاتیو برای وسایل و علل) بیان می‌شود.',
      prs: 'مجهول (Passiv) وقتی استعمال می‌گردد که خود عمل یا نتیجه مورد توجه باشد. فاعل اصلی حذف می‌شود یا همراه با von (برای اشخاص و ادارات با داتیف) یا durch (برای اسباب و علل با اکوزاتیف) ذکر می‌گردد.',
      tr: 'Edilgen çatı (Passiv), eylemin kendisine odaklanıldığında kullanılır. Eylemi yapan "von + Dativ" veya "durch + Akkusativ" ile belirtilebilir.',
      ar: 'يستخدم المبني للمجهول للتركيز على الفعل والحدث بدلاً من الفاعل، ويمكن الإشارة للفاعل بواسطة von مع الداتيف.',
      es: 'La voz pasiva centra la atención en la acción. El agente puede indicarse con "von + dativo" (personas) o "durch + acusativo" (medios).'
    },
    category: 'verbs',
    examples: [
      {
        german: 'Der Patient wird gründlich vom Chefarzt untersucht.',
        formulaBreakdown: 'Der Patient (S) + wird (V1 Präsens) + gründlich vom Chefarzt (von + Dat) + untersucht (V2 P.II).',
        literalTranslation: {
          en: 'The patient becomes thoroughly by-the head-physician examined.',
          fa: 'بیمار به طور کامل توسط پزشک ارشد معاینه می‌شود.',
          prs: 'مریض به گونه اساسی از سوی سرطبیب شفاخانه معاینه می‌گردد.',
          tr: 'Hasta, başhekim tarafından titizlikle muayene edilir.',
          ar: 'يُفحص المريض فحصاً دقيقاً من قِبل كبير الأطباء.',
          es: 'El paciente es examinado minuciosamente por el médico jefe.'
        },
        fluentTranslation: {
          en: 'The patient is examined thoroughly by the chief physician.',
          fa: 'بیمار توسط رئیس بخش به طور دقیق مورد معاینه قرار می‌گیرد.',
          prs: 'مریض به صورت همه‌جانبه توسط داکتر ارشد معاینه می‌شود.',
          tr: 'Hasta, başhekim tarafından etraflıca muayene edilmektedir.',
          ar: 'يقوم رئيس الأطباء بفحص المريض فحصاً شاملاً.',
          es: 'El paciente es reconocido minuciosamente por el médico especialista.'
        },
        isAdvanced: false
      },
      {
        german: 'Die Wohnungsübergabe wurde gestern im Protokoll festgehalten.',
        formulaBreakdown: 'Die Wohnungsübergabe (S) + wurde (V1 Präteritum) + gestern im Protokoll + festgehalten (V2 P.II).',
        literalTranslation: {
          en: 'The apartment-handover became yesterday in-the protocol recorded.',
          fa: 'تحویل آپارتمان دیروز در صورت‌جلسه ثبت شد.',
          prs: 'تسلیمی خانه دیروز در پروتوکول رسمی ثبت و امضا شد.',
          tr: 'Daire teslimi dün tutanakla kayıt altına alındı.',
          ar: 'تم توثيق تسليم الشقة أمس في محضر الاستلام.',
          es: 'La entrega de la vivienda quedó registrada ayer en el acta.'
        },
        fluentTranslation: {
          en: 'The apartment handover was officially recorded in the protocol yesterday.',
          fa: 'تحویل واحد مسکونی روز گذشته رسماً در صورت‌جلسه قید گردید.',
          prs: 'پروسه تسلیم‌گیری خانه دیروز به گونه رسمی در پروتوکول درج گردید.',
          tr: 'Dairenin devir teslimi dün resmi tutanakla belgelendi.',
          ar: 'جرى توثيق استلام الشقة رسمياً في محضر التسليم يوم أمس.',
          es: 'La entrega del inmueble quedó formalizada en el acta de recepción.'
        },
        isAdvanced: true
      }
    ]
  },
  {
    id: 'b1_2_zweiteilige_konnektoren',
    level: 'B1.2',
    lektion: 10,
    germanTitle: 'Zweiteilige Konnektoren (Doppelkonnektoren)',
    formula: 'sowohl [A] als auch [B] | nicht nur [A], sondern auch [B] | weder [A] noch [B] | entweder [A] oder [B]',
    explanation: {
      en: 'Two-part connectors join grammatically parallel elements: "sowohl... als auch" expresses addition (both... and); "nicht nur... sondern auch" expresses escalating addition (not only... but also); "weder... noch" negates both elements completely.',
      fa: 'حروف ربط دوتایی برای اتصال دو عنصر هم‌تراز نحوی به کار می‌روند: sowohl... als auch یعنی هم این و هم آن؛ nicht nur... sondern auch یعنی نه تنها این بلکه آن هم؛ weder... noch هر دو مورد را به طور همزمان منفی می‌کند.',
      prs: 'کلمات ربط دوگانه برای پیوند دادن دو بخش مساوی جمله استفاده می‌شوند: sowohl... als auch (هم این و هم آن)، nicht nur... sondern auch (نه تنها این بلکه آن هم)، و weder... noch (نه این و نه آن) که هردو بخش را نفی می‌نماید.',
      tr: 'İki parçalı bağlaçlar eşit ögeleri bağlar: hem... hem de (sowohl... als auch), sadece... değil aynı zamanda (nicht nur... sondern auch), ne... ne de (weder... noch).',
      ar: 'تربط الروابط المزدوجة بين العناصر المتوازية: (ليس فقط... بل أيضاً، لا... ولا، إما... أو).',
      es: 'Los conectores dobles enlazan elementos sintácticos equivalentes: tanto... como, no solo... sino también, ni... ni.'
    },
    category: 'conjunctions',
    examples: [
      {
        german: 'Der Bewerber spricht sowohl fließend Deutsch als auch verhandlungssicher Englisch.',
        formulaBreakdown: 'Der Bewerber spricht + sowohl [Deutsch] + als auch [Englisch].',
        literalTranslation: {
          en: 'The applicant speaks as-well fluent German as also negotiation-safe English.',
          fa: 'متقاضی کار هم آلمانی روان و هم انگلیسی در سطح مذاکره صحبت می‌کند.',
          prs: 'کاندید کار هم آلمانی روان و هم انگلیسی را در سطح مذاکره بلدیت دارد.',
          tr: 'Aday hem akıcı Almanca hem de müzakere düzeyinde İngilizce konuşuyor.',
          ar: 'يتحدث المتقدم كلاً من الألمانية بطلاقة والإنجليزية بمستوى تفاوضي.',
          es: 'El candidato habla tanto alemán fluido como inglés a nivel de negociación.'
        },
        fluentTranslation: {
          en: 'The applicant speaks both fluent German and professional business English.',
          fa: 'متقاضی هم به زبان آلمانی روان صحبت می‌کند و هم به زبان انگلیسی در سطح تجاری مسلط است.',
          prs: 'متقاضی کار هم به زبان آلمانی با فصاحت کامل و هم به انگلیسی مسلکی صحبت می‌کند.',
          tr: 'Aday hem akıcı Almancaya hem de ileri seviye iş İngilizcesine hakimdir.',
          ar: 'يجيد المتقدم كلاً من الألمانية بطلاقة والإنجليزية المهنية الممتازة.',
          es: 'El candidato domina con soltura tanto el alemán como el inglés profesional.'
        },
        isAdvanced: false
      },
      {
        german: 'In diesem Mietvertrag sind weder Haustiere gestattet noch ist das Rauchen in der Wohnung erlaubt.',
        formulaBreakdown: 'weder [Haustiere gestattet] + noch [ist das Rauchen erlaubt].',
        literalTranslation: {
          en: 'In this lease are neither pets allowed nor is smoking in the flat permitted.',
          fa: 'در این اجاره‌نامه نه نگهداری حیوانات مجاز است و نه سیگار کشیدن در آپارتمان اجازه داده شده است.',
          prs: 'در این قرارداد کرایه نه نگهداری حیوانات خانگی مجاز است و نه سگرت کشیدن در داخل خانه روا است.',
          tr: 'Bu kira kontratında ne evcil hayvanlara izin veriliyor ne de dairede sigara içilmesine müsaade ediliyor.',
          ar: 'في عقد الإيجار هذا لا يُسمح بالحيوانات الأليفة ولا بالتدخين داخل الشقة.',
          es: 'En este contrato de arrendamiento no se permiten mascotas ni se autoriza fumar dentro de la vivienda.'
        },
        fluentTranslation: {
          en: 'Under this tenancy agreement, neither pets nor smoking inside the apartment are permitted.',
          fa: 'طبق این قرارداد اجاره، نگهداری حیوانات خانگی و استعمال دخانیات در داخل آپارتمان کاملاً ممنوع است.',
          prs: 'مطابق مقررات این قرارداد کرایه، نه آوردن حیوان و نه کشیدن سگرت در داخل آپارتمان اجازه ندارد.',
          tr: 'Bu kira sözleşmesine göre dairede ne evcil hayvan beslenebilir ne de sigara içilebilir.',
          ar: 'يحظر عقد الإيجار هذا اقتناء الحيوانات الأليفة تماماً كما يمنع التدخين داخل الشقة.',
          es: 'En virtud de este contrato, quedan prohibidas tanto las mascotas como fumar en el interior.'
        },
        isAdvanced: true
      }
    ]
  },

  // ==========================================
  // B2.2 RULES
  // ==========================================
  {
    id: 'b2_2_zustandspassiv',
    level: 'B2.2',
    lektion: 8,
    germanTitle: 'Das Zustandspassiv (sein + Partizip II)',
    formula: 'Subjekt + konjugiertes sein + ... + Partizip II',
    explanation: {
      en: 'The Zustandspassiv describes the completed, static result of a prior action using "sein" + Partizip II. Unlike Vorgangspassiv (werden), no process is taking place—the focus is on the state.',
      fa: 'مجهول وضعیتی (Zustandspassiv) وضعیت ثابت و نتیجه یک عمل گذشته را بیان می‌کند: sein + Partizip II. برخلاف مجهول فرآیندی (werden)، در اینجا هیچ عملی در حال انجام نیست، بلکه حالت حاضر توصیف می‌شود.',
      prs: 'مجهول حالتی (Zustandspassiv) نتیجه نهایی و پایدار یک کار را نشان می‌دهد (با sein و صفت مفعولی). تمرکز بر وضعیت فعلی است نه بر جریان انجام کار.',
      tr: 'Zustandspassiv tamamlanmış eylemin sonucunu "sein + Partizip II" ile anlatır. Devam eden bir süreç değil, mevcut durum vurgulanır.',
      ar: 'يعبر Zustandspassiv عن النتيجة المستقرة للحدث (sein + اسم المفعول)، ويركز على الحالة القائمة لا سيرورة الحدث.',
      es: 'La pasiva de estado denota el resultado estático tras una acción previa con "sein" + Partizip II.'
    },
    category: 'verbs',
    examples: [
      {
        german: 'Die Produktionsanlage ist vollständig automatisiert.',
        formulaBreakdown: 'Die Produktionsanlage (S) + ist (sein) + vollständig automatisiert (Partizip II).',
        literalTranslation: {
          en: 'The production-plant is completely automated.',
          fa: 'خط تولید کاملاً خودکارسازی شده است (در وضعیت خودکار قرار دارد).',
          prs: 'خط تولید فابریکه به گونه کامل اتومات و خودکار ساخته شده است.',
          tr: 'Üretim tesisi tamamen otomatikleştirilmiştir.',
          ar: 'منشأة الإنتاج مؤتمتة بالكامل.',
          es: 'La planta de producción está totalmente automatizada.'
        },
        fluentTranslation: {
          en: 'The manufacturing plant is fully automated.',
          fa: 'تاسیسات تولیدی در وضعیت اتوماسیون کامل قرار دارد.',
          prs: 'فابریکه تولیدی اکنون به شکل کاملاً خودکار و مدرن فعالیت می‌کند.',
          tr: 'Üretim tesisi eksiksiz bir otomasyona sahiptir.',
          ar: 'تتميز خطوط الإنتاج بالأتمتة الشاملة والكاملة.',
          es: 'La instalación fabril se encuentra completamente automatizada.'
        },
        isAdvanced: false
      }
    ]
  },

  // ==========================================
  // C1.2 RULES
  // ==========================================
  {
    id: 'c1_2_erweiterte_partizipien',
    level: 'C1.2',
    lektion: 8,
    germanTitle: 'Erweiterte Partizipialattribute (Partizip I & II vor dem Nomen)',
    formula: 'Artikel + [Erweiternde Angaben] + Partizip I/II (dekliniert) + Nomen',
    explanation: {
      en: 'In high-register academic and professional German, relative clauses are systematically condensed into expanded participial attributes placed directly between the article and the noun. Partizip I denotes active, ongoing processes (+d + ending); Partizip II denotes completed actions or passive states.',
      fa: 'در زبان علمی و دانشگاهی سطح بالا (C1/C2)، جملات موصولی فشرده شده و به عنوان صفت گسترش‌یافته مستقیماً میان آرتیکل و اسم قرار می‌گیرند. اسم فاعل (Partizip I) بر جریان فعال فرآیند (+ d + پسوند صفت) و اسم مفعول (Partizip II) بر عمل پایان‌یافته یا مجهول دلالت می‌کند.',
      prs: 'در سبک رسمی و اکادمیک، به جای جملات پیوندی طولانی، از صفات پیوسته پیش از اسم کار گرفته می‌شود. Partizip I جریان کار را نشان می‌دهد و Partizip II عمل پایان‌یافته یا حالت مجهول را بیان می‌دارد.',
      tr: 'C1/C2 düzeyindeki akademik dilde, yan cümleler sıkıştırılarak artikel ile isim arasına genişletilmiş sıfat tamlaması olarak yerleştirilir.',
      ar: 'في الأسلوب الأكاديمي المتقدم يتم تكثيف الجمل الموصولة ووضعها كنعت مركب بين أداة التعريف والاسم الرئيسي.',
      es: 'En el registro académico, las oraciones de relativo se condensan en sintagmas participiales entre el artículo y el sustantivo.'
    },
    category: 'sentence_structure',
    examples: [
      {
        german: 'Die vom Bundesministerium für Wirtschaft geförderten Forschungsprojekte erzielen beachtliche Erfolge.',
        formulaBreakdown: 'Die (Art.) + vom Bundesministerium für Wirtschaft geförderten (erweitertes P.II) + Forschungsprojekte (Nomen) + erzielen (V)...',
        literalTranslation: {
          en: 'The by-the federal-ministry for economy funded research-projects achieve remarkable successes.',
          fa: 'پروژه‌های پژوهشی حمایت مالی شده توسط وزارت اقتصاد فدرال، به موفقیت‌های چشمگیری دست می‌یابند.',
          prs: 'پروژه‌های تحقیقی که از سوی وزارت اقتصاد تمویل گردیده‌اند، به کامیابی‌های قابل ملاحظه دست یافته‌اند.',
          tr: 'Federal Ekonomi Bakanlığı tarafından finanse edilen araştırma projeleri kayda değer başarılar elde ediyor.',
          ar: 'تحقق المشاريع البحثية الممولة من قِبل وزارة الاقتصاد الاتحادية نجاحات ملحوظة.',
          es: 'Los proyectos de investigación subvencionados por el Ministerio Federal de Economía obtienen notables éxitos.'
        },
        fluentTranslation: {
          en: 'The research projects funded by the Federal Ministry for Economic Affairs are achieving remarkable breakthroughs.',
          fa: 'طرح‌های پژوهشی تحت حمایت وزارت اقتصاد فدرال به دستاوردهای چشمگیری نائل آمده‌اند.',
          prs: 'طرح‌های علمی که توسط وزارت اقتصاد فدرال تمویل شده‌اند، دستاوردهای بسیار ارزنده‌ای را رقم زده‌اند.',
          tr: 'Federal Ekonomi Bakanlığı destekli araştırma projeleri üstün başarılar sağlamaktadır.',
          ar: 'تحقق الأبحاث العلمية المدعومة من الوزارة الاتحادية إنجازات استثنائية.',
          es: 'Las investigaciones financiadas por el ministerio cosechan avances sustanciales.'
        },
        isAdvanced: true
      },
      {
        german: 'Die stetig ansteigenden Rohstoffpreise belasten die industrielle Fertigung.',
        formulaBreakdown: 'Die (Art.) + stetig ansteigenden (Partizip I erweitert) + Rohstoffpreise (Nomen)...',
        literalTranslation: {
          en: 'The constantly rising raw-material-prices burden the industrial manufacturing.',
          fa: 'قیمت‌های مواد اولیه به طور پیوسته در حال افزایش، بر تولید صنعتی فشار وارد می‌آورند.',
          prs: 'قیمت‌های مواد خام که پیوسته رو به افزایش است، بر فابریکه‌های صنعتی بار گران می‌سازد.',
          tr: 'Sürekli artmakta olan hammadde fiyatları sanayi üretimini zorlamaktadır.',
          ar: 'تثقل أسعار المواد الخام المتصاعدة باستمرار كاهل الإنتاج الصناعي.',
          es: 'Los precios de las materias primas en constante aumento lastran la producción industrial.'
        },
        fluentTranslation: {
          en: 'Continuously increasing raw material prices place a heavy strain on manufacturing.',
          fa: 'افزایش مداوم قیمت مواد اولیه، فرآیند تولید صنعتی را با چالش‌های جدی روبه‌رو کرده است.',
          prs: 'بلند رفتن دوامدار بهای مواد خام، سکتور تولید صنعتی را زیر فشار اقتصادی قرار داده است.',
          tr: 'Sürekli tırmanan hammadde maliyetleri sanayi üretimi üzerinde baskı oluşturmaktadır.',
          ar: 'تلقي الارتفاعات المتواصلة في تكاليف المواد الخام بظلالها على القطاع الصناعي.',
          es: 'El incesante encarecimiento de los insumos grava la productividad fabril.'
        },
        isAdvanced: false
      }
    ]
  },
  {
    id: 'c1_2_funktionsverbgefuege',
    level: 'C1.2',
    lektion: 9,
    germanTitle: 'Funktionsverbgefüge (Nomen-Verb-Verbindungen des gehobenen Stils)',
    formula: 'Präposition + Nomen + Funktionsverb (z.B. in Betracht ziehen, zur Verfügung stehen)',
    explanation: {
      en: 'Noun-verb idioms replace simple everyday verbs with an abstract noun + a functional auxiliary verb. They convey institutional authority, objectivity, and academic rigor essential for C1/C2 exams.',
      fa: 'ترکیبات اسمی-فعلی ثابت (Funktionsverbgefüge) جایگزین افعال ساده روزمره می‌شوند تا بیان اداری، بی‌طرفی و وزن دانشگاهی به کلام ببخشند (مانند zur Verfügung stehen به جای verfügbar sein).',
      prs: 'این اصطلاحات ترکیبی به جای افعال عادی به کار می‌روند تا کلام وقار رسمی، دقت حقوقی و اعتبار اکادمیک کسب نماید (مانند in Betracht ziehen به جای berücksichtigen).',
      tr: 'Basit fiiller yerine bir isim ve fonksiyonel yardımcı fiil kullanılır. Metne resmiyet, nesnellik ve akademik ağırlık kazandırır.',
      ar: 'تراكيب تستبدل الأفعال البسيطة باسم وفعل وظيفي لمنح الكلام طابعاً رسمياً محايداً ومتقناً.',
      es: 'Estructuras que sustituyen verbos simples por una combinación de sustantivo y verbo funcional para dotar al texto de rigor y formalidad.'
    },
    category: 'verbs',
    examples: [
      {
        german: 'Der Vorstand hat den Antrag auf Umstrukturierung einstimmig zur Abstimmung gebracht.',
        formulaBreakdown: 'Der Vorstand (S) + hat (Aux) + den Antrag (...) + zur Abstimmung gebracht (FVG = abstimmen lassen).',
        literalTranslation: {
          en: 'The board has the motion for restructuring unanimously to vote brought.',
          fa: 'هیئت مدیره طرح تغییر ساختار را به اتفاق آرا به رای‌گیری گذاشت.',
          prs: 'هیئت مدیره پیشنهاد تجدید ساختار را به اتفاق آرا به رای‌گیری واگذار نمود.',
          tr: 'Yönetim kurulu yeniden yapılanma önergesini oy birliğiyle oylamaya sundu.',
          ar: 'طرح مجلس الإدارة مقترح إعادة الهيكلة للتصويت بالإجماع.',
          es: 'La junta directiva sometió a votación por unanimidad la propuesta de reestructuración.'
        },
        fluentTranslation: {
          en: 'The executive board unanimously put the restructuring motion to a formal vote.',
          fa: 'هیئت مدیره لایحه بازسازی ساختاری را به اتفاق کامل آرا به رای‌گیری گذاشت.',
          prs: 'هیئت مدیره فیصله تغییر ساختار شرکت را با اتفاق تمام آرا به رای‌گیری گذاشت.',
          tr: 'Yönetim kurulu yapılandırma teklifini oy birliğiyle oylattı.',
          ar: 'أحال مجلس الإدارة مشروع إعادة الهيكلة إلى التصويت بإجماع الأعضاء.',
          es: 'El consejo directivo sometió formalmente a escrutinio la propuesta de reestructuración.'
        },
        isAdvanced: true
      }
    ]
  },
  {
    id: 'c1_2_passivalternativen',
    level: 'C1.2',
    lektion: 10,
    germanTitle: 'Passivalternativen (Passiversatzformen: sich lassen / sein zu / -bar)',
    formula: '1. sich lassen + Infinitiv | 2. sein + zu + Infinitiv | 3. Adjektive auf -bar / -lich',
    explanation: {
      en: 'To avoid repetitive passive structures in extended prose, C1 German utilizes three main alternatives: "sich lassen + Infinitiv" (possibility: can be done); "sein + zu + Infinitiv" (necessity or possibility: must/can be done); and suffix formations with -bar and -lich.',
      fa: 'برای پیشگیری از تکرار مجهول و تنوع‌بخشی به سبک نگارش در C1، سه ساختار جایگزین به کار می‌روند: ۱. sich lassen + مصدر (امکان‌پذیری: می‌توان انجام داد)؛ ۲. sein + zu + مصدر (بایستگی یا امکان: باید/می‌توان انجام داد)؛ ۳. صفت‌های مختوم به -bar و -lich.',
      prs: 'برای زیبایی و روانی متن و پرهیز از تکرار مجهول، سه جایگزین عالی استفاده می‌شود: ۱. sich lassen + مصدر (امکان انجام)؛ ۲. sein + zu + مصدر (وجوب یا امکان)؛ ۳. صفت‌های دارای پسوند -bar و -lich.',
      tr: 'Edilgen yapının tekrarını önlemek için üç alternatif kullanılır: sich lassen + mastar (olabilirlik), sein + zu + mastar (zorunluluk/olabilirlik) ve -bar/-lich ekleri.',
      ar: 'بدائل المبني للمجهول تضفي مرونة وبلاغة على النص: sich lassen (الإمكانية)، sein + zu (الوجوب أو الإمكان)، وصفات -bar و-lich.',
      es: 'Estructuras alternativas para evitar la repetición de la pasiva: sich lassen (posibilidad), sein + zu (obligación/posibilidad) y sufijos -bar / -lich.'
    },
    category: 'verbs',
    examples: [
      {
        german: 'Diese wissenschaftliche Hypothese lässt sich durch Experimente unschwer verifizieren.',
        formulaBreakdown: 'Diese Hypothese (S) + lässt sich (Refl.) + durch Experimente + verifizieren (Infinitiv = kann verifiziert werden).',
        literalTranslation: {
          en: 'This scientific hypothesis lets itself through experiments easily verify.',
          fa: 'این فرضیه علمی از طریق آزمایش‌ها به آسانی می‌تواند اثبات شود.',
          prs: 'این فرضیه علمی را می‌توان از طریق آزمایش‌های تجربی به آسانی تصدیق نمود.',
          tr: 'Bu bilimsel hipotez deneylerle kolayca doğrulanabilir.',
          ar: 'يمكن التحقق من هذه الفرضية العلمية بالتجارب بسهولة ويسر.',
          es: 'Esta hipótesis científica se deja comprobar fácilmente mediante experimentos.'
        },
        fluentTranslation: {
          en: 'This scientific hypothesis can readily be verified through empirical experiments.',
          fa: 'این فرضیه علمی به سادگی و از طریق آزمایش‌های تجربی قابل اثبات و راستی‌آزمایی است.',
          prs: 'این فرضیه علمی به آسانی توسط تجربه‌های عملی قابل تایید و ثبوت می‌باشد.',
          tr: 'Söz konusu bilimsel varsayım deneyler yoluyla rahatlıkla kanıtlanabilir.',
          ar: 'من الميسور إثبات صحة هذه الفرضية العلمية عبر التجارب العملية.',
          es: 'Resulta sencillo corroborar empíricamente esta hipótesis científica.'
        },
        isAdvanced: false
      },
      {
        german: 'Die Fristen für die Einreichung der Forschungsberichte sind peinlich genau einzuhalten.',
        formulaBreakdown: 'Die Fristen (S) + sind (sein) + ... + genau einzuhalten (zu + Infinitiv = müssen eingehalten werden).',
        literalTranslation: {
          en: 'The deadlines for the submission of research-reports are scrupulously to keep.',
          fa: 'مهلت‌های تحویل گزارش‌های پژوهشی با دقت وسواس‌گونه باید رعایت شوند.',
          prs: 'مهلت‌های تعیین‌شده برای تسلیم راپورهای تحقیقی باید به گونه بی‌نهایت دقیق مراعات گردند.',
          tr: 'Araştırma raporlarının teslim sürelerine kılı kırk yararcasına uyulmalıdır.',
          ar: 'يتعين الالتزام التام والواجب بالمواعيد النهائية لتقديم التقارير البحثية.',
          es: 'Los plazos de entrega de las memorias de investigación deben observarse escrupulosamente.'
        },
        fluentTranslation: {
          en: 'The deadlines for submitting research reports must be scrupulously observed.',
          fa: 'رعایت دقیق مهلت‌های تعیین‌شده جهت ارائه گزارش‌های پژوهشی کاملاً الزامی است.',
          prs: 'رعایت مهلت‌های مقرر برای ارائه راپورهای علمی به گونه جدی الزامی و حتمی می‌باشد.',
          tr: 'Araştırma raporlarının teslim tarihlerine mutlak surette riayet edilmesi şarttır.',
          ar: 'من الإلزامي مراعاة المواعيد المحددة لتسليم التقارير البحثية بمنتهى الدقة.',
          es: 'Es preceptivo respetar con rigor escrupuloso las fechas límite de entrega de los informes.'
        },
        isAdvanced: true
      }
    ]
  },

  // ==========================================
  // C2.1 RULES
  // ==========================================
  {
    id: 'c2_1_subjektive_modalverben',
    level: 'C2.1',
    lektion: 1,
    germanTitle: 'Subjektive Bedeutung der Modalverben (Vermutung, Behauptung & Gerücht)',
    formula: 'Subjekt + Modalverb (sollen / wollen / müssen / dürfen / können) + ... + Infinitiv Perfekt',
    explanation: {
      en: 'In subjective modal usage, modal verbs indicate the speaker\'s epistemological assessment of a statement: "müssen" expresses quasi-certainty (99%); "dürfte" expresses strong probability (75%); "könnte/kann" expresses possibility (50%); "sollen" reports an external rumor; "wollen" reports an unverified self-assertion by someone else.',
      fa: 'در کاربرد ذهنی افعال وجهی، گوینده درجه اطمینان یا منبع خبر را مشخص می‌کند: müssen یعنی یقین قطعی؛ dürfte یعنی احتمال قوی؛ soll یعنی بر اساس شایعات و نقل قول دیگران؛ will یعنی ادعای خود فرد که هنوز اثبات نشده است.',
      prs: 'در کاربرد ذهنی افعال مدال (Subjektive Modalverben)، ارزیابی گوینده از حقیقت بیان می‌شود: müssen یقین کامل، dürfte احتمال قوی، soll شایعه و روایت دیگران، و will ادعای خود شخص که هنوز تصدیق نشده را نشان می‌دهد.',
      tr: 'Modal fiillerin öznel anlamında konuşanın olasılık derecesi veya bilginin kaynağı belirtilir: müssen (kesinlik), dürfte (güçlü olasılık), soll (rivayet/söylenti), will (kişinin iddiası).',
      ar: 'تعكس المعاني الذاتية للأفعال الناقصة درجة تأكد المتحدث أو مصدر المعلومة: müssen (اليقين)، dürfte (الرجحان)، soll (نقل الشائعات)، will (ادعاء الشخص لنفسه).',
      es: 'En el uso subjetivo, los modales expresan la certeza del hablante o la fuente del rumor: müssen (certeza), dürfte (probabilidad alta), soll (rumor), will (afirmación propia no contrastada).'
    },
    category: 'verbs',
    examples: [
      {
        german: 'Der Angeklagte will von den Manipulationen nichts gewusst haben.',
        formulaBreakdown: 'Der Angeklagte (S) + will (subjektives Modalverb = behauptet von sich) + gewusst haben (Inf. Perfekt).',
        literalTranslation: {
          en: 'The defendant wills of the manipulations nothing known have.',
          fa: 'متهم ادعا می‌کند که از دستکاری‌ها چیزی نمی‌دانسته است (به ادعای خودش).',
          prs: 'متهم ادعا دارد که از دستکاری‌ها و تخلفات هیچ خبری نداشته است.',
          tr: 'Sanık, usulsüzlüklerden haberi olmadığını iddia ediyor.',
          ar: 'يدعي المتهم أنه لم يكن على علم بأي من التلاعبات.',
          es: 'El acusado afirma no haber tenido conocimiento de las manipulaciones.'
        },
        fluentTranslation: {
          en: 'The defendant claims to have had no knowledge of the manipulations.',
          fa: 'متهم مدعی است که از دستکاری‌ها و تخلفات رخ‌داده کاملاً بی‌اطلاع بوده است.',
          prs: 'متهم ادعا می‌نماید که پیرامون دستکاری‌های صورت‌گرفته کمترین اطلاعی نداشته است.',
          tr: 'Sanık yapılan hilelerden katiyen haberdar olmadığını ileri sürmektedir.',
          ar: 'يزعم المتهم أنه كان يجهل تماماً ما حدث من تلاعبات.',
          es: 'El procesado sostiene que desconocía por completo cualquier clase de manipulación.'
        },
        isAdvanced: true
      },
      {
        german: 'Die Ministerin soll ihren Rücktritt für den morgigen Tag planen.',
        formulaBreakdown: 'Die Ministerin (S) + soll (subjektives Modalverb = man sagt, Gerücht) + planen (Infinitiv).',
        literalTranslation: {
          en: 'The minister should her resignation for tomorrow plan.',
          fa: 'گفته می‌شود که خانم وزیر در حال برنامه‌ریزی استعفای خود برای فرداست (بر اساس شایعات).',
          prs: 'گفته می‌شود که خانم وزیر قصد دارد فردا استعفای خود را اعلام نماید.',
          tr: 'Bakanın yarın için istifasını planladığı söyleniyor.',
          ar: 'يُشاع أن الوزيرة تخطط لتقديم استقالتها يوم غد.',
          es: 'Se rumorea que la ministra planea presentar su dimisión mañana.'
        },
        fluentTranslation: {
          en: 'The minister is reportedly planning to step down tomorrow.',
          fa: 'طبق گزارش‌ها و شنیده‌ها، خانم وزیر قصد دارد فردا استعفای خود را تقدیم کند.',
          prs: 'بر بنیاد گزارش‌های موثق، گفته می‌شود که خانم وزیر فردا از وظیفه خود استعفا خواهد داد.',
          tr: 'Söylentilere göre bakanın yarın istifasını sunması beklenmektedir.',
          ar: 'تفيد الأنباء المتداولة بأن الوزيرة تعتزم الاستقالة غداً.',
          es: 'Según trasciende, la ministra contempla presentar su renuncia en el día de mañana.'
        },
        isAdvanced: false
      }
    ]
  },

  // ==========================================
  // C2.2 RULES
  // ==========================================
  {
    id: 'c2_2_konjunktiv1_indirekte_rede',
    level: 'C2.2',
    lektion: 8,
    germanTitle: 'Konjunktiv I in der indirekten Rede (Journalismus, Recht & Wissenschaft)',
    formula: 'Verbstamm + e / est / e / en / et / en (z.B. er behaupte, sie sei, es gebe, man wisse)',
    explanation: {
      en: 'Konjunktiv I is used in elevated journalistic prose and legal transcripts to report statements neutrally without taking responsibility for their veracity. When the Konjunktiv I form is identical to the indicative, Konjunktiv II or "würde" is used as an unequivocal substitute.',
      fa: 'کُنیونکتیو ۱ در زبان ژورنالیستی و حقوقی سطح بالا برای نقل قول بی‌طرفانه سخنان دیگران استفاده می‌شود تا نویسنده موضع بی‌طرفی خود را حفظ کند. در صورتی که شکل Konjunktiv I با زمان حال عادی یکسان باشد، از Konjunktiv II جایگزین استفاده می‌شود.',
      prs: 'کُنیونکتیو ۱ در ژورنالیزم مسلکی و گزارش‌های حقوقی برای نقل قول سخنان بدون قبول مسوولیت درستی آن استفاده می‌شود. هرگاه شکل آن با زمان حال یکسان باشد، کُنیونکتیو ۲ جایگزین آن می‌گردد.',
      tr: 'C2 seviyesinde ciddi basında ve hukuki metinlerde başkasının sözünü tarafsızca aktarmak için Konjunktiv I kullanılır. Biçim benzerliğinde Konjunktiv II yedek form olarak devreye girer.',
      ar: 'تستخدم صيغة Konjunktiv I في الصحافة الرصينة لنقل تصريحات الآخرين بحياد مطلق، ويستعاض عنها بصيغة Konjunktiv II عند تطابق الأشكال.',
      es: 'El Konjunktiv I se emplea en el periodismo y derecho para citar declaraciones manteniendo distanciamiento asertivo. Si coincide con el indicativo, se sustituye por Konjunktiv II.'
    },
    category: 'verbs',
    examples: [
      {
        german: 'Der Regierungssprecher betonte, die Bundeskanzlerin habe die Vorwürfe zurückgewiesen und werde nicht zurücktreten.',
        formulaBreakdown: 'habe zurückgewiesen (Konj. I Perfekt) + und werde zurücktreten (Konj. I Futur I).',
        literalTranslation: {
          en: 'The government-spokesperson emphasized, the Chancellor have the allegations rejected and will not resign.',
          fa: 'سخنگوی دولت تاکید کرد که صدراعظم اتهامات را رد کرده و استعفا نخواهد داد (به نقل از وی).',
          prs: 'سخنگوی حکومت تصریح کرد که صدراعظم تمام اتهامات را رد نموده و استعفا نخواهد داد.',
          tr: 'Hükümet sözcüsü, Başbakanın iddiaları reddettiğini ve istifa etmeyeceğini vurguladı.',
          ar: 'أكد المتحدث باسم الحكومة أن المستشارة قد ردت الاتهامات ولن تستقيل بحسب قوله.',
          es: 'El portavoz del gobierno recalcó que la canciller había desestimado las imputaciones y no dimitiría.'
        },
        fluentTranslation: {
          en: 'The government spokesperson stressed that the Chancellor had dismissed the allegations and had no intention of resigning.',
          fa: 'سخنگوی دولت تصریح کرد که به گفته صدراعظم، اتهامات بی‌اساس بوده و وی به هیچ وجه استعفا نخواهد داد.',
          prs: 'سخنگوی دولت اظهار داشت که صدراعظم ادعاهای مطرح‌شده را کاملاً رد نموده و از سمت خود کناره‌گیری نمی‌کند.',
          tr: 'Hükümet sözcüsü, Şansölyenin suçlamaları reddederek istifayı düşünmediğini bildirdi.',
          ar: 'شدد الناطق باسم الحكومة على أن المستشارة رفضت المزاعم ولا تعتزم التنحي إطلاقاً.',
          es: 'El portavoz gubernamental subrayó que la canciller desestimaba las alegaciones y descartaba su renuncia.'
        },
        isAdvanced: true
      }
    ]
  },
  {
    id: 'c2_2_gerundivum',
    level: 'C2.2',
    lektion: 10,
    germanTitle: 'Das Gerundivum (zu + Partizip I als attributive Passivalternative)',
    formula: 'Artikel + [Erweiterungen] + zu + Partizip I (dekliniert) + Nomen',
    explanation: {
      en: 'The Gerundivum combines the particle "zu" with Partizip I (infinitive + d + adjective ending) between article and noun. It condenses a passive relative clause containing a modal verb of obligation (müssen/sollen) or possibility (können) with maximum syntactic elegance.',
      fa: 'گروندیو (Gerundivum) از ترکیب ذره "zu" با اسم فاعل (Partizip I) همراه با پایانه‌های صفتی در جایگاه صفت ساخته می‌شود. این ساختار جایگزین یک جمله موصولی مجهول دارای فعل müssen یا können می‌شود و اوج ایجاز و فخامت نحوی را در C2 به نمایش می‌گذارد.',
      prs: 'گروندیو (Gerundivum) از ترکیب zu با Partizip I ساخته شده و جایگزین جملات مجهول با افعال müssen یا können می‌گردد و نهایت فشردگی و زیبایی ادبی را در زبان آلمانی خلق می‌نماید.',
      tr: 'Gerundivum, "zu" edatı ve Partizip I\'in sıfat olarak kullanılmasıyla zorunluluk (müssen) veya olasılık (können) bildiren en üst düzey yapıdır.',
      ar: 'الجرونديفوم يدمج بين zu واسم الفاعل كصفة للاسم ويعوض جملة موصولة مبنية للمجهول تعبر عن الوجوب أو الإمكانية بأعلى درجات الإيجاز.',
      es: 'El gerundivo pasivo (zu + Partizip I flexionado) condensa oraciones pasivas con modales de necesidad o posibilidad con suprema elegancia sintáctica.'
    },
    category: 'sentence_structure',
    examples: [
      {
        german: 'Die unverzüglich zu ergreifenden Maßnahmen wurden im Bundesanzeiger amtlich verkündet.',
        formulaBreakdown: 'Die (Art.) + unverzüglich zu ergreifenden (Gerundivum = die unverzüglich ergriffen werden müssen) + Maßnahmen (Nomen)...',
        literalTranslation: {
          en: 'The immediately to-be-taken measures were in-the federal-gazette officially proclaimed.',
          fa: 'تدابیری که باید فوراً اتخاذ شوند، در روزنامه رسمی فدرال اعلان شدند.',
          prs: 'اقدامات عاجلی که باید تطبیق گردند، در جریده رسمی دولتی اعلان گردیدند.',
          tr: 'Derhal alınması gereken önlemler Resmi Gazete\'de resmen ilan edildi.',
          ar: 'تم الإعلان رسمياً في الجريدة الاتحادية عن التدابير الواجبة التنفيذ دون إبطاء.',
          es: 'Las medidas de obligada adopción inmediata fueron promulgadas en el Boletín Oficial.'
        },
        fluentTranslation: {
          en: 'The measures requiring immediate implementation were officially gazetted.',
          fa: 'اقدامات فوری و لازمی که اجرای آن‌ها اجتناب‌ناپذیر بود، رسماً در روزنامه رسمی کشور منتشر شد.',
          prs: 'اقدامات لازمی که باید بدون تاخیر روی دست گرفته شوند، در روزنامه رسمی فدرال اعلان گردید.',
          tr: 'Gecikmeksizin hayata geçirilmesi icap eden tedbirler Resmi Gazete\'de yayımlandı.',
          ar: 'صدر الإعلان الرسمي في الجريدة الاتحادية عن الإجراءات العاجلة الواجبة النفاذ.',
          es: 'Se publicaron en el boletín oficial las disposiciones de inaplazable cumplimiento.'
        },
        isAdvanced: true
      },
      {
        german: 'Hierbei handelt es sich um ein kaum zu lösendes epistemologisches Paradoxon.',
        formulaBreakdown: 'um ein (Art.) + kaum zu lösendes (Gerundivum = das kaum gelöst werden kann) + Paradoxon (Nomen).',
        literalTranslation: {
          en: 'About a scarcely to-be-solved epistemological paradox.',
          fa: 'پیرامون یک پارادوکس معرفت‌شناختی که به سختی قابل حل است.',
          prs: 'مربوط به یک پارادوکس شناخت‌شناسی که به ندرت قابل حل می‌باشد.',
          tr: 'Çözülmesi neredeyse imkansız bir epistemolojik paradoks.',
          ar: 'يتعلق الأمر بمفارقة إبستمولوجية تكاد تستعصي على الحل.',
          es: 'Se trata de una paradoja epistemológica difícilmente resoluble.'
        },
        fluentTranslation: {
          en: 'This represents an epistemological paradox that can hardly be resolved.',
          fa: 'این مسئله یک تناقض شناخت‌شناختی به شمار می‌رود که حل آن تقریباً ناممکن می‌نماید.',
          prs: 'این معضل یک پارادوکس عمیق فکری است که راه حل آن بی‌اندازه دشوار می‌باشد.',
          tr: 'Bu durum, üstesinden gelinmesi güç bir bilgi teorisi çelişkisidir.',
          ar: 'يشكل هذا مفارقة معرفية عصية على المعالجة إلى حد بعيد.',
          es: 'Esto entraña una aporía epistemológica de difícil resolución.'
        },
        isAdvanced: false
      }
    ]
  }
];
