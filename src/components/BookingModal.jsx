import { useState } from 'react'
import './BookingModal.css'
import { useLang } from '../i18n'

const suites = [
  'Lua de Mel',
  'Suíte Master Mar',
  'Suíte Master Jardim',
  'Master Mar',
  'Master Jardim',
  'Confort Mar',
  'Confort Jardim',
  'Confort Junior',
]

export default function BookingModal({ isOpen, onClose }) {
  const { t } = useLang()
  const [step, setStep] = useState(1)
  const [form, setForm] = useState({
    checkin: '',
    checkout: '',
    guests: '2',
    suite: suites[0],
    name: '',
    email: '',
  })
  const [confirmed, setConfirmed] = useState(false)

  const handleChange = (k, v) => setForm(f => ({ ...f, [k]: v }))

  const handleConfirm = (e) => {
    e.preventDefault()
    setConfirmed(true)
  }

  const handleClose = () => {
    onClose()
    setTimeout(() => { setStep(1); setConfirmed(false) }, 400)
  }

  if (!isOpen) return null

  return (
    <div className="modal-backdrop" onClick={handleClose}>
      <div className="modal" onClick={e => e.stopPropagation()}>
        {/* Header */}
        <div className="modal__header">
          <div>
            <p className="modal__eyebrow">{t('booking.eyebrow')}</p>
            <h2 className="modal__title">
              {t('booking.title')}
            </h2>
          </div>
          <button className="modal__close" onClick={handleClose} id="modal-close-btn" aria-label={t('booking.close')}>✕</button>
        </div>

        {confirmed ? (
          <div className="modal__confirmed">
            <div className="modal__confirmed-icon">✓</div>
            <p className="modal__confirmed-title">
              {t('booking.confirmedThanks').replace('{name}', form.name || 'Guest')}
            </p>
            <p className="modal__confirmed-desc">
              {t('booking.confirmedDesc1')} <strong>{form.suite}</strong> {t('booking.confirmedDesc2')}{' '}
              {form.email || t('booking.yourEmail')}.
            </p>
            <div className="modal__confirmed-dates">
              <div>
                <span>{t('booking.checkIn')}</span>
                <strong>{form.checkin || '—'}</strong>
              </div>
              <div className="modal__confirmed-divider" />
              <div>
                <span>{t('booking.checkOut')}</span>
                <strong>{form.checkout || '—'}</strong>
              </div>
              <div className="modal__confirmed-divider" />
              <div>
                <span>{t('booking.guests')}</span>
                <strong>{form.guests}</strong>
              </div>
            </div>
            <button className="modal__btn modal__btn--primary" onClick={handleClose}>
              {t('booking.close')}
            </button>
          </div>
        ) : (
          <form className="modal__form" onSubmit={handleConfirm}>
            {/* Dates row */}
            <div className="modal__row">
              <div className="modal__field">
                <label htmlFor="checkin" className="modal__label">{t('booking.checkIn')}</label>
                <input
                  id="checkin"
                  type="date"
                  className="modal__input"
                  value={form.checkin}
                  onChange={e => handleChange('checkin', e.target.value)}
                  required
                />
              </div>
              <div className="modal__field">
                <label htmlFor="checkout" className="modal__label">{t('booking.checkOut')}</label>
                <input
                  id="checkout"
                  type="date"
                  className="modal__input"
                  value={form.checkout}
                  onChange={e => handleChange('checkout', e.target.value)}
                  required
                />
              </div>
              <div className="modal__field modal__field--small">
                <label htmlFor="guests" className="modal__label">{t('booking.guests')}</label>
                <select
                  id="guests"
                  className="modal__input"
                  value={form.guests}
                  onChange={e => handleChange('guests', e.target.value)}
                >
                  {[1,2,3,4].map(n => <option key={n} value={n}>{n}</option>)}
                </select>
              </div>
            </div>

            {/* Suite selection */}
            <div className="modal__field">
              <label className="modal__label">{t('booking.selectSuite')}</label>
              <div className="modal__suites">
                {suites.map(s => (
                  <button
                    key={s}
                    type="button"
                    id={`modal-suite-${s.toLowerCase().replace(/ /g,'-')}`}
                    className={`modal__suite-btn ${form.suite === s ? 'active' : ''}`}
                    onClick={() => handleChange('suite', s)}
                  >
                    {s}
                  </button>
                ))}
              </div>
            </div>

            {/* Guest info */}
            <div className="modal__row">
              <div className="modal__field">
                <label htmlFor="name" className="modal__label">{t('booking.fullName')}</label>
                <input
                  id="name"
                  type="text"
                  className="modal__input"
                  placeholder={t('booking.placeholderName')}
                  value={form.name}
                  onChange={e => handleChange('name', e.target.value)}
                  required
                />
              </div>
              <div className="modal__field">
                <label htmlFor="email" className="modal__label">{t('booking.emailAddress')}</label>
                <input
                  id="email"
                  type="email"
                  className="modal__input"
                  placeholder={t('booking.placeholderEmail')}
                  value={form.email}
                  onChange={e => handleChange('email', e.target.value)}
                  required
                />
              </div>
            </div>

            <div className="modal__actions">
              <p className="modal__disclaimer">
                {t('booking.disclaimer')}
              </p>
              <button type="submit" className="modal__btn modal__btn--primary" id="modal-confirm-btn">
                {t('booking.confirm')} →
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  )
}