"use client";
import NavItem from "@/components/Navigation/NavItem";
import { FiGithub } from "react-icons/fi";
import { AiOutlineHome } from "react-icons/ai";
import { TbBrandLeetcode } from "react-icons/tb";
import { FaScrewdriverWrench } from "react-icons/fa6";
import {FaLinkedin, FaProjectDiagram} from "react-icons/fa";
import {MdOutlineMailOutline} from "react-icons/md";
import React, {useRef} from "react";
import {scale} from "@/utils/scale";

export default function Navbar() {
    const navlist = [
        {icon: AiOutlineHome, text: "Home"},
        {icon: FaScrewdriverWrench, text: "Skills"},
        {icon: FaProjectDiagram, text: "Projects"},
        {icon: TbBrandLeetcode, text: "LeetCode"},
        {icon: FaLinkedin, text: "LinkedIn"},
        {icon: FiGithub, text: "GitHub"},
        {icon: MdOutlineMailOutline, text: "Mail"},
    ]
    const dock = useRef<HTMLUListElement>(null);
    const handleHover = (e: React.MouseEvent) => {
        if (dock.current===null) return;
        const x:number = e.clientX;
        const itemLeft:number = e.currentTarget.getBoundingClientRect().left;
        const itemWidth:number = e.currentTarget.getBoundingClientRect().width;
        const pos:number = (x-itemLeft)/itemWidth;
        const off:number = scale(pos, [0,1], [-6,6]);

        dock.current.style.setProperty('--dock-offset-left', `${off*-1}px`);
        dock.current.style.setProperty('--dock-offset-right', `${off}px`);
    }
    return (
        <div className="fixed bottom-2 flex justify-center items-center w-full">
            <nav>
                <ul ref={dock} className={"flex items-end h-20 bg-black gap-1.5 rounded-xl px-5 py-4 transition-all duration-300"}>
                { navlist.map((item, idx) => {
                    return (<NavItem key={idx} onMouseMove={handleHover} IconAction={item.icon} text={item.text} />)
                })}
                </ul>
            </nav>
        </div>
    )
}
