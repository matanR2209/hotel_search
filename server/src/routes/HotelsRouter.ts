import express from "express";
import HotelsController from "../controllers/HotelsController";

export const hotelsRouter = express.Router({mergeParams: true})

hotelsRouter.post("/hotels",  HotelsController.fetchHotels)