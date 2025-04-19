import clsx from 'clsx';
import {IconType} from "react-icons";
import styles from './navitem.module.css';
import React from "react";

interface NavItemProps {
    IconAction: IconType,
    text: string,
    onMouseMove:(e: React.MouseEvent<HTMLLIElement>) => void,
}

export default function NavItem({IconAction, text, onMouseMove}: NavItemProps) {
    return (
        <li
            onMouseMove={onMouseMove}
            title={text}
            className={clsx(
                styles.navItem,
                'flex items-center justify-center',
                'bg-blue-500 font-bold',
            )}
        >
            <IconAction/>
        </li>
    );
}
