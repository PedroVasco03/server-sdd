import { Request, Response } from 'express';
import Feedback from '../../models/feedback'; // Supondo que o modelo seja importado corretamente

const deleteStock = async (req: Request, res: Response) => {
    try {
        await Feedback.destroy({
            where: {
                id: req.params.id
            }
        });
        res.status(200).json({ msg: 'Admin Deletado' });
    } catch (error) {
        console.log((error as Error).message);

    }
};

export default deleteStock;
