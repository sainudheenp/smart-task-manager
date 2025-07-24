import Navbar from "@/components/navbar";
import StatCards from "@/components/stats-cards";
import TasksArea from "@/components/tasks-area/task-area";

export default function Home() {
  return (
    <div className={`poppins min-h-screen `}>
      <Navbar />
      <StatCards />
      <TasksArea />
    </div>
  );
}
