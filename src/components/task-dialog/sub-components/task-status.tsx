import { Label } from "@radix-ui/react-dropdown-menu";
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
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

type TaskStatusProps = {
    value: Task["status"];
    onChange: (value: Task["status"]) => void;
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

export default function TaskStatus({ value, onChange }: TaskStatusProps) {
    return (
        <div className="flex flex-col gap-2">
              <Label className="opacity-75 text-sm font-medium">Task Status</Label>
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
