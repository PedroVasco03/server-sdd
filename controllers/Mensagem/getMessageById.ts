import { Request, Response } from 'express';
import Message from '../../models/messages'; // Corrigir o tipo do modelo para Message

const getMessageById = async (req: Request, res: Response) => {
    try {
        const response = await Message.findOne({
            where: {
                id: req.params.id
            }
        });
        if (!response) {
            return res.status(404).json({ error: 'Mensagem não encontrada' });
        }
        res.status(200).json(response);
    } catch (error) {
        console.log((error as Error).message);

        res.status(500).json({ error: 'Erro interno do servidor' });
    }
};

export default getMessageById;
