import { Link } from 'react-router-dom';
import { FiArrowRight, FiGithub, FiLinkedin, FiMail, FiMapPin, FiBriefcase, FiTarget } from 'react-icons/fi';
import { profile, projects } from '../data/portfolioData';
import ProjectCard from '../components/ProjectCard';
import SkillIcon from '../components/SkillIcon';

const topSkills = ['Python', 'FastAPI', 'PostgreSQL', 'SQL', 'Redis', 'Docker'];
export default function Home() {
  return (
    <>
      <section className="hero container">
        <div className="hero-copy">
          <span className="eyebrow">Backend Engineer</span>
          <h1>Hi, I’m <span>Sai Aravind</span></h1>
          <p className="hero-lead">{profile.tagline}</p>
          <div className="tag-row hero-tags">{topSkills.map(s => <span className="tag" key={s}>{s}</span>)}</div>
          <div className="button-row">
            <Link className="button" to="/projects">View my projects <FiArrowRight /></Link>
            <Link className="button button-outline" to="/contact">Contact me <FiMail /></Link>
          </div>
          <div className="social-row hero-social">
            <a href={profile.github} target="_blank" rel="noreferrer"><FiGithub /></a>
            <a href={profile.linkedin} target="_blank" rel="noreferrer"><FiLinkedin /></a>
            <a href={`mailto:${profile.email}`}><FiMail /></a>
          </div>
        </div>


        <div className="hero-visual">
          
          <div className="quick-grid">
            <div className="quick-card"><FiBriefcase /><span>Experience</span><strong>1+ Years</strong></div>
            <div className="quick-card"><FiMapPin /><span>Location</span><strong>{profile.location}</strong></div>
            <div className="quick-card"><FiBriefcase /><span>Current role</span><strong>Junior Backend Engineer</strong></div>
            <div className="quick-card"><FiTarget /><span>Focus</span><strong>Backend Engineering & APIs</strong></div>
          </div>
        </div>
      </section>

      <section className="section container home-about">
        <div><span className="eyebrow">A quick introduction</span><h2>Engineering reliable systems with clarity and care.</h2></div>
        <div><p>I'm a Junior Backend Engineer at TCS, passionate about building scalable backend applications using Python, FastAPI, PostgreSQL, Redis and Docker. I enjoy designing clean APIs, solving real-world problems and developing production-ready backend systems.</p><Link className="text-link" to="/about">More about me <FiArrowRight /></Link></div>
      </section>

      <section className="section container">
        <div className="section-heading"><div><span className="eyebrow">Selected work</span><h2>Featured backend projects</h2></div><Link className="text-link" to="/projects">All projects <FiArrowRight /></Link></div>
        <div className="project-grid featured-grid">{projects.slice(0,2).map(p => <ProjectCard project={p} featured key={p.slug} />)}</div>
      </section>

      <section className="section container stack-preview">
        <div><span className="eyebrow">Core stack</span><h2>Tools I use to build and ship.</h2><p>The full skills page groups everything by backend, databases, DevOps and analytics.</p><Link className="text-link" to="/skills">Explore all skills <FiArrowRight /></Link></div>
        <div className="skill-preview-grid">{topSkills.map(s => <div className="skill-chip" key={s}><SkillIcon name={s}/><span>{s}</span></div>)}</div>
      </section>

      <section className="section container cta"><div><span className="eyebrow">Let’s connect</span><h2>Looking for backend engineering opportunities.</h2><p>Explore the projects, review the code on GitHub, or reach out directly.</p></div><Link className="button" to="/contact">Contact me <FiArrowRight /></Link></section>
    </>
  );
}
