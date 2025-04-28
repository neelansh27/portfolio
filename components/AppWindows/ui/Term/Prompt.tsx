import {Dispatch, SetStateAction, useEffect, useState} from "react";
import clsx from "clsx";

interface PromptProps {
    command: string;
    typingDuration: number; // in milliseconds
    delay:number
}

export default function Prompt({ command, typingDuration, delay=0 }: PromptProps) {
    const [text, setText] = useState<string>('');
    const [hideCursor, setHideCursor] = useState<boolean>(false);

    // Type text
    useEffect(() => {
        let timer :NodeJS.Timeout | null= null;
        const start = () => {
            let end=0;
            const charDelay = typingDuration/Math.max(command.length,1);
            // console.log(charDelay)
            const typeNext = () => {
                end++;
                setText(command.slice(0,end));
                if (end<command.length) {
                    timer = setTimeout(typeNext, charDelay)
                } else {
                    setHideCursor(true);
                }
            }
            typeNext();
        }

        timer = setTimeout(start, delay)

        return () => {
            if (timer) clearTimeout(timer)
        }
    }, [command, typingDuration, delay]);

    return (
        <div className={"flex items-center gap-1"}>
            <span className={"font-bold"}>Guest@Browser ~ %{" "}</span>
            <span>{text}</span>
            <span className={clsx(
                { "hidden": hideCursor },
                "inline-block w-2 h-4 bg-white",
                "animate-[blink_0.7s_steps(1,start)_infinite]"
            )}></span>
        </div>
    )
}