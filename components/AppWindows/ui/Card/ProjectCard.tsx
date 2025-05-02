import Image from "next/image";
import { Tag } from "@/lib/definations"
import Chip from "@/components/AppWindows/ui/Card/Chip";
interface ProjectCardProps {
    title: string,
    imageSrc: string,
    description: string,
    tags: Tag[],
}
export default function ProjectCard({title,imageSrc, description, tags}: ProjectCardProps) {
    return (
        <div className={"w-full border-2 rounded-lg select-none"}>
            <Image src={imageSrc} className={"w-full"} width={100} height={100} alt={"project-image"}/>
            <div className={"px-4 py-2"}>
                <h2 className={"font-bold text-lg capitalize"}>{ title }</h2>
                <p>{ description }</p>
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