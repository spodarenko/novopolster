function FAQSection({
  t
}) {
  const {
    FAQAccordion
  } = window.NovoPolsterDesignSystem_1b2f21;
  const {
    isMobile,
    isNarrow
  } = window.useViewport();
  const items = t.faq.items.map(i => ({
    question: i.q,
    answer: i.a
  }));
  return /*#__PURE__*/React.createElement("section", {
    id: "faq",
    "data-screen-label": "FAQ",
    style: {
      padding: isMobile ? 16 : 'var(--space-8)'
    }
  }, /*#__PURE__*/React.createElement(window.Reveal, {
    style: {
      maxWidth: 'var(--content-max-width)',
      margin: '0 auto',
      background: '#F2ECE5',
      borderRadius: 32,
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
  }, t.faq.eyebrow), /*#__PURE__*/React.createElement("div", {
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
  }, t.faq.title), t.faq.subhead ? /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontFamily: 'var(--font-body)',
      fontSize: isMobile ? 16 : 'var(--text-lg)',
      lineHeight: 'var(--leading-relaxed)',
      color: 'var(--color-text-primary)'
    }
  }, t.faq.subhead) : null))), /*#__PURE__*/React.createElement(window.Reveal, {
    delay: 120
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 680,
      width: '100%'
    }
  }, /*#__PURE__*/React.createElement(FAQAccordion, {
    items: items,
    defaultOpen: 0
  }))))));
}
window.FAQSection = FAQSection;