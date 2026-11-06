import { HeartHandshake, Megaphone, ShieldCheck, Users, CalendarDays } from 'lucide-react';

export const navItems = [
  { label: 'Mission', href: '#mission' },
  { label: 'Focus', href: '#focus' },
  { label: 'Our path', href: '#path' },
  { label: 'Membership', href: '#join' },
  { label: 'FAQ', href: '#faq' },
];

export const focusAreas = [
  {
    icon: Megaphone,
    eyebrow: 'Awareness',
    title: 'Make mental health easier to talk about',
    copy: 'Create approachable, teen-centered conversations that replace silence and stigma with understanding.',
    accent: 'mint',
  },
  {
    icon: Users,
    eyebrow: 'Community',
    title: 'Build a network where young people belong',
    copy: 'Bring students together around shared experiences, encouragement, and a genuine sense of connection.',
    accent: 'sage',
  },
  {
    icon: HeartHandshake,
    eyebrow: 'Advocacy',
    title: 'Turn care into student-led action',
    copy: 'Support youth voices as they shape campaigns, events, and lasting change in their communities.',
    accent: 'sun',
  },
];

export const pathwaySteps = [
  {
    number: '01',
    title: 'Listen first',
    copy: 'Create safe, stigma-free spaces where teens can share what support actually looks like for them.',
  },
  {
    number: '02',
    title: 'Grow together',
    copy: 'Connect members with shared purpose, practical awareness tools, and opportunities to give back.',
  },
  {
    number: '03',
    title: 'Turn care into change',
    copy: 'Move from conversation to community action through youth-led campaigns, projects, and events.',
  },
];

export const buildingNow = [
  {
    icon: ShieldCheck,
    label: 'Now forming',
    title: 'Core member team',
    copy: 'Recruiting young people who want to help guide the organization from the ground up.',
  },
  {
    icon: Megaphone,
    label: 'In planning',
    title: 'Awareness campaigns',
    copy: 'Developing approachable initiatives that put adolescent mental health into everyday conversation.',
  },
  {
    icon: CalendarDays,
    label: 'Coming soon',
    title: 'Events and volunteering',
    copy: 'Creating opportunities for members to participate as new projects and community events launch.',
  },
];

export const gradeOptions = [
  'Middle School',
  'Freshman',
  'Sophomore',
  'Junior',
  'Senior',
  'Other',
];

export const initialForm = {
  firstName: '',
  lastName: '',
  grade: '',
  otherGrade: '',
  location: '',
  email: '',
  phone: '',
  reason: '',
};

export const faqItems = [
  {
    question: 'Who can join Thryve Youth?',
    answer:
      'The membership form welcomes students from middle school through senior year, with an “Other” option for additional grade levels or circumstances.',
  },
  {
    question: 'What happens after I submit the form?',
    answer:
      'Thryve Youth will use your contact information to discuss membership, upcoming opportunities, and volunteering as events and initiatives take shape.',
  },
  {
    question: 'Is there a membership fee?',
    answer:
      'The current membership form does not list a fee. Please check directly with the Thryve Youth team for the latest membership details.',
  },
  {
    question: 'Where is Thryve Youth based?',
    answer:
      'The organization is youth-led and rooted in Austin, Texas, while online awareness and community-building can reach young people beyond one location.',
  },
];

const revealTransition = {
  duration: 0.75,
  ease: [0.22, 1, 0.36, 1],
};
