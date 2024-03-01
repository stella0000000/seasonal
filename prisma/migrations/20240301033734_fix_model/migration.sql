/*
  Warnings:

  - You are about to drop the `Fruits` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Seasons` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Vegetables` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "Fruits" DROP CONSTRAINT "Fruits_seasons_name_fkey";

-- DropForeignKey
ALTER TABLE "Vegetables" DROP CONSTRAINT "Vegetables_seasons_name_fkey";

-- DropTable
DROP TABLE "Fruits";

-- DropTable
DROP TABLE "Seasons";

-- DropTable
DROP TABLE "Vegetables";

-- CreateTable
CREATE TABLE "Season" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "Season_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Fruit" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "seasons_name" TEXT,

    CONSTRAINT "Fruit_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Vegetable" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "seasons_name" TEXT,

    CONSTRAINT "Vegetable_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Season_name_key" ON "Season"("name");

-- AddForeignKey
ALTER TABLE "Fruit" ADD CONSTRAINT "Fruit_seasons_name_fkey" FOREIGN KEY ("seasons_name") REFERENCES "Season"("name") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Vegetable" ADD CONSTRAINT "Vegetable_seasons_name_fkey" FOREIGN KEY ("seasons_name") REFERENCES "Season"("name") ON DELETE SET NULL ON UPDATE CASCADE;
