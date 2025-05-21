import styles from '@/components/AppWindows/app-windows.module.css'
import clsx from "clsx";
import TitleBar from "@/components/AppWindows/TitleBar";
import { FaNodeJs, FaReact} from "react-icons/fa";
import ProjectCard from "@/components/AppWindows/ui/Card/ProjectCard";
import {RiNextjsLine, RiTailwindCssFill} from "react-icons/ri";
import {SiMongodb, SiTypescript} from "react-icons/si";
export default function Projects() {
    const cards = [
        {
            title: "My Portfolio",
            imageSrc:"/Projects/portfolio.png",
            description: "This portfolio introduces who I am and highlights my skills, projects, and professional experience.",
            tags: [
                { Icon: RiNextjsLine, name: "NextJS"},
                { Icon: SiTypescript, name: "TypeScript"},
                { Icon: RiTailwindCssFill, name: "TailwindCSS"},
            ]
        },
        {
            title: "Tracker Analyzer",
            imageSrc:"/Projects/tracker-analyzer.png",
            description: "A CLI tool to find out trackers and fingerprinting methods used by a website. " ,
            tags: [{ Icon: SiTypescript, name: "TypeScript" }]
        },
        {
            title: "JSON Web Token (JWT) Authentication",
            imageSrc:"/Projects/jwt-auth.png",
            description: "A MERN stack application that implements JWT authentication." ,
            tags: [{ Icon: FaReact, name: "React"}, { Icon: FaNodeJs, name: "NodeJS"}, { Icon: SiMongodb, name: "MongoDB"}]
        },
    ]
    return (
        <div className={ clsx(
            styles.appWindow,
        )}>
            <TitleBar/>
            {/*<h1 className={"text-2xl font-bold text-center"}>PROJECTS</h1>*/}

            <div className={"grid grid-cols-1 gap-4 m-4 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3 lg:gap-8"}>
                {
                    cards.map((card, i) => (
                        <ProjectCard key={i} title={card.title} imageSrc={card.imageSrc} description={card.description} tags={card.tags} />
                    ))
                }
            </div>
        </div>
    )
}