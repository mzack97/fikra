// AUTO-GENERATED from the Phase 1 design export by tools/convert.py
// Static render of the design. Logic is added in the build phase.
// {/* BIND: x */} markers show where the design expected dynamic data.
// Re-runnable: regenerate after a design change, then re-apply logic.

export default function TakerDashboard() {
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
      <a href="#" id="side-home" className="side-link is-active" aria-current="page" style={{ display: 'flex', alignItems: 'center', gap: '12px', padding: '11px 12px', borderRadius: 'var(--radius-md)', fontSize: 'var(--text-sm)', fontWeight: '600', color: 'var(--mint-700)', background: 'var(--mint-glass)', border: '1px solid var(--mint-glass-border)' }}>
        <svg width={18} height={18} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M4 11l8-7 8 7v9a1 1 0 01-1 1h-4v-6h-6v6H5a1 1 0 01-1-1z"></path></svg>
        Bosh sahifa</a>
      <a href="#" id="side-surveys" className="side-link" style={{ display: 'flex', alignItems: 'center', gap: '12px', padding: '11px 12px', borderRadius: 'var(--radius-md)', fontSize: 'var(--text-sm)', fontWeight: '500', color: 'var(--ink-mid)', border: '1px solid transparent' }} style-hover="background:var(--glass);color:var(--ink)">
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
    <h1 className="greeting" style={{ fontFamily: 'var(--font-display)', fontSize: 'var(--text-2xl)', fontWeight: '700', letterSpacing: '-.01em', margin: '0 0 24px' }}>Salom, Aziza</h1>

    <div className="stat-row" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(190px,1fr))', gap: '16px', marginBottom: '24px' }}>
      <div className="stat-card" data-stat="balance" style={{ background: 'var(--glass)', backdropFilter: 'blur(20px)', WebkitBackdropFilter: 'blur(20px)', border: '1px solid var(--glass-border)', borderRadius: 'var(--radius-lg)', boxShadow: 'var(--shadow-glass),var(--glass-inner)', padding: '18px 20px' }}>
        <div className="stat-label" style={{ fontSize: 'var(--text-xs)', fontWeight: '600', color: 'var(--ink-mid)', letterSpacing: '.03em', marginBottom: '8px' }}>Mavjud balans</div>
        <div className="stat-value" style={{ fontFamily: 'var(--font-display)', fontSize: 'var(--text-xl)', fontWeight: '800', letterSpacing: '-.01em', color: 'var(--mint-700)', fontVariantNumeric: 'tabular-nums', lineHeight: '1.1' }}>34 500 <span style={{ fontSize: 'var(--text-sm)', fontWeight: '600', color: 'var(--ink-mid)' }}>so'm</span></div>
      </div>
      <div className="stat-card" data-stat="pending" style={{ background: 'var(--glass)', backdropFilter: 'blur(20px)', WebkitBackdropFilter: 'blur(20px)', border: '1px solid var(--glass-border)', borderRadius: 'var(--radius-lg)', boxShadow: 'var(--shadow-glass),var(--glass-inner)', padding: '18px 20px' }}>
        <div className="stat-label" style={{ fontSize: 'var(--text-xs)', fontWeight: '600', color: 'var(--ink-mid)', letterSpacing: '.03em', marginBottom: '8px' }}>Kutilmoqda</div>
        <div className="stat-value" style={{ fontFamily: 'var(--font-display)', fontSize: 'var(--text-xl)', fontWeight: '700', letterSpacing: '-.01em', color: 'var(--amber)', fontVariantNumeric: 'tabular-nums', lineHeight: '1.1' }}>4 000 <span style={{ fontSize: 'var(--text-sm)', fontWeight: '600', color: 'var(--ink-mid)' }}>so'm</span></div>
      </div>
      <div className="stat-card" data-stat="total-earned" style={{ background: 'var(--glass)', backdropFilter: 'blur(20px)', WebkitBackdropFilter: 'blur(20px)', border: '1px solid var(--glass-border)', borderRadius: 'var(--radius-lg)', boxShadow: 'var(--shadow-glass),var(--glass-inner)', padding: '18px 20px' }}>
        <div className="stat-label" style={{ fontSize: 'var(--text-xs)', fontWeight: '600', color: 'var(--ink-mid)', letterSpacing: '.03em', marginBottom: '8px' }}>Jami ishlangan</div>
        <div className="stat-value" style={{ fontFamily: 'var(--font-display)', fontSize: 'var(--text-xl)', fontWeight: '700', letterSpacing: '-.01em', fontVariantNumeric: 'tabular-nums', lineHeight: '1.1' }}>128 500 <span style={{ fontSize: 'var(--text-sm)', fontWeight: '600', color: 'var(--ink-mid)' }}>so'm</span></div>
      </div>
    </div>

    <div className="content-columns" style={{ display: 'grid', gridTemplateColumns: 'minmax(0,7fr) minmax(0,5fr)', gap: '20px', alignItems: 'start' }}>

      <div className="col-main" style={{ display: 'flex', flexDirection: 'column', gap: '20px', minWidth: '0' }}>
        <section className="profile-completeness" data-element="profile-completeness" style={{ position: 'relative', overflow: 'hidden', background: 'linear-gradient(150deg,rgba(24,133,99,.14),rgba(255,255,255,.55) 55%)', backdropFilter: 'blur(20px)', WebkitBackdropFilter: 'blur(20px)', border: '1px solid var(--mint-glass-border)', borderRadius: 'var(--radius-lg)', boxShadow: 'var(--shadow-glass),var(--glass-inner)', padding: '24px' }}>
          <div aria-hidden="true" style={{ position: 'absolute', width: '220px', height: '220px', borderRadius: '50%', background: 'radial-gradient(circle,rgba(98,201,163,.35),transparent 70%)', top: '-90px', right: '-60px', filter: 'blur(14px)' }}></div>
          <div style={{ position: 'relative', display: 'flex', gap: '20px', alignItems: 'center', flexWrap: 'wrap' }}>
            <div className="completeness-ring" role="img" aria-label="Profil 45 foiz to'ldirilgan" style={{ flex: 'none', position: 'relative', width: '92px', height: '92px' }}>
              <svg width={92} height={92} viewBox="0 0 92 92" aria-hidden="true">
                <circle cx="46" cy="46" r="40" fill="none" stroke="rgba(255,255,255,.7)" strokeWidth="9"></circle>
                <circle cx="46" cy="46" r="40" fill="none" stroke="url(#ring-grad)" strokeWidth="9" strokeLinecap="round" strokeDasharray="113 251" transform="rotate(-90 46 46)"></circle>
                <defs><linearGradient id="ring-grad" x1="0" y1="0" x2="1" y2="1"><stop offset="0%" stopColor="#2FB185"></stop><stop offset="100%" stopColor="#62C9A3"></stop></linearGradient></defs>
              </svg>
              <span style={{ position: 'absolute', inset: '0', display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: 'var(--font-display)', fontSize: 'var(--text-lg)', fontWeight: '800', color: 'var(--mint-700)', fontVariantNumeric: 'tabular-nums' }}>45%</span>
            </div>
            <div style={{ flex: '1', minWidth: '200px' }}>
              <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'var(--text-lg)', fontWeight: '700', letterSpacing: '-.01em', margin: '0 0 4px', textWrap: 'balance' }}>Profilni to'ldiring va ko'proq so'rovnomaga kiring</h2>
              <p style={{ margin: '0', fontSize: 'var(--text-sm)', color: 'var(--ink-mid)' }}>Har bir viktorina yangi turkum so'rovnomalarni ochadi — va bonus beradi.</p>
            </div>
          </div>
          <ul className="quiz-list" style={{ position: 'relative', listStyle: 'none', margin: '20px 0 0', padding: '0', display: 'flex', flexDirection: 'column', gap: '10px' }}>
            <li className="quiz-item" data-quiz="shopping" style={{ display: 'flex', alignItems: 'center', gap: '14px', padding: '12px 14px', borderRadius: 'var(--radius-md)', background: 'rgba(255,255,255,.55)', border: '1px solid var(--glass-border)', boxShadow: 'var(--shadow-sm)' }}>
              <span className="quiz-icon" style={{ flex: 'none', width: '36px', height: '36px', borderRadius: '11px', background: 'var(--mint-glass)', border: '1px solid var(--mint-glass-border)', display: 'inline-flex', alignItems: 'center', justifyContent: 'center' }}><svg width={17} height={17} viewBox="0 0 24 24" fill="none" stroke="#0E5E44" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M5 7h14l-1.3 11a2 2 0 01-2 1.8H8.3a2 2 0 01-2-1.8z"></path><path d="M9 10V6a3 3 0 016 0v4"></path></svg></span>
              <div style={{ flex: '1', minWidth: '0' }}>
                <div style={{ fontSize: 'var(--text-sm)', fontWeight: '600' }}>Xarid odatlari</div>
                <div style={{ fontSize: 'var(--text-xs)', color: 'var(--ink-mid)', fontVariantNumeric: 'tabular-nums' }}>~3 daqiqa · +2 000 so'm bonus</div>
              </div>
              <button type="button" className="btn btn-primary btn-quiz-start" data-action="quiz-shopping" style={{ fontFamily: 'var(--font-body)', fontWeight: '600', fontSize: 'var(--text-sm)', padding: '9px 16px', borderRadius: 'var(--radius-md)', border: '1px solid rgba(255,255,255,.6)', background: 'linear-gradient(180deg,var(--mint-500),var(--mint-600))', color: '#fff', cursor: 'pointer', boxShadow: 'var(--glow-mint),inset 0 1px 0 rgba(255,255,255,.35)', transition: 'filter .12s', minHeight: '38px' }} style-hover="filter:brightness(1.08)">Boshlash</button>
            </li>
            <li className="quiz-item" data-quiz="media" style={{ display: 'flex', alignItems: 'center', gap: '14px', padding: '12px 14px', borderRadius: 'var(--radius-md)', background: 'rgba(255,255,255,.55)', border: '1px solid var(--glass-border)', boxShadow: 'var(--shadow-sm)' }}>
              <span className="quiz-icon" style={{ flex: 'none', width: '36px', height: '36px', borderRadius: '11px', background: 'var(--blue-glass)', border: '1px solid var(--blue-glass-border)', display: 'inline-flex', alignItems: 'center', justifyContent: 'center' }}><svg width={17} height={17} viewBox="0 0 24 24" fill="none" stroke="#3D6FB4" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><rect x="3" y="5" width={18} height={13} rx="3"></rect><path d="M10 9.5l4.5 2.5-4.5 2.5z"></path></svg></span>
              <div style={{ flex: '1', minWidth: '0' }}>
                <div style={{ fontSize: 'var(--text-sm)', fontWeight: '600' }}>Media va ijtimoiy tarmoqlar</div>
                <div style={{ fontSize: 'var(--text-xs)', color: 'var(--ink-mid)', fontVariantNumeric: 'tabular-nums' }}>~4 daqiqa · +2 500 so'm bonus</div>
              </div>
              <button type="button" className="btn btn-primary btn-quiz-start" data-action="quiz-media" style={{ fontFamily: 'var(--font-body)', fontWeight: '600', fontSize: 'var(--text-sm)', padding: '9px 16px', borderRadius: 'var(--radius-md)', border: '1px solid rgba(255,255,255,.6)', background: 'linear-gradient(180deg,var(--mint-500),var(--mint-600))', color: '#fff', cursor: 'pointer', boxShadow: 'var(--glow-mint),inset 0 1px 0 rgba(255,255,255,.35)', transition: 'filter .12s', minHeight: '38px' }} style-hover="filter:brightness(1.08)">Boshlash</button>
            </li>
            <li className="quiz-item" data-quiz="transport" style={{ display: 'flex', alignItems: 'center', gap: '14px', padding: '12px 14px', borderRadius: 'var(--radius-md)', background: 'rgba(255,255,255,.55)', border: '1px solid var(--glass-border)', boxShadow: 'var(--shadow-sm)' }}>
              <span className="quiz-icon" style={{ flex: 'none', width: '36px', height: '36px', borderRadius: '11px', background: 'var(--amber-glass)', border: '1px solid var(--amber-glass-border)', display: 'inline-flex', alignItems: 'center', justifyContent: 'center' }}><svg width={17} height={17} viewBox="0 0 24 24" fill="none" stroke="#A8731C" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><rect x="4" y="5" width={16} height={12} rx="3"></rect><path d="M4 11h16M8 17v2M16 17v2"></path><circle cx="8.5" cy="14" r=".5"></circle><circle cx="15.5" cy="14" r=".5"></circle></svg></span>
              <div style={{ flex: '1', minWidth: '0' }}>
                <div style={{ fontSize: 'var(--text-sm)', fontWeight: '600' }}>Transport va yo'l odatlari</div>
                <div style={{ fontSize: 'var(--text-xs)', color: 'var(--ink-mid)', fontVariantNumeric: 'tabular-nums' }}>~3 daqiqa · +1 500 so'm bonus</div>
              </div>
              <button type="button" className="btn btn-primary btn-quiz-start" data-action="quiz-transport" style={{ fontFamily: 'var(--font-body)', fontWeight: '600', fontSize: 'var(--text-sm)', padding: '9px 16px', borderRadius: 'var(--radius-md)', border: '1px solid rgba(255,255,255,.6)', background: 'linear-gradient(180deg,var(--mint-500),var(--mint-600))', color: '#fff', cursor: 'pointer', boxShadow: 'var(--glow-mint),inset 0 1px 0 rgba(255,255,255,.35)', transition: 'filter .12s', minHeight: '38px' }} style-hover="filter:brightness(1.08)">Boshlash</button>
            </li>
          </ul>
        </section>

        <section className="recent-activity" data-element="recent-activity" style={{ background: 'var(--glass)', backdropFilter: 'blur(20px)', WebkitBackdropFilter: 'blur(20px)', border: '1px solid var(--glass-border)', borderRadius: 'var(--radius-lg)', boxShadow: 'var(--shadow-glass),var(--glass-inner)', padding: '24px' }}>
          <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'var(--text-lg)', fontWeight: '700', margin: '0 0 14px' }}>So'nggi harakatlar</h2>
          <ul className="ledger" style={{ listStyle: 'none', margin: '0', padding: '0', display: 'flex', flexDirection: 'column' }}>
            <li className="ledger-row" data-ledger="l-1" style={{ display: 'grid', gridTemplateColumns: '64px 1fr auto', gap: '12px', alignItems: 'center', padding: '11px 0', borderBottom: '1px solid var(--line)' }}>
              <span style={{ fontSize: 'var(--text-xs)', color: 'var(--ink-soft)', fontVariantNumeric: 'tabular-nums' }}>1-avg</span>
              <span style={{ fontSize: 'var(--text-sm)', minWidth: '0', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>«Yetkazib berish xizmatlari» so'rovnomasi</span>
              <span className="ledger-amount is-credit" style={{ fontSize: 'var(--text-sm)', fontWeight: '600', color: 'var(--mint-700)', fontVariantNumeric: 'tabular-nums' }}>+5 000 so'm</span>
            </li>
            <li className="ledger-row" data-ledger="l-2" style={{ display: 'grid', gridTemplateColumns: '64px 1fr auto', gap: '12px', alignItems: 'center', padding: '11px 0', borderBottom: '1px solid var(--line)' }}>
              <span style={{ fontSize: 'var(--text-xs)', color: 'var(--ink-soft)', fontVariantNumeric: 'tabular-nums' }}>30-iyul</span>
              <span style={{ fontSize: 'var(--text-sm)', minWidth: '0', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>Kartaga yechib olish</span>
              <span className="ledger-amount is-debit" style={{ fontSize: 'var(--text-sm)', fontWeight: '600', color: 'var(--ink-mid)', fontVariantNumeric: 'tabular-nums' }}>−50 000 so'm</span>
            </li>
            <li className="ledger-row" data-ledger="l-3" style={{ display: 'grid', gridTemplateColumns: '64px 1fr auto', gap: '12px', alignItems: 'center', padding: '11px 0', borderBottom: '1px solid var(--line)' }}>
              <span style={{ fontSize: 'var(--text-xs)', color: 'var(--ink-soft)', fontVariantNumeric: 'tabular-nums' }}>29-iyul</span>
              <span style={{ fontSize: 'var(--text-sm)', minWidth: '0', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>«Mobil bank ilovasi UX» so'rovnomasi</span>
              <span className="ledger-amount is-credit" style={{ fontSize: 'var(--text-sm)', fontWeight: '600', color: 'var(--mint-700)', fontVariantNumeric: 'tabular-nums' }}>+6 500 so'm</span>
            </li>
            <li className="ledger-row" data-ledger="l-4" style={{ display: 'grid', gridTemplateColumns: '64px 1fr auto', gap: '12px', alignItems: 'center', padding: '11px 0', borderBottom: '1px solid var(--line)' }}>
              <span style={{ fontSize: 'var(--text-xs)', color: 'var(--ink-soft)', fontVariantNumeric: 'tabular-nums' }}>27-iyul</span>
              <span style={{ fontSize: 'var(--text-sm)', minWidth: '0', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>«Media odatlari» viktorinasi bonusi</span>
              <span className="ledger-amount is-credit" style={{ fontSize: 'var(--text-sm)', fontWeight: '600', color: 'var(--mint-700)', fontVariantNumeric: 'tabular-nums' }}>+2 000 so'm</span>
            </li>
            <li className="ledger-row" data-ledger="l-5" style={{ display: 'grid', gridTemplateColumns: '64px 1fr auto', gap: '12px', alignItems: 'center', padding: '11px 0' }}>
              <span style={{ fontSize: 'var(--text-xs)', color: 'var(--ink-soft)', fontVariantNumeric: 'tabular-nums' }}>25-iyul</span>
              <span style={{ fontSize: 'var(--text-sm)', minWidth: '0', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>«Talabalar sarf-xarajati» so'rovnomasi</span>
              <span className="ledger-amount is-credit" style={{ fontSize: 'var(--text-sm)', fontWeight: '600', color: 'var(--mint-700)', fontVariantNumeric: 'tabular-nums' }}>+4 000 so'm</span>
            </li>
          </ul>
        </section>
      </div>

      <div className="col-side" style={{ display: 'flex', flexDirection: 'column', gap: '20px', minWidth: '0' }}>
        <section className="available-surveys" data-element="available-surveys" style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
          <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'var(--text-lg)', fontWeight: '700', margin: '0 0 2px' }}>Siz uchun mavjud</h2>
          <div className="survey-card" data-survey="s-311" style={{ background: 'var(--glass)', backdropFilter: 'blur(20px)', WebkitBackdropFilter: 'blur(20px)', border: '1px solid var(--glass-border)', borderRadius: 'var(--radius-lg)', boxShadow: 'var(--shadow-glass),var(--glass-inner)', padding: '16px', display: 'flex', flexDirection: 'column', gap: '10px' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '10px' }}>
              <span className="category-badge" style={{ display: 'inline-flex', fontSize: 'var(--text-xs)', fontWeight: '600', padding: '3px 10px', borderRadius: 'var(--radius-pill)', background: 'var(--mint-glass)', border: '1px solid var(--mint-glass-border)', color: 'var(--mint-700)' }}>Bank va moliya</span>
              <span className="survey-duration" style={{ fontSize: 'var(--text-xs)', color: 'var(--ink-mid)', fontVariantNumeric: 'tabular-nums' }}>4 daqiqa</span>
            </div>
            <h3 className="survey-title" style={{ fontFamily: 'var(--font-display)', fontSize: 'var(--text-base)', fontWeight: '600', lineHeight: '1.3', margin: '0' }}>Kredit kartadan foydalanish tajribasi</h3>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '10px' }}>
              <span className="reward-amount" style={{ fontFamily: 'var(--font-display)', fontSize: 'var(--text-lg)', fontWeight: '800', letterSpacing: '-.01em', color: 'var(--mint-700)', fontVariantNumeric: 'tabular-nums' }}>6 000 <span style={{ fontSize: 'var(--text-sm)', fontWeight: '600' }}>so'm</span></span>
              <button type="button" className="btn btn-primary" data-action="start-s-311" style={{ fontFamily: 'var(--font-body)', fontWeight: '600', fontSize: 'var(--text-sm)', padding: '9px 16px', borderRadius: 'var(--radius-md)', border: '1px solid rgba(255,255,255,.6)', background: 'linear-gradient(180deg,var(--mint-500),var(--mint-600))', color: '#fff', cursor: 'pointer', boxShadow: 'var(--glow-mint),inset 0 1px 0 rgba(255,255,255,.35)', transition: 'filter .12s', minHeight: '38px' }} style-hover="filter:brightness(1.08)">Boshlash</button>
            </div>
          </div>
          <div className="survey-card" data-survey="s-312" style={{ background: 'var(--glass)', backdropFilter: 'blur(20px)', WebkitBackdropFilter: 'blur(20px)', border: '1px solid var(--glass-border)', borderRadius: 'var(--radius-lg)', boxShadow: 'var(--shadow-glass),var(--glass-inner)', padding: '16px', display: 'flex', flexDirection: 'column', gap: '10px' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '10px' }}>
              <span className="category-badge" style={{ display: 'inline-flex', fontSize: 'var(--text-xs)', fontWeight: '600', padding: '3px 10px', borderRadius: 'var(--radius-pill)', background: 'var(--blue-glass)', border: '1px solid var(--blue-glass-border)', color: 'var(--blue-deep)' }}>Yetkazib berish</span>
              <span className="survey-duration" style={{ fontSize: 'var(--text-xs)', color: 'var(--ink-mid)', fontVariantNumeric: 'tabular-nums' }}>4 daqiqa</span>
            </div>
            <h3 className="survey-title" style={{ fontFamily: 'var(--font-display)', fontSize: 'var(--text-base)', fontWeight: '600', lineHeight: '1.3', margin: '0' }}>Oziq-ovqat yetkazib berish narxlari</h3>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '10px' }}>
              <span className="reward-amount" style={{ fontFamily: 'var(--font-display)', fontSize: 'var(--text-lg)', fontWeight: '800', letterSpacing: '-.01em', color: 'var(--mint-700)', fontVariantNumeric: 'tabular-nums' }}>4 500 <span style={{ fontSize: 'var(--text-sm)', fontWeight: '600' }}>so'm</span></span>
              <button type="button" className="btn btn-primary" data-action="start-s-312" style={{ fontFamily: 'var(--font-body)', fontWeight: '600', fontSize: 'var(--text-sm)', padding: '9px 16px', borderRadius: 'var(--radius-md)', border: '1px solid rgba(255,255,255,.6)', background: 'linear-gradient(180deg,var(--mint-500),var(--mint-600))', color: '#fff', cursor: 'pointer', boxShadow: 'var(--glow-mint),inset 0 1px 0 rgba(255,255,255,.35)', transition: 'filter .12s', minHeight: '38px' }} style-hover="filter:brightness(1.08)">Boshlash</button>
            </div>
          </div>
          <div className="survey-card" data-survey="s-313" style={{ background: 'var(--glass)', backdropFilter: 'blur(20px)', WebkitBackdropFilter: 'blur(20px)', border: '1px solid var(--glass-border)', borderRadius: 'var(--radius-lg)', boxShadow: 'var(--shadow-glass),var(--glass-inner)', padding: '16px', display: 'flex', flexDirection: 'column', gap: '10px' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '10px' }}>
              <span className="category-badge" style={{ display: 'inline-flex', fontSize: 'var(--text-xs)', fontWeight: '600', padding: '3px 10px', borderRadius: 'var(--radius-pill)', background: 'var(--amber-glass)', border: '1px solid var(--amber-glass-border)', color: 'var(--amber)' }}>Ta'lim</span>
              <span className="survey-duration" style={{ fontSize: 'var(--text-xs)', color: 'var(--ink-mid)', fontVariantNumeric: 'tabular-nums' }}>4 daqiqa</span>
            </div>
            <h3 className="survey-title" style={{ fontFamily: 'var(--font-display)', fontSize: 'var(--text-base)', fontWeight: '600', lineHeight: '1.3', margin: '0' }}>Onlayn kurslar haqida fikringiz</h3>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '10px' }}>
              <span className="reward-amount" style={{ fontFamily: 'var(--font-display)', fontSize: 'var(--text-lg)', fontWeight: '800', letterSpacing: '-.01em', color: 'var(--mint-700)', fontVariantNumeric: 'tabular-nums' }}>3 500 <span style={{ fontSize: 'var(--text-sm)', fontWeight: '600' }}>so'm</span></span>
              <button type="button" className="btn btn-primary" data-action="start-s-313" style={{ fontFamily: 'var(--font-body)', fontWeight: '600', fontSize: 'var(--text-sm)', padding: '9px 16px', borderRadius: 'var(--radius-md)', border: '1px solid rgba(255,255,255,.6)', background: 'linear-gradient(180deg,var(--mint-500),var(--mint-600))', color: '#fff', cursor: 'pointer', boxShadow: 'var(--glow-mint),inset 0 1px 0 rgba(255,255,255,.35)', transition: 'filter .12s', minHeight: '38px' }} style-hover="filter:brightness(1.08)">Boshlash</button>
            </div>
          </div>
          <div className="survey-card" data-survey="s-314" style={{ background: 'var(--glass)', backdropFilter: 'blur(20px)', WebkitBackdropFilter: 'blur(20px)', border: '1px solid var(--glass-border)', borderRadius: 'var(--radius-lg)', boxShadow: 'var(--shadow-glass),var(--glass-inner)', padding: '16px', display: 'flex', flexDirection: 'column', gap: '10px' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '10px' }}>
              <span className="category-badge" style={{ display: 'inline-flex', fontSize: 'var(--text-xs)', fontWeight: '600', padding: '3px 10px', borderRadius: 'var(--radius-pill)', background: 'var(--mint-glass)', border: '1px solid var(--mint-glass-border)', color: 'var(--mint-700)' }}>Sog'liq va sport</span>
              <span className="survey-duration" style={{ fontSize: 'var(--text-xs)', color: 'var(--ink-mid)', fontVariantNumeric: 'tabular-nums' }}>4 daqiqa</span>
            </div>
            <h3 className="survey-title" style={{ fontFamily: 'var(--font-display)', fontSize: 'var(--text-base)', fontWeight: '600', lineHeight: '1.3', margin: '0' }}>Sport zallar va mashg'ulot odatlari</h3>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '10px' }}>
              <span className="reward-amount" style={{ fontFamily: 'var(--font-display)', fontSize: 'var(--text-lg)', fontWeight: '800', letterSpacing: '-.01em', color: 'var(--mint-700)', fontVariantNumeric: 'tabular-nums' }}>5 000 <span style={{ fontSize: 'var(--text-sm)', fontWeight: '600' }}>so'm</span></span>
              <button type="button" className="btn btn-primary" data-action="start-s-314" style={{ fontFamily: 'var(--font-body)', fontWeight: '600', fontSize: 'var(--text-sm)', padding: '9px 16px', borderRadius: 'var(--radius-md)', border: '1px solid rgba(255,255,255,.6)', background: 'linear-gradient(180deg,var(--mint-500),var(--mint-600))', color: '#fff', cursor: 'pointer', boxShadow: 'var(--glow-mint),inset 0 1px 0 rgba(255,255,255,.35)', transition: 'filter .12s', minHeight: '38px' }} style-hover="filter:brightness(1.08)">Boshlash</button>
            </div>
          </div>
        </section>
      </div>
    </div>
  </main>
</div>

<nav className="app-tabbar" aria-label="Asosiy (mobil)" style={{ position: 'fixed', left: '0', right: '0', bottom: '0', zIndex: '10', justifyContent: 'space-around', alignItems: 'stretch', background: 'rgba(255,255,255,.7)', backdropFilter: 'blur(20px)', WebkitBackdropFilter: 'blur(20px)', borderTop: '1px solid var(--glass-border)', boxShadow: '0 -4px 16px rgba(27,60,50,.08)', padding: '6px 4px calc(6px + env(safe-area-inset-bottom))' }}>
  <a href="#" id="tab-home" className="tab-link is-active" aria-current="page" style={{ flex: '1', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '2px', padding: '6px 4px', borderRadius: 'var(--radius-md)', fontSize: '10px', fontWeight: '600', color: 'var(--mint-700)', minHeight: '44px', boxSizing: 'border-box', justifyContent: 'center' }}>
    <svg width={20} height={20} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M4 11l8-7 8 7v9a1 1 0 01-1 1h-4v-6h-6v6H5a1 1 0 01-1-1z"></path></svg>
    Bosh sahifa</a>
  <a href="#" id="tab-surveys" className="tab-link" style={{ flex: '1', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '2px', padding: '6px 4px', borderRadius: 'var(--radius-md)', fontSize: '10px', fontWeight: '500', color: 'var(--ink-mid)', minHeight: '44px', boxSizing: 'border-box', justifyContent: 'center' }}>
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
