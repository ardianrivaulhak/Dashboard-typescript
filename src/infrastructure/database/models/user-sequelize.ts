import {
    CreationOptional,
    DataTypes,
    InferAttributes,
    InferCreationAttributes,
    Model,
} from "sequelize";
import { sequelize } from "../sequelize";

export class User extends Model<
    InferAttributes<User>,
    InferCreationAttributes<User>
> {
    declare id: CreationOptional<string>;
    declare email: string;
    declare password: CreationOptional<string> | null;
    declare name: string;
    declare nik: string;
    declare created_at: CreationOptional<Date>;
    declare updated_at: CreationOptional<Date>;
    declare deleted_at: CreationOptional<Date>;
}

User.init(
    {
        id: {
            type: DataTypes.STRING,
            primaryKey: true,
        },
        email: {
            unique: true,
            type: DataTypes.STRING,
        },
        password: DataTypes.STRING,
        name: DataTypes.STRING,
        nik: DataTypes.STRING,
        created_at: DataTypes.DATE,
        updated_at: DataTypes.DATE,
        deleted_at: DataTypes.DATE,
    },
    {
        tableName: "users",
        underscored: true,
        paranoid: true,
        timestamps: true,
        sequelize,
    }
);
