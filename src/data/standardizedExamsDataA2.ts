import { StandardizedExam } from '../types';

// =========================================================================
// GOETHE-ZERTIFIKAT A2 (STANDARD: 90 MINUTEN)
// Lesen: 30 Min (20 Fragen) | Hören: 30 Min (20 Fragen) | Schreiben: 30 Min | Sprechen: 15 Min
// =========================================================================
export const EXAM_GOETHE_A2: StandardizedExam = {
  id: 'exam_goethe_a2',
  title: 'Goethe-Zertifikat A2 (Offizieller Standard)',
  standard: 'Goethe-Zertifikat',
  level: 'A2.1',
  totalDurationMinutes: 90,
  passingScore: '60% (60 / 100 Punkte)',
  strategy: {
    level: 'A2.1',
    timeManagement: [
      {
        section: 'Lesen (Reading) - 20 Fragen',
        allocatedMinutes: 30,
        tip: {
          en: '20 tasks in 30 minutes (1.5 minutes per task). Teil 1 (5 questions): Newspaper/magazine article. Teil 2 (5 questions): Information board/Directory. Teil 3 (5 questions): Personal emails. Teil 4 (5 questions): Matching classified ads.',
          fa: '۲۰ سوال در ۳۰ دقیقه (۱.۵ دقیقه برای هر سوال). بخش ۱ (۵ سوال): مقاله مجله یا روزنامه. بخش ۲ (۵ سوال): تابلوی راهنمای پاساژ یا ساختمان اداری. بخش ۳ (۵ سوال): ایمیل‌های شخصی. بخش ۴ (۵ سوال): تطبیق آگهی‌ها.',
          prs: '۲۰ سوال در ۳۰ دقیقه. بخش ۱ مقالات، بخش ۲ لوحه راهنما، بخش ۳ ایمیل و بخش ۴ تطبیق اعلانات.',
          tr: '30 dakikada 20 soru. 1. Bölüm gazete yazısı, 2. Bölüm bina rehberi, 3. Bölüm e-postalar, 4. Bölüm ilan eşleştirme.',
          ar: '20 سؤالاً في 30 دقيقة. مقسمة بالتساوي على 4 أجزاء (5 أسئلة لكل قسم).',
          es: '20 preguntas en 30 minutos divididas en 4 partes de 5 preguntas cada una.'
        }
      },
      {
        section: 'Hören (Listening) - 20 Fragen',
        allocatedMinutes: 30,
        tip: {
          en: '20 tasks in 30 minutes. Teil 1 (5 questions, dialogues). Teil 2 (5 questions, radio show). Teil 3 (5 questions, telephone messages). Teil 4 (5 questions, interviews).',
          fa: '۲۰ سوال در ۳۰ دقیقه. بخش ۱ (۵ سوال مکالمات). بخش ۲ (۵ سوال رادیو). بخش ۳ (۵ سوال تلفن). بخش ۴ (۵ سوال مصاحبه خیابانی).',
          prs: '۲۰ سوال در ۳۰ دقیقه شنیداری، شامل رادیو، مکالمات و مصاحبه‌ها.',
          tr: '30 dakikada 20 soru. Diyaloglar, radyo programı, telefon mesajları ve röportajlar.',
          ar: '20 سؤالاً في 30 دقيقة استماع مقسمة على 4 أجزاء.',
          es: '20 preguntas de comprensión auditiva en 30 minutos.'
        }
      },
      {
        section: 'Schreiben (Writing) - 2 Aufgaben',
        allocatedMinutes: 30,
        tip: {
          en: 'Teil 1 (approx. 20-30 words, 10 min): Short informal SMS/message. Teil 2 (approx. 40-50 words, 20 min): Personal email addressing 3 detailed prompts.',
          fa: 'بخش ۱ (۲۰ الی ۳۰ کلمه، ۱۰ دقیقه): پیام کوتاه یا پیامک غیررسمی. بخش ۲ (۴۰ الی ۵۰ کلمه، ۲۰ دقیقه): ایمیل شخصی با پوشش ۳ نکته مشخص.',
          prs: 'بخش ۱ پیامک کوتاه، بخش ۲ ایمیل با ۳ نکته.',
          tr: '1. Bölüm kısa mesaj, 2. Bölüm 3 maddeyi içeren detaylı e-posta.',
          ar: 'القسم 1 رسالة نصية قصيرة، القسم 2 بريد إلكتروني مفصل يغطي 3 نقاط.',
          es: 'Parte 1: Mensaje breve. Parte 2: Correo detallado con 3 puntos.'
        }
      }
    ],
    stepByStepStrategies: [
      {
        title: 'Lesen Teil 4: Anzeigen richtig zuordnen',
        steps: [
          {
            en: '1. Read the 5 person descriptions first. 2. Underline what each person specifically needs. 3. Match against the advertisements; check for the decoy ad that fits no one.',
            fa: '۱. ابتدا شرح وضعیت ۵ نفر را بخوانید. ۲. نیازهای دقیق هر نفر را خط بکشید. ۳. با آگهی‌ها مقایسه کنید؛ دقت کنید که یک آگهی فریبنده وجود دارد که به هیچ‌کس تعلق ندارد.',
            prs: '۱. اول شرح ۵ شخص را بخوانید. ۲. ضروریات آنان را نشانی کنید. ۳. با اعلانات وصل نمایید.',
            tr: '1. Önce 5 kişinin durumunu okuyun. 2. İhtiyaçları çizin. 3. İlanlarla eşleştirin.',
            ar: '1. اقرأ متطلبات الأشخاص الخمسة. 2. حدد احتياجاتهم بدقة. 3. طابق مع الإعلانات.',
            es: '1. Lee las necesidades de las personas. 2. Identifica lo clave. 3. Empareja con los anuncios.'
          }
        ]
      }
    ],
    commonMistakes: [
      {
        mistake: 'Forgetting verb position in Nebensätze (weil, dass, wenn).',
        correction: 'In A2, examiners strictly check that verbs in subordinate clauses are moved to the very end: "... weil ich krank bin."',
        explanation: {
          en: 'Conjugated verbs must always stand at the end of subordinate clauses introduced by weil, dass, wenn.',
          fa: 'فعل صرف‌شده در جملات پیرو با weil، dass و wenn باید همیشه در انتهای جمله قرار گیرد.',
          prs: 'فعل در جملات فرعی با weil و dass همیشه در آخر جمله می‌آید.',
          tr: 'weil, dass, wenn ile kurulan yan cümlelerde çekimli fiil daima cümlenin en sonuna gider.',
          ar: 'في الجمل التابعة يجب أن يأتي الفعل المصرف في نهاية الجملة دائماً.',
          es: 'El verbo conjugado debe colocarse siempre al final de las oraciones subordinadas.'
        }
      }
    ]
  },
  lesen: {
    title: 'Modul Lesen (30 Minuten • 20 Aufgaben)',
    durationMinutes: 30,
    texts: [
      {
        title: 'Teil 1: Zeitungsartikel über Ehrenamt und Nachbarschaftshilfe (Fragen 1 bis 5)',
        sourceType: 'Lokalzeitung "Kölner Stadt-Anzeiger"',
        body: 'In Köln-Nippes engagieren sich immer mehr Bürgerinnen und Bürger in Nachbarschaftsvereinen. Unter dem Motto "Gemeinsam statt einsam" helfen junge Menschen älteren Nachbarn beim Wocheneinkauf, reparieren Fahrräder oder begleiten sie bei Arztbesuchen. Im Gegenzug kochen die Senioren traditionelle Gerichte oder helfen Schülern bei den Hausaufgaben. Gründerin Maria Weber (34) erklärt: "Es geht uns nicht um Geld, sondern um echten Zusammenhalt. Alle Angebote sind für Mitglieder komplett kostenlos." Der Verein hat inzwischen über 400 aktive Helfer und plant für den kommenden Monat ein großes Sommerfest im Stadtteilpark.',
        questions: [
          {
            id: 'a2_l_q1',
            question: '1. Worum geht es in dem Projekt in Köln-Nippes?',
            options: ['a) Um bezahlte Nachhilfe für Studenten', 'b) Um gegenseitige Hilfe im Stadtteil', 'c) Um den Verkauf von Fahrrädern'],
            correctAnswer: 'b) Um gegenseitige Hilfe im Stadtteil',
            explanation: {
              en: 'The project focuses on mutual community support: "helfen junge Menschen älteren Nachbarn (...) Im Gegenzug kochen die Senioren".',
              fa: 'پروژه بر کمک متقابل ساکنان محله تمرکز دارد.',
              prs: 'پروژه روی همکاری متقابل در محله متمرکز است.',
              tr: 'Proje mahalledeki karşılıklı yardımlaşmayı amaçlamaktadır.',
              ar: 'يركز المشروع على تبادل المساعدة بين سكان الحي.',
              es: 'El proyecto se centra en la ayuda mutua en el barrio.'
            }
          },
          {
            id: 'a2_l_q2',
            question: '2. Junge Menschen helfen den Senioren vor allem...',
            options: ['a) beim Kochen von Festessen', 'b) beim Einkaufen und Arztbesuchen', 'c) bei der Wohnungssuche'],
            correctAnswer: 'b) beim Einkaufen und Arztbesuchen',
            explanation: {
              en: 'Text clarifies: "... helfen junge Menschen älteren Nachbarn beim Wocheneinkauf (...) oder begleiten sie bei Arztbesuchen".',
              fa: 'متن تصریح می‌کند: جوانان در خریدهای هفتگی و همراهی در مطب پزشک به سالمندان کمک می‌کنند.',
              prs: 'جوانان در سودا خریدن و رفتن نزد داکتر کمک می‌نمایند.',
              tr: 'Gençler yaşlılara alışverişte ve doktor ziyaretlerinde yardımcı olmaktadır.',
              ar: 'يساعد الشباب كبار السن في التسوق ومرافقتهم إلى عيادة الطبيب.',
              es: 'Los jóvenes ayudan en las compras y en las visitas médicas.'
            }
          },
          {
            id: 'a2_l_q3',
            question: '3. Was bieten die älteren Menschen als Gegenleistung an?',
            options: ['a) Sie zahlen monatlich 50 Euro', 'b) Sie kochen und helfen bei Hausaufgaben', 'c) Sie reparieren Autos'],
            correctAnswer: 'b) Sie kochen und helfen bei Hausaufgaben',
            explanation: {
              en: 'Text confirms: "Im Gegenzug kochen die Senioren traditionelle Gerichte oder helfen Schülern bei den Hausaufgaben."',
              fa: 'سالمندان در ازای کمک، غذای سنتی می‌پزند یا در تکالیف مدرسه به دانش‌آموزان کمک می‌کنند.',
              prs: 'سالمندان غذا پخته می‌کنند و در کارهای خانگی مکتب کمک می‌کنند.',
              tr: 'Yaşlılar yemek pişirip öğrencilere ödevlerinde yardımcı olmaktadır.',
              ar: 'يقوم المسنون بالطهي ومساعدة الطلاب في واجباتهم المدرسية.',
              es: 'A cambio cocinan y ayudan a los escolares con los deberes.'
            }
          },
          {
            id: 'a2_l_q4',
            question: '4. Wie viel kosten die Hilfsangebote für Mitglieder?',
            options: ['a) 10 Euro pro Stunde', 'b) Nichts, sie sind kostenlos', 'c) Einen kleinen Beitrag von 5 Euro'],
            correctAnswer: 'b) Nichts, sie sind kostenlos',
            explanation: {
              en: 'Maria Weber confirms: "Alle Angebote sind für Mitglieder komplett kostenlos."',
              fa: 'تمام خدمات برای اعضای انجمن کاملاً رایگان است.',
              prs: 'تمام خدمات برای اعضا کاملاً رایگان است.',
              tr: 'Tüm hizmetler üyeler için tamamen ücretsizdir.',
              ar: 'كافة الخدمات المقدمة مجانية تماماً للأعضاء.',
              es: 'Todas las actividades son totalmente gratuitas para socios.'
            }
          },
          {
            id: 'a2_l_q5',
            question: '5. Was ist für den kommenden Monat geplant?',
            options: ['a) Eine Reise nach Berlin', 'b) Die Schließung des Vereins', 'c) Ein Sommerfest im Stadtteilpark'],
            correctAnswer: 'c) Ein Sommerfest im Stadtteilpark',
            explanation: {
              en: 'Article concludes: "... plant für den kommenden Monat ein großes Sommerfest im Stadtteilpark."',
              fa: 'برای ماه آینده یک جشن تابستانی بزرگ در پارک محله برنامه‌ریزی شده است.',
              prs: 'برای ماه آینده یک جشن تابستانی پلان شده است.',
              tr: 'Gelecek ay için parkta büyük bir yaz şenliği planlanmaktadır.',
              ar: 'من المخطط تنظيم احتفال صيفي كبير في حديقة الحي الشهر المقبل.',
              es: 'Tienen planeada una gran fiesta de verano en el parque.'
            }
          }
        ]
      },
      {
        title: 'Teil 2: Informationstafel im Bürgerzentrum & Dienstleistungsgebäude (Fragen 6 bis 10)',
        sourceType: 'Gebäudeleitsystem / Orientierungstafel',
        body: 'Erdgeschoss (EG): Information & Empfang, Fundbüro, Passbild-Automat, Café & Bistro.\n1. Obergeschoss (1. OG): Bürgerbüro (An- und Ummeldung des Wohnsitzes, Reisepässe, Personalausweise, Beglaubigungen).\n2. Obergeschoss (2. OG): Ausländerbehörde, Einbürgerungsstelle, Integrationsberatung für Neuzugewanderte.\n3. Obergeschoss (3. OG): Standesamt (Heirat, Geburtsurkunden, Vaterschaftsanerkennung).\n4. Obergeschoss (4. OG): Kfz-Zulassungsstelle, Führerscheinbüro, Parkausweise für Anwohner.\nUntergeschoss (UG): Tiefgarage, Fahrradabstellraum, Schließfächer.',
        questions: [
          {
            id: 'a2_l_q6',
            question: '6. Sie sind umgezogen und müssen Ihre neue Wohnadresse anmelden. Wohin gehen Sie?',
            options: ['a) Erdgeschoss (EG)', 'b) 1. Obergeschoss (1. OG)', 'c) 4. Obergeschoss (4. OG)'],
            correctAnswer: 'b) 1. Obergeschoss (1. OG)',
            explanation: {
              en: '1. OG houses the Bürgerbüro for "An- und Ummeldung des Wohnsitzes".',
              fa: 'طبقه اول برای ثبت یا تغییر آدرس سکونت (Bürgerbüro) است.',
              prs: 'طبقه اول برای ثبت آدرس جدید است.',
              tr: 'İkametgah kaydı ve adres değişikliği 1. kattaki Bürgerbüro\'dadır.',
              ar: 'الطابق الأول مخصص لتسجيل وتغيير عنوان السكن.',
              es: 'En la 1.ª planta se tramita el empadronamiento y cambio de domicilio.'
            }
          },
          {
            id: 'a2_l_q7',
            question: '7. Sie möchten Ihren ausländischen Führerschein umschreiben lassen. Wohin gehen Sie?',
            options: ['a) 2. Obergeschoss (2. OG)', 'b) 3. Obergeschoss (3. OG)', 'c) 4. Obergeschoss (4. OG)'],
            correctAnswer: 'c) 4. Obergeschoss (4. OG)',
            explanation: {
              en: '4. OG is the Führerscheinbüro and Kfz-Zulassungsstelle.',
              fa: 'طبقه چهارم اداره گواهینامه رانندگی و شماره‌گذاری خودرو است.',
              prs: 'طبقه چهارم شعبه لایسنس رانندگی است.',
              tr: 'Ehliyet işlemleri (Führerscheinbüro) 4. kattadır.',
              ar: 'مكتب رخص القيادة يقع في الطابق الرابع.',
              es: 'La oficina de permisos de conducir está en la 4.ª planta.'
            }
          },
          {
            id: 'a2_l_q8',
            question: '8. Ein Freund hat seine Geldbörse im Gebäude verloren. Wohin wendet er sich?',
            options: ['a) Erdgeschoss (EG)', 'b) 2. Obergeschoss (2. OG)', 'c) Untergeschoss (UG)'],
            correctAnswer: 'a) Erdgeschoss (EG)',
            explanation: {
              en: 'The lost and found office (Fundbüro) is on the ground floor (EG).',
              fa: 'بخش اشیای گم‌شده (Fundbüro) در طبقه همکف است.',
              prs: 'دفتر اشیای گمشده در طبقه همکف قرار دارد.',
              tr: 'Kayıp eşya bürosu (Fundbüro) giriş katındadır (EG).',
              ar: 'مكتب المفقودات يقع في الطابق الأرضي.',
              es: 'La oficina de objetos perdidos está en la planta baja.'
            }
          },
          {
            id: 'a2_l_q9',
            question: '9. Ein Paar möchte standesamtlich heiraten und Dokumente einreichen. Welches Stockwerk?',
            options: ['a) 1. Obergeschoss', 'b) 3. Obergeschoss', 'c) Untergeschoss'],
            correctAnswer: 'b) 3. Obergeschoss',
            explanation: {
              en: 'The registry office (Standesamt: Heirat, Geburtsurkunden) is on the 3rd floor.',
              fa: 'اداره ثبت احوال و ازدواج (Standesamt) در طبقه سوم واقع شده است.',
              prs: 'ثبت ازدواج در طبقه سوم است.',
              tr: 'Evlendirme dairesi (Standesamt) 3. kattadır.',
              ar: 'مكتب تسجيل الزواج يقع في الطابق الثالث.',
              es: 'El registro civil (bodas) está en la 3.ª planta.'
            }
          },
          {
            id: 'a2_l_q10',
            question: '10. Eine Familie sucht Beratung zu Integrationskursen und Aufenthaltstiteln. Wohin?',
            options: ['a) Erdgeschoss (EG)', 'b) 2. Obergeschoss (2. OG)', 'c) 4. Obergeschoss (4. OG)'],
            correctAnswer: 'b) 2. Obergeschoss (2. OG)',
            explanation: {
              en: 'The Ausländerbehörde and Integrationsberatung are on the 2nd floor.',
              fa: 'اداره مهاجرت و مشاوره دوره‌های همگرایی در طبقه دوم است.',
              prs: 'اداره مهاجرین و کورس‌های ادغام در طبقه دوم است.',
              tr: 'Yabancılar dairesi ve uyum danışmanlığı 2. kattadır.',
              ar: 'دائرة شؤون الأجانب واستشارات الاندماج في الطابق الثاني.',
              es: 'Extranjería y asesoría de integración están en la 2.ª planta.'
            }
          }
        ]
      },
      {
        title: 'Teil 3: Private E-Mails und Einladungen (Fragen 11 bis 15)',
        sourceType: 'E-Mail Korrespondenz',
        body: 'E-Mail von Felix an Tobias:\n"Lieber Tobias, hast du am Samstag Zeit? Ich ziehe endlich in meine neue Wohnung in der Schillerstraße und bräuchte noch zwei kräftige Helfer beim Tragen der Kisten und Möbel. Wir fangen um 09:30 Uhr an. Um 13:00 Uhr mache ich für alle eine Pizza-Pause. Wenn du einen Akkuschrauber hast, bring ihn bitte mit. Sag mir bis Freitagmittag Bescheid!\nDein Felix"\n\nE-Mail von Dr. Neumann an Frau Demir:\n"Sehr geehrte Frau Demir, Ihre Blutuntersuchungsergebnisse liegen nun vor. Alle Werte sind im normalen Bereich. Ein neuer Arzttermin ist derzeit nicht erforderlich. Sie können Ihr Rezept für die Vitamintabletten ab morgen an unserem Praxisempfang abholen.\nMit besten Grüßen, Dr. Neumann"',
        questions: [
          {
            id: 'a2_l_q11',
            question: '11. Warum schreibt Felix an Tobias?',
            options: ['a) Er möchte Tobias zum Geburtstag einladen', 'b) Er braucht Hilfe bei seinem Umzug', 'c) Er möchte Tobias ein Möbelstück verkaufen'],
            correctAnswer: 'b) Er braucht Hilfe bei seinem Umzug',
            explanation: {
              en: 'Felix asks for moving help: "... bräuchte noch zwei kräftige Helfer beim Tragen der Kisten und Möbel".',
              fa: 'فلیکس برای اسباب‌کشی و جابجایی کارتن‌ها و وسایل کمک می‌خواهد.',
              prs: 'فلیکس برای کوچ‌کشی کمک می‌خواهد.',
              tr: 'Felix ev taşıma işinde yardım istemektedir.',
              ar: 'يحتاج فيليكس إلى مساعدة في نقل أثاث منزله الجديد.',
              es: 'Felix necesita ayuda para su mudanza.'
            }
          },
          {
            id: 'a2_l_q12',
            question: '12. Was soll Tobias mitbringen, falls er es besitzt?',
            options: ['a) Einen Akkuschrauber', 'b) Einen großen Lieferwagen', 'c) Pizzakartons'],
            correctAnswer: 'a) Einen Akkuschrauber',
            explanation: {
              en: 'Felix requests: "Wenn du einen Akkuschrauber hast, bring ihn bitte mit."',
              fa: 'فلیکس می‌خواهد در صورت داشتن پیچ‌گوشتی برقی شارژی آن را بیاورد.',
              prs: 'فلیکس خواسته که در صورت داشتن پیچ‌کش برقی آن را بیاورد.',
              tr: 'Felix varsa şarjlı tornavida (Akkuschrauber) getirmesini rica etmektedir.',
              ar: 'طلب فيليكس إحضار مفك براغي كهربائي إن كان متوفراً لديه.',
              es: 'Pide que lleve un atornillador inalámbrico si tiene uno.'
            }
          },
          {
            id: 'a2_l_q13',
            question: '13. Bis wann soll Tobias Felix antworten?',
            options: ['a) Bis Samstagmorgen 09:30 Uhr', 'b) Bis Freitagmittag', 'c) Bis Sonntagabend'],
            correctAnswer: 'b) Bis Freitagmittag',
            explanation: {
              en: 'Felix sets deadline: "Sag mir bis Freitagmittag Bescheid!"',
              fa: 'فلیکس می‌گوید تا ظهر روز جمعه به او خبر داده شود.',
              prs: 'تا ظهر جمعه باید پاسخ دهد.',
              tr: 'Cuma öğlene kadar haber verilmesi istenmektedir.',
              ar: 'المطلوب الرد قبل ظهر يوم الجمعة.',
              es: 'Pide confirmación antes del viernes al mediodía.'
            }
          },
          {
            id: 'a2_l_q14',
            question: '14. Frau Demir muss wegen schlechter Blutwerte dringend zum Arzt kommen.',
            options: ['Richtig', 'Falsch'],
            correctAnswer: 'Falsch',
            explanation: {
              en: 'Dr. Neumann confirms: "Alle Werte sind im normalen Bereich. Ein neuer Arzttermin ist derzeit nicht erforderlich."',
              fa: 'پزشک اعلام می‌کند: همه آزمایش‌ها نرمال است و نیازی به وقت ملاقات جدید نیست.',
              prs: 'تمام نتایج نرمال است و ضرورت به نوبت داکتر نیست.',
              tr: 'Sonuçlar normaldir, randevuya gerek olmadığı belirtilmiştir.',
              ar: 'النتائج كلها طبيعية ولا داعي لزيارة الطبيب مجدداً.',
              es: 'Todos los valores son normales y no requiere cita médica.'
            }
          },
          {
            id: 'a2_l_q15',
            question: '15. Wo kann Frau Demir ihr Rezept abholen?',
            options: ['a) In der Apotheke am Bahnhof', 'b) Am Praxisempfang des Arztes', 'c) Per Post nach Hause'],
            correctAnswer: 'b) Am Praxisempfang des Arztes',
            explanation: {
              en: 'Email indicates: "... ab morgen an unserem Praxisempfang abholen."',
              fa: 'نسخه از فردا در بخش پذیرش مطب پزشک قابل تحویل است.',
              prs: 'نسخه در پذیرش معاینه‌خانه قابل دریافت است.',
              tr: 'Reçete muayenehanenin danışmasından teslim alınabilir.',
              ar: 'يمكن استلام الوصفة الطبية من استقبال العيادة.',
              es: 'Puede recoger la receta en la recepción de la consulta.'
            }
          }
        ]
      },
      {
        title: 'Teil 4: Kleinanzeigen zuordnen (Fragen 16 bis 20)',
        sourceType: 'Internet-Kleinanzeigenportal',
        body: 'Anzeige A: "Vermiete 1-Zimmer-Wohnung in Berlin-Mitte, 32 qm, vollmöbliert, Balkon, Warmmiete 650 Euro. Nur an Nichtraucher ohne Haustiere."\nAnzeige B: "Biete Gitarrenunterricht für Anfänger und Fortgeschrittene jeden Alters. Hausbesuche möglich. 25 Euro pro 45 Minuten."\nAnzeige C: "Deutsch-Konversationsclub jeden Mittwoch 18:30 Uhr im Kulturcafé. Kostenlos, keine Anmeldung nötig. Wir sprechen über aktuelle Themen."\nAnzeige D: "Verkaufe gebrauchte Marken-Waschmaschine von Bosch. 3 Jahre alt, einwandfreier Zustand, Selbstabholung in Hamburg-Altona. 140 Euro VB."\nAnzeige E: "Kinderbetreuung: Erfahrene Erzieherin betreut Kinder am Wochenende und abends in München-Pasing. Flexibel und zuverlässig."',
        questions: [
          {
            id: 'a2_l_q16',
            question: '16. Daniel sucht in Berlin eine kleine möblierte Wohnung zur Miete.',
            options: ['Anzeige A', 'Anzeige B', 'Anzeige C', 'Anzeige D', 'Anzeige E'],
            correctAnswer: 'Anzeige A',
            explanation: {
              en: 'Anzeige A offers a furnished 1-room apartment in Berlin-Mitte.',
              fa: 'آگهی A آپارتمان ۱ اتاقه مبله در برلین را اجاره می‌دهد.',
              prs: 'اعلان A خانه مفروشه یک اتاقه در برلین است.',
              tr: 'A ilanı Berlin\'de eşyalı 1 odalı kiralık dairedir.',
              ar: 'الإعلان A يقدم شقة مفروشة من غرفة واحدة في برلين.',
              es: 'El anuncio A ofrece un apartamento amueblado en Berlín.'
            }
          },
          {
            id: 'a2_l_q17',
            question: '17. Leyla möchte ihre Deutschkenntnisse durch freies Sprechen verbessern, ohne dafür Geld zu bezahlen.',
            options: ['Anzeige A', 'Anzeige B', 'Anzeige C', 'Anzeige D', 'Anzeige E'],
            correctAnswer: 'Anzeige C',
            explanation: {
              en: 'Anzeige C is a free weekly German conversation club at Kulturcafé.',
              fa: 'آگهی C باشگاه مکالمه رایگان آلمانی در کافه فرهنگی است.',
              prs: 'اعلان C کلپ مکالمه رایگان در کافه فرهنگی است.',
              tr: 'C ilanı ücretsiz haftalık Almanca konuşma kulübüdür.',
              ar: 'الإعلان C يقدم نادياً مجانياً للمحادثة باللغة الألمانية.',
              es: 'El anuncio C es un club de conversación gratuito de alemán.'
            }
          },
          {
            id: 'a2_l_q18',
            question: '18. Familie Miller braucht am Samstagabend jemanden, der auf ihre beiden Töchter aufpasst.',
            options: ['Anzeige A', 'Anzeige B', 'Anzeige C', 'Anzeige D', 'Anzeige E'],
            correctAnswer: 'Anzeige E',
            explanation: {
              en: 'Anzeige E offers childcare on weekends and evenings.',
              fa: 'آگهی E خدمات مراقبت و نگهداری از کودکان در عصرها و آخر هفته را ارائه می‌دهد.',
              prs: 'اعلان E پرستاری از اطفال در رخصتی آخر هفته است.',
              tr: 'E ilanı hafta sonu ve akşamları çocuk bakımı sunmaktadır.',
              ar: 'الإعلان E يقدم خدمة رعاية الأطفال في عطلة نهاية الأسبوع والمساء.',
              es: 'El anuncio E ofrece cuidado de niños en fines de semana y tardes.'
            }
          },
          {
            id: 'a2_l_q19',
            question: '19. Jonas möchte ein Musikinstrument lernen und sucht einen Lehrer für zu Hause.',
            options: ['Anzeige A', 'Anzeige B', 'Anzeige C', 'Anzeige D', 'Anzeige E'],
            correctAnswer: 'Anzeige B',
            explanation: {
              en: 'Anzeige B offers guitar lessons with home visits.',
              fa: 'آگهی B آموزش گیتار با امکان تدریس در منزل ارائه می‌دهد.',
              prs: 'اعلان B آموزش گیتار در خانه است.',
              tr: 'B ilanı evde gitar dersleri sunmaktadır.',
              ar: 'الإعلان B يقدم دروس غيتار مع إمكانية الزيارة المنزلية.',
              es: 'El anuncio B ofrece clases de guitarra a domicilio.'
            }
          },
          {
            id: 'a2_l_q20',
            question: '20. Sarah ist nach Hamburg gezogen und braucht eine günstige Waschmaschine.',
            options: ['Anzeige A', 'Anzeige B', 'Anzeige C', 'Anzeige D', 'Anzeige E'],
            correctAnswer: 'Anzeige D',
            explanation: {
              en: 'Anzeige D sells a used Bosch washing machine in Hamburg-Altona.',
              fa: 'آگهی D ماشین لباسشویی کارکرده بوش در هامبورگ به قیمت مناسب می‌فروشد.',
              prs: 'اعلان D فروش ماشین کالاشویی دست دوم در هامبورگ است.',
              tr: 'D ilanı Hamburg\'da uygun fiyatlı ikinci el çamaşır makinesidir.',
              ar: 'الإعلان D لبيع غسالة ملابس مستعملة في هامبورغ بسعر مناسب.',
              es: 'El anuncio D vende una lavadora usada en Hamburgo.'
            }
          }
        ]
      }
    ]
  },
  hoeren: {
    title: 'Modul Hören (30 Minuten • 20 Aufgaben)',
    durationMinutes: 30,
    audioItems: [
      {
        id: 'a2_h_item1',
        title: 'Teil 1: Fünf Alltagsdialoge (Fragen 1 bis 5 • Zweimal hören)',
        situation: 'Alltägliche Gesprächssituationen (Hotel, Kleidungskauf, Reisebüro, Autowerkstatt, Sport)',
        transcript: 'Gespräch 1 (Hotel):\n"Guten Tag, ich habe ein Einzelzimmer auf den Namen Wagner reserviert." - "Einen Moment bitte Herr Wagner... Ja, für drei Nächte bis Freitag. Das Frühstücksbuffet servieren wir von 06:30 bis 10:00 Uhr im ersten Stock. Hier ist Ihre Zimmerkarte für Zimmer 312."\n\nGespräch 2 (Geschäft):\n"Kann ich Ihnen helfen?" - "Ja, ich suche eine warme Winterjacke in Größe L." - "Da haben wir dieses blaue Modell mit Daunenfutter, es ist wasserdicht und um 30 Prozent reduziert auf 89 Euro." - "Darf ich die Jacke bitte anprobieren?" - "Selbstverständlich, die Umkleidekabinen sind dort hinten rechts."\n\nGespräch 3 (Reisezentrum):\n"Ich möchte ein Ticket nach Dresden für Samstag früh." - "Es gibt einen ICE um 07:15 Uhr, Ankunft 09:30 Uhr, oder einen Regionalzug um 08:00 Uhr mit einmal Umsteigen in Leipzig." - "Ich nehme den schnellen ICE, bitte mit Fensterplatz."\n\nGespräch 4 (Apotheke):\n"Guten Tag, was kann ich für Sie tun?" - "Ich habe seit gestern starke Halsschmerzen und Husten." - "Haben Sie auch Fieber?" - "Nein, glücklicherweise kein Fieber." - "Dann empfehle ich Ihnen diesen Kräuter-Hustensaft und Halstabletten. Nehmen Sie dreimal täglich einen Löffel nach dem Essen."\n\nGespräch 5 (Sportstudio):\n"Hallo Markus, trainierst du heute wieder Krafttraining?" - "Nein, heute mache ich nur 45 Minuten Ausdauertraining auf dem Laufband und gehe danach in die Sauna."',
        questions: [
          {
            id: 'a2_h_q1',
            question: '1. Wo und wann gibt es im Hotel Frühstück?',
            options: ['Im Erdgeschoss ab 07:00 Uhr', 'Im ersten Stock von 06:30 bis 10:00 Uhr', 'Auf dem Zimmer ab 08:00 Uhr'],
            correctAnswer: 'Im ersten Stock von 06:30 bis 10:00 Uhr',
            explanation: {
              en: 'Receptionist confirms: "... von 06:30 bis 10:00 Uhr im ersten Stock."',
              fa: 'بوفه صبحانه در طبقه اول از ساعت ۶:۳۰ تا ۱۰:۰۰ صبح سرو می‌شود.',
              prs: 'صبحانه در منزل اول از ۶:۳۰ تا ۱۰ صبح است.',
              tr: 'Kahvaltı 1. katta saat 06:30 ile 10:00 arasındadır.',
              ar: 'بوفيه الإفطار يقدم في الطابق الأول من 06:30 حتى 10:00.',
              es: 'El desayuno se sirve en la primera planta de 06:30 a 10:00.'
            }
          },
          {
            id: 'a2_h_q2',
            question: '2. Wie viel kostet die Winterjacke im Angebot?',
            options: ['59 Euro', '89 Euro', '119 Euro'],
            correctAnswer: '89 Euro',
            explanation: {
              en: 'Salesperson confirms: "... um 30 Prozent reduziert auf 89 Euro."',
              fa: 'قیمت تخفیف‌خورده کاپشن ۸۹ یورو است.',
              prs: 'قیمت کاپشن ۸۹ یورو است.',
              tr: 'İndirimli kışlık montun fiyatı 89 Eurodur.',
              ar: 'سعر السترة بعد التخفيض هو 89 يورو.',
              es: 'El precio rebajado de la chaqueta es de 89 euros.'
            }
          },
          {
            id: 'a2_h_q3',
            question: '3. Für welchen Zug entscheidet sich der Kunde?',
            options: ['Für den ICE um 07:15 Uhr mit Fensterplatz', 'Für den Regionalzug mit Umsteigen um 08:00 Uhr', 'Für den Nachtzug'],
            correctAnswer: 'Für den ICE um 07:15 Uhr mit Fensterplatz',
            explanation: {
              en: 'Customer explicitly chooses: "Ich nehme den schnellen ICE, bitte mit Fensterplatz."',
              fa: 'مشتری قطار سریع‌السیر ICE ساعت ۷:۱۵ همراه با صندلی کنار پنجره را انتخاب می‌کند.',
              prs: 'مشتری قطار سریع ICE ساعت ۷:۱۵ با چوکی کنار کلکین را گرفت.',
              tr: 'Müşteri 07:15 hızlı trenini cam kenarı koltukla tercih etmiştir.',
              ar: 'اختار العميل قطار ICE السريع في الساعة 07:15 مع مقعد بجانب النافذة.',
              es: 'El cliente elige el ICE de las 07:15 con asiento de ventana.'
            }
          },
          {
            id: 'a2_h_q4',
            question: '4. Wie soll der Kunde den Hustensaft einnehmen?',
            options: ['Einmal täglich morgens vor dem Frühstück', 'Dreimal täglich einen Löffel nach dem Essen', 'Nur vor dem Schlafengehen'],
            correctAnswer: 'Dreimal täglich einen Löffel nach dem Essen',
            explanation: {
              en: 'Pharmacist prescribes: "Nehmen Sie dreimal täglich einen Löffel nach dem Essen."',
              fa: 'دستور مصرف دارو: روزی سه بار، هر بار یک قاشق بعد از غذا.',
              prs: 'روزی ۳ مرتبه یک قاشق بعد از نان.',
              tr: 'Günde 3 kez yemeklerden sonra bir kaşık alınması önerilmiştir.',
              ar: 'ملعقة ثلاث مرات يومياً بعد الوجبات.',
              es: 'Una cucharada tres veces al día después de comer.'
            }
          },
          {
            id: 'a2_h_q5',
            question: '5. Was trainiert Markus heute im Sportstudio?',
            options: ['Schweres Krafttraining mit Hanteln', 'Nur Ausdauertraining auf dem Laufband', 'Schwimmen im Hallenbad'],
            correctAnswer: 'Nur Ausdauertraining auf dem Laufband',
            explanation: {
              en: 'Markus explains: "... heute mache ich nur 45 Minuten Ausdauertraining auf dem Laufband".',
              fa: 'مارکوس می‌گوید امروز فقط ۴۵ دقیقه تمرین هوازی روی تردمیل انجام می‌دهد.',
              prs: 'مارکوس صرف روی تردمیل دوش می‌کند.',
              tr: 'Markus bugün sadece koşu bandında dayanıklılık antrenmanı yapmaktadır.',
              ar: 'يمارس ماركوس اليوم تمارين التحمل على جهاز المشي فقط.',
              es: 'Markus solo realiza entrenamiento de resistencia en la cinta.'
            }
          }
        ]
      },
      {
        id: 'a2_h_item2',
        title: 'Teil 2: Radiomagazin mit Kultur- und Freizeittipps (Fragen 6 bis 10 • Einmal hören!)',
        situation: 'Radiosendung "Wochenend-Journal" auf Radio Eins',
        transcript: 'Moderatorin: "Herzlich willkommen beim Wochenend-Journal für Berlin und Brandenburg!\nHier sind unsere Ausflugstipps für das kommende Wochenende:\nErstens: Das Museum für Naturkunde bietet am Samstag freien Eintritt für alle Kinder und Jugendlichen unter 18 Jahren. Geöffnet ist von 10:00 bis 18:00 Uhr.\nZweitens: Auf dem Potsdamer Platz findet das internationale Streetfood-Festival statt. Über 50 Stände bieten Spezialitäten aus Asien, Afrika und Südamerika. Geöffnet Samstag und Sonntag jeweils ab 12:00 Uhr mittags.\nDrittens: Der Tierpark Berlin lädt zur abendlichen Lichter-Nacht ein. Ab 19:30 Uhr werden die Wege stimmungsvoll beleuchtet. Der Eintritt kostet ermäßigt 9 Euro für Schüler und Studenten.\nViertens zum Wetter: Am Samstag bleibt es überwiegend heiter und trocken bei angenehmen 23 Grad, erst am Sonntagabend ziehen von Westen her Regenwolken auf."',
        questions: [
          {
            id: 'a2_h_q6',
            question: '6. Wer hat am Samstag im Naturkundemuseum freien Eintritt?',
            options: ['Alle Besucher ab 65 Jahren', 'Kinder und Jugendliche unter 18 Jahren', 'Nur Schulklassen'],
            correctAnswer: 'Kinder und Jugendliche unter 18 Jahren',
            explanation: {
              en: 'Radio states: "... freien Eintritt für alle Kinder und Jugendlichen unter 18 Jahren."',
              fa: 'ورود کودکان و نوجوانان زیر ۱۸ سال رایگان اعلام شده است.',
              prs: 'ورودی کودکان و نوجوانان زیر ۱۸ سال رایگان است.',
              tr: '18 yaş altı çocuk ve gençler için giriş ücretsizdir.',
              ar: 'الدخول مجاني للأطفال واليافعين دون 18 عاماً.',
              es: 'Entrada gratuita para menores de 18 años.'
            }
          },
          {
            id: 'a2_h_q7',
            question: '7. Wo findet das Streetfood-Festival statt?',
            options: ['Am Brandenburger Tor', 'Auf dem Potsdamer Platz', 'Am Alexanderplatz'],
            correctAnswer: 'Auf dem Potsdamer Platz',
            explanation: {
              en: 'Location given: "Auf dem Potsdamer Platz findet das internationale Streetfood-Festival statt."',
              fa: 'فستیوال بین‌المللی غذای خیابانی در میدان پوتسدامر پلاتس برگزار می‌شود.',
              prs: 'میله غذا در میدان پوتسدام پلاتس برپا است.',
              tr: 'Sokak lezzetleri festivali Potsdamer Platz\'ta yapılmaktadır.',
              ar: 'يقام مهرجان طعام الشارع في بوتسدامر بلاتس.',
              es: 'El festival gastronómico se celebra en Potsdamer Platz.'
            }
          },
          {
            id: 'a2_h_q8',
            question: '8. Wann beginnt das Streetfood-Festival an beiden Tagen?',
            options: ['Um 10:00 Uhr morgens', 'Ab 12:00 Uhr mittags', 'Erst ab 17:00 Uhr'],
            correctAnswer: 'Ab 12:00 Uhr mittags',
            explanation: {
              en: 'Broadcast announces: "... jeweils ab 12:00 Uhr mittags."',
              fa: 'ساعت شروع در هر دو روز از ساعت ۱۲:۰۰ ظهر به بعد است.',
              prs: 'ساعت ۱۲ چاشت آغاز می‌شود.',
              tr: 'Her iki gün de öğlen saat 12:00\'den itibaren açıktır.',
              ar: 'يبدأ المهرجان يومياً من الساعة 12:00 ظهراً.',
              es: 'Comienza a las 12:00 del mediodía.'
            }
          },
          {
            id: 'a2_h_q9',
            question: '9. Wie viel kostet die Lichter-Nacht im Tierpark für Studenten?',
            options: ['5 Euro', '9 Euro', '15 Euro'],
            correctAnswer: '9 Euro',
            explanation: {
              en: 'Announcement mentions: "Der Eintritt kostet ermäßigt 9 Euro für Schüler und Studenten."',
              fa: 'ورودی تخفیف‌دار دانشجویی و دانش‌آموزی ۹ یورو است.',
              prs: 'تکت تخفیف برای محصلین ۹ یورو است.',
              tr: 'Öğrenciler için indirimli giriş ücreti 9 Eurodur.',
              ar: 'سعر تذكرة الطلاب المخفضة هو 9 يورو.',
              es: 'La entrada reducida para estudiantes cuesta 9 euros.'
            }
          },
          {
            id: 'a2_h_q10',
            question: '10. Wie wird das Wetter am Samstag?',
            options: ['Regnerisch und stürmisch', 'Überwiegend sonnig und trocken bei 23 Grad', 'Kalt bei 12 Grad'],
            correctAnswer: 'Überwiegend sonnig und trocken bei 23 Grad',
            explanation: {
              en: 'Weather report: "... überwiegend heiter und trocken bei angenehmen 23 Grad".',
              fa: 'آب و هوای شنبه عمدتاً آفتابی و خشک در دمای مطبوع ۲۳ درجه است.',
              prs: 'هوا آفتابی و ۲۳ درجه است.',
              tr: 'Hava çoğunlukla açık, yağışsız ve 23 derece olacaktır.',
              ar: 'الطقس سيكون صحواً وجافاً بدرجة حرارة 23 مئوية.',
              es: 'Mayormente soleado y seco con 23 grados.'
            }
          }
        ]
      },
      {
        id: 'a2_h_item3',
        title: 'Teil 3: Telefongespräche und Voicemails (Fragen 11 bis 15 • Zweimal hören)',
        situation: 'Anrufbeantworter von Handwerkern, Schulen, Zahnarzt und Vermieter',
        transcript: 'Nachricht 11 (Zahnarzt):\n"Guten Tag Frau Yilmaz, Praxis Dr. Berger. Wir möchten Sie an Ihren Kontrolltermin morgen Vormittag um 09:15 Uhr erinnern. Sollten Sie verhindert sein, rufen Sie uns bitte bis 17 Uhr an."\n\nNachricht 12 (Vermieter Herr Klein):\n"Hallo Herr Al-Mansoor, hier Klein, Ihr Vermieter. Der Heizungsmonteur kommt am Donnerstag zwischen 14 und 16 Uhr, um die Therme in Ihrer Wohnung zu überprüfen. Bitte sorgen Sie dafür, dass jemand zu Hause ist."\n\nNachricht 13 (Paketdienst):\n"Guten Tag, hier der DHL-Zustellservice. Ihr Paket konnte heute nicht zugestellt werden, da niemand angetroffen wurde. Wir haben die Sendung in die Filiale in der Hauptstraße 45 gebracht. Sie können das Paket ab morgen mit Ihrem Ausweis abholen."\n\nNachricht 14 (Sprachschule Prüfungsabteilung):\n"Guten Morgen Herr Bashir, hier spricht die VHS München. Ihr telc-A2-Zertifikat ist eingetroffen. Sie können die Originalurkunde montags bis donnerstags zwischen 10 und 13 Uhr im Raum 204 persönlich abholen."\n\nNachricht 15 (Freund Martin):\n"Hi David, hier Martin! Wir wollten doch am Sonntag Fußball spielen. Leider regnet es laut Wetterbericht. Wollen wir stattdessen zusammen in die Boulderhalle zum Klettern gehen? Melde dich mal!"',
        questions: [
          {
            id: 'a2_h_q11',
            question: '11. Um wie viel Uhr ist der Zahnarzttermin von Frau Yilmaz?',
            options: ['08:30 Uhr', '09:15 Uhr', '11:00 Uhr'],
            correctAnswer: '09:15 Uhr',
            explanation: {
              en: 'Dentist confirms: "... Kontrolltermin morgen Vormittag um 09:15 Uhr."',
              fa: 'وقت معاینه دندانپزشکی فردا ساعت ۰۹:۱۵ صبح است.',
              prs: 'وقت معاینه داکتر دندان ساعت ۰۹:۱۵ صبح است.',
              tr: 'Diş randevusu sabah saat 09:15\'tedir.',
              ar: 'موعد طبيب الأسنان في تمام الساعة 09:15 صباحاً.',
              es: 'La cita con el dentista es a las 09:15.'
            }
          },
          {
            id: 'a2_h_q12',
            question: '12. Wann kommt der Heizungsmonteur zur Wohnungsüberprüfung?',
            options: ['Am Donnerstag zwischen 14 und 16 Uhr', 'Am Freitag um 10 Uhr', 'Am Samstagmorgen'],
            correctAnswer: 'Am Donnerstag zwischen 14 und 16 Uhr',
            explanation: {
              en: 'Landlord specifies: "... am Donnerstag zwischen 14 und 16 Uhr".',
              fa: 'تعمیرکار شوفاژ روز پنجشنبه بین ساعت ۱۴ تا ۱۶ می‌آید.',
              prs: 'مستری گرمایش روز پنجشنبه بین ۱۴ تا ۱۶ بعد از ظهر می‌آید.',
              tr: 'Kalorifer tesisatçısı perşembe günü 14-16 saatleri arasında gelecektir.',
              ar: 'فني التدفئة سيحضر يوم الخميس بين 14:00 و 16:00.',
              es: 'El técnico de la calefacción vendrá el jueves de 14 a 16 h.'
            }
          },
          {
            id: 'a2_h_q13',
            question: '13. Wo kann das Paket ab morgen abgeholt werden?',
            options: ['Beim Nachbarn im 2. Stock', 'In der Postfiliale in der Hauptstraße 45', 'An der Packstation'],
            correctAnswer: 'In der Postfiliale in der Hauptstraße 45',
            explanation: {
              en: 'Delivery driver notes: "... in die Filiale in der Hauptstraße 45 gebracht."',
              fa: 'بسته پستی به شعبه پست در خیابان هائوپت شماره ۴۵ تحویل داده شده است.',
              prs: 'بسته در شعبه پسته در جاده اصلی ۴۵ است.',
              tr: 'Paket Hauptstraße 45 numaralı postaneden alınabilir.',
              ar: 'تم تسليم الطرد إلى فرع البريد في شارع هاوبت شتراسه 45.',
              es: 'El paquete está en la sucursal de Hauptstraße 45.'
            }
          },
          {
            id: 'a2_h_q14',
            question: '14. Wo und wann kann das A2-Zertifikat abgeholt werden?',
            options: ['Nur freitags am Empfang', 'Montag bis Donnerstag zwischen 10 und 13 Uhr in Raum 204', 'Per E-Mail als Download'],
            correctAnswer: 'Montag bis Donnerstag zwischen 10 und 13 Uhr in Raum 204',
            explanation: {
              en: 'Voice message states: "... montags bis donnerstags zwischen 10 und 13 Uhr im Raum 204".',
              fa: 'مدرک اصلی از دوشنبه تا پنجشنبه ساعت ۱۰ تا ۱۳ در اتاق ۲۰۴ قابل تحویل است.',
              prs: 'مدرک از دوشنبه تا پنجشنبه بین ساعت ۱۰ تا ۱۳ در اتاق ۲۰۴ توزیع می‌شود.',
              tr: 'Sertifika pazartesi-perşembe 10-13 saatleri arasında 204 no\'lu odadan alınabilir.',
              ar: 'يمكن استلام الشهادة من الاثنين إلى الخميس بين 10:00 و 13:00 في الغرفة 204.',
              es: 'Se recoge de lunes a jueves de 10 a 13 h en el aula 204.'
            }
          },
          {
            id: 'a2_h_q15',
            question: '15. Was schlägt Martin als Alternative zum Fußball vor?',
            options: ['Ins Kino gehen', 'Klettern in der Boulderhalle', 'Zu Hause Computerspiele spielen'],
            correctAnswer: 'Klettern in der Boulderhalle',
            explanation: {
              en: 'Martin proposes: "Wollen wir stattdessen zusammen in die Boulderhalle zum Klettern gehen?"',
              fa: 'مارتین پیشنهاد می‌دهد به جای فوتبال به سالن صخره‌نوردی بروند.',
              prs: 'مارتین رفتن به سالون سنگ‌نوردی را پیشنهاد کرد.',
              tr: 'Martin futbol yerine tırmanma salonuna gitmeyi önermektedir.',
              ar: 'يقترح مارتين الذهاب إلى صالة التسلق كبديل لكرة القدم.',
              es: 'Martin propone ir al rocódromo a escalar.'
            }
          }
        ]
      },
      {
        id: 'a2_h_item4',
        title: 'Teil 4: Meinungen zu einem Alltagsthema (Fragen 16 bis 20 • Einmal hören!)',
        situation: 'Straßenumfrage: "Einkaufen im Supermarkt oder auf dem Wochenmarkt?"',
        transcript: 'Reporter: "Wir fragen heute die Bürger in Stuttgart: Kaufen Sie lieber im Discounter-Supermarkt oder auf dem Wochenmarkt ein?"\n\nSprecherin 1 (Frau Klein): "Für mich kommt nur der Wochenmarkt in Frage. Dort sind das Gemüse und Obst regional und frisch vom Bauern. Das schmeckt viel besser als im Supermarkt, auch wenn es etwas mehr kostet."\n\nSprecher 2 (Herr Bauer): "Ich arbeite Vollzeit und habe samstagmorgens keine Zeit für den Markt. Im großen Supermarkt bekomme ich nach Feierabend alles an einem Ort: Lebensmittel, Waschmittel, Getränke. Das spart mir jede Menge Zeit."\n\nSprecherin 3 (Frau Richter): "Ich kombiniere beides. Frisches Brot und Käse hole ich gerne samstags auf dem Markt, weil die Atmosphäre so nett ist. Aber die Grundnahrungsmittel wie Reis, Nudeln und Milch kaufe ich günstig im Discounter."\n\nSprecher 4 (Herr Öztürk): "Als Großfamilie mit vier Kindern müssen wir sehr auf das Haushaltsbudget achten. Der Wochenmarkt ist uns schlichtweg zu teuer. Im Discounter bekommen wir gute Qualität zu fairen Preisen."\n\nSprecherin 5 (Frau Meier): "Ich achte besonders auf Bio-Qualität und unverpackte Produkte. Auf dem Markt kann ich meine eigenen Stoffbeutel mitbringen und produziere fast keinen Plastikmüll."',
        questions: [
          {
            id: 'a2_h_q16',
            question: '16. Warum kauft Frau Klein (Sprecherin 1) bevorzugt auf dem Wochenmarkt?',
            options: ['Weil es dort billiger als im Supermarkt ist', 'Wegen der frischen und regionalen Produkte vom Bauern', 'Weil der Markt rund um die Uhr geöffnet hat'],
            correctAnswer: 'Wegen der frischen und regionalen Produkte vom Bauern',
            explanation: {
              en: 'Frau Klein highlights: "... Gemüse und Obst regional und frisch vom Bauern. Das schmeckt viel besser".',
              fa: 'خانم کلاین به دلیل سبزیجات و میوه‌های تازه و محلی کشاورزان از بازار خرید می‌کند.',
              prs: 'به خاطر میوه‌ها و ترکاری‌های تازه دهقانان.',
              tr: 'Köylüden taze ve yerel ürünler geldiği için.',
              ar: 'بسبب المنتجات الطازجة والمحلية القادمة من المزارع.',
              es: 'Por los productos frescos y regionales de agricultores.'
            }
          },
          {
            id: 'a2_h_q17',
            question: '17. Was ist der Hauptgrund für Herrn Bauer (Sprecher 2), im Supermarkt einzukaufen?',
            options: ['Er möchte Zeit sparen und alles an einem Ort bekommen', 'Er mag den Geruch des Supermarkts', 'Er kennt die Mitarbeiter persönlich'],
            correctAnswer: 'Er möchte Zeit sparen und alles an einem Ort bekommen',
            explanation: {
              en: 'Herr Bauer states: "... bekomme ich nach Feierabend alles an einem Ort (...) Das spart mir jede Menge Zeit."',
              fa: 'آقای باوئر پس از کار همه اقلام را یکجا تهیه می‌کند و در وقت صرفه‌جویی می‌کند.',
              prs: 'به خاطر صرفه‌جویی در وقت و گرفتن همه چیز در یک دکان.',
              tr: 'Zaman kazanmak ve her şeyi tek bir yerde bulabilmek için.',
              ar: 'لتوفير الوقت والحصول على كل المشتريات في مكان واحد.',
              es: 'Para ahorrar tiempo y encontrar todo en un único lugar.'
            }
          },
          {
            id: 'a2_h_q18',
            question: '18. Wie löst Frau Richter (Sprecherin 3) ihre Einkäufe?',
            options: ['Sie bestellt alle Einkäufe nur noch online', 'Sie kauft Brot und Käse auf dem Markt, Grundnahrungsmittel im Discounter', 'Sie isst nur im Restaurant'],
            correctAnswer: 'Sie kauft Brot und Käse auf dem Markt, Grundnahrungsmittel im Discounter',
            explanation: {
              en: 'Frau Richter combines both: bread/cheese at market, staples like noodles/rice at discounter.',
              fa: 'نان و پنیر را از بازار محلی و اقلام اصلی مثل ماکارونی و برنج را از تخفیف‌فروشی می‌خرد.',
              prs: 'نان و پنیر از بازار، و مواد اولیه ارزان از سوپرمارکت.',
              tr: 'Ekmek ve peyniri pazardan, temel gıdaları indirim marketinden almaktadır.',
              ar: 'تشتري الخبز والجبن من السوق، والمواد الأساسية من السوبرماركت المخفض.',
              es: 'Compra pan y queso en el mercado y alimentos básicos en el súper.'
            }
          },
          {
            id: 'a2_h_q19',
            question: '19. Warum kauft Herr Öztürk (Sprecher 4) nicht auf dem Markt ein?',
            options: ['Weil er keine frischen Lebensmittel mag', 'Weil der Wochenmarkt für eine Großfamilie zu teuer ist', 'Weil er kein Auto hat'],
            correctAnswer: 'Weil der Wochenmarkt für eine Großfamilie zu teuer ist',
            explanation: {
              en: 'Herr Öztürk clarifies: "Als Großfamilie (...) Der Wochenmarkt ist uns schlichtweg zu teuer."',
              fa: 'آقای اوزتورک تصریح می‌کند: برای خانواده پرجمعیت با ۴ فرزند بازار هفتگی بسیار گران تمام می‌شود.',
              prs: 'برای فامیل کلان با ۴ طفل بازار محلی خیلی گران تمام می‌شود.',
              tr: '4 çocuklu geniş aile için semt pazarı pahalı gelmektedir.',
              ar: 'لأن السوق الأسبوعي مكلف جداً لعائلة كبيرة تضم 4 أطفال.',
              es: 'Porque para una familia numerosa el mercado resulta demasiado caro.'
            }
          },
          {
            id: 'a2_h_q20',
            question: '20. Welcher Umweltaspekt ist Frau Meier (Sprecherin 5) besonders wichtig?',
            options: ['Vermeidung von Plastikmüll durch eigene Stoffbeutel', 'Schneller Transport mit dem Lkw', 'Günstige Plastiktüten'],
            correctAnswer: 'Vermeidung von Plastikmüll durch eigene Stoffbeutel',
            explanation: {
              en: 'Frau Meier explains: "... kann ich meine eigenen Stoffbeutel mitbringen und produziere fast keinen Plastikmüll."',
              fa: 'کاهش زباله پلاستیکی با همراه داشتن کیسه‌های پارچه‌ای شخصی.',
              prs: 'جلوگیری از پلاستیک با بردن کڅوړه‌های تکه‌ای.',
              tr: 'Kendi bez torbalarını getirerek plastik atık üretmemesi.',
              ar: 'تجنب النفايات البلاستيكية باستخدام أكياس قماشية خاصة.',
              es: 'Evitar residuos plásticos usando sus propias bolsas de tela.'
            }
          }
        ]
      }
    ]
  },
  schreiben: {
    title: 'Modul Schreiben (30 Minuten • 2 Aufgaben)',
    durationMinutes: 30,
    taskType: 'Teil 1: Kurze Mitteilung (SMS/Chat) & Teil 2: Formelle E-Mail mit 3 Leitpunkten',
    situation: 'Teil 1 (ca. 20–30 Wörter): Sie können morgen nicht zum Deutschkurs kommen und schreiben Ihrer Mitschülerin Laura eine SMS.\nTeil 2 (ca. 40–50 Wörter): Sie möchten ein Zimmer in einer Wohngemeinschaft (WG) mieten und schreiben an die Vermieterin Frau Hoffmann.',
    prompt: 'Teil 2 Schreibaufgabe:\nSchreiben Sie eine E-Mail an Frau Hoffmann bezüglich des WG-Zimmers:\n1. Wer sind Sie? (Beruf/Studium, Herkunft, Alter)\n2. Warum interessiert Sie das Zimmer? (Lage, Ruhige Atmosphäre)\n3. Fragen Sie nach einem Besichtigungstermin nächste Woche.',
    guidingPoints: [
      '1. Sich kurz vorstellen (Alter, Herkunft, Tätigkeit)',
      '2. Grund für das Interesse am WG-Zimmer erklären',
      '3. Nach einem Termin für die Wohnungsbesichtigung fragen'
    ],
    targetWordCount: 'ca. 40 bis 50 Wörter',
    sampleSolution: 'Sehr geehrte Frau Hoffmann,\n\nmein Name ist Sayed Bashir, ich bin 28 Jahre alt und komme aus Afghanistan. Zurzeit absolviere ich eine Ausbildung zum Elektroniker in Frankfurt.\n\nIch habe Ihre Anzeige gelesen und interessiere mich sehr für das Zimmer, da die Wohnung nah an meiner Ausbildungsstätte liegt und sehr ruhig ist.\n\nWäre es möglich, das Zimmer nächste Woche am Mittwochnachmittag persönlich zu besichtigen?\n\nIch freue mich auf Ihre Rückmeldung.\n\nMit freundlichen Grüßen,\nSayed Bashir\nTelefon: 0176 12345678',
    scoringCriteria: {
      en: 'Teil 1: 5 points (message clarity and appropriateness). Teil 2: 15 points (5 points for addressing all 3 content points, 5 points for sentence connectors/vocabulary, 5 points for grammatical correctness). Total: 20 points.',
      fa: 'بخش ۱: ۵ نمره. بخش ۲: ۱۵ نمره (۵ نمره پوشش ۳ نکته، ۵ نمره گرامر و حروف ربط weil/dass، ۵ نمره ساختار رسمی). مجموع: ۲۰ نمره.',
      prs: 'بخش ۱ دارای ۵ نمره و بخش ۲ دارای ۱۵ نمره با پوشش ۳ نکته اصلی.',
      tr: '1. Bölüm 5 puan, 2. Bölüm 15 puan (3 ana madde, bağlaçlar ve gramer doğruluğu).',
      ar: 'القسم 1: 5 نقاط. القسم 2: 15 نقطة لتغطية النقاط الثلاث والقواعد والربط.',
      es: 'Parte 1: 5 puntos. Parte 2: 15 puntos cumpliendo los 3 puntos con subordinación.'
    }
  },
  sprechen: {
    title: 'Modul Sprechen (15 Minuten • Paarprüfung in 3 Teilen)',
    durationMinutes: 15,
    teil1: {
      name: 'Teil 1: Fragen zur Person beantworten (3–4 Minuten)',
      instruction: {
        en: 'Answer detailed questions about your daily routine, family, free time, and working life in Germany.',
        fa: 'به سوالات جزئی درباره برنامه روزانه، خانواده، اوقات فراغت و شغل خود در آلمان پاسخ دهید.',
        prs: 'به سوالات تفصیلی درباره زندگی روزمره و کار پاسخ دهید.',
        tr: 'Günlük yaşamınız, aileniz ve işiniz hakkında soruları yanıtlayın.',
        ar: 'أجب عن أسئلة تفصيلية حول يومياتك وعائلتك وعملك.',
        es: 'Responde a preguntas sobre tu vida diaria, familia y trabajo.'
      },
      prompts: ['Tagesablauf', 'Familie in Deutschland/Heimat', 'Lieblingsessen', 'Verkehrsmittel im Alltag', 'Pläne für die Zukunft'],
      sampleResponse: 'Prüfer: "Wie sieht ein typischer Arbeitstag bei Ihnen aus?"\nKandidat: "Ich stehe meistens um 06:00 Uhr auf und frühstücke mit meiner Familie. Um 07:15 Uhr nehme ich die U-Bahn zur Arbeit. Von 08:00 bis 16:30 Uhr arbeite ich in der Werkstatt. Abends koche ich gerne und lerne zwei Stunden Deutsch für meine B1-Prüfung."'
    },
    teil2: {
      name: 'Teil 2: Von einem Erlebnis oder Thema berichten (4–5 Minuten)',
      instruction: {
        en: 'Draw a topic card (e.g., "Mein letzter Urlaub", "Ein schönes Fest", "Mein erstes Fahrrad") and speak continuously for 1.5 to 2 minutes. The partner then asks an additional question.',
        fa: 'یک کارت موضوعی (مانند آخرین سفر، یک جشن خاطره‌انگیز، خرید اول) بردارید و حدود ۱.۵ تا ۲ دقیقه پیوسته صحبت کنید. همتای شما یک سوال تکمیلی می‌پرسد.',
        prs: 'درباره یک موضوع ۱.۵ دقیقه پیوسته صحبت کنید و به سوال پارتنر پاسخ دهید.',
        tr: 'Seçilen konu hakkında 1.5-2 dakika konuşun ve partnerinizin sorusunu yanıtlayın.',
        ar: 'تحدث لمدة دقيقتين حول موضوع البطاقة وأجب عن سؤال زميلك.',
        es: 'Habla durante 2 minutos sobre un tema y responde a la pregunta de tu compañero.'
      },
      topicCards: [
        'Thema: Mein schönstes Fest (Wann? Mit wem? Was haben Sie gegessen/gefeiert?)',
        'Thema: Mein letzter Urlaub (Wohin sind Sie gereist? Wie war das Wetter?)',
        'Thema: Ein besonderes Geschenk (Von wem bekommen? Warum war es wichtig?)'
      ],
      sampleResponse: 'Kandidat: "Ich möchte über das Zuckerfest im letzten Jahr erzählen. Wir haben uns mit der ganzen Familie und Freunden in München getroffen. Es gab traditionelles Essen, leckere Süßigkeiten und wir haben den Kindern Geschenke gegeben. Für mich war das ein wunderschöner Tag, weil alle fröhlich zusammen waren."\n\nPartner: "Welches traditionelle Gericht hast du am liebsten gegessen?"\nKandidat: "Am liebsten habe ich das traditionelle Reisgericht Qabili Palau gegessen."'
    },
    teil3: {
      name: 'Teil 3: Gemeinsam etwas aushandeln und planen (5 Minuten)',
      instruction: {
        en: 'Plan an activity together with your partner (e.g., organize a farewell party for a colleague). Make suggestions, react to counter-proposals, and reach an agreement.',
        fa: 'با همتای امتحانی خود یک رویداد را مشترکاً برنامه‌ریزی کنید (مانند برگزاری جشن خداحافظی برای یک همکار). پیشنهاد دهید، چانه‌زنی کنید و به توافق برسید.',
        prs: 'یک برنامه مشترک برای جشن خداحافظی همکار طرح کنید و توافق نمایید.',
        tr: 'Partnerinizle birlikte bir veda partisi planlayın, önerilerde bulunun ve uzlaşın.',
        ar: 'خططا معاً لتنظيم حفل وداع لزميل في العمل وتوصلا إلى اتفاق.',
        es: 'Planificad juntos una fiesta de despedida para un compañero.'
      },
      planningScenario: 'Eine Abschiedsfeier für eine Kollegin organisieren',
      discussionPoints: [
        'Wann feiern? (Freitagnachmittag im Büro oder Samstagabend im Restaurant)',
        'Was schenken? (Gemeinsamer Gutschein oder Fotobuch)',
        'Wer kümmert sich um Essen und Getränke?',
        'Wie informieren wir die anderen Kollegen?'
      ],
      sampleResponse: 'Kandidat A: "Hallo Tobias, unsere Kollegin Sarah verlässt nächste Woche die Firma. Wir sollten eine kleine Abschiedsfeier für sie machen. Was hältst du davon, wenn wir am Freitagnachmittag im Pausenraum feiern?"\nKandidat B: "Freitagnachmittag ist eine super Idee, da haben alle Feierabend. Ich könnte ein paar Brezeln und Getränke besorgen. Möchtest du einen Kuchen backen?"\nKandidat A: "Ja gerne, ich backe einen Apfelkuchen. Und was schenken wir ihr?"\nKandidat B: "Wir könnten ein schönes Fotobuch mit Erinnerungsfotos von allen Kollegen machen und einen Gutschein hineinlegen."\nKandidat A: "Perfekt! Ich schreibe heute noch eine E-Mail an alle Kollegen, damit jeder etwas Geld dazugibt."'
    }
  }
};

