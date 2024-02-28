import { Request, Response } from 'express';
import Pedido from '../../models/pedido'; // Certifique-se de importar o modelo correto

const getPedido = async (req: Request, res: Response) => {
    try {
        const pedidos = await Pedido.findAll();
        res.status(200).json(pedidos);
    } catch (error) {
        console.log((error as Error).message);

        res.status(500).json({ error: 'Erro interno do servidor' });
    }
};

export default getPedido;
