import {NetworkService} from "../NetworkService";
import {IHotelRequestBody} from "../../interfaces/HTTP";
import {IAccommodation} from "../../interfaces/Hotels";

export default class HotelsApiService {
    private static get basePath() {
        return `hotels`;
    }

    public static getAvailableHotels = async (params: IHotelRequestBody): Promise<IAccommodation[]> => {
        const response = await NetworkService.post(HotelsApiService.basePath, params);
        if(response.success === "true") {
            return response.accommodations;
        }
        return []
    }
}