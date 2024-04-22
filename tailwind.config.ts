import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: {
        xl: { max: "1279px" },
        // => @media (max-width: 1279px) { ... }

        "xl-up": { min: "1280px" },
        // => @media (min-width: 1280px) { ... }

        "c-up": { min: "1205x" },
        // => @media (min-width: 1280px) { ... }  container up

        "c-down": { min: "1205x" },
        // => @media (max-width: 1280px) { ... } container down

        desktop: { min: "992px", max: "1279px" },
        // => @media (min-width: 992px and max-width: 1279px) { ... }

        lg: { max: "991px" },
        // => @media (max-width: 991px) { ... }

        "lg-up": { min: "992px" },
        // => @media (min-width: 1280px) { ... }

        tablet: { min: "768px", max: "991px" },
        // => @media (min-width: 768px and max-width: 991px) { ... }

        md: { max: "767px" },
        // => @media (max-width: 767px) { ... }

        "md-up": { min: "768px" },
        // => @media (min-width: 768px) { ... }

        phablet: { min: "596px", max: "767px" },
        // => @media (min-width: 596px and max-width: 767px) { ... }

        sm: { max: "595px" },
        // => @media (max-width: 595px) { ... }

        "sm-up": { min: "596px" },
        // => @media (min-width: 596px) { ... }

        xs: { max: "480px" },
        // => @media (max-width: 480px) { ... }
      },
      width: {
        mainContent: "calc(100% + 550px)",
        mainRow: "calc(100% + 20px)",
        threeCard: "calc(33.33% - 20px)",
        colFour: "calc(25% - 20px)",
        halfWidth: "calc(50% - 20px)",
        "one&half": "145%",

        iconBeforeW: "calc(100% + 30px)",
        sectionGradient: "calc(100% + 148px)",
      },
      height: {
        iconBeforeH: "calc(100% + 30px)",
      },
      colors: {
        black: "#000",
        blackish: "#16181b",
        blue: "#0164d3",
        // brown: "#946c48",
        spaceBlack: "#263238",
        // darkBlue: "#1a4d80",
        darkBlue: "#000037",
        darkGray: "#3e4555",
        // lightGray: "#f4f8fa",
        extraLightGray: "#f5f5f5",
        lightGray: "#d1d1d1",
        mediumGray: "#868686",
        // gray: "#8d97ad",
        gray: "#646464",
        grayish: "#e9ecef",
        opalGreen: "#a3cac7",
        orange: "#ff6a5b",
        peach: "#fdbfa8",
        pink: "#ff4d7e",
        purple: "#607df9",
        purplePink: "#8000FF",
        skyblue: "#0077b6",
        white: "#fff",
        // yello: "#FFCA36",
      },
      borderColor: {
        bordergradient: "rgba(128, 0, 255, 0.3)",
        bordergradient2: "rgba(217, 217, 217, 0.6)",
      },
      backgroundImage: {
        bgBluePurple: "linear-gradient(to right, #0075ff, #8000ff)",
      },
      transitionProperty: {
        height: "height",
        padding: "padding",
        color: "color",
        transform: "transform",
      },
      transitionDuration: {
        $3: "3000ms",
      },
    },
  },
  plugins: [],
};
export default config;
