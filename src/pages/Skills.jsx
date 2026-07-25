import PageHeader from '../components/PageHeader';
import SkillIcon from '../components/SkillIcon';
import { skills } from '../data/portfolioData';

export default function Skills() {
  return <>
    <PageHeader eyebrow="Skills" title="A practical backend, database and DevOps toolkit." description="Technologies are grouped by how I use them—not by decorative percentage bars." />
    <section className="container skills-groups">{skills.map(group => <article className="panel skill-group" key={group.group}><h2>{group.group}</h2><div className="skill-card-grid">{group.items.map(item => <div className="skill-card" key={item}><SkillIcon name={item}/><span>{item}</span></div>)}</div></article>)}</section>
  </>;
}
