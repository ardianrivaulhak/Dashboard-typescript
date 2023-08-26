import { Entity } from "./entity";

export interface IDataStock {
    id?: string;
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
    createdAt?: Date;
    updatedAt?: Date;
    deletedAt?: Date;
}

export class DataStock extends Entity<IDataStock> {
    constructor(props: IDataStock) {
        const { id, ...data } = props;
        super(data, id);
    }

    static create(props: IDataStock): DataStock {
        const instance = new DataStock(props);
        return instance;
    }

    public unmarshal(): IDataStock {
        return {
            id: this._id,
            part_name: this.part_name,
            name_casting: this.name_casting,
            before_casting: this.before_casting,
            in_casting: this.in_casting,
            name_machining: this.name_machining,
            before_machining: this.before_machining,
            in_machining: this.in_machining,
            after_machining: this.after_machining,
            name_painting: this.name_painting,
            before_paiting: this.before_paiting,
            in_painting: this.in_painting,
            after_painting: this.after_painting,
            name_sc_painting: this.name_sc_painting,
            before_sc_painting: this.before_sc_painting,
            in_sc_painting: this.in_sc_painting,
            after_sc_painting: this.after_sc_painting,
            name_sc_finishing: this.name_sc_finishing,
            before_sc_finishing: this.before_sc_finishing,
            in_sc_finishing: this.in_sc_finishing,
            after_sc_finishing: this.after_sc_finishing,
            name_finished_good: this.name_finished_good,
            before_finished_good: this.before_finished_good,
            in_finished_good: this.in_finished_good,
            after_finished_good: this.after_finished_good,
            createdAt: this.createdAt,
            updatedAt: this.updatedAt,
            deletedAt: this.deletedAt,
        };
    }

    get id(): string {
        return this._id;
    }

    get part_name(): string {
        return this.props.part_name;
    }

    get name_casting(): string {
        return this.props.name_casting;
    }

    get before_casting(): string {
        return this.props.before_casting;
    }

    get in_casting(): string {
        return this.props.in_casting;
    }

    get name_machining(): string {
        return this.props.name_machining;
    }

    get before_machining(): string {
        return this.props.before_machining;
    }

    get in_machining(): string {
        return this.props.in_machining;
    }

    get after_machining(): string {
        return this.props.after_machining;
    }

    get name_painting(): string {
        return this.props.name_painting;
    }

    get before_paiting(): string {
        return this.props.before_paiting;
    }

    get in_painting(): string {
        return this.props.in_painting;
    }

    get after_painting(): string {
        return this.props.after_painting;
    }

    get name_sc_painting(): string {
        return this.props.name_sc_painting;
    }

    get before_sc_painting(): string {
        return this.props.before_sc_painting;
    }

    get in_sc_painting(): string {
        return this.props.in_sc_painting;
    }

    get after_sc_painting(): string {
        return this.props.after_sc_painting;
    }

    get name_sc_finishing(): string {
        return this.props.name_sc_finishing;
    }

    get before_sc_finishing(): string {
        return this.props.before_sc_finishing;
    }

    get in_sc_finishing(): string {
        return this.props.in_sc_finishing;
    }

    get after_sc_finishing(): string {
        return this.props.after_sc_finishing;
    }

    get name_finished_good(): string {
        return this.props.name_finished_good;
    }

    get before_finished_good(): string {
        return this.props.before_finished_good;
    }

    get in_finished_good(): string {
        return this.props.in_finished_good;
    }

    get after_finished_good(): string {
        return this.props.after_finished_good;
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
