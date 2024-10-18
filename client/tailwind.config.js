/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./pages/**/*.{js,ts,jsx,tsx,mdx}', './components/**/*.{js,ts,jsx,tsx,mdx}', './app/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      gridTemplateRows: {
        layout: '100px 1fr 100px' 
      },
      gridTemplateColumns: {
        layout: '15% 85%' 
      },
      colors: {
        primary: 'var(--primary)',
        secondary: 'var(--secondary)',
        dark: 'var(--dark)',
        accent: 'var(--accent)',
        white: 'var(--white)'
      },
      fontFamily: {
        zen: ['Zen Loop', 'sans-serif'],
        nanum: ['Nanum Gothic', 'sans-serif']
      },
      transitionDuration: {
        DEFAULT: '333ms'
      },
      transitionTimingFunction: {
        DEFAULT: 'ease-in-out'
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: 0 },
          '100%': { opacity: 1 }
        }
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out forwards'
      }
    }
  },
  plugins: []
};
