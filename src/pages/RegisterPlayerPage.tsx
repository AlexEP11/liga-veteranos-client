import CardPlayer from "../components/CardPlayer";
import FormPlayer from "../components/FormPlayer";
import "@fontsource/roboto/400.css";
export default function RegisterPlayerPage() {
    return (
        <>
            <div className="flex flex-col gap-8 lg:flex-row md:gap-32 items-center px-4 md:px-0 ">
                <FormPlayer />
                <div className="hidden md:block">
                    <CardPlayer />
                </div>
            </div>
        </>
    );
}
