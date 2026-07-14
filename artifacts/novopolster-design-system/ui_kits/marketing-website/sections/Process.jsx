
function ProcessSection({ t }) {
  const base = window.NP_ASSETS_BASE || '';
  const { isMobile, isNarrow } = window.useViewport();
  return (
    <section id="ablauf" data-screen-label="How it works" style={{ background: 'var(--color-bg)', padding: isMobile ? '40px 16px' : isNarrow ? '56px 24px' : 'var(--space-8) var(--space-16)' }}>
      <div style={{
        maxWidth: 'var(--content-max-width)', margin: '0 auto',
        display: 'grid', gridTemplateColumns: isNarrow ? '1fr' : 'minmax(320px, 448px) minmax(320px, 1fr)',
        gap: isMobile ? 24 : isNarrow ? 40 : 'var(--space-30)', alignItems: 'flex-start', justifyContent: 'center',
      }}>
        <window.Reveal style={{ position: isNarrow ? 'relative' : 'sticky', top: isNarrow ? 'auto' : 120, alignSelf: 'start' }}>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', gap: 'var(--space-8)', maxWidth: 448 }}>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', gap: 'var(--space-3)' }}>
              <span style={{
                display: 'inline-flex', fontFamily: 'var(--font-display)', fontSize: 14, lineHeight: '20px', fontWeight: 700,
                textTransform: 'uppercase', color: 'var(--color-text-primary)',
                background: 'var(--neutral-100)', borderRadius: 16, padding: '4px 8px',
              }}>
                {t.process.eyebrow}
              </span>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-2)' }}>
                <h2 style={{
                  margin: 0, fontFamily: 'var(--font-display)', fontWeight: 800,
                  fontSize: 'clamp(2rem, 4vw, 48px)', lineHeight: 1.125, letterSpacing: '-0.02em',
                  textTransform: 'uppercase', color: 'var(--color-text-primary)',
                }}>
                  {t.process.title}
                </h2>
                <p style={{ margin: 0, fontFamily: 'var(--font-body)', fontSize: 'var(--text-lg)', lineHeight: 'var(--leading-relaxed)', color: 'var(--color-text-primary)' }}>
                  {t.process.subhead}
                </p>
              </div>
            </div>
            <a
              href="https://wa.me/491605712229"
              style={{
                display: 'inline-flex', alignSelf: isMobile ? 'stretch' : 'flex-start', width: isMobile ? '100%' : 'auto', boxSizing: 'border-box', alignItems: 'center', justifyContent: 'center', gap: 8,
                background: 'var(--color-brand)', color: 'var(--color-text-inverse)',
                fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 20, lineHeight: '28px',
                textTransform: 'uppercase', letterSpacing: 'var(--tracking-wide)',
                padding: '12px 24px', borderRadius: 'var(--radius-pill)', textDecoration: 'none',
              }}
            >
              <svg viewBox="0 0 256 256" width="20" height="20" fill="currentColor" style={{ flexShrink: 0 }}>
                <path d="M152.58,145.23l23,11.48A24,24,0,0,1,152,176a72.08,72.08,0,0,1-72-72A24,24,0,0,1,99.29,80.46l11.48,23L101,118a8,8,0,0,0-.73,7.51,56.47,56.47,0,0,0,30.15,30.15A8,8,0,0,0,138,155ZM232,128A104,104,0,0,1,79.12,219.82L45.07,231.17a16,16,0,0,1-20.24-20.24l11.35-34.05A104,104,0,1,1,232,128Zm-40,24a8,8,0,0,0-4.42-7.16l-32-16a8,8,0,0,0-8,.5l-14.69,9.8a40.55,40.55,0,0,1-16-16l9.8-14.69a8,8,0,0,0,.5-8l-16-32A8,8,0,0,0,104,64a40,40,0,0,0-40,40,88.1,88.1,0,0,0,88,88A40,40,0,0,0,192,152Z" />
              </svg>
              {t.process.ctaLabel}
            </a>
          </div>
        </window.Reveal>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
          {t.process.steps.map((s, i) => (
            <div key={i} style={{
              position: isMobile ? 'relative' : 'sticky', top: isMobile ? 'auto' : 120, minHeight: isMobile ? 220 : 248, boxSizing: 'border-box',
              display: 'flex', flexDirection: 'column', gap: isMobile ? 24 : 'var(--space-8)',
              background: 'var(--color-bg-sunken)', borderRadius: 24, padding: isMobile ? 24 : 'var(--space-8)',
              zIndex: i + 1,
            }}>
              <div style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: isMobile ? 44 : 60, lineHeight: isMobile ? '48px' : '64px', letterSpacing: '-0.02em', textTransform: 'uppercase', color: 'var(--color-brand)' }}>
                {String(i + 1).padStart(2, '0')}
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-2)' }}>
                <div style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 28, lineHeight: '32px', color: 'var(--color-text-primary)' }}>
                  {s.title}
                </div>
                <p style={{ margin: 0, fontFamily: 'var(--font-body)', fontSize: 16, lineHeight: '24px', color: 'var(--color-text-secondary)' }}>
                  {s.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
window.ProcessSection = ProcessSection;
