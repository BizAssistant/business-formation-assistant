module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'hunter-green': '#01161E',
        'emerald': '#00A86B',
        'metallic': '#B8B8B8',
        'red-orange': '#FF4500',
      },
      backgroundColor: theme => ({
        ...theme('colors'),
        'default': '#01161E', // hunter-green as default background
      }),
      textColor: theme => ({
        ...theme('colors'),
        'default': '#B8B8B8', // metallic as default text
      }),
    },
  },
  plugins: [],
}
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'hunter-green': '#01161E',
        'emerald': '#00A86B',
        'metallic': '#B8B8B8',
        'red-orange': '#FF4500',
      },
      backgroundColor: theme => ({
        ...theme('colors'),
        'default': '#01161E', // hunter-green as default background
      }),
      textColor: theme => ({
        ...theme('colors'),
        'default': '#B8B8B8', // metallic as default text
      }),
    },
  },
  plugins: [],
}
