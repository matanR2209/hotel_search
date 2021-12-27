import * as express from "express";
import {IHotelRequestBody} from "../../interfaces/HTTP";
import {NetworkService} from "../../services/NetworkService";

const HOTEL_X_PROVIDER = "https://gya7b1xubh.execute-api.eu-west-2.amazonaws.com/default/HotelsSimulator"

export default class HotelsController {
    public static fetchHotels: express.RequestHandler = async (req, res) => {
        try {
            const params = req.body as IHotelRequestBody;
            const results = await NetworkService.post(HOTEL_X_PROVIDER, params);
            res.json(results.body);
        } catch (error) {
            console.log(error)
            res.json({data: {success: "false"}});
        }
    };
}