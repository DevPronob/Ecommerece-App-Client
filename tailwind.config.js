/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx,vue}",
  ],
  theme: {
    extend: {
      colors: {
        'dashboard_sidebar': '#f9f9f9',
        'login_button':'#311574',
        'main_color':'#eab308',
        'category_container_bg':'#f4f2eb'
    },
    },
  },
  plugins: [],
}


