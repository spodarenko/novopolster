Single-line text field — name/phone/email/PLZ fields on the quote-request form.

```jsx
<Input label="Telefonnummer" type="tel" required placeholder="+49 89 …" />
<Input label="PLZ" error="Außerhalb des 30-km-Radius" />
```

Focus state uses a 3px brand-tinted ring (matches the button focus ring). Pass `error` to switch the border red and show the message below; `helpText` shows muted help copy when there's no error.
