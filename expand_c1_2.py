# -*- coding: utf-8 -*-

with open('src/data/curriculumC1_2.ts', 'r', encoding='utf-8') as f:
    text = f.read()

# Add exercises to Lesson 1:
ex_l1 = """    exercises: [
      {
        id: 'ex_c1_2_1_a',
        type: 'multiple_choice',
        instruction: {
          en: 'Identify the nominalization that accurately replaces the verbal phrase.',
          fa: 'اسم‌سازی (Nominalisierung) دقیقی که جایگزین عبارت فعلی می‌شود را انتخاب کنید.',
          prs: 'اسم‌سازی مناسب را انتخاب نمایید.',
          tr: 'Fiil öbeğinin yerini doğru şekilde alan isimleştirmeyi seçiniz.',
          ar: 'اختر الصياغة الاسمية التي تحل محل العبارة الفعلية بدقة.',
          es: 'Selecciona la nominalización que sustituye con precisión a la frase verbal.'
        },
        prompt: 'Wie lautet die Nominalisierung von: "Weil die Forscher die Daten unzureichend verifizierten"?',
        options: [
          'Wegen der unzureichenden Verifizierung der Daten durch die Forscher',
          'Wegen die unzureichende Verifizierung von Daten',
          'Infolge unzureichend Daten verifizieren von den Forschern',
          'Trotz der unzureichenden Datenverifizierung'
        ],
        correctAnswer: 'Wegen der unzureichenden Verifizierung der Daten durch die Forscher',
        explanation: {
          en: 'Preposition "Wegen" + genitive noun phrase ("der unzureichenden Verifizierung") + subjective genitive ("der Daten") + agent phrase ("durch die Forscher").',
          fa: 'حرف اضافه "Wegen" + اسم ملکی زنانه (der unzureichenden Verifizierung) + مضاف‌الیه داده‌ها (der Daten) + متمم عامل (durch die Forscher).',
          prs: 'حرف اضافه wegen همراه با صفت و اسم در حالت اضافه ملکی.',
          tr: '"Wegen" edatı ardından gelen Genitiv isim tamlaması ve "durch" ile eylemi yapan.',
          ar: 'حرف الجر "Wegen" المتبوع بتركيب اسمي مجرور بالـ Genitiv وفاعل الفعل مسبوقًا بـ "durch".',
          es: '"Wegen" con sintagma nominal en genitivo y complemento de agente con "durch".'
        }
      },
      {
        id: 'ex_c1_2_1_b',
        type: 'fill_blank',
        instruction: {
          en: 'Fill in the correct academic noun-verb collocation (Funktionsverbgefüge).',
          fa: 'فعل کمکی مناسب برای تکمیل ترکیب فعلی-اسمی (Funktionsverbgefüge) را جاگذاری کنید.',
          prs: 'فعل مناسب را در اصطلاح رسمی جاگذاری کنید.',
          tr: 'Kalıplaşmış isim-fiil birleşimini (Funktionsverbgefüge) tamamlayın.',
          ar: 'املاً الفراغ بالفعل المناسب لإتمام التركيب الفعلي الاسمي.',
          es: 'Completa con el verbo adecuado de la construcción perifrástica formal.'
        },
        prompt: 'Die Kommission wird die vorgelegten Gutachten einer eingehenden Prüfung _______.',
        options: [
          'unterziehen',
          'bringen',
          'stellen',
          'nehmen'
        ],
        correctAnswer: 'unterziehen',
        explanation: {
          en: '"etwas einer Prüfung unterziehen" (= etwas prüfen / untersuchen) is a standard C1 Funktionsverbgefüge.',
          fa: '"etwas einer Prüfung unterziehen" (= چیزی را با دقت بررسی و ارزیابی کردن) از ترکیبات همساز دانشگاهی پرکاربرد است.',
          prs: 'ترکیب einer Prüfung unterziehen به معنای بررسی دقیق نمودن است.',
          tr: '"etwas einer Prüfung unterziehen", bir şeyi titizlikle incelemek anlamına gelen C1 kalıbıdır.',
          ar: 'التركيب "etwas einer Prüfung unterziehen" يعني إخضاع الشيء لفحص وتمحيص دقيقين.',
          es: '"etwas einer Prüfung unterziehen" es una construcción formal equivalente a "examinar minuciosamente".'
        }
      },
      {
        id: 'ex_c1_2_1_c',
        type: 'sentence_reorder',
        instruction: {
          en: 'Arrange the sentence elements according to academic word order.',
          fa: 'عناصر جمله را به ترتیب نحو علمی آلمانی مرتب کنید.',
          prs: 'اجزای جمله علمی را منظم کنید.',
          tr: 'Cümleyi akademik sözdizimi kurallarına göre sıralayın.',
          ar: 'رتب عناصر الجملة حسب قواعد التراكيب الأكاديمية.',
          es: 'Ordena la oración según la sintaxis del alemán académico.'
        },
        prompt: 'Bringen Sie die Satzteile in die korrekte Reihenfolge:',
        options: [
          'Wissenschaftliche Redlichkeit verlangt',
          'die lückenlose Offenlegung',
          'aller empirischen Erhebungsdaten',
          'zur Sicherung der Replizierbarkeit.'
        ],
        correctAnswer: [
          'Wissenschaftliche Redlichkeit verlangt',
          'die lückenlose Offenlegung',
          'aller empirischen Erhebungsdaten',
          'zur Sicherung der Replizierbarkeit.'
        ],
        explanation: {
          en: 'Subject ("Wissenschaftliche Redlichkeit"), verb ("verlangt"), accusative object with genitive attribute, and final prepositional phrase.',
          fa: 'فاعل، فعل، مفعول به همراه مضاف‌الیه، و عبارت حرف اضافه‌ای هدف در پایان.',
          prs: 'ترتیب درست: فاعل، فعل، مفعول با صفت ملکی و متمم هدفی.',
          tr: 'Özne, fiil, nesne tamlaması ve amaç edat öbeği.',
          ar: 'الفاعل، الفعل، المفعول به المضاف، وشبه الجملة الدالة على الغاية.',
          es: 'Sujeto, verbo, objeto acusativo con genitivo explicativo y sintagma final.'
        }
      }
    ],"""

