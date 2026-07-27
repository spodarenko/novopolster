function ServiceMediaCard({
  item,
  base,
  onSelect
}) {
  const [hover, setHover] = React.useState(false);
  const {
    isMobile
  } = window.useViewport();
  return /*#__PURE__*/React.createElement("a", {
    href: "#kontakt",
    draggable: false,
    onClick: e => {
      e.preventDefault();
      onSelect(item.image);
    },
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    onFocus: () => setHover(true),
    onBlur: () => setHover(false),
    style: {
      position: 'relative',
      width: isMobile ? 280 : 362,
      height: isMobile ? 280 : 420,
      flexShrink: 0,
      display: 'flex',
      alignItems: 'flex-end',
      overflow: 'hidden',
      borderRadius: 24,
      padding: isMobile ? 18 : 24,
      boxSizing: 'border-box',
      color: 'var(--color-text-inverse)',
      textDecoration: 'none',
      zIndex: 0
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: `${base}assets/images/services/${item.image}.webp`,
    alt: "",
    "aria-hidden": "true",
    draggable: false,
    style: {
      position: 'absolute',
      inset: 0,
      width: '100%',
      height: '100%',
      objectFit: 'cover',
      transform: hover ? 'scale(1.06)' : 'scale(1)',
      transition: 'transform 420ms cubic-bezier(0.16, 1, 0.3, 1)'
    }
  }), /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true",
    style: {
      position: 'absolute',
      inset: 0,
      background: 'linear-gradient(180deg, rgba(19, 20, 19, 0) 38%, rgba(19, 20, 19, 0.78) 100%)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      zIndex: 1,
      maxWidth: isMobile ? 'calc(100% - 70px)' : 'calc(100% - 88px)'
    }
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontFamily: 'var(--font-display)',
      fontWeight: 800,
      fontSize: isMobile ? 26 : 32,
      lineHeight: isMobile ? '32px' : '40px',
      textTransform: 'uppercase'
    }
  }, item.title[0], /*#__PURE__*/React.createElement("br", null), item.title[1])), /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true",
    style: {
      position: 'absolute',
      zIndex: 1,
      right: isMobile ? 18 : 24,
      bottom: isMobile ? 18 : 24,
      width: isMobile ? 52 : 64,
      height: isMobile ? 52 : 64,
      borderRadius: '50%',
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      background: 'rgba(253, 252, 250, 0.18)',
      color: 'var(--color-text-inverse)',
      fontFamily: 'var(--font-body)',
      fontSize: 38,
      lineHeight: 1,
      transform: hover ? 'scale(1.08)' : 'scale(1)',
      transition: 'transform 220ms ease'
    }
  }, "\u2192"));
}
function ServicesGridSection({
  t
}) {
  const base = window.NP_ASSETS_BASE || '';
  const {
    isMobile,
    isNarrow
  } = window.useViewport();
  const items = [...t.servicesGrid.items, ...t.servicesGrid.items];
  const [isCardHovered, setIsCardHovered] = React.useState(false);
  const [isDragging, setIsDragging] = React.useState(false);
  const viewportRef = React.useRef(null);
  const rafRef = React.useRef(null);
  const speedRef = React.useRef(1); // 1 normal pace, 0.1875 hover-slow (matches the old playbackRate)
  const dragRef = React.useRef({
    active: false,
    startX: 0,
    startScroll: 0,
    moved: false
  });
  const justDraggedRef = React.useRef(false);
  React.useEffect(() => {
    speedRef.current = isCardHovered ? 0.1875 : 1;
  }, [isCardHovered]);
  const selectService = serviceId => {
    window.dispatchEvent(new CustomEvent('np:select-service', {
      detail: {
        serviceId
      }
    }));
    const contactSection = document.getElementById('kontakt');
    if (contactSection) contactSection.scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    });
  };

  // Auto-advance the native scroll position (instead of animating transform) so the same
  // scrollLeft also responds to touch/trackpad swipes and the mouse-drag handler below --
  // one shared mechanism instead of two competing ones. Wraps at the halfway point since
  // `items` is the list duplicated once, so the wrap is invisible.
  React.useEffect(() => {
    const viewport = viewportRef.current;
    if (!viewport || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return undefined;
    let lastTime = null;
    const step = time => {
      if (lastTime === null) lastTime = time;
      const dt = (time - lastTime) / 1000;
      lastTime = time;
      if (!dragRef.current.active && speedRef.current > 0) {
        const half = viewport.scrollWidth / 2;
        const pxPerSecond = half / 45; // same 45s full-cycle pace as the previous animation
        let next = viewport.scrollLeft + pxPerSecond * speedRef.current * dt;
        if (next >= half) next -= half;
        viewport.scrollLeft = next;
      }
      rafRef.current = requestAnimationFrame(step);
    };
    rafRef.current = requestAnimationFrame(step);
    return () => cancelAnimationFrame(rafRef.current);
  }, []);

  // Click-and-drag scrolling for mouse pointers. Touch/pen already scroll natively via
  // overflow-x -- only intercept `mouse` so we don't fight the browser's own touch panning.
  React.useEffect(() => {
    const viewport = viewportRef.current;
    if (!viewport) return undefined;
    const onPointerDown = e => {
      if (e.pointerType !== 'mouse') return;
      dragRef.current = {
        active: true,
        startX: e.clientX,
        startScroll: viewport.scrollLeft,
        moved: false
      };
      setIsDragging(true);
      viewport.setPointerCapture(e.pointerId);
    };
    const onPointerMove = e => {
      if (!dragRef.current.active) return;
      const dx = e.clientX - dragRef.current.startX;
      if (Math.abs(dx) > 4) dragRef.current.moved = true;
      viewport.scrollLeft = dragRef.current.startScroll - dx;
    };
    const onPointerUp = () => {
      if (!dragRef.current.active) return;
      if (dragRef.current.moved) {
        justDraggedRef.current = true;
        setTimeout(() => {
          justDraggedRef.current = false;
        }, 0);
      }
      dragRef.current.active = false;
      setIsDragging(false);
    };
    // Swallow the click a drag-release would otherwise fire on the card underneath.
    const onClickCapture = e => {
      if (justDraggedRef.current) {
        e.preventDefault();
        e.stopPropagation();
      }
    };
    viewport.addEventListener('pointerdown', onPointerDown);
    viewport.addEventListener('pointermove', onPointerMove);
    viewport.addEventListener('pointerup', onPointerUp);
    viewport.addEventListener('pointercancel', onPointerUp);
    viewport.addEventListener('click', onClickCapture, true);
    return () => {
      viewport.removeEventListener('pointerdown', onPointerDown);
      viewport.removeEventListener('pointermove', onPointerMove);
      viewport.removeEventListener('pointerup', onPointerUp);
      viewport.removeEventListener('pointercancel', onPointerUp);
      viewport.removeEventListener('click', onClickCapture, true);
    };
  }, []);
  return /*#__PURE__*/React.createElement("section", {
    id: "services",
    "data-screen-label": "Services",
    style: {
      padding: isMobile ? '48px 16px 24px' : isNarrow ? '56px 24px 28px' : '64px 64px 32px',
      background: 'var(--color-bg)',
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("style", null, `
        .np-services-viewport { scrollbar-width: none; }
        .np-services-viewport::-webkit-scrollbar { display: none; }
      `), /*#__PURE__*/React.createElement(window.Reveal, {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: isMobile ? 24 : 32
    }
  }, /*#__PURE__*/React.createElement("header", {
    style: {
      width: 'min(680px, 100%)',
      margin: '0 auto',
      textAlign: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'inline-flex',
      marginBottom: 12,
      padding: '4px 8px',
      borderRadius: 16,
      background: '#F2ECE5',
      fontFamily: 'var(--font-display)',
      fontWeight: 700,
      fontSize: 14,
      lineHeight: '20px',
      textTransform: 'uppercase'
    }
  }, t.servicesGrid.tag), /*#__PURE__*/React.createElement("h2", {
    style: {
      margin: 0,
      color: 'var(--color-text-primary)',
      fontFamily: 'var(--font-display)',
      fontWeight: 800,
      fontSize: isMobile ? 36 : 'clamp(36px, 3.34vw, 48px)',
      lineHeight: '1.125',
      textTransform: 'uppercase'
    }
  }, t.servicesGrid.title), /*#__PURE__*/React.createElement("p", {
    style: {
      maxWidth: 448,
      margin: '12px auto 0',
      color: 'var(--color-text-secondary)',
      fontSize: isMobile ? 17 : 20,
      lineHeight: isMobile ? '24px' : '28px'
    }
  }, t.servicesGrid.subhead)), /*#__PURE__*/React.createElement("div", {
    className: "np-services-viewport",
    ref: viewportRef,
    onMouseEnter: () => setIsCardHovered(true),
    onMouseLeave: () => setIsCardHovered(false),
    onFocus: () => setIsCardHovered(true),
    onBlur: () => setIsCardHovered(false),
    style: {
      width: '100%',
      overflowX: 'auto',
      overflowY: 'hidden',
      overscrollBehaviorX: 'contain',
      cursor: isDragging ? 'grabbing' : 'grab'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "np-services-track",
    style: {
      display: 'flex',
      width: 'max-content',
      gap: isMobile ? 12 : 20,
      padding: isMobile ? '0 0 12px' : '0 10px 12px'
    }
  }, items.map((item, index) => /*#__PURE__*/React.createElement(ServiceMediaCard, {
    key: `${item.image}-${index}`,
    item: item,
    base: base,
    onSelect: selectService
  }))))));
}
window.ServicesGridSection = ServicesGridSection;