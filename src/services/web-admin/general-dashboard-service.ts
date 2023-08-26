import { RawData, IRawData } from "@/domain/models/raw-data";
import { injectable, inject } from "inversify";
import { GeneralDashboardRepository } from "@/domain/service/general-dashboard-repository";
import { TYPES } from "@/types";
import moment from "moment";
import { TDataTableParam, TDataTableParamFilter } from "@/domain/service/types";
import { TableData } from "@/domain/models/table-data";
import {
    INewData,
    IPendingData,
    TableDataPending,
} from "@/dto/general-dashboard";

@injectable()
export class GeneralDashboardService {
    constructor(
        @inject(TYPES.GeneralDashboardRepository)
        private _generalDashboardRepository: GeneralDashboardRepository
    ) {}

    public async getDataPending(
        param: TDataTableParam
    ): Promise<TableDataPending> {
        const data = await (
            await this.dataPending()
        ).filter((el) => el.balance < 0);

        const total = data.reduce((a, x) => a + x.balance, 0);

        let t = 0;

        const modifiedData: IPendingData[] = data.map((el) => {
            t += el.balance;

            const percent = (t / total) * 100;
            const modifiedEl: IPendingData = {
                id: el.id || "",
                customer: el.customer,
                part_name: el.part_name,
                stock_fg: el.stock_fg,
                qty_minus: el.qty_minus,
                today: el.today,
                balance: el.balance,
                percentage: parseFloat(percent.toFixed(2)),
                problems: el.problems,
            };
            return modifiedEl;
        });
        const page: number = param.page || 1;
        const limit: number = param.limit || 10;
        const start: number = (page - 1) * limit;
        const end: number = (page - 1) * limit + limit;
        const pagedData = modifiedData.slice(start, end);
        console.log(start, end);
        const entityTableResult = TableData.create({
            page: param.page || 1,
            limit: param.limit || 10,
            search: param.search || "",
            data: pagedData,
        });
        const result = {
            total: data.length,
            ...entityTableResult.unmarshal(),
        };
        return result;
    }

    public async dataPending(): Promise<any[]> {
        const data = await this._generalDashboardRepository.findAll();
        const _data = data;

        const modifiedData = _data.map((el) => {
            const fgValue = parseFloat(el.fg);
            const balance = fgValue - (el.pending + el.day);
            const modifiedEl = {
                id: el.id,
                customer: el.customer,
                part_name: el.name,
                stock_fg: el.fg,
                qty_minus: el.pending,
                today: el.day,
                balance: balance,
                persentage: 0,
                problems: el.problems,
            };
            return modifiedEl;
        });

        const sortedData = modifiedData.sort((a, b) => a.balance - b.balance);

        return sortedData;
    }
    public async dataWillBePending(): Promise<any[]> {
        const data = await this._generalDashboardRepository.findAll();
        const _data = data;
        let fgValue = 0;
        const modifiedData = _data.map((el) => {
            fgValue = parseFloat(el.fg);
            const balance = fgValue - (el.pending + el.day);

            const days: number[] = [
                el.day,
                el.day_1,
                el.day_2,
                el.day_3,
                el.day_4,
                el.day_5,
            ];
            const modified: {
                customer: string;
                part_name: string;
                stock_fg: string | number;
                [key: string]: any;
                notes: string | undefined;
                balance: number;
            } = {
                id: el.id,
                customer: el.customer,
                part_name: el.name,
                stock_fg: fgValue,
                notes: el.notes,
                balance: balance,
            };
            var tempCheck = "";

            for (let i = 0; i <= 5; i++) {
                const dayValue = days[i];

                fgValue -= dayValue;
                const valName: string = i === 0 ? "H" : `H_${i}`;
                modified[valName] = {
                    time: moment(i, "days").format("YYYY-DD-MM"),
                    data: dayValue,
                    finished: false,
                };

                if (fgValue <= 0) {
                    if (tempCheck == "") {
                        modified[valName].finished = true;

                        tempCheck = "terisi";
                    }
                }
            }

            return modified;
        });

        const sortedData = modifiedData.sort((a, b) => a.balance - b.balance);
        const filteredData = sortedData.filter((el) => el.balance > 0);
        return filteredData;
    }

    public async dataNew(): Promise<any[]> {
        const data = await this._generalDashboardRepository.findAllNew();
        const _data = data;

        const modifiedData = _data.map((el) => {
            const modifiedEl = {
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
            };
            return modifiedEl;
        });

        return modifiedData;
    }

