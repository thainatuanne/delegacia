import { Request, Response } from "express";
import { CriminosoService } from "../services/criminoso.service";
import { CreateCriminosoDTO } from "../dtos/criminoso.dto";
import { onError } from "../utils/on-error";

export class CriminosoController {
    public async listar(req: Request, res: Response) {
        try {
            const service = new CriminosoService();
            const criminosos = await service.listar();
            res.status(200).json({
                sucesso: true,
                mensagem: "Criminosos listados com sucesso",
                dados: criminosos
            });
        } catch (error) {
            onError(error, res);
        }
    }

    public async buscarPorId(req: Request, res: Response) {
        try {
            const { id } = req.params;
            const service = new CriminosoService();
            const criminoso = await service.buscarPorId(id);
            res.status(200).json({
                sucesso: true,
                mensagem: "Criminoso encontrado",
                dados: criminoso
            });
        } catch (error) {
            onError(error, res);
        }
    }

    public async cadastrar(req: Request, res: Response) {
        try {
            const criminosoData: CreateCriminosoDTO = req.body;
            const service = new CriminosoService();
            const criminoso = await service.cadastrar(criminosoData);
            res.status(201).json({
                sucesso: true,
                mensagem: "Criminoso cadastrado",
                dados: criminoso
            });
        } catch (error) {
            onError(error, res);
        }
    }
}
