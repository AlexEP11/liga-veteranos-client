/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            backgroundColor: {},
            fontFamily: {
                roboto: ["Roboto", "sans-serif"], // Agrega Roboto como una opción de fuente
            },
        },
    },
    plugins: [],
};
