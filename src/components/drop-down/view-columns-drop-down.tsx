"use client"

import * as React from "react"
import { DropdownMenuCheckboxItemProps } from "@radix-ui/react-dropdown-menu"
import { BiColumns } from "react-icons/bi"
import { Button } from "../ui/button"
import {
    DropdownMenu,
    DropdownMenuCheckboxItem,
    DropdownMenuContent,
    DropdownMenuLabel,
    DropdownMenuSeparator, DropdownMenuTrigger
} from "../ui/dropdown-menu"

type Checked = DropdownMenuCheckboxItemProps["checked"]

export function DropDownViewColumns() {
    const [showStatusBar, setShowStatusBar] = React.useState<Checked>(true)
    const [showActivityBar, setShowActivityBar] = React.useState<Checked>(true)
    const [showPanel, setShowPanel] = React.useState<Checked>(true)

    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Button variant={"outline"} className="h-11 px-8 poppins">
                    <BiColumns />
                    <span>View</span>
                </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-56 poppins">

            </DropdownMenuContent>
        </DropdownMenu>
    )

}