import express from 'express';
import cors from 'cors';
import path  from 'path';
import foodRouter from './routers/food.router';
import userRouter from './routers/user.router';
import orderRouter from './routers/order.router';
import dotenv from 'dotenv';
dotenv.config();
import {dbConnect} from "./configs/database.config";
dbConnect();

const app = express();
app.use(express.json());
app.use(cors({
    credentials: true,
    origin: ["http://localhost:4200"]
}));

app.use('/api/foods', foodRouter);
app.use('/api/users', userRouter);
app.use('/api/orders', orderRouter);

app.use(express.static('public'));
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname,'/public', 'index.html'));
});

const port = process.env.PORT || 8888;
app.listen(port, () => {
    console.log('Server running on http://localhost:' + port);
});