import { DataTypes } from 'sequelize';
import connection from '../config/sequelize';

export default () => connection.define(
    "concepto",
    {
        idConcepto: {
            type: DataTypes.UUID,
            primaryKey: true,
            defaultValue: DataTypes.UUIDV4,
            field: "id"
        },
        nombreConcepto: {
            type: "varchar(100)",
            allowNull: false,
            field: "nombre"
        },
        estadoConcepto: {
            type: DataTypes.INTEGER,
            defaultValue: 1,
            field: "estado"
        },
        fechaRegistroConcepto: {
            type: "datetime",
            defaultValue: connection.literal('CURRENT_TIMESTAMP'),
            field: "fecharegistro"
        },
        usuarioConcepto: {
            type: "varchar(100)",
            allowNull: false,
            field: "usuario"
        }
    },
    {
        tableName: "concepto",
        timestamps: false
    }
);