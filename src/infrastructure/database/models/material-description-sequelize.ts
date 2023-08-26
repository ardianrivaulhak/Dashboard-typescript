import {
    CreationOptional,
    DataTypes,
    InferAttributes,
    InferCreationAttributes,
    Model,
    NonAttribute,
    Association,
} from "sequelize";
import { sequelize, sequelize_2 } from "../sequelize";
import { Machine } from "./machine-sequelize";

export class MaterialDescription extends Model<
    InferAttributes<MaterialDescription>,
    InferCreationAttributes<MaterialDescription>
> {
    declare id: CreationOptional<string>;
    declare materialNumber: string;
    declare materialDescription: string;
    declare machineId: CreationOptional<string>;
    declare machine: NonAttribute<Machine> | undefined;
    declare createdAt: CreationOptional<Date | undefined>;
    declare updatedAt: CreationOptional<Date | null | undefined>;
    declare deletedAt: CreationOptional<Date | null | undefined>;
    declare static association: {
        machine: Association<MaterialDescription, Machine>;
    };
}

MaterialDescription.init(
    {
        id: {
            type: DataTypes.STRING,
            primaryKey: true,
        },
        materialNumber: DataTypes.STRING,
        materialDescription: DataTypes.STRING,
        machineId: DataTypes.STRING,
        createdAt: DataTypes.DATE,
        updatedAt: { type: DataTypes.DATE, allowNull: true },
        deletedAt: { type: DataTypes.DATE, allowNull: true },
    },
    {
        tableName: "material_descriptions",
        underscored: true,
        paranoid: true,
        sequelize: sequelize_2,
    }
);
