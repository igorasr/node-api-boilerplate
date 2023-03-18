import { Router } from 'express';
const baseRoutes = Router();

import HealthCheckRoutes from './HealthCheckRoute.js';
baseRoutes.use(HealthCheckRoutes);


export default baseRoutes;