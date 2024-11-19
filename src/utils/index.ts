import { useEffect } from "react";
import { useDarkMode } from "../hooks/useDarkMode";

export function calcularEdad(fechaNacimiento: string) {
    const fechaNac = new Date(fechaNacimiento);
    const fechaActual = new Date();

    let edad = fechaActual.getFullYear() - fechaNac.getFullYear();

    // Ajusta si el cumpleaños aún no ha ocurrido este año
    const mesActual = fechaActual.getMonth();
    const diaActual = fechaActual.getDate();

    const mesNacimiento = fechaNac.getMonth();
    const diaNacimiento = fechaNac.getDate();

    if (mesActual < mesNacimiento || (mesActual === mesNacimiento && diaActual < diaNacimiento)) {
        edad--;
    }

    return edad;
}

export function DarkModeTheme() {
    const { darkMode } = useDarkMode();

    useEffect(() => {
        const body = document.body;

        if (darkMode) {
            body.classList.add("bg-dark_mode_primary", "transition-colors", "duration-300");
        } else {
            body.classList.remove("bg-dark_mode_primary");
        }

        // Cleanup opcional (útil si el componente se desmonta)
        return () => {
            body.classList.remove("bg-dark_mode_primary");
        };
    }, [darkMode]);

    return null; // No renderiza nada visible
}
