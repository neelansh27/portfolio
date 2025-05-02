import { Tag } from "@/lib/definations";
import clsx from "clsx";

export default function Chip({name, Icon, color='text-white'}: Tag) {
    return (
        <div className={clsx(
            "flex items-center text-sm gap-1 font-bold border-2 px-2 rounded-md",
            color,
        )}>
            <span><Icon/></span>
            <span>{name}</span>
        </div>
    )
}