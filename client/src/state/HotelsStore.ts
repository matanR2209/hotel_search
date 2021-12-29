import {computed, observable} from "mobx";
import {IHotelRequestBody} from "../interfaces/HTTP";
import HotelsApiService from "../services/HotelsApiService/HotelsApiService";
import {IAccommodation} from "../interfaces/Hotels";

export default class HotelsStore {
    @observable public _hotels: IAccommodation[] = [];
    @observable public isHotelsLoading: boolean = false;

    public async fetchHotels (params: IHotelRequestBody) {
        this._hotels = [];
        this.isHotelsLoading = true;
        let initialRequestGroupSize = params.query.group_size;
        const promises: Promise<any>[] = []
        for(let i = initialRequestGroupSize; i < initialRequestGroupSize + 3; i++) {
            params.query.group_size = i;
            promises.push(this.fetchAndUpdateGroup(params))
        }
        return Promise.all(promises).then(() => this.isHotelsLoading = false)

    }

    private async fetchAndUpdateGroup(params: IHotelRequestBody) {
        // setTimeout(async () => {
            let continuousHotelResponse = await HotelsApiService.getAvailableHotels(params);
            this._hotels.push(...continuousHotelResponse);
        // },  params.query.group_size * 1000);
    }

    @computed
    get hotels() {
        return this._hotels;
    }
}
