import React from 'react';

/**
 * Honest "content pending from client" panel — dashed border, no
 * invented copy. Used where real assets (before/after photos,
 * testimonials) don't exist yet, instead of fabricating placeholder
 * content.
 */
export function PlaceholderPanel({ icon, message, minHeight = 220 }) {
  return (
    <div style={{
      border: '1.5px dashed var(--color-border-strong)',
      borderRadius: 'var(--radius-lg)',
      background: 'var(--color-bg-sunken)',
      minHeight,
      display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: 'var(--space-3)',
      padding: 'var(--space-8)', textAlign: 'center',
      fontFamily: 'var(--font-body)',
    }}>
      {icon ? (
        <img src={icon} alt="" style={{ width: 28, height: 28, opacity: 0.45 }} />
      ) : null}
      <div style={{ fontSize: 'var(--text-sm)', color: 'var(--color-text-muted)', maxWidth: 340, lineHeight: 'var(--leading-relaxed)' }}>
        {message}
      </div>
    </div>
  );
}
