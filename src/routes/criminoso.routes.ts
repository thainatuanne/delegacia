import { Router } from "express";
import { CriminosoController } from "../controllers/criminoso.controller";

export class CriminosoRoutes {
    public static bind(): Router {
        const router = Router();
        const controller = new CriminosoController();

        router.get("/criminosos", controller.listar.bind(controller));
        router.get("/criminosos/:id", controller.buscarPorId.bind(controller));
        router.post("/criminosos", controller.cadastrar.bind(controller));

        return router;
    }
}