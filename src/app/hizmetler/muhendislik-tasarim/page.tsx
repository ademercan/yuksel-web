import Link from 'next/link'
import { CheckCircle2, ChevronRight, PenTool, Cpu, FlaskConical, FileSearch } from 'lucide-react'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'

export const metadata = {
  title: 'Mühendislik & Tasarım | Yüksel Kompozit Teknolojileri',
  description: 'Kompozit laminat tasarımı, FEM analizi ve prototipleme. Havacılık ve savunma sanayii için uçtan uca mühendislik desteği.',
}

const ozellikler = [
  'Kompozit laminat istifleme (stacking sequence) tasarımı',
  'Anizotropik malzeme modelleme',
  'Sonlu elemanlar analizi (FEM/FEA) — statik, dinamik, burkulma',
  'Hasar toleransı ve yorulma analizi',
  'Termal yük ve ısıl döngü simülasyonu',
  'CAD/CAM entegrasyonu — CATIA V5/V6, NX',
  'Ürün Veri Yönetimi (PDM/PLM) uyumu',
  'Hızlı prototipleme ve doğrulama testi',
  'DFM (Design for Manufacturability) danışmanlığı',
  'Mühendislik değişiklik yönetimi (ECO)',
]

const adimlar = [
  { icon: FileSearch,   baslik: 'Gereksinim Analizi', aciklama: 'Müşteri şartnamesi, yük senaryoları ve standart gerekliliklerinin belirlenmesi' },
  { icon: PenTool,      baslik: 'Laminat Tasarımı',   aciklama: 'Fiber yönelimi, katman sayısı ve malzeme seçimi optimizasyonu' },
  { icon: Cpu,          baslik: 'FEM Analizi',         aciklama: 'Statik/dinamik yük altında gerilme, şekil değiştirme ve hasar analizi' },
  { icon: FlaskConical, baslik: 'Prototipleme',        aciklama: 'Tasarım doğrulaması için prototip üretimi ve kupon testleri' },
]

const yazilimlar = ['CATIA V5/V6', 'Siemens NX', 'Abaqus FEA', 'MSC Nastran', 'HyperMesh', 'Fibersim']

const uygulamalar = [
  'İHA/UAV yapısal gövde ve kanat tasarımı',
  'Uçak birincil yapı laminat optimizasyonu',
  'Roket ve füze kompozit gövde analizi',
  'Savunma aracı koruyucu panel tasarımı',
  'Uydu yapısal bileşen mühendisliği',
  'Yer destek ekipmanı hafifletme çalışmaları',
]

