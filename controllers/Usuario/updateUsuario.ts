import { Request, Response } from 'express';
import Usuario from '../../models/usuario';

const updateUsuario = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        const [updatedRowsCount] = await Usuario.update(req.body, {
            where: { id }
        });
        if (updatedRowsCount === 0) {
            return res.status(404).json({ error: 'User not found' });
        }
        res.status(200).json({ msg: 'User updated' });
    } catch (error) {
        console.log((error as Error).message);

        res.status(500).json({ error: 'Internal Server Error' });
    }
};

export default updateUsuario;
