import * as express from 'express'
import { Application } from 'express'
import { AbstractController } from 'controllers/asbtract.controller'
import { Middleware } from 'middleware/logger'

class App {
    public app: Application
    public port: number

    constructor(appInit: { port: number; middleWares: Middleware[]; controllers: AbstractController[]; }) {
        this.app = express()
        this.port = appInit.port

        this.middlewares(appInit.middleWares)
        this.routes(appInit.controllers)
        // this.assets()
    }

    private middlewares(middleWares: Middleware[]) {
        middleWares.forEach(middleWare => {
            this.app.use(middleWare)
        })
    }

    private routes(controllers: AbstractController[] ) {
        controllers.forEach(controller => {
            this.app.use('/', controller.router)
        })
    }

    // private assets() {
    //     this.app.use(express.static('public'))
    //     this.app.use(express.static('views'))
    // }


    public listen() {
        this.app.listen(this.port, () => {
            console.log(`App listening on the http://localhost:${this.port}`)
        })
    }
}

export default App
