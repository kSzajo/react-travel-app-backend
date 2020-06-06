import Place from "model/place";

export class PlaceRepository {

    private places: Place[] = [
        {
            id: 1,
            dimension: 'Unknown',
            price: 15
        },
        {
            id: 2,
            dimension: 'C-431',
            price: 1544
        }
    ]

    getAll(): Place[] {
        return this.places
    }

    getById(id: number): Place | undefined {
        return this.places.find(place => place.id === id)
    }

    
}