/* @ds-bundle: {"format":4,"namespace":"NovoPolsterDesignSystem_1b2f21","components":[{"name":"WhatsAppButton","sourcePath":"components/contact/WhatsAppButton.jsx"},{"name":"Badge","sourcePath":"components/core/Badge.jsx"},{"name":"Button","sourcePath":"components/core/Button.jsx"},{"name":"IconButton","sourcePath":"components/core/IconButton.jsx"},{"name":"Input","sourcePath":"components/forms/Input.jsx"},{"name":"Select","sourcePath":"components/forms/Select.jsx"},{"name":"Textarea","sourcePath":"components/forms/Textarea.jsx"},{"name":"FAQAccordion","sourcePath":"components/marketing/FAQAccordion.jsx"},{"name":"PlaceholderPanel","sourcePath":"components/marketing/PlaceholderPanel.jsx"},{"name":"PricingTable","sourcePath":"components/marketing/PricingTable.jsx"},{"name":"PricingTabs","sourcePath":"components/marketing/PricingTabs.jsx"},{"name":"ProcessSteps","sourcePath":"components/marketing/ProcessSteps.jsx"},{"name":"ServiceCard","sourcePath":"components/marketing/ServiceCard.jsx"},{"name":"Footer","sourcePath":"components/navigation/Footer.jsx"},{"name":"Header","sourcePath":"components/navigation/Header.jsx"},{"name":"LanguageSwitcher","sourcePath":"components/navigation/LanguageSwitcher.jsx"}],"sourceHashes":{"components/contact/WhatsAppButton.jsx":"08c268e7845c","components/core/Badge.jsx":"feb69567b4d0","components/core/Button.jsx":"979857ab1472","components/core/IconButton.jsx":"52eac6c29dc7","components/forms/Input.jsx":"9480624a76be","components/forms/Select.jsx":"5e0d79deb21a","components/forms/Textarea.jsx":"436314509c81","components/marketing/FAQAccordion.jsx":"3821df0423e9","components/marketing/PlaceholderPanel.jsx":"90f0fc668a78","components/marketing/PricingTable.jsx":"ec482237ed5e","components/marketing/PricingTabs.jsx":"c41f485d89fe","components/marketing/ProcessSteps.jsx":"6ee538d11e30","components/marketing/ServiceCard.jsx":"cd928d8811dd","components/navigation/Footer.jsx":"811d3dc1acb3","components/navigation/Header.jsx":"73db0a316c05","components/navigation/LanguageSwitcher.jsx":"e0e972aa1926","ui_kits/marketing-website/App.jsx":"b14bb749bc20","ui_kits/marketing-website/i18n.js":"752c2bda3442","ui_kits/marketing-website/sections/Benefits.jsx":"6f225d4c2114","ui_kits/marketing-website/sections/ContactSection.jsx":"92b24db097ce","ui_kits/marketing-website/sections/FAQSection.jsx":"3391d1960246","ui_kits/marketing-website/sections/Hero.jsx":"ecc9a4ebc6c9","ui_kits/marketing-website/sections/Process.jsx":"0e6108204802","ui_kits/marketing-website/sections/ServiceArea.jsx":"bd6df34b6d5d","ui_kits/marketing-website/sections/ServicesPricing.jsx":"0947de26c94b","ui_kits/marketing-website/sections/Trust.jsx":"0be5e5d8d536","ui_kits/marketing-website/sections/WhatsAppFloat.jsx":"59685d136ee1","ui_kits/marketing-website/tweaks-panel.jsx":"6591467622ed"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.NovoPolsterDesignSystem_1b2f21 = window.NovoPolsterDesignSystem_1b2f21 || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/contact/WhatsAppButton.jsx
try { (() => {
/**
 * Sticky floating WhatsApp button — the brand's primary contact
 * channel (chosen over phone/email/contact forms for faster
 * response and to serve DE/EN/UA/IT customers comfortably).
 */
function WhatsAppButton({
  phone = '491605712229',
  message = 'Hallo, ich interessiere mich für eine Polsterreinigung.',
  label = 'Per WhatsApp anfragen',
  floating = true
}) {
  const [hover, setHover] = React.useState(false);
  const href = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
  if (floating) {
    return /*#__PURE__*/React.createElement("a", {
      href: href,
      target: "_blank",
      rel: "noreferrer",
      onMouseEnter: () => setHover(true),
      onMouseLeave: () => setHover(false),
      style: {
        position: 'fixed',
        bottom: 24,
        right: 24,
        zIndex: 100,
        width: 60,
        height: 60,
        borderRadius: 'var(--radius-pill)',
        background: 'var(--color-whatsapp)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        boxShadow: hover ? 'var(--shadow-lg)' : 'var(--shadow-md)',
        transform: hover ? 'translateY(-2px) scale(1.03)' : 'none',
        transition: `box-shadow var(--duration-base) var(--ease-standard), transform var(--duration-base) var(--ease-standard)`
      },
      "aria-label": label,
      title: label
    }, /*#__PURE__*/React.createElement("img", {
      src: (window.NP_ASSETS_BASE || '') + "assets/icons/whatsapp.svg",
      alt: "",
      style: {
        width: 28,
        height: 28,
        filter: 'brightness(0) invert(1)'
      }
    }));
  }
  return /*#__PURE__*/React.createElement("a", {
    href: href,
    target: "_blank",
    rel: "noreferrer",
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 10,
      background: hover ? 'var(--color-whatsapp-hover)' : 'var(--color-whatsapp)',
      color: '#fff',
      fontFamily: 'var(--font-display)',
      fontWeight: 900,
      fontSize: 'var(--text-base)',
      padding: '14px 24px',
      borderRadius: 'var(--radius-pill)',
      textDecoration: 'none',
      boxShadow: 'var(--shadow-sm)',
      transition: `background var(--duration-base) var(--ease-standard)`
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: (window.NP_ASSETS_BASE || '') + "assets/icons/whatsapp.svg",
    alt: "",
    style: {
      width: 20,
      height: 20,
      filter: 'brightness(0) invert(1)'
    }
  }), label);
}
Object.assign(__ds_scope, { WhatsAppButton });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/contact/WhatsAppButton.jsx", error: String((e && e.message) || e) }); }

// components/core/Badge.jsx
try { (() => {
/**
 * Small pill label — service tags, language pills, trust badges
 * ("Festpreis", "UA", "Termin in 48h").
 */
function Badge({
  children,
  tone = 'neutral',
  icon = null,
  size = 'md',
  dashed = false
}) {
  const tones = {
    neutral: {
      background: 'var(--neutral-100)',
      color: 'var(--color-text-secondary)'
    },
    brand: {
      background: 'var(--color-brand-subtle)',
      color: 'var(--color-brand-active)'
    },
    ink: {
      background: 'var(--color-surface-ink)',
      color: 'var(--color-text-inverse)'
    },
    success: {
      background: 'var(--color-success-subtle)',
      color: 'var(--green-600)'
    }
  };
  const sizes = {
    sm: {
      fontSize: 'var(--text-xs)',
      padding: '4px 10px'
    },
    md: {
      fontSize: 'var(--text-sm)',
      padding: '6px 14px'
    }
  };
  const t = tones[tone];
  const s = sizes[size];
  return /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 6,
      fontFamily: 'var(--font-body)',
      fontWeight: 600,
      letterSpacing: 'var(--tracking-wide)',
      borderRadius: 'var(--radius-pill)',
      ...(dashed ? {
        background: 'transparent',
        border: '1.5px dashed var(--color-border-strong)',
        color: 'var(--color-text-muted)'
      } : t),
      ...s
    }
  }, icon ? /*#__PURE__*/React.createElement("img", {
    src: icon,
    alt: "",
    style: {
      width: 12,
      height: 12,
      filter: tone === 'ink' && !dashed ? 'brightness(0) invert(1)' : 'none',
      opacity: dashed ? 0.6 : 1
    }
  }) : null, children);
}
Object.assign(__ds_scope, { Badge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Badge.jsx", error: String((e && e.message) || e) }); }

// components/core/Button.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Primary call-to-action button. Three visual variants and two sizes,
 * covers every CTA on the marketing site except the WhatsApp channel
 * button (see components/contact/WhatsAppButton).
 */
function Button({
  children,
  variant = 'primary',
  size = 'md',
  icon = null,
  iconPosition = 'left',
  disabled = false,
  as = 'button',
  href,
  onClick,
  type = 'button',
  radius
}) {
  const base = {
    fontFamily: 'var(--font-display)',
    fontWeight: 900,
    textTransform: 'uppercase',
    letterSpacing: 'var(--tracking-wide)',
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 8,
    borderRadius: radius || 'var(--radius-md)',
    border: '1px solid transparent',
    cursor: disabled ? 'default' : 'pointer',
    opacity: disabled ? 0.5 : 1,
    transition: `background var(--duration-base) var(--ease-standard), border-color var(--duration-base) var(--ease-standard), transform var(--duration-fast) var(--ease-standard), box-shadow var(--duration-base) var(--ease-standard)`,
    textDecoration: 'none',
    whiteSpace: 'nowrap'
  };
  const sizes = {
    sm: {
      fontSize: 'var(--text-sm)',
      padding: '8px 16px'
    },
    md: {
      fontSize: 'var(--text-base)',
      padding: '12px 22px'
    },
    lg: {
      fontSize: 'var(--text-lg)',
      padding: '16px 30px'
    }
  };
  const variants = {
    primary: {
      background: 'var(--color-brand)',
      color: 'var(--color-text-inverse)',
      borderColor: 'var(--color-brand)'
    },
    secondary: {
      background: 'var(--color-surface-ink)',
      color: 'var(--color-text-inverse)',
      borderColor: 'var(--color-surface-ink)'
    },
    outline: {
      background: 'transparent',
      color: 'var(--color-text-primary)',
      borderColor: 'var(--color-border-strong)'
    },
    ghost: {
      background: 'transparent',
      color: 'var(--color-brand)',
      borderColor: 'transparent'
    }
  };
  const hoverBg = {
    primary: 'var(--color-brand-hover)',
    secondary: 'var(--neutral-800)',
    outline: 'var(--color-bg-sunken)',
    ghost: 'var(--color-brand-subtle)'
  };
  const [hover, setHover] = React.useState(false);
  const style = {
    ...base,
    ...sizes[size],
    ...variants[variant],
    ...(hover && !disabled ? {
      background: hoverBg[variant]
    } : {})
  };
  const content = /*#__PURE__*/React.createElement(React.Fragment, null, icon && iconPosition === 'left' ? /*#__PURE__*/React.createElement("img", {
    src: icon,
    alt: "",
    style: {
      width: size === 'lg' ? 20 : 16,
      height: size === 'lg' ? 20 : 16,
      filter: variant === 'outline' || variant === 'ghost' ? 'none' : 'brightness(0) invert(1)'
    }
  }) : null, /*#__PURE__*/React.createElement("span", null, children), icon && iconPosition === 'right' ? /*#__PURE__*/React.createElement("img", {
    src: icon,
    alt: "",
    style: {
      width: size === 'lg' ? 20 : 16,
      height: size === 'lg' ? 20 : 16,
      filter: variant === 'outline' || variant === 'ghost' ? 'none' : 'brightness(0) invert(1)'
    }
  }) : null);
  const commonProps = {
    style,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    onClick: disabled ? undefined : onClick
  };
  if (as === 'a') {
    return /*#__PURE__*/React.createElement("a", _extends({
      href: disabled ? undefined : href
    }, commonProps), content);
  }
  return /*#__PURE__*/React.createElement("button", _extends({
    type: type,
    disabled: disabled
  }, commonProps), content);
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Button.jsx", error: String((e && e.message) || e) }); }

// components/core/IconButton.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Circular icon-only button — used for the sticky WhatsApp float,
 * header phone shortcut, and carousel/lightbox controls.
 */
function IconButton({
  icon,
  label,
  variant = 'outline',
  size = 'md',
  onClick,
  href,
  as = 'button'
}) {
  const sizes = {
    sm: 32,
    md: 44,
    lg: 56
  };
  const iconSizes = {
    sm: 14,
    md: 18,
    lg: 22
  };
  const dim = sizes[size];
  const variants = {
    primary: {
      background: 'var(--color-brand)',
      border: '1px solid var(--color-brand)',
      filter: 'brightness(0) invert(1)'
    },
    outline: {
      background: 'var(--color-surface)',
      border: '1px solid var(--color-border-strong)',
      filter: 'none'
    },
    ink: {
      background: 'var(--color-surface-ink)',
      border: '1px solid var(--color-surface-ink)',
      filter: 'brightness(0) invert(1)'
    }
  };
  const v = variants[variant];
  const [hover, setHover] = React.useState(false);
  const style = {
    width: dim,
    height: dim,
    borderRadius: 'var(--radius-pill)',
    background: v.background,
    border: v.border,
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    cursor: 'pointer',
    boxShadow: hover ? 'var(--shadow-md)' : 'var(--shadow-sm)',
    transform: hover ? 'translateY(-1px)' : 'none',
    transition: `box-shadow var(--duration-base) var(--ease-standard), transform var(--duration-base) var(--ease-standard)`
  };
  const img = /*#__PURE__*/React.createElement("img", {
    src: icon,
    alt: "",
    style: {
      width: iconSizes[size],
      height: iconSizes[size],
      filter: v.filter
    }
  });
  const commonProps = {
    style,
    'aria-label': label,
    title: label,
    onClick,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false)
  };
  if (as === 'a') return /*#__PURE__*/React.createElement("a", _extends({
    href: href
  }, commonProps), img);
  return /*#__PURE__*/React.createElement("button", _extends({
    type: "button"
  }, commonProps), img);
}
Object.assign(__ds_scope, { IconButton });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/IconButton.jsx", error: String((e && e.message) || e) }); }

// components/forms/Input.jsx
try { (() => {
/**
 * Single-line text field for the quote-request / contact form.
 */
function Input({
  label,
  placeholder,
  type = 'text',
  value,
  onChange,
  error,
  helpText,
  required = false
}) {
  const [focused, setFocused] = React.useState(false);
  const [fileName, setFileName] = React.useState('');
  if (type === 'file') {
    const base = window.NP_ASSETS_BASE || '';
    return /*#__PURE__*/React.createElement("label", {
      style: {
        display: 'flex',
        flexDirection: 'column',
        gap: 6,
        fontFamily: 'var(--font-body)'
      }
    }, label ? /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 'var(--text-sm)',
        fontWeight: 600,
        color: 'var(--color-text-primary)'
      }
    }, label, required ? /*#__PURE__*/React.createElement("span", {
      style: {
        color: 'var(--color-brand)'
      }
    }, " *") : null) : null, /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: 10,
        position: 'relative',
        border: `1.5px dashed ${focused ? 'var(--color-brand)' : 'var(--color-border-strong)'}`,
        borderRadius: 'var(--radius-sm)',
        padding: '12px 14px',
        cursor: 'pointer',
        background: 'var(--color-bg-sunken)',
        color: 'var(--color-text-secondary)',
        fontSize: 'var(--text-sm)'
      }
    }, /*#__PURE__*/React.createElement("img", {
      src: base + 'assets/icons/camera.svg',
      alt: "",
      style: {
        width: 18,
        height: 18,
        opacity: 0.7
      }
    }), /*#__PURE__*/React.createElement("span", null, fileName || placeholder || 'Foto hochladen'), /*#__PURE__*/React.createElement("input", {
      type: "file",
      accept: "image/*",
      onChange: e => {
        setFileName(e.target.files?.[0]?.name || '');
        onChange && onChange(e);
      },
      onFocus: () => setFocused(true),
      onBlur: () => setFocused(false),
      style: {
        position: 'absolute',
        inset: 0,
        width: '100%',
        height: '100%',
        opacity: 0,
        cursor: 'pointer'
      }
    })), helpText ? /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 'var(--text-xs)',
        color: 'var(--color-text-muted)'
      }
    }, helpText) : null);
  }
  return /*#__PURE__*/React.createElement("label", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 6,
      fontFamily: 'var(--font-body)'
    }
  }, label ? /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 'var(--text-sm)',
      fontWeight: 600,
      color: 'var(--color-text-primary)'
    }
  }, label, required ? /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--color-brand)'
    }
  }, " *") : null) : null, /*#__PURE__*/React.createElement("input", {
    type: type,
    placeholder: placeholder,
    value: value,
    onChange: onChange,
    onFocus: () => setFocused(true),
    onBlur: () => setFocused(false),
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 'var(--text-base)',
      padding: '12px 14px',
      borderRadius: 'var(--radius-sm)',
      border: `1.5px solid ${error ? 'var(--color-danger)' : focused ? 'var(--color-brand)' : 'var(--color-border)'}`,
      outline: 'none',
      background: 'var(--color-surface)',
      color: 'var(--color-text-primary)',
      boxShadow: focused ? '0 0 0 3px var(--color-brand-subtle)' : 'none',
      transition: `border-color var(--duration-fast) var(--ease-standard), box-shadow var(--duration-fast) var(--ease-standard)`
    }
  }), error ? /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 'var(--text-xs)',
      color: 'var(--color-danger)'
    }
  }, error) : helpText ? /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 'var(--text-xs)',
      color: 'var(--color-text-muted)'
    }
  }, helpText) : null);
}
Object.assign(__ds_scope, { Input });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Input.jsx", error: String((e && e.message) || e) }); }

