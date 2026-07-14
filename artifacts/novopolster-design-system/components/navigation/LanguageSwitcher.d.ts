import React from 'react';

export interface LanguageSwitcherProps {
  value?: 'DE' | 'EN' | 'UA' | 'IT';
  onChange?: (code: string) => void;
  /** Use 'dark' on the ink header/footer */
  tone?: 'light' | 'dark';
}

export declare function LanguageSwitcher(props: LanguageSwitcherProps): JSX.Element;
