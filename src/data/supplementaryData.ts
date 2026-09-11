import { StandardizedExam, WritingTemplate, PronunciationRule } from '../types';
import { COMPREHENSIVE_STANDARDIZED_EXAMS } from './standardizedExamsData';

export const STANDARDIZED_EXAMS: StandardizedExam[] = [
  ...COMPREHENSIVE_STANDARDIZED_EXAMS
];

export const WRITING_TEMPLATES: WritingTemplate[] = [
  {
    id: 'tpl_wohnung',
    title: 'Wohnungsbewerbung / Mietanfrage (Formal)',
    situation: 'Formal inquiry to a landlord or property management company applying for an apartment viewing.',
    type: 'formal',
    level: 'A2.1',
    subjectLine: 'Bewerbung um die 2-Zimmer-Wohnung in der Schillerstraße 45',
    salutation: 'Sehr geehrte Damen und Herren, / Sehr geehrter Herr Fischer,',
    opening: 'mit großem Interesse habe ich Ihre Wohnungsanzeige auf dem Immobilienportal gelesen.',
    bodyPhrases: [
      {
        german: 'Ich bin als Softwareentwickler in Hamburg unbefristet angestellt und verfüge über ein gesichertes Einkommen.',
        translation: {
          en: 'I am permanently employed as a software developer in Hamburg and have a secure income.',
          fa: 'من به عنوان توسعه‌دهنده نرم‌افزار در هامبورگ استخدام دائم هستم و دارای درآمد ثابت و مطمئن می‌باشم.',
          prs: 'من به حیث توسعه‌دهنده نرم‌افزار در هامبورگ استخدام دائم بوده و درآمد مطمئن دارم.',
          tr: 'Hamburg\'da yazılım geliştirici olarak süresiz sözleşmeyle çalışmaktayım ve düzenli gelire sahibim.',
          ar: 'أعمل كمطور برمجيات في هامبورغ بعقد غير محدد المدة ولدي دخل ثابت ومضمون.',
          es: 'Trabajo como desarrollador de software en Hamburgo con contrato indefinido e ingresos estables.'
        }
      },
      {
        german: 'Gern übersende ich Ihnen im Anhang meine letzten drei Gehaltsabrechnungen sowie eine aktuelle Schufa-Auskunft.',
        translation: {
          en: 'I would gladly send you attached my last three payslips and an up-to-date Schufa credit report.',
          fa: 'با کمال میل فیش‌های حقوقی سه ماه اخیر و گواهی شوفای خود را به پیوست ارسال می‌نمایم.',
          prs: 'فیش‌های معاش ۳ ماه گذشته و سند شوفا را در ضمیمه روان می‌کنم.',
          tr: 'Ekte son üç aylık maaş bordromu ve güncel Schufa kredi geçmişi belgemi sunmaktan memnuniyet duyarım.',
          ar: 'يسعدني أن أرفق لكم قسائم الراتب للأشهر الثلاثة الأخيرة وتقرير شومالي مالي (Schufa) حديث.',
          es: 'Con gusto les adjunto mis tres últimas nóminas y un informe Schufa actualizado.'
        }
      },
      {
        german: 'Wäre ein persönlicher Besichtigungstermin im Laufe der nächsten Woche möglich?',
        translation: {
          en: 'Would an in-person viewing appointment be possible in the course of next week?',
          fa: 'آیا امکان تعیین وقت بازدید حضوری در طول هفته آینده وجود دارد؟',
          prs: 'آیا امکان ملاقات حضوری برای دیدن خانه در هفته آینده هست؟',
          tr: 'Gelecek hafta içinde daireyi yerinde görmem için bir randevu mümkün olabilir mi?',
          ar: 'هل يمكن ترتيب موعد لمعاينة الشقة خلال الأسبوع القادم؟',
          es: '¿Sería posible concertar una cita de visita en el transcurso de la próxima semana?'
        }
      }
    ],
    closing: 'Für Rückfragen stehe ich Ihnen jederzeit gern telefonisch oder per E-Mail zur Verfügung.',
    signoff: 'Mit freundlichen Grüßen\nKenan Yilmaz',
    fullSample: 'Sehr geehrte Damen und Herren,\n\nmit großem Interesse habe ich Ihre Wohnungsanzeige für die 2-Zimmer-Wohnung in der Schillerstraße gelesen. Da ich eine neue Stelle in Hamburg antrete, suche ich zum nächstmöglichen Zeitpunkt eine ruhige Wohnung.\n\nIch bin als Softwareentwickler unbefristet angestellt und verfüge über ein geregeltes Einkommen. Ich bin Nichtraucher und halte keine Haustiere. Meine Bewerbungsunterlagen (Gehaltsnachweise, Schufa-Auskunft) habe ich beigefügt.\n\nÜber eine Einladung zu einem Besichtigungstermin würde ich mich sehr freuen.\n\nMit freundlichen Grüßen\nKenan Yilmaz'
  },
  {
    id: 'tpl_krankmeldung',
    title: 'Krankmeldung am Arbeitsplatz (Formal)',
    situation: 'Notifying your employer / supervisor about sick leave according to German labor law requirements.',
    type: 'formal',
    level: 'A2.1',
    subjectLine: 'Krankmeldung - Kenan Yilmaz',
    salutation: 'Sehr geehrte Frau Dr. Berg,',
    opening: 'leider muss ich Ihnen mitteilen, dass ich heute erkrankt bin und meinen Dienst nicht antreten kann.',
    bodyPhrases: [
      {
        german: 'Ich werde heute Vormittag meinen Hausarzt aufsuchen und Ihnen die Arbeitsunfähigkeitsbescheinigung (eAU) zeitnah zukommen lassen.',
        translation: {
          en: 'I will consult my primary care physician this morning and transmit the certificate of incapacity to work promptly.',
          fa: 'من امروز صبح به پزشک خانواده مراجعه خواهم کرد و گواهی مرخصی استعلاجی را در اسرع وقت ارسال خواهم نمود.',
          prs: 'امروز پیش داکتر می‌روم و پارچه مریضی را برایتان می‌فرستم.',
          tr: 'Bu sabah aile hekimime gideceğim ve iş göremezlik raporunu ivedilikle ileteceğim.',
          ar: 'سأراجع طبيب الأسرة هذا الصباح وسأوافيكم بتقرير الإجازة المرضية على الفور.',
          es: 'Acudiré al médico de cabecera esta mañana y les haré llegar la baja médica con prontitud.'
        }
      },
      {
        german: 'Meine Kollegin Frau Sommer hat sich freundlicherweise bereit erklärt, meine dringenden Termine zu vertreten.',
        translation: {
          en: 'My colleague Ms. Sommer has kindly agreed to cover my urgent appointments.',
          fa: 'همکارم خانم زومر با کمال لطف موافقت کرده‌اند که جلسات فوری من را پوشش دهند.',
          prs: 'همکارم خانم زومر لطف کرده کارهای عاجل مرا پیش می‌برد.',
          tr: 'Meslektaşım Bayan Sommer acil randevularıma vekalet etmeyi nezaketle kabul etti.',
          ar: 'وافقت الزميلة السيدة زومر مشكورة على تغطية مواعيدي العاجلة.',
          es: 'Mi compañera, la señora Sommer, ha tenido la amabilidad de asumir mis reuniones urgentes.'
        }
      }
    ],
    closing: 'Sobald feststeht, wie lange die Krankschreibung voraussichtlich dauert, gebe ich Ihnen umgehend Bescheid.',
    signoff: 'Mit besten Grüßen\nKenan Yilmaz',
    fullSample: 'Sehr geehrte Frau Dr. Berg,\n\nleider muss ich mich für den heutigen Tag krankmelden. Ich habe hohes Fieber und kann nicht ins Büro kommen.\n\nIch gehe heute Vormittag zum Arzt und informiere Sie anschließend über die voraussichtliche Krankheitsdauer. Die Arbeitsunfähigkeitsbescheinigung lasse ich Ihnen elektronisch übermitteln. Dringende Kundenanfragen habe ich an Frau Sommer weitergeleitet.\n\nMit besten Grüßen\nKenan Yilmaz'
  }
];

