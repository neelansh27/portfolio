import ScrambledText from "@/components/SrambledText"
import styles from '@/components/AppWindows/app-windows.module.css'
import clsx from "clsx";
import TitleBar from "@/components/AppWindows/TitleBar";
import LastLogin from "@/components/AppWindows/ui/Term/LastLogin";
import Prompt from "@/components/AppWindows/ui/Term/Prompt";

export default function Greet() {

    return (
        <div className={ clsx(
            styles.appWindow,
        )}>
            <TitleBar/>
            <LastLogin/>
            <Prompt command={"./greet.sh"} typingDuration={1900} delay={100}/>
            <ScrambledText text={"Hello, I'm Neelansh Sharma"} />
            <Prompt command={"cat about_me.txt"} typingDuration={1900} delay={100}/>
            <ScrambledText text={"Turning ideas into code and challenges into solutions. Passionate about full-stack development, clean architecture, and building things that matter."} frames={180}/>
        </div>
    )
}