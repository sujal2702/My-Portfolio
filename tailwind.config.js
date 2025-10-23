/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx}",
    "./public/index.html"
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: {
          bg: '#F3F6FA',
          text: '#0F172A',
          secondary: '#475569',
          accent: '#2563EB',
          hover: '#38BDF8',
        },
        dark: {
          bg: '#0F172A',
          text: '#E2E8F0',
          accent: '#38BDF8',
          card: '#1E293B',
        }
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        heading: ['Poppins', 'sans-serif'],
      },
      boxShadow: {
        'soft': '0 4px 20px rgba(0, 0, 0, 0.08)',
        'glow': '0 0 20px rgba(37, 99, 235, 0.3)',
        'glow-hover': '0 0 30px rgba(56, 189, 248, 0.4)',
      },
      backgroundImage: {
        'hero-gradient': 'linear-gradient(135deg, #F3F6FA 0%, #E0EAFF 100%)',
        'dark-hero-gradient': 'linear-gradient(135deg, #0F172A 0%, #1E293B 100%)',
      },
    },
  },
  plugins: [],
}
