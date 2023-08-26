import { Entity } from "./entity";
import { IMachine } from "./machine";
// import { Machine } from "./machine";

export interface IMaterialDescription {
    id?: string;
    materialNumber: string;
    materialDescription: string;
    machineId: string;
    machineData?: IMachine;
    createdAt?: Date;
    updatedAt?: Date | null;
    deletedAt?: Date | null;
}

export class MaterialDescription extends Entity<IMaterialDescription> {
    constructor(props: IMaterialDescription) {
        const { id, ...data } = props;
        super(data, id);
    }

    static create(props: IMaterialDescription): MaterialDescription {
        return new MaterialDescription(props);
    }

    public unmarshal(): IMaterialDescription {
        return {
            id: this.id,
            materialNumber: this.materialNumber,
            materialDescription: this.materialDescription,
            machineId: this.machineId,
            machineData: this.machineData,
            createdAt: this.createdAt,
            updatedAt: this.updatedAt,
            deletedAt: this.deletedAt,
        };
    }
    get id(): string {
        return this._id;
    }

    get materialNumber(): string {
        return this.props.materialNumber;
    }

    get materialDescription(): string {
        return this.props.materialDescription;
    }

    get machineId(): string {
        return this.props.machineId;
    }

    get machineData(): IMachine | undefined {
        return this.props.machineData;
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
