import type { Survey } from '../data/surveys';
import { api } from '../api/client';
import {
  REGIONS, EMPLOYMENT, EDUCATION, INCOME_BANDS, SETTLEMENT,
} from '../data/reference';
import { QUIZZES } from '../data/quizzes';

/**
 * Whether the registered taker qualifies for a survey, and if not, why.
 *
 * The reason matters as much as the verdict: "Talab: Toshkent viloyati" tells
 * someone why a survey is closed, and an unanswered quiz question tells them
 * what to fill in to open it.
 */

export interface Eligibility {
  eligible: boolean;
  reasons: string[];
}

const labelOf = (list: { id: string; label: string }[], id: string) =>
  list.find((x) => x.id === id)?.label ?? id;

function questionLabel(questionId: string): string {
  for (const quiz of QUIZZES) {
    const q = quiz.questions.find((x) => x.id === questionId);
    if (q) return `«${quiz.title}» viktorinasi`;
  }
  return 'qo\u2019shimcha profil ma\u2019lumoti';
}

export function eligibilityFor(survey: Survey): Eligibility {
  const taker = api.getDraft().draft;
  const stored = api.getWallet();
  void stored;
  const reasons: string[] = [];
  const t = survey.targeting;

  // Before registration nothing is targetable, so nothing is eligible.
  if (!taker || !taker.region) {
    return { eligible: false, reasons: ['ro\u2019yxatdan o\u2019tish'] };
  }

  const age = taker.birthYear ? 2026 - taker.birthYear : null;
  if (t.ageMin !== undefined && age !== null && age < t.ageMin) reasons.push(`${t.ageMin} yoshdan katta`);
  if (t.ageMax !== undefined && age !== null && age > t.ageMax) reasons.push(`${t.ageMax} yoshgacha`);

  if (t.regions?.length && !t.regions.includes(taker.region)) {
    reasons.push(t.regions.map((r) => labelOf(REGIONS.map((x) => ({ id: x.id, label: x.name })), r)).join(' yoki '));
  }
  if (t.settlements?.length && taker.settlement && !t.settlements.includes(taker.settlement)) {
    reasons.push(t.settlements.map((s) => labelOf(SETTLEMENT, s)).join(' yoki '));
  }
  if (t.education?.length && taker.education && !t.education.includes(taker.education)) {
    reasons.push(t.education.map((e) => labelOf(EDUCATION, e)).join(' yoki '));
  }
  if (t.employment?.length && taker.employment && !t.employment.includes(taker.employment)) {
    reasons.push(t.employment.map((e) => labelOf(EMPLOYMENT, e)).join(' yoki '));
  }
  if (t.income?.length && taker.income && !t.income.includes(taker.income)) {
    reasons.push(t.income.map((i) => labelOf(INCOME_BANDS, i)).join(' yoki '));
  }

  if (t.attributes) {
    for (const [questionId, accepted] of Object.entries(t.attributes)) {
      const held = taker.quizAnswers?.[questionId];
      if (held === undefined) {
        reasons.push(questionLabel(questionId));
        continue;
      }
      const list = Array.isArray(held) ? held : [held];
      if (!list.some((h) => accepted.includes(h))) {
        reasons.push('boshqa profil javobi');
      }
    }
  }

  return { eligible: reasons.length === 0, reasons: [...new Set(reasons)] };
}
