import {plainToClass} from "class-transformer";
import * as sqlite3 from 'sqlite3'
import Place from "../model/place";
import {validateOrReject} from "class-validator";
import {Database} from "sqlite3";

export class PlaceRepository {

    async getAll(): Promise<Place[]> {
        const queryResult = await new Promise<Place[]>(((resolve, reject) => {
            let sql = `SELECT * FROM places`;

            const db: Database = new sqlite3.Database('src/db/react-travel-app-db.db', sqlite3.OPEN_READWRITE, (err) => {
                if (err) {
                    console.error('Could not open database', err.message);
                    reject(err)
                } else {
                    console.log('Connected to database.');
                }
            });

            db.all(sql, [], (err, rows) => {
                if (err) {
                    reject(err)
                } else {
                    resolve(rows)
                }
                console.log('Closing database')
                db.close();
            })
        }))

        return new Promise<Place[]>(async (resolve, reject) => {
            for (let row of queryResult) {
                let place: Place = plainToClass(Place, row, {enableImplicitConversion: true})
                try {
                    await validateOrReject(place)
                } catch (errors) {
                    const aa = JSON.stringify(place);
                    reject(errors + aa)
                }
            }
            resolve(queryResult)
        })
    }

    getById(id: number): Place | undefined {
        return undefined
        // return this.places.find(place => place.id === id)
    }


    async postPlace(place): Promise<Place> {

    console.log(place, "new");
        return await new Promise<Place>(((resolve, reject) => {
            let db = new sqlite3.Database('src/db/react-travel-app-db.db', sqlite3.OPEN_READWRITE, (err) => {
                if (err) {
                    console.error('Could not open database', err.message);
                    reject(err)
                } else {
                    console.log('Connected to database.');
                }
            })

           db.run(`INSERT INTO places (name, type, dimension, price, url, created) VALUES("${place.name}", "${place.type}", "${place.dimension}", "${place.price}", "${place.url}", "${place.created}")`, [], function (err, rows) {
                if (err) {
                    reject(err)
                } else {
                    resolve(rows)
                }
                console.log(place);
            })
            console.log('Closing database');
            db.close();
        }))
    }
}