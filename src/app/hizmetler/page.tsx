'use client'

import { useRef } from 'react'
import Link from 'next/link'
import { motion, useInView } from 'framer-motion'
import { Layers, Settings, Cpu, Wrench, ArrowRight, CheckCircle2 } from 'lucide-react'
import Gorsel from '@/components/ui/Gorsel'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'

function SectionLabel({ text }: { text: string }) {
  return (
    <div className="flex items-center gap-3 mb-4">
      <span className="h-px w-8" style={{ background: '#D4A574' }} />
      <span className="text-xs tracking-[0.3em] uppercase"
        style={{ color: '#D4A574', fontFamily: 'var(--font-mono)' }}>{text}</span>
    </div>
  )
}

/* ─── Hizmet Verileri ─────────────────────────────────────────── */
const hizmetler = [
  {
    id: 'kompozit-parca-imalati',
    Icon: Layers,
    numara: '01',
    baslik: 'Kompozit Parça İmalatı',
    ozet: 'CFRP ve GFRP malzemelerle havacılık sınıfı kompozit parça üretimi',
    detay:
      'Karbon Fiber Takviyeli Polimer (CFRP) ve Cam Fiber Takviyeli Polimer (GFRP) malzemeleri kullanılarak, prepreg ve vakum infüzyon yöntemleriyle üretilen kompozit parçalar; autoclave sistemleriyle kürlenerek havacılık sertifikasyonu gerekliliklerini karşılayacak şekilde teslim edilir.',
    ozellikler: [
      'CFRP (Karbon Fiber Takviyeli Polimer) parçalar',
      'GFRP (Cam Fiber Takviyeli Polimer) parçalar',
      'Prepreg malzeme ile üretim',
      'Vakum infüzyon yöntemi',
      'Autoclave kürleme sistemi',
      'Termal analiz ve kalite kontrol',
      'AS9100 sertifikalı üretim süreci',
      'Prototype ve seri üretim kapasitesi',
    ],
    uygulamalar: ['Uçak yapısal parçalar', 'İHA / UAV gövde bileşenleri', 'Rotor kanatları', 'Panel & fairing'],
    href: '/hizmetler/kompozit-parca-imalati',
    img: '/images/fabrika-kareleri/hizmet-kompozit-otoklav-premium.png',
    imgAlt: 'Otoklav kürleme sistemi — kompozit parça üretimi',
  },
  {
    id: 'ana-parca-montaji',
    Icon: Settings,
    numara: '02',
    baslik: 'Ana Parça Montajı',
    ozet: 'Havacılık standartlarında yapısal montaj ve alt-assembly üretimi',
    detay:
      'Üretilen kompozit parçaların ve temin edilen bileşenlerin, havacılık mühendislik çizimlerine uygun olarak monte edilmesi. Tolerans yönetimi, bağlantı elemanı uygulamaları ve yüzey işlemleri dahil olmak üzere eksiksiz alt-montaj ve yapısal montaj hizmetleri.',
    ozellikler: [
      'Yapısal montaj ve alt-assembly',
      'Hassas tolerans yönetimi',
      'Riveting ve fastener uygulamaları',
      'Sealant ve yapıştırıcı uygulamaları',
      'Yüzey işlem ve kaplama',
      'Fonksiyonel test entegrasyonu',
      'Teknik dokümantasyon',
      'Seri üretim kapasitesi',
    ],
    uygulamalar: ['Gövde alt-montajları', 'Kontrol yüzeyleri montajı', 'Kapı & panel sistemleri', 'Yeraltı inişi bileşenleri'],
    href: '/hizmetler/ana-parca-montaji',
    img: '/images/fabrika-kareleri/hizmet-karbon-fiber-premium.png',
    imgAlt: 'Karbon fiber üretim — ana parça montajı',
  },
  {
    id: 'muhendislik-tasarim',
    Icon: Cpu,
    numara: '03',
    baslik: 'Mühendislik & Tasarım',
    ozet: 'Kompozit laminat tasarımı, FEM analiz ve hızlı prototipleme',
    detay:
      'Müşteri ihtiyaçlarına özel kompozit parça tasarımından FEM (Sonlu Elemanlar Yöntemi) analizine, malzeme seçiminden prototip üretimine kadar kapsamlı mühendislik destek hizmetleri. Tasarım doğrulama ve havacılık sertifikasyon süreçlerine teknik destek sağlanır.',
    ozellikler: [
      'Kompozit laminat sırası tasarımı',
      'FEM (Sonlu Elemanlar) analiz',
      'Malzeme seçimi danışmanlığı',
      'CATIA V5 / SolidWorks tasarım',
      'Hızlı prototipleme',
      'Tasarım doğrulama testleri',
      'Mühendislik hesap raporları',
      'Sertifikasyon dokümantasyonu',
    ],
    uygulamalar: ['Yapısal analiz', 'Yorulma analizi', 'Hasar toleransı', 'Termal analiz'],
    href: '/hizmetler/muhendislik-tasarim',
    img: '/images/fabrika-kareleri/hizmet-muhendislik-cmm-premium.png',
    imgAlt: 'CMM koordinat ölçüm makinesi — mühendislik ve tasarım',
  },
  {
    id: 'takim-aparat-imalati',
    Icon: Wrench,
    numara: '04',
    baslik: 'Takım & Aparat İmalatı',
    ozet: 'Üretim süreçlerine özel kompozit kalıp, takım ve kontrol aparatları',
    detay:
      'Kompozit parça üretimi için gerekli olan kalıplar, üretim takımları, montaj fikstürleri ve kontrol aparatlarının tasarımı ve imalatı. Uzun ömürlü, boyutsal kararlılığı yüksek kompozit takımlar ile üretim süreçlerinizde tutarlılık ve kalite güvencesi sağlanır.',
    ozellikler: [
      'Kompozit malzeme kalıp imalatı',
      'Autoclave master kalıplar',
      'Montaj fikstürleri',
      'Kontrol ve ölçüm aparatları',
      'Drill jig ve delme şablonları',
      'Vakum balonu fikstürleri',
      'Termal kompanzasyon hesabı',
      'Kalıp bakım ve revizyon',
    ],
    uygulamalar: ['Wet lay-up kalıplar', 'Prepreg kalıpları', 'RTM kalıpları', 'İnvar & CFRP takımlar'],
    href: '/hizmetler/takim-aparat-imalati',
    img: '/images/fabrika-kareleri/hizmet-cnc-tezgah-premium.png',
    imgAlt: '5 eksenli CNC tezgah — takım ve aparat imalatı',
  },
]

