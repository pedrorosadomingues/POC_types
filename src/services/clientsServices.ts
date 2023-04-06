import  clientsRepositories  from "../repositories/clientsRepositories.js";

async function showAllClients() {
    const clients = await clientsRepositories.findAll();
    return clients;    
}

export default {
    showAllClients
}