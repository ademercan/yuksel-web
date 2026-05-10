'use client'

import { useEffect, useRef, useState } from 'react'
import Link from 'next/link'
import { motion, useInView, AnimatePresence } from 'framer-motion'
import Gorsel from '@/components/ui/Gorsel'
import { ArrowRight, ChevronDown, Layers, Settings, Cpu, Wrench, Mail } from 'lucide-react'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import ReferansLogoKarti from '@/components/ui/ReferansLogoKarti'
import { referanslar } from '@/lib/referanslar-data'

/* ══════════════════════════════════════════════════════════════
   1. HERO SECTION
══════════════════════════════════════════════════════════════ */
function HeroSection() {
  const [isDesktop, setIsDesktop] = useState(false)

  useEffect(() => {
    const mq = window.matchMedia('(min-width: 768px)')
    setIsDesktop(mq.matches)
    const onChange = (e: MediaQueryListEvent) => setIsDesktop(e.matches)
    mq.addEventListener('change', onChange)
    return () => mq.removeEventListener('change', onChange)
  }, [])

  const container = {
    hidden: {},
    show: { transition: { staggerChildren: 0.15, delayChildren: 0.3 } },
  }
  const fadeUp = {
    hidden: { opacity: 0, y: 32 },
    show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] as const } },
  }
  const fadeIn = {
    hidden: { opacity: 0 },
    show:   { opacity: 1, transition: { duration: 0.6 } },
  }

  return (
    <section
      className="relative flex h-screen min-h-[600px] items-center justify-center overflow-hidden"
      aria-label="Ana sayfa hero bölümü"
    >
      {/* ── Arkaplan ──────────────────────────────────────── */}
      <div className="absolute inset-0" style={{ background: '#0A1628' }}>
        {/* Mobil: poster görsel Ken Burns animasyonuyla (performans) */}
        {!isDesktop && (
          <div className="absolute inset-0 overflow-hidden">
            <Gorsel
              src="/images/fabrika-kareleri/hero-otoklav-tunel-premium.png"
              alt="Yüksel Kompozit Teknolojileri üretim tesisi — otoklav tüneli"
              fill
              priority
              sizes="100vw"
              className="object-cover ken-burns-hero"
            />
          </div>
        )}
        {/* Masaüstü: sinematik fabrika videosu */}
        {isDesktop && (
          <video
            src="/videos/hero-fabrika-cinematic.mp4"
            poster="/images/fabrika-kareleri/hero-otoklav-tunel-premium.png"
            autoPlay
            muted
            loop
            playsInline
            className="absolute inset-0 w-full h-full object-cover"
          />
        )}
        {/* Koyu overlay — metnin okunabilirliğini korur */}
        <div className="absolute inset-0" style={{ background: 'rgba(10,22,40,0.62)' }} />
        {/* Karbon fiber doku */}
        <div className="absolute inset-0 bg-carbon-pattern opacity-30" />

        {/* Teknik altın grid */}
        <div className="absolute inset-0 bg-tech-grid" />

        {/* Sol üst altın radyal parıltı */}
        <div
          className="absolute -top-40 -left-40 h-[700px] w-[700px] rounded-full"
          style={{ background: 'radial-gradient(circle, rgba(30,107,181,0.08) 0%, transparent 70%)' }}
        />

        {/* Sağ alt mavi derinlik */}
        <div
          className="absolute -bottom-20 -right-20 h-[500px] w-[500px] rounded-full"
          style={{ background: 'radial-gradient(circle, rgba(30,58,95,0.5) 0%, transparent 70%)' }}
        />

        {/* Alt geçiş gradyanı */}
        <div
          className="absolute bottom-0 left-0 right-0 h-32"
          style={{ background: 'linear-gradient(to top, #0A1628, transparent)' }}
        />
      </div>

      {/* ── İçerik ────────────────────────────────────────── */}
      <motion.div
        className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10 text-center"
        variants={container}
        initial="hidden"
        animate="show"
      >
        {/* Üst etiket */}
        <motion.div variants={fadeIn} className="mb-6 inline-flex items-center gap-3">
          <span className="h-px w-8" style={{ background: '#1E6BB5' }} />
          <span
            className="text-xs tracking-[0.3em] uppercase"
            style={{ color: '#1E6BB5', fontFamily: 'var(--font-mono)' }}
          >
            AS9100 SERTİFİKALI · 2010&apos;DAN BERİ
          </span>
          <span className="h-px w-8" style={{ background: '#1E6BB5' }} />
        </motion.div>

        {/* Ana Başlık */}
        <motion.h1
          variants={fadeUp}
          className="font-heading text-5xl sm:text-7xl md:text-8xl lg:text-[7rem]
                     uppercase leading-none tracking-wide mb-6"
          style={{ fontFamily: 'var(--font-heading)' }}
        >
          <span style={{ color: '#F8F9FA' }}>Havacılık Standartlarında</span>
          <br />
          <span style={{ color: '#C8A96E' }}>Kompozit Üretim</span>
        </motion.h1>

        {/* Alt başlık */}
        <motion.div variants={fadeUp} className="mx-auto mb-10 max-w-2xl">
          <p
            className="text-base sm:text-lg leading-relaxed mb-4"
            style={{ color: 'rgba(248,249,250,0.7)', fontFamily: 'var(--font-body)' }}
          >
            Havacılık ve savunma sanayii için AS9100 sertifikalı
            yüksek performanslı kompozit parça imalatı.
          </p>
          <p
            className="text-xs tracking-widest uppercase"
            style={{ color: '#1E6BB5', fontFamily: 'var(--font-mono)' }}
          >
            CFRP · GFRP · PREPREG · AUTOCLAVE
          </p>
        </motion.div>

        {/* Butonlar */}
        <motion.div
          variants={fadeUp}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          {/* Altın buton */}
          <Link
            href="/hizmetler"
            className="group inline-flex items-center gap-2 px-7 py-3.5 text-base font-body font-semibold rounded transition-all duration-300"
            style={{ background: '#1E6BB5', color: '#0A1628', fontFamily: 'var(--font-body)' }}
          >
            Hizmetlerimizi Keşfedin
            <ArrowRight size={18} className="transition-transform duration-200 group-hover:translate-x-1" />
          </Link>

          {/* Outline buton */}
          <Link
            href="/iletisim"
            className="inline-flex items-center gap-2 px-7 py-3.5 text-base font-body font-semibold rounded transition-all duration-300"
            style={{
              border: '1px solid #1E6BB5',
              color: '#1E6BB5',
              fontFamily: 'var(--font-body)',
            }}
          >
            Teklif Alın
          </Link>
        </motion.div>

        {/* Sertifika rozetleri */}
        <motion.div
          variants={fadeIn}
          className="mt-14 flex flex-wrap items-center justify-center gap-4"
          style={{ opacity: 0.5 }}
        >
          {['AS9100 Rev.C', 'NADCAP NDT', 'NADCAP Composite', 'ISO 9001'].map((cert) => (
            <span
              key={cert}
              className="text-[11px] tracking-widest uppercase rounded px-3 py-1"
              style={{
                color: '#6C757D',
                border: '1px solid rgba(255,255,255,0.1)',
                fontFamily: 'var(--font-mono)',
              }}
            >
              {cert}
            </span>
          ))}
        </motion.div>
      </motion.div>

      {/* Scroll göstergesi */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 0.8 }}
      >
        <span
          className="text-[10px] tracking-[0.25em] uppercase"
          style={{ color: 'rgba(108,117,125,0.5)', fontFamily: 'var(--font-body)' }}
        >
          Keşfet
        </span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
        >
          <ChevronDown size={20} style={{ color: 'rgba(30,107,181,0.4)' }} />
        </motion.div>
      </motion.div>
    </section>
  )
}

