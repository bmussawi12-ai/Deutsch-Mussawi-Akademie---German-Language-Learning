import re

with open('src/data/standardizedExamsDataB2_C1.ts', 'r') as f:
    content = f.read()

# 1. Complete B2 Lesen questions 21-30
b2_l_extra = """          {
            id: 'b2_l_q21',
            question: '21. Welches finanzielle Gesamtvolumen würde das bedingungslose Grundeinkommen laut Kritikern jährlich erfordern?',
            options: ['a) Rund 80 Milliarden Euro', 'b) Rund 800 Milliarden Euro', 'c) Circa 120 Milliarden Euro'],
            correctAnswer: 'b) Rund 800 Milliarden Euro',
            explanation: {
              en: 'Estimated budget: "... jährliche Staatsausgaben von rund 800 Milliarden Euro...".',
              fa: 'بودجه سالانه مورد نیاز بر اساس برآورد منتقدان حدود ۸۰۰ میلیارد یورو خواهد بود.',
              prs: 'حدود ۸۰۰ میلیارد یورو در سال مصرف خواهد داشت.',
              tr: 'Eleştirmenlere göre yıllık yaklaşık 800 milyar Euro bütçe gerekmektedir.',
              ar: 'الميزانية التقديرية السنوية تبلغ حوالي 800 مليار يورو وفقاً للمنتقدين.',
              es: 'Un volumen presupuestario anual de unos 800.000 millones de euros.'
            }
          },
          {
            id: 'b2_l_q22',
            question: '22. Welche Befürchtung bezüglich Geringqualifizierter formulieren Arbeitsmarktökonomen?',
            options: ['a) Sie fordern überhöhte Gehälter', 'b) Sie könnten dem Arbeitsmarkt dauerhaft fernbleiben', 'c) Sie wandern massenhaft ins Ausland ab'],
            correctAnswer: 'b) Sie könnten dem Arbeitsmarkt dauerhaft fernbleiben',
            explanation: {
              en: 'Risk identified: "... Risiko, dass Geringqualifizierte dem Arbeitsmarkt dauerhaft fernbleiben."',
              fa: 'خطر اینکه افراد کم‌مهارت برای همیشه از بازار کار دور بمانند.',
              prs: 'خطر دور ماندن دائمی کارگران کم‌مهارت از بازار کار.',
              tr: 'Düşük vasıflı çalışanların iş gücü piyasasından kalıcı olarak kopma riski.',
              ar: 'مخاطر بقاء العمالة ذات المهارات المحدودة خارج سوق العمل بشكل دائم.',
              es: 'Peligro de que los trabajadores con baja cualificación se aparten permanentemente del mercado laboral.'
            }
          },
          {
            id: 'b2_l_q23',
            question: '23. Welches bürgerschaftliche Engagement könnte nach Ansicht der Befürworter stimuliert werden?',
            options: ['a) Ehrenamtliches Engagement und gemeinnützige Gründungen', 'b) Spekulation an internationalen Finanzmärkten', 'c) Frühzeitiger Ruhestand aller Erwerbstätigen'],
            correctAnswer: 'a) Ehrenamtliches Engagement und gemeinnützige Gründungen',
            explanation: {
              en: 'Benefits highlighted: "... fördere ehrenamtliches Engagement sowie kreative Gründungen."',
              fa: 'تقویت فعالیت‌های داوطلبانه، مدنی و کارآفرینی‌های خلاقانه و عام‌المنفعه.',
              prs: 'تقویت کارهای رضاکارانه و تشبثات مفید اجتماعی.',
              tr: 'Gönüllülük faaliyetleri ve yaratıcı girişimlerin teşvik edilmesi.',
              ar: 'تشجيع العمل التطوعي وتأسيس المبادرات والشركات الإبداعية غير الربحية.',
              es: 'Estímulo al voluntariado y a la fundación de iniciativas creativas.'
            }
          },
          {
            id: 'b2_l_q24',
            question: '24. Welche unmittelbaren finanzpolitischen Konsequenzen drohen laut Kritikern des Modells?',
            options: ['a) Senkung der Unternehmenssteuern', 'b) Drastische Steuererhöhungen oder Abbau bestehender Sozialsysteme', 'c) Vollständige Abschaffung des Rentensystems'],
            correctAnswer: 'b) Drastische Steuererhöhungen oder Abbau bestehender Sozialsysteme',
            explanation: {
              en: 'Fiscal fallout: "... zwangsläufig drastische Steuererhöhungen oder den Rückbau bewährter Sozialsysteme nach sich zöge."',
              fa: 'افزایش شدید مالیات‌ها یا تضعیف و کاهش چتر حمایت‌های اجتماعی فعلی.',
              prs: 'بلند رفتن شدید مالیات یا کاهش خدمات فعلی سوسیال.',
              tr: 'Kaçınılmaz vergi artışları veya yerleşik sosyal sistemlerin daraltılması.',
              ar: 'زيادات ضريبية حادة أو تقليص مظلة الحماية الاجتماعية القائمة.',
              es: 'Drásticas subidas fiscales o desmantelamiento de los sistemas sociales establecidos.'
            }
          }
        ]
      },
      {
        title: 'Teil 5: Unternehmensrichtlinie zur IT-Sicherheit und mobiler Telearbeit (Aufgaben 25 bis 30)',
        sourceType: 'Betriebsvereinbarung Nr. 4/2024 einer deutschen Aktiengesellschaft',
        body: 'Präambel und Bestimmungen zur mobilen Arbeit:\n1. Berechtigung: Mobile Telearbeit darf nur nach schriftlicher Abstimmung mit dem jeweiligen Teamleiter im Umfang von maximal 40 Prozent der wöchentlichen Arbeitszeit ausgeübt werden.\n2. Datensicherheit: Sämtliche dienstlichen Kommunikationsprozesse und Datenverarbeitungen dürfen ausnahmslos nur über das betriebseigene Virtual Private Network (VPN) sowie auf den vom Arbeitgeber bereitgestellten und zertifizierten Hardware-Endgeräten erfolgen. Die Speicherung sensibler Kundendaten auf privaten Speichermedien oder USB-Sticks ist unter Androhung arbeitsrechtlicher Konsequenzen strikt untersagt.\n3. Erreichbarkeit: Beschäftigte im Homeoffice haben während der festgelegten Kernarbeitszeiten (werktags zwischen 09:00 und 15:00 Uhr) über die internen Kollaborationstools (Chat, Telefonie) uneingeschränkt ansprechbar zu sein. Außerhalb dieser Kernzeit sowie an Sonn- und Feiertagen gilt das Recht auf Nichterreichbarkeit (Digital Detox), um die Erholungszeiten zu gewährleisten.\n4. Ergonomie und Unfallschutz: Der mobile Arbeitsplatz muss den geltenden ergonomischen Mindeststandards genügen. Unfälle im häuslichen Umfeld während der vereinbarten Arbeitszeit fallen unter den gesetzlichen Unfallversicherungsschutz, sofern sie im unmittelbaren sachlichen Zusammenhang mit der beruflichen Tätigkeit stehen.',
        questions: [
          {
            id: 'b2_l_q25',
            question: '25. Wie viel Prozent der wöchentlichen Arbeitszeit darf maximal als mobile Telearbeit geleistet werden?',
            options: ['a) Maximal 20 Prozent', 'b) Maximal 40 Prozent', 'c) Bis zu 80 Prozent'],
            correctAnswer: 'b) Maximal 40 Prozent',
            explanation: {
              en: 'Clause 1: "... im Umfang von maximal 40 Prozent der wöchentlichen Arbeitszeit".',
              fa: 'بند ۱: حداکثر تا ۴۰ درصد ساعت کاری هفتگی مجاز به انجام کار از راه دور هستند.',
              prs: 'حداکثر تا ۴۰ فیصد کار هفتگی در خانه مجاز است.',
              tr: 'Haftalık çalışma süresinin en fazla %40\'ı oranında uzaktan çalışılabilir.',
              ar: 'الحد الأقصى للعمل عن بُعد هو 40 بالمئة من ساعات العمل الأسبوعية.',
              es: 'Como máximo un 40 por ciento de la jornada laboral semanal.'
            }
          },
          {
            id: 'b2_l_q26',
            question: '26. Welche technische Voraussetzung ist für die Datenverarbeitung im Homeoffice zwingend vorgeschrieben?',
            options: ['a) Die ausschließliche Nutzung des betriebseigenen VPN auf zertifizierten Firmengeräten', 'b) Die Verwendung privater USB-Sticks', 'c) Eine unverschlüsselte WLAN-Verbindung'],
            correctAnswer: 'a) Die ausschließliche Nutzung des betriebseigenen VPN auf zertifizierten Firmengeräten',
            explanation: {
              en: 'Clause 2: "... nur über das betriebseigene Virtual Private Network (VPN) sowie auf den vom Arbeitgeber bereitgestellten Geräten".',
              fa: 'الزام به اتصال انحصاری از طریق VPN سازمانی روی لپ‌تاپ‌های رسمی شرکت.',
              prs: 'تنها استفاده از VPN شرکت در وسایل رسمی کمپانی.',
              tr: 'Yalnızca şirkete ait VPN ve sertifikalı şirket cihazları kullanılmalıdır.',
              ar: 'استخدام شبكة VPN الخاصة بالشركة حصراً وعلى الأجهزة المعتمدة منها.',
              es: 'Uso preceptivo de la VPN corporativa en dispositivos certificados por la empresa.'
            }
          },
          {
            id: 'b2_l_q27',
            question: '27. Was geschieht, wenn Mitarbeiter sensible Firmendaten auf privaten Datenträgern abspeichern?',
            options: ['a) Sie erhalten eine Bonuszahlung', 'b) Es drohen arbeitsrechtliche Konsequenzen', 'c) Es ist nach Absprache gestattet'],
            correctAnswer: 'b) Es drohen arbeitsrechtliche Konsequenzen',
            explanation: {
              en: 'Clause 2: "... unter Androhung arbeitsrechtlicher Konsequenzen strikt untersagt."',
              fa: 'ذخیره روی حافظه‌های شخصی اکیداً ممنوع بوده و مشمول پیگرد و اخطار قانون کار است.',
              prs: 'عواقب قانونی کارمندی را در پی دارد.',
              tr: 'İş hukuku kapsamında disiplin ve yaptırım sonuçları doğurur.',
              ar: 'يعرض الموظف للمساءلة وعواقب قانون العمل الصارمة.',
              es: 'Conlleva consecuencias y sanciones disciplinarias laborales.'
            }
          },
          {
            id: 'b2_l_q28',
            question: '28. Zu welchen Uhrzeiten gilt die verbindliche Kernarbeitszeit mit garantierter Ansprechbarkeit?',
            options: ['a) Rund um die Uhr', 'b) Werktags zwischen 09:00 und 15:00 Uhr', 'c) Nur am Wochenende'],
            correctAnswer: 'b) Werktags zwischen 09:00 und 15:00 Uhr',
            explanation: {
              en: 'Clause 3: "... während der festgelegten Kernarbeitszeiten (werktags zwischen 09:00 und 15:00 Uhr)".',
              fa: 'ساعات کاری الزامی هسته: روزهای کاری اداری بین ساعت ۹:۰۰ الی ۱۵:۰۰.',
              prs: 'ساعت ۹ تا ۳ بعد از ظهر در روزهای اداری.',
              tr: 'İş günlerinde saat 09:00 ile 15:00 arasındaki çekirdek çalışma süresi.',
              ar: 'أيام العمل الرسمية بين الساعة التاسعة صباحاً والثالثة عصراً.',
              es: 'Días laborables entre las 09:00 y las 15:00 horas.'
            }
          },
          {
            id: 'b2_l_q29',
            question: '29. Was regelt die Richtlinie bezüglich des Kontakts außerhalb der Kernarbeitszeiten?',
            options: ['a) Ein Recht auf Nichterreichbarkeit (Digital Detox)', 'b) Pflicht zur ständigen Rufbereitschaft bis 22 Uhr', 'c) Verbot jeglicher Freizeitgestaltung'],
            correctAnswer: 'a) Ein Recht auf Nichterreichbarkeit (Digital Detox)',
            explanation: {
              en: 'Clause 3: "... gilt das Recht auf Nichterreichbarkeit (Digital Detox), um die Erholungszeiten zu gewährleisten."',
              fa: 'حق قطع ارتباط دیجیتال و عدم پاسخگویی (Digital Detox) برای تضمین استراحت.',
              prs: 'حق در دسترس نبودن بعد از وقت رسمی کار.',
              tr: 'Dinlenme süresini güvence altına alan ulaşılmama hakkı (Digital Detox).',
              ar: 'الحق في عدم التواصل الرقمي (Digital Detox) لضمان فترات الراحة والاستجمام.',
              es: 'Derecho a la desconexión digital para garantizar los tiempos de descanso.'
            }
          },
          {
            id: 'b2_l_q30',
            question: '30. Unter welchen Bedingungen greift der gesetzliche Unfallversicherungsschutz im Homeoffice?',
            options: ['a) Bei allen privaten Haushaltsunfällen', 'b) Wenn der Unfall in unmittelbarem sachlichem Zusammenhang mit der beruflichen Tätigkeit steht', 'c) Ausschließlich im Firmengebäude'],
            correctAnswer: 'b) Wenn der Unfall in unmittelbarem sachlichem Zusammenhang mit der beruflichen Tätigkeit steht',
            explanation: {
              en: 'Clause 4: "... sofern sie im unmittelbaren sachlichen Zusammenhang mit der beruflichen Tätigkeit stehen."',
              fa: 'بیمه حوادث کار تنها در صورتی حادثه منزل را پوشش می‌دهد که ارتباط موضوعی مستقیم با کار داشته باشد.',
              prs: 'در صورتی که ارتباط مستقیم به کار و وظیفه داشته باشد.',
              tr: 'Yalnızca mesleki faaliyetle doğrudan ve nesnel bir bağlantı varsa geçerlidir.',
              ar: 'شريطة أن يكون الحادث مرتبطاً سببياً ومباشراً بالنشاط المهني.',
              es: 'Siempre que el percance guarde relación causal directa con la actividad profesional.'
            }
          }
        ]
      }"""