    public async dashboardWillBePending(
        raw_data_id: string
    ): Promise<[number, number][]> {
        const data = await this._generalDashboardRepository.findByName(
            raw_data_id,
            "Existing"
        );
        const parsedData = data.unmarshal();
        // console.log(parsedData);
        let fgValue = parseFloat(parsedData.fg);
        const balance = fgValue - (parsedData.pending + parsedData.day);
        const days: number[] = [
            data.day,
            data.day_1,
            data.day_2,
            data.day_3,
            data.day_4,
            data.day_5,
        ];
        const modified: {
            customer: string;
            part_name: string;
            stock_fg: string | number;
            [key: string]: any;
            notes: string | undefined;
            balance: number;
        } = {
            id: parsedData.id,
            customer: parsedData.customer,
            part_name: parsedData.name,
            stock_fg: fgValue,
            notes: parsedData.notes,
            balance: balance,
        };
        var tempCheck = "";

        for (let i = 0; i <= 5; i++) {
            const dayValue = days[i];

            fgValue -= dayValue;
            const valName: string = i === 0 ? "H" : `H_${i}`;
            modified[valName] = {
                time: moment(i, "days").format("YYYY-DD-MM"),
                data: dayValue,
                finished: false,
            };

            if (fgValue <= 0) {
                if (tempCheck == "") {
                    modified[valName].finished = true;

                    tempCheck = "terisi";
                }
            }
        }
        let ranges: any[] = [];

        for (let j = 0; j <= 5; j++) {
            const js: string = j === 0 ? "H" : `H_${j}`;
            const dataArr = modified[js];
            ranges.push(dataArr.data);
        }
        let sum: number = 0;
        let result: [number, number][] = ranges.map((value) => {
            const start: number = sum;
            if (value !== 0) {
                sum += value;
            }
            return [start, sum];
        });

        return result;
    }
    public async dashboardNewProject(
        raw_data_id: string
    ): Promise<[number, number][]> {
        const data = await this._generalDashboardRepository.findByName(
            raw_data_id,
            "New"
        );
        const parsedData = data.unmarshal();
        let fgValue = parseFloat(parsedData.fg);
        const balance = fgValue - (parsedData.pending + parsedData.day);
        const days: number[] = [
            data.day,
            data.day_1,
            data.day_2,
            data.day_3,
            data.day_4,
            data.day_5,
        ];
        const modified: {
            customer: string;
            part_name: string;
            stock_fg: string | number;
            [key: string]: any;
            notes: string | undefined;
            balance: number;
        } = {
            id: parsedData.id,
            customer: parsedData.customer,
            part_name: parsedData.name,
            stock_fg: fgValue,
            notes: parsedData.notes,
            balance: balance,
        };

        for (let i = 0; i <= 5; i++) {
            const dayValue = days[i];

            fgValue -= dayValue;
            const valName: string = i === 0 ? "H" : `H_${i}`;
            modified[valName] = {
                time: moment(i, "days").format("YYYY-DD-MM"),
                data: dayValue,
            };
        }
        let ranges: any[] = [];

        for (let j = 0; j <= 5; j++) {
            const js: string = j === 0 ? "H" : `H_${j}`;
            const dataArr = modified[js];
            ranges.push(dataArr.data);
        }
        let sum: number = 0;
        let result: [number, number][] = ranges.map((value) => {
            const start: number = sum;
            if (value !== 0) {
                sum += value;
            }
            return [start, sum];
        });

        return result;
    }

    public async getDataWillBePending(
        param: TDataTableParam
    ): Promise<TableDataPending> {
        const allData = await this.dataWillBePending();

        const page: number = param.page || 1;
        const limit: number = param.limit || 10;
        const start: number = (page - 1) * limit;
        const end: number = (page - 1) * limit + limit;
        const pagedData = allData.slice(start, end);
        const entityTableResult = TableData.create({
            page: page || 1,
            limit: limit || 10,
            search: param.search || "",
            data: pagedData,
        });
        const result = {
            total: allData.length,
            ...entityTableResult.unmarshal(),
        };
        return result;
    }

    public async getNewProject(
        param: TDataTableParam
    ): Promise<TableDataPending> {
        let data = await this._generalDashboardRepository.getDataNew(param);
        let _data = data.unmarshal();
        const allDataNew = await this.dataNew();

        const currentDate = moment().format("YYYY-MM-DD");
        const modifiedData: INewData[] = _data.data.map((el) => {
            return {
                id: el.id,
                customer: el.customer,
                part_name: el.name,
                stock_fg: el.fg,
                H: {
                    date: currentDate,
                    data: el.day,
                },
                H_1: {
                    date: moment(currentDate)
                        .add(1, "days")
                        .format("YYYY-MM-DD"),
                    data: el.day_1,
                },
                H_2: {
                    date: moment(currentDate)
                        .add(2, "days")
                        .format("YYYY-MM-DD"),
                    data: el.day_2,
                },
                H_3: {
                    date: moment(currentDate)
                        .add(3, "days")
                        .format("YYYY-MM-DD"),
                    data: el.day_3,
                },
                H_4: {
                    date: moment(currentDate)
                        .add(4, "days")
                        .format("YYYY-MM-DD"),
                    data: el.day_4,
                },
                H_5: {
                    date: moment(currentDate)
                        .add(5, "days")
                        .format("YYYY-MM-DD"),
                    data: el.day_5,
                },
                notes: el.notes,
            };
        });

        const entityTableResult = TableData.create({
            page: param.page || 1,
            limit: param.limit || 10,
            search: param.search || "",
            data: modifiedData,
        });
        const result = {
            total: allDataNew.length,
            ...entityTableResult.unmarshal(),
        };
        return result;
    }

    public async updateDataProblems(
        raw_data_id: string,
        problems: string
    ): Promise<void> {
        await this._generalDashboardRepository.updateDataProblems(
            raw_data_id,
            problems
        );
    }

    public async updateDataNotes(
        notes: string,
        raw_data_id: string
    ): Promise<void> {
        await this._generalDashboardRepository.updateNotes(raw_data_id, notes);
    }
}
