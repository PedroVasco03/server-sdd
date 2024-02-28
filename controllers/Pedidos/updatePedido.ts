import { Request, Response } from 'express';
import Pedido from '../../models/pedido'; // Certifique-se de importar o modelo correto

const updatePedido = async (req: Request, res: Response) => {
    try {
        await Pedido.update(req.body, {
            where: {
                id: req.params.id
            }
        });
        res.status(200).json({ msg: 'Pedido Atualizado' });
    } catch (error) {
        console.log((error as Error).message);

        res.status(500).json({ error: 'Erro interno do servidor' });
    }
};

export default updatePedido;
