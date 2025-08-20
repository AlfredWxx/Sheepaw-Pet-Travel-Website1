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
        // Sheepaw品牌色
        sheepaw: {
          blue: '#5B82D6',
          orange: '#F2B885',
          gray: '#F6F9FD',
        },
        // 主色调 - 基于Sheepaw品牌色
        primary: {
          main: '#5B82D6', // Sheepaw Blue
          light: '#7B9DE6', // 亮一点的蓝色
          dark: '#4A6BC7', // 深一点的蓝色
          blue: '#5B82D6', // 保持兼容性
        },
        // 辅助色 - Sheepaw Orange
        accent: {
          main: '#F2B885', // Sheepaw Orange
          light: '#F5C99A', // 亮一点的橙色
          dark: '#E8A56A', // 深一点的橙色
          orange: '#F2B885', // 保持兼容性
          warm: '#F2B885', // 保持兼容性
        },
        // 中性色 - Sheepaw Gray
        gray: {
          warm: '#6B7280',
          light: '#F6F9FD', // Sheepaw Gray
          sheepaw: '#F6F9FD', // Sheepaw Gray
        },
        text: {
          dark: '#1F2937',
        },
        // 功能色
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
        'warm': '0 8px 25px -5px rgba(91, 130, 214, 0.1)', // Sheepaw Blue阴影
        'brand': '0 8px 25px -5px rgba(91, 130, 214, 0.15)', // Sheepaw Blue品牌阴影
        'sheepaw': '0 8px 25px -5px rgba(91, 130, 214, 0.12)', // Sheepaw专用阴影
      },
      backgroundImage: {
        'gradient-warm': 'linear-gradient(135deg, #5B82D6 0%, #7B9DE6 100%)', // Sheepaw Blue渐变
        'gradient-accent': 'linear-gradient(135deg, #F2B885 0%, #F5C99A 100%)', // Sheepaw Orange渐变
        'gradient-brand': 'linear-gradient(135deg, #5B82D6 0%, #F2B885 100%)', // Sheepaw品牌渐变
        'gradient-sheepaw': 'linear-gradient(135deg, #5B82D6 0%, #F2B885 100%)', // Sheepaw专用渐变
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-out',
        'slide-up': 'slideUp 0.5s ease-out',
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'slide-in-left': 'slideInLeft 0.6s ease-out',
        'slide-in-right': 'slideInRight 0.6s ease-out',
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
        slideInLeft: {
          '0%': { transform: 'translateX(-100%)', opacity: '0' },
          '100%': { transform: 'translateX(0)', opacity: '1' },
        },
        slideInRight: {
          '0%': { transform: 'translateX(100%)', opacity: '0' },
          '100%': { transform: 'translateX(0)', opacity: '1' },
        },
      },
    },
  },
  plugins: [],
}
