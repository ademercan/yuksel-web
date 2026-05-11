'use client'

import { useEffect, useRef, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion, useInView } from 'framer-motion'
import Gorsel from '@/components/ui/Gorsel'
import { ArrowRight, ChevronDown, Layers, Settings, Cpu, Wrench } from 'lucide-react'
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
        {/* Mobil: poster görsel Ken Burns animasyonuyla */}
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
            poster="/images/fabrika-kareleri/hero-otoklav-tunel-premium.png"
            autoPlay
            muted
            loop
            playsInline
            className="absolute inset-0 w-full h-full object-cover"
          >
            <source src="/videos/hero-fabrika-cinematic.mp4" type="video/mp4" />
          </video>
        )}

        {/* Ana overlay — sol koyu (yazı), sağ açık (video görünsün) */}
        <div
          className="absolute inset-0"
          style={{
            background: 'linear-gradient(to right, rgba(10,22,40,0.85) 0%, rgba(10,22,40,0.55) 50%, rgba(10,22,40,0.30) 100%)',
          }}
        />

        {/* Alt geçiş gradyanı — güçlü */}
        <div
          className="absolute inset-0"
          style={{
            background: 'linear-gradient(to top, rgba(10,22,40,0.90) 0%, transparent 40%)',
          }}
        />

        {/* Karbon fiber doku */}
        <div className="absolute inset-0 bg-carbon-pattern opacity-30" />

        {/* Teknik altın grid */}
        <div className="absolute inset-0 bg-tech-grid" />

        {/* Sol üst radyal parıltı */}
        <div
          className="absolute -top-40 -left-40 h-[700px] w-[700px] rounded-full"
          style={{ background: 'radial-gradient(circle, rgba(30,107,181,0.08) 0%, transparent 70%)' }}
        />

        {/* Sağ alt mavi derinlik */}
        <div
          className="absolute -bottom-20 -right-20 h-[500px] w-[500px] rounded-full"
          style={{ background: 'radial-gradient(circle, rgba(30,58,95,0.5) 0%, transparent 70%)' }}
        />
      </div>

      {/* ── İçerik ────────────────────────────────────────── */}
      <motion.div
        className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10 text-center"
        variants={container}
        initial="hidden"
        animate="show"
      >
        {/* Üst etiket — altın */}
        <motion.div variants={fadeIn} className="mb-6 inline-flex items-center gap-3">
          <span className="h-px w-8" style={{ background: '#D4A574' }} />
          <span
            className="text-sm font-semibold tracking-widest uppercase"
            style={{ color: '#D4A574', fontFamily: 'var(--font-mono)' }}
          >
            AS9100 SERTİFİKALI · 2010&apos;DAN BERİ
          </span>
          <span className="h-px w-8" style={{ background: '#D4A574' }} />
        </motion.div>

        {/* Ana Başlık */}
        <motion.h1
          variants={fadeUp}
          className="font-heading text-5xl sm:text-7xl md:text-8xl lg:text-[7rem]
                     uppercase leading-none tracking-wide mb-6"
          style={{
            fontFamily: 'var(--font-heading)',
            fontWeight: 800,
            textShadow: '0 4px 32px rgba(0,0,0,0.9)',
          }}
        >
          <span style={{ color: '#F8F9FA' }}>Havacılık Standartlarında</span>
          <br />
          <span style={{ color: '#C8A96E' }}>Kompozit Üretim</span>
        </motion.h1>

        {/* Alt başlık */}
        <motion.div variants={fadeUp} className="mx-auto mb-10 max-w-xl">
          <p
            className="text-base sm:text-lg mb-6"
            style={{
              color: '#E2E8F0',
              fontFamily: 'var(--font-body)',
              textShadow: '0 2px 16px rgba(0,0,0,0.8)',
              lineHeight: 1.7,
            }}
          >
            Havacılık ve savunma sanayii için AS9100 sertifikalı
            yüksek performanslı kompozit parça imalatı.
          </p>

          {/* Teknoloji rozetleri — pill biçiminde */}
          <div className="flex flex-wrap justify-center gap-2">
            {['CFRP', 'GFRP', 'PREPREG', 'AUTOCLAVE'].map((tag) => (
              <span
                key={tag}
                className="text-xs font-semibold tracking-wider uppercase rounded-full px-3 py-1"
                style={{
                  border: '1px solid rgba(212,165,116,0.4)',
                  background: 'rgba(10,22,40,0.5)',
                  color: '#D4A574',
                  fontFamily: 'var(--font-mono)',
                }}
              >
                {tag}
              </span>
            ))}
          </div>
        </motion.div>

      </motion.div>

      {/* Scroll göstergesi — tıklanınca hizmetlere scroll */}
      <motion.button
        onClick={() => document.getElementById('hizmetler')?.scrollIntoView({ behavior: 'smooth' })}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5 cursor-pointer group"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 0.8 }}
        aria-label="Aşağı kaydır"
      >
        <span
          className="text-xs tracking-[0.25em] uppercase transition-colors duration-200 group-hover:text-white"
          style={{ color: 'rgba(255,255,255,0.7)', fontFamily: 'var(--font-body)' }}
        >
          Keşfet
        </span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
        >
          <ChevronDown size={20} style={{ color: 'rgba(255,255,255,0.7)' }} />
        </motion.div>
      </motion.button>
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
  { type: 'text',   display: '2010',          label: 'Kuruluş Yılı',      desc: 'Ankara\'da kurulan köklü tecrübe'   },
  { type: 'number', value: 500, suffix: '+',   label: 'Tamamlanan Proje',  desc: 'Havacılık & savunma projesi',       dur: 2000 },
  { type: 'text',   display: 'AS9100',         label: 'Kalite Sertifikası', desc: 'Havacılık Kalite Yönetim Sistemi'  },
  { type: 'text',   display: 'Ankara',         label: 'Üretim Merkezi',    desc: 'Başkent OSB, Temelli'               },
]

