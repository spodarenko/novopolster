import React from 'react';

/**
 * Native-backed select — service type, preferred time-slot, language.
 */
export function Select({ label, value, onChange, options = [], placeholder = 'Bitte wählen', required = false }) {
  const [focused, setFocused] = React.useState(false);
  return (
    <label style={{ display: 'flex', flexDirection: 'column', gap: 6, fontFamily: 'var(--font-body)' }}>
      {label ? (
        <span style={{ fontSize: 'var(--text-sm)', fontWeight: 600, color: 'var(--color-text-primary)' }}>
          {label}{required ? <span style={{ color: 'var(--color-brand)' }}> *</span> : null}
        </span>
      ) : null}
      <div style={{ position: 'relative' }}>
        <select
          value={value}
          onChange={onChange}
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
          style={{
            width: '100%',
            appearance: 'none',
            fontFamily: 'var(--font-body)',
            fontSize: 'var(--text-base)',
            padding: '12px 40px 12px 14px',
            borderRadius: 'var(--radius-sm)',
            border: `1.5px solid ${focused ? 'var(--color-brand)' : 'var(--color-border)'}`,
            outline: 'none',
            background: 'var(--color-surface)',
            color: 'var(--color-text-primary)',
            boxShadow: focused ? '0 0 0 3px var(--color-brand-subtle)' : 'none',
            transition: `border-color var(--duration-fast) var(--ease-standard)`,
          }}
        >
          <option value="" disabled hidden>{placeholder}</option>
          {options.map((o) => (
            <option key={o.value ?? o} value={o.value ?? o}>{o.label ?? o}</option>
          ))}
        </select>
        <img
          src={(window.NP_ASSETS_BASE || '') + "assets/icons/chevron-down.svg"}
          alt=""
          style={{ position: 'absolute', right: 12, top: '50%', transform: 'translateY(-50%)', width: 16, height: 16, pointerEvents: 'none' }}
        />
      </div>
    </label>
  );
}
