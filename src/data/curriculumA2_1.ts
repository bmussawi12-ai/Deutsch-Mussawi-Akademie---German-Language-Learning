import { Lesson } from '../types';

export const CURRICULUM_A2_1: Lesson[] = [
  {
    id: 'a2_1_lek1',
    lektionNumber: 1,
    level: 'A2.1',
    title: 'Mein neuer Job und der Arbeitsvertrag',
    subTitle: 'Berufsalltag, Vorstellungsgespräche und das Perfekt (Deutsch Mussawi A2.1 Lektion 1)',
    topic: 'Bewerbung, Arbeitszeiten, Kollegen und vergangene Ereignisse mit Perfekt',
    fotoHoergeschichte: {
      title: 'Foto-Hörgeschichte: Der erste Arbeitstag in der IT-Firma in Hamburg',
      imagePrompt: 'A modern German open-space office where a newly hired software engineer Sayed is welcomed by his project team and manager in Hamburg.',
      imageTheme: 'Büroalltag in Hamburg',
      audioDuration: '02:35',
      transcript: [
        { speaker: 'Frau Klein (Abteilungsleiterin)', text: 'Guten Morgen, Herr Bashir! Herzlich willkommen in unserem Entwicklerteam.' },
        { speaker: 'Sayed Bashir', text: 'Guten Morgen, Frau Klein! Ich freue mich sehr auf die neuen Aufgaben.' },
        { speaker: 'Frau Klein', text: 'Das ist Ihre Kollegin Frau Berg. Sie hat gestern bereits Ihren Arbeitsplatz eingerichtet.' },
        { speaker: 'Frau Berg', text: 'Hallo Sayed! Ich habe dir alle Passwörter und das Mitarbeiterhandbuch auf den Tisch gelegt.' },
        { speaker: 'Sayed Bashir', text: 'Vielen Dank, Frau Berg! Wann haben wir heute die erste Teambesprechung?' },
        { speaker: 'Frau Klein', text: 'Das Meeting beginnt um zehn Uhr im Konferenzraum.' }
      ],
      summary: {
        en: 'Sayed starts his first day as a software developer in Hamburg, meets his colleagues, and prepares for the morning team meeting.',
        fa: 'سید اولین روز کاری خود را به عنوان توسعه‌دهنده نرم‌افزار در هامبورگ آغاز می‌کند، با همکاران آشنا شده و برای جلسه صبحگاهی آماده می‌شود.',
        tr: 'Sayed Hamburg\'da yazılım geliştirici olarak ilk iş gününe başlar, iş arkadaşlarıyla tanışır ve sabah toplantısına hazırlanır.',
        ar: 'يبدأ سيد أول يوم عمل له كمطور برمجيات في هامبورغ، ويتعرف على زملائه ويستعد للاجتماع الصباحي.',
        es: 'Sayed comienza su primer día como desarrollador en Hamburgo, conoce a sus compañeros y se prepara para la reunión matinal.'
      }
    },
    sectionA: {
      title: 'Mussawi A: Sprechen & Dialog',
      focus: 'Sprechen & Hören (Vom Lebenslauf zum Vorstellungsgespräch)',
      description: {
        en: 'Discuss professional milestones, qualifications, and past job experiences.',
        fa: 'گفتگو درباره نقاط عطف رزومه کاری، مدارک تحصیلی و تجربیات شغلی گذشته.',
        tr: 'Özgeçmiş aşamalarını, diplomaları ve geçmiş iş deneyimlerini anlatma.',
        ar: 'مناقشة السيرة الذاتية والمؤهلات الأكاديمية والخبرات المهنية السابقة.',
        es: 'Describe la trayectoria laboral, titulaciones y experiencia previa en entrevistas de trabajo.'
      },
      content: 'Was haben Sie studiert? - Ich habe Informatik studiert und drei Jahre als Programmierer gearbeitet.',
      audioText: 'Wo haben Sie vorher gearbeitet? - Ich habe bei einer internationalen Firma gearbeitet.',
      practiceTasks: [
        'Erzählen Sie Ihrem Partner von Ihren beruflichen Erfahrungen im Perfekt.',
        'Welche Fähigkeiten haben Sie in Ihrem letzten Beruf erworben?'
      ]
    },
    sectionB: {
      title: 'Mussawi B: Wortschatz & Hören',
      focus: 'Hören & Wortschatz (Arbeitsvertrag & Sozialleistungen)',
      description: {
        en: 'Key terms: der Arbeitsvertrag, das Gehalt, die Probezeit, die Überstunden, der Urlaub, die Kündigungsfrist.',
        fa: 'اصطلاحات کلیدی قرارداد کار: حقوق و دستمزد، دوره آزمایشی (Probezeit)، اضافه کاری، مرخصی و مهلت استعفا/اخراج.',
        tr: 'İş sözleşmesi terimleri: maaş, deneme süresi, fazla mesai, yıllık izin, ihbar süresi.',
        ar: 'مصطلحات عقد العمل: الراتب، فترة التجربة (Probezeit)، الساعات الإضافية، الإجازة، مهلة الإشعار.',
        es: 'Términos del contrato de trabajo: sueldo, periodo de prueba, horas extra, vacaciones, plazo de preaviso.'
      },
      content: 'Die Probezeit beträgt sechs Monate. Die reguläre Arbeitszeit ist 40 Stunden pro Woche.',
      audioText: 'Im Arbeitsvertrag steht: Sie haben Anspruch auf dreißig Tage bezahlten Urlaub pro Kalenderjahr.',
      practiceTasks: [
        'Notieren Sie die wichtigsten Punkte eines deutschen Arbeitsvertrags.',
        'Hören Sie den Dialog über Arbeitszeiten und notieren Sie Beginn und Ende der Gleitzeit.'
      ]
    },
    sectionC: {
      title: 'Mussawi C: Alltagskommunikation',
      focus: 'Sprechen & Dialoge (Absprachen im Team)',
      description: {
        en: 'Coordinate tasks: "Wer übernimmt das Projekt?", "Hast du den Bericht fertiggestellt?", "Ich habe die E-Mail schon geschickt."',
        fa: 'هماهنگی وظایف در تیم: «چه کسی مسئولیت پروژه را برعهده می‌گیرد؟»، «آیا گزارش را تکمیل کرده‌ای؟»، «من ایمیل را فرستاده‌ام».',
        tr: 'Takım içi iş paylaşımı: "Projeyi kim üstleniyor?", "Raporu bitirdin mi?", "E-postayı az önce gönderdim."',
        ar: 'تنسيق المهام في الفريق: "من سيتولى المشروع؟"، "هل أنهيت التقرير؟"، "لقد أرسلت البريد الإلكتروني بالفعل".',
        es: 'Coordinación en el equipo: asignación de tareas, seguimiento de informes y comunicación de progresos.'
      },
      content: 'Hast du die Präsentation vorbereitet? - Ja, ich habe die Folien gestern fertig gemacht.',
      audioText: 'Können wir den Termin um eine Stunde verschieben? - Ja, das passt mir sehr gut.',
      practiceTasks: [
        'Führen Sie ein Gespräch zur Aufgabenverteilung für die kommende Woche.',
        'Bestätigen Sie die Erledigung von 3 Aufgaben im Perfekt.'
      ]
    },
    sectionD: {
      title: 'Mussawi D: Leseverstehen & Text',
      focus: 'Lesen & Textanalyse (Arbeitszeugnisse & Beurteilungen)',
      description: {
        en: 'Understand the standard coded language of German employment references (Arbeitszeugnis).',
        fa: 'درک زبان رسمی و کدهای توصیه‌نامه‌های شغلی در آلمان (Arbeitszeugnis).',
        tr: 'Alman iş referans mektuplarının (Arbeitszeugnis) resmi değerlendirme dilini anlama.',
        ar: 'فهم الصياغات الرسمية لشهادات الخبرة والتقييم المهني الألمانية (Arbeitszeugnis).',
        es: 'Lectura e interpretación de certificados de empresa y cartas de recomendación laboral.'
      },
      content: 'Auszug aus einem qualifizierten Arbeitszeugnis.',
      readingText: {
        type: 'Arbeitszeugnis',
        title: 'Qualifiziertes Arbeitszeugnis - Herr Sayed Bashir',
        body: 'Herr Sayed Bashir war vom 01.01.2023 bis 31.12.2024 in unserem Unternehmen als Softwareentwickler tätig. Er hat die ihm übertragenen Aufgaben stets zu unserer vollsten Zufriedenheit erledigt. Sein Verhalten gegenüber Vorgesetzten und Kollegen war jederzeit einwandfrei. Wir bedauern sein Ausscheiden sehr und wünschen ihm für seinen weiteren Berufs- und Lebensweg alles Gute.'
      },
      practiceTasks: [
        'Wie beurteilt der Arbeitgeber die Leistung von Herrn Bashir ("stets zu unserer vollsten Zufriedenheit")?',
        'Welche Aufgabenbereiche werden im Zeugnis besonders hervorgehoben?'
      ]
    },
    sectionE: {
      title: 'Mussawi E: Grammatik & Schreiben',
      focus: 'Grammatik & Schreiben (Das Perfekt: haben vs. sein & Partizip II)',
      description: {
        en: 'Master conversational past tense (Perfekt) using auxiliary verbs "haben" and "sein" plus Partizip II (ge-...-t / ge-...-en).',
        fa: 'تسلط کامل بر زمان گذشته گفتاری (Perfekt) با افعال کمکی "haben" و "sein" به همراه ساختار صفت مفعولی (Partizip II).',
        tr: 'Geçmiş zaman (Perfekt): "haben" ve "sein" yardımcı fiilleri ile Partizip II yapısı.',
        ar: 'إتقان زمن الماضي التام (Perfekt) باستخدام الفعلين المساعدين "haben" و "sein" مع صيغة اسم المفعول (Partizip II).',
        es: 'Domina el pretérito perfecto (Perfekt) con auxiliares "haben" y "sein" y la formación del participio (Partizip II).'
      },
      content: 'Perfekt-Regel: Verben der Orts- oder Zustandsveränderung bilden das Perfekt mit "sein" (ist gefahren, ist aufgestanden). Die meisten anderen mit "haben".',
      grammarSnippet: {
        id: 'a2_lek1_perfekt_haben_sein',
        level: 'A2.1',
        lektion: 1,
        germanTitle: 'Das Perfekt mit "haben" und "sein"',
        formula: 'S + haben/sein (konjugiert an Pos 2) + (...) + *Partizip II (am Satzende)*',
        explanation: {
          en: 'Verbs expressing movement from A to B (fahren, gehen, fliegen) or change of state (aufwachen, einschlafen) use "sein". Most other verbs take "haben". The Partizip II stands at the very end of the sentence.',
          fa: 'افعالی که نشان‌دهنده حرکت و تغییر مکان (مانند fahren, gehen) یا تغییر وضعیت (مانند aufwachen) هستند با "sein" صرف می‌شوند. اکثر سایر افعال با "haben" می‌آیند. اسم مفعول (Partizip II) در انتهای جمله قرار می‌گیرد.',
          tr: 'Yer değiştirme (gitmek, koşmak) ve durum değişikliği bildiren fiiller "sein" ile; diğer eylemler "haben" ile Perfekt oluşturur.',
          ar: 'الأفعال الدالة على الحركة والانتقال أو تغير الحالة تستخدم "sein"، بينما تستخدم غالبية الأفعال الأخرى "haben". ويقع اسم المفعول في نهاية الجملة.',
          es: 'Los verbos de desplazamiento o cambio de estado forman el Perfekt con "sein"; la mayoría de los demás utilizan "haben". El participio va al final.'
        },
        examples: [
          {
            german: 'Sayed ist mit dem Zug nach Hamburg gefahren und hat dort seine Arbeit begonnen.',
            formulaBreakdown: 'ist (sein Pos 2) + gefahren (Partizip II) | hat (haben Pos 2) + begonnen (Partizip II)',
            literalTranslation: {
              en: 'Sayed is with the train to Hamburg traveled and has there his work begun.',
              fa: 'سید است با قطار به هامبورگ رفته و دارد آنجا کارش را آغاز کرده.',
              tr: 'Sayed trenle Hamburg\'a gitti ve orada işine başladı.',
              ar: 'سافر سيد بالقطار إلى هامبورغ وبدأ عمله هناك.',
              es: 'Sayed ha viajado en tren a Hamburgo y allí ha comenzado su trabajo.'
            },
            fluentTranslation: {
              en: 'Sayed traveled to Hamburg by train and began his work there.',
              fa: 'سید با قطار به هامبورگ سفر کرد و کارش را در آنجا شروع نمود.',
              tr: 'Sayed trenle Hamburg\'a gitti ve işe başladı.',
              ar: 'سافر سيد إلى هامبورغ بالقطار وبدأ عمله هناك.',
              es: 'Sayed fue en tren a Hamburgo y empezó a trabajar allí.'
            }
          }
        ],
        category: 'verbs'
      },
      practiceTasks: [
        'Bilden Sie das Partizip II: arbeiten -> gearbeitet, lernen -> gelernt, aufstehen -> aufgestanden.',
        'Wählen Sie das Hilfsverb "haben" oder "sein": Ich _____ gestern viel telefoniert. Er _____ nach Berlin gereist.'
      ]
    },
    videoClip: {
      title: 'Video: Der erfolgreiche Sprint-Abschluss',
      scenario: 'Das IT-Team feiert den erfolgreichen Abschluss eines Software-Releases und gratuliert Sayed.',
      category: 'beruf',
      duration: '02:45',
      germanTranscript: [
        'Team, wir haben das neue Update pünktlich veröffentlicht!',
        'Großartige Leistung von allen! Sayed, dein Code hat hervorragend funktioniert.',
        'Vielen Dank! Ich habe viel von euch allen gelernt.',
        'Heute Abend gehen wir alle zusammen essen und feiern!',
        'Das haben wir uns verdient! Auf eine erfolgreiche Zukunft!'
      ],
      translatedTranscript: [
        {
          en: 'Team, we published the new update right on time!',
          fa: 'تیم گرامی، ما به‌روزرسانی جدید را سر وقت و بدون تاخیر منتشر کردیم!',
          tr: 'Ekip, yeni güncellemeyi tam zamanında yayınladık!',
          ar: 'يا فريق، لقد أطلقنا التحديث الجديد في الوقت المحدد تماماً!',
          es: '¡Equipo, hemos publicado la nueva actualización justo a tiempo!'
        },
        {
          en: 'Great job by everyone! Sayed, your code worked outstandingly.',
          fa: 'کار فوق‌العاده‌ای از همگی! سید، کدهای تو بی‌نقص کار کردند.',
          tr: 'Herkesten harika bir performans! Sayed, kodların kusursuz çalıştı.',
          ar: 'عمل رائع من الجميع! سيد، كود البرمجة الخاص بك عمل بشكل ممتاز.',
          es: '¡Gran trabajo de todos! Sayed, tu código ha funcionado de maravilla.'
        },
        {
          en: 'Thank you very much! I learned so much from all of you.',
          fa: 'خیلی متشکرم! من از تک‌تک شما مطالب بسیار زیادی آموختم.',
          tr: 'Çok teşekkürler! Hepinizden çok şey öğrendim.',
          ar: 'شكراً جزيلاً لكم! لقد تعلمت الكثير منكم جميعاً.',
          es: '¡Muchas gracias! He aprendido muchísimo de todos vosotros.'
        },
        {
          en: 'Tonight we are all going out to dinner and celebrate!',
          fa: 'امشب همگی با هم برای شام بیرون می‌رویم و جشن می‌گیریم!',
          tr: 'Bu akşam hep birlikte yemeğe gidip kutluyoruz!',
          ar: 'الليلة سنذهب جميعاً لتناول العشاء والاحتفال معاً!',
          es: '¡Esta noche salimos todos juntos a cenar y celebrarlo!'
        },
        {
          en: 'We earned that! Here is to a successful future!',
          fa: 'سزاوارش بودیم! به سلامتی آینده‌ای درخشان و موفق!',
          tr: 'Bunu hak ettik! Başarılı bir geleceğe kadeh kaldıralım!',
          ar: 'لقد استحقنا ذلك بجدارة! في نخب مستقبل مشرق وناجح!',
          es: '¡Nos lo hemos ganado! ¡Por un futuro lleno de éxitos!'
        }
      ]
    },
    exercises: [
      {
        id: 'ex_a2_1_1',
        type: 'multiple_choice',
        instruction: {
          en: 'Select the correct auxiliary verb (haben vs. sein) for movement verb "fahren".',
          fa: 'فعل کمکی صحیح (haben یا sein) را برای فعل حرکتی "fahren" (رفتن با وسیله نقلیه) انتخاب کنید.',
          tr: 'Hareket bildiren "fahren" fiili için doğru yardımcı fiili (haben / sein) seçiniz.',
          ar: 'اختر الفعل المساعد الصحيح (haben أم sein) لفعل الحركة "fahren".',
          es: 'Elige el auxiliar correcto (haben o sein) para el verbo de movimiento "fahren".'
        },
        prompt: 'Sayed _____ gestern mit der Bahn nach Berlin gefahren.',
        options: ['ist', 'hat', 'wird', 'war'],
        correctAnswer: 'ist',
        explanation: {
          en: 'The verb "fahren" expresses directional movement and therefore strictly requires "sein" as auxiliary in Perfekt: er ist gefahren.',
          fa: 'فعل "fahren" نشان‌دهنده حرکت مکانی مستقیم است، بنابراین در زمان گذشته پرفکت الزاماً با "sein" صرف می‌شود: er ist gefahren.',
          tr: '"fahren" yönelme ve hareket bildiren bir fiildir, bu yüzden Perfekt zamanında "sein" yardımcı fiili ile çekilir: er ist gefahren.',
          ar: 'الفعل "fahren" يدل على الحركة والانتقال، لذا يتطلب حصراً الفعل المساعد "sein" في زمن الماضي التام: er ist gefahren.',
          es: 'El verbo "fahren" indica movimiento de desplazamiento, por lo que requiere obligatoriamente "sein" en Perfekt: er ist gefahren.'
        }
      },
      {
        id: 'ex_a2_1_2',
        type: 'fill_blank',
        instruction: {
          en: 'Supply the correct Partizip II form of "lernen".',
          fa: 'شکل Partizip II صحیح فعل "lernen" (یاد گرفتن) را در جای خالی بنویسید.',
          tr: '"lernen" fiilinin doğru Partizip II formunu boşluğa yazınız.',
          ar: 'اكتب صيغة اسم المفعول (Partizip II) الصحيحة للفعل "lernen".',
          es: 'Escribe el participio (Partizip II) correcto del verbo "lernen".'
        },
        prompt: 'Wir haben heute viele neue Grammatikregeln _____ (lernen).',
        options: ['gelernt', 'gelernten', 'gelernen', 'lernten'],
        correctAnswer: 'gelernt',
        explanation: {
          en: 'Regular verbs form the Partizip II with ge- + verb stem + -t: ge-lern-t = gelernt.',
          fa: 'افعال باقاعده با پیشوند ge- به همراه ریشه فعل و پسوند -t شکل پرفکت می‌سازند: ge-lern-t = gelernt.',
          tr: 'Düzenli fiillerin Partizip II yapısı ge- + fiil kökü + -t şeklindedir: gelernt.',
          ar: 'تُصاغ صيغة اسم المفعول للأفعال القياسية بإضافة ge- وجذر الفعل واللاحقة -t: gelernt.',
          es: 'Los verbos regulares forman el participio con ge- + raíz + -t: gelernt.'
        }
      }
    ]
  },
  {
    id: 'a2_1_lek2',
    lektionNumber: 2,
    level: 'A2.1',
    title: 'Wohnungssuche und Nachbarschaft',
    subTitle: 'Mietvertrag, Nebenkosten und Wechselpräpositionen (Deutsch Mussawi A2.1 Lektion 2)',
    topic: 'Wohnungsbesichtigung, Nachbarschaftshilfe, Ruhezeiten und Wechselpräpositionen mit Dativ und Akkusativ',
    fotoHoergeschichte: {
      title: 'Foto-Hörgeschichte: Die Wohnungsbesichtigung in Altona',
      imagePrompt: 'Sayed meeting a landlord in Hamburg Altona inspecting a 2-room apartment with wooden floors and a balcony overlooking a green courtyard.',
      imageTheme: 'Wohnungsbesichtigung in Hamburg',
      audioDuration: '02:40',
      transcript: [
        { speaker: 'Herr Schmidt (Vermieter)', text: 'Guten Tag, Herr Bashir! Treten Sie ein. Das ist das Wohnzimmer.' },
        { speaker: 'Sayed Bashir', text: 'Guten Tag! Die hohen Decken und das Parkett gefallen mir sehr gut.' },
        { speaker: 'Herr Schmidt', text: 'Hier drüben ist der Balkon zum ruhigen Innenhof. Die Nebenkosten enthalten bereits Heizung und Wasser.' },
        { speaker: 'Sayed Bashir', text: 'Das klingt fair. Welche Unterlagen benötigen Sie für die Bewerbung?' },
        { speaker: 'Herr Schmidt', text: 'Ich brauche die letzten drei Gehaltsnachweise, die SCHUFA-Auskunft und eine Mietschuldenfreiheitsbescheinigung.' }
      ],
      summary: {
        en: 'Sayed inspects an apartment in Hamburg Altona, discusses heating and utilities, and learns about required rental documents.',
        fa: 'سید آپارتمانی را در هامبورگ آلتونا بازدید می‌کند، درباره هزینه‌های جانبی و گرمایش صحبت کرده و مدارک لازم برای اجاره را یادداشت می‌نماید.',
        tr: 'Sayed Hamburg Altona\'da kiralık bir daireyi gezer, aidat ve ısıtma giderlerini görüşür ve gerekli evrakları öğrenir.',
        ar: 'يعاين سيد شقة للإيجار في هامبورغ ألتونا، ويناقش تكاليف التدفئة والخدمات ويسجل الأوراق المطلوبة للتأجير.',
        es: 'Sayed visita un piso de alquiler en Hamburgo, consulta los gastos de comunidad y calefacción y revisa la documentación requerida.'
      }
    },
    sectionA: {
      title: 'Mussawi A: Sprechen & Dialog',
      focus: 'Sprechen & Hören (Wohnungsbesichtigung & Fragen an den Vermieter)',
      description: {
        en: 'Ask questions when viewing flats: "Wie hoch sind die Nebenkosten?", "Gibt es einen Keller?", "Ab wann ist die Wohnung frei?"',
        fa: 'پرسش‌های کلیدی در بازدید خانه: «هزینه‌های جانبی چقدر است؟»، «آیا انبار زیرزمین دارد؟»، «از چه تاریخی خانه خالی می‌شود؟».',
        tr: 'Ev gezerken sorulacak sorular: "Aidat ne kadar?", "Bodrum katı var mı?", "Daire ne zamandan itibaren boş?"',
        ar: 'أسئلة معاينة الشقة: "كم تبلغ تكاليف الخدمات؟"، "هل يوجد قبو؟"، "متى تكون الشقة شاغرة؟".',
        es: 'Preguntas al visitar un piso: "¿Cuánto son los gastos?", "¿Dispone de trastero?", "¿A partir de cuándo está libre?"'
      },
      content: 'Ist eine Einbauküche vorhanden? - Ja, Herd und Kühlschrank sind in der Miete enthalten.',
      audioText: 'Wie hoch ist die Kaution? - Die Kaution beträgt drei Kaltmieten.',
      practiceTasks: [
        'Formulieren Sie 4 wichtige Fragen an den Vermieter.',
        'Spielen Sie eine Wohnungsbesichtigung im Dialog.'
      ]
    },
    sectionB: {
      title: 'Mussawi B: Wortschatz & Hören',
      focus: 'Hören & Wortschatz (Behörden & Papiere für die Wohnung)',
      description: {
        en: 'Rental documents: die SCHUFA-Auskunft, die Mieterselbstauskunft, die Kaution, die Warmmiete, die Kaltmiete.',
        fa: 'مدارک اجاره مسکن: گواهی اعتبار مالی شوفا (SCHUFA)، فرم خوداظهاری مستاجر، ودیعه مسکن (Kaution)، کرایه خالص و ناخالص.',
        tr: 'Kiralama belgeleri: SCHUFA kredi notu, kiracı bilgi formu, depozito (Kaution), sıcak/soğuk kira.',
        ar: 'وثائق استئجار السكن: تقرير الشوفا الائتماني (SCHUFA)، استمارة بيانات المستأجر، مبلغ التأمين (Kaution)، الإيجار الصافي والشامل.',
        es: 'Documentación para el alquiler: informe de solvencia SCHUFA, fianza (Kaution), renta neta y renta con gastos incluidos.'
      },
      content: 'Ohne SCHUFA-Auskunft und feste Gehaltsabrechnung ist es in deutschen Großstädten schwer, eine Wohnung zu finden.',
      audioText: 'Ich überweise Ihnen die Kaution und die erste Monatsmiete vor der Schlüsselübergabe.',
      practiceTasks: [
        'Erklären Sie den Unterschied zwischen Kaltmiete und Warmmiete.',
        'Welche 3 Dokumente verlangen Vermieter in der Regel?'
      ]
    },
    sectionC: {
      title: 'Mussawi C: Alltagskommunikation',
      focus: 'Sprechen & Dialoge (Gute Nachbarschaft & Hausordnung)',
      description: {
        en: 'Talking with neighbors: Pakete annehmen, Ruhezeiten einhalten, Mülltrennung beachten, Einweihungsparty ankündigen.',
        fa: 'ارتباط با همسایگان: تحویل گرفتن بسته‌های پستی، رعایت سکوت و آرامش ساختمان، تفکیک زباله و اطلاع‌رسانی جشن ورود به خانه جدید.',
        tr: 'Komşuluk ilişkileri: kargo teslim alma, dinlenme saatlerine uyma, çöp ayrıştırma, ev partisi duyurusu yapma.',
        ar: 'التعامل مع الجيران: استلام الطرود البريدية، مراعاة ساعات الهدوء، فرز النفايات، الإعلان عن حفل الانتقال للسكن.',
        es: 'Convivencia vecinal: recoger paquetes, respetar las horas de descanso, separar residuos y avisar de fiestas.'
      },
      content: 'Hallo Nachbar! Ich habe ein Paket für Sie angenommen. Hier bitte sehr!',
      audioText: 'Liebe Nachbarn, am Samstag feiere ich meinen Geburtstag. Es könnte etwas lauter werden. Vielen Dank für Ihr Verständnis!',
      practiceTasks: [
        'Schreiben Sie einen freundlichen Aushang an das Schwarze Brett im Hausflur.',
        'Bedanken Sie sich bei Ihrem Nachbarn für die Hilfe.'
      ]
    },
    sectionD: {
      title: 'Mussawi D: Leseverstehen & Text',
      focus: 'Lesen & Textanalyse (Der deutsche Mietvertrag)',
      description: {
        en: 'Understand standard clauses in a German residential tenancy agreement (Mietvertrag).',
        fa: 'بررسی بندها و قوانین استاندارد در قرارداد اجاره مسکن در آلمان (Mietvertrag).',
        tr: 'Almanya standart konut kira sözleşmesi (Mietvertrag) maddelerini kavrama.',
        ar: 'فهم البنود والشروط المعيارية في عقود إيجار السكن الألمانية (Mietvertrag).',
        es: 'Lectura e interpretación de las cláusulas fundamentales de un contrato de arrendamiento en Alemania.'
      },
      content: 'Muster-Mietvertrag: Rechte und Pflichten von Mieter und Vermieter.',
      readingText: {
        type: 'Mietvertrag',
        title: 'Wohnraummietvertrag - Paragrafen 4 & 7 (Auszug)',
        body: '§ 4 Miete und Nebenkosten: Die monatliche Nettokaltmiete beträgt 750,00 Euro. Die Vorauszahlung auf Betriebskosten beträgt 180,00 Euro monatlich. Die Gesamtwarmmiete von 930,00 Euro ist jeweils bis zum dritten Werktag des Monats im Voraus zu überweisen. | § 7 Instandhaltung: Kleinreparaturen bis zu einem Betrag von 100,00 Euro im Einzelfall trägt der Mieter.'
      },
      practiceTasks: [
        'Bis zu welchem Tag im Monat muss die Miete überwiesen werden?',
        'Wie hoch ist die maximale Kostenübernahme bei Kleinreparaturen laut Vertrag?'
      ]
    },
    sectionE: {
      title: 'Mussawi E: Grammatik & Schreiben',
      focus: 'Grammatik & Schreiben (Wechselpräpositionen: Wo? + Dativ vs. Wohin? + Akkusativ)',
      description: {
        en: 'Two-way prepositions (an, auf, hinter, in, neben, über, unter, vor, zwischen): Location (Wo? + Dativ) vs. Direction (Wohin? + Akkusativ).',
        fa: 'حروف اضافه دوگانه (Wechselpräpositionen): بیان مکان و موقعیت ساکن (Wo? + Dativ) در برابر جهت و حرکت (Wohin? + Akkusativ).',
        tr: 'Çift yönlü edatlar: Durum/Konum (Wo? + Dativ) ve Yönelme/Hareket (Wohin? + Akkusativ).',
        ar: 'حروف الجر المزدوجة (Wechselpräpositionen): الموقع الثابت (Wo? + Dativ) مقابل الحركة والاتجاه (Wohin? + Akkusativ).',
        es: 'Preposiciones mixtas: ubicación estática (Wo? + Dativ) frente a dirección o movimiento (Wohin? + Akkusativ).'
      },
      content: 'Regel: Wo ist das Bild? - An der Wand (Dativ). Wohin hängst du das Bild? - An die Wand (Akkusativ).',
      grammarSnippet: {
        id: 'a2_lek2_wechselpraepositionen',
        level: 'A2.1',
        lektion: 2,
        germanTitle: 'Die Wechselpräpositionen (an, auf, in, neben, unter, über, vor, hinter, zwischen)',
        formula: 'Wo? (Ort / Stillstand) -> DATIV || Wohin? (Richtung / Bewegung) -> AKKUSATIV',
        explanation: {
          en: 'When describing a static location (answering "Wo?"), use the Dative case. When describing movement towards a destination (answering "Wohin?"), use the Accusative case.',
          fa: 'زمانی که مکان ثابت و ساکن را توصیف می‌کنید (پاسخ به سوال "Wo?") از حالت داتیو استفاده کنید. زمانی که حرکت به سمت یک مقصد را توصیف می‌کنید (پاسخ به سوال "Wohin?") از حالت آکوزاتیو بهره ببرید.',
          tr: 'Sabit konum bildirirken (Wo? sorusu) Dativ; bir hedefe yönelme bildirirken (Wohin? sorusu) Akkusativ kullanılır.',
          ar: 'عند الدلالة على الموقع الثابت (جواباً عن ?Wo) نستخدم حالة الجر Dativ، وعند الدلالة على الحركة نحو وجهة (جواباً عن ?Wohin) نستخدم حالة النصب Akkusativ.',
          es: 'Para una posición estática (pregunta ¿Wo?) se usa dativo; para una dirección o desplazamiento (pregunta ¿Wohin?) se usa acusativo.'
        },
        examples: [
          {
            german: 'Das Buch liegt auf dem Tisch (Wo? Dativ). Sayed legt das Buch auf den Tisch (Wohin? Akkusativ).',
            formulaBreakdown: 'liegt (Zustand) + auf dem Tisch (Dat.) | legt (Aktion) + auf den Tisch (Akk.)',
            literalTranslation: {
              en: 'The book lies on the table. Sayed lays the book onto the table.',
              fa: 'کتاب دراز کشیده است روی میز. سید می‌گذارد کتاب را روی میز.',
              tr: 'Kitap masanın üzerinde duruyor. Sayed kitabı masanın üzerine koyuyor.',
              ar: 'الكتاب مستقر على الطاولة. يضع سيد الكتاب فوق الطاولة.',
              es: 'El libro está sobre la mesa. Sayed pone el libro sobre la mesa.'
            },
            fluentTranslation: {
              en: 'The book is lying on the table (Dative). Sayed puts the book onto the table (Accusative).',
              fa: 'کتاب روی میز قرار دارد (داتیو). سید کتاب را روی میز می‌گذارد (آکوزاتیو).',
              tr: 'Kitap masada duruyor (Dativ). Sayed kitabı masanın üzerine koyuyor (Akkusativ).',
              ar: 'الكتاب موجود فوق الطاولة (مجرور). يضع سيد الكتاب على الطاولة (منصوب).',
              es: 'El libro está sobre la mesa (Dativo). Sayed coloca el libro sobre la mesa (Acusativo).'
            }
          }
        ],
        category: 'prepositions'
      },
      practiceTasks: [
        'Unterscheiden Sie Wo? und Wohin?: Ich sitze in _____ Sessel (m). Ich setze mich in _____ Sessel (m).',
        'Beschreiben Sie die Position von 4 Gegenständen in Ihrem Zimmer mit Wechselpräpositionen.'
      ]
    },
    videoClip: {
      title: 'Video: Die Einweihungsparty in der neuen Wohnung',
      scenario: 'Sayed lädt seine Arbeitskollegen und Nachbarn zur Housewarming-Feier mit afghanischem Essen ein.',
      category: 'alltag',
      duration: '02:50',
      germanTranscript: [
        'Herzlich willkommen in meiner neuen Wohnung!',
        'Herzlichen Glückwunsch, Sayed! Die Wohnung ist wirklich ein Traum.',
        'Hier ist ein traditionelles Geschenk für das neue Zuhause: Brot und Salz!',
        'Vielen Dank, das ist ein wunderschöner deutscher Brauch!',
        'Bedient euch bitte am Buffet, es gibt viele Spezialitäten!'
      ],
      translatedTranscript: [
        {
          en: 'Welcome to my new apartment!',
          fa: 'به خانه جدید من خیلی خوش آمدید!',
          tr: 'Yeni evime hoş geldiniz!',
          ar: 'أهلاً وسهلاً بكم في شقتي الجديدة!',
          es: '¡Bienvenidos a mi nuevo piso!'
        },
        {
          en: 'Congratulations, Sayed! The apartment is truly a dream.',
          fa: 'تبریک می‌گویم سید! این خانه واقعاً فوق‌العاده و مانند رویا است.',
          tr: 'Tebrikler Sayed! Daire gerçekten harika bir rüya gibi.',
          ar: 'تهانينا يا سيد! الشقة رائعة حقاً وكأنها حلم.',
          es: '¡Enhorabuena, Sayed! El piso es una auténtica maravilla.'
        },
        {
          en: 'Here is a traditional gift for the new home: bread and salt!',
          fa: 'این هم هدیه سنتی برای خانه نو: نان و نمک (نماد برکت و صلح)!',
          tr: 'İşte yeni ev için geleneksel bir hediye: Ekmek ve tuz!',
          ar: 'إليك هدية تقليدية للمنزل الجديد: الخبز والملح!',
          es: 'Aquí tienes un regalo tradicional para el nuevo hogar: ¡pan y sal!'
        },
        {
          en: 'Thank you very much, that is a wonderful German custom!',
          fa: 'بسیار متشکرم، این یک رسم آلمانی بسیار زیبا و باارزش است!',
          tr: 'Çok teşekkürler, bu gerçekten harika bir Alman geleneği!',
          ar: 'شكراً جزيلاً، هذه عادة ألمانية جميلة جداً!',
          es: '¡Muchísimas gracias, es una bellísima costumbre alemana!'
        },
        {
          en: 'Please help yourselves at the buffet, there are many specialties!',
          fa: 'لطفاً بفرمایید از بوفه غذا میل کنید، انواع غذاهای مخصوص فراهم شده است!',
          tr: 'Lütfen açık büfeden dilediğiniz gibi alın, pek çok özel lezzet var!',
          ar: 'تفضلوا بالاستمتاع بالمأكولات في البوفيه، هناك أطباق مميزة كثيرة!',
          es: '¡Por favor, servíos del bufé, hay muchas delicias preparadas!'
        }
      ]
    },
    exercises: [
      {
        id: 'ex_a2_2_1',
        type: 'multiple_choice',
        instruction: {
          en: 'Choose the correct prepositional case: Static location (Wo?) requires Dative.',
          fa: 'حالت گرامری صحیح را انتخاب کنید: مکان ساکن (Wo?) نیازمند داتیو است.',
          tr: 'Doğru hali seçiniz: Sabit konum (Wo?) Dativ gerektirir.',
          ar: 'اختر الحالة الإعرابية الصحيحة: الموقع الثابت (Wo?) يتطلب حالة الجر Dativ.',
          es: 'Elige el caso correcto: la posición estática (¿Wo?) rige dativo.'
        },
        prompt: 'Das Bild hängt an _____ Wand (die Wand).',
        options: ['der', 'die', 'den', 'dem'],
        correctAnswer: 'der',
        explanation: {
          en: 'Static question "Wo hängt das Bild?" requires the Dative case. Feminine "die Wand" changes to "der Wand".',
          fa: 'سوال درباره مکان ساکن (تصویر کجا آویزان است؟) داتیوساز است. کلمه مونث "die Wand" به "der Wand" تغییر می‌یابد.',
          tr: 'Konum sorusu "Wo?" Dativ gerektirir; dişil "die Wand" Dativ halinde "der Wand" olur.',
          ar: 'السؤال عن الموقع الثابت (?Wo) يتطلب حالة الجر Dativ، وتتحول أداة المؤنث die إلى der.',
          es: 'La pregunta de ubicación (¿Dónde?) exige dativo. El femenino "die Wand" cambia a "der Wand".'
        }
      },
      {
        id: 'ex_a2_2_2',
        type: 'fill_blank',
        instruction: {
          en: 'Choose the correct accusative article for directional movement (Wohin?).',
          fa: 'آرتیکل آکوزاتیو صحیح را برای حرکت و جهت‌گیری (Wohin?) انتخاب نمایید.',
          tr: 'Yönelme ve hareket bildiren (Wohin?) durum için doğru Akkusativ artikelini seçiniz.',
          ar: 'اختر أداة النصب الصحيحة للدلالة على الحركة والاتجاه (Wohin?).',
          es: 'Selecciona el artículo en acusativo para la dirección de movimiento (¿Wohin?).'
        },
        prompt: 'Sayed stellt die Lampe neben _____ Schreibtisch (der Schreibtisch).',
        options: ['den', 'dem', 'der', 'des'],
        correctAnswer: 'den',
        explanation: {
          en: 'Directional action ("Wohin stellt er die Lampe?") requires Accusative. Masculine "der Schreibtisch" becomes "den Schreibtisch".',
          fa: 'عمل جهتی و حرکتی ("او چراغ را کجا می‌گذارد؟") آکوزاتیو می‌خواهد. اسم مذکر "der" به "den" تبدیل می‌شود.',
          tr: '"Wohin?" sorusu Akkusativ gerektirir; eril "der Schreibtisch" Akkusativde "den" olur.',
          ar: 'الفعل الدال على الحركة والاتجاه (?Wohin) يتطلب النصب Akkusativ، فيتحول المذكر der إلى den.',
          es: 'La acción directiva (¿Adónde?) exige acusativo. El masculino "der Schreibtisch" pasa a "den Schreibtisch".'
        }
      }
    ]
  },
  {
    id: 'a2_1_lek3',
    lektionNumber: 3,
    level: 'A2.1',
    title: 'Unterwegs in der Stadt und Mobilität',
    subTitle: 'Öffentliche Verkehrsmittel, Wegbeschreibungen und lokale Präpositionen (Deutsch Mussawi A2.1)',
    topic: 'Stadterkundung, Orientierung, Wegbeschreibungen und Wechselpräpositionen',
    fotoHoergeschichte: {
      title: 'Foto-Hörgeschichte: Orientierung in der Hamburger Innenstadt',
      imagePrompt: 'A lively canal bridge near Jungfernstieg in Hamburg where Sayed checks a city map app on his smartphone and asks a friendly local for directions.',
      imageTheme: 'Hamburg Jungfernstieg',
      audioDuration: '02:20',
      transcript: [
        { speaker: 'Sayed Bashir', text: 'Entschuldigung, wissen Sie, wo das Rathaus liegt?' },
        { speaker: 'Passantin', text: 'Ja, gehen Sie einfach diese Straße entlang bis zum Fluss und dann über die Brücke.' },
        { speaker: 'Sayed Bashir', text: 'Ist es weit von hier zu Fuß?' },
        { speaker: 'Passantin', text: 'Nein, höchstens fünf Minuten. Es liegt direkt hinter dem Marktplatz.' },
        { speaker: 'Sayed Bashir', text: 'Vielen Dank für Ihre Hilfe!' }
      ],
      summary: {
        en: 'Sayed navigates downtown Hamburg, asking a pedestrian for directions to the historic city hall.',
        fa: 'سید در مرکز شهر هامبورگ با پرسش از یک رهگذر مسیر رسیدن به شهرداری را پیدا می‌کند.',
        tr: 'Sayed Hamburg şehir merkezinde belediye binasına giden yolu sorar.',
        ar: 'يتجول سيد في وسط هامبورغ ويسأل أحد المارة عن الاتجاهات إلى دار البلدية التاريخي.',
        es: 'Sayed se orienta por el centro de Hamburgo y pide indicaciones hacia el ayuntamiento.'
      }
    },
    sectionA: {
      title: 'Mussawi A: Sprechen & Dialog',
      focus: 'Sprechen (Nach dem Weg fragen & Richtungen angeben)',
      description: {
        en: 'Giving and asking directions: biegen Sie rechts ab, überqueren Sie die Straße, an der Kreuzung vorbei.',
        fa: 'جهت‌یابی و آدرس دادن: به راست بپیچید، از خیابان عبور کنید، از کنار چهارراه رد شوید.',
        tr: 'Yol tarifi verme ve alma ifadeleri.',
        ar: 'السؤال عن الطريق وتقديم الإرشادات والاتجاهات بدقة.',
        es: 'Pedir y dar indicaciones de dirección en la ciudad.'
      },
      content: 'Gehen Sie geradeaus bis zur Kirche und biegen Sie dann in die zweite Querstraße ein.',
      practiceTasks: ['Erklären Sie den Weg vom Bahnhof zu Ihrer Wohnung.']
    },
    sectionB: {
      title: 'Mussawi B: Wortschatz & Hören',
      focus: 'Grammatik (Lokale Präpositionen mit Dativ & Akkusativ)',
      description: {
        en: 'Prepositions: an, auf, in, vor, hinter, über, unter, neben, zwischen.',
        fa: 'حروف اضافه مکانی مشترک داتیو/آکوزاتیو: روی، در، جلوی، پشت، بالای، زیر، کنار، بین.',
        tr: 'Mekan bildiren çift durumlu edatlar (Dativ/Akkusativ).',
        ar: 'حروف الجر المكانية المشتركة (Wechselpräpositionen).',
        es: 'Preposiciones de lugar con dativo y acusativo.'
      },
      content: 'Die Post befindet sich zwischen der Apotheke und der Bank.',
      practiceTasks: ['Beschreiben Sie Ihr Arbeitszimmer mit mindestens 5 Präpositionen.']
    },
    sectionC: {
      title: 'Mussawi C: Alltagskommunikation',
      focus: 'Wortschatz (Im öffentlichen Nahverkehr)',
      description: {
        en: 'Transit vocabulary: umsteigen, einsteigen, aussteigen, die Verspätung, der Fahrplan.',
        fa: 'واژگان حمل و نقل عمومی: خط عوض کردن، سوار شدن، پیاده شدن، تاخیر، جدول حرکت.',
        tr: 'Toplu taşıma terimleri: aktarma yapmak, binmek, inmek, gecikme.',
        ar: 'مفردات النقل العام: تبديل الخط، الصعود، النزول، التأخير.',
        es: 'Vocabulario del transporte público: transbordo, subir, bajar, retraso.'
      },
      content: 'Achtung an Gleis 3: Der Regionalexpress nach Lübeck hat heute zehn Minuten Verspätung.',
      practiceTasks: ['Hören Sie die Durchsage und notieren Sie Gleis und Verspätung.']
    },
    sectionD: {
      title: 'Mussawi D: Leseverstehen & Text',
      focus: 'Lesen (Kurzinformationen & Stadtpläne)',
      description: {
        en: 'Read tourist brochures, subway route maps, and city event calendars.',
        fa: 'خواندن بروشورهای گردشگری، نقشه خطوط مترو و تقویم رویدادهای شهری.',
        tr: 'Turistik broşürler ve metro hat haritalarını anlama.',
        ar: 'قراءة الكتيبات السياحية وخرائط شبكة المترو والقطارات.',
        es: 'Lectura de mapas de metro y guías de la ciudad.'
      },
      content: 'Die U-Bahn-Linie U3 fährt im Ringverkehr rund um die Hamburger Innenstadt.',
      practiceTasks: ['Planen Sie eine Besichtigungstour mit drei Haltestellen.']
    },
    sectionE: {
      title: 'Mussawi E: Grammatik & Schreiben',
      focus: 'Schreiben (Eine E-Mail mit Wegbeschreibung verfassen)',
      description: {
        en: 'Write an email guiding a friend from the airport to your home.',
        fa: 'نوشتن ایمیل راهنمای مسیر برای دوستی که از فرودگاه به خانه شما می‌آید.',
        tr: 'Bir arkadaşa havaalanından eve geliş yolunu anlatan e-posta yazma.',
        ar: 'كتابة بريد إلكتروني لوصف مسار الوصول لصديق من المطار إلى المنزل.',
        es: 'Redactar un correo con indicaciones para llegar desde el aeropuerto.'
      },
      content: 'Lieber Florian, wenn du am Hauptbahnhof ankommst, nimmst du am besten die S-Bahn S1 bis Altona.',
      practiceTasks: ['Schreiben Sie eine detaillierte Anfahrtsbeschreibung für eine Feier.']
    },
    exercises: [
      {
        id: 'ex_a2_3_1',
        type: 'multiple_choice',
        instruction: {
          en: 'Select the correct preposition for entering a building or enclosed space.',
          fa: 'حرف اضافه مناسب برای وارد شدن به یک ساختمان یا فضای سرپوشیده را برگزینید.',
          tr: 'Kapalı bir mekana veya binaya giriş için doğru edatı seçiniz.',
          ar: 'اختر حرف الجر المناسب للدخول إلى مبنى أو مكان مغلق.',
          es: 'Elige la preposición adecuada para entrar en un edificio.'
        },
        prompt: 'Wir gehen jetzt _____ das Museum (Akkusativ, Neutrum).',
        options: ['in', 'an', 'auf', 'bei'],
        correctAnswer: 'in',
        explanation: {
          en: 'Entering an enclosed space with motion (Wohin?) uses "in + Akkusativ": "in das Museum" (ins Museum).',
          fa: 'ورود به یک فضای سرپوشیده با حرکت و جهت (Wohin?) از "in + Akkusativ" استفاده می‌کند: in das Museum.',
          tr: 'Kapalı alana yönelme "in + Akkusativ" yapısıyla ifade edilir: in das Museum.',
          ar: 'الدخول إلى مكان مغلق مع حركة يتطلب "in + Akkusativ": in das Museum.',
          es: 'Entrar en un espacio cerrado con movimiento exige "in + Acusativo": in das Museum.'
        }
      }
    ]
  },
  {
    id: 'a2_1_lek4',
    lektionNumber: 4,
    level: 'A2.1',
    title: 'Essen, Genuss und Gastronomie',
    subTitle: 'Im Restaurant, Rezepte und Adjektivdeklination (Deutsch Mussawi A2.1)',
    topic: 'Bestellen im Restaurant, Höflichkeit mit Konjunktiv II, Adjektivendungen nach unbestimmtem Artikel',
    fotoHoergeschichte: {
      title: 'Foto-Hörgeschichte: Ein Abendessen im traditionellen Restaurant',
      imagePrompt: 'A warm German restaurant in Hamburg with wooden tables where Sayed and his colleagues order dinner from a friendly waiter.',
      imageTheme: 'Restaurantbesuch Hamburg',
      audioDuration: '02:30',
      transcript: [
        { speaker: 'Kellner', text: 'Guten Abend! Haben Sie schon gewählt oder darf ich Ihnen die Tageskarte bringen?' },
        { speaker: 'Sayed Bashir', text: 'Guten Abend! Ich hätte gerne das gebratene Lachsfilet mit Kartoffelsalat.' },
        { speaker: 'Kellner', text: 'Sehr gerne. Und was möchten Sie dazu trinken?' },
        { speaker: 'Sayed Bashir', text: 'Könnten Sie mir bitte ein großes Mineralwasser ohne Kohlensäure bringen?' },
        { speaker: 'Kellner', text: 'Selbstverständlich, kommt sofort!' }
      ],
      summary: {
        en: 'Sayed orders dinner in a traditional German restaurant using polite Konjunktiv II formulations.',
        fa: 'سید در یک رستوران سنتی آلمانی شام سفارش می‌دهد و از عبارات مودبانه کلماتی مانند "Ich hätte gerne" استفاده می‌کند.',
        tr: 'Sayed geleneksel bir restoranda kibar ifadelerle yemek ve içecek siparişi verir.',
        ar: 'يطلب سيد العشاء في مطعم ألماني تقليدي مستخدماً صيغ اللباقة والأدب.',
        es: 'Sayed cena en un restaurante tradicional alemán y pide con fórmulas de cortesía.'
      }
    },
    sectionA: {
      title: 'Mussawi A: Sprechen & Dialog',
      focus: 'Sprechen (Höfliche Bestellungen mit Konjunktiv II: hätte gerne / könnte)',
      description: {
        en: 'Polite requests: Ich hätte gern ein Glas Wasser. Könnten Sie mir bitte die Speisekarte bringen?',
        fa: 'درخواست‌های مودبانه: مایل بودم یک لیوان آب داشته باشم / آیا ممکن است منوی غذا را بیاورید؟',
        tr: 'Konjunktiv II ile kibar istekler: hätte gern, könnte.',
        ar: 'الطلبات المهذبة باستخدام صيغة التمني Konjunktiv II: hätte gern, könnten Sie.',
        es: 'Peticiones de cortesía con Konjunktiv II: me gustaría, podría usted.'
      },
      content: 'Ich hätte gern die Gemüsesuppe als Vorspeise und danach einen Apfelstrudel.',
      practiceTasks: ['Üben Sie 3 höfliche Bitten im Restaurant.']
    },
    sectionB: {
      title: 'Mussawi B: Wortschatz & Hören',
      focus: 'Grammatik (Adjektivdeklination nach unbestimmtem Artikel)',
      description: {
        en: 'Adjective endings after "ein / eine / kein": ein frischer Salat (m), ein kaltes Getränk (n), eine warme Suppe (f).',
        fa: 'صرف صفت پس از حروف تعریف نامعین (ein/eine/kein): سالاد تازه (frischer)، نوشیدنی سرد (kaltes)، سوپ گرم (warme).',
        tr: 'Belirsiz artikellerden sonra sıfat çekimi (ein, eine, kein).',
        ar: 'إعراب الصفات بعد أداة التنكير (ein / eine / kein).',
        es: 'Declinación de adjetivos tras artículo indeterminado.'
      },
      content: 'Ich möchte einen frischen Salat und ein kühles Mineralwasser bestellen.',
      practiceTasks: ['Setzen Sie die Adjektivendungen für Speisen und Getränke ein.']
    },
    sectionC: {
      title: 'Mussawi C: Alltagskommunikation',
      focus: 'Hören & Wortschatz (Zubereitung & Rezepte)',
      description: {
        en: 'Cooking verbs: schneiden, kochen, braten, backen, würzen, umrühren.',
        fa: 'افعال آشپزی: خرد کردن، پختن/جوشاندن، سرخ کردن، در فر پختن، چاشنی زدن، هم زدن.',
        tr: 'Yemek pişirme fiilleri: doğramak, haşlamak, kızartmak, fırınlamak, karıştırmak.',
        ar: 'أفعال الطهي والوصفات: يقطع، يغلي، يقلي، يخبز، يتبل، يحرك.',
        es: 'Verbos culinarios: cortar, cocer, freír, hornear, sazonar.'
      },
      content: 'Schneiden Sie die Zwiebeln in kleine Würfel und braten Sie sie in Olivenöl an.',
      practiceTasks: ['Erklären Sie die Zubereitung Ihres Lieblingsgerichts in 4 Etappen.']
    },
    sectionD: {
      title: 'Mussawi D: Leseverstehen & Text',
      focus: 'Lesen (Speisekarten & Reklamationen im Restaurant)',
      description: {
        en: 'Read menus, dietary labels (vegetarisch, glutenfrei), and handle billing politely.',
        fa: 'خواندن منوهای غذایی، برچسب‌های رژیمی (گیاهی، بدون گلوتن) و تسویه صورت‌حساب.',
        tr: 'Menüleri, vejetaryen/glütensiz işaretleri okuma ve hesap isteme.',
        ar: 'قراءة قوائم الطعام، الرموز الغذائية (نباتي، خالي من الغلوتين) وطلب الحساب.',
        es: 'Lectura de cartas de restaurantes y petición de la cuenta.'
      },
      content: 'Wir möchten bitte zahlen, getrennt oder zusammen? - Zusammen bitte, mit Karte.',
      practiceTasks: ['Führen Sie einen Bezahlvorgang mit Trinkgeld durch.']
    },
    sectionE: {
      title: 'Mussawi E: Grammatik & Schreiben',
      focus: 'Schreiben (Eine Einladung zum Abendessen verfassen)',
      description: {
        en: 'Write an invitation to a dinner party mentioning what you plan to cook.',
        fa: 'نوشتن دعوت‌نامه برای مهمانی شام و ذکر غذایی که قصد پختن آن را دارید.',
        tr: 'Akşam yemeği davetiyesi yazma ve menüyü belirtme.',
        ar: 'كتابة دعوة لعشاء منزلي وذكر الأطباق المقترح تحضيرها.',
        es: 'Redactar una invitación para una cena en casa.'
      },
      content: 'Liebe Nachbarn, am Samstag koche ich ein traditionelles Gericht und lade Sie herzlich ein!',
      practiceTasks: ['Schreiben Sie eine schriftliche Zusage mit einer Frage nach Allergien.']
    },
    exercises: [
      {
        id: 'ex_a2_4_1',
        type: 'multiple_choice',
        instruction: {
          en: 'Choose the correct adjective ending for masculine accusative after "einen".',
          fa: 'پایانه صفت صحیح برای اسم مذکر در حالت مفعولی (آکوزاتیو) پس از "einen" را انتخاب کنید.',
          tr: '"einen" sonrasındaki eril Akkusativ sıfat ekini seçiniz.',
          ar: 'اختر نهاية الصفة الصحيحة للمذكر المنصوب بعد "einen".',
          es: 'Elige la terminación del adjetivo para masculino acusativo tras "einen".'
        },
        prompt: 'Ich nehme einen _____ Tee mit Zitrone (heiß, maskulin).',
        options: ['heißen', 'heißer', 'heißes', 'heiße'],
        correctAnswer: 'heißen',
        explanation: {
          en: 'After "einen" (masculine accusative), the adjective ending is always "-en": "einen heißen Tee".',
          fa: 'پس از "einen" (مذکر آکوزاتیو)، پایانه صفت همواره "-en" است: einen heißen Tee.',
          tr: '"einen" (eril Akkusativ) artikelinden sonra sıfat daima "-en" eki alır: einen heißen Tee.',
          ar: 'بعد أداة النصب للمذكر "einen" تأخذ الصفة دائماً اللاحقة "-en": einen heißen Tee.',
          es: 'Tras "einen" (masculino acusativo), la terminación del adjetivo siempre es "-en": einen heißen Tee.'
        }
      }
    ]
  },
  {
    id: 'a2_1_lek5',
    lektionNumber: 5,
    level: 'A2.1',
    title: 'Arbeitswelt, Kollegen und Büroalltag',
    subTitle: 'Telefonieren am Arbeitsplatz, Modalverben im Präteritum (Deutsch Mussawi A2.1)',
    topic: 'Geschäftliche Telefonate, Arbeitsabläufe und Präteritum der Modalverben (musste, konnte, durfte, wollte)',
    fotoHoergeschichte: {
      title: 'Foto-Hörgeschichte: Telefonkonferenz im Hamburger Büro',
      imagePrompt: 'A sleek IT office in Hamburg where a project manager leads a video conference call with international team members.',
      imageTheme: 'Büroalltag Hamburg',
      audioDuration: '02:30',
      transcript: [
        { speaker: 'Sayed Bashir', text: 'CloudTech Hamburg, Bashir am Apparat. Was kann ich für Sie tun?' },
        { speaker: 'Kunde', text: 'Guten Tag, Herr Bashir. Ich rufe wegen des neuen Software-Updates an.' },
        { speaker: 'Sayed Bashir', text: 'Gern! Gestern konnte ich das Update bereits erfolgreich testen.' },
        { speaker: 'Kunde', text: 'Das freut mich. Können wir heute Nachmittag dazu kurz sprechen?' },
        { speaker: 'Sayed Bashir', text: 'Ja, um 15 Uhr passt es mir sehr gut.' }
      ],
      summary: {
        en: 'Sayed takes a business phone call at his IT company and arranges a meeting with a client.',
        fa: 'سید به یک تماس کاری در شرکت آی‌تی پاسخ داده و با مشتری قراری هماهنگ می‌کند.',
        tr: 'Sayed şirkette profesyonel bir telefon görüşmesi yapar ve müşteriyle toplantı ayarlar.',
        ar: 'يجري سيد مكالمة عمل هاتفية في مكتبه في هامبورغ وينسق موعداً مع العميل.',
        es: 'Sayed atiende una llamada laboral y fija una cita con un cliente.'
      }
    },
    sectionA: {
      title: 'Mussawi A: Sprechen & Dialog',
      focus: 'Sprechen (Telefonieren am Arbeitsplatz & Termine vereinbaren)',
      description: {
        en: 'Business phone phrases: Am Apparat, Ich verbinde Sie, Könnte ich Herrn... sprechen?',
        fa: 'اصطلاحات تلفن اداری: پای تلفن هستم، شما را وصل می‌کنم، می‌توانم با آقای... صحبت کنم؟',
        tr: 'İş yeri telefon konuşma kalıpları.',
        ar: 'عبارات المكالمات الهاتفية في بيئة العمل وتحديد المواعيد.',
        es: 'Fórmulas telefónicas profesionales en el entorno laboral.'
      },
      content: 'Guten Tag, mein Name ist Bashir. Ich würde gerne mit der Personalabteilung sprechen.',
      practiceTasks: ['Simulieren Sie ein geschäftliches Telefonat mit Notizen.']
    },
    sectionB: {
      title: 'Mussawi B: Wortschatz & Hören',
      focus: 'Grammatik (Modalverben im Präteritum: musste, konnte, durfte, wollte)',
      description: {
        en: 'Past modal verbs: ich musste (had to), ich konnte (was able to), ich durfte (was allowed to), ich wollte (wanted to).',
        fa: 'افعال کمکی در زمان گذشته ساده (پرترایتوم): مجبور بودم (musste)، توانستم (konnte)، اجازه داشتم (durfte)، می‌خواستم (wollte).',
        tr: 'Modal fiillerin geçmiş zaman hali (Präteritum).',
        ar: 'الأفعال المساعدة في صيغة الماضي البسيط Präteritum.',
        es: 'Verbos modales en pretérito: musste, konnte, durfte, wollte.'
      },
      content: 'Gestern musste ich viele Überstunden machen, weil ein Projekt fertig werden sollte.',
      practiceTasks: ['Erzählen Sie im Präteritum von Ihrem letzten Arbeitstag.']
    },
    sectionC: {
      title: 'Mussawi C: Alltagskommunikation',
      focus: 'Wortschatz (Bürogeräte & IT-Begriffe)',
      description: {
        en: 'Office equipment: der Drucker, der Bildschirm, die Tastatur, die Datei speichern, das Passwort ändern.',
        fa: 'تجهیزات اداری: چاپگر، نمایشگر، صفحه‌کلید، ذخیره فایل، تغییر گذرواژه.',
        tr: 'Ofis araç gereçleri ve bilişim terimleri.',
        ar: 'أجهزة المكتب ومصطلحات تكنولوجيا المعلومات والملفات.',
        es: 'Equipamiento de oficina y vocabulario informático.'
      },
      content: 'Der Drucker funktioniert leider nicht, weil kein Papier mehr da ist.',
      practiceTasks: ['Erklären Sie ein technisches Problem an die IT-Abteilung.']
    },
    sectionD: {
      title: 'Mussawi D: Leseverstehen & Text',
      focus: 'Lesen (Geschäftliche E-Mails & Protokolle)',
      description: {
        en: 'Read official office memos, meeting minutes, and project update emails.',
        fa: 'خواندن یادداشت‌های اداری، صورت‌جلسه‌ها و ایمیل‌های پیشرفت پروژه.',
        tr: 'İş e-postaları, toplantı tutanakları ve proje bilgilendirmelerini anlama.',
        ar: 'قراءة رسائل البريد الإلكتروني الرسمية ومحاضر الاجتماعات.',
        es: 'Lectura de memorandos de oficina y actas de reuniones.'
      },
      content: 'Betreff: Protokoll der Teamsitzung vom 14. Oktober – Aufgaben bis Freitag erledigen.',
      practiceTasks: ['Entnehmen Sie dem Protokoll drei wichtige Fristen.']
    },
    sectionE: {
      title: 'Mussawi E: Grammatik & Schreiben',
      focus: 'Schreiben (Eine Abwesenheitsnotiz & Entschuldigung schreiben)',
      description: {
        en: 'Write an automatic out-of-office notification and a sick leave note.',
        fa: 'نوشتن پیام خودکار عدم حضور در محل کار و اطلاع‌رسانی مرخصی استعلاجی.',
        tr: 'Otomatik ofis dışı yanıtı ve hastalık izin bildirimi yazma.',
        ar: 'كتابة رسالة الرد التلقائي خارج المكتب وإشعار الإجازة المرضية.',
        es: 'Redactar un mensaje de fuera de la oficina y baja médica.'
      },
      content: 'Ich bin bis zum 25. Oktober im Urlaub. In dringenden Fällen wenden Sie sich bitte an Frau Berg.',
      practiceTasks: ['Erstellen Sie eine professionelle Abwesenheitsnotiz auf Deutsch.']
    },
    exercises: [
      {
        id: 'ex_a2_5_1',
        type: 'multiple_choice',
        instruction: {
          en: 'Select the correct Präteritum form of "müssen" for the first person singular (ich).',
          fa: 'شکل صحیح پرترایتوم (گذشته ساده) فعل "müssen" برای اول شخص مفرد (ich) را انتخاب کنید.',
          tr: '"müssen" fiilinin birinci tekil şahıs (ich) Präteritum halini seçiniz.',
          ar: 'اختر صيغة الماضي البسيط Präteritum للفعل "müssen" مع الضمير "ich".',
          es: 'Elige la forma en pretérito de "müssen" para la primera persona singular.'
        },
        prompt: 'Gestern _____ ich bis 20 Uhr im Büro arbeiten (müssen).',
        options: ['musste', 'muss', 'gemusst', 'müsste'],
        correctAnswer: 'musste',
        explanation: {
          en: 'The Präteritum of "müssen" for "ich/er/sie/es" is "musste" (without umlaut).',
          fa: 'شکل گذشته ساده (Präteritum) فعل "müssen" برای ضمایر ich/er/sie/es به صورت "musste" (بدون املات) است.',
          tr: '"müssen" fiilinin "ich" için Präteritum formu noktasız "musste" şeklindedir.',
          ar: 'صيغة الماضي Präteritum للفعل müssen مع ich هي "musste" (بدون أوملاوت).',
          es: 'El pretérito de "müssen" para "ich" es "musste" (sin diéresis).'
        }
      }
    ]
  },
  {
    id: 'a2_1_lek6',
    lektionNumber: 6,
    level: 'A2.1',
    title: 'Sport, Fitness und Gesundheit',
    subTitle: 'Bewegung, Arztbesuche und Reflexivpronomen (Deutsch Mussawi A2.1)',
    topic: 'Körperliches Wohlbefinden, Sportarten und Reflexivverben (sich fühlen, sich bewegen, sich ausruhen)',
    fotoHoergeschichte: {
      title: 'Foto-Hörgeschichte: Im Fitnessstudio und beim Sportarzt',
      imagePrompt: 'A bright modern gym in Hamburg where a trainer demonstrates stretching exercises to an active group of adults.',
      imageTheme: 'Fitnessstudio Hamburg',
      audioDuration: '02:25',
      transcript: [
        { speaker: 'Fitnesstrainer', text: 'Guten Tag! Wie fühlen Sie sich nach dem ersten Ausdauertraining?' },
        { speaker: 'Sayed Bashir', text: 'Ich fühle mich fit, aber meine Rückenmuskeln tun etwas weh.' },
        { speaker: 'Fitnesstrainer', text: 'Dann sollten Sie sich vor jedem Training gründlich aufwärmen und dehnen.' },
        { speaker: 'Sayed Bashir', text: 'Welche Übungen empfehlen Sie für den Rücken?' },
        { speaker: 'Fitnesstrainer', text: 'Ich zeige Ihnen zwei sanfte Übungen für die Wirbelsäule.' }
      ],
      summary: {
        en: 'Sayed trains at a fitness club and consults a fitness instructor on healthy back exercises.',
        fa: 'سید در باشگاه ورزشی تمرین می‌کند و با مربی درباره حرکات کششی تقویت کمر مشورت می‌نماید.',
        tr: 'Sayed spor salonunda antrenman yapar ve sırt sağlığı için eğitmenle konuşur.',
        ar: 'يتدرب سيد في نادي اللياقة البدنية ويستشير المدرب حول تمارين صحية لتقوية الظهر.',
        es: 'Sayed entrena en el gimnasio y consulta con el monitor ejercicios para la espalda.'
      }
    },
    sectionA: {
      title: 'Mussawi A: Sprechen & Dialog',
      focus: 'Sprechen & Wortschatz (Sportarten & Bewegung im Alltag)',
      description: {
        en: 'Sports and workouts: joggen, schwimmen, Rad fahren, Yoga machen, sich bewegen.',
        fa: 'انواع ورزش‌ها و تحرک روزمره: دویدن، شنا کردن، دوچرخه‌سواری، یوگا، تحرک بدنی داشتن.',
        tr: 'Spor dalları ve günlük fiziksel aktiviteler.',
        ar: 'الأنشطة الرياضية واللياقة البدنية: الركض، السباحة، ركوب الدراجة، اليوغا.',
        es: 'Deportes y actividad física diaria: footing, natación, ciclismo, yoga.'
      },
      content: 'Ich fahre jeden Tag mit dem Fahrrad, um mich fit zu halten.',
      practiceTasks: ['Welche Sportart treiben Sie regelmäßig? Berichten Sie Ihrem Partner.']
    },
    sectionB: {
      title: 'Mussawi B: Wortschatz & Hören',
      focus: 'Grammatik (Reflexivverben im Akkusativ: mich, dich, sich, uns, euch, sich)',
      description: {
        en: 'Reflexive pronouns with verbs: sich fühlen (feel), sich ausruhen (rest), sich ärgern (get annoyed).',
        fa: 'ضمایر انعکاسی در آکوزاتیو: خودم را (mich)، خودت را (dich)، خودش را (sich)، خودمان را (uns)، خودتان را (euch).',
        tr: 'Dönüşlü fiiller ve Akkusativ zamirleri: sich fühlen, sich ausruhen.',
        ar: 'الأفعال المنعكسة وضمائرها في حالة النصب Akkusativ.',
        es: 'Verbos reflexivos y pronombres reflexivos en acusativo.'
      },
      content: 'Nach der Arbeit ruhe ich mich eine halbe Stunde auf dem Sofa aus.',
      practiceTasks: ['Konjugieren Sie "sich freuen" und "sich bewegen" in allen Personen.']
    },
    sectionC: {
      title: 'Mussawi C: Alltagskommunikation',
      focus: 'Hören & Kommunikation (Beim Arzt & Ratschläge geben)',
      description: {
        en: 'Doctor visits and advice: Sie sollten mehr schlafen, trinken Sie viel Tee, bewegen Sie sich regelmäßig.',
        fa: 'ملاقات با پزشک و توصیه‌ها: باید بیشتر بخوابید، چای بنوشید، به طور مرتب ورزش کنید.',
        tr: 'Doktor muayenesi ve sağlık tavsiyeleri.',
        ar: 'زيارة الطبيب وتقديم النصائح الصحية باستخدام "sollte".',
        es: 'Visita al médico y recomendaciones con "sollte".'
      },
      content: 'Herr Doktor, mein Knie schmerzt beim Laufen. - Dann sollten Sie sich schonen.',
      practiceTasks: ['Geben Sie drei Gesundheitstipps mit "Sie sollten..."']
    },
    sectionD: {
      title: 'Mussawi D: Leseverstehen & Text',
      focus: 'Lesen (Gesundheitsratgeber & Fitnessangebote)',
      description: {
        en: 'Read fitness center course schedules, health magazine tips, and insurance health bonus programs.',
        fa: 'خواندن جدول کلاس‌های باشگاه، نکات مجلات سلامتی و طرح‌های تشویقی بیمه سلامت.',
        tr: 'Sağlık dergileri ve spor kursu programlarını okuma.',
        ar: 'قراءة جداول حصص اللياقة، ومجلات الصحة وبرامج التأمين الصحي التحفيزية.',
        es: 'Lectura de programas de gimnasio y revistas de salud.'
      },
      content: 'Krankenkassen-Bonusprogramm: Wer regelmäßig Sport treibt, erhält bis zu 100 Euro Prämie.',
      practiceTasks: ['Finden Sie im Kursplan zwei Termine für Anfänger-Yoga.']
    },
    sectionE: {
      title: 'Mussawi E: Grammatik & Schreiben',
      focus: 'Schreiben (Einen Fitnesstrainingsplan aufstellen)',
      description: {
        en: 'Draft a weekly workout and nutrition plan with goals.',
        fa: 'تدوین یک برنامه هفتگی تمرین و تغذیه ورزشی به همراه اهداف هفتگی.',
        tr: 'Haftalık spor ve sağlıklı beslenme planı hazırlama.',
        ar: 'إعداد جدول أسبوعي للتمارين الرياضية والتغذية الصحية.',
        es: 'Elaborar un plan semanal de entrenamiento y nutrición.'
      },
      content: 'Montag: 45 Minuten Joggen im Park. Mittwoch: Rückentraining im Fitnessstudio.',
      practiceTasks: ['Schreiben Sie Ihren persönlichen Trainingsplan für nächste Woche.']
    },
    exercises: [
      {
        id: 'ex_a2_6_1',
        type: 'multiple_choice',
        instruction: {
          en: 'Select the correct reflexive pronoun for "wir".',
          fa: 'ضمیر انعکاسی صحیح برای فاعل "wir" (ما) را انتخاب کنید.',
          tr: '"wir" öznesi için doğru dönüşlü zamiri seçiniz.',
          ar: 'اختر الضمير المنعكس المناسب للضمير "wir" (نحن).',
          es: 'Elige el pronombre reflexivo correcto para "wir".'
        },
        prompt: 'Wir freuen _____ schon sehr auf das Wochenende.',
        options: ['uns', 'euch', 'sich', 'mich'],
        correctAnswer: 'uns',
        explanation: {
          en: 'The reflexive pronoun for "wir" is always "uns": "Wir freuen uns".',
          fa: 'ضمیر انعکاسی برای "wir" همواره "uns" است: Wir freuen uns (ما خوشحالیم).',
          tr: '"wir" zamirinin dönüşlü hali "uns" şeklindedir: Wir freuen uns.',
          ar: 'الضمير المنعكس مع "wir" هو دائماً "uns": Wir freuen uns.',
          es: 'El pronombre reflexivo para "wir" es siempre "uns": Wir freuen uns.'
        }
      }
    ]
  },
  {
    id: 'a2_1_lek7',
    lektionNumber: 7,
    level: 'A2.1',
    title: 'Zusammenleben, Nachbarn und Gemeinschaft',
    subTitle: 'Nachbarschaft, Feste im Jahreskreis und Nebensätze (Deutsch Mussawi A2.1 Abschluss)',
    topic: 'Nachbarschaftshilfe, Hausordnung, Nebensätze mit "dass" und "wenn", A2.1-Abschlussprüfung',
    fotoHoergeschichte: {
      title: 'Foto-Hörgeschichte: Das Hoffest im Wohnviertel Altona',
      imagePrompt: 'A friendly community courtyard celebration in Hamburg-Altona with fairy lights, barbecue grills, and neighbors chatting around a buffet table.',
      imageTheme: 'Hoffest Hamburg Altona',
      audioDuration: '02:40',
      transcript: [
        { speaker: 'Herr Schmidt (Hausverwalter)', text: 'Herzlich willkommen zu unserem jährlichen Nachbarschaftsfest im Innenhof!' },
        { speaker: 'Frau Bauer', text: 'Schön, dass das Wetter so gut mitspielt und so viele Nachbarn gekommen sind.' },
        { speaker: 'Sayed Bashir', text: 'Ich habe einen traditionellen afghanischen Reissalat mitgebracht.' },
        { speaker: 'Herr Schmidt', text: 'Vielen Dank, Sayed! Wenn jeder etwas mitbringt, wird das Buffet besonders bunt.' },
        { speaker: 'Alle', text: 'Guten Appetit und auf gute Nachbarschaft!' }
      ],
      summary: {
        en: 'Neighbors gather for an annual courtyard block party in Hamburg-Altona, celebrating community and good relations.',
        fa: 'همسایگان در حیاط مجتمع در محله آلتونا در هامبورگ دور هم جمع شده و جشن سالانه همسایگی را با غذاهای متنوع جشن می‌گیرند.',
        tr: 'Hamburg-Altona\'da komşular yıllık avlu şenliğinde buluşup iyi komşuluk ilişkilerini kutlarlar.',
        ar: 'يجتمع الجيران في حفل الفناء السنوي في هامبورغ للاحتفال بروابط الجيرة الودية.',
        es: 'Los vecinos celebran la fiesta anual del patio comunitario en Hamburgo compartiendo comida.'
      }
    },
    sectionA: {
      title: 'Mussawi A: Sprechen & Dialog',
      focus: 'Sprechen & Wortschatz (Nachbarschaft & Hausordnung)',
      description: {
        en: 'Neighborly relations: Ruhezeiten einhalten, das Treppenhaus putzen, Pakete für Nachbarn annehmen.',
        fa: 'روابط همسایگی: رعایت ساعات سکوت، تمیز کردن راه‌پله، تحویل گرفتن بسته پستی همسایه.',
        tr: 'Komşuluk ilişkileri, bina kuralları ve paket teslim alma.',
        ar: 'علاقات الجيرة، قواعد السكن المشترك، الهدوء واستلام الطرود البريدية.',
        es: 'Convivencia vecinal, normas del edificio y recogida de paquetes.'
      },
      content: 'Könnten Sie bitte morgen ein Paket für mich annehmen? - Ja, sehr gerne mache ich das!',
      practiceTasks: ['Besprechen Sie drei wichtige Regeln aus der deutschen Hausordnung.']
    },
    sectionB: {
      title: 'Mussawi B: Wortschatz & Hören',
      focus: 'Grammatik (Nebensätze mit der Konjunktion "dass")',
      description: {
        en: 'Subordinate clauses with "dass": Ich glaube, dass... / Es freut mich, dass... (verb at the end).',
        fa: 'جملات پیرو با حرف ربط "dass" (که): معتقدم که... / خوشحالم که... (فعل در پایان جمله قرار می‌گیرد).',
        tr: '"dass" bağlacıyla yan cümleler (fiil sonda).',
        ar: 'الجمل الفرعية مع "dass" (أن) مع وضع الفعل المصرف في النهاية.',
        es: 'Oraciones subordinadas con la conjunción "dass" (verbo al final).'
      },
      content: 'Ich finde es toll, dass die Nachbarn hier so hilfsbereit sind.',
      practiceTasks: ['Bilden Sie 3 Sätze mit "Ich freue mich, dass..."']
    },
    sectionC: {
      title: 'Mussawi C: Alltagskommunikation',
      focus: 'Grammatik (Konditionalsätze mit "wenn")',
      description: {
        en: 'Conditional clauses with "wenn" (if / when): Wenn das Wetter schön ist, grillen wir im Garten.',
        fa: 'جملات شرطی با "wenn" (اگر / وقتی که): اگر هوا خوب باشد، در حیاط کباب درست می‌کنیم.',
        tr: '"wenn" ile şart ve zaman cümleleri.',
        ar: 'الجمل الشرطية والظرفية مع "wenn" (إذا / عندما).',
        es: 'Oraciones condicionales con "wenn" (si / cuando).'
      },
      content: 'Wenn Sie Fragen haben, können Sie jederzeit bei mir klingeln.',
      practiceTasks: ['Vervollständigen Sie: "Wenn ich Zeit habe, ..."']
    },
    sectionD: {
      title: 'Mussawi D: Leseverstehen & Text',
      focus: 'Lesen (Aushänge am Schwarzen Brett & Mietverträge)',
      description: {
        en: 'Read notices on the apartment noticeboard regarding repair works, heating maintenance, and parties.',
        fa: 'خواندن اطلاعیه‌های تابلو اعلانات ساختمان درباره تعمیرات، سرویس شوفاژ و جشن‌های همسایگی.',
        tr: 'Apartman panosu duyuruları ve bakım bildirimlerini okuma.',
        ar: 'قراءة إعلانات لوحة الإعلانات في العمارة بشأن الصيانة والتدفئة والاحتفالات.',
        es: 'Lectura de tablones de anuncios de la comunidad de vecinos.'
      },
      content: 'Achtung: Am kommenden Dienstag wird von 8 bis 12 Uhr die Wasserversorgung kurzzeitig abgestellt.',
      practiceTasks: ['Verfassen Sie einen kurzen Aushang über eine Geburtstagsfeier im Haus.']
    },
    sectionE: {
      title: 'Mussawi E: Grammatik & Schreiben',
      focus: 'A2.1-Gesamtabschluss (Prüfungssimulation & Kompetenzbilanz)',
      description: {
        en: 'Final review of Level A2.1: past tense, directions, polite requests, office talk, and reflexive verbs.',
        fa: 'مرور جامع کل سطح A2.1: زمان گذشته، آدرس‌یابی، درخواست‌های مودبانه، مکالمات اداری و افعال انعکاسی.',
        tr: 'A2.1 seviyesi genel tekrarı ve başarı değerlendirmesi.',
        ar: 'المراجعة الختامية لمستوى A2.1 وتقييم الكفاءة اللغوية الكاملة.',
        es: 'Repaso global de nivel A2.1 y evaluación final de competencias.'
      },
      content: 'Herzlichen Glückwunsch! Sie haben alle 7 Lektionen des Niveaus A2.1 erfolgreich gemeistert.',
      practiceTasks: ['Präsentieren Sie einen 2-minütigen Vortrag über Ihr Leben in Deutschland.']
    },
    exercises: [
      {
        id: 'ex_a2_7_1',
        type: 'multiple_choice',
        instruction: {
          en: 'Select the sentence with correct verb placement in a "dass" clause.',
          fa: 'جمله‌ای را انتخاب کنید که در آن جایگاه فعل در بند با "dass" به درستی رعایت شده باشد.',
          tr: '"dass" bağlacında fiilin yeri doğru olan cümleyi seçiniz.',
          ar: 'اختر الجملة التي وضعت الفعل المصرف في الموضع الصحيح بعد "dass".',
          es: 'Elige la oración con la posición correcta del verbo tras la conjunción "dass".'
        },
        prompt: 'Ich weiß, _____',
        options: [
          'dass Herr Müller heute Geburtstag hat.',
          'dass Herr Müller hat heute Geburtstag.',
          'dass hat Herr Müller heute Geburtstag.',
          'dass heute Geburtstag Herr Müller hat.'
        ],
        correctAnswer: 'dass Herr Müller heute Geburtstag hat.',
        explanation: {
          en: 'Subordinate clauses introduced by "dass" place the conjugated verb ("hat") at the very end of the clause.',
          fa: 'در جملات پیرو که با "dass" شروع می‌شوند، فعل صرف‌شده ("hat") در انتهای جمله قرار می‌گیرد.',
          tr: '"dass" ile başlayan yan cümlelerde çekimli fiil ("hat") cümlenin sonuna yerleşir.',
          ar: 'في الجمل الفرعية التي تبدأ بـ "dass" يوضع الفعل المصرف ("hat") دائماً في نهاية الجملة.',
          es: 'Las oraciones subordinadas con "dass" sitúan el verbo conjugado ("hat") al final.'
        }
      }
    ]
  }
];

