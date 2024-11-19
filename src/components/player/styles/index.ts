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
        borderColor: darkMode ? "white" : undefined, // Borde del contorno
    },
    "& .MuiFormHelperText-root": {
        color: darkMode ? "white" : undefined, // Texto de ayuda
    },
    "& .MuiSelect-icon": {
        color: darkMode ? "white" : "black", // Color del icono desplegable
    },
    "& .MuiSelect-select.MuiSelect-select": {
        color: darkMode ? "white" : "black", // Color del texto seleccionado en el Select
    },
});
