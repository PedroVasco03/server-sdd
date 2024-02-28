import { Request, Response } from 'express';
import Admin from '../../models/admin';

const updateAdmin = async (req: Request, res: Response) => {
    try {
        await Admin.update(req.body, {
            where: {
                id: req.params.id
            }
        });
        res.status(200).json({ msg: 'Admin Atualizado' });
    } catch (error) {
        console.log((error as Error).message);

    }
};

export default updateAdmin;
