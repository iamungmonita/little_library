/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './core/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        "header": '#f5f5f5',
        "hover": 'rgb(107 114 128)',

      },
      fontFamily: {
        'display': ['Oswald'],
        'body': ['"Open Sans"'],
      },
      screens: {
        'sm': '640px',
        // => @media (min-width: 640px) { ... }

        'md': '960px',
        // => @media (min-width: 768px) { ... }

        'lg': '1080px',
        // => @media (min-width: 1024px) { ... }

        'xl': '1280px',
        // => @media (min-width: 1280px) { ... }

        '2xl': '1536px',
        // => @media (min-width: 1536px) { ... }
      }
    },
  },
  plugins: [],
}