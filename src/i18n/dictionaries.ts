export type Locale = 'en' | 'fil'

export const en = {
  nav: {
    home: 'Home',
    about: 'About',
    skills: 'Skills',
    experience: 'Experience',
    projects: 'Projects',
    certifications: 'Certifications',
    contact: 'Contact',
    resume: 'Resume',
  },
  hero: {
    greeting: "Hello, I'm",
    name: 'Jericho Jacolo',
    role: 'Senior Software Engineer',
    tagline:
      'I build web applications, backend systems, and AI-powered product features — from idea to production.',
    ctaPrimary: 'Resume',
    ctaSecondary: 'Get in Touch',
    scroll: 'Scroll to discover my journey',
    location: 'Davao del Sur, Philippines',
  },
  about: {
    title: 'About',
    eyebrow: 'Who I am',
    body: `Senior Software Engineer experienced in building web applications, backend systems, APIs, and product features. Comfortable working across frontend and backend development, debugging, performance improvement, and software delivery. Experienced in both engineering teams and freelance projects for different industries.`,
    educationLabel: 'Education',
    education: "Bachelor's Degree, Computer Science — National Taiwan University (2012–2016)",
  },
  skills: {
    title: 'Skills & Technologies',
    eyebrow: 'What I work with',
    groups: {
      frontend: 'Frontend',
      backend: 'Backend',
      development: 'Development',
      cloud: 'Cloud & Database',
      ai: 'AI Project Technologies',
      target: 'Target Stack',
    },
  },
  experience: {
    title: 'Experience',
    eyebrow: 'Career path',
    present: 'Present',
  },
  projects: {
    title: 'Projects',
    eyebrow: 'Selected work',
    viewDetails: 'Highlights',
  },
  certifications: {
    title: 'Certifications',
    eyebrow: 'Credentials',
  },
  contact: {
    title: 'Contact',
    eyebrow: "Let's build something",
    body: 'Open to full-time roles, freelance collaborations, and product partnerships. Reach out and let’s talk.',
    email: 'Email',
    linkedin: 'LinkedIn',
    location: 'Location',
  },
  footer: {
    rights: 'All rights reserved.',
    built: 'Built with React & TypeScript',
  },
  lang: {
    label: 'Language',
    en: 'EN',
    fil: 'FIL',
  },
} as const

export const fil = {
  nav: {
    home: 'Home',
    about: 'Tungkol',
    skills: 'Kasanayan',
    experience: 'Karanasan',
    projects: 'Mga Proyekto',
    certifications: 'Mga Sertipiko',
    contact: 'Makipag-ugnayan',
    resume: 'Resume',
  },
  hero: {
    greeting: 'Kumusta, ako si',
    name: 'Jericho Jacolo',
    role: 'Senior Software Engineer',
    tagline:
      'Gumagawa ako ng web applications, backend systems, at AI-powered product features — mula sa ideya hanggang production.',
    ctaPrimary: 'Resume',
    ctaSecondary: 'Makipag-ugnayan',
    scroll: 'Mag-scroll para makita ang aking journey',
    location: 'Davao del Sur, Pilipinas',
  },
  about: {
    title: 'Tungkol sa Akin',
    eyebrow: 'Sino ako',
    body: `Senior Software Engineer na may karanasan sa paggawa ng web applications, backend systems, APIs, at product features. Komportable sa frontend at backend development, debugging, performance improvement, at software delivery. May karanasan sa engineering teams at freelance projects para sa iba’t ibang industriya.`,
    educationLabel: 'Edukasyon',
    education: "Bachelor's Degree, Computer Science — National Taiwan University (2012–2016)",
  },
  skills: {
    title: 'Mga Kasanayan at Teknolohiya',
    eyebrow: 'Ginagamit kong tools',
    groups: {
      frontend: 'Frontend',
      backend: 'Backend',
      development: 'Development',
      cloud: 'Cloud at Database',
      ai: 'AI Project Technologies',
      target: 'Target Stack',
    },
  },
  experience: {
    title: 'Karanasan',
    eyebrow: 'Landas ng karera',
    present: 'Kasalukuyan',
  },
  projects: {
    title: 'Mga Proyekto',
    eyebrow: 'Piling gawa',
    viewDetails: 'Mga highlight',
  },
  certifications: {
    title: 'Mga Sertipiko',
    eyebrow: 'Kredensyal',
  },
  contact: {
    title: 'Makipag-ugnayan',
    eyebrow: 'Magtayo tayo ng bagay',
    body: 'Bukas sa full-time roles, freelance collaborations, at product partnerships. Mag-email o mag-message — usap tayo.',
    email: 'Email',
    linkedin: 'LinkedIn',
    location: 'Lokasyon',
  },
  footer: {
    rights: 'Nakalaan ang lahat ng karapatan.',
    built: 'Ginawa gamit ang React at TypeScript',
  },
  lang: {
    label: 'Wika',
    en: 'EN',
    fil: 'FIL',
  },
} as const

type DeepStringify<T> = {
  [K in keyof T]: T[K] extends string ? string : DeepStringify<T[K]>
}

export type Dictionary = DeepStringify<typeof en>

export const dictionaries: Record<Locale, Dictionary> = {
  en,
  fil,
}
