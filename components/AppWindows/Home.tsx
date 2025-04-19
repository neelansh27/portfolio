import ScrambledText from "@/components/SrambledText"
import styles from '@/components/AppWindows/app-windows.module.css'
import clsx from "clsx";
export default function Home() {
    return (
        <div className={ clsx(
            styles.appWindow,
            'flex justify-center items-center'
        )}>
        <ScrambledText text={"Neelansh Sharma"} />
        </div>
    )
}