/* ─── Hizmet Kartı — Alternating Layout ──────────────────────── */
function HizmetKarti({ h, i }: { h: typeof hizmetler[0]; i: number }) {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })
  const { Icon } = h
  const gorselSagda = i % 2 !== 0  // 02, 04 → görsel sağda

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 32 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 32 }}
      transition={{ duration: 0.6, delay: i * 0.08 }}
      className="rounded-xl overflow-hidden"
      style={{ border: '1px solid rgba(212,165,116,0.15)', background: 'rgba(30,58,95,0.2)' }}
    >
      <div className={`flex flex-col ${gorselSagda ? 'lg:flex-row-reverse' : 'lg:flex-row'}`}>

        {/* ── Görsel ────────────────────────────────────────── */}
        <div className="relative lg:w-2/5 overflow-hidden" style={{ minHeight: '300px' }}>
          <Gorsel
            src={h.img}
            alt={h.imgAlt}
            fill
            sizes="(max-width: 1024px) 100vw, 40vw"
            className="object-cover transition-transform duration-700 hover:scale-105"
          />
          {/* Gradient overlay */}
          <div
            className="absolute inset-0"
            style={{
              background: gorselSagda
                ? 'linear-gradient(to left, transparent 40%, rgba(10,22,40,0.7))'
                : 'linear-gradient(to right, transparent 40%, rgba(10,22,40,0.7))',
            }}
          />
          {/* Numara watermark */}
          <div className="absolute top-4 left-4">
            <span
              className="font-heading text-7xl font-bold select-none"
              style={{ color: 'rgba(212,165,116,0.18)', fontFamily: 'var(--font-heading)', lineHeight: 1 }}
            >
              {h.numara}
            </span>
          </div>
        </div>

        {/* ── İçerik ────────────────────────────────────────── */}
        <div className="lg:w-3/5 p-7 md:p-10 flex flex-col justify-center">
          {/* Başlık satırı */}
          <div className="flex items-center gap-4 mb-5">
            <div
              className="w-12 h-12 rounded-lg flex items-center justify-center shrink-0"
              style={{ background: 'rgba(212,165,116,0.1)', border: '1px solid rgba(212,165,116,0.25)' }}
            >
              <Icon size={22} style={{ color: '#D4A574' }} strokeWidth={1.5} />
            </div>
            <div>
              <span
                className="font-mono text-xs tracking-widest block mb-0.5"
                style={{ color: 'rgba(212,165,116,0.6)', fontFamily: 'var(--font-mono)' }}
              >
                {h.numara}
              </span>
              <h2
                className="font-heading text-2xl md:text-3xl uppercase tracking-wide leading-tight"
                style={{ color: '#ffffff', fontFamily: 'var(--font-heading)' }}
              >
                {h.baslik}
              </h2>
            </div>
          </div>

          <p
            className="text-sm leading-relaxed mb-6"
            style={{ color: '#D1D5DB', fontFamily: 'var(--font-body)' }}
          >
            {h.detay}
          </p>

          {/* Özellikler */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mb-6">
            {h.ozellikler.map((o) => (
              <div key={o} className="flex items-start gap-2">
                <CheckCircle2 size={14} style={{ color: '#D4A574', marginTop: '2px', flexShrink: 0 }} />
                <span className="text-xs" style={{ color: '#D1D5DB', fontFamily: 'var(--font-body)' }}>
                  {o}
                </span>
              </div>
            ))}
          </div>

          {/* Uygulama alanları */}
          <div className="mb-6">
            <span
              className="text-[10px] uppercase tracking-widest mb-2 block"
              style={{ color: 'rgba(212,165,116,0.6)', fontFamily: 'var(--font-mono)' }}
            >
              Uygulama Alanları
            </span>
            <div className="flex flex-wrap gap-2">
              {h.uygulamalar.map((u) => (
                <span
                  key={u}
                  className="text-[10px] uppercase tracking-wider rounded px-2.5 py-1"
                  style={{
                    color: '#D4A574',
                    border: '1px solid rgba(212,165,116,0.3)',
                    background: 'rgba(212,165,116,0.05)',
                    fontFamily: 'var(--font-mono)',
                  }}
                >
                  {u}
                </span>
              ))}
            </div>
          </div>

          {/* Aksiyonlar */}
          <div
            className="flex flex-col sm:flex-row items-start sm:items-center gap-3 pt-5"
            style={{ borderTop: '1px solid rgba(255,255,255,0.06)' }}
          >
            <Link
              href={h.href}
              className="inline-flex items-center gap-2 text-sm font-semibold transition-colors duration-200 group"
              style={{ color: '#D4A574', fontFamily: 'var(--font-body)' }}
            >
              Detaylı Bilgi
              <ArrowRight size={15} className="transition-transform duration-200 group-hover:translate-x-1" />
            </Link>
            <Link
              href="/iletisim"
              className="inline-flex items-center gap-2 px-5 py-2 text-xs font-semibold rounded-full transition-all duration-200 hover:scale-105"
              style={{
                background: '#D4A574',
                color: '#0A1628',
                fontFamily: 'var(--font-body)',
                fontWeight: 700,
              }}
            >
              Teklif Al
            </Link>
          </div>
        </div>
      </div>
    </motion.div>
  )
}

