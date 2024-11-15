import { BrowserRouter, Route, Routes } from "react-router-dom";
import AppLayout from "./layout/AppLayout";
import RegisterPlayerPage from "./pages/RegisterPlayerPage";

export default function Router() {
    return (
        <BrowserRouter>
            <Routes>
                {/* Poner Auth view */}
                <Route element={<AppLayout />}>
                    <Route element={<RegisterPlayerPage />} index path="/" />
                </Route>
            </Routes>
        </BrowserRouter>
    );
}
