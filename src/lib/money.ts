/**
 * Money in Fikra is always an integer count of so'm. Never a float, never a
 * string. A branded type makes it impossible to pass a raw number by accident.
 */
export type Som = number & { readonly __brand: 'som' };

export const som = (n: number): Som => {
  if (!Number.isInteger(n)) throw new Error(`Money must be an integer so'm value, got ${n}`);
  return n as Som;
};

/** 1 250 000 -> "1 250 000 so'm" — narrow no-break spaces, as the design uses. */
export function formatSom(amount: number, opts: { suffix?: boolean } = {}): string {
  const { suffix = true } = opts;
  const grouped = Math.round(amount)
    .toString()
    .replace(/\B(?=(\d{3})+(?!\d))/g, '\u202F');
  return suffix ? `${grouped} so'm` : grouped;
}

/** Rounds up to the nearest 500 so'm — used by the reward floor. */
export const roundUpTo500 = (n: number): number => Math.ceil(n / 500) * 500;

/** Platform take rate, charged on top of the respondent payout. */
export const PLATFORM_FEE_RATE = 0.25;

/** The panel's effective hourly rate, which sets the minimum reward. */
export const PANEL_HOURLY_RATE = 30_000;

export interface CostBreakdown {
  respondentPayout: number;
  platformFee: number;
  total: number;
}

export function calculateCost(rewardPerResponse: number, responsesNeeded: number): CostBreakdown {
  const respondentPayout = rewardPerResponse * responsesNeeded;
  const platformFee = Math.round(respondentPayout * PLATFORM_FEE_RATE);
  return { respondentPayout, platformFee, total: respondentPayout + platformFee };
}
