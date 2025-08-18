/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // 主色调 - 温暖可靠的蓝色
        primary: {
          blue: '#4F46E5',
          light: '#8B5CF6',
        },
        // 辅助色 - 温暖的橙色系
        accent: {
          orange: '#F59E0B',
          warm: '#FED7AA',
        },
        // 中性色 - 柔和灰色系
        gray: {
          warm: '#6B7280',
          light: '#F9FAFB',
        },
        text: {
          dark: '#1F2937',
        },
        // 功能色 - 柔和版本
        success: '#10B981',
        warning: '#F59E0B',
        error: '#EF4444',
      },
      fontFamily: {
        sans: ['Inter', '-apple-system', 'BlinkMacSystemFont', 'sans-serif'],
      },
      fontSize: {
        'hero': '3.5rem',
        'h1': '2.5rem',
        'h2': '2rem',
        'h3': '1.5rem',
        'body': '1rem',
        'small': '0.875rem',
      },
      fontWeight: {
        light: '300',
        normal: '400',
        medium: '500',
        semibold: '600',
        bold: '700',
      },
      borderRadius: {
        'sm': '0.5rem',
        'md': '0.75rem',
        'lg': '1rem',
        'xl': '1.5rem',
      },
      boxShadow: {
        'sm': '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
        'md': '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
        'lg': '0 10px 15px -3px rgba(0, 0, 0, 0.1)',
        'warm': '0 8px 25px -5px rgba(79, 70, 229, 0.1)',
      },
      backgroundImage: {
        'gradient-warm': 'linear-gradient(135deg, #4F46E5 0%, #8B5CF6 100%)',
        'gradient-accent': 'linear-gradient(135deg, #F59E0B 0%, #FED7AA 100%)',
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-out',
        'slide-up': 'slideUp 0.5s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
      },
    },
  },
  plugins: [],
}
