/*
  Warnings:

  - A unique constraint covering the columns `[theme]` on the table `Theme` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "Theme_theme_key" ON "Theme"("theme");
