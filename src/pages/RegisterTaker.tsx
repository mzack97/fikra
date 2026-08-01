import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { api, type TakerRegistration } from '../api/client';
import {
  REGIONS, GENDER, EDUCATION, EMPLOYMENT, INCOME_BANDS, SETTLEMENT,
} from '../data/reference';
import { QUIZZES } from '../data/quizzes';

/**
 * Taker registration — a real five-step flow.
 *
 * Graduated from the design export. The design showed all five steps stacked in
 * one file so every state could be reviewed at once; here only one is on screen
 * at a time, driven by state, with validation and progress saved after each
 * step so a refresh resumes where you left off.
 */

const BASICS_QUIZ = QUIZZES.find((q) => q.id === 'digital')!;
const QUIZ_QUESTIONS = BASICS_QUIZ.questions.filter((q) => q.options).slice(0, 6);

const STEPS = ['Telefon', 'Kod', 'Shaxs', 'Profil', 'Viktorina'];

const card: React.CSSProperties = {
  background: 'var(--glass-strong)', backdropFilter: 'blur(20px)',
  WebkitBackdropFilter: 'blur(20px)', border: '1px solid var(--glass-border)',
  borderRadius: 'var(--radius-lg)', boxShadow: 'var(--shadow-glass)',
  padding: '32px', maxWidth: '480px', margin: '0 auto', boxSizing: 'border-box',
};

const label: React.CSSProperties = {
  display: 'block', fontWeight: 600, fontSize: 'var(--text-sm)',
  color: 'var(--ink)', marginBottom: '6px',
};

const input: React.CSSProperties = {
  width: '100%', boxSizing: 'border-box', fontFamily: 'var(--font-body)',
  fontSize: 'var(--text-base)', color: 'var(--ink)', padding: '11px 13px',
  border: '1px solid var(--line)', borderRadius: 'var(--radius-md)',
  background: 'rgba(255,255,255,.6)',
};

const btn = (variant: 'primary' | 'ghost' = 'primary', disabled = false): React.CSSProperties => ({
  fontFamily: 'var(--font-body)', fontWeight: 600, fontSize: 'var(--text-base)',
  padding: '12px 22px', borderRadius: 'var(--radius-md)', cursor: disabled ? 'not-allowed' : 'pointer',
  border: variant === 'primary' ? 'none' : '1px solid var(--line)',
  background: variant === 'primary' ? 'var(--mint-600)' : 'transparent',
  color: variant === 'primary' ? '#fff' : 'var(--ink-mid)',
  opacity: disabled ? 0.45 : 1,
  boxShadow: variant === 'primary' && !disabled ? 'var(--glow-mint)' : 'none',
});

const errorText: React.CSSProperties = {
  color: 'var(--danger)', fontSize: 'var(--text-sm)', margin: '8px 0 0',
};

function Field({ id, children, text }: { id: string; text: string; children: React.ReactNode }) {
  return (
    <div className="form-field" style={{ marginBottom: '16px' }}>
      <label htmlFor={id} style={label}>{text}</label>
      {children}
    </div>
  );
}

function Select({ id, value, onChange, options, placeholder }: {
  id: string; value: string; onChange: (v: string) => void;
  options: { id: string; label: string }[]; placeholder: string;
}) {
  return (
    <select id={id} value={value} onChange={(e) => onChange(e.target.value)} style={input}>
      <option value="">{placeholder}</option>
      {options.map((o) => <option key={o.id} value={o.id}>{o.label}</option>)}
    </select>
  );
}

