'use client';
import { useAppWindow } from "@/context/AppWindowContext";
import {JSX, Suspense, useEffect} from "react";
import Greet from "@/components/AppWindows/Greet";
import Skills from "@/components/AppWindows/Skills";
import Projects from "@/components/AppWindows/Projects";
import LeetCode from "@/components/AppWindows/LeetCode";
import GitHub from "@/components/AppWindows/GitHub";
import Contact from "@/components/AppWindows/Contact";
import LinkedIn from "@/components/AppWindows/LinkedIn";
import WorkExp from "@/components/AppWindows/WorkExp";
import AppWindowLoader from "@/components/Loaders/AppWindowLoader";

const windowComponents: Record<string, JSX.Element> = {
    'greet.sh': <Greet />,
    'skills': <Skills />,
    'projects': <Projects />,
    'work experience': <WorkExp />,
    'leetcode': <LeetCode />,
    'linkedin': <LinkedIn />,
    'github': <GitHub />,
    'contact': <Contact />,
};

export default function AppWindowWrapper() {
    const { appWindow } = useAppWindow();
    return (
        <main className="h-screen absolute z-10 w-full py-5">
            <Suspense fallback={<AppWindowLoader />}>
                {appWindow && windowComponents[appWindow]}
            </Suspense>
        </main>
    );
}