// components/forms/Select.jsx
try { (() => {
/**
 * Native-backed select — service type, preferred time-slot, language.
 */
function Select({
  label,
  value,
  onChange,
  options = [],
  placeholder = 'Bitte wählen',
  required = false
}) {
  const [focused, setFocused] = React.useState(false);
  return /*#__PURE__*/React.createElement("label", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 6,
      fontFamily: 'var(--font-body)'
    }
  }, label ? /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 'var(--text-sm)',
      fontWeight: 600,
      color: 'var(--color-text-primary)'
    }
  }, label, required ? /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--color-brand)'
    }
  }, " *") : null) : null, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative'
    }
  }, /*#__PURE__*/React.createElement("select", {
    value: value,
    onChange: onChange,
    onFocus: () => setFocused(true),
    onBlur: () => setFocused(false),
    style: {
      width: '100%',
      appearance: 'none',
      fontFamily: 'var(--font-body)',
      fontSize: 'var(--text-base)',
      padding: '12px 40px 12px 14px',
      borderRadius: 'var(--radius-sm)',
      border: `1.5px solid ${focused ? 'var(--color-brand)' : 'var(--color-border)'}`,
      outline: 'none',
      background: 'var(--color-surface)',
      color: 'var(--color-text-primary)',
      boxShadow: focused ? '0 0 0 3px var(--color-brand-subtle)' : 'none',
      transition: `border-color var(--duration-fast) var(--ease-standard)`
    }
  }, /*#__PURE__*/React.createElement("option", {
    value: "",
    disabled: true,
    hidden: true
  }, placeholder), options.map(o => /*#__PURE__*/React.createElement("option", {
    key: o.value ?? o,
    value: o.value ?? o
  }, o.label ?? o))), /*#__PURE__*/React.createElement("img", {
    src: (window.NP_ASSETS_BASE || '') + "assets/icons/chevron-down.svg",
    alt: "",
    style: {
      position: 'absolute',
      right: 12,
      top: '50%',
      transform: 'translateY(-50%)',
      width: 16,
      height: 16,
      pointerEvents: 'none'
    }
  })));
}
Object.assign(__ds_scope, { Select });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Select.jsx", error: String((e && e.message) || e) }); }

// components/forms/Textarea.jsx
try { (() => {
/**
 * Multi-line text field — free-text notes on the quote-request form
 * ("Beschreiben Sie den Zustand/Fleck …").
 */
function Textarea({
  label,
  placeholder,
  value,
  onChange,
  rows = 4,
  helpText
}) {
  const [focused, setFocused] = React.useState(false);
  return /*#__PURE__*/React.createElement("label", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 6,
      fontFamily: 'var(--font-body)'
    }
  }, label ? /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 'var(--text-sm)',
      fontWeight: 600,
      color: 'var(--color-text-primary)'
    }
  }, label) : null, /*#__PURE__*/React.createElement("textarea", {
    placeholder: placeholder,
    value: value,
    onChange: onChange,
    rows: rows,
    onFocus: () => setFocused(true),
    onBlur: () => setFocused(false),
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 'var(--text-base)',
      padding: '12px 14px',
      borderRadius: 'var(--radius-sm)',
      border: `1.5px solid ${focused ? 'var(--color-brand)' : 'var(--color-border)'}`,
      outline: 'none',
      resize: 'vertical',
      background: 'var(--color-surface)',
      color: 'var(--color-text-primary)',
      boxShadow: focused ? '0 0 0 3px var(--color-brand-subtle)' : 'none',
      transition: `border-color var(--duration-fast) var(--ease-standard)`
    }
  }), helpText ? /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 'var(--text-xs)',
      color: 'var(--color-text-muted)'
    }
  }, helpText) : null);
}
Object.assign(__ds_scope, { Textarea });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Textarea.jsx", error: String((e && e.message) || e) }); }

// components/marketing/FAQAccordion.jsx
try { (() => {
/**
 * FAQ accordion — single-open list of question/answer pairs.
 */
function FAQAccordion({
  items = [],
  defaultOpen = 0
}) {
  const [openIndex, setOpenIndex] = React.useState(defaultOpen);
  return /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-body)',
      display: 'flex',
      flexDirection: 'column'
    }
  }, items.map((item, i) => {
    const open = openIndex === i;
    return /*#__PURE__*/React.createElement("div", {
      key: i,
      style: {
        borderBottom: '1px solid var(--color-border)'
      }
    }, /*#__PURE__*/React.createElement("button", {
      onClick: () => setOpenIndex(open ? -1 : i),
      style: {
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        gap: 12,
        padding: '18px 4px',
        background: 'none',
        border: 'none',
        cursor: 'pointer',
        textAlign: 'left',
        fontFamily: 'var(--font-display)',
        fontWeight: 600,
        fontSize: 'var(--text-base)',
        color: 'var(--color-text-primary)'
      }
    }, item.question, /*#__PURE__*/React.createElement("img", {
      src: (window.NP_ASSETS_BASE || '') + "assets/icons/chevron-down.svg",
      alt: "",
      style: {
        width: 18,
        height: 18,
        flexShrink: 0,
        transform: open ? 'rotate(180deg)' : 'none',
        transition: `transform var(--duration-base) var(--ease-standard)`
      }
    })), /*#__PURE__*/React.createElement("div", {
      style: {
        maxHeight: open ? 400 : 0,
        overflow: 'hidden',
        transition: `max-height var(--duration-slow) var(--ease-standard)`
      }
    }, /*#__PURE__*/React.createElement("p", {
      style: {
        margin: 0,
        padding: '0 4px 18px',
        fontSize: 'var(--text-sm)',
        color: 'var(--color-text-secondary)',
        lineHeight: 'var(--leading-relaxed)'
      }
    }, item.answer)));
  }));
}
Object.assign(__ds_scope, { FAQAccordion });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/marketing/FAQAccordion.jsx", error: String((e && e.message) || e) }); }

// components/marketing/PlaceholderPanel.jsx
try { (() => {
/**
 * Honest "content pending from client" panel — dashed border, no
 * invented copy. Used where real assets (before/after photos,
 * testimonials) don't exist yet, instead of fabricating placeholder
 * content.
 */
function PlaceholderPanel({
  icon,
  message,
  minHeight = 220
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      border: '1.5px dashed var(--color-border-strong)',
      borderRadius: 'var(--radius-lg)',
      background: 'var(--color-bg-sunken)',
      minHeight,
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      gap: 'var(--space-3)',
      padding: 'var(--space-8)',
      textAlign: 'center',
      fontFamily: 'var(--font-body)'
    }
  }, icon ? /*#__PURE__*/React.createElement("img", {
    src: icon,
    alt: "",
    style: {
      width: 28,
      height: 28,
      opacity: 0.45
    }
  }) : null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 'var(--text-sm)',
      color: 'var(--color-text-muted)',
      maxWidth: 340,
      lineHeight: 'var(--leading-relaxed)'
    }
  }, message));
}
Object.assign(__ds_scope, { PlaceholderPanel });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/marketing/PlaceholderPanel.jsx", error: String((e && e.message) || e) }); }

// components/marketing/PricingTable.jsx
try { (() => {
/**
 * Transparent from–to price list — the brand's core differentiator.
 * Renders a row per service; every row always shows a number,
 * never "Preis auf Anfrage".
 */
function PricingTable({
  rows = []
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-body)',
      background: 'var(--color-surface)',
      border: '1px solid var(--color-border)',
      borderRadius: 'var(--radius-lg)',
      overflow: 'hidden'
    }
  }, rows.map((row, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      gap: 'var(--space-4)',
      padding: '18px 24px',
      borderBottom: i < rows.length - 1 ? '1px solid var(--color-border)' : 'none'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontWeight: 600,
      fontSize: 'var(--text-base)',
      color: 'var(--color-text-primary)'
    }
  }, row.label), row.note ? /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 'var(--text-xs)',
      color: 'var(--color-text-muted)',
      marginTop: 2
    }
  }, row.note) : null), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 700,
      fontSize: 'var(--text-lg)',
      color: 'var(--color-brand-active)',
      whiteSpace: 'nowrap'
    }
  }, row.from, "\u2013", row.to))));
}
Object.assign(__ds_scope, { PricingTable });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/marketing/PricingTable.jsx", error: String((e && e.message) || e) }); }

// components/marketing/PricingTabs.jsx
try { (() => {
/**
 * Tabbed from–to price list grouped by service category — the
 * "tabbed pricing" pattern from the Cleanora reference, applied to
 * NovoPolster's 5 real price categories (Sofa/Matratze/Stühle &
 * Sessel/Teppiche/Auto). Each tab renders a PricingTable.
 */
function PricingTabs({
  categories = [],
  defaultTab = 0
}) {
  const [active, setActive] = React.useState(defaultTab);
  const cat = categories[active];
  return /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-body)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 'var(--space-2)',
      flexWrap: 'wrap',
      borderBottom: '1px solid var(--color-border)',
      marginBottom: 'var(--space-6)'
    }
  }, categories.map((c, i) => {
    const isActive = i === active;
    return /*#__PURE__*/React.createElement("button", {
      key: c.label,
      onClick: () => setActive(i),
      style: {
        fontFamily: 'var(--font-body)',
        fontWeight: 600,
        fontSize: 'var(--text-sm)',
        padding: '10px 18px',
        background: 'none',
        border: 'none',
        cursor: 'pointer',
        color: isActive ? 'var(--color-brand-active)' : 'var(--color-text-secondary)',
        borderBottom: isActive ? '2px solid var(--color-brand)' : '2px solid transparent',
        marginBottom: -1,
        transition: `color var(--duration-base) var(--ease-standard), border-color var(--duration-base) var(--ease-standard)`
      }
    }, c.label);
  })), cat ? /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--color-surface)',
      border: '1px solid var(--color-border)',
      borderRadius: 'var(--radius-lg)',
      overflow: 'hidden'
    }
  }, cat.rows.map((row, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      gap: 'var(--space-4)',
      padding: '18px 24px',
      borderBottom: i < cat.rows.length - 1 ? '1px solid var(--color-border)' : 'none'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontWeight: 600,
      fontSize: 'var(--text-base)',
      color: 'var(--color-text-primary)'
    }
  }, row.label), row.note ? /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 'var(--text-xs)',
      color: 'var(--color-text-muted)',
      marginTop: 2
    }
  }, row.note) : null), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 700,
      fontSize: 'var(--text-lg)',
      color: 'var(--color-brand-active)',
      whiteSpace: 'nowrap'
    }
  }, row.to ? `${row.from}–${row.to}` : row.from)))), cat.callout ? /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 'var(--space-4)',
      padding: '14px 18px',
      borderRadius: 'var(--radius-md)',
      background: 'var(--color-brand-subtle)',
      color: 'var(--color-brand-active)',
      fontSize: 'var(--text-sm)',
      lineHeight: 'var(--leading-relaxed)'
    }
  }, cat.callout) : null) : null);
}
Object.assign(__ds_scope, { PricingTabs });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/marketing/PricingTabs.jsx", error: String((e && e.message) || e) }); }

// components/marketing/ProcessSteps.jsx
try { (() => {
/**
 * "How it works" step list — numbered icon steps with connecting
 * line. Used for the brief's fixed 3-step process explanation.
 */
function ProcessSteps({
  steps = []
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: `repeat(${steps.length}, 1fr)`,
      gap: 'var(--space-8)',
      fontFamily: 'var(--font-body)',
      position: 'relative'
    }
  }, steps.map((s, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-3)',
      position: 'relative'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 'var(--space-3)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 40,
      height: 40,
      borderRadius: 'var(--radius-pill)',
      flexShrink: 0,
      background: 'var(--color-brand)',
      color: '#fff',
      fontFamily: 'var(--font-display)',
      fontWeight: 700,
      fontSize: 'var(--text-base)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }
  }, i + 1), i < steps.length - 1 ? /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      height: 1,
      background: 'var(--color-border-strong)'
    }
  }) : null), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 700,
      fontSize: 'var(--text-lg)',
      color: 'var(--color-text-primary)'
    }
  }, s.title), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 'var(--text-sm)',
      color: 'var(--color-text-secondary)',
      lineHeight: 'var(--leading-relaxed)'
    }
  }, s.description), s.cta ? /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 'var(--space-2)'
    }
  }, s.cta) : null)));
}
Object.assign(__ds_scope, { ProcessSteps });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/marketing/ProcessSteps.jsx", error: String((e && e.message) || e) }); }

