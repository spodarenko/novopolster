window.NP_ASSETS_BASE = '../../';

const TWEAK_DEFAULTS = /*EDITMODE-BEGIN*/{
  "mood": "calm",
  "rhythm": "balanced",
  "softShapes": false
}/*EDITMODE-END*/;

// Each tweak reshapes many things at once by overriding shared CSS custom
// properties that every section already reads via var(--token) — not single
// pixel-pushing on one element.
const MOOD_VARS = {
  // Calm: the client's own rule — neutral canvas, menthol reserved for CTAs only.
  calm: {},
  // Bold: menthol pushes further into chrome (tinted section bands, stronger
  // badge/border saturation) while staying off solid black+menthol fills.
  bold: {
    '--color-bg-sunken': 'var(--teal-50)',
    '--color-brand-subtle': 'var(--teal-100)',
    '--color-brand-border': 'var(--teal-300)',
  },
  // Editorial: warm cream canvas (closer to the Sparkles reference' lifestyle-
  // photo warmth) instead of the default cool-neutral off-white.
  editorial: {
    '--color-bg': '#F7EFE2',
    '--color-bg-sunken': '#EFE3CD',
    '--color-border': '#E3D5B8',
  },
};

const RHYTHM_VARS = {
  compact: { '--space-20': '48px', '--space-16': '36px', '--space-10': '28px' },
  balanced: {},
  spacious: { '--space-20': '132px', '--space-16': '100px', '--space-10': '56px' },
};

const SHAPE_VARS = {
  '--radius-lg': '30px',
  '--radius-md': '18px',
  '--shadow-xs': '0 2px 10px rgba(19,20,19,0.05)',
  '--shadow-sm': '0 6px 20px rgba(19,20,19,0.08)',
  '--shadow-md': '0 16px 44px rgba(19,20,19,0.12)',
};

function App() {
  const { Header, Footer } = window.NovoPolsterDesignSystem_1b2f21;
  const [lang, setLang] = React.useState('DE');
  const [tw, setTweak] = window.useTweaks(TWEAK_DEFAULTS);
  const t = window.NP_I18N[lang];

  const navLinks = [
    { label: t.nav.leistungen, href: '#services' },
    { label: t.nav.prices, href: '#leistungen' },
    { label: t.nav.wie, href: '#ablauf' },
    { label: t.nav.map, href: '#zone' },
    { label: t.nav.request, href: '#kontakt' },
  ];

  const rootVars = {
    ...MOOD_VARS[tw.mood],
    ...RHYTHM_VARS[tw.rhythm],
    ...(tw.softShapes ? SHAPE_VARS : {}),
  };

  return (
    <div style={{ ...rootVars, background: 'var(--color-bg)' }}>
      <Header
        logo="../../assets/logo/novopolster-wordmark.svg"
        links={navLinks}
        lang={lang}
        onLangChange={setLang}
        onCta={() => document.getElementById('kontakt').scrollIntoView({ behavior: 'smooth' })}
        ctaLabel={t.nav.cta}
      />
      {/* 1. Hero */}
      <window.Hero t={t} />
      {/* 2. Services grid */}
      <window.ServicesGridSection t={t} />
      {/* 3. Benefits / USP */}
      <window.BenefitsSection t={t} />
      {/* 4. Services + Pricing */}
      <window.ServicesPricingSection t={t} />
      {/* 4. How it works */}
      <window.ProcessSection t={t} />
      {/* 5. FAQ */}
      <window.FAQSection t={t} />
      {/* 7. Service area */}
      <window.ServiceAreaSection t={t} />
      {/* 8. Final CTA */}
      <window.ContactSection t={t} />
      <window.FinalCTASection t={t} />
      {/* 9. Footer */}
      <Footer logo="../../assets/logo/novopolster-logo-white.png" lang={lang} onLangChange={setLang} t={t} />
      <window.WhatsAppFloat t={t} />

      <window.TweaksPanel>
        <window.TweakSection label="Feel" />
        <window.TweakRadio
          label="Mood"
          value={tw.mood}
          options={[{ value: 'calm', label: 'Calm' }, { value: 'bold', label: 'Bold' }, { value: 'editorial', label: 'Editorial' }]}
          onChange={(v) => setTweak('mood', v)}
        />
        <window.TweakRadio
          label="Rhythm"
          value={tw.rhythm}
          options={[{ value: 'compact', label: 'Compact' }, { value: 'balanced', label: 'Balanced' }, { value: 'spacious', label: 'Spacious' }]}
          onChange={(v) => setTweak('rhythm', v)}
        />
        <window.TweakToggle label="Soft, rounded shapes" value={tw.softShapes} onChange={(v) => setTweak('softShapes', v)} />
      </window.TweaksPanel>
    </div>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(<App />);
