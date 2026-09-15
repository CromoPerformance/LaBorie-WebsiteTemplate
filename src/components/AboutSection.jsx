import './AboutSection.css'
import { useLang } from '../i18n'

export default function AboutSection({ onBookNow }) {
  const { t } = useLang()
  const title = t('about.title')

  return (
    <section id="about" className="about">
      <div className="about__inner">

        {/* Left — two images, grid-overlap */}
        <div className="about__images">
          <div className="about__img-bw" data-reveal="left">
            <img src="/bw_flatiron.avif" alt={t('about.imgAltBw')} />
          </div>
          <div className="about__img-color" data-reveal="right" style={{ transitionDelay: '1000ms' }}>
            <img src="/queen_sofa.avif" alt={t('about.imgAltColor')} />
          </div>
        </div>

        {/* Right — editorial text block */}
        <div className="about__content">
          <p className="about__eyebrow" data-reveal style={{ transitionDelay: '120ms' }}>{t('about.eyebrow')}</p>

          <h2 className="about__title" data-reveal style={{ transitionDelay: '220ms' }}>
            {title[0]}<br />
            {title[1]}<br />
            {title[2]}
          </h2>

          <span className="about__rule" data-reveal style={{ transitionDelay: '300ms' }} />

          <p className="about__body" data-reveal style={{ transitionDelay: '380ms' }}>
            {t('about.body')}
          </p>

          <a href="#rooms" className="about__read-more" data-reveal style={{ transitionDelay: '460ms' }}>
            {t('about.readMore')}
            <span className="arrow">→</span>
          </a>

          <button className="about__cta" onClick={onBookNow} data-reveal style={{ transitionDelay: '540ms' }}>
            {t('cta.book')}
          </button>
        </div>

      </div>
    </section>
  )
}