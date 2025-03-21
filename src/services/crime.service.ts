import { prismaClient } from "../database/prisma.client";
import { CreateCrimeDTO } from "../dtos/crime.dto";
import { HTTPError } from "../utils/http.error";

export class CrimeService {

    public async listar(): Promise<any> {
        const crimes = await prismaClient.crime.findMany({
            include: {
                criminoso: true,
                armas: true
            },
        });

        if (!crimes.length) {
            throw new HTTPError(404, "Nenhum crime encontrado.");
        }

        return crimes;
    }

    public async buscarPorId(id: string): Promise<any> {
        const crime = await prismaClient.crime.findUnique({
            where: { id },
            include: {
                criminoso: true,
                armas: true
            },
        });

        if (!crime) {
            throw new HTTPError(404, "Crime não encontrado.");
        }

        return crime;
    }

    public async cadastrar(data: CreateCrimeDTO): Promise<any> {
        if (!data.descricao || !data.criminosoId) {
            throw new HTTPError(400, "Descrição e criminosoId são obrigatórios.");
        }

        const criminosoExiste = await prismaClient.criminoso.findUnique({
            where: {
                id: data.criminosoId
            },
        });

        if (!criminosoExiste) {
            throw new HTTPError(404, "Criminoso não encontrado.");
        }

        const crime = await prismaClient.crime.create({
            data: {
                descricao: data.descricao,
                criminosoId: data.criminosoId,
            },
        });

        if (data.armas && data.armas.length > 0) {
            for (const arma of data.armas) {
                await prismaClient.arma.create({
                    data: {
                        tipo: arma.tipo,
                        modelo: arma.modelo,
                        numero_serie: arma.numero_serie,
                        crimeId: crime.id,
                    },
                });
            }
        }

        return await prismaClient.crime.findUnique({
            where: {
                id: crime.id
            },
            include: {
                criminoso: true,
                armas: true
            },
        });
    }
}