/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./node_modules/flowbite-react/lib/**/*.js",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  plugins: [
    require("flowbite/plugin")
  ],
  theme: {
    extend: {
      colors: {
        basic: "#000",
        blog: "#2D3748",
        heading: "#3F3F3F",
        btn_bg: '#FD213E',
        primary: "#353535",
        // primary: "#FFCCD3",
        btn_color: "#F5F5F5",
        card1: "#F5F5F5",
        index: "#FFFFFF",
    },
    screens: {
      'large': '900px',
      "small": "400px",
      "medium": "768px",
      "xlarge": "1900px"
    },
    backgroundImage: {
      'hero': "url('/images/approach2.png')"
    },
    borderRadius: {
      'normal':"0.5rem"
    },
    fontWeight: {
      normal: "400",
      h1: "800",
      h2: "700",
      h3: "600",
      h4: "500",
      tertiary: "900",
      // old weight
      label: "500",
      
  },
  fontSize: {
    normal: "1em", //16px
    h1: '2.25rem', //36px 
    h2: '1.5rem', //24px,
    h3: '1.125rem', //18px for mobile sub heading
    h4: '2rem', //32px use for mobile header
    secondary: '1.25rem', //20px
    head: "2.6875rem", //43px
    mHeader: "2rem", //mobile header
    msubHeader: "1.125rem", //mobile sub header
    
},
fontFamily: {
  "primary": ['Public Sans'],
  "secondary" : ['Inter']
},
padding: {
  normal: "10%",
  xnormal: "15%",
  md: "5%"
},
    },
  },
  plugins: [],
}

