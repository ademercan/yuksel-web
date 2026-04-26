'use client'

import { useState, useRef, FormEvent } from 'react'
import { motion, useInView } from 'framer-motion'
import { MapPin, Phone, Printer, Mail, Clock, Send, AlertCircle } from 'lucide-react'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'

function SectionLabel({ text }: { text: string }) {
  return (
    <div className="flex items-center gap-3 mb-4">
      <span className="h-px w-8" style={{ background: '#1E6BB5' }} />
      <span className="text-xs tracking-[0.3em] uppercase"
        style={{ color: '#1E6BB5', fontFamily: 'var(--font-mono)' }}>{text}</span>
    </div>
  )
}

/* ─── Form Tipi ───────────────────────────────────────────────── */
interface FormData {
  'ad-soyad': string
  sirket:     string
  eposta:     string
  telefon:    string
  mesaj:      string
}

interface FormErrors {
  'ad-soyad'?: string
  sirket?:     string
  eposta?:     string
  mesaj?:      string
}

/* ─── Form Validasyonu ────────────────────────────────────────── */
function validate(data: FormData): FormErrors {
  const errors: FormErrors = {}
  if (!data['ad-soyad'].trim()) errors['ad-soyad'] = 'Bu alan zorunludur.'
  if (!data.sirket.trim())      errors.sirket       = 'Bu alan zorunludur.'
  if (!data.eposta.trim()) {
    errors.eposta = 'Bu alan zorunludur.'
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.eposta)) {
    errors.eposta = 'Geçerli bir e-posta adresi giriniz.'
  }
  if (!data.mesaj.trim()) errors.mesaj = 'Bu alan zorunludur.'
  return errors
}

/* ─── İletişim Formu ──────────────────────────────────────────── */
function IletisimFormu() {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })

  const [form, setForm]     = useState<FormData>({ 'ad-soyad': '', sirket: '', eposta: '', telefon: '', mesaj: '' })
  const [errors, setErrors] = useState<FormErrors>({})

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setForm((prev) => ({ ...prev, [name]: value }))
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }))
    }
  }

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const validationErrors = validate(form)
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors)
      return
    }
    e.currentTarget.submit()
  }

  const inputStyle = (hasError: boolean): React.CSSProperties => ({
    width: '100%',
    background: 'rgba(10,22,40,0.6)',
    border: `1px solid ${hasError ? 'rgba(239,68,68,0.5)' : 'rgba(255,255,255,0.1)'}`,
    borderRadius: '6px',
    padding: '10px 14px',
    color: '#F8F9FA',
    fontFamily: 'var(--font-body)',
    fontSize: '14px',
    outline: 'none',
    transition: 'border-color 0.2s',
  })

  const labelStyle: React.CSSProperties = {
    display: 'block',
    fontSize: '11px',
    fontFamily: 'var(--font-mono)',
    color: 'rgba(108,117,125,0.8)',
    textTransform: 'uppercase',
    letterSpacing: '0.1em',
    marginBottom: '6px',
  }

  const errStyle: React.CSSProperties = {
    fontSize: '11px',
    color: 'rgba(239,68,68,0.8)',
    fontFamily: 'var(--font-body)',
    marginTop: '4px',
    display: 'flex',
    alignItems: 'center',
    gap: '4px',
  }

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 24 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6 }}
    >
      <form
        action="mailto:info@yukselct.com"
        method="POST"
        onSubmit={handleSubmit}
        noValidate
      >

        <div className="space-y-5">
          {/* Ad Soyad */}
          <div>
            <label style={labelStyle}>Ad Soyad <span style={{ color: '#1E6BB5' }}>*</span></label>
            <input
              name="ad-soyad"
              type="text"
              value={form['ad-soyad']}
              onChange={handleChange}
              placeholder="Adınız Soyadınız"
              style={inputStyle(!!errors['ad-soyad'])}
              autoComplete="name"
            />
            {errors['ad-soyad'] && (
              <div style={errStyle}><AlertCircle size={11} /> {errors['ad-soyad']}</div>
            )}
          </div>

          {/* Şirket */}
          <div>
            <label style={labelStyle}>Şirket <span style={{ color: '#1E6BB5' }}>*</span></label>
            <input
              name="sirket"
              type="text"
              value={form.sirket}
              onChange={handleChange}
              placeholder="Şirket adı"
              style={inputStyle(!!errors.sirket)}
              autoComplete="organization"
            />
            {errors.sirket && (
              <div style={errStyle}><AlertCircle size={11} /> {errors.sirket}</div>
            )}
          </div>

          {/* E-posta / Telefon */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label style={labelStyle}>E-posta <span style={{ color: '#1E6BB5' }}>*</span></label>
              <input
                name="eposta"
                type="email"
                value={form.eposta}
                onChange={handleChange}
                placeholder="ornek@sirket.com"
                style={inputStyle(!!errors.eposta)}
                autoComplete="email"
              />
              {errors.eposta && (
                <div style={errStyle}><AlertCircle size={11} /> {errors.eposta}</div>
              )}
            </div>
            <div>
              <label style={labelStyle}>Telefon</label>
              <input
                name="telefon"
                type="tel"
                value={form.telefon}
                onChange={handleChange}
                placeholder="+90 (___) ___ __ __"
                style={inputStyle(false)}
                autoComplete="tel"
              />
            </div>
          </div>

          {/* Mesaj */}
          <div>
            <label style={labelStyle}>Mesajınız <span style={{ color: '#1E6BB5' }}>*</span></label>
            <textarea
              name="mesaj"
              value={form.mesaj}
              onChange={handleChange}
              rows={5}
              placeholder="Projeniz hakkında detaylı bilgi veriniz…"
              style={{ ...inputStyle(!!errors.mesaj), resize: 'vertical', minHeight: '120px' }}
            />
            {errors.mesaj && (
              <div style={errStyle}><AlertCircle size={11} /> {errors.mesaj}</div>
            )}
          </div>

          {/* Gönder */}
          <button
            type="submit"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 text-sm font-semibold rounded transition-all duration-300"
            style={{
              background: '#1E6BB5',
              color: '#0A1628',
              fontFamily: 'var(--font-body)',
              cursor: 'pointer',
            }}
          >
            <Send size={16} />
            Mesajı Gönder
          </button>
        </div>
      </form>
    </motion.div>
  )
}

