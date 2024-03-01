/*
  Warnings:

  - You are about to drop the column `seasons_id` on the `Fruits` table. All the data in the column will be lost.
  - You are about to drop the column `seasons_id` on the `Vegetables` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[name]` on the table `Fruits` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[name]` on the table `Seasons` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[name]` on the table `Vegetables` will be added. If there are existing duplicate values, this will fail.

*/
-- DropForeignKey
ALTER TABLE "Fruits" DROP CONSTRAINT "Fruits_seasons_id_fkey";

-- DropForeignKey
ALTER TABLE "Vegetables" DROP CONSTRAINT "Vegetables_seasons_id_fkey";

-- AlterTable
ALTER TABLE "Fruits" DROP COLUMN "seasons_id",
ADD COLUMN     "seasons_name" TEXT;

-- AlterTable
ALTER TABLE "Vegetables" DROP COLUMN "seasons_id",
ADD COLUMN     "seasons_name" TEXT;

-- CreateIndex
CREATE UNIQUE INDEX "Fruits_name_key" ON "Fruits"("name");

-- CreateIndex
CREATE UNIQUE INDEX "Seasons_name_key" ON "Seasons"("name");

-- CreateIndex
CREATE UNIQUE INDEX "Vegetables_name_key" ON "Vegetables"("name");

-- AddForeignKey
ALTER TABLE "Fruits" ADD CONSTRAINT "Fruits_seasons_name_fkey" FOREIGN KEY ("seasons_name") REFERENCES "Seasons"("name") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Vegetables" ADD CONSTRAINT "Vegetables_seasons_name_fkey" FOREIGN KEY ("seasons_name") REFERENCES "Seasons"("name") ON DELETE SET NULL ON UPDATE CASCADE;
