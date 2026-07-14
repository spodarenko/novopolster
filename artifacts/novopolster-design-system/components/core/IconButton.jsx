import React from 'react';

/**
 * Circular icon-only button — used for the sticky WhatsApp float,
 * header phone shortcut, and carousel/lightbox controls.
 */
export function IconButton({
  icon,
  label,
  variant = 'outline',
  size = 'md',
  onClick,
  href,
  as = 'button',
}) {
  const sizes = { sm: 32, md: 44, lg: 56 };
  const iconSizes = { sm: 14, md: 18, lg: 22 };
  const dim = sizes[size];

  const variants = {
    primary: { background: 'var(--color-brand)', border: '1px solid var(--color-brand)', filter: 'brightness(0) invert(1)' },
    outline: { background: 'var(--color-surface)', border: '1px solid var(--color-border-strong)', filter: 'none' },
    ink: { background: 'var(--color-surface-ink)', border: '1px solid var(--color-surface-ink)', filter: 'brightness(0) invert(1)' },
  };
  const v = variants[variant];

  const [hover, setHover] = React.useState(false);

  const style = {
    width: dim,
    height: dim,
    borderRadius: 'var(--radius-pill)',
    background: v.background,
    border: v.border,
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    cursor: 'pointer',
    boxShadow: hover ? 'var(--shadow-md)' : 'var(--shadow-sm)',
    transform: hover ? 'translateY(-1px)' : 'none',
    transition: `box-shadow var(--duration-base) var(--ease-standard), transform var(--duration-base) var(--ease-standard)`,
  };

  const img = <img src={icon} alt="" style={{ width: iconSizes[size], height: iconSizes[size], filter: v.filter }} />;

  const commonProps = {
    style,
    'aria-label': label,
    title: label,
    onClick,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
  };

  if (as === 'a') return <a href={href} {...commonProps}>{img}</a>;
  return <button type="button" {...commonProps}>{img}</button>;
}
