import connection from '../config/sequelize';
import { Request, Response } from 'express';
import { plainToClass } from 'class-transformer';
import { conceptoDto } from '../dto/request/concepto.dto';
import { validate } from 'class-validator';
import { Concepto } from '../config/models';

const saveConcepto = async (req: Request, res: Response) => {
    try {
        const request = req.body;
        const validator = plainToClass(conceptoDto, request);
        const errors = await validate(validator);
        if (errors.length !== 0) {
            const information_errors = errors.map((error) => error.constraints);
            return res.status(400).json({
                content: information_errors,
                message: "error creating concepto"
            });
        }
        const newConcepto = await Concepto.create(request);
        return res.status(201).json({
            content: newConcepto,
            message: "concepto created"
        });
    } catch (error) {
        return res.status(500).json({
            content: null,
            message: "error creating concepto"
        });
    }
}

const listConceptoAll = async (req: Request, res: Response) => {
    try {
        const concepto = await Concepto.findAll({
            order: [
                ["fecharegistro", "desc"]
            ]
        });
        return res.status(200).json({
            content: concepto,
            message: "listing concepto"
        });
    } catch (error) {
        return res.status(500).json({
            content: null,
            message: "error listing concepto"
        });
    }
}

const listConceptoActive = async (req: Request, res: Response) => {
    try {
        const concepto = await Concepto.findAll({
            where: { estadoConcepto: 1 },
            order: [
                ["nombreConcepto", "asc"]
            ]
        });
        return res.status(200).json({
            content: concepto,
            message: "listing concepto active"
        });
    } catch (error) {
        res.status(500).json({
            content: null,
            message: "error listing concepto active"
        })
    }
}

const deleteConcepto = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        const data = await Concepto.update({
            estadoConcepto: 0
        }, {
            where: { idConcepto: id }
        }
        );
        const total = data[0];
        if (total === 0) {
            return res.status(400).json({
                content: null,
                message: "not concepto to update found"
            });
        }
        return res.status(200).json({
            content: null,
            message: "concepto updated"
        });
    } catch (error) {
        res.status(500).json({
            content: null,
            message: "error delete concepto"
        })
    }
}

export {
    saveConcepto,
    listConceptoActive,
    listConceptoAll,
    deleteConcepto
}
