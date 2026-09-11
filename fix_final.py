with open('src/data/standardizedExamsDataTelcC1.ts', 'r', encoding='utf-8') as f:
    text = f.read()

# Fix the two Turkish apostrophes
text = text.replace("tr: 'Güney Fransa'da.',", "tr: 'Güney Fransa\\'da.',")
text = text.replace("tr: '%35'in üzerinde kar marjı.',", "tr: '%35\\'in üzerinde kar marjı.',")

# Fix sampleResponse multiline single quotes to backticks
text = text.replace(
"""      sampleResponse: 'Kandidat: "Sehr geehrte Kommission, Kollegin! In meinem Kurzvortrag analysiere ich die Hypothese, dass die Einführung agiler Arbeitsmethoden in der universitären Forschung zu einer signifikanten Beschleunigung von Drittmittelprojekten führt.
Auf methodischer Ebene stützt sich meine Untersuchung auf eine qualitative Triangulation von Experteninterviews an fünf deutschen Exzellenzuniversitäten. Die Befunde zeichnen ein ambivalentes Bild: Während kurzzyklische Sprints die interne Kommunikation und die Softwareentwicklung spürbar optimieren, beklagen viele Postdoktoranden eine Fragmentierung ihrer Forschungszeit. Deep Work und theoriegeleitete Kontemplation geraten durch permanente Stand-up-Meetings ins Hintertreffen.
Zusammenfassend halte ich fest: Agilität ist kein Allheilmittel. Sie eignet sich hervorragend für anwendungsnahe Verbundprojekte, stößt jedoch bei erkenntnisorientierter Grundlagenforschung an funktionelle Grenzen. Ich danke für Ihre Aufmerksamkeit."'""",
"""      sampleResponse: `Kandidat: "Sehr geehrte Kommission, Kollegin! In meinem Kurzvortrag analysiere ich die Hypothese, dass die Einführung agiler Arbeitsmethoden in der universitären Forschung zu einer signifikanten Beschleunigung von Drittmittelprojekten führt.
Auf methodischer Ebene stützt sich meine Untersuchung auf eine qualitative Triangulation von Experteninterviews an fünf deutschen Exzellenzuniversitäten. Die Befunde zeichnen ein ambivalentes Bild: Während kurzzyklische Sprints die interne Kommunikation und die Softwareentwicklung spürbar optimieren, beklagen viele Postdoktoranden eine Fragmentierung ihrer Forschungszeit. Deep Work und theoriegeleitete Kontemplation geraten durch permanente Stand-up-Meetings ins Hintertreffen.
Zusammenfassend halte ich fest: Agilität ist kein Allheilmittel. Sie eignet sich hervorragend für anwendungsnahe Verbundprojekte, stößt jedoch bei erkenntnisorientierter Grundlagenforschung an funktionelle Grenzen. Ich danke für Ihre Aufmerksamkeit."`"""
)

text = text.replace(
"""      sampleResponse: 'Kandidat A: "Ich vertrete den Standpunkt, dass Steuergelder prioritär dort investiert werden müssen, wo ein direkter volkswirtschaftlicher Mehrwert für die Gesellschaft entsteht – beispielsweise in der Medizintechnik oder erneuerbaren Energien."
Kandidat B: "Dieser utilitaristischen Sichtweise möchte ich entschieden widersprechen. Die Geschichte der Naturwissenschaften beweist unmissverständlich: Bahnbrechende Entdeckungen – von der Quantenphysik bis zur CRISPR-Genschere – entstanden fast ausnahmslos aus ungebundener, neugiergetriebener Grundlagenforschung, deren praktische Anwendung zum Zeitpunkt der Entdeckung völlig unabsehbar war. Wer nur auf Verwertbarkeit schielt, sägt den Ast ab, auf dem die angewandte Forschung sitzt."
Kandidat A: "Ein berechtigter Einwand. Dennoch leben wir in einer Phase begrenzter Haushaltsmittel, die klare strategische Schwerpunktsetzungen erfordert."'""",
"""      sampleResponse: `Kandidat A: "Ich vertrete den Standpunkt, dass Steuergelder prioritär dort investiert werden müssen, wo ein direkter volkswirtschaftlicher Mehrwert für die Gesellschaft entsteht – beispielsweise in der Medizintechnik oder erneuerbaren Energien."
Kandidat B: "Dieser utilitaristischen Sichtweise möchte ich entschieden widersprechen. Die Geschichte der Naturwissenschaften beweist unmissverständlich: Bahnbrechende Entdeckungen – von der Quantenphysik bis zur CRISPR-Genschere – entstanden fast ausnahmslos aus ungebundener, neugiergetriebener Grundlagenforschung, deren praktische Anwendung zum Zeitpunkt der Entdeckung völlig unabsehbar war. Wer nur auf Verwertbarkeit schielt, sägt den Ast ab, auf dem die angewandte Forschung sitzt."
Kandidat A: "Ein berechtigter Einwand. Dennoch leben wir in einer Phase begrenzter Haushaltsmittel, die klare strategische Schwerpunktsetzungen erfordert."`"""
)

with open('src/data/standardizedExamsDataTelcC1.ts', 'w', encoding='utf-8') as f:
    f.write(text)

print("Applied fix_final.py")
