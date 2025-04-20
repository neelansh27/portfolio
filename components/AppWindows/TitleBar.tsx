import {useAppWindow} from "@/context/AppWindowContext";

export default function TitleBar(){
    const { appWindow, switchWindow } = useAppWindow();
    const closeWindow = () => {
        switchWindow(null);
    }
    return (
        <div className={"flex items-center font-medium w-full py-0.5 bg-[#1e1e1e]"}>
            <span className={"ml-auto"}>{appWindow}</span>
            <button onClick={closeWindow} className={"menu ml-auto mr-2 inline-block bg-red-500 h-4 w-4 rounded-full"}></button>
        </div>
    )
}