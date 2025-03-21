import { Router } from "express";
import { EnderecoController } from "../controllers/endereco.controller";

export class EnderecoRoutes {
    public static bind(): Router {
        const router = Router();
        const controller = new EnderecoController();

        router.get("/enderecos", controller.listar.bind(controller));
        router.get("/enderecos/:id", controller.buscarPorId.bind(controller));
        router.post("/enderecos", controller.cadastrar.bind(controller));

        return router;
    }
}
