import styles from '@/components/AppWindows/app-windows.module.css'
import clsx from "clsx";
import TitleBar from "@/components/AppWindows/TitleBar";
import SkillBar from "@/components/AppWindows/ui/ProgressBar/SkillBar";
import TechStackCloud from "@/components/AppWindows/ui/Cloud/TechCloud";
import {useEffect, useRef, useState} from "react";
export default function Skills() {
    const containerRef = useRef<HTMLDivElement>(null);
    const [canvasWidth, setCanvasWidth] = useState<number>(400)
    useEffect(() => {
        if (containerRef.current!=null) {
            setCanvasWidth(containerRef.current.clientWidth);
            const observer = new ResizeObserver(()=> {
                if (containerRef.current!=null) {
                    setCanvasWidth(containerRef.current.clientWidth);
                }
            })
            observer.observe(containerRef.current);
        }
    }, []);

    return (
        <div className={ clsx(
            styles.appWindow,
        )}>
            <TitleBar/>
            <div className={"text-center text-2xl font-bold pt-3"}> Technical Skills </div>
            <div className={"grid grid-cols-1 place-items-center md:grid-cols-2"}>
                <div ref={containerRef} className={"w-full flex justify-center items-center"}>
                    <TechStackCloud
                        radius={130}
                        width={canvasWidth}
                        height={canvasWidth/1.5}
                    />
                </div>
                <div className={"w-full px-4 pr-4 flex items-start justify-center flex-col"}>
                    <SkillBar label={"C++"} progress={40}/>
                    <SkillBar label={"JavaScript"} progress={80}/>
                    <SkillBar label={"Typescript"} progress={50}/>
                    <SkillBar label={"NodeJS"} progress={60}/>
                    <SkillBar label={"NextJS"} progress={40}/>
                    <SkillBar label={"Python"} progress={50}/>
                    <SkillBar label={"Go"} progress={25}/>
                    <SkillBar label={"Java"} progress={20}/>
                </div>
            </div>
        </div>
    )
}