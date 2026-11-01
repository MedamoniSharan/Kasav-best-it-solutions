import { useState, type FormEvent } from 'react'
import { contact, notes, quotes, services, sideQuotes, stack } from '../data'
import { Logo } from './Header'

const team = [
  {
    name: 'United Kingdom',
    role: 'Headquarters · Luton, Bedfordshire',
    photo: '/images/office-a.jpg',
    alt: 'Team working together around a table',
  },
  {
    name: 'India',
    role: 'Delivery centre · Guntur, Andhra Pradesh',
    photo: '/images/collab-2.jpg',
    alt: 'Two colleagues reviewing work at a desk',
  },
]

export function Team() {
  return (
    <section className="section team">
      <div className="wrap">
        <header className="section-head is-center">
          <h2>Two offices, one delivery team</h2>
          <p>Luton leads client work. Guntur supports sourcing for UK and international hiring.</p>
        </header>
        <div className="team-row">
          {team.map((person) => (
            <figure key={person.name}>
              <img src={person.photo} alt={person.alt} />
              <figcaption>
                <strong>{person.name}</strong>
                <span>{person.role}</span>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}

export function Stack() {
  return (
    <section className="section stack" aria-labelledby="stack-title">
      <div className="wrap">
        <header className="section-head is-center">
          <h2 id="stack-title">Roles we cover</h2>
          <p>Specialist hiring across technology and the operational teams around it.</p>
        </header>
        <ul className="stack-row">
          {stack.map((name) => (
            <li key={name}>{name}</li>
          ))}
        </ul>
      </div>
    </section>
  )
}

export function About() {
  return (
    <section className="section about" id="about">
      <div className="wrap about-grid">
        <div className="about-copy">
          <h2>Building enduring teams</h2>
          <p>
            Founded in Luton, Legacy IT Solutions treats staffing as a strategic part of the business. We hire across the United Kingdom and internationally in IT, engineering, healthcare, finance, administration, and customer support.
          </p>
          <ul className="checks">
            <li>Technical and compliance screening before a profile is shared</li>
            <li>Fees and the process explained before the search starts</li>
            <li>Onboarding and retention support after the placement</li>
          </ul>
        </div>
        <figure className="about-photo">
          <img src="/images/office-a.jpg" alt="A team planning work around a table of laptops and notes" />
        </figure>
        <figure className="about-photo">
          <img src="/images/collab-2.jpg" alt="Two colleagues reviewing a project at a desk" />
        </figure>
        <div className="about-quotes">
          {sideQuotes.map((quote) => (
            <blockquote key={quote.name}>
              <p>“{quote.text}”</p>
              <footer>
                {quote.photo && <img src={quote.photo} alt="" />}
                <span>
                  <strong>{quote.name}</strong>
                  {quote.role}
                </span>
              </footer>
            </blockquote>
          ))}
        </div>
      </div>
    </section>
  )
}

export function Testimonials() {
  return (
    <section className="section" aria-labelledby="feedback-title">
      <div className="wrap">
        <header className="section-head is-center">
          <h2 id="feedback-title">An extension of your team</h2>
          <p>We sit with your hiring managers, not outside the process as a vendor.</p>
        </header>
        <div className="quote-grid">
          {quotes.map((quote) => (
            <blockquote key={quote.name} className="quote-card">
              <p>{quote.text}</p>
              <footer>
                <span>
                  <strong>{quote.name}</strong>
                  {quote.role}
                </span>
              </footer>
            </blockquote>
          ))}
        </div>
      </div>
    </section>
  )
}

export function Insights() {
  const [openId, setOpenId] = useState<string | null>(null)

  return (
    <section className="section" id="insights">
      <div className="wrap">
        <header className="section-head">
          <h2>For employers and candidates</h2>
          <p>How we measure a placement, how the team works with you, and how to send a CV.</p>
        </header>
        <div className="note-grid">
          {notes.map((note) => {
            const open = openId === note.id
            return (
              <article key={note.id} className={open ? 'note is-open' : 'note'}>
                <p className="note-kicker">{note.date}</p>
                <h3>{note.title}</h3>
                <p>{open ? note.body : note.excerpt}</p>
                <button type="button" onClick={() => setOpenId(open ? null : note.id)}>
                  {open ? 'Close' : 'Read note'}
                </button>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export function Contact() {
  const [error, setError] = useState('')
  const [sent, setSent] = useState<{ name: string; href: string } | null>(null)

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const form = event.currentTarget
    const data = new FormData(form)
    const name = String(data.get('name') || '').trim()
    const email = String(data.get('email') || '').trim()
    const company = String(data.get('company') || '').trim()
    const message = String(data.get('message') || '').trim()

    if (!name || !email || !message) {
      setError('Add your name, email, and a short note about the role or the CV.')
      return
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setError('That email does not look complete.')
      return
    }

    const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\nCompany: ${company}\n\n${message}`)
    const subject = encodeURIComponent(`Staffing inquiry from ${name}`)
    setError('')
    setSent({
      name,
      href: `${contact.emailHref}?subject=${subject}&body=${body}`,
    })
    form.reset()
  }

  return (
    <section className="section contact" id="contact">
      <div className="wrap contact-grid">
        <div>
          <h2>Contact Legacy IT Solutions</h2>
          <p>
            Employers, candidates, and partners can write to us here. A senior recruiter replies within 24 business hours. For an urgent vacancy, use WhatsApp.
          </p>
          <ul className="contact-facts">
            {contact.offices.map((office) => (
              <li key={office.label}>
                <strong>{office.label}</strong>
                <a href={office.mapHref} target="_blank" rel="noreferrer">
                  {office.lines[0]}
                  <br />
                  {office.lines[1]}
                </a>
              </li>
            ))}
            <li>
              <strong>Phone</strong>
              <span className="hours">
                {contact.phones.map((phone) => (
                  <span key={phone.href}>
                    {phone.label}
                    <a href={phone.href}>{phone.display}</a>
                  </span>
                ))}
              </span>
            </li>
            <li>
              <strong>Email</strong>
              <a href={contact.emailHref}>{contact.email}</a>
              <a href={contact.careersEmailHref}>{contact.careersEmail}</a>
            </li>
            <li>
              <strong>Hours</strong>
              <span className="hours">
                {contact.hours.map((row) => (
                  <span key={row.days}>
                    {row.days}
                    <em>{row.note}</em>
                  </span>
                ))}
              </span>
            </li>
          </ul>
        </div>
        {sent ? (
          <div className="form-card thanks" role="status">
            <h3>Thanks, {sent.name}.</h3>
            <p>
              Your note is ready. Open it in your email app to send it to {contact.email}, or write to that address directly.
            </p>
            <a className="btn btn-sm" href={sent.href}>
              Open email draft
            </a>
            <button type="button" className="text-btn" onClick={() => setSent(null)}>
              Write another note
            </button>
          </div>
        ) : (
          <form className="form-card" onSubmit={onSubmit} noValidate>
            <label>
              Name
              <input name="name" type="text" autoComplete="name" placeholder="Your name" />
            </label>
            <label>
              Work email
              <input name="email" type="email" autoComplete="email" placeholder="you@company.com" />
            </label>
            <label>
              Company
              <input name="company" type="text" autoComplete="organization" placeholder="Optional" />
            </label>
            <label>
              What do you need?
              <textarea name="message" rows={4} placeholder="The role, the team, or the CV you want reviewed." />
            </label>
            {error && <p className="form-error">{error}</p>}
            <button className="btn" type="submit">
              Send message
            </button>
          </form>
        )}
      </div>
    </section>
  )
}

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="wrap footer-grid">
        <div>
          <Logo />
          <p>Staffing for IT, engineering, healthcare, finance, administration, and customer service. Headquarters in Luton, with delivery from Guntur.</p>
        </div>
        <div>
          <h3>Company</h3>
          <a href="#about">About</a>
          <a href="#process">How we work</a>
          <a href="#work">Industries</a>
          <a href="#insights">Careers</a>
        </div>
        <div>
          <h3>Services</h3>
          {services.slice(0, 4).map((service) => (
            <a key={service.title} href="#services">
              {service.title}
            </a>
          ))}
        </div>
        <div>
          <h3>Contact</h3>
          <a href={contact.offices[0].mapHref} target="_blank" rel="noreferrer">
            {contact.offices[0].lines[0]}
            <br />
            {contact.offices[0].lines[1]}
          </a>
          {contact.phones.map((phone) => (
            <a key={phone.href} href={phone.href}>
              {phone.display}
            </a>
          ))}
          <a href={contact.emailHref}>{contact.email}</a>
          <p>Mon–Fri 9:00 AM – 6:00 PM BST · Sat & Sun closed</p>
        </div>
      </div>
      <div className="footer-bar">
        <div className="wrap">
          <span>© 2026 Legacy IT Solutions. All rights reserved.</span>
          <span>Luton, United Kingdom</span>
        </div>
      </div>
    </footer>
  )
}

export function ChatWidget() {
  return (
    <a className="chat-wa" href={contact.whatsappHref} target="_blank" rel="noreferrer" aria-label="Chat on WhatsApp">
      <img src="/logos/whatsapp.svg" alt="" />
    </a>
  )
}
