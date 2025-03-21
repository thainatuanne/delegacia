import { prismaClient } from "../database/prisma.client";
import { CreateCriminosoDTO } from "../dtos/criminoso.dto";
import { HTTPError } from "../utils/http.error";

export class CriminosoService {
    public async listar(): Promise<any> {
        const criminosos = await prismaClient.criminoso.findMany({
            include: {
                crimes: true,
                endereco: true
            }
        });

        if (!criminosos.length) {
            throw new HTTPError(404, "Nenhum criminoso encontrado.");
        }

        return criminosos;
    }

    public async buscarPorId(id: string): Promise<any> {
        const criminoso = await prismaClient.criminoso.findUnique({
            where: { id },
            include: {
                crimes: true,
                endereco: true
            }
        });
        if (!criminoso) throw new HTTPError(404, "Criminoso não encontrado.");
        return criminoso;
    }

    public async cadastrar(data: CreateCriminosoDTO): Promise<any> {
        if (!data.nome || !data.sobrenome || !data.cpf || !data.data_nascimento) {
            throw new HTTPError(400, "Nome, sobrenome, CPF e data de nascimento são obrigatórios.");
        }

        const cpfExistente = await prismaClient.criminoso.findUnique({
            where: {
                cpf: data.cpf
            }
        });
        if (cpfExistente) {
            throw new HTTPError(409, "CPF já cadastrado.");
        }

        return await prismaClient.criminoso.create({
            data
        });
    }
}
