export const profile = {
  name: 'Jericho Jacolo',
  email: 'jeejayjacolo@gmail.com',
  linkedin: 'https://linkedin.com/in/jericho-jacolo',
  location: {
    en: 'Davao del Sur, Davao Region, Philippines',
    fil: 'Davao del Sur, Rehiyon ng Davao, Pilipinas',
  },
  resumePath: '/Jericho-Jacolo-Resume.pdf',
}

export const skillGroups = {
  frontend: ['TypeScript', 'JavaScript', 'React', 'HTML', 'CSS', 'Responsive Web Design'],
  backend: ['Python', 'FastAPI', 'Java', 'Spring Boot', 'REST APIs', 'Ruby on Rails', 'NestJS', 'Web Services'],
  development: ['API Integration', 'Debugging', 'Performance Optimization', 'Agile'],
  cloud: ['AWS', 'Database Development', 'SQL', 'PostgreSQL', 'Docker', 'Kubernetes'],
  ai: ['LLM APIs', 'RAG', 'AI Agents', 'Embeddings', 'Vector Search', 'Prompt Workflows'],
  target: ['TypeScript', 'React', 'Python/FastAPI', 'Java/Spring Boot', 'PostgreSQL', 'AWS', 'Docker', 'Kubernetes'],
} as const

export type ExperienceItem = {
  id: string
  company: string
  role: { en: string; fil: string }
  period: { en: string; fil: string }
  location: { en: string; fil: string }
  points: { en: string[]; fil: string[] }
}

export const experience: ExperienceItem[] = [
  {
    id: 'evangelist',
    company: 'Evangelist Apps',
    role: {
      en: 'Senior Software Engineer',
      fil: 'Senior Software Engineer',
    },
    period: { en: '08/2024 – Present', fil: '08/2024 – Kasalukuyan' },
    location: { en: 'Remote', fil: 'Remote' },
    points: {
      en: [
        'Build web application features for client and product projects.',
        'Develop backend APIs and connect them with frontend applications.',
        'Fix application bugs and improve slow or complex features.',
        'Work with product teams to turn ideas into working software.',
        'Review existing code and make applications easier to maintain.',
        'Support testing and production releases.',
      ],
      fil: [
        'Gumagawa ng web application features para sa client at product projects.',
        'Nagde-develop ng backend APIs at kinokonekta sa frontend applications.',
        'Nag-aayos ng bugs at nagpapabilis ng mabagal o komplikadong features.',
        'Nakikipagtulungan sa product teams para gawing software ang mga ideya.',
        'Nagrereview ng code para mas madaling i-maintain ang applications.',
        'Sumusuporta sa testing at production releases.',
      ],
    },
  },
  {
    id: 'freelance',
    company: 'Freelancer',
    role: {
      en: 'Software Engineer',
      fil: 'Software Engineer',
    },
    period: { en: '05/2020 – 08/2024', fil: '05/2020 – 08/2024' },
    location: { en: 'Remote', fil: 'Remote' },
    points: {
      en: [
        'Built web applications and product features for different clients.',
        'Worked on both frontend and backend development.',
        'Created APIs and connected applications with external services.',
        'Fixed bugs and improved application performance.',
        'Managed project priorities and delivered work directly to clients.',
        'Took projects from early ideas through development and delivery.',
      ],
      fil: [
        'Gumawa ng web applications at product features para sa iba’t ibang clients.',
        'Nagtrabaho sa frontend at backend development.',
        'Gumawa ng APIs at ikinonekta ang applications sa external services.',
        'Nag-ayos ng bugs at pinahusay ang performance ng applications.',
        'Namahala ng project priorities at direktang nag-deliver sa clients.',
        'Dinadala ang projects mula sa ideya hanggang development at delivery.',
      ],
    },
  },
  {
    id: 'titansoft',
    company: 'Titansoft Pte Ltd',
    role: {
      en: 'Software Engineer',
      fil: 'Software Engineer',
    },
    period: { en: '10/2018 – 05/2020', fil: '10/2018 – 05/2020' },
    location: { en: 'Remote', fil: 'Remote' },
    points: {
      en: [
        'Developed and maintained web application features.',
        'Worked on backend services and application APIs.',
        'Fixed production issues and improved application performance.',
        'Worked with engineers and product teams on software releases.',
        'Helped improve existing code and application reliability.',
        'Supported testing, debugging, and software delivery.',
      ],
      fil: [
        'Nag-develop at nag-maintain ng web application features.',
        'Nagtrabaho sa backend services at application APIs.',
        'Nag-ayos ng production issues at pinahusay ang performance.',
        'Nakipagtulungan sa engineers at product teams sa software releases.',
        'Tumulong magpahusay ng existing code at reliability ng application.',
        'Sumuporta sa testing, debugging, at software delivery.',
      ],
    },
  },
]

