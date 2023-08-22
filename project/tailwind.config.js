const withMT = require("@material-tailwind/react/utils/withMT");

module.exports = withMT({


  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  
  theme: {
    extend: {
    colors: {
      customTeal: '#05668D',
      customLightBlue: '#00FFFF'
    },
  },
  }

});