'use client'

import { useRef } from 'react'
import Link from 'next/link'
import { motion, useInView } from 'framer-motion'
import { Award, ShieldCheck, ClipboardCheck, ArrowRight, CheckCircle2, FileCheck } from 'lucide-react'
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

/* ─── Sertifikalar ────────────────────────────────────────────── */
const sertifikalar = [
  {
    kod: 'AS9100',
    revizyon: 'Rev.C',
    tam_adi: 'Havacılık Kalite Yönetim Sistemi',
    aciklama:
      'Havacılık, Uzay ve Savunma Sanayii için uluslararası kalite yönetim sistemi standardı. Kompozit parça tasarımı, imalatı ve montaj süreçlerini kapsamaktadır.',
    kapsam: 'Kompozit parça tasarımı, imalatı ve montajı',
    durum: 'Aktif',
    yenileme: '2026',
    renk: '#1E6BB5',
  },
  {
    kod: 'NADCAP',
    revizyon: 'NDT',
    tam_adi: 'NADCAP — Tahribatsız Muayene',
    aciklama:
      'NADCAP NDT akreditasyonu. Ultrasonik C-Scan, Phased Array ve radyografik muayene süreçleri için uluslararası özel süreç akreditasyonu.',
    kapsam: 'Ultrasonik, PA-UT, Radyografi',
    durum: 'Aktif',
    yenileme: '2026',
    renk: '#1E6BB5',
  },
  {
    kod: 'NADCAP',
    revizyon: 'COMPOSITE',
    tam_adi: 'NADCAP — Kompozit Üretim',
    aciklama:
      'NADCAP Composites akreditasyonu. Prepreg layup, autoclave kürleme ve vakum infüzyon süreçleri için havacılık özel süreç akreditasyonu.',
    kapsam: 'Prepreg, Autoclave, Vakum İnfüzyon',
    durum: 'Aktif',
    yenileme: '2026',
    renk: '#1E6BB5',
  },
  {
    kod: 'ISO 9001',
    revizyon: '2008',
    tam_adi: 'Kalite Yönetim Sistemi',
    aciklama:
      'ISO 9001:2008 sertifikasyonu. Müşteri odaklılık ve sürekli iyileştirme ilkelerine dayanan genel kalite yönetim sistemi belgesi.',
    kapsam: 'Tüm operasyonel süreçler',
    durum: 'Arşiv',
    yenileme: '—',
    renk: 'rgba(30,107,181,0.4)',
    not: 'Güncel versiyon: ISO 9001:2015',
  },
]

/* ─── Kalite Süreçleri ────────────────────────────────────────── */
const kaliteSurecler = [
  {
    Icon: FileCheck,
    baslik: 'İlk Parça Denetimi (FAI)',
    aciklama: 'AS9102 standardına uygun First Article Inspection süreci. Her yeni parça geometrisi için boyutsal doğrulama, malzeme uyumluluğu ve süreç onayı.',
    adimlar: ['Tasarım gözden geçirme', 'Boyutsal FAI', 'Malzeme sertifikası', 'Proses onayı', 'Müşteri kabulü'],
  },
  {
    Icon: ClipboardCheck,
    baslik: 'Süreç Kontrolü (SPC)',
    aciklama: 'Üretim süreçlerinin istatistiksel kontrolü. Kürleme sıcaklığı, vakum basıncı ve laminat kalınlığı gibi kritik parametreler sürekli izlenir.',
    adimlar: ['Kritik parametre tanımlama', 'Kontrol limitleri', 'Gerçek zamanlı izleme', 'Sapma müdahalesi', 'Trend analizi'],
  },
  {
    Icon: ShieldCheck,
    baslik: 'Tahribatsız Muayene (NDT)',
    aciklama: 'Ultrasonik C-Scan ve Phased Array yöntemleriyle tüm yapısal parçaların delamination, boşluk ve çatlak muayenesi.',
    adimlar: ['Ultrasonik C-Scan', 'Phased Array UT', 'Göz muayenesi (VT)', 'Sonuç raporlama', 'Saklama arşivi'],
  },
  {
    Icon: Award,
    baslik: 'Tedarikçi Kalite Yönetimi',
    aciklama: 'Onaylı tedarikçi listesi (AVL) yönetimi. Malzeme sertifikaları, MSDS ve CoC belgelerinin doğrulanması; tedarikçi denetim programı.',
    adimlar: ['Tedarikçi onay süreci', 'Gelen malzeme muayenesi', 'CoC doğrulama', 'Periyodik denetim', 'Performans izleme'],
  },
]

