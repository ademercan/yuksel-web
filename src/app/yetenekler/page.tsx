'use client'

import { useRef } from 'react'
import Link from 'next/link'
import { motion, useInView } from 'framer-motion'
import { ArrowRight, CheckCircle2, Gauge, Layers, Microscope, Ruler } from 'lucide-react'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import EkipmanKarti from '@/components/ui/EkipmanKarti'

function SectionLabel({ text }: { text: string }) {
  return (
    <div className="flex items-center gap-3 mb-4">
      <span className="h-px w-8" style={{ background: '#D4A574' }} />
      <span className="text-xs tracking-[0.3em] uppercase"
        style={{ color: '#D4A574', fontFamily: 'var(--font-mono)' }}>{text}</span>
    </div>
  )
}

/* ─── Makine Parkı Verileri ───────────────────────────────────── */
const makineler = [
  { kategori: 'Kürleme Sistemleri',  makine: 'Otoklav Sistemi — ASC',              adet: '1',  kapasite: 'Ø2.5m × 7.0m',           sicaklik: 'ASC marka'                          },
  { kategori: 'Kürleme Sistemleri',  makine: 'Otoklav Sistemi — Akarmak',          adet: '1',  kapasite: '—',                       sicaklik: 'Akarmak marka'                      },
  { kategori: 'Kürleme Sistemleri',  makine: 'Oven (Fırın)',                        adet: '1',  kapasite: '2m × 5m × 2m',           sicaklik: '200°C'                              },
  { kategori: 'İşleme',             makine: '5 Eksenli CNC Router',               adet: '1',  kapasite: '2000 × 1500 × 600 mm',   sicaklik: 'Thermwood M90-105 Multi Purpose'    },
  { kategori: 'İşleme',             makine: '3 Eksenli CNC Freze — VarolMak',     adet: '1',  kapasite: '—',                       sicaklik: 'VarolMak'                           },
  { kategori: 'Kesim & Serim',      makine: 'Ply Cutter',                          adet: '1',  kapasite: '—',                       sicaklik: 'Gerber DCS 2600 – 8.3 FT Pivex'    },
  { kategori: 'Kesim & Serim',      makine: 'Lazer Projektör',                     adet: '1',  kapasite: '—',                       sicaklik: 'Virtek · Dual Head Laser Edge System' },
  { kategori: 'Vakum & İnfüzyon',   makine: 'Vakum İnfüzyon Sistemi',             adet: '5+', kapasite: 'Sınırsız alan',           sicaklik: 'Oda sıcaklığı'                      },
  { kategori: 'Kalite Kontrol',     makine: 'Ultrasonik C-Scan NDT',              adet: '1',  kapasite: '2000 × 1500 mm',          sicaklik: 'Midas C-Scan · C-Scan + A-Scan'    },
  { kategori: 'Kalite Kontrol',     makine: 'CMM Koordinat Ölçüm',               adet: '1',  kapasite: '1500 × 1000 × 700 mm',   sicaklik: '—'                                  },
  { kategori: 'Test Laboratuvarı',  makine: 'Mekanik Test Cihazı',               adet: '1',  kapasite: '250 kN',                  sicaklik: 'Instron 250 kN · M&P Laboratuvarı' },
  { kategori: 'Test Laboratuvarı',  makine: 'Termal Analiz — TGA',               adet: '1',  kapasite: '—',                       sicaklik: 'TA Instruments Q50'                 },
  { kategori: 'Test Laboratuvarı',  makine: 'Termal Analiz — DSC',               adet: '1',  kapasite: '—',                       sicaklik: 'TA Instruments Q20'                 },
  { kategori: 'Boyama',             makine: 'Boya ve Kurutma Odası',             adet: '1',  kapasite: '6.5m × 9.0m × 3.8m',     sicaklik: 'Durst'                              },
  { kategori: 'Depolama',           makine: 'Soğuk Depo (Prepreg)',              adet: '2',  kapasite: '20 m³',                   sicaklik: '-18°C'                              },
]