export type ProjectItem = {
  id: string
  title: { en: string; fil: string }
  description: { en: string; fil: string }
  highlights: { en: string[]; fil: string[] }
  stack: string[]
  image: string
  imageAlt: { en: string; fil: string }
}

/** Project imagery sourced from Unsplash searches tailored to career history. */
export const projects: ProjectItem[] = [
  {
    id: 'fullstack',
    title: {
      en: 'Modern Full Stack Web Application',
      fil: 'Modern Full Stack Web Application',
    },
    description: {
      en: 'End-to-end product built with React and TypeScript on the frontend, FastAPI services, PostgreSQL storage, and AWS deployment — mirroring the delivery work across Evangelist Apps and freelance engagements.',
      fil: 'End-to-end product na may React at TypeScript sa frontend, FastAPI services, PostgreSQL storage, at AWS deployment — katulad ng delivery work sa Evangelist Apps at freelance projects.',
    },
    highlights: {
      en: [
        'Built a frontend using React and TypeScript.',
        'Created REST APIs using Python and FastAPI.',
        'Stored application data in PostgreSQL.',
        'Containerized services using Docker.',
        'Deployed application services on AWS.',
      ],
      fil: [
        'Gumawa ng frontend gamit ang React at TypeScript.',
        'Gumawa ng REST APIs gamit ang Python at FastAPI.',
        'Ini-store ang data sa PostgreSQL.',
        'Na-containerize ang services gamit ang Docker.',
        'Na-deploy ang services sa AWS.',
      ],
    },
    stack: ['React', 'TypeScript', 'Python', 'FastAPI', 'PostgreSQL', 'Docker', 'AWS'],
    image:
      'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1400&q=80',
    imageAlt: {
      en: 'Analytics dashboard on a laptop representing a full-stack web product',
      fil: 'Analytics dashboard sa laptop na kumakatawan sa full-stack web product',
    },
  },
  {
    id: 'java-backend',
    title: {
      en: 'Java Backend Service',
      fil: 'Java Backend Service',
    },
    description: {
      en: 'Production-minded Spring Boot APIs with validation, PostgreSQL persistence, Docker packaging, and Kubernetes readiness — aligned with backend and release work at Titansoft and later senior roles.',
      fil: 'Production-minded Spring Boot APIs na may validation, PostgreSQL, Docker packaging, at Kubernetes readiness — kaugnay ng backend at release work sa Titansoft at mga susunod na senior roles.',
    },
    highlights: {
      en: [
        'Created backend APIs using Java and Spring Boot.',
        'Connected services with a PostgreSQL database.',
        'Added API validation and error handling.',
        'Packaged the service with Docker.',
        'Prepared the application for deployment with Kubernetes.',
      ],
      fil: [
        'Gumawa ng backend APIs gamit ang Java at Spring Boot.',
        'Ikinonekta ang services sa PostgreSQL database.',
        'Nagdagdag ng API validation at error handling.',
        'Na-package ang service gamit ang Docker.',
        'Inihanda ang application para sa Kubernetes deployment.',
      ],
    },
    stack: ['Java', 'Spring Boot', 'PostgreSQL', 'Docker', 'Kubernetes'],
    image:
      'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=1400&q=80',
    imageAlt: {
      en: 'Server infrastructure representing Java backend and cloud-native services',
      fil: 'Server infrastructure na kumakatawan sa Java backend at cloud-native services',
    },
  },
  {
    id: 'ai-rag',
    title: {
      en: 'AI Agent & RAG Workflows',
      fil: 'AI Agent at RAG Workflows',
    },
    description: {
      en: 'Applied LLM APIs, embeddings, vector search, and prompt workflows to ship retrieval-augmented features and lightweight AI agents for product teams.',
      fil: 'Ginamit ang LLM APIs, embeddings, vector search, at prompt workflows para mag-ship ng retrieval-augmented features at lightweight AI agents para sa product teams.',
    },
    highlights: {
      en: [
        'Integrated LLM APIs into product feature flows.',
        'Designed RAG pipelines with embeddings and vector search.',
        'Built prompt workflows for reliable agent responses.',
        'Focused on practical AI delivery, not demos alone.',
      ],
      fil: [
        'Ini-integrate ang LLM APIs sa product feature flows.',
        'Nag-design ng RAG pipelines gamit ang embeddings at vector search.',
        'Gumawa ng prompt workflows para sa maaasahang agent responses.',
        'Nakatuon sa practical AI delivery, hindi lang demos.',
      ],
    },
    stack: ['LLM APIs', 'RAG', 'Embeddings', 'Vector Search', 'TypeScript', 'Python'],
    image:
      'https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=1400&q=80',
    imageAlt: {
      en: 'Abstract AI visualization representing RAG and agent workflows',
      fil: 'Abstract AI visualization na kumakatawan sa RAG at agent workflows',
    },
  },
  {
    id: 'client-platforms',
    title: {
      en: 'Multi-Client Product Platforms',
      fil: 'Multi-Client Product Platforms',
    },
    description: {
      en: 'Freelance and product delivery across industries — shipping responsive UIs, API integrations, and performance fixes from discovery through release.',
      fil: 'Freelance at product delivery sa iba’t ibang industriya — pag-ship ng responsive UIs, API integrations, at performance fixes mula discovery hanggang release.',
    },
    highlights: {
      en: [
        'Delivered web apps and features for diverse clients.',
        'Connected products to external services via APIs.',
        'Improved slow paths and hardened reliability.',
        'Owned priorities from early ideas to handoff.',
      ],
      fil: [
        'Nag-deliver ng web apps at features para sa iba’t ibang clients.',
        'Ikinonekta ang products sa external services sa pamamagitan ng APIs.',
        'Pinabilis ang mabagal na paths at pinatibay ang reliability.',
        'Hinawakan ang priorities mula sa ideya hanggang handoff.',
      ],
    },
    stack: ['React', 'TypeScript', 'REST APIs', 'Agile', 'Performance'],
    image:
      'https://images.unsplash.com/photo-1551650975-87deedd944c3?auto=format&fit=crop&w=1400&q=80',
    imageAlt: {
      en: 'Mobile and web product UI representing multi-client platform work',
      fil: 'Mobile at web product UI na kumakatawan sa multi-client platform work',
    },
  },
]

export const certifications = [
  {
    id: 'python',
    title: { en: 'Python Skill Certification', fil: 'Python Skill Certification' },
  },
  {
    id: 'java-ee',
    title: {
      en: 'Oracle Certified Professional, Java EE 5 Web Services Developer (OCP)',
      fil: 'Oracle Certified Professional, Java EE 5 Web Services Developer (OCP)',
    },
  },
  {
    id: 'aws-dbs',
    title: {
      en: 'AWS Certified Database – Specialty (DBS-C01)',
      fil: 'AWS Certified Database – Specialty (DBS-C01)',
    },
  },
  {
    id: 'seo',
    title: { en: 'SEO Certification', fil: 'SEO Certification' },
  },
]
