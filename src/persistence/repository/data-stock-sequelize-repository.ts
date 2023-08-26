import { DataStockRepository } from "@/domain/service/data-stock-repository";
import { QrTag } from "@/infrastructure/database/models/qr-tag-sequelize";
import { AppError, HttpCode } from "@/libs/exceptions/app-error";
import { injectable } from "inversify";
import { sequelize } from "@/infrastructure/database/sequelize";
import { Op } from "sequelize";
import {
    IDataStock,
    DataStock as EntityDataStock,
} from "@/domain/models/data-stock";
import { DataStock } from "@/infrastructure/database/models";
import { TableData } from "@/domain/models/table-data";
import { TDataTableParam } from "@/domain/service/types";

@injectable()
export class DataStockSequelizeRepository implements DataStockRepository {
    async getDataStock(param: TDataTableParam): Promise<TableData<IDataStock>> {
        const data = await DataStock.findAll({
            limit: param.limit ? param.limit : undefined,
            offset:
                (param.page || 1) > 1
                    ? (param.limit || 10) * ((param.page || 1) - 1)
                    : 0,
        });
        return TableData.create({
            page: param.page || 1,
            limit: param.limit || 10,
            search: param.search || "",
            data: data.map((el) => ({
                id: el.id,
                part_name: el.part_name,
                name_casting: el.name_casting,
                before_casting: el.before_casting,
                in_casting: el.in_casting,
                name_machining: el.name_machining,
                before_machining: el.before_machining,
                in_machining: el.in_machining,
                after_machining: el.after_machining,
                name_painting: el.name_painting,
                before_paiting: el.before_paiting,
                in_painting: el.in_painting,
                after_painting: el.after_painting,
                name_sc_painting: el.name_sc_painting,
                before_sc_painting: el.before_sc_painting,
                in_sc_painting: el.in_sc_painting,
                after_sc_painting: el.after_sc_painting,
                name_sc_finishing: el.name_sc_finishing,
                before_sc_finishing: el.before_sc_finishing,
                in_sc_finishing: el.in_sc_finishing,
                after_sc_finishing: el.after_painting,
                name_finished_good: el.name_finished_good,
                before_finished_good: el.before_finished_good,
                in_finished_good: el.in_finished_good,
                after_finished_good: el.after_finished_good,
                createdAt: el.createdAt,
                updatedAt: el.updatedAt,
                deletedAt: el.deletedAt || undefined,
            })),
        });
    }
    async findById(id: string): Promise<EntityDataStock> {
        const _data = await DataStock.findByPk(id);
        if (!_data) {
            throw new AppError({
                statusCode: HttpCode.NOT_FOUND,
                description: "Data was not found",
            });
        }
        return EntityDataStock.create({
            id: _data.id,
            part_name: _data.part_name,
            name_casting: _data.name_casting,
            before_casting: _data.before_casting,
            in_casting: _data.in_casting,
            name_machining: _data.name_machining,
            before_machining: _data.before_machining,
            in_machining: _data.in_machining,
            after_machining: _data.after_machining,
            name_painting: _data.name_painting,
            before_paiting: _data.before_paiting,
            in_painting: _data.in_painting,
            after_painting: _data.after_painting,
            name_sc_painting: _data.name_sc_painting,
            before_sc_painting: _data.before_sc_painting,
            in_sc_painting: _data.in_sc_painting,
            after_sc_painting: _data.after_sc_painting,
            name_sc_finishing: _data.name_sc_finishing,
            before_sc_finishing: _data.before_sc_finishing,
            in_sc_finishing: _data.in_sc_finishing,
            after_sc_finishing: _data.after_painting,
            name_finished_good: _data.name_finished_good,
            before_finished_good: _data.before_finished_good,
            in_finished_good: _data.in_finished_good,
            after_finished_good: _data.after_finished_good,
            createdAt: _data.createdAt,
            updatedAt: _data.updatedAt,
            deletedAt: _data.deletedAt || undefined,
        });
    }
    async update(id: string, data: IDataStock): Promise<EntityDataStock> {
        const _data = await DataStock.findByPk(id);

        if (!_data) {
            throw new AppError({
                statusCode: HttpCode.NOT_FOUND,
                description: "Data Stock was not found",
            });
        }
        await _data.update({
            part_name: data.part_name,
            name_casting: data.name_casting,
            before_casting: data.before_casting,
            in_casting: data.in_casting,
            name_machining: data.name_machining,
            before_machining: data.before_machining,
            in_machining: data.in_machining,
            after_machining: data.after_machining,
            name_painting: data.name_painting,
            before_paiting: data.before_paiting,
            in_painting: data.in_painting,
            after_painting: data.after_painting,
            name_sc_painting: data.name_sc_painting,
            before_sc_painting: data.before_sc_painting,
            in_sc_painting: data.in_sc_painting,
            after_sc_painting: data.after_sc_painting,
            name_sc_finishing: data.name_sc_finishing,
            before_sc_finishing: data.before_sc_finishing,
            in_sc_finishing: data.in_sc_finishing,
            after_sc_finishing: data.after_painting,
            name_finished_good: data.name_finished_good,
            before_finished_good: data.before_finished_good,
            in_finished_good: data.in_finished_good,
            after_finished_good: data.after_finished_good,
        });
        await _data.reload();
        return EntityDataStock.create({
            id: _data.id,
            part_name: _data.part_name,
            name_casting: _data.name_casting,
            before_casting: _data.before_casting,
            in_casting: _data.in_casting,
            name_machining: _data.name_machining,
            before_machining: _data.before_machining,
            in_machining: _data.in_machining,
            after_machining: _data.after_machining,
            name_painting: _data.name_painting,
            before_paiting: _data.before_paiting,
            in_painting: _data.in_painting,
            after_painting: _data.after_painting,
            name_sc_painting: _data.name_sc_painting,
            before_sc_painting: _data.before_sc_painting,
            in_sc_painting: _data.in_sc_painting,
            after_sc_painting: _data.after_sc_painting,
            name_sc_finishing: _data.name_sc_finishing,
            before_sc_finishing: _data.before_sc_finishing,
            in_sc_finishing: _data.in_sc_finishing,
            after_sc_finishing: _data.after_painting,
            name_finished_good: _data.name_finished_good,
            before_finished_good: _data.before_finished_good,
            in_finished_good: _data.in_finished_good,
            after_finished_good: _data.after_finished_good,
            createdAt: _data.createdAt,
            updatedAt: _data.updatedAt,
            deletedAt: _data.deletedAt || undefined,
        });
    }
    async findAll(): Promise<EntityDataStock[]> {
        const data = await DataStock.findAll();

        return data.map((el) => {
            return EntityDataStock.create({
                id: el.id,
                part_name: el.part_name,
                name_casting: el.name_casting,
                before_casting: el.before_casting,
                in_casting: el.in_casting,
                name_machining: el.name_machining,
                before_machining: el.before_machining,
                in_machining: el.in_machining,
                after_machining: el.after_machining,
                name_painting: el.name_painting,
                before_paiting: el.before_paiting,
                in_painting: el.in_painting,
                after_painting: el.after_painting,
                name_sc_painting: el.name_sc_painting,
                before_sc_painting: el.before_sc_painting,
                in_sc_painting: el.in_sc_painting,
                after_sc_painting: el.after_sc_painting,
                name_sc_finishing: el.name_sc_finishing,
                before_sc_finishing: el.before_sc_finishing,
                in_sc_finishing: el.in_sc_finishing,
                after_sc_finishing: el.after_painting,
                name_finished_good: el.name_finished_good,
                before_finished_good: el.before_finished_good,
                in_finished_good: el.in_finished_good,
                after_finished_good: el.after_finished_good,
                createdAt: el.createdAt,
                updatedAt: el.updatedAt,
                deletedAt: el.deletedAt || undefined,
            });
        });
    }
    async store(data: IDataStock): Promise<EntityDataStock> {
        const stock = await DataStock.create({
            id: data.id,
            part_name: data.part_name,
            name_casting: data.name_casting,
            before_casting: data.before_casting,
            in_casting: data.in_casting,
            name_machining: data.name_machining,
            before_machining: data.before_machining,
            in_machining: data.in_machining,
            after_machining: data.after_machining,
            name_painting: data.name_painting,
            before_paiting: data.before_paiting,
            in_painting: data.in_painting,
            after_painting: data.after_painting,
            name_sc_painting: data.name_sc_painting,
            before_sc_painting: data.before_sc_painting,
            in_sc_painting: data.in_sc_painting,
            after_sc_painting: data.after_sc_painting,
            name_sc_finishing: data.name_sc_finishing,
            before_sc_finishing: data.before_sc_finishing,
            in_sc_finishing: data.in_sc_finishing,
            after_sc_finishing: data.after_painting,
            name_finished_good: data.name_finished_good,
            before_finished_good: data.before_finished_good,
            in_finished_good: data.in_finished_good,
            after_finished_good: data.after_finished_good,
        });
        const entity = EntityDataStock.create({
            id: stock.id,
            part_name: stock.part_name,
            name_casting: stock.name_casting,
            before_casting: stock.before_casting,
            in_casting: stock.in_casting,
            name_machining: stock.name_machining,
            before_machining: stock.before_machining,
            in_machining: stock.in_machining,
            after_machining: stock.after_machining,
            name_painting: stock.name_painting,
            before_paiting: stock.before_paiting,
            in_painting: stock.in_painting,
            after_painting: stock.after_painting,
            name_sc_painting: stock.name_sc_painting,
            before_sc_painting: stock.before_sc_painting,
            in_sc_painting: stock.in_sc_painting,
            after_sc_painting: stock.after_sc_painting,
            name_sc_finishing: stock.name_sc_finishing,
            before_sc_finishing: stock.before_sc_finishing,
            in_sc_finishing: stock.in_sc_finishing,
            after_sc_finishing: stock.after_painting,
            name_finished_good: stock.name_finished_good,
            before_finished_good: stock.before_finished_good,
            in_finished_good: stock.in_finished_good,
            after_finished_good: stock.after_finished_good,
            createdAt: stock.createdAt,
            updatedAt: stock.updatedAt,
            deletedAt: stock.deletedAt || undefined,
        });
        return entity;
    }

