import { DB_CONFIG, DB_CONFIG_SECOND } from "@/libs/utils";
import { Dialect, Sequelize } from "sequelize";
const { db_name, db_user, db_password } = DB_CONFIG;
const { db2_name, db2_user, db2_password } = DB_CONFIG_SECOND;
const sequelize = new Sequelize(db_name, db_user, db_password, {
    dialect: <Dialect>DB_CONFIG.config.dialect,
    port: parseInt(DB_CONFIG.config.port),
    // logging: false,
});

const sequelize_2 = new Sequelize(db2_name, db2_user, db2_password, {
    dialect: <Dialect>DB_CONFIG_SECOND.config.dialect,
    port: parseInt(DB_CONFIG_SECOND.config.port),
    // logging: false,
});

export { Sequelize, sequelize, sequelize_2 };
