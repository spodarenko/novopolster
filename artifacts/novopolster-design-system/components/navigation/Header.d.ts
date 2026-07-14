import React from 'react';

export interface NavLink {
  label: string;
  href: string;
}

export interface HeaderProps {
  logo?: string;
  links?: NavLink[];
  lang?: 'DE' | 'EN' | 'UA' | 'IT';
  onLangChange?: (code: string) => void;
  onCta?: () => void;
  /** Translated CTA button label — defaults to German */
  ctaLabel?: string;
}

export declare function Header(props: HeaderProps): JSX.Element;
