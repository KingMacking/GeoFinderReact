/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    darkMode: "class",
    theme: {
        extend: {},
        colors: {
            primary: "#D9132D",
            white: "#FCFCFC",
            black: "#171717",
            grey: "#2F2F2F",
            success: "#77D672",
            error: "#E96060"
        },
        fontFamily: {
            title: ['Nunito', 'sans-serif'],
            text: ['PT Sans', 'sans-serif']
        }
    },
    plugins: [],
}

