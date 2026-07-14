import React from 'react';

/**
 * FAQ accordion — single-open list of question/answer pairs.
 */
export function FAQAccordion({ items = [], defaultOpen = 0, initialCount, showMoreLabel = 'Show more', showLessLabel = 'Show less' }) {
  const [openIndex, setOpenIndex] = React.useState(defaultOpen);
  const [expanded, setExpanded] = React.useState(!initialCount);
  const visible = expanded ? items : items.slice(0, initialCount);
  return (
    <div style={{ fontFamily: 'var(--font-body)', display: 'flex', flexDirection: 'column' }}>
      {visible.map((item, i) => {
        const open = openIndex === i;
        return (
          <div key={i} style={{ borderBottom: '1px solid var(--color-border)' }}>
            <button
              onClick={() => setOpenIndex(open ? -1 : i)}
              style={{
                width: '100%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                gap: 12,
                padding: '18px 4px',
                background: 'none',
                border: 'none',
                cursor: 'pointer',
                textAlign: 'left',
                fontFamily: 'var(--font-display)',
                fontWeight: 600,
                fontSize: 'var(--text-base)',
                color: 'var(--color-text-primary)',
              }}
            >
              {item.question}
              <img
                src={(window.NP_ASSETS_BASE || '') + "assets/icons/chevron-down.svg"}
                alt=""
                style={{
                  width: 18, height: 18, flexShrink: 0,
                  transform: open ? 'rotate(180deg)' : 'none',
                  transition: `transform var(--duration-base) var(--ease-standard)`,
                }}
              />
            </button>
            <div style={{
              maxHeight: open ? 400 : 0,
              overflow: 'hidden',
              transition: `max-height var(--duration-slow) var(--ease-standard)`,
            }}>
              <p style={{
                margin: 0,
                padding: '0 4px 18px',
                fontSize: 'var(--text-sm)',
                color: 'var(--color-text-secondary)',
                lineHeight: 'var(--leading-relaxed)',
              }}>
                {item.answer}
              </p>
            </div>
          </div>
        );
      })}
      {initialCount && items.length > initialCount ? (
        <button
          onClick={() => setExpanded((e) => !e)}
          style={{
            alignSelf: 'flex-start', marginTop: 'var(--space-4)', background: 'none',
            border: '1.5px solid var(--color-border-strong)', borderRadius: 'var(--radius-pill)',
            padding: '10px 20px', fontFamily: 'var(--font-body)', fontWeight: 600,
            fontSize: 'var(--text-sm)', color: 'var(--color-text-primary)', cursor: 'pointer',
          }}
        >
          {expanded ? showLessLabel : showMoreLabel}
        </button>
      ) : null}
    </div>
  );
}
