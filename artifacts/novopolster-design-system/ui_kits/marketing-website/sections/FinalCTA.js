function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function CTAButton({
  type,
  href,
  onClick,
  icon,
  children
}) {
  const base = window.NP_ASSETS_BASE || '';
  const {
    isMobile
  } = window.useViewport();
  const [hover, setHover] = React.useState(false);
  const [pressed, setPressed] = React.useState(false);
  const [focused, setFocused] = React.useState(false);
  const inverse = type === 'inverse';
  const inverseHover = inverse && hover && !pressed;
  const background = inverse ? pressed ? '#D3ECE7' : hover ? '#E9F7F4' : 'var(--color-bg)' : pressed ? 'rgba(253,252,250,0.4)' : hover ? 'rgba(253,252,250,0.3)' : 'rgba(253,252,250,0.2)';
  const style = {
    minHeight: 52,
    boxSizing: 'border-box',
    padding: '12px 32px',
    borderRadius: 999,
    border: focused ? `2px solid ${inverse ? '#096159' : 'var(--color-text-inverse)'}` : '2px solid transparent',
    background,
    color: inverse ? inverseHover ? '#096159' : 'var(--color-brand)' : 'var(--color-text-inverse)',
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 8,
    textDecoration: 'none',
    fontFamily: 'var(--font-display)',
    fontSize: isMobile ? 18 : 20,
    lineHeight: '28px',
    fontWeight: 700,
    textTransform: 'uppercase',
    cursor: 'pointer',
    transition: 'background 160ms ease, border-color 160ms ease',
    width: isMobile ? '100%' : 'auto'
  };
  const props = {
    style,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => {
      setHover(false);
      setPressed(false);
    },
    onMouseDown: () => setPressed(true),
    onMouseUp: () => setPressed(false),
    onFocus: () => setFocused(true),
    onBlur: () => {
      setFocused(false);
      setPressed(false);
    }
  };
  const iconStyle = inverse ? {
    width: 20,
    height: 20,
    background: inverseHover ? '#096159' : 'var(--color-brand)',
    WebkitMask: `url(${base}assets/icons/${icon}.svg) center / contain no-repeat`,
    mask: `url(${base}assets/icons/${icon}.svg) center / contain no-repeat`
  } : {
    width: 20,
    height: 20,
    background: 'var(--color-text-inverse)',
    WebkitMask: `url(${base}assets/icons/${icon}.svg) center / contain no-repeat`,
    mask: `url(${base}assets/icons/${icon}.svg) center / contain no-repeat`
  };
  return href ? /*#__PURE__*/React.createElement("a", _extends({
    href: href,
    target: "_blank",
    rel: "noreferrer"
  }, props), /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true",
    style: iconStyle
  }), children) : /*#__PURE__*/React.createElement("button", _extends({
    type: "button",
    onClick: onClick
  }, props), /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true",
    style: iconStyle
  }), children);
}
function FinalCTASection({
  t
}) {
  const base = window.NP_ASSETS_BASE || '';
  const {
    isMobile
  } = window.useViewport();
  const scrollToForm = () => document.getElementById('kontakt').scrollIntoView({
    behavior: 'smooth'
  });
  return /*#__PURE__*/React.createElement("section", {
    "data-screen-label": "CTA",
    style: {
      padding: isMobile ? 16 : 32,
      background: 'var(--color-bg)'
    }
  }, /*#__PURE__*/React.createElement(window.Reveal, {
    style: {
      maxWidth: 1376,
      minHeight: isMobile ? 360 : 412,
      margin: '0 auto',
      boxSizing: 'border-box',
      borderRadius: 24,
      padding: isMobile ? '48px 16px' : '64px 32px',
      background: 'var(--color-brand)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 680,
      width: '100%',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: 32,
      textAlign: 'center'
    }
  }, /*#__PURE__*/React.createElement(window.Reveal, null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: 8
    }
  }, /*#__PURE__*/React.createElement("h2", {
    style: {
      margin: 0,
      maxWidth: 680,
      fontFamily: 'var(--font-display)',
      fontSize: isMobile ? 36 : 48,
      lineHeight: isMobile ? '40px' : '54px',
      fontWeight: 800,
      textTransform: 'uppercase',
      color: 'var(--color-text-inverse)'
    }
  }, t.finalCta.title), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      maxWidth: 448,
      fontFamily: 'var(--font-body)',
      fontSize: isMobile ? 16 : 20,
      lineHeight: isMobile ? '24px' : '28px',
      color: 'var(--color-text-inverse)'
    }
  }, t.finalCta.subhead))), /*#__PURE__*/React.createElement(window.Reveal, {
    delay: 120,
    style: {
      alignSelf: 'stretch'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: isMobile ? '100%' : 'min(582px, 100%)',
      margin: '0 auto',
      display: 'flex',
      justifyContent: 'center',
      gap: 8,
      flexDirection: isMobile ? 'column' : 'row',
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement(CTAButton, {
    type: "inverse",
    href: "https://wa.me/491605712229",
    icon: "whatsapp"
  }, t.hero.ctaPrimary), /*#__PURE__*/React.createElement(CTAButton, {
    type: "transparency",
    onClick: scrollToForm,
    icon: "phone"
  }, t.hero.ctaSecondary))))));
}
window.FinalCTASection = FinalCTASection;