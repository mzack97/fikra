import { useMemo, useState } from 'react';
import { computeMatch, type Targeting } from '../lib/targeting';
import { REGIONS } from '../data/reference';

/**
 * The landing page's live targeting demo.
 *
 * Every number here is computed from the seeded panel, not written by hand.
 * That is the entire point of the section: someone can change a filter, watch
 * the count move correctly, and understand in three seconds that Fikra sells an
 * audience rather than a form.
 */

const INTERESTS: { id: string; label: string; targeting: Targeting }[] = [
  { id: 'all', label: 'Barcha sohalar', targeting: {} },
  { id: 'fintech', label: 'Bank va moliya ilovalari', targeting: { attributes: { fin_apps: ['click', 'payme', 'uzum'] } } },
  { id: 'delivery', label: 'Yetkazib berish xizmatlari', targeting: { attributes: { shop_delivery: ['10plus', '4_9', '1_3'] } } },
  { id: 'edu', label: "Ta'lim va kurslar", targeting: { attributes: { edu_self: ['language', 'it', 'business', 'professional'] } } },
  { id: 'health', label: "Sog'liq va sport", targeting: { attributes: { health_sport: ['gym', 'home'] } } },
  { id: 'business', label: 'Tadbirkorlar', targeting: { employment: ['entrepreneur'] } },
  { id: 'car', label: 'Avtomobil egalari', targeting: { attributes: { trans_car: ['own', 'family'] } } },
];

const labelStyle: React.CSSProperties = {
  display: 'block', fontWeight: 600, fontSize: 'var(--text-sm)',
  color: 'rgba(255,255,255,.75)', marginBottom: '6px',
};

const selectStyle: React.CSSProperties = {
  width: '100%', boxSizing: 'border-box', fontFamily: 'var(--font-body)',
  fontSize: 'var(--text-base)', color: '#F2F7F5', padding: '10px 12px',
  border: '1px solid rgba(255,255,255,.25)', borderRadius: 'var(--radius-md)',
  background: 'rgba(255,255,255,.08)', backdropFilter: 'blur(10px)',
  WebkitBackdropFilter: 'blur(10px)',
};

const STATUS_COLOR = { healthy: '#7FE8C3', narrow: '#F0C36A', blocked: '#F08C9B' } as const;

