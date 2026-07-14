import React from 'react';

/**
 * Transparent from–to price list — the brand's core differentiator.
 * Renders a row per service; every row always shows a number,
 * never "Preis auf Anfrage".
 */
export function PricingTable({ rows = [] }) {
  return (
    <div style={{
      fontFamily: 'var(--font-body)',
      background: 'var(--color-surface)',
      border: '1px solid var(--color-border)',
      borderRadius: 'var(--radius-lg)',
      overflow: 'hidden',
    }}>
      {rows.map((row, i) => (
        <div
          key={i}
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: 'var(--space-4)',
            padding: '18px 24px',
            borderBottom: i < rows.length - 1 ? '1px solid var(--color-border)' : 'none',
          }}
        >
          <div>
            <div style={{ fontWeight: 600, fontSize: 'var(--text-base)', color: 'var(--color-text-primary)' }}>{row.label}</div>
            {row.note ? <div style={{ fontSize: 'var(--text-xs)', color: 'var(--color-text-muted)', marginTop: 2 }}>{row.note}</div> : null}
          </div>
          <div style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 'var(--text-lg)', color: 'var(--color-brand-active)', whiteSpace: 'nowrap' }}>
            {row.from}–{row.to}
          </div>
        </div>
      ))}
    </div>
  );
}
