'use client'

import { motion } from 'framer-motion'
import Gorsel from '@/components/ui/Gorsel'

interface EkipmanKartiProps {
  src: string
  alt: string
  baslik: string
  tag: string
  index?: number
  sizes?: string
  objectPosition?: string
}

export default function EkipmanKarti({
  src,
  alt,
  baslik,
  tag,
  index = 0,
  sizes = '(max-width: 640px) 100vw, 25vw',
  objectPosition = 'center',
}: EkipmanKartiProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.96 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.45, delay: index * 0.06 }}
      className="group overflow-hidden rounded-lg"
      style={{ border: '1px solid rgba(30,107,181,0.15)' }}
    >
      {/* Resim */}
      <div className="relative overflow-hidden" style={{ height: '200px' }}>
        <Gorsel
          src={src}
          alt={alt}
          fill
          sizes={sizes}
          className="object-cover transition-transform duration-500 group-hover:scale-105"
          style={{ objectPosition }}
        />
      </div>

      {/* Yazılar */}
      <div style={{ background: '#0D1B2E', padding: '12px' }}>
        <p
          style={{
            color: '#F8F9FA',
            fontWeight: 'bold',
            fontSize: '13px',
            fontFamily: 'var(--font-body)',
            marginBottom: '3px',
          }}
        >
          {baslik}
        </p>
        <p
          style={{
            color: '#1E6BB5',
            fontSize: '11px',
            fontFamily: 'var(--font-mono)',
          }}
        >
          {tag}
        </p>
      </div>
    </motion.div>
  )
}
