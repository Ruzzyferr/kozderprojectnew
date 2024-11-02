/** @type {import('tailwindcss').Config} */
module.exports = {

  content: ['./src/app/kozder-app/**/*.html',
    "./node_modules/flowbite/**/*.js",
    './node_modules/tw-elements/js/**/*.js]',
    ],
  theme: {

  },
  plugins: [
    require('@tailwindcss/forms'),
    require('daisyui')
  ],

}

