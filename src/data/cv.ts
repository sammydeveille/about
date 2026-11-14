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
          'Engineered platform for multi-million concurrent WebSocket connections',
          'Met a 200ms response-time SLA',
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
          'Led development and rollout of a bespoke LMS reporting directly to the CTO',
          'Content tracking, organisational user management, CMS and reporting (HTML5, PDF, Excel)',
          'Enforced TDD adoption, achieving 90% test coverage',
        ],
        tags: ['AngularJS', '.NET', 'SQL', 'EF', 'Azure', 'NUnit'] },
      { title: 'Software Developer', company: 'Equisys', tagline: 'Document and expense software', dates: 'Jun 2010 - Jul 2013', sector: 'Office ERP', place: 'London',
        logo: 'equisys.png',
        bullets: [
          'Full development lifecycle of ERP software in .NET and C++ for desktop and web applications in a team of 8',
          'Integration with MS Office, SharePoint, Dynamics NAV',
        ],
        tags: ['.NET', 'C++', 'Office', 'SharePoint', 'Dynamics', 'SQL', 'Azure'] },
      { title: 'Research Software Engineer', company: 'iMinds', tagline: 'Thin client european research project', dates: 'Oct 2008 - Jun 2010', sector: 'Research', place: 'Ghent, Belgium',
        logo: 'iminds.png', last: true,
        bullets: [
          'Implemented tooling for remote desktop protocol and network/bandwidth optimization',
          'Network monitoring and load testing in C++ and Bash',
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
  ['Strategy & Vision', 'Owned technical roadmaps from early-stage prototype through enterprise scale. Led architecture decisions across cloud migrations, platform pivots and compliance programs.'],
  ['People & Growth', 'Scaled teams from 2 to 10+, shaped hiring pipelines, and mentored engineers through to senior/lead roles. Built cross-functional collaboration across product, design and engineering.'],
  ['Process & Delivery', 'Introduced Agile, TDD and documentation-first practices. Balanced short-term delivery with long-term architectural investment. Track engineering effectiveness through DORA metrics.'],
  ['Governance & Compliance', 'Led ISO 27001, GDPR and Cyber Essentials accreditation. Security-first mindset: least privilege by default, continuous assessment, risk-minimised architecture.'],
  ['Culture & Mindset', 'Cultivated "no blame" environments that encourage experimentation, continuous learning and knowledge sharing. Data-driven decision-making to align engineering effort with business outcomes.'],
];

const profileBase =
  'Technical lead with a track record of scaling teams, streamlining processes, and delivering secure cloud solutions aligned with business goals.';

/* PLACEHOLDER: the Head of Engineering copy is not written yet. It starts
   as a copy of the Technical Lead text and is rewritten in its own pass. */
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
