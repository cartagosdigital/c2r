import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // C2R Primary Colors
        orange: {
          primary: "#E3531F",
          secondary: "#F0861C",
          light: "#F87243",
          lighter: "#FFA044",
          dark: "#B23619",
          darker: "#D56D07",
        },
        gray: {
          brand: "#686868",
          dark: "#3F3F3F",
          light: "#B6B5B6",
        },
        // C2R Secondary Colors
        teal: {
          deep: "#122E39",
          mid: "#335E6A",
          light: "#3F6DC1",
        },
        blue: {
          brand: "#244C99",
          mid: "#213562",
          dark: "#090F12",
        },
        gold: {
          brand: "#F3B01C",
          dark: "#CF910C",
          light: "#FCD175",
        },
      },
      fontFamily: {
        rubik: ["var(--font-rubik)", "sans-serif"],
      },
      backgroundImage: {
        "gradient-orange":
          "linear-gradient(25deg, #E3531F 0%, #F0861C 100%)",
        "gradient-orange-reverse":
          "linear-gradient(205deg, #E3531F 0%, #F0861C 100%)",
        "gradient-teal":
          "linear-gradient(25deg, #090F12 0%, #122E39 100%)",
      },
      animation: {
        "marquee": "marquee 30s linear infinite",
        "marquee2": "marquee2 30s linear infinite",
        "float": "float 6s ease-in-out infinite",
        "float-slow": "float 9s ease-in-out infinite",
        "spin-slow": "spin 20s linear infinite",
        "fade-up": "fadeUp 0.6s ease-out forwards",
        "count-up": "countUp 2s ease-out forwards",
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-50%)" },
        },
        marquee2: {
          "0%": { transform: "translateX(50%)" },
          "100%": { transform: "translateX(0%)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px) rotate(0deg)" },
          "50%": { transform: "translateY(-20px) rotate(5deg)" },
        },
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(30px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        countUp: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
