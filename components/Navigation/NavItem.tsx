import clsx from 'clsx';
import {IconType} from "react-icons";
import styles from './navitem.module.css';
import React from "react";
import { useAppWindow } from "@/context/AppWindowContext";
import {useRouter} from "next/navigation";

interface NavItemProps {
    IconAction: IconType,
    text: string,
    winName: string,
    link?: string,
    onMouseMove:(e: React.MouseEvent<HTMLLIElement>) => void,
}

export default function NavItem({IconAction, text, winName, link, onMouseMove}: NavItemProps) {
    const { switchWindow } = useAppWindow();
    const router = useRouter();
    const handleClick = () => {
        if (link) {
            router.push(link);
        } else {
            switchWindow(winName);
        }
    }
    return (
        <li
            onMouseMove={onMouseMove}
            onClick={handleClick}
            title={text}
            className={clsx(
                styles.navItem,
                'flex items-center justify-center',
                'bg-blue-500 font-bold cursor-pointer',
            )}
        >
            <IconAction/>
        </li>
    );
}
