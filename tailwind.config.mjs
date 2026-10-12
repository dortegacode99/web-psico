/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        brand: {
          50:  '#f3f8f6',
          100: '#dfeae5',
          200: '#bfd5cb',
          300: '#9ec0b1',
          400: '#7ba098',
          500: '#5e8881',
          600: '#496c66',
          700: '#3a5751',
          800: '#2f4641',
          900: '#283a36',
        },
        accent: {
          50:  '#fffaeb',
          100: '#fef0c7',
          200: '#fde18a',
          300: '#fbcc4d',
          400: '#f4c95d',
          500: '#e6a72a',
          600: '#c08220',
          700: '#995d1d',
          800: '#7d491f',
          900: '#683d20',
        },
        cream: {
          50:  '#fdfbf6',
          100: '#faf5ea',
          200: '#f3ead2',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
        display: ['Quicksand', 'Inter', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        soft: '0 4px 24px -8px rgba(40, 58, 54, 0.12)',
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
  ],
};
