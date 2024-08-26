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
        h1: "#3F3F3F",
        btn_bg: '#FD213E',
        primary: "#353535",
        btn_color: "#F5F5F5",
        card1: "#F5F5F5",
        index: "#FFFFFF",
        // old colors
        header: "#0A0A0A",
        header_shadow: "#66B978",
        text_color: "#1A1A1A",
        subtext: "#343434",
        
        layout: "#F5FBF6",
        footer_text: "#D6D6D6"
    },
    screens: {
      'large': '900px',
      "small": "400px",
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
    h3: '1.125rem', //18px
    secondary: '1.25rem', //20px
    head: "2.6875rem", //43px

    // old sizes
    mnormal: "0.875em",
    about: '1.2em',
    faq: '1.2em',
    xnormal: "2.2em",
    head: "2.5em",
    mhead:"1.5em",
    xhead: "4.5em",
    sub_header: "1.25em",
    xsub: "1.5em",
    footertext: "0.75em",
    fourteen: "0.875em",
    ten: "0.625em",
    twelve: "0.75em"
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

