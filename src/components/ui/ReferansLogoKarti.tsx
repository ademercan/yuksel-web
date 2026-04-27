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
        background: '#FFFFFF',
        border: '1px solid #E9ECEF',
        height: '80px',
        padding: '10px 12px',
        boxShadow: '0 1px 4px rgba(0,0,0,0.05)',
      }}
      onMouseEnter={(e) => {
        const el = e.currentTarget as HTMLElement
        el.style.border = '1px solid #1E6BB5'
        el.style.boxShadow = '0 4px 16px rgba(30,107,181,0.12)'
      }}
      onMouseLeave={(e) => {
        const el = e.currentTarget as HTMLElement
        el.style.border = '1px solid #E9ECEF'
        el.style.boxShadow = '0 1px 4px rgba(0,0,0,0.05)'
      }}
    >
      <span
        className="text-center uppercase leading-tight"
        style={{
          color: '#0A1628',
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
