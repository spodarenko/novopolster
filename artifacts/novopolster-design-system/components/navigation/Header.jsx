import React from 'react';
import { Button } from '../core/Button';
import { LanguageSwitcher } from './LanguageSwitcher';

function NavLink({ href, children }) {
  const [hover, setHover] = React.useState(false);
  return (
    <a
      href={href}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      style={{
        fontSize: 'var(--text-sm)', fontWeight: 600, textDecoration: 'none',
        color: hover ? 'var(--color-brand)' : 'var(--color-text-primary)',
        transition: `color var(--duration-base) var(--ease-standard)`,
      }}
    >
      {children}
    </a>
  );
}

/**
 * Sticky site header — logo, primary nav, language switcher and a
 * primary CTA.
 */
export function Header({ logo, links = [], lang = 'DE', onLangChange, onCta, ctaLabel = 'Termin anfragen' }) {
  const logoSrc = logo || (window.NP_ASSETS_BASE || '') + 'assets/logo/novopolster-logo-transparent.png';
  const [scrolled, setScrolled] = React.useState(false);
  React.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header style={{
      position: 'sticky', top: 0, zIndex: 50,
      display: 'flex', alignItems: 'center', justifyContent: 'space-between',
      padding: '14px var(--page-gutter)',
      background: 'var(--color-bg)',
      fontFamily: 'var(--font-body)',
    }}>
      <span
        onClick={() => {
          if (window.scrollY < 40) window.location.reload();
          else window.scrollTo({ top: 0, behavior: 'smooth' });
        }}
        style={{
          fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 'var(--text-xl)',
          letterSpacing: 'var(--tracking-tight)', cursor: 'pointer',
        }}
      >
        <span style={{ color: 'var(--color-brand)' }}>Novo</span><span style={{ color: 'var(--color-text-primary)' }}>Polster</span>
      </span>
      <nav style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-8)' }}>
        {links.map((l) => <NavLink key={l.label} href={l.href}>{l.label}</NavLink>)}
      </nav>
      <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-4)' }}>
        <LanguageSwitcher value={lang} onChange={onLangChange} tone="light" />
        <Button variant="primary" size="sm" radius="var(--radius-pill)" onClick={onCta}>{ctaLabel}</Button>
      </div>
    </header>
  );
}
