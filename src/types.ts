export type LanguageCode = 'en' | 'fa' | 'prs' | 'tr' | 'ar' | 'es' | 'ps';

export interface LanguageOption {
  code: LanguageCode;
  name: string;
  nativeName: string;
  flag: string;
  dir: 'ltr' | 'rtl';
}

export type CEFRLevel = 
  | 'A1.1' | 'A1.2' 
  | 'A2.1' | 'A2.2' 
  | 'B1.1' | 'B1.2' 
  | 'B2.1' | 'B2.2' 
  | 'C1.1' | 'C1.2' 
  | 'C2.1' | 'C2.2';

export type MainTab = 
  | 'dashboard'
  | 'lesson' 
  | 'grammar' 
  | 'glossary' 
  | 'exercises' 
  | 'exams' 
  | 'writing' 
  | 'pronunciation';

export type Gender = 'maskulin' | 'feminin' | 'neutral' | 'plural';

export interface TranslatedText {
  en: string;
  fa: string;
  prs?: string; // Persian Dari (فارسی دری)
  tr: string;
  ar: string;
  es: string;
  ps?: string; // Pashto (پښتو)
  [key: string]: string | undefined;
}

export interface SubtitleConfig {
  enabled: boolean;
  language: LanguageCode;
}

export interface GrammarExample {
  german: string;
  formulaBreakdown: string; // e.g. "Ich (S) + komme (V) + aus Berlin (...)"
  literalTranslation: TranslatedText;
  fluentTranslation: TranslatedText;
  isAdvanced?: boolean;
}

export interface GrammarRule {
  id: string;
  level: CEFRLevel;
  lektion?: number;
  germanTitle: string;
  formula: string; // e.g. "S + V (conjugated) + ..." or "S + V1 (modal) + ... + *V2 (infinitive)*"
  explanation: TranslatedText;
  examples?: GrammarExample[];
  category?: 
    | 'sentence_structure' 
    | 'verbs' 
    | 'verb_conjugation'
    | 'cases' 
    | 'prepositions' 
    | 'adjectives' 
    | 'connectors' 
    | 'conjunctions'
    | 'subordinate_clauses'
    | 'modal_verbs'
    | 'subjunctive'
    | 'passive_voice'
    | 'passive_subjunctive'
    | string;
}

export interface GlossaryEntry {
  id: string;
  level: CEFRLevel;
  lektion: number;
  article: 'der' | 'die' | 'das' | '';
  word: string;
  plural: string;
  gender?: Gender;
  ipa: string;
  translation: TranslatedText;
  exampleGerman: string;
  exampleTranslation: TranslatedText;
}

export interface ExerciseQuestion {
  id: string;
  type: 'multiple_choice' | 'fill_blank' | 'sentence_reorder' | 'matching';
  instruction: TranslatedText;
  prompt: string;
  options?: string[]; // For multiple choice or sentence reordering chunks
  correctAnswer: string | string[];
  explanation: TranslatedText; // Translated explanation why this is correct
  audioTranscript?: string;
}

export interface ExerciseChapter {
  id: string;
  title: string;
  lektionRef: string;
  type: 'micro' | 'review' | 'final';
  level: CEFRLevel;
  questions: ExerciseQuestion[];
}

export interface FotoHoergeschichte {
  title: string;
  imagePrompt: string;
  imageTheme: string;
  audioDuration: string;
  transcript: {
    speaker: string;
    text: string;
  }[];
  summary: TranslatedText;
}

export interface LessonSection {
  title: string;
  description: TranslatedText;
  focus: string; // e.g., "Sprechen & Hören", "Grammatik", etc.
  content?: string;
  audioText?: string;
  audioTranscript?: string;
  readingText?: {
    type: string; // e.g., "SMS / Email", "Zeitungsartikel", "Formular"
    title: string;
    body: string;
  };
  grammarSnippet?: GrammarRule;
  grammarRule?: GrammarRule;
  practiceTasks?: string[];
}

export interface VideoClip {
  title: string;
  scenario: string;
  category?: 'alltag' | 'interview' | 'animation' | 'beruf' | 'dialog' | 'pruefung' | string;
  duration?: string;
  germanTranscript: string[];
  translatedTranscript: TranslatedText[];
  youtubeId?: string;
  keyPhrases?: string[];
  speakers?: string[];
}

export interface Lesson {
  id: string;
  lektionNumber: number;
  level: CEFRLevel;
  title: string;
  subTitle: string;
  topic: string;
  fotoHoergeschichte: FotoHoergeschichte;
  sectionA: LessonSection; // Sprechen & Hören
  sectionB: LessonSection; // Hören & Wortschatz
  sectionC: LessonSection; // Sprechen & Dialoge
  sectionD: LessonSection; // Lesen & Textanalyse
  sectionE: LessonSection; // Grammatik & Schreiben
  videoClip?: VideoClip;
  exercises?: ExerciseQuestion[];
  vocabularies?: any[];
  examTip?: {
    standard: string;
    module: string;
    tip: TranslatedText;
  } | TranslatedText;
}

export interface ExamStrategy {
  level: CEFRLevel;
  timeManagement: {
    section: string;
    allocatedMinutes: number;
    tip: TranslatedText;
  }[];
  stepByStepStrategies: {
    title: string;
    steps: TranslatedText[];
  }[];
  commonMistakes: {
    mistake: string;
    correction: string;
    explanation: TranslatedText;
  }[];
}

