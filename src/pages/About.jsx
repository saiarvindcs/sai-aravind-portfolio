import PageHeader from '../components/PageHeader';
import { FiCheckCircle, FiCode, FiDatabase, FiLayers, FiTrendingUp } from 'react-icons/fi';

export default function About() {
  return <>
    <PageHeader eyebrow="About" title="Backend Engineer" description="My professional background combines backend development, scalable system design and practical problem solving using modern technologies." />
    <section className="container content-grid">
      <article className="panel prose"><h2>Who I am</h2><p>I’m Sai Aravind, currently working at Tata Consultancy Services as a Assistant System Engineer. I support business-critical workflows, investigate production issues, perform SQL validations and coordinate with stakeholders to keep operations reliable.</p><p>Outside my day-to-day role, I build backend projects with Python, FastAPI, PostgreSQL, SQLAlchemy, Redis and Docker. I enjoy turning real workflows into structured APIs with authentication, data integrity and maintainable architecture.</p><p>I also use Python, SQL and Power BI for analytics projects, helping me approach backend systems with a strong understanding of data and business impact.</p></article>
      <aside className="panel"><h2>Career objective</h2><p>To move into a backend engineering role where I can contribute to production-quality APIs, scalable services and database-driven applications while continuing to strengthen system design and DevOps skills.</p><div className="check-list"><span><FiCheckCircle/>Backend/API development</span><span><FiCheckCircle/>Database design</span><span><FiCheckCircle/>System design</span><span><FiCheckCircle/>Clean, testable code</span></div></aside>
    </section>
    <section className="section container"><div className="section-heading"><div><span className="eyebrow">Strengths</span><h2>How I approach engineering</h2></div></div><div className="four-grid">
      <div className="info-card"><FiCode/><h3>Problem solving</h3><p>Break complex issues into clear, testable steps.</p></div>
      <div className="info-card"><FiDatabase/><h3>Data awareness</h3><p>Validate assumptions with SQL, logs and reliable evidence.</p></div>
      <div className="info-card"><FiLayers/><h3>Structured delivery</h3><p>Prefer modular architecture, documentation and repeatable workflows.</p></div>
      <div className="info-card"><FiTrendingUp/><h3>Continuous learning</h3><p>Build projects that deepen practical backend and DevOps skills.</p></div>
    </div></section>
  </>;
}
