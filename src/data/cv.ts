/* =====================================================================
   CV CONTENT. Edit the CV here.
   - `cv`        shared content: contact, experience, skills, education.
   - `profiles`  per-target variants. Each profile sets its own headline
                 role, profile statement and leadership block. Experience
                 stays in chronological order for every profile.
   Logos are files in public/logos/ (set `logo` to the file name).
   ===================================================================== */

export type Leadership = [heading: string, text: string][];

export type CvProfile = {
  slug: string;        // URL segment: /cv/<slug>
  label: string;       // shown in the page switcher
  role: string;        // headline under the name
  pdf: string;         // generated into public/ by `npm run cv:pdf`
  profile: string;     // profile statement
  leadership: Leadership;
};

export const cv = {
  name: 'Sammy Deveille',
  contact: [
    ['phone', '07585 954 288'],
    ['mail', 'sammydeveille@gmail.com'],
    ['home', 'Henlow, Bedfordshire'],
  ] as [string, string][],
  highlights: [
    ['15+', 'years building cloud platforms'],
    ['2 → 10', 'engineers grown and led'],
    ['3', 'leadership roles'],
    ['ISO 27001', 'certification led'],
  ] as [string, string][],
  technical: [
    ['Architecture & Cloud', ['AWS · Azure · Docker · Kubernetes · Terraform · Ansible']],
    ['Delivery & Quality', ['CI/CD (GitHub Actions, Jenkins)', 'TDD and test automation (Playwright, Jest)', 'Load testing (K6)']],
    ['Security & Compliance', ['ISO 27001 · GDPR · OWASP ZAP · Trivy']],
    ['Platforms & APIs', ['Node.js · TypeScript · React · Python', 'REST · GraphQL · WebSockets']],
    ['Data & Observability', ['PostgreSQL / MySQL · Redis', 'Grafana · Prometheus · CloudWatch']],
    ['Integration', ['Prismatic · Zapier · Okta · OneLogin', 'Stripe · Salesforce · HubSpot', 'Office 365 · Mapbox']],
    ['AI & Automation', ['Claude · Codex · Kiro · KiroCrew']],
  ] as [string, string[]][],

  /* Chronological, newest first. Page 1 holds the three main roles in one
     column; page 2 holds the earlier roles beside the leadership and
     technical skills. Shared by every profile. */
  pages: [
    [
      { title: 'Backend Team Lead', company: 'ASP Events', tagline: 'Event website provider', dates: 'Mar 24 - Present', sector: 'Event tech', place: 'London',
        logo: 'asp.png',
        bullets: [
          'Lead a backend team of 4 on a platform serving 160 million requests every week',
          'Delivered five-figure annual savings through a code rewrite, resource reservations and infrastructure projects',
          'Built CI/CD pipelines with automated security scanning and deployment',
          'Led the ColdFusion-to-Lucee migration, cutting licensing overhead',
          'Drove TDD and test automation, with performance benchmarking to fix bottlenecks',
          'Dockerised the application layer and added asset compression for speed and cost',
        ],
        tags: ['React', 'NodeJS', 'Java', 'Lucee', 'Redis', 'MySQL', 'AWS', 'Docker', 'Ansible', 'Terraform', 'Grafana', 'Prometheus'] },
      { title: 'Head of Engineering', company: 'Springpod', tagline: 'Career guidance e-learning for students', dates: 'Apr 2023 - Jan 2024', sector: 'ELearning', place: 'London',
        logo: 'springpod.png',
        bullets: [
          'Grew the engineering team from 3 to 6, hiring front-end, back-end and QA engineers',
          'Led hiring and mentoring across the team',
          'Introduced code reviews and Scrum sprints to align delivery with company goals',
          'Designed and delivered the UCAS SSO integration, built to scale for a UK-wide rollout',
        ],
        tags: ['React', 'NodeJS', 'Next.JS', 'NestJS', 'GraphQL', 'gRPC', 'AWS', 'Docker', 'K8S'] },
      { title: 'Chief Technology Officer', company: 'Glisser', tagline: 'Event tech powering real-time interaction', dates: 'Apr 2015 - Jan 2023', sector: 'Event tech', place: 'London',
        logo: 'glisser.png',
        bullets: [
          'Joined as employee #3, evolved prototype into market-ready product through multiple funding rounds, securing Big Four clients',
          'Defined and executed technology roadmap from early prototype to enterprise-grade platform, including COVID-era pivot to virtual/hybrid',
          'Engineered platform for multi-million concurrent WebSocket connections, meeting a 200ms response-time SLA',
          'Designed real-time messaging layer for polling, Q&A, slide sync and analytics',
          'Migrated cloud infrastructure for cost and performance',
          'Delivered data integration solutions across multiple external APIs and providers',
          'Led an engineering team of 10, growing it from 2 and shaping hiring, onboarding and mentoring through to senior/lead roles',
          'Led ISO 27001 certification and GDPR compliance',
          'Enforced OWASP standards with continuous security assessments toward SOC 2 compliance',
        ],
        tags: ['React', 'NodeJS', 'WebSocket', '.NET', 'Python', 'Angular', 'PHP', 'RabbitMQ', 'Redis', 'MySQL', 'Docker', 'Terraform', 'Azure', 'AWS', 'ELK'] },
    ],
    [
      { title: 'Web Developer', company: 'Good Elearning', tagline: 'Online accredited business and IT courses', dates: 'Jul 2013 - Apr 2015', sector: 'ELearning', place: 'London',
        logo: 'good-elearning.png',
        bullets: [
          'Built the academy web platform (LMS) for accredited ITIL, PRINCE2 and TOGAF courses, reporting directly to the CTO',
          'Content tracking, organisational user management, CMS and reporting (HTML5, PDF, Excel)',
          'Enforced TDD adoption, achieving 90% test coverage',
          'Built the front end in AngularJS with a .NET and Entity Framework back end, covered by NUnit tests',
        ],
        tags: ['AngularJS', '.NET', 'SQL', 'EF', 'Azure', 'NUnit'] },
      { title: 'Software Developer', company: 'Equisys', tagline: 'Document and expense software', dates: 'Jun 2010 - Jul 2013', sector: 'Office ERP', place: 'London',
        logo: 'equisys.png',
        bullets: [
          'Full development lifecycle of ERP document and expense software (Zetadocs) in .NET and C++ for desktop and web, in a team of 8',
          'Built SharePoint filing and approved-expense export into Dynamics NAV',
          'Worked as part of a team of 8 on releases of the desktop and web products, covering feature development and bug fixes',
        ],
        tags: ['.NET', 'C++', 'Office', 'SharePoint', 'Dynamics', 'SQL', 'Azure'] },
      { title: 'Research Software Engineer', company: 'iMinds', tagline: 'EU research project on mobile thin clients (MobiThin)', dates: 'Oct 2008 - Jun 2010', sector: 'Research', place: 'Ghent, Belgium',
        logo: 'iminds.png', last: true,
        bullets: [
          'Implemented RFB traffic replay tooling and load-testing suites for remote desktop thin clients',
          'Took part in building custom observability solutions with Zabbix, including network monitoring',
          'Built C++ and Bash load-testing scripts to measure thin-client performance under network load',
        ],
        tags: ['C++', 'Bash', 'Perl', 'RFB', 'Zabbix'] },
    ],
  ] as Experience[][],

  trivia: [['French native', 'UK settled status'], ['Musician for live and studio'], ['Cyclist']] as [string, string?][],
  education: [
    { degree: 'Masters', field: 'Computer Sciences', school: ['Universite Polytechnique', 'Hauts de France'], dates: '2005 - 2008', place: 'Valenciennes, France', logo: 'uphf.png' },
    { degree: 'HND', field: 'Computer Sciences', school: ['Institut Universitaire de', 'Technologie'], dates: '2003 - 2005', place: 'Valenciennes, France', logo: 'iut.png' },
  ],
};

