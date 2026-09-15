import './FloralSection.css'
import { useLang } from '../i18n'
import floralImage from '../assets/_MG_8852 - Anne Ganem.avif'

export default function FloralSection() {
  const { t } = useLang()

  return (
    <section id="floral" className="floral">
      {/* Background photo with overlay */}
      <div className="floral__bg">
        <img src={floralImage} alt={t('floral.imgAlt')} className="floral__bg-img" />
        <div className="floral__overlay" />
      </div>

      {/* Content over image */}
      <div className="floral__content">
        <div className="floral__content-inner">
          <p className="floral__eyebrow" data-reveal>{t('floral.eyebrow')}</p>

          <h2 className="floral__title" data-reveal style={{ transitionDelay: '140ms' }}>{t('floral.title')}</h2>

          <div className="floral__copy-grid" data-reveal style={{ transitionDelay: '280ms' }}>
            <p className="floral__body">
              {t('floral.body1')}
            </p>
            <p className="floral__body">
              {t('floral.body2')}
            </p>
          </div>

          <a href="#indulge" className="floral__btn" data-reveal style={{ transitionDelay: '420ms' }}>{t('floral.btn')}</a>
        </div>
      </div>
    </section>
  )
}
