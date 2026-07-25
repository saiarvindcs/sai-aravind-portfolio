import { useMemo, useState } from 'react';
import PageHeader from '../components/PageHeader';
import ProjectCard from '../components/ProjectCard';
import { projects } from '../data/portfolioData';

export default function Projects() {
  const [filter, setFilter] = useState('All');
  const shown = useMemo(() => filter === 'All' ? projects : projects.filter(p => p.category === filter), [filter]);
  return <>
    <PageHeader eyebrow="Projects" title="Backend systems and analytics projects." description="Each project opens a detailed page with architecture, features, screenshots and a GitHub repository link." />
    <section className="container"><div className="filter-row" role="group" aria-label="Project filters">{['All','Backend','Data Analytics'].map(x => <button className={filter===x?'active':''} key={x} onClick={() => setFilter(x)}>{x}</button>)}</div><div className="project-grid">{shown.map(p => <ProjectCard project={p} key={p.slug}/>)}</div></section>
  </>;
}
