import { Request, Response } from 'express';
import Admin from '../../models/admin';

const getAdmin = async (req: Request, res: Response) => {
    try {
        const response = await Admin.findAll();
        res.status(200).json(response);
    } catch (error) {
        console.log((error as Error).message);

    }
};

export default getAdmin;
