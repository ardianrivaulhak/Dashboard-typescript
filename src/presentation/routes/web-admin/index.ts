import { Router } from "express";
import { injectable } from "inversify";
import { WebadminAuthRoute } from "./auth-route";
import { GeneralDashboardRoutes } from "./general-dashboard-route";
import { RawDataRoutes } from "./raw-data-routes";
import { UserRoutes } from "./user-routes";
import { DataStockRoutes } from "./data-stock-route";
@injectable()
export class WebRoutes {
    router = Router();

    constructor(
        private userRoute: UserRoutes,
        private authRoute: WebadminAuthRoute,
        private rawDataRoute: RawDataRoutes,
        private generalDashboardRoute: GeneralDashboardRoutes,
        private dataStockRoute: DataStockRoutes
    ) {
        this.setRoutes();
    }
    public setRoutes() {
        this.router.use("/user", this.userRoute.router);
        this.router.use("/auth", this.authRoute.router);
        this.router.use("/raw-data", this.rawDataRoute.router);
        this.router.use("/general", this.generalDashboardRoute.router);
        this.router.use("/datastock", this.dataStockRoute.router);
    }
}
