export type Label = "Bug" | "Feature" | "Documentation"
export type Priority = "Low" | "Medium" | "High"
export type Status = "Backlog" | "Todo" | "In Progress" | "Done" | "Canceled"

export type Task = {
    taskId: string;
    title: string;
    label: Label;
    isFavorite: boolean;
    priority: Priority;
    status: Status;
    createdAt: Date;
}

export const tasks:Task[] = [
{
    taskId: "1",
    title: "Fix login bug",
    label: "Bug",
    isFavorite: true,
    priority: "High",
    status: "In Progress",
    createdAt: new Date("2024-06-01T09:00:00Z")
},
{
    taskId: "2",
    title: "Add user profile feature",
    label: "Feature",
    isFavorite: false,
    priority: "Medium",
    status: "Todo",
    createdAt: new Date("2024-06-02T10:30:00Z")
},
{
    taskId: "3",
    title: "Update API documentation",
    label: "Documentation",
    isFavorite: false,
    priority: "Low",
    status: "Backlog",
    createdAt: new Date("2024-06-03T14:15:00Z")
},
{
    taskId: "4",
    title: "Refactor dashboard code",
    label: "Feature",
    isFavorite: true,
    priority: "Medium",
    status: "Done",
    createdAt: new Date("2024-06-04T16:45:00Z")
}
]