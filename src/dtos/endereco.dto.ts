import { Estados } from "@prisma/client";

export interface CreateEnderecoDTO {
    rua: string;
    numero: string;
    bairro: string;
    cidade: string;
    estado: Estados;
    cep: string;

}