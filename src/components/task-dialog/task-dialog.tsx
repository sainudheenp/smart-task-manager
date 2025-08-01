import {
    Dialog, DialogContent, DialogDescription,
    DialogHeader, DialogTitle, DialogTrigger,
    DialogFooter, DialogClose
} from "@/components/ui/dialog";
import { Separator } from "../ui/separator";
import { Button } from "../ui/button";
import TaskTitle from './sub-components/task-title';
import TaskLabel from './sub-components/task-labels';
import TaskStatus from './sub-components/task-status';
import TaskPriority from './sub-components/task-priority';
import { useState } from "react";
import { Label, Status, Priority } from "@/app/data/task-data";

export default function TaskDialog({
    open,
    onOpenChange,
}: {
    open: boolean;
    onOpenChange: (open: boolean) => void;
}) {
    const [title, setTitle] = useState("");
    const [label, setLabel] = useState<Label>("Bug");
    const [status, setStatus] = useState<Status>("Todo");
    const [priority, setPriority] = useState<Priority>("Low");

    const handleSubmit = async () => {
        const task = { title, label, status, priority };
        // Example: send to API
        await fetch("/api/tasks", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(task),
        });
        // Optionally reset state or close dialog
        onOpenChange(false);
    };

    return (
        <Dialog open={open} onOpenChange={onOpenChange}>
            {/* <DialogTrigger asChild>
                <Button>Add New Task</Button>
            </DialogTrigger> */}
            <DialogContent className="poppins max-w-4xl">
                <DialogHeader>
                    <DialogTitle className="text-xl">Add New Task</DialogTitle>
                    <DialogDescription>Fill in the form to add a task</DialogDescription>
                    <div className="mt-4">
                        <Separator className="mt-3" />
                    </div>
                </DialogHeader>
                <div className="my-8">
                    <div className="grid grid-cols-2 gap-5">
                        <TaskTitle value={title} onChange={setTitle}/>
                        <TaskStatus value={status} onChange={setStatus}/>
                    </div>
                    <div className="grid grid-cols-2 gap-5 mt-6">
                        <TaskPriority value={priority} onChange={setPriority}/>
                        <TaskLabel value={label} onChange={setLabel}/>
                    </div>
                </div>
                <DialogFooter className="mb-4 mt-9">
                    <DialogClose asChild>
                        <Button type="button" variant="secondary" className="px-9" >
                            Close
                        </Button>
                    </DialogClose>
                    <Button type="button" onClick={handleSubmit}>Add New Task</Button>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    )
}