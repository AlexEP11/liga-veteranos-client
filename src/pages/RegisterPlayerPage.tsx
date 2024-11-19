import { Zoom } from "@mui/material";
import { useEffect, useState } from "react";
import CardPlayer from "../components/CardPlayer";
import FormPlayer from "../components/FormPlayer";
import "@fontsource/roboto/400.css";
export default function RegisterPlayerPage() {
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    return (
        <>
            <div className="flex flex-col gap-8 lg:flex-row md:gap-32 items-center px-4 md:px-0">
                {mounted && (
                    <Zoom in={mounted} timeout={2000} style={{ transitionDelay: "500ms" }}>
                        <div>
                            <FormPlayer />
                        </div>
                    </Zoom>
                )}
                {mounted && (
                    <Zoom in={mounted} timeout={2500} style={{ transitionDelay: "800ms" }}>
                        <div className="hidden md:block">
                            <CardPlayer />
                        </div>
                    </Zoom>
                )}
            </div>
        </>
    );
}
