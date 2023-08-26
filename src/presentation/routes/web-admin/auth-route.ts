import { container } from "@/container";
import asyncWrap from "@/libs/asyncWrapper";
import { WebadminAuthController } from "@/presentation/controllers/web-admin/auth-controller";
import { MobileAuthMiddleware } from "@/presentation/middleware/auth-middleware";
import { Router } from "express";
import { injectable } from "inversify";

@injectable()
export class WebadminAuthRoute {
    WebadminAuthControllerInstance = container.get<WebadminAuthController>(
        WebadminAuthController
    );
    MobileAuthMiddlewareInstance =
        container.get<MobileAuthMiddleware>(MobileAuthMiddleware);
    public router = Router();

    constructor() {
        this.setRoutes();
    }
    public setRoutes() {
        this.router.get(
            `/me`,
            this.MobileAuthMiddlewareInstance.handle.bind(
                this.MobileAuthMiddlewareInstance
            ),
            asyncWrap(
                this.WebadminAuthControllerInstance.me.bind(
                    this.WebadminAuthControllerInstance
                )
            )
        );
        this.router.post(
            `/login`,
            asyncWrap(
                this.WebadminAuthControllerInstance.login.bind(
                    this.WebadminAuthControllerInstance
                )
            )
        );
    }
}
