'use client'

import { useState, useRef, FormEvent } from 'react'
import { motion, useInView } from 'framer-motion'
import { MapPin, Phone, Mail, Clock, Send, CheckCircle2, AlertCircle } from 'lucide-react'
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
  ad:       string
  soyad:    string
  sirket:   string
  eposta:   string
  telefon:  string
  konu:     string
  mesaj:    string
}

interface FormErrors {
  ad?:      string
  soyad?:   string
  sirket?:  string
  eposta?:  string
  mesaj?:   string
}

/* ─── Form Validasyonu ────────────────────────────────────────── */
function validate(data: FormData): FormErrors {
  const errors: FormErrors = {}
  if (!data.ad.trim())     errors.ad      = 'Ad zorunludur.'
  if (!data.soyad.trim())  errors.soyad   = 'Soyad zorunludur.'
  if (!data.sirket.trim()) errors.sirket  = 'Şirket adı zorunludur.'
  if (!data.eposta.trim()) {
    errors.eposta = 'E-posta zorunludur.'
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.eposta)) {
    errors.eposta = 'Geçerli bir e-posta adresi giriniz.'
  }
  if (!data.mesaj.trim() || data.mesaj.trim().length < 20) {
    errors.mesaj = 'Mesajınız en az 20 karakter olmalıdır.'
  }
  return errors
}

