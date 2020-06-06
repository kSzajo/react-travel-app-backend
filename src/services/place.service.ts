import { injectable } from "tsyringe";
import { PlaceRepository } from "../repository/place.repository";

@injectable()
export class PlaceService {

    constructor(public repository: PlaceRepository) {

    }

    getAllPlaces() {
        return this.repository.getAll();
    }

    getPlaceById(id: number) {
        return this.repository.getById(id);
    }

}