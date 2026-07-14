import React from 'react';

export interface ServiceCardProps {
  /** Path to a Lucide icon in assets/icons/ */
  icon: string;
  title: string;
  description: string;
  /** e.g. "89 €" — shown as "ab 89 €" */
  priceFrom?: string;
  onClick?: () => void;
}

export declare function ServiceCard(props: ServiceCardProps): JSX.Element;
