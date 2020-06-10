import {plainToClass} from "class-transformer";
import * as sqlite3 from 'sqlite3'
import Place from "../model/place";
import {validateOrReject} from "class-validator";
import {Database} from "sqlite3";
export class PlaceRepository {

    private places: Place[] = [
        {
            "id": 1,
            "name": "Earth (C-137)",
            "type": "Planet",
            "dimension": "Dimension C-137",
            "price": 15,
            "url": "https://rickandmortyapi.com/api/location/1",
            "created": "2017-11-10T12:42:04.162Z"
        },
        {
            "id": 2,
            "name": "Abadango",
            "type": "Cluster",
            "dimension": "unknown",
            "price": 55,
            "url": "https://rickandmortyapi.com/api/location/2",
            "created": "2017-11-10T13:06:38.182Z"
        },
        {
            "id": 3,
            "name": "Citadel of Ricks",
            "type": "Space station",
            "dimension": "Dimension D-111",
            "price": 8,
            "url": "https://rickandmortyapi.com/api/location/3",
            "created": "2017-11-10T13:08:13.191Z"
        },
        {
            "id": 4,
            "name": "Worldender's lair",
            "type": "Planet",
            "dimension": "unknown",
            "price": 120,
            "url": "https://rickandmortyapi.com/api/location/4",
            "created": "2017-11-10T13:08:20.569Z"
        },
        {
            "id": 5,
            "name": "Anatomy Park",
            "type": "Microverse",
            "dimension": "Dimension C-137",
            "price": 89,
            "url": "https://rickandmortyapi.com/api/location/5",
            "created": "2017-11-10T13:08:46.060Z"
        },
        {
            "id": 6,
            "name": "Interdimension al Cable",
            "type": "TV",
            "dimension": "unknown",
            "price": 62,
            "url": "https://rickandmortyapi.com/api/location/6",
            "created": "2017-11-10T13:09:09.102Z"
        },
        {
            "id": 7,
            "name": "Immortality Field Resort",
            "type": "Resort",
            "dimension": "Dimension D-123",
            "price": 99,
            "url": "https://rickandmortyapi.com/api/location/7",
            "created": "2017-11-10T13:09:17.136Z"
        },
        {
            "id": 8,
            "name": "Post-Apocalyptic Earth",
            "type": "Planet",
            "dimension": "Post-Apocalyptic dimension",
            "price": 73,
            "url": "https://rickandmortyapi.com/api/location/8",
            "created": "2017-11-10T13:09:22.551Z"
        },
        {
            "id": 9,
            "name": "Purge Planet",
            "type": "Planet",
            "dimension": "Replacement dimension",
            "price": 320,
            "url": "https://rickandmortyapi.com/api/location/9",
            "created": "2017-11-10T13:09:29.566Z"
        },
        {
            "id": 10,
            "name": "Venzenulon 7",
            "type": "Planet",
            "dimension": "unknown",
            "price": 500,
            "url": "https://rickandmortyapi.com/api/location/10",
            "created": "2017-11-18T11:21:51.643Z"
        }
    ]

    getAll(): Place[] {
        let db: Database = new sqlite3.Database('src/db/react-travel-app-db.db',  sqlite3.OPEN_READWRITE,(err) => {
            if (err) {
                console.error(err.message);
            } else {

            console.log('Connected to the chinook database.');
            }
        });

        let sql = `SELECT * FROM places`;

        let places: Place[] = []
        db.all(sql, [], (err, rows) => {
            if (err) {
                throw err;
            }

            rows.forEach((row: Place) => {
               let castedPlace = plainToClass(Place, row, {enableImplicitConversion: true})
                validateOrReject(castedPlace).catch(errors => {
                    castedPlace = undefined
                });
            });
        });

        db.close();
        return this.places

    }

    getById(id: number): Place | undefined {
        return this.places.find(place => place.id === id)
    }

    
}