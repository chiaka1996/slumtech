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
        btn_green: '#1A9635',
        nav_links: "#111111",
        header: "#0A0A0A",
        header_shadow: "#66B978",
        text_color: "#1A1A1A",
        subtext: "#343434",
        btn_color: "#FDFEFD",
        index: "#FFFFFF",
        layout: "#F5FBF6",
        footer_text: "#D6D6D6"
    },
    screens: {
      'large': '950px',
      "small": "395px"
    },
    borderRadius: {
      'normal':"8px"
    },
    fontWeight: {
      normal: "400",
      header: "700",
      btn_weight: "500",
      label: "500",
      nav: "600"
  },
  fontSize: {
    normal: "16px",
    head: "40px",
    sub_header: "20px",
    footertext: "12px"
},
fontFamily: {
  "primary": ['Lato'],
  'serif': ['ui-serif', 'Georgia']
},
padding: {
  normal: "10%",
  md: "5%"
},
    },
  },
  plugins: [],
}

