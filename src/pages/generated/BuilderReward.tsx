// AUTO-GENERATED from the Phase 1 design export by tools/convert.py
// Static render of the design. Logic is added in the build phase.
// {/* BIND: x */} markers show where the design expected dynamic data.
// Re-runnable: regenerate after a design change, then re-apply logic.

export default function BuilderReward() {
  return (
    <>
<div className="ambient" aria-hidden="true" style={{ position: 'fixed', inset: '0', zIndex: '0', pointerEvents: 'none', overflow: 'hidden' }}>
  <div style={{ position: 'absolute', width: '520px', height: '520px', borderRadius: '50%', background: 'radial-gradient(circle,rgba(98,201,163,.4),transparent 70%)', top: '-160px', left: '-120px', filter: 'blur(20px)' }}></div>
  <div style={{ position: 'absolute', width: '460px', height: '460px', borderRadius: '50%', background: 'radial-gradient(circle,rgba(122,170,236,.35),transparent 70%)', top: '30%', right: '-140px', filter: 'blur(24px)' }}></div>
  <div style={{ position: 'absolute', width: '480px', height: '480px', borderRadius: '50%', background: 'radial-gradient(circle,rgba(98,201,163,.3),transparent 70%)', bottom: '-180px', left: '30%', filter: 'blur(24px)' }}></div>
</div>

<header className="app-header" style={{ position: 'sticky', top: '0', zIndex: '10', display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '24px', background: 'rgba(255,255,255,.6)', backdropFilter: 'blur(20px)', WebkitBackdropFilter: 'blur(20px)', borderBottom: '1px solid var(--glass-border)', boxShadow: 'var(--shadow-sm)', padding: '12px 32px' }}>
  <a href="creator-dashboard.dc.html" id="nav-back-dashboard" style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
    <img className="app-logo" src="/logo-full.png" alt="Fikra" style={{ height: '24px', display: 'block' }} />
  </a>
  <span className="builder-title" style={{ fontSize: 'var(--text-sm)', fontWeight: '600', color: 'var(--ink-mid)', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>Yangi so'rovnoma · Ijtimoiy tarmoqlardagi reklama</span>
  <div style={{ display: 'flex', gap: '10px' }}>
    <button type="button" id="btn-save-draft" className="btn btn-secondary hv-1" style={{ fontFamily: 'var(--font-body)', fontWeight: '600', fontSize: 'var(--text-sm)', padding: '9px 16px', borderRadius: 'var(--radius-md)', border: '1px solid var(--glass-border)', background: 'var(--glass)', color: 'var(--ink)', cursor: 'pointer', boxShadow: 'var(--shadow-sm),var(--glass-inner)', transition: 'background .12s' }}>Qoralama saqlash</button>
    <button type="button" id="btn-next-step" className="btn btn-primary hv-2" style={{ fontFamily: 'var(--font-body)', fontWeight: '600', fontSize: 'var(--text-sm)', padding: '9px 18px', borderRadius: 'var(--radius-md)', border: '1px solid rgba(255,255,255,.6)', background: 'linear-gradient(180deg,var(--mint-500),var(--mint-600))', color: '#fff', cursor: 'pointer', boxShadow: 'var(--glow-mint),inset 0 1px 0 rgba(255,255,255,.35)', transition: 'filter .12s' }}>Keyingi: Tekshirish</button>
  </div>
</header>

<main style={{ position: 'relative', zIndex: '1', maxWidth: '680px', margin: '0 auto', padding: '28px 24px 96px' }}>

  <ol className="stepper" aria-label="So'rovnoma yaratish bosqichlari" style={{ listStyle: 'none', margin: '0 0 32px', padding: '0', display: 'flex', alignItems: 'flex-start' }}>
    <li className="step is-done" style={{ flex: '1', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '6px', position: 'relative' }}><span style={{ position: 'absolute', top: '13px', left: '50%', width: '100%', height: '2px', background: 'linear-gradient(90deg,var(--mint-500),var(--mint-400))', zIndex: '0' }}></span><span className="step-dot" style={{ position: 'relative', zIndex: '1', width: '28px', height: '28px', borderRadius: '50%', background: 'linear-gradient(180deg,var(--mint-500),var(--mint-600))', border: '1px solid rgba(255,255,255,.6)', color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '13px', fontWeight: '700', boxShadow: 'var(--glow-mint)' }}>✓</span><span style={{ fontSize: 'var(--text-xs)', color: 'var(--ink-mid)', textAlign: 'center' }}>Asosiy</span></li>
    <li className="step is-done" style={{ flex: '1', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '6px', position: 'relative' }}><span style={{ position: 'absolute', top: '13px', left: '50%', width: '100%', height: '2px', background: 'linear-gradient(90deg,var(--mint-500),var(--mint-400))', zIndex: '0' }}></span><span className="step-dot" style={{ position: 'relative', zIndex: '1', width: '28px', height: '28px', borderRadius: '50%', background: 'linear-gradient(180deg,var(--mint-500),var(--mint-600))', border: '1px solid rgba(255,255,255,.6)', color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '13px', fontWeight: '700', boxShadow: 'var(--glow-mint)' }}>✓</span><span style={{ fontSize: 'var(--text-xs)', color: 'var(--ink-mid)', textAlign: 'center' }}>Savollar</span></li>
    <li className="step is-done" style={{ flex: '1', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '6px', position: 'relative' }}><span style={{ position: 'absolute', top: '13px', left: '50%', width: '100%', height: '2px', background: 'linear-gradient(90deg,var(--mint-500),var(--mint-400))', zIndex: '0' }}></span><span className="step-dot" style={{ position: 'relative', zIndex: '1', width: '28px', height: '28px', borderRadius: '50%', background: 'linear-gradient(180deg,var(--mint-500),var(--mint-600))', border: '1px solid rgba(255,255,255,.6)', color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '13px', fontWeight: '700', boxShadow: 'var(--glow-mint)' }}>✓</span><span style={{ fontSize: 'var(--text-xs)', color: 'var(--ink-mid)', textAlign: 'center' }}>Auditoriya</span></li>
    <li className="step is-current" style={{ flex: '1', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '6px', position: 'relative' }}><span style={{ position: 'absolute', top: '13px', left: '50%', width: '100%', height: '2px', background: 'var(--line)', zIndex: '0' }}></span><span className="step-dot" style={{ position: 'relative', zIndex: '1', width: '28px', height: '28px', borderRadius: '50%', background: 'rgba(255,255,255,.85)', backdropFilter: 'blur(6px)', WebkitBackdropFilter: 'blur(6px)', border: '2px solid var(--mint-600)', color: 'var(--mint-700)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '13px', fontWeight: '700', boxSizing: 'border-box', boxShadow: 'var(--shadow-sm)' }}>4</span><span style={{ fontSize: 'var(--text-xs)', color: 'var(--ink)', fontWeight: '600', textAlign: 'center' }}>Mukofot</span></li>
    <li className="step" style={{ flex: '1', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '6px', position: 'relative' }}><span className="step-dot" style={{ position: 'relative', zIndex: '1', width: '28px', height: '28px', borderRadius: '50%', background: 'rgba(255,255,255,.45)', border: '1px solid var(--line)', color: 'var(--ink-mid)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '13px', fontWeight: '600' }}>5</span><span style={{ fontSize: 'var(--text-xs)', color: 'var(--ink-soft)', textAlign: 'center' }}>Tekshirish</span></li>
  </ol>

  
  <section className="reward-card" data-element="reward-card" style={{ background: 'var(--glass)', backdropFilter: 'blur(20px)', WebkitBackdropFilter: 'blur(20px)', border: '1px solid var(--glass-border)', borderRadius: 'var(--radius-lg)', boxShadow: 'var(--shadow-glass),var(--glass-inner)', padding: '28px 24px' }}>
    <h1 style={{ fontFamily: 'var(--font-display)', fontSize: 'var(--text-lg)', fontWeight: '700', margin: '0 0 4px' }}>Mukofot va byudjet</h1>
    <p style={{ margin: '0 0 22px', fontSize: 'var(--text-sm)', color: 'var(--ink-mid)' }}>So'rovnomangiz ~4 daqiqa davom etadi. Bunday uzunlik uchun tavsiya etilgan mukofot: 2 500 – 4 000 so'm.</p>
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(220px,1fr))', gap: '16px', marginBottom: '24px' }}>
      <div className="form-field">
        <label htmlFor="input-responses" style={{ display: 'block', fontWeight: '600', fontSize: 'var(--text-sm)', marginBottom: '6px' }}>Kerakli javoblar soni</label>
        <input id="input-responses" type="number" min="50" max="2000" step="50" defaultValue="[responses]" style={{ width: '100%', boxSizing: 'border-box', fontFamily: 'var(--font-body)', fontSize: 'var(--text-md)', fontWeight: '600', color: 'var(--ink)', padding: '11px 12px', border: '1px solid var(--line-strong)', borderRadius: 'var(--radius-md)', background: 'rgba(255,255,255,.5)', boxShadow: 'inset 0 1px 2px rgba(27,60,50,.05)', fontVariantNumeric: 'tabular-nums' }} />
        <p className="field-help" style={{ margin: '6px 0 0', fontSize: 'var(--text-xs)', color: 'var(--ink-mid)' }}>Mos panelistlar: 1 240 kishi</p>
      </div>
      <div className="form-field">
        <label htmlFor="input-reward" style={{ display: 'block', fontWeight: '600', fontSize: 'var(--text-sm)', marginBottom: '6px' }}>Har bir javob uchun mukofot</label>
        <div style={{ display: 'flex', alignItems: 'stretch', border: '1px solid var(--line-strong)', borderRadius: 'var(--radius-md)', background: 'rgba(255,255,255,.5)', boxShadow: 'inset 0 1px 2px rgba(27,60,50,.05)', overflow: 'hidden' }}>
          <input id="input-reward" type="number" min="500" max="20000" step="500" defaultValue="[reward]" style={{ flex: '1', minWidth: '0', fontFamily: 'var(--font-body)', fontSize: 'var(--text-md)', fontWeight: '600', color: 'var(--ink)', padding: '11px 12px', border: '0', background: 'transparent', fontVariantNumeric: 'tabular-nums', outlineOffset: '-2px' }} />
          <span style={{ display: 'flex', alignItems: 'center', padding: '0 12px', background: 'rgba(255,255,255,.55)', borderLeft: '1px solid var(--line)', fontWeight: '600', color: 'var(--ink-mid)', fontSize: 'var(--text-sm)' }}>so'm</span>
        </div>
        <p className="field-help" style={{ margin: '6px 0 0', fontSize: 'var(--text-xs)', color: 'var(--ink-mid)' }}>Yuqori mukofot — tezroq javoblar</p>
      </div>
    </div>

    <div className="cost-breakdown" data-element="cost-breakdown" style={{ background: 'rgba(255,255,255,.5)', border: '1px solid var(--glass-border)', borderRadius: 'var(--radius-md)', padding: '18px 20px' }}>
      <dl style={{ margin: '0', display: 'flex', flexDirection: 'column', gap: '12px' }}>
        <div className="cost-line" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', gap: '16px', flexWrap: 'wrap' }}>
          <dt style={{ fontSize: 'var(--text-sm)', color: 'var(--ink-mid)' }}>Respondentlarga to'lov <span style={{ color: 'var(--ink-soft)', fontVariantNumeric: 'tabular-nums' }}>{/* BIND: calcLine */}</span></dt>
          <dd style={{ margin: '0', fontSize: 'var(--text-sm)', fontWeight: '600', fontVariantNumeric: 'tabular-nums' }}>{/* BIND: payout */} so'm</dd>
        </div>
        <div className="cost-line" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', gap: '16px' }}>
          <dt style={{ fontSize: 'var(--text-sm)', color: 'var(--ink-mid)' }}>Fikra xizmat haqi (25%)</dt>
          <dd style={{ margin: '0', fontSize: 'var(--text-sm)', fontWeight: '600', fontVariantNumeric: 'tabular-nums' }}>{/* BIND: fee */} so'm</dd>
        </div>
        <div className="cost-line is-total" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', gap: '16px', borderTop: '1px solid var(--line)', paddingTop: '12px' }}>
          <dt style={{ fontSize: 'var(--text-base)', fontWeight: '700' }}>Jami</dt>
          <dd style={{ margin: '0', fontFamily: 'var(--font-display)', fontSize: 'var(--text-lg)', fontWeight: '800', color: 'var(--mint-700)', fontVariantNumeric: 'tabular-nums' }}>{/* BIND: total */} so'm</dd>
        </div>
        <div className="cost-line" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', gap: '16px' }}>
          <dt style={{ fontSize: 'var(--text-sm)', color: 'var(--ink-mid)' }}>E'lon qilingandan keyingi balans</dt>
          <dd style={{ margin: '0', fontSize: 'var(--text-sm)', fontWeight: '600', color: '{{ balanceColor }}', fontVariantNumeric: 'tabular-nums' }}>{/* BIND: balanceAfter */} so'm</dd>
        </div>
      </dl>
    </div>

    <button type="button" id="btn-continue" className="btn btn-primary hv-2" style={{ fontFamily: 'var(--font-body)', fontWeight: '600', fontSize: 'var(--text-md)', padding: '13px 20px', borderRadius: 'var(--radius-md)', border: '1px solid rgba(255,255,255,.6)', background: 'linear-gradient(180deg,var(--mint-500),var(--mint-600))', color: '#fff', cursor: 'pointer', width: '100%', marginTop: '20px', boxShadow: 'var(--glow-mint),inset 0 1px 0 rgba(255,255,255,.35)', transition: 'filter .12s' }}>Davom etish</button>
  </section>

  
  
</main>
    </>
  );
}
