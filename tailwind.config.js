/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      keyframes: {
        fadeToRight: {
          '0%': { opacity: 1, transform: 'translateX(0)' },
          '100%': { opacity: 0, transform: 'translateX(100%)' },
        }
      },
      animation: {
        fadeToRight: 'fadeToRight .5s linear infinite'
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      typography: {
        DEFAULT: {
          css: {
            fontFeatureSettings: '"salt","ss01","cv11"',
          }
        }
      }
    },
    fontFamily: {
      sans: [
        'var(--font-inter)', { fontFeatureSettings: '"salt","ss01","cv11"' }
      ],
      mono: ['var(--font-jetbrains_mono)']
    }
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}
