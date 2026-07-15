function WhatsAppFloat({
  t
}) {
  const [hover, setHover] = React.useState(false);
  const [bottomOffset, setBottomOffset] = React.useState(24);
  const {
    isMobile
  } = window.useViewport();
  const base = window.NP_ASSETS_BASE || '';
  const href = `https://wa.me/491605712229?text=${encodeURIComponent('Hallo, ich interessiere mich für eine Polsterreinigung.')}`;
  const ringText = 'Schreib uns • Schreib uns • Schreib uns • ';
  React.useEffect(() => {
    if (document.getElementById('np-whatsapp-pulse-keyframes')) return;
    const style = document.createElement('style');
    style.id = 'np-whatsapp-pulse-keyframes';
    style.textContent = `
      @keyframes np-whatsapp-pulse {
        0%, 84%, 100% { box-shadow: var(--shadow-md); }
        92% { box-shadow: 0 0 0 10px rgba(12,161,148,0); }
      }
      @keyframes np-whatsapp-ring-rotate { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }
      .np-whatsapp-ring { animation: np-whatsapp-ring-rotate 20s linear infinite; }
      @media (prefers-reduced-motion: reduce) { .np-whatsapp-action, .np-whatsapp-ring { animation: none !important; } }
    `;
    document.head.appendChild(style);
  }, []);
  React.useEffect(() => {
    const updatePosition = () => {
      const footer = document.querySelector('footer');
      if (!footer) return;
      const rect = footer.getBoundingClientRect();
      const lift = 60;
      const defaultBottom = 24;
      const footerEntering = rect.top < window.innerHeight - defaultBottom;
      setBottomOffset(footerEntering ? defaultBottom + lift : defaultBottom);
    };
    updatePosition();
    window.addEventListener('scroll', updatePosition, {
      passive: true
    });
    window.addEventListener('resize', updatePosition);
    return () => {
      window.removeEventListener('scroll', updatePosition);
      window.removeEventListener('resize', updatePosition);
    };
  }, []);
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'fixed',
      bottom: bottomOffset,
      right: isMobile ? 12 : 24,
      zIndex: 100,
      transition: 'bottom 180ms ease'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      width: isMobile ? 82 : 100,
      height: isMobile ? 82 : 100
    }
  }, /*#__PURE__*/React.createElement("svg", {
    viewBox: "0 0 100 100",
    "aria-hidden": "true",
    className: "np-whatsapp-ring",
    style: {
      position: 'absolute',
      inset: 0,
      width: isMobile ? 82 : 100,
      height: isMobile ? 82 : 100,
      pointerEvents: 'none'
    }
  }, /*#__PURE__*/React.createElement("defs", null, /*#__PURE__*/React.createElement("path", {
    id: "np-badge-ring",
    d: "M 9,50 A 41,41 0 1 1 91,50 A 41,41 0 1 1 9,50"
  })), /*#__PURE__*/React.createElement("text", {
    fontSize: isMobile ? 9 : 10.5,
    fontWeight: "800",
    letterSpacing: "1.2",
    fill: "var(--color-whatsapp)",
    style: {
      fontFamily: 'var(--font-body)',
      textTransform: 'uppercase'
    }
  }, /*#__PURE__*/React.createElement("textPath", {
    href: "#np-badge-ring"
  }, ringText))), /*#__PURE__*/React.createElement("a", {
    href: href,
    target: "_blank",
    rel: "noreferrer",
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    className: "np-whatsapp-action",
    style: {
      position: 'absolute',
      top: isMobile ? 16 : 20,
      left: isMobile ? 16 : 20,
      width: isMobile ? 50 : 60,
      height: isMobile ? 50 : 60,
      borderRadius: 'var(--radius-pill)',
      flexShrink: 0,
      background: 'var(--color-whatsapp)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      boxShadow: hover ? 'var(--shadow-lg)' : 'var(--shadow-md)',
      animation: hover ? 'none' : 'np-whatsapp-pulse 4s ease-in-out infinite',
      transform: hover ? 'translateY(-2px) scale(1.03)' : 'none',
      transition: `box-shadow var(--duration-base) var(--ease-standard), transform var(--duration-base) var(--ease-standard)`
    },
    "aria-label": t.hero.floatLabel,
    title: t.hero.floatLabel
  }, /*#__PURE__*/React.createElement("img", {
    src: base + "assets/icons/whatsapp.svg",
    alt: "",
    style: {
      width: isMobile ? 24 : 28,
      height: isMobile ? 24 : 28,
      filter: 'brightness(0) invert(1)'
    }
  }))));
}
window.WhatsAppFloat = WhatsAppFloat;