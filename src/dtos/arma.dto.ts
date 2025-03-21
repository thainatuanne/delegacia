import { TipoArma } from "@prisma/client";

export interface CreateArmaDTO {
    tipo: TipoArma;
    modelo: string;
    numero_serie: string;
    crimeId: string;
}
