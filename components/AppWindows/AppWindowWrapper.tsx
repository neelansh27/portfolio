'use client';
import { useAppWindow } from "@/context/AppWindowContext"
import {useEffect} from "react";
import Greet from "@/components/AppWindows/Greet";
import Skills from "@/components/AppWindows/Skills";
import Projects from "@/components/AppWindows/Projects";
import LeetCode from "@/components/AppWindows/LeetCode";
import GitHub from "@/components/AppWindows/GitHub";
import Contact from "@/components/AppWindows/Contact";
import LinkedIn from "@/components/AppWindows/LinkedIn";
export default function AppWindowWrapper() {
    const { appWindow } = useAppWindow();
    useEffect(()=>{
        console.log(appWindow)
    }, [appWindow])
    return (
        <main className={"h-screen py-5"}>
            { appWindow==='greet.sh' && <Greet/> }
            { appWindow==='skills' && <Skills/> }
            { appWindow==='projects' && <Projects/> }
            { appWindow==='leetcode' && <LeetCode/> }
            { appWindow==='linkedin' && <LinkedIn/> }
            { appWindow==='github' && <GitHub/> }
            { appWindow==='contact' && <Contact/> }
        </main>
    )
}