export const PRONUNCIATION_RULES: PronunciationRule[] = [
  {
    id: 'pron_umlauts',
    title: 'Deutsche Umlaute (ä, ö, ü)',
    ipaSymbol: '[ɛː / eː], [øː / œ], [yː / ʏ]',
    explanation: {
      en: 'German vowels with umlauts shift tongue position and lip rounding. Ä sounds like "ai" in air; Ö rounds lips while saying "ay"; Ü rounds lips while saying "ee".',
      fa: 'صداهای اوملاوت در آلمانی با تغییر موقعیت زبان و فرم لب‌ها تلفظ می‌شوند: Ä مانند صدای "e" کشیده؛ Ö با گرد کردن لب‌ها هنگام تلفظ "ای"؛ و Ü با گرد کردن فشرده لب‌ها هنگام تلفظ "ای".',
      prs: 'صداهای اوملاوت: Ä صدای e کشیده، Ö با لب‌های گرد، و Ü با لب‌های غنچه‌شده تلفظ می‌شود.',
      tr: 'Almanca noktalı ünlüler dudak ve dil pozisyonuyla değişir: Ä açık \'e\' sesi; Ö dudakları yuvarlayarak; Ü ise dudakları büzerek \'i\' sesi çıkarmaktır.',
      ar: 'أحرف الإمالة (الأوملاوت) الألمانية تتطلب تدوير الشفاه وحركة محددة للسان: Ä تشبه الألف الممالة، وÖ تدوير الشفاه مع صوت الياء، وÜ تدوير مشدود للشفاه.',
      es: 'Las vocales con diéresis modifican la forma de los labios: Ä suena como una "e" abierta; Ö redondea los labios pronunciando "e"; Ü redondea los labios pronunciando "i".'
    },
    examples: [
      { word: 'spät', ipa: '[ʃpɛːt]', note: 'Langes offenes Ä' },
      { word: 'schön', ipa: '[ʃøːn]', note: 'Langes geschlossenes Ö' },
      { word: 'müde', ipa: '[ˈmyːdə]', note: 'Langes geschlossenes Ü' },
      { word: 'Mütter', ipa: '[ˈmʏtɐ]', note: 'Kurzes offenes Ü' }
    ]
  },
  {
    id: 'pron_ch',
    title: 'Die zwei ch-Laute: "Ich-Laut" [ç] und "Ach-Laut" [x]',
    ipaSymbol: '[ç] vs. [x]',
    explanation: {
      en: 'After front vowels (e, i, ä, ö, ü) or consonants (l, n, r), "ch" is pronounced soft like in "ich" [ç]. After back vowels (a, o, u, au), it is pronounced guttural in the throat like in "Bach" [x].',
      fa: 'پس از حروف صدادار پیشین (e, i, ä, ö, ü) یا صامت‌ها، صدای "ch" نرم و سوت‌مانند [ç] است. پس از حروف صدادار پسین (a, o, u, au)، در انتهای گلو به صورت "خ" غلیظ [x] تلفظ می‌شود.',
      prs: 'بعد از حروف صدادار پیشین ch نرم شبیه شین خفیف و بعد از حروف پسین خ غلیظ ادا می‌شود.',
      tr: 'Ön ünlülerden (e, i, ä, ö, ü) sonra yumuşak [ç] sesi (fısıltılı \'h/ş\'); arka ünlülerden (a, o, u, au) sonra ise gırtlaktan sert \'h/hırıltı\' [x] sesi çıkar.',
      ar: 'بعد الأحرف الصوتية الأمامية (e, i, ä, ö, ü) يلفظ بصوت مرقق وشبيه بالشين الرقيقة [ç]. أما بعد الأحرف الخلفية (a, o, u, au) فيلفظ خاءً حنجرية واضحة [x].',
      es: 'Tras vocales anteriores (e, i, ä, ö, ü) suena suave [ç]; tras vocales posteriores (a, o, u, au) suena gutural como la "j" española [x].'
    },
    examples: [
      { word: 'ich', ipa: '[ʔɪç]', note: 'Ich-Laut nach [i]' },
      { word: 'sprechen', ipa: '[ˈʃpʁɛçn̩]', note: 'Ich-Laut nach [e]' },
      { word: 'Buch', ipa: '[buːx]', note: 'Ach-Laut nach [u]' },
      { word: 'kochen', ipa: '[ˈkɔxn̩]', note: 'Ach-Laut nach [o]' }
    ]
  },
  {
    id: 'pron_auslaut',
    title: 'Auslautverhärtung (Final Devoicing)',
    ipaSymbol: 'b→[p], d→[t], g→[k]',
    explanation: {
      en: 'Voiced consonants (b, d, g) at the end of a word or syllable are pronounced unvoiced as [p], [t], [k].',
      fa: 'حروف بی‌صدا واک‌دار (b, d, g) در انتهای کلمه یا سیلاب، به صورت بی‌واک یعنی [p], [t], [k] ادا می‌شوند.',
      prs: 'حروف بی‌صدا واک‌دار در آخر کلمه یا هجا تبدیل به صدای بی‌واک [p], [t], [k] می‌شوند.',
      tr: 'Kelime veya hece sonundaki ötümlü ünsüzler (b, d, g), ötümsüz sert seslere dönüşür: b→[p], d→[t], g→[k].',
      ar: 'الحروف الساكنة المجهورة (b, d, g) في نهاية الكلمة أو المقطع الصوتي تفقد جهرها وتلفظ مهموسة: b تُلفظ [p]، و d تُلفظ [t]، و g تُلفظ [k].',
      es: 'Las consonantes sonoras (b, d, g) al final de palabra o sílaba se ensordecen pronunciándose [p], [t], [k].'
    },
    examples: [
      { word: 'Abend', ipa: '[ˈaːbn̩t]', note: 'd klingt wie [t]' },
      { word: 'Tag', ipa: '[taːk]', note: 'g klingt wie [k]' },
      { word: 'Urlaub', ipa: '[ˈuːɐ̯laʊ̯p]', note: 'b klingt wie [p]' }
    ]
  }
];
