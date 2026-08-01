import { useMemo, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { SURVEYS, type Survey } from '../data/surveys';
import { CATEGORIES, STUDY_TYPES, regionName } from '../data/reference';
import { formatSom } from '../lib/money';
import { api } from '../api/client';
import AppShell from '../components/AppShell';
import { eligibilityFor } from '../lib/eligibility';

/**
 * The taker's survey list — real data, real filters, real eligibility.
 *
 * Ineligible surveys are shown rather than hidden, with the reason stated.
 * Seeing what you *could* qualify for is what motivates profile completion,
 * which is the mechanism that grows the panel's targetable dimensions.
 */

const DURATIONS = [
  { id: 'all', label: 'Hammasi', test: () => true },
  { id: 'short', label: '5 daqiqagacha', test: (s: Survey) => s.minutes <= 5 },
  { id: 'mid', label: '5–10 daqiqa', test: (s: Survey) => s.minutes > 5 && s.minutes <= 10 },
  { id: 'long', label: '10+ daqiqa', test: (s: Survey) => s.minutes > 10 },
];

const SORTS = [
  { id: 'reward_desc', label: 'Mukofot: yuqoridan' },
  { id: 'reward_asc', label: 'Mukofot: pastdan' },
  { id: 'short_first', label: 'Qisqa avval' },
];

export default function TakerSurveys() {
  const navigate = useNavigate();
  const taker = useMemo(() => {
    const { draft } = api.getDraft();
    return api.getWallet() && draft ? null : null;
  }, []);
  void taker;

  const [categories, setCategories] = useState<string[]>([]);
  const [studyType, setStudyType] = useState('all');
  const [duration, setDuration] = useState('all');
  const [sort, setSort] = useState('reward_desc');
  const [hideLocked, setHideLocked] = useState(false);

  const evaluated = useMemo(() => {
    return SURVEYS.map((s) => ({
      survey: s,
      eligibility: eligibilityFor(s),
      done: api.hasCompleted(s.id),
    }));
  }, []);

  const visible = useMemo(() => {
    let list = evaluated.filter(({ survey }) => {
      if (categories.length && !categories.includes(survey.category)) return false;
      if (studyType !== 'all' && survey.studyType !== studyType) return false;
      const d = DURATIONS.find((x) => x.id === duration)!;
      return d.test(survey);
    });
    if (hideLocked) list = list.filter((e) => e.eligibility.eligible);
    const cmp: Record<string, (a: typeof list[0], b: typeof list[0]) => number> = {
      reward_desc: (a, b) => b.survey.reward - a.survey.reward,
      reward_asc: (a, b) => a.survey.reward - b.survey.reward,
      short_first: (a, b) => a.survey.minutes - b.survey.minutes,
    };
    return [...list].sort(cmp[sort]);
  }, [evaluated, categories, studyType, duration, sort, hideLocked]);

  const eligibleCount = evaluated.filter((e) => e.eligibility.eligible).length;

  const toggleCategory = (id: string) =>
    setCategories((c) => (c.includes(id) ? c.filter((x) => x !== id) : [...c, id]));

  return (
    <AppShell side="taker" active="surveys">
      <h1 style={{ fontFamily: 'var(--font-display)', fontSize: 'var(--text-2xl)', margin: '0 0 4px' }}>
        So'rovnomalar
      </h1>
      <p style={{ color: 'var(--ink-mid)', margin: '0 0 20px', fontSize: 'var(--text-sm)' }}>
        {SURVEYS.length} ta so'rovnoma · sizga {eligibleCount} tasi mos
      </p>

      {/* Filters */}
      <div style={{
        background: 'var(--glass)', border: '1px solid var(--glass-border)',
        borderRadius: 'var(--radius-lg)', padding: '16px', marginBottom: '20px',
        backdropFilter: 'blur(20px)',
      }}>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px', marginBottom: '14px' }}>
          {CATEGORIES.map((c) => {
            const on = categories.includes(c.id);
            return (
              <button key={c.id} type="button" onClick={() => toggleCategory(c.id)} aria-pressed={on}
                style={{
                  fontFamily: 'var(--font-body)', fontSize: 'var(--text-xs)', padding: '6px 11px',
                  borderRadius: 'var(--radius-pill)', cursor: 'pointer',
                  border: `1px solid ${on ? 'var(--mint-glass-border)' : 'var(--line)'}`,
                  background: on ? 'var(--mint-glass)' : 'rgba(255,255,255,.5)',
                  color: on ? 'var(--mint-700)' : 'var(--ink-mid)',
                  fontWeight: on ? 600 : 400,
                }}>
                {c.label}
              </button>
            );
          })}
        </div>

        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '12px', alignItems: 'center' }}>
          <select value={studyType} onChange={(e) => setStudyType(e.target.value)}
            style={{ fontFamily: 'var(--font-body)', fontSize: 'var(--text-sm)', padding: '8px 10px', borderRadius: 'var(--radius-md)', border: '1px solid var(--line)', background: 'rgba(255,255,255,.6)' }}>
            <option value="all">Barcha turlar</option>
            {STUDY_TYPES.map((t) => <option key={t.id} value={t.id}>{t.label}</option>)}
          </select>

          <div style={{ display: 'flex', gap: '4px' }}>
            {DURATIONS.map((d) => (
              <button key={d.id} type="button" onClick={() => setDuration(d.id)}
                style={{
                  fontFamily: 'var(--font-body)', fontSize: 'var(--text-xs)', padding: '7px 11px',
                  borderRadius: 'var(--radius-md)', cursor: 'pointer',
                  border: `1px solid ${duration === d.id ? 'var(--mint-glass-border)' : 'var(--line)'}`,
                  background: duration === d.id ? 'var(--mint-glass)' : 'transparent',
                  color: duration === d.id ? 'var(--mint-700)' : 'var(--ink-mid)',
                }}>
                {d.label}
              </button>
            ))}
          </div>

          <select value={sort} onChange={(e) => setSort(e.target.value)}
            style={{ fontFamily: 'var(--font-body)', fontSize: 'var(--text-sm)', padding: '8px 10px', borderRadius: 'var(--radius-md)', border: '1px solid var(--line)', background: 'rgba(255,255,255,.6)' }}>
            {SORTS.map((s) => <option key={s.id} value={s.id}>{s.label}</option>)}
          </select>

          <label style={{ display: 'flex', gap: '6px', alignItems: 'center', fontSize: 'var(--text-sm)', color: 'var(--ink-mid)', cursor: 'pointer' }}>
            <input type="checkbox" checked={hideLocked} onChange={(e) => setHideLocked(e.target.checked)} />
            Faqat mosini ko'rsatish
          </label>
        </div>
      </div>

      {visible.length === 0 && (
        <div style={{ textAlign: 'center', padding: '48px 20px', color: 'var(--ink-mid)' }}>
          <p style={{ fontWeight: 600, marginBottom: '6px' }}>Bu mezonlarga mos so'rovnoma yo'q</p>
          <p style={{ fontSize: 'var(--text-sm)' }}>Filtrlarni kengaytiring.</p>
        </div>
      )}

      <div style={{ display: 'grid', gap: '12px' }}>
        {visible.map(({ survey, eligibility, done }) => {
          const locked = !eligibility.eligible;
          return (
            <div key={survey.id} className="survey-card" data-locked={locked}
              style={{
                background: 'var(--glass)', border: '1px solid var(--glass-border)',
                borderRadius: 'var(--radius-lg)', padding: '18px 20px',
                backdropFilter: 'blur(20px)', boxShadow: 'var(--shadow-sm)',
                opacity: locked ? 0.62 : 1,
                display: 'grid', gridTemplateColumns: '1fr auto', gap: '16px', alignItems: 'center',
              }}>
              <div style={{ minWidth: 0 }}>
                <div style={{ display: 'flex', gap: '6px', flexWrap: 'wrap', marginBottom: '7px' }}>
                  <span style={{ fontSize: 'var(--text-xs)', padding: '3px 9px', borderRadius: 'var(--radius-pill)', background: 'var(--mint-glass)', color: 'var(--mint-700)', border: '1px solid var(--mint-glass-border)' }}>
                    {STUDY_TYPES.find((t) => t.id === survey.studyType)?.label}
                  </span>
                  <span style={{ fontSize: 'var(--text-xs)', padding: '3px 9px', borderRadius: 'var(--radius-pill)', background: 'rgba(255,255,255,.5)', color: 'var(--ink-mid)', border: '1px solid var(--line)' }}>
                    {CATEGORIES.find((c) => c.id === survey.category)?.label}
                  </span>
                  <span style={{ fontSize: 'var(--text-xs)', color: 'var(--ink-soft)', padding: '3px 0' }}>
                    {survey.minutes} daqiqa · {survey.org}
                  </span>
                </div>
                <h2 className="survey-title" style={{ fontFamily: 'var(--font-display)', fontSize: 'var(--text-md)', margin: '0 0 4px', fontWeight: 700 }}>
                  {survey.title}
                </h2>
                <p style={{ margin: 0, fontSize: 'var(--text-sm)', color: 'var(--ink-mid)' }}>
                  {survey.description}
                </p>
                {locked && (
                  <p style={{ margin: '8px 0 0', fontSize: 'var(--text-xs)', color: 'var(--amber)', display: 'flex', gap: '6px', alignItems: 'center' }}>
                    <span aria-hidden>🔒</span> Talab: {eligibility.reasons.join(' · ')}
                  </p>
                )}
                {survey.interviewReward && !locked && (
                  <p style={{ margin: '8px 0 0', fontSize: 'var(--text-xs)', color: 'var(--mint-700)', fontWeight: 600 }}>
                    Mos kelsangiz — suhbat uchun qo'shimcha {formatSom(survey.interviewReward)}
                  </p>
                )}
              </div>

              <div style={{ textAlign: 'right', whiteSpace: 'nowrap' }}>
                <span className="reward-amount" style={{ display: 'block', fontFamily: 'var(--font-display)', fontSize: 'var(--text-lg)', fontWeight: 800, color: 'var(--mint-700)' }}>
                  {formatSom(survey.reward)}
                </span>
                <button type="button" disabled={locked || done}
                  onClick={() => navigate(`/t/survey/${survey.id}`)}
                  style={{
                    marginTop: '8px', fontFamily: 'var(--font-body)', fontWeight: 600,
                    fontSize: 'var(--text-sm)', padding: '9px 18px', borderRadius: 'var(--radius-md)',
                    border: 'none', cursor: locked || done ? 'not-allowed' : 'pointer',
                    background: done ? 'var(--line)' : locked ? 'transparent' : 'var(--mint-600)',
                    color: done ? 'var(--ink-mid)' : locked ? 'var(--ink-soft)' : '#fff',
                    boxShadow: locked || done ? 'none' : 'var(--glow-mint)',
                  }}>
                  {done ? 'Yakunlangan' : locked ? 'Mos emas' : 'Boshlash'}
                </button>
              </div>
            </div>
          );
        })}
      </div>

      <p style={{ marginTop: '24px', fontSize: 'var(--text-xs)', color: 'var(--ink-soft)' }}>
        Moslik profilingiz asosida hisoblanadi. Profilni to'ldirsangiz, ko'proq so'rovnoma ochiladi
        {' '}— hozirgi hududingiz: {regionName(api.getDraft().draft?.region ?? '') || 'ko\u2019rsatilmagan'}.
      </p>
    </AppShell>
  );
}
