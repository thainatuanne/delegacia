import { prismaClient } from "../database/prisma.client";
import { CreateArmaDTO } from "../dtos/arma.dto";
import { HTTPError } from "../utils/http.error";

export class ArmaService {
    public async listar(): Promise<any> {
        const armas = await prismaClient.arma.findMany({ include: { crime: true } });
        return armas;
    }

    public async buscarPorId(id: string): Promise<any> {
        const arma = await prismaClient.arma.findUnique({
            where: { id },
            include: {
                crime: true
            }
        });
        if (!arma) throw new HTTPError(404, "Arma não encontrada.");
        return arma;
    }

    public async cadastrar({ tipo, modelo, numero_serie, crimeId }: CreateArmaDTO): Promise<any> {
        if (!tipo || !modelo || !numero_serie || !crimeId) {
            throw new HTTPError(400, "Todos os campos são obrigatórios.");
        }

        const numeroSerieExistente = await prismaClient.arma.findUnique({
            where: { numero_serie }
        });
        if (numeroSerieExistente) throw new HTTPError(409, "Número de série já cadastrado.");

        const crimeExiste = await prismaClient.crime.findUnique({
            where: {
                id: crimeId
            }
        });
        if (!crimeExiste) throw new HTTPError(404, "Crime não encontrado.");

        return await prismaClient.arma.create({
            data: {
                tipo,
                modelo,
                numero_serie,
                crimeId
            }
        });
    }
}