import json
from create_exam_sets import make_exam, tr

b2_exams = [
    make_exam(
        "exam_goethe_b2_set2",
        "Goethe-Zertifikat B2 - Modellsatz 2 (Globalisierung, Lieferketten & Interkulturelle Teams)",
        "Goethe-Zertifikat", "B2.1", 190, "60% (60 / 100 Punkte)",
        "Lesen: Globale Lieferketten und unternehmerische Verantwortung",
        "Wirtschaftswoche Deutschland",
        "In einer vernetzten Weltwirtschaft stehen multinationale Konzerne zunehmend vor der Herausforderung, ihre Lieferketten transparent und nachhaltig zu gestalten. Das deutsche Lieferkettensorgfaltspflichtengesetz verpflichtet Unternehmen ab einer gewissen Mitarbeiterzahl dazu, Menschenrechte und Umweltschutzstandards auch bei ausländischen Zulieferern strikt zu überprüfen. Wirtschaftsanalysten weisen darauf hin, dass dies kurzfristig zu erhöhtem bürokratischem Mehraufwand führt, langfristig jedoch Reputationsrisiken minimiert und das Vertrauen der Konsumenten in europäische Marken stärkt.",
        [
            {
                "id": "b2_s2_l1",
                "question": "1. Das Lieferkettengesetz verpflichtet Konzerne zur Einhaltung von Menschenrechts- und Umweltstandards im In- und Ausland.",
                "options": ["Richtig", "Falsch"],
                "correctAnswer": "Richtig",
                "explanation": tr("The text confirms strict checks on human rights and environmental standards abroad.", "متن تایید می‌کند که شرکت‌ها موظف به نظارت بر حقوق بشر و محیط زیست نزد تامین‌کنندگان خارجی هستند.")
            },
            {
                "id": "b2_s2_l2",
                "question": "2. Welche langfristige Konsequenz erwarten Wirtschaftsanalysten?",
                "options": ["a) Den Zusammenbruch des Welthandels", "b) Geringere Reputationsrisiken und gestärktes Konsumentenvertrauen", "c) Vollständige Verlagerung aller Produktionen nach Übersee"],
                "correctAnswer": "b) Geringere Reputationsrisiken und gestärktes Konsumentenvertrauen",
                "explanation": tr("Analysts expect reduced reputation risks and stronger consumer trust.", "تحلیل‌گران کاهش ریسک‌های حیثیتی و افزایش اعتماد مصرف‌کنندگان را پیش‌بینی می‌کنند.")
            }
        ],
        "Hören: Fachkonferenz über interkulturelles Management",
        "Ausschnitt aus einem Vortrag über interkulturelle Kommunikation in internationalen Projekten.",
        "Referent: Sehr geehrte Damen und Herren, in grenzüberschreitenden Teams prallen oft unterschiedliche Kommunikationskulturen aufeinander. Während im deutschsprachigen Raum eine direkte, sachbezogene Kritik üblich ist, gilt in vielen asiatischen oder südamerikanischen Partnerländern der Grundsatz der 'Gesichtswahrung'. Erfolgreiche Führungskräfte müssen daher ein tiefes interkulturelles Feingefühl entwickeln, um Missverständnisse frühzeitig zu deeskalieren.",
        [
            {
                "id": "b2_s2_h1",
                "question": "1. Direkte sachliche Kritik wird weltweit in allen Kulturkreisen gleichermaßen positiv aufgefasst.",
                "options": ["Richtig", "Falsch"],
                "correctAnswer": "Falsch",
                "explanation": tr("Direct critique differs; in some cultures saving face is prioritized.", "انتقاد مستقیم در همه فرهنگ‌ها یکسان نیست و در برخی فرهنگ‌ها حفظ آبرو اولویت دارد.")
            }
        ],
        "Schreiben: Formelle Stellungnahme zu nachhaltigem Wirtschaften",
        "Formelle Stellungnahme / Essay",
        "Sie verfassen für ein Wirtschaftsportal einen Fachkommentar zum Thema 'Ökologische Verantwortung versus Kostendruck in Unternehmen'.",
        "Verfassen Sie einen argumentativen Kommentar mit Beispielen und begründeter Schlussfolgerung.",
        ["Aktuelle Relevanz des Themas", "Konflikt zwischen kurzfristigem Gewinn und ökologischer Nachhaltigkeit", "Praktische Lösungsansätze für mittelständische Betriebe", "Eigene Prognose für die kommenden zehn Jahre"],
        "ca. 150 - 180 Wörter",
        "In der gegenwärtigen ökonomischen Debatte rückt die Frage nach der Vereinbarkeit von Rentabilität und ökologischer Nachhaltigkeit unweigerlich in das Zentrum strategischer Entscheidungen. Einerseits zwingt der globale Wettbewerb viele Unternehmen zu strikter Kostendisziplin, andererseits fordern Regulatoren und umweltbewusste Konsumenten glaubwürdige Klimaschutzmaßnahmen.\n\nEs greift jedoch zu kurz, Nachhaltigkeit rein als Kostenfaktor zu betrachten. Vielmehr erweisen sich energieeffiziente Produktionsverfahren und ressourcenschonende Kreislaufmodelle als handfeste Wettbewerbsvorteile, die vor steigenden Rohstoff- und Energiepreisen schützen. Mittelständische Betriebe sollten daher gezielt in moderne Technologien investieren und ihre Innovationskraft nutzen.\n\nMeines Erachtens werden in den kommenden zehn Jahren jene Unternehmen florieren, die ökologische Transformation nicht als bürokratische Last, sondern als zukunftsweisende Chance begreifen.",
        tr("Advanced B2/C1 syntactic structures (Partizipialkonstruktionen, Passiversatz), coherent academic flow.", "کاربرد ساختارهای نحوی پیشرفته B2 مانند ساختارهای وصفی، افعال معلوم و مجهول جایگزین و انسجام متنی بالا.")
    ),
    make_exam(
        "exam_goethe_b2_set3",
        "Goethe-Zertifikat B2 - Modellsatz 3 (Künstliche Intelligenz, Automatisierung & Arbeitswelt 4.0)",
        "Goethe-Zertifikat", "B2.1", 190, "60% (60 / 100 Punkte)",
        "Lesen: Der Einfluss generativer KI auf moderne Berufsfelder",
        "Technologie- und Zukunftsreport",
        "Generative künstliche Intelligenz revolutioniert den Arbeitsalltag in rasantem Tempo. Von automatisierten Programmierassistenten über KI-gestützte medizinische Diagnostik bis hin zu automatisierten Textgeneratoren wandeln sich traditionelle Aufgabenprofile grundlegend. Arbeitsmarktforscher betonen übereinstimmend, dass KI menschliche Fachkräfte nicht gänzlich ersetzen, sondern vor allem deren Produktivität steigern wird. Gleichzeitig wächst jedoch der Bedarf an kontinuierlicher Weiterbildung: Kritisches Denken, ethische Urteilskraft und kreative Problemlösungskompetenzen gewinnen in einer KI-geprägten Arbeitswelt exponentiell an Bedeutung.",
        [
            {
                "id": "b2_s3_l1",
                "question": "1. Forscher gehen davon aus, dass KI Fachkräfte in naher Zukunft komplett überflüssig machen wird.",
                "options": ["Richtig", "Falsch"],
                "correctAnswer": "Falsch",
                "explanation": tr("Researchers state AI will boost productivity rather than completely replacing professionals.", "پژوهشگران بر این باورند که هوش مصنوعی بهره‌وری را افزایش می‌دهد نه اینکه جایگزین کامل انسان شود.")
            },
            {
                "id": "b2_s3_l2",
                "question": "2. Welche Fähigkeiten gewinnen laut Text an besonderer Bedeutung?",
                "options": ["a) Manuelles Auswendiglernen von Fakten", "b) Kritisches Denken und ethische Urteilskraft", "c) Verzicht auf digitale Werkzeuge"],
                "correctAnswer": "b) Kritisches Denken und ethische Urteilskraft",
                "explanation": tr("Critical thinking and ethical discernment become increasingly vital.", "تفکر انتقادی و داوری اخلاقی اهمیتی دوچندان می‌یابند.")
            }
        ],
        "Hören: Podiumsdiskussion zur Ethik der Algorithmen",
        "Eine Diskussion zwischen einer Informatikerin und einem Ethikforscher über KI-Transparenz.",
        "Informatikerin: Wir müssen sicherstellen, dass KI-Modelle transparent und nachvollziehbar entscheiden, insbesondere wenn sie bei Bewerbungsverfahren oder Kreditvergaben eingesetzt werden.\nEthiker: Absolut einverstanden. Sogenannte 'Black-Box'-Modelle bergen die Gefahr, unbewusste gesellschaftliche Vorurteile unbemerkt zu reproduzieren. Daher ist eine strenge gesetzliche Regulierung auf europäischer Ebene unerlässlich.",
        [
            {
                "id": "b2_s3_h1",
                "question": "1. Beide Diskutanten fordern Transparenz und Nachvollziehbarkeit bei algorithmischen Entscheidungen.",
                "options": ["Richtig", "Falsch"],
                "correctAnswer": "Richtig",
                "explanation": tr("Both participants agree on transparency and explainability.", "هر دو کارشناس بر ضرورت شفافیت و امکان بازبینی تصمیمات الگوریتم‌ها اتفاق نظر دارند.")
            }
        ],
        "Schreiben: Forumsbeitrag über lebenslanges Lernen im digitalen Zeitalter",
        "Ausführlicher Forumsbeitrag",
        "In einem Weiterbildungsforum diskutieren Fachleute über 'Lebenslanges Lernen als Notwendigkeit im Zeitalter der KI'.",
        "Verfassen Sie einen fundierten Beitrag.",
        ["Bedeutung lebenslangen Lernens für die eigene Karriere", "Chancen und Hürden bei der betrieblichen Weiterbildung", "Rolle des Staates bei der Finanzierung von Bildungsmaßnahmen", "Persönliches Fazit"],
        "ca. 150 Wörter",
        "Angesichts der rasanten technologischen Umbrüche verliert das einmal erworbene Wissen schneller denn je an Halbwertzeit. Das Konzept des lebenslangen Lernens ist daher längst keine bloße Bildungsfloskel mehr, sondern eine existentielle Grundvoraussetzung für nachhaltige Beschäftigungsfähigkeit.\n\nEinerseits eröffnet die Digitalisierung durch modulare E-Learning-Plattformen und flexible Micro-Degrees ungeahnte Möglichkeiten zur individuellen Höherqualifizierung. Andererseits stehen Beschäftigte im Berufsalltag oft vor dem Problem mangelnder zeitlicher Ressourcen und hoher Weiterbildungskosten. Hier sehe ich sowohl Arbeitgeber als auch den Gesetzgeber in der Pflicht: Unternehmen sollten ihren Angestellten verbindliche Bildungszeiten gewähren, während der Staat gezielte Förderprogramme für zukunftsträchtige Fachbereiche bereitstellen muss.\n\nNur wenn Weiterbildung als gesamtgesellschaftliche Investition begriffen wird, kann der digitale Wandel sozial verträglich und wirtschaftlich erfolgreich bewältigt werden.",
        tr("Sophisticated academic register, well-structured arguments with concession and synthesis.", "لحن آکادمیک سطح بالا، استدلال‌های منطقی همراه با جملات پیرو پیچیده و نتیجه‌گیری جامع.")
    ),
    make_exam(
        "exam_goethe_b2_set4",
        "Goethe-Zertifikat B2 - Modellsatz 4 (Erneuerbare Energien & Klimapolitik)",
        "Goethe-Zertifikat", "B2.2", 190, "60% (60 / 100 Punkte)",
        "Lesen: Die Energiewende und der Ausbau der Stromnetze",
        "Energie- und Klimajournal",
        "Der Übergang von fossilen Brennstoffen zu regenerativen Energiequellen wie Windkraft und Photovoltaik gilt als das Jahrhundertprojekt der deutschen Industriepolitik. Zwar übersteigt der Anteil erneuerbarer Energien an der Stromerzeugung an sonnigen und windreichen Tagen bereits regelmäßig 60 Prozent, doch offenbart sich dabei ein fundamentales strukturelles Nadelöhr: der schleppende Netzausbau. Während der grüne Strom überwiegend im windreichen Norden produziert wird, befinden sich die großen industriellen Abnehmer im Süden. Um Blackouts zu verhindern und Abregelungen von Windparks zu minimieren, sind Milliardeninvestitionen in Hochspannungs-Gleichstrom-Übertragungsleitungen (HGÜ) unabdingbar.",
        [
            {
                "id": "b2_s4_l1",
                "question": "1. Der Ausbau der Stromübertragungsnetze hält mit der Erzeugung erneuerbarer Energie problemlos Schritt.",
                "options": ["Richtig", "Falsch"],
                "correctAnswer": "Falsch",
                "explanation": tr("The text describes the grid expansion as sluggish and a fundamental bottleneck.", "متن تاکید می‌کند توسعه خطوط انتقال دچار کندی و به عنوان گلوگاه اساسی مطرح است.")
            },
            {
                "id": "b2_s4_l2",
                "question": "2. Warum werden neue Stromtrassen von Nord nach Süd benötigt?",
                "options": ["a) Weil im Süden keine Menschen leben", "b) Weil Strom im Norden erzeugt, aber im industriellen Süden gebraucht wird", "c) Weil Gleichstromleitungen billiger als Windräder sind"],
                "correctAnswer": "b) Weil Strom im Norden erzeugt, aber im industriellen Süden gebraucht wird",
                "explanation": tr("Wind power is mainly generated in the north, while heavy industry is in the south.", "برق بادی در شمال تولید ولی مراکز صنعتی بزرگ در جنوب کشور متمرکزند.")
            }
        ],
        "Hören: Bürgerversammlung zum Thema Windkraftausbau",
        "Ausschnitt aus einer Bürgerversammlung in einer ländlichen Gemeinde.",
        "Bürgermeister: Liebe Mitbürgerinnen und Mitbürger, wir haben heute über den geplanten Windpark auf der Gemeindefläche zu beschließen. Drei moderne Anlagen könnten rechnerisch den Strombedarf unserer gesamten Gemeinde decken und zusätzliche Gewerbesteuereinnahmen einbringen.\nBürgerinitiative: Herr Bürgermeister, wir befürworten grundsätzlich erneuerbare Energien, fordern jedoch einen Mindestabstand von 1.000 Metern zur Wohnbebauung, um Belastungen durch Infraschall und Schattenwurf auszuschließen.",
        [
            {
                "id": "b2_s4_h1",
                "question": "1. Die Bürgerinitiative lehnt erneuerbare Energien grundsätzlich vollständig ab.",
                "options": ["Richtig", "Falsch"],
                "correctAnswer": "Falsch",
                "explanation": tr("They support renewable energy in principle, but request a minimum distance.", "آن‌ها در اصل موافق انرژی تجدیدپذیرند اما رعایت فاصله مجاز از منازل را مطالبه می‌کنند.")
            }
        ],
        "Schreiben: Leserbrief zur Verkehrswende in Ballungsräumen",
        "Leserbrief an eine Tageszeitung",
        "Sie reagieren auf einen Zeitungsartikel mit dem Titel 'Verkehrschaos und Feinstaub: Müssen Autos aus den Innenstädten verbannt werden?'.",
        "Schreiben Sie einen Leserbrief.",
        ["Bezugnahme auf den Artikel", "Analyse der Umwelt- und Lebensqualitätsaspekte", "Bedeutung verlässlicher ÖPNV-Alternativen", "Eigener Kompromissvorschlag"],
        "ca. 150 Wörter",
        "Sehr geehrte Redaktion,\n\nmit großem Interesse habe ich Ihren Leitartikel zur Notwendigkeit einer urbanen Verkehrswende gelesen. Die geschilderten Belastungen durch Lärm, Feinstaub und überfüllte Straßen spiegeln die alltägliche Realität in unseren Städten treffend wider.\n\nZweifelsohne steigert die Reduzierung des motorisierten Individualverkehrs die Aufenthaltsqualität im öffentlichen Raum beträchtlich. Ein pauschales Fahrverbot greift jedoch zu kurz, solange Pendler aus suburbanen Regionen nicht auf eng getaktete, bezahlbare und barrierefreie Alternativen zurückgreifen können. Anstelle einseitiger Verbote plädiere ich für eine intelligente Verknüpfung von Park-and-Ride-Systemen am Stadtrand mit einem dichten Netz von Expressbussen und geschützten Radschnellwegen.\n\nNur wenn der öffentliche Verkehr im Vergleich zum Auto einen echten Komfort- und Zeitgewinn darstellt, wird der Umstieg von breiten Bevölkerungsschichten mitgetragen.\n\nMit freundlichen Grüßen\nSayed Bashir",
        tr("Refined argumentative structure, civic awareness, constructive proposals.", "ساختار استدلالی پخته، درک مسائل شهری و ارائه راه‌حل‌های سازنده.")
    ),
    make_exam(
        "exam_goethe_b2_set5",
        "Goethe-Zertifikat B2 - Modellsatz 5 (Psychologie, Stressbewältigung & Achtsamkeit)",
        "Goethe-Zertifikat", "B2.2", 190, "60% (60 / 100 Punkte)",
        "Lesen: Das Phänomen der ständigen Erreichbarkeit und psychische Gesundheit",
        "Psychologie Heute",
        "Die Entgrenzung von Arbeit und Freizeit durch mobile Endgeräte hat in den letzten Jahren dramatisch zugenommen. Was vordergründig als Flexibilitätsgewinn gefeiert wurde, erweist sich für immer mehr Arbeitnehmer als erhebliche psychische Belastungsprobe. Die Erwartung, dienstliche E-Mails auch am späten Abend oder am Wochenende zeitnah zu beantworten, führt zu chronischem Stress und verhindert erholsame Regenerationsphasen. Arbeitspsychologen plädieren daher für betriebliche Vereinbarungen zum 'Recht auf Nichterreichbarkeit' und die Etablierung einer gesunden Pausenkultur.",
        [
            {
                "id": "b2_s5_l1",
                "question": "1. Ständige Erreichbarkeit wird im Text als ausschließlich positiv für die Gesundheit dargestellt.",
                "options": ["Richtig", "Falsch"],
                "correctAnswer": "Falsch",
                "explanation": tr("The text explicitly identifies it as a psychological burden and source of chronic stress.", "متن صراحتاً آن را بار روانی سنگین و عامل استرس مزمن معرفی می‌کند نه پدیده‌ای کاملاً مثبت.")
            },
            {
                "id": "b2_s5_l2",
                "question": "2. Was empfehlen Arbeitspsychologen zur Entlastung von Beschäftigten?",
                "options": ["a) Mehr Überstunden", "b) Betriebsvereinbarungen zum Recht auf Nichterreichbarkeit", "c) Vollständiges Verbot von Smartphones im Privatleben"],
                "correctAnswer": "b) Betriebsvereinbarungen zum Recht auf Nichterreichbarkeit",
                "explanation": tr("Psychologists advocate for the right to disconnect via company agreements.", "روانشناسان کار موافقت‌نامه‌های شرکتی برای حق عدم پاسخگویی در ساعات فراغت را توصیه می‌کنند.")
            }
        ],
        "Hören: Radiointerview mit einem Resilienzforscher",
        "Ein Experte erläutert Methoden zur Stärkung der psychischen Widerstandskraft.",
        "Interviewer: Herr Professor Bauer, was verstehen Sie unter dem Begriff 'Resilienz'?\nProf. Bauer: Resilienz ist kein starres Persönlichkeitsmerkmal, sondern eine dynamische Fähigkeit, Krisen und Rückschläge ohne dauerhafte Schäden zu bewältigen. Wichtige Säulen sind dabei ein stabiles soziales Netzwerk, Optimismus und die Fähigkeit zur Selbstreflexion.",
        [
            {
                "id": "b2_s5_h1",
                "question": "1. Laut Professor Bauer kann Resilienz trainiert und weiterentwickelt werden.",
                "options": ["Richtig", "Falsch"],
                "correctAnswer": "Richtig",
                "explanation": tr("He defines resilience as a dynamic capability rather than an unchangeable trait.", "او تاب‌آوری را مهارتی پویا می‌داند که قابل تقویت و ارتقا است.")
            }
        ],
        "Schreiben: Argumentation über Work-Life-Balance und Viertagewoche",
        "Argumentativer Forumsbeitrag",
        "In einem Wirtschafts- und Karriereforum diskutieren Sie zum Thema 'Viertagewoche bei vollem Lohnausgleich: Zukunftsmodell oder Utopie?'.",
        "Verfassen Sie Ihren Beitrag mit schlüssiger Argumentation.",
        ["Vorteile der Viertagewoche für Mitarbeitergesundheit", "Herausforderungen für Produktivität und Organisation", "Beispiele aus Pilotprojekten", "Ihre eigene Einschätzung"],
        "ca. 150 Wörter",
        "Die Debatte über die Einführung einer Viertagewoche polarisiert Arbeitgeber und Gewerkschaften gleichermaßen. Während Befürworter von spürbaren Produktivitätsgewinnen und einem signifikanten Rückgang stressbedingter Krankheitsfehltage berichten, warnen Wirtschaftsvertreter vor gravierenden Wettbewerbsnachteilen und Personalengpässen.\n\nErgebnisse internationaler Modellprojekte zeigen jedoch eindrucksvoll, dass eine Reduktion der Arbeitszeit bei gleichzeitiger Optimierung von Arbeitsabläufen keineswegs zu Umsatzeinbußen führen muss. Ausgeruhte, zufriedene Mitarbeiter arbeiten nachweislich konzentrierter und loyaler. Gleichwohl lässt sich dieses Modell nicht schematisch auf alle Branchen übertragen: Im Schichtbetrieb oder im Dienstleistungssektor bedarf es flexiblerer Übergangslösungen.\n\nMeines Erachtens stellt die Viertagewoche einen vielversprechenden Weg dar, um dem Fachkräftemangel durch attraktivere Rahmenbedingungen entgegenzuwirken.",
        tr("Well-balanced thesis, synthesis of opposing viewpoints, formal academic cohesion.", "تز محکم و متعادل، تلفیق دیدگاه‌های موافق و مخالف و انسجام دانشگاهی استاندارد B2.")
    ),
    make_exam(
        "exam_telc_b2_set2",
        "telc Deutsch B2 - Übungstest 2 (Pflege- und Gesundheitssektor, Medizintechnik & Ethik)",
        "telc", "B2.1", 170, "60% (180 / 300 Punkte)",
        "Lesen: Der Fachkräftemangel im deutschen Gesundheitswesen",
        "Deutsches Ärzteblatt & Pflegemagazin",
        "Der demografische Wandel stellt das deutsche Gesundheitssystem vor beispiellose Herausforderungen. Während der Anteil hochbetagter Menschen kontinuierlich ansteigt, herrscht in Krankenhäusern und Pflegeeinrichtungen ein akuter Mangel an qualifizierten Pflegefachkräften. Um dem drohenden Versorgungsnotstand entgegenzuwirken, setzt die Bundesregierung auf ein Bündel von Maßnahmen: Neben einer spürbaren Anhebung der Grundgehälter und verbesserten Schichtdienstmodellen soll die gezielte Zuwanderung ausländischer Fachkräfte durch beschleunigte Anerkennungsverfahren für Berufsabschlüsse erleichtert werden.",
        [
            {
                "id": "b2_t2_l1",
                "question": "1. Zur Bewältigung des Pflegenotstands setzt die Politik unter anderem auf die Rekrutierung internationaler Fachkräfte.",
                "options": ["Richtig", "Falsch"],
                "correctAnswer": "Richtig",
                "explanation": tr("The text confirms recruiting foreign professionals via accelerated recognition.", "متن صراحتاً تسهیل ورود و معادل‌سازی مدارک پرستاران بین‌المللی را تایید می‌کند.")
            },
            {
                "id": "b2_t2_l2",
                "question": "2. Was erschwert die Situation im Gesundheitswesen zusätzlich?",
                "options": ["a) Ein Mangel an Patienten", "b) Die kontinuierliche Zunahme hochbetagter Menschen", "c) Ein Überangebot an Pflegekräften"],
                "correctAnswer": "b) Die kontinuierliche Zunahme hochbetagter Menschen",
                "explanation": tr("The rising proportion of elderly people increases healthcare demand.", "افزایش مداوم جمعیت سالمندان نیاز به مراقبت‌های درمانی را تشدید کرده است.")
            }
        ],
        "Hören: Übergabegespräch im Krankenhaus",
        "Ein Arzt und eine leitende Pflegekraft besprechen den Zustand eines neu aufgenommenen Patienten.",
        "Ärztin: Guten Morgen, Schwester Julia. Wie hat Herr Krause die Nacht nach der Operation überstanden?\nPflegekraft: Guten Morgen, Frau Dr. Wagner. Die Vitalwerte sind stabil. Die Schmerztherapie schlägt gut an, allerdings klagte der Patient gegen 4 Uhr morgens über leichte Übelkeit. Ich habe die Medikation entsprechend angepasst.",
        [
            {
                "id": "b2_t2_h1",
                "question": "1. Der Patient hatte schwere postoperative Komplikationen.",
                "options": ["Richtig", "Falsch"],
                "correctAnswer": "Falsch",
                "explanation": tr("Vital signs were stable, with only slight morning nausea.", "علائم حیاتی بیمار پایدار بود و فقط تهوع خفیف صبحگاهی داشت.")
            }
        ],
        "Schreiben: Beschwerdebrief an einen Medizintechnik-Lieferanten",
        "Formeller Beschwerdebrief / Reklamation",
        "Eine Lieferung von Diagnosegeräten für Ihre Klinik wies Mängel auf.",
        "Verfassen Sie ein formelles Reklamationsschreiben an die Geschäftsleitung des Lieferanten.",
        ["Bezugnahme auf Bestellung und Lieferscheinnummer", "Detaillierte Schilderung der technischen Defekte", "Gefährdung des Klinikbetriebs", "Fristsetzung zur Nachlieferung einwandfreier Geräte"],
        "ca. 150 Wörter",
        "Sehr geehrte Damen und Herren,\n\nmit Bezug auf unseren Auftrag Nr. 89452 vom 15. des vergangenen Monats müssen wir Ihnen leider mitteilen, dass die gelieferten Ultraschallgeräte gravierende Funktionsmängel aufweisen.\n\nBei der Inbetriebnahme durch unsere Medizintechniker wurde festgestellt, dass zwei der fünf Geräte wiederholt Software-Abstürze erleiden und die Bildschirme fehlerhafte Kalibrierungsdaten anzeigen. Ein derart unzuverlässiger Zustand ist im klinischen Alltag absolut inakzeptabel, da fehlerfreie Diagnosen für die Patientensicherheit oberste Priorität besitzen.\n\nWir fordern Sie daher mit Nachdruck auf, bis spätestens zum kommenden Freitag funktionsfähige Ersatzgeräte zu liefern und die defekten Exemplare auf Ihre Kosten abzuholen. Sollte die Nachbesserung fruchtlos verstreichen, behalten wir uns rechtliche Schritte sowie den Rücktritt vom Kaufvertrag vor.\n\nMit freundlichen Grüßen\nSayed Bashir\nKlinikleitung Medizintechnik",
        tr("Precise legal terminology, firm formal register, clear warning of consequences.", "کاربرد اصطلاحات فنی-حقوقی دقیق، لحن قاطع اداری و تعیین صریح عواقب تأخیر.")
    ),
    make_exam(
        "exam_telc_b2_set3",
        "telc Deutsch B2 - Übungstest 3 (Der deutsche Mittelstand & Innovation)",
        "telc", "B2.2", 170, "60% (180 / 300 Punkte)",
        "Lesen: 'Hidden Champions' – Die heimlichen Weltmarktführer",
        "Industrie- und Handelsmagazin",
        "Als 'Hidden Champions' bezeichnet man hochspezialisierte mittelständische Unternehmen, die in ihrer Nische zu den globalen Top 3 gehören, in der breiten Öffentlichkeit jedoch kaum bekannt sind. Häufig familiengeführt und in ländlichen Regionen ansässig, zeichnen sie sich durch eine außerordentlich hohe Forschungs- und Entwicklungsquote sowie eine ausgeprägte Kundennähe aus. Während Großkonzerne oft kurzfristigen Quartalszahlen verpflichtet sind, verfolgen deutsche Mittelständler langfristige Innovationsstrategien und investieren intensiv in die Qualifikation ihrer Mitarbeiter.",
        [
            {
                "id": "b2_t3_l1",
                "question": "1. 'Hidden Champions' sind in der Regel weltbekannte Großkonzerne mit breitem Massenpublikum.",
                "options": ["Richtig", "Falsch"],
                "correctAnswer": "Falsch",
                "explanation": tr("They are specialized SMEs, barely known to the general public.", "آن‌ها شرکت‌های متوسط فوق تخصصی هستند و عموم مردم شناخت کمی از آن‌ها دارند.")
            },
            {
                "id": "b2_t3_l2",
                "question": "2. Welches Merkmal unterscheidet viele Mittelständler von Großkonzernen?",
                "options": ["a) Kurzfristige Quartalsorientierung", "b) Langfristige Ausrichtung und hohe Forschungsquote", "c) Verzicht auf Kundennähe"],
                "correctAnswer": "b) Langfristige Ausrichtung und hohe Forschungsquote",
                "explanation": tr("SMEs follow long-term strategies and invest heavily in research and staff.", "شرکت‌های متوسط رویکردی بلندمدت، سرمایه‌گذاری پژوهشی و رابطه نزدیک با مشتریان دارند.")
            }
        ],
        "Hören: Unternehmenspräsentation auf einer Industriemesse",
        "Ein Geschäftsführer stellt auf der Hannover Messe einen neuen patentierten Sensor vor.",
        "Geschäftsführer: Unsere neu entwickelten optischen Sensoren arbeiten selbst unter extremen Hitze- und Druckbedingungen im Maschinenbau mit einer Genauigkeit im Mikrometerbereich. Durch die integrierte KI-Einheit können Wartungsbedarfe vorhergesagt werden, bevor ein Stillstand der Produktionslinie droht.",
        [
            {
                "id": "b2_t3_h1",
                "question": "1. Die Sensoren können drohende Maschinenstillstände frühzeitig vorhersagen.",
                "options": ["Richtig", "Falsch"],
                "correctAnswer": "Richtig",
                "explanation": tr("Integrated AI predicts maintenance needs prior to line shutdowns.", "هوش مصنوعی تعبیه‌شده زمان نیاز به تعمیرات را قبل از توقف خط تولید پیش‌بینی می‌کند.")
            }
        ],
        "Schreiben: Angebotsschreiben und Kooperationsanfrage",
        "Geschäftsbrief / Kooperationsangebot",
        "Sie leiten den Vertrieb eines Zulieferbetriebs und möchten einem potenziellen Partner eine strategische Kooperation vorschlagen.",
        "Verfassen Sie ein professionelles Anschreiben.",
        ["Kurze Vorstellung Ihres Unternehmens", "Präsentation des gemeinsamen Synergiepotenzials", "Vorschlag für ein Pilotprojekt", "Terminvorschlag für eine Videokonferenz"],
        "ca. 150 Wörter",
        "Sehr geehrter Herr Dr. Klein,\n\naufgrund Ihrer führenden Marktstellung im Bereich automatisierter Montagelinien verfolgen wir die Entwicklung Ihres Unternehmens seit geraumer Zeit mit großem Respekt.\n\nAls spezialisierter Hersteller von hochpräzisen Greifsystemen verfügen wir über patentierte Technologien, die Ihre Produktionszyklen um bis zu 20 Prozent beschleunigen können. Durch eine strategische Partnerschaft könnten wir gemeinsam passgenaue Komplettlösungen für anspruchsvolle Industriekunden anbieten und neue Marktsegmente erschließen.\n\nUm Ihnen das konkrete Synergiepotenzial aufzuzeigen, möchten wir Ihnen die Durchführung eines unverbindlichen Pilotprojekts auf einer Ihrer Testanlagen vorschlagen. Gerne erläutere ich Ihnen die technischen Details in einer kurzen Videokonferenz.\n\nWäre Ihnen ein Termin am kommenden Dienstag um 14:00 Uhr genehm?\n\nMit freundlichen Grüßen\nSayed Bashir\nLeiter Vertrieb und Business Development",
        tr("Polished commercial business German, clear value proposition, professional closing.", "نگارش تجاری فوق‌العاده حرفه‌ای آلمانی، ارائه ارزش افزوده شفاف و پایان رسمی.")
    ),
    make_exam(
        "exam_telc_b2_set4",
        "telc Deutsch B2 - Übungstest 4 (Demografischer Wandel & Generationensolidarität)",
        "telc", "B2.2", 170, "60% (180 / 300 Punkte)",
        "Lesen: Die Zukunft des Rentensystems und generationenübergreifendes Wohnen",
        "Sozialpolitische Rundschau",
        "Das bewährte Umlageverfahren der gesetzlichen Rentenversicherung gerät durch den Renteneintritt der geburtenstarken Jahrgänge ('Babyboomer') zunehmend unter finanziellen Druck. Während die Zahl der Rentenbezieher stark ansteigt, verringert sich die Zahl der Beitragszahler kontinuierlich. Als gesellschaftliche Antwort auf diesen Wandel gewinnen Mehrgenerationenhäuser und neue Wohnmodelle rasant an Popularität: Ältere Menschen erhalten Unterstützung im Haushalt, während jüngere Familien von bezahlbarem Wohnraum und flexibler Kinderbetreuung profitieren.",
        [
            {
                "id": "b2_t4_l1",
                "question": "1. In Mehrgenerationenhäusern unterstützen sich Jung und Alt im Alltag gegenseitig.",
                "options": ["Richtig", "Falsch"],
                "correctAnswer": "Richtig",
                "explanation": tr("Young and old mutually support each other with childcare and housework.", "در خانه‌های چندنسلی، جوانان و کهنسالان در نگهداری کودک و کارهای منزل حامی یکدیگرند.")
            },
            {
                "id": "b2_t4_l2",
                "question": "2. Warum steht die gesetzliche Rente unter wachsendem Druck?",
                "options": ["a) Weil niemand mehr alt wird", "b) Weil mehr Rentner auf weniger Beitragszahler treffen", "c) Weil alle Rentner ins Ausland ziehen"],
                "correctAnswer": "b) Weil mehr Rentner auf weniger Beitragszahler treffen",
                "explanation": tr("Demographic shift means more pensioners relying on fewer contributors.", "تعداد بازنشستگان بیشتر و تعداد پرداخت‌کنندگان حق بیمه کمتر می‌شود.")
            }
        ],
        "Hören: Diskussion über altersgerechte Stadtplanung",
        "Stadtplaner diskutieren Maßnahmen zur Barrierefreiheit im urbanen Raum.",
        "Stadtplanerin: Barrierefreiheit nutzt nicht nur Rollstuhlfahrern und Senioren, sondern auch Eltern mit Kinderwagen. Niedrige Bordsteine, breite Gehwege und taktile Leitsysteme für Sehbehinderte sind unverzichtbare Voraussetzungen für eine inklusive Stadt.",
        [
            {
                "id": "b2_t4_h1",
                "question": "1. Barrierefreie Stadtplanung nützt nach Ansicht der Planerin ausschließlich Senioren.",
                "options": ["Richtig", "Falsch"],
                "correctAnswer": "Falsch",
                "explanation": tr("It benefits wheelchair users, seniors, and parents with strollers alike.", "شهر بدون مانع هم به نفع سالمندان است و هم والدین دارای کالسکه و ویلچرسواران.")
            }
        ],
        "Schreiben: Meinungsartikel über das Renteneintrittsalter",
        "Essay / Zeitungsartikel",
        "Sie schreiben einen Artikel für ein Diskussionsportal zum Thema 'Soll das Renteneintrittsalter flexibilisiert werden?'.",
        "Verfassen Sie einen abgewogenen Beitrag.",
        ["Bedeutung der demografischen Entwicklung", "Vor- und Nachteile eines flexiblen Renteneintritts", "Berücksichtigung körperlich schwerer Berufe", "Ihr zukunftsfähiger Lösungsvorschlag"],
        "ca. 150 Wörter",
        "Die Frage nach dem adäquaten Renteneintrittsalter gehört zu den brisantesten sozialpolitischen Weichenstellungen unserer Zeit. Angesichts steigender Lebenserwartung und schrumpfender Erwerbsbevölkerung fordern Ökonomen immer lauter eine Anhebung des Rentenalters auf 68 oder gar 70 Jahre.\n\nEin starres Rentenalter wird jedoch den realen Lebenswirklichkeiten der Bürgerinnen und Bürger in keiner Weise gerecht. Während Wissensarbeiter am Schreibtisch oft problemlos über das 65. Lebensjahr hinaus tätig sein können, ist eine Verlängerung der Lebensarbeitszeit für Beschäftigte im Baugewerbe oder in der Pflege schlicht unzumutbar. Ein zukunftsträchtiges Rentensystem muss daher auf Flexibilität und Gerechtigkeit fußen: Wer länger arbeiten möchte, sollte dies steuerbegünstigt tun können, während gesundheitlich beanspruchte Berufsgruppen abschlagsfreie Vorruhestandsoptionen behalten müssen.\n\nGenerationensolidarität erfordert differenzierte Lösungen statt pauschaler Belastung.",
        tr("High sociopolitical nuance, well-constructed German subordinate clauses, balanced ethics.", "دیدگاه جامعه‌شناختی عمیق، جملات پیرو پیچیده و نگاه اخلاقی منصفانه به مشاغل دشوار.")
    ),
    make_exam(
        "exam_oesd_b2",
        "ÖSD Zertifikat B2 - Modellsatz 1 (Tourismus, Alpenraum & Nachhaltige Mobilität)",
        "ÖSD", "B2.2", 185, "60% (60 / 100 Punkte)",
        "Lesen: Sanfter Tourismus im österreichischen Alpenraum",
        "Alpenvereins-Magazin Österreich",
        "Der Tourismus stellt das wirtschaftliche Rückgrat vieler alpiner Regionen Österreichs dar, doch bringt der Massentourismus empfindliche ökologische Gleichgewichte zunehmend ins Wanken. Skigebiete mit künstlicher Beschneiung und verstopfte Passstraßen belasten Flora und Fauna. Als Gegenentwurf gewinnen sogenannte 'Bergsteigerdörfer' immer mehr Zuspruch: Sie verzichten bewusst auf Großbauten, fördern regionale Bio-Betriebe und setzen konsequent auf die Anreise der Gäste mit Bus und Bahn. Diese Form des 'sanften Tourismus' beweist, dass Wertschöpfung und Naturschutz kein unüberwindbarer Widerspruch sein müssen.",
        [
            {
                "id": "b2_oe_l1",
                "question": "1. 'Bergsteigerdörfer' setzen auf sanften Tourismus ohne monumentale Hotelanlagen und Mega-Lifte.",
                "options": ["Richtig", "Falsch"],
                "correctAnswer": "Richtig",
                "explanation": tr("They deliberately avoid massive constructions, emphasizing regional organic food and train transit.", "روستاهای کوه‌نوردی آگاهانه از ساخت‌وسازهای انبوه پرهیز کرده و گردشگری طبیعت‌دوستانه را برگزیده‌اند.")
            },
            {
                "id": "b2_oe_l2",
                "question": "2. Was belässt alpine Ökosysteme laut Text besonders?",
                "options": ["a) Zu viele Wanderwege für Fußgänger", "b) Schneekanonen, Großbauten und Autokolonnen", "c) Ein Mangel an Unterkünften"],
                "correctAnswer": "b) Schneekanonen, Großbauten und Autokolonnen",
                "explanation": tr("Artificial snowmaking, massive builds, and traffic congestion strain ecosystems.", "برف مصنوعی، ساخت‌وساز سنگین و ترافیک جاده‌ای کوهستان به محیط زیست آسیب می‌زنند.")
            }
        ],
        "Hören: Gespräch mit einem Tiroler Bio-Bergbauern",
        "Ein Interview über traditionelle Almwirtschaft und Landschaftspflege in Tirol.",
        "Interviewer: Grüß Gott, Herr Hofer! Wie wichtig ist die Beweidung der Almen für den Hochwasserschutz im Tal?\nBauer Hofer: Enorm wichtig! Wenn die Almen nicht durch Kühe und Schafe beweidet werden, verbuschen die Hänge. Im Winter rutscht dann der Schnee viel leichter ab, was die Lawinengefahr für die Siedlungen im Tal drastisch erhöht.",
        [
            {
                "id": "b2_oe_h1",
                "question": "1. Das Weiden der Tiere auf den Almen senkt die Lawinengefahr für das Tal.",
                "options": ["Richtig", "Falsch"],
                "correctAnswer": "Richtig",
                "explanation": tr("Grazing keeps mountain slopes clean, reducing avalanche risks for valley settlements.", "چرای احشام در مراتع کوهستانی شیب‌ها را حفظ کرده و خطر بهمن برای دره را کاهش می‌دهد.")
            }
        ],
        "Schreiben: Leserbrief zu nachhaltigem Tourismus in Österreich",
        "Leserbrief / Essay",
        "Sie äußern sich zu einem Artikel über die Zukunft des Wintertourismus angesichts des Klimawandels.",
        "Verfassen Sie einen reflektierten Leserbrief.",
        ["Bedeutung des Tourismus für alpine Arbeitsplätze", "Ökologische Grenzen des Massenskisports", "Notwendigkeit ganzjähriger, naturverträglicher Angebote", "Appell an Gäste und Tourismusverbände"],
        "ca. 150 Wörter",
        "Sehr geehrte Redaktion,\n\nIhr Bericht über die Herausforderungen des alpinen Wintertourismus spricht ein fundamentales Dilemma der Alpenländer an. Einerseits sichern Bergbahnen und Hotellerie Tausende Existenzen in strukturschwachen Bergtälern, andererseits stößt die energieintensive Produktion von Kunstschnee angesichts milder Winter an ökologische und ökonomische Grenzen.\n\nDie Zukunft des Alpenraums kann nicht im krampfhaften Festhalten an traditionellen Konzepten liegen. Vielmehr gilt es, die Transformation hin zu ganzjährigen, sanften Erlebnisangeboten wie Winterwandern, Kulinarik und Gesundheitstourismus mutig voranzutreiben. Gäste und Verbände müssen begreifen, dass die unberührte alpine Bergwelt das eigentliche Kapital darstellt, welches es um jeden Preis zu bewahren gilt.\n\nMit freundlichen Grüßen aus Innsbruck\nSayed Bashir",
        tr("Austrian regional color, eloquent arguments, strong sustainable development perspective.", "رنگ و بوی منطقه‌ای اتریش، استدلال‌های شیوا و نگاهی عمیق به توسعه پایدار کوهستان.")
    )
]

output_path = "src/data/standardizedExamsB2Extra.ts"
code = "import { StandardizedExam } from '../types';\n\n"
export_names = []
for ex in b2_exams:
    var_name = ex["id"].upper()
    export_names.append(var_name)
    code += f"export const {var_name}: StandardizedExam = " + json.dumps(ex, ensure_ascii=False, indent=2) + ";\n\n"

code += f"export const EXTRA_EXAMS_B2: StandardizedExam[] = [\n  " + ",\n  ".join(export_names) + "\n];\n"

with open(output_path, "w", encoding="utf-8") as f:
    f.write(code)

print(f"Generated {len(b2_exams)} B2 exams in {output_path}!")
