/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      fontFamily: {
        sansitaone: ['SansitaOne', 'sans-serif'],
      },
      colors: {
        'amarelo': 'var(--amarelo)',
        'laranja': 'var(--laranja)',
        'rosa': 'var(--rosa)',
        'roxo': 'var(--roxo)',
        'azul': 'var(--azul)',
        'azul_escuro': 'var(--azul_escuro)',
        'verde': 'var(--verde)',
        'vermelho': 'var(--vermelho)',
        'cinza_claro': 'var(--cinza_claro)',
      },
      fontSize: {
        '4xl': '2rem',
      },
    },
  },
  plugins: [],
}
