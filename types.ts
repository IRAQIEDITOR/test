
export interface SubtitleChunk {
  text: string;
  start: number;
  end: number;
  label?: 'hook' | 'cta' | 'important' | 'value' | 'question' | 'humor';
}

export interface SocialMediaKit {
  caption: string;
  hashtags: string[];
  summary: string;
  hooks: string[];
}

export enum AppStatus {
  IDLE = 'IDLE',
  UPLOADING = 'UPLOADING',
  PROCESSING = 'PROCESSING',
  EDITING = 'EDITING',
  ERROR = 'ERROR'
}

export type EnglishFormat = 'english' | 'phonetic_arabic';
export type NumberFormat = 'digits' | 'words';
export type UILanguage = 'ar' | 'en';

export interface ProcessingOptions {
  wordCount: number;
  targetLanguage: string;
  dialect?: string;
  englishFormat: EnglishFormat;
  numberFormat: NumberFormat;
}
