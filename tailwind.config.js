/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/flowbite/**/*.js"

  ],
  theme: {
    extend: {
      colors: {
        custom: "#a8172f",
      },
      backgroundImage: {
        'hero-pattern': "url('/logo2.png')",
        
      }
    },
  },
  plugins: [
    require('flowbite/plugin')
]

}

