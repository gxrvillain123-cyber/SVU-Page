import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        ink: "#10231f",
        pine: "#0d3f36",
        saffron: "#f28a2e",
        river: "#1f6f8b",
        rosewood: "#8f2f45",
        paper: "#fff8ed",
      },
      boxShadow: {
        soft: "0 24px 80px rgba(16, 35, 31, 0.14)",
        lift: "0 16px 46px rgba(16, 35, 31, 0.18)",
      },
      animation: {
        float: "float 8s ease-in-out infinite",
        marquee: "marquee 24s linear infinite",
        reveal: "reveal 0.8s ease both",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-12px)" },
        },
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        reveal: {
          "0%": { opacity: "0", transform: "translateY(18px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
