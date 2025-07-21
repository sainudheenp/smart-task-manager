"use client"

import { ListTodo } from "lucide-react"
import { useTheme } from "next-themes"
import { ModeToggle } from "./mode-toggle"
import { Button } from "@/components/ui/button"
import { UserButton } from "@clerk/nextjs"

export default function Navbar() {

    const { theme } = useTheme()
    console.log(theme)
    // const bgColor = theme === "dark" ? "bg-black border-t" : "bg-slate-50";
    const bgColor = ''
    return (
        <div className={`poppins relative  w-full h-[92px] overflow-hidden 
        flex justify-between items-center px-6 border-b ${bgColor}
        `}>

            <AppNameLogo />

            <div className="flex items-center gap-3 justify-center ">
                <Button>Add Task</Button>
                <ModeToggle />
                <UserButton />
            </div>
        </div>

    )
}


export function AppNameLogo() {
    return (
        <header className="flex items-center gap-2 left-10 top-8">
            <div className="size-9 bg-primary rounded-md flex justify-center items-center">
                <ListTodo className="text-white text-xl " aria-hidden="true" />
            </div>
            <h1 className="font-semibold text-2xl font-poppins max-md:hidden">
                Smart Task <span className="font-normal text-primary">Management</span>
            </h1>
        </header>
    )
}