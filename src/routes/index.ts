import { Router } from "express";
import clientsRoutes from "./clientsRoutes.js";

const routes = Router();

routes.use("/", clientsRoutes);

export default routes;