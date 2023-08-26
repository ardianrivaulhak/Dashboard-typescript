import { TDataTableParam } from "@/domain/service/types";
import { IRawData, RawData } from "../models/raw-data";
import { TableData } from "../models/table-data";
import { IQrTag, QrTag } from "../models/qr-tag";
export interface RawDataRepository {
    import(rawData: IRawData[]): Promise<IRawData[]>;
    findAll(): Promise<any[]>;
}
