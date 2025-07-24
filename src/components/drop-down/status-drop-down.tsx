"use client"

import * as React from "react"
import { Button } from "../ui/button"
import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList } from "../ui/command"
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover"
import { GoPlusCircle } from 'react-icons/go'
import { Checkbox } from "../ui/checkbox"
import { ArrowUpCircle, Circle, HelpCircle, XCircle, CheckCircle2, LucideIcon } from "lucide-react"
import { IconType } from "react-icons/lib"
import { Separator } from "../ui/separator"
import { Badge } from "../ui/badge"


type Status = {
    value: string,
    label: string,
    icon: LucideIcon
}

const statuses: Status[] = [
    {
        value: "backlog",
        label: "Backlog",
        icon: HelpCircle
    },
    {
        value: "todo",
        label: "Todo",
        icon: Circle
    },
    {
        value: "in progress",
        label: "In Progress",
        icon: ArrowUpCircle
    },
    {
        value: "done",
        label: "Done",
        icon: CheckCircle2
    },
    {
        value: "canceled",
        label: "Canceled",
        icon: XCircle
    }
]

export function StatusDorpDown() {
    const [open, setOpen] = React.useState(false)
    const [selectedStatus, setSelectedStatus] = React.useState<Status | null>(
        null
    )
    return (
        <div className="flex items-center space-x-4">
            <Popover open={open} onOpenChange={setOpen}>
                <PopoverTrigger asChild>
                    <Button size="sm" variant={"outline"}
                        className="h-10 justify-start border-dashed px-5" >
                        <div className="flex items-center gap-4">
                            <div className="flex items-center gap-2">
                                <GoPlusCircle />
                                <span>Status</span>
                            </div>
                            <Separator orientation="vertical"
                                className="h-6 border-1 border-gray-300" />
                            <div className="flex items-center gap-2">
                                <Badge variant={"secondary"}>Todo</Badge>
                                <Badge variant={"secondary"}>Done</Badge>
                            </div>
                        </div>
                    </Button>
                </PopoverTrigger>
                <PopoverContent className="p-0 poppins w-52 z-50"
                    align="center" side="bottom" sideOffset={8} avoidCollisions={false}>
                    <Command>
                        <CommandInput placeholder="Change Status..." />
                        <CommandList>
                            <CommandEmpty>No Results Found.</CommandEmpty>
                            <CommandGroup>
                                {
                                    statuses.map((status, idx) => (
                                        <CommandItem key={idx}
                                            value={status.value}
                                            className="flex justify-between"
                                            onSelect={(value) => {
                                                setSelectedStatus(
                                                    statuses.find((priority) => priority.value === value) || null
                                                )
                                            }}
                                        >
                                            <div className="flex items-center gap-3">
                                                <Checkbox />
                                                <status.icon />
                                                <span>{status.label}</span>
                                            </div>
                                            <span>23</span>
                                        </CommandItem>
                                    ))
                                }
                            </CommandGroup>
                        </CommandList>
                    </Command>
                </PopoverContent>
            </Popover>
        </div>
    )
}