import { useEffect, useState } from 'react'
import { projects, type Project } from '../data'

export function Work() {
  const [active, setActive] = useState<Project | null>(null)

  useEffect(() => {
    if (!active) return
    const onKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setActive(null)
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [active])

  return (
    <section className="section" id="work">
      <div className="wrap">
        <header className="section-head">
          <h2>Our Smart Work</h2>
          <p>Systems we have shaped for operations, clinics, finance, and the teams around them.</p>
        </header>
        <div className="work-grid">
          {projects.map((project) => (
            <article key={project.id} className="project">
              <button type="button" className="project-hit" onClick={() => setActive(project)}>
                <Shot project={project} />
                <span className="project-meta">
                  <strong>{project.title}</strong>
                  <em>{project.field}</em>
                </span>
              </button>
            </article>
          ))}
        </div>
      </div>

      {active && (
        <div className="modal-back" onClick={() => setActive(null)}>
          <div
            className="modal"
            role="dialog"
            aria-modal="true"
            aria-labelledby="project-title"
            onClick={(event) => event.stopPropagation()}
          >
            <Shot project={active} />
            <p className="modal-kicker">{active.field}</p>
            <h3 id="project-title">{active.title}</h3>
            <p>{active.summary}</p>
            <p>{active.outcome}</p>
            <div className="modal-actions">
              <a className="btn btn-sm" href="#contact" onClick={() => setActive(null)}>
                Start a similar project
              </a>
              <button type="button" className="text-btn" onClick={() => setActive(null)}>
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}

function Shot({ project }: { project: Project }) {
  return (
    <div className={`shot shot-${project.theme}`} aria-hidden="true">
      <div className="shot-window">
        <div className="shot-side">
          <i />
          <i />
          <i />
          <i />
        </div>
        <div className="shot-main">
          <div className="shot-pills">
            <b />
            <b />
            <b />
          </div>
          <div className="shot-bars">
            {project.bars.map((height, index) => (
              <span key={`${project.id}-${index}`} style={{ height: `${height}%` }} />
            ))}
          </div>
          <div className="shot-lines">
            <span />
            <span />
          </div>
        </div>
      </div>
    </div>
  )
}
