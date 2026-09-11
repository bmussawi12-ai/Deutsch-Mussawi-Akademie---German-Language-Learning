import json
from create_exam_sets import make_exam, tr

c2_exams = [
    make_exam(
        "exam_goethe_c2_set2",
        "Goethe-Zertifikat C2: GDS - Modellsatz 2 (Kritische Gesellschaftstheorie & Kommunikatives Handeln)",
        "Goethe-Zertifikat", "C2.1", 230, "60% (60 / 100 Punkte)",
        "Lesen: Jürgen Habermas und die Theorie des kommunikativen Handelns",
        "Archiv für Rechts- und Sozialphilosophie",
        "Jürgen Habermas' Monumentalwerk 'Theorie des kommunikativen Handelns' markiert einen Kulminationspunkt der Frankfurter Schule. Im Zentrum steht die fundamentale Dichotomie zwischen 'System' und 'Lebenswelt'. Während gesellschaftliche Teilsysteme wie Ökonomie und administrative Bürokratie über die Medien Geld und Macht strategisch gesteuert werden, gründet die Lebenswelt auf verständigungsorientierter, herrschaftsfreier Kommunikation. Die pathologische Krise der Moderne diagnostiziert Habermas in der 'Kolonisierung der Lebenswelt': Systemische Imperative der Kapitalakkumulation und bürokratischen Reglementierung dringen zerstörerisch in die Sphären der Familie, Bildung und demokratischen Öffentlichkeit ein und unterminieren die kommunikative Rationalität.",
        [
            {
                "id": "c2_s2_l1",
                "question": "1. Was versteht Habermas unter der 'Kolonisierung der Lebenswelt'?",
                "options": [
                    "a) Die Eroberung fremder Territorien durch europäische Mächte",
                    "b) Das Übergriffigwerden ökonomischer und bürokratischer Steuerungsmedien auf lebensweltliche Kommunikationssphären",
                    "c) Die Zunahme von Telefonaten und digitalen Medien"
                ],
                "correctAnswer": "b) Das Übergriffigwerden ökonomischer und bürokratischer Steuerungsmedien auf lebensweltliche Kommunikationssphären",
                "explanation": tr("Habermas defines it as the penetration of money and administrative power into lifeworld communicative domains.", "هابرماس مستعمره‌سازی زیست‌جهان را نفوذ ساختارهای قدرت اداری و پول به حوزه‌های ارتباطی می‌داند.")
            },
            {
                "id": "c2_s2_l2",
                "question": "2. Worauf gründet laut Habermas die Lebenswelt im Gegensatz zu systemischen Institutionen?",
                "options": ["a) Auf reinem Profitstreben", "b) Auf verständigungsorientierter Kommunikation", "c) Auf militärischem Zwang"],
                "correctAnswer": "b) Auf verständigungsorientierter Kommunikation",
                "explanation": tr("The lifeworld is grounded in communicative action oriented toward reaching mutual understanding.", "زیست‌جهان بر کنش ارتباطی معطوف به تفاهم متقابل استوار است.")
            }
        ],
        "Hören: Akademischer Vortrag über die Dialektik der Aufklärung",
        "Ein Philosophiehistoriker analysiert Thesen von Horkheimer und Adorno.",
        "Referent: Die fatale Einsicht Horkheimers und Adornos besteht darin, dass Aufklärung, die antrat, um die Menschheit aus mythologischer Knechtschaft zu befreien, in instrumentelle Vernunft umschlug. Wenn Rationalität ausschließlich auf Nützlichkeit und Naturbeherrschung reduziert wird, schlägt die Befreiung in eine neue, totalitäre Form der Naturverfallenheit um.",
        [
            {
                "id": "c2_s2_h1",
                "question": "1. Horkheimer und Adorno sahen in der Reduktion von Vernunft auf reine Zweckmäßigkeit eine Gefahr für die Emanzipation.",
                "options": ["Richtig", "Falsch"],
                "correctAnswer": "Richtig",
                "explanation": tr("Instrumental reason reducing thought to mere utility relapses into subjugation.", "تقلیل خرد به عقلانیت ابزاری و سودانگاری محض، آرمان رهایی‌بخش روشنگری را واژگون می‌سازد.")
            }
        ],
        "Schreiben: Philosophisch-soziologischer Essay",
        "Wissenschaftliche Abhandlung / C2-Niveau",
        "Thema: 'Der Strukturwandel der Öffentlichkeit im Zeitalter digitaler Echokammern'.",
        "Verfassen Sie einen hochdifferenzierten philosophischen Diskurs.",
        ["Konzept der bürgerlichen Öffentlichkeit nach Habermas", "Fragmentierung des Diskurses durch algorithmische Personalisierung", "Gefährdung deliberativer Demokratiemodelle", "Synthese und Ausblick"],
        "ca. 250 - 300 Wörter",
        "Das von Jürgen Habermas idealiter entworfene Modell einer bürgerlichen Öffentlichkeit basierte auf der normativen Prämisse, dass im diskursiven Ringen um das Gemeinwohl allein der 'zwanglose Zwang des besseren Arguments' triumphieren solle. Dieser universalistische Anspruch sieht sich im digitalen Zeitalter einer fundamentalen epistemischen Erschütterung ausgesetzt.\n\nDie algorithmische Architektonik zeitgenössischer Plattformökonomien fragmentiert den vormals gemeinsamen Resonanzraum in hermetisch abgeriegelte Echokammern. An die Stelle diskursiver Deliberation tritt die affektive Verstärkung vorauseilender Bestätigung; Differenz wird nicht mehr dialogisch ausgehalten, sondern als existenzielle Bedrohung markiert. Kommerzielle Aufmerksamkeitsökonomien belohnen Empörung und Polarisierung, während die differenzierte, argumentative Nuance im informationellen Rauschen untergeht.\n\nFür eine deliberative Demokratie bedeutet dieser strukturelle Zerfall eine existenzielle Zerreißprobe. Ohne einen geteilten epistemischen Grundkonsens über verifizierbare Fakten erodiert die Möglichkeit rationaler Konsensfindung. Die Rekonstruktion einer gemeinwohlorientierten, regulierten digitalen Öffentlichkeit erweist sich daher als die herkulische kulturpolitische Aufgabe des 21. Jahrhunderts.",
        tr("Highest-level German intellectual prose (virtuoso syntax, philosophical conceptual precision).", "نثر فلسفی فاخر در بالاترین سطح زبان آلمانی با ساختارهای نحوی چشمگیر و دقت مفهومی ژرف.")
    ),
    make_exam(
        "exam_goethe_c2_set3",
        "Goethe-Zertifikat C2: GDS - Modellsatz 3 (Literaturhermeneutik: Thomas Mann & Moderne)",
        "Goethe-Zertifikat", "C2.1", 230, "60% (60 / 100 Punkte)",
        "Lesen: Hermeneutik der Ironie in Thomas Manns 'Der Zauberberg'",
        "Beiträge zur neueren deutschen Literaturgeschichte",
        "Thomas Manns Roman 'Der Zauberberg' (1924) fungiert als literarisches Monument und Seismograph der geistigen Verwerfungen des frühen 20. Jahrhunderts. Das Schweizer Sanatorium Berghof über Davos wird zum allegorischen Mikrokosmos einer morbiden europäischen Bourgeoisie vor dem katastrophalen Ausbruch des Ersten Weltkriegs. Meisterhaft bedient sich Mann dabei der 'erotischen Ironie' und doppelbödigen Leitmotivtechnik: Hans Castorp, der schlichte Hamburger Patriziersohn, wird zwischen den unversöhnlichen Antipoden Settembrini (Humanismus, Aufklärung, Fortschrittsglaube) und Naphta (Jesuitismus, Mystik, totalitärer Terror) zum Spielball eines intellektuellen Seelentheaters. Manns epische Distanz verweigert jede eindeutige Parteinahme und demaskiert die Hinfälligkeit vorgefasster Dogmen.",
        [
            {
                "id": "c2_s3_l1",
                "question": "1. Das Sanatorium im Roman symbolisiert laut Interpretation einen Mikrokosmos der europäischen Vorkriegsgesellschaft.",
                "options": ["Richtig", "Falsch"],
                "correctAnswer": "Richtig",
                "explanation": tr("The Sanatorium serves as an allegorical microcosm of pre-WWI European bourgeoisie.", "آسایشگاه برگهوف تمثیلی از جامعه رو به زوال بورژوازی اروپایی پیش از جنگ اول جهانی است.")
            },
            {
                "id": "c2_s3_l2",
                "question": "2. Was verkörpert die Figur Settembrini im Roman?",
                "options": ["a) Radikalen Nihilismus", "b) Humanismus, Aufklärung und Fortschrittsglauben", "c) Militärische Diktatur"],
                "correctAnswer": "b) Humanismus, Aufklärung und Fortschrittsglauben",
                "explanation": tr("Settembrini embodies humanism, enlightenment, and faith in progress.", "شخصیت ستembrینی نماد اومانیسم، روشنگری و باور به پیشرفت عقلانی بشر است.")
            }
        ],
        "Hören: Literaturwissenschaftlicher Radio-Essay über Kafkas 'Das Schloss'",
        "Ein Germanist analysiert die bürokratische Unerreichbarkeit der Macht bei Franz Kafka.",
        "Literaturkritiker: In Kafkas Schloss-Roman manifestiert sich eine Theologie des abwesenden Gottes, gekoppelt mit einer albtraumhaften Hypertrophie bürokratischer Instanzen. Der Landvermesser K. kämpft nicht gegen physische Gewalt, sondern gegen eine amorphe, ungreifbare Verwaltung, deren Dekrete vollkommen intransparent bleiben.",
        [
            {
                "id": "c2_s3_h1",
                "question": "1. Der Protagonist K. kämpft vor allem gegen eine undurchschaubare administrative Macht.",
                "options": ["Richtig", "Falsch"],
                "correctAnswer": "Richtig",
                "explanation": tr("K. struggles against an amorphous, opaque bureaucratic administration.", "شخصیت کا در رمان کافکا در برابر دستگاه دیوان‌سالاری مبهم و غیرقابل نفوذ دست‌وپا می‌زند.")
            }
        ],
        "Schreiben: Literaturkritische Rezension",
        "Essayistische Literaturkritik",
        "Thema: 'Die Funktion der ästhetischen Distanz und Ironie in der literarischen Moderne'.",
        "Verfassen Sie eine literaturwissenschaftliche Abhandlung.",
        ["Kritik der naiven mimetischen Abbildung von Wirklichkeit", "Ironie als Erkenntnisinstrument bei Thomas Mann oder Robert Musil", "Das Verhältnis von Ästhetizismus und politischer Verantwortung", "Schlussbetrachtung"],
        "ca. 250 Wörter",
        "Die literarische Moderne des frühen zwanzigsten Jahrhunderts vollzieht einen radikalen Bruch mit dem naiven Realismus des neunzehnten Jahrhunderts. Wo die Welt in ihrer Ganzheit unrettbar zerbrochen ist, vermag das Kunstwerk nicht länger als bruchloser Spiegel der Wirklichkeit zu figurieren. Die Ironie wird in diesem Kontext vom stilistischen Ornament zum primären erkenntnistheoretischen Instrument erhoben.\n\nBei Autoren wie Thomas Mann und Robert Musil ermöglicht die erzählerische Distanznahme eine luzide Sezierung der geistigen Strömungen der Epoche, ohne ihnen weltanschaulich zu verfallen. Der 'Mann ohne Eigenschaften' oder der 'Zauberberg' entfalten ein polyphones Panorama des Zweifels, in dem jede monologische Gewissheit durch die Gegenstimme relativiert wird. Diese ästhetische Haltung ist keineswegs als zynische Weltflucht zu missverstehen; sie ist vielmehr die einzig redliche Form geistigen Widerstands gegen den totalitären Drang zur Vereinheitlichung.",
        tr("Polished literary-critical German prose, profound hermeneutic insight, sublime C2 register.", "نثر نقادانه ادبی بی‌نقص به زبان آلمانی، دید عمیق هرمنوتیک و لحن متعالی C2.")
    ),
    make_exam(
        "exam_goethe_c2_set4",
        "Goethe-Zertifikat C2: GDS - Modellsatz 4 (Erkenntnistheorie & Philosophie des Geistes)",
        "Goethe-Zertifikat", "C2.2", 230, "60% (60 / 100 Punkte)",
        "Lesen: Das 'Hard Problem' des Bewusstseins in der analytischen Philosophie",
        "Zeitschrift für philosophische Forschung",
        "Während die Neurobiologie beachtliche Fortschritte bei der Kartierung korrelierender Hirnaktivitäten vorweisen kann, harrt das grundlegende Rätsel des menschlichen Geistes seiner Auflösung: David Chalmers prägte für die fundamentale Kluft zwischen physikalischer Neuronenfeuerung und subjektivem Erleben den Begriff des 'Hard Problem of Consciousness'. Warum und wie geht die elektrochemische Signalübertragung im Kortex mit der qualitativen Empfindung von Röte, Schmerz oder Melancholie ('Qualia') einher? Der strenge physikalistische Reduktionismus gerät hier an seine Grenzen, da sich phänomenales Erleben prinzipiell nicht in eine rein funktionale Dritte-Person-Perspektive überführen lässt.",
        [
            {
                "id": "c2_s4_l1",
                "question": "1. Das 'Hard Problem' nach Chalmers befasst sich mit der Frage, wie subjektives phänomenales Erleben aus physischen Hirnprozessen entsteht.",
                "options": ["Richtig", "Falsch"],
                "correctAnswer": "Richtig",
                "explanation": tr("The hard problem asks why and how physical brain processes give rise to subjective conscious experience.", "مسئله دشوار آگاهی چگونگی پدید آمدن ادراک کیفی اول‌شخص از فرآیندهای فیزیکی مغز را به چالش می‌کشد.")
            },
            {
                "id": "c2_s4_l2",
                "question": "2. Was bezeichnen Philosophen mit dem Begriff 'Qualia'?",
                "options": ["a) Mathematische Formeln", "b) Die subjektiven, qualitativen Empfindungsqualitäten des Erlebens", "c) Messinstrumente im Labor"],
                "correctAnswer": "b) Die subjektiven, qualitativen Empfindungsqualitäten des Erlebens",
                "explanation": tr("Qualia refers to the subjective, phenomenal qualities of conscious experience.", "کیفیات ذهنی (Qualia) به احساسات کیفی و درونی آگاهی اشاره دارد.")
            }
        ],
        "Hören: Kolloquium über Willensfreiheit und Determinismus",
        "Ein Kognitionsphilosoph und ein Neurophysiologe debattieren über die Tragweite der Libet-Experimente.",
        "Philosoph: Dass neuronale Bereitschaftspotenziale Millisekunden vor dem bewussten Handlungsentschluss gemessen werden können, widerlegt den freien Willen keineswegs. Menschliche Freiheit konstituiert sich in der rationalen Reflexion von Handlungsgründen über lange Zeiträume hinweg und lässt sich nicht auf spontane Fingerbewegungen im Laboratorium verkürzen.",
        [
            {
                "id": "c2_s4_h1",
                "question": "1. Der Philosoph argumentiert, dass echte Willensfreiheit auf rationaler Abwägung von Gründen beruht.",
                "options": ["Richtig", "Falsch"],
                "correctAnswer": "Richtig",
                "explanation": tr("He argues true free will involves rational deliberation of reasons over extended horizons.", "فیلسوف آزادی اراده را وابسته به سنجش عقلانی دلایل در افق زمانی می‌داند نه تکانه‌های آنی آزمایشگاهی.")
            }
        ],
        "Schreiben: Epistemologischer Essay",
        "Philosophischer Fachbeitrag",
        "Thema: 'Können Maschinen jemals ein authentisches Bewusstsein entwickeln?'.",
        "Erläutern Sie funktionale vs. phänomenale Perspektiven.",
        ["Funktionalismus und das 'Chinesische Zimmer' von John Searle", "Die Bedeutung biologischer Verkörperung ('Embodiment')", "Ethische Konsequenzen einer etwaigen Maschinen-Sentienz", "Konklusion"],
        "ca. 250 Wörter",
        "Die Debatte über künstliches Bewusstsein krankt häufig an einer unzureichenden Differenzierung zwischen computationaler Leistungsfähigkeit und phänomenaler Sentienz. Selbst wenn generative Sprachmodelle oder neuronale Netzwerke im Turing-Test ununterscheidbar von menschlichen Sprechern agieren, replizieren sie lediglich funktionale Syntax.\n\nWie John Searle mit seinem Gedankenexperiment des 'Chinesischen Zimmers' bestechend demonstrierte, konstituiert formale Symbolmanipulation per se noch keine Semantik, geschweige denn subjektives Verstehen. Bewusstsein ist kein rein mathematischer Algorithmus, der auf beliebiger Hardware implementiert werden kann; es ist phylogenetisch tief in der biologischen Verkörperung, der homöostatischen Selbstregulierung und der Affektivität lebendiger Organismen verwurzelt. Solange Maschinen über keine genuine Leiblichkeit und existenzielle Verwundbarkeit verfügen, bleibt ihnen das Tor zur bewussten Innerlichkeit verschlossen.",
        tr("Deep philosophical rigor, analytical precision, flawless C2 academic German.", "استحکام فلسفی ژرف، دقت تحلیلی و نگارش بی‌نقص به زبان آلمانی آکادمیک C2.")
    ),
    make_exam(
        "exam_goethe_c2_set5",
        "Goethe-Zertifikat C2: GDS - Modellsatz 5 (Völkerrecht, Diplomatie & Geopolitik)",
        "Goethe-Zertifikat", "C2.2", 230, "60% (60 / 100 Punkte)",
        "Lesen: Die Krise der regelbasierten internationalen Ordnung",
        "Zeitschrift für Völkerrecht und Internationale Politik",
        "Das nach 1945 etablierte Völkerrechtssystem der Vereinten Nationen, basierend auf der souveränen Gleichheit aller Staaten und dem strikten Gewaltverbot der UN-Charta, sieht sich einer beispiellosen Erosion ausgesetzt. Die Rückkehr imperialer Machtansprüche, revisionistische Grenzverschiebungen und das lahmgelegte Vetorecht im Sicherheitsrat offenbaren die institutionellen Grenzen eines kollektiven Sicherheitssystems. Zugleich erfordert die Bewältigung globaler Gemeinschaftsaufgaben – von der Klimakrise bis zur Pandemieprävention – eine Vertiefung multilateraler Kooperation. Das Völkerrecht steht vor der Herausforderung, sich von einer eurozentrisch geprägten Ordnung zu einer wahrhaft polyzentrischen Architektur zu wandeln.",
        [
            {
                "id": "c2_s5_l1",
                "question": "1. Das universelle Gewaltverbot in der Charta der Vereinten Nationen gilt laut Text als unumstritten und voll funktionsfähig.",
                "options": ["Richtig", "Falsch"],
                "correctAnswer": "Falsch",
                "explanation": tr("The text laments an unprecedented erosion of the international legal order.", "متن از فرسایش و تضعیف بی‌سابقه اصل منع توسل به زور در حقوق بین‌الملل معاصر سخن می‌گوید.")
            },
            {
                "id": "c2_s5_l2",
                "question": "2. Welche Reform wird für eine zukunftsfähige Völkerrechtsarchitektur angemahnt?",
                "options": ["a) Die vollständige Auflösung aller internationalen Gerichte", "b) Der Wandel von einer eurozentrischen zu einer polyzentrischen Struktur", "c) Die Abschaffung des Völkerrechts"],
                "correctAnswer": "b) Der Wandel von einer eurozentrischen zu einer polyzentrischen Struktur",
                "explanation": tr("It must evolve from a Eurocentric order to a truly polycentric architecture.", "نظام حقوق بین‌الملل باید از الگویی اروپامحور به معماری چندقطبی و همه‌شمول دگرگون شود.")
            }
        ],
        "Hören: Podiumsdiskussion über universelle Menschenrechte vs. Kulturrelativismus",
        "Ausschnitt aus einer völkerrechtlichen Fachtagung in Genf.",
        "Völkerrechtlerin: Menschenrechte sind weder westlicher Kulturimperialismus noch beliebige Verhandlungssache. Die Allgemeine Erklärung der Menschenrechte formuliert unveräußerliche Schutzrechte des Individuums gegen staatliche Willkür, die universell gelten, weil das menschliche Leiden an Unterdrückung universell ist.",
        [
            {
                "id": "c2_s5_h1",
                "question": "1. Die Referentin verteidigt den universalen Geltungsanspruch der Menschenrechte.",
                "options": ["Richtig", "Falsch"],
                "correctAnswer": "Richtig",
                "explanation": tr("She affirms the universal validity of human rights against state arbitrariness.", "او بر جهان‌شمولی بنیادین حقوق بشر در دفاع از کرامت انسان در برابر استبداد دولتی پای می‌فشارد.")
            }
        ],
        "Schreiben: Völkerrechtliches Memorandum zur Reform der Vereinten Nationen",
        "Politisches Memorandum / C2-Stellungnahme",
        "Thema: 'Die Reformbedürftigkeit des UN-Sicherheitsrates angesichts multipolarer Machtverschiebungen'.",
        "Formulieren Sie institutionelle Lösungsvorschläge.",
        ["Legitimationsdefizit der gegenwärtigen Zusammensetzung der ständigen Mitglieder", "Missbrauch des Vetorechts bei humanitären Krisen", "Repräsentanz des globalen Südens", "Vorschläge für institutionelle Reformen"],
        "ca. 250 Wörter",
        "Die gegenwärtige institutionelle Verfassung des Sicherheitsrates der Vereinten Nationen spiegelt die geopolitischen Machtkonstellationen des Jahres 1945 wider und entbehrt im 21. Jahrhundert jeglicher demokratischen Repräsentativität. Ganze Kontinente wie Afrika und Lateinamerika sind von einer ständigen Mitgliedschaft ausgeschlossen, während aufstrebende Mächte des globalen Südens an den Rand gedrängt werden.\n\nDieser Anachronismus führt zu einer fatalen Lähmung der internationalen Friedensarchitektur. Das Veto der ständigen Mitglieder, ursprünglich als Garant des Interessenausgleichs der Siegermächte konzipiert, wird regelmäßig zur völkerrechtswidrigen Blockade effektiver humanitärer Interventionen instrumentalisiert. Um seine schwindende Autorität wiederzugewinnen, ist eine tiefgreifende Reform des Gremiums unumgänglich: Neben der Ausweitung ständiger Sitze muss das Vetorecht in Fällen von Massengreueln und Genozid verbindlich suspendiert werden. Eine multilaterale Ordnung, die nicht reformfähig ist, riskiert ihre eigene Irrelevanz.",
        tr("Rigorous legal prose, diplomatic eloquence, compelling geopolitical reform plan.", "نثر حقوقی صلب، بلاغت دیپلماتیک و طرح مدون برای اصلاح ساختار امنیت جهانی.")
    ),
    make_exam(
        "exam_telc_c2_set2",
        "telc Deutsch C2 - Übungstest 2 (Rhetorik, Diskursanalyse & Medienethik)",
        "telc", "C2.1", 210, "60% (180 / 300 Punkte)",
        "Lesen: Diskursmacht und strategische Rhetorik in der Aufmerksamkeitsökonomie",
        "Zeitschrift für Medienwissenschaft und Rhetorik",
        "In der postindustriellen Informationsgesellschaft hat sich der Fokus von der Güterproduktion zur Generierung von Aufmerksamkeit verlagert. In diesem hypermedialen Umfeld fungieren rhetorische Strategien nicht mehr primär der rationalen Wahrheitsfindung, sondern der affektiven Mobilisierung. Mittels gezieltem 'Framing' werden Fakten in vorinterpretierte Deutungsmuster eingebettet, die emotionale Reaktionen triggern und kognitive Dissonanzen eliminieren. Medienethiker mahnen, dass die toxische Verschmelzung von ökonomischen Klick-Anreizen mit politischem Populismus die diskursiven Grundlagen demokratischer Deliberation nachhaltig beschädigt.",
        [
            {
                "id": "c2_t2_l1",
                "question": "1. Strategisches 'Framing' zielt laut Text primär darauf ab, Emotionen zu wecken und Reaktionen vorzupolen.",
                "options": ["Richtig", "Falsch"],
                "correctAnswer": "Richtig",
                "explanation": tr("Framing embeds facts into pre-interpreted schemas that trigger emotional responses.", "قاب‌بندی (Framing) حقایق را در الگوهای تفسیری پیش‌ساخته با هدف تحریک هیجان قرار می‌دهد.")
            },
            {
                "id": "c2_t2_l2",
                "question": "2. Welche Gefahr benennen Medienethiker bezüglich der Aufmerksamkeitsökonomie?",
                "options": ["a) Zu viele gedruckte Tageszeitungen", "b) Die Beschädigung rationaler demokratischer Debatten durch Emotionalisierung", "c) Dass niemand mehr Nachrichten liest"],
                "correctAnswer": "b) Die Beschädigung rationaler demokratischer Debatten durch Emotionalisierung",
                "explanation": tr("It undermines the discursive foundations of democratic deliberation.", "پایه‌های گفتگوی عقلانی در دموکراسی به واسطه هیجان‌زدگی تجاری آسیب می‌بینند.")
            }
        ],
        "Hören: Vortrag über manipulative Sprache und Desinformation",
        "Eine Linguistin analysiert sprachliche Mechanismen moderner Propaganda.",
        "Linguistin: Desinformation operiert selten mit plumpen Lügen; ihre subtilste Waffe ist die Halbwahrheit, die Dekontextualisierung und die gezielte rhetorische Inversion. Wenn Täter als Opfer und Aggressoren als Friedensbringer geframt werden, bricht die semantische Kohärenz einer Sprachgemeinschaft in sich zusammen.",
        [
            {
                "id": "c2_t2_h1",
                "question": "1. Subtile Desinformation arbeitet laut Linguistin oft mit Halbwahrheiten und Kontextentzug.",
                "options": ["Richtig", "Falsch"],
                "correctAnswer": "Richtig",
                "explanation": tr("It frequently operates via half-truths and decontextualization.", "دستکاری زبانی اغلب با نیمه‌حقیقت‌ها و جداسازی گزاره‌ها از بستر اصلی شکل می‌گیرد.")
            }
        ],
        "Schreiben: Diskursanalytischer Aufsatz",
        "Wissenschaftlicher Essay",
        "Thema: 'Die Erosion des Wahrheitsbegriffs im Zeitalter postfaktischer Politik'.",
        "Analysieren Sie sprachliche, ethische und politische Dimensionen.",
        ["Definition des 'Postfaktischen' im Anschluss an Harry Frankfurt", "Zersetzung öffentlicher Institutionen durch systematischen Relativismus", "Die ethische Verantwortung des investigativen Journalismus", "Resümee"],
        "ca. 250 Wörter",
        "Die Rede vom 'postfaktischen Zeitalter' bezeichnet keine bloße Häufung von Falschmeldungen, sondern einen qualitativen Paradigmenwechsel im Verhältnis von Sprache und Wirklichkeit. In Anlehnung an Harry Frankfurts berühmte Definition von 'Bullshit' zeichnet sich der postfaktische Diskurs durch eine vollständige Indifferenz gegenüber dem Wahrheitsgehalt aus: Nicht die Falsifikation von Thesen ist das Ziel, sondern die Zerstörung des Vertrauens in die Möglichkeit objektiver Erkenntnis an sich.\n\nDieser epistemische Nihilismus erodiert die Fundamente des demokratischen Rechtsstaates. Wenn Fakten zu verhandelbaren Glaubenssätzen degradiert werden, verliert die rationale Debatte ihre Verbindlichkeit. Dem investigativen Journalismus und der universitären Wissenschaft kommt in dieser Krise die heroische Pflicht zu, als unbestechliche Verifikationsinstanzen zu fungieren und der Versuchung bequemer Ausgewogenheit ('False Balance') unnachgiebig zu widerstehen.",
        tr("Superb rhetorical command, razor-sharp epistemological critique, advanced C2 register.", "تسلط درخشان بلاغی، نقد شناخت‌شناسانه موشکافانه و نگارش اصیل C2 آلمانی.")
    ),
    make_exam(
        "exam_telc_c2_set3",
        "telc Deutsch C2 - Übungstest 3 (Makroökonomie & Postwachstum)",
        "telc", "C2.2", 210, "60% (180 / 300 Punkte)",
        "Lesen: Das Paradigma des permanenten Wirtschaftswachstums und die planetaren Grenzen",
        "Ökologische Ökonomie und Gesellschaft",
        "Das moderne Wirtschaftssystem basiert auf der fundamentalen Prämisse eines unendlichen exponentiellen Wachstums des Bruttoinlandsprodukts (BIP). Angesichts des Überschreitens planetarer Belastungsgrenzen – vom Klimawandel bis zum dramatischen Verlust an Biodiversität – stellen Vertreter der Postwachstumsökonomie ('Degrowth') diese Prämisse radikal infrage. Das Versprechen einer absoluten 'Entkopplung' von Ressourcenverbrauch und Wirtschaftswachstum hat sich empirisch als trügerische Illusion erwiesen. Eine zukunftsfähige Wirtschaftsordnung muss mithin Wohlstand neu definieren: weg von rein quantitativen Zuwachsraten hin zu qualitativen Indikatoren wie Lebenszeit, sozialer Sicherheit und ökologischer Stabilität.",
        [
            {
                "id": "c2_t3_l1",
                "question": "1. Laut Vertretern der Postwachstumsökonomie ist eine vollständige Entkopplung von Ressourcenverbrauch und Wachstum empirisch nicht belegt.",
                "options": ["Richtig", "Falsch"],
                "correctAnswer": "Richtig",
                "explanation": tr("Empirical evidence shows absolute decoupling has largely proven an illusion.", "شواهد تجربی نشان می‌دهد تفکیک کامل رشد اقتصادی از مصرف منابع طبیعی سرابی بیش نبوده است.")
            },
            {
                "id": "c2_t3_l2",
                "question": "2. Was fordern Postwachstumstheoretiker bezüglich der Wohlstandsmessung?",
                "options": ["a) Maximierung des BIP um jeden Preis", "b) Die Hinwendung zu qualitativen Indikatoren wie Stabilität und Lebenszeit", "c) Die Abschaffung jeglicher Wirtschaft"],
                "correctAnswer": "b) Die Hinwendung zu qualitativen Indikatoren wie Stabilität und Lebenszeit",
                "explanation": tr("They demand redefining prosperity via qualitative metrics rather than mere GDP.", "آن‌ها بازتعریف شاخص‌های رفاه را با اتکا به کیفیت زیست و ثبات بوم‌شناختی مطالبه می‌کنند.")
            }
        ],
        "Hören: Fachkolloquium über moderne Geldtheorie (MMT)",
        "Ein Ökonom debattiert mit einem Vertreter der traditionellen Finanzwissenschaft.",
        "Ökonom: Ein Staat, der seine eigene Währung herausgibt, kann im buchhalterischen Sinne niemals insolvent werden, da er das Geld selbst schöpft. Die reale Grenze staatlicher Investitionen ist mithin nicht die Staatsschuld, sondern die Inflation und die real verfügbaren Ressourcen wie Arbeitskraft und Rohstoffe.",
        [
            {
                "id": "c2_t3_h1",
                "question": "1. Laut MMT-Vertreter liegt die Grenze staatlicher Ausgaben in den realen Ressourcen und der Inflation, nicht im Geldmangel.",
                "options": ["Richtig", "Falsch"],
                "correctAnswer": "Richtig",
                "explanation": tr("He posits available real resources and inflation constrain spending, not nominal solvency.", "او محدودیت واقعی سرمایه‌گذاری دولتی را منابع ملموس و تورم می‌داند نه کمبود اعتبار اسمی.")
            }
        ],
        "Schreiben: Wirtschaftspolitischer Fachaufsatz",
        "Wissenschaftliche Abhandlung",
        "Thema: 'Vom Wachstumszwang zur Kreislaufwirtschaft: Wege zu einer zukunftsfähigen Ökonomie'.",
        "Entwickeln Sie ein makroökonomisches Transformationsmodell.",
        ["Kritik traditioneller volkswirtschaftlicher Kennziffern (BIP)", "Ökonomische Instrumente wie CO2-Bepreisung und Ressourcensteuern", "Soziale Abfederung durch Arbeitszeitverkürzung und Grundeinkommen", "Fazit"],
        "ca. 250 Wörter",
        "Der Zwang zu kontinuierlichem ökonomischem Wachstum ist das systemische Strukturmerkmal moderner kapitalistischer Volkswirtschaften. Doch auf einem physikalisch endlichen Planeten ist permanentes materielles Wachstum ein logischer wie ökologischer Widersinn. Die Fixierung auf das Bruttoinlandsprodukt als alleinigem Gradmesser gesellschaftlicher Prosperität erweist sich als anachronistische Fehllenkung.\n\nEin zukunftsfähiger ökonomischer Paradigmenwechsel erfordert den entschlossenen Übergang zu einer echten Kreislaufwirtschaft ('Cradle-to-Cradle'), flankiert durch eine drastische Verlagerung der Steuerlast von menschlicher Arbeit auf fossilen Ressourcenverbrauch. Gleichzeitig muss die Transformation sozial abgefedert werden: Eine Arbeitszeitverkürzung bei gerechter Verteilung von Produktivitätsgewinnen kann Wohlstandsgewinne in Form von 'Zeitsouveränität' generieren, ohne die Biosphäre weiter zu überlasten. Ökologische Vernunft und soziale Gerechtigkeit sind zwei Seiten derselben Medaille.",
        tr("Flawless macro-economic argumentation, systemic vision, exquisite C2 styling.", "استدلال کلان اقتصادی بی‌نقص، دیدگاه سیستمی و نگارش ممتاز سطح C2 زبان آلمانی.")
    ),
    make_exam(
        "exam_telc_c2_set4",
        "telc Deutsch C2 - Übungstest 4 (Verfassungsrecht, Grundgesetz & Menschenwürde)",
        "telc", "C2.2", 210, "60% (180 / 300 Punkte)",
        "Lesen: Die Unantastbarkeit der Menschenwürde als verfassungsrechtliches Axiom",
        "Juristische Schulung und Verfassungsrechtliche Abhandlungen",
        "Artikel 1 Absatz 1 des Grundgesetzes für die Bundesrepublik Deutschland – 'Die Würde des Menschen ist unantastbar' – statuiert den unumstößlichen Kern der bundesdeutschen Verfassungsordnung. Die sogenannte 'Objektformel' des Bundesverfassungsgerichts besagt, dass die Menschenwürde dann verletzt ist, wenn der konkrete Mensch zum bloßen Objekt staatlichen Handelns degradiert oder einer Behandlung ausgesetzt wird, die seine Subjektqualität prinzipiell infrage stellt. Diese absolute Garantie entzieht sich im Gegensatz zu einfachen Grundrechten jeder verfassungsrechtlichen Abwägung: Selbst im Namen übergeordneter Sicherheitsinteressen darf ein unschuldiger Mensch niemals zum bloßen Mittel für die Rettung anderer instrumentalisiert werden.",
        [
            {
                "id": "c2_t4_l1",
                "question": "1. Nach der 'Objektformel' darf ein Mensch durch staatliche Maßnahmen niemals zum reinen Instrument degradiert werden.",
                "options": ["Richtig", "Falsch"],
                "correctAnswer": "Richtig",
                "explanation": tr("The object formula prohibits treating any human as a mere object or instrument.", "فرمول شیء‌انگاری تصریح دارد هیچ انسانی نباید بازیچه و وسیله محض اقدام دولتی قرار گیرد.")
            },
            {
                "id": "c2_t4_l2",
                "question": "2. Wie verhält sich die Garantie der Menschenwürde im Grundgesetz zu Güterabwägungen?",
                "options": ["a) Sie kann jederzeit durch ein einfaches Gesetz aufgehoben werden", "b) Sie ist absolut und entzieht sich prinzipiell jeder Abwägung", "c) Sie gilt nur für deutsche Staatsbürger"],
                "correctAnswer": "b) Sie ist absolut und entzieht sich prinzipiell jeder Abwägung",
                "explanation": tr("Human dignity is absolute and strictly exempt from balancing tests.", "کرامت انسانی مطلق است و هرگز نمی‌توان آن را فدای مصلحت‌سنجی‌های دیگر کرد.")
            }
        ],
        "Hören: Verfassungsrechtliche Vorlesung über das Luftsicherheitsgesetz",
        "Ein Staatsrechtler erläutert das historische Urteil des Bundesverfassungsgerichts von 2006.",
        "Dozent: Der Entwurf des Luftsicherheitsgesetzes sah vor, ein von Terroristen entführtes Passagierflugzeug abzuschießen, um den Absturz in ein vollbesetztes Fußballstadion zu verhindern. Das Bundesverfassungsgericht erklärte dies für verfassungswidrig: Der Staat darf unschuldige Passagiere an Bord nicht quantitativ gegen das Leben am Boden aufrechnen, ohne deren Menschenwürde fundamental zu verletzen.",
        [
            {
                "id": "c2_t4_h1",
                "question": "1. Das Bundesverfassungsgericht verbot den Abschuss entführter Passagiermaschinen aus Gründen der Menschenwürde.",
                "options": ["Richtig", "Falsch"],
                "correctAnswer": "Richtig",
                "explanation": tr("The court ruled shooting down hijacked planes violates passengers' human dignity.", "دادگاه قانون اساسی فدرال سرنگونی هواپیمای ربوده‌شده را به دلیل نقض کرامت مسافران بی‌گناه ابطال کرد.")
            }
        ],
        "Schreiben: Rechtsphilosophischer Essay über Menschenwürde und Sicherheit",
        "Rechtsphilosophische Abhandlung",
        "Thema: 'Freiheit versus Sicherheit: Wo liegen die unübersteigbaren Grenzen des Rechtsstaates?'.",
        "Verfassen Sie einen verfassungsrechtlich fundierten Text.",
        ["Spannungsverhältnis zwischen staatlicher Schutzpflicht und individuellen Freiheitsrechten", "Die Lehre von der wehrhaften Demokratie", "Gefahr des schleichenden Ausnahmezustands", "Konklusion"],
        "ca. 250 Wörter",
        "In Zeiten existenzieller Verunsicherung neigen Staaten historisch dazu, bürgerliche Freiheitsrechte zugunsten vermeintlicher Sicherheitsgarantien scheibchenweise zu opfern. Die verfassungsrechtliche Architektur der Bundesrepublik Deutschland zieht dieser Tendenz mit der Ewigkeitsgarantie des Grundgesetzes einen unüberwindbaren Riegel vor.\n\nEin Rechtsstaat, der seine normativen Grundwerte im Kampf gegen seine Feinde preisgibt, kapituliert vor ebenjenen Kräften, die er zu bekämpfen vorgibt. Der Grundsatz der Verhältnismäßigkeit und die Unantastbarkeit der Menschenwürde sind keine Luxusgüter für Schönwetterperioden, sondern das unerschütterliche Fundament, welches gerade in Krisenzeiten seine Bewährungsprobe bestehen muss. Die wehrhafte Demokratie verteidigt sich nicht durch die Imitation autoritärer Kontrollmethoden, sondern durch die unnachgiebige Bindung aller Staatsgewalt an Recht und Gerechtigkeit.",
        tr("Profound constitutional insight, sublime juristic German, compelling defense of the rule of law.", "بینش حقوقی عمیق، نثر حقوقی فاخر و دفاعی نیرومند از حاکمیت قانون و دموکراسی تاب‌آور.")
    ),
    make_exam(
        "exam_oesd_c2",
        "ÖSD Wirtschaftssprache Deutsch C2 - Modellsatz 1 (Internationale Handelsabkommen & M&A)",
        "ÖSD", "C2.2", 230, "60% (60 / 100 Punkte)",
        "Lesen: Transnationale Mergers & Acquisitions und kartellrechtliche Fusionskontrolle",
        "Österreichisches Journal für Wirtschaftsrecht und Außenhandel",
        "Im Zuge der globalen Konsolidierungswellen verlagern sich Unternehmensfusionen zunehmend in den transnationalen Raum. Bei Megafusionen ('Mergers & Acquisitions') kollidieren regelmäßig die Interessen von Unternehmensvorständen mit den wettbewerbspolitischen Mandaten nationaler und supranationaler Kartellbehörden. Die Europäische Kommission prüft nach der EU-Fusionskontrollverordnung rigoros, ob ein Zusammenschluss eine marktbeherrschende Stellung begründet oder verstärkt, die den wirksamen Wettbewerb im Binnenmarkt signifikant behindern würde. Zunehmend rücken dabei nicht nur rein preisbezogene Marktanteile, sondern auch die Kontrolle über strategische Datenbestände und Innovationspipelines in den Fokus der Regulierer.",
        [
            {
                "id": "c2_oe_l1",
                "question": "1. Kartellbehörden achten bei Fusionskontrollen heutzutage neben Marktanteilen auch auf Datenbestände und Innovationspotenziale.",
                "options": ["Richtig", "Falsch"],
                "correctAnswer": "Richtig",
                "explanation": tr("Modern regulators scrutinize data assets and innovation pipelines alongside market shares.", "مقامات ناظر بر رقابت امروزه داده‌های استراتژیک و مسیرهای نوآوری را نیز بررسی می‌کنند.")
            },
            {
                "id": "c2_oe_l2",
                "question": "2. Was soll durch die EU-Fusionskontrollverordnung verhindert werden?",
                "options": ["a) Der Markteintritt ausländischer Firmen", "b) Die Entstehung marktbeherrschender Stellungen und Beeinträchtigung des Wettbewerbs", "c) Dass Firmen Gewinn machen"],
                "correctAnswer": "b) Die Entstehung marktbeherrschender Stellungen und Beeinträchtigung des Wettbewerbs",
                "explanation": tr("The regulation aims to prevent dominant positions that undermine effective competition.", "مقررات اتحادیه اروپا از ایجاد انحصار بازاری و تضعیف رقابت سالم جلوگیری می‌کند.")
            }
        ],
        "Hören: Experteninterview über internationale Schiedsgerichtsbarkeit",
        "Ein Wiener Wirtschaftsanwalt spricht über Investor-State Dispute Settlement (ISDS).",
        "Rechtsanwalt: Investitionsschutzabkommen mit Schiedsgerichtsklauseln garantieren ausländischen Direktinvestoren Rechtssicherheit gegen willkürliche Enteignung. Doch wenn Konzerne vor Schiedsgerichten Milliardenentschädigungen einklagen können, weil Staaten legitime Umwelt- oder Gesundheitsschutzgesetze verabschieden, gerät die demokratische Souveränität unter immensen Druck.",
        [
            {
                "id": "c2_oe_h1",
                "question": "1. Der Anwalt sieht in Schiedsklagen bei staatlichen Umweltschutzgesetzen eine Gefahr für die demokratische Souveränität.",
                "options": ["Richtig", "Falsch"],
                "correctAnswer": "Richtig",
                "explanation": tr("He warns lawsuits against environmental laws strain democratic sovereignty.", "او دعاوی داوری بین‌المللی علیه قوانین زیست‌محیطی را چالشی برای حاکمیت ملی می‌داند.")
            }
        ],
        "Schreiben: Wirtschaftsrechtliches Gutachten",
        "Juristisches Fachgutachten / C2-Wirtschaftsdeutsch",
        "Thema: 'Die Auswirkungen des europäischen Lieferkettengesetzes auf österreichische Exporteure'.",
        "Verfassen Sie eine juristisch-ökonomische Analyse.",
        ["Anwendungsbereich und Sorgfaltspflichten für mittelständische Unternehmen", "Haftungsrisiken und zivilrechtliche Klagerechte", "Kosten-Nutzen-Analyse der Compliance-Mechanismen", "Strategische Handlungsempfehlungen"],
        "ca. 250 Wörter",
        "Die Verabschiedung der europäischen Corporate Sustainability Due Diligence Directive (CSDDD) markiert eine fundamentale Zäsur für exportorientierte Unternehmen in der Republik Österreich. Wenngleich die unmittelbaren Schwellenwerte zunächst primär Großunternehmen erfassen, diffundieren die Sorgfaltspflichten über den 'Kaskadeneffekt' vertraglicher Weitergabe unweigerlich in das gesamte Geflecht mittelständischer Zulieferstrukturen.\n\nFür exportierende Betriebe resultieren hieraus nicht unerhebliche Haftungsrisiken und ein gesteigerter administrativer Prüfaufwand entlang der gesamten Wertschöpfungskette. Eine rein defensive Risikovermeidung greift jedoch zu kurz. Österreichische Qualitätshersteller sollten vielmehr ihre traditionell hohen Sozial- und Umweltstandards proaktiv als strategischen Wettbewerbsvorteil positionieren. Die Etablierung transparenter, digitaler Traceability-Systeme ermöglicht es, den regulatorischen Anforderungen nicht bloß passiv zu genügen, sondern als bevorzugter Premiumpartner in globalen Lieferketten nachhaltig zu reüssieren.",
        tr("Mastery of Austrian legal and economic terminology, sophisticated corporate advice, impeccable C2.", "تسلط بر زبان حقوقی و اقتصادی اتریشی، مشاوره شرکتی راهبردی و نگارش بی‌نقص C2.")
    )
]

output_path = "src/data/standardizedExamsC2Extra.ts"
code = "import { StandardizedExam } from '../types';\n\n"
export_names = []
for ex in c2_exams:
    var_name = ex["id"].upper()
    export_names.append(var_name)
    code += f"export const {var_name}: StandardizedExam = " + json.dumps(ex, ensure_ascii=False, indent=2) + ";\n\n"

code += f"export const EXTRA_EXAMS_C2: StandardizedExam[] = [\n  " + ",\n  ".join(export_names) + "\n];\n"

with open(output_path, "w", encoding="utf-8") as f:
    f.write(code)

print(f"Generated {len(c2_exams)} C2 exams in {output_path}!")
