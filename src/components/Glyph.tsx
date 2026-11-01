import type { GlyphName } from '../data'

type Props = {
  name: GlyphName
}

export function Glyph({ name }: Props) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      {name === 'consult' && (
        <>
          <circle cx="8" cy="8" r="2.2" fill="none" stroke="currentColor" strokeWidth="1.7" />
          <circle cx="16" cy="8" r="2.2" fill="none" stroke="currentColor" strokeWidth="1.7" />
          <path d="M4.5 18c.6-2.4 2.2-3.6 3.5-3.6S11 15.6 11.6 18M12.4 18c.6-2.4 2.2-3.6 3.5-3.6s2.9 1.2 3.6 3.6" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
        </>
      )}
      {name === 'cloud' && (
        <path d="M7 17h10.2a3.6 3.6 0 0 0 .3-7.2 5 5 0 0 0-9.6 1.4A3.2 3.2 0 0 0 7 17z" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinejoin="round" />
      )}
      {name === 'shield' && (
        <path d="M12 3.5 19 6.2v5.2c0 4-2.8 6.8-7 8.6-4.2-1.8-7-4.6-7-8.6V6.2L12 3.5z" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinejoin="round" />
      )}
      {name === 'code' && (
        <path d="M8.5 8 5 12l3.5 4M15.5 8 19 12l-3.5 4M13 6.5l-2 11" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
      )}
      {name === 'chart' && (
        <path d="M5 19V9M10 19V5M15 19v-7M20 19V8" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
      )}
      {name === 'support' && (
        <>
          <path d="M5 12a7 7 0 0 1 14 0" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
          <path d="M5 12v3.5A2 2 0 0 0 7 17.5h1.2V12H5zM19 12v3.5a2 2 0 0 1-2 2H15.8V12H19zM12 17.5h2.2" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinejoin="round" />
        </>
      )}
      {name === 'search' && (
        <>
          <circle cx="11" cy="11" r="5.2" fill="none" stroke="currentColor" strokeWidth="1.7" />
          <path d="M15.2 15.2 19 19" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
        </>
      )}
      {name === 'map' && (
        <path d="M9 5.5 4.5 7.2v11.3L9 16.8l6 2.2 4.5-1.7V6L15 7.7 9 5.5zM9 5.5V16.8M15 7.7v11.3" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinejoin="round" />
      )}
      {name === 'pen' && (
        <path d="M14.2 5.2 18.8 9.8 9 19.6 4.2 20l.4-4.8 9.6-10z" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinejoin="round" />
      )}
      {name === 'layers' && (
        <path d="M12 4.5 20 8.5 12 12.5 4 8.5 12 4.5zM4 12.2 12 16.2 20 12.2M4 15.6 12 19.6 20 15.6" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinejoin="round" />
      )}
      {name === 'pulse' && (
        <path d="M3.5 12h4l2-4.5 3.2 9 2.2-4.5h5.6" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
      )}
    </svg>
  )
}
