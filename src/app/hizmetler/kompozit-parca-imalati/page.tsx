import Link from 'next/link'
import { CheckCircle2, ChevronRight, Layers, Thermometer, Wind, Shield } from 'lucide-react'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'

export const metadata = {
  title: 'Kompozit Parça İmalatı | Yüksel Kompozit Teknolojileri',
  description: 'CFRP ve GFRP kompozit parça üretimi. Prepreg, vakum infüzyon ve autoclave kürleme yöntemleriyle havacılık sertifikalı üretim.',
}

const ozellikler = [
  'Carbon Fiber Reinforced Polymer (CFRP) parçalar',
  'Glass Fiber Reinforced Polymer (GFRP) parçalar',
  'Prepreg laminasyon ve autoclave kürleme',
  'Vakum infüzyon (VARTM) yöntemi',
  'Reçine transfer kalıplama (RTM)',
  'El yatırması ve filaman sarma',
  'Temiz oda ortamında üretim (ISO Class 8)',
  'NDT — ultrasonik ve x-ray muayene',
  'Boyutsal kontrol ve raporlama',
  'AS9100 / EN9100 uyumlu kalite güvencesi',
]

const malzemeler = [
  { icon: Layers,      baslik: 'Carbon Fiber',   aciklama: 'T700, T800, IM7 karbon fiber prepreg ve dokuma kumaşlar' },
  { icon: Wind,        baslik: 'Glass Fiber',    aciklama: 'E-glass ve S-glass woven ve UD laminatlar' },
  { icon: Thermometer, baslik: 'Autoclave',      aciklama: '3 m × 6 m kapasiteli otoklavda 180 °C / 7 bar kürleme' },
  { icon: Shield,      baslik: 'NDT Kontrol',    aciklama: 'Ultrasonik C-tarama, x-ray ve görsel muayene' },
]

const uygulamalar = [
  'Sabit kanatlı hava araçları gövde panelleri',
  'İnsansız hava araçları (İHA/UAV) yapısal bileşenleri',
  'Helikopter kanat ve kuyruk elemanları',
  'Savunma sanayii zırh ve koruyucu paneller',
  'Uzay yer istasyonu yapısal parçaları',
  'Füze ve roket gövde segmentleri',
]