/* ─── İletişim Formu ──────────────────────────────────────────── */
function IletisimFormu() {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })

  const [form, setForm]       = useState<FormData>({ ad: '', soyad: '', sirket: '', eposta: '', telefon: '', konu: '', mesaj: '' })
  const [errors, setErrors]   = useState<FormErrors>({})
  const [status, setStatus]   = useState<'idle' | 'sending' | 'success' | 'error'>('idle')

  const konular = [
    'Kompozit Parça İmalatı',
    'Ana Parça Montajı',
    'Mühendislik & Tasarım',
    'Takım & Aparat İmalatı',
    'Kalite & Sertifikasyon',
    'Diğer',
  ]

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setForm((prev) => ({ ...prev, [name]: value }))
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }))
    }
  }

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()
    const validationErrors = validate(form)
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors)
      return
    }
    setStatus('sending')
    /* Gerçek API entegrasyonu buraya gelecek (Resend / Nodemailer) */
    await new Promise((r) => setTimeout(r, 1500))
    setStatus('success')
  }

  const inputStyle = (hasError: boolean) => ({
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
  } as React.CSSProperties)

  const labelStyle = {
    display: 'block',
    fontSize: '11px',
    fontFamily: 'var(--font-mono)',
    color: 'rgba(108,117,125,0.8)',
    textTransform: 'uppercase' as const,
    letterSpacing: '0.1em',
    marginBottom: '6px',
  }

  const errStyle = {
    fontSize: '11px',
    color: 'rgba(239,68,68,0.8)',
    fontFamily: 'var(--font-body)',
    marginTop: '4px',
    display: 'flex',
    alignItems: 'center',
    gap: '4px',
  }

  if (status === 'success') {
    return (
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="p-10 rounded-xl text-center"
        style={{ border: '1px solid rgba(30,107,181,0.25)', background: 'rgba(30,58,95,0.3)' }}
      >
        <CheckCircle2 size={48} style={{ color: '#1E6BB5', margin: '0 auto 16px' }} />
        <h3 className="font-heading text-2xl uppercase tracking-wide mb-3"
          style={{ color: '#F8F9FA', fontFamily: 'var(--font-heading)' }}>
          Mesajınız Alındı
        </h3>
        <p className="text-sm leading-relaxed"
          style={{ color: '#6C757D', fontFamily: 'var(--font-body)' }}>
          En kısa sürede, genellikle 24 saat içinde teknik ekibimiz tarafından
          dönüş yapılacaktır. Teşekkür ederiz.
        </p>
      </motion.div>
    )
  }

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 24 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6 }}
    >
      <form onSubmit={handleSubmit} noValidate>
        <div className="space-y-5">
          {/* Ad / Soyad */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label style={labelStyle}>Ad <span style={{ color: '#1E6BB5' }}>*</span></label>
              <input
                name="ad"
                type="text"
                value={form.ad}
                onChange={handleChange}
                placeholder="Adınız"
                style={inputStyle(!!errors.ad)}
                autoComplete="given-name"
              />
              {errors.ad && (
                <div style={errStyle}>
                  <AlertCircle size={11} /> {errors.ad}
                </div>
              )}
            </div>
            <div>
              <label style={labelStyle}>Soyad <span style={{ color: '#1E6BB5' }}>*</span></label>
              <input
                name="soyad"
                type="text"
                value={form.soyad}
                onChange={handleChange}
                placeholder="Soyadınız"
                style={inputStyle(!!errors.soyad)}
                autoComplete="family-name"
              />
              {errors.soyad && (
                <div style={errStyle}>
                  <AlertCircle size={11} /> {errors.soyad}
                </div>
              )}
            </div>
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
              <div style={errStyle}>
                <AlertCircle size={11} /> {errors.sirket}
              </div>
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
                <div style={errStyle}>
                  <AlertCircle size={11} /> {errors.eposta}
                </div>
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

          {/* Konu */}
          <div>
            <label style={labelStyle}>Konu</label>
            <select
              name="konu"
              value={form.konu}
              onChange={handleChange}
              style={{ ...inputStyle(false), cursor: 'pointer' }}
            >
              <option value="" style={{ background: '#0A1628' }}>Konu seçiniz…</option>
              {konular.map((k) => (
                <option key={k} value={k} style={{ background: '#0A1628' }}>{k}</option>
              ))}
            </select>
          </div>

          {/* Mesaj */}
          <div>
            <label style={labelStyle}>
              Mesajınız <span style={{ color: '#1E6BB5' }}>*</span>
            </label>
            <textarea
              name="mesaj"
              value={form.mesaj}
              onChange={handleChange}
              rows={5}
              placeholder="Projeniz hakkında detaylı bilgi veriniz…"
              style={{ ...inputStyle(!!errors.mesaj), resize: 'vertical', minHeight: '120px' }}
            />
            <div className="flex justify-between items-center mt-1">
              {errors.mesaj ? (
                <div style={errStyle}>
                  <AlertCircle size={11} /> {errors.mesaj}
                </div>
              ) : <span />}
              <span style={{ fontSize: '10px', color: 'rgba(108,117,125,0.5)', fontFamily: 'var(--font-mono)' }}>
                {form.mesaj.length} karakter
              </span>
            </div>
          </div>

          {/* Gönder */}
          <button
            type="submit"
            disabled={status === 'sending'}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 text-sm font-semibold rounded transition-all duration-300"
            style={{
              background: status === 'sending' ? 'rgba(30,107,181,0.5)' : '#1E6BB5',
              color: '#0A1628',
              fontFamily: 'var(--font-body)',
              cursor: status === 'sending' ? 'not-allowed' : 'pointer',
            }}
          >
            {status === 'sending' ? (
              <>
                <span className="animate-spin inline-block w-4 h-4 border-2 border-current border-t-transparent rounded-full" />
                Gönderiliyor…
              </>
            ) : (
              <>
                <Send size={16} />
                Mesajı Gönder
              </>
            )}
          </button>

          {status === 'error' && (
            <p style={{ color: 'rgba(239,68,68,0.8)', fontFamily: 'var(--font-body)', fontSize: '13px' }}>
              Bir hata oluştu. Lütfen tekrar deneyiniz veya doğrudan e-posta gönderiniz.
            </p>
          )}
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
        'Temelli, Ankara 06980',
        'Türkiye',
      ],
      link: null,
    },
    {
      Icon: Phone,
      baslik: 'Telefon',
      satirlar: ['+90 (312) 123 45 67', '+90 (312) 123 45 68 (Faks)'],
      link: 'tel:+903121234567',
    },
    {
      Icon: Mail,
      baslik: 'E-posta',
      satirlar: ['info@yukselkt.com', 'satis@yukselkt.com'],
      link: 'mailto:info@yukselkt.com',
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
              href="mailto:export@yukselkt.com"
              className="font-body font-semibold text-base transition-colors duration-150"
              style={{ color: '#1E6BB5', fontFamily: 'var(--font-body)' }}
            >
              export@yukselkt.com
            </a>
          </div>
        </section>
      </main>
      <Footer lang="tr" />
    </>
  )
}
