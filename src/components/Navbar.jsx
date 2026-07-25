import { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { FiDownload, FiMenu, FiMoon, FiSun, FiX } from 'react-icons/fi';
import { profile } from '../data/portfolioData';

const links = [
  ['/', 'Home'], ['/about', 'About'], ['/experience', 'Experience'], ['/projects', 'Projects'], ['/skills', 'Skills'], ['/contact', 'Contact'],
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [theme, setTheme] = useState(() => localStorage.getItem('theme') || 'dark');

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    localStorage.setItem('theme', theme);
  }, [theme]);

  return (
    <header className="navbar-wrap">
      <nav className="container navbar" aria-label="Main navigation">
        <NavLink className="brand" to="/" onClick={() => setOpen(false)}>
          <span className="brand-mark">SA</span><span>Sai Aravind</span>
        </NavLink>
        <button className="icon-button mobile-menu" onClick={() => setOpen(v => !v)} aria-label="Toggle menu">
          {open ? <FiX /> : <FiMenu />}
        </button>
        <div className={`nav-panel ${open ? 'open' : ''}`}>
          <div className="nav-links">
            {links.map(([to, label]) => <NavLink key={to} to={to} end={to === '/'} onClick={() => setOpen(false)}>{label}</NavLink>)}
          </div>
          <div className="nav-actions">
            <button className="icon-button" onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')} aria-label="Toggle color theme">
              {theme === 'dark' ? <FiSun /> : <FiMoon />}
            </button>
            <a className="button button-outline small" href={profile.resume} download><FiDownload /> Resume</a>
          </div>
        </div>
      </nav>
    </header>
  );
}
