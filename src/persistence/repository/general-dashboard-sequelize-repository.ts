import { GeneralDashboardRepository } from "@/domain/service/general-dashboard-repository";
import { rawData } from "@/infrastructure/database/models";
import {
    RawData as EntityRawData,
    IRawData,
    RawData,
} from "@/domain/models/raw-data";
import { injectable } from "inversify";
import { TDataTableParam } from "@/domain/service/types";
import { TableData } from "@/domain/models/table-data";
import { FindOptions, Op, Order } from "sequelize";
import { AppError, HttpCode } from "@/libs/exceptions/app-error";

@injectable()
export class GeneralDashboardSequelizeRepository
    implements GeneralDashboardRepository
{
    async findByName(
        raw_data_id: string,
        status: string
    ): Promise<EntityRawData> {
        let options: FindOptions = {};
        if (status === "Existing") {
            options = {
                where: {
                    status: "Existing",
                    id: raw_data_id,
                },
            };
        } else if (status === "New") {
            options = {
                where: {
                    status: "New",
                    id: raw_data_id,
                },
            };
        }
        const data = await rawData.findOne(options);

        if (!data) {
            throw new AppError({
                statusCode: HttpCode.NOT_FOUND,
                description: "Raw Data not found",
            });
        }
        return EntityRawData.create(data.toJSON());
    }
    async updateNotes(raw_data_id: string, notes: string): Promise<void> {
        const data = await rawData.findByPk(raw_data_id);

        if (!data) {
            throw new AppError({
                statusCode: HttpCode.NOT_FOUND,
                description: "not found",
            });
        }

        const news = await rawData.update(
            {
                notes: notes,
            },
            {
                where: {
                    id: raw_data_id,
                },
            }
        );

        if (news[0] === 0) {
            throw new AppError({
                statusCode: HttpCode.NOT_FOUND,
                description: "Cannot update notes with status Existing",
            });
        }
    }
    async updateDataProblems(
        raw_data_id: string,
        problems: string
    ): Promise<void> {
        const data = await rawData.findByPk(raw_data_id);

        if (!data) {
            throw new AppError({
                statusCode: HttpCode.NOT_FOUND,
                description: "not found",
            });
        }

        let p = await rawData.update(
            {
                problems: problems,
            },
            {
                where: {
                    id: raw_data_id,
                    status: "Existing",
                },
            }
        );
    }

    async getDataNew(param: TDataTableParam): Promise<TableData<IRawData>> {
        const data = await rawData.findAll({
            where: {
                status: "New",
                name: {
                    [Op.iLike]: `%${param.search || ""}%`,
                },
            },
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
                no: el.no,
                date: el.date,
                customer: el.customer,
                status: el.status,
                name: el.name,
                pending: el.pending,
                day: el.day,
                day_1: el.day_1,
                day_2: el.day_2,
                day_3: el.day_3,
                day_4: el.day_4,
                day_5: el.day_5,
                fg: el.fg,
                startDay: el.startDay,
                dayStock: el.dayStock,
                dayPlusOne: el.dayPlusOne,
                problems: el.problems,
                notes: el.notes,
                createdAt: el.created_at,
                updatedAt: el.updated_at,
                deletedAt: el.deleted_at,
            })),
        });
    }

    async getDatawillBePending(
        param: TDataTableParam
    ): Promise<TableData<IRawData>> {
        const data = await rawData.findAll({
            where: {
                status: "Existing",
            },
            order: [["name", "DESC"]],
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
                no: el.no,
                date: el.date,
                customer: el.customer,
                status: el.status,
                name: el.name,
                pending: el.pending,
                day: el.day,
                day_1: el.day_1,
                day_2: el.day_2,
                day_3: el.day_3,
                day_4: el.day_4,
                day_5: el.day_5,
                fg: el.fg,
                startDay: el.startDay,
                dayStock: el.dayStock,
                dayPlusOne: el.dayPlusOne,
                problems: el.problems,
                notes: el.notes,
                createdAt: el.created_at,
                updatedAt: el.updated_at,
                deletedAt: el.deleted_at,
            })),
        });
    }

    async getDataPending(param: TDataTableParam): Promise<TableData<IRawData>> {
        const data = await rawData.findAll({
            where: {
                status: "Existing",
            },
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
                no: el.no,
                date: el.date,
                customer: el.customer,
                status: el.status,
                name: el.name,
                pending: el.pending,
                day: el.day,
                day_1: el.day_1,
                day_2: el.day_2,
                day_3: el.day_3,
                day_4: el.day_4,
                day_5: el.day_5,
                fg: el.fg,
                startDay: el.startDay,
                dayStock: el.dayStock,
                dayPlusOne: el.dayPlusOne,
                problems: el.problems,
                notes: el.notes,
                createdAt: el.created_at,
                updatedAt: el.updated_at,
                deletedAt: el.deleted_at,
            })),
        });
    }

    async findAll(): Promise<EntityRawData[]> {
        const data = await rawData.findAll({
            where: {
                status: "Existing",
            },
        });
        return data.map((el) =>
            EntityRawData.create({
                id: el.id,
                no: el.no,
                date: el.date,
                customer: el.customer,
                status: el.status,
                name: el.name,
                pending: el.pending,
                day: el.day,
                day_1: el.day_1,
                day_2: el.day_2,
                day_3: el.day_3,
                day_4: el.day_4,
                day_5: el.day_5,
                fg: el.fg,
                startDay: el.startDay,
                dayStock: el.dayStock,
                dayPlusOne: el.dayPlusOne,
                problems: el.problems,
                notes: el.notes,
                createdAt: el.created_at,
                updatedAt: el.updated_at,
                deletedAt: el.deleted_at,
            })
        );
    }
    async findAllNew(): Promise<EntityRawData[]> {
        const data = await rawData.findAll({
            where: {
                status: "New",
            },
        });
        return data.map((el) =>
            EntityRawData.create({
                id: el.id,
                no: el.no,
                date: el.date,
                customer: el.customer,
                status: el.status,
                name: el.name,
                pending: el.pending,
                day: el.day,
                day_1: el.day_1,
                day_2: el.day_2,
                day_3: el.day_3,
                day_4: el.day_4,
                day_5: el.day_5,
                fg: el.fg,
                startDay: el.startDay,
                dayStock: el.dayStock,
                dayPlusOne: el.dayPlusOne,
                problems: el.problems,
                notes: el.notes,
                createdAt: el.created_at,
                updatedAt: el.updated_at,
                deletedAt: el.deleted_at,
            })
        );
    }
}
