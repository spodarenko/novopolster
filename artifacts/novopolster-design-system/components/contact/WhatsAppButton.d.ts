import React from 'react';

export interface WhatsAppButtonProps {
  /** Phone number in international format, no + or spaces (e.g. "4989123456") */
  phone?: string;
  /** Pre-filled message opened in WhatsApp */
  message?: string;
  label?: string;
  /** true = fixed circular button bottom-right; false = inline pill CTA */
  floating?: boolean;
}

export declare function WhatsAppButton(props: WhatsAppButtonProps): JSX.Element;
