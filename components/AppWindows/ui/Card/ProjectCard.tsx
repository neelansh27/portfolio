import Image from "next/image";
import { Tag } from "@/lib/definations"
import Chip from "@/components/AppWindows/ui/Card/Chip";
import clsx from "clsx";
interface ProjectCardProps {
    title: string,
    imageSrc: string,
    description: string,
    url?: string,
    tags: Tag[],
}
export default function ProjectCard({title,imageSrc, description, url, tags}: ProjectCardProps) {
    function handleClick() {
        if (url) {
            window.open(url, "_blank");
        }
    }
    return (
        <div className={"w-full border-2 rounded-lg select-none"}>
            <Image onClick={handleClick} src={imageSrc} className={clsx("w-full", { "cursor-pointer": url })} objectFit={"cover"} width={100} height={100} alt={"project-image"} unoptimized={true} priority />
            <div className={"px-4 py-2"}>
                <h2 className={"font-bold text-lg capitalize"}>{ title }</h2>
                <p className={"text-md opacity-90"}>{ description }</p>
                 <div className={"flex gap-2 flex-wrap py-2"}>
                    {
                        tags.map((tag, idx) => {
                            return (
                                <Chip key={idx} name={tag.name} Icon={tag.Icon} color={tag.color} />
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}