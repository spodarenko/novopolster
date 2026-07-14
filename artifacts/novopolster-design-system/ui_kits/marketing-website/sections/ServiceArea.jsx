function ServiceAreaSection({ t }) {
  const base = window.NP_ASSETS_BASE || '';
  const { isMobile, isNarrow } = window.useViewport();
  const districts = ['Schwabing', 'Bogenhausen', 'Maxvorstadt', 'Sendling', 'Neuhausen', 'Grünwald', 'Starnberg', 'Unterföhring', 'Ottobrunn'];
  return (
    <section id="zone" data-screen-label="Service area" style={{ padding: isMobile ? '40px 16px' : 'var(--space-8)', background: 'var(--color-bg)' }}>
      <window.Reveal style={{
        display: 'flex', flexDirection: 'column', gap: isMobile ? 32 : 'var(--space-16)', alignItems: 'center',
        maxWidth: 'var(--content-max-width)', margin: '0 auto',
      }}>
        <window.Reveal><div style={{ display: 'flex', flexDirection: 'column', gap: isMobile ? 24 : 'var(--space-8)', alignItems: 'center', maxWidth: 680, textAlign: 'center' }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-3)', alignItems: 'center' }}>
            <span style={{
              display: 'inline-flex', background: '#F2ECE5', borderRadius: 16, padding: '4px 8px',
              fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 14, lineHeight: '20px',
              textTransform: 'uppercase', color: 'var(--color-text-primary)',
            }}>
              {t.serviceArea.eyebrow}
            </span>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-2)', alignItems: 'center' }}>
              <h2 style={{
                margin: 0, fontFamily: 'var(--font-display)', fontWeight: 800,
                fontSize: 'clamp(2rem, 4vw, 48px)', lineHeight: 1.125,
                textTransform: 'uppercase', color: 'var(--color-text-primary)',
              }}>
                {t.serviceArea.title}
              </h2>
              <p style={{ margin: 0, fontFamily: 'var(--font-body)', fontSize: isMobile ? 16 : 20, lineHeight: isMobile ? '24px' : '28px', color: 'var(--color-text-primary)', maxWidth: 448 }}>
                {t.serviceArea.text}
              </p>
            </div>
          </div>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8, justifyContent: 'center', width: '100%' }}>
            {districts.map((d) => (
              <span key={d} style={{
                display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
                width: isMobile ? 'auto' : 128.8, minHeight: 36, padding: '6px 14px', boxSizing: 'border-box',
                borderRadius: 'var(--radius-pill)', background: '#F7F5F1',
                fontFamily: 'var(--font-body)', fontSize: 16, lineHeight: '24px', fontWeight: 400,
                color: 'var(--color-text-muted)', whiteSpace: 'nowrap',
              }}>{d}</span>
            ))}
          </div>
        </div></window.Reveal>
        <window.Reveal delay={120}><div style={{
          width: '100%', height: isMobile ? 300 : isNarrow ? 420 : 556, borderRadius: 32, overflow: 'hidden', background: 'var(--color-bg-sunken)',
        }}>
          <img src={base + 'assets/images/service-area-map.webp'} alt="" style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
        </div></window.Reveal>
      </window.Reveal>
    </section>
  );
}
window.ServiceAreaSection = ServiceAreaSection;