export interface ExamModuleLesen {
  title: string;
  durationMinutes: number;
  texts: {
    title: string;
    sourceType: string;
    body: string;
    questions: {
      id: string;
      question: string;
      options: string[];
      correctAnswer: string;
      explanation: TranslatedText;
    }[];
  }[];
}

export interface ExamModuleHoeren {
  title: string;
  durationMinutes: number;
  audioItems: {
    id: string;
    title: string;
    situation: string;
    transcript: string;
    questions: {
      id: string;
      question: string;
      options: string[];
      correctAnswer: string;
      explanation: TranslatedText;
    }[];
  }[];
}

export interface ExamModuleSchreiben {
  title: string;
  durationMinutes: number;
  taskType: string;
  situation: string;
  prompt: string;
  guidingPoints: string[];
  targetWordCount: string;
  sampleSolution: string;
  scoringCriteria: TranslatedText;
}

export interface ExamModuleSprechen {
  title: string;
  durationMinutes: number;
  teil1: {
    name: string;
    instruction: TranslatedText;
    prompts: string[];
    sampleResponse: string;
  };
  teil2: {
    name: string;
    instruction: TranslatedText;
    topicCards: string[];
    sampleResponse: string;
  };
  teil3: {
    name: string;
    instruction: TranslatedText;
    planningScenario: string;
    discussionPoints: string[];
    sampleResponse: string;
  };
}

export interface StandardizedExam {
  id: string;
  title: string;
  standard: 'Goethe-Zertifikat' | 'telc' | 'Zertifikat Deutsch' | 'ÖSD' | 'TestDaF';
  level: CEFRLevel | 'A1+A2' | 'A1-B1' | 'B1+B2';
  totalDurationMinutes: number;
  passingScore: string;
  strategy: ExamStrategy;
  lesen: ExamModuleLesen;
  hoeren: ExamModuleHoeren;
  schreiben: ExamModuleSchreiben;
  sprechen: ExamModuleSprechen;
}

export interface WritingTemplate {
  id: string;
  title: string;
  situation: string;
  type: 'formal' | 'informal';
  level: CEFRLevel;
  subjectLine: string;
  salutation: string;
  opening: string;
  bodyPhrases: {
    german: string;
    translation: TranslatedText;
  }[];
  closing: string;
  signoff: string;
  fullSample: string;
}

export interface PronunciationRule {
  id: string;
  title: string;
  ipaSymbol: string;
  explanation: TranslatedText;
  examples: {
    word: string;
    ipa: string;
    note: string;
  }[];
}

export type Language = LanguageCode | 'de';

export interface LevelProgress {
  level: string;
  levelNameEn: string;
  levelNameFa: string;
  vocabulary: number;
  grammar: number;
  examPractice: number;
  vocabWordsLearned: number;
  vocabWordsTotal: number;
  grammarRulesMastered: number;
  grammarRulesTotal: number;
  mockExamsCompleted: number;
  mockExamsTotal: number;
  status: 'mastered' | 'in-progress' | 'upcoming';
  descriptionEn: string;
  descriptionFa: string;
}

export interface TranslationDictionary {
  dashboardTitle: string;
  dashboardSubtitle: string;
  overallMastery: string;
  vocabulary: string;
  grammar: string;
  examPractice: string;
  overallAverage: string;
  allLevels: string;
  level: string;
  completionRate: string;
  radarChartTitle: string;
  radarChartDesc: string;
  barChartTitle: string;
  barChartDesc: string;
  chartView: string;
  radar: string;
  bar: string;
  both: string;
  levelDetails: string;
  adjustProgress: string;
  wordsLearned: string;
  rulesMastered: string;
  examsCompleted: string;
  statusMastered: string;
  statusInProgress: string;
  statusUpcoming: string;
  currentEstimatedLevel: string;
  recommendedFocus: string;
  resetData: string;
  saveChanges: string;
  languageToggle: string;
  targetBenchmark: string;
  masteryScore: string;
  quickAddProgress: string;
  interactiveEditor: string;
  interactiveEditorDesc: string;
}

export interface CEFRBadge {
  id: string;
  level: string; // 'A1', 'A2', 'B1', 'B2', 'C1', 'C2' or 'milestone'
  titleDe: string;
  titleFa: string;
  titleEn: string;
  descriptionDe: string;
  descriptionFa: string;
  descriptionEn: string;
  tier: 'bronze' | 'silver' | 'gold' | 'platinum' | 'diamond';
  requiredLevel: string;
  minMastery: number;
  unlockedAt?: string;
  isUnlocked: boolean;
  rewardCode?: string;
}

export interface UserLearningStats {
  overallMasteryPercent: number; // e.g. 54%
  learnedWordsCount: number; // e.g. 6404
  masteredRulesCount: number; // e.g. 180
  completedExamsCount: number;
  completedLessonsCount: number;
  dailyStreak: number;
  lastActiveDate: string;
  activeLevel: CEFRLevel;
  earnedBadgeIds: string[];
  recentActivities: {
    id: string;
    type: 'word' | 'grammar' | 'exam' | 'lesson';
    title: string;
    timestamp: string;
    detail: string;
  }[];
}
