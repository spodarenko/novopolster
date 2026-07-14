import React from 'react';

/**
 * Compact dropdown for switching between the site's 4 languages.
 */
export function LanguageSwitcher({ value = 'DE', onChange, tone = 'light' }) {
  const [open, setOpen] = React.useState(false);
  const [hoverCode, setHoverCode] = React.useState(null);
  const rootRef = React.useRef(null);
  const langs = [
    { code: 'DE', label: 'Deutsch' },
    { code: 'EN', label: 'English' },
    { code: 'UA', label: 'Українська' },
    { code: 'IT', label: 'Italiano' },
  ];
  const dark = tone === 'dark';

  React.useEffect(() => {
    if (!open) return;
    const onOutsideClick = (e) => {
      if (rootRef.current && !rootRef.current.contains(e.target)) setOpen(false);
    };
    document.addEventListener('mousedown', onOutsideClick);
    return () => document.removeEventListener('mousedown', onOutsideClick);
  }, [open]);

  return (
    <div ref={rootRef} style={{ position: 'relative', fontFamily: 'var(--font-body)' }}>
      <button
        onClick={() => setOpen((o) => !o)}
        style={{
          display: 'flex', alignItems: 'center', gap: 6, cursor: 'pointer',
          background: dark ? 'rgba(255,255,255,0.08)' : 'var(--color-bg-sunken)',
          border: dark ? 'none' : '1px solid var(--color-border)',
          borderRadius: 'var(--radius-pill)',
          color: dark ? 'var(--color-text-inverse)' : 'var(--color-text-primary)',
          fontSize: 'var(--text-sm)', fontWeight: 600, padding: '8px 14px',
        }}
      >
        <img src={(window.NP_ASSETS_BASE || '') + "assets/icons/globe.svg"} alt="" style={{ width: 16, height: 16, filter: dark ? 'brightness(0) invert(1)' : 'none' }} />
        {value}
        <img src={(window.NP_ASSETS_BASE || '') + "assets/icons/chevron-down.svg"} alt="" style={{ width: 12, height: 12, filter: dark ? 'brightness(0) invert(1)' : 'none', transform: open ? 'rotate(180deg)' : 'none' }} />
      </button>
      {open ? (
        <div style={{
          position: 'absolute', top: '100%', right: 0, marginTop: 4,
          background: 'var(--color-surface)', border: '1px solid var(--color-border)',
          borderRadius: 'var(--radius-md)', boxShadow: 'var(--shadow-md)', overflow: 'hidden', zIndex: 10, minWidth: 200,
        }}>
          {langs.map((l) => (
            <div
              key={l.code}
              onClick={() => { onChange && onChange(l.code); setOpen(false); }}
              onMouseEnter={() => setHoverCode(l.code)}
              onMouseLeave={() => setHoverCode(null)}
              style={{
                padding: '10px 14px', fontSize: 'var(--text-sm)', cursor: 'pointer', whiteSpace: 'nowrap',
                color: l.code === value ? 'var(--color-brand-active)' : 'var(--color-text-primary)',
                fontWeight: l.code === value ? 700 : 400,
                background: l.code === value ? 'var(--color-brand-subtle)' : (hoverCode === l.code ? 'var(--color-bg-sunken)' : 'transparent'),
                transition: `background var(--duration-base) var(--ease-standard)`,
              }}
            >
              {l.code} — {l.label}
            </div>
          ))}
        </div>
      ) : null}
    </div>
  );
}
