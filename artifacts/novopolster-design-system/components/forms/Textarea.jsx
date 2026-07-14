import React from 'react';

/**
 * Multi-line text field — free-text notes on the quote-request form
 * ("Beschreiben Sie den Zustand/Fleck …").
 */
export function Textarea({ label, placeholder, value, onChange, rows = 4, helpText }) {
  const [focused, setFocused] = React.useState(false);
  return (
    <label style={{ display: 'flex', flexDirection: 'column', gap: 6, fontFamily: 'var(--font-body)' }}>
      {label ? (
        <span style={{ fontSize: 'var(--text-sm)', fontWeight: 600, color: 'var(--color-text-primary)' }}>{label}</span>
      ) : null}
      <textarea
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        rows={rows}
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
        style={{
          fontFamily: 'var(--font-body)',
          fontSize: 'var(--text-base)',
          padding: '12px 14px',
          borderRadius: 'var(--radius-sm)',
          border: `1.5px solid ${focused ? 'var(--color-brand)' : 'var(--color-border)'}`,
          outline: 'none',
          resize: 'vertical',
          background: 'var(--color-surface)',
          color: 'var(--color-text-primary)',
          boxShadow: focused ? '0 0 0 3px var(--color-brand-subtle)' : 'none',
          transition: `border-color var(--duration-fast) var(--ease-standard)`,
        }}
      />
      {helpText ? <span style={{ fontSize: 'var(--text-xs)', color: 'var(--color-text-muted)' }}>{helpText}</span> : null}
    </label>
  );
}
