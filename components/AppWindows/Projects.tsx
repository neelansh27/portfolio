import styles from '@/components/AppWindows/app-windows.module.css'
import clsx from "clsx";
import TitleBar from "@/components/AppWindows/TitleBar";
import {FaReact} from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import ProjectCard from "@/components/AppWindows/ui/Card/ProjectCard";
export default function Projects() {
    const cards = [
        {
            title: "lorem2",
            imageSrc:"/wallpaper_30.jpg",
            description: "Lorem ipsum dolor sit amet, consetetur" ,
            tags: [
                { Icon: FaReact, name: "React"},
                { Icon: IoLogoJavascript, name: "JavaScript"}
            ]
        },
        {
            title: "lorem2",
            imageSrc:"/wallpaper_30.jpg",
            description: "Lorem ipsum dolor sit amet, consetetur" ,
            tags: [{ Icon: FaReact, name: "React"}]
        },
        {
            title: "lorem2",
            imageSrc:"/wallpaper_30.jpg",
            description: "Lorem ipsum dolor sit amet, consetetur" ,
            tags: [{ Icon: FaReact, name: "React"}]
        },
        {
            title: "lorem2",
            imageSrc:"/wallpaper_30.jpg",
            description: "Lorem ipsum dolor sit amet, consetetur" ,
            tags: [{ Icon: FaReact, name: "React"}]
        },
        {
            title: "lorem2",
            imageSrc:"/wallpaper_30.jpg",
            description: "Lorem ipsum dolor sit amet, consetetur" ,
            tags: [{ Icon: FaReact, name: "React"}]
        },
        {
            title: "lorem2",
            imageSrc:"/wallpaper_30.jpg",
            description: "Lorem ipsum dolor sit amet, consetetur" ,
            tags: [{ Icon: FaReact, name: "React" }]
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