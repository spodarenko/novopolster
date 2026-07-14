import React from 'react';

/**
 * Service tile — icon, title, one-line description and a
 * transparent "from" price. The core building block of the
 * services grid (Sofa / Matratze / Autositze / …).
 */
export function ServiceCard({ icon, title, description, priceFrom, onClick }) {
  const [hover, setHover] = React.useState(false);
  return (
    <div
      onClick={onClick}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      style={{
        fontFamily: 'var(--font-body)',
        background: 'var(--color-surface)',
        border: '1px solid var(--color-border)',
        borderRadius: 'var(--radius-lg)',
        padding: 'var(--space-6)',
        display: 'flex',
        flexDirection: 'column',
        gap: 'var(--space-4)',
        cursor: onClick ? 'pointer' : 'default',
        boxShadow: hover ? 'var(--shadow-md)' : 'var(--shadow-xs)',
        transform: hover ? 'translateY(-3px)' : 'none',
        transition: `box-shadow var(--duration-base) var(--ease-standard), transform var(--duration-base) var(--ease-standard)`,
      }}
    >
      <div style={{
        width: 64, height: 64, borderRadius: 'var(--radius-lg)',
        background: 'var(--color-brand-subtle)', display: 'flex', alignItems: 'center', justifyContent: 'center',
      }}>
        <img src={icon} alt="" style={{ width: 28, height: 28, filter: 'invert(38%) sepia(80%) saturate(600%) hue-rotate(140deg) brightness(0.9)' }} />
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
        <div style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 'var(--text-lg)', color: 'var(--color-text-primary)' }}>{title}</div>
        <div style={{ fontSize: 'var(--text-sm)', color: 'var(--color-text-secondary)', lineHeight: 'var(--leading-relaxed)' }}>{description}</div>
      </div>
      {priceFrom ? (
        <div style={{ fontSize: 'var(--text-sm)', fontWeight: 600, color: 'var(--color-brand-active)', paddingTop: 4, borderTop: '1px solid var(--color-border)' }}>
          ab {priceFrom}
        </div>
      ) : null}
    </div>
  );
}
