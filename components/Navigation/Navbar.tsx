"use client";
import NavItem from "@/components/Navigation/NavItem";
import { FiGithub } from "react-icons/fi";
import { TbBrandLeetcode } from "react-icons/tb";
import { FaScrewdriverWrench } from "react-icons/fa6";
import {FaLinkedin, FaProjectDiagram, FaTerminal} from "react-icons/fa";
import {MdOutlineMailOutline, MdWorkOutline} from "react-icons/md";
import React, {useRef} from "react";
import {scale} from "@/utils/scale";

export default function Navbar() {
    const navlist = [
        {icon: FaTerminal, text: "Term", winName: "greet.sh"},
        {icon: FaScrewdriverWrench, text: "Skills", winName: 'skills'},
        {icon: FaProjectDiagram, text: "Projects", winName: 'projects'},
        {icon: MdWorkOutline, text: "Work", winName: "work experience"},
        {icon: TbBrandLeetcode, text: "LeetCode", winName: 'leetcode', link: "https://www.leetcode.com/u/neelansh27"},
        {icon: FaLinkedin, text: "LinkedIn", winName: 'linkedin', link:"https://www.linkedin.com/in/neelansh-sharma-71742b258/"},
        {icon: FiGithub, text: "GitHub", winName: 'github', link: "https://www.github.com/neelansh27"},
        {icon: MdOutlineMailOutline, text: "Contact", winName: 'contact', link: "mailto:neelansh27arch@gmail.com"},
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
        <div className="fixed z-50 bottom-2 flex justify-center items-center w-full">
            <nav>
                <ul ref={dock} className={"flex items-end h-20 bg-black gap-1.5 rounded-xl px-5 py-4 transition-all duration-300"}>
                { navlist.map((item, idx) => {
                    return (<NavItem key={idx} onMouseMove={handleHover} IconAction={item.icon} winName={item.winName} text={item.text} link={item.link}/>)
                })}
                </ul>
            </nav>
        </div>
    )
}
