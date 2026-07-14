import React from 'react';

export interface ButtonProps {
  /** Button label content */
  children: React.ReactNode;
  /** Visual treatment */
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  /** Size */
  size?: 'sm' | 'md' | 'lg';
  /** Path to an icon asset (assets/icons/*.svg) shown beside the label */
  icon?: string;
  iconPosition?: 'left' | 'right';
  disabled?: boolean;
  /** Render as <a> instead of <button> */
  as?: 'button' | 'a';
  href?: string;
  onClick?: () => void;
  type?: 'button' | 'submit';
  /** Override the default radius (e.g. "64px" for a pill-shaped CTA) */
  radius?: string;
}

export declare function Button(props: ButtonProps): JSX.Element;
