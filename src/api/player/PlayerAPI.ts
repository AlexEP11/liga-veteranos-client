import { isAxiosError } from "axios";
import { Player } from "../../types";
import api from "../../lib/axios";

export async function uploadPDF(file: Player["curpFile"]) {
    try {
        const curpFile = new FormData();
        curpFile.append("file", file as Blob);
        const { data } = await api.post("/upload_pdf/", curpFile, {
            headers: {
                "Content-Type": "multipart/form-data",
            },
        });
        return data;
    } catch (error) {
        if (isAxiosError(error)) {
            if (error.message.includes("ERR_CONNECTION_REFUSED")) {
                throw new Error(
                    "No se pudo establecer una conexión con el servidor. Por favor, inténtelo de nuevo más tarde."
                );
            }
            if (error.response) {
                throw new Error(error.response.data.message);
            }
        }
        throw new Error("Ocurrió un error inesperado. Por favor, inténtelo de nuevo.");
    }
}
