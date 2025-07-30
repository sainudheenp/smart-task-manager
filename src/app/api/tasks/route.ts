import { prisma } from '@/lib/prisma'
import { auth } from '@clerk/nextjs/server';
import { NextResponse } from 'next/server'

// GET all tasks
export async function GET() {
  const session = await auth();
  const userId = session?.userId;
  if (!userId) {
    return NextResponse.json([], { status: 401 });
  }
  const tasks = await prisma.task.findMany({
    where: { userId },
    orderBy: { createdAt: 'desc' }
  });
  return NextResponse.json(tasks);
}

// POST new task
export async function POST(req: Request) {
  const session = await auth();
  const userId = session?.userId;
  if (!userId) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }
  const body = await req.json();
  const { title, label, priority } = body;
  if (!title || !label || !priority) {
    return NextResponse.json({ error: 'Missing fields' }, { status: 400 });
  }
  const newTask = await prisma.task.create({
    data: {
      title,
      label,
      isFavorite: false,
      priority,
      status: 'Todo',
      userId,
    },
  });
  return NextResponse.json(newTask);
}
