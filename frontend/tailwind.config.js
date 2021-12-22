module.exports = {
  // mode: 'jit',
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    extend: {
      width: {
        '128': '32rem',
      },
      blur: {
        xs: '2px',
      },
      transitionProperty: {
        'height': 'height',
        'width': 'width',
        'spacing': 'margin, padding',
        'visibility': 'visibility',
        'opacity': 'opacity',
        'left': 'left',
        'gradientColorStops': 'gradientColorStops',
       },
       keyframes: {
        wiggle: {
          '0%, 100%': { transform: 'rotate(-3deg)' },
          '50%': { transform: 'rotate(3deg)' },
        },
        slide: {
          'from': { 
            position: 'relative',
            left: '-100%', 
            // opacity: '0%' 
          },
          'to': { 
            position: 'relative',
            left: '0%', 
            // opacity: "100%" 
          },
        },
        shortspin: {
          'from': {transform: 'rotate(0deg)'},
          'to': {transform: 'rotate(360deg)'}
        }
      },
       animation: {
        wiggle: 'wiggle 0.2s ease-in-out infinite',
        slide: 'slide 1s ease-in-out forwards',
        shortspin: 'shortspin 1s ease-in-out forwards'
       },
    },
  },
  variants: {
    scrollbar: ['dark'],
    extend: {
      tableLayout: ['hover', 'focus'],
      backgroundColor: ['active', 'group-focus', 'group-hover','hover', 'focus'],
      animation: ['hover', 'focus', 'group-hover'],
      divideColor: ['group-hover'],
      scale: ['responsive', 'hover', 'focus', 'active', 'group-hover'],
      height: ['responsive', 'hover', 'focus', 'active', 'group-hover'],
      visibility: ['hover', 'focus', 'group-hover'],
      transform: ['hover', 'focus', 'group-hover'],
      translate: ['hover', 'focus', 'group-hover'],
      from : ['hover', 'focus', 'group-hover'],
      backgroundImage: ['hover', 'focus', 'group-hover'],
      gradientColorStops: ['hover', 'focus', 'group-hover', 'responsive'],
    }
  },
  plugins: [
    require('@themesberg/flowbite/plugin'),
    require('tailwind-scrollbar'),
  ],
}