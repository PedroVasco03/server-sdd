import { Request, Response } from 'express';
import Usuario from '../../models/usuario';

const getUsuarioById = async (req: Request, res: Response) => {
    try {
        const response = await Usuario.findOne({
            where: {
                id: req.params.id
            }
        });
        if (!response) {
            return res.status(404).json({ error: 'User not found' });
        }
        res.status(200).json(response);
    } catch (error) {
        console.log((error as Error).message);

        res.status(500).json({ error: 'Internal Server Error' });
    }
};

export default getUsuarioById;
