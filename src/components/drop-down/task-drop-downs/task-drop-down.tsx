"use client"

import { useState } from "react"
import { Trash } from "lucide-react"
import { BsThreeDots } from "react-icons/bs"
import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuGroup, DropdownMenuItem, DropdownMenuSeparator, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { MENU_ITEMS } from "./constants"
import { MenuItem } from "./menu-items"
import SubLabelMenu from "./sub-label-menu"

// export function TaskDropDown() {
//     const [selectedLabel, setSelectedLabel] = useState("Bug")
//     return (
//         <DropdownMenu>
//             <DropdownMenuTrigger asChild>
//                 <Button variant={"ghost"}>
//                     <BsThreeDots />
//                 </Button>
//             </DropdownMenuTrigger>

//             <DropdownMenuContent className="w-56 poppins">
//                 <DropdownMenuGroup>
//                     {
//                         MENU_ITEMS.map((item) => (
//                             <MenuItem key={item.label} Icon={item.icon} label={item.label} shortcut={item.shortcut} />
//                         ))
//                     }
//                 </DropdownMenuGroup>
//                 <DropdownMenuSeparator />
//                 <DropdownMenuGroup>
//                     <SubLabelMenu value={selectedLabel} onValueChange={setSelectedLabel} />
//                 </DropdownMenuGroup>
//             </DropdownMenuContent>

//             <MenuItem Icon={Trash} label="Delete" shortcut="Q" className="text-red-500" />
//         </DropdownMenu>
//     )
// }

export function TaskDropDown({ task }: any) {
  const [selectedLabel, setSelectedLabel] = useState(task.label)

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant={"ghost"}>
          <BsThreeDots />
        </Button>
      </DropdownMenuTrigger>

      <DropdownMenuContent className="w-56 poppins">
        <DropdownMenuGroup>
          {MENU_ITEMS.map((item) => (
            <MenuItem
              key={item.label}
              Icon={item.icon}
              label={item.label}
              shortcut={item.shortcut}
            />
          ))}
        </DropdownMenuGroup>

        <DropdownMenuSeparator />

        <DropdownMenuGroup>
          <SubLabelMenu
            value={selectedLabel}
            onValueChange={(newLabel) => {
              setSelectedLabel(newLabel)
              console.log("Changed label to:", newLabel, "for task:", task.id)
            }}
          />
        </DropdownMenuGroup>

        <DropdownMenuSeparator />

        <DropdownMenuGroup>
          <MenuItem
            Icon={Trash}
            label="Delete"
            shortcut="Q"
            className="text-red-500"
          />
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
