function ServiceMediaCard({ item, base, onSelect }) {
  const [hover, setHover] = React.useState(false);
  const { isMobile } = window.useViewport();

  return (
    <a
      href="#kontakt"
      draggable={false}
      onClick={(e) => {
        e.preventDefault();
        onSelect(item.image);
      }}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      onFocus={() => setHover(true)}
      onBlur={() => setHover(false)}
      style={{
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
        zIndex: 0,
      }}
    >
      <img
        src={`${base}assets/images/services/${item.image}.webp`}
        alt=""
        aria-hidden="true"
        draggable={false}
        style={{
          position: 'absolute',
          inset: 0,
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          transform: hover ? 'scale(1.06)' : 'scale(1)',
          transition: 'transform 420ms cubic-bezier(0.16, 1, 0.3, 1)',
        }}
      />
      <span
        aria-hidden="true"
        style={{
          position: 'absolute',
          inset: 0,
          background: 'linear-gradient(180deg, rgba(19, 20, 19, 0) 38%, rgba(19, 20, 19, 0.78) 100%)',
        }}
      />
      <div style={{ position: 'relative', zIndex: 1, maxWidth: isMobile ? 'calc(100% - 70px)' : 'calc(100% - 88px)' }}>
        <p style={{
          margin: 0,
          fontFamily: 'var(--font-display)',
          fontWeight: 800,
          fontSize: isMobile ? 26 : 32,
          lineHeight: isMobile ? '32px' : '40px',
          textTransform: 'uppercase',
        }}>
          {item.title[0]}<br />{item.title[1]}
        </p>
      </div>
      <span
        aria-hidden="true"
        style={{
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
          transition: 'transform 220ms ease',
        }}
      >
        →
      </span>
    </a>
  );
}

