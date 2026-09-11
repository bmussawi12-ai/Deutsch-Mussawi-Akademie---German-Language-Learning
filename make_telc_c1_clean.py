# -*- coding: utf-8 -*-

# We will read make_telc_c1.py and make sure all single quotes inside single-quoted strings are escaped,
# and all double quotes or backticks are consistent.

with open('make_telc_c1.py', 'r', encoding='utf-8') as f:
    text = f.read()

# Replace specific problematic contractions in Turkish / English:
replacements = [
    ("Shor's", "Shor\\'s"),
    ("Fransa'da", "Fransa\\'da"),
    ("%35'in", "%35\\'in"),
    ("Helyum-4'e", "Helyum-4\\'e"),
    ("Stockholm Resilience Centre'de", "Stockholm Resilience Centre\\'de"),
    ("Leipzig'deki", "Leipzig\\'deki")
]

for old, new in replacements:
    text = text.replace(old, new)

with open('make_telc_c1.py', 'w', encoding='utf-8') as f:
    f.write(text)

print("Updated make_telc_c1.py")
