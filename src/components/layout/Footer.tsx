import Link from 'next/link'
import { MapPin, Phone, Mail, ExternalLink, Printer } from 'lucide-react'

interface FooterProps {
  lang?: 'tr' | 'en'
}

const certifications = [
  { code: 'AS9100 Rev.C',      sub: { tr: 'Havacılık Kalite Yönetim Sistemi', en: 'Aerospace Quality Management'  } },
  { code: 'NADCAP NDT',        sub: { tr: 'Tahribatsız Muayene',               en: 'Non-Destructive Testing'       } },
  { code: 'NADCAP Composite',  sub: { tr: 'Kompozit İmalat',                   en: 'Composite Manufacturing'       } },
  { code: 'ISO 9001:2008',     sub: { tr: 'Kalite Yönetim Sistemi',            en: 'Quality Management System'     } },
]

const hizmetLinks = {
  tr: [
    { label: 'Kompozit Parça İmalatı',  href: '/hizmetler/kompozit-parca-imalati' },
    { label: 'Ana Parça Montajı',       href: '/hizmetler/ana-parca-montaji'      },
    { label: 'Mühendislik & Tasarım',   href: '/hizmetler/muhendislik-tasarim'    },
    { label: 'Takım & Aparat İmalatı',  href: '/hizmetler/takim-aparat-imalati'   },
  ],
  en: [
    { label: 'Composite Part Manufacturing', href: '/en/services/composite-part-manufacturing' },
    { label: 'Major Assembly',               href: '/en/services/major-assembly'               },
    { label: 'Engineering & Design',         href: '/en/services/engineering-design'           },
    { label: 'Tooling & Fixtures',           href: '/en/services/tooling-fixtures'             },
  ],
}

const hizliLinks = {
  tr: [
    { label: 'Hakkımızda',  href: '/hakkimizda'  },
    { label: 'Referanslar', href: '/referanslar' },
    { label: 'Yetenekler',  href: '/yetenekler'  },
    { label: 'Kalite',     href: '/kalite'       },
    { label: 'Projeler',   href: '/projeler'     },
    { label: 'İletişim',   href: '/iletisim'     },
  ],
  en: [
    { label: 'About Us',     href: '/en/about'        },
    { label: 'Capabilities', href: '/en/capabilities'  },
    { label: 'Quality',      href: '/en/quality'       },
    { label: 'Projects',     href: '/en/projects'      },
    { label: 'Contact',      href: '/en/contact'       },
  ],
}

