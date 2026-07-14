Native-backed dropdown for service type, preferred time-slot or language.

```jsx
<Select label="Leistung" options={['Sofa', 'Matratze', 'Autositze']} />
```

Set `window.NP_ASSETS_BASE` (e.g. `'../../'`) before mounting if this page lives somewhere other than the project root — every component with a built-in icon (this one, `LanguageSwitcher`, `FAQAccordion`, `WhatsAppButton`, `Footer`, `Header`, `PlaceholderPanel`'s default icon usage) reads that prefix so its internal `assets/icons/*` paths resolve correctly from any folder depth.
