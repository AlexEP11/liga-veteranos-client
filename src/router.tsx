import { BrowserRouter, Route, Routes } from "react-router-dom";
import AppLayout from "./layout/AppLayout";

export default function Router() {
    return (
        <BrowserRouter>
            <Routes>
                {/* Poner Auth view */}
                <Route element={<AppLayout />} path="/" />
            </Routes>
        </BrowserRouter>
    );
}
