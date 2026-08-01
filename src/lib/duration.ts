import { PANEL_HOURLY_RATE, roundUpTo500 } from './money';

/** Seconds a respondent needs per question type. Tuned in the MVP plan. */
export const QUESTION_SECONDS = {
  single: 8,
  multi: 12,
  scale: 8,
  short_text: 25,
  long_text: 45,
} as const;

export type QuestionType = keyof typeof QUESTION_SECONDS;

export const estimateSeconds = (types: QuestionType[]): number =>
  types.reduce((total, t) => total + QUESTION_SECONDS[t], 0);

export const estimateMinutes = (types: QuestionType[]): number =>
  Math.max(1, Math.ceil(estimateSeconds(types) / 60));

/**
 * The reward floor. This is the mechanism that keeps both sides of the
 * marketplace alive: a creator cannot buy a long survey cheaply, because
 * underpaid respondents either abandon it or rush it, and rushed answers are
 * exactly the data quality problem Fikra exists to solve.
 */
export const minimumReward = (types: QuestionType[]): number =>
  roundUpTo500((estimateSeconds(types) / 3600) * PANEL_HOURLY_RATE);

/** How many questions fit within a given reward, used for the inline hint. */
export function maxQuestionsForReward(reward: number, avgType: QuestionType = 'single'): number {
  const perQuestion = (QUESTION_SECONDS[avgType] / 3600) * PANEL_HOURLY_RATE;
  return Math.max(1, Math.floor(reward / perQuestion));
}
