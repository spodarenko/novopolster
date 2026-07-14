import React from 'react';

/**
 * Primary call-to-action button. Three visual variants and two sizes,
 * covers every CTA on the marketing site except the WhatsApp channel
 * button (see components/contact/WhatsAppButton).
 */
export function Button({
  children,
  variant = 'primary',
  size = 'md',
  icon = null,
  iconPosition = 'left',
  disabled = false,
  as = 'button',
  href,
  onClick,
  type = 'button',
  radius,
}) {
  const base = {
    fontFamily: 'var(--font-display)',
    fontWeight: 900,
    textTransform: 'uppercase',
    letterSpacing: 'var(--tracking-wide)',
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 8,
    borderRadius: radius || 'var(--radius-md)',
    border: '1px solid transparent',
    cursor: disabled ? 'default' : 'pointer',
    opacity: disabled ? 0.5 : 1,
    transition: `background var(--duration-base) var(--ease-standard), border-color var(--duration-base) var(--ease-standard), transform var(--duration-fast) var(--ease-standard), box-shadow var(--duration-base) var(--ease-standard)`,
    textDecoration: 'none',
    whiteSpace: 'nowrap',
  };

  const sizes = {
    sm: { fontSize: 'var(--text-sm)', padding: '8px 16px' },
    md: { fontSize: 'var(--text-base)', padding: '12px 22px' },
    lg: { fontSize: 'var(--text-lg)', padding: '16px 30px' },
  };

  const variants = {
    primary: {
      background: 'var(--color-brand)',
      color: 'var(--color-text-inverse)',
      borderColor: 'var(--color-brand)',
    },
    secondary: {
      background: 'var(--color-surface-ink)',
      color: 'var(--color-text-inverse)',
      borderColor: 'var(--color-surface-ink)',
    },
    outline: {
      background: 'transparent',
      color: 'var(--color-text-primary)',
      borderColor: 'var(--color-border-strong)',
    },
    ghost: {
      background: 'transparent',
      color: 'var(--color-brand)',
      borderColor: 'transparent',
    },
  };

  const hoverBg = {
    primary: 'var(--color-brand-hover)',
    secondary: 'var(--neutral-800)',
    outline: 'var(--color-bg-sunken)',
    ghost: 'var(--color-brand-subtle)',
  };

  const [hover, setHover] = React.useState(false);
  const style = {
    ...base,
    ...sizes[size],
    ...variants[variant],
    ...(hover && !disabled ? { background: hoverBg[variant] } : {}),
  };

  const content = (
    <>
      {icon && iconPosition === 'left' ? (
        <img src={icon} alt="" style={{ width: size === 'lg' ? 20 : 16, height: size === 'lg' ? 20 : 16, filter: variant === 'outline' || variant === 'ghost' ? 'none' : 'brightness(0) invert(1)' }} />
      ) : null}
      <span>{children}</span>
      {icon && iconPosition === 'right' ? (
        <img src={icon} alt="" style={{ width: size === 'lg' ? 20 : 16, height: size === 'lg' ? 20 : 16, filter: variant === 'outline' || variant === 'ghost' ? 'none' : 'brightness(0) invert(1)' }} />
      ) : null}
    </>
  );

  const commonProps = {
    style,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    onClick: disabled ? undefined : onClick,
  };

  if (as === 'a') {
    return <a href={disabled ? undefined : href} {...commonProps}>{content}</a>;
  }
  return <button type={type} disabled={disabled} {...commonProps}>{content}</button>;
}
