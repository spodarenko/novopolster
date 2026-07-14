import React from 'react';

export interface BadgeProps {
  children: React.ReactNode;
  tone?: 'neutral' | 'brand' | 'ink' | 'success';
  /** Path to a small icon asset shown before the label */
  icon?: string;
  size?: 'sm' | 'md';
}

export declare function Badge(props: BadgeProps): JSX.Element;
