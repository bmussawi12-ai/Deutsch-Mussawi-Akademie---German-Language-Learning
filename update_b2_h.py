with open('src/data/standardizedExamsDataB2_C1.ts', 'r') as f:
    content = f.read()

target_h10 = """          {
            id: 'b2_h_q10',
            question: '10. Welcher der folgenden Punkte gehört zu den drei wissenschaftlichen Pfeilern der Resilienz?',
            options: ['Selbstwirksamkeit und Vertrauen in eigene Problemlösungskompetenz', 'Möglichst wenig mit anderen Menschen reden', 'Jede Veränderung im Beruf meiden'],
            correctAnswer: 'Selbstwirksamkeit und Vertrauen in eigene Problemlösungskompetenz',
            explanation: {
              en: 'Pillars include self-efficacy: "Erstens Selbstwirksamkeit – also das Vertrauen in die eigenen Kompetenzen...".',
              fa: 'ستون اول: خودکارآمدی و باور به توانمندی‌های شخصی در حل تعارضات و مسائل.',
              prs: 'باور داشتن به توانایی خود در حل مشکلات.',
              tr: 'Öz-yeterlilik ve kendi sorun çözme becerilerine güven.',
              ar: 'الكفاءة الذاتية والثقة بالقدرات الشخصية في حل المشكلات.',
              es: 'Autoeficacia y confianza en las competencias propias para resolver problemas.'
            }
          }
        ]
      }"""

