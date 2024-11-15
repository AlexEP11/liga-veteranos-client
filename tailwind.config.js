/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            backgroundColor: {
                white_smoke: "#F5F5F5",
            },
            fontFamily: {
                roboto: ["Roboto", "sans-serif"], // Agrega Roboto como una opción de fuente
            },
        },
    },
    plugins: [],
};
