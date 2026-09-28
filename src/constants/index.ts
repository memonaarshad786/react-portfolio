import type {
  TNavLink,
  TService,
  TTechnology,
  TExperience,
  TTestimonial,
  TProject,
} from '../types';

import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  threejs,
  jobit,
  tripguide,
  travel,
} from '../assets';

// Images you upload go in /public/images. See README-IMAGES.md for the list.
const img = (path: string) => `/images/${path}`;

export const navLinks: TNavLink[] = [
  {
    id: 'about',
    title: 'About',
  },
  {
    id: 'work',
    title: 'Experience',
  },
  {
    id: 'projects',
    title: 'Projects',
  },
  {
    id: 'contact',
    title: 'Contact',
  },
];

const services: TService[] = [
  {
    title: 'Full Stack Engineer',
    icon: web,
  },
  {
    title: 'Frontend (React / Next.js)',
    icon: creator,
  },
  {
    title: 'Backend (Node / NestJS / Python)',
    icon: backend,
  },
  {
    title: 'AI / LLM Features',
    icon: mobile,
  },
];

const technologies: TTechnology[] = [
  { name: 'HTML 5', icon: html },
  { name: 'CSS 3', icon: css },
  { name: 'JavaScript', icon: javascript },
  { name: 'TypeScript', icon: typescript },
  { name: 'React JS', icon: reactjs },
  { name: 'Redux Toolkit', icon: redux },
  { name: 'Tailwind CSS', icon: tailwind },
  { name: 'Node JS', icon: nodejs },
  { name: 'MongoDB', icon: mongodb },
  { name: 'Three JS', icon: threejs },
  { name: 'git', icon: git },
  { name: 'figma', icon: figma },
  { name: 'docker', icon: docker },
];

const experiences: TExperience[] = [
  {
    title: 'Software Engineer',
    companyName: 'Dunify · Lahore, Pakistan',
    icon: img('company/dunify.png'),
    iconBg: '#383E56',
    date: 'Mar 2026 - Present',
    points: [
      'Develop and maintain features for Octopus VAR, a desktop cybersecurity compliance application that checks network and server configurations against Minimum Security Baselines (MSBs) and CIS Benchmarks over SSH and WinRM.',
      'Build validation, remediation, configuration-change detection, and compliance reporting features using React.js, NestJS, Node.js, Python, and PostgreSQL.',
      'Develop AI-based features using LLMs that convert security benchmarks into structured rules, with data validation and export to Excel, reaching 92% rule-extraction accuracy across 150+ benchmark rules.',
      'Reduced LLM hallucinations by 40% using RAG with ChromaDB, schema validation, and prompt constraints, and managed context size (about 4,000 tokens per request) by chunking long benchmark documents.',
    ],
  },
  {
    title: 'MERN Stack Developer',
    companyName: 'Offneo · Lahore, Pakistan',
    icon: img('company/offneo.png'),
    iconBg: '#E6DEDD',
    date: 'Aug 2025 - Mar 2026',
    points: [
      'Developed full stack features for the MegaMarket and Attendix platforms in a 2-person team using React.js, Node.js, Express.js, MongoDB, TypeScript, and REST APIs.',
      'Built React user interfaces for 4 connected e-commerce portals, creating shared, reusable components that kept the design consistent across all portals.',
      'Integrated the front-end applications with a Java REST API and SQL database to keep customer, product, and order data in sync across 4 platforms, including guest checkout and order tracking.',
      'Built Attendix back-end APIs and location-based features, including a 125-meter office geofence and automatic employee logout after 15–20 minutes outside the assigned location without a recorded break.',
    ],
  },
  {
    title: 'Web Developer',
    companyName: 'Codings First · Bahawalpur, Pakistan',
    // Temporary logo. When you find the real one, save it as codings-first.png and change this to .png
    icon: img('company/codings-first.svg'),
    iconBg: '#383E56',
    date: 'Jul 2023 - Mar 2025',
    points: [
      'Developed approximately 10%–70% of the user interface for a Tanzanian automotive management system used in multiple countries, covering branch-level asset and operations management.',
      'Implemented multi-branch features in React.js that let organizations manage showroom assets, daily operations, and branch-specific data, integrated with a .NET back end.',
      'Built dashboards and charts for profit, loss, and operational performance, giving management clear reporting on business data.',
      'Updated key features based on user requirements and feedback, improving usability of frequently used branch and management screens.',
    ],
  },
];

