import { prismaClient } from "../database/prisma.client";
import { CreateEnderecoDTO } from "../dtos/endereco.dto";
import { HTTPError } from "../utils/http.error";

export class EnderecoService {
    public async listar(): Promise<any> {
        const enderecos = await prismaClient.endereco.findMany();
        if (!enderecos.length) throw new HTTPError(404, "Nenhum endereço encontrado.");
        return enderecos;
    }

    public async buscarPorId(id: string): Promise<any> {
        const endereco = await prismaClient.endereco.findUnique({
            where: { id }
        });
        if (!endereco) throw new HTTPError(404, "Endereço não encontrado.");
        return endereco;
    }

    public async cadastrar(data: CreateEnderecoDTO): Promise<any> {
        if (!data.rua || !data.numero || !data.bairro || !data.cidade || !data.estado || !data.cep) {
            throw new HTTPError(400, "Todos os campos do endereço são obrigatórios.");
        }

        return await prismaClient.endereco.create({
            data
        });
    }
}