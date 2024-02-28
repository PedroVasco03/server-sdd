import { Request, Response } from 'express';
import Pedido from '../../models/pedido'; // Certifique-se de importar o modelo correto

const deletePedido = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;

        const deletedPedidoCount = await Pedido.destroy({ where: { id } });

        if (deletedPedidoCount > 0) {
            res.status(200).json({ msg: 'Pedido deletado com sucesso' });
        } else {
            res.status(404).json({ error: 'Pedido não encontrado' });
        }
    } catch (error) {
        console.log((error as Error).message);

        res.status(500).json({ error: 'Erro interno do servidor' });
    }
};

export default deletePedido;
