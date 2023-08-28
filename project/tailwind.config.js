const withMT = require("@material-tailwind/react/utils/withMT");

module.exports = withMT({


  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  
  theme: {
    extend: {
    borderRadius:{
      extraLarge: '12rem',
      small: '0.125rem',
      medium: '0.375rem',
      large: '0.5rem',
      full: '9999px',
  
      
    },
    colors: {
      customTeal: '#05668D',
      customLightBlue: '#00FFFF',
    },
  },
  }

});