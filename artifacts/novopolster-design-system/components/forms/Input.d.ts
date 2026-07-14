import React from 'react';

export interface InputProps {
  label?: string;
  placeholder?: string;
  type?: 'text' | 'email' | 'tel' | 'file';
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  error?: string;
  helpText?: string;
  required?: boolean;
}

export declare function Input(props: InputProps): JSX.Element;
