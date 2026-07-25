export const profile = {
  name: 'Sai Aravind',
  role: 'Backend Engineer',
  currentRole: 'Assistant System Engineer',
  location: 'Chennai, India',
  email: 'saiaravindcs@gmail.com',
  phone: '+91 00000 00000',
  github: 'https://github.com/saiarvindcs',
  linkedin: 'https://www.linkedin.com/in/c-s-sai-aravind-620626237/',
  resume: '/resume/Sai-Aravind-Resume.pdf',
  avatar: '/profile-phot0o.jpg',
  tagline: 'I build secure, scalable backend systems and turn real-world requirements into reliable software.',
};

export const skills = [
  { group: 'Languages', items: ['Python', 'SQL', 'JavaScript', 'HTML', 'CSS', 'Java'] },
  { group: 'Backend & APIs', items: ['FastAPI', 'Django', 'REST APIs', 'JWT', 'OAuth2', 'API Security'] },
  { group: 'Databases & ORM', items: ['PostgreSQL', 'MySQL', 'Redis', 'SQLAlchemy', 'Alembic'] },
  { group: 'DevOps & Tools', items: ['Docker', 'Git', 'GitHub', 'GitHub Actions', 'Linux', 'CI/CD'] },
  { group: 'Analytics', items: ['Pandas', 'NumPy', 'Matplotlib', 'Power BI', 'Excel'] },
  { group: 'Engineering', items: ['OOP', 'SOLID', 'Pytest', 'System Design', 'Logging', 'Monitoring'] },
];

export const experience = [
  {
    company: 'Tata Consultancy Services',
    role: 'Assistant System Engineer',
    period: 'May 2025 — Present',
    summary: 'Contributed to enterprise backend systems for the Cigna Middle East / KSA policy platform, ensuring reliable application workflows and data integrity.',
    bullets: [
      'Designed and executed SQL queries to validate business data and optimize backend workflows.',
      'Worked with SQL Server, ServiceNow, SoapUI and internal enterprise tools to analyze application behavior and resolve technical issues.',
      'Collaborated with cross-functional teams to improve system reliability, investigate data inconsistencies and maintain high service quality.',
      'Performed backend data validation, batch monitoring and process optimization to support stable application performance.',
    ],
  },
  
];

export const projects = [
  {
    slug: 'inventory-order-management-api',
    title: 'Inventory & Order Management API',
    category: 'Backend',
    short: 'Production-style REST API for inventory, orders, warehouses, suppliers and stock movements.',
    overview: 'A modular backend platform designed to model real inventory workflows with authentication, role-based access, stock accounting, order handling and auditability.',
    tech: ['Python', 'FastAPI', 'PostgreSQL', 'SQLAlchemy', 'Alembic', 'Redis', 'Docker', 'Pytest'],
    highlights: ['JWT authentication and RBAC', 'Multi-warehouse inventory ledger', 'Stock movements and transfers', 'Orders, suppliers and purchasing workflows', 'Audit logs and health checks', 'Docker and CI-ready structure'],
    github: 'https://github.com/saiarvindcs/Inventory-Order-Management',
    images: [],
  },
  {
    slug: 'async-task-processing-system',
    title: 'Async Task Processing System',
    category: 'Backend',
    short: 'Distributed task-processing backend using Celery and Redis for reliable background jobs.',
    overview: 'A backend system that demonstrates queue-based asynchronous processing, retries, task status tracking and failure handling for long-running workloads.',
    tech: ['Python', 'FastAPI', 'Celery', 'Redis', 'Docker', 'PostgreSQL'],
    highlights: ['Celery workers and task queues', 'Redis broker and result backend', 'Retry and failure handling', 'Task status APIs', 'Containerized local environment', 'Structured logging'],
    github: 'https://github.com/saiarvindcs/async-task-processing-system',
    images: [],
  },
  {
    slug: 'retail-sales-cohort-analysis',
    title: 'Retail Sales & Customer Cohort Analysis',
    category: 'Data Analytics',
    short: 'End-to-end retail analytics project covering revenue, retention, customer cohorts and KPIs.',
    overview: 'A complete analytics workflow that transforms transactional sales data into business insights using Python, SQL, PostgreSQL and Power BI.',
    tech: ['Python', 'Pandas', 'NumPy', 'PostgreSQL', 'SQL', 'Power BI'],
    highlights: ['Data cleaning and exploratory analysis', 'Customer cohort retention analysis', 'Revenue and KPI reporting', 'SQL-based business analysis', 'Interactive Power BI dashboards', 'Documented analytical workflow'],
    github: 'https://github.com/saiarvindcs/Retail-Sales-Analysis',
    images: [],
  },
  {
    slug: 'customer-churn-analysis',
    title: 'Customer Churn Analysis',
    category: 'Data Analytics',
    short: 'Customer churn investigation using EDA, segmentation, retention analysis and business reporting.',
    overview: 'An analytical project focused on understanding churn drivers, segment behaviour, retention patterns and revenue impact.',
    tech: ['Python', 'Pandas', 'SQL', 'PostgreSQL', 'Power BI', 'Matplotlib'],
    highlights: ['Churn driver analysis', 'Customer segmentation', 'Cohort and retention reporting', 'Revenue impact analysis', 'Power BI dashboard', 'Business recommendations'],
    github: 'https://github.com/saiarvindcs/customer-churn-analysis',
    images: [],
  },
];
