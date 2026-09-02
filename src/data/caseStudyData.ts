import { NavItem, TeamMember, ReferenceItem } from '../types';

export const NAV_ITEMS_MAIN: NavItem[] = [
  { id: 'home', label: 'Home', iconName: 'Home', trackTitle: 'Designing for Connection', trackSubtitle: 'Spotify Case Study' },
  { id: 'search', label: 'Search', iconName: 'Search', trackTitle: 'Search Insights', trackSubtitle: 'Spotify Design System' },
  { id: 'library', label: 'Your Library', iconName: 'Library', trackTitle: 'Case Study Archive', trackSubtitle: 'Spotify Premium' },
];

export const NAV_ITEMS_SECTIONS: NavItem[] = [
  { id: 'overview', label: 'Overview', iconName: 'LayoutGrid', category: 'CASE STUDY SECTIONS', trackTitle: 'Designing for Connection • Spotify Case Study', trackSubtitle: 'Overview & Analysis' },
  { id: 'problem', label: 'The Problem', iconName: 'AlertCircle', category: 'CASE STUDY SECTIONS', trackTitle: 'The Real-World Problem', trackSubtitle: 'Designing for Connection • Spotify Case Study' },
  { id: 'empathize', label: 'Empathize', iconName: 'Heart', category: 'CASE STUDY SECTIONS', trackTitle: 'Designing for Connection • Spotify Case Study', trackSubtitle: 'Screen 4: Empathize' },
  { id: 'define', label: 'Define', iconName: 'Target', category: 'CASE STUDY SECTIONS', trackTitle: 'Designing for Connection', trackSubtitle: 'Spotify Case Study' },
  { id: 'ideate', label: 'Ideate', iconName: 'Lightbulb', category: 'CASE STUDY SECTIONS', trackTitle: 'Designing for Connection', trackSubtitle: 'Spotify Case Study' },
  { id: 'prototype', label: 'Prototype', iconName: 'Smartphone', category: 'CASE STUDY SECTIONS', trackTitle: 'Designing for Connection', trackSubtitle: 'Spotify Case Study' },
  { id: 'test', label: 'Test & Iterate', iconName: 'ArrowLeftRight', category: 'CASE STUDY SECTIONS', trackTitle: 'Designing for Connection', trackSubtitle: 'Spotify Case Study' },
  { id: 'impact', label: 'Impact', iconName: 'TrendingUp', category: 'CASE STUDY SECTIONS', trackTitle: 'Impact & Results', trackSubtitle: 'Designing for Connection • Spotify Case Study' },
  { id: 'analysis', label: 'Critical Analysis', iconName: 'BarChart2', category: 'CASE STUDY SECTIONS', trackTitle: 'Critical Analysis', trackSubtitle: 'Designing for Connection • Spotify Case Study' },
  { id: 'learnings', label: 'Key Learnings', iconName: 'GraduationCap', category: 'CASE STUDY SECTIONS', trackTitle: 'Designing for Connection', trackSubtitle: 'Spotify Case Study' },
  { id: 'team', label: 'Team', iconName: 'Users', category: 'CASE STUDY SECTIONS', trackTitle: 'Designing for Connection', trackSubtitle: 'Spotify Case Study' },
  { id: 'references', label: 'References', iconName: 'FileText', category: 'CASE STUDY SECTIONS', trackTitle: 'Designing for Connection', trackSubtitle: 'Spotify Case Study' },
];

export const TEAM_MEMBERS: TeamMember[] = [
  {
    name: 'Neha Biju',
    uid: 'UID : U2403204',
    rolePill: 'Made For You',
    initial: 'N',
    bgColor: '#ec4899', // vibrant pink
  },
  {
    name: 'Niranjana Rakesh',
    uid: 'UID : U2403214',
    rolePill: 'Blend',
    initial: 'N',
    bgColor: '#ec4899',
  },
  {
    name: 'Nitika Ann Jacob',
    uid: 'UID : U2403217',
    rolePill: 'Sound Capsule',
    initial: 'N',
    bgColor: '#ec4899',
  },
  {
    name: 'Sreelakshmi Suresh',
    uid: 'UID : U2403283',
    rolePill: 'Jam',
    initial: 'S',
    bgColor: '#ea580c', // vibrant orange
  },
];

export const REFERENCES_DATA: ReferenceItem[] = [
  {
    title: 'Spotify Newsroom',
    description: 'Official press releases, feature announcements, and company updates regarding user experience changes.',
    url: 'newsroom.spotify.com',
    iconType: 'calendar',
  },
  {
    title: 'TechCrunch',
    description: 'Industry analysis on streaming economics, competitor moves, and market share metrics within the audio space.',
    url: 'techcrunch.com',
    iconType: 'laptop',
  },
  {
    title: 'Music Business Worldwide',
    description: 'Insights into artist payouts, licensing negotiations, and global subscriber growth trends.',
    url: 'musicbusinessworldwide.com',
    iconType: 'chart',
  },
  {
    title: 'Variety',
    description: 'Coverage on exclusive podcast deals, content strategy, and cultural impact of key playlist integrations.',
    url: 'variety.com',
    iconType: 'video',
  },
  {
    title: 'Course Document',
    description: 'Primary academic requirements, heuristics guidelines, and project constraints defined for this study.',
    url: 'Internal Resource',
    iconType: 'file',
  },
];
