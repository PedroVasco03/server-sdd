import { Request, Response } from 'express';
import Message from '../../models/messages'; // Corrigir o tipo do modelo para Message

const deleteMessage = async (req: Request, res: Response) => {
    try {
        await Message.destroy({
            where: {
                id: req.params.id
            }
        });
        res.status(200).json({ msg: 'Mensagem deletada' });
    } catch (error) {
        console.log((error as Error).message);

        res.status(500).json({ error: 'Erro interno do servidor' });
    }
};

export default deleteMessage;
