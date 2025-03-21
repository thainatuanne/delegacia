import { TipoArma } from "@prisma/client";

export interface CreateCrimeDTO {
    descricao: string;
    criminosoId: string;
    armas: {
        tipo: TipoArma;
        modelo: string;
        numero_serie: string
    }[];
}
