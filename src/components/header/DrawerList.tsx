import {
    Avatar,
    Box,
    Divider,
    List,
    ListItem,
    ListItemButton,
    ListItemIcon,
    ListItemText,
} from "@mui/material";
import GroupAddIcon from "@mui/icons-material/GroupAdd";
import HistoryIcon from "@mui/icons-material/History";
import { Link } from "react-router-dom";
import { useDarkMode } from "../../hooks/useDarkMode";

type DrawerListProps = {
    playerData: { equipo: string };
    toggleDrawer: (open: boolean) => () => void;
};

export default function DrawerList({ playerData, toggleDrawer }: DrawerListProps) {
    const { darkMode } = useDarkMode();

    return (
        <Box
            sx={{
                width: 250,
                backgroundColor: darkMode ? "#0e141b" : "white", // Fondo de la caja según darkMode
                color: darkMode ? "white" : "black", // Color del texto según darkMode
                height: "100vh",
            }}
            role="presentation"
            onClick={toggleDrawer(false)}
        >
            <List>
                <ListItem disablePadding>
                    <ListItemButton component={Link} to="/">
                        <ListItemIcon>
                            <Avatar
                                sx={{
                                    bgcolor: darkMode ? "white" : "black", // Fondo del Avatar según darkMode
                                    color: darkMode ? "black" : "white", // Color del texto dentro del Avatar
                                    width: 35,
                                    height: 35,
                                }}
                            >
                                AV
                            </Avatar>
                        </ListItemIcon>
                        <ListItemText
                            primary={playerData.equipo || "Equipo Desconocido"}
                            sx={{ color: darkMode ? "white" : "black" }} // Color del texto según darkMode
                        />
                    </ListItemButton>
                </ListItem>
            </List>
            <Divider className={`${darkMode ? "bg-white" : "bg-black"}`} />
            <List>
                <ListItem disablePadding>
                    <ListItemButton component={Link} to="/">
                        <ListItemIcon>
                            <GroupAddIcon sx={{ color: darkMode ? "white" : "black" }} />{" "}
                        </ListItemIcon>
                        <ListItemText
                            primary="Registrar"
                            sx={{ color: darkMode ? "white" : "black" }}
                        />
                    </ListItemButton>
                </ListItem>
                <ListItem disablePadding>
                    <ListItemButton component={Link} to="/historial-registros">
                        <ListItemIcon>
                            <HistoryIcon sx={{ color: darkMode ? "white" : "black" }} />{" "}
                        </ListItemIcon>
                        <ListItemText
                            primary="Historial de Registros"
                            sx={{ color: darkMode ? "white" : "black" }}
                        />
                    </ListItemButton>
                </ListItem>
            </List>
        </Box>
    );
}
