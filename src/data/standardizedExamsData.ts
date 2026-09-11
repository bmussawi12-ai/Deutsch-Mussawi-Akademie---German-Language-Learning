import { StandardizedExam } from '../types';
import { EXAM_GOETHE_A1, EXAM_TELC_A1 } from './standardizedExamsDataA1';
import { EXAM_GOETHE_A2, EXAM_TELC_A2 } from './standardizedExamsDataA2';
import { EXAM_GOETHE_B1 } from './standardizedExamsDataB1';
import { EXAM_TELC_B1 } from './standardizedExamsDataTelcB1';
import { EXTRA_EXAMS_B1 } from './standardizedExamsB1Extra';
import { EXAM_GOETHE_B2 } from './standardizedExamsDataB2_C1';
import { EXAM_TELC_B2 } from './standardizedExamsDataTelcB2';
import { EXTRA_EXAMS_B2 } from './standardizedExamsB2Extra';
import { EXAM_GOETHE_C1 } from './standardizedExamsDataGoetheC1';
import { EXAM_TELC_C1 } from './standardizedExamsDataTelcC1';
import { EXTRA_EXAMS_C1 } from './standardizedExamsC1Extra';
import { EXAM_GOETHE_C2 } from './standardizedExamsDataC2';
import { EXAM_TELC_C2 } from './standardizedExamsDataTelcC2';
import { EXTRA_EXAMS_C2 } from './standardizedExamsC2Extra';

export const COMPREHENSIVE_STANDARDIZED_EXAMS: StandardizedExam[] = [
  // A1 (2 exams)
  EXAM_GOETHE_A1,
  EXAM_TELC_A1,

  // A2 (2 exams)
  EXAM_GOETHE_A2,
  EXAM_TELC_A2,

  // B1 (10 exams total: 2 initial + 8 comprehensive extra)
  EXAM_GOETHE_B1,
  EXAM_TELC_B1,
  ...EXTRA_EXAMS_B1,

  // B2 (10 exams total: 2 initial + 8 comprehensive extra)
  EXAM_GOETHE_B2,
  EXAM_TELC_B2,
  ...EXTRA_EXAMS_B2,

  // C1 (10 exams total: 2 initial + 8 comprehensive extra)
  EXAM_GOETHE_C1,
  EXAM_TELC_C1,
  ...EXTRA_EXAMS_C1,

  // C2 (10 exams total: 2 initial + 8 comprehensive extra)
  EXAM_GOETHE_C2,
  EXAM_TELC_C2,
  ...EXTRA_EXAMS_C2,
];
