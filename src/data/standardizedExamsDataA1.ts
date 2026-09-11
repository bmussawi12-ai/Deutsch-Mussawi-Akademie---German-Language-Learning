import { StandardizedExam } from '../types';

// =========================================================================
// GOETHE-ZERTIFIKAT A1: START DEUTSCH 1 (STANDARD: 65 MINUTEN)
// Lesen: 25 Min (15 Fragen) | Hören: 20 Min (15 Fragen) | Schreiben: 20 Min | Sprechen: 15 Min
// =========================================================================
export const EXAM_GOETHE_A1: StandardizedExam = {
  id: 'exam_goethe_a1',
  title: 'Goethe-Zertifikat A1: Start Deutsch 1 (Offizieller Standard)',
  standard: 'Goethe-Zertifikat',
  level: 'A1.1',
  totalDurationMinutes: 65,
  passingScore: '60% (60 / 100 Punkte)',
  strategy: {
    level: 'A1.1',
    timeManagement: [
      {
        section: 'Lesen (Reading) - 15 Fragen',
        allocatedMinutes: 25,
        tip: {
          en: '15 tasks in 25 minutes (~1.5 min per question). Teil 1 (5 questions): Short personal notes/emails. Teil 2 (5 questions): Advertisements/Websites. Teil 3 (5 questions): Information boards and notices.',
          fa: '۱۵ سوال در ۲۵ دقیقه (حدود ۱.۵ دقیقه برای هر سوال). بخش ۱ (۵ سوال): ایمیل‌ها و نامه‌های شخصی کوتاه. بخش ۲ (۵ سوال): آگهی‌ها و وب‌سایت‌ها. بخش ۳ (۵ سوال): تابلوهای اعلانات عمومی.',
          prs: '۱۵ سوال در ۲۵ دقیقه. بخش ۱ ایمیل‌ها، بخش ۲ آگهی‌ها، و بخش ۳ لوحه‌های اعلانات.',
          tr: '25 dakikada 15 soru. Bölüm 1 (5 soru) e-postalar, Bölüm 2 (5 soru) ilanlar, Bölüm 3 (5 soru) duyurular.',
          ar: '15 سؤالاً في 25 دقيقة. القسم 1 (5 أسئلة)، القسم 2 (5 أسئلة)، القسم 3 (5 أسئلة).',
          es: '15 preguntas en 25 minutos. Parte 1 (5), Parte 2 (5) y Parte 3 (5).'
        }
      },
      {
        section: 'Hören (Listening) - 15 Fragen',
        allocatedMinutes: 20,
        tip: {
          en: '15 tasks in 20 minutes. Teil 1 (6 questions, played twice). Teil 2 (4 announcements at station/airport, played once!). Teil 3 (5 telephone messages, played twice).',
          fa: '۱۵ سوال در ۲۰ دقیقه. بخش ۱ (۶ سوال، ۲ بار پخش). بخش ۲ (۴ اعلامیه راه‌آهن یا فرودگاه، فقط ۱ بار پخش!). بخش ۳ (۵ پیغام تلفنی، ۲ بار پخش).',
          prs: '۱۵ سوال در ۲۰ دقیقه. بخش ۱ دو بار شنیده می‌شود، بخش ۲ فقط یک بار، و بخش ۳ دو بار.',
          tr: '20 dakikada 15 soru. Bölüm 1 (6 soru, 2 kez dinlenir), Bölüm 2 (4 anons, 1 kez!), Bölüm 3 (5 telefon mesajı, 2 kez).',
          ar: '15 سؤالاً في 20 دقيقة. القسم 1 (6 أسئلة، مرتان)، القسم 2 (4 إعلانات، مرة واحدة!)، القسم 3 (5 رسائل هاتف، مرتان).',
          es: '15 preguntas en 20 minutos. Parte 1 (6 preguntas), Parte 2 (4 anuncios), Parte 3 (5 mensajes).'
        }
      },
      {
        section: 'Schreiben (Writing) - 2 Aufgaben',
        allocatedMinutes: 20,
        tip: {
          en: 'Teil 1: Fill in 5 missing form items (Name, Date of Birth, Address, etc.). Teil 2: Write a short personal email with all 3 bullet points.',
          fa: 'بخش ۱: پر کردن ۵ جای خالی در فرم ثبت‌نام. بخش ۲: نوشتن یک ایمیل شخصی کوتاه ۳۰ کلمه‌ای با رعایت هر ۳ نکته ارائه‌شده.',
          prs: 'بخش ۱ پر کردن ۵ فیلد فرم، بخش ۲ ایمیل کوتاه با ۳ نکته.',
          tr: 'Bölüm 1: 5 form boşluğunu doldurma. Bölüm 2: 3 maddeyi içeren kısa e-posta.',
          ar: 'القسم 1: ملء 5 بيانات في استمارة. القسم 2: كتابة رسالة بريد قصيرة تتضمن النقاط الثلاث.',
          es: 'Parte 1: Rellenar 5 campos de formulario. Parte 2: Redactar correo breve con 3 puntos.'
        }
      }
    ],
    stepByStepStrategies: [
      {
        title: 'Leseverstehen A1: Zeit optimal nutzen',
        steps: [
          {
            en: '1. Read questions first. 2. Underline keywords (dates, time, names). 3. Compare with the text.',
            fa: '۱. ابتدا سوالات را بخوانید. ۲. کلمات کلیدی (تاریخ، ساعت، نام‌ها) را خط بکشید. ۳. با متن مقایسه کنید.',
            prs: '۱. اول سوالات را بخوانید. ۲. کلمات کلیدی را نشانی کنید. ۳. با متن مقایسه نمایید.',
            tr: '1. Önce soruları okuyun. 2. Anahtar kelimeleri çizin. 3. Metinle karşılaştırın.',
            ar: '1. اقرأ الأسئلة أولاً. 2. حدد الكلمات المفتاحية. 3. قارن مع النص.',
            es: '1. Lee las preguntas primero. 2. Subraya palabras clave. 3. Compara con el texto.'
          }
        ]
      }
    ],
    commonMistakes: [
      {
        mistake: 'Leaving questions blank when unsure.',
        correction: 'There is no negative scoring in Goethe/telc! Always choose the most plausible answer.',
        explanation: {
          en: 'In German language exams, incorrect answers do not deduct points. Never leave any question unselected.',
          fa: 'در آزمون‌های گوته و تلک نمره منفی وجود ندارد. هرگز هیچ سوالی را بدون پاسخ رها نکنید.',
          prs: 'در امتحانات آلمانی نمره منفی نیست، پس هیچ سوالی را خالی نمانید.',
          tr: 'Almanca sınavlarında yanlışlar doğruyu götürmez, hiçbir soruyu boş bırakmayın.',
          ar: 'لا توجد درجات سالبة في امتحانات غوته وتيلك، فلا تترك أي سؤال دون إجابة.',
          es: 'No hay penalización por respuestas incorrectas. Nunca dejes preguntas en blanco.'
        }
      }
    ]
  },
  lesen: {
    title: 'Modul Lesen (25 Minuten • 15 Aufgaben)',
    durationMinutes: 25,
    texts: [
      {
        title: 'Teil 1A: E-Mail von Anna (Geburtstagseinladung)',
        sourceType: 'Persönliche E-Mail',
        body: 'Liebe Lisa,\nam nächsten Samstag werde ich 25 Jahre alt! Ich möchte das gerne mit meinen Freunden feiern. Wir treffen uns um 19:30 Uhr im italienischen Restaurant "Bella Italia" am Marktplatz. Das Essen bezahle ich, die Getränke zahlt jeder selbst. Bitte sag mir bis spätestens Donnerstag Bescheid, ob du kommen kannst.\nLiebe Grüße,\nAnna',
        questions: [
          {
            id: 'a1_l_q1',
            question: '1. Anna feiert am Samstag ihren 25. Geburtstag.',
            options: ['Richtig', 'Falsch'],
            correctAnswer: 'Richtig',
            explanation: {
              en: 'Text confirms: "am nächsten Samstag werde ich 25 Jahre alt!".',
              fa: 'متن تایید می‌کند: "شنبه آینده ۲۵ ساله می‌شوم!".',
              prs: 'متن تایید می‌کند که آنا روز شنبه ۲۵ ساله می‌شود.',
              tr: 'Metinde: "önümüzdeki cumartesi 25 yaşıma giriyorum" denmektedir.',
              ar: 'يؤكد النص: "السبت القادم سأبلغ 25 عاماً!".',
              es: 'El texto confirma que cumple 25 años el próximo sábado.'
            }
          },
          {
            id: 'a1_l_q2',
            question: '2. Die Feier findet bei Anna zu Hause statt.',
            options: ['Richtig', 'Falsch'],
            correctAnswer: 'Falsch',
            explanation: {
              en: 'The party is at restaurant "Bella Italia", not at Anna\'s home.',
              fa: 'جشن در رستوران "بلا ایتالیا" برگزار می‌شود، نه در خانه آنا.',
              prs: 'جشن در رستورانت است، نه در خانه آنا.',
              tr: 'Kutlama restoranda yapılmaktadır, Anna\'nın evinde değil.',
              ar: 'الحفل يقام في المطعم الإيطالي وليس في منزل آنا.',
              es: 'La fiesta se celebra en un restaurante, no en su casa.'
            }
          },
          {
            id: 'a1_l_q3',
            question: '3. Lisa soll sich bis Donnerstag bei Anna melden.',
            options: ['Richtig', 'Falsch'],
            correctAnswer: 'Richtig',
            explanation: {
              en: 'Anna requests: "Bitte sag mir bis spätestens Donnerstag Bescheid".',
              fa: 'آنا می‌خواهد: "لطفاً حداکثر تا پنجشنبه به من خبر بده".',
              prs: 'آنا خواسته تا روز پنجشنبه به او خبر داده شود.',
              tr: 'Anna en geç perşembeye kadar haber vermesini istemiştir.',
              ar: 'طلبت آنا إبلاغها بحلول يوم الخميس على أبعد تقدير.',
              es: 'Anna pide avisar a más tardar el jueves.'
            }
          }
        ]
      },
      {
        title: 'Teil 1B: Nachricht von Herrn Müller (Terminabsage)',
        sourceType: 'Kurze geschäftliche Nachricht',
        body: 'Guten Tag Frau Weber,\nleider muss ich unseren Besprechungstermin am Dienstagmorgen um 10:00 Uhr absagen, da mein Zug Verspätung hat. Können wir den Termin auf Mittwochnachmittag um 15:00 Uhr verschieben? Bitte rufen Sie mich kurz auf meinem Handy an.\nMit freundlichen Grüßen,\nStefan Müller',
        questions: [
          {
            id: 'a1_l_q4',
            question: '4. Herr Müller kann am Dienstag um 10:00 Uhr nicht kommen.',
            options: ['Richtig', 'Falsch'],
            correctAnswer: 'Richtig',
            explanation: {
              en: 'Herr Müller cancels: "leider muss ich unseren Besprechungstermin (...) absagen".',
              fa: 'آقای مولر جلسه را کنسل می‌کند زیرا قطارش تاخیر دارد.',
              prs: 'آقای مولر قرار روز سه‌شنبه را لغو می‌کند.',
              tr: 'Stefan Müller salı günkü randevuyu iptal etmek zorundadır.',
              ar: 'السيد مولر يعتذر عن عدم تمكنه من الحضور يوم الثلاثاء.',
              es: 'El señor Müller no puede asistir a la cita del martes.'
            }
          },
          {
            id: 'a1_l_q5',
            question: '5. Der neue Terminvorschlag ist für Mittwoch um 10:00 Uhr.',
            options: ['Richtig', 'Falsch'],
            correctAnswer: 'Falsch',
            explanation: {
              en: 'The proposed new time is Wednesday at 15:00 (afternoon), not 10:00.',
              fa: 'زمان پیشنهادی جدید چهارشنبه ساعت ۱۵:۰۰ بعدازظهر است، نه ۱۰:۰۰ صبح.',
              prs: 'وقت پیشنهادی جدید چهارشنبه ساعت ۱۵ بعد از ظهر است.',
              tr: 'Yeni randevu teklifi çarşamba saat 15:00 içindir.',
              ar: 'الموعد المقترح الجديد هو الأربعاء في تمام الساعة 15:00.',
              es: 'La nueva propuesta es para el miércoles a las 15:00.'
            }
          }
        ]
      },
      {
        title: 'Teil 2A & 2B: Websites und Angebote im Internet',
        sourceType: 'Webseiten / Suchergebnisse',
        body: 'Situation A: Sie suchen ein günstiges Fahrrad für die Stadt.\nWebsite 1 (www.radprofi-muenchen.de): Neue Rennräder und Mountainbikes ab 950 Euro. Täglich Werkstattservice.\nWebsite 2 (www.gebrauchtrad-markt.de): Über 200 geprüfte City-Fahrräder aus zweiter Hand ab 60 Euro mit Garantie.\n\nSituation B: Sie möchten am Wochenende einen Deutsch-Intensivkurs buchen.\nWebsite 3 (www.sprachen-online.de): Nur Abendkurse von Montag bis Donnerstag für Berufstätige.\nWebsite 4 (www.vhs-wochenende.de): Samstag & Sonntag Intensivtraining für A1 und A2 mit Prüfungsvorbereitung.',
        questions: [
          {
            id: 'a1_l_q6',
            question: '6. Wo finden Sie ein preiswertes gebrauchtes Fahrrad?',
            options: ['a) www.radprofi-muenchen.de', 'b) www.gebrauchtrad-markt.de'],
            correctAnswer: 'b) www.gebrauchtrad-markt.de',
            explanation: {
              en: 'Website 2 offers second-hand city bikes starting from 60 Euros.',
              fa: 'وب‌سایت ۲ دوچرخه‌های دست دوم شهری تست‌شده را از ۶۰ یورو عرضه می‌کند.',
              prs: 'سایت دوم بایسکل‌های دست دوم ارزان می‌فروشد.',
              tr: '2. internet sitesi 60 Eurodan başlayan ikinci el bisikletler sunmaktadır.',
              ar: 'الموقع الثاني يقدم دراجات مستعملة تبدأ من 60 يورو.',
              es: 'La página web 2 ofrece bicicletas usadas a partir de 60 euros.'
            }
          },
          {
            id: 'a1_l_q7',
            question: '7. Wo können Sie am Samstag und Sonntag Deutsch lernen?',
            options: ['a) www.sprachen-online.de', 'b) www.vhs-wochenende.de'],
            correctAnswer: 'b) www.vhs-wochenende.de',
            explanation: {
              en: 'Website 4 provides Saturday and Sunday weekend intensive training.',
              fa: 'وب‌سایت ۴ دوره‌های فشرده شنبه و یکشنبه آخر هفته را ارائه می‌دهد.',
              prs: 'سایت چهارم در روزهای شنبه و یکشنبه صنف دایر می‌کند.',
              tr: '4. site cumartesi ve pazar hafta sonu yoğun kursu sunmaktadır.',
              ar: 'الموقع الرابع يقدم تدريباً مكثفاً يومي السبت والأحد.',
              es: 'La web 4 ofrece cursos intensivos los sábados y domingos.'
            }
          },
          {
            id: 'a1_l_q8',
            question: '8. Sie möchten eine Reparatur für Ihr Mountainbike. Welcher Link hilft?',
            options: ['a) www.radprofi-muenchen.de', 'b) www.gebrauchtrad-markt.de'],
            correctAnswer: 'a) www.radprofi-muenchen.de',
            explanation: {
              en: 'Website 1 explicitly advertises daily workshop service ("Täglich Werkstattservice").',
              fa: 'وب‌سایت ۱ خدمات روزانه تعمیرگاه و کارگاه دوچرخه ارائه می‌دهد.',
              prs: 'سایت اول خدمات روزانه ترمیم‌گاه بایسکل دارد.',
              tr: '1. site günlük tamir atölyesi hizmeti sunmaktadır.',
              ar: 'الموقع الأول يقدم خدمة ورشة التصليح يومياً.',
              es: 'La web 1 dispone de servicio de taller diario.'
            }
          },
          {
            id: 'a1_l_q9',
            question: '9. Sie haben nur werktags ab 18 Uhr Zeit zum Lernen. Welche Schule passt?',
            options: ['a) www.sprachen-online.de', 'b) www.vhs-wochenende.de'],
            correctAnswer: 'a) www.sprachen-online.de',
            explanation: {
              en: 'Website 3 offers evening courses Monday to Thursday for working professionals.',
              fa: 'وب‌سایت ۳ کلاس‌های عصرانه دوشنبه تا پنجشنبه برای شاغلین دارد.',
              prs: 'سایت اول برای کارمندان صنف‌های شامگاهی دارد.',
              tr: '3. site çalışanlar için pazartesiden perşembeye akşam kursları sunmaktadır.',
              ar: 'الموقع الثالث يقدم دورات مسائية من الاثنين إلى الخميس للموظفين.',
              es: 'La web 3 ofrece cursos nocturnos de lunes a jueves.'
            }
          },
          {
            id: 'a1_l_q10',
            question: '10. Ein Student sucht ein Fahrrad unter 100 Euro. Welches Angebot passt?',
            options: ['a) www.radprofi-muenchen.de', 'b) www.gebrauchtrad-markt.de'],
            correctAnswer: 'b) www.gebrauchtrad-markt.de',
            explanation: {
              en: 'Bikes start at 60 EUR on gebrauchtrad-markt, while radprofi starts at 950 EUR.',
              fa: 'در سایت ۲ قیمت‌ها از ۶۰ یورو شروع می‌شود، در حالی که در سایت اول از ۹۵۰ یورو است.',
              prs: 'سایت دوم از ۶۰ یورو شروع می‌شود و مناسب بودجه است.',
              tr: '2. sitede fiyatlar 60 Eurodan başlamaktadır.',
              ar: 'الأسعار في الموقع الثاني تبدأ من 60 يورو وهو مناسب للميزانية.',
              es: 'En la segunda web los precios empiezan en 60 euros.'
            }
          }
        ]
      },
      {
        title: 'Teil 3: Schilder, Aushänge und Hinweistexte',
        sourceType: 'Öffentliche Aushänge',
        body: 'Schild 1 (An der Bibliothekstür):\n"Öffnungszeiten in den Sommerferien: Montag bis Freitag von 09:00 bis 14:00 Uhr. Samstags geschlossen. Bücher-Rückgabe auch über den Automaten im Eingangsbereich möglich."\n\nSchild 2 (Im Bus):\n"Fahrkarten bitte vor Fahrtantritt entwerten. Der Einzeltarif gilt für maximal 90 Minuten in eine Richtung. Umsteigen ist erlaubt, Rundfahrten sind ausgeschlossen."\n\nSchild 3 (Beim Arzt):\n"Akutsprechstunde ohne Termin täglich von 08:00 bis 09:30 Uhr. Bitte bringen Sie Ihre Versichertenkarte mit."\n\nSchild 4 (Im Supermarkt):\n"Sehr geehrte Kunden, Kartenzahlung mit EC- und Kreditkarte ist ab 1 Euro möglich. Kontaktloses Bezahlen wird bevorzugt."',
        questions: [
          {
            id: 'a1_l_q11',
            question: '11. Die Bibliothek hat in den Sommerferien am Samstag geöffnet.',
            options: ['Richtig', 'Falsch'],
            correctAnswer: 'Falsch',
            explanation: {
              en: 'Schild 1 states clearly: "Samstags geschlossen".',
              fa: 'تابلو ۱ صریحاً بیان می‌کند: "شنبه‌ها تعطیل است".',
              prs: 'تابلو می‌گوید روزهای شنبه کتابخانه بسته است.',
              tr: '1. duyuru: "Cumartesi günleri kapalıdır" demektedir.',
              ar: 'توضح اللافتة 1: "مغلق أيام السبت".',
              es: 'El cartel 1 indica claramente que los sábados está cerrado.'
            }
          },
          {
            id: 'a1_l_q12',
            question: '12. Man kann Bücher auch abgeben, wenn die Bibliothek zu ist.',
            options: ['Richtig', 'Falsch'],
            correctAnswer: 'Richtig',
            explanation: {
              en: 'Notice mentions book return via machine in entrance area ("Bücher-Rückgabe auch über den Automaten").',
              fa: 'امکان تحویل کتاب از طریق دستگاه خودکار ورودی وجود دارد.',
              prs: 'کتاب‌ها را می‌توان از طریق دستگاه اتومات بازگرداند.',
              tr: 'Girişteki iade otomatı sayesinde kütüphane kapalıyken de kitap teslim edilebilir.',
              ar: 'يمكن إرجاع الكتب عبر الجهاز الآلي في المدخل.',
              es: 'Es posible devolver libros a través de la máquina de la entrada.'
            }
          },
          {
            id: 'a1_l_q13',
            question: '13. Im Bus darf man mit dem Einzelticket umsteigen.',
            options: ['Richtig', 'Falsch'],
            correctAnswer: 'Richtig',
            explanation: {
              en: 'Schild 2 says: "Umsteigen ist erlaubt".',
              fa: 'تابلو ۲ ذکر می‌کند: "عوض کردن اتوبوس/خط مجاز است".',
              prs: 'تبدیل کردن بس در مسیر مجاز است.',
              tr: '2. duyuruda: "Aktarma serbesttir" yazmaktadır.',
              ar: 'تنص اللافتة 2 على أن تغيير الحافلة مسموح.',
              es: 'El cartel 2 señala que el transbordo está permitido.'
            }
          },
          {
            id: 'a1_l_q14',
            question: '14. Beim Arzt kann man um 11:00 Uhr ohne Voranmeldung kommen.',
            options: ['Richtig', 'Falsch'],
            correctAnswer: 'Falsch',
            explanation: {
              en: 'Walk-in hours without appointment are only from 08:00 to 09:30.',
              fa: 'ویزیت بدون وقت قبلی فقط از ساعت ۸:۰۰ تا ۹:۳۰ صبح است.',
              prs: 'نوبت بدون وقت قبلی صرف از ۸ تا ۹:۳۰ صبح است.',
              tr: 'Randevusuz muayene saatleri sadece 08:00 - 09:30 arasındadır.',
              ar: 'المعاينة دون موعد مسبق تكون فقط من الساعة 08:00 حتى 09:30.',
              es: 'Las consultas sin cita previa solo se atienden de 08:00 a 09:30.'
            }
          },
          {
            id: 'a1_l_q15',
            question: '15. Im Supermarkt kann man Beträge ab 1 Euro mit Karte bezahlen.',
            options: ['Richtig', 'Falsch'],
            correctAnswer: 'Richtig',
            explanation: {
              en: 'Notice affirms: "Kartenzahlung (...) ist ab 1 Euro möglich".',
              fa: 'اطلاعیه تایید می‌کند: پرداخت با کارت از ۱ یورو به بالا امکان‌پذیر است.',
              prs: 'پرداخت با کارت بانکی از ۱ یورو ممکن است.',
              tr: 'Duyuruda: "1 Eurodan itibaren kartla ödeme yapılabilir" yazmaktadır.',
              ar: 'تؤكد اللافتة إمكانية الدفع بالبطاقة المصرفية ابتداءً من 1 يورو.',
              es: 'El aviso confirma que el pago con tarjeta es posible a partir de 1 euro.'
            }
          }
        ]
      }
    ]
  },
  hoeren: {
    title: 'Modul Hören (20 Minuten • 15 Aufgaben)',
    durationMinutes: 20,
    audioItems: [
      {
        id: 'a1_h_item1',
        title: 'Teil 1: Kurze Alltagsdialoge (Fragen 1 bis 6 • Zweimal hören)',
        situation: 'Alltägliche Gesprächsszenarien (Bahnhof, Einkauf, Arzt, Restaurant)',
        transcript: 'Dialog 1: "Guten Tag, ich möchte bitte zwei Fahrkarten nach Köln." - "Einfach oder hin und zurück?" - "Einfach bitte. Zweite Klasse." - "Das macht zusammen 54 Euro."\n\nDialog 2: "Entschuldigung, wo finde ich die Milch?" - "Gehen Sie geradeaus und dann links neben dem Kühlregal für Käse."\n\nDialog 3: "Wann hat Herr Dr. Braun heute Sprechstunde?" - "Heute Vormittag ist er im Krankenhaus. In der Praxis ist er wieder ab 15:30 Uhr erreichbar."\n\nDialog 4: "Was darf ich Ihnen bringen?" - "Ich hätte gerne ein Schnitzel mit Pommes und dazu ein stilles Wasser bitte."\n\nDialog 5: "Wann fährt unser Bus nach Salzburg ab?" - "Der Fahrplan sagt 14:15 Uhr, aber auf der Anzeigetafel steht 14:30 Uhr wegen Stau."\n\nDialog 6: "Wie viel kostet dieses weiße Hemd?" - "Das ist im Sonderangebot für 19 Euro 99 statt 35 Euro."',
        questions: [
          {
            id: 'a1_h_q1',
            question: '1. Wie viel kosten die beiden Fahrkarten nach Köln?',
            options: ['27 Euro', '54 Euro', '64 Euro'],
            correctAnswer: '54 Euro',
            explanation: {
              en: 'The seller states: "Das macht zusammen 54 Euro."',
              fa: 'فروشنده می‌گوید: "در مجموع می‌شود ۵۴ یورو."',
              prs: 'فروشنده گفت مجموعه تکت‌ها ۵۴ یورو می‌شود.',
              tr: 'Satıcı toplam 54 Euro olduğunu söylemektedir.',
              ar: 'يقول البائع: "المجموع معاً 54 يورو".',
              es: 'El dependiente indica que en total son 54 euros.'
            }
          },
          {
            id: 'a1_h_q2',
            question: '2. Wo befindet sich die Milch im Supermarkt?',
            options: ['Rechts am Eingang', 'Links neben dem Käse', 'Im ersten Stock'],
            correctAnswer: 'Links neben dem Käse',
            explanation: {
              en: 'Directions given: "geradeaus und dann links neben dem Kühlregal für Käse".',
              fa: 'آدرس داده‌شده: "مستقیم و سپس سمت چپ در کنار قفسه پنیر".',
              prs: 'مستقیم و بعد طرف چپ در کنار پنیر.',
              tr: 'Yol tarifi: "düz gidin ve peynir dolabının solunda".',
              ar: 'التوجيه المعطى: "إلى الأمام مباشرة ثم يساراً بجانب ثلاجة الجبن".',
              es: 'Indicación: "todo recto y a la izquierda junto al queso".'
            }
          },
          {
            id: 'a1_h_q3',
            question: '3. Ab wann ist Dr. Braun in der Praxis erreichbar?',
            options: ['Ab 10:00 Uhr', 'Ab 14:00 Uhr', 'Ab 15:30 Uhr'],
            correctAnswer: 'Ab 15:30 Uhr',
            explanation: {
              en: 'Transcript states: "... in der Praxis ist er wieder ab 15:30 Uhr erreichbar."',
              fa: 'در متن آمده است: "... در مطب از ساعت ۱۵:۳۰ بعدازظهر در دسترس خواهد بود."',
              prs: 'داکتر از ساعت ۱۵:۳۰ بعد از ظهر در معاینه‌خانه حاضر است.',
              tr: 'Doktor muayenehanede 15:30\'dan itibaren bulunmaktadır.',
              ar: 'الطبيب متاح في العيادة ابتداءً من الساعة 15:30.',
              es: 'El médico está en la consulta a partir de las 15:30.'
            }
          },
          {
            id: 'a1_h_q4',
            question: '4. Was bestellt der Gast zu trinken?',
            options: ['Einen Apfelsaft', 'Ein stilles Wasser', 'Eine Cola'],
            correctAnswer: 'Ein stilles Wasser',
            explanation: {
              en: 'Customer orders: "... und dazu ein stilles Wasser bitte."',
              fa: 'مشتری سفارش می‌دهد: "... و همراه آن یک آب بدون گاز لطفاً."',
              prs: 'مشتری یک آب معدنی بدون گاز فرمایش داد.',
              tr: 'Müşteri gazsız su (stilles Wasser) sipariş etmiştir.',
              ar: 'طلب الزبون ماءً غير فوار.',
              es: 'El cliente pide agua sin gas.'
            }
          },
          {
            id: 'a1_h_q5',
            question: '5. Wann fährt der Bus tatsächlich ab?',
            options: ['14:15 Uhr', '14:30 Uhr', '15:00 Uhr'],
            correctAnswer: '14:30 Uhr',
            explanation: {
              en: 'Delayed due to traffic jam: "auf der Anzeigetafel steht 14:30 Uhr wegen Stau."',
              fa: 'به دلیل ترافیک حرکت در تابلوی اعلانات ساعت ۱۴:۳۰ اعلام شده است.',
              prs: 'بس به علت راهبندان ساعت ۱۴:۳۰ حرکت می‌کند.',
              tr: 'Trafik sıkışıklığı nedeniyle kalkış panoda 14:30 olarak görünmektedir.',
              ar: 'يغادر الباص فعلياً الساعة 14:30 بسبب الازدحام.',
              es: 'El autobús saldrá a las 14:30 por atascos.'
            }
          },
          {
            id: 'a1_h_q6',
            question: '6. Was kostet das Hemd im Sonderangebot?',
            options: ['19,99 Euro', '25,00 Euro', '35,00 Euro'],
            correctAnswer: '19,99 Euro',
            explanation: {
              en: 'Price announced: "19 Euro 99 statt 35 Euro".',
              fa: 'قیمت اعلام‌شده در حراجی: ۱۹.۹۹ یورو به جای ۳۵ یورو.',
              prs: 'قیمت در حراجی ۱۹.۹۹ یورو است.',
              tr: 'İndirimli fiyat 19,99 Eurodur.',
              ar: 'سعر العرض الخاص هو 19.99 يورو.',
              es: 'El precio de oferta es de 19,99 euros.'
            }
          }
        ]
      },
      {
        id: 'a1_h_item2',
        title: 'Teil 2: Öffentliche Durchsagen (Fragen 7 bis 10 • Einmal hören!)',
        situation: 'Lautsprecherdurchsagen an Bahnhof, Flughafen, Kaufhaus und U-Bahn',
        transcript: 'Durchsage 7 (Hauptbahnhof):\n"Achtung an Gleis 3: Der Regional-Express nach Augsburg mit planmäßiger Abfahrt um 11:20 Uhr fällt heute wegen einer technischen Störung aus. Fahrgäste nutzen bitte den nachfolgenden Zug um 11:50 Uhr von Gleis 5."\n\nDurchsage 8 (Flughafen):\n"Letzter Aufruf für Fluggäste des Lufthansa-Fluges LH 450 nach New York: Bitte begeben Sie sich unverzüglich zu Flugsteig B 24. Das Einsteigen wird in Kürze beendet."\n\nDurchsage 9 (Kaufhaus):\n"Liebe Kundinnen und Kunden, unser Restaurant im 4. Obergeschoss schließt heute um 18:00 Uhr. Die Verkaufsabteilungen stehen Ihnen bis 20:00 Uhr zur Verfügung."\n\nDurchsage 10 (S-Bahn):\n"Wegen Bauarbeiten verkehren die Züge der Linie S2 am Wochenende nur bis Ostbahnhof. Zwischen Ostbahnhof und Flughafen ist ein Schienenersatzverkehr mit Bussen eingerichtet."',
        questions: [
          {
            id: 'a1_h_q7',
            question: '7. Der Zug nach Augsburg um 11:20 Uhr fährt heute nicht.',
            options: ['Richtig', 'Falsch'],
            correctAnswer: 'Richtig',
            explanation: {
              en: 'Announcement confirms: "... fällt heute wegen einer technischen Störung aus."',
              fa: 'اعلامیه تایید می‌کند: به علت نقص فنی قطار ساعت ۱۱:۲۰ لغو شده است.',
              prs: 'قطار ساعت ۱۱:۲۰ به دلیل خرابی حرکت نمی‌کند.',
              tr: 'Teknik arıza nedeniyle 11:20 treni iptal edilmiştir.',
              ar: 'تم إلغاء القطار المتجه إلى أوغسبورغ في الساعة 11:20 لعطل فني.',
              es: 'El tren de las 11:20 ha sido cancelado por avería técnica.'
            }
          },
          {
            id: 'a1_h_q8',
            question: '8. Fluggäste nach New York müssen zu Flugsteig A 12 gehen.',
            options: ['Richtig', 'Falsch'],
            correctAnswer: 'Falsch',
            explanation: {
              en: 'The speaker explicitly calls passengers to gate B 24 ("Flugsteig B 24").',
              fa: 'گوینده مسافران را به گیت B 24 فرا می‌خواند، نه A 12.',
              prs: 'مسافران باید به خروجی B 24 بروند.',
              tr: 'Yolcuların B 24 kapısına gitmeleri anons edilmiştir.',
              ar: 'المطلوب من الركاب التوجه إلى البوابة B 24 وليس A 12.',
              es: 'Se solicita a los pasajeros dirigirse a la puerta B 24.'
            }
          },
          {
            id: 'a1_h_q9',
            question: '9. Das gesamte Kaufhaus schließt heute bereits um 18:00 Uhr.',
            options: ['Richtig', 'Falsch'],
            correctAnswer: 'Falsch',
            explanation: {
              en: 'Only the restaurant closes at 18:00; shopping floors remain open until 20:00.',
              fa: 'تنها رستوران در طبقه چهارم ساعت ۱۸:۰۰ می‌بندد؛ بخش‌های فروش تا ۲۰:۰۰ باز هستند.',
              prs: 'تنها رستورانت ساعت ۱۸ بسته می‌شود و فروشگاه تا ۲۰ باز است.',
              tr: 'Sadece restoran 18:00\'de kapanmaktadır, mağaza 20:00\'ye kadar açıktır.',
              ar: 'المطعم فقط يغلق في 18:00، بينما تستمر بقية الأقسام حتى 20:00.',
              es: 'Solo el restaurante cierra a las 18:00; el centro abre hasta las 20:00.'
            }
          },
          {
            id: 'a1_h_q10',
            question: '10. Zwischen Ostbahnhof und Flughafen fahren am Wochenende Busse.',
            options: ['Richtig', 'Falsch'],
            correctAnswer: 'Richtig',
            explanation: {
              en: 'Replacement bus service established: "Schienenersatzverkehr mit Bussen eingerichtet."',
              fa: 'اتوبوس‌های جایگزین برای مسیر ایستگاه شرق تا فرودگاه تعیین شده‌اند.',
              prs: 'بس‌های جایگزین قطار در این مسیر فعالیت می‌کنند.',
              tr: 'Havalimanı ile doğu istasyonu arasında otobüslerle yedek sefer konulmuştur.',
              ar: 'تم توفير حافلات بديلة للقطار بين المحطة الشرقية والمطار.',
              es: 'Se ha habilitado servicio de autobuses sustitutorios.'
            }
          }
        ]
      },
      {
        id: 'a1_h_item3',
        title: 'Teil 3: Telefonansagen & Anrufbeantworter (Fragen 11 bis 15 • Zweimal hören)',
        situation: 'Nachrichten auf dem Anrufbeantworter und automatische Telefonansagen',
        transcript: 'Ansage 11 (Arztpraxis):\n"Hier ist die Praxis Dr. Schneider. Unsere Praxis ist vom 1. bis zum 14. August wegen Urlaubs geschlossen. Die Vertretung übernimmt Frau Dr. König in der Goethestraße 12, Telefon: 089 456789."\n\nAnsage 12 (Freundin Julia):\n"Hallo David, hier ist Julia. Du, unser Kinobesuch heute Abend klappt leider nicht um 18:00 Uhr, weil ich länger im Büro arbeiten muss. Können wir die Spätvorstellung um 20:45 Uhr nehmen? Melde dich bitte kurz."\n\nAnsage 13 (Autowerkstatt):\n"Guten Tag Herr Schmidt, hier Autohaus Becker. Ihr Wagen ist fertig repariert und kann ab heute Nachmittag um 16 Uhr abgeholt werden. Die Rechnung beträgt 245 Euro."\n\nAnsage 14 (Sprachschule):\n"Herzlich willkommen beim Institut für Sprachen. Für Auskünfte zu Deutschkursen drücken Sie bitte die 1. Für Englischkurse die 2. Für Prüfungsanmeldungen die 3."\n\nAnsage 15 (Sportverein):\n"Hallo Maria, hier ist Sandra vom Sportverein. Unser Fitnesstraining findet heute nicht in der Halle, sondern draußen im Schlosspark statt. Bitte bring eine Gymnastikmatte mit!"',
        questions: [
          {
            id: 'a1_h_q11',
            question: '11. Wer vertritt Dr. Schneider während des Urlaubs?',
            options: ['Dr. Weber', 'Dr. König', 'Dr. Becker'],
            correctAnswer: 'Dr. König',
            explanation: {
              en: 'The answering machine states: "Die Vertretung übernimmt Frau Dr. König".',
              fa: 'پیغام‌گیر اعلام می‌کند: "پزشک جانشین خانم دکتر کونیگ است".',
              prs: 'داکتر جانشین خانم داکتر کونیگ معرفی شد.',
              tr: 'Vekil doktorun Dr. König olduğu belirtilmektedir.',
              ar: 'تسجيل العيادة يذكر أن الطبيبة البديلة هي الدكتورة كونيغ.',
              es: 'La sustituta durante las vacaciones es la doctora König.'
            }
          },
          {
            id: 'a1_h_q12',
            question: '12. Um wie viel Uhr möchte Julia ins Kino gehen?',
            options: ['18:00 Uhr', '19:30 Uhr', '20:45 Uhr'],
            correctAnswer: '20:45 Uhr',
            explanation: {
              en: 'Julia proposes: "Können wir die Spätvorstellung um 20:45 Uhr nehmen?"',
              fa: 'جولیا پیشنهاد می‌دهد به سانس ساعت ۲۰:۴۵ بروند.',
              prs: 'جولیا سانس ساعت ۲۰:۴۵ را پیشنهاد می‌کند.',
              tr: 'Julia saat 20:45 seansını önermektedir.',
              ar: 'تقترح جوليا الذهاب في عرض الساعة 20:45.',
              es: 'Julia propone ir a la sesión de las 20:45.'
            }
          },
          {
            id: 'a1_h_q13',
            question: '13. Ab wann kann Herr Schmidt sein Auto abholen?',
            options: ['Ab 14:00 Uhr', 'Ab 16:00 Uhr', 'Erst morgen'],
            correctAnswer: 'Ab 16:00 Uhr',
            explanation: {
              en: 'Auto repair shop says: "... ab heute Nachmittag um 16 Uhr abgeholt werden."',
              fa: 'تعمیرگاه اعلام می‌کند: خودرو از ساعت ۱۶:۰۰ عصر آماده تحویل است.',
              prs: 'موتر از ساعت ۱۶:۰۰ بعد از ظهر آماده تحویل است.',
              tr: 'Araç bugün saat 16:00\'dan itibaren teslim alınabilir.',
              ar: 'يمكن استلام السيارة اليوم ابتداءً من الساعة 16:00.',
              es: 'El coche puede recogerse hoy a partir de las 16:00.'
            }
          },
          {
            id: 'a1_h_q14',
            question: '14. Welche Taste drückt man für Deutschkurse?',
            options: ['Taste 1', 'Taste 2', 'Taste 3'],
            correctAnswer: 'Taste 1',
            explanation: {
              en: 'Voice prompt: "Für Auskünfte zu Deutschkursen drücken Sie bitte die 1."',
              fa: 'راهنمای صوتی: برای اطلاعات دوره‌های زبان آلمانی عدد ۱ را فشار دهید.',
              prs: 'برای معلومات کورس آلمانی عدد ۱ را فشار دهید.',
              tr: 'Almanca kursları için 1 tuşuna basılması istenmektedir.',
              ar: 'للحصول على معلومات دورات اللغة الألمانية اضغط 1.',
              es: 'Para información de cursos de alemán pulse la tecla 1.'
            }
          },
          {
            id: 'a1_h_q15',
            question: '15. Wo findet das Fitnesstraining heute statt?',
            options: ['In der Sporthalle', 'Im Fitnessstudio', 'Draußen im Schlosspark'],
            correctAnswer: 'Draußen im Schlosspark',
            explanation: {
              en: 'Sandra announces training is outdoors in Schlosspark ("draußen im Schlosspark").',
              fa: 'تمرین امروز در فضای باز در پارک قصر برگزار می‌شود.',
              prs: 'تمرین ورزشی در پارک عمومی برگزار می‌شود.',
              tr: 'Antrenman kapalı salonda değil, Schlosspark parkında yapılacaktır.',
              ar: 'التدريب الرياضي يقام اليوم في الهواء الطلق بحديقة القصر.',
              es: 'El entrenamiento se realiza al aire libre en el parque Schlosspark.'
            }
          }
        ]
      }
    ]
  },
  schreiben: {
    title: 'Modul Schreiben (20 Minuten • 2 Teile)',
    durationMinutes: 20,
    taskType: 'Teil 1: Formular ausfüllen (5 Punkte) & Teil 2: E-Mail verfassen (10 Punkte)',
    situation: 'Teil 1: Ihre Freundin Eva Novak möchte sich für eine Stadtführung in Dresden anmelden. Helfen Sie ihr beim Ausfüllen des Formulars.\nTeil 2: Sie können am Sprachunterricht nächste Woche nicht teilnehmen und schreiben Ihrer Lehrerin Frau Schmidt.',
    prompt: 'Teil 2 Schreibaufgabe:\nSchreiben Sie eine Entschuldigungs-E-Mail an Ihre Kursleiterin Frau Schmidt:\n1. Grund: Warum können Sie nicht zum Kurs kommen? (Krankheit oder beruflicher Termin)\n2. Wie lange: Von wann bis wann fehlen Sie?\n3. Hausaufgaben: Bitten Sie um die Hausaufgaben per E-Mail.',
    guidingPoints: [
      '1. Grund für das Fehlen angeben',
      '2. Genaue Dauer des Fehlens mitteilen',
      '3. Höfliche Bitte um Hausaufgaben und Unterrichtsmaterial'
    ],
    targetWordCount: 'ca. 30 bis 35 Wörter',
    sampleSolution: 'Sehr geehrte Frau Schmidt,\n\nich kann nächste Woche von Montag bis Mittwoch leider nicht zum Deutschkurs kommen, weil ich beruflich nach Berlin reisen muss.\n\nKönnten Sie mir bitte die Hausaufgaben und Übungsblätter per E-Mail schicken?\n\nAm Donnerstag bin ich wieder im Unterricht.\nVielen Dank für Ihr Verständnis.\n\nMit freundlichen Grüßen,\nSayed Bashir',
    scoringCriteria: {
      en: 'Teil 1: 5 correct form entries (1 pt each). Teil 2: 3 points for covering all 3 guiding points + 2 points for communicative design + 5 points for grammatical accuracy = Total 15 points.',
      fa: 'بخش ۱: ۵ ورودی صحیح فرم (هر کدام ۱ نمره). بخش ۲: ۳ نمره برای پوشش ۳ نکته + ۲ نمره ساختار نامه‌نگاری + ۵ نمره درستی گرامری و واژگانی.',
      prs: 'بخش ۱ دارای ۵ نمره برای فرم، بخش ۲ دارای ۱۰ نمره برای ایمیل استاندارد.',
      tr: '1. Bölüm 5 form bilgisi, 2. Bölüm 3 yönlendirici madde ve gramer doğruluğu (Toplam 15 puan).',
      ar: 'القسم 1: 5 نقاط للاستمارة. القسم 2: 10 نقاط للبريد وفق المعايير الثلاثة والسلامة اللغوية.',
      es: 'Parte 1: 5 puntos de formulario. Parte 2: 10 puntos de correo cumpliendo los 3 puntos guía.'
    }
  },
  sprechen: {
    title: 'Modul Sprechen (15 Minuten • Paarprüfung in 3 Teilen)',
    durationMinutes: 15,
    teil1: {
      name: 'Teil 1: Sich vorstellen & buchstabieren (3–4 Minuten)',
      instruction: {
        en: 'Introduce yourself using personal prompts (Name, Age, Country, City, Languages, Profession, Hobby). Spell your surname and dictate your telephone number when asked.',
        fa: 'خود را بر اساس موضوعات اصلی (نام، سن، کشور، محل سکونت، زبان‌ها، شغل، سرگرمی) معرفی کنید. در صورت درخواست، نام خانوادگی خود را هجی کرده و شماره تلفن یا کدپستی را بگویید.',
        prs: 'خود را معرفی کنید، تخلص تان را هجی نمایید و شماره تماس را بگویید.',
        tr: 'Kendinizi tanıtın; soyadınızı harf harf kodlayın ve telefon numaranızı söyleyin.',
        ar: 'قدم نفسك بذكر بياناتك الشخصية، وقم بتهجئة لقبك وذكر رقم هاتفك عند الطلب.',
        es: 'Preséntate con tus datos, deletrea tu apellido e indica tu número de teléfono.'
      },
      prompts: ['Name', 'Alter', 'Land', 'Wohnort', 'Sprachen', 'Beruf', 'Hobbys', 'Buchstabieren', 'Telefonnummer'],
      sampleResponse: 'Guten Tag! Mein Name ist Sayed Bashir. Ich bin 28 Jahre alt und komme aus Afghanistan. Ich wohne seit zwei Jahren in München. Meine Muttersprachen sind Dari und Pashto, und ich lerne Deutsch und spreche Englisch. Ich arbeite als Elektriker. Meine Hobbys sind Fußball spielen und deutsche Musik hören.\n\nPrüfer: "Wie buchstabiert man Ihren Nachnamen?"\nKandidat: "B - A - S - H - I - R."\n\nPrüfer: "Und wie lautet Ihre Handynummer?"\nKandidat: "Meine Nummer ist 0176 45 89 23 10."'
    },
    teil2: {
      name: 'Teil 2: Um Informationen bitten und Informationen geben (5 Minuten)',
      instruction: {
        en: 'Draw two cards with a topic and word prompt. Formulate a grammatically correct question for your partner and answer their question.',
        fa: 'دو کارت بردارید که روی آنها یک موضوع عمومی و یک کلمه مشخص نوشته شده است. با استفاده از آن کلمه یک پرسش طرح کنید و به پرسش همتای خود پاسخ دهید.',
        prs: 'با کلمات روی کارت از پارتنر خود سوال بپرسید و به سوال او پاسخ دهید.',
        tr: 'Karttaki konu ve kelimeyle partnerinize soru yöneltin ve gelen soruyu yanıtlayın.',
        ar: 'اطرح سؤالاً على زميلك باستخدام الكلمة المحددة في البطاقة وأجب عن سؤاله.',
        es: 'Formula una pregunta a tu compañero con la tarjeta temática y responde a la suya.'
      },
      topicCards: [
        'Thema: Einkaufen - Wort: Preis (Wie viel kostet der Apfel?)',
        'Thema: Wohnen - Wort: Balkon (Hat deine Wohnung einen Balkon?)',
        'Thema: Freizeit - Wort: Wochenende (Was machst du am Wochenende?)',
        'Thema: Verkehr - Wort: Bahnhof (Wo ist bitte der Hauptbahnhof?)'
      ],
      sampleResponse: 'Kandidat A: "Entschuldigung, wie viel kostet ein Kilo Orangen hier?"\nKandidat B: "Ein Kilo Orangen kostet 2 Euro 49."\n\nKandidat B: "Hast du in deiner Wohnung einen Balkon?"\nKandidat A: "Ja, meine Wohnung hat einen kleinen sonnigen Balkon."'
    },
    teil3: {
      name: 'Teil 3: Bitten formulieren und darauf reagieren (5 Minuten)',
      instruction: {
        en: 'Draw an everyday object picture card (e.g., a glass of water, dictionary, open window). Formulate a polite imperative or modal request, and respond appropriately.',
        fa: 'یک کارت تصویری شامل اشیاء روزمره (مانند لیوان آب، لغت‌نامه، پنجره باز) بردارید. یک خواهش مؤدبانه بسازید و همتای شما با عبارات متداول پاسخ می‌دهد.',
        prs: 'یک کارت تصویر بردارید و خواهش مؤدبانه مطرح نمایید.',
        tr: 'Resimli karta göre kibar bir rica cümlesi kurun ve gelen ricaya uygun karşılık verin.',
        ar: 'صغ طلباً مهذباً انطلاقاً من بطاقة الصورة المعطاة ورد على طلب زميلك.',
        es: 'Formula una petición cortés a partir de la tarjeta con objeto y responde.'
      },
      planningScenario: 'Bildkarten: Glas Wasser, Wörterbuch, Fenster, Stift, Rechnung',
      discussionPoints: ['Höfliche Bitten mit "Können Sie bitte..." oder "Geben Sie mir bitte..."', 'Positive Reaktionen wie "Ja, natürlich", "Gern", "Hier bitte"', 'Höfliche Verneinungen'],
      sampleResponse: 'Kandidat A (zeigt Karte: Wörterbuch): "Könntest du mir bitte dein Deutsch-Wörterbuch für fünf Minuten leihen?"\nKandidat B: "Ja, natürlich, sehr gerne! Hier ist es."\n\nKandidat B (zeigt Karte: Fenster): "Es ist sehr kalt hier. Machst du bitte das Fenster zu?"\nKandidat A: "Klar, ich mache es sofort zu."'
    }
  }
};

