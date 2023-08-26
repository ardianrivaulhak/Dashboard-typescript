export interface IMonitoringDataTable {
    id: string
    qrTagNumber: string
    qtyQrTag: number
    itemDescription: string
    contentQrTag?: string
    itemId: string
    uom: string
    beforeCastingAt: Date | string | undefined | null
    castingAt: Date | string | undefined | null
    beforeMachiningAt: Date | string | undefined | null
    afterMachiningAt: Date | string | undefined | null
    createdAt: Date
    updatedAt: Date
}