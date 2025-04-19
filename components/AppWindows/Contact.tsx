import styles from '@/components/AppWindows/app-windows.module.css'
import clsx from "clsx";
export default function Contact() {
    return (
        <div className={ clsx(
            styles.appWindow,
            'flex justify-center items-center'
        )}>
            <div> Contact </div>
        </div>
    )
}