/* ─── Teknik Yetkinlikler ─────────────────────────────────────── */
const yetkinlikler = [
  {
    Icon: Layers,
    baslik: 'Malzeme Teknolojileri',
    items: [
      'CFRP — Karbon Fiber Takviyeli Polimer',
      'GFRP — Cam Fiber Takviyeli Polimer',
      'AFRP — Aramid (Kevlar) Takviyeli',
      'Hibrit Laminatlar (karbon+cam)',
      'Sandviç yapılar (Nomex / alüminyum petek)',
      'Termoset reçineler (epoksi, bismaleim)',
    ],
  },
  {
    Icon: Gauge,
    baslik: 'Üretim Prosesleri',
    items: [
      'Prepreg / Autoclave Kürleme',
      'Vakum İnfüzyon (VARTM)',
      'Resin Transfer Molding (RTM)',
      'Wet Lay-up',
      'Filament Winding',
      'Oto-klave dışı kürleme (OoA)',
    ],
  },
  {
    Icon: Microscope,
    baslik: 'Kalite & NDT Yöntemleri',
    items: [
      'Ultrasonik C-Scan muayene',
      'Phased Array UT',
      'Termografi (sızdırmazlık testi)',
      'Göz muayenesi (VT)',
      'CMM boyutsal ölçüm',
      'Mekanik özellik testleri (3PB, ILSS)',
    ],
  },
  {
    Icon: Ruler,
    baslik: 'Yazılım & Tasarım',
    items: [
      'CATIA V5 / V6',
      'SolidWorks',
      'ANSYS (FEM analiz)',
      'Abaqus (kompozit analiz)',
      'Laminate Tools (laminat tasarımı)',
      'PLM — Windchill',
    ],
  },
]

/* ─── Sertifika & Standartlar ─────────────────────────────────── */
const standartlar = [
  'AS9100 Rev D',
  'EN9100:2018',
  'ISO 9001:2015',
  'MIL-HDBK-17 (Kompozit Malzeme El Kitabı)',
  'ASTM D3039 (Çekme testi)',
  'ASTM D2344 (ILSS testi)',
  'ASTM D790 (Eğme testi)',
  'Boeing BMS serisi malzeme spesifikasyonları',
  'Airbus AIMS serisi malzeme spesifikasyonları',
]

