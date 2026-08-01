import { useEffect, useMemo, useRef, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { surveyById, type Survey, type SurveyQuestion } from '../data/surveys';
import { STUDY_TYPES } from '../data/reference';
import { formatSom } from '../lib/money';
import { api } from '../api/client';

/**
 * Taking a survey.
 *
 * One question per screen, never a scrolling list. Timing is recorded per
 * question, an attention check sits around two thirds through, and the answers
 * are scored for carelessness before submission. The quality layer is the
 * product — a paid panel without it just buys you fast nonsense.
 */

type Phase = 'intro' | 'question' | 'done';

const btn = (variant: 'primary' | 'ghost', disabled = false): React.CSSProperties => ({
  fontFamily: 'var(--font-body)', fontWeight: 600, fontSize: 'var(--text-base)',
  padding: '13px 24px', borderRadius: 'var(--radius-md)',
  cursor: disabled ? 'not-allowed' : 'pointer',
  border: variant === 'primary' ? 'none' : '1px solid var(--line)',
  background: variant === 'primary' ? 'var(--mint-600)' : 'transparent',
  color: variant === 'primary' ? '#fff' : 'var(--ink-mid)',
  opacity: disabled ? 0.45 : 1,
  boxShadow: variant === 'primary' && !disabled ? 'var(--glow-mint)' : 'none',
});

/**
 * Guard wrapper. Splitting the lookup from the runner means the runner receives
 * a definitely-present survey, so no code inside it has to defend against a
 * missing one.
 */
export default function TakerSurveyFlow() {
  const { id } = useParams();
  const navigate = useNavigate();
  const survey = useMemo(() => surveyById(id ?? ''), [id]);

  if (!survey) {
    return (
      <main style={{ padding: '80px 20px', textAlign: 'center' }}>
        <p style={{ color: 'var(--ink-mid)', marginBottom: '16px' }}>Bunday so'rovnoma topilmadi.</p>
        <button type="button" onClick={() => navigate('/t/surveys')} style={btn('primary')}>
          So'rovnomalarga qaytish
        </button>
      </main>
    );
  }

  return <SurveyRunner survey={survey} />;
}

function SurveyRunner({ survey }: { survey: Survey }) {
  const navigate = useNavigate();

  const [phase, setPhase] = useState<Phase>('intro');
  const [index, setIndex] = useState(0);
  const [answers, setAnswers] = useState<Record<string, string | string[]>>({});
  const [busy, setBusy] = useState(false);
  const [flags, setFlags] = useState<string[]>([]);
  const startedAt = useRef<number>(0);

  useEffect(() => { window.scrollTo(0, 0); }, [index, phase]);

  const question: SurveyQuestion | undefined = survey.questions[index];
  const current = question ? answers[question.id] : undefined;
  const answered = question
    ? question.type === 'multi'
      ? Array.isArray(current) && current.length > 0
      : current !== undefined && current !== ''
    : false;

  function setSingle(value: string) {
    setAnswers((a) => ({ ...a, [question!.id]: value }));
  }

  function toggleMulti(value: string) {
    setAnswers((a) => {
      const list = (a[question!.id] as string[]) ?? [];
      return {
        ...a,
        [question!.id]: list.includes(value) ? list.filter((x) => x !== value) : [...list, value],
      };
    });
  }

  /**
   * Quality evaluation. Three signals, all computable client-side:
   * rushing, giving the same answer to everything, and failing the check.
   */
  function evaluate(): string[] {
    const found: string[] = [];
    const seconds = (Date.now() - startedAt.current) / 1000;
    if (seconds < survey.minutes * 60 * 0.4) found.push('too_fast');

    const closed = survey.questions.filter((q) => q.type === 'single' && !q.attentionCheck);
    const positions = closed
      .map((q) => q.options?.indexOf(answers[q.id] as string) ?? -1)
      .filter((p) => p >= 0);
    if (positions.length >= 3) {
      const same = positions.filter((p) => p === positions[0]).length;
      if (same / positions.length >= 0.8) found.push('straightlined');
    }

    const check = survey.questions.find((q) => q.attentionCheck);
    if (check && answers[check.id] !== check.expectedAnswer) found.push('failed_attention');

    return found;
  }

  async function next() {
    if (index < survey.questions.length - 1) {
      setIndex((i) => i + 1);
      return;
    }
    setBusy(true);
    const found = evaluate();
    setFlags(found);
    await api.submitResponse({
      surveyId: survey.id,
      answers,
      durationSeconds: Math.round((Date.now() - startedAt.current) / 1000),
      qualityFlags: found,
      reward: survey.reward,
      completedAt: new Date().toISOString(),
    });
    setBusy(false);
    setPhase('done');
  }

  const shell: React.CSSProperties = {
    minHeight: '100vh', padding: '28px 20px 60px', position: 'relative', zIndex: 1,
  };
  const card: React.CSSProperties = {
    maxWidth: '620px', margin: '0 auto', background: 'var(--glass-strong)',
    border: '1px solid var(--glass-border)', borderRadius: 'var(--radius-lg)',
    boxShadow: 'var(--shadow-glass)', backdropFilter: 'blur(20px)',
    padding: '28px', boxSizing: 'border-box',
  };

  // ---------- Intro ----------
  if (phase === 'intro') {
    return (
      <main style={shell}>
        <div style={{ maxWidth: '620px', margin: '0 auto 20px' }}>
          <img src="/logo-full.png" alt="Fikra" style={{ height: '26px' }} />
        </div>
        <div style={card}>
          <span style={{ fontSize: 'var(--text-xs)', padding: '4px 10px', borderRadius: 'var(--radius-pill)', background: 'var(--mint-glass)', color: 'var(--mint-700)', border: '1px solid var(--mint-glass-border)' }}>
            {STUDY_TYPES.find((t) => t.id === survey.studyType)?.label}
          </span>
          <h1 style={{ fontFamily: 'var(--font-display)', fontSize: 'var(--text-xl)', margin: '14px 0 8px', textWrap: 'balance' }}>
            {survey.title}
          </h1>
          <p style={{ color: 'var(--ink-mid)', margin: '0 0 20px' }}>{survey.description}</p>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(110px,1fr))', gap: '10px', marginBottom: '20px' }}>
            {[
              [`${survey.questions.length} ta savol`, 'Savollar'],
              [`${survey.minutes} daqiqa`, 'Taxminiy vaqt'],
              [formatSom(survey.reward), 'Mukofot'],
              [survey.org, 'Tashkilot'],
            ].map(([value, label]) => (
              <div key={label} style={{ background: 'rgba(255,255,255,.5)', border: '1px solid var(--line)', borderRadius: 'var(--radius-md)', padding: '10px 12px' }}>
                <span style={{ display: 'block', fontWeight: 700, fontSize: 'var(--text-sm)' }}>{value}</span>
                <span style={{ fontSize: 'var(--text-xs)', color: 'var(--ink-soft)' }}>{label}</span>
              </div>
            ))}
          </div>

          {survey.interviewReward && (
            <div style={{ padding: '12px 14px', borderRadius: 'var(--radius-md)', background: 'var(--mint-glass)', border: '1px solid var(--mint-glass-border)', marginBottom: '18px' }}>
              <strong style={{ color: 'var(--mint-700)' }}>Suhbatga tanlov.</strong>{' '}
              <span style={{ fontSize: 'var(--text-sm)', color: 'var(--ink-mid)' }}>
                Mos kelsangiz, video suhbatga taklif qilinasiz — {formatSom(survey.interviewReward)} alohida to'lanadi.
              </span>
            </div>
          )}

          <p style={{ fontSize: 'var(--text-sm)', color: 'var(--ink-mid)', margin: '0 0 18px' }}>
            Diqqat bilan javob bering. Beparvo javoblar tasdiqlanmaydi.
          </p>

          <button type="button" style={{ ...btn('primary'), width: '100%' }}
            onClick={() => { startedAt.current = Date.now(); setPhase('question'); }}>
            Boshlash
          </button>
        </div>
      </main>
    );
  }

  // ---------- Completion ----------
  if (phase === 'done') {
    const flagged = flags.length > 0;
    const wallet = api.getWallet();
    return (
      <main style={shell}>
        <div style={{ maxWidth: '620px', margin: '0 auto 20px' }}>
          <img src="/logo-full.png" alt="Fikra" style={{ height: '26px' }} />
        </div>
        <div style={{ ...card, textAlign: 'center' }}>
          <div style={{
            width: '58px', height: '58px', borderRadius: '50%', margin: '0 auto 16px',
            display: 'grid', placeItems: 'center', fontSize: '26px',
            background: flagged ? 'var(--amber-glass)' : 'var(--mint-glass)',
            border: `1px solid ${flagged ? 'var(--amber-glass-border)' : 'var(--mint-glass-border)'}`,
          }} aria-hidden>{flagged ? '!' : '✓'}</div>

          <h1 style={{ fontFamily: 'var(--font-display)', fontSize: 'var(--text-xl)', margin: '0 0 8px' }}>
            {flagged ? 'Javobingiz tekshiruvga yuborildi' : 'Rahmat! Javobingiz qabul qilindi'}
          </h1>

          {flagged ? (
            <p style={{ color: 'var(--ink-mid)', margin: '0 0 18px' }}>
              Javoblaringizda beparvolik belgilari aniqlandi
              {flags.includes('too_fast') && ' — juda tez yakunlandi'}
              {flags.includes('straightlined') && ' — bir xil variantlar tanlangan'}
              {flags.includes('failed_attention') && ' — diqqat tekshiruvi noto\u2019g\u2019ri'}
              . Beparvo javoblar sifat balingizni pasaytiradi.
            </p>
          ) : (
            <span style={{ display: 'block', fontFamily: 'var(--font-display)', fontSize: 'var(--text-3xl)', fontWeight: 800, color: 'var(--mint-700)', margin: '0 0 6px' }}>
              +{formatSom(survey.reward)}
            </span>
          )}

          {survey.interviewReward && !flagged && (
            <p style={{ color: 'var(--mint-700)', fontWeight: 600, margin: '0 0 12px' }}>
              Siz suhbatga nomzod sifatida ro'yxatga olindingiz.
            </p>
          )}

          <p style={{ fontSize: 'var(--text-sm)', color: 'var(--ink-mid)', margin: '0 0 4px' }}>
            Mablag' 3 kunlik tekshiruvdan so'ng yechib olish mumkin bo'ladi.
          </p>
          <p style={{ fontSize: 'var(--text-sm)', color: 'var(--ink-soft)', margin: '0 0 22px' }}>
            Kutilayotgan balans: <strong>{formatSom(wallet.pending)}</strong>
          </p>

          <div style={{ display: 'flex', gap: '10px' }}>
            <button type="button" style={{ ...btn('primary'), flex: 1 }} onClick={() => navigate('/t/surveys')}>
              Boshqa so'rovnoma topish
            </button>
            <button type="button" style={btn('ghost')} onClick={() => navigate('/t/dashboard')}>
              Bosh sahifa
            </button>
          </div>
        </div>
      </main>
    );
  }

  // ---------- Question ----------
  const progress = ((index + 1) / survey.questions.length) * 100;

  return (
    <main style={shell}>
      <div style={{ maxWidth: '620px', margin: '0 auto 16px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <img src="/logo-full.png" alt="Fikra" style={{ height: '22px' }} />
        <span style={{ fontSize: 'var(--text-xs)', color: 'var(--ink-soft)', fontFamily: 'var(--font-mono)' }}>
          SAVOL {index + 1} / {survey.questions.length}
        </span>
      </div>

      <div style={{ maxWidth: '620px', margin: '0 auto 16px', height: '5px', borderRadius: '3px', background: 'var(--line)', overflow: 'hidden' }}>
        <div style={{ width: `${progress}%`, height: '100%', background: 'linear-gradient(90deg,var(--mint-500),var(--mint-400))', transition: 'width .25s ease' }} />
      </div>

      <div style={card}>
        <h1 style={{ fontFamily: 'var(--font-display)', fontSize: 'var(--text-lg)', margin: '0 0 6px', textWrap: 'balance' }}>
          {question!.text}
        </h1>
        <p style={{ fontSize: 'var(--text-xs)', color: 'var(--ink-soft)', margin: '0 0 16px' }}>
          {question!.type === 'multi' ? 'Bir nechtasini tanlashingiz mumkin'
            : question!.type === 'long_text' ? 'O\u2019z so\u2019zlaringiz bilan yozing'
            : question!.type === 'scale' ? '1 dan 5 gacha baholang'
            : 'Bittasini tanlang'}
        </p>

        {(question!.type === 'single' || question!.type === 'multi') && (
          <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
            {question!.options!.map((opt) => {
              const selected = question!.type === 'multi'
                ? Array.isArray(current) && current.includes(opt)
                : current === opt;
              return (
                <button key={opt} type="button"
                  onClick={() => (question!.type === 'multi' ? toggleMulti(opt) : setSingle(opt))}
                  aria-pressed={selected}
                  style={{
                    textAlign: 'left', fontFamily: 'var(--font-body)', fontSize: 'var(--text-base)',
                    padding: '14px 16px', borderRadius: 'var(--radius-md)', cursor: 'pointer',
                    border: `1px solid ${selected ? 'var(--mint-500)' : 'var(--line)'}`,
                    background: selected ? 'var(--mint-glass)' : 'rgba(255,255,255,.55)',
                    color: selected ? 'var(--mint-700)' : 'var(--ink)',
                    fontWeight: selected ? 600 : 400,
                    transition: 'background .12s, border-color .12s',
                  }}>
                  {opt}
                </button>
              );
            })}
          </div>
        )}

        {question!.type === 'scale' && (
          <div>
            <div style={{ display: 'flex', gap: '8px' }}>
              {[1, 2, 3, 4, 5].map((n) => {
                const selected = current === String(n);
                return (
                  <button key={n} type="button" onClick={() => setSingle(String(n))} aria-pressed={selected}
                    style={{
                      flex: 1, padding: '18px 0', borderRadius: 'var(--radius-md)', cursor: 'pointer',
                      fontFamily: 'var(--font-display)', fontSize: 'var(--text-lg)', fontWeight: 700,
                      border: `1px solid ${selected ? 'var(--mint-500)' : 'var(--line)'}`,
                      background: selected ? 'var(--mint-glass)' : 'rgba(255,255,255,.55)',
                      color: selected ? 'var(--mint-700)' : 'var(--ink-mid)',
                    }}>{n}</button>
                );
              })}
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '8px', fontSize: 'var(--text-xs)', color: 'var(--ink-soft)' }}>
              <span>{question!.scaleLabels?.[0]}</span>
              <span>{question!.scaleLabels?.[1]}</span>
            </div>
          </div>
        )}

        {(question!.type === 'long_text' || question!.type === 'short_text') && (
          <textarea
            value={(current as string) ?? ''}
            onChange={(e) => setSingle(e.target.value)}
            rows={question!.type === 'long_text' ? 5 : 2}
            placeholder="Javobingizni yozing…"
            style={{
              width: '100%', boxSizing: 'border-box', fontFamily: 'var(--font-body)',
              fontSize: 'var(--text-base)', padding: '13px', borderRadius: 'var(--radius-md)',
              border: '1px solid var(--line)', background: 'rgba(255,255,255,.6)', resize: 'vertical',
            }}
          />
        )}

        <div style={{ display: 'flex', gap: '10px', marginTop: '22px' }}>
          <button type="button" style={btn('ghost')}
            onClick={() => (index > 0 ? setIndex((i) => i - 1) : setPhase('intro'))}>
            Orqaga
          </button>
          <button type="button" style={{ ...btn('primary', !answered || busy), flex: 1 }}
            disabled={!answered || busy} onClick={next}>
            {busy ? 'Yuborilmoqda…' : index === survey.questions.length - 1 ? 'Yakunlash' : 'Keyingi'}
          </button>
        </div>
      </div>
    </main>
  );
}
