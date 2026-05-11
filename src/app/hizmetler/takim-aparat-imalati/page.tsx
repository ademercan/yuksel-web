import Link from 'next/link'
import Image from 'next/image'
import { CheckCircle2, ChevronRight, Wrench, Ruler, Box, ScanLine } from 'lucide-react'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'

export const metadata = {
  title: 'Takım & Aparat İmalatı | Yüksel Kompozit Teknolojileri',
  description: 'Kompozit kalıp ve üretim aparatı imalatı. Yüksek hassasiyetli takım tasarımı ve üretimi ile seri üretim altyapısı.',
}

const ozellikler = [
  'CFRP ve İnvar® kompozit üretim kalıpları',
  'Monolitik ve bölmeli (split) kalıp tasarımı',
  'Alüminyum ve çelik detaylı aparat imalatı',
  'İHA/UAV gövde ve kanat kalıpları',
  'Vakum infüzyon ve prepreg kalıpları',
  'Kontrol aparatları ve ölçüm fixtureları',
  'Montaj jig ve konumlama aparatları',
  'Termal döngü dayanımlı yüksek sıcaklık kalıpları',
  'Kalıp yüzey kalitesi Ra ≤ 0.8 µm',
  'CMM doğrulaması ve boyutsal raporlama',
]

const kategoriler = [
  {
    icon: Box,
    baslik: 'Kompozit Kalıplar',
    aciklama: 'Prepreg ve infüzyon yöntemleri için CFRP veya İnvar® master kalıplar; termal kararlılık ve uzun ömür odaklı tasarım',
  },
  {
    icon: Wrench,
    baslik: 'Üretim Aparatları',
    aciklama: 'Parça konumlandırma, klemps ve vakum bagging aparatları; tekrarlanabilir üretimi güvence altına alan çözümler',
  },
  {
    icon: Ruler,
    baslik: 'Montaj Jigleri',
    aciklama: 'Yapısal montaj hizalaması için hassas jig sistemleri; lazer tracker ile kalibreli konumlandırma noktaları',
  },
  {
    icon: ScanLine,
    baslik: 'Kontrol Aparatları',
    aciklama: 'Boyutsal ve fonksiyonel muayene için özel ölçüm fixtureları; CMM uyumlu tasarım',
  },
]

const uygulamalar = [
  'Sabit kanatlı hava aracı gövde panel kalıpları',
  'İHA kanat ve kontrol yüzeyi kalıpları',
  'Helikopter rotor kanadı üretim kalıpları',
  'Füze ve roket gövde segment kalıpları',
  'Savunma paneli seri üretim aparatları',
  'Uzay yapı elemanı hassas montaj jigleri',
]

