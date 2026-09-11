import { GrammarRule } from '../types';
import { EXTENDED_GRAMMAR_RULES } from './grammarRulesExtended';
import { BOOK_GRAMMAR_RULES } from './bookGrammarData';
import { BOOK_GRAMMAR_RULES_A2 } from './bookGrammarDataA2';
import { BOOK_GRAMMAR_RULES_B1 } from './bookGrammarDataB1';
import { BOOK_GRAMMAR_RULES_ADVANCED } from './bookGrammarDataAdvanced';

const BASE_GRAMMAR_RULES: GrammarRule[] = [
  // A1.1: Verb position in main clause
  {
    id: 'a1_verb_position',
    level: 'A1.1',
    lektion: 1,
    germanTitle: 'Position des Verbs im Aussagesatz (Hauptsatz)',
    formula: 'S + V (konjugiert) + O / (...)',
    explanation: {
      en: 'In a German main clause (declarative sentence), the conjugated verb MUST always occupy the second syntactic position, directly following the subject (or inverted if an adverbial phrase occupies position 1).',
      fa: 'در جمله خبری اصلی در زبان آلمانی، فعل صرف‌شده همیشه و بدون استثنا در جایگاه دوم (Position II) قرار می‌گیرد، بلافاصله پس از فاعل (یا در صورت آمدن قید در جایگاه اول، جای فاعل و فعل عوض می‌شود).',
      tr: 'Almanca düz ana cümlede, çekimli fiil daima ve istisnasız ikinci konumda (Position II) yer almalıdır.',
      ar: 'في الجملة الخبرية الرئيسية باللغة الألمانية، يجب أن يحتل الفعل المصرف دائماً المرتبة الثانية (Position II) بعد الفاعل مباشرة.',
      es: 'En una oración principal declarativa en alemán, el verbo conjugado SIEMPRE debe ocupar la segunda posición sintáctica, directamente después del sujeto.'
    },
    category: 'sentence_structure',
    examples: [
      {
        german: 'Ich komme aus Berlin.',
        formulaBreakdown: 'Ich (S) + komme (V) + aus Berlin (P + O / ...)',
        literalTranslation: {
          en: 'I come from Berlin.',
          fa: 'من می‌آیم از برلین.',
          tr: 'Ben geliyorum Berlin\'den.',
          ar: 'أنا آتي من برلين.',
          es: 'Yo vengo de Berlín.'
        },
        fluentTranslation: {
          en: 'I come from Berlin.',
          fa: 'من اهل برلین هستم.',
          tr: 'Berlin\'den geliyorum.',
          ar: 'أنا من برلين.',
          es: 'Vengo de Berlín.'
        },
        isAdvanced: false
      },
      {
        german: 'Heute lerne ich fleißig Deutsch im Sprachinstitut.',
        formulaBreakdown: 'Heute (...) + lerne (V) + ich (S) + fleißig Deutsch (...) + im Sprachinstitut (P + O)',
        literalTranslation: {
          en: 'Today learn I diligently German in the language institute.',
          fa: 'امروز یاد می‌گیرم من با پشتکار آلمانی در موسسه زبان.',
          tr: 'Bugün öğreniyorum ben gayretle Almanca dil enstitüsünde.',
          ar: 'اليوم أتعلم أنا بجد الألمانية في معهد اللغات.',
          es: 'Hoy aprendo yo diligentemente alemán en el instituto de idiomas.'
        },
        fluentTranslation: {
          en: 'Today I diligently study German at the language institute.',
          fa: 'امروز من در موسسه زبان با جدیت آلمانی می‌خوانم.',
          tr: 'Bugün dil enstitüsünde gayretle Almanca öğreniyorum.',
          ar: 'اليوم أدرس الألمانية باجتهاد في معهد اللغات.',
          es: 'Hoy estudio alemán con esmero en el instituto de idiomas.'
        },
        isAdvanced: true
      }
    ]
  },

  // A1.1: W-Fragen and Ja/Nein-Fragen
  {
    id: 'a1_questions',
    level: 'A1.1',
    lektion: 2,
    germanTitle: 'W-Fragen und Ja/Nein-Fragen (Satzfragen)',
    formula: 'W-Frage: W-Wort + V (konjugiert) + S + (...) ? | Ja/Nein-Frage: V (konjugiert) + S + (...) ?',
    explanation: {
      en: 'In W-Questions (open questions), the question word sits in Position 1 and the conjugated verb in Position 2. In Yes/No questions (closed questions), the conjugated verb takes Position 1 at the very beginning of the sentence.',
      fa: 'در جملات پرسشی با واژه‌های پرسشی (W-Fragen)، واژه پرسشی در جایگاه اول و فعل صرف‌شده در جایگاه دوم می‌آید. در پرسش‌های بله/خیر (Ja/Nein-Fragen)، فعل صرف‌شده در جایگاه اول و ابتدای جمله می‌نشیند.',
      tr: 'Soru kelimeli sorularda (W-Frage) soru kelimesi 1. konumda, çekimli fiil 2. konumdadır. Evet/Hayır sorularında çekimli fiil cümlenin en başında 1. konumdadır.',
      ar: 'في الأسئلة المفتوحة (W-Fragen)، تأتي أداة الاستفهام في المرتبة الأولى والفعل المصرف في المرتبة الثانية. أما في أسئلة نعم/لا، فيبدأ السؤال بالفعل المصرف في المرتبة الأولى.',
      es: 'En las preguntas con partícula interrogativa (W-Fragen), la partícula ocupa la Posición 1 y el verbo conjugado la Posición 2. En las preguntas de Sí/No, el verbo conjugado va en la Posición 1 al inicio.'
    },
    category: 'sentence_structure',
    examples: [
      {
        german: 'Woher wohnst du?',
        formulaBreakdown: 'Wo (W-Wort) + wohnst (V) + du (S) ?',
        literalTranslation: {
          en: 'Where live you?',
          fa: 'کجا زندگی می‌کنی تو؟',
          tr: 'Nerede yaşıyorsun sen?',
          ar: 'أين تسكن أنت؟',
          es: '¿Dónde vives tú?'
        },
        fluentTranslation: {
          en: 'Where do you live?',
          fa: 'کجا زندگی می‌کنی؟',
          tr: 'Nerede oturuyorsun?',
          ar: 'أين تسكن؟',
          es: '¿Dónde vives?'
        },
        isAdvanced: false
      },
      {
        german: 'Sprechen Sie fließend Deutsch und Englisch?',
        formulaBreakdown: 'Sprechen (V) + Sie (S) + fließend Deutsch und Englisch (O) ?',
        literalTranslation: {
          en: 'Speak you fluently German and English?',
          fa: 'صحبت می‌کنید شما روان آلمانی و انگلیسی؟',
          tr: 'Konuşuyor musunuz siz akıcı Almanca ve İngilizce?',
          ar: 'تتحدث حضرتك بطلاقة الألمانية والإنجليزية؟',
          es: '¿Habla usted con fluidez alemán e inglés?'
        },
        fluentTranslation: {
          en: 'Do you speak fluent German and English?',
          fa: 'آیا شما آلمانی و انگلیسی را روان صحبت می‌کنید؟',
          tr: 'Akıcı bir şekilde Almanca ve İngilizce konuşabiliyor musunuz?',
          ar: 'هل تتحدث الألمانية والإنجليزية بطلاقة؟',
          es: '¿Habla usted alemán e inglés con fluidez?'
        },
        isAdvanced: true
      }
    ]
  },

  // A1.2: Modal verbs (Satzklammer)
  {
    id: 'a1_modal_verbs',
    level: 'A1.2',
    lektion: 5,
    germanTitle: 'Modalverben und die Satzklammer (Verbklammer)',
    formula: 'S + V1 (Modalverb konjugiert) + (...) + *V2 (Infinitiv am Satzende)*',
    explanation: {
      en: 'Modal verbs (können, müssen, wollen, dürfen, sollen, möchten) are conjugated in Position 2. The main semantic verb is pushed to the absolute end of the clause in its raw infinitive form, creating the classic German sentence bracket (Satzklammer).',
      fa: 'افعال کمکی وجهی (Modalverben) در جایگاه دوم صرف می‌شوند. فعل اصلی با فرم دست‌نخورده مصدری (Infinitiv) به انتهای جمله فرستاده می‌شود و ساختار قاب جمله (Satzklammer) را پدید می‌آورد.',
      tr: 'Modal fiiller (können, müssen vb.) 2. konumda özneye göre çekimlenir. Asıl fiil ise hiçbir ek almadan yalın halde (mastar) cümlenin tam sonuna gider (Satzklammer).',
      ar: 'يتم تصريف الأفعال المساعدة (Modalverben) في الموقع الثاني، بينما يُرسل الفعل الأساسي إلى نهاية الجملة بصيغة المصدر غير المصرف (*Infinitiv*).',
      es: 'Los verbos modales se conjugan en Posición 2 según el sujeto. El verbo principal se desplaza al final absoluto de la frase en su forma de infinitivo (*Infinitiv*).'
    },
    category: 'verbs',
    examples: [
      {
        german: 'Ich kann gut kochen.',
        formulaBreakdown: 'Ich (S) + kann (V1-Modal) + gut (...) + *kochen (V2-Infinitiv)*',
        literalTranslation: {
          en: 'I can well cook.',
          fa: 'من می‌توانم خوب آشپزی کنم.',
          tr: 'Ben yapabilirim iyi yemek pişirmek.',
          ar: 'أنا أستطيع جيداً أن أطبخ.',
          es: 'Yo puedo bien cocinar.'
        },
        fluentTranslation: {
          en: 'I can cook well.',
          fa: 'من آشپزی خوبی بلد هستم.',
          tr: 'İyi yemek pişirebiliyorum.',
          ar: 'أستطيع الطبخ بشكل جيد.',
          es: 'Sé cocinar bien.'
        },
        isAdvanced: false
      },
      {
        german: 'Wir müssen morgen früh um 7 Uhr den Zug nach München nehmen.',
        formulaBreakdown: 'Wir (S) + müssen (V1-Modal) + morgen früh um 7 Uhr (...) + den Zug nach München (O) + *nehmen (V2-Infinitiv)*',
        literalTranslation: {
          en: 'We must tomorrow early at 7 o\'clock the train to Munich take.',
          fa: 'ما باید فردا صبح ساعت ۷ قطار به مونیخ را بگیریم.',
          tr: 'Biz zorundayız yarın sabah saat 7\'de Münih trenine binmek.',
          ar: 'نحن يجب علينا غداً صباحاً في السابعة أخذ القطار إلى ميونيخ.',
          es: 'Nosotros debemos mañana temprano a las 7 el tren a Múnich tomar.'
        },
        fluentTranslation: {
          en: 'We have to catch the train to Munich at 7 AM tomorrow morning.',
          fa: 'ما باید فردا صبح ساعت هفت سوار قطار مونیخ شویم.',
          tr: 'Yarın sabah saat 7\'de Münih trenine binmek zorundayız.',
          ar: 'يجب أن نأخذ القطار إلى ميونيخ غداً في السابعة صباحاً.',
          es: 'Tenemos que tomar el tren a Múnich mañana a las 7 de la mañana.'
        },
        isAdvanced: true
      }
    ]
  },

  // A2.1: Perfekt with haben/sein
  {
    id: 'a2_perfekt',
    level: 'A2.1',
    lektion: 3,
    germanTitle: 'Das Perfekt mit haben und sein',
    formula: 'S + V1 (haben/sein konjugiert) + (...) + *V2 (Partizip II am Satzende)*',
    explanation: {
      en: 'The conversational past (Perfekt) consists of an auxiliary verb (haben or sein) conjugated in Position 2 and the past participle (Partizip II, e.g., gelernt, gegangen) placed at the end of the clause. Use "sein" with verbs of motion (fahren, gehen) or change of condition (aufwachen, sterben), and "haben" for transitive/stationary verbs.',
      fa: 'زمان گذشته نقلی/گفتاری (Perfekt) از فعل کمکی (haben یا sein) در جایگاه دوم و اسم مفعول (Partizip II) در انتهای جمله تشکیل می‌شود. از sein برای افعال حرکتی (رفتن، آمدن) یا تغییر حالت استفاده می‌شود.',
      tr: 'Geçmiş zaman (Perfekt), 2. konumdaki çekimli yardımcı fiil (haben/sein) ve cümlenin sonundaki Partizip II\'den oluşur. Yer veya durum değişikliği bildiren fiillerde \'sein\' kullanılır.',
      ar: 'يتكون الماضي التام في المحادثة اليومية (Perfekt) من فعل مساعد (haben أو sein) في الموقع الثاني، واسم المفعول (Partizip II) في نهاية الجملة تماماً.',
      es: 'El pretérito perfecto (Perfekt) se compone del auxiliar (haben o sein) conjugado en Posición 2 y el participio (Partizip II) ubicado al final de la oración.'
    },
    category: 'verbs',
    examples: [
      {
        german: 'Ich habe gestern Deutsch gelernt.',
        formulaBreakdown: 'Ich (S) + habe (V1-haben) + gestern Deutsch (O) + *gelernt (V2-Partizip II)*',
        literalTranslation: {
          en: 'I have yesterday German learned.',
          fa: 'من دیروز آلمانی یاد گرفته‌ام.',
          tr: 'Ben dün Almanca öğrendim.',
          ar: 'أنا بالأمس الألمانية تعلمت.',
          es: 'Yo he ayer alemán aprendido.'
        },
        fluentTranslation: {
          en: 'I studied German yesterday.',
          fa: 'من دیروز آلمانی خواندم.',
          tr: 'Dün Almanca çalıştım.',
          ar: 'درستُ اللغة الألمانية البارحة.',
          es: 'Ayer estudié alemán.'
        },
        isAdvanced: false
      },
      {
        german: 'Meine Kollegin ist letzte Woche pünktlich nach Hamburg geflogen.',
        formulaBreakdown: 'Meine Kollegin (S) + ist (V1-sein) + letzte Woche pünktlich (...) + nach Hamburg (P+O) + *geflogen (V2-Partizip II)*',
        literalTranslation: {
          en: 'My female colleague is last week punctually to Hamburg flown.',
          fa: 'همکار من هفته گذشته سر وقت به هامبورگ پرواز کرده است.',
          tr: 'Kadın meslektaşım geçen hafta zamanında Hamburg\'a uçtu.',
          ar: 'زميلتي في العمل الأسبوع الماضي في الموعد إلى هامبورغ طارت.',
          es: 'Mi colega ha la semana pasada puntualmente a Hamburgo volado.'
        },
        fluentTranslation: {
          en: 'My colleague flew on time to Hamburg last week.',
          fa: 'همکارم هفته گذشته سر وقت با هواپیما به هامبورگ رفت.',
          tr: 'Meslektaşım geçen hafta vaktinde Hamburg\'a uçtu.',
          ar: 'سافرت زميلتي بالطائرة في الموعد إلى هامبورغ الأسبوع الماضي.',
          es: 'Mi compañera voló puntualmente a Hamburgo la semana pasada.'
        },
        isAdvanced: true
      }
    ]
  },

  // B1.1: Nebensätze mit weil, dass, wenn
  {
    id: 'b1_nebensatz',
    level: 'B1.1',
    lektion: 2,
    germanTitle: 'Subordinierende Nebensätze (weil, dass, wenn, obwohl)',
    formula: '[Hauptsatz: S + V + O] + [Nebensatz: Konjunktion + S + O + (...) + V (konjugiert am Satzende)]',
    explanation: {
      en: 'In subordinate clauses introduced by subordinating conjunctions (weil, dass, wenn, obwohl, da, damit), the conjugated verb is systematically relocated to the very end of the subordinate clause.',
      fa: 'در جملات پیرو (Nebensätze) که با حروف ربط فرعی مانند weil (چون)، dass (که)، wenn (اگر/وقتی) آغاز می‌شوند، فعل صرف‌شده همواره به آخرین جایگاه جمله پیرو منتقل می‌شود.',
      tr: 'Bağlaçlı yan cümlelerde (weil, dass, wenn vb.) çekimli fiil cümlenin en sonuna gider.',
      ar: 'في الجمل الفرعية التي تبدأ بأدوات الربط التابعة (مثل weil, dass, wenn)، ينتقل الفعل المصرف إلزامياً إلى نهاية الجملة الفرعية تماماً.',
      es: 'En las oraciones subordinadas introducidas por conjunciones subordinantes (weil, dass, wenn, etc.), el verbo conjugado se coloca obligatoriamente al final de la subordinada.'
    },
    category: 'connectors',
    examples: [
      {
        german: 'Ich lerne Deutsch, weil ich in Wien studieren möchte.',
        formulaBreakdown: 'Ich (S) + lerne (V) + Deutsch (O) + , + weil (Konj) + ich (S) + in Wien (P+O) + *studieren* + möchte (V-konjugiert am Ende)',
        literalTranslation: {
          en: 'I learn German, because I in Vienna to study would like.',
          fa: 'من یاد می‌گیرم آلمانی، چون من در وین تحصیل کردن می‌خواهم.',
          tr: 'Almanca öğreniyorum, çünkü Viyana\'da okumak istiyorum.',
          ar: 'أنا أتعلم الألمانية، لأنني في فيينا الدراسة أرغب.',
          es: 'Aprendo alemán, porque yo en Viena estudiar desearía.'
        },
        fluentTranslation: {
          en: 'I am learning German because I would like to study in Vienna.',
          fa: 'من دارم آلمانی یاد می‌گیرم چون می‌خواهم در وین درس بخوانم.',
          tr: 'Viyana\'da üniversite okumak istediğim için Almanca öğreniyorum.',
          ar: 'أتعلم الألمانية لأنني أرغب في الدراسة في فيينا.',
          es: 'Estoy aprendiendo alemán porque me gustaría estudiar en Viena.'
        },
        isAdvanced: false
      },
      {
        german: 'Obwohl das Wetter heute stürmisch und ungemütlich ist, machen die Kinder einen Spaziergang.',
        formulaBreakdown: 'Obwohl (Konj) + das Wetter (S) + heute stürmisch und ungemütlich (...) + ist (V-Ende) + , + machen (V-Hauptsatz) + die Kinder (S) + einen Spaziergang (O)',
        literalTranslation: {
          en: 'Although the weather today stormy and uncomfortable is, make the children a walk.',
          fa: 'اگرچه هوا امروز طوفانی و نامساعد است، انجام می‌دهند بچه‌ها یک پیاده‌روی.',
          tr: 'Hava bugün fırtınalı ve tatsız olmasına rağmen, çocuklar bir yürüyüş yapıyor.',
          ar: 'على الرغم من أن الطقس اليوم عاصف وغير مريح يكون، يقوم الأطفال بنزهة.',
          es: 'Aunque el clima hoy tormentoso e inhóspito es, hacen los niños un paseo.'
        },
        fluentTranslation: {
          en: 'Although the weather today is stormy and unpleasant, the children are going for a walk.',
          fa: 'با وجود این‌که امروز هوا طوفانی و ناخوشایند است، بچه‌ها به پیاده‌روی می‌روند.',
          tr: 'Bugün hava fırtınalı ve tatsız olmasına rağmen çocuklar yürüyüşe çıkıyor.',
          ar: 'على الرغم من أن الطقس اليوم عاصف وغير لطيف، يخرج الأطفال للمشي.',
          es: 'Aunque el tiempo hoy está tormentoso y desagradable, los niños dan un paseo.'
        },
        isAdvanced: true
      }
    ]
  },

  // B2.1: Passiv Zustand & Vorgang
  {
    id: 'b2_passiv',
    level: 'B2.1',
    lektion: 1,
    germanTitle: 'Das Vorgangspassiv mit Modalverben',
    formula: 'S + V1 (Modalverb konjugiert) + (von/durch + Agens) + (...) + *Partizip II* + *werden (Infinitiv)*',
    explanation: {
      en: 'In German process passive (Vorgangspassiv) with modal verbs, the modal verb occupies Position 2, while the end of the sentence features the past participle (Partizip II) followed by the infinitive "werden".',
      fa: 'در ساختار مجهول فرآیندی (Vorgangspassiv) همراه با فعل کمکی وجهی، فعل مدال در جایگاه دوم قرار می‌گیرد و در پایان جمله ترکیب اسم مفعول (Partizip II) به علاوه مصدر werden قرار می‌گیرد.',
      tr: 'Modal fiilli edilgen çatıda (Vorgangspassiv), modal fiil 2. konumdadır; cümlenin sonunda ise Partizip II ve \'werden\' mastar olarak yer alır.',
      ar: 'في صيغة المبني للمجهول الإجرائي مع الأفعال المساعدة، يأتي الفعل المساعد في المرتبة الثانية، بينما ينتهي التركيب باسم المفعول مع مصدر werden في نهاية الجملة.',
      es: 'En la voz pasiva de proceso con verbo modal, el modal ocupa la Posición 2, mientras que al final se colocan el participio (Partizip II) y el infinitivo "werden".'
    },
    category: 'passive_subjunctive',
    examples: [
      {
        german: 'Der Bericht muss bis Freitag geschrieben werden.',
        formulaBreakdown: 'Der Bericht (S) + muss (V1-Modal) + bis Freitag (P+O) + *geschrieben (Partizip II)* + *werden (Infinitiv)*',
        literalTranslation: {
          en: 'The report must by Friday written become.',
          fa: 'این گزارش باید تا جمعه نوشته شود.',
          tr: 'Rapor cumaya kadar yazılmış olmalı.',
          ar: 'التقرير يجب حتى الجمعة أن يُكتب.',
          es: 'El informe debe para el viernes escrito ser.'
        },
        fluentTranslation: {
          en: 'The report must be written by Friday.',
          fa: 'گزارش باید تا روز جمعه نوشته شود.',
          tr: 'Raporun cuma gününe kadar yazılması gerekiyor.',
          ar: 'يجب كتابة التقرير بحلول يوم الجمعة.',
          es: 'El informe tiene que ser redactado antes del viernes.'
        },
        isAdvanced: false
      },
      {
        german: 'Die Sicherheitsvorschriften können durch präzise Kontrollen optimiert werden.',
        formulaBreakdown: 'Die Sicherheitsvorschriften (S) + können (V1) + durch präzise Kontrollen (P+O) + *optimiert (Partizip II)* + *werden (Inf)*',
        literalTranslation: {
          en: 'The safety regulations can through precise inspections optimized become.',
          fa: 'مقررات ایمنی می‌توانند از طریق بازرسی‌های دقیق بهینه‌سازی شوند.',
          tr: 'Güvenlik kuralları titiz denetimler yoluyla optimize edilebilir.',
          ar: 'لوائح السلامة يمكن من خلال الفحوصات الدقيقة تحسينها.',
          es: 'Las normas de seguridad pueden mediante inspecciones precisas optimizadas ser.'
        },
        fluentTranslation: {
          en: 'Safety regulations can be optimized through precise inspections.',
          fa: 'دستورالعمل‌های ایمنی می‌توانند با بازرسی‌های دقیق ارتقا یابند.',
          tr: 'Güvenlik yönergeleri titiz kontrollerle daha verimli hale getirilebilir.',
          ar: 'يمكن تحسين لوائح الأمان عبر عمليات تفتيش دقيقة.',
          es: 'Las normas de seguridad se pueden optimizar mediante inspecciones exhaustivas.'
        },
        isAdvanced: true
      }
    ]
  },

  // C1.1: Partizipialattribute (Erweiterte Partizipien)
  {
    id: 'c1_partizipialkonstruktion',
    level: 'C1.1',
    lektion: 1,
    germanTitle: 'Erweiterte Partizipialattribute (Partizip I & II als Adjektiv)',
    formula: 'Artikel + [Erweiterung / Adverbiale Bestimmung + Partizip I/II (dekliniert)] + Nomen',
    explanation: {
      en: 'In high-level journalistic and academic German (FAZ, Süddeutsche, academic papers), relative clauses are compressed into extended participial attributes placed directly between the article and the noun.',
      fa: 'در متون دانشگاهی و مقالات مطبوعاتی سطح پیشرفته (C1/C2)، جملات موصولی طولانی به صفات فاعلی یا مفعولی گسترش‌یافته فشرده می‌شوند که بین حرف تعریف و اسم قرار می‌گیرند.',
      tr: 'İleri düzey akademik ve basın Almancasında (C1/C2), ilgi cümleleri (Relativsatz) isim ile artikeli arasına giren genişletilmiş ortaç yapılarına (Partizipialattribut) dönüştürülür.',
      ar: 'في النصوص الأكاديمية والصحفية المتقدمة (C1/C2)، يتم ضغط الجمل الموصولة إلى صفات اسمية ممتدة تُوضع بين أداة التعريف والاسم مباشرة.',
      es: 'En el alemán periodístico y académico de nivel superior (C1/C2), las oraciones de relativo se condensan en atributos participiales extendidos situados entre el artículo y el sustantivo.'
    },
    category: 'adjectives',
    examples: [
      {
        german: 'Die rasch ansteigenden Energiekosten belasten die Wirtschaft.',
        formulaBreakdown: 'Die (Art) + [rasch (Adv) + ansteigenden (Partizip I dekliniert)] + Energiekosten (Nomen) + belasten (V) + die Wirtschaft (O)',
        literalTranslation: {
          en: 'The rapidly increasing energy costs burden the economy.',
          fa: 'هزینه‌های به سرعت در حال افزایش انرژی سنگینی می‌کنند بر اقتصاد.',
          tr: 'Hızla artmakta olan enerji maliyetleri ekonomiye yük oluyor.',
          ar: 'تكاليف الطاقة الآخذة في الارتفاع بسرعة ترهق الاقتصاد.',
          es: 'Los rápidamente crecientes costes energéticos gravan la economía.'
        },
        fluentTranslation: {
          en: 'Rapidly escalating energy costs are putting a heavy strain on the economy.',
          fa: 'افزایش شتابان بهای انرژی بار سنگینی بر دوش اقتصاد کشور نهاده است.',
          tr: 'Hızla tırmanan enerji giderleri ekonomi üzerinde ciddi bir baskı oluşturuyor.',
          ar: 'تفرض تكاليف الطاقة المتصاعدة بسرعة عبئاً كبيراً على الاقتصاد.',
          es: 'El rápido incremento de los costes de energía supone una pesada carga para la economía.'
        },
        isAdvanced: true
      }
    ]
  },

  // C2.1: Konjunktiv I in Indirect Discourse and Nominalstil
  {
    id: 'c2_nominalstil',
    level: 'C2.1',
    lektion: 1,
    germanTitle: 'Der Nominalstil in Wissenschaft und Verwaltung & Konjunktiv I',
    formula: 'Präposition (Genitiv/Dativ) + Nomen (abgeleitet vom Verb) + Genitivattribut / (...)',
    explanation: {
      en: 'At the mastery level (C2), verbal structures are systematically condensed into high-register nominal style (Nominalstil) utilizing prepositional constructions with Genitive or Dative cases, common in legal, philosophical, and institutional discourse.',
      fa: 'در بالاترین سطح تسلط زبانی (C2)، ساختارهای فعلی به سبک اسمی غنی (Nominalstil) با حروف اضافه حاکم بر حالت ملکی (Genitiv) یا مفعولی دوم تبدیل می‌شوند که مشخصه زبان فلسفی، حقوقی و دانشگاهی آلمان است.',
      tr: 'C2 ustalık düzeyinde eylemsel anlatımlar, bilimsel ve resmi dilde yaygın olan isimleştirme stiline (Nominalstil) ve Genitiv/Dativ edatlı yapılara dönüştürülür.',
      ar: 'في مستوى الإتقان الأقصى (C2)، يتم تحويل التراكيب الفعلية إلى الأسلوب الاسمي المكثف (Nominalstil) باستخدام أدوات الجر الملحقة بالمضاف إليه، وهو أسلوب النخبة الفلسفية والقانونية.',
      es: 'En el nivel de maestría (C2), las oraciones verbales se transforman en estilo nominal de alto registro académico y administrativo con preposiciones en genitivo o dativo.'
    },
    category: 'sentence_structure',
    examples: [
      {
        german: 'Infolge des unerwarteten Ausfalls der Stromversorgung kam es zum Produktionsstillstand.',
        formulaBreakdown: 'Infolge (Präp + Gen) + des unerwarteten Ausfalls (Genitivattribut) + der Stromversorgung (Genitiv) + kam es (V) + zum Produktionsstillstand (P+O)',
        literalTranslation: {
          en: 'As a consequence of the unexpected failure of the power supply came it to production standstill.',
          fa: 'در نتیجه قطعی غیرمنتظره جریان برق منجر شد به توقف تولید.',
          tr: 'Elektrik beslemesinin beklenmedik kesintisi sonucunda üretim durması meydana geldi.',
          ar: 'نتيجة للانقطاع غير المتوقع لإمدادات الكهرباء، حدث توقف في الإنتاج.',
          es: 'A consecuencia del inesperado fallo del suministro eléctrico se produjo la paralización de la producción.'
        },
        fluentTranslation: {
          en: 'Following the unforeseen power outage, manufacturing operations came to a complete halt.',
          fa: 'در پی قطع غیرمنتظره جریان برق، فرآیند تولید در کارخانه کاملاً متوقف گردید.',
          tr: 'Elektrik tedarikindeki beklenmedik arıza nedeniyle üretim süreci tamamen durdu.',
          ar: 'على إثر الانقطاع غير المتوقع للتيار الكهربائي، توقفت خطوط الإنتاج بالكامل.',
          es: 'A raíz de la imprevista interrupción del suministro eléctrico, la producción quedó totalmente paralizada.'
        },
        isAdvanced: true
      }
    ]
  }
];

