import pg from 'pg';    

const { Pool } = pg;

const connection = new Pool({
    connectionString: "postgres://uzxlaulk:NMBAa4YoEB2GzMX3NYccsTLYEf2jQwLq@babar.db.elephantsql.com/uzxlaulk"
});

export default connection;