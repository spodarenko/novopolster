import React from 'react';

export interface IconButtonProps {
  /** Path to an icon asset in assets/icons/ */
  icon: string;
  /** Accessible label (also shown as title tooltip) */
  label: string;
  variant?: 'primary' | 'outline' | 'ink';
  size?: 'sm' | 'md' | 'lg';
  onClick?: () => void;
  as?: 'button' | 'a';
  href?: string;
}

export declare function IconButton(props: IconButtonProps): JSX.Element;
