import { clients } from '../data'

export function Hero() {
  return (
    <section className="hero" id="top">
      <div className="hero-art" aria-hidden="true">
        <svg className="leaf leaf-left" viewBox="0 0 220 220">
          <path d="M40 180c8-70 50-120 130-150-30 40-36 90 8 140-48-8-90-2-138 10z" fill="#D7F58A" />
          <path d="M70 150c20-30 48-48 86-58" fill="none" stroke="#B6DE55" strokeWidth="3" />
        </svg>
        <svg className="leaf leaf-right" viewBox="0 0 220 220">
          <path d="M180 40c-10 74-54 118-138 146 34-36 48-84 8-138 46 6 88 4 130-8z" fill="#F6E7A8" />
          <path d="M150 78c-22 28-50 44-90 52" fill="none" stroke="#E4CC6A" strokeWidth="3" />
        </svg>
      </div>
      <div className="wrap hero-copy">
        <h1>
          Your Operations with
          <br />
          Smart IT Solutions
        </h1>
        <p>
          We design, build, and look after the software and cloud systems that keep a company moving. One team in Hyderabad, from the first map of the work to the Monday after launch.
        </p>
        <a className="btn" href="#contact">
          Get Started
          <svg viewBox="0 0 20 20" aria-hidden="true">
            <path d="M4 10h12M11 5l5 5-5 5" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </a>
      </div>
    </section>
  )
}

export function Clients() {
  const rows = [0, 1]

  return (
    <section className="clients" aria-label="Teams we work with">
      <div className="marquee">
        <div className="marquee-track">
          {rows.map((copy) => (
            <ul key={copy} aria-hidden={copy === 1}>
              {clients.map((name, index) => (
                <li key={`${copy}-${name}`} className={index % 2 === 1 ? 'is-spaced' : undefined}>
                  {name}
                </li>
              ))}
            </ul>
          ))}
        </div>
      </div>
    </section>
  )
}
