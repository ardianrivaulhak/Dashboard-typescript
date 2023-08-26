// Core Sequelize Model Import
import { rawData } from "./raw-data-sequelize";
import { User } from "./user-sequelize";
import { Machine } from "./machine-sequelize";
import { QrTag } from "./qr-tag-sequelize";
import { MaterialDescription } from "./material-description-sequelize";
import { ProData } from "./pro-data-sequelize";
import { DataStock } from "./data-stock-sequelize";
// Apps Sequelize Model Import

(async () => {
    // Core Model Synchronisation
    await User.sync({ alter: { drop: false } });
    await rawData.sync({ alter: { drop: false } });
    await DataStock.sync({ alter: true });
    // Apps Model Synchronisation
})();

// Core Model Assosiation
// User.belongsToMany(Role, {
//   through: UserRole,
//   foreignKey: 'user_id',
//   otherKey: 'role_id',
// })

// Apps Model Assosiation
QrTag.belongsTo(ProData, {
    foreignKey: "pro_id",
    as: "pro_data",
});

Machine.hasMany(QrTag, {
    foreignKey: "machine_id",
});

QrTag.belongsTo(Machine, {
    foreignKey: "machine_id",
    as: "machine",
});

QrTag.belongsTo(MaterialDescription, {
    foreignKey: "material_id",
    as: "material",
});

MaterialDescription.belongsTo(Machine, {
    foreignKey: "machine_id",
});
// Core Model Export
export * from "./user-sequelize";
export * from "./raw-data-sequelize";
export * from "./pro-data-sequelize";
export * from "./machine-sequelize";
export * from "./qr-tag-sequelize";
export * from "./material-description-sequelize";
export * from "./data-stock-sequelize";
// Apps Model Export
