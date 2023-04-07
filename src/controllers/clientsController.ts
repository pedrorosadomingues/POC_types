import { Request, Response } from "express";
import clientServices from "../services/clientsServices.js";
import { Client } from "../protocols/Client.js";


async function showAllClients(req: Request, res: Response, next) {

    try {
        const allClients = await clientServices.showAllClients();
        return res.send(allClients);
    } catch (err) {
        next(err)
    }
}

async function createClient(req: Request, res: Response, next) {
    try {
        const client = req.body as Client;
        const newClient = await clientServices.createClient(client);
        return res.send(newClient);
    } catch (err) {
        next(err)
    }
}

async function deleteClient(req: Request, res: Response, next) {
    try {
        const { id } = req.params;
        await clientServices.deleteClient(id);
        return res.sendStatus(204);
    } catch (err) {
        next(err)
    }
}

async function updateClient(req: Request, res: Response, next) {
    try {
        const { id } = req.params as Client;
        const { name, age } = req.body as Client;
        const client = { id, name, age } 
        const updatedClient = await clientServices.updateClient(client);
        return res.send(updatedClient);
    } catch (err) {
        next(err)
    }
}

export default {
    showAllClients,
    createClient,
    deleteClient,
    updateClient
}