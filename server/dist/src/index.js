"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const HotelsRouter_1 = require("./routes/HotelsRouter");
const app = (0, express_1.default)();
const cors = require('cors');
app.use(cors());
app.options('*', cors());
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: false }));
app.post(`/hotels`, HotelsRouter_1.hotelsRouter);
app.listen(3001, () => {
    console.log('The application is listening on port 3001!');
});
