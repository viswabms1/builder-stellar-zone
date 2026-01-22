/**
 * Shared code between client and server
 * Useful to share types between client and server
 * and/or small pure JS functions that can be used on both client and server
 */

/**
 * Example response type for /api/demo
 */
export interface DemoResponse {
  message: string;
}

/**
 * Faculty entry base type
 */
export interface FacultyEntry {}

/**
 * Faculty directory type
 */
export interface FacultyDirectory {}

/**
 * ============================================
 * STRAPI CONTENT TYPES
 * ============================================
 */

// Hero Section Component
export interface HeroSection {
  id: string;
  image: StrapiMediaFile;
  heading: string;
  subtitle: string;
  description: string;
  badgeIcon: string; // 'compass' | 'target' | 'eye' | etc
  badgeText: string;
}

// Vision & Mission Block
export interface VisionMissionBlock {
  __component: 'vision-mission.vision-mission';
  id: string;
  vision_title: string;
  vision_description: string;
  vision_icon: string;
  mission_title: string;
  mission_description: string;
  mission_icon: string;
}

// Core Value
export interface CoreValue {
  id: string;
  icon: string; // 'lightbulb' | 'award' | 'target' | 'heart'
  title: string;
  description: string;
}

// Core Values Block
export interface CoreValuesBlock {
  __component: 'core-values.core-values';
  id: string;
  title: string;
  description: string;
  values: CoreValue[];
}

// Action Items Block
export interface ActionItemsBlock {
  __component: 'action-items.action-items';
  id: string;
  title: string;
  items: string[];
}

// Button
export interface ButtonData {
  label: string;
  url: string;
  type: 'primary' | 'secondary';
}

// CTA Section Block
export interface CTABlock {
  __component: 'cta.cta-section';
  id: string;
  title: string;
  description: string;
  primaryButton: ButtonData;
  secondaryButton?: ButtonData;
}

// SEO Metadata
export interface SEOMetadata {
  metaTitle: string;
  metaDescription: string;
  keywords: string;
  ogImage: StrapiMediaFile;
}

// Media File
export interface StrapiMediaFile {
  id: string;
  name: string;
  url: string;
  alternativeText?: string;
  width?: number;
  height?: number;
}

// Main Page Content Type (Dynamic Zones)
export type PageBlock =
  | VisionMissionBlock
  | CoreValuesBlock
  | ActionItemsBlock
  | CTABlock;

export interface PageContent {
  id: string;
  documentId: string;
  title: string;
  slug: string;
  description: string;
  hero: HeroSection;
  sections: PageBlock[];
  seo: SEOMetadata;
  publishedAt: string;
  createdAt: string;
  updatedAt: string;
}

// API Response wrapper
export interface StrapiResponse<T> {
  data: T;
  meta?: {
    pagination?: {
      page: number;
      pageSize: number;
      pageCount: number;
      total: number;
    };
  };
}