/* ══════════════════════════════════════════════════════════════
   2. İSTATİSTİK BAR
══════════════════════════════════════════════════════════════ */
function useCountUp(target: number, duration: number, active: boolean) {
  const [val, setVal] = useState(0)
  useEffect(() => {
    if (!active) return
    let rafId: number
    let t0: number | null = null
    const step = (ts: number) => {
      if (!t0) t0 = ts
      const p = Math.min((ts - t0) / duration, 1)
      setVal(Math.round((1 - Math.pow(1 - p, 3)) * target))
      if (p < 1) rafId = requestAnimationFrame(step)
    }
    rafId = requestAnimationFrame(step)
    return () => cancelAnimationFrame(rafId)
  }, [target, duration, active])
  return val
}

interface StatDef {
  type:      'number' | 'text'
  value?:    number
  display?:  string
  suffix?:   string
  label:     string
  desc:      string
  dur?:      number
  noFormat?: boolean
}

const stats: StatDef[] = [
  { type: 'number', value: 2010, suffix: '', noFormat: true, label: 'Kuruluş Yılı', desc: 'Ankara\'da kurulan köklü tecrübe', dur: 1600 },
  { type: 'number', value: 500,  suffix: '+',  label: 'Tamamlanan Proje',  desc: 'Havacılık & savunma projesi',      dur: 2000 },
  { type: 'text',   display: 'AS9100',          label: 'Kalite Sertifikası', desc: 'Havacılık Kalite Yönetim Sistemi'  },
  { type: 'text',   display: 'Ankara',          label: 'Üretim Merkezi',    desc: 'Başkent OSB, Temelli'               },
]

