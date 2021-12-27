import axios, { AxiosPromise } from "axios";
import * as qs from "qs";
import {IHotelsResponseBody} from "../interfaces/HTTP";

export class NetworkService {
    public static post<T = any>(url: string, body: any): Promise<IHotelsResponseBody> {
        const headers = {
            headers: {
                ContentType: "text/plain",
                Accept: "*/*"
            }
        };
        return this.parseAxiosRequest<T>(axios.post(url, body, headers));
    }

    private static async parseAxiosRequest<T>(
        request: AxiosPromise<T>
    ): Promise<any> {
        const response = await request;
        if (!response) {
            throw new Error(`Bad status ${JSON.stringify(response)}`);
        } else {
            return response.data;
        }
    }
}