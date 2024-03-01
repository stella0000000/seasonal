/*
  Warnings:

  - You are about to drop the column `seasons_name` on the `Fruit` table. All the data in the column will be lost.
  - You are about to drop the column `seasons_name` on the `Vegetable` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "Fruit" DROP CONSTRAINT "Fruit_seasons_name_fkey";

-- DropForeignKey
ALTER TABLE "Vegetable" DROP CONSTRAINT "Vegetable_seasons_name_fkey";

-- AlterTable
ALTER TABLE "Fruit" DROP COLUMN "seasons_name",
ADD COLUMN     "season_name" TEXT;

-- AlterTable
ALTER TABLE "Vegetable" DROP COLUMN "seasons_name",
ADD COLUMN     "season_name" TEXT;

-- AddForeignKey
ALTER TABLE "Fruit" ADD CONSTRAINT "Fruit_season_name_fkey" FOREIGN KEY ("season_name") REFERENCES "Season"("name") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Vegetable" ADD CONSTRAINT "Vegetable_season_name_fkey" FOREIGN KEY ("season_name") REFERENCES "Season"("name") ON DELETE SET NULL ON UPDATE CASCADE;
