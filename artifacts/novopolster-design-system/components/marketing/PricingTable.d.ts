import React from 'react';

export interface PricingRow {
  label: string;
  /** e.g. "79 €" */
  from: string;
  /** e.g. "149 €" */
  to: string;
  note?: string;
}

export interface PricingTableProps {
  rows: PricingRow[];
}

export declare function PricingTable(props: PricingTableProps): JSX.Element;
