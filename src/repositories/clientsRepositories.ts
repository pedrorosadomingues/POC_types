import connection from "../config/database.js";

async function findAll() {
    const clients = await connection.query('SELECT * FROM clients');
    return clients.rows;
}

export default {
    findAll
}