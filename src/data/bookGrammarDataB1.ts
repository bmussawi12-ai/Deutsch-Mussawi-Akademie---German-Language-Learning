import { GrammarRule } from '../types';

export const BOOK_GRAMMAR_RULES_B1: GrammarRule[] = [
  // ================= B1.1 (Lektion 1 - 7) =================
  {
    id: 'b1_1_lek1_weil_obwohl',
    level: 'B1.1',
    lektion: 1,
    germanTitle: 'Kausale & Konzessive Nebensätze: "weil" (Grund) vs. "obwohl" (Gegengrund)',
    formula: 'weil (Kausal: السبب) / obwohl (Konzessiv: برعکس انتظار) + Subjekt + (...) + *Verb am Satzende*',
    explanation: {
      prs: 'حرف ربط weil دلیل رویداد را بیان می‌کند (چون/زیرا). حرف ربط obwohl تضاد و تناقض با انتظار را بیان می‌کند (اگرچه/با آنکه). در هر دو، فعل صرف‌شده در آخر جمله قرار می‌گیرد.',
      fa: 'حرف ربط weil علت را بیان می‌کند (زیرا)، در حالی که obwohl مانعِ غیرمنتظره و متناقض را نشان می‌دهد (با اینکه/اگرچه).',
      en: '"weil" provides logical reason/cause; "obwohl" expresses a concession contrary to expectation. Both place the verb at the clause end.',
      ar: 'تعبر "weil" عن السبب والعلة، بينما تعبر "obwohl" عن الاستدراك رغم المعارضة وتضعان الفعل في النهاية.',
      tr: '"weil" sebep (çünkü), "obwohl" ise zıtlık/beklenmeyen durum (-e rağmen) bildirir; fiil cümlenin sonuna gider.',
      es: '"weil" introduce causa lógica; "obwohl" introduce una concesión contraria a lo esperado. Ambos envían el verbo al final.'
    },
    category: 'subordinate_clauses',
    examples: [
      {
        german: 'Sayed geht zur Arbeit, obwohl er sich noch etwas müde fühlt.',
        formulaBreakdown: 'Hauptsatz + , obwohl (Konzessiv) + er (S) + (...) + fühlt (Verb am Ende)',
        literalTranslation: {
          prs: 'سید می‌رود به سوی کار، اگرچه او احساس می‌کند خود را هنوز اندکی خسته.',
          fa: 'سید می‌رود سر کار، اگرچه او هنوز کمی احساس خستگی می‌کند.',
          en: 'Sayed goes to work, although he himself still a bit tired feels.',
          ar: 'يذهب سيد إلى العمل على الرغم من أنه لا يزال يشعر ببعض التعب.',
          tr: 'Sayed kendini hâlâ biraz yorgun hissetmesine rağmen işe gidiyor.',
          es: 'Sayed va al trabajo a pesar de que todavía se siente un poco cansado.'
        },
        fluentTranslation: {
          prs: 'سید سر کار می‌رود، با وجود اینکه هنوز کمی احساس خستگی دارد.',
          fa: 'سید با اینکه هنوز کمی احساس خستگی می‌کند، به سر کار می‌رود.',
          en: 'Sayed goes to work even though he still feels a bit tired.',
          ar: 'يذهب سيد إلى العمل بالرغم من شعوره ببعض الإرهاق.',
          tr: 'Sayed, henüz biraz yorgun hissetmesine rağmen işine gidiyor.',
          es: 'Sayed va a trabajar a pesar de encontrarse aún algo fatigado.'
        }
      }
    ]
  },
  {
    id: 'b1_1_lek2_infinitiv_mit_zu',
    level: 'B1.1',
    lektion: 2,
    germanTitle: 'Der Infinitiv mit "zu" (nach Adjektiven, Nomen & Verben)',
    formula: 'Es ist wichtig/schön, (...) zu lernen | Lust/Zeit haben, (...) zu machen | planen/hoffen, (...) zu bestehen',
    explanation: {
      prs: 'ساختار مصدر با zu: هنگامی که فاعل هر دو بخش جمله یکی باشد. کلمه zu درست قبل از فعل مصدری قرار می‌گیرد (در افعال جداشدنی بین پیشوند و فعل: aufzustehen).',
      fa: 'مصدر با zu بعد از افعال قصد و امید (hoffen, planen)، ترکیب با اسم (Zeit haben, Lust haben) و صفات غیرشخصی (Es ist wichtig, zu...) می‌آید.',
      en: 'Infinitive with "zu" occurs after set adjectives, nouns, or intention verbs when subjects align. In separable verbs: prefix + zu + verb.',
      ar: 'يستخدم المصدر مع "zu" بعد صفات وأسماء وأفعال تفيد النية، وتوضع zu بين البادئة وأصل الفعل في الأفعال المنفصلة.',
      tr: 'Özneler aynı olduğunda sıfat, isim veya niyet bildiren fiillerden sonra "zu + mastar" kullanılır.',
      es: 'El infinitivo con "zu" se emplea tras adjetivos, sustantivos y verbos de intención cuando coincide el sujeto.'
    },
    category: 'verbs',
    examples: [
      {
        german: 'Sayed hat vor, die B1-Zertifikatsprüfung mit sehr gutem Erfolg zu bestehen.',
        formulaBreakdown: 'hat vor (vorhaben) + die B1-Prüfung + zu bestehen (zu + Infinitiv)',
        literalTranslation: {
          prs: 'سید در نظر دارد، امتحان تصدیق‌نامه B1 را با موفقیت بسیار خوب سپری نماید.',
          fa: 'سید قصد دارد امتحان مدرک B1 را با موفقیت بسیار خوب قبول شود.',
          en: 'Sayed intends, the B1 certificate exam with very good success to pass.',
          ar: 'ينوي سيد اجتياز امتحان شهادة B1 بنجاح وتفوق باهر.',
          tr: 'Sayed B1 sertifika sınavını üstün başarıyla geçmeyi planlıyor.',
          es: 'Sayed tiene la intención de aprobar el examen oficial B1 con excelentes calificaciones.'
        },
        fluentTranslation: {
          prs: 'سید قصد دارد که امتحان مدرک B1 را با نمره عالی با موفقیت پشت سر بگذارد.',
          fa: 'سید قصد دارد آزمون مدرک B1 را با نمره و موفقیتی درخشان قبول شود.',
          en: 'Sayed intends to pass the B1 certification exam with great success.',
          ar: 'يعتزم سيد اجتياز اختبار شهادة B1 بتفوق وامتياز.',
          tr: 'Sayed, B1 sertifika sınavını çok iyi bir dereceyle vermeyi hedefliyor.',
          es: 'Sayed tiene el propósito de superar el examen de nivel B1 con calificaciones sobresalientes.'
        }
      }
    ]
  },
  {
    id: 'b1_1_lek3_konjunktiv2_ratschlag',
    level: 'B1.1',
    lektion: 3,
    germanTitle: 'Konjunktiv II für Ratschläge und Empfehlungen (sollte / könnte)',
    formula: 'Du solltest (...) machen | Sie könnten (...) anrufen || S + sollte/könnte (Pos 2) + (...) + Infinitiv',
    explanation: {
      prs: 'برای ارائه توصیه‌ها و پیشنهادهای مشفقانه و حرفه‌ای به جای امر مستقیم از sollte (بهتر است که...) و könnte (می‌توانی...) در وجه التزامی استفاده می‌شود.',
      fa: 'برای ارائه پند، اندرز و پیشنهادهای سازنده، از sollte (بهتر است که...) و könnte (می‌توانی...) در کونیونکتیو ۲ استفاده می‌شود.',
      en: 'To give constructive advice and polite suggestions, use "sollte" (should) or "könnte" (could) in Konjunktiv II.',
      ar: 'لتقديم المشورة والنصح البناء بلباقة نستخدم "sollte" (ينبغي عليك) و"könnte" (بإمكانك) في صيغة Konjunktiv II.',
      tr: 'Tavsiye ve yapıcı önerilerde bulunurken "sollte" (yapmalıydın) ve "könnte" (yapabilirdin) kullanılır.',
      es: 'Para formular recomendaciones constructivas y consejos prudentes se emplea "sollte" (deberías) o "könnte" (podrías).'
    },
    category: 'subjunctive',
    examples: [
      {
        german: 'An Ihrer Stelle würde ich mich vorab gründlich über das Unternehmen informieren.',
        formulaBreakdown: 'An Ihrer Stelle (an Pos 1) + würde ich (Konjunktiv II) + mich informieren (Infinitiv)',
        literalTranslation: {
          prs: 'به جای شما بودم من کسب معلومات می‌کردم از قبل دقیق در مورد شرکت.',
          fa: 'اگر جای شما بودم از قبل به طور دقیق درباره شرکت تحقیق می‌کردم.',
          en: 'In your place would I inform myself beforehand thoroughly about the company.',
          ar: 'لو كنت مكانك لجمعت معلومات وافية ومسبقة عن الشركة.',
          tr: 'Sizin yerinizde olsam şirket hakkında önceden derinlemesine bilgi edinirdim.',
          es: 'En su lugar me informaría a fondo de antemano sobre la empresa.'
        },
        fluentTranslation: {
          prs: 'اگر من جای شما بودم، قبل از مصاحبه حسابی درباره این شرکت تحقیق و کسب معلومات می‌کردم.',
          fa: 'اگر من جای شما بودم، از قبل به طور کامل و دقیق درباره این شرکت اطلاعات کسب می‌کردم.',
          en: 'If I were in your shoes, I would research the company thoroughly beforehand.',
          ar: 'لو كنت في مكانك لاطلعت بدقة على خلفية الشركة قبل الموعد.',
          tr: 'Ben sizin yerinizde olsaydım görüşmeden önce şirket hakkında kapsamlı bilgi toplardım.',
          es: 'Si yo estuviera en su lugar me informaría exhaustivamente sobre la empresa antes de la cita.'
        }
      }
    ]
  },
  {
    id: 'b1_1_lek4_relativsaetze_praepositionen',
    level: 'B1.1',
    lektion: 4,
    germanTitle: 'Relativsätze mit Präpositionen (mit dem, für den, über die)',
    formula: 'Nomen + , Präposition + Relativpronomen (Dat/Akk je nach Präposition) + (...) + Verb',
    explanation: {
      prs: 'هرگاه جمله موصولی دارای حرف اضافه باشد، حرف اضافه قبل از ضمیر موصولی می‌آید و حالت آن را تعیین می‌کند: der Kollege, mit dem ich arbeite (همکاری که با او کار می‌کنم).',
      fa: 'در جملات موصولی با حرف اضافه، حرف اضافه در ابتدای عبارت موصولی قرار گرفته و حالت ضمیر را مشخص می‌کند (auf den, mit dem, für die).',
      en: 'In relative clauses with prepositions, the preposition precedes the relative pronoun and determines its case.',
      ar: 'في الجمل الموصولة المسبوقة بحرف جر، يوضع حرف الجر قبل ضمير الوصل ويحدد إعرابه (مجروراً أو منصوباً).',
      tr: 'Edatlı ilgi cümlelerinde edat zamirin hemen önüne gelir ve zamirin Dativ mi Akkusativ mi olacağını belirler.',
      es: 'En las oraciones de relativo con preposición, esta precede al pronombre determinando su caso gramatical.'
    },
    category: 'subordinate_clauses',
    examples: [
      {
        german: 'Das ist die Fachärztin, bei der ich den Termin für die Untersuchung vereinbart habe.',
        formulaBreakdown: 'die Fachärztin + bei (Präposition) + der (Relativpronomen Dat Fem) + vereinbart habe (Verb Ende)',
        literalTranslation: {
          prs: 'این است خانم داکتر متخصص، نزد او که من وقت ملاقات را برای معاینه هماهنگ کرده‌ام.',
          fa: 'این است پزشک متخصص، نزد او که من وقت ملاقات برای معاینه را هماهنگ کرده‌ام.',
          en: 'That is the medical specialist, with whom I the appointment for the checkup scheduled have.',
          ar: 'هذه هي الطبيبة الإخصائية التي نسقت معها موعد الفحص الطبي.',
          tr: 'Bu, muayene randevusu ayarladığım uzman doktordur.',
          es: 'Esta es la médica especialista con la que concerté la cita para la revisión.'
        },
        fluentTranslation: {
          prs: 'این همان خانم داکتر متخصصی است که وقت معایناتم را با او تنظیم کرده‌ام.',
          fa: 'این همان خانم دکتر متخصصی است که پیش او وقت معاینه گرفته‌ام.',
          en: 'This is the medical specialist with whom I booked my examination appointment.',
          ar: 'هذه هي الطبيبة الاستشارية التي حجزت لديها موعد الفحص السريري.',
          tr: 'Bu, muayene için randevu aldığım uzman hekimdir.',
          es: 'Esta es la médica especialista con quien concerté la cita para el chequeo.'
        }
      }
    ]
  },
  {
    id: 'b1_1_lek5_temporale_konnektoren',
    level: 'B1.1',
    lektion: 5,
    germanTitle: 'Temporale Nebensätze: "während" (Gleichzeitigkeit) & "bevor" (Vorherigkeit)',
    formula: 'während (همزمان / أثناء) | bevor (قبل از اینکه / قبل أن) + Subjekt + (...) + Verb am Satzende',
    explanation: {
      prs: 'حروف ربط زمانی: während نشان‌دهنده همزمانی دو کار است (در حالی که)، و bevor نشان‌دهنده وقوع کاری قبل از کار دیگر است (پیش از آنکه). در هر دو فعل در آخر می‌نشیند.',
      fa: 'حروف ربط زمانی: während بیانگر همزمانی رویدادهاست (در حالی که)، و bevor نشان می‌دهد کاری قبل از دیگری باید انجام شود (پیش از آنکه).',
      en: '"während" marks simultaneity (while); "bevor" indicates prior action (before). Both push the verb to the end.',
      ar: '"während" تدل على التزامن في آن واحد (أثناء)، بينما تفيد "bevor" تقدم الحدث (قبل أن).',
      tr: '"während" eşzamanlılık (iken), "bevor" ise öncelik (-meden önce) bildirir; fiil cümlenin sonuna gider.',
      es: '"während" expresa simultaneidad (mientras que); "bevor" expresa anterioridad temporal (antes de que).'
    },
    category: 'subordinate_clauses',
    examples: [
      {
        german: 'Sayed liest ein Fachbuch, während er mit dem ICE-Zug nach Berlin fährt.',
        formulaBreakdown: 'Hauptsatz + , während (simultan) + er (...) + fährt (Verb am Ende)',
        literalTranslation: {
          prs: 'سید می‌خواند یک کتاب تخصصی، در حالی که او با قطار تیزرفتار به برلین می‌رود.',
          fa: 'سید می‌خواند یک کتاب تخصصی، در حالی که او با قطار تندرو به برلین سفر می‌کند.',
          en: 'Sayed reads a textbook, while he with the ICE train to Berlin travels.',
          ar: 'يقرأ سيد كتاباً تخصصياً أثناء سفره بقطار ICE فائق السرعة إلى برلين.',
          tr: 'Sayed ICE hızlı treniyle Berlin\'e giderken mesleki bir kitap okuyor.',
          es: 'Sayed lee un libro técnico mientras viaja en el tren de alta velocidad a Berlín.'
        },
        fluentTranslation: {
          prs: 'سید در حالی که با قطار سریع‌السیر به برلین سفر می‌کند، مشغول مطالعه یک کتاب تخصصی است.',
          fa: 'سید در حالی که با قطار سریع‌السیر به برلین می‌رود، یک کتاب تخصصی را مطالعه می‌کند.',
          en: 'Sayed reads a specialized book while traveling to Berlin on the high-speed ICE train.',
          ar: 'يطالع سيد كتاباً علمياً متخصصاً أثناء رحلته بقطار السريع المتجه إلى برلين.',
          tr: 'Sayed hızlı trenle Berlin\'e yolculuk ederken uzmanlık kitabını okuyor.',
          es: 'Sayed lee un manual técnico mientras viaja a Berlín en el tren de alta velocidad.'
        }
      }
    ]
  },
  {
    id: 'b1_1_lek6_genitiv_praepositionen',
    level: 'B1.1',
    lektion: 6,
    germanTitle: 'Der Genitiv (des/der) & Genitivpräpositionen (während, wegen, trotz)',
    formula: 'wegen (به دلیل) / trotz (علیرغم) / während (در طول) + GENITIV: des (-s/-es) (m/n) | der (f/pl)',
    explanation: {
      prs: 'حالت ملکی/مضاف‌الیه (Genitiv): اسامی مذکر و خنثی پسوند -s یا -es می‌گیرند (des Vertrages, des Geldes). حروف اضافه wegen (به خاطر)، trotz (با وجودِ) و während (در خلالِ) گنیتو می‌خواهند.',
      fa: 'حالت گنیتو نشان‌دهنده مالکیت و تعلق است. حروف اضافه رسمی wegen, trotz, während حالت گنیتو می‌گیرند (des/der).',
      en: 'The Genitive case signals possession and formal relations. Prepositions "wegen", "trotz", and "während" strictly take Genitive.',
      ar: 'حالة الإضافة (Genitiv) تقتضي إضافة s/es لأسماء المذكر والمحايد. وتتطلب حروف الجر wegen وtrotz وwährend هذه الحالة.',
      tr: 'İyelik ve tamlama hali (Genitiv) eril ve nötr isimlerde -s/-es eki alır. wegen, trotz, während bu hali gerektirir.',
      es: 'El caso genitivo denota pertenencia y relación formal. Las prepositions "wegen", "trotz" y "während" rigen genitivo.'
    },
    category: 'cases',
    examples: [
      {
        german: 'Trotz des schlechten Wetters und wegen des dringenden Termins ging er zur Bank.',
        formulaBreakdown: 'Trotz des schlechten Wetters (Genitiv Neutr) + wegen des dringenden Termins (Genitiv Mask)',
        literalTranslation: {
          prs: 'با وجود هوای خراب و به دلیل وقت ملاقات عاجل رفت او به بانک.',
          fa: 'با وجود هوای بد و به علت قرار ملاقات فوری رفت او به بانک.',
          en: 'Despite the bad weather and because of the urgent appointment went he to the bank.',
          ar: 'على الرغم من سوء الأحوال الجوية وبسبب الموعد العاجل توجه إلى المصرف.',
          tr: 'Kötü havaya rağmen ve acil randevusu nedeniyle bankaya gitti.',
          es: 'A pesar del mal tiempo y debido a la cita urgente acudió al banco.'
        },
        fluentTranslation: {
          prs: 'علیرغم هوای نامساعد و به دلیل جلسه فوری‌اش، به بانک مراجعه کرد.',
          fa: 'علیرغم هوای نامساعد و به خاطر قرار فوری‌اش، به بانک رفت.',
          en: 'Despite the bad weather and due to the urgent appointment, he went to the bank.',
          ar: 'توجه إلى البنك بالرغم من رداءة الطقس ونظراً لأهمية الموعد الطارئ.',
          tr: 'Havanın bozuk olmasına karşın acil görüşmesi sebebiyle bankaya gitti.',
          es: 'A pesar de las inclemencias meteorológicas y debido a una cita urgente, se dirigió a la sucursal bancaria.'
        }
      }
    ]
  },
  {
    id: 'b1_1_lek7_zweiteilige_konnektoren',
    level: 'B1.1',
    lektion: 7,
    germanTitle: 'Zweiteilige Konnektoren (sowohl... als auch / nicht nur... sondern auch)',
    formula: 'sowohl A als auch B (هم A و هم B) || nicht nur A, sondern auch B (نه تنها A بلکه B نیز)',
    explanation: {
      prs: 'حروف ربط دوتایی برای ارتقای سطح گفتار و نگارش: sowohl... als auch تاکید مثبت دوطرفه است؛ nicht nur... sondern auch تاکید مضاعف همراه با غافلگیری است.',
      fa: 'حروف ربط دوجزئی کلام را غنی و رسمی می‌کنند: sowohl... als auch (هم... و هم...) و nicht nur... sondern auch (نه تنها... بلکه...).',
      en: 'Two-part correlative connectors elevate speech: "sowohl... als auch" (both... and), "nicht nur... sondern auch" (not only... but also).',
      ar: 'أدوات الربط المزدوجة ترتقي بمستوى البيان اللغوي: sowohl... als auch (كلا الأمرين)، وnicht nur... sondern auch (ليس فقط بل أيضاً).',
      tr: 'İki parçalı bağlaçlar dili zenginleştirir: "sowohl... als auch" (hem... hem de), "nicht nur... sondern auch" (sadece değil... aynı zamanda).',
      es: 'Los conectores dobles enriquecen el discurso: "sowohl... als auch" (tanto... como), "nicht nur... sondern auch" (no solo... sino también).'
    },
    category: 'conjunctions',
    examples: [
      {
        german: 'Sayed spricht sowohl Deutsch als auch Englisch fließend im Berufsalltag.',
        formulaBreakdown: 'sowohl Deutsch + als auch Englisch (Doppelkonnektor Parallele)',
        literalTranslation: {
          prs: 'سید سخن می‌گوید هم آلمانی و هم انگلیسی روان در محیط کار.',
          fa: 'سید صحبت می‌کند هم آلمانی و هم انگلیسی روان در کارهای روزمره اداری.',
          en: 'Sayed speaks both German as well as English fluently in daily professional life.',
          ar: 'يتحدث سيد الألمانية والإنجليزية بطلاقة في العمل اليومي.',
          tr: 'Sayed iş hayatında hem Almancayı hem de İngilizceyi akıcı bir şekilde konuşuyor.',
          es: 'Sayed habla con fluidez tanto alemán como inglés en su día a día laboral.'
        },
        fluentTranslation: {
          prs: 'سید در محیط کار هم به زبان آلمانی و هم انگلیسی به طور کاملاً روان و مسلط صحبت می‌کند.',
          fa: 'سید در محیط کارش هم به آلمانی و هم به انگلیسی کاملاً روان صحبت می‌کند.',
          en: 'Sayed speaks both German and English fluently in his daily work.',
          ar: 'يتحدث سيد اللغتين الألمانية والإنجليزية بطلاقة تامة في بيئة العمل اليومية.',
          tr: 'Sayed profesyonel yaşamında hem Almanca hem de İngilizceyi akıcı biçimde konuşabiliyor.',
          es: 'Sayed habla con fluidez tanto alemán como inglés en su desempeño profesional cotidiano.'
        }
      }
    ]
  },

  // ================= B1.2 (Lektion 8 - 14) =================
  {
    id: 'b1_2_lek8_konjunktiv2_irreal',
    level: 'B1.2',
    lektion: 8,
    germanTitle: 'Konjunktiv II der Gegenwart: Wünsche, Hypothesen & Irreales',
    formula: 'wenn ich reich WÄRE / HÄTTE / WÜRDE + Infinitiv || ich wünschte, ich könnte (...)',
    explanation: {
      prs: 'کونیونکتیو ۲ برای بیان آرزوهای غیرواقعی در زمان حال: wäre (اگر بودم)، hätte (اگر می‌داشتم)، würde + Infinitiv (اگر انجام می‌دادم).',
      fa: 'کون‌یونکتیو ۲ زمان حال برای بیان آرزوهای دور از واقعیت و فرضیات ناممکن به کار می‌رود: wenn ich mehr Zeit hätte, würde ich...',
      en: 'Konjunktiv II present tense expresses unreal wishes, hypothetical conditions, and imaginary scenarios.',
      ar: 'تعبر صيغة Konjunktiv II في الحاضر عن الأماني غير المتحققة والافتراضات الخيالية والشروط غير الواقعية.',
      tr: 'Şimdiki zaman Konjunktiv II yapısı gerçekleşmesi zor dilekleri, varsayımları ve hayali senaryoları dile getirir.',
      es: 'El Konjunktiv II de presente formula deseos hipotéticos, condiciones irreales y conjeturas contrafácticas.'
    },
    category: 'subjunctive',
    examples: [
      {
        german: 'Wenn ich mehr Freizeit hätte, würde ich eine Reise durch ganz Europa machen.',
        formulaBreakdown: 'Wenn + hätte (Konjunktiv II irreale Bedingung) + würde ich machen (Konjunktiv II Folge)',
        literalTranslation: {
          prs: 'اگر من وقت آزاد بیشتر می‌داشتم، می‌کردم من یک سفر به سراسر اروپا.',
          fa: 'اگر من زمان آزاد بیشتری می‌داشتم، می‌رفتم به یک سفر در سرتاسر اروپا.',
          en: 'If I more free time had, would I a journey through whole Europe make.',
          ar: 'لو كان لدي متسع أكبر من الوقت الحر، لقمت بجولة في سائر أنحاء أوروبا.',
          tr: 'Daha fazla boş vaktim olsaydı, bütün Avrupa\'yı kapsayan bir geziye çıkardım.',
          es: 'Si tuviera más tiempo libre, haría un viaje por toda Europa.'
        },
        fluentTranslation: {
          prs: 'اگر وقت آزاد بیشتری می‌داشتم، به یک سفر تفریحی در سراسر اروپا می‌رفتم.',
          fa: 'اگر فرصت و وقت آزاد بیشتری داشتم، به یک سفر به دور سرتاسر اروپا می‌رفتم.',
          en: 'If I had more free time, I would take a trip across all of Europe.',
          ar: 'لو حظيت بمزيد من وقت الفراغ لشرعت في رحلة استكشافية عبر أرجاء أوروبا.',
          tr: 'Daha çok boş vaktim olsaydı bütün Avrupa\'yı gezerdim.',
          es: 'Si dispusiera de más tiempo libre, realizaría un viaje por toda Europa.'
        }
      }
    ]
  },
  {
    id: 'b1_2_lek9_vorgangspassiv',
    level: 'B1.2',
    lektion: 9,
    germanTitle: 'Das Vorgangspassiv im Präsens und Präteritum (werden / wurden + Partizip II)',
    formula: 'Präsens: wird/werden + Partizip II || Präteritum: wurde/wurden + Partizip II (+ von/durch)',
    explanation: {
      prs: 'مجهول فرآیندی (Passiv): تمرکز روی عمل یا نتیجه است نه انجام‌دهنده. در زمان حال با werden + Partizip II و در گذشته با wurde + Partizip II ساخته می‌شود.',
      fa: 'حالت مجهول زمانی به کار می‌رود که عمل یا واقعه اهمیت دارد، نه فاعل آن. ساختار: werden/wurde + Partizip II.',
      en: 'The process passive highlights the action itself rather than the agent: werden (present) / wurden (past) + Partizip II.',
      ar: 'المبني للمجهول الحركي (Vorgangspassiv) يركز على الحدث ذاته وليس الفاعل، ويصاغ بواسطة werden أو wurde مع اسم المفعول.',
      tr: 'Edilgen çatı (Passiv) eylemin kendisini ve sürecini öne çıkarır: werden / wurden + Partizip II.',
      es: 'La voz pasiva de proceso enfatiza la acción y no al sujeto agente: werden / wurden + Partizip II.'
    },
    category: 'passive_voice',
    examples: [
      {
        german: 'Der Patient wird vom Chefarzt gründlich untersucht und der Bericht wurde sofort geschrieben.',
        formulaBreakdown: 'wird untersucht (Passiv Präsens) + wurde geschrieben (Passiv Präteritum)',
        literalTranslation: {
          prs: 'مریض معاینه می‌شود توسط سرمتخصص و راپور نوشته شد فوراً.',
          fa: 'بیمار معاینه می‌شود توسط پزشک ارشد و گزارش نوشته شد بلافاصله.',
          en: 'The patient is examined by chief physician and the report was immediately written.',
          ar: 'يُفحص المريض من قِبل رئيس الأطباء بدقة، وقد كُتب التقرير الطبي على الفور.',
          tr: 'Hasta başhekim tarafından titizlikle muayene ediliyor ve rapor anında yazıldı.',
          es: 'El paciente es examinado minuciosamente por el médico jefe y el informe fue redactado al instante.'
        },
        fluentTranslation: {
          prs: 'مریض توسط داکتر سرطبیب به دقت معاینه می‌شود و گزارش طبی بلافاصله تحریر گردید.',
          fa: 'بیمار توسط پزشک ارشد معاینه می‌شود و گزارش نیز بلافاصله نوشته شد.',
          en: 'The patient is thoroughly examined by the head physician, and the report was written immediately.',
          ar: 'يخضع المريض لفحص سريري دقيق من قِبل رئيس الأطباء، وحُرّر التقرير دون تأخير.',
          tr: 'Hasta başhekim tarafından dikkatle muayene ediliyor; rapor ise hemen hazırlandı.',
          es: 'El paciente es examinado detenidamente por el médico jefe y el informe se redactó inmediatamente.'
        }
      }
    ]
  },
  {
    id: 'b1_2_lek10_doppelkonnektoren_kontrast',
    level: 'B1.2',
    lektion: 10,
    germanTitle: 'Zweiteilige Konnektoren mit Negation: "weder... noch" & "entweder... oder"',
    formula: 'weder A noch B (نه A و نه B / نفی هر دو) || entweder A oder B (یا A یا B / انتخاب یکی)',
    explanation: {
      prs: 'کلمه‌های ربط دوتایی منفی: weder... noch برای نفی همزمان دو چیز بدون نیاز به کلمه nicht استفاده می‌شود؛ entweder... oder برای انتخاب انحصاری بین دو گزینه است.',
      fa: 'حروف ربط دوجزئی تضاد: weder... noch هر دو مورد را به طور کامل نفی می‌کند. entweder... oder یکی از دو گزینه را الزامی می‌داند.',
      en: '"weder... noch" negates both options concurrently (neither... nor); "entweder... oder" forces a choice (either... or).',
      ar: '"weder... noch" تنفي الخيارين معاً دون الحاجة لأداة نفي، بينما تفيد "entweder... oder" التخيير الحصري بين بديلين.',
      tr: '"weder... noch" her iki seçeneği de olumsuzlar (ne... ne de); "entweder... oder" birini seçtirir (ya... ya da).',
      es: '"weder... noch" niega ambos elementos a la vez (ni... ni); "entweder... oder" plantea una disyuntiva excluyente (o... o).'
    },
    category: 'conjunctions',
    examples: [
      {
        german: 'Sayed hat weder geraucht noch Alkohol getrunken, um seine Gesundheit zu schützen.',
        formulaBreakdown: 'weder geraucht (Negation 1) + noch Alkohol getrunken (Negation 2)',
        literalTranslation: {
          prs: 'سید نه سیگار کشیده و نه الکل نوشیده، تا از صحت خود مراقبت کند.',
          fa: 'سید نه سیگار کشیده و نه الکل مصرف کرده، تا از سلامتی‌اش محافظت کند.',
          en: 'Sayed has neither smoked nor alcohol drunk, to his health protect.',
          ar: 'لم يدخن سيد ولم يشرب الكحوليات قط حرصاً على صون صحته.',
          tr: 'Sayed sağlığını korumak adına ne sigara içti ne de alkol kullandı.',
          es: 'Sayed ni fumó ni bebió alcohol para proteger su salud.'
        },
        fluentTranslation: {
          prs: 'سید برای محافظت از سلامتی خود، نه سیگار کشیده و نه الکل نوشیده است.',
          fa: 'سید برای حفظ سلامتی‌اش، نه اهل سیگار بوده و نه لب به الکل زده است.',
          en: 'Sayed neither smoked nor drank alcohol in order to protect his health.',
          ar: 'لم يتعاطَ سيد التدخين ولا الكحول حرصاً على عافيته وصحته البدنية.',
          tr: 'Sayed sağlığını korumak amacıyla ne sigara içmiştir ne de alkol tüketmiştir.',
          es: 'Sayed no ha fumado ni ha consumido alcohol con objeto de preservar su salud.'
        }
      }
    ]
  },
  {
    id: 'b1_2_lek11_n_deklination',
    level: 'B1.2',
    lektion: 11,
    germanTitle: 'Die N-Deklination (Schwache maskuline Nomen: der Kunde, der Herr, der Kollege)',
    formula: 'der Kunde (Nom) -> den/dem/des KUNDEN (-n in allen Kasus außer Nominativ Singular)',
    explanation: {
      prs: 'صرف اسامی ضعیف مذکر (N-Deklination): این اسامی مذکر در تمام حالت‌ها (آکوزاتیو، داتیو و گنیتو) پسوند -n یا -en می‌گیرند و فقط در نومیناتیو مفرد بدون پسوند می‌مانند.',
      fa: 'صرف اسامی ضعیف مذکر (N-Deklination): اسامی مانند der Kunde, der Herr, der Kollege در تمام حالات غیرفاعلی پسوند n یا en می‌گیرند.',
      en: 'Weak masculine nouns take the suffix -(e)n in all cases (Akkusativ, Dativ, Genitiv) except Nominative singular.',
      ar: 'الأسماء المذكرة الضعيفة (N-Deklination) تأخذ اللاحقة -(e)n في جميع الحالات الإعرابية باستثناء الرفع المفرد.',
      tr: 'Zayıf eril isimler (N-Deklination) tekil yalın hal hariç diğer tüm durumlarda -(e)n eki alır.',
      es: 'Los sustantivos masculinos débiles reciben la desinencia -(e)n en todos los casos salvo en el nominativo singular.'
    },
    category: 'cases',
    examples: [
      {
        german: 'Der Verkäufer hilft dem Kunden (Dat) und beantwortet die Frage des Herrn (Gen).',
        formulaBreakdown: 'dem Kunden (Dativ mit -n) + des Herrn (Genitiv mit -n)',
        literalTranslation: {
          prs: 'فروشنده کمک می‌کند به مشتری و پاسخ می‌دهد به سوال آقا.',
          fa: 'فروشنده کمک می‌کند به مشتری و پاسخ می‌دهد سوال آقا را.',
          en: 'The seller helps the customer and answers the question of the gentleman.',
          ar: 'يساعد البائع الزبون ويجيب عن استفسار السيد المحترم.',
          tr: 'Satıcı müşteriye yardımcı oluyor ve beyefendinin sorusunu yanıtlıyor.',
          es: 'El dependiente atiende al cliente y responde a la pregunta del señor.'
        },
        fluentTranslation: {
          prs: 'فروشنده به مشتری کمک می‌کند و به سوالات آن آقا پاسخ می‌دهد.',
          fa: 'فروشنده به مشتری کمک می‌کند و به پرسش آن آقا پاسخ می‌دهد.',
          en: 'The sales assistant helps the customer and answers the gentleman\'s question.',
          ar: 'يقدم البائع المساعدة للزبون ويرد بلباقة على استفسارات السيد.',
          tr: 'Satıcı müşteriye yardım ediyor ve beyefendinin sorusunu cevaplandırıyor.',
          es: 'El dependiente ayuda al cliente y responde a la duda formulada por el caballero.'
        }
      }
    ]
  },
  {
    id: 'b1_2_lek12_finalsatz_damit_um_zu',
    level: 'B1.2',
    lektion: 12,
    germanTitle: 'Finalsätze: "damit" (verschiedene Subjekte) vs. "um... zu" (gleiches Subjekt)',
    formula: 'um (...) zu + Infinitiv (Subjekt identisch) || damit + Subjekt 2 + (...) + Verb (verschiedene Subjekte)',
    explanation: {
      prs: 'جملات هدف و مقصود (Finalsätze): اگر فاعل دو جمله یکی باشد، ساختار um... zu + Infinitiv استفاده می‌شود. اگر فاعل‌ها متفاوت باشند، حتماً باید از damit استفاده کرد.',
      fa: 'جملات بیان هدف: اگر فاعل هر دو بخش یکسان باشد um... zu می‌آید. اگر فاعل‌ها متفاوت باشند حتماً از حرف ربط damit استفاده می‌شود.',
      en: 'Purpose clauses: use "um... zu + infinitive" when subjects are identical; use "damit" when subjects differ.',
      ar: 'جمل الغاية والهدف: تستخدم "um... zu" عند تطابق الفاعل في الجملتين، بينما تستخدم "damit" وجوباً عند اختلاف الفاعل.',
      tr: 'Amaç cümlelerinde özneler aynıysa "um... zu", farklıysa "damit" bağlacı tercih edilir.',
      es: 'Oraciones finales: se emplea "um... zu + infinitivo" si coincide el sujeto; se usa "damit" si los sujetos son distintos.'
    },
    category: 'subordinate_clauses',
    examples: [
      {
        german: 'Sayed spart Geld, um sich einen Laptop zu kaufen, und lernt viel, damit seine Eltern stolz sind.',
        formulaBreakdown: 'um (...) zu kaufen (gleiches Subjekt) || damit seine Eltern stolz sind (anderes Subjekt)',
        literalTranslation: {
          prs: 'سید پس‌انداز می‌کند پول، تا بخرد یک لپ‌تاپ، و می‌آموزد بسیار، تا والدینش فخر کنند.',
          fa: 'سید پول پس‌انداز می‌کند تا یک لپ‌تاپ بخرد، و زیاد درس می‌خواند تا والدینش افتخار کنند.',
          en: 'Sayed saves money to buy a laptop, and studies hard so that his parents are proud.',
          ar: 'يدخر سيد المال ليشتري حاسوباً، ويدرس بجد حتى يفخر به والداه.',
          tr: 'Sayed dizüstü bilgisayar almak için para biriktiriyor ve ailesi gurur duysun diye çok çalışıyor.',
          es: 'Sayed ahorra dinero para comprarse un portátil y estudia mucho para que sus padres estén orgullosos.'
        },
        fluentTranslation: {
          prs: 'سید پول پس‌انداز می‌کند تا لپ‌تاپ بخرد، و حسابی تلاش می‌کند تا والدینش به او افتخار کنند.',
          fa: 'سید پول پس‌انداز می‌کند تا لپ‌تاپ بخرد، و سخت تلاش می‌کند تا والدینش به او افتخار کنند.',
          en: 'Sayed is saving money to buy a laptop, and studying hard so that his parents are proud.',
          ar: 'يدخر سيد نقوده لشراء حاسوب محمول، ويجتهد في دراسته كي يفخر والداه بنجاحه.',
          tr: 'Sayed bir dizüstü bilgisayar satın alabilmek için para biriktiriyor ve anne babası kendisiyle iftihar etsin diye çok çalışıyor.',
          es: 'Sayed ahorra dinero para comprarse un ordenador portátil y estudia mucho a fin de que sus padres se sientan orgullosos.'
        }
      }
    ]
  },
  {
    id: 'b1_2_lek13_nachdem_vorzeitigkeit',
    level: 'B1.2',
    lektion: 13,
    germanTitle: 'Temporale Nebensätze mit "nachdem" (Zeitenfolge / Vorzeitigkeit)',
    formula: 'Nachdem + Plusquamperfekt (hatte/war + P.II) , Präteritum (Hauptsatz)',
    explanation: {
      prs: 'قانون تقدم زمان با nachdem (بعد از آنکه): کاری که اول تمام شده در گذشته کامل (Plusquamperfekt) می‌آید، و کاری که بعد رخ داده در گذشته ساده (Präteritum) می‌آید.',
      fa: 'حرف ربط nachdem تقدم زمانی را نشان می‌دهد: کاری که زودتر انجام شده در پلاس‌کوآم‌پرفکت و کار بعدی در پرتریتوم بیان می‌شود.',
      en: '"nachdem" expresses temporal priority: the earlier completed action requires Plusquamperfekt, followed by Präteritum in the main clause.',
      ar: 'تفيد أداة الربط "nachdem" الأسبقية الزمنية التامة: يوضع الحدث الأول في الماضي الأسبق (Plusquamperfekt) والحدث اللاحق في الماضي البسيط.',
      tr: '"nachdem" bağlacı öncelik-sonralık ilişkisi kurar: ilk biten eylem Plusquamperfekt, sonraki Präteritum olur.',
      es: '"nachdem" expresa anterioridad temporal estricta: la acción previa exige pretérito pluscuamperfecto frente al pretérito de la principal.'
    },
    category: 'subordinate_clauses',
    examples: [
      {
        german: 'Nachdem Sayed die Dokumente geprüft hatte, unterschrieb er den Vertrag.',
        formulaBreakdown: 'Nachdem (...) geprüft hatte (Plusquamperfekt) + unterschrieb er (Präteritum)',
        literalTranslation: {
          prs: 'بعد از آنکه سید اسناد را بررسی کرده بود، امضا نمود او قرارداد را.',
          fa: 'بعد از آنکه سید مدارک را بررسی کرده بود، امضا کرد او قرارداد را.',
          en: 'After Sayed the documents verified had, signed he the contract.',
          ar: 'بعد أن كان سيد قد دقق الوثائق الرسمية، وقع على بنود العقد.',
          tr: 'Sayed belgeleri inceledikten sonra sözleşmeyi imzaladı.',
          es: 'Después de que Sayed hubo revisado los documentos, firmó el contrato.'
        },
        fluentTranslation: {
          prs: 'سید پس از آنکه تمام اسناد را با دقت بررسی کرده بود، قرارداد را امضا کرد.',
          fa: 'سید پس از اینکه تمام اسناد را به دقت بررسی کرده بود، قرارداد را امضا کرد.',
          en: 'After Sayed had examined the documents, he signed the contract.',
          ar: 'عقب أن استكمل سيد مراجعة الوثائق وتدقيقها بدقة، أمضى العقد المبرم.',
          tr: 'Sayed evrakları etraflıca kontrol ettikten sonra sözleşmeye imzasını attı.',
          es: 'Una vez que Sayed hubo examinado minuciosamente los documentos, procedió a firmar el contrato.'
        }
      }
    ]
  },
  {
    id: 'b1_2_lek14_futur1_werden',
    level: 'B1.2',
    lektion: 14,
    germanTitle: 'Das Futur I mit "werden" (Zukunftspläne, Versprechen & Vermutungen)',
    formula: 'Subjekt + werden (konjugiert an Pos 2) + (...) + *Infinitiv am Satzende*',
    explanation: {
      prs: 'زمان آینده ساده (Futur I): با صرف فعل werden در جایگاه دوم و آوردن مصدر فعل اصلی در انتهای جمله برای برنامه‌ها، پیش‌بینی‌ها و قول‌ها ساخته می‌شود.',
      fa: 'زمان آینده (Futur I): فعل werden در جایگاه دوم صرف می‌شود و مصدر دست‌نخورده در انتهای جمله قرار می‌گیرد.',
      en: 'Futur I forms with conjugated "werden" in position 2 and the main infinitive at the end to express future plans, promises, or forecasts.',
      ar: 'يصاغ المستقبل البسيط (Futur I) بتصريف werden في الموقع الثاني ووضع مصدر الفعل الأساسي في نهاية الجملة للتعبير عن الخطط والوعود.',
      tr: 'Gelecek zaman (Futur I), "werden" yardımcı fiili 2. konumda çekimlenip asıl fiil cümlenin sonuna mastar olarak eklenerek kurulur.',
      es: 'El futuro simple (Futur I) se construye con el auxiliar "werden" en posición 2 y el infinitivo del verbo principal al final de la frase.'
    },
    category: 'verbs',
    examples: [
      {
        german: 'Sayed wird im nächsten Jahr die B2-Stufe beginnen und in Deutschland Karriere machen.',
        formulaBreakdown: 'wird (werden Pos 2) + beginnen und machen (Infinitive am Ende)',
        literalTranslation: {
          prs: 'سید خواهد در سال آینده سطح B2 را آغاز کرد و در آلمان پیشرفت کاری نمود.',
          fa: 'سید خواهد در سال آینده سطح B2 را آغاز کرد و در آلمان پیشرفت شغلی کرد.',
          en: 'Sayed will in the next year the B2 level begin and in Germany make career.',
          ar: 'سوف يبدأ سيد في العام المقبل مرحلة B2 ويحقق نجاحاً مهنياً في ألمانيا.',
          tr: 'Sayed gelecek yıl B2 seviyesine başlayacak ve Almanya\'da kariyer yapacaktır.',
          es: 'Sayed comenzará el nivel B2 el próximo año y forjará una carrera profesional en Alemania.'
        },
        fluentTranslation: {
          prs: 'سید در سال آینده سطح B2 را شروع خواهد کرد و در آلمان به پیشرفت‌های شغلی چشمگیری دست خواهد یافت.',
          fa: 'سید سال آینده سطح B2 را شروع خواهد کرد و پیشرفت‌های شغلی بزرگی در آلمان به دست خواهد آورد.',
          en: 'Next year Sayed will begin the B2 level and build a successful career in Germany.',
          ar: 'سيبدأ سيد دراسة المستوى B2 في العام القادم ويصنع مسيرة مهنية واعدة في ألمانيا.',
          tr: 'Sayed önümüzdeki yıl B2 seviyesine başlayacak ve Almanya\'da parlak bir kariyer inşa edecektir.',
          es: 'Sayed comenzará el nivel B2 el año que viene y consolidará una brillante carrera profesional en Alemania.'
        }
      }
    ]
  }
];
