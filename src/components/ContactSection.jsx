import { useState } from 'react'
import './ContactSection.css'
import { useLang } from '../i18n'

const subjectValues = ['reservas', 'gastronomia', 'eventos', 'wellness', 'outros']

export default function ContactSection() {
  const [sent, setSent] = useState(false)
  const { t } = useLang()

  const handleSubmit = (e) => {
    e.preventDefault()
    setSent(true)
  }

  return (
    <section id="contato" className="contact">
      <div className="contact__inner">
        <div className="contact__head">
          <p className="contact__eyebrow" data-reveal>{t('contact.eyebrow')}</p>
          <h2 className="contact__title" data-reveal style={{ transitionDelay: '140ms' }}>{t('contact.title')}</h2>
        </div>

        <div className="contact__grid">
          {/* ── Left: contact data ─────────────────────────── */}
          <div className="contact__info" data-reveal="left">
            <div className="contact__info-block">
              <p className="contact__label">{t('contact.addrLabel')}</p>
              <p className="contact__value">
                {t('contact.addrLine1')}
                <br />
                {t('contact.addrLine2')}
              </p>
            </div>

            <div className="contact__info-block">
              <p className="contact__label">{t('contact.reservasLabel')}</p>
              <p className="contact__value">
                <a href="tel:+552226208504">+55 (22) 2620-8504</a>
                <br />
                <a href="mailto:reservas@laborie.com.br">reservas@laborie.com.br</a>
                <br />
                <a href="https://wa.me/552226208504" target="_blank" rel="noreferrer">
                  WhatsApp
                </a>
              </p>
            </div>

            <div className="contact__info-block">
              <p className="contact__label">{t('contact.hoursLabel')}</p>
              <p className="contact__value">
                {t('contact.hoursLine1')}
                <br />
                {t('contact.hoursLine2')}
              </p>
            </div>
          </div>

          {/* ── Right: form ────────────────────────────────── */}
          <div className="contact__form-wrap" data-reveal="right" style={{ transitionDelay: '120ms' }}>
            {sent ? (
              <div className="contact__success">
                <p className="contact__success-title">{t('contact.successTitle')}</p>
                <p className="contact__success-text">
                  {t('contact.successText')}
                </p>
              </div>
            ) : (
              <form className="contact__form" onSubmit={handleSubmit} noValidate>
                <div className="contact__field">
                  <label htmlFor="contact-name">{t('contact.name')}</label>
                  <input id="contact-name" type="text" name="nome" required autoComplete="name" />
                </div>

                <div className="contact__field">
                  <label htmlFor="contact-email">{t('contact.email')}</label>
                  <input id="contact-email" type="email" name="email" required autoComplete="email" />
                </div>

                <div className="contact__field">
                  <label htmlFor="contact-subject">{t('contact.subject')}</label>
                  <select id="contact-subject" name="assunto">
                    {t('contact.subjects').map((label, i) => (
                      <option key={subjectValues[i]} value={subjectValues[i]}>{label}</option>
                    ))}
                  </select>
                </div>

                <div className="contact__field">
                  <label htmlFor="contact-message">{t('contact.message')}</label>
                  <textarea id="contact-message" name="mensagem" rows="4" required />
                </div>

                <button type="submit" className="contact__submit">
                  {t('contact.submit')}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}