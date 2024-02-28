import { Request, Response } from 'express';
import Feedback from '../../models/feedback';

const createStock = async (req: Request, res: Response) => {
    try {
        await Feedback.create(req.body);
        res.status(201).json({ msg: 'Feedback Criado' });
    } catch (error) {
        console.log((error as Error).message);

    }
};

export default createStock;
