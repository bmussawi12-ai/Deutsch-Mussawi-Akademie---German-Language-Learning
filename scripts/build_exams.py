import json
import os

def tr(en, fa, prs=None):
    return {
        "en": en,
        "fa": fa,
        "prs": prs or fa
    }

def create_b1_exam(exam_id, title, standard, topic, reading_text, reading_source, q_list, audio_situation, audio_transcript, audio_q_list, writing_task, speaking_topic):
    return {
        "id": exam_id,
        "title": title,
        "standard": standard,
        "level": "B1.2" if "SET4" in exam_id or "SET5" in exam_id else "B1.1",
        "totalDurationMinutes": 165 if standard == "Goethe-Zertifikat" else 150,
        "passingScore": "60% (Mindestens 60 von 100 Punkten bzw. 180 / 300 Pkt)",
        "strategy": {
            "level": "B1.1",
            "timeManagement": [
                {
                    "section": "Lesen (Reading)",
                    "allocatedMinutes": 65,
                    "tip": tr("Manage time carefully: spend around 12-14 minutes per part.", "زمان را مدیریت کنید: حدود ۱۲ تا ۱۴ دقیقه برای هر بخش صرف نمایید.")
                },
                {
                    "section": "Hören (Listening)",
                    "allocatedMinutes": 40,
                    "tip": tr("Read questions before the audio plays to identify key terms.", "قبل از پخش فایل صوتی، سوالات را سریع بخوانید تا کلمات کلیدی را بیابید.")
                },
                {
                    "section": "Schreiben (Writing)",
                    "allocatedMinutes": 60,
                    "tip": tr("Structure your response with clear connectors: weil, obwohl, deshalb.", "متن خود را با ساختارهای مرتب و حروف ربط استاندارد B1 بنویسید.")
                }
            ],
            "stepByStepStrategies": [
                {
                    "title": f"B1 {topic}: Prüfungsstrategie",
                    "steps": [
                        tr("1. Underline keywords in the question.", "۱. زیر کلمات کلیدی سوال خط بکشید."),
                        tr("2. Scan text for synonyms rather than literal word matches.", "۲. در متن به دنبال واژگان مترادف باشید."),
                        tr("3. Double check final negation particles (nicht, kein).", "۳. ذرات منفی‌ساز جمله را مجدداً بررسی کنید.")
                    ]
                }
            ],
            "commonMistakes": [
                {
                    "mistake": "Overlooking small negation words like 'kaum', 'selten', or 'keineswegs'.",
                    "correction": "Always read the full context clause before selecting True or False.",
                    "explanation": tr("Small words can completely reverse the meaning of a sentence in German exams.", "کلمات کوچک منفی‌ساز یا محدودکننده می‌توانند معنای جمله را به کلی معکوس کنند.")
                }
            ]
        },
        "lesen": {
            "title": f"Modul Lesen: {topic} (65 Min)",
            "durationMinutes": 65,
            "texts": [
                {
                    "title": f"Teil 1: Lesetext zum Thema '{topic}'",
                    "sourceType": reading_source,
                    "body": reading_text,
                    "questions": q_list
                }
            ]
        },
        "hoeren": {
            "title": f"Modul Hören: {topic} (40 Min)",
            "durationMinutes": 40,
            "audioItems": [
                {
                    "id": f"{exam_id}_h1",
                    "title": f"Hörtext: {topic}",
                    "situation": audio_situation,
                    "transcript": audio_transcript,
                    "questions": audio_q_list
                }
            ]
        },
        "schreiben": {
            "title": f"Modul Schreiben: {writing_task['title']} (60 Min)",
            "durationMinutes": 60,
            "taskType": writing_task["taskType"],
            "situation": writing_task["situation"],
            "prompt": writing_task["prompt"],
            "guidingPoints": writing_task["guidingPoints"],
            "targetWordCount": writing_task["targetWordCount"],
            "sampleSolution": writing_task["sampleSolution"],
            "scoringCriteria": tr("Evaluated based on task completion, coherence, grammatical range (B1), and vocabulary accuracy.", "بر اساس پاسخ به تمام بندها، پیوستگی متن، تنوع ساختارهای گرامری B1 و صحت واژگان نمره‌دهی می‌شود.")
        },
        "sprechen": {
            "title": f"Modul Sprechen: {topic} (15 Min)",
            "durationMinutes": 15,
            "teil1": {
                "name": "Teil 1: Gemeinsam etwas planen",
                "instruction": tr("Plan an activity together with your partner. Make suggestions and react.", "با پارتنر خود برای یک برنامه مشترک برنامه‌ریزی کنید. پیشنهاد داده و به پیشنهادات او پاسخ دهید."),
                "prompts": ["Wann treffen wir uns?", "Wer besorgt was?", "Wie fahren wir dorthin?"],
                "sampleResponse": speaking_topic["t1_sample"]
            },
            "teil2": {
                "name": f"Teil 2: Ein Thema präsentieren ({topic})",
                "instruction": tr("Present a topic: personal experience, situation in your home country, pros/cons, your opinion.", "ارائه یک موضوع: تجربه شخصی، وضعیت در کشور مادری، مزایا و معایب و نظر شخصی."),
                "topicCards": [f"Thema: {topic}", "Persönliche Erfahrung", "Vor- und Nachteile", "Meinung begründen"],
                "sampleResponse": speaking_topic["t2_sample"]
            },
            "teil3": {
                "name": "Teil 3: Auf Fragen reagieren und Feedback geben",
                "instruction": tr("Ask questions about your partner's presentation and give feedback.", "درباره ارائه پارتنر خود سوال بپرسید و بازخورد محترمانه ارائه دهید."),
                "planningScenario": f"Diskussion über {topic}",
                "discussionPoints": ["Haben Sie eine Frage?", "Wie ist Ihre persönliche Meinung dazu?"],
                "sampleResponse": speaking_topic["t3_sample"]
            }
        }
    }

print("Base builder function defined.")
