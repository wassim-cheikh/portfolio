import { useEffect, useState } from "react";

const links = {
  github: "https://github.com/wassim-cheikh",
  linkedin: "https://www.linkedin.com/in/wassim-cheikh",
  upwork: "https://www.upwork.com/freelancers/~019a01e4e340a3d051",
  email: "mailto:wassimcheikh.07@gmail.com",
};

const projects = [
  {
    number: "01",
    title: "Easy Travel Agent",
    description:
      "A production-ready travel-planning platform with stateful LangGraph workflows, persistent conversations, live hotel search, bilingual prompts, operational probes, Docker, and CI.",
    tags: ["FastAPI", "LangGraph", "SQLite", "Docker"],
    href: `${links.github}/Easy-travel`,
    visual: "travel",
  },
  {
    number: "02",
    title: "QueueForge",
    description:
      "A durable background-job orchestration API with idempotency, atomic leases, priorities, scheduling, crash recovery, retries, dead-letter handling, and operational metrics.",
    tags: ["FastAPI", "Job queues", "Reliability", "Docker"],
    href: `${links.github}/queueforge`,
    visual: "queue",
  },
  {
    number: "03",
    title: "DataHarbor",
    description:
      "A contract-driven ingestion and data-quality platform with schema validation, type coercion, deduplication, quarantine, lineage, quality reports, and reproducible exports.",
    tags: ["ETL", "Data quality", "Lineage", "FastAPI"],
    href: `${links.github}/dataharbor`,
    visual: "data",
  },
  {
    number: "04",
    title: "EntitleFlow",
    description:
      "A subscription-gated PDF intelligence backend with Firebase authentication, idempotent RevenueCat webhooks, MongoDB entitlement modeling, S3 storage, and recoverable Celery workflows.",
    tags: ["FastAPI", "RevenueCat", "Firebase", "Celery"],
    href: `${links.github}/entitleflow`,
    visual: "entitle",
  },
];

const capabilities = [
  ["Backend engineering", "FastAPI, Django, Flask, REST APIs, authentication, testing"],
  ["Data & automation", "ETL pipelines, Celery, Pandas, Selenium, Playwright"],
  ["Cloud & delivery", "AWS, Docker, Kubernetes, GitHub Actions, CI/CD"],
  ["Applied ML", "OpenCV, PyTorch, Scikit-learn, model integrations"],
];

function Arrow() {
  return <span aria-hidden="true">↗</span>;
}


