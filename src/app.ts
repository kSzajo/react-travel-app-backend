// polyfill
// import "reflect-metadata";

import Bundler from './bundler'

import * as bodyParser from 'body-parser'
import loggerMiddleware from './middleware/logger'
import * as cors from 'cors';
import PlaceController from './controllers/place.controller'

const app = new Bundler({
    port: 5000,
    controllers: [
        new PlaceController().init(),
    ],
    middleWares: [
        bodyParser.json(),
        bodyParser.urlencoded({ extended: true }),
        loggerMiddleware,
        cors()
    ]
})

app.listen()