/* ─── İletişim Bilgileri ──────────────────────────────────────── */
function IletisimBilgileri() {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })

  const bilgiler = [
    {
      Icon: MapPin,
      baslik: 'Adres',
      satirlar: [
        'Başkent Organize Sanayi Bölgesi',
        'Sadi Türk Bulvarı No: 5',
        'Temelli, Ankara 06909',
        'Türkiye',
      ],
      link: null,
    },
    {
      Icon: Phone,
      baslik: 'Telefon',
      satirlar: ['+90 312 640 10 45'],
      link: 'tel:+903126401045',
    },
    {
      Icon: Printer,
      baslik: 'Faks',
      satirlar: ['+90 312 640 10 09'],
      link: null,
    },
    {
      Icon: Mail,
      baslik: 'E-posta',
      satirlar: ['info@yukselct.com'],
      link: 'mailto:info@yukselct.com',
    },
    {
      Icon: Clock,
      baslik: 'Çalışma Saatleri',
      satirlar: ['Pazartesi – Cuma: 08:00 – 17:30', 'Cumartesi: Kapalı'],
      link: null,
    },
  ]

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: 24 }}
      animate={inView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.6, delay: 0.15 }}
      className="space-y-5"
    >
      {bilgiler.map((b) => {
        const Icon = b.Icon
        return (
          <div
            key={b.baslik}
            className="flex items-start gap-4 p-5 rounded-lg"
            style={{ border: '1px solid rgba(30,107,181,0.12)', background: 'rgba(30,58,95,0.2)' }}
          >
            <div
              className="w-10 h-10 rounded-lg flex items-center justify-center shrink-0"
              style={{ background: 'rgba(30,107,181,0.1)', border: '1px solid rgba(30,107,181,0.25)' }}
            >
              <Icon size={17} style={{ color: '#1E6BB5' }} strokeWidth={1.5} />
            </div>
            <div>
              <h4
                className="text-xs uppercase tracking-widest mb-1.5"
                style={{ color: '#1E6BB5', fontFamily: 'var(--font-mono)' }}
              >
                {b.baslik}
              </h4>
              {b.satirlar.map((satir, i) =>
                b.link && i === 0 ? (
                  <a
                    key={satir}
                    href={b.link}
                    className="block text-sm transition-colors duration-150"
                    style={{ color: '#F8F9FA', fontFamily: 'var(--font-body)' }}
                  >
                    {satir}
                  </a>
                ) : (
                  <p
                    key={satir}
                    className="text-sm"
                    style={{ color: i === 0 ? '#F8F9FA' : '#6C757D', fontFamily: 'var(--font-body)' }}
                  >
                    {satir}
                  </p>
                )
              )}
            </div>
          </div>
        )
      })}

      {/* Harita Placeholder */}
      <div
        className="rounded-lg overflow-hidden flex flex-col items-center justify-center h-52"
        style={{ border: '1px solid rgba(30,107,181,0.12)', background: 'rgba(10,22,40,0.6)' }}
      >
        <MapPin size={32} style={{ color: 'rgba(30,107,181,0.4)', marginBottom: '8px' }} />
        <p className="text-sm mb-1" style={{ color: '#6C757D', fontFamily: 'var(--font-body)' }}>
          Başkent Organize Sanayi Bölgesi
        </p>
        <p className="text-xs" style={{ color: 'rgba(108,117,125,0.6)', fontFamily: 'var(--font-mono)' }}>
          Temelli / Ankara — Google Maps
        </p>
        <a
          href="https://maps.google.com/?q=Başkent+Organize+Sanayi+Bölgesi+Temelli+Ankara"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-3 text-xs underline transition-colors duration-150"
          style={{ color: '#1E6BB5', fontFamily: 'var(--font-body)' }}
        >
          Haritada Göster →
        </a>
      </div>
    </motion.div>
  )
}

