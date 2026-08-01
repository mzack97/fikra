import { Link, useNavigate } from 'react-router-dom';

/**
 * The app shell.
 *
 * Extracted because the design used identical element ids (`side-home`,
 * `side-surveys`) on both the taker and creator sidebars — which is why
 * clicking "So'rovnomalar" as a creator landed you in the taker's app. A shared
 * component with an explicit `side` prop makes that collision impossible.
 */

type Side = 'taker' | 'creator';

const NAV: Record<Side, { id: string; label: string; to: string; icon: string }[]> = {
  taker: [
    { id: 'home', label: 'Bosh sahifa', to: '/t/dashboard', icon: '◧' },
    { id: 'surveys', label: "So'rovnomalar", to: '/t/surveys', icon: '☰' },
    { id: 'earnings', label: 'Daromad', to: '/t/earnings', icon: '₩' },
  ],
  creator: [
    { id: 'home', label: 'Bosh sahifa', to: '/c/dashboard', icon: '◧' },
    { id: 'surveys', label: "So'rovnomalarim", to: '/c/dashboard', icon: '☰' },
    { id: 'billing', label: 'Balans', to: '/c/dashboard', icon: '₩' },
  ],
};

export default function AppShell({
  side, active, children,
}: { side: Side; active: string; children: React.ReactNode }) {
  const navigate = useNavigate();
  const items = NAV[side];

  return (
    <div className="app-shell">
      <aside className="app-sidebar" style={{
        flexDirection: 'column', gap: '4px', padding: '20px 14px',
        borderRight: '1px solid var(--line)', background: 'var(--glass-soft)',
        backdropFilter: 'blur(20px)',
      }}>
        <button type="button" onClick={() => navigate('/')}
          style={{ background: 'none', border: 'none', padding: '0 0 22px 8px', cursor: 'pointer', textAlign: 'left' }}>
          <img src="/logo-full.png" alt="Fikra" style={{ height: '24px', display: 'block' }} />
        </button>

        {items.map((item) => {
          const on = item.id === active;
          return (
            <Link key={item.id} to={item.to} className="side-link"
              aria-current={on ? 'page' : undefined}
              style={{
                display: 'flex', alignItems: 'center', gap: '11px', padding: '11px 12px',
                borderRadius: 'var(--radius-md)', fontSize: 'var(--text-sm)',
                fontWeight: on ? 600 : 500,
                color: on ? 'var(--mint-700)' : 'var(--ink-mid)',
                background: on ? 'var(--mint-glass)' : 'transparent',
                border: `1px solid ${on ? 'var(--mint-glass-border)' : 'transparent'}`,
                textDecoration: 'none',
              }}>
              <span aria-hidden style={{ opacity: 0.7 }}>{item.icon}</span>
              {item.label}
            </Link>
          );
        })}

        <div style={{ marginTop: 'auto', paddingTop: '16px', borderTop: '1px solid var(--line)' }}>
          <span style={{
            display: 'inline-block', fontSize: 'var(--text-xs)', color: 'var(--ink-soft)',
            padding: '6px 8px',
          }}>
            {side === 'creator' ? 'Biznes hisobi' : 'Panelist hisobi'}
          </span>
        </div>
      </aside>

      <main className="app-main" style={{ padding: '28px 32px', position: 'relative', zIndex: 1, minWidth: 0 }}>
        {children}
      </main>

      <nav className="app-tabbar" style={{
        position: 'fixed', bottom: 0, left: 0, right: 0, height: '64px',
        background: 'var(--glass-strong)', backdropFilter: 'blur(20px)',
        borderTop: '1px solid var(--line)', justifyContent: 'space-around',
        alignItems: 'center', zIndex: 10,
      }}>
        {items.map((item) => (
          <Link key={item.id} to={item.to}
            style={{
              display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '3px',
              fontSize: 'var(--text-xs)', textDecoration: 'none',
              color: item.id === active ? 'var(--mint-700)' : 'var(--ink-soft)',
              fontWeight: item.id === active ? 600 : 400,
            }}>
            <span aria-hidden>{item.icon}</span>
            {item.label}
          </Link>
        ))}
      </nav>
    </div>
  );
}
