import {
    Association,
    CreationOptional,
    DataTypes,
    InferAttributes,
    InferCreationAttributes,
    Model,
    NonAttribute,
} from "sequelize";
import { sequelize } from "../sequelize";

export class DataStock extends Model<
    InferAttributes<DataStock>,
    InferCreationAttributes<DataStock>
> {
    declare id: CreationOptional<string>;
    declare part_name: CreationOptional<string>;
    declare name_casting: CreationOptional<string>;
    declare before_casting: CreationOptional<string>;
    declare in_casting: CreationOptional<string>;
    declare name_machining: CreationOptional<string>;
    declare before_machining: CreationOptional<string>;
    declare in_machining: CreationOptional<string>;
    declare after_machining: CreationOptional<string>;
    declare name_painting: CreationOptional<string>;
    declare before_paiting: CreationOptional<string>;
    declare in_painting: CreationOptional<string>;
    declare after_painting: CreationOptional<string>;
    declare name_sc_painting: CreationOptional<string>;
    declare before_sc_painting: CreationOptional<string>;
    declare in_sc_painting: CreationOptional<string>;
    declare after_sc_painting: CreationOptional<string>;
    declare name_sc_finishing: CreationOptional<string>;
    declare before_sc_finishing: CreationOptional<string>;
    declare in_sc_finishing: CreationOptional<string>;
    declare after_sc_finishing: CreationOptional<string>;
    declare name_finished_good: CreationOptional<string>;
    declare before_finished_good: CreationOptional<string>;
    declare in_finished_good: CreationOptional<string>;
    declare after_finished_good: CreationOptional<string>;
    declare createdAt: CreationOptional<Date>;
    declare updatedAt: CreationOptional<Date>;
    declare deletedAt: CreationOptional<Date | null>;
}

DataStock.init(
    {
        id: {
            type: DataTypes.STRING,
            primaryKey: true,
        },
        part_name: DataTypes.STRING,
        name_casting: {
            type: DataTypes.STRING,
            defaultValue: "Casting",
        },
        before_casting: DataTypes.STRING,
        in_casting: DataTypes.STRING,
        name_machining: {
            type: DataTypes.STRING,
            defaultValue: "Machining",
        },
        before_machining: DataTypes.STRING,
        in_machining: DataTypes.STRING,
        after_machining: DataTypes.STRING,
        name_painting: {
            type: DataTypes.STRING,
            defaultValue: "Painting",
        },
        before_paiting: DataTypes.STRING,
        in_painting: DataTypes.STRING,
        after_painting: DataTypes.STRING,
        name_sc_painting: {
            type: DataTypes.STRING,
            defaultValue: "Sc Painting",
        },
        before_sc_painting: DataTypes.STRING,
        in_sc_painting: DataTypes.STRING,
        after_sc_painting: DataTypes.STRING,
        name_sc_finishing: {
            type: DataTypes.STRING,
            defaultValue: "Sc Finishing",
        },
        before_sc_finishing: DataTypes.STRING,
        in_sc_finishing: DataTypes.STRING,
        after_sc_finishing: DataTypes.STRING,
        name_finished_good: {
            type: DataTypes.STRING,
            defaultValue: "Finished Good",
        },
        before_finished_good: DataTypes.STRING,
        in_finished_good: DataTypes.STRING,
        after_finished_good: DataTypes.STRING,
        createdAt: DataTypes.DATE,
        updatedAt: DataTypes.DATE,
        deletedAt: DataTypes.DATE,
    },
    {
        tableName: "data_stocks",
        underscored: true,
        paranoid: true,
        sequelize: sequelize,
    }
);
