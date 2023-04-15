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
            greyDark: "#232323",
            greyLight: "#2F2F2F",
            success: "#5D9A5A",
            error: "#E96060",
            transparent: "transparent"
        },
        fontFamily: {
            title: ['Nunito', 'sans-serif'],
            text: ['PT Sans', 'sans-serif']
        }
    },
    plugins: [
        require('tailwind-scrollbar')({ nocompatible: true }),
    ],
}

