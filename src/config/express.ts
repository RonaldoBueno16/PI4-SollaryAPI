import express, { Express, NextFunction, Request, Response } from 'express';
import cors from 'cors';
import fs from 'fs';

import { IApp } from './@types/App';
import path from 'path';

const options: cors.CorsOptions = {
    allowedHeaders: [
        'Origin',
        'X-Requested-With',
        'Content-Type',
        'Accept',
        'X-Access-Token',
    ],
    credentials: true,
    methods: 'GET,HEAD,OPTIONS,PUT,PATCH,POST,DELETE',
    preflightContinue: false
}

class App implements IApp {
    app = express();

    constructor() {
        this.app.use(express.json());

        this.middlewares();
        this.routes();
    }

    middlewares() {
        this.app.use(cors(options));
    }

    routes() {
        const jsonPath = path.join(__dirname, '..', 'routes');
        const routesFile = fs.readdirSync(jsonPath).forEach(file => this.app.use(require(`${jsonPath}/${file}`)));
    }
}

export default new App().app;