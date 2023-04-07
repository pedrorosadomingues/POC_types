import { QueryResult } from "pg";
import clientsRepositories from "../repositories/clientsRepositories.js";
import { Client, ClientEntity } from "../protocols/Client.js";

async function showAllClients(): Promise<QueryResult<Client[]>> {
  return await clientsRepositories.findAll();
}

async function createClient(client: Client): Promise<void> {
  await clientsRepositories.create(client);
}

async function deleteClient(id: string): Promise<void> {
  await clientsRepositories.deleteClient(id);
}

async function updateClient(client: ClientEntity): Promise<QueryResult<Client>> {
  return await clientsRepositories.updateClient(client);
}

export default {
  showAllClients,
  createClient,
  deleteClient,
  updateClient,
};
