import { Request, Response } from 'express';
import Usuario from '../../models/usuario';

const getUsuario = async (req: Request, res: Response) => {
    try {
        const response = await Usuario.findAll();
        res.status(200).json(response);
    } catch (error) {
        console.log((error as Error).message);

        res.status(500).json({ error: 'Internal Server Error' });
    }
};

export default getUsuario;
