import * as express from 'express'
import { Request, Response } from 'express'
import { AbstractController } from './asbtract.controller'
import Place from 'model/place'

class PlaceController extends AbstractController {
    public path = '/places'

    public router = express.Router()

    private places: Place[] = [
        {
            id: 1,
            dimension: 'Unknown',
            price: 15
        }
    ]

    public init(): PlaceController  {
        this.router.get(this.path + '/:id', this.fetch)
        this.router.get(this.path, this.browse)
        this.router.post(this.path, this.create)
        return this;
    }

    fetch = (req: Request, res: Response): void => {
        const id = +req.params.id
        let result = this.places.find(post => post.id == id)

        if (!result) {
            res.status(404).send({
                'error': 'Post not found!'
            })
        } else {

            res.status(200).send(result)

        }
    }

    browse = (req: Request, res: Response) => {
        res.send(this.places)
    }

    create = (req: Request, res: Response) => {
        const place: Place = req.body
        this.places.push(place)
        res.send(place)
    }
}

export default PlaceController