"use client"

import * as React from "react"
import { Button } from "../ui/button"
import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList } from "../ui/command"
import { Popover, PopoverContent, PopoverTrigger } from "@radix-ui/react-popover"
import { GoPlusCircle } from 'react-icons/go'
import { Checkbox } from "@radix-ui/react-checkbox"
import { IoMdArrowUp } from "react-icons/io"
import { IoArrowBack } from "react-icons/io5"
import { IoArrowDown } from "react-icons/io5"
import { IconType } from "react-icons/lib"
import { Separator } from "../ui/separator"
import { Badge } from "../ui/badge"


type Status = {
    value: string,
    label: string,
    icon: IconType
}

const statuses: Status[] = [
    {
        value: "low",
        label: "Low",
        icon: IoArrowDown
    },
    {
        value: "medium",
        label: "Medium",
        icon: IoArrowBack
    },
    {
        value: "high",
        label: "High",
        icon: IoMdArrowUp
    }
]

export function PriorityDorpDown() {
    const [open, setOpen] = React.useState(false)
    const [selectedStatus, setSelectedStatus] = React.useState<Status | null>(
        null
    )
    return (
        <div>
            <Popover>
                <Button>
                    <div>
                        <div>
                            <GoPlusCircle />
                            <span>Priority</span>
                        </div>
                    </div>
                </Button>
            </Popover>
        </div>
    )
}