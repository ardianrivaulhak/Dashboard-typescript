import { DataStock, IDataStock } from "@/domain/models/data-stock";
import { injectable, inject } from "inversify";
import { DataStockRepository } from "@/domain/service/data-stock-repository";
import { TYPES } from "@/types";
import { datastockUpdate, TableDataStock, IData } from "@/dto/data-stock-dto";
import { TDataTableParam } from "@/domain/service/types";
import { TableData } from "@/domain/models/table-data";

@injectable()
export class DataStockService {
    constructor(
        @inject(TYPES.DataStockRepository)
        private _dataStock: DataStockRepository
    ) {}

    public async getStocks(): Promise<any[]> {
        const stock = await this._dataStock.getStocks();
        return stock;
    }

    public async store(_data: IDataStock): Promise<void> {
        const stock = await this.getStocks();
        let data;
        stock.map(async (el) => {
            data = await this._dataStock.store(
                DataStock.create({
                    part_name: el.materialDescription,
                    name_casting: _data.name_casting,
                    before_casting: el.beforeCastingQty,
                    in_casting: el.castingQty,
                    name_machining: _data.name_machining,
                    before_machining: el.beforeMachiningQty,
                    in_machining: "0",
                    after_machining: "0",
                    name_painting: _data.name_painting,
                    before_paiting: "0",
                    in_painting: "0",
                    after_painting: "0",
                    name_sc_painting: _data.name_sc_painting,
                    before_sc_painting: "0",
                    in_sc_painting: "0",
                    after_sc_painting: "0",
                    name_sc_finishing: _data.name_sc_finishing,
                    before_sc_finishing: "0",
                    in_sc_finishing: "0",
                    after_sc_finishing: "0",
                    name_finished_good: _data.name_finished_good,
                    before_finished_good: "0",
                    in_finished_good: "0",
                    after_finished_good: "0",
                })
            );
            data.unmarshal();
        });

        return data;
    }

    public async findAll(): Promise<IDataStock[]> {
        const data = await this._dataStock.findAll();

        const dto = data.map((el) => el.unmarshal());

        return dto;
    }

    public async findById(id: string): Promise<IDataStock> {
        const data = await this._dataStock.findById(id);
        return data.unmarshal();
    }

    public async update(
        id: string,
        _data: datastockUpdate
    ): Promise<datastockUpdate> {
        const find = await this._dataStock.findById(id);

        const toUpdateUser = DataStock.create({
            id: _data.id,
            part_name: find.part_name,
            name_casting: find.name_casting,
            before_casting: _data.before_casting,
            in_casting: _data.in_casting,
            name_machining: find.name_machining,
            before_machining: _data.before_machining,
            in_machining: _data.in_machining,
            after_machining: _data.after_machining,
            name_painting: find.name_painting,
            before_paiting: _data.before_paiting,
            in_painting: _data.in_painting,
            after_painting: _data.after_painting,
            name_sc_painting: find.name_sc_painting,
            before_sc_painting: _data.before_sc_painting,
            in_sc_painting: _data.in_sc_painting,
            after_sc_painting: _data.after_sc_painting,
            name_sc_finishing: find.name_sc_finishing,
            before_sc_finishing: _data.before_sc_finishing,
            in_sc_finishing: _data.in_sc_finishing,
            after_sc_finishing: _data.after_painting,
            name_finished_good: find.name_finished_good,
            before_finished_good: _data.before_finished_good,
            in_finished_good: _data.in_finished_good,
            after_finished_good: _data.after_finished_good,
        });

        const updatedUser = await this._dataStock.update(id, toUpdateUser);

        return {
            ...updatedUser.unmarshal(),
        };
    }

    public async getDataTable(param: TDataTableParam): Promise<TableDataStock> {
        const data = await this.findAll();

        const modifiedData: IData[] = data.map((el) => {
            const modifiedEl: IData = {
                id: el.id || "",
                part_name: el.part_name,
                name_casting: el.name_casting,
                before_casting: el.before_casting,
                in_casting: el.in_casting,
                name_machining: el.name_casting,
                before_machining: el.before_machining,
                in_machining: el.in_machining,
                after_machining: el.after_machining,
                name_painting: el.name_painting,
                before_paiting: el.before_paiting,
                in_painting: el.in_painting,
                after_painting: el.after_painting,
                name_sc_painting: el.name_sc_painting,
                before_sc_painting: el.before_sc_painting,
                in_sc_painting: el.in_sc_painting,
                after_sc_painting: el.after_sc_painting,
                name_sc_finishing: el.name_sc_finishing,
                before_sc_finishing: el.before_sc_finishing,
                in_sc_finishing: el.in_sc_finishing,
                after_sc_finishing: el.after_sc_finishing,
                name_finished_good: el.name_finished_good,
                before_finished_good: el.before_finished_good,
                in_finished_good: el.in_finished_good,
                after_finished_good: el.after_finished_good,
            };
            return modifiedEl;
        });
        const page: number = param.page || 1;
        const limit: number = param.limit || 10;
        const start: number = (page - 1) * limit;
        const end: number = (page - 1) * limit + limit;
        const pagedData = modifiedData.slice(start, end);

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
}
