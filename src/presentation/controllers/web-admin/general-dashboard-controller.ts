import { GeneralDashboardService } from "@/services/web-admin/general-dashboard-service";
import { TYPES } from "@/types";
import { Request, response, Response } from "express";
import { inject, injectable } from "inversify";
import { getDataTableScheme } from "@/presentation/validation/data-table-validation";
import { AppError, HttpCode } from "@/libs/exceptions/app-error";

@injectable()
export class GeneralDashboardController {
    constructor(
        @inject(TYPES.GeneralDashboardService)
        private _generalDashboardService: GeneralDashboardService
    ) {}

    public async getDataPending(
        req: Request,
        res: Response
    ): Promise<Response> {
        const validatedReq = getDataTableScheme.safeParse(req.query);
        if (!validatedReq.success) {
            throw new AppError({
                statusCode: HttpCode.VALIDATION_ERROR,
                description: "Validation Error",
                data: validatedReq.error.flatten().fieldErrors,
            });
        }
        const data = await this._generalDashboardService.getDataPending(
            validatedReq.data
        );

        return res
            .status(200)
            .send({ message: "data Successfully", data: data });
    }

    public async getDataWillBePending(
        req: Request,
        res: Response
    ): Promise<Response> {
        const validatedReq = getDataTableScheme.safeParse(req.query);
        if (!validatedReq.success) {
            throw new AppError({
                statusCode: HttpCode.VALIDATION_ERROR,
                description: "Validation Error",
                data: validatedReq.error.flatten().fieldErrors,
            });
        }
        const data = await this._generalDashboardService.getDataWillBePending(
            validatedReq.data
        );

        return res
            .status(200)
            .send({ message: "data Successfully", data: data });
    }
    public async dashboardDataWillBePending(
        req: Request,
        res: Response
    ): Promise<Response> {
        const data = await this._generalDashboardService.dashboardWillBePending(
            req.params.raw_data_id
        );
        return res.json({
            message: "success",
            data: data,
        });
    }
    public async dashboardDataNewProject(
        req: Request,
        res: Response
    ): Promise<Response> {
        const data = await this._generalDashboardService.dashboardNewProject(
            req.params.raw_data_id
        );
        return res.json({
            message: "success",
            data: data,
        });
    }

    public async getNewProject(req: Request, res: Response): Promise<Response> {
        const data = await this._generalDashboardService.getNewProject(
            req.query
        );

        return res.status(200).send({
            message: "Updated data Successfully",
            data: data,
        });
    }

    public async updateProbles(req: Request, res: Response): Promise<Response> {
        await this._generalDashboardService.updateDataProblems(
            req.params.raw_data_id,
            req.body.problems
        );

        return res.status(200).send({ message: "Updated data Successfully" });
    }

    public async updateNotes(req: Request, res: Response): Promise<Response> {
        await this._generalDashboardService.updateDataNotes(
            req.body.notes,
            req.params.raw_data_id
        );

        return res.status(200).send({ message: "Updated data Successfully" });
    }
}
