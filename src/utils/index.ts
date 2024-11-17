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
