function SectionHeading({
  eyebrow,
  title,
  subhead,
  badge
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-3)',
      maxWidth: 560
    }
  }, badge ? /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      alignSelf: 'flex-start',
      fontFamily: 'var(--font-display)',
      fontSize: 14,
      lineHeight: '20px',
      fontWeight: 700,
      textTransform: 'uppercase',
      color: 'var(--color-text-primary)',
      background: 'var(--neutral-100)',
      borderRadius: 16,
      padding: '4px 8px'
    }
  }, eyebrow) : /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 'var(--text-sm)',
      fontWeight: 600,
      letterSpacing: 'var(--tracking-widest)',
      textTransform: 'uppercase',
      color: 'var(--color-brand)',
      display: 'flex',
      alignItems: 'center',
      gap: 10
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 24,
      height: 1,
      background: 'var(--color-brand)'
    }
  }), eyebrow), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontSize: 'clamp(2rem, 4vw, 48px)',
      lineHeight: 1.125,
      letterSpacing: '-0.02em',
      color: 'var(--color-text-primary)',
      textTransform: 'uppercase'
    }
  }, title), subhead ? /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontSize: 'var(--text-base)',
      color: 'var(--color-text-secondary)'
    }
  }, subhead) : null);
}
window.SectionHeading = SectionHeading;
function BenefitCard({
  c
}) {
  const {
    isMobile
  } = window.useViewport();
  return /*#__PURE__*/React.createElement("div", {
    style: {
      minHeight: isMobile ? 238 : 266,
      boxSizing: 'border-box',
      background: '#F7F5F1',
      borderRadius: 32,
      padding: isMobile ? 20 : 24,
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-4)',
      justifyContent: 'flex-start'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 64,
      height: 64,
      borderRadius: 22,
      background: 'var(--color-surface)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: `../../assets/icons/${c.icon}.svg`,
    alt: "",
    style: {
      width: 28,
      height: 28,
      filter: 'invert(38%) sepia(80%) saturate(600%) hue-rotate(140deg) brightness(0.9)'
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 800,
      fontSize: isMobile ? 24 : 28,
      lineHeight: isMobile ? '28px' : '32px',
      color: 'var(--color-text-primary)'
    }
  }, c.title), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 16,
      lineHeight: '24px',
      color: 'var(--color-text-secondary)'
    }
  }, c.desc));
}
function BenefitsSection({
  t
}) {
  const {
    isMobile,
    isNarrow
  } = window.useViewport();
  return /*#__PURE__*/React.createElement("section", {
    id: "vorteile",
    "data-screen-label": "Benefits",
    style: {
      padding: isMobile ? '24px 16px' : isNarrow ? '28px 24px' : '32px 64px'
    }
  }, /*#__PURE__*/React.createElement(window.Reveal, {
    style: {
      display: 'grid',
      gridTemplateColumns: isNarrow ? '1fr' : '0.85fr 1.15fr',
      gap: 20,
      maxWidth: 1312,
      margin: '0 auto'
    }
  }, /*#__PURE__*/React.createElement(window.Reveal, {
    style: {
      minHeight: isMobile ? 360 : isNarrow ? 520 : 784
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      width: '100%',
      height: '100%',
      minHeight: isMobile ? 360 : isNarrow ? 520 : 784,
      borderRadius: 32,
      overflow: 'hidden',
      background: '#F7F5F1'
    }
  }, /*#__PURE__*/React.createElement(window.LoopVideo, {
    src: "../../assets/video/why-us-video.mp4",
    poster: "../../assets/images/why-us.webp",
    videoStyle: {
      position: 'absolute',
      inset: 0,
      width: '100%',
      height: '100%',
      objectFit: 'cover',
      display: 'block',
      transform: 'scale(1.02)'
    }
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 20
    }
  }, /*#__PURE__*/React.createElement(window.Reveal, {
    delay: 100
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      background: '#F7F5F1',
      borderRadius: 32,
      padding: isMobile ? 24 : 32
    }
  }, /*#__PURE__*/React.createElement(SectionHeading, {
    eyebrow: t.benefits.eyebrow,
    title: t.benefits.title,
    badge: true
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: isMobile ? '1fr' : 'repeat(2, 1fr)',
      gap: 20,
      flex: 1
    }
  }, t.benefits.cards.map((c, i) => /*#__PURE__*/React.createElement(window.Reveal, {
    key: c.title,
    delay: 180 + i * 80
  }, /*#__PURE__*/React.createElement(BenefitCard, {
    c: c
  })))))));
}
window.BenefitsSection = BenefitsSection;