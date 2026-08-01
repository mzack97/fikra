// AUTO-GENERATED from the Phase 1 design export by tools/convert.py
// Static render of the design. Logic is added in the build phase.
// {/* BIND: x */} markers show where the design expected dynamic data.
// Re-runnable: regenerate after a design change, then re-apply logic.

export default function CreatorDashboard() {
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
      <a href="#" id="side-home" className="side-link is-active" aria-current="page" style={{ display: 'flex', alignItems: 'center', gap: '12px', padding: '11px 12px', borderRadius: 'var(--radius-md)', fontSize: 'var(--text-sm)', fontWeight: '600', color: 'var(--mint-700)', background: 'var(--mint-glass)', border: '1px solid var(--mint-glass-border)' }}>
        <svg width={18} height={18} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M4 11l8-7 8 7v9a1 1 0 01-1 1h-4v-6h-6v6H5a1 1 0 01-1-1z"></path></svg>
        Bosh sahifa</a>
      <a href="#" id="side-surveys" className="side-link" style={{ display: 'flex', alignItems: 'center', gap: '12px', padding: '11px 12px', borderRadius: 'var(--radius-md)', fontSize: 'var(--text-sm)', fontWeight: '500', color: 'var(--ink-mid)', border: '1px solid transparent' }} style-hover="background:var(--glass);color:var(--ink)">
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
    <div className="page-head" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '16px', flexWrap: 'wrap', marginBottom: '20px' }}>
      <h1 style={{ fontFamily: 'var(--font-display)', fontSize: 'var(--text-2xl)', fontWeight: '700', letterSpacing: '-.01em', margin: '0' }}>Boshqaruv paneli</h1>
      <button type="button" id="btn-create-survey" className="btn btn-primary" style={{ fontFamily: 'var(--font-body)', fontWeight: '600', fontSize: 'var(--text-base)', padding: '11px 22px', borderRadius: 'var(--radius-md)', border: '1px solid rgba(255,255,255,.6)', background: 'linear-gradient(180deg,var(--mint-500),var(--mint-600))', color: '#fff', cursor: 'pointer', display: 'inline-flex', alignItems: 'center', gap: '8px', boxShadow: 'var(--glow-mint),inset 0 1px 0 rgba(255,255,255,.35)', transition: 'filter .12s' }} style-hover="filter:brightness(1.08)">
        <svg width={16} height={16} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" aria-hidden="true"><path d="M12 5v14M5 12h14"></path></svg>
        So'rovnoma yaratish</button>
    </div>

    <div className="stat-row" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(200px,1fr))', gap: '14px', marginBottom: '24px' }}>
      <div className="stat-card" data-stat="balance" style={{ background: 'var(--glass)', backdropFilter: 'blur(20px)', WebkitBackdropFilter: 'blur(20px)', border: '1px solid var(--glass-border)', borderRadius: 'var(--radius-lg)', boxShadow: 'var(--shadow-glass),var(--glass-inner)', padding: '18px 20px' }}>
        <div className="stat-label" style={{ fontSize: 'var(--text-xs)', fontWeight: '600', color: 'var(--ink-mid)', letterSpacing: '.03em', marginBottom: '8px' }}>Balans</div>
        <div className="stat-value" style={{ fontFamily: 'var(--font-display)', fontSize: 'var(--text-xl)', fontWeight: '700', letterSpacing: '-.01em', color: 'var(--mint-700)', fontVariantNumeric: 'tabular-nums', lineHeight: '1.1' }}>3 750 000 <span style={{ fontSize: 'var(--text-sm)', fontWeight: '600', color: 'var(--ink-mid)' }}>so'm</span></div>
        <div className="stat-delta" style={{ fontSize: 'var(--text-xs)', color: 'var(--ink-mid)', marginTop: '6px' }}>oxirgi to'ldirish: 28-iyul</div>
      </div>
      <div className="stat-card" data-stat="active" style={{ background: 'var(--glass)', backdropFilter: 'blur(20px)', WebkitBackdropFilter: 'blur(20px)', border: '1px solid var(--glass-border)', borderRadius: 'var(--radius-lg)', boxShadow: 'var(--shadow-glass),var(--glass-inner)', padding: '18px 20px' }}>
        <div className="stat-label" style={{ fontSize: 'var(--text-xs)', fontWeight: '600', color: 'var(--ink-mid)', letterSpacing: '.03em', marginBottom: '8px' }}>Faol so'rovnomalar</div>
        <div className="stat-value" style={{ fontFamily: 'var(--font-display)', fontSize: 'var(--text-xl)', fontWeight: '700', fontVariantNumeric: 'tabular-nums', lineHeight: '1.1' }}>2</div>
        <div className="stat-delta" style={{ fontSize: 'var(--text-xs)', color: 'var(--ink-mid)', marginTop: '6px' }}>1 tasi bugun tugaydi</div>
      </div>
      <div className="stat-card" data-stat="responses" style={{ background: 'var(--glass)', backdropFilter: 'blur(20px)', WebkitBackdropFilter: 'blur(20px)', border: '1px solid var(--glass-border)', borderRadius: 'var(--radius-lg)', boxShadow: 'var(--shadow-glass),var(--glass-inner)', padding: '18px 20px' }}>
        <div className="stat-label" style={{ fontSize: 'var(--text-xs)', fontWeight: '600', color: 'var(--ink-mid)', letterSpacing: '.03em', marginBottom: '8px' }}>Yig'ilgan javoblar</div>
        <div className="stat-value" style={{ fontFamily: 'var(--font-display)', fontSize: 'var(--text-xl)', fontWeight: '700', fontVariantNumeric: 'tabular-nums', lineHeight: '1.1' }}>1 847</div>
        <div className="stat-delta is-up" style={{ fontSize: 'var(--text-xs)', fontWeight: '600', color: 'var(--mint-600)', marginTop: '6px' }}>↑ 214 bu hafta</div>
      </div>
      <div className="stat-card" data-stat="avg-time" style={{ background: 'var(--glass)', backdropFilter: 'blur(20px)', WebkitBackdropFilter: 'blur(20px)', border: '1px solid var(--glass-border)', borderRadius: 'var(--radius-lg)', boxShadow: 'var(--shadow-glass),var(--glass-inner)', padding: '18px 20px' }}>
        <div className="stat-label" style={{ fontSize: 'var(--text-xs)', fontWeight: '600', color: 'var(--ink-mid)', letterSpacing: '.03em', marginBottom: '8px' }}>O'rtacha to'ldirish vaqti</div>
        <div className="stat-value" style={{ fontFamily: 'var(--font-display)', fontSize: 'var(--text-xl)', fontWeight: '700', fontVariantNumeric: 'tabular-nums', lineHeight: '1.1' }}>4 daq 12 s</div>
        <div className="stat-delta" style={{ fontSize: 'var(--text-xs)', color: 'var(--ink-mid)', marginTop: '6px' }}>barcha so'rovnomalar bo'yicha</div>
      </div>
    </div>

    <section className="surveys-table-card" data-element="surveys-table" style={{ background: 'var(--glass)', backdropFilter: 'blur(20px)', WebkitBackdropFilter: 'blur(20px)', border: '1px solid var(--glass-border)', borderRadius: 'var(--radius-lg)', boxShadow: 'var(--shadow-glass),var(--glass-inner)', overflow: 'hidden' }}>
      <div className="tabs" role="tablist" aria-label="So'rovnoma filtrlari" style={{ display: 'flex', gap: '4px', padding: '14px 16px 0', borderBottom: '1px solid var(--line)' }}>
        <button type="button" role="tab" id="tab-all" data-tab="all" className="tab" style={{ fontFamily: 'var(--font-body)', fontSize: 'var(--text-sm)', fontWeight: '{{ tabAllW }}', color: '{{ tabAllC }}', background: 'none', border: '0', borderBottom: '2px solid {{ tabAllB }}', padding: '9px 14px', marginBottom: '-1px', cursor: 'pointer' }}>Hammasi <span style={{ fontVariantNumeric: 'tabular-nums', color: 'var(--ink-soft)' }}>8</span></button>
        <button type="button" role="tab" id="tab-active" data-tab="active" className="tab" style={{ fontFamily: 'var(--font-body)', fontSize: 'var(--text-sm)', fontWeight: '{{ tabActiveW }}', color: '{{ tabActiveC }}', background: 'none', border: '0', borderBottom: '2px solid {{ tabActiveB }}', padding: '9px 14px', marginBottom: '-1px', cursor: 'pointer' }}>Faol <span style={{ fontVariantNumeric: 'tabular-nums', color: 'var(--ink-soft)' }}>2</span></button>
        <button type="button" role="tab" id="tab-draft" data-tab="draft" className="tab" style={{ fontFamily: 'var(--font-body)', fontSize: 'var(--text-sm)', fontWeight: '{{ tabDraftW }}', color: '{{ tabDraftC }}', background: 'none', border: '0', borderBottom: '2px solid {{ tabDraftB }}', padding: '9px 14px', marginBottom: '-1px', cursor: 'pointer' }}>Qoralama <span style={{ fontVariantNumeric: 'tabular-nums', color: 'var(--ink-soft)' }}>2</span></button>
        <button type="button" role="tab" id="tab-done" data-tab="done" className="tab" style={{ fontFamily: 'var(--font-body)', fontSize: 'var(--text-sm)', fontWeight: '{{ tabDoneW }}', color: '{{ tabDoneC }}', background: 'none', border: '0', borderBottom: '2px solid {{ tabDoneB }}', padding: '9px 14px', marginBottom: '-1px', cursor: 'pointer' }}>Tugallangan <span style={{ fontVariantNumeric: 'tabular-nums', color: 'var(--ink-soft)' }}>3</span></button>
      </div>
      <div style={{ overflowX: 'auto' }}>
        <table className="data-table" style={{ width: '100%', borderCollapse: 'collapse', fontSize: 'var(--text-sm)', minWidth: '780px' }}>
          <thead><tr style={{ borderBottom: '1px solid var(--line)' }}>
            <th style={{ textAlign: 'left', padding: '11px 16px', fontSize: 'var(--text-xs)', fontWeight: '600', color: 'var(--ink-mid)', letterSpacing: '.03em' }}>nomi</th>
            <th style={{ textAlign: 'left', padding: '11px 12px', fontSize: 'var(--text-xs)', fontWeight: '600', color: 'var(--ink-mid)', letterSpacing: '.03em' }}>holat</th>
            <th style={{ textAlign: 'left', padding: '11px 12px', fontSize: 'var(--text-xs)', fontWeight: '600', color: 'var(--ink-mid)', letterSpacing: '.03em', minWidth: '150px' }}>javoblar</th>
            <th style={{ textAlign: 'right', padding: '11px 12px', fontSize: 'var(--text-xs)', fontWeight: '600', color: 'var(--ink-mid)', letterSpacing: '.03em' }}>mukofot</th>
            <th style={{ textAlign: 'right', padding: '11px 12px', fontSize: 'var(--text-xs)', fontWeight: '600', color: 'var(--ink-mid)', letterSpacing: '.03em' }}>sarflangan</th>
            <th style={{ textAlign: 'left', padding: '11px 12px', fontSize: 'var(--text-xs)', fontWeight: '600', color: 'var(--ink-mid)', letterSpacing: '.03em' }}>sana</th>
            <th style={{ textAlign: 'right', padding: '11px 16px', fontSize: 'var(--text-xs)', fontWeight: '600', color: 'var(--ink-mid)', letterSpacing: '.03em' }}><span style={{ position: 'absolute', width: '1px', height: '1px', overflow: 'hidden', clip: 'rect(0 0 0 0)' }}>amallar</span></th>
          </tr></thead>
          <tbody>
            {/* SC-FOR: sc-for */}
              <tr className="table-row" data-row="[row.id]" style={{ borderBottom: '1px solid var(--line)' }}>
                <td style={{ padding: '12px 16px', fontWeight: '600', maxWidth: '260px' }}>{/* BIND: row.name */}</td>
                <td style={{ padding: '12px 12px' }}><span className="status-badge" style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', fontSize: 'var(--text-xs)', fontWeight: '600', padding: '3px 10px', borderRadius: 'var(--radius-pill)', background: '{{ row.badgeBg }}', border: '1px solid {{ row.badgeBorder }}', color: '{{ row.badgeColor }}', whiteSpace: 'nowrap' }}>{/* BIND: row.statusLabel */}</span></td>
                <td style={{ padding: '12px 12px' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                    <span style={{ fontVariantNumeric: 'tabular-nums', whiteSpace: 'nowrap', minWidth: '72px' }}>{/* BIND: row.progressText */}</span>
                    <div style={{ flex: '1', height: '6px', borderRadius: '3px', background: 'rgba(255,255,255,.7)', boxShadow: 'inset 0 1px 2px rgba(27,60,50,.1)', overflow: 'hidden', minWidth: '48px' }}><div style={{ width: '{{ row.progressPct }}', height: '100%', borderRadius: '3px', background: 'linear-gradient(90deg,var(--mint-500),var(--mint-400))' }}></div></div>
                  </div>
                </td>
                <td style={{ padding: '12px 12px', textAlign: 'right', fontVariantNumeric: 'tabular-nums', whiteSpace: 'nowrap' }}>{/* BIND: row.reward */}</td>
                <td style={{ padding: '12px 12px', textAlign: 'right', fontVariantNumeric: 'tabular-nums', whiteSpace: 'nowrap', fontWeight: '600', color: 'var(--ink)' }}>{/* BIND: row.spent */}</td>
                <td style={{ padding: '12px 12px', color: 'var(--ink-mid)', whiteSpace: 'nowrap', fontVariantNumeric: 'tabular-nums' }}>{/* BIND: row.date */}</td>
                <td style={{ padding: '12px 16px', textAlign: 'right', position: 'relative' }}>
                  <button type="button" className="row-menu-btn" data-action="[row.menuAction]" aria-label="Amallar menyusi" aria-haspopup="menu" style={{ background: 'none', border: '1px solid transparent', borderRadius: 'var(--radius-sm)', padding: '6px', cursor: 'pointer', color: 'var(--ink-mid)', lineHeight: '0' }} style-hover="background:var(--glass);border-color:var(--glass-border)">
                    <svg width={16} height={16} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><circle cx="12" cy="5" r="1.7"></circle><circle cx="12" cy="12" r="1.7"></circle><circle cx="12" cy="19" r="1.7"></circle></svg>
                  </button>
                  {/* SC-IF: sc-if */}
                    <div className="row-menu" role="menu" style={{ position: 'absolute', right: '12px', top: '44px', zIndex: '5', background: 'var(--glass-strong)', backdropFilter: 'blur(24px)', WebkitBackdropFilter: 'blur(24px)', border: '1px solid var(--glass-border)', borderRadius: 'var(--radius-md)', boxShadow: 'var(--shadow-float)', padding: '6px', display: 'flex', flexDirection: 'column', minWidth: '170px' }}>
                      <button type="button" role="menuitem" data-action="menu-view" style={{ fontFamily: 'var(--font-body)', fontSize: 'var(--text-sm)', textAlign: 'left', background: 'none', border: '0', borderRadius: 'var(--radius-sm)', padding: '9px 12px', cursor: 'pointer', color: 'var(--ink)' }} style-hover="background:var(--mint-glass)">Natijalarni ko'rish</button>
                      <button type="button" role="menuitem" data-action="menu-duplicate" style={{ fontFamily: 'var(--font-body)', fontSize: 'var(--text-sm)', textAlign: 'left', background: 'none', border: '0', borderRadius: 'var(--radius-sm)', padding: '9px 12px', cursor: 'pointer', color: 'var(--ink)' }} style-hover="background:var(--mint-glass)">Nusxa olish</button>
                      <button type="button" role="menuitem" data-action="menu-pause" style={{ fontFamily: 'var(--font-body)', fontSize: 'var(--text-sm)', textAlign: 'left', background: 'none', border: '0', borderRadius: 'var(--radius-sm)', padding: '9px 12px', cursor: 'pointer', color: 'var(--ink)' }} style-hover="background:var(--mint-glass)">Pauza qilish</button>
                      <button type="button" role="menuitem" data-action="menu-delete" style={{ fontFamily: 'var(--font-body)', fontSize: 'var(--text-sm)', textAlign: 'left', background: 'none', border: '0', borderRadius: 'var(--radius-sm)', padding: '9px 12px', cursor: 'pointer', color: 'var(--danger)' }} style-hover="background:var(--danger-glass)">O'chirish</button>
                    </div>
                  
                </td>
              </tr>
            
          </tbody>
        </table>
      </div>
    </section>
  </main>
</div>

<nav className="app-tabbar" aria-label="Asosiy (mobil)" style={{ position: 'fixed', left: '0', right: '0', bottom: '0', zIndex: '10', justifyContent: 'space-around', alignItems: 'stretch', background: 'rgba(255,255,255,.7)', backdropFilter: 'blur(20px)', WebkitBackdropFilter: 'blur(20px)', borderTop: '1px solid var(--glass-border)', boxShadow: '0 -4px 16px rgba(27,60,50,.08)', padding: '6px 4px calc(6px + env(safe-area-inset-bottom))' }}>
  <a href="#" id="tab-home" className="tab-link is-active" aria-current="page" style={{ flex: '1', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '2px', padding: '6px 4px', borderRadius: 'var(--radius-md)', fontSize: '10px', fontWeight: '600', color: 'var(--mint-700)', minHeight: '44px', boxSizing: 'border-box', justifyContent: 'center' }}>
    <svg width={20} height={20} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M4 11l8-7 8 7v9a1 1 0 01-1 1h-4v-6h-6v6H5a1 1 0 01-1-1z"></path></svg>
    Bosh sahifa</a>
  <a href="#" id="tab-surveys" className="tab-link" style={{ flex: '1', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '2px', padding: '6px 4px', borderRadius: 'var(--radius-md)', fontSize: '10px', fontWeight: '500', color: 'var(--ink-mid)', minHeight: '44px', boxSizing: 'border-box', justifyContent: 'center' }}>
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
