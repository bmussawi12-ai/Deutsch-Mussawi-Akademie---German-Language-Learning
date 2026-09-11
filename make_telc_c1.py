# -*- coding: utf-8 -*-

content = '''import { StandardizedExam } from '../types';

// =========================================================================
// TELC DEUTSCH C1 HOCHSCHULE (OFFIZIELLER STANDARD: 214 MINUTEN)
// Lesen & Sprachbausteine: 90 Min (48 Aufgaben) | Hören: 40 Min (24 Aufgaben) | Schreiben: 70 Min | Sprechen: 20 Min
// =========================================================================
export const EXAM_TELC_C1: StandardizedExam = {
  id: 'exam_telc_c1',
  title: 'telc Deutsch C1 Hochschule (Offizieller Standard)',
  standard: 'telc',
  level: 'C1.2',
  totalDurationMinutes: 214,
  passingScore: '60% (128 / 214 Punkte)',
  strategy: {
    level: 'C1.2',
    timeManagement: [
      {
        section: 'Leseverstehen & Sprachbausteine - 90 Minuten • 48 Aufgaben',
        allocatedMinutes: 90,
        tip: {
          en: '90 minutes for 48 tasks: Leseverstehen (Teile 1-3, 24 tasks) and Sprachbausteine (Teile 1-2, 24 tasks). Allocate 50 min for reading and 40 min for language elements.',
          fa: '۹۰ دقیقه برای ۴۸ سوال: درک مطلب (بخش‌های ۱ تا ۳، ۲۴ سوال) و اجزای زبانی (بخش‌های ۱ و ۲، ۲۴ سوال). ۵۰ دقیقه برای خواندن و ۴۰ دقیقه برای اجزای زبان اختصاص دهید.',
          prs: '۹۰ دقیقه برای ۴۸ سوال خواندن و دستور زبان پیشرفته.',
          tr: '90 dakikada 48 soru: 50 dakika okuma (24 soru), 40 dakika dil bilgisi ve sözcük (24 soru).',
          ar: '90 دقيقة لـ 48 سؤالاً: 50 دقيقة للقراءة (24 سؤالاً) و40 دقيقة للتراكيب اللغوية وقواعد C1 (24 سؤالاً).',
          es: '90 minutos para 48 tareas: 50 min para comprensión lectora y 40 min para elementos lingüísticos.'
        }
      },
      {
        section: 'Hörverstehen - 40 Minuten • 24 Aufgaben',
        allocatedMinutes: 40,
        tip: {
          en: '40 minutes for 24 tasks: Teil 1 (Lecture, 8 tasks), Teil 2 (Scientific discussion, 10 tasks), Teil 3 (Academic short presentations, 6 tasks).',
          fa: '۴۰ دقیقه برای ۲۴ سوال: بخش ۱ (سخنرانی دانشگاهی، ۸ سوال)، بخش ۲ (میزگرد علمی، ۱۰ سوال)، بخش ۳ (سخنرانی‌های کوتاه تحلیلی، ۶ سوال).',
          prs: '۴۰ دقیقه برای ۲۴ سوال شنیداری تخصصی.',
          tr: '40 dakikada 24 soru: Akademik ders, bilimsel panel ve kısa sunumlar.',
          ar: '40 دقيقة للاستماع لـ 24 سؤالاً أكاديمياً متخصصاً.',
          es: '40 minutos para 24 tareas de audición académica.'
        }
      },
      {
        section: 'Schriftlicher Ausdruck - 70 Minuten • Textproduktion',
        allocatedMinutes: 70,
        tip: {
          en: '70 minutes for an in-depth academic essay (approx. 350 words) evaluating opposing viewpoints, data trends, and methodological approaches.',
          fa: '۷۰ دقیقه برای نگارش یک مقاله دانشگاهی جامع (حدود ۳۵۰ کلمه) با ارزیابی دیدگاه‌های متضاد و روندهای روش‌شناختی.',
          prs: '۷۰ دقیقه برای نوشتن متن دانشگاهی ۳۵۰ کلمه‌ای.',
          tr: '70 dakikada yaklaşık 350 kelimelik akademik tez ve sentez metni.',
          ar: '70 دقيقة لكتابة مقال أكاديمي متعمق (حوالي 350 كلمة) يقارن بين الفرضيات ويفند الحجج.',
          es: '70 minutos para redactar un ensayo académico riguroso de aprox. 350 palabras.'
        }
      },
      {
        section: 'Mündliche Prüfung - 20 Minuten • Paarprüfung',
        allocatedMinutes: 20,
        tip: {
          en: '20 minutes (16 min exam + 20 min preparation): Teil 1A (Academic presentation, 3 min each), Teil 1B (Clarification questions), Teil 2 (Scientific discussion).',
          fa: '۲۰ دقیقه آزمون حضوری دونفره (با ۲۰ دقیقه زمان آماده‌سازی): بخش ۱A (ارائه علمی، ۳ دقیقه برای هر نفر)، بخش ۱B (پرسش و پاسخ تحلیلی)، بخش ۲ (بحث و مناظره علمی).',
          prs: '۲۰ دقیقه برای صحبت و مناظره علمی دانشگاهی.',
          tr: '20 dakikalık akademik sözlü sınav: Bireysel sunum ve bilimsel tartışma.',
          ar: '20 دقيقة للامتحان الشفهي الثنائي (عرض فردي أكاديمي ثم نقاش علمي مشترك).',
          es: '20 minutos de examen oral en parejas: presentación académica y debate científico.'
        }
      }
    ],
    stepByStepStrategies: [
      {
        title: 'Sprachbausteine Teil 2: Idiomatik und Rektionskompetenz',
        steps: [
          {
            en: '1. Identify fixed noun-verb collocations. 2. Verify preposition and grammatical case. 3. Check stylistic register (academic standard).',
            fa: '۱. ترکیبات اسمی-فعلی ثابت را شناسایی کنید. ۲. حرف اضافه و حالت دستوری (Dativ یا Akkusativ) را بررسی نمایید. ۳. لحن و سبک علمی را تطبیق دهید.',
            prs: 'شناسایی افعال ترکیبی و حروف اضافه مخصوص هر فعل.',
            tr: '1. Sabit ad-eylem kalıplarını belirleyin. 2. Edat ve ismin halini kontrol edin. 3. Akademik biçeme dikkat edin.',
            ar: '1. تحديد التراكيب الاسمية الفعلية الاصطلاحية. 2. التحقق من حروف الجر والحالة الإعرابية. 3. مراعاة المستوى اللغوي الأكاديمي.',
            es: '1. Identifica colocaciones verbo-nominales fijas. 2. Verifica preposición y caso. 3. Asegura el registro académico.'
          }
        ]
      }
    ],
    commonMistakes: [
      {
        mistake: 'Falsche Rektion bei wissenschaftlichen Verben (z. B. "plädieren für" statt "plädieren auf")',
        correction: 'Wissenschaftsverben exakt beherrschen: "plädieren für + Akk." (befürworten), "anknüpfen an + Akk." (fortführen)',
        explanation: {
          en: 'Preposition errors reduce points drastically in Sprachbausteine.',
          fa: 'اشتباه در حروف اضافه افعال علمی (مانند plädieren für به جای plädieren auf) نمره زیادی کسر می‌کند.',
          prs: 'اشتباه در حروف اضافه افعال علمی سطح C1.',
          tr: 'Akademik fiillerin edatlarını karıştırmak puan kaybettirir: "plädieren für" doğrusudur.',
          ar: 'أخطاء حروف الجر المصاحبة للأفعال الأكاديمية تخصم درجات حاسمة في Sprachbausteine.',
          es: 'Los fallos de régimen preposicional en verbos académicos restan gran puntuación.'
        }
      }
    ]
  },
  lesen: {
    title: 'Modul Leseverstehen & Sprachbausteine (90 Minuten • 48 Aufgaben)',
    durationMinutes: 90,
    texts: [
      {
        title: 'Leseverstehen Teil 1: Global- & Detailverstehen (Aufgaben 1 bis 10)',
        sourceType: 'Wissenschaftliches Gutachten der Leopoldina: Quantencomputing und post-quanten-kryptografische Resilienz',
        body: `Die Verwirklichung fehlertoleranter universeller Quantencomputer rückt von einer theoretischen Vision in den Bereich ingenieurwissenschaftlicher Machbarkeit. Während klassische Supercomputer Informationen in diskreten binären Zuständen (Null oder Eins) prozessieren, nutzen Quantenrechner die quantenmechanischen Phänomene der Superposition und der Quantenverschränkung durch sogenannte Qubits. Ein System aus n Qubits kann simultan einen Zustandsraum von 2 hoch n Konfigurationen abbilden, was bei spezifischen mathematischen Problemklassen zu einem exponentiellen Rechenvorteil (Quantum Supremacy) führt.
Die gravierendste sicherheitspolitische Konsequenz dieses technologischen Quantensprungs betrifft die heute weltweit praktizierte asymmetrische Kryptografie. Die gängigen Public-Key-Verschlüsselungsverfahren – wie das RSA-Kryptosystem oder die Kryptografie auf Basis elliptischer Kurven (ECC) – fußen auf der rechnerischen Unangreifbarkeit mathematischer Einwegfunktionen, insbesondere der Primfaktorzerlegung sehr großer Zahlen und dem diskreten Logarithmus. Mit dem von Peter Shor bereits 1994 formulierten Quantenalgorithmus ließen sich diese Berechnungen jedoch in polynomialer Zeit bewältigen. Ein hinreichend dimensionierter Quantencomputer mit einigen Tausend logischen Qubits wäre binnen weniger Stunden in der Lage, sämtliche verschlüsselten Kommunikationskanäle des Bankenwesens, staatlicher Sicherheitsorgane und militärischer Frühwarnsysteme zu entschlüsseln.
Besondere Dringlichkeit erhält diese Bedrohung durch die Strategie des "Harvest now, decrypt later". Nachrichtendienste und kriminelle Syndikate zeichnen heute bereits riesige Mengen hochsensibler Datenströme auf, um sie in ein oder zwei Dekaden, sobald skalierbare Quantenhardware zur Verfügung steht, nachträglich zu dechiffrieren.
Um diesem existenzbedrohenden Szenario zuvorzukommen, treiben Standardisierungsinstitute wie das amerikanische NIST und das deutsche Bundesamt für Sicherheit in der Informationstechnik (BSI) die Umstellung auf Post-Quanten-Kryptografie (PQC) voran. Diese neuartigen kryptografischen Algorithmen beruhen auf gitterbasierten mathematischen Problemen (Lattice-based Cryptography), die sich nach aktuellem Erkenntnisstand auch quantenmechanisch nicht effizient knacken lassen.`,
        questions: [
          {
            id: 'tc1_l_q1',
            question: '1. Welche quantenmechanischen Phänomene verleihen Quantencomputern ihren Rechenvorteil?',
            options: [
              'Superposition und Quantenverschränkung',
              'Dampfdruck und Schwerkraft',
              'Elektrische Entladung von Batterien'
            ],
            correctAnswer: 'Superposition und Quantenverschränkung',
            explanation: {
              en: 'Text states: "... nutzen Quantenrechner die quantenmechanischen Phänomene der Superposition und der Quantenverschränkung...".',
              fa: 'پدیده‌های انطباق فازها (Superposition) و درهم‌تنیدگی کوانتومی (Quantenverschränkung).',
              prs: 'پدیده‌های فیزیک کوانتوم شامل برهم‌نهی و درهم‌تنیدگی.',
              tr: 'Süperpozisyon ve kuantum dolanıklığı.',
              ar: 'ظواهر التراكب الكمي (Superposition) والتشابك الكمي (Quantenverschränkung).',
              es: 'Superposición y entrelazamiento cuántico.'
            }
          },
          {
            id: 'tc1_l_q2',
            question: '2. Auf welchem mathematischen Prinzip basieren bisherige asymmetrische Verfahren wie RSA?',
            options: [
              'Auf der rechnerischen Unangreifbarkeit von Primfaktorzerlegung und diskretem Logarithmus',
              'Auf der einfachen Addition von ganzen Zahlen',
              'Auf geometrischen Zeichnungen im Sand'
            ],
            correctAnswer: 'Auf der rechnerischen Unangreifbarkeit von Primfaktorzerlegung und diskretem Logarithmus',
            explanation: {
              en: 'Paragraph 2 specifies: "... rechnerischen Unangreifbarkeit (...) der Primfaktorzerlegung sehr großer Zahlen und dem diskreten Logarithmus."',
              fa: 'بر دشواری محاسباتی غیرقابل حل تجزیه اعداد بسیار بزرگ به عوامل اول و لگاریتم گسسته.',
              prs: 'تجزیه نشدن اعداد کلان و لگاریتم.',
              tr: 'Büyük sayıların asal çarpanlara ayrılmasının ve ayrık logaritmanın hesaplama zorluğuna.',
              ar: 'استعصاء التحليل الحسابي للأعداد الأولية الضخمة واللوغاريتم المنفصل.',
              es: 'La invulnerabilidad computacional de la factorización de números primos grandes y el logaritmo discreto.'
            }
          },
          {
            id: 'tc1_l_q3',
            question: '3. Was leistet der Shor-Algorithmus aus dem Jahr 1994 theoretisch?',
            options: [
              'Er bewältigt die Primfaktorzerlegung in polynomialer Zeit auf Quantencomputern',
              'Er repariert defekte Bildschirme',
              'Er erhöht die Internetgeschwindigkeit um 50 Prozent'
            ],
            correctAnswer: 'Er bewältigt die Primfaktorzerlegung in polynomialer Zeit auf Quantencomputern',
            explanation: {
              en: 'Shor\'s algorithm can factor integers in polynomial time on quantum hardware.',
              fa: 'الگوریتم شور قادر است تجزیه به عوامل اول را در زمان چندجمله‌ای (polynomial time) حل کرده و رمز را بشکند.',
              prs: 'شکستن کدهای رمزی در زمان کوتاه با کمپیوتر کوانتومی.',
              tr: 'Asal çarpanlara ayırma işlemini kuantum bilgisayarlarında polinomiyal sürede çözer.',
              ar: 'إنجاز التحليل إلى عوامل أولية في زمن متعدد الحدود (polynomial) على الحواسيب الكمومية.',
              es: 'Resuelve la factorización en tiempo polinomial en ordenadores cuánticos.'
            }
          },
          {
            id: 'tc1_l_q4',
            question: '4. Was versteht man unter der Strategie "Harvest now, decrypt later"?',
            options: [
              'Das heutige Abfangen verschlüsselter Daten, um sie später mit Quantenrechnern zu entschlüsseln',
              'Das Ernten von Weizen im Spätsommer',
              'Das Löschen alter Backups'
            ],
            correctAnswer: 'Das heutige Abfangen verschlüsselter Daten, um sie später mit Quantenrechnern zu entschlüsseln',
            explanation: {
              en: 'Interception of encrypted data today for retrospective decryption once quantum hardware matures.',
              fa: 'رهگیری و ذخیره حجم وسیعی از داده‌های رمزگذاری‌شده امروز برای رمزگشایی در آینده به وسیله کامپیوترهای کوانتومی.',
              prs: 'ثبت و ذخیره کردن دیتای رمزی امروز تا در آینده با کمپیوتر کوانتومی باز شود.',
              tr: 'Şifreli verilerin bugünden toplanıp ileride kuantum bilgisayarlarıyla çözülmesi stratejisi.',
              ar: 'اعتراض وتخزين البيانات المشفرة اليوم لفك تشفيرها لاحقاً عند نضج عتاد الحوسبة الكمومية.',
              es: 'Interceptar y almacenar datos cifrados hoy para descifrarlos retrospectivamente con ordenadores cuánticos.'
            }
          },
          {
            id: 'tc1_l_q5',
            question: '5. Auf welchem mathematischen Ansatz basiert die zukunftssichere Post-Quanten-Kryptografie (PQC)?',
            options: [
              'Auf gitterbasierten Problemen (Lattice-based Cryptography)',
              'Auf römischen Zahlen',
              'Auf einfachen Passwörtern mit 4 Ziffern'
            ],
            correctAnswer: 'Auf gitterbasierten Problemen (Lattice-based Cryptography)',
            explanation: {
              en: 'PQC relies heavily on lattice-based cryptography, resisting quantum attacks.',
              fa: 'مسائل دشوار ریاضی مبتنی بر شبکه‌های برداری (Lattice-based Cryptography).',
              prs: 'روش‌های مبتنی بر کریپتوگرافی شبکه‌ای.',
              tr: 'Kafes tabanlı matematiksel problemlere (Lattice-based cryptography).',
              ar: 'المسائل الرياضية القائمة على التشفير الشبكي (Lattice-based Cryptography).',
              es: 'En problemas matemáticos basados en retículos (criptografía de retículos).'
            }
          },
          {
            id: 'tc1_l_q6',
            question: '6. Welche Institutionen treiben laut Text die PQC-Standardisierung voran?',
            options: [
              'NIST und BSI',
              'Die Tourismusbehörde',
              'Lokale Handwerkerinnungen'
            ],
            correctAnswer: 'NIST und BSI',
            explanation: {
              en: 'NIST (USA) and BSI (Germany) spearhead the post-quantum cryptography standards.',
              fa: 'سازمان‌های NIST در آمریکا و BSI در آلمان.',
              prs: 'سازمان‌های بین‌المللی امنیت سایبری مانند BSI و NIST.',
              tr: 'Amerikan NIST ve Alman BSI kurumları.',
              ar: 'المعهد الوطني الأمريكي للمعايير والتقنية (NIST) والمكتب الاتحادي الألماني لأمن المعلومات (BSI).',
              es: 'El NIST estadounidense y la BSI alemana.'
            }
          },
          {
            id: 'tc1_l_q7',
            question: '7. Welche Systeme wären bei einem Durchbruch von Quantencomputern besonders bedroht?',
            options: [
              'Bankenwesen, staatliche Sicherheitsorgane und militärische Frühwarnsysteme',
              'Nur mechanische Armbanduhren',
              'Ausschließlich Fahrradschlösser'
            ],
            correctAnswer: 'Bankenwesen, staatliche Sicherheitsorgane und militärische Frühwarnsysteme',
            explanation: {
              en: 'Text explicitly cites banking networks, national security bodies, and military early-warning systems.',
              fa: 'شبکه‌های بانکی، نهادهای امنیتی حاکمیتی و سامانه‌های هشدار سریع نظامی.',
              prs: 'سیستم‌های بانکی، ادارات امنیتی و رادارهای نظامی.',
              tr: 'Bankacılık, ulusal güvenlik organları ve askeri erken uyarı sistemleri.',
              ar: 'المنظومة المصرفية، الأجهزة الأمنية للدول، وأنظمة الإنذار المبكر العسكرية.',
              es: 'La banca internacional, organismos de seguridad estatal y sistemas de alerta militar.'
            }
          },
          {
            id: 'tc1_l_q8',
            question: '8. Was bedeutet der Begriff "Quantum Supremacy" im Kontext des Artikels?',
            options: [
              'Dass ein Quantenrechner bestimmte Aufgaben exponentiell schneller löst als die besten klassischen Computer',
              'Dass Quantencomputer die Weltherrschaft übernehmen',
              'Dass herkömmliche Computer verboten werden'
            ],
            correctAnswer: 'Dass ein Quantenrechner bestimmte Aufgaben exponentiell schneller löst als die besten klassischen Computer',
            explanation: {
              en: 'Quantum supremacy denotes solving specific problems exponentially faster than classical supercomputers.',
              fa: 'برتری نمایی محاسباتی کامپیوترهای کوانتومی در حل مسائل ویژه نسبت به قدرتمندترین سوپرکامپیوترهای سنتی.',
              prs: 'برتری شدید سرعت کمپیوتر کوانتومی نسبت به کمپیوترهای عادی.',
              tr: 'Kuantum bilgisayarlarının belirli problemleri klasik bilgisayarlardan katbekat hızlı çözmesi.',
              ar: 'التفوق الكمومي الحسابي في حل معضلات رياضية محددة بسرعة فائقة تعجز عنها الحواسيب الفائقة.',
              es: 'La capacidad de resolver problemas específicos exponencialmente más rápido que los supercomputadores clásicos.'
            }
          },
          {
            id: 'tc1_l_q9',
            question: '9. Wie viele logische Qubits wären laut Schätzung nötig, um RSA-Verschlüsselungen zu knacken?',
            options: ['Einige Tausend logische Qubits', 'Genau zwei Qubits', 'Über eine Trillion Qubits'],
            correctAnswer: 'Einige Tausend logische Qubits',
            explanation: {
              en: 'Text estimates: "... mit einigen Tausend logischen Qubits...".',
              fa: 'حدود چند هزار کیوبیت منطقی (logische Qubits).',
              prs: 'چندین هزار کیوبیت پایدار منطقی.',
              tr: 'Birkaç bin mantıksal kübit.',
              ar: 'بضعة آلاف من الكيوبتات المنطقية (logical qubits).',
              es: 'Unos pocos miles de cúbits lógicos.'
            }
          },
          {
            id: 'tc1_l_q10',
            question: '10. Welches Gesamtfazit zieht der Text hinsichtlich des Zeithorizonts für die PQC-Migration?',
            options: [
              'Die Umstellung muss unverzüglich eingeleitet werden, da Vorbereitungen Jahre dauern',
              'Man kann beruhigt 50 Jahre abwarten',
              'Kryptografie wird in Zukunft ohnehin abgeschafft'
            ],
            correctAnswer: 'Die Umstellung muss unverzüglich eingeleitet werden, da Vorbereitungen Jahre dauern',
            explanation: {
              en: 'Immediate transition is required due to length of institutional migration and "harvest now" threat.',
              fa: 'مهاجرت امنیتی باید فوراً آغاز شود، زیرا سازگارسازی کل ساختارها سال‌ها زمان می‌برد.',
              prs: 'تغییر سیستم‌ها باید فوراً شروع شود چون تطبیق آن وقت‌گیر است.',
              tr: 'Geçiş hazırlıkları yıllar süreceğinden dönüşüm derhal başlatılmalıdır.',
              ar: 'ضرورة البدء الفوري في خطط التحول الأمني لأن تكييف البنى التحتية يستغرق سنوات طويلة.',
              es: 'La migración debe iniciarse de inmediato dado el largo periodo de adaptación requerido.'
            }
          }
        ]
      },
      {
        title: 'Sprachbausteine Teil 1 & Teil 2: Grammatik, Idiomatik & Rektion (Aufgaben 11 bis 24)',
        sourceType: 'Akademische Stellungnahme zur Wissenschaftsfreiheit und Drittmittelfinanzierung',
        body: `Die universitäre Grundlagenforschung befindet sich in einem gravierenden Dilemma. Da die staatliche Grundfinanzierung seit Jahren (11) _____ die Inflation hinterherhinkt, sehen sich Hochschulen gezwungen, verstärkt private Drittmittel einzuwerben. Was auf den ersten Blick wie ein Segen für den Technologietransfer (12) _____, birgt bei genauerem Hinsehen erhebliche Gefahren für die Unabhängigkeit der Lehre.
Häufig knüpfen industrielle Geldgeber ihre Zuwendungen (13) _____ strikte Geheimhaltungsklauseln. Dies steht in diametralem Widerspruch (14) _____ Gebot der offenen wissenschaftlichen Diskussion. Junge Doktoranden geraten nicht selten in die missliche Lage, ihre Forschungsergebnisse nicht publizieren (15) _____ dürfen, da Patente angemeldet werden sollen.
Darüber hinaus droht eine Verengung des Forschungsspektrums: Disziplinen, die keinen unmittelbaren ökonomischen Verwertungsnutzen (16) _____ – wie die Geisteswissenschaften oder theoriegeleitete Philosophie –, geraten zunehmend ins (17) _____.
Es ist daher dringend an der Zeit, dass der Gesetzgeber dieser bedenklichen Entwicklung Einhalt (18) _____. Die Grundausstattung der Universitäten muss so aufgestockt werden, dass Forscher nicht länger (19) _____ Wohlwollen privater Konzerne angewiesen sind.
Um diesen Missstand dauerhaft zu beheben, plädieren Hochschulverbände (20) _____ eine Reform des Föderalismus. Der Bund müsse in die Lage versetzt werden, dauerhaft und direkt in die institutionelle Finanzierung der Hochschulen (21) _____.
Nur wenn Professoren und Nachwuchswissenschaftler ihre Thesen frei von ökonomischem Druck zur Disposition (22) _____ können, bleibt die Universität ein Hort unvoreingenommener Wahrheitsfindung. Andernfalls droht die Gefahr, dass die akademische Urteilskraft schrittweise an Glaubwürdigkeit (23) _____. Es gilt, das verfassungsmäßige Gut der Wissenschaftsfreiheit mit aller Entschiedenheit zu (24) _____.`,
        questions: [
          {
            id: 'tc1_sb_q11',
            question: '11. Lücke (11): Präposition:',
            options: ['hinter', 'neben', 'vor'],
            correctAnswer: 'hinter',
            explanation: {
              en: 'Collocation: "hinter der Inflation hinterherhinken" (to lag behind inflation).',
              fa: 'اصطلاح ثابت: hinter der Inflation hinterherhinken (عقب ماندن از نرخ تورم).',
              prs: 'عقب ماندن از تورم پولی.',
              tr: '"hinterherhinken" fiili "hinter + Dat." ile kullanılır.',
              ar: 'التعبير الاصطلاحي: hinter der Inflation hinterherhinken (التخلف عن مواكبة معدلات التضخم).',
              es: 'Locución: "hinter der Inflation hinterherhinken" (quedarse rezagado respecto a la inflación).'
            }
          },
          {
            id: 'tc1_sb_q12',
            question: '12. Lücke (12): Konjunktiv II im Vergleich:',
            options: ['anmutet', 'anmute', 'anmutete'],
            correctAnswer: 'anmutet',
            explanation: {
              en: 'Indicative present in factual concession: "wie ein Segen (...) anmutet" (appears/seems like a blessing).',
              fa: 'فعل anmuten به معنای به نظر رسیدن: wie ein Segen anmutet.',
              prs: 'به نظر رسیدن مانند یک موهبت.',
              tr: '"anmuten" (görünmek/izlenim bırakmak) fiilinin şimdiki zaman çekimi.',
              ar: 'الفعل anmuten بمعنى يبدو أو يظهر كنعمة: anmutet.',
              es: 'Uso del verbo anmuten en presente indicativo (parecer/antojarse).'
            }
          },
          {
            id: 'tc1_sb_q13',
            question: '13. Lücke (13): Feste Rektion des Verbs "anknüpfen":',
            options: ['an + Akkusativ', 'an + Dativ', 'mit + Dativ'],
            correctAnswer: 'an + Akkusativ',
            explanation: {
              en: 'Collocation: "etwas anknüpfen an + Akkusativ" (to tie something to / attach conditions to).',
              fa: 'حرف اضافه فعل anknüpfen با an + Akkusativ است (مشروط ساختن یا گره زدن به).',
              prs: 'وصل کردن یا مشروط ساختن کمک‌ها به شروط سخت‌گیرانه.',
              tr: '"etwas anknüpfen an + Akk." (bir şeyi bir şarta bağlamak).',
              ar: 'تعدية الفعل anknüpfen بحرف الجر an مع حالة النصب (Akkusativ).',
              es: 'Régimen de anknüpfen: an + acusativo.'
            }
          },
          {
            id: 'tc1_sb_q14',
            question: '14. Lücke (14): Präpositionalgruppe "im Widerspruch ...":',
            options: ['zum', 'beim', 'vom'],
            correctAnswer: 'zum',
            explanation: {
              en: 'Idiomatic phrase: "im Widerspruch zu + Dativ" (in contradiction with) -> "zum Gebot".',
              fa: 'اصطلاح در تضاد با: im Widerspruch zu + Dativ -> zum Gebot.',
              prs: 'در مغایرت و تضاد با دستور.',
              tr: 'Kalıp: "im Widerspruch zu + Dat." -> "zum Gebot".',
              ar: 'التركيب الاصطلاحي: im Widerspruch zu + Dativ (على طرفي نقيض مع).',
              es: 'Estructura idiomática: im Widerspruch zu + dativo.'
            }
          },
          {
            id: 'tc1_sb_q15',
            question: '15. Lücke (15): Modalverb-Infinitiv:',
            options: ['zu', 'um', 'ohne'],
            correctAnswer: 'zu',
            explanation: {
              en: 'Infinitive with "zu dürfen" after "in die Lage geraten (...) nicht publizieren zu dürfen".',
              fa: 'ساختار مصدر با zu: nicht publizieren zu dürfen.',
              prs: 'اجازه نشر نیافتن.',
              tr: 'Infinitiv ile "zu dürfen" kullanımı.',
              ar: 'صيغة المصدر المسبوق بـ zu للتعبير عن عدم السماح بالنشر: zu dürfen.',
              es: 'Uso de infinitivo con zu tras locución verbal: zu dürfen.'
            }
          },
          {
            id: 'tc1_sb_q16',
            question: '16. Lücke (16): Idiomatisches Verb mit "Nutzen":',
            options: ['versprechen', 'aussprechen', 'besprechen'],
            correctAnswer: 'versprechen',
            explanation: {
              en: 'Collocation: "einen Nutzen versprechen" (to promise/offer a benefit or economic return).',
              fa: 'ترکیب کلامی: einen Verwertungsnutzen versprechen (فایده اقتصادی در بر داشتن یا نوید دادن).',
              prs: 'فایده اقتصادی در پی نداشتن.',
              tr: '"Nutzen versprechen" (yarar/fayda vadetmek).',
              ar: 'المصاحبة اللفظية: einen Nutzen versprechen (يعد بمردود أو نفع اقتصادي).',
              es: 'Colocación: einen Nutzen versprechen (prometer utilidad).'
            }
          },
          {
            id: 'tc1_sb_q17',
            question: '17. Lücke (17): Redewendung "ins ... geraten":',
            options: ['Hintertreffen', 'Vortreffen', 'Nachtreffen'],
            correctAnswer: 'Hintertreffen',
            explanation: {
              en: 'Idiom: "ins Hintertreffen geraten" (to fall behind / be disadvantaged).',
              fa: 'اصطلاح فاخر آلمانی: ins Hintertreffen geraten (به حاشیه رانده شدن، عقب افتادن).',
              prs: 'عقب ماندن و به حاشیه رفتن.',
              tr: 'Deyim: "ins Hintertreffen geraten" (geride kalmak, dezavantajlı duruma düşmek).',
              ar: 'تعبير مجازي شهير: ins Hintertreffen geraten (التراجع إلى الخلف والتهميش).',
              es: 'Expresión idiomática: ins Hintertreffen geraten (quedar en desventaja o rezagado).'
            }
          },
          {
            id: 'tc1_sb_q18',
            question: '18. Lücke (18): Funktionsverbgefüge "Einhalt ...":',
            options: ['gebietet', 'gebietete', 'geboten'],
            correctAnswer: 'gebietet',
            explanation: {
              en: 'Noun-verb collocation: "einer Entwicklung Einhalt gebieten" (to put an end/halt to a trend).',
              fa: 'ترکیب اسمی-فعلی: einer Entwicklung Einhalt gebieten (جلوی روندی را گرفتن، متوقف ساختن).',
              prs: 'متوقف ساختن روند منفی.',
              tr: 'Kalıp: "einer Sache Einhalt gebieten" (bir gelişmeye dur/son demek).',
              ar: 'التركيب المصدري الفعلي: einer Entwicklung Einhalt gebieten (وضع حد لهذا التطور المقلق).',
              es: 'Colocación verbal: einer Entwicklung Einhalt gebieten (poner coto o freno a un proceso).'
            }
          },
          {
            id: 'tc1_sb_q19',
            question: '19. Lücke (19): Präposition mit "angewiesen sein":',
            options: ['auf das', 'an das', 'für das'],
            correctAnswer: 'auf das',
            explanation: {
              en: 'Fixed preposition: "angewiesen sein auf + Akkusativ" -> "auf das Wohlwollen".',
              fa: 'حرف اضافه فعل angewiesen sein با auf + Akkusativ است (وابسته بودن به حسن نیت شرکت‌ها).',
              prs: 'وابسته بودن به کمک مالی دیگران.',
              tr: '"angewiesen sein auf + Akk." (bir şeye muhtaç/bağımlı olmak).',
              ar: 'حرف الجر المصاحب لصفة angewiesen هو auf مع المنصوب: auf das Wohlwollen.',
              es: 'Régimen preposicional: angewiesen sein auf + acusativo.'
            }
          },
          {
            id: 'tc1_sb_q20',
            question: '20. Lücke (20): Rektion des Verbs "plädieren":',
            options: ['für', 'auf', 'über'],
            correctAnswer: 'für',
            explanation: {
              en: 'Collocation: "plädieren für + Akkusativ" (to advocate/plead for something).',
              fa: 'حرف اضافه فعل plädieren با für + Akkusativ به معنای دفاع کردن و خواستار شدن است.',
              prs: 'حمایت کردن و خواستار شدن اصلاحات.',
              tr: '"plädieren für + Akk." (bir şeyi savunmak/desteklemek).',
              ar: 'تعدية الفعل plädieren بحرف الجر für مع المنصوب للدفاع والمطالبة: plädieren für.',
              es: 'Régimen del verbo plädieren: für + acusativo (abogar por).'
            }
          },
          {
            id: 'tc1_sb_q21',
            question: '21. Lücke (21): Verb "eingreifen / investieren":',
            options: ['einzugreifen', 'einmischen', 'eingreifen'],
            correctAnswer: 'einzugreifen',
            explanation: {
              en: 'Infinitive construction after "in die Lage versetzt werden (...) einzugreifen" (to intervene/step in).',
              fa: 'ساختار مصدر با zu: direkt einzugreifen (مستقیماً مداخله و ورود کردن).',
              prs: 'مداخله مستقیم مالی.',
              tr: 'Müdahale etmek/adım atmak anlamında "zu"lu mastar: einzugreifen.',
              ar: 'صيغة المصدر المقترن بـ zu للتدخل المالي المباشر: einzugreifen.',
              es: 'Infinitivo con zu: einzugreifen (intervenir directamente).'
            }
          },
          {
            id: 'tc1_sb_q22',
            question: '22. Lücke (22): Nomen-Verb-Gefüge "zur Disposition ...":',
            options: ['stellen', 'stehen', 'bringen'],
            correctAnswer: 'stellen',
            explanation: {
              en: 'Active collocation: "etwas zur Disposition stellen" (to put something up for discussion/debate).',
              fa: 'ترکیب اسمی-فعلی معلوم: zur Disposition stellen (چیزی را به بحث و بررسی گذاشتن).',
              prs: 'چیزی را در معرض بحث قرار دادن.',
              tr: 'Aktif kalıp: "zur Disposition stellen" (tartışmaya açmak).',
              ar: 'التعبير الفعلي الاصطلاحي: zur Disposition stellen (طرح الشيء للنقاش والمفاضلة).',
              es: 'Colocación activa: zur Disposition stellen (poner a debate o discusión).'
            }
          },
          {
            id: 'tc1_sb_q23',
            question: '23. Lücke (23): Verb "an Glaubwürdigkeit ...":',
            options: ['einbüßt', 'abbüßt', 'ausbüßt'],
            correctAnswer: 'einbüßt',
            explanation: {
              en: 'Fixed phrase: "an Glaubwürdigkeit einbüßen" (to lose credibility).',
              fa: 'اصطلاح ثابت: an Glaubwürdigkeit einbüßen (از دست دادن اعتبار و باورپذیری).',
              prs: 'کاهش اعتبار و از دست دادن اعتماد.',
              tr: 'Kalıp: "an Glaubwürdigkeit einbüßen" (inandırıcılığını kaybetmek).',
              ar: 'المصاحبة الاصطلاحية: an Glaubwürdigkeit einbüßen (فقدان المصداقية وتآكلها).',
              es: 'Locución: an Glaubwürdigkeit einbüßen (perder credibilidad).'
            }
          },
          {
            id: 'tc1_sb_q24',
            question: '24. Lücke (24): Verb mit "Entschiedenheit":',
            options: ['verteidigen', 'aufgeben', 'vergessen'],
            correctAnswer: 'verteidigen',
            explanation: {
              en: 'Collocation: "ein Gut mit Entschiedenheit verteidigen" (to defend a good with all resolve).',
              fa: 'دفاع قاطعانه از ارزش قانون اساسی: mit aller Entschiedenheit verteidigen.',
              prs: 'دفاع قاطعانه از آزادی علمی.',
              tr: 'Kararlılıkla savunmak: "mit aller Entschiedenheit verteidigen".',
              ar: 'الدفاع الحاسم بكل إصرار: mit aller Entschiedenheit verteidigen.',
              es: 'Defender resueltamente un derecho: mit aller Entschiedenheit verteidigen.'
            }
          }
        ]
      }
    ]
  },
  hoeren: {
    title: 'Modul Hörverstehen (40 Minuten • 24 Aufgaben)',
    durationMinutes: 40,
    audioItems: [
      {
        id: 'tc1_h_item1',
        title: 'Teil 1: Akademische Vorlesung (Aufgaben 1 bis 8 • Einmal hören)',
        situation: 'Vorlesung an der RWTH Aachen: "Thermodynamik der Kernfusion und Plasmaeinschluss im Tokamak"',
        transcript: `Prof. Dr. Brandstetter: "Guten Tag, meine Damen und Herren. Wir setzen unsere Vorlesungsreihe über fortgeschrittene Fusionsreaktoren fort. Während die herkömmliche Kernspaltung schwere Atomkerne wie Uran-235 spaltet, imitiert die Kernfusion den physikalischen Energieerzeugungsprozess unserer Sonne. Dabei verschmelzen die leichten Wasserstoffisotope Deuterium und Tritium bei extremen Temperaturen von über 100 Millionen Grad Celsius zu Helium-4 unter Freisetzung eines hochenergetischen Neutrons.
Die fundamentale ingenieurtechnische Herausforderung besteht darin, dieses vollionisierte Gas – das sogenannte Plasma – stabil einzuschließen. Da kein materieller Feststoff der Welt diesen solaren Temperaturen standhalten könnte, bedienen wir uns starker toroidaler Magnetfelder. Im führenden Reaktorkonzept, dem Tokamak, wie er im internationalen Forschungsreaktor ITER in Südfrankreich gebaut wird, schließen spiralförmig verdrillte Magnetfeldlinien das Plasma berührungslos in einer Donut-förmigen Vakuumkammer ein.
Ein physikalischer Schlüsselparameter ist das sogenannte \'Breakeven\'-Kriterium, quantifiziert durch den Q-Faktor. Ein Q-Wert von 1 bedeutet, dass die erzeugte Fusionsleistung exakt der zur Plasmaheizung aufgewandten externen Energie entspricht. Um jedoch ein kommerziell wirtschaftliches Fusionskraftwerk betreiben zu können, visieren wir einen Q-Faktor von mindestens 10 bis 30 an. ITER soll im Vollbetrieb eine Fusionsleistung von 500 Megawatt bei einer Heizleistung von nur 50 Megawatt demonstrieren – mithin ein Q von 10.
Das verbleibende Hauptproblem ist jedoch materialspezifischer Natur: Die bei der Deuterium-Tritium-Reaktion emittierten 14-Megaelektronenvolt-Neutronen sind elektrisch ungeladen und können daher nicht vom Magnetfeld gehalten werden. Sie prallen mit ungeheurer Wucht auf die innere Reaktorkammerwand, die sogenannte erste Wand, und verursachen dort massive Gitterschäden im Wolfram- und Berylliumgefüge. Erst wenn es der Materialforschung gelingt, hochresistente Legierungen zu entwickeln, wird der Traum von unbegrenzter, CO2-freier Grundlastenergie Wirklichkeit werden."`,
        questions: [
          {
            id: 'tc1_h_q1',
            question: '1. Welche Atomkerne verschmelzen bei der im Text beschriebenen Kernfusion?',
            options: ['Deuterium und Tritium zu Helium-4', 'Uran-235 und Plutonium', 'Sauerstoff und Stickstoff'],
            correctAnswer: 'Deuterium und Tritium zu Helium-4',
            explanation: {
              en: 'Isotopes: Deuterium and Tritium fuse into Helium-4 releasing a high-energy neutron.',
              fa: 'ایزوتوپ‌های هیدروژن یعنی دوتریوم و تریتیوم به هلیوم-۴ تبدیل می‌شوند.',
              prs: 'دوتریوم و تریتیوم به گاز هلیوم.',
              tr: 'Döteryum ve trityum füzyonla Helyum-4\'e dönüşür.',
              ar: 'اندماج نظائر الهيدروجين الديوتيريوم والتريتيوم لإنتاج الهيليوم-4.',
              es: 'Deuterio y tritio se fusionan en helio-4 liberando un neutrón.'
            }
          },
          {
            id: 'tc1_h_q2',
            question: '2. Welche Temperaturen sind für die Aufrechterhaltung des Fusionsplasmas erforderlich?',
            options: ['Über 100 Millionen Grad Celsius', 'Genau 100 Grad Celsius', 'Minus 273 Grad'],
            correctAnswer: 'Über 100 Millionen Grad Celsius',
            explanation: {
              en: 'Temperature requirement: Exceeding 100 million degrees Celsius.',
              fa: 'دمای شگفت‌انگیز بیش از ۱۰۰ میلیون درجه سانتی‌گراد.',
              prs: 'بیش از ۱۰۰ میلیون درجه سانتی‌گراد.',
              tr: '100 milyon santigrat derecenin üzerinde.',
              ar: 'درجات حرارة هائلة تتجاوز 100 مليون درجة مئوية.',
              es: 'Más de 100 millones de grados Celsius.'
            }
          },
          {
            id: 'tc1_h_q3',
            question: '3. Wie wird das heiße Plasma im Tokamak-Reaktor ohne Wandberührung eingeschlossen?',
            options: ['Durch spiralförmig verdrillte toroidale Magnetfelder', 'Durch dicke Glaswände', 'Durch eiskaltes Wasser'],
            correctAnswer: 'Durch spiralförmig verdrillte toroidale Magnetfelder',
            explanation: {
              en: 'Confinement: Spirally twisted toroidal magnetic fields prevent plasma contact with walls.',
              fa: 'به وسیله میدان‌های مغناطیسی چرخشی حلقوی (Toroidal) بسیار قدرتمند.',
              prs: 'به کمک میدان مقناطیسی بدون تماس با دیواره.',
              tr: 'Spiral bükümlü toroidal manyetik alanlarla.',
              ar: 'بواسطة مجالات مغناطيسية حلقية (toroidal) ملتوية تمنع ملامسة الجدران.',
              es: 'Mediante campos magnéticos toroidales enrollados en espiral.'
            }
          },
          {
            id: 'tc1_h_q4',
            question: '4. Wo entsteht das weltweite Leuchtturm-Forschungsprojekt ITER?',
            options: ['In Südfrankreich', 'In der Antarktis', 'Auf dem Mond'],
            correctAnswer: 'In Südfrankreich',
            explanation: {
              en: 'Location of ITER: Cadarache in Southern France.',
              fa: 'در جنوب فرانسه (پروژه بین‌المللی کاداراش ITER).',
              prs: 'در جنوب فرانسه.',
              tr: 'Güney Fransa\'da.',
              ar: 'في جنوب فرنسا (مشروع المفاعل التجريبي الدولي إيتر ITER).',
              es: 'En el sur de Francia.'
            }
          },
          {
            id: 'tc1_h_q5',
            question: '5. Was besagt ein Q-Faktor von 1 (Breakeven)?',
            options: ['Erzeugte Fusionsleistung entspricht exakt der aufgewandten Heizleistung', 'Das Kraftwerk erzeugt Strom für 1 Million Haushalte', 'Die Anlage explodiert'],
            correctAnswer: 'Erzeugte Fusionsleistung entspricht exakt der aufgewandten Heizleistung',
            explanation: {
              en: 'Breakeven: Fusion output energy equals external plasma heating energy.',
              fa: 'نقطه سر‌به‌سر: انرژی تولیدی همجوشی دقیقاً برابر با انرژی حرارتی ورودی است.',
              prs: 'انرژی تولید شده برابر است با انرژی مصرف شده برای گرمایش.',
              tr: 'Üretilen füzyon gücü, harcanan harici ısıtma gücüne tam olarak eşittir.',
              ar: 'تعادل الطاقة المنتجة من الاندماج مع الطاقة المستهلكة في التسخين (Q = 1).',
              es: 'La energía producida equivale exactamente a la energía externa empleada en calentar el plasma.'
            }
          },
          {
            id: 'tc1_h_q6',
            question: '6. Welchen Q-Wert strebt der Testreaktor ITER im Vollbetrieb an?',
            options: ['Q = 10 (500 MW Leistung bei 50 MW Heizung)', 'Q = 0,1', 'Q = 1.000.000'],
            correctAnswer: 'Q = 10 (500 MW Leistung bei 50 MW Heizung)',
            explanation: {
              en: 'ITER aims for Q = 10 (500 MW fusion power from 50 MW heating input).',
              fa: 'ضریب Q برابر ۱۰ (تولید ۵۰۰ مگاوات انرژی همجوشی با ۵۰ مگاوات گرمایش).',
              prs: 'ضریب کیو مساوی ۱۰.',
              tr: 'Q = 10 (50 MW ısıtmaya karşılık 500 MW füzyon gücü).',
              ar: 'معامل Q = 10 (توليد 500 ميغاوات طاقة مقابل 50 ميغاوات تسخين).',
              es: 'Q = 10 (500 MW de potencia de fusión con 50 MW de potencia de calentamiento).'
            }
          },
          {
            id: 'tc1_h_q7',
            question: '7. Warum können die emittierten 14-MeV-Neutronen nicht vom Magnetfeld gehalten werden?',
            options: ['Weil sie elektrisch ungeladen sind', 'Weil sie zu langsam fliegen', 'Weil sie magnetisch abgestoßen werden'],
            correctAnswer: 'Weil sie elektrisch ungeladen sind',
            explanation: {
              en: 'Neutrons have no electric charge (neutral), rendering magnetic confinement ineffective.',
              fa: 'زیرا نوترون‌ها فاقد بار الکتریکی (خنثی) هستند و میدان مغناطیسی بر آن‌ها اثری ندارد.',
              prs: 'چون نوترون‌ها چارج برقی ندارند.',
              tr: 'Elektriksel olarak yüksüz (nötr) oldukları için manyetik alan onları tutamaz.',
              ar: 'لأن النيوترونات غير مشحونة كهربائياً مما يجعل التحكم بها بالمجال المغناطيسي مستحيلاً.',
              es: 'Porque carecen de carga eléctrica y el campo magnético no ejerce fuerza sobre ellas.'
            }
          },
          {
            id: 'tc1_h_q8',
            question: '8. Was ist laut Professor Brandstetter der Engpass für die wirtschaftliche Nutzung?',
            options: ['Die Materialforschung für hitze- und neutronenresistente Wandlegierungen', 'Es gibt weltweit kein Wasser mehr', 'Niemand braucht Strom'],
            correctAnswer: 'Die Materialforschung für hitze- und neutronenresistente Wandlegierungen',
            explanation: {
              en: 'Material science bottleneck: Developing alloys resistant to high-energy neutron bombardment.',
              fa: 'چالش علم مواد: تولید آلیاژهای پیشرفته مقاوم در برابر بمباران نوترونی شدید دیواره راکتور.',
              prs: 'نیاز به ساخت فلزات بسیار مقاوم برای دیواره راکتور.',
              tr: 'Nötron bombardımanına ve aşırı sıcağa dayanıklı alaşımlar geliştirecek malzeme bilimi.',
              ar: 'معضلة علم المواد في ابتكار سبائك فائقة المقاومة للحرارة والقصف النيوتروني العنيف.',
              es: 'La ciencia de materiales para aleaciones resistentes al bombardeo neutrónico en la pared interna.'
            }
          }
        ]
      },
      {
        id: 'tc1_h_item2',
        title: 'Teil 2: Fachdiskussion am Runden Tisch (Aufgaben 9 bis 18 • Zweimal hören)',
        situation: 'Podiumsdiskussion: "Open Science und die Kommerzialisierung wissenschaftlicher Publikationen"',
        transcript: `Moderatorin: "Meine Damen und Herren, wir debattieren heute über die Zukunft des wissenschaftlichen Publizierens. Auf der einen Seite steht Dr. Johannes Meißner vom Verband wissenschaftlicher Fachverlage, auf der anderen Seite Dr. Sarah Al-Khatib von der Initiative Open Access Europe. Frau Dr. Al-Khatib, warum fordern Sie ein bedingungsloses Ende des traditionellen Subskriptionsmodells?"
Dr. Al-Khatib: "Das bisherige Modell ist ein moralischer und ökonomischer Skandal. Universitäre Forschung wird zu hundert Prozent aus öffentlichen Steuergeldern finanziert. Professoren und Postdocs verfassen die Manuskripte kostenlos und begutachten die Arbeiten ihrer Kollegen im Rahmen des Peer-Review-Verfahrens ebenfalls unentgeltlich. Anschließend eignen sich oligopolistische Wissenschaftsverlage die Verwertungsrechte an, sperren die Erkenntnisse hinter astronomisch teure Paywalls und verkaufen den Universitätsbibliotheken die Abonnements für Millionenbeträge zurück. Diese Profitmargen von über 35 Prozent übertreffen selbst jene der Tech-Giganten. Wissen muss ein globales Gemeingut sein, das allen Forschenden und Bürgern weltweit barrierefrei zur Verfügung steht."
Moderatorin: "Herr Dr. Meißner, wie rechtfertigt die Verlagsbranche diese Preisgestaltung?"
Dr. Meißner: "Frau Al-Khatib zeichnet ein stark verzerrtes Zerrbild. Wissenschaftliche Verlage sind keineswegs bloße Gelddruckmaschinen. Wir kuratieren, organisieren und moderieren das weltweite Peer-Review-Netzwerk. Wir investieren hunderte Millionen in digitale Publikationsinfrastrukturen, dauerhafte Archivierungsserver, Plagiatserkennungssoftware und semantische Verschlagwortung. Wenn Sie das Subskriptionsmodell zerschlagen und auf das sogenannte \'Gold Open Access\' umstellen, bei dem die Autoren über Article Processing Charges (APCs) für die Publikation zahlen, kehren Sie das Problem lediglich um: Dann können sich Forscher aus ressourcenschwachen Universitäten im globalen Süden keine Veröffentlichungen in renommierten Journalen mehr leisten."
Dr. Al-Khatib: "Das ist ein durchsichtiges Scheinargument! Für Forscher aus Entwicklungsländern existieren längst Härtefallfonds und Waiver-Programme. Der entscheidende Punkt ist: Wissen, das der Menschheit zur Bewältigung von Pandemien und Klimawandel verhelfen kann, darf nicht aus reinem Renditestreben künstlich verknappt werden!"`,
        questions: [
          {
            id: 'tc1_h_q9',
            question: '9. Aus welchen Mitteln wird universitäre Forschung laut Dr. Al-Khatib primär finanziert?',
            options: ['Zu hundert Prozent aus öffentlichen Steuergeldern', 'Aus Eintrittskarten für Sportveranstaltungen', 'Durch Lotteriegewinne der Rektoren'],
            correctAnswer: 'Zu hundert Prozent aus öffentlichen Steuergeldern',
            explanation: {
              en: 'Financing: Academic research is 100% funded by public taxpayer money.',
              fa: 'به طور کامل (۱۰۰ درصد) از محل مالیات‌های عمومی شهروندان تامین می‌شود.',
              prs: 'کاملاً از پول مالیات مردم.',
              tr: '%100 kamu vergi gelirleriyle.',
              ar: 'بنسبة 100% من أموال الضرائب العامة للمواطنين.',
              es: 'Al cien por cien con dinero público de los contribuyentes.'
            }
          },
          {
            id: 'tc1_h_q10',
            question: '10. Wie erfolgt die Begutachtung (Peer Review) von Manuskripten durch Wissenschaftler?',
            options: ['Unentgeltlich im Rahmen der akademischen Tätigkeit', 'Gegen ein Gehalt von 10.000 Euro pro Text', 'Automatisch durch alte Faxgeräte'],
            correctAnswer: 'Unentgeltlich im Rahmen der akademischen Tätigkeit',
            explanation: {
              en: 'Peer review is conducted without remuneration by academic peers.',
              fa: 'به صورت رایگان و بدون دریافت دستمزد توسط داوران دانشگاهی انجام می‌گیرد.',
              prs: 'به صورت داوطلبانه و بدون معاش.',
              tr: 'Akademisyenler tarafından tamamen ücretsiz olarak.',
              ar: 'بالمجان وبشكل تطوعي ضمن النشاط الأكاديمي للأقران.',
              es: 'De forma gratuita y altruista por parte de los investigadores pares.'
            }
          },
          {
            id: 'tc1_h_q11',
            question: '11. Wie hoch sind laut Dr. Al-Khatib die Profitmargen mancher Wissenschaftsverlage?',
            options: ['Über 35 Prozent', 'Unter einem Prozent', 'Genau null Prozent'],
            correctAnswer: 'Über 35 Prozent',
            explanation: {
              en: 'Profit margins exceed 35%, surpassing even major tech companies.',
              fa: 'حاشیه سود بیش از ۳۵ درصد که حتی از غول‌های فناوری نیز بیشتر است.',
              prs: 'بیش از ۳۵ فیصد مفاد خالص.',
              tr: '%35\'in üzerinde kar marjı.',
              ar: 'هوامش ربحية تتجاوز 35% متفوقة على كبريات شركات التقنية.',
              es: 'Márgenes de beneficio superiores al 35%.'
            }
          },
          {
            id: 'tc1_h_q12',
            question: '12. Was fordert Dr. Al-Khatib für wissenschaftliches Wissen?',
            options: ['Dass es als globales Gemeingut barrierefrei zugänglich ist', 'Dass wissenschaftliche Texte verboten werden', 'Dass man für jede Seite 100 Euro bezahlt'],
            correctAnswer: 'Dass es als globales Gemeingut barrierefrei zugänglich ist',
            explanation: {
              en: 'Vision: Knowledge must be treated as an open global public good.',
              fa: 'دانش باید کالای عمومی جهانی باشد که بدون مانع مالی در دسترس همگان قرار گیرد.',
              prs: 'دانش باید میراث مشترک بشریت و رایگان باشد.',
              tr: 'Evrensel bir kamu malı olarak engelsiz şekilde herkesin erişimine açık olması.',
              ar: 'أن تكون المعرفة منفعة عامة عالمية متاحة للجميع دون حواجز مادية.',
              es: 'Que el saber sea un bien común global de acceso libre y sin barreras.'
            }
          },
          {
            id: 'tc1_h_q13',
            question: '13. Welche Leistungen erbringen Fachverlage laut Dr. Johannes Meißner?',
            options: ['Kuration, Peer-Review-Organisation, Plagiatserkennung und Archivierung', 'Sie drucken Werbeprospekte für Supermärkte', 'Sie bauen Möbel für Bibliotheken'],
            correctAnswer: 'Kuration, Peer-Review-Organisation, Plagiatserkennung und Archivierung',
            explanation: {
              en: 'Publisher services: Curation, organizing peer review, plagiarism detection, and permanent archiving.',
              fa: 'سازماندهی داوری همتایان، غربالگری مقالات، نرم‌افزارهای کشف سرقت علمی و سرورهای آرشیو پایدار.',
              prs: 'مدیریت ارزیابی مقالات، کشف کاپی غیرقانونی و نگهداری دایمی اسناد.',
              tr: 'Kürasyon, hakem değerlendirme organizasyonu, intihal tespiti ve arşivleme.',
              ar: 'تنظيم شبكات مراجعة الأقران، فرز المحتوى، رصد الانتحال العلمي والأرشفة الرقمية الدائمة.',
              es: 'Comisariado, gestión del arbitraje por pares, detección de plagio y archivo digital seguro.'
            }
          },
          {
            id: 'tc1_h_q14',
            question: '14. Was versteht man unter dem Modell "Gold Open Access"?',
            options: ['Autoren zahlen über Article Processing Charges (APCs) für die Publikation', 'Alle Artikel werden in reinem Gold gedruckt', 'Abonnements kosten das Doppelte'],
            correctAnswer: 'Autoren zahlen über Article Processing Charges (APCs) für die Publikation',
            explanation: {
              en: 'Gold Open Access: Authors/institutions pay APC fees upfront to make papers freely accessible.',
              fa: 'در مدل گلد اوپن اکسس، نویسندگان یا دانشگاه‌ها هزینه انتشار (APC) را پرداخت می‌کنند تا مقاله رایگان شود.',
              prs: 'نویسنده پول نشر مقاله را می‌دهد تا برای همه رایگان شود.',
              tr: 'Yazarların veya kurumlarının makale işlem ücreti (APC) ödeyerek yayını ücretsiz kılması.',
              ar: 'دفع المؤلفين أو مؤسساتهم لرسوم معالجة المقالات (APCs) لإتاحة البحث للجميع مجاناً.',
              es: 'Los autores o sus instituciones abonan tasas de procesamiento (APC) para publicar en abierto.'
            }
          },
          {
            id: 'tc1_h_q15',
            question: '15. Welches Problem sieht Dr. Meißner beim Gold-Open-Access-Modell für ärmere Länder?',
            options: ['Forscher aus ressourcenschwachen Ländern können sich die Veröffentlichungsgebühren nicht leisten', 'Dort gibt es kein Papier mehr', 'Sie dürfen das Internet nicht benutzen'],
            correctAnswer: 'Forscher aus ressourcenschwachen Ländern können sich die Veröffentlichungsgebühren nicht leisten',
            explanation: {
              en: 'Inequity concern: Researchers from low-income nations cannot afford expensive APC publication fees.',
              fa: 'پژوهشگران کشورهای کم‌درآمد توان مالی پرداخت هزینه‌های سرسام‌آور APC را برای انتشار در نشریات برتر ندارند.',
              prs: 'پژوهشگران فقیر پول پرداخت فیس نشر را نخواهند داشت.',
              tr: 'Kaynakları kısıtlı ülkelerdeki araştırmacıların yüksek makale basım ücretlerini karşılayamaması.',
              ar: 'عجز باحثي الدول النامية والفقيرة عن سداد رسوم النشر الباهظة في المجلات المرموقة.',
              es: 'Que los investigadores de países con pocos recursos no puedan costear las tarifas de publicación.'
            }
          },
          {
            id: 'tc1_h_q16',
            question: '16. Wie entgegnet Dr. Al-Khatib auf den Einwand bezüglich ärmerer Hochschulen?',
            options: ['Es existieren längst Härtefallfonds und Gebührenerlasse (Waiver-Programme)', 'Arme Länder sollten einfach keine Wissenschaft betreiben', 'Verlage zahlen den Forschern Geld'],
            correctAnswer: 'Es existieren längst Härtefallfonds und Gebührenerlasse (Waiver-Programme)',
            explanation: {
              en: 'Counterargument: Hardship funds and fee waivers exist for developing country scholars.',
              fa: 'صندوق‌های حمایت اضطراری و برنامه‌های معافیت از پرداخت هزینه (Waiver) وجود دارند.',
              prs: 'برنامه‌های معافیت از پرداخت برای کشورهای نادار وجود دارد.',
              tr: 'Zor durum fonları ve ücret muafiyeti (waiver) programlarının halihazırda var olduğunu belirtir.',
              ar: 'وجود صناديق دعم الحالات الصعبة وبرامج الإعفاء من الرسوم (Waiver) لباحثي الجنوب العالمي.',
              es: 'Existen fondos de contingencia y programas de exención de tarifas (waivers).'
            }
          },
          {
            id: 'tc1_h_q17',
            question: '17. Welche Menschheitsthemen erfordern laut Dr. Al-Khatib dringend freien Wissenszugang?',
            options: ['Bewältigung von Pandemien und Bekämpfung des Klimawandels', 'Entwicklung neuer Videospiele', 'Organisation von Modeschauen'],
            correctAnswer: 'Bewältigung von Pandemien und Bekämpfung des Klimawandels',
            explanation: {
              en: 'Societal challenges cited: Overcoming pandemics and combating climate change.',
              fa: 'مهار همه‌گیری‌های بیماری (پاندمی‌ها) و مبارزه با دگرگونی‌های اقلیمی.',
              prs: 'مبارزه با بیماری‌های ساری و تغییرات اقلیمی.',
              tr: 'Salgın hastalıklarla mücadele ve iklim krizinin çözümü.',
              ar: 'مواجهة الأوبئة العالمية ومكافحة تداعيات التغير المناخي.',
              es: 'La superación de pandemias y la lucha contra el cambio climático.'
            }
          },
          {
            id: 'tc1_h_q18',
            question: '18. Was wirft Dr. Al-Khatib den Großverlagen im Kern vor?',
            options: ['Dass sie Wissen aus reinem Renditestreben künstlich verknappen', 'Dass sie schlechte Drucker verwenden', 'Dass sie keine Bücher binden können'],
            correctAnswer: 'Dass sie Wissen aus reinem Renditestreben künstlich verknappen',
            explanation: {
              en: 'Core accusation: Artificially restricting knowledge access purely for financial return maximization.',
              fa: 'محدود کردن مصنوعی دسترسی به دانش علمی بشریت صرفاً به خاطر طمع دستیابی به سودهای سرشار.',
              prs: 'انحصار و مسدود ساختن دانش فقط به خاطر پول.',
              tr: 'Sırf kâr hırsı uğruna bilginin yapay olarak kısıtlanması.',
              ar: 'التضييق المصطنع على تداول المعرفة الحيوية بدافع الجشع المالي وتحقيق الأرباح.',
              es: 'Restringir artificialmente el acceso al saber por mero afán de lucro.'
            }
          }
        ]
      },
      {
        id: 'tc1_h_item3',
        title: 'Teil 3: Akademische Kurzbeiträge (Aufgaben 19 bis 24 • Einmal hören)',
        situation: 'Kompaktvortrag: "Erosion der Biodiversität und planetare Belastungsgrenzen"',
        transcript: `Wissenschaftliche Referentin: "Verehrte Anwesende! Das Konzept der planetaren Belastungsgrenzen, 2009 von Johan Rockström und Will Steffen am Stockholm Resilience Centre entwickelt, definiert den sicheren Handlungsraum der Menschheit anhand von neun biophysikalischen Dimensionen.
Während der Klimawandel die mediale Aufmerksamkeit dominiert, befindet sich eine andere Grenze in einer weitaus dramatischeren Zone: die Integrität der Biosphäre, mithin das Artensterben. Die gegenwärtige Aussterberate von Tieren und Pflanzen liegt um den Faktor 100 bis 1.000 über der natürlichen Hintergrundrate der vergangenen Jahrmillionen. Evolutionsbiologen sprechen unverhohlen vom sechsten Massenaussterben der Erdgeschichte – dem ersten, das vollständig anthropogen, also vom Menschen verursacht ist.
Haupttreiber dieser Zerstörung sind die Zerstörung natürlicher Habitate durch industrielle Landwirtschaft, Monokulturen, der Einsatz synthetischer Pestizide sowie die Zerschneidung von Ökosystemen durch Verkehrstrassen. Bricht ein sogenanntes Keystone-Lebewesen – wie Bestäuberinsekten oder Bodenmikroorganismen – aus einer Nahrungskette weg, drohen kaskadenartige Kollapse ganzer Ökosystemdienstleistungen: von der Bestäubung unserer Nutzpflanzen bis zur Selbstreinigungskraft der Binnengewässer. Die Erhaltung der biologischen Vielfalt ist mithin kein sentimentaler Naturschutz, sondern die primäre Lebensversicherung der menschlichen Zivilisation."`,
        questions: [
          {
            id: 'tc1_h_q19',
            question: '19. Von welchem Institut wurde das Konzept der planetaren Belastungsgrenzen entwickelt?',
            options: ['Stockholm Resilience Centre (Rockström und Steffen)', 'Kaiserliches Patentamt Wien', 'Automobilclub Zürich'],
            correctAnswer: 'Stockholm Resilience Centre (Rockström und Steffen)',
            explanation: {
              en: 'Developed by Johan Rockström and Will Steffen at Stockholm Resilience Centre in 2009.',
              fa: 'مرکز تاب‌آوری استکهلم (توسط یوهان راکستروم و ویل استفن در سال ۲۰۰۹).',
              prs: 'مرکز تحقیقاتی تاب‌آوری استکهلم.',
              tr: 'Stockholm Dayanıklılık Merkezi (Stockholm Resilience Centre).',
              ar: 'مركز استوكهولم للمرونة (Stockholm Resilience Centre) عام 2009.',
              es: 'Centro de Resiliencia de Estocolmo (Rockström y Steffen).'
            }
          },
          {
            id: 'tc1_h_q20',
            question: '20. Wie viele biophysikalische Dimensionen umfasst das Rahmenwerk der planetaren Grenzen?',
            options: ['Neun biophysikalische Dimensionen', 'Genau zwei', 'Über 500 Dimensionen'],
            correctAnswer: 'Neun biophysikalische Dimensionen',
            explanation: {
              en: 'Framework: Defines 9 biophysical dimensions demarcating safe operating space.',
              fa: '۹ بعد زیست‌فیزیکی تعیین‌کننده حریم امن زیست بشریت بر روی کره زمین.',
              prs: '۹ مرز مشخص بیوفیزیکی.',
              tr: 'Dokuz biyofiziksel boyut.',
              ar: 'تسعة أبعاد بيوفيزيائية تحدد مساحة العمل الآمنة للبشرية.',
              es: 'Nueve dimensiones biofísicas.'
            }
          },
          {
            id: 'tc1_h_q21',
            question: '21. Um welchen Faktor liegt die gegenwärtige Aussterberate über der natürlichen Hintergrundrate?',
            options: ['Um den Faktor 100 bis 1.000', 'Um genau 2 Prozent', 'Sie ist niedriger als früher'],
            correctAnswer: 'Um den Faktor 100 bis 1.000',
            explanation: {
              en: 'Current extinction rate is 100 to 1,000 times higher than background evolutionary rates.',
              fa: 'نرخ فعلی نابودی گونه‌ها بین ۱۰۰ تا ۱۰۰۰ برابر فراتر از نرخ طبیعی طول تاریخ زمین است.',
              prs: 'بین ۱۰۰ تا ۱۰۰۰ برابر سریع‌تر از حالت طبیعی.',
              tr: 'Doğal arka plan oranının 100 ila 1.000 kat üzerinde.',
              ar: 'بين 100 إلى 1000 ضعف مقارنة بمعدلات الانقراض الطبيعية في تاريخ الأرض.',
              es: 'Entre 100 y 1.000 veces superior a la tasa natural de extinción de fondo.'
            }
          },
          {
            id: 'tc1_h_q22',
            question: '22. Was unterscheidet das gegenwärtige "sechste Massenaussterben" von früheren Erdzeitaltern?',
            options: ['Es ist vollständig anthropogen (durch menschliche Aktivitäten verursacht)', 'Es wird durch einen Meteoriteneinschlag ausgelöst', 'Es betrifft nur Fische'],
            correctAnswer: 'Es ist vollständig anthropogen (durch menschliche Aktivitäten verursacht)',
            explanation: {
              en: 'Uniqueness: It is the first extinction crisis driven entirely by anthropogenic causes.',
              fa: 'نخستین انقراض بزرگ در تاریخ سیاره زمین است که کاملاً منشأ انسانی (anthropogen) دارد.',
              prs: 'اولین انقراض تاریخ که کاملاً به دست انسان ایجاد شده است.',
              tr: 'Tamamen antropojenik, yani insan faaliyetlerinden kaynaklanan ilk kitlesel yok oluş olması.',
              ar: 'أنه أول انقراض جماعي في تاريخ الكوكب ينجم كلياً عن النشاط البشري (anthropogen).',
              es: 'Es el primer evento de extinción masiva de causa enteramente antropogénica.'
            }
          },
          {
            id: 'tc1_h_q23',
            question: '23. Was droht, wenn eine sogenannte "Keystone-Art" aus der Nahrungskette herausbricht?',
            options: ['Kaskadenartige Kollapse ganzer Ökosystemdienstleistungen', 'Dass die Meere sofort gefrieren', 'Dass Blumen keine Farben mehr haben'],
            correctAnswer: 'Kaskadenartige Kollapse ganzer Ökosystemdienstleistungen',
            explanation: {
              en: 'Consequence: Cascading breakdown of entire ecosystem services (pollination, water purification).',
              fa: 'فروپاشی زنجیره‌ای دومینووار در کارکردهای اکوسیستم (مانند گرده‌افشانی گیاهان و تصفیه آب‌ها).',
              prs: 'سقوط زنجیره‌ای تمام محیط زیست و تولید مواد غذایی.',
              tr: 'Ekosistem hizmetlerinde zincirleme çökmeler.',
              ar: 'انهيارات متسلسلة ومتتابعة لكافة الخدمات الحيوية لمنظومة النظم البيئية.',
              es: 'Colapsos en cascada de los servicios ecosistémicos esenciales.'
            }
          },
          {
            id: 'tc1_h_q24',
            question: '24. Wie bezeichnet die Referentin die Erhaltung der Biodiversität abschließend?',
            options: ['Als primäre Lebensversicherung der menschlichen Zivilisation', 'Als Hobby für reiche Rentner', 'Als romantische Illusion'],
            correctAnswer: 'Als primäre Lebensversicherung der menschlichen Zivilisation',
            explanation: {
              en: 'Closing: Biodiversity conservation is the primary life insurance policy of human civilization.',
              fa: 'به عنوان بیمه عمر بنیادین و اصلی تمدن بشری.',
              prs: 'بیمه عمر اساسی برای بقای تمدن انسانی.',
              tr: 'İnsan uygarlığının temel hayat sigortası.',
              ar: 'بمثابة وثيقة التأمين على الحياة الأساسية لبقاء الحضارة الإنسانية.',
              es: 'Como el seguro de vida primordial de la civilización humana.'
            }
          }
        ]
      }
    ]
  },
  schreiben: {
    title: 'Modul Schriftlicher Ausdruck (70 Minuten • Wissenschaftliche Textproduktion)',
    durationMinutes: 70,
    taskType: 'Argumentative Textproduktion mit Synopse kontroverser Thesen (ca. 350 Wörter)',
    situation: 'Sie verfassen im Rahmen eines interdisziplinären Masterseminars an einer deutschen Universität einen wissenschaftlichen Fachbeitrag zum Thema: "Die Automatisierung geistiger Arbeit durch KI-Agenten: Demokratisierung von Expertise oder Entwertung menschlicher Urteilskraft?"',
    prompt: `Verfassen Sie einen stringent gegliederten akademischen Text:
1. Einleitung: Thematische Kontextualisierung und begriffliche Schärfung.
2. Thesenwiedergabe: Rekapitulieren Sie die zwei dominierenden Positionen der Debatte (These A: Steigerung kognitiver Produktivität; These B: Degeneration kritischer Reflexionsfähigkeit).
3. Eigene Argumentation: Nehmen Sie theoriegeleitet Stellung und belegen Sie Ihre Thesen mit nachvollziehbaren Beispielen.
4. Synthese & Handlungsempfehlungen für Hochschuldidaktik und Berufsbildung.`,
    guidingPoints: [
      'Strikte Einhaltung der wissenschaftlichen Stilebene (Nominalstil, Passiv- und Passiversatzformen)',
      'Präzise Nutzung von Diskursmarkern und epistemischen Modalisierungen',
      'Differenzierte Synthese jenseits naiver Dichotomien'
    ],
    targetWordCount: 'ca. 350 Wörter',
    sampleSolution: `Die rasanten Fortschritte auf dem Gebiet autonomer generativer KI-Agenten konfrontieren Wissenschaft und Arbeitswelt mit einer epistemischen Zäsur: Während frühere Automatisierungswellen primär physische Routinetätigkeiten betrafen, dringt die algorithmische Intelligenz nunmehr in das vormalige Monopol des Menschen ein – die originäre Wissensproduktion, Diagnostik und juristische Urteilsbildung.

In der soziologischen und bildungsökonomischen Fachdebatte stehen sich zwei divergierende Denkschulen unversöhnlich gegenüber. Befürworter einer expansiven Integration postulieren eine fundamentale Demokratisierung von Spitzenexpertise. Durch den barrierefreien Zugriff auf hochgradig differenziertes Fachwissen würden Innovationszyklen drastisch beschleunigt und kognitive Ressourcen für kreative Meta-Reflexionen freigesetzt. Demgegenüber warnen Kognitionswissenschaftler vor einer sukzessiven Atrophie basaler Denkkompetenzen. Die permanente Auslagerung intellektueller Problemlösungsprozesse an opake Blackbox-Systeme berge das eminente Risiko des epistemischen Kontrollverlusts und einer schleichenden Entprofessionalisierung künftiger Akademikergenerationen.

Bei differenzierter Betrachtung greifen beide Extrempositionen zu kurz. Das entscheidende Kriterium liegt nicht in der prinzipiellen Ablehnung oder blinden Affirmation dieser Technologie, sondern in der Genese einer aufgeklärten "KI-Literalität". Wenn Studierende und Fachkräfte algorithmische Outputs lediglich konsumieren, anstatt sie methodisch zu dekonstruieren und auf inhärente Halluzinationen oder Bias-Muster abzuklopfen, degeneriert Expertenwissen zu blindem Autoritätsglauben.

Für Hochschulen und Bildungsträger resultiert hieraus das dringliche Desiderat, curriculare Standards radikal neu zu justieren. Anstelle reproduktiver Prüfungsformate müssen hermeneutische Urteilskraft, epistemische Skepsis und die Fähigkeit zur interdisziplinären Validierung ins Epizentrum akademischer Ausbildung rücken. Nur durch die bewusste Kultivierung kognitiver Souveränität kann sichergestellt werden, dass künstliche Intelligenz als emanzipatorisches Verstärkerwerkzeug menschlicher Erkenntnis fungiert und nicht zu deren intellektuellem Abbau führt.`,
    scoringCriteria: {
      en: 'Epistemic depth and academic argumentation (25%), sophisticated register and complex syntax (25%), grammatical, orthographical and lexical mastery (25%), cohesive discourse architecture (25%). Total 100%.',
      fa: 'عمق شناختی و استدلال علمی دانشگاهی (۲۵٪)، لحن فاخر علمی و نحو پیشرفته C1 (۲۵٪)، صحت گرامر، نگارش و واژگان تخصصی (۲۵٪)، ساختار پیوسته و گفتمان منسجم (۲۵٪). مجموع ۱۰۰٪.',
      prs: '۴ معیار عالی telc C1 شامل عمق علمی، اصطلاحات آکادمیک، گرامر بی‌نقص و نتیجه‌گیری.',
      tr: 'Epistemik derinlik ve akademik argümantasyon (%25), ileri düzey akademik üslup (%25), dilbilgisi ve sözcük hakimiyeti (%25), metin tutarlılığı (%25). Toplam %100.',
      ar: 'العمق المعرفي والمحاججة الأكاديمية الرصينة (25%)، الأسلوب العلمي الرفيع والتراكيب النحوية المتقدمة (25%)، السلامة اللغوية والمعجمية التامة (25%)، البناء المتماسك للنص (25%). المجموع: 100%.',
      es: 'Profundidad epistémica y argumentación académica (25%), registro académico elevado y sintaxis compleja (25%), dominio léxico y corrección gramatical (25%), cohesión discursiva (25%).'
    }
  },
  sprechen: {
    title: 'Modul Mündliche Prüfung (20 Minuten • Paarprüfung in 2 Teilen)',
    durationMinutes: 20,
    teil1: {
      name: 'Teil 1A & 1B: Akademische Präsentation & Nachfragen (ca. 3 Minuten Präsentation + 2 Minuten Fragen)',
      instruction: {
        en: 'Deliver an academic monologue on a scientific thesis. Address methodology, empirical findings, counter-arguments, and answer analytical follow-up questions from the examiners and partner.',
        fa: 'ارائه یک سخنرانی علمی دانشگاهی پیرامون یک نظریه علمی (۳ دقیقه): اشاره به روش‌شناسی، شواهد تجربی، نقدهای مطرح و پاسخ به پرسش‌های داوران و همکار.',
        prs: 'ارائه علمی در ۳ دقیقه و پاسخ به سوالات داوران.',
        tr: 'Bilimsel bir tez hakkında akademik sunum yapın ve gelen analitik soruları yanıtlayın.',
        ar: 'إلقاء عرض أكاديمي موجز حول فرضية علمية مع بيان المنهجية والأدلة ومناقشة أسئلة اللجنة والزميل.',
        es: 'Exposición académica sobre una tesis científica explicando metodología y respondiendo preguntas.'
      },
      prompts: [
        'Methodologische Verortung und Problemaufriss',
        'Strukturierte Darstellung empirischer Befunde',
        'Reflexion methodischer Limitationen',
        'Ausblick auf zukünftigen Forschungsbedarf'
      ],
      sampleResponse: 'Kandidat: "Sehr geehrte Kommission, Kollegin! In meinem Kurzvortrag analysiere ich die Hypothese, dass die Einführung agiler Arbeitsmethoden in der universitären Forschung zu einer signifikanten Beschleunigung von Drittmittelprojekten führt.\nAuf methodischer Ebene stützt sich meine Untersuchung auf eine qualitative Triangulation von Experteninterviews an fünf deutschen Exzellenzuniversitäten. Die Befunde zeichnen ein ambivalentes Bild: Während kurzzyklische Sprints die interne Kommunikation und die Softwareentwicklung spürbar optimieren, beklagen viele Postdoktoranden eine Fragmentierung ihrer Forschungszeit. Deep Work und theoriegeleitete Kontemplation geraten durch permanente Stand-up-Meetings ins Hintertreffen.\nZusammenfassend halte ich fest: Agilität ist kein Allheilmittel. Sie eignet sich hervorragend für anwendungsnahe Verbundprojekte, stößt jedoch bei erkenntnisorientierter Grundlagenforschung an funktionelle Grenzen. Ich danke für Ihre Aufmerksamkeit."'
    },
    teil2: {
      name: 'Teil 2: Wissenschaftliche Diskussion (ca. 6 Minuten)',
      instruction: {
        en: 'Debate a controversial scientific and societal topic with your partner. Evaluate opposing criteria, weigh ethical implications, and synthesize a research policy proposal.',
        fa: 'مناظره علمی با پارتنر پیرامون یک موضوع مناقشه‌برانگیز: سنجش معیارهای متقابل، تبیین پیامدهای اخلاقی و ارائه طرح سیاستی جامع.',
        prs: 'مناظره علمی دونفره درباره مسائل مهم جامعه و علم.',
        tr: 'Partnerinizle bilimsel ve etik bir tartışma yürüterek ortak bir politika önerisi geliştirin.',
        ar: 'خوض نقاش علمي معمق مع الشريك حول قضية مجتمعية وصياغة مقترح للسياسات البحثية.',
        es: 'Debate científico con la pareja examinando implicaciones éticas y consensuando propuestas.'
      },
      topicCards: [
        'Thema A: Sollten staatliche Forschungsgelder primär nach wirtschaftlicher Verwertbarkeit vergeben werden?',
        'Thema B: Ist die vollständige Offenlegung von KI-Trainingsdaten im Sinne der Reproduzierbarkeit zwingend geboten?',
        'Thema C: Sollte die Promotion in Deutschland verpflichtend durch ein strukturiertes Graduiertenkolleg erfolgen?'
      ],
      sampleResponse: 'Kandidat A: "Ich vertrete den Standpunkt, dass Steuergelder prioritär dort investiert werden müssen, wo ein direkter volkswirtschaftlicher Mehrwert für die Gesellschaft entsteht – beispielsweise in der Medizintechnik oder erneuerbaren Energien."\nKandidat B: "Dieser utilitaristischen Sichtweise möchte ich entschieden widersprechen. Die Geschichte der Naturwissenschaften beweist unmissverständlich: Bahnbrechende Entdeckungen – von der Quantenphysik bis zur CRISPR-Genschere – entstanden fast ausnahmslos aus ungebundener, neugiergetriebener Grundlagenforschung, deren praktische Anwendung zum Zeitpunkt der Entdeckung völlig unabsehbar war. Wer nur auf Verwertbarkeit schielt, sägt den Ast ab, auf dem die angewandte Forschung sitzt."\nKandidat A: "Ein berechtigter Einwand. Dennoch leben wir in einer Phase begrenzter Haushaltsmittel, die klare strategische Schwerpunktsetzungen erfordert."'
    }
  }
};
'''

with open('src/data/standardizedExamsDataTelcC1.ts', 'w', encoding='utf-8') as f:
    f.write(content)

print("Created src/data/standardizedExamsDataTelcC1.ts successfully!")
