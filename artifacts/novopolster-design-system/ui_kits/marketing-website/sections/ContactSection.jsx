function ContactSection({ t }) {
  const base = window.NP_ASSETS_BASE || '';
  const { isMobile, isNarrow } = window.useViewport();
  const [submitted, setSubmitted] = React.useState(false);
  const [service, setService] = React.useState('');
  const [consentAccepted, setConsentAccepted] = React.useState(false);
  const [photos, setPhotos] = React.useState([]);
  const [photoPreviews, setPhotoPreviews] = React.useState([]);
  const [photoError, setPhotoError] = React.useState('');
  const photoInputRef = React.useRef(null);
  const replacePhotoIndexRef = React.useRef(null);

  React.useEffect(() => {
    const handleServiceSelection = (event) => {
      if (!event.detail || !event.detail.serviceId) return;
      setService(event.detail.serviceId);
      setSubmitted(false);
      setConsentAccepted(false);
    };

    window.addEventListener('np:select-service', handleServiceSelection);
    return () => window.removeEventListener('np:select-service', handleServiceSelection);
  }, []);

  React.useEffect(() => {
    const previewUrls = photos.map((file) => URL.createObjectURL(file));
    setPhotoPreviews(previewUrls);
    return () => previewUrls.forEach((url) => URL.revokeObjectURL(url));
  }, [photos]);

  const selectPhotos = (fileList) => {
    const files = Array.from(fileList || []);
    if (!files.length) return;

    const invalidType = files.some((file) => !['image/jpeg', 'image/png'].includes(file.type));
    const invalidSize = files.some((file) => file.size > 5 * 1024 * 1024);
    if (invalidType) {
      setPhotoError(t.contact.photoTypeError || 'JPG and PNG only');
      return;
    }
    if (invalidSize) {
      setPhotoError(t.contact.photoSizeError || 'Maximum file size: 5 MB');
      return;
    }

    setPhotoError('');
    setPhotos((current) => {
      const replaceIndex = replacePhotoIndexRef.current;
      if (replaceIndex !== null) {
        const next = [...current];
        next[replaceIndex] = files[0];
        return next;
      }
      return [...current, ...files].slice(0, 4);
    });
    replacePhotoIndexRef.current = null;
    if (photoInputRef.current) photoInputRef.current.value = '';
  };

  const openPhotoPicker = (replaceIndex = null) => {
    replacePhotoIndexRef.current = replaceIndex;
    if (photoInputRef.current) photoInputRef.current.click();
  };

  const removePhoto = (index) => {
    setPhotos((current) => current.filter((_, photoIndex) => photoIndex !== index));
    setPhotoError('');
    if (photoInputRef.current) photoInputRef.current.value = '';
  };
  const inputBase = {
    width: '100%', minHeight: 48, boxSizing: 'border-box', border: 0, borderRadius: 12,
    background: 'var(--color-surface)', padding: '12px 16px',
    fontFamily: 'var(--font-body)', fontSize: 16, lineHeight: '24px', color: 'var(--color-text-primary)',
    outline: 'none',
  };
  const labelStyle = {
    fontFamily: 'var(--font-body)', fontSize: 16, lineHeight: '24px', fontWeight: 600,
    color: 'var(--color-text-primary)',
  };

  return (
    <section id="kontakt" data-screen-label="Final CTA" style={{ padding: isMobile ? '40px 16px' : isNarrow ? '32px 24px' : '32px 64px', background: 'var(--color-bg)' }}>
      <window.Reveal style={{ width: '100%', maxWidth: 1312, margin: '0 auto', display: 'flex', flexDirection: 'column', gap: isMobile ? 40 : 64, alignItems: 'center' }}>
        <window.Reveal style={{ width: 'min(680px, 100%)', margin: '0 auto', alignSelf: 'center' }}><div style={{ width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>
          <span style={{
            display: 'inline-flex', background: '#F2ECE5', borderRadius: 16, padding: '4px 8px',
            fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 14, lineHeight: '20px',
            textTransform: 'uppercase', color: 'var(--color-text-primary)',
          }}>
            {t.contact.eyebrow}
          </span>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 8, marginTop: 12, alignItems: 'center' }}>
            <h2 style={{
              margin: 0, fontFamily: 'var(--font-display)', fontWeight: 800,
              fontSize: isMobile ? 38 : 48, lineHeight: isMobile ? '42px' : '54px', textTransform: 'uppercase', color: 'var(--color-text-primary)',
              maxWidth: 680,
            }}>
              {t.contact.title}
            </h2>
            <p style={{ margin: 0, fontFamily: 'var(--font-body)', fontSize: isMobile ? 16 : 20, lineHeight: isMobile ? '24px' : '28px', color: 'var(--color-text-primary)', maxWidth: 448 }}>
              {t.contact.subhead}
            </p>
          </div>
        </div></window.Reveal>

        <window.Reveal delay={140} style={{ width: 'min(596px, 100%)', margin: '0 auto', alignSelf: 'center' }}><div style={{
          width: '100%', background: '#F7F5F1', borderRadius: 22, padding: isMobile ? 20 : 32,
          boxSizing: 'border-box', display: 'flex', flexDirection: 'column', gap: 32,
        }}>
          {submitted ? (
            <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-3)', alignItems: 'flex-start' }}>
              <div style={{
                display: 'inline-flex', alignItems: 'center', gap: 8, background: 'var(--color-success-subtle)',
                color: 'var(--green-600)', padding: '10px 16px', borderRadius: 'var(--radius-md)', fontWeight: 600, fontSize: 'var(--text-sm)',
              }}>
                <img src="../../assets/icons/check-circle-2.svg" alt="" style={{ width: 16, height: 16 }} />
                {t.contact.success}
              </div>
              <button type="button" onClick={() => setSubmitted(false)} style={{
                border: 0, background: 'transparent', padding: 0, cursor: 'pointer',
                fontFamily: 'var(--font-display)', fontSize: 16, fontWeight: 700, color: 'var(--color-brand)',
              }}>← zurück zum Formular</button>
            </div>
          ) : (
            <form onSubmit={(e) => { e.preventDefault(); if (!consentAccepted) return; setSubmitted(true); }} style={{ display: 'flex', flexDirection: 'column', gap: 32 }}>
              <h3 style={{
                margin: 0, fontFamily: 'var(--font-display)', fontSize: isMobile ? 24 : 28, lineHeight: isMobile ? '30px' : '32px',
                fontWeight: 800, color: 'var(--color-text-primary)',
              }}>{t.contact.formTitle || '30 секунд — і рахунок у вас'}</h3>

              <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(220px, 100%), 1fr))', gap: 20 }}>
                  <label style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
                    <span style={labelStyle}>{t.contact.name} <span style={{ color: 'var(--color-brand)' }}>*</span></span>
                    <input style={inputBase} placeholder="Макс Мустерманн" required />
                  </label>
                  <label style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
                    <span style={labelStyle}>{t.contact.phone} <span style={{ color: 'var(--color-brand)' }}>*</span></span>
                    <input style={inputBase} type="tel" placeholder="+49 160 1234567" required />
                  </label>
                </div>

                <label style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
                  <span style={labelStyle}>{t.services.eyebrow}</span>
                  <div style={{ position: 'relative' }}>
                    <select
                      value={service}
                      onChange={(e) => setService(e.target.value)}
                      style={{ ...inputBase, appearance: 'none', color: service ? 'var(--color-text-primary)' : 'rgba(19,20,19,0.4)' }}
                    >
                      <option value="">{t.contact.servicePlaceholder}</option>
                      {t.servicesGrid.items.map((option) => (
                        <option key={option.image} value={option.image}>{option.title.join(' ')}</option>
                      ))}
                    </select>
                    <img src={base + 'assets/icons/chevron-down.svg'} alt="" style={{ position: 'absolute', right: 16, top: 18, width: 12, height: 12, pointerEvents: 'none' }} />
                  </div>
                </label>

                <label style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
                  <span style={labelStyle}>{t.contact.description}</span>
                  <textarea style={{ ...inputBase, height: 86, resize: 'none' }} placeholder={t.contact.descriptionPlaceholder} />
                </label>

                <div>
                  <style>{`
                    .np-photo-grid { display: grid; grid-template-columns: repeat(4, minmax(0, 1fr)); gap: 12px; }
                    @media (max-width: 640px) { .np-photo-grid { grid-template-columns: repeat(2, minmax(0, 1fr)); } }
                  `}</style>
                  <input
                    ref={photoInputRef}
                    type="file"
                    accept="image/jpeg,image/png"
                    multiple
                    onChange={(e) => selectPhotos(e.target.files)}
                    style={{ display: 'none' }}
                  />
                  <div style={{ marginBottom: 12 }}>
                    <div style={{ fontFamily: 'var(--font-body)', fontSize: 16, lineHeight: '24px', fontWeight: 600, color: 'var(--color-text-primary)' }}>
                      {t.contact.photoGroupTitle || 'Photos'} <span style={{ color: 'var(--color-text-muted)', fontWeight: 400 }}>({t.contact.optional || 'optional'})</span>
                    </div>
                    <p style={{ margin: '2px 0 0', fontFamily: 'var(--font-body)', fontSize: 14, lineHeight: '20px', color: 'var(--color-text-muted)' }}>
                      {t.contact.photoGroupHint || 'Up to 4 files, max. 5 MB each. JPG, PNG.'}
                    </p>
                  </div>
                  <div
                    className="np-photo-grid"
                    onDragOver={(e) => e.preventDefault()}
                    onDrop={(e) => { e.preventDefault(); replacePhotoIndexRef.current = null; selectPhotos(e.dataTransfer.files); }}
                  >
                    {[0, 1, 2, 3].map((index) => {
                      const file = photos[index];
                      const preview = photoPreviews[index];
                      return file && preview ? (
                        <div key={index} style={{ position: 'relative', aspectRatio: '1', minWidth: 0, overflow: 'hidden', borderRadius: 12, background: 'rgba(19,20,19,0.08)' }}>
                          <img src={preview} alt={file.name} style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
                          <button
                            type="button"
                            title={t.contact.photoChange || 'Change photo'}
                            aria-label={`${t.contact.photoChange || 'Change photo'}: ${file.name}`}
                            onClick={() => openPhotoPicker(index)}
                            style={{ position: 'absolute', inset: 0, border: 0, background: 'transparent', cursor: 'pointer' }}
                          />
                          <span style={{
                            position: 'absolute', left: 6, right: 30, bottom: 6, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap',
                            color: 'white', fontFamily: 'var(--font-body)', fontSize: 11, lineHeight: '16px', fontWeight: 600,
                            textShadow: '0 1px 4px rgba(19,20,19,0.8)', pointerEvents: 'none',
                          }}>
                            {file.name}
                          </span>
                        <button
                          type="button"
                          title={t.contact.photoRemove || 'Remove photo'}
                          aria-label={`${t.contact.photoRemove || 'Remove photo'}: ${file.name}`}
                          onClick={() => removePhoto(index)}
                          style={{
                            position: 'absolute', top: 6, right: 6, width: 32, height: 32, border: 0, borderRadius: '50%', padding: 0,
                            background: 'white', color: 'var(--color-text-primary)', fontFamily: 'var(--font-body)', fontSize: 24,
                            lineHeight: '30px', fontWeight: 400, cursor: 'pointer',
                          }}
                        >
                          ×
                        </button>
                        </div>
                      ) : (
                        <button
                          key={index}
                          type="button"
                          onClick={() => openPhotoPicker(null)}
                          aria-label={t.contact.photoPlaceholder}
                          style={{
                            aspectRatio: '1', minWidth: 0, border: '1px dashed rgba(19,20,19,0.35)', borderRadius: 12,
                            background: 'var(--color-surface)', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer',
                          }}
                        >
                          <img src={base + 'assets/icons/camera.svg'} alt="" style={{ width: 24, height: 24, opacity: 0.55 }} />
                        </button>
                      );
                    })}
                  </div>
                  {photoError ? <p role="alert" style={{ margin: '6px 0 0', color: '#B42318', fontSize: 13, lineHeight: '18px' }}>{photoError}</p> : null}
                </div>
              </div>

              <label style={{ display: 'flex', gap: 12, alignItems: 'center', color: 'var(--color-text-muted)' }}>
                <input
                  type="checkbox"
                  required
                  checked={consentAccepted}
                  onChange={(e) => setConsentAccepted(e.target.checked)}
                  style={{ width: 20, height: 20, margin: 2, accentColor: 'var(--color-brand)' }}
                />
                <span style={{ fontFamily: 'var(--font-body)', fontSize: 15, lineHeight: '22px' }}>
                  {t.contact.consentPrefix || 'Я погоджуюся з обробкою персональних даних згідно з'} <a href="#" style={{ color: 'var(--color-brand)', textDecoration: 'underline' }}>{t.contact.consentLink || 'Політикою конфіденційності'}</a>
                </span>
              </label>

              <button type="submit" disabled={!consentAccepted} style={{
                width: '100%', minHeight: 52, border: 0, borderRadius: 'var(--radius-pill)',
                background: consentAccepted ? 'var(--color-brand)' : 'rgba(19,20,19,0.18)',
                color: consentAccepted ? 'var(--color-text-inverse)' : 'rgba(19,20,19,0.45)',
                fontFamily: 'var(--font-display)', fontSize: 20, lineHeight: '28px',
                fontWeight: 700, textTransform: 'uppercase', cursor: consentAccepted ? 'pointer' : 'not-allowed', padding: '12px 24px',
              }}>
                {t.contact.submit}
              </button>
            </form>
          )}
        </div></window.Reveal>
      </window.Reveal>
    </section>
  );
}
window.ContactSection = ContactSection;
