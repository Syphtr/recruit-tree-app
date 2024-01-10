/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
    "../web/node_modules/flowbite-react/lib/**/*.js",
  ],
  prefix: "",
  theme: {
    /**
     * - layout
     * - foundations
     * - textStyles
     * - layerStyles
     */
  },
  plugins: [require("flowbite/plugin"), require("tailwindcss-animate")],
};