// components/marketing/ServiceCard.jsx
try { (() => {
/**
 * Service tile — icon, title, one-line description and a
 * transparent "from" price. The core building block of the
 * services grid (Sofa / Matratze / Autositze / …).
 */
function ServiceCard({
  icon,
  title,
  description,
  priceFrom,
  onClick
}) {
  const [hover, setHover] = React.useState(false);
  return /*#__PURE__*/React.createElement("div", {
    onClick: onClick,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      fontFamily: 'var(--font-body)',
      background: 'var(--color-surface)',
      border: '1px solid var(--color-border)',
      borderRadius: 'var(--radius-lg)',
      padding: 'var(--space-6)',
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-4)',
      cursor: onClick ? 'pointer' : 'default',
      boxShadow: hover ? 'var(--shadow-md)' : 'var(--shadow-xs)',
      transform: hover ? 'translateY(-3px)' : 'none',
      transition: `box-shadow var(--duration-base) var(--ease-standard), transform var(--duration-base) var(--ease-standard)`
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 48,
      height: 48,
      borderRadius: 'var(--radius-md)',
      background: 'var(--color-brand-subtle)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: icon,
    alt: "",
    style: {
      width: 24,
      height: 24,
      filter: 'invert(38%) sepia(80%) saturate(600%) hue-rotate(140deg) brightness(0.9)'
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 6
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 700,
      fontSize: 'var(--text-lg)',
      color: 'var(--color-text-primary)'
    }
  }, title), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 'var(--text-sm)',
      color: 'var(--color-text-secondary)',
      lineHeight: 'var(--leading-relaxed)'
    }
  }, description)), priceFrom ? /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 'var(--text-sm)',
      fontWeight: 600,
      color: 'var(--color-brand-active)',
      paddingTop: 4,
      borderTop: '1px solid var(--color-border)'
    }
  }, "ab ", priceFrom) : null);
}
Object.assign(__ds_scope, { ServiceCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/marketing/ServiceCard.jsx", error: String((e && e.message) || e) }); }

// components/navigation/LanguageSwitcher.jsx
try { (() => {
/**
 * Compact dropdown for switching between the site's 4 languages.
 */
function LanguageSwitcher({
  value = 'DE',
  onChange,
  tone = 'light'
}) {
  const [open, setOpen] = React.useState(false);
  const rootRef = React.useRef(null);
  const langs = [{
    code: 'DE',
    label: 'Deutsch'
  }, {
    code: 'EN',
    label: 'English'
  }, {
    code: 'UA',
    label: 'Українська'
  }, {
    code: 'IT',
    label: 'Italiano'
  }];
  const dark = tone === 'dark';
  React.useEffect(() => {
    if (!open) return;
    const onOutsideClick = e => {
      if (rootRef.current && !rootRef.current.contains(e.target)) setOpen(false);
    };
    document.addEventListener('mousedown', onOutsideClick);
    return () => document.removeEventListener('mousedown', onOutsideClick);
  }, [open]);
  return /*#__PURE__*/React.createElement("div", {
    ref: rootRef,
    style: {
      position: 'relative',
      fontFamily: 'var(--font-body)'
    }
  }, /*#__PURE__*/React.createElement("button", {
    onClick: () => setOpen(o => !o),
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 6,
      background: 'none',
      border: 'none',
      cursor: 'pointer',
      color: dark ? 'var(--color-text-inverse)' : 'var(--color-text-primary)',
      fontSize: 'var(--text-sm)',
      fontWeight: 600,
      padding: '8px 4px'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: (window.NP_ASSETS_BASE || '') + "assets/icons/globe.svg",
    alt: "",
    style: {
      width: 16,
      height: 16,
      filter: dark ? 'brightness(0) invert(1)' : 'none'
    }
  }), value, /*#__PURE__*/React.createElement("img", {
    src: (window.NP_ASSETS_BASE || '') + "assets/icons/chevron-down.svg",
    alt: "",
    style: {
      width: 12,
      height: 12,
      filter: dark ? 'brightness(0) invert(1)' : 'none',
      transform: open ? 'rotate(180deg)' : 'none'
    }
  })), open ? /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      top: '100%',
      right: 0,
      marginTop: 4,
      background: 'var(--color-surface)',
      border: '1px solid var(--color-border)',
      borderRadius: 'var(--radius-md)',
      boxShadow: 'var(--shadow-md)',
      overflow: 'hidden',
      zIndex: 10,
      minWidth: 140
    }
  }, langs.map(l => /*#__PURE__*/React.createElement("div", {
    key: l.code,
    onClick: () => {
      onChange && onChange(l.code);
      setOpen(false);
    },
    style: {
      padding: '10px 14px',
      fontSize: 'var(--text-sm)',
      cursor: 'pointer',
      color: l.code === value ? 'var(--color-brand-active)' : 'var(--color-text-primary)',
      fontWeight: l.code === value ? 700 : 400,
      background: l.code === value ? 'var(--color-brand-subtle)' : 'transparent'
    }
  }, l.code, " \u2014 ", l.label))) : null);
}
Object.assign(__ds_scope, { LanguageSwitcher });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/LanguageSwitcher.jsx", error: String((e && e.message) || e) }); }

// components/navigation/Footer.jsx
try { (() => {
/**
 * Site footer — ink background, white mark, service-area note,
 * contact channels and language switcher.
 */
function Footer({
  logo,
  lang = 'DE',
  onLangChange,
  t
}) {
  const base = window.NP_ASSETS_BASE || '';
  const logoSrc = logo || base + 'assets/logo/novopolster-logo-white.png';
  const socials = [{
    name: 'Instagram',
    icon: 'instagram',
    href: 'https://www.instagram.com/novopolster'
  }, {
    name: 'TikTok',
    icon: 'tiktok',
    href: 'https://www.tiktok.com/@novo.polster'
  }, {
    name: 'Facebook',
    icon: 'facebook',
    href: 'https://www.facebook.com/share/1D6JAwE911/'
  }];
  return /*#__PURE__*/React.createElement("footer", {
    style: {
      background: 'var(--color-surface-ink)',
      color: 'var(--color-text-inverse)',
      fontFamily: 'var(--font-body)',
      padding: 'var(--space-16) var(--page-gutter) var(--space-8)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1.4fr 1fr 1fr',
      gap: 'var(--space-12)',
      maxWidth: 'var(--content-max-width)',
      margin: '0 auto'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-4)'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: logoSrc,
    alt: "NovoPolster",
    style: {
      height: 28,
      width: 'auto',
      objectFit: 'contain',
      alignSelf: 'flex-start'
    }
  }), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontSize: 'var(--text-sm)',
      color: 'var(--color-text-inverse-muted)',
      lineHeight: 'var(--leading-relaxed)',
      maxWidth: 320
    }
  }, t ? t.footer.tagline : 'Polster-, Matratzen- und Autositzreinigung in München und im Umkreis von 30\u00A0km.'), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 'var(--space-3)',
      marginTop: 'var(--space-1)'
    }
  }, socials.map(s => /*#__PURE__*/React.createElement("a", {
    key: s.name,
    href: s.href,
    target: "_blank",
    rel: "noreferrer",
    "aria-label": s.name,
    title: s.name,
    style: {
      width: 34,
      height: 34,
      borderRadius: 'var(--radius-pill)',
      background: 'rgba(255,255,255,0.08)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: `${base}assets/icons/${s.icon}.svg`,
    alt: "",
    style: {
      width: 15,
      height: 15,
      filter: 'brightness(0) invert(1)'
    }
  }))))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-3)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 'var(--text-xs)',
      letterSpacing: 'var(--tracking-wide)',
      textTransform: 'uppercase',
      color: 'var(--color-text-inverse-muted)',
      fontWeight: 600
    }
  }, t ? t.footer.leistungen : 'Leistungen'), (t ? t.footer.services : ['Sofa-Reinigung', 'Matratzen-Reinigung', 'Stühle & Sessel', 'Autositze', 'Teppiche']).map(s => /*#__PURE__*/React.createElement("a", {
    key: s,
    href: "#preise",
    style: {
      fontSize: 'var(--text-sm)',
      color: 'var(--color-text-inverse)',
      textDecoration: 'none'
    }
  }, s))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-3)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 'var(--text-xs)',
      letterSpacing: 'var(--tracking-wide)',
      textTransform: 'uppercase',
      color: 'var(--color-text-inverse-muted)',
      fontWeight: 600
    }
  }, t ? t.footer.kontakt : 'Kontakt'), /*#__PURE__*/React.createElement("a", {
    href: "tel:+491605712229",
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 8,
      fontSize: 'var(--text-sm)',
      color: 'var(--color-text-inverse)',
      textDecoration: 'none'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: base + "assets/icons/phone.svg",
    alt: "",
    style: {
      width: 14,
      height: 14,
      filter: 'brightness(0) invert(1)'
    }
  }), "0160 571 22 29"), /*#__PURE__*/React.createElement("a", {
    href: "https://wa.me/491605712229",
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 8,
      fontSize: 'var(--text-sm)',
      color: 'var(--color-text-inverse)',
      textDecoration: 'none'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: base + "assets/icons/whatsapp.svg",
    alt: "",
    style: {
      width: 14,
      height: 14,
      filter: 'brightness(0) invert(1)'
    }
  }), "WhatsApp"), /*#__PURE__*/React.createElement("a", {
    href: "mailto:Novopolster@gmail.com",
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 8,
      fontSize: 'var(--text-sm)',
      color: 'var(--color-text-inverse)',
      textDecoration: 'none'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: base + "assets/icons/mail.svg",
    alt: "",
    style: {
      width: 14,
      height: 14,
      filter: 'brightness(0) invert(1)'
    }
  }), "Novopolster@gmail.com"), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 'var(--space-2)'
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.LanguageSwitcher, {
    value: lang,
    onChange: onLangChange,
    tone: "dark"
  })))), /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--content-max-width)',
      margin: '0 auto',
      borderTop: '1px solid var(--color-border-on-ink)',
      marginTop: 'var(--space-10)',
      paddingTop: 'var(--space-6)',
      fontSize: 'var(--text-xs)',
      color: 'var(--color-text-inverse-muted)',
      display: 'flex',
      justifyContent: 'space-between',
      flexWrap: 'wrap',
      gap: 'var(--space-2)'
    }
  }, /*#__PURE__*/React.createElement("span", null, "\xA9 ", new Date().getFullYear(), " NovoPolster"), /*#__PURE__*/React.createElement("span", {
    title: "Gesetzlich vorgeschrieben auf Deutsch (TMG), unabh\xE4ngig von der gew\xE4hlten Sprache"
  }, "Impressum \xB7 Datenschutz (DE)")));
}
Object.assign(__ds_scope, { Footer });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/Footer.jsx", error: String((e && e.message) || e) }); }

// components/navigation/Header.jsx
try { (() => {
/**
 * Sticky site header — logo, primary nav, language switcher and a
 * primary CTA. Frosted/blurred once the page is scrolled.
 */
function Header({
  logo,
  links = [],
  lang = 'DE',
  onLangChange,
  onCta,
  ctaLabel = 'Termin anfragen'
}) {
  const logoSrc = logo || (window.NP_ASSETS_BASE || '') + 'assets/logo/novopolster-logo-transparent.png';
  const [scrolled, setScrolled] = React.useState(false);
  React.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);
  return /*#__PURE__*/React.createElement("header", {
    style: {
      position: 'sticky',
      top: 0,
      zIndex: 50,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: '14px var(--page-gutter)',
      background: scrolled ? 'rgba(253,252,250,0.86)' : 'var(--color-bg)',
      backdropFilter: scrolled ? 'blur(var(--blur-sm))' : 'none',
      borderBottom: scrolled ? '1px solid var(--color-border)' : '1px solid transparent',
      transition: `background var(--duration-base) var(--ease-standard), border-color var(--duration-base) var(--ease-standard)`,
      fontFamily: 'var(--font-body)'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: logoSrc,
    alt: "NovoPolster",
    style: {
      height: 32,
      width: 'auto'
    }
  }), /*#__PURE__*/React.createElement("nav", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 'var(--space-8)'
    }
  }, links.map(l => /*#__PURE__*/React.createElement("a", {
    key: l.label,
    href: l.href,
    style: {
      fontSize: 'var(--text-sm)',
      fontWeight: 600,
      color: 'var(--color-text-primary)',
      textDecoration: 'none'
    }
  }, l.label))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 'var(--space-4)'
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.LanguageSwitcher, {
    value: lang,
    onChange: onLangChange,
    tone: "light"
  }), /*#__PURE__*/React.createElement(__ds_scope.Button, {
    variant: "primary",
    size: "sm",
    onClick: onCta
  }, ctaLabel)));
}
Object.assign(__ds_scope, { Header });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/Header.jsx", error: String((e && e.message) || e) }); }

