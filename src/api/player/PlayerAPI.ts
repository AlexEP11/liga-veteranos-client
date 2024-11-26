import { isAxiosError } from "axios";
import { Player, PlayerInputForm } from "@/types";
import api from "@/lib/axios";

export async function uploadPDF({ file, equipo }: { file: File; equipo: Player["equipo"] }) {
    try {
        // Agregar el archivo y el equipo al FormData
        const formData = new FormData();
        formData.append("file", file as Blob);
        formData.append("equipo", equipo.toString());
        const { data } = await api.post("/upload_pdf/", formData, {
            headers: {
                "Content-Type": "multipart/form-data",
            },
        });
        return data;
    } catch (error) {
        if (isAxiosError(error)) {
            let errorMessage = "Ocurrió un error inesperado. Por favor, inténtelo de nuevo.";

            if (isAxiosError(error)) {
                if (error.message.includes("ERR_CONNECTION_REFUSED")) {
                    errorMessage =
                        "No se pudo establecer una conexión con el servidor. Por favor, inténtelo de nuevo más tarde.";
                } else if (error.response) {
                    // Extraer el mensaje de error del backend
                    errorMessage = error.response.data.error || errorMessage;
                }
            }

            throw new Error(errorMessage); // Lanzamos el error con el mensaje adecuado
        }
    }
}

export async function registerPlayer(playerData: PlayerInputForm) {
    try {
        const formData = new FormData();

        // Agregar todos los campos al FormData
        formData.append("equipo", playerData.equipo.toString());
        formData.append("curp", playerData.curp);
        formData.append("nombre", playerData.nombre);
        formData.append("apellido_paterno", playerData.apellido_paterno);
        formData.append("apellido_materno", playerData.apellido_materno);
        formData.append("categoria", playerData.categoria.toString());
        formData.append("fecha_nacimiento", playerData.fecha_nacimiento);

        // Archivos opcionales
        if (playerData.foto) formData.append("foto", playerData.foto);
        if (playerData.ine) formData.append("ine", playerData.ine);
        if (playerData.curpFile) formData.append("file", playerData.curpFile); // Asegúrate de usar el nombre correcto

        // Enviar la petición POST con FormData
        const { data } = await api.post("/players/", formData, {
            headers: {
                "Content-Type": "multipart/form-data",
            },
        });
        return data;
    } catch (error) {
        let errorMessage = "Ocurrió un error inesperado. Por favor, inténtelo de nuevo.";

        if (isAxiosError(error)) {
            if (error.message.includes("ERR_CONNECTION_REFUSED")) {
                errorMessage =
                    "No se pudo establecer una conexión con el servidor. Por favor, inténtelo de nuevo más tarde.";
            } else if (error.response) {
                // Extraer el mensaje de error del backend
                errorMessage = error.response.data.error || errorMessage;
            }
        }

        throw new Error(errorMessage); // Lanzamos el error con el mensaje adecuado
    }
}