function StatCard({ s, i, active }: { s: StatDef; i: number; active: boolean }) {
  const num = useCountUp(s.type === 'number' ? s.value! : 0, s.dur ?? 2000, s.type === 'number' && active)
  const disp = s.type === 'number'
    ? (s.noFormat ? String(num) : num.toLocaleString('tr-TR'))
    : s.display!

  return (
    <motion.div
      className="relative flex flex-col items-center text-center px-6 py-8"
      initial={{ opacity: 0, y: 20 }}
      animate={active ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.55, delay: i * 0.1 }}
    >
      {/* Dikey ayırıcı */}
      {i < stats.length - 1 && (
        <div
          className="absolute right-0 top-1/2 -translate-y-1/2 h-12 w-px hidden md:block"
          style={{ background: 'linear-gradient(to bottom, transparent, rgba(30,107,181,0.3), transparent)' }}
        />
      )}

      <span
        className="font-heading text-5xl sm:text-6xl leading-none mb-2 tabular-nums text-gradient-gold"
        style={{ fontFamily: 'var(--font-heading)' }}
      >
        {disp}
        {s.type === 'number' && s.suffix && (
          <span style={{ color: '#1E6BB5' }}>{s.suffix}</span>
        )}
      </span>
      <span
        className="text-sm font-semibold uppercase tracking-widest mb-1"
        style={{ color: '#F8F9FA', fontFamily: 'var(--font-body)' }}
      >
        {s.label}
      </span>
      <span
        className="text-xs leading-snug"
        style={{ color: 'rgba(108,117,125,0.7)', fontFamily: 'var(--font-body)' }}
      >
        {s.desc}
      </span>
    </motion.div>
  )
}

function IstatistikBar() {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section
      ref={ref}
      aria-label="Şirket istatistikleri"
      style={{ borderTop: '1px solid rgba(30,107,181,0.1)', borderBottom: '1px solid rgba(30,107,181,0.1)' }}
    >
      <div className="divider-gold" />
      <div
        className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"
        style={{ background: 'rgba(30,58,95,0.25)' }}
      >
        <div className="grid grid-cols-2 md:grid-cols-4">
          {stats.map((s, i) => <StatCard key={s.label} s={s} i={i} active={inView} />)}
        </div>
      </div>
      <div className="divider-gold" />
    </section>
  )
}

