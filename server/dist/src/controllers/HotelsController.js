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
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
const NetworkService_1 = require("../../services/NetworkService");
const HOTEL_X_PROVIDER = "https://gya7b1xubh.execute-api.eu-west-2.amazonaws.com/default/HotelsSimulator";
class HotelsController {
}
exports.default = HotelsController;
_a = HotelsController;
HotelsController.fetchHotels = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const params = req.body;
        const results = yield NetworkService_1.NetworkService.post(HOTEL_X_PROVIDER, params);
        res.json(results.body);
    }
    catch (error) {
        console.log(error);
        res.json({ data: { success: "false" } });
    }
});
