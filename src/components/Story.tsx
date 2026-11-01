import { useState, type FormEvent } from 'react'
import { contact, notes, quotes, sideQuotes, stack } from '../data'
import { Logo } from './Header'

const team = [
  {
    name: 'James Hale',
    role: 'Cloud Lead',
    photo: '/images/team-1.jpg',
    alt: 'Portrait of James Hale, cloud lead',
  },
  {
    name: 'Elena Brooks',
    role: 'Solutions Lead',
    photo: '/images/avatar-1.jpg',
    alt: 'Portrait of Elena Brooks, solutions lead',
  },
]

export function Team() {
  return (
    <section className="section team">
      <div className="wrap">
        <header className="section-head is-center">
          <h2>We have an expert team</h2>
          <p>The people who scope the work also stay for the build and the support.</p>
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
          <h2 id="stack-title">Our Tech Stack</h2>
          <p>Tools we use when they fit the job. The stack follows the work, not the other way around.</p>
        </header>
        <ul className="stack-row">
          {stack.map((item) => (
            <li key={item.name}>
              <span className="stack-mark">
                <img src={item.logo} alt="" />
              </span>
              {item.name}
            </li>
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
          <h2>Why Choose Smart Software</h2>
          <p>
            Most teams do not need another platform. They need the one they have to stop getting in the way. We build and look after software that follows how your company already works, then we stay to keep it running.
          </p>
          <ul className="checks">
            <li>One team for the build, the cloud, and day-to-day support</li>
            <li>Scope and price agreed before the work starts</li>
            <li>A handover your staff can run without us in the room</li>
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
                <img src={quote.photo} alt="" />
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
          <h2 id="feedback-title">Our Customers’ Feedback</h2>
          <p>Notes from teams who asked us to make the daily work quieter.</p>
        </header>
        <div className="quote-grid">
          {quotes.map((quote) => (
            <blockquote key={quote.name} className="quote-card">
              <div className="stars" aria-label="5 out of 5">
                {Array.from({ length: 5 }, (_, index) => (
                  <span key={index}>★</span>
                ))}
              </div>
              <p>“{quote.text}”</p>
              <footer>
                <img src={quote.photo} alt="" />
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
          <h2>From the notebook</h2>
          <p>Short notes on how we approach a move, a support retainer, and a cloud choice.</p>
        </header>
        <div className="note-grid">
          {notes.map((note) => {
            const open = openId === note.id
            return (
              <article key={note.id} className={open ? 'note is-open' : 'note'}>
                <time dateTime={note.date}>{note.date}</time>
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
      setError('Add your name, email, and a short note about the work.')
      return
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setError('That email does not look complete.')
      return
    }

    const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\nCompany: ${company}\n\n${message}`)
    const subject = encodeURIComponent(`Project inquiry from ${name}`)
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
          <h2>Tell us about the work</h2>
          <p>
            Share what is slowing the team down. We reply with a plain read on whether we are the right fit, and what a first step would look like.
          </p>
          <ul className="contact-facts">
            <li>
              <strong>Address</strong>
              <a href={contact.mapHref} target="_blank" rel="noreferrer">
                {contact.address[0]}
                <br />
                {contact.address[1]}
              </a>
            </li>
            <li>
              <strong>Phone</strong>
              <a href={contact.phoneHref}>{contact.phoneDisplay}</a>
            </li>
            <li>
              <strong>Email</strong>
              <a href={contact.emailHref}>{contact.email}</a>
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
              <textarea name="message" rows={4} placeholder="The system, the team size, and what is getting in the way." />
            </label>
            {error && <p className="form-error">{error}</p>}
            <button className="btn" type="submit">
              Get Started
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
          <p>Software, cloud, and support for companies that want their operations to feel quieter.</p>
        </div>
        <div>
          <h3>Company</h3>
          <a href="#about">About</a>
          <a href="#process">How we work</a>
          <a href="#work">Portfolio</a>
          <a href="#insights">Blog</a>
        </div>
        <div>
          <h3>Services</h3>
          <a href="#services">IT Consulting</a>
          <a href="#services">Cloud Solutions</a>
          <a href="#services">Cyber Security</a>
          <a href="#services">Software Development</a>
        </div>
        <div>
          <h3>Contact</h3>
          <a href={contact.mapHref} target="_blank" rel="noreferrer">
            {contact.address[0]}
            <br />
            {contact.address[1]}
          </a>
          <a href={contact.phoneHref}>{contact.phoneDisplay}</a>
          <a href={contact.emailHref}>{contact.email}</a>
          <p>Mon–Fri open · Sat & Sun week off</p>
        </div>
      </div>
      <div className="footer-bar">
        <div className="wrap">
          <span>© 2026 Kasvibes IT Solutions. All rights reserved.</span>
          <span>HITEC City, Hyderabad</span>
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
