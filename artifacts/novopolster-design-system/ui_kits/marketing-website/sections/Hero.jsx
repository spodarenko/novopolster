/* Shared scroll-reveal wrapper — quiet, one-time entrance. */
const REVEAL_REDUCED_MOTION = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

function Reveal({ children, delay = 0, style }) {
  const ref = React.useRef(null);
  const [visible, setVisible] = React.useState(REVEAL_REDUCED_MOTION);

  React.useEffect(() => {
    if (REVEAL_REDUCED_MOTION) return;
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          io.unobserve(el);
        }
      },
      { threshold: 0.2, rootMargin: '0px 0px -10% 0px' }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? 'translateY(0)' : 'translateY(16px)',
        transition: `opacity 600ms cubic-bezier(0.16,1,0.3,1) ${delay}ms, transform 600ms cubic-bezier(0.16,1,0.3,1) ${delay}ms`,
        ...style,
      }}
    >
      {children}
    </div>
  );
}
window.Reveal = Reveal;

/* Shared marquee ticker — injects its keyframe once. Reused by the
   ServicesPricing category strip. */
function Marquee({ items, renderItem }) {
  React.useEffect(() => {
    if (document.getElementById('np-marquee-keyframes')) return;
    const style = document.createElement('style');
    style.id = 'np-marquee-keyframes';
    style.textContent = `
      @keyframes np-marquee-scroll { from { transform: translateX(0); } to { transform: translateX(-50%); } }
      .np-hero-marquee-track { animation: np-marquee-scroll 60s linear infinite; }
      .np-hero-marquee:hover .np-hero-marquee-track { animation-play-state: paused; }
      @media (prefers-reduced-motion: reduce) { .np-hero-marquee-track, .np-rotate-word { animation: none !important; } }
    `;
    document.head.appendChild(style);
  }, []);
  const track = [...items, ...items];
  return (
    <div className="np-hero-marquee" style={{ overflow: 'hidden', width: '100%' }}>
      <div className="np-hero-marquee-track" style={{ display: 'flex', gap: 'var(--space-10)', width: 'max-content' }}>
        {track.map((item, i) => renderItem(item, i))}
      </div>
    </div>
  );
}
window.Marquee = Marquee;

/* Animates a number counting up from 0 to its target once, the moment it
   scrolls into view (IntersectionObserver, fires a single time). */
function CountUp({ to, duration = 1400 }) {
  const ref = React.useRef(null);
  const startedRef = React.useRef(false);
  const [val, setVal] = React.useState(0);

  React.useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const target = parseFloat(to) || 0;
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting && !startedRef.current) {
        startedRef.current = true;
        const start = performance.now();
        const step = (now) => {
          const progress = Math.min((now - start) / duration, 1);
          const eased = 1 - Math.pow(1 - progress, 3);
          setVal(target * eased);
          if (progress < 1) requestAnimationFrame(step);
          else setVal(target);
        };
        requestAnimationFrame(step);
        observer.disconnect();
      }
    }, { threshold: 0.4 });
    observer.observe(el);
    return () => observer.disconnect();
  }, [to, duration]);

  return <span ref={ref}>{Math.round(val)}</span>;
}
window.CountUp = CountUp;

/* Cycles through a list of words with a fade/slide transition — the
   Sparkles hero pattern ("... busy people in [rotating borough]"),
   adapted here to Munich districts. */
function RotatingWord({ words, interval = 5000 }) {
  const [i, setI] = React.useState(0);
  React.useEffect(() => {
    if (!document.getElementById('np-rotate-keyframes')) {
      const style = document.createElement('style');
      style.id = 'np-rotate-keyframes';
      style.textContent = `@keyframes np-rotate-word { from { opacity: 0; transform: translateY(8px); } to { opacity: 1; transform: translateY(0); } }`;
      document.head.appendChild(style);
    }
    const id = setInterval(() => setI((v) => (v + 1) % words.length), interval);
    return () => clearInterval(id);
  }, [words.length, interval]);
  return (
    <span key={i} className="np-rotate-word" style={{ display: 'inline-block', color: '#00DBC8', animation: 'np-rotate-word 350ms ease' }}>
      {words[i]}
    </span>
  );
}

