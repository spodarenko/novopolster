import React from 'react';

/**
 * Small pill label — service tags, language pills, trust badges
 * ("Festpreis", "UA", "Termin in 48h").
 */
export function Badge({ children, tone = 'neutral', icon = null, size = 'md', dashed = false }) {
  const tones = {
    neutral: { background: 'var(--neutral-100)', color: 'var(--color-text-secondary)' },
    brand: { background: 'var(--color-brand-subtle)', color: 'var(--color-brand-active)' },
    ink: { background: 'var(--color-surface-ink)', color: 'var(--color-text-inverse)' },
    success: { background: 'var(--color-success-subtle)', color: 'var(--green-600)' },
  };
  const sizes = {
    sm: { fontSize: 'var(--text-xs)', padding: '4px 10px' },
    md: { fontSize: 'var(--text-sm)', padding: '6px 14px' },
  };
  const t = tones[tone];
  const s = sizes[size];

  return (
    <span style={{
      display: 'inline-flex',
      alignItems: 'center',
      gap: 6,
      fontFamily: 'var(--font-body)',
      fontWeight: 600,
      letterSpacing: 'var(--tracking-wide)',
      borderRadius: 'var(--radius-pill)',
      ...(dashed
        ? { background: 'transparent', border: '1.5px dashed var(--color-border-strong)', color: 'var(--color-text-muted)' }
        : t),
      ...s,
    }}>
      {icon ? <img src={icon} alt="" style={{ width: 12, height: 12, filter: tone === 'ink' && !dashed ? 'brightness(0) invert(1)' : 'none', opacity: dashed ? 0.6 : 1 }} /> : null}
      {children}
    </span>
  );
}
