
import express from 'express';
import bodyParser from 'body-parser';
import usersRoutes from './routes/users.js';
const app = express();
const PORT = 5000;

app.use(bodyParser.json());

app.use('/users' , usersRoutes);

//we made a get request from '/' home-route 
app.get('/', (req, res) => res.send('Cale vidi server'));

app.listen(PORT, () => console.log(`Server Running on port: http://localhost:${PORT}`));
