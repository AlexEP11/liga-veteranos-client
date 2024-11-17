import { createContext, useState } from "react";
import { Player } from "../types";

type PlayerProviderProps = {
    children: React.ReactNode;
};

type PlayerContextType = {
    playerData: Player;
    setPlayerData: (data: Player) => void;
};

export const PlayerContext = createContext<PlayerContextType>(null!);

export const PlayerProvider = ({ children }: PlayerProviderProps) => {
    const [playerData, setPlayerData] = useState<Player>({
        equipo: "",
        carnet: "",
        curp: "",
        nombre: "",
        apellido_paterno: "",
        apellido_materno: "",
        categoria: "",
        fecha_nacimiento: "",
        años_registro: 0,
        foto: null,
        ine: null,
        curpFile: null,
    });

    return (
        <PlayerContext.Provider value={{ playerData, setPlayerData }}>
            {children}
        </PlayerContext.Provider>
    );
};
