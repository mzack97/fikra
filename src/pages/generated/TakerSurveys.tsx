// AUTO-GENERATED from the Phase 1 design export by tools/convert.py
// Static render of the design. Logic is added in the build phase.
// {/* BIND: x */} markers show where the design expected dynamic data.
// Re-runnable: regenerate after a design change, then re-apply logic.

export default function TakerSurveys() {
  return (
    <>
<div className="ambient" aria-hidden="true" style={{ position: 'fixed', inset: '0', zIndex: '0', pointerEvents: 'none', overflow: 'hidden' }}>
  <div style={{ position: 'absolute', width: '520px', height: '520px', borderRadius: '50%', background: 'radial-gradient(circle,rgba(98,201,163,.4),transparent 70%)', top: '-160px', left: '-120px', filter: 'blur(20px)' }}></div>
  <div style={{ position: 'absolute', width: '460px', height: '460px', borderRadius: '50%', background: 'radial-gradient(circle,rgba(122,170,236,.35),transparent 70%)', top: '30%', right: '-140px', filter: 'blur(24px)' }}></div>
  <div style={{ position: 'absolute', width: '480px', height: '480px', borderRadius: '50%', background: 'radial-gradient(circle,rgba(98,201,163,.3),transparent 70%)', bottom: '-180px', left: '30%', filter: 'blur(24px)' }}></div>
</div>

<div className="app-shell">
  <aside className="app-sidebar" style={{ flexDirection: 'column', gap: '8px', background: 'rgba(255,255,255,.5)', backdropFilter: 'blur(20px)', WebkitBackdropFilter: 'blur(20px)', borderRight: '1px solid var(--glass-border)', padding: '24px 16px', position: 'sticky', top: '0', height: '100vh', boxSizing: 'border-box' }}>
    <a href="landing.dc.html" id="side-logo" style={{ display: 'block', padding: '0 8px', marginBottom: '24px' }}><img className="app-logo" src="/logo-full.png" alt="Fikra" style={{ height: '26px', display: 'block' }} /></a>
    <nav className="side-nav" aria-label="Asosiy" style={{ display: 'flex', flexDirection: 'column', gap: '4px', flex: '1' }}>
      <a href="taker-dashboard.dc.html" id="side-home" className="side-link" style={{ display: 'flex', alignItems: 'center', gap: '12px', padding: '11px 12px', borderRadius: 'var(--radius-md)', fontSize: 'var(--text-sm)', fontWeight: '500', color: 'var(--ink-mid)', border: '1px solid transparent' }} style-hover="background:var(--glass);color:var(--ink)">
        <svg width={18} height={18} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M4 11l8-7 8 7v9a1 1 0 01-1 1h-4v-6h-6v6H5a1 1 0 01-1-1z"></path></svg>
        Bosh sahifa</a>
      <a href="#" id="side-surveys" className="side-link is-active" aria-current="page" style={{ display: 'flex', alignItems: 'center', gap: '12px', padding: '11px 12px', borderRadius: 'var(--radius-md)', fontSize: 'var(--text-sm)', fontWeight: '600', color: 'var(--mint-700)', background: 'var(--mint-glass)', border: '1px solid var(--mint-glass-border)' }}>
        <svg width={18} height={18} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><rect x="5" y="3" width={14} height={18} rx="3"></rect><path d="M9 8h6M9 12h6M9 16h4"></path></svg>
        So'rovnomalar</a>
      <a href="#" id="side-profile" className="side-link" style={{ display: 'flex', alignItems: 'center', gap: '12px', padding: '11px 12px', borderRadius: 'var(--radius-md)', fontSize: 'var(--text-sm)', fontWeight: '500', color: 'var(--ink-mid)', border: '1px solid transparent' }} style-hover="background:var(--glass);color:var(--ink)">
        <svg width={18} height={18} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true"><circle cx="12" cy="8" r="4"></circle><path d="M4 20c1.5-4 5-5 8-5s6.5 1 8 5"></path></svg>
        Mening profilim</a>
      <a href="#" id="side-earnings" className="side-link" style={{ display: 'flex', alignItems: 'center', gap: '12px', padding: '11px 12px', borderRadius: 'var(--radius-md)', fontSize: 'var(--text-sm)', fontWeight: '500', color: 'var(--ink-mid)', border: '1px solid transparent' }} style-hover="background:var(--glass);color:var(--ink)">
        <svg width={18} height={18} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true"><circle cx="12" cy="12" r="9"></circle><path d="M12 7v10M9.5 9.5c0-1 1-1.7 2.5-1.7s2.5.7 2.5 1.7-1 1.4-2.5 1.7-2.5.7-2.5 1.7 1 1.7 2.5 1.7 2.5-.7 2.5-1.7"></path></svg>
        Daromad</a>
      <a href="#" id="side-settings" className="side-link" style={{ display: 'flex', alignItems: 'center', gap: '12px', padding: '11px 12px', borderRadius: 'var(--radius-md)', fontSize: 'var(--text-sm)', fontWeight: '500', color: 'var(--ink-mid)', border: '1px solid transparent' }} style-hover="background:var(--glass);color:var(--ink)">
        <svg width={18} height={18} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="3"></circle><path d="M19 12a7 7 0 00-.1-1.2l2-1.6-2-3.4-2.4 1a7 7 0 00-2-1.2L14 3h-4l-.5 2.6a7 7 0 00-2 1.2l-2.4-1-2 3.4 2 1.6A7 7 0 005 12a7 7 0 00.1 1.2l-2 1.6 2 3.4 2.4-1a7 7 0 002 1.2L10 21h4l.5-2.6a7 7 0 002-1.2l2.4 1 2-3.4-2-1.6A7 7 0 0019 12z"></path></svg>
        Sozlamalar</a>
    </nav>
    <div className="side-user" data-element="side-user" style={{ display: 'flex', alignItems: 'center', gap: '12px', padding: '12px', borderRadius: 'var(--radius-md)', background: 'var(--glass)', border: '1px solid var(--glass-border)', boxShadow: 'var(--shadow-sm),var(--glass-inner)' }}>
      <span className="user-avatar" style={{ flex: 'none', width: '36px', height: '36px', borderRadius: '50%', background: 'linear-gradient(180deg,var(--mint-400),var(--mint-500))', color: '#06231A', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', fontFamily: 'var(--font-display)', fontSize: '14px', fontWeight: '700', border: '1px solid rgba(255,255,255,.6)' }}>AR</span>
      <div style={{ minWidth: '0' }}>
        <div style={{ fontSize: 'var(--text-sm)', fontWeight: '600', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>Aziza Rahimova</div>
        <div style={{ fontSize: 'var(--text-xs)', color: 'var(--ink-mid)' }}>Tasdiqlangan profil</div>
      </div>
    </div>
  </aside>

  <main className="app-content" style={{ padding: '36px 32px 64px', minWidth: '0', boxSizing: 'border-box' }}>
    <h1 style={{ fontFamily: 'var(--font-display)', fontSize: 'var(--text-2xl)', fontWeight: '700', letterSpacing: '-.01em', margin: '0 0 20px' }}>So'rovnomalar</h1>

    
    <section className="filter-bar" data-element="filter-bar" style={{ background: 'var(--glass)', backdropFilter: 'blur(20px)', WebkitBackdropFilter: 'blur(20px)', border: '1px solid var(--glass-border)', borderRadius: 'var(--radius-lg)', boxShadow: 'var(--shadow-glass),var(--glass-inner)', padding: '18px 20px', display: 'flex', flexDirection: 'column', gap: '16px', marginBottom: '10px' }}>
      <div className="filter-row" style={{ display: 'flex', gap: '20px', flexWrap: 'wrap', alignItems: 'flex-end' }}>
        <fieldset className="category-chips" style={{ border: '0', padding: '0', margin: '0', flex: '2 1 320px', minWidth: '0' }}>
          <legend style={{ fontSize: 'var(--text-xs)', fontWeight: '600', letterSpacing: '.03em', color: 'var(--ink-mid)', marginBottom: '8px', padding: '0' }}>Turkumlar</legend>
          <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
            <label className="filter-chip is-selected" data-chip="fintech" style={{ display: 'inline-flex', alignItems: 'center', gap: '7px', padding: '7px 13px', borderRadius: 'var(--radius-pill)', border: '1px solid var(--mint-glass-border)', background: 'var(--mint-glass)', fontSize: 'var(--text-sm)', fontWeight: '600', color: 'var(--mint-700)', cursor: 'pointer', minHeight: '34px', boxSizing: 'border-box' }}><input type="checkbox" id="chip-fintech" checked style={{ width: '14px', height: '14px', accentColor: 'var(--mint-600)', margin: '0' }} />Bank va moliya</label>
            <label className="filter-chip is-selected" data-chip="delivery" style={{ display: 'inline-flex', alignItems: 'center', gap: '7px', padding: '7px 13px', borderRadius: 'var(--radius-pill)', border: '1px solid var(--mint-glass-border)', background: 'var(--mint-glass)', fontSize: 'var(--text-sm)', fontWeight: '600', color: 'var(--mint-700)', cursor: 'pointer', minHeight: '34px', boxSizing: 'border-box' }}><input type="checkbox" id="chip-delivery" checked style={{ width: '14px', height: '14px', accentColor: 'var(--mint-600)', margin: '0' }} />Yetkazib berish</label>
            <label className="filter-chip" data-chip="edu" style={{ display: 'inline-flex', alignItems: 'center', gap: '7px', padding: '7px 13px', borderRadius: 'var(--radius-pill)', border: '1px solid var(--line)', background: 'rgba(255,255,255,.35)', fontSize: 'var(--text-sm)', fontWeight: '500', color: 'var(--ink-mid)', cursor: 'pointer', minHeight: '34px', boxSizing: 'border-box' }} style-hover="background:var(--glass)"><input type="checkbox" id="chip-edu" style={{ width: '14px', height: '14px', accentColor: 'var(--mint-600)', margin: '0' }} />Ta'lim</label>
            <label className="filter-chip" data-chip="health" style={{ display: 'inline-flex', alignItems: 'center', gap: '7px', padding: '7px 13px', borderRadius: 'var(--radius-pill)', border: '1px solid var(--line)', background: 'rgba(255,255,255,.35)', fontSize: 'var(--text-sm)', fontWeight: '500', color: 'var(--ink-mid)', cursor: 'pointer', minHeight: '34px', boxSizing: 'border-box' }} style-hover="background:var(--glass)"><input type="checkbox" id="chip-health" style={{ width: '14px', height: '14px', accentColor: 'var(--mint-600)', margin: '0' }} />Sog'liq</label>
            <label className="filter-chip" data-chip="transport" style={{ display: 'inline-flex', alignItems: 'center', gap: '7px', padding: '7px 13px', borderRadius: 'var(--radius-pill)', border: '1px solid var(--line)', background: 'rgba(255,255,255,.35)', fontSize: 'var(--text-sm)', fontWeight: '500', color: 'var(--ink-mid)', cursor: 'pointer', minHeight: '34px', boxSizing: 'border-box' }} style-hover="background:var(--glass)"><input type="checkbox" id="chip-transport" style={{ width: '14px', height: '14px', accentColor: 'var(--mint-600)', margin: '0' }} />Transport</label>
          </div>
        </fieldset>
        <div className="form-field range-field" style={{ flex: '1 1 220px', minWidth: '200px' }}>
          <span id="reward-range-label" style={{ display: 'block', fontSize: 'var(--text-xs)', fontWeight: '600', letterSpacing: '.03em', color: 'var(--ink-mid)', marginBottom: '8px' }}>Mukofot: <span style={{ color: 'var(--mint-700)', fontVariantNumeric: 'tabular-nums' }}>3 000 – 8 000 so'm</span></span>
          <div className="range-dual" data-control="reward-range" style={{ position: 'relative', height: '36px', margin: '0 11px' }}>
            <div className="range-track" style={{ position: 'absolute', top: '16px', left: '0', right: '0', height: '5px', borderRadius: '3px', background: 'rgba(255,255,255,.7)', boxShadow: 'inset 0 1px 2px rgba(27,60,50,.12)' }}></div>
            <div className="range-fill" style={{ position: 'absolute', top: '16px', left: '20%', width: '50%', height: '5px', borderRadius: '3px', background: 'linear-gradient(90deg,var(--mint-500),var(--mint-400))', boxShadow: '0 0 8px rgba(47,177,133,.5)' }}></div>
            <button type="button" className="range-handle" id="reward-min" role="slider" aria-labelledby="reward-range-label" aria-valuemin={1000} aria-valuemax={10000} aria-valuenow={3000} style={{ position: 'absolute', top: '7px', left: '20%', transform: 'translateX(-50%)', width: '22px', height: '22px', borderRadius: '50%', background: 'rgba(255,255,255,.9)', backdropFilter: 'blur(6px)', WebkitBackdropFilter: 'blur(6px)', border: '2px solid var(--mint-600)', boxShadow: 'var(--shadow-sm),inset 0 1px 0 #fff', cursor: 'grab', padding: '0' }}></button>
            <button type="button" className="range-handle" id="reward-max" role="slider" aria-labelledby="reward-range-label" aria-valuemin={1000} aria-valuemax={10000} aria-valuenow={8000} style={{ position: 'absolute', top: '7px', left: '70%', transform: 'translateX(-50%)', width: '22px', height: '22px', borderRadius: '50%', background: 'rgba(255,255,255,.9)', backdropFilter: 'blur(6px)', WebkitBackdropFilter: 'blur(6px)', border: '2px solid var(--mint-600)', boxShadow: 'var(--shadow-sm),inset 0 1px 0 #fff', cursor: 'grab', padding: '0' }}></button>
          </div>
        </div>
      </div>
      <div className="filter-row" style={{ display: 'flex', gap: '20px', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-between' }}>
        <div className="duration-segments" role="group" aria-label="Davomiylik" style={{ display: 'flex', gap: '4px', background: 'rgba(255,255,255,.4)', border: '1px solid var(--glass-border)', borderRadius: 'var(--radius-pill)', padding: '4px', boxShadow: 'inset 0 1px 3px rgba(27,60,50,.08)' }}>
          <button type="button" id="dur-all" data-duration="all" aria-pressed="true" style={{ fontFamily: 'var(--font-body)', fontSize: 'var(--text-sm)', fontWeight: '600', color: 'var(--mint-700)', background: 'rgba(255,255,255,.95)', border: '0', borderRadius: 'var(--radius-pill)', padding: '7px 16px', cursor: 'pointer', boxShadow: 'var(--shadow-sm)', minHeight: '34px' }}>Hammasi</button>
          <button type="button" id="dur-short" data-duration="short" aria-pressed="false" style={{ fontFamily: 'var(--font-body)', fontSize: 'var(--text-sm)', fontWeight: '500', color: 'var(--ink-mid)', background: 'transparent', border: '0', borderRadius: 'var(--radius-pill)', padding: '7px 16px', cursor: 'pointer', minHeight: '34px' }} style-hover="background:rgba(255,255,255,.6)">5 daqiqagacha</button>
          <button type="button" id="dur-mid" data-duration="mid" aria-pressed="false" style={{ fontFamily: 'var(--font-body)', fontSize: 'var(--text-sm)', fontWeight: '500', color: 'var(--ink-mid)', background: 'transparent', border: '0', borderRadius: 'var(--radius-pill)', padding: '7px 16px', cursor: 'pointer', minHeight: '34px' }} style-hover="background:rgba(255,255,255,.6)">5–10 daqiqa</button>
          <button type="button" id="dur-long" data-duration="long" aria-pressed="false" style={{ fontFamily: 'var(--font-body)', fontSize: 'var(--text-sm)', fontWeight: '500', color: 'var(--ink-mid)', background: 'transparent', border: '0', borderRadius: 'var(--radius-pill)', padding: '7px 16px', cursor: 'pointer', minHeight: '34px' }} style-hover="background:rgba(255,255,255,.6)">10+ daqiqa</button>
        </div>
        <div className="form-field" style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          <label htmlFor="sort-select" style={{ fontSize: 'var(--text-sm)', fontWeight: '600', color: 'var(--ink-mid)' }}>Saralash</label>
          <select id="sort-select" style={{ fontFamily: 'var(--font-body)', fontSize: 'var(--text-sm)', color: 'var(--ink)', padding: '9px 12px', border: '1px solid var(--line-strong)', borderRadius: 'var(--radius-md)', background: 'rgba(255,255,255,.5)', minHeight: '38px' }}>
            <option>Yangi avval</option><option>Mukofot: yuqoridan</option><option>Mukofot: pastdan</option><option>Qisqa avval</option>
          </select>
        </div>
      </div>
    </section>
    <p className="result-line" data-element="result-line" style={{ margin: '0 0 20px', fontSize: 'var(--text-sm)', color: 'var(--ink-mid)' }}>18 ta so'rovnoma · <span style={{ color: 'var(--mint-700)', fontWeight: '600' }}>sizga 12 tasi mos</span></p>

    
    <div className="survey-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill,minmax(280px,1fr))', gap: '16px' }}>

      <div className="survey-card" data-survey="s-401" style={{ background: 'var(--glass)', backdropFilter: 'blur(20px)', WebkitBackdropFilter: 'blur(20px)', border: '1px solid var(--glass-border)', borderRadius: 'var(--radius-lg)', boxShadow: 'var(--shadow-glass),var(--glass-inner)', padding: '18px', display: 'flex', flexDirection: 'column', gap: '11px' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '10px' }}>
          <span className="category-badge" style={{ display: 'inline-flex', fontSize: 'var(--text-xs)', fontWeight: '600', padding: '3px 10px', borderRadius: 'var(--radius-pill)', background: 'var(--mint-glass)', border: '1px solid var(--mint-glass-border)', color: 'var(--mint-700)' }}>Bank va moliya</span>
          <span className="survey-duration" style={{ fontSize: 'var(--text-xs)', color: 'var(--ink-mid)', fontVariantNumeric: 'tabular-nums' }}>4 daqiqa</span>
        </div>
        <h3 className="survey-title" style={{ fontFamily: 'var(--font-display)', fontSize: 'var(--text-base)', fontWeight: '600', lineHeight: '1.3', margin: '0', flex: '1' }}>Kredit kartadan foydalanish tajribasi</h3>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '10px' }}>
          <span className="reward-amount" style={{ fontFamily: 'var(--font-display)', fontSize: 'var(--text-lg)', fontWeight: '800', letterSpacing: '-.01em', color: 'var(--mint-700)', fontVariantNumeric: 'tabular-nums' }}>6 000 <span style={{ fontSize: 'var(--text-sm)', fontWeight: '600' }}>so'm</span></span>
          <button type="button" className="btn btn-primary" data-action="start-s-401" style={{ fontFamily: 'var(--font-body)', fontWeight: '600', fontSize: 'var(--text-sm)', padding: '9px 16px', borderRadius: 'var(--radius-md)', border: '1px solid rgba(255,255,255,.6)', background: 'linear-gradient(180deg,var(--mint-500),var(--mint-600))', color: '#fff', cursor: 'pointer', boxShadow: 'var(--glow-mint),inset 0 1px 0 rgba(255,255,255,.35)', transition: 'filter .12s', minHeight: '38px' }} style-hover="filter:brightness(1.08)">Boshlash</button>
        </div>
      </div>

      <div className="survey-card is-ineligible" data-survey="s-402" aria-disabled="true" style={{ position: 'relative', background: 'var(--glass-soft)', backdropFilter: 'blur(14px)', WebkitBackdropFilter: 'blur(14px)', border: '1px solid var(--line)', borderRadius: 'var(--radius-lg)', padding: '18px', display: 'flex', flexDirection: 'column', gap: '11px' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '10px', opacity: '.55' }}>
          <span className="category-badge" style={{ display: 'inline-flex', fontSize: 'var(--text-xs)', fontWeight: '600', padding: '3px 10px', borderRadius: 'var(--radius-pill)', background: 'rgba(84,102,110,.1)', border: '1px solid rgba(84,102,110,.22)', color: 'var(--ink-mid)' }}>Yetkazib berish</span>
          <span className="survey-duration" style={{ fontSize: 'var(--text-xs)', color: 'var(--ink-mid)', fontVariantNumeric: 'tabular-nums' }}>6 daqiqa</span>
        </div>
        <h3 className="survey-title" style={{ fontFamily: 'var(--font-display)', fontSize: 'var(--text-base)', fontWeight: '600', lineHeight: '1.3', margin: '0', flex: '1', color: 'var(--ink-mid)', opacity: '.75' }}>Tez yetkazib berish xizmatlarini solishtirish</h3>
        <span className="reason-chip" style={{ display: 'inline-flex', alignItems: 'center', gap: '7px', alignSelf: 'flex-start', fontSize: 'var(--text-xs)', fontWeight: '600', padding: '5px 11px', borderRadius: 'var(--radius-pill)', background: 'var(--amber-glass)', border: '1px solid var(--amber-glass-border)', color: 'var(--amber)' }}>
          <svg width={12} height={12} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" aria-hidden="true"><rect x="5" y="10" width={14} height={10} rx="2"></rect><path d="M8 10V7a4 4 0 018 0v3"></path></svg>
          Talab: Toshkent viloyati</span>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '10px' }}>
          <span className="reward-amount" style={{ fontFamily: 'var(--font-display)', fontSize: 'var(--text-lg)', fontWeight: '800', letterSpacing: '-.01em', color: 'var(--ink-soft)', fontVariantNumeric: 'tabular-nums' }}>7 500 <span style={{ fontSize: 'var(--text-sm)', fontWeight: '600' }}>so'm</span></span>
          <a href="#" className="link-complete-profile" data-action="complete-profile-s-402" style={{ fontSize: 'var(--text-sm)', fontWeight: '600', color: 'var(--mint-600)', textDecoration: 'underline' }} style-hover="color:var(--mint-700)">Profilni to'ldirish</a>
        </div>
      </div>

      <div className="survey-card" data-survey="s-403" style={{ background: 'var(--glass)', backdropFilter: 'blur(20px)', WebkitBackdropFilter: 'blur(20px)', border: '1px solid var(--glass-border)', borderRadius: 'var(--radius-lg)', boxShadow: 'var(--shadow-glass),var(--glass-inner)', padding: '18px', display: 'flex', flexDirection: 'column', gap: '11px' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '10px' }}>
          <span className="category-badge" style={{ display: 'inline-flex', fontSize: 'var(--text-xs)', fontWeight: '600', padding: '3px 10px', borderRadius: 'var(--radius-pill)', background: 'var(--blue-glass)', border: '1px solid var(--blue-glass-border)', color: 'var(--blue-deep)' }}>Yetkazib berish</span>
          <span className="survey-duration" style={{ fontSize: 'var(--text-xs)', color: 'var(--ink-mid)', fontVariantNumeric: 'tabular-nums' }}>5 daqiqa</span>
        </div>
        <h3 className="survey-title" style={{ fontFamily: 'var(--font-display)', fontSize: 'var(--text-base)', fontWeight: '600', lineHeight: '1.3', margin: '0', flex: '1' }}>Oziq-ovqat yetkazib berish narxlari</h3>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '10px' }}>
          <span className="reward-amount" style={{ fontFamily: 'var(--font-display)', fontSize: 'var(--text-lg)', fontWeight: '800', letterSpacing: '-.01em', color: 'var(--mint-700)', fontVariantNumeric: 'tabular-nums' }}>4 500 <span style={{ fontSize: 'var(--text-sm)', fontWeight: '600' }}>so'm</span></span>
          <button type="button" className="btn btn-primary" data-action="start-s-403" style={{ fontFamily: 'var(--font-body)', fontWeight: '600', fontSize: 'var(--text-sm)', padding: '9px 16px', borderRadius: 'var(--radius-md)', border: '1px solid rgba(255,255,255,.6)', background: 'linear-gradient(180deg,var(--mint-500),var(--mint-600))', color: '#fff', cursor: 'pointer', boxShadow: 'var(--glow-mint),inset 0 1px 0 rgba(255,255,255,.35)', transition: 'filter .12s', minHeight: '38px' }} style-hover="filter:brightness(1.08)">Boshlash</button>
        </div>
      </div>

      <div className="survey-card" data-survey="s-404" style={{ background: 'var(--glass)', backdropFilter: 'blur(20px)', WebkitBackdropFilter: 'blur(20px)', border: '1px solid var(--glass-border)', borderRadius: 'var(--radius-lg)', boxShadow: 'var(--shadow-glass),var(--glass-inner)', padding: '18px', display: 'flex', flexDirection: 'column', gap: '11px' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '10px' }}>
          <span className="category-badge" style={{ display: 'inline-flex', fontSize: 'var(--text-xs)', fontWeight: '600', padding: '3px 10px', borderRadius: 'var(--radius-pill)', background: 'var(--mint-glass)', border: '1px solid var(--mint-glass-border)', color: 'var(--mint-700)' }}>Bank va moliya</span>
          <span className="survey-duration" style={{ fontSize: 'var(--text-xs)', color: 'var(--ink-mid)', fontVariantNumeric: 'tabular-nums' }}>8 daqiqa</span>
        </div>
        <h3 className="survey-title" style={{ fontFamily: 'var(--font-display)', fontSize: 'var(--text-base)', fontWeight: '600', lineHeight: '1.3', margin: '0', flex: '1' }}>Onlayn to'lovlarda xavfsizlik hissi</h3>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '10px' }}>
          <span className="reward-amount" style={{ fontFamily: 'var(--font-display)', fontSize: 'var(--text-lg)', fontWeight: '800', letterSpacing: '-.01em', color: 'var(--mint-700)', fontVariantNumeric: 'tabular-nums' }}>8 000 <span style={{ fontSize: 'var(--text-sm)', fontWeight: '600' }}>so'm</span></span>
          <button type="button" className="btn btn-primary" data-action="start-s-404" style={{ fontFamily: 'var(--font-body)', fontWeight: '600', fontSize: 'var(--text-sm)', padding: '9px 16px', borderRadius: 'var(--radius-md)', border: '1px solid rgba(255,255,255,.6)', background: 'linear-gradient(180deg,var(--mint-500),var(--mint-600))', color: '#fff', cursor: 'pointer', boxShadow: 'var(--glow-mint),inset 0 1px 0 rgba(255,255,255,.35)', transition: 'filter .12s', minHeight: '38px' }} style-hover="filter:brightness(1.08)">Boshlash</button>
        </div>
      </div>

      <div className="survey-card is-ineligible" data-survey="s-405" aria-disabled="true" style={{ position: 'relative', background: 'var(--glass-soft)', backdropFilter: 'blur(14px)', WebkitBackdropFilter: 'blur(14px)', border: '1px solid var(--line)', borderRadius: 'var(--radius-lg)', padding: '18px', display: 'flex', flexDirection: 'column', gap: '11px' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '10px', opacity: '.55' }}>
          <span className="category-badge" style={{ display: 'inline-flex', fontSize: 'var(--text-xs)', fontWeight: '600', padding: '3px 10px', borderRadius: 'var(--radius-pill)', background: 'rgba(84,102,110,.1)', border: '1px solid rgba(84,102,110,.22)', color: 'var(--ink-mid)' }}>Sog'liq</span>
          <span className="survey-duration" style={{ fontSize: 'var(--text-xs)', color: 'var(--ink-mid)', fontVariantNumeric: 'tabular-nums' }}>5 daqiqa</span>
        </div>
        <h3 className="survey-title" style={{ fontFamily: 'var(--font-display)', fontSize: 'var(--text-base)', fontWeight: '600', lineHeight: '1.3', margin: '0', flex: '1', color: 'var(--ink-mid)', opacity: '.75' }}>Shaxsiy tibbiy sug'urta haqida fikrlar</h3>
        <span className="reason-chip" style={{ display: 'inline-flex', alignItems: 'center', gap: '7px', alignSelf: 'flex-start', fontSize: 'var(--text-xs)', fontWeight: '600', padding: '5px 11px', borderRadius: 'var(--radius-pill)', background: 'var(--amber-glass)', border: '1px solid var(--amber-glass-border)', color: 'var(--amber)' }}>
          <svg width={12} height={12} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" aria-hidden="true"><rect x="5" y="10" width={14} height={10} rx="2"></rect><path d="M8 10V7a4 4 0 018 0v3"></path></svg>
          Talab: «Sog'liq» viktorinasi</span>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '10px' }}>
          <span className="reward-amount" style={{ fontFamily: 'var(--font-display)', fontSize: 'var(--text-lg)', fontWeight: '800', letterSpacing: '-.01em', color: 'var(--ink-soft)', fontVariantNumeric: 'tabular-nums' }}>5 500 <span style={{ fontSize: 'var(--text-sm)', fontWeight: '600' }}>so'm</span></span>
          <a href="#" className="link-complete-profile" data-action="complete-profile-s-405" style={{ fontSize: 'var(--text-sm)', fontWeight: '600', color: 'var(--mint-600)', textDecoration: 'underline' }} style-hover="color:var(--mint-700)">Profilni to'ldirish</a>
        </div>
      </div>

      <div className="survey-card" data-survey="s-406" style={{ background: 'var(--glass)', backdropFilter: 'blur(20px)', WebkitBackdropFilter: 'blur(20px)', border: '1px solid var(--glass-border)', borderRadius: 'var(--radius-lg)', boxShadow: 'var(--shadow-glass),var(--glass-inner)', padding: '18px', display: 'flex', flexDirection: 'column', gap: '11px' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '10px' }}>
          <span className="category-badge" style={{ display: 'inline-flex', fontSize: 'var(--text-xs)', fontWeight: '600', padding: '3px 10px', borderRadius: 'var(--radius-pill)', background: 'var(--amber-glass)', border: '1px solid var(--amber-glass-border)', color: 'var(--amber)' }}>Ta'lim</span>
          <span className="survey-duration" style={{ fontSize: 'var(--text-xs)', color: 'var(--ink-mid)', fontVariantNumeric: 'tabular-nums' }}>3 daqiqa</span>
        </div>
        <h3 className="survey-title" style={{ fontFamily: 'var(--font-display)', fontSize: 'var(--text-base)', fontWeight: '600', lineHeight: '1.3', margin: '0', flex: '1' }}>Onlayn kurslar haqida fikringiz</h3>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '10px' }}>
          <span className="reward-amount" style={{ fontFamily: 'var(--font-display)', fontSize: 'var(--text-lg)', fontWeight: '800', letterSpacing: '-.01em', color: 'var(--mint-700)', fontVariantNumeric: 'tabular-nums' }}>3 500 <span style={{ fontSize: 'var(--text-sm)', fontWeight: '600' }}>so'm</span></span>
          <button type="button" className="btn btn-primary" data-action="start-s-406" style={{ fontFamily: 'var(--font-body)', fontWeight: '600', fontSize: 'var(--text-sm)', padding: '9px 16px', borderRadius: 'var(--radius-md)', border: '1px solid rgba(255,255,255,.6)', background: 'linear-gradient(180deg,var(--mint-500),var(--mint-600))', color: '#fff', cursor: 'pointer', boxShadow: 'var(--glow-mint),inset 0 1px 0 rgba(255,255,255,.35)', transition: 'filter .12s', minHeight: '38px' }} style-hover="filter:brightness(1.08)">Boshlash</button>
        </div>
      </div>

      <div className="survey-card is-ineligible" data-survey="s-407" aria-disabled="true" style={{ position: 'relative', background: 'var(--glass-soft)', backdropFilter: 'blur(14px)', WebkitBackdropFilter: 'blur(14px)', border: '1px solid var(--line)', borderRadius: 'var(--radius-lg)', padding: '18px', display: 'flex', flexDirection: 'column', gap: '11px' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '10px', opacity: '.55' }}>
          <span className="category-badge" style={{ display: 'inline-flex', fontSize: 'var(--text-xs)', fontWeight: '600', padding: '3px 10px', borderRadius: 'var(--radius-pill)', background: 'rgba(84,102,110,.1)', border: '1px solid rgba(84,102,110,.22)', color: 'var(--ink-mid)' }}>Transport</span>
          <span className="survey-duration" style={{ fontSize: 'var(--text-xs)', color: 'var(--ink-mid)', fontVariantNumeric: 'tabular-nums' }}>7 daqiqa</span>
        </div>
        <h3 className="survey-title" style={{ fontFamily: 'var(--font-display)', fontSize: 'var(--text-base)', fontWeight: '600', lineHeight: '1.3', margin: '0', flex: '1', color: 'var(--ink-mid)', opacity: '.75' }}>Shaxsiy avtomobil egalari uchun so'rovnoma</h3>
        <span className="reason-chip" style={{ display: 'inline-flex', alignItems: 'center', gap: '7px', alignSelf: 'flex-start', fontSize: 'var(--text-xs)', fontWeight: '600', padding: '5px 11px', borderRadius: 'var(--radius-pill)', background: 'var(--amber-glass)', border: '1px solid var(--amber-glass-border)', color: 'var(--amber)' }}>
          <svg width={12} height={12} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" aria-hidden="true"><rect x="5" y="10" width={14} height={10} rx="2"></rect><path d="M8 10V7a4 4 0 018 0v3"></path></svg>
          Talab: 25 yoshdan katta</span>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '10px' }}>
          <span className="reward-amount" style={{ fontFamily: 'var(--font-display)', fontSize: 'var(--text-lg)', fontWeight: '800', letterSpacing: '-.01em', color: 'var(--ink-soft)', fontVariantNumeric: 'tabular-nums' }}>9 000 <span style={{ fontSize: 'var(--text-sm)', fontWeight: '600' }}>so'm</span></span>
          <a href="#" className="link-complete-profile" data-action="complete-profile-s-407" style={{ fontSize: 'var(--text-sm)', fontWeight: '600', color: 'var(--mint-600)', textDecoration: 'underline' }} style-hover="color:var(--mint-700)">Profilni to'ldirish</a>
        </div>
      </div>

      <div className="survey-card" data-survey="s-408" style={{ background: 'var(--glass)', backdropFilter: 'blur(20px)', WebkitBackdropFilter: 'blur(20px)', border: '1px solid var(--glass-border)', borderRadius: 'var(--radius-lg)', boxShadow: 'var(--shadow-glass),var(--glass-inner)', padding: '18px', display: 'flex', flexDirection: 'column', gap: '11px' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '10px' }}>
          <span className="category-badge" style={{ display: 'inline-flex', fontSize: 'var(--text-xs)', fontWeight: '600', padding: '3px 10px', borderRadius: 'var(--radius-pill)', background: 'var(--mint-glass)', border: '1px solid var(--mint-glass-border)', color: 'var(--mint-700)' }}>Sog'liq va sport</span>
          <span className="survey-duration" style={{ fontSize: 'var(--text-xs)', color: 'var(--ink-mid)', fontVariantNumeric: 'tabular-nums' }}>6 daqiqa</span>
        </div>
        <h3 className="survey-title" style={{ fontFamily: 'var(--font-display)', fontSize: 'var(--text-base)', fontWeight: '600', lineHeight: '1.3', margin: '0', flex: '1' }}>Sport zallar va mashg'ulot odatlari</h3>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '10px' }}>
          <span className="reward-amount" style={{ fontFamily: 'var(--font-display)', fontSize: 'var(--text-lg)', fontWeight: '800', letterSpacing: '-.01em', color: 'var(--mint-700)', fontVariantNumeric: 'tabular-nums' }}>5 000 <span style={{ fontSize: 'var(--text-sm)', fontWeight: '600' }}>so'm</span></span>
          <button type="button" className="btn btn-primary" data-action="start-s-408" style={{ fontFamily: 'var(--font-body)', fontWeight: '600', fontSize: 'var(--text-sm)', padding: '9px 16px', borderRadius: 'var(--radius-md)', border: '1px solid rgba(255,255,255,.6)', background: 'linear-gradient(180deg,var(--mint-500),var(--mint-600))', color: '#fff', cursor: 'pointer', boxShadow: 'var(--glow-mint),inset 0 1px 0 rgba(255,255,255,.35)', transition: 'filter .12s', minHeight: '38px' }} style-hover="filter:brightness(1.08)">Boshlash</button>
        </div>
      </div>
    </div>
  </main>
