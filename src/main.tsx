import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import Router from "./router";
import { PlayerProvider } from "./context/PlayerContext";

createRoot(document.getElementById("root")!).render(
    <StrictMode>
        <PlayerProvider>
            <Router />
        </PlayerProvider>
    </StrictMode>
);
