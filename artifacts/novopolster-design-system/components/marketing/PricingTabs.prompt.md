Tabbed from–to price list, grouped by category — the "tabbed pricing" pattern borrowed from the Cleanora reference (`uploads/references.md`, priority 2), applied to NovoPolster's real 5 categories.

```jsx
<PricingTabs categories={[
  { label: 'Sofa', rows: [
    { label: '2-Sitzer', from: '120 €', to: '170 €' },
    { label: 'Ecksofa', from: '220 €', to: '340 €' },
  ]},
  { label: 'Auto', rows: [
    { label: 'Autoaufbereitung', from: '500 €', to: '800 € (VB)' },
  ], callout: 'Yachten/Flugzeuge außerhalb des 30-km-Radius auf Anfrage.' },
]} />
```

Use `callout` for the one flagged edge case in the brief (premium-car/yacht/plane service outside the standard radius) — it renders as a highlighted note under that category's table, not a full section.