/* ══════════════════════════════════════════════════════════════
   3. HİZMETLER
══════════════════════════════════════════════════════════════ */
const hizmetler = [
  {
    id: 'kompozit-parca-imalati',
    Icon: Layers,
    baslik: 'Kompozit Parça İmalatı',
    aciklama:
      'CFRP ve GFRP malzemeler kullanılarak prepreg, vakum infüzyon ve autoclave kürleme yöntemleriyle havacılık sınıfı kompozit parça üretimi.',
    href: '/hizmetler/kompozit-parca-imalati',
    etiketler: ['CFRP / GFRP', 'Prepreg', 'Autoclave'],
    img: '/images/fabrika-kareleri/hizmet-kompozit-otoklav-premium.png',
    imgAlt: 'Otoklav kürleme sistemi — kompozit parça üretimi',
  },
  {
    id: 'ana-parca-montaji',
    Icon: Settings,
    baslik: 'Ana Parça Montajı',
    aciklama:
      'Havacılık standartlarında yapısal montaj ve alt-assembly üretimi. Hassas tolerans yönetimi ile seri ve prototip üretim kapasitesi.',
    href: '/hizmetler/ana-parca-montaji',
    etiketler: ['Yapısal Montaj', 'Alt-Assembly', 'Tolerans Yönetimi'],
    img: '/images/fabrika-kareleri/hizmet-montaj-temiz-oda-premium.png',
    imgAlt: 'ISO Class 8 temiz oda montaj ortamı',
  },
  {
    id: 'muhendislik-tasarim',
    Icon: Cpu,
    baslik: 'Mühendislik & Tasarım',
    aciklama:
      'Kompozit laminat tasarımı, FEM analiz desteği ve hızlı prototipleme. Müşteri ihtiyaçlarına özel mühendislik çözümleri.',
    href: '/hizmetler/muhendislik-tasarim',
    etiketler: ['Laminat Tasarımı', 'FEM Analiz', 'Prototipleme'],
    img: '/images/fabrika-kareleri/hizmet-muhendislik-cmm-premium.png',
    imgAlt: 'CMM koordinat ölçüm makinesi — hassas kalite kontrol',
  },
  {
    id: 'takim-aparat-imalati',
    Icon: Wrench,
    baslik: 'Takım & Aparat İmalatı',
    aciklama:
      'Üretim süreçlerine özel kompozit kalıp, takım ve kontrol aparatlarının tasarımı ve imalatı. Uzun ömürlü hassas üretim araç-gereci.',
    href: '/hizmetler/takim-aparat-imalati',
    etiketler: ['Kompozit Kalıp', 'Üretim Takımları', 'Kontrol Aparatları'],
    img: '/images/fabrika-kareleri/hizmet-cnc-tezgah-premium.png',
    imgAlt: '5 eksenli CNC tezgah — hassas aparat imalatı',
  },
]

function HizmetKarti({ h, i }: { h: typeof hizmetler[0]; i: number }) {
  const { Icon } = h
  const [hovered, setHovered] = useState(false)

  return (
    <motion.div
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.5, delay: i * 0.1 }}
    >
      <Link
        href={h.href}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        className="group flex flex-col h-full rounded-lg overflow-hidden transition-all duration-300"
        style={{
          border: hovered ? '1px solid rgba(30,107,181,0.35)' : '1px solid rgba(255,255,255,0.07)',
          background: hovered ? 'rgba(30,58,95,0.45)' : 'rgba(30,58,95,0.2)',
          position: 'relative',
        }}
        aria-label={h.baslik}
      >
        {/* Görsel */}
        <div className="relative h-40 overflow-hidden" style={{ flexShrink: 0 }}>
          <Gorsel
            src={h.img}
            alt={h.imgAlt}
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
            className="object-cover ken-burns-card"
            style={{
              opacity: hovered ? 0.85 : 0.65,
              transition: 'opacity 0.4s ease',
            }}
          />
          <div
            className="absolute inset-0"
            style={{ background: 'linear-gradient(to bottom, transparent 30%, rgba(10,22,40,0.95))' }}
          />
        </div>

        {/* Üst mavi çizgi (hover'da gözükür) */}
        <div
          className="absolute top-0 left-0 right-0 h-0.5 transition-all duration-300"
          style={{
            background: 'linear-gradient(90deg, transparent, #1E6BB5, transparent)',
            transform: hovered ? 'scaleX(1)' : 'scaleX(0)',
            transformOrigin: 'left',
          }}
        />

        <div className="p-6 md:p-7 flex flex-col h-full">
          {/* İkon */}
          <div
            className="mb-5 w-12 h-12 rounded-lg flex items-center justify-center transition-all duration-300"
            style={{
              border: hovered ? '1px solid rgba(30,107,181,0.45)' : '1px solid rgba(30,107,181,0.2)',
              background: hovered ? 'rgba(30,107,181,0.15)' : 'rgba(30,107,181,0.05)',
            }}
          >
            <Icon size={22} style={{ color: '#1E6BB5' }} strokeWidth={1.5} />
          </div>

          {/* Başlık */}
          <h3
            className="font-heading text-xl md:text-2xl uppercase tracking-wide mb-3 transition-colors duration-200"
            style={{
              color: hovered ? '#1E6BB5' : '#F8F9FA',
              fontFamily: 'var(--font-heading)',
            }}
          >
            {h.baslik}
          </h3>

          {/* Açıklama */}
          <p
            className="text-sm leading-relaxed mb-5 flex-grow"
            style={{ color: '#6C757D', fontFamily: 'var(--font-body)' }}
          >
            {h.aciklama}
          </p>

          {/* Etiketler */}
          <div className="flex flex-wrap gap-2 mb-5">
            {h.etiketler.map((e) => (
              <span
                key={e}
                className="text-[10px] tracking-wider uppercase rounded px-2.5 py-1"
                style={{
                  color: 'rgba(30,107,181,0.7)',
                  border: '1px solid rgba(30,107,181,0.15)',
                  background: 'rgba(30,107,181,0.05)',
                  fontFamily: 'var(--font-mono)',
                }}
              >
                {e}
              </span>
            ))}
          </div>

          {/* Link */}
          <div
            className="flex items-center gap-2 text-xs font-semibold transition-colors duration-200"
            style={{
              color: hovered ? '#1E6BB5' : 'rgba(30,107,181,0.5)',
              fontFamily: 'var(--font-body)',
            }}
          >
            Detaylı İncele
            <ArrowRight
              size={14}
              style={{ transition: 'transform 0.2s', transform: hovered ? 'translateX(4px)' : 'none' }}
            />
          </div>
        </div>
      </Link>
    </motion.div>
  )
}

