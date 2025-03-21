-- CreateEnum
CREATE TYPE "Antecedentes" AS ENUM ('SEM_ANTECEDENTES', 'CRIMINOSO_OCASIONAL', 'REINCIDENTE', 'PERIGOSO');

-- CreateTable
CREATE TABLE "criminosos" (
    "id" UUID NOT NULL,
    "nome" VARCHAR(100) NOT NULL,
    "sobrenome" VARCHAR(100) NOT NULL,
    "cpf" CHAR(11) NOT NULL,
    "data_nascimento" TIMESTAMP(3) NOT NULL,
    "antecedentes_criminais" "Antecedentes" NOT NULL DEFAULT 'SEM_ANTECEDENTES',

    CONSTRAINT "criminosos_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "criminosos_cpf_key" ON "criminosos"("cpf");
