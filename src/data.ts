export type GlyphName =
  | 'consult'
  | 'cloud'
  | 'shield'
  | 'code'
  | 'chart'
  | 'support'
  | 'search'
  | 'map'
  | 'pen'
  | 'layers'
  | 'pulse'

export type Service = {
  title: string
  text: string
  icon: GlyphName
}

export type Step = {
  title: string
  text: string
  icon: GlyphName
  bg: string
  tint: string
  ink: string
}

export type Project = {
  id: string
  title: string
  field: string
  theme: string
  summary: string
  outcome: string
  bars: number[]
}

export type Note = {
  id: string
  date: string
  title: string
  excerpt: string
  body: string
}

export type Quote = {
  name: string
  role: string
  text: string
  photo?: string
}

export type Office = {
  label: string
  lines: [string, string]
  mapHref: string
}

export type Phone = {
  label: string
  display: string
  href: string
}

export const services: Service[] = [
  {
    title: 'Permanent Staffing',
    text: 'Long-term hires for core teams. We cover attraction, benchmarking, background checks, and a retention view before anyone starts.',
    icon: 'layers',
  },
  {
    title: 'Senior Search',
    text: 'Discreet headhunting for senior technical and leadership roles, with technical evaluation and confidential introductions.',
    icon: 'consult',
  },
  {
    title: 'Information Technology',
    text: 'Software, SAP, Oracle, data, cloud, cybersecurity, and infrastructure specialists from active and passive talent pools.',
    icon: 'code',
  },
  {
    title: 'Engineering',
    text: 'Mechanical and electrical engineers, automation specialists, project managers, CAD designers, and quality assurance.',
    icon: 'pulse',
  },
  {
    title: 'Healthcare',
    text: 'Clinical and non-clinical admins, medical records, allied health, compliance, and operations staff.',
    icon: 'shield',
  },
  {
    title: 'Finance & Operations',
    text: 'Finance, administration, and customer service roles, plus supply chain, procurement, legal, and marketing when you need them.',
    icon: 'chart',
  },
]

export const steps: Step[] = [
  {
    title: 'Source',
    text: 'Targeted headhunting across UK databases, passive networks, and international talent pools.',
    icon: 'search',
    bg: '#e5f0ff',
    tint: '#c5dcff',
    ink: '#1d4f91',
  },
  {
    title: 'Screen',
    text: 'Interviews, qualification audits, right-to-work checks, and a review of career progression.',
    icon: 'shield',
    bg: '#ffe7cc',
    tint: '#ffd09a',
    ink: '#9a4d09',
  },
  {
    title: 'Assess',
    text: 'Hard skills, culture fit, leadership, and whether the person is likely to stay.',
    icon: 'pen',
    bg: '#ece3ff',
    tint: '#d7c8ff',
    ink: '#5b3d9e',
  },
  {
    title: 'Shortlist',
    text: 'Three to five profiles, with consultant notes, interview times, and salary guidance.',
    icon: 'layers',
    bg: '#e3f7ea',
    tint: '#bfe8cc',
    ink: '#1d6b3a',
  },
  {
    title: 'Support',
    text: 'Onboarding and retention support after the placement, so the hire settles in.',
    icon: 'support',
    bg: '#fff3c9',
    tint: '#ffe49a',
    ink: '#8a6408',
  },
]

export const projects: Project[] = [
  {
    id: 'it',
    title: 'Information Technology',
    field: 'IT',
    theme: 'retail',
    summary:
      'Developers, ERP consultants, data specialists, and infrastructure engineers for product and enterprise teams.',
    outcome:
      'Roles include software engineers, SAP and Oracle consultants, data engineers and analysts, business analysts, cloud and DevOps, cybersecurity, AI and machine learning, full stack, database administrators, IT support, and network engineers.',
    bars: [46, 72, 58, 90, 64, 80],
  },
  {
    id: 'engineering',
    title: 'Engineering',
    field: 'Engineering',
    theme: 'field',
    summary: 'Technical hires for design, delivery, and quality across engineering teams.',
    outcome:
      'Roles include mechanical and electrical engineers, systems and automation specialists, project managers, CAD designers, and quality assurance engineers.',
    bars: [70, 55, 88, 62, 76, 50],
  },
  {
    id: 'healthcare',
    title: 'Healthcare',
    field: 'Healthcare',
    theme: 'clinic',
    summary: 'Clinical support and operational staff for healthcare organisations.',
    outcome:
      'Roles include clinical and non-clinical administrators, medical records managers, allied health professionals, healthcare compliance specialists, and operations staff.',
    bars: [60, 48, 84, 70, 92, 66],
  },
  {
    id: 'finance',
    title: 'Finance & Accounting',
    field: 'Finance',
    theme: 'finance',
    summary: 'Controllers, accountants, and the people who keep payroll and billing moving.',
    outcome:
      'Roles include financial controllers and analysts, senior management accountants, audit and tax specialists, payroll administrators, and billing officers.',
    bars: [38, 64, 52, 78, 96, 70],
  },
  {
    id: 'admin',
    title: 'Administration',
    field: 'Administration',
    theme: 'people',
    summary: 'Office, people, and executive support for teams that need the day to run cleanly.',
    outcome:
      'Roles include executive assistants, office and operations managers, HR and people operations, document controllers, and reception specialists.',
    bars: [52, 80, 66, 74, 58, 86],
  },
  {
    id: 'service',
    title: 'Customer Service',
    field: 'Customer Service',
    theme: 'learn',
    summary: 'Client-facing leads and support specialists for ongoing customer relationships.',
    outcome:
      'Roles include customer success managers, call centre and helpdesk leads, client relationship leads, technical support specialists, and after-sales coordinators. Custom briefs can also cover supply chain, procurement, legal, and marketing.',
    bars: [64, 44, 78, 90, 60, 72],
  },
]

