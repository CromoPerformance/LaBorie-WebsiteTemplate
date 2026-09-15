import { useEffect, useRef, useState } from 'react'
import './HistoriaSection.css'
import { useLang } from '../i18n'

export default function HistoriaSection() {
  const [count, setCount] = useState(0)
  const numRef = useRef(null)
  const started = useRef(false)
  const { t } = useLang()
  const title = t('historia.title')

  useEffect(() => {
    const el = numRef.current
    if (!el) return
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true
          const duration = 5200
          const start = performance.now()
          const tick = (now) => {
            const p = Math.min((now - start) / duration, 1)
            const eased = 1 - Math.pow(1 - p, 3)
            setCount(Math.round(eased * 40))
            if (p < 1) requestAnimationFrame(tick)
          }
          requestAnimationFrame(tick)
        }
      },
      { threshold: 0.4 }
    )
    io.observe(el)
    return () => io.disconnect()
  }, [])

  return (
    <section id="historia" className="historia">
      <div className="historia__inner">

        {/* Eyebrow — thin editorial rule */}
        <div className="historia__kicker" data-reveal>
          <span className="historia__kicker-rule" />
          <span className="historia__kicker-text">{t('historia.kicker')}</span>
        </div>

        {/* Headline block — giant number + editorial title */}
        <div className="historia__head">
          <div className="historia__num" ref={numRef} aria-label={t('historia.numAria')} data-reveal>
            {count}
          </div>
          <div className="historia__head-text" data-reveal style={{ transitionDelay: '160ms' }}>
            <h2 className="historia__title">
              {title[0]}
              <br />
              <em>{title[1]}</em>
            </h2>
            <div className="historia__rule" />
            <p className="historia__lede">
              {t('historia.lede')}
            </p>
          </div>

          {/* Official seal — 40 years */}
          <div className="historia__seal" aria-hidden="true" data-reveal="fade" style={{ transitionDelay: '240ms' }}>
            <svg viewBox="0 0 100 100" role="img" focusable="false">
              <defs>
                <path
                  id="sealRound"
                  d="M 50,50 m -35,0 a 35,35 0 1,1 70,0 a 35,35 0 1,1 -70,0"
                />
              </defs>
              <circle cx="50" cy="50" r="48" className="seal-ring seal-ring--outer" />
              <circle cx="50" cy="50" r="40" className="seal-ring seal-ring--inner" />
              <text className="seal-text__upper">
                <textPath href="#sealRound">
                  LE RELAIS LA BORIE · EST. 1986 · BÚZIOS ·
                </textPath>
              </text>
            </svg>
          </div>
        </div>

        {/* Editorial columns */}
        <div className="historia__cols">
          <div className="historia__col" data-reveal>
            <p className="historia__col-label">{t('historia.col1Label')}</p>
            <p className="historia__col-text">
              {t('historia.col1Text')}
            </p>
          </div>

          <div className="historia__col" data-reveal style={{ transitionDelay: '160ms' }}>
            <p className="historia__col-label">{t('historia.col2Label')}</p>
            <p className="historia__col-text">
              {t('historia.col2Text')}
            </p>
          </div>
        </div>

        {/* Timeline */}
      </div>
    </section>
  )
}