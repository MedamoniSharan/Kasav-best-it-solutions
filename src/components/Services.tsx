import { services, steps } from '../data'
import { Glyph } from './Glyph'

export function Services() {
  return (
    <section className="section" id="services">
      <div className="wrap">
        <header className="section-head">
          <h2>Our Best Services</h2>
          <p>Practical IT for companies that need the work done, not another slide deck.</p>
        </header>
        <div className="service-grid">
          {services.map((service) => (
            <article key={service.title} className="service-card">
              <span className="service-icon">
                <Glyph name={service.icon} />
              </span>
              <h3>{service.title}</h3>
              <p>{service.text}</p>
              <a href="#contact">Learn more</a>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export function WhyChoose() {
  return (
    <section className="section why" id="process">
      <div className="wrap">
        <header className="section-head is-center">
          <h2>Why Choose Us</h2>
          <p>A straight path from the first conversation to a system someone on your team can run.</p>
        </header>
        <div className="flow">
          <svg className="flow-line" viewBox="0 0 1100 320" preserveAspectRatio="none" aria-hidden="true">
            <path
              d="M80 92 C 200 92, 220 230, 330 230 S 470 92, 550 92 S 700 230, 790 230 S 940 104, 1030 104"
              fill="none"
              stroke="#d5dae0"
              strokeWidth="2.5"
              strokeDasharray="7 10"
              strokeLinecap="round"
            />
          </svg>
          <div className="flow-grid">
            {steps.map((step) => (
              <article key={step.title} className="step" style={{ background: step.bg }}>
                <span className="step-icon" style={{ background: step.tint, color: step.ink }}>
                  <Glyph name={step.icon} />
                </span>
                <h3 style={{ color: step.ink }}>{step.title}</h3>
                <p>{step.text}</p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
