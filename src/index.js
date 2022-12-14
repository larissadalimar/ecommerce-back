import express from 'express';
import cors from 'cors';

import usersRoutes from './routes/user.routes.js';
import productsRoutes from './routes/products.routes.js';
import cartsRoutes from './routes/cart.routes.js';


const app = express()

app.use(cors());
app.use(express.json());
app.use(usersRoutes);
app.use(productsRoutes);
app.use(cartsRoutes);


const port = process.env.PORT

app.listen(port, console.log(`Running in port ${port}`))