function HizmetlerSection() {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section className="py-20 md:py-28" aria-label="Hizmetlerimiz">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div ref={ref} className="mb-12 md:mb-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="flex items-center gap-3 mb-4"
          >
            <span className="h-px w-8" style={{ background: '#1E6BB5' }} />
            <span
              className="text-xs tracking-[0.3em] uppercase"
              style={{ color: '#1E6BB5', fontFamily: 'var(--font-mono)' }}
            >
              Hizmetlerimiz
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-heading text-4xl md:text-5xl lg:text-6xl uppercase tracking-wide max-w-xl"
            style={{ color: '#F8F9FA', fontFamily: 'var(--font-heading)' }}
          >
            Kompozit Üretimde{' '}
            <span className="text-gradient-gold">Tam Hizmet</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="max-w-2xl mt-4 leading-relaxed text-base"
            style={{ color: '#6C757D', fontFamily: 'var(--font-body)' }}
          >
            Tasarımdan üretime, prototipten seri üretim montajına kadar
            havacılık ve savunma sanayiine yönelik eksiksiz kompozit çözümler.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {hizmetler.map((h, i) => <HizmetKarti key={h.id} h={h} i={i} />)}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="mt-10 text-center"
        >
          <Link
            href="/hizmetler"
            className="inline-flex items-center gap-2 px-6 py-3 text-sm font-body font-semibold rounded transition-all duration-300"
            style={{ border: '1px solid #1E6BB5', color: '#1E6BB5', fontFamily: 'var(--font-body)' }}
          >
            Tüm Hizmetleri Görüntüle
            <ArrowRight size={16} />
          </Link>
        </motion.div>
      </div>
    </section>
  )
}

/* ══════════════════════════════════════════════════════════════
   4. REFERANSLAR
══════════════════════════════════════════════════════════════ */
function ReferanslarSection() {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })

  return (
    <section
      ref={ref}
      className="py-20 md:py-28"
      style={{ background: '#070E1A' }}
      aria-label="Referanslarımız"
    >
      <div className="divider-gold" />
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-12">
        {/* Başlık */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="mb-12 text-center"
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <span className="h-px w-8" style={{ background: '#1E6BB5' }} />
            <span className="text-xs tracking-[0.3em] uppercase"
              style={{ color: '#1E6BB5', fontFamily: 'var(--font-mono)' }}>
              Referanslarımız
            </span>
            <span className="h-px w-8" style={{ background: '#1E6BB5' }} />
          </div>
          <h2
            className="font-heading text-4xl md:text-5xl uppercase tracking-wide mb-3"
            style={{ color: '#F8F9FA', fontFamily: 'var(--font-heading)' }}
          >
            Güvenilen <span className="text-gradient-gold">Ortaklarımız</span>
          </h2>
          <p className="text-sm leading-relaxed max-w-lg mx-auto"
            style={{ color: '#6C757D', fontFamily: 'var(--font-body)' }}>
            Türkiye'nin önde gelen havacılık ve savunma firmalarına hizmet veriyoruz
          </p>
        </motion.div>

        {/* Logo Kartları — 2 satır × 6 sütun */}
        <div className="grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-6 gap-3">
          {referanslar.map((r, i) => (
            <motion.div
              key={r.ad}
              initial={{ opacity: 0, y: 16 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.35, delay: i * 0.05 }}
            >
              <ReferansLogoKarti ad={r.ad} sektor={r.sektor} />
            </motion.div>
          ))}
        </div>

        {/* Alt link */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.7 }}
          className="mt-8 text-center"
        >
          <Link
            href="/referanslar"
            className="inline-flex items-center gap-2 text-sm transition-colors duration-200"
            style={{ color: '#1E6BB5', fontFamily: 'var(--font-body)' }}
          >
            Tüm Referansları Görüntüle
            <ArrowRight size={14} />
          </Link>
        </motion.div>
      </div>
    </section>
  )
}

