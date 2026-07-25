import { Link } from 'react-router-dom';
export default function NotFound(){return <section className="container not-found"><span className="eyebrow">404</span><h1>Page not found</h1><p>The page you requested does not exist.</p><Link className="button" to="/">Return home</Link></section>}
