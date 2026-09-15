import './DiningSection.css'
import { useLang } from '../i18n'
import restaurantImage from '../assets/Restaurante - Anne Ganem.avif'

export default function DiningSection({ onBookNow }) {
  const { t } = useLang()
  const title = t('dining.title')

  return (
    <section id="dining" className="dining">

      {/* Split backgrounds */}
      <div className="dining__bg dining__bg--top" aria-hidden="true" />
      <div className="dining__bg dining__bg--bottom" aria-hidden="true" />

      <div className="dining__inner">

        {/* ── Top block — header content ── */}
        <header className="dining__header">
          <div className="dining__title-col">
            <p className="dining__eyebrow" data-reveal>{t('dining.eyebrow')}</p>
            <h2 className="dining__title" data-reveal style={{ transitionDelay: '140ms' }}>
              {title[0]}<br />{title[1]}
            </h2>
          </div>

          <div className="dining__text-col">
            <p className="dining__body" data-reveal>
              {t('dining.body')}
            </p>
            <div className="dining__links" data-reveal style={{ transitionDelay: '160ms' }}>
              <a href="#dining" className="dining__link">
                {t('dining.linkRestaurant')}<span className="arrow">→</span>
              </a>
              <a href="#dining" className="dining__link">
                {t('dining.linkPantagruels')}<span className="arrow">→</span>
              </a>
            </div>
          </div>
        </header>

        {/* ── Central overlapping image ── */}
        <div className="dining__media" data-reveal="zoom">
          <img
            src={restaurantImage}
            alt={t('dining.imgAlt')}
            className="dining__photo"
          />
        </div>

        {/* ── Bottom block — footer content ── */}
        <footer className="dining__footer" data-reveal>
          <button className="dining__cta" onClick={onBookNow}>
            {t('cta.book')}
          </button>
        </footer>

      </div>
    </section>
  )
}