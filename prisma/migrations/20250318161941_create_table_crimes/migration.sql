-- CreateTable
CREATE TABLE "crimes" (
    "id" UUID NOT NULL,
    "descricao" TEXT NOT NULL,
    "data_ocorrencia" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "crimes_pkey" PRIMARY KEY ("id")
);
