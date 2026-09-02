export type SectionId = 
  | 'home'
  | 'search'
  | 'library'
  | 'overview'
  | 'problem'
  | 'empathize'
  | 'define'
  | 'ideate'
  | 'prototype'
  | 'test'
  | 'tools'
  | 'impact'
  | 'analysis'
  | 'learnings'
  | 'team'
  | 'references';

export interface NavItem {
  id: SectionId;
  label: string;
  iconName: string;
  category?: string;
  trackTitle?: string;
  trackSubtitle?: string;
  phaseNumber?: string;
}

export interface TeamMember {
  name: string;
  uid: string;
  rolePill: string;
  initial: string;
  bgColor: string;
}

export interface ReferenceItem {
  title: string;
  description: string;
  url: string;
  iconType: 'calendar' | 'laptop' | 'chart' | 'video' | 'file';
}
