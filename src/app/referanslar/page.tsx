'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import Link from 'next/link'
import { ArrowRight, Mail } from 'lucide-react'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import { referanslar } from '@/lib/referanslar-data'

function ReferansDetayKarti({ r, i }: { r: typeof referanslar[0]; i: number }) {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: '-40px' })
  const fontSize = r.ad.length > 14 ? '22px' : r.ad.length > 8 ? '28px' : '34px'

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 24 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.45, delay: (i % 4) * 0.08 }}
      className="group rounded-lg overflow-hidden transition-all duration-300 cursor-default"
      style={{
        background: '#0D1B2E',
        border: '1px solid rgba(255,255,255,0.1)',
      }}
      onMouseEnter={(e) => {
        const el = e.currentTarget as HTMLElement
        el.style.border = '1px solid rgba(212,165,116,0.4)'
        el.style.boxShadow = '0 8px 32px rgba(212,165,116,0.08)'
        el.style.transform = 'translateY(-2px)'
      }}
      onMouseLeave={(e) => {
        const el = e.currentTarget as HTMLElement
        el.style.border = '1px solid rgba(255,255,255,0.1)'
        el.style.boxShadow = 'none'
        el.style.transform = 'none'
      }}
    >
      {/* Üst alan — firma adı */}
      <div
        className="flex flex-col items-center justify-center text-center"
        style={{ padding: '24px 20px 18px', borderBottom: '1px solid rgba(30,107,181,0.15)' }}
      >
        <span
          className="uppercase leading-tight"
          style={{
            color: '#F8F9FA',
            fontFamily: 'var(--font-heading)',
            fontSize,
            letterSpacing: '0.05em',
            wordBreak: 'break-word',
          }}
        >
          {r.ad}
        </span>
        <span
          className="mt-2 uppercase tracking-widest"
          style={{
            color: '#D4A574',
            fontFamily: 'var(--font-mono)',
            fontSize: '10px',
            border: '1px solid rgba(212,165,116,0.35)',
            padding: '2px 8px',
            borderRadius: '3px',
          }}
        >
          {r.sektor}
        </span>
      </div>

    </motion.div>
  )
}

function SectionLabel({ text }: { text: string }) {
  return (
    <div className="flex items-center gap-3 mb-4">
      <span className="h-px w-8" style={{ background: '#D4A574' }} />
      <span className="text-xs tracking-[0.3em] uppercase"
        style={{ color: '#D4A574', fontFamily: 'var(--font-mono)' }}>
        {text}
      </span>
    </div>
  )
}

function PageHero() {
  return (
    <section
      className="relative pt-36 pb-20 overflow-hidden"
      style={{ background: 'linear-gradient(135deg, #0A1628 0%, #0D1B2E 50%, #0A1628 100%)' }}
      aria-label="Referanslar başlık"
    >
      <div className="absolute inset-0 bg-carbon-pattern opacity-20" />
      <div className="absolute inset-0 bg-tech-grid" />
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[500px] w-[700px]"
        style={{ background: 'radial-gradient(ellipse, rgba(30,107,181,0.07) 0%, transparent 70%)' }}
      />
      <div className="divider-gold absolute bottom-0 left-0 right-0" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <SectionLabel text="Referanslarımız" />
          <h1
            className="font-heading text-5xl md:text-6xl lg:text-7xl uppercase tracking-wide mb-4"
            style={{ color: '#F8F9FA', fontFamily: 'var(--font-heading)' }}
          >
            Güvenilen <span className="text-gradient-gold">Ortaklarımız</span>
          </h1>
          <p
            className="max-w-xl text-base leading-relaxed"
            style={{ color: '#D1D5DB', fontFamily: 'var(--font-body)' }}
          >
            Türkiye&apos;nin önde gelen havacılık ve savunma firmalarına yıllardır
            AS9100 kalite güvencesiyle hizmet veriyoruz.
          </p>
        </motion.div>
      </div>
    </section>
  )
}

function ReferansKartlari() {
  const ilkSekiz = referanslar.slice(0, 8)
  const sonUc    = referanslar.slice(8)

  return (
    <section className="py-20 md:py-28" style={{ background: '#070E1A' }}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* İlk 8: 4 sütun × 2 satır */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {ilkSekiz.map((r, i) => (
            <ReferansDetayKarti key={r.ad} r={r} i={i} />
          ))}
        </div>

        {/* Son 3: ortalanmış 3 sütun */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 mt-5 lg:w-3/4 lg:mx-auto">
          {sonUc.map((r, i) => (
            <ReferansDetayKarti key={r.ad} r={r} i={i + 8} />
          ))}
        </div>
      </div>
    </section>
  )
}

function CtaBolumu() {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })

  return (
    <section
      ref={ref}
      className="relative py-20 overflow-hidden"
      style={{ background: '#0A1628' }}
      aria-label="İş ortağı çağrısı"
    >
      <div className="divider-gold absolute top-0 left-0 right-0" />
      <div className="absolute inset-0 bg-carbon-pattern opacity-15" />
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[350px] w-[600px]"
        style={{ background: 'radial-gradient(ellipse, rgba(30,107,181,0.06) 0%, transparent 70%)' }}
      />

      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-3 mb-6"
        >
          <span className="h-px w-6" style={{ background: '#1E6BB5' }} />
          <span className="text-xs tracking-[0.3em] uppercase"
            style={{ color: '#1E6BB5', fontFamily: 'var(--font-mono)' }}>
            İş Birliği
          </span>
          <span className="h-px w-6" style={{ background: '#1E6BB5' }} />
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="font-heading text-4xl md:text-5xl uppercase tracking-wide mb-4"
          style={{ color: '#F8F9FA', fontFamily: 'var(--font-heading)' }}
        >
          Siz de <span className="text-gradient-gold">İş Ortağımız</span> Olun
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-10 leading-relaxed"
          style={{ color: '#6C757D', fontFamily: 'var(--font-body)' }}
        >
          Havacılık ve savunma projeleriniz için AS9100 sertifikalı,
          NADCAP akredite üretim kapasitemizden yararlanın.
          Teknik ekibimiz 24 saat içinde yanıt verir.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <Link
            href="/iletisim"
            className="group inline-flex items-center gap-2 px-8 py-4 text-base font-semibold rounded transition-all duration-300"
            style={{ background: '#1E6BB5', color: '#F8F9FA', fontFamily: 'var(--font-body)' }}
            onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.background = '#4A90D9')}
            onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.background = '#1E6BB5')}
          >
            <Mail size={18} />
            Teklif Formu Doldur
            <ArrowRight size={16} className="transition-transform duration-200 group-hover:translate-x-1" />
          </Link>
          <a
            href="tel:+903126401045"
            className="flex items-center gap-2 text-sm transition-colors duration-200"
            style={{ color: 'rgba(248,249,250,0.65)', fontFamily: 'var(--font-body)' }}
          >
            ya da arayın:{' '}
            <span style={{ color: '#1E6BB5', fontFamily: 'var(--font-mono)' }}>
              +90 (312) 640 10 45
            </span>
          </a>
        </motion.div>
      </div>
    </section>
  )
}

export default function ReferanslarSayfasi() {
  return (
    <>
      <Header />
      <main>
        <PageHero />
        <ReferansKartlari />
        <CtaBolumu />
      </main>
      <Footer lang="tr" />
    </>
  )
}
