"use client"

import { useState } from "react"
import Navbar from "@/components/navbar";
import StatCards from "@/components/stats-cards";
import TasksArea from "@/components/tasks-area/task-area";
import TaskDialog from "@/components/task-dialog/task-dialog";
export default function Home() {
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  return (
    <div className={`poppins min-h-screen `}>
      {/* <Navbar  /> */}

      <Navbar onAddTaskClick={() => setIsDialogOpen(true)} />
      <TaskDialog open={isDialogOpen} onOpenChange={setIsDialogOpen} />
      <StatCards />
      <TasksArea />
    </div>
  );
}
