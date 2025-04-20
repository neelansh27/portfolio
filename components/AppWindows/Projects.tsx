import styles from '@/components/AppWindows/app-windows.module.css'
import clsx from "clsx";
import TitleBar from "@/components/AppWindows/TitleBar";
export default function Projects() {
    return (
        <div className={ clsx(
            styles.appWindow,
            'flex justify-center items-center'
        )}>
            <TitleBar/>
            <div> Projects </div>
        </div>
    )
}