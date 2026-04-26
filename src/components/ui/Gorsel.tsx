'use client'

import { useState } from 'react'
import Image from 'next/image'

interface GorselProps {
  src: string
  alt: string
  fill?: boolean
  width?: number
  height?: number
  sizes?: string
  priority?: boolean
  className?: string
  style?: React.CSSProperties
  fallbackBg?: string
}

/**
 * next/image sarmalayıcısı — yüklenemezse koyu lacivert placeholder gösterir.
 * fill=true  → parent position:relative + açık yükseklik gerektirir.
 * fill=false → width & height prop'ları kullanılır.
 */
export default function Gorsel({
  src,
  alt,
  fill,
  width,
  height,
  sizes,
  priority,
  className,
  style,
  fallbackBg = '#0A1628',
}: GorselProps) {
  const [hata, setHata] = useState(false)

  if (hata) {
    return (
      <div
        className={className}
        style={{ background: fallbackBg, ...style }}
        aria-hidden="true"
      />
    )
  }

  if (fill) {
    return (
      <Image
        src={src}
        alt={alt}
        fill
        sizes={sizes ?? '100vw'}
        priority={priority}
        loading={priority ? undefined : 'lazy'}
        className={className}
        style={style}
        onError={() => setHata(true)}
      />
    )
  }

  return (
    <Image
      src={src}
      alt={alt}
      width={width ?? 800}
      height={height ?? 450}
      sizes={sizes}
      priority={priority}
      loading={priority ? undefined : 'lazy'}
      className={className}
      style={style}
      onError={() => setHata(true)}
    />
  )
}