/* ─── Sayfa ───────────────────────────────────────────────────── */
export default function IletisimSayfasi() {
  const heroRef = useRef<HTMLDivElement>(null)
  const heroInView = useInView(heroRef, { once: true })

  return (
    <>
      <Header />
      <main>
        {/* Hero */}
        <section
          className="relative pt-36 pb-20 overflow-hidden"
          style={{ background: '#0A1628' }}
        >
          <div className="absolute inset-0 bg-carbon-pattern opacity-30" />
          <div className="absolute inset-0 bg-tech-grid" />
          <div className="divider-gold absolute bottom-0 left-0 right-0" />

          <div ref={heroRef} className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={heroInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7 }}
            >
              <SectionLabel text="İletişim" />
              <h1
                className="font-heading text-5xl sm:text-7xl md:text-8xl uppercase leading-none tracking-wide mb-6"
                style={{ color: '#F8F9FA', fontFamily: 'var(--font-heading)' }}
              >
                Teklif &amp;{' '}
                <span className="text-gradient-gold">İletişim</span>
              </h1>
              <p
                className="max-w-2xl text-base sm:text-lg leading-relaxed"
                style={{ color: '#6C757D', fontFamily: 'var(--font-body)' }}
              >
                Projeniz için teklif almak veya teknik sorularınız için
                formu doldurun. Teknik ekibimiz 24 saat içinde yanıt verir.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Form + Bilgiler */}
        <section className="py-20 md:py-28">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
              {/* Form — geniş sütun */}
              <div className="lg:col-span-3">
                <div className="mb-8">
                  <SectionLabel text="Teklif Formu" />
                  <h2 className="font-heading text-3xl md:text-4xl uppercase tracking-wide"
                    style={{ color: '#F8F9FA', fontFamily: 'var(--font-heading)' }}>
                    Mesaj <span className="text-gradient-gold">Gönderin</span>
                  </h2>
                  <p className="mt-2 text-sm" style={{ color: '#6C757D', fontFamily: 'var(--font-body)' }}>
                    <span style={{ color: '#1E6BB5' }}>*</span> ile işaretli alanlar zorunludur.
                  </p>
                </div>
                <IletisimFormu />
              </div>

              {/* Bilgiler — dar sütun */}
              <div className="lg:col-span-2">
                <div className="mb-8">
                  <SectionLabel text="Bize Ulaşın" />
                  <h2 className="font-heading text-3xl md:text-4xl uppercase tracking-wide"
                    style={{ color: '#F8F9FA', fontFamily: 'var(--font-heading)' }}>
                    İletişim <span className="text-gradient-gold">Bilgileri</span>
                  </h2>
                </div>
                <IletisimBilgileri />
              </div>
            </div>
          </div>
        </section>

        {/* Bayiler / Yurt Dışı */}
        <section
          className="py-16 text-center"
          style={{ background: 'rgba(30,58,95,0.25)', borderTop: '1px solid rgba(30,107,181,0.1)' }}
        >
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <p className="font-body text-sm mb-2"
              style={{ color: '#6C757D', fontFamily: 'var(--font-body)' }}>
              Yurt dışı satış ve ihracat sorguları için:
            </p>
            <a
              href="mailto:export@yukselct.com"
              className="font-body font-semibold text-base transition-colors duration-150"
              style={{ color: '#1E6BB5', fontFamily: 'var(--font-body)' }}
            >
              export@yukselct.com
            </a>
          </div>
        </section>
      </main>
      <Footer lang="tr" />
    </>
  )
}
