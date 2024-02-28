import { Request, Response } from 'express';
import Message from '../../models/messages'; // Corrigir o tipo do modelo para Message

const createMessage = async (req: Request, res: Response) => {
    try {
        await Message.create(req.body);
        res.status(201).json({ msg: 'Mensagem criada' });
    } catch (error) {
        console.log((error as Error).message);

        res.status(500).json({ error: 'Erro interno do servidor' });
    }
};

export default createMessage;