# Add exercises to Lesson 2:
ex_l2 = """    exercises: [
      {
        id: 'ex_c1_2_2_a',
        type: 'multiple_choice',
        instruction: {
          en: 'Select the correct Funktionsverbgefüge meaning "to consider / take into account".',
          fa: 'ترکیب فعلی-اسمی (FVG) صحیح به معنای «مد نظر قرار دادن / لحاظ کردن» را مشخص کنید.',
          prs: 'اصطلاح رسمی لحاظ کردن موضوع را انتخاب کنید.',
          tr: '"Dikkate almak / hesaba katmak" anlamındaki doğru isim-fiil kalıbını seçiniz.',
          ar: 'اختر التركيب الفعلي الاسمي الدال على "الأخذ بعين الاعتبار والاعتداد بالشيء".',
          es: 'Selecciona la construcción formal que significa "tomar en consideración".'
        },
        prompt: 'Welche Wendung bedeutet "etwas berücksichtigen"?',
        options: [
          'etwas in Betracht ziehen',
          'etwas in Aussicht stellen',
          'etwas zur Sprache bringen',
          'etwas außer Acht lassen'
        ],
        correctAnswer: 'etwas in Betracht ziehen',
        explanation: {
          en: '"etwas in Betracht ziehen" is the formal equivalent of "etwas berücksichtigen / bedenken". ("außer Acht lassen" means to disregard).',
          fa: '"etwas in Betracht ziehen" معادل رسمی berücksichtigen (در نظر گرفتن) است. (برعکس آن außer Acht lassen به معنای نادیده گرفتن است).',
          prs: 'ترکیب in Betracht ziehen یعنی ملحوظ داشتن و در نظر گرفتن.',
          tr: '"etwas in Betracht ziehen", bir şeyi dikkate almak / hesaba katmak demektir.',
          ar: 'التركيب "etwas in Betracht ziehen" يعني أخذ الأمر في الحسبان والاعتبار.',
          es: '"etwas in Betracht ziehen" equivale formalmente a "tener en cuenta / considerar".'
        }
      },
      {
        id: 'ex_c1_2_2_b',
        type: 'fill_blank',
        instruction: {
          en: 'Fill in the correct preposition for the corporate governance idiom.',
          fa: 'حرف اضافه مناسب برای اصطلاح حکمرانی شرکتی را قرار دهید.',
          prs: 'حرف اضافه مناسب را جاگذاری نمایید.',
          tr: 'Uygun edatı yerleştiriniz.',
          ar: 'ضع حرف الجر المناسب في السياق القانوني المؤسسي.',
          es: 'Inserta la preposición adecuada en el contexto mercantil.'
        },
        prompt: 'Der Aufsichtsrat zog den Vorstand _______ die gravierenden Bilanzfehler zur Rechenschaft.',
        options: [
          'für',
          'über',
          'an',
          'gegen'
        ],
        correctAnswer: 'für',
        explanation: {
          en: '"jemanden für etwas zur Rechenschaft ziehen" is the elevated collocation meaning "to hold someone accountable for something".',
          fa: 'ترکیب رسمی "jemanden für etwas zur Rechenschaft ziehen" یعنی کسی را بابت کاری بازخواست و پاسخگو کردن.',
          prs: 'ترکیب zur Rechenschaft ziehen یعنی مؤاخذه و بازخواست کردن مسلکی.',
          tr: '"jemanden für etwas zur Rechenschaft ziehen", birini bir şeyden ötürü hesaba çekmek / sorumlu tutmaktır.',
          ar: 'التركيب "jemanden für etwas zur Rechenschaft ziehen" يعني محاسبة الشخص ومساءلته قانونيًا عن خطئه.',
          es: '"jemanden für etwas zur Rechenschaft ziehen" significa "exigir responsabilidades / pedir cuentas a alguien por algo".'
        }
      },
      {
        id: 'ex_c1_2_2_c',
        type: 'sentence_reorder',
        instruction: {
          en: 'Form an academic business sentence regarding supply chain compliance.',
          fa: 'جمله تجاری-حقوقی درباره قانون زنجیره تأمین را مرتب کنید.',
          prs: 'جمله را به ترتیب معیاری مرتب کنید.',
          tr: 'Tedarik zinciri mevzuatına dair cümleyi sıralayın.',
          ar: 'رتب الجملة الخاصة بالامتثال لقانون سلاسل الإمداد.',
          es: 'Ordena la oración empresarial sobre el cumplimiento de la cadena de suministro.'
        },
        prompt: 'Bringen Sie die Satzglieder in die korrekte Reihenfolge:',
        options: [
          'Unternehmen tragen die Verantwortung',
          'für die lückenlose Einhaltung',
          'ökologischer und sozialer Standards',
          'entlang globaler Lieferketten.'
        ],
        correctAnswer: [
          'Unternehmen tragen die Verantwortung',
          'für die lückenlose Einhaltung',
          'ökologischer und sozialer Standards',
          'entlang globaler Lieferketten.'
        ],
        explanation: {
          en: 'Subject and verb with FVG object ("tragen die Verantwortung"), prepositional phrase ("für die lückenlose Einhaltung"), genitive attribute, and local prepositional modifier ("entlang globaler Lieferketten").',
          fa: 'فاعل و فعل همراه با مفعول اصطلاحی، متمم حرف اضافه‌ای für، مضاف‌الیه و متمم entlang.',
          prs: 'ترتیب درست کلمات در جمله رسمی شرکتی.',
          tr: 'Özne, fiil öbeği, edat tamlaması ve yer belirteci.',
          ar: 'الفاعل، الفعل، المفعول به، المتمم المجرور بحرف الجر، ومتمم الامتداد المكاني.',
          es: 'Sujeto, predicado con colocación formal, complemento preposicional con genitivo y locución adverbial.'
        }
      }
    ],"""

