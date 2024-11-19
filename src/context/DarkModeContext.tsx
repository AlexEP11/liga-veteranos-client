import { createContext, ReactNode, useState } from "react";

type DarkModeProviderProps = {
    children: ReactNode;
};
type DarkModeContextType = {
    darkMode: boolean;
    setDarkMode: (darkMode: boolean) => void;
};

export const DarkModeContext = createContext<DarkModeContextType>(null!);
export const DarkModeProvider = ({ children }: DarkModeProviderProps) => {
    const [darkMode, setDarkMode] = useState(false);

    return (
        <DarkModeContext.Provider value={{ darkMode, setDarkMode }}>
            {children}
        </DarkModeContext.Provider>
    );
};
