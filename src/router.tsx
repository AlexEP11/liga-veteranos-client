import { BrowserRouter, Route, Routes } from "react-router-dom";
import { DarkModeProvider } from "./context/DarkModeContext";
import { DarkModeTheme } from "./utils";
import AppLayout from "./layout/AppLayout";
import RegisterPlayerPage from "./pages/RegisterPlayerPage";

export default function Router() {
    return (
        <DarkModeProvider>
            <DarkModeTheme />
            <BrowserRouter>
                <Routes>
                    <Route element={<AppLayout />}>
                        <Route element={<RegisterPlayerPage />} index path="/" />
                    </Route>
                </Routes>
            </BrowserRouter>
        </DarkModeProvider>
    );
}
