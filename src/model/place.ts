import {Expose} from "class-transformer";
import {IsNumber, IsString} from "class-validator";

export class Place {
    @IsNumber() readonly id: number
    @IsString() name: string
    @IsString() type: string
    @IsString() dimension: string
    @IsNumber() price: number
    @IsString() url: string
    @IsString() created: string
}

export default Place