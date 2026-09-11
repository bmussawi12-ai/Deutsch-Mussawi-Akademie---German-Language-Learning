with open('src/data/standardizedExamsDataTelcC1.ts', 'r', encoding='utf-8') as f:
    text = f.read()

text = text.replace("Fransa'da", "Fransa\\'da")
text = text.replace("%35'in", "%35\\'in")

# For sampleResponse, replace with backticks
import re
lines = text.split('\n')
new_lines = []
in_sample = False
sample_buf = []

for line in lines:
    if "sampleResponse: '" in line:
        line = line.replace("sampleResponse: '", "sampleResponse: `")
        if line.endswith("',") or line.endswith("'"):
            line = line[:-2] + "`," if line.endswith("',") else line[:-1] + "`"
    new_lines.append(line)

with open('src/data/standardizedExamsDataTelcC1.ts', 'w', encoding='utf-8') as f:
    f.write('\n'.join(new_lines))

print("Fixed telc c1 successfully")
