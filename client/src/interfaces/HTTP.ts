import {IAccommodation} from "./Hotels";

export interface IHotelRequestBody {
    "query": {
        "ski_site": number,
        "from_date": string,
        "to_date": string,
        "group_size": number
    }
}

export interface IHotelsResponseBody {
    "statusCode": number,
    "body": {
        "success": string,
        "accommodations": IAccommodation[]
    }
}