import { Request, Response } from 'express';
import Usuario from '../../models/usuario';

const deleteUsuario = async (req: Request, res: Response) => {
    try {
        await Usuario.destroy({
            where: {
                id: req.params.id
            }
        });
        res.status(200).json({ msg: 'Secretaria Deletada' });
    } catch (error) {
        console.log((error as Error).message);

        res.status(500).json({ error: 'Internal Server Error' });
    }
};

export default deleteUsuario;
