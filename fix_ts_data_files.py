import re

def fix_file(filepath):
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()

    # 1. Turn all sampleResponse: '...' into sampleResponse: `...`
    # Match sampleResponse: ' followed by anything until '\n    } or '\n  }
    def replace_sample(match):
        inner = match.group(1)
        # Escape any backticks inside inner
        inner = inner.replace('`', '\\`')
        return f"sampleResponse: `{inner}`"

    content = re.sub(r"sampleResponse:\s*'([\s\S]*?)'(?=\s*[,}\]])", replace_sample, content)

    # 2. Fix specific contractions in single-quoted strings:
    # like en: '... Shor's ...' or tr: '... Fransa'da ...'
    lines = content.split('\n')
    fixed_lines = []
    for line in lines:
        # Match lines like:   en: 'text', or tr: 'text', or question: 'text',
        m = re.match(r"^(\s*[a-zA-Z0-9_]+:\s*)'(.*)'(,?)$", line)
        if m:
            prefix = m.group(1)
            text = m.group(2)
            suffix = m.group(3)
            # Replace unescaped single quotes inside text with \'
            # An unescaped single quote is not preceded by a backslash
            # We can replace \' with ' first, then replace all ' with \'
            # But wait, if text contains \' already:
            text = text.replace("\\'", "'")
            text = text.replace("'", "\\'")
            fixed_lines.append(f"{prefix}'{text}'{suffix}")
        else:
            fixed_lines.append(line)

    content = '\n'.join(fixed_lines)

    with open(filepath, 'w', encoding='utf-8') as f:
        f.write(content)
    print(f"Fixed {filepath}")

for fp in [
    'src/data/standardizedExamsDataTelcB1.ts',
    'src/data/standardizedExamsDataTelcB2.ts',
    'src/data/standardizedExamsDataGoetheC1.ts',
    'src/data/standardizedExamsDataTelcC1.ts'
]:
    fix_file(fp)
