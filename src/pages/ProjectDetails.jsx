import { Link, useParams } from 'react-router-dom';
import { FiArrowLeft, FiCheckCircle, FiGithub, FiImage } from 'react-icons/fi';
import { projects } from '../data/portfolioData';
import NotFound from './NotFound';

export default function ProjectDetails() {
  const { slug } = useParams();
  const project = projects.find(p => p.slug === slug);
  if (!project) return <NotFound/>;
  return <section className="container project-detail">
    <Link className="text-link back-link" to="/projects"><FiArrowLeft/> Back to projects</Link>
    <div className="detail-hero"><span className="eyebrow">{project.category} project</span><h1>{project.title}</h1><p>{project.overview}</p><div className="tag-row">{project.tech.map(t => <span className="tag" key={t}>{t}</span>)}</div><a className="button" href={project.github} target="_blank" rel="noreferrer"><FiGithub/> View on GitHub</a></div>
    <div className="detail-grid"><article className="panel"><h2>Project highlights</h2><div className="check-list">{project.highlights.map(h => <span key={h}><FiCheckCircle/>{h}</span>)}</div></article><article className="panel"><h2>Why this project matters</h2><p>This project demonstrates practical engineering decisions beyond basic CRUD: modular design, reliable data workflows, documentation and technologies used in modern backend systems.</p><p>The repository is the primary proof of work until a public deployment is added.</p></article></div>
   <article className="panel">
  <h2>Repository Highlights</h2>

  <ul className="project-highlights">
    <li>📖 Comprehensive README with setup instructions</li>
    <li>🏗️ Clean project architecture and modular codebase</li>
    <li>🧪 API documentation and testing examples</li>
    <li>🐳 Docker support and deployment configuration</li>
    <li>🔐 Authentication, validation and production-ready practices</li>
  </ul>
</article>
  </section>;
}