function ProjectVisual({ type }: { type: string }) {
  if (type === "travel") return <div className="project-visual" aria-hidden="true"><div className="visual-label"><span /> LIVE AGENT WORKFLOW</div><div className="route-map"><span className="route-node active">TUN</span><i /><span className="route-node">SEARCH</span><i /><span className="route-node active">BCN</span></div><div className="visual-status"><span>LANGGRAPH</span><b>TRIP READY</b></div></div>;
  if (type === "queue") return <div className="project-visual" aria-hidden="true"><div className="visual-label"><span /> WORKER HEALTHY</div><div className="queue-flow"><div><small>01</small>QUEUED</div><i>→</i><div><small>02</small>RUNNING</div><i>→</i><div className="active"><small>03</small>DONE</div></div><div className="metric-bars"><span /><span /><span /><span /><span /><span /></div><div className="visual-status"><span>ATOMIC LEASES</span><b>99.9% RELIABLE</b></div></div>;
  if (type === "data") return <div className="project-visual" aria-hidden="true"><div className="visual-label"><span /> INGESTION COMPLETE</div><div className="pipeline-flow"><span>RAW</span><i>→</i><span>VALIDATE</span><i>→</i><span>DEDUP</span><i>→</i><span className="active">EXPORT</span></div><div className="quality-grid"><span>SCHEMA <b>PASS</b></span><span>QUALITY <b>98.7</b></span><span>LINEAGE <b>TRACED</b></span></div><div className="visual-status"><span>DATA CONTRACT v1</span><b>0 ERRORS</b></div></div>;
  return <div className="project-visual" aria-hidden="true"><div className="visual-label"><span /> ENTITLEMENT ACTIVE</div><div className="pipeline-flow"><span>FIREBASE</span><i>→</i><span className="active">GATE</span><i>→</i><span>CELERY</span><i>→</i><span>S3 PDF</span></div><div className="quality-grid"><span>WEBHOOK <b>VERIFIED</b></span><span>JOB <b>QUEUED</b></span><span>ACCESS <b>GRANTED</b></span></div><div className="visual-status"><span>REVENUECAT EVENT</span><b>200 OK</b></div></div>;
}

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((entry) => entry.isIntersecting && entry.target.classList.add("is-visible")),
      { threshold: 0.12 },
    );
    document.querySelectorAll(".reveal").forEach((element) => observer.observe(element));
    return () => observer.disconnect();
  }, []);

  const closeMenu = () => setMenuOpen(false);

  return (
    <>
      <header className="site-header">
        <a className="wordmark" href="#top" aria-label="Wassim Cheikh, home">WC<span>.</span></a>
        <button className="menu-button" onClick={() => setMenuOpen(!menuOpen)} aria-expanded={menuOpen} aria-label="Toggle navigation">
          <span /><span />
        </button>
        <nav className={menuOpen ? "nav open" : "nav"} aria-label="Main navigation">
          <a href="#work" onClick={closeMenu}>Work</a>
          <a href="#about" onClick={closeMenu}>About</a>
          <a href="#experience" onClick={closeMenu}>Experience</a>
          <a href={links.github} target="_blank" rel="noreferrer">GitHub <Arrow /></a>
          <a href={links.email} className="nav-cta">Let’s talk <Arrow /></a>
        </nav>
      </header>

      <main id="top">
        <section className="hero">
          <div className="hero-status"><span /> Tunis, Tunisia · Open to relocation</div>
          <h1>I build the systems<br />behind the <em>product.</em></h1>
          <div className="hero-bottom">
            <p>Backend and automation engineer turning complex workflows into reliable APIs, data pipelines, and intelligent systems.</p>
            <div className="hero-actions">
              <a className="button primary" href="#work">Explore my work <span>↓</span></a>
              <a className="button text" href="/Wassim-Cheikh-Resume.pdf" target="_blank">View résumé <Arrow /></a>
            </div>
          </div>
          <div className="hero-orbit" aria-hidden="true">
            <div className="orbit orbit-one" /><div className="orbit orbit-two" />
            <div className="core">API</div>
            <span className="node node-one">DATA</span><span className="node node-two">ML</span><span className="node node-three">AWS</span>
          </div>
        </section>

        <section className="proof-strip" aria-label="Career highlights">
          <div><strong>3+</strong><span>years building</span></div>
          <div><strong>30+</strong><span>Upwork jobs</span></div>
          <div><strong>100%</strong><span>Job Success Score</span></div>
          <div><strong>Top Rated Plus</strong><span>Upwork status</span></div>
        </section>

        <section className="section projects" id="work">
          <div className="section-heading reveal">
            <span className="eyebrow">Selected work</span>
            <h2>Proof, not<br /><em>promises.</em></h2>
            <p>Public projects that show how I approach backend architecture, automation, and product-oriented engineering.</p>
          </div>
          <div className="project-list">
            {projects.map((project) => (
              <a className="project-card reveal" href={project.href} target="_blank" rel="noreferrer" key={project.title}>
                <div className="project-number">{project.number}</div>
                <div className="project-copy">
                  <div className="project-title-row"><h3>{project.title}</h3><span className="project-link">View repository <Arrow /></span></div>
                  <p>{project.description}</p>
                  <div className="tags">{project.tags.map((tag) => <span key={tag}>{tag}</span>)}</div>
                </div>
                <ProjectVisual type={project.visual} />
              </a>
            ))}
          </div>
        </section>

        <section className="section about" id="about">
          <div className="about-intro reveal">
            <span className="eyebrow">What I bring</span>
            <h2>Engineering with a bias for <em>useful.</em></h2>
            <p>I work across backend services, automation, data engineering, and applied machine learning. The common thread is simple: understand the real workflow, remove unnecessary complexity, and ship something dependable.</p>
          </div>
          <div className="capability-list">
            {capabilities.map(([title, detail], index) => (
              <div className="capability reveal" key={title}><span>0{index + 1}</span><h3>{title}</h3><p>{detail}</p></div>
            ))}
          </div>
        </section>

        <section className="section experience" id="experience">
          <div className="section-heading reveal">
            <span className="eyebrow">Experience</span>
            <h2>Built in real<br /><em>environments.</em></h2>
          </div>
          <div className="timeline reveal">
            <article><div><h3>Freelance Software Engineer</h3><p>International clients · Remote</p></div><time>2023 — Present</time></article>
            <article><div><h3>Backend Engineer</h3><p>Checkmate · New York · Remote</p></div><time>2025 — 2026</time></article>
            <article><div><h3>Software Engineer</h3><p>YittBox · Kentucky · Remote</p></div><time>2024 — 2026</time></article>
            <article><div><h3>Software Engineer Intern</h3><p>3S Spring · Tunis</p></div><time>2024</time></article>
          </div>
        </section>

        <section className="contact-section">
          <span className="eyebrow">Start a conversation</span>
          <h2>Have a hard problem?<br /><em>Let’s make it simpler.</em></h2>
          <a className="contact-email" href={links.email}>wassimcheikh.07@gmail.com <Arrow /></a>
        </section>
      </main>

      <footer>
        <div><strong>Wassim Cheikh</strong><span>Backend & Automation Engineer</span></div>
        <div className="socials"><a href={links.github} target="_blank" rel="noreferrer">GitHub</a><a href={links.linkedin} target="_blank" rel="noreferrer">LinkedIn</a><a href={links.upwork} target="_blank" rel="noreferrer">Upwork</a></div>
        <span>© {new Date().getFullYear()}</span>
      </footer>
    </>
  );
}

export default App;
