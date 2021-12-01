module.exports = {
  // mode: 'jit',
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    extend: {
      transitionProperty: {
        'height': 'height',
        'width': 'width',
        'spacing': 'margin, padding',
        'visibility': 'visibility'
       },
       keyframes: {
        wiggle: {
          '0%, 100%': { transform: 'rotate(-3deg)' },
          '50%': { transform: 'rotate(3deg)' },
        }
      },
       animation: {
        wiggle: 'wiggle 0.2s ease-in-out infinite',
       },
    },
  },
  variants: {
    scrollbar: ['dark'],
    extend: {
      backgroundColor: ['active', 'group-focus'],
      animation: ['hover', 'focus', 'group-hover'],
      divideColor: ['group-hover'],
      scale: ['responsive', 'hover', 'focus', 'active', 'group-hover'],
      height: ['responsive', 'hover', 'focus', 'active', 'group-hover'],
      visibility: ['hover', 'focus', 'group-hover'],
    }
  },
  plugins: [
    require('@themesberg/flowbite/plugin'),
    require('tailwind-scrollbar'),
  ],
}