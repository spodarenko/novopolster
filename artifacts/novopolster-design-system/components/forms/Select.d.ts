import React from 'react';

export interface SelectOption {
  value: string;
  label: string;
}

export interface SelectProps {
  label?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  options: (SelectOption | string)[];
  placeholder?: string;
  required?: boolean;
}

export declare function Select(props: SelectProps): JSX.Element;
