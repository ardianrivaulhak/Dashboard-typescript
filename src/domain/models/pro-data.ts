import { Entity } from "./entity";
import { Machine } from "./machine";
import { MaterialDescription } from "./material-description";

export interface IProData {
    id?: string;
    machineId?: string;
    materialId?: string;
    machine?: Machine;
    material?: MaterialDescription;
    qrTagNumber: string;
    proNumber: string;
    plant: string;
    businessAreaDescription: string;
    customerCode: string;
    productionVersion: string;
    storageLocation: string;
    materialNumber: string;
    materialDescription: string;
    customerMaterialInfo: string;
    targetQtyPro: number;
    uomPro: string;
    qtyQrTag: number;
    uom: string;
    productionDatetime: Date;
    ahmSupplierId: string;
    noMachine: string;
    status: string;
    kanbanFlag?: string;
    updatedBy?: string;
    createdAt?: Date;
    updatedAt?: Date;
    deletedAt?: Date | null;
}

export class ProData extends Entity<IProData> {
    constructor(props: IProData) {
        const { id, ...data } = props;
        super(data, id);
    }

    static create(props: IProData): ProData {
        return new ProData(props);
    }

    public unmarshal(): IProData {
        return {
            id: this._id,
            machineId: this.machineId,
            materialId: this.materialId,
            machine: this.machine,
            material: this.material,
            qrTagNumber: this.qrTagNumber,
            proNumber: this.proNumber,
            plant: this.plant,
            businessAreaDescription: this.businessAreaDescription,
            customerCode: this.customerCode,
            productionVersion: this.productionVersion,
            storageLocation: this.storageLocation,
            materialNumber: this.materialNumber,
            materialDescription: this.materialDescription,
            customerMaterialInfo: this.customerMaterialInfo,
            targetQtyPro: this.targetQtyPro,
            uomPro: this.uomPro,
            qtyQrTag: this.qtyQrTag,
            uom: this.uom,
            productionDatetime: this.productionDatetime,
            ahmSupplierId: this.ahmSupplierId,
            noMachine: this.noMachine,
            status: this.status,
            kanbanFlag: this.kanbanFlag,
            createdAt: this.createdAt,
            updatedAt: this.updatedAt,
            deletedAt: this.deletedAt,
        };
    }

    get id(): string {
        return this._id;
    }

    get machineId(): string | undefined {
        return this.props.machineId;
    }

    get materialId(): string | undefined {
        return this.props.materialId;
    }

    get machine(): Machine | undefined {
        return this.props.machine;
    }

    get material(): MaterialDescription | undefined {
        return this.props.material;
    }

    get qrTagNumber(): string {
        return this.props.qrTagNumber;
    }

    get proNumber(): string {
        return this.props.proNumber;
    }

    get plant(): string {
        return this.props.plant;
    }

    get businessAreaDescription(): string {
        return this.props.businessAreaDescription;
    }

    get customerCode(): string {
        return this.props.customerCode;
    }

    get productionVersion(): string {
        return this.props.productionVersion;
    }

    get storageLocation(): string {
        return this.props.storageLocation;
    }

    get materialNumber(): string {
        return this.props.materialNumber;
    }

    get materialDescription(): string {
        return this.props.materialDescription;
    }

    get customerMaterialInfo(): string {
        return this.props.customerMaterialInfo;
    }

    get targetQtyPro(): number {
        return this.props.targetQtyPro;
    }

    get uomPro(): string {
        return this.props.uomPro;
    }

    get qtyQrTag(): number {
        return this.props.qtyQrTag;
    }

    get uom(): string {
        return this.props.uom;
    }

    get productionDatetime(): Date {
        return this.props.productionDatetime;
    }

    get ahmSupplierId(): string {
        return this.props.ahmSupplierId;
    }

    get noMachine(): string {
        return this.props.noMachine;
    }

    get status(): string {
        return this.props.status;
    }

    get kanbanFlag(): undefined | string {
        return this.props.kanbanFlag;
    }

    get createdAt(): undefined | Date {
        return this.props.createdAt;
    }

    get updatedAt(): undefined | Date {
        return this.props.updatedAt;
    }

    get deletedAt(): undefined | Date | null {
        return this.props.deletedAt;
    }
}
