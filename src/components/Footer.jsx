import { FiGithub, FiLinkedin, FiMail } from 'react-icons/fi';
import { profile } from '../data/portfolioData';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-inner">
        <div><strong>Sai Aravind</strong><p>Keep learning. Keep building. Keep growing.</p></div>
        <div className="social-row">
          <a href={profile.github} target="_blank" rel="noreferrer" aria-label="GitHub"><FiGithub /></a>
          <a href={profile.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn"><FiLinkedin /></a>
          <a href={`mailto:${profile.email}`} aria-label="Email"><FiMail /></a>
        </div>
      </div>
      <div className="container copyright">© {new Date().getFullYear()} Sai Aravind. All rights reserved.</div>
    </footer>
  );
}
