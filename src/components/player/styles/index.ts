export const inputStyles = (darkMode: boolean) => ({
    "& .MuiInputLabel-root": {
        color: darkMode ? "white" : undefined, // Etiqueta en color blanco en darkMode
    },
    "& .MuiOutlinedInput-root": {
        color: darkMode ? "white" : undefined, // Texto dentro del campo de texto
        borderColor: darkMode ? "white" : undefined, // Borde normal blanco en darkMode
    },
    "& .MuiOutlinedInput-root.Mui-focused": {
        borderColor: darkMode ? "white !important" : undefined, // Borde blanco cuando está enfocado
    },
    "& .MuiOutlinedInput-notchedOutline": {
        borderColor: darkMode ? "#13171c" : undefined, // Borde del contorno
    },

    "& .MuiSelect-icon": {
        color: darkMode ? "white" : "black", // Color del icono desplegable
    },

    // Para campos deshabilitados
    "& .MuiOutlinedInput-root.Mui-disabled .MuiOutlinedInput-input": {
        color: darkMode ? "rgba(255, 255, 255, 0.5) !important" : "rgba(0, 0, 0, 0.38) !important", // Usa !important
        WebkitTextFillColor: darkMode
            ? "rgba(255, 255, 255, 0.5) !important"
            : "rgba(0, 0, 0, 0.38) !important", // Cambié kebab-case a camelCase
    },
    "& .MuiOutlinedInput-root.Mui-disabled": {
        borderColor: darkMode
            ? "rgba(255, 255, 255, 0.5) !important"
            : "rgba(0, 0, 0, 0.23) !important",
    },
});
