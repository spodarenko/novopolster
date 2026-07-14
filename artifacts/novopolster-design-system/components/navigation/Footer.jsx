import React from 'react';
import { LanguageSwitcher } from './LanguageSwitcher';

/**
 * Site footer — ink background, white mark, service-area note,
 * contact channels and language switcher.
 */
export function Footer({ logo, lang = 'DE', onLangChange, t }) {
  const base = window.NP_ASSETS_BASE || '';
  const logoSrc = logo || base + 'assets/logo/novopolster-logo-white.png';
  const socials = [
    { name: 'Instagram', icon: 'instagram', href: 'https://www.instagram.com/novopolster' },
    { name: 'TikTok', icon: 'tiktok', href: 'https://www.tiktok.com/@novo.polster' },
    { name: 'Facebook', icon: 'facebook', href: 'https://www.facebook.com/share/1D6JAwE911/' },
  ];
  return (
    <footer style={{
      background: 'var(--color-surface-ink)',
      color: 'var(--color-text-inverse)',
      fontFamily: 'var(--font-body)',
      padding: 'var(--space-16) var(--page-gutter) var(--space-8)',
    }}>
      <div style={{
        display: 'grid',
        gridTemplateColumns: '1.4fr 1fr 1fr',
        gap: 'var(--space-12)',
        maxWidth: 'var(--content-max-width)',
        margin: '0 auto',
      }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-4)' }}>
          <img src={logoSrc} alt="NovoPolster" style={{ height: 28, width: 'auto', objectFit: 'contain', alignSelf: 'flex-start' }} />
          <p style={{ margin: 0, fontSize: 'var(--text-sm)', color: 'var(--color-text-inverse-muted)', lineHeight: 'var(--leading-relaxed)', maxWidth: 320 }}>
            {t ? t.footer.tagline : 'Polster-, Matratzen- und Autositzreinigung in München und im Umkreis von 30\u00A0km.'}
          </p>
          <div style={{ display: 'flex', gap: 'var(--space-3)', marginTop: 'var(--space-1)' }}>
            {socials.map((s) => (
              <a key={s.name} href={s.href} target="_blank" rel="noreferrer" aria-label={s.name} title={s.name} style={{
                width: 34, height: 34, borderRadius: 'var(--radius-pill)', background: 'rgba(255,255,255,0.08)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
              }}>
                <img src={`${base}assets/icons/${s.icon}.svg`} alt="" style={{ width: 15, height: 15, filter: 'brightness(0) invert(1)' }} />
              </a>
            ))}
          </div>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-3)' }}>
          <div style={{ fontSize: 'var(--text-xs)', letterSpacing: 'var(--tracking-wide)', textTransform: 'uppercase', color: 'var(--color-text-inverse-muted)', fontWeight: 600 }}>
            {t ? t.footer.leistungen : 'Leistungen'}
          </div>
          {(t ? t.footer.services : ['Sofa-Reinigung', 'Matratzen-Reinigung', 'Stühle & Sessel', 'Autositze', 'Teppiche']).map((s) => (
            <a key={s} href="#preise" style={{ fontSize: 'var(--text-sm)', color: 'var(--color-text-inverse)', textDecoration: 'none' }}>{s}</a>
          ))}
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-3)' }}>
          <div style={{ fontSize: 'var(--text-xs)', letterSpacing: 'var(--tracking-wide)', textTransform: 'uppercase', color: 'var(--color-text-inverse-muted)', fontWeight: 600 }}>
            {t ? t.footer.kontakt : 'Kontakt'}
          </div>
          <a href="tel:+491605712229" style={{ display: 'flex', alignItems: 'center', gap: 8, fontSize: 'var(--text-sm)', color: 'var(--color-text-inverse)', textDecoration: 'none' }}>
            <img src={base + "assets/icons/phone.svg"} alt="" style={{ width: 14, height: 14, filter: 'brightness(0) invert(1)' }} />0160 571 22 29
          </a>
          <a href="https://wa.me/491605712229" style={{ display: 'flex', alignItems: 'center', gap: 8, fontSize: 'var(--text-sm)', color: 'var(--color-text-inverse)', textDecoration: 'none' }}>
            <img src={base + "assets/icons/whatsapp.svg"} alt="" style={{ width: 14, height: 14, filter: 'brightness(0) invert(1)' }} />WhatsApp
          </a>
          <a href="mailto:Novopolster@gmail.com" style={{ display: 'flex', alignItems: 'center', gap: 8, fontSize: 'var(--text-sm)', color: 'var(--color-text-inverse)', textDecoration: 'none' }}>
            <img src={base + "assets/icons/mail.svg"} alt="" style={{ width: 14, height: 14, filter: 'brightness(0) invert(1)' }} />Novopolster@gmail.com
          </a>
          <div style={{ marginTop: 'var(--space-2)' }}>
            <LanguageSwitcher value={lang} onChange={onLangChange} tone="dark" />
          </div>
        </div>
      </div>
      <div style={{
        maxWidth: 'var(--content-max-width)', margin: '0 auto',
        borderTop: '1px solid var(--color-border-on-ink)',
        marginTop: 'var(--space-10)', paddingTop: 'var(--space-6)',
        fontSize: 'var(--text-xs)', color: 'var(--color-text-inverse-muted)',
        display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: 'var(--space-2)',
      }}>
        <span>© {new Date().getFullYear()} NovoPolster</span>
        <span title="Gesetzlich vorgeschrieben auf Deutsch (TMG), unabhängig von der gewählten Sprache">Impressum · Datenschutz (DE)</span>
      </div>
    </footer>
  );
}