// ui_kits/marketing-website/App.jsx
try { (() => {
window.NP_ASSETS_BASE = '../../';
const TWEAK_DEFAULTS = /*EDITMODE-BEGIN*/{
  "mood": "calm",
  "rhythm": "balanced",
  "softShapes": false
} /*EDITMODE-END*/;

// Each tweak reshapes many things at once by overriding shared CSS custom
// properties that every section already reads via var(--token) — not single
// pixel-pushing on one element.
const MOOD_VARS = {
  // Calm: the client's own rule — neutral canvas, menthol reserved for CTAs only.
  calm: {},
  // Bold: menthol pushes further into chrome (tinted section bands, stronger
  // badge/border saturation) while staying off solid black+menthol fills.
  bold: {
    '--color-bg-sunken': 'var(--teal-50)',
    '--color-brand-subtle': 'var(--teal-100)',
    '--color-brand-border': 'var(--teal-300)'
  },
  // Editorial: warm cream canvas (closer to the Sparkles reference' lifestyle-
  // photo warmth) instead of the default cool-neutral off-white.
  editorial: {
    '--color-bg': '#F7EFE2',
    '--color-bg-sunken': '#EFE3CD',
    '--color-border': '#E3D5B8'
  }
};
const RHYTHM_VARS = {
  compact: {
    '--space-20': '48px',
    '--space-16': '36px',
    '--space-10': '28px'
  },
  balanced: {},
  spacious: {
    '--space-20': '132px',
    '--space-16': '100px',
    '--space-10': '56px'
  }
};
const SHAPE_VARS = {
  '--radius-lg': '30px',
  '--radius-md': '18px',
  '--shadow-xs': '0 2px 10px rgba(19,20,19,0.05)',
  '--shadow-sm': '0 6px 20px rgba(19,20,19,0.08)',
  '--shadow-md': '0 16px 44px rgba(19,20,19,0.12)'
};
function App() {
  const {
    Header,
    Footer
  } = window.NovoPolsterDesignSystem_1b2f21;
  const [lang, setLang] = React.useState('UA');
  const [tw, setTweak] = window.useTweaks(TWEAK_DEFAULTS);
  const t = window.NP_I18N[lang];
  const navLinks = [{
    label: t.nav.leistungen,
    href: '#leistungen'
  }, {
    label: t.nav.wie,
    href: '#ablauf'
  }, {
    label: t.nav.vertrauen,
    href: '#vertrauen'
  }, {
    label: t.nav.faq,
    href: '#faq'
  }, {
    label: t.nav.zone,
    href: '#zone'
  }];
  const rootVars = {
    ...MOOD_VARS[tw.mood],
    ...RHYTHM_VARS[tw.rhythm],
    ...(tw.softShapes ? SHAPE_VARS : {})
  };
  return /*#__PURE__*/React.createElement("div", {
    style: {
      ...rootVars,
      background: 'var(--color-bg)'
    }
  }, /*#__PURE__*/React.createElement(Header, {
    logo: "../../assets/logo/novopolster-logo-transparent.png",
    links: navLinks,
    lang: lang,
    onLangChange: setLang,
    onCta: () => document.getElementById('kontakt').scrollIntoView({
      behavior: 'smooth'
    }),
    ctaLabel: t.nav.cta
  }), /*#__PURE__*/React.createElement(window.Hero, {
    t: t
  }), /*#__PURE__*/React.createElement(window.BenefitsSection, {
    t: t
  }), /*#__PURE__*/React.createElement(window.ServicesPricingSection, {
    t: t
  }), /*#__PURE__*/React.createElement(window.ProcessSection, {
    t: t
  }), /*#__PURE__*/React.createElement(window.TrustSection, {
    t: t
  }), /*#__PURE__*/React.createElement(window.FAQSection, {
    t: t
  }), /*#__PURE__*/React.createElement(window.ServiceAreaSection, {
    t: t
  }), /*#__PURE__*/React.createElement(window.ContactSection, {
    t: t
  }), /*#__PURE__*/React.createElement(Footer, {
    logo: "../../assets/logo/novopolster-logo-white.png",
    lang: lang,
    onLangChange: setLang,
    t: t
  }), /*#__PURE__*/React.createElement(window.WhatsAppFloat, null), /*#__PURE__*/React.createElement(window.TweaksPanel, null, /*#__PURE__*/React.createElement(window.TweakSection, {
    label: "Feel"
  }), /*#__PURE__*/React.createElement(window.TweakRadio, {
    label: "Mood",
    value: tw.mood,
    options: [{
      value: 'calm',
      label: 'Calm'
    }, {
      value: 'bold',
      label: 'Bold'
    }, {
      value: 'editorial',
      label: 'Editorial'
    }],
    onChange: v => setTweak('mood', v)
  }), /*#__PURE__*/React.createElement(window.TweakRadio, {
    label: "Rhythm",
    value: tw.rhythm,
    options: [{
      value: 'compact',
      label: 'Compact'
    }, {
      value: 'balanced',
      label: 'Balanced'
    }, {
      value: 'spacious',
      label: 'Spacious'
    }],
    onChange: v => setTweak('rhythm', v)
  }), /*#__PURE__*/React.createElement(window.TweakToggle, {
    label: "Soft, rounded shapes",
    value: tw.softShapes,
    onChange: v => setTweak('softShapes', v)
  })));
}
ReactDOM.createRoot(document.getElementById('root')).render(/*#__PURE__*/React.createElement(App, null));
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/marketing-website/App.jsx", error: String((e && e.message) || e) }); }

// ui_kits/marketing-website/i18n.js
try { (() => {
/* NovoPolster marketing site — translations for DE (default) / EN / UA / IT.
   Sourced from uploads/brief.md, ia.md, research.md, design-brief.md.
   Pricing numbers are identical across languages (EUR) — only labels/copy
   translate. Slogan is transcreated per language, not translated literally
   (design-brief.md rule). No fabricated testimonials/years/response-time
   numbers anywhere — see readme.md "Deliberately unfilled". */
window.NP_I18N = {
  DE: {
    nav: {
      leistungen: 'Leistungen & Preise',
      wie: 'Ablauf',
      vertrauen: 'Vertrauen',
      faq: 'FAQ',
      zone: 'Einsatzgebiet',
      kontakt: 'Kontakt',
      cta: 'Anfragen'
    },
    hero: {
      zoneLabel: 'München + 30 km',
      langLabel: 'DE · EN · UA · IT',
      slogan: 'Keine Zeit? Ruf uns an.',
      subhead: 'Chemische Reinigung von Polstermöbeln, Matratzen und Autositzen — bei Ihnen vor Ort.',
      ctaPrimary: 'Per WhatsApp anfragen',
      ctaSecondary: 'Anrufen',
      photoPlaceholder: 'Hero-Foto/Video — noch nicht bereitgestellt'
    },
    benefits: {
      eyebrow: 'Warum NovoPolster',
      title: 'Vier Gründe, uns zu schreiben.',
      cards: [{
        icon: 'sparkles',
        title: 'Transparente Preise',
        desc: 'Von-bis-Preise für jede Kategorie, direkt auf dieser Seite — keine versteckte Anfrageform.'
      }, {
        icon: 'languages',
        title: 'DE · EN · UA · IT',
        desc: 'Beratung in vier Sprachen — das bietet in München sonst niemand.'
      }, {
        icon: 'badge-check',
        title: 'HWK-Mitglied',
        desc: 'Handwerkskammer-Mitgliedschaft als Qualitätsnachweis.'
      }, {
        icon: 'clock',
        title: 'Erfahrung',
        desc: 'Wird in Kürze mit konkreten Zahlen ergänzt.',
        tbd: true
      }]
    },
    services: {
      eyebrow: 'Unsere Leistungen',
      title: 'Fünf Kategorien, ein Team.',
      cards: [{
        icon: 'sofa',
        title: 'Sofa',
        desc: 'Stoff & Leder, alle Größen.',
        price: '120 €'
      }, {
        icon: 'bed',
        title: 'Matratze',
        desc: 'Von Kindermatratze bis 180×200.',
        price: '45 €'
      }, {
        icon: 'car',
        title: 'Auto',
        desc: 'Sitze bis komplette Aufbereitung.',
        price: '105 €'
      }]
    },
    pricing: {
      eyebrow: 'Transparente Preise',
      title: 'Der Preis steht vorher fest.',
      subhead: 'Alle Preise als Von–bis-Bereich — kein „Preis auf Anfrage".',
      categories: [{
        label: 'Sofa',
        rows: [{
          label: '2-Sitzer',
          from: '120 €',
          to: '170 €'
        }, {
          label: '3-Sitzer',
          from: '180 €',
          to: '230 €'
        }, {
          label: 'Ecksofa',
          from: '220 €',
          to: '340 €'
        }, {
          label: 'Große Couch',
          from: '340 €',
          to: '480 €'
        }]
      }, {
        label: 'Matratze',
        rows: [{
          label: '90×200',
          from: '75 €',
          to: '120 €'
        }, {
          label: '140×200',
          from: '90 €',
          to: '160 €'
        }, {
          label: 'ab 180×200',
          from: '90 €',
          to: '160 €'
        }, {
          label: 'Kindermatratze',
          from: '45 €',
          to: '55 €'
        }]
      }, {
        label: 'Stühle & Sessel',
        rows: [{
          label: 'Stuhl',
          from: '18 €',
          to: '30 €'
        }, {
          label: 'Sitzpuff',
          from: '35 €',
          to: '45 €'
        }, {
          label: 'Sessel',
          from: '50 €',
          to: '70 €'
        }]
      }, {
        label: 'Teppiche',
        rows: [{
          label: 'ab 50 (pro m²)',
          from: 'ab 10 €'
        }]
      }, {
        label: 'Auto',
        rows: [{
          label: '5 Sitze',
          from: '105 €'
        }, {
          label: 'Ganzer Innenraum',
          from: '200 €'
        }, {
          label: 'Autoaufbereitung',
          from: '500 €',
          to: '800 € (VB)'
        }],
        callout: 'Premium-Fahrzeuge, Yachten und Flugzeuge außerhalb des 30-km-Radius auf Anfrage.'
      }],
      addonsTitle: 'Zusatzleistungen',
      addons: [{
        label: 'Desinfektion',
        price: '10 €'
      }, {
        label: 'Antiallergische Mittel',
        price: '10 €'
      }, {
        label: 'Zusätzliche Trocknung',
        price: '30 €'
      }, {
        label: 'Ozonisierung',
        price: '35 €'
      }]
    },
    process: {
      eyebrow: 'So einfach geht\u0027s',
      title: 'In drei Schritten zum sauberen Polster.',
      steps: [{
        title: 'Foto & Beschreibung',
        desc: 'Per WhatsApp oder Anruf — Möbeltyp und ggf. Maße.'
      }, {
        title: 'Preis & Termin',
        desc: 'Sie erhalten eine erste Preiseinschätzung als Von–bis-Bereich und einen passenden Terminvorschlag — schnell, unverbindlich und ohne versteckte Kosten.'
      }, {
        title: 'Reinigung vor Ort',
        desc: 'Wir reinigen direkt bei Ihnen zu Hause — im Umkreis von 30 km um München, ohne dass Sie Ihre Möbel transportieren müssen.'
      }]
    },
    trust: {
      eyebrow: 'Vertrauen & Nachweise',
      title: 'Sorgfalt bei jedem Material.',
      materials: 'Wir arbeiten mit Leder, Alcantara und empfindlichen Stoffen — mit auf das jeweilige Material abgestimmten Verfahren.',
      hwk: 'Mitglied der Handwerkskammer (HWK)',
      placeholder: 'Fotos von abgeschlossenen Arbeiten und Kundenbewertungen folgen, sobald verfügbar.'
    },
    faq: {
      eyebrow: 'Häufige Fragen',
      title: 'Noch Fragen?',
      items: [{
        q: 'Ist die Reinigungschemie sicher für Kinder und Haustiere?',
        a: 'Ja, wir verwenden Mittel, die für Haushalte mit Kindern und Tieren geeignet sind. Auf Wunsch zusätzlich mit antiallergischer Behandlung.'
      }, {
        q: 'Wie schnell bekomme ich eine Antwort?',
        a: 'Wir melden uns nach Ihrer Nachricht per WhatsApp mit einer ersten Einschätzung und einem Terminvorschlag.'
      }, {
        q: 'Muss ich während der Reinigung zu Hause sein?',
        a: 'Nein, nach Absprache ist ein Termin auch ohne Ihre Anwesenheit möglich.'
      }, {
        q: 'Wie bezahle ich?',
        a: 'Bar, per Überweisung oder auf Rechnung — Details klären wir bei der Terminbestätigung.'
      }, {
        q: 'Fahren Sie auch außerhalb des 30-km-Radius?',
        a: 'Im Umkreis von 30 km um München ohne Aufpreis. Für Ausnahmefälle (z. B. Yachten, Flugzeuge) sprechen Sie uns gerne an.'
      }, {
        q: 'Kann ich mehrere Möbelstücke gleichzeitig reinigen lassen?',
        a: 'Ja — zum Beispiel Sofa und Matratze in einem Termin. Teilen Sie uns einfach alle Positionen mit.'
      }]
    },
    serviceArea: {
      eyebrow: 'Einsatzgebiet',
      title: 'München + 30 km Umkreis.',
      text: 'Wir kommen zu Ihnen — in München und im Umkreis von 30 km, z. B. Schwabing, Bogenhausen, Maxvorstadt, Sendling, Neuhausen sowie Umlandgemeinden wie Grünwald, Starnberg, Unterföhring oder Ottobrunn.',
      note: 'Für Yachten oder Flugzeuge außerhalb des Standardradius: Einsatz nach Absprache.'
    },
    contact: {
      eyebrow: 'Kontakt',
      title: 'Jetzt anfragen.',
      subhead: 'Am schnellsten per WhatsApp — mit Foto und kurzer Beschreibung.',
      name: 'Name',
      phone: 'Telefonnummer',
      description: 'Beschreibung',
      photo: 'Foto',
      photoPlaceholder: 'Foto hochladen (optional)',
      servicePlaceholder: 'Bitte wählen',
      submit: 'Anfrage senden',
      success: 'Danke für Ihre Anfrage! Wir melden uns zeitnah.',
      or: 'oder direkt',
      whatsapp: 'Per WhatsApp schreiben',
      phoneCall: 'Anrufen',
      descriptionPlaceholder: 'z. B. Fleck, Zustand, Maße …'
    },
    footer: {
      tagline: 'Chemische Reinigung von Polstermöbeln, Matratzen und Autositzen — München + 30 km.',
      leistungen: 'Leistungen',
      kontakt: 'Kontakt',
      services: ['Sofa', 'Matratze', 'Stühle & Sessel', 'Teppiche', 'Auto'],
      legal: 'Impressum · Datenschutz',
      legalNote: 'Gesetzlich auf Deutsch, unabhängig von der gewählten Sprache.'
    }
  },
  EN: {
    nav: {
      leistungen: 'Services & Pricing',
      wie: 'How it works',
      vertrauen: 'Trust',
      faq: 'FAQ',
      zone: 'Service area',
      kontakt: 'Contact',
      cta: 'Get in touch'
    },
    hero: {
      zoneLabel: 'Munich + 30 km',
      langLabel: 'DE · EN · UA · IT',
      slogan: 'Short on time? We\u0027ll take it from here.',
      subhead: 'Professional cleaning for upholstery, mattresses and car interiors — at your home.',
      ctaPrimary: 'Message us on WhatsApp',
      ctaSecondary: 'Call us',
      photoPlaceholder: 'Hero photo/video — not yet provided'
    },
    benefits: {
      eyebrow: 'Why NovoPolster',
      title: 'Four reasons to reach out.',
      cards: [{
        icon: 'sparkles',
        title: 'Transparent pricing',
        desc: 'Real from–to prices for every category, right on this page — no hidden request form.'
      }, {
        icon: 'languages',
        title: 'DE · EN · UA · IT',
        desc: 'Support in four languages — a real gap in the Munich market.'
      }, {
        icon: 'badge-check',
        title: 'HWK member',
        desc: 'Registered with the Chamber of Crafts (HWK) as a quality signal.'
      }, {
        icon: 'clock',
        title: 'Experience',
        desc: 'Exact figures coming soon.',
        tbd: true
      }]
    },
    services: {
      eyebrow: 'Our services',
      title: 'Five categories, one team.',
      cards: [{
        icon: 'sofa',
        title: 'Sofas',
        desc: 'Fabric & leather, all sizes.',
        price: '€120'
      }, {
        icon: 'bed',
        title: 'Mattresses',
        desc: "From children's to 180×200.",
        price: '€45'
      }, {
        icon: 'car',
        title: 'Cars',
        desc: 'Seats to full detailing.',
        price: '€105'
      }]
    },
    pricing: {
      eyebrow: 'Transparent pricing',
      title: 'The price is set upfront.',
      subhead: 'Every price is a real from–to range — never "price on request".',
      categories: [{
        label: 'Sofa',
        rows: [{
          label: '2-seater',
          from: '€120',
          to: '€170'
        }, {
          label: '3-seater',
          from: '€180',
          to: '€230'
        }, {
          label: 'Corner sofa',
          from: '€220',
          to: '€340'
        }, {
          label: 'Large couch',
          from: '€340',
          to: '€480'
        }]
      }, {
        label: 'Mattress',
        rows: [{
          label: '90×200',
          from: '€75',
          to: '€120'
        }, {
          label: '140×200',
          from: '€90',
          to: '€160'
        }, {
          label: '180×200+',
          from: '€90',
          to: '€160'
        }, {
          label: "Child's mattress",
          from: '€45',
          to: '€55'
        }]
      }, {
        label: 'Chairs & armchairs',
        rows: [{
          label: 'Chair',
          from: '€18',
          to: '€30'
        }, {
          label: 'Pouf',
          from: '€35',
          to: '€45'
        }, {
          label: 'Armchair',
          from: '€50',
          to: '€70'
        }]
      }, {
        label: 'Carpets',
        rows: [{
          label: 'From 50 (per m²)',
          from: 'from €10'
        }]
      }, {
        label: 'Cars',
        rows: [{
          label: '5 seats',
          from: '€105'
        }, {
          label: 'Full interior',
          from: '€200'
        }, {
          label: 'Full detailing',
          from: '€500',
          to: '€800 (neg.)'
        }],
        callout: 'Premium vehicles, yachts and planes outside the 30 km radius — on request.'
      }],
      addonsTitle: 'Add-on services',
      addons: [{
        label: 'Disinfection',
        price: '€10'
      }, {
        label: 'Anti-allergen treatment',
        price: '€10'
      }, {
        label: 'Extra drying',
        price: '€30'
      }, {
        label: 'Ozonization',
        price: '€35'
      }]
    },
    process: {
      eyebrow: 'How it works',
      title: 'Three steps to fresh upholstery.',
      steps: [{
        title: 'Photo & description',
        desc: 'Via WhatsApp or a call — item type and dimensions if known.'
      }, {
        title: 'Price & appointment',
        desc: 'You get an initial price estimate as a from–to range plus a matching appointment proposal — fast, non-binding and with no hidden costs.'
      }, {
        title: 'On-site cleaning',
        desc: 'We clean right at your home — within a 30 km radius of Munich, with no need to move or transport your furniture anywhere.'
      }]
    },
    trust: {
      eyebrow: 'Trust & proof',
      title: 'Care for every material.',
      materials: 'We work with leather, Alcantara and delicate fabrics, using methods matched to each material.',
      hwk: 'Member of the Chamber of Crafts (HWK)',
      placeholder: 'Photos of completed work and customer reviews will be added once available.'
    },
    faq: {
      eyebrow: 'FAQ',
      title: 'Still have questions?',
      items: [{
        q: 'Is the cleaning chemistry safe for children and pets?',
        a: 'Yes — we use products suitable for households with children and pets, with an optional anti-allergen treatment.'
      }, {
        q: 'How quickly will I hear back?',
        a: "We'll reply on WhatsApp with an initial estimate and a proposed appointment."
      }, {
        q: 'Do I need to be home during the cleaning?',
        a: 'No — by arrangement, an appointment without you present is possible.'
      }, {
        q: 'How do I pay?',
        a: "Cash, bank transfer or invoice — we'll confirm details when booking."
      }, {
        q: 'Do you serve areas outside the 30 km radius?',
        a: 'Within 30 km of Munich at no extra cost. For exceptions (e.g. yachts, planes), just ask.'
      }, {
        q: 'Can I book several items at once?',
        a: 'Yes — e.g. a sofa and a mattress in one visit. Just tell us everything you need.'
      }]
    },
    serviceArea: {
      eyebrow: 'Service area',
      title: 'Munich + 30 km radius.',
      text: 'We come to you — in Munich and within a 30 km radius, e.g. Schwabing, Bogenhausen, Maxvorstadt, Sendling, Neuhausen, and surrounding towns like Grünwald, Starnberg, Unterföhring or Ottobrunn.',
      note: 'For yachts or planes beyond the standard radius: service by arrangement.'
    },
    contact: {
      eyebrow: 'Contact',
      title: 'Get in touch now.',
      subhead: 'Fastest via WhatsApp — with a photo and a short description.',
      name: 'Name',
      phone: 'Phone number',
      description: 'Description',
      photo: 'Photo',
      photoPlaceholder: 'Upload a photo (optional)',
      servicePlaceholder: 'Please choose',
      submit: 'Send request',
      success: "Thanks for reaching out! We'll get back to you shortly.",
      or: 'or reach us',
      whatsapp: 'Message on WhatsApp',
      phoneCall: 'Call',
      descriptionPlaceholder: 'e.g. stain, condition, dimensions …'
    },
    footer: {
      tagline: 'Professional cleaning for upholstery, mattresses and car interiors — Munich + 30 km.',
      leistungen: 'Services',
      kontakt: 'Contact',
      services: ['Sofas', 'Mattresses', 'Chairs & armchairs', 'Carpets', 'Cars'],
      legal: 'Imprint · Privacy',
      legalNote: 'Legally required in German, regardless of selected language.'
    }
  },
  UA: {
    nav: {
      leistungen: 'Послуги і ціни',
      wie: 'Як це працює',
      vertrauen: 'Довіра',
      faq: 'Питання',
      zone: 'Зона обслуговування',
      kontakt: 'Контакт',
      cta: "Зв'язатись"
    },
    hero: {
      zoneLabel: 'Мюнхен + 30 км',
      langLabel: 'DE · EN · UA · IT',
      slogan: 'Немає часу перейматися? Ми подбаємо.',
      subhead: 'Хімчистка м\u0027яких меблів, матраців та автомобільних салонів — у вас вдома.',
      ctaPrimary: 'Написати у WhatsApp',
      ctaSecondary: 'Зателефонувати',
      photoPlaceholder: 'Фото/відео для hero — ще не надано'
    },
    benefits: {
      eyebrow: 'Чому NovoPolster',
      title: 'Чотири причини написати нам.',
      cards: [{
        icon: 'sparkles',
        title: 'Прозорі ціни',
        desc: 'Реальні ціни «від-до» для кожної категорії прямо на сайті — без прихованої форми.'
      }, {
        icon: 'languages',
        title: 'DE · EN · UA · IT',
        desc: 'Консультації чотирма мовами — цього немає в жодного конкурента в Мюнхені.'
      }, {
        icon: 'badge-check',
        title: 'Член HWK',
        desc: 'Реєстрація в Торгово-ремісничій палаті (HWK) як показник якості.'
      }, {
        icon: 'clock',
        title: 'Досвід',
        desc: 'Точні цифри будуть додані найближчим часом.',
        tbd: true
      }]
    },
    services: {
      eyebrow: 'Наші послуги',
      title: "П'ять категорій, одна команда.",
      cards: [{
        icon: 'sofa',
        title: 'Дивани',
        desc: 'Тканина та шкіра, усі розміри.',
        price: '120 €'
      }, {
        icon: 'bed',
        title: 'Матраци',
        desc: 'Від дитячого до 180×200.',
        price: '45 €'
      }, {
        icon: 'car',
        title: 'Авто',
        desc: 'Від сидінь до повної хімчистки.',
        price: '105 €'
      }]
    },
    pricing: {
      eyebrow: 'Прозорі ціни',
      title: 'Ціна відома одразу.',
      subhead: 'Кожна ціна — реальний діапазон «від-до», без «ціни за запитом».',
      categories: [{
        label: 'Диван',
        rows: [{
          label: '2-місний',
          from: '120 €',
          to: '170 €'
        }, {
          label: '3-місний',
          from: '180 €',
          to: '230 €'
        }, {
          label: 'Кутовий',
          from: '220 €',
          to: '340 €'
        }, {
          label: 'Великий диван',
          from: '340 €',
          to: '480 €'
        }]
      }, {
        label: 'Матрац',
        rows: [{
          label: '90×200',
          from: '75 €',
          to: '120 €'
        }, {
          label: '140×200',
          from: '90 €',
          to: '160 €'
        }, {
          label: 'від 180×200',
          from: '90 €',
          to: '160 €'
        }, {
          label: 'Дитячий матрац',
          from: '45 €',
          to: '55 €'
        }]
      }, {
        label: 'Стільці та крісла',
        rows: [{
          label: 'Стілець',
          from: '18 €',
          to: '30 €'
        }, {
          label: 'Пуф',
          from: '35 €',
          to: '45 €'
        }, {
          label: 'Крісло',
          from: '50 €',
          to: '70 €'
        }]
      }, {
        label: 'Килими',
        rows: [{
          label: 'від 50 (за м²)',
          from: 'від 10 €'
        }]
      }, {
        label: 'Авто',
        rows: [{
          label: '5 сидінь',
          from: '105 €'
        }, {
          label: 'Весь салон',
          from: '200 €'
        }, {
          label: 'Повна хімчистка',
          from: '500 €',
          to: '800 € (за домовленістю)'
        }],
        callout: 'Преміум-авто, яхти та літаки за межами радіусу 30 км — за запитом.'
      }],
      addonsTitle: 'Додаткові послуги',
      addons: [{
        label: 'Дезінфекція',
        price: '10 €'
      }, {
        label: 'Антиалергійна обробка',
        price: '10 €'
      }, {
        label: 'Додаткове сушіння',
        price: '30 €'
      }, {
        label: 'Озонування',
        price: '35 €'
      }]
    },
    process: {
      eyebrow: 'Як це працює',
      title: 'Три кроки до чистих меблів.',
      steps: [{
        title: 'Фото та опис',
        desc: 'У WhatsApp або дзвінком — тип меблів і розміри, якщо відомі.'
      }, {
        title: 'Ціна та дата',
        desc: 'Ви отримуєте орієнтовну ціну діапазоном «від–до» та зручну пропозицію дати — швидко, без зобов’язань і без прихованих витрат.'
      }, {
        title: 'Чистка на місці',
        desc: 'Ми чистимо просто у вас удома — у радіусі 30 км від Мюнхена, без потреби кудись перевозити чи виносити меблі.'
      }]
    },
    trust: {
      eyebrow: 'Довіра та підтвердження',
      title: 'Уважність до кожного матеріалу.',
      materials: 'Ми працюємо зі шкірою, алькантарою та делікатними тканинами, підбираючи метод під конкретний матеріал.',
      hwk: 'Член Торгово-ремісничої палати (HWK)',
      placeholder: 'Фото виконаних робіт та відгуки клієнтів з\u0027являться, щойно будуть доступні.'
    },
    faq: {
      eyebrow: 'Питання',
      title: 'Залишились питання?',
      items: [{
        q: 'Чи безпечна хімія для дітей і тварин?',
        a: 'Так, ми використовуємо засоби, безпечні для родин з дітьми та тваринами, за бажанням — з антиалергійною обробкою.'
      }, {
        q: 'Як швидко ви відповідаєте?',
        a: 'Ми відповідаємо у WhatsApp з орієнтовною оцінкою і пропозицією дати.'
      }, {
        q: 'Чи потрібно бути вдома під час чистки?',
        a: 'Ні, за домовленістю можливий візит і без вашої присутності.'
      }, {
        q: 'Як оплатити?',
        a: 'Готівкою, переказом або за рахунком — деталі узгодимо під час підтвердження візиту.'
      }, {
        q: 'Ви виїжджаєте за межі 30 км?',
        a: 'У радіусі 30 км від Мюнхена без додаткової оплати. Для винятків (яхти, літаки) — звертайтесь окремо.'
      }, {
        q: 'Можна замовити кілька позицій одразу?',
        a: 'Так — наприклад, диван і матрац за один візит. Просто повідомте всі позиції.'
      }]
    },
    serviceArea: {
      eyebrow: 'Зона обслуговування',
      title: 'Мюнхен + радіус 30 км.',
      text: 'Ми приїжджаємо до вас — у Мюнхені та в радіусі 30 км, наприклад Schwabing, Bogenhausen, Maxvorstadt, Sendling, Neuhausen, а також навколишні містечка Grünwald, Starnberg, Unterföhring чи Ottobrunn.',
      note: 'Для яхт чи літаків за межами стандартного радіусу — виїзд за домовленістю.'
    },
    contact: {
      eyebrow: 'Контакт',
      title: 'Залишити заявку.',
      subhead: 'Найшвидше — у WhatsApp, з фото і коротким описом.',
      name: "Ім'я",
      phone: 'Номер телефону',
      description: 'Опис',
      photo: 'Фото',
      photoPlaceholder: 'Завантажити фото (необов\u0027язково)',
      servicePlaceholder: 'Оберіть послугу',
      submit: 'Надіслати заявку',
      success: "Дякуємо за заявку! Ми зв'яжемось найближчим часом.",
      or: 'або напишіть',
      whatsapp: 'Написати у WhatsApp',
      phoneCall: 'Дзвінок',
      descriptionPlaceholder: 'наприклад, плями, стан, розміри …'
    },
    footer: {
      tagline: "Хімчистка м'яких меблів, матраців та автосалонів — Мюнхен + 30 км.",
      leistungen: 'Послуги',
      kontakt: 'Контакт',
      services: ['Дивани', 'Матраци', 'Стільці та крісла', 'Килими', 'Авто'],
      legal: 'Реквізити · Конфіденційність',
      legalNote: 'За законом надаються німецькою, незалежно від обраної мови.'
    }
  },
  IT: {
    nav: {
      leistungen: 'Servizi e prezzi',
      wie: 'Come funziona',
      vertrauen: 'Fiducia',
      faq: 'FAQ',
      zone: 'Area di servizio',
      kontakt: 'Contatti',
      cta: 'Contattaci'
    },
    hero: {
      zoneLabel: 'Monaco + 30 km',
      langLabel: 'DE · EN · UA · IT',
      slogan: 'Poco tempo? Ci pensiamo noi.',
      subhead: 'Pulizia professionale di divani, materassi e interni auto — a casa vostra.',
      ctaPrimary: 'Scrivici su WhatsApp',
      ctaSecondary: 'Chiamaci',
      photoPlaceholder: 'Foto/video hero — non ancora fornito'
    },
    benefits: {
      eyebrow: 'Perché NovoPolster',
      title: 'Quattro motivi per scriverci.',
      cards: [{
        icon: 'sparkles',
        title: 'Prezzi trasparenti',
        desc: 'Prezzi reali da-a per ogni categoria, direttamente su questa pagina — nessun modulo nascosto.'
      }, {
        icon: 'languages',
        title: 'DE · EN · UA · IT',
        desc: 'Assistenza in quattro lingue — una vera lacuna nel mercato di Monaco.'
      }, {
        icon: 'badge-check',
        title: 'Membro HWK',
        desc: 'Iscritti alla Camera dell\u0027Artigianato (HWK) come garanzia di qualità.'
      }, {
        icon: 'clock',
        title: 'Esperienza',
        desc: 'I numeri esatti saranno pubblicati a breve.',
        tbd: true
      }]
    },
    services: {
      eyebrow: 'I nostri servizi',
      title: 'Cinque categorie, un solo team.',
      cards: [{
        icon: 'sofa',
        title: 'Divani',
        desc: 'Tessuto e pelle, tutte le dimensioni.',
        price: '120 €'
      }, {
        icon: 'bed',
        title: 'Materassi',
        desc: 'Da quello per bambini al 180×200.',
        price: '45 €'
      }, {
        icon: 'car',
        title: 'Auto',
        desc: 'Dai sedili al detailing completo.',
        price: '105 €'
      }]
    },
    pricing: {
      eyebrow: 'Prezzi trasparenti',
      title: 'Il prezzo è chiaro da subito.',
      subhead: 'Ogni prezzo è una fascia da-a reale — mai "prezzo su richiesta".',
      categories: [{
        label: 'Divano',
        rows: [{
          label: '2 posti',
          from: '120 €',
          to: '170 €'
        }, {
          label: '3 posti',
          from: '180 €',
          to: '230 €'
        }, {
          label: 'Angolare',
          from: '220 €',
          to: '340 €'
        }, {
          label: 'Divano grande',
          from: '340 €',
          to: '480 €'
        }]
      }, {
        label: 'Materasso',
        rows: [{
          label: '90×200',
          from: '75 €',
          to: '120 €'
        }, {
          label: '140×200',
          from: '90 €',
          to: '160 €'
        }, {
          label: 'da 180×200',
          from: '90 €',
          to: '160 €'
        }, {
          label: 'Materasso per bambini',
          from: '45 €',
          to: '55 €'
        }]
      }, {
        label: 'Sedie e poltrone',
        rows: [{
          label: 'Sedia',
          from: '18 €',
          to: '30 €'
        }, {
          label: 'Pouf',
          from: '35 €',
          to: '45 €'
        }, {
          label: 'Poltrona',
          from: '50 €',
          to: '70 €'
        }]
      }, {
        label: 'Tappeti',
        rows: [{
          label: 'da 50 (al m²)',
          from: 'da 10 €'
        }]
      }, {
        label: 'Auto',
        rows: [{
          label: '5 posti',
          from: '105 €'
        }, {
          label: 'Interno completo',
          from: '200 €'
        }, {
          label: 'Detailing completo',
          from: '500 €',
          to: '800 € (trattabile)'
        }],
        callout: 'Veicoli premium, yacht e aerei fuori dal raggio di 30 km — su richiesta.'
      }],
      addonsTitle: 'Servizi aggiuntivi',
      addons: [{
        label: 'Disinfezione',
        price: '10 €'
      }, {
        label: 'Trattamento antiallergico',
        price: '10 €'
      }, {
        label: 'Asciugatura extra',
        price: '30 €'
      }, {
        label: 'Ozonizzazione',
        price: '35 €'
      }]
    },
    process: {
      eyebrow: 'Come funziona',
      title: 'Tre passi per imbottiti come nuovi.',
      steps: [{
        title: 'Foto e descrizione',
        desc: 'Via WhatsApp o telefono — tipo di mobile e misure se disponibili.'
      }, {
        title: 'Prezzo e appuntamento',
        desc: 'Ricevi una prima stima del prezzo come intervallo da–a e una proposta di data adatta — rapida, senza impegno e senza costi nascosti.'
      }, {
        title: 'Pulizia a domicilio',
        desc: 'Puliamo direttamente a casa vostra — nel raggio di 30 km da Monaco, senza bisogno di spostare o trasportare i mobili.'
      }]
    },
    trust: {
      eyebrow: 'Fiducia e garanzie',
      title: 'Attenzione ad ogni materiale.',
      materials: 'Lavoriamo pelle, Alcantara e tessuti delicati, con metodi adatti a ciascun materiale.',
      hwk: 'Membro della Camera dell\u0027Artigianato (HWK)',
      placeholder: 'Foto dei lavori svolti e recensioni dei clienti saranno aggiunte non appena disponibili.'
    },
    faq: {
      eyebrow: 'Domande frequenti',
      title: 'Altre domande?',
      items: [{
        q: 'La chimica di pulizia è sicura per bambini e animali?',
        a: 'Sì, usiamo prodotti adatti a famiglie con bambini e animali, con trattamento antiallergico opzionale.'
      }, {
        q: 'Quanto velocemente rispondete?',
        a: 'Rispondiamo su WhatsApp con una prima stima e una data proposta.'
      }, {
        q: 'Devo essere presente durante la pulizia?',
        a: "No, previo accordo è possibile un appuntamento anche senza la vostra presenza."
      }, {
        q: 'Come posso pagare?',
        a: 'Contanti, bonifico o fattura — i dettagli si confermano alla prenotazione.'
      }, {
        q: 'Operate anche fuori dal raggio di 30 km?',
        a: 'Nel raggio di 30 km da Monaco senza costi aggiuntivi. Per eccezioni (yacht, aerei) contattateci.'
      }, {
        q: 'Posso prenotare più articoli insieme?',
        a: 'Sì — ad esempio divano e materasso in un\u0027unica visita. Basta comunicarci tutto.'
      }]
    },
    serviceArea: {
      eyebrow: 'Area di servizio',
      title: 'Monaco + raggio di 30 km.',
      text: 'Veniamo da voi — a Monaco e nel raggio di 30 km, ad es. Schwabing, Bogenhausen, Maxvorstadt, Sendling, Neuhausen e comuni limitrofi come Grünwald, Starnberg, Unterföhring o Ottobrunn.',
      note: 'Per yacht o aerei oltre il raggio standard: servizio su richiesta.'
    },
    contact: {
      eyebrow: 'Contatti',
      title: 'Contattaci ora.',
      subhead: 'Più rapido su WhatsApp — con una foto e una breve descrizione.',
      name: 'Nome',
      phone: 'Numero di telefono',
      description: 'Descrizione',
      photo: 'Foto',
      photoPlaceholder: 'Carica una foto (opzionale)',
      servicePlaceholder: 'Seleziona',
      submit: 'Invia richiesta',
      success: 'Grazie per averci contattato! Ti risponderemo a breve.',
      or: 'oppure scrivici',
      whatsapp: 'Scrivi su WhatsApp',
      phoneCall: 'Chiama',
      descriptionPlaceholder: 'es. macchia, stato, misure …'
    },
    footer: {
      tagline: 'Pulizia professionale di divani, materassi e interni auto — Monaco + 30 km.',
      leistungen: 'Servizi',
      kontakt: 'Contatti',
      services: ['Divani', 'Materassi', 'Sedie e poltrone', 'Tappeti', 'Auto'],
      legal: 'Note legali · Privacy',
      legalNote: 'Per legge disponibili in tedesco, indipendentemente dalla lingua selezionata.'
    }
  }
};
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/marketing-website/i18n.js", error: String((e && e.message) || e) }); }

// ui_kits/marketing-website/sections/Benefits.jsx
try { (() => {
function SectionHeading({
  eyebrow,
  title,
  subhead
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-3)',
      maxWidth: 560
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 'var(--text-sm)',
      fontWeight: 600,
      letterSpacing: 'var(--tracking-widest)',
      textTransform: 'uppercase',
      color: 'var(--color-brand)',
      display: 'flex',
      alignItems: 'center',
      gap: 10
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 24,
      height: 1,
      background: 'var(--color-brand)'
    }
  }), eyebrow), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontSize: 'var(--text-4xl)',
      color: 'var(--color-text-primary)'
    }
  }, title), subhead ? /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontSize: 'var(--text-base)',
      color: 'var(--color-text-secondary)'
    }
  }, subhead) : null);
}
window.SectionHeading = SectionHeading;
function BenefitsSection({
  t
}) {
  const {
    Badge
  } = window.NovoPolsterDesignSystem_1b2f21;
  return /*#__PURE__*/React.createElement("section", {
    id: "vorteile",
    "data-screen-label": "Benefits",
    style: {
      padding: 'var(--space-20) var(--page-gutter)',
      maxWidth: 'var(--content-max-width)',
      margin: '0 auto'
    }
  }, /*#__PURE__*/React.createElement(SectionHeading, {
    eyebrow: t.benefits.eyebrow,
    title: t.benefits.title
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(4, 1fr)',
      gap: 'var(--space-5)',
      marginTop: 'var(--space-10)'
    }
  }, t.benefits.cards.map(c => /*#__PURE__*/React.createElement("div", {
    key: c.title,
    style: {
      background: 'var(--color-surface)',
      border: '1px solid var(--color-border)',
      borderRadius: 'var(--radius-lg)',
      padding: 'var(--space-6)',
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-3)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 40,
      height: 40,
      borderRadius: 'var(--radius-md)',
      background: c.tbd ? 'var(--color-bg-sunken)' : 'var(--color-brand-subtle)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: `../../assets/icons/${c.icon}.svg`,
    alt: "",
    style: {
      width: 20,
      height: 20,
      filter: c.tbd ? 'grayscale(1) opacity(0.5)' : 'invert(38%) sepia(80%) saturate(600%) hue-rotate(140deg) brightness(0.9)'
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 700,
      fontSize: 'var(--text-base)',
      color: 'var(--color-text-primary)'
    }
  }, c.title), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 'var(--text-sm)',
      color: 'var(--color-text-secondary)',
      lineHeight: 'var(--leading-relaxed)'
    }
  }, c.desc), c.tbd ? /*#__PURE__*/React.createElement(Badge, {
    dashed: true,
    size: "sm"
  }, "TBD") : null))));
}
window.BenefitsSection = BenefitsSection;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/marketing-website/sections/Benefits.jsx", error: String((e && e.message) || e) }); }

