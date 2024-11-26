import { Slide } from "@mui/material";
import { useDarkMode } from "../hooks/useDarkMode";
import { useEffect, useState } from "react";

export default function LogHistoryPage() {
    const { darkMode } = useDarkMode();

    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    return (
        <main className="space-y-5">
            <Slide direction="right" in={mounted} timeout={1500}>
                <h1
                    className={`${
                        darkMode ? "text-white" : "text-black"
                    } text-2xl text-center font-roboto font-bold`}
                >
                    Historial de Registros
                </h1>
            </Slide>
            <Slide direction="left" in={mounted} timeout={2000}>
                <section>{/* <TableLogHistory /> */}</section>
            </Slide>
        </main>
    );
}
