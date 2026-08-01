// AUTO-GENERATED from the Phase 1 design export by tools/convert.py
// Static render of the design. Logic is added in the build phase.
// {/* BIND: x */} markers show where the design expected dynamic data.
// Re-runnable: regenerate after a design change, then re-apply logic.

export default function DesignSystem() {
  return (
    <>
<div className="ambient" aria-hidden="true" style={{ position: 'fixed', inset: '0', zIndex: '0', pointerEvents: 'none', overflow: 'hidden' }}>
  <div style={{ position: 'absolute', width: '520px', height: '520px', borderRadius: '50%', background: 'radial-gradient(circle,rgba(98,201,163,.4),transparent 70%)', top: '-160px', left: '-120px', filter: 'blur(20px)' }}></div>
  <div style={{ position: 'absolute', width: '460px', height: '460px', borderRadius: '50%', background: 'radial-gradient(circle,rgba(122,170,236,.35),transparent 70%)', top: '30%', right: '-140px', filter: 'blur(24px)' }}></div>
  <div style={{ position: 'absolute', width: '480px', height: '480px', borderRadius: '50%', background: 'radial-gradient(circle,rgba(98,201,163,.3),transparent 70%)', bottom: '-180px', left: '30%', filter: 'blur(24px)' }}></div>
</div>

<header className="app-header" style={{ position: 'sticky', top: '0', zIndex: '10', display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '16px', background: 'rgba(255,255,255,.6)', backdropFilter: 'blur(20px)', WebkitBackdropFilter: 'blur(20px)', borderBottom: '1px solid var(--glass-border)', boxShadow: 'var(--shadow-sm)', padding: '14px 32px' }}>
  <img className="app-logo" src="/logo-full.png" alt="Fikra" style={{ height: '26px', display: 'block' }} />
  <span className="page-context" style={{ fontFamily: 'var(--font-mono)', fontSize: 'var(--text-xs)', color: 'var(--ink-mid)', letterSpacing: '.04em' }}>dizayn tizimi · v2 · muz ustidagi shisha</span>
</header>

<main style={{ position: 'relative', zIndex: '1', maxWidth: '1140px', margin: '0 auto', padding: '48px 32px 96px', display: 'flex', flexDirection: 'column', gap: '64px' }}>

  <section className="ds-intro" style={{ maxWidth: '720px' }}>
    <h1 style={{ fontFamily: 'var(--font-display)', fontSize: 'var(--text-3xl)', fontWeight: '700', lineHeight: '1.1', margin: '0 0 12px', letterSpacing: '-.01em' }}>Fikra dizayn tizimi</h1>
    <p style={{ margin: '0', color: 'var(--ink-mid)', fontSize: 'var(--text-md)' }}>Yorug' sovuq fon, shisha sirtlar, to'q pine raqamlar. Har bir element — tugmadan skeletgacha — shu shisha tilida gaplashadi. Barcha qiymatlar <code style={{ fontFamily: 'var(--font-mono)', fontSize: 'var(--text-sm)', background: 'var(--glass)', border: '1px solid var(--glass-border)', padding: '2px 6px', borderRadius: '6px' }}>:root</code> blokidan.</p>
  </section>

  
  <section className="ds-section" id="palette">
    <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'var(--text-xl)', fontWeight: '700', margin: '0 0 4px' }}>Ranglar</h2>
    <p style={{ margin: '0 0 20px', color: 'var(--ink-mid)', fontSize: 'var(--text-sm)' }}>Uch qatlam: fon yuvindisi, shisha sirtlar, to'q urg'ular. Yashil — pul va harakat; muz-ko'k — faqat ma'lumot.</p>
    <div className="swatch-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill,minmax(150px,1fr))', gap: '12px' }}>
      <div className="swatch" style={{ background: 'var(--glass)', backdropFilter: 'blur(20px)', WebkitBackdropFilter: 'blur(20px)', border: '1px solid var(--glass-border)', borderRadius: 'var(--radius-md)', overflow: 'hidden', boxShadow: 'var(--shadow-sm)' }}><div style={{ height: '64px', background: 'linear-gradient(140deg,var(--bg-a),var(--bg-b),var(--bg-c))' }}></div><div style={{ padding: '10px 12px' }}><div style={{ fontFamily: 'var(--font-mono)', fontSize: 'var(--text-xs)' }}>--bg-a·b·c</div><div style={{ fontSize: 'var(--text-xs)', color: 'var(--ink-mid)' }}>fon yuvindisi</div></div></div>
      <div className="swatch" style={{ background: 'var(--glass)', backdropFilter: 'blur(20px)', WebkitBackdropFilter: 'blur(20px)', border: '1px solid var(--glass-border)', borderRadius: 'var(--radius-md)', overflow: 'hidden', boxShadow: 'var(--shadow-sm)' }}><div style={{ height: '64px', background: 'rgba(255,255,255,.55)', borderBottom: '1px solid var(--line)' }}></div><div style={{ padding: '10px 12px' }}><div style={{ fontFamily: 'var(--font-mono)', fontSize: 'var(--text-xs)' }}>--glass</div><div style={{ fontSize: 'var(--text-xs)', color: 'var(--ink-mid)' }}>white 55% + blur</div></div></div>
      <div className="swatch" style={{ background: 'var(--glass)', backdropFilter: 'blur(20px)', WebkitBackdropFilter: 'blur(20px)', border: '1px solid var(--glass-border)', borderRadius: 'var(--radius-md)', overflow: 'hidden', boxShadow: 'var(--shadow-sm)' }}><div style={{ height: '64px', background: 'rgba(255,255,255,.78)', borderBottom: '1px solid var(--line)' }}></div><div style={{ padding: '10px 12px' }}><div style={{ fontFamily: 'var(--font-mono)', fontSize: 'var(--text-xs)' }}>--glass-strong</div><div style={{ fontSize: 'var(--text-xs)', color: 'var(--ink-mid)' }}>white 78% · modal</div></div></div>
      <div className="swatch" style={{ background: 'var(--glass)', backdropFilter: 'blur(20px)', WebkitBackdropFilter: 'blur(20px)', border: '1px solid var(--glass-border)', borderRadius: 'var(--radius-md)', overflow: 'hidden', boxShadow: 'var(--shadow-sm)' }}><div style={{ height: '64px', background: 'var(--mint-700)' }}></div><div style={{ padding: '10px 12px' }}><div style={{ fontFamily: 'var(--font-mono)', fontSize: 'var(--text-xs)' }}>--mint-700</div><div style={{ fontSize: 'var(--text-xs)', color: 'var(--ink-mid)' }}>#0E5E44 · pul, raqamlar</div></div></div>
      <div className="swatch" style={{ background: 'var(--glass)', backdropFilter: 'blur(20px)', WebkitBackdropFilter: 'blur(20px)', border: '1px solid var(--glass-border)', borderRadius: 'var(--radius-md)', overflow: 'hidden', boxShadow: 'var(--shadow-sm)' }}><div style={{ height: '64px', background: 'var(--mint-600)' }}></div><div style={{ padding: '10px 12px' }}><div style={{ fontFamily: 'var(--font-mono)', fontSize: 'var(--text-xs)' }}>--mint-600</div><div style={{ fontSize: 'var(--text-xs)', color: 'var(--ink-mid)' }}>#188563 · asosiy tugma</div></div></div>
      <div className="swatch" style={{ background: 'var(--glass)', backdropFilter: 'blur(20px)', WebkitBackdropFilter: 'blur(20px)', border: '1px solid var(--glass-border)', borderRadius: 'var(--radius-md)', overflow: 'hidden', boxShadow: 'var(--shadow-sm)' }}><div style={{ height: '64px', background: 'var(--mint-500)' }}></div><div style={{ padding: '10px 12px' }}><div style={{ fontFamily: 'var(--font-mono)', fontSize: 'var(--text-xs)' }}>--mint-500</div><div style={{ fontSize: 'var(--text-xs)', color: 'var(--ink-mid)' }}>#2FB185 · fokus, gradient</div></div></div>
      <div className="swatch" style={{ background: 'var(--glass)', backdropFilter: 'blur(20px)', WebkitBackdropFilter: 'blur(20px)', border: '1px solid var(--glass-border)', borderRadius: 'var(--radius-md)', overflow: 'hidden', boxShadow: 'var(--shadow-sm)' }}><div style={{ height: '64px', background: 'var(--mint-400)' }}></div><div style={{ padding: '10px 12px' }}><div style={{ fontFamily: 'var(--font-mono)', fontSize: 'var(--text-xs)' }}>--mint-400</div><div style={{ fontSize: 'var(--text-xs)', color: 'var(--ink-mid)' }}>#62C9A3 · logo yashili</div></div></div>
      <div className="swatch" style={{ background: 'var(--glass)', backdropFilter: 'blur(20px)', WebkitBackdropFilter: 'blur(20px)', border: '1px solid var(--glass-border)', borderRadius: 'var(--radius-md)', overflow: 'hidden', boxShadow: 'var(--shadow-sm)' }}><div style={{ height: '64px', background: 'var(--ink)' }}></div><div style={{ padding: '10px 12px' }}><div style={{ fontFamily: 'var(--font-mono)', fontSize: 'var(--text-xs)' }}>--ink</div><div style={{ fontSize: 'var(--text-xs)', color: 'var(--ink-mid)' }}>#1B2226 · asosiy matn</div></div></div>
      <div className="swatch" style={{ background: 'var(--glass)', backdropFilter: 'blur(20px)', WebkitBackdropFilter: 'blur(20px)', border: '1px solid var(--glass-border)', borderRadius: 'var(--radius-md)', overflow: 'hidden', boxShadow: 'var(--shadow-sm)' }}><div style={{ height: '64px', background: 'var(--ink-mid)' }}></div><div style={{ padding: '10px 12px' }}><div style={{ fontFamily: 'var(--font-mono)', fontSize: 'var(--text-xs)' }}>--ink-mid</div><div style={{ fontSize: 'var(--text-xs)', color: 'var(--ink-mid)' }}>#54666E · ikkilamchi</div></div></div>
      <div className="swatch" style={{ background: 'var(--glass)', backdropFilter: 'blur(20px)', WebkitBackdropFilter: 'blur(20px)', border: '1px solid var(--glass-border)', borderRadius: 'var(--radius-md)', overflow: 'hidden', boxShadow: 'var(--shadow-sm)' }}><div style={{ height: '64px', background: 'var(--ink-soft)' }}></div><div style={{ padding: '10px 12px' }}><div style={{ fontFamily: 'var(--font-mono)', fontSize: 'var(--text-xs)' }}>--ink-soft</div><div style={{ fontSize: 'var(--text-xs)', color: 'var(--ink-mid)' }}>#8DA0A8 · sokin</div></div></div>
      <div className="swatch" style={{ background: 'var(--glass)', backdropFilter: 'blur(20px)', WebkitBackdropFilter: 'blur(20px)', border: '1px solid var(--glass-border)', borderRadius: 'var(--radius-md)', overflow: 'hidden', boxShadow: 'var(--shadow-sm)' }}><div style={{ height: '64px', background: 'var(--blue-deep)' }}></div><div style={{ padding: '10px 12px' }}><div style={{ fontFamily: 'var(--font-mono)', fontSize: 'var(--text-xs)' }}>--blue-deep</div><div style={{ fontSize: 'var(--text-xs)', color: 'var(--ink-mid)' }}>#3D6FB4 · yakunlangan</div></div></div>
      <div className="swatch" style={{ background: 'var(--glass)', backdropFilter: 'blur(20px)', WebkitBackdropFilter: 'blur(20px)', border: '1px solid var(--glass-border)', borderRadius: 'var(--radius-md)', overflow: 'hidden', boxShadow: 'var(--shadow-sm)' }}><div style={{ height: '64px', background: 'var(--ice-blue)' }}></div><div style={{ padding: '10px 12px' }}><div style={{ fontFamily: 'var(--font-mono)', fontSize: 'var(--text-xs)' }}>--ice-blue</div><div style={{ fontSize: 'var(--text-xs)', color: 'var(--ink-mid)' }}>#7AAAEC · fon shari</div></div></div>
      <div className="swatch" style={{ background: 'var(--glass)', backdropFilter: 'blur(20px)', WebkitBackdropFilter: 'blur(20px)', border: '1px solid var(--glass-border)', borderRadius: 'var(--radius-md)', overflow: 'hidden', boxShadow: 'var(--shadow-sm)' }}><div style={{ height: '64px', background: 'var(--amber)' }}></div><div style={{ padding: '10px 12px' }}><div style={{ fontFamily: 'var(--font-mono)', fontSize: 'var(--text-xs)' }}>--amber</div><div style={{ fontSize: 'var(--text-xs)', color: 'var(--ink-mid)' }}>#A8731C · pauza</div></div></div>
      <div className="swatch" style={{ background: 'var(--glass)', backdropFilter: 'blur(20px)', WebkitBackdropFilter: 'blur(20px)', border: '1px solid var(--glass-border)', borderRadius: 'var(--radius-md)', overflow: 'hidden', boxShadow: 'var(--shadow-sm)' }}><div style={{ height: '64px', background: 'var(--danger)' }}></div><div style={{ padding: '10px 12px' }}><div style={{ fontFamily: 'var(--font-mono)', fontSize: 'var(--text-xs)' }}>--danger</div><div style={{ fontSize: 'var(--text-xs)', color: 'var(--ink-mid)' }}>#CC4257 · xavf</div></div></div>
    </div>
  </section>

  
  <section className="ds-section" id="type">
    <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'var(--text-xl)', fontWeight: '700', margin: '0 0 4px' }}>Tipografika</h2>
    <p style={{ margin: '0 0 20px', color: 'var(--ink-mid)', fontSize: 'var(--text-sm)' }}>Sarlavhalar — <strong>Schibsted Grotesk</strong>. Matn va raqamlar — <strong>IBM Plex Sans</strong> (tabular raqamlar). Token nomlari — IBM Plex Mono. Katta summalar to'q pine rangda.</p>
    <div className="type-scale" style={{ background: 'var(--glass)', backdropFilter: 'blur(20px)', WebkitBackdropFilter: 'blur(20px)', border: '1px solid var(--glass-border)', borderRadius: 'var(--radius-lg)', boxShadow: 'var(--shadow-glass),var(--glass-inner)', padding: '28px 32px', display: 'flex', flexDirection: 'column', gap: '20px' }}>
      <div style={{ display: 'flex', alignItems: 'baseline', gap: '24px', flexWrap: 'wrap' }}><span style={{ fontFamily: 'var(--font-mono)', fontSize: 'var(--text-xs)', color: 'var(--ink-soft)', width: '130px', flex: 'none' }}>--text-display 52</span><span style={{ fontFamily: 'var(--font-display)', fontSize: 'var(--text-display)', fontWeight: '800', letterSpacing: '-.02em', lineHeight: '1.05', color: 'var(--mint-700)', fontVariantNumeric: 'tabular-nums' }}>1 250 000 so'm</span></div>
      <div style={{ display: 'flex', alignItems: 'baseline', gap: '24px', flexWrap: 'wrap' }}><span style={{ fontFamily: 'var(--font-mono)', fontSize: 'var(--text-xs)', color: 'var(--ink-soft)', width: '130px', flex: 'none' }}>--text-3xl 41</span><span style={{ fontFamily: 'var(--font-display)', fontSize: 'var(--text-3xl)', fontWeight: '700', letterSpacing: '-.015em', lineHeight: '1.1' }}>Fikringiz — daromadingiz</span></div>
      <div style={{ display: 'flex', alignItems: 'baseline', gap: '24px', flexWrap: 'wrap' }}><span style={{ fontFamily: 'var(--font-mono)', fontSize: 'var(--text-xs)', color: 'var(--ink-soft)', width: '130px', flex: 'none' }}>--text-2xl 33</span><span style={{ fontFamily: 'var(--font-display)', fontSize: 'var(--text-2xl)', fontWeight: '700', letterSpacing: '-.01em' }}>Auditoriyani tanlang</span></div>
      <div style={{ display: 'flex', alignItems: 'baseline', gap: '24px', flexWrap: 'wrap' }}><span style={{ fontFamily: 'var(--font-mono)', fontSize: 'var(--text-xs)', color: 'var(--ink-soft)', width: '130px', flex: 'none' }}>--text-xl 26</span><span style={{ fontFamily: 'var(--font-display)', fontSize: 'var(--text-xl)', fontWeight: '700' }}>Bo'lim sarlavhasi</span></div>
      <div style={{ display: 'flex', alignItems: 'baseline', gap: '24px', flexWrap: 'wrap' }}><span style={{ fontFamily: 'var(--font-mono)', fontSize: 'var(--text-xs)', color: 'var(--ink-soft)', width: '130px', flex: 'none' }}>--text-lg 21</span><span style={{ fontFamily: 'var(--font-display)', fontSize: 'var(--text-lg)', fontWeight: '600' }}>Karta sarlavhasi</span></div>
      <div style={{ display: 'flex', alignItems: 'baseline', gap: '24px', flexWrap: 'wrap' }}><span style={{ fontFamily: 'var(--font-mono)', fontSize: 'var(--text-xs)', color: 'var(--ink-soft)', width: '130px', flex: 'none' }}>--text-md 17</span><span style={{ fontSize: 'var(--text-md)' }}>Kirish matni — muhim abzatslar uchun</span></div>
      <div style={{ display: 'flex', alignItems: 'baseline', gap: '24px', flexWrap: 'wrap' }}><span style={{ fontFamily: 'var(--font-mono)', fontSize: 'var(--text-xs)', color: 'var(--ink-soft)', width: '130px', flex: 'none' }}>--text-base 15</span><span style={{ fontSize: 'var(--text-base)' }}>Asosiy matn — interfeys shu o'lchamda yoziladi</span></div>
      <div style={{ display: 'flex', alignItems: 'baseline', gap: '24px', flexWrap: 'wrap' }}><span style={{ fontFamily: 'var(--font-mono)', fontSize: 'var(--text-xs)', color: 'var(--ink-soft)', width: '130px', flex: 'none' }}>--text-sm 13</span><span style={{ fontSize: 'var(--text-sm)', color: 'var(--ink-mid)' }}>Yordamchi matn, izohlar, jadval sarlavhalari</span></div>
      <div style={{ display: 'flex', alignItems: 'baseline', gap: '24px', flexWrap: 'wrap' }}><span style={{ fontFamily: 'var(--font-mono)', fontSize: 'var(--text-xs)', color: 'var(--ink-soft)', width: '130px', flex: 'none' }}>--text-xs 12</span><span style={{ fontSize: 'var(--text-xs)', color: 'var(--ink-mid)', letterSpacing: '.02em' }}>Yorliqlar, badge, metama'lumot</span></div>
    </div>
  </section>

  
  <section className="ds-section" id="buttons">
    <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'var(--text-xl)', fontWeight: '700', margin: '0 0 4px' }}>Tugmalar</h2>
    <p style={{ margin: '0 0 20px', color: 'var(--ink-mid)', fontSize: 'var(--text-sm)' }}>Asosiy tugma — mint gradient, ichki yorug' qirra va yumshoq nur. Ikkilamchi — shishaning o'zi.</p>
    <div className="button-matrix" style={{ background: 'var(--glass)', backdropFilter: 'blur(20px)', WebkitBackdropFilter: 'blur(20px)', border: '1px solid var(--glass-border)', borderRadius: 'var(--radius-lg)', boxShadow: 'var(--shadow-glass),var(--glass-inner)', padding: '28px 32px', display: 'grid', gridTemplateColumns: '110px repeat(4,auto)', gap: '18px 28px', alignItems: 'center', justifyContent: 'start', overflowX: 'auto' }}>
      <span></span>
      <span style={{ fontFamily: 'var(--font-mono)', fontSize: 'var(--text-xs)', color: 'var(--ink-soft)' }}>default</span>
      <span style={{ fontFamily: 'var(--font-mono)', fontSize: 'var(--text-xs)', color: 'var(--ink-soft)' }}>hover</span>
      <span style={{ fontFamily: 'var(--font-mono)', fontSize: 'var(--text-xs)', color: 'var(--ink-soft)' }}>loading</span>
      <span style={{ fontFamily: 'var(--font-mono)', fontSize: 'var(--text-xs)', color: 'var(--ink-soft)' }}>disabled</span>

      <span style={{ fontSize: 'var(--text-sm)', color: 'var(--ink-mid)' }}>primary</span>
      <button type="button" id="btn-primary" className="btn btn-primary" style={{ fontFamily: 'var(--font-body)', fontWeight: '600', fontSize: 'var(--text-base)', padding: '10px 20px', borderRadius: 'var(--radius-md)', border: '1px solid rgba(255,255,255,.6)', background: 'linear-gradient(180deg,var(--mint-500),var(--mint-600))', color: '#fff', cursor: 'pointer', boxShadow: 'var(--glow-mint),inset 0 1px 0 rgba(255,255,255,.35)', transition: 'filter .12s' }} style-hover="filter:brightness(1.08)">So'rovnoma yaratish</button>
      <button type="button" className="btn btn-primary is-hover" style={{ fontFamily: 'var(--font-body)', fontWeight: '600', fontSize: 'var(--text-base)', padding: '10px 20px', borderRadius: 'var(--radius-md)', border: '1px solid rgba(255,255,255,.6)', background: 'linear-gradient(180deg,var(--mint-500),var(--mint-600))', color: '#fff', cursor: 'pointer', boxShadow: 'var(--glow-mint),inset 0 1px 0 rgba(255,255,255,.35)', filter: 'brightness(1.08)' }}>So'rovnoma yaratish</button>
      <button type="button" className="btn btn-primary is-loading" disabled style={{ fontFamily: 'var(--font-body)', fontWeight: '600', fontSize: 'var(--text-base)', padding: '10px 20px', borderRadius: 'var(--radius-md)', border: '1px solid rgba(255,255,255,.6)', background: 'linear-gradient(180deg,var(--mint-500),var(--mint-600))', color: '#fff', display: 'inline-flex', alignItems: 'center', gap: '8px', cursor: 'wait', boxShadow: 'var(--glow-mint),inset 0 1px 0 rgba(255,255,255,.35)' }}><span className="btn-spinner" style={{ width: '14px', height: '14px', border: '2px solid rgba(255,255,255,.35)', borderTopColor: '#fff', borderRadius: '50%', animation: 'fikra-spin .7s linear infinite', display: 'inline-block' }}></span>Yuklanmoqda…</button>
      <button type="button" className="btn btn-primary" disabled style={{ fontFamily: 'var(--font-body)', fontWeight: '600', fontSize: 'var(--text-base)', padding: '10px 20px', borderRadius: 'var(--radius-md)', border: '1px solid var(--line)', background: 'var(--glass-soft)', color: 'var(--ink-soft)', cursor: 'not-allowed' }}>So'rovnoma yaratish</button>

      <span style={{ fontSize: 'var(--text-sm)', color: 'var(--ink-mid)' }}>secondary</span>
      <button type="button" id="btn-secondary" className="btn btn-secondary" style={{ fontFamily: 'var(--font-body)', fontWeight: '600', fontSize: 'var(--text-base)', padding: '10px 20px', borderRadius: 'var(--radius-md)', border: '1px solid var(--glass-border)', background: 'var(--glass)', backdropFilter: 'blur(12px)', WebkitBackdropFilter: 'blur(12px)', color: 'var(--ink)', cursor: 'pointer', boxShadow: 'var(--shadow-sm),var(--glass-inner)', transition: 'background .12s' }} style-hover="background:var(--glass-strong)">Qoralama saqlash</button>
      <button type="button" className="btn btn-secondary is-hover" style={{ fontFamily: 'var(--font-body)', fontWeight: '600', fontSize: 'var(--text-base)', padding: '10px 20px', borderRadius: 'var(--radius-md)', border: '1px solid var(--glass-border)', background: 'var(--glass-strong)', backdropFilter: 'blur(12px)', WebkitBackdropFilter: 'blur(12px)', color: 'var(--ink)', cursor: 'pointer', boxShadow: 'var(--shadow-sm),var(--glass-inner)' }}>Qoralama saqlash</button>
      <button type="button" className="btn btn-secondary is-loading" disabled style={{ fontFamily: 'var(--font-body)', fontWeight: '600', fontSize: 'var(--text-base)', padding: '10px 20px', borderRadius: 'var(--radius-md)', border: '1px solid var(--glass-border)', background: 'var(--glass)', color: 'var(--ink-mid)', display: 'inline-flex', alignItems: 'center', gap: '8px', cursor: 'wait', boxShadow: 'var(--shadow-sm),var(--glass-inner)' }}><span className="btn-spinner" style={{ width: '14px', height: '14px', border: '2px solid var(--line)', borderTopColor: 'var(--ink-mid)', borderRadius: '50%', animation: 'fikra-spin .7s linear infinite', display: 'inline-block' }}></span>Yuklanmoqda…</button>
      <button type="button" className="btn btn-secondary" disabled style={{ fontFamily: 'var(--font-body)', fontWeight: '600', fontSize: 'var(--text-base)', padding: '10px 20px', borderRadius: 'var(--radius-md)', border: '1px solid var(--line)', background: 'var(--glass-soft)', color: 'var(--ink-soft)', cursor: 'not-allowed' }}>Qoralama saqlash</button>

      <span style={{ fontSize: 'var(--text-sm)', color: 'var(--ink-mid)' }}>ghost</span>
      <button type="button" id="btn-ghost" className="btn btn-ghost" style={{ fontFamily: 'var(--font-body)', fontWeight: '600', fontSize: 'var(--text-base)', padding: '10px 20px', borderRadius: 'var(--radius-md)', border: '1px solid transparent', background: 'transparent', color: 'var(--ink-mid)', cursor: 'pointer', transition: 'background .12s,color .12s' }} style-hover="background:var(--glass);color:var(--ink)">Bekor qilish</button>
      <button type="button" className="btn btn-ghost is-hover" style={{ fontFamily: 'var(--font-body)', fontWeight: '600', fontSize: 'var(--text-base)', padding: '10px 20px', borderRadius: 'var(--radius-md)', border: '1px solid var(--glass-border)', background: 'var(--glass)', color: 'var(--ink)', cursor: 'pointer' }}>Bekor qilish</button>
      <button type="button" className="btn btn-ghost is-loading" disabled style={{ fontFamily: 'var(--font-body)', fontWeight: '600', fontSize: 'var(--text-base)', padding: '10px 20px', borderRadius: 'var(--radius-md)', border: '1px solid transparent', background: 'transparent', color: 'var(--ink-mid)', display: 'inline-flex', alignItems: 'center', gap: '8px', cursor: 'wait' }}><span className="btn-spinner" style={{ width: '14px', height: '14px', border: '2px solid var(--line)', borderTopColor: 'var(--ink-mid)', borderRadius: '50%', animation: 'fikra-spin .7s linear infinite', display: 'inline-block' }}></span>Yuklanmoqda…</button>
      <button type="button" className="btn btn-ghost" disabled style={{ fontFamily: 'var(--font-body)', fontWeight: '600', fontSize: 'var(--text-base)', padding: '10px 20px', borderRadius: 'var(--radius-md)', border: '1px solid transparent', background: 'transparent', color: 'var(--ink-soft)', cursor: 'not-allowed' }}>Bekor qilish</button>

      <span style={{ fontSize: 'var(--text-sm)', color: 'var(--ink-mid)' }}>danger</span>
      <button type="button" id="btn-danger" className="btn btn-danger" style={{ fontFamily: 'var(--font-body)', fontWeight: '600', fontSize: 'var(--text-base)', padding: '10px 20px', borderRadius: 'var(--radius-md)', border: '1px solid rgba(255,255,255,.55)', background: 'linear-gradient(180deg,var(--danger),var(--danger-deep))', color: '#fff', cursor: 'pointer', boxShadow: '0 6px 16px rgba(204,66,87,.3),inset 0 1px 0 rgba(255,255,255,.3)', transition: 'filter .12s' }} style-hover="filter:brightness(1.08)">So'rovnomani o'chirish</button>
      <button type="button" className="btn btn-danger is-hover" style={{ fontFamily: 'var(--font-body)', fontWeight: '600', fontSize: 'var(--text-base)', padding: '10px 20px', borderRadius: 'var(--radius-md)', border: '1px solid rgba(255,255,255,.55)', background: 'linear-gradient(180deg,var(--danger),var(--danger-deep))', color: '#fff', cursor: 'pointer', boxShadow: '0 6px 16px rgba(204,66,87,.3),inset 0 1px 0 rgba(255,255,255,.3)', filter: 'brightness(1.08)' }}>So'rovnomani o'chirish</button>
      <button type="button" className="btn btn-danger is-loading" disabled style={{ fontFamily: 'var(--font-body)', fontWeight: '600', fontSize: 'var(--text-base)', padding: '10px 20px', borderRadius: 'var(--radius-md)', border: '1px solid rgba(255,255,255,.55)', background: 'linear-gradient(180deg,var(--danger),var(--danger-deep))', color: '#fff', display: 'inline-flex', alignItems: 'center', gap: '8px', cursor: 'wait', boxShadow: '0 6px 16px rgba(204,66,87,.3),inset 0 1px 0 rgba(255,255,255,.3)' }}><span className="btn-spinner" style={{ width: '14px', height: '14px', border: '2px solid rgba(255,255,255,.35)', borderTopColor: '#fff', borderRadius: '50%', animation: 'fikra-spin .7s linear infinite', display: 'inline-block' }}></span>O'chirilmoqda…</button>
      <button type="button" className="btn btn-danger" disabled style={{ fontFamily: 'var(--font-body)', fontWeight: '600', fontSize: 'var(--text-base)', padding: '10px 20px', borderRadius: 'var(--radius-md)', border: '1px solid var(--line)', background: 'var(--glass-soft)', color: 'var(--ink-soft)', cursor: 'not-allowed' }}>So'rovnomani o'chirish</button>
    </div>
  </section>

  
  <section className="ds-section" id="forms">
    <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'var(--text-xl)', fontWeight: '700', margin: '0 0 4px' }}>Forma elementlari</h2>
    <p style={{ margin: '0 0 20px', color: 'var(--ink-mid)', fontSize: 'var(--text-sm)' }}>Maydonlar ham shisha: yarim shaffof oq, fokusda mint halqa.</p>
    <div className="form-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(300px,1fr))', gap: '20px' }}>

      <div className="form-demo" style={{ background: 'var(--glass)', backdropFilter: 'blur(20px)', WebkitBackdropFilter: 'blur(20px)', border: '1px solid var(--glass-border)', borderRadius: 'var(--radius-lg)', boxShadow: 'var(--shadow-glass),var(--glass-inner)', padding: '24px', display: 'flex', flexDirection: 'column', gap: '20px' }}>
        <div className="form-field">
          <label htmlFor="input-name" style={{ display: 'block', fontWeight: '600', fontSize: 'var(--text-sm)', marginBottom: '6px' }}>Ismingiz</label>
          <input id="input-name" type="text" defaultValue="Dilnoza Karimova" style={{ width: '100%', boxSizing: 'border-box', fontFamily: 'var(--font-body)', fontSize: 'var(--text-base)', color: 'var(--ink)', padding: '10px 12px', border: '1px solid var(--line-strong)', borderRadius: 'var(--radius-md)', background: 'rgba(255,255,255,.5)', boxShadow: 'inset 0 1px 2px rgba(27,60,50,.05)' }} />
          <p className="field-help" style={{ margin: '6px 0 0', fontSize: 'var(--text-xs)', color: 'var(--ink-mid)' }}>Pasportdagidek yozing — to'lovlar shu nomga yuboriladi</p>
        </div>
        <div className="form-field has-error">
          <label htmlFor="input-phone" style={{ display: 'block', fontWeight: '600', fontSize: 'var(--text-sm)', marginBottom: '6px' }}>Telefon raqam</label>
          <input id="input-phone" type="tel" defaultValue="+998 90 123 45" aria-invalid="true" aria-describedby="input-phone-error" style={{ width: '100%', boxSizing: 'border-box', fontFamily: 'var(--font-body)', fontSize: 'var(--text-base)', color: 'var(--ink)', padding: '10px 12px', border: '1px solid var(--danger)', borderRadius: 'var(--radius-md)', background: 'rgba(255,255,255,.5)', boxShadow: '0 0 0 3px var(--danger-glass)' }} />
          <p className="field-error" id="input-phone-error" style={{ margin: '6px 0 0', fontSize: 'var(--text-xs)', color: 'var(--danger)', fontWeight: '500' }}>Raqam to'liq emas — 9 ta raqam kiriting</p>
        </div>
        <div className="form-field">
          <label htmlFor="select-region" style={{ display: 'block', fontWeight: '600', fontSize: 'var(--text-sm)', marginBottom: '6px' }}>Viloyat</label>
          <select id="select-region" style={{ width: '100%', boxSizing: 'border-box', fontFamily: 'var(--font-body)', fontSize: 'var(--text-base)', color: 'var(--ink)', padding: '10px 12px', border: '1px solid var(--line-strong)', borderRadius: 'var(--radius-md)', background: 'rgba(255,255,255,.5)' }}>
            <option>Toshkent</option><option>Samarqand</option><option>Farg'ona</option><option>Namangan</option><option>Buxoro</option><option>Andijon</option><option>Xorazm</option>
          </select>
          <p className="field-help" style={{ margin: '6px 0 0', fontSize: 'var(--text-xs)', color: 'var(--ink-mid)' }}>Yashash joyingiz so'rovnomalarni moslashtiradi</p>
        </div>
        <div className="form-field">
          <label htmlFor="textarea-about" style={{ display: 'block', fontWeight: '600', fontSize: 'var(--text-sm)', marginBottom: '6px' }}>Qo'shimcha izoh</label>
          <textarea id="textarea-about" rows={3} style={{ width: '100%', boxSizing: 'border-box', fontFamily: 'var(--font-body)', fontSize: 'var(--text-base)', color: 'var(--ink)', padding: '10px 12px', border: '1px solid var(--line-strong)', borderRadius: 'var(--radius-md)', background: 'rgba(255,255,255,.5)', resize: 'vertical', boxShadow: 'inset 0 1px 2px rgba(27,60,50,.05)' }}>Respondentlarga ko'rsatiladigan qisqa tavsif.</textarea>
          <p className="field-help" style={{ margin: '6px 0 0', fontSize: 'var(--text-xs)', color: 'var(--ink-mid)' }}>Ixtiyoriy, 200 belgigacha</p>
        </div>
      </div>

      <div className="form-demo" style={{ background: 'var(--glass)', backdropFilter: 'blur(20px)', WebkitBackdropFilter: 'blur(20px)', border: '1px solid var(--glass-border)', borderRadius: 'var(--radius-lg)', boxShadow: 'var(--shadow-glass),var(--glass-inner)', padding: '24px', display: 'flex', flexDirection: 'column', gap: '24px' }}>
        <fieldset className="radio-group" style={{ border: '0', padding: '0', margin: '0' }}>
          <legend style={{ fontWeight: '600', fontSize: 'var(--text-sm)', marginBottom: '8px', padding: '0' }}>Jinsingiz</legend>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
            <label style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: 'var(--text-base)', cursor: 'pointer', padding: '8px 12px', borderRadius: 'var(--radius-md)', border: '1px solid var(--mint-glass-border)', background: 'var(--mint-glass)' }}><input type="radio" name="gender" id="radio-female" checked style={{ width: '18px', height: '18px', accentColor: 'var(--mint-600)', margin: '0' }} />Ayol</label>
            <label style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: 'var(--text-base)', cursor: 'pointer', padding: '8px 12px', borderRadius: 'var(--radius-md)', border: '1px solid var(--line)', background: 'rgba(255,255,255,.35)' }}><input type="radio" name="gender" id="radio-male" style={{ width: '18px', height: '18px', accentColor: 'var(--mint-600)', margin: '0' }} />Erkak</label>
            <label style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: 'var(--text-base)', cursor: 'pointer', padding: '8px 12px', borderRadius: 'var(--radius-md)', border: '1px solid var(--line)', background: 'rgba(255,255,255,.35)' }}><input type="radio" name="gender" id="radio-none" style={{ width: '18px', height: '18px', accentColor: 'var(--mint-600)', margin: '0' }} />Aytmayman</label>
          </div>
          <p className="field-help" style={{ margin: '8px 0 0', fontSize: 'var(--text-xs)', color: 'var(--ink-mid)' }}>Tanlangan variant mint shisha bilan belgilanadi</p>
        </fieldset>
        <fieldset className="checkbox-group" style={{ border: '0', padding: '0', margin: '0' }}>
          <legend style={{ fontWeight: '600', fontSize: 'var(--text-sm)', marginBottom: '8px', padding: '0' }}>Qiziqishlaringiz</legend>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
            <label style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: 'var(--text-base)', cursor: 'pointer', padding: '8px 12px', borderRadius: 'var(--radius-md)', border: '1px solid var(--mint-glass-border)', background: 'var(--mint-glass)' }}><input type="checkbox" id="check-fintech" checked style={{ width: '18px', height: '18px', accentColor: 'var(--mint-600)', margin: '0' }} />Bank va moliya ilovalari</label>
            <label style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: 'var(--text-base)', cursor: 'pointer', padding: '8px 12px', borderRadius: 'var(--radius-md)', border: '1px solid var(--mint-glass-border)', background: 'var(--mint-glass)' }}><input type="checkbox" id="check-food" checked style={{ width: '18px', height: '18px', accentColor: 'var(--mint-600)', margin: '0' }} />Yetkazib berish xizmatlari</label>
            <label style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: 'var(--text-base)', cursor: 'pointer', padding: '8px 12px', borderRadius: 'var(--radius-md)', border: '1px solid var(--line)', background: 'rgba(255,255,255,.35)' }}><input type="checkbox" id="check-edu" style={{ width: '18px', height: '18px', accentColor: 'var(--mint-600)', margin: '0' }} />Ta'lim va kurslar</label>
          </div>
          <p className="field-error" style={{ margin: '8px 0 0', fontSize: 'var(--text-xs)', color: 'var(--danger)', fontWeight: '500' }}>Kamida bitta qiziqish tanlang</p>
        </fieldset>
        <div className="form-field range-field">
          <span id="range-age-label" style={{ display: 'block', fontWeight: '600', fontSize: 'var(--text-sm)', marginBottom: '6px' }}>Yosh oralig'i</span>
          <div className="range-dual" data-control="range-age" style={{ position: 'relative', height: '36px', margin: '0 10px' }}>
            <div className="range-track" style={{ position: 'absolute', top: '16px', left: '0', right: '0', height: '5px', borderRadius: '3px', background: 'rgba(255,255,255,.7)', boxShadow: 'inset 0 1px 2px rgba(27,60,50,.12)' }}></div>
            <div className="range-fill" style={{ position: 'absolute', top: '16px', left: '22%', width: '38%', height: '5px', borderRadius: '3px', background: 'linear-gradient(90deg,var(--mint-500),var(--mint-400))', boxShadow: '0 0 8px rgba(47,177,133,.5)' }}></div>
            <button type="button" className="range-handle" id="range-age-min" role="slider" aria-labelledby="range-age-label" aria-valuemin={16} aria-valuemax={65} aria-valuenow={22} style={{ position: 'absolute', top: '7px', left: '22%', transform: 'translateX(-50%)', width: '22px', height: '22px', borderRadius: '50%', background: 'rgba(255,255,255,.9)', backdropFilter: 'blur(6px)', WebkitBackdropFilter: 'blur(6px)', border: '2px solid var(--mint-600)', boxShadow: 'var(--shadow-sm),inset 0 1px 0 #fff', cursor: 'grab', padding: '0' }}></button>
            <button type="button" className="range-handle" id="range-age-max" role="slider" aria-labelledby="range-age-label" aria-valuemin={16} aria-valuemax={65} aria-valuenow={38} style={{ position: 'absolute', top: '7px', left: '60%', transform: 'translateX(-50%)', width: '22px', height: '22px', borderRadius: '50%', background: 'rgba(255,255,255,.9)', backdropFilter: 'blur(6px)', WebkitBackdropFilter: 'blur(6px)', border: '2px solid var(--mint-600)', boxShadow: 'var(--shadow-sm),inset 0 1px 0 #fff', cursor: 'grab', padding: '0' }}></button>
          </div>
          <div style={{ display: 'flex', justifyContent: 'space-between', fontVariantNumeric: 'tabular-nums', fontSize: 'var(--text-sm)', fontWeight: '600', color: 'var(--mint-700)' }}><span>22 yosh</span><span>38 yosh</span></div>
          <p className="field-help" style={{ margin: '6px 0 0', fontSize: 'var(--text-xs)', color: 'var(--ink-mid)' }}>Ikki dastakli slayder — auditoriya tanlashda ishlatiladi</p>
        </div>
      </div>
    </div>
  </section>

  
  <section className="ds-section" id="components">
    <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'var(--text-xl)', fontWeight: '700', margin: '0 0 20px' }}>Komponentlar</h2>
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(320px,1fr))', gap: '20px', alignItems: 'start' }}>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
        <div className="card" style={{ background: 'var(--glass)', backdropFilter: 'blur(20px)', WebkitBackdropFilter: 'blur(20px)', border: '1px solid var(--glass-border)', borderRadius: 'var(--radius-lg)', boxShadow: 'var(--shadow-glass),var(--glass-inner)', padding: '24px' }}>
          <h3 style={{ fontFamily: 'var(--font-display)', fontSize: 'var(--text-lg)', fontWeight: '600', margin: '0 0 6px' }}>Shisha karta</h3>
          <p style={{ margin: '0', color: 'var(--ink-mid)', fontSize: 'var(--text-sm)' }}>Barcha bloklarning asosi: oq 55% + blur, oq qirra, ichki yorug' chiziq, yumshoq soya.</p>
        </div>

        <div className="badge-row" style={{ background: 'var(--glass)', backdropFilter: 'blur(20px)', WebkitBackdropFilter: 'blur(20px)', border: '1px solid var(--glass-border)', borderRadius: 'var(--radius-lg)', boxShadow: 'var(--shadow-glass),var(--glass-inner)', padding: '24px', display: 'flex', flexWrap: 'wrap', gap: '10px', alignItems: 'center' }}>
          <span className="status-badge status-draft" style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', fontSize: 'var(--text-xs)', fontWeight: '600', letterSpacing: '.02em', padding: '4px 11px', borderRadius: 'var(--radius-pill)', background: 'rgba(84,102,110,.1)', border: '1px solid rgba(84,102,110,.22)', color: 'var(--ink-mid)' }}><span style={{ width: '6px', height: '6px', borderRadius: '50%', background: 'var(--ink-mid)' }}></span>qoralama</span>
          <span className="status-badge status-active" style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', fontSize: 'var(--text-xs)', fontWeight: '600', letterSpacing: '.02em', padding: '4px 11px', borderRadius: 'var(--radius-pill)', background: 'var(--mint-glass)', border: '1px solid var(--mint-glass-border)', color: 'var(--mint-700)' }}><span style={{ width: '6px', height: '6px', borderRadius: '50%', background: 'var(--mint-600)', boxShadow: '0 0 6px rgba(24,133,99,.6)' }}></span>faol</span>
          <span className="status-badge status-completed" style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', fontSize: 'var(--text-xs)', fontWeight: '600', letterSpacing: '.02em', padding: '4px 11px', borderRadius: 'var(--radius-pill)', background: 'var(--blue-glass)', border: '1px solid var(--blue-glass-border)', color: 'var(--blue-deep)' }}><span style={{ width: '6px', height: '6px', borderRadius: '50%', background: 'var(--blue-deep)' }}></span>yakunlangan</span>
          <span className="status-badge status-paused" style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', fontSize: 'var(--text-xs)', fontWeight: '600', letterSpacing: '.02em', padding: '4px 11px', borderRadius: 'var(--radius-pill)', background: 'var(--amber-glass)', border: '1px solid var(--amber-glass-border)', color: 'var(--amber)' }}><span style={{ width: '6px', height: '6px', borderRadius: '50%', background: 'var(--amber)' }}></span>pauzada</span>
        </div>

        <div className="progress-demo card" style={{ background: 'var(--glass)', backdropFilter: 'blur(20px)', WebkitBackdropFilter: 'blur(20px)', border: '1px solid var(--glass-border)', borderRadius: 'var(--radius-lg)', boxShadow: 'var(--shadow-glass),var(--glass-inner)', padding: '24px' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: '8px' }}>
            <span style={{ fontSize: 'var(--text-sm)', fontWeight: '600' }}>Yig'ilgan javoblar</span>
            <span style={{ fontSize: 'var(--text-sm)', color: 'var(--ink-mid)', fontVariantNumeric: 'tabular-nums' }}>342 / 500</span>
          </div>
          <div className="progress-bar" role="progressbar" aria-valuenow={342} aria-valuemin={0} aria-valuemax={500} style={{ height: '9px', borderRadius: '5px', background: 'rgba(255,255,255,.7)', boxShadow: 'inset 0 1px 2px rgba(27,60,50,.12)', overflow: 'hidden' }}>
            <div className="progress-fill" style={{ width: '68%', height: '100%', borderRadius: '5px', background: 'linear-gradient(90deg,var(--mint-500),var(--mint-400))', boxShadow: '0 0 10px rgba(47,177,133,.55)' }}></div>
          </div>
        </div>

        <div className="toast" role="status" style={{ background: 'rgba(27,34,38,.82)', backdropFilter: 'blur(16px)', WebkitBackdropFilter: 'blur(16px)', border: '1px solid rgba(255,255,255,.14)', color: '#fff', borderRadius: 'var(--radius-md)', padding: '14px 18px', display: 'flex', alignItems: 'center', gap: '12px', boxShadow: 'var(--shadow-float)' }}>
          <span className="toast-icon" style={{ width: '22px', height: '22px', borderRadius: '50%', background: 'linear-gradient(180deg,var(--mint-400),var(--mint-500))', color: '#06231A', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', fontSize: '13px', fontWeight: '700', flex: 'none', boxShadow: '0 0 10px rgba(98,201,163,.6)' }}>✓</span>
          <div style={{ flex: '1' }}><div style={{ fontWeight: '600', fontSize: 'var(--text-sm)' }}>So'rovnoma e'lon qilindi</div><div style={{ fontSize: 'var(--text-xs)', color: 'rgba(255,255,255,.65)' }}>Birinchi javoblar odatda 10 daqiqada keladi</div></div>
          <button type="button" className="toast-close" data-action="toast-close" style={{ background: 'none', border: '0', color: 'rgba(255,255,255,.55)', fontSize: '16px', cursor: 'pointer', padding: '4px', lineHeight: '1' }}>✕</button>
        </div>

        <div className="skeleton-card card" aria-hidden="true" style={{ background: 'var(--glass)', backdropFilter: 'blur(20px)', WebkitBackdropFilter: 'blur(20px)', border: '1px solid var(--glass-border)', borderRadius: 'var(--radius-lg)', boxShadow: 'var(--shadow-glass),var(--glass-inner)', padding: '24px', display: 'flex', flexDirection: 'column', gap: '12px' }}>
          <div className="skeleton" style={{ height: '14px', width: '40%', borderRadius: '6px', background: 'linear-gradient(90deg,rgba(255,255,255,.5) 25%,rgba(210,225,222,.9) 50%,rgba(255,255,255,.5) 75%)', backgroundSize: '200% 100%', animation: 'fikra-shimmer 1.4s linear infinite' }}></div>
          <div className="skeleton" style={{ height: '22px', width: '85%', borderRadius: '6px', background: 'linear-gradient(90deg,rgba(255,255,255,.5) 25%,rgba(210,225,222,.9) 50%,rgba(255,255,255,.5) 75%)', backgroundSize: '200% 100%', animation: 'fikra-shimmer 1.4s linear infinite' }}></div>
          <div className="skeleton" style={{ height: '14px', width: '65%', borderRadius: '6px', background: 'linear-gradient(90deg,rgba(255,255,255,.5) 25%,rgba(210,225,222,.9) 50%,rgba(255,255,255,.5) 75%)', backgroundSize: '200% 100%', animation: 'fikra-shimmer 1.4s linear infinite' }}></div>
          <div style={{ display: 'flex', gap: '10px', marginTop: '4px' }}>
            <div className="skeleton" style={{ height: '34px', width: '110px', borderRadius: 'var(--radius-md)', background: 'linear-gradient(90deg,rgba(255,255,255,.5) 25%,rgba(210,225,222,.9) 50%,rgba(255,255,255,.5) 75%)', backgroundSize: '200% 100%', animation: 'fikra-shimmer 1.4s linear infinite' }}></div>
            <div className="skeleton" style={{ height: '34px', width: '70px', borderRadius: 'var(--radius-md)', background: 'linear-gradient(90deg,rgba(255,255,255,.5) 25%,rgba(210,225,222,.9) 50%,rgba(255,255,255,.5) 75%)', backgroundSize: '200% 100%', animation: 'fikra-shimmer 1.4s linear infinite' }}></div>
          </div>
        </div>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
        <div className="tabs-demo card" style={{ background: 'var(--glass)', backdropFilter: 'blur(20px)', WebkitBackdropFilter: 'blur(20px)', border: '1px solid var(--glass-border)', borderRadius: 'var(--radius-lg)', boxShadow: 'var(--shadow-glass),var(--glass-inner)', padding: '24px' }}>
          <div className="tabs" role="tablist" aria-label="So'rovnoma bo'limlari" style={{ display: 'flex', gap: '4px', background: 'rgba(255,255,255,.4)', border: '1px solid var(--glass-border)', borderRadius: 'var(--radius-pill)', padding: '4px', marginBottom: '16px', boxShadow: 'inset 0 1px 3px rgba(27,60,50,.08)' }}>
            <button type="button" role="tab" id="tab-overview" data-tab="overview" className="tab" style={{ flex: '1', fontFamily: 'var(--font-body)', fontSize: 'var(--text-sm)', fontWeight: '{{ tabOverviewWeight }}', color: '{{ tabOverviewColor }}', background: '{{ tabOverviewBg }}', border: '0', borderRadius: 'var(--radius-pill)', padding: '8px 14px', cursor: 'pointer', boxShadow: '{{ tabOverviewShadow }}', transition: 'background .15s' }}>Umumiy</button>
            <button type="button" role="tab" id="tab-answers" data-tab="answers" className="tab" style={{ flex: '1', fontFamily: 'var(--font-body)', fontSize: 'var(--text-sm)', fontWeight: '{{ tabAnswersWeight }}', color: '{{ tabAnswersColor }}', background: '{{ tabAnswersBg }}', border: '0', borderRadius: 'var(--radius-pill)', padding: '8px 14px', cursor: 'pointer', boxShadow: '{{ tabAnswersShadow }}', transition: 'background .15s' }}>Javoblar</button>
            <button type="button" role="tab" id="tab-audience" data-tab="audience" className="tab" style={{ flex: '1', fontFamily: 'var(--font-body)', fontSize: 'var(--text-sm)', fontWeight: '{{ tabAudienceWeight }}', color: '{{ tabAudienceColor }}', background: '{{ tabAudienceBg }}', border: '0', borderRadius: 'var(--radius-pill)', padding: '8px 14px', cursor: 'pointer', boxShadow: '{{ tabAudienceShadow }}', transition: 'background .15s' }}>Auditoriya</button>
          </div>
          <p className="tab-panel" role="tabpanel" style={{ margin: '0', fontSize: 'var(--text-sm)', color: 'var(--ink-mid)' }}>{/* BIND: tabPanelText */}</p>
        </div>

        <div className="stepper-demo card" style={{ background: 'var(--glass)', backdropFilter: 'blur(20px)', WebkitBackdropFilter: 'blur(20px)', border: '1px solid var(--glass-border)', borderRadius: 'var(--radius-lg)', boxShadow: 'var(--shadow-glass),var(--glass-inner)', padding: '24px' }}>
          <ol className="stepper" style={{ listStyle: 'none', margin: '0', padding: '0', display: 'flex', alignItems: 'flex-start' }}>
            <li className="step is-done" style={{ flex: '1', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px', position: 'relative' }}><span style={{ position: 'absolute', top: '13px', left: '50%', width: '100%', height: '2px', background: 'linear-gradient(90deg,var(--mint-500),var(--mint-400))', zIndex: '0' }}></span><span className="step-dot" style={{ position: 'relative', zIndex: '1', width: '28px', height: '28px', borderRadius: '50%', background: 'linear-gradient(180deg,var(--mint-500),var(--mint-600))', border: '1px solid rgba(255,255,255,.6)', color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '13px', fontWeight: '700', boxShadow: 'var(--glow-mint)' }}>✓</span><span style={{ fontSize: 'var(--text-xs)', color: 'var(--ink-mid)', textAlign: 'center' }}>Savollar</span></li>
            <li className="step is-current" style={{ flex: '1', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px', position: 'relative' }}><span style={{ position: 'absolute', top: '13px', left: '50%', width: '100%', height: '2px', background: 'var(--line)', zIndex: '0' }}></span><span className="step-dot" style={{ position: 'relative', zIndex: '1', width: '28px', height: '28px', borderRadius: '50%', background: 'rgba(255,255,255,.85)', backdropFilter: 'blur(6px)', WebkitBackdropFilter: 'blur(6px)', border: '2px solid var(--mint-600)', color: 'var(--mint-700)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '13px', fontWeight: '700', boxSizing: 'border-box', boxShadow: 'var(--shadow-sm)' }}>2</span><span style={{ fontSize: 'var(--text-xs)', color: 'var(--ink)', fontWeight: '600', textAlign: 'center' }}>Auditoriya</span></li>
            <li className="step" style={{ flex: '1', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px', position: 'relative' }}><span style={{ position: 'absolute', top: '13px', left: '50%', width: '100%', height: '2px', background: 'var(--line)', zIndex: '0' }}></span><span className="step-dot" style={{ position: 'relative', zIndex: '1', width: '28px', height: '28px', borderRadius: '50%', background: 'rgba(255,255,255,.45)', border: '1px solid var(--line)', color: 'var(--ink-mid)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '13px', fontWeight: '600' }}>3</span><span style={{ fontSize: 'var(--text-xs)', color: 'var(--ink-soft)', textAlign: 'center' }}>Narx</span></li>
            <li className="step" style={{ flex: '1', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px', position: 'relative' }}><span className="step-dot" style={{ position: 'relative', zIndex: '1', width: '28px', height: '28px', borderRadius: '50%', background: 'rgba(255,255,255,.45)', border: '1px solid var(--line)', color: 'var(--ink-mid)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '13px', fontWeight: '600' }}>4</span><span style={{ fontSize: 'var(--text-xs)', color: 'var(--ink-soft)', textAlign: 'center' }}>Tasdiqlash</span></li>
          </ol>
        </div>

        <div className="table-demo card" style={{ background: 'var(--glass)', backdropFilter: 'blur(20px)', WebkitBackdropFilter: 'blur(20px)', border: '1px solid var(--glass-border)', borderRadius: 'var(--radius-lg)', boxShadow: 'var(--shadow-glass),var(--glass-inner)', overflow: 'hidden' }}>
          <table className="data-table" style={{ width: '100%', borderCollapse: 'collapse', fontSize: 'var(--text-sm)' }}>
            <thead><tr style={{ borderBottom: '1px solid var(--line)' }}>
              <th style={{ textAlign: 'left', padding: '12px 16px', fontSize: 'var(--text-xs)', fontWeight: '600', color: 'var(--ink-mid)', letterSpacing: '.03em' }}>so'rovnoma</th>
              <th style={{ textAlign: 'left', padding: '12px 16px', fontSize: 'var(--text-xs)', fontWeight: '600', color: 'var(--ink-mid)', letterSpacing: '.03em' }}>holat</th>
              <th style={{ textAlign: 'right', padding: '12px 16px', fontSize: 'var(--text-xs)', fontWeight: '600', color: 'var(--ink-mid)', letterSpacing: '.03em' }}>javoblar</th>
            </tr></thead>
            <tbody>
              <tr className="table-row" data-row="s-101" style={{ borderBottom: '1px solid var(--line)' }}><td style={{ padding: '12px 16px', fontWeight: '500' }}>Mobil bank ilovasi UX</td><td style={{ padding: '12px 16px' }}><span className="status-badge status-active" style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', fontSize: 'var(--text-xs)', fontWeight: '600', padding: '3px 10px', borderRadius: 'var(--radius-pill)', background: 'var(--mint-glass)', border: '1px solid var(--mint-glass-border)', color: 'var(--mint-700)' }}>faol</span></td><td style={{ padding: '12px 16px', textAlign: 'right', fontVariantNumeric: 'tabular-nums' }}>342</td></tr>
              <tr className="table-row" data-row="s-102" style={{ borderBottom: '1px solid var(--line)' }}><td style={{ padding: '12px 16px', fontWeight: '500' }}>Yetkazib berish narxlari</td><td style={{ padding: '12px 16px' }}><span className="status-badge status-completed" style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', fontSize: 'var(--text-xs)', fontWeight: '600', padding: '3px 10px', borderRadius: 'var(--radius-pill)', background: 'var(--blue-glass)', border: '1px solid var(--blue-glass-border)', color: 'var(--blue-deep)' }}>yakunlangan</span></td><td style={{ padding: '12px 16px', textAlign: 'right', fontVariantNumeric: 'tabular-nums' }}>500</td></tr>
              <tr className="table-row" data-row="s-103"><td style={{ padding: '12px 16px', fontWeight: '500' }}>Talabalar sarf-xarajati</td><td style={{ padding: '12px 16px' }}><span className="status-badge status-draft" style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', fontSize: 'var(--text-xs)', fontWeight: '600', padding: '3px 10px', borderRadius: 'var(--radius-pill)', background: 'rgba(84,102,110,.1)', border: '1px solid rgba(84,102,110,.22)', color: 'var(--ink-mid)' }}>qoralama</span></td><td style={{ padding: '12px 16px', textAlign: 'right', fontVariantNumeric: 'tabular-nums' }}>—</td></tr>
            </tbody>
          </table>
        </div>

        <div className="empty-state card" style={{ background: 'var(--glass-soft)', backdropFilter: 'blur(14px)', WebkitBackdropFilter: 'blur(14px)', border: '1px dashed var(--line-strong)', borderRadius: 'var(--radius-lg)', padding: '36px 24px', display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', gap: '6px' }}>
          <img src="/logo-icon.png" alt="" style={{ width: '44px', height: '44px', opacity: '.5', marginBottom: '6px' }} />
          <h3 style={{ fontFamily: 'var(--font-display)', fontSize: 'var(--text-md)', fontWeight: '600', margin: '0' }}>Hozircha so'rovnomalar yo'q</h3>
          <p style={{ margin: '0 0 12px', fontSize: 'var(--text-sm)', color: 'var(--ink-mid)', maxWidth: '280px' }}>Birinchi so'rovnomangizni yarating — 5 daqiqada tayyor bo'ladi</p>
          <button type="button" className="btn btn-primary" data-action="empty-create" style={{ fontFamily: 'var(--font-body)', fontWeight: '600', fontSize: 'var(--text-base)', padding: '10px 20px', borderRadius: 'var(--radius-md)', border: '1px solid rgba(255,255,255,.6)', background: 'linear-gradient(180deg,var(--mint-500),var(--mint-600))', color: '#fff', cursor: 'pointer', boxShadow: 'var(--glow-mint),inset 0 1px 0 rgba(255,255,255,.35)' }} style-hover="filter:brightness(1.08)">So'rovnoma yaratish</button>
        </div>

        <div className="modal-demo" style={{ position: 'relative', border: '1px solid var(--glass-border)', borderRadius: 'var(--radius-lg)', padding: '32px', display: 'flex', justifyContent: 'center', overflow: 'hidden', background: 'linear-gradient(140deg,var(--bg-a),var(--bg-b))' }}>
          <div aria-hidden="true" style={{ position: 'absolute', width: '200px', height: '200px', borderRadius: '50%', background: 'radial-gradient(circle,rgba(98,201,163,.45),transparent 70%)', top: '-60px', left: '-40px', filter: 'blur(14px)' }}></div>
          <div aria-hidden="true" style={{ position: 'absolute', width: '180px', height: '180px', borderRadius: '50%', background: 'radial-gradient(circle,rgba(122,170,236,.4),transparent 70%)', bottom: '-60px', right: '-40px', filter: 'blur(14px)' }}></div>
          <div className="modal" role="dialog" aria-labelledby="modal-title" style={{ position: 'relative', background: 'var(--glass-strong)', backdropFilter: 'blur(24px)', WebkitBackdropFilter: 'blur(24px)', border: '1px solid var(--glass-border)', borderRadius: 'var(--radius-lg)', boxShadow: 'var(--shadow-float),var(--glass-inner)', maxWidth: '380px', width: '100%', padding: '24px' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: '12px', marginBottom: '8px' }}>
              <h3 id="modal-title" style={{ fontFamily: 'var(--font-display)', fontSize: 'var(--text-lg)', fontWeight: '700', margin: '0' }}>So'rovnomani to'xtatasizmi?</h3>
              <button type="button" className="modal-close" data-action="modal-close" style={{ background: 'rgba(255,255,255,.5)', border: '1px solid var(--glass-border)', borderRadius: '50%', width: '28px', height: '28px', color: 'var(--ink-mid)', fontSize: '14px', cursor: 'pointer', padding: '0', lineHeight: '1' }}>✕</button>
            </div>
            <p style={{ margin: '0 0 20px', fontSize: 'var(--text-sm)', color: 'var(--ink-mid)' }}>«Mobil bank ilovasi UX» pauzaga qo'yiladi. Yig'ilgan 342 ta javob saqlanadi, yangi javoblar kelmaydi.</p>
            <div className="modal-actions" style={{ display: 'flex', justifyContent: 'flex-end', gap: '10px' }}>
              <button type="button" className="btn btn-ghost" data-action="modal-cancel" style={{ fontFamily: 'var(--font-body)', fontWeight: '600', fontSize: 'var(--text-base)', padding: '10px 18px', borderRadius: 'var(--radius-md)', border: '1px solid transparent', background: 'transparent', color: 'var(--ink-mid)', cursor: 'pointer' }} style-hover="background:var(--glass)">Bekor qilish</button>
              <button type="button" className="btn btn-secondary" data-action="modal-confirm" style={{ fontFamily: 'var(--font-body)', fontWeight: '600', fontSize: 'var(--text-base)', padding: '10px 18px', borderRadius: 'var(--radius-md)', border: '1px solid var(--glass-border)', background: 'var(--glass)', color: 'var(--ink)', cursor: 'pointer', boxShadow: 'var(--shadow-sm),var(--glass-inner)' }} style-hover="background:var(--glass-strong)">To'xtatish</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  
  <section className="ds-section" id="composed-taker">
    <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'var(--text-xl)', fontWeight: '700', margin: '0 0 4px' }}>Namuna — respondent ko'radigan so'rovnoma kartasi</h2>
    <p style={{ margin: '0 0 20px', color: 'var(--ink-mid)', fontSize: 'var(--text-sm)' }}>Pul — hissiy markaz: to'q pine rangda, kartaning eng katta elementi.</p>
    <div className="survey-card" data-survey="s-204" style={{ background: 'var(--glass)', backdropFilter: 'blur(20px)', WebkitBackdropFilter: 'blur(20px)', border: '1px solid var(--glass-border)', borderRadius: 'var(--radius-lg)', boxShadow: 'var(--shadow-glass),var(--glass-inner)', padding: '20px', maxWidth: '400px', display: 'flex', flexDirection: 'column', gap: '14px' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '12px' }}>
        <span className="category-badge" style={{ display: 'inline-flex', fontSize: 'var(--text-xs)', fontWeight: '600', letterSpacing: '.02em', padding: '4px 11px', borderRadius: 'var(--radius-pill)', background: 'var(--mint-glass)', border: '1px solid var(--mint-glass-border)', color: 'var(--mint-700)' }}>Bank va moliya</span>
        <span className="survey-duration" style={{ fontSize: 'var(--text-sm)', color: 'var(--ink-mid)', fontVariantNumeric: 'tabular-nums' }}>~4 daqiqa · 12 savol</span>
      </div>
      <h3 className="survey-title" style={{ fontFamily: 'var(--font-display)', fontSize: 'var(--text-lg)', fontWeight: '600', lineHeight: '1.25', margin: '0' }}>Yangi mobil bank ilovasi haqida fikringiz</h3>
      <div className="reward-amount" style={{ display: 'flex', alignItems: 'baseline', gap: '6px' }}>
        <span style={{ fontFamily: 'var(--font-display)', fontSize: 'var(--text-2xl)', fontWeight: '800', letterSpacing: '-.01em', color: 'var(--mint-700)', fontVariantNumeric: 'tabular-nums' }}>6 500</span>
        <span style={{ fontSize: 'var(--text-md)', fontWeight: '600', color: 'var(--mint-700)' }}>so'm</span>
      </div>
      <button type="button" className="btn btn-primary btn-block" data-action="survey-start" style={{ fontFamily: 'var(--font-body)', fontWeight: '600', fontSize: 'var(--text-md)', padding: '13px 20px', borderRadius: 'var(--radius-md)', border: '1px solid rgba(255,255,255,.6)', background: 'linear-gradient(180deg,var(--mint-500),var(--mint-600))', color: '#fff', cursor: 'pointer', width: '100%', boxShadow: 'var(--glow-mint),inset 0 1px 0 rgba(255,255,255,.35)' }} style-hover="filter:brightness(1.08)">Boshlash</button>
    </div>
  </section>

  
  <section className="ds-section" id="composed-creator">
    <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'var(--text-xl)', fontWeight: '700', margin: '0 0 4px' }}>Namuna — tadqiqotchi ko'radigan statistika qatori</h2>
    <p style={{ margin: '0 0 20px', color: 'var(--ink-mid)', fontSize: 'var(--text-sm)' }}>Shisha kartalar, tabular raqamlar, o'sish mint bilan belgilanadi.</p>
    <div className="stat-row" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(210px,1fr))', gap: '16px' }}>
      <div className="stat-card" data-stat="responses" style={{ background: 'var(--glass)', backdropFilter: 'blur(20px)', WebkitBackdropFilter: 'blur(20px)', border: '1px solid var(--glass-border)', borderRadius: 'var(--radius-lg)', boxShadow: 'var(--shadow-glass),var(--glass-inner)', padding: '20px 22px' }}>
        <div className="stat-label" style={{ fontSize: 'var(--text-xs)', fontWeight: '600', color: 'var(--ink-mid)', letterSpacing: '.03em', marginBottom: '8px' }}>Jami javoblar</div>
        <div className="stat-value" style={{ fontFamily: 'var(--font-display)', fontSize: 'var(--text-2xl)', fontWeight: '700', letterSpacing: '-.01em', fontVariantNumeric: 'tabular-nums', lineHeight: '1.1' }}>1 284</div>
        <div className="stat-delta is-up" style={{ fontSize: 'var(--text-sm)', fontWeight: '600', color: 'var(--mint-600)', marginTop: '6px' }}>↑ 12% bu hafta</div>
      </div>
      <div className="stat-card" data-stat="balance" style={{ background: 'var(--glass)', backdropFilter: 'blur(20px)', WebkitBackdropFilter: 'blur(20px)', border: '1px solid var(--glass-border)', borderRadius: 'var(--radius-lg)', boxShadow: 'var(--shadow-glass),var(--glass-inner)', padding: '20px 22px' }}>
        <div className="stat-label" style={{ fontSize: 'var(--text-xs)', fontWeight: '600', color: 'var(--ink-mid)', letterSpacing: '.03em', marginBottom: '8px' }}>Balans</div>
        <div className="stat-value" style={{ fontFamily: 'var(--font-display)', fontSize: 'var(--text-2xl)', fontWeight: '700', letterSpacing: '-.01em', color: 'var(--mint-700)', fontVariantNumeric: 'tabular-nums', lineHeight: '1.1' }}>2 450 000 <span style={{ fontSize: 'var(--text-md)', fontWeight: '600', color: 'var(--ink-mid)' }}>so'm</span></div>
        <div className="stat-delta" style={{ fontSize: 'var(--text-sm)', color: 'var(--ink-mid)', marginTop: '6px' }}>oxirgi to'ldirish: 28-iyul</div>
      </div>
      <div className="stat-card" data-stat="active-surveys" style={{ background: 'var(--glass)', backdropFilter: 'blur(20px)', WebkitBackdropFilter: 'blur(20px)', border: '1px solid var(--glass-border)', borderRadius: 'var(--radius-lg)', boxShadow: 'var(--shadow-glass),var(--glass-inner)', padding: '20px 22px' }}>
        <div className="stat-label" style={{ fontSize: 'var(--text-xs)', fontWeight: '600', color: 'var(--ink-mid)', letterSpacing: '.03em', marginBottom: '8px' }}>Faol so'rovnomalar</div>
        <div className="stat-value" style={{ fontFamily: 'var(--font-display)', fontSize: 'var(--text-2xl)', fontWeight: '700', fontVariantNumeric: 'tabular-nums', lineHeight: '1.1' }}>6</div>
        <div className="stat-delta" style={{ fontSize: 'var(--text-sm)', color: 'var(--ink-mid)', marginTop: '6px' }}>2 tasi bugun tugaydi</div>
      </div>
      <div className="stat-card" data-stat="completion" style={{ background: 'var(--glass)', backdropFilter: 'blur(20px)', WebkitBackdropFilter: 'blur(20px)', border: '1px solid var(--glass-border)', borderRadius: 'var(--radius-lg)', boxShadow: 'var(--shadow-glass),var(--glass-inner)', padding: '20px 22px' }}>
        <div className="stat-label" style={{ fontSize: 'var(--text-xs)', fontWeight: '600', color: 'var(--ink-mid)', letterSpacing: '.03em', marginBottom: '8px' }}>O'rtacha yakunlash</div>
        <div className="stat-value" style={{ fontFamily: 'var(--font-display)', fontSize: 'var(--text-2xl)', fontWeight: '700', fontVariantNumeric: 'tabular-nums', lineHeight: '1.1' }}>78%</div>
        <div className="stat-delta is-down" style={{ fontSize: 'var(--text-sm)', fontWeight: '600', color: 'var(--danger)', marginTop: '6px' }}>↓ 3% bu hafta</div>
      </div>
    </div>
  </section>

</main>

<footer className="app-footer" style={{ position: 'relative', zIndex: '1', borderTop: '1px solid var(--glass-border)', background: 'rgba(255,255,255,.4)', backdropFilter: 'blur(16px)', WebkitBackdropFilter: 'blur(16px)', padding: '20px 32px', display: 'flex', justifyContent: 'space-between', gap: '16px', fontSize: 'var(--text-xs)', color: 'var(--ink-soft)' }}>
  <span>Fikra © 2026 · Toshkent</span>
  <span style={{ fontFamily: 'var(--font-mono)' }}>design-system v2 · barcha qiymatlar :root tokenlaridan</span>
</footer>
    </>
  );
}
