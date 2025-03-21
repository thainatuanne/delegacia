-- CreateEnum
CREATE TYPE "TipoArma" AS ENUM ('REVOLVER', 'PISTOLA', 'FUZIL', 'ESPINGARDA', 'ARMA_BRANCA', 'OUTRA');

-- CreateTable
CREATE TABLE "armas" (
    "id" UUID NOT NULL,
    "tipo" "TipoArma" NOT NULL DEFAULT 'REVOLVER',
    "modelo" VARCHAR(100) NOT NULL,
    "numero_serie" VARCHAR(80) NOT NULL,

    CONSTRAINT "armas_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "armas_numero_serie_key" ON "armas"("numero_serie");
