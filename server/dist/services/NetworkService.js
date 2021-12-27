"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.NetworkService = void 0;
const axios_1 = __importDefault(require("axios"));
class NetworkService {
    static post(url, body) {
        const headers = {
            headers: {
                ContentType: "text/plain",
                Accept: "*/*"
            }
        };
        return this.parseAxiosRequest(axios_1.default.post(url, body, headers));
    }
    static parseAxiosRequest(request) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield request;
            if (!response) {
                throw new Error(`Bad status ${JSON.stringify(response)}`);
            }
            else {
                return response.data;
            }
        });
    }
}
exports.NetworkService = NetworkService;