</div>

<nav className="app-tabbar" aria-label="Asosiy (mobil)" style={{ position: 'fixed', left: '0', right: '0', bottom: '0', zIndex: '10', justifyContent: 'space-around', alignItems: 'stretch', background: 'rgba(255,255,255,.7)', backdropFilter: 'blur(20px)', WebkitBackdropFilter: 'blur(20px)', borderTop: '1px solid var(--glass-border)', boxShadow: '0 -4px 16px rgba(27,60,50,.08)', padding: '6px 4px calc(6px + env(safe-area-inset-bottom))' }}>
  <a href="taker-dashboard.dc.html" id="tab-home" className="tab-link" style={{ flex: '1', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '2px', padding: '6px 4px', borderRadius: 'var(--radius-md)', fontSize: '10px', fontWeight: '500', color: 'var(--ink-mid)', minHeight: '44px', boxSizing: 'border-box', justifyContent: 'center' }}>
    <svg width={20} height={20} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M4 11l8-7 8 7v9a1 1 0 01-1 1h-4v-6h-6v6H5a1 1 0 01-1-1z"></path></svg>
    Bosh sahifa</a>
  <a href="#" id="tab-surveys" className="tab-link is-active" aria-current="page" style={{ flex: '1', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '2px', padding: '6px 4px', borderRadius: 'var(--radius-md)', fontSize: '10px', fontWeight: '600', color: 'var(--mint-700)', minHeight: '44px', boxSizing: 'border-box', justifyContent: 'center' }}>
    <svg width={20} height={20} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><rect x="5" y="3" width={14} height={18} rx="3"></rect><path d="M9 8h6M9 12h6M9 16h4"></path></svg>
    So'rovnomalar</a>
  <a href="#" id="tab-profile" className="tab-link" style={{ flex: '1', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '2px', padding: '6px 4px', borderRadius: 'var(--radius-md)', fontSize: '10px', fontWeight: '500', color: 'var(--ink-mid)', minHeight: '44px', boxSizing: 'border-box', justifyContent: 'center' }}>
    <svg width={20} height={20} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true"><circle cx="12" cy="8" r="4"></circle><path d="M4 20c1.5-4 5-5 8-5s6.5 1 8 5"></path></svg>
    Profil</a>
  <a href="#" id="tab-earnings" className="tab-link" style={{ flex: '1', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '2px', padding: '6px 4px', borderRadius: 'var(--radius-md)', fontSize: '10px', fontWeight: '500', color: 'var(--ink-mid)', minHeight: '44px', boxSizing: 'border-box', justifyContent: 'center' }}>
    <svg width={20} height={20} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true"><circle cx="12" cy="12" r="9"></circle><path d="M12 7v10M9.5 9.5c0-1 1-1.7 2.5-1.7s2.5.7 2.5 1.7-1 1.4-2.5 1.7-2.5.7-2.5 1.7 1 1.7 2.5 1.7 2.5-.7 2.5-1.7"></path></svg>
    Daromad</a>
  <a href="#" id="tab-settings" className="tab-link" style={{ flex: '1', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '2px', padding: '6px 4px', borderRadius: 'var(--radius-md)', fontSize: '10px', fontWeight: '500', color: 'var(--ink-mid)', minHeight: '44px', boxSizing: 'border-box', justifyContent: 'center' }}>
    <svg width={20} height={20} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="3"></circle><path d="M19 12a7 7 0 00-.1-1.2l2-1.6-2-3.4-2.4 1a7 7 0 00-2-1.2L14 3h-4l-.5 2.6a7 7 0 00-2 1.2l-2.4-1-2 3.4 2 1.6A7 7 0 005 12a7 7 0 00.1 1.2l-2 1.6 2 3.4 2.4-1a7 7 0 002 1.2L10 21h4l.5-2.6a7 7 0 002-1.2l2.4 1 2-3.4-2-1.6A7 7 0 0019 12z"></path></svg>
    Sozlamalar</a>
</nav>
    </>
  );
}
