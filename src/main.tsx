import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { PlayerProvider } from "./context/PlayerContext";
import { DarkModeProvider } from "./context/DarkModeContext";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ToastContainer } from "react-toastify";
import Router from "./router";
import "./index.css";
import "react-toastify/dist/ReactToastify.css";
import { useDarkMode } from "./hooks/useDarkMode";
import { DarkModeTheme } from "./utils";

const queryClient = new QueryClient();

const App = () => {
    const { darkMode } = useDarkMode(); // Usar el hook aquí

    return (
        <>
            <QueryClientProvider client={queryClient}>
                <DarkModeTheme />

                <PlayerProvider>
                    <Router />
                </PlayerProvider>
            </QueryClientProvider>
            <ToastContainer
                theme={darkMode ? "dark" : "light"} // Aplicar tema dinámico
                closeOnClick
                hideProgressBar
                position="top-right"
            />
        </>
    );
};

createRoot(document.getElementById("root")!).render(
    <StrictMode>
        <DarkModeProvider>
            <App />
        </DarkModeProvider>
    </StrictMode>
);
