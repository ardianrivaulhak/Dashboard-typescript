import { IDataStock, DataStock } from "../models/data-stock";
import { TableData } from "../models/table-data";
import { TDataTableParam } from "./types";

export interface DataStockRepository {
    getStocks(): Promise<any[]>;
    store(data: IDataStock): Promise<DataStock>;
    findAll(): Promise<DataStock[]>;
    getDataStock(param: TDataTableParam): Promise<TableData<IDataStock>>;
    findById(id: string): Promise<DataStock>;
    update(id: string, data: IDataStock): Promise<DataStock>;
}
