import React from 'react';

export interface FooterProps {
  logo?: string;
  lang?: 'DE' | 'EN' | 'UA' | 'IT';
  onLangChange?: (code: string) => void;
  /** Active translation object (see ui_kits/marketing-website/i18n.js) — supplies tagline/services/labels */
  t?: any;
}

export declare function Footer(props: FooterProps): JSX.Element;
