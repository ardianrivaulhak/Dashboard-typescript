import { container } from "@/container";
import asyncWrap from "@/libs/asyncWrapper";
import { Router } from "express";
import { injectable } from "inversify";
import multer from "multer";
import { RawDataController } from "@/presentation/controllers/web-admin/raw-data-controller";
const upload = multer();
import { MobileAuthMiddleware } from "@/presentation/middleware/auth-middleware";

@injectable()
export class RawDataRoutes {
    RawDataControllerInstance =
        container.get<RawDataController>(RawDataController);
    MobileAuthMiddlewareInstance =
        container.get<MobileAuthMiddleware>(MobileAuthMiddleware);

    public router = Router();

    constructor() {
        this.setRoutes();
    }
    public setRoutes() {
        this.router.post(
            `/import`,
            upload.single("file"),
            this.MobileAuthMiddlewareInstance.handle.bind(
                this.MobileAuthMiddlewareInstance
            ),
            this.MobileAuthMiddlewareInstance.handle.bind(
                this.MobileAuthMiddlewareInstance
            ),
            asyncWrap(
                this.RawDataControllerInstance.importRawData.bind(
                    this.RawDataControllerInstance
                )
            )
        );
        this.router.get(
            `/`,
            this.MobileAuthMiddlewareInstance.handle.bind(
                this.MobileAuthMiddlewareInstance
            ),
            this.MobileAuthMiddlewareInstance.handle.bind(
                this.MobileAuthMiddlewareInstance
            ),
            asyncWrap(
                this.RawDataControllerInstance.findAll.bind(
                    this.RawDataControllerInstance
                )
            )
        );
    }
}
