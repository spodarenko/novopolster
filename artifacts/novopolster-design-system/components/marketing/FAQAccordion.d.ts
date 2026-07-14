import React from 'react';

export interface FAQItem {
  question: string;
  answer: string;
}

export interface FAQAccordionProps {
  items: FAQItem[];
  /** Index open by default, -1 for none */
  defaultOpen?: number;
}

export declare function FAQAccordion(props: FAQAccordionProps): JSX.Element;
