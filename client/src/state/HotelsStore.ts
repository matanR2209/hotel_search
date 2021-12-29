import {action, computed, observable} from "mobx";
import {IHotelRequestBody} from "../interfaces/HTTP";
import HotelsApiService from "../services/HotelsApiService/HotelsApiService";
import {IAccommodation} from "../interfaces/Hotels";

export default class HotelsStore {
    @observable public _hotels: IAccommodation[] = [];
    @observable public isHotelsLoading: boolean = false;

    public async fetchHotels (params: IHotelRequestBody) {
        this.isHotelsLoading = true;
        this._hotels = [];
        const hotelsResponse = await HotelsApiService.getAvailableHotels(params);
        this._hotels = hotelsResponse;
        let initialRequestGroupSize = params.query.group_size;
        for(let i = initialRequestGroupSize; i < initialRequestGroupSize + 2; i++) {
            let updatedParams = params;
            updatedParams.query.group_size = i;
            params.query.group_size = i;
            let continuousHotelResponse = await HotelsApiService.getAvailableHotels(updatedParams);
            this._hotels = [...this._hotels, ...continuousHotelResponse];
        }
        this.isHotelsLoading = false;
    }

    @computed
    get hotels() {
        return this._hotels;
    }
}
