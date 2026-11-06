import { useEffect, useState } from 'react'

const links = [
  { href: '#top', label: 'Home' },
  { href: '#about', label: 'About' },
  { href: '#services', label: 'Services' },
  { href: '#work', label: 'Industries' },
  { href: '#insights', label: 'Careers' },
  { href: '#contact', label: 'Contact' },
]

export function Logo() {
  return (
    <a href="#top" className="logo">
      <img
        src="/kasvibes-logo.png"
        alt="Kasvibes – We Build Future"
        className="logo-img"
      />
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
            Talk to us
          </a>
        </nav>
        <a className="btn btn-sm header-cta" href="#contact">
          Talk to us
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
