import { Step } from "@/dto/qr-tag-dto";
import { Entity } from "./entity";
import { Machine } from "./machine";
import { MaterialDescription } from "./material-description";

export interface IQrTag {
    id?: string;
    machineId?: string;
    materialId?: string;
    machine?: Machine;
    material?: MaterialDescription;
    itemId?: string;
    qrTagNumber: string;
    proNumber: string;
    plant: string;
    businessAreaDescription: string;
    customerCode: string;
    productionVersion: string;
    storageLocation: string;
    toStorageLocation?: string;
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
    tpDocument?: string;
    message?: string;
    step: Step;
    nrpOperator?: string;
    shiftCasting?: string;
    contentQrTag?: string;
    postingDate?: string;
    beforeCastingAt?: Date;
    castingAt?: Date;
    beforeMachiningAt?: Date;
    afterMachiningAt?: Date;
    updatedBy?: string;
    createdAt?: Date;
    updatedAt?: Date;
    deletedAt?: Date | null;
}

export class QrTag extends Entity<IQrTag> {
    constructor(props: IQrTag) {
        const { id, ...data } = props;
        super(data, id);
    }

    static create(props: IQrTag): QrTag {
        return new QrTag(props);
    }

    public unmarshal(): IQrTag {
        return {
            id: this._id,
            machineId: this.machineId,
            materialId: this.materialId,
            machine: this.machine,
            material: this.material,
            itemId: this.itemId,
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
            tpDocument: this.tpDocument,
            message: this.message,
            step: this.step,
            contentQrTag: this.contentQrTag,
            nrpOperator: this.nrpOperator,
            shiftCasting: this.shiftCasting,
            beforeCastingAt: this.beforeCastingAt,
            castingAt: this.castingAt,
            beforeMachiningAt: this.beforeMachiningAt,
            afterMachiningAt: this.afterMachiningAt,
            updatedBy: this.updatedBy,
            createdAt: this.createdAt,
            updatedAt: this.updatedAt,
            deletedAt: this.deletedAt,
        };
    }

    public casting(): QrTag {
        this.props.castingAt = new Date();
        // this.props.updatedBy = updatedById;
        return this;
    }

    public updateTp(data: string[]): QrTag {
        this.props.materialNumber = data[0];
        this.props.qtyQrTag = parseInt(data[1]);
        this.props.uom = data[2];
        this.props.plant = data[3];
        this.props.storageLocation = data[4];
        this.props.postingDate = data[5];
        this.props.tpDocument = data[6];
        this.props.message = data[7];
        return this;
    }

    public beforeMachining(): QrTag {
        this.props.beforeMachiningAt = new Date();
        // this.props.updatedBy = updatedById;
        return this;
    }

    public machining(): QrTag {
        this.props.afterMachiningAt = new Date();
        // this.props.updatedBy = updatedById;
        return this;
    }

    get id(): string {
        return this._id;
    }

    get machineId(): undefined | string {
        return this.props.machineId;
    }

    get machine(): undefined | Machine {
        return this.props.machine ?? undefined;
    }

    get materialId(): undefined | string {
        return this.props.materialId;
    }

    get material(): undefined | MaterialDescription {
        return this.props.material ?? undefined;
    }

    get itemId(): undefined | string {
        return this.props.itemId;
    }

    get nrpOperator(): undefined | string {
        return this.props.nrpOperator;
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

    get toStorageLocation(): string | undefined {
        return this.props.toStorageLocation;
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

    get tpDocument(): undefined | string {
        return this.props.tpDocument;
    }

    set tpDocument(val: string | undefined) {
        this.props.tpDocument = val;
    }

    get message(): undefined | string {
        return this.props.message;
    }

    get step(): Step {
        return this.props.step;
    }

    set step(val: Step) {
        this.props.step = val;
    }

    get contentQrTag(): string | undefined {
        return this.props.contentQrTag;
    }
    get shiftCasting(): undefined | string {
        return this.props.shiftCasting;
    }

    get beforeCastingAt(): undefined | Date {
        return this.props.beforeCastingAt;
    }

    set beforeCastingAt(val: undefined | Date) {
        this.props.beforeCastingAt = val;
    }

    get castingAt(): undefined | Date {
        return this.props.castingAt;
    }

    set castingAt(val: undefined | Date) {
        this.props.castingAt = val;
    }

    get beforeMachiningAt(): undefined | Date {
        return this.props.beforeMachiningAt;
    }

    get afterMachiningAt(): undefined | Date {
        return this.props.afterMachiningAt;
    }

    get updatedBy(): undefined | string {
        return this.props.updatedBy;
    }

    set updatedBy(val: string | undefined) {
        this.props.updatedBy = val;
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
