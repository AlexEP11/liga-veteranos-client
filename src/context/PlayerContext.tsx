import { createContext, useState } from "react";
import { Player } from "../types";

type PlayerProviderProps = {
    children: React.ReactNode;
};

type PlayerContextType = {
    playerData: Player;
    setPlayerData: (data: Player) => void;
    initialValuesPlayer: Player;
};

export const PlayerContext = createContext<PlayerContextType>(null!);

export const PlayerProvider = ({ children }: PlayerProviderProps) => {
    const initialValuesPlayer: Player = {
        equipo: 0,
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
    };
    const [playerData, setPlayerData] = useState<Player>(initialValuesPlayer);

    return (
        <PlayerContext.Provider value={{ playerData, setPlayerData, initialValuesPlayer }}>
            {children}
        </PlayerContext.Provider>
    );
};
