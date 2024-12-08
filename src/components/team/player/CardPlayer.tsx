import { Box } from "@mui/material";
import { usePlayer } from "@/hooks/usePlayer";
import { calcularEdad } from "@/utils";
import { useDarkMode } from "@/hooks/useDarkMode";

export default function CardPlayer() {
    const { playerData } = usePlayer();
    const { darkMode } = useDarkMode();

    const borderColors: Record<"1" | "2" | "3", string> = {
        "1": "border-[#30b480]", // Verde
        "2": "border-[#1c74d4]", // Azul
        "3": "border-[#c42c2c]", // Rojo
    };

    const categories = () => {
        switch (playerData.categoria.toString()) {
            case "1":
                return "Master";
            case "2":
                return "Golden";
            case "3":
                return "Diamante";
            default:
                return "???";
        }
    };

    const borderColor = borderColors[playerData.categoria as "1" | "2" | "3"] || "border-black";

    return (
        <div className="flex-col items-center">
            <h2
                className={`font-roboto text-center mb-5 font-bold text-xl ${
                    darkMode ? "text-white" : "text-black"
                }`}
            >
                Previsualización de Credencial
            </h2>
            <Box
                className={`p-5 rounded-2xl shadow-md shadow-black/50 border-4 ${borderColor}`}
                style={{
                    width: "550px",
                    height: "360px",
                    backgroundImage: `url('/fondo-tarjeta.png')`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    position: "relative",
                    overflow: "hidden",
                    display: "flex",
                    flexDirection: "column",
                }}
            >
                <h3 className="uppercase text-xs text-center font-bold mb-1">
                    Liga de Veteranos Independientes de Ciudad Guzman
                </h3>
                <p className="uppercase text-xs text-center font-bold">
                    Certifica el equipo: {playerData.equipo ? playerData.equipo : "???"}
                </p>

                <p className="uppercase text-xs text-left font-bold mb-2">
                    Carnet: <br /> {playerData.carnet ? playerData.carnet : "???"}
                </p>

                <div className="flex gap-2">
                    <div className="flex flex-col gap-10 " style={{ flexShrink: 0 }}>
                        <img
                            src={
                                playerData.foto
                                    ? URL.createObjectURL(playerData.foto)
                                    : "/foto-default.png"
                            }
                            alt="Foto de previsualización"
                            className={`rounded-3xl border-4 ${borderColor}`}
                            style={{
                                width: "160px",
                                height: "185px",
                                objectFit: "cover",
                                flexShrink: 0,
                            }}
                        />
                        <p className="uppercase text-xs text-center font-bold ">Firma Jugador</p>
                    </div>

                    <div style={{ flexGrow: 1 }}>
                        <p className="uppercase text-xs text-left font-bold mb-2 break-words">
                            Registra al jugador:{" "}
                            {`${playerData.nombre} ${playerData.apellido_paterno} ${playerData.apellido_materno}`}
                        </p>

                        <div className="flex text-center justify-start items-center gap-5 mb-6">
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
                                    {categories()}
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
                            <img
                                src="/firma-presidente.png"
                                alt=""
                                className="absolute left-5 bottom-0 h-16 w-32 z-10"
                            />

                            <img
                                src="/firma-secretario.png"
                                alt=""
                                className="absolute right-8 bottom-1 h-14 w-28 z-10"
                            />

                            <div className="flex justify-around mt-10">
                                <p className="uppercase text-xs text-left font-bold">
                                    Presidente Equipo
                                </p>
                                <p className="uppercase text-xs text-left font-bold">
                                    Secretario Equipo
                                </p>
                            </div>
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
