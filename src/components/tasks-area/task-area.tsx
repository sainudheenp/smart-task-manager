"use client"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { IoCloseSharp } from "react-icons/io5";
import SearchInput from "./search-input";
import { PriorityDorpDown } from "../drop-down/priority-drop-down";
import { StatusDorpDown } from "../drop-down/status-drop-down";
import { DropDownViewColumns } from "../drop-down/view-columns-drop-down";
import TaskTable from "./task-table";
import PaginationArea from "./pagination/pagination-area";

export default function TasksArea() {
    return (
        <div className="px-7 mt-5">
            <Card>
                <CardHeader>
                    <div className="flex items-center justify-between ">
                        <div className="flex flex-col items-center gap-2 sm:flex-row ">
                            <SearchInput />

                            {/* Status Drop Down */}
                            <StatusDorpDown />

                            <PriorityDorpDown />

                            <Button variant={"ghost"} className="h-10">
                                <span>Reset</span>
                                <IoCloseSharp />
                            </Button>
                        </div>
                        {/* Drop down view column */}
                        <DropDownViewColumns />
                    </div>
                </CardHeader>
                <CardContent>
                    {/* Table Content */}
                    <TaskTable />
                </CardContent>
                <CardFooter>
                    <PaginationArea />
                    {/* CardFooter */}
                </CardFooter>
            </Card>
        </div>
    )
}
