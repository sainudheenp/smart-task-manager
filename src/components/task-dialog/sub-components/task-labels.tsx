import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useState } from "react";
import {  Task } from "@/app/data/task-data";
import { Label } from "@radix-ui/react-dropdown-menu";

type Labels = {
  value: Task["label"];
};

const statuses: Labels[] = [
  { value: "Bug" },
  { value: "Feature" },
  { value: "Documentation" },
];

export default function TaskLabels() {
  const [selectedStatus, setSelectedStatus] = useState<Task["label"]>("Bug");

  return (
    <div className="flex flex-col gap-2">
      <Label className="opacity-75 text-sm font-medium">Task Label</Label>
      <Select
        value={selectedStatus}
        onValueChange={(value: Task["label"]) => {
          setSelectedStatus(value);
        }}
      >
        <SelectTrigger className="w-full h-11">
          <SelectValue placeholder="Select a label..." />
        </SelectTrigger>
        <SelectContent className="poppins">
          <SelectGroup>
            {statuses.map((status, index) => (
              <SelectItem key={index} value={status.value}>
                <div className="flex items-center gap-2">
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
