import React from 'react';

/**
 * "How it works" step list — numbered icon steps with connecting
 * line. Used for the brief's fixed 3-step process explanation.
 */
export function ProcessSteps({ steps = [] }) {
  return (
    <div style={{
      display: 'grid', gridTemplateColumns: `repeat(${steps.length}, 1fr)`,
      gap: 'var(--space-8)', fontFamily: 'var(--font-body)', position: 'relative',
    }}>
      {steps.map((s, i) => (
        <div key={i} style={{
          display: 'flex', flexDirection: 'column', gap: 'var(--space-3)', position: 'relative',
          borderTop: '2px dashed var(--color-border-strong)', paddingTop: 'var(--space-5)',
        }}>
          <div style={{
            position: 'absolute', top: -1, left: 0, width: 12, height: 12, borderRadius: '50%',
            background: 'var(--color-brand)', transform: 'translateY(-50%)',
          }} />
          <div style={{
            fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 'var(--text-5xl)',
            color: 'var(--color-brand-subtle)', WebkitTextStroke: '1.5px var(--color-brand-border)',
            lineHeight: 1, letterSpacing: 'var(--tracking-tight)',
          }}>
            {String(i + 1).padStart(2, '0')}
          </div>
          <div style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 'var(--text-lg)', color: 'var(--color-text-primary)' }}>
            {s.title}
          </div>
          <div style={{ fontSize: 'var(--text-sm)', color: 'var(--color-text-secondary)', lineHeight: 'var(--leading-relaxed)' }}>
            {s.description}
          </div>
          {s.cta ? <div style={{ marginTop: 'var(--space-2)' }}>{s.cta}</div> : null}
        </div>
      ))}
    </div>
  );
}
