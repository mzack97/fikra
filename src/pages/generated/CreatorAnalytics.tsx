// AUTO-GENERATED from the Phase 1 design export by tools/convert.py
// Static render of the design. Logic is added in the build phase.
// {/* BIND: x */} markers show where the design expected dynamic data.
// Re-runnable: regenerate after a design change, then re-apply logic.

export default function CreatorAnalytics() {
  return (
    <>
<div className="ambient" aria-hidden="true" style={{ position: 'fixed', inset: '0', zIndex: '0', pointerEvents: 'none', overflow: 'hidden' }}>
  <div style={{ position: 'absolute', width: '520px', height: '520px', borderRadius: '50%', background: 'radial-gradient(circle,rgba(98,201,163,.4),transparent 70%)', top: '-160px', left: '-120px', filter: 'blur(20px)' }}></div>
  <div style={{ position: 'absolute', width: '460px', height: '460px', borderRadius: '50%', background: 'radial-gradient(circle,rgba(122,170,236,.35),transparent 70%)', top: '30%', right: '-140px', filter: 'blur(24px)' }}></div>
  <div style={{ position: 'absolute', width: '480px', height: '480px', borderRadius: '50%', background: 'radial-gradient(circle,rgba(98,201,163,.3),transparent 70%)', bottom: '-180px', left: '30%', filter: 'blur(24px)' }}></div>
</div>

<div className="demo-banner" role="status" style={{ position: 'relative', zIndex: '11', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '10px', background: 'var(--amber-glass)', backdropFilter: 'blur(16px)', WebkitBackdropFilter: 'blur(16px)', borderBottom: '1px solid var(--amber-glass-border)', padding: '9px 16px', fontSize: 'var(--text-sm)', fontWeight: '500', color: 'var(--amber)', textAlign: 'center' }}>
  <svg width={15} height={15} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true" style={{ flex: 'none' }}><circle cx="12" cy="12" r="9"></circle><path d="M12 7.5v5.5M12 16.5v.5"></path></svg>
  Demo rejimi — balans simulyatsiya qilingan, haqiqiy to'lovlar amalga oshirilmaydi.
</div>

<div className="app-shell">
  <aside className="app-sidebar" style={{ flexDirection: 'column', gap: '8px', background: 'rgba(255,255,255,.5)', backdropFilter: 'blur(20px)', WebkitBackdropFilter: 'blur(20px)', borderRight: '1px solid var(--glass-border)', padding: '24px 16px', position: 'sticky', top: '0', height: '100vh', boxSizing: 'border-box' }}>
    <a href="landing.dc.html" id="side-logo" style={{ display: 'block', padding: '0 8px', marginBottom: '24px' }}><img className="app-logo" src="/logo-full.png" alt="Fikra" style={{ height: '26px', display: 'block' }} /></a>
    <nav className="side-nav" aria-label="Asosiy" style={{ display: 'flex', flexDirection: 'column', gap: '4px', flex: '1' }}>
      <a href="creator-dashboard.dc.html" id="side-home" className="side-link" style={{ display: 'flex', alignItems: 'center', gap: '12px', padding: '11px 12px', borderRadius: 'var(--radius-md)', fontSize: 'var(--text-sm)', fontWeight: '500', color: 'var(--ink-mid)', border: '1px solid transparent' }} style-hover="background:var(--glass);color:var(--ink)">
        <svg width={18} height={18} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M4 11l8-7 8 7v9a1 1 0 01-1 1h-4v-6h-6v6H5a1 1 0 01-1-1z"></path></svg>
        Bosh sahifa</a>
      <a href="#" id="side-surveys" className="side-link is-active" aria-current="page" style={{ display: 'flex', alignItems: 'center', gap: '12px', padding: '11px 12px', borderRadius: 'var(--radius-md)', fontSize: 'var(--text-sm)', fontWeight: '600', color: 'var(--mint-700)', background: 'var(--mint-glass)', border: '1px solid var(--mint-glass-border)' }}>
        <svg width={18} height={18} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><rect x="5" y="3" width={14} height={18} rx="3"></rect><path d="M9 8h6M9 12h6M9 16h4"></path></svg>
        So'rovnomalarim</a>
      <a href="#" id="side-panel" className="side-link" style={{ display: 'flex', alignItems: 'center', gap: '12px', padding: '11px 12px', borderRadius: 'var(--radius-md)', fontSize: 'var(--text-sm)', fontWeight: '500', color: 'var(--ink-mid)', border: '1px solid transparent' }} style-hover="background:var(--glass);color:var(--ink)">
        <svg width={18} height={18} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true"><circle cx="9" cy="8" r="3.5"></circle><circle cx="16.5" cy="9.5" r="2.5"></circle><path d="M3.5 19c1-3 3.2-4 5.5-4s4.5 1 5.5 4M14.5 15.5c1.8.2 3.5 1.1 4.2 3.5"></path></svg>
        Auditoriya paneli</a>
      <a href="#" id="side-billing" className="side-link" style={{ display: 'flex', alignItems: 'center', gap: '12px', padding: '11px 12px', borderRadius: 'var(--radius-md)', fontSize: 'var(--text-sm)', fontWeight: '500', color: 'var(--ink-mid)', border: '1px solid transparent' }} style-hover="background:var(--glass);color:var(--ink)">
        <svg width={18} height={18} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><rect x="3" y="6" width={18} height={13} rx="3"></rect><path d="M3 10.5h18"></path><path d="M7 15.5h4"></path></svg>
        Balans va to'lovlar</a>
      <a href="#" id="side-settings" className="side-link" style={{ display: 'flex', alignItems: 'center', gap: '12px', padding: '11px 12px', borderRadius: 'var(--radius-md)', fontSize: 'var(--text-sm)', fontWeight: '500', color: 'var(--ink-mid)', border: '1px solid transparent' }} style-hover="background:var(--glass);color:var(--ink)">
        <svg width={18} height={18} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="3"></circle><path d="M19 12a7 7 0 00-.1-1.2l2-1.6-2-3.4-2.4 1a7 7 0 00-2-1.2L14 3h-4l-.5 2.6a7 7 0 00-2 1.2l-2.4-1-2 3.4 2 1.6A7 7 0 005 12a7 7 0 00.1 1.2l-2 1.6 2 3.4 2.4-1a7 7 0 002 1.2L10 21h4l.5-2.6a7 7 0 002-1.2l2.4 1 2-3.4-2-1.6A7 7 0 0019 12z"></path></svg>
        Sozlamalar</a>
    </nav>
    <div className="side-user" data-element="side-user" style={{ display: 'flex', alignItems: 'center', gap: '12px', padding: '12px', borderRadius: 'var(--radius-md)', background: 'var(--glass)', border: '1px solid var(--glass-border)', boxShadow: 'var(--shadow-sm),var(--glass-inner)' }}>
      <span className="user-avatar" style={{ flex: 'none', width: '36px', height: '36px', borderRadius: '50%', background: 'linear-gradient(180deg,#2A363C,var(--ink))', color: '#7FE8C3', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', fontFamily: 'var(--font-display)', fontSize: '14px', fontWeight: '700', border: '1px solid rgba(255,255,255,.4)' }}>JT</span>
      <div style={{ minWidth: '0' }}>
        <div style={{ fontSize: 'var(--text-sm)', fontWeight: '600', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>Jasur To'rayev</div>
        <div style={{ fontSize: 'var(--text-xs)', color: 'var(--ink-mid)' }}>Navro'z Media MChJ</div>
      </div>
    </div>
  </aside>

  <main className="app-content" style={{ padding: '32px 32px 64px', minWidth: '0', boxSizing: 'border-box' }}>

    <div className="analytics-head" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: '16px', flexWrap: 'wrap', marginBottom: '20px' }}>
      <div style={{ minWidth: '0' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px', flexWrap: 'wrap' }}>
          <h1 style={{ fontFamily: 'var(--font-display)', fontSize: 'var(--text-xl)', fontWeight: '700', letterSpacing: '-.01em', margin: '0' }}>Mobil bank ilovasi UX</h1>
          <span className="status-badge status-active" style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', fontSize: 'var(--text-xs)', fontWeight: '600', padding: '4px 11px', borderRadius: 'var(--radius-pill)', background: 'var(--mint-glass)', border: '1px solid var(--mint-glass-border)', color: 'var(--mint-700)' }}><span style={{ width: '6px', height: '6px', borderRadius: '50%', background: 'var(--mint-600)', boxShadow: '0 0 6px rgba(24,133,99,.6)' }}></span>faol</span>
        </div>
        <p style={{ margin: '4px 0 0', fontSize: 'var(--text-sm)', color: 'var(--ink-mid)' }}>E'lon qilingan: 28-iyul · Auditoriya: 22–38 yosh, Toshkent + 4 viloyat</p>
      </div>
      <div className="analytics-actions" style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
        <button type="button" id="btn-export-csv" className="btn btn-secondary" style={{ fontFamily: 'var(--font-body)', fontWeight: '600', fontSize: 'var(--text-sm)', padding: '9px 15px', borderRadius: 'var(--radius-md)', border: '1px solid var(--glass-border)', background: 'var(--glass)', color: 'var(--ink)', cursor: 'pointer', display: 'inline-flex', alignItems: 'center', gap: '7px', boxShadow: 'var(--shadow-sm),var(--glass-inner)', transition: 'background .12s' }} style-hover="background:var(--glass-strong)">
          <svg width={14} height={14} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M12 4v11M7.5 11l4.5 4.5L16.5 11M4 19h16"></path></svg>
          CSV yuklab olish</button>
        <button type="button" id="btn-export-json" className="btn btn-secondary" style={{ fontFamily: 'var(--font-body)', fontWeight: '600', fontSize: 'var(--text-sm)', padding: '9px 15px', borderRadius: 'var(--radius-md)', border: '1px solid var(--glass-border)', background: 'var(--glass)', color: 'var(--ink)', cursor: 'pointer', boxShadow: 'var(--shadow-sm),var(--glass-inner)', transition: 'background .12s' }} style-hover="background:var(--glass-strong)">JSON</button>
        <button type="button" id="btn-pause-survey" className="btn btn-secondary" style={{ fontFamily: 'var(--font-body)', fontWeight: '600', fontSize: 'var(--text-sm)', padding: '9px 15px', borderRadius: 'var(--radius-md)', border: '1px solid var(--amber-glass-border)', background: 'var(--amber-glass)', color: 'var(--amber)', cursor: 'pointer', display: 'inline-flex', alignItems: 'center', gap: '7px', transition: 'filter .12s' }} style-hover="filter:brightness(1.05)">
          <svg width={13} height={13} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><rect x="7" y="5" width={3.5} height={14} rx="1"></rect><rect x="13.5" y="5" width={3.5} height={14} rx="1"></rect></svg>
          To'xtatish</button>
        <button type="button" id="btn-finish-survey" className="btn btn-primary" style={{ fontFamily: 'var(--font-body)', fontWeight: '600', fontSize: 'var(--text-sm)', padding: '9px 17px', borderRadius: 'var(--radius-md)', border: '1px solid rgba(255,255,255,.6)', background: 'linear-gradient(180deg,var(--mint-500),var(--mint-600))', color: '#fff', cursor: 'pointer', boxShadow: 'var(--glow-mint),inset 0 1px 0 rgba(255,255,255,.35)', transition: 'filter .12s' }} style-hover="filter:brightness(1.08)">Yakunlash</button>
      </div>
    </div>

    <div className="stat-row" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(180px,1fr))', gap: '14px', marginBottom: '22px' }}>
      <div className="stat-card" data-stat="responses" style={{ background: 'var(--glass)', backdropFilter: 'blur(20px)', WebkitBackdropFilter: 'blur(20px)', border: '1px solid var(--glass-border)', borderRadius: 'var(--radius-lg)', boxShadow: 'var(--shadow-glass),var(--glass-inner)', padding: '16px 18px' }}>
        <div className="stat-label" style={{ fontSize: 'var(--text-xs)', fontWeight: '600', color: 'var(--ink-mid)', letterSpacing: '.03em', marginBottom: '6px' }}>Javoblar</div>
        <div className="stat-value" style={{ fontFamily: 'var(--font-display)', fontSize: 'var(--text-lg)', fontWeight: '700', fontVariantNumeric: 'tabular-nums', lineHeight: '1.1', marginBottom: '8px' }}>412 <span style={{ fontSize: 'var(--text-sm)', fontWeight: '600', color: 'var(--ink-mid)' }}>/ 500</span></div>
        <div className="progress-bar" role="progressbar" aria-valuenow={412} aria-valuemin={0} aria-valuemax={500} style={{ height: '7px', borderRadius: '4px', background: 'rgba(255,255,255,.7)', boxShadow: 'inset 0 1px 2px rgba(27,60,50,.12)', overflow: 'hidden' }}>
          <div className="progress-fill" style={{ width: '82%', height: '100%', borderRadius: '4px', background: 'linear-gradient(90deg,var(--mint-500),var(--mint-400))', boxShadow: '0 0 8px rgba(47,177,133,.5)' }}></div>
        </div>
      </div>
      <div className="stat-card" data-stat="completion" style={{ background: 'var(--glass)', backdropFilter: 'blur(20px)', WebkitBackdropFilter: 'blur(20px)', border: '1px solid var(--glass-border)', borderRadius: 'var(--radius-lg)', boxShadow: 'var(--shadow-glass),var(--glass-inner)', padding: '16px 18px' }}>
        <div className="stat-label" style={{ fontSize: 'var(--text-xs)', fontWeight: '600', color: 'var(--ink-mid)', letterSpacing: '.03em', marginBottom: '6px' }}>To'ldirish darajasi</div>
        <div className="stat-value" style={{ fontFamily: 'var(--font-display)', fontSize: 'var(--text-lg)', fontWeight: '700', fontVariantNumeric: 'tabular-nums', lineHeight: '1.1' }}>78%</div>
        <div className="stat-delta" style={{ fontSize: 'var(--text-xs)', color: 'var(--ink-mid)', marginTop: '6px' }}>boshlaganlarning</div>
      </div>
      <div className="stat-card" data-stat="avg-time" style={{ background: 'var(--glass)', backdropFilter: 'blur(20px)', WebkitBackdropFilter: 'blur(20px)', border: '1px solid var(--glass-border)', borderRadius: 'var(--radius-lg)', boxShadow: 'var(--shadow-glass),var(--glass-inner)', padding: '16px 18px' }}>
        <div className="stat-label" style={{ fontSize: 'var(--text-xs)', fontWeight: '600', color: 'var(--ink-mid)', letterSpacing: '.03em', marginBottom: '6px' }}>O'rtacha vaqt</div>
        <div className="stat-value" style={{ fontFamily: 'var(--font-display)', fontSize: 'var(--text-lg)', fontWeight: '700', fontVariantNumeric: 'tabular-nums', lineHeight: '1.1' }}>4 daq 12 s</div>
        <div className="stat-delta" style={{ fontSize: 'var(--text-xs)', color: 'var(--ink-mid)', marginTop: '6px' }}>rejadagi: ~5 daq</div>
      </div>
      <div className="stat-card" data-stat="spent" style={{ background: 'var(--glass)', backdropFilter: 'blur(20px)', WebkitBackdropFilter: 'blur(20px)', border: '1px solid var(--glass-border)', borderRadius: 'var(--radius-lg)', boxShadow: 'var(--shadow-glass),var(--glass-inner)', padding: '16px 18px' }}>
        <div className="stat-label" style={{ fontSize: 'var(--text-xs)', fontWeight: '600', color: 'var(--ink-mid)', letterSpacing: '.03em', marginBottom: '6px' }}>Sarflangan</div>
        <div className="stat-value" style={{ fontFamily: 'var(--font-display)', fontSize: 'var(--text-lg)', fontWeight: '700', color: 'var(--mint-700)', fontVariantNumeric: 'tabular-nums', lineHeight: '1.1' }}>824 000 <span style={{ fontSize: 'var(--text-sm)', fontWeight: '600', color: 'var(--ink-mid)' }}>so'm</span></div>
        <div className="stat-delta" style={{ fontSize: 'var(--text-xs)', color: 'var(--ink-mid)', marginTop: '6px' }}>byudjet: 1 000 000 so'm</div>
      </div>
      <div className="stat-card" data-stat="eta" style={{ background: 'var(--glass)', backdropFilter: 'blur(20px)', WebkitBackdropFilter: 'blur(20px)', border: '1px solid var(--glass-border)', borderRadius: 'var(--radius-lg)', boxShadow: 'var(--shadow-glass),var(--glass-inner)', padding: '16px 18px' }}>
        <div className="stat-label" style={{ fontSize: 'var(--text-xs)', fontWeight: '600', color: 'var(--ink-mid)', letterSpacing: '.03em', marginBottom: '6px' }}>Taxminiy yakun</div>
        <div className="stat-value" style={{ fontFamily: 'var(--font-display)', fontSize: 'var(--text-lg)', fontWeight: '700', fontVariantNumeric: 'tabular-nums', lineHeight: '1.1' }}>2 kun</div>
        <div className="stat-delta" style={{ fontSize: 'var(--text-xs)', color: 'var(--ink-mid)', marginTop: '6px' }}>joriy sur'atda</div>
      </div>
    </div>

    <div className="question-results" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(420px,1fr))', gap: '18px', marginBottom: '22px' }}>

      
      <section className="result-card" data-question="q-1" style={{ background: 'var(--glass)', backdropFilter: 'blur(20px)', WebkitBackdropFilter: 'blur(20px)', border: '1px solid var(--glass-border)', borderRadius: 'var(--radius-lg)', boxShadow: 'var(--shadow-glass),var(--glass-inner)', padding: '22px' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: '12px', marginBottom: '4px' }}>
          <span style={{ fontSize: 'var(--text-xs)', fontWeight: '600', letterSpacing: '.04em', color: 'var(--ink-soft)' }}>1-SAVOL · BITTA JAVOB · 412 JAVOB</span>
          <div className="segment-filter" style={{ flex: 'none' }}>
            <label htmlFor="seg-q1" style={{ position: 'absolute', width: '1px', height: '1px', overflow: 'hidden', clip: 'rect(0 0 0 0)' }}>Segment bo'yicha filtrlash</label>
            <select id="seg-q1" data-control="segment-q1" style={{ fontFamily: 'var(--font-body)', fontSize: 'var(--text-xs)', color: 'var(--ink-mid)', padding: '5px 8px', border: '1px solid var(--line)', borderRadius: 'var(--radius-sm)', background: 'rgba(255,255,255,.5)' }}>
              <option>Barcha segmentlar</option><option>Ayollar</option><option>Erkaklar</option><option>Toshkent</option><option>18–25 yosh</option>
            </select>
          </div>
        </div>
        <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'var(--text-md)', fontWeight: '600', lineHeight: '1.3', margin: '0 0 16px' }}>Ilovaga kirishda qaysi usuldan foydalanasiz?</h2>
        <svg viewBox="0 0 520 230" width="100%" role="img" aria-label="Bitta javob natijalari: PIN-kod 41%, barmoq izi 27%, Face ID 16%, parol 10%, kirmayman 6%" style={{ display: 'block' }}>
          <text x="0" y="13" fontFamily="IBM Plex Sans" fontSize="12.5" fontWeight="600" fill="#1B2226">PIN-kod</text>
          <rect x="0" y="20" width={440} height={12} rx="6" fill="rgba(255,255,255,.75)"></rect>
          <rect x="0" y="20" width={180} height={12} rx="6" fill="#188563"></rect>
          <text x="440" y="30" fontFamily="IBM Plex Sans" fontSize="12" textAnchor="end" fill="#54666E">169 · 41%</text>
          <text x="0" y="59" fontFamily="IBM Plex Sans" fontSize="12.5" fontWeight="600" fill="#1B2226">Barmoq izi</text>
          <rect x="0" y="66" width={440} height={12} rx="6" fill="rgba(255,255,255,.75)"></rect>
          <rect x="0" y="66" width={119} height={12} rx="6" fill="#2FB185"></rect>
          <text x="440" y="76" fontFamily="IBM Plex Sans" fontSize="12" textAnchor="end" fill="#54666E">111 · 27%</text>
          <text x="0" y="105" fontFamily="IBM Plex Sans" fontSize="12.5" fontWeight="600" fill="#1B2226">Face ID</text>
          <rect x="0" y="112" width={440} height={12} rx="6" fill="rgba(255,255,255,.75)"></rect>
          <rect x="0" y="112" width={70} height={12} rx="6" fill="#62C9A3"></rect>
          <text x="440" y="122" fontFamily="IBM Plex Sans" fontSize="12" textAnchor="end" fill="#54666E">66 · 16%</text>
          <text x="0" y="151" fontFamily="IBM Plex Sans" fontSize="12.5" fontWeight="600" fill="#1B2226">Parol</text>
          <rect x="0" y="158" width={440} height={12} rx="6" fill="rgba(255,255,255,.75)"></rect>
          <rect x="0" y="158" width={44} height={12} rx="6" fill="#8FD9BE"></rect>
          <text x="440" y="168" fontFamily="IBM Plex Sans" fontSize="12" textAnchor="end" fill="#54666E">41 · 10%</text>
          <text x="0" y="197" fontFamily="IBM Plex Sans" fontSize="12.5" fontWeight="600" fill="#1B2226">Har safar kirmayman</text>
          <rect x="0" y="204" width={440} height={12} rx="6" fill="rgba(255,255,255,.75)"></rect>
          <rect x="0" y="204" width={26} height={12} rx="6" fill="#BCE8D6"></rect>
          <text x="440" y="214" fontFamily="IBM Plex Sans" fontSize="12" textAnchor="end" fill="#54666E">25 · 6%</text>
        </svg>
      </section>

      
      <section className="result-card" data-question="q-2" style={{ background: 'var(--glass)', backdropFilter: 'blur(20px)', WebkitBackdropFilter: 'blur(20px)', border: '1px solid var(--glass-border)', borderRadius: 'var(--radius-lg)', boxShadow: 'var(--shadow-glass),var(--glass-inner)', padding: '22px' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: '12px', marginBottom: '4px' }}>
          <span style={{ fontSize: 'var(--text-xs)', fontWeight: '600', letterSpacing: '.04em', color: 'var(--ink-soft)' }}>2-SAVOL · BIR NECHTA JAVOB · 412 JAVOB</span>
          <div className="segment-filter" style={{ flex: 'none' }}>
            <label htmlFor="seg-q2" style={{ position: 'absolute', width: '1px', height: '1px', overflow: 'hidden', clip: 'rect(0 0 0 0)' }}>Segment bo'yicha filtrlash</label>
            <select id="seg-q2" data-control="segment-q2" style={{ fontFamily: 'var(--font-body)', fontSize: 'var(--text-xs)', color: 'var(--ink-mid)', padding: '5px 8px', border: '1px solid var(--line)', borderRadius: 'var(--radius-sm)', background: 'rgba(255,255,255,.5)' }}>
              <option>Barcha segmentlar</option><option>Ayollar</option><option>Erkaklar</option><option>Toshkent</option><option>18–25 yosh</option>
            </select>
          </div>
        </div>
        <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'var(--text-md)', fontWeight: '600', lineHeight: '1.3', margin: '0 0 16px' }}>Ilovada qaysi bo'limlardan foydalanasiz?</h2>
        <svg viewBox="0 0 520 230" width="100%" role="img" aria-label="Bir nechta javob natijalari: pul o'tkazish 84%, to'lovlar 71%, kartalar 52%, omonat 24%, kredit 15%" style={{ display: 'block' }}>
          <text x="0" y="13" fontFamily="IBM Plex Sans" fontSize="12.5" fontWeight="600" fill="#1B2226">Pul o'tkazish</text>
          <rect x="0" y="20" width={440} height={12} rx="6" fill="rgba(255,255,255,.75)"></rect>
          <rect x="0" y="20" width={370} height={12} rx="6" fill="#3D6FB4"></rect>
          <text x="440" y="30" fontFamily="IBM Plex Sans" fontSize="12" textAnchor="end" fill="#54666E">346 · 84%</text>
          <text x="0" y="59" fontFamily="IBM Plex Sans" fontSize="12.5" fontWeight="600" fill="#1B2226">Kommunal to'lovlar</text>
          <rect x="0" y="66" width={440} height={12} rx="6" fill="rgba(255,255,255,.75)"></rect>
          <rect x="0" y="66" width={312} height={12} rx="6" fill="#5C88C4"></rect>
          <text x="440" y="76" fontFamily="IBM Plex Sans" fontSize="12" textAnchor="end" fill="#54666E">293 · 71%</text>
          <text x="0" y="105" fontFamily="IBM Plex Sans" fontSize="12.5" fontWeight="600" fill="#1B2226">Kartalarni boshqarish</text>
          <rect x="0" y="112" width={440} height={12} rx="6" fill="rgba(255,255,255,.75)"></rect>
          <rect x="0" y="112" width={229} height={12} rx="6" fill="#7AAAEC"></rect>
          <text x="440" y="122" fontFamily="IBM Plex Sans" fontSize="12" textAnchor="end" fill="#54666E">214 · 52%</text>
          <text x="0" y="151" fontFamily="IBM Plex Sans" fontSize="12.5" fontWeight="600" fill="#1B2226">Omonat ochish</text>
          <rect x="0" y="158" width={440} height={12} rx="6" fill="rgba(255,255,255,.75)"></rect>
          <rect x="0" y="158" width={106} height={12} rx="6" fill="#A3C3F0"></rect>
          <text x="440" y="168" fontFamily="IBM Plex Sans" fontSize="12" textAnchor="end" fill="#54666E">99 · 24%</text>
          <text x="0" y="197" fontFamily="IBM Plex Sans" fontSize="12.5" fontWeight="600" fill="#1B2226">Kredit arizasi</text>
          <rect x="0" y="204" width={440} height={12} rx="6" fill="rgba(255,255,255,.75)"></rect>
          <rect x="0" y="204" width={66} height={12} rx="6" fill="#C8DAF5"></rect>
          <text x="440" y="214" fontFamily="IBM Plex Sans" fontSize="12" textAnchor="end" fill="#54666E">62 · 15%</text>
        </svg>
        <p style={{ margin: '12px 0 0', fontSize: 'var(--text-xs)', color: 'var(--ink-soft)' }}>Jami 100% dan oshadi — respondentlar bir nechta javob tanlashi mumkin.</p>
      </section>

      
      <section className="result-card" data-question="q-3" style={{ background: 'var(--glass)', backdropFilter: 'blur(20px)', WebkitBackdropFilter: 'blur(20px)', border: '1px solid var(--glass-border)', borderRadius: 'var(--radius-lg)', boxShadow: 'var(--shadow-glass),var(--glass-inner)', padding: '22px' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: '12px', marginBottom: '4px' }}>
          <span style={{ fontSize: 'var(--text-xs)', fontWeight: '600', letterSpacing: '.04em', color: 'var(--ink-soft)' }}>3-SAVOL · 1–5 SHKALA · 412 JAVOB</span>
          <div className="segment-filter" style={{ flex: 'none' }}>
            <label htmlFor="seg-q3" style={{ position: 'absolute', width: '1px', height: '1px', overflow: 'hidden', clip: 'rect(0 0 0 0)' }}>Segment bo'yicha filtrlash</label>
            <select id="seg-q3" data-control="segment-q3" style={{ fontFamily: 'var(--font-body)', fontSize: 'var(--text-xs)', color: 'var(--ink-mid)', padding: '5px 8px', border: '1px solid var(--line)', borderRadius: 'var(--radius-sm)', background: 'rgba(255,255,255,.5)' }}>
              <option>Barcha segmentlar</option><option>Ayollar</option><option>Erkaklar</option><option>Toshkent</option><option>18–25 yosh</option>
            </select>
          </div>
        </div>
        <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'var(--text-md)', fontWeight: '600', lineHeight: '1.3', margin: '0 0 16px' }}>Ilova tezligidan qanchalik mamnunsiz?</h2>
        <div style={{ display: 'flex', gap: '24px', alignItems: 'center', flexWrap: 'wrap' }}>
          <div className="scale-average" style={{ flex: 'none', textAlign: 'center' }}>
            <span style={{ display: 'block', fontFamily: 'var(--font-display)', fontSize: '56px', fontWeight: '800', letterSpacing: '-.02em', lineHeight: '1', color: 'var(--mint-700)', fontVariantNumeric: 'tabular-nums' }}>3,6</span>
            <span style={{ display: 'block', fontSize: 'var(--text-xs)', color: 'var(--ink-mid)', marginTop: '6px' }}>o'rtacha / 5</span>
          </div>
          <svg viewBox="0 0 300 150" width="100%" role="img" aria-label="Baholar taqsimoti: 1 — 22, 2 — 48, 3 — 96, 4 — 152, 5 — 94" style={{ display: 'block', flex: '1', minWidth: '220px', maxWidth: '340px' }}>
            <rect x="10" y="113" width={42} height={17} rx="4" fill="#BCE8D6"></rect>
            <text x="31" y="145" fontFamily="IBM Plex Sans" fontSize="11" textAnchor="middle" fill="#54666E">1</text>
            <text x="31" y="107" fontFamily="IBM Plex Sans" fontSize="11" textAnchor="middle" fill="#54666E">22</text>
            <rect x="68" y="92" width={42} height={38} rx="4" fill="#8FD9BE"></rect>
            <text x="89" y="145" fontFamily="IBM Plex Sans" fontSize="11" textAnchor="middle" fill="#54666E">2</text>
            <text x="89" y="86" fontFamily="IBM Plex Sans" fontSize="11" textAnchor="middle" fill="#54666E">48</text>
            <rect x="126" y="55" width={42} height={75} rx="4" fill="#62C9A3"></rect>
            <text x="147" y="145" fontFamily="IBM Plex Sans" fontSize="11" textAnchor="middle" fill="#54666E">3</text>
            <text x="147" y="49" fontFamily="IBM Plex Sans" fontSize="11" textAnchor="middle" fill="#54666E">96</text>
            <rect x="184" y="11" width={42} height={119} rx="4" fill="#2FB185"></rect>
            <text x="205" y="145" fontFamily="IBM Plex Sans" fontSize="11" textAnchor="middle" fill="#54666E">4</text>
            <text x="205" y="7" fontFamily="IBM Plex Sans" fontSize="11" textAnchor="middle" fill="#0E5E44" fontWeight="600">152</text>
            <rect x="242" y="57" width={42} height={73} rx="4" fill="#188563"></rect>
            <text x="263" y="145" fontFamily="IBM Plex Sans" fontSize="11" textAnchor="middle" fill="#54666E">5</text>
            <text x="263" y="51" fontFamily="IBM Plex Sans" fontSize="11" textAnchor="middle" fill="#54666E">94</text>
          </svg>
        </div>
      </section>

      
      <section className="result-card" data-question="q-4" style={{ background: 'var(--glass)', backdropFilter: 'blur(20px)', WebkitBackdropFilter: 'blur(20px)', border: '1px solid var(--glass-border)', borderRadius: 'var(--radius-lg)', boxShadow: 'var(--shadow-glass),var(--glass-inner)', padding: '22px' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: '12px', marginBottom: '4px' }}>
          <span style={{ fontSize: 'var(--text-xs)', fontWeight: '600', letterSpacing: '.04em', color: 'var(--ink-soft)' }}>4-SAVOL · OCHIQ MATN · 287 JAVOB</span>
          <div className="segment-filter" style={{ flex: 'none' }}>
            <label htmlFor="seg-q4" style={{ position: 'absolute', width: '1px', height: '1px', overflow: 'hidden', clip: 'rect(0 0 0 0)' }}>Segment bo'yicha filtrlash</label>
            <select id="seg-q4" data-control="segment-q4" style={{ fontFamily: 'var(--font-body)', fontSize: 'var(--text-xs)', color: 'var(--ink-mid)', padding: '5px 8px', border: '1px solid var(--line)', borderRadius: 'var(--radius-sm)', background: 'rgba(255,255,255,.5)' }}>
              <option>Barcha segmentlar</option><option>Ayollar</option><option>Erkaklar</option><option>Toshkent</option><option>18–25 yosh</option>
            </select>
          </div>
        </div>
        <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'var(--text-md)', fontWeight: '600', lineHeight: '1.3', margin: '0 0 14px' }}>Ilovada nimani o'zgartirgan bo'lardingiz?</h2>
        <div className="form-field" style={{ marginBottom: '12px' }}>
          <label htmlFor="answer-search" style={{ position: 'absolute', width: '1px', height: '1px', overflow: 'hidden', clip: 'rect(0 0 0 0)' }}>Javoblardan qidirish</label>
          <input id="answer-search" type="search" placeholder="Javoblardan qidirish…" style={{ width: '100%', boxSizing: 'border-box', fontFamily: 'var(--font-body)', fontSize: 'var(--text-sm)', color: 'var(--ink)', padding: '9px 12px', border: '1px solid var(--line-strong)', borderRadius: 'var(--radius-md)', background: 'rgba(255,255,255,.5)', boxShadow: 'inset 0 1px 2px rgba(27,60,50,.05)' }} />
        </div>
        <ul className="answer-list" style={{ listStyle: 'none', margin: '0', padding: '0', maxHeight: '260px', overflowY: 'auto', display: 'flex', flexDirection: 'column', gap: '8px' }}>
          <li className="answer-item" style={{ padding: '10px 13px', borderRadius: 'var(--radius-md)', background: 'rgba(255,255,255,.5)', border: '1px solid var(--glass-border)' }}><p style={{ margin: '0 0 4px', fontSize: 'var(--text-sm)' }}>Pul o'tkazishda komissiya oldindan ko'rsatilsin, tasdiqlashdan keyin emas.</p><span style={{ fontSize: 'var(--text-xs)', color: 'var(--ink-soft)' }}>Dilnoza K. · Toshkent · 1-avg</span></li>
          <li className="answer-item" style={{ padding: '10px 13px', borderRadius: 'var(--radius-md)', background: 'rgba(255,255,255,.5)', border: '1px solid var(--glass-border)' }}><p style={{ margin: '0 0 4px', fontSize: 'var(--text-sm)' }}>Qorong'i rejim qo'shilsa juda yaxshi bo'lardi, kechasi ko'z charchaydi.</p><span style={{ fontSize: 'var(--text-xs)', color: 'var(--ink-soft)' }}>Sardor M. · Samarqand · 1-avg</span></li>
          <li className="answer-item" style={{ padding: '10px 13px', borderRadius: 'var(--radius-md)', background: 'rgba(255,255,255,.5)', border: '1px solid var(--glass-border)' }}><p style={{ margin: '0 0 4px', fontSize: 'var(--text-sm)' }}>Ilova ochilishi sekin, ayniqsa eski telefonlarda. Tezlashtirish kerak.</p><span style={{ fontSize: 'var(--text-xs)', color: 'var(--ink-soft)' }}>Jasur R. · Farg'ona · 31-iyul</span></li>
          <li className="answer-item" style={{ padding: '10px 13px', borderRadius: 'var(--radius-md)', background: 'rgba(255,255,255,.5)', border: '1px solid var(--glass-border)' }}><p style={{ margin: '0 0 4px', fontSize: 'var(--text-sm)' }}>O'zbek tilidagi tarjimalar ba'zi joylarda g'alati, tabiiy emas.</p><span style={{ fontSize: 'var(--text-xs)', color: 'var(--ink-soft)' }}>Aziza T. · Toshkent · 31-iyul</span></li>
          <li className="answer-item" style={{ padding: '10px 13px', borderRadius: 'var(--radius-md)', background: 'rgba(255,255,255,.5)', border: '1px solid var(--glass-border)' }}><p style={{ margin: '0 0 4px', fontSize: 'var(--text-sm)' }}>Har oy avtomatik to'lov sozlash imkoniyati yetishmayapti.</p><span style={{ fontSize: 'var(--text-xs)', color: 'var(--ink-soft)' }}>Bekzod A. · Namangan · 30-iyul</span></li>
          <li className="answer-item" style={{ padding: '10px 13px', borderRadius: 'var(--radius-md)', background: 'rgba(255,255,255,.5)', border: '1px solid var(--glass-border)' }}><p style={{ margin: '0 0 4px', fontSize: 'var(--text-sm)' }}>SMS kod o'rniga push-bildirishnoma orqali tasdiqlash qulayroq bo'lardi.</p><span style={{ fontSize: 'var(--text-xs)', color: 'var(--ink-soft)' }}>Madina Y. · Buxoro · 30-iyul</span></li>
          <li className="answer-item" style={{ padding: '10px 13px', borderRadius: 'var(--radius-md)', background: 'rgba(255,255,255,.5)', border: '1px solid var(--glass-border)' }}><p style={{ margin: '0 0 4px', fontSize: 'var(--text-sm)' }}>Chiqimlar statistikasi bo'limi juda foydali, lekin toifalarni o'zim tahrirlay olmayman.</p><span style={{ fontSize: 'var(--text-xs)', color: 'var(--ink-soft)' }}>Otabek S. · Toshkent · 29-iyul</span></li>
          <li className="answer-item" style={{ padding: '10px 13px', borderRadius: 'var(--radius-md)', background: 'rgba(255,255,255,.5)', border: '1px solid var(--glass-border)' }}><p style={{ margin: '0 0 4px', fontSize: 'var(--text-sm)' }}>Hammasi yoqadi, faqat reklama banner juda ko'p chiqadi.</p><span style={{ fontSize: 'var(--text-xs)', color: 'var(--ink-soft)' }}>Nilufar H. · Andijon · 29-iyul</span></li>
        </ul>
      </section>
    </div>

    
    <section className="respondent-breakdown" data-element="respondent-breakdown" style={{ background: 'var(--glass)', backdropFilter: 'blur(20px)', WebkitBackdropFilter: 'blur(20px)', border: '1px solid var(--glass-border)', borderRadius: 'var(--radius-lg)', boxShadow: 'var(--shadow-glass),var(--glass-inner)', padding: '22px' }}>
      <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'var(--text-lg)', fontWeight: '700', margin: '0 0 18px' }}>Respondentlar kesimi</h2>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(220px,1fr))', gap: '24px', alignItems: 'start' }}>

        <div className="breakdown-chart" data-chart="age">
          <p style={{ margin: '0 0 10px', fontSize: 'var(--text-xs)', fontWeight: '600', letterSpacing: '.04em', color: 'var(--ink-mid)' }}>YOSH</p>
          <svg viewBox="0 0 240 140" width="100%" role="img" aria-label="Yosh taqsimoti: 18–24 — 96, 25–30 — 138, 31–36 — 88, 37–42 — 52, 43+ — 38" style={{ display: 'block' }}>
            <rect x="6" y="52" width={36} height={68} rx="4" fill="#62C9A3"></rect>
            <text x="24" y="134" fontFamily="IBM Plex Sans" fontSize="10.5" textAnchor="middle" fill="#54666E">18–24</text>
            <text x="24" y="46" fontFamily="IBM Plex Sans" fontSize="10.5" textAnchor="middle" fill="#54666E">96</text>
            <rect x="53" y="22" width={36} height={98} rx="4" fill="#2FB185"></rect>
            <text x="71" y="134" fontFamily="IBM Plex Sans" fontSize="10.5" textAnchor="middle" fill="#54666E">25–30</text>
            <text x="71" y="16" fontFamily="IBM Plex Sans" fontSize="10.5" textAnchor="middle" fill="#0E5E44" fontWeight="600">138</text>
            <rect x="100" y="58" width={36} height={62} rx="4" fill="#62C9A3"></rect>
            <text x="118" y="134" fontFamily="IBM Plex Sans" fontSize="10.5" textAnchor="middle" fill="#54666E">31–36</text>
            <text x="118" y="52" fontFamily="IBM Plex Sans" fontSize="10.5" textAnchor="middle" fill="#54666E">88</text>
            <rect x="147" y="83" width={36} height={37} rx="4" fill="#8FD9BE"></rect>
            <text x="165" y="134" fontFamily="IBM Plex Sans" fontSize="10.5" textAnchor="middle" fill="#54666E">37–42</text>
            <text x="165" y="77" fontFamily="IBM Plex Sans" fontSize="10.5" textAnchor="middle" fill="#54666E">52</text>
            <rect x="194" y="93" width={36} height={27} rx="4" fill="#BCE8D6"></rect>
            <text x="212" y="134" fontFamily="IBM Plex Sans" fontSize="10.5" textAnchor="middle" fill="#54666E">43+</text>
            <text x="212" y="87" fontFamily="IBM Plex Sans" fontSize="10.5" textAnchor="middle" fill="#54666E">38</text>
          </svg>
        </div>

        <div className="breakdown-chart" data-chart="region">
          <p style={{ margin: '0 0 10px', fontSize: 'var(--text-xs)', fontWeight: '600', letterSpacing: '.04em', color: 'var(--ink-mid)' }}>HUDUD</p>
          <svg viewBox="0 0 240 140" width="100%" role="img" aria-label="Hudud taqsimoti: Toshkent 172, Samarqand 78, Farg'ona 64, Namangan 55, boshqa 43" style={{ display: 'block' }}>
            <text x="0" y="10" fontFamily="IBM Plex Sans" fontSize="10.5" fill="#1B2226" fontWeight="600">Toshkent</text>
            <rect x="0" y="14" width={196} height={9} rx="4.5" fill="rgba(255,255,255,.75)"></rect>
            <rect x="0" y="14" width={160} height={9} rx="4.5" fill="#188563"></rect>
            <text x="240" y="22" fontFamily="IBM Plex Sans" fontSize="10.5" textAnchor="end" fill="#54666E">172</text>
            <text x="0" y="38" fontFamily="IBM Plex Sans" fontSize="10.5" fill="#1B2226" fontWeight="600">Samarqand</text>
            <rect x="0" y="42" width={196} height={9} rx="4.5" fill="rgba(255,255,255,.75)"></rect>
            <rect x="0" y="42" width={73} height={9} rx="4.5" fill="#2FB185"></rect>
            <text x="240" y="50" fontFamily="IBM Plex Sans" fontSize="10.5" textAnchor="end" fill="#54666E">78</text>
            <text x="0" y="66" fontFamily="IBM Plex Sans" fontSize="10.5" fill="#1B2226" fontWeight="600">Farg'ona</text>
            <rect x="0" y="70" width={196} height={9} rx="4.5" fill="rgba(255,255,255,.75)"></rect>
            <rect x="0" y="70" width={60} height={9} rx="4.5" fill="#62C9A3"></rect>
            <text x="240" y="78" fontFamily="IBM Plex Sans" fontSize="10.5" textAnchor="end" fill="#54666E">64</text>
            <text x="0" y="94" fontFamily="IBM Plex Sans" fontSize="10.5" fill="#1B2226" fontWeight="600">Namangan</text>
            <rect x="0" y="98" width={196} height={9} rx="4.5" fill="rgba(255,255,255,.75)"></rect>
            <rect x="0" y="98" width={51} height={9} rx="4.5" fill="#8FD9BE"></rect>
            <text x="240" y="106" fontFamily="IBM Plex Sans" fontSize="10.5" textAnchor="end" fill="#54666E">55</text>
            <text x="0" y="122" fontFamily="IBM Plex Sans" fontSize="10.5" fill="#1B2226" fontWeight="600">Boshqa</text>
            <rect x="0" y="126" width={196} height={9} rx="4.5" fill="rgba(255,255,255,.75)"></rect>
            <rect x="0" y="126" width={40} height={9} rx="4.5" fill="#BCE8D6"></rect>
            <text x="240" y="134" fontFamily="IBM Plex Sans" fontSize="10.5" textAnchor="end" fill="#54666E">43</text>
          </svg>
        </div>

        <div className="breakdown-chart" data-chart="gender">
          <p style={{ margin: '0 0 10px', fontSize: 'var(--text-xs)', fontWeight: '600', letterSpacing: '.04em', color: 'var(--ink-mid)' }}>JINS</p>
          <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
            <svg viewBox="0 0 120 120" width={110} height={110} role="img" aria-label="Jins taqsimoti: ayollar 54%, erkaklar 46%" style={{ display: 'block', flex: 'none' }}>
              <circle cx="60" cy="60" r="44" fill="none" stroke="rgba(255,255,255,.75)" strokeWidth="16"></circle>
              <circle cx="60" cy="60" r="44" fill="none" stroke="#188563" strokeWidth="16" strokeDasharray="149.3 276.5" strokeLinecap="round" transform="rotate(-90 60 60)"></circle>
              <circle cx="60" cy="60" r="44" fill="none" stroke="#7AAAEC" strokeWidth="16" strokeDasharray="119.2 276.5" strokeDashoffset="-153.3" strokeLinecap="round" transform="rotate(-90 60 60)"></circle>
              <text x="60" y="58" fontFamily="Schibsted Grotesk" fontSize="20" fontWeight="700" textAnchor="middle" fill="#1B2226">54%</text>
              <text x="60" y="74" fontFamily="IBM Plex Sans" fontSize="9.5" textAnchor="middle" fill="#54666E">ayollar</text>
            </svg>
            <ul style={{ listStyle: 'none', margin: '0', padding: '0', display: 'flex', flexDirection: 'column', gap: '8px' }}>
              <li style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: 'var(--text-sm)' }}><span style={{ width: '10px', height: '10px', borderRadius: '3px', background: '#188563', flex: 'none' }}></span>Ayollar · <span style={{ fontVariantNumeric: 'tabular-nums', color: 'var(--ink-mid)' }}>222</span></li>
              <li style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: 'var(--text-sm)' }}><span style={{ width: '10px', height: '10px', borderRadius: '3px', background: '#7AAAEC', flex: 'none' }}></span>Erkaklar · <span style={{ fontVariantNumeric: 'tabular-nums', color: 'var(--ink-mid)' }}>190</span></li>
            </ul>
          </div>
        </div>

        <div className="quality-summary" data-element="quality-summary" style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
          <p style={{ margin: '0', fontSize: 'var(--text-xs)', fontWeight: '600', letterSpacing: '.04em', color: 'var(--ink-mid)' }}>SIFAT NAZORATI</p>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '12px', padding: '12px 14px', borderRadius: 'var(--radius-md)', background: 'var(--mint-glass)', border: '1px solid var(--mint-glass-border)' }}>
            <span style={{ display: 'flex', alignItems: 'center', gap: '9px', fontSize: 'var(--text-sm)', fontWeight: '600', color: 'var(--mint-700)' }}><svg width={15} height={15} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M5 12.5l4.5 4.5L19 7.5"></path></svg>Tasdiqlangan</span>
            <span style={{ fontFamily: 'var(--font-display)', fontSize: 'var(--text-md)', fontWeight: '700', color: 'var(--mint-700)', fontVariantNumeric: 'tabular-nums' }}>389</span>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '12px', padding: '12px 14px', borderRadius: 'var(--radius-md)', background: 'var(--amber-glass)', border: '1px solid var(--amber-glass-border)' }}>
            <span style={{ display: 'flex', alignItems: 'center', gap: '9px', fontSize: 'var(--text-sm)', fontWeight: '600', color: 'var(--amber)' }}><svg width={15} height={15} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true"><path d="M12 3l9 17H3z"></path><path d="M12 10v4M12 17.5v.5"></path></svg>Tekshiruvda</span>
            <span style={{ fontFamily: 'var(--font-display)', fontSize: 'var(--text-md)', fontWeight: '700', color: 'var(--amber)', fontVariantNumeric: 'tabular-nums' }}>23</span>
          </div>
          <p style={{ margin: '0', fontSize: 'var(--text-xs)', color: 'var(--ink-soft)' }}>Tekshiruvdagi javoblar diqqat tekshiruvidan o'tmagan yoki juda tez to'ldirilgan. Tasdiqlanmasa — to'lov qaytariladi.</p>
        </div>
      </div>
    </section>
  </main>
