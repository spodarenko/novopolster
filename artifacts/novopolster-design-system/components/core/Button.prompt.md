Primary call-to-action button used for every action on the site except the WhatsApp channel CTA (that's `WhatsAppButton`).

```jsx
<Button variant="primary" size="md">Termin anfragen</Button>
<Button variant="outline" size="sm" icon="assets/icons/phone.svg">Anrufen</Button>
```

Variants: `primary` (brand teal fill — main conversion action), `secondary` (ink fill — secondary emphasis, e.g. on dark sections), `outline` (bordered, for pairing next to a primary button), `ghost` (text-only, for low-emphasis inline actions like "Mehr erfahren").

Sizes: `sm` / `md` / `lg`. Pass `icon` as a path to one of the SVGs in `assets/icons/` and `iconPosition` to place it left or right of the label.
