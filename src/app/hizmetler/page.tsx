'use client'

import { useState, useRef } from 'react'
import Link from 'next/link'
import { motion, useInView } from 'framer-motion'
import { Layers, Settings, Cpu, Wrench, ArrowRight, CheckCircle2 } from 'lucide-react'
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
  },
]

/* ─── Hizmet Kartı ────────────────────────────────────────────── */
function HizmetKarti({ h, i }: { h: typeof hizmetler[0]; i: number }) {
  const [expanded, setExpanded] = useState(false)
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })
  const { Icon } = h

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 32 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: i * 0.1 }}
      className="rounded-xl overflow-hidden"
      style={{ border: '1px solid rgba(30,107,181,0.15)', background: 'rgba(30,58,95,0.2)' }}
    >
      {/* Üst başlık alanı */}
      <div className="p-7 pb-5">
        <div className="flex items-start gap-5 mb-5">
          <div
            className="w-14 h-14 rounded-lg flex items-center justify-center shrink-0"
            style={{ background: 'rgba(30,107,181,0.1)', border: '1px solid rgba(30,107,181,0.25)' }}
          >
            <Icon size={24} style={{ color: '#1E6BB5' }} strokeWidth={1.5} />
          </div>
          <div>
            <span
              className="font-mono text-xs tracking-widest mb-1 block"
              style={{ color: 'rgba(30,107,181,0.6)', fontFamily: 'var(--font-mono)' }}
            >
              {h.numara}
            </span>
            <h2
              className="font-heading text-2xl md:text-3xl uppercase tracking-wide leading-tight"
              style={{ color: '#F8F9FA', fontFamily: 'var(--font-heading)' }}
            >
              {h.baslik}
            </h2>
          </div>
        </div>

        <p
          className="text-sm leading-relaxed mb-5"
          style={{ color: '#6C757D', fontFamily: 'var(--font-body)' }}
        >
          {h.detay}
        </p>

        {/* Özellikler */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mb-5">
          {h.ozellikler.map((o) => (
            <div key={o} className="flex items-start gap-2">
              <CheckCircle2 size={14} style={{ color: '#1E6BB5', marginTop: '2px', flexShrink: 0 }} />
              <span className="text-xs" style={{ color: '#6C757D', fontFamily: 'var(--font-body)' }}>
                {o}
              </span>
            </div>
          ))}
        </div>

        {/* Uygulamalar */}
        <div>
          <span
            className="text-[10px] uppercase tracking-widest mb-2 block"
            style={{ color: 'rgba(30,107,181,0.6)', fontFamily: 'var(--font-mono)' }}
          >
            Uygulama Alanları
          </span>
          <div className="flex flex-wrap gap-2">
            {h.uygulamalar.map((u) => (
              <span
                key={u}
                className="text-[10px] uppercase tracking-wider rounded px-2.5 py-1"
                style={{
                  color: 'rgba(30,107,181,0.7)',
                  border: '1px solid rgba(30,107,181,0.15)',
                  background: 'rgba(30,107,181,0.05)',
                  fontFamily: 'var(--font-mono)',
                }}
              >
                {u}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Alt aksiyonlar */}
      <div
        className="px-7 py-4 flex items-center justify-between"
        style={{ borderTop: '1px solid rgba(255,255,255,0.05)', background: 'rgba(10,22,40,0.4)' }}
      >
        <Link
          href={h.href}
          className="inline-flex items-center gap-2 text-sm font-semibold transition-colors duration-200 group"
          style={{ color: '#1E6BB5', fontFamily: 'var(--font-body)' }}
        >
          Detaylı Bilgi
          <ArrowRight size={15} className="transition-transform duration-200 group-hover:translate-x-1" />
        </Link>
        <Link
          href="/iletisim"
          className="inline-flex items-center gap-2 px-4 py-2 text-xs font-semibold rounded transition-all duration-200"
          style={{ background: 'rgba(30,107,181,0.1)', color: '#1E6BB5', border: '1px solid rgba(30,107,181,0.2)', fontFamily: 'var(--font-body)' }}
        >
          Teklif Al
        </Link>
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
              <SectionLabel text="Hizmetlerimiz" />
              <h1
                className="font-heading text-5xl sm:text-7xl md:text-8xl uppercase leading-none tracking-wide mb-6"
                style={{ color: '#F8F9FA', fontFamily: 'var(--font-heading)' }}
              >
                Kompozit Üretimde{' '}
                <span className="text-gradient-gold">Tam Hizmet</span>
              </h1>
              <p
                className="max-w-2xl text-base sm:text-lg leading-relaxed"
                style={{ color: '#6C757D', fontFamily: 'var(--font-body)' }}
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
          style={{ background: 'rgba(30,58,95,0.25)', borderTop: '1px solid rgba(30,107,181,0.1)' }}
        >
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <p className="font-heading text-2xl md:text-3xl uppercase mb-6"
              style={{ color: '#F8F9FA', fontFamily: 'var(--font-heading)' }}>
              Projeniz İçin <span className="text-gradient-gold">Teklif Alın</span>
            </p>
            <Link
              href="/iletisim"
              className="inline-flex items-center gap-2 px-8 py-4 text-base font-semibold rounded transition-all duration-300"
              style={{ background: '#1E6BB5', color: '#0A1628', fontFamily: 'var(--font-body)' }}
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
