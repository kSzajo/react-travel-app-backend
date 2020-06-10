import Place from "model/place";

export class PlaceRepository {

    private places: Place[] = [
        {
            "id": 1,
            "name": "Earth (C-137)",
            "type": "Planet",
            "dimension": "Dimension C-137",
            "price": 15,
            "residents": [
                "https://rickandmortyapi.com/api/character/38",
                "https://rickandmortyapi.com/api/character/45",
                "https://rickandmortyapi.com/api/character/71",
                "https://rickandmortyapi.com/api/character/82",
                "https://rickandmortyapi.com/api/character/83",
                "https://rickandmortyapi.com/api/character/92",
                "https://rickandmortyapi.com/api/character/112",
                "https://rickandmortyapi.com/api/character/114",
                "https://rickandmortyapi.com/api/character/116",
                "https://rickandmortyapi.com/api/character/117",
                "https://rickandmortyapi.com/api/character/120",
                "https://rickandmortyapi.com/api/character/127",
                "https://rickandmortyapi.com/api/character/155",
                "https://rickandmortyapi.com/api/character/169",
                "https://rickandmortyapi.com/api/character/175",
                "https://rickandmortyapi.com/api/character/179",
                "https://rickandmortyapi.com/api/character/186",
                "https://rickandmortyapi.com/api/character/201",
                "https://rickandmortyapi.com/api/character/216",
                "https://rickandmortyapi.com/api/character/239",
                "https://rickandmortyapi.com/api/character/271",
                "https://rickandmortyapi.com/api/character/302",
                "https://rickandmortyapi.com/api/character/303",
                "https://rickandmortyapi.com/api/character/338",
                "https://rickandmortyapi.com/api/character/343",
                "https://rickandmortyapi.com/api/character/356",
                "https://rickandmortyapi.com/api/character/394"
            ],
            "url": "https://rickandmortyapi.com/api/location/1",
            "created": "2017-11-10T12:42:04.162Z"
        },
        {
            "id": 2,
            "name": "Abadango",
            "type": "Cluster",
            "dimension": "unknown",
            "price": 55,
            "residents": [
                "https://rickandmortyapi.com/api/character/6"
            ],
            "url": "https://rickandmortyapi.com/api/location/2",
            "created": "2017-11-10T13:06:38.182Z"
        },
        {
            "id": 3,
            "name": "Citadel of Ricks",
            "type": "Space station",
            "dimension": "Dimension D-111",
            "price": 8,
            "residents": [],
            "url": "https://rickandmortyapi.com/api/location/3",
            "created": "2017-11-10T13:08:13.191Z"
        },
        {
            "id": 4,
            "name": "Worldender's lair",
            "type": "Planet",
            "dimension": "unknown",
            "price": 120,
            "residents": [
                "https://rickandmortyapi.com/api/character/10",
                "https://rickandmortyapi.com/api/character/81",
                "https://rickandmortyapi.com/api/character/208",
                "https://rickandmortyapi.com/api/character/226",
                "https://rickandmortyapi.com/api/character/340",
                "https://rickandmortyapi.com/api/character/362",
                "https://rickandmortyapi.com/api/character/375",
                "https://rickandmortyapi.com/api/character/382",
                "https://rickandmortyapi.com/api/character/395"
            ],
            "url": "https://rickandmortyapi.com/api/location/4",
            "created": "2017-11-10T13:08:20.569Z"
        },
        {
            "id": 5,
            "name": "Anatomy Park",
            "type": "Microverse",
            "dimension": "Dimension C-137",
            "price": 89,
            "residents": [
                "https://rickandmortyapi.com/api/character/12",
                "https://rickandmortyapi.com/api/character/17",
                "https://rickandmortyapi.com/api/character/96",
                "https://rickandmortyapi.com/api/character/97",
                "https://rickandmortyapi.com/api/character/98",
                "https://rickandmortyapi.com/api/character/99",
                "https://rickandmortyapi.com/api/character/100",
                "https://rickandmortyapi.com/api/character/101",
                "https://rickandmortyapi.com/api/character/108",
                "https://rickandmortyapi.com/api/character/268",
                "https://rickandmortyapi.com/api/character/300"
            ],
            "url": "https://rickandmortyapi.com/api/location/5",
            "created": "2017-11-10T13:08:46.060Z"
        },
        {
            "id": 6,
            "name": "Interdimension al Cable",
            "type": "TV",
            "dimension": "unknown",
            "price": 62,
            "residents": [
                "https://rickandmortyapi.com/api/character/20",
                "https://rickandmortyapi.com/api/character/28",
                "https://rickandmortyapi.com/api/character/29",
                "https://rickandmortyapi.com/api/character/34",
                "https://rickandmortyapi.com/api/character/49",
                "https://rickandmortyapi.com/api/character/51",
                "https://rickandmortyapi.com/api/character/54",
                "https://rickandmortyapi.com/api/character/121",
                "https://rickandmortyapi.com/api/character/126",
                "https://rickandmortyapi.com/api/character/129",
                "https://rickandmortyapi.com/api/character/134",
                "https://rickandmortyapi.com/api/character/136",
                "https://rickandmortyapi.com/api/character/145",
                "https://rickandmortyapi.com/api/character/157",
                "https://rickandmortyapi.com/api/character/173",
                "https://rickandmortyapi.com/api/character/184",
                "https://rickandmortyapi.com/api/character/205",
                "https://rickandmortyapi.com/api/character/207",
                "https://rickandmortyapi.com/api/character/214",
                "https://rickandmortyapi.com/api/character/222",
                "https://rickandmortyapi.com/api/character/223",
                "https://rickandmortyapi.com/api/character/224",
                "https://rickandmortyapi.com/api/character/225",
                "https://rickandmortyapi.com/api/character/250",
                "https://rickandmortyapi.com/api/character/254",
                "https://rickandmortyapi.com/api/character/260",
                "https://rickandmortyapi.com/api/character/264",
                "https://rickandmortyapi.com/api/character/266",
                "https://rickandmortyapi.com/api/character/275",
                "https://rickandmortyapi.com/api/character/277",
                "https://rickandmortyapi.com/api/character/279",
                "https://rickandmortyapi.com/api/character/312",
                "https://rickandmortyapi.com/api/character/314",
                "https://rickandmortyapi.com/api/character/315",
                "https://rickandmortyapi.com/api/character/316",
                "https://rickandmortyapi.com/api/character/317",
                "https://rickandmortyapi.com/api/character/318",
                "https://rickandmortyapi.com/api/character/334",
                "https://rickandmortyapi.com/api/character/351",
                "https://rickandmortyapi.com/api/character/358",
                "https://rickandmortyapi.com/api/character/367",
                "https://rickandmortyapi.com/api/character/370",
                "https://rickandmortyapi.com/api/character/373",
                "https://rickandmortyapi.com/api/character/403",
                "https://rickandmortyapi.com/api/character/406",
                "https://rickandmortyapi.com/api/character/407",
                "https://rickandmortyapi.com/api/character/408",
                "https://rickandmortyapi.com/api/character/409",
                "https://rickandmortyapi.com/api/character/410",
                "https://rickandmortyapi.com/api/character/411",
                "https://rickandmortyapi.com/api/character/412",
                "https://rickandmortyapi.com/api/character/413",
                "https://rickandmortyapi.com/api/character/414",
                "https://rickandmortyapi.com/api/character/415",
                "https://rickandmortyapi.com/api/character/416",
                "https://rickandmortyapi.com/api/character/417",
                "https://rickandmortyapi.com/api/character/418",
                "https://rickandmortyapi.com/api/character/457",
                "https://rickandmortyapi.com/api/character/458",
                "https://rickandmortyapi.com/api/character/459"
            ],
            "url": "https://rickandmortyapi.com/api/location/6",
            "created": "2017-11-10T13:09:09.102Z"
        },
        {
            "id": 7,
            "name": "Immortality Field Resort",
            "type": "Resort",
            "dimension": "Dimension D-123",
            "price": 99,
            "residents": [
                "https://rickandmortyapi.com/api/character/23",
                "https://rickandmortyapi.com/api/character/204",
                "https://rickandmortyapi.com/api/character/320"
            ],
            "url": "https://rickandmortyapi.com/api/location/7",
            "created": "2017-11-10T13:09:17.136Z"
        },
        {
            "id": 8,
            "name": "Post-Apocalyptic Earth",
            "type": "Planet",
            "dimension": "Post-Apocalyptic dimension",
            "price": 73,
            "residents": [
                "https://rickandmortyapi.com/api/character/25",
                "https://rickandmortyapi.com/api/character/52",
                "https://rickandmortyapi.com/api/character/68",
                "https://rickandmortyapi.com/api/character/110",
                "https://rickandmortyapi.com/api/character/111",
                "https://rickandmortyapi.com/api/character/140",
                "https://rickandmortyapi.com/api/character/156",
                "https://rickandmortyapi.com/api/character/228",
                "https://rickandmortyapi.com/api/character/323",
                "https://rickandmortyapi.com/api/character/342"
            ],
            "url": "https://rickandmortyapi.com/api/location/8",
            "created": "2017-11-10T13:09:22.551Z"
        },
        {
            "id": 9,
            "name": "Purge Planet",
            "type": "Planet",
            "dimension": "Replacement dimension",
            "price": 320,
            "residents": [
                "https://rickandmortyapi.com/api/character/26",
                "https://rickandmortyapi.com/api/character/139",
                "https://rickandmortyapi.com/api/character/202",
                "https://rickandmortyapi.com/api/character/273"
            ],
            "url": "https://rickandmortyapi.com/api/location/9",
            "created": "2017-11-10T13:09:29.566Z"
        },
        {
            "id": 10,
            "name": "Venzenulon 7",
            "type": "Planet",
            "dimension": "unknown",
            "price": 500,
            "residents": [
                "https://rickandmortyapi.com/api/character/33"
            ],
            "url": "https://rickandmortyapi.com/api/location/10",
            "created": "2017-11-18T11:21:51.643Z"
        }
    ]

    getAll(): Place[] {
        return this.places
    }

    getById(id: number): Place | undefined {
        return this.places.find(place => place.id === id)
    }

    
}