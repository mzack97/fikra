// AUTO-GENERATED from the Phase 1 design export by tools/convert.py
// Static render of the design. Logic is added in the build phase.
// {/* BIND: x */} markers show where the design expected dynamic data.
// Re-runnable: regenerate after a design change, then re-apply logic.

export default function TakerSurveyFlow() {
  return (
    <>
<div className="ambient" aria-hidden="true" style={{ position: 'fixed', inset: '0', zIndex: '0', pointerEvents: 'none', overflow: 'hidden' }}>
  <div style={{ position: 'absolute', width: '520px', height: '520px', borderRadius: '50%', background: 'radial-gradient(circle,rgba(98,201,163,.4),transparent 70%)', top: '-160px', left: '-120px', filter: 'blur(20px)' }}></div>
  <div style={{ position: 'absolute', width: '460px', height: '460px', borderRadius: '50%', background: 'radial-gradient(circle,rgba(122,170,236,.35),transparent 70%)', top: '30%', right: '-140px', filter: 'blur(24px)' }}></div>
  <div style={{ position: 'absolute', width: '480px', height: '480px', borderRadius: '50%', background: 'radial-gradient(circle,rgba(98,201,163,.3),transparent 70%)', bottom: '-180px', left: '30%', filter: 'blur(24px)' }}></div>
</div>

<main style={{ position: 'relative', zIndex: '1', maxWidth: '480px', margin: '0 auto', padding: '28px 16px 80px', display: 'flex', flexDirection: 'column', gap: '48px' }}>
  <img className="app-logo" src="/logo-full.png" alt="Fikra" style={{ height: '28px', display: 'block', margin: '0 auto' }} />

  
  <section className="flow-state" id="state-intro" data-screen-label="1 · Kirish">
    <p className="state-label" style={{ margin: '0 0 10px', fontFamily: 'var(--font-mono)', fontSize: 'var(--text-xs)', letterSpacing: '.06em', color: 'var(--ink-soft)' }}>1 · KIRISH</p>
    <div className="survey-intro" style={{ background: 'var(--glass)', backdropFilter: 'blur(20px)', WebkitBackdropFilter: 'blur(20px)', border: '1px solid var(--glass-border)', borderRadius: 'var(--radius-lg)', boxShadow: 'var(--shadow-glass),var(--glass-inner)', padding: '24px 20px' }}>
      <span className="category-badge" style={{ display: 'inline-flex', fontSize: 'var(--text-xs)', fontWeight: '600', padding: '4px 11px', borderRadius: 'var(--radius-pill)', background: 'var(--mint-glass)', border: '1px solid var(--mint-glass-border)', color: 'var(--mint-700)', marginBottom: '14px' }}>Marketing</span>
      <h1 className="survey-title" style={{ fontFamily: 'var(--font-display)', fontSize: 'var(--text-xl)', fontWeight: '700', letterSpacing: '-.01em', lineHeight: '1.2', margin: '0 0 8px', textWrap: 'balance' }}>Ijtimoiy tarmoqlardagi reklama haqida fikringiz</h1>
      <p style={{ margin: '0 0 6px', fontSize: 'var(--text-sm)', color: 'var(--ink-mid)' }}>Instagram va Telegram'dagi reklamalarga munosabatingizni o'rganamiz. Javoblar anonim tarzda tahlil qilinadi.</p>
      <p className="survey-creator" style={{ margin: '0 0 18px', fontSize: 'var(--text-xs)', color: 'var(--ink-soft)' }}>Tadqiqotchi: <span style={{ fontWeight: '600', color: 'var(--ink-mid)' }}>Navro'z Media agentligi</span></p>
      <ul className="fact-row" style={{ listStyle: 'none', margin: '0 0 18px', padding: '0', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px' }}>
        <li className="fact" style={{ display: 'flex', alignItems: 'center', gap: '10px', padding: '10px 12px', borderRadius: 'var(--radius-md)', background: 'rgba(255,255,255,.5)', border: '1px solid var(--glass-border)' }}>
          <svg width={16} height={16} viewBox="0 0 24 24" fill="none" stroke="#54666E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" style={{ flex: 'none' }}><rect x="5" y="3" width={14} height={18} rx="3"></rect><path d="M9 8h6M9 12h6M9 16h4"></path></svg>
          <span style={{ fontSize: 'var(--text-sm)', fontWeight: '600', fontVariantNumeric: 'tabular-nums' }}>12 ta savol</span></li>
        <li className="fact" style={{ display: 'flex', alignItems: 'center', gap: '10px', padding: '10px 12px', borderRadius: 'var(--radius-md)', background: 'rgba(255,255,255,.5)', border: '1px solid var(--glass-border)' }}>
          <svg width={16} height={16} viewBox="0 0 24 24" fill="none" stroke="#54666E" strokeWidth="2" strokeLinecap="round" aria-hidden="true" style={{ flex: 'none' }}><circle cx="12" cy="12" r="9"></circle><path d="M12 7v5l3 2"></path></svg>
          <span style={{ fontSize: 'var(--text-sm)', fontWeight: '600', fontVariantNumeric: 'tabular-nums' }}>5 daqiqa</span></li>
        <li className="fact" style={{ display: 'flex', alignItems: 'center', gap: '10px', padding: '10px 12px', borderRadius: 'var(--radius-md)', background: 'var(--mint-glass)', border: '1px solid var(--mint-glass-border)' }}>
          <svg width={16} height={16} viewBox="0 0 24 24" fill="none" stroke="#0E5E44" strokeWidth="2" strokeLinecap="round" aria-hidden="true" style={{ flex: 'none' }}><circle cx="12" cy="12" r="9"></circle><path d="M12 7v10M9.5 9.5c0-1 1-1.7 2.5-1.7s2.5.7 2.5 1.7-1 1.4-2.5 1.7-2.5.7-2.5 1.7 1 1.7 2.5 1.7 2.5-.7 2.5-1.7"></path></svg>
          <span style={{ fontSize: 'var(--text-sm)', fontWeight: '700', color: 'var(--mint-700)', fontVariantNumeric: 'tabular-nums' }}>3 000 so'm</span></li>
        <li className="fact" style={{ display: 'flex', alignItems: 'center', gap: '10px', padding: '10px 12px', borderRadius: 'var(--radius-md)', background: 'rgba(255,255,255,.5)', border: '1px solid var(--glass-border)' }}>
          <svg width={16} height={16} viewBox="0 0 24 24" fill="none" stroke="#54666E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" style={{ flex: 'none' }}><path d="M4 7h16M4 12h10M4 17h7"></path></svg>
          <span style={{ fontSize: 'var(--text-sm)', fontWeight: '600' }}>Marketing</span></li>
      </ul>
      <p className="care-note" style={{ display: 'flex', gap: '10px', alignItems: 'flex-start', margin: '0 0 20px', padding: '11px 13px', borderRadius: 'var(--radius-md)', background: 'var(--amber-glass)', border: '1px solid var(--amber-glass-border)', fontSize: 'var(--text-sm)', color: 'var(--amber)' }}>
        <svg width={16} height={16} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true" style={{ flex: 'none', marginTop: '2px' }}><path d="M12 3l9 17H3z"></path><path d="M12 10v4M12 17.5v.5"></path></svg>
        Diqqat bilan javob bering. Beparvo javoblar tasdiqlanmaydi.</p>
      <button type="button" id="btn-flow-start" className="btn btn-primary hv-2" style={{ fontFamily: 'var(--font-body)', fontWeight: '600', fontSize: 'var(--text-md)', padding: '14px 20px', borderRadius: 'var(--radius-md)', border: '1px solid rgba(255,255,255,.6)', background: 'linear-gradient(180deg,var(--mint-500),var(--mint-600))', color: '#fff', cursor: 'pointer', width: '100%', minHeight: '48px', boxShadow: 'var(--glow-mint),inset 0 1px 0 rgba(255,255,255,.35)', transition: 'filter .12s' }}>Boshlash</button>
    </div>
  </section>

  
  <section className="flow-state" id="state-question" data-screen-label="2 · Savol">
    <p className="state-label" style={{ margin: '0 0 10px', fontFamily: 'var(--font-mono)', fontSize: 'var(--text-xs)', letterSpacing: '.06em', color: 'var(--ink-soft)' }}>2 · SAVOL</p>
    <div className="survey-question-screen" style={{ background: 'var(--glass)', backdropFilter: 'blur(20px)', WebkitBackdropFilter: 'blur(20px)', border: '1px solid var(--glass-border)', borderRadius: 'var(--radius-lg)', boxShadow: 'var(--shadow-glass),var(--glass-inner)', overflow: 'hidden' }}>
      <div className="progress-bar" role="progressbar" aria-valuenow={4} aria-valuemin={0} aria-valuemax={12} aria-label="So'rovnoma jarayoni" style={{ height: '5px', background: 'rgba(255,255,255,.7)' }}>
        <div className="progress-fill" style={{ width: '33%', height: '100%', background: 'linear-gradient(90deg,var(--mint-500),var(--mint-400))', boxShadow: '0 0 8px rgba(47,177,133,.55)' }}></div>
      </div>
      <div style={{ padding: '20px' }}>
        <p className="question-counter" style={{ margin: '0 0 14px', fontSize: 'var(--text-sm)', fontWeight: '600', color: 'var(--ink-mid)', fontVariantNumeric: 'tabular-nums' }}>Savol 4 / 12</p>
        <h2 className="question-text" style={{ fontFamily: 'var(--font-display)', fontSize: 'var(--text-xl)', fontWeight: '700', letterSpacing: '-.01em', lineHeight: '1.25', margin: '0 0 20px', textWrap: 'balance' }}>Instagram'da reklama ko'rganingizda odatda nima qilasiz?</h2>
        <fieldset className="quiz-options" style={{ border: '0', padding: '0', margin: '0 0 24px' }}>
          <legend style={{ position: 'absolute', width: '1px', height: '1px', overflow: 'hidden', clip: 'rect(0 0 0 0)' }}>Javob variantlari</legend>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
            <label className="quiz-option hv-15" data-option="q4-a" style={{ display: 'flex', alignItems: 'center', gap: '12px', padding: '14px 16px', borderRadius: 'var(--radius-md)', border: '1px solid var(--line)', background: 'rgba(255,255,255,.35)', cursor: 'pointer', fontSize: 'var(--text-base)', minHeight: '48px', boxSizing: 'border-box' }}><input type="radio" name="flow-q4" id="flow-q4-a" style={{ width: '18px', height: '18px', accentColor: 'var(--mint-600)', margin: '0', flex: 'none' }} />Darhol o'tkazib yuboraman</label>
            <label className="quiz-option is-selected" data-option="q4-b" style={{ display: 'flex', alignItems: 'center', gap: '12px', padding: '14px 16px', borderRadius: 'var(--radius-md)', border: '1px solid var(--mint-glass-border)', background: 'var(--mint-glass)', cursor: 'pointer', fontSize: 'var(--text-base)', fontWeight: '600', minHeight: '48px', boxSizing: 'border-box', boxShadow: 'var(--shadow-sm)' }}><input type="radio" name="flow-q4" id="flow-q4-b" checked style={{ width: '18px', height: '18px', accentColor: 'var(--mint-600)', margin: '0', flex: 'none' }} />Qiziq bo'lsa oxirigacha ko'raman</label>
            <label className="quiz-option hv-15" data-option="q4-c" style={{ display: 'flex', alignItems: 'center', gap: '12px', padding: '14px 16px', borderRadius: 'var(--radius-md)', border: '1px solid var(--line)', background: 'rgba(255,255,255,.35)', cursor: 'pointer', fontSize: 'var(--text-base)', minHeight: '48px', boxSizing: 'border-box' }}><input type="radio" name="flow-q4" id="flow-q4-c" style={{ width: '18px', height: '18px', accentColor: 'var(--mint-600)', margin: '0', flex: 'none' }} />Havolani bosib mahsulotni ko'raman</label>
            <label className="quiz-option hv-15" data-option="q4-d" style={{ display: 'flex', alignItems: 'center', gap: '12px', padding: '14px 16px', borderRadius: 'var(--radius-md)', border: '1px solid var(--line)', background: 'rgba(255,255,255,.35)', cursor: 'pointer', fontSize: 'var(--text-base)', minHeight: '48px', boxSizing: 'border-box' }}><input type="radio" name="flow-q4" id="flow-q4-d" style={{ width: '18px', height: '18px', accentColor: 'var(--mint-600)', margin: '0', flex: 'none' }} />Reklama beruvchini bloklayman</label>
            <label className="quiz-option hv-15" data-option="q4-e" style={{ display: 'flex', alignItems: 'center', gap: '12px', padding: '14px 16px', borderRadius: 'var(--radius-md)', border: '1px solid var(--line)', background: 'rgba(255,255,255,.35)', cursor: 'pointer', fontSize: 'var(--text-base)', minHeight: '48px', boxSizing: 'border-box' }}><input type="radio" name="flow-q4" id="flow-q4-e" style={{ width: '18px', height: '18px', accentColor: 'var(--mint-600)', margin: '0', flex: 'none' }} />Reklamani deyarli sezmayman</label>
          </div>
        </fieldset>
        <div className="quiz-actions" style={{ display: 'flex', justifyContent: 'space-between', gap: '12px' }}>
          <button type="button" id="btn-flow-back" className="btn btn-ghost hv-10" style={{ fontFamily: 'var(--font-body)', fontWeight: '600', fontSize: 'var(--text-base)', padding: '12px 20px', borderRadius: 'var(--radius-md)', border: '1px solid transparent', background: 'transparent', color: 'var(--ink-mid)', cursor: 'pointer', minHeight: '48px', transition: 'background .12s' }}>Orqaga</button>
          <button type="button" id="btn-flow-next" className="btn btn-primary hv-2" style={{ fontFamily: 'var(--font-body)', fontWeight: '600', fontSize: 'var(--text-base)', padding: '12px 28px', borderRadius: 'var(--radius-md)', border: '1px solid rgba(255,255,255,.6)', background: 'linear-gradient(180deg,var(--mint-500),var(--mint-600))', color: '#fff', cursor: 'pointer', minHeight: '48px', boxShadow: 'var(--glow-mint),inset 0 1px 0 rgba(255,255,255,.35)', transition: 'filter .12s' }}>Keyingi</button>
        </div>
      </div>
    </div>
  </section>

  
  <section className="flow-state" id="state-complete" data-screen-label="3 · Yakunlandi">
    <p className="state-label" style={{ margin: '0 0 10px', fontFamily: 'var(--font-mono)', fontSize: 'var(--text-xs)', letterSpacing: '.06em', color: 'var(--ink-soft)' }}>3 · YAKUNLANDI</p>
    <div className="survey-complete" style={{ position: 'relative', overflow: 'hidden', background: 'linear-gradient(160deg,rgba(24,133,99,.16),rgba(255,255,255,.6) 60%)', backdropFilter: 'blur(20px)', WebkitBackdropFilter: 'blur(20px)', border: '1px solid var(--mint-glass-border)', borderRadius: 'var(--radius-lg)', boxShadow: 'var(--shadow-glass),var(--glass-inner)', padding: '32px 20px', textAlign: 'center' }}>
      <div aria-hidden="true" style={{ position: 'absolute', width: '260px', height: '260px', borderRadius: '50%', background: 'radial-gradient(circle,rgba(98,201,163,.4),transparent 70%)', top: '-110px', left: '50%', transform: 'translateX(-50%)', filter: 'blur(16px)' }}></div>
      <span className="success-icon" style={{ position: 'relative', display: 'inline-flex', width: '64px', height: '64px', borderRadius: '50%', background: 'linear-gradient(180deg,var(--mint-500),var(--mint-600))', border: '1px solid rgba(255,255,255,.6)', boxShadow: 'var(--glow-mint),inset 0 1px 0 rgba(255,255,255,.35)', alignItems: 'center', justifyContent: 'center', marginBottom: '16px' }}>
        <svg width={30} height={30} viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M5 12.5l4.5 4.5L19 7.5"></path></svg>
      </span>
      <h2 style={{ position: 'relative', fontFamily: 'var(--font-display)', fontSize: 'var(--text-lg)', fontWeight: '700', margin: '0 0 14px' }}>So'rovnoma yakunlandi!</h2>
      <p className="reward-amount" style={{ position: 'relative', margin: '0 0 6px', fontFamily: 'var(--font-display)', fontSize: 'var(--text-3xl)', fontWeight: '800', letterSpacing: '-.02em', color: 'var(--mint-700)', fontVariantNumeric: 'tabular-nums' }}>+3 000 so'm</p>
      <p style={{ position: 'relative', margin: '0 0 18px', fontSize: 'var(--text-sm)', color: 'var(--ink-mid)' }}>Mablag' 3 kunlik tekshiruvdan so'ng yechib olish mumkin bo'ladi</p>
      <div className="pending-balance" style={{ position: 'relative', display: 'inline-flex', alignItems: 'baseline', gap: '8px', padding: '10px 18px', borderRadius: 'var(--radius-pill)', background: 'rgba(255,255,255,.6)', border: '1px solid var(--glass-border)', boxShadow: 'var(--shadow-sm)', marginBottom: '24px' }}>
        <span style={{ fontSize: 'var(--text-xs)', fontWeight: '600', color: 'var(--ink-mid)', letterSpacing: '.03em' }}>KUTILMOQDA</span>
        <span style={{ fontFamily: 'var(--font-display)', fontSize: 'var(--text-md)', fontWeight: '700', color: 'var(--amber)', fontVariantNumeric: 'tabular-nums' }}>7 000 so'm</span>
      </div>
      <div style={{ position: 'relative', display: 'flex', flexDirection: 'column', gap: '10px' }}>
        <button type="button" id="btn-find-another" className="btn btn-primary hv-2" style={{ fontFamily: 'var(--font-body)', fontWeight: '600', fontSize: 'var(--text-md)', padding: '14px 20px', borderRadius: 'var(--radius-md)', border: '1px solid rgba(255,255,255,.6)', background: 'linear-gradient(180deg,var(--mint-500),var(--mint-600))', color: '#fff', cursor: 'pointer', width: '100%', minHeight: '48px', boxShadow: 'var(--glow-mint),inset 0 1px 0 rgba(255,255,255,.35)', transition: 'filter .12s' }}>Boshqa so'rovnoma topish</button>
        <a href="taker-dashboard.dc.html" id="btn-go-home" className="btn btn-secondary hv-1" style={{ fontFamily: 'var(--font-body)', fontWeight: '600', fontSize: 'var(--text-md)', padding: '14px 20px', borderRadius: 'var(--radius-md)', border: '1px solid var(--glass-border)', background: 'var(--glass)', color: 'var(--ink)', cursor: 'pointer', width: '100%', minHeight: '48px', boxSizing: 'border-box', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', boxShadow: 'var(--shadow-sm),var(--glass-inner)', transition: 'background .12s' }}>Bosh sahifaga</a>
      </div>
    </div>
  </section>

  
  
</main>
    </>
  );
}