function Hero({ t }) {
  const base = window.NP_ASSETS_BASE || '';
  const { isMobile, isNarrow } = window.useViewport();
  const cities = ['München', 'Schwabing', 'Bogenhausen', 'Maxvorstadt', 'Sendling', 'Neuhausen', 'Grünwald', 'Starnberg', 'Unterföhring', 'Ottobrunn'];
  const [phoneState, setPhoneState] = React.useState('default');
  const [waState, setWaState] = React.useState('default');

  return (
    <section data-screen-label="Hero" style={{ padding: isMobile ? '8px 16px 0' : isNarrow ? '10px 24px 0' : '10px 64px 0' }}>
      <div style={{ maxWidth: 'var(--content-max-width)', margin: '0 auto' }}>
      <div style={{ display: 'grid', gridTemplateColumns: isNarrow ? '1fr' : '1fr 1fr', gap: isMobile ? 12 : 'var(--space-5)', minHeight: isNarrow ? 'auto' : 'calc(100vh - 140px)' }}>
        <div style={{
          background: 'var(--color-brand)', borderRadius: 'var(--radius-xl)',
          padding: isMobile ? 24 : 'var(--space-8)', display: 'flex', flexDirection: 'column', justifyContent: 'space-between',
          minHeight: isMobile ? 430 : isNarrow ? 520 : 'auto',
        }}>
          <div>
            <div style={{ display: 'flex', gap: 'var(--space-3)', flexWrap: 'wrap' }}>
              <span style={{
                display: 'inline-flex', alignItems: 'center', gap: 8, background: 'rgba(255,255,255,0.2)',
                borderRadius: 'var(--radius-pill)', padding: '4px 12px 4px 4px',
                fontFamily: 'var(--font-display)', fontSize: 14, lineHeight: '20px',
                fontWeight: 700, textTransform: 'uppercase', color: 'var(--color-text-inverse)',
              }}>
                <span style={{
                  width: 24, height: 24, borderRadius: '50%', background: 'var(--color-brand)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0,
                }}>
                  <img src={base + 'assets/icons/map-pin.svg'} alt="" style={{ width: 13, height: 13, filter: 'brightness(0) invert(1)' }} />
                </span>
                {t.hero.zoneLabel}
              </span>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-5)', marginTop: 'var(--space-4)' }}>
              <h1 style={{
                fontSize: isMobile ? 30 : 'clamp(2.1rem, 3.15vw + 0.55rem, 54px)', color: 'var(--color-text-inverse)',
                textTransform: 'uppercase', letterSpacing: isMobile ? 'var(--tracking-tight)' : '-1px', maxWidth: isMobile ? '100%' : 420,
                width: '100%',
                lineHeight: isMobile ? '34px' : '58px',
                overflowWrap: 'normal',
                wordBreak: 'normal',
              }}>
                {t.hero.headlinePrefix}{t.hero.showCity === false ? null : (<React.Fragment><br /><RotatingWord words={cities} /></React.Fragment>)}
              </h1>
            </div>
          </div>

          <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
            <a href="https://wa.me/491605712229" style={{
              display: 'inline-flex', alignItems: 'center', justifyContent: 'center', gap: 8, fontFamily: 'var(--font-display)',
              fontWeight: 700, fontSize: 'var(--text-lg)', lineHeight: '28px',
              padding: waState === 'focused' ? '10px 30px' : '12px 32px',
              textTransform: 'uppercase', letterSpacing: 'var(--tracking-wide)',
              borderRadius: 'var(--radius-pill)',
              border: waState === 'focused' ? '2px solid #096159' : '2px solid transparent',
              background: waState === 'pressed' ? '#D3ECE7' : waState === 'hover' ? '#E9F7F4' : 'var(--color-bg)',
              color: waState === 'hover' ? '#096159' : 'var(--color-brand)', textDecoration: 'none',
              transition: 'background 160ms ease, color 160ms ease, border-color 160ms ease',
              flex: isMobile ? '1 1 100%' : '0 0 auto',
            }}
            onMouseEnter={() => setWaState('hover')}
            onMouseLeave={() => setWaState('default')}
            onMouseDown={() => setWaState('pressed')}
            onMouseUp={() => setWaState('hover')}
            onFocus={() => setWaState('focused')}
            onBlur={() => setWaState('default')}>
              <svg viewBox="0 0 256 256" width="20" height="20" fill="currentColor" style={{ flexShrink: 0 }}>
                <path d="M152.58,145.23l23,11.48A24,24,0,0,1,152,176a72.08,72.08,0,0,1-72-72A24,24,0,0,1,99.29,80.46l11.48,23L101,118a8,8,0,0,0-.73,7.51,56.47,56.47,0,0,0,30.15,30.15A8,8,0,0,0,138,155ZM232,128A104,104,0,0,1,79.12,219.82L45.07,231.17a16,16,0,0,1-20.24-20.24l11.35-34.05A104,104,0,1,1,232,128Zm-40,24a8,8,0,0,0-4.42-7.16l-32-16a8,8,0,0,0-8,.5l-14.69,9.8a40.55,40.55,0,0,1-16-16l9.8-14.69a8,8,0,0,0,.5-8l-16-32A8,8,0,0,0,104,64a40,40,0,0,0-40,40,88.1,88.1,0,0,0,88,88A40,40,0,0,0,192,152Z" />
              </svg>
              {t.hero.ctaPrimary}
            </a>
            <a href="tel:+491605712229" style={{
              display: 'inline-flex', alignItems: 'center', justifyContent: 'center', gap: 8, fontFamily: 'var(--font-display)',
              fontWeight: 700, fontSize: 'var(--text-lg)', lineHeight: '28px',
              padding: phoneState === 'focused' ? '10px 30px' : '12px 32px',
              textTransform: 'uppercase', letterSpacing: 'var(--tracking-wide)',
              borderRadius: 'var(--radius-pill)',
              border: phoneState === 'focused' ? '2px solid var(--color-text-inverse)' : '2px solid transparent',
              background: phoneState === 'pressed' ? 'rgba(253,252,250,0.4)' : phoneState === 'hover' ? 'rgba(253,252,250,0.3)' : 'rgba(253,252,250,0.2)',
              color: 'var(--color-text-inverse)', textDecoration: 'none',
              transition: 'background var(--duration-base) var(--ease-standard)',
              flex: isMobile ? '1 1 100%' : '0 0 auto',
            }}
            onMouseEnter={() => setPhoneState('hover')}
            onMouseLeave={() => setPhoneState('default')}
            onMouseDown={() => setPhoneState('pressed')}
            onMouseUp={() => setPhoneState('hover')}
            onFocus={() => setPhoneState('focused')}
            onBlur={() => setPhoneState('default')}>
              <img src={base + 'assets/icons/phone.svg'} alt="" style={{ width: 20, height: 20, filter: 'brightness(0) invert(1)' }} />
              {t.hero.ctaSecondary}
            </a>
          </div>
        </div>

        <div style={{ position: 'relative', borderRadius: 'var(--radius-xl)', overflow: 'hidden', background: 'var(--color-bg-sunken)', minHeight: isMobile ? 300 : isNarrow ? 420 : 'auto' }}>
          <window.LoopVideo
            src="../../assets/video/hero-video.mp4"
            poster="../../assets/images/hero.webp"
          />
        </div>
      </div>

      <div style={{
        display: 'grid', gridTemplateColumns: isMobile ? 'repeat(2, 1fr)' : `repeat(${t.hero.stats.length}, 1fr)`, gap: isMobile ? 12 : 'var(--space-5)',
        marginTop: isMobile ? 12 : 'var(--space-5)',
      }}>
        {t.hero.stats.map((s) => (
          <div key={s.desc} style={{
            textAlign: 'center', background: 'var(--color-bg-sunken)', borderRadius: 'var(--radius-xl)',
            padding: isMobile ? '24px 10px' : 'var(--space-10) var(--space-4)',
          }}>
            <div style={{ fontFamily: 'var(--font-display)', fontWeight: 900, fontSize: isMobile ? 42 : 'clamp(2.25rem, 3vw + 1rem, var(--text-5xl))', lineHeight: 1, color: 'var(--color-text-primary)', whiteSpace: 'nowrap' }}>
              <CountUp to={s.value} /><span style={{ color: 'var(--color-brand)' }}>{s.suffix}</span>
            </div>
            <div style={{ marginTop: 'var(--space-3)', fontSize: isMobile ? 13 : 'var(--text-sm)', lineHeight: isMobile ? '18px' : undefined, color: 'var(--color-text-secondary)' }}>
              {s.desc}
            </div>
          </div>
        ))}
      </div>
      </div>
    </section>
  );
}
window.Hero = Hero;
