import { QueryResult } from "pg";
import connection from "../config/database.js";
import { Client, ClientEntity } from "../protocols/Client.js";

async function findAll(): Promise<QueryResult<Client[]>> {
    return connection.query('SELECT * FROM clients');  
}

async function create(client: Client): Promise<void>  {
    await connection.query('INSERT INTO clients (name, age) VALUES ($1, $2) RETURNING *', [client.name, client.age]); 
}

async function deleteClient(id: string): Promise<void> {
    await connection.query('DELETE FROM clients WHERE id = $1', [id]);
}

async function updateClient(client: ClientEntity): Promise<QueryResult<Client>> {
    const updatedClient = await connection.query('UPDATE clients SET name = $1, age = $2 WHERE id = $3 RETURNING *', [client.name, client.age, client.id]);
    return updatedClient.rows[0];
}
export default {
    findAll,
    create,
    deleteClient,
    updateClient
}