import { Request, Response } from 'express';
import Feedback from '../../models/feedback'; // Corrigir o tipo do modelo para Feedback

const getStockById = async (req: Request, res: Response) => {
    try {
        const response = await Feedback.findOne({
            where: {
                id: req.params.id
            }
        });
        if (response) {
            res.status(200).json(response);
        } else {
            res.status(404).json({ error: 'Feedback não encontrado' });
        }
    } catch (error) {
        console.log((error as Error).message);

        res.status(500).json({ error: 'Erro interno do servidor' });
    }
};

export default getStockById;