function StatCard({ s, i }: { s: StatDef; i: number }) {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, amount: 0.3 })
  const num = useCountUp(s.type === 'number' ? s.value! : 0, s.dur ?? 2000, s.type === 'number' && inView)
  const disp = s.type === 'number'
    ? (s.noFormat ? String(num) : num.toLocaleString('tr-TR'))
    : s.display!

  return (
    <motion.div
      ref={ref}
      className="relative flex flex-col items-center text-center px-6 py-8"
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
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
          <span style={{ color: '#D4A574' }}>{s.suffix}</span>
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
  return (
    <section
      aria-label="Şirket istatistikleri"
      style={{ borderTop: '1px solid rgba(30,107,181,0.1)', borderBottom: '1px solid rgba(30,107,181,0.1)' }}
    >
      <div className="divider-gold" />
      <div
        className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"
        style={{ background: 'rgba(30,58,95,0.25)' }}
      >
        <div className="grid grid-cols-2 md:grid-cols-4">
          {stats.map((s, i) => <StatCard key={s.label} s={s} i={i} />)}
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
    numara: '01',
    baslik: 'Kompozit Parça İmalatı',
    aciklama: 'CFRP ve GFRP malzemelerle havacılık sınıfı kompozit parça üretimi.',
    href: '/hizmetler/kompozit-parca-imalati',
    etiketler: ['CFRP/GFRP', 'PREPREG', 'AUTOCLAVE'],
    img: '/images/fabrika-kareleri/hizmet-kompozit-otoklav-premium.png',
    imgAlt: 'Otoklav kürleme sistemi — kompozit parça üretimi',
  },
  {
    id: 'ana-parca-montaji',
    Icon: Settings,
    numara: '02',
    baslik: 'Ana Parça Montajı',
    aciklama: 'Havacılık standartlarında yapısal montaj ve alt-assembly üretimi.',
    href: '/hizmetler/ana-parca-montaji',
    etiketler: ['YAPISAL MONTAJ', 'ALT-ASSEMBLY', 'TOLERANS'],
    img: '/images/fabrika-kareleri/hizmet-karbon-fiber-premium.png',
    imgAlt: 'Karbon fiber üretim — ana parça montajı',
  },
  {
    id: 'muhendislik-tasarim',
    Icon: Cpu,
    numara: '03',
    baslik: 'Mühendislik & Tasarım',
    aciklama: 'FEM analiz ve kompozit laminat tasarımından prototipe kadar mühendislik desteği.',
    href: '/hizmetler/muhendislik-tasarim',
    etiketler: ['LAMİNAT TASARIMI', 'FEM ANALİZ', 'PROTOTİP'],
    img: '/images/fabrika-kareleri/hizmet-muhendislik-cmm-premium.png',
    imgAlt: 'CMM koordinat ölçüm makinesi — mühendislik ve tasarım',
  },
  {
    id: 'takim-aparat-imalati',
    Icon: Wrench,
    numara: '04',
    baslik: 'Takım & Aparat İmalatı',
    aciklama: 'Kompozit kalıp, montaj fikstürü ve kontrol aparatı tasarım ve imalatı.',
    href: '/hizmetler/takim-aparat-imalati',
    etiketler: ['KOMPOZİT KALIP', 'ÜRETİM TAKIMLARI'],
    img: '/images/fabrika-kareleri/hizmet-cnc-tezgah-premium.png',
    imgAlt: '5 eksenli CNC tezgah — takım ve aparat imalatı',
  },
]

