export interface IQrTagCustom {
    qrTagNumber: string;
    qtyRemaining?: number;
    qtyQrTag: number;
    proNumber: string;
    targetQtyPro: number;
}

export enum Step {
    BEFORE_CASTING = "BEFORE_CASTING",
    CASTING = "CASTING",
    BEFORE_MACHINING = "BEFORE_MACHINING",
    MACHINING = "MACHINING",
}

export interface IDashboardSummary {
    allTransaction: number;
    casting: number;
    machining: number;
}

export interface IDashboardOverall {
    beforeCasting: number;
    afterCasting: number;
    beforeMachining: number;
}

export enum Frequency {
    DAILY = "DAILY",
    MONTHLY = "MONTHLY",
}

export interface IPerformanceStatistic {
    labels: string;
    casting: number;
    machining: number;
}

export enum TypeInbound {
    GR = "GR",
    TP = "TP",
}

export interface IStock {
    customerCode: string;
    materialDescription: string;
    machineCode: string;
    totalQty: number;
    beforeCastingQty: number;
    castingQty: number;
    beforeMachiningQty: number;
}

export interface IPrintQrTag {
    material: string;
    machine: string;
    qtyQrTag: number;
    nrpOperator: string;
}
