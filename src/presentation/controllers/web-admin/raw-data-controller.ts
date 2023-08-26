import { RawDataService } from "@/services/web-admin/raw-data-service";
import { TYPES } from "@/types";
import { Request, response, Response } from "express";
import { inject, injectable } from "inversify";

@injectable()
export class RawDataController {
    constructor(
        @inject(TYPES.RawDataService) private _rawDataService: RawDataService
    ) {}
    public async importRawData(req: Request, res: Response): Promise<void> {
        try {
            const file = req.file;

            if (!file) {
                res.status(400).json({ error: "File not found" });
                return;
            }

            await this._rawDataService.importExcel(file);
            res.json({ message: "Excel file imported successfully" });
        } catch (error) {
            console.log(error);
            res.status(500).json({ error: "Failed to import Excel file" });
        }
    }

    public async findAll(req: Request, res: Response): Promise<Response> {
        const users = await this._rawDataService.findAll();
        return res
            .status(200)
            .send({ message: "success", data: users.map((val) => val) });
    }
}
