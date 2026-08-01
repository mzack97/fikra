// AUTO-GENERATED from the Phase 1 design export by tools/convert.py
// Static render of the design. Logic is added in the build phase.
// {/* BIND: x */} markers show where the design expected dynamic data.
// Re-runnable: regenerate after a design change, then re-apply logic.

export default function Landing() {
  return (
    <>
<div className="ambient" aria-hidden="true" style={{ position: 'fixed', inset: '0', zIndex: '0', pointerEvents: 'none', overflow: 'hidden' }}>
  <div style={{ position: 'absolute', width: '520px', height: '520px', borderRadius: '50%', background: 'radial-gradient(circle,rgba(98,201,163,.4),transparent 70%)', top: '-160px', left: '-120px', filter: 'blur(20px)' }}></div>
  <div style={{ position: 'absolute', width: '460px', height: '460px', borderRadius: '50%', background: 'radial-gradient(circle,rgba(122,170,236,.35),transparent 70%)', top: '30%', right: '-140px', filter: 'blur(24px)' }}></div>
  <div style={{ position: 'absolute', width: '480px', height: '480px', borderRadius: '50%', background: 'radial-gradient(circle,rgba(98,201,163,.3),transparent 70%)', bottom: '-180px', left: '30%', filter: 'blur(24px)' }}></div>
  <div className="wave-squares" aria-hidden="true">
    <div style={{ position: 'absolute', width: '46px', height: '46px', borderRadius: '12px', border: '1px solid rgba(24,133,99,.22)', background: 'rgba(255,255,255,.16)', left: '4%', bottom: '9%', animation: 'fikra-drift 8s ease-in-out infinite' }}></div>
    <div style={{ position: 'absolute', width: '58px', height: '58px', borderRadius: '14px', border: '1px solid rgba(24,133,99,.2)', background: 'rgba(255,255,255,.13)', left: '16%', bottom: '13%', animation: 'fikra-drift 8s ease-in-out -1s infinite' }}></div>
    <div style={{ position: 'absolute', width: '42px', height: '42px', borderRadius: '11px', border: '1px solid rgba(61,111,180,.2)', background: 'rgba(255,255,255,.15)', left: '28%', bottom: '7%', animation: 'fikra-drift 8s ease-in-out -2s infinite' }}></div>
    <div style={{ position: 'absolute', width: '64px', height: '64px', borderRadius: '16px', border: '1px solid rgba(24,133,99,.24)', background: 'rgba(255,255,255,.12)', left: '41%', bottom: '12%', animation: 'fikra-drift 8s ease-in-out -3s infinite' }}></div>
    <div style={{ position: 'absolute', width: '44px', height: '44px', borderRadius: '12px', border: '1px solid rgba(61,111,180,.22)', background: 'rgba(255,255,255,.16)', left: '55%', bottom: '6%', animation: 'fikra-drift 8s ease-in-out -4s infinite' }}></div>
    <div style={{ position: 'absolute', width: '56px', height: '56px', borderRadius: '14px', border: '1px solid rgba(24,133,99,.2)', background: 'rgba(255,255,255,.13)', left: '68%', bottom: '11%', animation: 'fikra-drift 8s ease-in-out -5s infinite' }}></div>
    <div style={{ position: 'absolute', width: '48px', height: '48px', borderRadius: '12px', border: '1px solid rgba(24,133,99,.24)', background: 'rgba(255,255,255,.15)', left: '81%', bottom: '8%', animation: 'fikra-drift 8s ease-in-out -6s infinite' }}></div>
    <div style={{ position: 'absolute', width: '60px', height: '60px', borderRadius: '15px', border: '1px solid rgba(61,111,180,.2)', background: 'rgba(255,255,255,.12)', left: '93%', bottom: '13%', animation: 'fikra-drift 8s ease-in-out -7s infinite' }}></div>
    <div style={{ position: 'absolute', width: '110px', height: '110px', borderRadius: '24px', border: '1px solid rgba(24,133,99,.16)', background: 'rgba(255,255,255,.1)', left: '10%', top: '30%', animation: 'fikra-drift 13s ease-in-out -2s infinite' }}></div>
    <div style={{ position: 'absolute', width: '88px', height: '88px', borderRadius: '20px', border: '1px solid rgba(61,111,180,.16)', background: 'rgba(255,255,255,.1)', right: '8%', top: '18%', animation: 'fikra-drift 11s ease-in-out -5s infinite' }}></div>
    <div style={{ position: 'absolute', width: '72px', height: '72px', borderRadius: '18px', border: '1px solid rgba(24,133,99,.18)', background: 'rgba(255,255,255,.11)', right: '22%', top: '55%', animation: 'fikra-drift 12s ease-in-out -8s infinite' }}></div>
    <div style={{ position: 'absolute', width: '96px', height: '96px', borderRadius: '22px', border: '1px solid rgba(24,133,99,.14)', background: 'rgba(255,255,255,.09)', left: '34%', top: '64%', animation: 'fikra-drift 14s ease-in-out -4s infinite' }}></div>
  </div>
</div>

<header className="app-header" style={{ position: 'sticky', top: '0', zIndex: '10', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '24px', background: 'rgba(255,255,255,.6)', backdropFilter: 'blur(20px)', WebkitBackdropFilter: 'blur(20px)', borderBottom: '1px solid var(--glass-border)', boxShadow: 'var(--shadow-sm)', padding: '14px 32px' }}>
  <nav className="main-nav" aria-label="Asosiy" style={{ display: 'flex', alignItems: 'center', gap: '6px', flexWrap: 'wrap' }}>
    <a href="#how-it-works" id="nav-how" className="nav-link" style={{ fontSize: 'var(--text-sm)', fontWeight: '500', color: 'var(--ink-mid)', padding: '8px 12px', borderRadius: 'var(--radius-pill)', textDecoration: 'none' }} style-hover="background:var(--glass);color:var(--ink);text-decoration:none">Qanday ishlaydi</a>
    <a href="#targeting-demo" id="nav-business" className="nav-link" style={{ fontSize: 'var(--text-sm)', fontWeight: '500', color: 'var(--ink-mid)', padding: '8px 12px', borderRadius: 'var(--radius-pill)', textDecoration: 'none' }} style-hover="background:var(--glass);color:var(--ink);text-decoration:none">Biznes uchun</a>
    <a href="#data-band" id="nav-contact" className="nav-link" style={{ fontSize: 'var(--text-sm)', fontWeight: '500', color: 'var(--ink-mid)', padding: '8px 12px', borderRadius: 'var(--radius-pill)', textDecoration: 'none' }} style-hover="background:var(--glass);color:var(--ink);text-decoration:none">Ma'lumot uchun murojaat</a>
    <a href="#" id="nav-login" className="nav-link nav-login" style={{ fontSize: 'var(--text-sm)', fontWeight: '600', color: 'var(--ink)', padding: '8px 18px', borderRadius: 'var(--radius-pill)', border: '1px solid var(--glass-border)', background: 'var(--glass)', boxShadow: 'var(--shadow-sm),var(--glass-inner)', textDecoration: 'none' }} style-hover="background:var(--glass-strong);text-decoration:none">Kirish</a>
  </nav>
</header>

<main style={{ position: 'relative', zIndex: '1' }}>

  
  <section className="hero" data-screen-label="Hero" style={{ maxWidth: '880px', margin: '0 auto', padding: '96px 32px 72px', textAlign: 'center' }}>
    <img className="hero-logo" src="/logo-full.png" alt="Fikra" style={{ height: 'clamp(56px,9vw,88px)', display: 'block', margin: '0 auto 26px', maxWidth: '100%' }} />
    <h1 className="hero-slogan" style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(30px,4.5vw,var(--text-3xl))', fontWeight: '800', letterSpacing: '-.02em', lineHeight: '1.1', margin: '0 0 18px', textWrap: 'balance' }}>To'g'ri odamlardan haqiqiy javoblar.</h1>
    <p style={{ fontSize: 'var(--text-md)', color: 'var(--ink-mid)', maxWidth: '560px', margin: '0 auto 36px', textWrap: 'pretty' }}>Fikra biznesni O'zbekiston bo'ylab tekshirilgan respondentlar bilan bog'laydi. So'rovnomani bir necha daqiqada e'lon qiling. Fikringiz uchun pul oling.</p>
    <div className="hero-actions" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(280px,1fr))', gap: '16px', maxWidth: '720px', margin: '0 auto', textAlign: 'left' }}>
      <button type="button" id="cta-take" className="cta-panel cta-take" style={{ fontFamily: 'var(--font-body)', display: 'flex', gap: '16px', alignItems: 'flex-start', textAlign: 'left', background: 'var(--glass)', backdropFilter: 'blur(20px)', WebkitBackdropFilter: 'blur(20px)', border: '1px solid var(--glass-border)', borderRadius: 'var(--radius-lg)', boxShadow: 'var(--shadow-glass),var(--glass-inner)', padding: '22px', cursor: 'pointer', transition: 'transform .15s,box-shadow .15s' }} style-hover="transform:translateY(-3px);box-shadow:var(--shadow-float),var(--glass-inner)">
        <span className="cta-icon" style={{ flex: 'none', width: '46px', height: '46px', borderRadius: '14px', background: 'linear-gradient(180deg,var(--mint-500),var(--mint-600))', border: '1px solid rgba(255,255,255,.55)', boxShadow: 'var(--glow-mint),inset 0 1px 0 rgba(255,255,255,.35)', display: 'inline-flex', alignItems: 'center', justifyContent: 'center' }}>
          <svg width={22} height={22} viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="8"></circle><path d="M8.5 12.5l2.5 2.5 4.5-5"></path></svg>
        </span>
        <span style={{ display: 'block' }}>
          <span style={{ display: 'block', fontFamily: 'var(--font-display)', fontSize: 'var(--text-md)', fontWeight: '700', color: 'var(--ink)', marginBottom: '4px' }}>So'rovnomalarda qatnashish</span>
          <span style={{ display: 'block', fontSize: 'var(--text-sm)', color: 'var(--ink-mid)', lineHeight: '1.45' }}>Profilingizga mos so'rovnomalarga javob bering — har biri uchun pul oling.</span>
          <span style={{ display: 'inline-block', marginTop: '10px', fontSize: 'var(--text-sm)', fontWeight: '600', color: 'var(--mint-600)' }}>Boshlash →</span>
        </span>
      </button>
      <button type="button" id="cta-create" className="cta-panel cta-create" style={{ fontFamily: 'var(--font-body)', display: 'flex', gap: '16px', alignItems: 'flex-start', textAlign: 'left', background: 'var(--glass)', backdropFilter: 'blur(20px)', WebkitBackdropFilter: 'blur(20px)', border: '1px solid var(--glass-border)', borderRadius: 'var(--radius-lg)', boxShadow: 'var(--shadow-glass),var(--glass-inner)', padding: '22px', cursor: 'pointer', transition: 'transform .15s,box-shadow .15s' }} style-hover="transform:translateY(-3px);box-shadow:var(--shadow-float),var(--glass-inner)">
        <span className="cta-icon" style={{ flex: 'none', width: '46px', height: '46px', borderRadius: '14px', background: 'linear-gradient(180deg,#2A363C,var(--ink))', border: '1px solid rgba(255,255,255,.35)', boxShadow: '0 6px 16px rgba(27,34,38,.3),inset 0 1px 0 rgba(255,255,255,.18)', display: 'inline-flex', alignItems: 'center', justifyContent: 'center' }}>
          <svg width={22} height={22} viewBox="0 0 24 24" fill="#fff" aria-hidden="true"><rect x="5" y="12" width={3} height={7} rx="1"></rect><rect x="10.5" y="8" width={3} height={11} rx="1"></rect><rect x="16" y="4" width={3} height={15} rx="1"></rect></svg>
        </span>
        <span style={{ display: 'block' }}>
          <span style={{ display: 'block', fontFamily: 'var(--font-display)', fontSize: 'var(--text-md)', fontWeight: '700', color: 'var(--ink)', marginBottom: '4px' }}>So'rovnoma yaratish</span>
          <span style={{ display: 'block', fontSize: 'var(--text-sm)', color: 'var(--ink-mid)', lineHeight: '1.45' }}>Auditoriyani aniq tanlang va javoblarni 48 soat ichida oling.</span>
          <span style={{ display: 'inline-block', marginTop: '10px', fontSize: 'var(--text-sm)', fontWeight: '600', color: 'var(--ink)' }}>Yaratish →</span>
        </span>
      </button>
    </div>
  </section>

  
  <section className="stats-strip" data-screen-label="Statistika" style={{ maxWidth: '1040px', margin: '0 auto', padding: '0 32px 88px' }}>
    <div className="stat-row" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(200px,1fr))', gap: '16px' }}>
      <div className="stat-card" data-stat="panelists" style={{ background: 'var(--glass)', backdropFilter: 'blur(20px)', WebkitBackdropFilter: 'blur(20px)', border: '1px solid var(--glass-border)', borderRadius: 'var(--radius-lg)', boxShadow: 'var(--shadow-glass),var(--glass-inner)', padding: '20px 22px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '12px' }}>
          <span className="stat-icon" style={{ flex: 'none', width: '34px', height: '34px', borderRadius: '10px', background: 'var(--mint-glass)', border: '1px solid var(--mint-glass-border)', display: 'inline-flex', alignItems: 'center', justifyContent: 'center' }}><svg width={18} height={18} viewBox="0 0 24 24" fill="none" stroke="#0E5E44" strokeWidth="2" strokeLinecap="round" aria-hidden="true"><circle cx="12" cy="8" r="4"></circle><path d="M4 20c1.5-4 5-5 8-5s6.5 1 8 5"></path></svg></span>
          <span className="stat-label" style={{ fontSize: 'var(--text-sm)', color: 'var(--ink-mid)' }}>tekshirilgan respondent</span>
        </div>
        <div className="stat-value" style={{ fontFamily: 'var(--font-display)', fontSize: 'var(--text-2xl)', fontWeight: '700', letterSpacing: '-.01em', color: 'var(--mint-700)', fontVariantNumeric: 'tabular-nums', lineHeight: '1.1' }}>2 000+</div>
      </div>
      <div className="stat-card" data-stat="regions" style={{ background: 'var(--glass)', backdropFilter: 'blur(20px)', WebkitBackdropFilter: 'blur(20px)', border: '1px solid var(--glass-border)', borderRadius: 'var(--radius-lg)', boxShadow: 'var(--shadow-glass),var(--glass-inner)', padding: '20px 22px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '12px' }}>
          <span className="stat-icon" style={{ flex: 'none', width: '34px', height: '34px', borderRadius: '10px', background: 'var(--mint-glass)', border: '1px solid var(--mint-glass-border)', display: 'inline-flex', alignItems: 'center', justifyContent: 'center' }}><svg width={18} height={18} viewBox="0 0 24 24" fill="none" stroke="#0E5E44" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M12 21s-6-5.5-6-10a6 6 0 1112 0c0 4.5-6 10-6 10z"></path><circle cx="12" cy="11" r="2"></circle></svg></span>
          <span className="stat-label" style={{ fontSize: 'var(--text-sm)', color: 'var(--ink-mid)' }}>viloyat</span>
        </div>
        <div className="stat-value" style={{ fontFamily: 'var(--font-display)', fontSize: 'var(--text-2xl)', fontWeight: '700', letterSpacing: '-.01em', color: 'var(--mint-700)', fontVariantNumeric: 'tabular-nums', lineHeight: '1.1' }}>14 ta</div>
      </div>
      <div className="stat-card" data-stat="turnaround" style={{ background: 'var(--glass)', backdropFilter: 'blur(20px)', WebkitBackdropFilter: 'blur(20px)', border: '1px solid var(--glass-border)', borderRadius: 'var(--radius-lg)', boxShadow: 'var(--shadow-glass),var(--glass-inner)', padding: '20px 22px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '12px' }}>
          <span className="stat-icon" style={{ flex: 'none', width: '34px', height: '34px', borderRadius: '10px', background: 'var(--mint-glass)', border: '1px solid var(--mint-glass-border)', display: 'inline-flex', alignItems: 'center', justifyContent: 'center' }}><svg width={18} height={18} viewBox="0 0 24 24" fill="none" stroke="#0E5E44" strokeWidth="2" strokeLinecap="round" aria-hidden="true"><circle cx="12" cy="12" r="9"></circle><path d="M12 7v5l3 2"></path></svg></span>
          <span className="stat-label" style={{ fontSize: 'var(--text-sm)', color: 'var(--ink-mid)' }}>o'rtacha yig'ish vaqti</span>
        </div>
        <div className="stat-value" style={{ fontFamily: 'var(--font-display)', fontSize: 'var(--text-2xl)', fontWeight: '700', letterSpacing: '-.01em', color: 'var(--mint-700)', fontVariantNumeric: 'tabular-nums', lineHeight: '1.1' }}>48 soat</div>
      </div>
      <div className="stat-card" data-stat="studies" style={{ background: 'var(--glass)', backdropFilter: 'blur(20px)', WebkitBackdropFilter: 'blur(20px)', border: '1px solid var(--glass-border)', borderRadius: 'var(--radius-lg)', boxShadow: 'var(--shadow-glass),var(--glass-inner)', padding: '20px 22px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '12px' }}>
          <span className="stat-icon" style={{ flex: 'none', width: '34px', height: '34px', borderRadius: '10px', background: 'var(--mint-glass)', border: '1px solid var(--mint-glass-border)', display: 'inline-flex', alignItems: 'center', justifyContent: 'center' }}><svg width={18} height={18} viewBox="0 0 24 24" fill="none" stroke="#0E5E44" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><rect x="4" y="4" width={16} height={16} rx="4"></rect><path d="M8.5 12l2.5 2.5 4.5-5"></path></svg></span>
          <span className="stat-label" style={{ fontSize: 'var(--text-sm)', color: 'var(--ink-mid)' }}>tugallangan tadqiqot</span>
        </div>
        <div className="stat-value" style={{ fontFamily: 'var(--font-display)', fontSize: 'var(--text-2xl)', fontWeight: '700', letterSpacing: '-.01em', color: 'var(--mint-700)', fontVariantNumeric: 'tabular-nums', lineHeight: '1.1' }}>12 ta</div>
      </div>
    </div>
    <p className="stats-note" style={{ margin: '12px 4px 0', fontSize: 'var(--text-xs)', color: 'var(--ink-soft)' }}>Ko'rsatkichlar joriy pilot panelga tegishli.</p>
  </section>

  
  <section className="how-it-works" id="how-it-works" data-screen-label="Qanday ishlaydi" style={{ maxWidth: '1040px', margin: '0 auto', padding: '0 32px 88px' }}>
    <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'var(--text-2xl)', fontWeight: '700', letterSpacing: '-.01em', margin: '0 0 28px', textAlign: 'center' }}>Qanday ishlaydi</h2>
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(300px,1fr))', gap: '20px' }}>
      <div className="steps-column steps-creators" style={{ background: 'var(--glass)', backdropFilter: 'blur(20px)', WebkitBackdropFilter: 'blur(20px)', border: '1px solid var(--glass-border)', borderRadius: 'var(--radius-lg)', boxShadow: 'var(--shadow-glass),var(--glass-inner)', padding: '28px' }}>
        <h3 style={{ fontFamily: 'var(--font-display)', fontSize: 'var(--text-lg)', fontWeight: '700', margin: '0 0 20px' }}>Biznes uchun</h3>
        <ol className="steps" style={{ listStyle: 'none', margin: '0', padding: '0', display: 'flex', flexDirection: 'column', gap: '18px' }}>
          <li className="step" style={{ display: 'flex', gap: '14px', alignItems: 'flex-start' }}>
            <span className="step-num" style={{ flex: 'none', width: '32px', height: '32px', borderRadius: '50%', background: 'linear-gradient(180deg,#2A363C,var(--ink))', color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: 'var(--font-display)', fontSize: '14px', fontWeight: '700', boxShadow: 'inset 0 1px 0 rgba(255,255,255,.2)' }}>1</span>
            <div><div style={{ fontWeight: '600', marginBottom: '2px' }}>Yarating</div><div style={{ fontSize: 'var(--text-sm)', color: 'var(--ink-mid)' }}>Savollarni konstruktorda tuzing — shablon yoki noldan.</div></div>
          </li>
          <li className="step" style={{ display: 'flex', gap: '14px', alignItems: 'flex-start' }}>
            <span className="step-num" style={{ flex: 'none', width: '32px', height: '32px', borderRadius: '50%', background: 'linear-gradient(180deg,#2A363C,var(--ink))', color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: 'var(--font-display)', fontSize: '14px', fontWeight: '700', boxShadow: 'inset 0 1px 0 rgba(255,255,255,.2)' }}>2</span>
            <div><div style={{ fontWeight: '600', marginBottom: '2px' }}>Auditoriyani tanlang</div><div style={{ fontSize: 'var(--text-sm)', color: 'var(--ink-mid)' }}>Yosh, viloyat, daromad, qiziqishlar — mos panelistlar sonini jonli ko'ring.</div></div>
          </li>
          <li className="step" style={{ display: 'flex', gap: '14px', alignItems: 'flex-start' }}>
            <span className="step-num" style={{ flex: 'none', width: '32px', height: '32px', borderRadius: '50%', background: 'linear-gradient(180deg,#2A363C,var(--ink))', color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: 'var(--font-display)', fontSize: '14px', fontWeight: '700', boxShadow: 'inset 0 1px 0 rgba(255,255,255,.2)' }}>3</span>
            <div><div style={{ fontWeight: '600', marginBottom: '2px' }}>Natijani oling</div><div style={{ fontSize: 'var(--text-sm)', color: 'var(--ink-mid)' }}>Javoblar real vaqtda keladi — grafiklar va eksport tayyor.</div></div>
          </li>
        </ol>
      </div>
      <div className="steps-column steps-takers" style={{ background: 'var(--glass)', backdropFilter: 'blur(20px)', WebkitBackdropFilter: 'blur(20px)', border: '1px solid var(--glass-border)', borderRadius: 'var(--radius-lg)', boxShadow: 'var(--shadow-glass),var(--glass-inner)', padding: '28px' }}>
        <h3 style={{ fontFamily: 'var(--font-display)', fontSize: 'var(--text-lg)', fontWeight: '700', margin: '0 0 20px' }}>Respondentlar uchun</h3>
        <ol className="steps" style={{ listStyle: 'none', margin: '0', padding: '0', display: 'flex', flexDirection: 'column', gap: '18px' }}>
          <li className="step" style={{ display: 'flex', gap: '14px', alignItems: 'flex-start' }}>
            <span className="step-num" style={{ flex: 'none', width: '32px', height: '32px', borderRadius: '50%', background: 'linear-gradient(180deg,var(--mint-500),var(--mint-600))', color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: 'var(--font-display)', fontSize: '14px', fontWeight: '700', boxShadow: 'var(--glow-mint),inset 0 1px 0 rgba(255,255,255,.35)' }}>1</span>
            <div><div style={{ fontWeight: '600', marginBottom: '2px' }}>Ro'yxatdan o'ting</div><div style={{ fontSize: 'var(--text-sm)', color: 'var(--ink-mid)' }}>Telefon raqam bilan bir daqiqada.</div></div>
          </li>
          <li className="step" style={{ display: 'flex', gap: '14px', alignItems: 'flex-start' }}>
            <span className="step-num" style={{ flex: 'none', width: '32px', height: '32px', borderRadius: '50%', background: 'linear-gradient(180deg,var(--mint-500),var(--mint-600))', color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: 'var(--font-display)', fontSize: '14px', fontWeight: '700', boxShadow: 'var(--glow-mint),inset 0 1px 0 rgba(255,255,255,.35)' }}>2</span>
            <div><div style={{ fontWeight: '600', marginBottom: '2px' }}>Profilni to'ldiring</div><div style={{ fontSize: 'var(--text-sm)', color: 'var(--ink-mid)' }}>Bir marta — shunda sizga mos so'rovnomalar keladi.</div></div>
          </li>
          <li className="step" style={{ display: 'flex', gap: '14px', alignItems: 'flex-start' }}>
            <span className="step-num" style={{ flex: 'none', width: '32px', height: '32px', borderRadius: '50%', background: 'linear-gradient(180deg,var(--mint-500),var(--mint-600))', color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: 'var(--font-display)', fontSize: '14px', fontWeight: '700', boxShadow: 'var(--glow-mint),inset 0 1px 0 rgba(255,255,255,.35)' }}>3</span>
            <div><div style={{ fontWeight: '600', marginBottom: '2px' }}>Pul ishlang</div><div style={{ fontSize: 'var(--text-sm)', color: 'var(--ink-mid)' }}>Har bir tugallangan so'rovnoma uchun to'lov — kartangizga.</div></div>
          </li>
        </ol>
      </div>
    </div>
  </section>

  
  <section className="targeting-demo" id="targeting-demo" data-screen-label="Targeting demo" style={{ maxWidth: '1040px', margin: '0 auto', padding: '0 32px 88px' }}>
    <div style={{ position: 'relative', borderRadius: '24px', overflow: 'hidden', background: 'linear-gradient(155deg,#0E201C 0%,#123128 60%,#175A43 130%)', boxShadow: 'var(--shadow-float)', border: '1px solid rgba(255,255,255,.14)' }}>
      <div aria-hidden="true" style={{ position: 'absolute', width: '420px', height: '420px', borderRadius: '50%', background: 'radial-gradient(circle,rgba(98,201,163,.4),transparent 70%)', top: '-140px', right: '-80px', filter: 'blur(16px)' }}></div>
      <div aria-hidden="true" style={{ position: 'absolute', width: '340px', height: '340px', borderRadius: '50%', background: 'radial-gradient(circle,rgba(122,170,236,.25),transparent 70%)', bottom: '-120px', left: '-70px', filter: 'blur(18px)' }}></div>
      <div style={{ position: 'relative', padding: '44px', display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(280px,1fr))', gap: '40px', alignItems: 'center' }}>
        <div className="targeting-controls">
          <p style={{ fontFamily: 'var(--font-mono)', fontSize: 'var(--text-xs)', letterSpacing: '.08em', color: 'rgba(127,232,195,.8)', margin: '0 0 10px' }}>JONLI PANEL</p>
          <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'var(--text-xl)', fontWeight: '700', letterSpacing: '-.01em', color: '#F2F7F5', margin: '0 0 22px', textWrap: 'balance' }}>Auditoriyangizni tanlang — mos panelistlarni darhol ko'ring</h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            <div className="form-field">
              <label htmlFor="demo-region" style={{ display: 'block', fontWeight: '600', fontSize: 'var(--text-sm)', color: 'rgba(255,255,255,.75)', marginBottom: '6px' }}>Viloyat</label>
              <select id="demo-region" data-control="demo-region" style={{ width: '100%', boxSizing: 'border-box', fontFamily: 'var(--font-body)', fontSize: 'var(--text-base)', color: '#F2F7F5', padding: '10px 12px', border: '1px solid rgba(255,255,255,.25)', borderRadius: 'var(--radius-md)', background: 'rgba(255,255,255,.08)', backdropFilter: 'blur(10px)', WebkitBackdropFilter: 'blur(10px)' }}>
                <option value="all" style={{ color: '#1B2226' }}>Barcha viloyatlar</option>
                <option value="toshkent" style={{ color: '#1B2226' }}>Toshkent</option>
                <option value="samarqand" style={{ color: '#1B2226' }}>Samarqand</option>
                <option value="fargona" style={{ color: '#1B2226' }}>Farg'ona</option>
                <option value="namangan" style={{ color: '#1B2226' }}>Namangan</option>
                <option value="buxoro" style={{ color: '#1B2226' }}>Buxoro</option>
              </select>
            </div>
            <div className="form-field range-field">
              <span id="demo-age-label" style={{ display: 'block', fontWeight: '600', fontSize: 'var(--text-sm)', color: 'rgba(255,255,255,.75)', marginBottom: '6px' }}>Yosh oralig'i: <span style={{ color: '#7FE8C3', fontVariantNumeric: 'tabular-nums' }}>{/* BIND: ageMin */}–{/* BIND: ageMax */}</span></span>
              <div className="range-dual" data-control="demo-age" style={{ position: 'relative', height: '36px', margin: '0 11px' }}>
                <div className="range-track" style={{ position: 'absolute', top: '16px', left: '0', right: '0', height: '5px', borderRadius: '3px', background: 'rgba(255,255,255,.15)' }}></div>
                <div className="range-fill" style={{ position: 'absolute', top: '16px', left: '{{ fillLeft }}', width: '{{ fillWidth }}', height: '5px', borderRadius: '3px', background: 'linear-gradient(90deg,var(--mint-500),var(--mint-400))', boxShadow: '0 0 10px rgba(98,201,163,.6)' }}></div>
                <button type="button" className="range-handle" id="demo-age-min" role="slider" aria-labelledby="demo-age-label" aria-valuemin={16} aria-valuemax={65} style={{ position: 'absolute', top: '7px', left: '{{ minLeft }}', transform: 'translateX(-50%)', width: '22px', height: '22px', borderRadius: '50%', background: 'rgba(255,255,255,.95)', border: '2px solid var(--mint-400)', boxShadow: '0 0 12px rgba(98,201,163,.5)', cursor: 'grab', padding: '0' }}></button>
                <button type="button" className="range-handle" id="demo-age-max" role="slider" aria-labelledby="demo-age-label" aria-valuemin={16} aria-valuemax={65} style={{ position: 'absolute', top: '7px', left: '{{ maxLeft }}', transform: 'translateX(-50%)', width: '22px', height: '22px', borderRadius: '50%', background: 'rgba(255,255,255,.95)', border: '2px solid var(--mint-400)', boxShadow: '0 0 12px rgba(98,201,163,.5)', cursor: 'grab', padding: '0' }}></button>
              </div>
            </div>
            <div className="form-field">
              <label htmlFor="demo-interest" style={{ display: 'block', fontWeight: '600', fontSize: 'var(--text-sm)', color: 'rgba(255,255,255,.75)', marginBottom: '6px' }}>Qiziqish sohasi</label>
              <select id="demo-interest" data-control="demo-interest" style={{ width: '100%', boxSizing: 'border-box', fontFamily: 'var(--font-body)', fontSize: 'var(--text-base)', color: '#F2F7F5', padding: '10px 12px', border: '1px solid rgba(255,255,255,.25)', borderRadius: 'var(--radius-md)', background: 'rgba(255,255,255,.08)', backdropFilter: 'blur(10px)', WebkitBackdropFilter: 'blur(10px)' }}>
                <option value="all" style={{ color: '#1B2226' }}>Barcha sohalar</option>
                <option value="fintech" style={{ color: '#1B2226' }}>Bank va moliya ilovalari</option>
                <option value="delivery" style={{ color: '#1B2226' }}>Yetkazib berish xizmatlari</option>
                <option value="edu" style={{ color: '#1B2226' }}>Ta'lim va kurslar</option>
                <option value="health" style={{ color: '#1B2226' }}>Sog'liq va sport</option>
              </select>
            </div>
          </div>
        </div>
        <div className="targeting-result" style={{ background: 'rgba(255,255,255,.07)', backdropFilter: 'blur(18px)', WebkitBackdropFilter: 'blur(18px)', border: '1px solid rgba(255,255,255,.14)', borderTopColor: 'rgba(255,255,255,.3)', borderRadius: 'var(--radius-lg)', padding: '28px', boxShadow: '0 20px 50px rgba(0,0,0,.35)' }}>
          <div className="match-count" data-element="match-count" aria-live="polite">
            <span style={{ display: 'block', fontFamily: 'var(--font-display)', fontSize: 'clamp(44px,5vw,64px)', fontWeight: '800', letterSpacing: '-.02em', lineHeight: '1', color: '#7FE8C3', textShadow: '0 0 28px rgba(98,201,163,.5)', fontVariantNumeric: 'tabular-nums' }}>{/* BIND: matchCount */}</span>
            <span style={{ display: 'block', fontSize: 'var(--text-md)', color: 'rgba(255,255,255,.75)', marginTop: '8px' }}>ta panelist mos keladi</span>
          </div>
          <div className="region-breakdown" style={{ marginTop: '24px', display: 'flex', flexDirection: 'column', gap: '10px' }}>
            {/* SC-FOR: sc-for */}
              <div className="region-bar" style={{ display: 'grid', gridTemplateColumns: '82px 1fr 40px', alignItems: 'center', gap: '10px' }}>
                <span style={{ fontSize: 'var(--text-xs)', color: 'rgba(255,255,255,.65)' }}>{/* BIND: bar.name */}</span>
                <div style={{ height: '8px', borderRadius: '4px', background: 'rgba(255,255,255,.1)', overflow: 'hidden' }}><div style={{ width: '{{ bar.pct }}', height: '100%', borderRadius: '4px', background: 'linear-gradient(90deg,var(--mint-500),var(--mint-400))', opacity: '{{ bar.opacity }}', boxShadow: '0 0 8px rgba(98,201,163,.4)' }}></div></div>
                <span style={{ fontSize: 'var(--text-xs)', color: 'rgba(255,255,255,.65)', textAlign: 'right', fontVariantNumeric: 'tabular-nums' }}>{/* BIND: bar.count */}</span>
              </div>
            
          </div>
          <p style={{ margin: '20px 0 0', fontSize: 'var(--text-xs)', color: 'rgba(255,255,255,.45)' }}>Raqam profil ma'lumotlari asosida jonli hisoblanadi</p>
        </div>
      </div>
    </div>
  </section>

  
  <section className="data-band" id="data-band" data-screen-label="Data band" style={{ maxWidth: '1040px', margin: '0 auto', padding: '0 32px 96px' }}>
    <div style={{ background: 'var(--glass)', backdropFilter: 'blur(20px)', WebkitBackdropFilter: 'blur(20px)', border: '1px solid var(--glass-border)', borderRadius: 'var(--radius-lg)', boxShadow: 'var(--shadow-glass),var(--glass-inner)', padding: '40px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '24px', flexWrap: 'wrap' }}>
      <div style={{ maxWidth: '560px' }}>
        <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'var(--text-xl)', fontWeight: '700', letterSpacing: '-.01em', margin: '0 0 8px' }}>Tadqiqot o'tkazmasdan ma'lumot kerakmi?</h2>
        <p style={{ margin: '0', fontSize: 'var(--text-base)', color: 'var(--ink-mid)' }}>Panel bo'yicha tayyor kesimlar va maxsus hisobotlar uchun biz bilan bog'laning.</p>
      </div>
      <button type="button" id="cta-data" className="btn btn-primary" style={{ fontFamily: 'var(--font-body)', fontWeight: '600', fontSize: 'var(--text-base)', padding: '12px 24px', borderRadius: 'var(--radius-md)', border: '1px solid rgba(255,255,255,.6)', background: 'linear-gradient(180deg,var(--mint-500),var(--mint-600))', color: '#fff', cursor: 'pointer', boxShadow: 'var(--glow-mint),inset 0 1px 0 rgba(255,255,255,.35)', transition: 'filter .12s' }} style-hover="filter:brightness(1.08)">Ma'lumot uchun murojaat</button>
    </div>
  </section>
</main>

<footer className="app-footer" style={{ position: 'relative', zIndex: '1', borderTop: '1px solid var(--glass-border)', background: 'rgba(255,255,255,.4)', backdropFilter: 'blur(16px)', WebkitBackdropFilter: 'blur(16px)', padding: '48px 32px 24px' }}>
  <div style={{ maxWidth: '1040px', margin: '0 auto' }}>
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(160px,1fr))', gap: '32px' }}>
      <div className="footer-brand">
        <img className="app-logo" src="/logo-full.png" alt="Fikra" style={{ height: '24px', display: 'block', marginBottom: '12px' }} />
        <p style={{ margin: '0', fontSize: 'var(--text-sm)', color: 'var(--ink-mid)', maxWidth: '240px' }}>O'zbekiston bo'ylab tekshirilgan respondentlar paneli — biznes va odamlar o'rtasidagi ko'prik.</p>
      </div>
      <nav className="footer-col" aria-label="Mahsulot">
        <h3 style={{ fontSize: 'var(--text-xs)', fontWeight: '600', letterSpacing: '.06em', color: 'var(--ink-soft)', margin: '0 0 12px' }}>MAHSULOT</h3>
        <ul style={{ listStyle: 'none', margin: '0', padding: '0', display: 'flex', flexDirection: 'column', gap: '8px' }}>
          <li><a href="#targeting-demo" style={{ fontSize: 'var(--text-sm)', color: 'var(--ink-mid)' }} style-hover="color:var(--mint-700)">So'rovnoma yaratish</a></li>
          <li><a href="#how-it-works" style={{ fontSize: 'var(--text-sm)', color: 'var(--ink-mid)' }} style-hover="color:var(--mint-700)">Respondent bo'lish</a></li>
          <li><a href="#data-band" style={{ fontSize: 'var(--text-sm)', color: 'var(--ink-mid)' }} style-hover="color:var(--mint-700)">Tayyor ma'lumotlar</a></li>
        </ul>
      </nav>
      <nav className="footer-col" aria-label="Kompaniya">
        <h3 style={{ fontSize: 'var(--text-xs)', fontWeight: '600', letterSpacing: '.06em', color: 'var(--ink-soft)', margin: '0 0 12px' }}>KOMPANIYA</h3>
        <ul style={{ listStyle: 'none', margin: '0', padding: '0', display: 'flex', flexDirection: 'column', gap: '8px' }}>
          <li><a href="#" style={{ fontSize: 'var(--text-sm)', color: 'var(--ink-mid)' }} style-hover="color:var(--mint-700)">Biz haqimizda</a></li>
          <li><a href="#" style={{ fontSize: 'var(--text-sm)', color: 'var(--ink-mid)' }} style-hover="color:var(--mint-700)">Panel sifati</a></li>
          <li><a href="#" style={{ fontSize: 'var(--text-sm)', color: 'var(--ink-mid)' }} style-hover="color:var(--mint-700)">Maxfiylik siyosati</a></li>
        </ul>
      </nav>
      <nav className="footer-col" aria-label="Aloqa">
        <h3 style={{ fontSize: 'var(--text-xs)', fontWeight: '600', letterSpacing: '.06em', color: 'var(--ink-soft)', margin: '0 0 12px' }}>ALOQA</h3>
        <ul style={{ listStyle: 'none', margin: '0', padding: '0', display: 'flex', flexDirection: 'column', gap: '8px' }}>
          <li><a href="mailto:salom@fikra.uz" style={{ fontSize: 'var(--text-sm)', color: 'var(--ink-mid)' }} style-hover="color:var(--mint-700)">salom@fikra.uz</a></li>
          <li><a href="tel:+998712005050" style={{ fontSize: 'var(--text-sm)', color: 'var(--ink-mid)' }} style-hover="color:var(--mint-700)">+998 71 200 50 50</a></li>
          <li><span style={{ fontSize: 'var(--text-sm)', color: 'var(--ink-mid)' }}>Toshkent, Amir Temur 107B</span></li>
        </ul>
      </nav>
    </div>
    <p style={{ margin: '36px 0 0', paddingTop: '20px', borderTop: '1px solid var(--line)', fontSize: 'var(--text-xs)', color: 'var(--ink-soft)' }}>Fikra © 2026 · Namangan</p>
  </div>
</footer>
    </>
  );
}
