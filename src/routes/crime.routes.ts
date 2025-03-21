import { Router } from "express";
import { CrimeController } from "../controllers/crime.controller";

export class CrimeRoutes {
    public static bind(): Router {
        const router = Router();
        const controller = new CrimeController();

        router.get("/crimes", controller.listar.bind(controller));
        router.get("/crimes/:id", controller.buscarPorId.bind(controller));
        router.post("/crimes", controller.cadastrar.bind(controller));

        return router;
    }
}