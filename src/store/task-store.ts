import { create } from 'zustand';

interface TaskState {
  tasks: any[];
  setTasks: (tasks: any[]) => void;
  addTask: (task: any) => void;
  filter: string;
  setFilter: (filter: string) => void;
}

export const useTaskStore = create<TaskState>((set) => ({
  tasks: [],
  setTasks: (tasks) => set({ tasks }),
  addTask: (task) => set((state) => ({ tasks: [task, ...state.tasks] })),
  filter: '',
  setFilter: (filter) => set({ filter }),
}));
