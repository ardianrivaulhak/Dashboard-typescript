import { Router } from "express";
import { injectable } from "inversify";
import { UserRoutes } from "./web-admin/user-routes";
import { WebadminAuthRoute } from "./web-admin/auth-route";
import { RawDataRoutes } from "./web-admin/raw-data-routes";
import { WebRoutes } from "./web-admin";

@injectable()
export class Routes {
    constructor(private WebRoutes: WebRoutes) {}

    public setRoutes(router: Router) {
        router.use("/web", this.WebRoutes.router);
    }
}
