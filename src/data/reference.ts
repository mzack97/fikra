/**
 * Canonical reference data from the content pack.
 *
 * Registration, targeting and analytics all read from here. Never re-type a
 * label at a call site — if these three drift apart, targeting silently stops
 * matching and the failure is very hard to see.
 */

export interface Region {
  id: string;
  name: string;
  /** Share of the real population. */
  populationWeight: number;
  /** Share of the Fikra panel. Deliberately different: an online panel
   *  over-represents cities. Tashkent is ~8% of the country, ~19% of the panel. */
  panelWeight: number;
}

export const REGIONS: Region[] = [
  { id: 'tashkent_city', name: "Toshkent shahri", populationWeight: 0.084, panelWeight: 0.190 },
  { id: 'tashkent_region', name: "Toshkent viloyati", populationWeight: 0.084, panelWeight: 0.105 },
  { id: 'samarkand', name: "Samarqand viloyati", populationWeight: 0.113, panelWeight: 0.100 },
  { id: 'fergana', name: "Farg'ona viloyati", populationWeight: 0.110, panelWeight: 0.095 },
  { id: 'andijan', name: "Andijon viloyati", populationWeight: 0.094, panelWeight: 0.075 },
  { id: 'kashkadarya', name: "Qashqadaryo viloyati", populationWeight: 0.097, panelWeight: 0.070 },
  { id: 'namangan', name: "Namangan viloyati", populationWeight: 0.084, panelWeight: 0.070 },
  { id: 'surkhandarya', name: "Surxondaryo viloyati", populationWeight: 0.077, panelWeight: 0.055 },
  { id: 'bukhara', name: "Buxoro viloyati", populationWeight: 0.056, panelWeight: 0.055 },
  { id: 'khorezm', name: "Xorazm viloyati", populationWeight: 0.055, panelWeight: 0.050 },
  { id: 'karakalpakstan', name: "Qoraqalpog'iston Respublikasi", populationWeight: 0.055, panelWeight: 0.045 },
  { id: 'jizzakh', name: "Jizzax viloyati", populationWeight: 0.041, panelWeight: 0.035 },
  { id: 'navoi', name: "Navoiy viloyati", populationWeight: 0.029, panelWeight: 0.030 },
  { id: 'syrdarya', name: "Sirdaryo viloyati", populationWeight: 0.025, panelWeight: 0.025 },
];

export interface EnumOption {
  id: string;
  label: string;
  /** Share of the panel holding this value, used by the seed generator. */
  weight: number;
}

export const SETTLEMENT: EnumOption[] = [
  { id: 'city', label: 'Shahar', weight: 0.46 },
  { id: 'district_centre', label: 'Tuman markazi', weight: 0.31 },
  { id: 'village', label: "Qishloq", weight: 0.23 },
];

export const GENDER: EnumOption[] = [
  { id: 'female', label: 'Ayol', weight: 0.51 },
  { id: 'male', label: 'Erkak', weight: 0.47 },
  { id: 'undisclosed', label: 'Aytmayman', weight: 0.02 },
];

export const AGE_BRACKETS = [
  { id: '16_19', label: '16–19', min: 16, max: 19, weight: 0.14 },
  { id: '20_24', label: '20–24', min: 20, max: 24, weight: 0.25 },
  { id: '25_29', label: '25–29', min: 25, max: 29, weight: 0.21 },
  { id: '30_34', label: '30–34', min: 30, max: 34, weight: 0.15 },
  { id: '35_44', label: '35–44', min: 35, max: 44, weight: 0.14 },
  { id: '45_54', label: '45–54', min: 45, max: 54, weight: 0.07 },
  { id: '55_plus', label: '55+', min: 55, max: 70, weight: 0.04 },
];

export const EDUCATION: EnumOption[] = [
  { id: 'secondary', label: "O'rta", weight: 0.24 },
  { id: 'vocational', label: "O'rta maxsus / kollej", weight: 0.27 },
  { id: 'bachelor', label: 'Oliy (bakalavr)', weight: 0.26 },
  { id: 'master_plus', label: 'Oliy (magistr va yuqori)', weight: 0.08 },
  { id: 'student', label: 'Hozir talaba', weight: 0.15 },
];

export const EMPLOYMENT: EnumOption[] = [
  { id: 'employed', label: 'Yollanma xodim', weight: 0.34 },
  { id: 'student', label: 'Talaba', weight: 0.15 },
  { id: 'homemaker', label: 'Uy bekasi', weight: 0.14 },
  { id: 'entrepreneur', label: 'Tadbirkor / biznes egasi', weight: 0.09 },
  { id: 'unemployed', label: 'Ishlamayapman', weight: 0.09 },
  { id: 'migrant_worker', label: 'Chet elda mehnat qilaman', weight: 0.08 },
  { id: 'freelancer', label: 'Frilanser', weight: 0.07 },
  { id: 'retired', label: 'Nafaqada', weight: 0.04 },
];