function ServicesGridSection({ t }) {
  const base = window.NP_ASSETS_BASE || '';
  const { isMobile, isNarrow } = window.useViewport();
  const gutter = isMobile ? 16 : isNarrow ? 24 : 64;
  // Tripled (not just doubled) so there's a full spare copy on both sides -- lets scrollLeft
  // wrap seamlessly whichever direction the visitor scrolls/drags, not just forward.
  const items = [...t.servicesGrid.items, ...t.servicesGrid.items, ...t.servicesGrid.items];
  const [isCardHovered, setIsCardHovered] = React.useState(false);
  const [isDragging, setIsDragging] = React.useState(false);
  const viewportRef = React.useRef(null);
  const rafRef = React.useRef(null);
  const speedRef = React.useRef(1); // 1 normal pace, 0.1875 hover-slow (matches the old playbackRate)
  const dragRef = React.useRef({ active: false, startX: 0, startScroll: 0, moved: false });
  const justDraggedRef = React.useRef(false);
  const pendingRef = React.useRef(0); // px an arrow click still owes the scroller

  React.useEffect(() => {
    speedRef.current = isCardHovered ? 0.1875 : 1;
  }, [isCardHovered]);

  const selectService = (serviceId) => {
    window.dispatchEvent(new CustomEvent('np:select-service', { detail: { serviceId } }));
    const contactSection = document.getElementById('kontakt');
    if (contactSection) contactSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  // Arrow clicks only queue a distance here; the rAF loop below is the single writer of
  // scrollLeft. Native scrollBy({behavior:'smooth'}) cannot be used -- the loop overwrites
  // scrollLeft every frame, which silently cancels the browser's smooth scroll. Queuing
  // instead means repeated clicks accumulate rather than cutting each other off.
  const scrollByCard = (dir) => {
    if (!viewportRef.current) return;
    const cardWidth = (isMobile ? 280 : 362) + (isMobile ? 12 : 20);
    pendingRef.current += dir * cardWidth;
  };

  // Auto-advance the native scroll position (instead of animating transform) so the same
  // scrollLeft also responds to touch/trackpad swipes and the mouse-drag handler below --
  // one shared mechanism instead of two competing ones.
  React.useEffect(() => {
    const viewport = viewportRef.current;
    if (!viewport) return undefined;
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    let lastTime = null;

    const step = (time) => {
      if (lastTime === null) lastTime = time;
      const dt = Math.min((time - lastTime) / 1000, 0.05); // clamp: tab-switch gaps shouldn't jump
      lastTime = time;

      if (!dragRef.current.active) {
        let delta = 0;
        // Auto-drift. Suppressed under reduced motion, and paused while an arrow click is
        // still settling so a leftward click isn't partly eaten by the rightward drift.
        if (!reducedMotion && speedRef.current > 0 && pendingRef.current === 0) {
          const third = viewport.scrollWidth / 3;
          delta += (third / 45) * speedRef.current * dt; // same 45s full-cycle pace as before
        }
        // Ease off whatever the arrows queued, ~1/8s time constant.
        if (pendingRef.current !== 0) {
          const chunk = reducedMotion ? pendingRef.current : pendingRef.current * Math.min(1, dt * 8);
          pendingRef.current -= chunk;
          if (Math.abs(pendingRef.current) < 0.5) pendingRef.current = 0;
          delta += chunk;
        }
        if (delta) viewport.scrollLeft += delta;
      }
      rafRef.current = requestAnimationFrame(step);
    };
    rafRef.current = requestAnimationFrame(step);
    return () => cancelAnimationFrame(rafRef.current);
  }, []);

  // `items` is the list tripled, so [third, 2*third) of scrollWidth is a full, seamless copy.
  // Re-center into that middle copy whenever scrolling (auto, drag, touch, or trackpad) drifts
  // out of it, giving the illusion of an infinite scroll in either direction.
  React.useEffect(() => {
    const viewport = viewportRef.current;
    if (!viewport) return undefined;

    const normalize = () => {
      const third = viewport.scrollWidth / 3;
      if (!third) return;
      if (viewport.scrollLeft < third * 0.5) viewport.scrollLeft += third;
      else if (viewport.scrollLeft >= third * 1.5) viewport.scrollLeft -= third;
    };

    viewport.scrollLeft = viewport.scrollWidth / 3;
    viewport.addEventListener('scroll', normalize, { passive: true });
    window.addEventListener('resize', normalize);
    return () => {
      viewport.removeEventListener('scroll', normalize);
      window.removeEventListener('resize', normalize);
    };
  }, []);

  // Click-and-drag scrolling for mouse pointers. Touch/pen already scroll natively via
  // overflow-x -- only intercept `mouse` so we don't fight the browser's own touch panning.
  React.useEffect(() => {
    const viewport = viewportRef.current;
    if (!viewport) return undefined;

    const onPointerDown = (e) => {
      if (e.pointerType !== 'mouse') return;
      pendingRef.current = 0; // grabbing overrides an arrow click still in flight
      dragRef.current = { active: true, startX: e.clientX, startScroll: viewport.scrollLeft, moved: false };
      setIsDragging(true);
      viewport.setPointerCapture(e.pointerId);
    };
    const onPointerMove = (e) => {
      if (!dragRef.current.active) return;
      const dx = e.clientX - dragRef.current.startX;
      if (Math.abs(dx) > 4) dragRef.current.moved = true;
      viewport.scrollLeft = dragRef.current.startScroll - dx;
    };
    const onPointerUp = () => {
      if (!dragRef.current.active) return;
      if (dragRef.current.moved) {
        justDraggedRef.current = true;
        setTimeout(() => { justDraggedRef.current = false; }, 0);
      }
      dragRef.current.active = false;
      setIsDragging(false);
    };
    // Swallow the click a drag-release would otherwise fire on the card underneath.
    const onClickCapture = (e) => {
      if (justDraggedRef.current) { e.preventDefault(); e.stopPropagation(); }
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

  return (
    <section id="services" data-screen-label="Services" style={{ padding: isMobile ? '48px 0 24px' : isNarrow ? '56px 0 28px' : '64px 0 32px', background: 'var(--color-bg)', overflow: 'hidden' }}>
      <style>{`
        .np-services-viewport { scrollbar-width: none; }
        .np-services-viewport::-webkit-scrollbar { display: none; }

        /* Rest / hover / pressed all come from existing tokens: the neutral pill is the
           section's own tag background, the hover fill is the ink used for body headings. */
        .np-services-arrow {
          width: 48px; height: 48px; flex-shrink: 0;
          border: none; border-radius: 50%; padding: 0;
          display: inline-flex; align-items: center; justify-content: center;
          background: var(--neutral-100);
          color: var(--color-text-primary);
          cursor: pointer;
          transition: background 180ms ease, color 180ms ease, transform 180ms ease;
        }
        .np-services-arrow:hover:not(:disabled) {
          background: var(--color-text-primary);
          color: var(--color-text-inverse);
        }
        .np-services-arrow:active:not(:disabled) {
          background: var(--neutral-900);
          color: var(--color-text-inverse);
          transform: scale(0.94);
        }
        /* Defined for completeness -- the track loops endlessly, so neither arrow ever
           actually reaches a disabled state in this section. */
        .np-services-arrow:disabled {
          background: var(--neutral-100);
          color: var(--color-text-muted);
          cursor: default;
        }
        .np-services-arrow svg { width: 20px; height: 20px; display: block; }
        @media (prefers-reduced-motion: reduce) {
          .np-services-arrow { transition: none; }
          .np-services-arrow:active { transform: none; }
        }
      `}</style>

      <window.Reveal style={{ display: 'flex', flexDirection: 'column', gap: isMobile ? 24 : 32 }}>
        {/* The section itself has no side padding so the slider can run full-bleed and the
            cards get cropped by the viewport edge; header and arrows re-add the gutter. */}
        <header style={{ width: 'min(680px, 100%)', margin: '0 auto', padding: `0 ${gutter}px`, boxSizing: 'border-box', textAlign: 'center' }}>
          <div style={{
            display: 'inline-flex',
            marginBottom: 12,
            padding: '4px 8px',
            borderRadius: 16,
            background: '#F2ECE5',
            fontFamily: 'var(--font-display)',
            fontWeight: 700,
            fontSize: 14,
            lineHeight: '20px',
            textTransform: 'uppercase',
          }}>
            {t.servicesGrid.tag}
          </div>
          <h2 style={{
            margin: 0,
            color: 'var(--color-text-primary)',
            fontFamily: 'var(--font-display)',
            fontWeight: 800,
            fontSize: isMobile ? 36 : 'clamp(36px, 3.34vw, 48px)',
            lineHeight: '1.125',
            textTransform: 'uppercase',
          }}>
            {t.servicesGrid.title}
          </h2>
          <p style={{
            maxWidth: 448,
            margin: '12px auto 0',
            color: 'var(--color-text-secondary)',
            fontSize: isMobile ? 17 : 20,
            lineHeight: isMobile ? '24px' : '28px',
          }}>
            {t.servicesGrid.subhead}
          </p>
        </header>

        <div
          className="np-services-viewport"
          ref={viewportRef}
          onMouseEnter={() => setIsCardHovered(true)}
          onMouseLeave={() => setIsCardHovered(false)}
          onFocus={() => setIsCardHovered(true)}
          onBlur={() => setIsCardHovered(false)}
          style={{
            width: '100%', overflowX: 'auto', overflowY: 'hidden',
            overscrollBehaviorX: 'contain', cursor: isDragging ? 'grabbing' : 'grab',
          }}
        >
          <div
            className="np-services-track"
            style={{
              display: 'flex',
              width: 'max-content',
              gap: isMobile ? 12 : 20,
              padding: '0 0 12px',
            }}
          >
            {items.map((item, index) => (
              <ServiceMediaCard key={`${item.image}-${index}`} item={item} base={base} onSelect={selectService} />
            ))}
          </div>
        </div>

        <div style={{ display: 'flex', justifyContent: 'center', gap: 12, padding: `0 ${gutter}px` }}>
          <button type="button" className="np-services-arrow" aria-label="Previous" onClick={() => scrollByCard(-1)}>
            <ChevronIcon dir="left" />
          </button>
          <button type="button" className="np-services-arrow" aria-label="Next" onClick={() => scrollByCard(1)}>
            <ChevronIcon dir="right" />
          </button>
        </div>
      </window.Reveal>
    </section>
  );
}

function ChevronIcon({ dir }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d={dir === 'left' ? 'M15 5L8 12l7 7' : 'M9 5l7 7-7 7'}
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

window.ServicesGridSection = ServicesGridSection;
