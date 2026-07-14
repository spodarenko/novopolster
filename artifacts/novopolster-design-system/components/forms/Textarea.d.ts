import React from 'react';

export interface TextareaProps {
  label?: string;
  placeholder?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  rows?: number;
  helpText?: string;
}

export declare function Textarea(props: TextareaProps): JSX.Element;
