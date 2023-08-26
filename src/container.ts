import "reflect-metadata";
import { Container } from "inversify";
import { TYPES } from "./types";

// Routes
import { Routes } from "@/presentation/routes/routes";
import { UserRoutes } from "@/presentation/routes/web-admin/user-routes";
import { WebadminAuthRoute } from "./presentation/routes/web-admin/auth-route";
import { RawDataRoutes } from "./presentation/routes/web-admin/raw-data-routes";
import { GeneralDashboardRoutes } from "./presentation/routes/web-admin/general-dashboard-route";
import { DataStockRoutes } from "./presentation/routes/web-admin/data-stock-route";

// Domain Repository
import { UserRepository } from "@/domain/service/user-repository";
import { RawDataRepository } from "@/domain/service/raw-data-repository";
import { GeneralDashboardRepository } from "@/domain/service/general-dashboard-repository";
import { DataStockRepository } from "@/domain/service/data-stock-repository";

// Domain Repository / Infrastructur implementation
import { UserSequelizeRepository } from "@/persistence/repository/user-sequelize-repository";
import { RawDataSequelizeRepository } from "@/persistence/repository/raw-data-sequelize-repository";
import { GeneralDashboardSequelizeRepository } from "@/persistence/repository/general-dashboard-sequelize-repository";
import { DataStockSequelizeRepository } from "@/persistence/repository/data-stock-sequelize-repository";

// Service Implementation
import { UserService } from "@/services/web-admin/user-service";
import { WebadminAuthService } from "./services/web-admin/auth-service";
import { RawDataService } from "./services/web-admin/raw-data-service";
import { GeneralDashboardService } from "./services/web-admin/general-dashboard-service";
import { DataStockService } from "./services/web-admin/data-stock-service";

// Controller
import UserController from "@/presentation/controllers/web-admin/user-controller";
import { WebadminAuthController } from "./presentation/controllers/web-admin/auth-controller";
import { RawDataController } from "./presentation/controllers/web-admin/raw-data-controller";
import { GeneralDashboardController } from "./presentation/controllers/web-admin/general-dashboard-controller";
import { DataStockController } from "./presentation/controllers/web-admin/data-stock-controller";

//Middleware
import { MobileAuthMiddleware } from "./presentation/middleware/auth-middleware";

// Bootstrap / kernel
import { IServer, Server } from "@/presentation/server";
import { WebRoutes } from "./presentation/routes/web-admin";

const container = new Container();

// Kernel Bootstrap
container.bind<IServer>(TYPES.Server).to(Server).inSingletonScope();

// Router
container.bind<Routes>(Routes).toSelf().inSingletonScope();
container.bind<WebRoutes>(WebRoutes).toSelf().inSingletonScope();
container.bind<UserRoutes>(UserRoutes).toSelf().inSingletonScope();
container
    .bind<WebadminAuthRoute>(WebadminAuthRoute)
    .toSelf()
    .inSingletonScope();
container.bind<RawDataRoutes>(RawDataRoutes).toSelf().inSingletonScope();
container
    .bind<GeneralDashboardRoutes>(GeneralDashboardRoutes)
    .toSelf()
    .inSingletonScope();
container.bind<DataStockRoutes>(DataStockRoutes).toSelf().inSingletonScope();

// Service Layer
// Mobile Service

// Web Admin Service
container.bind(TYPES.WebadminAuthService).to(WebadminAuthService);
container.bind(TYPES.UserService).to(UserService);
container.bind(TYPES.RawDataService).to(RawDataService);
container.bind(TYPES.GeneralDashboardService).to(GeneralDashboardService);
container.bind(TYPES.DataStockService).to(DataStockService);

// Controller
container.bind(UserController).toSelf();
container.bind(WebadminAuthController).toSelf();
container.bind(RawDataController).toSelf();
container.bind(GeneralDashboardController).toSelf();
container.bind(DataStockController).toSelf();

// Middleware
container.bind(MobileAuthMiddleware).toSelf();

// implement infrastructur
container
    .bind<UserRepository>(TYPES.UserRepository)
    .to(UserSequelizeRepository);
container
    .bind<RawDataRepository>(TYPES.RawDataRepository)
    .to(RawDataSequelizeRepository);
container
    .bind<GeneralDashboardRepository>(TYPES.GeneralDashboardRepository)
    .to(GeneralDashboardSequelizeRepository);
container
    .bind<DataStockRepository>(TYPES.DataStockRepository)
    .to(DataStockSequelizeRepository);

export { container };
