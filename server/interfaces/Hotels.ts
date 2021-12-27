export interface IHotel {
    "HotelCode": string,
    "HotelName": string,
    "HotelDescriptiveContent": IHotelPrivateContent,
    "HotelInfo": IHotelInfo,
    "PricesInfo": IHotelPriceInfo
}

export interface IHotelPrivateContent {
    "Images": IHotelImageInfo[]
}

export interface IHotelInfo {
    "Position": {
        "Latitude": string,
        "Longitude": string,
        "Distances": IHotelDistance[]
    },
    "Rating": string,
    "Beds": string
}

export interface IHotelPriceInfo{
    "AmountAfterTax": string,
    "AmountBeforeTax": string
}

export interface IHotelDistance {
    "type": string,
    "distance": string
}

export interface IHotelImageInfo {
    "MainImage"?: string,
    "URL": string
}