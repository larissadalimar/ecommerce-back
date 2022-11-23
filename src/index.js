import express from 'express';
import cors from 'cors';

import usersRoutes from './routes/user.routes.js'


const app = express()

app.use(cors());
app.use(express.json());
app.use(usersRoutes);

const port = process.env.PORT

app.listen(port, console.log(`Running in port ${port}`))