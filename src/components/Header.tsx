import {
    Avatar,
    Box,
    Drawer,
    List,
    ListItem,
    ListItemButton,
    ListItemIcon,
    ListItemText,
    Divider,
    IconButton,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import GroupAddIcon from "@mui/icons-material/GroupAdd";
import HistoryIcon from "@mui/icons-material/History";
import { Link } from "react-router-dom";
import { useState } from "react";
import { usePlayer } from "../hooks/usePlayer";

export default function Header() {
    const { playerData } = usePlayer();
    const [openDrawer, setOpenDrawer] = useState(false);

    const toggleDrawer = (open: boolean) => () => {
        setOpenDrawer(open);
    };

    const drawerList = (
        <Box sx={{ width: 250 }} role="presentation" onClick={toggleDrawer(false)}>
            <List>
                <ListItem disablePadding>
                    <ListItemButton component={Link} to="/">
                        <ListItemIcon>
                            <Avatar
                                sx={{ bgcolor: "black", color: "white", width: 35, height: 35 }}
                            >
                                AV
                            </Avatar>
                        </ListItemIcon>
                        <ListItemText primary={playerData.equipo || "Equipo Desconocido"} />
                    </ListItemButton>
                </ListItem>
            </List>
            <Divider />
            <List>
                <ListItem disablePadding>
                    <ListItemButton component={Link} to="/">
                        <ListItemIcon>
                            <GroupAddIcon sx={{ color: "black" }} />
                        </ListItemIcon>
                        <ListItemText primary="Registrar" />
                    </ListItemButton>
                </ListItem>
                <ListItem disablePadding>
                    <ListItemButton component={Link} to="/historial-registros">
                        <ListItemIcon>
                            <HistoryIcon sx={{ color: "black" }} />
                        </ListItemIcon>
                        <ListItemText primary="Historial de Registros" />
                    </ListItemButton>
                </ListItem>
            </List>
        </Box>
    );

    return (
        <>
            <header className="hidden md:flex justify-between p-5 mb-5 items-center px-10 ">
                <div className="flex gap-10 font-roboto font-semibold text-lg transition-all">
                    <Link to="/" className="hover:scale-105 duration-300">
                        Registrar
                    </Link>
                    <Link to="/historial-registros" className="hover:scale-105 duration-300">
                        Historial de Registros
                    </Link>
                </div>
                <div className="flex gap-5 items-center">
                    <p className="font-roboto font-semibold">Equipo</p>
                    <Avatar sx={{ bgcolor: "black", color: "white" }}>AV</Avatar>
                </div>
            </header>

            <Box className="md:hidden">
                <IconButton onClick={toggleDrawer(true)} sx={{ color: "#000000" }}>
                    <MenuIcon fontSize="large" />
                </IconButton>
                <Drawer open={openDrawer} onClose={toggleDrawer(false)}>
                    {drawerList}
                </Drawer>
            </Box>
        </>
    );
}