# Add exercises to Lesson 3:
ex_l3 = """    exercises: [
      {
        id: 'ex_c1_2_3_a',
        type: 'multiple_choice',
        instruction: {
          en: 'Identify the sentence containing a passive replacement with "sein + zu + Infinitiv" expressing necessity.',
          fa: 'جمله‌ای که دارای ساختار جانشین مجهول "sein + zu + مصدر" برای بیان الزام است را انتخاب کنید.',
          prs: 'ساختار جانشین مجهول دال بر ضرورت را پیدا کنید.',
          tr: 'Zorunluluk bildiren "sein + zu + mastar" yapısındaki cümleyi bulunuz.',
          ar: 'حدد الجملة المتضمنة بديلاً للمجهول بصيغة "sein + zu + المصدر" المفيدة للوجوب.',
          es: 'Identifica la oración con la alternativa pasiva "sein + zu + infinitivo" que expresa necesidad.'
        },
        prompt: 'Welcher Satz drückt eine unbedingte Notwendigkeit im Passiversatz aus?',
        options: [
          'Die ethischen Richtlinien sind von allen Medienakteuren ausnahmslos einzuhalten.',
          'Die ethischen Richtlinien lassen sich von allen Akteuren einhalten.',
          'Die ethischen Richtlinien sind leicht einzuhalten.',
          'Die ethischen Richtlinien haben sich als einhaltbar erwiesen.'
        ],
        correctAnswer: 'Die ethischen Richtlinien sind von allen Medienakteuren ausnahmslos einzuhalten.',
        explanation: {
          en: '"sein + zu + Infinitiv" without qualifying evaluative adverbs ("leicht/schwer") denotes necessity ("müssen eingehalten werden").',
          fa: '"sein + zu + مصدر" بدون قیدهای سهولت/دشواری (مثل leicht/schwer) بیانگر الزام قطعی ("باید رعایت شوند") است.',
          prs: 'ساختار sein + zu + مصدر بدون قید آسان یا مشکل نشان‌دهنده وجوب و حتمیت است.',
          tr: '"sein + zu + mastar", "leicht/schwer" gibi niteleyiciler olmadan kullanıldığında zorunluluk ("müssen") bildirir.',
          ar: 'التركيب "sein + zu + المصدر" دون اقترانه بظروف التيسير أو التعسير يفيد الوجوب الحتمي ("يجب الالتزام بها").',
          es: '"sein + zu + infinitivo" sin modificadores como "leicht/schwer" expresa obligación estricta ("deben cumplirse").'
        }
      },
      {
        id: 'ex_c1_2_3_b',
        type: 'fill_blank',
        instruction: {
          en: 'Insert the appropriate hermeneutic academic noun.',
          fa: 'اسم تخصصی هرمنوتیک علمی مناسب را در جای خالی قرار دهید.',
          prs: 'اصطلاح مناسب تاویل متن را بنویسید.',
          tr: 'Hermeneutik bağlamına uygun akademik ismi yerleştiriniz.',
          ar: 'ضع الاسم الأكاديمي الدال على التفسير والتأويل النصي العميق.',
          es: 'Inserta el sustantivo académico adecuado en el contexto hermenéutico.'
        },
        prompt: 'Die differenzierte _______ literarischer Texte erfordert ein tiefes historisches und philosophisches Problembewusstsein.',
        options: [
          'Exegese',
          'Ablenkung',
          'Verschleierung',
          'Nachahmung'
        ],
        correctAnswer: 'Exegese',
        explanation: {
          en: '"Exegese" (critical textual analysis / interpretation) is the formal academic term for in-depth hermeneutic textual interrogation.',
          fa: '"Exegese" (تفسیر و تأویل انتقادی و موشکافانه متن) واژه‌ای فاخر و دانشگاهی برای تحلیل عمیق متون است.',
          prs: 'کلمه Exegese به معنای تفسیر عمیق و تخصصی متن می‌باشد.',
          tr: '"Exegese", metinlerin derinlemesine eleştirel yorumlanması ve tefsiri anlamına gelen akademik bir terimdir.',
          ar: 'المصطلح "Exegese" يعني التفسير النقدي والتأويل العميق للنصوص.',
          es: '"Exégesis" es el término erudito para el análisis interpretativo y crítico profundo de textos.'
        }
      },
      {
        id: 'ex_c1_2_3_c',
        type: 'sentence_reorder',
        instruction: {
          en: 'Form an academic sentence on media criticism.',
          fa: 'جمله نقد رسانه را به ترتیب دقیق دانشگاهی مرتب کنید.',
          prs: 'جمله نقد رسانه‌ای را مرتب سازید.',
          tr: 'Medya eleştirisi cümlesini kurallı sözdizimiyle sıralayın.',
          ar: 'رتب جملة النقد الإعلامي وفق النسق الأكاديمي الرفيع.',
          es: 'Ordena la oración de crítica mediática con sintaxis culta.'
        },
        prompt: 'Bringen Sie die Satzteile in die korrekte Reihenfolge:',
        options: [
          'Kritische Medienkompetenz befähigt',
          'Bürgerinnen und Bürger',
          'zur Dekonstruktion subtiler',
          'manipulativer Framing-Strategien.'
        ],
        correctAnswer: [
          'Kritische Medienkompetenz befähigt',
          'Bürgerinnen und Bürger',
          'zur Dekonstruktion subtiler',
          'manipulativer Framing-Strategien.'
        ],
        explanation: {
          en: 'Subject, transitive verb ("befähigt"), accusative personal object ("Bürgerinnen und Bürger"), and prepositional modifier with genitive attribute ("zur Dekonstruktion subtiler manipulativer Framing-Strategien").',
          fa: 'فاعل، فعل متعدی، مفعول انسانی در حالت رایی، و متمم حرف اضافه‌ای zur همراه با صفت‌های ملکی.',
          prs: 'ترتیب درست: فاعل، فعل، مفعول و متمم هدف با صفات توصیفی.',
          tr: 'Özne, fiil, nesne ve "zur" edatlı tamlama.',
          ar: 'الفاعل، الفعل المتعدي، المفعول به، ومتمم الجر الدال على التمكين مع النعوت المضافة.',
          es: 'Sujeto, verbo ("befähigt"), objeto directo y complemento de régimen con genitivo.'
        }
      }
    ],"""

