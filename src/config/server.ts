import express, { Express } from 'express';
import connection from './sequelize';


const port_server = Number(process.env.PORT_SERVER);

export default class Server {
    private readonly app: Express;
    private readonly port: number;

    constructor() {
        this.app = express();
        this.port = port_server;
    }

    start() {
        this.app.listen(this.port, async () => {
            console.log(`Server Online port:${this.port}`);
            await connection.sync();
            console.log(`Connect data base`);
        });
    }
}