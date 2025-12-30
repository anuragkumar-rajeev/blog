export const lightTheme = {
  name: 'light',
  colors: {
    background: '#ffffff',
    surface: '#f8f9fa',
    surfaceHover: '#f1f3f5',
    text: '#212529',
    textSecondary: '#495057',
    textTertiary: '#868e96',
    border: '#dee2e6',
    borderLight: '#e9ecef',
    accent: '#2563eb',
    accentHover: '#1d4ed8',
    code: '#f8f9fa',
    codeText: '#e03131',
    shadow: 'rgba(0, 0, 0, 0.1)',
    shadowMedium: 'rgba(0, 0, 0, 0.15)',
  },
  fonts: {
    serif: '"Merriweather", "Georgia", serif',
    sans: '"Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", sans-serif',
    mono: '"Fira Code", "Courier New", monospace',
  },
  fontSizes: {
    xs: '0.75rem',     // 12px
    sm: '0.875rem',    // 14px
    base: '1rem',      // 16px
    lg: '1.125rem',    // 18px
    xl: '1.25rem',     // 20px
    '2xl': '1.5rem',   // 24px
    '3xl': '1.875rem', // 30px
    '4xl': '2.25rem',  // 36px
    '5xl': '3rem',     // 48px
    '6xl': '3.75rem',  // 60px
  },
  spacing: {
    xs: '0.5rem',   // 8px
    sm: '1rem',     // 16px
    md: '1.5rem',   // 24px
    lg: '2rem',     // 32px
    xl: '3rem',     // 48px
    '2xl': '4rem',  // 64px
    '3xl': '6rem',  // 96px
  },
  breakpoints: {
    mobile: '640px',
    tablet: '768px',
    desktop: '1024px',
    wide: '1280px',
  },
  transitions: {
    fast: '150ms ease-in-out',
    base: '250ms ease-in-out',
    slow: '350ms ease-in-out',
  },
  borderRadius: {
    sm: '0.25rem',
    md: '0.5rem',
    lg: '0.75rem',
    xl: '1rem',
  },
  lineHeights: {
    tight: 1.25,
    normal: 1.5,
    relaxed: 1.75,
    loose: 2,
  },
};

export const darkTheme = {
  ...lightTheme,
  name: 'dark',
  colors: {
    background: '#0f1419',
    surface: '#1a1f2e',
    surfaceHover: '#252b3b',
    text: '#e6edf3',
    textSecondary: '#adbac7',
    textTertiary: '#768390',
    border: '#373e47',
    borderLight: '#2d333b',
    accent: '#3b82f6',
    accentHover: '#60a5fa',
    code: '#1a1f2e',
    codeText: '#ff6b6b',
    shadow: 'rgba(0, 0, 0, 0.3)',
    shadowMedium: 'rgba(0, 0, 0, 0.5)',
  },
};

export type Theme = typeof lightTheme;

