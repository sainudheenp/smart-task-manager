'use client'
import { useEffect, useState } from 'react'

type Task = {
  taskId: string
  title: string
  label: 'Bug' | 'Feature' | 'Documentation'
  priority: 'Low' | 'Medium' | 'High'
  status: 'Backlog' | 'Todo' | 'In_Progress' | 'Done' | 'Canceled'
  isFavorite: boolean
  createdAt: string
}

export default function HomePage() {
  const [tasks, setTasks] = useState<Task[]>([])
  const [title, setTitle] = useState('')
  const [label, setLabel] = useState('Bug')
  const [priority, setPriority] = useState('Medium')

  const fetchTasks = async () => {
    const res = await fetch('/api/tasks')
    const data = await res.json()
    setTasks(data)
  }

  useEffect(() => {
    fetchTasks()
  }, [])

  const addTask = async () => {
    const res = await fetch('/api/tasks', {
      method: 'POST',
      body: JSON.stringify({ title, label, priority }),
      headers: { 'Content-Type': 'application/json' }
    })
    const newTask = await res.json()
    setTasks([newTask, ...tasks])
    setTitle('')
  }

  return (
    <main className="p-6 max-w-xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">Tasks</h1>
      <div className="flex flex-col gap-2 mb-6">
        <input
          type="text"
          placeholder="Task title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="border px-3 py-2"
        />
        <select value={label} onChange={(e) => setLabel(e.target.value)} className="border px-3 py-2">
          <option>Bug</option>
          <option>Feature</option>
          <option>Documentation</option>
        </select>
        <select value={priority} onChange={(e) => setPriority(e.target.value)} className="border px-3 py-2">
          <option>Low</option>
          <option>Medium</option>
          <option>High</option>
        </select>
        <button onClick={addTask} className="bg-blue-600 text-white px-4 py-2">
          Add Task
        </button>
      </div>

      <ul className="space-y-2">
        {tasks.map((task) => (
          <li key={task.taskId} className="border p-3 rounded">
            <div className="font-semibold">{task.title}</div>
            <div className="text-sm text-gray-500">
              {task.label} | {task.priority} | {task.status}
            </div>
          </li>
        ))}
      </ul>
    </main>
  )
}
