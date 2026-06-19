/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors')
module.exports = {
  mode:"jit",

  content: [
    "./node_modules/react-tailwindcss-datepicker/dist/index.esm.js",
    "./src/app/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
    "./src/pages/**/*.{js,ts,jsx,tsx}"
  ],
  darkMode:'class',
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-nunito-sans)', 'Nunito Sans', 'system-ui', 'sans-serif'],
      },
      colors: {
        mainColor:"#006a65",
        themeColor:"#20b2aa",
        hoverColor:'#e5eeff',
        primary: {
          DEFAULT: '#006a65',
          container: '#20b2aa',
          on: '#ffffff',
          onContainer: '#003e3b',
          fixed: '#79f6ed',
          fixedDim: '#59dad1',
          onFixed: '#00201e',
          onFixedVariant: '#00504c',
        },
        secondary: {
          DEFAULT: '#576060',
          container: '#d8e1e1',
          on: '#ffffff',
          onContainer: '#5b6465',
        },
        surface: {
          DEFAULT: '#f8f9ff',
          dim: '#ccdbf4',
          bright: '#f8f9ff',
          container: '#e5eeff',
          containerLow: '#eff4ff',
          containerLowest: '#ffffff',
          containerHigh: '#dce9ff',
          containerHighest: '#d4e4fc',
          tint: '#006a65',
          variant: '#d4e4fc',
        },
        onSurface: {
          DEFAULT: '#0d1c2e',
          variant: '#3c4948',
        },
        outline: {
          DEFAULT: '#6c7a78',
          variant: '#bbc9c7',
        },
        inverse: {
          surface: '#223144',
          onSurface: '#eaf1ff',
          primary: '#59dad1',
        },
        error: {
          DEFAULT: '#ba1a1a',
          container: '#ffdad6',
          on: '#ffffff',
          onContainer: '#93000a',
        },
        background: '#f8f9ff',
        onBackground: '#0d1c2e',
        green: colors.emerald,
        yellow: colors.amber,
        purple: colors.violet,
        gray: colors.neutral
      },
      borderRadius: {
        sm: '0.25rem',
        DEFAULT: '0.5rem',
        md: '0.75rem',
        lg: '1rem',
        xl: '1.5rem',
        '2xl': '1.5rem',
        full: '9999px',
      },
      spacing: {
        gutter: '1.5rem',
        'container-max': '1440px',
      },
      maxWidth: {
        'container-max': '1440px',
      },
    },
  },
  plugins: [],
}
