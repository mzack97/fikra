/**
 * Panel seed generator.
 *
 * Produces 2 000 synthetic panelists deterministically — the same seed always
 * yields the same panel, so the demo is identical every run and a number quoted
 * on a slide still matches the screen a week later.
 *
 * The correlations below are the important part. Sampling every attribute
 * independently produces impossible people — a 17-year-old company director
 * earning 20 million so'm — and one of those visible on screen undoes the
 * credibility of every other number in the product.
 */

import {
  REGIONS, SETTLEMENT, GENDER, EDUCATION, EMPLOYMENT, INCOME_BANDS,
  HOUSEHOLD_SIZE, LANGUAGE, CHILDREN, AGE_BRACKETS,
} from '../data/reference';
import { QUIZZES } from '../data/quizzes';

export const PANEL_SIZE = 2000;
const SEED = 20260802;

/** Mulberry32 — small, fast, deterministic. */
function makeRng(seed: number) {
  let a = seed >>> 0;
  return () => {
    a |= 0;
    a = (a + 0x6d2b79f5) | 0;
    let t = Math.imul(a ^ (a >>> 15), 1 | a);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

type Weighted = { id: string; weight: number };

function pickWeighted<T extends Weighted>(items: T[], rnd: number): T {
  const total = items.reduce((s, i) => s + i.weight, 0);
  let acc = 0;
  const target = rnd * total;
  for (const item of items) {
    acc += item.weight;
    if (target <= acc) return item;
  }
  return items[items.length - 1];
}

export interface Panelist {
  id: string;
  birthYear: number;
  age: number;
  ageBracket: string;
  gender: string;
  region: string;
  settlement: string;
  education: string;
  employment: string;
  income: string;
  household: string;
  language: string;
  children: string;
  /** questionId -> optionId (single) or optionId[] (multi) */
  attributes: Record<string, string | string[]>;
  completedQuizzes: string[];
  qualityScore: number;
  verified: boolean;
}

const CURRENT_YEAR = 2026;

/** Regions where rural settlement dominates. */
const RURAL_HEAVY = new Set(['kashkadarya', 'surkhandarya', 'jizzakh', 'khorezm', 'karakalpakstan', 'namangan']);

export function generatePanel(size: number = PANEL_SIZE): Panelist[] {
  const rng = makeRng(SEED);
  const panel: Panelist[] = [];

  for (let i = 0; i < size; i++) {
    // --- Age first: almost everything else depends on it ---
    const bracket = pickWeighted(AGE_BRACKETS.map((b) => ({ ...b })), rng());
    const age = bracket.min + Math.floor(rng() * (bracket.max - bracket.min + 1));
    const birthYear = CURRENT_YEAR - age;

    // --- Region, then settlement conditioned on it ---
    const region = pickWeighted(REGIONS.map((r) => ({ id: r.id, weight: r.panelWeight })), rng()).id;
    let settlement: string;
    if (region === 'tashkent_city') {
      settlement = 'city';
    } else {
      const skew = RURAL_HEAVY.has(region)
        ? [{ id: 'city', weight: 0.22 }, { id: 'district_centre', weight: 0.33 }, { id: 'village', weight: 0.45 }]
        : SETTLEMENT.map((s) => ({ id: s.id, weight: s.weight }));
      settlement = pickWeighted(skew, rng()).id;
    }

    const gender = pickWeighted(GENDER.map((g) => ({ id: g.id, weight: g.weight })), rng()).id;

    // --- Education conditioned on age ---
    let eduPool = EDUCATION.map((e) => ({ id: e.id, weight: e.weight }));
    if (age < 22) {
      eduPool = [
        { id: 'student', weight: 0.55 }, { id: 'secondary', weight: 0.33 },
        { id: 'vocational', weight: 0.12 },
      ];
    } else if (age < 25) {
      eduPool = [
        { id: 'student', weight: 0.28 }, { id: 'bachelor', weight: 0.30 },
        { id: 'vocational', weight: 0.27 }, { id: 'secondary', weight: 0.13 },
        { id: 'master_plus', weight: 0.02 },
      ];
    } else {
      eduPool = eduPool.filter((e) => e.id !== 'student');
    }
    const education = pickWeighted(eduPool, rng()).id;

    // --- Employment conditioned on age and education ---
    let empPool = EMPLOYMENT.map((e) => ({ id: e.id, weight: e.weight }));
    if (education === 'student') {
      empPool = [{ id: 'student', weight: 0.82 }, { id: 'freelancer', weight: 0.10 }, { id: 'employed', weight: 0.08 }];
    } else if (age < 20) {
      empPool = [{ id: 'student', weight: 0.62 }, { id: 'unemployed', weight: 0.20 }, { id: 'employed', weight: 0.18 }];
    } else if (age >= 55) {
      empPool = [
        { id: 'retired', weight: 0.42 }, { id: 'employed', weight: 0.22 },
        { id: 'homemaker', weight: 0.18 }, { id: 'entrepreneur', weight: 0.10 },
        { id: 'unemployed', weight: 0.08 },
      ];
    } else {
      empPool = empPool.filter((e) => e.id !== 'student' && e.id !== 'retired');
    }
    // Migrant work skews male and 20–44
    if (gender === 'female' || age < 20 || age > 45) {
      empPool = empPool.map((e) => (e.id === 'migrant_worker' ? { ...e, weight: e.weight * 0.15 } : e));
    }
    // Homemaker skews female
    if (gender === 'male') {
      empPool = empPool.map((e) => (e.id === 'homemaker' ? { ...e, weight: e.weight * 0.05 } : e));
    }
    const employment = pickWeighted(empPool, rng()).id;

    // --- Income conditioned on employment ---
    let incPool = INCOME_BANDS.map((b) => ({ id: b.id, weight: b.weight }));
    if (employment === 'student' || employment === 'homemaker' || employment === 'unemployed') {
      incPool = [
        { id: 'under_3m', weight: 0.62 }, { id: '3_6m', weight: 0.19 },
        { id: 'undisclosed', weight: 0.17 }, { id: '6_10m', weight: 0.02 },
      ];
    } else if (employment === 'entrepreneur' || employment === 'migrant_worker') {
      incPool = [
        { id: 'under_3m', weight: 0.08 }, { id: '3_6m', weight: 0.21 },
        { id: '6_10m', weight: 0.31 }, { id: '10_20m', weight: 0.22 },
        { id: 'over_20m', weight: 0.10 }, { id: 'undisclosed', weight: 0.08 },
      ];
    }
    const income = pickWeighted(incPool, rng()).id;

    // --- Household, language, children ---
    const household = pickWeighted(HOUSEHOLD_SIZE.map((h) => ({ id: h.id, weight: h.weight })), rng()).id;

    let langPool = LANGUAGE.map((l) => ({ id: l.id, weight: l.weight }));
    if (region === 'karakalpakstan') {
      langPool = [{ id: 'kaa', weight: 0.58 }, { id: 'uz', weight: 0.28 }, { id: 'uz_ru', weight: 0.14 }];
    } else if (region === 'tashkent_city') {
      langPool = [{ id: 'uz', weight: 0.42 }, { id: 'uz_ru', weight: 0.38 }, { id: 'ru', weight: 0.20 }];
    } else {
      langPool = langPool.filter((l) => l.id !== 'kaa');
      if (region !== 'samarkand' && region !== 'bukhara') {
        langPool = langPool.filter((l) => l.id !== 'tg');
      }
    }
    const language = pickWeighted(langPool, rng()).id;

    let childPool = CHILDREN.map((c) => ({ id: c.id, weight: c.weight }));
    if (age < 24) {
      childPool = [{ id: 'none', weight: 0.86 }, { id: 'preschool', weight: 0.14 }];
    } else if (age < 30) {
      childPool = [
        { id: 'none', weight: 0.38 }, { id: 'preschool', weight: 0.42 },
        { id: 'school', weight: 0.18 }, { id: 'both', weight: 0.02 },
      ];
    } else if (age >= 50) {
      childPool = [
        { id: 'grown', weight: 0.58 }, { id: 'school', weight: 0.24 },
        { id: 'both', weight: 0.12 }, { id: 'none', weight: 0.06 },
      ];
    } else {
      childPool = childPool.filter((c) => c.id !== 'grown');
    }
    const children = pickWeighted(childPool, rng()).id;

    // --- Quiz completion and attribute answers ---
    const completedQuizzes: string[] = [];
    const attributes: Record<string, string | string[]> = {};

    for (const quiz of QUIZZES) {
      // The work quiz only makes sense for people who work
      const skipWork = quiz.id === 'work'
        && ['student', 'homemaker', 'unemployed', 'retired'].includes(employment);
      if (skipWork || rng() > quiz.completionRate) continue;

      completedQuizzes.push(quiz.id);

      for (const q of quiz.questions) {
        if (!q.options || !q.targetable) continue;

        if (q.type === 'single') {
          attributes[q.id] = pickWeighted(q.options, rng()).id;
        } else {
          const chosen = q.options.filter((opt) => rng() < opt.weight).map((opt) => opt.id);
          // A multi-select question always yields at least one answer
          attributes[q.id] = chosen.length
            ? chosen
            : [pickWeighted(q.options, rng()).id];
        }
      }
    }

    // Rural panelists genuinely skew mobile-only, which changes what a creator
    // can reach outside the cities.
    if (settlement === 'village' && attributes['dig_internet'] && rng() < 0.55) {
      attributes['dig_internet'] = 'mobile_only';
    }
    // Business owners answer the ownership question consistently
    if (employment === 'entrepreneur' && attributes['work_role']) {
      attributes['work_role'] = 'owner';
    }
    // Nobody under 22 is running a company or holding a directorship. Sampling
    // role independently of age produces exactly that, and one 19-year-old
    // director visible in a segment breakdown discredits every other number.
    if (age < 22 && ['owner', 'director'].includes(attributes['work_role'] as string)) {
      attributes['work_role'] = rng() < 0.6 ? 'worker' : 'specialist';
    }
    // Purchase authority follows role. An owner who doesn't decide what the
    // business buys is not a real person, and this correlation is what makes
    // B2B targeting — the commercially valuable kind — actually reachable.
    if (attributes['work_buying']) {
      const role = attributes['work_role'] as string;
      if (role === 'owner' || role === 'director') {
        attributes['work_buying'] = rng() < 0.92 ? 'decide' : 'recommend';
      } else if (role === 'manager') {
        attributes['work_buying'] = rng() < 0.45 ? 'decide' : 'recommend';
      } else if (role === 'worker') {
        attributes['work_buying'] = rng() < 0.85 ? 'no' : 'recommend';
      }
    }

    // --- Quality and verification ---
    const qr = rng();
    const qualityScore =
      qr < 0.06 ? 40 + Math.floor(rng() * 20)
      : qr < 0.24 ? 60 + Math.floor(rng() * 20)
      : qr < 0.78 ? 80 + Math.floor(rng() * 13)
      : 93 + Math.floor(rng() * 8);

    panel.push({
      id: `p_${i.toString().padStart(4, '0')}`,
      birthYear, age, ageBracket: bracket.id, gender, region, settlement,
      education, employment, income, household, language, children,
      attributes, completedQuizzes, qualityScore,
      verified: rng() < 0.68,
    });
  }

  return panel;
}

let cached: Panelist[] | null = null;

/** The panel is generated once per page load and reused. */
export function getPanel(): Panelist[] {
  if (!cached) cached = generatePanel();
  return cached;
}
