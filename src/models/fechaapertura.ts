import { DataTypes } from 'sequelize';
import connection from '../config/sequelize';

export default () => connection.define(
    "fechaapertura",
    {
        idFechaApertura: {
            type: DataTypes.UUID,
            primaryKey: true,
            defaultValue: DataTypes.UUIDV4,
            field: "id"
        },
        diaFechaApertura: {
            type: DataTypes.DATE,
            field: "fecha"
        },
        fechaRegistroFechaApertura: {
            type: "datetime",
            defaultValue: connection.literal("CURRENT_TIMESTAMP"),
            field: "fecharegistro"
        },
        estadoFechaRegistro: {
            type: DataTypes.BOOLEAN,
            field: "estado",
            defaultValue: true
        }
    },
    {
        tableName: "fechaapertura",
        timestamps: false
    }
);
