'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import Gorsel from '@/components/ui/Gorsel'
import { MapPin, Users, Award, Factory, Target, Eye, TrendingUp } from 'lucide-react'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'

/* ─── Yardımcı: Bölüm Etiketi ────────────────────────────────── */
function SectionLabel({ text }: { text: string }) {
  return (
    <div className="flex items-center gap-3 mb-4">
      <span className="h-px w-8" style={{ background: '#1E6BB5' }} />
      <span className="text-xs tracking-[0.3em] uppercase"
        style={{ color: '#1E6BB5', fontFamily: 'var(--font-mono)' }}>
        {text}
      </span>
    </div>
  )
}

/* ─── Sayfa Hero ──────────────────────────────────────────────── */
function PageHero() {
  return (
    <section
      className="relative pt-36 pb-24 overflow-hidden"
      style={{ background: '#0A1628' }}
      aria-label="Hakkımızda başlık"
    >
      {/* Tesis dış cephe fotoğrafı */}
      <Gorsel
        src="/images/hakkimizda/bina.jpg"
        alt="Yüksel Kompozit Teknolojileri üretim tesisi dış görünümü"
        fill
        priority
        sizes="100vw"
        className="object-cover"
        style={{ opacity: 0.22 }}
      />
      <div className="absolute inset-0" style={{ background: 'rgba(10,22,40,0.72)' }} />
      <div className="absolute inset-0 bg-carbon-pattern opacity-20" />
      <div className="absolute inset-0 bg-tech-grid" />
      <div className="divider-gold absolute bottom-0 left-0 right-0" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <SectionLabel text="Hakkımızda" />
          <h1
            className="font-heading text-5xl sm:text-7xl md:text-8xl uppercase leading-none tracking-wide mb-6"
            style={{ color: '#F8F9FA', fontFamily: 'var(--font-heading)' }}
          >
            Kompozit{' '}
            <span className="text-gradient-gold">Üretimde</span>
            <br />
            15 Yıl
          </h1>
          <p
            className="max-w-2xl text-base sm:text-lg leading-relaxed"
            style={{ color: '#6C757D', fontFamily: 'var(--font-body)' }}
          >
            2010 yılında Ankara'da kurulan Yüksel Kompozit Teknolojileri A.Ş.,
            AS9100 sertifikalı üretim altyapısıyla Türkiye'nin havacılık ve
            savunma sanayiinin önde gelen kompozit parça üreticilerinden biridir.
          </p>
        </motion.div>
      </div>
    </section>
  )
}

/* ─── Hızlı Bilgiler ──────────────────────────────────────────── */
const hizliBilgiler = [
  { icon: Factory,  deger: '2010',       etiket: 'Kuruluş Yılı',        aciklama: 'Ankara, Türkiye'              },
  { icon: Users,    deger: '100+',        etiket: 'Uzman Çalışan',        aciklama: 'Mühendis & teknisyen kadrosu' },
  { icon: TrendingUp, deger: '500+',     etiket: 'Tamamlanan Proje',     aciklama: 'Havacılık & savunma projeleri' },
  { icon: Award,    deger: 'AS9100',      etiket: 'Kalite Sertifikası',   aciklama: 'Havacılık Kalite Yönetim Sistemi' },
]

