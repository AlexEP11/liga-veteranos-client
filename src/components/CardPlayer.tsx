import { Box } from "@mui/material";
import { usePlayer } from "../hooks/usePlayer";
import { calcularEdad } from "../utils";

export default function CardPlayer() {
    const { playerData } = usePlayer();
    console.log(new Date(playerData.fecha_nacimiento).getUTCFullYear());
    return (
        <div className="flex-col items-center ">
            <h2 className="font-roboto text-center font-bold text-xl">
                Previsualización de Credencial
            </h2>
            <Box
                className={`p-5  rounded-md shadow-lg border-4 ${
                    playerData.categoria === "1"
                        ? "border-green-600"
                        : playerData.categoria === "2"
                        ? "border-blue-600"
                        : playerData.categoria === "3"
                        ? "border-red-600"
                        : "border-black"
                } p`}
                style={{
                    width: "550px",
                    height: "360px",
                    backgroundImage: `url('/fondo-tarjeta.png')`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                }}
            >
                <h3 className="uppercase text-xs text-center font-bold mb-1">
                    Liga de Veteranos Independientes de Ciudad Guzman
                </h3>
                <p className="uppercase text-xs text-center font-bold">
                    Cerrtifica el equipo: {playerData.equipo ? playerData.equipo : "???"}
                </p>

                <p className="uppercase text-xs text-left font-bold mb-2">
                    Carnet: <br /> {playerData.carnet ? playerData.carnet : "???"}
                </p>

                <div className="flex gap-2">
                    {playerData.foto ? (
                        <div className="flex flex-col">
                            <img
                                src={URL.createObjectURL(playerData.foto)}
                                alt="Foto de previsualización"
                                className={`rounded-3xl border-4 ${
                                    playerData.categoria === "1"
                                        ? "border-green-600"
                                        : playerData.categoria === "2"
                                        ? "border-blue-600"
                                        : playerData.categoria === "3"
                                        ? "border-red-600"
                                        : "border-black"
                                }`}
                                style={{
                                    width: "160px",
                                    height: "185px",
                                    objectFit: "cover",
                                }}
                            />
                            <p className="uppercase text-xs text-center mt-[47px] font-bold ">
                                Firma Jugador
                            </p>
                        </div>
                    ) : (
                        <div className="flex flex-col">
                            <img
                                src="/foto-default.jpg"
                                alt="Foto de previsualización"
                                className={`rounded-3xl border-4 ${
                                    playerData.categoria === "1"
                                        ? "border-green-800"
                                        : playerData.categoria === "2"
                                        ? "border-blue-800"
                                        : playerData.categoria === "3"
                                        ? "border-red-800"
                                        : "border-black"
                                }`}
                                style={{
                                    width: "160px",
                                    height: "185px",
                                    objectFit: "cover",
                                }}
                            />
                            <p className="uppercase text-xs text-center mt-[47px] font-bold ">
                                Firma Jugador
                            </p>
                        </div>
                    )}

                    <div>
                        <p className="uppercase text-xs text-left font-bold mb-2">
                            Registra al jugador:{" "}
                            {`${playerData.nombre} ${playerData.apellido_paterno} ${playerData.apellido_materno}`}
                        </p>

                        <div className="flex text-center justify-center items-center gap-5 mb-6">
                            <p className="uppercase text-xs text-left font-bold flex flex-col">
                                Temporada:{" "}
                                <span className="justify-center items-center flex">
                                    {`${new Date().getFullYear()} - ${
                                        new Date().getFullYear() + 1
                                    }`}
                                </span>
                            </p>
                            <p className="uppercase text-xs text-left font-bold flex flex-col">
                                Categoria:{" "}
                                <span className="justify-center items-center flex">
                                    {playerData.categoria || "???"}
                                </span>
                            </p>
                            <p className="uppercase text-xs text-left font-bold flex flex-col">
                                Fecha de Nacimiento:{" "}
                                <span className="justify-center items-center flex">
                                    {playerData.fecha_nacimiento
                                        ? new Date(
                                              playerData.fecha_nacimiento + "T00:00:00"
                                          ).toLocaleDateString()
                                        : "???"}
                                </span>
                            </p>
                        </div>
                        <p className="uppercase text-xs text-left font-bold mb-2">
                            CURP: {playerData.curp || "???"}
                        </p>
                        <p className="uppercase text-xs text-left font-bold mb-2">
                            Años al registro:{" "}
                            {playerData.fecha_nacimiento
                                ? calcularEdad(playerData.fecha_nacimiento)
                                : "???"}
                        </p>

                        <div className="flex flex-col justify-center text-center relative">
                            <div className="flex justify-around mt-10">
                                <p className="uppercase text-xs text-left font-bold mb-2">
                                    Presidente Equipo
                                </p>
                                <p className="uppercase text-xs text-left font-bold mb-2">
                                    Secretario Equipo
                                </p>
                            </div>

                            <img
                                src="/firma-presidente.png"
                                alt=""
                                className="absolute  -bottom-2 left-3 h-24 w-32 z-10"
                            />

                            <img
                                src="/firma-secretario.png"
                                alt=""
                                className="absolute  -bottom-1 right-0 h-20 w-40 z-10"
                            />

                            <div className="flex justify-around mt-10">
                                <p className="uppercase text-xs text-left font-bold">
                                    Presidente Liga
                                </p>
                                <p className="uppercase text-xs text-left font-bold">
                                    Secretario Liga
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </Box>
        </div>
    );
}
