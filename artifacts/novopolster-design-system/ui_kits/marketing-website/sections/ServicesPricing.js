function ServicesPricingSection({
  t
}) {
  const {
    PricingTabs
  } = window.NovoPolsterDesignSystem_1b2f21;
  const {
    isMobile,
    isNarrow
  } = window.useViewport();
  return /*#__PURE__*/React.createElement("section", {
    id: "leistungen",
    "data-screen-label": "Services + Pricing",
    style: {
      padding: isMobile ? 16 : 'var(--space-8)'
    }
  }, /*#__PURE__*/React.createElement(window.Reveal, {
    style: {
      maxWidth: 'var(--content-max-width)',
      margin: '0 auto',
      background: '#F2ECE5',
      borderRadius: 24,
      padding: isMobile ? '40px 16px' : isNarrow ? '56px 24px' : 'var(--space-16) var(--space-8)',
      display: 'flex',
      flexDirection: 'column',
      gap: isMobile ? 32 : 'var(--space-16)'
    }
  }, /*#__PURE__*/React.createElement(window.Reveal, null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: 'var(--space-3)',
      textAlign: 'center',
      maxWidth: 680,
      margin: '0 auto'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      fontFamily: 'var(--font-display)',
      fontSize: 14,
      lineHeight: '20px',
      fontWeight: 700,
      textTransform: 'uppercase',
      color: 'var(--color-text-primary)',
      background: 'var(--color-bg)',
      borderRadius: 16,
      padding: '4px 8px'
    }
  }, t.pricing.eyebrow), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-2)'
    }
  }, /*#__PURE__*/React.createElement("h2", {
    style: {
      margin: 0,
      fontFamily: 'var(--font-display)',
      fontWeight: 800,
      fontSize: 'clamp(2rem, 4vw, 48px)',
      lineHeight: 1.125,
      letterSpacing: '-0.02em',
      textTransform: 'uppercase',
      color: 'var(--color-text-primary)'
    }
  }, t.pricing.title), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontFamily: 'var(--font-body)',
      fontSize: isMobile ? 16 : 'var(--text-lg)',
      lineHeight: 'var(--leading-relaxed)',
      color: 'var(--color-text-primary)'
    }
  }, t.pricing.subhead)))), /*#__PURE__*/React.createElement(window.Reveal, {
    delay: 120
  }, /*#__PURE__*/React.createElement(PricingTabs, {
    categories: t.pricing.categories,
    ctaLabel: t.hero.ctaPrimary
  }))));
}
window.ServicesPricingSection = ServicesPricingSection;