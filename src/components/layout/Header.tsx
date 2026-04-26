'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState, useEffect } from 'react'
import { Menu, X, ChevronDown } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

interface NavLink {
  label: { tr: string; en: string }
  href:  { tr: string; en: string }
  children?: NavLink[]
}

const navLinks: NavLink[] = [
  {
    label: { tr: 'Hakkımızda', en: 'About Us' },
    href:  { tr: '/hakkimizda', en: '/en/about' },
  },
  {
    label: { tr: 'Hizmetler', en: 'Services' },
    href:  { tr: '/hizmetler', en: '/en/services' },
    children: [
      {
        label: { tr: 'Kompozit Parça İmalatı', en: 'Composite Part Manufacturing' },
        href:  { tr: '/hizmetler/kompozit-parca-imalati', en: '/en/services/composite-part-manufacturing' },
      },
      {
        label: { tr: 'Ana Parça Montajı', en: 'Major Assembly' },
        href:  { tr: '/hizmetler/ana-parca-montaji', en: '/en/services/major-assembly' },
      },
      {
        label: { tr: 'Mühendislik & Tasarım', en: 'Engineering & Design' },
        href:  { tr: '/hizmetler/muhendislik-tasarim', en: '/en/services/engineering-design' },
      },
      {
        label: { tr: 'Takım & Aparat İmalatı', en: 'Tooling & Fixtures' },
        href:  { tr: '/hizmetler/takim-aparat-imalati', en: '/en/services/tooling-fixtures' },
      },
    ],
  },
  {
    label: { tr: 'Yetenekler', en: 'Capabilities' },
    href:  { tr: '/yetenekler', en: '/en/capabilities' },
  },
  {
    label: { tr: 'Kalite', en: 'Quality' },
    href:  { tr: '/kalite', en: '/en/quality' },
  },
  {
    label: { tr: 'İletişim', en: 'Contact' },
    href:  { tr: '/iletisim', en: '/en/contact' },
  },
]


