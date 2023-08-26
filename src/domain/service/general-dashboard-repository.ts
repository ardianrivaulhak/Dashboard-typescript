import { IRawData, RawData } from "../models/raw-data";
import { TDataTableParam, TDataTableParamFilter } from "@/domain/service/types";
import { TableData } from "../models/table-data";

export interface GeneralDashboardRepository {
    getDataPending(param: TDataTableParam): Promise<TableData<IRawData>>;
    getDatawillBePending(param: TDataTableParam): Promise<TableData<IRawData>>;
    getDataNew(param: TDataTableParam): Promise<TableData<IRawData>>;
    updateDataProblems(raw_data_id: string, problems: string): Promise<void>;
    updateNotes(raw_data_id: string, notes: string): Promise<void>;
    findAll(): Promise<IRawData[]>;
    findByName(raw_data_id: string, status: string): Promise<RawData>;
    findAllNew(): Promise<IRawData[]>;
}
