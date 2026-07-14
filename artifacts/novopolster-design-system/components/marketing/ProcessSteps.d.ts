import React from 'react';

export interface ProcessStep {
  title: string;
  description: string;
  /** Optional inline CTA rendered under this step (e.g. a WhatsAppButton on step 1) */
  cta?: React.ReactNode;
}

export interface ProcessStepsProps {
  steps: ProcessStep[];
}

export declare function ProcessSteps(props: ProcessStepsProps): JSX.Element;
