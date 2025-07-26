-- CreateEnum
CREATE TYPE "Label" AS ENUM ('Bug', 'Feature', 'Documentation');

-- CreateEnum
CREATE TYPE "Priority" AS ENUM ('Low', 'Medium', 'High');

-- CreateEnum
CREATE TYPE "Status" AS ENUM ('Backlog', 'Todo', 'In_Progress', 'Done', 'Canceled');

-- CreateTable
CREATE TABLE "Task" (
    "taskId" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "label" "Label" NOT NULL,
    "isFavorite" BOOLEAN NOT NULL,
    "priority" "Priority" NOT NULL,
    "status" "Status" NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Task_pkey" PRIMARY KEY ("taskId")
);
