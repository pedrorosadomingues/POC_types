import { Request, Response } from "express";
import clientServices from "../services/clientsServices.js";

async function showAllClients(req: Request, res: Response, next) {

    try {
        const allClients = await clientServices.showAllClients();
        return res.send(allClients);
    } catch (err) {
        next(err)
    }
}

export default {
    showAllClients
}