import { RawData, IRawData } from "@/domain/models/raw-data";
import { injectable, inject } from "inversify";
import { RawDataRepository } from "@/domain/service/raw-data-repository";
import { ITableData } from "@/domain/models/table-data";
import { FileSystem } from "@/infrastructure/file-system";
import { TYPES } from "@/types";
import * as XLSX from "xlsx";
import { convertToExcel } from "@/presentation/middleware/convert-excel";
@injectable()
export class RawDataService {
    constructor(
        @inject(TYPES.RawDataRepository)
        private _probRepository: RawDataRepository
    ) {}

    public async importExcel(file: Express.Multer.File): Promise<void> {
        const workbook = XLSX.read(file.buffer, { type: "buffer" });
        const sheetName = workbook.SheetNames[0];
        const worksheet = workbook.Sheets[sheetName];

        const data = XLSX.utils.sheet_to_json(worksheet);

        const transformedData: IRawData[] = data.map((el: any) => {
            return {
                no: el.id,
                date: el.TANGGAL,
                customer: el.CUSTOMER,
                status: el.KATEGORI,
                name: el.NAMA_PART,
                pending: el.Pending,
                day: el.H,
                day_1: el.H_1,
                day_2: el.H_2,
                day_3: el.H_3,
                day_4: el.H_4,
                day_5: el.H_5,
                fg: el.FG,
                startDay: el.Hminsatu,
                dayStock: el.Hstock,
                dayPlusOne: el.Hplussatu,
                problems: "",
                notes: "",
            };
        });

        const problemEntities: RawData[] = await Promise.all(
            transformedData.map(async (transformed_data) =>
                RawData.create(transformed_data)
            )
        );

        const importedProblems: IRawData[] = problemEntities.map((entity) =>
            entity.unmarshal()
        );
        await this._probRepository.import(problemEntities);
    }

    public async findAll(): Promise<any[]> {
        const data = await this._probRepository.findAll();

        return data;
    }
}
