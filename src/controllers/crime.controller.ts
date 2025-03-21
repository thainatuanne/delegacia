import { Request, Response } from "express";
import { CrimeService } from "../services/crime.service";
import { CreateCrimeDTO } from "../dtos/crime.dto";
import { onError } from "../utils/on-error";

export class CrimeController {
    public async listar(req: Request, res: Response) {
        try {
            const service = new CrimeService();
            const crimes = await service.listar();
            res.status(200).json({
                sucesso: true,
                mensagem: "Crimes listados com sucesso",
                dados: crimes
            });
        } catch (error) {
            onError(error, res);
        }
    }

    public async buscarPorId(req: Request, res: Response) {
        try {
            const { id } = req.params;
            const service = new CrimeService();
            const crime = await service.buscarPorId(id);
            res.status(200).json({
                sucesso: true,
                mensagem: "Crime encontrado",
                dados: crime
            });
        } catch (error) {
            onError(error, res);
        }
    }

    public async cadastrar(req: Request, res: Response) {
        try {
            const crimeData: CreateCrimeDTO = req.body;
            const service = new CrimeService();
            const crime = await service.cadastrar(crimeData);
            res.status(201).json({
                sucesso: true,
                mensagem: "Crime cadastrado",
                dados: crime
            });
        } catch (error) {
            onError(error, res);
        }
    }
}