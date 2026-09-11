import json
import os
from create_exam_sets import make_exam, tr

# B1 Sets:
# 1. EXAM_GOETHE_B1_SET2: Beruf & Bewerbung
# 2. EXAM_GOETHE_B1_SET3: Umwelt & Nachhaltigkeit
# 3. EXAM_GOETHE_B1_SET4: Digitale Medien & Bildung
# 4. EXAM_GOETHE_B1_SET5: Gesundheit & Sport
# 5. EXAM_TELC_B1_SET2: Wohnen & Nachbarschaft
# 6. EXAM_TELC_B1_SET3: Ehrenamt & Gesellschaft
# 7. EXAM_TELC_B1_SET4: Ausbildung & Duales System
# 8. EXAM_OESD_B1: Leben in Österreich & Kultur

b1_exams = [
    make_exam(
        "exam_goethe_b1_set2",
        "Goethe-Zertifikat B1 - Modellsatz 2 (Beruf, Bewerbung & Arbeitsplatz)",
        "Goethe-Zertifikat", "B1.1", 165, "60% (60 / 100 Punkte)",
        "Lesen Teil 1: Bewerbungstipps und Arbeitsmarkt",
        "Karriere-Magazin Deutschland",
        "Wer in Deutschland einen qualifizierten Arbeitsplatz sucht, muss bei den Bewerbungsunterlagen hohe Standards einhalten. Ein vollständiger Lebenslauf, aussagekräftige Zeugnisse und ein individuelles Anschreiben sind unerlässlich. Personalexperte Markus Weber betont: 'Immer mehr Unternehmen schätzen neben fachlichen Qualifikationen vor allem soziale Kompetenzen und Anpassungsfähigkeit. Wer im Vorstellungsgespräch echte Lernbereitschaft und Teamgeist zeigt, hat hervorragende Chancen.' Zudem spielen berufsbegleitende Deutschkurse eine entscheidende Rolle für den langfristigen Erfolg im Beruf.",
        [
            {
                "id": "b1_s2_l1",
                "question": "1. Laut Herrn Weber sind für viele Unternehmen soziale Fähigkeiten genauso wichtig wie Fachwissen.",
                "options": ["Richtig", "Falsch"],
                "correctAnswer": "Richtig",
                "explanation": tr("The text mentions: '...schätzen neben fachlichen Qualifikationen vor allem soziale Kompetenzen...'", "متن تصریح می‌کند که در کنار مدارک تخصصی، مهارت‌های فردی و اجتماعی نیز ارزش بالایی دارند.")
            },
            {
                "id": "b1_s2_l2",
                "question": "2. Was sollten Bewerber im Vorstellungsgespräch besonders verdeutlichen?",
                "options": ["a) Dass sie nur alleine arbeiten möchten", "b) Lernbereitschaft und Teamgeist", "c) Dass sie keine Weiterbildung brauchen"],
                "correctAnswer": "b) Lernbereitschaft und Teamgeist",
                "explanation": tr("Markus Weber highlights showing willingness to learn and team spirit.", "کارشناس بر نشان دادن اشتیاق به یادگیری و روحیه تیمی تاکید دارد.")
            },
            {
                "id": "b1_s2_l3",
                "question": "3. Welche Rolle spielen berufsbezogene Deutschkurse?",
                "options": ["a) Sie sind unwichtig für die Karriere", "b) Sie sind entscheidend für langfristigen Berufserfolg", "c) Sie werden nur an Universitäten angeboten"],
                "correctAnswer": "b) Sie sind entscheidend für langfristigen Berufserfolg",
                "explanation": tr("The text says they play a decisive role for long-term career success.", "متن بیان می‌کند که دوره‌های آلمانی شغلی نقشی تعیین‌کننده در موفقیت پایدار دارند.")
            }
        ],
        "Hören: Gespräch in der Personalabteilung",
        "Ein Bewerbungsgespräch in einer Münchner IT-Firma.",
        "Frau Klein: Guten Tag, Herr Müller. Vielen Dank, dass Sie heute zu unserem Gespräch gekommen sind. Wir haben Ihre Unterlagen geprüft und sind von Ihren Programmierkenntnissen sehr angetan.\nHerr Müller: Guten Tag, Frau Klein! Ich freue mich sehr über die Einladung. Mir ist besonders wichtig, in einem innovativen Team an zukunftssicheren Softwarelösungen zu arbeiten.\nFrau Klein: Das passt perfekt. Wir bieten flexible Arbeitszeiten, Homeoffice-Optionen und regelmäßige Schulungen.",
        [
            {
                "id": "b1_s2_h1",
                "question": "1. Frau Klein ist mit den Fachkenntnissen des Bewerbers sehr zufrieden.",
                "options": ["Richtig", "Falsch"],
                "correctAnswer": "Richtig",
                "explanation": tr("Frau Klein says they are 'sehr angetan' with his programming skills.", "خانم کلاین از مهارت‌های برنامه‌نویسی او بسیار راضی و تحت تاثیر قرار گرفته است.")
            },
            {
                "id": "b1_s2_h2",
                "question": "2. Welche Arbeitsbedingungen bietet das Unternehmen?",
                "options": ["a) Nur Nachtschichten im Büro", "b) Flexible Arbeitszeiten und Homeoffice", "c) Keinerlei Weiterbildungsmöglichkeiten"],
                "correctAnswer": "b) Flexible Arbeitszeiten und Homeoffice",
                "explanation": tr("The company offers flexible hours, home office, and regular training.", "شرکت ساعات کاری منعطف و امکان دورکاری ارائه می‌دهد.")
            }
        ],
        "Schreiben: Formelle Bewerbungs-E-Mail",
        "Bewerbungsschreiben / Formelle E-Mail",
        "Sie haben eine interessante Stellenanzeige als Kundenservice-Mitarbeiter/in gelesen und möchten sich bewerben.",
        "Schreiben Sie eine strukturierte formelle Bewerbung an die Personalabteilung.",
        ["Grund Ihres Schreibens", "Ihre beruflichen Erfahrungen und Sprachkenntnisse", "Warum Sie gerade für diese Firma arbeiten möchten", "Möglicher Eintrittstermin und Bitte um Vorstellungsgespräch"],
        "ca. 80 - 100 Wörter",
        "Sehr geehrte Damen und Herren,\n\nmit großem Interesse habe ich Ihre Stellenanzeige im Internet gelesen. Da ich über mehrjährige Erfahrung im Bereich Kundenbetreuung verfüge und fließend Deutsch sowie Englisch spreche, bewerbe ich mich hiermit um die ausgeschriebene Position.\n\nIn meiner vorherigen Tätigkeit habe ich gelernt, auch in stressigen Situationen stets freundlich und lösungsorientiert zu handeln. Ihr innovatives Unternehmen genießt einen hervorragenden Ruf, weshalb ich mein Engagement gerne in Ihr Team einbringen möchte.\n\nIch könnte die Stelle ab dem 1. des kommenden Monats antreten. Über eine Einladung zu einem persönlichen Gespräch freue ich mich sehr.\n\nMit freundlichen Grüßen\nSayed Bashir",
        tr("Correct formal salutation, addressing all points, B1 subordinate clauses, professional register.", "رعایت سلام و پایان رسمی، پوشش تمام بندها، گرامر B1 و واژگان شغلی مناسب.")
    ),
    make_exam(
        "exam_goethe_b1_set3",
        "Goethe-Zertifikat B1 - Modellsatz 3 (Umwelt, Nachhaltigkeit & Mobilität)",
        "Goethe-Zertifikat", "B1.1", 165, "60% (60 / 100 Punkte)",
        "Lesen: Das Deutschlandticket und der öffentliche Nahverkehr",
        "Verkehrs- und Umweltmagazin",
        "Seit der Einführung des Deutschlandtickets für 49 Euro nutzen Millionen Bürgerinnen und Bürger regelmäßig Busse und Bahnen. Umweltverbände loben das Ticket als wichtigen Schritt zur Reduktion von CO2-Emissionen im Straßenverkehr. Pendler berichten, dass sie ihr Auto deutlich seltener benutzen, wodurch sie sowohl Treibstoffkosten sparen als auch Staus vermeiden. Dennoch fordern Experten weiterhin massive Investitionen in den Ausbau des Schienennetzes im ländlichen Raum, damit auch Menschen außerhalb der Metropolen zuverlässig auf das Auto verzichten können.",
        [
            {
                "id": "b1_s3_l1",
                "question": "1. Durch das Ticket nutzen viele Pendler ihr Auto seltener.",
                "options": ["Richtig", "Falsch"],
                "correctAnswer": "Richtig",
                "explanation": tr("Text confirms commuters use cars significantly less.", "متن تصریح می‌کند مسافران کمتر از خودروی شخصی استفاده می‌کنند.")
            },
            {
                "id": "b1_s3_l2",
                "question": "2. Was fordern Experten für den ländlichen Raum?",
                "options": ["a) Mehr Autobahnen", "b) Investitionen in den Schienenverkehr", "c) Abschaffung aller Busse"],
                "correctAnswer": "b) Investitionen in den Schienenverkehr",
                "explanation": tr("Experts demand investments in rail networks in rural regions.", "کارشناسان خواستار سرمایه‌گذاری در خطوط ریلی مناطق روستایی هستند.")
            }
        ],
        "Hören: Diskussion über Mülltrennung",
        "Ein Gespräch zweier Nachbarn über umweltfreundliche Müllentsorgung.",
        "Nachbar A: Hallo Frau Sommer, haben Sie gesehen, dass der Biomüll jetzt in neuen Tonnen gesammelt wird?\nNachbarin B: Ja, Herr Müller! Ich finde das hervorragend. Wenn wir organische Abfälle getrennt entsorgen, kann daraus wertvoller Kompost und Biogas gewonnen werden.\nNachbar A: Stimmt genau, und Plastikverpackungen gehören immer in die gelbe Tonne.",
        [
            {
                "id": "b1_s3_h1",
                "question": "1. Warum ist die getrennte Sammlung von Bioabfällen sinnvoll?",
                "options": ["a) Es spart Platz im Kühlschrank", "b) Daraus wird Kompost und Biogas erzeugt", "c) Es kostet mehr Geld"],
                "correctAnswer": "b) Daraus wird Kompost und Biogas erzeugt",
                "explanation": tr("Compost and biogas can be generated from organic waste.", "از زباله‌های زیستی برای تولید کمپوست و بیوگاز استفاده می‌شود.")
            }
        ],
        "Schreiben: Forumsbeitrag zum Thema Umweltschutz im Alltag",
        "Meinungsäußerung im Internetforum",
        "In einem Online-Forum lesen Sie Beiträge zum Thema 'Klimaschutz im Alltag: Was kann jeder tun?'.",
        "Schreiben Sie einen Diskussionsbeitrag für das Forum.",
        ["Ihre persönliche Meinung zum Thema", "Beispiele, wie Sie im Alltag Energie und Müll sparen", "Vor- und Nachteile von autofreien Innenstädten", "Ein Ratschlag für andere Leser"],
        "ca. 80 Wörter",
        "Hallo zusammen,\n\nich finde das Thema Umweltschutz enorm wichtig für unsere Zukunft. In meinem Alltag versuche ich stets, Energie zu sparen, indem ich das Licht ausschalte und Geräte nicht auf Stand-by lasse. Außerdem fahre ich fast überall mit dem Fahrrad oder der Bahn hin.\n\nAutofreie Innenstädte haben meiner Meinung nach viele Vorteile: Die Luft wird sauberer und Fußgänger können sich sicherer bewegen. Ein Nachteil ist jedoch, dass ältere Menschen manchmal längere Wege zurücklegen müssen. Mein Tipp: Schon kleine Schritte wie Stoffbeutel beim Einkaufen machen einen großen Unterschied!\n\nViele Grüße\nSayed",
        tr("Clear expression of opinion, structured pros and cons, personal examples.", "بیان روشن نظر، ساختاربندی مزایا و معایب و نمونه‌های کاربردی زندگی روزمره.")
    ),
    make_exam(
        "exam_goethe_b1_set4",
        "Goethe-Zertifikat B1 - Modellsatz 4 (Medien, Digitale Welt & Bildung)",
        "Goethe-Zertifikat", "B1.2", 165, "60% (60 / 100 Punkte)",
        "Lesen: Tablets und Smartphones im Schulunterricht",
        "Bildungsjournal Deutschland",
        "Die Digitalisierung hat die deutschen Schulen erreicht: Immer mehr Klassen arbeiten mit Tablets statt schweren Schulbüchern. Befürworter betonen, dass interaktive Lern-Apps Schüler motivieren und individuelle Förderung erleichtern. Lehrer können Lernfortschritte in Echtzeit verfolgen und gezielte Aufgaben stellen. Kritiker warnen allerdings vor Ablenkung durch soziale Netzwerke und fordern klare Nutzungsregeln sowie medienpädagogische Schulungen für Lehrkräfte und Eltern.",
        [
            {
                "id": "b1_s4_l1",
                "question": "1. Interaktive Lern-Apps können laut Text die Lernmotivation von Schülern steigern.",
                "options": ["Richtig", "Falsch"],
                "correctAnswer": "Richtig",
                "explanation": tr("The article highlights increased motivation via interactive apps.", "متن اشاره می‌کند که برنامه‌های تعاملی انگیزه یادگیری دانش‌آموزان را افزایش می‌دهند.")
            },
            {
                "id": "b1_s4_l2",
                "question": "2. Wovor warnen Kritiker bei der Digitalisierung im Unterricht?",
                "options": ["a) Vor niedrigeren Stromkosten", "b) Vor Ablenkung durch Social Media", "c) Vor zu vielen Hausaufgaben"],
                "correctAnswer": "b) Vor Ablenkung durch Social Media",
                "explanation": tr("Critics warn against distractions through social networks.", "منتقدان نسبت به حواس‌پرتی ناشی از شبکه‌های اجتماعی هشدار می‌دهند.")
            }
        ],
        "Hören: Radiointerview über Medienkonsum von Jugendlichen",
        "Ein Experte für Medienpädagogik spricht im Radio über Bildschirmzeiten.",
        "Moderator: Herr Dr. Franke, wie viel Bildschirmzeit ist für Jugendliche noch gesund?\nDr. Franke: Wichtiger als die reine Minutenzahl ist der Inhalt. Zwei Stunden kreatives Programmieren oder Recherchieren für die Schule sind viel wertvoller als stundenloses passives Scrollen auf Videoplattformen. Eltern sollten mit ihren Kindern feste Regeln vereinbaren und medienfreie Zeiten etablieren.",
        [
            {
                "id": "b1_s4_h1",
                "question": "1. Dr. Franke meint, dass der Inhalt der Mediennutzung wichtiger ist als die Dauer.",
                "options": ["Richtig", "Falsch"],
                "correctAnswer": "Richtig",
                "explanation": tr("Dr. Franke confirms content quality matters more than mere minutes.", "کارشناس معتقد است کیفیت و محتوای استفاده مهم‌تر از زمان صرف‌شده است.")
            }
        ],
        "Schreiben: Persönliche E-Mail über einen Online-Kurs",
        "Persönliche E-Mail an einen Freund",
        "Sie haben vor kurzem einen Online-Deutschkurs begonnen und möchten Ihrem Freund Paul davon berichten.",
        "Schreiben Sie eine E-Mail an Paul.",
        ["Warum Sie sich für den Online-Kurs entschieden haben", "Wie der Unterricht digital organisiert ist", "Was Ihnen besonders gefällt", "Vorschlag für ein gemeinsames Treffen am Wochenende"],
        "ca. 80 Wörter",
        "Lieber Paul,\n\nwie geht es dir? Ich hoffe, alles ist bestens bei dir!\n\nIch wollte dir unbedingt erzählen, dass ich seit zwei Wochen einen Online-Deutschkurs besuche. Da ich tagsüber arbeite, ist dieser Kurs ideal für mich, weil ich flexibel von zu Hause aus lernen kann.\n\nWir treffen uns dreimal pro Woche im virtuellen Klassenzimmer mit unserer Lehrerin Frau Weber. Besonders toll finde ich die interaktiven Übungen und dass wir in Kleingruppen sprechen können. Mein Wortschatz hat sich schon spürbar verbessert!\n\nHast du am Samstag Zeit für einen Kaffee? Lass uns bald treffen!\n\nHerzliche Grüße\nSayed",
        tr("Informal greeting/closing, friendly conversational tone, clear explanation of benefits.", "احوال‌پرسی دوستانه، ساختار صمیمی و توضیح روان مزایای دوره آنلاین.")
    ),
    make_exam(
        "exam_goethe_b1_set5",
        "Goethe-Zertifikat B1 - Modellsatz 5 (Gesundheit, Ernährung & Sport)",
        "Goethe-Zertifikat", "B1.2", 165, "60% (60 / 100 Punkte)",
        "Lesen: Gesunde Ernährung und Stressbewältigung am Arbeitsplatz",
        "Gesundheits-Ratgeber Deutschland",
        "Lange Arbeitszeiten vor dem Bildschirm und ungesunde Snacks führen bei vielen Beschäftigten zu Müdigkeit und Rückenschmerzen. Mediziner empfehlen eine vollwertige Ernährung mit viel frischem Gemüse, Vollkornprodukten und ausreichend Wasser. Darüber hinaus helfen kurze Bewegungspausen von 5 bis 10 Minuten jede Stunde, um die Konzentration aufrechtzuerhalten und Verspannungen vorzubeugen. Immer mehr Unternehmen bieten ihren Mitarbeitern daher ergonomische Büromöbel und Fitnessprogramme an.",
        [
            {
                "id": "b1_s5_l1",
                "question": "1. Kurze Bewegungspausen helfen laut Medizinern gegen Verspannungen und Konzentrationsprobleme.",
                "options": ["Richtig", "Falsch"],
                "correctAnswer": "Richtig",
                "explanation": tr("Short exercise breaks help prevent tension and maintain concentration.", "وقفه‌های کوتاه حرکتی از گرفتگی عضلات و افت تمرکز پیشگیری می‌کنند.")
            },
            {
                "id": "b1_s5_l2",
                "question": "2. Was bieten fortschrittliche Unternehmen ihren Mitarbeitern an?",
                "options": ["a) Nur ungesunde Süßigkeiten", "b) Ergonomische Möbel und Fitnessprogramme", "c) Verbot jeglicher Pausen"],
                "correctAnswer": "b) Ergonomische Möbel und Fitnessprogramme",
                "explanation": tr("Modern companies provide ergonomic furniture and fitness programs.", "شرکت‌های پیشرو مبلمان ارگونومیک و برنامه‌های تندرستی تدارک می‌بینند.")
            }
        ],
        "Hören: Anmeldung im Sportverein",
        "Ein Beratungsgespräch am Empfang eines städtischen Sportvereins.",
        "Mitarbeiterin: Guten Tag! Willkommen beim TSV München. Wie kann ich Ihnen helfen?\nInteressent: Guten Tag! Ich möchte mich gerne für einen Kurs anmelden. Ich interessiere mich besonders für Schwimmen und Rückentraining.\nMitarbeiterin: Sehr gerne! Wir bieten montags und mittwochs Kurse für Erwachsene an. Sie können gerne nächsten Dienstag zu einem kostenlosen Probetraining vorbeikommen.",
        [
            {
                "id": "b1_s5_h1",
                "question": "1. Der Interessent kann ein kostenloses Probetraining absolvieren.",
                "options": ["Richtig", "Falsch"],
                "correctAnswer": "Richtig",
                "explanation": tr("The staff offers a free trial training session on Tuesday.", "مسئول باشگاه یک جلسه تمرین آزمایشی رایگان در روز سه‌شنبه پیشنهاد می‌دهد.")
            }
        ],
        "Schreiben: Entschuldigung für die Abwesenheit beim Sportkurs",
        "Formelle / Halbformelle Mitteilung",
        "Sie können wegen einer Erkältung diese Woche nicht am Sportkurs teilnehmen.",
        "Schreiben Sie eine Nachricht an Ihren Trainer Herrn Schneider.",
        ["Grund für Ihr Fehlen", "Wie lange Sie voraussichtlich fehlen werden", "Frage nach Übungen für zu Hause", "Rückkehr zum nächsten Training"],
        "ca. 60 - 80 Wörter",
        "Sehr geehrter Herr Schneider,\n\nleider muss ich mich für diese Woche vom Rückentraining abmelden, da ich mich schwer erkältet habe und der Arzt mir Ruhe verordnet hat.\n\nIch hoffe, dass ich ab nächster Woche wieder fit bin und regulär teilnehmen kann. Könnten Sie mir vielleicht ein paar leichte Dehnübungen empfehlen, die ich zu Hause machen kann, sobald das Fieber nachlässt?\n\nVielen Dank für Ihr Verständnis!\n\nMit freundlichen Grüßen\nSayed Bashir",
        tr("Polite formal register, concise explanation, proactive inquiry.", "لحن محترمانه، عذرخواهی شفاف و پیگیری تمرینات خانگی.")
    ),
    make_exam(
        "exam_telc_b1_set2",
        "telc Deutsch B1 - Übungstest 2 (Wohnen, Nachbarschaft & Behörden)",
        "telc", "B1.1", 150, "60% (180 / 300 Punkte)",
        "Lesen: Richtlinien zur Mülltrennung und Hausordnung",
        "Mitteilung der Hausverwaltung",
        "Liebe Mieterinnen und Mieter,\nzur Gewährleistung eines harmonischen Zusammenlebens möchten wir an die Einhaltung unserer Hausordnung erinnern. Bitte beachten Sie die gesetzlichen Ruhezeiten zwischen 22:00 Uhr abends und 07:00 Uhr morgens sowie ganztägig an Sonn- und Feiertagen. Flure und Treppenhäuser müssen als Fluchtwege stets frei von Fahrrädern, Kinderwagen und Schuhregalen gehalten werden. Wir danken Ihnen herzlich für Ihre Unterstützung!",
        [
            {
                "id": "b1_t2_l1",
                "question": "1. An Sonntagen gilt im Wohnhaus ganztägig Ruhezeit.",
                "options": ["Richtig", "Falsch"],
                "correctAnswer": "Richtig",
                "explanation": tr("The text confirms rest periods apply all day on Sundays and holidays.", "متن تایید می‌کند که یکشنبه‌ها و روزهای تعطیل در تمام طول روز زمان سکوت است.")
            },
            {
                "id": "b1_t2_l2",
                "question": "2. Warum dürfen keine Fahrräder im Treppenhaus abgestellt werden?",
                "options": ["a) Weil sie das Treppenhaus verschmutzen", "b) Weil Fluchtwege frei bleiben müssen", "c) Weil sie dort gestohlen werden könnten"],
                "correctAnswer": "b) Weil Fluchtwege frei bleiben müssen",
                "explanation": tr("Stairwells serve as emergency escape routes and must stay clear.", "راه‌پله‌ها مسیرهای خروج اضطراری هستند و باید خالی بمانند.")
            }
        ],
        "Hören: Anruf bei der Stadtverwaltung",
        "Telefonat zur Terminvereinbarung beim Bürgerbüro für eine Wohnsitzanmeldung.",
        "Sachbearbeiter: Bürgeramt München, guten Tag!\nAnrufer: Guten Tag! Ich bin neu nach München gezogen und möchte meinen Wohnsitz anmelden. Welche Unterlagen benötige ich?\nSachbearbeiter: Sie benötigen Ihren gültigen Personalausweis oder Reisepass sowie die Wohnungsgeberbestätigung Ihres Vermieters. Einen Termin können Sie direkt online buchen.",
        [
            {
                "id": "b1_t2_h1",
                "question": "1. Für die Anmeldung braucht der Anrufer die Bestätigung des Vermieters.",
                "options": ["Richtig", "Falsch"],
                "correctAnswer": "Richtig",
                "explanation": tr("Landlord confirmation (Wohnungsgeberbestätigung) is mandatory.", "تاییدیه مالک مسکن برای ثبت آدرس الزامی است.")
            }
        ],
        "Schreiben: Bitte an den Vermieter um Reparatur der Heizung",
        "Formeller Brief / Mängelanzeige",
        "In Ihrer Wohnung funktioniert seit zwei Tagen die Heizung nicht, und es ist sehr kalt.",
        "Schreiben Sie eine formelle Mängelanzeige an Ihren Vermieter.",
        ["Grund Ihres Schreibens", "Beschreibung des Mangels (Heizungsausfall)", "Fristsetzung zur Behebung des Problems", "Möglichkeit zur Kontaktaufnahme für Termin mit Handwerker"],
        "ca. 80 Wörter",
        "Sehr geehrte Hausverwaltung,\n\nich wende mich an Sie, da in meiner Wohnung (3. Obergeschoss links) seit zwei Tagen die Heizung im Wohnzimmer und im Schlafzimmer komplett ausgefallen ist. Da die Temperaturen im Moment sehr niedrig sind, ist die Wohnung kaum noch bewohnbar.\n\nIch bitte Sie daher dringend, den Schaden bis zum Ende dieser Woche durch einen Fachbetrieb beheben zu lassen. Sie erreichen mich jederzeit unter meiner Handynummer 0176-1234567 zur Abstimmung eines Handwerkertermins.\n\nVielen Dank im Voraus!\n\nMit freundlichen Grüßen\nSayed Bashir",
        tr("Appropriate urgency, structured problem description, setting a reasonable deadline.", "قید فوریت، توضیح دقیق مشکل سرمایش و تعیین مهلت منطقی برای تعمیر.")
    ),
    make_exam(
        "exam_telc_b1_set3",
        "telc Deutsch B1 - Übungstest 3 (Freizeit, Ehrenamt & Reisen)",
        "telc", "B1.2", 150, "60% (180 / 300 Punkte)",
        "Lesen: Ehrenamtliches Engagement in Deutschland",
        "Sozialmagazin Perspektiven",
        "Über 30 Millionen Menschen engagieren sich in Deutschland freiwillig in ihrer Freizeit – sei es bei der Freiwilligen Feuerwehr, im Naturschutz, im Sportverein oder bei Hilfsorganisationen für Geflüchtete. Das Ehrenamt stärkt den gesellschaftlichen Zusammenhalt und ermöglicht es Menschen unterschiedlichster Generationen und Kulturen, sich kennenzulernen. Viele Ehrenamtliche berichten, dass ihnen ihr Einsatz neue Lebensfreude schenkt und sie wertvolle Freundschaften geschlossen haben.",
        [
            {
                "id": "b1_t3_l1",
                "question": "1. Viele Millionen Menschen in Deutschland leisten ehrenamtliche Arbeit.",
                "options": ["Richtig", "Falsch"],
                "correctAnswer": "Richtig",
                "explanation": tr("Over 30 million people in Germany are volunteers.", "بیش از ۳۰ میلیون نفر در آلمان کار داوطلبانه انجام می‌دهند.")
            },
            {
                "id": "b1_t3_l2",
                "question": "2. Welcher Vorteil des Ehrenamts wird im Text besonders betont?",
                "options": ["a) Hohe Bezahlung", "b) Gesellschaftlicher Zusammenhalt und neue Kontakte", "c) Weniger Freizeit"],
                "correctAnswer": "b) Gesellschaftlicher Zusammenhalt und neue Kontakte",
                "explanation": tr("It strengthens social cohesion and helps form new friendships.", "همبستگی اجتماعی و ایجاد پیوندهای دوستی جدید تقویت می‌شود.")
            }
        ],
        "Hören: Reiseplanung und Gruppenreise",
        "Ein Gespräch in einem Reisebüro über eine Wanderreise im Bayerischen Wald.",
        "Beraterin: Guten Tag! Wie kann ich Ihnen bei Ihrer Urlaubsplanung behilflich sein?\nKunde: Guten Tag! Ich suche eine umweltfreundliche Reise in Deutschland, am liebsten eine Wanderwoche mit der Bahn.\nBeraterin: Da kann ich Ihnen den Bayerischen Wald wärmstens empfehlen. Mit dem Nationalpark-Ticket nutzen Sie alle Züge und Busse vor Ort kostenfrei.",
        [
            {
                "id": "b1_t3_h1",
                "question": "1. Der Kunde möchte mit dem Flugzeug in den Urlaub reisen.",
                "options": ["Richtig", "Falsch"],
                "correctAnswer": "Falsch",
                "explanation": tr("The customer explicitly requests an eco-friendly hiking trip by train.", "مشتری تاکید می‌کند که سفری طبیعت‌دوستانه با قطار مد نظر دارد نه هواپیما.")
            }
        ],
        "Schreiben: Dankes-E-Mail für eine gelungene Veranstaltung",
        "Halbformelle Dankes-E-Mail",
        "Sie haben am Wochenende an einem interkulturellen Sommerfest Ihres Vereins teilgenommen.",
        "Schreiben Sie eine E-Mail an das Organisationsteam.",
        ["Dank für die gelungene Organisation", "Was Ihnen besonders gut gefallen hat (Essen, Musik)", "Ihre Bereitschaft, beim nächsten Mal mitzuhelfen", "Vorschlag für eine neue Aktivität"],
        "ca. 80 Wörter",
        "Liebes Organisationsteam,\n\nich möchte mich von ganzem Herzen für das fantastische Sommerfest am vergangenen Samstag bedanken! Die Organisation war wirklich hervorragend.\n\nBesonders begeistert haben mich das vielseitige internationale Buffet und die afghanische sowie deutsche Live-Musik. Alle Teilnehmer hatten sichtlich großen Spaß und konnten neue Kontakte knüpfen.\n\nFür das nächste Fest im Herbst würde ich mich sehr freuen, aktiv mitzuhelfen – zum Beispiel bei der Vorbereitung oder am Kuchenstand. Vielleicht könnten wir auch einen kleinen Tanzworkshop einplanen?\n\nNochmals vielen Dank und herzliche Grüße\nSayed",
        tr("Warm constructive tone, specific details, proactive volunteer offer.", "لحن گرم و قدردان، ذکر جزئیات خاطره‌انگیز و پیشنهاد داوطلبانه برای برنامه بعدی.")
    ),
    make_exam(
        "exam_telc_b1_set4",
        "telc Deutsch B1 - Übungstest 4 (Ausbildung, Praktikum & Berufsleben)",
        "telc", "B1.2", 150, "60% (180 / 300 Punkte)",
        "Lesen: Das deutsche System der dualen Ausbildung",
        "Berufsbildungsreport",
        "Das duale Ausbildungssystem in Deutschland genießt weltweit hohes Ansehen. Auszubildende lernen die praktischen Fähigkeiten direkt in einem Betrieb und besuchen parallel an ein bis zwei Tagen pro Woche die Berufsschule. Dadurch erhalten sie vom ersten Tag an eine monatliche Ausbildungsvergütung und sammeln reale Berufserfahrung. Nach erfolgreichem Abschluss stehen die Chancen auf eine Festanstellung im Ausbildungsbetrieb in den allermeisten Branchen hervorragend.",
        [
            {
                "id": "b1_t4_l1",
                "question": "1. In der dualen Ausbildung erhalten die Lernenden vom ersten Tag an Geld.",
                "options": ["Richtig", "Falsch"],
                "correctAnswer": "Richtig",
                "explanation": tr("Apprentices receive a monthly allowance from day one.", "کارآموزان در آموزش دوگانه از روز اول حقوق ماهانه دریافت می‌کنند.")
            },
            {
                "id": "b1_t4_l2",
                "question": "2. Wo erwerben Auszubildende ihre theoretischen Kenntnisse?",
                "options": ["a) An der Berufsschule", "b) An einer Privatuniversität im Ausland", "c) Nur durch Online-Videos"],
                "correctAnswer": "a) An der Berufsschule",
                "explanation": tr("Theoretical knowledge is taught at the vocational school (Berufsschule).", "دانش نظری در مدرسه فنی و حرفه‌ای (Berufsschule) تدریس می‌شود.")
            }
        ],
        "Hören: Feedbackgespräch nach dem Praktikum",
        "Ein Betreuer spricht mit einem Praktikanten über seine Leistungen im Betrieb.",
        "Betreuer: Herr Bashir, Ihre vier Wochen Praktikum in unserer Werkstatt sind heute zu Ende. Ich möchte Ihnen ein großes Lob aussprechen: Sie waren pünktlich, sehr gewissenhaft und haben schnell neue Arbeitsabläufe gelernt.\nSayed: Vielen Dank, Herr Weber! Das Praktikum hat mir enorm viel Spaß gemacht und meinen Wunsch bestärkt, eine Ausbildung in diesem Beruf zu beginnen.",
        [
            {
                "id": "b1_t4_h1",
                "question": "1. Der Betreuer bewertet die Arbeitsleistung des Praktikanten sehr positiv.",
                "options": ["Richtig", "Falsch"],
                "correctAnswer": "Richtig",
                "explanation": tr("The supervisor praises punctuality, diligence, and quick learning.", "سرپرست کارگاه نظم، دقت و یادگیری سریع کارآموز را بسیار تحسین می‌کند.")
            }
        ],
        "Schreiben: Anfrage bezüglich eines Ausbildungsplatzes",
        "Formelle E-Mail / Anfrage",
        "Sie möchten sich über offene Ausbildungsplätze in einem Handwerksbetrieb erkundigen.",
        "Schreiben Sie eine E-Mail an den Betriebsinhaber Herrn Meister.",
        ["Grund Ihrer Anfrage", "Ihre Vorbildung und Interessen", "Frage nach Bewerbungsfristen und Voraussetzungen", "Bitte um ein kurzes Schnupperpraktikum"],
        "ca. 80 Wörter",
        "Sehr geehrter Herr Meister,\n\nich interessiere mich sehr für den Beruf des Elektronikers und möchte mich erkundigen, ob Sie für das kommende Ausbildungsjahr noch freie Ausbildungsplätze anbieten.\n\nIch habe großes technisches Interesse, besitze gute Mathematikkenntnisse und habe bereits erste praktische Erfahrungen gesammelt. Gerne würde ich wissen, welche Unterlagen Sie für die Bewerbung benötigen und bis wann diese eingereicht werden müssen.\n\nUm Ihren Betrieb und die Arbeitsabläufe kennenzulernen, würde ich mich zudem über die Möglichkeit eines einwöchigen Schnupperpraktikums sehr freuen.\n\nMit freundlichen Grüßen\nSayed Bashir",
        tr("Respectful inquiry, clear presentation of motivation, proactive trial request.", "پرسش مؤدبانه و دقیق، بیان انگیزه شخصی و تقاضای دوره آزمایشی کوتاه.")
    ),
    make_exam(
        "exam_oesd_b1",
        "ÖSD Zertifikat B1 - Modellsatz 1 (Leben in Österreich: Kultur & Alltag)",
        "ÖSD", "B1.2", 165, "60% (60 / 100 Punkte)",
        "Lesen: Wiener Kaffeehauskultur und Lebensart",
        "Kulturmagazin Österreich",
        "Das Wiener Kaffeehaus ist weltberühmt und gehört seit 2011 zum immateriellen Kulturerbe der UNESCO. Hier bestellt man nicht einfach nur 'Kaffee', sondern wählt zwischen Spezialitäten wie dem 'Melange', dem 'Einspänner' oder dem 'Verlängerten'. Zum Kaffee wird traditionell ein Glas frisches Leitungswasser serviert. Die Gäste schätzen vor allem die Gemütlichkeit: Man kann stundenlang bei einer einzigen Tasse Kaffee sitzen, Zeitung lesen, arbeiten oder mit Freunden plaudern, ohne zur schnellen Abreise gedrängt zu werden.",
        [
            {
                "id": "b1_oe_l1",
                "question": "1. Die Wiener Kaffeehauskultur ist Teil des UNESCO-Kulturerbes.",
                "options": ["Richtig", "Falsch"],
                "correctAnswer": "Richtig",
                "explanation": tr("The text confirms UNESCO intangible cultural heritage status since 2011.", "متن تصریح می‌کند که فرهنگ کافه‌نشینی وین از ۲۰۱۱ جزو میراث فرهنگی یونسکو است.")
            },
            {
                "id": "b1_oe_l2",
                "question": "2. Was schätzen die Gäste im Wiener Kaffeehaus besonders?",
                "options": ["a) Schnelles Essen im Stehen", "b) Die Gemütlichkeit und Zeit zum Lesen", "c) Dass laute Musik gespielt wird"],
                "correctAnswer": "b) Die Gemütlichkeit und Zeit zum Lesen",
                "explanation": tr("Guests appreciate the coziness and unhurried time to read or chat.", "میهمانان آرامش، آسایش و فرصت بدون عجله برای مطالعه و گفتگو را می‌پسندند.")
            }
        ],
        "Hören: Stadtführung in Salzburg",
        "Ein Fremdenführer erklärt einer Gruppe die Salzburger Altstadt.",
        "Fremdenführer: Grüß Gott, meine Damen und Herren! Wir befinden uns hier in der Getreidegasse, einer der ältesten und berühmtesten Straßen Salzburgs. In diesem gelben Gebäude hinter mir wurde 1756 Wolfgang Amadeus Mozart geboren. Heute beherbergt das Haus ein Museum, in dem Sie historische Musikinstrumente und Porträts der Familie Mozart besichtigen können.",
        [
            {
                "id": "b1_oe_h1",
                "question": "1. Wolfgang Amadeus Mozart wurde in der Salzburger Getreidegasse geboren.",
                "options": ["Richtig", "Falsch"],
                "correctAnswer": "Richtig",
                "explanation": tr("Mozart was born in 1756 in this street in Salzburg.", "موتسارت در سال ۱۷۵۶ در گترایده‌گاسه در شهر زالتسبورگ متولد شد.")
            }
        ],
        "Schreiben: Reisebericht und Empfehlung für einen Wien-Aufenthalt",
        "Persönlicher Bericht / E-Mail an Freunde",
        "Sie haben ein verlängertes Wochenende in Wien verbracht und möchten Freunden davon berichten.",
        "Schreiben Sie eine E-Mail an Ihre Freunde.",
        ["Was Sie in Wien besichtigt haben (z.B. Schloss Schönbrunn, Museen)", "Ihre Eindrücke von der Wiener Küche und den Kaffeehäusern", "Tipps für günstige Tickets mit der Wiener U-Bahn", "Einladung zur nächsten gemeinsamen Städtereise"],
        "ca. 80 - 100 Wörter",
        "Liebe Freunde,\n\nich bin gerade von meiner Wochenendreise aus Wien zurückgekehrt und bin absolut begeistert von dieser Stadt! Wir haben das beeindruckende Schloss Schönbrunn besucht und einen Spaziergang durch den Prater gemacht.\n\nBesonders gut gefallen hat mir die Wiener Gemütlichkeit: In einem traditionellen Kaffeehaus habe ich Sachertorte und eine Melange probiert – köstlich! Für den Nahverkehr kann ich euch das 48-Stunden-Ticket der Wiener Linien sehr empfehlen, damit kommt man schnell und günstig überall hin.\n\nNächstes Jahr müssen wir unbedingt alle zusammen fahren! Wann hättet ihr Zeit?\n\nLiebe Grüße\nSayed",
        tr("Vivid descriptions, Austrian cultural references, friendly invitations.", "توصیفات زنده و جذاب، اشارات فرهنگی اتریش و دعوت دوستانه برای سفر مشترک.")
    )
]

output_path = "src/data/standardizedExamsB1Extra.ts"
code = "import { StandardizedExam } from '../types';\n\n"
export_names = []
for ex in b1_exams:
    var_name = ex["id"].upper()
    export_names.append(var_name)
    code += f"export const {var_name}: StandardizedExam = " + json.dumps(ex, ensure_ascii=False, indent=2) + ";\n\n"

code += f"export const EXTRA_EXAMS_B1: StandardizedExam[] = [\n  " + ",\n  ".join(export_names) + "\n];\n"

with open(output_path, "w", encoding="utf-8") as f:
    f.write(code)

print(f"Generated {len(b1_exams)} B1 exams in {output_path}!")