export default function TargetingWidget() {
  const [region, setRegion] = useState('all');
  const [interest, setInterest] = useState('all');
  const [ageMin, setAgeMin] = useState(18);
  const [ageMax, setAgeMax] = useState(45);

  const result = useMemo(() => {
    const chosen = INTERESTS.find((i) => i.id === interest)!;
    const targeting: Targeting = {
      ...chosen.targeting,
      ageMin,
      ageMax,
      ...(region !== 'all' ? { regions: [region] } : {}),
    };
    return computeMatch(targeting);
  }, [region, interest, ageMin, ageMax]);

  return (
    <>
      <div className="targeting-controls">
        <p style={{ fontFamily: 'var(--font-mono)', fontSize: 'var(--text-xs)', letterSpacing: '.08em', color: 'rgba(127,232,195,.8)', margin: '0 0 10px' }}>
          JONLI PANEL
        </p>
        <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'var(--text-xl)', fontWeight: 700, letterSpacing: '-.01em', color: '#F2F7F5', margin: '0 0 22px', textWrap: 'balance' }}>
          Auditoriyangizni tanlang — panel darhol hisoblanadi
        </h2>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
          <div className="form-field">
            <label htmlFor="demo-region" style={labelStyle}>Viloyat</label>
            <select id="demo-region" value={region} onChange={(e) => setRegion(e.target.value)} style={selectStyle}>
              <option value="all" style={{ color: '#1B2226' }}>Barcha viloyatlar</option>
              {REGIONS.map((r) => (
                <option key={r.id} value={r.id} style={{ color: '#1B2226' }}>{r.name}</option>
              ))}
            </select>
          </div>

          <div className="form-field">
            <label htmlFor="demo-age-min" style={labelStyle}>
              Yosh oralig'i:{' '}
              <span style={{ color: '#7FE8C3', fontVariantNumeric: 'tabular-nums' }}>{ageMin}–{ageMax}</span>
            </label>
            <div style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
              <input
                id="demo-age-min" type="range" min={16} max={65} value={ageMin}
                onChange={(e) => setAgeMin(Math.min(Number(e.target.value), ageMax - 1))}
                style={{ flex: 1, accentColor: '#7FE8C3' }}
                aria-label="Eng kichik yosh"
              />
              <input
                id="demo-age-max" type="range" min={16} max={65} value={ageMax}
                onChange={(e) => setAgeMax(Math.max(Number(e.target.value), ageMin + 1))}
                style={{ flex: 1, accentColor: '#7FE8C3' }}
                aria-label="Eng katta yosh"
              />
            </div>
          </div>

          <div className="form-field">
            <label htmlFor="demo-interest" style={labelStyle}>Qiziqish sohasi</label>
            <select id="demo-interest" value={interest} onChange={(e) => setInterest(e.target.value)} style={selectStyle}>
              {INTERESTS.map((i) => (
                <option key={i.id} value={i.id} style={{ color: '#1B2226' }}>{i.label}</option>
              ))}
            </select>
          </div>
        </div>
      </div>

      <div className="targeting-result" style={{ background: 'rgba(255,255,255,.07)', backdropFilter: 'blur(18px)', WebkitBackdropFilter: 'blur(18px)', border: '1px solid rgba(255,255,255,.14)', borderTopColor: 'rgba(255,255,255,.3)', borderRadius: 'var(--radius-lg)', padding: '28px', boxShadow: '0 20px 50px rgba(0,0,0,.35)' }}>
        <div className="match-count" aria-live="polite">
          <span style={{ display: 'block', fontFamily: 'var(--font-display)', fontSize: 'clamp(44px,5vw,64px)', fontWeight: 800, letterSpacing: '-.02em', lineHeight: 1, color: STATUS_COLOR[result.status], textShadow: '0 0 22px rgba(47,177,133,.35)', fontVariantNumeric: 'tabular-nums', transition: 'color .2s ease' }}>
            {result.count.toLocaleString('ru-RU').replace(/\u00A0/g, '\u202F')}
          </span>
          <span style={{ display: 'block', fontSize: 'var(--text-md)', color: 'rgba(255,255,255,.75)', marginTop: '8px' }}>
            ta panelist mos keladi
          </span>
        </div>

        <div className="region-breakdown" style={{ marginTop: '24px', display: 'flex', flexDirection: 'column', gap: '10px' }}>
          {result.byRegion.length === 0 && (
            <p style={{ margin: 0, fontSize: 'var(--text-sm)', color: 'rgba(255,255,255,.6)' }}>
              Bu mezonlarga mos panelist topilmadi. Auditoriyani kengaytiring.
            </p>
          )}
          {result.byRegion.map((bar) => (
            <div key={bar.id} className="region-bar" style={{ display: 'grid', gridTemplateColumns: '110px 1fr 44px', alignItems: 'center', gap: '10px' }}>
              <span style={{ fontSize: 'var(--text-xs)', color: 'rgba(255,255,255,.65)', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
                {bar.name.replace(' viloyati', '').replace(' Respublikasi', '')}
              </span>
              <div style={{ height: '8px', borderRadius: '4px', background: 'rgba(255,255,255,.1)', overflow: 'hidden' }}>
                <div style={{ width: `${bar.pct}%`, height: '100%', borderRadius: '4px', background: 'linear-gradient(90deg,#2FB185,#7FE8C3)', transition: 'width .25s ease' }} />
              </div>
              <span style={{ fontSize: 'var(--text-xs)', color: 'rgba(255,255,255,.65)', textAlign: 'right', fontVariantNumeric: 'tabular-nums' }}>
                {bar.count}
              </span>
            </div>
          ))}
        </div>

        <p style={{ margin: '20px 0 0', fontSize: 'var(--text-xs)', color: 'rgba(255,255,255,.45)' }}>
          {result.statusText}
        </p>
      </div>
    </>
  );
}
