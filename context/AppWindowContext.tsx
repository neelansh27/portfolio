'use client';
import {createContext, ReactNode, FC, useState, useContext} from "react";

interface AppWindowContextValue {
    appWindow: string | null,
    switchWindow: (winName: string | null) => void,
}

const AppWindowContext = createContext<AppWindowContextValue | null>(null);

export const useAppWindow = () => {
    const ctx = useContext(AppWindowContext);
    if (ctx === null) {
        throw new Error("useAppWindow must be used within the AppWindowContext");
    }
    return ctx;
};

export const AppWindowProvider: FC<{ children:ReactNode }> = ({children}) => {
    const [appWindow, setAppWindow] = useState<string | null>(null);

    // This can also be use to close a window by switching it to null
    const switchWindow = (winName: string | null) => {
        // console.table({appWindow, winName})
        setAppWindow(winName);
    };
    return (
        <AppWindowContext.Provider value={{appWindow, switchWindow}} >
            { children }
        </AppWindowContext.Provider>
    )
}