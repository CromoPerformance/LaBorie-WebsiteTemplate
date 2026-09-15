import { useEffect, useRef, useState } from 'react'
import './SuitesCarousel.css'
import { useLang } from '../i18n'

const suiteList = [
  { key: 'luaDeMel', id: 'lua-de-mel', img: '/rooms/lua-de-mel.avif' },
  { key: 'suiteMasterMar', id: 'suite-master-mar', img: '/rooms/suite-master-mar.avif' },
  { key: 'suiteMasterJardim', id: 'suite-master-jardim', img: '/rooms/suite-master-jardim.avif' },
  { key: 'masterMar', id: 'master-mar', img: '/rooms/master-mar.avif' },
  { key: 'masterJardim', id: 'master-jardim', img: '/rooms/master-jardim.avif' },
  { key: 'confortMar', id: 'confort-mar', img: '/rooms/confort-mar.avif' },
  { key: 'confortJardim', id: 'confort-jardim', img: '/rooms/confort-jardim.avif' },
  { key: 'confortJunior', id: 'confort-junior', img: '/rooms/confort-junior.avif' },
]

export default function SuitesCarousel() {
  const [index, setIndex] = useState(0)
  const [step, setStep] = useState(0)
  const trackRef = useRef(null)
  const { t } = useLang()

  const suites = suiteList.map((s) => {
    const title = t('suites.list.' + s.key + '.title')
    return {
      ...s,
      title,
      body: t('suites.list.' + s.key + '.body'),
      imgAlt: title,
    }
  })

  const len = suites.length
  const maxIndex = len // loop point: clone of first suite

  useEffect(() => {
    const track = trackRef.current
    if (!track) return
    const card = track.querySelector('.suites-carousel__card')
    const measure = () => {
      if (!card) return
      const gap = parseFloat(getComputedStyle(track).gap) || 0
      setStep(card.offsetWidth + gap)
    }
    measure()
    window.addEventListener('resize', measure)
    return () => window.removeEventListener('resize', measure)
  }, [])

  function prev() {
    setIndex((i) => (i === 0 ? maxIndex : i - 1))
  }
  function next() {
    setIndex((i) => (i >= maxIndex ? 0 : i + 1))
  }

  return (
    <div className="suites-carousel" data-reveal style={{ transitionDelay: '140ms' }}>
      <div className="suites-carousel__viewport">
        <div
          ref={trackRef}
          className="suites-carousel__track"
          style={{ transform: `translateX(-${index * step}px)` }}
        >
          {[...suites, ...suites].map((suite, i) => (
            <article key={`${suite.id}-${i}`} className="suites-carousel__card">
              <div className="suites-carousel__card-img-wrap">
                <img
                  src={suite.img}
                  alt={suite.imgAlt}
                  className="suites-carousel__card-img"
                />
              </div>
              <div className="suites-carousel__card-body">
                <h3 className="suites-carousel__card-title">{suite.title}</h3>
                <p className="suites-carousel__card-body-text">{suite.body}</p>
                <a href="#rooms" className="suites-carousel__card-link">
                  {t('suites.view')}
                  <span className="arrow">→</span>
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>

      <div className="suites-carousel__controls">
        <button
          className="suites-carousel__btn"
          onClick={prev}
          aria-label={t('suites.prev')}
        >
          ←
        </button>
        <button
          className="suites-carousel__btn"
          onClick={next}
          aria-label={t('suites.next')}
        >
          →
        </button>
      </div>
    </div>
  )
}