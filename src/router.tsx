import { BrowserRouter, Route, Routes } from "react-router-dom";
import AppLayout from "./layout/AppLayout";
import RegisterPlayerPage from "./pages/RegisterPlayerPage";
import LogHistoryPage from "./pages/LogHistoryPage";

export default function Router() {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    {/* <Route element={<AppLayout />}>
                        <Route element={<LoginPage />} path="/" />
                    </Route> */}
                    <Route element={<AppLayout />}>
                        <Route element={<RegisterPlayerPage />} index path="/" />
                        <Route element={<LogHistoryPage />} path="/historial-registros" />
                    </Route>
                </Routes>
            </BrowserRouter>
        </>
    );
}
