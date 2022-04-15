import { Router } from 'express';
import * as conceptoController from '../controllers/concepto.controller';

const conceptoRouter = Router();

conceptoRouter.route("/conceptos")
    .post(conceptoController.saveConcepto)
    .get(conceptoController.listConceptoAll);
conceptoRouter.route("/conceptos/active").get(conceptoController.listConceptoActive);
conceptoRouter.route("/conceptos/:id").delete(conceptoController.deleteConcepto);

export default conceptoRouter;