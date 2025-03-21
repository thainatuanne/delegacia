import { Request, Response } from "express";
import { EnderecoService } from "../services/endereco.service";
import { CreateEnderecoDTO } from "../dtos/endereco.dto";
import { onError } from "../utils/on-error";

export class EnderecoController {
    public async listar(req: Request, res: Response) {
        try {
            const service = new EnderecoService();
            const enderecos = await service.listar();
            res.status(200).json({
                sucesso: true,
                mensagem: "Endereços listados com sucesso",
                dados: enderecos
            });
        } catch (error) {
            onError(error, res);
        }
    }

    public async buscarPorId(req: Request, res: Response) {
        try {
            const { id } = req.params;
            const service = new EnderecoService();
            const endereco = await service.buscarPorId(id);
            res.status(200).json({
                sucesso: true,
                mensagem: "Endereço encontrado",
                dados: endereco
            });
        } catch (error) {
            onError(error, res);
        }
    }

    public async cadastrar(req: Request, res: Response) {
        try {
            const enderecoData: CreateEnderecoDTO = req.body;
            const service = new EnderecoService();
            const endereco = await service.cadastrar(enderecoData);
            res.status(201).json({
                sucesso: true,
                mensagem: "Endereço cadastrado",
                dados: endereco
            });
        } catch (error) {
            onError(error, res);
        }
    }
}