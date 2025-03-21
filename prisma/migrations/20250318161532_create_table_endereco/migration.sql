-- CreateEnum
CREATE TYPE "Estados" AS ENUM ('AC', 'AL', 'AP', 'AM', 'BA', 'CE', 'DF', 'ES', 'GO', 'MA', 'MT', 'MS', 'MG', 'PA', 'PB', 'PR', 'PE', 'PI', 'RJ', 'RN', 'RS', 'RO', 'RR', 'SC', 'SP', 'SE', 'TO');

-- CreateTable
CREATE TABLE "enderecos" (
    "id" UUID NOT NULL,
    "rua" VARCHAR(100) NOT NULL,
    "numero" VARCHAR(50) NOT NULL,
    "bairro" VARCHAR(100) NOT NULL,
    "cidade" VARCHAR(100) NOT NULL,
    "estado" "Estados" NOT NULL DEFAULT 'RS',
    "cep" VARCHAR(10) NOT NULL,

    CONSTRAINT "enderecos_pkey" PRIMARY KEY ("id")
);
