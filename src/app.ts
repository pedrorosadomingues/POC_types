import express from "express";
import cors from "cors";
import routes from "./routes/index.js";

const server = express();

server.use(cors());
server.use(express.json());
server.use(routes);

server.listen(4000, () => {
    console.log("Server is running on port 4000")
})