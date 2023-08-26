import { container } from "@/container";
import asyncWrap from "@/libs/asyncWrapper";
import { Router } from "express";
import { injectable } from "inversify";
import { GeneralDashboardController } from "@/presentation/controllers/web-admin/general-dashboard-controller";
import { MobileAuthMiddleware } from "@/presentation/middleware/auth-middleware";

@injectable()
export class GeneralDashboardRoutes {
    GeneralDashboardControllerInstance =
        container.get<GeneralDashboardController>(GeneralDashboardController);
    MobileAuthMiddlewareInstance =
        container.get<MobileAuthMiddleware>(MobileAuthMiddleware);

    public router = Router();

    constructor() {
        this.setRoutes();
    }
    public setRoutes() {
        this.router.put(
            `/problems/:raw_data_id`,

            this.MobileAuthMiddlewareInstance.handle.bind(
                this.MobileAuthMiddlewareInstance
            ),
            asyncWrap(
                this.GeneralDashboardControllerInstance.updateProbles.bind(
                    this.GeneralDashboardControllerInstance
                )
            )
        );
        this.router.put(
            `/notes/:raw_data_id`,

            this.MobileAuthMiddlewareInstance.handle.bind(
                this.MobileAuthMiddlewareInstance
            ),
            asyncWrap(
                this.GeneralDashboardControllerInstance.updateNotes.bind(
                    this.GeneralDashboardControllerInstance
                )
            )
        );
        this.router.get(
            `/pending`,

            this.MobileAuthMiddlewareInstance.handle.bind(
                this.MobileAuthMiddlewareInstance
            ),
            asyncWrap(
                this.GeneralDashboardControllerInstance.getDataPending.bind(
                    this.GeneralDashboardControllerInstance
                )
            )
        );
        this.router.get(
            `/willbepending`,

            this.MobileAuthMiddlewareInstance.handle.bind(
                this.MobileAuthMiddlewareInstance
            ),
            asyncWrap(
                this.GeneralDashboardControllerInstance.getDataWillBePending.bind(
                    this.GeneralDashboardControllerInstance
                )
            )
        );
        this.router.get(
            `/willbependingdashboard/:raw_data_id`,

            this.MobileAuthMiddlewareInstance.handle.bind(
                this.MobileAuthMiddlewareInstance
            ),
            asyncWrap(
                this.GeneralDashboardControllerInstance.dashboardDataWillBePending.bind(
                    this.GeneralDashboardControllerInstance
                )
            )
        );
        this.router.get(
            `/newproject/:raw_data_id`,

            this.MobileAuthMiddlewareInstance.handle.bind(
                this.MobileAuthMiddlewareInstance
            ),
            asyncWrap(
                this.GeneralDashboardControllerInstance.dashboardDataNewProject.bind(
                    this.GeneralDashboardControllerInstance
                )
            )
        );
        this.router.get(
            `/new`,

            this.MobileAuthMiddlewareInstance.handle.bind(
                this.MobileAuthMiddlewareInstance
            ),
            asyncWrap(
                this.GeneralDashboardControllerInstance.getNewProject.bind(
                    this.GeneralDashboardControllerInstance
                )
            )
        );
    }
}
