import { Request, Response } from 'express';
import Feedback from '../../models/feedback';

const updateStock = async (req: Request, res: Response) => {
    try {
        await Feedback.update(req.body, {
            where: {
                id: req.params.id
            }
        });
        res.status(200).json({ msg: 'Admin Atualizado' });
    } catch (error) {
        console.log((error as Error).message);

    }
};

export default updateStock;
