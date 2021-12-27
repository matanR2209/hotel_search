import express from 'express';
import {hotelsRouter} from "./routes/HotelsRouter";
const app = express();
const cors = require('cors');

app.use(cors());
app.options('*', cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.post(`/hotels`, hotelsRouter)

app.listen(3001, () => {
    console.log('The application is listening on port 3001!');
})