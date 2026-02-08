/** @type {import('tailwindcss').Config} */
export default {
    darkMode: 'class',
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                background: {
                    DEFAULT: "rgb(var(--color-background) / <alpha-value>)",
                    secondary: "rgb(var(--color-background-secondary) / <alpha-value>)",
                },
                foreground: {
                    DEFAULT: "rgb(var(--color-foreground) / <alpha-value>)",
                    muted: "rgb(var(--color-foreground-muted) / <alpha-value>)",
                },
                accent: {
                    DEFAULT: "rgb(var(--color-accent) / <alpha-value>)",
                    light: "rgb(var(--color-accent-light) / <alpha-value>)",
                },
                stone: {
                    50: "#FAFAF9",
                    100: "#F5F5F4",
                    400: "#A8A29E",
                    500: "#78716C",
                    700: "#57534E",
                    900: "#1C1917",
                }
            },
            fontFamily: {
                serif: ["Crimson Pro", "serif"],
                sans: ["Inter", "sans-serif"],
            },
            fontSize: {
                'display': ['4.5rem', { lineHeight: '1.1', fontWeight: '400' }],
                'heading-1': ['3rem', { lineHeight: '1.2', fontWeight: '400' }],
                'heading-2': ['2rem', { lineHeight: '1.3', fontWeight: '500' }],
                'body': ['1.125rem', { lineHeight: '1.8', fontWeight: '400' }],
            },
            animation: {
                'fade-in': 'fadeIn 1s ease-in-out',
                'slide-up': 'slideUp 0.8s ease-out',
            },
            keyframes: {
                fadeIn: {
                    '0%': { opacity: '0' },
                    '100%': { opacity: '1' },
                },
                slideUp: {
                    '0%': { opacity: '0', transform: 'translateY(20px)' },
                    '100%': { opacity: '1', transform: 'translateY(0)' },
                },
            },
        },
    },
    plugins: [],
}
