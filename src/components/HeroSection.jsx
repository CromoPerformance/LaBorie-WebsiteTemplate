import './HeroSection.css'
import { useLang } from '../i18n'
import heroImage from '../assets/Sem-nome-2560-x-1829-px-e1784236499527.avif'

export default function HeroSection({ onBookNow }) {
  const { t } = useLang()

  return (
    <section id="hero" className="hero">
      <div className="hero__title-wrap" data-reveal>
        <h1 className="hero__title">
          {t('hero.title')}
        </h1>
        <p className="hero__subtitle">
          {t('hero.subtitle')}
        </p>
      </div>

      <div className="hero__widget-wrap" data-reveal style={{ transitionDelay: '320ms' }}>
        <div className="reservation-widget">
          <div className="reservation-widget__col">
            <span className="reservation-widget__label">{t('hero.arrival')}</span>
            <span className="reservation-widget__value">
              15 Set 2026
            </span>
          </div>
          <div className="reservation-widget__col">
            <span className="reservation-widget__label">{t('hero.departure')}</span>
            <span className="reservation-widget__value">
              16 Set 2026
            </span>
          </div>
          <div className="reservation-widget__col">
            <span className="reservation-widget__label">
              {t('hero.roomsGuests')}
            </span>
            <span className="reservation-widget__value reservation-widget__value--rooms">
              <span className="reservation-widget__num">1</span>
              <span className="reservation-widget__desc">{t('hero.room')}</span>
              <span className="reservation-widget__sep">/</span>
              <span className="reservation-widget__num">2</span>
              <span className="reservation-widget__desc">{t('hero.guests')}</span>
            </span>
          </div>
          <button
            type="button"
            className="reservation-widget__cta"
            onClick={onBookNow}
          >
            {t('hero.book')}
          </button>
        </div>
      </div>

      <div className="hero__photo-wrap">
        <img
          src={heroImage}
          alt={t('hero.imgAlt')}
          className="hero__photo"
        />
      </div>
    </section>
  )
}