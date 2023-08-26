import { RawDataRepository } from "@/domain/service/raw-data-repository";
import { rawData } from "@/infrastructure/database/models/raw-data-sequelize";
import { QrTag } from "@/infrastructure/database/models/qr-tag-sequelize";
import { RawData as EntityRawData, IRawData } from "@/domain/models/raw-data";
import { AppError, HttpCode } from "@/libs/exceptions/app-error";
import { injectable } from "inversify";
import { sequelize } from "@/infrastructure/database/sequelize";

@injectable()
export class RawDataSequelizeRepository implements RawDataRepository {
    async findAll(): Promise<any[]> {
        const data = QrTag.findAll();

        return data;
    }
    async import(raw: IRawData[]): Promise<IRawData[]> {
        const t = await sequelize.transaction();
        try {
            let createdEntities: EntityRawData[] = [];
            let lastNumber = 0;

            const existingRecords = await rawData.findAll({
                attributes: ["no"],
                order: [["no", "DESC"]],
                limit: 1,
            });

            if (existingRecords.length > 0) {
                console.log("MASUKKKKKKKK");
                lastNumber = existingRecords[0].no;
            }
            for (const raw_data of raw) {
                lastNumber++;
                const data = await rawData.create(
                    {
                        id: raw_data.id,
                        no: lastNumber,
                        date: raw_data.date,
                        customer: raw_data.customer,
                        status: raw_data.status || "",
                        name: raw_data.name,
                        pending: raw_data.pending,
                        day: raw_data.day,
                        day_1: raw_data.day_1,
                        day_2: raw_data.day_2,
                        day_3: raw_data.day_3,
                        day_4: raw_data.day_4,
                        day_5: raw_data.day_5,
                        fg: raw_data.fg,
                        startDay: raw_data.startDay,
                        dayStock: raw_data.dayStock,
                        dayPlusOne: raw_data.dayPlusOne,
                        problems: raw_data.problems || "",
                        notes: raw_data.notes || "",
                    },
                    { transaction: t }
                );

                const entityRawData = EntityRawData.create({
                    id: data.id,
                    no: data.no,
                    date: data.date,
                    customer: data.customer,
                    status: data.status,
                    name: data.name,
                    pending: data.pending,
                    day: data.day,
                    day_1: data.day_1,
                    day_2: data.day_2,
                    day_3: data.day_3,
                    day_4: data.day_4,
                    day_5: data.day_5,
                    fg: raw_data.fg,
                    startDay: data.startDay,
                    dayStock: data.dayStock,
                    dayPlusOne: data.dayPlusOne,
                    problems: data.problems,
                    notes: data.notes,
                    createdAt: data.created_at,
                    updatedAt: data.updated_at,
                    deletedAt: data.deleted_at,
                });

                createdEntities.push(entityRawData);
            }

            await t.commit();
            return createdEntities;
        } catch (error) {
            await t.rollback();
            throw new AppError({
                statusCode: HttpCode.BAD_REQUEST,
                description: "Failed to create rawData",
                error: error,
            });
        }
    }
}
