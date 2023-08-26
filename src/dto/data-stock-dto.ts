export enum StepDataStock {
    BEFORE_CASTING = "BEFORE_CASTING",
    CASTING = "CASTING",
    BEFORE_MACHINING = "BEFORE_MACHINING",
    MACHINING = "MACHINING",
    AFTER_MACHINING = "AFTER_MACHINING",
}

export interface datastockUpdate {
    id?: string;
    before_casting: string;
    in_casting: string;
    before_machining: string;
    in_machining: string;
    after_machining: string;
    before_paiting: string;
    in_painting: string;
    after_painting: string;
    before_sc_painting: string;
    in_sc_painting: string;
    after_sc_painting: string;
    before_sc_finishing: string;
    in_sc_finishing: string;
    after_sc_finishing: string;
    before_finished_good: string;
    in_finished_good: string;
    after_finished_good: string;
}

export interface TableDataStock {
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

export interface IData {
    id: string;
    part_name: string;
    name_casting: string;
    before_casting: string;
    in_casting: string;
    name_machining: string;
    before_machining: string;
    in_machining: string;
    after_machining: string;
    name_painting: string;
    before_paiting: string;
    in_painting: string;
    after_painting: string;
    name_sc_painting: string;
    before_sc_painting: string;
    in_sc_painting: string;
    after_sc_painting: string;
    name_sc_finishing: string;
    before_sc_finishing: string;
    in_sc_finishing: string;
    after_sc_finishing: string;
    name_finished_good: string;
    before_finished_good: string;
    in_finished_good: string;
    after_finished_good: string;
}