export default function MuhendislikTasarimPage() {
  return (
    <>
      <Header />
      <main style={{ background: '#0A1628', minHeight: '100vh' }}>

        {/* Hero */}
        <section
          className="relative pt-32 pb-20"
          style={{
            background: 'linear-gradient(135deg, #0A1628 0%, #0D1F3A 50%, #0A1628 100%)',
            borderBottom: '1px solid rgba(30,107,181,0.15)',
          }}
        >
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              backgroundImage:
                'linear-gradient(rgba(30,107,181,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(30,107,181,0.06) 1px, transparent 1px)',
              backgroundSize: '80px 80px',
            }}
          />
          <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <nav className="flex items-center gap-2 text-xs mb-8" style={{ color: '#6C757D', fontFamily: 'var(--font-body)' }}>
              <Link href="/" style={{ color: '#6C757D' }} className="hover:text-white transition-colors">Ana Sayfa</Link>
              <ChevronRight size={12} />
              <Link href="/hizmetler" style={{ color: '#6C757D' }} className="hover:text-white transition-colors">Hizmetler</Link>
              <ChevronRight size={12} />
              <span style={{ color: '#1E6BB5' }}>Mühendislik &amp; Tasarım</span>
            </nav>

            <div className="max-w-3xl">
              <p
                className="text-xs tracking-[0.3em] uppercase mb-4"
                style={{ color: '#1E6BB5', fontFamily: 'var(--font-mono)' }}
              >
                Hizmetler / 03
              </p>
              <h1
                className="text-4xl sm:text-5xl lg:text-6xl uppercase mb-6 leading-none"
                style={{ color: '#F8F9FA', fontFamily: 'var(--font-heading)', letterSpacing: '0.04em' }}
              >
                Mühendislik
                <br />
                <span style={{ color: '#1E6BB5' }}>&amp; Tasarım</span>
              </h1>
              <p
                className="text-base sm:text-lg leading-relaxed max-w-2xl"
                style={{ color: 'rgba(248,249,250,0.7)', fontFamily: 'var(--font-body)' }}
              >
                Gereksinim analizinden FEM doğrulamasına, laminat optimizasyonundan prototiplemeye
                kadar uçtan uca kompozit mühendisliği hizmeti sunuyoruz. Deneyimli kadromuz
                havacılık standartlarında tasarım çözümleri üretir.
              </p>
            </div>
          </div>
        </section>

        {/* Süreç Adımları */}
        <section className="py-16" style={{ background: '#0D0D0D' }}>
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="divider-gold mb-12" />
            <h2
              className="text-2xl sm:text-3xl uppercase mb-10 text-center"
              style={{ color: '#F8F9FA', fontFamily: 'var(--font-heading)', letterSpacing: '0.06em' }}
            >
              Tasarım <span style={{ color: '#1E6BB5' }}>Süreci</span>
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {adimlar.map((a, i) => (
                <div
                  key={a.baslik}
                  className="rounded-lg p-6 relative"
                  style={{ background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(30,107,181,0.2)' }}
                >
                  <span
                    className="absolute top-4 right-4 text-xs"
                    style={{ color: 'rgba(30,107,181,0.3)', fontFamily: 'var(--font-mono)' }}
                  >
                    0{i + 1}
                  </span>
                  <a.icon size={28} style={{ color: '#1E6BB5', marginBottom: '16px' }} />
                  <h3
                    className="text-base uppercase mb-2"
                    style={{ color: '#F8F9FA', fontFamily: 'var(--font-heading)', letterSpacing: '0.08em' }}
                  >
                    {a.baslik}
                  </h3>
                  <p className="text-sm leading-relaxed" style={{ color: '#6C757D', fontFamily: 'var(--font-body)' }}>
                    {a.aciklama}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Özellikler + Yazılımlar + Uygulamalar */}
        <section className="py-16" style={{ background: '#0A1628' }}>
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">

              <div>
                <h2
                  className="text-2xl sm:text-3xl uppercase mb-8"
                  style={{ color: '#F8F9FA', fontFamily: 'var(--font-heading)', letterSpacing: '0.06em' }}
                >
                  Yetenekler &amp; <span style={{ color: '#1E6BB5' }}>Özellikler</span>
                </h2>
                <ul className="space-y-3 mb-10">
                  {ozellikler.map((o) => (
                    <li key={o} className="flex items-start gap-3">
                      <CheckCircle2 size={17} style={{ color: '#1E6BB5', flexShrink: 0, marginTop: '2px' }} />
                      <span className="text-sm leading-relaxed" style={{ color: 'rgba(248,249,250,0.75)', fontFamily: 'var(--font-body)' }}>
                        {o}
                      </span>
                    </li>
                  ))}
                </ul>

                {/* Yazılım araçları */}
                <div>
                  <p
                    className="text-xs tracking-[0.25em] uppercase mb-4"
                    style={{ color: '#1E6BB5', fontFamily: 'var(--font-mono)' }}
                  >
                    Kullanılan Yazılımlar
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {yazilimlar.map((y) => (
                      <span
                        key={y}
                        className="px-3 py-1 text-xs rounded"
                        style={{
                          background: 'rgba(30,107,181,0.1)',
                          border: '1px solid rgba(30,107,181,0.3)',
                          color: '#4A90D9',
                          fontFamily: 'var(--font-mono)',
                        }}
                      >
                        {y}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div>
                <h2
                  className="text-2xl sm:text-3xl uppercase mb-8"
                  style={{ color: '#F8F9FA', fontFamily: 'var(--font-heading)', letterSpacing: '0.06em' }}
                >
                  Uygulama <span style={{ color: '#1E6BB5' }}>Alanları</span>
                </h2>
                <ul className="space-y-3">
                  {uygulamalar.map((u) => (
                    <li key={u} className="flex items-start gap-3">
                      <span className="text-lg leading-none" style={{ color: 'rgba(30,107,181,0.6)', flexShrink: 0 }}>›</span>
                      <span className="text-sm leading-relaxed" style={{ color: 'rgba(248,249,250,0.75)', fontFamily: 'var(--font-body)' }}>
                        {u}
                      </span>
                    </li>
                  ))}
                </ul>

                <div
                  className="mt-10 rounded-lg p-5"
                  style={{ background: 'rgba(30,107,181,0.08)', border: '1px solid rgba(30,107,181,0.25)' }}
                >
                  <p className="text-xs tracking-widest uppercase mb-1" style={{ color: '#1E6BB5', fontFamily: 'var(--font-mono)' }}>
                    Standart Uyum
                  </p>
                  <p className="text-sm leading-relaxed" style={{ color: 'rgba(248,249,250,0.7)', fontFamily: 'var(--font-body)' }}>
                    Tüm mühendislik faaliyetlerimiz AS9100, DO-160G çevresel testler ve
                    MIL-HDBK-17 kompozit tasarım kılavuzları çerçevesinde yürütülmektedir.
                  </p>
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
            borderTop: '1px solid rgba(30,107,181,0.15)',
          }}
        >
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
            <h2
              className="text-3xl sm:text-4xl uppercase mb-4"
              style={{ color: '#F8F9FA', fontFamily: 'var(--font-heading)', letterSpacing: '0.06em' }}
            >
              Tasarım Projenizi <span style={{ color: '#1E6BB5' }}>Birlikte Geliştirelim</span>
            </h2>
            <p
              className="text-sm sm:text-base mb-8 max-w-xl mx-auto leading-relaxed"
              style={{ color: 'rgba(248,249,250,0.6)', fontFamily: 'var(--font-body)' }}
            >
              Mühendislik ihtiyaçlarınız için teknik ekibimizle iletişime geçin.
              Tasarım danışmanlığı ve analiz hizmetleri için teklif alın.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/iletisim"
                className="inline-flex items-center justify-center gap-2 px-8 py-3 text-sm font-semibold rounded transition-all duration-200"
                style={{ background: '#1E6BB5', color: '#F8F9FA', fontFamily: 'var(--font-body)' }}
              >
                Teklif Al
              </Link>
              <Link
                href="/hizmetler"
                className="inline-flex items-center justify-center gap-2 px-8 py-3 text-sm font-semibold rounded transition-all duration-200"
                style={{ border: '1px solid rgba(30,107,181,0.4)', color: '#1E6BB5', fontFamily: 'var(--font-body)' }}
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