# Replace b2_l_q20 closing to add questions 21-30
target_l20 = """          {
            id: 'b2_l_q20',
            question: '20. Welche finanzielle Belastung befürchten Ökonomen bei einem Grundeinkommen von 1.200 Euro?',
            options: ['a) Rund 80 Milliarden Euro', 'b) Jährliche Staatsausgaben von rund 800 Milliarden Euro', 'c) Keine zusätzlichen Ausgaben'],
            correctAnswer: 'b) Jährliche Staatsausgaben von rund 800 Milliarden Euro',
            explanation: {
              en: 'Estimated cost: "... jährliche Staatsausgaben von rund 800 Milliarden Euro".',
              fa: 'هزینه سرسام‌آور سالانه حدود ۸۰۰ میلیارد یورو برای دولت.',
              prs: 'حدود ۸۰۰ میلیارد یورو در سال.',
              tr: 'Yıllık yaklaşık 800 milyar Euro devlet harcaması öngörülmektedir.',
              ar: 'نفقات حكومية سنوية تقدر بنحو 800 مليار يورو.',
              es: 'Gastos públicos anuales de unos 800.000 millones de euros.'
            }
          }
        ]
      }"""

if target_l20 in content:
    replacement_l = target_l20.replace("        ]\n      }", "") + ",\n" + b2_l_extra
    content = content.replace(target_l20, replacement_l)
    print("Replaced B2 Lesen 21-30 successfully")
else:
    print("Could not find target_l20")

with open('src/data/standardizedExamsDataB2_C1.ts', 'w') as f:
    f.write(content)
