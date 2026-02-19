/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        './app/**/*.{js,ts,jsx,tsx,mdx}',
        './components/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
        extend: {
            colors: {
                anima: {
                    'verde-profundo': '#1a3a2a',
                    'verde-musgo': '#2d5a3d',
                    'verde-brote': '#4a8c5c',
                    'verde-claro': '#7bc47f',
                    'dorado': '#c9a84c',
                    'dorado-claro': '#e8c97a',
                    'fondo-oscuro': '#0d1f15',
                    'fondo-claro': '#f5f2eb',
                    'texto-claro': '#f0ede4',
                    'texto-dorado': '#c9a84c',
                },
            },
            fontFamily: {
                serif: ['Playfair Display', 'Georgia', 'serif'],
                sans: ['Inter', 'system-ui', 'sans-serif'],
            },
            backgroundImage: {
                'gradient-anima': 'linear-gradient(135deg, #0d1f15 0%, #1a3a2a 50%, #0d1f15 100%)',
                'gradient-hero': 'radial-gradient(ellipse at center, #1a3a2a 0%, #0d1f15 70%)',
            },
            animation: {
                'shimmer': 'shimmer 2s linear infinite',
                'float': 'float 6s ease-in-out infinite',
            },
            keyframes: {
                shimmer: {
                    '0%': { backgroundPosition: '-200% center' },
                    '100%': { backgroundPosition: '200% center' },
                },
                float: {
                    '0%, 100%': { transform: 'translateY(0px)' },
                    '50%': { transform: 'translateY(-10px)' },
                },
            },
        },
    },
    plugins: [],
}
