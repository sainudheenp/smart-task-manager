import { Label } from "@radix-ui/react-dropdown-menu";
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import { Task } from "@/app/data/task-data";
import { IoMdArrowUp } from "react-icons/io";
import { IoArrowBack } from "react-icons/io5";
import { IoArrowDown } from "react-icons/io5";
import { IconType } from "react-icons/lib";

type Priority = {
    value: Task["priority"];
    icon: IconType;
};

type TaskPriorityProps = {
    value: Task["priority"];
    onChange: (value: Task["priority"]) => void;
};

const statuses: Priority[] = [
    {
        value: "Low",
        icon: IoArrowDown,
    },
    {
        value: "Medium",
        icon: IoArrowBack,
    },
    {
        value: "High",
        icon: IoMdArrowUp,
    },
];

export default function TaskPriority({ value, onChange }: TaskPriorityProps) {
    return (
        <div className="flex flex-col gap-2">
            <Label className="opacity-75 text-sm font-medium">Task Priority</Label>
            <Select
                value={value}
                onValueChange={onChange}
            >
                <SelectTrigger className="w-full h-11">
                    <SelectValue placeholder="Select a status..." />
                </SelectTrigger>
                <SelectContent className="poppins">
                    <SelectGroup>
                        {statuses.map((status, index) => (
                            <SelectItem key={index} value={status.value}>
                                <div className="flex items-center gap-2">
                                    <status.icon size={15} />
                                    <span>{status.value}</span>
                                </div>
                            </SelectItem>
                        ))}
                    </SelectGroup>
                </SelectContent>
            </Select>
        </div>
    );
}