const ALL_GRAMMAR_RULES_RAW: GrammarRule[] = [
  ...BOOK_GRAMMAR_RULES,
  ...BOOK_GRAMMAR_RULES_A2,
  ...BOOK_GRAMMAR_RULES_B1,
  ...BOOK_GRAMMAR_RULES_ADVANCED,
  ...BASE_GRAMMAR_RULES,
  ...EXTENDED_GRAMMAR_RULES
];

const grammarMap = new Map<string, GrammarRule>();
for (const rule of ALL_GRAMMAR_RULES_RAW) {
  if (!grammarMap.has(rule.id)) {
    grammarMap.set(rule.id, rule);
  }
}

export const GRAMMAR_RULES: GrammarRule[] = Array.from(grammarMap.values());

export interface GenderRule {
  level: string;
  article: 'der' | 'die' | 'das';
  title: string;
  ruleExplanation: {
    en: string;
    fa: string;
    tr: string;
    ar: string;
    es: string;
  };
  suffixesOrCategories: string[];
  examples: string[];
}

export const GENDER_RULES: GenderRule[] = [
  {
    level: 'A1',
    article: 'der',
    title: 'Maskulin (der) - Natürliches Geschlecht & Kalender',
    ruleExplanation: {
      en: 'Male persons/professions, days of the week, months, seasons, and compass directions are always masculine (der).',
      fa: 'اشخاص و مشاغل مذکر، روزهای هفته، ماه‌ها، فصل‌ها و جهت‌های جغرافیایی همگی مذکر (der) هستند.',
      tr: 'Erkek şahıslar ve meslekler, haftanın günleri, aylar, mevsimler ve yönler daima eril (der) artikeline sahiptir.',
      ar: 'الأشخاص والمهن المذكرة، وأيام الأسبوع، والشهور، وفصول السنة، والاتجاهات الجغرافية تأخذ دائماً أداة المذكر (der).',
      es: 'Las personas y profesiones masculinas, días de la semana, meses, estaciones del año y puntos cardinales son masculinos (der).'
    },
    suffixesOrCategories: ['Wochentage (Montag...)', 'Monate (Januar...)', 'Jahreszeiten (Sommer...)', 'Männliche Berufe (Lehrer, Arzt)'],
    examples: ['der Montag', 'der Juli', 'der Herbst', 'der Norden', 'der Student']
  },
  {
    level: 'A1',
    article: 'die',
    title: 'Feminin (die) - Weibliche Personen & Endung -in',
    ruleExplanation: {
      en: 'Female persons/professions ending in -in, and the vast majority of two-syllable nouns ending in -e denoting inanimate objects or flowers.',
      fa: 'اشخاص و مشاغل مؤنث با پسوند in-، و اکثر کلمات دو بخشی که به e- ختم می‌شوند مونث (die) هستند.',
      tr: '-in ekiyle biten kadın meslekleri ve -e ile biten iki heceli cansız varlık/çiçek isimleri çoğunlukla dişil (die) olur.',
      ar: 'الإناث والمهن المؤنثة المنتهية بـ in-، وغالبية الأسماء ثنائية المقاطع المنتهية بـ e- تكون مؤنثة (die).',
      es: 'Personas y profesiones femeninas con terminación -in, y la mayoría de sustantivos de dos sílabas que terminan en -e.'
    },
    suffixesOrCategories: ['-in (Lehrerin, Ärztin)', '-e (die Lampe, die Tasche, die Sonne)', 'Blumen & Bäume (die Rose)'],
    examples: ['die Lehrerin', 'die Blume', 'die Straße', 'die Woche', 'die Frage']
  },
  {
    level: 'A1',
    article: 'das',
    title: 'Neutral (das) - Diminutive & Substantivierte Infinitive',
    ruleExplanation: {
      en: 'Diminutives ending in -chen and -lein, and infinitive verbs turned into nouns are always neutral (das).',
      fa: 'کلمات مصغر شده با chen- و lein-، و افعال مصدری که به اسم تبدیل شده‌اند همواره خنثی (das) هستند.',
      tr: '-chen ve -lein küçültme ekleri alan kelimeler ve isimleştirilmiş mastarlar daima nötr (das) olur.',
      ar: 'صيغ التصغير المنتهية بـ chen- و lein-، والمصادر الفعلية المحولة إلى أسماء تكون دائماً محايدة (das).',
      es: 'Los diminutivos terminados en -chen y -lein, y los infinitivos verbales sustantivados siempre son neutros (das).'
    },
    suffixesOrCategories: ['-chen (Mädchen)', '-lein (Fräulein)', 'Infinitiv als Nomen (das Essen, das Leben)'],
    examples: ['das Mädchen', 'das Brötchen', 'das Essen', 'das Trinken', 'das Kind']
  },
  {
    level: 'B1+',
    article: 'die',
    title: 'Feminin (die) - Systematische Suffixe (100% Regel)',
    ruleExplanation: {
      en: 'Nouns ending in the suffixes -ung, -heit, -keit, -schaft, -tion, -tät, -ur, and -ei are guaranteed 100% feminine without exception.',
      fa: 'کلماتی که به پسوندهای ung, -heit, -keit, -schaft, -tion, -tät, -ur, -ei- ختم می‌شوند، بدون استثنا ۱۰۰٪ مونث (die) هستند.',
      tr: '-ung, -heit, -keit, -schaft, -tion, -tät, -ur ve -ei ekleriyle biten tüm kelimeler istisnasız %100 dişildir (die).',
      ar: 'الأسماء التي تنتهي باللواحق: ung, -heit, -keit, -schaft, -tion, -tät, -ur, -ei- هي أسماء مؤنثة (die) بنسبة 100% وبلا استثناء.',
      es: 'Los sustantivos que terminan en los sufijos -ung, -heit, -keit, -schaft, -tion, -tät, -ur y -ei son invariablemente femeninos (die).'
    },
    suffixesOrCategories: ['-ung', '-heit', '-keit', '-schaft', '-tion', '-tät', '-ur', '-ei'],
    examples: ['die Wohnung', 'die Freiheit', 'die Möglichkeit', 'die Freundschaft', 'die Information', 'die Universität', 'die Kultur', 'die Bäckerei']
  },
  {
    level: 'B1+',
    article: 'der',
    title: 'Maskulin (der) - Suffixe für Personen und Systeme',
    ruleExplanation: {
      en: 'Nouns ending in -ismus, -ist, -or, -ent, and -er (derived from verb actions) are masculine (der).',
      fa: 'کلماتی که به پسوندهای ismus, -ist, -or, -ent, -er- (مشتق از فعل) ختم می‌شوند، همواره مذکر (der) هستند.',
      tr: '-ismus, -ist, -or, -ent ve fiilden türetilmiş -er ekleriyle biten kelimeler eril (der) artikeli alır.',
      ar: 'الأسماء المنتهية باللواحق: ismus, -ist, -or, -ent, -er- تأخذ أداة المذكر (der).',
      es: 'Los sustantivos terminados en -ismus, -ist, -or, -ent y -er (derivados de verbos) son masculinos (der).'
    },
    suffixesOrCategories: ['-ismus (Kapitalismus)', '-ist (Optimist)', '-or (Motor)', '-ent (Student)', '-er (Fahrer)'],
    examples: ['der Optimismus', 'der Journalist', 'der Motor', 'der Dozent', 'der Computer']
  },
  {
    level: 'B1+',
    article: 'das',
    title: 'Neutral (das) - Internationale Suffixe & Kollektiva',
    ruleExplanation: {
      en: 'Nouns ending in -ment, -um, -ma, and words with collective prefix Ge-...-e are neutral (das).',
      fa: 'کلماتی که به پسوندهای ment, -um, -ma- ختم می‌شوند و کلمات جمعی با پیشوند Ge-...-e خنثی (das) هستند.',
      tr: '-ment, -um, -ma ekleriyle biten ve Ge-...-e kalıbındaki topluluk bildiren isimler nötrdür (das).',
      ar: 'الأسماء المنتهية بـ ment, -um, -ma- وأسماء الجمع المسبوقة بـ Ge-...-e تكون محايدة (das).',
      es: 'Los sustantivos terminados en -ment, -um, -ma y nombres colectivos con prefijo Ge-...-e son neutros (das).'
    },
    suffixesOrCategories: ['-ment (Dokument)', '-um (Zentrum)', '-ma (Thema)', 'Ge-...-e (Gebäude)'],
    examples: ['das Instrument', 'das Museum', 'das Thema', 'das Gebäude', 'das Ergebnis']
  }
];
