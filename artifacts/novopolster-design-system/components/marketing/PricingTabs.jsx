import React from 'react';

/**
 * Tabbed from–to price list grouped by service category — the
 * "tabbed pricing" pattern from the Cleanora reference, applied to
 * NovoPolster's 5 real price categories (Sofa/Matratze/Stühle &
 * Sessel/Teppiche/Auto). Each tab renders a PricingTable.
 */
export function PricingTabs({ categories = [], defaultTab = 0 }) {
  const [active, setActive] = React.useState(defaultTab);
  const cat = categories[active];

  return (
    <div style={{ fontFamily: 'var(--font-body)' }}>
      <div style={{
        display: 'flex', gap: 'var(--space-2)', flexWrap: 'wrap',
        borderBottom: '1px solid var(--color-border)', marginBottom: 'var(--space-6)',
      }}>
        {categories.map((c, i) => {
          const isActive = i === active;
          return (
            <button
              key={c.label}
              onClick={() => setActive(i)}
              style={{
                fontFamily: 'var(--font-body)', fontWeight: 600, fontSize: 'var(--text-sm)',
                padding: '10px 18px', background: 'none', border: 'none', cursor: 'pointer',
                color: isActive ? 'var(--color-brand-active)' : 'var(--color-text-secondary)',
                borderBottom: isActive ? '2px solid var(--color-brand)' : '2px solid transparent',
                marginBottom: -1,
                transition: `color var(--duration-base) var(--ease-standard), border-color var(--duration-base) var(--ease-standard)`,
              }}
            >
              {c.label}
            </button>
          );
        })}
      </div>
      {cat ? (
        <div>
          <div style={{
            background: 'var(--color-surface)', border: '1px solid var(--color-border)',
            borderRadius: 'var(--radius-lg)', overflow: 'hidden',
          }}>
            {cat.rows.map((row, i) => (
              <div
                key={i}
                style={{
                  display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 'var(--space-4)',
                  padding: '18px 24px',
                  borderBottom: i < cat.rows.length - 1 ? '1px solid var(--color-border)' : 'none',
                }}
              >
                <div>
                  <div style={{ fontWeight: 600, fontSize: 'var(--text-base)', color: 'var(--color-text-primary)' }}>{row.label}</div>
                  {row.note ? <div style={{ fontSize: 'var(--text-xs)', color: 'var(--color-text-muted)', marginTop: 2 }}>{row.note}</div> : null}
                </div>
                <div style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 'var(--text-lg)', color: 'var(--color-brand-active)', whiteSpace: 'nowrap' }}>
                  {row.to ? `${row.from}–${row.to}` : row.from}
                </div>
              </div>
            ))}
          </div>
          {cat.callout ? (
            <div style={{
              marginTop: 'var(--space-4)', padding: '14px 18px', borderRadius: 'var(--radius-md)',
              background: 'var(--color-brand-subtle)', color: 'var(--color-brand-active)',
              fontSize: 'var(--text-sm)', lineHeight: 'var(--leading-relaxed)',
            }}>
              {cat.callout}
            </div>
          ) : null}
        </div>
      ) : null}
    </div>
  );
}
