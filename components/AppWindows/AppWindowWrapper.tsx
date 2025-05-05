'use client';
import { useAppWindow } from "@/context/AppWindowContext"
import {Suspense, useEffect} from "react";
import Greet from "@/components/AppWindows/Greet";
import Skills from "@/components/AppWindows/Skills";
import Projects from "@/components/AppWindows/Projects";
import LeetCode from "@/components/AppWindows/LeetCode";
import GitHub from "@/components/AppWindows/GitHub";
import Contact from "@/components/AppWindows/Contact";
import LinkedIn from "@/components/AppWindows/LinkedIn";
import AppWindowLoader from "@/components/Loaders/AppWindowLoader";
export default function AppWindowWrapper() {
    const { appWindow } = useAppWindow();
    useEffect(()=>{
        console.log(appWindow)
    }, [appWindow])
    return (
        <main className={"h-screen absolute z-10 w-full py-5"}>
            <Suspense fallback={<AppWindowLoader/>}>
                { appWindow==='greet.sh' && <Greet/> }
                { appWindow==='skills' && <Skills/> }
                { appWindow==='projects' && <Projects/> }
                { appWindow==='leetcode' && <LeetCode/> }
                { appWindow==='linkedin' && <LinkedIn/> }
                { appWindow==='github' && <GitHub/> }
                { appWindow==='contact' && <Contact/> }
            </Suspense>
        </main>
    )
}