// ui_kits/marketing-website/sections/ContactSection.jsx
try { (() => {
function ContactSection({
  t
}) {
  const {
    Input,
    Select,
    Textarea,
    Button,
    WhatsAppButton
  } = window.NovoPolsterDesignSystem_1b2f21;
  const SectionHeading = window.SectionHeading;
  const [submitted, setSubmitted] = React.useState(false);
  const [service, setService] = React.useState('');
  return /*#__PURE__*/React.createElement("section", {
    id: "kontakt",
    "data-screen-label": "Final CTA",
    style: {
      padding: 'var(--space-20) var(--page-gutter)',
      maxWidth: 'var(--content-max-width)',
      margin: '0 auto'
    }
  }, /*#__PURE__*/React.createElement(SectionHeading, {
    eyebrow: t.contact.eyebrow,
    title: t.contact.title,
    subhead: t.contact.subhead
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1.3fr',
      gap: 'var(--space-12)',
      marginTop: 'var(--space-10)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--color-surface-ink)',
      borderRadius: 'var(--radius-lg)',
      padding: 'var(--space-8)',
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-4)',
      justifyContent: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 'var(--text-sm)',
      color: 'var(--color-text-inverse-muted)',
      fontWeight: 600
    }
  }, t.contact.or), /*#__PURE__*/React.createElement(WhatsAppButton, {
    floating: false,
    label: t.contact.whatsapp
  }), /*#__PURE__*/React.createElement("a", {
    href: "tel:+491605712229",
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 10,
      color: 'var(--color-text-inverse)',
      fontWeight: 600,
      fontSize: 'var(--text-base)',
      textDecoration: 'none'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/icons/phone.svg",
    alt: "",
    style: {
      width: 18,
      height: 18,
      filter: 'brightness(0) invert(1)'
    }
  }), "0160 571 22 29"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 10,
      color: 'var(--color-text-inverse-muted)',
      fontSize: 'var(--text-sm)',
      marginTop: 'var(--space-2)'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/icons/map-pin.svg",
    alt: "",
    style: {
      width: 16,
      height: 16,
      filter: 'brightness(0) invert(1)',
      opacity: 0.7
    }
  }), "M\xFCnchen + 30 km")), /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--color-surface)',
      border: '1px solid var(--color-border)',
      borderRadius: 'var(--radius-lg)',
      padding: 'var(--space-8)'
    }
  }, submitted ? /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-3)',
      alignItems: 'flex-start'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 8,
      background: 'var(--color-success-subtle)',
      color: 'var(--green-600)',
      padding: '10px 16px',
      borderRadius: 'var(--radius-md)',
      fontWeight: 600,
      fontSize: 'var(--text-sm)'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/icons/check-circle-2.svg",
    alt: "",
    style: {
      width: 16,
      height: 16
    }
  }), t.contact.success), /*#__PURE__*/React.createElement(Button, {
    variant: "ghost",
    onClick: () => setSubmitted(false)
  }, "\u2190 zur\xFCck zum Formular")) : /*#__PURE__*/React.createElement("form", {
    onSubmit: e => {
      e.preventDefault();
      setSubmitted(true);
    },
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 'var(--space-5)'
    }
  }, /*#__PURE__*/React.createElement(Input, {
    label: t.contact.name,
    placeholder: "Max Mustermann",
    required: true
  }), /*#__PURE__*/React.createElement(Input, {
    label: t.contact.phone,
    type: "tel",
    placeholder: "0160 \u2026",
    required: true
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      gridColumn: '1 / -1'
    }
  }, /*#__PURE__*/React.createElement(Select, {
    label: t.services.eyebrow,
    placeholder: t.contact.servicePlaceholder,
    value: service,
    onChange: e => setService(e.target.value),
    options: t.footer.services
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      gridColumn: '1 / -1'
    }
  }, /*#__PURE__*/React.createElement(Textarea, {
    label: t.contact.description,
    placeholder: t.contact.descriptionPlaceholder,
    rows: 3
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      gridColumn: '1 / -1'
    }
  }, /*#__PURE__*/React.createElement(Input, {
    label: t.contact.photo,
    type: "file",
    placeholder: t.contact.photoPlaceholder
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      gridColumn: '1 / -1'
    }
  }, /*#__PURE__*/React.createElement(Button, {
    type: "submit",
    variant: "primary",
    size: "lg"
  }, t.contact.submit))))));
}
window.ContactSection = ContactSection;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/marketing-website/sections/ContactSection.jsx", error: String((e && e.message) || e) }); }