function SertifikalarBolumu() {
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
          <SectionLabel text="Sertifikasyonlar" />
          <h2 className="font-heading text-4xl md:text-5xl uppercase tracking-wide"
            style={{ color: '#F8F9FA', fontFamily: 'var(--font-heading)' }}>
            Kalite <span className="text-gradient-gold">Belgelerimiz</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {sertifikalar.map((s, i) => (
            <motion.div
              key={`${s.kod}-${s.revizyon}-${i}`}
              initial={{ opacity: 0, y: 24 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="rounded-xl overflow-hidden flex flex-col"
              style={{
                border: `1px solid ${s.durum === 'Aktif' ? 'rgba(212,165,116,0.3)' : 'rgba(212,165,116,0.1)'}`,
                background: 'rgba(30,58,95,0.2)',
              }}
            >
              {/* Sertifika logosu / placeholder */}
              <div
                className="h-32 flex flex-col items-center justify-center"
                style={{ background: 'rgba(10,22,40,0.6)', borderBottom: '1px solid rgba(30,107,181,0.1)' }}
              >
                <span
                  className="font-heading text-4xl mb-1"
                  style={{ color: s.renk, fontFamily: 'var(--font-heading)' }}
                >
                  {s.kod}
                </span>
                {s.revizyon && (
                  <span
                    className="text-xs tracking-widest uppercase"
                    style={{ color: 'rgba(30,107,181,0.5)', fontFamily: 'var(--font-mono)' }}
                  >
                    {s.revizyon}
                  </span>
                )}
                {'not' in s && s.not ? (
                  <span
                    className="mt-2 text-[10px]"
                    style={{ color: '#D1D5DB', fontFamily: 'var(--font-mono)', fontStyle: 'italic' }}
                  >
                    {s.not}
                  </span>
                ) : (
                  <span
                    className={`mt-2 text-[10px] tracking-wider uppercase rounded-full px-3 py-0.5 ${
                      s.durum === 'Aktif'
                        ? 'border border-green-500/30 text-green-400'
                        : 'border border-yellow-500/30 text-yellow-400'
                    }`}
                    style={{ fontFamily: 'var(--font-mono)' }}
                  >
                    {s.durum}
                  </span>
                )}
              </div>

              <div className="p-5 flex flex-col flex-grow">
                <h3
                  className="font-body font-semibold text-sm mb-2"
                  style={{ color: '#F8F9FA', fontFamily: 'var(--font-body)' }}
                >
                  {s.tam_adi}
                </h3>
                <p
                  className="text-xs leading-relaxed mb-4 flex-grow"
                  style={{ color: '#D1D5DB', fontFamily: 'var(--font-body)' }}
                >
                  {s.aciklama}
                </p>
                <div style={{ borderTop: '1px solid rgba(255,255,255,0.05)', paddingTop: '12px' }}>
                  <div className="flex justify-between text-[10px]"
                    style={{ color: 'rgba(108,117,125,0.6)', fontFamily: 'var(--font-mono)' }}>
                    <span>Kapsam: {s.kapsam}</span>
                  </div>
                  {s.yenileme !== '—' && (
                    <div className="text-[10px] mt-1"
                      style={{ color: 'rgba(108,117,125,0.6)', fontFamily: 'var(--font-mono)' }}>
                      Yenileme: {s.yenileme}
                    </div>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

function KaliteSurecleriBolumu() {
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
          <SectionLabel text="Kalite Süreçleri" />
          <h2 className="font-heading text-4xl md:text-5xl uppercase tracking-wide"
            style={{ color: '#F8F9FA', fontFamily: 'var(--font-heading)' }}>
            Sıfır Hata <span className="text-gradient-gold">Felsefesi</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {kaliteSurecler.map((s, i) => {
            const Icon = s.Icon
            return (
              <motion.div
                key={s.baslik}
                initial={{ opacity: 0, y: 24 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="p-6 rounded-xl"
                style={{ border: '1px solid rgba(30,107,181,0.15)', background: 'rgba(30,58,95,0.2)' }}
              >
                <div className="flex items-center gap-3 mb-4">
                  <div
                    className="w-10 h-10 rounded-lg flex items-center justify-center"
                    style={{ background: 'rgba(30,107,181,0.1)', border: '1px solid rgba(30,107,181,0.25)' }}
                  >
                    <Icon size={18} style={{ color: '#1E6BB5' }} strokeWidth={1.5} />
                  </div>
                  <h3 className="font-heading text-xl uppercase tracking-wide"
                    style={{ color: '#F8F9FA', fontFamily: 'var(--font-heading)' }}>
                    {s.baslik}
                  </h3>
                </div>
                <p
                  className="text-sm leading-relaxed mb-4"
                  style={{ color: '#D1D5DB', fontFamily: 'var(--font-body)' }}
                >
                  {s.aciklama}
                </p>
                <div className="flex flex-wrap gap-2">
                  {s.adimlar.map((a, j) => (
                    <div key={a} className="flex items-center gap-1.5">
                      {j > 0 && <span style={{ color: 'rgba(30,107,181,0.3)' }}>›</span>}
                      <span
                        className="text-[10px] tracking-wide"
                        style={{ color: 'rgba(30,107,181,0.7)', fontFamily: 'var(--font-mono)' }}
                      >
                        {a}
                      </span>
                    </div>
                  ))}
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

function KaliteTaahhut() {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  const maddeler = [
    'Sıfır hata hedefiyle üretim ve sürekli iyileştirme taahhüdü',
    'Her partide tam iz edilebilirlik (traceability) ve kayıt tutma',
    'Müşteriye zamanında teslim ve şeffaf iletişim',
    'Tedarikçi zincirinin AS9100 uyumluluğunun denetimi',
    'Çalışan eğitimi ve kalite kültürünün geliştirilmesi',
    'Risk bazlı düşünce ve önleyici faaliyet yönetimi',
  ]

  return (
    <section ref={ref} className="py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <SectionLabel text="Kalite Politikamız" />
            <h2 className="font-heading text-4xl md:text-5xl uppercase tracking-wide mb-6"
              style={{ color: '#F8F9FA', fontFamily: 'var(--font-heading)' }}>
              Kaliteye <span className="text-gradient-gold">Bağlılığımız</span>
            </h2>
            <ul className="space-y-3">
              {maddeler.map((m) => (
                <li key={m} className="flex items-start gap-3">
                  <CheckCircle2 size={16} style={{ color: '#D4A574', marginTop: '2px', flexShrink: 0 }} />
                  <span className="text-sm leading-relaxed"
                    style={{ color: '#D1D5DB', fontFamily: 'var(--font-body)' }}>
                    {m}
                  </span>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 24 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="p-8 rounded-xl"
            style={{ border: '1px solid rgba(30,107,181,0.2)', background: 'rgba(30,58,95,0.25)' }}
          >
            <blockquote
              className="font-heading text-2xl uppercase tracking-wide leading-relaxed mb-6"
              style={{ color: '#F8F9FA', fontFamily: 'var(--font-heading)' }}
            >
              &ldquo;Kalite bir departman değil,{' '}
              <span className="text-gradient-gold">bir kültürdür.&rdquo;</span>
            </blockquote>
            <p className="text-sm mb-6" style={{ color: '#D1D5DB', fontFamily: 'var(--font-body)' }}>
              Yüksel Kompozit olarak kaliteyi, son kontrol noktasında değil; tasarım aşamasından
              teslimata kadar sürecin her adımında yaşatıyoruz.
            </p>
            <div style={{ borderTop: '1px solid rgba(30,107,181,0.15)', paddingTop: '20px' }}>
              <Link
                href="/iletisim"
                className="inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold rounded-full transition-all duration-300 hover:scale-105"
                style={{ background: '#D4A574', color: '#0A1628', fontFamily: 'var(--font-body)', fontWeight: 700, boxShadow: '0 8px 24px rgba(212,165,116,0.3)' }}
              >
                Kalite Dokümanı İste <ArrowRight size={16} />
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
/* ─── Lab & Test Ekipmanları Görselleri ──────────────────────── */
const labGorseller = [
  { src: '/images/kalite/ndt-muayene.jpg',   alt: '8 eksenli C-Scan ve A-Scan ultrasonik NDT muayene sistemi',      baslik: 'NDT MUAYENE',    tag: 'C Scan · A Scan · Su Jeti'          },
  { src: '/images/kalite/malzeme-testi.jpg', alt: 'Instron 250 kN mekanik test cihazı ve Faro Edge ölçüm kolu',     baslik: 'MALZEME TESTİ', tag: 'Instron 250 kN'                      },
  { src: '/images/kalite/termal-analiz.jpg', alt: 'TGA Q50 ve DSC Q20 termal analiz cihazları — TA Instruments',    baslik: 'TERMAL ANALİZ', tag: 'TGA Q50 · DSC Q20 — TA Instruments'  },
]

function LabGoruntuler() {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section ref={ref} className="py-16 md:py-20" style={{ background: '#0A1628' }}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-10"
        >
          <SectionLabel text="Test & Ölçüm Ekipmanları" />
          <h2
            className="font-heading text-3xl md:text-4xl uppercase tracking-wide"
            style={{ color: '#F8F9FA', fontFamily: 'var(--font-heading)' }}
          >
            Laboratuvar <span className="text-gradient-gold">Altyapısı</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
          {labGorseller.map((g, i) => (
            <EkipmanKarti
              key={g.baslik}
              src={g.src}
              alt={g.alt}
              baslik={g.baslik}
              tag={g.tag}
              index={i}
              sizes="(max-width: 640px) 100vw, 33vw"
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default function KaliteSayfasi() {
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
              <SectionLabel text="Kalite" />
              <h1
                className="font-heading text-5xl sm:text-7xl md:text-8xl uppercase leading-none tracking-wide mb-6"
                style={{ color: '#F8F9FA', fontFamily: 'var(--font-heading)' }}
              >
                AS9100{' '}
                <span className="text-gradient-gold">Kalite</span>
                <br />
                Güvencesi
              </h1>
              <p
                className="max-w-2xl text-base sm:text-lg leading-relaxed"
                style={{ color: '#D1D5DB', fontFamily: 'var(--font-body)' }}
              >
                Havacılık ve savunma sanayiinin en yüksek kalite standartlarını
                karşılayan sertifikalı üretim süreçleri ve kalite yönetim sistemi.
              </p>
            </motion.div>
          </div>
        </section>

        <SertifikalarBolumu />
        <LabGoruntuler />
        <KaliteSurecleriBolumu />
        <KaliteTaahhut />
      </main>
      <Footer lang="tr" />
    </>
  )
}
