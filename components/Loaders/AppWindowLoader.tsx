'use client';
import { useEffect, useState } from 'react';
import {useAppWindow} from "@/context/AppWindowContext";
import styles from "@/components/AppWindows/app-windows.module.css"
import clsx from "clsx";
import TitleBar from "@/components/AppWindows/TitleBar";
export default function AppWindowLoader() {
    const [dots, setDots] = useState('   ');
    const { appWindow } = useAppWindow();
    useEffect(() => {
        // console.log('PageLoader mounted');
        const frames = ['   ', '.  ', '.. ', '...'];
        let idx = 0;

        const intervalId = window.setInterval(() => {
            // console.log('frame', idx, '→', frames[idx]);
            idx = (idx + 1) % frames.length;
            setDots(frames[idx]);
        }, 300);

        return () => {
            // window.console.log('PageLoader unmounted, clearing interval');
            clearInterval(intervalId);
        };
    }, []);

    return (
        <div className={clsx(
            styles.appWindow,
        )}>
            <TitleBar/>
           <pre className="text-white text-lg pl-1 pt-1 font-mono font-bold"
                >Loading {appWindow}{dots}</pre>
        </div>
    );
}