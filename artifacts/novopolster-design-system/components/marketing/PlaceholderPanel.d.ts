import React from 'react';

export interface PlaceholderPanelProps {
  /** Path to a muted icon asset */
  icon?: string;
  message: string;
  minHeight?: number;
}

export declare function PlaceholderPanel(props: PlaceholderPanelProps): JSX.Element;
