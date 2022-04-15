import { Router } from 'express';
import * as conceptoController from '../controllers/concepto.controller';

const conceptoRouter = Router();

conceptoRouter.route("/conceptos")
    .post(conceptoController.saveConcepto);

export default conceptoRouter;