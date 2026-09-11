import { GlossaryEntry, CEFRLevel } from '../types';

export const GLOSSARY_DATA: Record<CEFRLevel, GlossaryEntry[]> = {
  'A1.1': [
    {
      id: 'a1_1_apfel',
      level: 'A1.1',
      lektion: 3,
      article: 'der',
      word: 'Apfel',
      plural: 'Äpfel',
      gender: 'maskulin',
      ipa: '[ˈapfl̩]',
      translation: {
        en: 'apple',
        fa: 'سیب',
        tr: 'elma',
        ar: 'تفاحة',
        es: 'manzana'
      },
      exampleGerman: 'Ich esse jeden Morgen einen frischen Apfel.',
      exampleTranslation: {
        en: 'I eat a fresh apple every morning.',
        fa: 'من هر روز صبح یک سیب تازه می‌خورم.',
        tr: 'Her sabah taze bir elma yerim.',
        ar: 'أتناول تفاحة طازجة كل صباح.',
        es: 'Como una manzana fresca cada mañana.'
      }
    },
    {
      id: 'a1_1_bahnhof',
      level: 'A1.1',
      lektion: 4,
      article: 'der',
      word: 'Bahnhof',
      plural: 'Bahnhöfe',
      gender: 'maskulin',
      ipa: '[ˈbaːnhoːf]',
      translation: {
        en: 'train station',
        fa: 'ایستگاه قطار',
        tr: 'tren istasyonu / gar',
        ar: 'محطة القطار',
        es: 'estación de tren'
      },
      exampleGerman: 'Wir treffen uns direkt am Hauptbahnhof.',
      exampleTranslation: {
        en: 'We will meet directly at the central train station.',
        fa: 'ما مستقیماً در ایستگاه مرکزی قطار همدیگر را ملاقات می‌کنیم.',
        tr: 'Doğrudan merkez tren garında buluşuyoruz.',
        ar: 'نلتقي مباشرة في محطة القطارات المركزية.',
        es: 'Nos encontramos directamente en la estación central.'
      }
    },
    {
      id: 'a1_1_brot',
      level: 'A1.1',
      lektion: 3,
      article: 'das',
      word: 'Brot',
      plural: 'Brote',
      gender: 'neutral',
      ipa: '[bʁoːt]',
      translation: {
        en: 'bread',
        fa: 'نان',
        tr: 'ekmek',
        ar: 'خبز',
        es: 'pan'
      },
      exampleGerman: 'In Deutschland gibt es über 3000 verschiedene Brotsorten.',
      exampleTranslation: {
        en: 'In Germany there are over 3000 different types of bread.',
        fa: 'در آلمان بیش از ۳۰۰۰ نوع مختلف نان وجود دارد.',
        tr: 'Almanya\'da 3000\'den fazla ekmek çeşidi vardır.',
        ar: 'يوجد في ألمانيا أكثر من 3000 نوع مختلف من الخبز.',
        es: 'En Alemania hay más de 3000 tipos diferentes de pan.'
      }
    },
    {
      id: 'a1_1_buch',
      level: 'A1.1',
      lektion: 2,
      article: 'das',
      word: 'Buch',
      plural: 'Bücher',
      gender: 'neutral',
      ipa: '[buːx]',
      translation: {
        en: 'book',
        fa: 'کتاب',
        tr: 'kitap',
        ar: 'كتاب',
        es: 'libro'
      },
      exampleGerman: 'Das Buch liegt auf dem Schreibtisch.',
      exampleTranslation: {
        en: 'The book is lying on the desk.',
        fa: 'کتاب روی میز تحریر قرار دارد.',
        tr: 'Kitap yazı masasının üzerinde duruyor.',
        ar: 'الكتاب موجود على طاولة المكتب.',
        es: 'El libro está sobre el escritorio.'
      }
    },
    {
      id: 'a1_1_frau',
      level: 'A1.1',
      lektion: 1,
      article: 'die',
      word: 'Frau',
      plural: 'Frauen',
      gender: 'feminin',
      ipa: '[fʁaʊ̯]',
      translation: {
        en: 'woman, wife, Mrs.',
        fa: 'خانم، همسر',
        tr: 'kadın, eş, bayan',
        ar: 'امرأة، زوجة، سيدة',
        es: 'mujer, esposa, señora'
      },
      exampleGerman: 'Das ist Frau Schneider, meine Kollegin.',
      exampleTranslation: {
        en: 'This is Mrs. Schneider, my colleague.',
        fa: 'این خانم اشنایدر است، همکار من.',
        tr: 'Bu Bayan Schneider, benim meslektaşım.',
        ar: 'هذه السيدة شنايدر، زميلتي.',
        es: 'Esta es la señora Schneider, mi colega.'
      }
    },
    {
      id: 'a1_1_stadt',
      level: 'A1.1',
      lektion: 2,
      article: 'die',
      word: 'Stadt',
      plural: 'Städte',
      gender: 'feminin',
      ipa: '[ʃtat]',
      translation: {
        en: 'city, town',
        fa: 'شهر',
        tr: 'şehir / kent',
        ar: 'مدينة',
        es: 'ciudad'
      },
      exampleGerman: 'München ist eine sehr schöne Stadt.',
      exampleTranslation: {
        en: 'Munich is a very beautiful city.',
        fa: 'مونیخ شهر بسیار زیبایی است.',
        tr: 'Münih çok güzel bir şehirdir.',
        ar: 'ميونيخ مدينة جميلة جداً.',
        es: 'Múnich es una ciudad muy hermosa.'
      }
    },
    {
      id: 'a1_1_wohnung',
      level: 'A1.1',
      lektion: 4,
      article: 'die',
      word: 'Wohnung',
      plural: 'Wohnungen',
      gender: 'feminin',
      ipa: '[ˈvoːnʊŋ]',
      translation: {
        en: 'apartment, flat',
        fa: 'آپارتمان، منزل',
        tr: 'daire / ev',
        ar: 'شقة سكنية',
        es: 'apartamento, piso'
      },
      exampleGerman: 'Unsere Wohnung hat drei helle Zimmer und einen Balkon.',
      exampleTranslation: {
        en: 'Our apartment has three bright rooms and a balcony.',
        fa: 'آپارتمان ما سه اتاق نورگیر و یک بالکن دارد.',
        tr: 'Dairemizin üç aydınlık odası ve bir balkonu var.',
        ar: 'شقتنا بها ثلاث غرف مضيئة وشرفة.',
        es: 'Nuestro apartamento tiene tres habitaciones luminosas y un balcón.'
      }
    }
  ],
  'A1.2': [
    {
      id: 'a1_2_arzt',
      level: 'A1.2',
      lektion: 5,
      article: 'der',
      word: 'Arzt',
      plural: 'Ärzte',
      gender: 'maskulin',
      ipa: '[aːɐ̯tst]',
      translation: {
        en: 'physician, doctor',
        fa: 'پزشک، دکتر',
        tr: 'doktor / hekim',
        ar: 'طبيب',
        es: 'médico'
      },
      exampleGerman: 'Ich habe heute um 15 Uhr einen Termin beim Arzt.',
      exampleTranslation: {
        en: 'I have an appointment with the doctor today at 3 PM.',
        fa: 'من امروز ساعت ۳ بعدازظهر وقت دکتر دارم.',
        tr: 'Bugün saat 15:00\'te doktorda randevum var.',
        ar: 'لدي موعد عند الطبيب اليوم في الساعة الثالثة عصراً.',
        es: 'Tengo cita con el médico hoy a las 15:00.'
      }
    },
    {
      id: 'a1_2_fahrkarte',
      level: 'A1.2',
      lektion: 6,
      article: 'die',
      word: 'Fahrkarte',
      plural: 'Fahrkarten',
      gender: 'feminin',
      ipa: '[ˈfaːɐ̯ˌkaʁtə]',
      translation: {
        en: 'ticket (transit)',
        fa: 'بلیت رفت‌وآمد',
        tr: 'bilet (ulaşım)',
        ar: 'تذكرة سفر',
        es: 'billete de transporte'
      },
      exampleGerman: 'Bitte entwerten Sie die Fahrkarte vor dem Einsteigen.',
      exampleTranslation: {
        en: 'Please validate the ticket before boarding.',
        fa: 'لطفاً بلیت را قبل از سوار شدن معتبر کنید.',
        tr: 'Lütfen binmeden önce bileti okutun/damgalayın.',
        ar: 'يرجى ختم التذكرة قبل الصعود.',
        es: 'Por favor, valide el billete antes de subir.'
      }
    },
    {
      id: 'a1_2_krankenhaus',
      level: 'A1.2',
      lektion: 5,
      article: 'das',
      word: 'Krankenhaus',
      plural: 'Krankenhäuser',
      gender: 'neutral',
      ipa: '[ˈkʁaŋkn̩ˌhaʊ̯s]',
      translation: {
        en: 'hospital',
        fa: 'بیمارستان',
        tr: 'hastane',
        ar: 'مستشفى',
        es: 'hospital'
      },
      exampleGerman: 'Das städtische Krankenhaus liegt im Stadtzentrum.',
      exampleTranslation: {
        en: 'The municipal hospital is located in the city center.',
        fa: 'بیمارستان دولتی در مرکز شهر واقع شده است.',
        tr: 'Şehir hastanesi kent merkezinde yer alıyor.',
        ar: 'يقع المستشفى العام في وسط المدينة.',
        es: 'El hospital municipal está situado en el centro de la ciudad.'
      }
    }
  ],
  'A2.1': [
    {
      id: 'a2_1_arbeitsvertrag',
      level: 'A2.1',
      lektion: 1,
      article: 'der',
      word: 'Arbeitsvertrag',
      plural: 'Arbeitsverträge',
      gender: 'maskulin',
      ipa: '[ˈaʁbaɪ̯tsfɛɐ̯ˌtʁaːk]',
      translation: {
        en: 'employment contract',
        fa: 'قرارداد کار',
        tr: 'iş sözleşmesi',
        ar: 'عقد العمل',
        es: 'contrato de trabajo'
      },
      exampleGerman: 'Vor Dienstantritt unterschreibt man den Arbeitsvertrag.',
      exampleTranslation: {
        en: 'Before starting work, one signs the employment contract.',
        fa: 'پیش از آغاز به کار، قرارداد استخدام امضا می‌شود.',
        tr: 'İşe başlamadan önce iş sözleşmesi imzalanır.',
        ar: 'قبل بدء العمل، يوقع المرء على عقد العمل.',
        es: 'Antes de incorporarse al puesto, se firma el contrato de trabajo.'
      }
    },
    {
      id: 'a2_1_bewerbung',
      level: 'A2.1',
      lektion: 1,
      article: 'die',
      word: 'Bewerbung',
      plural: 'Bewerbungen',
      gender: 'feminin',
      ipa: '[bəˈvɛʁbʊŋ]',
      translation: {
        en: 'job application',
        fa: 'درخواست استخدام (رزومه)',
        tr: 'iş başvurusu',
        ar: 'طلب توظيف',
        es: 'solicitud de empleo'
      },
      exampleGerman: 'Ich habe gestern eine vollständige Bewerbung per E-Mail gesendet.',
      exampleTranslation: {
        en: 'I sent a complete job application by email yesterday.',
        fa: 'من دیروز یک درخواست استخدام کامل را از طریق ایمیل ارسال کردم.',
        tr: 'Dün e-posta yoluyla eksiksiz bir iş başvurusu gönderdim.',
        ar: 'أرسلت البارحة طلب توظيف مكتملاً عبر البريد الإلكتروني.',
        es: 'Ayer envié una solicitud de empleo completa por correo electrónico.'
      }
    },
    {
      id: 'a2_1_gehalt',
      level: 'A2.1',
      lektion: 2,
      article: 'das',
      word: 'Gehalt',
      plural: 'Gehälter',
      gender: 'neutral',
      ipa: '[ɡəˈhalt]',
      translation: {
        en: 'salary, monthly earnings',
        fa: 'حقوق ماهانه',
        tr: 'maaş / aylık',
        ar: 'راتب شهري',
        es: 'sueldo, salario'
      },
      exampleGerman: 'Das monatliche Gehalt wird am Monatsende überwiesen.',
      exampleTranslation: {
        en: 'The monthly salary is transferred at the end of the month.',
        fa: 'حقوق ماهانه در پایان ماه به حساب واریز می‌شود.',
        tr: 'Aylık maaş ay sonunda banka hesabına aktarılır.',
        ar: 'يتم تحويل الراتب الشهري في نهاية كل شهر.',
        es: 'El salario mensual se transfiere a finales de mes.'
      }
    }
  ],
  'A2.2': [
    {
      id: 'a2_2_umweltschutz',
      level: 'A2.2',
      lektion: 4,
      article: 'der',
      word: 'Umweltschutz',
      plural: 'kein Plural',
      gender: 'maskulin',
      ipa: '[ˈʊmvɛltˌʃʊts]',
      translation: {
        en: 'environmental protection',
        fa: 'حفاظت از محیط زیست',
        tr: 'çevre koruma',
        ar: 'حماية البيئة',
        es: 'protección del medio ambiente'
      },
      exampleGerman: 'Umweltschutz beginnt mit der Mülltrennung im Haushalt.',
      exampleTranslation: {
        en: 'Environmental protection begins with waste separation at home.',
        fa: 'حفاظت از محیط زیست با تفکیک زباله در خانه آغاز می‌شود.',
        tr: 'Çevre koruma evde çöpleri ayrıştırmakla başlar.',
        ar: 'حماية البيئة تبدأ بفرز النفايات في المنزل.',
        es: 'La protección medioambiental empieza separando la basura en casa.'
      }
    }
  ],
  'B1.1': [
    {
      id: 'b1_1_kuendigung',
      level: 'B1.1',
      lektion: 1,
      article: 'die',
      word: 'Kündigung',
      plural: 'Kündigungen',
      gender: 'feminin',
      ipa: '[ˈkʏndɪɡʊŋ]',
      translation: {
        en: 'termination notice, resignation',
        fa: 'فسخ قرارداد، استعفا / اخراج',
        tr: 'fesih bildirimi / istifa',
        ar: 'إنهاء العقد / إخطار الفصل',
        es: 'rescisión, despido, renuncia'
      },
      exampleGerman: 'Die Kündigung des Mietvertrags muss schriftlich erfolgen.',
      exampleTranslation: {
        en: 'The lease termination must be submitted in writing.',
        fa: 'فسخ قرارداد اجاره باید حتماً به صورت کتبی صورت پذیرد.',
        tr: 'Kira sözleşmesinin feshi yazılı olarak yapılmalıdır.',
        ar: 'يجب أن يتم إنهاء عقد الإيجار خطياً.',
        es: 'La rescisión del contrato de alquiler debe realizarse por escrito.'
      }
    },
    {
      id: 'b1_1_zeugnis',
      level: 'B1.1',
      lektion: 2,
      article: 'das',
      word: 'Zeugnis',
      plural: 'Zeugnisse',
      gender: 'neutral',
      ipa: '[ˈtsɔɪ̯knɪs]',
      translation: {
        en: 'certificate, reference letter',
        fa: 'مدرک، کارنامه، گواهی اشتغال',
        tr: 'karne / referans belgesi',
        ar: 'شهادة / تقرير أداء عمل',
        es: 'certificado, certificado de trabajo'
      },
      exampleGerman: 'Der Arbeitgeber stellte ihr ein sehr gutes Arbeitszeugnis aus.',
      exampleTranslation: {
        en: 'The employer issued her an excellent certificate of employment.',
        fa: 'کارفرما برای او یک گواهی کار بسیار عالی صادر نمود.',
        tr: 'İşveren ona çok iyi bir çalışma referansı verdi.',
        ar: 'أصدر لها صاحب العمل شهادة خبرة ممتازة.',
        es: 'El empleador le expidió un certificado laboral excelente.'
      }
    }
  ],
  'B1.2': [
    {
      id: 'b1_2_versicherung',
      level: 'B1.2',
      lektion: 4,
      article: 'die',
      word: 'Versicherung',
      plural: 'Versicherungen',
      gender: 'feminin',
      ipa: '[fɛɐ̯ˈzɪçəʁʊŋ]',
      translation: {
        en: 'insurance',
        fa: 'بیمه',
        tr: 'sigorta',
        ar: 'تأمين',
        es: 'seguro'
      },
      exampleGerman: 'Eine private Haftpflichtversicherung wird in Deutschland dringend empfohlen.',
      exampleTranslation: {
        en: 'Private liability insurance is strongly recommended in Germany.',
        fa: 'بیمه مسئولیت مدنی شخصی در آلمان اکیداً توصیه می‌شود.',
        tr: 'Almanya\'da şahsi sorumluluk sigortası şiddetle tavsiye edilir.',
        ar: 'يوصى بشدة بالتأمين الخاص ضد المسؤولية المدنية في ألمانيا.',
        es: 'En Alemania se recomienda encarecidamente un seguro de responsabilidad civil.'
      }
    }
  ],
  'B2.1': [
    {
      id: 'b2_1_kompromiss',
      level: 'B2.1',
      lektion: 1,
      article: 'der',
      word: 'Kompromiss',
      plural: 'Kompromisse',
      gender: 'maskulin',
      ipa: '[kɔmpʁoˈmɪs]',
      translation: {
        en: 'compromise',
        fa: 'مصالحه، سازش دوسویه',
        tr: 'uzlaşma / kompromi',
        ar: 'تسوية / حل وسط',
        es: 'compromiso, solución de consenso'
      },
      exampleGerman: 'Nach zähen Verhandlungen schlossen beide Parteien einen tragfähigen Kompromiss.',
      exampleTranslation: {
        en: 'After tough negotiations, both parties reached a viable compromise.',
        fa: 'پس از مذاکرات دشوار، هر دو طرف به یک مصالحه قابل اتکا دست یافتند.',
        tr: 'Zorlu müzakerelerden sonra her iki taraf sürdürülebilir bir uzlaşmaya vardı.',
        ar: 'بعد مفاوضات شاقة، توصل الطرفان إلى تسوية قابلة للتطبيق.',
        es: 'Tras duras negociaciones, ambas partes alcanzaron un compromiso viable.'
      }
    }
  ],
  'B2.2': [
    {
      id: 'b2_2_nachhaltigkeit',
      level: 'B2.2',
      lektion: 3,
      article: 'die',
      word: 'Nachhaltigkeit',
      plural: 'kein Plural',
      gender: 'feminin',
      ipa: '[ˈnaːxˌhaltɪçkaɪ̯t]',
      translation: {
        en: 'sustainability',
        fa: 'پایداری (محیطی/اقتصادی)',
        tr: 'sürdürülebilirlik',
        ar: 'الاستدامة',
        es: 'sostenibilidad'
      },
      exampleGerman: 'Ökologische Nachhaltigkeit bildet das Fundament moderner Industrieunternehmen.',
      exampleTranslation: {
        en: 'Ecological sustainability forms the cornerstone of modern industrial enterprises.',
        fa: 'پایداری بوم‌شناختی بنیاد شرکت‌های صنعتی مدرن را تشکیل می‌دهد.',
        tr: 'Ekolojik sürdürülebilirlik modern sanayi işletmelerinin temelini oluşturur.',
        ar: 'تشكل الاستدامة البيئية ركيزة المنشآت الصناعية الحديثة.',
        es: 'La sostenibilidad ecológica constituye la base de las empresas industriales modernas.'
      }
    }
  ],
  'C1.1': [
    {
      id: 'c1_1_paradigma',
      level: 'C1.1',
      lektion: 1,
      article: 'das',
      word: 'Paradigma',
      plural: 'Paradigmen',
      gender: 'neutral',
      ipa: '[paʁaˈdɪɡma]',
      translation: {
        en: 'paradigm',
        fa: 'پارادایم، الگوواره فکری',
        tr: 'paradigma / değerler dizisi',
        ar: 'نموذج فكري / بارادايم',
        es: 'paradigma'
      },
      exampleGerman: 'Die Digitalisierung markiert einen grundlegenden Paradigmenwechsel im Bildungssektor.',
      exampleTranslation: {
        en: 'Digitalization marks a fundamental paradigm shift in the educational sector.',
        fa: 'دیجیتال‌سازی نمایانگر یک تغییر پارادایم بنیادین در بخش آموزش است.',
        tr: 'Dijitalleşme eğitim sektöründe köklü bir paradigma değişimini simgeliyor.',
        ar: 'يمثل التحول الرقمي تغييراً جذرياً في النموذج الفكري لقطاع التعليم.',
        es: 'La digitalización marca un cambio de paradigma fundamental en el sector educativo.'
      }
    }
  ],
  'C1.2': [
    {
      id: 'c1_2_diskurs',
      level: 'C1.2',
      lektion: 2,
      article: 'der',
      word: 'Diskurs',
      plural: 'Diskurse',
      gender: 'maskulin',
      ipa: '[dɪsˈkʊʁs]',
      translation: {
        en: 'discourse, academic debate',
        fa: 'گفتمان، مناظره علمی',
        tr: 'söylem / akademik tartışma',
        ar: 'خطاب فكري / نقاش علمي',
        es: 'discurso, debate académico'
      },
      exampleGerman: 'Ein differenzierter Diskurs ist für jede pluralistische Demokratie unverzichtbar.',
      exampleTranslation: {
        en: 'Nuanced discourse is indispensable for any pluralistic democracy.',
        fa: 'یک گفتمان دقیق و چندوجهی برای هر دموکراسی کثرت‌گرا حیاتی است.',
        tr: 'Çoğulcu bir demokrasi için incelikli bir söylem vazgeçilmezdir.',
        ar: 'يعد الخطاب المتزن والمتعدد الرؤى أمراً لا غنى عنه لأي ديمقراطية تعددية.',
        es: 'Un discurso matizado es indispensable para cualquier democracia pluralista.'
      }
    }
  ],
  'C2.1': [
    {
      id: 'c2_1_hermeneutik',
      level: 'C2.1',
      lektion: 1,
      article: 'die',
      word: 'Hermeneutik',
      plural: 'kein Plural',
      gender: 'feminin',
      ipa: '[hɛʁmeˈnɔɪ̯tɪk]',
      translation: {
        en: 'hermeneutics (theory of interpretation)',
        fa: 'هرمنوتیک (علم تاویل و تفسیر متن)',
        tr: 'hermeneutik / yorumbilim',
        ar: 'الهيرمينوطيقا / علم التأويل',
        es: 'hermenéutica (teoría de la interpretación)'
      },
      exampleGerman: 'Die philosophische Hermeneutik analysiert die Bedingungen des Verstehens geschichtlicher Texte.',
      exampleTranslation: {
        en: 'Philosophical hermeneutics analyzes the conditions under which historical texts are understood.',
        fa: 'هرمنوتیک فلسفی شروط و بسترهای فهم متون تاریخی را موشکافی می‌کند.',
        tr: 'Felsefi hermeneutik, tarihi metinlerin anlaşılmasının koşullarını inceler.',
        ar: 'يحلل علم التأويل الفلسفي شروط فهم النصوص التاريخية وتفسيرها.',
        es: 'La hermenéutica filosófica analiza las condiciones de comprensión de los textos históricos.'
      }
    }
  ],
  'C2.2': [
    {
      id: 'c2_2_ambivalenz',
      level: 'C2.2',
      lektion: 2,
      article: 'die',
      word: 'Ambivalenz',
      plural: 'Ambivalenzen',
      gender: 'feminin',
      ipa: '[ambivaˈlɛnts]',
      translation: {
        en: 'ambivalence, psychological duality',
        fa: 'دوگانگی روانی، ابهام متضاد',
        tr: 'ikirciklilik / ambivalans',
        ar: 'ازدواجية المشاعر / التناقض الوجداني',
        es: 'ambivalencia'
      },
      exampleGerman: 'Das literarische Meisterwerk reflektiert die existenzielle Ambivalenz des modernen Individuums.',
      exampleTranslation: {
        en: 'The literary masterpiece reflects the existential ambivalence of the modern individual.',
        fa: 'این شاهکار ادبی بازتاب‌دهنده دوگانگی و تناقض وجودی انسان مدرن است.',
        tr: 'Bu edebi başyapıt modern bireyin varoluşsal ikircikliliğini yansıtmaktadır.',
        ar: 'تعكس هذه التحفة الأدبية التناقض الوجداني الوجودي للإنسان المعاصر.',
        es: 'La obra maestra literaria refleja la ambivalencia existencial del individuo moderno.'
      }
    }
  ]
};