export default function TakimAparatImalatiPage() {
  return (
    <>
      <Header />
      <main style={{ background: '#0A1628', minHeight: '100vh' }}>

        {/* Hero */}
        <section className="relative h-[400px] overflow-hidden">
          <Image
            src="/images/fabrika-kareleri/hizmet-cnc-tezgah-premium.png"
            alt="Takım ve aparat imalatı"
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
          <div
            className="absolute inset-0"
            style={{ background: 'linear-gradient(to bottom, rgba(10,22,40,0.5) 0%, rgba(10,22,40,0.88) 100%)' }}
          />
          <div className="relative h-full flex flex-col justify-end pb-12">
            <div className="mx-auto max-w-7xl w-full px-4 sm:px-6 lg:px-8">
              <nav className="flex items-center gap-2 text-xs mb-6" style={{ color: 'rgba(248,249,250,0.5)', fontFamily: 'var(--font-body)' }}>
                <Link href="/" style={{ color: 'rgba(248,249,250,0.5)' }} className="hover:text-white transition-colors">Ana Sayfa</Link>
                <ChevronRight size={12} />
                <Link href="/hizmetler" style={{ color: 'rgba(248,249,250,0.5)' }} className="hover:text-white transition-colors">Hizmetler</Link>
                <ChevronRight size={12} />
                <span style={{ color: '#D4A574' }}>Takım &amp; Aparat İmalatı</span>
              </nav>

              <div className="max-w-3xl">
                <p
                  className="text-xs tracking-[0.3em] uppercase mb-4"
                  style={{ color: '#D4A574', fontFamily: 'var(--font-mono)' }}
                >
                  Hizmetler / 04
                </p>
                <h1
                  className="text-4xl sm:text-5xl lg:text-6xl uppercase mb-4 leading-none"
                  style={{ color: '#F8F9FA', fontFamily: 'var(--font-heading)', letterSpacing: '0.04em' }}
                >
                  Takım &amp; Aparat
                  <br />
                  <span style={{ color: '#D4A574' }}>İmalatı</span>
                </h1>
                <p
                  className="text-base sm:text-lg leading-relaxed max-w-2xl"
                  style={{ color: 'rgba(248,249,250,0.75)', fontFamily: 'var(--font-body)' }}
                >
                  Kompozit parça üretiminizin temelini oluşturan yüksek hassasiyetli kalıp, jig
                  ve aparat çözümleri sunuyoruz. CFRP kalıplardan çelik montaj jiglerine kadar
                  tam takım altyapısını AS9100 kapsamında tasarlıyor ve üretiyoruz.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Kategori Kartları */}
        <section className="py-16" style={{ background: '#0D0D0D' }}>
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="divider-gold mb-12" />
            <h2
              className="text-2xl sm:text-3xl uppercase mb-10 text-center"
              style={{ color: '#F8F9FA', fontFamily: 'var(--font-heading)', letterSpacing: '0.06em' }}
            >
              Takım &amp; Aparat <span style={{ color: '#D4A574' }}>Kategorileri</span>
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {kategoriler.map((k) => (
                <div
                  key={k.baslik}
                  className="rounded-lg p-6"
                  style={{ background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(212,165,116,0.2)' }}
                >
                  <k.icon size={28} style={{ color: '#D4A574', marginBottom: '16px' }} />
                  <h3
                    className="text-base uppercase mb-2"
                    style={{ color: '#F8F9FA', fontFamily: 'var(--font-heading)', letterSpacing: '0.08em' }}
                  >
                    {k.baslik}
                  </h3>
                  <p className="text-sm leading-relaxed" style={{ color: '#D1D5DB', fontFamily: 'var(--font-body)' }}>
                    {k.aciklama}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Özellikler + Uygulamalar */}
        <section className="py-16" style={{ background: '#0A1628' }}>
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">

              <div>
                <h2
                  className="text-2xl sm:text-3xl uppercase mb-8"
                  style={{ color: '#F8F9FA', fontFamily: 'var(--font-heading)', letterSpacing: '0.06em' }}
                >
                  Yetenekler &amp; <span style={{ color: '#D4A574' }}>Özellikler</span>
                </h2>
                <ul className="space-y-3">
                  {ozellikler.map((o) => (
                    <li key={o} className="flex items-start gap-3">
                      <CheckCircle2 size={17} style={{ color: '#D4A574', flexShrink: 0, marginTop: '2px' }} />
                      <span className="text-sm leading-relaxed" style={{ color: '#D1D5DB', fontFamily: 'var(--font-body)' }}>
                        {o}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h2
                  className="text-2xl sm:text-3xl uppercase mb-8"
                  style={{ color: '#F8F9FA', fontFamily: 'var(--font-heading)', letterSpacing: '0.06em' }}
                >
                  Uygulama <span style={{ color: '#D4A574' }}>Alanları</span>
                </h2>
                <ul className="space-y-3">
                  {uygulamalar.map((u) => (
                    <li key={u} className="flex items-start gap-3">
                      <span className="text-lg leading-none" style={{ color: 'rgba(212,165,116,0.7)', flexShrink: 0 }}>›</span>
                      <span className="text-sm leading-relaxed" style={{ color: '#D1D5DB', fontFamily: 'var(--font-body)' }}>
                        {u}
                      </span>
                    </li>
                  ))}
                </ul>

                {/* Tolerans notu */}
                <div
                  className="mt-10 rounded-lg p-5"
                  style={{ background: 'rgba(212,165,116,0.06)', border: '1px solid rgba(212,165,116,0.25)' }}
                >
                  <p className="text-xs tracking-widest uppercase mb-1" style={{ color: '#D4A574', fontFamily: 'var(--font-mono)' }}>
                    Hassasiyet Standartları
                  </p>
                  <p className="text-sm leading-relaxed" style={{ color: '#D1D5DB', fontFamily: 'var(--font-body)' }}>
                    Kalıp ve aparat geometrileri CMM ile doğrulanmakta; kritik boyutlar
                    ±0.05 mm tolerans dahilinde teslim edilmektedir. Tüm kalıplar
                    termal döngü testinden geçirilmektedir.
                  </p>
                </div>

                {/* Malzeme notu */}
                <div
                  className="mt-4 rounded-lg p-5"
                  style={{ background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(212,165,116,0.15)' }}
                >
                  <p className="text-xs tracking-widest uppercase mb-2" style={{ color: 'rgba(212,165,116,0.6)', fontFamily: 'var(--font-mono)' }}>
                    Kalıp Malzemeleri
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {['CFRP Prepreg', 'İnvar® 36', 'Alüminyum 7075', 'Takım Çeliği P20', 'Epoksi Model Board'].map((m) => (
                      <span
                        key={m}
                        className="px-2.5 py-1 text-xs rounded"
                        style={{
                          background: 'rgba(212,165,116,0.08)',
                          border: '1px solid rgba(212,165,116,0.25)',
                          color: '#D4A574',
                          fontFamily: 'var(--font-mono)',
                        }}
                      >
                        {m}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section
          className="py-16"
          style={{
            background: 'linear-gradient(135deg, #0D1F3A 0%, #0A1628 100%)',
            borderTop: '1px solid rgba(212,165,116,0.15)',
          }}
        >
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
            <h2
              className="text-3xl sm:text-4xl uppercase mb-4"
              style={{ color: '#F8F9FA', fontFamily: 'var(--font-heading)', letterSpacing: '0.06em' }}
            >
              Takım İhtiyaçlarınız İçin <span style={{ color: '#D4A574' }}>Hemen Başlayalım</span>
            </h2>
            <p
              className="text-sm sm:text-base mb-8 max-w-xl mx-auto leading-relaxed"
              style={{ color: '#D1D5DB', fontFamily: 'var(--font-body)' }}
            >
              Kalıp ve aparat projeniz için teknik ekibimizle ön değerlendirme yapın.
              Tasarım, malzeme seçimi ve üretim süresi için fiyat teklifi alın.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/iletisim"
                className="inline-flex items-center justify-center gap-2 px-8 py-3 text-sm font-semibold rounded-full transition-all duration-200 hover:scale-105"
                style={{ background: '#D4A574', color: '#0A1628', fontFamily: 'var(--font-body)', boxShadow: '0 4px 20px rgba(212,165,116,0.35)' }}
              >
                Teklif Al
              </Link>
              <Link
                href="/hizmetler"
                className="inline-flex items-center justify-center gap-2 px-8 py-3 text-sm font-semibold rounded-full transition-all duration-200 hover:bg-white/10"
                style={{ border: '1px solid rgba(212,165,116,0.4)', color: '#D4A574', fontFamily: 'var(--font-body)' }}
              >
                Tüm Hizmetler
              </Link>
            </div>
          </div>
        </section>

      </main>
      <Footer lang="tr" />
    </>
  )
}
