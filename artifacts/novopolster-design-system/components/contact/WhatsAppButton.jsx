import React from 'react';

/**
 * Sticky floating WhatsApp button — the brand's primary contact
 * channel (chosen over phone/email/contact forms for faster
 * response and to serve DE/EN/UA/IT customers comfortably).
 */
export function WhatsAppButton({ phone = '491605712229', message = 'Hallo, ich interessiere mich für eine Polsterreinigung.', label = 'Per WhatsApp anfragen', floating = true }) {
  const [hover, setHover] = React.useState(false);
  const href = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;

  if (floating) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noreferrer"
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
        style={{
          position: 'fixed', bottom: 24, right: 24, zIndex: 100,
          width: 60, height: 60, borderRadius: 'var(--radius-pill)',
          background: 'var(--color-whatsapp)',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          boxShadow: hover ? 'var(--shadow-lg)' : 'var(--shadow-md)',
          transform: hover ? 'translateY(-2px) scale(1.03)' : 'none',
          transition: `box-shadow var(--duration-base) var(--ease-standard), transform var(--duration-base) var(--ease-standard)`,
        }}
        aria-label={label}
        title={label}
      >
        <img src={(window.NP_ASSETS_BASE || '') + "assets/icons/whatsapp.svg"} alt="" style={{ width: 28, height: 28, filter: 'brightness(0) invert(1)' }} />
      </a>
    );
  }

  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      style={{
        display: 'inline-flex', alignItems: 'center', gap: 10,
        background: hover ? 'var(--color-whatsapp-hover)' : 'var(--color-whatsapp)',
        color: '#fff', fontFamily: 'var(--font-display)', fontWeight: 900, fontSize: 'var(--text-base)',
        textTransform: 'uppercase', letterSpacing: 'var(--tracking-wide)',
        padding: '14px 24px', borderRadius: 'var(--radius-pill)', textDecoration: 'none',
        boxShadow: 'var(--shadow-sm)',
        transition: `background var(--duration-base) var(--ease-standard)`,
      }}
    >
      <img src={(window.NP_ASSETS_BASE || '') + "assets/icons/whatsapp.svg"} alt="" style={{ width: 20, height: 20, filter: 'brightness(0) invert(1)' }} />
      {label}
    </a>
  );
}
