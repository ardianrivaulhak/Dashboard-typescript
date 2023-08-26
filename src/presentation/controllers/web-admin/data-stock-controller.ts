import { DataStockService } from "@/services/web-admin/data-stock-service";
import { TYPES } from "@/types";
import { Request, response, Response } from "express";
import { inject, injectable } from "inversify";
import { dataStockUpdateScheme } from "../../validation/data-stock-validation";
import { AppError, HttpCode } from "@/libs/exceptions/app-error";
import { getDataTableScheme } from "@/presentation/validation/data-table-validation";

@injectable()
export class DataStockController {
    constructor(
        @inject(TYPES.DataStockService)
        private _dataStockService: DataStockService
    ) {}

    public async getStock(req: Request, res: Response): Promise<Response> {
        const data = await this._dataStockService.getStocks();
        return res
            .status(200)
            .send({ message: "success", data: data.map((val) => val) });
    }

    public async create(req: Request, res: Response): Promise<Response> {
        await this._dataStockService.store(req.body);
        return res.json({
            message: "Successfully created data",
        });
    }

    public async findAll(req: Request, res: Response): Promise<Response> {
        const data = await this._dataStockService.findAll();

        return res.json({
            message: "Successfully Read Data",
            data: data,
        });
    }

    public async findById(req: Request, res: Response): Promise<Response> {
        const data = await this._dataStockService.findById(req.params.id);
        return res.json({
            message: "Successfully Read Data",
            data: data,
        });
    }

    public async update(req: Request, res: Response): Promise<Response> {
        const validatedReq = dataStockUpdateScheme.safeParse(req.body);
        if (!validatedReq.success) {
            throw new AppError({
                statusCode: HttpCode.VALIDATION_ERROR,
                description: "Request validation error",
                data: validatedReq.error.flatten().fieldErrors,
            });
        }
        console.log(validatedReq.data);
        const data = await this._dataStockService.update(
            req.params.id,
            validatedReq.data
        );

        return res.json({
            message: "Successfully Update Data",
            data: data,
        });
    }

    public async getDataTable(req: Request, res: Response): Promise<Response> {
        const validatedReq = getDataTableScheme.safeParse(req.query);
        if (!validatedReq.success) {
            throw new AppError({
                statusCode: HttpCode.VALIDATION_ERROR,
                description: "Validation Error",
                data: validatedReq.error.flatten().fieldErrors,
            });
        }

        const data = await this._dataStockService.getDataTable(
            validatedReq.data
        );
        return res.json({
            message: "success",
            data: data,
        });
    }
}
