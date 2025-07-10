/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html"
  ],
  darkMode: 'class', // Enable class-based dark mode
  theme: {
    extend: {
      colors: {
        // Primary Colors - Using CSS Variables
        'primary': 'var(--color-primary)',
        'primary-50': 'var(--color-primary-50)',
        'primary-100': 'var(--color-primary-100)',
        'primary-200': 'var(--color-primary-200)',
        'primary-300': 'var(--color-primary-300)',
        'primary-400': 'var(--color-primary-400)',
        'primary-500': 'var(--color-primary-500)',
        'primary-600': 'var(--color-primary-600)',
        'primary-700': 'var(--color-primary-700)',
        'primary-foreground': 'var(--color-primary-foreground)',

        // Secondary Colors - Using CSS Variables
        'secondary': 'var(--color-secondary)',
        'secondary-50': 'var(--color-secondary-50)',
        'secondary-100': 'var(--color-secondary-100)',
        'secondary-200': 'var(--color-secondary-200)',
        'secondary-300': 'var(--color-secondary-300)',
        'secondary-400': 'var(--color-secondary-400)',
        'secondary-500': 'var(--color-secondary-500)',
        'secondary-600': 'var(--color-secondary-600)',
        'secondary-700': 'var(--color-secondary-700)',
        'secondary-800': 'var(--color-secondary-800)',
        'secondary-foreground': 'var(--color-secondary-foreground)',

        // Accent Colors - Using CSS Variables
        'accent': 'var(--color-accent)',
        'accent-50': 'var(--color-accent-50)',
        'accent-100': 'var(--color-accent-100)',
        'accent-200': 'var(--color-accent-200)',
        'accent-300': 'var(--color-accent-300)',
        'accent-400': 'var(--color-accent-400)',
        'accent-500': 'var(--color-accent-500)',
        'accent-600': 'var(--color-accent-600)',
        'accent-700': 'var(--color-accent-700)',
        'accent-800': 'var(--color-accent-800)',
        'accent-900': 'var(--color-accent-900)',
        'accent-foreground': 'var(--color-accent-foreground)',

        // Background Colors - Using CSS Variables
        'background': 'var(--color-background)',
        'background-secondary': 'var(--color-background-secondary)',
        'background-tertiary': 'var(--color-background-tertiary)',

        // Surface Colors - Using CSS Variables
        'surface': 'var(--color-surface)',
        'surface-secondary': 'var(--color-surface-secondary)',
        'surface-tertiary': 'var(--color-surface-tertiary)',

        // Text Colors - Using CSS Variables
        'text-primary': 'var(--color-text-primary)',
        'text-secondary': 'var(--color-text-secondary)',
        'text-tertiary': 'var(--color-text-tertiary)',
        'text-inverse': 'var(--color-text-inverse)',

        // Status Colors - Using CSS Variables
        'success': 'var(--color-success)',
        'success-50': 'var(--color-success-50)',
        'success-100': 'var(--color-success-100)',
        'success-200': 'var(--color-success-200)',
        'success-300': 'var(--color-success-300)',
        'success-400': 'var(--color-success-400)',
        'success-500': 'var(--color-success-500)',
        'success-600': 'var(--color-success-600)',
        'success-700': 'var(--color-success-700)',
        'success-800': 'var(--color-success-800)',
        'success-900': 'var(--color-success-900)',
        'success-foreground': 'var(--color-success-foreground)',

        'warning': 'var(--color-warning)',
        'warning-50': 'var(--color-warning-50)',
        'warning-100': 'var(--color-warning-100)',
        'warning-200': 'var(--color-warning-200)',
        'warning-300': 'var(--color-warning-300)',
        'warning-400': 'var(--color-warning-400)',
        'warning-500': 'var(--color-warning-500)',
        'warning-600': 'var(--color-warning-600)',
        'warning-700': 'var(--color-warning-700)',
        'warning-800': 'var(--color-warning-800)',
        'warning-900': 'var(--color-warning-900)',
        'warning-foreground': 'var(--color-warning-foreground)',

        'error': 'var(--color-error)',
        'error-50': 'var(--color-error-50)',
        'error-100': 'var(--color-error-100)',
        'error-200': 'var(--color-error-200)',
        'error-300': 'var(--color-error-300)',
        'error-400': 'var(--color-error-400)',
        'error-500': 'var(--color-error-500)',
        'error-600': 'var(--color-error-600)',
        'error-700': 'var(--color-error-700)',
        'error-800': 'var(--color-error-800)',
        'error-900': 'var(--color-error-900)',
        'error-foreground': 'var(--color-error-foreground)',

        // Brand Colors (can remain static as they don't change with theme)
        'brand-primary': '#7C3AED', //violet-600
        'brand-secondary': '#7C3AED', //violet-600
        'conversion-accent': '#059669', //emerald-600
        'trust-builder': '#0891B2', //cyan-600
        'cta': '#DC2626', //red-600

        // Border - Using CSS Variables
        'border': 'var(--color-border)',
        'border-secondary': 'var(--color-border-secondary)',
      },
      fontFamily: {
        'primary': ['Inter', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
        'mono': ['JetBrains Mono', 'Fira Code', 'Consolas', 'monospace'],
        'sans': ['Inter', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
      },
      fontSize: {
        'xs': ['0.75rem', { lineHeight: '1rem' }],
        'sm': ['0.875rem', { lineHeight: '1.25rem' }],
        'base': ['1rem', { lineHeight: '1.5rem' }],
        'lg': ['1.125rem', { lineHeight: '1.75rem' }],
        'xl': ['1.25rem', { lineHeight: '1.75rem' }],
        '2xl': ['1.5rem', { lineHeight: '2rem' }],
        '3xl': ['1.875rem', { lineHeight: '2.25rem' }],
        '4xl': ['2.25rem', { lineHeight: '2.5rem' }],
        '5xl': ['3rem', { lineHeight: '1' }],
        '6xl': ['3.75rem', { lineHeight: '1' }],
        '7xl': ['4.5rem', { lineHeight: '1' }],
        '8xl': ['6rem', { lineHeight: '1' }],
        '9xl': ['8rem', { lineHeight: '1' }],
      },
      spacing: {
        'xs': '0.5rem', // 8px
        'sm': '0.8125rem', // 13px
        'md': '1.3125rem', // 21px
        'lg': '2.125rem', // 34px
        'xl': '3.4375rem', // 55px
        '18': '4.5rem',
        '88': '22rem',
        '128': '32rem',
        '144': '36rem',
      },
      boxShadow: {
        'sm': '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
        'md': '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
        'lg': '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
        'xl': '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
        '2xl': '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
        'brand': '0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24)',
        'interactive': '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
        'none': 'none',
      },
      borderRadius: {
        'sm': '0.25rem', // 4px
        'md': '0.5rem', // 8px
        'lg': '0.75rem', // 12px
        'xl': '1rem', // 16px
        '2xl': '1.5rem', // 24px
        '3xl': '2rem', // 32px
      },
      transitionDuration: {
        '200': '200ms',
        '300': '300ms',
        '500': '500ms',
      },
      transitionTimingFunction: {
        'smooth': 'cubic-bezier(0.4, 0.0, 0.2, 1)',
        'elastic': 'cubic-bezier(0.68, -0.55, 0.265, 1.55)',
      },
      animation: {
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'fade-in': 'fadeIn 0.5s ease-in-out forwards',
        'slide-up': 'slideUp 0.6s cubic-bezier(0.68, -0.55, 0.265, 1.55) forwards',
        'bounce-gentle': 'bounce 2s infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(100%)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
      },
      backdropBlur: {
        'xs': '2px',
        'sm': '4px',
        'md': '8px',
        'lg': '12px',
        'xl': '16px',
        '2xl': '24px',
        '3xl': '32px',
      },
      zIndex: {
        '60': '60',
        '70': '70',
        '80': '80',
        '90': '90',
        '100': '100',
      },
      screens: {
        'xs': '475px',
        '3xl': '1920px',
      },
      aspectRatio: {
        '4/3': '4 / 3',
        '3/2': '3 / 2',
        '2/3': '2 / 3',
        '9/16': '9 / 16',
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/forms'),
    require('@tailwindcss/aspect-ratio'),
    require('tailwindcss-animate'),
  ],
}