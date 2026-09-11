import json
import os

# Helper to format TranslatedText
def tr(en, fa, prs=None):
    if not prs:
        prs = fa
    return {
        "en": en,
        "fa": fa,
        "prs": prs
    }

def make_exam_ts(var_name, data):
    return f"export const {var_name}: StandardizedExam = " + json.dumps(data, ensure_ascii=False, indent=2) + ";\n"

# We will generate comprehensive, high-quality exam datasets for B1, B2, C1, C2 (8 extra exams per level, making 10 total per level).
print("Exam generator helper ready.")