export default function KompozitParcaImalatiPage() {
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
            {/* Breadcrumb */}
            <nav className="flex items-center gap-2 text-xs mb-8" style={{ color: '#6C757D', fontFamily: 'var(--font-body)' }}>
              <Link href="/" style={{ color: '#6C757D' }} className="hover:text-white transition-colors">Ana Sayfa</Link>
              <ChevronRight size={12} />
              <Link href="/hizmetler" style={{ color: '#6C757D' }} className="hover:text-white transition-colors">Hizmetler</Link>
              <ChevronRight size={12} />
              <span style={{ color: '#1E6BB5' }}>Kompozit Parça İmalatı</span>
            </nav>

            <div className="max-w-3xl">
              <p
                className="text-xs tracking-[0.3em] uppercase mb-4"
                style={{ color: '#1E6BB5', fontFamily: 'var(--font-mono)' }}
              >
                Hizmetler / 01
              </p>
              <h1
                className="text-4xl sm:text-5xl lg:text-6xl uppercase mb-6 leading-none"
                style={{ color: '#F8F9FA', fontFamily: 'var(--font-heading)', letterSpacing: '0.04em' }}
              >
                Kompozit Parça
                <br />
                <span style={{ color: '#1E6BB5' }}>İmalatı</span>
              </h1>
              <p
                className="text-base sm:text-lg leading-relaxed max-w-2xl"
                style={{ color: 'rgba(248,249,250,0.7)', fontFamily: 'var(--font-body)' }}
              >
                AS9100 sertifikalı üretim altyapımızla CFRP ve GFRP kompozit parçaları havacılık
                ve savunma sanayii standartlarında üretiyoruz. Prepreg laminasyondan autoclave
                kürlemesine, NDT muayenesinden teslimata kadar tam entegre süreç yönetimi.
              </p>
            </div>
          </div>
        </section>

        {/* Malzeme & Yöntem Kartları */}
        <section className="py-16" style={{ background: '#0D0D0D' }}>
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="divider-gold mb-12" />
            <h2
              className="text-2xl sm:text-3xl uppercase mb-10 text-center"
              style={{ color: '#F8F9FA', fontFamily: 'var(--font-heading)', letterSpacing: '0.06em' }}
            >
              Malzeme &amp; Üretim <span style={{ color: '#1E6BB5' }}>Yöntemleri</span>
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {malzemeler.map((m) => (
                <div
                  key={m.baslik}
                  className="rounded-lg p-6"
                  style={{
                    background: 'rgba(255,255,255,0.02)',
                    border: '1px solid rgba(30,107,181,0.2)',
                  }}
                >
                  <m.icon size={28} style={{ color: '#1E6BB5', marginBottom: '16px' }} />
                  <h3
                    className="text-base uppercase mb-2"
                    style={{ color: '#F8F9FA', fontFamily: 'var(--font-heading)', letterSpacing: '0.08em' }}
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
              ))}
            </div>
          </div>
        </section>

        {/* Özellikler + Uygulamalar */}
        <section className="py-16" style={{ background: '#0A1628' }}>
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">

              {/* Özellikler */}
              <div>
                <h2
                  className="text-2xl sm:text-3xl uppercase mb-8"
                  style={{ color: '#F8F9FA', fontFamily: 'var(--font-heading)', letterSpacing: '0.06em' }}
                >
                  Yetenekler &amp; <span style={{ color: '#1E6BB5' }}>Özellikler</span>
                </h2>
                <ul className="space-y-3">
                  {ozellikler.map((o) => (
                    <li key={o} className="flex items-start gap-3">
                      <CheckCircle2 size={17} style={{ color: '#1E6BB5', flexShrink: 0, marginTop: '2px' }} />
                      <span
                        className="text-sm leading-relaxed"
                        style={{ color: 'rgba(248,249,250,0.75)', fontFamily: 'var(--font-body)' }}
                      >
                        {o}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Uygulama Alanları */}
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
                      <span
                        className="text-lg leading-none"
                        style={{ color: 'rgba(30,107,181,0.6)', flexShrink: 0 }}
                      >
                        ›
                      </span>
                      <span
                        className="text-sm leading-relaxed"
                        style={{ color: 'rgba(248,249,250,0.75)', fontFamily: 'var(--font-body)' }}
                      >
                        {u}
                      </span>
                    </li>
                  ))}
                </ul>

                {/* Sertifika notu */}
                <div
                  className="mt-10 rounded-lg p-5"
                  style={{
                    background: 'rgba(30,107,181,0.08)',
                    border: '1px solid rgba(30,107,181,0.25)',
                  }}
                >
                  <p
                    className="text-xs tracking-widest uppercase mb-1"
                    style={{ color: '#1E6BB5', fontFamily: 'var(--font-mono)' }}
                  >
                    Kalite Güvencesi
                  </p>
                  <p
                    className="text-sm leading-relaxed"
                    style={{ color: 'rgba(248,249,250,0.7)', fontFamily: 'var(--font-body)' }}
                  >
                    Tüm üretim süreçlerimiz AS9100 Rev D ve EN9100:2018 kapsamında
                    denetlenmekte, TÜRKAK akreditasyonuyla desteklenmektedir.
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
              Projenizi <span style={{ color: '#1E6BB5' }}>Birlikte Değerlendirelim</span>
            </h2>
            <p
              className="text-sm sm:text-base mb-8 max-w-xl mx-auto leading-relaxed"
              style={{ color: 'rgba(248,249,250,0.6)', fontFamily: 'var(--font-body)' }}
            >
              Kompozit parça ihtiyaçlarınız için teknik ekibimizle iletişime geçin.
              Ücretsiz ön değerlendirme ve fiyat teklifi sunuyoruz.
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
                style={{
                  border: '1px solid rgba(30,107,181,0.4)',
                  color: '#1E6BB5',
                  fontFamily: 'var(--font-body)',
                }}
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
