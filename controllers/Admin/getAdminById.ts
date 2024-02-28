import { Request, Response } from 'express';
import Admin from '../../models/admin';

const getAdminById = async (req: Request, res: Response) => {
    try {
        const response = await Admin.findOne({
            where: {
                id: req.params.id
            }
        });
        res.status(200).json(response);
    } catch (error) {
        console.log((error as Error).message);

    }
};

export default getAdminById;
