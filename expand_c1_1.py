# -*- coding: utf-8 -*-
import json

# Let's inspect curriculumC1_1.ts
with open('src/data/curriculumC1_1.ts', 'r', encoding='utf-8') as f:
    orig = f.read()

# Additional exercises for lesson 1, 2, 3
more_ex_l1 = """
      {
        id: 'ex_c1_1_1_b',
        type: 'multiple_choice',
        instruction: {
          en: 'Identify the correct extended participial attribute.',
          fa: 'صفت وصفی مفعولی گسترش‌یافته (Partizipialattribut) صحیح را انتخاب کنید.',
          prs: 'صفت فعلی وصفی گسترش‌یافته درست را برگزینید.',
          tr: 'Doğru genişletilmiş sıfat tamlamasını seçin.',
          ar: 'اختر النعت الفعلي الممتد الصحيح.',
          es: 'Selecciona el atributo participial extendido correcto.'
        },
        prompt: 'Welcher Satz enthält ein korrekt gebildetes erweitertes Partizipialattribut?',
        options: [
          'Die von der renommierten Expertenkommission vorgelegten Forschungsergebnisse wurden publiziert.',
          'Die vorgelegten Forschungsergebnisse von der renommierten Expertenkommission wurden publiziert.',
          'Die Expertenkommission von Forschungsergebnissen vorgelegte publizierte Ergebnisse.',
          'Die publizierten Ergebnisse von Expertenkommission vorgelegt wurden.'
        ],
        correctAnswer: 'Die von der renommierten Expertenkommission vorgelegten Forschungsergebnisse wurden publiziert.',
        explanation: {
          en: 'The extended participial attribute encloses its modifiers between the article "Die" and the participle "vorgelegten", qualifying "Forschungsergebnisse".',
          fa: 'در صفت وصفی گسترش‌یافته، تمام توضیحات میان آرتیکل (Die) و صفت فاعلی/مفعولی (vorgelegten) قبل از اسم هسته قرار می‌گیرند.',
          prs: 'اجزای توصیفی در بین آرتیکل و صفت فعلی قرار می‌گیرند.',
          tr: 'Genişletilmiş sıfat tamlamasında belirteçler artikel ile sıfat-fiil arasına sıkıştırılır.',
          ar: 'في النعت الفعلي الممتد، توضع التتمات بين أداة التعريف واسم الفاعل/المفعول قبل الاسم الموصوف.',
          es: 'El atributo participial extendido sitúa todos sus complementos entre el artículo y el participio.'
        }
      },
      {
        id: 'ex_c1_1_1_c',
        type: 'fill_blank',
        instruction: {
          en: 'Fill in the appropriate academic connector.',
          fa: 'حرف ربط گفتمانی علمی مناسب را در جای خالی قرار دهید.',
          prs: 'رابط گفتمانی مناسب را جاگذاری نمایید.',
          tr: 'Boşluğa uygun akademik bağlacı yerleştiriniz.',
          ar: 'املاً الفراغ برابط الجدال الأكاديمي المناسب.',
          es: 'Completa con el conector académico adecuado.'
        },
        prompt: 'Die Simulationen zeigen drastische Erwärmungstrends; _______ muss die Aussagekraft der Klimamodelle empirisch verifiziert werden.',
        options: [
          'gleichwohl',
          'weil',
          'denn',
          'obwohl'
        ],
        correctAnswer: 'gleichwohl',
        explanation: {
          en: '"Gleichwohl" (nevertheless/nonetheless) introduces an adversative concessive assertion in elevated academic register.',
          fa: '"gleichwohl" (با این همه / با وجود این) یک قید ربط تقابلی در سطح عالی آکادمیک است و بعد از سمیکالن در موقعیت پیشافعل می‌نشیند.',
          prs: 'کلمه gleichwohl برای بیان تضاد و تناقض منطقی در متون سطح بالای علمی به کار می‌رود.',
          tr: '"Gleichwohl" üst düzey akademik Almancada "bununla birlikte / yine de" anlamında karşıtlık ifade eder.',
          ar: 'الرابط "gleichwohl" (مع ذلك / بيد أن) يربط جملتين متعارضتين بأسلوب أكاديمي رفيع.',
          es: '"Gleichwohl" (no obstante/a pesar de ello) introduce una concesión adversativa en registro culto.'
        }
      },
      {
        id: 'ex_c1_1_1_d',
        type: 'sentence_reorder',
        instruction: {
          en: 'Arrange the parts into a grammatically coherent academic sentence.',
          fa: 'بخش‌های جمله را به یک جمله علمی دانشگاهی صحیح و شیوا تبدیل کنید.',
          prs: 'اجزای جمله را به ترتیب درست نحوی مرتب نمایید.',
          tr: 'Kelimeleri kurallı bir akademik cümleye dönüştürünüz.',
          ar: 'رتب الكلمات لتكوين جملة علمية رصينة نحويًا.',
          es: 'Ordena los segmentos para formar una oración académica correcta.'
        },
        prompt: 'Bringen Sie die Satzteile in die korrekte syntaktische Reihenfolge:',
        options: [
          'In Anbetracht der Fakten',
          'ist eine Neuausrichtung',
          'der Forschungspolitik',
          'unumgänglich.'
        ],
        correctAnswer: [
          'In Anbetracht der Fakten',
          'ist eine Neuausrichtung',
          'der Forschungspolitik',
          'unumgänglich.'
        ],
        explanation: {
          en: 'Standard academic German syntax: Fronted prepositional phrase (In Anbetracht...), V2 finite verb (ist), subject with genitive attribute (eine Neuausrichtung der Forschungspolitik), predicate adjective (unumgänglich).',
          fa: 'نحو استاندارد دانشگاهی: عبارت حرف اضافه‌ای در جایگاه نخست، فعل در جایگاه دوم، فاعل به همراه صفت ملکی، و صفت گزاره در پایان.',
          prs: 'ترتیب درست نحوی: عبارت حرف اضافه، فعل، فاعل و صفت گزاره‌ای.',
          tr: 'Standart akademik diziliş: Başta edat öbeği, 2. pozisyonda fiil, ardından özne ve yüklem sıfatı.',
          ar: 'الترتيب النحوي الأكاديمي: شبه الجملة في الصدارة، يليه الفعل في الموقع الثاني، ثم الفاعل والمتمم.',
          es: 'Sintaxis académica: sintagma preposicional inicial, verbo en posición 2, sujeto y adjetivo predicativo.'
        }
      }"""

print("More exercises ready for lesson 1")