function YetkinliklerGrid() {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section ref={ref} className="py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <SectionLabel text="Teknik Yetkinlikler" />
          <h2 className="font-heading text-4xl md:text-5xl uppercase tracking-wide"
            style={{ color: '#F8F9FA', fontFamily: 'var(--font-heading)' }}>
            Üretim <span className="text-gradient-gold">Kapasitemiz</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {yetkinlikler.map((y, i) => {
            const Icon = y.Icon
            return (
              <motion.div
                key={y.baslik}
                initial={{ opacity: 0, y: 24 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="p-6 rounded-lg"
                style={{ border: '1px solid rgba(30,107,181,0.15)', background: 'rgba(30,58,95,0.2)' }}
              >
                <div className="flex items-center gap-3 mb-5">
                  <div
                    className="w-10 h-10 rounded-lg flex items-center justify-center"
                    style={{ background: 'rgba(30,107,181,0.1)', border: '1px solid rgba(30,107,181,0.25)' }}
                  >
                    <Icon size={18} style={{ color: '#1E6BB5' }} strokeWidth={1.5} />
                  </div>
                  <h3 className="font-heading text-xl uppercase tracking-wide"
                    style={{ color: '#F8F9FA', fontFamily: 'var(--font-heading)' }}>
                    {y.baslik}
                  </h3>
                </div>
                <ul className="space-y-2">
                  {y.items.map((item) => (
                    <li key={item} className="flex items-start gap-2">
                      <CheckCircle2 size={13} style={{ color: '#D4A574', marginTop: '3px', flexShrink: 0 }} />
                      <span className="text-sm" style={{ color: '#D1D5DB', fontFamily: 'var(--font-body)' }}>
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

function MakineParkiTablosu() {
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
          className="mb-10"
        >
          <SectionLabel text="Makine Parkı" />
          <h2 className="font-heading text-4xl md:text-5xl uppercase tracking-wide"
            style={{ color: '#F8F9FA', fontFamily: 'var(--font-heading)' }}>
            Ekipman &amp; <span className="text-gradient-gold">Altyapı</span>
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="overflow-x-auto rounded-lg"
          style={{ border: '1px solid rgba(30,107,181,0.15)' }}
        >
          <table className="w-full text-sm">
            <thead>
              <tr style={{ background: 'rgba(30,58,95,0.5)' }}>
                {['Kategori', 'Ekipman', 'Adet', 'Kapasite', 'Sıcaklık / Not'].map((h) => (
                  <th
                    key={h}
                    className="text-left px-5 py-3.5 text-xs font-semibold uppercase tracking-widest"
                    style={{ color: '#1E6BB5', fontFamily: 'var(--font-mono)', borderBottom: '1px solid rgba(30,107,181,0.2)' }}
                  >
                    {h}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {makineler.map((m, i) => (
                <tr
                  key={`${m.makine}-${i}`}
                  style={{
                    background: i % 2 === 0 ? 'rgba(10,22,40,0.4)' : 'rgba(30,58,95,0.15)',
                    borderBottom: '1px solid rgba(255,255,255,0.04)',
                  }}
                >
                  <td className="px-5 py-3.5">
                    <span
                      className="text-[10px] uppercase tracking-wider rounded px-2 py-0.5"
                      style={{ color: 'rgba(30,107,181,0.7)', border: '1px solid rgba(30,107,181,0.15)', fontFamily: 'var(--font-mono)' }}
                    >
                      {m.kategori}
                    </span>
                  </td>
                  <td className="px-5 py-3.5 font-medium"
                    style={{ color: '#F8F9FA', fontFamily: 'var(--font-body)' }}>
                    {m.makine}
                  </td>
                  <td className="px-5 py-3.5 text-center font-heading text-lg"
                    style={{ color: '#1E6BB5', fontFamily: 'var(--font-heading)' }}>
                    {m.adet}
                  </td>
                  <td className="px-5 py-3.5"
                    style={{ color: '#D1D5DB', fontFamily: 'var(--font-mono)', fontSize: '11px' }}>
                    {m.kapasite}
                  </td>
                  <td className="px-5 py-3.5"
                    style={{ color: '#D1D5DB', fontFamily: 'var(--font-mono)', fontSize: '11px' }}>
                    {m.sicaklik}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </motion.div>
      </div>
    </section>
  )
}

/* ─── Makine Galerisi ─────────────────────────────────────────── */
const makineGorseller = [
  { src: '/images/hizmetler/otoklav.jpg',         alt: 'Otoklav yüksek basınç kürleme sistemi',  baslik: 'OTOKLAV SİSTEMİ',        tag: 'Yüksek basınç kürleme' },
  { src: '/images/hizmetler/temiz-oda.jpg',       alt: 'ISO Class 8 kontrollü temiz oda',        baslik: 'TEMİZ ODA',               tag: 'Kontrollü üretim ortamı' },
  { src: '/images/hizmetler/cnc-makine.jpg',      alt: '5 eksenli CNC routing ve drilling',      baslik: 'CNC ROUTING & DRILLING',  tag: 'Hassas işleme merkezi' },
  { src: '/images/hizmetler/kesim-makinesi.jpg',  alt: 'CNC kumaş ve prepreg kesim makinesi',    baslik: 'KESİM MAKİNESİ',          tag: 'Gerber DCS 2600' },
  { src: '/images/hizmetler/firin.jpg',           alt: 'Kompozit kürleme fırını 2×5×2 m',        baslik: 'KÜRLEME FIRINI',          tag: '2m × 5m × 2m' },
  { src: '/images/hizmetler/kurutma-firini.jpg',  alt: 'Endüstriyel kurutma fırını',             baslik: 'KURUTMA FIRINI',          tag: 'Durst 5×12×4m' },
  { src: '/images/hizmetler/boyama-kabini.jpg',   alt: 'Boyama ve kurutma kabini',               baslik: 'BOYAMA KABİNİ',           tag: 'Painting Booth' },
  { src: '/images/hizmetler/trimming-kabini.jpg', alt: 'Trimming ve temizleme kabini',           baslik: 'TRİMMİNG KABİNİ',         tag: 'Durst 5×12×4m' },
]

function MakineGalerisi() {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section ref={ref} className="py-20 md:py-28" style={{ background: '#0A1628' }}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-10"
        >
          <SectionLabel text="Tesis Fotoğrafları" />
          <h2
            className="font-heading text-4xl md:text-5xl uppercase tracking-wide"
            style={{ color: '#F8F9FA', fontFamily: 'var(--font-heading)' }}
          >
            Makine <span className="text-gradient-gold">Galerisi</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
          {makineGorseller.map((g, i) => (
            <EkipmanKarti
              key={`${g.src}-${i}`}
              src={g.src}
              alt={g.alt}
              baslik={g.baslik}
              tag={g.tag}
              index={i}
              sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
            />
          ))}
        </div>
      </div>
    </section>
  )
}

function StandartlarBolumu() {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section ref={ref} className="py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <SectionLabel text="Standartlar & Spesifikasyonlar" />
            <h2 className="font-heading text-4xl md:text-5xl uppercase tracking-wide mb-6"
              style={{ color: '#F8F9FA', fontFamily: 'var(--font-heading)' }}>
              Uyumluluk &amp;{' '}
              <span className="text-gradient-gold">Referanslar</span>
            </h2>
            <div className="space-y-2.5">
              {standartlar.map((s) => (
                <div key={s} className="flex items-start gap-3">
                  <CheckCircle2 size={15} style={{ color: '#D4A574', marginTop: '2px', flexShrink: 0 }} />
                  <span className="text-sm" style={{ color: '#D1D5DB', fontFamily: 'var(--font-body)' }}>
                    {s}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Kapasite rakamları */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="grid grid-cols-2 gap-4"
          >
            {[
              { val: '5.000 m²', label: 'Toplam Tesis Alanı' },
              { val: '3.000 m²', label: 'Üretim Alanı' },
              { val: '500 m²',   label: 'ISO 7 Temiz Oda' },
              { val: '1.000+',   label: 'Yıllık Parça Kapasitesi' },
              { val: '2 × Ø2m', label: 'Autoclave Kapasitesi' },
              { val: '-18°C',    label: 'Soğuk Depo Sıcaklığı' },
            ].map((item) => (
              <div
                key={item.label}
                className="p-5 rounded-lg text-center"
                style={{ border: '1px solid rgba(30,107,181,0.15)', background: 'rgba(30,58,95,0.2)' }}
              >
                <span className="block font-heading text-3xl text-gradient-gold mb-1"
                  style={{ fontFamily: 'var(--font-heading)' }}>
                  {item.val}
                </span>
                <span className="text-xs uppercase tracking-wide"
                  style={{ color: '#D1D5DB', fontFamily: 'var(--font-body)' }}>
                  {item.label}
                </span>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default function YeteneklerSayfasi() {
  const heroRef = useRef<HTMLDivElement>(null)
  const heroInView = useInView(heroRef, { once: true })

  return (
    <>
      <Header />
      <main>
        {/* Hero */}
        <section
          className="relative pt-36 pb-24 overflow-hidden"
          style={{ background: 'linear-gradient(135deg, #0A1628 0%, #0D1B2E 50%, #0A1628 100%)' }}
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
              <SectionLabel text="Yetenekler" />
              <h1
                className="font-heading text-5xl sm:text-7xl md:text-8xl uppercase leading-none tracking-wide mb-6"
                style={{ color: '#F8F9FA', fontFamily: 'var(--font-heading)' }}
              >
                Teknik{' '}
                <span className="text-gradient-gold">Yetkinlik</span>
              </h1>
              <p
                className="max-w-2xl text-base sm:text-lg leading-relaxed"
                style={{ color: '#D1D5DB', fontFamily: 'var(--font-body)' }}
              >
                Modern makine parkı, AS9100 sertifikalı süreçler ve deneyimli
                kadromuzla havacılık ve savunma sanayiinin en zorlu gereksinimlerini karşılıyoruz.
              </p>
            </motion.div>
          </div>
        </section>

        <YetkinliklerGrid />
        <MakineParkiTablosu />
        <MakineGalerisi />
        <StandartlarBolumu />

        {/* CTA */}
        <section
          className="py-16 text-center"
          style={{ background: 'rgba(30,58,95,0.25)', borderTop: '1px solid rgba(30,107,181,0.1)' }}
        >
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <p className="font-heading text-2xl md:text-3xl uppercase mb-6"
              style={{ color: '#F8F9FA', fontFamily: 'var(--font-heading)' }}>
              Kapasitemizden <span className="text-gradient-gold">Yararlanın</span>
            </p>
            <Link
              href="/iletisim"
              className="inline-flex items-center gap-2 px-8 py-4 text-base font-semibold rounded-full transition-all duration-300 hover:scale-105"
              style={{ background: '#D4A574', color: '#0A1628', fontFamily: 'var(--font-body)', fontWeight: 700, boxShadow: '0 8px 24px rgba(212,165,116,0.3)' }}
            >
              Teklif İste <ArrowRight size={18} />
            </Link>
          </div>
        </section>
      </main>
      <Footer lang="tr" />
    </>
  )
}
