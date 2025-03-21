import { Router } from "express";
import { ArmaController } from "../controllers/arma.controller";

export class ArmaRoutes {
    public static bind(): Router {
        const router = Router();
        const controller = new ArmaController();

        router.get("/armas", controller.listar.bind(controller));
        router.get("/armas/:id", controller.buscarPorId.bind(controller));
        router.post("/armas", controller.cadastrar.bind(controller));

        return router;
    }
}