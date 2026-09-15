import { useState, useEffect } from 'react'
import './Header.css'
import { LANGS, useLang } from '../i18n'
import logo from '../assets/logo-la-borie.avif'

export default function Header({ onBookNow }) {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const { lang, setLang, t } = useLang()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [menuOpen])

  const primaryNav = [
    { label: t('header.navHome'), href: '#hero' },
    { label: t('header.navHistory'), href: '#about' },
    { label: t('header.navRooms'), href: '#rooms' },
    { label: t('header.navDining'), href: '#dining' },
    { label: t('header.navExperiences'), href: '#captivating' },
    { label: t('header.navWellness'), href: '#indulge' },
    { label: t('header.navWeddings'), href: '#floral' },
  ]

  const megaMenuSections = [
    {
      title: t('header.secHotel'),
      links: t('header.secHotelLinks'),
    },
    {
      title: t('header.secDiscover'),
      links: t('header.secDiscoverLinks'),
    },
  ]

  return (
    <>
      <header className={`header ${scrolled ? 'header--scrolled' : ''}`}>
        <nav className="header__nav">
          {/* Left zone */}
          <div className="header__zone header__zone--left">
            <button
              className="header__menu-btn"
              onClick={() => setMenuOpen(true)}
              aria-label={t('header.menu')}
            >
              <span className="header__menu-bars">
                <span /><span /><span />
              </span>
              <span className="header__menu-label">{t('header.menu')}</span>
            </button>
          </div>

          {/* Centre — Logo */}
          <a href="#hero" className="header__logo">
            <img src={logo} alt="Le Relais La Borie" className="header__logo-img" />
          </a>

          {/* Right zone */}
          <div className="header__zone header__zone--right">
            <div className="header__lang" role="group" aria-label="Language / Idioma / Langue / Idioma">
              {LANGS.map((code) => (
                <button
                  key={code}
                  type="button"
                  className={`header__lang-btn ${lang === code ? 'is-active' : ''}`}
                  onClick={() => setLang(code)}
                  aria-pressed={lang === code}
                  aria-label={`${t('langName.' + code)} (${code.toUpperCase()})`}
                >
                  {code.toUpperCase()}
                </button>
              ))}
            </div>
            <button className="header__book-btn" onClick={onBookNow}>
              {t('header.book')}
            </button>
          </div>
        </nav>
      </header>

      {/* Mega-menu overlay */}
      <div className={`mega-menu ${menuOpen ? 'mega-menu--open' : ''}`} aria-hidden={!menuOpen}>
        <div className="mega-menu__inner">
          {/* Close */}
          <button
            className="mega-menu__close"
            onClick={() => setMenuOpen(false)}
            aria-label={t('header.closeMenu')}
          >
            <span />
            <span />
          </button>

          {/* Brand */}
          <div className="mega-menu__brand">
            <img src={logo} alt="Le Relais La Borie" className="mega-menu__logo" />
          </div>

          {/* Two-column nav */}
          <div className="mega-menu__grid">
            {/* Primary links */}
            <nav className="mega-menu__primary">
              {primaryNav.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="mega-menu__primary-link"
                  onClick={() => setMenuOpen(false)}
                >
                  <span className="mega-menu__bullet">•</span>
                  {item.label}
                </a>
              ))}
            </nav>

            {/* Secondary links */}
            <nav className="mega-menu__secondary">
              {megaMenuSections.map((section) => (
                <div key={section.title} className="mega-menu__sec-group">
                  <h4 className="mega-menu__sec-title">{section.title}</h4>
                  {section.links.map((link) => (
                    <a
                      key={link}
                      href="#hero"
                      className="mega-menu__sec-link"
                      onClick={() => setMenuOpen(false)}
                    >
                      {link}
                    </a>
                  ))}
                </div>
              ))}
            </nav>
          </div>

          {/* Bottom utility row */}
          <div className="mega-menu__bottom">
            <a href="#hero" className="mega-menu__util" onClick={() => setMenuOpen(false)}>{t('header.utilPress')}</a>
            <a href="#contato" className="mega-menu__util" onClick={() => setMenuOpen(false)}>{t('header.utilContacts')}</a>
            <a href="#hero" className="mega-menu__util" onClick={() => setMenuOpen(false)}>{t('header.utilCareers')}</a>
          </div>
        </div>
      </div>

      {/* Overlay backdrop */}
      {menuOpen && (
        <div
          className="mega-menu__backdrop"
          onClick={() => setMenuOpen(false)}
          aria-hidden="true"
        />
      )}
    </>
  )
}