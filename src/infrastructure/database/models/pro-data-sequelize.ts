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
import { MaterialDescription } from "./material-description-sequelize";
import { Machine } from "./machine-sequelize";

export class ProData extends Model<
    InferAttributes<ProData>,
    InferCreationAttributes<ProData>
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
    declare material: NonAttribute<MaterialDescription> | undefined;
    declare machine: NonAttribute<Machine> | undefined;
    public declare static associations: {
        material: Association<MaterialDescription, ProData>;
        machine: Association<Machine, ProData>;
        proData: Association<Machine, ProData>;
    };
    declare createdAt: CreationOptional<Date>;
    declare updatedAt: CreationOptional<Date>;
    declare deletedAt: CreationOptional<Date | null>;
}

ProData.init(
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
        createdAt: DataTypes.DATE,
        updatedAt: DataTypes.DATE,
        deletedAt: DataTypes.DATE,
    },
    {
        tableName: "pro_datum",
        underscored: true,
        paranoid: true,
        sequelize: sequelize_2,
    }
);
