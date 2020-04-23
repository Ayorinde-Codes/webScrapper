import http from 'http'
import express from 'express'

import logger from 'morgan';
import bodyParser from 'body-parser';
import routes from './server/routes';
require('dotenv').config();

    const hostname = process.env.DB_HOST;
    const port =  process.env.PORT;
    const app = express()
    const server = http.createServer(app);

    app.use(logger('dev'));
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({ extended: false }));

    routes(app);

    app.get('*', (req, res) => res.status(200).send({
        message: 'Welcome to Web Scrapping api with nodejs by Ayorinde-codes',
    }));

    server.listen(port, hostname, () => {
        console.log(`Server running at http://${hostname}:${port}/`);
    });