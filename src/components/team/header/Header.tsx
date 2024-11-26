import { Avatar, Box, Drawer, IconButton } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { Link } from "react-router-dom";
import { useState } from "react";
import { usePlayer } from "@/hooks/usePlayer";
import DrawerList from "./DrawerList";
import DarkModeButton from "./DarkModeButton";
import { useDarkMode } from "@/hooks/useDarkMode";

export default function Header() {
    const { playerData } = usePlayer();
    const { darkMode } = useDarkMode();
    const [openDrawer, setOpenDrawer] = useState(false);

    const toggleDrawer = (open: boolean) => () => {
        setOpenDrawer(open);
    };

    return (
        <>
            <header className="hidden md:flex justify-between p-5 mb-5 items-center px-10">
                <div
                    className={`flex gap-10 font-roboto font-semibold text-lg transition-all  items-center ${
                        darkMode ? "text-white" : "text-black"
                    }`}
                >
                    <DarkModeButton />
                    <Link to="/" className="hover:scale-105 duration-300">
                        Registrar
                    </Link>
                    <Link to="/historial-registros" className="hover:scale-105 duration-300">
                        Historial de Registros
                    </Link>
                </div>
                <div className="flex gap-5 items-center">
                    <p
                        className={`font-roboto font-semibold ${
                            darkMode ? "text-white" : "text-black"
                        }`}
                    >
                        Equipo
                    </p>
                    <Avatar
                        sx={{
                            bgcolor: darkMode ? "white" : "black", // Fondo del Avatar cambia con el modo
                            color: darkMode ? "black" : "white", // Color del texto dentro del Avatar
                        }}
                    >
                        AV
                    </Avatar>
                </div>
            </header>

            <Box className="md:hidden flex justify-between">
                <IconButton onClick={toggleDrawer(true)} sx={{ color: "#000000" }}>
                    <MenuIcon
                        fontSize="large"
                        className={`${darkMode ? "text-white" : "text-black"}`}
                    />
                </IconButton>
                <Drawer open={openDrawer} onClose={toggleDrawer(false)}>
                    <DrawerList playerData={playerData} toggleDrawer={toggleDrawer} />
                </Drawer>

                <DarkModeButton />
            </Box>
        </>
    );
}
