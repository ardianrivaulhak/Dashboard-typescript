import {
    Association,
    CreationOptional,
    DataTypes,
    InferAttributes,
    InferCreationAttributes,
    Model,
    NonAttribute,
} from "sequelize";
import { sequelize, sequelize_2 } from "../sequelize";
import { User } from "./user-sequelize";
import { MaterialDescription } from "./material-description-sequelize";
import { Machine } from "./machine-sequelize";
import { Step } from "@/dto/qr-tag-dto";
import { ProData } from "./pro-data-sequelize";

export class QrTag extends Model<
    InferAttributes<QrTag>,
    InferCreationAttributes<QrTag>
> {
    declare id: CreationOptional<string>;
    declare machineId: CreationOptional<string>;
    declare materialId: CreationOptional<string>;
    declare itemId: CreationOptional<string>;
    declare qrTagNumber: string;
    declare proNumber: string;
    declare plant: string;
    declare businessAreaDescription: string;
    declare customerCode: string;
    declare productionVersion: string;
    declare storageLocation: string;
    declare toStorageLocation: CreationOptional<string>;
    declare materialNumber: string;
    declare materialDescription: string;
    declare customerMaterialInfo: string;
    declare targetQtyPro: number;
    declare uomPro: string;
    declare qtyQrTag: number;
    declare uom: string;
    declare productionDatetime: Date;
    declare ahmSupplierId: string;
    declare noMachine: string;
    declare status: string;
    declare qtyRemaining?: number;
    declare kanbanFlag?: string;
    declare tpDocument: CreationOptional<string>;
    declare message: CreationOptional<string>;
    declare updatedBy: CreationOptional<string>;
    declare nrpOperator: CreationOptional<string>;
    declare shiftCasting: CreationOptional<string>;
    declare user: NonAttribute<User> | undefined;
    declare material: NonAttribute<MaterialDescription> | undefined;
    declare machine: NonAttribute<Machine> | undefined;
    declare proData: NonAttribute<ProData> | undefined;
    public declare static associations: {
        user: Association<User, QrTag>;
        material: Association<MaterialDescription, QrTag>;
        machine: Association<Machine, QrTag>;
    };
    declare step: Step;
    declare beforeCastingAt: CreationOptional<Date>;
    declare castingAt: CreationOptional<Date>;
    declare beforeMachiningAt: CreationOptional<Date>;
    declare afterMachiningAt: CreationOptional<Date>;
    declare createdAt: CreationOptional<Date>;
    declare updatedAt: CreationOptional<Date>;
    declare deletedAt: CreationOptional<Date | null>;
}

QrTag.init(
    {
        id: {
            type: DataTypes.STRING,
            primaryKey: true,
        },
        itemId: DataTypes.STRING,
        machineId: DataTypes.STRING,
        materialId: DataTypes.STRING,
        qrTagNumber: DataTypes.STRING,
        proNumber: DataTypes.STRING,
        plant: DataTypes.STRING,
        businessAreaDescription: DataTypes.STRING,
        customerCode: DataTypes.STRING,
        productionVersion: DataTypes.STRING,
        storageLocation: DataTypes.STRING,
        toStorageLocation: DataTypes.STRING,
        materialNumber: DataTypes.STRING,
        materialDescription: DataTypes.STRING,
        customerMaterialInfo: DataTypes.STRING,
        targetQtyPro: DataTypes.DOUBLE,
        uomPro: DataTypes.STRING,
        qtyQrTag: DataTypes.DOUBLE,
        uom: DataTypes.STRING,
        productionDatetime: DataTypes.DATE,
        ahmSupplierId: DataTypes.STRING,
        noMachine: DataTypes.STRING,
        status: DataTypes.STRING,
        tpDocument: DataTypes.STRING,
        message: DataTypes.STRING,
        kanbanFlag: DataTypes.STRING,
        updatedBy: DataTypes.STRING,
        step: DataTypes.STRING,
        nrpOperator: DataTypes.STRING,
        shiftCasting: DataTypes.STRING,
        beforeCastingAt: DataTypes.DATE,
        castingAt: DataTypes.DATE,
        beforeMachiningAt: DataTypes.DATE,
        afterMachiningAt: DataTypes.DATE,
        createdAt: DataTypes.DATE,
        updatedAt: DataTypes.DATE,
        deletedAt: DataTypes.DATE,
    },
    {
        tableName: "qr_tags",
        underscored: true,
        paranoid: true,
        sequelize: sequelize_2,
    }
);