export default function Header() {
  const pathname = usePathname()
  const [isOpen,         setIsOpen]         = useState(false)
  const [scrolled,       setScrolled]       = useState(false)
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)

  const lang: 'tr' | 'en' = pathname.startsWith('/en') ? 'en' : 'tr'

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [isOpen])

  const toggleLang = () => {
    window.location.href = lang === 'tr'
      ? '/en' + pathname
      : pathname.replace(/^\/en/, '') || '/'
  }

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      style={{
        background: scrolled || isOpen
          ? 'rgba(10,22,40,0.96)'
          : 'linear-gradient(to bottom, rgba(10,22,40,0.75), transparent)',
        backdropFilter: scrolled || isOpen ? 'blur(12px)' : 'none',
        borderBottom: scrolled || isOpen ? '1px solid rgba(30,107,181,0.12)' : 'none',
        boxShadow: scrolled ? '0 4px 24px rgba(0,0,0,0.3)' : 'none',
      }}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">

          {/* Logo */}
          <Link
            href={lang === 'tr' ? '/' : '/en'}
            className="flex items-center"
            aria-label="Yüksel Kompozit Teknolojileri — Ana Sayfa"
          >
            <img
              src="/images/logo.png"
              alt="Yüksel Kompozit Teknolojileri"
              style={{ height: '50px', width: 'auto', filter: 'brightness(0) invert(1)', background: 'transparent' }}
            />
          </Link>

          {/* Masaüstü Nav */}
          <nav className="hidden lg:flex items-center gap-1" aria-label="Ana navigasyon">
            {navLinks.map((link) => (
              <div
                key={link.href.tr}
                className="relative"
                onMouseEnter={() => link.children && setActiveDropdown(link.href.tr)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <Link
                  href={link.href[lang]}
                  className="flex items-center gap-1 px-3 py-2 text-sm rounded transition-colors duration-200 font-body"
                  style={{
                    color: pathname === link.href[lang] ? '#1E6BB5' : 'rgba(248,249,250,0.8)',
                    fontFamily: 'var(--font-body)',
                  }}
                >
                  {link.label[lang]}
                  {link.children && (
                    <ChevronDown
                      size={14}
                      style={{
                        transform: activeDropdown === link.href.tr ? 'rotate(180deg)' : 'rotate(0deg)',
                        transition: 'transform 0.2s',
                      }}
                    />
                  )}
                </Link>

                {/* Dropdown */}
                <AnimatePresence>
                  {link.children && activeDropdown === link.href.tr && (
                    <motion.div
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 8 }}
                      transition={{ duration: 0.15 }}
                      className="absolute top-full left-0 pt-1 min-w-[240px]"
                    >
                      <div className="glass rounded-lg overflow-hidden py-1 shadow-xl">
                        {link.children.map((child) => (
                          <Link
                            key={child.href.tr}
                            href={child.href[lang]}
                            className="block px-4 py-2.5 text-sm font-body transition-colors duration-150"
                            style={{
                              color: 'rgba(248,249,250,0.8)',
                              borderBottom: '1px solid rgba(255,255,255,0.05)',
                              fontFamily: 'var(--font-body)',
                            }}
                            onMouseEnter={(e) => (e.currentTarget.style.color = '#1E6BB5')}
                            onMouseLeave={(e) => (e.currentTarget.style.color = 'rgba(248,249,250,0.8)')}
                          >
                            {child.label[lang]}
                          </Link>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </nav>

          {/* Sağ: Dil + CTA + Hamburger */}
          <div className="flex items-center gap-2">
            <button
              onClick={toggleLang}
              className="hidden sm:flex items-center px-3 py-1.5 text-xs font-body font-semibold
                         rounded transition-all duration-200 tracking-widest uppercase"
              style={{
                border: '1px solid rgba(30,107,181,0.4)',
                color: '#1E6BB5',
                fontFamily: 'var(--font-body)',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = '#1E6BB5'
                e.currentTarget.style.color = '#F8F9FA'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = 'transparent'
                e.currentTarget.style.color = '#1E6BB5'
              }}
              aria-label={lang === 'tr' ? 'Switch to English' : "Türkçe'ye geç"}
            >
              {lang === 'tr' ? 'EN' : 'TR'}
            </button>

            <Link
              href={lang === 'tr' ? '/iletisim' : '/en/contact'}
              className="hidden lg:inline-flex items-center gap-2 px-4 py-2 text-xs font-body font-semibold rounded transition-all duration-300"
              style={{
                background: '#1E6BB5',
                color: '#F8F9FA',
                fontFamily: 'var(--font-body)',
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.background = '#4A90D9'
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.background = '#1E6BB5'
              }}
            >
              {lang === 'tr' ? 'Teklif Al' : 'Get a Quote'}
            </Link>

            <button
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden p-2 transition-colors duration-200"
              style={{ color: '#F8F9FA' }}
              aria-label={isOpen ? 'Menüyü kapat' : 'Menüyü aç'}
              aria-expanded={isOpen}
            >
              <AnimatePresence mode="wait" initial={false}>
                {isOpen ? (
                  <motion.span key="close"
                    initial={{ rotate: -90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 90, opacity: 0 }}
                    transition={{ duration: 0.15 }}
                    style={{ display: 'block' }}
                  >
                    <X size={24} />
                  </motion.span>
                ) : (
                  <motion.span key="menu"
                    initial={{ rotate: 90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: -90, opacity: 0 }}
                    transition={{ duration: 0.15 }}
                    style={{ display: 'block' }}
                  >
                    <Menu size={24} />
                  </motion.span>
                )}
              </AnimatePresence>
            </button>
          </div>
        </div>
      </div>

      {/* Mobil Menü */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
            className="lg:hidden overflow-hidden"
            style={{ background: 'rgba(10,22,40,0.98)', borderTop: '1px solid rgba(30,107,181,0.1)' }}
          >
            <nav className="mx-auto max-w-7xl px-4 sm:px-6 py-4" aria-label="Mobil navigasyon">
              {navLinks.map((link, index) => (
                <motion.div
                  key={link.href.tr}
                  initial={{ opacity: 0, x: -16 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.06 }}
                >
                  <Link
                    href={link.href[lang]}
                    onClick={() => setIsOpen(false)}
                    className="flex items-center py-3 text-base font-body font-medium transition-colors duration-150"
                    style={{
                      color: pathname === link.href[lang] ? '#1E6BB5' : 'rgba(248,249,250,0.8)',
                      borderBottom: '1px solid rgba(255,255,255,0.05)',
                      fontFamily: 'var(--font-body)',
                    }}
                  >
                    {link.label[lang]}
                  </Link>
                  {link.children && (
                    <div className="pl-4" style={{ borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
                      {link.children.map((child) => (
                        <Link
                          key={child.href.tr}
                          href={child.href[lang]}
                          onClick={() => setIsOpen(false)}
                          className="flex items-center py-2.5 text-sm font-body transition-colors duration-150"
                          style={{ color: '#6C757D', fontFamily: 'var(--font-body)' }}
                        >
                          <span style={{ color: 'rgba(30,107,181,0.4)', marginRight: '8px' }}>›</span>
                          {child.label[lang]}
                        </Link>
                      ))}
                    </div>
                  )}
                </motion.div>
              ))}
              <div className="flex items-center justify-between pt-4 mt-2">
                <button
                  onClick={() => { setIsOpen(false); toggleLang() }}
                  className="flex items-center px-4 py-2 text-sm font-body font-semibold rounded tracking-widest uppercase"
                  style={{ border: '1px solid rgba(30,107,181,0.4)', color: '#1E6BB5', fontFamily: 'var(--font-body)' }}
                >
                  {lang === 'tr' ? 'EN — English' : 'TR — Türkçe'}
                </button>
                <Link
                  href={lang === 'tr' ? '/iletisim' : '/en/contact'}
                  onClick={() => setIsOpen(false)}
                  className="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-body font-semibold rounded"
                  style={{ background: '#1E6BB5', color: '#F8F9FA', fontFamily: 'var(--font-body)' }}
                >
                  {lang === 'tr' ? 'Teklif Al' : 'Get a Quote'}
                </Link>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