# Insert exercises before closing braces of Lektion 1, 2, 3
# In curriculumC1_2.ts:
# For Lesson 1: find where Lesson 1 ends, right after sectionE
idx_l1 = text.find("id: 'c1_2_lek2'")
if idx_l1 != -1:
    # Look backwards from idx_l1 for '  },'
    insert_pos = text.rfind('  },', 0, idx_l1)
    if insert_pos != -1:
        text = text[:insert_pos] + '\n' + ex_l1 + '\n' + text[insert_pos:]

idx_l2 = text.find("id: 'c1_2_lek3'")
if idx_l2 != -1:
    insert_pos = text.rfind('  },', 0, idx_l2)
    if insert_pos != -1:
        text = text[:insert_pos] + '\n' + ex_l2 + '\n' + text[insert_pos:]

idx_end = text.rfind('];')
if idx_end != -1:
    # Insert ex_l3 before the last '  }' of lesson 3
    insert_pos = text.rfind('  }', 0, idx_end)
    if insert_pos != -1:
        text = text[:insert_pos] + '\n' + ex_l3 + '\n' + text[insert_pos:]

with open('src/data/curriculumC1_2.ts', 'w', encoding='utf-8') as f:
    f.write(text)

print("Added exercises to curriculumC1_2.ts successfully!")
