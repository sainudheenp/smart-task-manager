import { create } from 'zustand';

// Example: Task state store
interface TaskState {
  tasks: any[];
  setTasks: (tasks: any[]) => void;
  addTask: (task: any) => void;
}

export const useTaskStore = create<TaskState>((set) => ({
  tasks: [],
  setTasks: (tasks) => set({ tasks }),
  addTask: (task) => set((state) => ({ tasks: [task, ...state.tasks] })),
}));
