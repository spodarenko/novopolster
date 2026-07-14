import React from 'react';

export interface PricingTabRow {
  label: string;
  /** e.g. "120 €" */
  from: string;
  /** e.g. "170 €" — omit for a single "von X" style price */
  to?: string;
  note?: string;
}

export interface PricingCategory {
  /** Tab label, e.g. "Sofa" */
  label: string;
  rows: PricingTabRow[];
  /** Optional callout below the table, e.g. a yacht/plane note for Auto */
  callout?: string;
}

export interface PricingTabsProps {
  categories: PricingCategory[];
  defaultTab?: number;
}

export declare function PricingTabs(props: PricingTabsProps): JSX.Element;