    async getStocks(): Promise<any[]> {
        const stock = await QrTag.findAll({
            attributes: [
                "material_description",
                // "machine_code",
                "customer_code",
                [sequelize.fn("SUM", sequelize.col("qty_qr_tag")), "totalQty"],
                [
                    sequelize.fn(
                        "SUM",
                        sequelize.literal(
                            "CASE WHEN step = 'BEFORE_CASTING' THEN qty_qr_tag ELSE 0 END"
                        )
                    ),
                    "beforeCastingQty",
                ],
                [
                    sequelize.fn(
                        "SUM",
                        sequelize.literal(
                            "CASE WHEN step = 'CASTING' THEN qty_qr_tag ELSE 0 END"
                        )
                    ),
                    "castingQty",
                ],
                [
                    sequelize.fn(
                        "SUM",
                        sequelize.literal(
                            "CASE WHEN step = 'BEFORE_MACHINING' THEN qty_qr_tag ELSE 0 END"
                        )
                    ),
                    "beforeMachiningQty",
                ],
            ],
            group: ["material_description", "customer_code"],
        });

        const _stock: any[] = stock.map((item) => ({
            customerCode: item.get("customer_code") as string,
            materialDescription: item.get("material_description") as string,
            totalQty: item.get("totalQty") as number,
            beforeCastingQty: item.get("beforeCastingQty") as number,
            castingQty: item.get("castingQty") as number,
            beforeMachiningQty: item.get("beforeMachiningQty") as number,
        }));

        return _stock;
    }
}
