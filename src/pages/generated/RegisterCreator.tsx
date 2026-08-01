// AUTO-GENERATED from the Phase 1 design export by tools/convert.py
// Static render of the design. Logic is added in the build phase.
// {/* BIND: x */} markers show where the design expected dynamic data.
// Re-runnable: regenerate after a design change, then re-apply logic.

export default function RegisterCreator() {
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
    <li className="step is-current" style={{ flex: '1', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '6px', position: 'relative' }}><span style={{ position: 'absolute', top: '13px', left: '50%', width: '100%', height: '2px', background: 'var(--line)', zIndex: '0' }}></span><span className="step-dot" style={{ position: 'relative', zIndex: '1', width: '28px', height: '28px', borderRadius: '50%', background: 'rgba(255,255,255,.85)', backdropFilter: 'blur(6px)', WebkitBackdropFilter: 'blur(6px)', border: '2px solid var(--mint-600)', color: 'var(--mint-700)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '13px', fontWeight: '700', boxSizing: 'border-box', boxShadow: 'var(--shadow-sm)' }}>1</span><span style={{ fontSize: 'var(--text-xs)', color: 'var(--ink)', fontWeight: '600', textAlign: 'center' }}>Turi</span></li>
    <li className="step" style={{ flex: '1', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '6px', position: 'relative' }}><span style={{ position: 'absolute', top: '13px', left: '50%', width: '100%', height: '2px', background: 'var(--line)', zIndex: '0' }}></span><span className="step-dot" style={{ position: 'relative', zIndex: '1', width: '28px', height: '28px', borderRadius: '50%', background: 'rgba(255,255,255,.45)', border: '1px solid var(--line)', color: 'var(--ink-mid)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '13px', fontWeight: '600' }}>2</span><span style={{ fontSize: 'var(--text-xs)', color: 'var(--ink-soft)', textAlign: 'center' }}>Ma'lumotlar</span></li>
    <li className="step" style={{ flex: '1', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '6px', position: 'relative' }}><span className="step-dot" style={{ position: 'relative', zIndex: '1', width: '28px', height: '28px', borderRadius: '50%', background: 'rgba(255,255,255,.45)', border: '1px solid var(--line)', color: 'var(--ink-mid)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '13px', fontWeight: '600' }}>3</span><span style={{ fontSize: 'var(--text-xs)', color: 'var(--ink-soft)', textAlign: 'center' }}>Kod</span></li>
  </ol>

  
  <section className="reg-step" id="step-type" data-screen-label="1 · Turi" style={{ background: 'var(--glass)', backdropFilter: 'blur(20px)', WebkitBackdropFilter: 'blur(20px)', border: '1px solid var(--glass-border)', borderRadius: 'var(--radius-lg)', boxShadow: 'var(--shadow-glass),var(--glass-inner)', padding: '28px 24px' }}>
    <h1 style={{ fontFamily: 'var(--font-display)', fontSize: 'var(--text-lg)', fontWeight: '700', margin: '0 0 4px' }}>Kim sifatida ishlaysiz?</h1>
    <p style={{ margin: '0 0 20px', fontSize: 'var(--text-sm)', color: 'var(--ink-mid)' }}>Bu boshlang'ich sozlamalarni moslashtiradi — keyin o'zgartirish mumkin.</p>
    <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
      <label className="type-card is-selected" data-type="startup" style={{ display: 'flex', gap: '14px', alignItems: 'flex-start', padding: '16px', borderRadius: 'var(--radius-md)', border: '1px solid var(--mint-glass-border)', background: 'var(--mint-glass)', cursor: 'pointer', boxShadow: 'var(--shadow-sm)' }}>
        <input type="radio" name="creator-type" id="type-startup" checked style={{ width: '18px', height: '18px', accentColor: 'var(--mint-600)', margin: '2px 0 0', flex: 'none' }} />
        <span className="type-icon" style={{ flex: 'none', width: '40px', height: '40px', borderRadius: '12px', background: 'linear-gradient(180deg,var(--mint-500),var(--mint-600))', border: '1px solid rgba(255,255,255,.55)', boxShadow: 'var(--glow-mint),inset 0 1px 0 rgba(255,255,255,.35)', display: 'inline-flex', alignItems: 'center', justifyContent: 'center' }}>
          <svg width={20} height={20} viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M12 3c3.5 2 5 5.5 5 9l-2.5 2.5h-5L7 12c0-3.5 1.5-7 5-9z"></path><circle cx="12" cy="10" r="1.6"></circle><path d="M9.5 14.5L7 20l3-1.5L12 21l2-2.5 3 1.5-2.5-5.5"></path></svg>
        </span>
        <span style={{ display: 'block', minWidth: '0' }}>
          <span style={{ display: 'block', fontFamily: 'var(--font-display)', fontSize: 'var(--text-md)', fontWeight: '700', marginBottom: '2px' }}>Startap</span>
          <span style={{ display: 'block', fontSize: 'var(--text-sm)', color: 'var(--ink-mid)' }}>G'oya yoki yangi mahsulotni tekshirish</span>
        </span>
      </label>
      <label className="type-card" data-type="company" style={{ display: 'flex', gap: '14px', alignItems: 'flex-start', padding: '16px', borderRadius: 'var(--radius-md)', border: '1px solid var(--line)', background: 'rgba(255,255,255,.35)', cursor: 'pointer' }} style-hover="background:var(--glass)">
        <input type="radio" name="creator-type" id="type-company" style={{ width: '18px', height: '18px', accentColor: 'var(--mint-600)', margin: '2px 0 0', flex: 'none' }} />
        <span className="type-icon" style={{ flex: 'none', width: '40px', height: '40px', borderRadius: '12px', background: 'rgba(61,111,180,.14)', border: '1px solid var(--blue-glass-border)', display: 'inline-flex', alignItems: 'center', justifyContent: 'center' }}>
          <svg width={20} height={20} viewBox="0 0 24 24" fill="none" stroke="#3D6FB4" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M4 21V5a1 1 0 011-1h8a1 1 0 011 1v16M14 9h5a1 1 0 011 1v11M4 21h17"></path><path d="M7.5 8h2M7.5 12h2M7.5 16h2M17 13h1M17 17h1"></path></svg>
        </span>
        <span style={{ display: 'block', minWidth: '0' }}>
          <span style={{ display: 'block', fontFamily: 'var(--font-display)', fontSize: 'var(--text-md)', fontWeight: '700', marginBottom: '2px' }}>Kompaniya</span>
          <span style={{ display: 'block', fontSize: 'var(--text-sm)', color: 'var(--ink-mid)' }}>Mijozlarni o'rganayotgan biznes</span>
        </span>
      </label>
      <label className="type-card" data-type="researcher" style={{ display: 'flex', gap: '14px', alignItems: 'flex-start', padding: '16px', borderRadius: 'var(--radius-md)', border: '1px solid var(--line)', background: 'rgba(255,255,255,.35)', cursor: 'pointer' }} style-hover="background:var(--glass)">
        <input type="radio" name="creator-type" id="type-researcher" style={{ width: '18px', height: '18px', accentColor: 'var(--mint-600)', margin: '2px 0 0', flex: 'none' }} />
        <span className="type-icon" style={{ flex: 'none', width: '40px', height: '40px', borderRadius: '12px', background: 'var(--amber-glass)', border: '1px solid var(--amber-glass-border)', display: 'inline-flex', alignItems: 'center', justifyContent: 'center' }}>
          <svg width={20} height={20} viewBox="0 0 24 24" fill="none" stroke="#A8731C" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><circle cx="11" cy="11" r="6"></circle><path d="M15.5 15.5L20 20"></path><path d="M8.5 11h5M11 8.5v5"></path></svg>
        </span>
        <span style={{ display: 'block', minWidth: '0' }}>
          <span style={{ display: 'block', fontFamily: 'var(--font-display)', fontSize: 'var(--text-md)', fontWeight: '700', marginBottom: '2px' }}>Tadqiqotchi</span>
          <span style={{ display: 'block', fontSize: 'var(--text-sm)', color: 'var(--ink-mid)' }}>Akademik yoki mustaqil tadqiqot</span>
        </span>
      </label>
    </div>
  </section>

  <hr className="step-divider" style={{ border: '0', borderTop: '1px dashed var(--line-strong)', margin: '36px 0' }} />

  
  <section className="reg-step" id="step-details" data-screen-label="2 · Ma'lumotlar" style={{ background: 'var(--glass)', backdropFilter: 'blur(20px)', WebkitBackdropFilter: 'blur(20px)', border: '1px solid var(--glass-border)', borderRadius: 'var(--radius-lg)', boxShadow: 'var(--shadow-glass),var(--glass-inner)', padding: '28px 24px' }}>
    <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'var(--text-lg)', fontWeight: '700', margin: '0 0 4px' }}>Tashkilot ma'lumotlari</h2>
    <p style={{ margin: '0 0 20px', fontSize: 'var(--text-sm)', color: 'var(--ink-mid)' }}>Hisob-fakturalar va aloqa uchun ishlatiladi.</p>
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
      <div className="form-field">
        <label htmlFor="org-name" style={{ display: 'block', fontWeight: '600', fontSize: 'var(--text-sm)', marginBottom: '6px' }}>Tashkilot nomi</label>
        <input id="org-name" type="text" placeholder="Navro'z Media MChJ" autoComplete="organization" style={{ width: '100%', boxSizing: 'border-box', fontFamily: 'var(--font-body)', fontSize: 'var(--text-base)', color: 'var(--ink)', padding: '10px 12px', border: '1px solid var(--line-strong)', borderRadius: 'var(--radius-md)', background: 'rgba(255,255,255,.5)', boxShadow: 'inset 0 1px 2px rgba(27,60,50,.05)' }} />
      </div>
      <div className="form-field">
        <label htmlFor="contact-name" style={{ display: 'block', fontWeight: '600', fontSize: 'var(--text-sm)', marginBottom: '6px' }}>Aloqa uchun ism</label>
        <input id="contact-name" type="text" placeholder="Jasur To'rayev" autoComplete="name" style={{ width: '100%', boxSizing: 'border-box', fontFamily: 'var(--font-body)', fontSize: 'var(--text-base)', color: 'var(--ink)', padding: '10px 12px', border: '1px solid var(--line-strong)', borderRadius: 'var(--radius-md)', background: 'rgba(255,255,255,.5)', boxShadow: 'inset 0 1px 2px rgba(27,60,50,.05)' }} />
      </div>
      <div className="form-field">
        <label htmlFor="contact-email" style={{ display: 'block', fontWeight: '600', fontSize: 'var(--text-sm)', marginBottom: '6px' }}>Email</label>
        <input id="contact-email" type="email" placeholder="jasur@navroz.uz" autoComplete="email" style={{ width: '100%', boxSizing: 'border-box', fontFamily: 'var(--font-body)', fontSize: 'var(--text-base)', color: 'var(--ink)', padding: '10px 12px', border: '1px solid var(--line-strong)', borderRadius: 'var(--radius-md)', background: 'rgba(255,255,255,.5)', boxShadow: 'inset 0 1px 2px rgba(27,60,50,.05)' }} />
      </div>
      <div className="form-field">
        <label htmlFor="contact-phone" style={{ display: 'block', fontWeight: '600', fontSize: 'var(--text-sm)', marginBottom: '6px' }}>Telefon raqam</label>
        <div className="phone-input" style={{ display: 'flex', alignItems: 'stretch', border: '1px solid var(--line-strong)', borderRadius: 'var(--radius-md)', background: 'rgba(255,255,255,.5)', boxShadow: 'inset 0 1px 2px rgba(27,60,50,.05)', overflow: 'hidden' }}>
          <span className="phone-prefix" style={{ display: 'flex', alignItems: 'center', padding: '0 12px', background: 'rgba(255,255,255,.55)', borderRight: '1px solid var(--line)', fontWeight: '600', color: 'var(--ink-mid)', fontVariantNumeric: 'tabular-nums' }}>+998</span>
          <input id="contact-phone" type="tel" inputMode="numeric" placeholder="71 200 50 50" autoComplete="tel-national" style={{ flex: '1', minWidth: '0', fontFamily: 'var(--font-body)', fontSize: 'var(--text-md)', color: 'var(--ink)', padding: '12px', border: '0', background: 'transparent', fontVariantNumeric: 'tabular-nums', letterSpacing: '.04em', outlineOffset: '-2px' }} />
        </div>
      </div>
      <div className="form-field">
        <label htmlFor="org-industry" style={{ display: 'block', fontWeight: '600', fontSize: 'var(--text-sm)', marginBottom: '6px' }}>Soha</label>
        <select id="org-industry" style={{ width: '100%', boxSizing: 'border-box', fontFamily: 'var(--font-body)', fontSize: 'var(--text-base)', color: 'var(--ink)', padding: '10px 12px', border: '1px solid var(--line-strong)', borderRadius: 'var(--radius-md)', background: 'rgba(255,255,255,.5)' }}>
          <option>Marketing va reklama</option><option>Bank va moliya</option><option>Savdo va e-commerce</option><option>Ta'lim</option><option>Sog'liqni saqlash</option><option>IT va texnologiya</option><option>Ishlab chiqarish</option><option>Boshqa</option>
        </select>
      </div>
    </div>
  </section>

  <hr className="step-divider" style={{ border: '0', borderTop: '1px dashed var(--line-strong)', margin: '36px 0' }} />

  
  <section className="reg-step" id="step-otp" data-screen-label="3 · Kod" style={{ background: 'var(--glass)', backdropFilter: 'blur(20px)', WebkitBackdropFilter: 'blur(20px)', border: '1px solid var(--glass-border)', borderRadius: 'var(--radius-lg)', boxShadow: 'var(--shadow-glass),var(--glass-inner)', padding: '28px 24px' }}>
    <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'var(--text-lg)', fontWeight: '700', margin: '0 0 4px' }}>SMS kodini kiriting</h2>
    <p style={{ margin: '0 0 20px', fontSize: 'var(--text-sm)', color: 'var(--ink-mid)' }}>+998 71 200 50 50 raqamiga yubordik</p>
    <div className="otp-boxes" data-control="otp" style={{ display: 'flex', gap: '8px', justifyContent: 'center', marginBottom: '14px' }}>
      <input type="text" inputMode="numeric" maxLength={1} defaultValue="0" aria-label="1-raqam" className="otp-box" style={{ width: '44px', height: '52px', textAlign: 'center', fontFamily: 'var(--font-display)', fontSize: 'var(--text-lg)', fontWeight: '700', color: 'var(--ink)', border: '1px solid var(--line-strong)', borderRadius: 'var(--radius-md)', background: 'rgba(255,255,255,.5)', boxShadow: 'inset 0 1px 2px rgba(27,60,50,.05)', boxSizing: 'border-box', padding: '0' }} />
      <input type="text" inputMode="numeric" maxLength={1} defaultValue="0" aria-label="2-raqam" className="otp-box" style={{ width: '44px', height: '52px', textAlign: 'center', fontFamily: 'var(--font-display)', fontSize: 'var(--text-lg)', fontWeight: '700', color: 'var(--ink)', border: '1px solid var(--line-strong)', borderRadius: 'var(--radius-md)', background: 'rgba(255,255,255,.5)', boxShadow: 'inset 0 1px 2px rgba(27,60,50,.05)', boxSizing: 'border-box', padding: '0' }} />
      <input type="text" inputMode="numeric" maxLength={1} defaultValue="0" aria-label="3-raqam" className="otp-box" style={{ width: '44px', height: '52px', textAlign: 'center', fontFamily: 'var(--font-display)', fontSize: 'var(--text-lg)', fontWeight: '700', color: 'var(--ink)', border: '1px solid var(--line-strong)', borderRadius: 'var(--radius-md)', background: 'rgba(255,255,255,.5)', boxShadow: 'inset 0 1px 2px rgba(27,60,50,.05)', boxSizing: 'border-box', padding: '0' }} />
      <input type="text" inputMode="numeric" maxLength={1} defaultValue="0" aria-label="4-raqam" className="otp-box" style={{ width: '44px', height: '52px', textAlign: 'center', fontFamily: 'var(--font-display)', fontSize: 'var(--text-lg)', fontWeight: '700', color: 'var(--ink)', border: '1px solid var(--line-strong)', borderRadius: 'var(--radius-md)', background: 'rgba(255,255,255,.5)', boxShadow: 'inset 0 1px 2px rgba(27,60,50,.05)', boxSizing: 'border-box', padding: '0' }} />
      <input type="text" inputMode="numeric" maxLength={1} aria-label="5-raqam" className="otp-box" style={{ width: '44px', height: '52px', textAlign: 'center', fontFamily: 'var(--font-display)', fontSize: 'var(--text-lg)', fontWeight: '700', color: 'var(--ink)', border: '1px solid var(--line-strong)', borderRadius: 'var(--radius-md)', background: 'rgba(255,255,255,.5)', boxShadow: 'inset 0 1px 2px rgba(27,60,50,.05)', boxSizing: 'border-box', padding: '0' }} />
      <input type="text" inputMode="numeric" maxLength={1} aria-label="6-raqam" className="otp-box" style={{ width: '44px', height: '52px', textAlign: 'center', fontFamily: 'var(--font-display)', fontSize: 'var(--text-lg)', fontWeight: '700', color: 'var(--ink)', border: '1px solid var(--line-strong)', borderRadius: 'var(--radius-md)', background: 'rgba(255,255,255,.5)', boxShadow: 'inset 0 1px 2px rgba(27,60,50,.05)', boxSizing: 'border-box', padding: '0' }} />
    </div>
    <p className="resend-timer" data-element="resend-timer" style={{ margin: '0 0 14px', textAlign: 'center', fontSize: 'var(--text-sm)', color: 'var(--ink-mid)' }}>Qayta yuborish: <span style={{ fontWeight: '600', color: 'var(--ink)', fontVariantNumeric: 'tabular-nums' }}>0:{/* BIND: resendSeconds */}</span></p>
    <div className="demo-notice" style={{ border: '1px dashed var(--line-strong)', borderRadius: 'var(--radius-md)', background: 'var(--glass-soft)', padding: '10px 14px', textAlign: 'center', fontFamily: 'var(--font-mono)', fontSize: 'var(--text-xs)', color: 'var(--ink-mid)', marginBottom: '20px' }}>Demo rejimi — kod: 000000</div>
    <button type="button" id="btn-finish-registration" className="btn btn-primary" style={{ fontFamily: 'var(--font-body)', fontWeight: '600', fontSize: 'var(--text-md)', padding: '13px 20px', borderRadius: 'var(--radius-md)', border: '1px solid rgba(255,255,255,.6)', background: 'linear-gradient(180deg,var(--mint-500),var(--mint-600))', color: '#fff', cursor: 'pointer', width: '100%', boxShadow: 'var(--glow-mint),inset 0 1px 0 rgba(255,255,255,.35)', transition: 'filter .12s' }} style-hover="filter:brightness(1.08)">Ro'yxatdan o'tish</button>
  </section>
</main>
    </>
  );
}
