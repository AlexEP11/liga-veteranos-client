import { Outlet } from "react-router-dom";
import BackGround from "@/components/Background";
import Header from "@/components/team/header/Header";

export default function AppLayout() {
    return (
        <>
            <Header />
            <div className="relative min-h-screen h-full overflow-auto">
                {/* Contenedor del fondo */}
                <div className="absolute inset-0 -z-10">
                    <BackGround />
                </div>
                {/* Contenedor principal */}
                <main className="container max-w-screen-xl mx-auto mt-10 p-5 relative z-10">
                    <Outlet />
                </main>
            </div>
        </>
    );
}
