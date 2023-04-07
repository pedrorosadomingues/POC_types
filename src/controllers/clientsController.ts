import { Request, Response } from "express";
import clientServices from "../services/clientsServices.js";
import { Client } from "../protocols/Client.js";
import { clientSchema } from "../schemas/clientSchemas.js";

async function showAllClients(req: Request, res: Response, next) {
  try {
    const allClients = await clientServices.showAllClients();
    return res.send(allClients);
  } catch (err) {
    next(err);
  }
}

async function createClient(req: Request, res: Response, next) {
  try {
    const client = req.body as Client;
    const { error } = clientSchema.validate(client, { abortEarly: false });
    if (error) {
      const errorDetails = error.details.map((err) => {
        return err.message;
      });
      return res.status(400).send(errorDetails);
    }
    const newClient = await clientServices.createClient(client);
    return res.send(newClient);
  } catch (err) {
    next(err);
  }
}

async function deleteClient(req: Request, res: Response, next) {
  try {
    const { id } = req.params;
    await clientServices.deleteClient(id);
    return res.sendStatus(204);
  } catch (err) {
    next(err);
  }
}

async function updateClient(req: Request, res: Response, next) {
  try {
    const { id }= req.params;
    const { name, age } = req.body as Client;
    const client = { id, name, age };
    const updatedClient = await clientServices.updateClient(client);
    return res.send(updatedClient);
  } catch (err) {
    next(err);
  }
}

export default {
  showAllClients,
  createClient,
  deleteClient,
  updateClient,
};