export type Experience = {
  title?: string;
  company?: string;
  tagline?: string;
  dates?: string;
  sector?: string;
  place?: string;
  logo?: string;
  last?: boolean;
  bullets: string[];
  tags?: string[];
};

/* Shared leadership copy. Each profile can replace its own block below
   without touching the experience. */
const leadershipBase: Leadership = [
  ['Strategy & Architecture', 'Owned technical roadmaps and OKRs from prototype to enterprise scale. Documented key decisions as ADRs across cloud migrations and platform pivots, with FinOps cost control.'],
  ['People & Culture', 'Scaled teams from 2 to 10 through structured hiring, career frameworks, 1:1s and performance reviews. Built blameless, data-driven teams with postmortem-led incident management.'],
  ['Delivery & Process', 'Introduced Scrum, TDD and trunk-based development, balancing delivery with technical debt. Measured with DORA (deployment frequency, lead time, change failure rate, time to restore) and SLOs.'],
  ['Governance & Security', 'Led ISO 27001, GDPR, Cyber Essentials and SOC 2 work, applying OWASP and DevSecOps practices. Least-privilege, continuously assessed architecture.'],
];

const profileBase =
  'Head of Engineering with over 15 years of experience building and scaling engineering teams, from early prototype to enterprise platform. Grew the team at Springpod from 3 to 6, following eight years as CTO of Glisser, leading a team of 10. Known for hiring well and delivering secure cloud platforms.';
export const profiles: Record<string, CvProfile> = {
  'technical-lead': {
    slug: 'technical-lead',
    label: 'Technical Lead',
    role: 'Technical Lead',
    pdf: 'Sammy Deveille - Technical Lead - CV.pdf',
    profile:
      'Technical Lead with over 15 years of experience building and scaling cloud platforms, from early prototype to enterprise scale. Currently leading a backend team at ASP Events, following a period as CTO of a real-time event platform. Known for pragmatic architecture, secure delivery and growing engineers into senior roles.',
    leadership: leadershipBase,
  },
  'head-of-engineering': {
    slug: 'head-of-engineering',
    label: 'Head of Engineering',
    role: 'Head of Engineering',
    pdf: 'Sammy Deveille - Head of Engineering - CV.pdf',
    profile: profileBase,
    leadership: leadershipBase,
  },
};
