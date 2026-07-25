import {
  FaPython,
  FaJava,
  FaHtml5,
  FaCss3Alt,
  FaDocker,
  FaGitAlt,
  FaGithub,
  FaLinux,
  FaDatabase,
} from 'react-icons/fa';

import {
  SiFastapi,
  SiDjango,
  SiPostgresql,
  SiMysql,
  SiRedis,
  SiSqlalchemy,
  SiJavascript,
  SiPandas,
  SiNumpy,
  SiPytest,
  SiGithubactions,
} from 'react-icons/si';

import { FiCode, FiServer, FiShield } from 'react-icons/fi';

const map = {
  Python: FaPython,
  Java: FaJava,
  HTML: FaHtml5,
  CSS: FaCss3Alt,
  JavaScript: SiJavascript,

  FastAPI: SiFastapi,
  Django: SiDjango,
  PostgreSQL: SiPostgresql,
  MySQL: SiMysql,
  Redis: SiRedis,
  SQLAlchemy: SiSqlalchemy,

  Docker: FaDocker,
  Git: FaGitAlt,
  GitHub: FaGithub,
  Linux: FaLinux,
  'GitHub Actions': SiGithubactions,

  Pandas: SiPandas,
  NumPy: SiNumpy,
  'Power BI': FaDatabase,
  Pytest: SiPytest,

  SQL: FaDatabase,
  'REST APIs': FiServer,
  JWT: FiShield,
  OAuth2: FiShield,
};

export default function SkillIcon({ name }) {
  const Icon = map[name] || FiCode;

  return <Icon aria-hidden="true" />;
}