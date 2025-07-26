import { prisma } from '@/lib/prisma'
import { NextResponse } from 'next/server'

// GET all tasks
export async function GET() {
  const tasks = await prisma.task.findMany({
    orderBy: { createdAt: 'desc' }
  })
  return NextResponse.json(tasks)
}

// POST new task
export async function POST(req: Request) {
  const body = await req.json()

  const { title, label, priority } = body

  if (!title || !label || !priority) {
    return NextResponse.json({ error: 'Missing fields' }, { status: 400 })
  }

  const newTask = await prisma.task.create({
    data: {
      title,
      label,
      isFavorite: false,
      priority,
      status: 'Todo',
    },
  })

  return NextResponse.json(newTask)
}
