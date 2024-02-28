import { Request, Response } from 'express';
import Pedido from '../../models/pedido'; // Certifique-se de importar o modelo correto

const getPedidoById = async (req: Request, res: Response) => {
    try {
        const pedido = await Pedido.findOne({
            where: {
                id: req.params.id
            }
        });
        if (!pedido) {
            return res.status(404).json({ error: 'Pedido não encontrado' });
        }
        res.status(200).json(pedido);
    } catch (error) {
        console.log((error as Error).message);

        res.status(500).json({ error: 'Erro interno do servidor' });
    }
};

export default getPedidoById;
