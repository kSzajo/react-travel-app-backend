import * as express from 'express';
import {Request, Response, Router} from 'express';
import "reflect-metadata";
import {container} from "tsyringe";
import {PlaceService} from '../services/place.service';
import {AbstractController} from './asbtract.controller';

class PlaceController extends AbstractController {
    public path = '/places'
    public router: Router = express.Router()
    public service: PlaceService = container.resolve(PlaceService)

    public init(): PlaceController {
        this.router.get(this.path + '/:id', this.getPlaceById)
        this.router.get(this.path, this.getAllPlaces)
        this.router.post(this.path, this.create)
        return this;
    }

    getPlaceById = (req: Request, res: Response): void => {
        const id = +req.params.id
        let result = this.service.getPlaceById(id)

        if (!result) {
            res.status(404).send({
                'error': 'Place not found!'
            })
        } else {
            res.status(200).send(result)
        }
    }

    getAllPlaces = (req: Request, res: Response) => {
       this.service.getAllPlaces()
           .then(x => res.send(x))
           .catch(err => {
               res.status(500)
               res.send('ERROR '+ err)
           })


    }

    create = (req: Request, res: Response) => {
        this.service.postPlace(req.body).then(x => res.send(x))
    }
}

export default PlaceController