export default function RegisterTaker() {
  const navigate = useNavigate();
  const [step, setStep] = useState(0);
  const [error, setError] = useState('');
  const [busy, setBusy] = useState(false);

  const [phone, setPhone] = useState('');
  const [otp, setOtp] = useState('');
  const [resendIn, setResendIn] = useState(0);
  const [oneIdDone, setOneIdDone] = useState(false);

  const [basics, setBasics] = useState({
    firstName: '', lastName: '', birthYear: '', gender: '',
    region: '', settlement: '', education: '', employment: '', income: '',
  });

  const [quizIndex, setQuizIndex] = useState(0);
  const [answers, setAnswers] = useState<Record<string, string | string[]>>({});

  // Resume a half-finished registration
  useEffect(() => {
    const { step: savedStep, draft } = api.getDraft();
    if (draft && savedStep > 0) {
      setStep(savedStep);
      setPhone(draft.phone ?? '');
      setOneIdDone(draft.verifiedOneId ?? false);
      setBasics((b) => ({
        ...b,
        firstName: draft.firstName ?? '', lastName: draft.lastName ?? '',
        birthYear: draft.birthYear ? String(draft.birthYear) : '',
        gender: draft.gender ?? '', region: draft.region ?? '',
        settlement: draft.settlement ?? '', education: draft.education ?? '',
        employment: draft.employment ?? '', income: draft.income ?? '',
      }));
      setAnswers(draft.quizAnswers ?? {});
    }
  }, []);

  useEffect(() => {
    if (resendIn <= 0) return;
    const t = setTimeout(() => setResendIn((s) => s - 1), 1000);
    return () => clearTimeout(t);
  }, [resendIn]);

  const digits = phone.replace(/\D/g, '');

  async function sendCode() {
    if (digits.length !== 9) {
      setError('Telefon raqamni to\u2019liq kiriting: 9 ta raqam.');
      return;
    }
    setError('');
    setBusy(true);
    await api.saveDraft(1, { phone: digits });
    setBusy(false);
    setResendIn(60);
    setStep(1);
  }

  async function checkOtp() {
    setBusy(true);
    setError('');
    const res = await api.verifyOtp(otp);
    setBusy(false);
    if (!res.ok) { setError(res.message ?? 'Kod mos kelmadi.'); return; }
    await api.saveDraft(2, { verifiedPhone: true });
    setStep(2);
  }

  async function doOneId() {
    setBusy(true);
    await api.verifyOneId();
    setBusy(false);
    setOneIdDone(true);
    await api.saveDraft(3, { verifiedOneId: true });
    setStep(3);
  }

  const basicsComplete = Object.entries(basics)
    .filter(([k]) => k !== 'settlement')
    .every(([, v]) => v !== '');

  async function saveBasics() {
    if (!basicsComplete) { setError('Barcha maydonlarni to\u2019ldiring.'); return; }
    setError('');
    await api.saveDraft(4, { ...basics, birthYear: Number(basics.birthYear) });
    setStep(4);
  }

  const question = QUIZ_QUESTIONS[quizIndex];

  function answerSingle(optionId: string) {
    setAnswers((a) => ({ ...a, [question.id]: optionId }));
  }

  function answerMulti(optionId: string) {
    setAnswers((a) => {
      const current = (a[question.id] as string[]) ?? [];
      return {
        ...a,
        [question.id]: current.includes(optionId)
          ? current.filter((x) => x !== optionId)
          : [...current, optionId],
      };
    });
  }

  const answered = answers[question?.id] !== undefined
    && (!Array.isArray(answers[question?.id]) || (answers[question?.id] as string[]).length > 0);

  async function nextQuestion() {
    if (quizIndex < QUIZ_QUESTIONS.length - 1) {
      setQuizIndex((i) => i + 1);
      await api.saveDraft(4, { quizAnswers: answers });
      return;
    }
    setBusy(true);
    const record: TakerRegistration = {
      phone: digits,
      verifiedPhone: true,
      verifiedOneId: oneIdDone,
      firstName: basics.firstName,
      lastName: basics.lastName,
      birthYear: Number(basics.birthYear),
      gender: basics.gender,
      region: basics.region,
      settlement: basics.settlement,
      education: basics.education,
      employment: basics.employment,
      income: basics.income,
      quizAnswers: answers,
      completedQuizzes: ['basics', BASICS_QUIZ.id],
      registeredAt: null,
    };
    await api.completeRegistration(record);
    setBusy(false);
    navigate('/t/dashboard');
  }

  const years = Array.from({ length: 50 }, (_, i) => 2010 - i);

  return (
    <main style={{ minHeight: '100vh', padding: '40px 20px', position: 'relative', zIndex: 1 }}>
      <div style={{ maxWidth: '480px', margin: '0 auto 24px', textAlign: 'center' }}>
        <a href="/"><img src="/logo-full.png" alt="Fikra" style={{ height: '34px' }} /></a>
      </div>

      {/* Stepper */}
      <div style={{ maxWidth: '480px', margin: '0 auto 20px', display: 'flex', gap: '6px' }}>
        {STEPS.map((s, i) => (
          <div key={s} style={{ flex: 1, textAlign: 'center' }}>
            <div style={{
              height: '4px', borderRadius: '2px', marginBottom: '6px',
              background: i <= step ? 'var(--mint-500)' : 'var(--line)',
              transition: 'background .2s ease',
            }} />
            <span style={{
              fontSize: 'var(--text-xs)',
              color: i === step ? 'var(--mint-700)' : 'var(--ink-soft)',
              fontWeight: i === step ? 600 : 400,
            }}>{s}</span>
          </div>
        ))}
      </div>

      <div style={card}>
        {step === 0 && (
          <>
            <h1 style={{ fontFamily: 'var(--font-display)', fontSize: 'var(--text-xl)', margin: '0 0 6px' }}>Telefon raqamingiz</h1>
            <p style={{ color: 'var(--ink-mid)', fontSize: 'var(--text-sm)', margin: '0 0 20px' }}>
              Kirish va to'lovlar uchun ishlatiladi. Hech kimga ko'rsatilmaydi.
            </p>
            <Field id="phone" text="Telefon raqam">
              <div style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
                <span style={{ ...input, width: 'auto', padding: '11px 12px', color: 'var(--ink-mid)' }}>+998</span>
                <input
                  id="phone" inputMode="numeric" placeholder="90 123 45 67"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value.replace(/[^\d ]/g, '').slice(0, 12))}
                  style={{ ...input, flex: 1 }}
                />
              </div>
            </Field>
            {error && <p style={errorText}>{error}</p>}
            <button type="button" onClick={sendCode} disabled={busy} style={{ ...btn('primary', busy), width: '100%', marginTop: '8px' }}>
              {busy ? 'Yuborilmoqda…' : 'Kod yuborish'}
            </button>
          </>
        )}

        {step === 1 && (
          <>
            <h1 style={{ fontFamily: 'var(--font-display)', fontSize: 'var(--text-xl)', margin: '0 0 6px' }}>SMS kodini kiriting</h1>
            <p style={{ color: 'var(--ink-mid)', fontSize: 'var(--text-sm)', margin: '0 0 16px' }}>
              +998 {phone} raqamiga yubordik
            </p>
            <div style={{ padding: '10px 12px', border: '1px dashed var(--mint-glass-border)', background: 'var(--mint-glass)', borderRadius: 'var(--radius-md)', fontSize: 'var(--text-sm)', color: 'var(--mint-700)', marginBottom: '16px' }}>
              Demo rejimi — kod: <strong>000000</strong>
            </div>
            <input
              inputMode="numeric" autoFocus value={otp}
              onChange={(e) => setOtp(e.target.value.replace(/\D/g, '').slice(0, 6))}
              placeholder="______"
              style={{ ...input, textAlign: 'center', fontSize: 'var(--text-2xl)', letterSpacing: '.4em', fontFamily: 'var(--font-mono)' }}
            />
            {error && <p style={errorText}>{error}</p>}
            <button type="button" onClick={checkOtp} disabled={busy || otp.length !== 6} style={{ ...btn('primary', busy || otp.length !== 6), width: '100%', marginTop: '16px' }}>
              {busy ? 'Tekshirilmoqda…' : 'Tasdiqlash'}
            </button>
            <button type="button" onClick={() => setResendIn(60)} disabled={resendIn > 0}
              style={{ ...btn('ghost', resendIn > 0), width: '100%', marginTop: '8px' }}>
              {resendIn > 0 ? `Qayta yuborish: 0:${String(resendIn).padStart(2, '0')}` : 'Qayta yuborish'}
            </button>
          </>
        )}

        {step === 2 && (
          <>
            <h1 style={{ fontFamily: 'var(--font-display)', fontSize: 'var(--text-xl)', margin: '0 0 6px' }}>Shaxsni tasdiqlash</h1>
            <p style={{ color: 'var(--ink-mid)', fontSize: 'var(--text-sm)', margin: '0 0 16px' }}>
              Tasdiqlangan profillar bizneslar uchun ishonchli — ularga ko'proq va qimmatroq so'rovnomalar keladi.
            </p>
            <button type="button" onClick={doOneId} disabled={busy} style={{ ...btn('primary', busy), width: '100%' }}>
              {busy ? 'OneID bilan bog\u2019lanmoqda…' : 'OneID orqali tasdiqlash'}
            </button>
            <button type="button" onClick={() => { setOneIdDone(false); setStep(3); }} style={{ ...btn('ghost'), width: '100%', marginTop: '8px' }}>
              Hozircha o'tkazib yuborish
            </button>
          </>
        )}

        {step === 3 && (
          <>
            <h1 style={{ fontFamily: 'var(--font-display)', fontSize: 'var(--text-xl)', margin: '0 0 6px' }}>Asosiy ma'lumotlar</h1>
            <p style={{ color: 'var(--ink-mid)', fontSize: 'var(--text-sm)', margin: '0 0 20px' }}>
              Bir marta to'ldirasiz — so'rovnomalar shu profilga mos tanlanadi.
            </p>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0 12px' }}>
              <Field id="fn" text="Ism">
                <input id="fn" value={basics.firstName} onChange={(e) => setBasics({ ...basics, firstName: e.target.value })} style={input} />
              </Field>
              <Field id="ln" text="Familiya">
                <input id="ln" value={basics.lastName} onChange={(e) => setBasics({ ...basics, lastName: e.target.value })} style={input} />
              </Field>
            </div>
            <Field id="by" text="Tug'ilgan yil">
              <Select id="by" value={basics.birthYear} onChange={(v) => setBasics({ ...basics, birthYear: v })}
                options={years.map((y) => ({ id: String(y), label: String(y) }))} placeholder="Tanlang" />
            </Field>
            <Field id="g" text="Jins">
              <Select id="g" value={basics.gender} onChange={(v) => setBasics({ ...basics, gender: v })} options={GENDER} placeholder="Tanlang" />
            </Field>
            <Field id="r" text="Viloyat">
              <Select id="r" value={basics.region} onChange={(v) => setBasics({ ...basics, region: v })}
                options={REGIONS.map((r) => ({ id: r.id, label: r.name }))} placeholder="Tanlang" />
            </Field>
            <Field id="st" text="Yashash joyi">
              <Select id="st" value={basics.settlement} onChange={(v) => setBasics({ ...basics, settlement: v })} options={SETTLEMENT} placeholder="Tanlang" />
            </Field>
            <Field id="e" text="Ma'lumot">
              <Select id="e" value={basics.education} onChange={(v) => setBasics({ ...basics, education: v })} options={EDUCATION} placeholder="Tanlang" />
            </Field>
            <Field id="emp" text="Bandlik">
              <Select id="emp" value={basics.employment} onChange={(v) => setBasics({ ...basics, employment: v })} options={EMPLOYMENT} placeholder="Tanlang" />
            </Field>
            <Field id="inc" text="Oylik daromad darajasi">
              <Select id="inc" value={basics.income} onChange={(v) => setBasics({ ...basics, income: v })} options={INCOME_BANDS} placeholder="Tanlang" />
            </Field>
            {error && <p style={errorText}>{error}</p>}
            <button type="button" onClick={saveBasics} disabled={!basicsComplete} style={{ ...btn('primary', !basicsComplete), width: '100%', marginTop: '8px' }}>
              Davom etish
            </button>
          </>
        )}

        {step === 4 && question && (
          <>
            <div style={{ height: '5px', borderRadius: '3px', background: 'var(--line)', marginBottom: '14px', overflow: 'hidden' }}>
              <div style={{
                width: `${((quizIndex + 1) / QUIZ_QUESTIONS.length) * 100}%`, height: '100%',
                background: 'linear-gradient(90deg,var(--mint-500),var(--mint-400))', transition: 'width .25s ease',
              }} />
            </div>
            <p style={{ fontSize: 'var(--text-xs)', color: 'var(--ink-soft)', margin: '0 0 4px', fontFamily: 'var(--font-mono)' }}>
              SAVOL {quizIndex + 1} / {QUIZ_QUESTIONS.length}
            </p>
            <h1 style={{ fontFamily: 'var(--font-display)', fontSize: 'var(--text-lg)', margin: '0 0 6px', textWrap: 'balance' }}>
              {question.text}
            </h1>
            <p style={{ fontSize: 'var(--text-xs)', color: 'var(--ink-soft)', margin: '0 0 16px' }}>
              {question.type === 'multi' ? 'Bir nechtasini tanlashingiz mumkin' : 'Bittasini tanlang'}
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
              {question.options!.map((opt) => {
                const current = answers[question.id];
                const selected = question.type === 'multi'
                  ? Array.isArray(current) && current.includes(opt.id)
                  : current === opt.id;
                return (
                  <button
                    key={opt.id} type="button"
                    onClick={() => (question.type === 'multi' ? answerMulti(opt.id) : answerSingle(opt.id))}
                    style={{
                      textAlign: 'left', fontFamily: 'var(--font-body)', fontSize: 'var(--text-base)',
                      padding: '13px 15px', borderRadius: 'var(--radius-md)', cursor: 'pointer',
                      border: `1px solid ${selected ? 'var(--mint-500)' : 'var(--line)'}`,
                      background: selected ? 'var(--mint-glass)' : 'rgba(255,255,255,.5)',
                      color: selected ? 'var(--mint-700)' : 'var(--ink)',
                      fontWeight: selected ? 600 : 400,
                      transition: 'background .12s, border-color .12s',
                    }}
                  >
                    {opt.label}
                  </button>
                );
              })}
            </div>

            <div style={{ display: 'flex', gap: '10px', marginTop: '20px' }}>
              <button type="button" onClick={() => (quizIndex > 0 ? setQuizIndex((i) => i - 1) : setStep(3))} style={{ ...btn('ghost'), flex: '0 0 auto' }}>
                Orqaga
              </button>
              <button type="button" onClick={nextQuestion} disabled={!answered || busy} style={{ ...btn('primary', !answered || busy), flex: 1 }}>
                {busy ? 'Saqlanmoqda…'
                  : quizIndex === QUIZ_QUESTIONS.length - 1 ? 'Yakunlash' : 'Keyingi'}
              </button>
            </div>
          </>
        )}
      </div>
    </main>
  );
}
