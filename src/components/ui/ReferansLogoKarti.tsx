'use client'

interface Props {
  ad: string
  sektor: string
}

export default function ReferansLogoKarti({ ad, sektor }: Props) {
  const fontSize = ad.length > 14 ? '13px' : ad.length > 8 ? '16px' : '20px'

  return (
    <div
      className="flex flex-col items-center justify-center rounded-lg transition-all duration-300 cursor-default"
      style={{
        background: '#0D1B2E',
        border: '1px solid #1E6BB5',
        height: '80px',
        padding: '10px 12px',
      }}
      onMouseEnter={(e) => {
        const el = e.currentTarget as HTMLElement
        el.style.border = '1px solid #C8A96E'
        el.style.boxShadow = '0 0 18px rgba(200,169,110,0.15)'
      }}
      onMouseLeave={(e) => {
        const el = e.currentTarget as HTMLElement
        el.style.border = '1px solid #1E6BB5'
        el.style.boxShadow = 'none'
      }}
    >
      <span
        className="text-center uppercase leading-tight"
        style={{
          color: '#F8F9FA',
          fontFamily: 'var(--font-heading)',
          fontSize,
          letterSpacing: '0.06em',
          wordBreak: 'break-word',
        }}
      >
        {ad}
      </span>
      <span
        className="mt-1 text-center uppercase tracking-wider"
        style={{
          color: '#6C757D',
          fontFamily: 'var(--font-body)',
          fontSize: '9px',
          letterSpacing: '0.12em',
        }}
      >
        {sektor}
      </span>
    </div>
  )
}
