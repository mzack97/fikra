/**
 * The mock data layer.
 *
 * This is the only module in the application that touches browser storage.
 * Every screen calls these functions instead. When a real backend arrives, only
 * the bodies here change — no page or component is edited.
 *
 * Artificial latency is deliberate: it makes loading states real during
 * development, so we don't ship an app that has never seen a slow response.
 */

const STORE_KEY = 'fikra:v1';

export interface TakerRegistration {
  phone: string;
  verifiedPhone: boolean;
  verifiedOneId: boolean;
  firstName: string;
  lastName: string;
  birthYear: number | null;
  gender: string;
  region: string;
  settlement: string;
  education: string;
  employment: string;
  income: string;
  /** questionId -> optionId or optionId[] */
  quizAnswers: Record<string, string | string[]>;
  completedQuizzes: string[];
  registeredAt: string | null;
}

export interface CompletedResponse {
  surveyId: string;
  answers: Record<string, string | string[]>;
  durationSeconds: number;
  qualityFlags: string[];
  reward: number;
  completedAt: string;
}

export interface Store {
  version: number;
  taker: TakerRegistration | null;
  /** Where a partially-finished registration left off. */
  takerDraftStep: number;
  takerDraft: Partial<TakerRegistration> | null;
  responses: CompletedResponse[];
  /** Withdrawable and in-review balances, integer so'm. */
  balance: number;
  pending: number;
}

const EMPTY_STORE: Store = {
  version: 1,
  taker: null,
  takerDraftStep: 0,
  takerDraft: null,
  responses: [],
  balance: 0,
  pending: 0,
};

function read(): Store {
  try {
    const raw = localStorage.getItem(STORE_KEY);
    if (!raw) return { ...EMPTY_STORE };
    const parsed = JSON.parse(raw) as Store;
    if (parsed.version !== EMPTY_STORE.version) return { ...EMPTY_STORE };
    return parsed;
  } catch {
    return { ...EMPTY_STORE };
  }
}

function write(store: Store): void {
  try {
    localStorage.setItem(STORE_KEY, JSON.stringify(store));
  } catch {
    // Storage full or blocked (private browsing). The app must keep working;
    // the user loses persistence, not the session.
  }
}

const delay = (ms = 220 + Math.random() * 180) =>
  new Promise<void>((resolve) => setTimeout(resolve, ms));

export const api = {
  async getTaker(): Promise<TakerRegistration | null> {
    await delay(120);
    return read().taker;
  },

  async saveDraft(step: number, draft: Partial<TakerRegistration>): Promise<void> {
    const store = read();
    store.takerDraftStep = step;
    store.takerDraft = { ...store.takerDraft, ...draft };
    write(store);
  },

  getDraft(): { step: number; draft: Partial<TakerRegistration> | null } {
    const store = read();
    return { step: store.takerDraftStep, draft: store.takerDraft };
  },

  /** Fake OTP. Any code starting with 0 is accepted, and 000000 is the hint. */
  async verifyOtp(code: string): Promise<{ ok: boolean; message?: string }> {
    await delay(600);
    if (code.length !== 6) return { ok: false, message: 'Kod 6 xonali bo\u2019lishi kerak.' };
    if (!code.startsWith('0')) return { ok: false, message: 'Kod mos kelmadi.' };
    return { ok: true };
  },

  /** Fake OneID. Mimics the redirect-and-return of the real integration. */
  async verifyOneId(): Promise<{ ok: boolean }> {
    await delay(1800);
    return { ok: true };
  },

  async completeRegistration(data: TakerRegistration): Promise<TakerRegistration> {
    await delay(500);
    const store = read();
    const saved = { ...data, registeredAt: new Date().toISOString() };
    store.taker = saved;
    store.takerDraft = null;
    store.takerDraftStep = 0;
    write(store);
    return saved;
  },

  getWallet(): { balance: number; pending: number; responses: CompletedResponse[] } {
    const s = read();
    return { balance: s.balance, pending: s.pending, responses: s.responses ?? [] };
  },

  /**
   * Completing a survey credits the reward to `pending`, not `balance`.
   * Funds become withdrawable only after the review window — the same rule
   * that makes the quality guarantee possible.
   */
  async submitResponse(r: CompletedResponse): Promise<void> {
    await delay(700);
    const s = read();
    s.responses = [...(s.responses ?? []), r];
    s.pending += r.reward;
    write(s);
  },

  hasCompleted(surveyId: string): boolean {
    return (read().responses ?? []).some((r) => r.surveyId === surveyId);
  },

  resetDemo(): void {
    localStorage.removeItem(STORE_KEY);
  },
};