// =========================================================================
// TELC DEUTSCH A2 (STANDARD: 80 MINUTEN)
// Lesen: 30 Min (20 Fragen) | Hören: 20 Min (20 Fragen) | Schreiben: 30 Min | Sprechen: 15 Min
// =========================================================================
export const EXAM_TELC_A2: StandardizedExam = {
  id: 'exam_telc_a2',
  title: 'telc Deutsch A2 (Offizielle Standardprüfung)',
  standard: 'telc',
  level: 'A2.1',
  totalDurationMinutes: 80,
  passingScore: '60% (36 / 60 Punkte)',
  strategy: {
    level: 'A2.1',
    timeManagement: [
      {
        section: 'Lesen (Reading) - 20 Fragen',
        allocatedMinutes: 30,
        tip: {
          en: '20 questions in 30 minutes. Teil 1 (5 Qs): Short news articles. Teil 2 (5 Qs): Directory board. Teil 3 (5 Qs): Personal letters/emails. Teil 4 (5 Qs): Advertisements.',
          fa: '۲۰ سوال در ۳۰ دقیقه. بخش ۱ مقالات کوتاه، بخش ۲ راهنمای طبقات، بخش ۳ ایمیل‌های شخصی، بخش ۴ آگهی‌ها.',
          prs: '۲۰ سوال خواندن در ۳۰ دقیقه.',
          tr: '30 dakikada 20 okuma sorusu: Makaleler, bina rehberleri, e-postalar ve ilanlar.',
          ar: '20 سؤال قراءة في 30 دقيقة عبر 4 أجزاء متوازنة.',
          es: '20 preguntas de lectura en 30 minutos divididas en 4 partes.'
        }
      },
      {
        section: 'Hören (Listening) - 20 Fragen',
        allocatedMinutes: 20,
        tip: {
          en: '20 questions in 20 minutes. Teil 1 (5 dialogues), Teil 2 (5 radio reports/announcements), Teil 3 (5 telephone messages), Teil 4 (5 opinions on a topic).',
          fa: '۲۰ سوال در ۲۰ دقیقه. بخش ۱ مکالمات، بخش ۲ گزارش‌های رادیویی، بخش ۳ پیام‌های صوتی تلفن، بخش ۴ نظرات افراد درباره یک موضوع.',
          prs: '۲۰ سوال شنیداری در ۲۰ دقیقه.',
          tr: '20 dakikada 20 dinleme sorusu.',
          ar: '20 سؤال استماع في 20 دقيقة.',
          es: '20 preguntas de escucha en 20 minutos.'
        }
      },
      {
        section: 'Schreiben (Writing) - 2 Aufgaben',
        allocatedMinutes: 30,
        tip: {
          en: 'Write a detailed message/email covering all prompt points (approx. 40-50 words). Focus on connectors (weil, dass, deshalb).',
          fa: 'نگارش ایمیل با پوشش تمام نکات و استفاده از حروف ربط مانند weil و deshalb (حدود ۴۰-۵۰ کلمه).',
          prs: 'نوشتن ایمیل ۴۰ الی ۵۰ کلمه‌ای با حروف ربط مناسب.',
          tr: 'Tüm yönergeleri kapsayan 40-50 kelimelik e-posta yazımı.',
          ar: 'كتابة بريد إلكتروني تفصيلي يغطي جميع النقاط (40-50 كلمة).',
          es: 'Redacción de correo formal/informal de 40-50 palabras con conectores.'
        }
      },
      {
        section: 'Sprechen (Speaking) - 3 Teile',
        allocatedMinutes: 15,
        tip: {
          en: 'Teil 1: Answering questions about yourself. Teil 2: Talking about personal experiences. Teil 3: Joint negotiation and planning.',
          fa: 'بخش ۱: پاسخ به سوالات فردی. بخش ۲: صحبت درباره تجارب شخصی. بخش ۳: برنامه‌ریزی مشترک.',
          prs: 'صحبت درباره خود و تصمیم‌گیری مشترک.',
          tr: 'Kendini detaylı anlatma, deneyim paylaşımı ve ortak planlama.',
          ar: 'التحدث عن النفس والخبرات السابقة والتخطيط المشترك.',
          es: 'Respuestas personales, relatos de experiencias y planificación conjunta.'
        }
      }
    ],
    stepByStepStrategies: [
      {
        title: 'telc A2 Hörstrategie: Vor dem Hören Schlüsselwörter überfliegen',
        steps: [
          {
            en: 'Always read the multiple-choice options before the audio starts.',
            fa: 'همواره پیش از شروع پخش فایل صوتی، گزینه‌های تستی را به سرعت بخوانید.',
            prs: 'قبل از شروع صدا گزینه‌ها را بخوانید.',
            tr: 'Ses kaydı başlamadan önce şıkları hızlıca okuyun.',
            ar: 'اقرأ الخيارات المتاحة قبل بدء التسجيل الصوتي.',
            es: 'Lee siempre las opciones antes de que comience el audio.'
          }
        ]
      }
    ],
    commonMistakes: [
      {
        mistake: 'Falsche Verbstellung im Nebensatz mit "weil" (z.B. *weil ich bin krank*).',
        correction: '... weil ich krank bin.',
        explanation: {
          en: 'In subordinate clauses with "weil", the conjugated verb always goes to the very end.',
          fa: 'در جملات فرعی با weil، فعل صرف‌شده باید به آخر جمله برود.',
          prs: 'بعد از weil فعل در آخر جمله قرار می‌گیرد.',
          tr: '"weil" bağlacından sonra çekimli fiil cümlenin sonuna gider.',
          ar: 'في الجملة الجانبية بعد weil يذهب الفعل المصرف إلى نهاية الجملة.',
          es: 'En oraciones subordinadas con "weil", el verbo conjugado va al final.'
        }
      }
    ]
  },
  lesen: {
    title: 'Modul Lesen (Reading Comprehension)',
    durationMinutes: 30,
    texts: [
      {
        title: 'Teil 1: Zeitungsmeldungen und Berichte (Fragen 1–5)',
        sourceType: 'Lokale Tageszeitung',
        body: 'Köln baut den öffentlichen Nahverkehr massiv aus:\nAb dem kommenden Monat fahren in der Kölner Innenstadt zwanzig neue moderne Elektrobusse. Diese Busse sind leise, klimafreundlich und barrierefrei für Rollstuhlfahrer und Kinderwagen zugänglich. Die Stadtverwaltung plant zudem, das Radwegenetz bis zum nächsten Jahr um weitere 50 Kilometer zu erweitern. Autofahrer werden gebeten, an Werktagen vermehrt die Park-and-Ride-Plätze am Stadtrand zu nutzen, um Staus im Zentrum zu vermeiden.',
        questions: [
          {
            id: 'telc_a2_l_q1',
            question: '1. In Köln fahren ab nächstem Monat zwanzig neue Elektrobusse.',
            options: ['Richtig', 'Falsch'],
            correctAnswer: 'Richtig',
            explanation: {
              en: 'Text confirms: "Ab dem kommenden Monat fahren in der Kölner Innenstadt zwanzig neue moderne Elektrobusse."',
              fa: 'متن تایید می‌کند که ۲۰ اتوبوس برقی جدید ماه آینده شروع به کار می‌کنند.',
              prs: 'بیست بس برقی جدید ماه آینده آغاز به کار می‌کنند.',
              tr: 'Metin gelecek ay 20 yeni elektrikli otobüsün başlayacağını doğrulamaktadır.',
              ar: 'يؤكد النص بدء تشغيل 20 حافلة كهربائية جديدة الشهر المقبل.',
              es: 'El texto confirma que 20 nuevos autobuses eléctricos circularán el próximo mes.'
            }
          },
          {
            id: 'telc_a2_l_q2',
            question: '2. Rollstuhlfahrer können die neuen Busse nicht ohne fremde Hilfe betreten.',
            options: ['Richtig', 'Falsch'],
            correctAnswer: 'Falsch',
            explanation: {
              en: 'They are barrier-free ("barrierefrei für Rollstuhlfahrer und Kinderwagen zugänglich").',
              fa: 'اتوبوس‌ها بدون مانع و برای ویلچر مناسب‌سازی شده‌اند.',
              prs: 'بس‌ها برای افراد دارای ویلچر مساعد است.',
              tr: 'Otobüsler tekerlekli sandalyeler için engelsizdir.',
              ar: 'الحافلات مهيأة ومجهزة لمستخدمي الكراسي المتحركة بدون عوائق.',
              es: 'Son totalmente accesibles sin barreras para sillas de ruedas.'
            }
          },
          {
            id: 'telc_a2_l_q3',
            question: '3. Wie viele Kilometer Radwege sollen bis nächstes Jahr gebaut werden?',
            options: ['20 Kilometer', '50 Kilometer', '100 Kilometer'],
            correctAnswer: '50 Kilometer',
            explanation: {
              en: 'Text states: "um weitere 50 Kilometer zu erweitern."',
              fa: '۵۰ کیلومتر به مسیرهای دوچرخه‌سواری اضافه می‌شود.',
              prs: '۵۰ کیلومتر سرک بایسکل‌سواری اضافه می‌شود.',
              tr: 'Bisiklet yolları 50 kilometre daha genişletilecektir.',
              ar: 'توسعة مسارات الدراجات بمقدار 50 كيلومتراً إضافياً.',
              es: 'Se ampliarán 50 kilómetros de carril bici.'
            }
          },
          {
            id: 'telc_a2_l_q4',
            question: '4. Was wird Autofahrern an Werktagen empfohlen?',
            options: ['Schneller im Zentrum zu fahren', 'Park-and-Ride-Plätze am Stadtrand zu nutzen', 'Das Auto zu verkaufen'],
            correctAnswer: 'Park-and-Ride-Plätze am Stadtrand zu nutzen',
            explanation: {
              en: 'Drivers are asked to use Park-and-Ride lots at the city edge to prevent traffic jams.',
              fa: 'به رانندگان توصیه شده از پارکینگ‌های حاشیه شهر استفاده کنند.',
              prs: 'استفاده از پارکینگ‌های حاشیه شهر توصیه شده است.',
              tr: 'Şehir dışındaki Park-and-Ride alanlarını kullanmaları önerilmektedir.',
              ar: 'يوصى باستخدام مواقف Park-and-Ride عند أطراف المدينة.',
              es: 'Se aconseja utilizar los aparcamientos disuasorios en la periferia.'
            }
          },
          {
            id: 'telc_a2_l_q5',
            question: '5. Warum sollen Autofahrer am Stadtrand parken?',
            options: ['Um Staus im Zentrum zu vermeiden', 'Weil Parken im Zentrum umsonst ist', 'Weil die Straßen gesperrt sind'],
            correctAnswer: 'Um Staus im Zentrum zu vermeiden',
            explanation: {
              en: 'Goal: "um Staus im Zentrum zu vermeiden".',
              fa: 'برای جلوگیری از ترافیک و راهبندان در مرکز شهر.',
              prs: 'به خاطر جلوگیری از بیروبار و راه‌بندان.',
              tr: 'Merkezdeki trafik sıkışıklığını önlemek için.',
              ar: 'لتفادي الازدحام المروري في وسط المدينة.',
              es: 'Para evitar atascos en el centro.'
            }
          }
        ]
      },
      {
        title: 'Teil 2: Orientierung in einem Einkaufszentrum (Fragen 6–10)',
        sourceType: 'Wegweiser City-Galerie',
        body: 'Etagenübersicht City-Galerie:\n- Untergeschoss (UG): Supermarkt, Drogeriemarkt, Bäckerei, Schlüsseldienst.\n- Erdgeschoss (EG): Damen- und Herrenmode, Schmuck, Parfümerie, Info-Point.\n- 1. Obergeschoss (1. OG): Kinderbekleidung, Spielwaren, Buchhandlung, Elektronik.\n- 2. Obergeschoss (2. OG): Food-Court, Cafés, Kunden-WCs, Wickelraum.',
        questions: [
          {
            id: 'telc_a2_l_q6',
            question: '6. Wo finden Sie ein Fachbuch zum Deutschlernen?',
            options: ['Im Untergeschoss', 'Im Erdgeschoss', 'Im 1. Obergeschoss'],
            correctAnswer: 'Im 1. Obergeschoss',
            explanation: {
              en: 'Books are in the bookstore located in the 1st floor ("Buchhandlung im 1. OG").',
              fa: 'کتاب‌فروشی در طبقه اول بالای همکف (1. OG) قرار دارد.',
              prs: 'کتاب‌فروشی در طبقه اول است.',
              tr: 'Kitapçı 1. kattadır (1. OG).',
              ar: 'المكتبة تقع في الطابق الأول.',
              es: 'La librería se encuentra en la 1ª planta.'
            }
          },
          {
            id: 'telc_a2_l_q7',
            question: '7. Sie möchten einen neuen Haustürschlüssel anfertigen lassen. Wohin gehen Sie?',
            options: ['Ins Untergeschoss', 'Ins Erdgeschoss', 'Ins 2. Obergeschoss'],
            correctAnswer: 'Ins Untergeschoss',
            explanation: {
              en: 'Key service ("Schlüsseldienst") is in the basement (UG).',
              fa: 'کلیدسازی در طبقه زیرزمین (UG) است.',
              prs: 'کلیدسازی در زیرزمین است.',
              tr: 'Anahtarcı bodrum kattadır (UG).',
              ar: 'محل المفاتيح يقع في الطابق السفلي UG.',
              es: 'El servicio de cerrajería está en el sótano (UG).'
            }
          },
          {
            id: 'telc_a2_l_q8',
            question: '8. Wo können Sie nach dem Einkaufen zu Mittag essen?',
            options: ['Im Untergeschoss', 'Im 1. OG', 'Im 2. Obergeschoss'],
            correctAnswer: 'Im 2. Obergeschoss',
            explanation: {
              en: 'Food-Court and Cafés are located on the 2nd floor (2. OG).',
              fa: 'فودکورت و رستوران‌ها در طبقه دوم قرار دارند.',
              prs: 'رستورانت‌ها در طبقه دوم هستند.',
              tr: 'Yemek alanı (Food-Court) 2. kattadır.',
              ar: 'مطاعم الوجبات والمقاهي في الطابق الثاني.',
              es: 'La zona de restauración está en la 2ª planta.'
            }
          },
          {
            id: 'telc_a2_l_q9',
            question: '9. Wo befindet sich der Info-Point?',
            options: ['Im Erdgeschoss', 'Im Untergeschoss', 'Im 2. OG'],
            correctAnswer: 'Im Erdgeschoss',
            explanation: {
              en: 'Info-Point is on the ground floor (EG).',
              fa: 'اطلاعات در طبقه همکف (EG) واقع است.',
              prs: 'معلومات در طبقه همکف است.',
              tr: 'Danışma zemin kattadır (EG).',
              ar: 'مكتب الاستعلامات يقع في الطابق الأرضي.',
              es: 'El punto de información se encuentra en la planta baja.'
            }
          },
          {
            id: 'telc_a2_l_q10',
            question: '10. Ein Wickelraum für Babys befindet sich im 2. Obergeschoss.',
            options: ['Richtig', 'Falsch'],
            correctAnswer: 'Richtig',
            explanation: {
              en: 'Baby changing room is on the 2nd floor ("Wickelraum im 2. OG").',
              fa: 'اتاق تعویض پوشک نوزاد در طبقه دوم است.',
              prs: 'اطاق تعویض نوزاد در طبقه دوم است.',
              tr: 'Bebek bakım odası 2. kattadır.',
              ar: 'غرفة رعاية الرضع موجودة في الطابق الثاني.',
              es: 'La sala de lactancia está en la 2ª planta.'
            }
          }
        ]
      },
      {
        title: 'Teil 3: E-Mails und private Nachrichten (Fragen 11–15)',
        sourceType: 'E-Mail von Nachbarn',
        body: 'Liebe Nachbarn im Hausflur,\nwir möchten Ihnen mitteilen, dass wir am kommenden Samstag ab 19:00 Uhr den Geburtstag unserer Tochter im Hof feiern. Es wird Live-Musik geben, aber ab 22:00 Uhr werden wir die Lautstärke selbstverständlich drosseln. Sie sind herzlich eingeladen, auf ein Stück Kuchen und ein Glas Saft vorbeizukommen!\nHerzliche Grüße, Familie Becker (Wohnung 4)',
        questions: [
          {
            id: 'telc_a2_l_q11',
            question: '11. Familie Becker feiert am Samstag den Geburtstag ihrer Tochter.',
            options: ['Richtig', 'Falsch'],
            correctAnswer: 'Richtig',
            explanation: {
              en: 'They celebrate their daughter\'s birthday.',
              fa: 'خانواده بکر روز شنبه تولد دخترشان را جشن می‌گیرند.',
              prs: 'تولد دخترشان را تجلیل می‌نمایند.',
              tr: 'Becker ailesi kızlarının doğum gününü kutlamaktadır.',
              ar: 'تحتفل عائلة بيكر بيوم ميلاد ابنتها يوم السبت.',
              es: 'Celebran el cumpleaños de su hija.'
            }
          },
          {
            id: 'telc_a2_l_q12',
            question: '12. Wo findet die Feier statt?',
            options: ['In der Wohnung 4', 'Im Hof', 'Im Park'],
            correctAnswer: 'Im Hof',
            explanation: {
              en: 'Location: "im Hof".',
              fa: 'جشن در حیاط آپارتمان برگزار می‌شود.',
              prs: 'جشن در حویلی برگزار می‌شود.',
              tr: 'Kutlama bahçede/avluda (im Hof) yapılacaktır.',
              ar: 'يقام الحفل في فناء المبنى.',
              es: 'La fiesta tiene lugar en el patio interior.'
            }
          },
          {
            id: 'telc_a2_l_q13',
            question: '13. Ab wie viel Uhr wird die Musik leiser gemacht?',
            options: ['Ab 19:00 Uhr', 'Ab 22:00 Uhr', 'Erst am nächsten Tag'],
            correctAnswer: 'Ab 22:00 Uhr',
            explanation: {
              en: 'Volume reduced from 22:00: "ab 22:00 Uhr werden wir die Lautstärke selbstverständlich drosseln."',
              fa: 'از ساعت ۲۲:۰۰ صدای موسیقی کم می‌شود.',
              prs: 'از ساعت ۱۰ شب صدا کمتر می‌شود.',
              tr: 'Saat 22:00\'den itibaren ses kısılacaktır.',
              ar: 'سيتم خفض مستوى الصوت بدءاً من الساعة 22:00.',
              es: 'A partir de las 22:00 se bajará el volumen.'
            }
          },
          {
            id: 'telc_a2_l_q14',
            question: '14. Die Nachbarn sind zur Feier eingeladen.',
            options: ['Richtig', 'Falsch'],
            correctAnswer: 'Richtig',
            explanation: {
              en: '"Sie sind herzlich eingeladen..." means neighbors are warmly invited.',
              fa: 'همسایگان صمیمانه به جشن دعوت شده‌اند.',
              prs: 'همسایه‌ها دعوت شده‌اند.',
              tr: 'Komşular davet edilmiştir.',
              ar: 'الجيران مدعوون للمشاركة.',
              es: 'Los vecinos están invitados.'
            }
          },
          {
            id: 'telc_a2_l_q15',
            question: '15. In welcher Wohnung wohnt Familie Becker?',
            options: ['In Wohnung 2', 'In Wohnung 4', 'In Wohnung 10'],
            correctAnswer: 'In Wohnung 4',
            explanation: {
              en: 'Signed: "Familie Becker (Wohnung 4)".',
              fa: 'خانواده بکر در واحد ۴ سکونت دارند.',
              prs: 'در اپارتمان ۴ زندگی دارند.',
              tr: 'Becker ailesi 4 numaralı dairede oturmaktadır.',
              ar: 'تسكن عائلة بيكر في الشقة رقم 4.',
              es: 'Viven en el apartamento 4.'
            }
          }
        ]
      },
      {
        title: 'Teil 4: Kleinanzeigen und Angebote (Fragen 16–20)',
        sourceType: 'Online-Kleinanzeigenportal',
        body: 'Anzeige 1: "Verkaufe gut erhaltenes Damenfahrrad, 28 Zoll, 7 Gänge, 120 Euro VB. Nur Selbstabholung in Bonn."\nAnzeige 2: "Suche dringend Nachhilfe in Englisch für Schüler der 8. Klasse, 15 Euro pro Stunde, 2x pro Woche."\nAnzeige 3: "Biete gemütliches 1-Zimmer-Apartment zur Zwischenmiete für 3 Monate, voll möbliert mit WLAN."',
        questions: [
          {
            id: 'telc_a2_l_q16',
            question: '16. Wie viele Gänge hat das angebotene Damenfahrrad?',
            options: ['3 Gänge', '7 Gänge', '21 Gänge'],
            correctAnswer: '7 Gänge',
            explanation: {
              en: 'The bike has 7 gears ("7 Gänge").',
              fa: 'دوچرخه دارای ۷ دنده است.',
              prs: 'بایسکل دارای ۷ گیر می‌باشد.',
              tr: 'Bisiklet 7 viteslidir.',
              ar: 'الدراجة مزودة بـ 7 سرعات.',
              es: 'La bicicleta tiene 7 marchas.'
            }
          },
          {
            id: 'telc_a2_l_q17',
            question: '17. Kann das Fahrrad per Post verschickt werden?',
            options: ['Ja', 'Nein (Nur Selbstabholung)'],
            correctAnswer: 'Nein (Nur Selbstabholung)',
            explanation: {
              en: '"Nur Selbstabholung in Bonn" means pickup only, no shipping.',
              fa: 'خیر، فقط دریافت حضوری در بن امکان‌پذیر است.',
              prs: 'نخیر، فقط تسلیمی حضوری در بن.',
              tr: 'Hayır, sadece elden teslim alınabilir.',
              ar: 'لا، الاستلام الشخصي فقط في بون.',
              es: 'No, recogida en persona exclusivamente.'
            }
          },
          {
            id: 'telc_a2_l_q18',
            question: '18. Welches Fach wird bei der Nachhilfe gesucht?',
            options: ['Mathematik', 'Englisch', 'Deutsch'],
            correctAnswer: 'Englisch',
            explanation: {
              en: 'Tutoring sought in English ("Nachhilfe in Englisch").',
              fa: 'تدریس خصوصی در درس زبان انگلیسی مد نظر است.',
              prs: 'تدریس خصوصی برای لسان انگلیسی.',
              tr: 'İngilizce dersi için özel ders aranmaktadır.',
              ar: 'المطلوب هو دروس تقوية في اللغة الإنجليزية.',
              es: 'Se busca profesor de inglés.'
            }
          },
          {
            id: 'telc_a2_l_q19',
            question: '19. Wie viel bezahlt die Familie pro Nachhilfestunde?',
            options: ['10 Euro', '15 Euro', '25 Euro'],
            correctAnswer: '15 Euro',
            explanation: {
              en: 'Pay offered is 15 Euros per hour.',
              fa: 'دستمزد ساعتی ۱۵ یورو قید شده است.',
              prs: 'ساعتی ۱۵ یورو پرداخت می‌شود.',
              tr: 'Saatlik ücret 15 Euro\'dur.',
              ar: 'المبلغ المعروض 15 يورو للساعة.',
              es: 'Se pagan 15 euros por hora.'
            }
          },
          {
            id: 'telc_a2_l_q20',
            question: '20. Das 1-Zimmer-Apartment wird möbliert angeboten.',
            options: ['Richtig', 'Falsch'],
            correctAnswer: 'Richtig',
            explanation: {
              en: 'Described as "voll möbliert mit WLAN".',
              fa: 'آپارتمان به صورت کاملاً مبله و با اینترنت وای‌فای اجاره داده می‌شود.',
              prs: 'آپارتمان مکمل فرنیچر و وای‌فای دارد.',
              tr: 'Daire eşyalı olarak kiraya verilmektedir.',
              ar: 'الشقة مفروشة بالكامل ومزودة بإنترنت.',
              es: 'El apartamento se ofrece totalmente amueblado.'
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
        id: 'telc_a2_h_item1',
        title: 'Teil 1: Dialoge im Alltag (Fragen 1–5)',
        situation: 'Unterhaltungen im Geschäft und bei der Arbeit',
        transcript: 'Gespräch 1:\nKollege: "Frau Meier, haben Sie den Monatsbericht für den Chef schon ausgedruckt?"\nFrau Meier: "Noch nicht ganz, Herr Weber. Mir fehlen noch die aktuellen Verkaufszahlen aus der Filiale Hamburg. Ich rufe dort sofort an."\nKollege: "Gut, die Sitzung beginnt nämlich schon um 11:30 Uhr."',
        questions: [
          {
            id: 'telc_a2_h_q1',
            question: '1. Welche Zahlen fehlen Frau Meier noch für den Bericht?',
            options: ['Aus der Filiale München', 'Aus der Filiale Hamburg', 'Aus der Filiale Berlin'],
            correctAnswer: 'Aus der Filiale Hamburg',
            explanation: {
              en: 'Missing numbers from Hamburg: "die aktuellen Verkaufszahlen aus der Filiale Hamburg."',
              fa: 'آمارهای فروش شعبه هامبورگ هنوز ناقص است.',
              prs: 'ارقام فروشات شعبه هامبورگ کم است.',
              tr: 'Hamburg şubesinin satış rakamları eksiktir.',
              ar: 'تنقصها أرقام المبيعات من فرع هامبورغ.',
              es: 'Faltan las cifras de ventas de la sucursal de Hamburgo.'
            }
          },
          {
            id: 'telc_a2_h_q2',
            question: '2. Wann beginnt die Chef-Sitzung?',
            options: ['Um 10:00 Uhr', 'Um 11:30 Uhr', 'Um 14:00 Uhr'],
            correctAnswer: 'Um 11:30 Uhr',
            explanation: {
              en: 'Meeting starts at 11:30: "um 11:30 Uhr."',
              fa: 'جلسه رأس ساعت ۱۱:۳۰ آغاز می‌شود.',
              prs: 'جلسه ساعت یازده و نیم شروع می‌شود.',
              tr: 'Toplantı 11:30\'da başlamaktadır.',
              ar: 'يبدأ الاجتماع في الساعة 11:30.',
              es: 'La reunión empieza a las 11:30.'
            }
          },
          {
            id: 'telc_a2_h_q3',
            question: '3. Was macht Frau Meier als Nächstes?',
            options: ['Sie geht nach Hause', 'Sie ruft in Hamburg an', 'Sie druckt den Bericht ohne Zahlen aus'],
            correctAnswer: 'Sie ruft in Hamburg an',
            explanation: {
              en: 'She will call right away: "Ich rufe dort sofort an."',
              fa: 'او بلافاصله با هامبورگ تماس می‌گیرد.',
              prs: 'او فورا به هامبورگ زنگ می‌زند.',
              tr: 'Hamburg şubesini derhal arayacaktır.',
              ar: 'ستتصل فوراً بفرع هامبورغ.',
              es: 'Llamará inmediatamente a Hamburgo.'
            }
          },
          {
            id: 'telc_a2_h_q4',
            question: '4. Welcher Pullover gefällt dem Kunden am besten?',
            options: ['Der blaue Wollpullover', 'Der rote Sportpullover', 'Der schwarze Pullover'],
            correctAnswer: 'Der blaue Wollpullover',
            explanation: {
              en: 'The customer prefers the blue wool sweater.',
              fa: 'مشتری ژاکت پشمی آبی را بیشتر می‌پسندد.',
              prs: 'جمپر آبی رنگ را ترجیح می‌دهد.',
              tr: 'Müşteri mavi yün kazağı beğenmiştir.',
              ar: 'فضل الزبون السترة الصوفية الزرقاء.',
              es: 'El cliente prefiere el jersey azul de lana.'
            }
          },
          {
            id: 'telc_a2_h_q5',
            question: '5. Wie bezahlt der Kunde im Geschäft?',
            options: ['Bar', 'Mit Karte', 'Mit Gutschein'],
            correctAnswer: 'Mit Karte',
            explanation: {
              en: 'The customer pays with debit/credit card.',
              fa: 'مشتری با کارت بانکی پرداخت می‌کند.',
              prs: 'با کارت بانکی پرداخت می‌نماید.',
              tr: 'Müşteri kartla ödeme yapmaktadır.',
              ar: 'يدفع الزبون بواسطة البطاقة المصرفية.',
              es: 'Paga con tarjeta.'
            }
          }
        ]
      },
      {
        id: 'telc_a2_h_item2',
        title: 'Teil 2: Radio- und Lautsprechermeldungen (Fragen 6–10)',
        situation: 'Verkehrsfunk und Bahnhofsansagen',
        transcript: 'Radioansage:\n"Hier ist der Verkehrsservice für Hessen: Auf der Autobahn A3 zwischen Frankfurt-Süd und dem Flughafen gibt es wegen einer Baustelle 6 Kilometer stockenden Verkehr. Autofahrern wird empfohlen, die Ausfahrt Neu-Isenburg zu nehmen."',
        questions: [
          {
            id: 'telc_a2_h_q6',
            question: '6. Auf welcher Autobahn gibt es Verkehrsbehinderungen?',
            options: ['Auf der A1', 'Auf der A3', 'Auf der A7'],
            correctAnswer: 'Auf der A3',
            explanation: {
              en: 'Congestion on the A3: "Auf der Autobahn A3".',
              fa: 'ترافیک سنگین در بزرگراه A3 رخ داده است.',
              prs: 'در شاهراه A3 ترافیک سنگین است.',
              tr: 'A3 otoyolunda trafik aksaması vardır.',
              ar: 'الازدحام على الطريق السريع A3.',
              es: 'El atasco está en la autopista A3.'
            }
          },
          {
            id: 'telc_a2_h_q7',
            question: '7. Wie lang ist der Stau?',
            options: ['3 Kilometer', '6 Kilometer', '12 Kilometer'],
            correctAnswer: '6 Kilometer',
            explanation: {
              en: 'Length of traffic jam: "6 Kilometer".',
              fa: 'طول راهبندان ۶ کیلومتر اعلام شده است.',
              prs: 'طول ترافیک ۶ کیلومتر است.',
              tr: 'Trafik kuyruğu 6 kilometredir.',
              ar: 'طول الازدحام 6 كيلومترات.',
              es: 'El atasco tiene una longitud de 6 kilómetros.'
            }
          },
          {
            id: 'telc_a2_h_q8',
            question: '8. Was ist die Ursache für den Stau?',
            options: ['Ein schwerer Unfall', 'Eine Baustelle', 'Schnee und Eis'],
            correctAnswer: 'Eine Baustelle',
            explanation: {
              en: 'Cause: "wegen einer Baustelle".',
              fa: 'علت ترافیک عملیات عمرانی و ساخت و ساز جاده است.',
              prs: 'کار ساختمانی سرک باعث ترافیک است.',
              tr: 'Gecikmenin nedeni yol çalışmasıdır (Baustelle).',
              ar: 'السبب هو وجود أعمال صيانة للطريق.',
              es: 'La causa son unas obras en la calzada.'
            }
          },
          {
            id: 'telc_a2_h_q9',
            question: '9. Welche Ausfahrt wird als Umleitung empfohlen?',
            options: ['Ausfahrt Neu-Isenburg', 'Ausfahrt Offenbach', 'Ausfahrt Darmstadt'],
            correctAnswer: 'Ausfahrt Neu-Isenburg',
            explanation: {
              en: 'Recommended exit: "Ausfahrt Neu-Isenburg".',
              fa: 'خروجی نوی-آیزنبورگ برای دور زدن ترافیک پیشنهاد شده است.',
              prs: 'خروجی نوی-آیزنبورگ پیشنهاد شد.',
              tr: 'Neu-Isenburg çıkışı önerilmektedir.',
              ar: 'المخرج الموصى به هو Neu-Isenburg.',
              es: 'Se recomienda la salida Neu-Isenburg.'
            }
          },
          {
            id: 'telc_a2_h_q10',
            question: '10. Der Stau befindet sich in der Nähe des Flughafens.',
            options: ['Richtig', 'Falsch'],
            correctAnswer: 'Richtig',
            explanation: {
              en: 'Between Frankfurt-Süd and the airport ("zwischen Frankfurt-Süd und dem Flughafen").',
              fa: 'بین جنوب فرانکفورت و فرودگاه قرار دارد.',
              prs: 'نزدیک میدان هوایی واقع است.',
              tr: 'Havalimanı yakınlarındadır.',
              ar: 'الازدحام بالقرب من المطار.',
              es: 'Se sitúa en las inmediaciones del aeropuerto.'
            }
          }
        ]
      },
      {
        id: 'telc_a2_h_item3',
        title: 'Teil 3: Telefonische Mitteilungen (Fragen 11–15)',
        situation: 'Nachrichten auf dem Anrufbeantworter von Handwerkern und Behörden',
        transcript: 'Anrufbeantworter-Nachricht:\n"Hallo Herr Alimi, hier spricht Meister Klein von der Heizungsfirma. Ihre neue Heizungspumpe ist endlich geliefert worden. Wir könnten am Donnerstag um 08:30 Uhr vorbeikommen, um sie einzubauen. Bitte rufen Sie mich bis morgen 17:00 Uhr unter 0171-889922 zurück."',
        questions: [
          {
            id: 'telc_a2_h_q11',
            question: '11. Welches Ersatzteil ist bei der Firma angekommen?',
            options: ['Eine Waschmaschine', 'Eine Heizungspumpe', 'Ein neuer Wasserhahn'],
            correctAnswer: 'Eine Heizungspumpe',
            explanation: {
              en: 'Heating pump delivered: "Ihre neue Heizungspumpe ist endlich geliefert worden."',
              fa: 'پمپ جدید سیستم گرمایش تحویل داده شده است.',
              prs: 'پمپ تسخین گرمابه تحویل داده شده.',
              tr: 'Isıtma pompası teslim edilmiştir.',
              ar: 'تم استلام مضخة التدفئة الجديدة.',
              es: 'Ha llegado la bomba de la calefacción.'
            }
          },
          {
            id: 'telc_a2_h_q12',
            question: '12. An welchem Tag möchten die Handwerker kommen?',
            options: ['Am Dienstag', 'Am Donnerstag', 'Am Samstag'],
            correctAnswer: 'Am Donnerstag',
            explanation: {
              en: 'They propose Thursday: "am Donnerstag um 08:30 Uhr".',
              fa: 'روز پنجشنبه ساعت ۸:۳۰ صبح پیشنهاد شده است.',
              prs: 'روز پنجشنبه ساعت ۸:۳۰ صبح.',
              tr: 'Perşembe günü saat 08:30 teklif edilmektedir.',
              ar: 'الموعد المقترح هو يوم الخميس الساعة 08:30.',
              es: 'Proponen el jueves a las 08:30.'
            }
          },
          {
            id: 'telc_a2_h_q13',
            question: '13. Bis wann soll Herr Alimi zurückrufen?',
            options: ['Bis morgen 12:00 Uhr', 'Bis morgen 17:00 Uhr', 'Bis nächsten Montag'],
            correctAnswer: 'Bis morgen 17:00 Uhr',
            explanation: {
              en: 'Call back until tomorrow 17:00: "bis morgen 17:00 Uhr".',
              fa: 'تا فردا ساعت ۱۷:۰۰ باید تماس گرفته شود.',
              prs: 'تا فردا ساعت ۵ شام باید زنگ بزند.',
              tr: 'Yarın saat 17:00\'ye kadar geri aramalıdır.',
              ar: 'الاتصال مطلوب حتى الساعة 17:00 من يوم غد.',
              es: 'Debe devolver la llamada antes de las 17:00 de mañana.'
            }
          },
          {
            id: 'telc_a2_h_q14',
            question: '14. Die Handwerker reparieren die Heizung kostenlos.',
            options: ['Richtig', 'Falsch'],
            correctAnswer: 'Falsch',
            explanation: {
              en: 'No mention of free work; standard professional service.',
              fa: 'هیچ اشاره‌ای به رایگان بودن خدمات نشده است.',
              prs: 'کار رایگان نیست.',
              tr: 'İşin ücretsiz olduğuna dair bir bilgi yoktur.',
              ar: 'الخدمة ليست مجانية.',
              es: 'El servicio no es gratuito.'
            }
          },
          {
            id: 'telc_a2_h_q15',
            question: '15. Die Telefonnummer der Firma lautet 0171-889922.',
            options: ['Richtig', 'Falsch'],
            correctAnswer: 'Richtig',
            explanation: {
              en: 'Number confirmed in the message: "0171-889922".',
              fa: 'شماره تلفن اعلام شده در پیام 0171-889922 است.',
              prs: 'شماره تلفن صحیح است.',
              tr: 'Telefon numarası mesajda teyit edilmiştir.',
              ar: 'رقم الهاتف المذكور صحيح.',
              es: 'El número telefónico coincide.'
            }
          }
        ]
      },
      {
        id: 'telc_a2_h_item4',
        title: 'Teil 4: Meinungen zu einem Alltagsthema (Fragen 16–20)',
        situation: 'Kurze Statements zum Thema "Einkaufen im Internet vs. im Geschäft"',
        transcript: 'Sprecher 1 (Frau Klein): "Ich kaufe Kleidung nur noch online. Es spart so viel Zeit, und wenn etwas nicht passt, schicke ich es einfach zurück."\nSprecher 2 (Herr Meyer): "Mir ist die persönliche Beratung im Fachgeschäft wichtig. Ich möchte die Stoffe anfassen und die lokalen Händler in unserer Innenstadt unterstützen."',
        questions: [
          {
            id: 'telc_a2_h_q16',
            question: '16. Frau Klein kauft Kleidung am liebsten im Internet.',
            options: ['Richtig', 'Falsch'],
            correctAnswer: 'Richtig',
            explanation: {
              en: 'She buys clothes online ("Ich kaufe Kleidung nur noch online").',
              fa: 'خانم کلاین لباس‌ها را فقط اینترنتی خریداری می‌کند.',
              prs: 'خانم کلاین فقط آنلاین لباس می‌خرد.',
              tr: 'Bayan Klein kıyafetlerini sadece internetten almaktadır.',
              ar: 'تشتري السيدة كلاين ملابسها عبر الإنترنت فقط.',
              es: 'Compra su ropa exclusivamente por internet.'
            }
          },
          {
            id: 'telc_a2_h_q17',
            question: '17. Was schätzt Frau Klein am Online-Shopping am meisten?',
            options: ['Dass es billiger ist', 'Dass es Zeit spart', 'Dass man Geschenke bekommt'],
            correctAnswer: 'Dass es Zeit spart',
            explanation: {
              en: 'Time-saving: "Es spart so viel Zeit".',
              fa: 'صرفه‌جویی در وقت مهم‌ترین دلیل اوست.',
              prs: 'صرفه‌جویی در وقت برایش مهم است.',
              tr: 'Çok zaman kazandırmasıdır.',
              ar: 'توفير الوقت هو الميزة الأساسية بالنسبة لها.',
              es: 'El ahorro de tiempo.'
            }
          },
          {
            id: 'telc_a2_h_q18',
            question: '18. Herr Meyer bevorzugt den Einkauf im Geschäft vor Ort.',
            options: ['Richtig', 'Falsch'],
            correctAnswer: 'Richtig',
            explanation: {
              en: 'He values personal advice in stores: "Mir ist die persönliche Beratung im Fachgeschäft wichtig."',
              fa: 'آقای مایر خرید حضوری با مشاوره تخصصی را ترجیح می‌دهد.',
              prs: 'آقای مایر خرید حضوری را ترجیح می‌دهد.',
              tr: 'Yerel dükkanlarda kişisel danışmanlığı tercih eder.',
              ar: 'يفضل السيد ماير الشراء من المتاجر المحلية للحصول على استشارة.',
              es: 'Prefiere comprar en tiendas físicas con asesoramiento.'
            }
          },
          {
            id: 'telc_a2_h_q19',
            question: '19. Herr Meyer möchte lokale Händler in der Innenstadt unterstützen.',
            options: ['Richtig', 'Falsch'],
            correctAnswer: 'Richtig',
            explanation: {
              en: 'He wants to support local traders: "die lokalen Händler in unserer Innenstadt unterstützen."',
              fa: 'او مایل است از کسبه محلی مرکز شهر حمایت کند.',
              prs: 'او می‌خواهد از دکانداران محلی حمایت کند.',
              tr: 'Şehir merkezindeki yerel esnafı desteklemek istemektedir.',
              ar: 'يرغب في دعم التجار المحليين بوسط المدينة.',
              es: 'Quiere apoyar a los comerciantes locales del centro.'
            }
          },
          {
            id: 'telc_a2_h_q20',
            question: '20. Herr Meyer kauft Schuhe grundsätzlich nur online.',
            options: ['Richtig', 'Falsch'],
            correctAnswer: 'Falsch',
            explanation: {
              en: 'He explicitly advocates shopping in physical stores.',
              fa: 'او طرفدار خرید حضوری است نه آنلاین.',
              prs: 'او طرفدار خرید حضوری است.',
              tr: 'Aksine yerel dükkanları savunmaktadır.',
              ar: 'على العكس، فهو يفضل المتاجر الواقعية.',
              es: 'Al contrario, apoya las tiendas presenciales.'
            }
          }
        ]
      }
    ]
  },
  schreiben: {
    title: 'Modul Schreiben (Writing - 30 Minuten)',
    durationMinutes: 30,
    taskType: 'Zwei schriftliche Mitteilungen verfassen',
    situation: 'Sie möchten an einem Samstag an einem Kochkurs teilnehmen, können aber aus beruflichen Gründen erst 30 Minuten später kommen. Schreiben Sie eine E-Mail an den Kursleiter Herrn Rossi.',
    prompt: 'Schreiben Sie eine E-Mail (ca. 40–50 Wörter):\n1. Warum Sie schreiben (Kochkurs am Samstag).\n2. Warum Sie sich verspäten (Arbeit bis 14:00 Uhr).\n3. Bitten Sie um die Rezeptunterlagen.',
    guidingPoints: [
      'Höfliche Anrede (Sehr geehrter Herr Rossi,)',
      'Begründung mit Kausalsätzen (weil / da)',
      'Bitte um Verständnis und Unterlagen',
      'Schlussformel (Mit freundlichen Grüßen)'
    ],
    targetWordCount: 'ca. 40–50 Wörter',
    sampleSolution: 'Sehr geehrter Herr Rossi,\n\nich freue mich sehr auf unseren italienischen Kochkurs am Samstag. Leider muss ich Ihnen mitteilen, dass ich etwa 30 Minuten später ankomme, weil ich bis 14:00 Uhr im Krankenhaus arbeiten muss. Könnten Sie mir bitte die ersten Rezeptunterlagen bereitstellen?\n\nVielen Dank für Ihr Verständnis!\nMit freundlichen Grüßen,\nSayed Bashir',
    scoringCriteria: {
      en: 'Evaluated on task completion, cohesion/connectors, and grammatical accuracy for A2 level.',
      fa: 'ارزیابی بر اساس پوشش هر ۳ نکته، انسجام متنی با حروف ربط (weil)، و دقت گرامری سطح A2.',
      prs: 'ارزیابی روی تکمیل ۳ نکته و استفاده از گرامر درست صورت می‌گیرد.',
      tr: 'Yönergelere tam uyum, bağlaç kullanımı ve A2 seviyesi dilbilgisi doğruluğu.',
      ar: 'تقييم شامل لاستيفاء النقاط، استخدام أدوات الربط، وصحة القواعد.',
      es: 'Evaluación según cumplimiento de tareas, coherencia sintáctica y corrección gramatical.'
    }
  },
  sprechen: {
    title: 'Modul Sprechen (Oral Exam - 15 Minuten)',
    durationMinutes: 15,
    teil1: {
      name: 'Teil 1: Fragen zur Person beantworten und stellen (ca. 3–4 Minuten)',
      instruction: {
        en: 'Ask and answer detailed questions about hobbies, daily routine, travel, or work using topic prompt cards.',
        fa: 'با استفاده از کارت‌های کلیدی از همتای خود سوالات جزئی‌تر بپرسید و به سوالات او درباره برنامه روزانه، علایق و کار پاسخ دهید.',
        prs: 'درباره کار، اوقات فراغت و زندگی روزمره سوال و جواب نمایید.',
        tr: 'Günlük rutin, hobiler ve meslek hakkında ayrıntılı sorular sorun ve yanıtlayın.',
        ar: 'اطرح وأجب عن أسئلة تفصيلية حول الروتين اليومي والعمل والهوايات.',
        es: 'Formula y responde preguntas detalladas sobre la vida diaria, aficiones y trabajo.'
      },
      prompts: ['Wohnort & Wohnung', 'Beruf & Ausbildung', 'Freizeit & Wochenende', 'Reisen & Urlaub'],
      sampleResponse: 'Kandidat A: "Wie verbringst du normalerweise deinen Sonntag?"\nKandidat B: "Am Sonntag schlafe ich gerne lange aus. Danach frühstücke ich mit meiner Familie und am Nachmittag machen wir oft einen langen Spaziergang im Park."'
    },
    teil2: {
      name: 'Teil 2: Von sich erzählen (Präsentation • ca. 4–5 Minuten)',
      instruction: {
        en: 'Speak continuously about an experience from your life (e.g. your last vacation, a celebration, or your favorite hobby). Answer a follow-up question.',
        fa: 'به مدت ۲ تا ۳ دقیقه پیوسته درباره یک تجربه شخصی (سفر اخیر، جشن خانوادگی، یا سرگرمی مورد علاقه) صحبت کنید و به سوال همتای خود پاسخ دهید.',
        prs: 'درباره یک تجربه یا سفر شخصی صحبت نموده و به پرسش پاسخ دهید.',
        tr: 'Kişisel bir deneyim (tatil, kutlama) hakkında konuşun ve partnerinizin sorusunu yanıtlayın.',
        ar: 'تحدث باستفاضة عن تجربة شخصية أو عطلة وأجب عن سؤال زميلك.',
        es: 'Habla sobre una experiencia personal (vacaciones, fiesta) y responde a la pregunta de tu compañero.'
      },
      topicCards: [
        'Thema: Mein schönstes Reiseerlebnis (Wohin? Mit wem? Was besichtigt?)',
        'Thema: Mein liebstes Hobby (Seit wann? Wie oft? Warum macht es Spaß?)',
        'Thema: Mein letzter Geburtstag (Wo gefeiert? Wer war da?)'
      ],
      sampleResponse: 'Kandidat: "Ich möchte von meiner Reise nach Hamburg im letzten Sommer berichten. Ich bin mit dem Zug dorthin gefahren und habe vier Tage bei einem Freund gewohnt. Wir haben eine Hafenrundfahrt gemacht und das Miniatur Wunderland besucht. Es war sehr beeindruckend, weil die Stadt so lebendig ist."'
    },
    teil3: {
      name: 'Teil 3: Gemeinsam eine Aufgabe lösen und planen (ca. 5 Minuten)',
      instruction: {
        en: 'Plan an event or resolve a practical situation with your partner. Exchange ideas, negotiate times, and reach a consensus.',
        fa: 'با همتای خود یک رویداد مانند خرید هدیه مشترک یا ترتیب دادن یک پیک‌نیک در تعطیلات را برنامه‌ریزی کنید.',
        prs: 'یک برنامه مشترک مثل پیک‌نیک یا تحفه خریدن را طرح‌ریزی کنید.',
        tr: 'Birlikte bir piknik veya hediye alımı planlayın, ortak karara varın.',
        ar: 'خططا معاً لتنظيم نزهة أو شراء هدية وتوصلا إلى اتفاق حول الموعد والمكان.',
        es: 'Planificad juntos una actividad de fin de semana y llegad a un acuerdo.'
      },
      planningScenario: 'Einen gemeinsamen Ausflug am Wochenende organisieren',
      discussionPoints: [
        'Wohin fahren? (In die Berge oder an den See)',
        'Wie anreisen? (Mit der Bahn oder mit dem Auto)',
        'Was mitnehmen? (Picknickkorb, Getränke, Spiele)',
        'Uhrzeit für den Treffpunkt vereinbaren'
      ],
      sampleResponse: 'Kandidat A: "Hallo! Am Wochenende soll das Wetter wunderschön werden. Wollen wir einen Ausflug an den See machen?"\nKandidat B: "Das ist eine hervorragende Idee! Wir könnten mit der Regionalbahn fahren, das ist entspannter als mit dem Auto."\nKandidat A: "Einverstanden. Treffen wir uns am Samstag um 09:30 Uhr am Hauptbahnhof?"\nKandidat B: "Ja, perfekt! Ich bringe Sandwiches und Wasser mit."'
    }
  }
};
