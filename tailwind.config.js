/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      screens: {
        xxs: "0px", // Double Extra Small Devices
        xs: "360px", // Extra Small Devices
        sm: "480px", // Small Devices
        msm: "576px", // Medium Small Medium Devices
        lsm: "640px", // Large Small Medium Devices
        smd: "768px", // Small Medium Devices
        md: "992px", // Medium Devices
        lg: "1200px", // Large Devices
        xl: "1536px", // Extra Large Devices
      },
      colors: {
        main: "#6ca6cd",
        hover: "#69e095",
        primary: "#ffffe0",
        secondary: "#def1ff",
        primary_2: "#f4f4f4"
      },
      fontFamily: {
        oxygen: ['var(--font-oxygen)'],
        amatic: ['var(--font-amatic)'],
        fredoka: ['var(--font-fedoka-one)'],
      }
    }
  },
  plugins: [],
}

