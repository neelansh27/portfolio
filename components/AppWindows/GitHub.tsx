import styles from '@/components/AppWindows/app-windows.module.css'
import clsx from "clsx";
export default function GitHub() {
    return (
        <div className={ clsx(
            styles.appWindow,
            'flex justify-center items-center'
        )}>
            <div> GitHub </div>
        </div>
    )
}