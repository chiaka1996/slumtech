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
      'normal':"0.5rem"
    },
    fontWeight: {
      normal: "400",
      header: "700",
      btn_weight: "500",
      label: "500",
      nav: "600"
  },
  fontSize: {
    normal: "1rem",
    head: "2.5rem",
    sub_header: "1.25rem",
    footertext: "0.75rem",
    fourteen: "0.875rem",
    ten: "0.625rem",
    twelve: "0.75rem"
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

