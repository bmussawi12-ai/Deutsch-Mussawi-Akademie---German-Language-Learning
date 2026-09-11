# 1. Fix Telc B1 standard
with open('src/data/standardizedExamsDataTelcB1.ts', 'r', encoding='utf-8') as f:
    text = f.read()
text = text.replace("standard: 'telc Deutsch B1',", "standard: 'telc',")
with open('src/data/standardizedExamsDataTelcB1.ts', 'w', encoding='utf-8') as f:
    f.write(text)

# 2. Fix Telc B2 standard
with open('src/data/standardizedExamsDataTelcB2.ts', 'r', encoding='utf-8') as f:
    text = f.read()
text = text.replace("standard: 'telc Deutsch B2',", "standard: 'telc',")
with open('src/data/standardizedExamsDataTelcB2.ts', 'w', encoding='utf-8') as f:
    f.write(text)

# 3. Add teil3 to Goethe C1
with open('src/data/standardizedExamsDataGoetheC1.ts', 'r', encoding='utf-8') as f:
    text = f.read()

teil3_goethe_c1 = """    teil3: {
      name: 'Teil 3: Disputative Rückfragen der Prüfungskommission (ca. 3 Minuten)',
      instruction: {
        en: 'Defend your theses against challenging analytical counter-questions posed by the examination board.',
        fa: 'پاسخ به سوالات چالش‌برانگیز داوران و دفاع مستدل از نظریه خود در برابر نقدهای تحلیلی.',
        prs: 'پاسخ به سوالات داوران و دفاع از نظریه خود.',
        tr: 'Sınav komisyonunun eleştirel sorularına karşı tezinizi savunun.',
        ar: 'الدفاع عن الأطروحة أمام الأسئلة النقدية المعمقة للجنة التحكيم.',
        es: 'Defensa de las tesis expuestas ante las preguntas críticas del tribunal.'
      },
      planningScenario: 'Regulierung vs. Marktfreiheit im Bereich öffentlicher Infrastrukturen',
      discussionPoints: [
        'Finanzielle Tragfähigkeit staatlicher Eingriffe',
        'Gewährleistung von Chancengleichheit in ländlichen Regionen',
        'Innovationsdruck durch privatwirtschaftliche Konkurrenz'
      ],
      sampleResponse: `Prüfer: "Herr Kandidat, Sie fordern staatliche Mindeststandards. Führt das nicht unweigerlich zu bürokratischer Lähmung?"
Kandidat: "Ein berechtigter Einwand, den man keineswegs leichtfertig abtun darf. Allerdings belegen internationale Vergleiche – etwa in Skandinavien –, dass schlanke, digitalisierte Regulierungsbehörden hohe Versorgungsqualität sichern können, ohne unternehmerische Dynamik abzuwürgen."`
    }
  }
};"""

text = text.replace("""      sampleResponse: `Kandidat A: "Ich vertrete den Standpunkt...`
    }
  }
};""", """      sampleResponse: `Kandidat A: "Ich vertrete den Standpunkt...`
    },
""" + teil3_goethe_c1)

# Check if replacement succeeded, else replace the end of file
if 'Teil 3: Disputative Rückfragen' not in text:
    # Find last occurrence of '    }\n  }\n};'
    idx = text.rfind('    }\n  }\n};')
    if idx != -1:
        text = text[:idx] + '    },\n' + teil3_goethe_c1

with open('src/data/standardizedExamsDataGoetheC1.ts', 'w', encoding='utf-8') as f:
    f.write(text)

# 4. Add teil3 to Telc C1
with open('src/data/standardizedExamsDataTelcC1.ts', 'r', encoding='utf-8') as f:
    text = f.read()

teil3_telc_c1 = """    teil3: {
      name: 'Teil 3: Wissenschaftliche Replik und Vertiefungsfragen (ca. 3 Minuten)',
      instruction: {
        en: 'Address methodological objections and epistemological counter-arguments from the examiners.',
        fa: 'پاسخ به ایرادات روش‌شناختی و نقدهای معرفت‌شناختی هیئت داوران با اتکا به منابع علمی.',
        prs: 'پاسخ علمی به نقدها و سوالات عمیق داوران امتحان.',
        tr: 'Metodolojik itirazları ve epistemolojik eleştirileri yanıtlayın.',
        ar: 'الرد على الاعتراضات المنهجية والأسئلة الإبستمولوجية للجنة التحكيم.',
        es: 'Responder a las objeciones metodológicas y de rigor científico de los evaluadores.'
      },
      planningScenario: 'Kriterien für die Vergabe staatlicher Exzellenz-Forschungsgelder',
      discussionPoints: [
        'Grundlagenforschung versus anwendungsorientierte Drittmittelförderung',
        'Reproduzierbarkeit und Open-Science-Standards',
        'Förderung des wissenschaftlichen Nachwuchses'
      ],
      sampleResponse: `Prüfer: "Frau Kandidatin, wie begegnen Sie dem Vorwurf, dass Open Science die Patentierung deutscher Erfindungen gefährdet?"
Kandidat: "Dieser Aspekt ist in der Tat von hoher Relevanz. Gleichwohl zeigt die Praxis, dass Schutzfristen von 12 Monaten für Patentanmeldungen völlig ausreichen, bevor Publikationen frei zugänglich gemacht werden. Open Science und Patentschutz schließen sich keineswegs aus, sondern ergänzen sich komplementär."`
    }
  }
};"""

idx = text.rfind('    }\n  }\n};')
if idx != -1:
    text = text[:idx] + '    },\n' + teil3_telc_c1

with open('src/data/standardizedExamsDataTelcC1.ts', 'w', encoding='utf-8') as f:
    f.write(text)

print("Applied fix_final_types successfully!")