export const notes: Note[] = [
  {
    id: 'mission',
    date: 'Our mission',
    title: 'The legacy is the team that stays',
    excerpt: 'Success is the long-term result of the teams we help build, not the speed of a single hire.',
    body: 'We supply high-performing people to businesses and give professionals careers that move them forward. Screening is rigorous, fees are explained up front, and support continues through onboarding and retention.',
  },
  {
    id: 'model',
    date: 'How we work',
    title: 'An extension of your hiring team',
    excerpt: 'Dedicated recruiters learn the culture, the technical bar, and the roles you will need next.',
    body: 'Recruiters represent your brand to candidates. Strong profiles are advocated for, so more of them reach interview. As demand grows, we keep a bench ready instead of starting the search from zero.',
  },
  {
    id: 'careers',
    date: 'Candidates',
    title: 'Register for current and upcoming roles',
    excerpt: 'A CV puts you in front of the Luton recruitment team. Candidate placement is free.',
    body: 'Send a PDF or Word CV, up to 10MB, for IT, engineering, healthcare, finance, administration, customer support, or a future senior role. Profiles are reviewed within 24 to 48 hours and routed to Legacyitsoulutions@outlook.com.',
  },
]

export const sideQuotes: Quote[] = [
  {
    name: 'Our mission',
    role: 'Legacy IT Solutions',
    text: 'To empower businesses by supplying high-performing human capital while providing professionals with transformative career opportunities.',
  },
  {
    name: 'Where we deliver',
    role: 'United Kingdom and international',
    text: 'Headquartered in Luton, with offshore and nearshore sourcing for clients and talent networks beyond the UK.',
  },
]

export const quotes: Quote[] = [
  {
    name: 'Dedicated recruiters',
    role: 'Your brand, represented properly',
    text: 'Sourcing specialists who speak for your company when they approach people who are not actively looking.',
  },
  {
    name: 'Candidate advocacy',
    role: 'Higher interview conversion',
    text: 'We promote the strongest profiles so hiring managers see why a person is worth the conversation.',
  },
  {
    name: 'Custom pipelines',
    role: 'A bench, not a one-off search',
    text: 'Talent pools built around your stack and your timeline, ready as project demand expands.',
  },
]

export const contact = {
  phones: [
    { label: 'UK / WhatsApp', display: '+44 7466 929441', href: 'tel:+447466929441' },
    { label: 'India / WhatsApp', display: '+91 90529 39313', href: 'tel:+919052939313' },
  ] satisfies Phone[],
  whatsappHref: 'https://wa.me/447466929441',
  email: 'hr@legacyituk.in',
  emailHref: 'mailto:hr@legacyituk.in',
  careersEmail: 'Legacyitsoulutions@outlook.com',
  careersEmailHref: 'mailto:Legacyitsoulutions@outlook.com',
  offices: [
    {
      label: 'United Kingdom (HQ)',
      lines: ['Arthur Street, Luton, LU1 3SG', 'Bedfordshire, United Kingdom'],
      mapHref: 'https://www.google.com/maps/search/?api=1&query=Arthur%20Street%20Luton%20LU1%203SG',
    },
    {
      label: 'India office',
      lines: ['Manikanta Nilayam, Bustand Backside', 'Nandivelugu Road, Guntur – 522001'],
      mapHref:
        'https://www.google.com/maps/search/?api=1&query=Manikanta%20Nilayam%20Nandivelugu%20Road%20Guntur%20522001',
    },
  ] satisfies Office[],
  hours: [
    { days: 'Monday to Friday', note: '9:00 AM – 6:00 PM BST' },
    { days: 'Saturday', note: 'Closed' },
    { days: 'Sunday', note: 'Closed' },
  ],
}

export const clients = ['IT', 'Engineering', 'Healthcare', 'Finance', 'Administration', 'Customer Service']

export const stack = [
  'Software Engineers',
  'SAP & Oracle',
  'Data & Analytics',
  'Cloud & DevOps',
  'Cybersecurity',
  'Engineering',
  'Healthcare',
  'Finance',
  'Administration',
  'Customer Service',
]
