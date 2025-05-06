import ScrambledText from "@/components/SrambledText"
import styles from '@/components/AppWindows/app-windows.module.css'
import clsx from "clsx";
import TitleBar from "@/components/AppWindows/TitleBar";
import LastLogin from "@/components/AppWindows/ui/Term/LastLogin";
import Prompt from "@/components/AppWindows/ui/Term/Prompt";
import {useEffect, useState} from "react";

export default function Greet() {
    const [showItems, setShowItems] = useState<number>(0);
    useEffect(() => {
        const timeStamps = [
            1000,
            3400,
            11100,
            14100,
        ]
        const timer = Array(4).fill(null);
        timeStamps.forEach((time, idx)=>{
            timer[idx] = setTimeout(()=>{
                setShowItems(idx+1);
                // console.log(time)
            }, time)
        })
        return ()=> {
            timer.forEach((t)=>{
                if (t) {
                    clearTimeout(t);
                }
            })
        }
    },[]);
    return (
        <div className={ clsx(
            styles.appWindow,
        )}>
            <TitleBar/>
            <LastLogin/>
            <div className={"pl-1"}>
            {showItems>=1 && <Prompt command={"./greet.sh"} typingDuration={1500} delay={500}/>}
            {showItems>=2 && <ScrambledText text={"Hello, I'm Neelansh Sharma"} frames={180}/>}
            {showItems>=3 && <Prompt command={"cat about_me.txt"} typingDuration={1900} delay={1000}/>}
            {showItems>=4 &&
                <Prompt
                    prompt={""}
                    command={"> Turning ideas into code and challenges into solutions. Passionate about full-stack development, clean architecture, and building things that matter."}
                    typingDuration={6000}/>
            }
            </div>
        </div>
    )
}