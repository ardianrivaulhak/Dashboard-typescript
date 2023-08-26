import { container } from "@/container";
import asyncWrap from "@/libs/asyncWrapper";
import { Router } from "express";
import { injectable } from "inversify";
import { DataStockController } from "@/presentation/controllers/web-admin/data-stock-controller";
import { MobileAuthMiddleware } from "@/presentation/middleware/auth-middleware";

@injectable()
export class DataStockRoutes {
    DataStockControllerInstance =
        container.get<DataStockController>(DataStockController);

    MobileAuthMiddlewareInstance =
        container.get<MobileAuthMiddleware>(MobileAuthMiddleware);

    public router = Router();
    constructor() {
        this.setRoutes();
    }

    public setRoutes() {
        this.router.get(
            "/sap",
            this.MobileAuthMiddlewareInstance.handle.bind(
                this.MobileAuthMiddlewareInstance
            ),
            asyncWrap(
                this.DataStockControllerInstance.getStock.bind(
                    this.DataStockControllerInstance
                )
            )
        );
        this.router.post(
            "/",
            this.MobileAuthMiddlewareInstance.handle.bind(
                this.MobileAuthMiddlewareInstance
            ),
            asyncWrap(
                this.DataStockControllerInstance.create.bind(
                    this.DataStockControllerInstance
                )
            )
        );

        this.router.get(
            "/",
            this.MobileAuthMiddlewareInstance.handle.bind(
                this.MobileAuthMiddlewareInstance
            ),
            asyncWrap(
                this.DataStockControllerInstance.getDataTable.bind(
                    this.DataStockControllerInstance
                )
            )
        );

        this.router.get(
            "/:id",
            this.MobileAuthMiddlewareInstance.handle.bind(
                this.MobileAuthMiddlewareInstance
            ),
            asyncWrap(
                this.DataStockControllerInstance.findById.bind(
                    this.DataStockControllerInstance
                )
            )
        );

        this.router.put(
            "/:id",
            this.MobileAuthMiddlewareInstance.handle.bind(
                this.MobileAuthMiddlewareInstance
            ),
            asyncWrap(
                this.DataStockControllerInstance.update.bind(
                    this.DataStockControllerInstance
                )
            )
        );
    }
}