/* ══════════════════════════════════════════════════════════════
   5. CTA BANNER
══════════════════════════════════════════════════════════════ */
function CtaBanner() {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section
      ref={ref}
      className="relative py-20 md:py-28 overflow-hidden"
      aria-label="Teklif çağrısı"
    >
      {/* Arka plan */}
      <div className="absolute inset-0" style={{ background: 'rgba(30,58,95,0.3)' }}>
        <div className="absolute inset-0 bg-carbon-pattern opacity-20" />
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[400px] w-[600px]"
          style={{ background: 'radial-gradient(ellipse, rgba(30,107,181,0.06) 0%, transparent 70%)' }}
        />
      </div>
      <div className="divider-gold absolute top-0 left-0 right-0" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-3 mb-6"
        >
          <span className="h-px w-6" style={{ background: '#1E6BB5' }} />
          <span
            className="text-xs tracking-[0.3em] uppercase"
            style={{ color: '#1E6BB5', fontFamily: 'var(--font-mono)' }}
          >
            Birlikte Üretelim
          </span>
          <span className="h-px w-6" style={{ background: '#1E6BB5' }} />
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="font-heading text-4xl md:text-5xl lg:text-6xl uppercase tracking-wide mb-4"
          style={{ color: '#F8F9FA', fontFamily: 'var(--font-heading)' }}
        >
          Projeniz İçin{' '}
          <span className="text-gradient-gold">Teklif Alın</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-xl mx-auto mb-10 leading-relaxed"
          style={{ color: '#6C757D', fontFamily: 'var(--font-body)' }}
        >
          Havacılık ve savunma projeleriniz için AS9100 kalite güvencesiyle
          üretim çözümleri sunuyoruz. Teknik ekibimiz 24 saat içinde yanıt verir.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <Link
            href="/iletisim"
            className="group inline-flex items-center gap-2 px-8 py-4 text-base font-body font-semibold rounded transition-all duration-300"
            style={{ background: '#1E6BB5', color: '#0A1628', fontFamily: 'var(--font-body)' }}
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
              +90 (312) 640 10 45 - 46
            </span>
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-12 pt-8 flex flex-wrap items-center justify-center gap-4 text-xs tracking-widest uppercase"
          style={{
            borderTop: '1px solid rgba(255,255,255,0.05)',
            color: 'rgba(108,117,125,0.4)',
            fontFamily: 'var(--font-mono)',
          }}
        >
          <span>AS9100 Rev.C</span>
          <span style={{ opacity: 0.3 }}>·</span>
          <span>NADCAP NDT</span>
          <span style={{ opacity: 0.3 }}>·</span>
          <span>NADCAP Composite</span>
          <span style={{ opacity: 0.3 }}>·</span>
          <span>ISO 9001:2008</span>
        </motion.div>
      </div>
      <div className="divider-gold absolute bottom-0 left-0 right-0" />
    </section>
  )
}

/* ══════════════════════════════════════════════════════════════
   SAYFA
══════════════════════════════════════════════════════════════ */
export default function AnaSayfa() {
  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <IstatistikBar />
        <HizmetlerSection />
        <ReferanslarSection />
        <CtaBanner />
      </main>
      <Footer lang="tr" />
    </>
  )
}
