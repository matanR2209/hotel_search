"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.hotelsRouter = void 0;
const express_1 = __importDefault(require("express"));
const HotelsController_1 = __importDefault(require("../controllers/HotelsController"));
exports.hotelsRouter = express_1.default.Router({ mergeParams: true });
exports.hotelsRouter.post("/hotels", HotelsController_1.default.fetchHotels);