// ui_kits/marketing-website/sections/FAQSection.jsx
try { (() => {
function FAQSection({
  t
}) {
  const {
    FAQAccordion
  } = window.NovoPolsterDesignSystem_1b2f21;
  const SectionHeading = window.SectionHeading;
  const items = t.faq.items.map(i => ({
    question: i.q,
    answer: i.a
  }));
  return /*#__PURE__*/React.createElement("section", {
    id: "faq",
    "data-screen-label": "FAQ",
    style: {
      padding: 'var(--space-20) var(--page-gutter)',
      maxWidth: 'var(--content-max-width)',
      margin: '0 auto'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--content-max-width-narrow)'
    }
  }, /*#__PURE__*/React.createElement(SectionHeading, {
    eyebrow: t.faq.eyebrow,
    title: t.faq.title
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 'var(--space-8)'
    }
  }, /*#__PURE__*/React.createElement(FAQAccordion, {
    items: items,
    defaultOpen: 0
  }))));
}
window.FAQSection = FAQSection;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/marketing-website/sections/FAQSection.jsx", error: String((e && e.message) || e) }); }

// ui_kits/marketing-website/sections/Hero.jsx
try { (() => {
function Hero({
  t
}) {
  const {
    Button,
    Badge
  } = window.NovoPolsterDesignSystem_1b2f21;
  return /*#__PURE__*/React.createElement("section", {
    "data-screen-label": "Hero",
    style: {
      display: 'grid',
      gridTemplateColumns: 'minmax(320px, 1.15fr) minmax(260px, 1fr)',
      gap: 'var(--space-12)',
      alignItems: 'center',
      padding: 'var(--space-24) var(--page-gutter) var(--space-20)',
      maxWidth: 'var(--content-max-width)',
      margin: '0 auto'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-6)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 'var(--space-3)',
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement(Badge, {
    tone: "brand",
    icon: "../../assets/icons/map-pin.svg"
  }, t.hero.zoneLabel)), /*#__PURE__*/React.createElement("h1", {
    style: {
      fontSize: 'clamp(2.5rem, 4vw + 1.2rem, var(--text-6xl))',
      color: 'var(--color-text-primary)'
    }
  }, t.hero.slogan), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 'var(--text-lg)',
      color: 'var(--color-text-secondary)',
      lineHeight: 'var(--leading-relaxed)',
      maxWidth: 460,
      margin: 0
    }
  }, t.hero.subhead), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 'var(--space-3)',
      flexWrap: 'nowrap',
      marginTop: 'var(--space-2)'
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    size: "md",
    radius: "64px",
    icon: "../../assets/icons/whatsapp.svg",
    as: "a",
    href: "https://wa.me/491605712229"
  }, t.hero.ctaPrimary), /*#__PURE__*/React.createElement(Button, {
    variant: "outline",
    size: "md",
    radius: "64px",
    icon: "../../assets/icons/phone.svg",
    as: "a",
    href: "tel:+491605712229"
  }, t.hero.ctaSecondary))), /*#__PURE__*/React.createElement("div", {
    style: {
      aspectRatio: '4/3',
      borderRadius: 'var(--radius-xl)',
      overflow: 'hidden',
      background: 'var(--color-bg-sunken)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      border: '1.5px dashed var(--color-border-strong)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 'var(--text-sm)',
      color: 'var(--color-text-muted)',
      fontWeight: 600,
      textAlign: 'center',
      padding: '0 24px'
    }
  }, t.hero.photoPlaceholder)));
}
window.Hero = Hero;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/marketing-website/sections/Hero.jsx", error: String((e && e.message) || e) }); }

// ui_kits/marketing-website/sections/Process.jsx
try { (() => {
function ProcessSection({
  t
}) {
  const {
    ProcessSteps,
    WhatsAppButton
  } = window.NovoPolsterDesignSystem_1b2f21;
  const SectionHeading = window.SectionHeading;
  const steps = t.process.steps.map((s, i) => ({
    title: s.title,
    description: s.desc,
    cta: i === 0 ? /*#__PURE__*/React.createElement(WhatsAppButton, {
      floating: false,
      label: t.hero.ctaPrimary
    }) : null
  }));
  return /*#__PURE__*/React.createElement("section", {
    id: "ablauf",
    "data-screen-label": "How it works",
    style: {
      padding: 'var(--space-20) var(--page-gutter)',
      maxWidth: 'var(--content-max-width)',
      margin: '0 auto'
    }
  }, /*#__PURE__*/React.createElement(SectionHeading, {
    eyebrow: t.process.eyebrow,
    title: t.process.title
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 'var(--space-10)'
    }
  }, /*#__PURE__*/React.createElement(ProcessSteps, {
    steps: steps
  })));
}
window.ProcessSection = ProcessSection;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/marketing-website/sections/Process.jsx", error: String((e && e.message) || e) }); }

// ui_kits/marketing-website/sections/ServiceArea.jsx
try { (() => {
function ServiceAreaSection({
  t
}) {
  const SectionHeading = window.SectionHeading;
  return /*#__PURE__*/React.createElement("section", {
    id: "zone",
    "data-screen-label": "Service area",
    style: {
      padding: 'var(--space-20) var(--page-gutter)',
      background: 'var(--color-bg-sunken)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--content-max-width)',
      margin: '0 auto',
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 'var(--space-10)',
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(SectionHeading, {
    eyebrow: t.serviceArea.eyebrow,
    title: t.serviceArea.title
  }), /*#__PURE__*/React.createElement("p", {
    style: {
      marginTop: 'var(--space-4)',
      fontSize: 'var(--text-base)',
      color: 'var(--color-text-secondary)',
      lineHeight: 'var(--leading-relaxed)',
      maxWidth: 480
    }
  }, t.serviceArea.text), /*#__PURE__*/React.createElement("p", {
    style: {
      marginTop: 'var(--space-3)',
      fontSize: 'var(--text-sm)',
      color: 'var(--color-text-muted)',
      maxWidth: 480
    }
  }, t.serviceArea.note)), /*#__PURE__*/React.createElement("div", {
    style: {
      aspectRatio: '4/3',
      borderRadius: 'var(--radius-xl)',
      background: 'var(--color-surface)',
      border: '1.5px dashed var(--color-border-strong)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/icons/map.svg",
    alt: "",
    style: {
      width: 32,
      height: 32,
      opacity: 0.4
    }
  }))));
}
window.ServiceAreaSection = ServiceAreaSection;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/marketing-website/sections/ServiceArea.jsx", error: String((e && e.message) || e) }); }

// ui_kits/marketing-website/sections/ServicesPricing.jsx
try { (() => {
function ServicesPricingSection({
  t
}) {
  const {
    ServiceCard,
    PricingTabs,
    WhatsAppButton
  } = window.NovoPolsterDesignSystem_1b2f21;
  const SectionHeading = window.SectionHeading;
  return /*#__PURE__*/React.createElement("section", {
    id: "leistungen",
    "data-screen-label": "Services + Pricing",
    style: {
      padding: 'var(--space-20) var(--page-gutter)',
      background: 'var(--color-bg-sunken)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--content-max-width)',
      margin: '0 auto'
    }
  }, /*#__PURE__*/React.createElement(SectionHeading, {
    eyebrow: t.pricing.eyebrow,
    title: t.pricing.title,
    subhead: t.pricing.subhead
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3, 1fr)',
      gap: 'var(--space-5)',
      marginTop: 'var(--space-10)'
    }
  }, t.services.cards.map(c => /*#__PURE__*/React.createElement(ServiceCard, {
    key: c.title,
    icon: `../../assets/icons/${c.icon}.svg`,
    title: c.title,
    description: c.desc,
    priceFrom: c.price
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 'var(--space-10)',
      background: 'var(--color-surface)',
      border: '1px solid var(--color-border)',
      borderRadius: 'var(--radius-lg)',
      padding: 'var(--space-8)'
    }
  }, /*#__PURE__*/React.createElement(PricingTabs, {
    categories: t.pricing.categories
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 'var(--space-8)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 700,
      fontSize: 'var(--text-lg)',
      color: 'var(--color-text-primary)',
      marginBottom: 'var(--space-4)'
    }
  }, t.pricing.addonsTitle), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 'var(--space-3)',
      flexWrap: 'wrap'
    }
  }, t.pricing.addons.map(a => /*#__PURE__*/React.createElement("div", {
    key: a.label,
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 8,
      background: 'var(--color-surface)',
      border: '1px solid var(--color-border)',
      borderRadius: 'var(--radius-pill)',
      padding: '10px 18px',
      fontSize: 'var(--text-sm)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--color-text-primary)',
      fontWeight: 600
    }
  }, a.label), /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--color-brand-active)',
      fontWeight: 700
    }
  }, "+", a.price))))), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 'var(--space-8)'
    }
  }, /*#__PURE__*/React.createElement(WhatsAppButton, {
    floating: false,
    label: t.hero.ctaPrimary
  }))));
}
window.ServicesPricingSection = ServicesPricingSection;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/marketing-website/sections/ServicesPricing.jsx", error: String((e && e.message) || e) }); }

