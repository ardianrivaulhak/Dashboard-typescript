import {
    CreationOptional,
    DataTypes,
    InferAttributes,
    InferCreationAttributes,
    Model,
} from "sequelize";
import { sequelize, sequelize_2 } from "../sequelize";

export class Machine extends Model<
    InferAttributes<Machine>,
    InferCreationAttributes<Machine>
> {
    declare id: CreationOptional<string>;
    declare name: string;
    declare description: string;
    declare machineCode: string;
    declare location: string;
    declare createdAt: CreationOptional<Date | undefined>;
    declare updatedAt: CreationOptional<Date | null | undefined>;
    declare deletedAt: CreationOptional<Date | null | undefined>;
}

Machine.init(
    {
        id: {
            type: DataTypes.STRING,
            primaryKey: true,
        },
        name: DataTypes.STRING,
        description: DataTypes.STRING,
        machineCode: {
            unique: true,
            type: DataTypes.STRING,
        },
        location: DataTypes.STRING,
        createdAt: DataTypes.DATE,
        updatedAt: { type: DataTypes.DATE, allowNull: true },
        deletedAt: { type: DataTypes.DATE, allowNull: true },
    },
    {
        modelName: "machine",
        tableName: "machines",
        underscored: true,
        paranoid: true,
        sequelize: sequelize_2,
    }
);
