import { Outlet } from "react-router-dom";
import BackGround from "../components/Background";

export default function AppLayout() {
    return (
        <>
            <BackGround />

            <main className="container max-w-screen-xl mx-auto mt-10 p-5">
                <Outlet />
            </main>
        </>
    );
}
