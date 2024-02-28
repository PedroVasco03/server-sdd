import { Request, Response } from 'express';
import User from '../../models/admin';

const createAdmin = async (req: Request, res: Response): Promise<void> => {
    try {
        await User.create(req.body);
        res.status(201).json({ msg: 'Admin Criado' });
    } catch (error) {
        console.error((error as Error).message);
        res.status(500).json({ error: 'Erro ao criar o admin' });
    }
};

export default createAdmin;