// ui_kits/marketing-website/sections/Trust.jsx
try { (() => {
function TrustSection({
  t
}) {
  const {
    Badge,
    PlaceholderPanel
  } = window.NovoPolsterDesignSystem_1b2f21;
  const SectionHeading = window.SectionHeading;
  return /*#__PURE__*/React.createElement("section", {
    id: "vertrauen",
    "data-screen-label": "Trust and proof",
    style: {
      padding: 'var(--space-20) var(--page-gutter)',
      background: 'var(--color-bg-sunken)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--content-max-width)',
      margin: '0 auto'
    }
  }, /*#__PURE__*/React.createElement(SectionHeading, {
    eyebrow: t.trust.eyebrow,
    title: t.trust.title
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1.2fr',
      gap: 'var(--space-10)',
      marginTop: 'var(--space-10)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-4)'
    }
  }, /*#__PURE__*/React.createElement(Badge, {
    tone: "brand",
    icon: "../../assets/icons/badge-check.svg",
    size: "md"
  }, t.trust.hwk), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontSize: 'var(--text-base)',
      color: 'var(--color-text-secondary)',
      lineHeight: 'var(--leading-relaxed)'
    }
  }, t.trust.materials)), /*#__PURE__*/React.createElement(PlaceholderPanel, {
    icon: "../../assets/icons/image.svg",
    message: t.trust.placeholder
  }))));
}
window.TrustSection = TrustSection;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/marketing-website/sections/Trust.jsx", error: String((e && e.message) || e) }); }

// ui_kits/marketing-website/sections/WhatsAppFloat.jsx
try { (() => {
function WhatsAppFloat() {
  const {
    WhatsAppButton
  } = window.NovoPolsterDesignSystem_1b2f21;
  return /*#__PURE__*/React.createElement(WhatsAppButton, null);
}
window.WhatsAppFloat = WhatsAppFloat;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/marketing-website/sections/WhatsAppFloat.jsx", error: String((e && e.message) || e) }); }

// ui_kits/marketing-website/tweaks-panel.jsx
try { (() => {
// @ds-adherence-ignore -- omelette starter scaffold (raw elements/hex/px by design)

/* BEGIN USAGE */
// tweaks-panel.jsx
// Reusable Tweaks shell + form-control helpers.
// Exports (to window): useTweaks, TweaksPanel, TweakSection, TweakRow, TweakSlider,
//   TweakToggle, TweakRadio, TweakSelect, TweakText, TweakNumber, TweakColor, TweakButton.
//
// Owns the host protocol (listens for __activate_edit_mode / __deactivate_edit_mode,
// posts __edit_mode_available / __edit_mode_set_keys / __edit_mode_dismissed) so
// individual prototypes don't re-roll it. Ships a consistent set of controls so you
// don't hand-draw <input type="range">, segmented radios, steppers, etc.
//
// Usage (in an HTML file that loads React + Babel):
//
//   const TWEAK_DEFAULTS = /*EDITMODE-BEGIN*/{
//     "primaryColor": "#D97757",
//     "palette": ["#D97757", "#29261b", "#f6f4ef"],
//     "fontSize": 16,
//     "density": "regular",
//     "dark": false
//   }/*EDITMODE-END*/;
//
//   function App() {
//     const [t, setTweak] = useTweaks(TWEAK_DEFAULTS);
//     return (
//       <div style={{ fontSize: t.fontSize, color: t.primaryColor }}>
//         Hello
//         <TweaksPanel>
//           <TweakSection label="Typography" />
//           <TweakSlider label="Font size" value={t.fontSize} min={10} max={32} unit="px"
//                        onChange={(v) => setTweak('fontSize', v)} />
//           <TweakRadio  label="Density" value={t.density}
//                        options={['compact', 'regular', 'comfy']}
//                        onChange={(v) => setTweak('density', v)} />
//           <TweakSection label="Theme" />
//           <TweakColor  label="Primary" value={t.primaryColor}
//                        options={['#D97757', '#2A6FDB', '#1F8A5B', '#7A5AE0']}
//                        onChange={(v) => setTweak('primaryColor', v)} />
//           <TweakColor  label="Palette" value={t.palette}
//                        options={[['#D97757', '#29261b', '#f6f4ef'],
//                                  ['#475569', '#0f172a', '#f1f5f9']]}
//                        onChange={(v) => setTweak('palette', v)} />
//           <TweakToggle label="Dark mode" value={t.dark}
//                        onChange={(v) => setTweak('dark', v)} />
//         </TweaksPanel>
//       </div>
//     );
//   }
//
// TweakRadio is the segmented control for 2–3 short options (auto-falls-back to
// TweakSelect past ~16/~10 chars per label); reach for TweakSelect directly when
// options are many or long. For color tweaks always curate 3-4 options rather than
// a free picker; an option can also be a whole 2–5 color palette (the stored value
// is the array). The Tweak* controls are a floor, not a ceiling — build custom
// controls inside the panel if a tweak calls for UI they don't cover.
/* END USAGE */
// ─────────────────────────────────────────────────────────────────────────────

const __TWEAKS_STYLE = `
  .twk-panel{position:fixed;right:16px;bottom:16px;z-index:2147483646;width:280px;
    max-height:calc(100vh - 32px);display:flex;flex-direction:column;
    transform:scale(var(--dc-inv-zoom,1));transform-origin:bottom right;
    background:rgba(250,249,247,.78);color:#29261b;
    -webkit-backdrop-filter:blur(24px) saturate(160%);backdrop-filter:blur(24px) saturate(160%);
    border:.5px solid rgba(255,255,255,.6);border-radius:14px;
    box-shadow:0 1px 0 rgba(255,255,255,.5) inset,0 12px 40px rgba(0,0,0,.18);
    font:11.5px/1.4 ui-sans-serif,system-ui,-apple-system,sans-serif;overflow:hidden}
  .twk-hd{display:flex;align-items:center;justify-content:space-between;
    padding:10px 8px 10px 14px;cursor:move;user-select:none}
  .twk-hd b{font-size:12px;font-weight:600;letter-spacing:.01em}
  .twk-x{appearance:none;border:0;background:transparent;color:rgba(41,38,27,.55);
    width:22px;height:22px;border-radius:6px;cursor:default;font-size:13px;line-height:1}
  .twk-x:hover{background:rgba(0,0,0,.06);color:#29261b}
  .twk-body{padding:2px 14px 14px;display:flex;flex-direction:column;gap:10px;
    overflow-y:auto;overflow-x:hidden;min-height:0;
    scrollbar-width:thin;scrollbar-color:rgba(0,0,0,.15) transparent}
  .twk-body::-webkit-scrollbar{width:8px}
  .twk-body::-webkit-scrollbar-track{background:transparent;margin:2px}
  .twk-body::-webkit-scrollbar-thumb{background:rgba(0,0,0,.15);border-radius:4px;
    border:2px solid transparent;background-clip:content-box}
  .twk-body::-webkit-scrollbar-thumb:hover{background:rgba(0,0,0,.25);
    border:2px solid transparent;background-clip:content-box}
  .twk-row{display:flex;flex-direction:column;gap:5px}
  .twk-row-h{flex-direction:row;align-items:center;justify-content:space-between;gap:10px}
  .twk-lbl{display:flex;justify-content:space-between;align-items:baseline;
    color:rgba(41,38,27,.72)}
  .twk-lbl>span:first-child{font-weight:500}
  .twk-val{color:rgba(41,38,27,.5);font-variant-numeric:tabular-nums}

  .twk-sect{font-size:10px;font-weight:600;letter-spacing:.06em;text-transform:uppercase;
    color:rgba(41,38,27,.45);padding:10px 0 0}
  .twk-sect:first-child{padding-top:0}

  .twk-field{appearance:none;box-sizing:border-box;width:100%;min-width:0;height:26px;padding:0 8px;
    border:.5px solid rgba(0,0,0,.1);border-radius:7px;
    background:rgba(255,255,255,.6);color:inherit;font:inherit;outline:none}
  .twk-field:focus{border-color:rgba(0,0,0,.25);background:rgba(255,255,255,.85)}
  select.twk-field{padding-right:22px;
    background-image:url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='10' height='6' viewBox='0 0 10 6'><path fill='rgba(0,0,0,.5)' d='M0 0h10L5 6z'/></svg>");
    background-repeat:no-repeat;background-position:right 8px center}

  .twk-slider{appearance:none;-webkit-appearance:none;width:100%;height:4px;margin:6px 0;
    border-radius:999px;background:rgba(0,0,0,.12);outline:none}
  .twk-slider::-webkit-slider-thumb{-webkit-appearance:none;appearance:none;
    width:14px;height:14px;border-radius:50%;background:#fff;
    border:.5px solid rgba(0,0,0,.12);box-shadow:0 1px 3px rgba(0,0,0,.2);cursor:default}
  .twk-slider::-moz-range-thumb{width:14px;height:14px;border-radius:50%;
    background:#fff;border:.5px solid rgba(0,0,0,.12);box-shadow:0 1px 3px rgba(0,0,0,.2);cursor:default}

  .twk-seg{position:relative;display:flex;padding:2px;border-radius:8px;
    background:rgba(0,0,0,.06);user-select:none}
  .twk-seg-thumb{position:absolute;top:2px;bottom:2px;border-radius:6px;
    background:rgba(255,255,255,.9);box-shadow:0 1px 2px rgba(0,0,0,.12);
    transition:left .15s cubic-bezier(.3,.7,.4,1),width .15s}
  .twk-seg.dragging .twk-seg-thumb{transition:none}
  .twk-seg button{appearance:none;position:relative;z-index:1;flex:1;border:0;
    background:transparent;color:inherit;font:inherit;font-weight:500;min-height:22px;
    border-radius:6px;cursor:default;padding:4px 6px;line-height:1.2;
    overflow-wrap:anywhere}

  .twk-toggle{position:relative;width:32px;height:18px;border:0;border-radius:999px;
    background:rgba(0,0,0,.15);transition:background .15s;cursor:default;padding:0}
  .twk-toggle[data-on="1"]{background:#34c759}
  .twk-toggle i{position:absolute;top:2px;left:2px;width:14px;height:14px;border-radius:50%;
    background:#fff;box-shadow:0 1px 2px rgba(0,0,0,.25);transition:transform .15s}
  .twk-toggle[data-on="1"] i{transform:translateX(14px)}

  .twk-num{display:flex;align-items:center;box-sizing:border-box;min-width:0;height:26px;padding:0 0 0 8px;
    border:.5px solid rgba(0,0,0,.1);border-radius:7px;background:rgba(255,255,255,.6)}
  .twk-num-lbl{font-weight:500;color:rgba(41,38,27,.6);cursor:ew-resize;
    user-select:none;padding-right:8px}
  .twk-num input{flex:1;min-width:0;height:100%;border:0;background:transparent;
    font:inherit;font-variant-numeric:tabular-nums;text-align:right;padding:0 8px 0 0;
    outline:none;color:inherit;-moz-appearance:textfield}
  .twk-num input::-webkit-inner-spin-button,.twk-num input::-webkit-outer-spin-button{
    -webkit-appearance:none;margin:0}
  .twk-num-unit{padding-right:8px;color:rgba(41,38,27,.45)}

  .twk-btn{appearance:none;height:26px;padding:0 12px;border:0;border-radius:7px;
    background:rgba(0,0,0,.78);color:#fff;font:inherit;font-weight:500;cursor:default}
  .twk-btn:hover{background:rgba(0,0,0,.88)}
  .twk-btn.secondary{background:rgba(0,0,0,.06);color:inherit}
  .twk-btn.secondary:hover{background:rgba(0,0,0,.1)}

  .twk-swatch{appearance:none;-webkit-appearance:none;width:56px;height:22px;
    border:.5px solid rgba(0,0,0,.1);border-radius:6px;padding:0;cursor:default;
    background:transparent;flex-shrink:0}
  .twk-swatch::-webkit-color-swatch-wrapper{padding:0}
  .twk-swatch::-webkit-color-swatch{border:0;border-radius:5.5px}
  .twk-swatch::-moz-color-swatch{border:0;border-radius:5.5px}

  .twk-chips{display:flex;gap:6px}
  .twk-chip{position:relative;appearance:none;flex:1;min-width:0;height:46px;
    padding:0;border:0;border-radius:6px;overflow:hidden;cursor:default;
    box-shadow:0 0 0 .5px rgba(0,0,0,.12),0 1px 2px rgba(0,0,0,.06);
    transition:transform .12s cubic-bezier(.3,.7,.4,1),box-shadow .12s}
  .twk-chip:hover{transform:translateY(-1px);
    box-shadow:0 0 0 .5px rgba(0,0,0,.18),0 4px 10px rgba(0,0,0,.12)}
  .twk-chip[data-on="1"]{box-shadow:0 0 0 1.5px rgba(0,0,0,.85),
    0 2px 6px rgba(0,0,0,.15)}
  .twk-chip>span{position:absolute;top:0;bottom:0;right:0;width:34%;
    display:flex;flex-direction:column;box-shadow:-1px 0 0 rgba(0,0,0,.1)}
  .twk-chip>span>i{flex:1;box-shadow:0 -1px 0 rgba(0,0,0,.1)}
  .twk-chip>span>i:first-child{box-shadow:none}
  .twk-chip svg{position:absolute;top:6px;left:6px;width:13px;height:13px;
    filter:drop-shadow(0 1px 1px rgba(0,0,0,.3))}
`;

// ── useTweaks ───────────────────────────────────────────────────────────────
// Single source of truth for tweak values. setTweak persists via the host
// (__edit_mode_set_keys → host rewrites the EDITMODE block on disk).
function useTweaks(defaults) {
  const [values, setValues] = React.useState(defaults);
  // Accepts either setTweak('key', value) or setTweak({ key: value, ... }) so a
  // useState-style call doesn't write a "[object Object]" key into the persisted
  // JSON block.
  const setTweak = React.useCallback((keyOrEdits, val) => {
    const edits = typeof keyOrEdits === 'object' && keyOrEdits !== null ? keyOrEdits : {
      [keyOrEdits]: val
    };
    setValues(prev => ({
      ...prev,
      ...edits
    }));
    window.parent.postMessage({
      type: '__edit_mode_set_keys',
      edits
    }, '*');
    // Same-window signal so in-page listeners (deck-stage rail thumbnails)
    // can react — the parent message only reaches the host, not peers.
    window.dispatchEvent(new CustomEvent('tweakchange', {
      detail: edits
    }));
  }, []);
  return [values, setTweak];
}

// ── TweaksPanel ─────────────────────────────────────────────────────────────
// Floating shell. Registers the protocol listener BEFORE announcing
// availability — if the announce ran first, the host's activate could land
// before our handler exists and the toolbar toggle would silently no-op.
// The close button posts __edit_mode_dismissed so the host's toolbar toggle
// flips off in lockstep; the host echoes __deactivate_edit_mode back which
// is what actually hides the panel.
function TweaksPanel({
  title = 'Tweaks',
  children
}) {
  const [open, setOpen] = React.useState(false);
  const dragRef = React.useRef(null);
  const offsetRef = React.useRef({
    x: 16,
    y: 16
  });
  const PAD = 16;
  const clampToViewport = React.useCallback(() => {
    const panel = dragRef.current;
    if (!panel) return;
    const w = panel.offsetWidth,
      h = panel.offsetHeight;
    const maxRight = Math.max(PAD, window.innerWidth - w - PAD);
    const maxBottom = Math.max(PAD, window.innerHeight - h - PAD);
    offsetRef.current = {
      x: Math.min(maxRight, Math.max(PAD, offsetRef.current.x)),
      y: Math.min(maxBottom, Math.max(PAD, offsetRef.current.y))
    };
    panel.style.right = offsetRef.current.x + 'px';
    panel.style.bottom = offsetRef.current.y + 'px';
  }, []);
  React.useEffect(() => {
    if (!open) return;
    clampToViewport();
    if (typeof ResizeObserver === 'undefined') {
      window.addEventListener('resize', clampToViewport);
      return () => window.removeEventListener('resize', clampToViewport);
    }
    const ro = new ResizeObserver(clampToViewport);
    ro.observe(document.documentElement);
    return () => ro.disconnect();
  }, [open, clampToViewport]);
  React.useEffect(() => {
    const onMsg = e => {
      const t = e?.data?.type;
      if (t === '__activate_edit_mode') setOpen(true);else if (t === '__deactivate_edit_mode') setOpen(false);
    };
    window.addEventListener('message', onMsg);
    window.parent.postMessage({
      type: '__edit_mode_available'
    }, '*');
    return () => window.removeEventListener('message', onMsg);
  }, []);
  const dismiss = () => {
    setOpen(false);
    window.parent.postMessage({
      type: '__edit_mode_dismissed'
    }, '*');
  };
  const onDragStart = e => {
    const panel = dragRef.current;
    if (!panel) return;
    const r = panel.getBoundingClientRect();
    const sx = e.clientX,
      sy = e.clientY;
    const startRight = window.innerWidth - r.right;
    const startBottom = window.innerHeight - r.bottom;
    const move = ev => {
      offsetRef.current = {
        x: startRight - (ev.clientX - sx),
        y: startBottom - (ev.clientY - sy)
      };
      clampToViewport();
    };
    const up = () => {
      window.removeEventListener('mousemove', move);
      window.removeEventListener('mouseup', up);
    };
    window.addEventListener('mousemove', move);
    window.addEventListener('mouseup', up);
  };
  if (!open) return null;
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("style", null, __TWEAKS_STYLE), /*#__PURE__*/React.createElement("div", {
    ref: dragRef,
    className: "twk-panel",
    "data-omelette-chrome": "",
    style: {
      right: offsetRef.current.x,
      bottom: offsetRef.current.y
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "twk-hd",
    onMouseDown: onDragStart
  }, /*#__PURE__*/React.createElement("b", null, title), /*#__PURE__*/React.createElement("button", {
    className: "twk-x",
    "aria-label": "Close tweaks",
    onMouseDown: e => e.stopPropagation(),
    onClick: dismiss
  }, "\u2715")), /*#__PURE__*/React.createElement("div", {
    className: "twk-body"
  }, children)));
}

// ── Layout helpers ──────────────────────────────────────────────────────────

function TweakSection({
  label,
  children
}) {
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    className: "twk-sect"
  }, label), children);
}
function TweakRow({
  label,
  value,
  children,
  inline = false
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: inline ? 'twk-row twk-row-h' : 'twk-row'
  }, /*#__PURE__*/React.createElement("div", {
    className: "twk-lbl"
  }, /*#__PURE__*/React.createElement("span", null, label), value != null && /*#__PURE__*/React.createElement("span", {
    className: "twk-val"
  }, value)), children);
}

// ── Controls ────────────────────────────────────────────────────────────────

function TweakSlider({
  label,
  value,
  min = 0,
  max = 100,
  step = 1,
  unit = '',
  onChange
}) {
  return /*#__PURE__*/React.createElement(TweakRow, {
    label: label,
    value: `${value}${unit}`
  }, /*#__PURE__*/React.createElement("input", {
    type: "range",
    className: "twk-slider",
    min: min,
    max: max,
    step: step,
    value: value,
    onChange: e => onChange(Number(e.target.value))
  }));
}
function TweakToggle({
  label,
  value,
  onChange
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: "twk-row twk-row-h"
  }, /*#__PURE__*/React.createElement("div", {
    className: "twk-lbl"
  }, /*#__PURE__*/React.createElement("span", null, label)), /*#__PURE__*/React.createElement("button", {
    type: "button",
    className: "twk-toggle",
    "data-on": value ? '1' : '0',
    role: "switch",
    "aria-checked": !!value,
    onClick: () => onChange(!value)
  }, /*#__PURE__*/React.createElement("i", null)));
}
function TweakRadio({
  label,
  value,
  options,
  onChange
}) {
  const trackRef = React.useRef(null);
  const [dragging, setDragging] = React.useState(false);
  // The active value is read by pointer-move handlers attached for the lifetime
  // of a drag — ref it so a stale closure doesn't fire onChange for every move.
  const valueRef = React.useRef(value);
  valueRef.current = value;

  // Segments wrap mid-word once per-segment width runs out. The track is
  // ~248px (280 panel − 28 body pad − 4 seg pad), each button loses 12px
  // to its own padding, and 11.5px system-ui averages ~6.3px/char — so 2
  // options fit ~16 chars each, 3 fit ~10. Past that (or >3 options), fall
  // back to a dropdown rather than wrap.
  const labelLen = o => String(typeof o === 'object' ? o.label : o).length;
  const maxLen = options.reduce((m, o) => Math.max(m, labelLen(o)), 0);
  const fitsAsSegments = maxLen <= ({
    2: 16,
    3: 10
  }[options.length] ?? 0);
  if (!fitsAsSegments) {
    // <select> emits strings — map back to the original option value so the
    // fallback stays type-preserving (numbers, booleans) like the segment path.
    const resolve = s => {
      const m = options.find(o => String(typeof o === 'object' ? o.value : o) === s);
      return m === undefined ? s : typeof m === 'object' ? m.value : m;
    };
    return /*#__PURE__*/React.createElement(TweakSelect, {
      label: label,
      value: value,
      options: options,
      onChange: s => onChange(resolve(s))
    });
  }
  const opts = options.map(o => typeof o === 'object' ? o : {
    value: o,
    label: o
  });
  const idx = Math.max(0, opts.findIndex(o => o.value === value));
  const n = opts.length;
  const segAt = clientX => {
    const r = trackRef.current.getBoundingClientRect();
    const inner = r.width - 4;
    const i = Math.floor((clientX - r.left - 2) / inner * n);
    return opts[Math.max(0, Math.min(n - 1, i))].value;
  };
  const onPointerDown = e => {
    setDragging(true);
    const v0 = segAt(e.clientX);
    if (v0 !== valueRef.current) onChange(v0);
    const move = ev => {
      if (!trackRef.current) return;
      const v = segAt(ev.clientX);
      if (v !== valueRef.current) onChange(v);
    };
    const up = () => {
      setDragging(false);
      window.removeEventListener('pointermove', move);
      window.removeEventListener('pointerup', up);
    };
    window.addEventListener('pointermove', move);
    window.addEventListener('pointerup', up);
  };
  return /*#__PURE__*/React.createElement(TweakRow, {
    label: label
  }, /*#__PURE__*/React.createElement("div", {
    ref: trackRef,
    role: "radiogroup",
    onPointerDown: onPointerDown,
    className: dragging ? 'twk-seg dragging' : 'twk-seg'
  }, /*#__PURE__*/React.createElement("div", {
    className: "twk-seg-thumb",
    style: {
      left: `calc(2px + ${idx} * (100% - 4px) / ${n})`,
      width: `calc((100% - 4px) / ${n})`
    }
  }), opts.map(o => /*#__PURE__*/React.createElement("button", {
    key: o.value,
    type: "button",
    role: "radio",
    "aria-checked": o.value === value
  }, o.label))));
}
function TweakSelect({
  label,
  value,
  options,
  onChange
}) {
  return /*#__PURE__*/React.createElement(TweakRow, {
    label: label
  }, /*#__PURE__*/React.createElement("select", {
    className: "twk-field",
    value: value,
    onChange: e => onChange(e.target.value)
  }, options.map(o => {
    const v = typeof o === 'object' ? o.value : o;
    const l = typeof o === 'object' ? o.label : o;
    return /*#__PURE__*/React.createElement("option", {
      key: v,
      value: v
    }, l);
  })));
}
function TweakText({
  label,
  value,
  placeholder,
  onChange
}) {
  return /*#__PURE__*/React.createElement(TweakRow, {
    label: label
  }, /*#__PURE__*/React.createElement("input", {
    className: "twk-field",
    type: "text",
    value: value,
    placeholder: placeholder,
    onChange: e => onChange(e.target.value)
  }));
}
function TweakNumber({
  label,
  value,
  min,
  max,
  step = 1,
  unit = '',
  onChange
}) {
  const clamp = n => {
    if (min != null && n < min) return min;
    if (max != null && n > max) return max;
    return n;
  };
  const startRef = React.useRef({
    x: 0,
    val: 0
  });
  const onScrubStart = e => {
    e.preventDefault();
    startRef.current = {
      x: e.clientX,
      val: value
    };
    const decimals = (String(step).split('.')[1] || '').length;
    const move = ev => {
      const dx = ev.clientX - startRef.current.x;
      const raw = startRef.current.val + dx * step;
      const snapped = Math.round(raw / step) * step;
      onChange(clamp(Number(snapped.toFixed(decimals))));
    };
    const up = () => {
      window.removeEventListener('pointermove', move);
      window.removeEventListener('pointerup', up);
    };
    window.addEventListener('pointermove', move);
    window.addEventListener('pointerup', up);
  };
  return /*#__PURE__*/React.createElement("div", {
    className: "twk-num"
  }, /*#__PURE__*/React.createElement("span", {
    className: "twk-num-lbl",
    onPointerDown: onScrubStart
  }, label), /*#__PURE__*/React.createElement("input", {
    type: "number",
    value: value,
    min: min,
    max: max,
    step: step,
    onChange: e => onChange(clamp(Number(e.target.value)))
  }), unit && /*#__PURE__*/React.createElement("span", {
    className: "twk-num-unit"
  }, unit));
}

