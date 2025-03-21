/*
  Warnings:

  - A unique constraint covering the columns `[enderecoId]` on the table `criminosos` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `crimeId` to the `armas` table without a default value. This is not possible if the table is not empty.
  - Added the required column `criminosoId` to the `crimes` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "armas" ADD COLUMN     "crimeId" UUID NOT NULL;

-- AlterTable
ALTER TABLE "crimes" ADD COLUMN     "criminosoId" UUID NOT NULL;

-- AlterTable
ALTER TABLE "criminosos" ADD COLUMN     "enderecoId" UUID;

-- CreateIndex
CREATE UNIQUE INDEX "criminosos_enderecoId_key" ON "criminosos"("enderecoId");

-- AddForeignKey
ALTER TABLE "criminosos" ADD CONSTRAINT "criminosos_enderecoId_fkey" FOREIGN KEY ("enderecoId") REFERENCES "enderecos"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "crimes" ADD CONSTRAINT "crimes_criminosoId_fkey" FOREIGN KEY ("criminosoId") REFERENCES "criminosos"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "armas" ADD CONSTRAINT "armas_crimeId_fkey" FOREIGN KEY ("crimeId") REFERENCES "crimes"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
