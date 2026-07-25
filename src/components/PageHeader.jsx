export default function PageHeader({ eyebrow, title, description }) {
  return <section className="page-header container"><span className="eyebrow">{eyebrow}</span><h1>{title}</h1><p>{description}</p></section>;
}
