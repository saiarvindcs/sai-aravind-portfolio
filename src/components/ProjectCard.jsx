import { Link } from 'react-router-dom';
import { FiArrowUpRight, FiBox, FiPieChart, FiZap } from 'react-icons/fi';

const icons = { 'Inventory & Order Management API': FiBox, 'Async Task Processing System': FiZap };

export default function ProjectCard({ project, featured = false }) {
  const Icon = icons[project.title] || FiPieChart;
  return (
    <article className={`project-card ${featured ? 'featured' : ''}`}>
      <div className="project-icon"><Icon /></div>
      <div className="project-meta"><span>{project.category}</span></div>
      <h3>{project.title}</h3>
      <p>{project.short}</p>
      <div className="tag-row">{project.tech.slice(0, featured ? 6 : 4).map(item => <span className="tag" key={item}>{item}</span>)}</div>
      <Link className="text-link" to={`/projects/${project.slug}`}>View project <FiArrowUpRight /></Link>
    </article>
  );
}
