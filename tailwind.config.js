/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./client/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      "light",
      "dark",
      "cupcake",
      "bumblebee",
      "emerald",
      "corporate",
      "synthwave",
      "retro",
      "cyberpunk",
      "valentine",
      "halloween",
      "garden",
      "forest",
      "aqua",
      "lofi",
      "pastel",
      "fantasy",
      "wireframe",
      "black",
      "luxury",
      "dracula",
      "cmyk",
      "autumn",
      "business",
      "acid",
      "lemonade",
      "night",
      "coffee",
      "winter",
      {
        daniel: {
          primary: "#84cc16",

          secondary: "#9ca3af",

          accent: "#f87171",

          neutral: "#93c5fd",

          "base-100": "#292d3d",

          info: "#8eabdc",

          success: "#107a40",

          warning: "#fdbc68",

          error: "#e05548",
        },
      },
      {
        tom: {
          primary: "#16a34a",

          accent: "#ef4444",

          secondary: "#0891b2",

          neutral: "#2a323c",

          "base-100": "#1d232a",

          info: "#1e3a8a",

          success: "#36d399",

          warning: "#eab308",

          error: "#881337",
        },
      },
    ],
  },
};
