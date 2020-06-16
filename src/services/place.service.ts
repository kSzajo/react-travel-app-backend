import { injectable } from "tsyringe";
import { PlaceRepository } from "../repository/place.repository";
import Place from "../model/place";

@injectable()
export class PlaceService {

    constructor(public repository: PlaceRepository) {

    }

    getAllPlaces(): Promise<Place[]> {
       return this.repository.getAll()
    }

    getPlaceById(id: number) {
        return this.repository.getById(id);
    }

}