export const INCOME_BANDS: EnumOption[] = [
  { id: 'under_3m', label: "3 000 000 so'mgacha", weight: 0.29 },
  { id: '3_6m', label: "3–6 mln so'm", weight: 0.27 },
  { id: '6_10m', label: "6–10 mln so'm", weight: 0.19 },
  { id: 'undisclosed', label: 'Aytmayman', weight: 0.12 },
  { id: '10_20m', label: "10–20 mln so'm", weight: 0.09 },
  { id: 'over_20m', label: "20 mln so'mdan yuqori", weight: 0.04 },
];

export const HOUSEHOLD_SIZE: EnumOption[] = [
  { id: '1_2', label: '1–2 kishi', weight: 0.11 },
  { id: '3_4', label: '3–4 kishi', weight: 0.33 },
  { id: '5_6', label: '5–6 kishi', weight: 0.34 },
  { id: '7_plus', label: '7 va undan ko\u2019p', weight: 0.22 },
];

export const LANGUAGE: EnumOption[] = [
  { id: 'uz', label: "O'zbek", weight: 0.58 },
  { id: 'uz_ru', label: "O'zbek va rus", weight: 0.27 },
  { id: 'ru', label: 'Rus', weight: 0.09 },
  { id: 'kaa', label: 'Qoraqalpoq', weight: 0.04 },
  { id: 'tg', label: 'Tojik', weight: 0.02 },
];

export const CHILDREN: EnumOption[] = [
  { id: 'none', label: "Yo'q", weight: 0.41 },
  { id: 'school', label: 'Maktab yoshida', weight: 0.24 },
  { id: 'preschool', label: 'Maktabgacha', weight: 0.15 },
  { id: 'both', label: 'Ikkalasi ham', weight: 0.12 },
  { id: 'grown', label: 'Katta yoshda', weight: 0.08 },
];

export const CATEGORIES = [
  { id: 'finance', label: 'Moliya va bank' },
  { id: 'retail', label: 'Savdo va marketpleys' },
  { id: 'food', label: 'Ovqat va yetkazib berish' },
  { id: 'education', label: "Ta'lim" },
  { id: 'health', label: "Sog'liq" },
  { id: 'transport', label: 'Transport va logistika' },
  { id: 'work', label: 'Ish va tadbirkorlik' },
  { id: 'housing', label: 'Uy-joy va qurilish' },
  { id: 'telecom', label: 'Aloqa va internet' },
  { id: 'agriculture', label: "Qishloq xo'jaligi" },
  { id: 'travel', label: 'Sayohat' },
  { id: 'government', label: 'Davlat xizmatlari' },
] as const;

/**
 * Study types. This is the field that reframes Fikra from a feedback tool into
 * research infrastructure — the creator picks the type first, and it shapes the
 * survey template they get.
 */
export const STUDY_TYPES = [
  { id: 'problem_discovery', label: 'Muammoni aniqlash', blurb: 'Muammo bormi, kimda, qanchalik og\u2019ir' },
  { id: 'solution_fit', label: 'Yechimga moslik', blurb: 'Taklif qilingan yechim ishlatiladimi' },
  { id: 'pricing', label: 'Narx tadqiqoti', blurb: "To'lashga tayyorlik va narx sezgirligi" },
  { id: 'market_baseline', label: 'Bozor holati', blurb: 'Hozirgi xulq-atvor va odatlar' },
  { id: 'interview_screener', label: 'Suhbatga tanlov', blurb: 'Jonli cusdev suhbatiga nomzod tanlash' },
  { id: 'concept_test', label: 'Konsepsiya sinovi', blurb: 'Mahsulot yaratilmasdan oldingi reaksiya' },
  { id: 'academic', label: 'Akademik tadqiqot', blurb: 'Universitet va institut tadqiqotlari' },
] as const;

export type StudyType = (typeof STUDY_TYPES)[number]['id'];
export type CategoryId = (typeof CATEGORIES)[number]['id'];

/** Lookup helpers, so no call site ever hardcodes a label. */
export const regionName = (id: string) => REGIONS.find((r) => r.id === id)?.name ?? id;
export const categoryLabel = (id: string) => CATEGORIES.find((c) => c.id === id)?.label ?? id;
export const studyTypeLabel = (id: string) => STUDY_TYPES.find((s) => s.id === id)?.label ?? id;
