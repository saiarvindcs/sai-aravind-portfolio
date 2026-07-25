import PageHeader from '../components/PageHeader';
import { experience } from '../data/portfolioData';
import { FiCheckCircle, FiTool } from 'react-icons/fi';

export default function Experience() {
  return <>
    <PageHeader eyebrow="Experience" title="Enterprise production support with a backend mindset." description="Hands-on experience supporting critical workflows, troubleshooting data issues and coordinating reliable resolutions." />
    <section className="container timeline-list">{experience.map(item => <article className="timeline-item panel" key={item.role}><div className="timeline-dot"/><div className="experience-top"><div><span className="eyebrow">{item.company}</span><h2>{item.role}</h2></div><span className="period">{item.period}</span></div><p>{item.summary}</p><ul>{item.bullets.map(b => <li key={b}><FiCheckCircle/>{b}</li>)}</ul></article>)}</section>
    <section className="section container"><div className="panel tools-panel"><FiTool/><div><h2>Engineering Tools & Technologies</h2><p>• Python • FastAPI • PostgreSQL • SQLAlchemy • Redis<br></br> • Docker • Git • GitHub • REST APIs • SQL Server • ServiceNow • SoapUI • Hangfire • Excel</p></div></div></section>
  </>;
}