b2_h_extra = """          {
            id: 'b2_h_q10',
            question: '10. Welcher der folgenden Punkte gehört zu den drei wissenschaftlichen Pfeilern der Resilienz?',
            options: ['Selbstwirksamkeit und Vertrauen in eigene Problemlösungskompetenz', 'Möglichst wenig mit anderen Menschen reden', 'Jede Veränderung im Beruf meiden'],
            correctAnswer: 'Selbstwirksamkeit und Vertrauen in eigene Problemlösungskompetenz',
            explanation: {
              en: 'Pillars include self-efficacy: "Erstens Selbstwirksamkeit – also das Vertrauen in die eigenen Kompetenzen...".',
              fa: 'ستون اول: خودکارآمدی و باور به توانمندی‌های شخصی در حل تعارضات و مسائل.',
              prs: 'باور داشتن به توانایی خود در حل مشکلات.',
              tr: 'Öz-yeterlilik ve kendi sorun çözme becerilerine güven.',
              ar: 'الكفاءة الذاتية والثقة بالقدرات الشخصية في حل المشكلات.',
              es: 'Autoeficacia y confianza en las competencias propias para resolver problemas.'
            }
          },
          {
            id: 'b2_h_q11',
            question: '11. Was versteht Prof. Winter unter dem zweiten Pfeiler, den "sozialen Netzwerken"?',
            options: ['Den täglichen Konsum von sozialen Medien', 'Den vertrauensvollen Austausch in tragfähigen persönlichen Beziehungen', 'Das Sammeln vieler Follower'],
            correctAnswer: 'Den vertrauensvollen Austausch in tragfähigen persönlichen Beziehungen',
            explanation: {
              en: 'Social pillar: "... wer sich in vertrauensvollen Beziehungen austauschen kann, verarbeitet Stress deutlich schneller."',
              fa: 'تبادل نظر و احساس اطمینان در روابط اصیل و معتمد بین‌فردی.',
              prs: 'داشتن ارتباطات دوستانه و مطمئن برای کاهش فشار روحی.',
              tr: 'Güvene dayalı samimi ilişkilerde dertleşme ve destek görme.',
              ar: 'التواصل الموثوق والمتبادل في إطار علاقات شخصية داعمة.',
              es: 'El intercambio de confianza en relaciones personales sólidas.'
            }
          },
          {
            id: 'b2_h_q12',
            question: '12. Wie beschreibt die Expertin den Begriff "kognitive Neubewertung"?',
            options: ['Krisen als bewältigbare Herausforderungen statt als unüberwindbare Katastrophen begreifen', 'Probleme völlig ignorieren', 'Schuld immer bei anderen suchen'],
            correctAnswer: 'Krisen als bewältigbare Herausforderungen statt als unüberwindbare Katastrophen begreifen',
            explanation: {
              en: 'Cognitive reframing: "... Krisen nicht als unüberwindbare Katastrophe zu betrachten, sondern als bewältigbare Herausforderung."',
              fa: 'بازارزیابی شناختی: نگریستن به بحران به عنوان چالشی قابل حل به جای فاجعه‌ای غیرقابل عبور.',
              prs: 'دیدن مشکلات به عنوان چالش قابل حل.',
              tr: 'Krizleri felaket yerine aşılabilir bir meydan okuma olarak görmek.',
              ar: 'إعادة التقييم المعرفي: اعتبار الأزمات تحديات يمكن التغلب عليها وليست كوارث مطلقة.',
              es: 'Interpretar las crisis como retos superables y no como catástrofes irremediables.'
            }
          },
          {
            id: 'b2_h_q13',
            question: '13. Welches biologische System wird gestört, wenn man spät abends noch Dienst-Mails liest?',
            options: ['Das vegetative Nervensystem', 'Das Skelettsystem', 'Das Hörvermögen'],
            correctAnswer: 'Das vegetative Nervensystem',
            explanation: {
              en: 'Biological impact: "... findet das vegetative Nervensystem keine Phase der echten Erholung."',
              fa: 'سیستم عصبی خودمختار (وژتاتیو) فرصت بازسازی و استراحت واقعی پیدا نمی‌کند.',
              prs: 'سیستم عصبی خودکار انسان فرصت استراحت پیدا نمی‌کند.',
              tr: 'Otonom (vejetatif) sinir sisteminin gerçek bir dinlenme evresi bulamaması.',
              ar: 'الجهاز العصبي المستقل (اللاإرادي) يُحرم من فترات الاسترخاء والتعافي.',
              es: 'El sistema nervioso autónomo o vegetativo queda privado de descanso regenerador.'
            }
          },
          {
            id: 'b2_h_q14',
            question: '14. Zu welchen schwerwiegenden Spätfolgen führt chronischer Dauerstress laut Prof. Winter?',
            options: ['Zu Schlafstörungen und letztlich zum Burnout-Syndrom', 'Zu verbesserter Ausdauer', 'Zu spontanem Muskelwachstum'],
            correctAnswer: 'Zu Schlafstörungen und letztlich zum Burnout-Syndrom',
            explanation: {
              en: 'Consequences: "Chronische Schlafstörungen und letztlich das Burnout-Syndrom sind die häufigen Folgen."',
              fa: 'اختلالات مزمن خواب و در نهایت بروز سندروم فرسودگی شغلی (Burnout).',
              prs: 'بی‌خوابی و سندروم سوختگی شغلی.',
              tr: 'Kronik uyku bozuklukları ve nihayetinde tükenmişlik (burnout) sendromu.',
              ar: 'اضطرابات النوم المزمنة ومتلازمة الإرهاق والاحتراق المهني (Burnout).',
              es: 'Trastornos crónicos del sueño y, en última instancia, síndrome de burnout.'
            }
          },
          {
            id: 'b2_h_q15',
            question: '15. Welche zentrale Schlussfolgerung zieht die Forscherin am Ende des Gesprächs?',
            options: ['Dass Resilienz eine Fähigkeit ist, die jeder Mensch im Laufe des Lebens trainieren kann', 'Dass man bei Problemen sofort kündigen sollte', 'Dass Arbeit im Büro immer ungesund ist'],
            correctAnswer: 'Dass Resilienz eine Fähigkeit ist, die jeder Mensch im Laufe des Lebens trainieren kann',
            explanation: {
              en: 'Conclusion: "... ein dynamischer Lernprozess, den man trainieren kann."',
              fa: 'تاب‌آوری مهارتی پویا و یادگرفتنی است که هر فردی در هر سنی قادر به تقویت آن است.',
              prs: 'تاب‌آوری یک مهارت قابل تمرین است.',
              tr: 'Psikolojik dayanıklılığın eğitilerek geliştirilebilecek dinamik bir süreç olduğu.',
              ar: 'أن المرونة النفسية مهارة ديناميكية مكتسبة يمكن لأي شخص صقلها وتطويرها.',
              es: 'Que la resiliencia es una capacidad dinámica y susceptible de ser entrenada.'
            }
          }
        ]
      },
      {
        id: 'b2_h_item3',
        title: 'Teil 3: Kontroverse Podiumsdiskussion im Rundfunk (Fragen 16 bis 21 • Einmal hören)',
        situation: 'Radiodebatte "Forum Wirtschaft": Autofreie Innenstädte und die Zukunft des Einzelhandels',
        transcript: 'Moderatorin: "Guten Abend zu \'Forum Wirtschaft\'. Immer mehr europäische Metropolen verbannen private Kraftfahrzeuge aus den Altstädten. Bei uns im Studio: Stadtplaner Dr. Robert Weber und die Sprecherin des Einzelhandelsverbandes, Frau Marion Krüger. Herr Dr. Weber, wieso ist der autofreie Raum ein Gewinn?"\\n\\nDr. Weber: "Die Zahlen aus Städten wie Pontevedra, Gent oder Ljubljana sprechen eine unmissverständliche Sprache: Die Aufenthaltsqualität steigt enorm, die Lärm- und Feinstaubbelastung sinkt um bis zu 60 Prozent. Menschen flanieren entspannter, wenn sie nicht vor abbiegenden SUVs flüchten müssen. Ein lebendiger Stadtraum braucht Fußgänger und Außengastronomie, keine Blechkolonnen."\\n\\nFrau Krüger: "Das klingt in der Theorie romantisch, Herr Weber. Aber der stationäre Einzelhandel kämpft ohnehin gegen den übermächtigen Online-Handel. Wer teure Boutiquen oder Fachgeschäfte besucht, transportiert größere Einkäufe ungern mit der Straßenbahn. Schließt man Parkhäuser, verlagert sich die Kaufkraft umgehend auf Einkaufszentren an der Peripherie mit 3.000 Gratis-Parkplätzen."\\n\\nDr. Weber: "Diese Furcht wird seit dreißig Jahren geäußert und ist empirisch widerlegt! Umfragen in Fußgängerzonen belegen: Fußgänger und Radfahrer kommen zwar seltener mit vollen Kofferräumen, dafür aber dreimal so häufig pro Woche. Ihr kumulierter Monatsumsatz übersteigt den der Pkw-Kunden deutlich."\\n\\nFrau Krüger: "Dennoch brauchen wir funktionierende Logistikfenster für Lieferanten und barrierefreie Elektromobilität für Senioren und Gehbehinderte. Ein pauschales Verbot ohne Übergangsfristen ruiniert den Mittelstand!"',
        questions: [
          {
            id: 'b2_h_q16',
            question: '16. Welchen ökologischen Effekt autofreier Innenstädte nennt Dr. Weber?',
            options: ['Rückgang der Lärm- und Feinstaubbelastung um bis zu 60 Prozent', 'Verdopplung der CO2-Werte', 'Völliger Wegfall des Regens'],
            correctAnswer: 'Rückgang der Lärm- und Feinstaubbelastung um bis zu 60 Prozent',
            explanation: {
              en: 'Dr. Weber points to data: "... Lärm- und Feinstaubbelastung sinkt um bis zu 60 Prozent."',
              fa: 'کاهش آلودگی صوتی و ذرات گرد و غبار هوا تا میزان ۶۰ درصد.',
              prs: 'کاهش آلودگی صوتی و هوای غبارآلود تا ۶۰ فیصد.',
              tr: 'Gürültü ve ince toz kirliliğinin %60\'a varan oranda azalması.',
              ar: 'انخفاض التلوث السمعي والغبار الناعم بنسبة تصل إلى 60 بالمئة.',
              es: 'Reducción de la contaminación acústica y por partículas en hasta un 60 por ciento.'
            }
          },
          {
            id: 'b2_h_q17',
            question: '17. Welche Hauptsorge äußert Frau Krüger für die Fachgeschäfte in der Altstadt?',
            options: ['Dass Kunden zum Einkaufen in die Zentren an der Peripherie abwandern', 'Dass die Steuern halbiert werden', 'Dass es zu viele Touristen gibt'],
            correctAnswer: 'Dass Kunden zum Einkaufen in die Zentren an der Peripherie abwandern',
            explanation: {
              en: 'Frau Krüger warns: "... verlagert sich die Kaufkraft umgehend auf Einkaufszentren an der Peripherie...".',
              fa: 'انتقال قدرت خرید مردم به مجتمع‌های تجاری بزرگ حومه شهر که پارکینگ رایگان دارند.',
              prs: 'رفتن مشتریان به مراکز تجارتی کلان در حاشیه شهر.',
              tr: 'Müşteri alım gücünün ücretsiz otoparklı çevre alışveriş merkezlerine kayması.',
              ar: 'نزوح القوة الشرائية نحو مراكز التسوق الكبرى على أطراف المدينة.',
              es: 'Desplazamiento del poder adquisitivo a los centros comerciales periféricos.'
            }
          },
          {
            id: 'b2_h_q18',
            question: '18. Welches Argument von Dr. Weber widerspricht der Befürchtung des Einzelhandels?',
            options: ['Dass Fußgänger und Radfahrer häufiger kommen und im Monat mehr Geld ausgeben', 'Dass Geschäfte gar keinen Umsatz mehr brauchen', 'Dass alle Waren per Drohne geliefert werden'],
            correctAnswer: 'Dass Fußgänger und Radfahrer häufiger kommen und im Monat mehr Geld ausgeben',
            explanation: {
              en: 'Counter-evidence: "... kommen dreimal so häufig (...) Ihr kumulierter Monatsumsatz übersteigt den der Pkw-Kunden deutlich."',
              fa: 'پیاده‌ها و دوچرخه‌سواران ۳ برابر بیشتر تردد داشته و مجموع خرید ماهانه بالاتری رقم می‌زنند.',
              prs: 'عابران پیاده و بایسکل‌سواران بیشتر مراجعه نموده و خرید بیشتر انجام می‌دهند.',
              tr: 'Yaya ve bisikletlilerin daha sık gelerek aylık toplamda daha fazla harcama yapması.',
              ar: 'المشاة وراكبو الدراجات يترددون بمعدل أعلى ويحققون عوائد تراكمية أكبر شهرياً.',
              es: 'Peatones y ciclistas acuden con mayor asiduidad generando un gasto acumulado superior.'
            }
          },
          {
            id: 'b2_h_q19',
            question: '19. Welche Ausnahme verlangt Frau Krüger für eine faire Lösung ausdrücklich?',
            options: ['Logistikfenster für Lieferungen und Mobilität für Senioren und Gehbehinderte', 'Freie Fahrt für Sportwagen', 'Vollständige Schließung aller Fußgängerzonen'],
            correctAnswer: 'Logistikfenster für Lieferungen und Mobilität für Senioren und Gehbehinderte',
            explanation: {
              en: 'Requirements: "Logistikfenster für Lieferanten und barrierefreie Elektromobilität für Senioren..."',
              fa: 'ساعات مشخص برای تخلیه بار تامین‌کنندگان و امکان تردد خودروهای برقی کوچک برای سالمندان و معلولان.',
              prs: 'وقت مشخص برای موترهای باربری و سهولت برای افراد مسن و دارای معلولیت.',
              tr: 'Tedarikçiler için lojistik pencereleri ve yaşlı/engelliler için engelsiz elektrikli ulaşım.',
              ar: 'نوافذ زمنية لشاحنات التوريد ووسائل نقل كهربائية ملائمة للمسنين وذوي الإعاقة.',
              es: 'Franjas de carga/descarga y electromovilidad adaptada para personas mayores o con discapacidad.'
            }
          },
          {
            id: 'b2_h_q20',
            question: '20. Wer äußert die Ansicht, dass die Befürchtungen des Einzelhandels seit dreißig Jahren unbegründet sind?',
            options: ['Frau Krüger', 'Dr. Weber', 'Die Moderatorin'],
            correctAnswer: 'Dr. Weber',
            explanation: {
              en: 'Speaker: "Dr. Weber: \'Diese Furcht wird seit dreißig Jahren geäußert und ist empirisch widerlegt!\'"',
              fa: 'دکتر وبر تصریح می‌کند این ادعاها سی سال است مطرح شده و با آمارها نقض شده است.',
              prs: 'داکتر وبر این نظر را ابراز می‌کند.',
              tr: 'Bu görüş Dr. Weber tarafından dile getirilmektedir.',
              ar: 'الدكتور فيبر هو من يرى أن تلك المخاوف دحضتها البيانات على مدى ثلاثين عاماً.',
              es: 'El Dr. Weber sostiene que los temores han quedado refutados empíricamente.'
            }
          },
          {
            id: 'b2_h_q21',
            question: '21. Worauf verständigen sich die Diskutanten bezüglich eines pauschalen Verbots?',
            options: ['Dass ein abruptes Verbot ohne Übergangsfristen und Kompensationskonzepte unklug ist', 'Dass Autos sofort beschlagnahmt werden sollten', 'Dass Straßen überhaupt nicht mehr saniert werden'],
            correctAnswer: 'Dass ein abruptes Verbot ohne Übergangsfristen und Kompensationskonzepte unklug ist',
            explanation: {
              en: 'Consensus tone: A blunt blanket ban without pragmatism harms businesses and accessibility.',
              fa: 'ممنوعیت یک‌شبه و کلی بدون در نظر گرفتن دوره‌های گذار و راهکارهای جبرانی به زیان کسب‌وکارهاست.',
              prs: 'ممنوعیت ناگهانی و بدون مهلت به اقتصاد آسیب می‌زند.',
              tr: 'Geçiş süreci ve telafi mekanizmaları olmaksızın toptan yasaklamanın riskli olduğu.',
              ar: 'أن الحظر الشامل المفاجئ دون فترات انتقالية وحلول بديلة يضر بالاقتصاد المحلي.',
              es: 'Que una prohibición tajante sin plazos de transición ni medidas compensatorias resulta perjudicial.'
            }
          }
        ]
      },
      {
        id: 'b2_h_item4',
        title: 'Teil 4: Wissenschaftlicher Fachvortrag an der Universität (Fragen 22 bis 30 • Zweimal hören)',
        situation: 'Gastvorlesung von Prof. Dr. Harald Reinhard am Institut für Quanteninformatik',
        transcript: 'Prof. Reinhard: "Guten Tag, meine Damen und Herren! In der heutigen Vorlesung widmen wir uns den Implikationen des Quantencomputings für die digitale Informationssicherheit.\\nKlassische Rechner basieren auf binären Bits, die entweder den Zustand 0 oder 1 einnehmen. Ein Quantenprozessor hingegen nutzt die Prinzipien der Quantenmechanik – namentlich die Superposition und die Verschränkung von Qubits. Dadurch kann ein Quantencomputer eine gigantische Anzahl mathematischer Permutationen simultan berechnen.\\nWas bedeutet das konkret für unsere gegenwärtige IT-Infrastruktur?\\nNahezu alle modernen Verschlüsselungsverfahren – vom Online-Banking über verschlüsselte E-Mails bis hin zu staatlichen Geheimhaltungsstufen – vertrauen auf asymmetrische Kryptosysteme wie RSA oder elliptische Kurven. Deren Sicherheit beruht auf der extremen mathematischen Hürde, riesige Primzahlen zu faktorisieren. Ein klassischer Supercomputer bräuchte dafür Tausende von Jahren.\\nMit dem sogenannten Shor-Algorithmus kann ein ausreichend leistungsfähiger Quantenrechner diese Primfaktorzerlegung jedoch in wenigen Minuten oder Stunden bewältigen! Das bedeutet: An dem Tag, an dem ein fehlertoleranter Quantencomputer mit mehreren tausend logischen Qubits operiert, bricht die gesamte bisherige asymmetrische Verschlüsselung der Welt zusammen.\\nDie Fachwelt spricht hierbei vom \'Q-Day\'. Obwohl Experten schätzen, dass ein solcher universeller Quantenrechner erst in 10 bis 15 Jahren einsatzbereit sein wird, müssen wir bereits heute handeln. Warum? Wegen der Gefahr von \'Harvest now, decrypt later\'. Nachrichtendienste und kriminelle Kartelle schneiden bereits heute massenhaft verschlüsselten Datenverkehr mit und speichern Terabytes an Daten. Sobald die Hardware bereitsteht, können sie rückwirkend dechiffriert werden.\\nDie Antwort der Wissenschaft lautet: Post-Quanten-Kryptographie (PQC). Hierbei handelt es sich um neue mathematische Algorithmen auf Basis gitterbasierter Kryptographie, die selbst von Quantencomputern nicht in praxisrelevanter Zeit geknackt werden können. Das Bundesamt für Sicherheit in der Informationstechnik (BSI) empfiehlt allen Behörden und Konzernen die zügige Migration auf PQC-Standards."',
        questions: [
          {
            id: 'b2_h_q22',
            question: '22. Auf welchen quantenmechanischen Phänomenen beruht die Rechenleistung von Qubits?',
            options: ['Auf Superposition und Verschränkung', 'Auf einfacher thermischer Ausdehnung', 'Auf magnetischer Reibung'],
            correctAnswer: 'Auf Superposition und Verschränkung',
            explanation: {
              en: 'Lecture clarifies: "... Prinzipien der Quantenmechanik – namentlich die Superposition und die Verschränkung von Qubits."',
              fa: 'بر اساس اصول مکانیک کوانتومی یعنی برهم‌نهی (Superposition) و درهم‌تنیدگی (Entanglement).',
              prs: 'بر اصول برهم‌نهی و درهم‌تنیدگی کیوبیت‌ها استوار است.',
              tr: 'Kuantum mekaniğinin süperpozisyon ve dolanıklık ilkelerine dayanır.',
              ar: 'تعتمد على مبادئ ميكانيكا الكم وتحديداً التراكب والتشابك الكمي للكيوبتات.',
              es: 'Se sustenta en los principios de superposición y entrelazamiento cuántico de los cúbits.'
            }
          },
          {
            id: 'b2_h_q23',
            question: '23. Worauf beruht die Sicherheit traditioneller asymmetrischer Kryptoverfahren wie RSA?',
            options: ['Auf der Komplexität der Primfaktorzerlegung sehr großer Zahlen', 'Auf einfachen Passwörtern mit vier Ziffern', 'Auf der Dicke von Glasfaserkabeln'],
            correctAnswer: 'Auf der Komplexität der Primfaktorzerlegung sehr großer Zahlen',
            explanation: {
              en: 'Security principle: "... extreme mathematische Hürde, riesige Primzahlen zu faktorisieren."',
              fa: 'دشواری ریاضیاتی فوق‌العاده در تجزیه اعداد بسیار بزرگ به عوامل اول.',
              prs: 'دشواری تفکیک اعداد بسیار بزرگ به اعداد اول.',
              tr: 'Devasa asal sayıların çarpanlarına ayrılmasının aşırı matematiksel zorluğuna.',
              ar: 'الصعوبة الرياضية الشديدة لتحليل الأعداد الضخمة إلى عواملها الأولية.',
              es: 'En la extrema dificultad matemática para factorizar números primos gigantescos.'
            }
          },
          {
            id: 'b2_h_q24',
            question: '24. Welcher Algorithmus erlaubt Quantencomputern das schnelle Knacken von RSA?',
            options: ['Der Shor-Algorithmus', 'Der Dijkstra-Algorithmus', 'Der Taylor-Algorithmus'],
            correctAnswer: 'Der Shor-Algorithmus',
            explanation: {
              en: 'Name of algorithm: "Mit dem sogenannten Shor-Algorithmus kann ein (...) Quantenrechner diese Primfaktorzerlegung (...) bewältigen!"',
              fa: 'الگوریتم شور (Shor-Algorithmus) توان تجزیه فاکتورهای اول در کسری از زمان را داراست.',
              prs: 'الگوریتم شور.',
              tr: 'Shor Algoritması.',
              ar: 'خوارزمية شور (Shor\'s algorithm).',
              es: 'El algoritmo de Shor.'
            }
          },
          {
            id: 'b2_h_q25',
            question: '25. Was bezeichnet der Begriff "Q-Day" in der Fachwelt?',
            options: ['Den Tag, an dem Quantencomputer die heutige Verschlüsselung brechen können', 'Den Feiertag der Informatiker', 'Die Gründung der ersten Universität'],
            correctAnswer: 'Den Tag, an dem Quantencomputer die heutige Verschlüsselung brechen können',
            explanation: {
              en: 'Q-Day definition: The point when a quantum computer can break existing asymmetric crypto.',
              fa: 'اصطلاح روز کیو (Q-Day): روزی که ابررایانه‌های کوانتومی رمزنگاری نامتقارن فعلی جهان را بشکنند.',
              prs: 'روزی که کامپیوتر کوانتومی رمزهای فعلی را بشکند.',
              tr: 'Kuantum bilgisayarlarının mevcut kriptografik şifreleri kırabildiği gün.',
              ar: 'يوم Q-Day هو اليوم الذي ينجح فيه حاسوب كمي في كسر التشفير العالمي القائم.',
              es: 'El momento en que los ordenadores cuánticos puedan vulnerar la criptografía actual.'
            }
          },
          {
            id: 'b2_h_q26',
            question: '26. Wann rechnen Experten mit dem Bau eines solchen universellen Quantenrechners?',
            options: ['In etwa 10 bis 15 Jahren', 'Bereits nächste Woche', 'Erst im Jahr 2200'],
            correctAnswer: 'In etwa 10 bis 15 Jahren',
            explanation: {
              en: 'Estimated timeframe: "... erst in 10 bis 15 Jahren einsatzbereit sein wird...".',
              fa: 'پیش‌بینی کارشناسان: آمادگی عملیاتی در بازه ۱۰ تا ۱۵ سال آینده.',
              prs: 'در حدود ۱۰ تا ۱۵ سال آینده.',
              tr: 'Yaklaşık 10 ila 15 yıl içinde.',
              ar: 'في غضون 10 إلى 15 عاماً تقريباً وفق تقديرات الخبراء.',
              es: 'Se estima que estará operativo en un horizonte de 10 a 15 años.'
            }
          },
          {
            id: 'b2_h_q27',
            question: '27. Warum muss laut Prof. Reinhard bereits heute gegen diese Bedrohung gehandelt werden?',
            options: ['Wegen der Praxis "Harvest now, decrypt later"', 'Weil klassische Computer verboten werden', 'Weil das Internet abgeschaltet wird'],
            correctAnswer: 'Wegen der Praxis "Harvest now, decrypt later"',
            explanation: {
              en: 'Urgency rationale: "... Gefahr von \'Harvest now, decrypt later\'. (...) Daten heute mitschneiden und später dechiffrieren."',
              fa: 'به دلیل استراتژی "اکنون ذخیره کن، بعداً رمزگشایی کن" توسط سازمان‌های اطلاعاتی.',
              prs: 'به خاطر اینکه اطلاعات ذخیره می‌شود تا در آینده رمزگشایی گردد.',
              tr: '"Şimdi topla, sonra çöz" (Harvest now, decrypt later) tehlikesinden ötürü.',
              ar: 'بسبب استراتيجية "الجمع والتخزين الآن وفك التشفير لاحقاً" المتبعة تجسسياً.',
              es: 'Debido a la estrategia hostil de "recopilar ahora y descifrar en el futuro".'
            }
          },
          {
            id: 'b2_h_q28',
            question: '28. Welcher mathematische Ansatz bildet das Fundament der Post-Quanten-Kryptographie?',
            options: ['Gitterbasierte Kryptographie', 'Einfache Bruchrechnung', 'Geometrische Kreisberechnung'],
            correctAnswer: 'Gitterbasierte Kryptographie',
            explanation: {
              en: 'Mathematical foundation: "... neue mathematische Algorithmen auf Basis gitterbasierter Kryptographie...".',
              fa: 'رمزنگاری مبتنی بر شبکه یا ساختارهای مشبک (Lattice-based cryptography).',
              prs: 'رمزنگاری بر مبنای ساختارهای مشبک.',
              tr: 'Kafes tabanlı (gitterbasiert) kriptografik matematik modelleri.',
              ar: 'التشفير المعتمد على الشبكات الفراغية (Lattice-based cryptography).',
              es: 'Algoritmos sustentados en la criptografía basada en retículos.'
            }
          },
          {
            id: 'b2_h_q29',
            question: '29. Welche deutsche Behörde empfiehlt die rasche Umstellung auf Post-Quanten-Standards?',
            options: ['Das Bundesamt für Sicherheit in der Informationstechnik (BSI)', 'Das Statistische Bundesamt', 'Das Umweltbundesamt'],
            correctAnswer: 'Das Bundesamt für Sicherheit in der Informationstechnik (BSI)',
            explanation: {
              en: 'Authority: "Das Bundesamt für Sicherheit in der Informationstechnik (BSI) empfiehlt..."',
              fa: 'اداره فدرال امنیت اطلاعات آلمان (BSI).',
              prs: 'اداره امنیت فناوری اطلاعات آلمان (BSI).',
              tr: 'Almanya Federal Bilgi Güvenliği Ofisi (BSI).',
              ar: 'المكتب الاتحادي لأمن تكنولوجيا المعلومات في ألمانيا (BSI).',
              es: 'La Oficina Federal de Seguridad de la Información de Alemania (BSI).'
            }
          },
          {
            id: 'b2_h_q30',
            question: '30. Was ist das wichtigste Merkmal von Post-Quanten-Kryptographie-Algorithmen (PQC)?',
            options: ['Sie sind selbst von Quantencomputern nicht in praxisrelevanter Zeit knackbar', 'Sie funktionieren ohne Strom', 'Sie löschen alle alten Passwörter'],
            correctAnswer: 'Sie sind selbst von Quantencomputern nicht in praxisrelevanter Zeit knackbar',
            explanation: {
              en: 'Key feature: "... selbst von Quantencomputern nicht in praxisrelevanter Zeit geknackt werden können."',
              fa: 'حتی ابررایانه‌های کوانتومی نیز نمی‌توانند در زمان عملی و واقعی این الگوریتم‌ها را بشکنند.',
              prs: 'حتی کامپیوترهای کوانتومی نمی‌توانند در وقت معقول این رمزها را بشکنند.',
              tr: 'Kuantum bilgisayarları tarafından dahi pratik bir zaman diliminde kırılamamaları.',
              ar: 'استعصاؤها على الاختراق حتى بواسطة الحواسيب الكمية في إطار زمني واقعي.',
              es: 'Que resultan invulnerables ante los ordenadores cuánticos en tiempos prácticos de computación.'
            }
          }
        ]
      }"""

if target_h10 in content:
    content = content.replace(target_h10, b2_h_extra)
    print("Replaced B2 Hoeren 11-30 successfully")
else:
    print("Could not find target_h10")

with open('src/data/standardizedExamsDataB2_C1.ts', 'w') as f:
    f.write(content)
