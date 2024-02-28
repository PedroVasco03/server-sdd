import { Request, Response } from 'express';
import Usuario from '../../models/usuario'; // Certifique-se de importar o modelo correto

const createUsuario = async (req: Request, res: Response) => {
    try {
        await Usuario.create(req.body);
        res.status(201).json({ msg: 'Usuário Criado' });
    } catch (error) {
        console.log((error as Error).message);

        res.status(500).json({ error: 'Erro interno do servidor' });
    }
};

export default createUsuario;
