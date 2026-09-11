import json
from create_exam_sets import make_exam, tr

c1_exams = [
    make_exam(
        "exam_goethe_c1_set2",
        "Goethe-Zertifikat C1 - Modellsatz 2 (Wissenschaftsethik, Open Access & Forschungsintegrität)",
        "Goethe-Zertifikat", "C1.1", 210, "60% (60 / 100 Punkte)",
        "Lesen: Open Access und die Kommerzialisierung wissenschaftlicher Erkenntnisse",
        "Wissenschaftsrat & Forschungspolitische Analysen",
        "Die wissenschaftliche Publikationslandschaft befindet sich in einem tiefgreifenden Paradigmenwechsel. Jahrelang dominierten kommerzielle Großverlage den Markt, indem sie öffentlich finanzierte Forschungsergebnisse hinter horrenden Bezahlschranken ('Paywalls') versiegelten. Die internationale 'Open-Access'-Bewegung fordert demgegenüber den uneingeschränkten, kostenfreien Zugang zu allen wissenschaftlichen Erkenntnissen als globales Gemeingut. Während Befürworter eine beschleunigte interdisziplinäre Forschung und mehr Bildungsgerechtigkeit anführen, warnen Kritiker vor der Ausbreitung von sogenannten 'Predatory Journals', die gegen Publikationsgebühren mangelhafte Peer-Review-Verfahren praktizieren.",
        [
            {
                "id": "c1_s2_l1",
                "question": "1. Laut Befürwortern beschleunigt die Open-Access-Publikation den interdisziplinären Wissensaustausch weltweit.",
                "options": ["Richtig", "Falsch"],
                "correctAnswer": "Richtig",
                "explanation": tr("Open Access accelerates interdisciplinary research and boosts educational equity.", "دسترسی آزاد تبادل میان‌رشته‌ای را شتاب بخشیده و عدالت آموزشی را افزایش می‌دهد.")
            },
            {
                "id": "c1_s2_l2",
                "question": "2. Welches fundamentale Problem bringen 'Predatory Journals' mit sich?",
                "options": ["a) Zu strenge Zensur", "b) Ungenügende oder vorgetäuschte Begutachtungsverfahren gegen Bezahlung", "c) Dass niemand ihre Artikel herunterladen kann"],
                "correctAnswer": "b) Ungenügende oder vorgetäuschte Begutachtungsverfahren gegen Bezahlung",
                "explanation": tr("Predatory journals compromise quality by charging fees without genuine peer reviews.", "مجلات جعلی با اخذ هزینه‌های انتشار و بدون داوری علمی اصیل، کیفیت پژوهش را به چالش می‌کشند.")
            }
        ],
        "Hören: Ringvorlesung über gute wissenschaftliche Praxis",
        "Ausschnitt aus einer universitären Vorlesung zur Vermeidung wissenschaftlichen Fehlverhaltens.",
        "Dozent: Wissenschaftliche Integrität erschöpft sich nicht im Vermeiden plumper Plagiate. Sie verlangt absolute Transparenz bezüglich der Rohdaten, die Dokumentation methodischer Limitationen und den Verzicht auf statistisches 'Cherry-Picking'. Wer Daten selektiv interpretiert, um eine erwünschte Hypothese zu stützen, untergräbt das Fundament wissenschaftlicher Glaubwürdigkeit.",
        [
            {
                "id": "c1_s2_h1",
                "question": "1. Laut Dozent ist das selektive Auswählen passender Daten ('Cherry-Picking') wissenschaftlich legitim.",
                "options": ["Richtig", "Falsch"],
                "correctAnswer": "Falsch",
                "explanation": tr("He explicitly states selective data interpretation undermines scientific credibility.", "استاد صراحتاً گلچین کردن داده‌ها را تخریب‌کننده اعتبار علمی می‌داند.")
            }
        ],
        "Schreiben: Akademischer Essay über Forschungsfreiheit und Ethik",
        "Wissenschaftlicher Essay / Abhandlung",
        "Sie verfassen einen Beitrag für eine universitäre Schriftenreihe über die Grenzen der Forschungsfreiheit.",
        "Entwickeln Sie eine differenzierte Argumentation mit normativer Begründung.",
        ["Spannungsfeld zwischen verfassungsrechtlicher Forschungsfreiheit und ethischer Verantwortung", "Gefahr des 'Dual Use' (militärischer Missbrauch ziviler Forschung)", "Rolle institutioneller Ethikkommissionen", "Fazit und Handlungsempfehlungen"],
        "ca. 200 - 250 Wörter",
        "Die im Grundgesetz verankerte Freiheit der Wissenschaft bildet das unabdingbare Fundament für gesellschaftlichen Fortschritt und intellektuelle Innovation. Gleichwohl vollzieht sich wissenschaftliche Erkenntnisgewinnung keineswegs im ethischen Vakuum. Insbesondere in Bereichen wie der synthetischen Biologie, der autonomen Waffenforschung oder der künstlichen Superintelligenz birgt die zivile Forschung ein immenses 'Dual-Use'-Risiko, mithin das Potenzial für katastrophalen Missbrauch.\n\nForschungsfreiheit darf daher nicht mit moralischer Indifferenz verwechselt werden. Zwar ist staatliche Zensur strikt abzulehnen, doch bedarf es einer institutionalisierten Selbstkontrolle der Scientific Community. Unabhängige Ethikkommissionen müssen frühzeitig in Forschungsprojekte eingebunden werden, um Folgewirkungen abzuschätzen und transparente Risikoanalysen einzufordern. Eine Wissenschaft, die sich ihrer gesellschaftlichen Verantwortung entzieht, gefährdet letztlich ihre eigene gesellschaftliche Legitimation.",
        tr("Sophisticated C1 academic phrasing (Nominalstil, hypotaktische Satzgefüge, exakter Fachwortschatz).", "نثر فاخر آکادمیک C1 با ساختارهای اسمی پیچیده، تعلیق‌های دستوری دقیق و دایره واژگان غنی علمی.")
    ),
    make_exam(
        "exam_goethe_c1_set3",
        "Goethe-Zertifikat C1 - Modellsatz 3 (Bioethik, CRISPR-Cas & Gentechnik in der Medizin)",
        "Goethe-Zertifikat", "C1.1", 210, "60% (60 / 100 Punkte)",
        "Lesen: Geneditierung und die Zukunft therapeutischer Eingriffe",
        "Journal für Molekularbiologie und Medizinethik",
        "Die Entdeckung der Genschere CRISPR-Cas9 markiert einen historischen Meilenstein der Biomedizin. Punktgenaue Eingriffe in die DNA eröffnen bahnbrechende Therapieoptionen für bisher unheilbare Erbkrankheiten wie Mukoviszidose oder Sichelzellanämie. Während somatische Gentherapien, die auf Körperzellen beschränkt bleiben, breiten ethischen Konsens genießen, entzünden sich an Eingriffen in die menschliche Keimbahn heftige Kontroversen. Da Keimbahneingriffe an nachfolgende Generationen vererbt werden und irreversible biologische Veränderungen implizieren, warnen Ethiker vor einer unkontrollierbaren Büchse der Pandora, die der Vision von 'Designer-Babys' und genetischer Diskriminierung Vorschub leisten könnte.",
        [
            {
                "id": "c1_s3_l1",
                "question": "1. Keimbahneingriffe unterscheiden sich von somatischen Therapien dadurch, dass sie an zukünftige Generationen vererbt werden.",
                "options": ["Richtig", "Falsch"],
                "correctAnswer": "Richtig",
                "explanation": tr("Germline modifications are hereditary to future generations.", "دستکاری‌های ژنی سلول‌های جنسی به نسل‌های بعدی به ارث می‌رسند.")
            },
            {
                "id": "c1_s3_l2",
                "question": "2. Warum fordern Bioethiker ein weltweites Moratorium für Keimbahneingriffe?",
                "options": ["a) Weil CRISPR-Cas zu teuer ist", "b) Wegen irreversibler Risiken und der Gefahr von 'Designer-Babys'", "c) Weil Gene nicht repariert werden können"],
                "correctAnswer": "b) Wegen irreversibler Risiken und der Gefahr von 'Designer-Babys'",
                "explanation": tr("Ethicists warn of irreversible alterations and designer babies.", "زیست‌اخلاق‌دانان از خطرات برگشت‌ناپذیر و ایجاد نوزادان سفارشی ژنتیکی هشدار می‌دهند.")
            }
        ],
        "Hören: Ethikrat-Debatte über Genom-Editierung",
        "Ausschnitt aus einer Tagung des Deutschen Ethikrats.",
        "Ratsmitglied: Wir müssen differenzieren zwischen heilungsorientierter Gentherapie und kosmetischem oder kognitivem 'Enhancement'. Sobald wir die Grenze von der Linderung von Leiden zur Optimierung des Menschen überschreiten, geraten wir in tiefstes fahrwasser eines neuen genetischen Klassenwesens.",
        [
            {
                "id": "c1_s3_h1",
                "question": "1. Der Sprecher befürwortet die genetische Leistungssteigerung ('Enhancement') uneingeschränkt.",
                "options": ["Richtig", "Falsch"],
                "correctAnswer": "Falsch",
                "explanation": tr("He strictly warns against genetic enhancement creating class divides.", "او صریحاً نسبت به ارتقای ژنتیکی و ایجاد شکاف طبقاتی ژنتیکی هشدار می‌دهد.")
            }
        ],
        "Schreiben: Argumentative Abhandlung über Gentherapie",
        "Wissenschaftlicher Diskursbeitrag",
        "Verfassen Sie einen Aufsatz über die ethischen Dilemmata der modernen Biomedizin.",
        "Analysieren Sie Chancen, Risiken und regulatorische Notwendigkeiten.",
        ["Potenzial zur Heilung monogener Erbkrankheiten", "Gefahren eines unkontrollierten biologischen Human-Enhancement", "Internationale Regulierung vs. Bio-Tourismus", "Eigene philosophisch fundierte Position"],
        "ca. 200 Wörter",
        "Die Verheißungen der molekularen Gendiagnostik sind ebenso faszinierend wie ihre ethischen Implikationen beunruhigend. Die Aussicht, schwere genetische Defekte an der Wurzel zu heilen, stellt eine humanitäre Pflicht der modernen Medizin dar. Gleichwohl verschwimmt die Grenze zwischen rein kurativer Therapie und normativer Menschenoptimierung zusehends.\n\nSollte genetisches Enhancement marktfähig werden, droht eine Spaltung der Menschheit entlang ökonomischer Demarkationslinien: jene, die sich genetische Vorzüge leisten können, und jene, die biologisch benachteiligt bleiben. Eine solche Dystopie widerspricht dem Prinzip der unantastbaren Menschenwürde diametral. Es bedarf mithin eines völkerrechtlich verbindlichen Kodex, der Keimbahneingriffe bis auf Weiteres moratoriert und therapeutische Anwendungen strikten Kontrollen unterwirft.",
        tr("Philosophical depth, rigorous logic, mastery of advanced academic vocabulary.", "عمق فلسفی، استدلال صلب و تسلط کامل بر واژگان تخصصی زبان آلمانی آکادمیک C1.")
    ),
    make_exam(
        "exam_goethe_c1_set4",
        "Goethe-Zertifikat C1 - Modellsatz 4 (Sprachwandel, Anglizismen & Identität)",
        "Goethe-Zertifikat", "C1.2", 210, "60% (60 / 100 Punkte)",
        "Lesen: Sprachdynamik zwischen Bewahrung und globaler Vernetzung",
        "Linguistische Monatshefte",
        "Sprache ist kein statisches Monument, sondern ein dynamisches Abbild gesellschaftlicher Transformationen. Der massive Einfluss von Anglizismen in der deutschen Berufs- und Jugendsprache ruft bei Sprachpuristen regelmäßig Alarmstimmung hervor, die einen Zerfall der deutschen Sprache beklagen. Sprachwissenschaftler widersprechen diesem Niedergangsnarrativ jedoch entschieden: Historisch betrachtet hat das Deutsche stets Lehnwörter aus dem Lateinischen, Französischen und Englischen absorbiert und produktiv in das eigene morphologische System integriert. Sprachevolution ist kein Verfallsprozess, sondern ein Zeugnis pragmatischer Anpassungsfähigkeit an veränderte Lebenswelten.",
        [
            {
                "id": "c1_s4_l1",
                "question": "1. Sprachwissenschaftler bewerten die Übernahme von Fremdwörtern in der Regel als natürlichen Prozess der Sprachentwicklung.",
                "options": ["Richtig", "Falsch"],
                "correctAnswer": "Richtig",
                "explanation": tr("Linguists view linguistic evolution as a natural, pragmatic adaptation.", "زبان‌شناسان تحول زبانی را روندی طبیعی و منطبق بر نیازهای ارتباطی می‌دانند.")
            },
            {
                "id": "c1_s4_l2",
                "question": "2. Was befürchten Sprachpuristen laut Text?",
                "options": ["a) Zu viele Grammatikregeln", "b) Den Niedergang der deutschen Sprache durch Fremdeinflüsse", "c) Dass niemand mehr Englisch lernt"],
                "correctAnswer": "b) Den Niedergang der deutschen Sprache durch Fremdeinflüsse",
                "explanation": tr("Purists lament an alleged decline of the German language.", "سره‌گرایان زبانی نگران زوال زبان مادری بر اثر نفوذ واژگان بیگانه هستند.")
            }
        ],
        "Hören: Radiofeature über geschlechtergerechte Sprache",
        "Eine Linguistin und ein Publizist debattieren über das 'Gendern' im öffentlichen Sprachgebrauch.",
        "Publizist: Die Verwendung von Gendersternen und Binnen-I stört den Lesefluss und widerspricht den traditionellen Regeln der Rechtschreibung.\nLinguistin: Sprache formt jedoch unser Bewusstsein. Empirische Studien belegen eindeutig, dass das generische Maskulinum bei Rezipienten überwiegend männliche Assoziationen hervorruft. Eine inklusive Sprachform macht gesellschaftliche Diversität sichtbar.",
        [
            {
                "id": "c1_s4_h1",
                "question": "1. Die Linguistin stützt ihre Haltung auf empirische Studien zur kognitiven Wirkung von Sprache.",
                "options": ["Richtig", "Falsch"],
                "correctAnswer": "Richtig",
                "explanation": tr("She cites empirical studies showing generic masculine induces male mental imagery.", "زبان‌شناس بر پایه مطالعات تجربی یادآور می‌شود زبان در شکل‌گیری تصویر ذهنی نقش دارد.")
            }
        ],
        "Schreiben: Essay zur gesellschaftlichen Relevanz von Sprache",
        "Kritischer Aufsatz",
        "Thema: 'Spiegelt Sprache die Wirklichkeit nur wider oder erzeugt sie diese erst?'.",
        "Entwickeln Sie Ihre linguistisch-philosophische Argumentation.",
        ["Die Sapir-Whorf-Hypothese und sprachliche Relativität", "Einfluss von Fachsprachen und Medienrhetorik auf politische Meinungsbildung", "Sprachpolitische Reglementierung versus organische Entwicklung", "Schlussfolgerung"],
        "ca. 200 Wörter",
        "Die Reflexion über die Wechselwirkung zwischen Sprachstrukturen und Bewusstseinsbildung reicht von Wilhelm von Humboldt bis zur modernen Kognitionslinguistik. Sprache fungiert keineswegs als neutrales Übertragungsmedium von Sachverhalten, sondern rahmt ('framing') Wirklichkeit aktiv vor.\n\nIn der politischen Arena manifestiert sich diese performative Macht von Sprache mit schonungsloser Deutlichkeit: Begrifflichkeiten wie 'soziale Hängematte' oder 'Klimaterroristen' sind keine deskriptiven Etiketten, sondern ideologische Setzungen, die den öffentlichen Diskurs gezielt verzerren. Gleichwohl erweist sich der Versuch, Sprachwandel durch administrative Dekrete oder Verbote zu steuern, historisch stets als wirkungslos. Eine lebendige Sprache emanzipiert sich im kontinuierlichen Aushandlungsprozess ihrer Sprechergemeinschaft.",
        tr("Deep conceptual insights, rhetorical elegance, academic C1 mastery.", "بینش عمیق مفهومی، ظرافت بلاغی و تسلط به ساختارهای اصیل دانشگاهی C1.")
    ),
    make_exam(
        "exam_goethe_c1_set5",
        "Goethe-Zertifikat C1 - Modellsatz 5 (Urbanisierung, Smart Cities & Segregation)",
        "Goethe-Zertifikat", "C1.2", 210, "60% (60 / 100 Punkte)",
        "Lesen: Die Stadt der Zukunft zwischen Hypervernetzung und Exklusion",
        "Zeitschrift für Stadtsoziologie und Stadtplanung",
        "Die weltweite Konzentration von Bevölkerung und Kapital in Megacities wirft fundamentale Fragen nach sozialer Gerechtigkeit auf. Unter dem Paradigma der 'Smart City' versprechen Stadtplaner durch sensorbasierte Verkehrssteuerung, automatisierte Energieeffizienz und digitale Bürgerdienste eine ökologische Utopie. Soziologen warnen jedoch vor den Kehrseiten dieser Entwicklung: Gentrifizierungsprozesse verdrängen einkommensschwache Schichten an die städtische Peripherie, während hochgesicherte, technologiegetriebene 'Gated Communities' für Privilegierte entstehen. Die Privatisierung des öffentlichen Raumes gefährdet das traditionelle europäische Ideal der integrativen Stadt.",
        [
            {
                "id": "c1_s5_l1",
                "question": "1. Soziologen befürchten, dass Smart-City-Konzepte soziale Spaltungen und Gentrifizierung verschärfen können.",
                "options": ["Richtig", "Falsch"],
                "correctAnswer": "Richtig",
                "explanation": tr("Sociologists warn of displacement of lower-income groups and emergence of gated communities.", "جامعه‌شناسان نسبت به رانده شدن قشر کم‌درآمد به حاشیه و تشدید شکاف طبقاتی هشدار می‌دهند.")
            },
            {
                "id": "c1_s5_l2",
                "question": "2. Was droht laut Text im Zuge der Smart-City-Transformation verloren zu gehen?",
                "options": ["a) Der Zugang zum Internet", "b) Das europäische Ideal der integrativen Stadt und öffentliche Räume", "c) Neue Wohnbauten"],
                "correctAnswer": "b) Das europäische Ideal der integrativen Stadt und öffentliche Räume",
                "explanation": tr("The traditional ideal of an integrative city and public space is endangered.", "آرمان سنتی شهر اروپایی به عنوان بستری همگرا و فراگیر در معرض خطر است.")
            }
        ],
        "Hören: Interview mit einer Stadtsoziologin über Wohnungsnot",
        "Diskussion über Mietpreisbremsen, kommunalen Wohnungsbau und Spekulation.",
        "Wissenschaftlerin: Wohnen ist ein existentielles Grundbedürfnis und darf nicht wie ein beliebiges Spekulationsobjekt behandelt werden. Wenn Pflegekräfte, Erzieher und Handwerker sich das Leben in den Metropolen nicht mehr leisten können, bricht die funktionale Infrastruktur der Stadt über kurz oder lang zusammen.",
        [
            {
                "id": "c1_s5_h1",
                "question": "1. Die Soziologin plädiert dafür, Wohnraum uneingeschränkt dem freien Spekulationsmarkt zu überlassen.",
                "options": ["Richtig", "Falsch"],
                "correctAnswer": "Falsch",
                "explanation": tr("She states housing is a basic need that must not be treated as mere speculative property.", "او مسکن را یک نیاز بنیادین می‌داند و مخالفت شدید با بورس‌بازی مسکن دارد.")
            }
        ],
        "Schreiben: Fachaufsatz zur zukunftsfähigen Stadtentwicklung",
        "Wissenschaftliche Abhandlung",
        "Verfassen Sie einen Text zum Thema 'Urbaner Raum als Spiegelbild sozialer Ungleichheit'.",
        "Skizzieren Sie Probleme und zukunftsfähige Lösungsstrategien.",
        ["Ursachen und Mechanismen räumlicher Segregation", "Bedeutung von sozialem Wohnungsbau und Mietpreisregulierungen", "Konzept der '15-Minuten-Stadt'", "Synthese"],
        "ca. 200 Wörter",
        "Die sozialräumliche Polarisierung in europäischen Metropolen hat in der vergangenen Dekade ein kritisches Maß erreicht. Explodierende Mieten und Bodenpreise führen zu einer drastischen Verdrängung sozioökonomisch schwächerer Milieus aus den zentrumsnahen Quartieren.\n\nDieser Segregation kann nur durch eine aktive, gemeinwohlorientierte Bodenpolitik begegnet werden. Städte müssen das kommunale Vorkaufsrecht konsequent nutzen und private Investoren verpflichten, substanzielle Quoten für bezahlbaren Wohnraum bereitzustellen. Gleichzeitig bietet das städtebauliche Leitbild der '15-Minuten-Stadt' – in der alle wesentlichen Infrastrukturen des täglichen Bedarfs fußläufig erreichbar sind – die Chance, dezentrale, durchmischte und lebenswerte Nachbarschaften zu etablieren. Eine demokratische Stadtgesellschaft muss Raum für alle Schichten garantieren.",
        tr("Exemplary socio-political analytical depth, robust argumentation, academic stylistic mastery.", "عمق تحلیلی جامعه‌شناختی برجسته، استدلال پیوسته و تسلط بر سبک نوشتار علمی C1.")
    ),
    make_exam(
        "exam_telc_c1_set2",
        "telc Deutsch C1 Hochschule - Übungstest 2 (Universitätsstudium & Wissenschaftsmethodik)",
        "telc", "C1.1", 200, "60% (128 / 214 Punkte)",
        "Lesen: Wissenschaftliche Methodologie und Validität empirischer Studien",
        "Zeitschrift für Hochschulforschung",
        "In den empirischen Sozial- und Naturwissenschaften bildet die Replizierbarkeit von Untersuchungsergebnissen das primäre Kriterium für wissenschaftliche Validität. In den vergangenen Jahren offenbarte die sogenannte 'Replikationskrise' jedoch alarmierende Schwachstellen: Zahlreiche publizierte Studien hielten einer unabhängigen Wiederholung unter identischen Versuchsbedingungen nicht stand. Als Hauptursachen identifizieren Wissenschaftstheoretiker das 'Publication Bias' – mithin die Tendenz von Fachjournalen, vorzugsweise spektakuläre, positive Resultate zu drucken – sowie methodische Mängel bei Stichprobengrößen und Signifikanztests.",
        [
            {
                "id": "c1_t2_l1",
                "question": "1. Als Replikationskrise bezeichnet man den Umstand, dass viele wissenschaftliche Studien bei Wiederholung nicht bestätigt werden konnten.",
                "options": ["Richtig", "Falsch"],
                "correctAnswer": "Richtig",
                "explanation": tr("The text defines the crisis as studies failing independent replication.", "متن بحران تکرارپذیری را عدم تایید نتایج بسیاری از پژوهش‌ها در آزمون مجدد معرفی می‌کند.")
            },
            {
                "id": "c1_t2_l2",
                "question": "2. Was versteht man unter 'Publication Bias'?",
                "options": ["a) Zu viele gedruckte Bücher", "b) Die Bevorzugung positiver und spektakulärer Ergebnisse durch Fachjournale", "c) Fehler beim Korrekturlesen"],
                "correctAnswer": "b) Die Bevorzugung positiver und spektakulärer Ergebnisse durch Fachjournale",
                "explanation": tr("Publication bias refers to journals favoring positive, striking findings.", "سوگیری انتشار به معنای تمایل نشریات به چاپ نتایج مثبت و چشمگیر است.")
            }
        ],
        "Hören: Kolloquium über quantitative und qualitative Forschungsmethoden",
        "Ein Professor für Methodenlehre diskutiert mit Masterstudierenden über Forschungsdesigns.",
        "Professor: Quantitative Methoden erlauben statistische Generalisierbarkeit, erfassen aber selten die tieferen subjektiven Sinnstrukturen menschlichen Handelns. Qualitative Verfahren hingegen bieten phänomenologische Tiefe, leiden jedoch oft unter mangelnder Repräsentativität. Ein 'Mixed-Methods'-Ansatz verbindet idealerweise die Stärken beider Paradigmen.",
        [
            {
                "id": "c1_t2_h1",
                "question": "1. Der Professor empfiehlt die Kombination quantitativer und qualitativer Verfahren.",
                "options": ["Richtig", "Falsch"],
                "correctAnswer": "Richtig",
                "explanation": tr("He advocates for a mixed-methods approach combining the strengths of both.", "استاد رویکرد ترکیبی (Mixed-Methods) را بهترین گزینه برای بهره‌مندی از مزایای هر دو روش می‌داند.")
            }
        ],
        "Schreiben: Wissenschaftliche Stellungnahme zur Reform der Doktorandenausbildung",
        "Wissenschaftliche Stellungnahme",
        "Sie verfassen eine Empfehlung für die Hochschulrektorenkonferenz zur Betreuung von Promovierenden.",
        "Formulieren Sie konkrete Qualitätsstandards.",
        ["Strukturierte Promotionsprogramme versus traditionelles Meister-Schüler-Modell", "Finanzielle Absicherung durch reguläre Forschungsstellen", "Verbindliche Betreuungsvereinbarungen", "Resümee"],
        "ca. 200 Wörter",
        "Die Qualifikation des wissenschaftlichen Nachwuchses entscheidet maßgeblich über die Zukunftsfähigkeit des Forschungsstandortes Deutschland. Das traditionelle Modell der individuellen Promotion gerät aufgrund diffuser Abhängigkeitsverhältnisse und mangelnder institutioneller Einbindung zunehmend in die Kritik.\n\nUm promotionswilligen Talenten verlässliche Rahmenbedingungen zu garantieren, ist der flächendeckende Übergang zu strukturierten Graduiertenkollegs unumgänglich. Diese müssen mit verbindlichen Betreuungsvereinbarungen, transparenten Meilensteinen und interdisziplinären Qualifikationsmodulen ausgestattet sein. Darüber hinaus ist die weitverbreitete Praxis prekärer Stipendien oder unbezahlter Lehraufträge durch regulär tariflich vergütete Forschungsstellen abzulösen. Nur wer dem wissenschaftlichen Nachwuchs existenzielle Sicherheit und intellektuelle Unabhängigkeit gewährt, kann im internationalen Wettbewerb um die klügsten Köpfe bestehen.",
        tr("Authoritative higher-education vocabulary, coherent structural argument, policy recommendations.", "واژگان تخصصی آموزش عالی آلمان، انسجام منطقی و ارائه پیشنهادات سیاستی مدون.")
    ),
    make_exam(
        "exam_telc_c1_set3",
        "telc Deutsch C1 Hochschule - Übungstest 3 (Neurobiologie & Kognition)",
        "telc", "C1.2", 200, "60% (128 / 214 Punkte)",
        "Lesen: Neuronale Plastizität und das lebenslange Lernvermögen des Gehirns",
        "Neuroscience and Mind Review",
        "Lange Zeit ging die biologische Lehrmeinung davon aus, dass das adulte menschliche Gehirn ein starres neuronales Netzwerk sei, dessen synaptische Verbindungen sich im Laufe des Älterwerdens unweigerlich abbauen. Die Entdeckung der neuronalen Plastizität widerlegte dieses Dogma grundlegend: Das Gehirn reorganisiert seine synaptischen Netzwerke lebenslang in Reaktion auf neue Reize, Lernerfahrungen und kognitives Training. Selbst im hohen Alter können durch gezielte geistige und körperliche Aktivität neue neuronale Pfade gebahnt werden, was neue Perspektiven für die Rehabilitation nach Schlaganfällen und die Prävention neurodegenerativer Erkrankungen eröffnet.",
        [
            {
                "id": "c1_t3_l1",
                "question": "1. Die Entdeckung der Neuroplastizität bewies, dass das Gehirn auch im Erwachsenenalter formbar bleibt.",
                "options": ["Richtig", "Falsch"],
                "correctAnswer": "Richtig",
                "explanation": tr("Neuroplasticity showed the adult brain remains malleable throughout life.", "کشف شکل‌پذیری عصبی ثابت کرد مغز در دوران بزرگسالی و کهنسالی نیز انعطاف‌پذیر باقی می‌ماند.")
            },
            {
                "id": "c1_t3_l2",
                "question": "2. Was war die frühere biologische Annahme über das Gehirn?",
                "options": ["a) Dass es gar keine Neuronen besitzt", "b) Dass es ein starres, im Alter irreversibel abbauendes System sei", "c) Dass Kinder langsamer lernen als Erwachsene"],
                "correctAnswer": "b) Dass es ein starres, im Alter irreversibel abbauendes System sei",
                "explanation": tr("Earlier doctrine assumed the adult brain was fixed and declining.", "دیدگاه پیشین مغز بزرگسالان را سامانه‌ای ثابت و دستخوش زوال ناگزیر تصور می‌کرد.")
            }
        ],
        "Hören: Vorlesung über das Zusammenspiel von Schlaf und Gedächtniskonsolidierung",
        "Ein Schlafforscher referiert über neuronale Prozesse während des Tiefschlafs.",
        "Forscher: Schlaf ist kein passiver Ruhezustand, sondern eine hochaktive Arbeitsphase unseres Nervensystems. Während der Tiefschlafphasen werden im Hippocampus zwischengespeicherte Gedächtnisinhalte in den Neocortex transferiert und dort dauerhaft im Langzeitgedächtnis verankert. Chronischer Schlafmangel sabotiert diesen Prozess fundamental.",
        [
            {
                "id": "c1_t3_h1",
                "question": "1. Laut Schlafforscher findet die Übertragung von Gedächtnisinhalten ins Langzeitgedächtnis vor allem im Tiefschlaf statt.",
                "options": ["Richtig", "Falsch"],
                "correctAnswer": "Richtig",
                "explanation": tr("Memory transfer into the neocortex takes place primarily during deep sleep.", "انتقال حافظه به قشر مخ برای تثبیت بلندمدت عمدتاً در مرحله خواب عمیق روی می‌دهد.")
            }
        ],
        "Schreiben: Akademischer Fachartikel über kognitive Leistungssteigerung",
        "Wissenschaftlicher Artikel",
        "Thema: 'Neuro-Enhancement durch Nootropika: Medizinischer Fortschritt oder riskante Selbstoptimierung?'.",
        "Wägen Sie physiologische, ethische und gesellschaftliche Aspekte ab.",
        ["Pharmakologische Wirkungsmechanismen von Nootropika", "Gefahren von Abhängigkeit und Langzeitfolgen", "Gerechtigkeitsaspekte im universitären und beruflichen Wettbewerb", "Fazit"],
        "ca. 200 Wörter",
        "Die Einnahme pharmakologischer Substanzen zur Steigerung kognitiver Leistungsfähigkeit – landläufig als 'Hirndoping' bezeichnet – hat an den Hochschulen und in leistungsorientierten Branchen bedenkliche Ausmaße angenommen. Was vordergründig als legitime Nutzung wissenschaftlicher Errungenschaften zur Konzentrationssteigerung deklariert wird, entpuppt sich bei näherer Betrachtung als hochriskante Praktik.\n\nNeben den unkalkulierbaren somatischen und psychischen Langzeitfolgen wirft der Griff zu Nootropika fundamentale Gerechtigkeitsfragen auf. Wenn Leistungssteigerung medikamentös erkauft wird, entsteht ein unerträglicher sozialer Anpassungsdruck, der Nicht-Konsumenten de facto diskriminiert. Eine Gesellschaft, die den Wert des Menschen ausschließlich über messbare Output-Kennziffern definiert und pharmazeutische Hilfsmittel toleriert, verliert ihre humanistische Orientierung.",
        tr("Masterful exposition, clear ethical synthesis, impeccable grammar and style.", "بیان جامع، تحلیل اخلاقی نافذ و نگارش منطبق بر عالی‌ترین استانداردهای نوشتاری C1.")
    ),
    make_exam(
        "exam_telc_c1_set4",
        "telc Deutsch C1 Hochschule - Übungstest 4 (Kritische Rohstoffe & Geopolitik)",
        "telc", "C1.2", 200, "60% (128 / 214 Punkte)",
        "Lesen: Seltene Erden und die geopolitische Verwundbarkeit industrieller Volkswirtschaften",
        "Institut für Außenpolitik und Rohstoffsicherheit",
        "Die globale Transformation zu Elektromobilität, Windkraft und digitaler Kommunikation hat die Nachfrage nach kritischen Rohstoffen wie Lithium, Kobalt und Seltenen Erden exponentiell in die Höhe getrieben. Da die Abbau- und Veredelungskapazitäten hochgradig monopolisiert sind – wobei einzelne Staaten bis zu 90 Prozent der globalen Weiterverarbeitung kontrollieren –, geraten rohstoffarme Industrienationen wie Deutschland in eine gefährliche asymmetrische Abhängigkeit. Um Versorgungsengpässe und politische Erpressbarkeit abzuwenden, fordern Experten eine Diversifizierung der Lieferketten, strategische Rohstoffpartnerschaften und eine radikale Beschleunigung des Recyclings im Sinne einer echten Kreislaufwirtschaft.",
        [
            {
                "id": "c1_t4_l1",
                "question": "1. Die Weiterverarbeitung Seltener Erden ist weltweit geografisch gleichmäßig und dezentral verteilt.",
                "options": ["Richtig", "Falsch"],
                "correctAnswer": "Falsch",
                "explanation": tr("Processing capacities are heavily monopolized in a few states.", "ظرفیت‌های فرآوری مواد خام در انحصار شدید چند کشور محدود قرار دارد نه توزیع متوازن.")
            },
            {
                "id": "c1_t4_l2",
                "question": "2. Welche Lösungsstrategie empfehlen Rohstoffexperten?",
                "options": ["a) Vollständiger Verzicht auf Elektromobilität", "b) Diversifizierung der Lieferketten und Forcierung des Recyclings", "c) Stilllegung aller Windparks"],
                "correctAnswer": "b) Diversifizierung der Lieferketten und Forcierung des Recyclings",
                "explanation": tr("Experts demand supply chain diversification and aggressive recycling.", "کارشناسان تنوع‌بخشی به زنجیره‌های تأمین و گسترش بازیافت را توصیه می‌کنند.")
            }
        ],
        "Hören: Radiointerview mit einem Rohstoffökonom",
        "Diskussion über Tiefseebergbau und ökologische Risiken.",
        "Ökonom: Der Abbau von Manganknollen in der Tiefsee könnte den globalen Bedarf an Nickel und Kobalt decken. Doch die marinen Ökosysteme der Tiefsee sind extrem empfindlich; ein industrieller Abbau würde Lebensräume unwiederbringlich zerstören, noch bevor wir sie überhaupt wissenschaftlich erforscht haben.",
        [
            {
                "id": "c1_t4_h1",
                "question": "1. Der Ökonom hält Tiefseebergbau für ökologisch völlig unbedenklich.",
                "options": ["Richtig", "Falsch"],
                "correctAnswer": "Falsch",
                "explanation": tr("He stresses that deep-sea mining would irreversibly destroy fragile ecosystems.", "او تاکید می‌کند استخراج در اعماق دریا اکوسیستم‌های حساس را برای همیشه نابود خواهد کرد.")
            }
        ],
        "Schreiben: Wirtschaftspolitisches Positionspapier zur Rohstoffsouveränität",
        "Wirtschaftspolitisches Memorandum",
        "Verfassen Sie ein Memorandum an das Bundeswirtschaftsministerium über strategische Rohstoffabsicherung.",
        "Formulieren Sie konkrete industriepolitische Empfehlungen.",
        ["Analyse der gegenwärtigen Importabhängigkeiten", "Potenziale von Urban Mining und Kreislaufwirtschaft", "Strategische Rohstoffabkommen mit Partnerländern", "Schlussfolgerung"],
        "ca. 200 Wörter",
        "Die Resilienz der europäischen Industrie steht und fällt mit der gesicherten Verfügbarkeit kritischer mineralischer Rohstoffe. Die gegenwärtige Abhängigkeit von monopolistischen Lieferstrukturen stellt ein unkalkulierbares geopolitisches Risiko dar, welches die Dekarbonisierung unserer Volkswirtschaft akut gefährdet.\n\nZur Wiedererlangung strategischer Souveränität bedarf es einer konzertierten Dreifachstrategie: Erstens muss die Kreislaufwirtschaft durch gesetzlich bindende Rezyklat-Quoten und standardisiertes Produktdesign ('Urban Mining') massiv ausgebaut werden. Zweitens sind internationale Rohstoffpartnerschaften mit dem globalen Süden auf Augenhöhe zu schließen, bei denen lokale Wertschöpfung und hohe Umweltstandards im Vordergrund stehen. Drittens müssen nationale strategische Reserven für Schlüsselmetalle angelegt werden, um kurzfristige Marktturbulenzen abzufedern.",
        tr("Geopolitical acumen, advanced formal policy German, impactful strategic recommendations.", "درک راهبردی ژئوپلیتیک، نثر اداری-سیاسی پیشرفته آلمانی و ارائه پیشنهادات مدون.")
    ),
    make_exam(
        "exam_testdaf_c1",
        "TestDaF C1 (Digitaler Modellsatz: Hochschulzugang & Forschung)",
        "TestDaF", "C1.2", 200, "TDN 4 - 5 (Niveau C1)",
        "Lesen: Autonome Mobilität und ethische Dilemmata im Straßenverkehr",
        "Zeitschrift für Technikphilosophie und Verkehrsrecht",
        "Vollautonome Fahrzeuge versprechen eine drastische Reduktion von Verkehrsunfällen, da über 90 Prozent aller Kollisionen auf menschliches Versagen zurückzuführen sind. Doch die Programmierung von Notfallalgorithmen konfrontiert Ingenieure und Rechtsphilosophen mit klassischen Trolley-Problemen: Wie soll ein autonomes System reagieren, wenn ein Unfall unvermeidlich ist und Leben gegen Leben abgewogen werden müsste? Der Gesetzgeber hat in wegweisenden Leitlinien klargestellt, dass menschliches Leben unantastbar ist und eine algorithmische Abwägung nach Alter, Geschlecht oder physischer Konstitution unzulässig bleibt.",
        [
            {
                "id": "c1_td_l1",
                "question": "1. Warum gelten autonome Fahrzeuge als potenziell sicherer?",
                "options": ["a) Weil sie langsamer fahren", "b) Weil die meisten Unfälle durch menschliche Fehler verursacht werden", "c) Weil sie aus Metall bestehen"],
                "correctAnswer": "b) Weil die meisten Unfälle durch menschliche Fehler verursacht werden",
                "explanation": tr("Over 90 percent of traffic collisions stem from human error.", "بیش از ۹۰ درصد تصادفات جاده‌ای ناشی از خطای انسانی هستند.")
            },
            {
                "id": "c1_td_l2",
                "question": "2. Dürfen Algorithmen laut Gesetzgeber Unfallopfer nach persönlichen Merkmalen selektieren?",
                "options": ["Richtig (sie dürfen)", "Falsch (es ist unzulässig)"],
                "correctAnswer": "Falsch (es ist unzulässig)",
                "explanation": tr("The guidelines prohibit algorithmic trade-offs based on age, gender, etc.", "دستورالعمل‌ها هرگونه ترجیح سرنشین یا عابر بر اساس سن، جنسیت یا توانایی را ممنوع اعلام کرده‌اند.")
            }
        ],
        "Hören: Hörsaal-Diskussion über künstliche neuronale Netze",
        "Ein Professor für Robotik diskutiert über maschinelle Lernverfahren.",
        "Professor: Autonome Fahrzeuge lernen durch Millionen gefahrener Simulationskilometer. Dennoch bleibt das Problem der sogenannten 'Edge Cases' – unvorhersehbare, extrem seltene Extremsituationen, für die das System keine Trainingsdaten besitzt. Hier muss ein sicherer Fallback-Mechanismus greifen.",
        [
            {
                "id": "c1_td_h1",
                "question": "1. Als 'Edge Cases' bezeichnet man seltene Ausnahmesituationen im Straßenverkehr.",
                "options": ["Richtig", "Falsch"],
                "correctAnswer": "Richtig",
                "explanation": tr("Edge cases are unpredictable, rare events not adequately covered in training data.", "موارد خاص یا بحرانی به موقعیت‌های بسیار نادری گفته می‌شود که سیستم داده آموزشی برای آن‌ها ندارد.")
            }
        ],
        "Schreiben: Argumentativer Text zur Mobilität an Campus-Universitäten",
        "Wissenschaftlicher Diskursbeitrag / TestDaF-Format",
        "Thema: 'Sollen Universitätsgelände komplett autofrei gestaltet und nur mit autonomen Shuttles befahren werden?'.",
        "Verfassen Sie einen stringenten akademischen Text.",
        ["Darstellung der Ausgangslage", "Argumente für und wider autonome Campus-Shuttles", "Ökologische und finanzielle Aspekte", "Eigene begründete Synthese"],
        "ca. 200 Wörter",
        "Die Gestaltung universitärer Lernräume gewinnt im Diskurs um nachhaltige Hochschulentwicklung zunehmend an Gewicht. Die Transformation historischer Campus-Areale zu emissionsfreien, autofreien Zonen unter Einsatz autonomer Elektromobilität birgt enormes Innovationspotenzial.\n\nEinerseits steigert die Verbannung des Individualverkehrs die Aufenthaltsqualität der Studierenden und Forscher gravierend: Lärm und Abgase weichen ruhigen Grünflächen, die informellen wissenschaftlichen Austausch begünstigen. Autonome Kleinbusse gewährleisten zugleich die barrierefreie Erreichbarkeit entlegener Institute. Andererseits erfordert die Implementierung hochgradig vernetzter Shuttlesysteme beträchtliche Anfangsinvestitionen in Sensortechnik und Ladeinfrastruktur.\n\nUnter Abwägung aller Aspekte erweist sich der Schritt zur autofreien Modelluniversität als richtungsweisend. Hochschulen fungieren traditionell als Reallabore gesellschaftlichen Wandels; wer, wenn nicht die universitäre Gemeinschaft, sollte den Mut aufbringen, zukunftsfähige Mobilität pionierhaft vorzuleben?",
        tr("Classic TestDaF argumentative structure, academic connectives, elegant synthesis.", "ساختار استاندارد استدلالی تست‌داف، رابط‌های آکادمیک و نتیجه‌گیری وزین دانشگاهی.")
    )
]

output_path = "src/data/standardizedExamsC1Extra.ts"
code = "import { StandardizedExam } from '../types';\n\n"
export_names = []
for ex in c1_exams:
    var_name = ex["id"].upper()
    export_names.append(var_name)
    code += f"export const {var_name}: StandardizedExam = " + json.dumps(ex, ensure_ascii=False, indent=2) + ";\n\n"

code += f"export const EXTRA_EXAMS_C1: StandardizedExam[] = [\n  " + ",\n  ".join(export_names) + "\n];\n"

with open(output_path, "w", encoding="utf-8") as f:
    f.write(code)

print(f"Generated {len(c1_exams)} C1 exams in {output_path}!")
