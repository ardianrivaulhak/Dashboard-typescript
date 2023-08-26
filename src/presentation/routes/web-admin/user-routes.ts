import { container } from "@/container";
import asyncWrap from "@/libs/asyncWrapper";
import { Router } from "express";
import { injectable } from "inversify";
import UserController from "@/presentation/controllers/web-admin/user-controller";
import { MobileAuthMiddleware } from "@/presentation/middleware/auth-middleware";

@injectable()
export class UserRoutes {
    UserControllerInstance = container.get<UserController>(UserController);
    MobileAuthMiddlewareInstance =
        container.get<MobileAuthMiddleware>(MobileAuthMiddleware);

    public router = Router();

    constructor() {
        this.setRoutes();
    }

    public setRoutes() {
        this.router.get(
            "/",
            asyncWrap(
                this.UserControllerInstance.getDataTable.bind(
                    this.UserControllerInstance
                )
            )
        );

        this.router.get(
            "/:id",
            asyncWrap(
                this.UserControllerInstance.findUserById.bind(
                    this.UserControllerInstance
                )
            )
        );

        this.router.put(
            "/:id",
            this.MobileAuthMiddlewareInstance.handle.bind(
                this.MobileAuthMiddlewareInstance
            ),
            asyncWrap(
                this.UserControllerInstance.updateUser.bind(
                    this.UserControllerInstance
                )
            )
        );

        this.router.put("/:id/change-password");

        this.router.post(
            "/",
            // this.MobileAuthMiddlewareInstance.handle.bind(
            //     this.MobileAuthMiddlewareInstance
            // ),
            asyncWrap(
                this.UserControllerInstance.createUser.bind(
                    this.UserControllerInstance
                )
            )
        );

        this.router.delete(
            "/:id",
            this.MobileAuthMiddlewareInstance.handle.bind(
                this.MobileAuthMiddlewareInstance
            ),
            asyncWrap(
                this.UserControllerInstance.deleteUser.bind(
                    this.UserControllerInstance
                )
            )
        );
    }
}