function HizliBilgiler() {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section ref={ref} className="py-16" style={{ background: 'rgba(30,58,95,0.25)' }}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {hizliBilgiler.map((b, i) => {
            const Icon = b.icon
            return (
              <motion.div
                key={b.etiket}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="flex flex-col items-center text-center p-6 rounded-lg"
                style={{ border: '1px solid rgba(30,107,181,0.15)', background: 'rgba(10,22,40,0.5)' }}
              >
                <div
                  className="w-12 h-12 rounded-lg flex items-center justify-center mb-4"
                  style={{ background: 'rgba(30,107,181,0.1)', border: '1px solid rgba(30,107,181,0.25)' }}
                >
                  <Icon size={22} style={{ color: '#1E6BB5' }} strokeWidth={1.5} />
                </div>
                <span
                  className="font-heading text-4xl leading-none mb-1 text-gradient-gold"
                  style={{ fontFamily: 'var(--font-heading)' }}
                >
                  {b.deger}
                </span>
                <span
                  className="text-xs font-semibold uppercase tracking-widest mb-1"
                  style={{ color: '#F8F9FA', fontFamily: 'var(--font-body)' }}
                >
                  {b.etiket}
                </span>
                <span
                  className="text-xs leading-snug"
                  style={{ color: 'rgba(108,117,125,0.7)', fontFamily: 'var(--font-body)' }}
                >
                  {b.aciklama}
                </span>
              </motion.div>
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
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Metin */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
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
            <div className="space-y-4" style={{ color: '#6C757D', fontFamily: 'var(--font-body)' }}>
              <p className="leading-relaxed">
                Yüksel Kompozit Teknolojileri A.Ş., 2010 yılında Ankara'da havacılık
                ve savunma sektörüne yüksek kaliteli kompozit parça tedariki amacıyla
                kurulmuştur. Başkent Organize Sanayi Bölgesi'ndeki modern tesisimizde,
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

          {/* Konum kartı */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="rounded-xl overflow-hidden"
            style={{ border: '1px solid rgba(30,107,181,0.2)' }}
          >
            {/* Fabrika iç görünümü */}
            <div className="relative h-56 overflow-hidden">
              <Gorsel
                src="/images/fabrika-kareleri/hakkimizda-fabrika-genel-premium.png"
                alt="Yüksel Kompozit Teknolojileri üretim tesisi — fabrika genel görünüm"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover ken-burns-card"
              />
              <div
                className="absolute inset-0"
                style={{ background: 'linear-gradient(to bottom, transparent 40%, rgba(10,22,40,0.85))' }}
              />
              <div className="absolute bottom-3 left-4 flex items-center gap-2">
                <MapPin size={14} style={{ color: '#1E6BB5' }} />
                <span className="text-xs" style={{ color: 'rgba(248,249,250,0.7)', fontFamily: 'var(--font-body)' }}>
                  Başkent OSB, Temelli / Ankara
                </span>
              </div>
            </div>

            {/* Adres detayı */}
            <div className="p-6 space-y-3" style={{ background: 'rgba(30,58,95,0.3)' }}>
              <div className="flex items-start gap-3">
                <MapPin size={16} style={{ color: '#1E6BB5', marginTop: '2px', flexShrink: 0 }} />
                <div>
                  <p
                    className="text-sm font-semibold mb-0.5"
                    style={{ color: '#F8F9FA', fontFamily: 'var(--font-body)' }}
                  >
                    Başkent Organize Sanayi Bölgesi
                  </p>
                  <p className="text-sm" style={{ color: '#6C757D', fontFamily: 'var(--font-body)' }}>
                    Sadi Türk Bulvarı No: 5, Temelli, Ankara 06909 — Türkiye
                  </p>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-3 pt-2"
                style={{ borderTop: '1px solid rgba(255,255,255,0.05)' }}>
                {[
                  { label: 'Toplam Alan', val: '5.000 m²' },
                  { label: 'Üretim Alanı', val: '3.000 m²' },
                  { label: 'Temiz Oda', val: '500 m²' },
                  { label: 'Depo', val: '1.500 m²' },
                ].map((item) => (
                  <div key={item.label} className="text-center">
                    <span
                      className="block font-heading text-xl text-gradient-gold"
                      style={{ fontFamily: 'var(--font-heading)' }}
                    >
                      {item.val}
                    </span>
                    <span
                      className="text-[10px] uppercase tracking-wider"
                      style={{ color: '#6C757D', fontFamily: 'var(--font-body)' }}
                    >
                      {item.label}
                    </span>
                  </div>
                ))}
              </div>
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
          animate={inView ? { opacity: 1, y: 0 } : {}}
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

        {/* Timeline */}
        <div className="relative">
          {/* Dikey çizgi */}
          <div
            className="absolute left-[60px] sm:left-1/2 top-0 bottom-0 w-px hidden sm:block"
            style={{ background: 'linear-gradient(to bottom, transparent, rgba(30,107,181,0.3) 10%, rgba(30,107,181,0.3) 90%, transparent)' }}
          />

          <div className="space-y-10">
            {milestones.map((m, i) => (
              <motion.div
                key={m.yil}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className={`relative flex flex-col sm:flex-row gap-6 ${i % 2 === 0 ? 'sm:flex-row' : 'sm:flex-row-reverse'}`}
              >
                {/* Kart */}
                <div className="sm:w-[calc(50%-40px)]">
                  <div
                    className="p-5 rounded-lg"
                    style={{
                      border: '1px solid rgba(30,107,181,0.15)',
                      background: 'rgba(30,58,95,0.2)',
                    }}
                  >
                    <span
                      className="font-mono text-xs text-accent mb-2 block tracking-widest"
                      style={{ color: '#1E6BB5', fontFamily: 'var(--font-mono)' }}
                    >
                      {m.yil}
                    </span>
                    <h3
                      className="font-heading text-xl uppercase tracking-wide mb-2"
                      style={{ color: '#F8F9FA', fontFamily: 'var(--font-heading)' }}
                    >
                      {m.baslik}
                    </h3>
                    <p
                      className="text-sm leading-relaxed"
                      style={{ color: '#6C757D', fontFamily: 'var(--font-body)' }}
                    >
                      {m.aciklama}
                    </p>
                  </div>
                </div>

                {/* Orta nokta */}
                <div className="hidden sm:flex w-20 justify-center items-start pt-5 shrink-0">
                  <div
                    className="w-3 h-3 rounded-full border-2"
                    style={{ background: '#0A1628', borderColor: '#1E6BB5' }}
                  />
                </div>

                {/* Boşluk */}
                <div className="sm:w-[calc(50%-40px)] hidden sm:block" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

/* ─── Misyon / Vizyon ─────────────────────────────────────────── */
function MisyonVizyon() {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section ref={ref} className="py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {[
            {
              Icon: Target,
              baslik: 'Misyonumuz',
              icerik:
                'Havacılık ve savunma sanayiine dünya standartlarında, AS9100 sertifikalı kompozit parça üretimi sunmak; müşterilerimizin güvendiği, sektörün değer verdiği bir üretici olmak.',
            },
            {
              Icon: Eye,
              baslik: 'Vizyonumuz',
              icerik:
                'Türkiye\'nin en büyük ve en güvenilir havacılık kompozit parça üreticisi olmak; uluslararası havacılık OEM\'leri ile küresel tedarik zincirinde yer alarak ihracatı artırmak.',
            },
          ].map((item, i) => {
            const Icon = item.Icon
            return (
              <motion.div
                key={item.baslik}
                initial={{ opacity: 0, y: 24 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: i * 0.15 }}
                className="p-8 rounded-xl"
                style={{ border: '1px solid rgba(30,107,181,0.2)', background: 'rgba(30,58,95,0.25)' }}
              >
                <div
                  className="w-14 h-14 rounded-lg flex items-center justify-center mb-6"
                  style={{ background: 'rgba(30,107,181,0.1)', border: '1px solid rgba(30,107,181,0.3)' }}
                >
                  <Icon size={26} style={{ color: '#1E6BB5' }} strokeWidth={1.5} />
                </div>
                <h3
                  className="font-heading text-2xl uppercase tracking-wide mb-4"
                  style={{ color: '#1E6BB5', fontFamily: 'var(--font-heading)' }}
                >
                  {item.baslik}
                </h3>
                <p
                  className="leading-relaxed"
                  style={{ color: '#6C757D', fontFamily: 'var(--font-body)' }}
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


/* ─── Sayfa ───────────────────────────────────────────────────── */
export default function HakkimizdaSayfasi() {
  return (
    <>
      <Header />
      <main>
        <PageHero />
        <HizliBilgiler />
        <SirketHikayesi />
        <Tarihce />
        <MisyonVizyon />
      </main>
      <Footer lang="tr" />
    </>
  )
}
