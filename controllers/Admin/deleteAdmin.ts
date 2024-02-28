import { Request, Response } from 'express';
import Admin from '../../models/admin';

const deleteAdmin = async (req: Request, res: Response) => {
    try {
        await Admin.destroy({
            where: {
                id: req.params.id
            }
        });
        res.status(200).json({ msg: 'Admin Deletado' });
    } catch (error) {
        console.log((error as Error).message);
;
    }
};

export default deleteAdmin;
