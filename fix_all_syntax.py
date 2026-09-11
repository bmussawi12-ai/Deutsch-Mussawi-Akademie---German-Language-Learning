with open('src/data/standardizedExamsDataTelcC1.ts', 'r', encoding='utf-8') as f:
    lines = f.readlines()

for i, line in enumerate(lines):
    if "Shor's" in line:
        lines[i] = line.replace("Shor's", "Shor\\'s")
    if "Helyum-4'e" in line:
        lines[i] = line.replace("Helyum-4'e", "Helyum-4\\'e")
    if "sampleResponse: `" in line and line.rstrip().endswith("'`") or line.rstrip().endswith("':") or line.rstrip().endswith("',"):
        # Fix ending of sampleResponse
        # Replace trailing '` or ' or similar
        l = line.rstrip()
        if l.endswith("',"):
            l = l[:-2] + "`,"
        elif l.endswith("'"):
            l = l[:-1] + "`"
        elif l.endswith("'`"):
            l = l[:-2] + "`"
        lines[i] = l + '\n'

with open('src/data/standardizedExamsDataTelcC1.ts', 'w', encoding='utf-8') as f:
    f.writelines(lines)

print("Applied fixes")
