import './IndulgeSection.css'
import { useLang } from '../i18n'
import buziosForno from '../assets/BUZIOS-FORNO.avif'

export default function IndulgeSection() {
  const { t } = useLang()

  const wellnessItems = [
    {
      id: 'spa',
      eyebrow: t('indulge.spa.eyebrow'),
      title: t('indulge.spa.title'),
      body: t('indulge.spa.body'),
      link: t('indulge.spa.link'),
      img: '/bathroom_tub.avif',
      imgAlt: t('indulge.spa.imgAlt'),
      reveal: 'right',
    },
    {
      id: 'lifestyle',
      eyebrow: t('indulge.lifestyle.eyebrow'),
      title: t('indulge.lifestyle.title'),
      body: t('indulge.lifestyle.body'),
      link: t('indulge.lifestyle.link'),
      img: buziosForno,
      imgAlt: t('indulge.lifestyle.imgAlt'),
      reveal: 'left',
    },
  ]

  return (
    <section id="indulge" className="indulge">
      <div className="indulge__inner">
        {wellnessItems.map((item, i) => (
          <article
            key={item.id}
            className={`indulge__item ${i === 0 ? 'indulge__item--split indulge__item--split-img-left' : 'indulge__item--split'}`}
          >
            {/* Text */}
            <div className="indulge__text">
              <p className="indulge__eyebrow" data-reveal>{item.eyebrow}</p>
              <h2 className="indulge__title" data-reveal style={{ transitionDelay: '140ms' }}>{item.title}</h2>
              <p className="indulge__body" data-reveal style={{ transitionDelay: '240ms' }}>{item.body}</p>
              <a href="#indulge" className="indulge__link" data-reveal style={{ transitionDelay: '340ms' }}>
                {item.link}
                <span className="arrow">→</span>
              </a>
            </div>

            {/* Photo */}
            <div className="indulge__photo-wrap" data-reveal={item.reveal} style={{ transitionDelay: '150ms' }}>
              <img
                src={item.img}
                alt={item.imgAlt}
                className="indulge__photo"
              />
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
