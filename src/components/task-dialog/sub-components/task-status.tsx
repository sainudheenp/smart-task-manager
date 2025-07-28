import { Label } from "@radix-ui/react-dropdown-menu";
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import { useState } from "react";
import { Task } from "@/app/data/task-data";
import {
    ArrowUpCircle,
    CheckCircle2,
    Circle,
    HelpCircle,
    LucideIcon,
    XCircle,
} from "lucide-react";

type Status = {
    value: Task["status"];
    icon: LucideIcon;
};

const statuses: Status[] = [
    {
        value: "Backlog",
        icon: HelpCircle,
    },
    {
        value: "Todo",
        icon: Circle,
    }, {
        value: "In Progress",
        icon: ArrowUpCircle,
    }, {
        value: "Done",
        icon: CheckCircle2,
    }, {
        value: "Canceled",
        icon: XCircle,
    }
]

export default function TaskStatus() {

}