export default function Footer({ lang = 'tr' }: FooterProps) {
  const year = new Date().getFullYear()

  return (
    <footer style={{ background: '#070E1A', borderTop: '1px solid rgba(212,165,116,0.2)' }}>
      <div className="divider-gold" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10">

          {/* Şirket */}
          <div>
            <Link href={lang === 'tr' ? '/' : '/en'} className="inline-flex mb-4">
              <img
                src="/images/logo-icon.png"
                alt="Yüksel Kompozit Teknolojileri"
                style={{ height: '55px', width: 'auto' }}
              />
            </Link>
            <p
              className="text-sm leading-relaxed mb-5"
              style={{ color: '#94A3B8', fontFamily: 'var(--font-body)' }}
            >
              {lang === 'tr'
                ? 'Havacılık ve savunma sanayii için yüksek performanslı kompozit çözümler.'
                : 'High-performance composite solutions for aerospace and defense.'}
            </p>
            <a
              href="https://www.linkedin.com/company/yuksel-kompozit"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-xs transition-colors duration-200 hover:text-white"
              style={{ color: '#94A3B8', fontFamily: 'var(--font-body)' }}
            >
              LinkedIn <ExternalLink size={11} />
            </a>
          </div>

          {/* Hizmetler */}
          <div>
            <h3
              className="font-heading text-lg tracking-widest uppercase mb-4"
              style={{ color: '#D4A574', fontFamily: 'var(--font-heading)' }}
            >
              {lang === 'tr' ? 'Hizmetler' : 'Services'}
            </h3>
            <ul className="space-y-2.5">
              {hizmetLinks[lang].map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    className="text-sm flex items-start gap-1.5 transition-colors duration-200 hover:text-white"
                    style={{ color: '#94A3B8', fontFamily: 'var(--font-body)' }}
                  >
                    <span style={{ color: 'rgba(212,165,116,0.5)', marginTop: '1px' }}>›</span>
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Hızlı Erişim */}
          <div>
            <h3
              className="font-heading text-lg tracking-widest uppercase mb-4"
              style={{ color: '#D4A574', fontFamily: 'var(--font-heading)' }}
            >
              {lang === 'tr' ? 'Hızlı Erişim' : 'Quick Links'}
            </h3>
            <ul className="space-y-2.5">
              {hizliLinks[lang].map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    className="text-sm flex items-start gap-1.5 transition-colors duration-200 hover:text-white"
                    style={{ color: '#94A3B8', fontFamily: 'var(--font-body)' }}
                  >
                    <span style={{ color: 'rgba(212,165,116,0.5)', marginTop: '1px' }}>›</span>
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* İletişim */}
          <div>
            <h3
              className="font-heading text-lg tracking-widest uppercase mb-4"
              style={{ color: '#D4A574', fontFamily: 'var(--font-heading)' }}
            >
              {lang === 'tr' ? 'İletişim' : 'Contact'}
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin size={15} style={{ color: '#D4A574', marginTop: '2px', flexShrink: 0 }} />
                <address
                  className="not-italic text-sm leading-relaxed"
                  style={{ color: '#94A3B8', fontFamily: 'var(--font-body)' }}
                >
                  {lang === 'tr'
                    ? 'Başkent Organize Sanayi Bölgesi\nSadi Türk Bulvarı No: 5\nTemelli, Ankara 06909\nTÜRKİYE'
                    : 'Başkent Organized Industrial Zone\nSadi Türk Blvd. No: 5\nTemelli, Ankara 06909\nTURKEY'}
                </address>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={15} style={{ color: '#D4A574', flexShrink: 0 }} />
                <a
                  href="tel:+903126401045"
                  className="text-sm transition-colors duration-200 hover:text-white"
                  style={{ color: '#94A3B8', fontFamily: 'var(--font-body)' }}
                >
                  +90 312 640 10 45
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Printer size={15} style={{ color: '#D4A574', flexShrink: 0 }} />
                <span
                  className="text-sm"
                  style={{ color: '#94A3B8', fontFamily: 'var(--font-body)' }}
                >
                  +90 312 640 10 09
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={15} style={{ color: '#D4A574', flexShrink: 0 }} />
                <a
                  href="mailto:info@yukselct.com"
                  className="text-sm transition-colors duration-200 hover:text-white"
                  style={{ color: '#94A3B8', fontFamily: 'var(--font-body)' }}
                >
                  info@yukselct.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Sertifikasyon Logoları */}
        <div className="mt-10 pt-8" style={{ borderTop: '1px solid rgba(255,255,255,0.06)' }}>
          <p
            className="text-xs tracking-widest uppercase mb-4"
            style={{ color: 'rgba(148,163,184,0.6)', fontFamily: 'var(--font-body)' }}
          >
            {lang === 'tr' ? 'Kalite & Sertifikasyonlar' : 'Quality & Certifications'}
          </p>
          <div className="flex flex-wrap gap-3">
            {certifications.map((c) => (
              <div
                key={c.code}
                className="flex flex-col items-center justify-center rounded px-4 py-2.5 min-w-[80px] transition-colors duration-200 hover:border-[#D4A574]/40"
                style={{
                  border: '1px solid rgba(212,165,116,0.2)',
                  background: 'rgba(255,255,255,0.02)',
                }}
              >
                <span
                  className="text-sm font-bold tracking-wider"
                  style={{ color: '#D4A574', fontFamily: 'var(--font-mono)' }}
                >
                  {c.code}
                </span>
                <span
                  className="text-[9px] text-center leading-tight mt-0.5"
                  style={{ color: 'rgba(148,163,184,0.6)', fontFamily: 'var(--font-body)' }}
                >
                  {c.sub[lang]}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Alt Bar */}
      <div style={{ borderTop: '1px solid rgba(255,255,255,0.05)' }}>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-3 text-xs"
               style={{ color: 'rgba(148,163,184,0.5)', fontFamily: 'var(--font-body)' }}>
            <p>
              © {year}{' '}
              {lang === 'tr'
                ? 'Yüksel Kompozit Teknolojileri A.Ş. Tüm hakları saklıdır.'
                : 'Yüksel Composite Technologies Inc. All rights reserved.'}
            </p>
            <div className="flex items-center gap-4">
              <Link href={lang === 'tr' ? '/gizlilik' : '/en/privacy'} className="hover:text-white transition-colors">
                {lang === 'tr' ? 'Gizlilik' : 'Privacy'}
              </Link>
              <span style={{ opacity: 0.3 }}>|</span>
              <Link href={lang === 'tr' ? '/kvkk' : '/en/gdpr'} className="hover:text-white transition-colors">
                {lang === 'tr' ? 'KVKK' : 'GDPR'}
              </Link>
              <span style={{ opacity: 0.3 }}>|</span>
              <span style={{ fontFamily: 'var(--font-mono)', fontSize: '10px' }}>Est. 2010</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
