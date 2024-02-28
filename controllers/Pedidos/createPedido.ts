import { Request, Response } from 'express';
import Pedido from '../../models/pedido'; // Corrigir o tipo do modelo para Pedido

const createPedido = async (req: Request, res: Response) => {
    try {
        const { cliente, plano, telefone } = req.body;

        const pedido = await Pedido.create({ cliente, plano, telefone });
        res.status(201).json({ msg: 'Pedido criado com sucesso', pedido });
    } catch (error) {
        console.log((error as Error).message);

        res.status(500).json({ error: 'Erro interno do servidor' });
    }
};

export default createPedido;
