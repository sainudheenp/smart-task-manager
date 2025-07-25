import { Priority, Task, Status, tasks } from "@/app/data/task-data";
import { Badge } from "../ui/badge";
import { Column, ColumnDef, ColumnFaceting } from '@tanstack/react-table'
import { ArrowUpCircle, CheckCircle, CheckCircle2, Circle, HelpCircle, XCircle } from "lucide-react";
import { IoMdArrowDown, IoMdArrowRoundDown, IoMdArrowUp } from "react-icons/io";
import { IoArrowBack } from "react-icons/io5";
import { IoArrowDown } from "react-icons/io5";
import { Star } from "lucide-react";
import { Checkbox } from "../ui/checkbox";
import { ArrowUpDown } from "lucide-react";
import { GrHide } from "react-icons/gr";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger, DropdownMenuSeparator } from "../ui/dropdown-menu";
import { start } from "repl";


function renderStatusIcons(status: Status) {
    switch (status) {
        case "Backlog":
            return HelpCircle
        case "Canceled":
            return XCircle
        case "Done":
            return CheckCircle2
        case "In Progress":
            return ArrowUpCircle
        case "Todo":
            return Circle
        default:
            break;
    }
}

function renderPriorityIcons(priority: Priority) {
    switch (priority) {
        case "Low":
            return IoArrowDown
        case "Medium":
            return IoArrowBack
        case "High":
            return IoMdArrowUp
    }
}

function formatDate(date: Date): string {
    
    const day = date.getDate()
    const month = date.toLocaleString("default", { month: "long" })
    const year = date.getFullYear()

    const suffix =
        day % 10 === 1 && day !== 11
            ? "st"
            : day % 10 === 2 && day !== 12
                ? "nd"
                : day % 10 === 3 && day !== 13
                    ? "rd"
                    : "th";
    return `${day} ${suffix} ${month} ${year}`

}

type SortableHeaderProps = {
    column: Column<Task, unknown>;
    label: string;
}

// const SortableHeader: React.FC<SortableHeaderProps> = ({ column, label }) => {
//     const isSorted = column.getIsSorted();
//     const SortingIcon =
//         isSorted === "asc"
//             ? IoMdArrowUp
//             : isSorted === "desc"
//                 ? IoMdArrowDown
//                 : ArrowUpDown

//     return (
//         <DropdownMenu>
//             <DropdownMenuTrigger asChild>
//                 <div className={`flex items-start py-[14px] select-none cursor-pointer p-2 gap-1 
//                   ${isSorted && "text-primary"}  `} aria-label={`Sort by ${label}`} >
//                     {label}
//                     <SortingIcon className="h-4 w-4" />
//                 </div>
//             </DropdownMenuTrigger>
//             <DropdownMenuContent align="start" side="bottom" className="poppins">
//                 <DropdownMenuItem onClick={() => column.toggleSorting(true)}>
//                     <IoMdArrowUp className="mr-2 h-4 w-4">
//                         Asc
//                     </IoMdArrowUp>
//                 </DropdownMenuItem>
//                 <DropdownMenuItem onClick={() => column.toggleSorting(true)}>
//                     <IoMdArrowUp className="mr-2 h-4 w-4">
//                         Desc
//                     </IoMdArrowUp>
//                 </DropdownMenuItem>
//                 <DropdownMenuSeparator />
//                 <DropdownMenuItem onClick={() => column.toggleSorting(true)}>
//                     <IoMdArrowUp className="mr-2 h-4 w-4">
//                         Hide
//                     </IoMdArrowUp>
//                 </DropdownMenuItem>
//             </DropdownMenuContent>
//         </DropdownMenu>
//     )
// };

const SortableHeader: React.FC<SortableHeaderProps> = ({ column, label }) => {
  const isSorted = column.getIsSorted();
  const SortingIcon =
    isSorted === "asc"
      ? IoMdArrowUp
      : isSorted === "desc"
      ? IoMdArrowDown
      : ArrowUpDown;

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <div
          className={`flex items-start py-[14px] select-none cursor-pointer p-2 gap-1 ${
            isSorted ? "text-primary" : ""
          }`}
          aria-label={`Sort by ${label}`}
        >
          {label}
          <SortingIcon className="h-4 w-4" />
        </div>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="start" side="bottom" className="poppins">
        <DropdownMenuItem onClick={() => column.toggleSorting(false)}>
          <IoMdArrowDown className="mr-2 h-4 w-4" />
        Desc
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => column.toggleSorting(true)}>
          <IoMdArrowUp className="mr-2 h-4 w-4" />
        Asc
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem onClick={() => column.clearSorting()}>
          <GrHide className="mr-2 h-4 w-4" />
          Clear
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};



export const tasksColumns: ColumnDef<Task>[] = [
    {
        id: "select",
        header: ({ table }) => (
            <Checkbox checked={table.getIsAllRowsSelected() ||
                (table.getIsSomeRowsSelected() && "indeterminate")
            }
                onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
                aria-label="Select all" />
        ),
        cell: ({ row }) => (
            <Checkbox checked={row.getIsSelected()}
                onCheckedChange={(value) => row.toggleSelected(!!value)}
                aria-label="Select row" />
        ),
        enableSorting: false,
        enableHiding: false,
    },
    {
        accessorKey: "taskId",
        header: "Task",
    },
    {
        accessorKey: "isFavorite",
        header: "",
        cell: ({ row }) => {
            const FavoriteIcon = row.original.isFavorite && Star;
            return FavoriteIcon && <FavoriteIcon size={14} />
        }
    },
    {
        accessorKey: "title",
        header: ({ column }) => <SortableHeader column={column} label="Title" />,
        cell: ({ row }) => {
            const taskLabel = row.original.label;
            const taskTitle = row.original.title;
            return (
                <div className="flex items-center gap-2">
                    <Badge variant={"outline"}>{taskLabel}</Badge>
                    <span>{taskTitle}</span>
                </div>
            )
        }
    },
    {
        accessorKey: "status",
        header: ({ column }) => <SortableHeader column={column} label="Status" />,
        cell: ({ row }) => {
            const StatusIcon = renderStatusIcons(row.original.status);
            const status = row.original.status;
            return (
                <div className="flex items-center gap-2 text-sm">
                    {StatusIcon && (
                        <StatusIcon size={17} className="text-gray-600 opacity-95" />
                    )}
                    <span>{status}</span>
                </div>
            )
        }
    },
{
  accessorKey: "priority",
  header: ({ column }) => <SortableHeader column={column} label="Priority" />,
  cell: ({ row }) => {
    const PriorityIcon = renderPriorityIcons(row.original.priority);
    const Priority = row.original.priority;

    return (
      <div>
        {PriorityIcon && (
          <div className="flex items-center gap-2 text-sm">
            <PriorityIcon className="text-gray-600 opacity-95" />
            <span>{Priority}</span>
          </div>
        )}
      </div>
    );
  }
},
    {
        accessorKey: "createdAt",
        header: ({ column }) => <SortableHeader column={column} label="Created At" />,
        cell: ({ row }) => {
            const date = row.original.createdAt;
            const formattedDate = formatDate(date);
            return formattedDate
        }
    },
    {
        id: "actions"
    }
]