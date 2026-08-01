// AUTO-GENERATED from the Phase 1 design export by tools/convert.py
// Static render of the design. Logic is added in the build phase.
// {/* BIND: x */} markers show where the design expected dynamic data.
// Re-runnable: regenerate after a design change, then re-apply logic.

export default function BuilderAudience() {
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
    <button type="button" id="btn-next-step" className="btn btn-primary hv-2" style={{ fontFamily: 'var(--font-body)', fontWeight: '600', fontSize: 'var(--text-sm)', padding: '9px 18px', borderRadius: 'var(--radius-md)', border: '1px solid rgba(255,255,255,.6)', background: 'linear-gradient(180deg,var(--mint-500),var(--mint-600))', color: '#fff', cursor: 'pointer', boxShadow: 'var(--glow-mint),inset 0 1px 0 rgba(255,255,255,.35)', transition: 'filter .12s' }}>Keyingi: Mukofot</button>
  </div>
</header>

<main style={{ position: 'relative', zIndex: '1', maxWidth: '1140px', margin: '0 auto', padding: '28px 24px 96px' }}>

  <ol className="stepper" aria-label="So'rovnoma yaratish bosqichlari" style={{ listStyle: 'none', margin: '0 0 28px', padding: '0', display: 'flex', alignItems: 'flex-start', maxWidth: '720px', marginLeft: 'auto', marginRight: 'auto' }}>
    <li className="step is-done" style={{ flex: '1', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '6px', position: 'relative' }}><span style={{ position: 'absolute', top: '13px', left: '50%', width: '100%', height: '2px', background: 'linear-gradient(90deg,var(--mint-500),var(--mint-400))', zIndex: '0' }}></span><span className="step-dot" style={{ position: 'relative', zIndex: '1', width: '28px', height: '28px', borderRadius: '50%', background: 'linear-gradient(180deg,var(--mint-500),var(--mint-600))', border: '1px solid rgba(255,255,255,.6)', color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '13px', fontWeight: '700', boxShadow: 'var(--glow-mint)' }}>✓</span><span style={{ fontSize: 'var(--text-xs)', color: 'var(--ink-mid)', textAlign: 'center' }}>Asosiy</span></li>
    <li className="step is-done" style={{ flex: '1', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '6px', position: 'relative' }}><span style={{ position: 'absolute', top: '13px', left: '50%', width: '100%', height: '2px', background: 'linear-gradient(90deg,var(--mint-500),var(--mint-400))', zIndex: '0' }}></span><span className="step-dot" style={{ position: 'relative', zIndex: '1', width: '28px', height: '28px', borderRadius: '50%', background: 'linear-gradient(180deg,var(--mint-500),var(--mint-600))', border: '1px solid rgba(255,255,255,.6)', color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '13px', fontWeight: '700', boxShadow: 'var(--glow-mint)' }}>✓</span><span style={{ fontSize: 'var(--text-xs)', color: 'var(--ink-mid)', textAlign: 'center' }}>Savollar</span></li>
    <li className="step is-current" style={{ flex: '1', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '6px', position: 'relative' }}><span style={{ position: 'absolute', top: '13px', left: '50%', width: '100%', height: '2px', background: 'var(--line)', zIndex: '0' }}></span><span className="step-dot" style={{ position: 'relative', zIndex: '1', width: '28px', height: '28px', borderRadius: '50%', background: 'rgba(255,255,255,.85)', backdropFilter: 'blur(6px)', WebkitBackdropFilter: 'blur(6px)', border: '2px solid var(--mint-600)', color: 'var(--mint-700)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '13px', fontWeight: '700', boxSizing: 'border-box', boxShadow: 'var(--shadow-sm)' }}>3</span><span style={{ fontSize: 'var(--text-xs)', color: 'var(--ink)', fontWeight: '600', textAlign: 'center' }}>Auditoriya</span></li>
    <li className="step" style={{ flex: '1', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '6px', position: 'relative' }}><span style={{ position: 'absolute', top: '13px', left: '50%', width: '100%', height: '2px', background: 'var(--line)', zIndex: '0' }}></span><span className="step-dot" style={{ position: 'relative', zIndex: '1', width: '28px', height: '28px', borderRadius: '50%', background: 'rgba(255,255,255,.45)', border: '1px solid var(--line)', color: 'var(--ink-mid)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '13px', fontWeight: '600' }}>4</span><span style={{ fontSize: 'var(--text-xs)', color: 'var(--ink-soft)', textAlign: 'center' }}>Mukofot</span></li>
    <li className="step" style={{ flex: '1', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '6px', position: 'relative' }}><span className="step-dot" style={{ position: 'relative', zIndex: '1', width: '28px', height: '28px', borderRadius: '50%', background: 'rgba(255,255,255,.45)', border: '1px solid var(--line)', color: 'var(--ink-mid)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '13px', fontWeight: '600' }}>5</span><span style={{ fontSize: 'var(--text-xs)', color: 'var(--ink-soft)', textAlign: 'center' }}>Tekshirish</span></li>
  </ol>

  <div className="audience-columns">
    
    <div className="audience-filters" style={{ display: 'flex', flexDirection: 'column', gap: '14px', minWidth: '0' }}>

      <section className="filter-card" style={{ background: 'var(--glass)', backdropFilter: 'blur(20px)', WebkitBackdropFilter: 'blur(20px)', border: '1px solid var(--glass-border)', borderRadius: 'var(--radius-lg)', boxShadow: 'var(--shadow-glass),var(--glass-inner)', padding: '20px' }}>
        <div className="form-field range-field" style={{ marginBottom: '20px' }}>
          <span id="aud-age-label" style={{ display: 'block', fontWeight: '600', fontSize: 'var(--text-sm)', marginBottom: '6px' }}>Yosh oralig'i: <span style={{ color: 'var(--mint-700)', fontVariantNumeric: 'tabular-nums' }}>{/* BIND: ageMin */}–{/* BIND: ageMax */}</span></span>
          <div className="range-dual" data-control="aud-age" style={{ position: 'relative', height: '36px', margin: '0 11px' }}>
            <div className="range-track" style={{ position: 'absolute', top: '16px', left: '0', right: '0', height: '5px', borderRadius: '3px', background: 'rgba(255,255,255,.7)', boxShadow: 'inset 0 1px 2px rgba(27,60,50,.12)' }}></div>
            <div className="range-fill" style={{ position: 'absolute', top: '16px', left: '{{ fillLeft }}', width: '{{ fillWidth }}', height: '5px', borderRadius: '3px', background: 'linear-gradient(90deg,var(--mint-500),var(--mint-400))', boxShadow: '0 0 8px rgba(47,177,133,.5)' }}></div>
            <button type="button" className="range-handle" id="aud-age-min" role="slider" aria-labelledby="aud-age-label" aria-valuemin={16} aria-valuemax={65} style={{ position: 'absolute', top: '7px', left: '{{ minLeft }}', transform: 'translateX(-50%)', width: '22px', height: '22px', borderRadius: '50%', background: 'rgba(255,255,255,.9)', backdropFilter: 'blur(6px)', WebkitBackdropFilter: 'blur(6px)', border: '2px solid var(--mint-600)', boxShadow: 'var(--shadow-sm),inset 0 1px 0 #fff', cursor: 'grab', padding: '0' }}></button>
            <button type="button" className="range-handle" id="aud-age-max" role="slider" aria-labelledby="aud-age-label" aria-valuemin={16} aria-valuemax={65} style={{ position: 'absolute', top: '7px', left: '{{ maxLeft }}', transform: 'translateX(-50%)', width: '22px', height: '22px', borderRadius: '50%', background: 'rgba(255,255,255,.9)', backdropFilter: 'blur(6px)', WebkitBackdropFilter: 'blur(6px)', border: '2px solid var(--mint-600)', boxShadow: 'var(--shadow-sm),inset 0 1px 0 #fff', cursor: 'grab', padding: '0' }}></button>
          </div>
        </div>
        <div className="form-field" style={{ marginBottom: '0' }}>
          <span style={{ display: 'block', fontWeight: '600', fontSize: 'var(--text-sm)', marginBottom: '8px' }}>Jins</span>
          <div className="gender-segments" role="group" aria-label="Jins" style={{ display: 'flex', gap: '4px', background: 'rgba(255,255,255,.4)', border: '1px solid var(--glass-border)', borderRadius: 'var(--radius-pill)', padding: '4px', boxShadow: 'inset 0 1px 3px rgba(27,60,50,.08)' }}>
            <button type="button" id="gender-all" data-gender="all" style={{ flex: '1', fontFamily: 'var(--font-body)', fontSize: 'var(--text-sm)', fontWeight: '{{ genderAllW }}', color: '{{ genderAllC }}', background: '{{ genderAllBg }}', border: '0', borderRadius: 'var(--radius-pill)', padding: '8px 12px', cursor: 'pointer', boxShadow: '{{ genderAllSh }}', minHeight: '36px' }}>Hammasi</button>
            <button type="button" id="gender-female" data-gender="female" style={{ flex: '1', fontFamily: 'var(--font-body)', fontSize: 'var(--text-sm)', fontWeight: '{{ genderFemaleW }}', color: '{{ genderFemaleC }}', background: '{{ genderFemaleBg }}', border: '0', borderRadius: 'var(--radius-pill)', padding: '8px 12px', cursor: 'pointer', boxShadow: '{{ genderFemaleSh }}', minHeight: '36px' }}>Ayollar</button>
            <button type="button" id="gender-male" data-gender="male" style={{ flex: '1', fontFamily: 'var(--font-body)', fontSize: 'var(--text-sm)', fontWeight: '{{ genderMaleW }}', color: '{{ genderMaleC }}', background: '{{ genderMaleBg }}', border: '0', borderRadius: 'var(--radius-pill)', padding: '8px 12px', cursor: 'pointer', boxShadow: '{{ genderMaleSh }}', minHeight: '36px' }}>Erkaklar</button>
          </div>
        </div>
      </section>

      <section className="filter-card" style={{ background: 'var(--glass)', backdropFilter: 'blur(20px)', WebkitBackdropFilter: 'blur(20px)', border: '1px solid var(--glass-border)', borderRadius: 'var(--radius-lg)', boxShadow: 'var(--shadow-glass),var(--glass-inner)', padding: '20px' }}>
        <fieldset className="region-select" style={{ border: '0', padding: '0', margin: '0' }}>
          <legend style={{ fontWeight: '600', fontSize: 'var(--text-sm)', marginBottom: '10px', padding: '0' }}>Hududlar</legend>
          <label className="region-chip" data-region="all" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '7px 12px', borderRadius: 'var(--radius-pill)', border: '1px solid {{ allRegionsBorder }}', background: '{{ allRegionsBg }}', fontSize: 'var(--text-sm)', fontWeight: '600', color: '{{ allRegionsColor }}', cursor: 'pointer', marginBottom: '10px' }}>
            <input type="checkbox" id="region-all" checked style={{ width: '14px', height: '14px', accentColor: 'var(--mint-600)', margin: '0' }} />Hammasi</label>
          <div style={{ display: 'flex', gap: '7px', flexWrap: 'wrap' }}>
            {/* SC-FOR: sc-for */}
              <label className="region-chip" data-region="[reg.key]" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '7px 12px', borderRadius: 'var(--radius-pill)', border: '1px solid {{ reg.border }}', background: '{{ reg.bg }}', fontSize: 'var(--text-sm)', fontWeight: '{{ reg.weight }}', color: '{{ reg.color }}', cursor: 'pointer' }}>
                <input type="checkbox" checked aria-label="[reg.name]" style={{ width: '14px', height: '14px', accentColor: 'var(--mint-600)', margin: '0' }} />{/* BIND: reg.name */}</label>
            
          </div>
        </fieldset>
      </section>

      <section className="filter-card" style={{ background: 'var(--glass)', backdropFilter: 'blur(20px)', WebkitBackdropFilter: 'blur(20px)', border: '1px solid var(--glass-border)', borderRadius: 'var(--radius-lg)', boxShadow: 'var(--shadow-glass),var(--glass-inner)', padding: '20px', display: 'flex', flexDirection: 'column', gap: '14px' }}>
        <div className="form-field">
          <label htmlFor="aud-education" style={{ display: 'block', fontWeight: '600', fontSize: 'var(--text-sm)', marginBottom: '6px' }}>Ma'lumot</label>
          <select id="aud-education" style={{ width: '100%', boxSizing: 'border-box', fontFamily: 'var(--font-body)', fontSize: 'var(--text-base)', color: 'var(--ink)', padding: '10px 12px', border: '1px solid var(--line-strong)', borderRadius: 'var(--radius-md)', background: 'rgba(255,255,255,.5)' }}>
            <option value="all">Ahamiyatsiz</option><option value="mid">O'rta</option><option value="midspec">O'rta maxsus</option><option value="higher">Oliy</option><option value="student">Talaba</option>
          </select>
        </div>
        <div className="form-field">
          <label htmlFor="aud-employment" style={{ display: 'block', fontWeight: '600', fontSize: 'var(--text-sm)', marginBottom: '6px' }}>Bandlik</label>
          <select id="aud-employment" style={{ width: '100%', boxSizing: 'border-box', fontFamily: 'var(--font-body)', fontSize: 'var(--text-base)', color: 'var(--ink)', padding: '10px 12px', border: '1px solid var(--line-strong)', borderRadius: 'var(--radius-md)', background: 'rgba(255,255,255,.5)' }}>
            <option value="all">Ahamiyatsiz</option><option value="employed">Yollanma xodim</option><option value="business">Tadbirkor</option><option value="freelance">Frilanser</option><option value="student">Talaba</option><option value="home">Uy bekasi</option>
          </select>
        </div>
        <div className="form-field">
          <label htmlFor="aud-income" style={{ display: 'block', fontWeight: '600', fontSize: 'var(--text-sm)', marginBottom: '6px' }}>Daromad darajasi</label>
          <select id="aud-income" style={{ width: '100%', boxSizing: 'border-box', fontFamily: 'var(--font-body)', fontSize: 'var(--text-base)', color: 'var(--ink)', padding: '10px 12px', border: '1px solid var(--line-strong)', borderRadius: 'var(--radius-md)', background: 'rgba(255,255,255,.5)' }}>
            <option value="all">Ahamiyatsiz</option><option value="low">3 000 000 so'mgacha</option><option value="mid">3 000 000 – 6 000 000 so'm</option><option value="high">6 000 000 so'mdan yuqori</option>
          </select>
        </div>
      </section>

      <section className="filter-card interests-group" style={{ background: 'var(--glass)', backdropFilter: 'blur(20px)', WebkitBackdropFilter: 'blur(20px)', border: '1px solid var(--glass-border)', borderRadius: 'var(--radius-lg)', boxShadow: 'var(--shadow-glass),var(--glass-inner)', overflow: 'hidden' }}>
        <button type="button" id="btn-interests-toggle" style={{ width: '100%', fontFamily: 'var(--font-body)', display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '12px', background: 'none', border: '0', padding: '18px 20px', cursor: 'pointer', textAlign: 'left' }}>
          <span style={{ fontWeight: '600', fontSize: 'var(--text-sm)', color: 'var(--ink)' }}>Qiziqishlar va odatlar <span style={{ fontWeight: '500', color: 'var(--ink-soft)' }}>· {/* BIND: interestCount */} tanlangan</span></span>
          <svg width={16} height={16} viewBox="0 0 24 24" fill="none" stroke="#54666E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" style={{ flex: 'none', transform: 'rotate({{ chevronDeg }})', transition: 'transform .15s' }}><path d="M6 9l6 6 6-6"></path></svg>
        </button>
        {/* SC-IF: sc-if */}
          <div className="interests-body" style={{ padding: '0 20px 18px', display: 'flex', flexDirection: 'column', gap: '9px', borderTop: '1px solid var(--line)', paddingTop: '16px' }}>
            <label className="attribute-filter" data-attr="online-shopping" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '12px', padding: '10px 13px', borderRadius: 'var(--radius-md)', border: '1px solid {{ attrShopBorder }}', background: '{{ attrShopBg }}', cursor: 'pointer' }}>
              <span style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: 'var(--text-sm)', fontWeight: '500' }}><input type="checkbox" id="attr-shop" checked style={{ width: '16px', height: '16px', accentColor: 'var(--mint-600)', margin: '0' }} />Onlayn xarid qiladi: haftasiga</span>
              <span style={{ fontSize: 'var(--text-xs)', color: 'var(--ink-soft)', fontVariantNumeric: 'tabular-nums' }}>628 kishi</span></label>
            <label className="attribute-filter" data-attr="banking-app" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '12px', padding: '10px 13px', borderRadius: 'var(--radius-md)', border: '1px solid {{ attrBankBorder }}', background: '{{ attrBankBg }}', cursor: 'pointer' }}>
              <span style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: 'var(--text-sm)', fontWeight: '500' }}><input type="checkbox" id="attr-bank" checked style={{ width: '16px', height: '16px', accentColor: 'var(--mint-600)', margin: '0' }} />Mobil bank ilovasidan foydalanadi</span>
              <span style={{ fontSize: 'var(--text-xs)', color: 'var(--ink-soft)', fontVariantNumeric: 'tabular-nums' }}>912 kishi</span></label>
            <label className="attribute-filter" data-attr="delivery" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '12px', padding: '10px 13px', borderRadius: 'var(--radius-md)', border: '1px solid {{ attrDeliveryBorder }}', background: '{{ attrDeliveryBg }}', cursor: 'pointer' }}>
              <span style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: 'var(--text-sm)', fontWeight: '500' }}><input type="checkbox" id="attr-delivery" checked style={{ width: '16px', height: '16px', accentColor: 'var(--mint-600)', margin: '0' }} />Ovqat yetkazib berishga buyurtma beradi</span>
              <span style={{ fontSize: 'var(--text-xs)', color: 'var(--ink-soft)', fontVariantNumeric: 'tabular-nums' }}>543 kishi</span></label>
            <label className="attribute-filter" data-attr="car-owner" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '12px', padding: '10px 13px', borderRadius: 'var(--radius-md)', border: '1px solid {{ attrCarBorder }}', background: '{{ attrCarBg }}', cursor: 'pointer' }}>
              <span style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: 'var(--text-sm)', fontWeight: '500' }}><input type="checkbox" id="attr-car" checked style={{ width: '16px', height: '16px', accentColor: 'var(--mint-600)', margin: '0' }} />Shaxsiy avtomobili bor</span>
              <span style={{ fontSize: 'var(--text-xs)', color: 'var(--ink-soft)', fontVariantNumeric: 'tabular-nums' }}>386 kishi</span></label>
          </div>
        
      </section>
    </div>

    
    <aside className="match-panel-sticky" style={{ position: 'sticky', top: '84px', minWidth: '0' }}>
      <div className="match-panel" data-element="match-panel" style={{ position: 'relative', borderRadius: '24px', overflow: 'hidden', background: 'linear-gradient(155deg,#0E201C 0%,#123128 60%,#175A43 130%)', boxShadow: 'var(--shadow-float)', border: '1px solid rgba(255,255,255,.14)' }}>
        <div aria-hidden="true" style={{ position: 'absolute', width: '380px', height: '380px', borderRadius: '50%', background: 'radial-gradient(circle,rgba(98,201,163,.4),transparent 70%)', top: '-130px', right: '-70px', filter: 'blur(16px)' }}></div>
        <div aria-hidden="true" style={{ position: 'absolute', width: '300px', height: '300px', borderRadius: '50%', background: 'radial-gradient(circle,rgba(122,170,236,.25),transparent 70%)', bottom: '-110px', left: '-60px', filter: 'blur(18px)' }}></div>
        <div style={{ position: 'relative', padding: '32px' }}>
          <p style={{ display: 'flex', alignItems: 'center', gap: '8px', fontFamily: 'var(--font-mono)', fontSize: 'var(--text-xs)', letterSpacing: '.08em', color: 'rgba(127,232,195,.8)', margin: '0 0 18px' }}>
            <span aria-hidden="true" style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#7FE8C3', boxShadow: '0 0 8px rgba(127,232,195,.9)', animation: 'fikra-dot-blink 1.6s ease-in-out infinite' }}></span>
            JONLI HISOB</p>
          <div className="match-count" data-element="match-count" aria-live="polite">
            <span style={{ display: 'block', fontFamily: 'var(--font-display)', fontSize: 'clamp(56px,7vw,84px)', fontWeight: '800', letterSpacing: '-.025em', lineHeight: '1', color: '{{ countColor }}', animation: 'fikra-live-pulse 2.6s ease-in-out infinite', fontVariantNumeric: 'tabular-nums' }}>{/* BIND: matchCount */}</span>
            <span style={{ display: 'block', fontSize: 'var(--text-md)', color: 'rgba(255,255,255,.75)', marginTop: '10px' }}>ta panelist mos keladi</span>
          </div>
          <p className="match-status" data-element="match-status" style={{ display: 'flex', alignItems: 'flex-start', gap: '9px', margin: '16px 0 0', padding: '10px 13px', borderRadius: 'var(--radius-md)', background: '{{ statusBg }}', border: '1px solid {{ statusBorder }}', fontSize: 'var(--text-sm)', fontWeight: '500', color: '{{ statusColor }}' }}>
            <svg width={15} height={15} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true" style={{ flex: 'none', marginTop: '2px' }}><circle cx="12" cy="12" r="9"></circle><path d="M12 8v5M12 16.5v.5"></path></svg>
            {/* BIND: statusText */}</p>

          <div className="region-breakdown" style={{ marginTop: '26px' }}>
            <p style={{ margin: '0 0 12px', fontSize: 'var(--text-xs)', fontWeight: '600', letterSpacing: '.06em', color: 'rgba(255,255,255,.5)' }}>HUDUDLAR BO'YICHA</p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '9px' }}>
              {/* SC-FOR: sc-for */}
                <div className="region-bar" style={{ display: 'grid', gridTemplateColumns: '96px 1fr 44px', alignItems: 'center', gap: '10px' }}>
                  <span style={{ fontSize: 'var(--text-xs)', color: 'rgba(255,255,255,.65)', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>{/* BIND: bar.name */}</span>
                  <div style={{ height: '8px', borderRadius: '4px', background: 'rgba(255,255,255,.1)', overflow: 'hidden' }}><div style={{ width: '{{ bar.pct }}', height: '100%', borderRadius: '4px', background: 'linear-gradient(90deg,var(--mint-500),var(--mint-400))', boxShadow: '0 0 8px rgba(98,201,163,.4)' }}></div></div>
                  <span style={{ fontSize: 'var(--text-xs)', color: 'rgba(255,255,255,.65)', textAlign: 'right', fontVariantNumeric: 'tabular-nums' }}>{/* BIND: bar.count */}</span>
                </div>
              
            </div>
          </div>

          <div className="age-histogram" style={{ marginTop: '26px' }}>
            <p style={{ margin: '0 0 12px', fontSize: 'var(--text-xs)', fontWeight: '600', letterSpacing: '.06em', color: 'rgba(255,255,255,.5)' }}>YOSH TAQSIMOTI</p>
            <div style={{ display: 'flex', alignItems: 'flex-end', gap: '5px', height: '64px' }}>
              {/* SC-FOR: sc-for */}
                <div className="age-bucket" title="[bucket.label]" style={{ flex: '1', height: '{{ bucket.h }}', borderRadius: '4px 4px 2px 2px', background: 'linear-gradient(180deg,var(--mint-400),var(--mint-600))', opacity: '{{ bucket.opacity }}' }}></div>
              
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '6px' }}>
              <span style={{ fontSize: 'var(--text-xs)', color: 'rgba(255,255,255,.4)', fontVariantNumeric: 'tabular-nums' }}>16</span>
              <span style={{ fontSize: 'var(--text-xs)', color: 'rgba(255,255,255,.4)', fontVariantNumeric: 'tabular-nums' }}>40</span>
              <span style={{ fontSize: 'var(--text-xs)', color: 'rgba(255,255,255,.4)', fontVariantNumeric: 'tabular-nums' }}>65</span>
            </div>
          </div>
          <p style={{ margin: '22px 0 0', fontSize: 'var(--text-xs)', color: 'rgba(255,255,255,.4)' }}>Raqam tasdiqlangan profillar asosida jonli hisoblanadi</p>
        </div>
      </div>
    </aside>
  </div>

  
  
</main>
    </>
  );
}
