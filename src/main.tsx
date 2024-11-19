import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { PlayerProvider } from "./context/PlayerContext";
import { DarkModeProvider } from "./context/DarkModeContext";
import "./index.css";
import Router from "./router";

createRoot(document.getElementById("root")!).render(
    <StrictMode>
        <DarkModeProvider>
            <PlayerProvider>
                <Router />
            </PlayerProvider>
        </DarkModeProvider>
    </StrictMode>
);
