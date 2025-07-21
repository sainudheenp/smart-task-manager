import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { IoCloseSharp } from "react-icons/io5";
import SearchInput from "./task-area";
import { PriorityDorpDown } from "../drop-down/priority-drop-down";

export default function TasksArea() {
    return (
        <div className="px-7 mt-5">
            <Card>
                <CardHeader>
                    <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                            <SearchInput />

                            <Button variant={"ghost"} className="h-10">
                                <span>Reset</span>
                                <IoCloseSharp />
                            </Button>

                            <PriorityDorpDown />

                        </div>
                    </div>
                </CardHeader>
                <CardContent>
                    {/* Table Content */}
                </CardContent>
                <CardFooter>
                    {/* CardFooter */}
                </CardFooter>
            </Card>
        </div>
    )
}