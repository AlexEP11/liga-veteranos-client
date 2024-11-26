import { Box, FormControl, Input, InputAdornment, InputLabel } from "@mui/material";
import AccountCircle from "@mui/icons-material/AccountCircle";
import { useDarkMode } from "@/hooks/useDarkMode";

export default function LoginForm() {
    const { darkMode } = useDarkMode();
    return (
        <Box
            component="form"
            autoComplete="off"
            noValidate
            className={`py-5 px-1 sm:px-16 rounded-xl shadow-xl transition-colors duration-300 ${
                darkMode ? "bg-dark_mode_secondary text-white" : "bg-white text-black"
            }`}
        >
            <FormControl>
                <InputLabel>Usuario</InputLabel>
                <Input
                    startAdornment={
                        <InputAdornment position="start">
                            <AccountCircle />
                        </InputAdornment>
                    }
                />
            </FormControl>
        </Box>
    );
}
