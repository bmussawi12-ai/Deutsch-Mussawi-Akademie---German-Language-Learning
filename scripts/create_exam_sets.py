import json

def tr(en, fa, prs=None, tr_lang=None, ar=None, es=None):
    return {
        "en": en,
        "fa": fa,
        "prs": prs or fa,
        "tr": tr_lang or en,
        "ar": ar or fa,
        "es": es or en,
    }

def make_exam(
    exam_id, title, standard, level, duration, passing,
    reading_title, reading_source, reading_body, reading_questions,
    audio_title, audio_situation, audio_transcript, audio_questions,
    writing_title, writing_type, writing_situation, writing_prompt, writing_points, writing_words, writing_solution, writing_criteria,
    speaking_title=None,
    speaking_theme="Alltag & Beruf"
):
    if not speaking_title:
        speaking_title = f"Mündliche Prüfung: {speaking_theme} (15 Min)"

    sp_t1_name = "Teil 1: Kontaktaufnahme / Gemeinsam planen"
    sp_t1_inst = tr("Plan an activity or event together with your partner.", "با پارتنر خود برای یک برنامه یا رویداد مشترک برنامه‌ریزی کنید.")
    sp_t1_prompts = ["Wann passt es Ihnen am besten?", "Wer übernimmt welche Aufgaben?", "Welche Kosten entstehen?"]
    sp_t1_resp = f"Kandidat A: Hallo! Wollen wir die Veranstaltung zum Thema '{speaking_theme}' gemeinsam organisieren? Ich schlage vor, dass wir uns nächsten Samstag treffen.\nKandidat B: Sehr gerne! Am Samstagvormittag hätte ich ab 10 Uhr Zeit. Ich könnte die Einladungen schreiben und die Getränke besorgen.\nKandidat A: Perfekt, dann kümmere ich mich um den Raum und die Technik."

    sp_t2_name = f"Teil 2: Ein Thema präsentieren ({speaking_theme})"
    sp_t2_inst = tr("Give a short structured presentation on the topic with personal examples and pros/cons.", "یک ارائه کوتاه و ساختارمند پیرامون موضوع با ذکر نمونه‌ها، مزایا و معایب ارائه دهید.")
    sp_t2_cards = [f"Thema: {speaking_theme}", "Eigene Erfahrungen", "Situation im Heimatland", "Vor- und Nachteile", "Meinung & Abschluss"]
    sp_t2_resp = f"Guten Tag! In meiner heutigen Präsentation spreche ich über '{speaking_theme}'. Zunächst möchte ich von meinen persönlichen Erfahrungen berichten. In meinem Alltag spielt dieser Aspekt eine zentrale Rolle. In meinem Heimatland wird dieses Thema oft anders gehandhabt als hier in Deutschland. Ein großer Vorteil ist die Flexibilität, ein wesentlicher Nachteil jedoch die oft hohen Kosten. Zusammenfassend bin ich der Ansicht, dass ein ausgewogener Mittelweg die beste Lösung darstellt. Vielen Dank für Ihre Aufmerksamkeit!"

    sp_t3_name = "Teil 3: Fragen und Rückmeldung zur Präsentation"
    sp_t3_inst = tr("Ask your partner a follow-up question and provide respectful feedback.", "از پارتنر خود یک سوال تکمیلی بپرسید و بازخورد محترمانه ارائه دهید.")
    sp_t3_scen = f"Diskussion und Nachfragen zur Präsentation über {speaking_theme}"
    sp_t3_points = ["Welcher Aspekt war besonders interessant?", "Wie beurteilen Sie die Zukunftsaussichten?"]
    sp_t3_resp = f"Prüfer/Partner: Vielen Dank für Ihre interessante Präsentation! Mich würde noch interessieren: Was war für Sie persönlich die größte Herausforderung bei diesem Thema?\nKandidat: Für mich persönlich war die Umstellung auf die neuen Abläufe zunächst nicht ganz einfach, aber durch den intensiven Austausch mit Kollegen habe ich schnell Routine gewonnen."

    return {
        "id": exam_id,
        "title": title,
        "standard": standard,
        "level": level,
        "totalDurationMinutes": duration,
        "passingScore": passing,
        "strategy": {
            "level": level,
            "timeManagement": [
                {
                    "section": f"Lesen ({reading_title})",
                    "allocatedMinutes": int(duration * 0.4),
                    "tip": tr("Divide time evenly across tasks; read questions first.", "زمان را به طور مساوی تقسیم کرده و ابتدا سوالات را بخوانید.")
                },
                {
                    "section": f"Hören ({audio_title})",
                    "allocatedMinutes": int(duration * 0.25),
                    "tip": tr("Focus on transitions and connectors during listening.", "هنگام گوش دادن به نشانه‌های ربط دهنده و تغییر نظر دقت کنید.")
                },
                {
                    "section": f"Schreiben ({writing_title})",
                    "allocatedMinutes": int(duration * 0.35),
                    "tip": tr("Follow formal conventions and address every prompt point.", "قواعد نگارش رسمی را رعایت کرده و به همه بندهای وظیفه پاسخ دهید.")
                }
            ],
            "stepByStepStrategies": [
                {
                    "title": f"Effektive Lösungsstrategie für {title}",
                    "steps": [
                        tr("1. Scan heading and text structure.", "۱. عنوان و ساختار کلی متن را سریع بررسی کنید."),
                        tr("2. Mark key vocabulary in questions.", "۲. واژگان کلیدی در صورت سوال را مشخص کنید."),
                        tr("3. Verify with text evidence before deciding.", "۳. قبل از ثبت پاسخ، شواهد متنی را تایید کنید.")
                    ]
                }
            ],
            "commonMistakes": [
                {
                    "mistake": "Relying on lexical overlap without verifying context.",
                    "correction": "Ensure semantic alignment, not just identical words.",
                    "explanation": tr("Distractors often use exact words from the text in a contradictory context.", "گزینه‌های انحرافی اغلب از کلمات مشابه متن ولی در مفهومی متناقض استفاده می‌کنند.")
                }
            ]
        },
        "lesen": {
            "title": reading_title,
            "durationMinutes": int(duration * 0.4),
            "texts": [
                {
                    "title": reading_title,
                    "sourceType": reading_source,
                    "body": reading_body,
                    "questions": reading_questions
                }
            ]
        },
        "hoeren": {
            "title": audio_title,
            "durationMinutes": int(duration * 0.25),
            "audioItems": [
                {
                    "id": f"{exam_id}_audio_1",
                    "title": audio_title,
                    "situation": audio_situation,
                    "transcript": audio_transcript,
                    "questions": audio_questions
                }
            ]
        },
        "schreiben": {
            "title": writing_title,
            "durationMinutes": int(duration * 0.35),
            "taskType": writing_type,
            "situation": writing_situation,
            "prompt": writing_prompt,
            "guidingPoints": writing_points,
            "targetWordCount": writing_words,
            "sampleSolution": writing_solution,
            "scoringCriteria": writing_criteria
        },
        "sprechen": {
            "title": speaking_title,
            "durationMinutes": 15,
            "teil1": {
                "name": sp_t1_name,
                "instruction": sp_t1_inst,
                "prompts": sp_t1_prompts,
                "sampleResponse": sp_t1_resp
            },
            "teil2": {
                "name": sp_t2_name,
                "instruction": sp_t2_inst,
                "topicCards": sp_t2_cards,
                "sampleResponse": sp_t2_resp
            },
            "teil3": {
                "name": sp_t3_name,
                "instruction": sp_t3_inst,
                "planningScenario": sp_t3_scen,
                "discussionPoints": sp_t3_points,
                "sampleResponse": sp_t3_resp
            }
        }
    }
