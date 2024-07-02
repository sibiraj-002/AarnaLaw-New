const flowbite = require('flowbite-react/tailwind')
const flowbitePlugin = require('flowbite/plugin')

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    flowbite.content(),
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'background-image': 'url("/home-page/home-banner@2x.png")',
      },
      colors: {
        'custom-blue': '#1E396A',
        'custom-red': '#ED1C24',
        'custom-gray': '#7E838B',
      },
      rotate: {
        180: '180deg',
      },
      writingMode: {
        'vertical-rl': 'vertical-rl',
      },
    },
  },
  plugins: [
    flowbitePlugin,
    function ({ addUtilities }) {
      addUtilities({
        '.writing-mode-vertical-rl': {
          'writing-mode': 'vertical-rl',
        },
      })
    },
  ],
}
