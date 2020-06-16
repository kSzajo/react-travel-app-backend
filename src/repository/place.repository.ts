import {plainToClass} from "class-transformer";
import * as sqlite3 from 'sqlite3'
import Place from "../model/place";
import {validateOrReject} from "class-validator";
import {Database} from "sqlite3";

export class PlaceRepository {

    async getAll(): Promise<Place[]> {
        const db: Database = new sqlite3.Database('src/db/react-travel-app-db.db', sqlite3.OPEN_READWRITE, (err) => {
            if (err) {
                console.error(err.message);
            } else {
                console.log('Connected to the chinook database.');
            }
        });


        return new Promise<Place[]>(((resolve, reject) => {
            // const places: Place[] = []
            let sql = `SELECT * FROM places`;

            db.all(sql, [], (err, rows) => {
                if (err) {
                    throw err;
                }
                // rows.forEach((row: Place) => {
                //     let castedPlace: Place = plainToClass(Place, row, {enableImplicitConversion: true})
                //     validateOrReject(castedPlace)
                //         .then(validated => places.push(castedPlace))
                //         .catch(errors => {
                //         // console.log('error', errors)
                //         reject('Internal server error, casting issue')
                //     });
                //
                // });
                // console.log('going to resolve')
                resolve(rows)
                db.close();


            })
        }))
            ;


    }

    getById(id: number): Place | undefined {
        return undefined
        // return this.places.find(place => place.id === id)
    }


}