// Relative-luminance contrast pick — checkmarks drawn over a swatch need to
// read on both #111 and #fafafa without per-option configuration. Hex input
// only (#rgb / #rrggbb); named or rgb()/hsl() colors fall through to "light".
function __twkIsLight(hex) {
  const h = String(hex).replace('#', '');
  const x = h.length === 3 ? h.replace(/./g, c => c + c) : h.padEnd(6, '0');
  const n = parseInt(x.slice(0, 6), 16);
  if (Number.isNaN(n)) return true;
  const r = n >> 16 & 255,
    g = n >> 8 & 255,
    b = n & 255;
  return r * 299 + g * 587 + b * 114 > 148000;
}
const __TwkCheck = ({
  light
}) => /*#__PURE__*/React.createElement("svg", {
  viewBox: "0 0 14 14",
  "aria-hidden": "true"
}, /*#__PURE__*/React.createElement("path", {
  d: "M3 7.2 5.8 10 11 4.2",
  fill: "none",
  strokeWidth: "2.2",
  strokeLinecap: "round",
  strokeLinejoin: "round",
  stroke: light ? 'rgba(0,0,0,.78)' : '#fff'
}));

// TweakColor — curated color/palette picker. Each option is either a single
// hex string or an array of 1-5 hex strings; the card adapts — a lone color
// renders solid, a palette renders colors[0] as the hero (left ~2/3) with the
// rest stacked in a sharp column on the right. onChange emits the
// option in the shape it was passed (string stays string, array stays array).
// Without options it falls back to the native color input for back-compat.
function TweakColor({
  label,
  value,
  options,
  onChange
}) {
  if (!options || !options.length) {
    return /*#__PURE__*/React.createElement("div", {
      className: "twk-row twk-row-h"
    }, /*#__PURE__*/React.createElement("div", {
      className: "twk-lbl"
    }, /*#__PURE__*/React.createElement("span", null, label)), /*#__PURE__*/React.createElement("input", {
      type: "color",
      className: "twk-swatch",
      value: value,
      onChange: e => onChange(e.target.value)
    }));
  }
  // Native <input type=color> emits lowercase hex per the HTML spec, so
  // compare case-insensitively. String() guards JSON.stringify(undefined),
  // which returns the primitive undefined (no .toLowerCase).
  const key = o => String(JSON.stringify(o)).toLowerCase();
  const cur = key(value);
  return /*#__PURE__*/React.createElement(TweakRow, {
    label: label
  }, /*#__PURE__*/React.createElement("div", {
    className: "twk-chips",
    role: "radiogroup"
  }, options.map((o, i) => {
    const colors = Array.isArray(o) ? o : [o];
    const [hero, ...rest] = colors;
    const sup = rest.slice(0, 4);
    const on = key(o) === cur;
    return /*#__PURE__*/React.createElement("button", {
      key: i,
      type: "button",
      className: "twk-chip",
      role: "radio",
      "aria-checked": on,
      "data-on": on ? '1' : '0',
      "aria-label": colors.join(', '),
      title: colors.join(' · '),
      style: {
        background: hero
      },
      onClick: () => onChange(o)
    }, sup.length > 0 && /*#__PURE__*/React.createElement("span", null, sup.map((c, j) => /*#__PURE__*/React.createElement("i", {
      key: j,
      style: {
        background: c
      }
    }))), on && /*#__PURE__*/React.createElement(__TwkCheck, {
      light: __twkIsLight(hero)
    }));
  })));
}
function TweakButton({
  label,
  onClick,
  secondary = false
}) {
  return /*#__PURE__*/React.createElement("button", {
    type: "button",
    className: secondary ? 'twk-btn secondary' : 'twk-btn',
    onClick: onClick
  }, label);
}
Object.assign(window, {
  useTweaks,
  TweaksPanel,
  TweakSection,
  TweakRow,
  TweakSlider,
  TweakToggle,
  TweakRadio,
  TweakSelect,
  TweakText,
  TweakNumber,
  TweakColor,
  TweakButton
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/marketing-website/tweaks-panel.jsx", error: String((e && e.message) || e) }); }

__ds_ns.WhatsAppButton = __ds_scope.WhatsAppButton;

__ds_ns.Badge = __ds_scope.Badge;

__ds_ns.Button = __ds_scope.Button;

__ds_ns.IconButton = __ds_scope.IconButton;

__ds_ns.Input = __ds_scope.Input;

__ds_ns.Select = __ds_scope.Select;

__ds_ns.Textarea = __ds_scope.Textarea;

__ds_ns.FAQAccordion = __ds_scope.FAQAccordion;

__ds_ns.PlaceholderPanel = __ds_scope.PlaceholderPanel;

__ds_ns.PricingTable = __ds_scope.PricingTable;

__ds_ns.PricingTabs = __ds_scope.PricingTabs;

__ds_ns.ProcessSteps = __ds_scope.ProcessSteps;

__ds_ns.ServiceCard = __ds_scope.ServiceCard;

__ds_ns.Footer = __ds_scope.Footer;

__ds_ns.Header = __ds_scope.Header;

__ds_ns.LanguageSwitcher = __ds_scope.LanguageSwitcher;

})();
