import { useEffect, useState } from 'react'

const links = [
  { href: '#top', label: 'Home' },
  { href: '#about', label: 'About' },
  { href: '#services', label: 'Services' },
  { href: '#work', label: 'Portfolio' },
  { href: '#insights', label: 'Blog' },
  { href: '#contact', label: 'Contact' },
]

export function Logo() {
  return (
    <a href="#top" className="logo">
      <span className="logo-mark" aria-hidden="true">
        <svg viewBox="0 0 32 32">
          <rect width="32" height="32" rx="9" fill="#C6EF3A" />
          <path d="M10.2 8h3.3v6.1L19.8 8h4l-7.2 7.6 7.6 8.4h-4.1l-6.6-7.4V24h-3.3V8z" fill="#172100" />
        </svg>
      </span>
      <span className="logo-word">
        <strong>kasvibes</strong>
        <small>IT Solutions</small>
      </span>
    </a>
  )
}

export function Header() {
  const [open, setOpen] = useState(false)
  const [stuck, setStuck] = useState(false)

  useEffect(() => {
    const onScroll = () => setStuck(window.scrollY > 8)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header className={stuck ? 'site-header is-stuck' : 'site-header'}>
      <div className="wrap header-bar">
        <Logo />
        <nav className={open ? 'nav is-open' : 'nav'} aria-label="Primary">
          {links.map((link) => (
            <a key={link.href} href={link.href} onClick={() => setOpen(false)}>
              {link.label}
            </a>
          ))}
          <a className="btn btn-sm nav-cta" href="#contact" onClick={() => setOpen(false)}>
            Get Started
          </a>
        </nav>
        <a className="btn btn-sm header-cta" href="#contact">
          Get Started
        </a>
        <button
          type="button"
          className="menu-btn"
          aria-expanded={open}
          aria-label={open ? 'Close menu' : 'Open menu'}
          onClick={() => setOpen((value) => !value)}
        >
          <span />
          <span />
          <span />
        </button>
      </div>
    </header>
  )
}
