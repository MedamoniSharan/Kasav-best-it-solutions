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
  photo: string
}

export const services: Service[] = [
  {
    title: 'IT Consulting',
    text: 'We look at the tools you already pay for and the work that still lives in spreadsheets, then say what to keep, fix, or retire.',
    icon: 'consult',
  },
  {
    title: 'Cloud Solutions',
    text: 'Mail, files, and apps moved onto a cloud your own staff can administer, with the cutover and the first months of care included.',
    icon: 'cloud',
  },
  {
    title: 'Cyber Security',
    text: 'Accounts, backups, and the paths between offices. We close the obvious gaps and leave a routine your team can keep.',
    icon: 'shield',
  },
  {
    title: 'Software Development',
    text: 'Custom systems for the jobs packaged tools keep missing: bookings, shop-floor flow, customer portals, and internal desks.',
    icon: 'code',
  },
  {
    title: 'Data & Analytics',
    text: 'The numbers you already collect, arranged so a manager can see what changed this week without asking for another export.',
    icon: 'chart',
  },
  {
    title: 'Managed Support',
    text: 'A named team for the questions, the outages, and the updates. You get a person who knows your setup, not a fresh ticket each time.',
    icon: 'support',
  },
]

export const steps: Step[] = [
  {
    title: 'Discover',
    text: 'We sit with the people who do the work and map how it actually runs.',
    icon: 'search',
    bg: '#e5f0ff',
    tint: '#c5dcff',
    ink: '#1d4f91',
  },
  {
    title: 'Plan',
    text: 'Scope, timeline, and stack are agreed before anyone starts building.',
    icon: 'map',
    bg: '#ffe7cc',
    tint: '#ffd09a',
    ink: '#9a4d09',
  },
  {
    title: 'Design',
    text: 'Screens and flows your staff can follow on the first Monday, not after a manual.',
    icon: 'pen',
    bg: '#ece3ff',
    tint: '#d7c8ff',
    ink: '#5b3d9e',
  },
  {
    title: 'Build',
    text: 'Software, cloud, and integrations shipped in short loops you can see.',
    icon: 'layers',
    bg: '#e3f7ea',
    tint: '#bfe8cc',
    ink: '#1d6b3a',
  },
  {
    title: 'Support',
    text: 'We stay after launch and keep the system healthy as the work changes.',
    icon: 'pulse',
    bg: '#fff3c9',
    tint: '#ffe49a',
    ink: '#8a6408',
  },
]

export const projects: Project[] = [
  {
    id: 'retail',
    title: 'Retail operations hub',
    field: 'Commerce',
    theme: 'retail',
    summary:
      'A single desk for store orders, stock, and the exceptions that used to bounce between WhatsApp and three spreadsheets.',
    outcome: 'Store leads check one screen at open and close. The evening stock call got shorter because the gaps are already listed.',
    bars: [46, 72, 58, 90, 64, 80],
  },
  {
    id: 'clinic',
    title: 'Clinic patient portal',
    field: 'Healthcare',
    theme: 'clinic',
    summary:
      'Appointments, reports, and follow-ups in one place for a clinic that had outgrown its front-desk register.',
    outcome: 'Front desk spends the morning on patients, not on finding yesterday’s file. Reminders go out without a second tool.',
    bars: [60, 48, 84, 70, 92, 66],
  },
  {
    id: 'finance',
    title: 'Finance control room',
    field: 'Finance',
    theme: 'finance',
    summary:
      'A live view of invoices, collections, and the accounts that need a person today, built for a team tired of month-end surprises.',
    outcome: 'Collections see who to call before the week starts. Month-end is a check, not a reconstruction.',
    bars: [38, 64, 52, 78, 96, 70],
  },
  {
    id: 'field',
    title: 'Field service board',
    field: 'Logistics',
    theme: 'field',
    summary:
      'Jobs, vans, and parts for a crew that was dispatching from phone calls and a whiteboard in the depot.',
    outcome: 'Dispatchers see which jobs are late while there is still time to move them. Parts requests stop arriving as photos.',
    bars: [70, 55, 88, 62, 76, 50],
  },
  {
    id: 'people',
    title: 'People platform',
    field: 'Workplace',
    theme: 'people',
    summary:
      'Leave, onboarding, and the documents a growing team was keeping in inboxes and shared drives.',
    outcome: 'New hires get access on day one. HR stops chasing the same form from three different folders.',
    bars: [52, 80, 66, 74, 58, 86],
  },
  {
    id: 'learn',
    title: 'Learning workspace',
    field: 'Education',
    theme: 'learn',
    summary:
      'Courses, attendance, and progress for a training team that had been teaching out of slide decks and chat groups.',
    outcome: 'Trainers see who is behind before the batch ends. Learners have one place for the material and the questions.',
    bars: [64, 44, 78, 90, 60, 72],
  },
]

