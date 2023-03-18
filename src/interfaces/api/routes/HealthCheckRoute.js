import {Router} from "express";
import HealthCheckService from "../../../domain/services/HealthCheckService.js";
import HealthCheckController from "../controllers/HealthCheckController.js";
import HealthCheckRepository from "../../../infra/repositories/HealthCheckRepository.js";

const HealthCheckRoutes = Router();

const controller = new HealthCheckController({
    service: new HealthCheckService(new HealthCheckRepository())
})

HealthCheckRoutes.get('/', controller.get.bind(controller));

export default HealthCheckRoutes;