import './RoomsSection.css'
import { useLang } from '../i18n'
import SuitesCarousel from './SuitesCarousel'

export default function RoomsSection({ onBookNow }) {
  const { t } = useLang()
  const title = t('rooms.title')

  return (
    <section id="rooms" className="rooms">
      <div className="rooms__inner">

        {/* Top block — headline + copy + links */}
        <div className="rooms__top">
          <div className="rooms__top-text">
            <p className="rooms__eyebrow" data-reveal>{t('rooms.eyebrow')}</p>
            <h2 className="rooms__title-top" data-reveal style={{ transitionDelay: '140ms' }}>
              {title[0]}<br />{title[1]}
            </h2>
          </div>
          <div className="rooms__top-right">
            <p className="rooms__body" data-reveal>
              {t('rooms.body')}
            </p>
            <div className="rooms__top-links" data-reveal style={{ transitionDelay: '160ms' }}>
              <a href="#rooms" className="rooms__link-arrow">{t('rooms.linkView')}</a>
              <a href="#rooms" className="rooms__link-arrow" onClick={onBookNow}>
                {t('rooms.linkAvailability')}
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Suites carousel */}
      <SuitesCarousel />
    </section>
  )
}
