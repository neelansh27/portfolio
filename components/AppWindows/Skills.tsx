import styles from '@/components/AppWindows/app-windows.module.css'
import clsx from "clsx";
import TitleBar from "@/components/AppWindows/TitleBar";
export default function Skills() {
    return (
        <div className={ clsx(
            styles.appWindow,
        )}>
            <TitleBar/>
            <div> Skills </div>
        </div>
    )
}