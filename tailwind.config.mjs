/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        primary: '#1E3A8A',
        secondary: '#475569',
        accent: '#3B82F6',
        cta: '#FF6B35'  // Vibrant orange for better visibility
      },
      fontFamily: {
        sans: ['Inter var', 'system-ui', 'sans-serif'],
        display: ['Montserrat', 'system-ui', 'sans-serif']
      }
    }
  },
  plugins: []
}