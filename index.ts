import express, { Request, Response } from 'express';
import cors from 'cors';
import router from './routes/router';

const app = express();

app.use(cors({ allowedHeaders: '*' }));
app.use(express.json());
app.use(router);

app.get('/', (req: Request, res: Response) => {
    res.json({ version: 'api 1.0' });
});

app.listen(5000, () => {
    console.log('Servidor Socket.IO em execução na porta 3001.');
});
