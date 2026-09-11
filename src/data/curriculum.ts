import { Lesson, ExerciseChapter, CEFRLevel } from '../types';
import { CURRICULUM_A1_1 } from './curriculumA1_1';
import { CURRICULUM_A1_2 } from './curriculumA1_2';
import { CURRICULUM_A2_1 } from './curriculumA2_1';
import { CURRICULUM_A2_2 } from './curriculumA2_2';
import { CURRICULUM_B1_1 } from './curriculumB1_1';
import { CURRICULUM_B1_2 } from './curriculumB1_2';
import { CURRICULUM_B2_1 } from './curriculumB2_1';
import { CURRICULUM_B2_2 } from './curriculumB2_2';
import { CURRICULUM_C1_1 } from './curriculumC1_1';
import { CURRICULUM_C1_2 } from './curriculumC1_2';
import { CURRICULUM_C2_1 } from './curriculumC2_1';
import { CURRICULUM_C2_2 } from './curriculumC2_2';
import { COMPREHENSIVE_CUMULATIVE_REVIEWS } from './cumulativeExercisesData';

export const CURRICULUM_LESSONS: Record<CEFRLevel, Lesson[]> = {
  'A1.1': CURRICULUM_A1_1,
  'A1.2': CURRICULUM_A1_2,
  'A2.1': CURRICULUM_A2_1,
  'A2.2': CURRICULUM_A2_2,
  'B1.1': CURRICULUM_B1_1,
  'B1.2': CURRICULUM_B1_2,
  'B2.1': CURRICULUM_B2_1,
  'B2.2': CURRICULUM_B2_2,
  'C1.1': CURRICULUM_C1_1,
  'C1.2': CURRICULUM_C1_2,
  'C2.1': CURRICULUM_C2_1,
  'C2.2': CURRICULUM_C2_2
};

// Cumulative review chapters (Übungskapitel) appearing after every 3-4 lessons
export const CUMULATIVE_REVIEWS: ExerciseChapter[] = [
  ...COMPREHENSIVE_CUMULATIVE_REVIEWS
];
