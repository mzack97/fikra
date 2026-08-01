// AUTO-GENERATED from the Phase 1 design export by tools/convert.py
// Static render of the design. Logic is added in the build phase.
// {/* BIND: x */} markers show where the design expected dynamic data.
// Re-runnable: regenerate after a design change, then re-apply logic.

export default function RegisterTaker() {
  return (
    <>
<div className="ambient" aria-hidden="true" style={{ position: 'fixed', inset: '0', zIndex: '0', pointerEvents: 'none', overflow: 'hidden' }}>
  <div style={{ position: 'absolute', width: '520px', height: '520px', borderRadius: '50%', background: 'radial-gradient(circle,rgba(98,201,163,.4),transparent 70%)', top: '-160px', left: '-120px', filter: 'blur(20px)' }}></div>
  <div style={{ position: 'absolute', width: '460px', height: '460px', borderRadius: '50%', background: 'radial-gradient(circle,rgba(122,170,236,.35),transparent 70%)', top: '30%', right: '-140px', filter: 'blur(24px)' }}></div>
  <div style={{ position: 'absolute', width: '480px', height: '480px', borderRadius: '50%', background: 'radial-gradient(circle,rgba(98,201,163,.3),transparent 70%)', bottom: '-180px', left: '30%', filter: 'blur(24px)' }}></div>
</div>

<main style={{ position: 'relative', zIndex: '1', maxWidth: '480px', margin: '0 auto', padding: '48px 16px 96px', display: 'flex', flexDirection: 'column', alignItems: 'stretch' }}>
  <img className="app-logo" src="/logo-full.png" alt="Fikra" style={{ height: '34px', display: 'block', margin: '0 auto 28px' }} />

  <ol className="stepper" aria-label="Ro'yxatdan o'tish bosqichlari" style={{ listStyle: 'none', margin: '0 0 36px', padding: '0', display: 'flex', alignItems: 'flex-start' }}>
    <li className="step is-current" style={{ flex: '1', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '6px', position: 'relative' }}><span style={{ position: 'absolute', top: '13px', left: '50%', width: '100%', height: '2px', background: 'var(--line)', zIndex: '0' }}></span><span className="step-dot" style={{ position: 'relative', zIndex: '1', width: '28px', height: '28px', borderRadius: '50%', background: 'rgba(255,255,255,.85)', backdropFilter: 'blur(6px)', WebkitBackdropFilter: 'blur(6px)', border: '2px solid var(--mint-600)', color: 'var(--mint-700)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '13px', fontWeight: '700', boxSizing: 'border-box', boxShadow: 'var(--shadow-sm)' }}>1</span><span style={{ fontSize: 'var(--text-xs)', color: 'var(--ink)', fontWeight: '600', textAlign: 'center' }}>Telefon</span></li>
    <li className="step" style={{ flex: '1', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '6px', position: 'relative' }}><span style={{ position: 'absolute', top: '13px', left: '50%', width: '100%', height: '2px', background: 'var(--line)', zIndex: '0' }}></span><span className="step-dot" style={{ position: 'relative', zIndex: '1', width: '28px', height: '28px', borderRadius: '50%', background: 'rgba(255,255,255,.45)', border: '1px solid var(--line)', color: 'var(--ink-mid)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '13px', fontWeight: '600' }}>2</span><span style={{ fontSize: 'var(--text-xs)', color: 'var(--ink-soft)', textAlign: 'center' }}>Kod</span></li>
    <li className="step" style={{ flex: '1', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '6px', position: 'relative' }}><span style={{ position: 'absolute', top: '13px', left: '50%', width: '100%', height: '2px', background: 'var(--line)', zIndex: '0' }}></span><span className="step-dot" style={{ position: 'relative', zIndex: '1', width: '28px', height: '28px', borderRadius: '50%', background: 'rgba(255,255,255,.45)', border: '1px solid var(--line)', color: 'var(--ink-mid)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '13px', fontWeight: '600' }}>3</span><span style={{ fontSize: 'var(--text-xs)', color: 'var(--ink-soft)', textAlign: 'center' }}>Shaxs</span></li>
    <li className="step" style={{ flex: '1', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '6px', position: 'relative' }}><span style={{ position: 'absolute', top: '13px', left: '50%', width: '100%', height: '2px', background: 'var(--line)', zIndex: '0' }}></span><span className="step-dot" style={{ position: 'relative', zIndex: '1', width: '28px', height: '28px', borderRadius: '50%', background: 'rgba(255,255,255,.45)', border: '1px solid var(--line)', color: 'var(--ink-mid)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '13px', fontWeight: '600' }}>4</span><span style={{ fontSize: 'var(--text-xs)', color: 'var(--ink-soft)', textAlign: 'center' }}>Profil</span></li>
    <li className="step" style={{ flex: '1', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '6px', position: 'relative' }}><span className="step-dot" style={{ position: 'relative', zIndex: '1', width: '28px', height: '28px', borderRadius: '50%', background: 'rgba(255,255,255,.45)', border: '1px solid var(--line)', color: 'var(--ink-mid)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '13px', fontWeight: '600' }}>5</span><span style={{ fontSize: 'var(--text-xs)', color: 'var(--ink-soft)', textAlign: 'center' }}>Viktorina</span></li>
  </ol>

  
  <section className="reg-step" id="step-phone" data-screen-label="1 · Telefon" style={{ background: 'var(--glass)', backdropFilter: 'blur(20px)', WebkitBackdropFilter: 'blur(20px)', border: '1px solid var(--glass-border)', borderRadius: 'var(--radius-lg)', boxShadow: 'var(--shadow-glass),var(--glass-inner)', padding: '28px 24px' }}>
    <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'var(--text-lg)', fontWeight: '700', margin: '0 0 4px' }}>Telefon raqamingiz</h2>
    <p style={{ margin: '0 0 20px', fontSize: 'var(--text-sm)', color: 'var(--ink-mid)' }}>Kirish va to'lovlar uchun ishlatiladi. Hech kimga ko'rsatilmaydi.</p>
    <div className="form-field" style={{ marginBottom: '16px' }}>
      <label htmlFor="reg-phone" style={{ display: 'block', fontWeight: '600', fontSize: 'var(--text-sm)', marginBottom: '6px' }}>Telefon raqam</label>
      <div className="phone-input" style={{ display: 'flex', alignItems: 'stretch', border: '1px solid var(--line-strong)', borderRadius: 'var(--radius-md)', background: 'rgba(255,255,255,.5)', boxShadow: 'inset 0 1px 2px rgba(27,60,50,.05)', overflow: 'hidden' }}>
        <span className="phone-prefix" style={{ display: 'flex', alignItems: 'center', padding: '0 12px', background: 'rgba(255,255,255,.55)', borderRight: '1px solid var(--line)', fontWeight: '600', color: 'var(--ink-mid)', fontVariantNumeric: 'tabular-nums' }}>+998</span>
        <input id="reg-phone" type="tel" inputMode="numeric" placeholder="90 123 45 67" autoComplete="tel-national" style={{ flex: '1', minWidth: '0', fontFamily: 'var(--font-body)', fontSize: 'var(--text-md)', color: 'var(--ink)', padding: '12px', border: '0', background: 'transparent', fontVariantNumeric: 'tabular-nums', letterSpacing: '.04em', outlineOffset: '-2px' }} />
      </div>
      <p className="field-help" style={{ margin: '6px 0 0', fontSize: 'var(--text-xs)', color: 'var(--ink-mid)' }}>SMS orqali 6 xonali kod yuboramiz</p>
    </div>
    <button type="button" id="btn-send-code" className="btn btn-primary hv-2" style={{ fontFamily: 'var(--font-body)', fontWeight: '600', fontSize: 'var(--text-md)', padding: '13px 20px', borderRadius: 'var(--radius-md)', border: '1px solid rgba(255,255,255,.6)', background: 'linear-gradient(180deg,var(--mint-500),var(--mint-600))', color: '#fff', cursor: 'pointer', width: '100%', boxShadow: 'var(--glow-mint),inset 0 1px 0 rgba(255,255,255,.35)', transition: 'filter .12s' }}>Kod yuborish</button>
  </section>

  <hr className="step-divider" style={{ border: '0', borderTop: '1px dashed var(--line-strong)', margin: '36px 0' }} />

  
  <section className="reg-step" id="step-otp" data-screen-label="2 · Kod" style={{ background: 'var(--glass)', backdropFilter: 'blur(20px)', WebkitBackdropFilter: 'blur(20px)', border: '1px solid var(--glass-border)', borderRadius: 'var(--radius-lg)', boxShadow: 'var(--shadow-glass),var(--glass-inner)', padding: '28px 24px' }}>
    <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'var(--text-lg)', fontWeight: '700', margin: '0 0 4px' }}>SMS kodini kiriting</h2>
    <p style={{ margin: '0 0 20px', fontSize: 'var(--text-sm)', color: 'var(--ink-mid)' }}>+998 90 123 45 67 raqamiga yubordik</p>
    <div className="otp-boxes" data-control="otp" style={{ display: 'flex', gap: '8px', justifyContent: 'center', marginBottom: '14px' }}>
      <input type="text" inputMode="numeric" maxLength={1} defaultValue="0" aria-label="1-raqam" className="otp-box" style={{ width: '44px', height: '52px', textAlign: 'center', fontFamily: 'var(--font-display)', fontSize: 'var(--text-lg)', fontWeight: '700', color: 'var(--ink)', border: '1px solid var(--line-strong)', borderRadius: 'var(--radius-md)', background: 'rgba(255,255,255,.5)', boxShadow: 'inset 0 1px 2px rgba(27,60,50,.05)', boxSizing: 'border-box', padding: '0' }} />
      <input type="text" inputMode="numeric" maxLength={1} defaultValue="0" aria-label="2-raqam" className="otp-box" style={{ width: '44px', height: '52px', textAlign: 'center', fontFamily: 'var(--font-display)', fontSize: 'var(--text-lg)', fontWeight: '700', color: 'var(--ink)', border: '1px solid var(--line-strong)', borderRadius: 'var(--radius-md)', background: 'rgba(255,255,255,.5)', boxShadow: 'inset 0 1px 2px rgba(27,60,50,.05)', boxSizing: 'border-box', padding: '0' }} />
      <input type="text" inputMode="numeric" maxLength={1} defaultValue="0" aria-label="3-raqam" className="otp-box" style={{ width: '44px', height: '52px', textAlign: 'center', fontFamily: 'var(--font-display)', fontSize: 'var(--text-lg)', fontWeight: '700', color: 'var(--ink)', border: '1px solid var(--line-strong)', borderRadius: 'var(--radius-md)', background: 'rgba(255,255,255,.5)', boxShadow: 'inset 0 1px 2px rgba(27,60,50,.05)', boxSizing: 'border-box', padding: '0' }} />
      <input type="text" inputMode="numeric" maxLength={1} defaultValue="0" aria-label="4-raqam" className="otp-box" style={{ width: '44px', height: '52px', textAlign: 'center', fontFamily: 'var(--font-display)', fontSize: 'var(--text-lg)', fontWeight: '700', color: 'var(--ink)', border: '1px solid var(--line-strong)', borderRadius: 'var(--radius-md)', background: 'rgba(255,255,255,.5)', boxShadow: 'inset 0 1px 2px rgba(27,60,50,.05)', boxSizing: 'border-box', padding: '0' }} />
      <input type="text" inputMode="numeric" maxLength={1} aria-label="5-raqam" className="otp-box" style={{ width: '44px', height: '52px', textAlign: 'center', fontFamily: 'var(--font-display)', fontSize: 'var(--text-lg)', fontWeight: '700', color: 'var(--ink)', border: '1px solid var(--line-strong)', borderRadius: 'var(--radius-md)', background: 'rgba(255,255,255,.5)', boxShadow: 'inset 0 1px 2px rgba(27,60,50,.05)', boxSizing: 'border-box', padding: '0' }} />
      <input type="text" inputMode="numeric" maxLength={1} aria-label="6-raqam" className="otp-box" style={{ width: '44px', height: '52px', textAlign: 'center', fontFamily: 'var(--font-display)', fontSize: 'var(--text-lg)', fontWeight: '700', color: 'var(--ink)', border: '1px solid var(--line-strong)', borderRadius: 'var(--radius-md)', background: 'rgba(255,255,255,.5)', boxShadow: 'inset 0 1px 2px rgba(27,60,50,.05)', boxSizing: 'border-box', padding: '0' }} />
    </div>
    <p className="resend-timer" data-element="resend-timer" style={{ margin: '0 0 14px', textAlign: 'center', fontSize: 'var(--text-sm)', color: 'var(--ink-mid)' }}>Qayta yuborish: <span style={{ fontWeight: '600', color: 'var(--ink)', fontVariantNumeric: 'tabular-nums' }}>0:{/* BIND: resendSeconds */}</span></p>
    <div className="demo-notice" style={{ border: '1px dashed var(--line-strong)', borderRadius: 'var(--radius-md)', background: 'var(--glass-soft)', padding: '10px 14px', textAlign: 'center', fontFamily: 'var(--font-mono)', fontSize: 'var(--text-xs)', color: 'var(--ink-mid)', marginBottom: '24px' }}>Demo rejimi — kod: 000000</div>

    <div className="otp-error-demo" style={{ borderTop: '1px solid var(--line)', paddingTop: '20px' }}>
      <p style={{ margin: '0 0 10px', fontSize: 'var(--text-xs)', fontWeight: '600', letterSpacing: '.05em', color: 'var(--ink-soft)' }}>XATO HOLATI</p>
      <div className="otp-boxes has-error" style={{ display: 'flex', gap: '8px', justifyContent: 'center', marginBottom: '10px' }}>
        <input type="text" inputMode="numeric" maxLength={1} defaultValue="1" aria-label="1-raqam (xato)" aria-invalid="true" className="otp-box" style={{ width: '44px', height: '52px', textAlign: 'center', fontFamily: 'var(--font-display)', fontSize: 'var(--text-lg)', fontWeight: '700', color: 'var(--ink)', border: '1px solid var(--danger)', borderRadius: 'var(--radius-md)', background: 'rgba(255,255,255,.5)', boxShadow: '0 0 0 3px var(--danger-glass)', boxSizing: 'border-box', padding: '0' }} />
        <input type="text" inputMode="numeric" maxLength={1} defaultValue="2" aria-label="2-raqam (xato)" aria-invalid="true" className="otp-box" style={{ width: '44px', height: '52px', textAlign: 'center', fontFamily: 'var(--font-display)', fontSize: 'var(--text-lg)', fontWeight: '700', color: 'var(--ink)', border: '1px solid var(--danger)', borderRadius: 'var(--radius-md)', background: 'rgba(255,255,255,.5)', boxShadow: '0 0 0 3px var(--danger-glass)', boxSizing: 'border-box', padding: '0' }} />
        <input type="text" inputMode="numeric" maxLength={1} defaultValue="3" aria-label="3-raqam (xato)" aria-invalid="true" className="otp-box" style={{ width: '44px', height: '52px', textAlign: 'center', fontFamily: 'var(--font-display)', fontSize: 'var(--text-lg)', fontWeight: '700', color: 'var(--ink)', border: '1px solid var(--danger)', borderRadius: 'var(--radius-md)', background: 'rgba(255,255,255,.5)', boxShadow: '0 0 0 3px var(--danger-glass)', boxSizing: 'border-box', padding: '0' }} />
        <input type="text" inputMode="numeric" maxLength={1} defaultValue="4" aria-label="4-raqam (xato)" aria-invalid="true" className="otp-box" style={{ width: '44px', height: '52px', textAlign: 'center', fontFamily: 'var(--font-display)', fontSize: 'var(--text-lg)', fontWeight: '700', color: 'var(--ink)', border: '1px solid var(--danger)', borderRadius: 'var(--radius-md)', background: 'rgba(255,255,255,.5)', boxShadow: '0 0 0 3px var(--danger-glass)', boxSizing: 'border-box', padding: '0' }} />
        <input type="text" inputMode="numeric" maxLength={1} defaultValue="5" aria-label="5-raqam (xato)" aria-invalid="true" className="otp-box" style={{ width: '44px', height: '52px', textAlign: 'center', fontFamily: 'var(--font-display)', fontSize: 'var(--text-lg)', fontWeight: '700', color: 'var(--ink)', border: '1px solid var(--danger)', borderRadius: 'var(--radius-md)', background: 'rgba(255,255,255,.5)', boxShadow: '0 0 0 3px var(--danger-glass)', boxSizing: 'border-box', padding: '0' }} />
        <input type="text" inputMode="numeric" maxLength={1} defaultValue="6" aria-label="6-raqam (xato)" aria-invalid="true" className="otp-box" style={{ width: '44px', height: '52px', textAlign: 'center', fontFamily: 'var(--font-display)', fontSize: 'var(--text-lg)', fontWeight: '700', color: 'var(--ink)', border: '1px solid var(--danger)', borderRadius: 'var(--radius-md)', background: 'rgba(255,255,255,.5)', boxShadow: '0 0 0 3px var(--danger-glass)', boxSizing: 'border-box', padding: '0' }} />
      </div>
      <p className="field-error" style={{ margin: '0', textAlign: 'center', fontSize: 'var(--text-sm)', color: 'var(--danger)', fontWeight: '500' }}>Kod mos kelmadi.</p>
    </div>
  </section>

  <hr className="step-divider" style={{ border: '0', borderTop: '1px dashed var(--line-strong)', margin: '36px 0' }} />

  
  <section className="reg-step" id="step-identity" data-screen-label="3 · Shaxs" style={{ background: 'var(--glass)', backdropFilter: 'blur(20px)', WebkitBackdropFilter: 'blur(20px)', border: '1px solid var(--glass-border)', borderRadius: 'var(--radius-lg)', boxShadow: 'var(--shadow-glass),var(--glass-inner)', padding: '28px 24px' }}>
    <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'var(--text-lg)', fontWeight: '700', margin: '0 0 4px' }}>Shaxsni tasdiqlash</h2>
    <p style={{ margin: '0 0 18px', fontSize: 'var(--text-sm)', color: 'var(--ink-mid)' }}>Bir daqiqa — va yuqori haqli so'rovnomalar ochiladi.</p>
    <div className="identity-card" style={{ border: '1px solid var(--mint-glass-border)', background: 'var(--mint-glass)', borderRadius: 'var(--radius-md)', padding: '16px', display: 'flex', gap: '14px', alignItems: 'flex-start', marginBottom: '20px' }}>
      <span className="identity-icon" style={{ flex: 'none', width: '38px', height: '38px', borderRadius: '12px', background: 'linear-gradient(180deg,var(--mint-500),var(--mint-600))', border: '1px solid rgba(255,255,255,.55)', boxShadow: 'var(--glow-mint),inset 0 1px 0 rgba(255,255,255,.35)', display: 'inline-flex', alignItems: 'center', justifyContent: 'center' }}>
        <svg width={20} height={20} viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M12 3l7 3v5c0 4.5-3 8-7 10-4-2-7-5.5-7-10V6z"></path><path d="M9 12l2 2 4-4"></path></svg>
      </span>
      <div>
        <p style={{ margin: '0 0 4px', fontWeight: '600', fontSize: 'var(--text-sm)' }}>Nega tasdiqlash kerak?</p>
        <p style={{ margin: '0', fontSize: 'var(--text-sm)', color: 'var(--ink-mid)' }}>Tasdiqlangan profillar bizneslar uchun ishonchli — ularga ko'proq va qimmatroq so'rovnomalar keladi. Ma'lumotlaringiz faqat mosligini aniqlash uchun ishlatiladi.</p>
      </div>
    </div>
    <button type="button" id="btn-oneid" className="btn btn-oneid hv-17" style={{ fontFamily: 'var(--font-body)', fontWeight: '600', fontSize: 'var(--text-md)', padding: '13px 20px', borderRadius: 'var(--radius-md)', border: '1px solid rgba(255,255,255,.35)', background: 'linear-gradient(180deg,#2A363C,var(--ink))', color: '#fff', cursor: 'pointer', width: '100%', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', gap: '10px', boxShadow: '0 6px 16px rgba(27,34,38,.3),inset 0 1px 0 rgba(255,255,255,.18)', transition: 'filter .12s' }}>
      <svg width={18} height={18} viewBox="0 0 24 24" fill="none" stroke="#7FE8C3" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><rect x="4" y="3" width={16} height={18} rx="3"></rect><circle cx="12" cy="10" r="3"></circle><path d="M7.5 18c1-2 2.7-2.6 4.5-2.6s3.5.6 4.5 2.6"></path></svg>
      OneID orqali tasdiqlash
    </button>
    <p style={{ margin: '14px 0 0', textAlign: 'center' }}><a href="#step-basics" id="link-skip-identity" style={{ fontSize: 'var(--text-sm)', color: 'var(--ink-mid)', textDecoration: 'underline' }} className="hv-18">Hozircha o'tkazib yuborish</a></p>
  </section>

  <hr className="step-divider" style={{ border: '0', borderTop: '1px dashed var(--line-strong)', margin: '36px 0' }} />

  
  <section className="reg-step" id="step-basics" data-screen-label="4 · Profil" style={{ background: 'var(--glass)', backdropFilter: 'blur(20px)', WebkitBackdropFilter: 'blur(20px)', border: '1px solid var(--glass-border)', borderRadius: 'var(--radius-lg)', boxShadow: 'var(--shadow-glass),var(--glass-inner)', padding: '28px 24px' }}>
    <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'var(--text-lg)', fontWeight: '700', margin: '0 0 4px' }}>Asosiy ma'lumotlar</h2>
    <p style={{ margin: '0 0 20px', fontSize: 'var(--text-sm)', color: 'var(--ink-mid)' }}>Bir marta to'ldirasiz — so'rovnomalar shu profilga mos tanlanadi.</p>
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' }}>
        <div className="form-field">
          <label htmlFor="reg-firstname" style={{ display: 'block', fontWeight: '600', fontSize: 'var(--text-sm)', marginBottom: '6px' }}>Ism</label>
          <input id="reg-firstname" type="text" placeholder="Aziza" autoComplete="given-name" style={{ width: '100%', boxSizing: 'border-box', fontFamily: 'var(--font-body)', fontSize: 'var(--text-base)', color: 'var(--ink)', padding: '10px 12px', border: '1px solid var(--line-strong)', borderRadius: 'var(--radius-md)', background: 'rgba(255,255,255,.5)', boxShadow: 'inset 0 1px 2px rgba(27,60,50,.05)' }} />
        </div>
        <div className="form-field">
          <label htmlFor="reg-lastname" style={{ display: 'block', fontWeight: '600', fontSize: 'var(--text-sm)', marginBottom: '6px' }}>Familiya</label>
          <input id="reg-lastname" type="text" placeholder="Rahimova" autoComplete="family-name" style={{ width: '100%', boxSizing: 'border-box', fontFamily: 'var(--font-body)', fontSize: 'var(--text-base)', color: 'var(--ink)', padding: '10px 12px', border: '1px solid var(--line-strong)', borderRadius: 'var(--radius-md)', background: 'rgba(255,255,255,.5)', boxShadow: 'inset 0 1px 2px rgba(27,60,50,.05)' }} />
        </div>
      </div>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' }}>
        <div className="form-field">
          <label htmlFor="reg-birthyear" style={{ display: 'block', fontWeight: '600', fontSize: 'var(--text-sm)', marginBottom: '6px' }}>Tug'ilgan yil</label>
          <select id="reg-birthyear" style={{ width: '100%', boxSizing: 'border-box', fontFamily: 'var(--font-body)', fontSize: 'var(--text-base)', color: 'var(--ink)', padding: '10px 12px', border: '1px solid var(--line-strong)', borderRadius: 'var(--radius-md)', background: 'rgba(255,255,255,.5)' }}>
            <option>2004</option><option>2003</option><option>2002</option><option>2001</option><option>2000</option><option>1999</option><option>1998</option><option>1995</option><option>1990</option><option>1985</option><option>1980</option>
          </select>
        </div>
        <div className="form-field">
          <label htmlFor="reg-gender" style={{ display: 'block', fontWeight: '600', fontSize: 'var(--text-sm)', marginBottom: '6px' }}>Jins</label>
          <select id="reg-gender" style={{ width: '100%', boxSizing: 'border-box', fontFamily: 'var(--font-body)', fontSize: 'var(--text-base)', color: 'var(--ink)', padding: '10px 12px', border: '1px solid var(--line-strong)', borderRadius: 'var(--radius-md)', background: 'rgba(255,255,255,.5)' }}>
            <option>Ayol</option><option>Erkak</option><option>Aytmayman</option>
          </select>
        </div>
      </div>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' }}>
        <div className="form-field">
          <label htmlFor="reg-region" style={{ display: 'block', fontWeight: '600', fontSize: 'var(--text-sm)', marginBottom: '6px' }}>Viloyat</label>
          <select id="reg-region" style={{ width: '100%', boxSizing: 'border-box', fontFamily: 'var(--font-body)', fontSize: 'var(--text-base)', color: 'var(--ink)', padding: '10px 12px', border: '1px solid var(--line-strong)', borderRadius: 'var(--radius-md)', background: 'rgba(255,255,255,.5)' }}>
            <option>Toshkent</option><option>Samarqand</option><option>Farg'ona</option><option>Namangan</option><option>Buxoro</option><option>Andijon</option><option>Xorazm</option><option>Qashqadaryo</option>
          </select>
        </div>
        <div className="form-field">
          <label htmlFor="reg-city" style={{ display: 'block', fontWeight: '600', fontSize: 'var(--text-sm)', marginBottom: '6px' }}>Shahar / tuman</label>
          <input id="reg-city" type="text" placeholder="Chilonzor" style={{ width: '100%', boxSizing: 'border-box', fontFamily: 'var(--font-body)', fontSize: 'var(--text-base)', color: 'var(--ink)', padding: '10px 12px', border: '1px solid var(--line-strong)', borderRadius: 'var(--radius-md)', background: 'rgba(255,255,255,.5)', boxShadow: 'inset 0 1px 2px rgba(27,60,50,.05)' }} />
        </div>
      </div>
      <div className="form-field">
        <label htmlFor="reg-education" style={{ display: 'block', fontWeight: '600', fontSize: 'var(--text-sm)', marginBottom: '6px' }}>Ma'lumot</label>
        <select id="reg-education" style={{ width: '100%', boxSizing: 'border-box', fontFamily: 'var(--font-body)', fontSize: 'var(--text-base)', color: 'var(--ink)', padding: '10px 12px', border: '1px solid var(--line-strong)', borderRadius: 'var(--radius-md)', background: 'rgba(255,255,255,.5)' }}>
          <option>O'rta</option><option>O'rta maxsus</option><option>Oliy (bakalavr)</option><option>Oliy (magistr)</option><option>Talaba</option>
        </select>
      </div>
      <div className="form-field">
        <label htmlFor="reg-employment" style={{ display: 'block', fontWeight: '600', fontSize: 'var(--text-sm)', marginBottom: '6px' }}>Bandlik</label>
        <select id="reg-employment" style={{ width: '100%', boxSizing: 'border-box', fontFamily: 'var(--font-body)', fontSize: 'var(--text-base)', color: 'var(--ink)', padding: '10px 12px', border: '1px solid var(--line-strong)', borderRadius: 'var(--radius-md)', background: 'rgba(255,255,255,.5)' }}>
          <option>Yollanma xodim</option><option>Tadbirkor</option><option>Frilanser</option><option>Talaba</option><option>Uy bekasi</option><option>Ishlamayman</option>
        </select>
      </div>
      <div className="form-field">
        <label htmlFor="reg-income" style={{ display: 'block', fontWeight: '600', fontSize: 'var(--text-sm)', marginBottom: '6px' }}>Oylik daromad darajasi</label>
        <select id="reg-income" style={{ width: '100%', boxSizing: 'border-box', fontFamily: 'var(--font-body)', fontSize: 'var(--text-base)', color: 'var(--ink)', padding: '10px 12px', border: '1px solid var(--line-strong)', borderRadius: 'var(--radius-md)', background: 'rgba(255,255,255,.5)' }}>
          <option>3 000 000 so'mgacha</option><option>3 000 000 – 6 000 000 so'm</option><option>6 000 000 – 10 000 000 so'm</option><option>10 000 000 so'mdan yuqori</option><option>Aytmayman</option>
        </select>
        <p className="field-help" style={{ margin: '6px 0 0', fontSize: 'var(--text-xs)', color: 'var(--ink-mid)' }}>Faqat so'rovnomalarni moslashtirish uchun — hech qayerda ko'rsatilmaydi</p>
      </div>
    </div>
  </section>

  <hr className="step-divider" style={{ border: '0', borderTop: '1px dashed var(--line-strong)', margin: '36px 0' }} />

  
  <section className="reg-step" id="step-quiz" data-screen-label="5 · Viktorina" style={{ background: 'var(--glass)', backdropFilter: 'blur(20px)', WebkitBackdropFilter: 'blur(20px)', border: '1px solid var(--glass-border)', borderRadius: 'var(--radius-lg)', boxShadow: 'var(--shadow-glass),var(--glass-inner)', padding: '28px 24px' }}>
    <div className="quiz-progress" style={{ marginBottom: '22px' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: '8px' }}>
        <span style={{ fontSize: 'var(--text-sm)', fontWeight: '600' }}>Savol 3 / 10</span>
        <span style={{ fontSize: 'var(--text-xs)', color: 'var(--ink-soft)' }}>Birinchi viktorina</span>
      </div>
      <div className="progress-bar" role="progressbar" aria-valuenow={3} aria-valuemin={0} aria-valuemax={10} style={{ height: '9px', borderRadius: '5px', background: 'rgba(255,255,255,.7)', boxShadow: 'inset 0 1px 2px rgba(27,60,50,.12)', overflow: 'hidden' }}>
        <div className="progress-fill" style={{ width: '30%', height: '100%', borderRadius: '5px', background: 'linear-gradient(90deg,var(--mint-500),var(--mint-400))', boxShadow: '0 0 10px rgba(47,177,133,.55)' }}></div>
      </div>
    </div>
    <h2 className="quiz-question" style={{ fontFamily: 'var(--font-display)', fontSize: 'var(--text-xl)', fontWeight: '700', letterSpacing: '-.01em', lineHeight: '1.25', margin: '0 0 20px', textWrap: 'balance' }}>Oxirgi 3 oyda qaysi bank ilovasidan foydalandingiz?</h2>
    <fieldset className="quiz-options" style={{ border: '0', padding: '0', margin: '0 0 24px' }}>
      <legend style={{ position: 'absolute', width: '1px', height: '1px', overflow: 'hidden', clip: 'rect(0 0 0 0)' }}>Javob variantlari</legend>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
        <label className="quiz-option hv-15" data-option="q3-a" style={{ display: 'flex', alignItems: 'center', gap: '12px', padding: '14px 16px', borderRadius: 'var(--radius-md)', border: '1px solid var(--line)', background: 'rgba(255,255,255,.35)', cursor: 'pointer', fontSize: 'var(--text-base)', minHeight: '44px', boxSizing: 'border-box' }}><input type="radio" name="quiz-q3" id="quiz-q3-a" style={{ width: '18px', height: '18px', accentColor: 'var(--mint-600)', margin: '0', flex: 'none' }} />Click</label>
        <label className="quiz-option is-selected" data-option="q3-b" style={{ display: 'flex', alignItems: 'center', gap: '12px', padding: '14px 16px', borderRadius: 'var(--radius-md)', border: '1px solid var(--mint-glass-border)', background: 'var(--mint-glass)', cursor: 'pointer', fontSize: 'var(--text-base)', fontWeight: '600', minHeight: '44px', boxSizing: 'border-box' }}><input type="radio" name="quiz-q3" id="quiz-q3-b" checked style={{ width: '18px', height: '18px', accentColor: 'var(--mint-600)', margin: '0', flex: 'none' }} />Payme</label>
        <label className="quiz-option hv-15" data-option="q3-c" style={{ display: 'flex', alignItems: 'center', gap: '12px', padding: '14px 16px', borderRadius: 'var(--radius-md)', border: '1px solid var(--line)', background: 'rgba(255,255,255,.35)', cursor: 'pointer', fontSize: 'var(--text-base)', minHeight: '44px', boxSizing: 'border-box' }}><input type="radio" name="quiz-q3" id="quiz-q3-c" style={{ width: '18px', height: '18px', accentColor: 'var(--mint-600)', margin: '0', flex: 'none' }} />Uzum Bank</label>
        <label className="quiz-option hv-15" data-option="q3-d" style={{ display: 'flex', alignItems: 'center', gap: '12px', padding: '14px 16px', borderRadius: 'var(--radius-md)', border: '1px solid var(--line)', background: 'rgba(255,255,255,.35)', cursor: 'pointer', fontSize: 'var(--text-base)', minHeight: '44px', boxSizing: 'border-box' }}><input type="radio" name="quiz-q3" id="quiz-q3-d" style={{ width: '18px', height: '18px', accentColor: 'var(--mint-600)', margin: '0', flex: 'none' }} />Boshqa ilova</label>
        <label className="quiz-option hv-15" data-option="q3-e" style={{ display: 'flex', alignItems: 'center', gap: '12px', padding: '14px 16px', borderRadius: 'var(--radius-md)', border: '1px solid var(--line)', background: 'rgba(255,255,255,.35)', cursor: 'pointer', fontSize: 'var(--text-base)', minHeight: '44px', boxSizing: 'border-box' }}><input type="radio" name="quiz-q3" id="quiz-q3-e" style={{ width: '18px', height: '18px', accentColor: 'var(--mint-600)', margin: '0', flex: 'none' }} />Foydalanmadim</label>
      </div>
    </fieldset>
    <div className="quiz-actions" style={{ display: 'flex', justifyContent: 'space-between', gap: '12px' }}>
      <button type="button" id="btn-quiz-back" className="btn btn-ghost hv-10" style={{ fontFamily: 'var(--font-body)', fontWeight: '600', fontSize: 'var(--text-base)', padding: '12px 20px', borderRadius: 'var(--radius-md)', border: '1px solid transparent', background: 'transparent', color: 'var(--ink-mid)', cursor: 'pointer', minHeight: '44px', transition: 'background .12s' }}>Orqaga</button>
      <button type="button" id="btn-quiz-next" className="btn btn-primary hv-2" style={{ fontFamily: 'var(--font-body)', fontWeight: '600', fontSize: 'var(--text-base)', padding: '12px 28px', borderRadius: 'var(--radius-md)', border: '1px solid rgba(255,255,255,.6)', background: 'linear-gradient(180deg,var(--mint-500),var(--mint-600))', color: '#fff', cursor: 'pointer', minHeight: '44px', boxShadow: 'var(--glow-mint),inset 0 1px 0 rgba(255,255,255,.35)', transition: 'filter .12s' }}>Keyingi</button>
    </div>
  </section>
</main>
    </>
  );
}
