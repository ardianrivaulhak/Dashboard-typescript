import { Entity } from "./entity";

export interface IRawData {
    id?: string;
    no: number;
    date: Date;
    customer: string;
    status: string | undefined;
    name: string;
    pending: number;
    day: number;
    day_1: number;
    day_2: number;
    day_3: number;
    day_4: number;
    day_5: number;
    fg: string;
    startDay: string;
    dayStock: string;
    dayPlusOne: string;
    problems: string | undefined;
    notes: string | undefined;
    createdAt?: Date;
    updatedAt?: Date;
    deletedAt?: Date;
}

export class RawData extends Entity<IRawData> {
    private constructor(props: IRawData) {
        const { id, ...data } = props;
        super(data, id);
    }

    public static create(props: IRawData): RawData {
        const instance = new RawData(props);
        return instance;
    }

    public unmarshal(): IRawData {
        return {
            id: this._id,
            no: this.no,
            date: this.date,
            customer: this.customer,
            status: this.status,
            name: this.name,
            pending: this.pending,
            day: this.day,
            day_1: this.day_1,
            day_2: this.day_2,
            day_3: this.day_3,
            day_4: this.day_4,
            day_5: this.day_5,
            fg: this.fg,
            startDay: this.startDay,
            dayStock: this.dayStock,
            dayPlusOne: this.dayPlusOne,
            problems: this.problems,
            notes: this.notes,
            createdAt: this.createdAt,
            updatedAt: this.updatedAt,
            deletedAt: this.deletedAt,
        };
    }

    get id(): string {
        return this._id;
    }
    get no(): number {
        return this.props.no;
    }
    get date(): Date {
        return this.props.date;
    }
    get customer(): string {
        return this.props.customer;
    }
    get status(): string | undefined {
        return this.props.status;
    }

    get name(): string {
        return this.props.name;
    }
    get pending(): number {
        return this.props.pending;
    }

    get day(): number {
        return this.props.day;
    }
    get day_1(): number {
        return this.props.day_1;
    }
    get day_2(): number {
        return this.props.day_2;
    }
    get day_3(): number {
        return this.props.day_3;
    }
    get day_4(): number {
        return this.props.day_4;
    }
    get day_5(): number {
        return this.props.day_5;
    }
    get fg(): string {
        return this.props.fg;
    }

    get startDay(): string {
        return this.props.startDay;
    }

    get dayStock(): string {
        return this.props.dayStock;
    }
    get dayPlusOne(): string {
        return this.props.dayPlusOne;
    }

    get problems(): string | undefined {
        return this.props.problems;
    }
    get notes(): string | undefined {
        return this.props.notes;
    }

    get createdAt(): Date | undefined {
        return this.props.createdAt;
    }
    get updatedAt(): Date | undefined {
        return this.props.updatedAt;
    }
    get deletedAt(): Date | undefined {
        return this.props.deletedAt;
    }
}
