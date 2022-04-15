import express, { Express, json } from 'express';
import connection from './sequelize';
import conceptoRouter from '../routes/concepto.route';


const port_server = Number(process.env.PORT_SERVER);

export default class Server {
    private readonly app: Express;
    private readonly port: number;

    constructor() {
        this.app = express();
        this.port = port_server;
        this.bodyParser();
        this.router();
    }

    private bodyParser() {
        this.app.use(json());
    }

    private router() {
        this.app.use(conceptoRouter);
    }

    start() {
        this.app.listen(this.port, async () => {
            console.log(`Server Online port:${this.port}`);
            await connection.sync();
            console.log(`Connect data base`);
        });
    }
}