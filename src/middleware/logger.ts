import { Request, Response } from 'express'

export type Middleware = any;

const loggerMiddleware: Middleware  = (req: Request, resp: Response, next) => {

    console.log('Request logged:', req.method, req.path)
    next()
}

export default loggerMiddleware
