module.exports = {
  mode: "jit",  // JIT mode enabled
  content: [
    "./src/**/*.{js,ts,jsx,tsx,html,mdx}",  // Path to all relevant files
    "./public/index.html",                  // Add public HTML if needed
  ],
  darkMode: "class",  // Enable dark mode with class strategy
  theme: {
    screens: { 
      md: { max: "1050px" },  // Custom screen sizes
      sm: { max: "550px" } 
    },
    extend: {
      colors: {
        black: {
          900: "#030229",
          "900_01": "#000000",
          "900_07": "#0000007f",
          "900_0c": "#000000cc",
          "900_2b": "#0000002b",
          "900_3f": "#0000003f",
          "900_7f": "#0302297f",
          "900_b2": "#030229b2",
          "900_cc": "#030229cc",
        },
        blue: { 900: "#0052b4" },
        blue_gray: {
          50: "#f1f1f1",
          100: "#cecece",
          300: "#8e95a9",
          400: "#8a8a8a",
          600: "#666c80",
          700: "#525866",
          800: "#2e3a59",
          900: "#1c2a53",
          "100_01": "#d9d9d9",
          "300_01": "#a3a7b3",
          "50_01": "#efeff3",
          "800_66": "#2e3a5966",
          "900_01": "#203c3d",
          "900_02": "#333333",
        },
        deep_orange: { 100: "#ffc5c1", 900: "#a04800", a400: "#ff1515" },
        deep_purple: { "800_0a": "#3326ae0a", "800_14": "#3326ae14", a200: "#69449575" },
        foundation: {
          primary_color: { 
            p200: "#36af94", p300: "#0D9F7E", p400: "#096f58", p50: { 0: "#e7f5f2", 1: "#ffffff" } },
        },
        gray: {
          50: "#f6f8fa",
          100: "#f7f7f8",
          200: "#f0f0f0",
          300: "#e1e1e1",
          500: "#9f9fa3",
          600: "#828282",
          700: "#666666",
          "100_00": "#f5f5f500",
          "100_01": "#f5f5f5",
          "100_02": "#efefff",
          "300_01": "#dddddd",
          "300_02": "#e5e5e5",
          "50_01": "#fcfcfc",
          "600_01": "#767672",
        },
        green: { 50: "#e6f4e6", 100: "#bee3c0", 500: "#4caf50", 600: "#279f51", 800: "#0d192d", "500_33": "#4caf5033" },
        grey_100: "#e2e4e8",
        grey_200: "#808080",
        grey_300: "#212121",
        indigo: { a200_3f: "#605bff3f" },
        orange: { 50: "#ffedd4", 100: "#f6d79c", 400: "#ff9924", 600: "#ff8901", 900: "#cc5500" },
        red: { 50: "#ffebea", 500: "#ff392b", 600: "#e73a49" },
        teal: {
          500: "#0ab28b",
          600: "#018183",
          700: "#0a7a61",
          900: "#04392d",
          "500_11": "#0d9f7e11",
          "500_14": "#0d9f7e14",
          "50_99": "#e7f5f299",
        },
        white: { a700_28: "#ffffff28", a700_33: "#ffffff33", a700_63: "#ffffff63", a700_94: "#ffffff94" },
        yellow: { 800: "#eead33" },
      },
      boxShadow: {
        xs: "0 1px 2px 0 #0000007f",
        sm: "0 4px 4px 0 #605bff3f",
        md: "0 1px 0 #000000cc",
        lg: "0 8px 32px 0 #0d9f7e14",
        xl: "0 1px 1px 0 #0d9f7e",
        "2xl": "0 4px 46px -13px #0000002b",
        "3xl": "0 4px 32px 0 #3326ae0a",
        "4xl": "0 1px 2px 0 #0000003f",
        "5xl": "0 1px 1px 0 #0000007f",
        "6xl": "0 0 1px 1px #a04800",
      },
      fontFamily: {
        roboto: "Roboto",
        jost: "Jost",
        nunito: "Nunito",
        inter: "Inter",
        lexenddeca: "Lexend Deca",
        outfit: "Outfit",
      },
      opacity: { 0.64: 0.64 },
      backgroundImage: {
        gradient: "linear-gradient(180deg, #f5f5f5,#f5f5f500)",
        gradient1: "linear-gradient(90deg, #04392d,#0a7a61), url(/public/images/img_frame_35678685.png)",
      },
      textShadow: { ts: "0px 12px 32px #3326ae14" },
    },
  },
  plugins: [require("@tailwindcss/forms")],
  // plugins: {
  //   'postcss-import': {},
  //   'tailwindcss/nesting': {},
  //   tailwindcss: {},
  //   autoprefixer: {},
  // }
};

