function CTAButton({ type, href, onClick, icon, children }) {
  const base = window.NP_ASSETS_BASE || '';
  const { isMobile } = window.useViewport();
  const [hover, setHover] = React.useState(false);
  const [pressed, setPressed] = React.useState(false);
  const [focused, setFocused] = React.useState(false);
  const inverse = type === 'inverse';
  const inverseHover = inverse && hover && !pressed;
  const background = inverse
    ? (pressed ? '#D3ECE7' : hover ? '#E9F7F4' : 'var(--color-bg)')
    : (pressed ? 'rgba(253,252,250,0.4)' : hover ? 'rgba(253,252,250,0.3)' : 'rgba(253,252,250,0.2)');
  const style = {
    minHeight: 52, boxSizing: 'border-box', padding: '12px 32px', borderRadius: 999,
    border: focused ? `2px solid ${inverse ? '#096159' : 'var(--color-text-inverse)'}` : '2px solid transparent',
    background, color: inverse ? (inverseHover ? '#096159' : 'var(--color-brand)') : 'var(--color-text-inverse)',
    display: 'inline-flex', alignItems: 'center', justifyContent: 'center', gap: 8, textDecoration: 'none',
    fontFamily: 'var(--font-display)', fontSize: isMobile ? 18 : 20, lineHeight: '28px', fontWeight: 700,
    textTransform: 'uppercase', cursor: 'pointer', transition: 'background 160ms ease, border-color 160ms ease',
    width: isMobile ? '100%' : 'auto',
  };
  const props = {
    style, onMouseEnter: () => setHover(true), onMouseLeave: () => { setHover(false); setPressed(false); },
    onMouseDown: () => setPressed(true), onMouseUp: () => setPressed(false),
    onFocus: () => setFocused(true), onBlur: () => { setFocused(false); setPressed(false); },
  };
  const iconStyle = inverse
    ? { width: 20, height: 20, background: inverseHover ? '#096159' : 'var(--color-brand)', WebkitMask: `url(${base}assets/icons/${icon}.svg) center / contain no-repeat`, mask: `url(${base}assets/icons/${icon}.svg) center / contain no-repeat` }
    : { width: 20, height: 20, background: 'var(--color-text-inverse)', WebkitMask: `url(${base}assets/icons/${icon}.svg) center / contain no-repeat`, mask: `url(${base}assets/icons/${icon}.svg) center / contain no-repeat` };
  return href ? <a href={href} target="_blank" rel="noreferrer" {...props}><span aria-hidden="true" style={iconStyle} />{children}</a> : <button type="button" onClick={onClick} {...props}><span aria-hidden="true" style={iconStyle} />{children}</button>;
}

function FinalCTASection({ t }) {
  const base = window.NP_ASSETS_BASE || '';
  const { isMobile } = window.useViewport();
  const scrollToForm = () => document.getElementById('kontakt').scrollIntoView({ behavior: 'smooth' });
  return (
    <section data-screen-label="CTA" style={{ padding: isMobile ? 16 : 32, background: 'var(--color-bg)' }}>
      <window.Reveal style={{
        maxWidth: 1376, minHeight: isMobile ? 360 : 412, margin: '0 auto', boxSizing: 'border-box', borderRadius: 24,
        padding: isMobile ? '48px 16px' : '64px 32px', background: 'var(--color-brand)', display: 'flex', alignItems: 'center', justifyContent: 'center',
      }}>
        <div style={{ maxWidth: 680, width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 32, textAlign: 'center' }}>
          <window.Reveal><div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 8 }}>
            <h2 style={{ margin: 0, maxWidth: 680, fontFamily: 'var(--font-display)', fontSize: isMobile ? 36 : 48, lineHeight: isMobile ? '40px' : '54px', fontWeight: 800, textTransform: 'uppercase', color: 'var(--color-text-inverse)' }}>
              {t.finalCta.title}
            </h2>
            <p style={{ margin: 0, maxWidth: 448, fontFamily: 'var(--font-body)', fontSize: isMobile ? 16 : 20, lineHeight: isMobile ? '24px' : '28px', color: 'var(--color-text-inverse)' }}>
              {t.finalCta.subhead}
            </p>
          </div></window.Reveal>
          <window.Reveal delay={120} style={{ alignSelf: 'stretch' }}><div style={{ width: isMobile ? '100%' : 'min(582px, 100%)', margin: '0 auto', display: 'flex', justifyContent: 'center', gap: 8, flexDirection: isMobile ? 'column' : 'row', flexWrap: 'wrap' }}>
            <CTAButton type="inverse" href="https://wa.me/491605712229" icon="whatsapp">{t.hero.ctaPrimary}</CTAButton>
            <CTAButton type="transparency" onClick={scrollToForm} icon="phone">{t.hero.ctaSecondary}</CTAButton>
          </div></window.Reveal>
        </div>
      </window.Reveal>
    </section>
  );
}
window.FinalCTASection = FinalCTASection;
