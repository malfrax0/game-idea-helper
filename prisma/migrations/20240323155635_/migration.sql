-- CreateEnum
CREATE TYPE "IdeaCategory" AS ENUM ('GAMEPLAY', 'STORY', 'MUSIC', 'DESIGN', 'UIUX', 'ANIMATION');

-- CreateEnum
CREATE TYPE "TaskSpace" AS ENUM ('BACKLOG', 'READY', 'DESIGN', 'DOING', 'ONHOLD', 'TEST', 'DONE');

-- AlterTable
ALTER TABLE "Theme" ALTER COLUMN "active" SET DEFAULT true;

-- CreateTable
CREATE TABLE "CreationSpace" (
    "id" SERIAL NOT NULL,
    "creationDate" TIMESTAMP(3) NOT NULL,
    "color" TEXT,

    CONSTRAINT "CreationSpace_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "GameSpace" (
    "id" SERIAL NOT NULL,
    "rejected" BOOLEAN NOT NULL DEFAULT false,
    "themeId" INTEGER NOT NULL,
    "creationSpaceId" INTEGER NOT NULL,

    CONSTRAINT "GameSpace_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "IdeaTags" (
    "id" SERIAL NOT NULL,
    "tag" TEXT NOT NULL,
    "color" TEXT,
    "creationSpaceId" INTEGER,

    CONSTRAINT "IdeaTags_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "TaskTags" (
    "id" SERIAL NOT NULL,
    "tag" TEXT NOT NULL,
    "color" TEXT,
    "creationSpaceId" INTEGER,

    CONSTRAINT "TaskTags_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Idea" (
    "id" SERIAL NOT NULL,
    "title" TEXT,
    "content" TEXT NOT NULL,
    "category" "IdeaCategory" NOT NULL,
    "tags" TEXT[],
    "gameSpaceId" INTEGER NOT NULL,

    CONSTRAINT "Idea_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Task" (
    "id" SERIAL NOT NULL,
    "title" TEXT NOT NULL,
    "content" TEXT NOT NULL,
    "space" "TaskSpace" NOT NULL,
    "gameSpaceId" INTEGER NOT NULL,
    "ideaId" INTEGER,

    CONSTRAINT "Task_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "IdeaTags_creationSpaceId_tag_key" ON "IdeaTags"("creationSpaceId", "tag");

-- CreateIndex
CREATE UNIQUE INDEX "TaskTags_creationSpaceId_tag_key" ON "TaskTags"("creationSpaceId", "tag");

-- AddForeignKey
ALTER TABLE "GameSpace" ADD CONSTRAINT "GameSpace_themeId_fkey" FOREIGN KEY ("themeId") REFERENCES "Theme"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "GameSpace" ADD CONSTRAINT "GameSpace_creationSpaceId_fkey" FOREIGN KEY ("creationSpaceId") REFERENCES "CreationSpace"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "IdeaTags" ADD CONSTRAINT "IdeaTags_creationSpaceId_fkey" FOREIGN KEY ("creationSpaceId") REFERENCES "CreationSpace"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "TaskTags" ADD CONSTRAINT "TaskTags_creationSpaceId_fkey" FOREIGN KEY ("creationSpaceId") REFERENCES "CreationSpace"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Idea" ADD CONSTRAINT "Idea_gameSpaceId_fkey" FOREIGN KEY ("gameSpaceId") REFERENCES "GameSpace"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Task" ADD CONSTRAINT "Task_gameSpaceId_fkey" FOREIGN KEY ("gameSpaceId") REFERENCES "GameSpace"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Task" ADD CONSTRAINT "Task_ideaId_fkey" FOREIGN KEY ("ideaId") REFERENCES "Idea"("id") ON DELETE SET NULL ON UPDATE CASCADE;
