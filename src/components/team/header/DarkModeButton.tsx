import { IconButton } from "@mui/material";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import LightModeIcon from "@mui/icons-material/LightMode";
import { useDarkMode } from "@/hooks/useDarkMode";

export default function DarkModeButton() {
    const { darkMode, setDarkMode } = useDarkMode();

    const toggleDarkMode = () => {
        setDarkMode(!darkMode);
    };

    return (
        <IconButton onClick={toggleDarkMode}>
            {darkMode ? (
                <LightModeIcon
                    sx={{ color: "#efd521", transition: "all", animationDuration: "2s" }}
                />
            ) : (
                <DarkModeIcon sx={{ color: "black", transition: "all", animationDuration: "2s" }} />
            )}
        </IconButton>
    );
}
