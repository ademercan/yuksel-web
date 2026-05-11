'use client'

import { useRef } from 'react'
import Link from 'next/link'
import { motion, useInView } from 'framer-motion'
import Gorsel from '@/components/ui/Gorsel'
import { MapPin, Users, Award, Factory, Target, Eye, TrendingUp } from 'lucide-react'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'

function SectionLabel({ text }: { text: string }) {
  return (
    <div className="flex items-center gap-3 mb-4">
      <span className="h-px w-8" style={{ background: '#D4A574' }} />
      <span
        className="text-xs tracking-[0.3em] uppercase"
        style={{ color: '#D4A574', fontFamily: 'var(--font-mono)' }}
      >
        {text}
      </span>
    </div>
  )
}

/* ─── Hero ────────────────────────────────────────────────────── */
function PageHero() {
  return (
    <section
      className="relative w-full h-[70vh] min-h-[500px] overflow-hidden"
      aria-label="Hakkımızda başlık"
    >
      <Gorsel
        src="/images/fabrika-kareleri/hakkimizda-fabrika-genel-premium.png"
        alt="Yüksel Kompozit Teknolojileri üretim tesisi"
        fill
        priority
        sizes="100vw"
        className="object-cover object-center"
      />
      <div
        className="absolute inset-0"
        style={{
          background:
            'linear-gradient(to bottom, rgba(10,22,40,0.80) 0%, rgba(10,22,40,0.40) 50%, rgba(10,22,40,0.70) 100%)',
        }}
      />
      <div className="relative h-full flex flex-col justify-end pb-16">
        <div className="mx-auto max-w-7xl w-full px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <SectionLabel text="Hakkımızda" />
            <h1
              className="font-heading text-5xl sm:text-7xl md:text-8xl uppercase leading-none tracking-wide mb-6"
              style={{ color: '#ffffff', fontFamily: 'var(--font-heading)' }}
            >
              Kompozit{' '}
              <span className="text-gradient-gold">Üretimde</span>
              <br />
              15 Yıl
            </h1>
            <p
              className="max-w-2xl text-base sm:text-lg leading-relaxed"
              style={{ color: '#D1D5DB', fontFamily: 'var(--font-body)' }}
            >
              2010 yılında Ankara&apos;da kurulan Yüksel Kompozit Teknolojileri A.Ş.,
              AS9100 sertifikalı üretim altyapısıyla Türkiye&apos;nin havacılık ve
              savunma sanayiinin önde gelen kompozit parça üreticilerinden biridir.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

/* ─── İstatistik Bar ──────────────────────────────────────────── */
const istatistikler = [
  { icon: Factory,    deger: '2010',   etiket: 'Kuruluş Yılı',       aciklama: 'Ankara, Türkiye'                  },
  { icon: Users,      deger: '100+',   etiket: 'Uzman Çalışan',       aciklama: 'Mühendis & teknisyen kadrosu'     },
  { icon: TrendingUp, deger: '500+',   etiket: 'Tamamlanan Proje',    aciklama: 'Havacılık & savunma projeleri'    },
  { icon: Award,      deger: 'AS9100', etiket: 'Kalite Sertifikası',  aciklama: 'Havacılık Kalite Yönetim Sistemi' },
]

function IstatistikBar() {
  return (
    <section
      style={{
        background: 'rgba(10,22,40,0.97)',
        borderTop: '1px solid rgba(212,165,116,0.3)',
        borderBottom: '1px solid rgba(212,165,116,0.1)',
      }}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4">
          {istatistikler.map((item, i) => {
            const Icon = item.icon
            return (
              <div
                key={item.etiket}
                className="flex flex-col items-center text-center py-8 px-4"
                style={{
                  borderRight:
                    i === 0 || i === 2
                      ? '1px solid rgba(212,165,116,0.12)'
                      : i === 1
                      ? '1px solid rgba(212,165,116,0.12)'
                      : 'none',
                }}
              >
                <Icon size={20} style={{ color: 'rgba(212,165,116,0.5)', marginBottom: '8px' }} strokeWidth={1.5} />
                <span
                  className="font-heading text-4xl leading-none mb-1"
                  style={{ color: '#D4A574', fontFamily: 'var(--font-heading)' }}
                >
                  {item.deger}
                </span>
                <span
                  className="text-xs font-semibold uppercase tracking-widest mb-1"
                  style={{ color: '#F8F9FA', fontFamily: 'var(--font-body)' }}
                >
                  {item.etiket}
                </span>
                <span
                  className="text-xs leading-snug"
                  style={{ color: '#94A3B8', fontFamily: 'var(--font-body)' }}
                >
                  {item.aciklama}
                </span>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

/* ─── Şirket Hikayesi ─────────────────────────────────────────── */
function SirketHikayesi() {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section ref={ref} className="py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">

          {/* Metin */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -24 }}
            transition={{ duration: 0.6 }}
          >
            <SectionLabel text="Şirket Profili" />
            <h2
              className="font-heading text-4xl md:text-5xl uppercase tracking-wide leading-none mb-6"
              style={{ color: '#F8F9FA', fontFamily: 'var(--font-heading)' }}
            >
              Havacılık &amp;{' '}
              <span className="text-gradient-gold">Savunma</span>
              <br />
              Sanayii İçin
            </h2>
            <div className="space-y-4" style={{ color: '#D1D5DB', fontFamily: 'var(--font-body)' }}>
              <p className="leading-relaxed">
                Yüksel Kompozit Teknolojileri A.Ş., 2010 yılında Ankara&apos;da havacılık
                ve savunma sektörüne yüksek kaliteli kompozit parça tedariki amacıyla
                kurulmuştur. Başkent Organize Sanayi Bölgesi&apos;ndeki modern tesisimizde,
                deneyimli mühendis ve teknisyen kadromuzla üretim faaliyetlerini sürdürmekteyiz.
              </p>
              <p className="leading-relaxed">
                CFRP (Karbon Fiber Takviyeli Polimer) ve GFRP (Cam Fiber Takviyeli Polimer)
                malzemelerde uzmanlaşmış firmamız; prepreg, vakum infüzyon ve autoclave
                kürleme teknolojilerini kullanarak havacılık sınıfı parçalar üretmektedir.
              </p>
              <p className="leading-relaxed">
                AS9100, NADCAP NDT ve NADCAP Composite akreditasyonlarına sahip kalite yönetim
                sistemimiz, Türk Silahlı Kuvvetleri ve Savunma Sanayii Başkanlığı onaylı tedarikçi
                listemizde yer almamızı sağlamaktadır.
              </p>
            </div>
          </motion.div>

          {/* Tesis Bilgileri */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 24 }}
            transition={{ duration: 0.6, delay: 0.15 }}
          >
            <div className="flex items-start gap-3 mb-8">
              <MapPin size={16} style={{ color: '#D4A574', marginTop: '2px', flexShrink: 0 }} />
              <div>
                <p
                  className="text-sm font-semibold mb-0.5"
                  style={{ color: '#F8F9FA', fontFamily: 'var(--font-body)' }}
                >
                  Başkent Organize Sanayi Bölgesi
                </p>
                <p className="text-sm" style={{ color: '#D1D5DB', fontFamily: 'var(--font-body)' }}>
                  Sadi Türk Bulvarı No: 5, Temelli, Ankara 06909 — Türkiye
                </p>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {[
                { label: 'Toplam Alan',  val: '5.000 m²' },
                { label: 'Üretim Alanı', val: '3.000 m²' },
                { label: 'Temiz Oda',    val: '500 m²'   },
                { label: 'Depo',         val: '1.500 m²' },
              ].map((item) => (
                <div
                  key={item.label}
                  className="rounded-xl p-6 text-center"
                  style={{
                    background: '#0D1B2E',
                    border: '1px solid rgba(212,165,116,0.2)',
                  }}
                >
                  <span
                    className="block font-heading text-3xl leading-none mb-2"
                    style={{ color: '#D4A574', fontFamily: 'var(--font-heading)', fontWeight: 900 }}
                  >
                    {item.val}
                  </span>
                  <span
                    className="text-[10px] uppercase tracking-wider"
                    style={{ color: '#D1D5DB', fontFamily: 'var(--font-body)' }}
                  >
                    {item.label}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

/* ─── Tarihçe ─────────────────────────────────────────────────── */
const milestones = [
  { yil: '2010', baslik: 'Kuruluş',                  aciklama: 'Ankara\'da Yüksel Kompozit Teknolojileri A.Ş. kuruldu. Başkent OSB Temelli\'de ilk üretim tesisi faaliyete geçti.' },
  { yil: '2012', baslik: 'İlk Havacılık Sözleşmesi', aciklama: 'Türk havacılık sanayii için ilk CFRP parça üretim sözleşmesi imzalandı.' },
  { yil: '2015', baslik: 'AS9100 Sertifikası',        aciklama: 'Havacılık Kalite Yönetim Sistemi AS9100 sertifikası alındı.' },
  { yil: '2017', baslik: 'Tesis Genişlemesi',         aciklama: 'Üretim alanı 3.000 m²\'ye çıkarıldı. İkinci autoclave sistemi devreye alındı.' },
  { yil: '2019', baslik: 'NADCAP Akreditasyonu',      aciklama: 'NADCAP NDT ve NADCAP Composite akreditasyonları alındı.' },
  { yil: '2021', baslik: 'İHA Üretimi',               aciklama: 'İnsansız Hava Aracı yapısal kompozit parça üretimine başlandı.' },
]

function Tarihce() {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section
      ref={ref}
      className="py-20 md:py-28"
      style={{ background: 'rgba(13,13,13,0.5)' }}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <SectionLabel text="Tarihçemiz" />
          <h2
            className="font-heading text-4xl md:text-5xl uppercase tracking-wide"
            style={{ color: '#F8F9FA', fontFamily: 'var(--font-heading)' }}
          >
            15 Yıllık{' '}
            <span className="text-gradient-gold">Başarı Hikayesi</span>
          </h2>
        </motion.div>

        {/* Sol kenarlı dikey timeline */}
        <div
          className="relative pl-10"
          style={{ borderLeft: '2px solid rgba(212,165,116,0.4)' }}
        >
          <div className="space-y-10">
            {milestones.map((m, i) => (
              <motion.div
                key={m.yil}
                initial={{ opacity: 0, x: -16 }}
                animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -16 }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="relative"
              >
                {/* Nokta */}
                <div
                  className="absolute -left-[45px] top-2 w-4 h-4 rounded-full"
                  style={{ background: '#D4A574' }}
                />
                {/* Yıl */}
                <span
                  className="block text-2xl mb-1"
                  style={{
                    color: '#D4A574',
                    fontFamily: 'var(--font-mono)',
                    fontWeight: 900,
                  }}
                >
                  {m.yil}
                </span>
                {/* Başlık */}
                <h3
                  className="text-lg font-bold mb-2 uppercase tracking-wide"
                  style={{ color: '#ffffff', fontFamily: 'var(--font-heading)' }}
                >
                  {m.baslik}
                </h3>
                {/* Açıklama */}
                <p
                  className="text-sm leading-relaxed"
                  style={{ color: '#D1D5DB', fontFamily: 'var(--font-body)' }}
                >
                  {m.aciklama}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

/* ─── Misyon & Vizyon ─────────────────────────────────────────── */
function MisyonVizyon() {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  const kartlar = [
    {
      Icon: Target,
      baslik: 'Misyonumuz',
      borderColor: '#D4A574',
      icerik:
        'Havacılık ve savunma sanayiine dünya standartlarında, AS9100 sertifikalı kompozit parça üretimi sunmak; müşterilerimizin güvendiği, sektörün değer verdiği bir üretici olmak.',
    },
    {
      Icon: Eye,
      baslik: 'Vizyonumuz',
      borderColor: 'rgba(212,165,116,0.5)',
      icerik:
        'Türkiye\'nin en büyük ve en güvenilir havacılık kompozit parça üreticisi olmak; uluslararası havacılık OEM\'leri ile küresel tedarik zincirinde yer alarak ihracatı artırmak.',
    },
  ]

  return (
    <section ref={ref} className="py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {kartlar.map((item, i) => {
            const Icon = item.Icon
            return (
              <motion.div
                key={item.baslik}
                initial={{ opacity: 0, y: 24 }}
                animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }}
                transition={{ duration: 0.6, delay: i * 0.15 }}
                className="rounded-xl p-8"
                style={{
                  background: '#0D1B2E',
                  borderLeft: `4px solid ${item.borderColor}`,
                }}
              >
                <Icon
                  size={26}
                  style={{ color: '#D4A574', marginBottom: '16px' }}
                  strokeWidth={1.5}
                />
                <h3
                  className="font-heading text-2xl uppercase tracking-wide mb-4"
                  style={{ color: '#D4A574', fontFamily: 'var(--font-heading)' }}
                >
                  {item.baslik}
                </h3>
                <p
                  className="leading-relaxed"
                  style={{ color: '#D1D5DB', fontFamily: 'var(--font-body)' }}
                >
                  {item.icerik}
                </p>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

/* ─── CTA ─────────────────────────────────────────────────────── */
function CTABolumu() {
  return (
    <section
      className="py-20"
      style={{
        background: 'linear-gradient(to right, #0A1628, #0D1B2E)',
        borderTop: '1px solid rgba(212,165,116,0.15)',
      }}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
        <h2
          className="font-heading text-3xl sm:text-4xl uppercase tracking-wide mb-4"
          style={{ color: '#F8F9FA', fontFamily: 'var(--font-heading)' }}
        >
          Üretim Gücümüzden{' '}
          <span className="text-gradient-gold">Yararlanın</span>
        </h2>
        <p
          className="text-sm sm:text-base mb-8 max-w-xl mx-auto leading-relaxed"
          style={{ color: '#D1D5DB', fontFamily: 'var(--font-body)' }}
        >
          Havacılık ve savunma sanayii için yüksek kaliteli kompozit parça üretiminde
          deneyimli ekibimizle projenizi birlikte değerlendirelim.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/iletisim"
            className="inline-flex items-center justify-center gap-2 px-8 py-3 text-sm font-semibold rounded-full transition-all duration-200 hover:scale-105"
            style={{
              background: '#D4A574',
              color: '#0A1628',
              fontFamily: 'var(--font-body)',
              boxShadow: '0 4px 20px rgba(212,165,116,0.35)',
            }}
          >
            Teklif Al
          </Link>
          <Link
            href="/hizmetler"
            className="inline-flex items-center justify-center gap-2 px-8 py-3 text-sm font-semibold rounded-full transition-all duration-200 hover:bg-white/10"
            style={{
              border: '1px solid rgba(212,165,116,0.4)',
              color: '#D4A574',
              fontFamily: 'var(--font-body)',
            }}
          >
            Hizmetlerimiz
          </Link>
        </div>
      </div>
    </section>
  )
}

/* ─── Sayfa ───────────────────────────────────────────────────── */
export default function HakkimizdaSayfasi() {
  return (
    <>
      <Header />
      <main>
        <PageHero />
        <IstatistikBar />
        <SirketHikayesi />
        <Tarihce />
        <MisyonVizyon />
        <CTABolumu />
      </main>
      <Footer lang="tr" />
    </>
  )
}
