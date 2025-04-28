import React, {useEffect, useRef} from 'react';
import styles from './skill-bar.module.css';
import clsx from "clsx";
interface SkillBarProps {
    label?: string,
    progress?: number,
    delay?: number,
}
export default function SkillBar({label = "Skill",progress = 50, delay=0}: SkillBarProps) {
    const bar = useRef<HTMLDivElement>(null);
    const dotPosition = `${progress}%`;

    useEffect(() => {
        if (bar.current!=null) {
            bar.current.style.setProperty('--final-width', dotPosition);
        }

    },[dotPosition])
    return (
        <div className="grid grid-cols-5 gap-4 mb-4 mr-4  w-full">
            <div className="text-white text-wrap font-medium">{label}</div>

            {/* Progress bar container */}
            <div className={"relative flex h-2 col-span-4"}>
                <div className="absolute w-full inset-y-0 left-0 bg-white/30 rounded-full"></div>
                <div
                    ref={bar}
                    className={clsx(
                        styles.growWidth,
                        styles.dot,
                        "absolute inset-y-0 left-0 bg-gradient-to-r from-white/50 from-50% to-yellow-400/80 rounded-full"
                    )}
                    style={{ width: dotPosition }}
                ></div>
            </div>
        </div>
    );
}