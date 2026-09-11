import { GrammarRule } from '../types';

export const BOOK_GRAMMAR_RULES_ADVANCED: GrammarRule[] = [
  // ================= B2.1 =================
  {
    id: 'b2_1_lek1_partizip1_adjektiv',
    level: 'B2.1',
    lektion: 1,
    germanTitle: 'Das Partizip I als Adjektiv (Gleichzeitigkeit & Aktivität)',
    formula: 'Infinitiv + -d + Adjektivendung (z.B. der lesende Student, die lachenden Kinder)',
    explanation: {
      prs: 'اسم فاعل (Partizip I): با افزودن حرف d به انتهای مصدر و اضافه کردن پسوندهای صرف صفت ساخته می‌شود و نشان‌دهنده کاری فعال و همزمان با زمان جمله است.',
      fa: 'پارتیسیپ ۱ با افزودن d به مصدر و صرف مانند صفت ساخته می‌شود و عملِ همزمان، فعال و مستمر را بیان می‌کند.',
      en: 'Partizip I is formed by adding -d to the infinitive plus standard adjective endings, expressing simultaneous active action.',
      ar: 'يصاغ اسم الفاعل (Partizip I) بإضافة d للمصدر مع نهايات الصفات ليدل على الفاعلية والتزامن المستمر.',
      tr: 'Etken sıfat-fiil (Partizip I), mastarın sonuna -d getirilerek sıfat gibi çekimlenir ve eşzamanlı aktif eylemi bildirir.',
      es: 'El participio presente (Partizip I) se forma añadiendo -d al infinitivo más desinencias adjetivales, expresando acción activa simultánea.'
    },
    category: 'adjectives',
    examples: [
      {
        german: 'Der engagiert lernende Fachmann meistert alle beruflichen Herausforderungen.',
        formulaBreakdown: 'lernende (Partizip I von lernen mit -d + -e als maskulines Adjektiv)',
        literalTranslation: {
          prs: 'متخصص با پشتکار آموزنده، تمام چالش‌های مسلکی را مهار می‌سازد.',
          fa: 'متخصص متعهد در حال یادگیری، تمام چالش‌های شغلی را مدیریت می‌کند.',
          en: 'The actively learning professional masters all professional challenges.',
          ar: 'الخبير المجد في تعلمه يتغلب على جميع التحديات المهنية باقتدار.',
          tr: 'Özveriyle öğrenen uzman, tüm mesleki zorlukların üstesinden gelir.',
          es: 'El profesional que estudia con dedicación supera todos los retos laborales.'
        },
        fluentTranslation: {
          prs: 'متخصص پرتلاشی که مدام در حال یادگیری است، بر همه چالش‌های مسلکی پیروز می‌شود.',
          fa: 'متخصص سخت‌کوشی که پیوسته در حال یادگیری است، تمام موانع شغلی را پشت سر می‌گذارد.',
          en: 'The dedicated professional continuously learning conquers all career challenges.',
          ar: 'المتخصص المتفاني في مواصلة تعلمه يجتاز سائر العقبات المهنية بنجاح.',
          tr: 'Azimle kendini geliştiren uzman her türlü mesleki meydan okumayı aşar.',
          es: 'El especialista comprometido con su formación supera cualquier desafío laboral.'
        }
      }
    ]
  },
  {
    id: 'b2_1_lek2_passiv_modalverben',
    level: 'B2.1',
    lektion: 2,
    germanTitle: 'Das Passiv mit Modalverben (Präsens & Präteritum)',
    formula: 'Präsens: Modalverb (Pos 2) + (...) + Partizip II + werden || Präteritum: musste/konnte + (...) + P.II + werden',
    explanation: {
      prs: 'مجهول با افعال وجهی: فعل وجهی در جایگاه دوم صرف می‌شود و در انتهای جمله ترکیب «Partizip II + werden» قرار می‌گیرد.',
      fa: 'حالت مجهول با افعال کمکی: فعل کمکی در موقعیت دوم قرار گرفته و در پایان جمله ترکیب اسم مفعول + werden می‌نشیند.',
      en: 'Passive with modal verbs: conjugated modal verb in position 2, followed by Partizip II + "werden" at the very end.',
      ar: 'المبني للمجهول مع الأفعال المساعدة: يصرف الفعل المساعد في المرتبة الثانية ويأتي اسم المفعول متبوعاً بـ werden في النهاية.',
      tr: 'Modal fiillerle edilgen yapı: Modal fiil 2. konumda, Partizip II + werden ise cümlenin en sonunda yer alır.',
      es: 'Pasiva con verbos modales: verbo modal conjugado en posición 2 y al final la estructura Partizip II + "werden".'
    },
    category: 'passive_voice',
    examples: [
      {
        german: 'Die Sicherheitsvorschriften müssen von allen Mitarbeitern strikt eingehalten werden.',
        formulaBreakdown: 'müssen (Modalverb Pos 2) + von allen Mitarbeitern + eingehalten werden (Passiv-Klammer)',
        literalTranslation: {
          prs: 'مقررات امنیتی باید توسط همه کارمندان دقیق رعایت کرده شوند.',
          fa: 'مقررات ایمنی باید توسط همه کارکنان دقیقاً رعایت شوند.',
          en: 'The safety regulations must by all employees strictly complied with be.',
          ar: 'يجب أن تُراعى لوائح السلامة بدقة متناهية من قِبل جميع العاملين.',
          tr: 'Güvenlik kurallarına tüm çalışanlar tarafından harfiyen uyulmalıdır.',
          es: 'Las normas de seguridad deben ser observadas estrictamente por todos los empleados.'
        },
        fluentTranslation: {
          prs: 'مقررات ایمنی باید توسط تمامی کارمندان و پرسنل به صورت دقیق رعایت گردد.',
          fa: 'مقررات ایمنی کارگاه باید مو به مو توسط همه پرسنل اجرا شود.',
          en: 'Safety regulations must be strictly adhered to by all employees.',
          ar: 'ينبغي الامتثال الدقيق لقواعد الأمان والسلامة المهنية من جانب كافة الموظفين.',
          tr: 'İş güvenliği talimatlarına tüm personelce eksiksiz riayet edilmelidir.',
          es: 'Todos los trabajadores deben acatar con rigurosidad las directrices de seguridad.'
        }
      }
    ]
  },

  // ================= B2.2 =================
  {
    id: 'b2_2_lek1_konjunktiv1_rede',
    level: 'B2.2',
    lektion: 1,
    germanTitle: 'Der Konjunktiv I (Indirekte Rede in Medien & Berichten)',
    formula: 'er/sie sei | habe | könne | gehe || Stamm + -e / -est / -e / -en / -et / -en',
    explanation: {
      prs: 'کونیونکتیو ۱ در نقل‌قول غیرمستقیم مطبوعاتی و رسمی: برای گزارش بی‌طرفانه سخنان دیگران بدون تایید یا تکذیب گوینده به کار می‌رود.',
      fa: 'کون‌یونکتیو ۱ برای نقل‌قول غیرمستقیم در روزنامه‌ها و رسانه‌های رسمی استفاده می‌شود تا بی‌طرفی گزارشگر حفظ شود.',
      en: 'Konjunktiv I is used in journalism and formal documentation to report third-party statements neutrally (indirect speech).',
      ar: 'تستخدم صيغة Konjunktiv I في الصحافة والتقارير الرسمية لنقل الكلام غير المباشر بحيادية تامة دون تبني رأي القائل.',
      tr: 'Konjunktiv I, basında ve resmi beyanlarda dolaylı aktarım (tarafsız alıntı) yapmak için kullanılır.',
      es: 'El Konjunktiv I se emplea en el periodismo y los informes oficiales para reproducir el estilo indirecto con neutralidad.'
    },
    category: 'subjunctive',
    examples: [
      {
        german: 'Der Regierungssprecher erklärte, die Wirtschaftskrise sei weitgehend überwunden.',
        formulaBreakdown: 'erklärte + die Wirtschaftskrise + sei überwunden (Konjunktiv I Perfekt Passiv)',
        literalTranslation: {
          prs: 'سخنگوی دولت اظهار داشت، بحران اقتصادی تا حد زیادی مهار شده باشد.',
          fa: 'سخنگوی دولت اعلام کرد که بحران اقتصادی تا حد زیادی مهار شده است.',
          en: 'The government spokesman declared the economic crisis were largely overcome.',
          ar: 'صرح المتحدث باسم الحكومة بأن الأزمة الاقتصادية قد تم تجاوزها إلى حد بعيد.',
          tr: 'Hükümet sözcüsü, ekonomik krizin büyük ölçüde atlatıldığını ifade etti.',
          es: 'El portavoz del gobierno declaró que la crisis económica estaría prácticamente superada.'
        },
        fluentTranslation: {
          prs: 'سخنگوی حکومت اعلام کرد که بحران اقتصادی تا حد زیادی مهار و مدیریت شده است.',
          fa: 'سخنگوی دولت اعلام داشت که بحران اقتصادی تا حدود زیادی پشت سر گذاشته شده است.',
          en: 'The government spokesperson declared that the economic crisis had largely been overcome.',
          ar: 'أفاد الناطق الرسمي باسم الحكومة بتخطي الأزمة الاقتصادية إلى حد كبير.',
          tr: 'Hükümet sözcüsü ekonomik buhranın büyük oranda bertaraf edildiğini açıkladı.',
          es: 'El portavoz gubernamental manifestó que la recesión económica había sido prácticamente superada.'
        }
      }
    ]
  },

  // ================= C1.1 =================
  {
    id: 'c1_1_lek1_modale_infinitive',
    level: 'C1.1',
    lektion: 1,
    germanTitle: 'Modale Infinitivkonstruktionen (haben / sein + zu + Infinitiv)',
    formula: 'sein + zu + Infinitiv (Passiv + müssen/können) || haben + zu + Infinitiv (Aktiv + müssen)',
    explanation: {
      prs: 'ترکیب sein + zu + Infinitiv معنای مجهول «باید انجام شود» یا «می‌تواند انجام شود» دارد. ترکیب haben + zu + Infinitiv معنای معلوم «باید انجام دهد» دارد.',
      fa: 'ساختار رسمی sein + zu + Infinitiv جایگزین مجهول با müssen/können است. ساختار haben + zu + Infinitiv جایگزین معلوم müssen است.',
      en: '"sein + zu + inf" equates to passive necessity/possibility ("muss/kann getan werden"). "haben + zu + inf" means active necessity.',
      ar: 'تركيب "sein + zu + مصدر" يحل محل المبني للمجهول الدال على الوجوب أو الإمكان. وتركيب "haben + zu + مصدر" يفيد الإلزام المعلوم.',
      tr: '"sein + zu + mastar" edilgen zorunluluk/imkan ("yapılmalıdır/yapılabilir"), "haben + zu" ise etken zorunluluk ("yapmak zorundadır") anlatır.',
      es: '"sein + zu + infinitivo" equivale a pasiva con sentido de obligación o posibilidad ("debe/puede ser hecho"); "haben + zu" a obligación activa.'
    },
    category: 'verbs',
    examples: [
      {
        german: 'Dieser wissenschaftliche Nachweis ist binnen kürzester Frist zu erbringen.',
        formulaBreakdown: 'ist zu erbringen = muss erbracht werden (Passiversatz)',
        literalTranslation: {
          prs: 'این مدرک علمی است در کوتاه‌ترین مهلت ارائه شدن (باید ارائه گردد).',
          fa: 'این مدرک علمی در کوتاه‌ترین زمان ممکن باید ارائه شود.',
          en: 'This scientific evidence is within the shortest deadline to be provided.',
          ar: 'هذا الإثبات العلمي واجب التقديم في أقصر الآجال الزمنية الممكنة.',
          tr: 'Bu bilimsel kanıt en kısa süre zarfında ibraz edilmelidir.',
          es: 'Esta prueba científica ha de ser aportada en el plazo más breve posible.'
        },
        fluentTranslation: {
          prs: 'این مدرک علمی باید در کوتاه‌ترین زمان ممکن تهیه و ارائه گردد.',
          fa: 'این اثبات و مدرک علمی باید در کوتاه‌ترین بازه زمانی ارائه شود.',
          en: 'This scientific proof must be furnished within the shortest possible timeframe.',
          ar: 'يتعين تقديم هذه القرينة العلمية في أقصر مهلة زمنية مستطاعة.',
          tr: 'Bu bilimsel delil mümkün olan en ivedi süre içerisinde sunulmalıdır.',
          es: 'Esta acreditación científica debe presentarse a la mayor brevedad.'
        }
      }
    ]
  },

  // ================= C1.2 =================
  {
    id: 'c1_2_lek1_subjektive_modalverben',
    level: 'C1.2',
    lektion: 1,
    germanTitle: 'Subjektive Bedeutung der Modalverben (Grad der Gewissheit: muss, dürfte, könnte)',
    formula: 'muss (99% sicher) > dürfte (75% wahrscheinlich) > kann/könnte (50% möglich) > mag (Zugeständnis)',
    explanation: {
      prs: 'کاربرد ذهنی افعال وجهی (Subjektive Modalverben): برای نشان دادن درجه اطمینان و حدس گوینده در مورد یک واقعیت. muss یعنی یقین قطعی، dürfte یعنی احتمال قوی، könnte یعنی امکان داشتن.',
      fa: 'افعال کمکی وجهی در کاربرد ذهنی برای بیان میزان قطعیت گوینده استفاده می‌شوند: muss (یقین ۹۹٪)، dürfte (احتمال زیاد ۷۵٪)، könnte (امکان ۵۰٪).',
      en: 'Subjective modal verbs convey speaker confidence: "muss" (near certainty), "dürfte" (high probability), "könnte" (mere possibility).',
      ar: 'المعنى الذاتي للأفعال المساعدة يحدد درجة يقين المتكلم: muss (يقين شبه تام)، dürfte (ترجيح قوي)، könnte (احتمال وارد).',
      tr: 'Modal fiillerin öznel kullanımı konuşmacının kesinlik derecesini belirtir: muss (kesin), dürfte (muhtemel), könnte (olabilir).',
      es: 'El uso subjetivo de los modales calibra el grado de certeza del hablante: "muss" (certeza), "dürfte" (probabilidad), "könnte" (posibilidad).'
    },
    category: 'modal_verbs',
    examples: [
      {
        german: 'Der Gutachter dürfte den Bericht bereits abgeschlossen haben.',
        formulaBreakdown: 'dürfte (Wahrscheinlichkeit ~75%) + abgeschlossen haben (Infinitiv Perfekt)',
        literalTranslation: {
          prs: 'کارشناس رسمی احتمال دارد گزارش را از قبل تمام کرده باشد.',
          fa: 'کارشناس رسمی به احتمال زیاد گزارش را تا الان تمام کرده است.',
          en: 'The expert witness is likely to have already finalized the report.',
          ar: 'من المرجح جداً أن يكون الخبير قد استكمل التقرير بالفعل.',
          tr: 'Bilirkişinin raporu çoktan tamamlamış olması kuvvetle muhtemeldir.',
          es: 'Es muy probable que el perito ya haya concluido el informe.'
        },
        fluentTranslation: {
          prs: 'به احتمال بسیار قوی، کارشناس متخصص تا کنون تدوین گزارش را به پایان رسانده است.',
          fa: 'به احتمال بسیار قوی، کارشناس رسمی تا الان نوشتن گزارش را نهایی کرده است.',
          en: 'The certified expert has most likely already concluded the report.',
          ar: 'يرجح بقوة أن يكون الخبير المعتمد قد فرغ من إعداد تقريره بالفعل.',
          tr: 'Uzman bilirkişinin raporu şimdiye kadar bitirmiş olması kuvvetle muhtemeldir.',
          es: 'Con toda probabilidad el perito judicial habrá concluido ya el dictamen pericial.'
        }
      }
    ]
  },

  // ================= C2.1 =================
  {
    id: 'c2_1_lek1_inversion_stilistik',
    level: 'C2.1',
    lektion: 1,
    germanTitle: 'Stilistische Inversion & Spitzenstellung zur Fokussierung',
    formula: 'Fokuspartikel / Adverbiale Phrase (Vorfeld) + Verb (Fin) + Subjekt + (...)',
    explanation: {
      prs: 'وارونگی سبک‌شناختی و قرار دادن اجزا در صدر جمله برای تاکید برتر و تسلط فصیح بر کلام در سطح C2.',
      fa: 'وارونگی سبک‌شناختی (Inversion) و پیش‌اندازی اجزا در پیشگاه جمله (Vorfeld) برای برجسته‌سازی بلاغی و تاکید فاخر ادبی.',
      en: 'Stylistic inversion and topicalization in Vorfeld serve rhetorical emphasis and high-register stylistic mastery.',
      ar: 'التقديم البلاغي والتناوب الأسلوبي في مقدمة الجملة لإضفاء الفصاحة والتركيز الأسلوبي الرفيع.',
      tr: 'Cümle başı vurgusu ve biçemsel devriklik (Inversion), C2 seviyesinde retorik güç ve edebi derinlik sağlar.',
      es: 'La inversión estilística y la anteposición en el Vorfeld confieren relieve retórico y refinamiento literario de nivel C2.'
    },
    category: 'sentence_structure',
    examples: [
      {
        german: 'Kaum hatte die Konferenz begonnen, da traten bereits fundamentale Differenzen zutage.',
        formulaBreakdown: 'Kaum (Spitzenstellung) + hatte (Verb) + die Konferenz begonnen (Inversion)',
        literalTranslation: {
          prs: 'به زحمت آغاز یافته بود کنفرانس، که هماندم پدیدار گشتند تفاوت‌های بنیادین.',
          fa: 'هنوز کنفرانس آغاز نشده بود که اختلافات بنیادین آشکار گردید.',
          en: 'Barely had the conference begun when fundamental differences already came to light.',
          ar: 'ما كاد المؤتمر يستهل أعماله حتى برزت تباينات جوهرية إلى العلن.',
          tr: 'Konferans henüz yeni başlamıştı ki köklü görüş ayrılıkları derhal su yüzüne çıktı.',
          es: 'Apenas había comenzado el congreso cuando ya salieron a relucir discrepancias fundamentales.'
        },
        fluentTranslation: {
          prs: 'کنفرانس به سختی آغاز شده بود که اختلافات و دیدگاه‌های بنیادین آشکار و هویدا گردید.',
          fa: 'هنوز لحظاتی از افتتاح همایش نگذشته بود که اختلافات عمیق و مبنایی نمایان شد.',
          en: 'Scarcely had the symposium convened when deep fundamental fissures manifested.',
          ar: 'لم يكد ينعقد المؤتمر حتى طفت على السطح تباينات مبدئية حادة بين الأطراف.',
          tr: 'Sempozyum başlar başlamaz temel görüş ayrılıkları gün yüzüne çıktı.',
          es: 'Apenas inaugurado el simposio se evidenciaron profundas divergencias conceptuales.'
        }
      }
    ]
  },

  // ================= C2.2 =================
  {
    id: 'c2_2_lek1_nuancen_idiomatik',
    level: 'C2.2',
    lektion: 1,
    germanTitle: 'Syntaktische Nuancierung & Höchstregister (Kondensierte Partizipialgefüge)',
    formula: 'Präpositionale Partizipialgruppe (z.B. Unter Berücksichtigung der vorliegenden Tatsachen)',
    explanation: {
      prs: 'تسلط کامل و بی‌نقص بر ساختارهای فشرده نوشتاری، اسلوب حقوقی و متون اکادمیک سطح نهایی C2.',
      fa: 'تسلط عالی بر عبارات فشرده پارتیسیپی، نگارش حقوقی، دانشگاهی و تمایزهای ظریف معنایی در سطح C2.',
      en: 'Ultimate C2 syntactic nuance, condensed participial phrasing, and mastery over formal and academic registers.',
      ar: 'الإتقان البلاغي الأقصى للأساليب المكثفة والصيغ الأكاديمية واللغة القانونية في المستوى C2.',
      tr: 'C2 seviyesinde yoğunlaştırılmış sıfat-fiil öbekleri, hukuki-akademik dil ve en üst düzey üslup yetkinliği.',
      es: 'Dominio de la sintaxis condensada, giros participiales de alta densidad y registro académico-jurídico C2.'
    },
    category: 'sentence_structure',
    examples: [
      {
        german: 'Ungeachtet aller gegenläufigen Argumente bleibt die getroffene Vereinbarung uneingeschränkt rechtswirksam.',
        formulaBreakdown: 'Ungeachtet aller Argumente (Genitiv Präposition) + bleibt (...) rechtswirksam (Akademisches Register)',
        literalTranslation: {
          prs: 'صرف‌نظر از همه استدلال‌های مخالف، توافق حاصل‌شده بدون قید و شرط دارای اعتبار قانونی باقی می‌ماند.',
          fa: 'صرف‌نظر از تمام استدلال‌های مخالف، توافق حاصل‌شده بدون محدودیت نافذ و دارای اعتبار حقوقی است.',
          en: 'Notwithstanding all opposing arguments, the agreement reached remains fully legally effective.',
          ar: 'بصرف النظر عن كافة الحجج المضادة، يظل الاتفاق المبرم ساري المفعول قانوناً دونما أدنى قيد.',
          tr: 'Tüm aksi argümanlara rağmen varılan mutabakat hukuken bütünüyle geçerliliğini korumaktadır.',
          es: 'Sin perjuicio de los contraargumentos esgrimidos, el acuerdo suscrito mantiene plena vigencia jurídica.'
        },
        fluentTranslation: {
          prs: 'صرف‌نظر از هرگونه استدلال مخالف، توافق‌نامه منعقده با تمام قوّت و بدون قید و شرط دارای اعتبار قانونی و حقوقی است.',
          fa: 'صرف‌نظر از تمام استدلال‌های مخالف، توافق منعقدشده کماکان به قوت حقوقی خود به طور کامل باقی است.',
          en: 'Notwithstanding all dissenting arguments, the concluded agreement remains fully legally binding.',
          ar: 'بصرف النظر عن كافة الدفوع المعارضة، يحتفظ الاتفاق المبرم بكامل حجيته وقوته القانونية الملزمة.',
          tr: 'Tüm itirazlara karşın akdedilen sözleşme hukuki geçerliliğini hiçbir kısıtlama olmaksızین muhafaza etmektedir.',
          es: 'Cualesquiera que fueren las objeciones, el convenio acordado conserva plenitud de eficacia legal.'
        }
      }
    ]
  }
];
