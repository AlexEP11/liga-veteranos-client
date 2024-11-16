import { Avatar, BottomNavigation, BottomNavigationAction, Box } from "@mui/material";
import { Link } from "react-router-dom";
import RestoreIcon from "@mui/icons-material/Restore";
import HowToRegIcon from "@mui/icons-material/HowToReg";

export default function Header() {
    return (
        <>
            <header className="hidden md:flex justify-between p-5 mb-5 items-center px-10 bg-gradient-to-b to-[#ffffff]/100 via-[#c8eccc]/50 from-[#c4eccc]/100">
                <div className="flex gap-10 font-roboto font-semibold text-lg">
                    <Link
                        to="/"
                        className="relative transition-all duration-300 ease-in-out hover:scale-110 hover:text-[#517a63]"
                    >
                        <span className="after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-0 after:bg-[#517a63] after:transition-all after:duration-300 after:hover:w-full">
                            Registrar
                        </span>
                    </Link>
                    <Link
                        to="/historial-registros"
                        className="relative transition-all duration-300 ease-in-out hover:scale-110 hover:text-[#517a63]"
                    >
                        <span className="after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-0 after:bg-[#517a63] after:transition-all after:duration-300 after:hover:w-full">
                            Historial de Registros
                        </span>
                    </Link>
                </div>
                <div className="flex gap-5 items-center">
                    <p className="font-roboto font-semibold">Equipo</p>
                    <Avatar sx={{ bgcolor: "black", color: "white" }}>AV</Avatar>
                </div>
            </header>

            <Box className="md:hidden fixed bottom-0 left-0 right-0 z-50">
                <BottomNavigation
                    showLabels
                    sx={{
                        background: "white",
                        "& .MuiBottomNavigationAction-root": {
                            color: "#000000",
                        },
                    }}
                >
                    {/* Registrar con enlace */}
                    <BottomNavigationAction
                        label="Registrar"
                        icon={<HowToRegIcon />}
                        component={Link}
                        to="/"
                    />
                    {/* Historial con enlace */}
                    <BottomNavigationAction
                        label="Historial"
                        icon={<RestoreIcon />}
                        component={Link}
                        to="/historial-registros"
                    />
                    {/* Perfil con enlace */}
                    <BottomNavigationAction
                        icon={
                            <Avatar
                                sx={{ bgcolor: "black", color: "white", width: 32, height: 32 }}
                            >
                                AV
                            </Avatar>
                        }
                        component={Link}
                        to="/perfil"
                    />
                </BottomNavigation>
            </Box>
        </>
    );
}