/* ─── Sayfa ───────────────────────────────────────────────────── */
export default function HizmetlerSayfasi() {
  const heroRef = useRef<HTMLDivElement>(null)
  const heroInView = useInView(heroRef, { once: true })

  return (
    <>
      <Header />
      <main>
        {/* Hero */}
        <section
          className="relative pt-36 pb-24 overflow-hidden"
          style={{
            background: 'linear-gradient(135deg, #0A1628 0%, #0D1B2E 50%, #0A1628 100%)',
          }}
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
              <SectionLabel text="Hizmetlerimiz" />
              <h1
                className="font-heading text-5xl sm:text-7xl md:text-8xl uppercase leading-none tracking-wide mb-6"
                style={{ color: '#ffffff', fontFamily: 'var(--font-heading)' }}
              >
                Kompozit Üretimde{' '}
                <span className="text-gradient-gold">Tam Hizmet</span>
              </h1>
              <p
                className="max-w-2xl text-base sm:text-lg leading-relaxed"
                style={{ color: '#D1D5DB', fontFamily: 'var(--font-body)' }}
              >
                Tasarımdan üretime, prototipten seri üretim montajına kadar
                havacılık ve savunma sanayiine yönelik eksiksiz kompozit çözümler.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Hizmetler Listesi */}
        <section className="py-20 md:py-28">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="space-y-8">
              {hizmetler.map((h, i) => (
                <HizmetKarti key={h.id} h={h} i={i} />
              ))}
            </div>
          </div>
        </section>

        {/* Alt CTA */}
        <section
          className="py-16 text-center"
          style={{ background: 'rgba(30,58,95,0.25)', borderTop: '1px solid rgba(212,165,116,0.1)' }}
        >
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <p className="font-heading text-2xl md:text-3xl uppercase mb-6"
              style={{ color: '#ffffff', fontFamily: 'var(--font-heading)' }}>
              Projeniz İçin <span className="text-gradient-gold">Teklif Alın</span>
            </p>
            <Link
              href="/iletisim"
              className="inline-flex items-center gap-2 px-8 py-4 text-base font-semibold rounded-full transition-all duration-300 hover:scale-105"
              style={{
                background: '#D4A574',
                color: '#0A1628',
                fontFamily: 'var(--font-body)',
                fontWeight: 700,
                boxShadow: '0 8px 32px rgba(212,165,116,0.3)',
              }}
            >
              İletişime Geçin <ArrowRight size={18} />
            </Link>
          </div>
        </section>
      </main>
      <Footer lang="tr" />
    </>
  )
}