const testimonials: TTestimonial[] = [];

const projects: TProject[] = [
  {
    name: 'Octopus VAR',
    description:
      'Desktop cybersecurity compliance app that connects to devices over SSH and WinRM and validates configurations against MSBs and CIS Benchmarks. Includes device discovery, remediation, change detection, Executive/Detailed reports, and an AI remediation impact assessment that cut malformed model outputs by 60% with responses under 5s. 94 test suites, 72.45% front-end coverage.',
    tags: [
      { name: 'react', color: 'blue-text-gradient' },
      { name: 'nestjs', color: 'green-text-gradient' },
      { name: 'python', color: 'pink-text-gradient' },
      { name: 'fastapi', color: 'blue-text-gradient' },
      { name: 'postgresql', color: 'green-text-gradient' },
      { name: 'ollama', color: 'pink-text-gradient' },
      { name: 'chromadb', color: 'blue-text-gradient' },
      { name: 'docker', color: 'green-text-gradient' },
    ],
    image: img('projects/octopus-var.png'),
    liveLink: 'https://octopus-var.com',
  },
  {
    name: 'CarOps.io',
    description:
      'Multi-branch automotive management system used in multiple countries. Built responsive dashboards, reusable components, and profit/loss and operational charts, integrated with a .NET back end to manage branch-specific assets across showroom locations.',
    tags: [
      { name: 'react', color: 'blue-text-gradient' },
      { name: 'typescript', color: 'green-text-gradient' },
      { name: 'tailwind', color: 'pink-text-gradient' },
      { name: 'dotnet-api', color: 'blue-text-gradient' },
    ],
    image: img('projects/carops.png'),
    liveLink: 'https://carops.io',
  },
  {
    name: 'MegaMarket',
    description:
      'Multi-portal e-commerce platform where users search, order, and manage shopping from various providers: customer website, mobile app, seller dashboard, and admin portal. Shared UI components keep all 4 interfaces consistent, with customer, product, and order data synced through a Java REST API, including guest checkout and order tracking.',
    tags: [
      { name: 'react', color: 'blue-text-gradient' },
      { name: 'tailwind', color: 'pink-text-gradient' },
      { name: 'nodejs', color: 'green-text-gradient' },
      { name: 'express', color: 'pink-text-gradient' },
      { name: 'mongodb', color: 'blue-text-gradient' },
      { name: 'java-api', color: 'green-text-gradient' },
    ],
    image: img('projects/megamarket.png'),
    liveLink: 'https://megamarket.pk',
  },
  {
    name: 'Attendix',
    description:
      'Workforce attendance platform. Built back-end APIs and location-based features, including a 125-meter office geofence and automatic logout after 15–20 minutes outside the assigned location without a recorded break.',
    tags: [
      { name: 'nodejs', color: 'blue-text-gradient' },
      { name: 'express', color: 'green-text-gradient' },
      { name: 'mongodb', color: 'pink-text-gradient' },
      { name: 'geofencing', color: 'blue-text-gradient' },
    ],
    image: img('projects/attendix.svg'),
  },
  {
    name: 'Seller UI',
    description:
      'Web application that enables users to manage their product listings, view sales analytics, and communicate with potential buyers.',
    tags: [
      { name: 'react', color: 'blue-text-gradient' },
      { name: 'restapi', color: 'green-text-gradient' },
      { name: 'scss', color: 'pink-text-gradient' },
    ],
    image: jobit,
    liveLink: 'https://seller.megamarket.pk/',
  },
  {
    name: 'Restaurant Website',
    description:
      'A comprehensive restaurant website that allows users to browse menus, make reservations, and order food online.',
    tags: [
      { name: 'nextjs', color: 'blue-text-gradient' },
      { name: 'React Js', color: 'green-text-gradient' },
      { name: 'css', color: 'pink-text-gradient' },
    ],
    image: tripguide,
  },
  {
    name: 'Travelocity',
    description:
      'A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.',
    tags: [
      { name: 'nextjs', color: 'blue-text-gradient' },
      { name: 'React', color: 'green-text-gradient' },
      { name: 'css', color: 'pink-text-gradient' },
    ],
    image: travel,
  },
];

export { services, technologies, experiences, testimonials, projects };
