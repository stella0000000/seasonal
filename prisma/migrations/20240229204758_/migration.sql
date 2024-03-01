-- CreateTable
CREATE TABLE "Seasons" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "Seasons_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Fruits" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "seasons_id" INTEGER NOT NULL,

    CONSTRAINT "Fruits_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Vegetables" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "seasons_id" INTEGER NOT NULL,

    CONSTRAINT "Vegetables_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Fruits" ADD CONSTRAINT "Fruits_seasons_id_fkey" FOREIGN KEY ("seasons_id") REFERENCES "Seasons"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Vegetables" ADD CONSTRAINT "Vegetables_seasons_id_fkey" FOREIGN KEY ("seasons_id") REFERENCES "Seasons"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