export const notes: Note[] = [
  {
    id: 'cutover',
    date: '12 Oct 2026',
    title: 'Modernize without a weekend cutover',
    excerpt: 'Most teams do not fail because the new system is wrong. They fail because Monday still has to run.',
    body: 'We move one workflow at a time and leave the old path up until the new one has a week of real use behind it. Staff keep a way to finish today’s work. The switch is a Tuesday morning, not a locked office and a hope.',
  },
  {
    id: 'support',
    date: '02 Sep 2026',
    title: 'What managed support should cover',
    excerpt: 'A retainer is only useful if someone already knows your accounts, your vendors, and your odd exceptions.',
    body: 'Ask who answers at 9am, what “urgent” means, and whether backups are tested or only scheduled. The useful version is a named person, a list of systems, and a monthly note on what changed. Anything vaguer is a queue.',
  },
  {
    id: 'cloud',
    date: '18 Aug 2026',
    title: 'Choosing a cloud path for a 40-person team',
    excerpt: 'You rarely need a new platform. You need mail, files, and two line-of-business apps to live somewhere you can administer.',
    body: 'Start from the jobs: who shares what, who must work from outside the office, and which tool is the system of record. Then pick the smallest cloud move that makes those jobs dull. Dull is the goal.',
  },
]

export const sideQuotes: Quote[] = [
  {
    name: 'Noah Ellis',
    role: 'Operations, Northwind',
    text: 'They sat with the floor before they opened a design file. The first version already matched the morning routine.',
    photo: '/images/team-2.jpg',
  },
  {
    name: 'Alan Brooks',
    role: 'Director, Helio Finance',
    text: 'Scope and price were written down before the build. We were not guessing what the next month would cost.',
    photo: '/images/avatar-3.jpg',
  },
]

export const quotes: Quote[] = [
  {
    name: 'Noah Ellis',
    role: 'Operations, Northwind',
    text: 'They replaced three tools we were fighting with one system the floor actually opens in the morning.',
    photo: '/images/team-2.jpg',
  },
  {
    name: 'Sofia Marin',
    role: 'Founder, Orbit Health',
    text: 'The portal went live without a weekend shutdown. Front desk still had a way to book people on day one.',
    photo: '/images/avatar-2.jpg',
  },
  {
    name: 'Alan Brooks',
    role: 'Director, Helio Finance',
    text: 'We finally see collections before the week starts. Month-end is a check now, not a reconstruction.',
    photo: '/images/avatar-3.jpg',
  },
]

export const contact = {
  phoneDisplay: '+91 93911 44797',
  phoneHref: 'tel:+919391144797',
  whatsappHref: 'https://wa.me/919391144797',
  email: 'hr@kasvibes.com',
  emailHref: 'mailto:hr@kasvibes.com',
  address: ['aVance Business Hub, HITEC City', 'Hyderabad, Telangana 500081'],
  mapHref: 'https://www.google.com/maps/search/?api=1&query=aVance%20Business%20Hub%20HITEC%20City%20Hyderabad%20500081',
  hours: [
    { days: 'Monday to Friday', note: 'Open' },
    { days: 'Saturday', note: 'Week off' },
    { days: 'Sunday', note: 'Week off' },
  ],
}

export const clients = ['Northwind', 'Apex', 'Lumen', 'Orbit', 'Vanta', 'Helix', 'Nimbus']

export const stack = [
  { name: 'React', logo: '/logos/react.svg' },
  { name: 'TypeScript', logo: '/logos/typescript.svg' },
  { name: 'Node.js', logo: '/logos/nodejs.svg' },
  { name: 'Python', logo: '/logos/python.svg' },
  { name: 'AWS', logo: '/logos/aws.svg' },
  { name: 'Azure', logo: '/logos/azure.svg' },
  { name: 'Docker', logo: '/logos/docker.svg' },
  { name: 'Postgres', logo: '/logos/postgres.svg' },
]
