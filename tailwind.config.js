/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}", // add this line
    "./node_modules/flowbite/**/*.js" // add this line


  ],
  theme: {
    extend: {
      colors: {
"primary": {
    "50": "#e0f7f6",
    "100": "#b3eceb",
    "200": "#80e0df",
    "300": "#4dd3d2",
    "400": "#26c6c6",
    "500": "#0e9790",
    "600": "#0c7e7a",
    "700": "#0a6564",
    "800": "#074d4d",
    "900": "#053434",
    "950": "#032424"
}      }
    },
    fontFamily: {
      'body': [
    'Inter', 
    'ui-sans-serif', 
    'system-ui', 
    '-apple-system', 
    'system-ui', 
    'Segoe UI', 
    'Roboto', 
    'Helvetica Neue', 
    'Arial', 
    'Noto Sans', 
    'sans-serif', 
    'Apple Color Emoji', 
    'Segoe UI Emoji', 
    'Segoe UI Symbol', 
    'Noto Color Emoji'
  ],
      'sans': [
    'Inter', 
    'ui-sans-serif', 
    'system-ui', 
    '-apple-system', 
    'system-ui', 
    'Segoe UI', 
    'Roboto', 
    'Helvetica Neue', 
    'Arial', 
    'Noto Sans', 
    'sans-serif', 
    'Apple Color Emoji', 
    'Segoe UI Emoji', 
    'Segoe UI Symbol', 
    'Noto Color Emoji'
  ]
    }
  },
  plugins: [
    require('flowbite/plugin') // add this line

  ],
}

