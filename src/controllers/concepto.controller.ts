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

export {
    saveConcepto
}
