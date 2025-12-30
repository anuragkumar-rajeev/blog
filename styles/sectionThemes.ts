import { Theme } from './theme';

export interface SectionTheme {
  accent: string;
  accentHover: string;
  accentLight: string;
  gradient1: string;
  gradient2: string;
}

export const sectionThemes = {
  science: {
    light: {
      accent: '#2563eb',
      accentHover: '#1d4ed8',
      accentLight: '#dbeafe',
      gradient1: '#3b82f620',
      gradient2: '#60a5fa15',
    },
    dark: {
      accent: '#60a5fa',
      accentHover: '#93c5fd',
      accentLight: '#1e3a8a',
      gradient1: '#1e40af20',
      gradient2: '#3b82f615',
    },
  },
  life: {
    light: {
      accent: '#dc2626',
      accentHover: '#b91c1c',
      accentLight: '#fee2e2',
      gradient1: '#ef444420',
      gradient2: '#f8717115',
    },
    dark: {
      accent: '#f87171',
      accentHover: '#fca5a5',
      accentLight: '#7f1d1d',
      gradient1: '#991b1b20',
      gradient2: '#dc262615',
    },
  },
  poetry: {
    light: {
      accent: '#059669',
      accentHover: '#047857',
      accentLight: '#d1fae5',
      gradient1: '#10b98120',
      gradient2: '#34d39915',
    },
    dark: {
      accent: '#34d399',
      accentHover: '#6ee7b7',
      accentLight: '#064e3b',
      gradient1: '#065f4620',
      gradient2: '#05966915',
    },
  },
  all: {
    light: {
      accent: '#2563eb',
      accentHover: '#1d4ed8',
      accentLight: '#dbeafe',
      gradient1: '#6366f120',
      gradient2: '#8b5cf615',
    },
    dark: {
      accent: '#818cf8',
      accentHover: '#a5b4fc',
      accentLight: '#312e81',
      gradient1: '#4338ca20',
      gradient2: '#6366f115',
    },
  },
};

export type SectionType = keyof typeof sectionThemes;

export function getSectionTheme(section: SectionType, isDark: boolean): SectionTheme {
  return sectionThemes[section][isDark ? 'dark' : 'light'];
}

