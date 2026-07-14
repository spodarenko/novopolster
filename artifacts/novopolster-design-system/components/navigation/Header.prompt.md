Sticky site header — logo, primary nav, language switcher, primary CTA. Frosts (blurred, translucent) once the page scrolls past 8px.

```jsx
<Header
  links={[{ label: 'Leistungen', href: '#leistungen' }, { label: 'Preise', href: '#preise' }]}
  lang="DE"
  onCta={() => scrollToForm()}
/>
```
