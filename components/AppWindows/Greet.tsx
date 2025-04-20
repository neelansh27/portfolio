import ScrambledText from "@/components/SrambledText"
import styles from '@/components/AppWindows/app-windows.module.css'
import clsx from "clsx";
import TitleBar from "@/components/AppWindows/TitleBar";
export default function Greet() {
    return (
        <div className={ clsx(
            styles.appWindow,
        )}>
            <TitleBar/>
        <ScrambledText text={"Neelansh Sharma"} />
        </div>
    )
}