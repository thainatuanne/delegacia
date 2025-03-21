import { Request, Response } from "express";
import { ArmaService } from "../services/arma.service";
import { CreateArmaDTO } from "../dtos/arma.dto";
import { onError } from "../utils/on-error";

export class ArmaController {
    public async listar(req: Request, res: Response) {
        try {
            const service = new ArmaService();
            const armas = await service.listar();
            res.status(200).json({
                sucesso: true,
                mensagem: "Armas listadas com sucesso",
                dados: armas
            });
        } catch (error) {
            onError(error, res);
        }
    }

    public async cadastrar(req: Request, res: Response) {
        try {
            const armaData: CreateArmaDTO = req.body;
            const service = new ArmaService();
            const arma = await service.cadastrar(armaData);
            res.status(201).json({ sucesso: true, mensagem: "Arma cadastrada", dados: arma });
        } catch (error) {
            onError(error, res);
        }
    }

    public async buscarPorId(req: Request, res: Response) {
        try {
            const { id } = req.params;
            const service = new ArmaService();
            const arma = await service.buscarPorId(id);
            res.status(200).json({ sucesso: true, mensagem: "Arma encontrada", dados: arma });
        } catch (error) {
            onError(error, res);
        }
    }
}