// =========================================================================
// TELC DEUTSCH A1 (STANDARD: 70 MINUTEN)
// Lesen: 25 Min (15 Fragen) | Hören: 20 Min (15 Fragen) | Schreiben: 15 Min | Sprechen: 15 Min
// =========================================================================
export const EXAM_TELC_A1: StandardizedExam = {
  id: 'exam_telc_a1',
  title: 'telc Deutsch A1 (Offizielle Standardprüfung)',
  standard: 'telc',
  level: 'A1.1',
  totalDurationMinutes: 70,
  passingScore: '60% (36 / 60 Punkte)',
  strategy: {
    level: 'A1.1',
    timeManagement: [
      {
        section: 'Lesen (Reading) - 15 Fragen',
        allocatedMinutes: 25,
        tip: {
          en: '15 questions in 25 minutes. Teil 1 (5 questions): Notices and brief notes. Teil 2 (5 questions): Websites and advertisements. Teil 3 (5 questions): Public information boards.',
          fa: '۱۵ سوال در ۲۵ دقیقه. بخش ۱ یادداشت‌های کوتاه، بخش ۲ وبسایت‌ها و آگهی‌ها، بخش ۳ تابلوهای اطلاع‌رسانی عمومی.',
          prs: '۱۵ سوال در ۲۵ دقیقه شامل آگهی‌ها و تابلوهای رهنمایی.',
          tr: '25 dakikada 15 soru. İlanlar, web siteleri ve tabelalar.',
          ar: '15 سؤالاً في 25 دقيقة. إعلانات، مواقع إلكترونية ولوحات إرشادية.',
          es: '15 preguntas en 25 minutos distribuidas en notas, anuncios y paneles informativos.'
        }
      },
      {
        section: 'Hören (Listening) - 15 Fragen',
        allocatedMinutes: 20,
        tip: {
          en: '15 tasks in 20 minutes. Teil 1 (6 everyday dialogues). Teil 2 (4 station/airport announcements). Teil 3 (5 phone messages).',
          fa: '۱۵ سوال در ۲۰ دقیقه. بخش ۱ مکالمات روزمره، بخش ۲ پیام‌های بلندگو، بخش ۳ پیغام‌های تلفنی.',
          prs: '۱۵ سوال در ۲۰ دقیقه بخش‌های صوتی.',
          tr: '20 dakikada 15 dinleme sorusu.',
          ar: '15 سؤال استماع في 20 دقيقة.',
          es: '15 preguntas de comprensión auditiva en 20 minutos.'
        }
      },
      {
        section: 'Schreiben (Writing) - Formular & Kurznotiz',
        allocatedMinutes: 15,
        tip: {
          en: 'Teil 1: Fill in a 5-item registration form. Teil 2: Write a short polite email (approx. 30 words) with all 3 prompt points.',
          fa: 'بخش ۱: تکمیل فرم ۵ قسمتی. بخش ۲: نگارش ایمیل کوتاه مؤدبانه (حدود ۳۰ کلمه) با پوشش هر ۳ نکته.',
          prs: 'بخش ۱ خانه پری فورم و بخش ۲ نوشتن ایمیل کوتاه ۳۰ کلمه‌ای.',
          tr: 'Form doldurma ve kısa nezaket e-postası (yaklaşık 30 kelime).',
          ar: 'تعبئة استمارة من 5 حقول وكتابة رسالة بريد إلكتروني قصيرة (حوالي 30 كلمة).',
          es: 'Rellenar un formulario y redactar un correo breve de cortesía (aprox. 30 palabras).'
        }
      },
      {
        section: 'Sprechen (Speaking) - 3 Teile',
        allocatedMinutes: 15,
        tip: {
          en: 'Teil 1: Self-introduction + spell name + say telephone number. Teil 2: Ask questions with prompt cards. Teil 3: Formulate polite requests.',
          fa: 'بخش ۱: معرفی خود + هجی کردن نام + شماره تلفن. بخش ۲: طرح سوال با کارت‌ها. بخش ۳: خواهش مؤدبانه.',
          prs: 'معرفی خود، هجی کردن نام و خواهش‌های مؤدبانه.',
          tr: 'Kendini tanıtma, isim heceleme, kartlarla soru sorma ve ricalar.',
          ar: 'التعريف بالنفس، تهجئة الاسم، وطرح الأسئلة والطلبات المهذبة.',
          es: 'Presentación personal, deletreo y formulación de preguntas y peticiones.'
        }
      }
    ],
    stepByStepStrategies: [
      {
        title: 'telc A1 Lesestrategie: Schlüsselwörter schnell finden',
        steps: [
          {
            en: 'Read the question first and mark keywords (e.g. names, times, cities, prices).',
            fa: 'ابتدا سوال را بخوانید و کلمات کلیدی (ساعت، نام‌ها، شهرها، قیمت‌ها) را علامت بزنید.',
            prs: 'اول سوال را بخوانید و کلمات کلیدی را مشخص نمایید.',
            tr: 'Önce soruyu okuyun ve anahtar kelimeleri belirleyin.',
            ar: 'اقرأ السؤال أولاً وحدد الكلمات المفتاحية كالأوقات والأسماء.',
            es: 'Lee la pregunta primero y subraya las palabras clave (horas, nombres, precios).'
          },
          {
            en: 'Scan the short text specifically for these keywords or their synonyms.',
            fa: 'متن کوتاه را به طور هدفمند برای یافتن این کلمات یا مترادف‌هایشان مرور کنید.',
            prs: 'متن را برای پیدا کردن کلمات کلیدی جستجو کنید.',
            tr: 'Metni bu anahtar kelimeler veya eş anlamlıları için tarayın.',
            ar: 'امسح النص بحثاً عن تلك الكلمات أو مرادفاتها.',
            es: 'Escanea el texto breve en busca de estas palabras o sinónimos.'
          }
        ]
      }
    ],
    commonMistakes: [
      {
        mistake: 'Vergessen, das Verb auf Position 2 zu setzen.',
        correction: 'Heute lerne ich Deutsch.',
        explanation: {
          en: 'In German declarative sentences, the conjugated verb is always in Position 2.',
          fa: 'در جملات خبری آلمانی، فعل صرف‌شده همواره در جایگاه دوم قرار دارد.',
          prs: 'فعل همیشه در جایگاه دوم است.',
          tr: 'Düz cümlelerde çekimli fiil daima 2. sıradadır.',
          ar: 'في الجملة الخبرية الألمانية يأتي الفعل دائماً في الموقع الثاني.',
          es: 'En oraciones afirmativas, el verbo conjugado siempre va en 2ª posición.'
        }
      }
    ]
  },
  lesen: {
    title: 'Modul Lesen (Reading Comprehension)',
    durationMinutes: 25,
    texts: [
      {
        title: 'Teil 1: Kurze Mitteilungen und Notizen im Alltag (Fragen 1–5)',
        sourceType: 'Alltagsnotizen und SMS',
        body: 'Text 1:\n"Liebe Sandra, ich bin heute ab 16:30 Uhr im Büro erreichbar. Bitte bring mir die Kursunterlagen mit. Mein Drucker ist leider kaputt. Danke, Petra."\n\nText 2:\n"Lieber Thomas, vergiss bitte nicht: Unser Deutschkurs beginnt am Montag nicht um 18:00 Uhr, sondern erst um 18:30 Uhr im Raum 12. Bis Montag! Stefan."',
        questions: [
          {
            id: 'telc_a1_l_q1',
            question: '1. Petra ist heute Nachmittag ab 16:30 Uhr im Büro erreichbar.',
            options: ['Richtig', 'Falsch'],
            correctAnswer: 'Richtig',
            explanation: {
              en: 'Text 1 explicitly states: "ich bin heute ab 16:30 Uhr im Büro erreichbar."',
              fa: 'در متن ۱ صراحتاً آمده است که پترا از ساعت ۱۶:۳۰ در دفتر حضور دارد.',
              prs: 'در متن آمده که پترا از ۴:۳۰ در دفتر است.',
              tr: 'Metinde saat 16:30\'dan itibaren ofiste olacağı belirtilmiştir.',
              ar: 'يذكر النص بوضوح أنها متاحة بالمكتب من الساعة 16:30.',
              es: 'El texto indica claramente que está localizable en la oficina a partir de las 16:30.'
            }
          },
          {
            id: 'telc_a1_l_q2',
            question: '2. Sandra soll Petra einen neuen Drucker kaufen.',
            options: ['Richtig', 'Falsch'],
            correctAnswer: 'Falsch',
            explanation: {
              en: 'Petra asks for the course materials ("Kursunterlagen"), not to buy a new printer.',
              fa: 'پترا جزوه‌های دوره را خواسته است نه خرید چاپگر جدید.',
              prs: 'او فقط مواد درسی را خواسته نه خرید پرینتر.',
              tr: 'Petra sadece ders materyallerini istemiştir, yazıcı almasını değil.',
              ar: 'طلبت بترا أوراق الدورة وليس شراء طابعة جديدة.',
              es: 'Pide los apuntes del curso, no comprar una impresora.'
            }
          },
          {
            id: 'telc_a1_l_q3',
            question: '3. Der Deutschkurs beginnt am Montag um 18:00 Uhr.',
            options: ['Richtig', 'Falsch'],
            correctAnswer: 'Falsch',
            explanation: {
              en: 'The course starts at 18:30 ("nicht um 18:00 Uhr, sondern erst um 18:30 Uhr").',
              fa: 'دوره ساعت ۱۸:۳۰ شروع می‌شود، نه ۱۸:۰۰.',
              prs: 'صنف ساعت ۶:۳۰ شروع می‌شود نه ساعت ۶.',
              tr: 'Kurs 18:00\'de değil, 18:30\'da başlamaktadır.',
              ar: 'تبدأ الدورة في الساعة 18:30 وليس 18:00.',
              es: 'La clase empieza a las 18:30, no a las 18:00.'
            }
          },
          {
            id: 'telc_a1_l_q4',
            question: '4. Wo findet der Unterricht am Montag statt?',
            options: ['Im Raum 12', 'Im Raum 18', 'In der Cafeteria'],
            correctAnswer: 'Im Raum 12',
            explanation: {
              en: 'Stefan writes: "im Raum 12".',
              fa: 'اشتفان نوشته است: در اتاق ۱۲.',
              prs: 'در اطاق شماره ۱۲ برگزار می‌شود.',
              tr: 'Mesajda 12 numaralı oda belirtilmiştir.',
              ar: 'المكان المحدد هو القاعة 12.',
              es: 'El aula especificada es la sala 12.'
            }
          },
          {
            id: 'telc_a1_l_q5',
            question: '5. Wer hat die zweite Nachricht geschrieben?',
            options: ['Stefan', 'Thomas', 'Petra'],
            correctAnswer: 'Stefan',
            explanation: {
              en: 'Stefan signed the message: "Bis Montag! Stefan."',
              fa: 'پیام با امضای اشتفان پایان یافته است.',
              prs: 'اشتفان پیام را فرستاده است.',
              tr: 'Mesajı Stefan yazmıştır.',
              ar: 'المرسل هو شتيفان.',
              es: 'El remitente del segundo mensaje es Stefan.'
            }
          }
        ]
      },
      {
        title: 'Teil 2: Websites und Anzeigen (Fragen 6–10)',
        sourceType: 'Kleinanzeigen und Internetangebote',
        body: 'Anzeige A:\n"Supermarkt Frisch & Nah: Frisches Obst, Gemüse und Backwaren. Geöffnet Montag bis Samstag von 07:00 bis 20:00 Uhr. Sonntag geschlossen."\n\nAnzeige B:\n"Café am Park: Täglich frischer Kaffee und Kuchen. Geöffnet auch an Sonn- und Feiertagen von 09:00 bis 18:00 Uhr."',
        questions: [
          {
            id: 'telc_a1_l_q6',
            question: '6. Sie möchten am Sonntagmorgen frischen Kaffee trinken. Wohin gehen Sie?',
            options: ['In den Supermarkt Frisch & Nah', 'Ins Café am Park', 'In beide Geschäfte'],
            correctAnswer: 'Ins Café am Park',
            explanation: {
              en: 'Café am Park is open on Sundays ("auch an Sonn- und Feiertagen geöffnet"), the supermarket is closed.',
              fa: 'کافه پارک یکشنبه‌ها باز است اما سوپرمارکت بسته است.',
              prs: 'کافه پارک روزهای یکشنبه باز می‌باشد.',
              tr: 'Pazar günleri Café am Park açıktır.',
              ar: 'مقهى Café am Park مفتوح أيام الآحاد.',
              es: 'El Café am Park abre los domingos; el supermercado está cerrado.'
            }
          },
          {
            id: 'telc_a1_l_q7',
            question: '7. Wann schließt der Supermarkt Frisch & Nah an Samstagen?',
            options: ['Um 18:00 Uhr', 'Um 20:00 Uhr', 'Um 22:00 Uhr'],
            correctAnswer: 'Um 20:00 Uhr',
            explanation: {
              en: 'Open Monday to Saturday from 07:00 to 20:00.',
              fa: 'از دوشنبه تا شنبه ساعت ۲۰:۰۰ تعطیل می‌شود.',
              prs: 'ساعت ۸ شام بسته می‌شود.',
              tr: 'Cumartesi günleri saat 20:00\'de kapanır.',
              ar: 'يغلق في الساعة 20:00 مساءً.',
              es: 'Cierra a las 20:00.'
            }
          },
          {
            id: 'telc_a1_l_q8',
            question: '8. Kann man im Café am Park Backwaren und Kuchen kaufen?',
            options: ['Ja', 'Nein'],
            correctAnswer: 'Ja',
            explanation: {
              en: 'The advertisement mentions "frischer Kaffee und Kuchen".',
              fa: 'در آگهی صراحتاً به قهوه و کیک اشاره شده است.',
              prs: 'کیک و قهوه دارد.',
              tr: 'İlanda kahve ve pasta olduğu belirtilmiştir.',
              ar: 'نعم، يقدم القهوة والكعك الطازج.',
              es: 'Sí, ofrece café y tartas.'
            }
          },
          {
            id: 'telc_a1_l_q9',
            question: '9. Der Supermarkt hat am Sonntag geöffnet.',
            options: ['Richtig', 'Falsch'],
            correctAnswer: 'Falsch',
            explanation: {
              en: '"Sonntag geschlossen" means closed on Sundays.',
              fa: 'سوپرمارکت یکشنبه‌ها تعطیل است.',
              prs: 'سوپرمارکت روز یکشنبه بسته است.',
              tr: 'Pazar günü kapalıdır.',
              ar: 'مغلق يوم الأحد.',
              es: 'Está cerrado los domingos.'
            }
          },
          {
            id: 'telc_a1_l_q10',
            question: '10. Bis wie viel Uhr hat das Café am Park geöffnet?',
            options: ['Bis 18:00 Uhr', 'Bis 20:00 Uhr', 'Bis 07:00 Uhr'],
            correctAnswer: 'Bis 18:00 Uhr',
            explanation: {
              en: 'Open until 18:00 ("von 09:00 bis 18:00 Uhr").',
              fa: 'کافه تا ساعت ۱۸:۰۰ باز است.',
              prs: 'کافه تا ساعت ۶ عصر باز است.',
              tr: 'Saat 18:00\'e kadar açıktır.',
              ar: 'يفتح حتى الساعة 18:00.',
              es: 'Abre hasta las 18:00.'
            }
          }
        ]
      },
      {
        title: 'Teil 3: Schilder und öffentliche Aushänge (Fragen 11–15)',
        sourceType: 'Hinweisschilder an Bahnhöfen und Gebäuden',
        body: 'Schild 1:\n"Aufzug außer Betrieb. Bitte benutzen Sie das Treppenhaus."\n\nSchild 2:\n"Bibliothek: Essen und Trinken verboten! Bitte Mobiltelefone ausschalten."\n\nSchild 3:\n"Notausgang: Tür bitte immer freihalten!"',
        questions: [
          {
            id: 'telc_a1_l_q11',
            question: '11. Sie können heute den Aufzug benutzen.',
            options: ['Richtig', 'Falsch'],
            correctAnswer: 'Falsch',
            explanation: {
              en: '"Außer Betrieb" means out of service.',
              fa: 'آسانسور خراب و خارج از سرویس است.',
              prs: 'لفت خراب است و کار نمی‌کند.',
              tr: 'Asansör kullanım dışıdır.',
              ar: 'المصعد معطل وخارج عن الخدمة.',
              es: 'El ascensor está fuera de servicio.'
            }
          },
          {
            id: 'telc_a1_l_q12',
            question: '12. Wie gelangen Sie in den zweiten Stock?',
            options: ['Mit dem Aufzug', 'Über das Treppenhaus', 'Durch das Fenster'],
            correctAnswer: 'Über das Treppenhaus',
            explanation: {
              en: 'Sign indicates: "Bitte benutzen Sie das Treppenhaus."',
              fa: 'باید از راه پله استفاده شود.',
              prs: 'از زینه یا راه‌پله بروید.',
              tr: 'Merdivenleri kullanmanız gerekmektedir.',
              ar: 'عبر استخدام الدرج.',
              es: 'Utilizando las escaleras.'
            }
          },
          {
            id: 'telc_a1_l_q13',
            question: '13. In der Bibliothek darf man ein Brötchen essen.',
            options: ['Richtig', 'Falsch'],
            correctAnswer: 'Falsch',
            explanation: {
              en: '"Essen und Trinken verboten!" prohibits eating.',
              fa: 'خوردن و آشامیدن در کتابخانه ممنوع است.',
              prs: 'نان خوردن در کتابخانه منع است.',
              tr: 'Kütüphanede yemek ve içmek yasaktır.',
              ar: 'الأكل والشرب ممنوع في المكتبة.',
              es: 'Está prohibido comer y beber.'
            }
          },
          {
            id: 'telc_a1_l_q14',
            question: '14. Was müssen Sie mit Ihrem Handy in der Bibliothek tun?',
            options: ['Sehr laut telefonieren', 'Ausschalten', 'Musik hören'],
            correctAnswer: 'Ausschalten',
            explanation: {
              en: '"Bitte Mobiltelefone ausschalten" means switch off mobile phones.',
              fa: 'تلفن‌های همراه باید خاموش شوند.',
              prs: 'تیلفون همراه را خاموش کنید.',
              tr: 'Cep telefonlarını kapatmak gereklidir.',
              ar: 'إغلاق الهواتف المحمولة.',
              es: 'Apagar los teléfonos móviles.'
            }
          },
          {
            id: 'telc_a1_l_q15',
            question: '15. Man darf vor dem Notausgang Kisten abstellen.',
            options: ['Richtig', 'Falsch'],
            correctAnswer: 'Falsch',
            explanation: {
              en: '"Tür bitte immer freihalten" means the emergency exit door must always be kept clear.',
              fa: 'درب خروج اضطراری همواره باید باز و خلوت نگه داشته شود.',
              prs: 'راه خروجی عاجل همیشه باید آزاد باشد.',
              tr: 'Acil çıkış kapısının önü daima boş bırakılmalıdır.',
              ar: 'يجب إبقاء باب مخرج الطوارئ خالياً من أي عوائق.',
              es: 'Debe mantenerse siempre despejada la salida de emergencia.'
            }
          }
        ]
      }
    ]
  },
  hoeren: {
    title: 'Modul Hören (Listening Comprehension)',
    durationMinutes: 20,
    audioItems: [
      {
        id: 'telc_a1_h_item1',
        title: 'Teil 1: Alltägliche Gespräche (Fragen 1–6)',
        situation: 'Kurze Dialoge im Restaurant, am Fahrkartenschalter und beim Einkaufen',
        transcript: 'Gespräch 1:\nKellner: "Guten Tag, was möchten Sie bestellen?"\nGast: "Ich hätte gern eine Bratwurst mit Pommes und ein Mineralwasser ohne Kohlensäure, bitte."\nKellner: "Sehr gerne, kommt sofort."\n\nGespräch 2:\nKundin: "Guten Tag, fährt der nächste Zug nach Berlin von Gleis 4 ab?"\nBahnbeamter: "Nein, Gleis 4 wird repariert. Der Zug nach Berlin fährt heute von Gleis 7 ab."\nKundin: "Vielen Dank für die Information!"',
        questions: [
          {
            id: 'telc_a1_h_q1',
            question: '1. Was bestellt der Gast zu trinken?',
            options: ['Einen Apfelsaft', 'Ein Mineralwasser ohne Kohlensäure', 'Eine Cola'],
            correctAnswer: 'Ein Mineralwasser ohne Kohlensäure',
            explanation: {
              en: 'The guest orders: "ein Mineralwasser ohne Kohlensäure, bitte."',
              fa: 'مشتری یک آب معدنی بدون گاز سفارش می‌دهد.',
              prs: 'مشتری آب معدنی بدون گاز فرمایش داد.',
              tr: 'Müşteri gazsız maden suyu sipariş etmiştir.',
              ar: 'طلب مياهاً معدنية غير غازية.',
              es: 'Pide agua mineral sin gas.'
            }
          },
          {
            id: 'telc_a1_h_q2',
            question: '2. Was isst der Gast?',
            options: ['Eine Pizza', 'Eine Bratwurst mit Pommes', 'Einen Salat'],
            correctAnswer: 'Eine Bratwurst mit Pommes',
            explanation: {
              en: 'Ordered: "eine Bratwurst mit Pommes".',
              fa: 'مشتری سوسیس برات‌وورست با سیب‌زمینی سرخ‌کرده سفارش داد.',
              prs: 'سوسیس با کچالو سرخ کرده.',
              tr: 'Patates kızartmalı sosis.',
              ar: 'نقانق برات فورست مع بطاطا مقلية.',
              es: 'Salchicha con patatas fritas.'
            }
          },
          {
            id: 'telc_a1_h_q3',
            question: '3. Von welchem Gleis fährt der Zug nach Berlin heute ab?',
            options: ['Von Gleis 4', 'Von Gleis 7', 'Von Gleis 14'],
            correctAnswer: 'Von Gleis 7',
            explanation: {
              en: 'The train departs from platform 7: "fährt heute von Gleis 7 ab."',
              fa: 'قطار برلین امروز از خط شماره ۷ حرکت می‌کند.',
              prs: 'قطار از خط ۷ حرکت می‌نماید.',
              tr: 'Tren bugün 7. perondan kalkmaktadır.',
              ar: 'يغادر القطار من الرصيف رقم 7.',
              es: 'Sale hoy por la vía 7.'
            }
          },
          {
            id: 'telc_a1_h_q4',
            question: '4. Gleis 4 wird zurzeit repariert.',
            options: ['Richtig', 'Falsch'],
            correctAnswer: 'Richtig',
            explanation: {
              en: 'Official says: "Gleis 4 wird repariert."',
              fa: 'خط ۴ در حال حاضر در دست تعمیر است.',
              prs: 'خط چهارم در حال ترمیم است.',
              tr: '4. peron tamir edilmektedir.',
              ar: 'الرصيف رقم 4 يخضع للصيانة والإصلاح.',
              es: 'La vía 4 está en reparación.'
            }
          },
          {
            id: 'telc_a1_h_q5',
            question: '5. Wie viel kostet das Tages-Ticket?',
            options: ['8 Euro 50', '12 Euro', '15 Euro 20'],
            correctAnswer: '8 Euro 50',
            explanation: {
              en: 'Standard price announced is 8.50 Euros.',
              fa: 'قیمت بلیت یک‌روزه ۸ یورو و ۵۰ سنت اعلام شده است.',
              prs: 'قیمت تکت هشت و نیم یورو است.',
              tr: 'Günlük bilet 8 Euro 50 Cent\'tir.',
              ar: 'سعر التذكرة اليومية هو 8.50 يورو.',
              es: 'El billete diario cuesta 8,50 euros.'
            }
          },
          {
            id: 'telc_a1_h_q6',
            question: '6. Wann kommt der Bus an der Haltestelle an?',
            options: ['In 5 Minuten', 'In 20 Minuten', 'In einer Stunde'],
            correctAnswer: 'In 5 Minuten',
            explanation: {
              en: 'The bus arrives in 5 minutes.',
              fa: 'اتوبوس تا ۵ دقیقه دیگر به ایستگاه می‌رسد.',
              prs: 'بس بعد از ۵ دقیقه می‌رسد.',
              tr: 'Otobüs 5 dakika içinde gelecektir.',
              ar: 'تصل الحافلة بعد 5 دقائق.',
              es: 'El autobús llega en 5 minutos.'
            }
          }
        ]
      },
      {
        id: 'telc_a1_h_item2',
        title: 'Teil 2: Öffentliche Lautsprecherdurchsagen (Fragen 7–10)',
        situation: 'Durchsagen im Einkaufszentrum und am Hauptbahnhof',
        transcript: 'Durchsage 1:\n"Achtung an Gleis 2: Der Intercity nach Frankfurt hat etwa 15 Minuten Verspätung wegen einer technischen Störung. Wir bitten um Verständnis."\n\nDurchsage 2:\n"Sehr geehrte Kunden, unser Modegeschäft schließt in 10 Minuten. Bitte begeben Sie sich zu den Kassen im Erdgeschoss."',
        questions: [
          {
            id: 'telc_a1_h_q7',
            question: '7. Wie viel Verspätung hat der Zug nach Frankfurt?',
            options: ['5 Minuten', '15 Minuten', '50 Minuten'],
            correctAnswer: '15 Minuten',
            explanation: {
              en: 'Announcement: "etwa 15 Minuten Verspätung".',
              fa: 'قطار فرانکفورت حدود ۱۵ دقیقه تاخیر دارد.',
              prs: 'قطار ۱۵ دقیقه ناوقت می‌رسد.',
              tr: 'Tren yaklaşık 15 dakika gecikmelidir.',
              ar: 'القطار متأخر بنحو 15 دقيقة.',
              es: 'El tren lleva unos 15 minutos de retraso.'
            }
          },
          {
            id: 'telc_a1_h_q8',
            question: '8. Was ist der Grund für die Zugverspätung?',
            options: ['Schlechtes Wetter', 'Eine technische Störung', 'Kein Lokführer da'],
            correctAnswer: 'Eine technische Störung',
            explanation: {
              en: 'Reason given: "wegen einer technischen Störung".',
              fa: 'علت تاخیر نقص فنی اعلام شده است.',
              prs: 'مشکل تخنیکی دلیل تاخیر است.',
              tr: 'Teknik bir arıza nedeniyle gecikme yaşanmaktadır.',
              ar: 'السبب هو عطل فني طارئ.',
              es: 'Debido a un fallo técnico.'
            }
          },
          {
            id: 'telc_a1_h_q9',
            question: '9. Wann schließt das Modegeschäft?',
            options: ['In 10 Minuten', 'In einer Stunde', 'Um 22:00 Uhr'],
            correctAnswer: 'In 10 Minuten',
            explanation: {
              en: 'Announcement: "unser Modegeschäft schließt in 10 Minuten."',
              fa: 'فروشگاه تا ۱۰ دقیقه دیگر تعطیل می‌شود.',
              prs: 'فروشگاه بعد از ۱۰ دقیقه بسته می‌شود.',
              tr: 'Mağaza 10 dakika sonra kapanacaktır.',
              ar: 'يغلق المتجر بعد 10 دقائق.',
              es: 'La tienda cierra en 10 minutos.'
            }
          },
          {
            id: 'telc_a1_h_q10',
            question: '10. Wo befinden sich die Kassen?',
            options: ['Im 3. Stock', 'Im Keller', 'Im Erdgeschoss'],
            correctAnswer: 'Im Erdgeschoss',
            explanation: {
              en: 'Cash registers are in the ground floor: "zu den Kassen im Erdgeschoss."',
              fa: 'صندوق‌های پرداخت در طبقه همکف قرار دارند.',
              prs: 'صندوق پرداخت در طبقه همکف است.',
              tr: 'Kasalar zemin kattadır.',
              ar: 'تقع صناديق الدفع في الطابق الأرضي.',
              es: 'Las cajas están en la planta baja.'
            }
          }
        ]
      },
      {
        id: 'telc_a1_h_item3',
        title: 'Teil 3: Telefonische Ansagen und Mailboxen (Fragen 11–15)',
        situation: 'Anrufbeantworter von Arztpraxis, Sprachschule und Handwerker',
        transcript: 'Nachricht 1:\n"Guten Tag, hier ist die Praxis Dr. Müller. Wir haben Urlaub bis zum 15. August. In dringenden Fällen wenden Sie sich bitte an den ärztlichen Notdienst unter der Telefonnummer 116 117."\n\nNachricht 2:\n"Hallo Herr Karimi, hier spricht die Sprachschule Aktiv. Ihr Einstufungstest findet am Freitag um 14:00 Uhr statt. Bitte bringen Sie Ihren Personalausweis mit."',
        questions: [
          {
            id: 'telc_a1_h_q11',
            question: '11. Bis wann hat die Arztpraxis Urlaub?',
            options: ['Bis zum 5. August', 'Bis zum 15. August', 'Bis September'],
            correctAnswer: 'Bis zum 15. August',
            explanation: {
              en: 'The practice is closed until August 15th: "bis zum 15. August."',
              fa: 'مطب تا ۱۵ آگوست در تعطیلات است.',
              prs: 'مطب داکتر تا ۱۵ اگست رخصت است.',
              tr: 'Muayenehane 15 Ağustos\'a kadar tatildedir.',
              ar: 'العيادة في إجازة حتى 15 أغسطس.',
              es: 'La consulta está de vacaciones hasta el 15 de agosto.'
            }
          },
          {
            id: 'telc_a1_h_q12',
            question: '12. Welche Notfallnummer wird auf dem Anrufbeantworter genannt?',
            options: ['110', '112', '116 117'],
            correctAnswer: '116 117',
            explanation: {
              en: 'Emergency medical service number: "116 117".',
              fa: 'شماره اعلام شده برای خدمات اورژانس ۱۱۶ ۱۱۷ است.',
              prs: 'شماره اضطراری داکتر 116 117 است.',
              tr: 'Acil nöbetçi doktor numarası 116 117 olarak verilmiştir.',
              ar: 'رقم الطوارئ الطبي هو 116 117.',
              es: 'El número de guardia médica es el 116 117.'
            }
          },
          {
            id: 'telc_a1_h_q13',
            question: '13. An welchem Tag findet der Einstufungstest statt?',
            options: ['Am Mittwoch', 'Am Freitag', 'Am Sonntag'],
            correctAnswer: 'Am Freitag',
            explanation: {
              en: 'Message: "am Freitag um 14:00 Uhr".',
              fa: 'آزمون تعیین سطح روز جمعه برگزار می‌شود.',
              prs: 'امتحان تعیین سویه روز جمعه است.',
              tr: 'Seviye tespit sınavı Cuma günüdür.',
              ar: 'يقام اختبار تحديد المستوى يوم الجمعة.',
              es: 'La prueba de nivel tiene lugar el viernes.'
            }
          },
          {
            id: 'telc_a1_h_q14',
            question: '14. Um wie viel Uhr beginnt der Einstufungstest?',
            options: ['Um 10:00 Uhr', 'Um 14:00 Uhr', 'Um 18:00 Uhr'],
            correctAnswer: 'Um 14:00 Uhr',
            explanation: {
              en: 'Starts at 14:00.',
              fa: 'ساعت ۱۴:۰۰ شروع می‌شود.',
              prs: 'ساعت ۲ بعد از ظهر شروع می‌شود.',
              tr: 'Saat 14:00\'te başlamaktadır.',
              ar: 'يبدأ في تمام الساعة 14:00.',
              es: 'Comienza a las 14:00 horas.'
            }
          },
          {
            id: 'telc_a1_h_q15',
            question: '15. Was muss Herr Karimi zum Test mitbringen?',
            options: ['Sein Wörterbuch', 'Seinen Personalausweis', 'Ein Passfoto'],
            correctAnswer: 'Seinen Personalausweis',
            explanation: {
              en: 'Message states: "Bitte bringen Sie Ihren Personalausweis mit."',
              fa: 'آقای کریمی باید کارت شناسایی خود را همراه بیاورد.',
              prs: 'تذکره یا کارت شناسایی خود را بیاورد.',
              tr: 'Kimlik kartını (Personalausweis) getirmesi gerekmektedir.',
              ar: 'يجب عليه إحضار بطاقة الهوية الشخصية.',
              es: 'Debe llevar su documento de identidad.'
            }
          }
        ]
      }
    ]
  },
  schreiben: {
    title: 'Modul Schreiben (Writing)',
    durationMinutes: 15,
    taskType: 'Formular ausfüllen & Kurze Mitteilung verfassen',
    situation: 'Sie möchten an einem Deutsch-Abendkurs teilnehmen und müssen das Anmeldeformular ausfüllen sowie der Kursleiterin eine kurze Nachricht schreiben.',
    prompt: 'Schreiben Sie eine kurze E-Mail an Frau Weber:\n1. Grund für Ihr Schreiben (Deutschkurs A1).\n2. Wann haben Sie Zeit (abends ab 18:00 Uhr).\n3. Bitten Sie um eine Bestätigung.',
    guidingPoints: [
      'Passende Anrede (Sehr geehrte Frau Weber,)',
      'Grund des Schreibens nennen',
      'Verfügbare Uhrzeit mitteilen',
      'Höfliche Grußformel (Mit freundlichen Grüßen)'
    ],
    targetWordCount: 'ca. 30 Wörter',
    sampleSolution: 'Sehr geehrte Frau Weber,\n\nich möchte mich gern für den Deutschkurs A1 anmelden. Ich habe immer abends ab 18:00 Uhr Zeit.\nKönnen Sie mir bitte den Kurstermin und die Kosten bestätigen?\n\nVielen Dank und mit freundlichen Grüßen,\nSayed Bashir',
    scoringCriteria: {
      en: 'Evaluated on task completion (all 3 points covered), communicative design, and basic grammatical correctness.',
      fa: 'ارزیابی بر اساس پوشش هر ۳ نکته خواسته شده، ساختار ارتباطی مناسب، و صحت نسبی گرامر.',
      prs: 'معیار نمره شامل ذکر تمام نکات، خطاب رسمی و گرامر درست می‌باشد.',
      tr: 'Tüm maddelerin eksiksiz yazılması, nezaket kalıpları ve temel dilbilgisi kurallarına uyum.',
      ar: 'يتم التقييم بناءً على استيفاء النقاط الثلاث، أسلوب المخاطبة المهذب، وسلامة القواعد الأساسية.',
      es: 'Se evalúa el cumplimiento de los 3 puntos, la cortesía formal y la corrección gramatical básica.'
    }
  },
  sprechen: {
    title: 'Modul Sprechen (Oral Exam - 15 Minuten)',
    durationMinutes: 15,
    teil1: {
      name: 'Teil 1: Sich vorstellen (Name, Herkunft, Wohnort, Sprachen, Beruf)',
      instruction: {
        en: 'Introduce yourself using key personal data. Spell your name and state your telephone number when asked by the examiner.',
        fa: 'خود را معرفی کنید (نام، سن، کشور، محل سکونت، زبان‌ها، شغل). نام خود را هجی کرده و شماره تلفن خود را بگویید.',
        prs: 'خود را معرفی نموده، نام خود را هجی نموده و شماره تلیفون تان را بگویید.',
        tr: 'Kendinizi tanıtın, adınızı heceleyin ve telefon numaranızı söyleyin.',
        ar: 'قدم نفسك مستخدماً البيانات الأساسية وقم بتهجئة اسمك وذكر رقم هاتفك.',
        es: 'Preséntate con tus datos básicos, deletrea tu apellido y di tu número de teléfono.'
      },
      prompts: ['Name', 'Alter', 'Land', 'Wohnort', 'Sprachen', 'Beruf / Hobby'],
      sampleResponse: 'Kandidat: "Guten Tag! Mein Name ist Sayed Bashir. Ich bin 28 Jahre alt und komme aus Afghanistan. Jetzt wohne ich in München. Ich spreche Persisch, Englisch und ein bisschen Deutsch. Von Beruf bin ich Buchhalter. In meiner Freizeit spiele ich gerne Fußball und koche."'
    },
    teil2: {
      name: 'Teil 2: Um Informationen bitten und Informationen geben',
      instruction: {
        en: 'Pick prompt cards with everyday topics and ask your partner questions. Answer your partner\'s questions.',
        fa: 'با کارت‌های موضوعی روزمره از همتای خود سوال بپرسید و به پرسش‌های او پاسخ دهید.',
        prs: 'با کارت‌های موضوعی از پارتنر تان سوال بپرسید و جواب دهید.',
        tr: 'Kartlardaki temalara göre sorular sorun ve partnerinizin sorularını yanıtlayın.',
        ar: 'اطرح أسئلة على زميلك انطلاقاً من البطاقات المعطاة وأجب عن أسئلته.',
        es: 'Formula preguntas a partir de las tarjetas temáticas y responde.'
      },
      topicCards: [
        'Thema: Essen & Trinken - Wort: Frühstück (Was isst du zum Frühstück?)',
        'Thema: Einkaufen - Wort: Supermarkt (Wann öffnet der Supermarkt?)',
        'Thema: Freizeit - Wort: Sport (Treibst du regelmäßig Sport?)'
      ],
      sampleResponse: 'Kandidat A: "Was isst du morgens gerne zum Frühstück?"\nKandidat B: "Ich esse morgens meistens Brot mit Käse und trinke schwarzen Tee."'
    },
    teil3: {
      name: 'Teil 3: Bitten formulieren und darauf reagieren',
      instruction: {
        en: 'Formulate polite imperative requests using picture cards and respond appropriately.',
        fa: 'با کارت‌های تصویری خواهش مؤدبانه بسازید و پاسخ دهید.',
        prs: 'خواهش مؤدبانه با کارت‌های تصویر مطرح نمایید.',
        tr: 'Resimli kartlara göre kibar ricalar kurun.',
        ar: 'صغ طلباً مهذباً بالاستناد إلى بطاقة الصورة وأجب.',
        es: 'Formula peticiones corteses con las tarjetas gráficas y responde.'
      },
      planningScenario: 'Alltagsgegenstände: Handy, Fahrkarte, Wasser, Rechnung',
      discussionPoints: ['Können Sie bitte...', 'Geben Sie mir bitte...', 'Ja gerne / Natürlich'],
      sampleResponse: 'Kandidat A: "Können Sie mir bitte das Handy geben?"\nKandidat B: "Ja, natürlich, hier bitte sehr!"'
    }
  }
};
