import {
    CreationOptional,
    DataTypes,
    InferAttributes,
    InferCreationAttributes,
    Model,
} from "sequelize";
import { sequelize } from "../sequelize";

export class rawData extends Model<
    InferAttributes<rawData>,
    InferCreationAttributes<rawData>
> {
    declare id: CreationOptional<string>;
    declare no: number;
    declare date: Date;
    declare customer: string;
    declare status: string;
    declare name: string;
    declare pending: number;
    declare day: number;
    declare day_1: number;
    declare day_2: number;
    declare day_3: number;
    declare day_4: number;
    declare day_5: number;
    declare fg: string;
    declare startDay: string;
    declare dayStock: string;
    declare dayPlusOne: string;
    declare problems: string;
    declare notes: string;
    declare created_at: CreationOptional<Date>;
    declare updated_at: CreationOptional<Date>;
    declare deleted_at: CreationOptional<Date>;
}

rawData.init(
    {
        id: {
            type: DataTypes.STRING,
            primaryKey: true,
        },
        no: DataTypes.INTEGER,
        date: {
            type: DataTypes.DATE,
        },
        customer: DataTypes.STRING,
        status: DataTypes.STRING,
        name: DataTypes.STRING,
        pending: DataTypes.STRING,
        day: DataTypes.INTEGER,
        day_1: DataTypes.INTEGER,
        day_2: DataTypes.INTEGER,
        day_3: DataTypes.INTEGER,
        day_4: DataTypes.INTEGER,
        day_5: DataTypes.INTEGER,
        fg: DataTypes.STRING,
        startDay: DataTypes.STRING,
        dayStock: DataTypes.STRING,
        dayPlusOne: DataTypes.STRING,
        problems: DataTypes.STRING,
        notes: DataTypes.STRING,
        created_at: DataTypes.DATE,
        updated_at: DataTypes.DATE,
        deleted_at: DataTypes.DATE,
    },
    {
        tableName: "raw-data",
        underscored: true,
        paranoid: true,
        timestamps: true,
        sequelize,
    }
);
