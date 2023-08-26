import { Entity } from "./entity";

export interface IMachine {
    id?: string;
    name: string;
    description: string;
    machineCode: string;
    location: string;
    createdAt?: Date;
    updatedAt?: Date | null;
    deletedAt?: Date | null;
}

export class Machine extends Entity<IMachine> {
    constructor(props: IMachine) {
        const { id, ...data } = props;
        super(data, id);
    }

    static create(props: IMachine): Machine {
        return new Machine(props);
    }

    public unmarshal(): IMachine {
        return {
            id: this._id,
            name: this.name,
            description: this.description,
            machineCode: this.machineCode,
            location: this.location,
            createdAt: this.createdAt,
            updatedAt: this.updatedAt,
            deletedAt: this.deletedAt,
        };
    }

    get id(): string {
        return this._id;
    }

    get name(): string {
        return this.props.name;
    }

    get description(): string {
        return this.props.description;
    }

    get machineCode(): string {
        return this.props.machineCode;
    }

    get location(): string {
        return this.props.location;
    }

    get createdAt(): undefined | Date {
        return this.props.createdAt;
    }
    get updatedAt(): undefined | Date | null {
        return this.props.updatedAt;
    }
    get deletedAt(): undefined | Date | null {
        return this.props.deletedAt;
    }
}
