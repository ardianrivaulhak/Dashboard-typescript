import { TableData } from "@/domain/models/table-data";

export interface INewData {
    customer: string;
    part_name: string;
    stock_fg: string;
    H: {
        date: string;
        data: number;
    };
    H_1: {
        date: string;
        data: number;
    };
    H_2: {
        date: string;
        data: number;
    };
    H_3: {
        date: string;
        data: number;
    };
    H_4: {
        date: string;
        data: number;
    };
    H_5: {
        date: string;
        data: number;
    };
    notes: string | undefined;
}

export interface TableDataPending {
    page: number;
    limit: number;
    search: string;
    total: number;
}
export interface IPendingData {
    id: string;
    // total: number;
    customer: string;
    part_name: string;
    stock_fg: string;
    qty_minus: number;
    today: number;
    balance: number;
    percentage: number;
    problems: string | undefined;
}
