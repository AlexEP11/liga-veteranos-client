import { BrowserRouter, Route, Routes } from "react-router-dom";
import { DarkModeProvider } from "./context/DarkModeContext";
import { DarkModeTheme } from "./utils";
import AppLayout from "./layout/AppLayout";
import RegisterPlayerPage from "./pages/RegisterPlayerPage";
import LogHistoryPage from "./pages/LogHistoryPage";

export default function Router() {
    return (
        <DarkModeProvider>
            <DarkModeTheme />
            <BrowserRouter>
                <Routes>
                    <Route element={<AppLayout />}>
                        <Route element={<RegisterPlayerPage />} index path="/" />
                        <Route element={<LogHistoryPage />} path="/historial-registros" />
                    </Route>
                </Routes>
            </BrowserRouter>
        </DarkModeProvider>
    );
}
