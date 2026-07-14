import React from 'react';

/**
 * Single-line text field for the quote-request / contact form.
 */
export function Input({
  label,
  placeholder,
  type = 'text',
  value,
  onChange,
  error,
  helpText,
  required = false,
}) {
  const [focused, setFocused] = React.useState(false);
  const [fileName, setFileName] = React.useState('');

  if (type === 'file') {
    const base = window.NP_ASSETS_BASE || '';
    return (
      <label style={{ display: 'flex', flexDirection: 'column', gap: 6, fontFamily: 'var(--font-body)' }}>
        {label ? (
          <span style={{ fontSize: 'var(--text-sm)', fontWeight: 600, color: 'var(--color-text-primary)' }}>
            {label}{required ? <span style={{ color: 'var(--color-brand)' }}> *</span> : null}
          </span>
        ) : null}
        <div style={{
          display: 'flex', alignItems: 'center', gap: 10, position: 'relative',
          border: `1.5px dashed ${focused ? 'var(--color-brand)' : 'var(--color-border-strong)'}`,
          borderRadius: 'var(--radius-sm)', padding: '12px 14px', cursor: 'pointer',
          background: 'var(--color-bg-sunken)', color: 'var(--color-text-secondary)', fontSize: 'var(--text-sm)',
        }}>
          <img src={base + 'assets/icons/camera.svg'} alt="" style={{ width: 18, height: 18, opacity: 0.7 }} />
          <span>{fileName || placeholder || 'Foto hochladen'}</span>
          <input
            type="file"
            accept="image/*"
            onChange={(e) => { setFileName(e.target.files?.[0]?.name || ''); onChange && onChange(e); }}
            onFocus={() => setFocused(true)}
            onBlur={() => setFocused(false)}
            style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', opacity: 0, cursor: 'pointer' }}
          />
        </div>
        {helpText ? <span style={{ fontSize: 'var(--text-xs)', color: 'var(--color-text-muted)' }}>{helpText}</span> : null}
      </label>
    );
  }

  return (
    <label style={{ display: 'flex', flexDirection: 'column', gap: 6, fontFamily: 'var(--font-body)' }}>
      {label ? (
        <span style={{ fontSize: 'var(--text-sm)', fontWeight: 600, color: 'var(--color-text-primary)' }}>
          {label}{required ? <span style={{ color: 'var(--color-brand)' }}> *</span> : null}
        </span>
      ) : null}
      <input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
        style={{
          fontFamily: 'var(--font-body)',
          fontSize: 'var(--text-base)',
          padding: '12px 14px',
          borderRadius: 'var(--radius-sm)',
          border: `1.5px solid ${error ? 'var(--color-danger)' : focused ? 'var(--color-brand)' : 'var(--color-border)'}`,
          outline: 'none',
          background: 'var(--color-surface)',
          color: 'var(--color-text-primary)',
          boxShadow: focused ? '0 0 0 3px var(--color-brand-subtle)' : 'none',
          transition: `border-color var(--duration-fast) var(--ease-standard), box-shadow var(--duration-fast) var(--ease-standard)`,
        }}
      />
      {error ? (
        <span style={{ fontSize: 'var(--text-xs)', color: 'var(--color-danger)' }}>{error}</span>
      ) : helpText ? (
        <span style={{ fontSize: 'var(--text-xs)', color: 'var(--color-text-muted)' }}>{helpText}</span>
      ) : null}
    </label>
  );
}
