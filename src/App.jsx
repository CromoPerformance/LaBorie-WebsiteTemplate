import { useState, useEffect } from 'react'
import { LanguageProvider, useLang } from './i18n'
import Header from './components/Header'
import HeroSection from './components/HeroSection'
import AboutSection from './components/AboutSection'
import HistoriaSection from './components/HistoriaSection'
import DiningSection from './components/DiningSection'
import RoomsSection from './components/RoomsSection'
import IndulgeSection from './components/IndulgeSection'
import FloralSection from './components/FloralSection'
import ContactSection from './components/ContactSection'
import BookingModal from './components/BookingModal'
import './App.css'

const sectionIds = [
  'hero',
  'about',
  'historia',
  'dining',
  'rooms',
  'floral',
  'indulge',
  'contato',
]

function Site() {
  const [bookingOpen, setBookingOpen] = useState(false)
  const [currentSection, setCurrentSection] = useState('hero')
  const { t } = useLang()

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setCurrentSection(entry.target.id)
          }
        })
      },
      { threshold: 0.3 }
    )

    sectionIds.forEach((id) => {
      const el = document.getElementById(id)
      if (el) observer.observe(el)
    })

    return () => observer.disconnect()
  }, [])

  // Global scroll-reveal observer — reveals [data-reveal] elements once
  useEffect(() => {
    const els = document.querySelectorAll('[data-reveal]')
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-revealed')
            io.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.18, rootMargin: '0px 0px -6% 0px' }
    )
    els.forEach((el) => io.observe(el))
    return () => io.disconnect()
  }, [])

  return (
    <div className="app">
      <Header
        onBookNow={() => setBookingOpen(true)}
        currentSection={currentSection}
      />

      <main>
        <HeroSection onBookNow={() => setBookingOpen(true)} />
        <AboutSection onBookNow={() => setBookingOpen(true)} />
        <HistoriaSection />
        <DiningSection onBookNow={() => setBookingOpen(true)} />
        <RoomsSection onBookNow={() => setBookingOpen(true)} />
        <FloralSection />
        <IndulgeSection />
        <ContactSection />
      </main>

      <footer className="footer">
        <div className="footer__inner">
          {/* Left column — navigation */}
          <div className="footer__col-left">
            <div className="footer__nav-group">
              <h4>{t('footer.explore')}</h4>
              <ul>
                <li><a href="#hero">{t('footer.linkHotel')}</a></li>
                <li><a href="#rooms">{t('footer.linkRooms')}</a></li>
                <li><a href="#dining">{t('footer.linkDining')}</a></li>
                <li><a href="#indulge">{t('footer.linkWellness')}</a></li>
                <li><a href="#floral">{t('footer.linkWeddings')}</a></li>
              </ul>
            </div>
          </div>

          {/* Centre — brand */}
          <div className="footer__brand">
            <svg
              viewBox="0 0 96 96"
              className="footer__logo"
              role="img"
              aria-label="Le Relais La Borie"
            >
              <g fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
                <path d="M48 78 C 33 72 22 62 18 50 C 15 42 18 36 25 36 C 30 36 34 39 36 44" />
                <path d="M48 78 C 63 72 74 62 78 50 C 81 42 78 36 71 36 C 66 36 62 39 60 44" />
                <path d="M24 34 C 24 24 34 18 48 18 C 62 18 72 24 72 34 L 72 40 C 68 48 60 52 60 52 L 60 74" />
                <path d="M72 26 C 76 20 81 18 84 18 M72 30 C 79 26 84 24 87 23" />
                <path d="M24 26 C 20 20 15 18 12 18 M24 30 C 17 26 12 24 9 23" />
                <circle cx="42" cy="40" r="2.2" />
                <circle cx="54" cy="40" r="2.2" />
                <path d="M44 47 L 48 50 L 52 47" />
                <path d="M40 57 C 46 62 50 62 56 57" />
                <path d="M33 66 L 63 66" />
                <path d="M36 71 L 44 69 M60 71 L 52 69" />
              </g>
            </svg>
            <div className="footer__rule" />
            <span className="footer__logo-name">Le Relais La Borie</span>
            <span className="footer__tagline">{t('footer.tagline')}</span>
          </div>

          {/* Right column — contact */}
          <div className="footer__col-right">
            <div className="footer__contact">
              <p>{t('footer.address1')}</p>
              <p>{t('footer.address2')}</p>
              <p>+55 (22) 2620-8504</p>
              <p>reservas@laborie.com.br</p>
            </div>
          </div>

          {/* Bottom bar */}
          <div className="footer__bottom">
            <p className="footer__copy">{t('footer.copy')}</p>
            <div className="footer__legal">
              <a href="#">{t('footer.privacy')}</a>
              <a href="#">{t('footer.terms')}</a>
              <a href="#">{t('footer.careers')}</a>
            </div>
          </div>
        </div>
      </footer>

      <BookingModal
        isOpen={bookingOpen}
        onClose={() => setBookingOpen(false)}
      />
    </div>
  )
}

export default function App() {
  return (
    <LanguageProvider>
      <Site />
    </LanguageProvider>
  )
}
