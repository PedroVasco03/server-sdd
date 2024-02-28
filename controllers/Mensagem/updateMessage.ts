import { Request, Response } from 'express';
import Message from '../../models/messages'; // Corrigir o tipo do modelo para Message

const updateMessage = async (req: Request, res: Response) => {
    try {
        const messageId = req.params.id;
        const { remitente, destinatario, sms, datanow, ficheiro } = req.body;

        const message = await Message.findByPk(messageId);
        if (!message) {
            return res.status(404).json({ error: 'Mensagem não encontrada' });
        }

        await message.update({ remitente, destinatario, sms, datanow, ficheiro });
        res.status(200).json({ msg: 'Mensagem atualizada com sucesso' });
    } catch (error) {
        console.log((error as Error).message);

        res.status(500).json({ error: 'Erro interno do servidor' });
    }
};

export default updateMessage;
