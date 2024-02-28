import { Request, Response } from 'express';
import Feedback from '../../models/feedback'; // Corrigir o tipo do modelo para Feedback

const getAdmin = async (req: Request, res: Response) => {
    try {
        const response = await Feedback.findAll(); // Corrigir o modelo para Feedback
        res.status(200).json(response);
    } catch (error) {
        console.log((error as Error).message);

        res.status(500).json({ error: 'Erro interno do servidor' });
    }
};

export default getAdmin;
