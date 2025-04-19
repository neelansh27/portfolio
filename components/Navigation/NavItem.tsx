import clsx from 'clsx';
import {IconType} from "react-icons";
import styles from './navitem.module.css';
import React from "react";
import { useAppWindow } from "@/context/AppWindowContext";

interface NavItemProps {
    IconAction: IconType,
    text: string,
    winName: string,
    onMouseMove:(e: React.MouseEvent<HTMLLIElement>) => void,
}

export default function NavItem({IconAction, text, winName, onMouseMove}: NavItemProps) {
    const { switchWindow } = useAppWindow();
    return (
        <li
            onMouseMove={onMouseMove}
            onClick={()=>switchWindow(winName)}
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