function HizmetKarti({ h, i }: { h: typeof hizmetler[0]; i: number }) {
  const { Icon } = h

  return (
    <motion.div
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.5, delay: i * 0.1 }}
      className="group relative overflow-hidden rounded-xl cursor-pointer h-[320px] md:h-[380px]"
    >
      {/* Resim */}
      <Image
        src={h.img}
        alt={h.imgAlt}
        fill
        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
        className="object-cover transition-transform duration-700 ease-in-out group-hover:scale-105"
      />

      {/* KATMAN 1: Normal halde alt gradient + başlık */}
      <div
        className="absolute bottom-0 left-0 right-0 z-20 p-5
                   bg-gradient-to-t from-[#0A1628]/95 via-[#0A1628]/40 to-transparent
                   transition-opacity duration-300 group-hover:opacity-0"
      >
        <div className="flex items-center gap-2 mb-2">
          <Icon size={15} style={{ color: '#D4A574' }} strokeWidth={1.5} />
          <span
            className="text-xs font-semibold tracking-widest uppercase"
            style={{ color: '#D4A574', fontFamily: 'var(--font-mono)' }}
          >
            {h.numara}
          </span>
        </div>
        <h3
          className="text-white text-lg font-bold uppercase"
          style={{ fontFamily: 'var(--font-heading)' }}
        >
          {h.baslik}
        </h3>
      </div>

      {/* KATMAN 2: Hover overlay */}
      <div
        className="absolute inset-0 z-30 bg-[#0A1628]/85
                   opacity-0 group-hover:opacity-100
                   transition-opacity duration-[400ms]"
      />

      {/* KATMAN 3: Hover içerik */}
      <div
        className="absolute inset-0 z-40 p-6 flex flex-col justify-between
                   opacity-0 group-hover:opacity-100
                   translate-y-3 group-hover:translate-y-0
                   transition-all duration-[400ms] delay-100"
      >
        {/* Üst: Numara + Başlık + Açıklama */}
        <div>
          <span
            className="text-xs font-semibold tracking-widest uppercase block mb-2"
            style={{ color: '#D4A574', fontFamily: 'var(--font-mono)' }}
          >
            {h.numara}
          </span>
          <h3
            className="text-white text-xl font-bold mb-3 uppercase"
            style={{ fontFamily: 'var(--font-heading)' }}
          >
            {h.baslik}
          </h3>
          <p
            className="text-sm leading-relaxed"
            style={{ color: '#D1D5DB', fontFamily: 'var(--font-body)' }}
          >
            {h.aciklama}
          </p>
        </div>

        {/* Alt: Buton */}
        <Link
          href={h.href}
          className="inline-flex items-center gap-2 text-sm font-semibold text-white
                     border border-white/50 rounded px-4 py-2 w-fit
                     hover:bg-white hover:text-[#0A1628] transition-colors duration-200"
          style={{ fontFamily: 'var(--font-body)' }}
        >
          Detaylı İncele <span>›</span>
        </Link>
      </div>
    </motion.div>
  )
}

function HizmetlerSection() {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="hizmetler" className="py-20 md:py-28" aria-label="Hizmetlerimiz">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div ref={ref} className="mb-12 md:mb-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="flex items-center gap-3 mb-4"
          >
            <span className="h-px w-8" style={{ background: '#D4A574' }} />
            <span
              className="text-xs tracking-[0.3em] uppercase"
              style={{ color: '#D4A574', fontFamily: 'var(--font-mono)' }}
            >
              Hizmetlerimiz
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-heading text-4xl md:text-5xl lg:text-6xl uppercase tracking-wide max-w-xl font-bold"
            style={{ color: '#ffffff', fontFamily: 'var(--font-heading)' }}
          >
            Kompozit Üretimde{' '}
            <span className="text-gradient-gold">Tam Hizmet</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="max-w-2xl mt-4 leading-relaxed text-base"
            style={{ color: '#E2E8F0', fontFamily: 'var(--font-body)' }}
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
            className="inline-flex items-center gap-2 text-sm font-semibold transition-colors duration-200 hover:text-white group"
            style={{ color: '#D4A574', fontFamily: 'var(--font-body)' }}
          >
            Tüm Hizmetleri Görüntüle
            <span className="transition-transform duration-200 group-hover:translate-x-1">→</span>
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
      style={{ background: '#0D1B2E' }}
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
            <span className="h-px w-8" style={{ background: '#D4A574' }} />
            <span className="text-xs tracking-[0.3em] uppercase"
              style={{ color: '#D4A574', fontFamily: 'var(--font-mono)' }}>
              Referanslarımız
            </span>
            <span className="h-px w-8" style={{ background: '#D4A574' }} />
          </div>
          <h2
            className="font-heading text-4xl md:text-5xl uppercase tracking-wide mb-3 font-bold"
            style={{ color: '#ffffff', fontFamily: 'var(--font-heading)' }}
          >
            Güvenilen <span className="text-gradient-gold">Ortaklarımız</span>
          </h2>
          <p className="text-sm leading-relaxed max-w-lg mx-auto"
            style={{ color: '#E2E8F0', fontFamily: 'var(--font-body)' }}>
            Türkiye&apos;nin önde gelen havacılık ve savunma firmalarına hizmet veriyoruz
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
            className="inline-flex items-center gap-2 text-sm transition-colors duration-200 hover:text-yellow-300"
            style={{ color: '#D4A574', fontFamily: 'var(--font-body)' }}
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
      </main>
      <Footer lang="tr" />
    </>
  )
}
