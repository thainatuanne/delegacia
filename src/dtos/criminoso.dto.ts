import { Antecedentes } from "@prisma/client";

export interface CreateCriminosoDTO {
    nome: string;
    sobrenome: string;
    cpf: string;
    data_nascimento: Date;
    enderecoId?: string;
    antecedentes_criminais: Antecedentes;
}
