// AUTO-GENERATED from the Phase 1 design export by tools/convert.py
// Static render of the design. Logic is added in the build phase.
// {/* BIND: x */} markers show where the design expected dynamic data.
// Re-runnable: regenerate after a design change, then re-apply logic.

export default function DataInquiries() {
  return (
    <>
<div className="ambient" aria-hidden="true" style={{ position: 'fixed', inset: '0', zIndex: '0', pointerEvents: 'none', overflow: 'hidden' }}>
  <div style={{ position: 'absolute', width: '520px', height: '520px', borderRadius: '50%', background: 'radial-gradient(circle,rgba(98,201,163,.4),transparent 70%)', top: '-160px', left: '-120px', filter: 'blur(20px)' }}></div>
  <div style={{ position: 'absolute', width: '460px', height: '460px', borderRadius: '50%', background: 'radial-gradient(circle,rgba(122,170,236,.35),transparent 70%)', top: '30%', right: '-140px', filter: 'blur(24px)' }}></div>
  <div style={{ position: 'absolute', width: '480px', height: '480px', borderRadius: '50%', background: 'radial-gradient(circle,rgba(98,201,163,.3),transparent 70%)', bottom: '-180px', left: '30%', filter: 'blur(24px)' }}></div>
</div>

<header className="app-header" style={{ position: 'sticky', top: '0', zIndex: '10', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '24px', background: 'rgba(255,255,255,.6)', backdropFilter: 'blur(20px)', WebkitBackdropFilter: 'blur(20px)', borderBottom: '1px solid var(--glass-border)', boxShadow: 'var(--shadow-sm)', padding: '14px 32px' }}>
  <nav className="main-nav" aria-label="Asosiy" style={{ display: 'flex', alignItems: 'center', gap: '6px', flexWrap: 'wrap' }}>
    <a href="landing.dc.html#how-it-works" id="nav-how" className="nav-link hv-11" style={{ fontSize: 'var(--text-sm)', fontWeight: '500', color: 'var(--ink-mid)', padding: '8px 12px', borderRadius: 'var(--radius-pill)', textDecoration: 'none' }}>Qanday ishlaydi</a>
    <a href="landing.dc.html#targeting-demo" id="nav-business" className="nav-link hv-11" style={{ fontSize: 'var(--text-sm)', fontWeight: '500', color: 'var(--ink-mid)', padding: '8px 12px', borderRadius: 'var(--radius-pill)', textDecoration: 'none' }}>Biznes uchun</a>
    <a href="#inquiry-form" id="nav-contact" className="nav-link is-active hv-12" aria-current="page" style={{ fontSize: 'var(--text-sm)', fontWeight: '600', color: 'var(--mint-700)', padding: '8px 12px', borderRadius: 'var(--radius-pill)', background: 'var(--mint-glass)', border: '1px solid var(--mint-glass-border)', textDecoration: 'none' }}>Ma'lumot uchun murojaat</a>
    <a href="#" id="nav-login" className="nav-link nav-login hv-13" style={{ fontSize: 'var(--text-sm)', fontWeight: '600', color: 'var(--ink)', padding: '8px 18px', borderRadius: 'var(--radius-pill)', border: '1px solid var(--glass-border)', background: 'var(--glass)', boxShadow: 'var(--shadow-sm),var(--glass-inner)', textDecoration: 'none' }}>Kirish</a>
  </nav>
</header>

<main style={{ position: 'relative', zIndex: '1', maxWidth: '880px', margin: '0 auto', padding: '72px 32px 96px' }}>

  <section className="inquiry-intro" data-screen-label="Kirish" style={{ textAlign: 'center', maxWidth: '640px', margin: '0 auto 48px' }}>
    <img className="hero-logo" src="/logo-full.png" alt="Fikra" style={{ height: '44px', display: 'block', margin: '0 auto 22px' }} />
    <h1 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(28px,4.5vw,var(--text-2xl))', fontWeight: '800', letterSpacing: '-.015em', lineHeight: '1.12', margin: '0 0 12px', textWrap: 'balance' }}>Tadqiqot o'tkazmasdan ma'lumot kerakmi?</h1>
    <p style={{ margin: '0', fontSize: 'var(--text-md)', color: 'var(--ink-mid)', textWrap: 'pretty' }}>Panelimiz asosida tayyor kesimlar va buyurtma hisobotlar tayyorlaymiz — o'z so'rovnomangizni yuritmasdan.</p>
  </section>

  <section className="offerings" data-screen-label="Takliflar" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(230px,1fr))', gap: '16px', marginBottom: '56px' }}>
    <div className="offering-card" data-offering="trends" style={{ background: 'var(--glass)', backdropFilter: 'blur(20px)', WebkitBackdropFilter: 'blur(20px)', border: '1px solid var(--glass-border)', borderRadius: 'var(--radius-lg)', boxShadow: 'var(--shadow-glass),var(--glass-inner)', padding: '22px' }}>
      <span className="offering-icon" style={{ display: 'inline-flex', width: '42px', height: '42px', borderRadius: '13px', background: 'linear-gradient(180deg,var(--mint-500),var(--mint-600))', border: '1px solid rgba(255,255,255,.55)', boxShadow: 'var(--glow-mint),inset 0 1px 0 rgba(255,255,255,.35)', alignItems: 'center', justifyContent: 'center', marginBottom: '14px' }}>
        <svg width={20} height={20} viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M4 17l5-6 4 3 7-9"></path><path d="M15 5h5v5"></path></svg>
      </span>
      <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'var(--text-md)', fontWeight: '700', margin: '0 0 6px' }}>Iste'molchi trendlari hisobotlari</h2>
      <p style={{ margin: '0', fontSize: 'var(--text-sm)', color: 'var(--ink-mid)' }}>Choraklik tayyor hisobotlar: xarid odatlari, ilova va xizmatlardan foydalanish, narx sezgirligi.</p>
    </div>
    <div className="offering-card" data-offering="custom" style={{ background: 'var(--glass)', backdropFilter: 'blur(20px)', WebkitBackdropFilter: 'blur(20px)', border: '1px solid var(--glass-border)', borderRadius: 'var(--radius-lg)', boxShadow: 'var(--shadow-glass),var(--glass-inner)', padding: '22px' }}>
      <span className="offering-icon" style={{ display: 'inline-flex', width: '42px', height: '42px', borderRadius: '13px', background: 'rgba(61,111,180,.14)', border: '1px solid var(--blue-glass-border)', alignItems: 'center', justifyContent: 'center', marginBottom: '14px' }}>
        <svg width={20} height={20} viewBox="0 0 24 24" fill="none" stroke="#3D6FB4" strokeWidth="2" strokeLinecap="round" aria-hidden="true"><circle cx="9" cy="8" r="3.5"></circle><circle cx="16.5" cy="9.5" r="2.5"></circle><path d="M3.5 19c1-3 3.2-4 5.5-4s4.5 1 5.5 4M14.5 15.5c1.8.2 3.5 1.1 4.2 3.5"></path></svg>
      </span>
      <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'var(--text-md)', fontWeight: '700', margin: '0 0 6px' }}>Maxsus auditoriya ma'lumotlari</h2>
      <p style={{ margin: '0', fontSize: 'var(--text-sm)', color: 'var(--ink-mid)' }}>Sizga kerakli segment kesimi: hudud, yosh, daromad va qiziqishlar bo'yicha chuqur tahlil.</p>
    </div>
    <div className="offering-card" data-offering="longitudinal" style={{ background: 'var(--glass)', backdropFilter: 'blur(20px)', WebkitBackdropFilter: 'blur(20px)', border: '1px solid var(--glass-border)', borderRadius: 'var(--radius-lg)', boxShadow: 'var(--shadow-glass),var(--glass-inner)', padding: '22px' }}>
      <span className="offering-icon" style={{ display: 'inline-flex', width: '42px', height: '42px', borderRadius: '13px', background: 'var(--amber-glass)', border: '1px solid var(--amber-glass-border)', alignItems: 'center', justifyContent: 'center', marginBottom: '14px' }}>
        <svg width={20} height={20} viewBox="0 0 24 24" fill="none" stroke="#A8731C" strokeWidth="2" strokeLinecap="round" aria-hidden="true"><circle cx="12" cy="12" r="9"></circle><path d="M12 7v5l3 2"></path></svg>
      </span>
      <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'var(--text-md)', fontWeight: '700', margin: '0 0 6px' }}>Uzoq muddatli panel kuzatuvi</h2>
      <p style={{ margin: '0', fontSize: 'var(--text-sm)', color: 'var(--ink-mid)' }}>Bir xil auditoriyani oylar davomida kuzatish: munosabat va odatlar qanday o'zgarishini ko'ring.</p>
    </div>
  </section>

  <section className="inquiry-form-section" id="inquiry-form" data-screen-label="Murojaat formasi" style={{ maxWidth: '560px', margin: '0 auto' }}>
    <div style={{ background: 'var(--glass)', backdropFilter: 'blur(20px)', WebkitBackdropFilter: 'blur(20px)', border: '1px solid var(--glass-border)', borderRadius: 'var(--radius-lg)', boxShadow: 'var(--shadow-glass),var(--glass-inner)', padding: '28px 24px' }}>
      <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'var(--text-lg)', fontWeight: '700', margin: '0 0 4px' }}>Murojaat qoldiring</h2>
      <p style={{ margin: '0 0 22px', fontSize: 'var(--text-sm)', color: 'var(--ink-mid)' }}>Ehtiyojingizni yozing — mos taklif bilan bog'lanamiz.</p>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(200px,1fr))', gap: '12px' }}>
          <div className="form-field">
            <label htmlFor="inq-name" style={{ display: 'block', fontWeight: '600', fontSize: 'var(--text-sm)', marginBottom: '6px' }}>Ism</label>
            <input id="inq-name" type="text" placeholder="Dilshod Qodirov" autoComplete="name" style={{ width: '100%', boxSizing: 'border-box', fontFamily: 'var(--font-body)', fontSize: 'var(--text-base)', color: 'var(--ink)', padding: '10px 12px', border: '1px solid var(--line-strong)', borderRadius: 'var(--radius-md)', background: 'rgba(255,255,255,.5)', boxShadow: 'inset 0 1px 2px rgba(27,60,50,.05)' }} />
          </div>
          <div className="form-field">
            <label htmlFor="inq-org" style={{ display: 'block', fontWeight: '600', fontSize: 'var(--text-sm)', marginBottom: '6px' }}>Tashkilot</label>
            <input id="inq-org" type="text" placeholder="Samarqand Agro MChJ" autoComplete="organization" style={{ width: '100%', boxSizing: 'border-box', fontFamily: 'var(--font-body)', fontSize: 'var(--text-base)', color: 'var(--ink)', padding: '10px 12px', border: '1px solid var(--line-strong)', borderRadius: 'var(--radius-md)', background: 'rgba(255,255,255,.5)', boxShadow: 'inset 0 1px 2px rgba(27,60,50,.05)' }} />
          </div>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(200px,1fr))', gap: '12px' }}>
          <div className="form-field">
            <label htmlFor="inq-email" style={{ display: 'block', fontWeight: '600', fontSize: 'var(--text-sm)', marginBottom: '6px' }}>Email</label>
            <input id="inq-email" type="email" placeholder="dilshod@samagro.uz" autoComplete="email" style={{ width: '100%', boxSizing: 'border-box', fontFamily: 'var(--font-body)', fontSize: 'var(--text-base)', color: 'var(--ink)', padding: '10px 12px', border: '1px solid var(--line-strong)', borderRadius: 'var(--radius-md)', background: 'rgba(255,255,255,.5)', boxShadow: 'inset 0 1px 2px rgba(27,60,50,.05)' }} />
          </div>
          <div className="form-field">
            <label htmlFor="inq-phone" style={{ display: 'block', fontWeight: '600', fontSize: 'var(--text-sm)', marginBottom: '6px' }}>Telefon</label>
            <div className="phone-input" style={{ display: 'flex', alignItems: 'stretch', border: '1px solid var(--line-strong)', borderRadius: 'var(--radius-md)', background: 'rgba(255,255,255,.5)', boxShadow: 'inset 0 1px 2px rgba(27,60,50,.05)', overflow: 'hidden' }}>
              <span className="phone-prefix" style={{ display: 'flex', alignItems: 'center', padding: '0 12px', background: 'rgba(255,255,255,.55)', borderRight: '1px solid var(--line)', fontWeight: '600', color: 'var(--ink-mid)', fontVariantNumeric: 'tabular-nums' }}>+998</span>
              <input id="inq-phone" type="tel" inputMode="numeric" placeholder="90 123 45 67" autoComplete="tel-national" style={{ flex: '1', minWidth: '0', fontFamily: 'var(--font-body)', fontSize: 'var(--text-base)', color: 'var(--ink)', padding: '10px 12px', border: '0', background: 'transparent', fontVariantNumeric: 'tabular-nums', letterSpacing: '.04em', outlineOffset: '-2px' }} />
            </div>
          </div>
        </div>
        <div className="form-field">
          <label htmlFor="inq-type" style={{ display: 'block', fontWeight: '600', fontSize: 'var(--text-sm)', marginBottom: '6px' }}>Qiziqtirgan ma'lumot turi</label>
          <select id="inq-type" style={{ width: '100%', boxSizing: 'border-box', fontFamily: 'var(--font-body)', fontSize: 'var(--text-base)', color: 'var(--ink)', padding: '10px 12px', border: '1px solid var(--line-strong)', borderRadius: 'var(--radius-md)', background: 'rgba(255,255,255,.5)' }}>
            <option>Iste'molchi trendlari hisoboti</option>
            <option>Maxsus auditoriya ma'lumotlari</option>
            <option>Uzoq muddatli panel kuzatuvi</option>
            <option>Boshqa / aniq emas</option>
          </select>
        </div>
        <div className="form-field">
          <label htmlFor="inq-purpose" style={{ display: 'block', fontWeight: '600', fontSize: 'var(--text-sm)', marginBottom: '6px' }}>Maqsad</label>
          <textarea id="inq-purpose" rows={4} placeholder="Qaysi savolga javob izlayapsiz? Qaysi auditoriya qiziqtiradi?" style={{ width: '100%', boxSizing: 'border-box', fontFamily: 'var(--font-body)', fontSize: 'var(--text-base)', color: 'var(--ink)', padding: '10px 12px', border: '1px solid var(--line-strong)', borderRadius: 'var(--radius-md)', background: 'rgba(255,255,255,.5)', resize: 'vertical', boxShadow: 'inset 0 1px 2px rgba(27,60,50,.05)' }}></textarea>
          <p className="field-help" style={{ margin: '6px 0 0', fontSize: 'var(--text-xs)', color: 'var(--ink-mid)' }}>Qisqacha yozsangiz ham bo'ladi — tafsilotlarni birga aniqlaymiz</p>
        </div>
        <button type="button" id="btn-submit-inquiry" className="btn btn-primary hv-2" style={{ fontFamily: 'var(--font-body)', fontWeight: '600', fontSize: 'var(--text-md)', padding: '13px 20px', borderRadius: 'var(--radius-md)', border: '1px solid rgba(255,255,255,.6)', background: 'linear-gradient(180deg,var(--mint-500),var(--mint-600))', color: '#fff', cursor: 'pointer', width: '100%', boxShadow: 'var(--glow-mint),inset 0 1px 0 rgba(255,255,255,.35)', transition: 'filter .12s' }}>Murojaat yuborish</button>
      </div>
    </div>

    <div className="inquiry-success" data-element="inquiry-success" role="status" style={{ marginTop: '20px', display: 'flex', gap: '14px', alignItems: 'center', background: 'linear-gradient(150deg,rgba(24,133,99,.14),rgba(255,255,255,.6) 60%)', backdropFilter: 'blur(20px)', WebkitBackdropFilter: 'blur(20px)', border: '1px solid var(--mint-glass-border)', borderRadius: 'var(--radius-lg)', boxShadow: 'var(--shadow-glass),var(--glass-inner)', padding: '18px 20px' }}>
      <span className="success-icon" style={{ flex: 'none', display: 'inline-flex', width: '40px', height: '40px', borderRadius: '50%', background: 'linear-gradient(180deg,var(--mint-500),var(--mint-600))', border: '1px solid rgba(255,255,255,.6)', boxShadow: 'var(--glow-mint),inset 0 1px 0 rgba(255,255,255,.35)', alignItems: 'center', justifyContent: 'center' }}>
        <svg width={20} height={20} viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M5 12.5l4.5 4.5L19 7.5"></path></svg>
      </span>
      <div>
        <p style={{ margin: '0', fontWeight: '600', fontSize: 'var(--text-base)' }}>Murojaatingiz qabul qilindi.</p>
        <p style={{ margin: '0', fontSize: 'var(--text-sm)', color: 'var(--ink-mid)' }}>Ikki ish kuni ichida javob beramiz.</p>
      </div>
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
          <li><a href="landing.dc.html#targeting-demo" style={{ fontSize: 'var(--text-sm)', color: 'var(--ink-mid)' }} className="hv-14">So'rovnoma yaratish</a></li>
          <li><a href="landing.dc.html#how-it-works" style={{ fontSize: 'var(--text-sm)', color: 'var(--ink-mid)' }} className="hv-14">Respondent bo'lish</a></li>
          <li><a href="#inquiry-form" style={{ fontSize: 'var(--text-sm)', color: 'var(--ink-mid)' }} className="hv-14">Tayyor ma'lumotlar</a></li>
        </ul>
      </nav>
      <nav className="footer-col" aria-label="Kompaniya">
        <h3 style={{ fontSize: 'var(--text-xs)', fontWeight: '600', letterSpacing: '.06em', color: 'var(--ink-soft)', margin: '0 0 12px' }}>KOMPANIYA</h3>
        <ul style={{ listStyle: 'none', margin: '0', padding: '0', display: 'flex', flexDirection: 'column', gap: '8px' }}>
          <li><a href="#" style={{ fontSize: 'var(--text-sm)', color: 'var(--ink-mid)' }} className="hv-14">Biz haqimizda</a></li>
          <li><a href="#" style={{ fontSize: 'var(--text-sm)', color: 'var(--ink-mid)' }} className="hv-14">Panel sifati</a></li>
          <li><a href="#" style={{ fontSize: 'var(--text-sm)', color: 'var(--ink-mid)' }} className="hv-14">Maxfiylik siyosati</a></li>
        </ul>
      </nav>
      <nav className="footer-col" aria-label="Aloqa">
        <h3 style={{ fontSize: 'var(--text-xs)', fontWeight: '600', letterSpacing: '.06em', color: 'var(--ink-soft)', margin: '0 0 12px' }}>ALOQA</h3>
        <ul style={{ listStyle: 'none', margin: '0', padding: '0', display: 'flex', flexDirection: 'column', gap: '8px' }}>
          <li><a href="mailto:salom@fikra.uz" style={{ fontSize: 'var(--text-sm)', color: 'var(--ink-mid)' }} className="hv-14">salom@fikra.uz</a></li>
          <li><a href="tel:+998712005050" style={{ fontSize: 'var(--text-sm)', color: 'var(--ink-mid)' }} className="hv-14">+998 71 200 50 50</a></li>
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