</div>

<nav className="app-tabbar" aria-label="Asosiy (mobil)" style={{ position: 'fixed', left: '0', right: '0', bottom: '0', zIndex: '10', justifyContent: 'space-around', alignItems: 'stretch', background: 'rgba(255,255,255,.7)', backdropFilter: 'blur(20px)', WebkitBackdropFilter: 'blur(20px)', borderTop: '1px solid var(--glass-border)', boxShadow: '0 -4px 16px rgba(27,60,50,.08)', padding: '6px 4px calc(6px + env(safe-area-inset-bottom))' }}>
  <a href="creator-dashboard.dc.html" id="tab-home" className="tab-link" style={{ flex: '1', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '2px', padding: '6px 4px', borderRadius: 'var(--radius-md)', fontSize: '10px', fontWeight: '500', color: 'var(--ink-mid)', minHeight: '44px', boxSizing: 'border-box', justifyContent: 'center' }}>
    <svg width={20} height={20} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M4 11l8-7 8 7v9a1 1 0 01-1 1h-4v-6h-6v6H5a1 1 0 01-1-1z"></path></svg>
    Bosh sahifa</a>
  <a href="#" id="tab-surveys" className="tab-link is-active" aria-current="page" style={{ flex: '1', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '2px', padding: '6px 4px', borderRadius: 'var(--radius-md)', fontSize: '10px', fontWeight: '600', color: 'var(--mint-700)', minHeight: '44px', boxSizing: 'border-box', justifyContent: 'center' }}>
    <svg width={20} height={20} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><rect x="5" y="3" width={14} height={18} rx="3"></rect><path d="M9 8h6M9 12h6M9 16h4"></path></svg>
    So'rovnomalarim</a>
  <a href="#" id="tab-panel" className="tab-link" style={{ flex: '1', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '2px', padding: '6px 4px', borderRadius: 'var(--radius-md)', fontSize: '10px', fontWeight: '500', color: 'var(--ink-mid)', minHeight: '44px', boxSizing: 'border-box', justifyContent: 'center' }}>
    <svg width={20} height={20} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true"><circle cx="9" cy="8" r="3.5"></circle><circle cx="16.5" cy="9.5" r="2.5"></circle><path d="M3.5 19c1-3 3.2-4 5.5-4s4.5 1 5.5 4M14.5 15.5c1.8.2 3.5 1.1 4.2 3.5"></path></svg>
    Panel</a>
  <a href="#" id="tab-billing" className="tab-link" style={{ flex: '1', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '2px', padding: '6px 4px', borderRadius: 'var(--radius-md)', fontSize: '10px', fontWeight: '500', color: 'var(--ink-mid)', minHeight: '44px', boxSizing: 'border-box', justifyContent: 'center' }}>
    <svg width={20} height={20} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><rect x="3" y="6" width={18} height={13} rx="3"></rect><path d="M3 10.5h18"></path><path d="M7 15.5h4"></path></svg>
    Balans</a>
  <a href="#" id="tab-settings" className="tab-link" style={{ flex: '1', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '2px', padding: '6px 4px', borderRadius: 'var(--radius-md)', fontSize: '10px', fontWeight: '500', color: 'var(--ink-mid)', minHeight: '44px', boxSizing: 'border-box', justifyContent: 'center' }}>
    <svg width={20} height={20} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="3"></circle><path d="M19 12a7 7 0 00-.1-1.2l2-1.6-2-3.4-2.4 1a7 7 0 00-2-1.2L14 3h-4l-.5 2.6a7 7 0 00-2 1.2l-2.4-1-2 3.4 2 1.6A7 7 0 005 12a7 7 0 00.1 1.2l-2 1.6 2 3.4 2.4-1a7 7 0 002 1.2L10 21h4l.5-2.6a7 7 0 002-1.2l2.4 1 2-3.4-2-1.6A7 7 0 0019 12z"></path></svg>
    Sozlamalar</a>
</nav>
    </>
  );
}
